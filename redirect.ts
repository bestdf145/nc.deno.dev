// redirect.ts

const redirectUrl = "https://smson.online/vkthu";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
