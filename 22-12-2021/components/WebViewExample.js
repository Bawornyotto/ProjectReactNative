import React from 'react'
import { SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'
const WebViewExample = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <WebView
            source = {{uri:'https:tni.ac.th'}}
            />

        </SafeAreaView>
    )
}

export default WebViewExample
