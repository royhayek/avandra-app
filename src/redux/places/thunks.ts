import { createAsyncThunk } from '@reduxjs/toolkit';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

export const GOOGLE_MAPS_API_KEY = Platform.select({
  ios: Constants.expoConfig?.ios?.config?.googleMapsApiKey,
  android: Constants.expoConfig?.android?.config?.googleMaps?.apiKey
});

export const fetchItineraryPlaces = createAsyncThunk('itineraryPlaces/fetch', async (payload) => {
  try {
    const apiKey = GOOGLE_MAPS_API_KEY;
    const fields = ['name', 'formatted_address', 'photos', 'rating', 'opening_hours', 'types'];

    const fetchPromises = payload.map(async ({ id, place, address }) => {
      const query = encodeURIComponent(`${place}, ${address}`);

      const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&fields=${fields.join(',')}&key=${apiKey}`;

      const searchResultResponse = await fetch(searchUrl);
      const searchDataJson = await searchResultResponse.json();

      if (searchDataJson.results.length > 0) {
        const searchData = searchDataJson.results[0];

        const placeId = searchData.place_id;
        const placeUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;
        const placeResponse = await fetch(placeUrl);
        const placeDataJson = await placeResponse.json();
        const placeData = placeDataJson.result;

        // Assuming you want to assign a placeholder image URL
        return { id, searchResult: searchData, placeResult: placeData };
      }
    });

    // Use Promise.all to wait for all promises to resolve
    const results = await Promise.all(fetchPromises);

    console.debug('[fetchItineraryPlaces] :: results ', results);
    return results;
  } catch (err) {
    console.error('[fetchItineraryPlaces] :: ', err);
  }
});
