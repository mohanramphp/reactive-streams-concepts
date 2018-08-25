import { Observer } from './observer';
import { Observable } from './observable';

/**
 * Simple example for stream
 */
const subscriptionFunction = (observer: Observer) => {
    const producer = ['Sun', 'World', 'Moon'];
    producer.forEach(element => {
        observer.next(element);
    });

}

const stream$ = new Observable(subscriptionFunction);
const sayHello = (d: any) => `Hello ${d}`;

stream$.map(sayHello).subscribe({
    next(v: any) {
        console.log(v);
    },
    error() { },
    complete() { }
});