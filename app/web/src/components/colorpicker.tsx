import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

class Picker extends React.Component {
  state = {
    displayColorPicker: false,
    background: '#fff'
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ background: color.hex })
  };

  render() {
    console.log( this.state.background )

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: '#ff0e0e',
        },
        swatch: {
          width: '1rem',
          height: '1rem',
          padding: '5px',
          background: this.state.background,
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
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.background } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.background } onChange={ this.handleChange } />
        </div> : null }
        <input className="flex self-stretch items-center font-medium w-full justify-start py-2 pl-4 pr-5 bg-white rounded-lg text-sm text-gray-600 tracking-widest focus:border-gray-500 border border-gray-500 focus:outline-none focus:shadow-outline" type="text" value={ this.state.background } disabled={true}/>
      </div>
      
    )
  }
}
