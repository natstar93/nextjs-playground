import Setting from './components/setting';

export default function Dashboard() {
  const data = {
    name: 'nat',
    cookies: 'on',
    'emailMarketing': 'off'
  };

  return (
      <div className="flex flex-col justify-center items-center gap-2 row-start-2 bg-emerald-700 p-8 w-1/2">
        I am an account page
        {Object.entries(data).map(([key, value]) => <Setting key={key} name={key} value={value}/>)}
      </div>

  );
}
  