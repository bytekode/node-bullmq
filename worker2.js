const { Worker } = require('bullmq');

const { processUploadedImages } = require('./utils');

const workerHandler = (job) => {
  console.log('Starting job:', job.id, job.data.uuid, job.name);
  processUploadedImages(job.data);
  console.log('Finished job:', job.id, job.data.uuid, job.name);
};

const workerOptions = {
  connection: {
    host: 'localhost',
    port: 6379,
  },
};

(() => new Worker('imageJobQueue', workerHandler, workerOptions))();

console.log('Worker 2 started!');
