import React, { useState } from 'react';
import Link from 'next/link';
import styles from './PhotoshootSelector.module.scss';

const shoots = [
  { title: 'Fashion', img: 'https://dev1.maxvanwijnen.nl/docs/images/mini-portfolio/Mode-fotoshoot-soluzione-blouses.webp', external: true, link: '/fotoshoot/fashion' },

  { title: 'Loveshoot', img: '/img/fotoshoot-tiles/Koppel-fotoshoot-303.webp', link: '/fotoshoot/loveshoot' },
  { title: 'Portret', img: '/img/fotoshoot-tiles/Portret-fotoshoot-303.webp', link: '/fotoshoot/portret' },
  { title: 'Familie', img: '/img/fotoshoot-tiles/Familie-fotoshoot-303.webp', link: '/fotoshoot/familie' },
  { title: 'Zwangerschap', img: '/img/fotoshoot-tiles/Zwangerschaps-fotoshoot-303.webp', link: '/fotoshoot/zwangerschap' },
  { title: 'Trouwen', img: 'https://dev1.maxvanwijnen.nl/docs/images/intro-text/trouwreportage-fotoshoot.webp', external: true, link: '/fotoshoot/trouwen' }
];

export default function PhotoshootSelector() {
  const [active, setActive] = useState(3); // Start in het midden

  // Swipe logica (mobiel)
  let touchStartX = null;
  function handleTouchStart(e) { touchStartX = e.touches[0].clientX; }
  function handleTouchEnd(e) {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 40 && active > 0) setActive(active - 1);
    if (dx < -40 && active < shoots.length - 1) setActive(active + 1);
    touchStartX = null;
  }

  // Klik op pijlen (desktop)
  function prev() { if (active > 0) setActive(active - 1); }
  function next() { if (active < shoots.length - 1) setActive(active + 1); }

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.arrow} onClick={prev} disabled={active === 0}>&lt;</button>
      <div
        className={styles.carousel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {shoots.map((shoot, i) => {
          const offset = i - active;
          // 3D effect: centrale tile groot, zijkanten kleiner en schuin
          const style = {
            transform: `
              translateX(${offset * 90}px)
              scale(${1 - Math.abs(offset) * 0.18})
              rotateY(${offset *  -35}deg)
            `,
            zIndex: 10 - Math.abs(offset),
            opacity: Math.abs(offset) > 2 ? 0 : 1,
            pointerEvents: Math.abs(offset) > 2 ? 'none' : 'auto'
          };
          return (
            <Link href={shoot.link} key={shoot.title} className={styles.carouselTile} style={style}>
              <div className={styles.imgWrapper}>
                <img src={shoot.img} alt={shoot.title} loading="lazy" />
              </div>
              <span className={styles.title}>{shoot.title}</span>
            </Link>
          );
        })}
      </div>
      <button className={styles.arrow} onClick={next} disabled={active === shoots.length - 1}>&gt;</button>
    </div>
  );
}
