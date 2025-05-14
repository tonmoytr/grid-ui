"use client";

import { useEffect, useState } from "react";

export default function Home2() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    async function fetchNames() {
      const res = await fetch("/names.json");
      const data = await res.json();
      setNames(data);
    }

    fetchNames();
  }, []);

  if (names.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <h2 className="text-2xl md:text-4xl font-bold text-red-500">
          No names available.
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl md:max-w-7xl lg:max-w-full mx-auto ">
      <div>
        <div className="text-center my-20">
          <h2 className="text-3xl font-bold text-indigo-600 md:text-5xl md:font-extrabold">
            CSS GRID PRACTICE
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 min-h-[400px] ">
            {names.slice(0, 1).map((name, i) => (
              <div
                key={i}
                className="bg-blue-300 col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-2 flex items-center justify-center text-white text-xl rounded-lg p-4"
              >
                {name}
              </div>
            ))}

            {names.slice(1, 5).map((name, i) => (
              <div
                key={i + 1}
                className="bg-green-400 h-40 lg:h-auto flex items-center justify-center text-white text-lg rounded-lg p-4"
              >
                {name}
              </div>
            ))}
          </div>

          {names.length > 5 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
              {names.slice(5).map((name, i) => (
                <div
                  key={i + 5}
                  className="bg-purple-500 text-white rounded-lg flex items-center justify-center p-4"
                >
                  {name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
