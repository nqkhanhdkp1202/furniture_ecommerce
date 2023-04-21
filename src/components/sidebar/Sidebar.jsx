import React, { useEffect, useRef, useState } from "react";
import { furnitureAPI } from "../../api/furnitureAPI";
import Checkbox from "./checkbox/CheckBox";

const Sidebar = ({ list, handleChangeDataWithFilter }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isChecked, setIsChecked] = useState([]);
  const idTimeOut = useRef(null)

  useEffect(() => {
    // setIsLoading(true);
    const getCategoryList = async () => {
      const params = {};
      let response = null;
      response = await furnitureAPI.getCategoryList(params);
      setCategories(response.data);
    };
    getCategoryList();
    // setIsLoading(false);
  }, []);
  
  const handleChecked = (event) => {
    const value = event.target.value;
    let lstCategory = []
    if (isChecked?.length) {
      if (isChecked.includes(value)) {
        lstCategory = isChecked.filter(item => item != value)
      } else {
        lstCategory = [...isChecked, value]
      }
    } else {
      lstCategory = [value]
    }
    clearTimeout(idTimeOut.current)
    idTimeOut.current = setTimeout(() => {
      handleChangeDataWithFilter(list, lstCategory)
    }, 1000)
    setIsChecked(lstCategory)
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
              <Checkbox key={i} category={element} onCategoryChange={(e) => handleChecked(e)} />
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
