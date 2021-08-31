docker rm instancia2
docker rmi instancia2img
docker builder prune --force
docker build -t instancia2img .
docker run -d --name instancia2 -p 9801:9800 --net mynet --ip 119.18.0.11 instancia2img
