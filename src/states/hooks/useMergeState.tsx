import {MergeState} from '@type/global';
import {useState} from 'react';

function useMergeState<T = any>(initialState: T): [T, MergeState<T>] {
  const [state, setState] = useState<T>(initialState);

  const mergeState: MergeState<T> = newState => {
    setState(prevState => {
      if (typeof newState === 'function') {
        return {...prevState, ...newState(prevState)};
      } else {
        return {...prevState, ...newState};
      }
    });
  };

  return [state, mergeState];
}

export default useMergeState;
