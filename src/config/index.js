import {
  facebook_icon,
  instagram_icon,
  linked_in_icon,
  twitter_icon,
  youtube_icon,
  gallery_icon,
  my_agenda_icon,
  networking_icon,
  organizer_detail_icon,
  visitor_registration_icon,
  who_attend_icon,
  workshops_icon,
  conferences_icon,
} from '../assets/icons';
import { images } from '../constants';

export const TextWeights = {
  heavy: 'HelveticaNeue-Heavy',
  black: 'HelveticaNeue-Black',
  bold: 'HelveticaNeue-Bold',
  regular: 'HelveticaNeue-Roman',
  medium: 'HelveticaNeue-Medium',
  light: 'HelveticaNeue-Light',
  thin: 'HelveticaNeue-Thin',
};

export const website_url = 'https://health-asia.com/';

export const roles = [
  {
    id: 1,
    name: 'Conference Delegate',
  },
  {
    id: 2,
    name: 'Exhibitor (Stall Owner)',
  },
  {
    id: 3,
    name: 'Sponsor',
  },
  {
    id: 4,
    name: 'Visitor',
  },
  {
    id: 5,
    name: 'Speaker',
  },
];

export const registeredUsers = [
  {
    name: 'Muhammad Ali',
    email: 'muhammadali@gmail.com',
  },
  {
    name: 'Ahmed Khan',
    email: 'muhammadali@gmail.com',
  },
  {
    name: 'Dr. Sarah Johnson',
    email: 'muhammadali@gmail.com',
  },
  {
    name: 'Muhammad Ibrahim',
    email: 'muhammadali@gmail.com',
  },
  {
    name: 'Ayesha Khan',
    email: 'muhammadali@gmail.com',
  },
  {
    name: 'Syed Hassan',
    email: 'muhammadali@gmail.com',
  },
];

export const socialLinks = [
  {
    icon: facebook_icon,
    link: 'https://www.facebook.com',
  },
  {
    icon: instagram_icon,
    link: 'https://www.instagram.com',
  },
  {
    icon: linked_in_icon,
    link: 'https://www.linkedin.com',
  },
  {
    icon: youtube_icon,
    link: 'https://www.youtube.com',
  },
  {
    icon: twitter_icon,
    link: 'https://www.twitter.com',
  },
];

export const galleryImgs = [
  {
    id: 1,
    img: images.gallery_img_1,
  },
  {
    id: 2,
    img: images.gallery_img_2,
  },
  {
    id: 3,
    img: images.gallery_img_3,
  },
  {
    id: 4,
    img: images.gallery_img_4,
  },
  {
    id: 5,
    img: images.gallery_img_1,
  },
  {
    id: 6,
    img: images.gallery_img_2,
  },
  {
    id: 7,
    img: images.gallery_img_3,
  },
  {
    id: 8,
    img: images.gallery_img_4,
  },
  {
    id: 9,
    img: images.gallery_img_1,
  },
  {
    id: 10,
    img: images.gallery_img_2,
  },
  {
    id: 11,
    img: images.gallery_img_3,
  },
  {
    id: 12,
    img: images.gallery_img_4,
  },
];

export const dashboardArr = [
  {
    id: 1,
    icon: conferences_icon,
    name: 'Conferences',
    navigation: '',
  },
  {
    id: 2,
    icon: workshops_icon,
    name: 'WorkShops',
    navigation: '',
  },
  {
    id: 3,
    icon: visitor_registration_icon,
    name: 'Visitor Registration',
    navigation: '',
  },
  {
    id: 4,
    icon: who_attend_icon,
    name: 'Who Should Attend',
    navigation: '',
  },
  {
    id: 5,
    icon: organizer_detail_icon,
    name: 'Organizers Details',
    navigation: 'AboutOrganizer',
  },
  {
    id: 6,
    icon: networking_icon,
    name: 'Networking',
    navigation: 'Networking',
  },
  {
    id: 7,
    icon: gallery_icon,
    name: 'Gallery',
    navigation: 'Gallery',
  },
  {
    id: 8,
    icon: my_agenda_icon,
    name: 'My Agenda',
    navigation: '',
  },
];
export const signup_steps = [
  'Basic Information',
  'Select Your Category',
  'Social Media Links',
  'Agreement & Submission',
];
