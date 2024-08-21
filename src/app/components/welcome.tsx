"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import styles from "../styles/welcome.module.css";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const onHideWelcome = () => {
    setShowWelcome(false);
  };
  return (
    <React.Fragment>
      {showWelcome && (
        <div className={styles.container}>
          <div className={styles.welcome}>
            <X
              role="button"
              tabIndex={0}
              aria-label="Close welcome message"
              style={{ float: "right", margin: "5px", cursor: "pointer" }}
              onClick={onHideWelcome}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === "") {
                  onHideWelcome();
                }
              }}
            />
            <div className={styles.welcomeSection}>Welcome</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Welcome;
