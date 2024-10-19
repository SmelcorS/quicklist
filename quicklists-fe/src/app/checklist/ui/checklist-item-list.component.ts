import { Component, input, output } from '@angular/core';
import {ChecklistItem, EditChecklistItem} from "../../shared/interface/checklist-item";

@Component({
  standalone: true,
  selector: 'app-checklist-item-list',
  template: `
    <section>
      <ul>
        @for (item of checklistItems(); track item.id) {
          <li>
            <div>
              @if (item.checked) {
                <span>✅</span>
              }
              {{ item.title }}
            </div>
            <div>
              <button
                (click)="toggle.emit({ id: item.id, data: { checked: !item.checked } })">
                Toggle
              </button>
              <button (click)="edit.emit(item)">
                Edit
              </button>
              <button (click)="delete.emit(item.id)">
                Delete
              </button>
            </div>
          </li>
        } @empty {
          <div>
            <h2>Add an item</h2>
            <p>
              Click the add button to add your first item to this quicklist
            </p>
          </div>
        }
      </ul>
    </section>
  `,
  styles: [
    `
      ul {
        padding: 0;
        margin: 0;
      }
      li {
        font-size: 1.5em;
        display: flex;
        justify-content: space-between;
        background: var(--color-light);
        list-style-type: none;
        margin-bottom: 1rem;
        padding: 1rem;

        button {
          margin-left: 1rem;
        }
      }
    `,
  ],
})
export class ChecklistItemListComponent {
  checklistItems = input.required<ChecklistItem[]>();
  delete = output<string>();
  edit = output<ChecklistItem>();
  toggle = output<EditChecklistItem>();
}
