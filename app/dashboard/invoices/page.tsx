import Component from './components/component1';


export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 row-start-2 bg-emerald-700 p-8 w-1/2 h-32">
      I am an invoices page
      <Component />
    </div>

  );
}
