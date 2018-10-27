import React, { Component } from 'react';
import './Background.css';

class Background extends Component {
  componentDidMount = () => {
    this.updateCanvas();
  }

  updateCanvas = () => {
    const c = this.refs.canvas;
    const ctx = c.getContext('2d');

    c.height = window.innerHeight;
    c.width = window.innerWidth;

    let rainText = "▓▒░";

    const font_size = 24;
    const columns = c.width / font_size;

    const drops = [];

    for (let x = 0; x < columns; x++)
      drops[x] = 0;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "#005066";
      ctx.font = font_size + "px arial";

      for (let i = 0; i < drops.length; i++) {
        const text = rainText[Math.floor(Math.random() * rainText.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height * 2)
          drops[i] = 0;

        drops[i]++;
      }
    }

    setInterval(draw, 66);
  }

  render () {
    return (
      <canvas ref="canvas" />
    )
  }
}

export default Background;
