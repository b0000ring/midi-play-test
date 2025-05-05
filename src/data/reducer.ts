import { Pads } from "../types"
import { Action, APPLY_PAD_KEY, APPLY_PAD_SOUND, SELECT_DEVICE, SET_DEVIES, } from "./types"

export type State = {
    devices: string[],
    selectedDevice: string,
    map: Pads
    keys: {[key: number]: string}
}

export const defaultState: State = {
  devices: [],
  selectedDevice: '',
  map: {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {}
  },
  keys: {}
}

export function reducer(state: State, action: Action): State {
  switch(action.type) {
  case APPLY_PAD_KEY:
    return {
      ...state,
      keys: {
        ...state.keys,
        [action.key]: action.id
      }
    }
  case SELECT_DEVICE:
    return {
      ...state,
      selectedDevice: action.id
    }
  case SET_DEVIES:
    return {
      ...state,
      devices: action.devices
    }
  case APPLY_PAD_SOUND:
    return {
      ...state,
      map: {
        ...state.map,
        [action.id]: {
          ...(state.map[action.id] || {}),
          sound: action.value
        }
      }
    }
  }

  return state    
}