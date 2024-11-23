import { useEffect, useState } from "react";
import {WebMidi} from "webmidi"
// import {Howl} from 'howler';
import { Action } from "../data/types";
import { State } from "../data/reducer";
import { useSignal } from "./useSignal";

// const sound1 = new Howl({
//     src: ['1.mp3']
//   });
  
// const sound2 = new Howl({
//     src: ['2.mp3']
// });

export function useMidi(state: State, selectedPad: string, dispatch: React.Dispatch<Action>) {
  const [previousDeviceName, setPreviousDeviceName] = useState('') 
  const { publish } = useSignal()

  useEffect(() => {
      WebMidi
        .enable()
        .then(onEnabled)
        .catch(err => console.log(err));
  
      // Function triggered when WEBMIDI.js is ready
      function onEnabled() {

        if (WebMidi.inputs.length < 1) {
          console.log("No device detected.")
        } else {
          const deviceNames: string[] = []

          WebMidi.inputs.forEach((device) => {
            deviceNames.push(device.name)
          });

          dispatch({
            type: 'SET_DEVICES',
            devices: deviceNames
          })
        }
      }
    }, [])

    useEffect(() => {
      const device = WebMidi.inputs.find(item => item.name === state.selectedDevice)
      const previousDevice = WebMidi.inputs.find(item => item.name === previousDeviceName)

      if(!device) return

      // cleanup
      previousDevice?.removeListener('noteon')
      setPreviousDeviceName(device.name)
      
        
      device.addListener("noteon", e => {
        console.log(e.note.identifier)
        console.log(e.note.number)
        console.log(e.note.name);

        if(selectedPad) {
          dispatch({
            type: 'APPLY_PAD_KEY',
            key: e.note.number,
            id: selectedPad
          })

          return
        }

        console.log(e.note.number, state.keys[e.note.number])

        publish(state.keys[e.note.number])
      
        // if(e.note.number === 36) {
        //   sound1.play();
        // }
        // if(e.note.number === 37) {
        //   sound2.play();
        // }
      }, {channels: device.channels.map((_, i) => i)});

    }, [state.selectedDevice, selectedPad])
}