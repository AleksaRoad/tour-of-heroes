import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../../core/models/hero';
import { HeroService } from '../../core/services/hero/hero.service';
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  standalone: true,
  imports: [NgFor, RouterLink, AsyncPipe],
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
