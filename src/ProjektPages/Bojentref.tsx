import Structure from './Structure'
import Boje1 from "../assets/Boje1.png"
import Boje2 from "../assets/Boje2.png"
import Boje3 from "../assets/Boje3.png"

const Bojentref = () => {
  return (
    <Structure
      pic1={Boje1}
      pic2={Boje2}
      pic3={Boje3}
      titel="SpVgg Bojentref"
      desc={
        <>
          Die <span className="text-white font-semibold">SpVgg Bojentref</span> Vereinswebsite ist eine kleine Projektseite für unseren fiktiven Verein.
          Ich habe die Seite erstellt, um eine einfache Übersicht über den Verein, Sparten und Mitgliedern zu ermöglichen. Die Vereinsseite ist angeleht an die des VFL Bochum.
          Das Projekt war eine gute Gelegenheit, React das aller erste mal praktisch anzuwenden und erste Erfahrungen mit Layout und responsive Design zu sammeln.
          Der Code wurde nun überarbeitet und sieht nun deutlich ansprechender aus als noch vor einem Jahr.
        </>
      }
      tech="React, JavaScript"
      git="https://github.com/Beckinger01/SpVggBojentref"
      live="https://sp-vgg-bojentref.vercel.app/"
    />
  )
}

export default Bojentref