import { Observer } from './observer';
import { Observable } from './observable';

export const interval = (milliseconds = 0, stopCounter: number = 10) => {
    return new Observable((observer: Observer) => {
        let count = 0;

        const id = setInterval(() => {
            if (count <= stopCounter) {
                observer.next(count++);
            } else {
                clearInterval(id);
                observer.complete();
            }
        }, milliseconds);

        return {
            unsubscribe() {
                clearInterval(id);
            }
        };

    });
}