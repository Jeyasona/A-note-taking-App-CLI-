const notes = require('./notes.js');
const yargs = require('yargs');



yargs.version('sona');
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "Describe the note",
      demandOption: true,
      type: 'string'

    }
  },
  handler: function(argv){
    notes.addNote(argv.title,argv.body);
  }
})



yargs.command({
  command: 'remove',
  describe: 'remove a  note',
  builder: {
    title: {
      describe: "Give a title to remove",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.removeNote(argv.title);
    //console.log(argv.title);
  }
})

yargs.command({
  command: 'list',
  describe: 'list a  note',
  handler: function(){
    notes.listNote();
  }
})

yargs.command({
  command: 'read',
  describe: 'read a  note',
  builder:{
    title:{
      describe:"Specify the title off the book u want description",
    demandOption: true,
  type: 'string'
}
},
  handler: function(argv){
    notes.readNote(argv.title);
  }
})

yargs.parse()

//console.log(yargs.argv);
