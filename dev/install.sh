sudo yum update -y
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 
sudo yum install -y docker-ce 
sudo systemctl enable docker 
sudo systemctl start docker 
sudo systemctl status docker 
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose 
sudo chmod +x /usr/local/bin/docker-compose 
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose 
sudo docker-compose --version 
mkdir uploads-polda
mkdir uploads-polri
cd ~/bpkb-deployment/dev/database-host && docker-compose down && docker-compose up -d --build
cd ~/bpkb-deployment/dev/application-host && docker-compose down && docker-compose up -d --build