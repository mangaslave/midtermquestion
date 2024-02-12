import { Albums } from "./album";
import { Playlist } from "./playlist";


export class User {
    private _username?: string;
    private _password?: string;
    playlists?: Playlist[];
    albums?: Albums[];

    addPlaylist(title: string) {

    }

    addAlbum() {

    }

// A user has a getSongs method (extracts all songs from all albums)
// A user has a getAlbums method
// A user has a getPlaylists method
}