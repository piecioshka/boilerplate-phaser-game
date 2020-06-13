# Troubleshooting

## `Uncaught TypeError: Cannot read property 'cache' of undefined`

Player sprite does not have reference to main game object.

```javascript
new Player();           // ERROR
new Player(this.game);  // OK
```

## `Uncaught TypeError: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The provided value is not of type '(HTMLImageElement or HTMLVideoElement or HTMLCanvasElement or ImageBitmap)'`

List of used tileset in map should be defined after map setup.

```javascript
this.map = this.add.tilemap('example-map');
this.map.addTilesetImage('street');     // MUST BE ADDED
```
