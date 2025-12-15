export async function generatePodcast(payload: {
  url: string;
  groq_key: string;
  firecrawl_key: string;
  elevenlabs_key: string;
}) {
  const res = await fetch("http://localhost:8000/generate-podcast", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}
