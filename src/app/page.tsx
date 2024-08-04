'use client';
import useDataStore from "@/store/data";
import List from "../components/List";
import Link from "next/link";

export default function Home() {
  const data = useDataStore((state) => state.data);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">List of items</h2>
        <Link href={"/Fav"}><p className="mb-3">Go to favorites</p></Link>

        <List items={data} />

      </div>
    </main>
  );
}
