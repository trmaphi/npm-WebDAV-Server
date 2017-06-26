/// <reference types="node" />
import { RequestContext, HTTPMethod } from '../WebDAVRequest';
import { ResourceType } from '../../../manager/v2/fileSystem/CommonTypes';
export default class  implements HTTPMethod {
    unchunked(ctx: RequestContext, data: Buffer, callback: () => void): void;
    isValidFor(type: ResourceType): boolean;
}
