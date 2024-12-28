import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      if (res.status === 201) {
        setAuthHeader(res.data.token);
        toast.success('You have successfully registered.', {
          theme: 'dark',
        });
        return res.data;
      } else {
        throw new Error();
      }
    } catch (error) {
      const message = error.response.data.message;
      toast.error(
        message ? message : 'something went wrong, please try again',
        {
          theme: 'dark',
        }
      );
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      if (res.statusText === 'OK') {
        setAuthHeader(res.data.token);
        // toast.success('You are successfully logged in.', {
        //   theme: 'dark',
        // });
        return res.data;
      } else {
        throw new Error();
      }
    } catch (error) {
      const message = error.response.data.message;
      toast.error(
        message ? message : 'something went wrong, please try again',
        {
          theme: 'dark',
        }
      );
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    // return thunkAPI.rejectWithValue(error.message);
    toast.error('something went wrong, please try again', {
      theme: 'dark',
    });
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    if (token) {
      try {
        setAuthHeader(token);
        const res = await axios.get('/users/current');
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    } else {
      return rejectWithValue('to access the contact book, register or log in');
    }
  }
);
