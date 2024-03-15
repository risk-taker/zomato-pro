import OrderOnlineNavbar from "@/components/OrderOnlineNavbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <OrderOnlineNavbar />
      <div>{children}</div>
      <h1>hello world</h1>
    </>
  );
};

export default layout;
