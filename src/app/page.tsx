import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="grid grid-rows-2 items-center justify-center gap-2">
        <h1>Team Memory Leak</h1>
        <div className="flex justify-center">
          {/* <Image src="" alt="" width={300} height={300} /> */}A student
          scrum team founded at University of California, Riverside
        </div>
        <div className="mx-auto w-1/2 table-auto border-separate border-spacing-2 border-slate-400">
          <svg
            className="absolute -left-1 h-12 w-12 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default page;
