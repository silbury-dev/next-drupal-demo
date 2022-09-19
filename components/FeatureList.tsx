import { BoltIcon, ChatBubbleBottomCenterTextIcon, LightBulbIcon, ScaleIcon } from '@heroicons/react/24/outline';
import React from 'react';

export const features = [
  {
    name: 'Nachhaltigkeit erkennen',
    description:
      'Wir vermitteln, wie Nachhaltigkeit für jedes Unternehmen künftig der entscheidende Wettbewerbsvorteil wird.',
    icon: LightBulbIcon,
  },
  {
    name: 'Nachhaltigkeit planen',
    description:
      'Aus einzelnen Nachhaltigkeitsinitiativen entwickeln wir eine einheitliche Vision und Roadmap.',
    icon: ScaleIcon,
  },
  {
    name: 'Nachhaltigkeit umsetzen',
    description:
      'Umsetzung von Nachhaltigkeitsinitiativen - von Compliance über Produktion bis zur Entwicklung neuer Produkte.',
    icon: BoltIcon,
  },
  {
    name: 'Nachhaltigkeit verstehen',
    description:
      'Schulungen, Workshops und Methodentrainings, um Unternehmen zu Nachhaltigkeits-Champions zu entwickeln.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

export class FeatureList extends React.Component {
  render() {
    return <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Unsere Produkte
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Die Transformation der deutschen Wirtschaft zu einem Markt der Nachhaltigkeit hat begonnen. Mit unseren Produkten helfen wir Unternehmen dabei zum Gewinner der Nachhaltigkeitstransformation zu werden.
          </p>
        </div>
        <div className="mt-10 ">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0 ">
            { // TODO Ausgabe aller Features -> siehe Zeile 4: features Array
              // -------------- Start einzelnes Feature ----------------
              <div key={"TODO: Name des Features"} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
                    {// TODO: FeatureIcon dynamisch setzen
                    }
                    <BoltIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">TODO: Name des Features</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">TODO: Beschreibung des Features</dd>
              </div>
              // -------------- Ende einzelnes Feature ----------------
            }
          </dl>
        </div>
      </div>
    </div>
  }

}



