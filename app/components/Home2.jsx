export default function Home2() {
  return (
    <div className="max-w-3xl md:max-w-7xl lg:max-w-full mx-auto flex justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full max-w-7xl h-[600px] p-4 bg-gray-100">
        {/* Large Left Box */}
        <div className="col-span-2 row-span-2 bg-blue-400 rounded-md"></div>

        {/* Top Right Boxes */}
        <div className="bg-green-400 rounded-md"></div>
        <div className="bg-red-400 rounded-md"></div>

        {/* Bottom Right Boxes */}
        <div className="bg-yellow-400 rounded-md"></div>
        <div className="bg-purple-400 rounded-md"></div>
      </div>
    </div>
  );
}
