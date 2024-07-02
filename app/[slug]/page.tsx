import getDoc from "../utils/FetchMDX";

export default function DocPage({params}:{params: {slug: string}}) {
  const doc = getDoc(params.slug)
  return (
    <main>
      <h1 className="text-slate-900 dark:text-slate-200">{params.slug}</h1>
      {doc}
    </main>
  );
}