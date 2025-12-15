import os
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.firecrawl import FirecrawlTools

def summarize_blog(url: str, groq_key: str, firecrawl_key: str) -> str:
    os.environ["GROQ_API_KEY"] = groq_key
    os.environ["FIRECRAWL_API_KEY"] = firecrawl_key

    agent = Agent(
        name="Blog Summarizer",
        model=OpenAIChat(
            id="llama-3.3-70b-versatile",
            api_key=groq_key,
            base_url="https://api.groq.com/openai/v1"
        ),
        tools=[FirecrawlTools()],
        instructions=[
            "Scrape the blog URL.",
            "Create a conversational podcast-ready summary.",
            "Max 2000 characters."
        ],
    )

    result = agent.run(f"Summarize this blog for a podcast: {url}")
    return result.content if hasattr(result, "content") else str(result)
