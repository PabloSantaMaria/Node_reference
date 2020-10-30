const os = require('os');

// Get platform
console.log(os.platform());

// CPU architecture
console.log(os.arch());

// CPU cores info
console.log(os.cpus());

// Total memory
console.log(os.totalmem());

// Free memory
console.log(os.freemem());

// Home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());