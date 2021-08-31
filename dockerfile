#construye la imagen para crear los contenedores de las instancias
FROM node

ENV TZ=America/Bogota
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt update
RUN apt upgrade -y

RUN apt install openssh-server -y
RUN npm install pm2 -g

RUN mkdir lab1
WORKDIR /home/lab1
RUN git clone --branch main https://github.com/drox13/SD-lab1-instances.git

WORKDIR /home/lab1/SD-lab1-instances
RUN npm install

EXPOSE 9800
CMD ["pm2-runtime", "index.js"]
