# splashicon-generator

Automatic icon and splash screen resizing for PhoneGap. Create an icon in the root folder of your PhoneGap project and use ```icon.png``` and a ```splash.png``` to automatically resize and copy it for all the platforms your project supports (currently works with **iOS**, **Android** and **Windows Phone 8**).

Consider using the base icon and splash images in the `model` folder, so that images are not cropped and resized incorrectly.

### Installation

     $ npm install splashicon-generator -g

---

### Usage

Create an ```icon.png``` and a ```splash.png``` file in a 'model' folder under the root folder of your cordova project and run:

     $ splashicon-generator

For optimal results, your icon file has to be square, and at least 1024x1024px and your splash file has a vertical rectangle, and at least 2208x3925px.

You can change the default folder for the base images using the argument `imagespath`. Consider the following example:

     $ splashicon-generator --imagespath="project/assets"

This will look for an ```icon.png``` and a ```splash.png``` in the **project/assets** folder under the root folder of your cordova project.

---

### Requirements

#### ImageMagick

Install on a Mac:

     $ brew install imagemagick

On linux:

    $ sudo apt-get install imagemagick

On windows see http://www.imagemagick.org/script/binary-releases.php#windows

---

### Configuring icons

Include in your ```config.xml``` file:

```xml
<icon src="icon.png" />

<icon gap:platform="ios" height="180" src="res/icons/ios/icon-60-3x.png" width="180" />
<icon gap:platform="ios" height="60" src="res/icons/ios/icon-60.png" width="60" />
<icon gap:platform="ios" height="120" src="res/icons/ios/icon-60-2x.png" width="120" />
<icon gap:platform="ios" height="76" src="res/icons/ios/icon-76.png" width="76" />
<icon gap:platform="ios" height="152" src="res/icons/ios/icon-76-2x.png" width="152" />
<icon gap:platform="ios" height="40" src="res/icons/ios/icon-40.png" width="40" />
<icon gap:platform="ios" height="80" src="res/icons/ios/icon-40-2x.png" width="80" />
<icon gap:platform="ios" height="57" src="res/icons/ios/icon-57.png" width="57" />
<icon gap:platform="ios" height="114" src="res/icons/ios/icon-57-2x.png" width="114" />
<icon gap:platform="ios" height="72" src="res/icons/ios/icon-72.png" width="72" />
<icon gap:platform="ios" height="144" src="res/icons/ios/icon-72-2x.png" width="144" />
<icon gap:platform="ios" height="29" src="res/icons/ios/icon-small.png" width="29" />
<icon gap:platform="ios" height="58" src="res/icons/ios/icon-small-2x.png" width="58" />
<icon gap:platform="ios" height="50" src="res/icons/ios/icon-50.png" width="50" />
<icon gap:platform="ios" height="100" src="res/icons/ios/icon-50-2x.png" width="100" />

<icon gap:platform="android" gap:qualifier="ldpi" src="res/icons/android/icon-36-ldpi.png" />
<icon gap:platform="android" gap:qualifier="mdpi" src="res/icons/android/icon-48-mdpi.png" />
<icon gap:platform="android" gap:qualifier="hdpi" src="res/icons/android/icon-72-hdpi.png" />
<icon gap:platform="android" gap:qualifier="xhdpi" src="res/icons/android/icon-96-xhdpi.png" />
<icon gap:platform="android" gap:qualifier="xxhdpi" src="res/icons/android/icon-144-xxhdpi.png" />
<icon gap:platform="android" gap:qualifier="xxxhdpi" src="res/icons/android/icon-192-xxxhdpi.png" />

<icon gap:platform="winphone" src="res/icons/wp8/ApplicationIcon.png" />
<icon gap:platform="winphone" src="res/icons/wp8/Background.png" gap:role="background" />

```

---

### Configuring splash

Include in your ```config.xml``` file:

```xml
<splash src="splash.png" />

<splash gap:platform="ios" height="480" src="res/screens/ios/screen-iphone-portrait.png" width="320" />
<splash gap:platform="ios" height="960" src="res/screens/ios/screen-iphone-portrait-2x.png" width="640" />
<splash gap:platform="ios" height="1024" src="res/screens/ios/screen-ipad-portrait.png" width="768" />
<splash gap:platform="ios" height="2048" src="res/screens/ios/screen-ipad-portrait-2x.png" width="1536" />
<splash gap:platform="ios" height="768" src="res/screens/ios/screen-ipad-landscape.png" width="1024" />
<splash gap:platform="ios" height="1536" src="res/screens/ios/screen-ipad-landscape-2x.png" width="2048" />
<splash gap:platform="ios" height="1136" src="res/screens/ios/screen-iphone-568h-2x.png" width="640" />
<splash gap:platform="ios" height="1334" src="res/screens/ios/screen-iphone-portrait-667h.png" width="750" />
<splash gap:platform="ios" height="2208" src="res/screens/ios/screen-iphone-portrait-736h.png" width="1242" />
<splash gap:platform="ios" height="1242" src="res/screens/ios/screen-iphone-landscape-736h.png" width="2208" />

<splash gap:platform="android" gap:qualifier="land-hdpi" src="res/screens/android/screen-hdpi-landscape.png" />
<splash gap:platform="android" gap:qualifier="land-ldpi" src="res/screens/android/screen-ldpi-landscape.png" />
<splash gap:platform="android" gap:qualifier="land-mdpi" src="res/screens/android/screen-mdpi-landscape.png" />
<splash gap:platform="android" gap:qualifier="land-xhdpi" src="res/screens/android/screen-xhdpi-landscape.png" />
<splash gap:platform="android" gap:qualifier="port-hdpi" src="res/screens/android/screen-hdpi-portrait.png" />
<splash gap:platform="android" gap:qualifier="port-ldpi" src="res/screens/android/screen-ldpi-portrait.png" />
<splash gap:platform="android" gap:qualifier="port-mdpi" src="res/screens/android/screen-mdpi-portrait.png" />
<splash gap:platform="android" gap:qualifier="port-xhdpi" src="res/screens/android/screen-xhdpi-portrait.png" />

<splash gap:platform="winphone" src="res/screens/wp8/SplashScreenImage.jpg" />
<splash gap:platform="winphone" src="res/screens/wp8/SplashScreenImage.screen-720p.jpg" />
<splash gap:platform="winphone" src="res/screens/wp8/SplashScreenImage.screen-WVGA.jpg" />
<splash gap:platform="winphone" src="res/screens/wp8/SplashScreenImage.screen-WXGA.jpg" />
```

### Configuring icon and splash for Windows
```xml
  <platform name="windows">
    <icon src="resources/windows/icon/Square150x150Logo.scale-100.png" width="150" height="150"/>
    <icon src="resources/windows/icon/Square150x150Logo.scale-240.png" width="360" height="360"/>
    <icon src="resources/windows/icon/Square30x30Logo.scale-100.png" width="30" height="30"/>
    <icon src="resources/windows/icon/Square310x310Logo.scale-100.png" width="310" height="310"/>
    <icon src="resources/windows/icon/Square44x44Logo.scale-100.png" width="44" height="44"/>
    <icon src="resources/windows/icon/Square44x44Logo.scale-240.png" width="106" height="106"/>
    <icon src="resources/windows/icon/Square70x70Logo.scale-100.png" width="70" height="70"/>
    <icon src="resources/windows/icon/Square71x71Logo.scale-100.png" width="71" height="71"/>
    <icon src="resources/windows/icon/Square71x71Logo.scale-240.png" width="170" height="170"/>

    <icon src="resources/windows/icon/StoreLogo.scale-100.png" width="50" height="50"/>
    <icon src="resources/windows/icon/StoreLogo.scale-240.png" width="120" height="120"/>
    <icon src="resources/windows/icon/Wide310x150Logo.scale-100.png" width="310" height="150"/>
    <icon src="resources/windows/icon/Wide310x150Logo.scale-240.png" width="744" height="360"/>

    <splash src="resources/windows/splash/SplashScreen.scale-100.png" width="620" height="300"/>
    <splash src="resources/windows/splash/SplashScreen.scale-240.png" width="1152" height="1920"/>
    <splash src="resources/windows/splash/SplashScreenPhone.scale-240.png" width="1152" height="1920"/>
  </platform>
```

---

### License

MIT
