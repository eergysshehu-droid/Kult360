import {EmailMessage} from 'cloudflare:email';

export interface ContactEnvironment {
  CONTACT_EMAIL?: {send(message: EmailMessage): Promise<void>};
  CONTACT_DESTINATION_EMAIL?: string;
  CONTACT_SENDER_EMAIL?: string;
  ALLOWED_ORIGINS?: string;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  language?: unknown;
  website?: unknown;
  startedAt?: unknown;
  page?: unknown;
}

const json = (body: Record<string, unknown>, status: number, origin?: string) => new Response(JSON.stringify(body), {
  status,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    ...(origin ? {'Access-Control-Allow-Origin': origin, Vary: 'Origin'} : {})
  }
});

const clean = (value: unknown, maximum: number): string =>
  typeof value === 'string' ? value.trim().replace(/[\u0000-\u001f\u007f]/g, '').slice(0, maximum) : '';

const allowedOrigin = (request: Request, configured = ''): string | undefined => {
  const origin = request.headers.get('Origin');
  if (!origin) return undefined;
  const requestOrigin = new URL(request.url).origin;
  const allowed = configured.split(',').map((item) => item.trim()).filter(Boolean);
  return origin === requestOrigin || allowed.includes(origin) ? origin : undefined;
};

const rawEmail = (from: string, to: string, replyTo: string, name: string, message: string, page: string) => [
  `From: KULT360 website <${from}>`,
  `To: ${to}`,
  `Reply-To: ${name} <${replyTo}>`,
  'Subject: KULT360 website inquiry',
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  '',
  `Name: ${name}`,
  `Email: ${replyTo}`,
  `Page: ${page || 'Not provided'}`,
  '',
  message
].join('\r\n');

export const contactCorsResponse = (request: Request, env: ContactEnvironment): Response => {
  const origin = allowedOrigin(request, env.ALLOWED_ORIGINS);
  if (!origin) return json({error: 'Origin not allowed.'}, 403);
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '600',
      Vary: 'Origin'
    }
  });
};

export const handleContact = async (request: Request, env: ContactEnvironment): Promise<Response> => {
  const origin = allowedOrigin(request, env.ALLOWED_ORIGINS);
  if (request.headers.get('Origin') && !origin) return json({error: 'Origin not allowed.'}, 403);
  if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json')) {
    return json({error: 'JSON is required.'}, 415, origin);
  }

  let payload: ContactPayload;
  try {
    payload = await request.json() as ContactPayload;
  } catch {
    return json({error: 'Invalid JSON.'}, 400, origin);
  }

  if (clean(payload.website, 200)) return json({ok: true}, 202, origin);

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 254).toLowerCase();
  const message = clean(payload.message, 6000);
  const page = clean(payload.page, 500);
  const startedAt = typeof payload.startedAt === 'number' ? payload.startedAt : Number(payload.startedAt);
  const tooFast = Number.isFinite(startedAt) && Date.now() - startedAt < 1500;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !validEmail || message.length < 10 || tooFast) {
    return json({error: 'Please check the submitted fields.'}, 400, origin);
  }

  const {CONTACT_EMAIL: sender, CONTACT_DESTINATION_EMAIL: destination, CONTACT_SENDER_EMAIL: from} = env;
  if (!sender || !destination || !from) {
    return json({error: 'Contact delivery is not configured.'}, 503, origin);
  }

  await sender.send(new EmailMessage(from, destination, rawEmail(from, destination, email, name, message, page)));
  return json({ok: true}, 202, origin);
};
