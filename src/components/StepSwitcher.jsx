import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function StepSwitcher() {
    const [step, setStep] = useState(1)

    return (
        <div className="step-container">
            <button onClick={() => setStep((s) => (s === 1 ? 2 : 1))}>
                Toggle Step
            </button>
            <div className="step-box">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="step-card"
                        >
                            Step One
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="step-card"
                        >
                            Step Two
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default StepSwitcher