
interface ZustandMainState {
}


interface ZustandMainAction {
    resetState: () => void;
}

type ZustandAction<T> = ZustandMainAction & T

type ZustandState<T> = ZustandMainState & T

interface BaseZustandAction<T> {
    actions: ZustandAction<T>;
}

type BaseZustandState<T> = ZustandState<T> & T

type ZustandSet<T> = (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: boolean | undefined) => void

type ZustandGet<T> = () => T