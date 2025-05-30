/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface NacTag {
  /** can be set to true to allow the override by usermac result */
  allowUsermacOverride?: boolean;
  createdTime?: number;
  /** if `type`==`egress_vlan_names`, list of egress vlans to return */
  egressVlanNames?: string[];
  /** if `type`==`gbp_tag` */
  gbpTag?: number;
  id?: string;
  match?: NacTag;
  /**
   * This field is applicable only when `type`==`match`
   *   * `false`: means it is sufficient to match any of the values (i.e., match-any behavior)
   *   * `true`: means all values should be matched (i.e., match-all behavior)
   * Currently it makes sense to set this field to `true` only if the `match`==`idp_role` or `match`==`usermac_label`'
   */
  matchAll?: boolean;
  modifiedTime?: number;
  name: string;
  orgId?: string;
  /**
   * if `type`==`radius_attrs`, user can specify a list of one or more standard attributes in the field "radius_attrs".
   * It is the responsibility of the user to provide a syntactically correct string, otherwise it may not work as expected.
   * Note that it is allowed to have more than one radius_attrs in the result of a given rule.
   */
  radiusAttrs?: string[];
  /** if `type`==`radius_group` */
  radiusGroup?: string;
  /**
   * if `type`==`radius_vendor_attrs`, user can specify a list of one or more vendor-specific attributes in the field "radius_vendor_attrs".
   * It is the responsibility of the user to provide a syntactically correct string, otherwise it may not work as expected.
   * Note that it is allowed to have more than one radius_vendor_attrs in the result of a given rule.
   */
  radiusVendorAttrs?: string[];
  /** if `type`==`session_timeout, in seconds */
  sessionTimeout?: number;
  type: NacTag;
  usernameAttr?: NacTag;
  /** if `type`==`match` */
  values?: string[];
  /** if `type`==`vlan` */
  vlan?: string;
}

export const nacTagSchema: Schema<NacTag> = object({
  allowUsermacOverride: ['allow_usermac_override', optional(boolean())],
  createdTime: ['created_time', optional(number())],
  egressVlanNames: ['egress_vlan_names', optional(array(string()))],
  gbpTag: ['gbp_tag', optional(number())],
  id: ['id', optional(string())],
  match: ['match', optional(lazy(() => nacTagSchema))],
  matchAll: ['match_all', optional(boolean())],
  modifiedTime: ['modified_time', optional(number())],
  name: ['name', string()],
  orgId: ['org_id', optional(string())],
  radiusAttrs: ['radius_attrs', optional(array(string()))],
  radiusGroup: ['radius_group', optional(string())],
  radiusVendorAttrs: ['radius_vendor_attrs', optional(array(string()))],
  sessionTimeout: ['session_timeout', optional(number())],
  type: ['type', lazy(() => nacTagSchema)],
  usernameAttr: ['username_attr', optional(lazy(() => nacTagSchema))],
  values: ['values', optional(array(string()))],
  vlan: ['vlan', optional(string())],
});
