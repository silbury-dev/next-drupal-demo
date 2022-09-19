import React from 'react';


export class RichText extends React.Component {
    render() {
        return <section className="py-20 xl:pt-24 xl:pb-28 bg-white" style={{ backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: "center" }}>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
                        <h3 className="mb-5 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">Nachhaltigkeit umsetzen</h3>
                        <p className="mb-6 text-lg md:text-xl leading-8 text-coolGray-500 font-semibold">Silbury hilft dabei, Innovationen schnell und erfolgreich auf dem Markt zu platzieren</p>
                        <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">Hierbei handelt es sich um einen Platzhaltertext, der nur überflogen wird, sodass der Inhalt keine Rolle spielt. Wer sich diese Zeilen tatsächlich durchliest, sollte sich Gedanken machen ob er seine Zeit nicht sinnvoller investieren kann. Sind alle Workshopaufgaben bereits erledigt? Dann könntest Du einem Kollegen helfen, der noch nicht so viel Erfahrung mit NextJS gemacht hat und sich über deine Unterstützung bestimmt freuen würde.</p>
                        <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">With Flex, you can run your business on one platform, seamlessly across all digital channels&mdash;and grow it anywhere. With a single point of view, Flex integrates customer data and marketing tools in one flexible cloud platform that lets you get business results wherever they show up.</p>
                        <p className="text-lg font-medium leading-7 text-coolGray-500">Flex is the only saas business platform that lets you run your business on one platform.</p>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="mb-5 text-lg font-medium leading-7 text-coolGray-500">
                            <span>With Flex, you can run your business on one platform, seamlessly across all digital channels&mdash;and grow it anywhere. With a single point of view, Flex integrates customer data and marketing tools in one flexible cloud platform that lets you get business results wherever they show up.</span>
                            <ol className="mb-5 list-decimal list-inside text-lg font-medium leading-7 text-coolGray-500">
                                <li>
                                    <span className="text-lg font-medium leading-8 text-coolGray-500">Enterprise software for startups</span>
                                </li>
                                <li>
                                    <span className="text-lg font-medium leading-8 text-coolGray-500">Time is money. Stop jumping from tool to tool with all the hassle of integrations.</span>
                                </li>
                                <li>
                                    <span className="text-lg font-medium leading-8 text-coolGray-500">Now you can manage your entire business on one platform.</span>
                                </li>
                            </ol>
                        </div>
                        <p className="text-lg font-medium leading-7 text-coolGray-500">With a single point of view, Flex integrates customer data and marketing tools in one flexible cloud platform that lets you get business results wherever they show up. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>
                    </div>
                </div>
            </div>
        </section>
    }
}