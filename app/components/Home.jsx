// app/grid/page.jsx
import { headers } from "next/headers";
import Grids from "./Grids";

async function Home() {
  const host = headers().get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  const url = `${protocol}://${host}/grid.json`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch grid.json");
  return res.json();
}

export default async function GridPage() {
  const data = await Home();

  return (
    <div className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto ">
      {data.map((item) => (
        <div className="my-[10%]">
          <Grids key={item.id} item={item}></Grids>
        </div>
      ))}
    </div>
  );
}
