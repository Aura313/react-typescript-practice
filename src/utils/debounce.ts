export const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timerId: NodeJS.Timeout | null;

    return (...args: any[]) => {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            func(...args);
            timerId = null;
        }, delay);
    };
};
