// imports
import getFuzzyImage from "../assets/get-fuzzy.gif";
import { Link, useNavigate } from "react-router-dom";

export default function Main({ handleSearchSubmit, handleSearchChange }) {
  // const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <form
          onSubmit={(event) => {
            handleSearchSubmit(event);
          }}
        >
          <input type="text" onChange={handleSearchChange} />
          <input type="submit" hidden />
          <button type="submit">ETYMOLOGIZE!!!</button>
        </form>
        <br />
        <img
          src={getFuzzyImage}
          alt="a comic in which a cat discusses what makes a verb"
        />
      </div>
    </>
  );
}
