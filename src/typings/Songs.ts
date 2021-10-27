interface Artist {
    name: String
    picture_small: String
}
interface Album {
    title: String
    cover: String
}

interface Songs {
    id: Number
    title: String
    artist: Artist 
    album: Album
}

export default Songs