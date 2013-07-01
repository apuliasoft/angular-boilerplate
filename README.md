# [angular-boilerplate](https://github.com/apuliasoft/angular-boilerplate)

A ready-to-go simple boilerplate to start a fresh new [AngularJS](http://angularjs.org) project.

Visit [this link](http://www.apuliasoft.com/blog/angularjs-boilerplate-nuova-applicazione/) for an article (in Italian)
about the structure of this boilerplate.

***

## Quick start

Install latest version of Node.js then:

```sh
$ git clone git://github.com/apuliasoft/angular-boilerplate
$ cd angular-boilerplate
$ sudo npm -g install karma bower
$ bower install
```

You now have a skeleton structure to write your AngularJs application!

## Pre packaged libs

`angular-boilerplate` comes prepackaged with some of the most useful design packages:
[Twitter Bootstrap](http://getbootstrap.com),
[Angular Bootstrap](http://angular-ui.github.io/bootstrap),
[Font Awesome](http://fortawesome.github.com/Font-Awesome).

The packages are not distributed in the repository, but you must run `bower install` 
in the project directory to install the packages described in the file `bower.json`
in the root directory.

## Directory structure

```
angular-boilerplate/
  |- app/
  |  |- css/
  |  |  |- <app css>
  |  |- img/
  |  |- js/
  |  |  |- controllers/
  |  |  |  |- controllers.js
  |  |  |  |- <other controllers>
  |  |  |- directives/
  |  |  |  |- directives.js
  |  |  |  |- <other directives>
  |  |  |- filters/
  |  |  |  |- filters.js
  |  |  |  |- <other filters>
  |  |  |- services/
  |  |  |  |- services.js
  |  |  |  |- <other services>
  |  |- lib/
  |  |  |- <third party libs>
  |  |- partials/
  |  |  |- <html partials>
  |  |- index.html
  |- config/
  |  |- <karma configuration>
  |- logs/
  |- scripts/
  |  |- <various javascript scripts>
  |- test/
  |  |- e2e/
  |  |- lib/
  |  |- unit/
  |- .bowerrc
  |- .gitignore
  |- .travis.yml
  |- bower.json
  |- README.md
```

What follows is a brief descritpion of the most important entries.

- `app/` - The main application folder where all the app logic and files go.
- `js/` - In this folder goes all the javascript logic of the angular app
 - `controllers/` - In this folder there is a main `controllers.js` file and all the controllers of the app (possibly split in subfolders)
 - `directives/` - In this folder there is a main `directives.js` file and all the directives of the app (possibly split in subfolders)
 - `filters/` - In this folder there is a main `filters.js` file and all the filters of the app (possibly split in subfolders)
 - `services/` - In this folder there is a main `services.js` file and all the services of the app (possibly split in subfolders)
- `lib/` - This is the folder in which `bower` will install the third party libraries specifide in the `bower.json` file
- `.bowerrc` - file for the ocnfiguration of `bower`.


### A note on intalling packages with `bower`

If in the future you want to install new packages via `bower` you should place in the root folder and run the command:

```
bower install packagename --save-dev
```
In this way the package will be installed in the `lib` folder and the `bower.json` file will be update
with the info about the new package, so a future `bower install` command will also install the new package.
