import React from "react";

const Pagination = ({
  setCurrentPage,
  currentPage,
  numberOfPages,
  dispatch
}) => {
  const renderPagination = () => {
    if (currentPage === numberOfPages && currentPage === 1) return null;
    if (currentPage === 1) {
      return (
        <div  className="container d-flex justify-content-center">
          <nav aria-label="...">
  <ul class="pagination py-2">
    <li class="page-item active" ><p class="page-link mx-2 rounded-2" >1</p></li>
    <li class="page-item">
      <p class="page-link"   onClick={() => dispatch(setCurrentPage(currentPage + 1))}>Next</p>
    </li>
  </ul>
</nav>
        </div>
      );
    } else if (currentPage !== numberOfPages) {
      return (
        <div  className="container d-flex justify-content-center">
        <nav aria-label="...">
<ul class="pagination py-2">
  <li class="page-item">
    <p class="page-link mx-2"   onClick={() => dispatch(setCurrentPage(currentPage - 1))}>Previous</p>
  </li>
  <li class="page-item active" ><p class="page-link">{currentPage}</p></li>
  <li class="page-item">
    < p class="page-link mx-2"   onClick={() => dispatch(setCurrentPage(currentPage + 1))}>Next</p>
  </li>
</ul>
</nav>
      </div>
      );
    } else {
      return (
        <div  className="container d-flex justify-content-center">
        <nav aria-label="...">
<ul class="pagination py-2">
  <li class="page-item">
    <p class="page-link"  onClick={() => dispatch(setCurrentPage(currentPage - 1))}>Previous</p>
  </li>
  <li class="page-item active" ><p class="page-link" >{currentPage}</p></li>
</ul>
</nav>
      </div>
      );
    }
  };

  return <div className="mt-4">{renderPagination()}</div>;
};

export default Pagination;