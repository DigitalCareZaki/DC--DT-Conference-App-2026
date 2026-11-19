import { PipelineStage, PopulateOptions, RootFilterQuery } from "mongoose";

export interface IPaginationResult<T> {
    data: T[];
    pagination: {
        totalItems: number;
        perPage: number;
        totalPages: number;
        currentPage: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        prevPage: number | null;
        nextPage: number | null;
    };
}

export interface IPaginationFunctionParams {
    query?: any, //Record<string, any>,
    page?: number,
    limit?: number,
    populate?: any,
    select?: string,
    sort?: Record<string, any>,
}

export interface IPaginationParamsWithUserId {
    query?: any, //Record<string, any>,
    page?: number,
    limit?: number,
    populate?: any,
    select?: string,
    sort?: Record<string, any>,
    userId?: string
}

export interface IPaginationParamsWithBusinessId {
    query?: any, //Record<string, any>,
    page?: number,
    limit?: number,
    populate?: any,
    select?: string,
    sort?: Record<string, any>,
    businessId?: string
}

export interface IFirebaseNotificationParams {
    title: string;
    body: string;
    tokens: string[];
    data?: {
        [key: string]: string;
    }
}

export interface IRequestedUser {
    _id: string;
    email: string;
    role: string;
}

export type MulterFilesMap = { [fieldname: string]: Express.Multer.File[] };

export interface IPaginationParams {
    page: number;
    limit: number;
    search?: string;
    type?: string;
}


export interface GetPaginationQueryParams extends IPaginationParams {
    query?: RootFilterQuery<any>;
    populate?: string | string[] | PopulateOptions | PopulateOptions[];
    sort?: Record<string, any>;
    select?: string;
}

export interface GetAggregatedPaginationQueryParams extends IPaginationParams {
    query?: PipelineStage[];
}