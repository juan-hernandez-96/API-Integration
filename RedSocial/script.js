async function buscar(){

    const usuario =
    document.getElementById("usuario").value.trim() + ".bsky.social";
    const resultado =
    document.getElementById("resultado");
    resultado.innerHTML="Cargando...";
    try{
        const respuesta1 =
        await fetch(
        `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${usuario}`
        );
        const datos1 =
        await respuesta1.json();
        const did =
        datos1.did;
        const respuesta2 =
        await fetch(
        `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=${did}&limit=5`
        );

        const datos2 =
        await respuesta2.json();
        resultado.innerHTML="";
        datos2.feed.forEach(post=>{
            resultado.innerHTML +=
            `
            <div class="post">
            <h3>
            ${post.post.author.displayName}
            </h3>
            <p>
            ${post.post.record.text}
            </p>
            <small>
            ${post.post.record.createdAt}
            </small>
            </div>
            `;
        });
    }

    catch(error){
        resultado.innerHTML=
        "Usuario no encontrado.";
        console.log(error);
    }
}