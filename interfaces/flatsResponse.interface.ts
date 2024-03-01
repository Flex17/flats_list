import { FlatI } from '@/interfaces/flat.interface';

interface LinksI {
  first: string,
  last: string,
  prev: string,
  next: string,
}

interface MetaLinkI {
  url: string,
  label: string,
  active: boolean,
}

interface MetaI {
  current_page: number,
  from: number,
  last_page: number,
  links: MetaLinkI[],
  path: string,
  per_page: number,
  to: number,
  total: number,
}

export interface FlatsResponseI {
  data: {
    data: FlatI[],
    links: LinksI,
    meta: MetaI,
  };
}
