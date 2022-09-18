import { useEffect, useState } from 'react';
import { APIs } from './apis';
import Image from 'next/future/image';


interface ProductData {
  headline?: string;
  subheadline?: string;
  link?: string;
  linktext?: string;
  imagesrc?: string;
  id?: string;
  mediaid?: string;

}
export interface ProductListData {
  relatedSolutionId?: string;
  products?: ProductData[];

}

export const ProductListComponent = (props: ProductListData) => {

  let data = props;
  data = fetchProductDataCSR(props.relatedSolutionId).pageData

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Technologies</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.products && data.products.map(product => <div key={product.id} className="group relative">
            <div className="px-0 flex min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              {
                <img src={product.imagesrc} alt={product.imagesrc} className="h-full w-full object-contain object-center lg:h-full lg:w-full" />
                //<Image sizes="40vw"  width={100} height={200} src={product.imagesrc} alt={product.headline} className="my-auto h-auto w-full"></Image>
              }
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.link} target={'_blank'}>
                    <span aria-hidden="true" className="absolute inset-0  lg:h-80" />
                    {product.linktext}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.subheadline}</p>
              </div>
              {/*  <p className="text-sm font-medium text-gray-900">{product.mediaid}</p> */}
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );

}

function fetchProductDataCSR(relId: string) {
  const { apiMedia, apiFile, relApi, pageApi } = APIs();
  let [pageData, setPageData] = useState<ProductListData>(null);
  useEffect(() => {
    relApi.paragraphRelatedSolutionsEntityGet({ entity: relId })
      .then(result => {
        let rels = result.data.relationships.fieldSolutions.data;
        return Promise.all(rels.map(rel => pageApi.nodePageEntityGet({ entity: rel.id })))
      })
      .then(pages => Promise.all(pages.map(page =>
        apiMedia.mediaImageEntityGet({ entity: page.data.relationships.fieldTeaserImagePage.data.id }).then(media => {
          return apiFile.fileFileEntityGet({ entity: media.data.relationships.fieldMediaImage.data.id }).then(file => {
            return {
              id: page.data.id,
              mediaid: media.data.relationships.fieldMediaImage.data.id,
              headline: page.data.attributes.fieldTeaserHeadlinePage,
              subheadline: page.data.attributes.fieldTeaserSubheadlinePage,
              link: page.data.attributes.fieldTeaserLinkPage.uri,
              linktext: page.data.attributes.fieldTeaserLinkPage.title,
              imagesrc: file.data.attributes.uri.url
            } as ProductData;
          })

        })

      )))
      .then(pages => {
        console.log(pages)
        setPageData({ relatedSolutionId: relId, products: pages } as ProductListData)
      }
      );
  }, []);
  return { pageData }
}

export async function fetchProductDataSSR(relId: string) {
  const { apiMedia, apiFile, relApi, pageApi } = APIs(true);

  return await relApi.paragraphRelatedSolutionsEntityGet({ entity: relId })
    .then(result => {
      let rels = result.data.relationships.fieldSolutions.data;
      return Promise.all(rels.map(rel => pageApi.nodePageEntityGet({ entity: rel.id })))
    })
    .then(pages => Promise.all(pages.map(page =>
      apiMedia.mediaImageEntityGet({ entity: page.data.relationships.fieldTeaserImagePage.data.id }).then(media => {
        return apiFile.fileFileEntityGet({ entity: media.data.relationships.fieldMediaImage.data.id }).then(file => {
          return {
            id: page.data.id,
            mediaid: media.data.relationships.fieldMediaImage.data.id,
            headline: page.data.attributes.fieldTeaserHeadlinePage,
            subheadline: page.data.attributes.fieldTeaserSubheadlinePage,
            link: page.data.attributes.fieldTeaserLinkPage.uri,
            linktext: page.data.attributes.fieldTeaserLinkPage.title,
            imagesrc: file.data.attributes.uri.url
          } as ProductData;
        })
      })
    )))
    .then(data => {
      return { relatedSolutionId: relId, products: data } as ProductListData
    });
} 