import OrderOnlineNavbar from "@/components/OrderOnlineNavbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <OrderOnlineNavbar />
      <div>{children}</div>
    </>
  );
};

export default layout;
