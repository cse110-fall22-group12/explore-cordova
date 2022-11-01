# explore-cordova
Exploring Apache Cordova for wrapping our html/js site into an app.

I want to learn how Apache Cordova works, as mentioned by Prof in lecture and provide some simple documentation for the team to follow. This way our application can continue to be developed for a mobile environment.

The actual app is a very simple calculator, using very simple CSS and HTML, and a small amount of JS code in order to check functionality.

## Background ##
There are 2 ways that this app can be laid out, PWA and a Packaged Naive App. I prefer the native approach, however it may not be possible with ths project. Apache Cordova provides some good functionality for developing a native app. 

### Progressive ###
This is basically a webiste that is up and easily accessible on the internet, but its responive so you can view and interact easily with it through your browser. Something like if you searched up reddit or something through safari or chrome.

### Packaged ###
This is basically when you take the html/css/js lightweight browser that you've written and package it with a lightweight browser ninary that "runs" this code. This way has all of the content packages as one app on your screen. Think the reddit app or even facebook messenger.


## Research Notes ##
These are unorganized thoughts that I had while playing around in this sandbox.

With Apache Cordova we cant add it to an existing repository, but we can add existing files to an apache project. With this 'wrapper' we are going to start a new cordova project and then add our files to it. With Cordova theres a thing called a platform, which is basically the medium that you want to develop for. Theres "windows", "android". "ios" etc. Each of these are how to we want the app to be rolled up and packaged for us.

Prof said there is sort of an architecture decision we can make with web apps. We can do Progessive Web Apps or Packaged (Mobile) Web Apps.
I think that becasue we are doing a local first application, doing a packaged web app would be better. This is because we can use it without access internet, and adopt the devices storage system to store our app's data easily.

Setting up the android / ios development may take more time than expected.

Additionally we don't have a good way to save and auto-update the app.

Overall this tool seems pretty good, but deploying it to an emulator and making sure your version is up to date feels very annoying.  It seems like you need an additional emulation tool to test your changes. There is no getting around that. I have not found a good way to simplify the edit-compile-test workflow unfortunately.

## Alternatives to Cordova ##
Ionic and Electron are the other frameworks mentioned that can handle implementation of Native Apps like this. 

### Ionic ###
- there is no official vanilla html/js setup documentation for ionic 
- [page transitions with ionic and vanilla js](https://www.reddit.com/r/ionic/comments/soq2qx/is_ionic_development_actually_doable_without_a_js/)

### Electron ###
- electron focuses on desktop applications, not mobile applications


## Getting Started With This Project ##
Using this description uses Node Package Manager, but any package manager probably works. idk i havent tried. Im using npm v6.14.13.
1. First we need to have the apache cordova tool installed.
```
> npm install -g cordova
```
2. Next to install all plugins and platforms. This is installing the different deployment methods for the project. This project uses browser and android deployment.
```
> cordova prepare
```
3. Running the app in browser. You can terminate and restart this process by typing <kbd>Ctrl</kbd> + <kbd>C</kbd>
```
> cordova run browser
```
Running app in android environment is not so easy. First we have to install the Android Build Tools / Android Studio and JDK. These are the pieces of software taht emulate the mobile environment. The [Cordova Android Development Page](https://cordova.apache.org/docs/en/11.x/guide/platforms/android/index.html) details all of the next steps for enabling mobile development.
**NOTE**: its impossible to develop for android on Mac Mini 2020 with MacOS Monterey and the M1 Chip (the hardware that I'm using).

Running app in ios environment is not easy either. First we need to install XCode, homebrew, ios-deploy, and cocoapods. These are the pieces of software that emulate the ios mobile environment. The [Cordova iOS Development Page](https://cordova.apache.org/docs/en/11.x/guide/platforms/ios/index.html) details all of the next steps for enabling mobile development.
**NOTE**: its impossible to develop for ios on any machine that is not iOS.

## Authors ##
Elliot Lee (eal001@ucsd.edu)
