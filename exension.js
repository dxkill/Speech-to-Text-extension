const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAwFBMVEUGBggUEBM7FyVzFy20ICrfPiP6agr5oxv/1UH//EDW8mSc20NZwTUUoC4aej4kUjsSICAUNGQoXMQkn94g1sem/Nv////+88D61rj1oJfoanO8Spt5OoBAM1MkIjQiHBoyKyhxQTu7dUfbpGP00pza4OqzudGLk69tdY1KVGIzOUFCJDNbMTiOUlK6dWrptaPj5v+5v/uEm+RYjb5HfYUjZ04yhGRdr42S3LrN9+Lk0qrHsIughmJ5Z1VaTkRCOTQ2PxmcAAAAQHRSTlMA////////////////////////////////////////////////////////////////////////////////////EyueMQAAAERJREFUKJFjEMEBGOAsATDAlBAQQJVhQBOHy9BPQgAFIEsg66CZBFKQIEsgZGDiCH+IoDEIhi5EDolDgQTJMYgBcEoAABETKjnyd3NOAAAAAElFTkSuQmCC";

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';
recognition.onresult = function (event) {
  let result = '';
  for (let i = event.resultIndex; i < event.results.length; i++) {
  result += event.results[i][0].transcript;
  }

class SpeechtoText {

  constructor() {}

  getInfo() {
    return {
      id: 'speechtoText',
      name: 'SpeechtoText',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'startlistening',

          blockType: Scratch.BlockType.COMMAND,

          text: 'start listening'
        },
        {
          opcode: 'stoplistening',

          blockType: Scratch.BlockType.COMMAND,

          text: 'stop listening'
        },
        {
          opcode: 'recognized',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'recognized'
        }
      ]
    }
  }

  startlistening() {
    recognition.start();
  }

  stoplistening() {
    recognition.stop();
  }

  recognized() {
    return result;
  }

}

Scratch.extensions.register(new SpeechtoText());
