const { exec } = require('child_process');
const path = require('path');

// Function to run a file and log its output
function runFile(fileName) {
  const filePath = path.join(__dirname, fileName);
  console.log(`Starting ${fileName}...`);

  const process = exec(`node ${filePath}`);
  
  // Log the output of the file to the console
  process.stdout.on('data', (data) => {
    console.log(`Output from ${fileName}: ${data}`);
  });

  // Log any errors encountered while running the file
  process.stderr.on('data', (data) => {
    console.error(`Error from ${fileName}: ${data}`);
  });

  // Log when the file has exited
  process.on('exit', (code) => {
    if (code === 0) {
      console.log(`${fileName} completed successfully.`);
    } else {
      console.error(`${fileName} exited with code ${code}.`);
    }
  });
}

// Function to check if a port is already in use
function checkPortUsage(port, callback) {
  const net = require('net');
  const tester = net.createServer();

  tester.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Please stop the server running on this port.`);
      callback(false); 
    } else {
      console.error('Error occurred:', err);
    }
  });

  tester.once('listening', () => {
    tester.close();
    callback(true); // Port is free
  });

  tester.listen(port);
}

checkPortUsage(3000, (isPortFree) => {
  if (isPortFree) {
    
    runFile('server.js');
    runFile('server1.js');
    runFile('server2.js');
    runFile('server-login.js');
    runFile('server-bmi.js');
    
    




  } else {
    console.error('Cannot run servers because port 4000 is already in use.');
  }
});



