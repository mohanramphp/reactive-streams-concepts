import { Observer } from './observer';
import { Observable } from './observable';

export class ReplaySubject<T> extends Observable implements Observer {

    private observers: Array<Observer>;
    private lastValues: Array<T>;

    constructor(private bufferSize: number) {
        super(() => { });
        this.observers = [];
        this.lastValues = [];
    }

    subscribe(observer: Observer) {
        this.lastValues.forEach(value => observer.next(value));
        this.observers.push(observer);
    }

    next(value: T) {
        if (this.lastValues.length === this.bufferSize) {
            this.lastValues.shift();
        }

        this.lastValues.push(value);
        this.observers.forEach(observer => observer.next(value));
    }

    error(error: any) {
        this.observers.forEach(observer => observer.error(error));
    }

    complete() {
        this.observers.forEach(observer => observer.complete());
    }
}

