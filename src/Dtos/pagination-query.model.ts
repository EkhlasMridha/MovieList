import { FindOptionsOrderValue } from "typeorm";

export interface PaginationQuery {
    pageSize: number;
    pageNumber: number;
    search: string;
    sort: FindOptionsOrderValue
}