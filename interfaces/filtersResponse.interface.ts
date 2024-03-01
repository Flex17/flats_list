import { ProjectI } from '@/interfaces/projectI.interface';

export type RoomT = number;

export interface RoomsI {
  number: RoomT;
}

export interface RangeI {
  'min_range'?: number,
  'max_range'?: number,
  'min'?: number,
  'max'?: number
}

export interface FiltersResponseI {
  projects: ProjectI[],
  rooms: RoomsI[],
  price: RangeI,
  square: RangeI,
}
