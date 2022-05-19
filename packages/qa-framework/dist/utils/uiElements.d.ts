declare type Impossible<K extends keyof any> = {
    [P in K]: never;
};
declare type NoExtraProperties<T, U extends T = T> = U & Impossible<Exclude<keyof U, keyof T>>;
interface WebElementProps {
    locator: string;
    text?: string;
}
export declare type TypeWebElement = NoExtraProperties<WebElementProps>;
export {};
