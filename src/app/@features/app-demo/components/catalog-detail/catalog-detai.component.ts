import { Component, inject, linkedSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';

interface Category {
  id: string;
  items: string[];
}

@Component({
  selector: 'app-catalog-detail',
  imports: [JsonPipe],
  template: `
  <h1>Signal-based state store with Linked-signal and signal</h1>
  
  @if (productResource.isLoading()) {
      <p>Loading product details...</p>
    } @else if (productResource.error()) {
      <p>Failed to load product.</p>
    } @else {
      <pre>{{ productResource.value() | json }}</pre>
    }
  `
})
export class CatalogDetailComponent {
  private readonly http = inject(HttpClient);
  readonly categories = signal<Category[]>([
    { id: '1', items: ['Item A', 'Item B'] },
    { id: '2', items: ['Item C', 'Item D'] }
  ]);

  readonly selectedCategory = signal<Category | null>(this.categories()[0]);

  // Automatically resets to items[0] whenever selectedCategory changes,
  // while still remaining writable when the user clicks a different item.
  readonly selectedItem = linkedSignal<Category | null, string | undefined>({
    source: this.selectedCategory,
    computation: (category) => category?.items[0]
  });

  // Automatically cancels in-flight HTTP requests when selectedItem changes
  readonly productResource = rxResource({
    params: () => this.selectedItem(),
    stream: ({ params: itemId }) => this.http.get(`/api/products/${itemId}`)
  });
}