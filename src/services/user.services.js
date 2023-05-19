import client from "./api.client.js";

async function getMe() {
  const res = await client.get("/users/me");
  return res.data;
}

async function login({ email, password }) {
  const res = await client.post("/signin", { email, password });
  return res.data;
}

async function register({ email, password, name }) {
  const res = await client.post("/signup", { email, password, name });
  return res.data;
}

export { getMe, login, register };
