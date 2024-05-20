import {PayloadAction, configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import {AppDispatch, RootState} from '@type/redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {rootMidleware} from './rootMiddleware';
import {setupListeners} from '@reduxjs/toolkit/query';

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: rootMidleware,
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const rdxDispatch = (action: PayloadAction<any>) => {
  return rootStore.dispatch(action);
};

setupListeners(rootStore.dispatch);
// export const showLoading = () => {
//   rdxDispatch(showLoadingAction());
// };

// export const dismissLoading = (data?: IDismissLoading) => {
//   rdxDispatch(dismissLoadingAction(data));
// };
