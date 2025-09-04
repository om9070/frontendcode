// lib/gemini-ai.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
let genAI;
let model;

export function initializeGeminiAI() {
  if (!genAI) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }
  return model;
}

export const websiteContent = [
  {
    title: "About Us",
    url: "/about",
    content: "We are a technology company focused on innovative solutions for small businesses. Our team has over 10 years of experience in web development and digital marketing. We pride ourselves on delivering quality solutions that help businesses grow online."
  },
  {
    title: "Services",
    url: "/services", 
    content: "We offer comprehensive digital services including web development, mobile app development, SEO optimization, and digital marketing services. Our web development packages start from $299 for basic websites, $799 for e-commerce sites, and $1299 for custom web applications. We also provide ongoing maintenance and support."
  },
  {
    title: "Contact",
    url: "/contact",
    content: "You can reach us at contact@example.com or call us at (555) 123-4567. Our office is located at 123 Tech Street, Digital City, DC 12345. Our office hours are Monday to Friday, 9 AM to 6 PM EST. We also offer weekend consultations by appointment."
  },
  {
    title: "FAQ",
    url: "/faq",
    content: "Frequently asked questions: How long does a website take to build? Typically 2-4 weeks depending on complexity. Do you offer maintenance? Yes, we offer monthly maintenance packages starting at $50/month. Do you provide hosting? Yes, we offer reliable hosting solutions starting at $15/month."
  },
    {
    title: "Home",
    url: "/",
    content: "Hello 👋! Welcome to our Site. I’m your AI assistant. You can ask me about our services, pricing, or anything related to our website."
  }

];

// Rate limiting
let requestCount = 0;
let lastResetTime = Date.now();
const maxRequestsPerMinute = 15;

export function checkRateLimit() {
  const currentTime = Date.now();
  if (currentTime - lastResetTime >= 60000) {
    requestCount = 0;
    lastResetTime = currentTime;
  }
  
  if (requestCount >= maxRequestsPerMinute) {
    throw new Error("Rate limit exceeded. Please wait before making another request.");
  }
}

// Search for relevant content
export function findRelevantContent(query) {
    console.log("checker for query sections",query)
  const keywords = query.toLowerCase().split(' ');
  const relevantContent = [];

  for (const page of websiteContent) {
    let score = 0;
    const pageText = (page.title + ' ' + page.content).toLowerCase();
    
    keywords.forEach(keyword => {
      const matches = (pageText.match(new RegExp(keyword, 'g')) || []).length;
      score += matches;
    });

    if (score > 0) {
      relevantContent.push({
        ...page,
        relevanceScore: score
      });
    }
  }

  return relevantContent
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 3);
}

// Build context prompt
export function buildContextPrompt(userQuery, relevantContent) {
  let contextPrompt = `You are an AI assistant for a website. Answer the user's question based ONLY on the following website content. If the information isn't available in the provided content, politely say so and suggest they explore the website further.\n\n`;
  
  if (relevantContent.length > 0) {
    contextPrompt += "Relevant website content:\n";
    relevantContent.forEach((content, index) => {
      contextPrompt += `${index + 1}. Page: ${content.title}\n`;
      contextPrompt += `URL: ${content.url}\n`;
      contextPrompt += `Content: ${content.content.substring(0, 500)}...\n\n`;
    });
  } else {
    contextPrompt += "No directly relevant content found in the website.\n\n";
  }
  
  contextPrompt += `User Question: ${userQuery}\n\nPlease provide a helpful response based on the website content above:`;
  return contextPrompt;
}

// Generate AI response
export async function generateAIResponse(userQuery) {
  try {
    checkRateLimit();
    const model = initializeGeminiAI();
    const relevantContent = findRelevantContent(userQuery);
    const contextPrompt = buildContextPrompt(userQuery, relevantContent);
    const result = await model.generateContent(contextPrompt);
    const response = await result.response;
    
    requestCount++;
    
    return {
      success: true,
      response: response.text(),
      relevantPages: relevantContent.map(c => ({ title: c.title, url: c.url })),
      timestamp: new Date().toISOString()
    };
    
  } catch (error) {
    console.error("Error generating AI response:", error);
    return {
      success: false,
      error: error.message,
      response: "I'm sorry, I'm currently unable to process your request. Please try again later.",
      timestamp: new Date().toISOString()
    };
  }
}

// Get rate limit status
export function getRateLimitStatus() {
  const currentTime = Date.now();
  const timeUntilReset = Math.max(0, 60000 - (currentTime - lastResetTime));
  
  return {
    currentRequests: requestCount,
    maxRequests: maxRequestsPerMinute,
    timeUntilReset: Math.ceil(timeUntilReset / 1000),
    canMakeRequest: requestCount < maxRequestsPerMinute
  };
}