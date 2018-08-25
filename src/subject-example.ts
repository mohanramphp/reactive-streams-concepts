import {Subject} from './subject';

let subject: Subject<number> = new Subject<number>();

subject.subscribe({
    next(v: any) {
        console.log('subject subscriber 1 = ' + v);
    },
    error() { },
    complete() { }
});

subject.next(Math.random());
subject.next(Math.random());

subject.subscribe({
    next(v: any) {
        console.log('subject subscriber 2 = ' + v);
    },
    error() { },
    complete() { }
});
subject.next(Math.random());
// subject subscriber 1 = 0.46750840515561265
// subject subscriber 1 = 0.5903651593853956
// subject subscriber 1 = 0.5621643608784512
// subject subscriber 2 = 0.5621643608784512