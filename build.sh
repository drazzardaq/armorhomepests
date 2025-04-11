#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Copy the .htaccess file to the dist directory
echo "Copying .htaccess file to dist directory..."
cp .htaccess dist/

# Create a backup of the current deployment
echo "Creating backup of current deployment..."
timestamp=$(date +%Y%m%d%H%M%S)
if [ -d "dist_backup" ]; then
  rm -rf "dist_backup_$timestamp"
  mv dist_backup "dist_backup_$timestamp"
fi

# Move the new build to the deployment directory
echo "Moving new build to deployment directory..."
if [ -d "dist_backup" ]; then
  rm -rf dist_backup
fi
mv dist dist_backup

echo "Build completed successfully!"
echo "The new build is in the dist_backup directory."
echo "To deploy, copy the contents of dist_backup to your web server." 