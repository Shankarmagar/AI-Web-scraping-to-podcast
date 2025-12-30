# AI-Web-scraping-to-podcast

Transform any blog article into a podcast episode with AI-powered content summarization and text-to-speech generation.

## 🎯 Overview

This project converts blog articles into engaging podcast summaries using advanced AI technologies. Simply provide a blog URL and API keys, and the system will scrape the content, generate a concise podcast-friendly summary, and convert it to high-quality audio.

## ✨ Features

### 🚀 Core Functionality

- **Web Scraping**: Automatically extracts content from any blog URL using Firecrawl
- **AI Summarization**: Generates conversational, engaging summaries optimized for audio consumption (max 200 characters)
- **Text-to-Speech**: Converts summaries to natural-sounding audio using ElevenLabs
- **Real-time Processing**: Complete end-to-end processing from URL to playable podcast

### 🎙️ Audio Features

- **High-Quality Voice**: Uses ElevenLabs multilingual voice synthesis
- **Optimized Length**: Summaries are perfectly sized for short podcast segments
- **Audio Format**: Generates MP3 audio files for universal compatibility
- **Direct Playback**: Built-in audio player for immediate listening

### 🛠️ Technical Features

- **FastAPI Backend**: Robust Python backend with async support
- **React Frontend**: Modern TypeScript-based user interface
- **API Integration**: Seamless integration with multiple AI services
- **Error Handling**: Comprehensive error management and user feedback
- **CORS Enabled**: Cross-origin resource sharing for web deployment

## 🏗️ Architecture

### Backend (Python/FastAPI)

- **Endpoint**: `POST /generate-podcast`
- **Input**: Blog URL, Groq API key, Firecrawl API key, ElevenLabs API key
- **Output**: JSON response with summary text and hex-encoded audio
- **Dependencies**: FastAPI, Uvicorn, Firecrawl, ElevenLabs, Agno, OpenAI

### Frontend (React/TypeScript)

- **Form Interface**: Clean input form for URL and API keys
- **Audio Player**: Built-in HTML5 audio player with controls
- **State Management**: React hooks for loading states and data handling
- **API Client**: TypeScript API client for backend communication

## 🔧 Setup Instructions

### Prerequisites

- Python 3.8+
- Node.js 16+
- API Keys for:
  - Groq (Llama 3.3 70B)
  - Firecrawl (Web scraping)
  - ElevenLabs (Text-to-speech)

### Backend Setup

1. Navigate to backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the server:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```

### Frontend Setup

1. Navigate to frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## 🔑 API Keys Setup

### Groq API Key

1. Visit [Groq Console](https://console.groq.com/)
2. Create account and generate API key
3. Used for Llama 3.3 70B model access

### Firecrawl API Key

1. Visit [Firecrawl](https://firecrawl.dev/)
2. Sign up and get API key
3. Enables web scraping capabilities

### ElevenLabs API Key

1. Visit [ElevenLabs](https://elevenlabs.io/)
2. Create account and generate API key
3. Provides high-quality text-to-speech

## 🚀 Usage

1. **Start the Application**

   - Run backend server on port 8000
   - Run frontend development server

2. **Enter Required Information**

   - **Blog URL**: Paste the article URL you want to convert
   - **Groq API Key**: Your Groq API key for AI processing
   - **Firecrawl API Key**: Your Firecrawl API key for web scraping
   - **ElevenLabs API Key**: Your ElevenLabs API key for audio generation

3. **Generate Podcast**
   - Click "Generate Podcast" button
   - Wait for processing (typically 10-30 seconds)
   - Listen to the generated audio and read the summary

## 🎵 Example Use Cases

- **Content Creators**: Quickly create podcast versions of blog posts
- **Educational Content**: Convert research articles to audio format
- **News Aggregation**: Transform news articles into podcast summaries
- **Accessibility**: Make written content available in audio format
- **Learning**: Listen to articles while commuting or multitasking

## 🔍 Technical Details

### AI Model Integration

- **Language Model**: Llama 3.3 70B Versatile via Groq
- **Context Window**: Optimized for blog content processing
- **Output Format**: Conversational, podcast-friendly language
- **Character Limit**: 200 characters maximum for concise audio

### Web Scraping

- **Service**: Firecrawl API
- **Content Extraction**: Automatic article content detection
- **Error Handling**: Robust fallback for various website structures
- **Performance**: Fast, reliable content extraction

### Audio Generation

- **Voice Model**: ElevenLabs multilingual v2
- **Voice ID**: JBFqnCBsd6RMkjVDRZzb (high-quality voice)
- **Format**: MP3 audio stream
- **Quality**: Professional-grade text-to-speech

## 🌐 Deployment

The application is configured for easy deployment:

- **Backend**: Ready for deployment on platforms like Render, Heroku, or DigitalOcean
- **Frontend**: Static files can be served via Netlify, Vercel, or any CDN
- **Database**: No database required (stateless architecture)

## 🔒 Security Considerations

- **API Keys**: Never commit API keys to version control
- **CORS**: Currently allows all origins (restrict in production)
- **Rate Limiting**: Consider implementing rate limiting for production
- **Input Validation**: Validate URLs and sanitize inputs

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions, please create an issue in the project repository.

---

**Built with ❤️ using FastAPI, React, Groq, Firecrawl, and ElevenLabs**
