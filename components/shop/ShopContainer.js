import styles from './CardContainer.module.scss';
import Card from './Card';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function ShopContainer({ products, category }) {

  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;

  const displayProducts = products.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const pageCount = Math.ceil(products.length / itemsPerPage);
  return (
    <>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Niconne&display=swap'
        rel='stylesheet'
      ></link>
      <h1 className={styles.title}>{category} Page</h1>
      <div className={styles.cardContainer}>
        {displayProducts.map(
          ({ name: title, remote_url: imageUrl, id, price }) => (
            <Card key={id} title={title} imageUrl={imageUrl} price={price} />
          )
        )}
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles.paginationBttns}
        previousClassName={styles.previousBttn}
        nextLinkClassName={styles.nextBttn}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />
    </>
  );
}
