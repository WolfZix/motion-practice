import { motion } from "motion/react";
import { useState } from "react";

function CollapsibleList() {
    const [expanded, setExpanded] = useState(null);
    const items = [1, 2, 3];

    return (
        <div className="list">
            {items.map((id) => (
                <motion.div
                    key={id}
                    layout
                    onClick={() =>
                        setExpanded((prev) => (prev === id ? null : id))
                    }
                    className="list-item"
                >
                    <h3>Item {id}</h3>

                    {expanded === id && (
                        <motion.p>
                            This section expands and contracts with a layout property
                        </motion.p>
                    )}
                </motion.div>
            ))}
        </div>
    );
}

export default CollapsibleList;