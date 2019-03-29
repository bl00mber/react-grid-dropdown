import React from 'react'
import { render } from 'react-dom'
import GridDropdown from './index'

import background1 from '../test/assets/background1.jpeg'
import background2 from '../test/assets/background2.jpeg'
import background3 from '../test/assets/background3.jpeg'
import background4 from '../test/assets/background4.jpeg'

class TestComponent extends React.Component {
  static defaultProps = {
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
      activeItem: '1item',
      items: [
        {label: '1 item', id: '1item', backgroundImage: `url(${background1})`, onClick: () => this.setActiveItem('1item')},
        {label: '2 item', id: '2item', backgroundImage: `url(${background2})`, onClick: () => this.setActiveItem('2item')},
        {label: '3 item', id: '3item', backgroundImage: `url(${background3})`, onClick: () => this.setActiveItem('3item')},
        {label: '4 item', id: '4item', backgroundImage: `url(${background3})`, onClick: () => this.setActiveItem('4item')},
        {label: '5 item', id: '5item', backgroundImage: `url(${background1})`, onClick: () => this.setActiveItem('5item')},
        {label: '6 item', id: '6item', backgroundImage: `url(${background4})`, onClick: () => this.setActiveItem('6item')},
        {section: 'Transparent', label: '13 item', id: '13item', onClick: () => this.setActiveItem('13item')},
        {section: 'Colors', label: '7 item', id: '7item', backgroundColor: '#84d815', onClick: () => this.setActiveItem('7item')},
        {section: 'Blue', label: '8 item', id: '8item', backgroundColor: 'blue', onClick: () => this.setActiveItem('8item')},
        {section: 'Colors', label: '9 item', id: '9item', backgroundColor: '#1c74f9', onClick: () => this.setActiveItem('9item')},
        {section: 'Colors', label: '10 item', id: '10item', backgroundColor: '#4c4cef', onClick: () => this.setActiveItem('10item')},
        {section: 'Blue', label: '11 item', id: '11item', backgroundColor: 'blue', onClick: () => this.setActiveItem('11item')},
        {section: 'Blue', label: '12 item', id: '12item', backgroundColor: 'blue', onClick: () => this.setActiveItem('12item')},
      ],
      sectionsOrder: ['Colors', 'Blue', 'Transparent'],
    }
  }

  setActiveItem = (itemLabel) => this.setState({ activeItem: itemLabel })

  render() {
    const { theme, classes, styles } = this.props;
    const { activeItem, items, sectionsOrder } = this.state;

    return (
      <div style={{padding: '50px', fontFamily: 'Roboto', position: 'relative'}}>
        <GridDropdown
          label="dropdown"
          activeItem={activeItem}
          items={items}
          sectionsOrder={sectionsOrder}

          buttonClass={classes.buttonClass}
          dropdownClass={classes.dropdownClass}
          itemClass={classes.itemClass}
          itemLabelClass={classes.itemLabelClass}

          buttonStyle={styles.buttonStyle}
          dropdownStyle={styles.dropdownStyle}
          itemStyle={styles.itemStyle}
          itemLabelStyle={styles.itemLabelStyle}
        />
        <div style={{fontSize: '12px', display: 'inline-block', position: 'absolute', left: '510px', top: '63px'}}>developed by <a style={{color: 'black'}} href="https://github.com/bl00mber">bl00mber</a>
        </div>
        <div style={{width: '600px', padding: '10px 5px'}}>
          Material Design is a visual language that synthesizes the classic principles of good design with the innovation of technology and science.<br/><br/>

          Inspired by the physical world and its textures, including how they reflect light and cast shadows. Material surfaces reimagine the mediums of paper and ink.<br/><br/>

          Guided by print design methods — typography, grids, space, scale, color, and imagery — to create hierarchy, meaning, and focus that immerse viewers in the experience.<br/><br/>

          Motion focuses attention and maintains continuity, through subtle feedback and coherent transitions. As elements appear on screen, they transform and reorganize the environment, with interactions generating new transformations.<br/><br/>

          Designed to enable brand expression. It’s integrated with a custom code base that allows the seamless implementation of components, plug-ins, and design elements.<br/><br/>

          Maintains the same UI across platforms, using shared components across Android, iOS, Flutter, and the web.
        </div>
      </div>
    )
  }
}

export default render(
  <TestComponent />, document.getElementById('root')
)
