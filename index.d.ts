import 'k8w-linq-array';
import 'k8w-super-date';
import 'k8w-super-object';

declare global {
    type Diff<T extends (string | number | symbol), U extends (string | number | symbol)> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
    type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };
    type Overwrite<T, U> = { [P in Diff<keyof T, keyof U>]: T[P] } & U;
}