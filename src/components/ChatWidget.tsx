"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouteTransition } from "@/components/RouteTransitionProvider";

type ChatRole = "user" | "bot";

type ChatAction = {
  label: string;
  href?: string;
  query?: string;
  external?: boolean;
};

type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  actions?: ChatAction[];
};

const WHATSAPP_LINK = "https://wa.me/923453360450";

const INITIAL_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "bot",
  text: "Hey 👋 I'm your AI assistant — ask about AI chatbots, automation, or starting your next digital project.",
  actions: [
    { label: "AI Chatbots", query: "Do you build AI chatbots?" },
    { label: "AI Projects", href: "/#ai" },
    { label: "Start a Project", href: "/contact" },
  ],
};

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function getBotReply(rawQuestion: string): Omit<ChatMessage, "id" | "role"> {
  const question = normalize(rawQuestion);

  if (!question) {
    return {
      text: "Share a quick question, and I'll guide you in one line.",
    };
  }

  if (/hi|hello|hey|salam|assalam|yo/.test(question)) {
    return {
      text: "Hi! I'm DevSpark Assistant. I can help with services, pricing, timelines, or starting your project.",
      actions: [
        { label: "View Services", query: "What services do you offer?" },
        { label: "Start a Project", href: "/contact" },
      ],
    };
  }

  if (/who|about|company|devspark|the devspark/.test(question)) {
    return {
      text: "The DevSpark builds modern websites, SaaS platforms, and business systems with clean UI, strong performance, and scalable architecture.",
      actions: [
        { label: "See Portfolio", href: "/portfolio" },
        { label: "Start a Project", href: "/contact" },
      ],
    };
  }

  if (/service|offer|what do you do|web|website|ui|ux|saas|app|performance/.test(question)) {
    return {
      text: "Core services: AI Chatbots, AI Automation, Website Development, SaaS / Web Apps, and Product UI — built to help businesses grow with smart digital systems.",
      actions: [
        { label: "AI Solutions", href: "/#ai" },
        { label: "Start a Project", href: "/contact" },
        { label: "WhatsApp", href: WHATSAPP_LINK, external: true },
      ],
    };
  }

  if (/chatbot|chat bot|ai bot|assistant|automation|openai|llm|gpt|ai/.test(question)) {
    return {
      text: "Yes — I build AI chatbots and automation systems for websites, lead capture, enrollment flows, tutoring, and customer support. Want a custom bot for your business?",
      actions: [
        { label: "See AI Projects", href: "/#ai" },
        { label: "Build My Bot", href: "/contact" },
        { label: "WhatsApp", href: WHATSAPP_LINK, external: true },
      ],
    };
  }

  if (/price|pricing|cost|budget|rate|charges/.test(question)) {
    return {
      text: "Pricing depends on scope and timeline. Share your requirements, and The DevSpark can send a clear quote quickly.",
      actions: [
        { label: "Get a Quote", href: "/contact" },
        { label: "WhatsApp", href: WHATSAPP_LINK, external: true },
      ],
    };
  }

  if (/contact|call|email|reach|whatsapp|talk|meeting/.test(question)) {
    return {
      text: "Great — you can contact The DevSpark via the contact form or WhatsApp for a faster project discussion.",
      actions: [
        { label: "Open Contact Form", href: "/contact" },
        { label: "WhatsApp", href: WHATSAPP_LINK, external: true },
      ],
    };
  }

  if (/portfolio|work|projects|case study/.test(question)) {
    return {
      text: "Sure! Explore recent projects to see design quality, UX thinking, and technical execution.",
      actions: [{ label: "See Portfolio", href: "/portfolio" }],
    };
  }

  if (/start|begin|project|build for me|need a website/.test(question)) {
    return {
      text: "Perfect. Tell us your idea, goals, and timeline — we'll propose a focused plan for your project.",
      actions: [
        { label: "Start a Project", href: "/contact" },
        { label: "View Services", query: "What services do you offer?" },
      ],
    };
  }

  if (/about|who are you|biography|background|story|personal/.test(question)) {
    return {
      text: "I'm Toseef, a Full-Stack Web Developer and UI-focused designer with 4+ years of experience building clean, scalable, production-ready web applications. I specialize in turning complex ideas into fast, user-friendly digital solutions—combining strategic design thinking with solid engineering practices. My journey started with front-end development and evolved into full-stack work, including API design, database optimization, and deployment architecture. I work closely with startups and businesses to understand their goals, then deliver focused solutions that drive real results. Beyond coding, I'm passionate about motion design, performance optimization, and creating experiences that feel intentional and premium.",
      actions: [
        { label: "View Portfolio", href: "/portfolio" },
        { label: "Start a Project", href: "/contact" },
      ],
    };
  }

  if (/skills|expertise|stack|technologies|what can you build/.test(question)) {
    return {
      text: "My core expertise spans: • Front-End: React.js, Next.js, TypeScript, Tailwind CSS, Framer Motion, and modern CSS3 animations for premium motion design. • Back-End: Node.js, Express, REST API design, database management with MongoDB and SQL, secure authentication. • Full-Stack: Building complete web applications from database design through deployment. • Design Systems: UI component architecture, accessibility, responsive design, and design-to-code handoffs. • Performance: Page speed optimization, code splitting, lazy loading, and SEO implementation. • DevOps & Tools: Git/GitHub, deployment pipelines, Docker basics, and CI/CD workflows. I'm constantly learning—currently exploring advanced animation patterns and emerging frameworks to stay ahead in web development.",
      actions: [
        { label: "See Portfolio", href: "/portfolio" },
        { label: "Services Offered", query: "What services do you offer?" },
      ],
    };
  }

  if (/experience|work history|employment|background|years|projects done/.test(question)) {
    return {
      text: "Over the past 4+ years, I've worked across diverse industries and project types: • Freelance Full-Stack Developer: Built 100+ projects ranging from landing pages and e-commerce sites to SaaS platforms and web apps. • Agency Experience: Collaborated with design teams to deliver high-quality, pixel-perfect client websites with strong performance. • Startups: Helped early-stage companies build MVPs quickly and scale them as they grew. • Recent Focus: Complex web applications, real-time features, and large-scale performance optimization. Key achievements: 1,000+ successful projects delivered, 100% client satisfaction rate, consistent delivery within tight timelines. I've worked with tech startups, creative agencies, Fortune 500 companies, and solopreneurs—each bringing unique challenges and learning opportunities. My experience spans industries like fintech, SaaS, e-commerce, education, and creative tech.",
      actions: [
        { label: "View Case Studies", href: "/portfolio" },
        { label: "Hire Me", href: "/contact" },
      ],
    };
  }

  return {
    text: "I can help with services, pricing, portfolio, starting your project, or learning more about my background. Ask me about any of these topics!",
    actions: [
      { label: "About Me", query: "Tell me about yourself" },
      { label: "My Skills", query: "What skills do you have?" },
      { label: "Work Experience", query: "What's your experience?" },
      { label: "View Services", query: "What services do you offer?" },
    ],
  };
}

export default function ChatWidget() {
  const { startTransition } = useRouteTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const idRef = useRef(1);

  const getNextId = (role: ChatRole) => {
    const id = idRef.current;
    idRef.current += 1;
    return `${role}-${id}`;
  };

  const botTypingDots = useMemo(
    () => ["delay-0", "[animation-delay:120ms]", "[animation-delay:240ms]"],
    []
  );

  useEffect(() => {
    if (!scrollAreaRef.current) {
      return;
    }

    scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
  }, [messages, isTyping]);

  useEffect(() => {
    const openChat = () => setIsOpen(true);
    window.addEventListener("open-chat-widget", openChat);
    return () => window.removeEventListener("open-chat-widget", openChat);
  }, []);

  const pushBotMessage = (question: string) => {
    setIsTyping(true);

    window.setTimeout(() => {
      const reply = getBotReply(question);
      const botMessage: ChatMessage = {
        id: getNextId("bot"),
        role: "bot",
        text: reply.text,
        actions: reply.actions,
      };

      setMessages((previous) => [...previous, botMessage]);
      setIsTyping(false);
    }, 520);
  };

  const sendMessage = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed || isTyping) {
      return;
    }

    const userMessage: ChatMessage = {
      id: getNextId("user"),
      role: "user",
      text: trimmed,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInputValue("");
    pushBotMessage(trimmed);
  };

  const handleActionClick = (action: ChatAction) => {
    if (action.query) {
      sendMessage(action.query);
      return;
    }

    if (action.href) {
      if (action.external) {
        window.open(action.href, "_blank", "noopener,noreferrer");
        return;
      }

      setIsOpen(false);

      if (action.href.includes("#")) {
        const [path, hash] = action.href.split("#");
        if (!path || path === "/" || path === window.location.pathname) {
          const el = document.getElementById(hash);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 96;
            window.scrollTo({ top, behavior: "smooth" });
            return;
          }
        }
      }

      startTransition(action.href);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-120 sm:bottom-7 sm:right-7">
      <div
        className={`pointer-events-none absolute bottom-0 right-0 transition duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="pointer-events-auto flex h-[min(68vh,560px)] w-[min(calc(100vw-2rem),380px)] flex-col overflow-hidden rounded-3xl border border-white/15 bg-slate-950/70 shadow-[0_28px_80px_rgba(2,6,23,0.7)] backdrop-blur-xl">
          <div className="border-b border-white/10 bg-linear-to-r from-cyan-400/10 via-emerald-400/8 to-cyan-400/10 px-4 py-3.5">
            <div className="flex items-center justify-between gap-3">
              <div>
            <p className="text-sm font-semibold text-white">AI Assistant</p>
            <p className="text-xs text-slate-300">Chatbots · Automation · Project help</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-slate-200 transition hover:border-white/30 hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>

          <div ref={scrollAreaRef} className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-sm bg-emerald-400/90 text-slate-950"
                      : "rounded-bl-sm border border-white/12 bg-white/5 text-slate-100"
                  }`}
                >
                  {message.text}

                  {message.actions?.length ? (
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {message.actions.map((action) => (
                        <button
                          key={`${message.id}-${action.label}`}
                          type="button"
                          onClick={() => handleActionClick(action)}
                          className="rounded-full border border-white/15 bg-slate-900/70 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-slate-100 transition hover:border-emerald-300/45 hover:bg-emerald-300/12"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}

            {isTyping ? (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-white/12 bg-white/5 px-3.5 py-2.5">
                  {botTypingDots.map((delayClass, index) => (
                    <span
                      key={`typing-dot-${index}`}
                      className={`h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce ${delayClass}`}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(inputValue);
            }}
            className="border-t border-white/10 bg-slate-950/65 p-3"
          >
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-2 py-2">
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Ask about services, pricing, or project start..."
                className="w-full bg-transparent px-2 text-sm text-white outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="rounded-xl bg-emerald-400 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="group relative grid h-15 w-15 place-items-center rounded-full border border-white/20 bg-slate-900/72 text-white shadow-[0_24px_46px_rgba(2,6,23,0.58)] backdrop-blur-xl transition duration-300 hover:scale-[1.06] hover:border-emerald-300/60"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        <span className="pointer-events-none absolute -inset-2 rounded-full bg-linear-to-r from-cyan-300/18 via-emerald-300/20 to-cyan-300/18 opacity-70 blur-md transition duration-300 group-hover:opacity-100 group-hover:blur-lg" />
        <span className="pointer-events-none absolute inset-0 rounded-full border border-emerald-300/35 opacity-0 transition duration-300 group-hover:opacity-100" />
        <span className="pointer-events-none absolute inset-1 rounded-full border border-cyan-200/25 animate-pulse" />
        <span className="pointer-events-none absolute inset-0 rounded-full border border-cyan-200/20 animate-ping opacity-45" />

        <span className="relative z-10 grid place-items-center">
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-6 w-6 text-white transition duration-300 group-hover:scale-110 group-hover:text-emerald-100"
          >
            <path
              d="M7.2 6.25H16.8C18.5673 6.25 20 7.68269 20 9.45V14.05C20 15.8173 18.5673 17.25 16.8 17.25H11.4927L8.13249 19.7601C7.80398 20.0056 7.33333 19.7712 7.33333 19.3622V17.25H7.2C5.43269 17.25 4 15.8173 4 14.05V9.45C4 7.68269 5.43269 6.25 7.2 6.25Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="11.75" r="1" fill="currentColor" />
            <circle cx="12" cy="11.75" r="1" fill="currentColor" />
            <circle cx="15" cy="11.75" r="1" fill="currentColor" />
          </svg>
        </span>
      </button>
    </div>
  );
}
