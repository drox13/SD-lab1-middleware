docker rm instancia2
docker rmi instancia2img
docker builder prune
docker build -t instancia1img .
docker run -d --name instancia1 -p 9801:9800 --net mynet --ip 119.18.0.11 instancia2img
