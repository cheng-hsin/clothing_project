import React from 'react';
import Link from 'next/link';
import styles from './MenuItem.module.scss';

export default function MenuItem({ title, imageUrl, size }) {
  const linkUrl = `/shop/${title}`;
  return (
    <div className={`${styles[size]} ${styles.card}`}>
      <Link href={linkUrl}>
        <div className={styles.card_image}>
          <img src={imageUrl} alt={title} />
        </div>
      </Link>
      <div className={styles.title_white}>
        <p className={styles.card_title}>{title}</p>
      </div>
    </div>
  );
}
