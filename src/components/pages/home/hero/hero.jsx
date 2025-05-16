import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links.js';

import illustration from './images/KCD-2025-Utrecht_color.png';

const TITLE = 'Kubernetes Community Days Utrecht';

const DESCRIPTION = 'At the Jaarbeurs in Utrecht, the Netherlands!';

const Hero = () => (
  <section className="safe-paddings overflow-hidden bg-[#EDC3C7] bg-opacity-10 pt-28 pb-40 lg:pb-32 md:pt-24 md:pb-[500px] sm:pb-[520px] [@media(max-width:600px)]:pb-[430px] [@media(max-width:460px)]:pb-[420px]">
    <div className="container relative flex md:flex-col">
      <div className="absolute top-0 -left-[40%] h-[566px] w-[566px] translate-x-1/2 bg-white blur-[100px] md:-left-[30%] md:h-[350px] md:w-[350px]" />
      <div className="relative flex-1 md:flex md:flex-col md:items-center md:text-center">
        <time
          className="rounded-3xl bg-yellow px-4 py-2 text-sm font-bold leading-none text-black"
          dateTime="2025-07-03"
        >
          July 3rd, 2025
        </time>
        <h1 className="mt-3 max-w-[570px] text-8xl font-bold leading-denser text-primary-1 lg:max-w-[500px] sm:text-7xl">
          {TITLE}
        </h1>
        <p className="mt-5 max-w-[500px] text-lg leading-normal text-primary-1 lg:max-w-[500px]">
          {DESCRIPTION}
        </p>
        <Button
          className="mt-7 text-white shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
          theme="blue"
          size="lg"
          {...LINKS.eventpage}
        >
          Event page
        </Button>
      </div>
      <img
        className="visible mt-[-6rem] h-[60vh] flex-1 object-contain md:mt-0 md:ml-10 sm:invisible"
        src={illustration}
        width="auto"
        loading="eager"
        alt="Illustration"
      />
    </div>
  </section>
);

export default Hero;
