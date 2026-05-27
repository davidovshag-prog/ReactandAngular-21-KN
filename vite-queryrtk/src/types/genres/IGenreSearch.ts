import type {IBaseSearch} from "../helpers/IBaseSearch.ts";

export interface IGenreSearch extends IBaseSearch {
    id?: number; // не обов'язкове поле
    slug?: string;
    name?: string;
}