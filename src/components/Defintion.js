import Meaning from "./Meaning";

// imports
export default function Definition({ definitionObj }) {
  let { word, phonetic, meanings, origin } = definitionObj;
  return (
    <article className="definition-card">
      <h2>{word}</h2>
      <div>Pron. "{phonetic}"</div>
      {origin ? <p>from {origin}</p> : <></>}
      {meanings.map((meaningObj, index) => (
        <Meaning key={index} meaningObj={meaningObj} />
      ))}
    </article>
  );
}
