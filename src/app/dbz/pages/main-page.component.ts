import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {
    this.dbzService = dbzService;

  }


  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(characterId: string) {
    this.dbzService.deleteCharacterById(characterId);
  }

  onNewCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }

}
