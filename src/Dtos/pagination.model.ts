export interface Pagination<T> {
    data: T[];
    total: number;
    pageNumber: number;
}