import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

class GridDropdown extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    activeItem: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    cols: PropTypes.number,
    rows: PropTypes.number,

    mainColor: PropTypes.string,
    textColor: PropTypes.string,

    buttonClass: PropTypes.string,
    dropdownClass: PropTypes.string,
    itemClass: PropTypes.string,
    itemTextClass: PropTypes.string,

    buttonStyle: PropTypes.objectOf(PropTypes.string),
    dropdownStyle: PropTypes.objectOf(PropTypes.string),
    itemStyle: PropTypes.objectOf(PropTypes.string),
    itemTextStyle: PropTypes.objectOf(PropTypes.string),
  }

  static defaultProps = {
    label: 'Dropdown',
    activeItem: 'not set',
    cols: 3,
    rows: 3,

    mainColor: 'red'
    textColor: 'white',
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { label, activeItem, items, cols, rows } = this.props;
    const { mainColor, textColor, buttonClass, dropdownClass, itemClass, itemTextClass } = this.props;
    const { buttonStyle, dropdownStyle, itemStyle, itemTextStyle } = this.props;

    return (
      <div>

      </div>
    )
  }
}

export default GridDropdown

if (__DEV__) require('./demo.js')
