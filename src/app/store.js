import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../features/videos/videosSlice';
import tagsReducer from '../features/tags/tagsSlice';

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagsReducer
  },
});
