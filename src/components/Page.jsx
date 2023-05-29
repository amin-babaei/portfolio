import { motion } from "framer-motion";

const boxVariant = {
    visible: { x: 0 },
    hidden: { x: 100, transition: { ease: "easeInOut", duration: 1.5} },
}
const Page = (props) => {
    const { children, pageNumber, index, helmetTitle } = props;

    return (
        <div>
            {pageNumber === index && (
                <div style={{ minHeight: "100vh", overflow: "hidden" }}>
                    <motion.div
                        variants={boxVariant}
                        initial="hidden"
                        animate="visible"
                        className="box"
                    >
                        {children}
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Page;