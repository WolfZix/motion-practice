import { motion } from "motion/react";

function DraggableCard() {

    return (
        <div>
            <motion.div className="card"
                drag
                dragConstraints={{ left: -130, right: 130, top: -40, bottom: 40 }}
                dragElastic={0.2}
            >
                Drag me!
            </motion.div>
        </div>
    )
}

export default DraggableCard