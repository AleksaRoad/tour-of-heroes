import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero';
import { ActivatedRoute } from '@angular/router';
import { Location, NgIf, UpperCasePipe } from '@angular/common';

import { HeroService } from '../services/hero.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
    standalone: true,
    imports: [
        NgIf,
        FormsModule,
        UpperCasePipe,
    ],
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
