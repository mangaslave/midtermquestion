

export class Song {
    title?: string;

    constructor(song: string) {
        this.title = song
    }

    get song() {
        return this.title
    }

    setSong(song: string) {
        // let songs = this.title?.push(song);
        this.title = song;
    }

}