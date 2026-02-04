import http from "http";

const PORT = 3000;
const DELAY_MS = 500; // 500ms delay to simulate processing time
const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK\n");
  }, DELAY_MS);
});

server.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
