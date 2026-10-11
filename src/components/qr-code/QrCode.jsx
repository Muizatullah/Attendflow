import styles from './QrCode.module.css';

// Small deterministic hash so the same session id always renders the same pattern
const seedFromString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const mulberry32 = (seed) => {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const GRID = 9;
const FINDER_SIZE = 3;

const isInFinder = (row, col) => {
  const corners = [
    [0, 0],
    [0, GRID - FINDER_SIZE],
    [GRID - FINDER_SIZE, 0],
  ];
  return corners.some(
    ([r, c]) => row >= r && row < r + FINDER_SIZE && col >= c && col < c + FINDER_SIZE
  );
};

/**
 * Renders a session/course code as a QR-style SVG pattern.
 * Purely decorative for the UI mockup — not a real scannable code.
 */
const QrCode = ({ value = 'ATTENDFLOW', size = 72 }) => {
  const rand = mulberry32(seedFromString(value));
  const cells = [];

  for (let row = 0; row < GRID; row += 1) {
    for (let col = 0; col < GRID; col += 1) {
      if (isInFinder(row, col)) continue;
      if (rand() > 0.52) cells.push([row, col]);
    }
  }

  const cellSize = size / GRID;

  const renderFinder = (row, col) => (
    <g key={`finder-${row}-${col}`}>
      <rect
        x={col * cellSize}
        y={row * cellSize}
        width={cellSize * FINDER_SIZE}
        height={cellSize * FINDER_SIZE}
        rx={2}
        fill="none"
        stroke="currentColor"
        strokeWidth={cellSize * 0.55}
      />
      <rect
        x={col * cellSize + cellSize}
        y={row * cellSize + cellSize}
        width={cellSize}
        height={cellSize}
        fill="currentColor"
      />
    </g>
  );

  return (
    <div className={styles.wrapper} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className={styles.svg}>
        {renderFinder(0, 0)}
        {renderFinder(0, GRID - FINDER_SIZE)}
        {renderFinder(GRID - FINDER_SIZE, 0)}
        {cells.map(([row, col]) => (
          <rect
            key={`${row}-${col}`}
            x={col * cellSize}
            y={row * cellSize}
            width={cellSize * 0.92}
            height={cellSize * 0.92}
            fill="currentColor"
          />
        ))}
      </svg>
    </div>
  );
};

export default QrCode;
