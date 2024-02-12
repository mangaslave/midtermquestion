import { Artists } from "./artist";
import { Song } from "./song";


export class Albums {
    title?: string;
    artist?: Artists;
    year?: number;
    tracks?: Song[];

    constructor(title: string, artist: Artists, year: number) {
        this.title = title;
        this.artist = artist;
        this.year = year;
    }

    getalbumTitle() {
        return this.title
    }

    setalbumTitle(theTitle: string) {
        this.title = theTitle;
    }

    addSong(song: Song) {
        let addList = [];
        addList.push(song);
        this.tracks = addList;
    }
}