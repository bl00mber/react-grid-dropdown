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
      onClick: PropTypes.func.isRequired,
    })).isRequired,

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

  sortItemsBySection = items => {
    const sections = [{section: undefined, items: []}]
    items.map(item => {
      if (!item.section) { sections[0].items.push(item) }
      else {
        // search for index of object with section
        let sectionIndex = sections.findIndex(section => section.section == item.section);
        // if object not found, push new section to the array and set index as [sections.length-1]
        if (sectionIndex == -1) {
          sections.push({section: item.section, items: []})
          sectionIndex = sections.length-1;
        }
        // push item to the index
        sections[sectionIndex].items.push(item)
      }
    })
    return sections
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
    const { label, activeItem } = this.props;
    const { buttonClass, dropdownClass, itemClass, itemLabelClass } = this.props;
    const { buttonStyle, dropdownStyle, itemStyle, itemLabelStyle } = this.props;
    const { dropdown } = this.state;

    // sortItemsBySection :: items -> [{section: undefined, items: [{}]}, {section: 'section 1', items: [{}]} ..]
    const sections = this.sortItemsBySection(this.props.items)

    const itemsJSX = sections.map((section, index) =>
      <div key={index}>
        {section.section && <div className="react-grid-dropdown__section-label">{section.section}</div>}

        {section.items.map((item, index) =>
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
          </div>)}
      </div>)

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
