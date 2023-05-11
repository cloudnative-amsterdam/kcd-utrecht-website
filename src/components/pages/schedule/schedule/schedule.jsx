import clsx from 'clsx';
import React from 'react';

import AdrianPhoto from './images/adrian-reber-photo.jpg';
import AnnieTalvastoPhoto from './images/annie-talvasto-photo.jpg';
import BillPhoto from './images/bill-mulligan-photo.jpg';
import FilipPhoto from './images/filip-nicolic-photo.jpg';
import JuliusVolzPhoto from './images/julius-volz-photo.jpg';
import KatieGamanjiPhoto from './images/katie-gamanji-photo.jpg';
import LenaPhoto from './images/lena-fuhrimann-photo.jpg';
import LisaFalcoPhoto from './images/lisa-falco-photo.jpg';
import LizRicePhoto from './images/liz-rice-photo.jpg';
import MatthiasPhoto from './images/matthias-bertschy-photo.jpg';
import MaxKorbacherPhoto from './images/max-korbacher-photo.jpg';
import PriyaWadhwaPhoto from './images/priya-wadhwa-photo.jpg';
import RetoPhoto from './images/reto-lehmann-photo.jpg';
import RicardoRochaPhoto from './images/ricardo-rocha-photo.jpg';
import SebastianKisterPhoto from './images/sebastian-kister-photo.jpg';
import ThomasGrafPhoto from './images/thomas-graf-photo.jpg';
import TimoSalmPhoto from './images/timo-salm-photo.jpg';

const ITEMS = [
  {
    time: '8:00 AM',
    title: 'Registration',
    duration: '45 min',
  },
  {
    time: '8:45 AM',
    title: 'Welcome',
    duration: '15 min',
  },
  {
    time: '9:00 AM',
    title: 'Simplifying multi-cloud networking with Cilium',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        name: 'Thomas Graf',
        photo: ThomasGrafPhoto,
      },
      {
        name: 'Liz Rice',
        photo: LizRicePhoto,
      },
    ],
  },
  {
    time: '9:30 AM',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    time: '9:45 AM',
    title: 'The state of Green Washing - or how to build sustainable systems with Kubernetes ',
    duration: '30 min',
    speakers: [
      {
        name: 'Max Körbächer',
        photo: MaxKorbacherPhoto,
      },
    ],
    coincidedEvent: {
      time: '9:45 AM',
      title: 'Forensic container checkpointing and analysis',
      duration: '30 min',
      speakers: [
        {
          name: 'Adrian Reber',
          photo: AdrianPhoto,
        },
      ],
    },
  },
  {
    time: '10:15 AM',
    title: 'Coffee Break',
    duration: '30 min',
  },
  {
    time: '10:45 AM',
    title: 'To be announced',
    duration: '30 min',
    speakers: [
      {
        name: 'Ricardo Rocha',
        photo: RicardoRochaPhoto,
      },
    ],
    coincidedEvent: {
      time: '10:45 AM',
      title: 'Demystifying eBPF - eBPF Firewall from scratch',
      duration: '30 min',
      speakers: [
        {
          name: 'Filip Nicolic',
          photo: FilipPhoto,
        },
      ],
    },
  },
  {
    time: '11:15 AM',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    time: '11:30 AM',
    title: 'Responsible AI: The Key to Ethical, Safe and Inclusive Software Development',
    duration: '30 min',
    speakers: [
      {
        name: 'Lisa Falco',
        photo: LisaFalcoPhoto,
      },
    ],
    coincidedEvent: {
      time: '11:30 AM',
      title: 'What Anime Taught Me About K8s & Tech Careers',
      duration: '30 min',
      speakers: [
        {
          name: 'Annie Talvasto',
          photo: AnnieTalvastoPhoto,
        },
      ],
    },
  },
  {
    time: '12:00 AM',
    title: 'Lunch',
    duration: '1h 30min',
  },
  {
    time: '1:30 PM',
    title: 'Reverse Engineering Cloud Native: Interoperability and Community',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        name: 'Katie Gamanji',
        photo: KatieGamanjiPhoto,
      },
    ],
  },
  {
    time: '2:00 PM',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    time: '2:15 PM',
    title: 'Buzzing Across the Cloud Native Landscape with eBPF',
    duration: '30 min',
    speakers: [
      {
        name: 'Bill Mulligan',
        photo: BillPhoto,
      },
    ],
    coincidedEvent: {
      time: '2:15 PM',
      title: 'Streamlined Troubleshooting in Kubernetes',
      duration: '30 min',
      speakers: [
        {
          name: 'Lena Fuhrimann',
          photo: LenaPhoto,
        },
      ],
    },
  },
  {
    time: '2:45 PM',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    time: '3:00 PM',
    title: 'To be announced',
    duration: '30 min',
    speakers: [
      {
        name: 'Julius Volz',
        photo: JuliusVolzPhoto,
      },
    ],
    coincidedEvent: {
      time: '3:00 PM',
      title: 'Tales of Serverless - a story about building scalable applications',
      duration: '30 min',
      speakers: [
        {
          name: 'Reto Lehmann',
          photo: RetoPhoto,
        },
      ],
    },
  },
  {
    time: '3:30 PM',
    title: 'Coffee Break',
    duration: '30 min',
  },
  {
    time: '4:00 PM',
    title: 'Securing your Software Supply Chain on Kubernetes with Sigstore',
    duration: '30 min',
    speakers: [
      {
        name: 'Priya Wadhwa',
        photo: PriyaWadhwaPhoto,
      },
    ],
    coincidedEvent: {
      time: '4:00 PM',
      title: 'Closing the Developer Experience Gap of your Container Platforms',
      duration: '30 min',
      speakers: [
        {
          name: 'Timo Salm',
          photo: TimoSalmPhoto,
        },
      ],
    },
  },
  {
    time: '4:30 PM',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    time: '4:45 PM',
    title:
      "Process is what naturally follows - a cloud platform's guide on people-first transformation",
    duration: '30 min',
    speakers: [
      {
        name: 'Sebastian Kister',
        photo: SebastianKisterPhoto,
      },
    ],
    coincidedEvent: {
      time: '4:45 PM',
      title: "What We've Learned from Scanning 10K+ Kubernetes Clusters",
      duration: '30 min',
      speakers: [
        {
          name: 'Matthias Bertschy',
          photo: MatthiasPhoto,
        },
      ],
    },
  },
  {
    time: '5:15 PM',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    time: '5:30 PM',
    title: 'To be announced',
    duration: '30 min',
    isKeynote: true,
  },
  {
    time: '6:00 PM',
    title: 'Closing',
    duration: '15 min',
  },
  {
    time: '6:15 PM',
    title: 'Apéro',
    duration: '3h 45min',
  },
];

const Schedule = () => (
  <section className="safe-paddings pt-9 pb-48">
    <ul className="mx-auto w-[1072px] rounded-[10px] border border-primary-2 shadow-lg">
      {ITEMS.map(({ time, title, duration, isKeynote, speakers, coincidedEvent }, index) => {
        const isEven = index % 2 === 1;

        return (
          <li
            className={clsx('grid grid-cols-[114px_1fr]', {
              'bg-primary-4': isEven,
              'bg-lightGreen': title === 'Welcome',
              'bg-lightYellow': title === 'Lunch',
              'bg-lightOrange': title === 'Closing',
            })}
            key={index}
          >
            <div className="flex items-center justify-center">
              <time className="mb-10 text-[15px] font-semibold leading-none tracking-tight text-primary-1 opacity-60">
                {time}
              </time>
            </div>
            <div
              className={clsx('border-l border-l-primary-2', {
                'grid grid-cols-2': coincidedEvent,
              })}
            >
              <div className="flex flex-col gap-y-3 px-7 py-6">
                <h3 className="inline-flex items-center gap-x-3 text-lg font-semibold leading-snug tracking-tight text-primary-1">
                  {title}
                  {isKeynote && (
                    <span className="rounded-full bg-blue-1 px-2 py-2 text-xs font-semibold leading-none tracking-tighter text-white">
                      Keynote
                    </span>
                  )}
                </h3>
                <div className="mt-auto flex items-center gap-x-8">
                  <span className="rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1">
                    {duration}
                  </span>
                  {speakers && speakers.length > 0 && (
                    <ul className="relative inline-flex gap-x-5 before:absolute before:top-0 before:bottom-0 before:-left-4 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3">
                      {speakers.map(({ name, photo }, index) => (
                        <li className="" key={index}>
                          <figure className="flex items-center gap-x-2">
                            <img
                              className="h-7 w-7 rounded-full"
                              src={photo}
                              width={28}
                              height={28}
                              alt={`${name} photo`}
                              loading="lazy"
                            />
                            <figcaption className="text-sm font-medium leading-none text-primary-5">
                              {name}
                            </figcaption>
                          </figure>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              {coincidedEvent && (
                <div className="flex flex-col gap-y-3 border-l border-l-primary-2 px-7 py-6">
                  <h3 className="inline-flex items-center gap-x-3 text-lg font-semibold leading-snug tracking-tight text-primary-1">
                    {coincidedEvent.title}
                    {coincidedEvent.isKeynote && (
                      <span className="rounded-full bg-blue-1 px-4 py-2 text-xs font-semibold leading-none tracking-tighter text-white">
                        Keynote
                      </span>
                    )}
                  </h3>
                  <div className="mt-auto flex items-center gap-x-8">
                    <span className="rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1">
                      {coincidedEvent.duration}
                    </span>
                    {coincidedEvent.speakers && coincidedEvent.speakers.length > 0 && (
                      <ul className="relative inline-flex gap-x-5 before:absolute before:top-0 before:bottom-0 before:-left-4 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3">
                        {coincidedEvent.speakers.map(({ name, photo }, index) => (
                          <li className="" key={index}>
                            <figure className="flex items-center gap-x-2">
                              <img
                                className="h-7 w-7 rounded-full"
                                src={photo}
                                width={28}
                                height={28}
                                alt={`${name} photo`}
                                loading="lazy"
                              />
                              <figcaption className="text-sm font-medium leading-none text-primary-5">
                                {name}
                              </figcaption>
                            </figure>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Schedule;
