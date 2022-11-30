import './title.css';

function Title(){
  let text = "Monster Basket"

  function createHeader(word){
    const myString = [];
    for (let i = 0; i < word.length; i++) {
      if(word[i] == " ") myString[i] = " "
      else myString[i] = <div key={`titleLetter${i}`} className="letterHolder"
        style={{top: Math.abs(word.length / 2 - i - 1) * Math.abs(word.length / 2 - i - 1),
                transform: `rotate(${(word.length / 2 - i - 1) * -0.01}turn)`}}>
        <span className="bouncyLetter spin">{word[i]}</span>
      </div>
    }
    return myString;
  }

  return <h1>
    {createHeader(text)}
    </h1>
}

export default Title;