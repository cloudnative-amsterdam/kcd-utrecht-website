import React from 'react';

import CardIllusrtation from './images/card-illustration.jpg';

const TITLE = 'Venue information';

const Venue = () => (
  <section className="safe-paddings bg-gray-12 py-40">
    <div className="container-md">
      <div className="text-2xl">
        <p>
          <span className="font-bold">Kubernetes Community Days</span> (KCDs) are global,
          community-organized events that gather adopters and technologists from open source and
          cloud native communities, supported by the Cloud Native Computing Foundation (CNCF).
        </p>
        <p className="mt-7">
          This is the first KCD in <span className="font-bold">Switzerland</span>, and we’re excited
          to bring the community together. We want to provide a platform for professionals and
          experts from all levels and backgrounds to learn, network, and share their knowledge on
          all things cloud native.
        </p>
      </div>

      <div className="mt-40">
        <h2 className="mt-3 text-center text-6xl font-bold leading-tight text-primary-1">
          {TITLE}
        </h2>
        <div className="mt-14 flex justify-between">
          <div className="flex w-[384px] flex-col rounded shadow-[0_14px_40px_#CCCCCC]">
            <img
              src={CardIllusrtation}
              width={384}
              height={200}
              loading="eager"
              alt="card-illustration"
            />
            <div className="pt-5 pb-8 pl-10 pr-16 leading-normal">
              <p className="text-2xl font-semibold ">
                Google HQ <br />
                at Zurich Europaallee
              </p>
              <p className="mt-5 text-xl text-[#262F59] opacity-60">
                Europaallee 1st - 9th Floors, Basement & Ground, 8004 Zürich, Switzerland
              </p>
            </div>
          </div>

          <div className="mt-9 w-[520px] text-xl leading-normal">
            <p>
              The Kubernetes Community Days in Zurich will be held at the Google HQ at Zurich
              Europaallee, a modern and convenient location next to the train station. Attendees can
              expect to enjoy a variety of vegetarian and vegan food options throughout the day.
            </p>
            <p className="mt-5">
              Don’t miss out on the opportunity to connect with fellow attendees and continue the
              conversation at the networking Apéro.
            </p>
            <p className="mt-5 font-bold">We can't wait to see you there!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Venue;
