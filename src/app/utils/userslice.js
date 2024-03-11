import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user", // Name for your slice of state
  initialState: {
    people: 6, // Initial number of people
  },
  reducers: {
    addPeople(state, action) {
      // Update state immutably using the spread operator
      state.people = state.people + 1; // Increment people count
    },
  },
});

export default userSlice.reducer;
export const { addPeople } = userSlice.actions