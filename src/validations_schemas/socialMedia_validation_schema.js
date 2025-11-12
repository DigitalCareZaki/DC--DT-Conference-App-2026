import * as yup from 'yup';
import {
  facebookReg,
  instagramReg,
  linkedinReg,
  twitterReg,
  youtubeReg,
} from '../utils/functions';

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
    .matches(facebookReg, 'Invalid Facebook link')
    .nullable(),
  instagramLink: yup
    .string()
    .matches(instagramReg, 'Invalid Instagram link')
    .nullable(),
  linkedinLink: yup
    .string()
    .matches(linkedinReg, 'Invalid LinkedIn link')
    .nullable(),
  youtubeLink: yup
    .string()
    .matches(youtubeReg, 'Invalid YouTube link')
    .nullable(),
  twitterLink: yup
    .string()
    .matches(twitterReg, 'Invalid Twitter link')
    .nullable(),
});
