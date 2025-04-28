import DatabaseClient from '../lib/DatabaseClient';
import Revenue from './components/Revenue';

export default async function Dashboard() {
  const db = new DatabaseClient({ ssl: 'require' });
  const revenue = await db.fetchRevenue();

  return (
    <div className="flex flex-col justify-center items-center gap-2 row-start-2 bg-emerald-700 p-8 w-1/2">
      I am a dashboard page
      <Revenue revenue={revenue} />
    </div>
  );
}
