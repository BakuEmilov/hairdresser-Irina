import React from "react";

const Information = () => {
  return (
    <div>
      <div className="border border-black m-4 p-2 ">
        <h1>График работы:</h1>
        <p>
          10:00-20:00, <span>вторник</span> выходной
        </p>
      </div>
      <div className="border border-black m-4 p-2 ">
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
