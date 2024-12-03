import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Jagrit Seth',
  subTitle: 'Dev portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Jagrit Seth portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* I'm a maker, a curious thinker who enjoys learning and comprehending how things function.",
        '* My journey as a software developer started when I was a just a kid trying to figure out how video games were made.',
        '* I started my career as a full-stack developer around 3 years ago in 2022, and since then I have helped Samsung and Rizzle to develop quality products.',
        '* I have a wide range of skills, of which I can say that I’ve mastered many.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://drive.google.com/file/d/1wcz-5qI9oWWaANVai9U51FyZA-e5bzX0/view?usp=sharing',
          },
        ],
      },
    },
    // {
    //   scale: 15,
    //   displayAt: displayAt('Personal Projects'),
    //   rotation: [Math.PI / 2, 0, 0],
    //   position: [0, -PAGE_DEPH_MARGIN, 0],
    //   title: 'Personal Projects',
    //   footer: '(And also this web-app)',
    //   imageList: {
    //     rows: 2,
    //     separation: 2.5,
    //     leftPadding: -0.4,
    //     topPadding: 0.2,
    //     scale: 0.3,
    //     items: [
    //       {
    //         url: 'websites-preview/nft-place-logo.png',
    //         websiteURL: 'https://nft-place.xyz/',
    //       },
    //       {
    //         url: 'websites-preview/snow-hero.png',
    //         websiteURL: 'https://powtom48.itch.io/snow-the-hero',
    //       },
    //       {
    //         url: 'websites-preview/minecraft-in-js.png',
    //         websiteURL:
    //           'https://www.youtube.com/watch?v=yOUQquusyiY&t=123s&ab_channel=tomugon',
    //       },
    //       {
    //         url: 'websites-preview/fish-chopter.png',
    //         websiteURL: 'https://powtom48.itch.io/fishcopter',
    //       },
    //       {
    //         url: 'websites-preview/odd-clowns.png',
    //         websiteURL: 'https://oddclowns.com/',
    //       },
    //       {
    //         url: 'websites-preview/island-ai.png',
    //         websiteURL: 'https://www.instagram.com/island.ai/',
    //       },
    //     ],
    //   },
    // },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/leetcode.png',
            websiteURL: 'https://leetcode.com/u/noob1ta/',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/jagrit-seth-86685a177',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/trippy-nobita',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:vermajagrit17@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
