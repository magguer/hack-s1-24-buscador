const contenido = document.querySelector("#tabla-contenido");
const contenidoSearch = document.querySelector("#tabla-contenido-search");
const search = document.querySelector("#search-input");

//Fetch de datos
fetch("https://gist.githubusercontent.com/SuecoMarcus/a77af69f0e84c3125a5c0cf43a3ac41b/raw/918cd058b7e2286a36e79643c63a5ebca097d7c8/users.json")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        let dataCopy = data
        tabla(dataCopy)
    });

const tabla = (dataCopy) => {
    contenido.innerHTML = ""
    // Tabla por defecto al inciar
    for (let usuario of dataCopy) {
        contenido.innerHTML +=
            `
      <tr>
            <th>${usuario.id}</th>
            <td>${usuario.firstname}</td>
            <td>${usuario.lastname}</td>
            <td>${usuario.age}</td>
      </tr>
    `
    }
    // Tabla con busqueda del usuario
    search.addEventListener("input", (event) => {
        contenidoSearch.innerHTML = ""
        let userWord = event.target.value
        let usuarioFiltrado = dataCopy.filter(usuario => {
            return (usuario.firstname + usuario.lastname + usuario.age + usuario.id).toLowerCase().includes(userWord.toLowerCase())
        })
        if (event.target.value === "") {
            for (let usuario of dataCopy) {
                contenidoSearch.innerHTML = ""
                contenido.innerHTML +=
                    `
              <tr>
                    <th>${usuario.id}</th>
                    <td>${usuario.firstname}</td>
                    <td>${usuario.lastname}</td>
                    <td>${usuario.age}</td>
              </tr>
            `
            }
        } else {
            for (let usuario of usuarioFiltrado) {
                contenido.innerHTML = ""
                contenidoSearch.innerHTML +=
                    `
          <tr>
                <th>${usuario.id}</th>
                <td>${usuario.firstname}</td>
                <td>${usuario.lastname}</td>
                <td>${usuario.age}</td>
          </tr>
        `
            }
        }
    }
    )

}


