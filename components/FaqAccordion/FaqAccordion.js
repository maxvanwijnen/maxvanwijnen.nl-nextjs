import React, { useState } from "react";
import styles from "./FaqAccordion.module.scss";

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={styles.faqAccordion}>
      {faqs.map((faq, idx) => (
        <div key={idx} className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
          >
            {faq.question}
            <span className={openIndex === idx ? styles.iconOpen : styles.iconClosed}>
              {openIndex === idx ? "−" : "+"}
            </span>
          </button>
          <div
            id={`faq-panel-${idx}`}
            className={
              openIndex === idx
                ? styles.faqAnswerOpen
                : styles.faqAnswer
            }
            aria-hidden={openIndex !== idx}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
