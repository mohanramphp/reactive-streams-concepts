import { Observer } from './observer';

/**
 * Observable - The object class that sends notifications, while the observer object class receives them
 */
export class Observable {
    constructor(private subscriptionFunction: Function) { }

    subscribe(observer: Observer): any {
        return this.subscriptionFunction(observer);
    }

    /**
     * Operators - Operators are observables that operate on a source observable
     */
    map(projectionFunction: Function) {
        return new Observable((observer: Observer) => {
            return this.subscribe({
                next(val: any) { observer.next(projectionFunction(val)) },
                error(e: Error) { observer.error(e) },
                complete() { observer.complete() }
            });
        });
    }

    filter(predicate: (value: any) => boolean) {
        return new Observable((observer: Observer) => {
            return this.subscribe({
                next(val: any) {
                    if (predicate(val)) {
                        observer.next(val);
                    }
                },
                error(e: Error) { observer.error(e) },
                complete() { observer.complete() }
            });
        });
    }

    mergeMap(project: (value: any) => Observable) {
        return new Observable((observer: Observer) => {
            this.subscribe({
                next(outerValue: any) {
                    project(outerValue).subscribe({
                        next(innerValue: any) {
                            observer.next(innerValue);
                        },
                        error() {
                            observer.error();
                        },
                        complete() {
                            observer.complete();
                        }
                    })
                },
                error() { },
                complete() { }
            })
        });

    }
}