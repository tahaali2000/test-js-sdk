/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  dict,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { CustomEnum, customEnumSchema } from './customEnum';
import { Message, messageSchema } from './message';
import { StatusEnum, statusEnumSchema } from './statusEnum';

export interface Item {
  id: string;
  name: string;
  date: string;
  dateTime: string;
  decimal: number;
  mLong: bigint;
  bool: boolean;
  customEnum: CustomEnum;
  status?: StatusEnum;
  /** A generic JSON object */
  jsonObject?: unknown;
  animal?: unknown;
  map: Record<string, Message>;
}

export const itemSchema: Schema<Item> = object({
  id: ['id', string()],
  name: ['name', string()],
  date: ['date', string()],
  dateTime: ['dateTime', string()],
  decimal: ['decimal', number()],
  mLong: ['long', bigint()],
  bool: ['bool', boolean()],
  customEnum: ['CustomEnum', customEnumSchema],
  status: ['status', optional(statusEnumSchema)],
  jsonObject: ['jsonObject', optional(unknown())],
  animal: ['Animal', optional(unknown())],
  map: ['Map', dict(lazy(() => messageSchema))],
});
