/**
 * compact: true
 */

import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => (
  <XBaseForm
    path="myFormData"
    store={store}
    schema={schema}
    hasSubmit
    submitText="LOGIN"
    onSubmit={() => {}}
    debug
  />
));
