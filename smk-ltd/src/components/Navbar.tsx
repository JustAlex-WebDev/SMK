import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="z-20 fixed w-full max-w-[1280px] p-8 flex justify-between items-center text-md tracking-wider">
      <div className="flex flex-1 justify-start gap-8 uppercase">
        <div>услуги</div>
        <div>проекти</div>
        <div>партньори</div>
      </div>
      <div className="flex flex-2 flex-[2] justify-center text-center text-xl">
        <div>
          Специализирани решения <br />
          за скелета и офис контейнери
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-8 uppercase">
        <div>кариери</div>
        <div>за нас</div>
        <div>контакти</div>
      </div>
    </div>
  );
};

export default Navbar;
