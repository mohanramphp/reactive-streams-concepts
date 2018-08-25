/**
 * Observer is an object which abides by the below contract
 */
export interface Observer {
    next: Function;
    error: Function;
    complete: Function;
}