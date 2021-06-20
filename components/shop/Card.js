import styles from './Card.module.scss';

export default function Card({ cid, title, imageUrl, price }) {
  // console.log('cid', cid);
  return (
    <div className={styles.el_wrapper}>
      <div className={styles.box_up}>
        <img className={styles.img} src={imageUrl} alt='' />
        <div className={styles.img_info}>
          <div className={styles.info_inner}>
            <span className={styles.p_company}>{title}</span>
          </div>
        </div>
      </div>

      <div className={styles.box_down}>
        <div className={styles.h_bg}>
          <div className={styles.h_bg_inner}></div>
        </div>

        <a className={styles.cart} href='#'>
          <span className={styles.price}>${price}</span>
          <span className={styles.add_to_cart}>
            <span className={styles.txt}>Buy it!</span>
          </span>
        </a>
      </div>
    </div>
  );
}
