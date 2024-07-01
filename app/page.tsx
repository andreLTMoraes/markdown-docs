import getDoc from "./utils/FetchMDX";

export default function Home() {
  const doc = getDoc("README")
  return (
    <main>
      <h1 className="text-slate-900 dark:text-slate-200">Home</h1>
      {doc}
    </main>
  );
}
