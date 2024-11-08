import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _members = [...Array(4)].map((_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.fullName(index),
  photo: `/assets/images/portrait/portrait_${index + 1}.webp`,
  socialLinks: {
    facebook: `facebook/${_mock.fullName(index)}`,
    instagram: `instagram/${_mock.fullName(index)}`,
    linkedin: `linkedin/${_mock.fullName(index)}`,
    twitter: `twitter/${_mock.fullName(index)}`,
  },
}));
