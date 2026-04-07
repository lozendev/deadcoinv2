@echo off
echo Building the Vite + React application...
call npm run build
echo Deploying to GitHub Pages...
call npx gh-pages -d dist
echo Deployment complete!
pause
