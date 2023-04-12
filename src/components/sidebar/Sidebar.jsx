import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className="col-md-3 col-sm-3">
  <form className="shop-form-2">
    <div className="empty-space h55-xs h20-sm" />
    <h6 className="h6">FOR WHO</h6>
    <div className="empty-space h10-xs" />
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>For women</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>For men</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>For kids</span>
    </label>
    <div className="empty-space h30-xs h45-md" />
    <h6 className="h6">CATEGORY</h6>
    <div className="empty-space h10-xs" />
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>All</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>Curabitur fermentum</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>Kitchen furniture</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>Room for guest</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>Main room</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>Bedrooms</span>
    </label>
    <div className="empty-space h30-xs h45-md" />
    <h6 className="h6">PRICE</h6>
    <div className="empty-space h30-xs" />
    <div id="slider-range" />
    <div className="empty-space h20-xs" />
    <p>
      <label htmlFor="amount">price:</label>
      <input type="text" id="amount" readOnly="" />
    </p>
    <div className="empty-space h20-xs h35-md" />
    <h6 className="h6">BRANDS</h6>
    <div className="empty-space h10-xs" />
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>Black&amp;White</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>Zebrano</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>Delux</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>Restoration Hardware</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>Roche Bobois</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>Edra</span>
    </label>
    <label className="checkbox-entry">
      <input type="checkbox" />
      <span>Poliform</span>
    </label>
    <div className="empty-space h50-xs" />
    <div className="btn-wrap">
      <a href="#" className="btn-2">
        <span>clear all filters</span>
      </a>
    </div>
  </form>
</div>

    </>
  )
}

export default Sidebar