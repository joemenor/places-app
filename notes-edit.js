const noteId = location.hash.substring(1)
let title = document.querySelector('#note-title')
let body = document.querySelector('#note-body')
let addressEl = document.querySelector('#address-label')
let mapEl = document.querySelector('#map-spot')
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)
if(note.address) {codeAddress(note.address,'map')}
// if(note.location) {
//   let address = note.location
//   let addressURL = address.replace(/ /g,'+')
//   let mapURL = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyAdSA9XeaEktTnCMXp1xitlpfYIq9YovvQ&origin=current+location&destination=${addressURL}`
//   mapEl.setAttribute('src',mapURL)
// } else {
//   mapEl.setAttribute('display','hidden')
// }

if(!note) {location.assign('/index.html')} else {document.querySelector('title').textContent = `Edit ${note.title}`}


addressEl.value = note.address
body.value = note.body
title.value = note.title
document.querySelector('#updated-label').textContent = 'Createded At: '+ moment(note.createdAt).format('MM/D/YY h:m')+' | Last Edited: '+ moment(note.updatedAt).fromNow()

body.addEventListener('input',(e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
    document.querySelector('#updated-label').textContent = 'Createded At: '+ moment(note.createdAt).format('MM/D/YY h:m')+' | Last Edited: '+ moment(note.updatedAt).fromNow()

})
title.addEventListener('input',(e) =>{
    note.title =e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
    document.querySelector('#updated-label').textContent = 'Createded At: '+ moment(note.createdAt).format('MM/D/YY h:m')+' | Last Edited: '+ moment(note.updatedAt).fromNow()

})
addressEl.addEventListener('input',(e) =>{
    note.address =e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
    document.querySelector('#updated-label').textContent = 'Createded At: '+ moment(note.createdAt).format('MM/D/YY h:m')+' | Last Edited: '+ moment(note.updatedAt).fromNow()

})


window.addEventListener('storage',(e) => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)
        
        if(!note) {location.assign('/index.html')}
        
        let title = document.querySelector('#note-title')
        let body = document.querySelector('#note-body')
        body.value = note.body
        title.value = note.title
        document.querySelector('#updated-label').textContent = 'Createded At: '+ moment(note.createdAt).format('MM/D/YY h:m')+' | Last Edited: '+ moment(note.updatedAt).fromNow()

    }
})




// document.addEventListener('DOMContentLoaded', function() {
//   codeAddress()
// }, false);

  