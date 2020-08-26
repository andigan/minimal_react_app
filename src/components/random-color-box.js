// core react
import React, { Component } from 'react';

class RandomColorBox extends Component {

  render () {

    const height = 800;
    const width = 800;
    const numOfSquares = width / 100 * height / 100;

    const innermostCircleWidth = 60;
    const outermostCircleWidth = 400;

    return (
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          height,
          width,
          border: '1px solid black',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          backgroundColor: 'pink'
        }}
      >

        {/* outer circle [ 198, 196, 194 ... 56, 54, 52, 50 ] */}
        {Array.from(Array(outermostCircleWidth / 2), (_, i) => { return (innermostCircleWidth + (i * 2))})
          .reverse()
          .map((size, i, arr) => {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

            let backgroundColor = arr.length - 1 === i ? 'black' : randomColor;

            if (i % 2 === 1) {
              backgroundColor = 'transparent';
            }

            return (
              <div
                key={randomColor}
                style={{
                  position: 'absolute',
                  top: (height / 2) - (size / 2),
                  left: (width / 2) - (size / 2),
                  borderRadius: 1000,
                  width: size,
                  height: size,
                  // width: size * i,
                  // height: size * i,
                  backgroundColor
                }}
              />
            );
          })
        }

        {/* innermost circle [ 48, 46, 44 ... 4, 2, 0 ] */}
        {Array.from(Array(innermostCircleWidth / 2), (_, i) => { return (i * 2)})
          .reverse()
          .map((size, i, arr) => {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

            let backgroundColor = arr.length - 1 === i ? 'black' : randomColor;

            if (i % 2 === 1) {
              backgroundColor = 'black';
            }

            return (
              <div
                key={randomColor}
                style={{
                  position: 'absolute',
                  top: (height / 2) - (size / 2),
                  left: (width / 2) - (size / 2),
                  borderRadius: 1000,
                  // width: size * i,
                  // height: size * i,
                  width: size,
                  height: size,
                  backgroundColor
                }}
              />
            );
          })
        }

        {/* center of center color  */}
        <div
          style={{
            position: 'absolute',
            top: (height / 2) - 1,
            left: (width / 2) - 1,
            borderRadius: 1000,
            // width: size * i,
            // height: size * i,
            width: 2,
            height: 2,
            backgroundColor: 'black'
          }}
        />

        {/* squares */}
        {Array(numOfSquares).fill().map((n, i) => 
          {
            return (
              <div
                key={`square-${i}`}
                style={{
                  height: 100,
                  width: 100,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16),
                  boxSizing: 'border-box'
                }}
              >

              {/* number shadow */}
              <div
                  style={{
                    position: 'absolute',
                    display: 'flex',
                    height: 1,
                    width: 1,
                    zIndex: 200,
                    boxShadow: '5px 5px 40px 20px #' + Math.floor(Math.random()*16777215).toString(16)
                  }}
              />

                {/* number */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    fontSize: 30,
                    height: 30,
                    width: 30,
                    fontWeight: 600,
                    zIndex: 200,
                  }}
                >
                  {/* {i + 1} */}
                </div>
              </div> 
            );
          }
        )}
      </div>
    );
  }
}

export default RandomColorBox;
