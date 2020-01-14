(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Ea6w:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return m}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var n=t("E/Ix"),i=t("LmON");var s={},l={_frontmatter:s},r=function(e){var a=e.children;return Object(n.mdx)(i.a,{title:"Usage",subline:"Applying Backbreeze classes in your project."},a)};function m(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.mdx)(r,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(n.mdx)("h2",{id:"using-the-backbreeze-classes"},"Using the Backbreeze classes"),Object(n.mdx)("p",null,"Backbreeze provides what is often called utility classes or atomic CSS. That means that it provides classes where each class applies one CSS property and one value for that property. To achieve complex styles what you need to do is combine classes together:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<div class="c-white p-4 bg-black">\n  <h3 class="fw-bold mb">\n    My title\n  </h3>\n  <p class="o-0.5">\n    Subtitle goes here\n  </p>\n</div>\n')),Object(n.mdx)("h2",{id:"responsive-and-mobile-first"},"Responsive and mobile first"),Object(n.mdx)("p",null,"Almost all Backbreeze generated classes are responsive (all can be made responsive via configuration if needed), that means they provide variants to change styles across breakpoints."),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<div class="c-white c-black@sm">\n  This text will be white on mobile and black starting at the breakpoint `sm`\n</div>\n')),Object(n.mdx)("p",null,"All Backbreeze media queries use ",Object(n.mdx)("inlineCode",{parentName:"p"},"(min-width: ...)")," exclusively, therefor a regular Backbreeze class style (a class without a ",Object(n.mdx)("inlineCode",{parentName:"p"},"@")," screen size modifier) will always be applied unless overwritten by a ",Object(n.mdx)("inlineCode",{parentName:"p"},"@")," class for a larger screen size. This approach is called mobile first. Create styles for mobile devices and modify them as needed when the screen gets wider."),Object(n.mdx)("h2",{id:"reset-stylesheet"},"Reset stylesheet"),Object(n.mdx)("p",null,"It is recommended to use a reset style sheet of some kind, that can be ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://necolas.github.io/normalize.css/"}),"normalize.css")," or (shameless plug ahead) ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://nicolas-cusan.github.io/destyle.css/"}),"destyle.css")," which is well suited to for a utility approach to styling as it removes all browser default styles, this way classes are only ",Object(n.mdx)("em",{parentName:"p"},"additive")," and do not have to be used to remove styles."),Object(n.mdx)("h2",{id:"the-class-names"},"The class names"),Object(n.mdx)("p",null,"Backbreeze class names are generated using the following pattern:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{}),".[-][<NAMESPACE>-]<PROPERTY NAME>-<VALUE>[:<PSEUDO>][@<BREAKPOINT>]\n")),Object(n.mdx)("p",null,"Pattern break down:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"[-]")," Classes with negative values start with a ",Object(n.mdx)("inlineCode",{parentName:"li"},"-")," (dash)"),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"[<NAMESPACE>-]")," Namespace to distinguish Backbreeze classes from others, it is set via ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"/configuration#bb-namespace"}),Object(n.mdx)("inlineCode",{parentName:"a"},"$bb-namespace")),". There is no namespace set by default"),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"<PROPERTY NAME>")," Name that describes the property the class is setting. More frequently used properties will have shorter names e.g. a single letter, more infrequently used properties have longer names. In general class names try to be short but not to clever to make guessing a class name easy. e.g. ",Object(n.mdx)("inlineCode",{parentName:"li"},"ta")," (for ",Object(n.mdx)("inlineCode",{parentName:"li"},"text-align"),")"),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"<VALUE>")," Property value set via the key in the values variable for this utility e.g. ",Object(n.mdx)("inlineCode",{parentName:"li"},"center")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"[:<PSEUDO>]")," Activation of the property on this pseudo selector e.g. ",Object(n.mdx)("inlineCode",{parentName:"li"},":hover"),", ",Object(n.mdx)("inlineCode",{parentName:"li"},":focus")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"[@<BREAKPOINT>]")," Breakpoint on which to apply this class e.g. ",Object(n.mdx)("inlineCode",{parentName:"li"},"@sm")," (from ",Object(n.mdx)("inlineCode",{parentName:"li"},"sm")," screens upwards, set via ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"/configuration#bb-bps"}),Object(n.mdx)("inlineCode",{parentName:"a"},"$bb-bps")),")")),Object(n.mdx)("p",null,"Example (without namespace)"),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<div class="p-20 p-40@sm -mb-30">\n  <h2 class="fs-20 lh-1.2">\n    <a class="c-primary:hover@md" href="#">\n      John Smith\n    </a>\n  </h2>\n</div>\n')),Object(n.mdx)("p",null,"Example breakdown:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},Object(n.mdx)("inlineCode",{parentName:"strong"},"<div>")),Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"p-20"),": add a padding of ",Object(n.mdx)("inlineCode",{parentName:"li"},"20px")," all around"),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"p-40@sm"),": change the padding to ",Object(n.mdx)("inlineCode",{parentName:"li"},"40px")," from ",Object(n.mdx)("inlineCode",{parentName:"li"},"sm")," screens upwards"),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"-mb-30"),": add a negative margin of ",Object(n.mdx)("inlineCode",{parentName:"li"},"30px")," on the bottom",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},Object(n.mdx)("inlineCode",{parentName:"strong"},"<h2>")),Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"fs-20"),": set the the font size to ",Object(n.mdx)("inlineCode",{parentName:"li"},"20px")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"lh-1.2"),": set the line height to ",Object(n.mdx)("inlineCode",{parentName:"li"},"1.2"),Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},Object(n.mdx)("inlineCode",{parentName:"strong"},"<a>")),Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"c-primary:hover@md"),": change the color when hovered from ",Object(n.mdx)("inlineCode",{parentName:"li"},"md")," screens upwards")))))))))))),Object(n.mdx)("h2",{id:"using-backbreeze-variables-in-your-code"},"Using Backbreeze variables in your code"),Object(n.mdx)("p",null,"As everything is just Sass you can use all variables / values via the regular sass mechanisms:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"// Using some color in a module\n.my-module {\n  color: map-get($bb-color, 'primary');\n}\n")),Object(n.mdx)("p",null,"You can also use your own variables to define Backbreeze values:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"$primary: #4a90e2;\n\n// Use color in Backbreeze classes\n$bb-color-values: (\n  'primary': $primary,\n  // ...,\n);\n\n// Use color in a module\n.my-module {\n  color: $primary;\n}\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-usage-mdx-be792d6448997cc42abb.js.map