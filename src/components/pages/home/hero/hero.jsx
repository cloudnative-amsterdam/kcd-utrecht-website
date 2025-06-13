import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links.js';

import illustration from './images/KCD-2025-Utrecht_color.png';

const TITLE = 'Kubernetes Community Days Utrecht';

const DESCRIPTION = 'At the Jaarbeurs in Utrecht, the Netherlands!';

const Hero = () => (
  <section className="safe-paddings overflow-hidden bg-[#EDC3C7] bg-opacity-10 pt-28 pb-40 lg:pb-32 md:pt-24 md:pb-[500px] sm:pb-[520px] [@media(max-width:600px)]:pb-[430px] [@media(max-width:460px)]:pb-[420px]">
    <div className="container relative flex md:flex-col">
        <h1 className="mt-3 max-w-[570px] text-8xl font-bold leading-denser text-primary-1 lg:max-w-[500px] sm:text-7xl">
          Thank you for attending.
        </h1>
    </div>
  </section>
);

export default Hero;
