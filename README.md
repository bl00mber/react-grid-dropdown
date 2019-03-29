# React-Grid-Dropdown

[![npm version](https://img.shields.io/npm/v/react-grid-dropdown.svg?style=flat)](https://www.npmjs.com/package/react-grid-dropdown)
[![travis build](https://travis-ci.org/bl00mber/react-grid-dropdown.svg?branch=master)](https://travis-ci.org/bl00mber/react-grid-dropdown)

![alt tag](https://media.giphy.com/media/1xNTls2oKiJhIaqyBM/giphy.gif)

## Installation
```shell-script
npm install react-grid-dropdown --save
```

## Usage
```jsx
import GridDropdown from 'react-grid-dropdown'

const { itemId } = this.state;

<GridDropdown
  activeItem={itemId}
  items={
    [{section: 'category', label: 'item', backgroundImage: `url(${url})` onClick: () => this.setState({ activeItem: 'itemId' })}]
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
    <td> itemLabelClass </td>
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
    <td> itemLabelStyle </td>
    <td> string </td>
    <td colspan="2"> style for text of each item </td>
  </tr>
</table>

## Item
<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Default </th>
  </tr>

  <tr>
    <td> section </td>
    <td> string </td>
    <td> undefined </td>
  </tr>
  <tr>
    <td> label </td>
    <td> string </td>
    <td> dropdown </td>
  </tr>
  <tr>
    <td> backgroundImage </td>
    <td colspan="2"> string, url </td>
  </tr>
  <tr>
    <td> backgroundColor </td>
    <td colspan="2"> string, color </td>
  </tr>
  <tr>
    <td> onClick </td>
    <td colspan="2"> func </td>
  </tr>
</table>


## License
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bl00mber/react-grid-dropdown/blob/master/LICENSE)

Developed by [bl00mber](https://github.com/bl00mber) for [cellular automata generator](https://github.com/bl00mber/cellular-automata)
