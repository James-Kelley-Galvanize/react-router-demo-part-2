import { useEffect, useState } from "react";
import { useNavigate, Route, Routes, useParams } from "react-router-dom";
import Definition from "./Defintion";

// imports
export default function Word({ wordData, fetchWord, goHome }) {
  const params = useParams();
  const navigate = useNavigate();

  let [selectedDefinitionIndex, setSelectedDefinitionIndex] = useState(0);
  useEffect(() => {
    if (!wordData.length) fetchWord(params.word);
  });
  return (
    <>
      <nav>
        <button onClick={goHome}>NEW SEARCH</button>
        <br />
        {wordData.map((entry, index) => (
          <button
            key={index}
            onClick={(event) => {
              setSelectedDefinitionIndex(index);
              navigate("" + index);
            }}
          >
            {index}
          </button>
        ))}
      </nav>

      <h1>{params.word}</h1>
      <Routes>
        <Route
          index
          element={
            <Definition
              key={
                wordData[selectedDefinitionIndex].word + selectedDefinitionIndex
              }
              definitionObj={wordData[selectedDefinitionIndex]}
            />
          }
        />
        {wordData.length ? (
          <Route
            path={":id"}
            element={
              <Definition
                key={
                  wordData[selectedDefinitionIndex].word +
                  selectedDefinitionIndex
                }
                definitionObj={wordData[selectedDefinitionIndex]}
              />
            }
          />
        ) : (
          <></>
        )}
      </Routes>
    </>
  );
}
