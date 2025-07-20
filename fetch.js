const fs = require("fs");
const https = require("https");

const M3U_URL = "https://allinonereborn.fun/jiotv-m3u/jiotv91.m3u";
const OUTPUT_FILE = "updated.m3u";

https.get(M3U_URL, (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    fs.writeFileSync(OUTPUT_FILE, data);
    console.log("✅ updated.m3u file updated:", new Date().toISOString());
  });
});
