export default class DSWIntegrationWidget {

    constructor() {
        this.path = null
    }

    init() {
        return new Promise((resolve, reject) => {
            // TODO: Do not use '*'
            window.opener.postMessage({ type: 'ready' }, '*')
            window.addEventListener('message', (event) => {
                if (event.data.type === 'path') {
                    this.path = event.data.path
                    resolve()
                }
            }, false)
        })
    }

    send(value, url) {
        // TODO: Do not use '*'
        window.opener.postMessage({
            type: 'selection',
            url,
            value,
            path: this.path
        }, '*')
    }
}
