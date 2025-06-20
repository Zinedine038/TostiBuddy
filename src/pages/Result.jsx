import { useStorageStore } from "../store/useStorageStore";
import { useTostiStore } from "../store/useTostiStore";

export function Result() {

    const { tostiList } = useTostiStore();
    const {
        bread,
        cheese,
        ham,
        ketchup,
        curry,
    } = useStorageStore();

    const breadLoaf = 20; // Assuming each loaf has 20 slices
    const cheesePacket = 10; // Assuming each cheese package has 10 slices
    const hamPacket = 10; // Assuming each ham package has 10 slices
    const ketchupBottle = 500; // Assuming each bottle has 500ml
    const curryBottle = 500; // Assuming each bottle has 500ml
    const ketchupPerTosti = 30; // Assuming each tosti requires 30ml of ketchup
    const curryPerTosti = 30; // Assuming each tosti requires 30ml of curry


    function calculateBread() {
        const totalBread = (tostiList.reduce((acc, tosti) => acc + tosti.slider, 0)*2) - bread;
        const wholeLoaves = Math.floor(totalBread / breadLoaf);
        const halfLoaves = Math.ceil((totalBread % breadLoaf) / (breadLoaf / 2));
        if (wholeLoaves <= 0 && halfLoaves <= 0) {
            return "Geen brood meer nodig";
        } else if (wholeLoaves > 0 && halfLoaves > 0) {
            return `${wholeLoaves} hele en ${halfLoaves} halve`;
        } else if (wholeLoaves > 0) {
            return `${wholeLoaves} hele`;
        } else {
            return `${halfLoaves} halve`;
        }

    }

    function calculateCheese() {
        const totalCheese = tostiList.reduce((acc, tosti) => acc + (tosti.slider * 2), 0) - cheese;
        const packets = Math.ceil(totalCheese / cheesePacket);
        if (packets === 1) {
            return "1 pak";
        }
        if (packets <= 0) {
            return "Geen kaas meer nodig";
        }
        return packets <= 0 ? "Geen kaas meer nodig" : `${packets} pakken`;
    }

    function calculateHam() {
        const totalHam = tostiList.reduce((acc, tosti) => acc + (tosti.ham ? 2 : 0), 0) - ham;
        const packets = Math.ceil(totalHam / hamPacket);
        if (packets === 1) {
            return "1 pak";
        }
        if (packets <= 0) {
            return "Geen ham meer nodig";
        }
        return packets <= 0 ? "Geen ham meer nodig" : `${packets} pakken`;
    }

    function calculateKetchup() {
        const totalKetchup = tostiList.reduce((acc, tosti) => acc + (tosti.ketchup ? ketchupPerTosti : 0), 0) - ketchup;
        if( totalKetchup <= 0) {
            return "Geen ketchup meer nodig";
        }
        const bottles = Math.ceil(totalKetchup / ketchupBottle);
        return bottles === 1 ? "1 fles" : `${bottles} flessen`;
    }

    function calculateCurry() {
        const totalCurry = tostiList.reduce((acc, tosti) => acc + (tosti.curry ? curryPerTosti : 0), 0) - curry;
        if( totalCurry <= 0) {
            return "Geen curry meer nodig";
        }
        const bottles = Math.ceil(totalCurry / curryBottle);
        return bottles === 1 ? "1 fles" : `${bottles} flessen`;
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-15rem)]">
            <h1 className="text-4xl font-bold mb-4">Resultaat</h1>
            <p className="text-lg mb-6">Boodschappenlijst:</p>
            <div className="flex flex-col gap-2 w-[300px]">
                <div className="flex justify-between">
                    <span className="font-medium">Brood:</span>
                    <span>{calculateBread()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Kaas:</span>
                    <span>{calculateCheese()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Ham:</span>
                    <span>{calculateHam()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Ketchup:</span>
                    <span>{calculateKetchup()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Curry:</span>
                    <span>{calculateCurry()}</span>
                </div>
            </div>
        </div>
    )
}