import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { motion } from 'motion/react'
import AnimatedButton from './components/AnimatedButton'
import FeaturesList from './components/FeaturesList'
import DraggableCard from './components/DraggableCard'
import DismissableAlert from './components/DismissableAlert'
import StepSwitcher from './components/StepSwitcher'
import CollabsibleList from './components/CollabsibleList'
import LiveBadge from './components/LiveBadge'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <nav className='nav'>
          <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="">About</Link>
            <Link to="">Contact</Link>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  )
}

function HomePage() {
  <>
    <h2>Home</h2>
    <p>Welcome!</p>
  </>
}

function About() {
  <>
    <h2>About</h2>
    <p>Welcome!</p>
  </>
}

function Contact() {
  <>
    <h2>Contact</h2>
    <p>Welcome!</p>
  </>
}

export default App
