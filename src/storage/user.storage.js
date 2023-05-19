const TOKEN_KEY = "token";

function saveToken(token) {
  if (!token) return;
  localStorage.setItem(TOKEN_KEY, token);
}

function getToken(token) {
  if (!token) return;
  localStorage.get(TOKEN_KEY);
}

export { getToken, saveToken };
