source /home/ec2-user/.bash_profile
export NVM_DIR="/home/ec2-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
cd /bike-app/backend
pm2 delete all
PORT=80 NODE_ENV=production pm2 start build/index.js 