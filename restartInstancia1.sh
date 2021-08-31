docker rm instancia1
docker rmi instancia1img
docker builder prune --force
<<<<<<< HEAD
docker build -t instancia1img .
=======
docker build --no-cache -t instancia1img .
>>>>>>> 9d0a09da5fbebab702352e0848b17d76f1896dbb
docker run -d --name instancia1 -p 9801:9800 --net mynet --ip 119.18.0.11 instancia1img
