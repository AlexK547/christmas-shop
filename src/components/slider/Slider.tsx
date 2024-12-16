import styles from "./styles.module.scss";
import snowmanIMG from "/images/png/snowman.png";
import christmasTreesIMG from "/images/png/christmas-trees.png";
import christmasTreeBallIMG from "/images/png/christmas-tree-ball.png";
import fairytaleHouseIMG from "/images/png/fairytale-house.png";
import { useEffect, useState } from "react";

const Slider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(0);
  const [isSelectBtnLeft, setIsSelectBtnLeft] = useState<boolean>(false);
  const [isSelectBtnRight, setIsSelectBtnRight] = useState<boolean>(true);
  const STEP: number = 540;

  const changePositionLeft: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    if (sliderPosition < 0) {
      setSliderPosition(sliderPosition + STEP);
      setIsSelectBtnRight(true);
    }
  };

  const changePositionRight: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    if (sliderPosition > -1000) {
      setSliderPosition(sliderPosition - STEP);
      setIsSelectBtnLeft(true);
    }
  };

  useEffect(() => {
    if (sliderPosition == 0) {
      setIsSelectBtnLeft(false);
    }
    if (sliderPosition < -1000) {
      setIsSelectBtnRight(false);
    }
  }, [sliderPosition]);

  return (
    <section className={styles["slider-section"]}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.content__title}>
            Стань счастливие в новом 2025 году!
          </h2>
        </div>
        <div className={styles.slider} style={{ left: sliderPosition }}>
          <div className={styles.slider__card}>
            <h3 className={styles["slider__card-text"]}>Живи</h3>
            <img
              src={snowmanIMG}
              alt="snowman"
              className={styles["slider__card-img"]}
            />
          </div>
          <div className={styles.slider__card}>
            <h3 className={styles["slider__card-text"]}>Создавай</h3>
            <img
              src={christmasTreesIMG}
              alt="christmas trees"
              className={styles["slider__card-img"]}
            />
          </div>
          <div className={styles.slider__card}>
            <h3 className={styles["slider__card-text"]}>Люби</h3>
            <img
              src={christmasTreeBallIMG}
              alt="christmas tree ball"
              className={styles["slider__card-img"]}
            />
          </div>
          <div className={styles.slider__card}>
            <h3 className={styles["slider__card-text"]}>Мечтай</h3>
            <img
              src={fairytaleHouseIMG}
              alt="fairytail house"
              className={styles["slider__card-img"]}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            type="button"
            className={
              isSelectBtnLeft
                ? styles.buttons__item + " " + styles.buttons__item_active
                : styles.buttons__item
            }
            onClick={changePositionLeft}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 12H6M6 12L12 6M6 12L12 18"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className={
              isSelectBtnRight
                ? styles.buttons__item + " " + styles.buttons__item_active
                : styles.buttons__item
            }
            onClick={changePositionRight}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;