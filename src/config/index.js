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
  ask_question_icon,
  delete_icon,
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
export const dateLocale = 'en-US';
export const datePattern = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const notificationTopic = 'conference_app';

// // default: "Conference Delegate" roles: "Admin" || "Conference Delegate" || "Exhibitor" || "Sponsor" || "Visitor" || "Speaker"
export const roles = [
  {
    id: 2,
    name: 'Conference Delegate',
  },
  {
    id: 3,
    name: 'Exhibitor',
  },
  {
    id: 4,
    name: 'Sponsor',
  },
  {
    id: 5,
    name: 'Visitor',
  },
  {
    id: 6,
    name: 'Speaker',
  },
];

export const signup_steps = [
  'Basic Information',
  // 'Select Your Category',
  'Social Media Links',
  'Agreement & Submission',
];

export const drawer_array = user => [
  {
    id: 1,
    name: 'Home',
    icon: home_icon,
    route: 'Dashboard',
  },
  {
    id: 2,
    name: 'About Organizers',
    icon: organizer_detail_icon,
    route: 'AboutOrganizer',
  },
  {
    id: 3,
    name: 'Exhibition',
    icon: exhibition_icon,
    route: 'Exhibition',
  },
  {
    id: 4,
    name: 'Ask A Question',
    icon: ask_question_icon,
    route: 'AskQuestion',
  },
  {
    id: 5,
    name: 'Who Should Attend',
    icon: who_attend_icon,
    route: 'WhoShouldAttend',
  },
  {
    id: 6,
    name: 'Pharma Conference',
    icon: conferences_icon,
    route: 'Conference',
  },
  // {
  //   id: 7,
  //   name: 'Workshops',
  //   icon: workshops_icon,
  //   route: 'WorkShop',
  // },
  {
    id: 8,
    name: 'Notifications',
    icon: drawer_notification_icon,
    route: 'Notification',
  },
  {
    id: 9,
    name: 'ContactUs',
    icon: call_icon,
    route: 'Contact',
  },
  {
    id: 10,
    name: 'Venue',
    icon: venue_icon,
    route: 'Venue',
  },
  {
    id: 11,
    name: 'My Agenda',
    icon: my_agenda_icon,
    route: 'MyAgenda',
  },
  {
    id: 12,
    name: 'Feedback',
    icon: feedback_icon,
    route: 'Feedback',
  },
  {
    id: 13,
    name: 'Social Media links',
    icon: social_media_icon,
    route: 'EditSocialMedia',
  },
  {
    id: 14,
    name: 'Delete Account',
    icon: delete_icon,
    isDeleteAccount: true,
  },
  {
    id: 15,
    name: user ? 'Logout' : 'Login',
    icon: logout_icon,
    isLogout: true,
  },
];

export const dashboard_array = [
  {
    id: 1,
    icon: conferences_icon,
    name: 'Pharma Conference',
    route: 'Conference',
  },
  // {
  //   id: 2,
  //   icon: workshops_icon,
  //   name: 'WorkShops',
  //   route: 'WorkShop',
  // },
  {
    id: 3,
    icon: visitor_registration_icon,
    name: 'Visitor Registration',
    is_login: true,
  },
  {
    id: 4,
    icon: speakers_icon,
    name: 'Speakers',
    route: 'Speakers',
  },
  // {
  //   id: 6,
  //   icon: networking_icon,
  //   name: 'Networking',
  //   route: 'Networking',
  // },
  // {
  //   id: 7,
  //   icon: gallery_icon,
  //   name: 'Gallery',
  //   route: 'Gallery',
  // },
  {
    id: 8,
    icon: my_agenda_icon,
    name: 'My Agenda',
    route: 'MyAgenda',
  },
];

export const registered_users = [
  {
    id: 1,
    name: 'Muhammad Ali',
    email: 'muhammadali@gmail.com',
  },
  {
    id: 2,
    name: 'Ahmed Khan',
    email: 'muhammadali@gmail.com',
  },
  {
    id: 3,
    name: 'Dr. Sarah Johnson',
    email: 'muhammadali@gmail.com',
  },
  {
    id: 4,
    name: 'Muhammad Ibrahim',
    email: 'muhammadali@gmail.com',
  },
  {
    id: 5,
    name: 'Ayesha Khan',
    email: 'muhammadali@gmail.com',
  },
  {
    id: 6,
    name: 'Syed Hassan',
    email: 'muhammadali@gmail.com',
  },
];

export const social_links = links => [
  {
    icon: facebook_icon,
    link: links?.facebookLink,
  },
  {
    icon: instagram_icon,
    link: links?.instagramLink,
  },
  {
    icon: linked_in_icon,
    link: links?.linkedinLink,
  },
  {
    icon: youtube_icon,
    link: links?.youtubeLink,
  },
  {
    icon: twitter_icon,
    link: links?.twitterLink,
  },
];

export const gallery_images = [
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
    img: images.gallery_img_1,
  },
  {
    id: 4,
    img: images.gallery_img_2,
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
    img: images.gallery_img_1,
  },
  {
    id: 8,
    img: images.gallery_img_2,
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

export const exhibitions_array = [
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

export const speakers_array = [
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

export const notification_array = [
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

export const agenda_array = [
  {
    id: 1,
    title: 'Future of Technology 2025',
    description: 'Exploring the latest trends and innovations in technology.',
    date: 'Sunday, June 15, 2025 -  June 17, 2025',
    time: '2:00 PM - 11:00 PM',
    venue: 'Convention Center, Hall A',
    type: 'conference',
  },

  {
    id: 2,
    title: 'Cybersecurity Best Practices Workshop',
    description: 'Hands-on workshop covering modern cybersecurity practices.',
    date: 'Sunday, June 15, 2025 -  June 17, 2025',
    time: '2:00 PM - 11:00 PM',
    venue: 'Workshop Room 1',
    type: 'workshop',
  },
  {
    id: 3,
    title: 'Future of Technology 2025',
    description: 'Exploring the latest trends and innovations in technology.',
    date: 'Sunday, June 15, 2025 -  June 17, 2025',
    time: '2:00 PM - 11:00 PM',
    venue: 'Convention Center, Hall A ',
    type: 'conference',
  },
];

export const conferences = [
  {
    id: 1,
    title: 'Future of Technology 2025',
    description: 'Exploring the latest trends and innovations in technology.',
    date: 'Sunday, June 15, 2025 - June 17, 2025',
    time: '2:00 PM - 11:00 PM',
    venue: 'Convention Center, Hall A',
  },
  {
    id: 2,
    title: 'AI & Robotics Summit',
    description: 'How AI and robotics are reshaping industries worldwide.',
    date: 'July 10, 2025 - July 12, 2025',
    time: '9:00 AM - 5:00 PM',
    venue: 'Expo Center, Hall B',
  },
  {
    id: 3,
    title: 'Cybersecurity Conference',
    description: 'Protecting businesses in a digital-first world.',
    date: 'August 20, 2025 - August 22, 2025',
    time: '10:00 AM - 6:00 PM',
    venue: 'Tech Park Auditorium',
  },
  {
    id: 4,
    title: 'Cybersecurity Conference',
    description: 'Protecting businesses in a digital-first world.',
    date: 'August 20, 2025 - August 22, 2025',
    time: '10:00 AM - 6:00 PM',
    venue: 'Tech Park Auditorium',
  },
];

export const sessions = [
  {
    id: 1,
    title: 'Opening Keynote: AI Revolution',
    time: '09:00 - 10:00',
    speaker: 'Dr. Sarah Johnson',
    description: 'Exploring how AI is transforming industries worldwide.',
  },
  {
    id: 2,
    title: 'Blockchain and the Future of Finance',
    time: '10:30 - 11:30',
    speaker: 'Speaker: Prof. Michael Chen',
    description: 'Insights into the innovations shaping the future.',
  },
  {
    id: 3,
    title: 'Cybersecurity in AI Era',
    time: '12:00 - 01:00',
    speaker: 'Ms. Emily Clark',
    description: 'Addressing challenges and opportunities in security.',
  },
  {
    id: 4,
    title: 'Cybersecurity in AI Era',
    time: '12:00 - 01:00',
    speaker: 'Ms. Emily Clark',
    description: 'Addressing challenges and opportunities in security.',
  },
];

export const shop_modules = [
  {
    id: 1,
    title: 'Security Fundamentals',
    time: '09:00',
    description: 'Basic principles of cybersecurity.',
  },
  {
    id: 2,
    title: 'Threat Detection',
    time: '10:30',
    description: 'Insights into the innovations shaping the future.',
  },
  {
    id: 3,
    title: 'Cybersecurity in AI Era',
    time: '12:00',
    description: 'Addressing challenges and opportunities in security.',
  },
  {
    id: 4,
    title: 'Cybersecurity in AI Era',
    time: '12:00',
    description: 'Addressing challenges and opportunities in security.',
  },
];
