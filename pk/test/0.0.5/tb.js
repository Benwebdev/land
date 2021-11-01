import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Hero = class extends React.Component {
  render() {
    return (
      <section className="home-hero">
        <InView threshold={0.2}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, transform: "translate(-50px)" }}
              animate={
                inView
                  ? { opacity: 1, transform: "translate(0px)" }
                  : { opacity: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 3,
                delay: 0.25,
              }}
            >
              <h1
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="4"
                data-scroll-position="top"
                data-scroll-delay="0.2"
              >
                User experience &{" "}
                <span className="thick">
                <span className="highlight">creative specialist</span>
                </span>
                *
              </h1>
            </motion.div>
          )}
        </InView>
        <InView threshold={0.2}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, transform: "translate(-50px)" }}
              animate={
                inView
                  ? { opacity: 1, transform: "translate(0px)" }
                  : { opacity: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 3,
                delay: 0.5,
              }}
            >
              <h2
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="2"
                data-scroll-position="top"
                data-scroll-delay="0.2"
              >
              *Helping you connect with{" "}
              <span className="highlight thick">
                <div class="word w1">Problem Solvers</div>
                <div class="word w2">Innovative Thinkers</div>
                <div class="word w3">Digital Mavericks</div>
                <div class="word w4">Creative Visionaries</div>
                <div class="word w5">Experience Experts</div>
              </span>
              </h2>
            </motion.div>
          )}
        </InView>
      </section>
    );
  }
};

export const heroLog = (m) => {
    consle.log(m)
}

export default Hero;
