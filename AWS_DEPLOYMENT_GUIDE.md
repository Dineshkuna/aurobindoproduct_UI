# AWS Deployment Guide - Quick Reference

## Prerequisites
- AWS EC2 Instance (t2.micro or larger)
- Ubuntu 20.04+ or Amazon Linux 2
- Security Group: Open ports 3000, 3030, 8080

---

## Quick Deploy Steps

### 1. Launch EC2 Instance
- Instance Type: t2.micro (Free Tier)
- OS: Ubuntu 20.04 LTS
- Security Group: Add Inbound Rules
  - Port 3000 (Admin)
  - Port 3030 (Client)
  - Port 8080 (Backend)
  - Port 80 (HTTP)
  - Port 443 (HTTPS)

### 2. Connect to EC2
```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

### 3. Run Deployment Script
```bash
cd /home/ubuntu/aurobindo
chmod +x deploy.sh
./deploy.sh
```

### 4. Update Production URLs
After first deploy, update:
```bash
# client/.env.production
NEXT_PUBLIC_API_URL=http://your-ec2-ip:8080

# admin/.env.production
NEXT_PUBLIC_API_URL=http://your-ec2-ip:8080
```

### 5. Rebuild and Restart
```bash
cd client && npm run build && cd ..
cd admin && npm run build && cd ..
pm2 restart all
```

---

## Useful PM2 Commands

| Command | Description |
|---------|-------------|
| `pm2 list` | Show all services |
| `pm2 logs` | View all logs |
| `pm2 logs backend` | View backend logs only |
| `pm2 restart all` | Restart all services |
| `pm2 stop all` | Stop all services |
| `pm2 start all` | Start all services |
| `pm2 monit` | Monitor in real-time |

---

## Troubleshooting

### Check if services are running
```bash
pm2 list
```

### Check logs
```bash
pm2 logs --lines 50
```

### Restart a specific service
```bash
pm2 restart backend
```

### Check if port is listening
```bash
sudo netstat -tlnp | grep 8080
```

---

## File Structure on EC2

```
/home/ubuntu/aurobindo/
├── server/          # Backend API
├── client/          # Main Website
├── admin/           # Admin Panel
├── ecosystem.config.js  # PM2 config
├── deploy.sh       # Deployment script
└── logs/           # PM2 logs
```

---

## Access URLs

- **Client (Main Website):** http://your-ec2-ip:3030
- **Admin Panel:** http://your-ec2-ip:3000
- **Backend API:** http://your-ec2-ip:8080

---

## Next Steps After Deployment

1. **Configure Domain** (optional)
   - Point domain to EC2 IP
   - Use Route 53 or external DNS

2. **Set up SSL** (optional but recommended)
   - Use Let's Encrypt for free SSL
   - Install nginx as reverse proxy

3. **Set up MongoDB**
   - Use MongoDB Atlas (cloud) or
   - Install MongoDB on EC2

---

## Need Help?

Ping me with:
- Error messages
- Which step you're stuck on
- EC2 instance details (IP, security group)