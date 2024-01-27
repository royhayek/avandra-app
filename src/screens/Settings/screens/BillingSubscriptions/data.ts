import { PlanProps } from '@shared/types/Plan';

export const dummy_subscriptions: PlanProps[] = [
  {
    _id: '1',
    name: 'Basic Explorer',
    price: 0,
    currency: '$',
    period: '',
    popular: false,
    best: false,
    trial: false,
    benefits: [
      'Access to personalized travel recommendations.',
      'Save limited destinations in your "Saved List."',
      'Basic AI-generated trip itineraries.',
      'Weekly travel tips and inspiration.',
      'Ad-supported experience.'
    ]
  },
  {
    _id: '2',
    name: 'Premium Adventurer',
    price: 9.99,
    currency: '$',
    period: 'month',
    popular: true,
    best: false,
    trial: true,
    benefits: [
      'Ad-free experience.',
      'Enhanced AI-generated trip itineraries.',
      'Priority customer support.',
      'Exclusive access to travel articles and guides.',
      'Early access to new Tripify features and updates.'
    ]
  },
  {
    _id: '3',
    name: 'Family Voyage',
    price: 14.99,
    currency: '$',
    period: 'month',
    popular: false,
    best: false,
    trial: false,
    benefits: [
      'All Premium Adventurer benefits.',
      'Family-friendly trip planning for up to 4 profiles.',
      'Collaborative trip planning and sharing.',
      'Special discounts on family-oriented travel experiences.',
      'Family-focused travel content and recommendations.'
    ]
  },
  {
    _id: '4',
    name: 'Wanderlust Pro',
    price: 19.99,
    currency: '$',
    period: 'month',
    popular: false,
    best: false,
    trial: false,
    benefits: [
      'All Family Voyage benefits.',
      'Advanced AI-generated trip itineraries with in-depth customization.',
      'Priority access to exclusive travel deals and promotions.',
      'Concierge-level customer support.',
      'Access to premium travel content, including immersive VR experiences.',
      'VIP invites to travel events and webinars.'
    ]
  },
  {
    _id: '5',
    name: 'Lifetime Explorer',
    price: 299.99,
    currency: '$',
    period: 'lifetime',
    popular: false,
    best: true,
    trial: false,
    benefits: [
      'All Wanderlust Pro benefits.',
      "Lifetime access to Tripify's premium features.",
      'Never worry about subscription renewals.',
      'Priority access to beta features and enhancements.',
      'Exclusive lifetime member events and perks.'
    ]
  }
];
