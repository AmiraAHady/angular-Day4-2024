import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../models/IMovie';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  allMovies: IMovie[] = [];
  constructor(private movieServ: MoviesService,private router:Router) {}

  ngOnInit(): void {
    this.movieServ.getAllMovies().subscribe((data) => {
      this.allMovies = data.results;
    });
  }
  // goDetails(id:number){
  //   this.router.navigateByUrl(`/details/${id}`)
  // }
}
