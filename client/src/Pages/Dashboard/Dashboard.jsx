import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Dashboard = () => {
    const statistics = useLoaderData();
    console.log(statistics);

  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row md:w-3/4">

  <div className="stats stats-vertical shadow w-[200px] text-center border border-purple-400">
  <div className="stat">
    <div className="stat-title">Total Books</div>
    <div className="stat-value">{statistics?.totalBooks}</div>
  </div>

  <div className="stat">
    <div className="stat-title">Borrowed Books</div>
    <div className="stat-value">{statistics?.borrowedBooks}</div>
  </div>

  <div className="stat">
    <div className="stat-title">Total Users</div>
    <div className="stat-value">{statistics?.totalUsers}</div>
  </div>
</div>

    <div>
      <h1 className="text-5xl font-bold text-black text-center">Library Dashboard</h1>
      <p className="py-6 text-gray-700 text-center text-lg w-3/4 mx-auto">
        Find the statistics of the library here. You can see the total number of books, borrowed books and total users.
      </p>
    </div>
  </div>
</div>
  )
}

export default Dashboard