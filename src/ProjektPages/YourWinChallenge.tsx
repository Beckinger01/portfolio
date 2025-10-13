import Win1 from "../assets/YourWinChallengePrev.png"
import Win2 from "../assets/Win2.png"
import Win3 from "../assets/Win3.png"
import Structure from './Structure'

const YourWinChallengePage = () => {
  return (
    <Structure
      pic1={Win1}
      pic2={Win2}
      pic3={Win3}
      titel="YourWinChallenge"
      desc={
        <>
          <span className="text-white font-semibold">YourWinChallenge</span> ist mein erstes größeres Projekt. Man kann hier Challenges erstellen oder anderen live zuschauen. Die Seite ist öffentlich und im Großen und Ganzen bereits funktionsfähig. Es fehlen noch einige Bugfixes, aber die grundlegende Funktionalität ist gegeben.
          Sobald alle Bugs behoben sind, sollen weitere Spielmodi hinzukommen.
          Vom Code her ist die Umsetzung nicht besonders sauber oder optimal, aber ich bin trotzdem sehr stolz darauf, was ich trotz meiner damals noch begrenzten Kenntnisse bereits geschafft habe.
        </>
      }
      tech="React, JavaScript, TailwindCSS, MongoDB"
      git="https://github.com/Beckinger01/win-challenge"
      live="https://www.yourwinchallenge.com/"
    />
  )
}

export default YourWinChallengePage

