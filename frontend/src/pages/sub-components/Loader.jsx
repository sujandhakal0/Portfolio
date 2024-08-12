import React from "react";
import { RiseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#020817",
      }}
    >
      <RiseLoader color="#0077b6" size={20} margin={10} />
    </div>
  );
};

export default Loader;
