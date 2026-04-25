// PM2 Ecosystem Configuration
// Run with: pm2 start ecosystem.config.js

module.exports = {
  apps: [
    // Backend API Server
    {
      name: 'backend',
      script: 'index.js',
      cwd: './server',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'development',
        PORT: 8080
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080
      },
      error_file: './logs/backend-error.log',
      out_file: './logs/backend-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M'
    },

    // Client Frontend
    {
      name: 'client',
      script: 'npm',
      args: 'start -- -p 3030',
      cwd: './client',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'development',
        PORT: 3030
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3030
      },
      error_file: './logs/client-error.log',
      out_file: './logs/client-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M'
    },

    // Admin Frontend
    {
      name: 'admin',
      script: 'npm',
      args: 'start',
      cwd: './admin',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/admin-error.log',
      out_file: './logs/admin-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M'
    }
  ]
};