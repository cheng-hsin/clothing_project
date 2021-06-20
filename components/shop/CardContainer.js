import styles from './CardContainer.module.scss';
import Card from './Card';
import { useState } from 'react';

export default function CardContainer({ products, category }) {
  const [sections, setSections] = useState(products);
  return (
    <>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Niconne&display=swap'
        rel='stylesheet'
      ></link>
      <h1 className={styles.title}>{category}</h1>
      <div className={styles.cardContainer}>
        {sections.map(({ name: title, remote_url: imageUrl, id, price }) => (
          <Card key={id} title={title} imageUrl={imageUrl} price={price} />
        ))}
      </div>
    </>
  );
}
