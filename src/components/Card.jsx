import { useState } from "react";
import "./Card.css";

const emojis = ["😀", "🎉", "🚀", "🐱", "🍕", "🌟", "🏆", "🎵", "⚡", "🔥"]; // 이모티콘 배열

const Card = ({ text, isFlipped, onFlip }) => {
  const [randomEmoji] = useState(() => {
    // 카드가 처음 렌더링될 때 랜덤으로 이모티콘 선택
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  });

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={onFlip}>
      {/* 카드 앞면 */}
      <div className="front">
        <span className="emoji">{randomEmoji}</span>
      </div>

      {/* 카드 뒷면 */}
      <div className="back">{isFlipped && text}</div>
    </div>
  );
};

export default Card;
