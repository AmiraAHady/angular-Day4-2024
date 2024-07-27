import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../models/IMovie';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject, Subject, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  allMovies: IMovie[] = [];
  currentPage: BehaviorSubject<number>
  page: number = 1;
  totalPages!: number;
  constructor(private movieServ: MoviesService, private router: Router) {
    this.currentPage=new BehaviorSubject<number>(1)
  }

  ngOnInit(): void {
    this.currentPage.subscribe((newPage) => {
      console.log(newPage);
      this.movieServ.getAllMovies(newPage).subscribe((data) => {
        console.log(data);
        this.allMovies = data.results;
        this.page = data.page;
        this.totalPages = data.total_pages;
      });
    });
  }

  nextPage() {
    this.currentPage.next(++this.page);
  }

  prevPage() {
    this.currentPage.next(--this.page);
  }
}
