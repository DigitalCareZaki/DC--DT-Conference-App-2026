import { EventEmitter2 } from 'eventemitter2';
import { IEventDispatcher } from './interfaces';

export class EventEmitterDispatcher implements IEventDispatcher {
    private emitter: EventEmitter2;
    constructor() {
        this.emitter = new EventEmitter2({ wildcard: true });
    }

    public dispatch(eventName: string, payload: any): void {
        this.emitter.emit(eventName, payload);
    }

    public on(eventName: string, listener: (...args: any[]) => void): void {
        this.emitter.on(eventName, listener);
    }

    public once(eventName: string, listener: (...args: any[]) => void): void {
        this.emitter.once(eventName, listener);
    }

    public off(eventName: string, listener: (...args: any[]) => void): void {
        this.emitter.off(eventName, listener);
    }
}