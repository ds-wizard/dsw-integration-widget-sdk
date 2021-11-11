# DSW Integration Widget SDK

[![Node.js Package CI](https://github.com/ds-wizard/dsw-integration-widget-sdk/workflows/Node.js%20Package/badge.svg)](https://github.com/ds-wizard/dsw-integration-widget-sdk/actions)
[![npm version](https://badge.fury.io/js/@ds-wizard%2Fintegration-widget-sdk.svg)](https://badge.fury.io/js/@ds-wizard%2Fintegration-widget-sdk)
[![License](https://img.shields.io/github/license/ds-wizard/dsw-integration-widget-sdk)](LICENSE)

DSW Integration Widget can be used for advanced integrations in the [Data Stewardship Wizard](https://ds-wizard.org) projects. The DSW opens an external service that serves the widget where users can pick an answer for their project. This type of integration is used where simple search integration is insufficient, e.g., users need to log in first.

## Instalation

```bash
$ npm install @ds-wizard/integration-widget-sdk
```

You can then import the library:

```javascript
var DSWIntegrationWidget = require('@ds-wizard/integration-widget-sdk')
```

or using ES6:

```javascript
import DSWIntegrationWidget from '@ds-wizard/integration-widget-sdk'
```

Alternatively, you can just import the library using script tag and CDN:

```html
<script src="https://unpkg.com/@ds-wizard/integration-widget-sdk/lib/index.js"></script>
```

`DSWIntegrationWidget` will then become globally available.

## Usage

On the page that will serve your widget, you need to initialize it first. Then, when the user makes a selection, send it back to the DSW.

```javascript
const widget = new DSWIntegrationWidget('biohack.ds-wizard.org')

widget.init()
    .then(() => {

        // ...

        widget.send(value, id)
    })
    .catch((error) => {
        // handle the error
    })
```

When creating a new widget instance, you need to specify what DSW instance (or instances) the widget should work with. It will not send any data if it is not open from the allowed DSW instance. You can also use an array for more instances:

```javascript
const widget = new DSWIntegrationWidget(['biohack.ds-wizard.org', 'demo.ds-wizard.org'])
```

When sending the data to DSW, the `value` is a text value that will be visible for users in DSW, the `id` is the ID of the item that will be used in the item URL in DSW.

You can explore the examples in this repository. The [simple](examples/simple) example demonstrates a basic widget with the selection. The [login](examples/login) demonstrates how you can redirect users to login first and show the widget.

## License

This project is licensed under the Apache License v2.0 - see the
[LICENSE](LICENSE) file for more details.
