import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("# heading one");
  return (
    <main>
      <div className="container">
        <section className="markdown">
          <h2 className="heading">Markdown :</h2>
          <textarea
            className="textarea"
            onChange={(e) => setMarkdown(e.target.value)}
            value={markdown}
          ></textarea>
        </section>
        <section className="results">
          <h2 className="heading">Results :</h2>
          <div className="results-box">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
