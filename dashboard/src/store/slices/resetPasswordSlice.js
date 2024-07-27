import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState: {
    loading: false,
    message: null,
    error: null,
  },
  reducers: {
    forgorPasswordRequest: (state, action) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    },
    forgorPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = null;
    },
    forgorPasswordFailed: (state, action) => {
      state.loading = false;
      state.message = null;
      state.error = action.payload;
    },
    resetPasswordRequest: (state, action) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = null;
    },
    resetPasswordFailed: (state, action) => {
      state.loading = false;
      state.message = null;
      state.error = action.payload;
    },

    clearAllErrors: (state, action) => {
      state.error = null;
      state = state;
    },
  },
});

export const forgotPassword = (email) => async (dispatch) => {
  dispatch(resetPasswordSlice.actions.forgorPasswordRequest());
  try {
    const { data } = await axios.post(
      "https://portfolio-backend-91np.onrender.com/api/v1/user/password/forgot ",
      { email },
      { withCredentials: true, headers: { "Content-Type": "application/json" } }
    );
    dispatch(resetPasswordSlice.actions.forgorPasswordSuccess(data.message));
    dispatch(resetPasswordSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      resetPasswordSlice.actions.forgorPasswordFailed(
        error.response.data.message
      )
    );
  }
};

export const resetPassword =
  (token, password, confirmPassword) => async (dispatch) => {
    dispatch(resetPasswordSlice.actions.resetPasswordRequest());
    try {
      const { data } = await axios.put(
        `https://portfolio-backend-91np.onrender.com/api/v1/user/password/reset/${token}`,
        { password, confirmPassword },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(resetPasswordSlice.actions.resetPasswordSuccess(data.message));
      dispatch(resetPasswordSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(
        resetPasswordSlice.actions.resetPasswordFailed(
          error.response.data.message
        )
      );
    }
  };

export const clearAllResetPasswordErrors = () => async (dispatch) => {
  dispatch(resetPasswordSlice.actions.clearAllErrors());
};

export default resetPasswordSlice.reducer;
