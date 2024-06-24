import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 21;
  public showNameButton: boolean = true;
  public showAgeButton: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeName(): void {
    this.name = 'Spiderman';
    this.showNameButton = false;
  }

  changeAge(): void {
    this.age = 14;
    this.showAgeButton = false;
  }

  resetForm(): void {
    this.showAgeButton = true;
    this.showNameButton = true;
  }
}
