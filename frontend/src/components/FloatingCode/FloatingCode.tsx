import './FloatingCode.css';

const fragments = [
  // .NET — roxo
  { text: 'using', top: '4%', left: '2%', size: '0.85rem', dur: 14, delay: 0, dir: 'right', glow: 'purple' },
  { text: 'namespace', top: '9%', left: '22%', size: '0.8rem', dur: 18, delay: 2, dir: 'left', glow: 'purple' },
  { text: 'class', top: '14%', left: '42%', size: '1rem', dur: 12, delay: 5, dir: 'right', glow: 'purple' },
  { text: 'interface', top: '20%', left: '62%', size: '0.8rem', dur: 20, delay: 1, dir: 'left', glow: 'purple' },
  { text: 'Task<T>', top: '26%', left: '80%', size: '0.9rem', dur: 16, delay: 7, dir: 'right', glow: 'purple' },
  { text: 'async', top: '33%', left: '8%', size: '0.85rem', dur: 15, delay: 3, dir: 'left', glow: 'purple' },
  { text: 'await', top: '40%', left: '30%', size: '0.85rem', dur: 19, delay: 9, dir: 'right', glow: 'purple' },
  { text: 'IActionResult', top: '47%', left: '55%', size: '0.75rem', dur: 22, delay: 4, dir: 'left', glow: 'purple' },
  { text: '[Route]', top: '54%', left: '75%', size: '0.8rem', dur: 13, delay: 6, dir: 'right', glow: 'purple' },
  { text: '[HttpGet]', top: '60%', left: '5%', size: '0.8rem', dur: 17, delay: 11, dir: 'left', glow: 'purple' },
  { text: '*.cs', top: '66%', left: '88%', size: '1rem', dur: 14, delay: 2, dir: 'right', glow: 'purple' },
  { text: '.NET', top: '72%', left: '20%', size: '1.1rem', dur: 21, delay: 8, dir: 'left', glow: 'purple' },
  { text: 'C#', top: '78%', left: '48%', size: '1.2rem', dur: 11, delay: 0, dir: 'right', glow: 'purple' },
  { text: 'var', top: '84%', left: '68%', size: '0.9rem', dur: 16, delay: 5, dir: 'left', glow: 'purple' },
  { text: '#', top: '90%', left: '3%', size: '1.5rem', dur: 13, delay: 10, dir: 'right', glow: 'purple' },
  { text: 'IEnumerable', top: '95%', left: '82%', size: '0.75rem', dur: 23, delay: 3, dir: 'left', glow: 'purple' },
  { text: 'DbContext', top: '7%', left: '93%', size: '0.8rem', dur: 18, delay: 7, dir: 'right', glow: 'purple' },
  { text: '[Authorize]', top: '37%', left: '93%', size: '0.75rem', dur: 15, delay: 1, dir: 'left', glow: 'purple' },
  { text: 'return', top: '57%', left: '38%', size: '0.85rem', dur: 20, delay: 9, dir: 'right', glow: 'purple' },
  { text: 'void', top: '80%', left: '13%', size: '0.9rem', dur: 12, delay: 4, dir: 'left', glow: 'purple' },

  // React — azul
  { text: 'useState', top: '2%', left: '12%', size: '0.85rem', dur: 17, delay: 6, dir: 'left', glow: 'blue' },
  { text: 'useEffect', top: '7%', left: '50%', size: '0.8rem', dur: 21, delay: 3, dir: 'right', glow: 'blue' },
  { text: 'useRef', top: '12%', left: '70%', size: '0.85rem', dur: 14, delay: 8, dir: 'left', glow: 'blue' },
  { text: 'useCallback', top: '18%', left: '35%', size: '0.75rem', dur: 19, delay: 1, dir: 'right', glow: 'blue' },
  { text: 'useMemo', top: '24%', left: '55%', size: '0.8rem', dur: 16, delay: 5, dir: 'left', glow: 'blue' },
  { text: 'JSX', top: '30%', left: '17%', size: '1rem', dur: 12, delay: 0, dir: 'right', glow: 'blue' },
  { text: 'props', top: '36%', left: '72%', size: '0.9rem', dur: 22, delay: 7, dir: 'left', glow: 'blue' },
  { text: '<></>', top: '43%', left: '45%', size: '1rem', dur: 15, delay: 2, dir: 'right', glow: 'blue' },
  { text: '</>', top: '50%', left: '90%', size: '1.3rem', dur: 13, delay: 10, dir: 'left', glow: 'blue' },
  { text: '{}', top: '56%', left: '15%', size: '1.2rem', dur: 18, delay: 4, dir: 'right', glow: 'blue' },
  { text: '=>', top: '63%', left: '60%', size: '1.3rem', dur: 11, delay: 6, dir: 'left', glow: 'blue' },
  { text: 'import', top: '69%', left: '35%', size: '0.85rem', dur: 20, delay: 9, dir: 'right', glow: 'blue' },
  { text: 'export', top: '75%', left: '78%', size: '0.85rem', dur: 16, delay: 3, dir: 'left', glow: 'blue' },
  { text: 'const', top: '81%', left: '55%', size: '0.9rem', dur: 14, delay: 1, dir: 'right', glow: 'blue' },
  { text: 'React', top: '87%', left: '28%', size: '1.1rem', dur: 19, delay: 5, dir: 'left', glow: 'blue' },
  { text: 'component', top: '92%', left: '65%', size: '0.8rem', dur: 23, delay: 8, dir: 'right', glow: 'blue' },
  { text: 'render', top: '97%', left: '10%', size: '0.85rem', dur: 15, delay: 2, dir: 'left', glow: 'blue' },
  { text: 'memo', top: '11%', left: '5%', size: '0.9rem', dur: 17, delay: 11, dir: 'right', glow: 'blue' },
  { text: 'context', top: '22%', left: '95%', size: '0.8rem', dur: 20, delay: 0, dir: 'left', glow: 'blue' },
  { text: 'lazy', top: '70%', left: '50%', size: '0.85rem', dur: 13, delay: 7, dir: 'right', glow: 'blue' },
];

const stripes = [
  { top: '10%', width: '40vw', dur: 30, delay: 0 },
  { top: '32%', width: '50vw', dur: 38, delay: 14 },
  { top: '55%', width: '35vw', dur: 25, delay: 7 },
  { top: '72%', width: '48vw', dur: 34, delay: 21 },
  { top: '88%', width: '30vw', dur: 28, delay: 4 },
];

const FloatingCode = () => (
  <div className="floating-code" aria-hidden="true">
    {stripes.map((s, i) => (
      <div
        key={`stripe-${i}`}
        className="purple-stripe"
        style={{
          top: s.top,
          width: s.width,
          animationDuration: `${s.dur}s`,
          animationDelay: `${s.delay}s`,
        }}
      />
    ))}
    {fragments.map((f, i) => (
      <span
        key={i}
        className={`floating-fragment float-${f.dir} glow-${f.glow}`}
        style={{
          top: f.top,
          left: f.left,
          fontSize: f.size,
          animationDuration: `${f.dur}s`,
          animationDelay: `${f.delay}s`,
        }}
      >
        {f.text}
      </span>
    ))}
  </div>
);

export default FloatingCode;
