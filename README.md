# React Native iOS Translate Sheet

<p align="center">
  A React Native library that brings the native iOS 17.4+ Translation Sheet to your React Native applications.
</p>

<p align="center">
  <a href="https://github.com/huextrat/react-native-ios-translate-sheet/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" />
  </a>
  <a href="https://www.npmjs.com/package/react-native-ios-translate-sheet">
    <img alt="npm version" src="https://img.shields.io/npm/v/react-native-ios-translate-sheet.svg?style=for-the-badge" />
  </a>
  <a href="https://www.npmjs.com/package/react-native-ios-translate-sheet">
    <img alt="npm downloads" src="https://img.shields.io/npm/dm/react-native-ios-translate-sheet.svg?style=for-the-badge" />
  </a>
</p>

## Features

- 🔄 Seamless integration with iOS native translation capabilities
- 🌐 Access to all languages supported by iOS translation
- 📱 Native iOS UI and interactions

## Platform Compatibility

This library is designed specifically for iOS 17.4 and above. It can be safely installed in your React Native project regardless of your target iOS version or if you're developing for Android. However, please note:

- On iOS versions below 17.4, the translation sheet will not appear and the `translate` function will silently do nothing
- On Android devices, the translation functionality is not available and the `translate` function will silently do nothing

## Installation

```sh
yarn add react-native-ios-translate-sheet
```
or
```sh
npm install react-native-ios-translate-sheet
```

Then, install the native dependencies:

```sh
cd ios && pod install
```

## Usage

### Using the Hook

For a more convenient implementation, you can use the provided `useIOSTranslateSheet` hook:

```jsx
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useIOSTranslateSheet } from 'react-native-ios-translate-sheet';

export default function App() {
  const { presentIOSTranslateSheet, IOSTranslateSheetView } = useIOSTranslateSheet();
  
  const handleTranslate = () => {
    presentIOSTranslateSheet('Hello world! This is a sample text to translate.');
  };
  
  return (
    <View style={styles.container}>
      {/* Add the IOSTranslateSheetView component to your render tree */}
      <IOSTranslateSheetView />
      <Text style={styles.text}>
        Press the button below to translate text
      </Text>
      <Button 
        title="Translate Text" 
        onPress={handleTranslate} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    marginBottom: 20,
    textAlign: 'center',
  },
});
```

The `useIOSTranslateSheet` hook provides:

- `presentIOSTranslateSheet(text)`: Function to show the translation sheet with the provided text
- `IOSTranslateSheetView`: A pre-configured component that handles the translation UI
- `isIOSTranslateSheetPresented`: Boolean state indicating if the translation sheet is currently visible

This approach simplifies state management and allows you to trigger translations from anywhere in your component.

### Basic Component Usage

```jsx
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { IOSTranslateSheetView } from 'react-native-ios-translate-sheet';

export default function App() {
  const [isTranslateVisible, setTranslateVisible] = useState(false);
  
  return (
    <View style={styles.container}>
      <IOSTranslateSheetView
        text="Hello world! This is a sample text to translate."
        isPresented={isTranslateVisible}
        opacity={0.1}
        onHide={() => setTranslateVisible(false)}
        style={styles.translateView}
      />
      <Button 
        title="Translate Text" 
        onPress={() => setTranslateVisible(true)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  translateView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes | The text to be translated |
| `isPresented` | boolean | Yes | Controls the visibility of the translation sheet |
| `opacity` | number | No | Background opacity when the sheet is presented (0.0 - 1.0) |
| `onHide` | function | No | Callback function triggered when the sheet is dismissed |
| `style` | ViewStyle | No | Style for the container view |

### Important Note on View Positioning

> ⚠️ **Warning**: The `IOSTranslateSheetView` or `IOSTranslateSheetView` from the hook **must** cover the entire screen to work properly.

This is necessary because:

1. The native SwiftUI translation sheet requires a full-screen container to display correctly
2. The component needs to overlay all other UI elements to ensure proper interaction
3. The iOS translation sheet is presented modally on top of your app's content

`<IOSTranslateSheetView />` from the `useIOSTranslateSheet` hook is an absolute full-screen view, so place it well on your component tree to ensure it covers the entire screen. A good practice is to place it at the root level of your app or screen component.

If the view is not positioned correctly, the translation sheet may not appear or function as expected.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you like this project, please consider supporting it by giving it a ⭐️ on GitHub!
