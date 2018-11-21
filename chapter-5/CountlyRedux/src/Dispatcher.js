class Dispatcher {

    constructor() {
        this.isDispatching = false;
        this.actionHandlers = [];
    }

    dispatch(action) {
        if(this.isDispatching) {
            throw new Error('Cannot re-dispatch.');
        }

        this.isDispatching = true;

        this.actionHandlers.forEach(handler => handler(action))

        this.isDispatching = false;
    }

    register(actionHandler) {
        this.actionHandlers.push(actionHandler);
    }
};

export default new Dispatcher();