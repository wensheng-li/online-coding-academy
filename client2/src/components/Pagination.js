// src/components/Pagination.js
import React from "react";
import "../App.css";

const Pagination = ({
  currentPage,
  totalPages,
  paginate,
  handlePrev,
  handleNext,
  isMobile,
}) => {
  const generatePageNumbers = () => {
    let pages = [];

    // Full pagination for larger screens
    if (!isMobile) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={
              i === currentPage ? "paginationActive" : "paginationBttns"
            }
            onClick={() => paginate(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // Condensed pagination for smaller screens
      pages.push(
        <button
          key={1}
          className={1 === currentPage ? "paginationActive" : ""}
          onClick={() => paginate(1)}
        >
          1
        </button>
      );
      if (currentPage > 3) pages.push(<span key="dots-1">···</span>);
      // Show current page and its adjacent pages
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(
          <button
            key={i}
            className={i === currentPage ? "paginationActive" : ""}
            onClick={() => paginate(i)}
          >
            {i}
          </button>
        );
      }
      if (currentPage < totalPages - 2)
        pages.push(<span key="dots-2">···</span>);
      if (totalPages > 1) {
        pages.push(
          <button
            key={totalPages}
            className={totalPages === currentPage ? "paginationActive" : ""}
            onClick={() => paginate(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }
    return pages;
  };
  return (
    <div className="pagination">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`forwardBacwardBttns`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {/* {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => paginate(index + 1)}
          className={`paginationBttns ${
            currentPage === index + 1 ? "paginationActive" : ""
          }`}
        >
          {index + 1}
        </button>
      ))} */}
      {generatePageNumbers()}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`forwardBacwardBttns`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
