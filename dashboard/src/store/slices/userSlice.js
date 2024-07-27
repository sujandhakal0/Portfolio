import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loading: false,
    isAuthenticated: false,
    error: null,
    message: null,
    isUpdated: false,
  },
  reducers: {
    LoginRequest: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
    },
    LoginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    LoginFailed: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
    },
    clearAllErrors: (state, action) => {
      (state.error = null), (state.user = state.user);
    },
    loadUserRequest: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
    },
    loaduserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loadUserFailed: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
    },
    clearAllErrors: (state, action) => {
      (state.error = null), (state.user = state.user);
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
      state.message = action.payload;
    },
    logoutFailed: (state, action) => {
      state.loading = false;
      state.isAuthenticated = state.isAuthenticated;
      state.user = state.user;
      state.error = action.payload;
    },
    updatePasswordRequest: (state, action) => {
      state.loading = true;
      (state.isUpdated = false), (state.message = null);
      state.error = null;
    },
    updatePasswordSuccess: (state, action) => {
      state.loading = false;
      (state.isUpdated = true), (state.message = action.payload);
      state.error = null;
    },
    updatePasswordFaild: (state, action) => {
      state.loading = false;
      (state.isUpdated = false), (state.message = null);
      state.error = action.payload;
    },
    updateProfileRequest: (state, action) => {
      state.loading = true;
      (state.isUpdated = false), (state.message = null);
      state.error = null;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      (state.isUpdated = true), (state.message = action.payload);
      state.error = null;
    },
    updateProfileFaild: (state, action) => {
      state.loading = false;
      (state.isUpdated = false), (state.message = null);
      state.error = action.payload;
    },
    ResetAfterUpdate: (state, action) => {
      (state.isUpdated = false), (state.message = null);
      state.error = null;
    },

    clearAllErrors: (state, action) => {
      (state.error = null), (state.user = state.user);
    },
  },
});

export const login = (email, password) => async (dispatch) => {
  dispatch(userSlice.actions.LoginRequest());
  try {
    const { data } = await axios.post(
      "https://portfolio-backend-91np.onrender.com/api/v1/user/login",
      { email, password },
      { withCredentials: true, headers: { "Content-Type": "application/json" } }
    );
    dispatch(userSlice.actions.LoginSuccess(data.user));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.LoginFailed(error.response.data.message));
  }
};

export const getUser = () => async (dispatch) => {
  dispatch(userSlice.actions.loadUserRequest());
  try {
    const { data } = await axios.get(
      "https://portfolio-backend-91np.onrender.com/api/v1/user/me",
      {
        withCredentials: true,
      }
    );
    dispatch(userSlice.actions.loaduserSuccess(data.user));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.loadUserFailed(error.response.data.message));
  }
};
export const logout = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://portfolio-backend-91np.onrender.com/api/v1/user/logout",
      {
        withCredentials: true,
      }
    );
    dispatch(userSlice.actions.logoutSuccess(data.message));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.logoutFailed(error.response.data.message));
  }
};

export const updatePassword =
  (currentPassword, newPassword, confirmNewPassword) => async (dispatch) => {
    dispatch(userSlice.actions.updatePasswordRequest());
    try {
      const { data } = await axios.put(
        "https://portfolio-backend-91np.onrender.com/api/v1/user/update/password",
        { currentPassword, newPassword, confirmNewPassword },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(userSlice.actions.updatePasswordSuccess(data.message));
      dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(
        userSlice.actions.updatePasswordFaild(error.response.data.message)
      );
    }
  };

export const updateProfile = (newData) => async (dispatch) => {
  dispatch(userSlice.actions.updateProfileRequest());
  try {
    const { data } = await axios.put(
      "https://portfolio-backend-91np.onrender.com/api/v1/user/update/me",
      newData,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    dispatch(userSlice.actions.updateProfileSuccess(data.message));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.updateProfileFaild(error.response.data.message));
  }
};

export const resetProfile = () => async (dispatch) => {
  dispatch(userSlice.actions.ResetAfterUpdate());
};

export const clearAllUserErrors = () => async (dispatch) => {
  dispatch(userSlice.actions.clearAllErrors());
};

export const { LoginRequest, LoginSuccess, LoginFailed, clearAllErrors } =
  userSlice.actions;

export default userSlice.reducer;
