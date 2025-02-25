import React from 'react';
import dynamic from 'next/dynamic';
import { type Sketch } from '@p5-wrapper/react';
import { NextReactP5Wrapper } from '@p5-wrapper/next';

const sketch: Sketch = (p5) => {
  p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

  p5.draw = () => {
    p5.background(250);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
  };
};

export default function Page() {
  if (typeof window !== 'undefined') {
    // Code that should only run on the client side
    return <NextReactP5Wrapper sketch={sketch} />;
  }
}
