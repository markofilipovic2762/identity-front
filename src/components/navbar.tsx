import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{ boxShadow: "0 0 5px 3px #1c263c" }}
      className="bg-gradient-to-l to-gray-300 border-b-2 border-[#1c263c] font-sans lg:text-3xl xl:text-4xl 2xl:text-4xl backdrop-blur-sm shadow-xl text-gray-200 from-accent-foreground p-6 w-full absolute top-0 flex flex-row justify-center items-center gap-4"
    >
      {/* <Link to="/istorija">
        <span className="text-xl px-3 py-1 border hover:animate-pulse hover:duration-300 border-[#b6c0d2] shadow-md shadow-black rounded-md  bg-[#313c53] text-[#b6c0d2] font-semibold absolute right-5 top-5 hover:bg-[#b6c0d2] hover:text-black">
          Istorija

          boja: bg-[#9cff00]
          text-[#1c263c]
        </span>
      </Link> */}
      <span className="font-bold">Identitetski servis</span>
    </nav>
  );
};

export default Navbar;
