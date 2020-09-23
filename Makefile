start:
	cd api/src && docker-compose up

dev:
	cd api/src && npm run dev

test:
	cd api/src && npm test

coverage:
	cd api/src && npm run coverage

install:
	cd api/src &&	npm install

migrate:
	cd api/src && docker-compose up -d && NODE_ENV=development npx sequelize-cli db:migrate && docker-compose stop
