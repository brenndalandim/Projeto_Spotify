const clientId = 'c0d5f92aa50940c5959875652bd69390';
const clientSecret = '70265c7c1e1a48b59377fb40ac9a3041';

//pegar o token do spotify
const getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    })

    const data = await result.json();
    return data.access_token;
}

//retornar a lista de artistas de acordo com os IDs e o token
const getArtists = async (token, artistId) => {
    const result = await fetch (`https://api.spotify.com/v1/artists?ids=${artistId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const data = await result.json();
    return data.artists
}

//listar artistas alimentando com token e os IDs
const listArtists = async () => {
    const token = await getToken();
    const artistsId = '6eUKZXaKkcviH0Ku9w2n3V,1dfeR4HaWDbWqFHLkxsg1d,66CXWjxzNUsdJxJ2JdwvnR,04gDigrS5kc9YWfZHwBETP,53XhwfbYqKCa1cC15pYq2q,7dGJo4pcD2V6oG8kP0tJRR,1HY2Jd0NmPuamShAr6KMms,4gzpq5DPGxSnKTe4SA8HAU,6vWDO969PvNqNYHIOW5v0m,0du5cEVh5yTK9QJze8zA0C,5pKCCKE2ajJHZ9KAiaK11H,0EmeFodog0BfCgMzAIvKQp,1uNFoZAHBGtllmzznpCI3s,6S2OmqARrzebs0tKUEyXyp,06HL4z0CvFAxyc27GXpf02';

    return getArtists(token, artistsId)
}

//definir os artistas com genero Pop
const getPopArtists = async () => {
    const artists = await listArtists()

    //lista filtrada com os artistas com genero Pop
    const popArtists = artists.filter(
        function(artist){
            return artist.genres.includes('pop')
        }
    )

    //ordenação da lista de cantores pop de acordo com o número de seguidores em ordem decrescente
    const sortPopArtists = popArtists.sort((a,b) => b.followers.total - a.followers.total)

    return sortPopArtists;
}

//definir a lista com top 5 gêneros dos artistas listados
const getTopGenres = async () => {
    const artists = await listArtists()

    //contar a frequência de cada gênero
    const contarGeneros = artists.reduce((contador, cantor) => {
        cantor.genres.forEach(genero => {
            contador[genero] = (contador[genero] || 0) + 1;
        });
        return contador;
    }, {});

    //converter o objeto contador em uma lista de pares [gênero, contagem]
    const generosArray = Object.entries(contarGeneros);

    //ordenar os gêneros pela contagem em ordem decrescente
    generosArray.sort((a, b) => b[1] - a[1]);

    //obter os 5 gêneros mais frequentes
    const top5Generos = generosArray.slice(0, 5);

    return top5Generos;
}