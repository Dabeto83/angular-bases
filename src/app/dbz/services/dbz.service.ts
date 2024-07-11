import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9000 },
    { id: uuid(), name: 'Vegeta', power: 7000 }
  ];

  addCharacter(character: Character): void {
    console.log(character);
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    // const index = this.characters.findIndex(x => x.id === id);
    // this.characters.splice(index, 1);
    this.characters = this.characters.filter(x => x.id !== id);
  }
}
