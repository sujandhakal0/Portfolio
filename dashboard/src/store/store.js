import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import resetPasswordReducer from "./slices/resetPasswordSlice";
import messageReducer from "./slices/messagesSlice";
import timelineReducer from "./slices/timelineSlice";
import skillReducer from "./slices/skillSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    resetPassword: resetPasswordReducer,
    messages: messageReducer,
    timeline: timelineReducer,
    skill: skillReducer,
  },
});
