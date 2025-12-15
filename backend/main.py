import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from services.llm import summarize_blog
from services.tts import generate_audio

app = FastAPI()

# CORS (React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # restrict in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PodcastRequest(BaseModel):
    url: str
    groq_key: str
    firecrawl_key: str
    elevenlabs_key: str

@app.post("/generate-podcast")
async def generate_podcast(req: PodcastRequest):
    if not req.url:
        raise HTTPException(status_code=400, detail="URL required")

    try:
        summary = summarize_blog(
            url=req.url,
            groq_key=req.groq_key,
            firecrawl_key=req.firecrawl_key
        )

        audio_bytes = generate_audio(
            text=summary,
            elevenlabs_key=req.elevenlabs_key
        )

        return {
            "summary": summary,
            "audio": audio_bytes.hex()  # binary safe
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
