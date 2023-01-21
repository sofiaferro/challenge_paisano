import React from 'react';
import renderer from 'react-test-renderer';

import { describe, expect, it } from '@jest/globals';

import PsButton from '../PsButton';
describe('PsButton', () => {
  it('renders the component', () => {
    const mockCallback = jest.fn();
    const tree = renderer.create(
      <PsButton title={'test button'} onClick={mockCallback} />
    );
    expect(tree).toMatchSnapshot();
  });
});
