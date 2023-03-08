import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

// Initial State
const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: ''
};

// Async thunk


export const fetchVideos = createAsyncThunk('videos/fetchVideos', async() => {
  const videos = await getVideos();

  return videos;
})


// Slice
const videoSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers: (builder) => {
    builder 
    .addCase(fetchVideos.pending, (state) => {
      state.isError = false  
      state.isLoading = true
      state.videos = []

    })
    .addCase(fetchVideos.fulfilled, (state, action) => {
      state.isLoading = false
      state.videos = action.payload
    })
    .addCase(fetchVideos.rejected, (state, action) => {
      state.isLoading = false
      state.videos = []
      state.isError = true
      state.error = action.error?.message
    })
  }
     
});

export default  videoSlice.reducer;
  