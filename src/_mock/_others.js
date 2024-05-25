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
  [40.7128, -74.006],
  [36.180241, -115.124855],
  [41.890629, -87.740623],
];

export const _offices = [
  {
    id: _mock.id(0),
    country: 'New York Office',
    address: '64 S. Meadow Street Astoria, NY 11103',
    phoneNumber: _mock.phoneNumber(0),
    email: _mock.email(0),
    photo: _mock.image.travel(0 + 4),
    latlng: LAT_LONG[0],
  },
  {
    id: _mock.id(1),
    country: 'Las Vegas Office',
    address: '4489 Sunrise Road, Las Vegas, NV 89119',
    phoneNumber: '702-806-4854',
    email: _mock.email(1),
    photo: _mock.image.travel(1 + 4),
    latlng: LAT_LONG[1],
  },
  {
    id: _mock.id(2),
    country: 'Chicago Office',
    address: '1069 Cherry Camp Road, Chicago, IL 60647',
    phoneNumber: '773-489-2522',
    email: _mock.email(2),
    photo: _mock.image.travel(2 + 4),
    latlng: LAT_LONG[2],
  },
];

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
      'Platinum Programmingis a software company that specializes in creating AI solutions. We create custom AI models that can answer users questions using information that you provide. These AI assistants can be integrated  for use in Web Apps, Mobile Applications, Voice and SMS Applications.',
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
    question: ' Where is Platinum Programming located? ',
    answer:
      "Platinum Programming is a Utah company but it's developers are spread across the United States",
  },
  {
    id: _mock.id(4),
    question: 'What companies has Platinum Programming worked with?',
    answer:
      'Platinum Programming is a relatively new company but some of the team members have built custom software for the FBI, KBR and Sinch Voice.',
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
