// imports
export default function Meaning({ meaningObj }) {
  let { definitions, partOfSpeech } = meaningObj;
  return (
    <>
      <div>
        <h4>{partOfSpeech}</h4>
        {definitions.map((definition, index) => (
          <div className="subdefinition" key={index}>
            <div>{definition.definition}</div>
            <div>Synonyms {definition.synonyms.join(" ")}</div>
          </div>
        ))}
      </div>
    </>
  );
}
