import { Albums } from "./album";


export class Artists {
    artistname?: string;
    albums?: Albums[];

    constructor(name: string){
        this.artistname = name;
    }

    addAlbum(newAlbum: Albums) {
        return this.albums?.push(newAlbum);
    }
}