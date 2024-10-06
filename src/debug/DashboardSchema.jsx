import { useTheme } from '@mui/material/styles';
import JsonView from '@uiw/react-json-view';
import { vscodeTheme } from '@uiw/react-json-view/vscode';
import { observer } from 'mobx-react';
import React from 'react';

export default observer(({ $$store }) => {
  const theme = useTheme();
  const isDark = theme?.palette?.mode === 'dark';

  // eslint-disable-next-line no-unused-vars
  const { tick } = $$store;
  const style = isDark ? { vscodeTheme } : {};

  return (
    <JsonView
      value={$$store.schema}
      style={style}
      displayObjectSize={false}
      displayDataTypes={false}
      enableClipboard={false}
    />
  );
});
