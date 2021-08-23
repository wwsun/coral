import { Theme } from 'styled-system';

export { Theme };

export const defaultTheme: Theme = {
  colors: {
    primary: {
      10: '#f0f5ff',
      20: '#d6e4ff',
      30: '#adc6ff',
      40: '#85a5ff',
      50: '#597ef7',
      60: '#2f54eb',
      70: '#1d39c4',
      80: '#10239e',
      90: '#061178',
      100: '#030852',
    },
    // secondary: {},
    gray: {
      10: '#f5f5f5',
      20: '#f0f0f0',
      30: '#dddddd',
      40: '#bfbfbf',
      50: '#8c8c8c',
      60: '#595959',
      70: '#434343',
      80: '#262626',
      90: '#1f1f1f',
      100: '#141414',
    },
    red: {
      10: '#fff2f0',
      20: '#ffedeb',
      30: '#ffc8c2',
      40: '#ffa099',
      50: '#f7716d',
      60: '#eb4141',
      70: '#c42d32',
      80: '#9e1c25',
      90: '#78101a',
      100: '#520A13',
    },
    green: {
      10: '#e4f2e5',
      20: '#d3e6d6',
      30: '#a5d9ae',
      40: '#7acc8c',
      50: '#54bfcf',
      60: '#32b357',
      70: '#208c42',
      80: '#126630',
      90: '#08401e',
      100: '#031a0c',
    },
    yellow: {
      10: '#fffbe6',
      20: '#ffeda3',
      30: '#ffe07a',
      40: '#ffd152',
      50: '#ffbf29',
      60: '#ffa900',
      70: '#d98900',
      80: '#b36b00',
      90: '#8c4f00',
      100: '#663600',
    },
    // emphasis: {},
    // text: {},
    // fill: {},
  },
  space: {
    s: '4px',
    m: '8px',
    l: '12px',
    xl: '16px',
    xxl: '20px',
  },
  fontSizes: {
    note: '12px',
    body: '12px',
    subtitle: '14px',
    title: '16px',
    subheader: '20px',
    header: '24px',
  },
  sizes: {},
  borders: {
    solid: '1px solid',
    dashed: '1px dashed',
  },
  radii: {
    s: '2px',
    m: '4px',
    l: '8px',
  },
  shadows: {
    lowUp:
      '0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05), 0 -12px 48px 16px rgba(0, 0, 0, 0.03)',
    lowDown:
      '0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03)',
    lowLeft:
      '-6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05), -12px 0 48px 16px rgba(0, 0, 0, 0.03)',
    lowRight:
      '6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05), 12px 0 48px 16px rgba(0, 0, 0, 0.03)',
    median: '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    // high: '',
  },
};