import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {HeroService} from '../hero.service'
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  hero: Hero;
  

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location:Location
  ){}


  ngOnInit() {
    this.getHeroes();
    /* this.getHero(); */
  }

  getHeroes(): void {
    this.heroService.getHeroesFromService()
          .subscribe(heroes => this.heroes = heroes)
  }

/*   getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroFromserv(id)
          .subscribe(hero=>this.hero=hero)
  } */

}
