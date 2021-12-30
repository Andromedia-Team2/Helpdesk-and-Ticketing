import React from 'react'
import reactCSS from 'reactcss'

export default (props) => {
  // state = {
  //   displayColorPicker: false,
  //   background: '#fff'
  // };

  // handleClick = () => {
  //   this.setState({ displayColorPicker: !this.state.displayColorPicker })
  // };

  // handleClose = () => {
  //   this.setState({ displayColorPicker: false })
  // };

  // handleChange = (color) => {
  //   this.setState({ background: color.hex })
  // };

  // render() {
  //   console.log( this.state.background )

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: '#ff0e0e',
        },
        swatch: {
          width: '1.25rem',
          height: '1.25rem',
          padding: '5px',
          background: props.color,
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          // position: 'relative',
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
        <div style={ styles.swatch } onClick={ props.onClick}>
          <div style={ styles.background } />
        </div>
    )
  }
