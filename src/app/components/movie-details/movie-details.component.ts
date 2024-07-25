import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  movieId!: number;
  selectedMovie: any;
  constructor(
    private route: ActivatedRoute,
    private movieServ: MoviesService
  ) {}

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movieServ.getMovieById(this.movieId).subscribe((detailsMovie) => {
      this.selectedMovie = detailsMovie;
    });
  }
}
