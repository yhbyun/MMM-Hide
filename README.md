# MMM-Hide

Hide Module for MagicMirror<sup>2</sup>

## Dependencies

* An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)

## Installation

* Clone this repo into `~/MagicMirror/modules` directory.
* Configure your `~/MagicMirror/config/config.js`:

```js
{
    module: 'MMM-Hide',
    config: {
        modules: ["clock", ...]
    }
}
```

## Config Options

| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `modules` | `[]` | An Array with module names to hide |

## Developer

* `npm run lint` - Lints JS and CSS files.

