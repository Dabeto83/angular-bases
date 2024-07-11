import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input({ required: true })
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }
  ];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacter(id: string): void {
    this.onDeleteCharacter.emit(id);
  }
}
