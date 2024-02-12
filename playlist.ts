import { Albums } from "./album";
import { Song } from "./song";


export class Playlist {
    private _title?: string;
    private _songs?: Song[];

    getPlaylist() {
        return this._title
    }

    setPlaylist(theTitle: string) {
        this._title = theTitle;
    }

// Playlists have an addAlbum method which takes an album and extracts all
// the songs from that Album. It takes those songs and adds them to the
// list of songs. 
    addAlbum(titleAlbum: Albums) {
        let listOfTracks:Song[] = [];
        titleAlbum.tracks?.forEach(track => {
            listOfTracks.push(track);
        });
        this._songs = listOfTracks;
    }
}