import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/future/image';
import { Fragment, useEffect, useState } from 'react';
import { FileFileDataAttributes, ParagraphHeroDataAttributes } from '../drupal-api-client';
import { APIs } from './apis';


export const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export interface HeroData {
  heroId?: string;
  fileId?: string;
  heroDataSSR?: ParagraphHeroDataAttributes;
  fileDataSSR?: FileFileDataAttributes;
}


export const HeroComponent = (props: HeroData) => {

  let heroData = props.heroDataSSR;
  let fileData = props.fileDataSSR;

  let data = fetchHeroDataCSR(props);
  fileData = data.fileData;
  heroData = data.heroData;

  return (
    heroData && <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      {
                        <Image width={136} height={19} alt="Your Company" className="h-3 w-auto sm:h-6" src={'/logo.png'} priority={true}></Image>
                      }
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map(item => <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                  </a>)}
                </div>
              </nav>
            </div>

            <Transition as={Fragment} enter="duration-150 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Popover.Panel focus className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600" alt="" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map(item => <a key={item.name} href={item.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                      {item.name}
                    </a>)}
                  </div>
                  <a href="#" className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-blue-800 hover:bg-gray-100">
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {/* <h2 className="text-lg font-semibold text-blue-600">PLACEHOLDER</h2> */}
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{heroData.fieldHeadlineHero}</span>{' '}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                {heroData.fieldSubHeadlineHero}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg">
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-8 py-3 text-base font-medium text-blue-700 hover:bg-blue-200 md:py-4 md:px-10 md:text-lg">
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {fileData &&
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src={fileData.uri.url} alt="" /> 
          //<Image priority sizes="50vw" width={100} height={400} src={fileData.uri.url} alt={fileData.filename} className="my-auto h-auto w-full h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"></Image>
        }
      </div>
    </div>
  );

};
function fetchHeroDataCSR(props: HeroData) {
  const { heroApi, apiMedia, apiFile } = APIs();
  let [fileData, setFileData] = useState<FileFileDataAttributes>(null);
  let [heroData, setHeroData] = useState<ParagraphHeroDataAttributes>(null);
  useEffect(() => {
    heroApi.paragraphHeroEntityGet({ entity: props.heroId })
      .then(result => {
        setHeroData(result.data.attributes);
        return apiMedia.mediaImageEntityGet({ entity: result.data.relationships.fieldHeroimage.data.id });
      })
      .then(media => apiFile.fileFileEntityGet({ entity: media.data.relationships.fieldMediaImage.data.id }))
      .then(file => setFileData(file.data.attributes));
  }, []);
  return { heroData, fileData }
}


export async function fetchHeroDataSSR(heroId: string) {
  const { heroApi, apiMedia, apiFile } = APIs(true);
  return await heroApi.paragraphHeroEntityGet({ entity: heroId })
    .then(async result => {
      return {
        heroDataSSR: result.data.attributes, fileId:
          (await apiMedia.mediaImageEntityGet({ entity: result.data.relationships.fieldHeroimage.data.id })).data.relationships.fieldMediaImage.data.id
      } as HeroData
    })
    .then(async heroData => {
      return { ...heroData, fileDataSSR: (await apiFile.fileFileEntityGet({ entity: heroData.fileId })).data.attributes } as HeroData
    });
}