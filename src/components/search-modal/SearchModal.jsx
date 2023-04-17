import React from 'react'
import PropTypes from 'prop-types'

const SearchModal = props => {

  const {searchTerm, onSubmit} = props;

  return (
    <>
    <div className="empty-space h30-xs h65-md" />
    <form className="shop-form">
      <div className="row">
        <div className="col-sm-12 col-md-7 col-lg-7">
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
                    value={searchTerm}
                    placeholder="Search"
                    onChange={onSubmit}
                  />
                  <div className="input-icon">
                    <i className="fa fa-search" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </>
  )
}

SearchModal.propTypes = {
  searchTerm: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default SearchModal