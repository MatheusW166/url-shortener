import client from "./api.client.js";

async function getRank() {
  const res = await client.get("/ranking");
  return res.data ?? [];
}

async function shorten({ url }) {
  const res = await client.post("/urls/shorten", { url });
  return res.data;
}

async function deleteUrl({ id }) {
  await client.delete(`/urls/${id}`);
}

export { getRank, shorten, deleteUrl };
