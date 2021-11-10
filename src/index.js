export default class DSWIntegrationWidget {

    constructor(allowedHosts) {
        if (!Array.isArray(allowedHosts)) {
            allowedHosts = [allowedHosts]
        }

        this._allowedHosts = allowedHosts
        this._path = null
        this._origin = null
    }

    init() {
        return new Promise((resolve, reject) => {
            window.opener.postMessage({ type: 'ready' }, '*')
            window.addEventListener('message', (event) => {
                if (!this._isEventOriginAllowed(event)) {
                    return
                }

                if (event.data.type === 'path') {
                    this._path = event.data.path
                    this._origin = event.origin
                    resolve()
                }
            }, false)
        })
    }

    send(value, url) {
        window.opener.postMessage({
            type: 'selection',
            url,
            value,
            path: this._path
        }, this._origin)
    }

    _isEventOriginAllowed(event) {
        console.log(this._getEventOrigin(event))
        return this._allowedHosts.includes(this._getEventOrigin(event))
    }

    _getEventOrigin(event) {
        const parts = event.origin.split('://')
        return parts.length > 1 ? parts[1].split(':')[0] : null
    }
}
