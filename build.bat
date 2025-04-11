@echo off
echo Building the application...
call npm run build

echo Copying .htaccess file to dist directory...
copy .htaccess dist\

echo Creating backup of current deployment...
set timestamp=%date:~-4,4%%date:~-10,2%%date:~-7,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set timestamp=%timestamp: =0%

if exist dist_backup (
    ren "dist_backup" "dist_backup_%timestamp%"
)

echo Moving new build to deployment directory...
if exist dist_backup (
    rmdir /s /q dist_backup
)
ren dist dist_backup

echo Build completed successfully!
echo The new build is in the dist_backup directory.
echo To deploy, copy the contents of dist_backup to your web server. 