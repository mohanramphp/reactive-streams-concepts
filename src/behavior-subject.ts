import { Observer } from './observer';
import { Observable } from './observable';

export class BehaviorSubject<T> extends Observable implements Observer {

    private observers: Array<Observer>;
    private lastValue: T;

    constructor(initialValue: T) {
        super(() => { });
        this.observers = [];

        if (typeof initialValue === 'undefined') {
            throw new Error('You need to provide initial value');
        }

        this.lastValue = initialValue;
    }

    subscribe(observer: Observer) {
        this.observers.push(observer);
        observer.next(this.lastValue);
    }

    next(value: T) {
        this.lastValue = value;
        this.observers.forEach(observer => observer.next(value));
    }

    error(error: any) {
        this.observers.forEach(observer => observer.error(error));
    }

    complete() {
        this.observers.forEach(observer => observer.complete());
    }

    getValue() {
        return this.lastValue;
    }
}

