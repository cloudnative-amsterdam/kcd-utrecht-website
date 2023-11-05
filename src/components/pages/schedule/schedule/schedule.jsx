/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

import JohnStroosnijderPhoto from './images/john-stroosnijder-photo.jpg';
import MarcoVerleunPhoto from './images/marco-verleun-photo.jpg';
import RemySimonsPhoto from './images/remy-simons-photo.jpg';
import SarahGruneisenPhoto from './images/sarah-gruneisen-photo.jpg';
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
        photo: SarahGruneisenPhoto,
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
    presentation:
      'Not all edges are alike. The Dutch Ministry Of Defence (MoD) has a need for edge computing in some very special, ' +
      'high demanding and constrained locations. ' +
      'Besides modern datacenters, the MoD also requires computing power and storage on remote locations. ' +
      'These can be in small local datacenters (aka broom closets) or abroad in (physical) containers or tents, ' +
      'but also think of ships and vehicles that are on the move and not always connected to the network or main power grid. ' +
      'Running edge computing on these locations is always an issue. This askes for a new approach on edge computing, ' +
      'making it robust and secure with a minimal power consumption, ' +
      'but still easy to use. We will share our vision and work on creating an army green tainted edge, ' +
      'using green energy resources, mobility and modern communication methods.',
    // coincidedEvent: {
    //   id: '03',
    //   time: '10:25',
    //   title: 'Welcome to K8s bakery!',
    //   duration: '35 min',
    //   speakers: [
    //     {
    //       name: 'Anushka Mittal',
    //       // photo: AnushkaMittalPhoto,
    //     },
    //     {
    //       name: 'Mritunjay Sharma',
    //       // photo: MritunjaySharmaPhoto,
    //     },
    //   ],
    //   presentation:
    //     'Welcome to K8s bakery! Pods, Services, Deployments & other in house products are glaring at you but what if you want a cake that’s designed for your needs & occasion? Enter Custom Resource Definition! What is a CRD manifest and how to write that? Let’s bring this imaginative world of K8s bakery to KCD Utrecht with this session. In this talk, we will guide you in creating your first CRD that will help you create the object or what we call the cake of your desire! Let us answer WHAT a CRD means, WHEN you would write one, WHY & HOW the flexibility of CRDs allows you to define & manage custom resources that align with your specific ‘cake’ i.e. application requirements. A session on CRDs with an analogy of bakery will be incomplete without talking about the icing of controllers & operators in K8s. We will see how all the pieces fit together in writing a functional CRD in an interactive demo.',
    // },
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
    presentation:
      'Software Carbon Intensity (SCI) quantifies emissions from an application, combining operational and hardware emissions. Serverless functions reduce operational emissions by running apps on-demand, but faces cold-start delays. WebAssembly (Wasm) offers a solution to cold-start issues with near-instant startup, akin to containers but more efficiently.<br/><br/>' +
      'Wasm modules are just as secure as containers with default sandboxing, yet they start almost instantly (in microseconds). In this session, we discuss why Wasm is the ideal & greenest unit of compute for Serverless applications and how you can get started using Serverless Wasm with Spin - an open source developer tool. We’ll demo running AI inferencing Spin applications and discuss how it also enables better GPU resource sharing. By the end, you’ll have an understanding of the characteristics that make Wasm a cost-effective and sustainable unit for a greener cloud.',
    coincidedEvent: {
      id: '05',
      time: '11:20',
      title: 'Deploying Kubernetes in hostile environments',
      duration: '35 min',
      speakers: [
        {
          name: 'Giuseppe Gianquitto',
          // photo: GiuseppeGianquittoPhoto,
        },
      ],
      presentation:
        "Deploying Kubernetes isn't merely technical; it's steering through socio-technical hurdles with often resistant stakeholders. Their resistance springs from:<br/><br/>" +
        "- K8s's perceived complexity.<br/>" +
        '- Hesitancy toward "trending" tech.<br/>' +
        '- Reluctance to embrace new paradigms, risking lost expertise in traditional IT.<br/>' +
        '- Unfamiliarity with the cloud-native model and needed architectural shifts.<br/>' +
        "- Further complicating matters, many misjudge or downplay K8s's depth, swayed by multi-cloud allure and vendor pitches.<br/><br/>" +
        "Drawing from my Kubernetes journey since 2016, especially in the public sector (education and research), this talk unveils these persistent challenges and our navigation strategies. It isn't just about tech, but a tech lead's voyage advocating for Kubernetes amidst varying perspectives.",
    },
  },
  {
    time: '11:50',
    title: 'Short break',
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
    presentation:
      'In the world of distributed computing where everything goes over the wire, securing the network is key to defending your data. However, traditional struggle to keep up with the dynamic world of cloud native environments. Faced with this dilemma, ilionx adapted Cilium to overcome these challenges.<br/><br/>' +
      'This talk walks through our journey from using disconnected point solutions like Flannel for networking, NSG for network segmentation, and Fortinet for firewalling towards a more integrated and automated set up with just Cilium. It will cover how we implemented network policy first with Calico and then with Cilium to separate tenants and how we codified our network security to make it self service for developers. The audience will walk away understanding how Cilium can enable them to simplify their networking stack and automate security in the fast moving cloud native world.',
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
      presentation: 'Updated talk abstract to be received.',
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
    title: 'Migrating k8s',
    duration: '35 min',
    speakers: [
      {
        name: 'John Keates',
        // photo: JohnKeatesPhoto,
      },
    ],
    presentation:
      'During our journey of migrating from a homegrown microservices platform to a Kubernetes and other CNCF projects powered setup, we encountered a few scenarios that required us to evolve from separate individual clusters, to multi-cluster and then all the way to istio-multi-mesh. Using ArgoCD, KEDA, Istio and a few other projects we managed to deliver a setup that empowers developers, lowered our cost, increased the adoption of new features while keeping everything running.<br/><br/>' +
      'This sounds like an impossible story where somehow everything gets better, which is usually not how such huge a change turns out. In this talk, we will present where we came from, what components we cobbled together and how many attempts it took to actually migrate a live system.',
    coincidedEvent: {
      id: '09',
      time: '13:35',
      title: 'Postgres on Kubernetes: the time is now!',
      duration: '35 min',
      speakers: [
        {
          name: 'Maxim Burgerhout',
          // photo: MaximBurgerhoutPhoto,
        },
      ],
      presentation:
        'The ability to run stateful applications in general, and RDMS in particular, on Kubernetes is relatively new, but brings new and exciting capabilities to developers, DBAs and devops teams alike. Think of self-service cluster creation and management, self-service backup and restore, automatic configuration of point-in-time recovery scenarios, etc. On top of that, by making Postgres clusters Kubernetes resources, you can now apply GitOps, CI/CD pipelines like Tekton and policy frameworks to your database.',
    },
  },
  {
    time: '14:10',
    title: 'Short break',
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
    presentation:
      "Handling service topologies in Kubernetes and figuring out how they connect can be challenging, especially when you have a big list of over 2500 services to start with. In this session, we'll spill the beans on our 'oops' moments to make your journey a walk in the park! Attendees will discover how to integrate service dependencies effectively into the service mesh and ensure that Envoy performs optimally without being overwhelmed. Engineers will grasp techniques for managing services configurations. Furthermore, we'll explore how to seamlessly extend mesh behavior to gateways. Join us to unearth tips for maximizing the benefits of the Kubernetes service mesh, emphasizing Envoy's crucial role.",
    coincidedEvent: {
      id: '11',
      time: '14:20',
      title: 'Mapping K8s migration',
      duration: '35 min',
      speakers: [
        {
          name: 'Rajalakshmi Rajamuthu',
          // photo: RajalakshmiRajamuthuPhoto,
        },
      ],
      presentation:
        "As organizations set sail on their Kubernetes migration journey, they encounter a new world of opportunities and challenges.Embarking on a journey towards Kubernetes migration can always be a formidable task. In this paper, will guide you through the process of mapping your migration path, helping you make informed decisions that align with your organizatio's goals and resources. Drawing from real-world experiences and best practices, our paper will provide a comprehensive roadmap for successfully navigating the Kubernetes migration landscape.",
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
    title: 'Our journey in building a gamified cyber security platform with k8s',
    duration: '35 min',
    speakers: [
      {
        name: 'Peter van Eijk',
        // photo: PeterVanEijkPhoto,
      },
    ],
    presentation:
      'The JointCyberRange is a facility for gamified cyber security education. It allows to create CTF (Capture the Flag) events and courses. Think of it as a CyberRange as a Service, as it can run multiple independent event tenants. We have hosted several events on it, including the Dutch national ‘Challenge the Cyber’, with 100+ participants.<br/><br/>' +
      'Initiated by the Haagsche Hogeschool and the Hogeschool Utrecht, it was developed by several student teams. ' +
      'It runs on Kubernetes to provide scalability, in particular for container-based challenges. ArgoCD is used for GitOps. We’ll discuss the good, the bad and the ugly of our approach.<br/><br/>' +
      'Topics we’d discuss include architectural choices, tools, migration issues, challenges of working with student teams, mistakes that we made, production war stories, stuff that we are proud of, and so on.',
    coincidedEvent: {
      id: '13',
      time: '15:15',
      title: 'Dev to the Future - Improving Developer Experience',
      duration: '35 min',
      speakers: [
        {
          name: 'Kasra Amirsarvari',
          // photo: KasraAmirsarvariPhoto,
        },
      ],
      presentation:
        'This talk delves into the transformative journey of modernizing developer workflows via an Internal Developer Platform (IDP) orchestrated through Kubernetes. This talk covers the intersection of Platform Engineering and Kubernetes, demonstrating how Kubernetes can serve as a runtime as well as a cloud-based development environment. With a focus on self-service capabilities, the presentation outlines how an IDP can alleviate tooling complexity, minimize time-to-value, and augment the Developer Experience, thereby leading to more efficient, high-quality software delivery.',
    },
  },
  {
    time: '15:50',
    title: 'Short break',
    duration: '10 min',
  },
  {
    id: '14',
    time: '16:00',
    title: '⚡️ Lightning Talks ⚡️',
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
    presentation:
      'Short and interesting talks:<br/>' +
      '⚡ Find CVEs with ease<br/>' +
      '⚡ Docker & Kubernetes Unboxed<br/>' +
      '⚡ Back to basics: 12 Factor App in Cloud Native Era',
  },
  {
    time: '16:35',
    title: 'Short break',
    duration: '10 min',
  },
  {
    id: '15',
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
