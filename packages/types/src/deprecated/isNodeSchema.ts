import { IPublicTypeNodeSchema } from '../shell';

/**
 * @deprecated use same function from '@lce/lowcode-utils' instead
 */
export function isNodeSchema(data: any): data is IPublicTypeNodeSchema {
  return data && data.componentName;
}
