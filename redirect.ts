// redirect.ts

const redirectUrl = "https://smson.online/ad1q1";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
