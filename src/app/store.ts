import { debounce } from 'lodash';
import { persistStore } from 'redux-persist';
import rootReducer from '../redux/reducers';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, AnyAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const debounceNotify = debounce((notify) => notify(), 10);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
  // enhancers: [batchedSubscribe(debounceNotify)],
});

export const persistor = persistStore(store);

export type Store = typeof store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppThunkDispatch = () => useDispatch<AppThunkDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
