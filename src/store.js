import { reactive } from 'vue';

// Icone Nav Header
export const headerIcons = [
  {
    icon: 'public/HeaderIcons/home.png',
    altIcon: 'public/HeaderIcons/home-2.png',
    name: 'Home',
    hover: false,
  },
  {
    icon: 'public/HeaderIcons/document.png',
    altIcon: 'public/HeaderIcons/document-2.png',
    name: 'Pages',
    hover: false,
  },
  {
    icon: 'public/HeaderIcons/printer.png',
    altIcon: 'public/HeaderIcons/printer-2.png',
    name: 'Blog',
    hover: false,
  },
  {
    icon: 'public/HeaderIcons/cart.png',
    altIcon: 'public/HeaderIcons/cart-2.png',
    name: 'Shop',
    hover: false,
  },
  {
    icon: 'public/HeaderIcons/lab.png',
    altIcon: 'public/HeaderIcons/lab-2.png',
    name: 'Shortcodes',
    hover: false,
  },
  {
    icon: 'public/HeaderIcons/chat.png',
    altIcon: 'public/HeaderIcons/chat-2.png',
    name: 'Support',
    hover: false,
  },
  {
    icon: 'public/HeaderIcons/envelope.png',
    altIcon: 'public/HeaderIcons/envelope-2.png',
    name: 'Contact',
    hover: false,
  },
];

// Icone sezione Welcome Main
export const welcomeIcons = [
  {
    icon: 'public/MainIcons/schoolbag_alt.png',
    name: 'Morbi Etos',
    text: 'Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.',
  },
  {
    icon: 'public/MainIcons/stroller_alt.png',
    name: 'Congue Gravida',
    text: 'Elipsis magna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vitae est.',
  },
  {
    icon: 'public/MainIcons/globe_alt.png',
    name: 'Maecenas Node',
    text: 'Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.',
  },
  {
    icon: 'public/MainIcons/bell_alt.png',
    name: 'Praesent Morbi',
    text: 'Elipsis magna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vitae est.',
  },
];

// immagini carosello
export const carouselImg = reactive([
  {
    src: 'img/gallery_01-690x506.jpg',
    thumbnailSrc: 'img/gallery_01-690x506.jpg',
    alt: 'Immagine 1',
  },
  {
    src: 'img/gallery_07-690x506.jpg',
    thumbnailSrc: 'img/gallery_07-690x506.jpg',
    alt: 'Immagine 2',
  },
  {
    src: 'img/gallery_08-690x506.jpg',
    thumbnailSrc: 'img/gallery_08-690x506.jpg',
    alt: 'Immagine 3',
  },
]);
export const sliderInfo = [
  [
    {
      icon: '312',
      name: 'Eager Explorers',
      text: 'Embracing curiosity within every learning activity.',
    },
    {
      icon: '127',
      name: 'Artistic Minds',
      text: 'Creative expression through various artistic techniques.',
    },
    {
      icon: '82%',
      name: 'Involved Families',
      text: 'Strong partnerships for a supportive educational journey.',
    },
    {
      icon: '634',
      name: 'Healthy Snacks',
      text: 'Wholesome treats to fuel active young minds.',
    },
  ],
  [
    {
      icon: '401',
      name: 'Tech Whizzes',
      text: 'Integrating technology with fun educational apps.',
    },
    {
      icon: '169',
      name: 'Bookworms',
      text: 'Instilling a love for reading from early stages.',
    },
    {
      icon: '95%',
      name: 'Smiling Faces',
      text: 'A smile a day keeps the learning blues away.',
    },
    {
      icon: '890',
      name: 'Playful Spaces',
      text: 'Safe environments that inspire imaginative play.',
    },
  ],
  [
    {
      icon: '524',
      name: 'Little Athletes',
      text: 'Promoting teamwork and physical fitness for all.',
    },
    {
      icon: '268',
      name: 'Science Lab',
      text: 'Discovering the wonders of science hands-on.',
    },
    {
      icon: '78%',
      name: 'Community Spirit',
      text: 'Learning to give back through local initiatives.',
    },
    {
      icon: '701',
      name: 'Field Trips',
      text: 'Educational excursions that expand horizons.',
    },
  ],
  [
    {
      icon: '359',
      name: 'Nature Lovers',
      text: 'Exploring the environment with respect and wonder.',
    },
    {
      icon: '212',
      name: 'Music Makers',
      text: 'Harmony and melody in daily rhythms.',
    },
    {
      icon: '89%',
      name: 'Confident Speakers',
      text: 'Nurturing orators with storytelling and drama.',
    },
    {
      icon: '953',
      name: 'Cultural Festivals',
      text: 'Celebrating diversity through global traditions.',
    },
  ],
  [
    {
      icon: '488',
      name: 'Budding Artists',
      text: 'Every color and stroke is a step towards creativity.',
    },
    {
      icon: '194',
      name: 'Language Lessons',
      text: 'Bilingual beginnings for a world of opportunities.',
    },
    {
      icon: '67%',
      name: 'Parent Workshops',
      text: 'Collaborative learning extends to the whole family.',
    },
    {
      icon: '869',
      name: 'Garden Club',
      text: 'Growing minds and plants side by side.',
    },
  ],
  [
    {
      icon: '536',
      name: 'Future Leaders',
      text: 'Fostering decision-making and leadership skills early on.',
    },
    {
      icon: '273',
      name: 'Math Magicians',
      text: 'The magic of numbers revealed through fun activities.',
    },
    {
      icon: '91%',
      name: 'Supportive Environment',
      text: 'Every child is supported to reach their potential.',
    },
    {
      icon: '1078',
      name: 'Nutrition Education',
      text: 'Learning about healthy eating by doing and tasting.',
    },
  ],
];
