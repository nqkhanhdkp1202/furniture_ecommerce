import React from 'react'

const SearchModal = () => {
  return (
    <>
     <div className="col-sm-12 col-md-5 col-lg-5">
              <div className="search">
                <div className="input-wrapper search">
                  <div className="input-style">
                    <input
                      id="inputSearch"
                      name="name"
                      type="text"
                      className="input"
                      required=""
                    />
                    <label htmlFor="inputSearch">Search</label>
                    <div className="input-icon">
                      <i className="fa fa-search" aria-hidden="true" />
                      <input id="searchsubmit" defaultValue="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
export default SearchModal