import { Button } from "@radix-ui/themes";
import { useRef } from "react";

export function SoundPackButton() {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <>
      <input ref={ref} type="file" id="fileInput" style={{display: 'none'}}></input>
      <Button onClick={onClick}>
            Select sound pack
      </Button>
    </>
        
  )

  function onClick() {
    ref.current?.click()
  }
}