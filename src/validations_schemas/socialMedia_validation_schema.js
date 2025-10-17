import * as yup from 'yup';
import { urlReg } from '../utils/functions';

export const socialMedia_schema = data => ({
  facebookLink: data?.facebookLink ?? '',
  instagramLink: data?.instagramLink ?? '',
  linkedinLink: data?.linkedinLink ?? '',
  youtubeLink: data?.youtubeLink ?? '',
  twitterLink: data?.twitterLink ?? '',
});

export const socialMedia_validation_schema = yup.object().shape({
  facebookLink: yup
    .string()
    .matches(urlReg, 'Invalid Facebook link')
    .nullable(),
  instagramLink: yup
    .string()
    .matches(urlReg, 'Invalid Instagram link')
    .nullable(),
  linkedinLink: yup
    .string()
    .matches(urlReg, 'Invalid LinkedIn link')
    .nullable(),
  youtubeLink: yup.string().matches(urlReg, 'Invalid YouTube link').nullable(),
  twitterLink: yup.string().matches(urlReg, 'Invalid Twitter link').nullable(),
});
