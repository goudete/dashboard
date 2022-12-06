import React from 'react';
import styles from "./about.module.scss";

function About() {
    return <div className={styles.canvasHolder}>
            <div className={styles.uiHolder}>
                <div className={styles.textSection}>
                    <h1 className={"animate__animated animate__fadeInUp"}>
                        About Us
                    </h1>
                    <p className={"animate__animated animate__fadeInUp"}>
                        SendVaro exists to help you send and receive money between your
                        family and friends regardless of where you live.
                    </p>
                    <p className={"animate__animated animate__fadeInUp"}>
                        Current products are time-consuming, frustrating and expensive
                        because they are built on top of fragmented international payment 
                        rails. SendVaro is not the current rails with a shiny new paint 
                        job, it is the next generation of digital payments.
                    </p>
                    <p className={"animate__animated animate__fadeInUp"}>
                        When I moved from Mexico City to Los Angeles for university
                        this problem caused me many headaches. I tried everything,
                        but nothing worked the way I needed it to.
                    </p>
                    <p className={"animate__animated animate__fadeInUp"}>
                        High transaction fees, lack of transparency, and time delays
                        meant a guaranteed headache anytime I had to deal with cross
                        boarder payments between my family and friends in Mexico.
                    </p>
                    <p className={"animate__animated animate__fadeInUp"}>
                        SendVaro is the friends and family borderless payment
                        system that works with you, not against you.
                    </p>
                </div>
            </div>
        </div>

}

export default About;