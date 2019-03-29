import React from 'react'
import TestUtils from 'react-dom/test-utils'
import GridDropdown from '../src/index'

describe('GridDropdown', () => {
  test('item label contains text: 1 item', () => {
    const grid = TestUtils.renderIntoDocument(
      <GridDropdown
        items={[{label: '1 item', onClick: () => {}}]}
      />);
    const itemLabel = TestUtils.findRenderedDOMComponentWithClass(grid, 'react-grid-dropdown__label');
    expect(itemLabel.textContent).toBe('1 item');
  })

  test('section label contains text: Colors', () => {
    const grid = TestUtils.renderIntoDocument(
      <GridDropdown
        items={[{section: 'Colors', label: '1 item', onClick: () => {}}]}
      />);
    const sectionLabel = TestUtils.findRenderedDOMComponentWithClass(grid, 'react-grid-dropdown__section-label');
    expect(sectionLabel.textContent).toBe('Colors');
  })

  test('item label has the class .active', () => {
    const grid = TestUtils.renderIntoDocument(
      <GridDropdown
        activeItem={'1 item'}
        items={[{label: '1 item', onClick: () => {}}]}
      />);
    const itemLabel = TestUtils.findRenderedDOMComponentWithClass(grid, 'react-grid-dropdown__label');
    expect(itemLabel.classList.contains('active')).toBe(true);
  })

  test('item is rendered after the section label: Colors', () => {
    const grid = TestUtils.renderIntoDocument(
      <GridDropdown
        items={[{section: 'Colors', label: '1 item', onClick: () => {}}]}
      />);
    const itemContainer = TestUtils.findRenderedDOMComponentWithClass(grid, 'react-grid-dropdown__item-container');
    expect(itemContainer.previousSibling.textContent).toBe('Colors');
  })

  test('dropdown renders 4 items', () => {
    const grid = TestUtils.renderIntoDocument(
      <GridDropdown
        items={[
          {label: '1 item', onClick: () => {}},
          {label: '2 item', onClick: () => {}},
          {label: '3 item', onClick: () => {}},
          {label: '4 item', onClick: () => {}},
        ]}
      />);
    const dropdown = TestUtils.findRenderedDOMComponentWithClass(grid, 'react-grid-dropdown__dropdown');
    expect(dropdown.children[0].children.length).toBe(4);
  })

  test('item backgroundColor is red', () => {
    const grid = TestUtils.renderIntoDocument(
      <GridDropdown
        items={[{label: '1 item', backgroundColor: 'red', onClick: () => {}}]}
      />);
    const item = TestUtils.findRenderedDOMComponentWithClass(grid, 'react-grid-dropdown__item');
    expect(item.style.backgroundColor).toBe('red');
  })
});
