import {createReadStream} from 'node:fs';
import {access, stat} from 'node:fs/promises';
import {createServer} from 'node:http';
import {extname, join, normalize, sep} from 'node:path';

const valueAfter = (flag, fallback) => {
  const index = process.argv.indexOf(flag);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
};
const host = valueAfter('--host', '127.0.0.1');
const port = Number(valueAfter('--port', '4321'));
const root = join(process.cwd(), 'dist');
const mime = {'.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.txt': 'text/plain', '.xml': 'application/xml'};

const fileFor = (requestPath) => {
  const decoded = decodeURIComponent(requestPath.split('?')[0]);
  const candidate = decoded.endsWith('/') ? `${decoded}index.html` : (extname(decoded) ? decoded : `${decoded}/index.html`);
  const relative = normalize(candidate).replace(/^[/\\]+/, '');
  const target = join(root, relative);
  return target.startsWith(`${root}${sep}`) ? target : undefined;
};

const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method || '')) {
    response.writeHead(405, {Allow: 'GET, HEAD'}).end();
    return;
  }
  const requested = fileFor(request.url || '/');
  let target = requested;
  let status = 200;
  if (!target || !(await access(target).then(() => true).catch(() => false)) || !(await stat(target).then((item) => item.isFile()).catch(() => false))) {
    target = join(root, '404.html');
    status = 404;
  }
  const headers = {'Content-Type': `${mime[extname(target)] || 'application/octet-stream'}; charset=utf-8`};
  if (request.method === 'HEAD') {
    response.writeHead(status, headers).end();
    return;
  }
  response.writeHead(status, headers);
  createReadStream(target).pipe(response);
});

server.listen(port, host, () => console.log(`KULT360 preview: http://${host}:${port}`));
