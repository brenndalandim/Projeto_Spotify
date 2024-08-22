//manipulação DOM
let artistList = document.querySelector('#artistas')
let topArtistImg = document.querySelector('.tops img')
let topArtistName = document.querySelector('.nomeTopArtista')
let segTopArtist = document.querySelector('.segTopArtista')
let genresList = document.querySelector('#generos')
let topGenero = document.querySelector('.topGenero')

//criar lista de artistas
const createArtistList = (async () => {
    const artists = await getPopArtists()

    //criar linhas da tabela top artistas
    artists.forEach(artist => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${artist.name}</td>
        <td>${(artist.followers.total).toLocaleString('pt-BR')}</td>
        <td>${artist.popularity}</td>
        `
        artistList.append(tr)
    });

    //informações top artista da seleção
    topArtistImg.src = artists[0].images[0].url
    topArtistName.innerHTML = artists[0].name
    segTopArtist.innerHTML = `${(artists[0].followers.total).toLocaleString('pt-BR')} seguidores`
})()

//criar lista de gêneros
const createGenresList = (async () => {
    const genres = await getTopGenres()

    //criar linhas da tabela top gêneros
    genres.forEach((genre, index) => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${index + 1}º ${genre[0]}</td>
        `
        genresList.append(tr)
    });

    //informações top gênero da seleção
    topGenero.innerHTML = genres[0][0]
})()