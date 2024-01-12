import { useEffect, useState } from "react";
import { InputBox, Paragraph, ButtonComp, Profanities } from "./components";
import useProfanityCleaner from "./hooks/useProfanityCleaner";

function App() {
  const [input, setInput] = useState(
    "What is this shit. You have to do better than that."
  );
  const [clean, setClean] = useState("");
  const [profs, setProfs] = useState([]);

  const profanityCleaner = useProfanityCleaner(input);

  useEffect(() => {
    setClean(profanityCleaner.clean);
    setProfs(profanityCleaner.profanities);
  }, [profanityCleaner]);

  const output = () => {
    setClean(profanityCleaner.clean);
    setProfs(profanityCleaner.profanities);
  };

  return (
    <>
      <div className="my-5 w-full h-screen">
        <div className="max-w-4xl mx-auto h-1/5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              output();
            }}
          >
            <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
              <InputBox onTextInputChange={(a) => setInput(a)} />
              <ButtonComp />
            </div>
          </form>
        </div>
        <div className="grid grid-cols-3 justify-items-center h-4/5 p-10">
          <Paragraph heading="Your Input Text" textData={input} />
          <Paragraph heading="Cleaned Text" textData={clean} />
          <Profanities heading="Profanities" profArr={profs} />
        </div>
        <p className="mt-5">
          <a
            className="text-blue-600 hover:underline"
            href="#"
            target="_blank"
          ></a>
        </p>
      </div>
    </>
  );
}

export default App;
