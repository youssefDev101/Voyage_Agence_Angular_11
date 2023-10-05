export interface OffreFav {
    id: number;
    rating: number[];
    img: string;
    miniDesc: string;
    longDesc: string;
    city: City;
    price: Price;
    days: Days;
}
export interface City {
    cityId: number;
    name: string;
    adresse: string;
}

export interface Price {
    priceId: number;
    value: string;
}

export interface Days {
    dayId: number;
    name: string;
    date: Date;
}
