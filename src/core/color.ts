import { system, StylePropConfig } from './core';

const config: StylePropConfig = {
  color: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  background: {
    property: 'background',
    scale: 'colors',
  },
  opacity: true,
};

config.bg = config.background;

export const color = system(config);
