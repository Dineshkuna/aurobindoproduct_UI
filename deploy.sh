#!/bin/bash

# Aurobindo Pharma - AWS Deployment Script
# Run this script on your AWS EC2 instance

echo "========================================="
echo "  Aurobindo Pharma - Deployment Script"
echo "========================================="

# Update system
echo "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js
echo "Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
echo "Installing PM2..."
sudo npm install -g pm2

# Install Git
echo "Installing Git..."
sudo apt install -y git

# Clone your repository
echo "Cloning repository..."
cd /home/ubuntu
git clone your-git-repo-url aurobindo
cd aurobindo

# Install dependencies for all apps
echo "Installing server dependencies..."
cd server && npm install && cd ..

echo "Installing client dependencies..."
cd client && npm install && cd ..

echo "Installing admin dependencies..."
cd admin && npm install && cd ..

# Create logs directory
echo "Creating logs directory..."
mkdir -p logs

# Build frontends
echo "Building client..."
cd client && npm run build && cd ..

echo "Building admin..."
cd admin && npm run build && cd ..

# Start all services with PM2
echo "Starting all services..."
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
echo "Saving PM2 configuration..."
pm2 save

# Setup PM2 startup script
echo "Setting up PM2 startup script..."
sudo env PATH=$PATH:/usr/local/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu

echo "========================================="
echo "  Deployment Complete!"
echo "========================================="
echo ""
echo "Services running:"
pm2 list
echo ""
echo "Access your apps:"
echo "- Client: http://your-ec2-ip:3030"
echo "- Admin:  http://your-ec2-ip:3000"
echo "- Backend: http://your-ec2-ip:8080"
echo ""
echo "Useful commands:"
echo "- pm2 logs        : View logs"
echo "- pm2 restart all : Restart all services"
echo "- pm2 stop all    : Stop all services"