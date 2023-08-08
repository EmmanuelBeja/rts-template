import React from "react";

const Preloader: React.FC = () => (
  <div className="h-screen w-screen">
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-custom-primary"></div>
    </div>
  </div>
);

export default Preloader;