import "./App.css";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
// import AnimatedButton from "./components/AnimatedButton";
// import { FeaturesList } from "./components/FeaturesList";
// import { DraggableCard } from "./components/DraggableCard";
// import { DismissableAlert } from "./components/DismissableAlert";
// import { StepSwitcher } from "./components/StepSwitcher";
// import { CollapsibleList } from "./components/CollapsibleList";
// import { LiveBadge } from "./components/LiveBadge";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="nav">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({ children }) {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}

function HomePage() {
  return (
    <>
      <h2>Home</h2>
      <p>Welcome! Switch between pages to see the transition.</p>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h2>About</h2>
      <p>Welcome! Switch between pages to see the transition.</p>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <h2>Contact</h2>
      <p>Welcome! Switch between pages to see the transition.</p>
    </>
  );
}

export default App;