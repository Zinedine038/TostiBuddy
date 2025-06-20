import { useTostiStore } from "../store/useTostiStore";

export function Eatslider({ index }) {
    const { tostiList, updateTosti } = useTostiStore();
    const value = tostiList[index]?.slider ?? 2;
  return (
    <>
        <p className="mb-2">Hoeveel Tosti's?</p>
        <div className="w-full max-w-xs mb-6">
        <input
            type="range"
            min={1}
            max="5"
            step="1"
            value={value}
            onChange={(e) => updateTosti(index, 'slider', Number(e.target.value))}
            className="range"
        />
        <div className="flex justify-between px-2.5 mt-2 text-xs">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
        </div>
        <div className="flex justify-between px-2.5 mt-2 text-xs">
            <span>🤡</span>
            <span>🤏</span>
            <span>👍</span>
            <span>👏</span>
            <span>🗿</span>
        </div>
        <div className="flex justify-between px-2.5 mt-2 text-xs">
            <span>(1)</span>
            <span>(2)</span>
            <span>(3)</span>
            <span>(4)</span>
            <span>(5)</span>
        </div>
        </div>
    </>
  );
}
