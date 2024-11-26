import { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import { CARD_ITEMS } from "./consts/cardItems";

function App() {
  // 배열을 섞고 16개를 선택
  const getRandomItems = (array, count) => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const [randomItems, setRandomItems] = useState(() =>
    getRandomItems(CARD_ITEMS, 16)
  );
  const [flippedStates, setFlippedStates] = useState(
    Array(randomItems.length).fill(false)
  );

  // 카드 상태 초기화
  const resetCards = () => {
    const newRandomItems = getRandomItems(CARD_ITEMS, 16);
    setRandomItems(newRandomItems);
    setFlippedStates(Array(randomItems.length).fill(false));
  };

  return (
    <div className="root">
      <div className="grid">
        {randomItems.map((text, index) => (
          <Card
            key={index}
            text={text}
            isFlipped={flippedStates[index]}
            onFlip={() => {
              // 카드 상태 토글
              const newFlippedStates = [...flippedStates];
              newFlippedStates[index] = !newFlippedStates[index];
              setFlippedStates(newFlippedStates);
            }}
          />
        ))}
      </div>

      <button onClick={resetCards} className="reset-button">
        🔄
      </button>
    </div>
  );
}

export default App;
