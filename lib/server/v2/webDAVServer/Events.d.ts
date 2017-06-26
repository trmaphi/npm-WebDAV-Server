import { RequestContext } from '../WebDAVRequest';
import { XMLElement } from '../../../helper/XML';
import { Path } from '../../../manager/v2/Path';
import { Resource } from '../../../manager/v2/fileSystem/Resource';
import { Lock } from '../../../resource/lock/Lock';
export declare type EventsName = 'create' | 'delete' | 'copy' | 'move' | 'lock' | 'refreshLock' | 'unlock' | 'setProperty' | 'removeProperty' | 'write' | 'read' | 'addChild';
export declare type DetailsType = Resource | Path | Lock | XMLElement;
export declare type Listener = (ctx: RequestContext, subjectResource: Resource, details?: DetailsType) => void;
export declare function invoke(event: EventsName, ctx: RequestContext, subjectResource?: Resource, details?: DetailsType): void;
export declare function register(event: EventsName, listener: Listener): void;
export declare function registerWithName(event: EventsName, name: string, listener: Listener): void;
export declare function clear(event: EventsName): void;
export declare function clearAll(event: EventsName): void;
export declare function remove(event: EventsName, listener: Listener): void;
export declare function removeByName(event: EventsName, name: string): void;
