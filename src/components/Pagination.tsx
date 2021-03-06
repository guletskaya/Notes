import React from 'react';

interface PaginationProps{
    notesPerPage: number,
    totalNotes: number,
    paginate: any
}

const Pagination: React.FC<PaginationProps> = ({
    notesPerPage,
    totalNotes,
    paginate
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;