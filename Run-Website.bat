@echo off
title Vantix Digital - Localhost Dev Server
color 0A

echo =======================================================
echo          VANTIX DIGITAL - NEXT.JS LOCALHOST
echo =======================================================
echo.
echo [1/2] Opening browser at http://localhost:3000 in 3 seconds...
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3000"

echo [2/2] Starting Next.js development server...
echo.
echo Server run ho raha hai! Browser khul jayega...
echo.
call npm.cmd run dev

pause
