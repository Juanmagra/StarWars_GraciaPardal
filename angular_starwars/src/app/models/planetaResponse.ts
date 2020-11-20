import { Planeta } from './planetaInterface';

export interface PlanetaResponse {
    count: number;
    next: string;
    previous?: any;
    results: Planeta[];
}