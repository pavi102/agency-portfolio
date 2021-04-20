docker-compose down

docker rmi react --force
docker system prune --force

cd ..
cd frontend
docker build -t react:latest .

cd ..
cd deployment

docker-compose up -d