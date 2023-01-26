import { Component } from '../../core';

import icon from './JoinerIcon';
import model from './JoinerModel';
import widget from './JoinerWidget';

export default new Component({
  type: 'Joiner',
  name: 'Joiner',
  description: 'Joins N 1 bit wires into one N bit wire',
  group: 'Wiring',
  configurations: [
    {
      name: 'DATA_BITS',
      type: 'select',
      default: '2',
      label: 'Output data bits',
      options: [
        {
          label: '2 bits',
          value: '2',
        },
        {
          label: '4 bits',
          value: '4',
        },
        {
          label: '8 bits',
          value: '8',
        },
        {
          label: '16 bits',
          value: '16',
        },
      ],
    },
  ],
  model,
  widget,
  icon,
});
