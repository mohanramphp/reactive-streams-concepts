import { Observer } from './observer';
import { Observable } from './observable';

/**
 * Subject is both an Observable and Observer
 */
export class Subject<T> extends Observable implements Observer {
    private observers: Array<Observer>;

    constructor() {
        super(() => { });
        this.observers = [];
    }

    next(value: T) {
        this.observers.forEach(observer => observer.next(value));
    }

    error(error: any) {
        this.observers.forEach(observer => observer.error(error));
    }

    complete() {
        this.observers.forEach(observer => observer.complete());
    }

    subscribe(observer: Observer) {
        this.observers.push(observer);
    }
}

