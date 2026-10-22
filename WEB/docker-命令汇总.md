```
docker build . -t hub.wewin.com.cn:9500/codemaker:1.0.0

docker push hub.wewin.com.cn:9500/codemaker:1.0.0

docker tag hub.wewin.com.cn:9500/codemaker:1.0.0 hub.wewin.com.cn:9500/codemaker:latest

docker images

docker ps / docker ps -a

docker exec -it mongo_codemaker /bin/bash / docker exec -it mongo_codemaker /bin/sh

docker stop codemaker

docker start codemaker 

docker restart codemaker

docker rmi -f 7c7d2401d4bb

docker-compose up -d

docker logs codemaker
```
