// src/pages/EnrollmentsReport.js
import React, { useState, useEffect } from "react";
import EnrolmentsReportTable from "../components/EnrolmentsReportTable";
import Pagination from "../components/Pagination";
import SearchButton from "../components/SearchButton";

function EnrollmentsReportPage2() {
  const [isMobile, setIsMobile] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Items per page
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "firstName",
    direction: "asc",
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Consider mobile screen widths <= 768px
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/get_enrolments.php`);
        // Check if the response is okay (status code in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setData([]); // Optionally set data to an empty array to prevent rendering issues
        alert(
          "An error occurred while fetching the data. Please try again later."
        );
      }
    };
    fetchData();
  }, [API_URL]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Search and Filter
  const filteredData = data.filter((item) => {
    const fullName = `${item.firstName} ${item.surName}`.toLowerCase().trim(); // Combine first and surname
    const description = item.description.toLowerCase().trim(); // Assuming description field
    const completionStatus = item.completionStatus.toLowerCase().trim();
    const searchLowered = searchTerm.toLowerCase().trim(); // Trim and lower case the search term

    return (
      fullName.includes(searchLowered) ||
      description.includes(searchLowered) ||
      completionStatus.includes(searchLowered)
    );
  });

  // Sort Logic
  const sortedData = filteredData.sort((a, b) => {
    if (sortConfig.key === "enrolledDate") {
      // Compare dates directly
      const dateA = new Date(a.enrolledDate);
      const dateB = new Date(b.enrolledDate);

      // Handle invalid dates gracefully (optional)
      if (isNaN(dateA) || isNaN(dateB)) return 0;

      return sortConfig.direction === "asc" ? dateA - dateB : dateB - dateA;
    } else if (sortConfig.key === "completionStatus") {
      // Compare conpletion status alphabatically
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    } else {
      // Default sorting for first name, and description
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    }
  });

  // Pagination logic
  const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to page 1 when searching
  };

  // Handle reset search
  const handleReset = () => {
    setSearchTerm("");
    setCurrentPage(1); // Reset pagination to page 1
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h2>Course Enrolment Report 2</h2>
      <p>
        This page contain search feature with button, and you can also sort the
        data by clicking the table header.
      </p>
      {/* Search Component */}
      <SearchButton
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />

      {/* Table Component */}
      <EnrolmentsReportTable
        data={currentData}
        handleSort={handleSort}
        sortColumn={sortConfig.key}
        sortDirection={sortConfig.direction}
      />

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        handlePrev={handlePrev}
        handleNext={handleNext}
        isMobile={isMobile}
      />
    </div>
  );
}

export default EnrollmentsReportPage2;
