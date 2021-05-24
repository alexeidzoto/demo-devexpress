export interface StoreLookup<T>  {
    type: string;
    data: Array<T>;
    key: string;
}