import { Observer } from './observer';
import { Observable } from './observable';
import { interval } from './interval-stream';

const mergeObervable = (value: any) => {
    return new Observable((observer: Observer) => {
        observer.next('data from previous steam - ' + value);
    });
}

interval(1000, 4).mergeMap((value: any) => mergeObervable(value))
    .subscribe({
        next(v: any) {
            console.log(v);
        },
        error() { },
        complete() { }
    });





