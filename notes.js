const fs = require('fs');
const getNotes = function(){
  return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note){
    console.log(note);
    return note.title === title
  })

  if(duplicateNotes.length === 0){
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes);
    console.log("New Note added");
  }
  else{
    console.log("Note title taken");
  }


}

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function(note){
    return note.title !== title
  })
  if(notes.length > notesToKeep.length){
    console.log("The note is removed")
  }
  else{
    console.log("The note title does not exist")
  }
  
  saveNotes(notesToKeep)
}

const listNote = () => {
  const notes = loadNotes();
  console.log("Your Notes...");
  notes.forEach(function(note){
    console.log(note.title);

  })
}

const readNote = function(title){
 const notes = loadNotes();
 const readNote = notes.find(function(note){
   return note.title === title
 })
 if(readNote === undefined){
   console.log("Title is wrong");
 }
 else{
   console.log(readNote);
 }


}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = function(){

  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }
  catch(e){
    return []
  }

}
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote
}
