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

export interface ItineraryItemProps {
  _id: string;
  name: string;
  time: string;
  date: string;
  address: string;
  openingHours: object;
  description: string;
  estimatedCost: number;
  userRatingsTotal: number;
  coordinates: CoordinatesProps;
  priceLevel: number;
  photoUrl: string;
  rating: number;
  reviews: number;
  type: string;
  flag: string;
  image: string;
  payload: ItineraryPayload;
  tips: string[];
  places: ItineraryProps[];
  location: CoordinatesProps;
  status: string;
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
