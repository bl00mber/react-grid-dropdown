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
        {section: '2 section', label: '5 item', backgroundImage: `url(${background3})`, onClick: () => this.setActiveItem('5 item')},
        {section: '2 section', label: '6 item', backgroundImage: `url(${background1})`, onClick: () => this.setActiveItem('6 item')},
        {section: '2 section', label: '7 item', backgroundColor: '#84d815', onClick: () => this.setActiveItem('7 item')},
        {section: '2 section', label: '8 item', backgroundColor: '#1c74f9', onClick: () => this.setActiveItem('8 item')},
        {section: '2 section', label: '9 item', backgroundColor: '#4c4cef', onClick: () => this.setActiveItem('9 item')},
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
      <div style={{width: '700px', fontFamily: 'Roboto'}}>
          As collected deficient objection by it discovery sincerity curiosity. Quiet decay who round three world whole has mrs man. Built the china there tried jokes which gay why. Assure in adieus wicket it is. But spoke round point and one joy. Offending her moonlight men sweetness see unwilling. Often of it tears whole oh balls share an.

          Brother set had private his letters observe outward resolve. Shutters ye marriage to throwing we as. Effect in if agreed he wished wanted admire expect. Or shortly visitor is comfort placing to cheered do. Few hills tears are weeks saw. Partiality insensible celebrated is in. Am offended as wandered thoughts greatest an friendly. Evening covered in he exposed fertile to. Horses seeing at played plenty nature to expect we. Young say led stood hills own thing get.

          Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy.

          Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen. Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others. Two dear held mrs feet view her old fine. Bore can led than how has rank. Discovery any extensive has commanded direction. Short at front which blind as. Ye as procuring unwilling principle by.
        </div>
      </div>
    )
  }
}

export default render(
  <TestComponent />, document.getElementById('root')
)
