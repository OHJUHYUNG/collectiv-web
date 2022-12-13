import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './CommonStyle';

function Theme() {
  return (
    <ThemeProvider
      theme={{
        ...theme,
      }}
    />
  );
}
export default Theme;
