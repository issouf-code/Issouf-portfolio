const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL;

export async function submitContactMessage(payload) {
  if (!CONTACT_ENDPOINT) {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve({
          ok: true,
          mode: 'frontend-only',
          message: 'Message captured locally. Add VITE_CONTACT_API_URL to send it to a backend.',
          payload,
        });
      }, 700);
    });
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Unable to send the message. Please try again.');
  }

  return response.json();
}
