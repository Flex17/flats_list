import axios from 'axios';
import { ParsedUrlQuery } from 'node:querystring';

export const FlatService = {
  async getAll(params: ParsedUrlQuery | undefined, page: number, perPage: number) {
    try {
      const response = await axios.get('https://dynamic-filter.aerokod.ru/api/v1/flats', {
        params: {
          ...params,
          page,
          per_page: perPage,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch flats: ${error}`);
    }
  },
};
