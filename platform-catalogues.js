var platformIconsCatalogue = {
    phonegap: {
        ios: [
            // Default icon (avoid Apple submit error ITMS-90032)
            { name: "../../../icon.png", size: 57 },
            // iOS 8.0+, iPhone 6 Plus
            { name:'icon-60-3x.png', size:180 },
            // iOS 7.0+, iPhone / iPod Touch  -->
            { name:'icon-60.png', size:60 },
            { name:'icon-60-2x.png', size:120 },
            // iPad -->
            { name:'icon-76.png', size:76 },
            { name:'icon-76-2x.png', size:152 },
            // iOS 6.1, Spotlight Icon -->
            { name:'icon-40.png', size:40 },
            { name:'icon-40-2x.png', size:80 },
            // iPhone / iPod Touch -->
            { name:'icon-57.png', size:57 },
            { name:'icon-57-2x.png', size:114 },
            // iPad -->
            { name:'icon-72.png', size:72 },
            { name:'icon-72-2x.png', size:144 },
            // iPhone Spotlight and Settings Icon -->
            { name:'icon-small.png', size:29 },
            { name:'icon-small-2x.png', size:58 },
            // iPad Spotlight and Settings Icon -->
            { name:'icon-50.png', size:50 },
            { name:'icon-50-2x.png', size:100 }
        ],
        android: [
            { name:'icon-36-ldpi.png', size: 36, density:'ldpi' },
            { name:'icon-48-mdpi.png', size: 48, density:'mdpi' },
            { name:'icon-72-hdpi.png', size: 72, density:'hdpi' },
            { name:'icon-96-xhdpi.png', size: 96, density:'xhdpi' },
            { name:'icon-144-xxhdpi.png', size: 144, density:'xxhdpi' },
            { name:'icon-192-xxxhdpi.png', size: 192, density:'xxxhdpi' },
        ],
        wp8: [
            { name: 'ApplicationIcon.png', size: 99 },
            { name: 'Background.png', size: 159 },
        ],
        windows: [
            { name:'Square150x150Logo.scale-100.png', size:150 },
            { name:'Square150x150Logo.scale-240.png', size:360 },
            { name:'Square30x30Logo.scale-100.png', size:30 },
            { name:'Square310x310Logo.scale-100.png', size:310 },
            { name:'Square44x44Logo.scale-240.png', size:106 },
            { name:'Square70x70Logo.scale-100.png', size:70 },
            { name:'Square71x71Logo.scale-240.png', size:170 },
            { name:'StoreLogo.scale-100.png', size:50 },
            { name:'StoreLogo.scale-240.png', size:120 },
            { name:'Wide310x150Logo.scale-100.png', size:310 },
            { name:'Wide310x150Logo.scale-240.png', size:744 },
        ],
        store: [
            { path:'./android/', name: "icon-512.png", size: 512 },
            { path:'./wp8/', name: "icon-300.png", size: 300 },
            { path:'./ios/', name: "icon-1024.jpg", size: 1024 } // App Store
        ]
    },
    ionic: {
        ios: [
            { name: 'icon.png',             width: 57,    height: 57 },
            { name: 'icon@2x.png',          width: 114,   height: 114 },
            { name: 'icon-40.png',          width: 40,    height: 40 },
            { name: 'icon-40@2x.png',       width: 80,    height: 80 },
            { name: 'icon-40@3x.png',       width: 120,   height: 120 },
            { name: 'icon-50.png',          width: 50,    height: 50 },
            { name: 'icon-50@2x.png',       width: 100,   height: 100 },
            { name: 'icon-60.png',          width: 60,   height: 60 },
            { name: 'icon-60@2x.png',       width: 120,   height: 120 },
            { name: 'icon-60@3x.png',       width: 180,   height: 180 },
            { name: 'icon-72.png',          width: 72,    height: 72 },
            { name: 'icon-72@2x.png',       width: 144,   height: 144 },
            { name: 'icon-76.png',          width: 76,    height: 76 },
            { name: 'icon-76@2x.png',       width: 152,   height: 152 },
            { name: 'icon-83.5@2x.png',     width: 167,   height: 167 },
            { name: 'icon-small.png',       width: 29,    height: 29 },
            { name: 'icon-small@2x.png',    width: 58,    height: 58 },
            { name: 'icon-small@3x.png',    width: 87,    height: 87 }
        ],
        android: [
            { name: 'drawable-ldpi-icon.png',    width: 36,   height: 36,   density: "ldpi" },
            { name: 'drawable-mdpi-icon.png',    width: 48,   height: 48,   density: "mdpi" },
            { name: 'drawable-hdpi-icon.png',    width: 72,   height: 72,   density: "hdpi" },
            { name: 'drawable-xhdpi-icon.png',   width: 96,   height: 96,   density: "xhdpi" },
            { name: 'drawable-xxhdpi-icon.png',  width: 144,  height: 144,  density: "xxhdpi" },
            { name: 'drawable-xxxhdpi-icon.png', width: 192,  height: 192,  density: "xxxhdpi" }
        ],
        wp8: [
            { name: 'ApplicationIcon.png',  width: 99,   height: 99 },
            { name: 'Background.png',       width: 159,  height: 159 }
        ],
        windows: [],
        store: []
    }
};


var platformSplashsCatalogue = {
    phonegap: {
        ios: [
            { name:"screen-iphone-portrait.png", width:320, height:480 },           // iPhone
            { name:"screen-iphone-portrait-2x.png", width:640, height:960 },        // iPhone Retina
            { name:"screen-ipad-portrait.png", width:768, height:1024 },            // iPad
            { name:"screen-ipad-portrait-2x.png", width:1536, height:2048 },        // iPad Retina
            { name:"screen-ipad-landscape.png", width:1024, height:768 },           // iPad
            { name:"screen-ipad-landscape-2x.png", width:2048, height:1536 },       // iPad Retina
            { name:"screen-iphone-568h-2x.png", width:640, height:1136 },           // iPhone 5 Retina
            { name:"screen-iphone-portrait-667h.png", width:750, height:1334 },     // iPhone 6
            { name:"screen-iphone-portrait-736h.png", width:1242, height:2208 },    // iPhone 6 Plus
            { name:"screen-iphone-landscape-736h.png", width:2208, height:1242 },   // iPhone 6 Plus
        ],
        android: [
            { name:"screen-ldpi-portrait.png", width: 320, height: 426, density:"port-ldpi" }, // 200x320
            { name:"screen-ldpi-landscape.png", width: 426, height: 320, density:"land-ldpi" }, // 320x200
            { name:"screen-hdpi-portrait.png", width: 480, height: 640, density:"port-hdpi" }, // 320x480
            { name:"screen-hdpi-landscape.png", width: 640, height: 480, density:"land-hdpi" }, // 480x320
            { name:"screen-mdpi-portrait.png", width: 320, height: 470, density:"port-mdpi" }, // 480x800
            { name:"screen-mdpi-landscape.png", width: 470, height: 320, density:"land-mdpi" }, // 800x480
            { name:"screen-xhdpi-portrait.png", width: 720, height: 960, density:"port-xhdpi" }, // 720x1280
            { name:"screen-xhdpi-landscape.png", width: 960, height: 720, density:"land-xhdpi" } // 1280x720
        ],
        wp8: [
            { width: 768, height: 1280, name:"SplashScreenImage.jpg" },
            { width: 480, height: 800, name:"SplashScreenImage.screen-WVGA.jpg" },
            { width: 768, height: 1280, name:"SplashScreenImage.screen-WXGA.jpg" },
            { width: 720, height: 1280, name:"SplashScreenImage.screen-720p.jpg" }
        ],
        windows: [
            { width:620, height:300, name:"SplashScreen.scale-100.png" },
            { width:1152, height:1920, name:"SplashScreen.scale-240.png" },
            { width:1152, height:1920, name:"SplashScreenPhone.scale-240.png" },
        ],
        store: [
            { path: './android/', name: 'cover-store.png', width: 1024, height: 500 },
        ]
    },
    ionic: {
        ios: [
            { name: 'Default-568h@2x~iphone.png',     width: 640,   height: 1136 },
            { name: 'Default-667h.png',               width: 750,   height: 1334 },
            { name: 'Default-736h.png',               width: 1242,  height: 2208 },
            { name: 'Default-Landscape-736h.png',     width: 2208,  height: 1242 },
            { name: 'Default-Landscape@2x~ipad.png',  width: 2048,  height: 1536 },
            { name: 'Default-Landscape@~ipadpro.png', width: 2732,  height: 2048 },
            { name: 'Default-Landscape~ipad.png',     width: 1024,  height: 768 },
            { name: 'Default-Portrait@2x~ipad.png',   width: 1536,  height: 2048 },
            { name: 'Default-Portrait@~ipadpro.png',  width: 2048,  height: 2732 },
            { name: 'Default-Portrait~ipad.png',      width: 768,   height: 1024 },
            { name: 'Default@2x~iphone.png',          width: 640,   height: 960 },
            { name: 'Default~iphone.png',             width: 320,   height: 480 }
        ],
        android: [
            { name: 'drawable-land-ldpi-screen.png',    width: 320,   height: 240,   density: 'land-ldpi' },
            { name: 'drawable-land-mdpi-screen.png',    width: 480,   height: 320,   density: 'land-mdpi' },
            { name: 'drawable-land-hdpi-screen.png',    width: 800,   height: 480,   density: 'land-hdpi' },
            { name: 'drawable-land-xhdpi-screen.png',   width: 1280,  height: 720,   density: 'land-xhdpi' },
            { name: 'drawable-land-xxhdpi-screen.png',  width: 1600,  height: 960,   density: 'land-xxhdpi' },
            { name: 'drawable-land-xxxhdpi-screen.png', width: 1920,  height: 1280,  density: 'land-xxxhdpi' },
            { name: 'drawable-port-ldpi-screen.png',    width: 240,   height: 320,   density: 'port-ldpi' },
            { name: 'drawable-port-mdpi-screen.png',    width: 320,   height: 480,   density: 'port-mdpi' },
            { name: 'drawable-port-hdpi-screen.png',    width: 480,   height: 800,   density: 'port-hdpi' },
            { name: 'drawable-port-xhdpi-screen.png',   width: 720,   height: 1280,  density: 'port-xhdpi' },
            { name: 'drawable-port-xxhdpi-screen.png',  width: 960,   height: 1600,  density: 'port-xxhdpi' },
            { name: 'drawable-port-xxxhdpi-screen.png', width: 1280,  height: 1920,  density: 'port-xxxhdpi' }
        ],
        wp8: [
            { name: 'SplashScreenImage.png',  width: 768,   height: 1280 }
        ],
        windows: [],
        store: []
    }
}

var data = {
    icons: platformIconsCatalogue,
    splashs: platformSplashsCatalogue
}

module.exports = data