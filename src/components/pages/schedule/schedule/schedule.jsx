/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

import JohnStroosnijderPhoto from './images/john-stroosnijder-photo.jpg';
import MarcoVerleunPhoto from './images/marco-verleun-photo.jpg';
import RemySimonsPhoto from './images/remy-simons-photo.jpg';
import SeviKarakulakPhoto from './images/sevi-karakulak-photo.jpg';
import SohanMaheshwarPhoto from './images/sohan-maheshwar-photo.jpg';
import StefanVanGastelPhoto from './images/stefan-van-gastel-photo.jpg';
// UserPhoto is default when no speaker picture is present
import UserPhoto from './images/user-photo.jpg';
// TODO: merge with ITEMS array from components/pages/home/speakers
const ITEMS = [
  {
    time: '8:30',
    title: 'Welcome',
    duration: '30 min',
  },
  {
    time: '9:00',
    title: 'Breakfast',
    duration: '30 min',
  },
  {
    id: '01',
    time: '9:40',
    title: 'Empowering The Teams, Avoiding Micromanagement: The Balance of Leadership',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        name: 'Sarah Gruneisen',
        // photo: SarahGruneisenPhoto,
      },
    ],
    presentation:
      'In the ever-evolving realm of DevOps, challenges aren’t just technical but interpersonal. ' +
      'My presentation delves into the stifling flames of micromanagement and the scorching impact on team members. ' +
      'Recounting my evolution from a fiery to a wise dragon, my talk underscores the significance of self-awareness, ' +
      'mutual respect, and open communication.<br/><br/>' +
      'While it’s natural to perceive micromanagers as fire-breathing beasts, ' +
      'I will reveal the heart within, advocating for understanding, dialogue, and empowerment. ' +
      'By taming our inner dragons, managers and team members can transition from conflict to collaboration, ' +
      'letting innovation soar.',
  },
  {
    time: '10:10',
    title: 'Short break',
    duration: '10 min',
  },
  {
    id: '02',
    time: '10:25',
    title: 'Edge of Tomorrow',
    duration: '35 min',
    speakers: [
      {
        name: 'Stefan van Gastel',
        photo: StefanVanGastelPhoto,
      },
      {
        name: 'John Stroosnijder',
        photo: JohnStroosnijderPhoto,
      },
    ],
    presentation: 'Abstract text in here',
    coincidedEvent: {
      id: '03',
      time: '10:25',
      title: 'Welcome to K8s bakery!',
      duration: '35 min',
      speakers: [
        {
          name: 'Anushka Mittal',
          // photo: AnushkaMittalPhoto,
        },
        {
          name: 'Mritunjay Sharma',
          // photo: MritunjaySharmaPhoto,
        },
      ],
      presentation: 'Put in\n' + 'abstract here',
    },
  },
  {
    time: '10:55',
    title: 'Morning break',
    duration: '20 min',
  },
  {
    id: '04',
    time: '11:20',
    title: 'A Greener, Cost-Effective Cloud with Serverless WebAssembly',
    duration: '35 min',
    speakers: [
      {
        name: 'Sohan Maheshwar',
        photo: SohanMaheshwarPhoto,
      },
    ],
    presentation: 'Abstract text in here',
    coincidedEvent: {
      id: '05',
      time: '11:20',
      title: "Deploying Kubernetes isn't merely technical",
      duration: '35 min',
      speakers: [
        {
          name: 'Giuseppe Gianquitto',
          // photo: GiuseppeGianquittoPhoto,
        },
      ],
      presentation: 'Put in\n' + 'abstract here',
    },
  },
  {
    time: '11:50',
    title: 'Break',
    duration: '10 min',
  },
  {
    id: '06',
    time: '12:00',
    title: 'Cilium: divide et impera the networking stack',
    duration: '35 min',
    speakers: [
      {
        name: 'Remy Simons',
        photo: RemySimonsPhoto,
      },
    ],
    presentation: 'Abstract text in here',
    coincidedEvent: {
      id: '07',
      time: '12:00',
      title: "Killing PET's with CPET",
      duration: '35 min',
      speakers: [
        {
          name: 'Jan Willem',
          // photo: JanWillemPhoto,
        },
        {
          name: 'Sebastiaan Mannem',
          // photo: SebastiaanMannemPhoto,
        },
        {
          name: 'Benoit Schipper',
          // photo: BenoitSchipperPhoto,
        },
      ],
      presentation: 'Put in\n' + 'abstract here',
    },
  },
  {
    time: '12:35',
    title: 'Lunch',
    duration: '1 hour',
  },
  {
    id: '08',
    time: '13:35',
    title: 'Dev to the Future - Improving Developer Experience',
    duration: '35 min',
    speakers: [
      {
        name: 'Kasra Amirsarvari',
        // photo: KasraAmirsarvariPhoto,
      },
    ],
    presentation: 'Abstract text in here',
    coincidedEvent: {
      id: '09',
      time: '13:35',
      title: 'Postgres for a better k8s',
      duration: '35 min',
      speakers: [
        {
          name: 'Maxim Burgerhout',
          // photo: MaximBurgerhoutPhoto,
        },
      ],
      presentation: 'Put in\n' + 'abstract here',
    },
  },
  {
    time: '14:10',
    title: 'Break',
    duration: '10 min',
  },
  {
    id: '10',
    time: '14:20',
    title: 'Getting the Most Out of Service Mesh: Our Top Tips!',
    duration: '35 min',
    speakers: [
      {
        name: 'Andrea Soldino',
        // photo: AndreaSoldinoPhoto,
      },
      {
        name: 'Shweta Vohra',
        // photo: ShwetaVohraPhoto,
      },
    ],
    presentation: 'Abstract text in here',
    coincidedEvent: {
      id: '11',
      time: '14:20',
      title: 'Mapping K8s migration',
      duration: '35 min',
      speakers: [
        {
          name: 'John Keates',
          // photo: JohnKeatesPhoto,
        },
      ],
      presentation: 'Put in\n' + 'abstract here',
    },
  },
  {
    time: '14:55',
    title: 'Afternoon break',
    duration: '20 min',
  },
  {
    id: '12',
    time: '15:15',
    title: 'Gamified cyber security with k8s',
    duration: '35 min',
    speakers: [
      {
        name: 'Peter van Eijk',
        // photo: PeterVanEijkPhoto,
      },
    ],
    presentation: 'Abstract text in here',
  },
  {
    time: '15:50',
    title: 'Break',
    duration: '10 min',
  },
  {
    id: '13',
    time: '16:00',
    title: 'LIGHTNING TALKS',
    duration: '35 min',
    speakers: [
      {
        name: 'Marco Verleun',
        photo: MarcoVerleunPhoto,
      },
      {
        name: 'Louëlla Creemers',
        // photo: LouellaCreemersPhoto,
      },
      {
        name: 'Serdar Kalaycı',
        // photo: SerdarKalayciPhoto,
      },
    ],
    presentation: 'Abstract text in here',
  },
  {
    time: '16:35',
    title: 'Break',
    duration: '10 min',
  },
  {
    id: '14',
    time: '16:45',
    title: 'Closing keynote',
    duration: '35 min',
    isKeynote: true,
    speakers: [
      {
        name: 'Sevi Karakulak',
        photo: SeviKarakulakPhoto,
      },
    ],
    presentation: 'INSERT KEYNOTE ABSTRACT HERE',
  },
  {
    time: '17:30',
    title: 'Drinks / networking',
    duration: '1 hour',
  },
];

const Schedule = ({ location }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCoincidedEvent, setIsCoincidedEvent] = useState(false);
  const [modalDataId, setModalDataId] = useState(0);

  const handleModalShow = (id) => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setModalDataId(id);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setIsCoincidedEvent(false);
    setModalDataId(0);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { state = {} } = location;

      if (state?.modalId) {
        handleModalShow(Number(state.modalId));
      } else {
        handleModalHide();
      }

      if (state?.isCoincidedEvent) {
        setIsCoincidedEvent(true);
      }
    }
  }, [location]);

  return (
    <section className="safe-paddings pt-9 pb-48 lg:px-8 lg:pb-44 md:px-5 md:pb-40 sm:pb-24 sm:pt-10 xs:px-0">
      <ul className="mx-auto w-[1072px] max-w-full rounded-[10px] border border-primary-2 shadow-lg">
        {ITEMS.map(({ id, time, title, duration, isKeynote, speakers, coincidedEvent }, index) => {
          const isEven = index % 2 === 1;

          return (
            <li
              className={clsx(
                'grid grid-cols-[114px_1fr] md:grid-cols-[106px_1fr] sm:grid-cols-1',
                {
                  'bg-primary-4': isEven,
                  'bg-lightGreen': title === 'Welcome',
                  'bg-lightYellow': title === 'Lunch',
                  'bg-lightOrange': title === 'Drinks / networking',
                }
              )}
              key={index}
            >
              <div className="flex items-center justify-center sm:justify-start sm:px-5 sm:pt-5">
                <time className="mb-auto mt-7 text-[15px] font-semibold leading-none tracking-tight text-primary-1 opacity-60 md:mt-5 md:text-sm sm:my-0">
                  {time}
                </time>
                {isKeynote && (
                  <span className="ml-4 hidden rounded-full bg-blue-1 px-2 py-1.5 text-xs font-semibold leading-none tracking-tighter text-white sm:inline-flex">
                    Keynote
                  </span>
                )}
              </div>
              <div
                className={clsx('border-l border-l-primary-2 sm:border-none', {
                  'grid grid-cols-2 sm:grid-cols-1': coincidedEvent,
                })}
              >
                <div
                  className={clsx(
                    'flex flex-col gap-y-3 px-7 py-6 md:py-4 sm:gap-y-2 sm:px-5 sm:pb-4',
                    isKeynote ? 'sm:pt-2' : 'sm:pt-3'
                  )}
                >
                  <h3 className="inline-flex items-center gap-x-3">
                    {id ? (
                      <Button
                        className="!whitespace-normal !text-left text-lg !font-semibold !leading-snug tracking-tight text-primary-1 transition-colors duration-200 hover:text-blue-1 md:text-base"
                        theme="link-primary"
                        onClick={() => handleModalShow(index)}
                      >
                        {title}
                      </Button>
                    ) : (
                      <span className="text-lg font-semibold leading-snug tracking-tight text-primary-1 md:text-base">
                        {title}
                      </span>
                    )}
                    {isKeynote && (
                      <span className="rounded-full bg-blue-1 px-2 py-2 text-xs font-semibold leading-none tracking-tighter text-white sm:hidden">
                        Keynote
                      </span>
                    )}
                  </h3>
                  <div className="mt-auto flex items-center gap-x-8 sm:gap-x-7">
                    <span className="rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 md:text-xs">
                      {duration}
                    </span>
                    {speakers && speakers.length > 0 && (
                      <ul className="relative inline-flex gap-x-5 before:absolute before:top-0 before:bottom-0 before:-left-4 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 sm:gap-x-4">
                        {speakers.map(({ name, photo }, index) => (
                          <li className="" key={index}>
                            <figure className="flex items-center gap-x-2">
                              <img
                                className="h-7 w-7 rounded-full"
                                src={photo || UserPhoto}
                                width={28}
                                height={28}
                                alt={name}
                                loading="lazy"
                              />
                              <figcaption className="text-sm font-medium leading-none text-primary-5 md:text-[13px]">
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
                  <div
                    className={clsx(
                      'flex flex-col gap-y-3 border-l border-primary-2 px-7 py-6 md:py-4 sm:gap-y-2 sm:border-t sm:border-l-0 sm:px-5 sm:pb-4',
                      isKeynote ? 'sm:pt-2' : 'sm:pt-3'
                    )}
                  >
                    <h3 className="inline-flex items-center gap-x-3">
                      {coincidedEvent.id ? (
                        <Button
                          className="!whitespace-normal !text-left text-lg !font-semibold !leading-snug tracking-tight text-primary-1 transition-colors duration-200 hover:text-blue-1 md:text-base"
                          theme="link-primary"
                          onClick={() => {
                            handleModalShow(index);
                            setIsCoincidedEvent(true);
                          }}
                        >
                          {coincidedEvent.title}
                        </Button>
                      ) : (
                        <span className="text-lg font-semibold leading-snug tracking-tight text-primary-1 md:text-base">
                          {coincidedEvent.title}
                        </span>
                      )}
                      {coincidedEvent.isKeynote && (
                        <span className="rounded-full bg-blue-1 px-4 py-2 text-xs font-semibold leading-none tracking-tighter text-white sm:hidden">
                          Keynote
                        </span>
                      )}
                    </h3>
                    <div className="mt-auto flex items-center gap-x-8 sm:gap-x-7">
                      <span className="rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 md:text-xs">
                        {coincidedEvent.duration}
                      </span>
                      {coincidedEvent.speakers && coincidedEvent.speakers.length > 0 && (
                        <ul className="relative inline-flex gap-x-5 before:absolute before:top-0 before:bottom-0 before:-left-4 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 sm:gap-x-4">
                          {coincidedEvent.speakers.map(({ name, photo }, index) => (
                            <li className="" key={index}>
                              <figure className="flex items-center gap-x-2">
                                <img
                                  className="h-7 w-7 rounded-full"
                                  src={photo || UserPhoto}
                                  width={28}
                                  height={28}
                                  alt={`${name} photo`}
                                  loading="lazy"
                                />
                                <figcaption className="text-sm font-medium leading-none text-primary-5 md:text-[13px]">
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
      <Modal
        modalData={isCoincidedEvent ? ITEMS[modalDataId].coincidedEvent : ITEMS[modalDataId]}
        isVisible={isModalVisible}
        isPresentationShow
        onModalHide={handleModalHide}
      />
    </section>
  );
};

export default Schedule;
