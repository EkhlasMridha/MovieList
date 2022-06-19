import { FindOptionsOrderValue } from "typeorm";

export interface PaginationQuery {
    pageSize: number;
    pageNumber: number;
    search: string;
    sortString: string;
}

export interface DynamicPaginationQuery {
    pageSize: number;
    pageNumber: number;
    searchProperties: string;
    sortProperties: string;
}