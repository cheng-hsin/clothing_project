import Layout from '../../components/layout/Layout';
import ShopContainer from '../../components/shop/ShopContainer';
// import Products from '../../components/home/Product';

export async function getServerSideProps() {
  const response = await fetch(
    'https://finalbackend1092.herokuapp.com/products'
  );
  const products = await response.json();
  console.log('products', products);

  return {
    props: {
      products,
    },
  };
}

export default function Shop({ products }) {
  return (
    <Layout>
      <ShopContainer key={products[0].id} products={products} category='Shop' />
    </Layout>
  );
}
