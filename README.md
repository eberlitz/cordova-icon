[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UPBTHKNBECBQL)

# splashicon-generator

Automatic icon and splash screen resizing for any **Cordova** based applications including **PhoneGap**. It uses an ```icon.png``` and a ```splash.png``` to automatically resize and copy it for all the platforms your project supports (currently works with **iOS**, **Android** and **Windows Phone 8**).

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

### Configuring icons for Cordova project

Include in your ```config.xml``` file:

```xml
<platform name="android">
    <icon density="ldpi" src="res/icons/android/icon-36-ldpi.png" />
    <icon density="mdpi" src="res/icons/android/icon-48-mdpi.png" />
    <icon density="hdpi" src="res/icons/android/icon-72-hdpi.png" />
    <icon density="xhdpi" src="res/icons/android/icon-96-xhdpi.png" />
    <icon density="xxhdpi" src="res/icons/android/icon-144-xxhdpi.png" />
    <icon density="xxxhdpi" src="res/icons/android/icon-192-xxxhdpi.png" />
</platform>
<platform name="ios">
    <icon height="180" src="res/icons/ios/icon-60-3x.png" width="180" />
    <icon height="60" src="res/icons/ios/icon-60.png" width="60" />
    <icon height="120" src="res/icons/ios/icon-60-2x.png" width="120" />
    <icon height="76" src="res/icons/ios/icon-76.png" width="76" />
    <icon height="152" src="res/icons/ios/icon-76-2x.png" width="152" />
    <icon height="40" src="res/icons/ios/icon-40.png" width="40" />
    <icon height="80" src="res/icons/ios/icon-40-2x.png" width="80" />
    <icon height="57" src="res/icons/ios/icon-57.png" width="57" />
    <icon height="114" src="res/icons/ios/icon-57-2x.png" width="114" />
    <icon height="72" src="res/icons/ios/icon-72.png" width="72" />
    <icon height="144" src="res/icons/ios/icon-72-2x.png" width="144" />
    <icon height="29" src="res/icons/ios/icon-small.png" width="29" />
    <icon height="58" src="res/icons/ios/icon-small-2x.png" width="58" />
    <icon height="50" src="res/icons/ios/icon-50.png" width="50" />
    <icon height="100" src="res/icons/ios/icon-50-2x.png" width="100" />
</platform>
<platform name="windows">
    <icon height="150" src="res/icons/windows/Square150x150Logo.scale-100.png" width="150" />
    <icon height="360" src="res/icons/windows/Square150x150Logo.scale-240.png" width="360" />
    <icon height="30" src="res/icons/windows/Square30x30Logo.scale-100.png" width="30" />
    <icon height="" src="res/icons/windows/Square310x310Logo.scale-100.png" width="" />
    <icon height="106" src="res/icons/windows/Square44x44Logo.scale-240.png" width="106" />
    <icon height="70" src="res/icons/windows/Square70x70Logo.scale-100.png" width="70" />
    <icon height="170" src="res/icons/windows/Square71x71Logo.scale-240.png" width="170" />
    <icon height="50" src="res/icons/windows/StoreLogo.scale-100.png" width="50" />
    <icon height="120" src="res/icons/windows/StoreLogo.scale-240.png" width="120" />
    <icon height="150" src="res/icons/windows/Wide310x150Logo.scale-100.png" width="310" />
    <icon height="360" src="res/icons/windows/Wide310x150Logo.scale-240.png" width="744" />
</platform>
<platform name="wp8">
    <icon height="99" src="res/icons/wp8/ApplicationIcon.png" width="99" />
    <icon height="159" src="res/icons/wp8/Background.png" width="159" />
</platform>
```

---

### Configuring splash for Cordova project

Include in your ```config.xml``` file:

```xml
<platform name="android">
    <splash density="land-hdpi" src="res/screens/android/screen-hdpi-landscape.png" />
    <splash density="land-ldpi" src="res/screens/android/screen-ldpi-landscape.png" />
    <splash density="land-mdpi" src="res/screens/android/screen-mdpi-landscape.png" />
    <splash density="land-xhdpi" src="res/screens/android/screen-xhdpi-landscape.png" />
    <splash density="land-xxhdpi" src="res/screens/android/screen-xxhdpi-landscape.png" />
    <splash density="land-xxxhdpi" src="res/screens/android/screen-xxxhdpi-landscape.png" />
    <splash density="port-hdpi" src="res/screens/android/screen-hdpi-portrait.png" />
    <splash density="port-ldpi" src="res/screens/android/screen-ldpi-portrait.png" />
    <splash density="port-mdpi" src="res/screens/android/screen-mdpi-portrait.png" />
    <splash density="port-xhdpi" src="res/screens/android/screen-xhdpi-portrait.png" />
    <splash density="port-xxhdpi" src="res/screens/android/screen-xxhdpi-portrait.png" />
    <splash density="port-xxxhdpi" src="res/screens/android/screen-xxxhdpi-portrait.png" />
</platform>
<platform name="ios">
    <splash height="480" src="res/screens/ios/screen-iphone-portrait.png" width="320" />
    <splash height="960" src="res/screens/ios/screen-iphone-portrait-2x.png" width="640" />
    <splash height="1024" src="res/screens/ios/screen-ipad-portrait.png" width="768" />
    <splash height="2048" src="res/screens/ios/screen-ipad-portrait-2x.png" width="1536" />
    <splash height="768" src="res/screens/ios/screen-ipad-landscape.png" width="1024" />
    <splash height="1536" src="res/screens/ios/screen-ipad-landscape-2x.png" width="2048" />
    <splash height="1136" src="res/screens/ios/screen-iphone-568h-2x.png" width="640" />
    <splash height="1334" src="res/screens/ios/screen-iphone-portrait-667h.png" width="750" />
    <splash height="2208" src="res/screens/ios/screen-iphone-portrait-736h.png" width="1242" />
    <splash height="1242" src="res/screens/ios/screen-iphone-landscape-736h.png" width="2208" />
</platform>
<platform name="windows">
    <splash height="300" src="res/screens/windows/SplashScreen.scale-100.png" width="620" />
    <splash height="1920" src="res/screens/windows/SplashScreen.scale-240.png" width="1152" />
    <splash height="1920" src="res/screens/windows/SplashScreenPhone.scale-240.png" width="1152" />
</platform>
<platform name="wp8">
    <splash height="1280" src="res/screens/wp8/SplashScreenImage.jpg" width="768" />
    <splash height="1280" src="res/screens/wp8/SplashScreenImage.screen-720p.jpg" width="720" />
    <splash height="800" src="res/screens/wp8/SplashScreenImage.screen-WVGA.jpg" width="480" />
    <splash height="1280" src="res/screens/wp8/SplashScreenImage.screen-WXGA.jpg" width="768" />
</platform>
```

---

### Configuring splash and icon for PhoneGap project

You can use the same configuration of an cordova project just adjusting the xml elements as their documentation says:

[http://docs.phonegap.com/phonegap-build/configuring/icons-and-splash/](http://docs.phonegap.com/phonegap-build/configuring/icons-and-splash/) 

---

### Generate custom assets

You can use this package under node to specify custom assets. I personally use this for adding a custom Icon for Push on android. That needs to be an icon with transparency.
I use it with gulp like this:

```js
var splashiconGenerator = require("splashicon-generator");

gulp.task('generate-splashicon', function(done) {
    // Generate all the default assets
    splashiconGenerator.generate()
    .then(function() {

        // Configure the custom assets with their sizes 
        var options = {
            ICON_FILE: path.join('model', 'pushicon.png'),
            SPLASH_FILE: '', // ignore plash generation
            ICON_PLATFORMS: [{
                name: 'android-push-icon',
                iconsPath: 'res/icons/android/',
                isAdded: true,
                icons: [
                    { name: 'push-icon-36-ldpi.png', size: 36, density: 'ldpi' },
                    { name: 'push-icon-48-mdpi.png', size: 48, density: 'mdpi' },
                    { name: 'push-icon-72-hdpi.png', size: 72, density: 'hdpi' },
                    { name: 'push-icon-96-xhdpi.png', size: 96, density: 'xhdpi' },
                    { name: 'push-icon-144-xxhdpi.png', size: 144, density: 'xxhdpi' },
                    { name: 'push-icon-192-xxxhdpi.png', size: 192, density: 'xxxhdpi' }
                ]
            }]
        };
        // Generate only the custom assets specified in the `options` parameter
        splashiconGenerator.generate(options).then(function() {
            done();
        });
    });
});
```

Then just add it to the `config.xml`:

```xml
<!-- pushicon -->
<platform name="android">
    <icon density="ldpi" src="res/icons/android/push-icon-36-ldpi.png" />
    <icon density="mdpi" src="res/icons/android/push-icon-48-mdpi.png" />
    <icon density="hdpi" src="res/icons/android/push-icon-72-hdpi.png" />
    <icon density="xhdpi" src="res/icons/android/push-icon-96-xhdpi.png" />
    <icon density="xxhdpi" src="res/icons/android/push-icon-144-xxhdpi.png" />
    <icon density="xxxhdpi" src="res/icons/android/push-icon-192-xxxhdpi.png" />
</platform>
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
