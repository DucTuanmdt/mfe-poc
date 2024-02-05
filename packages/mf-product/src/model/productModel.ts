export interface IFSearchProductParams {}

export interface IFProduct {
  id: string;
  name: string;
  brand: string;
  processor: string;
  ram: string;
  storage: string;
  screenSize: string;
  resolution: string;
  graphicsCard: string;
  os: string;
  price: number;
  weight: number;
  batteryLife: number;
}

export interface IFProductSearchCriteria {
    page?: number
    pageSize?: number
    sort?: string
}

export interface IFProductSearchParams {
    _page?: number
    _limit?: number
    _sort?: string
}
