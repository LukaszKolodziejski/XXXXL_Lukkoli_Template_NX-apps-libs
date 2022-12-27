import { Country } from '../common';
import { lukkolispaceAPI } from '../instances';

const service = lukkolispaceAPI.createService({
  name: 'countries',
});

export const loadCountries = service.get<null, Country[]>(null);
