//criar lista de objetos {artista: nome, followers: x}
const createArtistDataList = async () => {
    const popArtists = await getPopArtists()
    return popArtists.map(artist => ({
        artist_name: artist.name,
        followers: artist.followers.total
    }))
}

//criar lista com os generos
const createGenresDataList = async () => {
    const genres = await getTopGenres()
    return genres.map(genres => {
        return genres[0]
    })
}

//criação da requisição POST, porém com erro 401 de autorização negada
const sendPostRequest = (async () => {
    try{
        const artistDataList = await createArtistDataList()
        const genresDataList = await createGenresDataList()
    
        const data = {
            "github_url": "https://github.com/brenndalandim/Projeto_Spotify",
            "name": "Brennda Landim",
            "pop_ranking": artistDataList,
            "genre_ranking": genresDataList
        }
    
        const request = await fetch('https://psel-solution-automation-cf-ubqz773kaq-uc.a.run.app/?access_token=bC2lWA5c7mt1rSPR', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data),
            mode: 'no-cors'
        })

        if (!request.ok) {
            throw new Error('Erro na requisição');
        }
    
        const result = await request.json();
        console.log('Resposta:', result);
    } catch (error) {
        console.error('Erro:', error);
    }
})()