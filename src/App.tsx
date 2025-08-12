import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from './ui/Button'
import { PlusIcon } from './icons/plusIcon'
import { ShareIcon } from './icons/Shareicon'

function App() {

  return (
    <>
    <Button startIcon={<ShareIcon size="lg"/>} variant='primary' size="sm" text="Share"/>
    <Button startIcon={<PlusIcon size="lg"/>} variant='secondary' size="md" text="Add content"/>
    </>
  )
}

export default App
