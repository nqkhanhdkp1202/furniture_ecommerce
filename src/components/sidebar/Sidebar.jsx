import React, { useEffect, useState } from "react";
import { furnitureAPI } from "../../api/furnitureAPI";
import Checkbox from "./checkbox/CheckBox";

const Sidebar = ({categories}) => {
  const [isChecked, setIsChecked] = useState([]);

  const handleChecked = (event) => {
    const value = event.target.value;
    const newValue = [];
    setIsChecked(
      newValue.push(value)
    );
  };

  return (
    <>
      <div className="col-md-3 col-sm-3">
        <form className="shop-form-2">
          <div className="empty-space h55-xs h20-sm" />
          <h6 className="h6">CATEGORY</h6>
          <div className="empty-space h10-xs" />
          {categories &&
            categories.map((element, i) => (
              <Checkbox key={i} category={element} onCategoryChange={(e) => handleChecked(e)}/>
            ))}
          <div className="empty-space h30-xs h45-md" />
          <div></div>
          <div className="empty-space h20-xs h35-md" />
          <div className="empty-space h50-xs" />
          <div className="btn-wrap">
            <a href="#" className="btn-2">
              <span>clear all filters</span>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Sidebar;
