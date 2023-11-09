'use strict'

import React from 'react'
import reactCSS from 'reactcss';
import { SwatchesPicker } from 'react-color'

class SketchBackgroundColor extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '137',
      g: '219',
      b: '236',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleBackgroundColorChange = (color) => {
    this.setState({ color: color.rgb })
    this.props.onColorChange(color.hex)
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '150px',
          height: '30px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SwatchesPicker height={"250px"} width={"170px"} color={ this.state.color } onChange={ this.handleBackgroundColorChange } />
        </div> : null }

      </div>
    )
  }
}

export default SketchBackgroundColor
