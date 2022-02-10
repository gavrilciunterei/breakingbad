import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Characters from '../../services/characters';

export const getAll = createAsyncThunk(
  'characters/getAll',
  async (data, { rejectWithValue }) => {
    try {
      const allCharacters = await Characters.getAll(data.serie);
      return allCharacters;
    } catch (err) {
      let errorMessage;
      if (err.status === 404) {
        errorMessage = 'NOT_FOUND';
      } else if (err) {
        errorMessage = 'BAD_REQUEST';
      }
      return rejectWithValue({
        error: errorMessage,
      });
    }
  }
);

export const getByName = createAsyncThunk(
  'characters/getByName',
  async (data, { rejectWithValue }) => {
    try {
      const characterByName = await Characters.getByName(data.name);
      return characterByName;
    } catch (err) {
      let errorMessage;
      if (err.status === 404) {
        errorMessage = 'NOT_FOUND';
      } else if (err) {
        errorMessage = 'BAD_REQUEST';
      }
      return rejectWithValue({
        error: errorMessage,
      });
    }
  }
);

export const getDeathByName = createAsyncThunk(
  'characters/getDeathByName',
  async (data, { rejectWithValue }) => {
    try {
      const deathByName = await Characters.getDeathByName(data.name);
      return deathByName;
    } catch (err) {
      let errorMessage;
      if (err.status === 404) {
        errorMessage = 'NOT_FOUND';
      } else if (err) {
        errorMessage = 'BAD_REQUEST';
      }
      return rejectWithValue({
        error: errorMessage,
      });
    }
  }
);

export const getRandomQuoteByAuthor = createAsyncThunk(
  'characters/getRandomQuoteByAuthor',
  async (data, { rejectWithValue }) => {
    try {
      const randomQuoteByAuthor = await Characters.getRandomQuoteByAuthor(
        data.name
      );
      return randomQuoteByAuthor;
    } catch (err) {
      let errorMessage;
      if (err.status === 404) {
        errorMessage = 'NOT_FOUND';
      } else if (err) {
        errorMessage = 'BAD_REQUEST';
      }
      return rejectWithValue({
        error: errorMessage,
      });
    }
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {},
  reducers: {},
  extraReducers: {
    [getAll.pending]: (state) => {
      state.getAllLoading = true;
      state.getAllError = null;
    },
    [getAll.fulfilled]: (state, action) => {
      state.allCharacters = action.payload.data;
      state.getAllLoading = false;
      state.getAllError = null;
    },
    [getAll.rejected]: (state, action) => {
      state.getAllLoading = false;
      state.getAllError = action.payload.error;
    },

    [getByName.pending]: (state) => {
      state.getByNameLoading = true;
      state.getByNameError = null;
    },
    [getByName.fulfilled]: (state, action) => {
      state.characterByName = action.payload.data;
      state.getByNameLoading = false;
      state.getByNameError = null;
    },
    [getByName.rejected]: (state, action) => {
      state.getByNameLoading = false;
      state.getByNameError = action.payload.error;
    },

    [getDeathByName.pending]: (state) => {
      state.getDeathByNameLoading = true;
      state.getDeathByNameError = null;
    },
    [getDeathByName.fulfilled]: (state, action) => {
      state.deathByName = action.payload.data;
      state.getDeathByNameLoading = false;
      state.getDeathByNameError = null;
    },
    [getDeathByName.rejected]: (state, action) => {
      state.getDeathByNameLoading = false;
      state.getDeathByNameError = action.payload.error;
    },

    [getRandomQuoteByAuthor.pending]: (state) => {
      state.getRandomQuoteByAuthorLoading = true;
      state.getRandomQuoteByAuthorError = null;
    },
    [getRandomQuoteByAuthor.fulfilled]: (state, action) => {
      state.randomQuote = action.payload.data;
      state.getRandomQuoteByAuthorLoading = false;
      state.getRandomQuoteByAuthorError = null;
    },
    [getRandomQuoteByAuthor.rejected]: (state, action) => {
      state.getRandomQuoteByAuthorLoading = false;
      state.getRandomQuoteByAuthorError = action.payload.error;
    },
  },
});

export default charactersSlice;
