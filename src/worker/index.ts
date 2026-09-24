import {contactCorsResponse, handleContact, type ContactEnvironment} from './contact';

interface Environment extends ContactEnvironment {
  ASSETS: {fetch(request: Request): Promise<Response>};
}

export default {
  async fetch(request: Request, env: Environment): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') {
      if (request.method === 'OPTIONS') return contactCorsResponse(request, env);
      if (request.method !== 'POST') {
        return new Response(JSON.stringify({error: 'Method not allowed.'}), {
          status: 405,
          headers: {'Content-Type': 'application/json; charset=utf-8', Allow: 'POST, OPTIONS'}
        });
      }
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  }
};
