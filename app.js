const createForm = document.querySelector('#createNote')
const titleInput = createForm.title
const descriptionInput = createForm.description


createForm.onsubmit = function (evt) {
    evt.preventDefault()

    if(!titleInput.value.trim() || !descriptionInput.value.trim()) {
        let maria = 'Title or description cannot be empty'
        alert(maria)
        throw new Error(maria)
        
    }

    console.clear()

    let stickyNote = {
        title: titleInput.value,
        description: descriptionInput.value,
        date_created: new Date().toDateString()
    }

    console.log(stickyNote)
    notes.innerHTML += generateStickyNote(stickyNote)
    titleInput.value = ''
    descriptionInput.value = ''

}

function generateStickyNote (note) {
    return `
    <div class="sticky-note">
        <h2 class="note-title">${note.title}</h2>
        <p class="note-description">${note.description}</p>
        <p class="note-date">Created: ${note.date_created}</p>
    </div>

    `

}