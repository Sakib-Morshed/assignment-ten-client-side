import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const BrowsePublic = () => {
  const data = useLoaderData();
  const { loading, setLoading } = useContext(AuthContext);
  console.log(data);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary w-30"></span>
        <span className="loading loading-spinner text-primary w-30"></span>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-center pt-10">
        Explore All Public Habits{" "}
      </h2>
      <div className=" max-w-7xl mx-auto my-10 grid grid-cols-3 gap-5">
        {data.map((habit) => (
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

export default BrowsePublic;
