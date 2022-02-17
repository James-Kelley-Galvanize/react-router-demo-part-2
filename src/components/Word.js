import { useEffect } from "react";
import { useParams } from "react-router-dom";

// imports
export default function Word({ wordData, fetchWord }) {
  const params = useParams();
  useEffect(() => {
    fetchWord(params.word);
  });

  return (
    <>
      <h1>{params.word}</h1>
      <div>{JSON.stringify(wordData)}</div>
    </>
  );
}
