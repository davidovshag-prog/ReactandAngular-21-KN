import {createApi} from "@reduxjs/toolkit/query/react";
import {createAWSQuery} from "../util/createAWSQuery.ts";
import type {IPagedResult} from "../types/helpers/IPageResult.ts";
import type {IGenreItem} from "../types/genres/IGenreItem.ts";
import type {IGenreSearch} from "../types/genres/IGenreSearch.ts";

export const apiGenres = createApi({
    reducerPath: 'genres',
    baseQuery: createAWSQuery("api/genres"),
    endpoints: (builder) => ({
        searchGenres: builder.query<IPagedResult<IGenreItem>, IGenreSearch>({
            query: (data) =>
            {
                // console.log("Submit Data Query", body);
                // const form = serialize(body);

                return {
                    url: "Search",
                    method: "GET",
                    params: data // дані для пошуку
                }
            }
        }),
    })
});

export const {
    useSearchGenresQuery,
}  = apiGenres;