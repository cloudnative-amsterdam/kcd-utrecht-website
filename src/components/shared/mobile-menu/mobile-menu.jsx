import { m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import MENUS from 'constants/menus';
import useScrollOverflow from 'hooks/use-scroll-overflow';

import Button from '../button';

const ANIMATION_DURATION = 0.2;

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 40,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen, onButtonClick }) => {
  const controls = useAnimation();

  useScrollOverflow(controls, isOpen);

  const handleAnchorClick = (e) => {
    e.preventDefault();

    const id = e.target.firstChild.data;
    const element = document.getElementById(id);

    if (element) {
      const indent = 50;
      const elementTop = element.getBoundingClientRect().top;
      const elementOffset = window.pageYOffset + elementTop - indent;

      window.scrollTo({
        top: elementOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        className="safe-paddings fixed inset-0 z-[-1] mt-[70px] hidden overflow-x-hidden overflow-y-hidden bg-white px-8 pt-[72px] pb-5 lg:flex lg:flex-col lg:justify-between"
        initial="from"
        animate={controls}
        variants={variants}
      >
        <div className="scrollbar-hidden my-auto flex h-full w-full overflow-x-hidden overflow-y-scroll">
          <ul className="mx-auto flex flex-col justify-center space-y-3 text-center text-xl font-semibold text-primary-1">
            {MENUS.mobile.map(({ text }, index) => (
              <li key={index}>
                <Button
                  className="block py-4"
                  theme="link-primary"
                  to={`#${text}`}
                  onClick={(handleAnchorClick, onButtonClick)}
                >
                  {text}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Button
          className="mt-7 text-white"
          to="https://tickets.kcdzurich.ch/"
          theme="blue"
          size="lg"
        >
          Get your ticket
        </Button>
      </m.nav>
    </LazyMotion>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  onButtonClick: PropTypes.func.isRequired,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
