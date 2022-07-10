# YakoUI

This project is part of the [Heterogeneous Computing Farm](https://github.com/JiahuiChen99/Heterogeneous-Computing-Farm), my Bachelor of Science in Computer Science senior thesis.
YakoUI is the front-end application for the Yako platform powered by ElectronJS and VueJS.

<p align="center">
    <img src="https://raw.githubusercontent.com/JiahuiChen99/YakoUI/main/src/resources/demo/cluster_graph.png" alt="Cluster graph"/>
    <img src="https://raw.githubusercontent.com/JiahuiChen99/YakoUI/main/src/resources/demo/dashboard.png" alt="Dashboard"/>
</p>

## 👩‍💻 For developers

### Prerequisites

- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)

#### 🧰 Run the project

These instructions will get you a copy of the project and run on your local machine for development and testing purposes.

```
// Clone git repository
git clone https://github.com/JiahuiChen99/YakoUI.git

// Installing project dependencies
npm install

//Electron application 
npm run electron:serve

// Runs a nodeJS web server at default port 8080 
npm run serve
```

#### 🏗️ Build the project

The following commands will build YakoUI for different target systems. Make sure to delete **--publish=onTagOrDraft** flag first, from the script in **package.json**.

```
// Clone git repository
git clone https://github.com/JiahuiChen99/YakoUI.git

// Installing project dependencies
npm install

// WINDOWS OS
npm run build-win

// LINUX OS
// Caveat: make sure to have `libarchive-tools` or `bsdtar` to build for **.pacman**. Or comment it out
npm run build-linux

// MAC OS
npm run build-mac
```