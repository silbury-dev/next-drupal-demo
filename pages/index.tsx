import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { APIs } from '../components/apis'
import { FeatureList } from '../components/FeatureList'
import { fetchHeroDataSSR, HeroComponent, HeroData } from '../components/HeroComponent'
import { fetchProductDataSSR, ProductListComponent, ProductListData } from '../components/ProductListComponent'
import { ContentBasicPageApi, NodePageData } from '../drupal-api-client'



const Home: NextPage = (props:PageData) => {
 const { pageApi } = APIs();

  let pageData = props.pageData;
  let heroData = props.heroData;

  //pageData = fetchPageDataCSR(pageApi)
  
  
  return (

    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        {pageData?.attributes && <title>{pageData.attributes.title}</title>}
        {pageData?.attributes && <meta name='description' content={pageData.attributes.title}/>}
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {
        pageData?.relationships && <main>
          <HeroComponent heroId={pageData.relationships.fieldHeroContent.data.id} heroDataSSR={heroData?.heroDataSSR} fileDataSSR={heroData?.fileDataSSR}></HeroComponent>
          <ProductListComponent relatedSolutionId={pageData.relationships.fieldComponent.data[0].id} products={props.productData.products}></ProductListComponent>
          <FeatureList></FeatureList>
        </main>
      }

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://silbury.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image  width={136} height={19} src="/logo.png" alt="Silbury Logo"  />
        </a>
      </footer>
    </div>
  )

}

function fetchPageDataCSR(pageApi: ContentBasicPageApi) {
  let [pageData, setPageData] = useState<NodePageData>(null);
  useEffect(() => {
    pageApi.nodePageGet({ filterFieldPathValue: "/landingpage" }).then(v => setPageData(v.data[0]))
  }, []);
  return pageData;
}

async function fetchPageDataSSR(api: ContentBasicPageApi) {
  return await api.nodePageGet({ filterFieldPathValue: "/landingpage" }).then(v => v.data[0]);
}

export async function getStaticProps() {
  const { pageApi } = APIs(true);
  let pageData = await fetchPageDataSSR(pageApi) as NodePageData;
  let heroData = await fetchHeroDataSSR( pageData.relationships.fieldHeroContent.data.id);
  let productData = await fetchProductDataSSR(pageData.relationships.fieldComponent.data[0].id)
  return {
    props: JSON.parse(JSON.stringify({pageData, heroData, productData}, function (key, value) {return (value === "") ? undefined : value}))
  }
}


interface PageData {
  pageData?: NodePageData;
  heroData?: HeroData;
  productData?: ProductListData
}
export default Home
