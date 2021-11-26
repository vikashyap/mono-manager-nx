import { render } from '@testing-library/react';

import SharedBook from './shared-book';

describe('SharedBook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedBook />);
    expect(baseElement).toBeTruthy();
  });
});
