import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DirectorInfoComponent } from '../director-info/director-info.component';
import { GenreInfoComponent } from '../genre-info/genre-info.component';
import { MovieViewComponent } from '../movie-view/movie-view.component';

/**
 * Component displayiny the movie card
 * @selector 'app-movie-card'
 * @templateUrls './movie-card.component.html'
 * @styleUrls ['./movie-card.component.scss']
 */
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  movies: any[] = [];
  user: any = {};
  favorites: any[] = [];
  isFavMovie: boolean = false;
  userData = { username: '', favorites: [] };

  /**
   * Called when creating an instance of the class
   * @constructor
   * @param fetchMovies - connects the client to the API via FetchApiDataService
   * @param snackBar - provides feedback after user interaction by displaying notifications
   * @param dialog - opens dialog box
   */
  constructor(
    public fetchMovies: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  //called when Angular is done creating the component, ie once the getMovies() function in line 20 has been executed
  ngOnInit(): void {
    this.getMovies();
    this.getFavMovies();
  }
  //tells the fetch api data service to fetch the movies from the server and return it as the this.movies variable
  getMovies(): void {
    this.fetchMovies.getAllMovies().subscribe((response: any) => {
      this.movies = response;
      console.log(this.movies);
      return this.movies;
    });
  }

  //Opening dialog boxes & displaying Director, Genre & Synopsis info
  openDirectorDialog(
    name: string,
    bio: string,
    birth: string,
    death: string
  ): void {
    this.dialog.open(DirectorInfoComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birth: birth,
        Death: death,
      },
      // Assigning the dialog a width
      width: '400px',
    });
  }

  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreInfoComponent, {
      data: {
        Name: name,
        Description: description,
      },
      width: '400px',
    });
  }

  openSynopsisDialog(description: string): void {
    this.dialog.open(MovieViewComponent, {
      data: {
        Description: description,
      },
      width: '400px',
    });
  }

  getFavMovies(): void {
    this.user = this.fetchMovies.getUser();
    this.userData.favorites = this.user.favorites;
    this.favorites = this.user.favorites;
    console.log('Users fav movies', this.favorites);
  }

  isFavoriteMovie(movieID: string): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.favorites.indexOf(movieID) >= 0;
  }

  addFavMovies(movie: string): void {
    this.user = this.fetchMovies.getUser();
    this.userData.username = this.user.username;
    this.fetchMovies.addFavoriteMovie(movie).subscribe((response) => {
      localStorage.setItem('user', JSON.stringify(response));
      this.getFavMovies();
      this.snackBar.open('Movie has been added to your favorites!', 'OK', {
        duration: 3000,
      });
    });
  }

  removeFavMovies(movie: any): void {
    this.user = this.fetchMovies.getUser();
    this.userData.username = this.user.username;
    this.fetchMovies.deleteFavoriteMovie(movie).subscribe((response) => {
      localStorage.setItem('user', JSON.stringify(response));
      this.getFavMovies();
      this.snackBar.open('Movie has been deleted from your favorites!', 'OK', {
        duration: 3000,
      });
    });
  }
}
