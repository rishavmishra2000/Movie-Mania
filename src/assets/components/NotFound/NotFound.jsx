import React from "react";

import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    return navigate(-1);
  };
  return (
    <>
      <h2 className="align_center not_found">Error 404 - Page Not Found</h2>
      <button onClick={handleBackButton} className="button">
        Back
      </button>
    </>
  );
};

export default NotFound;
