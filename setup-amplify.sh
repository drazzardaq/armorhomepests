#!/bin/bash

APP_PATH="armor" # The subfolder for deployment

# 1. Update vite.config.js with the new base path
echo "🔧 Updating vite.config.js..."
if grep -q "base:" vite.config.js; then
  sed -i '' "s|base: .*|base: '/$APP_PATH/',|" vite.config.js
else
  echo "base: '/$APP_PATH/'," >> vite.config.js
fi

# 2. Update router/index.js to set the correct history base path
echo "🔧 Updating router base path in src/router/index.js..."
if grep -q "createWebHistory" src/router/index.js; then
  sed -i '' "s|createWebHistory(.*)|createWebHistory('/$APP_PATH/'),|" src/router/index.js
else
  echo "createWebHistory('/$APP_PATH/')" >> src/router/index.js
fi

# 3. Create amplify.yml in the project root
echo "📝 Creating amplify.yml..."
cat <<EOF > amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
  customHeaders:
    - pattern: "**"
      headers:
        - key: "Cache-Control"
          value: "no-cache"
  redirects:
    - source: "/$APP_PATH/<*>"
      target: "/$APP_PATH/index.html"
      status: "200"
EOF

echo "✅ All set! Now commit & push your changes with:"
echo "   git add . && git commit -m 'Setup AWS Amplify deployment to /$APP_PATH' && git push"
