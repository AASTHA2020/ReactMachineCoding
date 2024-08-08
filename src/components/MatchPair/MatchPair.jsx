import React, { useState } from 'react';
import styles from './matchPair.module.css';

const MatchPair = () => {
  const items = ['🍎', '🍌', '🍇', '🍎', '🍌', '🍇'];
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);

  const handleSelect = (item, index) => {
    if (selected.length === 2) return;

    setSelected([...selected, { item, index }]);

    if (selected.length === 1 && selected[0].item === item && selected[0].index !== index) {
      setMatched([...matched, item]);
    }
  };

  return (
    <div className={styles.matchPair}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.item}
          onClick={() => handleSelect(item, index)}
          style={{
            backgroundColor: matched.includes(item) ? 'lightgreen' : 'white',
          }}
        >
          {selected.some((el) => el.index === index) || matched.includes(item) ? item : '?'}
        </div>
      ))}
    </div>
  );
};

export default MatchPair;
