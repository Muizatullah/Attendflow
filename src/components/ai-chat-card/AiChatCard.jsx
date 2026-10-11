import { useState } from 'react';
import { BotIcon, SendIcon } from '../icons/Icons.jsx';
import { getAiResponse } from '../../utils/aiResponses.js';
import styles from './AiChatCard.module.css';

const AiChatCard = ({ title = 'Ask AttendFlow AI', subtitle, prompts = [] }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'ai', text: getAiResponse(trimmed) }]);
      setIsTyping(false);
    }, 550);
  };

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <span className={styles.headIcon}>
          <BotIcon size={17} />
        </span>
        <div>
          <p className={styles.title}>{title}</p>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>

      {messages.length > 0 && (
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div key={index} className={`${styles.bubble} ${styles[`bubble-${message.role}`]}`}>
              {message.text}
            </div>
          ))}
          {isTyping && <div className={`${styles.bubble} ${styles['bubble-ai']} ${styles.typing}`}>···</div>}
        </div>
      )}

      <div className={styles.prompts}>
        {prompts.map((prompt) => (
          <button key={prompt} type="button" className={styles.promptChip} onClick={() => sendMessage(prompt)}>
            {prompt}
          </button>
        ))}
      </div>

      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage(input);
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Type your question..."
        />
        <button type="submit" aria-label="Send" disabled={!input.trim()}>
          <SendIcon size={15} />
        </button>
      </form>
    </div>
  );
};

export default AiChatCard;
