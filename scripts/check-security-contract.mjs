import {readFile} from 'node:fs/promises';

const headers = await readFile('public/_headers', 'utf8');
const worker = await readFile('src/worker/contact.ts', 'utf8');
const requiredHeaders = ['Content-Security-Policy:', 'Strict-Transport-Security:', 'X-Content-Type-Options: nosniff', 'Referrer-Policy:', 'Permissions-Policy:'];
const requiredWorkerControls = ['allowedOrigin', 'website', 'startedAt', 'Contact delivery is not configured', 'Cache-Control'];
const missing = [
  ...requiredHeaders.filter((item) => !headers.includes(item)).map((item) => `header ${item}`),
  ...requiredWorkerControls.filter((item) => !worker.includes(item)).map((item) => `worker control ${item}`)
];
if (missing.length) {
  console.error(missing.map((item) => `✗ Missing ${item}`).join('\n'));
  process.exit(1);
}
console.log('✓ Security headers and generic contact controls passed');
