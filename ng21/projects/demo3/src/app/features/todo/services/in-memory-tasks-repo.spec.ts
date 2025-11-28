import { TestBed } from '@angular/core/testing';

import { InMemoryTasksRepo } from './in-memory-tasks-repo';

describe('InMemoryTasksRepo', () => {
  let service: InMemoryTasksRepo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryTasksRepo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
