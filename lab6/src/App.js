import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div id="buttonsAndImages">
        <div id="container">
          <div className="buttons">
            <Button name={"James Harden"} />
            <Button name={"Giannis Antetokounmpo"} />
            <Button name={"Stephen Curry"} />
            <Button name={"Russell Westbrook"} />
            <Button name={"Nikola Jokic"} />
          </div>
          <Star
            image="images/questionMark.png"
            alt="Question Mark"
            id="questionMark"
          />
          <Star image="images/harden.jpg" alt="James Harden" id="JamesHarden" />

          <Star
            image="images/antetokounmpo.png"
            alt="Giannis Antetokounmpo"
            id="GiannisAntetokounmpo"
          />
          <Star
            image="images/curry.png"
            alt="Stephen Curry"
            id="StephenCurry"
          />
          <Star
            image="images/westbrook.png"
            alt="Russell Westbrook"
            id="RussellWestbrook"
          />
          <Star image="images/jokic.png" alt="Nikola Jokic" id="NikolaJokic" />
        </div>
      </div>
    </div>
  );
}

function Button({ name }) {
  const nameWithoutSpace = name.replaceAll(" ", "");
  const handleClick = (event) => {
    if (event.target.tagName === "BUTTON") {
      console.log(nameWithoutSpace);
      const NBAstars = document.querySelectorAll(".nbaStar");
      NBAstars.forEach((star) => {
        star.style.display = "none";
      });
      const selectedNBAstar = document.getElementById(nameWithoutSpace);
      selectedNBAstar.style.display = "block";
    }
  };

  const handleBlur = (event) => {
    if (event.target.tagName === "BUTTON") {
      const NBAstars = document.querySelectorAll(".nbaStar");
      NBAstars.forEach((star) => {
        star.style.display = "none";
      });
      const questionMark = document.getElementById("questionMark");
      questionMark.style.display = "block";
    }
  };
  return (
    <div onClick={handleClick} onBlur={handleBlur}>
      <button>{name}</button>
    </div>
  );
}

function Header() {
  return (
    <>
      <h1>Welcome to my CSCI 3172 Lab6</h1>
      <h2>You can see many NBA Stars by clicking the buttons!</h2>
    </>
  );
}

function Star({ image, alt, id }) {
  return (
    <>
      <img src={image} alt={alt} id={id} className="nbaStar"></img>
    </>
  );
}

export default App;
