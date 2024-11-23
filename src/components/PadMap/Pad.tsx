import { Box } from "@radix-ui/themes"

import styles from './styles.module.scss'
import classNames from "classnames"
import { useEffect, useState } from "react"
import { useSignal } from "../../hooks/useSignal"

export function Pad({ onClick, id, isSelected }: {onClick: (id: string) => void, id: string, isSelected: boolean}) {
    const [active, setActive] = useState(false);
    const { subscribe, unsubscribe } = useSignal()

    useEffect(() => {
        function blink() {
            setActive(true)
        }

        subscribe(id, blink)

        return () => {
            unsubscribe(id, blink)
        }
    }, [])

    useEffect(() => {
        let timeout = null
        if(active) {
            timeout = setTimeout(() => setActive(false), 100)
        }

        return () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            timeout && clearTimeout(timeout)
        }
    }, [active])

    return (
        <Box onClick={handleClick} className={classNames(styles.pad, isSelected && styles.selected, active && styles.active)} />
    )

    function handleClick(e: React.MouseEvent) {
        e.stopPropagation()
        onClick(id)
    }
}