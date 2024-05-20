import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IGuest} from '@type/global';
import {PaymentGuestDataState, RootState} from '@type/redux';
const newGuest: IGuest = {
  id: 1,
  title: 'Mr.',
  name: '',
};

// Define the initial state using that type
const initialState: PaymentGuestDataState = {
  guests: [],
};

export const paymentGuestDataSlice = createSlice({
  name: 'paymentGuestData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    editPaymentGuestData: (state, action: PayloadAction<IGuest>) => {
      const guestIndex = state.guests.findIndex(
        guest => guest.id === action.payload.id,
      );
      state.guests[guestIndex] = action.payload;
    },
    insertNewGuest: state => {
      const lastGuest: IGuest = state.guests[state.guests.length - 1];
      if (!lastGuest) {
        state.guests.push(newGuest);
      } else {
        state.guests.push({...newGuest, id: (lastGuest.id || 0) + 1});
      }
    },
    removePaymentGuestData: (state, action: PayloadAction<IGuest>) => {
      state.guests = state.guests.filter(
        guest => guest.id !== action.payload.id,
      );
    },
  },
});

export const {editPaymentGuestData, removePaymentGuestData, insertNewGuest} =
  paymentGuestDataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const guestsData = (state: RootState) => state.pamyentGuestData.guests;

export default paymentGuestDataSlice.reducer;
