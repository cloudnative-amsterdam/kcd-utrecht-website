import React from 'react';

import Link from 'components/shared/link';

import WorkingSpirit from './images/working-spirit.png';
import KubeCareers from './images/kube-careers.png';
import KubeEvents from './images/kubevents.svg';
import RebelAstronaut from './images/rebel-astronaut.png';

const TITLE = 'Community & Media Partners';

const ITEMS = [
  { icon: WorkingSpirit, url: 'https://www.workingspirit.nl' },
  { icon: KubeCareers, url: 'https://kube.careers/' },
  { icon: KubeEvents, url: 'https://kube.events/' },
  { icon: RebelAstronaut, url: 'https://rebelastronaut.co.uk/' },
];

const Partners = () => (
  <section className="safe-paddings relative bg-white pt-24 pb-48 lg:pb-40 md:pb-32 sm:pb-24 sm:pt-16">
    <div className="container text-center">
      <h2 className="text-6xl font-bold leading-denser text-primary-1">{TITLE}</h2>

      <ul className="mx-auto mt-20 flex max-w-[1000px] flex-wrap justify-center gap-y-14 gap-x-8">
        {ITEMS.map(({ icon, url }, index) => (
          <li className="flex min-h-[80px] min-w-[280px] items-center justify-center" key={index}>
            <Link className="flex h-full w-full items-center justify-center" to={url}>
              <img
                className="max-w-[210px]"
                src={icon}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Partners;
