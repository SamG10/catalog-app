# Docker pull catalog docker hub image and run postgres

`docker pull samg1008/catalog-app:latest`

`docker run -d -p 5432:5432 --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=catalog --network app-network postgres:17-alpine`

We have to run postgres on the same network and with service name : postgres
