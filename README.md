# React-grid-dropdown

[![npm version](https://img.shields.io/npm/v/react-grid-dropdown.svg?style=flat)](https://www.npmjs.com/package/react-grid-dropdown)

## Installation
```shell-script
npm install react-grid-dropdown --save
```

## Usage
```jsx
import GridDropdown from 'react-grid-dropdown'

const { itemId } = this.state;

<GridDropdown
  label="Dropdown"
  activeItem={itemId}
  items={
    [{section: 'category', label: 'item', background: 'https://...', id: 'itemId', onClick: () => this.setState({ item: 'itemId' })}]
  }
/>
```

## Options
<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Description </th>
    <th> Default </th>
  </tr>

  <tr>
    <td> label </td>
    <td colspan="3"> string </td>
  </tr>
  <tr>
    <td> activeItem </td>
    <td> string </td>
    <td colspan="2"> item to recieve 'active' class when pressed </td>
  </tr>
  <tr>
    <td> items </td>
    <td> array </td>
    <td colspan="2"> items to render in the dropdown </td>
  </tr>
  <tr>
    <td> cols </td>
    <td> number </td>
    <td> columns </td>
    <td> 3 </td>
  </tr>
  <tr>
    <td> rows </td>
    <td> number </td>
    <td> rows to show simultaneously </td>
    <td> 3 </td>
  </tr>

  <tr>
    <td> mainColor </td>
    <td> string </td>
    <td colspan="2"> color defining background colors </td>
  </tr>
  <tr>
    <td> textColor </td>
    <td> string </td>
    <td colspan="2"> color defining text colors </td>
  </tr>

  <tr>
    <td> buttonClass </td>
    <td> string </td>
    <td colspan="2"> class for dropdown button </td>
  </tr>
  <tr>
    <td> dropdownClass </td>
    <td> string </td>
    <td colspan="2"> class for dropdown container </td>
  </tr>
  <tr>
    <td> itemClass </td>
    <td> string </td>
    <td colspan="2"> class for each item in the dropdown </td>
  </tr>
  <tr>
    <td> itemTextClass </td>
    <td> string </td>
    <td colspan="2"> class for text of each item </td>
  </tr>

  <tr>
    <td> buttonStyle </td>
    <td> string </td>
    <td colspan="2"> style for dropdown button </td>
  </tr>
  <tr>
    <td> dropdownStyle </td>
    <td> string </td>
    <td colspan="2"> style for dropdown container </td>
  </tr>
  <tr>
    <td> itemStyle </td>
    <td> string </td>
    <td colspan="2"> style for each item in the dropdown </td>
  </tr>
  <tr>
    <td> itemTextStyle </td>
    <td> string </td>
    <td colspan="2"> style for text of each item </td>
  </tr>
</table>

## License
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bl00mber/react-grid-dropdown/blob/master/LICENSE)

Developed by [bl00mber](https://github.com/bl00mber) for [cellular automata generator](https://github.com/bl00mber/cellular-automata).
