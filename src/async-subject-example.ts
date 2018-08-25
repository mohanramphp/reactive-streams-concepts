import { AsyncSubject } from './async-subject';

const asyncSubject: AsyncSubject<number> = new AsyncSubject<number>();

// subscriber 1
asyncSubject.subscribe({
    next(v: any) {
        console.log('asyncSubject subscriber 1 = ' + v);
    },
    error() { },
    complete() { }
});

asyncSubject.next(Math.random())
asyncSubject.next(Math.random())
asyncSubject.next(Math.random())

// subscriber 2
asyncSubject.subscribe({
    next(v: any) {
        console.log('asyncSubject subscriber 2 = ' + v);
    },
    error() { },
    complete() { }
});

asyncSubject.next(Math.random());
asyncSubject.complete();

// asyncSubject subscriber 1 = 0.06525801724773239
// asyncSubject subscriber 2 = 0.06525801724773239
