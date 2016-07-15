Angular2 + Ionic2

Don't forget to put your mlab key in service

Installing Ionic
Improve this doc

Like Ionic 1, Ionic 2 apps can be quickly created from the Ionic CLI or GUI tool or built and tested right in the browser.

To install the Ionic SDK and create Ionic 2 projects, you’ll need to install the latest beta release:

$ npm install -g ionic@beta
Make sure you have NodeJS installed. Download the installer here or use your favorite package manager. It’s best to get the 5x version of node along with the 3x version of npm. This offers the best in stability and speed for building.

Unfamiliar with NPM? Learn more about it and what packages we use here

Worried about your V1 Ionic projects? Don’t worry! The beta release has all the functionality to work with both V1 projects and V2 projects.

Once that’s done, create your first Ionic app:

$ ionic start cutePuppyPics --v2
To run your app, cd into the directory that was created and then run the ionic serve command:

$ cd cutePuppyPics
$ ionic serve