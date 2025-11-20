import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Item } from "./item";
import { ItemComponent } from "./item/item"

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule, ItemComponent]
})
export class App {
  componentTitle = "Ma liste de tâches à accomplir";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "manger", done: true },
    { description: "dormir", done: false },
    { description: "jouer", done: false },
    { description: "rire", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
  addItem(description: string) {
    if(!description) return;
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
