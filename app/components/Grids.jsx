export default function Grids({ item }) {
  const { box1, box2, box3, box4, box5 } = item;
  return (
    <div className="p-8 xl:p-10 rounded-2xl bg-sky-300 shadow">
      <h2 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-violet-600 my-10 text-center">
        Grids UI
      </h2>
      <div>
        <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-8 w-full h-[90vh] md:h-[80vh] lg:h-[65vh]">
          {/* large box */}
          <div className="bg-green-500 grid-cols-1 grid-rows-1 md:col-span-2 md:row-span-2 rounded-2xl flex justify-center items-center text-2xl font-medium text-gray-50 uppercase">
            {box1}
          </div>
          {/* right top boxes */}
          <div className="bg-red-500 grid-cols-1 row-span-2 md:row-span-1 md:col-span-1 rounded-2xl flex justify-center items-center text-2xl font-medium text-gray-50 uppercase">
            {box2}
          </div>
          <div className="bg-teal-500 grid-cols-1 row-span-2 md:row-span-1 md:col-span-1 rounded-2xl flex justify-center items-center text-2xl font-medium text-gray-50 uppercase">
            {box3}
          </div>
          {/* right bottom boxes */}
          <div className="bg-blue-500 grid-cols-1 row-span-2 md:row-span-1 md:col-span-1 rounded-2xl flex justify-center items-center text-2xl font-medium text-gray-50 uppercase">
            {box4}
          </div>
          <div className="bg-purple-500  md:col-span-2 md:row-span-1 lg:col-span-1 rounded-2xl flex justify-center items-center text-2xl font-medium text-gray-50 uppercase">
            {box5}
          </div>
        </div>
      </div>
    </div>
  );
}
