import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  constantReducer,
  authReducer,
  orderReducer,
  productReducer
} from './slices';
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore } from 'redux-persist';


const rootReducer = combineReducers({
  constant: constantReducer,
  auth: authReducer,
  order: orderReducer,
  product: productReducer,
});


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['constant'],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export default store;