let fromSelect = document.querySelector('#from')
let toSelect = document.querySelector('#to')

chrome.storage.sync.get(['from', 'to'], (result) => {
    console.log(result)
})

fromSelect.onchange = function () {
    console.log(this.value)
    let key = this.selectedOptions[0].getAttribute('data-key')
    chrome.storage.sync.set({
        'from': {
            key: key,
            value: this.value
        }
    })
}

toSelect.onchange = function () {
    console.log(this.value)
    let key = this.selectedOptions[0].getAttribute('data-key')
    chrome.storage.sync.set({
        'to': {
            key: key,
            value: this.value
        }
    })
}
