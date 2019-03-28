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
      activeItem: '1 item',
      items: [
        {label: '1 item', backgroundImage: `url(${background1})`, onClick: () => this.setActiveItem('1 item')},
        {label: '2 item', backgroundImage: `url(${background2})`, onClick: () => this.setActiveItem('2 item')},
        {label: '3 item', backgroundImage: `url(${background3})`, onClick: () => this.setActiveItem('3 item')},
        {label: '4 item', backgroundImage: `url(${background3})`, onClick: () => this.setActiveItem('4 item')},
        {label: '5 item', backgroundImage: `url(${background1})`, onClick: () => this.setActiveItem('5 item')},
        {label: '6 item', backgroundImage: `url(${background4})`, onClick: () => this.setActiveItem('6 item')},
        {section: 'Colors', label: '7 item', backgroundColor: '#84d815', onClick: () => this.setActiveItem('7 item')},
        {section: 'Blue', label: '8 item', backgroundColor: 'blue', onClick: () => this.setActiveItem('8 item')},
        {section: 'Colors', label: '9 item', backgroundColor: '#1c74f9', onClick: () => this.setActiveItem('9 item')},
        {section: 'Colors', label: '10 item', backgroundColor: '#4c4cef', onClick: () => this.setActiveItem('10 item')},
        {section: 'Blue', label: '11 item', backgroundColor: 'blue', onClick: () => this.setActiveItem('11 item')},
        {section: 'Blue', label: '12 item', backgroundColor: 'blue', onClick: () => this.setActiveItem('12 item')},
        {section: 'Transparent', label: '13 item', onClick: () => this.setActiveItem('13 item')},
      ],
    }
  }

  setActiveItem = (itemLabel) => this.setState({ activeItem: itemLabel })

  render() {
    const { theme, classes, styles } = this.props;
    const { activeItem, items } = this.state;

    return (
      <div style={{padding: '50px', fontFamily: 'Roboto', position: 'relative'}}>
        <GridDropdown
          label="Dropdown"
          activeItem={activeItem}
          items={items}

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
