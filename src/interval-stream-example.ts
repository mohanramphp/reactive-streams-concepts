import { interval } from './interval-stream';

const subscription = interval(3000).map((d: any) => d + ' emitted').subscribe({
    next(v: any) {
        console.log('data transmitted in stream @ ' + (new Date()).getSeconds() + ' seconds');
        console.log(v);
    },
    error() { },
    complete() { }
});

setTimeout(() => {
    console.log('stream unsubscribed @ ' + (new Date()).getSeconds() + ' seconds');
    subscription.unsubscribe();
}, 14000);
