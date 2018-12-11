'use strict'

var IframeMessenger = {}

IframeMessenger.isProduction = false

IframeMessenger.sendMessage = function (msg) {
  // Make sure you are sending a string, and to stringify JSON
  window.parent.postMessage(msg, '*')
}

IframeMessenger.onReceiveMessage = function (msg) {
}

function bindEvent (element, eventName, eventHandler) {
  if (element.addEventListener) {
    element.addEventListener(eventName, eventHandler, false)
  } else if (element.attachEvent) {
    element.attachEvent('on' + eventName, eventHandler)
  }
}

bindEvent(window, 'message', function (e) {
  var msg = e.data

  if (!IframeMessenger.isProduction) {
    console.log(msg)
  }

  if (msg == undefined) {
    setIconStatus(0)
  } else if ((msg.info && msg.info.boardType === 0)) {
    setIconStatus('connect')
  } else if (msg.info && msg.info.boardType) {
    setIconStatus('on')
  } else if (msg.cloudload) {
    // console.log(msg)

  } else if (msg.event && msg.event === 'setENV') {
    IframeMessenger.isProduction = (msg.data === true)

  } else if (msg.event && msg.event === 'getXML') {
    IframeMessenger.sendMessage({ event: 'responseGetXML', data: Code.getXMLString() })
  } else if (msg.event && msg.event === 'setXML') {
    Code.afterLoadedText(msg.data, true)
  } else if (msg.event && msg.event === 'getLogo') {
    IframeMessenger.sendMessage({ event: 'responseGetLogo', data: Code.getLogo() })

  } else if (msg.event && msg.event === 'action') {
    
    if (!msg.name) {
      return
    } else if (msg.name == 'newfile') {
      Code.trashBlocks()
    } else if (msg.name == 'open') {
      Code.clickLoadXML()
    } else if (msg.name == 'import') {
      Code.clickImportXML()
    } else if (msg.name == 'download') {
      Code.saveXML()
    } else if (msg.name == 'share') {
      BlocklyStorage.link()
    } 
  }
  // IframeMessenger.onReceiveMessage(e.data)
})

IframeMessenger.sendMessage({ event: 'messageReady' })
