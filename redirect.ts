// redirect.ts

const redirectUrl = "https://smson.online/uknpe";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
