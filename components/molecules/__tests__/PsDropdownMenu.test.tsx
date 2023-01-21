import React from 'react';
import renderer from 'react-test-renderer';

import { describe, expect, it } from '@jest/globals';

import PsDropdownMenu from '../PsDropdownMenu';

const options = [
  { text: 'opt 1', value: 1 },
  { text: 'opt 2', value: 2 },
  { text: 'opt 3', value: 3 },
];

describe('PsDropdownMenu', () => {
  it('renders the component', () => {
    const mockCallback = jest.fn();
    const tree = renderer.create(
      <PsDropdownMenu
        options={options}
        defaultPlaceholder={'test placeholder'}
        onChange={mockCallback}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
