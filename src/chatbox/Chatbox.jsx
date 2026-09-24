import { useState, useRef, useEffect } from "react";
import "./chatbox.css";

// Point this at wherever your Spring Boot backend runs
const CHAT_API_URL = "http://localhost:8080/api/chat";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me about our services or how booking works." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") sendMessage();
  }

  return (
    <div className="chatbox-root">
      {isOpen && (
        <div className="chatbox-window">
          <div className="chatbox-header">
            <span className="text-white">Service Assistant</span>
            <button className="chatbox-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className="chatbox-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chatbox-bubble ${m.sender}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="chatbox-bubble bot typing">Thinking...</div>}
            <div ref={bottomRef} />
          </div>

          <div className="chatbox-input-row">
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={sendMessage} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}

      <button className="chatbox-toggle" onClick={() => setIsOpen((v) => !v)}>
        {isOpen ? "Close" : "Chat"}
      </button>
    </div>
  );
}
