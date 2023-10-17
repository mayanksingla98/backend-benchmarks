const server = Bun.serve({
  port: 3001,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
});
// server.listen();

server.get("/users", async (request) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Carol" },
  ];
  return new Response(JSON.stringify(users));
});

console.log(`Listening on localhost:${server.port}`);
