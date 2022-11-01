# explore-cordova
Exploring Apache Cordova for wrapping our html/js site into an app.

I want to learn how Apache Cordova works, as mentioned by Prof in lecture and provide some simple documentation for the team to follow. This way our application can continue to be developed for a mobile environment.

The actual app is a very simple calculator, using very simple CSS and HTML, and a small amount of JS code in order to check functionality.

## Getting Started ##


## Research Notes ##
These are unorganized thoughts that I had while playing around in this sandbox.

Powell said there is sort of an architecture decision we can make with web apps. We can do Progessive Web Apps or Packaged (Mobile) Web Apps.
I think that becasue we are doing a local first application, doing a packaged web app would be better. This is because we can use it without access internet, and adopt the devices storage system to store our app's data easily.

### Progressive ###
This is basically a webiste that is up and easily accessible on the internet, but its responive so you can view and interact easily with it through your browser. Something like if you searched up reddit or something through safari or chrome.

### Packaged ###
This is basically when you take the html/css/js lightweight browser that you've written and package it with a lightweight browser ninary that "runs" this code. This way has all of the content packages as one app on your screen. Think the reddit app or even facebook messenger.

With Apache Cordova we cant add it to an existing repository, but we can add existing files to an apache project. With this 'wrapper' we are going to start a new cordova project and then add our files to it. With Cordova theres a thing called a platform, which is basically the medium that you want to develop for. Theres "windows", "android". "ios" etc. Each of these are how to we want the app to be rolled up and packaged for us.

Setting up the android / ios development may take more time than expected.

Additionally we don't have a good way to save and auto-update the app.

## Authors ##
Elliot Lee (eal001@ucsd.edu)
