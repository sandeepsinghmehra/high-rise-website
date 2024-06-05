import { Variants } from "framer-motion"

 
export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 40: direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40: direction === 'right' ? -40 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}
export const fadeInUpAnimation:Variants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 1.5,
            }
        }
}