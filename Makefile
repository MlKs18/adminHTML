start:
	docker compose up -d
build:
	docker compose up -d --build

stop:
	docker compose down

fpm:
	docker exec -it api-app bash

c1:
	docker exec -it client-app sh

	
