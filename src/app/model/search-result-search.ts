import {BaseSearch} from "./base-search.model";

export interface SearchResultSearchModel extends BaseSearch {
  title: string;
  snippet: string;
  link: string;
  query_id: number;
}
