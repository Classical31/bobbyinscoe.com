import { useState } from "react";
import Button from "../../Button/Button";
import FeedTheDuck from "../../FeedTheDuck/FeedTheDuck";
import "./Home.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="Home">
      <Button onClick={toggleModal}>Click me</Button>
      <FeedTheDuck />
    </div>
  );
};

export default Home;
