import React from "react"

export const useTimeout = (callback: () => void, delay: number) => {
    const savedCallback = React.useRef(callback)
    React.useEffect(() => {
        const timeout = setTimeout(() => { savedCallback.current() }, delay)
        return () => clearTimeout(timeout)
    }, [savedCallback.current])
}