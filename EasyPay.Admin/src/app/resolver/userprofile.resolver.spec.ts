import { TestBed } from '@angular/core/testing';

import { UserProfileResolver } from './userprofile.resolver';

describe('UserprofileResolver', () => {
  let resolver: UserProfileResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserProfileResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
