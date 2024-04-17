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

  getAlbums() { // Observable позволяет реагировать на асинхронные данные, когда они поступают, например, от сервера.
    const localAlbums = localStorage.getItem('albums');
    if (localAlbums) {
      return of(JSON.parse(localAlbums));
      // of это функция из библиотеки RxJS, которая создаёт Observable из статических данных
    } else {
      return this.httpClient.get<Album[]>(`${this.BASE_URL}/albums`).pipe(
          // pipe Это метод из RxJS, который позволяет комбинировать операторы, которые могут изменять, фильтровать, обрабатывать поток данных в Observable
          tap(albums => localStorage.setItem('albums', JSON.stringify(albums)))
          // tap используется для того, чтобы при каждом успешном ответе от сервера сохранить полученные данные об альбомах в локальное хранилище
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
    // Filter создает новый массив со всеми элементами, прошедшими проверку, реализованную предоставленной функцией.
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
