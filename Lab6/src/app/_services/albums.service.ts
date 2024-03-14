import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Album } from '../_models/album-model';
import { AlbumPhoto } from '../_models/album-photo-model';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  getAlbums() {
    const localAlbums = localStorage.getItem('albums');
    if (localAlbums) {
      return of(JSON.parse(localAlbums));
    } else {
      return this.httpClient.get<Album[]>(`${this.BASE_URL}/albums`).pipe(
          tap(albums => localStorage.setItem('albums', JSON.stringify(albums)))
      );
    }
  }


  getAlbum(id: number) {
    return this.httpClient.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  addAlbum(album: Album) {
    album.id = new Date().getTime();
    const localAlbums = JSON.parse(localStorage.getItem('albums') || '[]');
    localAlbums.unshift(album);
    localStorage.setItem('albums', JSON.stringify(localAlbums));
    return of(album);
  }


  deleteAlbum(id: number) {
    const localAlbums = JSON.parse(localStorage.getItem('albums') || '[]');
    const updatedAlbums = localAlbums.filter((album: Album) => album.id !== id);
    localStorage.setItem('albums', JSON.stringify(updatedAlbums));
    return of({ id });
  }


  updateAlbum(albumId: number, newTitle: string) {
    const body = { title: newTitle };
    console.log(newTitle);
    return this.httpClient.put<Album>(`${this.BASE_URL}/albums/${albumId}`, body);
  }

  getAlbumPhotos(id: number) {
    return this.httpClient.get<AlbumPhoto[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }
}
