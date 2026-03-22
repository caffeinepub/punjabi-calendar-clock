import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Month {
    name: string;
    transliteration: string;
}
export interface Day {
    name: string;
    transliteration: string;
}
export interface backendInterface {
    getCurrentTime(): Promise<bigint>;
    getDays(): Promise<Array<Day>>;
    getMonths(): Promise<Array<Month>>;
}
