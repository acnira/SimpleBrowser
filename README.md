Github repository: https://github.com/acnira/SimpleBrowser.git

How to run the application?
1. Install Node.js, React-native and Android Studio following guide in https://reactnative.dev/docs/environment-setup.
2. Run "npm install" for installing the dependencies used in this project for your environment.
3. Have a phone with debug mode enabled or an simulator (i.e. Android Virtual Device available in Android Studio) ready, connect the phone to your system to your system.
4. Check the connection with "adb devices", the phone connected to your system should be listed out like "<device_name>     device".
5. Run "npm run android" for android devices or  "npm run ios" for ios devices. Notice that you can debug with ios devices only on MacOS system.

Step to develope an application with React-Native
1. Install Node.js, React-native and Android Studio following guide in https://reactnative.dev/docs/environment-setup.
2. Run "npx react-native init <Project_name>" in your destination folder for creating a blank react-native project.
3. Have a phone with debug mode enabled or an simulator (i.e. Android Virtual Device available in Android Studio) ready, connect the phone to your system to your system.
4. Check the connection with "adb devices", the phone connected to your system should be listed out like "<device_name>     device".
5. Run "npm run android" for android devices or  "npm run ios" for ios devices, in the folder where the project located, your application should be running on your device if the environment is correct.
6. Open App.js and modify the application content.
7. Search for packages you need for your application at "https://www.npmjs.com/", or simply search in search engine with keywords like "react native <function_you_want>".
8. Install those packages according to their description (i.e. https://www.npmjs.com/package/react-native-webview) andmost of the packages could be installed with running "npm i <package_name>".
9. Import packages into your js file with having "import <components_you_want> from '<package_name or package_location>';" on top of the script (i.e. "import {WebView} from 'react-native-webview';" for importing "WebView" component from "react-native-webview" package).
10. Link to the documentation are provided in many packages, you can check for the functions and components in the documentation. For example in "react-native-webview", you can find the "API Reference and Guide" from the description in npmjs.com, you can check the functions and required props from the API reference, or simply follow their example code in the documentation.
11. Divide your js file into smaller sub-modules if the application is complicated, following steps in react native documentation https://reactnative.dev/docs/intro-react. With "export default <submodule_name>;" in your submodule, and import the submodules in other js file with "import <submodule_name> from <submodule_location>".
12. The application should be automatically updated after modification (remember to save your code) if your Metro came from "npm run android" is still running. If your Metro is running but the application didn't update, press "R" in Metro for reloading. If the Metro is not running, simply run "npm run android" or "npm run ios" again.

Step to publish an react-native application
******Android******
Please follow https://reactnative.dev/docs/signed-apk-android.
******IOS******
Please follow https://reactnative.dev/docs/publishing-to-app-store.
