# boilerplate-phaser-es2016

:fork_and_knife: Example game based on [Phaser.js](http://phaser.io). Use
ECMAScript 2016 syntax.

## Features &#x2714;

* :white_check_mark: Phaser v2.6.2
* :white_check_mark: Webpack v2.2.1
* :white_check_mark: Babel (ECMAScript 2015 + ECMAScript 2016 + Stage 0 of ECMAScript 2017)
* :white_check_mark: [super-event-emitter](http://github.com/piecioshka/super-event-emitter)
 v4.1.4 as event management
* :white_check_mark: Typings (Phaser, super-event-emitter) for syntax highlighters
* :white_check_mark: Task to count line of code (LOC)
* :white_check_mark: Simple structure for app: `constants/`, `models/`, `states/`
* :white_check_mark: Example map (build in Tiled)
* :white_check_mark: Static directory: `public/`
* :white_check_mark: Maximum 80 characters per line in each file!

![Demo](./screenshots.png)

## Steps to launch the project

```bash
npm install       # install dependencies
npm run build     # build distribution files in public/dist/
```

## Development

```bash
npm run typings   # support syntax highlighters
npm run watch     # run Webpack to listen of file modifications
```

## Misc

```bash
npm run clear     # remove all generated files
npm run count     # count LOC (line of code)
```

## Troubleshooting

### `Uncaught TypeError: Cannot read property 'cache' of undefined`

Player sprite does not have reference to main game object.

```javascript
new Player();           // ERROR
new Player(this.game);  // OK
```

### `Uncaught TypeError: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The provided value is not of type '(HTMLImageElement or HTMLVideoElement or HTMLCanvasElement or ImageBitmap)'`

List of used tileset in map should be defined after map setup.

```javascript
this.map = this.add.tilemap('example-map');
this.map.addTilesetImage('street');     // MUST BE ADDED
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016
