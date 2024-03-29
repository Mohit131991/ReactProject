import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // can also use "./components/Header.js" here
import Body from "./components/Body";

const MainLayout = () => {
  return (
    <div className="main">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainLayout />);
