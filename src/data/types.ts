export const APPLY_PAD_KEY = "APPLY_PAD_KEY"
export const APPLY_PAD_SOUND = "APPLY_PAD_SOUND"
export const SELECT_DEVICE = "SELECT_DEVICE"
export const SET_DEVIES = "SET_DEVICES"

export type ApplyPadKey = {
    type: typeof APPLY_PAD_KEY
    id: string
    key: number
}

export type SetDevices = {
    type: typeof SET_DEVIES,
    devices: string[]
}

export type ApplyPadSound = {
    type: typeof APPLY_PAD_SOUND
    value: number
    id: number
}

export type SelectDevice = {
    type: typeof SELECT_DEVICE
    id: string
}


export type Action = ApplyPadKey | ApplyPadSound | SelectDevice | SetDevices