import { Component, OnInit } from '@angular/core';
import { Album } from '../_models/album-model';
import { AlbumsService } from '../_services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  newAlbum: Album;

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.newAlbum = new Album();
  }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((albums) => {
      // subscribe метод из библиотеки RxJS, для обработки асинхронных потоков данных, таких как HTTP-запросы.
      this.albums = albums;
    });
  }

  getAlbums(): void {
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  addAlbum(): void {
    this.albumsService.addAlbum(this.newAlbum).subscribe((album) => {
      this.albums.unshift(album);
      // unshift добавляет один или несколько элементов в начало массива и возвращает новую длину массива.
      this.newAlbum = new Album();
    });
  }

  updateAlbum(albumId: number, newTitle: string): void {
    const updatedAlbumIndex = this.albums.findIndex(album => album.id === albumId);
    if (updatedAlbumIndex !== -1) {
      this.albumsService.updateAlbum(albumId, newTitle).subscribe(updatedAlbum => {
        this.albums[updatedAlbumIndex] = updatedAlbum;
      });
    }
  }

  deleteAlbum(albumId: number): void {
    this.albumsService.deleteAlbum(albumId).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== albumId); // Filter создает новый массив со всеми элементами, прошедшими проверку, реализованную предоставленной функцией.
    });
  }

}
