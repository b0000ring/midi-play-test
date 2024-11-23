import { Grid } from "@radix-ui/themes";
import { Pads } from "../../types";
import { Pad } from "./Pad";

export function PadMap({ pads, setSelectedPad, selectedPad }: {pads: Pads, selectedPad: string, setSelectedPad: (id: string) => void}) {
    return (
        <Grid columns="repeat(4, 128px)" gap="4" rows="repeat(4, 128px)" >
            {Object.entries(pads).map(item => (
                <Pad isSelected={selectedPad === item[0]} onClick={setSelectedPad} key={item[0]} id={item[0]} {...item[1]} />
            ))}
        </Grid>
    )
}