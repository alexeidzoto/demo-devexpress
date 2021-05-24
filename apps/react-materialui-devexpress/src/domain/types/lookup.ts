import { StoreLookup } from "./store-lookup";

export interface Lookup<T> {
    store: StoreLookup<T>;
    pageSize: number;
    paginate: boolean;
}