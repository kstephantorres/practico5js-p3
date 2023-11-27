
const agregarTarea = ()=> {
    
    let tarea = document.getElementById('tareaInput').value

    
    if (tarea.trim() !== '') {
      
      let nuevaTarea = document.createElement('li')
      nuevaTarea.className = 'list-group-item tarea-item'

      nuevaTarea.innerHTML = `
        ${tarea}
        <button class="btn btn-danger" onclick="eliminarTarea(this)" id="botonEliminar">Eliminar</button>
      `
      document.getElementById('listaTareas').appendChild(nuevaTarea)
      document.getElementById('tareaInput').value = ''
    }
  }

  const botonAgregar = document.querySelector('#botonAgregar')

  botonAgregar.addEventListener('click',(e)=>{
    e.preventDefault()
    agregarTarea()
  })

const eliminarTarea=(botonEliminar)=>{
    const tareaItem = botonEliminar.closest('.tarea-item')
    tareaItem.remove()
}
