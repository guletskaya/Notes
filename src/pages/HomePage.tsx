import { useState } from "react";
import "../App.css";
import SortableTable from "../components/SortableTable";
import React from "react";
import Pagination from "../components/Pagination";


function HomePage() {
    const [notes, setNotes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [notesPerPage] = useState(20)    

    const lastNoteIndex = currentPage * notesPerPage
    const firstNoteIndex = lastNoteIndex - notesPerPage
    const currentNote = notes.slice(firstNoteIndex, lastNoteIndex)
    const paginate = (pageNumber:number) => setCurrentPage(pageNumber);
  return ( 
    <div className="App">
      <SortableTable data={currentNote}/>
      <Pagination
        notesPerPage={notesPerPage}
        totalNotes={notes.length}
        paginate = {paginate}
      />
    </div>
  );
}

export default HomePage;