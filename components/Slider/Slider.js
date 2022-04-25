import { useCallback, useRef, useEffect, useState, useMemo } from "react";
import cn from "classnames";

import { useDrag } from "hooks/useDrag";
import Slide from "./components/Slide";

import styles from "./Slider.module.scss";

const Slider = ({ slidesData }) => {
  const slidesRef = useRef();
  const [slidesInfo, setSlidesInfo] = useState({});
  const [sliderPosition, setSliderPosition] = useState(0);
  const activeItemIndex = useMemo(() => {
    const { slideWidth = 1 } = slidesInfo;

    return Math.round(Math.abs(sliderPosition) / slideWidth + 0.3);
  }, [slidesInfo, sliderPosition, slidesData]);

  const activeItemId = useMemo(
    () => slidesData[activeItemIndex].id,
    [activeItemIndex]
  );

  const coverLogoSrc = useMemo(() => {
    if (activeItemIndex === 0) {
      return "/drag-to-discover.svg";
    } else if (activeItemIndex % 2 === 0) {
      return "/infinity.svg";
    } else {
      return "/circle.svg";
    }
  }, [activeItemIndex]);

  const swipePrev = useCallback(() => {
    const { slideWidth } = slidesInfo;
    const nextPosition = sliderPosition + slideWidth;

    if (sliderPosition < 0) {
      setSliderPosition(nextPosition);
    }
  }, [slidesInfo, sliderPosition]);

  const swipeNext = useCallback(() => {
    const { slideWidth, slidesCount } = slidesInfo;
    const nextPosition = sliderPosition - slideWidth;

    if (Math.abs(nextPosition) <= (slidesCount - 1) * slideWidth) {
      setSliderPosition(nextPosition);
    }
  }, [slidesInfo, sliderPosition]);

  const onSlideClick = useCallback(
    (clickedId) => {
      const clickedIndex = slidesData.findIndex(({ id }) => id === clickedId);
      const activeIndex = slidesData.findIndex(({ id }) => id === activeItemId);

      if (clickedIndex > activeIndex) {
        swipeNext();
      } else if (clickedIndex < activeIndex) {
        swipePrev();
      }
    },
    [activeItemId, slidesData, swipePrev, swipeNext]
  );

  const move = useCallback(
    (diff) => (prevPosition) => {
      const { slideWidth, slidesCount, sliderWidth } = slidesInfo;
      const offsetPesantage = (diff / (sliderWidth / 100)) * 0.01;

      const stepWidth = offsetPesantage * sliderWidth;
      const nextPos = prevPosition + stepWidth;

      const bottomBound = slideWidth * (slidesCount - 1);
      const upperBound = 0;

      if (nextPos <= upperBound && nextPos >= bottomBound * -1) {
        return nextPos;
      } else {
        return prevPosition;
      }
    },
    [slidesInfo]
  );

  const onMove = useCallback(
    (prevPosition, currentPostion) => {
      const diff = currentPostion - prevPosition;

      setSliderPosition(move(diff));
    },
    [move]
  );

  const onMoveEnd = useCallback(() => {
    const { slideWidth } = slidesInfo;

    setSliderPosition((currentPostion) => {
      const offsetLength = Math.round(currentPostion / slideWidth);
      const nextPosition = offsetLength < 0 ? offsetLength * slideWidth : 0;

      return nextPosition;
    });
  }, [slidesInfo]);

  useEffect(() => {
    const slidesElements = slidesRef.current;
    const sliderWidth = slidesElements.parentElement.offsetWidth;
    const slidesEls = slidesElements.childNodes;
    const slidesCount = slidesEls.length;
    const [firstSlide] = slidesEls;

    setSlidesInfo({
      slideWidth: firstSlide.offsetWidth,
      slidesCount,
      sliderWidth,
    });
  }, []);

  useDrag({
    conatinerRef: slidesRef,
    onMove,
    onEnd: onMoveEnd,
  });

  return (
    <div
      className={cn(styles.container, {
        [styles.containerWhite]: activeItemIndex % 4 === 0,
        [styles.containerGrey]: activeItemIndex % 4 === 1,
        [styles.containerOrange]: activeItemIndex % 4 === 2,
        [styles.containerBlack]: activeItemIndex % 4 === 3,
      })}
    >
      <div className={styles.slidesWrapper}>
        <div
          className={styles.slides}
          ref={slidesRef}
          style={{ left: `${sliderPosition}px` }}
        >
          {slidesData.map(({ id, component, props }) => (
            <Slide
              key={id}
              component={component}
              props={props}
              isActive={activeItemId === id}
              id={id}
              onClick={onSlideClick}
            />
          ))}
        </div>
      </div>

      <img
        className={cn(styles.coverLogo, {
          [styles.firstCoverLogo]: activeItemIndex === 0,
        })}
        src={coverLogoSrc}
      />

      {activeItemIndex > 0 && <div className={styles.swipeArea} />}

      <button
        className={cn(styles.swipePrevButton, {
          [styles.swipePrevButtonVisible]: activeItemIndex > 0,
        })}
        onClick={swipePrev}
      >
        &#8592;&nbsp;Previous
      </button>
    </div>
  );
};

export default Slider;
