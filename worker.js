const { Worker } = require("bullmq");

const { processUploadedImages } = require("./utils");

const workerHandler = (job) => {
  console.log("Starting job:", job.id, job.data.uuid, job.name);
  processUploadedImages(job.data);
  console.log("Finished job:", job.id, job.data.uuid, job.name);
  return;
};

const workerOptions = {
    connection: {
      host: "localhost",
      port: 6379,
    },
  };
  
const worker = new Worker("imageJobQueue", workerHandler, workerOptions);

worker.on('completed', (job) => {
  // await job.remove();
  console.log(`Job with ID ${job.id} has been completed.`);
});

worker.on('failed', (job, err) => {
  console.error(`Job with ID ${job.id} has failed with error: ${err.message}`);
});

console.log("Worker 1 started!");