import { Albums } from "./album"
import { Song } from "./song"


export interface IIportable {
    playlist: {
        albums: [
            name: Albums.getalbumTitle;
            tracks: Song[];
        ]
    }
}