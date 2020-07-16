import React from "react";

import loadingSpinner from "../../img/loading-spinner.gif";

export const Loading: React.FC = () => {
  return (
    <img src={loadingSpinner} alt="Loading..."/>
  );
}
