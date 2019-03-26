import React from 'react'
import { render } from 'react-dom'
import GridDropdown from './index'

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
      itemTextClass: 'item-text-class',
    },
    styles: {
      buttonStyle: 'button-style',
      dropdownStyle: 'dropdown-style',
      itemStyle: 'item-style',
      itemTextStyle: 'item-text-style',
    },
  }

  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'itemId1',
      items: [
        {section: '1 section', label: '1 item', background: '', onClick: () => this.setActiveItem('1 item')},
        {section: '1 section', label: '2 item', background: '', onClick: () => this.setActiveItem('2 item')},
        {section: '1 section', label: '3 item', background: '', onClick: () => this.setActiveItem('3 item')},
        {section: '2 section', label: '4 item', background: '', onClick: () => this.setActiveItem('4 item')},
        {section: '2 section', label: '5 item', background: '', onClick: () => this.setActiveItem('5 item')},
        {section: '2 section', label: '6 item', background: '', onClick: () => this.setActiveItem('6 item')},
        {section: '2 section', label: '7 item', background: '', onClick: () => this.setActiveItem('7 item')},
        {section: '2 section', label: '8 item', background: '', onClick: () => this.setActiveItem('8 item')},
        {section: '2 section', label: '9 item', background: '', onClick: () => this.setActiveItem('9 item')},
        {section: '2 section', label: '10 item', background: '', onClick: () => this.setActiveItem('10 item')},
        {section: '2 section', label: '11 item', background: '', onClick: () => this.setActiveItem('11 item')},
        {section: '2 section', label: '12 item', background: '', onClick: () => this.setActiveItem('12 item')},
      ],
    }
  }

  setActiveItem = (itemId) => this.setState({ activeItem: itemId })

  render() {
    const { theme, classes, styles } = this.props;
    const { activeItem, items } = this.state;

    return (
      <div>
        <GridDropdown
          activeItem={activeItem}
          items={items}
          cols={3}
          rows={3}

          mainColor={theme.mainColor}
          textColor={theme.textColor}

          buttonClass={classes.buttonClass}
          dropdownClass={classes.dropdownClass}
          itemClass={classes.itemClass}
          itemTextClass={classes.itemTextClass}

          buttonStyle={styles.buttonStyle}
          dropdownStyle={styles.dropdownStyle}
          itemStyle={styles.itemStyle}
          itemTextStyle={styles.itemTextStyle}
        />
      </div>
    )
  }
}

export default render(
  <TestComponent />, document.getElementById('root')
)
