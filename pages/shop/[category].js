import Layout from '../../components/layout/Layout';
import CardContainer from '../../components/shop/CardContainer';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const category = context.params.category;
  const response = await fetch(
    `https://finalbackend1092.herokuapp.com/products?category.name=${category}`
  );
  const products = await response.json();
  console.log('category', category);
  console.log('products', products);

  return {
    props: {
      products,
      category,
    },
  };
}

export default function CategoryPage({ products, category }) {
  const router = useRouter();
  return (
    <Layout>
      <CardContainer
        key={products[0].id}
        products={products}
        category={category}
      />
    </Layout>
  );
}
