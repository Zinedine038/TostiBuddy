import { Link } from "react-router-dom";
import { Endboss } from "../components/Endboss";
import { useTostiStore } from '../store/useTostiStore';

export function Tosti() {
  const { tostiList, addTosti } = useTostiStore();

  return (
    <>
      <h1 className="text-2xl font-bold mt-5">Wie eet mee?</h1>
      <div>
        {tostiList.map((_, i) => (
          <Endboss key={i} index={i} />
        ))}

        <button
          onClick={addTosti}
          className="btn btn-primary mt-2"
        >
          Bunkeraar toevoegen
        </button>
      </div>
        <Link to="/Result">
            <button
            onClick={() => console.log("State:", tostiList)}
            className="btn btn-secondary mt-20 h-15 text-3xl"
            >
            Bereken boodschappenlijstje!
            </button>
        </Link>
    </>
  );
}
