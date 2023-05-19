function getOpenUrl(shortUrl) {
  return `${process.env.REACT_APP_API_URL}/urls/open/${shortUrl}`;
}

export { getOpenUrl };
