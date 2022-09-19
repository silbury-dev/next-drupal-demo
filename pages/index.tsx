import type { NextPage } from 'next'
import FeatureList from '../components/FeatureList'
import HeroComponent from '../components/HeroComponent'
import ProductListComponent from '../components/ProductListComponent'
import RichText from '../components/RichText'


const Home: NextPage = () => {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <>
      {
        // TODO Next/Head
      }
        <title>Silbury - Implementing sustainable futures</title>
        <meta name='description' content="Silbury - Implementing sustainable futures"/>
        <link rel="icon" href="/favicon.ico" />
      </>
      <main>
        {
            // 1. HeroComponent
            // 2. FeatureList
            // 3. RichText
            // 4. ProductListComponent
            <>
            <HeroComponent></HeroComponent>
           {/*<RichText></RichText>*/}
            <ProductListComponent></ProductListComponent>
            <FeatureList></FeatureList>
            </>
        }
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
