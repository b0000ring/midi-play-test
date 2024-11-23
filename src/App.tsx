import { useEffect, useReducer, useState } from 'react';
import './App.css'
import { PadMap } from './components/PadMap';
import { defaultState, reducer } from './data/reducer';
import { Interface } from './components/Interface';
import { Flex } from '@radix-ui/themes';
import { useMidi } from './hooks/useMidi';

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [selectedPad, setSelectedPad] = useState<string>('')

  useMidi(state, selectedPad, dispatch)

  useEffect(() => {
    function resetSelectedPad() {
      setSelectedPad('')
    }
    
    document.addEventListener('click', resetSelectedPad)

    return () => {
      document.removeEventListener('click', resetSelectedPad)
    }
  }, [])

  useEffect(() => {
    setSelectedPad('')
  }, [state.keys])

  return (
    <Flex m={'4rem'} direction={'column'} p={"4"} justify={'between'} minHeight={'50vh'}>
      <Interface {...state} dispatch={dispatch} />
      <PadMap selectedPad={selectedPad} setSelectedPad={setSelectedPad} pads={state.map} />
    </Flex>
  )
}

export default App
