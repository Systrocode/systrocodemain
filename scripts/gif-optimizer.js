const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

class GifOptimizer {
  constructor() {
    this.inputDir = 'public/assets/img/product/cards';
    this.outputDir = 'public/assets/img/product/cards/optimized';
    this.largeGifs = [
      'social-media-marketing.gif', // 23.9MB
      'design.gif', // 23.7MB
      'webd.gif', // 18.7MB
      'Ads-Management.gif', // 17.6MB
      'email-marketing.gif', // 16.5MB
      'ai.gif', // 15.2MB
      'marketing-automation.gif', // 13.4MB
      'da.gif', // 12.9MB
      'Conversion-Rate-Optimization.gif', // 12.9MB
      'seo.gif', // 12.4MB
      'cybersecurity.gif' // 11.7MB
    ];
  }

  async init() {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  async optimizeGif(inputPath, outputPath, options = {}) {
    const {
      width = 400,
      height = 300,
      quality = 80,
      effort = 6
    } = options;

    try {
      console.log(`🔄 Optimizing: ${path.basename(inputPath)}`);
      
      // Get original file size
      const originalStats = fs.statSync(inputPath);
      const originalSizeMB = (originalStats.size / (1024 * 1024)).toFixed(2);
      
      // Convert to WebP (much smaller than GIF)
      const webpOutput = outputPath.replace('.gif', '.webp');
      await sharp(inputPath)
        .resize(width, height, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .webp({ 
          quality,
          effort,
          lossless: false
        })
        .toFile(webpOutput);

      // Also create PNG fallback for static frame
      const pngOutput = outputPath.replace('.gif', '.png');
      await sharp(inputPath)
        .resize(width, height, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .png({ 
          quality,
          compressionLevel: 9
        })
        .toFile(pngOutput);

      // Get optimized file sizes
      const webpStats = fs.statSync(webpOutput);
      const pngStats = fs.statSync(pngOutput);
      const webpSizeMB = (webpStats.size / (1024 * 1024)).toFixed(2);
      const pngSizeMB = (pngStats.size / (1024 * 1024)).toFixed(2);
      
      const webpReduction = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);
      const pngReduction = ((1 - pngStats.size / originalStats.size) * 100).toFixed(1);

      console.log(`✅ ${path.basename(inputPath)}:`);
      console.log(`   Original: ${originalSizeMB}MB`);
      console.log(`   WebP: ${webpSizeMB}MB (-${webpReduction}%)`);
      console.log(`   PNG: ${pngSizeMB}MB (-${pngReduction}%)`);
      console.log('');

      return {
        original: originalStats.size,
        webp: webpStats.size,
        png: pngStats.size,
        webpReduction,
        pngReduction
      };
    } catch (error) {
      console.error(`❌ Error optimizing ${inputPath}:`, error.message);
      return null;
    }
  }

  async optimizeAll() {
    await this.init();
    
    console.log('🚀 Starting GIF Optimization Process');
    console.log('=====================================\n');

    let totalOriginalSize = 0;
    let totalWebpSize = 0;
    let totalPngSize = 0;
    let optimizedCount = 0;

    for (const gif of this.largeGifs) {
      const inputPath = path.join(this.inputDir, gif);
      const outputPath = path.join(this.outputDir, gif);
      
      if (fs.existsSync(inputPath)) {
        const result = await this.optimizeGif(inputPath, outputPath, {
          width: 400,
          height: 300,
          quality: 75
        });
        
        if (result) {
          totalOriginalSize += result.original;
          totalWebpSize += result.webp;
          totalPngSize += result.png;
          optimizedCount++;
        }
      } else {
        console.log(`⚠️  File not found: ${inputPath}`);
      }
    }

    // Summary
    console.log('📊 OPTIMIZATION SUMMARY');
    console.log('=======================');
    console.log(`Files processed: ${optimizedCount}`);
    console.log(`Original total size: ${(totalOriginalSize / (1024 * 1024)).toFixed(2)}MB`);
    console.log(`WebP total size: ${(totalWebpSize / (1024 * 1024)).toFixed(2)}MB`);
    console.log(`PNG total size: ${(totalPngSize / (1024 * 1024)).toFixed(2)}MB`);
    console.log(`WebP savings: ${((1 - totalWebpSize / totalOriginalSize) * 100).toFixed(1)}%`);
    console.log(`PNG savings: ${((1 - totalPngSize / totalOriginalSize) * 100).toFixed(1)}%`);
    
    const webpSavingsMB = ((totalOriginalSize - totalWebpSize) / (1024 * 1024)).toFixed(2);
    const pngSavingsMB = ((totalOriginalSize - totalPngSize) / (1024 * 1024)).toFixed(2);
    
    console.log(`\n💾 Space saved with WebP: ${webpSavingsMB}MB`);
    console.log(`💾 Space saved with PNG: ${pngSavingsMB}MB`);
  }

  // Alternative: Create low-quality GIF versions
  async createLowQualityGifs() {
    console.log('\n🔄 Creating low-quality GIF alternatives...\n');
    
    for (const gif of this.largeGifs) {
      const inputPath = path.join(this.inputDir, gif);
      const outputPath = path.join(this.outputDir, gif.replace('.gif', '_compressed.gif'));
      
      if (fs.existsSync(inputPath)) {
        try {
          // Note: Sharp doesn't handle GIF optimization well
          // This would require a different library like gifsicle
          console.log(`📝 Would compress: ${gif} -> ${path.basename(outputPath)}`);
        } catch (error) {
          console.error(`❌ Error with ${gif}:`, error.message);
        }
      }
    }
  }
}

// Usage
async function optimizeGifs() {
  const optimizer = new GifOptimizer();
  await optimizer.optimizeAll();
}

// Export for use
module.exports = { GifOptimizer, optimizeGifs };

// Run if called directly
if (require.main === module) {
  optimizeGifs().catch(console.error);
}
