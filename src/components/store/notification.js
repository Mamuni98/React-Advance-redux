import { createSlice } from "@reduxjs/toolkit";

const inititalNotification = {
  status: "",
  title: "",
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: inititalNotification,
  reducers: {
    sendingRequest(state) {
        state.status = "sending";
        state.title = "Sending...";
        state.message = "Sending cart data!";
    },
    successfulMessage(state) {
        state.status = "success";
        state.title = "Success!";
        state.message = "Sent cart data successfully!";
    },
    errorMessage(state) {
        state.status = "error";
        state.title = "Error";
        state.message = "Sending cart data failed!";
    },
    retrieveData(state){
        state.status = "success";
        state.title = "Success!";
        state.message = "Retrieved cart data successfully!";
    }
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
