import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        <FaArrowLeft /> <span className="pagination-text">Anterior</span>
      </button>

      <span className="pagination-info">
        Página {currentPage} de {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        <span className="pagination-text">Siguiente</span> <FaArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
