import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _categories = [
  { label: 'Marketing', path: '' },
  { label: 'Community', path: '' },
  { label: 'Tutorials', path: '' },
  { label: 'Business', path: '' },
  { label: 'Management', path: '' },
];

// ----------------------------------------------------------------------

export const _testimonials = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.avatar(index),
  createdAt: _mock.time(index),
  ratingNumber: 5,
  review:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: 'carbon:logo-facebook',
    color: '#1877F2',
  },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: 'carbon:logo-instagram',
    color: '#E02D69',
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
  },
  {
    value: 'twitter',
    label: 'Twitter',
    icon: 'carbon:logo-twitter',
    color: '#00AAEC',
  },
];

// ----------------------------------------------------------------------

const LAT_LONG = [
  [33, 65],
  [-12.5, 18.5],
  [20.96, 26.27],
];

export const _offices = ['Jordan', 'Canada', 'Portugal'].map((office, index) => ({
  id: _mock.id(index),
  country: office,
  address: _mock.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  email: _mock.email(index),
  photo: _mock.image.travel(index + 4),
  latlng: LAT_LONG[index],
}));

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  'airbnb',
  'dropbox',
  'facebook',
  'google',
  'heroku',
  'lenovo',
  'microsoft',
  'netflix',
  'slack',
  'spotify',
  'tripadvisor',
  'vimeo',
];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}.svg`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}_original.svg`,
}));

// ----------------------------------------------------------------------

export const _faqs = [
  {
    id: _mock.id(0),
    question: 'What does the company do?',
    answer:
      'AMY Communicationsis a software company that specializes in creating AI solutions. We create custom AI models that can answer users questions using information that you provide. These AI assistants can be integrated  for use in Web Apps, Mobile Applications, Voice and SMS Applications.',
  },
  {
    id: _mock.id(1),
    question: 'What is the typical cost of a project?',
    answer:
      'The price of a product really depends. The resources required to build a custom solution for your needs will vary depending on the complexity of the project. We will work with you to determine the best solution for your needs and budget.',
  },
  {
    id: _mock.id(2),
    question: ' What types of applications can you build?',
    answer:
      'We can build AI applications for websites, mobile applications, email assistants, AI text (SMS) bots, and AI assistance for voice applications like automated voicemail assistants and customer service representatives.',
  },
  {
    id: _mock.id(3),
    question: ' Where is AMY Communications located? ',
    answer:
      "AMY Communications is a Utah company but it's developers are spread across the United States",
  },
  {
    id: _mock.id(4),
    question: 'What companies has AMY Communications worked with?',
    answer:
      'AMY Communications is a relatively new company but some of the team members have built custom software for the FBI, KBR and Sinch Voice.',
  },
];

export const _faqs2 = [
  'What is the typical cost of a project?',
  'alesuada adipiscing, dui vestibulum suscipit nulla quis orci.',
  'Ut varius tincidunt libero',
  'In ut quam vitae odio lacinia tincidunt.',
  'Fusce vel dui Morbi nec metus.',
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));

export const _faqsSupport = [
  `[Covid] Seasonal Shopping Guide`,
  'I Want To Check Where My Order Is Delivered',
  '[Shipping Information] How To Contact The Shipping Unit/Look Up Shipping Information/Delivery Exchange?',
  '[Seller] Start Selling With Shopee',
  'Why Is My Account Locked/Limited?',
  'Free Shipping Code User Guide (Freeship Code)',
  'How To Buy / Order On Shopee App',
  `Why I Didn't Receive the Verification Code (OTP)?`,
  `Frequently Asked Questions About Product Reviews / Comments`,
  `How to Login Shopee Account When Forgot/Lost Password`,
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));
