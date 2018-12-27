new QWebChannel(qt.webChannelTransport, function(channel) {
    window.bridge = channel.objects.bridge;

//    bridge.ok.connect(function(){
//        alert("ok from C++")
//    })
})
