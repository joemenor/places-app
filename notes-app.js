let notes = getSavedNotes()
const filters = {
    searchText:'',
    sortBy: 'byedited'
}



showNotes(notes,filters)

document.querySelector('#sortby').addEventListener('change', (e) => {
    filters.sortBy = e.target.options[e.target.selectedIndex].id
    console.log(e.target.options[e.target.selectedIndex].id)
    showNotes(notes,filters)
})



document.querySelector('#new-note-form').addEventListener('submit',(e) => {
    e.preventDefault()
    const id = uuidv4()
    const createdAt = moment().valueOf()
    let updatedAt = createdAt
    notes.push({
        id: id,
        title:e.target.elements.title.value,
        body: e.target.elements.body.value,
        createdAt: createdAt,
        updatedAt: updatedAt,
        address: '5222 Tioga St Duluth MN 55804'
    })
    e.target.elements.body.value = ''
    e.target.elements.title.value = ''
    saveNotes(notes)
    showNotes(notes,filters)
    })
    
    
const searchListener = document.querySelector('#inputbox').addEventListener('input',(e) => {
            filters.searchText = e.target.value.toLowerCase()
            showNotes(notes,filters)
        })

window.addEventListener('storage',(e) =>{
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        showNotes(notes,filters)
    }
})





