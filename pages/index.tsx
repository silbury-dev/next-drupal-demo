import type { NextPage } from 'next'
import HeroComponent from "../components/HeroComponent";
import FeatureList from "../components/FeatureList";
import RichText from "../components/RichText";
import ProductListComponent from "../components/ProductListComponent";
import Head from 'next/head';


const Home: NextPage = () => {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
        <title>Silbury - Implementing sustainable futures</title>
        <meta name='description' content="Silbury - Implementing sustainable futures"/>
        <link rel="icon" href="/favicon.ico" />
	</Head>
      <main>
            <HeroComponent />
            <FeatureList />
            {/* <RichText/>*/ }
            <ProductListComponent/>
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://silbury.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          {
            // TODO: next/image
          }
          <img alt="Silbury Logo" className="h-3 w-auto sm:h-6" src="./logo.png" />
        </a>
      </footer>
    </div>
  )
}
export default Home
