#!/bin/bash

# Set variables
REPO_URL="https://github.com/massimo1220/hypnobirthing.git"  # Replace with your repository URL
PROJECT_DIR=""              # Replace with the desired project directory
SERVER_DIR="$PROJECT_DIR/hypnobirthing"             # Replace with the server directory if different

# Change to the project directory
cd "$PROJECT_DIR" || exit 1

# Pull the latest changes from the repository
git pull "$REPO_URL"

# Install dependencies
cd "$SERVER_DIR" || exit 1
yarn install

# Start the server (replace with your own command)
yarn build
yarn start

# Clean up
cd "$PROJECT_DIR" || exit 1
yarn cache clean

# Display completion message
echo "Deployment completed!"