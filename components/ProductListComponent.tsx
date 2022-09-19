import Image from 'next/future/image';

const products = [
  {
    id: 1,
    name: 'Tailwind',
    href: 'https://tailwindcss.com/',
    imagesrc: 'http://silburydemo.staging.sites.dropsolid-sites.com/sites/default/files/styles/large/public/2022-09/tailwind-css-1-2.png?itok=RY_CmAIE',
    imageAlt: "Tailwind Logo",
    linktext: "Tailwind",
    subheadline: "A utility-first CSS framework packed with classes like flex , pt-4 , text-center and rotate-90 that can be composed to build any design, directly in your markup ...",
    subheadlineDE: "Ein Utility-First-CSS-Framework, vollgepackt mit Klassen wie flex , pt-4 , text-center und rotate-90 , die zusammengesetzt werden können, um jedes Design direkt in Ihrem Markup zu erstellen ......",
    subheadlineKlingon: "pa' qamDaj ghoSbogh QIpchoHmoHpu'bogh, Qunpu'vam'e' Datu'chugh, vaj qa'Daj ngemHomDaq yIja'. Dara'taHvIS vIDel. ..."
  },
  {
    id: 2,
    name: 'Webpack',
    href: 'https://webpack.js.org/',
    imagesrc: "http://silburydemo.staging.sites.dropsolid-sites.com/sites/default/files/styles/large/public/2022-09/webpacklogo.png?itok=gzxQ_56O",
    imageAlt: "Webpack Logo",
    linktext: "Webpack",
    subheadline: "webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, ..."
  },
  {
    id: 3,
    name: 'Rust',
    href: 'https://www.rust-lang.org/',
    imagesrc: "http://silburydemo.staging.sites.dropsolid-sites.com/sites/default/files/styles/large/public/2022-09/rust_0.png?itok=kMgk1QvG",
    imageAlt: "Rust Logo",
    linktext: "Rust",
    subheadline: "Rust has great documentation, a friendly compiler with useful error messages, and top-notch tooling — an integrated package manager and build tool, smart multi- ..."
  },
  {
    id: 4,
    name: 'React',
    href: 'https://reactjs.org/',
    imagesrc: "http://silburydemo.staging.sites.dropsolid-sites.com/sites/default/files/styles/large/public/2022-09/React_logo_wordmark2_0.png?itok=qyPL2rFF",
    imageAlt: "React Logo",
    linktext: "React",
    subheadline: "Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
  },
  {
    id: 5,
    name: 'NextJS',
    href: 'https://nextjs.org/',
    imagesrc: "http://silburydemo.staging.sites.dropsolid-sites.com/sites/default/files/styles/large/public/2022-09/Nextjs-logo.png?itok=zxoucMxr",
    imageAlt: "NextJS Logo",
    linktext: "NextJS",
    subheadline: "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static ..."
  },
  {
    id: 6,
    name: 'Drupal',
    href: 'https://drupal.org/',
    imagesrc: "http://silburydemo.staging.sites.dropsolid-sites.com/sites/default/files/styles/large/public/2022-09/drupallogo.png?itok=FYLkWj57",
    imageAlt: "Drupal Logo",
    linktext: "Drupal",
    subheadline: "With robust content management tools, sophisticated APIs for multichannel publishing, and a track record of continuous innovation—Drupal is the best digital ..."
  },
  {
    id: 7,
    name: 'Dropsolid',
    href: 'https://dropsolid.com/en',
    imagesrc: "http://silburydemo.staging.sites.dropsolid-sites.com/sites/default/files/styles/large/public/2022-09/Dropsolid.png?itok=n4jxHJsM",
    imageAlt: "Dropsolid Logo",
    linktext: "Dropsolid",
    subheadline: "Dropsolid makes complex marketing technology accessible for ambitious brands, organizations and governments to create the best digital version of their ..."
  },
  // More products...
  // copy from Drupal
]

// TODO ProductListComponent

export default function ProductListComponent() {
	return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Technologien</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          { products.map(product => 
          <div key={product.id} className="group relative">
            <div className="px-0 flex min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                    {
                      // TODO: next/image
                    }
                <Image width={280} height={280} src={product.imagesrc} alt={product.imageAlt} className="h-full w-full object-contain object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href} target={'_blank'}>
                    <span aria-hidden="true" className="absolute inset-0  lg:h-80" />
                    {product.linktext}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.subheadline}</p>
              </div>
            </div>
          </div>
		  )
          }
        </div>
      </div>
    </div>
		) }
