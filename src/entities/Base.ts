export type Untyped = {
  readonly [propName: string]: any
}

export type Pageable = {
  numberOfElements: number
  totalElements: number
  totalPages: number
  size: number
  page: number
  first: boolean
  last: boolean
}

export type Category = {
  id: string
  name: string
}

export type UploadedFile = {
  id: string
  name: string
  path: string
  type: string
  owner: string
  date: string
}

export type PagingSortingConditions = {
  sortBy: string
  size: number
  page: number
}

export type RouterParams = { id: string }
