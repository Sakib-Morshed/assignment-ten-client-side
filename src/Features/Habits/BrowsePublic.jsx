import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const BrowsePublic = () => {
  const data = useLoaderData();
  const { loading, setLoading } = useContext(AuthContext);
  const [searchText, setSearchText] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  console.log(data);

  const filteredHabits = data.filter((habit) => {
    const matchesSearch = habit.habitTitle
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || habit.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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

      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row gap-5 justify-between">
        <input
          type="text"
          placeholder="Search habits..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full md:w-1/2"
        />

        <select
          className="select select-bordered w-full md:w-1/3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Morning">Morning</option>
          <option value="Work">Work</option>
          <option value="Fitness">Fitness</option>
          <option value="Evening">Evening</option>
          <option value="Study">Study</option>
        </select>
      </div>
      <div className=" max-w-7xl mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredHabits.map((habit) => (
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
