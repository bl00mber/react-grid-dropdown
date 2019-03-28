import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

class GridDropdown extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    activeItem: PropTypes.string,

    items: PropTypes.arrayOf(PropTypes.shape({
      section: PropTypes.string,
      label: PropTypes.string.isRequired,
      background: PropTypes.string,
      onClick: PropTypes.func,
    })).isRequired,

    cols: PropTypes.number,
    rows: PropTypes.number,

    mainColor: PropTypes.string,
    textColor: PropTypes.string,

    buttonClass: PropTypes.string,
    dropdownClass: PropTypes.string,
    itemClass: PropTypes.string,
    itemLabelClass: PropTypes.string,

    buttonStyle: PropTypes.objectOf(PropTypes.string),
    dropdownStyle: PropTypes.objectOf(PropTypes.string),
    itemStyle: PropTypes.objectOf(PropTypes.string),
    itemLabelStyle: PropTypes.objectOf(PropTypes.string),
  }

  static defaultProps = {
    label: 'Dropdown',
    activeItem: 'not set',
    cols: 3,
    rows: 3,

    mainColor: 'red',
    textColor: 'white',

    buttonStyle: {},
    dropdownStyle: {},
    itemStyle: {},
    itemLabelStyle: {},
  }

  constructor(props) {
    super(props)

    this.state = {
      dropdown: false,
    }
  }

  toggleDropdown = () => this.setState({ dropdown: true })

  getItemStyle = (item, itemLabelStyle) => {
    if (item.backgroundImage) {
      return {itemLabelStyle, ...{backgroundImage: item.backgroundImage}}
    } else if (item.backgroundColor) {
      return {itemLabelStyle, ...{backgroundColor: item.backgroundColor}}
    } else {
      return itemLabelStyle
    }
  }

  render() {
    const { label, activeItem, items, cols, rows } = this.props;
    const { mainColor, textColor, buttonClass, dropdownClass, itemClass, itemLabelClass } = this.props;
    const { buttonStyle, dropdownStyle, itemStyle, itemLabelStyle } = this.props;
    const { dropdown } = this.state;

    const itemsJSX = items.map((item, index) =>
      <div key={index}
        className={itemClass?itemClass+' react-grid-dropdown__item':'react-grid-dropdown__item'}
        style={this.getItemStyle(item, itemStyle)}>
        <div className={itemLabelClass?itemLabelClass+' react-grid-dropdown__label':'react-grid-dropdown__label'}
          style={itemLabelStyle}>{item.label}</div>
      </div>);

    return (
      <div className="react-grid-dropdown__container">
        <div className={buttonClass?buttonClass+' react-grid-dropdown__button':'react-grid-dropdown__button'}
          style={buttonStyle}
          onMouseEnter={() => this.toggleDropdown()}>{label}</div>

        {dropdown && <div className={dropdownClass?dropdownClass+' react-grid-dropdown__dropdown':'react-grid-dropdown__dropdown'}
          style={dropdownStyle}>
          {itemsJSX}
        </div>}
      </div>
    )
  }
}

export default GridDropdown

if (__DEV__) require('./demo.js')
