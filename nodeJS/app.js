// import with require syntax from a local file!!!!!!!!!!!
// const notesService = require("./src/notes.service");

// console.log(notesService);
const { v4: uuid } = require("uuid");
const { saveNotesToFile, readNotesFromFile } = require("./src/notes.service");
console.log(saveNotesToFile, readNotesFromFile);

// console.log("from node js");

// const firstName = "Danilo";
// const lastName = "Borozan";

// console.log(`${firstName} ${lastName}`);

// creating note class!!!!!!!!!!!!!!!!
class Note {
  constructor(author, text) {
    this.id = uuid();
    this.author = author;
    this.text = text;
  }
}

const newNotes = [
  new Note("Borche", "Node js is fun"),
  new Note("Danilo", "Dont forget feedback"),
  new Note("John", "The notes app is amazing"),
];

const oldNotes = readNotesFromFile();
const notes = [...oldNotes, ...newNotes];
// saving notes into file!!!!!!!!!!!!!

saveNotesToFile(notes);
// console.log(notes);

const printNotes = () => {
  const notes = readNotesFromFile();

  notes.forEach((note) => {
    console.log(`Author: ${note.author} | Text: ${note.text}`);
  });
};

printNotes();
