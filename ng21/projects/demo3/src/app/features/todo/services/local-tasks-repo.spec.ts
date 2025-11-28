import { TestBed } from '@angular/core/testing';

import { LocalTasksRepo } from './local-tasks-repo';

describe('LocalTasksRepo', () => {
  let service: LocalTasksRepo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalTasksRepo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
