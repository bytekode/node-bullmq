# node-bullmq
Bullmq implementation in Node.js

Start redis `docker-compose up -d`

Start worker `node worker.js`

Start client/producer `node index.js` and then access the same via `http://localhost:3000/`

To access Bull Dashboard use `http://localhost:3000/admin/`