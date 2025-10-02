// Added By Bhushan on 01_10_2025
import fs from 'fs';
import path from 'path';

export function sum(a, b) {
  return a + b;
}

// Load environment configuration
const env = process.env.NODE_ENV || 'development';
const configPath = path.join(process.cwd(), 'config', `${env}.json`);

let config = {};
try {
  if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  }
} catch (error) {
  console.warn(`Could not load config for ${env}:`, error.message);
}

const port = config.port || process.env.PORT || 3000;

console.log(`Hello CI/CD - Environment: ${config.environment || env}`);
console.log(`Port: ${port}`);
console.log(`Features:`, config.features || {});

// Simple HTTP server for health checks
if (process.env.NODE_ENV !== 'test') {
  const server = {
    listen: (port, callback) => {
      console.log(`Server would start on port ${port}`);
      if (callback) callback();
    }
  };
  
  server.listen(port, () => {
    console.log(`🚀 Server ready on port ${port}`);
  });
}

