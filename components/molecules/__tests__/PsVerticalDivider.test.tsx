import React from 'react';
import renderer from 'react-test-renderer';

import { describe, expect, it } from '@jest/globals';

import PsVerticalDivider from '../PsVerticalDivider';

describe('PsVerticalDivider', () => {
  it('renders the component', () => {
    const tree = renderer.create(<PsVerticalDivider />);
    expect(tree).toMatchSnapshot();
  });
});
