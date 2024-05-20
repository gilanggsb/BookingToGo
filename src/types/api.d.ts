import {
    AxiosResponse,
    RawAxiosRequestHeaders,
    AxiosHeaders,
    AxiosRequestConfig,
    AxiosError,
} from 'axios';

type ApiProps = {
    url: string;
    statusCode?: number;
    body?: any;
    fullResponse?: boolean;
    fullErrorResponse?: boolean;
    tags?: string;
    headers?: any;
    withoutToken?: boolean;
    retry?: number;
    config?: AxiosRequestConfig;
    token?: string
};

type ApiLog = {
    nameFunction: string;
    body?: any;
    tags?: string;
    res?: AxiosResponse<any, any> | any;
    e?: any;
    isDownload?: boolean;
};

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

type MimeType = 'application/pdf' | string;

type ApiDownloadType = {
    fileNameWithExt: string;
    mime: MimeType;
    progress?: (received: number, total: number) => void;
    mediaType?: Mediatype;
};

type ApiDownloadFileProps = ApiDownloadType & ApiProps;

type ApiDownloadFileResProps = {
    blobResponse?: FetchBlobResponse;
    filePath?: string;
};

interface BlobDownloadProps {
    method: Methods;
    url: string;
    headers?:
    | {
        [key: string]: string;
    }
    | undefined;
    body?: any;
    progress?: (received: number, total: number) => void;
}

type ReactNativeBlobUtilConfigExt = ApiDownloadType & ReactNativeBlobUtilConfig;

type ApiMediaType = 'image' | 'video' | 'file' | 'html';

type ApiUploadingStatus = {
    fileId: string;
    mediaType: ApiMediaType;
    retry?: number;
    customCondition?: (data: IMediaType) => boolean;
    url?: string;
    progress?: number = 0;
    callbackProgress?: CallBackWithParams<void, number>;
} & Omit<ApiProps, 'url'>;

type IMediaStatus = 'process' | 'finish' | 'failed';

interface IMediaImage {
    ID?: string;
    url_prefix_id?: string;
    video_type?: string;
    type?: string;
    service_type?: string;
    service_sub_type?: string;
    file_name?: string;
    duration?: number;
    size?: number;
    presentation_slides?: null;
    images?: null;
    content_type?: string;
    original_name?: string;
    content_extention?: string;
    path_url?: string;
    local_path_url?: string;
    status?: IMediaStatus;
    created_at?: Date;
}

interface IMediaVideo {
    ID?: string;
    url_prefix_id?: string;
    original_name?: string;
    content_extention?: string;
    video_type?: string;
    content_type?: string;
    service_type?: string;
    service_sub_type?: string;
    uuid?: string;
    title?: string;
    duration?: number;
    size?: number;
    description?: string;
    path_url?: string;
    local_path_url?: string;
    status?: string;
    video_sections?: null;
    zip_file?: string;
    thumbnail?: string;
    created_at?: Date;
    filecollection?: null;
}

type IMediaType = IMediaImage | IMediaVideo;

interface ApiGetSingleImageProps {
    imageId: string;
    fullResponse?: boolean;
    tags?: string;
}

interface ApiGetBulkImageProps<T> {
    dottedString: string;
    datas: any[];
    newParams?: string;
    tags?: string;
}

interface GenerateCurlProps {
    res: AxiosResponse<any, any> | any;
    url: string;
    nameFunction: string;
    tags: string;
    isError?: string;
}

type ApiUploadFormDataProps = {
    body: FormData;
    uploadProgress?: CallBackWith2Params<void, number, number>;
} & Omit<ApiProps, 'body' | 'config'>;

type IErrorResponseBase<T = any> = {
    statusCode: number;
    message: string;
    data?: T;
    success?: boolean
    error?: string;
}

type IErrorType = 'axios-error' | 'stock-error';

interface IErrorBase<T = IErrorResponseBase> {
    error: Error | AxiosError<T>;
    type: IErrorType;
}

interface IAxiosError<T = IErrorResponseBase> extends IErrorBase<T> {
    errorResponseData?: AxiosResponse<T>['data']
    error: AxiosError<T>;
    type: 'axios-error';
}
interface IStockError<T = any> extends IErrorBase<T> {
    error: Error;
    type: 'stock-error';
}

type IBaseResponse<T = any> = {
} & T