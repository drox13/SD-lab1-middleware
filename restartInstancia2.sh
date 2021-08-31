docker rm instancia2
docker rmi instancia2img
docker builder prune --force
<<<<<<< HEAD
docker build -t instancia2img .
=======
docker build --no-cache -t instancia2img .
>>>>>>> 9d0a09da5fbebab702352e0848b17d76f1896dbb
docker run -d --name instancia2 -p 9801:9800 --net mynet --ip 119.18.0.11 instancia2img
