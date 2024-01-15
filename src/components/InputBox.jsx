import { useId } from "react";

function InputBox({ textInput, onTextInputChange }) {
  const id = useId();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
      />

      <label htmlFor={id} className="sr-only">
        Your message
      </label>
      <textarea
        id={id}
        rows="2"
        className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Your Text goes here..."
        value={textInput}
        onChange={(e) => onTextInputChange && onTextInputChange(e.target.value)}
      ></textarea>
    </>
  );
}

export default InputBox;
