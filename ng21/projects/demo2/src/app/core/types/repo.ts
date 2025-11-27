import { Observable } from "rxjs";

export interface Repo<E extends { id: string | number }, DTO = Omit<E, 'id'>> {
  // CRUD operations
  getAll(): Promise<E[]>;
  getByID(id: E['id']): Promise<E>; // throws error if not found
  create(data: DTO): Promise<E>;
  update(id: E['id'], data: Partial<DTO>): Promise<E>; // throws error if not found
  delete(id: E['id']): Promise<void>; // throws error if not found
}


export interface RepoRx<E extends { id: string | number }, DTO = Omit<E, 'id'>> {
  // CRUD operations cons RxJS
  getAll(): Observable<E[]>;
  getByID(id: E['id']): Observable<E>; // throws error if not found
  create(data: DTO): Observable<E>;
  update(id: E['id'], data: Partial<DTO>): Observable<E>; // throws error if not found
  delete(id: E['id']): Observable<void>; // throws error if not found
}
