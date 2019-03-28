import React from 'react'
import { render } from 'react-dom'
import GridDropdown from './index'

import background1 from '../test/assets/background1.jpeg'
import background2 from '../test/assets/background2.jpeg'
import background3 from '../test/assets/background3.jpeg'

class TestComponent extends React.Component {
  static defaultProps = {
    theme: {
      mainColor: 'red',
      textColor: 'white',
    },
    classes: {
      buttonClass: 'button-class',
      dropdownClass: 'dropdown-class',
      itemClass: 'item-class',
      itemLabelClass: 'item-label-class',
    },
    styles: {
      buttonStyle: {},
      dropdownStyle: {},
      itemStyle: {},
      itemLabelStyle: {},
    },
  }

  constructor(props) {
    super(props);

    this.state = {
      activeItem: '1 item',
      items: [
        {section: '1 section', label: '1 item', backgroundImage: `url(${background1})`, onClick: () => this.setActiveItem('1 item')},
        {section: '1 section', label: '2 item', backgroundImage: `url(${background2})`, onClick: () => this.setActiveItem('2 item')},
        {section: '1 section', label: '3 item', backgroundImage: `url(${background3})`, onClick: () => this.setActiveItem('3 item')},
        {section: '2 section', label: '4 item', backgroundImage: `url(${background2})`, onClick: () => this.setActiveItem('4 item')},
        {section: '2 section', label: '5 item', backgroundImage: `url(${background1})`, onClick: () => this.setActiveItem('5 item')},
        {section: '2 section', label: '6 item', backgroundImage: `url(${background3})`, onClick: () => this.setActiveItem('6 item')},
        {section: '2 section', label: '7 item', backgroundColor: 'blue', onClick: () => this.setActiveItem('7 item')},
        {section: '2 section', label: '8 item', backgroundColor: 'blue', onClick: () => this.setActiveItem('8 item')},
        {section: '2 section', label: '9 item', backgroundColor: 'blue', onClick: () => this.setActiveItem('9 item')},
        {section: '2 section', label: '10 item', backgroundColor: 'blue', onClick: () => this.setActiveItem('10 item')},
        {section: '2 section', label: '11 item', backgroundColor: 'blue', onClick: () => this.setActiveItem('11 item')},
        {section: '2 section', label: '12 item', backgroundColor: 'blue', onClick: () => this.setActiveItem('12 item')},
        {label: '13 item'},
      ],
    }
  }

  setActiveItem = (itemLabel) => this.setState({ activeItem: itemLabel })

  render() {
    const { theme, classes, styles } = this.props;
    const { activeItem, items } = this.state;

    return (
      <div>
        <GridDropdown
          label="Dropdown"
          activeItem={activeItem}
          items={items}
          cols={3}
          rows={3}

          mainColor={theme.mainColor}
          textColor={theme.textColor}

          buttonClass={classes.buttonClass}
          dropdownClass={classes.dropdownClass}
          itemClass={classes.itemClass}
          itemLabelClass={classes.itemLabelClass}

          buttonStyle={styles.buttonStyle}
          dropdownStyle={styles.dropdownStyle}
          itemStyle={styles.itemStyle}
          itemLabelStyle={styles.itemLabelStyle}
        />
      </div>
    )
  }
}

export default render(
  <TestComponent />, document.getElementById('root')
)
