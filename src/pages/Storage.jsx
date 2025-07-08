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
    <div className="container mx-auto p-4 w-7/10">
      <h1 className="text-6xl font-bold mb-24">Hoeveel hebben we nog?</h1>
      <form className="space-y-4">
        <div className='mb-12'>
          <label className="block text-2xl font-medium mb-4">Sneetjes Brood</label>
          <input
            type="number"
            min="0"
            value={bread}
            onChange={(e) => setField('bread', Number(e.target.value))}
            className="input input-bordered w-full text-2xl"
          />
        </div>
        <div className='mb-12'>
          <label className="block text-2xl font-medium mb-4">Plakken Kaas</label>
          <input
            type="number"
            min="0"
            value={cheese}
            onChange={(e) => setField('cheese', Number(e.target.value))}
            className="input input-bordered w-full text-2xl"
          />
        </div>
        <div className='mb-12'>
          <label className="block text-2xl font-medium mb-4">Plakken Ham</label>
          <input
            type="number"
            min="0"
            value={ham}
            onChange={(e) => setField('ham', Number(e.target.value))}
            className="input input-bordered w-full text-2xl"
          />
        </div>
        <div className='mb-12'>
          <label className="block text-2xl font-medium mb-4">Ketchup</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="500"
              step="1"
              value={ketchup}
              onChange={(e) => setField('ketchup', Number(e.target.value))}
              className="range range-primary w-full text-2xl"
            />
            <span className="w-16 text-right">{ketchup} ml</span>
          </div>
        </div>
        <div className='mb-12'>
          <label className="block text-2xl font-medium mb-4">Curry</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="500"
              step="1"
              value={curry}
              onChange={(e) => setField('curry', Number(e.target.value))}
              className="range range-secondary w-full text-2xl"
            />
            <span className="w-16 text-right">{curry} ml</span>
          </div>
        </div>
      </form>

      <Link to="/tosti">
        <button className="btn btn-primary h-20 w-8/20 mt-6 text-4xl">Naar bunkeraars</button>
      </Link>
    </div>
  );
}
