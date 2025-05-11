export default function Grids({ item }) {
  const { box1, box2, box3, box4, box5 } = item;
  return (
    <div className="p-8 xl:p-10 rounded-2xl bg-sky-300 shadow">
      <h2 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-violet-600 my-10 text-center">
        Grids UI
      </h2>

      {/* desktop view */}
      {/* main grids */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
        {/* left div */}
        <div className="">
          <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-green-500 lg:w-[100%] lg:max-w-[100%] lg:h-[100%] flex justify-center items-center">
            {box1}
          </div>
        </div>

        {/* right div */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-red-500 lg:w-[100%] lg:max-w-[100%] lg:h-[220px] flex justify-center items-center">
              {box2}
            </div>
          </div>
          <div>
            <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-teal-500 lg:w-[100%] lg:max-w-[100%] lg:h-[220px] flex justify-center items-center">
              {box3}
            </div>
          </div>
          <div>
            <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-blue-500 lg:w-[100%] lg:max-w-[100%] lg:h-[220px] flex justify-center items-center">
              {box4}
            </div>
          </div>
          <div>
            <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-purple-500 lg:w-[100%] lg:max-w-[100%] lg:h-[220px] flex justify-center items-center">
              {box5}
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}

      {/* tablet view */}
      <div className="hidden md:block lg:hidden">
        <div className="md:grid md:grid-rows-2 gap-6">
          <div>
            <div className="md:grid md:grid-cols-6 md:gap-6 ">
              <div className="md:col-span-4">
                <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-green-500 md:h-full flex justify-center items-center">
                  {box1}
                </div>
              </div>
              <div className="col-span-2">
                <div className="md:grid md:grid-rows-2 md:gap-6 ">
                  <div>
                    <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-red-500 md:h-40 flex justify-center items-center">
                      {box2}
                    </div>
                  </div>
                  <div>
                    <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-teal-500 md:h-40 flex justify-center items-center">
                      {box3}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bottom boxes */}
          <div>
            <div className="md:grid md:grid-cols-6 gap-6">
              <div className="md:col-span-2">
                <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-blue-500 md:h-40 flex justify-center items-center">
                  {box4}
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-purple-500 md:h-full flex justify-center items-center">
                  {box5}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------- */}

      {/* Mobile devices */}

      <div className="block md:hidden ">
        <div className="grid grid-cols-2 gap-8">
          <div className="grid gap-8">
            <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-green-500 h-44 flex justify-center items-center">
              {box1}
            </div>

            <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-red-500 h-96 flex justify-center items-center">
              {box2}
            </div>

            <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-teal-500 h-44 flex justify-center items-center">
              {box3}
            </div>
          </div>
          <div className="grid grid-rows-2 gap-8">
            <div className="">
              <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-blue-500 h-full flex justify-center items-center">
                {box4}
              </div>
            </div>
            <div className="">
              <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-purple-500 h-full flex justify-center items-center">
                {box5}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
        <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-green-500">{box1}</div>
        <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-red-500">{box2}</div>
        <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-teal-500">{box3}</div>
        <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-blue-500">{box4}</div>
        <div className="p-2 border text-center uppercase text-2xl text-gray-50 font-medium rounded-xl bg-purple-500">{box5}</div>
      </div> */}
    </div>
  );
}
