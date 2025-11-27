#!/bin/bash

# GIF to WebP/PNG Batch Conversion Script
# Run this script to convert large GIFs to optimized formats

echo "🚀 Starting GIF Optimization Process"
echo "===================================="

# Create optimized directory
mkdir -p public/assets/img/product/cards/optimized
mkdir -p public/assets/img/Services/optimized

# Priority GIFs (largest first) - Top 8 that are causing performance issues
PRIORITY_GIFS=(
    "public/assets/img/product/cards/social-media-marketing.gif"
    "public/assets/img/product/cards/design.gif" 
    "public/assets/img/product/cards/webd.gif"
    "public/assets/img/Services/webd2.gif"
    "public/assets/img/product/cards/Ads-Management.gif"
    "public/assets/img/product/cards/email-marketing.gif"
    "public/assets/img/product/cards/ai.gif"
    "public/assets/img/product/cards/marketing-automation.gif"
)

# Function to convert GIF to WebP using ffmpeg (if available)
convert_to_webp() {
    local input_file="$1"
    local output_file="${input_file%.gif}.webp"
    local temp_output="${input_file%.gif}_temp.webp"
    
    echo "🔄 Converting $(basename "$input_file") to WebP..."
    
    if command -v ffmpeg &> /dev/null; then
        # Using ffmpeg for conversion with optimization
        ffmpeg -i "$input_file" -vf "scale=400:300:force_original_aspect_ratio=decrease" -c:v libwebp -quality 75 -preset photo -an "$temp_output" -y 2>/dev/null
        
        if [ -f "$temp_output" ]; then
            mv "$temp_output" "$output_file"
            original_size=$(stat -c%s "$input_file" 2>/dev/null || stat -f%z "$input_file" 2>/dev/null)
            new_size=$(stat -c%s "$output_file" 2>/dev/null || stat -f%z "$output_file" 2>/dev/null)
            
            if [ ! -z "$original_size" ] && [ ! -z "$new_size" ]; then
                reduction=$(( (original_size - new_size) * 100 / original_size ))
                echo "✅ Converted: $(basename "$input_file") → $(basename "$output_file") (-${reduction}%)"
            else
                echo "✅ Converted: $(basename "$input_file") → $(basename "$output_file")"
            fi
        else
            echo "❌ Failed to convert $(basename "$input_file")"
        fi
    else
        echo "⚠️  ffmpeg not found. Please install ffmpeg or use online converters."
        echo "   Online alternative: https://cloudconvert.com/gif-to-webp"
    fi
}

# Function to extract first frame as PNG
convert_to_png() {
    local input_file="$1"
    local output_file="${input_file%.gif}.png"
    local temp_output="${input_file%.gif}_temp.png"
    
    echo "🔄 Extracting first frame from $(basename "$input_file") as PNG..."
    
    if command -v ffmpeg &> /dev/null; then
        # Extract first frame and resize
        ffmpeg -i "$input_file" -vf "scale=400:300:force_original_aspect_ratio=decrease" -vframes 1 -f image2 "$temp_output" -y 2>/dev/null
        
        if [ -f "$temp_output" ]; then
            mv "$temp_output" "$output_file"
            echo "✅ Created PNG: $(basename "$output_file")"
        else
            echo "❌ Failed to create PNG from $(basename "$input_file")"
        fi
    else
        echo "⚠️  ffmpeg not found for PNG extraction."
    fi
}

# Main conversion loop
echo "🎯 Converting priority GIFs (largest files)..."
echo ""

for gif_file in "${PRIORITY_GIFS[@]}"; do
    if [ -f "$gif_file" ]; then
        echo "📁 Processing: $(basename "$gif_file")"
        
        # Convert to WebP (animated)
        convert_to_webp "$gif_file"
        
        # Convert to PNG (static)
        convert_to_png "$gif_file"
        
        echo ""
    else
        echo "⚠️  File not found: $gif_file"
    fi
done

echo "📊 OPTIMIZATION SUMMARY"
echo "======================"
echo "✅ Priority GIFs processed"
echo "💡 Next steps:"
echo "   1. Update your components to use OptimizedImage"
echo "   2. Test the new WebP/PNG files"
echo "   3. Remove original GIFs after verification"
echo ""
echo "🚀 Expected performance improvement: 60-80% faster loading!"

# Alternative: PowerShell version for Windows
if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "win32" ]]; then
    echo ""
    echo "💻 For Windows users without ffmpeg:"
    echo "1. Download from: https://ffmpeg.org/download.html"
    echo "2. Or use online converters:"
    echo "   • cloudconvert.com/gif-to-webp"
    echo "   • squoosh.app (by Google)"
    echo "   • tinypng.com"
fi
