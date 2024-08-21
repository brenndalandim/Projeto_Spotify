let artistList = document.querySelector('#artistas')
let topArtistImg = document.querySelector('.topArtista img')
let topArtistName = document.querySelector('.nomeTopArtista')
let segTopArtist = document.querySelector('.segTopArtista')
let genresList = document.querySelector('#generos')
let topGenero = document.querySelector('.topGenero')

const createArtistList = (async () => {
    const artists = await getPopArtists()

    artists.forEach(artist => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${artist.name}</td>
        <td>${artist.followers.total}</td>
        <td>${artist.popularity}</td>
        `
        artistList.append(tr)
    });

    topArtistImg.src = artists[0].images[0].url
    topArtistName.innerHTML = artists[0].name
    segTopArtist.innerHTML = `${artists[0].followers.total} seguidores`
})()

const createGenresList = (async () => {
    const genres = await getTopGenres()
    cont = 1

    genres.forEach(genre => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${cont}º ${genre[0]}</td>
        `
        genresList.append(tr)
        cont++
    });

    topGenero.innerHTML = genres[0][0]
})()