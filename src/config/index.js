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
  floor_plan_icon,
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

export const website_url = 'https://pharmaasia.com.pk/';
export const privacy_policy_link = 'https://health-asia.com/privacy-policy.php';
export const terms_link = 'https://health-asia.com/terms-and-conditions.php';
export const organizer_url = 'https://www.ecgateway.net/';
export const dateLocale = 'en-US';
export const datePattern = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const notificationTopic = 'conference_app';

export const roles = [
  {
    id: 1,
    name: 'Exhibitor (Stall Owner)',
  },
  {
    id: 2,
    name: 'Visitor',
  },
];

export const login_roles = [
  {
    id: 1,
    name: 'Exhibitor',
  },
  {
    id: 2,
    name: 'Visitor',
  },
];

export const signup_steps = [
  'Basic Information',
  'Company Information',
  'Social Media Links',
  'Agreement & Submission',
];

export const images_array = [
  {
    id: 1,
    image: images.counter_backgorund,
  },
  {
    id: 2,
    image: images.background_image,
  },
  {
    id: 3,
    image: images.gallery_img_1,
  },
  {
    id: 4,
    image: images.counter_backgorund,
  },
  {
    id: 5,
    image: images.background_image,
  },
  {
    id: 6,
    image: images.background_image,
  },
];

// export const drawer_array = user => [
//   {
//     id: 1,
//     name: 'Home',
//     icon: home_icon,
//     route: 'Dashboard',
//   },
//   {
//     id: 2,
//     name: 'Exhibitors',
//     icon: exhibition_icon,
//     route: 'Exhibition',
//   },
//   {
//     id: 3,
//     name: 'Conferences',
//     icon: conferences_icon,
//     route: 'Conference',
//   },
//   {
//     id: 4,
//     name: 'My Favourites',
//     icon: my_agenda_icon,
//     route: 'MyAgenda',
//   },

//   {
//     id: 5,
//     name: 'Contact Us',
//     icon: call_icon,
//     route: 'Contact',
//   },
//   {
//     id: 6,
//     name: 'About Us',
//     icon: organizer_detail_icon,
//     route: 'AboutOrganizer',
//   },
//   {
//     id: 7,
//     name: 'Venue',
//     icon: venue_icon,
//     route: 'Venue',
//   },
//   {
//     id: 8,
//     name: 'Social Media links',
//     icon: social_media_icon,
//     route: 'EditSocialMedia',
//   },
//   {
//     id: 9,
//     name: 'Feedback',
//     icon: feedback_icon,
//     isFeedback: true,
//   },
//   {
//     id: 10,
//     name: 'Delete Account',
//     icon: delete_icon,
//     isDeleteAccount: true,
//   },
//   {
//     id: 11,
//     name: user ? 'Logout' : 'Login',
//     icon: logout_icon,
//     isLogout: true,
//   },
// ];

export const drawer_array = user => {
  const items = [
    {
      id: 1,
      name: 'Home',
      icon: home_icon,
      route: 'Dashboard',
    },
    {
      id: 2,
      name: 'Exhibitors',
      icon: exhibition_icon,
      route: 'Exhibition',
    },
    {
      id: 3,
      name: 'Conferences',
      icon: conferences_icon,
      route: 'Conference',
    },
    {
      id: 4,
      name: 'My Favourites',
      icon: my_agenda_icon,
      route: 'MyAgenda',
    },

    {
      id: 5,
      name: 'Contact Us',
      icon: call_icon,
      route: 'Contact',
    },
    {
      id: 6,
      name: 'About Us',
      icon: organizer_detail_icon,
      route: 'AboutOrganizer',
    },
    {
      id: 7,
      name: 'Venue',
      icon: venue_icon,
      route: 'Venue',
    },
    {
      id: 8,
      name: 'Social Media links',
      icon: social_media_icon,
      route: 'EditSocialMedia',
    },
    {
      id: 9,
      name: 'Feedback',
      icon: feedback_icon,
      isFeedback: true,
    },
  ];

  if (user) {
    items.push({
      id: 10,
      name: 'Delete Account',
      icon: delete_icon,
      isDeleteAccount: true,
    });
  }

  items.push({
    id: 11,
    name: user ? 'Logout' : 'Login',
    icon: logout_icon,
    isLogout: true,
  });

  return items;
};

export const dashboard_array = [
  {
    id: 1,
    name: 'Exhibitors',
    icon: exhibition_icon,
    route: 'Exhibition',
  },
  {
    id: 3,
    icon: conferences_icon,
    name: 'Conferences',
    route: 'Conference',
  },
  {
    id: 4,
    icon: visitor_registration_icon,
    name: 'Visitor Registration',
    is_login: true,
  },
  {
    id: 5,
    icon: speakers_icon,
    name: 'Speakers',
    route: 'Speakers',
  },

  {
    id: 6,
    icon: my_agenda_icon,
    name: 'My Favourites',
    route: 'MyAgenda',
  },
  {
    id: 6,
    icon: networking_icon,
    name: 'Networking',
    route: 'Networking',
  },
  {
    id: 2,
    icon: floor_plan_icon,
    name: 'Floor Plan',
    route: 'FloorPlan',
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

export const hallMapList = [
  {
    title: 'Download Hall Map 1',
    image: images.hall_1,
    url: 'https://res.cloudinary.com/ddi9ikzpq/image/upload/v1763176705/hall_1_jytk7z.png',
  },
  {
    title: 'Download Hall Map 2',
    image: images.hall_2,
    url: 'https://res.cloudinary.com/ddi9ikzpq/image/upload/v1763176706/hall_2_rh0vw9.png',
  },
  {
    title: 'Download Hall Map 3',
    image: images.hall_3,
    url: 'https://res.cloudinary.com/ddi9ikzpq/image/upload/v1763176706/hall_3_oysifl.png',
  },
  {
    title: 'Download Hall Map 4',
    image: images.hall_4,
    url: 'https://res.cloudinary.com/ddi9ikzpq/image/upload/v1763176706/hall_4_rrulio.png',
  },
  {
    title: 'Download Hall Map 5',
    image: images.hall_5,
    url: 'https://res.cloudinary.com/ddi9ikzpq/image/upload/v1763176706/hall_5_wqusbs.png',
  },
  // {
  //   title: 'Download Hall Map 6',
  //   image: images.hall_6,
  //   url: 'https://res.cloudinary.com/ddi9ikzpq/image/upload/v1763176706/hall_6_jirfeo.png',
  // },
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
