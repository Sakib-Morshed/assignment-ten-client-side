import React, { use } from "react";
import { Link } from "react-router";

const LatestHabits = ({ latestHabitsPromise }) => {
  const habits = use(latestHabitsPromise);
  console.log(habits);
  return (
    <>
      <div className=" max-w-7xl mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {habits.map((habit) => (
          <div key={habit._id} className="card bg-base-100 w-90 shadow-sm p-5">
            <figure>
              <img className="w-full h-40" src={habit.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between items-center">
                {habit.habitTitle}
                <div className="badge badge-neutral">{habit.userName}</div>
              </h2>
              <p>{habit.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{habit.category}</div>
                <div className="badge badge-outline">{habit.reminderTime}</div>
              </div>
              <Link
                to={`/habitDetails/${habit._id}`}
                className="btn w-full my-5"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestHabits;
