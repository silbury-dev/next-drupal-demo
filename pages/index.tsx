import { render } from '@headlessui/react/dist/utils/render'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FeatureList } from '../components/FeatureList'
import {  HeroComponent } from '../components/HeroComponent'
import { ProductListComponent } from '../components/ProductListComponent'
import { RichText } from '../components/RichText'





const Home: NextPage = () => {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Silbury - Implementing sustainable futures</title>
        <meta name='description' content="Silbury - Implementing sustainable futures"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {
          // TODO Komponenten referenzieren
            // 1. HeroComponent
            // 2. FeatureList
            // 3. RichText
            // 4. ProductListComponent
            
            
        }
        <HeroComponent></HeroComponent>
        <FeatureList></FeatureList>
        <RichText></RichText>
        <ProductListComponent></ProductListComponent>
        
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://silbury.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img alt="Silbury Logo" className="h-3 w-auto sm:h-6" src="./logo.png" />
        </a>
      </footer>
    </div>
  )
}
export default Home
