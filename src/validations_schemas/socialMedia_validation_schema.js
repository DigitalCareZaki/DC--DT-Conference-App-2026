import * as yup from 'yup';

export const socialMedia_schema = data => ({
  facebookLink: data?.facebookLink ?? '',
  instagramLink: data?.instagramLink ?? '',
  linkedinLink: data?.linkedinLink ?? '',
  youtubeLink: data?.youtubeLink ?? '',
  twitterLink: data?.twitterLink ?? '',
});

export const socialMedia_validation_schema = yup.object().shape({
  facebookLink: yup.string().url('Invalid Facebook link').nullable(),
  instagramLink: yup.string().url('Invalid Instagram link').nullable(),
  linkedinLink: yup.string().url('Invalid LinkedIn link').nullable(),
  youtubeLink: yup.string().url('Invalid YouTube link').nullable(),
  twitterLink: yup.string().url('Invalid Twitter link').nullable(),
});
