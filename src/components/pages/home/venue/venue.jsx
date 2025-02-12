import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links.js';

import RoutePic from './images/route-to-event.png';

const Venue = () => (
  <section className="safe-paddings bg-white py-40 pb-20 md:py-24 sm:py-16">
    <div className="container-md text-2xl text-primary-1 sm:text-lg">
      <p>
        <span className="font-bold">Kubernetes Community Days</span> (KCDs) are global,
        community-organized events that gather adopters and technologists from open source and cloud
        native communities, supported by the Cloud Native Computing Foundation (CNCF).
      </p>
      <p className="mt-0">
        <span className="font-bold">Location:</span>{' '}
        <Link {...LINKS.googlemaps}>
          <u>Jaarbeurs</u>
        </Link>
        , for parking info view
        <Link {...LINKS.parkingInfo}>
          <u> Jaarbeurs plattegrond</u>
        </Link>
      </p>
      <img src={RoutePic} alt="Route to event" className="rounded-[4px]" />
      {/* <p className="mt-7">
        Watch all the speakers’ sessions videos from December 1, 2023 on{' '}
        <Link className="font-semibold" to="/archive" theme="blue-underlined">
          Archive page
        </Link>
        !
      </p> */}
    </div>
  </section>
);

export default Venue;
