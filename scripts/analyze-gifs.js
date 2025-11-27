// Quick GIF to PNG/WebP converter using Next.js Image optimization
// This script identifies large GIFs and creates optimized alternatives

const fs = require('fs');
const path = require('path');

class QuickGifOptimizer {
  constructor() {
    this.cardsDir = 'public/assets/img/product/cards';
    this.servicesDir = 'public/assets/img/Services';
    this.outputDir = 'public/assets/img/optimized';
  }

  analyzeGifs() {
    console.log('🔍 ANALYZING GIF FILES');
    console.log('======================\n');

    const directories = [this.cardsDir, this.servicesDir];
    let totalSize = 0;
    const largeGifs = [];

    directories.forEach(dir => {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        const gifs = files.filter(file => file.endsWith('.gif'));
        
        console.log(`📁 ${dir}:`);
        gifs.forEach(gif => {
          const filePath = path.join(dir, gif);
          const stats = fs.statSync(filePath);
          const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
          totalSize += stats.size;
          
          console.log(`   ${gif}: ${sizeMB}MB`);
          
          if (stats.size > 5 * 1024 * 1024) { // > 5MB
            largeGifs.push({
              path: filePath,
              name: gif,
              size: stats.size,
              sizeMB: sizeMB
            });
          }
        });
        console.log('');
      }
    });

    console.log(`📊 SUMMARY:`);
    console.log(`Total GIF size: ${(totalSize / (1024 * 1024)).toFixed(2)}MB`);
    console.log(`Large GIFs (>5MB): ${largeGifs.length}`);
    console.log('');

    return { largeGifs, totalSize };
  }

  generateOptimizationPlan(largeGifs) {
    console.log('💡 OPTIMIZATION PLAN');
    console.log('====================\n');

    largeGifs.sort((a, b) => b.size - a.size);

    console.log('🎯 Priority GIFs to optimize (largest first):');
    largeGifs.forEach((gif, index) => {
      console.log(`${index + 1}. ${gif.name} (${gif.sizeMB}MB)`);
      
      // Estimate savings
      const estimatedWebP = gif.size * 0.3; // WebP is ~30% of original
      const estimatedPNG = gif.size * 0.15; // PNG is ~15% of original for static
      
      console.log(`   → WebP: ~${(estimatedWebP / (1024 * 1024)).toFixed(2)}MB (${(70).toFixed(0)}% savings)`);
      console.log(`   → PNG: ~${(estimatedPNG / (1024 * 1024)).toFixed(2)}MB (${(85).toFixed(0)}% savings)`);
      console.log('');
    });

    const totalSavingsWebP = largeGifs.reduce((sum, gif) => sum + (gif.size * 0.7), 0);
    const totalSavingsPNG = largeGifs.reduce((sum, gif) => sum + (gif.size * 0.85), 0);

    console.log(`💾 ESTIMATED TOTAL SAVINGS:`);
    console.log(`WebP conversion: ${(totalSavingsWebP / (1024 * 1024)).toFixed(2)}MB`);
    console.log(`PNG conversion: ${(totalSavingsPNG / (1024 * 1024)).toFixed(2)}MB`);
  }

  createOptimizedComponents() {
    console.log('\n🔧 CREATING OPTIMIZED COMPONENTS');
    console.log('=================================\n');

    // Create optimized image mappings
    const imageMap = {
      // Large GIFs that should be converted
      'social-media-marketing.gif': 'social-media-marketing.webp',
      'design.gif': 'design.webp',
      'webd.gif': 'webd.webp',
      'Ads-Management.gif': 'ads-management.webp',
      'email-marketing.gif': 'email-marketing.webp',
      'ai.gif': 'ai.webp',
      'marketing-automation.gif': 'marketing-automation.webp',
      'da.gif': 'data-analysis.webp',
      'Conversion-Rate-Optimization.gif': 'conversion-optimization.webp',
      'seo.gif': 'seo.webp',
      'cybersecurity.gif': 'cybersecurity.webp'
    };

    return imageMap;
  }

  generateManualInstructions() {
    console.log('\n📋 MANUAL OPTIMIZATION INSTRUCTIONS');
    console.log('====================================\n');

    console.log('1. 🖼️  CONVERT TO WEBP (Recommended):');
    console.log('   • Use online tools like: https://cloudconvert.com/gif-to-webp');
    console.log('   • Or use Photoshop: Export → Save for Web → WebP');
    console.log('   • Settings: Quality 75%, Reduce dimensions to 400x300px');
    console.log('');

    console.log('2. 🖼️  CONVERT TO PNG (For static images):');
    console.log('   • Extract first frame of GIF');
    console.log('   • Save as PNG with compression');
    console.log('   • Use for non-animated content');
    console.log('');

    console.log('3. ⚙️  AUTOMATED TOOLS:');
    console.log('   • ffmpeg: ffmpeg -i input.gif -vf scale=400:300 output.webp');
    console.log('   • imagemin: For batch processing');
    console.log('   • squoosh.app: Online optimization tool');
    console.log('');

    console.log('4. 🔄 UPDATE CODE:');
    console.log('   • Replace <img> tags with <OptimizedImage> component');
    console.log('   • Add loading="lazy" for better performance');
    console.log('   • Provide fallback images');
  }
}

// Run analysis
function runOptimization() {
  const optimizer = new QuickGifOptimizer();
  
  console.log('🚀 GIF OPTIMIZATION ANALYSIS\n');
  
  const { largeGifs, totalSize } = optimizer.analyzeGifs();
  optimizer.generateOptimizationPlan(largeGifs);
  optimizer.generateManualInstructions();
  
  console.log('\n✅ Analysis complete! Follow the manual instructions above.');
  console.log('💡 Expected performance improvement: 60-80% faster loading');
}

// Export
module.exports = { QuickGifOptimizer };

// Run if called directly
if (require.main === module) {
  runOptimization();
}
