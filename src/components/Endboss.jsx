import { Eatslider } from "./EatSlider";
import { useTostiStore } from "../store/useTostiStore";

export function Endboss({ index }) {
  const { tostiList, updateTosti, removeTosti } = useTostiStore();
  const tosti = tostiList[index];

  if (!tosti) return null;

  return (
    <div className="flex">
      <div className="flex items-center justify-center gap-6 w-2/10 mt-2 p-5" />
      <div className="flex items-center justify-center gap-6 w-6/10 mt-2 p-5 glass">
        {/* Name */}
        <label className="flex items-center gap-2 bg-base-300 px-4 py-2 rounded-lg">
          <span className="text-white font-semibold">Naam</span>
          <input
            type="text"
            value={tosti.name}
            onChange={(e) => updateTosti(index, 'name', e.target.value)}
            className="input input-sm w-32 h-16"
            placeholder="Henry punt"
          />
        </label>

        {/* Slider */}
        <div className="flex flex-col items-center">
          <Eatslider index={index} />
        </div>

        {/* Checkboxes */}
        {['ham', 'ketchup', 'curry'].map((key) => (
          <div key={key}>
            <p className="text-white font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}?</p>
            <input
              type="checkbox"
              className="checkbox"
              checked={tosti[key]}
              onChange={(e) => updateTosti(index, key, e.target.checked)}
            />
          </div>
        ))}
        <button
            onClick={() => removeTosti(index)}
            className="btn btn-sm btn-error absolute top-2 right-2"
            >Delete
        </button>
      </div>
    </div>
  );
}
