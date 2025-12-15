import { useState } from "react";
import { generatePodcast } from "./api";
import "./App.css";


function hexToUint8Array(hex: string) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
}

function App() {
  const [url, setUrl] = useState("");
  const [groqKey, setGroqKey] = useState("");
  const [firecrawlKey, setFirecrawlKey] = useState("");
  const [elevenKey, setElevenKey] = useState("");
  const [summary, setSummary] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const data = await generatePodcast({
        url,
        groq_key: groqKey,
        firecrawl_key: firecrawlKey,
        elevenlabs_key: elevenKey,
      });

      setSummary(data.summary);

      const audioBlob = new Blob(
        [hexToUint8Array(data.audio)],
        { type: "audio/mp3" }
      );

      setAudioUrl(URL.createObjectURL(audioBlob));
    } catch (e: any) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="app">
    <div className="card">
      <h1>📰 ➡️ 🎙️ Blog to Podcast</h1>

      <div className="form">
        <input
          placeholder="Blog URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          placeholder="Groq API Key"
          type="password"
          onChange={(e) => setGroqKey(e.target.value)}
        />

        <input
          placeholder="Firecrawl API Key"
          type="password"
          onChange={(e) => setFirecrawlKey(e.target.value)}
        />

        <input
          placeholder="ElevenLabs API Key"
          type="password"
          onChange={(e) => setElevenKey(e.target.value)}
        />

        <button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating Podcast..." : "Generate Podcast"}
        </button>
      </div>

      {audioUrl && (
        <audio className="audio" controls src={audioUrl} />
      )}

      {summary && (
        <div className="summary">{summary}</div>
      )}
    </div>
  </div>
);

}

export default App;
