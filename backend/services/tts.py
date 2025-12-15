from elevenlabs import ElevenLabs

def generate_audio(text: str, elevenlabs_key: str) -> bytes:
    client = ElevenLabs(api_key=elevenlabs_key)

    audio_stream = client.text_to_speech.convert(
        text=text,
        voice_id="JBFqnCBsd6RMkjVDRZzb",
        model_id="eleven_multilingual_v2"
    )

    return b"".join(chunk for chunk in audio_stream if chunk)
