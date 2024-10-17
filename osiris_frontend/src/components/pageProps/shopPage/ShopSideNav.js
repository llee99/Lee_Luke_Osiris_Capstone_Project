import React from "react";
import Brand from "./shopBy/Brand";
import Collections from "./shopBy/Collections";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Collections icons={false} />
      <Color />
      <Brand />
      <Price />
    </div>
  );
};

export default ShopSideNav;
