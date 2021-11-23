// le mot-clé async montre que la fonction cat est asynchrone
async function cat() {
    //le mot-clé await bloque l'execution du code dans la f cat 
    //jusqu'a la résolution de la promesse , mais le code en dehors 
    //de la fonction asyn peut continuer de tourner 
    const result = await fetch('https://api.thecatapi.com/v1/images/search')
    let data = await result.json()
    document.querySelector('img').src = data[0].url
}
cat()

//fetch('https://api.thecatapi.com/v1/images/search')
//.then(Response => Response.json())
//.then(data => document.querySelector('img').src = data[0].url)