import React from 'react';
import renderer from 'react-test-renderer';

import { describe, expect, it } from '@jest/globals';

import PsHorizontalDivider from '../PsHorizontalDividerLarge';

describe('PsHorizontalDivider', () => {
  it('renders the component', () => {
    const tree = renderer.create(<PsHorizontalDivider />);
    expect(tree).toMatchSnapshot();
  });
});
