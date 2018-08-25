import { ReplaySubject } from './replay-subject';

const replaySubject: ReplaySubject<string> = new ReplaySubject<string>(3);

replaySubject.next('One');
replaySubject.next('Two');
replaySubject.next('Three');
replaySubject.next('Four');

setTimeout(() => {
    replaySubject.map((value: any) => `Later Observer ${value}`).subscribe({
        next(v: any) {
            console.log('replaySubject subscriber 1 = ' + v);
        },
        error() { },
        complete() { }
    });
}, 2000);

// replaySubject subscriber 1 = Later Observer Two
// replaySubject subscriber 1 = Later Observer Three
// replaySubject subscriber 1 = Later Observer Four