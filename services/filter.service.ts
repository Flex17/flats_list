import axios from 'axios';

export const FilterService = {
  async getFilters() {
    try {
      const response = await axios.get('https://dynamic-filter.aerokod.ru/api/v1/filters');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch filters: ${error}`);
    }
  },
};
