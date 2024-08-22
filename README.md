# Spotify Data - Informações sobre artistas
Utilizando a API do Spotify, recolhe dados de artistas selecionados e retorna uma lista ordenada por quantidade de seguidores de artistas de gênero Pop e uma lista dos gêneros mais comuns entre esses mesmo artistas.

Página web construída de forma básica para não tirar o foco principal de mostrar os dados finais de forma clara e objetiva.

[Acesse aqui!](https://brenndalandim.github.io/Projeto_Spotify/)

## Possíveis implementações
- Função de adicionar novos IDs à base de dados através de um ```input``` na tela com uso de react.
- Seleção em tela do gênero desejado para listar artistas.
- Seleção em tela da ordenação por quantidade de seguidores ou popularidade.

> Aviso: Requisição POST para envio dos dados manipulados a link externo com erro 401, autorização negada.

## Tecnologias
- HTML
- CSS
- JavaScript
- Spotify API 

## Uso
Por enquanto, para buscar novos dados, é necessário alterar o código internamente para novas pesquisas.
- **IDs de artistas**:
```main.js:35```
```
const listArtists = async () => {
    const token = await getToken();
    const artistsId = '<IDs dos artistas separados por vírgula e sem espaço>';

    return getArtists(token, artistsId)
}
```

- **Gênero para filtrar artistas**:
```main.js:47```
```
const popArtists = artists.filter(
        function(artist){
            return artist.genres.includes('<gênero com letras minúsculas>')
        }
    )
```

- **Tipo de ordenação da lista**:
```main.js:52```

Checar documentação da API para decidir, alguns exemplos:

-- por quantidade de seguidor: .followers.total

-- por popularidade: .popularity

descrescente:
```
const sortPopArtists = popArtists.sort((a,b) => b.<ordenação> - a.<ordenação>)
```
crescente:
```
const sortPopArtists = popArtists.sort((a,b) => a.<ordenação> - b.<ordenação>)
```

## Redes
[Linkedin](https://www.linkedin.com/in/brenndalandim/)

[Github](https://github.com/brenndalandim)
