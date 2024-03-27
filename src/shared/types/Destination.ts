export interface DestinationProps {
  _id: string;
  name: string;
  country: string;
  enabled: boolean;
  currency: string;
  continent: string;
  description: string;
  image: string;
  flag: string | null;
  gallery: string[] | null;
}
