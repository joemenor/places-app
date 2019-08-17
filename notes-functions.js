'use strict'
// check for existing data
const getSavedNotes = () => {
return localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')):[]
}

const saveNotes = (notes) => {
    localStorage.setItem('notes',JSON.stringify(notes))
}

const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if(noteIndex > -1) {
        notes.splice(noteIndex,1)
    }
}

const generateNoteDom = (note) => {
    const row = document.createElement("tr")
            const titlecell = document.createElement("td")
            const link = document.createElement('a')
            link.setAttribute('href',`/edit.html#${note.id}`)
            if(note.title.length > 0) {
            link.textContent = note.title} else {link.textContent ='Unnamed Note'}
            titlecell.style.fontWeight="bold"
            titlecell.style.fontFamily="verdana"
            const bodycell = document.createElement("td")
            bodycell.textContent = note.body
                var checkbox = document.createElement("input")
                checkbox.type = "checkbox"
            const deleteButton = document.createElement('button')
                deleteButton.textContent = 'X'
                deleteButton.addEventListener('click', ()=> {
                    removeNote(note.id)
                    saveNotes(notes)
                    showNotes(notes,filters)
                })

            titlecell.appendChild(link)
            row.appendChild(deleteButton)
            row.appendChild(checkbox)
            row.appendChild(titlecell)
            row.appendChild(bodycell)
            notetable.appendChild(row)
} 

const sortNotes = (notes,sortBy) => {
    if (sortBy === 'byedited') { 
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'bycreated') { 
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byalphabetically') { 
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return 1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1
            } else {
                return 0
            }
        })
    }

}


const generateNoteCards = (note) => {
    const notecards = document.querySelector('#note-cards-div')
    const cardmaps = document.querySelector('#card-maps-div')
    const card = document.createElement("div")
        card.setAttribute('id',`card-${note.id}`)
        card.setAttribute('class','card')
    const container = document.createElement("div")
        container.setAttribute('class','container')
            const link = document.createElement('a')
                link.setAttribute('href',`/edit.html#${note.id}`)
                link.setAttribute('class','title-link')
            const title = document.createElement("h3")
                title.setAttribute('class','title-head')
                if(note.title.length > 0) {
                link.textContent = note.title} else {link.textContent ='Unnamed Note'}
            title.appendChild(link)
            const bodyP = document.createElement("p")
                bodyP.textContent = note.body
            const deleteButton = document.createElement('button')
                const deleteIcon = document.createElement('i')
                    deleteIcon.setAttribute('class','far fa-trash-alt')
                    deleteButton.appendChild(deleteIcon)
                deleteButton.setAttribute('class','delete-button')
                deleteButton.addEventListener('click', ()=> {
                    removeNote(note.id)
                    saveNotes(notes)
                    showNotes(notes,filters)
                })
  
  
    

            
            
            card.appendChild(bodyP)
            card.appendChild(container)
            container.appendChild(title)
            container.appendChild(deleteButton)
            notecards.appendChild(card)
  
  
} 














const showNotes = (notes,filters) => {
    notes = sortNotes(notes,filters.sortBy)
    const notecards = document.querySelector('#note-cards-div')
    notecards.innerHTML = ""
const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText) || note.body.toLowerCase().includes(filters.searchText))
filteredNotes.forEach((note) => generateNoteCards(note))
}






function initMap(center,id) {
  let map
        // Styles a map in night mode.
  console.log(id)
  console.log(typeof id)
        map = new google.maps.Map(document.getElementById(id), {
          center: center,
          zoom: 15,
          disableDefaultUI: true,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
  var image = 'https://cdn.glitch.com/ecb3536a-ff35-40a8-ac25-20fba08418e2%2Ffulcrum.png?v=1565912349687'
  var marker = new google.maps.Marker({
            map: map,
            position: center,
            icon: image
        });
}

function codeAddress(address,id) {
  let geocoder
  console.log('start codeAddress')
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        initMap(results[0].geometry.location,id);
        
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  console.log('finish codeAddress')
  }



