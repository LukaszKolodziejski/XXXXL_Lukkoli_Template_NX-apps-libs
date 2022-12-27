import { createAPI } from '@lukkoli/developer-kit';

export const lukkolispaceAPI = createAPI({
  url: `${process.env['NX_lukkoliSPACE_API_URL']}`,
});
