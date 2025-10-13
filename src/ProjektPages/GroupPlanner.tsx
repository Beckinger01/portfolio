import Group1 from "../assets/GruppenEventPlanerPrev.png";
import Group2 from "../assets/GruppenEventPlanerPrev2.png";
import Group3 from "../assets/GruppenEventPlanerPrev3.png";
import Structure from './Structure'

const GroupPlannerPage = () => {
  return (
    <Structure
      pic1={Group1}
      pic2={Group2}
      pic3={Group3}
      titel="GruppenEventPlaner"
      desc={
        <>
          Der{" "}
          <span className="text-white font-semibold">GruppenEventPlaner</span>{" "}
          ist ein Tool, das es Gruppen erleichtert, gemeinsame Events zu planen.
          Man kann Tage blocken, Nachrichten anpinnen und alle Teilnehmer auf dem
          Laufenden halten.
          <br />
          Das Projekt entstand, weil eine Freundin aus meiner Freundesgruppe mich
          fragte, ob ich so etwas entwickeln könnte, damit die Terminfindung
          einfacher wäre – anstatt alles nur über WhatsApp zu organisieren.
          <br />
          Da es nur für private Zwecke genutzt wird, gibt es keine Registrierung.
          Man wählt aus einem vorhandenen User aus und legt eine PIN fest. Diese
          ist aufgrund des privaten Gebrauchs nicht verschlüsselt.
          <br />
          Die Website kann außerdem als PWA installiert und benutzt werden.
          <br />
          Der Demo-User kann zum Ausprobieren genutzt werden:{" "}
          <span className="text-purple-400 font-medium">PIN: 1234</span>.
        </>
      }
      tech="Next.js, TypeScript, TailwindCSS, Shadcn UI, Postgres (NeonDB)"
      git="https://github.com/Beckinger01/GruppenEventplanerOpen"
      live="https://gruppen-eventplaner-open.vercel.app/"
    />
  )
}

export default GroupPlannerPage
