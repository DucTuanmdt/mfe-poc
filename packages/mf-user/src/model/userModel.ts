
export interface IFUser {
  id: string
  firstName: string
  lastName: string
  email: string
  dob: string
  address: string
  city: string
  avatar: string
  country: string
}


export interface IFUserSearchCriteria {
    page?: number
    pageSize?: number
    sort?: string
}

export interface IFUserSearchParams {
    _page?: number
    _limit?: number
    _sort?: string
}
