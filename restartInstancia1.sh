# docker rm instancia1
# docker rmi instancia1img
# docker builder prune --force

# docker build --no-cache -t instancia1img .
# docker run -d --name instancia1 -p 9801:9800 --net mynet --ip 119.18.0.11 instancia1img

docker start instancia1
docker exec instancia1 bash -c "git pull; pm2 stop index.js; pm2 start index.js"