import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	//create hook
	let [notes,updateNotes] = useState([]);
	function insertNewNotes(n){
		//n should be a js object
		updateNotes((prev)=>([...prev,n]))
		// console.log(notes);
	}
	function deleteNote(id){
		//key must be the index of the note that should be deleted
		//console.log("delete triggered");
		updateNotes((prev)=>{
			return prev.filter((item,index)=>{
				return id !== index;
			});
		})
	}
  	return (
    	<div>
      		<Header />
      		<CreateArea insertNewNotes={insertNewNotes}/>
			{notes.map((note,index)=>
				//when deploy, using props to generate keys
				(<Note key={index} id={index} title={note.title} content={note.content}  deleteNote={deleteNote}/>)
			)}
			<Footer />
    	</div>
  	);
}

export default App;
