type VoidCallBack = () => void;
type CallBack<T> = () => T;
type CallBackWithParams<T, U> = (data: U) => T;
type CallBackWith2Params<T, U, V> = (data1: U, data2: V) => T;
type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

type ConvertDateProps = {
  useLocalTime?: boolean;
  toUTC?: boolean;
};