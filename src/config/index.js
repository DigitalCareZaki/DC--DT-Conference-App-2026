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
  home_icon,
  social_media_icon,
  feedback_icon,
  venue_icon,
  call_icon,
  drawer_notification_icon,
  speakers_icon,
  exhibition_icon,
  logout_icon,
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
export const privacy_policy_link = 'https://health-asia.com/privacy-policy.php';
export const terms_link = 'https://health-asia.com/terms-and-conditions.php';

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

export const signup_steps = [
  'Basic Information',
  'Select Your Category',
  'Social Media Links',
  'Agreement & Submission',
];

export const drawer_array = [
  {
    id: 1,
    name: "Home",
    icon: home_icon,
    route:"Dashboard"
  },
  {
    id: 2,
    name: "About Organizers",
    icon: organizer_detail_icon,
    route:"AboutOrganizer"
  },
  {
    id: 3,
    name: "Exhibition",
    icon: exhibition_icon,
    route:"Exhibition"
  },
  {
    id: 4,
    name: "Speakers",
    icon: speakers_icon,
    route:"Speakers"
  },
  {
    id: 5,
    name: "Conferences",
    icon: conferences_icon,
    route:"Conferences"
  },
  {
    id: 6,
    name: "Workshops",
    icon: workshops_icon,
    route:"Workshops"
  },
  {
    id: 7,
    name: "Notifications",
    icon: drawer_notification_icon,
    route:"Notifications"
  },
  {
    id: 8,
    name: "ContactUs",
    icon: call_icon,
    route:"Contact"
  },
  {
    id: 9,
    name: "Venue",
    icon: venue_icon,
    route:"Venue"
  },
  {
    id: 10,
    name: "My Agenda",
    icon: my_agenda_icon,
    route:"MyAgenda"
  },
  {
    id: 11,
    name: "Feedback",
    icon: feedback_icon,
    route:"Feedback"
  },
  {
    id: 12,
    name: "Social Media links",
    icon: social_media_icon,
    route:"SocialMedia"
  },
  {
    id: 13,
    name: "Logout",
    icon: logout_icon,
    isLogout: true
  },
]

export const dashboard_array = [
  {
    id: 1,
    icon: conferences_icon,
    name: 'Conferences',
    route: 'Venue',
  },
  {
    id: 2,
    icon: workshops_icon,
    name: 'WorkShops',
    route: 'EditSocialMedia',
  },
  {
    id: 3,
    icon: visitor_registration_icon,
    name: 'Visitor Registration',
    route: 'Contact',
  },
  {
    id: 4,
    icon: who_attend_icon,
    name: 'Who Should Attend',
    route: 'Exhibition',
  },
  {
    id: 5,
    icon: organizer_detail_icon,
    name: 'Organizers Details',
    route: 'AboutOrganizer',
  },
  {
    id: 6,
    icon: networking_icon,
    name: 'Networking',
    route: 'Networking',
  },
  {
    id: 7,
    icon: gallery_icon,
    name: 'Gallery',
    route: 'Gallery',
  },
  {
    id: 8,
    icon: my_agenda_icon,
    name: 'My Agenda',
    route: 'MyAgenda',
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




export const ExhibitionArr = [
  {
    title: 'TechCorp Solutions',
    city: 'Seattle,USA',
    venue: 'Main Exhibition Hall',
    postion: 'Software Development',
    description:
      'Leading provider Of enterprise software solutions and cloud services.',
  },
  {
    title: 'DataFlow Analytics',
    city: 'Austin,USA',
    venue: 'Main Exhibition Hall',
    postion: 'Software Development',
    description: 'Advanced data analytics and business intelligence solutions.',
  },
  {
    title: 'CloudTech Systems',
    city: 'London,UK',
    venue: 'Main Exhibition Hall',
    postion: 'Cloud Computing',
    description: 'Comprehensive cloud infrastructure and migration services.',
  },
];

export const SpeakerArr = [
  {
    title: 'International Speakers',
    data: [
      {
        name: 'Dr. Sarah Johnson',
        university: 'Standford University',
        occupation: 'AI & Machine Learning',
        about:
          'Leading researcher in artificial intelligence with 15+ years of exp...',
        img: images.profile_img_2,
      },
      {
        name: 'Prof. Michael Chen',
        university: 'MIT',
        occupation: 'Blockchain Technology',
        about: 'Pioneer in blockchain research and cryptocurrency systems.',
        img: images.profile_img_1,
      },
    ],
  },
  {
    title: 'National Speakers',
    data: [
      {
        name: 'Dr. Priya Sharma',
        university: 'IIT Delhi',
        occupation: 'Cyber Security',
        about: 'Expert in cybersecurity and network security.',
        img: images.profile_img_3,
      },
    ],
  },
];

export const notificationArr = [
  {
    title: 'Welcome to Global Tech Conference 2025',
    description:
      'Thank you for registering! Get ready for an amazing experience.',
    time: '246d ago',
  },
  {
    title: 'New Speaker Added',
    description:
      'Dr. Sarah Johnson has been added to the A1 & Machine Learning track.',
    time: '246d ago',
  },
  {
    title: 'Welcome to Global Tech Conference 2025',
    description:
      'Thank you for registering! Get ready for an amazing experience.',
    time: '246d ago',
  },
  {
    title: 'Welcome to Global Tech Conference 2025',
    description:
      'Thank you for registering! Get ready for an amazing experience.',
    time: '246d ago',
  },
];

export const agendaArr = [
  {
    title: 'Future of Technology 2025',
    description: 'Exploring the latest trends and innovations in technology.',
    date: 'Sunday, June 15, 2025 -  June 17, 2025',
    time: '2:00 PM - 11:00 PM',
    venue: 'Convention Center, Hall A',
    btnTxt: 'Conference ',
  },

  {
    title: 'Cybersecurity Best Practices Workshop',
    description: 'Hands-on workshop covering modern cybersecurity practices.',
    date: 'Sunday, June 15, 2025 -  June 17, 2025',
    time: '2:00 PM - 11:00 PM',
    venue: 'Workshop Room 1',
    btnTxt: 'Workshop',
  },
  {
    title: 'Future of Technology 2025',
    description: 'Exploring the latest trends and innovations in technology.',
    date: 'Sunday, June 15, 2025 -  June 17, 2025',
    time: '2:00 PM - 11:00 PM',
    venue: 'Convention Center, Hall A ',
    btnTxt: 'Conference',
  },
];

