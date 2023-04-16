import "./styles.css";

const matrix = [
  [{ letter: "a" }, { letter: "b" }, { letter: "c" }],
  [{ letter: "e" }, { letter: "f" }, { letter: "g" }],
  [{ letter: "h" }, { letter: "i" }, { letter: "j" }]
];

export default function App() {
  console.log("app");
  return (
    <div className="App">
      {matrix.map((row, index) => (
        <div key={`index-${index}`} className="row">
          {matrix[index].map((ele) => (
            <span key={ele.letter}>{ele.letter}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
