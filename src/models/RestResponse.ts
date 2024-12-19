export interface RestResponse<T>{
    totalItems?: number,
    pages?: number[],
    totalPages?: number,
    currentPage?: number,
    hasPrev?: boolean,
    hasNext?: boolean,
    results:T
    status:number
}