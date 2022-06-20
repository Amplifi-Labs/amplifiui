import createNumberMask from './createNumberMask';
import {MaskArray} from './formatWithMask.types';

const PHONE_NUMBER = {
  US: [
    '+',
    '1',
    ' ',
    '(',
    /\d/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  BR: [
    '+',
    '5',
    '5',
    ' ',
    '(',
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
};

const CURRENCY = {
  US: createNumberMask({
    prefix: ['$', ' '],
    separator: '.',
    delimiter: ',',
    precision: 2,
  }),
  BR: createNumberMask({
    prefix: ['R', '$', ' '],
    separator: ',',
    delimiter: '.',
    precision: 2,
  }),
};

const CREDIT_CARD = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  [/\d/],
  [/\d/],
  [/\d/],
  [/\d/],
  ' ',
  [/\d/],
  [/\d/],
  [/\d/],
  [/\d/],
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
] as MaskArray;

export default {PHONE_NUMBER, CURRENCY, CREDIT_CARD};
