export function LoggerMiddleware(store) {
    return function (next) {
        return function (action) {
            console.log("dispatching", action.type + ' ' + store.getState());
            var result = next(action);
            return result;
        };
    };
}