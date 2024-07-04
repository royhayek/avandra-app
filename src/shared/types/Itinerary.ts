import { CoordinatesProps } from './Coordinates';
import { TravelOptionProps } from './TravelOption';

export interface ItineraryPayload {
  name: string;
  country: string;
  fromDate: string;
  toDate: string;
  budget: TravelOptionProps;
  traveler: TravelOptionProps;
  interest: string[];
  noOfDays: number;
  duration: number;
  byDate: boolean;
}

export interface OpeningHoursProps {
  open_now: boolean;
  periods: {
    close: {
      day: number;
      time: string;
    };
    open: {
      day: number;
      time: string;
    };
  }[];
  weekday_text: string[];
}

export interface ItineraryItemProps {
  _id: string;
  name: string;
  time: string;
  date: string;
  type: string;
  flag: string;
  image: string;
  tips: string[];
  photos: string[];
  status: string;
  rating: number;
  address: string;
  types: string[];
  website: string;
  reviews: number;
  photoUrl: string;
  priceLevel: number;
  description: string;
  openingHours: OpeningHoursProps;
  estimatedCost: number;
  userRatingsTotal: number;
  places: ItineraryProps[];
  payload: ItineraryPayload;
  location: CoordinatesProps;
  internationalPhone: string;
  coordinates: CoordinatesProps;
  directions: {
    byCar: string;
    byTrain: string;
    byWalk: string;
    byBike: string;
    byPlane: string;
  };
}

export interface ItineraryProps {
  date: string;
  list: ItineraryItemProps[];
}
