import { BaseModel } from '../../core';

export default class BufferModel extends BaseModel {
  initialize(configurations) {
    const DATA_BITS = Number(configurations.DATA_BITS);

    this.addInputPort('in', { bits: DATA_BITS });
    this.addOutputPort('out', { bits: DATA_BITS });
  }

  step(input) {
    return { out: input.in };
  }
}
