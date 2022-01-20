import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.scss";
import cn from "classnames";
import StarIcon from "./Star.svg";
import { useState, useEffect, KeyboardEvent } from "react";

export const Rating = ({
  isEditable = false,
  setRating,
  rating,
  ...props
}: RatingProps): JSX.Element => {

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  
  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
        />
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };
  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != "Space" || !setRating) {
      return;
    } else {
      setRating(i);
    }
  };
  return (
    <div className='ratingBlock' {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
