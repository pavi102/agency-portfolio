docker-compose down

docker rmi express --force
docker system prune --force

cd ..
cd backend
docker build -t react:latest .

cd ..
cd deployment

docker-compose up -d