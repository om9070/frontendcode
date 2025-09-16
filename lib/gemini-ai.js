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
    content:
      "Vanapex Technologies is a forward-thinking IT solutions company specializing in website development, mobile applications, SEO, digital marketing, custom software, AI & ML solutions, and cloud deployment. With 10 years of expertise in the FUll stack and modern technologies, we empower businesses to grow digitally by providing scalable, secure, and user-friendly solutions. Our mission is to transform ideas into powerful digital products that drive results. At Vanapex Technologies, we focus on innovation, creativity, and customer satisfaction to ensure long-term success for our clients across industries and global markets.",
  },
  {
    title: "Services",
    url: "/services",
    content:
      "At Vanapex Technologies, we provide end-to-end digital solutions to help businesses grow online. Our services include website development, mobile app development, custom software for web and app, SEO, Google advertising, digital marketing, e-commerce solutions, CRM & ERP systems, AI & ML solutions, cloud hosting, logo & graphic design, and website redesign. Our website development packages start from $299 for basic websites, $799 for e-commerce platforms, and $1299 for custom web applications. We also offer tailored digital marketing campaigns and ongoing maintenance & support to ensure your business stays ahead in the digital era.",
  },
  {
    title: "Contact",
    url: "/contact",
    content:
      "You can reach us at hr@vanapex.com  or call us at (+91) 8340606970. Our office is located at Letehar,Ranchi,Jharkhand. Our office hours are Monday to Friday, 10 AM to 6 PM EST. We also offer weekend consultations by appointment.",
  },
  {
    title: "FAQ",
    url: "/faq",
    content: [
      {
        question: "What services does Vanapex Technologies provide?",
        answer:
          "We offer website development, mobile app development, SEO, digital marketing, custom software, Google advertising, e-commerce solutions, CRM & ERP systems, AI & ML solutions, cloud hosting, logo & graphic design, and website redesign.",
      },
      {
        question: "How much does a website cost?",
        answer:
          "Our website development packages start from $299 for basic websites, $799 for e-commerce sites, and $1299 for custom web applications. Pricing depends on project complexity and requirements.",
      },
      {
        question: "Do you provide ongoing support and maintenance?",
        answer:
          "Yes, we provide continuous website and application maintenance, including updates, security monitoring, bug fixing, and performance optimization.",
      },
      {
        question: "Can you help with SEO and digital marketing?",
        answer:
          "Absolutely! We specialize in SEO optimization, content strategy, social media marketing, and Google advertising campaigns to improve visibility and drive leads.",
      },
      {
        question: "Do you build both Android and iOS apps?",
        answer:
          "Yes, we develop high-performing native and hybrid mobile apps for both Android and iOS platforms.",
      },
      {
        question: "Do you work with international clients?",
        answer:
          "Yes, we serve clients worldwide, with a focus on India, UAE, USA, and global businesses seeking digital growth.",
      },
    ],
  },
  {
    title: "Home",
    url: "/",
    content:
      "Hello 👋! Welcome to our Site. I’m your AI assistant. You can ask me about our services, pricing, or anything related to our website.",
  },
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
    throw new Error(
      "Rate limit exceeded. Please wait before making another request."
    );
  }
}

// Search for relevant content
export function findRelevantContent(query) {
  console.log("checker for query sections", query);
  const keywords = query.toLowerCase().split(" ");
  const relevantContent = [];

  for (const page of websiteContent) {
    let score = 0;
    const pageText = (page.title + " " + page.content).toLowerCase();

    keywords.forEach((keyword) => {
      const matches = (pageText.match(new RegExp(keyword, "g")) || []).length;
      score += matches;
    });

    if (score > 0) {
      relevantContent.push({
        ...page,
        relevanceScore: score,
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
      relevantPages: relevantContent.map((c) => ({
        title: c.title,
        url: c.url,
      })),
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error generating AI response:", error);
    return {
      success: false,
      error: error.message,
      response:
        "I'm sorry, I'm currently unable to process your request. Please try again later.",
      timestamp: new Date().toISOString(),
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
    canMakeRequest: requestCount < maxRequestsPerMinute,
  };
}
