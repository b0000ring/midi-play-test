import { Select } from "@radix-ui/themes";
import { Action } from "../../../data/types";

export function DeviceSelector({ devices, dispatch }: {devices: string[], dispatch: React.Dispatch<Action>}) {

  function onChange(value: string) {
    dispatch({
      type: 'SELECT_DEVICE',
      id: value
    })
  }

  return (
    <Select.Root onValueChange={onChange} size="2" defaultValue="select">
      <Select.Trigger />
      <Select.Content>
        <Select.Item value={"select"}>{"Select device"}</Select.Item>
        {devices.map(item => (
          <Select.Item key={item} value={item}>{item}</Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  )
}