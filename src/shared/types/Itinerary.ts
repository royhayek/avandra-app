export interface ItineraryItemProps {
  _id: string;
  image: string;
  name: string;
  time: string;
  description: string;
  estimatedCost: number;
  rating: number;
  reviews: number;
  type: string;
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
