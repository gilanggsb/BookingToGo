import { UriProps } from 'react-native-svg';
export type SvgAdditionalProps = {
    onLoadStart?: () => void;
    onError?: (error: Error) => void;
    override?: Object;
    onLoad?: () => void;
};

export type SvgUri2Props = {} & UriProps & SvgAdditionalProps;

export type MergeState<T> = (
    newState: Partial<T> | ((prevState: T) => Partial<T>),
) => void;

export type NewsCategory = {
    id: number;
    name: string;
}

export type IFlatListItem<T = any> = {
    item: T,
    index: number
}

export type ConvertToQueryStringProps = {
    toSnakeCase?: boolean;
    queryStringOpt?: queryString.StringifyOptions | undefined;
};

export type IStepperData = {
    stepNumber: number;
    title: string;
    isActive: boolean;
};

export type IGuestTitle = 'Mr.' | 'Mrs.'

export type IGuest = {
    name?: string;
    title?: IGuestTitle;
    id?: number;
}