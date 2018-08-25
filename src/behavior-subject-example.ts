import { BehaviorSubject } from './behavior-subject';
let behaviorSubject: BehaviorSubject<number> = new BehaviorSubject<number>(Math.random());

behaviorSubject.subscribe({
    next(v: any) {
        console.log('behaviorSubject subscriber 1 = ' + v);
    },
    error() { },
    complete() { }
});

behaviorSubject.next(Math.random());
behaviorSubject.next(Math.random());

behaviorSubject.subscribe({
    next(v: any) {
        console.log('behaviorSubject subscriber 2 = ' + v);
    },
    error() { },
    complete() { }
});

behaviorSubject.next(Math.random());
console.log('behaviorSubject.getValue() call');
console.log(behaviorSubject.getValue());
// behaviorSubject subscriber 1 = 0.7168534710245731
// behaviorSubject subscriber 1 = 0.9223777971660148
// behaviorSubject subscriber 1 = 0.11031555526650871
// behaviorSubject subscriber 2 = 0.11031555526650871
// behaviorSubject subscriber 1 = 0.7267886966497488
// behaviorSubject subscriber 2 = 0.7267886966497488
// behaviorSubject.getValue() call
// 0.7267886966497488