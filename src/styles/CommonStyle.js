import { css } from 'styled-components';
import { generateMedia } from 'styled-media-query';

export const media = generateMedia({
  xs: '500px',
  s: '1200px',
  sm: '1500px',
  m: '1920px',
  l: '2560px',
});

export const width = window.innerWidth;

export const textNormal = css`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.04em;
  color: #000000;
`;

export const flexRow = css`
  display: flex;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const none = css`
  display: none;
`;

export const justifyCenter = css`
  justify-content: center;
`;

export const alignCenter = css`
  align-items: center;
`;

export const relative = css`
  position: relative;
`;

export const absolute = css`
  position: absolute;
`;

export const color = {
  blue: '#007bff',
  black: '#000',
  darkGray: '#464646',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
  white: '#fff',
  gray: '#6c757d',
  lightGray: 'rgba(0,0,0,0.1)',
  grayDark: '#343a40',
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#343a40',
  gold: '#CC9966',
  toneDownBlack: '#222222',
};

export const theme = {
  skyblue: 'rgba(50, 175, 254)',
  pink: 'rgba(251, 21, 84)',
  navy: 'rgba(2, 17, 29)',
  green: 'rgba(44, 188, 170)',
};
