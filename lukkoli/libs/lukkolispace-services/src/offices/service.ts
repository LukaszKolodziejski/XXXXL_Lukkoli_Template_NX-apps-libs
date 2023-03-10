import { Office } from '../common';
import { lukkolispaceAPI } from '../instances';
import { OfficePayload } from './payloads';

const service = lukkolispaceAPI.createService({
  name: 'offices',
});

export const loadOffice = service.get<{ id: Office['id'] }, Office>({
  id: 'param',
});
export const createOffice = service.post<null, OfficePayload, Office>(null);
export const editOffice = service.put<
  { id: Office['id'] },
  OfficePayload,
  Office
>({ id: 'param' });
