async function buscarCancion(){

    const texto =
    document.getElementById("buscar").value;
    const respuesta = await fetch(
    `http://localhost:3000/buscar?q=${encodeURIComponent(texto)}`
);

    const datos =
    await respuesta.json();
    const cancion =
    datos.data[0];
    document.getElementById("resultado").innerHTML=
    `
    <div class="card">
    <h2>
    ${cancion.title}
    </h2>
    <h3>
    ${cancion.artist.name}
    </h3>
    <p>
    Álbum:
    ${cancion.album.title}
    </p>
    <img
    src="${cancion.album.cover_medium}">
    <br><br>
    <audio controls>
    <source
    src="${cancion.preview}"
    type="audio/mp3">
    </audio>
    </div>
    `;
}