import React from 'react';
import styles from './HeroLanding.module.scss';
import PhotoshootSelector from '../PhotoshootSelector/PhotoshootSelector';

export default function HeroLanding({
  title,
  description,
  ctaLabel,
  ctaHref,
  usps = [],
  showCarousel = true
}) {
  return (
    <>
      <section className={styles.heroCtaBlock}>
        <h1>{title}</h1>
        <p>{description}</p>
        {ctaLabel && ctaHref && (
          <a href={ctaHref}>{ctaLabel}</a>
        )}
        {usps.length > 0 && (
          <div className={styles.usps}>
            {usps.map((usp, i) => <span key={i}>{usp}</span>)}
          </div>
        )}
      </section>
      {showCarousel && (
        <div className={styles.carouselWrapper}>
          <PhotoshootSelector />
        </div>
      )}
    </>
  );
}
