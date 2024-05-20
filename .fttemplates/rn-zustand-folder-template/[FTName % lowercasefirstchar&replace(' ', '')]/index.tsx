import {use[FTName | capitalize&capitalcase&replace(' ', '')]Store} from './store';


// Example :
// export const useErrorMessage = () => {
//   return use[FTName | capitalize&capitalcase&replace(' ', '')]Store(
//     (state: I[FTName | capitalize&capitalcase&replace(' ', '')]) => state.errorMessage,
//   );
// };

// 🎉 one selector for all our actions
export const use[FTName | capitalize&capitalcase&replace(' ', '')]Actions = () =>
  use[FTName | capitalize&capitalcase&replace(' ', '')]Store((state: I[FTName | capitalize&capitalcase&replace(' ', '')]) => state.actions);
