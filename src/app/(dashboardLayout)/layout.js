import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <header>Navbar</header>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default DashboardLayout;
