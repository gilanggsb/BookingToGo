import {create} from 'zustand';

const initialState: BaseZustandState<[FTName | capitalize&capitalcase&replace(' ', '')]State> = {
};

// ** DONT USE DIRECTLY THIS STORE !!! ** //
export const use[FTName | capitalize&capitalcase&replace(' ', '')]Store = create<I[FTName | capitalize&capitalcase&replace(' ', '')]>()(
  (set, get, store) => ({
    ...initialState,
    // ⬇️ separate "namespace" for actions
    actions: {
      resetState: () => set(initialState),
    },
  }),
);
