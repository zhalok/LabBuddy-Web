import { Component } from '../../core';

import icon from './NorIcon';
import model from './NorModel';
import widget from './NorWidget';

export default new Component({
  type: 'Nor',
  name: 'Nor',
  description: 'Logic "not or" gate',
  group: 'Logic gates',
  configurations: [
    {
      name: 'INPUT_PORTS_NUMBER',
      type: 'number',
      default: 2,
      label: 'Number of input ports',
      min: 2,
      max: 16,
      validate(value) {
        if (value < this.min)
          return `Minimum input ports is ${this.min}`;
        if (value > this.max)
          return `Maximum input ports is ${this.max}`;
        return null;
      },
    },
    {
      name: 'DATA_BITS',
      type: 'select',
      default: '1',
      label: 'Data bits',
      options: [
        {
          label: '1 bit',
          value: '1',
        },
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
