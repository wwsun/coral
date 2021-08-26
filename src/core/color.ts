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
  opacity: true,
};

config.bg = config.backgroundColor;

export const color = system(config);
