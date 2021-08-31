docker rm instancia2
docker rmi instancia2img
docker builder prune --force

docker build --no-cache -t instancia2img .
docker run -d --name instancia2 -p 9802:9800 --net mynet --ip 119.18.0.22 instancia2img

#docker start instancia2
#docker exec instancia1 bash -c "git pull; pm2 stop inde.js; pm2 start inde.js"

