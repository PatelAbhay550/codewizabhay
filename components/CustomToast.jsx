import React from "react";

const CustomToast = ({ message, type }) => {
  let bgColor;
  switch (type) {
    case "success":
      bgColor = "bg-green-500";
      break;
    case "error":
      bgColor = "bg-red-500";
      break;
    case "warning":
      bgColor = "bg-yellow-500";
      break;
    default:
      bgColor = "bg-blue-500";
  }

  return (
    <div className={`w-full p-4 text-white rounded-md shadow-md ${bgColor}`}>
      {message}
    </div>
  );
};

export default CustomToast;
