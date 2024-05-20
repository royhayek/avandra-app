import { PurchasesOffering } from 'react-native-purchases';

export interface currentOfferingProps {
  loading: boolean;
  list: PurchasesOffering | null;
}
