@echo off
title Vantix Digital - Localhost Dev Server
color 0A

echo =======================================================
echo          VANTIX DIGITAL - NEXT.JS LOCALHOST
echo =======================================================
echo.
echo [1/3] Navigating to Next.js project directory...
cd /d "%~dp0\Vantix Digital Next JS"

echo [2/3] Opening browser at http://localhost:3000 in 3 seconds...
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3000"

echo [3/3] Starting Next.js development server...
echo.
echo Server run ho raha hai! Browser khul jayega...
echo (Is window ko band mat kariyega jab tak website chalani ho)
echo.
call npm.cmd run dev

pause
