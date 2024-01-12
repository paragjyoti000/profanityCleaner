import { useState, useEffect } from "react";
import axios from "axios";

export default function useProfanityCleaner(textInput) {
  const options = {
    method: "POST",
    url: import.meta.env.VITE_RAPID_API_URL,
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
    },
    data: {
      text: textInput
        ? textInput.toLowerCase()
        : "What is this shit. You have to do better than that.",
      maskCharacter: "@",
      language: "en",
    },
  };

  const [data, setData] = useState({});

  useEffect(() => {
    try {
      axios.request(options).then((res) => setData(res.data));
    } catch (error) {
      console.error(error);
    }
  }, [textInput]);

  return data;
}
