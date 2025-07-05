import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const PageLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <LoadingSpinner size="md" text="Loading page..." />
      </div>
    </div>
  );
};

export default PageLoader;