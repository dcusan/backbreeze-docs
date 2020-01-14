(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"UB7+":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("E/Ix"),s=n("LmON");var i={},o={_frontmatter:i},r=function(e){var t=e.children;return Object(a.mdx)(s.a,{title:"Installation",subline:"Using Backbreeze in your Sass project."},t)};function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(a.mdx)(r,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"There are multiple ways to use ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://sass-lang.com/"}),"Sass")," and multiple Sass versions. All Testing for this library is done using ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/sass/node-sass"}),Object(a.mdx)("inlineCode",{parentName:"a"},"node-sass")),". There are some recommendations you can find on the ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://sass-lang.com/install"}),"Sass website")," on how to install Sass."),Object(a.mdx)("p",null,"A common way to include Sass processing in your project is to use a build tool or task runner like: ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/webpack-contrib/sass-loader"}),"Webpack"),", ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/gulp-sass"}),"Gulp"),", ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://parceljs.org/scss.html"}),"Parcel")," or just npm scripts."),Object(a.mdx)("p",null,"This guide assumes that you have a running Sass setup and are using a ",Object(a.mdx)("inlineCode",{parentName:"p"},"main.scss")," file (name is not relevant) to include all your Sass partials."),Object(a.mdx)("p",null,"NOTE: Backbreeze is not (yet) written using the new ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://sass-lang.com/blog/the-module-system-is-launched"}),"module system")," to be more compatible with older codebases. This might change in the future."),Object(a.mdx)("h2",{id:"installation-via-npm"},"Installation via NPM"),Object(a.mdx)("p",null,"Backbreeze is distributed via ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/backbreeze"}),"npm"),"."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ npm install --save backbreeze\n")),Object(a.mdx)("p",null,"Alternatively you can clone the git repository. And copy the files to some location in your project. This approach is not recommended as you will not have automatic updates and bug fixes."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"# Clone from GitHub\n$ git clone https://github.com/nicolas-cusan/backbreeze.git\n\n# Go into directory\n$ cd backbreeze\n\n# Remove the git folder\n$ rm -rf .git\n")),Object(a.mdx)("h2",{id:"including-in-your-project"},"Including in your project"),Object(a.mdx)("p",null,"Backbreeze provides two Sass partials: ",Object(a.mdx)("inlineCode",{parentName:"p"},"_config.scss")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"_utilities.scss"),". Due to the way default variables work in Sass you need to overwrite any Backbreeze variables ",Object(a.mdx)("strong",{parentName:"p"},"before")," including the Backbreeze ",Object(a.mdx)("inlineCode",{parentName:"p"},"_config.scss")," file. It is recommended to include the ",Object(a.mdx)("inlineCode",{parentName:"p"},"_utilities.scss")," partial last to enable overwriting of any other styles."),Object(a.mdx)("p",null,"To keep things tidy it is also recomended to have a ",Object(a.mdx)("inlineCode",{parentName:"p"},"_vars.scss")," (name is not relevant) partial to hold your Backbreeze configuration (Learn how to configure Backbreeze ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/configuration/"}),"here"),")."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"// main.scss\n\n// Project variables and Backbreeze configuration\n@include 'vars';\n\n// Backbreeze `_config.scss` (file path might vary depending on your setup)\n@include 'path/to/node_modules/backbreeze/src/config';\n\n// Reset stylesheet\n@include 'path/to/node_modules/destyle.css';\n\n// Custom project styles\n@include 'my-include';\n@include 'my-other-include';\n// ....\n\n// Backbreeze `_utilities.scss` last to overwrite any other styles\n// (file path might vary depending on your setup)\n@include 'path/to/node_modules/backbreeze/src/utilities';\n")),Object(a.mdx)("h2",{id:"other-ways-to-use-backbreeze"},"Other ways to use Backbreeze"),Object(a.mdx)("p",null,"The Backbreeze npm package includes a compiled CSS version of the library with the default values. However as Backbreeze does not provide many default values it is not recommended to use this version. In addition to that Backbreeze generates a lot of classes so file size might be an issue. It is highly recommended to remove unused classes from your code base for production, you can learn more about it ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/using-in-production/"}),"here"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-installation-mdx-a491c72602ab878cf928.js.map