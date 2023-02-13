import React,{useState} from "react";

function CreateArea(props) {
	let [aNote,updateNote] = useState({title:"",content:""});
	function handleOnclick(){
		props.insertNewNotes({title:aNote.title,content:aNote.content});
		//initializatioon
		updateNote({title:"",content:""});
	}
	function handleInput(event){
		let value = event.target.value;
		let name = event.target.name;
		if(name === "title"){
			updateNote((prev)=>({title:value,content:prev.content}));
		}else{
			updateNote((prev)=>({title:prev.title,content:value}));
		}
	}

  return (
    <div>
      <form>
        <input onChange={handleInput} name="title" placeholder="Title" value={aNote.title}/>
        <textarea onChange={handleInput} name="content" placeholder="Take a note..." rows="3" value={aNote.content}/>
        <button type="button" onClick={()=>handleOnclick()}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
