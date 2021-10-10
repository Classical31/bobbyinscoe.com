import { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import Button from "../Button/Button";

import "./FeedTheDuck.css";

const FeedTheDuck = ({ className }) => {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(Math.random() * 550);
  const [y, setY] = useState(Math.random() * 350);
  const [timer, setTimer] = useState("00");
  const [highScores, setHighScores] = useState([]);

  const [coords, setCoords] = useState({
    left: x,
    top: y,
  });

  const Ref = useRef(null);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    return {
      total,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(":" + (seconds > 9 ? seconds : "0" + seconds));
    }
  };

  const clearTimer = (e) => {
    setTimer("10");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  useEffect(() => {
    // clearTimer(getDeadTime());
  }, []);

  const run = () => {
    setX(Math.random() * 550, []);
    setY(Math.random() * 350, []);
    setCoords(
      {
        top: y,
        left: x,
      },
      []
    );

    setCount(count + 1);
  };

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  const ScoreBoard = () => {
    return (
      <div className="scoreboard">
        <h3>Current Score: {count}</h3>
        <h3>Time Left: {timer}</h3>
        <Button onClick={onClickReset}>Restart</Button>
      </div>
    );
  };

  const HighScore = () => {
    return (
      <div className="HighScore">
        <Header style={{ border: "border-bottom: 1px solid var(--primary)" }}>
          High Scores:
        </Header>
        {highScores.map((score) => (
          <div>{score}</div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Header className="Apples">Feed the Duck!</Header>
      <HighScore />
      <ScoreBoard />
      <div className={classNames(className, "FeedTheDuck")}>
        <div
          className="cereal shake"
          style={coords}
          onMouseOver={() => run()}
        />
      </div>
    </div>
  );
};

export default FeedTheDuck;
