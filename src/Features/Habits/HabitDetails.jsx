import React from "react";
import { Link, useLoaderData } from "react-router";

const HabitDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className=" max-w-7xl mx-auto flex justify-center my-10">
      <div className="card bg-base-100 w-100 shadow-sm p-5">
        <figure>
          <img className="w-full h-40" src={data.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between items-center">
            {data.habitTitle}
          </h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{data.category}</div>
          </div>
          <Link className="btn w-full my-5">Mark Complete</Link>
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
