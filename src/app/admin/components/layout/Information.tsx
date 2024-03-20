import React from "react";

const Information = () => {
  return (
    <div>
      <div className="bg-[#E2E2E2] shadow-md m-4 p-4 rounded-lg">
        <h1>График работы:</h1>
        <p>
          10:00-20:00, <span>вторник</span> выходной
        </p>
      </div>
      <div className="bg-[#E2E2E2] shadow-md m-4 p-4 rounded-lg">
        <h1>Адрес:</h1>
        <p>
          Суеркулова 186,{" "}
          <span className="text-[blue]">
            <a href="@">Открыть в 2ГИС</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Information;
