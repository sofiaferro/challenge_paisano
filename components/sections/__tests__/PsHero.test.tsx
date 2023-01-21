import React from 'react';
import renderer from 'react-test-renderer';

import { describe, expect, it } from '@jest/globals';

import PsHero from '../PsHero';
describe('PsHero', () => {
  it('renders the component', () => {
    const mockCallback = jest.fn();
    const tree = renderer.create(<PsHero action={mockCallback} />);
    expect(tree).toMatchSnapshot();
  });
});
