var fs = require('fs');
var path = require('path');
var xml2js = require('xml2js');
var ig = require('imagemagick');
var colors = require('colors');
var _ = require('underscore');
var Q = require('q');
var nodeFs = require('node-fs');

var catalogues = require('./platform-catalogues.js');

var platformIconsCatalogue = catalogues.icons;
var platformSplashsCatalogue = catalogues.splashs;

var VALID_TRANSFORMATION_METHODS = ['crop', 'resize'];

/**
 * Check which platforms are added to the project and return their icon names and sized
 *
 * @param  {String} projectName
 * @return {Promise} resolves with an array of platforms
 */
var getPlatformIcons = function() {
    var deferred = Q.defer();
    var platforms = [];
    //ok
    platforms.push({
        name: 'ios',
        isAdded: true,
        iconsPath: 'res/icons/ios/',
        icons: platformIconsCatalogue[mainPlatform]['ios']
    });

    //ok
    platforms.push({
        name: 'android',
        iconsPath: 'res/icons/android/',
        isAdded: true,
        icons: platformIconsCatalogue[mainPlatform]['android']
    });

    //ok
    platforms.push({
        name: 'wp8',
        iconsPath: 'res/icons/wp8/',
        isAdded: true,
        icons: platformIconsCatalogue[mainPlatform]['wp8']
    });

    //ok
    platforms.push({
        name: 'windows',
        iconsPath: 'res/icons/windows/',
        isAdded: true,
        icons: platformIconsCatalogue[mainPlatform]['windows']
    });

    //ok
    platforms.push({
        name: 'store',
        iconsPath: 'store/icons/',
        isAdded: true,
        icons: platformIconsCatalogue[mainPlatform]['store']
    });

    platforms = settings.ICON_PLATFORMS || platforms

    deferred.resolve(platforms);
    return deferred.promise;
};

/**
 * Check which platforms are added to the project and return their splash screen names and sizes
 *
 * @param  {String} projectName
 * @return {Promise} resolves with an array of platforms
 */
var getPlatformSplashs = function() {
    var deferred = Q.defer();
    var platforms = [];

    //ok
    platforms.push({
        name: 'ios',
        isAdded: true,
        splashPath: 'res/screens/ios/',
        splash: platformSplashsCatalogue[mainPlatform]['ios']
    });

    //ok
    platforms.push({
        name: 'android',
        isAdded: true,
        splashPath: 'res/screens/android/',
        splash: platformSplashsCatalogue[mainPlatform]['android']
    });

    //ok
    // https://msdn.microsoft.com/en-us/library/windows/apps/ff769511(v=vs.105).aspx
    platforms.push({
        name: 'wp8',
        isAdded: true,
        splashPath: 'res/screens/wp8/',
        splash: platformSplashsCatalogue[mainPlatform]['wp8']
    });

    //ok
    platforms.push({
        name: 'windows',
        isAdded: true,
        splashPath: 'res/screens/windows/',
        splash: platformSplashsCatalogue[mainPlatform]['windows']
    });

    platforms.push({
        name: 'store',
        isAdded: true,
        splashPath: 'store/screens/',
        splash: platformSplashsCatalogue[mainPlatform]['store']
    });

    platforms = settings.SPLASH_PLATFORMS || platforms

    deferred.resolve(platforms);
    return deferred.promise;
};

/**
 * @var {Object} settings - names of the confix file and of the icon image
 * TODO: add option to get these values as CLI params
 */
var settings = {};
settings.ICON_FILE = path.join('model', 'icon.png');
settings.SPLASH_FILE = path.join('model', 'splash.png');
settings.MAIN_PLATFORM = 'phonegap';
settings.TRANSFORMATION_METHOD = 'crop';

/**
 * @var {String} current main platform to fetch icons and splash data (currently supports 'phonegap' and 'ionic')
 */

var mainPlatform = settings.MAIN_PLATFORM;

/**
 * @var {Object} console utils
 */
var display = {};
display.success = function(str) {
    str = '✓  '.green + str;
    console.log('  ' + str);
};
display.error = function(str) {
    str = '✗  '.red + str;
    console.log('  ' + str);
};
display.header = function(str) {
    console.log('');
    console.log(' ' + str.cyan.underline);
    console.log('');
};
display.info = function(str) {
    console.log('');
    console.log(' ' + str.underline);
    console.log('');
};

/**
 * Resizes and creates a new icon in the platform's folder.
 *
 * @param  {Object} platform
 * @param  {Object} icon
 * @return {Promise}
 */
var generateIcon = function(platform, icon) {
    var deferred = Q.defer();
    try {
        var filePath = path.join(mainPlatform, platform.iconsPath, icon.name);
        var filedirName = path.dirname(filePath);
        if (!fs.existsSync(filedirName)) {
            nodeFs.mkdirSync(filedirName, '0777', true);
        }
        ig.resize({
            srcPath: settings.ICON_FILE,
            dstPath: filePath,
            quality: 1,
            format: icon.name.replace(/.*\.(\w+)$/i, '$1').toLowerCase(),
            width: icon.width || icon.size,
            height: icon.height || icon.size,
        }, function(err, stdout, stderr) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve();
                display.success(icon.name + ' created');
            }
        });
    } catch (error) {
        deferred.reject(err);
    }
    return deferred.promise;
};

/**
 * Generates icons based on the platform object
 *
 * @param  {Object} platform
 * @return {Promise}
 */
var generateIconsForPlatform = function(platform) {
    var deferred = Q.defer();
    display.header('Generating Icons for ' + platform.name);
    var all = [];
    var icons = platform.icons;
    icons.forEach(function(icon) {
        all.push(generateIcon(platform, icon));
    });
    Q.all(all).then(function() {
        deferred.resolve();
    }).catch(function(err) {
        console.log(err);
    });
    return deferred.promise;
};

/**
 * Goes over all the platforms and triggers icon generation
 *
 * @param  {Array} platforms
 * @return {Promise}
 */
var generateIcons = function(platforms) {
    var deferred = Q.defer();
    var sequence = Q();
    var all = [];
    _(platforms).where({
        isAdded: true
    }).forEach(function(platform) {
        sequence = sequence.then(function() {
            return generateIconsForPlatform(platform);
        });
        all.push(sequence);
    });
    Q.all(all).then(function() {
        deferred.resolve();
    });
    return deferred.promise;
};


/**
 * Checks if a valid icon file exists
 *
 * @return {Promise} resolves if exists, rejects otherwise
 */
var validIconExists = function() {
    var deferred = Q.defer();
    fs.exists(settings.ICON_FILE, function(exists) {
        if (exists) {
            display.success(settings.ICON_FILE + ' exists');
            deferred.resolve(true);
        } else {
            display.error(settings.ICON_FILE + ' does not exist in the root folder');
            deferred.resolve(false);
        }
    });
    return deferred.promise;
};


var validMainPlatform = function(key) {
    var deferred = Q.defer();

    var catalog = catalogues[key],
        result  = !!(catalog && !!(catalog[mainPlatform]))

    if(!result) {
        display.error(mainPlatform + ' is not a valid platform name for ' + key + ' generation');
    }

    deferred.resolve(result);

    return deferred.promise;
}

var validSplashPlatform = function() {
    return validMainPlatform('splashs')
}

var validIconPlatform = function() {
    return validMainPlatform('icons')
}


var transformationFunctionName = function(transformationMethod) {
    var valids = VALID_TRANSFORMATION_METHODS,
        _func = ((_.includes(valids, transformationMethod) && transformationMethod) || 'crop');

    return _func;
}

/**
 * Crops and creates a new splash in the platform's folder.
 *
 * @param  {Object} platform
 * @param  {Object} splash
 * @return {Promise}
 */
var generateSplash = function(platform, splash) {
    var deferred = Q.defer();
    try {
        var filePath = path.join(mainPlatform, platform.splashPath, splash.name);
        var filedirName = path.dirname(filePath);
        if (!fs.existsSync(filedirName)) {
            nodeFs.mkdirSync(filedirName, '0777', true);
        }

        var _funcToCall = transformationFunctionName(settings.TRANSFORMATION_METHOD);

        var args = [{
            srcPath: settings.SPLASH_FILE,
            dstPath: filePath,
            quality: 1,
            format: splash.name.replace(/.*\.(\w+)$/i, '$1').toLowerCase(),
            width: splash.size || splash.width,
            height: splash.size || splash.height,
        }, function(err, stdout, stderr) {
            if (err) {
                console.log('ImageMagick ERROR: ' + err);
                deferred.reject(err);
            } else {
                deferred.resolve();
                display.success(splash.name + ' created');
            }
        }];


        ig[_funcToCall].apply(null, args);

    } catch (error) {
        display.error('Something went wrong...');
        console.log(error);

        deferred.reject(err);
    }


    return deferred.promise;
};

/**
 * Generates splash based on the platform object
 *
 * @param  {Object} platform
 * @return {Promise}
 */
var generateSplashForPlatform = function(platform) {
    var deferred = Q.defer();
    display.header('Generating splash screen for ' + platform.name);
    var all = [];
    var splashes = platform.splash;
    splashes.forEach(function(splash) {
        all.push(generateSplash(platform, splash));
    });
    Q.all(all).then(function() {
        deferred.resolve();
    }).catch(function(err) {
        console.log(err);
    });
    return deferred.promise;
};

/**
 * Goes over all the platforms and triggers splash screen generation
 *
 * @param  {Array} platforms
 * @return {Promise}
 */
var generateSplashes = function(platforms) {
    var deferred = Q.defer();
    var sequence = Q();
    var all = [];

    display.info('Generating splashs screens using ' + settings.TRANSFORMATION_METHOD + ' transformation method');

    _(platforms).where({
        isAdded: true
    }).forEach(function(platform) {
        sequence = sequence.then(function() {
            return generateSplashForPlatform(platform);
        });
        all.push(sequence);
    });
    Q.all(all).then(function() {
        deferred.resolve();
    });
    return deferred.promise;
};
/**
 * Checks if a valid splash file exists
 *
 * @return {Promise} resolves if exists, rejects otherwise
 */
var validSplashExists = function() {
    var deferred = Q.defer();
    fs.exists(settings.SPLASH_FILE, function(exists) {
        if (exists) {
            display.success(settings.SPLASH_FILE + ' exists');
            deferred.resolve(true);
        } else {
            display.error(settings.SPLASH_FILE + ' does not exist in the root folder');
            deferred.resolve(false);
        }
    });
    return deferred.promise;
};



var validTransformationMethod = function() {
    var deferred = Q.defer();

    var valids = VALID_TRANSFORMATION_METHODS,
        isValid = _.includes(valids, settings.TRANSFORMATION_METHOD);

    deferred.resolve(isValid);

    if(!isValid) {
        display.error(settings.TRANSFORMATION_METHOD + ' is not a valid image transformation method. Try one of those ' + valids);
    }

    return deferred.promise;
}


function generate(options) {
    settings = options || settings;
    mainPlatform = settings.MAIN_PLATFORM || 'phonegap';

    display.header('Checking Splash & Icon');
    return Q.all([validTransformationMethod(), validIconPlatform(), validSplashPlatform(), validIconExists(), validSplashExists()])
        .then(function(results) {

            display.header('Generating resources for platform:');
            display.success(mainPlatform);

            var hasIcon = results[0] === true;
            var hasSplash = results[1] === true;
            var promise;

            if (!hasIcon && !hasSplash) {
                //console.log(arguments);
                promise = Q.reject();
            }

            if (hasIcon) {
                promise = Q.when(promise)
                    .then(getPlatformIcons)
                    .then(generateIcons);
            }

            if (hasSplash) {
                promise = Q.when(promise)
                    .then(getPlatformSplashs)
                    .then(generateSplashes);
            }

            return Q.when(promise);
        })
        .catch(function(err) {
            if (err) {
                console.log(err);
            }
        }).then(function() {
            console.log('');
        });
}

module.exports = {
    generate: generate
};