import React from 'react'
import PropTypes from 'prop-types'
import Ripples from 'react-ripples'

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
      dropdown: true,
    }
  }

  toggleDropdown = () => this.setState({ dropdown: !this.state.dropdown })

  getItemStyle = (itemStyle, item) => {
    if (item.backgroundImage) {
      return {itemStyle, ...{backgroundImage: item.backgroundImage}}
    } else if (item.backgroundColor) {
      return {itemStyle, ...{backgroundColor: item.backgroundColor}}
    } else {
      return itemStyle
    }
  }

  render() {
    const { label, activeItem, items } = this.props;
    const { mainColor, textColor, buttonClass, dropdownClass, itemClass, itemLabelClass } = this.props;
    const { buttonStyle, dropdownStyle, itemStyle, itemLabelStyle } = this.props;
    const { dropdown } = this.state;

    const itemsJSX = items.map((item, index) =>
      <div key={index} className={'react-grid-dropdown__item-container'}>
        <Ripples during={800}>
          <div className={itemClass?itemClass+' react-grid-dropdown__item':'react-grid-dropdown__item'}

            style={this.getItemStyle(itemStyle, item)}
            onClick={() => {
              if (activeItem != item.label) {
                setTimeout(() => {
                  item.onClick()
                  this.toggleDropdown()
                }, 400)
              }
            }}>

            <div className={(itemLabelClass?itemLabelClass+' react-grid-dropdown__label':'react-grid-dropdown__label')+(activeItem==item.label?' active':'')}
              style={itemLabelStyle}>{item.label}</div>
          </div>
        </Ripples>
      </div>);

    return (
      <div className="react-grid-dropdown__container">
        <Ripples during={800}>
          <div className={(buttonClass?buttonClass+' react-grid-dropdown__button':'react-grid-dropdown__button')+(dropdown?' active':'')}
            style={buttonStyle}
            onClick={() => this.toggleDropdown()}>{label}</div>
        </Ripples>

        <div className={(dropdownClass?dropdownClass+' react-grid-dropdown__dropdown':'react-grid-dropdown__dropdown')+(dropdown?' active':'')}
          style={dropdownStyle}>
          {itemsJSX}
        </div>
      </div>
    )
  }
}

export default GridDropdown

if (__DEV__) require('./demo.js')
