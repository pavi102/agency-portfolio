cd ..
cd backend
docker build -t express:latest .

cd ..
cd frontend
docker build -t react:latest .

cd ..
cd deployment
docker-compose up -d