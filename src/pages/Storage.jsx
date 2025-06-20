import { Link } from 'react-router-dom';
import { useStorageStore } from '../store/useStorageStore';

export function Storage() {
  const {
    bread,
    cheese,
    ham,
    ketchup,
    curry,
    setField,
  } = useStorageStore();

  return (
    <div className="container mx-auto p-4 w-1/2">
      <h1 className="text-2xl font-bold mb-4">Hoeveel hebben we nog?</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Plakken Brood</label>
          <input
            type="number"
            min="0"
            value={bread}
            onChange={(e) => setField('bread', Number(e.target.value))}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Plakken Kaas</label>
          <input
            type="number"
            min="0"
            value={cheese}
            onChange={(e) => setField('cheese', Number(e.target.value))}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Plakken Ham</label>
          <input
            type="number"
            min="0"
            value={ham}
            onChange={(e) => setField('ham', Number(e.target.value))}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Ketchup</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="500"
              step="1"
              value={ketchup}
              onChange={(e) => setField('ketchup', Number(e.target.value))}
              className="range range-primary w-full"
            />
            <span className="w-16 text-right">{ketchup} ml</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Curry</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="500"
              step="1"
              value={curry}
              onChange={(e) => setField('curry', Number(e.target.value))}
              className="range range-secondary w-full"
            />
            <span className="w-16 text-right">{curry} ml</span>
          </div>
        </div>
      </form>

      <Link to="/tosti">
        <button className="btn btn-primary w-5/20 mt-6">Naar bunkeraars</button>
      </Link>
    </div>
  );
}