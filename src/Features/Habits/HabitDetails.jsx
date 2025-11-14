import React from "react";
import { Link, useLoaderData } from "react-router";
import * as Progress from "@radix-ui/react-progress";

const HabitDetails = () => {
  const data = useLoaderData();
  console.log(data);

  const completed = data?.completedDaysLast30 || 0;
  const percentage = Math.round((completed / 30) * 100);
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
          <div className="my-4">
            <h3 className="font-semibold mb-2">
              Progress (Last 30 Days): {percentage}%
            </h3>

            <Progress.Root
              className="w-full h-4 bg-gray-200 rounded-full overflow-hidden"
              value={percentage}
            >
              <Progress.Indicator
                className="bg-green-500 h-full"
                style={{ width: `${percentage}%` }}
              />
            </Progress.Root>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{data.category}</div>
            <div className="badge badge-outline">{data.userName}</div>
          </div>
          <Link className="btn w-full my-5">Mark Complete</Link>
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
