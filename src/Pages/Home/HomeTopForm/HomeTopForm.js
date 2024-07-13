import React, { useState } from "react";
import "./HomeTopForm.css";

const HomeTopForm = () => {
  const [work, setWork] = useState("");
  const [category, setCategory] = useState("");
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="top-form-container">
        <form onSubmit={handleSubmit}>
          <div className="top-form-box">
            <label htmlFor="Work">Search Work by Title</label>
            <input
              value={work}
              type="text"
              name="Work"
              id="work"
              onChange={(e) => setWork(e.target.value)}
              placeholder="Type any work title..."
            />
          </div>
          <div className="top-form-box">
            <label htmlFor="Category">Choose Category</label>
            <select
              value={category}
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Choose category</option>
              <option>Interior Design</option>
              <option>Exterior Design</option>
              <option>New Ideas</option>
              <option>Trendy Design</option>
            </select>
          </div>
          <div className="top-form-box">
            <label htmlFor="category1">Price Range</label>
            <select
              value={category1}
              name="category1"
              id="category1"
              onChange={(e) => setCategory1(e.target.value)}
            >
              <option>Choose Price</option>
              <option>$100 - $250</option>
              <option>$250 - $500</option>
              <option>$500 - $1000</option>
              <option>$1000+ </option>
            </select>
          </div>
          <div className="top-form-box">
            <label htmlFor="category2">Pick a Plan</label>
            <select
              value={category2}
              name="category2"
              id="category2"
              onChange={(e) => setCategory2(e.target.value)}
            >
              <option>Choose Plan</option>
              <option>Standard</option>
              <option>Professional</option>
              <option>Gold</option>
              <option>Premium</option>
            </select>
          </div>
        </form>
        <button className="all-btn" type="submit">
          Search Now
        </button>
      </div>
    </>
  );
};

export default HomeTopForm;
