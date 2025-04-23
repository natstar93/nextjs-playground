export default function Dashboard({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="justify-items-center items-center gap-16 p-8 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col items-center gap-[32px] row-start-2 bg-fuchsia-900 p-8 w-10/12">
          I am a layout
          {children}
        </main>
  
      </div>
    );
  }
    