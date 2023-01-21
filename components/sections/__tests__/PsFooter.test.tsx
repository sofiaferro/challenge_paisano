import React from 'react';
import renderer from 'react-test-renderer';

import { describe, expect, it } from '@jest/globals';

import PsFooter from '../PsFooter';
describe('PsFooter', () => {
  it('renders the component', () => {
    const tree = renderer.create(<PsFooter />);
    expect(tree).toMatchSnapshot();
  });
});
