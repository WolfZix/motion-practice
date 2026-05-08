import './App.css'
import { motion } from 'motion/react'
import AnimatedButton from './components/AnimatedButton'
import FeaturesList from './components/FeaturesList'
import DraggableCard from './components/DraggableCard'
import DismissableAlert from './components/DismissableAlert'
import StepSwitcher from './components/StepSwitcher'
import CollabsibleList from './components/CollabsibleList'

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>Hello World</h1>
      </motion.div>
      <div className='button-div'>
        <AnimatedButton>Click Me!</AnimatedButton>
        <AnimatedButton damping={0}>Infinite bounce</AnimatedButton>
      </div>
      <FeaturesList></FeaturesList>
      <DraggableCard></DraggableCard><br />
      <DismissableAlert></DismissableAlert>
      <StepSwitcher></StepSwitcher>
      <CollabsibleList></CollabsibleList>
    </>
  )
}

export default App
