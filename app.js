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

/* 
 En JavaScript, chaque ligne de code est exécutée de façon synchrone, mais il est possible de demander à exécuter du code de manière asynchrone. Et lorsque l'on demande à exécuter une fonction de façon asynchrone, la fonction en question est placée dans une sorte de file d'attente qui va exécuter toutes les fonctions qu'elle contient les unes après les autres. C'est ce qu'on appelle l'event loop. Tout le cœur du langage fonctionne autour de ça.

Dans ce chapitre, vous avez appris :

Que le JavaScript est synchrone et mono-thread ;

Que l’event loop est le moteur de JavaScript qui exécute les fonctions JavaScript asynchrones sous forme d’événements ;

Comment utiliser la méthode  setTimeout ;

Qu'il existe d'autres méthodes asynchrones : setInterval, setImmediate ;

Que l'I/O est géré de manière asynchrone avec JavaScript.
 */