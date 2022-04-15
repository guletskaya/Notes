import { useState } from "react";
import "../App.css";
import SortableTable from "../components/SortableTable";
import React from "react";
import data from "../data.json";
import Pagination from "../components/Pagination";


function HomePage() {
  
    const [currentPage, setCurrentPage] = useState(1)
    const [notesPerPage] = useState(10)    


    const lastNoteIndex = currentPage * notesPerPage
    const firstNoteIndex = lastNoteIndex - notesPerPage
    const currentNote = data.slice(firstNoteIndex, lastNoteIndex)
    
  console.log(currentNote)

    const paginate = (pageNumber:number) => setCurrentPage(pageNumber);
  return ( 
    <div className="App">
      <SortableTable data={currentNote} />
      <Pagination
        notesPerPage={notesPerPage}
        totalNotes={data.length}
        paginate = {paginate}
      />
    </div>
  );
}

export default HomePage;