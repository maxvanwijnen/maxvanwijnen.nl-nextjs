import React from "react";
import styles from './TextContent.module.scss';

const TextContent = ({ children, title, multiContent }) => {

    console.log(multiContent)
    if(Array.isArray(multiContent)){
        console.log('blabla')
        return (
            <section className={styles['text-content']}>
              <h2>{title}</h2>
              {Array.isArray(multiContent) && (
                multiContent.map((child, index) => <p key={index}>{child}</p>)
              )}
            </section>
          );
    }

    return (
        <section className={styles['text-content']}>
          <h2>{title}</h2>
          <p>{children}</p>
        
        </section>
      );






  
};

export default TextContent;
