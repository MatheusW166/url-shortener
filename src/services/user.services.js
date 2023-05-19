import client from "./api.client.js";

async function getMe() {
  const res = await client.get("/users/me");
  return res.data;
}

export { getMe };
