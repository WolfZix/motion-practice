import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

function DismissableAlert() {
    const [open, setOpen] = useState(true)

    return (
        <div className="alert-container">
            <button onClick={() => setOpen((o) => !o)} className="alert-toggle">Toggle alert</button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="alert"
                    >
                        This is an animated alert.
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default DismissableAlert