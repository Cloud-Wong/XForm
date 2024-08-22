import { useMemo, useEffect } from 'react';
import {
  TextField,
} from '@mui/material';
import { observer } from 'mobx-react';

export default observer(({
  path = '', // 数据路径
  $$store = null, // 状态管理
}) => {
  console.log('~~~ TextField', path);

  const {
    label,
    disabled,
    readOnly,
    helperText,
    multiline,
    rows,
    minRows,
    maxRows,

    errorMsg,
  } = $$store.context(path);

  // 渲染组件
  const value = $$store.getValue(path);

  useEffect(() => {
    $$store.linkage(path);
  }, [value]);

  const componentProps = {};
  if (multiline === true) {
    componentProps.multiline = multiline;
    if (rows) componentProps.rows = rows;
    else {
      if (minRows) componentProps.minRows = minRows;
      if (maxRows) componentProps.maxRows = maxRows;
    }
  }

  return (
    <TextField
      value={value}
      onChange={(e) => {
        $$store.setValue(path, e.target.value);
      }}
      label={label}
      fullWidth
      disabled={disabled}
      inputProps={{
        readOnly,
      }}
      onBlur={() => $$store.validate(path)}
      error={!!errorMsg}
      helperText={errorMsg || helperText}
      multiline={multiline}
      {...componentProps}
    />
  );
});