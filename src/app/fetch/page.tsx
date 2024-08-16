"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Axios from "axios";
import styles from "../styles/fetch.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

interface PredictResult {
  name: string;
  age: number;
  count: number;
}
const Page = () => {
  const [catFact, setCatFact] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [predictResult, setPredictResult] = useState<PredictResult | null>(
    null
  );
  const [loadingFact, setLoadingFact] = useState<boolean>(false);
  const [loadingAge, setLoadingAge] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [color, setColor] = useState<string>("#333");

  useEffect(() => {
    fetchFact();
  }, []);
  const fetchFact = () => {
    setLoadingFact(true);
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        setCatFact(res.data.fact);
        setError(null);
      })
      .catch((err) => {
        setError("Failed to fetch cat fact.");
      })
      .finally(() => {
        setLoadingFact(false);
      });
  };

  const fetchAge = () => {
    if (name.trim() === "") {
      setError("Please enter a name.");
      return;
    }
    setLoadingAge(true);
    Axios.get<PredictResult>(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        setPredictResult(res.data);
        setColor(generateRandomColor());
        setError(null);
      })
      .catch((err) => {
        setError("Failed to predict age.");
      })
      .finally(() => {
        setLoadingAge(false);
      });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const generateRandomColor = (event : ChangeEvent<HTMLInputElement>) => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <button
          className={styles.fetchCatBtn}
          onClick={fetchFact}
          disabled={loadingFact}
        >
          {loadingFact ? "loading..." : "Fetch Cat Fact"}
        </button>
        {error && <p className={styles.error}>{error}</p>}
        <p className={styles.catFact}>{catFact}</p>
        <div className={styles.nameResult}>
          <input
            className={styles.inputAge}
            type="text"
            placeholder="Name..."
            onChange={handleInputChange}
            value={name}
          />
          <button
            className={styles.btnAge}
            onClick={fetchAge}
            disabled={loadingAge}
          >
            {loadingAge ? "loading..." : "Predict Age"}
          </button>
          {predictResult && (
            <h1 className={styles.ageTitle} style={{color: color}}>
              {predictResult?.name} is {predictResult?.age} years old
            </h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
