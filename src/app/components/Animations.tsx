'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const FadeIn = ({
    children,
    delay = 0,
    className = "",
    style,
    direction = "up"
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    style?: React.CSSProperties;
    direction?: "up" | "down" | "left" | "right" | "none";
}) => {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export const AnimatedNumber = ({
    value,
    prefix = "",
    suffix = "",
    className = ""
}: {
    value: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    const springValue = useSpring(0, {
        bounce: 0,
        duration: 2000,
    });

    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, springValue, value]);

    const display = useTransform(springValue, (current) => {
        return `${prefix}${Math.floor(current)}${suffix}`;
    });

    return <motion.span ref={ref} className={className}>{display}</motion.span>;
};
