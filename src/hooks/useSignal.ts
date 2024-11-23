const subscribers: {[key: string]: (() => void)[]} = {}

export function useSignal() {
    return {
        subscribe,
        unsubscribe,
        publish
    }

    function subscribe(id: string, cb: () => void) {
        if(!subscribers[id]) {
            subscribers[id] = []
        }

        subscribers[id].push(cb)
    }

    function unsubscribe(id: string, cb: () => void) {
        subscribers[id] = subscribers[id].filter(item => item !== cb)
    }

    function publish(id: string) {
        subscribers[id]?.forEach(item => item())
    }
}