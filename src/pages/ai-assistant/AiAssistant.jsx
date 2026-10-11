import { useEffect, useRef, useState } from 'react';
import Reveal from '../../components/reveal/Reveal.jsx';
import { BotIcon, SendIcon, TrendUpIcon, GraduationCapIcon } from '../../components/icons/Icons.jsx';
import { getAiResponse } from '../../utils/aiResponses.js';
import { AI_ASSISTANT_PROMPTS, AI_ASSISTANT_WELCOME, STUDENT_PROFILE, HOME_STATS } from '../../data/content.js';
import styles from './AiAssistant.module.css';

const AiAssistant = () => {
  const [messages, setMessages] = useState([{ role: 'ai', text: AI_ASSISTANT_WELCOME }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'ai', text: getAiResponse(trimmed) }]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.headerIcon}>
          <BotIcon size={22} />
        </span>
        <div>
          <h1>AI Assistant</h1>
          <p>Ask AttendFlow AI about your attendance, courses, or how the app works.</p>
        </div>
      </div>

      <div className={styles.layout}>
        <Reveal as="div" className={styles.chatCard}>
          <div className={styles.messages} ref={scrollRef}>
            {messages.map((message, index) => (
              <div key={index} className={`${styles.row} ${styles[`row-${message.role}`]}`}>
                {message.role === 'ai' && (
                  <span className={styles.avatarBot}>
                    <BotIcon size={15} />
                  </span>
                )}
                <div className={`${styles.bubble} ${styles[`bubble-${message.role}`]}`}>{message.text}</div>
                {message.role === 'user' && (
                  <img src={STUDENT_PROFILE.avatar} alt="" width={28} height={28} className={styles.avatarUser} />
                )}
              </div>
            ))}

            {isTyping && (
              <div className={`${styles.row} ${styles['row-ai']}`}>
                <span className={styles.avatarBot}>
                  <BotIcon size={15} />
                </span>
                <div className={`${styles.bubble} ${styles['bubble-ai']} ${styles.typing}`}>···</div>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className={styles.prompts}>
              {AI_ASSISTANT_PROMPTS.map((prompt) => (
                <button key={prompt} type="button" className={styles.promptChip} onClick={() => sendMessage(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>
          )}

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
              placeholder="Ask AttendFlow AI anything..."
            />
            <button type="submit" aria-label="Send" disabled={!input.trim()}>
              <SendIcon size={16} />
            </button>
          </form>
        </Reveal>

        <div className={styles.side}>
          <Reveal as="div" className={styles.sideCard} delay={60}>
            <span className={styles.sideIcon}>
              <TrendUpIcon size={16} />
            </span>
            <p className={styles.sideTitle}>Your snapshot</p>
            <p className={styles.sideValue}>{HOME_STATS.overall.percent}% overall</p>
            <p className={styles.sideText}>
              {HOME_STATS.attended.value} of {HOME_STATS.attended.total} classes attended this semester.
            </p>
          </Reveal>

          <Reveal as="div" className={styles.sideCard} delay={100}>
            <span className={`${styles.sideIcon} ${styles.sideIconAlt}`}>
              <GraduationCapIcon size={16} />
            </span>
            <p className={styles.sideTitle}>What I can help with</p>
            <ul className={styles.sideList}>
              <li>Your attendance percentage and trends</li>
              <li>Which courses need attention</li>
              <li>Why a check-in may have been rejected</li>
              <li>How to scan and verify location</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;
