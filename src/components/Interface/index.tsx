import { Flex } from "@radix-ui/themes";
import { State } from "../../data/reducer";
import { DeviceSelector } from "./DeviceSelector";
import { SoundPackButton } from "./SoundPackButton";
import { Dispatch } from "react";
import { Action } from "../../data/types";

export function Interface(props: State & {dispatch: Dispatch<Action>}) {
  return (
    <Flex justify={'between'}>
      <DeviceSelector dispatch={props.dispatch} devices={props.devices} />
      <SoundPackButton />
    </Flex>
  )
}