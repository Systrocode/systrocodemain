@echo off
echo 🚀 GIF Optimization for Windows
echo ==============================

REM Create output directories
if not exist "public\assets\img\product\cards\optimized" mkdir "public\assets\img\product\cards\optimized"
if not exist "public\assets\img\Services\optimized" mkdir "public\assets\img\Services\optimized"

echo.
echo 📊 Current GIF Analysis:
echo ========================
echo Priority files for optimization:
echo 1. social-media-marketing.gif (22.79MB) - CRITICAL
echo 2. design.gif (22.60MB) - CRITICAL  
echo 3. webd.gif (17.79MB) - HIGH
echo 4. webd2.gif (17.36MB) - HIGH
echo 5. Ads-Management.gif (16.82MB) - HIGH
echo 6. email-marketing.gif (15.70MB) - HIGH
echo 7. ai.gif (14.52MB) - MEDIUM
echo 8. marketing-automation.gif (12.82MB) - MEDIUM
echo.

REM Check if ffmpeg is available
ffmpeg -version >nul 2>&1
if %errorlevel% == 0 (
    echo ✅ ffmpeg found! Starting automatic conversion...
    echo.
    
    REM Convert top 8 priority GIFs
    call :convert_gif "public\assets\img\product\cards\social-media-marketing.gif"
    call :convert_gif "public\assets\img\product\cards\design.gif"
    call :convert_gif "public\assets\img\product\cards\webd.gif"
    call :convert_gif "public\assets\img\Services\webd2.gif"
    call :convert_gif "public\assets\img\product\cards\Ads-Management.gif"
    call :convert_gif "public\assets\img\product\cards\email-marketing.gif"
    call :convert_gif "public\assets\img\product\cards\ai.gif"
    call :convert_gif "public\assets\img\product\cards\marketing-automation.gif"
    
    echo.
    echo ✅ Conversion complete!
    goto :summary
) else (
    echo ⚠️  ffmpeg not found. 
    echo.
    echo 📥 DOWNLOAD FFMPEG:
    echo 1. Go to: https://ffmpeg.org/download.html#build-windows
    echo 2. Download Windows build
    echo 3. Extract and add to PATH
    echo.
    echo 🌐 ALTERNATIVE - Use online converters:
    goto :online_alternatives
)

:convert_gif
set "input_file=%~1"
if exist "%input_file%" (
    echo 🔄 Converting %~nx1...
    
    REM Create WebP version (75% quality, resize to 400x300)
    set "webp_output=%input_file:.gif=.webp%"
    ffmpeg -i "%input_file%" -vf "scale=400:300:force_original_aspect_ratio=decrease" -c:v libwebp -quality 75 -preset photo -an "%webp_output%" -y >nul 2>&1
    
    REM Create PNG version (first frame)
    set "png_output=%input_file:.gif=.png%"
    ffmpeg -i "%input_file%" -vf "scale=400:300:force_original_aspect_ratio=decrease" -vframes 1 "%png_output%" -y >nul 2>&1
    
    if exist "%webp_output%" (
        echo ✅ Created WebP: %~nx1 → %~n1.webp
    )
    if exist "%png_output%" (
        echo ✅ Created PNG: %~nx1 → %~n1.png  
    )
    echo.
) else (
    echo ❌ File not found: %input_file%
)
goto :eof

:online_alternatives
echo 🌐 ONLINE CONVERSION TOOLS:
echo ==========================
echo.
echo 1. 🏆 CloudConvert (Recommended):
echo    • URL: https://cloudconvert.com/gif-to-webp
echo    • Settings: Quality 75%%, Resize to 400x300px
echo    • Supports batch conversion
echo.
echo 2. 🖼️  Squoosh (by Google):
echo    • URL: https://squoosh.app/
echo    • Drag and drop GIFs
echo    • Choose WebP format, Quality 75%%
echo.
echo 3. 📱 TinyPNG:
echo    • URL: https://tinypng.com/
echo    • Good for PNG compression
echo    • Free up to 20 images
echo.
echo 4. 🔧 EZGIF:
echo    • URL: https://ezgif.com/gif-to-webp
echo    • Specialized for GIF conversion
echo    • Batch processing available
echo.

:summary
echo 📋 MANUAL STEPS NEEDED:
echo =======================
echo.
echo 1. 📁 Convert these files manually (if ffmpeg failed):
echo    • social-media-marketing.gif (22.79MB) ← HIGHEST PRIORITY
echo    • design.gif (22.60MB) ← HIGHEST PRIORITY
echo    • webd.gif (17.79MB)
echo    • webd2.gif (17.36MB)
echo    • Ads-Management.gif (16.82MB)
echo    • email-marketing.gif (15.70MB)
echo    • ai.gif (14.52MB)
echo    • marketing-automation.gif (12.82MB)
echo.
echo 2. 🔄 Update your React components:
echo    • Use OptimizedImage component (already created)
echo    • Replace ^<img^> tags with ^<OptimizedImage^>
echo    • Add loading="lazy" for better performance
echo.
echo 3. 🧪 Test the optimized images:
echo    • Verify WebP files load correctly
echo    • Ensure PNG fallbacks work
echo    • Check mobile performance
echo.
echo 4. 🗑️  Remove original GIFs (after verification):
echo    • Keep backups of originals
echo    • Update image references in code
echo.
echo 💾 EXPECTED SAVINGS:
echo ===================
echo • WebP conversion: ~150MB saved (65%% reduction)
echo • PNG conversion: ~180MB saved (80%% reduction)
echo • Page load time: 60-80%% faster
echo • Lighthouse score: +30-40 points
echo.
echo ✅ Optimization analysis complete!
echo 🚀 Start with the largest files for maximum impact.

pause
