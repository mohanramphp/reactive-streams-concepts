import { Observer } from './observer';
import { Observable } from './observable';

export class AsyncSubject<T> extends Observable implements Observer {

    private observers: Array<Observer>;
    private lastValue: T;

    constructor() {
        super(() => { });
        this.observers = [];
    }

    subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    next(value: T) {
        this.lastValue = value;
    }

    error(error: any) {
        return new Error();
    }

    complete() {
        this.observers.forEach(observer => observer.next(this.lastValue));
    }

}

