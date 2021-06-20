import Layout from '../components/layout/Layout'
import MenuContainer from '../components/home/MenuContainer'

export async function getServerSideProps() {
  const response = await fetch(
    'https://finalbackend1092.herokuapp.com/categories'
  );
  const categories = await response.json();
  console.log('categories', categories)

  return {
    props: {
      categories,
    }
  }
}

export default function Home({ categories }) {
  return (
    <Layout>
      <MenuContainer key={categories[0].cid} categories={categories} />
    </Layout>
  )
}