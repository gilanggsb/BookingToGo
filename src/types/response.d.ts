export type IBaseErrorResponse = {
    code?: string;
    message?: string;
    status?: string;
}

export interface IResponsePaymentDetail {
    objectId?:     string;
    createdAt?:    Date;
    updatedAt?:    Date;
    chosen_hotel?: ChosenHotel;
}

export interface ChosenHotel {
    data?:   ChoosenHotelData;
    header?: Header;
}

export interface ChoosenHotelData {
    get_chosen_hotel?: GetChosenHotel;
}

export interface GetChosenHotel {
    chosen_hotel_room?:    ChosenHotelRoom;
    chosen_hotel_detail?:  ChosenHotelDetail;
    chosen_hotel_params?:  ChosenHotelParams;
    chosen_hotel_prices?:  ChosenHotelPrices;
    chosen_hotel_expired?: Date;
}

export interface ChosenHotelDetail {
    zip?:            string;
    star?:           number;
    phone?:          string;
    images?:         Image[];
    address?:        string;
    latitude?:       number;
    longitude?:      number;
    facilities?:     string[];
    hotel_name?:     string;
    descriptions?:   Description[];
    region_hotel?:   string;
    is_recommended?: boolean;
}

export interface Description {
    title?:       string;
    description?: string;
}

export interface Image {
    url?:       string;
    title?:     string;
    thumbnail?: string;
}

export interface ChosenHotelParams {
    check_in?:            Date;
    check_out?:           Date;
    hotel_code?:          string;
    hotel_name?:          string;
    total_room?:          number;
    guest_adult?:         number;
    guest_infant?:        number;
    guest_children?:      number;
    guest_children_ages?: any[];
}

export interface ChosenHotelPrices {
    cxl_policies?:           CxlPolicy[];
    precode_book?:           string;
    price_detail?:           PriceDetail;
    is_refundable?:          boolean;
    discount_description?:   string;
    important_informations?: ImportantInformation[];
}

export interface CxlPolicy {
    cxl_fee?:        number;
    cxl_remark?:     string;
    cxl_end_date?:   Date;
    cxl_start_date?: Date;
}

export interface ImportantInformation {
    info?: string;
}

export interface PriceDetail {
    total?:          number;
    currency?:       string;
    origin_total?:   number;
    corporate_fee?:  number;
    discount_price?: number;
}

export interface ChosenHotelRoom {
    meal?:                     string;
    region?:                   string;
    meal_code?:                string;
    room_name?:                string;
    sply_code?:                string;
    avail_sply?:               string;
    hotel_sply?:               string;
    room_grade?:               string;
    vendor_code?:              string;
    hotel_room_type_selected?: string;
}

export interface Header {
    reason?:       string;
    messages?:     any[];
    error_code?:   string;
    process_time?: number;
}
