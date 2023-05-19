import client from "./api.client.js";

async function getRank() {
  const res = await client.get("/ranking");
  return res.data ?? [];
}

export { getRank };
