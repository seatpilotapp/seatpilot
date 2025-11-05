# SolidJS\: The Complete Guide  
A comprehensive guide to reactive web development with SolidJS and TypeScript  
Sinan Polat SolidJS\: The Complete Guide by Sinan Polat  
Copyright © 2024 Sinan Polat. All rights reserved.  
October 2024\: First Edition, V6  
All rights reserved. No part of this book may be reproduced, stored in a retrieval system, or  
transmitted in any form or by any means, without the prior written permission by the  
author, except in the case of brief quotations embedded in critical articles or reviews.  
The effort has been made to ensure the accuracy of the information and instructions  
presented. However, the information contained in this work is sold without warranty, either  
express or implied. Neither the author, nor its dealers or distributors, will be held liable for  
any damages caused or alleged to have been caused directly or indirectly by this work. Use of  
the information and instructions contained in this work is at your own risk.  
If any code samples or other technology this work contains or describes is subject to the  
intellectual property rights of others, it is your responsibility to ensure that your use thereof  
complies with such licenses and/or rights. **Table of Contents**  
**Chapter 01\: Introduction**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Contact and Feed  
back 12  
Requirements 12  
Trying Solid via Online Playground Creating a Project From a Template **11**  
13  
14  
Note For React Developers 14  
**Chapter 02\: Setting Up a Development Environment**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **15**  
**Chapter 03\: On SolidJS**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **21**  
The Problem Solid Solves 21  
How Solid Works? 24  
Reactive Data 25  
Composable UI 27  
The Advantages of Solid  
Over Its Alternatives 31  
**Chapter 04\: How Solid’s Reactive System Works**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . O  
bserver Pattern 38  
The Essence of Reactive Core **37**  
39  
The Uses of Computations 48  
**Chapter 05\: Tracking State with Signals**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **51**  
Overwriting the Comparison Logic 52  
Updating Signals 54  
Deriving Values 55  
Destructuring Signals 55  
Batching Updates 56  
**Chapter 06\: Running Side-Effects with Effects**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **57**  
Effects Can Be Nested 59  
xplicit Tracking 61  
Opting Out of Tracking 61  
E  
5 Handling E  
xternal Dependencies 62  
**Chapter 07\: Caching Values with Memos**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **65**  
**Chapter 08\: Rules of JSX**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **71**  
Elements Should Be Closed 72  
Elements Can Be Nested 74  
xpressions Can Be Used Inside JSX  
Elements 74  
Elements Can Have Attributes 76  
Missing Attribute Values Default to true 78  
Comments 78  
Whitespaces Are Trimmed 78  
**Chapter 09\: Composing User Interfaces**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **81**  
Components Should Return a Single Root Element 84  
Components Accept Data Through Their props 86  
Adding Static Types to Components 86  
Components Can Have Children 89  
How  
Components Are Rendered 92  
Conditional Rendering 96  
Reactive props 100  
Props Should Be Treated as Read-Only  
101  
Destructuring Props Changes the Rendering Order 102  
Effects Are E  
xecuted After Rendering 104  
Best Practices 106  
**Chapter 10\: Working with Props**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Passing Data From Parent to Child Sharing State Between Children 108  
Providing Controlled Access to Parent’s Data Passing Data From Child to Parent Destructuring and Spreading Props 111  
Forwarding Multiple Props at Once **107**  
107  
110  
111  
113  
Validating Props 114  
**Chapter 11\: Sharing Data Through the Context API**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **115**  
How  
Context API Works 116  
Best Practices 122  
# Chapter 12\: Component Lifec  
# y  
**cle**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **123**  
onMount 125  
onCleanup 126  
Best Practices 126  
# Chapter 13\: Accessing D  
**OM Nodes With** ref . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **129**  
Forwarding Refs 133  
Using Refs with E  
xternal Libraries 134  
Best Practices 137  
E  
6 **Chapter 14\: Working with Computations**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **139**  
createComputed 140  
createRenderEffect 141  
createEffect 144  
createMemo 144  
createDeferred 144  
createReaction 145  
**Chapter 15\: Handling Errors**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .**149**  
ErrorBoundary 149  
catchError 151  
Handling Asynchronous Errors 153  
**Chapter 16\: Working with Owners**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **155**  
Accessing Currently  
xecuting Computation 159  
Reactivity in Asynchronous Context 159  
E  
**Chapter 17\: Styling Elements**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **163**  
Using Inline Styles 163  
Applying Style Definitions 164  
Applying Classes Conditionally  
165  
Using the Imperative API 166  
**Chapter 18\: Reactive Utilities**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **171**  
batch 171  
untrack 172  
on 172  
createRoot 173  
mergeProps 173  
splitProps 174  
mapArray and indexArray 174  
observable 175  
from 175  
startTransition and useTransition 179  
**Chapter 19\: A Better Conditional Rendering**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **181**  
Show  
184  
Keyed Rendering 185  
Render Props 187  
Switch and Match 188  
**Chapter 20\: Working with Lists**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **191**  
For 193  
mapArray 193  
Index  
194  
7indexArray 195  
Selecting Items with Selectors 197  
**Chapter 21\: Rendering Components Outside the Component Hierarchy**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **203**  
**Chapter 22\: Managing Complex States with Stores**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .**207**  
Accessing Data 209  
Updating Stores 210  
Limitations Related to Reactivity  
211  
Store Utilities 212  
produce 212  
reconcile 213  
unwrap 214  
createMutable 215  
**Chapter 23\: Abstracting Behavior With Custom Directives**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **217**  
xtending JSX Type with Custom Directives 220  
Using Imported Directives 221  
E  
**Chapter 24\: Working with Asynchronous Data**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **223**  
Decoupling Fetching From Rendering 228  
**Chapter 25\: Using Resource API for Data Fetching**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **233**  
Info O  
bject 238  
Resource Actions 238  
Handling Errors 239  
**Chapter 26\: Managing Loading States with Suspense**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **247**  
# Chapter 27\: Achieving Better Consistenc  
**y with Transitions**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .**253**  
**Chapter 28\: Coordinating Loading States**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **261**  
# Chapter 29\: Code Splitting and  
# Lazy  
**Loading**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **263**  
**Chapter 30\: Handling Events**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .**269**  
Using the on Namespace 269  
Using the on\: Namespace 273  
Using the oncapture\: Namespace 274  
Using Custom Properties 275  
Using Refs 276  
Using Custom Directives 277  
Passing Data to the Event Handlers 279  
# Chapter 31\:  
# D  
**ynamically Rendering Components**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **283**  
**Chapter 32\: Server Side Rendering**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .**291**  
Targeting the Server Context 298  
Targeting the Development Build 298  
8 Rendering a Solid App 298  
**Chapter 33\: Solid Without JSX**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **309**  
Solid  
Solid  
Draw  
with Tagged Template Literals 309  
with Hyperscript 313  
backs 316  
**A1\: Setting Development Environment Using Webpack**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **317**  
Installing Dependencies 317  
Configuring Webpack 319  
Configure the Webpack Dev Server 323  
Add TypeScript Support 324  
Add Eslint Support 325  
Create a Basic Application 326  
**About the Author**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **329**  
9 **CHAPTER 01**  
# Introduction  
This is a comprehensive book that aims to teach you the ins and outs of Solid, covering its  
core principles, the inner workings, and the API. By the end of this book, you will have a  
thorough understanding of Solid to write efficient applications.  
Solid is a lightweight JavaScript library for building applications that can run on both the  
client and server side. It can be used as a standalone library or alongside other libraries, as it  
is designed to be small and efficient.  
Solid does not introduce any novel approaches to frontend development, but instead  
borrows the best ideas from other battle-tested libraries, including KnockoutJS, React, Vue,  
and Marko. It is built on proven concepts and ideas, making it a pleasure to use.  
Solid has a relatively small API surface; its core library exposes only a handful of items.  
However, the intricacies of reactivity and its implementation involve complex interactions  
between its parts, which makes it really hard to explain some of the concepts without a  
lengthy discussion. While I’ve avoided repetitions as much as possible, occasional reminders  
were necessary to present the topic in a complete and coherent way, eliminating the need to  
go back and forth between chapters to understand the concept at hand.  
When there are multiple ways of doing something, for instance, accessing underlying dom  
elements, we discuss the pros and cons of each approach, and provide tips on the best  
practices when appropriate.  
Like any other library, Solid has its own quirks that might leave you puzzled. I have tried to  
shed light on the root causes of those quirks, rather than merely mentioning them, and  
included callouts to help you steer clear of probable pitfalls around them, if there are any.  
11 This book is based on Solid v1.8, but rest assured, the concepts and principles we explore  
aren’t closely tied to any single version. Even as Solid continues to evolve, the core ideas and  
foundational logic will stay consistent, so you’ll find lasting value in these pages regardless of  
version updates. I hope what you learn here will keep serving you well.  
# Contact and Feed  
# back  
As we journey together through the contents of this book, your insights and experiences will  
be invaluable. Even with our best efforts, we understand that there may be areas that could  
be improved, clarified, or corrected. Whether it's a typo, a conceptual error, or a suggestion  
for improvement, we welcome your feedback.  
To make the process as smooth as possible, we've created a dedicated repository for you to  
share your thoughts, criticisms, and suggestions. Please visit https\:/ /github.com/solid-  
courses/solidjs-the-complete-guide to submit your feedback. You can open a new issue to  
detail your findings or suggestions.  
Your feedback is crucial not only to improve this book but also to enhance the learning  
experience of future readers. By contributing your insights, you'll help create a more  
accurate, comprehensive, and user-friendly resource for anyone interested in Solid. We  
greatly appreciate your time and effort in helping us achieve this goal.  
# Requirements  
This book requires basic knowledge of JavaScript, HTML, and CSS. We won’t delve into  
language-related concepts, maybe briefly touch upon a few of them when there is a need for  
them.  
Examples are written in TypeScript. However, even if you have never used TypeScript before,  
you should be able to understand them, as an explanation will accompany any code snippet  
that is too complex or requires a certain TypeScript feature to be turned on.  
If you don’t want to use TypeScript at all, you need to set up your development environment  
accordingly. There is a pre-built template from the core library for using JavaScript only.  
Ignoring types will be enough to make the code examples work.  
We will need Node.js for both building and running the code examples. Node.js is a JavaScript  
12 | Requirements runtime environment. There are plenty of resources on the Internet on how to install and  
run Node.js. We won’t use the Node.js binary directly but through pnpm commands. Pnpm is  
a package manager that is an alternative to npm, the officially supported package manager of  
Node.js. Pnpm offers some valuable improvements over npm, which reduces the installation  
time and the space taken up by packages.  
# Trying Solid via Online Playground  
The easiest way to get started with Solid is by using the online Playground. Head to the Solid  
website and navigate to the playground page\: https\:/ /playground.solidjs.com.  
Figure 1-1. Solid Playground  
The Playground allows you to experiment with Solid in a safe and interactive environment.  
You can run code and check for errors. The playground automatically executes any code you  
write and displays the output in the result tab.  
At times, automatic execution might result in issues if the code is incomplete. In those  
situations, you can use the refresh button to refresh the output window manually.  
Solid is a compiled library. You can inspect the compiled output on the output tab. You can  
select different compilation targets using the radio buttons at the bottom of the output  
window.  
Trying Solid via Online Playground | 13 The playground allows you to work with multiple files. You can share your code using the  
share button. This feature comes in very handy when asking for help. You can recreate the  
issue and share the link.  
You can reset the editor window by clicking on the trash icon.  
The bell icon next to the reset button toggles the error reporting.  
# Creating a Project From a Template  
You can create a local Solid project using one of the project templates offered by the core  
team\: https\:/ /github.com/solidjs/templates.  
\$ npx degit solidjs/templates/js my-app  
\$ cd my-app  
\$ pnpm i  
\$ pnpm run dev  
You can use typescript if you like\:  
\$ npx degit solidjs/templates/ts my-app  
\$ cd my-app  
\$ pnpm i  
\$ pnpm run dev  
In the next section, we will create our own development environment from scratch using  
Vite. Until then, you can use the online playground to get your feet wet.  
# Note For React Developers  
Solid and React have almost nothing in common other than using JSX for their UI layer. Solid  
has its own compiler, which produces a different output than React’s. It has its own  
rendering paradigm and its own way of keeping state. If you are familiar with React, it is best  
to leave your assumptions and expectations aside and try to adapt to Solid’s way of doing  
things to save your time and effort.  
14 | Note For React Developers **CHAPTER 02**  
# Setting Up a Development Environment  
In this chapter, we will create a basic development environment for writing single-page Solid  
applications using Vite.  
The Solid documentation recommends using Vite for building apps, so we will use Vite for  
the majority of our examples. However, occasionally we will need additional tools, for  
instance, when working with server-side rendering, which we will introduce in their  
respective chapters.  
It is important to note that Vite is not a hard dependency for Solid. Solid’s only dependency  
is its Babel plugin which is babel-preset-solid. We have chosen Vite for its features, such  
as fast refresh, which enables us to swap the application’s code while maintaining its state,  
built-in TypeScript support, and the ability to use CSS modules for styling components.  
If you prefer alternative bundlers, please refer to Appendix 1, Setting Up the Development  
Environment with Webpack for guidance on using Solid with Webpack. These instructions  
can easily be adapted for other bundlers as well.  
We are going to use pnpm to run npm commands for it offers a better developer experience  
over npm. However, you can keep using npm if you like.  
With that being said, let’s begin our development journey.  
First, create an empty folder\:  
mkdir my-app  
And navigate into it\:  
15cd my-app/  
Once you are inside, initialize a new npm project by running\:  
pnpm init  
Open the folder in your preferred code editor. Here, I use Visual Studio Code to open the  
current directory\:  
code .  
Then install the required dependencies\:  
pnpm i -D vite solid-js vite-plugin-solid typescript  
As you see, Vite reduces the number of dependencies to a few modules.  
Next, we create a few files at the root of our project\:  
touch index.html tsconfig.json vite.config.ts  
index.html will be served by Vite’s development server and it contains the entry point to  
our Solid application\:  
\<!DOCTYPE html\>  
\<html lang="en"\>  
\<head\>  
\<meta charset="utf-8" /\>  
\<title\>My App\</title\>  
\</head\>  
\<body\>  
\<div id="root"\>\</div\>  
\<script src="/src/index.tsx" type="module"\>\</script\>  
\</body\>  
\</html\>  
The index.html file loads index.tsx which we are going to create in a moment.  
tsconfig.json provides the TypeScript configuration\:  
\{  
"compilerOptions"\: \{  
"strict"\: true,  
"target"\: "ESNext",  
"module"\: "ESNext",  
"moduleResolution"\: "node",  
16 | Chapter 02. Setting Up a Development Environment"allowSyntheticDefaultImports"\: true,  
"esModuleInterop"\: true,  
"isolatedModules"\: true,  
"jsx"\: "preserve",  
"jsxImportSource"\: "solid-js",  
"types"\: \["vite/client"\],  
"noEmit"\: true  
\}  
\}  
"jsx"\: "preserve" instructs TypeScript not to compile JSX files but to pass them as-is so  
that we can use Babel-js for that task.  
"jsxImportSource"\: "solid-js" sets solid-js as the JSX runtime. The  
jsxImportSource setting is required to provide static types to JSX elements.  
NOTE  
jsxImportSource declares the module from which to import the jsx and jsxs factory  
functions when running files with tsx and jsx extensions.  
https\://www.typescriptlang.org/tsconfig\#jsxImportSource  
CAUTION  
If you are using VSCode and did not set TypeScript properly, the editor will emit an error  
like the one below\:  
Cannot find name 'React'  
If you fail to set jsxImportSource option, you will have an error like this one\:  
JSX element implicitly has type 'any' because no interface  
'JSX.IntrinsicElements' exists.  
These are the only Solid-specific options we need to set.  
"types"\: \["vite/client"\], option imports types from the vite/client module. You can  
learn more about this feature in the Vite documentation\:  
https\:/ /vitejs.dev/guide/features.html\#client-types  
You can consult the TypeScript docs for the remaining settings\:  
https\:/ /www.typescriptlang.org/tsconfig  
Now, open the vite.config.js file and add the following content\:  
Chapter 02. Setting Up a Development Environment | 17import \{ defineConfig \} from 'vite';  
import solid from 'vite-plugin-solid';  
export default defineConfig\(\{  
plugins\: \[solid\(\)\],  
\}\);  
Here we modified the default Vite configuration with an additional plugin. vite-plugin-  
solid internally uses Babel-JS to transform jsx/tsx files and provides hot module  
replacement with fast-refresh support.  
Now, let’s open the package.json file and add a few scripts\:  
"scripts"\: \{  
"dev"\: "vite --port 3000",  
"build"\: "vite build",  
"serve"\: "vite preview --port 3000"  
\}  
The dev script runs Vite’s development server. The port parameter sets the port number for  
the server.  
Although the port value is not required, we set it to provide clear instructions. If the  
specified port is busy, Vite will continuously increment the port number and connect to the  
first available port.  
The build script builds the application while the serve script serves the application we  
built.  
Now, it’s time to create a simple Solid application. First, add a new folder called src on the  
root directory, and then create the index.tsx file inside. Make sure the file path matches  
the src attribute we used in the index.html file.  
mkdir src  
touch src/index.tsx  
Add the following script to index.tsx\:  
import \{ render \} from 'solid-js/web';  
export const App = \(\) =\> \{  
return \(  
\<div\>Hello World!\</div\>  
\);  
\}  
18 | Chapter 02. Setting Up a Development Environmentrender\(\(\) =\> \<App /\>, document.getElementById\('root'\)!\);  
This SolidJS code imports the render function from the solid-js/web package and then  
defines an App component that returns a single div element with the text "Hello World!".  
Finally, the render function is called to mount the App component to the DOM element with  
the ID root. The HTML-like syntax used here is called JSX, which is employed to define the  
component's structure in a manner that resembles HTML. Solid utilizes JSX to construct the  
view layer.  
The render function requires us to provide a component that returns a JSX element.  
Although we wrap the App component in an anonymous function in our example, both of  
these usages are valid because the App function itself is a component that returns a JSX  
element\:  
render\(App, document.getElementById\('root'\)\);  
render\(\(\) =\> \<App /\>, document.getElementById\('root'\)\);  
In this book, we prefer the second method due to difficulties with Vite's HMR using the first  
one; it fails to replace the imported modules. In other words, you may have issues with HMR  
if you pass the App component directly to the render function\:  
render\(App, document.getElementById\('root'\)\);  
In those situations, try changing App to \(\) =\> \<App /\> to resolve the issue\:  
render\(\(\) =\> \<App /\>, document.getElementById\('root'\)\);  
If the problem persists, you can try to force a full-page refresh by using the @refresh  
reload pragma. Open the module file that you wish to refresh the page for when changes  
are made, and insert the following comment at the top of the file\:  
// @refresh reload  
This pragma instructs the HMR system to fully reload the page when this module is updated.  
NOTE  
In the context of Hot Module Replacement \(HMR\), a pragma is a special comment or  
annotation in the source code that directs the HMR system on how to handle module  
updates. The @refresh reload pragma, in particular, triggers a full page reload,  
ensuring all changes are applied cleanly.  
The ! symbol that follows the mount point in the render call is known as the non-null  
Chapter 02. Setting Up a Development Environment | 19 assertion operator. It tells the TypeScript compiler to treat the element as if it is guaranteed  
to not be null or undefined\:  
document.getElementById\('root'\)!  
To run the development server, we need to execute the dev command in the terminal\:  
pnpm run dev  
Now, visit http\://localhost\:3000/ in your browser to see the result.  
Now, let’s update the application by adding a few exclamation marks, just to see if fast-  
refresh works\:  
\<div\>Hello World!!\</div\>  
You should see the exclamation marks appear on the screen without the need to restart the  
server or refresh the page. If not, it means your development server does not work as  
expected. You need to check if you’ve made any mistakes while setting it up.  
With the setup complete, we are now ready to dive into how Solid works.  
20 | Chapter 02. Setting Up a Development Environment **CHAPTER 03**  
# On SolidJS  
In this chapter, we will have a high-level overview of Solid, covering the fundamental  
principles that Solid is built upon. If you find any of these concepts difficult to grasp, don’t  
worry as we will delve into each one of them in greater detail later in the book.  
Before getting into how Solid works, let’s talk about the problems Solid aims to solve.  
# The Problem Solid Solves  
We create applications to manipulate data. Data may come from various sources, such as  
databases or files, or it may be hard-coded into the program.  
The data that the application operates on lives inside the computer’s memory. What we see  
on the screen is its visual representation. Data is the source of truth, but the pixel on the  
screen is its manifestation.  
In an actual application, data changes over time. We use the term state to describe the state  
of data at a specific point in time. When data changes, we need to change its visual  
representation too, to avoid inconsistencies.  
For example, consider a character’s position in a 2D video game using the following pseudo-  
code\:  
Position \{ x\: 0, y\: 0 \}  
21 When the player presses an arrow key for moving or jumping, the data that controls the  
character’s position changes. The program needs to update the character’s visual  
representation on the screen too. It is essential to keep track of data and ensure that all its  
representations reflect its actual state.  
There are different approaches to solving this synchronization problem.  
In non-reactive systems, when we update the state we update its visual representation too.  
This is a tedious and error-prone task, so we structure our application in a certain way to  
minimize errors, which is commonly referred to as an architectural pattern. MVC, MVP, and  
Flux are some well-known examples of architectural patterns.  
For example, in the MVC pattern, the Model represents the state of data, the View is the  
visual representation of the model, and the Controller is the glue code that runs the  
synchronization logic between the Model and the View. After updating the state, the Model  
calls the controller and the controller updates the UI layer. Usually, there is an explicit  
invocation of the method that notifies the view layer of a change.  
However, adhering to a specific architectural pattern can be limiting, especially for large  
applications, and they bring their own set of problems.  
In reactive systems, data is reactive and the UI derives its state directly from the data.  
Updating data triggers a synchronization logic that updates the UI. This practically makes  
the UI a side effect, reducing potential errors.  
View = fn\(State\)  
In this approach, fn is a transform function that takes the state as input and produces a  
corresponding view. Since fn is pure, it always outputs the same result for a given state,  
making it easy to reason about the behavior of the system.  
Synchronizing the state and the UI is important, but it is not the only problem we face when  
working with browsers. Modern browsers have a very complex rendering pipeline. A piece of  
data goes through several successive stages before being displayed on the page.  
Let’s take a look at these stages briefly and then talk about how Solid helps us with them\:  
1\. Construction of the DOM Tree\: This is the initial step where data is converted into a  
tree-like structure called the DOM. Depending on the source of the data, DOM nodes  
can be created programmatically using the browser API or it could be generated  
automatically by the browser using the HTML code that is returned from the server.  
22 | Chapter 03. On SolidJS 2\. 3. 4. 5. 6. Construction of the CSSOM Tree\: The CSS is parsed into a CSS Object Model \(CSSOM\)  
tree. The browser takes the CSS code and constructs another tree-like structure called  
the CSSOM, which represents the styles and visual rules for the web page. This step is  
crucial because it determines the visual appearance of the elements on the page.  
Render Tree Construction\: The browser takes the DOM and CSSOM trees and  
combines them into a single tree, called the Render Tree. This tree represents the visual  
structure of the web page, including the styles and positions of each element,  
determining which elements should be displayed and how they should be laid out.  
Layout\: In this stage, the browser figures out where the elements go on the page. It  
calculates the position and size of each element in the Render Tree, based on factors  
like the viewport size and element dimensions.  
Painting\: The browser takes the Render Tree and paints the elements onto the screen,  
applying styles, colors, and textures. At this stage, the end user can see the element on  
the page, however, elements that are part of the composited layers may not be fully  
interactive until the compositing stage is complete.  
Compositing\: The painted elements are composited together to form the final image  
displayed on the screen called a frame. Elements are stacked together or put into layers  
based on their properties like z-index. Once the layers are created, they are organized  
into a Layer Tree. This tree structure maintains the hierarchy of the visual elements and  
their relationships, allowing the browser to understand which elements are in front of  
or behind others. This stage is especially important for complex animations and  
scrolling. The composited frame is then sent to the screen for display. High refresh rate  
displays require this process to occur at a minimum of 60 times per second \(60 Hz\) to  
provide a smooth and fluid user experience.  
It's important to note that this pipeline is not a strictly linear process. Modern browsers  
employ various optimization techniques, such as speculative parsing, and incremental  
rendering, to improve the perceived performance and responsiveness of web pages.  
However, improper actions on our part can disrupt this process, leading to significant  
performance degradation and user experience issues.  
For example, if you modify the element's size after it is painted, you will force the browser to  
recalculate the layout and repaint the element. Applying certain CSS properties like opacity,  
transform, or filter can cause the browser to create a new compositing layer for the affected  
element.  
Chapter 03. On SolidJS | 23 Layout calculations and repaints are expensive operations that can significantly impact  
performance. If you manipulate DOM nodes while they go through these stages, you will  
break the pipeline and make the process fall back to the previous stage, or worse it will make  
the browser cancel all the work it did and start over.  
Understanding the rendering pipeline is vital for performance optimization. By minimizing  
unnecessary reflows and repaints, we can enhance the efficiency of our web applications.  
Solid, like many modern frameworks, observes the browser's rendering pipeline when  
building and modifying the DOM tree. It helps us to minimize DOM modifications, allowing  
us to batch them and apply them together, as this can minimize the number of reflows and  
repaints.  
Long-running JavaScript tasks can block the main thread, causing the browser to freeze and  
preventing updates to the rendering pipeline. Solid employs a scheduler to gain more control  
over the rendering pipeline, allowing it to optimize performance, prioritize updates, and  
maintain a smooth and responsive user experience. Because of this, even if we run a state  
update in a tight loop, Solid's UI never becomes unresponsive.  
Solid also helps us to take advantage of various optimization techniques like code splitting  
and lazy loading which can improve the application's initial load time and perceived  
performance.  
In conclusion, Solid helps us to write more efficient JavaScript code, ensuring a smoother  
user experience.  
# How Solid Works?  
At its core, Solid has two guiding principles and everything else revolves around them\:  
Reactive data  
Composable UI  
Reactive data means the changes to the data are propagated to all interested parties,  
including the UI layer. This ensures that the UI is always up-to-date and reflects the current  
state of the data.  
Composable UI means the UI layer is constructed from small, reusable pieces called  
components. Components can be combined to build highly complex applications. This  
approach makes it easier to develop, test, and maintain the UI code.  
24 | How Solid Works? **Reactive Data**  
Solid uses signals for reactive data. The concept of a signal is quite simple\: It is a wrapper  
around a regular JavaScript value that keeps a list of subscribers which are notified whenever  
the value changes.  
To create a signal, we import the createSignal function into the current module and call it  
with an initial value\:  
import \{ createSignal \} from "solid-js";  
const \[getCount, setCount\] = createSignal\(0\);  
↑ ↑  
// accessor setter  
createSignal returns an array with two items\: a getter and a setter. The getter function,  
commonly referred to as the signal accessor, retrieves the stored value, while the setter  
function updates it.  
We use array destructuring to extract them onto local variables.  
Array destructuring is a deliberate design choice because\:  
We can use any variable name we prefer.  
It provides separation of concerns by enforcing read-and-write segregation.  
Signals provide unidirectional data flow by design. Data is always updated at its source, only  
then the new value trickles down to its consumers through effects.  
Although having an isolated setter and a getter function is not a requirement for  
unidirectional data flow, it prioritizes readability over the co-location of the said functions.  
Signals can store any type of data, including complex objects.  
Signals are tracked within a tracking scope. A tracking scope, also known as a reactive  
context, is a function scope created by createEffect or similar functions from the core  
module that can create subscribers to monitor reactive values. These subscribers are  
designed to perform specific tasks, such as running side effects, and are deeply integrated  
into the reactive system.  
import \{ createEffect \} from "solid-js";  
createEffect\(\(\) =\> \{  
console.log\(getCount\(\)\);  
How Solid Works? | 25\}\);  
createEffect creates an effect that is called whenever the signal updates. The callback  
function we pass to createEffect needs to read the signal in order to subscribe to it.  
Subscription takes place automatically upon reading the signal.  
Since getCount is a function, we had to call it to retrieve the value.  
Solid uses a naming convention for the getter functions that do not include the get prefix, for  
example, count instead of getCount.  
While this convention may be confusing at first, it is an intentional design choice that  
promotes clear and concise variable names. The benefit becomes more apparent when we  
introduce the concept of derived signals which are pure functions that transform reactive  
values.  
const double = \(\) =\> count\(\) \* 2;  
Note that double is not a reactive value itself but recalculates its value each time it is called.  
When used within a reactive scope, like in createEffect, it re-runs its transformation  
whenever the effect re-executes\:  
createEffect\(\(\) =\> \{  
console.log\(double\(\)\);  
\}\);  
We will revisit this topic later in Chapter 5, Tracking State With Signals.  
Now that we have created our effect, we can update the signal. We will use the setInterval  
function\:  
setInterval\(\(\) =\> \{  
setCount\(count\(\) + 1\);  
\}, 1000\);  
This code sets a timer that increments the count value by 1 every second.  
Each signal keeps its own subscribers. When an effect reads a signal, it will be added to the  
signal’s subscribers queue.  
There is a dynamic dependency between an effect and a signal.  
There is no manual process for subscribing or unsubscribing; it all occurs automatically.  
When the code is executed, the effect reads the signal and gets added to the signal’s  
subscribers and called back when the signal’s value is updated. Once it is called back, the  
26 | How Solid Works? effect will be removed from the subscribers. If the effect re-reads the signal while it is being  
called back, it will be added to the subscribers again to be called upon the next update. We  
will explain the reason for this later when learning about Solid’s reactive core.  
If an effect fails to read a signal for some reason, such as the signal being wrapped in a  
conditional statement, the effect will not be able to subscribe to the signal.  
let x = 0;  
createEffect\(\(\) =\> \{  
if\(x \> 5\) \{  
console.log\(count\(\)\);  
\}  
\}\);  
There are many-to-many relationships between signals and effects. An effect can subscribe  
to multiple signals. A signal can be observed by multiple effects.  
# Composable UI  
We already mentioned that being composable means the UI layer is made up of small,  
independent, reusable pieces called components that can be put together to form complex  
structures.  
A Solid component is a JavaScript function that returns a JSX element. JSX is a special syntax  
that resembles HTML or XML but is more powerful, as it allows the execution of JavaScript  
expressions within it. We use JSX elements to describe what we want to see on the page.  
Components serve as building blocks for applications.  
Here is a simple Solid component that returns H1 element with "Hello World!" as its  
content\:  
const Greeting = \(\) =\> \{  
return \<h1\>Hello World!\</h1\>  
\}  
Solid uses a compiler to convert JSX elements into native DOM nodes. The component above  
will be converted into the following code\:  
import \{ template as \_\$template \} from "solid-js/web";  
var \_tmpl\$ = /\*\#\_\_PURE\_\_\*/\_\$template\(\`\<h1\>Hello World!\`\);  
const Greeting = \(\) =\> \{  
return \_tmpl\$\(\);  
\}  
How Solid Works? | 27 Solid does not use document.createElement calls in the compiled output but instead uses  
HTML strings that produce HTML fragments. That is for achieving a better performance  
while producing a smaller bundle size.  
The template function creates DOM nodes from the provided string value.  
The /\*\#\_\_PURE\_\_\*/ comment is a directive for the compiler indicating that the function call  
it precedes is pure. This means the function always returns the same result if given the same  
arguments.  
We will revisit this topic later in Chapter 09, Composing User Interfaces.  
Now that we have a component, it is time to display it on the screen. We use the render  
function for it.  
The entry point for any Solid application is the render function. It takes two arguments, a  
component to render \(which we call the root component\), and a DOM element to mount the  
returned value of the root component\:  
import \{ render \} from 'solid-js/web';  
const Greeting = \(\) =\> \{  
return \<h1\>Hello World!\</h1\>  
\}  
NOTE  
render\(Greeting, document.body\);  
Although mounting applications directly onto the body element is strongly discouraged,  
we will do it for clarity and simplicity. It is discouraged because body is a common ancestor  
for all page elements, and it could be mutated by other libraries as well, causing  
inconsistencies and hard-to-catch bugs.  
The render function is not exported by the core module but through solid-js/web. The  
aim is to isolate the core library from runtime-dependent logic, allowing Solid to be used  
inside different runtime environments without conflict.  
Solid owes its composable traits to JSX, and JSX supports a variety of features that make it  
very practical and easy to work with.  
JSX allows us to nest components\:  
import \{ render \} from "solid-js/web";  
28 | How Solid Works?const Heading = \(\) =\> \<h1\>Hello World!\</h1\>;  
const Message = \(\) =\> \<p\>Here is a message for you.\</p\>;  
const App = \(\) =\> \{  
return \(  
\<div\>  
\<Heading /\>  
\<Message /\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.getElementById\('root'\)\);  
We can use expressions inside a JSX element via \{\}. An expression is a unit of code that  
evaluates to a value.  
const Counter = \(\) =\> \{  
const \[count, setCount\] = createSignal\(0\);  
setInterval\(\(\) =\> \{  
setCount\(count\(\) + 1\);  
\}, 1000\);  
return \(  
\<div\>Count\: \{count\(\)\}\</div\>  
\);  
\}  
We can render elements conditionally using a ternary expression\:  
const Counter = \(\) =\> \{  
const \[count, setCount\] = createSignal\(0\);  
setInterval\(\(\) =\> \{  
setCount\(count\(\) + 1\);  
\}, 1000\);  
return \(  
\<div\>Count\: \{count\(\)\} \{count\(\) % 2 === 0 ? 'Even' \: 'Odd'\}\</div\>  
\);  
\}  
Components receive arguments through special properties called props\:  
\<Greeting name="John Doe" age=\{25\} /\>  
How Solid Works? | 29 Props are passed to the component definition via the props object\:  
function Greeting\(props\) \{  
return \<h1\>Hello, \{props.name\}! You are \{props.age\} years old!\</h1\>;  
\}  
const App = \(\) =\> \<Greeting name="John Doe" age=\{25\} /\>;  
render\(\(\) =\> \<App /\>, document.getElementById\('root'\)\);  
Composition and reactivity give us all the flexibility we need to write efficient and  
developer-friendly applications.  
Please note that these examples fall short of displaying the true power of JSX. Since we are  
going to have a dedicated chapter on JSX, we will move on now.  
Solid uses a compiler to convert JSX into DOM elements. Using a compiler brings certain  
benefits like producing smaller bundles with better-optimized code that we can not write by  
hand, at least not consistently.  
If you look at the frontend frameworks benchmarks, you will see that Solid applications are  
as performant as their vanilla JavaScript counterpart\:  
https\:/ /krausest.github.io/js-framework-benchmark/  
TIP  
Rendering benchmarks gives us an idea of how fast a library is, but we should approach  
these benchmarks with caution because the browser’s rendering pipeline will be the  
bottleneck for all competing projects. That is why there is a tiny diﬀerence between  
libraries unless the library does something very costly.  
In Solid, the state is completely decoupled from the UI, providing a more maintainable and  
scalable architecture.  
Let’s write an example demonstrating that\:  
import \{ createSignal \} from "solid-js";  
import \{ render \} from "solid-js/web";  
const Counter = \(\) =\> \{  
const \[count, setCount\] = createSignal\(0\);  
const handleClick = \(\) =\> \{  
setCount\(count\(\) + 1\);  
\};  
30 | How Solid Works?return \(  
\<div onClick=\{handleClick\}\>Count\: \{count\(\)\}\</div\>  
\)  
\}  
render\(\(\) =\> \<Counter /\>, document.querySelector\('\#root'\)\);  
In this example, the Counter component has its state stored in a signal that is scoped to the  
Counter function. However, we can move the state outside the component and into the  
parent scope, in this case, it is the global scope, and the component still functions as before.  
import \{ createSignal \} from "solid-js";  
import \{ render \} from "solid-js/web";  
const \[count, setCount\] = createSignal\(0\);  
const Counter = \(\) =\> \{  
const handleClick = \(\) =\> \{  
setCount\(count\(\) + 1\);  
\};  
return \(  
\<div onClick=\{handleClick\}\>Count\: \{count\(\)\}\</div\>  
\)  
\}  
render\(\(\) =\> \<Counter /\>, document.querySelector\('\#root'\)\);  
# The Advantages of Solid  
# Over Its Alternatives  
Now, let’s talk about what makes Solid a valuable tool for developing front-end applications.  
Performance  
First and foremost, Solid is a performant library and its performance can be attributed to its  
fine-grained reactive updates.  
If you inspect the following code inside the browser’s developer tools, you will see that only  
the innerText of the div element gets updated\:  
const Counter = \(\) =\> \{  
const \[count, setCount\] = createSignal\(0\);  
setInterval\(\(\) =\> \{  
setCount\(count\(\) + 1\);  
The Advantages of Solid  
Over Its Alternatives | 31\}, 1000\);  
return \(  
\<div\>Count\: \{count\(\)\}\</div\>  
\);  
\}  
render\(\(\) =\> \<Counter /\>, document.body\);  
Solid achieves this by compiling components into dynamic and static parts which we will  
discuss later in the book. Static parts remain unchanged, whereas dynamic parts are  
wrapped in an effect so that their content can be updated surgically.  
Unlike many popular frontend frameworks, Solid does not use virtual DOM but compiles to  
native DOM nodes. Using native DOM nodes and running fine-grained reactive updates make  
Solid apps more immune to performance degradations.  
Virtual DOM is a programming construct where you keep the UI layer in memory and sync it  
with the document only when there is a change in the state. This is done because DOM  
manipulations are slow and costly. Virtual DOM can have performance issues as it re-  
calculates and re-renders the entire DOM tree whenever there is a change in any of its  
branches, which may get worse as the DOM tree grows larger. To address this problem, some  
extra measures are taken, like diffing changes and batching updates, but they also come with  
their own problems.  
A consequence of using native DOM nodes is that a node moves when inserted in multiple  
places, as a DOM node can only be inserted once.  
function App\(\) \{  
let button = \<button\>Click\</button\>;  
return \(  
\<div\>  
\{button\}  
\<h1\>Hello World\</h1\>  
\{button\}  
\</div\>  
\);  
When rendered in the browser, the App component produces the following output\:  
\}  
\<div\>  
\<h1\>Hello World\</h1\>  
\<button\>Click\</button\>  
32 | The Advantages of Solid  
Over Its Alternatives\</div\>  
This behavior can lead to subtle bugs in your application if not handled properly. Always  
ensure that nodes are cloned or recreated when they need to appear in multiple parts of the  
DOM to avoid unintended side effects.  
A simple solution would be to convert the value into a function that returns the element,  
which you can then invoke multiple times\:  
function App\(\) \{  
let button = \(\) =\> \<button\>Click\</button\>;  
return \(  
\<div\>  
\{button\(\)\}  
\<h1\>Hello World\</h1\>  
\{button\(\)\}  
\</div\>  
\);  
\}  
This approach ensures that each call to button\(\) generates a new, distinct DOM node, thus  
avoiding issues related to the single-instance nature of DOM nodes.  
An alternative approach would be to define it as a component, which can then be used as  
follows\:  
import \{ render \} from "solid-js/web";  
function App\(\) \{  
let Button = \(\) =\> \<button\>Click\</button\>;  
return \(  
\<div\>  
\<Button /\>  
\<h1\>Hello World\</h1\>  
\<Button /\>  
\</div\>  
\);  
\}  
While this method is slightly more complex, as it results in the generation of  
createComponent calls behind the scenes, it enhances the modularity and maintainability of  
your code by encapsulating the button in its own component.  
The Advantages of Solid  
Over Its Alternatives | 33 Synchronous Execution  
In Solid, both state updates and effects are executed synchronously, making it  
straightforward to work with.  
Some libraries use asynchronous logic, utilizing either the microtasks or the event loop to  
execute effects. This is done to ensure consistency as an update may trigger subsequent  
updates that can put the UI layer in an inconsistent state or cause unnecessary re-renders.  
However, asynchronous rendering can make code difficult to reason about, limiting our  
ability to manage it effectively since we have less room for maneuvering.  
Vanishing Components  
In Solid, components serve the purpose of organizing code. They are executed only once  
when the application is loaded. Subsequent updates operate independently of the  
component structure. This approach gives way to better-optimized code with better  
developer experience as updates are not affected by the component structure.  
Compiled Code  
Solid employs a compiler to transform JSX into native DOM elements, resulting in smaller  
bundles. The use of a compiler offers several advantages, such as producing more optimized  
code, more consistent and predictable performance, and the ability to modify the output  
without altering the API or the semantics.  
Unidirectional Data Flow  
Signals offer unidirectional data flow by design which reduces code complexity and makes it  
easier to manage the flow of information within the application. In other words, it is easier to  
track data through the component tree.  
Declarative data and declarative UI  
Declarative programming is a style in which the consuming code declares what it needs and  
the component figures out the rest. The imperative code is abstracted away and hidden from  
the outside world.  
For example, consider you have a list of images and want to display them as a slideshow\:  
\<Slider  
images=\{\['1.png', '2.png', '3.png'\]\}  
duration=\{5\}  
autoplay=\{true\} /\>  
34 | The Advantages of Solid  
Over Its Alternatives The Slider component is responsible for rendering slides and managing the internal state.  
The code that consumes the Slider component doesn’t have to concern itself with these  
details. This approach allows developers to focus on the desired outcomes without having to  
manage the internal workings of the code.  
Interestingly, even components like the Slider largely adhere to SolidJS's declarative  
principles. While developers may manage specific behaviors such as timers for transitions,  
the overarching framework of SolidJS takes care of the deeper complexities.  
The declarative approach allows for a more focused and streamlined development process.  
Composable UI  
Solid components can be nested and they can be passed around like any other variable which  
makes them highly flexible and powerful, leading to more efficient and maintainable code.  
Modular and Portable  
Solid components offer clear boundaries and well-established relationships between data  
and UI, making them highly modular.  
With Solid, we can extract parts of our application into separate modules and use them  
anywhere we like, aligning well with React’s “write once, use everywhere” motto. However,  
unlike React components, Solid components do not trigger unexpected re-renders, thereby  
reducing potential bugs and performance issues.  
Furthermore, Solid’s custom directives allow us to abstract not only UI elements but also  
event listeners into reusable pieces. This means that you can write fully-functioning services  
in one project and import and use them in another one.  
SSR with streams  
Solid allows us to write isomorphic applications with server-side rendering. It provides a  
reactive API for fetching and rendering asynchronous data, which also supports streaming.  
Alternative rendering methods  
If you are unable to use a compiler for some reason, you can use Tagged Template Literals or  
HyperScript to skip the compilation step. While the output may not be as performant or as  
small as the compiled code, these alternative methods offer a viable option.  
Solid has a small API surface, produces small bundles, and offers good results in performance  
benchmarks.  
The Advantages of Solid  
Over Its Alternatives | 35 It is often easier to re-implement a library in Solid than in similar libraries like React, due to  
the factors we’ve discussed. The best part is that you can expect performance to match other  
implementations without needing extra optimizations or workarounds. Additionally, porting  
something into Solid typically takes much less time than with other libraries.  
36 | The Advantages of Solid  
Over Its Alternatives **CHAPTER 04**  
# How Solid’s Reactive System Works  
In the previous chapter, we covered reactive data just enough to get started. In this chapter,  
we will learn how Solid implements reactivity by writing our own reactive core that works  
the same way and has the same API as Solid’s.  
Solid’s reactivity is built on three core components\: signals, computations and memos.  
Signals serve as the data sources for other components in the system. They are observable  
values that can be subscribed to, allowing other components to receive notifications when  
their values change.  
const \[count, setCount\] = createSignal\(0\);  
A signal stores a single value of any data type. Each signal keeps its own subscribers and  
notifies them when its value changes.  
It is the computation object that subscribes to signals and gets notified when a signal’s value  
changes.  
createEffect\(\(\) =\> \{  
console.log\(\`Count is \$\{count\(\)\}\`\);  
\}\);  
The concept of computations is crucial for developing the correct mental model of the Solid  
runtime. Many pain points in Solid often stem from misunderstandings about the workings  
and interactions of computations within the reactivity system. The most frequently asked  
questions in the community often relate to how computations are created or executed and  
how dependencies are tracked. Without a solid grasp of these fundamentals, it’s easy to  
encounter unexpected behavior or performance issues. That’s why we’ve dedicated this  
37 chapter to an in-depth discussion of the internal APIs and mechanics of computations,  
providing the foundational knowledge needed to work effectively with Solid’s reactivity  
model.  
Computation is not an abstract concept but a concrete object with methods and properties.  
They are used within the core module and are not directly exposed to the outside world.  
There are various ways to create a computation. The createEffect function we have been  
using so far is just one of them. Other methods include createRenderEffect,  
createComputed, createMemo, createDeferred, createReaction.  
Although each function creates a computation internally, they either execute at different  
times to meet specific requirements for the tasks they perform or offer a different API suited  
to a particular need. For instance, the effects and the render effects are almost identical,  
except that the render effects are used specifically for rendering DOM nodes and have  
priority over the effects during their initial execution. Once the rendering phase is  
completed, they behave like the regular effects. We will discuss each of these functions in  
their respective topics.  
Solid does not execute a computation immediately; instead, it relies on a scheduler. When a  
signal triggers a computation, the computation is placed on the scheduler’s queue. The  
scheduler is an interruptible task queue that pauses briefly to run more critical code while  
updating the UI. Due to this feature, even if you update a signal within an effect in a way that  
could cause an infinite loop, the browser will not become unresponsive.  
While computations themselves don’t have priority, the scheduler’s execution logic achieves  
a similar outcome by effectively prioritizing computations in their execution order.  
# O  
# bserver Pattern  
Solid employs the observer pattern internally, but it does not rely on event streams or  
message passing, which may be confusing for some people who are familiar with other  
reactive libraries.  
There are numerous implementations of the observer pattern but they all boil down to three  
styles\: The ones that push the state to the observers, and the ones that let the observers pull  
the state according to their needs, and the ones that use both methods.  
Libraries such as RxJS and CycleJS use the push style\: An observable pushes the updated  
state to a subscriber in the form of an event or a message. Subscribers always receive the  
new state through an event.  
38 | O  
bserver Pattern A typical callback function for executing side-effects in such libraries is as follows\:  
function callback\(event\) \{\}  
SolidJS, Mobx, and Knockout use a combination of both the pull and push styles\: An  
observable notifies its subscribers, which constitutes the push phase, and each subscriber  
reaches for the new state as part of the pull phase. The most noteworthy aspect of this  
approach is that the new data is received from the source directly through re-execution,  
without any intermediate values or events. Consequently, their callback functions for  
executing side effects do not rely on events\:  
function callback\(\) \{\}  
Re-execution provides a simpler mental model with better performance characteristics,  
while the event streams can quickly get unwieldy with multiple observables because now we  
need to use conditionals to handle different events in the subscriber’s logic, or we have to  
transform them before they are passed to their consumers so that they can be consumed  
directly. That’s why libraries like RxJS are full of operators that create new observables from  
other observables by merging, splitting and transforming them.  
Although Solid uses the observer pattern, its documentation does not explicitly use terms  
associated with this pattern. The reasons for this avoidance are not clearly stated, but it may  
be an intentional effort to minimize technical jargon and reduce the cognitive load that  
comes with the observer pattern.  
It’s time to get our hands dirty and re-implement Solid’s reactivity  
# The Essence of Reactive Core  
Let’s start with the requirements for a signal.  
A signal should\:  
Store a value that changes over time.  
Maintain a list of subscribers.  
Notify subscribers whenever the value changes.  
Add and remove subscribers, as a subscriber’s dependency may change over time.  
Provide read-write segregation through getter and setter functions.  
Here is a basic implementation that satisfies some of our requirements\:  
function createSignal\<T\>\(value\: T\)\: \[\(\) =\> T, \(val\: T\) =\> void\] \{  
const subscribers\: Set\<Computation\> = new Set\(\);  
The Essence of Reactive Core | 39const read = \(\) =\> \{  
return value;  
const write = \(nextValue\: T\) =\> \{  
value = nextValue;  
\};  
\};  
return \[read, write\];  
\}  
Here, we did not create a local variable to store the value but instead used the one provided  
by the function. We also didn’t directly expose the value but controlled its interaction using a  
pair of functions, read and write. Returning these functions separately is enough to achieve  
read-write segregation.  
We use a Set to store subscribers, ensuring each subscriber is added only once. A Set  
inherently prevents duplicate items, so we don’t need to worry about adding a subscriber  
multiple times.  
We'll define the Computation type shortly.  
Now, we are left with the most complex part, which is providing a mechanism to collect  
subscribers. But first, let’s create the createComputation function. This will help us figure  
out how to implement the subscription mechanism.  
Let’s list the requirements for a computation\:  
A computation should\:  
A computation should have a callback function that will be executed whenever the  
signals it subscribed to get updated.  
Subscribe to a signal automatically upon reading it. If it cannot read a signal, it should  
not subscribe to it.  
There should be a dynamic dependency between a signal and a computation. If a  
computation cannot read a signal at some point in time, it should unsubscribe from the  
signal until it can read the signal again. In other words, there is no one-time  
subscription to a signal to receive updates but a continuous cycle of subscribing and  
unsubscribing to keep the dependency dynamic.  
Run once when createComputation is called and re-run whenever the subscribed  
signals update as long as their dependency exists.  
40 | The Essence of Reactive Core Store the result of its execution so that it can be used in the next iteration as the  
previous value. The return value of the callback function is stored internally and passed  
back to the callback function in the next iteration. It is a simple convenience that  
removes the need for an external variable in case you need to use the previous result  
for diffing or other tasks.  
Let’s start with the Computation type\:  
interface Computation\<T = any\> \{  
fn\: \(prev?\: T\) =\> T,  
value\: T,  
\}  
The fn value is the callback function we pass to the createComputation function. The  
value property holds the return value of the callback function.  
function createComputation\<T\>\(fn\: \(prev?\: T\) =\> T, initialValue\: T\) \{  
const computation\: Computation = \{  
fn,  
value\: initialValue  
\};  
\}  
We need to accept an initial value since there will be no previous value on the first execution.  
Running fn once is not a big deal, we can simply call it but the main problem is having a  
computation added to a signal’s subscribers and establishing a dynamic dependency  
between the signal and the computation. In Solid, a computation is added to the subscribers  
of a signal when it reads the signal and is removed from the queue once it is executed. This  
subscription and unsubscription mechanism is repeated in every update cycle. If a  
computation cannot read a signal while being called back, it will not be able to subscribe to  
the signal.  
To clarify further, let’s go back to Solid. The following code will keep logging count until  
isDone is set to true. Once isDone becomes true, the effect cannot read the signal because  
of the conditional and cannot subscribe to it to be called for the next update. So the  
dependency between signal and the effect will be lifted and the callback will no longer be  
executed once isDone is set to true.  
import \{ createSignal, createEffect \} from "solid-js";  
const \[count, setCount\] = createSignal\(0\);  
let isDone = false;  
The Essence of Reactive Core | 41createEffect\(\(\) =\> \{  
console.log\('Running'\);  
if \(!isDone\) \{  
console.log\(count\(\)\);  
\}  
\}\);  
setCount\(1\);  
isDone = true;  
setCount\(2\);  
setCount\(3\);  
⋮ Console  
Running \:8  
0 \:11  
Running \:8  
1 \:11  
Running \:8  
In summary, a signal’s subscriber queue is drained at the end of each update cycle. If an  
effect re-reads the signal during its execution, it will be added back to the queue to be called  
when the next update occurs.  
WARNING  
The online Solid playground outputs incorrect logs for the above example, outputting  
Running once\:  
⋮ Console  
Running  
0  
1  
Before implementing createComputation, let’s create a signal and a computation that  
interacts with each other\:  
const \[count, setCount\] = createSignal\(0\);  
createComputation\(\(prev\) =\> \{  
console.log\(\`prev\: \$\{prev\}\`\);  
42 | The Essence of Reactive Coreconsole.log\(\`count\: \$\{count\(\)\}\`\);  
return count\(\);  
\}, 99\);  
Here we use 99 as the initial value of the computation object to have a clear contrast with  
the next value.  
Now, all we need to do is implement the remaining logic\:  
1\. Execute the callback we passed to createComputation when createComputation is  
called.  
2\. Get the signals that need to be tracked.  
3\. Subscribe to those signals.  
4\. Unsubscribe from a signal once the callback is executed.  
We can pass the computation from createComputation to createSignal through an  
external variable.  
let currentComputation\: Computation;  
And change the createComputation function in a way to run the callback when it is called\:  
function createComputation\<T\>\(fn\: \(prev?\: T\) =\> T, value\: T\) \{  
const computation\: Computation = \{  
fn,  
value  
\};  
runComputation\(computation\);  
\}  
function runComputation\(computation\: Computation\) \{  
currentComputation = computation;  
const nextValue = computation.fn\(computation.value\);  
computation.value = nextValue;  
\}  
Here, we run the callback with the provided value and store the result back into the  
computation.  
Next, we will update createSignal to capture the current computation when a signal is  
read\:  
function createSignal\<T\>\(value\: T\)\: \[\(\) =\> T, \(val\: T\) =\> void\] \{  
const subscribers\: Set\<Computation\> = new Set\(\);  
The Essence of Reactive Core | 43const read = \(\) =\> \{  
subscribers.add\(currentComputation\);  
return value;  
\};  
const write = \(nextValue\: T\) =\> \{  
value = nextValue;  
notifySubscribers\(subscribers\);  
\};  
return \[read, write\];  
\}  
function notifySubscribers\(subscribers\: Set\<Computation\>\) \{  
const items = \[...subscribers\];  
subscribers.clear\(\);  
items.forEach\(item =\> \{  
const nextValue = item.fn\(item.value\);  
item.value = nextValue;  
\}\);  
\}  
We will notify the subscribers whenever the signal’s value changes.  
We had to move the subscribers into an array and clear the subscribers set so that the  
signal could collect new subscribers for the next update cycle when executing the callbacks.  
Now that we have established a dynamic dependency between signals and computations, it is  
time to test it. Let’s put everything together and use the same example that we used to  
explain Solid’s dynamic dependency tracking\:  
interface Computation\<T extends any\> \{  
fn\: \(prev?\: T\) =\> T,  
value\: T,  
\}  
let currentComputation\: Computation\<any\>;  
function createSignal\<T\>\(value\: T\)\: \[\(\) =\> T, \(val\: T\) =\> void\] \{  
const subscribers\: Set\<Computation\<any\>\> = new Set\(\);  
const read = \(\) =\> \{  
subscribers.add\(currentComputation\);  
return value;  
\};  
44 | The Essence of Reactive Coreconst write = \(nextValue\: T\) =\> \{  
value = nextValue;  
notifySubscribers\(subscribers\);  
\};  
return \[read, write\];  
\}  
function notifySubscribers\(subscribers\: Set\<Computation\<any\>\>\) \{  
const items = \[...subscribers\];  
subscribers.clear\(\);  
items.forEach\(item =\> \{  
const nextValue = item.fn\(item.value\);  
item.value = nextValue;  
\}\);  
\}  
function createComputation\<T\>\(fn\: \(prev?\: T\) =\> T, value\: T\) \{  
const computation\: Computation\<T\> = \{  
fn,  
value  
\};  
runComputation\(computation\);  
\}  
function runComputation\(computation\: Computation\<any\>\) \{  
currentComputation = computation;  
const nextValue = computation.fn\(computation.value\);  
computation.value = nextValue;  
\}  
const \[count, setCount\] = createSignal\(0\);  
let isDone = false;  
createComputation\(\(\) =\> \{  
console.log\('Running'\);  
if \(!isDone\) \{  
console.log\(count\(\)\);  
\}  
\}, undefined\);  
setCount\(1\);  
isDone = true;  
The Essence of Reactive Core | 45setCount\(2\);  
setCount\(3\);  
Our implementation outputs the same logs\:  
⋮ Console  
Running \:52  
0 \:55  
Running \:52  
1 \:55  
Running \:52  
With this implementation, derived signals come for free. Run the following code and see if  
count is tracked by the computation.  
const \[count, setCount\] = createSignal\(0\);  
const double = \(\) =\> count\(\) \* 2;  
createComputation\(\(\) =\> \{  
console.log\(double\(\)\);  
\}, undefined\);  
setCount\(1\);  
setCount\(2\);  
setCount\(3\);  
You may ask how. It is simple\: When double reads count, we know for sure that the  
computation depends on count, so it will be added to count's subscribers and will be  
called back. It is not the signal that is re-executed, it is the effect. When re-executed, the  
effect will re-run the function double.  
That is the essence of how Solid’s reactivity works. Solid’s implementation is more complex,  
as it involves many considerations, including preventing memory leaks, avoiding multiple  
renders, and running cleanups.  
In our implementation, we called the effects directly without using a scheduler. Although it is  
46 | The Essence of Reactive Core not hard to implement one, it will complicate our code, which might not be desirable since  
we will build upon it later in the book to explain the other aspects of Solid runtime. For those  
curious about its operation, it resembles the browser’s microtask executor. However, instead  
of queuing callbacks, we queue computations. These computations are not executed  
sequentially or linearly; rather, they are wrapped in conditional statements, some executed  
immediately and others delayed, resulting in a process akin to a priority queue.  
So far, we covered two reactive primitives, signal and computation, but Solid has one more\:  
memo.  
A memo is a signal and a computation at the same time. Let’s create a memo and observe its  
behavior\:  
const \[count, setCount\] = createSignal\(0\);  
const tripple = createMemo\(\(\) =\> \{  
return count\(\) \* 3;  
\}\);  
createEffect\(\(\) =\> \{  
console.log\(tripple\(\)\);  
\}\);  
setCount\(1\);  
setCount\(2\);  
The createMemo function also creates a computation internally. This computation subscribes  
to the underlying signals. The computation’s value is exposed to the outside world via a  
getter function that has the same behavior as a signal’s getter function\: It can collect  
subscribers and call them when the computation’s value changes.  
If you inspect the function signature of createMemo, you will see that the parameters are a  
mix of parameters of createSignal and createEffect\:  
function createMemo\<T\>\(  
fn\: \(v\: T\) =\> T,  
value?\: T,  
\)\: \(\) =\> T;  
options?\: \{ equals?\: false | \(\(prev\: T, next\: T\) =\> boolean\) \}  
The value parameter is passed to the internal computation and options is used by the  
internal signal.  
We won’t implement createMemo since it will require us to refactor our code into a more  
The Essence of Reactive Core | 47 complex logic as memos can derive values from other memos which creates a highly  
complex dependency graph but we need to keep our implementation simple for future  
chapters, so that we can build upon it. Here are some valuable resources if you would like to  
dive deeper into it\:  
https\:/ /github.com/milomg/reactively/blob/main/Reactive-algorithms.md  
https\:/ /dev.to/this-is-learning/derivations-in-reactivity-4fo1  
https\:/ /dev.to/this-is-learning/async-derivations-in-reactivity-ec5  
https\:/ /www.youtube.com/watch?v=A2TiLvCDKSg  
https\:/ /www.youtube.com/watch?v=sMbICJUGJj4  
Before moving to the next chapter, let us take our time and talk about uses of computation  
objects.  
# The Uses of Computations  
Computations are the backbone of Solid’s execution model. From context to cleanups, they  
are utilized for various purposes.  
Let me remind you that a computation is not the callback function we pass to  
createEffect, but an internal object that is like the one below which is taken from the core  
library\:  
const c\: Computation\<Init | Next, Next\> = \{  
fn,  
state\: state,  
updatedAt\: null,  
owned\: null,  
sources\: null,  
sourceSlots\: null,  
cleanups\: null,  
value\: init,  
owner\: Owner,  
context\: null,  
pure  
\};  
Now, let’s review some of these properties and their purposes.  
Sources are the signals tracked by a computation. When a computation is disposed, it should  
be removed from the observer list of each signal it tracks.  
48 | The Uses of Computations The pure property marks if a computation is a memo. Memos are expected to be pure, pure  
in a sense that they should not have any side effects. We will discuss memos later in a  
dedicated chapter.  
The owner and owned properties on the computation object are used to establish an owner-  
owned relationship between nested computations\:  
Computations can be nested and this has certain implications\:  
createEffect\(\(\) =\> \{  
// ...  
createEffect\(\(\) =\> \{  
// ...  
\}\);  
\}\);  
When the outer computation executes, a new inner computation will be created. Child  
computations may have their own children, and so on and so forth. When a parent  
computation executes, child computations will keep piling up unless they are taken care of.  
Solid creates an ownership tree to keep track of computations and dispose of them when  
their owners are disposed of.  
A computation is always owned by its outer computation, and the outer-most one is owned  
by an explicitly created computation, commonly referred to as the root computation. A root  
computation is created by either the createRoot function or the render function. When a  
parent computation is disposed of, all its child computations will be disposed of too.  
The onCleanup callbacks associated with a reactive context are stored on the cleanups  
property, which is replaced with an array upon inserting the first cleanup callback. Cleanup  
functions are used to release resources like socket connections, timers, and event listeners  
when the reactive context is destroyed.  
createEffect\(\(\) =\> \{  
onCleanup\(\(\) =\> \{  
// release external dependencies  
\}\);  
\}\);  
When a computation is disposed of, Solid’s runtime iterates through the cleanups array and  
invokes each stored function one by one.  
The Uses of Computations | 49 Solid’s context API also relies on the ownership tree that we mentioned earlier. A context is a  
property on the computation object that we can store values on so that they can be accessed  
from child computations.  
const computation = \{  
context\: \{\},  
\}  
We will revisit some of these properties and features in later chapters to see how they are  
implemented.  
50 | The Uses of Computations **CHAPTER 05**  
# Tracking State with Signals  
A signal is an observable with a thin wrapper around a value that collects subscribers and  
notifies them when the value changes.  
const \[value, setValue\] = createSignal\(0\);  
createEffect\(\(\) =\> console.log\(value\(\)\)\);  
setValue\(1\);  
As a performance measure, a signal is only updated if a new value is provided. By default,  
Solid uses the strict equality operator \(===\) to compare the existing value to the new one.  
This approach has specific implications for reference types, such as objects and arrays. The  
strict equality check returns true if both operands refer to the same object, meaning the  
signal will not be updated even if the value has been changed beforehand\:  
const \[user, setUser\] = createSignal\(\{  
id\: 1,  
name\: 'john',  
email\: 'john@example.com',  
\}\);  
createEffect\(\(\) =\> console.log\(user\(\)\)\);  
user\(\).name = 'Jenny';  
setUser\(user\(\)\);  
51 Here, we mutated the stored value, but the change isn’t perceived as an update because we  
passed the same object to setUser. As a result, the listeners are never called. The console  
does not display any logs. We needed to set a different object to trigger an update\:  
setUser\(\{ ...user\(\), name\: 'Jenny' \}\);  
# Overwriting the Comparison Logic  
Solid allows us to overwrite a signal’s default comparison logic around state updates by  
providing our own function via the options argument.  
The equals property on the options argument controls the comparison logic. The value can  
be either a falsy value or a function that returns a boolean value. If it is a function, it receives  
the signal’s current value and the value that is passed to the setter function\:  
const \[user, setUser\] = createSignal\(initialValue, \{  
// It has to be a falsy value, not a boolean.  
equals\: false,  
// Or it should return a truthy or a falsy value.  
equals\: \(curr, next\) =\> false,  
\}\);  
The equals value we provided will be assigned to the comparator property to determine  
whether the signal’s value has changed. It should be evaluated to false to replace the  
existing value.  
Here is how the equals property is used internally\:  
if \(!node.comparator || !node.comparator\(current, value\)\) \{  
node.value = value;  
\}  
Returning true prevents the update, even if the value is guaranteed to be not equal\:  
const \[user, setUser\] = createSignal\(\{  
id\: 1,  
name\: 'john',  
email\: 'john@example.com',  
\}, \{  
equals\: \(curr, next\) =\> true,  
\}\);  
createEffect\(\(\) =\> console.log\(user\(\)\)\);  
52 | Overwriting the Comparison LogicsetUser\(\{ ...user\(\), name\: 'Jenny' \}\);  
This custom comparator function can be used as a tool for validation and optimization. You  
may think that the validation should take place before the setter is called, but that is the  
intended use case and it is perfectly normal to block an update based on the provided value.  
For example, we can prevent state updates when the user id is tampered with. This is a  
useful pattern when working with values from remote resources. We never make the  
network request if the item’s id has changed, reducing the server’s workload.  
const \[user, setUser\] = createSignal\(\{  
id\: 1,  
name\: 'John',  
email\: 'john@example.com',  
\}, \{  
equals\: \(prev, next\) =\> !\(prev.id === next.id\)  
\}\);  
const update = \(\) =\> \{  
setUser\(\{...user\(\), name\: 'Jimmy', id\: 2 \}\);  
\};  
WARNING  
We use client-side validation to reduce server load by catching errors or invalid input  
before the data is submitted to the server. However, client-side code can be modified or  
disabled by a malicious user, so you should never trust client-provided data and always  
perform thorough validation on the server side.  
In the following example, we use the equals property as an optimization tool, performing a  
deep equality check on the new value to confirm it has actually changed, thus eliminating  
unnecessary re-renders.  
const \[user, setUser\] = createSignal\(\{  
id\: 1,  
name\: 'John',  
email\: 'john@example.com',  
\}, \{  
equals\: \(prev, next\) =\> \{  
const hasSameProperties = prev.id === next.id &&  
\(prev.name !== next.name || prev.email !== next.email\);  
return !hasSameProperties; // Returning false allows update.  
\}  
\}\);  
createEffect\(\(\) =\> console.log\(user\(\)\)\);  
Overwriting the Comparison Logic | 53// This has no effect  
setUser\(prev =\> \(\{...prev, name\: 'John' \}\)\);  
// This one updates the user  
setUser\(prev =\> \(\{...prev, name\: 'Jenny' \}\)\);  
The console has a single log\:  
⋮ Console  
\{id\: 1, name\: 'Jenny'\} \:16  
But sometimes we may want to update a signal for its side effects. Setting equals to false  
achieves this by forcing an update on the signal irrespective of whether the value has  
changed or not.  
# Updating Signals  
The setter function returned from createSignal can be used in two ways\: it accepts either  
a direct value or a function that updates the value based on the current one\:  
const \[value, setValue\] = createSignal\(0\);  
setValue\(1\);  
setValue\(prev =\> prev + 1\);  
It is an anti-pattern to use an effect to update a signal but if you had to, the callback form  
comes in very handy. Here, we are able to avoid an infinite loop because the effect doesn’t  
read the signal, so it doesn’t subscribe to it.  
const \[value, setValue\] = createSignal\(0\);  
createEffect\(\(\) =\> \{  
setValue\(prev =\> prev + 1\);  
\}\);  
In contrast, if we try to update the signal while reading it, we will create an infinite loop  
because the effect will keep updating the signal when it is called back.  
const \[value, setValue\] = createSignal\(0\);  
createEffect\(\(\) =\> \{  
setValue\(value\(\) + 1\);  
54 | Updating Signals\}\);  
# Deriving Values  
We can derive values from existing reactive values using functions\:  
const \[a, setA\] = createSignal\(4\);  
const \[b, setB\] = createSignal\(10\);  
const sum = \(\) =\> a\(\) + b\(\);  
createEffect\(\(\) =\> \{  
console.log\(sum\(\)\);  
\}\);  
setA\(prev =\> prev + 1\);  
⋮ Console  
14 \:7  
15 \:7  
16 \:7  
The derived value is not a truly reactive one. It is just an illusion because, if you inspect it,  
you will see that it is not an accessor function but just a regular JavaScript function.  
The derived value sum behaves as if it were a reactive value when it is called in a reactive  
context, such as inside an effect. The effect subscribes to a and b, and its callback gets re-  
executed when either of them changes, re-evaluating the sum function, thus creating the  
illusion that sum is a reactive value.  
# Destructuring Signals  
Running a destructuring operation on a signal’s value extracts the contents of a reactive  
value into static variables, meaning updates to the signal won’t be reflected in these  
variables.  
const \[user, setUser\] = createSignal\(\{  
id\: 1,  
name\: 'john',  
email\: 'john@example.com',  
\}\);  
const \{ name, age \} = user\(\);  
Destructuring Signals | 55createEffect\(\(\) =\> console.log\(name, age\)\);  
// ↑ ↑  
// static variables  
setUser\(\{ ...user\(\), name\: 'Jenny' \}\);  
The effect cannot subscribe to the signal because it does not read the accessor. So,  
destructuring signals should be avoided unless that is your intention.  
# Batching Updates  
If an effect depends on multiple signals, updating each signal re-runs the effect anew\:  
import \{ batch, createEffect, createSignal \} from 'solid-js';  
const \[name, setName\] = createSignal\('John Doe'\);  
const \[age, setAge\] = createSignal\(20\);  
createEffect\(\(\) =\> \{  
console.log\(name\(\), age\(\)\);  
\}\);  
setName\('Jenny Doe'\);  
setAge\(25\);  
⋮ Console  
John Doe 20 \:7  
Jenny Doe 20 \:7  
Jenny Doe 25 \:7  
The batch function allows us to update multiple signals at once. When we batch state  
updates, the execution of the effects is delayed until all state updates are completed so that  
each effect is run once.  
batch\(\(\) =\> \{  
setName\('Jenny Doe'\);  
setAge\(25\);  
\}\);  
⋮ Console  
John Doe 20 \:7  
Jenny Doe 25 \:7  
56 | Batching Updates **CHAPTER 06**  
# Running Side-Effects with Effects  
Effects are computations that allow us to run arbitrary code in response to signal updates.  
They are executed after the browser’s rendering phase completes.  
Effects represent just one method for executing side effects within Solid’s reactive  
framework. There are others, of different immediacy and of different timing, which we will  
discuss in Chapter 14, Working with Side Effects.  
The createEffect function creates a computation that gets executed immediately and then  
subsequently when any of the signals it tracks changes its value.  
An effect automatically tracks the signals it reads\:  
const \[value, setValue\] = createSignal\(0\);  
createEffect\(\(\) =\> console.log\(value\(\)\)\);  
setValue\(1\);  
The callback function receives either the result of its previous execution or the second  
argument passed to createEffect during its first execution\:  
const \[value, setValue\] = createSignal\(0\);  
createEffect\(\(prev\) =\> \{  
const current = value\(\);  
console.log\(\{ prev, current \}\);  
return current;  
\}, 99\);  
57setValue\(value\(\) + 1\);  
This convenience is especially helpful for tracking changes, as we no longer need to create  
an external variable to store the previous value. Although the core logic takes a small  
performance hit because of the extra assignment, this impact is negligible since it’s a simple  
operation.  
createEffect takes an optional third argument, of object type, which allows us to set a  
name for the computation in dev mode for debugging.  
createEffect\(\(\) =\> \{  
console.log\(value\(\)\);  
\}, undefined, \{ name\: 'logger' \}\);  
As noted earlier, updating a signal within an effect while executing its accessor function can  
cause an infinite loop and should be avoided.  
const \[value, setValue\] = createSignal\(0\);  
createEffect\(\(\) =\> \{  
setValue\(value\(\) + 1\);  
\}\);  
However, we can use a callback function to update the signal without reading its value within  
the effect. This approach prevents a subscription from being created, thus avoiding an  
infinite loop.  
const \[value, setValue\] = createSignal\(0\);  
createEffect\(\(\) =\> \{  
setValue\(state =\> state + 1\);  
\}\);  
Since effects are executed after the render phase, using them to update UI state should be  
approached carefully, as it can trigger a new render cycle immediately after the previous one  
completes, potentially leading to cascading re-renders.  
In practice, updating a signal within an effect is rarely advisable. Most state updates are best  
58 | Chapter 06. Running Side-Effects with Effects handled through direct signal manipulation outside of effects to avoid dependency loops or  
unintended reactivity chains, which can cause performance issues or even infinite loops.  
That said, a valid use case for updating signals within an effect is layout-related calculations,  
such as determining an element’s dimensions or position on the page. These measurements  
must occur after the element is inserted into the DOM and styles are applied, making an  
effect an appropriate tool for setting these values reactively. Generally, though, SolidJS’s  
reactive model performs best when effects are used primarily for side effects rather than  
direct state updates.  
The examples here, like incrementing a signal within an effect, are basic and may seem  
contrived as valid use cases. These introductory cases are intended to illustrate potential  
pitfalls, even if they are overly simplistic. As we move through upcoming chapters and  
explore more complex UI interactions, we’ll encounter scenarios that showcase more  
meaningful and practical applications for effects and signal updates.  
# Effects Can Be Nested  
Effects can create other effects\:  
const \[value, setValue\] = createSignal\(0\);  
createEffect\(\(\) =\> \{  
console.log\('Outer', value\(\)\);  
createEffect\(\(\) =\> \{  
console.log\('Inner'\);  
\}\);  
\}\);  
However, there is a catch\: When the outer effect re-executes, it creates a new inner effect  
because of scoping rules.  
Solid automatically disposes of previously created inner effects, ensuring no memory leaks.  
An effect can track its inner effects but the outermost one should be wrapped in a root  
computation; otherwise, it will not be tracked for disposal. If an effect is not tracked, you will  
receive a warning indicating this oversight\:  
computations created outside a \`createRoot\` or \`render\` will never be  
disposed  
This behavior is unrelated to signals; a warning is issued for any untracked effect, regardless  
of its subscription to a signal.  
Effects Can Be Nested | 59import \{ createEffect \} from 'solid-js';  
createEffect\(\(\) =\> \{  
console.log\('Running...'\);  
\}\);  
⋮ Console  
computations created outside a createRoot or render will never be  
disposed \:3  
Running.. \:4  
As the warning states, a root computation can be created by createRoot or render. The  
render function internally calls createRoot. createRoot creates an internal computation  
that serves as the parent for any top-level effects. This internal computation is sometimes  
referred to as detached owner in Solid’s documentation. The sole purpose of a root  
computation is to own the top-level computations so that they could be disposed manually.  
The disposer function is provided as a parameter to createRoot. Calling it disposes of any  
computation owned by the root computation.  
createRoot\(\(dispose\) =\> \{\}\);  
If you need to access the disposer callback from its outer scope, you can use a variable\:  
import \{ createEffect, createRoot, onCleanup \} from 'solid-js';  
let disposer\: \(\) =\> void;  
createRoot\(\(dispose\) =\> \{  
disposer = dispose;  
createEffect\(\(\) =\> \{  
onCleanup\(\(\) =\> console.log\('Cleaning Up'\)\);  
\}\);  
\}\);  
setTimeout\(disposer!, 3000\);  
We can safely use the non-null assertion operator on the disposer variable to suppress type  
errors, as it’s guaranteed to be assigned; otherwise, a type error will occur\:  
Variable 'disposer' is used before being assigned.ts\(2454\)  
We will have a detailed discussion on owners in Chapter 16, Working With Owners.  
60 | Effects Can Be Nested **E**  
# xplicit Tracking  
SolidJS automatically tracks dependencies in computations, so any signal accessed within an  
effect will cause that effect to re-run whenever the signal’s value changes. While this  
automatic tracking simplifies reactivity, it may not always align with your needs, especially  
when you want precise control over which signals should trigger an effect.  
The on function from the core module allows us to establish an explicit dependency between  
an effect and specific signals. In the example below, the effect is configured to execute only  
when count updates, even though it doesn’t read count and instead accesses the greeting  
signal.  
import \{ createEffect, createSignal, on \} from 'solid-js';  
const \[count, setCount\] = createSignal\(0\);  
const \[greeting, setGreeting\] = createSignal\("Hello"\);  
createEffect\(on\(count, \(\) =\> \{  
console.log\(greeting\(\)\);  
\}\)\);  
setCount\(1\);  
setCount\(2\);  
To track multiple signals explicitly, you can pass them in an array\:  
createEffect\(on\(\[one, two\], \(\) =\> \{  
console.log\(greeting\(\)\);  
\}\)\);  
# Opting Out of Tracking  
The untrack function forgoes tracking signals altogether. Here, the effect is run once only  
during the initial execution\:  
import \{ untrack \} from 'solid-js';  
createEffect\(\(\) =\> \{  
untrack\(\(\) =\> \{  
console.log\(a\(\), b\(\)\);  
\}\);  
\}\);  
Opting Out of Tracking | 61 **Handling E**  
# xternal Dependencies  
We can use the onMount function to register dependencies that become available only after  
the render phase. For other dependencies, using the parent scope is perfectly safe.  
The onCleanup function allows us to dispose of those dependencies when the reactive scope  
is disposed.  
import \{ onMount, onCleanup \} from 'solid-js';  
let disposer;  
createRoot\(\(disposable\) =\> \{  
disposer = disposable;  
onMount\(\(\) =\> \{  
console.log\('Running onMount callback.'\);  
\}\);  
onCleanup\(\(\) =\> \{  
console.log\('Running onCleanup callback.'\);  
\}\);  
createEffect\(\(\) =\> \{  
onMount\(\(\) =\> \{  
console.log\('Running onMount callback in an effect.'\);  
\}\);  
onCleanup\(\(\) =\> \{  
console.log\('Running onCleanup callback in an effect.'\);  
\}\);  
\}\);  
\}\);  
disposer\(\);  
⋮ Console  
Running onMount callback. \:8  
Running onMount callback in an effect. \:17  
Running onCleanup callback in an effect. \:21  
Running onCleanup callback. \:12  
Note that the effects are disposed in reverse order.  
62 | Handling E  
xternal Dependencies Inner effects can have their own onMount and onCleanup hooks, with no limit to how deeply  
they can nest.  
Internally, the onMount function creates an effect that is wrapped in an untrack function,  
ensuring it runs only once upon the outer effect’s execution. We will learn about untrack in  
Chapter 18, Reactive Utilities.  
onCleanup pushes its callback function into an array that lives on the computation object  
created by the wrapping createEffect function. When the computation is disposed of,  
these callbacks will be popped off and executed.  
Handling E  
xternal Dependencies | 63 **CHAPTER 07**  
# Caching Values with Memos  
Memos are read-only signals that derive their values from other signals through a callback  
function.  
Memos are created via the createMemo function. It accepts a callback function and an  
optional initial value, and it returns a getter function that retrieves the value of the internal  
signal. createMemo creates an internal computation that is re-executed whenever its  
dependencies update. If the callback function returns a different value, the internal signal is  
updated, notifying its subscribers.  
import \{ createEffect, createMemo, createSignal \} from 'solid-js';  
const \[preferences, setPreferences\] = createSignal\(\{  
lang\: 'en', theme\: 'light', fontSize\: 'large',  
\}\);  
const theme = createMemo\(\(\) =\> preferences\(\).theme\);  
createEffect\(\(\) =\> console.log\(theme\(\)\)\);  
setPreferences\(state =\> \(\{ ...state, theme\: 'dark' \}\)\);  
A memo is a signal and an effect at the same time\: It uses a signal to store the computed  
value and an effect to keep the value up to date. Please see Chapter 4, The Essence of Reactive  
Core for a detailed explanation.  
The function signature of the createMemo function verifies this. It has both signal and effect  
characteristics\:  
65function createMemo\<T\>\(  
fn\: \(v\: T\) =\> T,  
value?\: T,  
\)\: \(\) =\> T;  
options?\: \{ equals?\: false | \(\(prev\: T, next\: T\) =\> boolean\) \}  
The internal effects that are created by memos have higher priority over the regular effects  
created via createEffect calls. Solid uses the term “computation” to refer to those internal  
effects, which we will explore further in Chapter 14\: Working With Side Effects.  
createMemo takes an optional second argument which is passed to the internal computation  
as the initial value.  
const theme = createMemo\(\(\) =\> preferences\(\).theme, 'light'\);  
createMemo takes an options object as its third argument, where its equals property allows  
us to control the update logic of the internal signal. The equals property can be set to either  
a falsy value or a function that returns a boolean value. If it is a function, it receives the  
signal’s current value and the value that is returned by the callback function. Please note that  
createMemo does not applies the equals property on its initial execution, allowing invalid  
values to be set.  
In the following example, we exert finer control over the memo’s update logic via the equals  
property, preventing unnecessary updates and invalid theme names from being set\:  
import \{ render \} from 'solid-js/web';  
import \{ createSignal, createMemo, createEffect \} from 'solid-js';  
export const App = \(\) =\> \{  
const \[preferences, setPreferences\] = createSignal\(\{  
lang\: 'en', theme\: 'light', fontSize\: 'large',  
\}\);  
const theme = createMemo\(\(\) =\> preferences\(\).theme, 'default', \{  
equals\: \(prev, curr\) =\> \{  
if \(prev === curr\) return true;  
if \(prev === 'dark' && curr === 'light'\) return false;  
if \(prev === 'light' && curr === 'dark'\) return false;  
return true;  
\}  
\}\);  
createEffect\(\(\) =\> console.log\(\`Theme is set to \$\{theme\(\)\}\`\)\);  
66 | Chapter 07. Caching Values with Memosconst handleClick = \(theme\: string\) =\> \{  
setPreferences\(state =\> \(\{ ...state, theme \}\)\);  
\};  
return \(  
\<div\>  
\<div\>Current theme\: \{theme\(\)\}\</div\>  
\<div\>  
\<button onClick=\{\[handleClick, 'dark'\]\}\>Dark\</button\>  
\<button onClick=\{\[handleClick, 'light'\]\}\>Light\</button\>  
\<button onClick=\{\[handleClick, 'soft'\]\}\>Soft\</button\>  
\</div\>  
\</div\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
We used the equals property within createMemo to control its update logic, ensuring only  
valid theme transitions are allowed. The equals function compares the previous and current  
theme values, permitting updates only when switching between "dark" and "light", thus  
avoiding unnecessary re-renders. Any other value, like "soft", is rejected, preventing invalid  
themes from being set.  
Notice the array syntax in the onClick handlers, which acts as a shorthand for calling  
handleClick with a specific theme value. This patterns avoids creating additional closures  
to pass data to event handlers, keeping them concise and clear. We’ll cover event handling in  
more detail in Chapter 30.  
Memos serve as a caching layer between a signal and its consumers, preventing unnecessary  
re-renders; however, they should not be used merely for deriving values from signals, as this  
can be done directly with regular function calls. Instead, they should be reserved for slow or  
expensive operations, such as network calls or complex UI updates.  
UI updates are generally costly, but not all UI elements warrant memoization. Memos are  
best suited for elements with cascading effects or for storing results of computationally  
intensive processes, such as theme toggling or tab switching, where caching can significantly  
enhance performance.  
Memos are employed extensively in built-in components for both forcing re-renders and  
preventing re-renders. This apparent contradiction is, in fact, a deliberate design choice.  
Chapter 07. Caching Values with Memos | 67 As discussed earlier, Solid components render only when their execution context re-renders.  
Unlike React, there is no component-level re-rendering directly tied to state updates. In the  
example below, we are limited to what is returned on the initial render\:  
import \{ render \} from 'solid-js/web';  
import \{ createSignal \} from 'solid-js';  
function Counter\(\) \{  
const \[count, setCount\] = createSignal\(1\);  
const increment = \(\) =\> setCount\(count\(\) + 1\);  
if \(count\(\) % 2 === 0\) \{  
return \(  
\<button style=\{'color\: red'\} type="button" onClick=\{increment\}\>  
Count\: \{count\(\)\}  
\</button\>  
\);  
\}  
return \(  
\<button style=\{'color\: green'\} type="button" onClick=\{increment\}\>  
Count\: \{count\(\)\}  
\</button\>  
\);  
\}  
render\(\(\) =\> \<Counter /\>, document.body\);  
By wrapping the return value in a memo, we can force the UI elements to re-render  
whenever the count value changes, since the computation will return a different DOM  
element each time\:  
import \{ createMemo, createSignal, JSXElement \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
function Counter\(\) \{  
const \[count, setCount\] = createSignal\(1\);  
const increment = \(\) =\> setCount\(count\(\) + 1\);  
return createMemo\(\(\) =\> \{  
if \(count\(\) % 2 === 0\) \{  
return \(  
\<button style=\{\`color\: red\`\} type="button" onClick=\{increment\}\>  
68 | Chapter 07. Caching Values with MemosCount\: \{count\(\)\}  
\</button\>  
\);  
\}  
return \(  
\<button style=\{\`color\: green\`\} type="button" onClick=\{increment\}\>  
Count\: \{count\(\)\}  
\</button\>  
\);  
\}\) as unknown as JSXElement;  
\}  
render\(\(\) =\> \<Counter /\>, document.body\);  
This works because Solid calls any function that is placed inside a JSX element.  
NOTE  
If a function reference is passed as the child of a JSX element, the Solid runtime invokes it  
and that is by design.  
function App\(\) \{  
const fn = \(\) =\> 42;  
return \(  
\<div\>\{fn\}\</div\>  
\);  
\}  
When rendered, the App component produces a div element with the text content 42.  
\<div\>42\</div\>  
We use as unknown as JSXElement to suppress type errors, ensuring the Solid runtime  
recognizes the memo accessor as a valid JSX element. This is a legitimate use because we  
know for sure that the memo accessor will be treated as a valid JSX element by the Solid  
runtime.  
Before diving into the details of the UI layer in the upcoming chapters, let’s have some  
important reminders on reactive values\:  
Keep the state as minimal as possible. Don’t put any value into a signal if you don’t expect it  
to change.  
Chapter 07. Caching Values with Memos | 69 Derive anything that can be derived. Don’t create an additional signal for a value that can be  
derived by a simple function.  
Think of the state as a combination of signals and memos. Data is stored inside a signal,  
which gradually seeps into memos, and from there it trickles into effects.  
Group relevant information and strive for the smallest number of updates possible. Having a  
single signal with multiple properties is better than having multiple signals that are batched  
for updates.  
You can memoize the properties of a reactive object to reduce the number of UI updates, but  
don’t rely solely on memos. Use comparator functions as your first line of defense to prevent  
unnecessary re-renders.  
To avoid unnecessary updates, don't rely solely on Solid’s default comparison logic for signal  
updates; instead, provide a custom validation function. By default, Solid uses the ===  
operator for signal comparisons, which performs a shallow comparison rather than a deep  
equality check, potentially allowing unnecessary re-renders.  
It is not only signals but also memos that can benefit from custom comparator functions.  
Using one incurs a little cost but yields significant benefits.  
70 | Chapter 07. Caching Values with Memos **CHAPTER 08**  
# Rules of JSX  
Solid components use JSX elements for their view layer. In this chapter, we will go over the  
JSX rules before getting into the details of the components in the following chapter.  
JSX stands for JavaScript XML, which is a syntax extension for JavaScript that is used to  
describe the UI in a clear and concise manner.  
JSX offers a powerful composition model similar to HTML, with distinct advantages\:  
You can create custom elements that receive custom attributes and produce arbitrary  
HTML code.  
You can inline any JavaScript expression, or use conditional expressions to produce  
different outputs.  
You can even allow the consuming code to decide what to output by leveraging  
patterns like render props.  
You can share data between elements while transforming it according to the  
component’s needs.  
You can create complex interactions between elements, and adjust their behavior to  
match particular expectations.  
It was JSX that made React a powerful and popular library and it is JSX that makes Solid a  
pleasure to work with.  
JSX is not a template language but a syntax with no fixed semantics. It cannot be executed  
directly by the browsers and requires transpilation. Since it has no fixed semantics, the  
output of the transpilation process depends entirely on the compiler we use.  
71 Solid relies on Babel for transpiling JSX. Its plugin, babel-plugin-solid, generates a  
different output depending on the target environment.  
When the target is the server environment, elements are rendered into string values so that  
they can be sent to the client side via an HTTP response.  
If the target is the browser environment, elements are compiled into JavaScript code that  
generates native DOM nodes.  
You can check out the dom-expressions library from github.com/ryansolid/dom-  
expressions, as it is the actual library that provides the transformation logic for the Babel  
plugin.  
We will start by explaining how JSX is compiled using a simple application that renders a  
single component for the browser environment\:  
const Greeting = \(\) =\> \{  
return \<h1\>Hello World\</h1\>;  
\};  
render\(Greeting, document.body\);  
The render function is the entry point for a Solid application, and it requires a component to  
render and a DOM node to mount the rendered elements.  
A component is a function that returns a JSX element. In the example above, our component  
returns a single JSX element, which creates an h1 node with "Hello World" as its content.  
A component must return a single element because return statements yield only one value.  
To work around this limitation, you can wrap the returned values in an element\:  
const Greeting = \(\) =\> \{  
return \<section\>  
\<h1\>Hello World\</h1\>  
\<p\>Some content.\</p\>  
\</section\>;  
\};  
# Elements Should Be Closed  
JSX elements can be written with an opening and closing tag, or as self-closing tags\:  
\<div\>Hello World\</div\>  
\<hr /\>  
72 | Elements Should Be Closed\<Greeting /\>  
\<Tab\>\</Tab\>  
Void elements, elements that are not closed, are not valid JSX elements. Every tag, even  
those without children, must be closed. So, these are not valid JSX elements\:  
\<Tab\>  
\<hr\>  
NOTE  
The JSX spec addresses every tag as an element whether capitalized or not. However,  
capitalized tags are referred to as components by convention.  
Solid parses capitalized elements differently than non-capitalized ones.  
Non-capitalized tags are compiled into a code that creates an HTML element with the  
corresponding name.  
For example, \<h2\>Some Title\</h2\> is transpiled into the following code\:  
import \{ template \} from 'solid-js/web';  
const \_tmpl\$ = template\(\`\<h2\>Some Title\`\);  
\_tmpl\$\(\);  
A capitalized element is compiled into a function call that invokes the function with the  
element’s name. The return value of the function will be inserted into the UI.  
So, if we capitalize the element’s name of the previous example, it produces a different  
output\:  
import \{ createComponent \} from "solid-js/web";  
createComponent\(H2, \{ children\: "Some Title" \}\);  
Under the hood, createComponent invokes the H2 function with \{ children\: "Some  
Title" \} as its props.  
Some libraries refer to non-capitalized components as built-in components, as their  
transformation is handled by the library, while capitalized ones are considered custom  
components.  
In the compiled output, Solid omits the closing tags to produce a smaller bundle since  
browsers are quite permissive when parsing poorly formatted HTML strings.  
\<h2\>Some Title\</h2\>  
Elements Should Be Closed | 73 The JSX element above is compiled to\:  
template\(\`\<h2\>Some Title\`\);  
# Elements Can Be Nested  
JSX elements can contain other JSX elements or components\:  
\<div\>  
\<Icon /\>  
\<Title\>Some Title\</Title\>  
\<p\>Some paragraph\</p\>  
\</div\>  
\<User\>  
\<User\>  
\<h2\>Greetings\</h2\>  
The content placed between opening and closing tags is referred to as “children”  
. These child  
elements are passed to the component definition as a property named children on the  
props object.  
function User\(props\) \{  
console.log\(props.children\); // \`\<h2\>Greetings\</h2\>\`  
\}  
# xpressions Can Be Used Inside JSX  
# Elements  
A JavaScript expression can be placed inside a JSX element using the curly brackets, \{\}\:  
\<div\>  
\<div\>\{1 + 1\} \{'Hello World'\}\</div\>  
\<div\>\{printUserInfo\(user\)\}\</div\>  
\</div\>  
String literals can be typed directly without brackets or quotation marks\:  
\<div\>Hello World!\</div\>  
Numeric literals require brackets otherwise they will be treated as strings.  
true, false, null, and undefined are valid expressions but do not produce any output.  
The following code practically is equivalent to \<div/\>\:  
\<div\>  
# E  
74 | E  
xpressions Can Be Used Inside JSX  
Elements\{null\}  
\{undefined\}  
\{true\}  
\{false\}  
\</div\>  
But we can convert them into strings or use a ternary expression to render them into their  
string representations\:  
const Element = \(\) =\> \{  
return \(  
\<div\>  
\<div\>  
\{String\(true\)\} \{String\(null\)\} \{String\(undefined\)\}  
\</div\>  
\<div\>\{true ? 'Yes' \: 'No'\}\</div\>  
\</div\>  
\);  
\};  
Objects cannot be rendered directly\:  
const user = \{ name\: 'John Doe' \};  
\<div\>\{user\}\</div\>  
If you try to render an object, you will receive a message like this\:  
Unrecognized value. Skipped inserting  
If the expression is of function type, it will be invoked by Solid’s runtime before being  
rendered\:  
const greet = \(\) =\> "Hello World";  
\<div\>\{greet\}\</div\>  
This convenience comes in handy when rendering signals and memos although it may trip  
you up if you did not know about it.  
NOTE  
There is an open issue to remove this feature to produce simpler and more predictable  
code. https\://github.com/solidjs/solid/discussions/1554  
Since variables are expressions, they can be used inside curly brackets\:  
const greeting = "Hello World";  
E  
xpressions Can Be Used Inside JSX  
Elements | 75\<div\>\{greeting\}\</div\>  
The ternary operator allows us to render values based on a condition\:  
\<div\>\{loggedIn\(\) ? 'Welcome back' \: 'Hello'\}\</div\>  
We can use array methods, such as map, to render arrays, ensuring that the method returns  
a value that can be inserted into the UI\:  
const arr = \['one', 'two', 'three'\];  
\<ul\>  
\{arr.map\(\(item\) =\> \(  
\<li\>\{item\}\</li\>  
\)\)\}  
\</ul\>  
Expressions can also be used in attribute positions\:  
\<input value="Hello" placeholder="Enter a name" disabled=\{false\} /\>  
\<img src="example.png" /\>  
Since JSX elements are also expressions, we can inline them directly inside another JSX  
element\:  
\<div\>\{loggedIn\(\) ? \<h2\>Welcome back\</h2\>\: \<h3\>Hello\</h3\>\}\</div\>  
# Elements Can Have Attributes  
JSX elements can have attributes, but keep in mind that attribute values do not have a fixed  
semantic meaning. In other words, how they will be treated is totally up to the library. Some  
attributes are converted into complex code, while others are kept as-is and passed to  
template strings that produce HTML fragments.  
In Solid, HTML attributes should be written as they are defined in the HTML specification.  
\<input type="text" placeholder="Username" /\>  
\<input value=\{10\} type="number" min=\{0\} max=\{10\} /\>  
While libraries like React prefer camelCase attribute names, Solid adheres closely to HTML  
conventions.  
You can use string values to style any element\:  
76 | Elements Can Have Attributesconst Element = \(\) =\> \{  
return \<div style="color\: orange;"\>Hello World\</div\>;  
\};  
You can also use objects for styling an element, however, properties should be written in  
kebab-case. This is for performance reasons because Solid’s runtime creates style properties  
from the provided values, without transforming them\:  
\<div style=\{\{ color\: 'blue', "background-color"\: 'white' \}\}\>Hello  
World\</div\>  
Solid lets us set an element’s innerHTML directly\:  
const Element = \(\) =\> \{  
return \<div innerHTML="Some Text" /\>;  
\};  
However, this poses a security risk because if you get the innerHTML value from an insecure  
source, you would be exposing your app to execute arbitrary code. If you are going to use the  
innerHTML attribute, make sure the content is sanitized.  
WARNING  
Rendering user-provided data without proper sanitization can introduce security  
vulnerabilities, particularly in a frontend framework, by exposing the application to Cross-  
Site Scripting \(XSS\) attacks. XSS attacks occur when malicious code is injected into a  
webpage, allowing attackers to steal data, manipulate content, or compromise user  
sessions.  
Data and ARIA attributes should always use kebab-case\:  
\<h1 tabIndex=\{0\} data-index-number=\{12\}\>Hello World\</h1\>  
\<h1 tabindex=\{0\}\>Hello World\</h1\>  
\<button aria-label="Exit" onClick=\{handleClick\} /\>  
Event handlers can be written in either camelCase or lowercase. Both formats are  
functionally equivalent\:  
\<div onclick=\{handleClick\}\>\</div\>  
\<div onClick=\{handleClick\}\>\</div\>  
NOTE  
Unlike in React, class is not a reserved keyword in Solid.  
Elements Can Have Attributes | 77 **Missing Attribute Values Default to** true  
If we don’t provide a value to an attribute, the value defaults to true. These two elements  
produce the same result\:  
\<input disabled\>  
\<input disabled=\{true\}\>  
# Comments  
We can take advantage of curly brackets to insert multi-line comments in our JSX elements\:  
\<div \{/\* comments goes here \*/\}\>\</div\>  
Comments will be removed during compilation. HTML comments are not supported by JSX.  
# Whitespaces Are Trimmed  
Solid trims whitespace at the beginning or end of a line, following standard HTML  
whitespace handling rules, and consolidates extra whitespace and line breaks between words  
into single spaces.  
\<div\>Some text\</div\>  
\<div\>  
\</div\>  
Some more text  
\<div\>  
Even more text  
\</div\>  
\<div\>  
And  
more  
text  
\</div\>  
Each div element in this example ultimately outputs the text in a single, contiguous form  
without extra spaces or line breaks. So, whether text is split across lines or separated by  
multiple spaces, the rendered output is identical. The generated output for each div is  
effectively\:  
78 | Whitespaces Are Trimmedimport \{ template as \_\$template \} from "solid-js/web";  
var \_tmpl\$ = /\*\#\_\_PURE\_\_\*/\_\$template\(\`\<div\>And more text\`\);  
\_tmpl\$\(\);  
Whitespaces Are Trimmed | 79 **CHAPTER 09**  
# Composing User Interfaces  
Components are the building blocks of Solid applications. They provide modularity and code  
reuse. Through components, small, self-contained units come together to form a large,  
complex application.  
Components allow us to write declarative code which is easier to maintain and easier to  
refactor. For example, to create a disabled input element with a certain value and color, we  
would write\:  
\<Input value="Some Text" disabled=\{true\} color="red" /\>  
In contrast, imperative programming would require us to create the input element, set its  
value and style to a particular color, and then set its disabled attribute to true\:  
const el = document.createElement\('input'\);  
el.value = 'Some Text';  
el.disabled = true;  
el.style.color = 'red';  
Components are regular JavaScript functions that return a JSX element or an array of JSX  
elements. Valid JSX elements include\:  
number  
boolean  
string  
null  
undefined  
JSX Element  
Node  
81 There is no need to memorize the list of valid JSX elements, as you can refer to the  
Component type from the core module when necessary.  
import \{ type Component \} from '@solid-js';  
The Component type is defined as follows\:  
type JSX.Element =  
| number  
| boolean  
| string  
| null  
| undefined  
| Node  
| JSX.ArrayElement;  
type Component\<P = \{\}\> = \(props\: P\) =\> JSX.Element;  
We can use the Component type to annotate functions as components. Once we define a  
component, we can render it directly or use it in other components.  
Here’s an example of defining and using a component\:  
import \{ type Component \} from '@solid-js';  
import \{ render \} from 'solid-js/web';  
const Greet\: Component\<\{\}\> = \(props\) =\> \{  
return "Hello World!";  
\}  
const App = \(\) =\> \{  
return \(  
\<div\>\<Greet /\>\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
Although Node is a valid return type for a component, it is best to avoid using it because it  
relies on the browser API, which prevents it from working on the server side and increases  
bundle size due to the extra code required.  
const Greet = \(\) =\> \{  
const el = document.createElement\('h1'\);  
el.innerHTML = 'Hello World';  
82 | Chapter 09. Composing User Interfacesreturn el;  
\};  
As you may have noticed, functions are not listed as valid JSX elements; however, we can  
return them from a component. This works because the Solid runtime invokes the function  
and inlines the returned value.  
const Greet = \(\) =\> \{  
return \(\) =\> "Hello World!";  
\}  
function App\(\) \{  
return \(  
\<Greet /\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
Since the function type is not a valid JSX.Element, we will get a type error\:  
'Greet' cannot be used as a JSX component. Its return type \`\(\) =\>  
string\` is not a valid JSX element.  
To fix this error, we can use type assertion on the returned value\:  
import \{ JSX \} from 'solid-js';  
const Greet = \(\) =\> \{  
return \(\(\) =\> "Hello World!"\) as unknown as JSX.Element  
\}  
We needed to wrap the function in parentheses to cast the function itself, not its return  
value. Typescript requires us to cast a known type into unknown first before casting it into  
another type. Don’t forget to import the JSX type from the core module. You can also use  
JSXElement, as it is an alias for JSX.Element.  
JSX components are no different from any other JSX element\: They can be nested, passed  
around, assigned to variables, and stored in signals.  
Although we skipped the component definitions for brevity, the following example shows  
how we can nest components\:  
const App = \(\) =\> \{  
return \(  
Chapter 09. Composing User Interfaces | 83\<Slider\>  
\<Controls /\>  
\<Slides /\>  
\<Prev /\>  
\<Next /\>  
\<Dots /\>  
\</Slider\>  
\);  
\};  
Or pass them to other components as props\:  
\<Slider prev=\{\<Prev /\>\} next=\{\<Next /\>\} /\>  
Or assign them to variables\:  
let user = \<User name='John' age=\{30\} /\>;  
# Components Should Return a Single Root Element  
A JSX component can have only one root element as we explained before, because return  
statements can return a single value. Returning multiple top-level elements from a  
component will cause a syntax error\:  
const Greet = \(\) =\> \{  
return \(  
\<h1\>Hello World\</h1\>  
\<h1\>Hello Universe\</h1\>  
\);  
\}  
To resolve the issue, we can wrap these elements in another element\:  
const Greet = \(\) =\> \{  
return \(  
\<div\>  
\<h1\>Hello World\</h1\>  
\<h1\>Hello Universe\</h1\>  
\</div\>  
\);  
\};  
Alternatively, we can wrap them in a fragment. The fragment is a special syntax, \<\>...\</\>,  
that allows us to group multiple JSX elements.  
84 | Components Should Return a Single Root Elementconst Greet = \(\) =\> \{  
return \(  
\<\>  
\<h1\>Hello World\</h1\>  
\<h1\>Hello Universe\</h1\>  
\</\>  
\);  
\};  
Fragments are compile-time constructs. The Solid compiler transforms them into an array\:  
const \_tmpl\$ = template\(\`\<h1\>Hello World\</h1\>\`, 2\),  
\_tmpl\$2 = template\(\`\<h1\>Hello Universe\</h1\>\`, 2\);  
const Greet = \(\) =\> \{  
return \[\_tmpl\$.cloneNode\(true\), \_tmpl\$2.cloneNode\(true\)\];  
\};  
If you prefer not to use empty tags, you can create a wrapper component \:  
import \{ type Component, type JSX \} from "solid-js";  
const Fragment\: Component\<\{  
children\: JSX.Element  
\}\> = \(props\) =\> props.children;  
And use it like so\:  
const Greet = \(\) =\> \{  
return \(  
\<Fragment\>  
\<h1\>Hello World!\</h1\>  
\<h1\>Hello Universe!\</h1\>  
\</Fragment\>  
\);  
\};  
But please note that this will introduce a layer of indirection because of the extra  
component.  
Alternatively, you can directly return an array of JSX elements. The current rendering  
paradigm supports this use case, but there is no guarantee that your code will work as  
intended in the future.  
Components Should Return a Single Root Element | 85 **Components Accept Data Through Their** props  
Components receive input from the outside world through their props. Any attribute that is  
passed to the JSX component will be available to the component’s definition via the props  
object.  
For example, the message attribute can be accessed inside the Greet function via  
props.message\:  
const Greet = \(props\) =\> \{  
return \<div\>\{props.message\}\</div\>  
\}  
const App = \(\) =\> \{  
return \<Greet message="Hello World" /\>  
\}  
Here is another example in which the Sum component receives the attributes a and b, and  
returns a div element with the result\:  
const Sum = \(props\) =\> \{  
return \<div\>Result\: \{props.a + props.b\}\</div\>  
\}  
export const App = \(\) =\> \{  
return \<Sum a=\{1\} b=\{2\} /\>  
\}  
# Adding Static Types to Components  
We can create statically typed components using the Component generic from the core  
module, which we introduced earlier. However, this approach is limited to function  
expressions.  
A function expression creates a function object and returns it so that it can be stored in a  
variable\:  
const Greet = function \(\) \{  
return "Hello World";  
\}  
We can also use the arrow syntax with function expressions\:  
const Greet = \(\) =\> \{  
86 | Adding Static Types to Componentsreturn "Hello World";  
Function expressions do not need to be anonymous. Modern JavaScript runtimes support  
named function expressions too. The name comes in handy when debugging\:  
const Greet = function Greet \(\) \{  
return "Hello World";  
A function statement, on the other hand, creates a function object and binds it to the given  
\}  
\}  
name\:  
function Greet \(\) \{  
return "Hello World";  
\}  
NOTE  
We can not use the arrow syntax with function statements.  
The syntax we use for both function expression and function statement is identical, it’s the  
position of the function definition that makes all the diﬀerence. If the definition is written  
in a position where an expression is expected, it will be treated as an expression,  
otherwise, it will be treated as a statement.  
The Component type is generic over the prop value. The type we write between the angle  
brackets sets the type of the props object\:  
const Greet\: Component\<\{ message\: string \}\> = \(props\) =\> \{  
return \<div\>\{props.message\}\</div\>  
\}  
The Greet component expects a message prop of string type\:  
\<Greet message="Hello World!" /\>  
Optional properties can be specified on the props object using ? after the property name\:  
const User\: Component\<\{ name\: string, age?\: number \}\>  
We can provide a default value for an optional prop using the nullish coalescing operator.  
The nullish coalescing \(??\) operator is a logical operator that returns its right-hand side  
operand when its left-hand side operand is null or undefined; otherwise, it returns the  
left-hand side operand.  
Adding Static Types to Components | 87const User\: Component\<\{ name\: string, age?\: number \}\> = \(props\) =\> \{  
return \<div\>Name\: \{props.name\} Age\: \{ props.age ?? 'unknown' \}\</div\>  
\}  
Now that the fallback value is in place, we can call the User component with or without the  
age value\:  
import \{ render \} from 'solid-js/web';  
import \{ type Component \} from 'solid-js';  
export const App = \(\) =\> \{  
const User\: Component\<\{ name\: string, age?\: number \}\> = \(props\) =\> \{  
return \<div\>Name\: \{props.name\} Age\: \{ props.age ?? 'unknown' \}  
\</div\>  
\}  
return \(  
\<div\>  
\<User name="John Doe" /\>  
\<User name="John Doe" age=\{20\} /\>  
\</div\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
When rendered, our application generates the following DOM structure\:  
\<div\>  
\<div\>Name\: John Doe\<!----\> Age\: unknown\</div\>  
\<div\>Name\: John Doe\<!----\> Age\: 20\</div\>  
\</div\>  
The logical OR operator \(||\) can also be used to provide a default value. It returns the first  
truthy value it encounters or, if none are found, the last falsy value. Unlike the nullish  
coalescing operator, it treats any falsy value \(e.g., 0,  
''  
, null, undefined\) as false. Therefore,  
age=\{0\} is considered false, resulting in the fallback value being displayed in the UI  
instead.  
import \{ render \} from 'solid-js/web';  
import \{ type Component \} from 'solid-js';  
export const App = \(\) =\> \{  
const User\: Component\<\{ name\: string, age?\: number \}\> = \(props\) =\> \{  
88 | Adding Static Types to Componentsreturn \<div\>Name\: \{props.name\} Age\: \{ props.age || 'unknown' \}  
\</div\>  
\}  
return \(  
\);  
\<User name=\{"John Doe"\} age=\{0\} /\>  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
The application in the previous example generates the following DOM structure\:  
\<div\>Name\: John Doe\<!----\> Age\: unknown\</div\>  
We can not use the Component generic with function statements because it works on  
variables only. We need to annotate the function statement directly by adding types to the  
props object and the return value. For the return value, we can provide an explicit type  
definition or let TypeScript infer it from the function’s body.  
Let’s rewrite the Greet and User components using function declarations\:  
function Greet\(props\: \{ message\: string \}\)\: JSXElement \{  
return \<div\>\{props.message\}\</div\>  
\}  
function User\(props\: \{ name\: string, age?\: number \}\)\: JSXElement \{  
return \<div\>Name\: \{props.name\} Age\: \{props.age\}\</div\>  
\}  
# Components Can Have Children  
The content between opening and closing tags of a JSX element is passed to its definition as  
children property on the props object. This is true for both JSX elements and JSX  
components, however, the runtime handles the JSX elements, leaving components to us to  
deal with.  
The content of the Child component will be passed to the Parent component and the  
Parent component will render it\:  
const Parent = \(props\) =\> \{  
console.log\(props\);  
return props.children;  
\}  
Components Can Have Children | 89const Child = \(\) =\> \{  
return \(  
\<h1\>Some Title\</h1\>  
\);  
\}  
const App = \(\) =\> \{  
return \(  
\<Parent\>  
\<Child /\>  
\</Parent\>  
\);  
\}  
The code above produces the following HTML code\:  
\<h1\>Some Title\</h1\>  
From the parent’s perspective props.children is just another value, we can render it in any  
position we like, or we may choose not to render it at all.  
Let’s modify the Parent component and render its children in another position\:  
const Parent = \(props\) =\> \{  
return \(  
\<div\>  
\</div\>  
\<h2 id=\{props.id\} tabIndex=\{props.tabIndex\}\>Title is\:\</h2\>  
\<div\>\{props.children\}\</div\>  
\);  
\}  
A component may have one or many children or no children at all.  
If a component does not have any children, props.children will be undefined.  
If there is a single element, it will be available directly as children property.  
If there are multiple elements, they will be wrapped in an array\:  
const List = \(props\) =\> \{  
console.log\(props\);  
return \(  
\<ul\>\{props.children\}\</ul\>  
90 | Components Can Have Children\);  
\}  
const App = \(\) =\> \{  
return \(  
\<List\>  
\<li\>One\</li\>  
\<li\>Two\</li\>  
\<li\>Three\</li\>  
\</List\>  
\);  
\}  
The console will have the following output\:  
\{  
"children"\: \[li\#1, li\#2, li\#3\]  
\}  
The logged array elements are live DOM elements, therefore we can interact with them the  
way we interact with any DOM element\:  
const List = \(props\) =\> \{  
props.children.forEach\(child =\> \{  
child.style = 'color\: red;';  
child.id = 'page-' + child.id;  
\}\);  
return \(  
\<ul\>\{children\}\</ul\>  
\);  
\}  
However, if you manipulate props.children in a reactive scope, you may experience some  
unexpected consequences, like double inserts. To remedy these problems Solid provides a  
helper function called children\:  
import \{ children \} from 'solid-js';  
const list = children\(\(\) =\> props.children\);  
The children function provides certain optimizations like lazy evaluation on property  
access and memoization. We will visit this topic later, once we have gained enough  
experience with Solid components.  
Components Can Have Children | 91 **How**  
# Components Are Rendered  
Solid transforms JSX components into regular JavaScript code at build time. This  
transformation compiles your JSX into highly optimized code that directly manipulates the  
DOM.  
Solid components are there to organize code. They are not re-rendered when their internal  
states change. The render function creates an implicit reactive context around reactive  
values and re-creates or updates corresponding DOM nodes.  
Let's have a simple application with a reactive value to explore how rendering is achieved\:  
import \{ render \} from "solid-js/web";  
import \{ createSignal \} from "solid-js";  
function App\(\) \{  
const \[count, setCount\] = createSignal\(1\);  
const handleClick = \(\) =\> setCount\(count\(\) + 1\);  
return \<div onClick=\{handleClick\}\>Count\: \{count\(\)\}\</div\>  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
We will start with inspecting the compiled output, which you can find below\:  
import \{ template as \_\$template \} from "solid-js/web";  
import \{ delegateEvents as \_\$delegateEvents \} from "solid-js/web";  
import \{ createComponent as \_\$createComponent \} from "solid-js/web";  
import \{ insert as \_\$insert \} from "solid-js/web";  
import \{ render \} from "solid-js/web";  
import \{ createSignal \} from "solid-js";  
var \_tmpl\$ = /\*\#\_\_PURE\_\_\*/\_\$template\(\`\<div\>Count\: \`\);  
function App\(\) \{  
const \[count, setCount\] = createSignal\(1\);  
const handleClick = \(\) =\> setCount\(count\(\) + 1\);  
return \(\(\) =\> \{  
var \_el\$ = \_tmpl\$\(\),  
\_el\$2 = \_el\$.firstChild;  
\_el\$.\$\$click = handleClick;  
\_\$insert\(\_el\$, count, null\);  
return \_el\$;  
\}\)\(\);  
\}  
92 | How  
Components Are Renderedrender\(\(\) =\> \_\$createComponent\(App, \{\}\), document.body\);  
\_\$delegateEvents\(\["click"\]\);  
I used the Solid Playground for transpilation and reformatted the output a bit to make it  
more readable.  
The Solid Playground is a valuable tool for debugging components. To get your code  
compiled, just visit https\:/ /playground.solidjs.com/ and type your code into the editor. To  
see the output, make sure you are on the Output tab and Compile Mode is set to the correct  
target, for the above code I used Client side rendering.  
You don’t have to render a full application to get an output. Transpilation works for any piece  
of code as long as it does not have any syntax errors.  
The render function accepts a component and a DOM element as arguments, mounting the  
component's output to the specified DOM element.  
The DOM tree of an application is built through function calls. If a component has a child  
component, whatever the child component returns is inserted into its parent when the DOM  
tree is being built.  
The render function calls the App component. The App component creates a div element  
using the \$template function adds a click handler to it.  
Solid relies on function calls to create and insert DOM nodes\:  
return \(\(\) =\> \{  
var \_el\$ = \_tmpl\$\(\),  
\_el\$2 = \_el\$.firstChild;  
\_el\$.\$\$click = handleClick;  
\_\$insert\(\_el\$, count, null\);  
return \_el\$;  
\}\)\(\);  
Although it’s an implementation detail, the typical flow of actions in a Solid component is as  
follows\:  
1\. The DOM node is created.  
2\. The node’s content is generated.  
3\. The content is inserted, and event handlers are attached.  
4\. The node is inserted into its parent node.  
How  
Components Are Rendered | 93 Solid splits JSX elements into two distinct parts\: static and dynamic. The static parts are  
those that do not change, whereas the dynamic parts are compiled into function calls that  
subscribe to signals, updating the UI element.  
See the div element in the example. The static part is created via the template function  
using the string that corresponds to the static part\:  
var \_tmpl\$ = /\*\#\_\_PURE\_\_\*/\_\$template\(\`\<div\>Count\: \`\);  
They dynamic part is created later in the insert function and inserted into the its parent  
element\:  
// Create a new div element from the template.  
const \_el\$ = \_tmpl\$\(\),  
// Get the div element’s first child, but this code does nothing.  
// Solid accesses template parts using the Node interface.  
\_el\$2 = \_el\$.firstChild;  
// Append the value of the \`count\` signal to the parent element.  
\_\$insert\(\_el\$, count, null\);  
// Return the element, so it can be inserted into its parent node.  
return \_el\$;  
The insert function checks if the value is an accessor; if so, it wraps it in a render effect.  
These render effects are re-executed when the signal’s value updates.  
export function insert\(parent, accessor, marker, initial\) \{  
if \(marker !== undefined && !initial\) initial = \[\];  
if \(typeof accessor !== "function"\) return insertExpression\(parent,  
accessor, initial, marker\);  
createRenderEffect\(current =\> insertExpression\(parent, accessor\(\),  
current, marker\), initial\);  
\}  
The insertExpression function can handle both simple and complex scenarios for DOM  
updates.  
In cases where the accessor is a signal, insertExpression is invoked repeatedly through a  
render effect, updating the DOM nodes dynamically in response to signal updates.  
If the signal’s value is a primitive one, such as a string or a number, a text node will be  
created using document.createTextNode. Returning to our example, whenever the value of  
count changes, a new text node will be created to replace the existing one.  
94 | How  
Components Are Rendered Static nodes are created within the template function from the provided string. The  
template function takes an HTML string and has the browser parse it internally through a  
\<template\> element, producing an HTML fragment that is ready to be inserted.  
The \<template\> HTML element is a mechanism for holding HTML that is not to  
be rendered immediately when a page is loaded but may be instantiated  
subsequently during runtime using JavaScript.  
Think of a template as a content fragment that is being stored for subsequent use  
in the document. While the parser does process the contents of the \<template\>  
element while loading the page, it does so only to ensure that those contents are  
valid; the element’s contents are not rendered, however.  
https\:/ /developer.mozilla.org/en-US/docs/Web/HTML/Element/template  
A \<template\> allows us to create an HTML structure once and clone it as we need. This  
avoids the overhead and potential errors of repeatedly parsing and creating HTML nodes.  
The Solid runtime clones the fragment returned from the template call as many times as it  
needs, both for initial the render and subsequent re-renders. Parsing is an expensive process  
so it is done once. However, cloning is relatively cheap so it is repeated.  
The template function is currently implemented as follows\:  
export function template\(html, isCE, isSVG\) \{  
let node;  
const create = \(\) =\> \{  
const t = document.createElement\("template"\);  
t.innerHTML = html;  
return isSVG ? t.content.firstChild.firstChild \:  
t.content.firstChild;  
\};  
// backwards compatible with older builds  
const fn = isCE  
? \(\) =\> untrack\(\(\) =\> document.importNode\(node || \(node =  
create\(\)\), true\)\)  
\: \(\) =\> \(node || \(node = create\(\)\)\).cloneNode\(true\);  
fn.cloneNode = fn;  
return fn;  
How  
Components Are Rendered | 95\}  
Overall, this approach is more efficient than imperatively building a DOM tree element by  
element, minimizing code complexity and bundle size, while also resulting in better  
performance compared to alternatives.  
Reactivity that updates nodes originates from the insert calls, not from the  
createComponent function. createComponent is a simple wrapper that calls the component  
function internally.  
The insert calls creates an implicit reactive context around the reactive value using  
createRenderEffect. The render effect creates a computation that runs immediately and  
re-executes upon signal updates, updating the related DOM node by reinserting the new  
value.  
\_\$insert\(\_el\$, count, null\);  
An important detail that deserve our attention is that the invocation of the accessor function  
in the JSX element is converted into an insert call, but the signal is not invoked. The insert  
function needs to check if the value is a signal or not in order to create a render effect  
around the reactive value.  
# Conditional Rendering  
Components can return different results based on a condition. In this example, we display a  
personalized message to the user based on their login status.  
import \{ createSignal \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const User = \(props\) =\> \{  
return \(  
\<div\>  
\<h2\>Welcome back!\</h2\>  
\<div\>\<button onClick=\{props.onClick\}\>Sign out\</button\>\</div\>  
\</div\>  
\);  
\}  
const Anonymous = \(props\) =\> \{  
return \(  
\<div\>  
\<h2\>Please Sign in!\</h2\>  
\<div\>\<button onClick=\{props.onClick\}\>Sign in\</button\>\</div\>  
96 | Conditional Rendering\</div\>  
\);  
\}  
const App = \(\) =\> \{  
const \[isLoggedIn, setIsLoggedIn\] = createSignal\(true\);  
const handleLogin = \(\) =\> \{  
setIsLoggedIn\(true\);  
\};  
const handleLogout = \(\) =\> \{  
setIsLoggedIn\(false\);  
\};  
if \(isLoggedIn\(\)\) \{  
return \<User onClick=\{handleLogout\} /\>;  
\}  
return \<Anonymous onClick=\{handleLogin\} /\>;  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
However, Solid’s components are executed once when they are loaded, so there’s no  
component-level re-rendering when the component’s state changes, and this is by design. If  
you click the logout button in the above example, the state gets updated but UI remains  
unchanged.  
Elements including components are re-rendered when their reactive context re-executes. By  
reactive context, we mean the context created by an observer. To put it simply, it is the  
scope of the callback function that we pass to createEffect, createRenderEffect,  
createMemo and createComputed functions.  
We’ve already learned that Solid creates an implicit reactive context around reactive values  
by wrapping them in createRenderEffects calls, which we can use to our advantage. If we  
wrap the JSX elements in a memo, we can re-render the UI elements reactively\:  
const App = \(\) =\> \{  
const \[isLoggedIn, setIsLoggedIn\] = createSignal\(true\);  
const handleLogin = \(\) =\> \{  
setIsLoggedIn\(true\);  
\};  
Conditional Rendering | 97const handleLogout = \(\) =\> \{  
setIsLoggedIn\(false\);  
\};  
return createMemo\(\(\) =\> \{  
if \(isLoggedIn\(\)\) \{  
return \<User onClick=\{handleLogout\} /\>;  
\}  
return \<Anonymous onClick=\{handleLogin\} /\>;  
\}\) as unknown as JSXElement;  
\};  
Alternatively, we can use the ternary operator or logical expressions such as && or || for  
conditional rendering, since Solid wraps an expression with a reactive value in an effect. It is  
essential to ensure that the expression is used within a JSX element. Here is how we can use  
the ternary operator\:  
const App = \(\) =\> \{  
const \[isLoggedIn, setIsLoggedIn\] = createSignal\(true\);  
const handleLogin = \(\) =\> \{  
setIsLoggedIn\(true\);  
\};  
const handleLogout = \(\) =\> \{  
setIsLoggedIn\(false\);  
\};  
return \(  
\<div\>  
\{isLoggedIn\(\) ?  
\<User onClick=\{handleLogout\} /\> \:  
\<Anonymous onClick=\{handleLogin\} /\>  
\}  
\</div\>  
\);  
\};  
For the following example, we use the logical AND operator \(&&\) for conditional rendering\:  
const App = \(\) =\> \{  
const \[isLoggedIn, setIsLoggedIn\] = createSignal\(true\);  
const handleLogin = \(\) =\> \{  
98 | Conditional RenderingsetIsLoggedIn\(true\);  
const handleLogout = \(\) =\> \{  
setIsLoggedIn\(false\);  
\};  
\};  
return \(  
\<div\>  
\</div\>  
\{isLoggedIn\(\) && \<User onClick=\{handleLogout\} /\>\}  
\{!isLoggedIn\(\) && \<Anonymous onClick=\{handleLogin\} /\>\}  
\);  
\};  
The logical AND operator \(&&\) executes the second operand only if the left-hand side  
expression returns a truthy value.  
Note that the JSX output in these last two examples is not identical to the one used in the  
createMemo example. These conditional expressions behave reactively because Solid wraps  
each in a reactive context, re-evaluating them as their dependencies update, but only when  
they are placed within an element. If you inspect the application, you will notice that the div  
element itself isn’t re-created; instead, the expression within \{\} is re-evaluated, updating its  
content.  
Try returning the ternary expression without the div element, and you’ll see that it no  
longer behaves reactively\:  
const App = \(\) =\> \{  
const \[isLoggedIn, setIsLoggedIn\] = createSignal\(true\);  
const handleLogin = \(\) =\> \{  
setIsLoggedIn\(true\);  
\};  
const handleLogout = \(\) =\> \{  
setIsLoggedIn\(false\);  
\};  
return isLoggedIn\(\) ?  
\<User onClick=\{handleLogout\} /\> \:  
\<Anonymous onClick=\{handleLogin\} /\>;  
\};  
Conditional Rendering | 99 Conditional expressions comes in handy when rendering list items. In the next example, we  
render an unordered list only when there are items to render\:  
const Element = \(\) =\> \{  
const items = \['Red', 'Green', 'Blue'\];  
return \(items.length \> 0\) && \(  
\<ul\>\{items.map\(\(item\) =\> \<li\>\{item\}\</li\>\)\}\</ul\>  
\);  
\};  
**Reactive** props  
Solid depends on function calls for reactivity. In this example, we use a reactive value and the  
Display component to display the current value\:  
const Display = \(props\) =\> \{  
return \<div\>Value is \{props.count\}\</div\>;  
\};  
const App = \(\) =\> \{  
const \[count, setCount\] = createSignal\(0\);  
return \(  
\<button onclick=\{\(\) =\> setCount\(c =\> c + 1\)\}\>  
\<Display count=\{count\(\)\} /\>  
\</button\>  
\);  
\};  
When you run the application and click the button, the value increases as expected but how  
this happens?  
The point we are trying to make is that we’re passing the count\(\) value, which is a number,  
to the Display component, rather than the signal accessor function. Even though we’re not  
explicitly using the signal accessor, the component is still able to react to changes in the  
data.  
The clue is in the compiled code\:  
\_\$createComponent\(Display, \{  
get count\(\) \{  
return count\(\);  
\}  
\}\)  
You see count\(\) call is compiled into a getter function, meaning whenever the count value  
100 | props WARNING  
A DOM node is a valid child only in the context of client-side rendering; however, it will not  
work on the server side.  
is requested, the count signal is invoked, returning the latest value rather than a static  
number.  
It’s a subtle compiler trick that might catch you off guard if you’re not aware of it.  
To turn it off, you can use the @once pragma which will eliminate the getter method\:  
\<Display count=\{/\*@once\*/count\(\)\} /\>  
The output becomes\:  
\_\$createComponent\(Display, \{  
count\: count\(\)  
\}\)  
# Props Should Be Treated as Read-Only  
Props object should be treated as read-only value because data moves through the  
component tree via props and you will break the components‘ contract if you mutate a prop  
value directly.  
Primitive values may not reveal the issue, since they are passed by value but you will  
certainly have problems if you mutate an object because they are passed by reference.  
For example, the Canvas component mutates the player’s age, which overwrites it for the  
Player component too.  
import \{ render \} from "solid-js/web";  
const Player = \(props\) =\> \{  
return \(  
\<div\>Age\: \{props.player.age\}\</div\>  
\);  
\}  
const Canvas = \(props\) =\> \{  
props.player.age = 40;  
return \(  
\<div\>Render player\: \{props.player.age\}\</div\>  
\);  
Props Should Be Treated as Read-Only  
| 101\}  
const App = \(\) =\> \{  
let p = \{ name\: 'John Doe', age\: 30 \};  
return \(  
\<div\>  
\<Player player=\{p\} /\>  
\<Canvas player=\{p\} /\>  
\</div\>  
\)  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
TIP  
You should never mutate a shared prop. If you need a mutable value to share between  
components use a signal.  
If you need a property that can be updated from multiple components, create a signal higher  
up in the component tree and pass its setter function around.  
const App = \(\) =\> \{  
const \[player, setPlayer\] = createSignal\(\{ name\: 'John Doe', age\: 30  
\}\);  
return \(  
\<div\>  
\<Player player=\{player\} /\>  
\<Canvas player=\{player\} setPlayer=\{setPlayer\} /\>  
\</div\>  
\)  
\}  
# Destructuring Props Changes the Rendering Order  
Destructuring props changes the execution order of the child components. We will explain  
this with two simple examples. In the first example, we will not use destructuring and place a  
few logs to track the execution order\:  
import \{ render \} from "solid-js/web";  
const Child = \(\) =\> \{  
console.log\('Rendering Child...'\)  
return \<div\>Greetings\</div\>  
\}  
102 | Destructuring Props Changes the Rendering Orderconst Parent = \(props\) =\> \{  
console.log\('Rendering Parent..'\);  
return \(  
\<div\>  
\{props.children\}  
\</div\>  
\);  
\}  
const App = \(\) =\> \{  
console.log\('Rendering App..'\);  
return \(  
\<Parent\>  
\<Child /\>  
\</Parent\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
This will output the following result\:  
⋮ Console  
Rendering App.. \:18  
Rendering Parent.. \:9  
Rendering Child.. \:4  
In the second example, we will refactor the Parent component and destructure the props  
object\:  
const Parent = \(\{ children \}\) =\> \{  
console.log\('Rendering Parent..'\);  
return \(  
\<div\>  
\{children\}  
\</div\>  
\);  
\}  
Now, let’s check the console output again\:  
Destructuring Props Changes the Rendering Order | 103 ⋮ Console  
Rendering App.. \:18  
Rendering Child.. \:4  
Rendering Parent.. \:9  
As you can see, destructuring the props object forces the children value to be evaluated  
before it is passed to the parent component. If overlooked, this subtle behavior can cause  
unexpected issues, especially when working with the context API, which we will explore after  
the next chapter.  
# Effects Are E  
# xecuted After Rendering  
Effects are computations created via createEffect and are executed after the rendering  
phase.  
The onMount function creates a non-tracking effect. These effects are executed only once  
since they do not track the signals they read.  
The effects created via onMount do not have priority over those created using  
createEffect. Whichever is defined first in the code will be executed first. The main  
difference is that onMount effects run only once, whereas createEffect effects will re-run  
whenever their dependencies update.  
Layout-related calculations must be wrapped in an effect, as they require elements to be  
fully rendered into the document before accurate measurements of their dimensions or  
positions can be taken.  
During the render phase, getBoundingClientRect\(\) returns zeros for all its properties  
because the browser’s layout phase has not yet completed. The ref functions, executed  
during rendering, have access to the DOM nodes, although these nodes have not yet been  
inserted into the document.  
import \{ render \} from 'solid-js/web';  
function App\(\) \{  
function divRef\(el\: HTMLDivElement\) \{  
const rect = el.getBoundingClientRect\(\)  
console.log\(JSON.stringify\(rect, null, 2\)\);  
\}  
return \(  
\<div style=\{\`margin-top\: 10rem\`\}\>  
104 | Effects Are E  
xecuted After Rendering\<div ref=\{divRef\}\>App!\</div\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
⋮ Console  
\{ "x"\: 0, "y"\: 0, "width"\: 0, "height"\: 0, "top"\: 0, "right"\: 0,  
"bottom"\: 0, "left"\: 0 \} \:6  
By using an onMount effect, we can defer these calculations until after the initial render.  
We still need to use the ref function to access the DOM node during rendering, assigning  
the element’s reference to a variable so that we can use it in our effect.  
import \{ onMount \} from "solid-js";  
import \{ render \} from "solid-js/web";  
function App\(\) \{  
let div\: any;  
function divRef\(el\: HTMLDivElement\) \{  
div = el;  
\}  
onMount\(\(\) =\> \{  
const rect = el.getBoundingClientRect\(\)  
console.log\(JSON.stringify\(rect, null, 2\)\);  
\}\);  
return \(  
\<div style=\{\`margin-top\: 10rem\`\}\>  
\<div ref=\{divRef\}\>App!\</div\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
Now we see that the values returned by getBoundingClientRect\(\) are no longer zero.  
⋮ Console  
\{ "x"\: 0, "y"\: 160, "width"\: 1720, "height"\: 17.3125, "top"\: 160,  
"right"\: 1720, "bottom"\: 177.3125, "left"\: 0 \} \:13  
Effects Are E  
xecuted After Rendering | 105 **Best Practices**  
Effective component design starts with identifying state requirements. Prioritize what to  
track first, and then consider how to display it. Once you are satisfied with the state and UI,  
focus on the interactions. You can always revisit and refine previous stages as needed. As you  
fine-tune your design, aim to minimize state updates to optimize performance.  
Using a single large component is often preferable to using many small components. The  
latter does not compile to a simple function invocation but instead involves multiple layers of  
abstraction and indirection. While fine-grained reactivity can mitigate performance  
degradation to some extent, having too many components may lead to noticeable lags.  
Components provide abstraction and isolation by interacting with the external environment  
exclusively via their props. It is crucial to maintain component boundaries and avoid  
exposing internal state or logic by improper means, such as modifying function properties or  
using global variables like the window object.  
Passing props across multiple levels of the component tree can become cumbersome when  
using the traditional parent-to-child method. Solid offers the context API as a simpler  
alternative for sharing data throughout the component hierarchy. We will explore this  
approach further in Chapter 11\: Sharing Data Through the Context API.  
106 | Best Practices **CHAPTER 10**  
# Working with Props  
Props are the fundamental mechanism for passing data between components in Solid, and  
mastering their use is essential for building robust and maintainable applications.  
In this chapter, we’ll explore how to use props effectively, learn to avoid common mistakes,  
and create versatile and reusable components.  
# Passing Data From Parent to Child  
Passing data from a parent component to a child component is a simple procedure that  
involves using JSX attributes, which become accessible to the component’s definition  
through the props object.  
const Child\: Component\<\{ value\: number \}\> = \(props\) =\> \{  
return \<span\>Count\: \{props.value\}\</span\>;  
\}  
const App = \(\) =\> \{  
const \[count, setCount\] = createSignal\(0\);  
return \(  
\<div\>  
\<Child value=\{count\(\)\} /\>  
\<button onclick=\{\(\) =\> setCount\(count\(\) + 1\)\}\>Inc\</button\>  
\</div\>  
\);  
\}  
You may ask if we should pass a signal’s accessor or its value. Which one is better?  
107 Avoiding destructuring is generally the better option here, as it may prevent subtle bugs.  
However, the choice is yours, as long as you understand how props are compiled.  
If the value is a signal invocation, the compiler automatically wraps it in a getter function to  
preserve reactivity, as discussed in the previous chapter.  
\<Child value=\{count\(\)\} /\>  
The JSX code above compiles to\:  
createComponent\(Count, \{  
get value\(\) \{  
return count\(\);  
\}  
However, you cannot use destructuring with these values, as it removes the reactivity. Since  
the value is no longer a signal, the UI will not receive updates.  
const Child\: Component\<\{ value\: number \}\> = \(\{ value \}\) =\> \{  
return \<span\>Count\: \{value\}\</span\>;  
But, if you pass an accessor, not the invocation, you can safely destructure the props object  
but now you need to invoke the accessor in the child component to get the value\:  
const Child = \(\{ value \}\) =\> \{  
return \(\<span\>Count\: \{value\(\)\}\</span\>\);  
\}\)  
\}  
\}  
\<Child value=\{count\} /\>  
WARNING  
Destructuring the props object forces the children property to be evaluated before it is  
passed to the parent component, producing a diﬀerent output than when the props are  
not destructured.  
# Sharing State Between Children  
To share a state between child components, you can elevate the state to a common ancestor  
and pass it down to the children via props. This technique is known as "lifting state up" and  
it’s a common practice in component-based frameworks like Solid and React to maintain  
shared state across related components.  
108 | Sharing State Between Children Here is an accordion panel implementation from the React documentation implemented in  
Solid\:  
import \{ JSX, JSXElement, createSignal, type Component \} from 'solid-  
js';  
import \{ render \} from 'solid-js/web';  
const Panel\: Component\<\{  
title\: string,  
children\: JSXElement,  
isActive\: boolean,  
onShow\: JSX.EventHandler\<HTMLHeadingElement, MouseEvent\>;  
\}\> = \(props\) =\> \{  
return \(  
\<section\>  
\<h3 onClick=\{props.onShow\}\>\{props.isActive ? '▼' \: '►'\}  
\{props.title\}\</h3\>  
\{props.isActive && \(\<p\>\{props.children\}\</p\>\)\}  
\</section\>  
\);  
\}  
export default function App\(\) \{  
const \[activeIndex, setActiveIndex\] = createSignal\(0\);  
return \(  
\<main\>  
\<h2\>Accordion Panel\</h2\>  
\<Panel  
title="Item \#1"  
isActive=\{activeIndex\(\) === 0\}  
onShow=\{\(\) =\> setActiveIndex\(0\)\}  
\>  
This is the first item's accordion body. It is shown by  
default, until it is collapsed.  
\</Panel\>  
\<Panel  
title="Item \#2"  
isActive=\{activeIndex\(\) === 1\}  
onShow=\{\(\) =\> setActiveIndex\(1\)\}  
\>  
This is the second item's accordion body. It is hidden by  
default, until it is expanded.  
\</Panel\>  
\</main\>  
Sharing State Between Children | 109\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
If you keep the state for a way to interact with the DOM elements, such as updating their  
properties or changing their size or color, there’s a better alternative\: Refs. With refs, you can  
directly manipulate an element, without using signals, and you can pass their references  
around like any other value. You can find more information and examples in Chapter 13.  
# Providing Controlled Access to Parent’s Data  
Callbacks allow us to provide controlled access to a component’s state, which is particularly  
useful for validating values before passing them to the setter functions.  
import \{ batch, createSignal, type Component \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const Child\: Component\<\{  
value\: number,  
updateCount\: \(value\: number\) =\> void  
\}\> = \(props\) =\> \{  
return \(  
\<div\>  
\<div\>Count\: \{props.value\}\</div\>  
\<div style=\{\`display\: flex; gap\: 0.25em\`\}\>  
\<button onclick=\{\(\) =\> props.updateCount\(props.value -  
1\)\}\>Dec\</button\>  
\<button onclick=\{\(\) =\> props.updateCount\(props.value +  
1\)\}\>Inc\</button\>  
\<button onclick=\{\(\) =\> props.updateCount\(0\)\}\>Reset\</button\>  
\</div\>  
\</div\>  
\);  
\}  
const App = \(\) =\> \{  
const \[count, setCount\] = createSignal\(0\);  
const \[message, setMessage\] = createSignal\<undefined | string\>\(\);  
const updateCount = \(value\: number\) =\> \{  
if \(typeof value === 'number' && value \>= 0\) \{  
batch\(\(\) =\> \{  
setCount\(value\);  
setMessage\(undefined\);  
110 | Sharing State Between Children\}\);  
\} else \{  
setMessage\(\`\$\{value\} is not a valid value!\`\);  
\}  
\}  
return \(  
\<div\>  
\{message\(\) && \<div\>\{message\(\)\}\</div\>\}  
\<Child value=\{count\(\)\} updateCount=\{updateCount\} /\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
Here we display an error message if the value is not a valid one. The batch function allows us  
to update the both signals at once.  
This pattern is a valuable tool for ensuring data integrity and preventing unexpected changes  
to a component’s state. By using callbacks, you can let the user know what values are  
allowed, helping them to make informed decisions on the input they provide.  
# Passing Data From Child to Parent  
Passing a signal accessor up through the component tree should be avoided if possible, as it  
is error-prone and often leads to suboptimal code. It goes against unidirectional data flow,  
one of Solid’s strong suits and fundamental rendering principles.  
The best approach to tackle this problem is to move the state to the parent component and  
pass the value to the child component, which we demonstrated in the previous sections.  
However, if you keep the state to update the appearence of a DOM element, you can easily  
achieve this using refs. Moving the state to the parent component helps keep the state  
management simple and centralized, while using refs allows for precise control over DOM  
nodes.  
# Destructuring and Spreading Props  
Destructuring props allows for a cleaner codebase and can be particularly useful when  
forwarding props to child components. However, it’s important to note that destructuring  
can remove reactivity if not used correctly.  
Destructuring and Spreading Props | 111 The reason for this is simple\: when we destructure a reactive object, we extract reactive  
values into static variables. Solid’s automatic dependency detection requires signals to be  
read for reactivity to function.  
As we demonstrated before, destructuring is safe when you do it in a way that the effects  
keep reading the underlying signals.  
const Child\: Component\<\{ value\: Accessor\<number\> \}\> = \(\{ value \}\) =\> \{  
return \<span\>Count\: \{value\(\)\}\</span\>;  
\};  
It is also safe to use destructuring on a reactive object inside an event handler because we  
run the destructuring logic per invocation\:  
const handleClick = \(\) =\> \{  
const \{ value \} = state\(\);  
\};  
\<div onclick=\{handleClick\}\>Click\</div\>  
You may experience issues with the spread syntax if you are not careful.  
When you spread a reactive object into another object, the values from the reactive object  
are copied into the new object. However, the reactivity of the original object is not copied.  
This is because the values from the reactive object are unwrapped into the new object.  
The compiler will help you with the spread syntax by providing the glue code that is  
necessary to preserve the reactivity. This glue code is generated by the compiler and is not  
something that you need to worry about.  
Let’s have a simple example and inspect the compiled code\:  
const \[state, setState\] = createSignal\(\{ value\: 1 \}\);  
\<input \{...state\(\)\} /\>  
The code above will be compiled into the following\:  
import \{ template \} from "solid-js/web";  
import \{ spread \} from "solid-js/web";  
import \{ mergeProps \} from "solid-js/web";  
const \_tmpl\$ = template\(\`\<input\>\`\);  
const \[state, setState\] = createSignal\(\{  
112 | Destructuring and Spreading Propsvalue\: 1  
\}\);  
\(\(\) =\> \{  
const \_el\$ = \_tmpl\$\(\);  
spread\(\_el\$, mergeProps\(state\), false, false\);  
return \_el\$;  
\}\)\(\);  
Take note of the spread and mergeProps calls in the example. These functions are employed  
to seamlessly integrate the properties of a reactive object with those of a JSX element,  
ensuring that the reactivity of the object is maintained within the element’s properties.  
# Forwarding Multiple Props at Once  
Manually forwarding every prop into an element or a component can be tedious. Instead, we  
can forward the entire props object using the spread syntax\:  
\<CompB \{...props\} /\>  
This technique is useful when extending a component with additional properties by  
wrapping it in another component. For example\:  
const Button = \(props\) =\> \{\};  
const PrimaryButton = \(props\) =\> \{  
const onFocus = \(event\) =\> \{\}  
return \<Button \{...props\} class="is-primary" onFocus=\{onFocus\} /\>  
\}  
However, passing the props object as-is may cause unexpected results in the receiving  
component. To address this, Solid provides the splitProps and mergeProps utilities, which  
allow you to create new props from existing props while preserving reactivity.  
splitProps creates a reactive object with only the requested properties. For example, if you  
want to create a new object with size and title from the original props, you can use  
splitProps\:  
const Parent = \(props\) =\> \{  
const \[newProps\] = splitProps\(props, \['size', 'title' \]\);  
return \<Child \{...newProps\} /\>;  
\};  
You can pass multiple arrays to splitProps to create multiple objects\:  
Forwarding Multiple Props at Once | 113const \[one, two, three\] = splitProps\(props, \['size', 'title'\],  
\['title'\], \['size'\]\);  
The returned array will always have an extra item that contains the leftover properties\:  
const \[one, two, three, leftovers\] = splitProps\(props, \[\], \[\], \[\]\);  
On the other hand, mergeProps is useful when you want to merge multiple reactive objects  
into one, making it easier to pass them around as a single object. For example\:  
const \[user, setUser\] = createStore\(\{ name\: 'John Doe', age\: 44 \}\);  
const \[info, setInfo\] = createStore\(\{ role\: 'admin', email\:  
'mail@example.com'\}\);  
const profile = mergeProps\(user, info\);  
\<User profile=\{profile\}\>  
By using these utilities, you can forward multiple props at once while maintaining reactivity  
and avoiding unexpected results.  
# Validating Props  
Solid does not have a built-in solution for validating props. It relies on TypeScript for type  
safety. Since Solid is written in TypeScript, it benefits from static type checking, which  
catches errors at compile time and removes the need for runtime validation, keeping code  
efficient and lightweight.  
114 | Validating Props **CHAPTER 11**  
# Sharing Data Through the Context API  
Context allows us to pass data to downstream components directly, eliminating the manual  
work of passing props down to children at each level.  
For example, CompB gets the user value from UserContext.Provider directly\:  
import \{  
createContext,  
useContext,  
type Component,  
type JSXElement  
\} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
interface User \{  
name\: string;  
age\: number;  
\}  
const UserContext = createContext\<User\>\(\);  
const CompA\: Component\<\{ children\: JSXElement \}\> = \(props\) =\> \{  
return props.children;  
\};  
const CompB\: Component = \(props\) =\> \{  
const user = useContext\(UserContext\);  
return \<div\>\{JSON.stringify\(user\)\}\</div\>;  
\};  
115const App = \(\) =\> \{  
const user = \{ name\: 'John Doe', age\: 20 \};  
return \(  
\<UserContext.Provider value=\{user\}\>  
\<CompA\>  
\<CompB /\>  
\</CompA\>  
\</UserContext.Provider\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
Context is a property on the computation object that keeps key-value pairs set by different  
context providers\:  
computation.context = \{ \[id\]\: value \};  
Components are rendered using render effects, which generate computations and these  
computation objects keep the context values. You can refer to Chapter 4, The Essence of  
Reactive Core for a detailed explanation of computation objects.  
Components access these context values using the useContext function.  
TIP  
You can use the getOwner function to inspect a computation that is associated with a  
particular scope. getOwner returns the computation object that owns the scope in which it  
is called.  
# How  
# Context API Works  
Context API provides a way to pass values down the component tree without going through  
the component hierarchy. Although we used the term “passing down”  
, in reality, it is the  
other way around\: The useContext function climbs up the component tree looking for a  
specific value using the provided key.  
Context API consists of three components\:  
1. createContext\: This function creates a unique id and a Provider component.  
2. Provider\: This is a wrapper component that uses the previously generated id to set a  
value on the context object.  
3. useContext\: This utility function retrieves the previously set value for a given id.  
116 | How  
Context API Works When we call the createContext function, we generate a unique identifier and a Provider  
component but we don’t set any values yet.  
Here is the actual code used in Solid\:  
function createContext\(defaultValue\) \{  
const id = Symbol\("context"\);  
return \{ id, Provider\: createProvider\(id\), defaultValue \};  
\}  
The Symbol object generates a unique identifier that prevents conflicts.  
The Provider component receives the id value through the createProvider call.  
When called with a value like so\:  
\<Context.Provider value=\{someValue\}\>\</Context.Provider\>  
The Provider component uses id as a key to store the given value on the context object\:  
computation.context = \{ \[id\]\: props.value \};  
Now that we set the value, it is time to access it. To do this, we use the useContext function.  
useContext requires an id to look up a value. This id comes from the createContext  
function through the context object that we pass to useContext\:  
export function useContext\<T\>\(context\: Context\<T\>\)\: T \{  
let ctx;  
return \(ctx = lookup\(Owner, context.id\)\) !== undefined ? ctx \:  
context.defaultValue;  
\}  
useContext walks the owner tree to perform the lookup. Solid establishes ownership  
between nested computations to keep track of who owns whom, so that when a parent  
computation is disposed of, its child computations are also disposed of.  
useContext checks the immediate computation for the value. If the value is present, it will  
be returned immediately.  
If the value is not found on the immediate computation, it recursively traverses up the owner  
chain, checking each parent computation for the value until there are no more parents to  
check. In that case, the default value will be returned.  
How  
Context API Works | 117 You can verify this logic by creating a simple traverse function that iterates through all the  
context objects and prints them out\:  
function traverseOwners\(obj\: any\) \{  
if \(obj.owner\) \{  
console.log\(obj.owner.context\);  
traverseOwners\(obj.owner\);  
\}  
\}  
Let’s call this function in our component\:  
const CompB\: Component = \(props\) =\> \{  
traverseOwners\(getOwner\(\)\);  
const user = useContext\(UserContext\);  
return \<div\>\{JSON.stringify\(user\)\}\</div\>;  
\};  
A context value can be overridden throughout the component tree\:  
const ThemeContext = createContext\<string\>\('black'\);  
const Child = \(\) =\> \{  
const theme = useContext\(ThemeContext\);  
return \(  
\<div style=\{\{ color\: theme \}\}\>Child Component\</div\>  
\);  
\};  
const App = \(\) =\> \{  
return \(  
\<div\>  
\<Child /\>  
\<ThemeContext.Provider value='red'\>  
\<Child /\>  
\<ThemeContext.Provider value='blue'\>  
\<Child /\>  
\</ThemeContext.Provider\>  
\</ThemeContext.Provider\>  
\</div\>  
\);  
\}  
Now, each div element has a different value\:  
118 | How  
Context API Works\<div\>  
\<div style="color\: black;"\>Child Component\</div\>  
\<div style="color\: red;"\>Child Component\</div\>  
\<div style="color\: blue;"\>Child Component\</div\>  
\</div\>  
Since context is a plain JavaScript object, we can store any values on it, including reactive  
ones like so\:  
import \{ createContext, useContext, createSignal \} from "solid-js";  
import \{ render \} from "solid-js/web";  
const \[count, setCount\] = createSignal\(0\);  
const CounterContex = createContext\(\{  
count,  
setCount,  
\}\);  
const Child = \(\) =\> \{  
const \{ count, setCount \} = useContext\(CounterContex\);  
return \(  
\<div onClick=\{\(\) =\> setCount\(count\(\) + 1\)\}\>  
Click to increment\: \{count\(\)\}  
\</div\>  
\);  
\};  
const App = \(\) =\> \{  
return \(  
\<CounterContex.Provider value=\{\{ count\: 99 \}\}\>  
\<Child /\>  
\</CounterContex.Provider\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
The Context API is an effective tool for reducing clutter but should be used judiciously. It is  
best suited only for values that need to change throughout the component tree because both  
providing values and retrieving them introduce indirections and incur costs.  
How  
Context API Works | 119 Providing values brings an extra cost because of the overhead due to all the function calls  
that we need to make to create a component and redirect props. Retrieving values is also  
expensive because it requires traversing the ownership tree, checking each context property  
against a key.  
If the value does not have to be overridden as we go down through the component hierarchy,  
using the regular function scope is better because it will be more performant.  
NOTE  
In React, the state is confined to a component’s scope, whereas in Solid, it can reside  
outside the component’s boundaries. So, in Solid, using the context API to provide a global  
state is not only unnecessary but also detrimental to performance because of the extra  
function calls we have to make to get the value.  
Destructuring the props object changes the behavior of the context API in a very subtle way,  
causing difficult-to-detect bugs.  
For example, consider this Menu component\:  
import \{ render \} from "solid-js/web";  
import \{ createContext, useContext \} from "solid-js";  
const Context = createContext\(0\);  
const Title = \(\) =\> \{  
console.log\('Title'\)  
const value = useContext\(Context\);  
return \<div\>Value\: \{value\}\</div\>  
\}  
const Menu = \(props\) =\> \{  
console.log\('Menu'\);  
return \(  
\<Context.Provider value=\{10\}\>  
\{props.children\}  
\</Context.Provider\>  
\);  
\}  
const App = \(\) =\> \{  
return \(  
\<Menu\>  
\<Title /\>  
\</Menu\>  
120 | How  
Context API Works\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
When run, the div element will have Value\:10 as its content and the console will output  
these logs\:  
Menu  
Title  
However, if we destructure the props object in the Menu component\:  
const Menu = \(\{ children \}\) =\> \{  
console.log\('Menu'\);  
return \(  
\<Context.Provider value=\{10\}\>  
\{children\}  
\</Context.Provider\>  
\);  
\}  
The content of the div element becomes Value\: 0 and the console outputs\:  
Title  
Menu  
When destructured, the children of the Menu component are executed before their parent.  
In other words, Title is executed before the context is set, hence it outputs the default  
value of the context provider.  
If you are going to use props destructuring, you should place your provider component  
somewhere higher on the component tree so that children receive the context value when  
they are executed.  
So the solution is that we should either wrap the parent component or its children with the  
provider component like so\:  
\<Context.Provider value=\{10\}\>  
\<Menu\>  
\<Title /\>  
\</Card\>  
\</Context.Provider\>  
or  
How  
Context API Works | 121\<Menu\>  
\<Context.Provider value=\{10\}\>  
\<Title /\>  
\</Context.Provider\>  
\</Menu\>  
Now, children will receive the provided value whether we destructure the props or not.  
TIP  
In development mode, depending on the module structure you use, context objects may  
not retain their state after a HMR refresh, causing errors due to accessing a value on an  
undefined property, if there is no default value. HMR is triggered when you modify the  
file that uses a context provider.  
To address this issue, you can either provide a default value or force a full refresh using  
the @refresh reload pragma.  
Alternatively, you can extract the provider component into its own module and manually  
refresh the page whenever you update this module, which should be less frequent than  
updating the whole application.  
# Best Practices  
The Context API is good for contextual values, values that vary as you move through the  
component tree. If they don’t need be contextual, prefer passing values directly via the scope  
chain, as it is better for performance and scalability.  
Since Solid components can utilize reactive values from their outer scope, using the Context  
API for a global state is unnecessary.  
122 | Best Practices **Component Lifec**  
# CHAPTER 12  
# y  
# cle  
In applications with many moving parts, it is essential to allocate resources when needed and  
release them when they are no longer required. Otherwise, the application may leak memory  
or suffer from issues related to resource build-up.  
Having a component-based architecture, Solid provides two functions to hook into a  
component’s life cycle\:  
onMount creates an effect that runs when the component mounts.  
onCleanup registers a callback that runs when the component is disposed of.  
Let’s see them in action\:  
import \{  
Component,  
createSignal,  
onCleanup,  
onMount,  
type JSX  
\} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const Title\: Component\<\{ children\: JSX.Element \}\> = \(props\) =\> \{  
createEffect\(\(\) =\> \{  
console.log\(\`Running createEffect callback\`\);  
\}\);  
onMount\(\(\) =\> \{  
console.log\('Running onMount callback'\);  
123\}\);  
onCleanup\(\(\) =\> \{  
console.log\(\`Running onCleanup callback\`\);  
\}\);  
return \<h2\>\{props.children\}\</h2\>  
\};  
const App = \(\) =\> \{  
const \[checked, setChecked\] = createSignal\(true\);  
const handleClick = \(\) =\> setChecked\(prev =\> !prev\);  
const handleChange\: JSX.ChangeEventHandler\<HTMLInputElement, Event\> =  
\(event\) =\> \{  
setChecked\(event.currentTarget.checked\);  
\};  
return \(  
\<div\>  
\<div\>  
\{handleChange\} /\>  
\</div\>  
\</div\>  
\{checked\(\) && \<Title\>A Removable Component!\</Title\>\}  
\<input type="checkbox" checked=\{checked\(\)\} onChange=  
\<label onClick=\{handleClick\}\>Show Title\</label\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
When the application launches, the Title component is displayed, and the console shows  
the following logs\:  
⋮ Console  
Running createEffect callback \:13  
Running onMount callback \:17  
When the checkbox is unchecked, the component is unmounted, and an additional log  
appears in the console\:  
124 | Chapter 12. Component Lifec  
y  
cle ⋮ Console  
Running onCleanup callback \:21  
Let’s examine these functions more closely.  
# onMount  
onMount is a utility function that creates a non-tracking effect. The effect is wrapped in the  
untrack function to make it non-reactive, ensuring that it is run only once when the  
component is rendered.  
Here’s how it’s implemented in Solid\:  
export function onMount\(fn\: \(\) =\> void\) \{  
createEffect\(\(\) =\> untrack\(fn\)\);  
\}  
The effect does not have inherent priority over other effects. The order in which effects are  
executed depends on the order they are declared in the component.  
The onMount function is useful for running one-time side effects, such as registering a  
command or attaching an event listener.  
It’s worth noting that you can also run those actions directly within the component body  
unless you need to access the underlying DOM elements of the component. In that case,  
onMount is required.  
The onMount function is crucial for obtaining layout-related values of a DOM element, such  
as its size or position in the document. It is commonly utilized in components like tooltips,  
modals, and popovers, that require precise positioning.  
Please note that it is not possible to determine an element’s position without first inserting it  
into the document, as several factors may influence its final layout\:  
The position, size, and style of its parent elements  
Its own CSS styles  
The viewport dimensions  
onMount | 125 onCleanup  
onCleanup registers a callback function that will be invoked when the reactive scope is  
disposed of. This provides a convenient way to handle necessary cleanup tasks, like releasing  
resources, canceling subscriptions, removing event listeners, and clearing timers\:  
Under the hood, onCleanup pushes the callback function onto an array that lives on the  
computation object.  
Let’s check out its implementation\:  
function onCleanup\(fn\: \(\) =\> void\) \{  
if \(Owner === null\)  
// Removed for clarity  
else if \(Owner.cleanups === null\) Owner.cleanups = \[fn\];  
else Owner.cleanups.push\(fn\);  
return fn;  
\}  
When the owner computation is disposed of, Solid’s runtime pops these callbacks and  
invokes them one by one. Computations are disposed in the reverse order of their  
registration.  
The onMount and onCleanup are not limited to components, they can also be used in any  
reactive context.  
TIP  
It is a common practice to register an onCleanup callback inside an onMount eﬀect\:  
onMount\(\(\) =\> \{  
document.addEventListener\('click', closeModal\);  
onCleanup\(\(\) =\> \{  
document.removeEventListener\('click', closeModal\);  
\}\);  
\}\)  
# Best Practices  
To improve a component’s performance, avoid using onMount callbacks unless you need to  
access the DOM element after it has been inserted into the document.  
126 | Best Practices If layout-related values are not needed, it is better to use a ref function instead of an  
onMount effect to avoid triggering an additional render cycle.  
If you need to attach an event listener to an external DOM node that is guaranteed to exist  
when the component executes—such as the body element—you can do so directly within the  
component’s body.  
Best Practices | 127 **CHAPTER 13**  
# Accessing D  
**OM Nodes With** ref  
A ref is a special attribute on a JSX element that provides a way to access underlying DOM  
nodes in a component. Refs come in handy when interacting with DOM imperatively or  
dealing with third-party libraries.  
Solid’s refs come in two flavors\:  
Callback  
Variable  
In the callback form, Solid invokes the callback function when the referenced element  
becomes available, passing the DOM element as the sole argument.  
function divRef\(ref\: HTMLDivElement\) \{  
console.log\(ref\);  
\}  
\<div ref=\{divRef\} /\>  
A ref function is executed during the rendering phase, before the element is inserted into  
the document.  
In the variable form, the element is assigned to the provided variable once it becomes  
available.  
let divRef;  
\<div ref=\{divRef\} /\>  
The variable form is a syntax sugar for the function form and it is functionally equivalent to\:  
129let divRef;  
\<div ref=\{el =\> divRef = el\} /\>  
If we examine the compiled code, we can see that Solid injects the assignment operation if  
we use the variable form\:  
const \_tmpl\$ = /\*\#\_\_PURE\_\_\*/\_\$template\(\`\<input\>\`\);  
export const App = \(\) =\> \{  
let divRef;  
return \(\(\) =\> \{  
const \_el\$ = \_tmpl\$\(\);  
const \_ref\$ = divRef;  
typeof \_ref\$ === "function" ? \_\$use\(\_ref\$, \_el\$\) \: divRef = \_el\$;  
return \_el\$;  
\}\)\(\);  
\};  
The code checks if the ref value is a function or not. If it is, it invokes the function with the  
element’s reference. Otherwise, it assigns the element’s reference to the variable we passed.  
The assignment operation creates an alias for the element’s object by assigning its reference  
to the variable we provided. As you may recall, objects are passed by reference in JavaScript.  
There is a subtle but important detail here. The variable doesn’t point to the actual DOM  
element until the internal assignment operation is run. This means divRef will be undefined  
before the assignment operation. Trying to access it immediately leads to an error.  
const App = \(\) =\> \{  
let input;  
input.focus\(\);  
return \(  
\<input ref=\{input\} /\>  
\);  
\}  
To access the element safely, we can use onMount or createEffect functions, as they are  
executed after the rendering phase.  
const App = \(\) =\> \{  
let input;  
onMount\(\(\) =\> \{  
130 | Chapter 13. Accessing D  
OM Nodes With ref input.focus\(\);  
\}\);  
return \(  
\<input ref=\{input\} /\>  
\);  
\}  
Since element references are guaranteed to exist within an effect, we don’t need to worry  
about guarding against the undefined value. However, TypeScript cannot infer a ref’s type  
because it can not see through the rendering mechanism. So, we can safely use the non-null  
assertion operator \(!\) as a workaround\:  
const App = \(\) =\> \{  
let input\: HTMLInputElement;  
onMount\(\(\) =\> \{  
input.focus\(\);  
\}\);  
return \(  
\<input ref=\{input!\} /\>  
\);  
\}  
REF  
TypeScript has a special syntax for removing null and undefined from a type without  
doing any explicit type checking. Writing ! after any expression is eﬀectively a type  
assertion that the value isn’t null or undefined\:  
function liveDangerously\(x?\: number | null\) \{  
// No error  
console.log\(x!.toFixed\(\)\);  
\}  
Type assertions do not change the runtime behavior of the code, they only suppress type  
errors. It is important to use ! only when you are certain the value cannot be null or  
undefined, otherwise, you risk encountering runtime errors.  
https\://www.typescriptlang.org/docs/handbook/2/everyday-types.html\#non-null-assertion-  
operator-postfix-  
Alternatively, you can use the definite assignment assertion \(!\) to tell the compiler that the  
variable will be assigned before it is accessed\:  
Chapter 13. Accessing D  
OM Nodes With ref | 131const App = \(\) =\> \{  
let input!\: HTMLInputElement;  
onMount\(\(\) =\> \{  
input.focus\(\);  
\}\);  
return \(  
\<input ref=\{input\} /\>  
\);  
\}  
REF  
The definite assignment assertion is a feature that allows a ! to be placed after instance  
property and variable declarations to relay to TypeScript that a variable is indeed assigned  
for all intents and purposes, even if TypeScript’s analyses cannot detect so.  
https\://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-  
7.html\#definite-assignment-assertions  
Unlike the variable form, the function form provides type safety since we can annotate the  
element that the ref function receives\:  
const App = \(\) =\> \{  
let input\: HTMLInputElement;  
const handleClick = \(\) =\> \{  
input.focus\(\);  
\};  
function ref\(el\: HTMLInputElement\) \{  
input = el;  
\}  
return \<input ref=\{ref\} onClick=\{handleClick\} /\>;  
\};  
Or you can use an arrow function to run an inline assignment operation and avoid non-null  
assertion\:  
const App = \(\) =\> \{  
let input\: HTMLInputElement;  
const handleClick = \(\) =\> \{  
input.focus\(\);  
\};  
132 | Chapter 13. Accessing D  
OM Nodes With ref return \<input ref=\{\(el\) =\> \(input = el\)\} onClick=\{handleClick\} /\>;  
\};  
The function form comes in handy when you are dealing with multiple elements.  
# Forwarding Refs  
Forwarding refs is a technique for passing an element’s reference to other components so  
that those components can interact with the element. This can be useful for a variety of  
reasons, such as when you need to access the element’s DOM node or listen for events on  
the element.  
In Solid, there is no built-in mechanism for forwarding refs like in React. However, we can  
use callbacks to achieve the same effect. To do this, we create a callback function in the  
parent component and pass it to the child component as a prop.  
We can use the callback function to pass the element to the child, granting the child  
component complete access to the element. Or we can let the child component call the  
callback function to perform a predefined action.  
For example, the Button component below calls the handleClick function to focus the  
input element that lives in the App component\:  
import \{ render \} from 'solid-js/web';  
import \{ type Component \} from 'solid-js';  
const Button\: Component\<\{ onclick\: \(\) =\> void \}\> = \(props\) =\> \{  
return \<button onClick=\{props.onclick\}\>Focus\</button\>;  
\};  
const App = \(\) =\> \{  
let input\: HTMLInputElement;  
const handleClick = \(\) =\> \{  
input.focus\(\);  
\};  
return \(  
\<div\>  
\<input ref=\{input!\} /\>  
\<Button onclick=\{handleClick\} /\>  
\</div\>  
\);  
\};  
Forwarding Refs | 133render\(\(\) =\> \<App /\>, document.body\);  
Using a ref, we can access a child’s element from its parent component as well\:  
import \{ render \} from 'solid-js/web';  
import \{ type Component \} from 'solid-js';  
const Input\: Component\<\{  
ref\: HTMLInputElement  
\}\> = \(props\) =\> \{  
return \<input ref=\{props.ref\} /\>;  
\};  
const App = \(\) =\> \{  
let input\: HTMLInputElement;  
const handleClick = \(\) =\> \{  
input.focus\(\);  
\};  
return \(  
\<div\>  
\<Input ref=\{input!\} /\>  
\<button onclick=\{handleClick\}\>Focus\</button\>  
\</div\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
# Using Refs with E  
# xternal Libraries  
Say we are working with an external library that expects us to provide a DOM element for it  
to render its content.  
Let’s use a concrete example\: Chart.js requires you to provide a canvas element so that it can  
render a chart on top of it.  
Using a ref, we can provide the expected element on the fly whenever we are about to show  
a chart.  
For this example, we need to install chart.js library first\:  
pnpm i chart.js  
134 | Using Refs with E  
xternal Libraries Now, we will implement a simple application that displays a 2D chart of acquisitions made by  
a company.  
In the older version of Chart.js, it was not necessary for the canvas element to be inserted  
into the document. So, the code below used to work.  
import \{ Chart \} from 'chart.js/auto';  
import \{ createSignal, Show \} from 'solid-js';  
const data = \[  
\{ year\: 2010, count\: 10 \},  
\{ year\: 2011, count\: 20 \},  
\{ year\: 2012, count\: 15 \},  
\{ year\: 2013, count\: 25 \},  
\{ year\: 2014, count\: 22 \},  
\{ year\: 2015, count\: 30 \},  
\{ year\: 2016, count\: 28 \},  
\];  
const createChart = \(canvasEl\: HTMLCanvasElement\) =\> \{  
new Chart\(canvasEl, \{  
type\: 'bar',  
data\: \{  
labels\: data.map\(row =\> row.year\),  
datasets\: \[  
\{  
label\: 'Acquisitions by year',  
data\: data.map\(row =\> row.count\)  
\}  
\]  
\}  
\}\);  
\}  
function App\(\) \{  
const \[show, setShow\] = createSignal\(false\);  
return \(  
\<div\>  
\<button onClick=\{\(\) =\> setShow\(\(state\) =\> !state\)\}\>  
\{show\(\) ? 'Hide Chart' \: 'Show Chart'\}  
\</button\>  
\<Show when=\{show\(\)\}\>  
\<canvas ref=\{\(el\) =\> createChart\(el\)\}/\>  
\</Show\>  
Using Refs with E  
xternal Libraries | 135\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
But in newer versions, the chart renderer relies on the getComputedStyle method  
internally, which requires the element to be inserted into the DOM. This forces us to use  
onMount or createEffect on the element\:  
import \{ Chart \} from 'chart.js/auto';  
import \{ createEffect, createSignal, Show \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const data = \[  
\{ year\: 2010, count\: 10 \},  
\{ year\: 2011, count\: 20 \},  
\{ year\: 2012, count\: 15 \},  
\{ year\: 2013, count\: 25 \},  
\{ year\: 2014, count\: 22 \},  
\{ year\: 2015, count\: 30 \},  
\{ year\: 2016, count\: 28 \},  
\];  
function App\(\) \{  
const \[show, setShow\] = createSignal\(false\);  
let canvasEl\: HTMLCanvasElement;  
createEffect\(\(\) =\> \{  
if \(!show\(\)\) return;  
new Chart\(canvasEl, \{  
type\: 'bar',  
data\: \{  
labels\: data.map\(row =\> row.year\),  
datasets\: \[  
\{  
label\: 'Acquisitions by year',  
data\: data.map\(row =\> row.count\)  
\}  
\]  
\}  
\}\);  
\}\);  
136 | Using Refs with E  
xternal Librariesreturn \(  
\<div\>  
\<button onClick=\{\(\) =\> setShow\(\(state\) =\> !state\)\}\>  
\{show\(\) ? 'Hide Chart' \: 'Show Chart'\}  
\</button\>  
\<Show when=\{show\(\)\}\>  
\<canvas ref=\{canvasEl!\} /\>  
\</Show\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
# Best Practices  
Prefer function form refs over variable form ones since they produce less code, don’t require  
an effect to interact with the element, thus run faster, and provide complete type safety  
without requiring any type assertions.  
When using a variable from refs, avoid using an if statement to suppress type errors around  
the variable, as this introduces a runtime cost. Instead, prefer type-related solutions such as  
non-null assertions or type casting, which do not incur any runtime cost.  
Best Practices | 137 **CHAPTER 14**  
# Working with Computations  
This chapter requires familiarity with the execution model of Solid’s runtime, which we  
covered in Chapter 4, The Essence of Reactive Core.  
Solid uses computations to execute side effects.  
Computations take a callback function that runs the intended actions and preserves the  
return value from the callback’s last execution for its next invocation. Computations are used  
for other purposes as well, such as storing context values, managing cleanup functions,  
managing their child computations, and more.  
Solid does not use a priority queue; it uses a scheduler. The scheduler allows computations  
to run at different times, resulting in a somewhat similar outcome.  
For example, a computation created with createComputed has a higher immediacy than the  
one created with createEffect. Consequently, the callback for createComputed executes  
before the createEffect callback, even if the effect appears earlier in the code flow.  
import \{ createComputed, createEffect, createRoot \} from 'solid-js';  
createRoot\(\(\) =\> \{  
createEffect\(\(\) =\> \{  
console.log\(\`Running createEffect callback\`\);  
\}\);  
createComputed\(\(\) =\> \{  
console.log\(\`Running createComputed callback\`\);  
\}\);  
\}\);  
139 ⋮ Console  
Running createComputed callback \:9  
Running createEffect callback \:5  
In Solid, there are various methods for creating computations, each catering to a specific use  
case\:  
createComputed  
createRenderEffect  
createEffect  
createMemo  
createDeferred  
createReaction  
So far, we have only discussed createEffect, which creates a computation that runs after  
the render phase, when DOM nodes are inserted into the document.  
In this chapter, we will explore all the functions that create computations and examine their  
characteristics, such as when they run, and what they do.  
Some of these functions are listed as secondary primitives in Solid’s documentation. The  
createResource function is not on our list because it relies on the createMemo and  
createComputed functions internally and it is discussed in detail in Chapter 25\: Using the  
Resource API for Data Fetching.  
Although the onMount function creates an effect, we will not discuss it further here, as it has  
been covered multiple times previously. For a comprehensive explanation, please refer to  
Chapter 12.  
# createComputed  
The createComputed function creates a computation that runs immediately and re-runs  
when its dependencies update.  
const \[count, setCount\] = createSignal\(0\);  
createComputed\(\(\) =\> \{  
console.log\(count\(\)\);  
\}\);  
It has the same API as createEffect.  
140 | createComputed While effects wait for the current rendering phase to complete, computeds run immediately.  
import \{ createComputed, createEffect, createRoot \} from 'solid-js';  
createRoot\(\(\) =\> \{  
createEffect\(\(\) =\> \{  
console.log\(\`Running createEffect callback\`\);  
\}\);  
createComputed\(\(\) =\> \{  
console.log\(\`Running createComputed callback\`\);  
\}\);  
\}\);  
As we’ve mentioned before, computeds have a higher priority than effects. The reason for  
this is that computeds are executed before the rendering phase, which helps avoid triggering  
unnecessary re-renders.  
Computeds are not intended for interacting with DOM elements. Instead, they serve as a  
general tool for running computations for building internal APIs.  
Solid avoids exposing the createComputation function to prevent the core logic from being  
tampered with. createComputed is the closest thing we get to createComputation.  
NOTE  
Solid has its own naming convention for its parts, which may confuse those who are  
familiar with Mobx. In Solid, the term “computed” has a diﬀerent function than its  
namesake in Mobx. Solid’s memos serve a purpose akin to Mobx’s “computeds”  
.  
# createRenderEffect  
Solid runtime uses the createRenderEffect function to implement the rendering phase.  
Components utilize render effects internally to append DOM nodes to their parent elements  
and keep them up to date when their signals update. Render effects have no role in creating  
DOM nodes. Instead, they maintain the accuracy of the DOM tree by updating existing  
nodes.  
Like other effects, the render effects are also executed immediately on their first run, and  
re-executed when their dependencies update.  
They have a higher priority than regular effects during their initial execution, and they are  
treated like regular effects for their subsequent executions.  
createRenderEffect | 141import \{  
createEffect,  
createRenderEffect,  
createRoot,  
createSignal  
\} from 'solid-js';  
const \[count, setCount\] = createSignal\(0\);  
createRoot\(\(\) =\> \{  
createEffect\(\(\) =\> \{  
console.log\(\`Running effect\`, count\(\)\);  
\}\);  
createRenderEffect\(\(\) =\> \{  
console.log\(\`Running render effect\`, count\(\)\);  
\}\)  
\}\);  
setInterval\(\(\) =\> setCount\(s =\> s + 1\), 1000\);  
⋮ Console  
Running render effect 0 \:16  
Running effect 0 \:12  
Running render effect 1 \:16  
Running effect 1 \:12  
Running render effect 2 \:16  
Running effect 2 \:12  
The logs continue to appear.  
We mentioned that they are treated like regular effects after their initial execution, yet we  
observe that the render effect is executed before the regular effect for subsequent updates  
as well. This occurs because it is re-inserted into the signal’s subscribers before the regular  
effect is re-inserted. So, the execution order remains consistent.  
Let’s have another example to illustrate the relationship among a component, a render effect,  
a ref, and a regular effect\:  
import \{ render \} from 'solid-js/web';  
import \{ createComputed, createEffect, createRenderEffect \} from  
'solid-js';  
142 | createRenderEffectfunction App\(\) \{  
let divRef\: HTMLDivElement;  
createEffect\(\(\) =\> \{  
console.log\(\`Running createEffect callback\`\);  
console.log\(divRef\);  
\}\);  
createRenderEffect\(\(\) =\> \{  
console.log\(\`Running createRenderEffect callback\`\);  
console.log\(divRef\);  
\}\);  
createComputed\(\(\) =\> \{  
console.log\(\`Running createComputed callback\`\);  
console.log\(divRef\);  
\}\);  
return \<div ref=\{\(el\) =\> \(divRef = el\)\}\>App\</div\>;  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
The application above produces the following output\:  
⋮ Console  
Running createRenderEffect callback \:13  
undefined \:14  
Running createComputed callback \:18  
undefined \:19  
Running createEffect callback \:8  
\<div\>App\</div\> \:9  
Second effect is running \:20  
\<div\>App\</div\> \:21  
As you see, divRef is undefined within the render effect because the underlying DOM  
element is not assigned to the variable yet. However, it points to the DOM element within the  
effect because the effect’s callback is executed after the element is appended to the  
document.  
createRenderEffect | 143 createEffect  
The createEffect function is the most common way to run side-effects. Effects are  
scheduled to run after the current rendering phase, which means they are executed after  
elements are inserted into the document. We covered createEffect extensively in Chapter  
06, so we’ll keep it brief here.  
# createMemo  
In Solid, memos serve two purposes\: They either trigger re-renders, or create a cache layer  
to isolate reactive properties, thus preventing unnecessary re-renders. Although memos can  
be used to run side effects, it’s best to keep them pure.  
For more information, please refer to Module 5\: Memos.  
# createDeferred  
The createDeferred function creates a deferred effect that is run when the scheduler  
becomes idle or when the specified time has elapsed.  
import \{ createDeferred, createEffect \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const App = \(\) =\> \{  
createDeferred\(\(\) =\> \{  
console.log\(\`Running deferred\`\);  
\}\);  
createEffect\(\(\) =\> \{  
console.log\(\`Running effect\`\);  
\}\);  
return \<div\>App\</div\>;  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
⋮ Console  
Running defferred \:7  
Running effect \:11  
144 | createDeferredcreateDeferred neither calls the requestIdleCallback function internally nor uses the  
browser’s event loop, but queues a task for Solid’s own scheduler.  
You can use a timeout value to force execution in a given duration in milliseconds\:  
createDeferred\(\(\) =\> \{  
console.log\(\`createDeferred\`\);  
\}, \{ timeoutMs\: 1000 \}\);  
This will make the scheduler put away its pending tasks and execute the effect when the  
specified time elapses.  
# createReaction  
The createReaction function allows us to separate tracking from re-execution.  
The main idea with reactions is that their callback is executed only in response to signal  
updates. Therefore, there is no initial execution, and there are no automatic subscriptions.  
We must manually subscribe a reaction to a signal by calling the function that is returned  
from createReaction.  
const \[value, setValue\] = createSignal\(0\);  
const track = createReaction\(\(\) =\> \{  
console.log\('Running a reaction...'\);  
\}\);  
track\(value\);  
setValue\(1\); // Reaction will be called.  
setValue\(2\); // Noop as reaction is removed from the subscribers.  
The createReaction creates an internal computation which will be pushed to a signal's  
subscribers queue via the function it returns. In our example, we call this function track.  
As you may recall, Solid’s dependency tracking is automatic, and there exists a dynamic  
dependency between signals and computations. Signals drain their subscribers’ queue  
whenever they update so that they can start collecting new subscribers for their next  
update.  
But with createReaction, we bypass automatic dependency tracking. This means we need  
to subscribe to the signal anew after each execution by calling the track function again.  
We can track different signals as needed; there’s no requirement to stick to a single one.  
createReaction | 145 We can subscribe to any number of signals by calling them inside the callback function\:  
const \[a, setA\] = createSignal\(0\);  
const \[b, setB\] = createSignal\(0\);  
const track = createReaction\(\(\) =\> \{  
console.log\('Running Reaction'\);  
\}\);  
track\(\(\) =\> \{  
a\(\);  
b\(\);  
\}\);  
You can use onMount and onCleanup functions with reactions as well. But, please keep in  
mind that the onCleanup callbacks will be called before the computation is re-executed, to  
dispose of any disposable registered during the previous execution.  
Let’s look at an example to see this concept in action.  
import \{  
createReaction,  
createRoot,  
createSignal,  
onCleanup,  
onMount  
\} from 'solid-js';  
createRoot\(\(\) =\> \{  
const \[a, setA\] = createSignal\(0\);  
const \[b, setB\] = createSignal\(0\);  
const track = createReaction\(\(\) =\> \{  
console.log\('Running Reaction'\);  
onMount\(\(\) =\> console.log\(\`Mounting\`\)\);  
onCleanup\(\(\) =\> console.log\(\`Cleaning up\`\)\);  
track\(\(\) =\> a\(\)\);  
\}\);  
track\(\(\) =\> \{  
a\(\);  
b\(\);  
\}\);  
setInterval\(\(\) =\> setA\(p =\> p + 1\), 500\);  
146 | createReactionsetInterval\(\(\) =\> setB\(p =\> p + 1\), 1000\);  
\}\);  
createReaction | 147 **CHAPTER 15**  
# Handling Errors  
An error can be defined as a problem that disrupts the execution of an application. Errors  
may be recoverable or unrecoverable.  
An unrecoverable error, such as a broken database connection, puts the application in an  
undefined state, preventing it from functioning as expected from that point onward.  
Conversely, a recoverable error can be handled gracefully, allowing the application to  
continue functioning while the error is contained or worked around. For example, in the case  
of a validation error, we can inform the user and request the correct information.  
JavaScript doesn’t have formal definitions for recoverable and unrecoverable errors, as some  
other languages do, nor does it distinguish between how different errors are handled.  
Solid provides two basic ways to handle errors\: ErrorBoundary and the catchError  
function. ErrorBoundary is a component that relies on the catchError function internally.  
# ErrorBoundary  
The ErrorBoundary component catches errors that occur in any of its child components  
and their downstream components. It takes a fallback prop, which can be used to inform  
the user about the error and reload the problematic component.  
The fallback prop can be either a JSX element or a callback function that returns a JSX  
element, offering flexibility in customizing the user interface.  
To demonstrate this, we need an error, so we will throw one inside the Broken component\:  
const Broken = \(\) =\> \{  
149throw new Error\('Some Error'\);  
return \(  
\<div\>Child Component\</div\>  
\)  
\}  
const App = \(\) =\> \{  
return \(  
\<div\>  
\<h1\>Some Content\</h1\>  
\<Broken /\>  
\</div\>  
\</ErrorBoundary\>  
\<ErrorBoundary fallback=\{\<div\>Error Occurred!\</div\>\}\>  
\);  
\}  
The callback function receives the error and a reset function. Invoking the reset function will  
re-render the enclosed children\:  
const App = \(\) =\> \{  
const handler = \(err\: Error, reset\: \(\) =\> void\) =\> \{  
console.log\(err\);  
return \(  
\<div\>Error Occurred! \<button onClick=\{reset\}\>Reset\</button\>\</div\>  
\);  
\}  
return \(  
\<ErrorBoundary fallback=\{handler\}\>  
\<div\>  
\<h1\>Some Title\</h1\>  
\<Child /\>  
\</div\>  
\</ErrorBoundary\>  
\);  
\}  
We can have a single, application-wide ErrorBoundary or we can have multiples of them  
that are spread throughout the component tree.  
150 | Chapter 15. Handling Errors We can re-throw errors within a handler function, allowing them to be managed by another  
error boundary component higher in the component hierarchy.  
ErrorBoundary relies on catchError function internally for catching errors.  
# catchError  
The catchError function provides a lower-level control in case the ErrorBoundary  
component is not enough.  
catchError accepts a try function that runs the given function within a try/catch block  
and a callback function that will be called when an error occurs.  
function catchError\<T\>\(tryFn\: \(\) =\> T, onError\: \(err\: any\) =\> void\)\: T;  
Here is how catchError is implemented by Solid\:  
export function catchError\<T\>\(  
fn\: \(\) =\> T,  
handler\: \(err\: Error\) =\> void  
\) \{  
// Snipped for brevity  
try \{  
return fn\(\);  
\} catch \(err\) \{  
handleError\(err\);  
\} finally \{  
Owner = Owner.owner;  
\}  
\}  
The ErrorBoundary component typically covers most use cases, but sometimes you may  
want more control over handling errors.  
Let’s implement a component that uses the catchError function\:  
const Parent\: Component\<\{ children\: JSXElement \}\> = \(props\) =\> \{  
const NO\_ERR = Symbol\('NO\_ERR'\);  
const \[error, setError\] = createSignal\<any\>\(NO\_ERR\);  
const reset = \(\) =\> setError\(NO\_ERR\);  
return createMemo\(\(\) =\> \{  
if \(error\(\) !== NO\_ERR\) \{  
catchError | 151return \(  
\<div\>  
\</div\>  
Error Occurred \<button onClick=\{reset\}\>Reset\</button\>  
\);  
\}  
return catchError\(  
\(\) =\> props.children,  
\(err\) =\> setError\(err\),  
\);  
\}\) as unknown as JSXElement;  
\};  
We used a symbol to encode the component state that has no error because JavaScript  
permits throwing any value including undefined. So we cannot use undefined to represent  
the error-free state.  
The memo we return from the component allows us to show different values. It returns the  
child component via props.children when there is no error, and the div element with the  
reset button when there is an error.  
The reset function is a simple function that restores the initial state, triggering a re-render  
through the memoized value.  
Let’s see this in action with a simple component that throws an error\:  
const Broken\: Component\<\{\}\> = \(\) =\> \{  
throw new Error\('Some Error'\);  
return \<div\>Child Component\</div\>;  
\};  
const App = \(\) =\> \{  
return \(  
\<Parent\>  
\<Broken /\>  
\</Parent\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
Clicking the reset button re-renders the Broken component. Let’s introduce an external  
value to escape the broken state.  
152 | catchErrorlet isBroken = true;  
const Child\: Component\<\{\}\> = \(\) =\> \{  
if \(isBroken\) \{  
isBroken = false;  
throw new Error\('Some Error'\);  
\}  
return \<div\>Child Component\</div\>;  
\};  
# Handling Asynchronous Errors  
catchError functions can handle synchronous errors only and do not work with  
asynchronous errors due to how JavaScript executes asynchronous code.  
Asynchronous code is executed inside the event loop after the synchronous execution. We  
can take advantage of reactivity in order to handle asynchronous errors. We catch and store  
an async error into a signal and re-throw it through an effect so that it can be caught by an  
ErrorBoundary component. We will see this in action when working with asynchronous data  
later in Chapter 24\: Working with Asynchronous Data.  
Handling Asynchronous Errors | 153 **CHAPTER 16**  
# Working with Owners  
In Solid, effects can be nested, meaning a new inner effect will be created each time the  
outer one executes. If left unchecked, effects can accumulate resources, create more  
elements and event listeners, and wreak havoc on our application.  
To manage effects, Solid maintains a dependency tree through computation objects. When  
an effect is created inside another effect, the inner one will be owned by the outer one.  
When the outer one is disposed of, the inner one will be disposed of as well. By dispose, we  
mean removing the computations from the signals they are subscribed to, and executing  
their pending cleanup calls that are registered via onCleanup.  
NOTE  
If you remember, a computation is an internal object that allows us to run side eﬀects. Any  
function we use to run a side eﬀect creates a computation internally. This concept was  
discussed at length in Chapter 04, The Essence of Reactive Core.  
Solid uses owner and owned properties to establish ownership between computations\:  
const c\: Computation\<Init | Next, Next\> = \{  
owner\: Computation,  
owned\: null | Array\<Computation\>,  
\}  
A computation can have a single owner but it can own multiple computations.  
Since this ownership tree goes both ways, up and down, we can traverse both parent and  
child computations.  
The ownership tree operates independently of reactivity and does not rely on signals.  
155 Since top-level computations do not have an owner, Solid provides one for them via  
createRoot function. The sole purpose of the root scope is to provide an owner to the top-  
level computations. It does not track reactive values.  
You will get a warning if you run a computation without an owner\:  
import \{ createEffect \} from 'solid-js';  
createEffect\(\(\) =\> \{  
console.log\('Running some expensive computation..'\);  
\}\);  
⋮ Console  
⚠computations created outside a createRoot or render will never be  
disposed \:3  
Running some expensive computation.. \:4  
But how does Solid know if a computation has no owner?  
The answer is simple, it pushes the currently executing computation into an external  
variable before executing it, and restores the variable’s previous value after it finishes  
executing. The Solid runtime checks whether there is already a computation stored in this  
variable. If there is, it means it is the parent computation.  
The parent-child relationship is established when executing computations.  
The explanation we had so far should clarify what createRoot function does\: It creates a  
computation and assigns it to the variable that keeps the currently executing computation.  
function createRoot\(\) \{  
currentComputation = \{  
owner\: null;  
owned\: \[\];  
\};  
\}  
All top-level computations will be pushed to the owned property of this root computation.  
A root computation is not disposed of automatically. Instead a callback is provided to the  
function we pass to createRoot, which disposes all the owned computations upon being  
called\:  
function createRoot\(fn\: \(dispose\: \(\) =\> void\) =\> any\) \{  
156 | Chapter 16. Working with OwnerscurrentComputation = \{  
owner\: null;  
owned\: \[\];  
disposables\: \[\],  
function dispose\(\) \{  
// Invoke currentComputation.disposables callbacks  
\};  
\}  
fn\(dispose\);  
\}  
createRoot function can be used for creating branches that can be disposed without  
disposing their parents.  
Let’s implement a closable window without relying on signals\:  
import \{ Component, createRoot, onCleanup, onMount \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const Modal\: Component\<\{ close\: \(\) =\> void \}\> = \(props\) =\> \{  
let div\: HTMLDivElement;  
onMount\(\(\) =\> \{  
console.log\('Mounting'\);  
\}\);  
onCleanup\(\(\) =\> \{  
console.log\('Cleaning up'\);  
div.remove\(\);  
\}\);  
const divStyle = \`position\: relative; border\: 1px solid red\`;  
const buttonStyle = \`position\: absolute; top\: 0; right\: 0;\`  
return \(  
\<div style=\{divStyle\} ref=\{el =\> div = el\}\>  
\<h2\>A Closable Window\</h2\>  
\<div\>Use the close button to remove this window.\</div\>  
\<button style=\{buttonStyle\} onClick=\{props.close\}\>close\</button\>  
\</div\>  
\)  
\};  
const App = \(\) =\> \{  
Chapter 16. Working with Owners | 157let disposer\: \(\) =\> void;  
// Do not pass \`disposer\` directly.  
onCleanup\(\(\) =\> disposer\(\)\);  
return \(  
\<div\>  
\}\)\}  
\</div\>  
\{createRoot\(\(dispose\) =\> \{  
disposer = dispose;  
return \<Modal close=\{dispose\} /\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
We call the disposer function via onCleanup in the App component to make sure that Modal  
is disposed as well when the App component is disposed.  
An important detail here is that we need to pass a function to the onCleanup call. Passing the  
variable disposer directly to onCleanup would not work because it is still undefined at that  
point.  
Disposing the root computation has no effect on the rendered nodes. That is why we need to  
explicitly remove the div element from the document using its reference and we do it when  
Modal is disposed\:  
onCleanup\(\(\) =\> \{  
div.remove\(\);  
\}\);  
The render function relies on createRoot internally. It renders the provided component  
and returns a dispose function. This function disposes the root computation and removes  
children from the element the component is mounted to\:  
export function render\(code, element, init, options = \{\}\) \{  
let disposer;  
root\(dispose =\> \{  
disposer = dispose;  
element === document  
? code\(\)  
\: insert\(element, code\(\), element.firstChild ? null \: undefined,  
init\);  
158 | Chapter 16. Working with Owners\}, options.owner\);  
return \(\) =\> \{  
disposer\(\);  
element.textContent =  
"";  
\};  
\}  
Some built-in components like Suspense also use createRoot. Suspense renders a separate  
branch, which becomes visible when its underlying resources resolve.  
Solid comes with a few utilities for working with computations\:  
getOwner returns the currently executing computation.  
runWithOwner executes the given function with the provided owner.  
# Accessing Currently  
# xecuting Computation  
getOwner returns the currently executing computation if it is called in a reactive scope\:  
import \{ createEffect, getOwner \} from 'solid-js';  
createEffect\(\(\) =\> \{  
const computation = getOwner\(\);  
console.log\('Running a computation..', computation\);  
\}\);  
Although the function is named getOwner, it returns the currently executing computation,  
not its owner.  
# Reactivity in Asynchronous Context  
runWithOwner executes a given function with the provided owner. The purpose of  
runWithOwner is to provide a proper context to asynchronously executed effects.  
Asynchronous functions do not have proper reactive context when they are executed  
because they run in the event loop, after synchronous execution completes. By the time  
asynchronous code starts executing, the variable that stores the currently running  
computation will be restored to its default value, which is null.  
If you run the following code, you will have “computations created outside a createRoot or  
render will never be disposed” warning\:  
import \{ createEffect, createSignal, getOwner, runWithOwner \} from  
'solid-js';  
# E  
Reactivity in Asynchronous Context | 159import \{ render \} from 'solid-js/web';  
const App = \(\) =\> \{  
const \[count, setCount\] = createSignal\(0\);  
setTimeout\(\(\) =\> \{  
createEffect\(\(\) =\> \{  
console.log\(count\(\)\);  
\}\);  
\}, 1000\);  
const handleClick = \(\) =\> setCount\(count\(\) + 1\);  
return \(  
\<div\>  
\</div\>  
Count\: \{count\(\)\} \<button onClick=\{handleClick\}\>Inc\</button\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
We can solve this problem by providing the proper context via runWithOwner\:  
let owner = getOwner\(\)!;  
setTimeout\(\(\) =\> \{  
runWithOwner\(owner!, \(\) =\> \{  
createEffect\(\(\) =\> \{  
console.log\(count\(\)\);  
\}\);  
\}\);  
\}, 1000\);  
Another common problem with asynchronous code is that effects cannot subscribe to  
signals.  
Take a look at the following example. The effect does not respond to state updates even  
though it reads the signal\:  
import \{ createEffect, createSignal \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const App = \(\) =\> \{  
const \[count, setCount\] = createSignal\(0\);  
createEffect\(\(\) =\> \{  
160 | Reactivity in Asynchronous ContextsetTimeout\(\(\) =\> console.log\(count\(\)\), 1000\);  
\}\);  
const handleClick = \(\) =\> setCount\(count\(\) + 1\);  
return \(  
\<div\>  
\</div\>  
Count\: \{count\(\)\} \<button onClick=\{handleClick\}\>Inc\</button\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
To understand the problem, we need to understand the Solid’s reactive execution model.  
Solid runs synchronously. The dependency between an effect and a signal is dynamic\: it is  
established automatically when the effect reads the signal and is removed when the signal  
invokes the effect. This dependency is re-established if the effect reads the signal during re-  
execution. Subscribers are cleared and re-added during every update cycle. If an effect  
cannot read a signal—whether from the start or after being invoked a certain number of  
times—it will not subscribe to that signal.  
Now, pay special attention to this line\:  
setTimeout\(\(\) =\> console.log\(count\(\) + 1\), 1000\);  
The setTimeout function schedules its callback to be executed within the event loop. When  
the callback is executed, Solid will have finished its execution long ago. So, the effect does  
not read the signal in a timely manner, hence will not be added to the subscribers. By the  
time it reads the signal, the update cycle will have been completed. It is like a tragic love  
story\: our effect fails to read the signal on time, once it does, the computation is already  
gone.  
The most straightforward solution to this problem is reading the signal in a timely manner.  
Here, the effect reads the accessor in synchronous code\:  
createEffect\(\(\) =\> \{  
const value = count\(\);  
setTimeout\(\(\) =\> console.log\(value\), 1000\);  
\}\);  
runWithOwner cannot help us with this situation because even if we provide the proper  
owner, subscription will remain in the past. So, the following code does not work\:  
Reactivity in Asynchronous Context | 161createEffect\(\(\) =\> \{  
const currentComputation = getOwner\(\);  
setTimeout\(\(\) =\> \{  
runWithOwner\(currentComputation, \(\) =\> \{  
console.log\(count\(\)\);  
\}\);  
\}, 1000\);  
\}\);  
162 | Reactivity in Asynchronous Context **CHAPTER 17**  
# Styling Elements  
In Solid, there are multiple ways to style a JSX element\:  
Using inline styles through the style attribute.  
Applying style definitions through the element’s name, class, id, or data attributes.  
Applying CSS classes based on a condition using the classList attribute.  
Using the imperative browser API.  
We will not discuss CSS modules or CSS-in-JS libraries because they are abstractions built  
on top of these methods and are not specific to Solid.  
# Using Inline Styles  
JSX elements accept a style attribute that controls the element’s styling.  
The value could be a string with proper CSS styling declarations to be applied to the element\:  
\<div style="color\: red; font-weight\: bold" /\>  
Or it could be an object with kebab-case key-value pairs containing the CSS properties\:  
\<div style=\{\{ color\: 'red', 'font-weight'\: 'bold' \}\} /\>  
If the value is a string, it will be used as-is, and the browser will parse the style definition  
when parsing the HTML string.  
const \_tmpl\$ = template\(\`\<button style="color\: red; font-weight\:  
bold"\>Button\</button\>\`, 2\);  
163 If the value is an object, each property will be translated to a setProperty call on the  
element’s style property on the client side\:  
\_el\$.style.setProperty\("color", "red"\);  
\_el\$.style.setProperty\("font-weight", "bold"\);  
And on the server side, these properties are concatenated into the output string that is  
returned from the server.  
The setProperty method requires lowercase, dash-separated property names, such as  
font-weight, as specified in the CSS standard. The Solid runtime doesn’t process these  
properties but uses them as is.  
The setProperty method is performant enough and offers added benefits like being able to  
set CSS variables\:  
\<div style=\{\{ '--primary-button-color'\: 'red' \}\} /\>  
# Applying Style Definitions  
We can style JSX elements the way we style HTML elements, using the element’s name or its  
class, id, and data attributes.  
To keep the discussion short and to the point, we will use class attributes only for the  
examples since they are the most common way to style an element and they support CSS  
modules.  
\<li class="item is-active has-border"\>\</li\>  
The class value must be a string. If you have an array of class names, you can use the join  
method to produce a string value\:  
\<li class=\{\['item', 'is-active', 'has-border'\].join\(' '\)\}\>\</li\>  
We can use signals to conditionally apply classes with the ternary operator\:  
const \[isActive, setIsActive\] = createSignal\(true\);  
\<li class=\{ isActive\(\) ? 'item is-active' \: 'item' \}\>\</li\>  
NOTE  
class is not a reserved keyword in Solid.  
164 | Applying Style Definitions **Applying Classes Conditionally**  
For conditional styling, Solid offers the classList property.  
The classList attribute takes a JavaScript object with key-value pairs. The key will be  
added to the element’s classList when the value is true.  
\<li classList=\{\{ 'is-active'\: true, 'is-primary'\: false \}\}\>\</li\>  
We can use reactive values to dynamically toggle classes. Here's an example\:  
const \[count, setCount\] = createSignal\(0\);  
const \[isActive, setIsActive\] = createSignal\(true\);  
\<li classList=\{\{ 'is-active'\: isActive\(\), 'is-primary'\: count\(\) \> 1 \}\}\>  
\</li\>  
Solid uses the Element.classList.toggle method for adding and removing classes.  
Here is an example that uses both the class and classList attributes. We will use the  
style element to create a stylesheet in the component instead of using an external file.  
const App\: JSX.Element = \(\) =\> \{  
const \[active, setActive\] = createSignal\(\);  
const items = \[  
\{ id\: 1, title\: "T-Shirt", price\: 3.20, quantity\: 3 \},  
\{ id\: 2, title\: "Shoes", price\: 10.00, quantity\: 1 \},  
\{ id\: 3, title\: "Jeans", price\: 10.3, quantity\: 2 \},  
\];  
const handleClick = \(id, event\) =\> \{  
setActive\(id\);  
\};  
return \(  
\<div\>  
\<style\>  
\{\`  
.items \{  
margin\: 0;  
border\: 1px solid green;  
\}  
.item \{  
Applying Classes Conditionally  
| 165cursor\: pointer;  
\}  
.item\:hover \{  
color\: red;  
\}  
.is-active \{  
color\: red;  
\}  
\`\}  
\</style\>  
\<ul class="items"\>  
\{items.map\(item =\> \(  
\<li  
class='item'  
classList=\{\{ 'is-active'\: active\(\) === item.id \}\}  
onClick=\{\[handleClick, item.id\]\}  
\>  
\{item.title\} \{item.price\}  
\</li\>  
\)\)\}  
\</ul\>  
\</div\>  
\);  
\}  
Clicking on a list item sets its id as the active value, hence applying the is-active class to  
the list item.  
# Using the Imperative API  
This solution is not specific to Solid and can be used with any JavaScript library. We include  
it here for completeness.  
Applying a style imperatively requires a handle to the underlying element. You can use a ref  
to obtain one when the element is created, or you can use the query selectors to get an  
existing element.  
Here we use a ref to gain access to the div element\:  
export const App = \(\) =\> \{  
function applyStyle\(el\: HTMLDivElement\) \{  
166 | Using the Imperative APIel.style.setProperty\('color', 'red'\);  
\}  
return \(  
\);  
\<div ref=\{applyStyle\}\>Hello World!\</div\>  
\}  
Using a ref as a variable requires an effect because the element will not be immediately  
available within the component’s body; it will be created later during the rendering phase,  
then assigned to the provided variable.  
import \{ onMount \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
export const App = \(\) =\> \{  
let divRef\: HTMLDivElement;  
onMount\(\(\) =\> \{  
divRef.style.setProperty\('color', 'red'\);  
\}\);  
return \(  
\<div ref=\{divRef!\}\>App\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
As always, we can use the non-null assertion operator to suppress the type error, since the  
element is guaranteed to exist when the onMount callback is executed.  
There is a subtle but important difference between the two ref usages\:  
Function form refs are executed before the element is inserted into the document, making  
them unsuitable for style-related calculations that use getComputedStyle. Remember,  
elements should be connected to the document in order to perform style-related  
calculations on them.  
Variable form refs, on the other hand, assign the element to the specified variable, with the  
interaction taking place when the onMount callback runs.  
The following example might help clarify any questions you may have\:  
import \{ onMount \} from 'solid-js';  
Using the Imperative API | 167import \{ render \} from 'solid-js/web';  
export const App = \(\) =\> \{  
let refOne\: HTMLDivElement;  
function refTwo\(el\: HTMLDivElement\) \{  
const color = getComputedStyle\(el\).color;  
const isConnected = el.isConnected;  
console.log\(\{ color, isConnected \}\);  
\}  
onMount\(\(\) =\> \{  
const color = getComputedStyle\(refOne\).color;  
const isConnected = refOne.isConnected;  
console.log\(\{ color, isConnected \}\);  
\}\);  
return \(  
\<div\>  
\<style\>  
\{\` div \{ color\: red; \}\`\}  
\</style\>  
\<div ref=\{refOne!\}\>One\</div\>  
\<div ref=\{refTwo\}\>Two\</div\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
The color will be applied to both elements but will not be returned by the  
getComputedStyle function unless the element is inserted into the page.  
⋮ Console  
\{color\: '', isConnected\: false\} \:10  
\{color\: 'rgb\(255, 0, 0\)', isConnected\: true\} \:16  
In this final example, we'll demonstrate an alternative approach to accessing an element,  
which involves using a query selector, similar to the method used in vanilla JavaScript. This  
can be particularly useful on rare occasions when direct access to an element across  
component boundaries is required.  
export const App = \(\) =\> \{  
onMount\(\(\) =\> \{  
168 | Using the Imperative APIlet divRef = document.querySelector\('\#greeting'\);  
divRef!.style.setProperty\('color', 'red'\);  
\}\);  
return \(  
\);  
\<div id="greeting"\>Hello World\</div\>  
\}  
Here, we needed to use an onMount effect because the div element won’t be available  
immediately; it will be created later.  
While our example targets an element created by the component that owns the effect, this  
method can be used to style any element on the page. However, it’s recommended to use this  
approach sparingly and as a last resort, since it breaches component boundaries.  
Using the Imperative API | 169 **CHAPTER 18**  
# Reactive Utilities  
In this chapter, we will explore the utility functions that help us exercise greater control over  
reactivity in our applications. These functions enable us to manage reactive behavior more  
effectively, making it easier to build robust and efficient systems.  
# batch  
The batch function updates multiple signals at once, ensuring that the affected subscribers  
are executed only once. Stores and effects automatically wrap their code in batch.  
import \{ batch, createEffect, createSignal \} from "solid-js";  
const \[status, setStatus\] = createSignal\('pending'\);  
const \[data, setData\] = createSignal\(0\);  
createEffect\(\(\) =\> \{  
console.log\(data\(\)\); // Logs once after state update and outputs 3  
\}\);  
batch\(\(\) =\> \{  
setData\(1\);  
setData\(2\);  
setData\(3\);  
setStatus\('success'\);  
\}\);  
171 untrack  
The untrack function allows you to read a reactive value within a tracking scope without  
triggering subscriptions. It temporarily disables the subscription mechanism, invokes the  
accessor function, and returns the result.  
const \[count, setCount\] = createSignal\(0\);  
setInterval\(\(\) =\> setCount\(count\(\) + 1\), 500\);  
const App = \(\) =\> \{  
return \(  
\<div\>  
\<div\>Count\: \{count\(\)\}\</div\>  
\<div\>Untracked Count\: \{untrack\(count\)\}\</div\>  
\</div\>  
\);  
\}  
# on  
The on function makes dependencies of a reactive computation explicit.  
For the following example, the effect will re-run only when the value of a changes, ignoring  
b.  
import \{ createEffect, createSignal, on \} from "solid-js";  
const \[a, setA\] = createSignal\(0\);  
const \[b, setB\] = createSignal\(0\);  
setInterval\(\(\) =\> setA\(a\(\) + 1\), 1000\);  
setInterval\(\(\) =\> setB\(b\(\) + 1\), 500\);  
createEffect\(on\(a, \(\) =\> console.log\(a\(\), b\(\)\)\)\);  
Multiple dependencies can be specified using an array\:  
createEffect\(on\(\[a, b\], \(\) =\> console.log\(a\(\), b\(\)\)\)\);  
You can skip the initial execution by passing \{ defer\: true \} as the third argument. This  
will make the effect run only in response to signal updates\:  
createEffect\(on\(a, \(\) =\> console.log\(a\(\), b\(\)\), \{ defer\: true \}\)\);  
The callback function is an overloaded one. It takes input, prevInput and prevValue as  
172 | on parameters and returns a value. The return value of the callback function will be prevValue  
in the next iteration.  
fn\: \(input\: T, prevInput\: T, prevValue?\: U\) =\> U,  
# createRoot  
createRoot creates a non-tracking root computation that is not owned by another  
computation and not disposed of automatically. It is useful for rendering detached  
component trees which we are responsible for disposing of.  
Please refer to Chapter 16 for a detailed explanation of createRoot.  
# mergeProps  
The mergeProps function comes in handy when you pass props to children. It merges  
multiple reactive objects into one while preserving the reactivity of their properties.  
import \{ mergeProps \} from "solid-js";  
const \[user,setUser\] = createSignal\(\{  
name\: 'John Doe',  
age\: 44  
\}\);  
const \[profile, setProfile\] = createSignal\(\{  
role\: 'admin',  
email\: 'mail@example.com'  
\}\);  
const userProfile = mergeProps\(user, profile\);  
createEffect\(\(\) =\> \{  
console.log\(userProfile\);  
\}\);  
setUser\(\{ name\: 'Jenny Doe', age\: 30 \}\);  
You can use regular objects with mergeProps as well\:  
const userProfile = mergeProps\(\{ image\: 'example.png' \}, user,  
profile\);  
In case of multiple properties having the same name, the last one wins\:  
mergeProps | 173const props = mergeProps\(  
\{ name\: 'John Doe', age\: 20 \},  
\{ name\: 'Jenny Doe' \},  
\{ name\: 'Sally Doe' \}  
\);  
console.log\(\{ ...props \}\); // \{name\: 'Sally Doe', age\: 20\}  
# splitProps  
The splitProps function splits a reactive object into multiple reactive objects. It is useful  
for passing a subset of props down to child components.  
import \{ splitProps \} from "solid-js";  
import \{ createStore \} from 'solid-js/store';  
const \[userProfile, setUserProfile\] = createStore\(\{  
name\: 'John Doe',  
age\: 44,  
role\: 'admin',  
email\: 'mail@example.com'  
\}\);  
const \[user\] = splitProps\(userProfile, \['name', 'age'\]\);  
const \[profile\] = splitProps\(userProfile, \['role', 'email'\]\);  
\<User user=\{user\} /\>  
\<Profile profile=\{profile\} /\>  
You can create multiple objects by passing multiple arrays. The last item in the returned  
array will have the leftover properties from the original object.  
const \[user, profile, leftovers\] = splitProps\(  
userProfile,  
\['name', 'age'\],  
\['role', 'email'\]  
\);  
splitProps performs a functionality that is akin to object destructuring, since we cannot  
destructure a reactive object while preserving its reactivity.  
mapArray **and** indexArray  
We have a detailed discussion on the mapArray and indexArray functions in Chapter 20\:  
Working with Lists.  
174 | indexArray observable  
The observable function takes a signal and produces an observable, an object with the  
subscribe method. The observable will be notified whenever the signal updates. It is used to  
interoperate with observable libraries.  
Here is a simple example demonstrating this concept\:  
import \{ createSignal, observable \} from 'solid-js';  
const \[count, setCount\] = createSignal\(0\);  
const obj = observable\(count\);  
obj.subscribe\(\(val\) =\> console.log\(val\)\);  
setInterval\(\(\) =\> setCount\(c =\> c + 1\), 500\);  
Here are the logs for the first five seconds\:  
⋮ Console  
0 \:6  
1 \:6  
2 \:6  
3 \:6  
4 \:6  
# from  
The from function is used to subscribe to an observable or a data source to extract values  
from it into a signal. It is a way to interface with an external reactive library like RxJS but this  
time Solid is on the receiving end of the communication.  
Basically, from creates an internal signal and passes the setter function to the callback  
function, so that it can be used by the external data source to set the value of this internal  
signal.  
The internal signal skips equality checks, updating its value even if the same value is passed  
to the setter function, which is equivalent to\:  
const \[value, setValue\] = createSignal\(undefined, \{  
equals\: false,  
from | 175\}\);  
The callback we passed to from should return a dispose function which will be triggered  
when the owner scope is disposed of.  
Let’s implement a simple observable and emit values so that they will be picked up by Solid\:  
import \{ createEffect, from \} from "solid-js";  
type Subscriber = \(val\: any\) =\> any;  
class Observable \{  
subscribers\: Array\<Subscriber\> = \[\];  
subscribe\(cb\: Subscriber\) \{  
this.subscribers.push\(cb\);  
return \{  
unsubscribe\: \(\) =\> \{  
this.unsubscribe\(cb\);  
\}  
\};  
unsubscribe\(cb\: Subscriber\) \{  
this.subscribers = this.subscribers.filter\(item =\> item !== cb\);  
\}  
\}  
\}  
\(val\: any\) \{  
this.subscribers.forEach\(subscriber =\> subscriber\(val\)\);  
\}  
Our observable has three methods\:  
subscribe adds a subscriber to subscribers, allowing it to receive the events emitted  
by the observable.  
unsubscribe removes a subscriber from the subscribers.  
next emits an event for each subscriber to receive.  
Now, we will create an observable and subscribe to it using the from function\:  
let o = new Observable\(\);  
const data = from\(o\);  
176 | from We will use an effect to log the value that the data signal receives\:  
createEffect\(\(\) =\> \{  
console.log\(data\(\)\);  
\}\);  
Now, whenever a new value is emitted, the data signal will be updated, triggering the effect.  
It is time to emit some values.  
let x = 0;  
setInterval\(\(\) =\> o.next\(x++\), 1000\);  
We use the setInterval function to continuously emit values through the observable.  
Here is the complete code we wrote so far\:  
import \{ createEffect, createRoot, from \} from "solid-js";  
type Subscriber = \(val\: any\) =\> any;  
class Observable \{  
subscribers\: Array\<Subscriber\> = \[\];  
subscribe\(cb\: Subscriber\) \{  
this.subscribers.push\(cb\);  
return \{  
unsubscribe\: \(\) =\> \{  
this.unsubscribe\(cb\);  
\}  
\};  
unsubscribe\(cb\: Subscriber\) \{  
this.subscribers = this.subscribers.filter\(item =\> item !== cb\);  
next\(val\: any\) \{  
this.subscribers.forEach\(subscriber =\> subscriber\(val\)\);  
\}  
\}  
\}  
\}  
createRoot\(\(\) =\> \{  
let o = new Observable\(\);  
from | 177const data = from\(o\);  
createEffect\(\(\) =\> \{  
console.log\(data\(\)\);  
\}\);  
let x = 0;  
setInterval\(\(\) =\> o.next\(x++\), 1000\);  
\}\);  
You should see values are logged to the console continuously\:  
⋮ Console  
undefined \:33  
0 \:33  
1 \:33  
2 \:33  
The first value is undefined because the internal signal is initialized with an undefined  
value.  
Although we could use stronger types in the Observable class, we used any to simplify the  
example.  
With from, there is no explicit way to unsubscribe from the source. However, the from  
function calls the onCleanup function internally which will be triggered when the owner  
scope is disposed of.  
Let’s place a log within the unsubscribe method to see if the unsubscription mechanism is  
triggered\:  
unsubscribe\(cb\: Subscriber\) \{  
console.log\(\`Unsubscribing \$\{cb\}\`\);  
this.subscribers = this.subscribers.filter\(item =\> item !== cb\);  
\}  
Then, dispose the root scope after 3000 miliseconds\:  
createRoot\(\(dispose\) =\> \{  
let o = new Observable\(\);  
const data = from\(o\);  
178 | fromcreateEffect\(\(\) =\> \{  
console.log\(data\(\)\);  
\}\);  
let x = 0;  
setInterval\(\(\) =\> o.next\(x++\), 1000\);  
// Dispose of the root scope.  
setTimeout\(dispose, 3000\);  
\}\);  
We do not see any logs after three seconds.  
So far we covered how to use from with an external observable. It is time to show how it can  
be used with a data source. The only difference is that the callback function should return a  
callback that unsubscribes from the data source instead of an object with the unsubscribe  
method\:  
const data = from\(\(setValue\) =\> \{  
// Update the signal’s value.  
return \(\) =\> \{  
// Unsubscribe from the data source.  
\};  
\}\);  
The following example should clarify any confusion\:  
let x = 0;  
const data = from\(\(setValue\) =\> \{  
const t = setInterval\(\(\) =\> setValue\(x++\), 500\);  
// Return a disposer function to clear the timer.  
return \(\) =\> clearInterval\(t\);  
\}\);  
createEffect\(\(\) =\> \{  
console.log\(data\(\)\);  
\}\);  
The internal signal will be updated whenever we set a value. The timer will be cleared when  
the owner scope is disposed.  
startTransition **and** useTransition  
useTransition | 179 Both startTransition and useTransition can be understood only in the context of a  
Suspense component. Both functions can delay the state transition until the underlying  
resources resolve. The idea is that we keep showing the stale data rather than falling back to  
the pending state.  
We have a detailed discussion in Chapter 27, Achieving Better Consistency With Transitions.  
180 | useTransition **CHAPTER 19**  
# A Better Conditional Rendering  
Solid components are compiled into native DOM nodes and they are executed once, when  
the application loads. Unlike virtual DOM-based libraries, there is no top-down rendering of  
the entire DOM tree when a state update occurs in a component. This has several  
implications that are worth considering.  
Updating a component’s state does not modify its output since there is no component-level  
re-rendering.  
Let’s find out the reason for this behavior using the following application\:  
import \{ createSignal \} from "solid-js";  
import \{ render \} from "solid-js/web";  
const App = \(\) =\> \{  
const \[state, setState\] = createSignal\(true\);  
const toggle = \(\) =\> setState\(!state\(\)\);  
if \(state\(\)\) \{  
return \(  
\<div\>State is TRUE! \<button onClick=\{toggle\}\>Toggle\</button\>  
\</div\>  
\);  
\}  
return \(  
\<div\>State is FALSE! \<button onClick=\{toggle\}\>Toggle\</button\>\</div\>  
\);  
\};  
181render\(\(\) =\> \<App /\>, document.body\);  
If we look at the compiled output, we clearly see why the state update has no effect on the  
component\:  
import \{ template as \_\$template \} from "solid-js/web";  
import \{ delegateEvents as \_\$delegateEvents \} from "solid-js/web";  
import \{ createSignal \} from "solid-js";  
import \{ render \} from "solid-js/web";  
const \_tmpl\$ = \_\$template\(\`\<div\>State is TRUE! \<button\>Toggle\`\),  
\_tmpl\$2 = \_\$template\(\`\<div\>State is FALSE! \<button\>Toggle\`\);  
const App = \(\) =\> \{  
const \[state, setState\] = createSignal\(true\);  
const toggle = \(\) =\> setState\(!state\(\)\);  
if \(state\(\)\) \{  
return \(\(\) =\> \{  
const \_el\$ = \_tmpl\$\(\),  
\_el\$2 = \_el\$.firstChild,  
\_el\$3 = \_el\$2.nextSibling;  
\_el\$3.\$\$click = toggle;  
return \_el\$;  
\}\)\(\);  
\}  
return \(\(\) =\> \{  
const \_el\$4 = \_tmpl\$2\(\),  
\_el\$5 = \_el\$4.firstChild,  
\_el\$6 = \_el\$5.nextSibling;  
\_el\$6.\$\$click = toggle;  
return \_el\$4;  
\}\)\(\);  
\};  
render\(\(\) =\> \_\$createComponent\(App, \{\}\), document.body\);  
\_\$delegateEvents\(\["click"\]\);  
The UI layer of the component is created within an immediately executed function and  
returned to the caller function. The elements are created by the template calls within these  
closures and they are inserted into the document by the render function.  
182 | Chapter 19. A Better Conditional Rendering The render function uses the insert calls to insert the DOM nodes. The insert function  
checks if the value is an accessor, if so, wraps it in a render effect. These render effects are  
re-executed when the signal updates.  
export function insert\(parent, accessor, marker, initial\) \{  
if \(marker !== undefined && !initial\) initial = \[\];  
if \(typeof accessor !== "function"\) return insertExpression\(parent,  
accessor, initial, marker\);  
createRenderEffect\(current =\> insertExpression\(parent, accessor\(\),  
current, marker\), initial\);  
\}  
In Solid, UI elements are re-rendered when their reactive context re-executes. Solid runtime  
creates an implicit reactive context around a reactive value, if it is placed inside a JSX  
element.  
A reactive context refers to the scope of a computation that is created one of these  
functions\: createRenderEffect, createEffect, createMemo and createComputed.  
If we wrap the returned value in a signal, we can force the elements to re-render when their  
signals update\:  
import \{ createMemo, createSignal \} from "solid-js";  
import \{ render \} from "solid-js/web";  
const App = \(\) =\> \{  
const \[state, setState\] = createSignal\(true\);  
const toggle = \(\) =\> setState\(!state\(\)\);  
return createMemo\(\(\) =\> \{  
if \(state\(\)\) \{  
return \(  
\<div\>State is TRUE! \<button onClick=\{toggle\}\>Toggle\</button\>  
\</div\>  
\);  
\}  
return \(  
\</div\>  
\);  
\}\)  
\<div\>State is FALSE! \<button onClick=\{toggle\}\>Toggle\</button\>  
\};  
Chapter 19. A Better Conditional Rendering | 183render\(\(\) =\> \<App /\>, document.body\);  
Wrapping UI elements in a signal is one way to achieve reactivity with UI elements. The  
other one is using expressions. Solid wraps any expression that is placed in a JSX element in  
a reactive context, if it depends on a reactive value.  
Let’s modify the previous example to illustrate this concept\:  
import \{ createSignal \} from "solid-js";  
import \{ render \} from "solid-js/web";  
const App = \(\) =\> \{  
const \[state, setState\] = createSignal\(true\);  
const toggle = \(\) =\> setState\(!state\(\)\);  
return \(  
\<div\>  
\</div\>\)\}  
\</div\>  
\{state\(\) ? \(\<div\>State is TRUE!\</div\>\) \: \(\<div\>State is FALSE!  
\<button onClick=\{toggle\}\>Toggle\</button\>  
\)  
\};  
When the signal updates, the Solid runtime removes the existing child nodes that are  
returned from the expression and replaces them with new ones.  
However, being limited to expressions for conditional rendering can be challenging, often  
leading to cluttered and visually unbalanced code. More importantly, this approach prevents  
the effective use of caching.  
# Show  
Solid offers the Show component for better conditional rendering. It accepts a condition  
value through the when prop, and renders its children when the condition is true.  
An optional fallback prop can be used to display a fallback component if the when value  
evaluates to false.  
const App = \(\) =\> \{  
const \[value, setValue\] = createSignal\(true\);  
return \(  
\<div\>  
184 | Show\<Show when=\{value\(\)\} fallback=\{\<div\>Fallback Element\</div\>\}\>  
\<div\>Child Element\</div\>  
\</Show\>  
\<button onClick=\{\(\) =\> setValue\(\(prev\) =\> !prev\)\}\>Toggle  
Show\</button\>  
\</div\>  
\);  
\};  
The Show component packs additional features.  
The when prop can be used as a guard when rendering a nullable object\:  
type User = \{ name\: string; age\: number \}  
const user\: undefined | User;  
\<Show when=\{user\}\>  
\<div\>\{user.name\}\</div\>  
\</Show\>  
TypeScript cannot track types through a Show component and may throw a type error, even  
when the value is guaranteed to be non-null within its children. In these cases, it is safe to  
use non-null assertions \(!\).  
\<Show when=\{user\}\>  
\<div\>\{user!.name\}\</div\>  
\</Show\>  
# Keyed Rendering  
The Show component supports keyed rendering via keyed prop\:  
Keyed rendering, popularized by React, is a way to ensure that elements in a list are tracked  
by unique keys. These keys act like unique IDs that help map elements in the DOM to their  
corresponding data items. This approach ensures that the same element is kept and updated  
rather than being replaced whenever the list changes. This way, our app maintains state and  
avoids unnecessary re-renders when the order of elements changes or when new items are  
added or removed.  
In SolidJS, rendering works a bit differently. Solid uses actual DOM nodes for rendering.  
Unlike React, it does not rely on keys. Instead, Solid treats the item itself as the cache key. If  
the item reference remains unchanged, Solid reuses the existing node; if the reference  
changes, it discards the old node and creates a new one.  
Show  
| 185 Let's have an example to clarify this concept\:  
import \{ Show, createSignal \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
type User = \{ name\: string; age\: number \}  
export const App = \(\) =\> \{  
const \[users, setUsers\] = createSignal\<Array\<User\>\>\(\[  
\{ name\: 'John Doe', age\: 20 \},  
\{ name\: 'Jenny Doe', age\: 21 \},  
\]\);  
const mutateItem = \(\) =\> \{  
setUsers\(val =\> val.map\(\(el, i\) =\> \{  
if \(i === 0\) el.age += 1;  
return el;  
\}\)\);  
\};  
const replaceItem = \(\) =\> \{  
setUsers\(val =\> val.map\(\(el, i\) =\> \{  
if \(i === 1\) return \{ ...el, age\: el.age + 1 \};  
return el;  
\}\)\);  
\};  
return \(  
\<div\>  
\<div\>  
\<button onClick=\{mutateItem\}\>Mutate Item One\</button\>  
\{\` \`\}  
\<button onClick=\{replaceItem\}\>Replace Item Two\</button\>  
\</div\>  
\<Show when=\{users\(\)\[0\]\} keyed\>  
\<div\>\{users\(\)\[0\].name\} \{users\(\)\[0\].age\} \{Date.now\(\)\}\</div\>  
\</Show\>  
\<Show when=\{users\(\)\[1\]\} keyed\>  
\<div\>\{users\(\)\[1\].name\} \{users\(\)\[1\].age\} \{Date.now\(\)\}\</div\>  
\</Show\>  
\</div\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
186 | Show We use an array to manage the state so that we can trigger updates after mutating or  
replacing objects used with our Show components.  
In our first handler, we update the array while keeping the object references intact. This  
ensures that the previous DOM node is reused. If you check the date value for the first Show  
component, the age is incremented, but the date value does not change, proving that the  
DOM element is reused.  
In the second handler, we replace the user object for the second item in the list. This  
invalidates the cached value, forcing Solid to create a new DOM node for the second Show  
component. This is why you will see a different date whenever you click the second button,  
as a new div element is created.  
# Render Props  
The Show component allows the use of render props through its keyed attribute.  
A render prop is a function passed to a component, controlling the component’s output. The  
main idea is that the consuming code decides what to render.  
\<Show when=\{user\} keyed\>  
\{\(user\) =\> \<div\>\{user.name\}\</div\>\}  
\</Show\>  
In this example, the children prop serves as the render prop. The keyed attribute is  
required, without it, Solid treats props.children as a regular value and does not pass the  
when value to the callback function.  
import \{ Show, createSignal \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
function App\(\) \{  
const \[user, setUser\] = createSignal\(\{  
name\: 'John Doe',  
\}\);  
const handleClick = \(\) =\> \{  
setUser\(\{ name\: 'Jenny Doe' \}\);  
\};  
return \(  
\<div onClick=\{handleClick\}\>  
\<Show when=\{user\(\)\} keyed\>  
\{\(user\) =\> \<div\>\{user.name\}\</div\>\}  
Show  
| 187\</Show\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
Switch **and** Match  
The Show component is good for rendering two mutually exclusive conditions. However,  
what if we have more than two conditions? Solid provides Switch and Match components for  
such scenarios.  
Switch acts as a wrapper for inner conditions defined by the Match component. It accepts  
an optional fallback prop, which will be displayed if there is no match.  
const App = \(\) =\> \{  
const \[direction, setDirection\] = createSignal\('up'\);  
return \(  
\<Switch fallback=\{\<div\>Not a valid direction!\</div\>\}\>  
\<Match when=\{direction\(\) === 'up'\}\>  
\<UpArrow /\>  
\</Match\>  
\<Match when=\{direction\(\) === 'down'\}\>  
\<DownArrow /\>  
\</Match\>  
\</Switch\>  
\)  
\};  
If you prefer not to use a fallback component, you can include a final conditional with the  
value true to serve as the default case\:  
const App = \(\) =\> \{  
const \[direction, setDirection\] = createSignal\('up'\);  
return \(  
\<Switch\>  
\<Match when=\{direction\(\) === 'up'\}\>  
\<div\>Up\</div\>  
\</Match\>  
\<Match when=\{direction\(\) === 'down'\}\>  
\<div\>Up\</div\>  
188 | Match\</Match\>  
\<Match when=\{true\}\>  
\<div\>Not a valid direction!\</div\>  
\</Match\>  
\</Switch\>  
\);  
\};  
Match | 189 **CHAPTER 20**  
# Working with Lists  
Lists have the potential to make or break an application because any performance issue we  
have in an item will be multiplied by the number of items in that list.  
To illustrate this, let’s consider a simple application that renders a shopping cart\:  
import \{ createSignal, indexArray, mapArray \} from 'solid-js';  
import \{ render \} from "solid-js/web";  
const App = \(\) =\> \{  
const \[state, setState\] = createSignal\(\[  
\{ title\: "T-Shirt", price\: 3.20, quantity\: 3 \},  
\{ title\: "Shoes", price\: 10.00, quantity\: 1 \},  
\{ title\: "Jeans", price\: 10.30, quantity\: 2 \},  
\]\);  
return \(  
\<ul\>  
\{state\(\).map\(item =\> \{  
return \<li\>\{item.title\} \{item.price\} \{item.quantity\}\</li\>  
\}\)\}  
\</ul\>  
\);  
\};  
When we update the signal by setting a new value, it triggers a re-render for every item in  
the list, even if the item’s value does not change\:  
import \{ createSignal, indexArray, mapArray \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
191const App = \(\) =\> \{  
const \[state, setState\] = createSignal\(\[  
\{ title\: 'T-Shirt', price\: 3.20, quantity\: 3 \},  
\{ title\: 'Shoes', price\: 10.00, quantity\: 1 \},  
\{ title\: 'Jeans', price\: 10.30, quantity\: 2 \},  
\]\);  
return \(  
\<ul\>  
\{state\(\).map\(\(item, index\) =\> \{  
const add = \(\) =\> \{  
setState\(\(items\) =\>  
items.map\(\(item, i\) =\>  
i === index ? \{ ...item, quantity\: item.quantity + 1 \} \:  
item,  
\),  
\);  
\};  
const remove = \(\) =\> \{  
setState\(\(items\) =\>  
items.map\(\(item, i\) =\>  
i === index ? \{ ...item, quantity\: item.quantity - 1 \} \:  
item,  
\),  
\);  
\</span\>  
\};  
return \(  
\<li style=\{\`display\: flex; gap\: 0.4rem\`\}\>  
\<span\>\{item.title\} x \{item.quantity\}\</span\>  
\<span\>Price\: \$\{\(item.price \* item.quantity\).toFixed\(2\)\}  
\<button onclick=\{add\}\>+\</button\>  
\<button onclick=\{remove\}\>-\</button\>  
\</li\>  
\);  
\}\)\}  
\</ul\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
192 | Chapter 20. Working with Lists If you inspect the elements in the Developer Tools, you will see that a new DOM element is  
created for each item in the list upon a state update.  
This can cause a slow and janky user experience, and it gets worse depending on the  
complexity of the rendering logic.  
It is a known fact that DOM interactions are slow. It may be hard to notice any performance  
degradation for a small and simple list like ours, but an actual application tends to have a  
larger DOM tree with more complex behavior and interactions, which will make the lag more  
noticeable.  
How can we improve our application’s performance?  
The solution is simple\: We need to cache an item’s rendered output and reuse it for the next  
time if the item has the same value, instead of creating new elements.  
If we have fewer items between two render cycles, we need to properly dispose of the excess  
ones from the previous set, so that our application does not leak memory.  
Solid has two built-in components for such tasks\: For and Index.  
# For  
The For component accepts an array via the each prop and a render function in the  
prop.children position. This render function will be used to render each element in the  
array.  
An optional fallback component can be provided to render a component when there are no  
items in the array.  
\<For each=\{items\(\)\} fallback=\{\<div\>No items!\</div\>\}\>  
\{\(item, index\) =\> \{  
return \<li\>\{index\(\)\} \{item\}\</li\>  
\}\}  
\</For\>  
The render prop takes two parameters\: the item and an optional index signal. The index  
signal is created only if the callback function has the index parameter.  
The For component uses the mapArray function internally to create and cache DOM nodes.  
# mapArray  
mapArray  
| 193mapArray is a utility function that reactively transforms an array, caching DOM nodes  
corresponding to each item using the item itself as the key. The actual logic is complex but  
its functionality is equivalent to\:  
const cache = \{\};  
cache\[item\] = Node;  
The idea is that if the array item is referentially equal between two consecutive renderings,  
the function will return the cached node rather than creating a new node. The position of  
the item in the array will not affect the caching mechanism since it uses the item itself as the  
key. This means that if you change an element’s position in the array, its cache will remain  
intact.  
mapArray is particularly useful when working with reference types, such as arrays or objects.  
For primitive types, it may not be as useful, as multiple items may have the same value,  
leading to incorrect caching.  
In JavaScript, objects are compared by reference for equality. The cache is retrieved when we  
use the same value, not a deeply equal one.  
\<ul\>  
\</ul\>  
\{mapArray\(items, \(item, index\) =\> \<li\>\{item\}\</li\>\)\}  
If an element’s position in the array changes between two consecutive renders, the cached  
value will be inserted into the new position in the UI, but a new element will not be created.  
Reinserting a DOM node in a different position in the document will move the DOM node.  
If an element from the previous render is removed from the list, its cache will be disposed of.  
By disposing of, we mean a proper disposal by calling the onCleanup callbacks on any of the  
cached components.  
# Index  
The Index component also renders an array, receiving a render function and an optional  
fallback prop. But this time the first parameter of the render function is a signal while the  
optional index is a static value.  
\<Index each=\{items\(\)\} fallback=\{\<div\>No items!\</div\>\}\>  
\{\(item, index\) =\> \{  
return \<li\>\{index\} \{item\(\)\}\</li\>  
\}\}  
\</Index\>  
194 | IndexIndex uses indexArray internally and it is good for rendering both objects and primitive  
values.  
# indexArray  
The indexArray function reactively transforms an array, caching the DOM node  
corresponding to each item using the item’s position in the array, in other words, its index  
number. The behavior of the indexArray function is somewhat equivalent to this\:  
const cache = \{\};  
cache\[index\] = callback\(\);  
Items are created and disposed of based on the array’s length. New DOM nodes are created  
when the number of items increases after the update. Excess nodes are disposed of when the  
array’s length decreases.  
Using the index value as the key for caching brings about a very unique feature\: Updating an  
item will result in a fine-grained update on the item’s DOM node. The DOM element is  
preserved, but its children is re-rendered.  
\<ul\>  
\</ul\>  
\{indexArray\(items, \(item, index\) =\> \<li\>\{item\}\</li\>\)\}  
Let’s compare For and Index to clarify the last part. Take these two examples\:  
import \{ For, Index, createSignal \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
function App\(\) \{  
const \[items, setItems\] = createSignal\(\['apple', 'orange',  
'banana'\]\);  
const handleClick = \(\) =\> \{  
setItems\(\['mango', 'orange', 'banana'\]\);  
\}  
return \(  
\<div\>  
\<For each=\{items\(\)\}\>  
\{\(item\) =\> \<li\>\{item\}\</li\>\}  
\</For\>  
\<Index each=\{items\(\)\}\>  
indexArray  
| 195\{\(item\) =\> \<li\>\{item\(\)\}\</li\>\}  
\</Index\>  
\<button onclick=\{handleClick\}\>Update\</button\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
When we update the state, For creates a new \<li\> while Index keeps the previously  
rendered \<li\>, replacing its innerText property.  
This information will come in handy when working with input elements under For and Index  
components. When you update an item, For will give you a new DOM node, causing the  
input field to lose focus, while Index will keep the existing DOM node, updating the value.  
Here is an example demonstrating it\:  
import \{ For, Index, createSignal \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
export const App = \(\) =\> \{  
const array = \['apple', 'orange', 'banana'\];  
const \[items, setItems\] = createSignal\(array\);  
const handleInput = \(index\: number, event\: InputEvent\) =\> \{  
setItems\(\(prev\) =\> \{  
return prev.map\(\(item, i\) =\> \{  
return i === index  
? \(event.currentTarget as HTMLInputElement\).value  
\: item;  
\}\);  
\}\);  
\};  
return \(  
\<div\>  
\<h2\>Using For\</h2\>  
\<ul\>  
\<For each=\{items\(\)\}\>  
\{\(item, index\) =\> \(  
\<li\>  
\</li\>  
\<input value=\{item\} oninput=\{\[handleInput, index\(\)\]\} /\>  
196 | indexArray\)\}  
\</For\>  
\</ul\>  
\<h2\>Using Index\</h2\>  
\<ul\>  
\<Index each=\{items\(\)\}\>  
\{\(item, index\) =\> \(  
\<li\>  
\</li\>  
\<input value=\{item\(\)\} oninput=\{\[handleInput, index\]\} /\>  
\)\}  
\</Index\>  
\</ul\>  
\</div\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
The handleInput function handles the input event for each item. The array we use for  
adding the input handler, oninput=\{\[handleInput, index\(\)\]\} is a syntax sugar provided  
by Solid for passing data to the handler. You can refer to Chapter 30 for more information.  
# Selecting Items with Selectors  
Solid provides a utility function, createSelector, for the efficient comparison of a given  
value to the one stored in a signal, which comes in handy when working with lists.  
createSelector takes a signal, creates an internal computation to monitor the signal, and  
returns a function. The returned function takes a value and returns a boolean, indicating  
whether the provided value is equal to the one stored in the signal\:  
const \[active, setActive\] = createSignal\(1\);  
const isSelected = createSelector\(active\);  
isSelected\(2\); // ← This acts like an accessor.  
The function returned from createSelector is neither a signal nor a memo. It is a hand-  
crafted function that acts like a signal accessor with an argument. Listeners are captured and  
cached by their keys. Key is the value passed to the selector function. When the original  
signal updates, the value corresponding to each key is re-evaluated. If the result is different,  
listeners registered under that key are notified. This makes the update operations O\(2\)  
instead of O\(n\).  
The purpose of createSelector is to check whether a particular list item is selected, or  
Selecting Items with Selectors | 197 matches a criterion, using a predicate function. This allows us to apply a specific style and  
associate a particular behavior with the item. The default predicate function is a simple  
comparison, which can be replaced with a custom one. You will see how to do this shortly,  
but first, let’s look at an example.  
In the following example, updating the selected index stored in the signal active changes  
only two nodes\:  
import \{ createSelector, createSignal \} from "solid-js";  
import \{ render \} from "solid-js/web";  
const App = \(\) =\> \{  
const items = \['Apple', 'Orange', 'Banana', 'Pineapple'\];  
const \[active, setActive\] = createSignal\(0\);  
const isSelected = createSelector\(active\);  
return \(  
\<div\>  
\<p\>Please select an item by clicking on it.\</p\>  
\<p\>Selected Index\: \{String\(active\(\)\)\}\</p\>  
\<ul\>  
\{items.map\(\(item, index\) =\> \{  
return \(  
\<li onclick=\{\(\) =\> setActive\(index\)\}\>  
\<input type="checkbox" checked=\{isSelected\(index\)\} /\>  
Item \{item\}  
\</li\>  
\)  
\}\)\}  
\</ul\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
Please note that isSelected\(index\) returns a boolean value, which will re-execute in a  
reactive context. As with signals, if we assign it to a variable, we would be opting out of the  
reactivity\:  
const isSelected = selector\(item\);  
return \(  
198 | Selecting Items with Selectors\<li onClick=\{\(\) =\> setActive\(item\)\}\>  
\<input type="checkbox" checked=\{isSelected\} /\>  
Item \{item\}  
\</li\>  
\);  
The createSelector function accepts a comparator function that overrides the default  
comparison logic. This feature is particularly useful for comparing complex values\:  
createSelector\<Stored, Received\>\(  
active,  
fn?\: \(received\: Received, stored\: Stored\) =\> boolean  
\)\: \(k\: Received\) =\> boolean;  
For example, we can use this function to check if the stored value has the same name as the  
received one\:  
import \{ createSelector, createSignal \} from "solid-js";  
import \{ render \} from "solid-js/web";  
interface User \{  
name\: string;  
\}  
const App = \(\) =\> \{  
const \[active, setActive\] = createSignal\<User\>\(\{ name\: 'John' \}\);  
const selector = createSelector\<User, User\>\(  
active,  
\(received, stored\) =\> stored.name === received.name  
\);  
const users\: Array\<User\> = \[  
\{ name\: 'John' \},  
\{ name\: 'Jack' \},  
\{ name\: 'Jenny' \},  
\{ name\: 'Jimmy' \},  
\];  
return \(  
\<div\>  
\<p\>Please select a user by clicking on it.\</p\>  
\<p\>Selected User\: \{active\(\).name\}\</p\>  
\<ul\>  
\{users.map\(\(item, index\) =\> \{  
Selecting Items with Selectors | 199return \(  
\<li onclick=\{\(\) =\> setActive\(users\[index\]\)\}\>  
\<input type="checkbox" checked=\{selector\(item\)\} /\>  
\{item.name\} \{String\(isSelected\)\}  
\</li\>  
\)  
\}\)\}  
\</ul\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
In the next example, we modify the selected items using mouse clicks while pressing the  
control key. If an item is not selected, we add it to the selection. Conversely, if an item is  
already selected, we remove it.  
import \{ createSelector, createSignal \} from "solid-js";  
import \{ render \} from "solid-js/web";  
const App = \(\) =\> \{  
const items = \['Apple', 'Orange', 'Banana', 'Pineapple'\];  
const \[selecteds, setSelecteds\] = createSignal\<Array\<number\>\>\(\[\]\);  
const selector = createSelector\<Array\<number\>, number\>\(  
selecteds, \(received, stored\) =\> stored.includes\(received\)  
\);  
const handleClick = \(index\: number, event\: MouseEvent\) =\> \{  
if \(!event.ctrlKey\) \{  
setSelecteds\(\[index\]\)  
\} else \{  
setSelecteds\(prev =\> \{  
if \(!prev.includes\(index\)\) return \[...prev, index\];  
return prev.filter\(el =\> el !== index\);  
\}\);  
\}  
\};  
return \(  
\<ul\>  
\{items.map\(\(item, index\) =\> \{  
return \(  
200 | Selecting Items with Selectors\<li onclick=\{\[handleClick, index\]\}\>  
\<input type="checkbox" checked=\{selector\(index\)\} /\>  
\{item\}  
\</li\>  
\);  
\}\)\}  
\</ul\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
Selecting Items with Selectors | 201 **CHAPTER 21**  
# Rendering Components Outside the  
# Component Hierarchy  
Portals allow us to render components outside the component hierarchy.  
In the DOM, nodes follow a strict parent-child relationship. Child nodes inherit CSS  
properties, such as z-index, overflow, and display, from their parent elements.  
Consequently, if a parent element’s size is constrained, its child elements will also be  
restricted. Similarly, if a parent element’s display property is set to none, all its children will  
be hidden. This inheritance pattern makes it inconvenient to render components like modal  
windows, dialog boxes, tooltips, hover cards, and similar UI elements that need to visually  
break out of their parent containers to function properly..  
Portals help overcome these restrictions without resorting to cumbersome workarounds,  
offering a clean and efficient solution for rendering components independently of their  
position in the component hierarchy.  
For example, by using a Portal, we can mount the Modal component directly onto the body  
node, bypassing its usual parent DOM hierarchy.  
import \{ createSignal, Show, type Component \} from 'solid-js';  
import \{ render, Portal \} from 'solid-js/web';  
export const App = \(\) =\> \{  
const \[show, setShow\] = createSignal\(false\);  
const open = \(\) =\> \{  
setShow\(true\);  
\};  
203const close = \(\) =\> \{  
setShow\(false\);  
\};  
const Modal\: Component\<\{ show\: boolean \}\> = \(props\) =\> \{  
return \(  
\<Show when=\{props.show\}\>  
\<div class="modal"\>  
Teleported Element  
\<button class="close" onclick=\{close\}\>Close\</button\>  
\</div\>  
\</Show\>  
\);  
\}  
return \(  
\<div\>  
\<style\>\{\`  
.modal \{  
background-color\: \#333;  
position\: fixed;  
top\: 0;  
left\: 0;  
right\: 0;  
bottom\: 0;  
display\: flex;  
align-items\: center;  
justify-content\: center;  
\}  
.close \{  
position\: absolute;  
top\: 0;  
right\: 0;  
cursor\: pointer;  
\}  
\`\}\</style\>  
\<button onclick=\{open\}\>Open Modal\</button\>  
\<Portal mount=\{document.body\}\>  
\<Modal show=\{show\(\)\}/\>  
\</Portal\>  
\</div\>  
\);  
\};  
204 | Chapter 21. Rendering Components Outside the Component Hierarchyrender\(\(\) =\> \<App /\>, document.body\);  
Events propagate through the component hierarchy, allowing teleported elements to behave  
like regular children. While the term “teleported” may feel cringy to some, it is the commonly  
used name for such components in this context.  
It’s essential to keep a few key details in mind when working with the Portal component\:  
The Portal component renders an additional div element around its children to facilitate  
event propagation.  
If the mount prop is not specified, or if the specified element does not exist, the body  
element is used as the default mount point.  
The useShadow prop renders the element inside a shadow root, providing style isolation  
when working with web components.  
If the mount target is an svg element, isSVG prop should be set to true so that the outer  
div element is not inserted.  
Chapter 21. Rendering Components Outside the Component Hierarchy  
| 205 **CHAPTER 22**  
# Managing Complex States with Stores  
Before delving into what stores are, let’s first examine the problem they solve.  
Using objects for keeping state is a common practice in JavaScript applications. However, the  
state in real-world applications tends to be complex, which can make it difficult to keep it  
consistent. Most programmers rely on state management libraries, like Redux or Mobx, to  
keep the application state manageable. Some libraries enforce strict architectural patterns,  
while others impose significant restrictions on accessing and updating the state.  
Solid uses signals to track state. Signals are reactive containers for atomic values, updated by  
setting a new value rather than mutating the existing one.  
const \[state, setState\] = createSignal\(\{  
name\: 'John',  
age\: 20  
\}\);  
setState\(state =\> \(\{ ...state, name\: 'Jenny' \}\)\);  
It is the developer’s responsibility to keep the object structure intact and not overwrite  
values while copying them from the previous object to the next one.  
Here is a simple shopping cart implementation that uses an object to track the cart’s state.  
While this implementation is simplistic, it serves as a clear example for our discussion.  
const App = \(\) =\> \{  
const \[state, setState\] = createSignal\<any\>\(\{  
items\: \[\],  
207discount\: 0  
\}\);  
const addItem = \(\) =\> \{  
let item = \{  
id\: 1,  
title\: "T-Shirt",  
price\: 10.3,  
quantity\: 2  
\};  
setState\(\{  
items\: \[...state\(\).items, \{ ...item \}\],  
discount\: 3,  
\}\);  
\}  
\}  
We used the spread syntax to ensure the immutability of the state while copying values from  
the old state to the new one. However, as the state grows more complex, managing it can  
become error-prone, especially when working with deeply nested objects. The store API  
addresses this challenge by providing a simple and predictable way to update state.  
The way we create a store is identical to that of a signal\:  
import \{ createStore \} from "solid-js/store";  
const \[state, setState\] = createStore\(\{  
items\: \[\],  
discount\: 0  
\}\);  
Note that the store-related API in Solid is exported from the solid-js/store module.  
A Solid store is a proxy object that wraps a signal. A proxy is an object that intercepts and  
redefines the operations intended for another object.  
To understand stores better, let’s review how proxy objects work in JavaScript. We create a  
Proxy object using a target, the object to be proxied, and a handler, which defines the  
behavior for operations performed on the proxy.  
const proxy = new Proxy\(target, handler\);  
The handler intercepts the get and set operations on the target object, allowing us to  
override its default behavior.  
208 | Chapter 22. Managing Complex States with Storesconst handler = \{  
get\(target, prop, receiver\) \{\},  
set\(target, prop, value, receiver\) \{\},  
\};  
// Reactive State  
// ↓  
const proxy = new Proxy\(target, handler\);  
Currently, Solid uses only the get method of the proxy object, leaving the updating logic to  
setState functions returned by the createStore function.  
You can use object or array values with stores since those are the only JavaScript objects that  
support the proxy API.  
# Accessing Data  
Since store is an object, we access its properties using either the dot notation or bracket  
notation.  
\<div\>\{state\['discount'\]\}\</div\>  
\<div\>\{state.discount\}\</div\>  
Reactivity is maintained through the proxy object’s get calls. When accessing a property,  
such as store.discount, the proxy intercepts the request and invokes the signal’s getter  
function to retrieve the value, ensuring the property remains reactive.  
const \[state, setState\] = createStore\(\{  
items\: \[\],  
discount\: 0  
\}\);  
const App = \(\) =\> \{  
return \(  
\<div\>Discount\: \{state.discount\}\</div\>  
\);  
\}  
We can extend a store value with additional methods. For instance, we can implement a fixed  
discount over the total price when the total price surpasses \$20\:  
const \[state, setState\] = createStore\(\{  
discount\: 10,  
items\: \[  
\{ title\: 'T-Shirt', price\: 3.2, quantity\: 3 \},  
Accessing Data | 209\{ title\: 'Shoes', price\: 10.0, quantity\: 1 \},  
\{ title\: 'Jeans', price\: 10.3, quantity\: 2 \},  
\],  
get total\(\) \{  
const sum = this.items.reduce\(\(sum, item\) =\> \{  
return sum + item.price \* item.quantity;  
\}, 0\);  
return sum \< 20 ? sum \: sum - this.discount;  
\},  
\}\);  
# Updating Stores  
The setter function returned by createStore is designed to handle a variety of use cases  
through its overloaded functionality.  
In its simplest form, the function accepts an object that updates only the specified  
properties. The unspecified properties remain unchanged. The values are merged shallowly.  
setState\(\{ discount\: 10 \}\);  
This code snippet updates only the discount property. The items property remains  
unaffected. To delete a property, you must explicitly set its value to undefined.  
setState\(\{ discount\: undefined \}\);  
The setter function also supports a callback that takes the current state as its argument and  
returns a partial state to be merged with the existing one.  
setState\(\(val\) =\> \(\{ discount\: val.discount + 10 \}\)\);  
Values can be updated using a series of strings that specify the path to the value. For  
instance, the discount value can be updated as follows\:  
setState\('discount', 10\);  
setState\('discount', val =\> val + 10\);  
Here is how to update a deeply nested value\:  
const \[state, setState\] = createStore\(\{  
user\: \{  
contact\: \{  
email\: 'john@example.com',  
\}  
210 | Updating Stores\}  
\}\);  
setState\('user', 'contact', 'email', 'jenny@example.com'\);  
Setting a property to undefined removes it from the store.  
setState\('discount', undefined\);  
setState\('discount', \(\) =\> undefined\);  
We can update items in an array using various methods\:  
by specifying individual index values  
using index ranges  
applying filter functions  
const \[state, setState\] = createStore\(\{  
items\: \[  
\{ title\: "T-Shirt", price\: 3.20, quantity\: 3 \},  
\{ title\: "Shoes", price\: 10.00, quantity\: 1 \},  
\{ title\: "Jeans", price\: 10.3, quantity\: 2 \},  
\]  
\}\);  
// You can use the index value to update an item.  
setState\('items', 1, 'quantity', 4\);  
setState\('items', 2, 'quantity', q =\> q + 1\);  
// You can use an array of index values to update multiple items at  
once.  
setState\('items', \[0, 1, 2\], 'quantity', 5\);  
// You can filter items within a specified  
// range and assign new values to them.  
setState\('items', \{ from\: 0, to\: 2 \}, 'price', 4.44\);  
//You can filter items within a specified range  
// and assign new values using a callback.  
setState\('items', \{ from\: 0, to\: 1 \}, item =\> \(\{ ...item, price\: 3.33  
\}\)\);  
// You can use callbacks to filter items  
// and then update their values by their path.  
setState\('items', item =\> item.quantity \> 1, 'quantity', q =\> q + 2\);  
# Limitations Related to Reactivity  
Limitations Related to Reactivity  
| 211 There are some limitations when working with store values.  
1\. Only readable properties can be tracked.  
For example, you cannot track the entire state but you can track state.count\:  
const \[state, setState\] = createStore\(\{ count\: 0 \}\);  
setInterval\(\(\) =\> setState\('count', c =\> c + 1\), 1000\);  
// This effect will not be re-executed.  
createEffect\(\(\) =\> console.log\(state\)\);  
// But this one will.  
createEffect\(\(\) =\> console.log\(state.count\)\);  
However, you can use workarounds like JSON.stringify to subscribe to the entire store,  
though this may come with some performance penalties.  
When working with arrays, you cannot track state.items, but you can track  
state.items.length.  
const \[state, setState\] = createStore\(\{ items\: \[\] \}\);  
2\. Since objects and arrays are the only data types fully compatible with the Proxy API, they  
are the only types that can be used with stores. Other data types, such as Date, Map, and  
Set, can be included in a store, but some of their properties won't trigger get or set  
traps. This behavior can lead to bugs if the code does not handle these data types  
correctly.  
# Store Utilities  
The store module exports several utility functions.  
# produce  
produce is an Immer-inspired function that has the same name and functionality.  
It takes a callback function to execute desired mutations on a draft state while keeping the  
actual state intact. This allows us to work with a temporary, isolated version of the state,  
ensuring that the original state remains untouched while we are building the new state.  
const \[state, setState\] = createStore\(\{  
total\: 0,  
items\: \[\],  
212 | Store Utilities\}\);  
setState\(  
produce\(\(draft\) =\> \{  
draft.total = 3.20;  
draft.items.push\(\{ title\: "T-Shirt", price\: 3.20, quantity\: 3 \}\);  
\}\)  
\);  
# reconcile  
The reconcile function allows us to interoperate with external data sources in a quick and  
dirty way.  
Instead of manually iterating over the incoming values and updating the state, reconcile  
leverages a diffing algorithm to identify the modified values and apply them to the state. This  
approach ensures that only the updated values trigger effects.  
const \[state, setState\] = createStore\(\{  
window\: \{  
x\: 40,  
y\: 10,  
width\: 800,  
height\: 600,  
\}  
\}\);  
let incomingState = \{  
x\: 55,  
y\: 55,  
width\: 800,  
height\: 600,  
\};  
setState\('window', reconcile\(incomingState, \{ merge\: true \}\)\);  
So, for this example, the incoming state replaces the window object, which in turn triggers  
updates on DOM nodes that rely on the x and y values.  
setInterval\(\(\) =\> \{  
setState\('window', reconcile\(o\)\);  
\}, 1000\);  
const App = \(\) =\> \{  
return \(  
Store Utilities | 213\<div\>  
\<div\>\{state.window.x\}\</div\>  
\<div\>\{state.window.y\}\</div\>  
\<div\>\{state.window.width\}\</div\>  
\<div\>\{state.window.height\}\</div\>  
\</div\>  
\);  
\}  
Contrary to what one might expect, the reconcile function does not perform a deep merge.  
Instead, it completely replaces the window property with incomingState. This means that if  
you remove items from incomingState, they will be absent on the window object after the  
reconciliation.  
Solid’s documentation details the effect of the merge option on the reconciliation process as  
follows\:  
By default \{ merge\: false \} does referential checks where possible to  
determine equality and replaces where items are not referentially equal. \{  
merge\: true \} pushes all diffing to the leaves and effectively morphs the  
previous data to the new value.  
# unwrap  
The unwrap function unwraps the proxied data and returns it. The returned value is not  
reactive\:  
import \{ createStore, unwrap \} from 'solid-js/store';  
import \{ render \} from 'solid-js/web';  
function App\(\) \{  
const \[state, setState\] = createStore\(\{  
window\: \{  
x\: 40,  
y\: 10,  
width\: 800,  
height\: 600,  
\}  
\}\);  
return \(  
\<div onClick=\{\(\) =\> setState\('window', 'x', x =\> x + 10\)\}\>  
\<p\>Click to update the state!\</p\>  
\<div\>Proxied\: \{state.window.x\}\</div\>  
214 | Store Utilities\<div\>Unwrapped\: \{unwrap\(state\).window.x\}\</div\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
Please note that you can also use destructuring assignment with store values to extract them  
into static variables. However, you need to ensure that the value does not read from the store  
internally, such as through a getter property; otherwise, updates will still be triggered.  
# createMutable  
The createMutable function provides a convenient way to interface with external state  
management libraries. It creates a mutable store that can be updated using regular  
JavaScript assignment operations.  
import \{ createMutable \} from "solid-js/store";  
const state = createMutable\(\{  
name\: 'John Doe',  
age\: 33,  
\}\);  
createEffect\(\(\) =\> \{  
console.log\(\{ ...state \}\);  
\}\);  
state.age = 44;  
state.name = 'Jenny Doe';  
We can also utilize getter and setter methods on the state object to access and modify its  
properties.  
import \{ createMutable \} from "solid-js/store";  
const state = createMutable\(\{  
name\: 'John Doe',  
\_age\: 33,  
get age\(\)\{  
return this.\_age;  
\},  
set age\(val\: number\) \{  
this.\_age = val  
\}  
Store Utilities | 215\}\);  
createEffect\(\(\) =\> \{  
console.log\(\{ ...state \}\);  
\}\);  
state.age = 44;  
state.name = 'Jenny Doe';  
216 | Store Utilities **CHAPTER 23**  
# Abstracting Behavior With Custom  
# Directives  
A custom directive is a function that is applied to a JSX element through the use\:  
namespace. It allows us to extract a behavior so that it can be used with multiple elements.  
Let’s create a custom directive called highlight that sets the background color of an  
element to a specified value. Once we implement it, it will be applied to an element as  
follows\:  
\<div use\:highlight=\{'red'\}\>Greetings Earthlings!\</div\>  
As you see, a custom directive closely resembles a regular JSX attribute, except for the use\:  
namespace.  
The compiler will convert a custom directive into a regular function call like so\:  
use\(highlight, \_el\$, \(\) =\> 'red'\);  
The use function is a wrapper that invokes the directive function with the element and the  
value we assign to the custom directive. So, under the hood, the Solid’s runtime calls this  
function with the DOM element and the value\:  
highlight\(\_el\$, \(\) =\> 'red'\);  
\_el\$ is the element to which the custom directive is applied.  
The value is passed to the directive function through a callback to preserve reactivity, in case  
a reactive value is used.  
217 The custom directive functions have fixed signature\: They accept the target element and a  
function that returns the provided value\:  
function highlight\(el\: HTMLElement, value\: Accessor\<string\>\) \{  
el.style.setProperty\('background-color', 'orange'\);  
\}  
Here we use the Accessor generic from solid-js for convenience. However, we can also  
annotate the callback function directly\:  
function highlight\(el\: HTMLElement, value\: \(\) =\> string\) \{  
el.style.setProperty\('background-color', 'orange'\);  
\}  
Let’s put everything together and write a simple application\:  
import \{ render \} from 'solid-js/web';  
function highlight\(element, valueAccessor\) \{  
element.style.setProperty\('background-color', valueAccessor\(\)\);  
\}  
const App = \(\) =\> \{  
return \<div use\:highlight=\{'red'\}\>Greetings Earthlings!\</div\>;  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
TypeScript flags the use\:highlight attribute as invalid because it lacks information about  
such an attribute on a div element\:  
Property 'use\:highlight' does not exist on type  
'HTMLAttributes\<HTMLDivElement\>'  
We’ll learn how to extend the JSX type from the solid-js module to include custom directives.  
If a value is not provided for the custom directive, it defaults to true, mirroring the behavior  
of standard JSX attributes.  
value\: \(\) =\> true  
So, these two lines produce the same output\:  
\<div use\:isPrimary\>Some Element\</div\>  
\<div use\:isPrimary=\{true\}\>Some Element\</div\>  
218 | Chapter 23. Abstracting Behavior With Custom Directives We can use only a single value with a directive and that is by design. If you need to pass  
multiple values, you can wrap them in an array or object.  
Let’s update our example to use color and background color properties.  
import \{ Accessor \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
function highlight\(  
element\: HTMLElement,  
value\: Accessor\<\{ color\: string, bgColor\: string \}\>  
\) \{  
element.style.setProperty\('color', value\(\).color\);  
element.style.setProperty\('background-color', value\(\).bgColor\);  
\}  
const App = \(\) =\> \{  
return \(  
\<div use\:highlight=\{\{ color\: 'red', bgColor\: 'blue' \}\}\>  
Greetings Earthlings!  
\</div\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
Custom directives cannot be applied to components because they require an actual DOM  
element. This restriction is due to the fact that components may not always return a DOM  
element. This will become more clear when we see the compiler’s output\:  
import \{ template as \_\$template \} from "solid-js/web";  
import \{ use as \_\$use \} from "solid-js/web";  
import \{ render \} from 'solid-js/web';  
const \_tmpl\$ = \_\$template\(\`\<div\>Greetings Earthlings!\`\);  
function highlight\(element, valueAccessor\) \{  
element.style.setProperty\('background-color', valueAccessor\(\)\);  
\}  
const App = \(\) =\> \{  
return \(\(\) =\> \{  
const \_el\$ = \_tmpl\$\(\);  
\_\$use\(highlight, \_el\$, \(\) =\> 'red'\);  
return \_el\$;  
Chapter 23. Abstracting Behavior With Custom Directives | 219\}\)\(\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
We can use onMount and onCleanup functions within directive definitions. They come in  
handy when adding and removing event listeners.  
Let’s refactor our function a bit and highlight the element when it is clicked on\:  
function highlight\(  
element\: HTMLElement,  
value\: Accessor\<\{ color\: string, bgColor\: string \}\>  
\) \{  
const addHighlight = \(\) =\> \{  
element.style.setProperty\('color', value\(\).color\);  
element.style.setProperty\('background-color', value\(\).bgColor\);  
\};  
document.addEventListener\('click', addHighlight\);  
onCleanup\(\(\) =\> \{  
document.removeEventListener\('click', addHighlight\);  
\}\);  
# E  
\}  
# xtending JSX Type with Custom Directives  
We can extend the JSX type that is exported from the core library to include a custom  
directive\:  
declare module 'solid-js' \{  
namespace JSX \{  
interface Directives \{  
highlight\: \{  
color\: string;  
bgColor\: string;  
\};  
\}  
\}  
\}  
220 | E  
xtending JSX Type with Custom Directives **Using Imported Directives**  
There are a few issues to keep in mind when using directives. First, the directive definition  
must be available in the scope where it is used in the JSX element.  
The second issue is that developer tools cannot see through the transpilation process and  
may remove the imported function, assuming it is not used.  
To clarify further, if we are using an imported directive and the directive definition is not  
used outside a JSX element, it will be perceived as an unused function, get tree-shaken, and  
be stripped from the output bundle.  
To prevent this, the directive function must be used at least once. Solid’s documentation  
advises creating a “fake access” by using the && operator within the module that imports the  
directive\:  
import \{ highlight \} from './highlight';  
false && highlight;  
Using Imported Directives | 221 **CHAPTER 24**  
# Working with Asynchronous Data  
Working with remote data is not significantly different from working with readily available  
data, with a few notable exceptions\:  
1\. The data is not available when the application loads; it must be retrieved before it can be  
used.  
2\. Network calls are prone to failure, and the expected data may not always be received.  
Because the request may either succeed or fail, we need to account for both possibilities and  
plan accordingly. When the component loads, we initiate a request and display a loading  
indicator. If the request fails, we show an error message and possibly provide a retry option.  
If the request succeeds, we render the data. In either case, we need to hide the initial loading  
indicator. So, our pseudocode would be\:  
1\. Send a fetch request when the component loads.  
2\. Display a loading indicator while waiting for the response.  
3\. Update the component once the response is received.  
4\. If the request succeeds, render the data; if it fails, show an error message.  
5\. Hide the loading indicator.  
You may notice that the state we need to maintain closely resembles the state of a promise. If  
you recall, a promise can be in one of these three states\:  
pending\: This is the initial state. The operation is neither fulfilled nor rejected.  
fulfilled\: The operation is completed successfully, and the data is ready.  
rejected\: The operation failed. An error occurred.  
223 A promise always starts in pending state and it is said to be settled once it transitions to the  
fulfilled or rejected state.  
Now that we've completed the planning phase, it is time to write some components that use  
remote data.  
For this example, we will serve a user.json file from src folder on our local development  
server instead of patching up the server with an endpoint. This is for reducing clutter and  
saving time for a working example but you can create an endpoint by modifying Vite’s  
development server, or you use an existing server and adapt the code example accordingly.  
I will keep the content of the file simple\:  
\{  
"name"\: "John Doe",  
"age"\: 20,  
"email"\: "jdoe@example.com"  
\}  
Once you have created the file, visit the file path in a browser to ensure that it exists and  
works.  
Let’s create the type definitions next. The state will be a union of all the possible states we’ve  
discussed. It will be generic over both data and error types so that we can use it with any  
data and error values\:  
type State\<Data = any, Error = any\> =  
| \{ status\: 'pending' \}  
| \{ status\: 'success', success\: Data \}  
| \{ status\: 'error', error\: Error \}  
;  
This is the most accurate representation of our state; however, TypeScript tends to be tricky  
when working with a union of objects, so we will refactor it into a single object for simplicity\:  
interface State\<Data = any, Error = any\> \{  
status\: 'pending' | 'success' | 'error';  
data\: Data | undefined;  
error\: Error | undefined;  
\}  
We used a union for data and error values, rather than typing them as optional values, so  
that we have to be explicit about them when setting their values.  
224 | Chapter 24. Working with Asynchronous Data The initial state will be\:  
const \[state, setState\] = createSignal\<State\<User, string\>\>\(\{  
status\: 'pending',  
data\: undefined,  
error\: undefined,  
\}\);  
We will use a function to fetch the data, so that we can retry a failed request easily\:  
function getData\(\) \{  
fetch\('/src/user.json'\)  
// response.ok means that the status is in the range 200-299  
inclusive  
// 404 does not constitute a network error  
.then\(\(response\) =\>  
response.ok  
? response.json\(\)  
\: Promise.reject\(\{  
code\: response.status,  
message\: response.statusText,  
\}\),  
\)  
.then\(\(data\: User\) =\> \{  
setState\(\{ status\: 'success', data, error\: undefined \}\);  
\}\)  
.catch\(\(err\: Error\) =\> \{  
setState\(\{ status\: 'error', data\: undefined, error\: err.message  
\}\);  
\}\);  
\}  
A missing resource, 404, is not an error but a valid response. We need to reject it first so that  
we can use a single catch in our function.  
We handle parsing errors too, in case the returned value is not a valid JSON file.  
We will call the function inside the component’s body to initiate a request when the  
component loads\:  
getData\(\);  
Now, let’s render the state. We will use a combination of Switch and Match components for  
conditional rendering\:  
Chapter 24. Working with Asynchronous Data | 225return \(  
\<Switch\>  
\<Match when=\{state\(\).status === 'pending'\}\>  
\<div\>Fetching...\</div\>  
\</Match\>  
\<Match when=\{state\(\).status === 'error'\}\>  
\<div\>Error Occured\: \{state\(\).error\}\</div\>  
\<button onclick=\{getData\}\>Click to retry!\</button\>  
\</Match\>  
\<Match when=\{state\(\).status === 'success'\}\>  
\<div\>UserName\: \{state\(\).data!.name\}\</div\>  
\<div\>Age\: \{state\(\).data!.age\}\</div\>  
\</Match\>  
\</Switch\>  
\);  
When the status is success, the data is guaranteed to exist, so we can use non-null  
assertions to avoid type errors related to the success value.  
This is true for the error case too\: The error is guaranteed to exist when the status is error.  
However, we don’t see any type errors with the error value because we are using a string to  
render it. There are no type errors since both string and undefined are valid JSX children.  
If we had an object to store the error value, we would need a type assertion.  
NOTE  
Although we have directly displayed the error messages in our examples, in a real  
application, it's important to present user-friendly error messages instead.  
The button will allow us to retry if the fetch request fails.  
Here's how the application looks with all the components brought together\:  
import \{ Match, Switch, createSignal, type Component \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
interface User \{  
name\: string;  
age\: number;  
\}  
const DisplayUser\: Component\<\{\}\> = \(props\) =\> \{  
interface State\<Data = any, Error = any\> \{  
status\: 'pending' | 'success' | 'error';  
data\: Data | undefined;  
error\: Error | undefined;  
226 | Chapter 24. Working with Asynchronous Data\}  
const \[state, setState\] = createSignal\<State\<User, string\>\>\(\{  
status\: 'pending',  
data\: undefined,  
error\: undefined,  
\}\);  
function getData\(\) \{  
fetch\('/src/user.json'\)  
// 404 does not constitute a network error  
// response.ok means that the status is in the range 200-299  
inclusive  
.then\(\(response\) =\>  
response.ok  
? response.json\(\)  
\: Promise.reject\(\{  
code\: response.status,  
message\: response.statusText,  
\}\),  
\)  
.then\(\(data\: User\) =\> \{  
setState\(\{ status\: 'success', data, error\: undefined \}\);  
\}\)  
.catch\(\(err\: Error\) =\> \{  
setState\(\{ status\: 'error', data\: undefined, error\: err.message  
\}\);  
\}\);  
\}  
getData\(\);  
return \(  
\<Switch\>  
\<Match when=\{state\(\).status === 'pending'\}\>  
\<div\>Fetching...\</div\>  
\</Match\>  
\<Match when=\{state\(\).status === 'error'\}\>  
\<div\>Error Occured\: \{state\(\).error\}\</div\>  
\<button onclick=\{getData\}\>Click to retry!\</button\>  
\</Match\>  
\<Match when=\{state\(\).status === 'success'\}\>  
\<div\>UserName\: \{state\(\).data!.name\}\</div\>  
\<div\>Age\: \{state\(\).data!.age\}\</div\>  
\</Match\>  
Chapter 24. Working with Asynchronous Data | 227\</Switch\>  
\);  
\};  
export const App = \(\) =\> \{  
return \(  
\<div\>  
\<DisplayUser /\>  
\</div\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
# Decoupling Fetching From Rendering  
In our solution, we fetch and render in the same component. This pattern is commonly  
referred to as “fetch as you render” which might not be ideal if you are working with multiple  
remote data.  
Suppose we want to display all posts created by a user. We need to fetch the user data first  
and then get the posts created by that user.  
The issue with this approach is the waterfall effect, where sequential dependencies delay  
subsequent fetches because the data fetching process begins only after the component is  
loaded. However, latency isn't the only concern. What happens if the second request fails?  
Should we render an incomplete UI, or discard everything and display an error message  
instead?  
To address some of these concerns, we can extract the fetching logic into a separate module  
and begin fetching the data before the component is loaded.  
For added flexibility, we will use a fetcher function that returns a promise instead of a URL  
string. This approach allows us to leverage the createResource function for fetching any  
asynchronous data, whether it is truly remote or local but requires awaiting.  
interface State\<Data = any, Error = any\> \{  
status\: 'pending' | 'success' | 'error';  
data\: Data | undefined;  
error\: Error | undefined;  
\}  
function createResource\<Data = any, Error = any, Params = any\>\(  
fetcher\: \(params\: Params\) =\> Promise\<Data\>,  
228 | Decoupling Fetching From RenderingqueryParams\: Params,  
\)\: Accessor\<State\<Data, Error\>\> \{  
const \[state, setState\] = createSignal\<State\<Data, Error\>\>\(\{  
status\: 'pending',  
data\: undefined,  
error\: undefined,  
\}\);  
fetcher\(queryParams\)  
.then\(\(data\: Data\) =\> \{  
setState\(\{ status\: 'success', data, error\: undefined \}\);  
\}\)  
.catch\(\(error\: Error\) =\> \{  
setState\(\{ status\: 'error', data\: undefined, error \}\);  
\}\);  
return state;  
\}  
With this small refactoring, we can initiate data fetching from anywhere, even before the  
application is loaded. This approach follows the “fetch-then-render” pattern. This approach  
minimizes the risk of incomplete or inconsistent UI states since the component waits for the  
data to be available.  
Below is how our application looks after applying these changes\:  
import \{  
createSignal,  
Match,  
Switch,  
type Accessor,  
type Component  
\} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
interface State\<Data = any, Error = any\> \{  
status\: 'pending' | 'success' | 'error';  
data\: Data | undefined;  
error\: Error | undefined;  
\}  
function createResource\<Data = any, Error = any, Params = any\>\(  
fetcher\: \(params\: Params\) =\> Promise\<Data\>,  
queryParams\: Params,  
Decoupling Fetching From Rendering | 229\)\: Accessor\<State\<Data, Error\>\> \{  
const \[state, setState\] = createSignal\<State\<Data, Error\>\>\(\{  
status\: 'pending',  
data\: undefined,  
error\: undefined,  
\}\);  
fetcher\(queryParams\)  
.then\(\(data\: Data\) =\> \{  
setState\(\{ status\: 'success', data, error\: undefined \}\);  
\}\)  
.catch\(\(error\: Error\) =\> \{  
setState\(\{ status\: 'error', data\: undefined, error \}\);  
\}\);  
return state;  
\}  
interface User \{  
name\: string;  
age\: number;  
\}  
function fetchUser\(\) \{  
return new Promise\<User\>\(\(resolve, reject\) =\> \{  
fetch\('/src/user.json'\)  
.then\(\(response\) =\>  
response.ok  
? response.json\(\)  
\: Promise.reject\(\{  
code\: response.status,  
message\: response.statusText,  
\}\),  
\)  
.then\(\(data\: User\) =\> \{  
resolve\(data\);  
\}\)  
.catch\(\(err\: Error\) =\> \{  
reject\(err.message\);  
\}\);  
\}\);  
\}  
const DisplayUser\: Component\<\{  
state\: Accessor\<State\<User, string\>\>;  
230 | Decoupling Fetching From Rendering\}\> = \(\{ state \}\) =\> \{  
return \(  
\<Switch\>  
\<Match when=\{state\(\).status === 'pending'\}\>  
\<div\>Fetching...\</div\>  
\</Match\>  
\<Match when=\{state\(\).status === 'error'\}\>  
\<div\>Error Occured\: \{state\(\).error\}\</div\>  
\</Match\>  
\<Match when=\{state\(\).status === 'success'\}\>  
\<div\>UserName\: \{state\(\).data!.name\}\</div\>  
\<div\>Age\: \{state\(\).data!.age\}\</div\>  
\</Match\>  
\</Switch\>  
\);  
\};  
export const App = \(\) =\> \{  
const state = createResource\<User, string, undefined\>\(  
fetchUser,  
undefined  
\);  
return \(  
\<div\>  
\</div\>  
\<DisplayUser state=\{state\} /\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
We can enhance our createResource function by implementing features such as re-  
fetching, canceling requests, or optimistic updates. The functions responsible for these  
features can be exposed to the outside world through an array or object, or as properties on  
the accessor of the state signal.  
Solid provides its own createResource function that packs extra features, and it is deeply  
integrated into the core library, working seamlessly with Transitions, Suspense, and  
SuspenseList components.  
In the next chapter, we will take a closer look at the Solid’s createResource function.  
Decoupling Fetching From Rendering | 231 **CHAPTER 25**  
# Using Resource API for Data Fetching  
Solid provides the createResource function for fetching asyncronous data.  
createResource decouples data fetching from rendering. By decoupling we mean, we can  
retrieve data in any scope that is accessible to the component, without waiting for the  
component to be mounted. It is an overloaded function with two forms\:  
const \[data, actions\] = createResource\(fetcher, options\);  
const \[data, actions\] = createResource\(source, fetcher, options\);  
The fetcher function is an asynchronous one and, thus, returns a promise. The state of the  
resource is tracked against this promise value.  
The source is a signal that is intended to transmit data to the fetcher function. It will  
trigger the fetcher function whenever it changes. The name can be confusing at first, but  
you can think of it as a way to pass query parameters to the fetcher function.  
The source signal will retrigger the fetcher whenever it changes, and its value will be passed  
to the fetcher.  
options is an optional parameter that sets resource-related values, such as the initial value  
if there is readily available data to show instead of fetching the resource or turning on the  
streaming support.  
createResource returns an array. The first item in the array is the data accessor, a function  
that returns the requested asynchronous data. It’s a regular signal with extra properties for  
rendering a resource.  
233 Let’s start with a simple example and increase the complexity once we understand the  
basics.  
We will create a fetcher function that returns an asynchronous greeting message. We will  
use a timer to delay the message by a second\:  
function fetchMessage\(\)\: Promise\<string\> \{  
return new Promise\(\(resolve\) =\> \{  
setTimeout\(\(\) =\> resolve\('Hello'\), 1000\);  
\}\);  
\}  
Then create a resource that fetches the message\:  
const \[data\] = createResource\<string\>\(fetchMessage\);  
And then we will render it using the Switch and Match components\:  
\<Switch\>  
\<Match when=\{data.state === 'pending'\}\>Loading\</Match\>  
\<Match when=\{data.state === 'ready'\}\>\{data\(\)\}\</Match\>  
\<Match when=\{data.state === 'errored'\}\>Failed!\</Match\>  
\</Switch\>  
Here is what our application looks like when we put everything together\:  
import \{ Match, Switch, createResource \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
function fetchMessage\(\)\: Promise\<string\> \{  
return new Promise\(\(resolve\) =\> \{  
setTimeout\(\(\) =\> resolve\('Hello'\), 1000\);  
\}\);  
\}  
const App = \(\) =\> \{  
const \[data\] = createResource\<string\>\(fetchMessage\);  
return \(  
\<Switch\>  
\<Match when=\{data.state === 'pending'\}\>Loading\</Match\>  
\<Match when=\{data.state === 'ready'\}\>\{data\(\)\}\</Match\>  
\<Match when=\{data.state === 'errored'\}\>Failed!\</Match\>  
\</Switch\>  
\);  
\};  
234 | Chapter 25. Using Resource API for Data Fetchingrender\(\(\) =\> \<App /\>, document.body\);  
The data accessor returns an async value, which will be undefined until the returned  
promise resolves to a value. It has extra properties\:  
\{  
state\: "unresolved" | "pending" | "ready" | "refreshing" | "errored"  
loading\: boolean;  
error\: any;  
latest\: T | undefined;  
\},  
NOTE  
state returns the state of the asynchronous action.  
loading indicates whether the promise is settled or not.  
error carries the error value when the promise is rejected.  
latest has the last successfully resolved value. Using the latest value, you can show  
the stale data while re-fetching the resource.  
The Solid’s resource API has matured over time. loading is a legacy property from the  
earlier days that has little use after the introduction of the state property.  
Unlike a promise, a Solid resource can be in five different states\: unresolved, pending,  
ready, refreshing, or errored. The additional states, unresolved and refreshing, reflect  
the additional capabilities a resource has.  
We mentioned that the arguments can be passed to the fetcher function through source  
signal. Let’s refactor our example and pass a language value to the fetcher function so that  
we can display a localized message based on the provided language.  
We will return an error if an invalid language value is provided\:  
function fetchMessage\(\{ lang \}\: \{ lang\: string \}\)\: Promise\<string\> \{  
const messages\: Record\<string, string\> = \{  
en\: "Hello",  
fr\: "Bonjour"  
\};  
return new Promise\(\(resolve, reject\) =\> \{  
setTimeout\(\(\) =\> \{  
const message = messages\[lang\];  
if \(!message\) \{  
reject\('Invalid Language'\);  
\} else \{  
Chapter 25. Using Resource API for Data Fetching | 235resolve\(message\);  
\}  
\}, 1000\);  
\}\);  
\}  
In our example, we will directly display the error value to demonstrate how to access it, but  
in a real application, it’s best to display more user-friendly messages\:  
\<Match when=\{data.state === 'errored'\}\>Failed! \{data.error\}\</Match\>  
Next, we will update the createResource call to use the source signal\:  
const \[params, setParams\] = createSignal\(\{ lang\: "en" \}\);  
const \[data\] = createResource\(params, fetchMessage\);  
The order of arguments passed to the createResource is important\: If we are using a source  
signal, it should be passed as the first argument.  
Now, whenever we update the source signal, the resource will be re-fetched automatically.  
Although we used an object for the source value, \{ lang\: "en" \}, we are not required to  
use one, as we could pass the string value directly because any non-falsy value is allowed in  
source signals. However, falsy values cannot be used directly, and this limitation is imposed  
by the resource API.  
We will issue a new request by updating the source signal using an event handler\:  
\(\) =\> setParams\(\{ lang\: "en" \}\)  
We will use buttons to change the language of the message\:  
\<div\>  
Change Language\:  
\<button onClick=\{\(\) =\> setParams\(\{ lang\: "en" \}\)\}\>EN\</button\>  
\{' '\}  
\<button onClick=\{\(\) =\> setParams\(\{ lang\: "fr" \}\)\}\>FR\</button\>  
\{' '\}  
\<button onClick=\{\(\) =\> setParams\(\{ lang\: "ge" \}\)\}\>GE\</button\>  
\</div\>  
Here is the updated version of our application\:  
import \{ render \} from 'solid-js/web';  
236 | Chapter 25. Using Resource API for Data Fetchingimport \{ Match, Switch, createResource, createSignal \} from 'solid-js';  
function fetchMessage\(\{ lang \}\: \{ lang\: string \}\)\: Promise\<string\> \{  
const messages\: Record\<string, string\> = \{  
en\: "Hello",  
fr\: "Bonjour"  
\};  
return new Promise\(\(resolve, reject\) =\> \{  
setTimeout\(\(\) =\> \{  
const message = messages\[lang\]  
if \(!message\) \{  
reject\('Invalid Language'\);  
\} else \{  
resolve\(message\);  
\}  
\}, 1000\);  
\}\);  
\}  
const App = \(\) =\> \{  
const \[params, setParams\] = createSignal\(\{ lang\: "en" \}\);  
const \[data\] = createResource\(params, fetchMessage\);  
return \(  
\<div\>  
\<Switch\>  
\<Match when=\{data.state === 'pending'\}\>Loading\</Match\>  
\<Match when=\{data.state === 'ready'\}\>Data\: \{data\(\)\}\</Match\>  
\<Match when=\{data.state === 'errored'\}\>Failed! \{data.error\}  
\</Match\>  
\<Match when=\{data.state === 'refreshing'\}\>Refetching!\</Match\>  
\</Switch\>  
\<div\>  
Change Language\:  
\<button onClick=\{\(\) =\> setParams\(\{ lang\: "en" \}\)\}\>EN\</button\>  
\{' '\}  
\<button onClick=\{\(\) =\> setParams\(\{ lang\: "fr" \}\)\}\>FR\</button\>  
\{' '\}  
\<button onClick=\{\(\) =\> setParams\(\{ lang\: "ge" \}\)\}\>GE\</button\>  
\</div\>  
\</div\>  
\);  
\};  
Chapter 25. Using Resource API for Data Fetching | 237render\(\(\) =\> \<App /\>, document.body\);  
# Info O  
# bject  
We use the source signal to provide query parameters to the fetcher function. However, the  
value of the source signal is not the only argument the fetcher function receives. There is  
also info object which provides value and refetching properties\:  
function fetchData\(source, info\) \{\}  
value is the current value of the data signal.  
refetching has a bit complex behaviour\:  
It will be true if you issue a fetch request by the refetch method without any argument like  
so\:  
const \[data, \{ mutate, refetch \}\] = createResource\(params,  
fetchMessage\);  
refetch\(\);  
Otherwise, it will have the value that you call the refetch function with\:  
const \[data, \{ mutate, refetch \}\] = createResource\(params,  
fetchMessage\);  
refetch\(\{ page\: 10 \}\);  
# Resource Actions  
If you recall from the earlier lines, the createResource function returns an array with two  
items\: The first one is the data signal which we covered so far. The second one is the  
actions object that has two methods\: refetch and mutate.  
const \[data, \{ mutate, refetch \}\] = createResource\(params,  
fetchMessage\);  
The mutate method directly updates the underlying signal’s value. It’s a plain mutation, not  
an optimistic update, as it overwrites the value without triggering a re-fetch.  
The refetch function, as the name suggests, re-runs the fetcher function. The value we pass  
to the refetch function will be available to the fetcher function via the info object that we  
talked about before.  
238 | Resource Actions **Handling Errors**  
The ErrorBoundary cannot be used to handle rejected promises or errors that occur inside  
an async function because only the synchronous errors can be handled by an error  
boundary. So, we need to rely on data.state to display error messages.  
Alternatively, we can throw the error value that we receive from the fetcher function so that  
it can be caught by the closest ErrorBoundary. By doing so, we will be converting an  
asynchronous error into a synchronous one. We can do this inside a component’s body or  
use an effect like we do in the following code snippet\:  
const \[data\] = createResource\(params, fetchMessage\);  
createEffect\(\(\) =\> \{  
if \(data.state === 'errored'\) \{  
throw data.error;  
\}  
\}\);  
Remember, Solid runs synchronously, only synchronous errors can be handled by the Solid’s  
error handling mechanism, because when an asynchronous error is thrown, synchronous  
execution will be completed long ago.  
Another important detail is that ErrorBoundary should wrap the component that throws the  
error. Here, if Message throws an error, it will be caught by the error boundary\:  
\<ErrorBoundary fallback=\{\<div\>Error Occurred!\</div\>\}\>  
\<Message /\>  
\</ErrorBoundary\>  
Returning the ErrorBoundary from the component will not work because the error will be  
thrown before the ErrorBoundary component is executed. So, this code will not work\:  
const Message = \(\) =\> \{  
const \[data\] = createResource\(params, fetchMessage\);  
createEffect\(\(\) =\> \{  
if \(data.state === 'errored'\) \{  
throw data.error;  
\}  
\}\);  
return \(  
\<ErrorBoundary fallback=\{\<div\>Error Occurred!\</div\>\}\>  
Handling Errors | 239\<Switch\>\{/\* Snipped for brevity \*/\}\</Switch\>  
\</ErrorBoundary\>  
\);  
\}  
That is because, in the compiled code, Solid runs the props.children first to get the child  
value so that it can be passed to the parent component. In our case ErrorBoundary will be  
executed before the Message component is rendered.  
Let’s repeat the example from the previous module but this time we will use the resource API  
to fetch the user data from the /user.json file\:  
We will keep only the fetchUser function from that example because the rest of the code  
will be different\:  
interface User \{  
name\: string;  
age\: number;  
\}  
function fetchUser\(\) \{  
return new Promise\<User\>\(\(resolve, reject\) =\> \{  
fetch\('/src/user.json'\)  
.then\(\(response\) =\>  
response.ok  
? response.json\(\)  
\: Promise.reject\(\{  
code\: response.status,  
message\: response.statusText,  
\}\),  
\)  
.then\(\(data\: User\) =\> \{  
resolve\(data\);  
\}\)  
.catch\(\(err\: Error\) =\> \{  
reject\(err.message\);  
\}\);  
\}\);  
\}  
Let’s fetch the resource\:  
const \[data, actions\] = createResource\<User\>\(fetchUser\);  
We will use the Switch and Match components for the UI\:  
240 | Handling Errorsreturn \(  
\<div\>  
\<Switch\>  
\<Match when=\{data.state === 'pending'\}\>  
\<div\>Fetching...\</div\>  
\</Match\>  
\<Match when=\{data.state === 'errored'\}\>  
\<div\>Error Occurred\: \{resource.error\}\</div\>  
\</Match\>  
\<Match when=\{data.state === 'ready'\}\>  
\<div\>UserName\: \{data\(\)!.name\}\</div\>  
\<div\>Age\: \{data\(\)!.age\}\</div\>  
\</Match\>  
\</Switch\>  
\</div\>  
\);  
Here is the updated version of our application with all the changes implemented\:  
import \{  
Match,  
Switch,  
createResource  
\} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
interface User \{  
name\: string;  
age\: number;  
\}  
function fetchUser\(\) \{  
return new Promise\<User\>\(\(resolve, reject\) =\> \{  
fetch\('/src/user.json'\)  
.then\(\(response\) =\>  
response.ok  
? response.json\(\)  
\: Promise.reject\(\{  
code\: response.status,  
message\: response.statusText,  
\}\),  
\)  
.then\(\(data\: User\) =\> \{  
resolve\(data\);  
Handling Errors | 241\}\)  
.catch\(\(err\: Error\) =\> \{  
reject\(err.message\);  
\}\);  
\}\);  
\}  
export const App = \(\) =\> \{  
const \[resource, actions\] = createResource\<User\>\(fetchUser\);  
return \(  
\<div\>  
\<Switch\>  
\<Match when=\{resource.state === 'pending'\}\>  
\<div\>Fetching...\</div\>  
\</Match\>  
\<Match when=\{resource.state === 'errored'\}\>  
\<div\>Error Occurred\: \{resource.error\}\</div\>  
\</Match\>  
\<Match when=\{resource.state === 'ready'\}\>  
\<div\>UserName\: \{resource\(\)!.name\}\</div\>  
\<div\>Age\: \{resource\(\)!.age\}\</div\>  
\</Match\>  
\</Switch\>  
\</div\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
Once the resource state becomes ready, data will be guaranteed to exist, that is why it is  
safe to use non-null assertion on the user data.  
Let’s have one more example, but this time we will use query parameters and actions and  
everything we’ve learned so far\:  
We will have a list of books, from which we will return a limited number of items so that we  
can paginate over them.  
const books = \[  
\{ title\: 'Anne of Green Gables', author\: 'Lucy Maud Montgomery' \},  
\{ title\: 'Charlotte’s Web', author\: 'E.B. White' \},  
\{ title\: 'War and Peace', author\: 'Leo Tolstoy' \},  
\{ title\: 'The Hours', author\: 'Michael Cunningham' \},  
\{ title\: 'Huckleberry Finn', author\: 'Mark Twain' \},  
242 | Handling Errors\{ title\: 'Bleak House', author\: 'Charles Dickens' \},  
\{ title\: 'Tom Sawyer', author\: 'Mark Twain' \},  
\{ title\: 'A Room of One’s Own', author\: 'Virginia Woolf' \},  
\{ title\: 'One Hundred Years of Solitude', author\: 'G.G. Marquez' \},  
\{ title\: 'Hamlet, Prince of Denmark', author\: 'Shakespeare' \},  
\{ title\: 'The Lord of the Rings', author\: 'J.R. Tolkien' \},  
\];  
We will use a signal to store the query parameters. The page value will control the page  
number to be displayed and the limit value will set the number of items to be retrieved\:  
type QueryParams = \{ page\: number; limit\: number \};  
const \[queryParams, setQueryParams\] = createSignal\<QueryParams\>\(\{  
page\: 0,  
limit\: 3,  
\}\);  
Next, we will create the fetcher function. The fetcher function receives the query  
parameters as arguments and returns a filtered list based on those parameters. We will  
implement its body in a moment\:  
const fetcher = \(params\: QueryParams\) =\> \{\};  
Then, we will create a resource that uses queryParams and the fetcher function we created  
earlier\:  
const \[data, \{ refetch \}\] = createResource\(queryParams, fetcher\);  
We destructured the actions object to get the refetch method. We won’t use mutate for this  
example.  
Now that we know the fetcher function receives queryParams, we will go ahead and  
implement it.  
const fetcher = \(params\: QueryParams\) =\> \{  
const \{ page, limit \} = params;  
const items = books.filter\(\(\_item, index\) =\> \{  
return index \>= limit \* page && index \< \(page + 1\) \* limit;  
\}\);  
return new Promise\(\(resolve, reject\) =\> \{  
setTimeout\(\(\) =\> resolve\(items\), 500\);  
\}\);  
Handling Errors | 243\};  
We will introduce a short delay via a setTimeout call.  
Let’s implement the buttons for pagination but we do not guard against invalid page numbers  
for simplicity\:  
const prev = \(\) =\> \{  
setQueryParams\(\(state\: QueryParams\) =\> \(\{ ...state, page\: state.page  
- 1 \}\)\);  
\};  
const next = \(\) =\> \{  
setQueryParams\(\(state\: QueryParams\) =\> \(\{ ...state, page\: state.page  
+ 1 \}\)\);  
\};  
Here is how we are going to use the pagination buttons in the UI\:  
\<div\>  
\<button onClick=\{prev\}\>Prev\</button\>  
\<button onClick=\{next\}\>Next\</button\>  
\<button onClick=\{refetch\}\>Refetch\</button\>  
\</div\>  
The first callback increments the page number while the second one decrements it. The  
refetch callback is the one that was returned from createResource.  
Here is the final look of our application\:  
import \{  
createResource,  
createSignal,  
ErrorBoundary,  
Match,  
Switch,  
\} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const books = \[  
\{ title\: 'Anne of Green Gables', author\: 'Lucy Maud Montgomery' \},  
\{ title\: 'Charlotte’s Web', author\: 'E.B. White' \},  
\{ title\: 'War and Peace', author\: 'Leo Tolstoy' \},  
\{ title\: 'The Hours', author\: 'Michael Cunningham' \},  
\{ title\: 'Huckleberry Finn', author\: 'Mark Twain' \},  
244 | Handling Errors\{ title\: 'Bleak House', author\: 'Charles Dickens' \},  
\{ title\: 'Tom Sawyer', author\: 'Mark Twain' \},  
\{ title\: 'A Room of One’s Own', author\: 'Virginia Woolf' \},  
\{ title\: 'One Hundred Years of Solitude', author\: 'G.G. Marquez' \},  
\{ title\: 'Hamlet, Prince of Denmark', author\: 'Shakespeare' \},  
\{ title\: 'The Lord of the Rings', author\: 'J.R. Tolkien' \},  
\];  
type QueryParams = \{ page\: number; limit\: number \};  
const \[queryParams, setQueryParams\] = createSignal\<QueryParams\>\(\{  
page\: 0,  
limit\: 3,  
\}\);  
const fetcher = \(params\: QueryParams\) =\> \{  
const \{ page, limit \} = params;  
const items = books.filter\(\(\_item, index\) =\> \{  
return index \>= limit \* page && index \< \(page + 1\) \* limit;  
\}\);  
return new Promise\(\(resolve, reject\) =\> \{  
setTimeout\(\(\) =\> resolve\(items\), 500\);  
\}\);  
\};  
const App = \(\) =\> \{  
const \[data, \{ refetch \}\] = createResource\(queryParams, fetcher\);  
const prev = \(\) =\> \{  
setQueryParams\(\(state\: QueryParams\) =\> \(\{  
...state,  
page\: state.page - 1,  
\}\)\);  
\};  
const next = \(\) =\> \{  
setQueryParams\(\(state\: QueryParams\) =\> \(\{  
...state,  
page\: state.page + 1,  
\}\)\);  
\};  
return \(  
Handling Errors | 245\<ErrorBoundary fallback=\{\(err\) =\> \<div\>Error! \$\{String\(err\)\}  
\</div\>\}\>  
\<Switch\>  
\<Match when=\{data.state === 'pending' || data.state ===  
'refreshing'\}\>  
Loading  
\</Match\>  
\<Match when=\{data.state === 'ready'\}\>  
\<div\>\{JSON.stringify\(data\(\)\)\}\</div\>  
\<div\>  
\<button onClick=\{prev\}\>Prev\</button\>  
\<button onClick=\{next\}\>Next\</button\>  
\<button onClick=\{refetch\}\>Refetch\</button\>  
\</div\>  
\</Match\>  
\</Switch\>  
\</ErrorBoundary\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
We output resource data using JSON.stringify to simplify the display.  
In our example, we did not use custom page numbers, but as an exercise, you can create an  
input element to pass a custom page number to the fetcher function via the refetch  
method.  
So far we’ve used a single resource in our applications but a single resource will not be  
enough for an actual application. Real-world applications often require multiple  
interdependent resources. One resource may be needed to fetch another one, creating a  
complex web of dependencies.  
By utilizing resources, we have successfully separated data fetching from the rendering logic,  
addressing a crucial challenge. But data fetching is only half of the puzzle. Now it is time to  
solve the other half\: Coordinated rendering.  
In the next chapter, we will learn how to coordinate rendering of multiple resources,  
avoiding falling back to the pending state while waiting for the fresh data.  
246 | Handling Errors **CHAPTER 26**  
# Managing Loading States with Suspense  
The Suspense component allows us to display a single loading indicator for multiple pending  
resources. It acts as a boundary, hiding its children until the resources they use have  
resolved to a value.  
Let’s start with a simple example.  
In this example, we retrieve the same resource multiple times, introducing a random delay to  
make them resolve at different times. We will use the fallback prop to show an alternate  
component while the resources are being fetched\:  
const fetcher\: \(\) =\> Promise\<number\> = \(\) =\> \{  
const rand = Math.round\(Math.random\(\) \* 1000\);  
return new Promise\(\(resolve\) =\> \{  
setTimeout\(\(\) =\> resolve\(rand\), rand\);  
\}\);  
\};  
const App = \(\) =\> \{  
const \[data1\] = createResource\(fetcher\);  
const \[data2\] = createResource\(fetcher\);  
const \[data3\] = createResource\(fetcher\);  
return \(  
\<Suspense fallback=\{\<div\>Loading...\</div\>\}\>  
\<div\>data1\: \{data1\(\)\}\</div\>  
\<div\>data2\: \{data2\(\)\}\</div\>  
\<div\>data3\: \{data3\(\)\}\</div\>  
\</Suspense\>  
247\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
The children of the Suspense component will be revealed when all the underlying resources  
have resolved to a value.  
Suspense has an internal contract with the resource API. Suspense tracks a resource upon  
reading it and shows the fallback component until all the tracked resources resolve to a value  
or one of them fails.  
Suspense can track any resource found in the downstream components, as long as they are  
not wrapped in another Suspense component.  
import \{ Suspense, createResource \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const fetcher\: \(\) =\> Promise\<number\> = \(\) =\> \{  
const rand = Math.round\(Math.random\(\) \* 1000\);  
return new Promise\(\(resolve\) =\> \{  
setTimeout\(\(\) =\> resolve\(rand\), rand\);  
\}\);  
\};  
const Data = \(\) =\> \{  
const \[data\] = createResource\(fetcher\);  
return \<div\>data\: \{data\(\)\}\</div\>;  
\};  
const App = \(\) =\> \{  
return \(  
\<Suspense fallback=\{\<div\>Loading...\</div\>\}\>  
\<Data /\>  
\<Data /\>  
\<Data /\>  
\</Suspense\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
Reading a pending resource triggers the fallback state. If the resource is never read, the  
suspense boundary will never be triggered. For example, the fallback component will never  
be displayed for the following Suspense component\:  
248 | Chapter 26. Managing Loading States with Suspense\<Suspense fallback=\{\<div\>Loading...\</div\>\}\>  
\<div\>Some Component\</div\>  
\</Suspense\>  
The Suspense component handles the pending state, but failed resources require error  
handling too, either using an ErrorBoundary, catchError, or other custom methods.  
const fetcher\: \(\) =\> Promise\<number\> = \(\) =\> \{  
const rand = Math.round\(Math.random\(\) \* 1000\);  
return new Promise\(\(resolve, reject\) =\> \{  
setTimeout\(  
\(\) =\> \(rand \> 500 ? resolve\(rand\) \: reject\(\`Condition Failed\`\)\),  
rand,  
\);  
\}\);  
\};  
const App = \(\) =\> \{  
const \[data1\] = createResource\(fetcher\);  
const \[data2\] = createResource\(fetcher\);  
const \[data3\] = createResource\(fetcher\);  
return \(  
\<ErrorBoundary fallback=\{\(err\) =\> \<div\>Error\: \{String\(err\)\}\</div\>\}\>  
\<Suspense fallback=\{\<div\>Loading...\</div\>\}\>  
\<div\>data1\: \{data1\(\)\}\</div\>  
\<div\>data2\: \{data2\(\)\}\</div\>  
\<div\>data3\: \{data3\(\)\}\</div\>  
\</Suspense\>  
\</ErrorBoundary\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
Here, we used an ErrorBoundary to handle possible errors. The fallback component from  
ErrorBoundary becomes visible as soon as one of the resources fails.  
However, we are not limited to using ErrorBoundary for displaying error messages; we can  
also utilize control flow components such as Show, or combinations of Switch and Match.  
For instance, here we use the error value from the resource to display a message\:  
\<Show when=\{!data1.error\} fallback=\{\<div\>Yuck, it failed!\</div\>\}\>  
\<div\>data1\: \{data1\(\)\}\</div\>  
Chapter 26. Managing Loading States with Suspense | 249\</Show\>  
We said that a Suspense component needs to read a resource in order to track it. This has  
certain implications for non-primitive values, like objects. Since data starts as undefined  
and resolves to a value later, asynchronously, we need to guard against the undefined value.  
For example, if our resource signal returns a user object with name and age properties, we  
should access those properties only after the resource has resolved to a value. Otherwise, we  
will encounter an error due to accessing a property on an undefined value\:  
import \{ Suspense, createResource \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const fetcher = async \(\) =\> \{  
return \{ name\: 'John Doe', age\: 30 \};  
\};  
const App = \(\) =\> \{  
const \[\] = createResource\(fetcher\);  
const \[user\] = createResource\(fetcher\);  
return \(  
\<Suspense fallback=\{\<div\>Loading...\</div\>\}\>  
\<div\>Name\: \{user\(\).name\}\</div\>  
\</Suspense\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
TypeScript will also warn us against the undefined value\:  
Object is possibly 'undefined'  
To prevent errors, we can use the optional chaining operator\:  
\<Suspense fallback=\{\<div\>Loading...\</div\>\}\>  
\<div\>Name\: \{user\(\)?.name\}\</div\>  
\<div\>Age\: \{user\(\)?.age\}\</div\>  
\</Suspense\>  
We could also use a Show component since it protects against the undefined value\:  
\<Suspense fallback=\{\<div\>Loading...\</div\>\}\>  
\<Show when=\{data\(\)\}\>\{data\(\).name\}\</Show\>  
\</Suspense\>  
250 | Chapter 26. Managing Loading States with SuspenseSuspense components can be nested, but the inner Suspense does not trigger the fallback  
of the outer one. In other words, each Suspense independently tracks its own resources, so  
the outer Suspense will display its children even if the inner one is still pending.  
import \{ Suspense, createResource \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const fetcher\: \(\) =\> Promise\<number\> = \(\) =\> \{  
const rand = Math.round\(Math.random\(\) \* 1000\);  
return new Promise\(\(resolve\) =\> \{  
setTimeout\(\(\) =\> resolve\(rand\), rand\);  
\}\);  
\};  
const Data = \(\) =\> \{  
const \[data1\] = createResource\(fetcher\);  
return \<div\>data1\: \{data1\(\)\}\</div\>;  
\};  
const ChildSuspense = \(\) =\> \{  
return \(  
\<div\>  
\<Suspense fallback=\{\<div\>Loading child...\</div\>\}\>  
\<Data /\>  
\<Data /\>  
\<Data /\>  
\</Suspense\>  
\</div\>  
\);  
\};  
const App = \(\) =\> \{  
return \(  
\<div\>  
\<Suspense fallback=\{\<div\>Loading parent...\</div\>\}\>  
\<div\>Parent Component\</div\>  
\<ChildSuspense /\>  
\</Suspense\>  
\</div\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
Chapter 26. Managing Loading States with Suspense | 251 Now that we have solved the issue of multiple loading indicators, we are left with one  
remaining challenge\: ensuring the UI consistency during re-fetches.  
252 | Chapter 26. Managing Loading States with Suspense **CHAPTER 27**  
# Achieving Better Consistenc  
# y with  
# Transitions  
In this chapter, we will explore the importance of maintaining UI consistency during  
asynchronous updates. To illustrate the problem, let’s revisit the example from Chapter 25\:  
Using Resource API for Data Fetching, where we rendered a list of books.  
In that chapter, we fetched items from a larger dataset and used query parameters, like page  
and limit, to control which items appeared on the list. Let’s assume the first page is loaded,  
and the books are displayed. What happens next? To make it more concrete, when the user  
clicks the “Next” button to load the subsequent page, what’s the best way to maintain UI  
consistency while transitioning from the current state to the new one? Should we discard  
the rendered items and fall back to the loading state, or should we continue displaying the  
old items while the new ones are being fetched?  
If we opt for the former—falling back to a loading state—then we show a loading indicator,  
fetch, and render the next batch of data. Everything functions as expected, but the user  
experience suffers. Removing the previous content can feel jarring, as users lose their sense  
of continuity and context in the interface.  
What if we decide to keep the old data, perhaps with reduced opacity and a message  
indicating that the new books are being fetched? Do we show the old query parameters, the  
ones we used to render data or the new ones, the ones that we used for the ongoing  
promise? This is the problem we aim to solve in this chapter.  
253 If we show the new query parameters, it can be confusing for users, as they see updated  
parameters without corresponding data. On the other hand, if we use the old query  
parameters, we’ll need an external variable to store them, since the source signal is reactive.  
When it changes, it updates everywhere, including the UI.  
If we add an extra variable to store the previous query parameters, our UI code becomes  
more complex. We now need to track this variable and ensure it stays accurate and up-to-  
date.  
Solid offers the transition API to solve this very specific problem, so that the query  
parameters we display in the UI always match the data that is rendered.  
To use a transition, we need to update the source signal through the transition API. This is  
very important because directly updating the source signal will bypass the transition path.  
const \[params, setParams\] = createSignal\(\{ page\: 0, limit\: 3 \}\);  
const \[isPending, startTransition\] = useTransition\(\);  
startTransition\(\(\) =\> setQueryParams\(nextParams\)\);  
The way transitions work is quite simple. When invoked via startTransition, Solid updates  
the signal's value without immediately notifying its subscribers, instead placing them in a  
separate transition queue to ensure they are not run until the resource resolves. Solid then  
re-runs the fetcher function. Once the fetcher function completes, Solid processes the  
transition queue, executing the queued subscribers in sequence. This way, the UI updates  
cohesively after the async operation completes.  
Async transitions improve the user experience by avoiding mid-transition updates and visual  
flickering.  
The isPending value that is returned from the useTransition function shows if there are  
any pending transitions, in case you need an indicator that is directly tied to the transition  
API.  
\<Show when=\{data\}\>  
\<div style=\{\{ 'opacity'\: isPending\(\) ? 0.5 \: 1 \}\}\>  
\{JSON.stringify\(data\(\)\)\}  
\</div\>  
\</Show\>  
If you don’t need the isPending value, you can use the startTransition function from the  
core module, instead of useTransition\:  
254 | Chapter 27. Achieving Better Consistenc  
y with Transitionsimport \{ startTransition \} from 'solid-js';  
startTransition\(\(\) =\> setQueryParams\(nextParams\)\);  
Transitions interact with a resource through the Suspense API, so they work only under a  
Suspense component.  
It is time to update our example to use transitions. We don’t need to use latest value or  
check if resource.state is refreshing since we are using transitions now.  
import \{  
createResource,  
createSignal,  
ErrorBoundary,  
Show,  
startTransition,  
Suspense,  
\} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const books = \[  
\{ title\: 'Anne of Green Gables', author\: 'Lucy Maud Montgomery' \},  
\{ title\: 'Charlotte’s Web', author\: 'E.B. White' \},  
\{ title\: 'War and Peace', author\: 'Leo Tolstoy' \},  
\{ title\: 'The Hours', author\: 'Michael Cunningham' \},  
\{ title\: 'Huckleberry Finn', author\: 'Mark Twain' \},  
\{ title\: 'Bleak House', author\: 'Charles Dickens' \},  
\{ title\: 'Tom Sawyer', author\: 'Mark Twain' \},  
\{ title\: 'A Room of One’s Own', author\: 'Virginia Woolf' \},  
\{ title\: 'One Hundred Years of Solitude', author\: 'G.G. Marquez' \},  
\{ title\: 'Hamlet, Prince of Denmark', author\: 'Shakespeare' \},  
\{ title\: 'The Lord of the Rings', author\: 'J.R. Tolkien' \},  
\];  
type QueryParams = \{ page\: number; limit\: number \};  
const fetcher = \(params\: QueryParams\) =\> \{  
const \{ page, limit \} = params;  
const items = books.filter\(\(\_item, index\) =\> \{  
return index \>= limit \* page && index \< \(page + 1\) \* limit;  
\}\);  
return new Promise\(\(resolve, reject\) =\> \{  
setTimeout\(\(\) =\> resolve\(items\), 500\);  
Chapter 27. Achieving Better Consistenc  
y with Transitions | 255\}\);  
\};  
const App = \(\) =\> \{  
const \[queryParams, setQueryParams\] = createSignal\<QueryParams\>\(\{  
page\: 0,  
limit\: 3,  
\}\);  
const \[data, \{ refetch \}\] = createResource\(queryParams, fetcher\);  
const prev = \(\) =\> \{  
startTransition\(\(\) =\> \{  
const state = queryParams\(\);  
setQueryParams\(\{  
...state,  
page\: state.page - 1,  
\}\);  
\}\);  
\};  
const next = \(\) =\> \{  
const state = queryParams\(\);  
startTransition\(\(\) =\> \{  
setQueryParams\(\{  
...state,  
page\: state.page + 1,  
\}\);  
\}\);  
\};  
return \(  
\</div\>\}\>  
\<ErrorBoundary fallback=\{\(err\) =\> \<div\>Error! \$\{String\(err\)\}  
\<Suspense fallback=\{\<div\>Loading...\</div\>\}\>  
\<Show when=\{data\}\>  
\<div\>\{JSON.stringify\(data\(\)\)\}\</div\>  
\</Show\>  
\<div\>\{JSON.stringify\(queryParams\(\)\)\}\</div\>  
\<div\>  
\<button onClick=\{prev\}\>Prev\</button\>  
\<button onClick=\{next\}\>Next\</button\>  
\<button onClick=\{refetch\}\>Refetch\</button\>  
\</div\>  
\</Suspense\>  
256 | Chapter 27. Achieving Better Consistenc  
y with Transitions\</ErrorBoundary\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
Let’s have another example where we use tabs to display data. We will start without  
transitions and introduce them later, once we are settled with the functionality. Notice how  
the tab value stays in sync with the displayed data.  
import \{ render \} from 'solid-js/web';  
import \{  
createResource,  
createSignal,  
ErrorBoundary,  
Show,  
Suspense,  
\} from 'solid-js';  
const content = \[  
'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod totam  
dolorem, fugiat odit necessitatibus.',  
'Mollitia, ea veritatis, nulla minus aperiam commodi, provident  
voluptas necessitatibus earum praesentium.',  
'Aliquam error illum nemo molestiae, optio maxime fuga repellendus  
eum ullam dolores itaque debitis.',  
\];  
\{  
const fetcher\: \(index\: number\) =\> Promise\<string\> = \(index\: number\) =\>  
return new Promise\(\(resolve, reject\) =\> \{  
setTimeout\(\(\) =\> \{  
index \>= 0 && index \< content.length  
? resolve\(content\[index\]\)  
\: reject\('Not found'\);  
\}, 1000\);  
\}\);  
\};  
const style =  
\`  
.tabs \{  
display\: flex;  
gap\: 5px;  
list-style\: none;  
margin\: 0;  
Chapter 27. Achieving Better Consistenc  
y with Transitions | 257padding\: 0;  
border-bottom\: 1px solid gray;  
\}  
.tabs \> li \{  
cursor\: pointer;  
border-bottom\: 2px solid transparent;  
\}  
.tabs \> li.active \{  
border-color\: green;  
color\: green;  
\}  
.tab \{  
background-color\: \#eee;  
padding\: 1rem;  
\}  
\`;  
const App = \(\) =\> \{  
const \[tab, setTab\] = createSignal\(0\);  
const \[data\] = createResource\(tab, fetcher\);  
const updateTab = \(value\: number\) =\> \(\) =\> \{  
setTab\(value\);  
\};  
return \(  
\<ErrorBoundary fallback=\{\(err\) =\> \<div\>Error\: \{String\(err\)\}\</div\>\}\>  
\<style\>\{style\}\</style\>  
\<ul class="tabs"\>  
\<li classList=\{\{ active\: tab\(\) === 0 \}\} onclick=  
\{updateTab\(0\)\}\>One\</li\>  
\<li classList=\{\{ active\: tab\(\) === 1 \}\} onclick=  
\{updateTab\(1\)\}\>Two\</li\>  
\<li classList=\{\{ active\: tab\(\) === 2 \}\} onclick=  
\{updateTab\(2\)\}\>Three\</li\>  
\</ul\>  
\<Suspense fallback=\{\<div\>Loading...\</div\>\}\>  
\<Show when=\{data\(\)\} fallback=\{\<div\>No content to display!  
\</div\>\}\>  
\<div class="tab"\>\{data\(\)\}\</div\>  
\</Show\>  
\</Suspense\>  
258 | Chapter 27. Achieving Better Consistenc  
y with Transitions\</ErrorBoundary\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
In the initial implementation, the active tab changes immediately when switching tabs. Now,  
let’s create a transition around the tab signal.  
const App = \(\) =\> \{  
const \[tab, setTab\] = createSignal\(0\);  
const \[data\] = createResource\(tab, fetcher\);  
const \[pending, startTransition\] = useTransition\(\);  
const updateTab = \(value\: number\) =\> \(\) =\> \{  
startTransition\(\(\) =\> setTab\(value\)\);  
\};  
return \(  
\<ErrorBoundary fallback=\{\(err\) =\> \<div\>Error\: \{String\(err\)\}\</div\>\}\>  
\<style\>\{style\}\</style\>  
\<ul class='tabs'\>  
\<li classList=\{\{ active\: tab\(\) === 0 \}\} onclick=  
\{updateTab\(0\)\}\>One\</li\>  
\<li classList=\{\{ active\: tab\(\) === 1 \}\} onclick=  
\{updateTab\(1\)\}\>Two\</li\>  
\<li classList=\{\{ active\: tab\(\) === 2 \}\} onclick=  
\{updateTab\(2\)\}\>Three\</li\>  
\</ul\>  
\<Suspense fallback=\{\<div\>Loading...\</div\>\}\>  
\<Show when=\{data\(\)\} fallback=\{\<div\>No Content\</div\>\}\>  
\<div class='tab' style=\{\{ 'opacity'\: pending\(\) ? 0.6 \: 1 \}\}\>  
\{data\(\)\}\</div\>  
\</Show\>  
\</Suspense\>  
\</ErrorBoundary\>  
\);  
\};  
Now, the tab value and the displayed content are always in sync, offering a better user  
experience.  
Chapter 27. Achieving Better Consistenc  
y with Transitions | 259 **CHAPTER 28**  
# Coordinating Loading States  
The SuspenseList component allows us to control the order in which Suspense  
components and other SuspenseList components are revealed. The supported reveal  
orders are forwards, backwards and together.  
As you might guess, forwards reveals components from top to bottom, backwards reveals  
them from bottom to top, and together reveals all at once once all underlying resources  
have resolved.  
import \{  
createResource,  
ErrorBoundary,  
Suspense,  
SuspenseList  
\} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const fetcher\: \(\) =\> Promise\<number\> = \(\) =\> \{  
const rand = Math.round\(Math.random\(\) \* 2000\);  
return new Promise\(\(resolve\) =\> \{  
setTimeout\(\(\) =\> resolve\(rand\), rand\);  
\}\);  
\};  
const App = \(\) =\> \{  
const \[data1\] = createResource\(fetcher\);  
const \[data2\] = createResource\(fetcher\);  
const \[data3\] = createResource\(fetcher\);  
261return \(  
\<ErrorBoundary fallback=\{\(err\) =\> \<div\>Error\: \{String\(err\)\}\</div\>\}\>  
\<SuspenseList revealOrder="forwards" tail="collapsed"\>  
\<Suspense fallback=\{\<div\>Loading 1...\</div\>\}\>  
\<div\>data1\: \{data1\(\)\}\</div\>  
\</Suspense\>  
\<Suspense fallback=\{\<div\>Loading 2...\</div\>\}\>  
\<div\>data2\: \{data2\(\)\}\</div\>  
\</Suspense\>  
\<Suspense fallback=\{\<div\>Loading 3...\</div\>\}\>  
\<div\>data3\: \{data3\(\)\}\</div\>  
\</Suspense\>  
\</SuspenseList\>  
\</ErrorBoundary\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
The tail prop controls the visibility of loading indicators for the suspended components\:  
undefined shows all fallbacks.  
collapsed shows only the next fallback in the list.  
hidden hides all fallback items.  
The SuspenseList is an experimental component and it does not have full SSR support yet.  
262 | Chapter 28. Coordinating Loading States **Code Splitting and**  
# Lazy  
# CHAPTER 29  
# Loading  
Latency is a deciding factor for many internet users. If a webpage takes too long to load,  
users may close it and move on to another website.  
Many factors contribute to the slowness of a webpage, including shipping large code  
bundles, fetching non-essential resources during the initial page load, and performing non-  
critical tasks during rendering.  
In this chapter, we will explore ways to enhance application performance by optimizing the  
initial loading time through code splitting.  
Screen size is a limited asset. While we may add more and more features to our application,  
we can only display a certain amount of data at a time because we are constrained by the  
viewport of the user’s device.  
As developers, we can leverage this limitation to our advantage. We can ship the bare  
minimum for the initial page load and fetch the rest later as the user needs it. This approach,  
commonly referred to as lazy loading, not only helps to reduce the initial loading time but  
also enhances the overall performance of the application.  
When you build a JavaScript application, all your code gets bundled together into one large  
file. This includes all your components, third-party libraries, and any other dependencies.  
Code splitting allows us to split this large bundle into smaller chunks and load these chunks  
dynamically when they are needed, rather than loading them upfront.  
Solid provides the lazy function for loading components when they are needed.  
263 For the next example, we will split our application into two parts\: eager and lazy. The App  
component will contain the eager parts, which will be visible to the user upon loading. The  
Dialog component, on the other hand, will be loaded lazily, as it requires user interaction,  
such as clicking a button, to become visible.  
Let’s start with the Dialog component. There is nothing fancy here, it is just a regular  
component that is exported as the default module.  
import \{ type Component \} from 'solid-js';  
const Dialog\: Component\<\{message\: string\}\> = \(props\) =\> \{  
return \(  
\<div\>Message\: \{props.message\}\</div\>  
\);  
\};  
export default Dialog;  
We will import it into our main module using the lazy function\:  
import \{ Show, createSignal, lazy \} from 'solid-js';  
const Dialog = lazy\(\(\) =\> import\('./Dialog'\)\);  
We will wrap the Dialog component in a Show component so that it becomes visible when  
the user toggles the show state\:  
import \{ render \} from 'solid-js/web';  
import \{ Show, createSignal, lazy \} from 'solid-js';  
const Dialog = lazy\(\(\) =\> import\('./Dialog'\)\);  
export const App = \(\) =\> \{  
const \[show, setShow\] = createSignal\(false\);  
return \(  
\<div\>  
\<button onclick=\{\(\) =\> setShow\(prev =\> !prev\)\}\>Toggle\</button\>  
\<Show when=\{show\(\)\}\>  
\<Dialog message="Hi, you’ve got a message" /\>  
\</Show\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
264 | Chapter 29. Code Splitting and  
Lazy  
Loading Run the application, open your browser’s developer tools, and switch to the Network Tab  
before toggling the show state. You will see that Dialog.tsx is loaded when you click the  
button.  
If you toggle the state before opening the Network Tab, you may not see the network call.  
This is because the browser caches the module. In such cases, refresh the page to observe  
the network call.  
Solid relies on the bundler for code splitting. Code splitting is done through dynamic  
imports, import\('./Dialog'\), and all modern bundlers support code splitting. The bundler  
will create a separate file for any dynamically imported module. The lazy function fetches  
this file when it is called.  
NOTE  
The import\(\) syntax, also known as dynamic import, is a function-like expression that  
allows loading an ECMAScript module asynchronously and dynamically into a potentially  
non-module environment.  
Unlike the declaration-style counterpart, dynamic imports are only evaluated when  
needed, and permit greater syntactic flexibility.  
import\(moduleName\)  
The import\(\) call is a syntax that closely resembles a function call, but import itself is a  
keyword, not a function. You cannot alias it like const myImport = import, which will  
throw a SyntaxError.  
https\://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import  
The lazy function will trigger the Suspense boundary when it is used under a Suspense  
component. There are a few important points to keep in mind when working with lazy-  
loaded modules\:  
You cannot pass the module path to the lazy function directly but need to use a callback  
function because the module will be loaded through the invocation of this callback.  
The lazy function only supports default module imports and cannot directly handle named  
imports. However, there is a simple workaround by chaining the returned promise\:  
const Dialog = lazy\(\(\) =\> import\('./Dialog'\)  
.then\(\(\{ Dialog \}\) =\> \(\{ default\: Dialog \}\)\)\);  
To see this in action, let us update the Dialog component to use a named export\:  
Chapter 29. Code Splitting and  
Lazy  
Loading | 265export const Dialog\: Component\<\{message\: string\}\> = \(props\) =\> \{  
return \(  
\<div\>Message\: \{props.message\}\</div\>  
\);  
\};  
This works because the lazy function expects a promise that returns an object with a  
default property. It is implemented as a thin wrapper around a fetcher function that works  
not only with components but also with any JavaScript module.  
WARNING  
Web browsers cache the response of a failed request and will not issue a new fetch  
request unless the page is refreshed. To work around this limitation, Vite appends a  
timestamp to the module path, forcing browsers to re-fetch the file.  
Dialog.tsx?t=1687785095553  
This solution works only during development and is omitted in production code to allow  
the browser to cache the module file.  
Lazy loading and code splitting are crucial optimization techniques for Solid applications,  
especially as they increase in size and complexity.  
Lazy loading is commonly used in routers to load only the components or pages required for  
the current route. Instead of loading the entire application upfront, routers can dynamically  
import components as users navigate between different parts of the app. This technique  
reduces the initial load time and improves performance, especially in large applications with  
many routes.  
In the following example, the Blog component is lazy-loaded and rendered when the user  
navigates to /blog\:  
import \{ lazy \} from "solid-js";  
import \{ Router, Route \} from "@solidjs/router";  
const Home = \(\) =\> import\("./Home"\);  
const Users = lazy\(\(\) =\> import\("./Users"\)\);  
const Blog = lazy\(\(\) =\> import\("./Blog"\)\);  
const App = \(\) =\> \(  
\<Router\>  
\<Route path="/" component=\{\<Home /\>\} /\>  
\<Route path="/users" component=\{\<Users /\>\} /\>  
\<Route path="/blog" component=\{\<Blog /\>\} /\>  
\</Router\>  
266 | Chapter 29. Code Splitting and  
Lazy  
Loading\);  
However, like any tool, code splitting should be used judiciously. Lazy loading too many small  
components can add unnecessary complexity and slow down user interactions.. It's best to  
implement lazy loading at the route level, for resource-intensive components, or for features  
that are not needed immediately.  
Always assess the impact of lazy loading on your application, and avoid lazy loading elements  
crucial to your app’s functionality or essential for the first contentful paint. These should be  
loaded as part of the main bundle to avoid delaying user interaction. Rather than relying  
solely on lazy loading, consider prefetching and preloading important resources to speed up  
subsequent navigation.  
Chapter 29. Code Splitting and  
Lazy  
Loading | 267 **CHAPTER 30**  
# Handling Events  
Event handling allows us to create interactive and dynamic web pages. In Solid, there are  
multiple ways to add an event listener to a JSX element, each one targeting a particular use  
case. In this chapter, we will go over them one by one, examining their use, advantages, and  
drawbacks.  
Before diving into the details, let’s clarify a few key points\:  
In Solid, the onChange and onInput properties of an element behave according to their  
native functionality. Specifically, the onChange handler is triggered when the change is  
committed, such as when the element loses focus. Conversely, the onInput handler is  
triggered whenever the element’s value is altered. If you’re accustomed to working with  
React, this difference might catch you off guard, since React modifies the default onChange  
property in a way to use the onInput behavior.  
**Using the** on **Namespace**  
The most common way to attach an event listener to a JSX element is using the on  
namespace, for example, onClick or onclick. The attribute can be written either in  
camelCase or in lowercase; the compiler converts them to their lowercase, delegated forms.  
So, both of these buttons produce the same output\:  
\<button onClick=\{handler\}\>Button\</button\>  
\<button onclick=\{handler\}\>Button\</button\>  
Let’s take a look at their transpiled outputs\:  
269import \{ delegateEvents, template \} from 'solid-js/web';  
const \_tmpl\$ = template\(\`\<div\>\<button\>Button\</button\>  
\<button\>Button\</button\>\</div\>\`, 6\);  
const App = \(\) =\> \{  
const handler = e =\> \{  
console.log\(e\);  
\};  
return \(\(\) =\> \{  
const \_el\$ = \_tmpl\$\(\),  
\_el\$2 = \_el\$.firstChild,  
\_el\$3 = \_el\$2.nextSibling;  
\_el\$2.\$\$click = handler;  
\_el\$3.\$\$click = handler;  
return \_el\$;  
\}\)\(\);  
\};  
delegateEvents\(\["click"\]\);  
The line delegateEvents\(\["click"\]\); indicates that the elements use event delegation.  
When we inspect the delegateEvents function, we see that the events are delegated to  
document node. This is for performance reasons.  
function delegateEvents\(eventNames, document = window.document\) \{  
const e = document\[\$\$EVENTS\] || \(document\[\$\$EVENTS\] = new Set\(\)\);  
for \(let i = 0, l = eventNames.length; i \< l; i++\) \{  
const name = eventNames\[i\];  
if \(!e.has\(name\)\) \{  
e.add\(name\);  
document.addEventListener\(name, eventHandler\);  
\}  
\}  
\}  
However, only the built-in DOM events are delegated. Handlers with custom event names  
are added to the element directly\:  
\<button onIsFound=\{handler\}\>Button\</button\>  
The above code produces the following output\:  
270 | Chapter 30. Handling Eventsconst \_el\$ = \_tmpl\$\(\);  
\_el\$.addEventListener\("isfound", handler\);  
As you see, isfound is a custom event and it is not delegated. Note that the event names are  
converted into their lowercase forms.  
Let’s talk about event delegation.  
Say, you have a list of 20 elements and want to listen if the user clicks on any of them. You  
can attach a listener to every element on the list, or you add a single listener to one of their  
common ancestors and check to see which item the event originates from. Since document is  
the common ancestor for all elements on an HTML document, Solid prefers the document  
node to add the common handler.  
How can we identify the item that dispatches the event?  
For Solid, you don’t need to worry about it since only the dispatcher receives the event. For  
custom code, you can use the event object to get both the target and the receiver of the  
event.  
The property event.target points to the object onto which the event is dispatched. In  
other words, it is the element that was clicked on.  
The property event.currentTarget points to the element to which the event listener is  
attached.  
Let’s see this in action\:  
export const App\: JSX.Element = \(\) =\> \{  
let el\: HTMLButtonElement = document.createElement\('button'\);  
el.innerText = 'Click Here';  
const handler = \(event\: MouseEvent\) =\> \{  
console.log\(event\);  
console.log\(event.target\);  
console.log\(event.currentTarget\);  
\}  
document.addEventListener\('click', handler\);  
return \(  
\<div\>\{el\}\</div\>  
\);  
Chapter 30. Handling Events | 271\}  
render\(\(\) =\> \<App /\>, document.querySelector\("\#root"\)\);  
When you click the button, the browser invokes the handler function with the event object.  
If we inspect this object in the console output, we see that it has many properties.  
Here, we use the target property to check if the button element receives the click\:  
const handler = \(event\: MouseEvent\) =\> \{  
if\(event.target === el\) \{  
console.log\('Button is clicked'\);  
\}  
\}  
Let’s modify the example to make it more idiomatic Solid code. Here are the steps we are  
going to take\:  
1\. Get rid of the manually created element, use JSX instead.  
2\. Use a ref to access the element.  
3\. Attach the handler when the component is rendered.  
4\. Remove the handler when the component is disposed of.  
5\. Use the non-null assertion operator, \(!\), to suppress type errors.  
export const App\: JSX.Element = \(\) =\> \{  
let el\: HTMLButtonElement;  
const handler = \(event\: MouseEvent\) =\> \{  
if\(el === event.target\) \{  
console.log\('Button is clicked'\);  
\}  
\}  
onMount\(\(\) =\> \{  
document.addEventListener\('click', handler\);;  
\}\);  
onCleanup\(\(\) =\> \{  
document.removeEventListener\('click', handler\);  
\}\);  
return \(  
\<div\>  
\</div\>  
\<button ref=\{el!\}\>Click Here\</button\>  
272 | Chapter 30. Handling Events\);  
\}  
Event delegation is an important concept in frontend applications. Adding multiple event  
listeners that perform the same job degrades performance, wastes memory, and thus causes  
poor user experience. So, you should use event delegation whenever possible.  
NOTE  
In the earlier days of Solid, only the camel-cased event names were delegated, which  
caused some confusion. This feature was removed in version 0.17. Now all built-in DOM  
events are delegated regardless of the casing of the event name.  
**Using the** on\: **Namespace**  
The second method to add an event listener is by using the on\: namespace, such as  
on\:click, which is intended to handle custom events but can also be used for the built-in  
events too to avoid event delegation.  
const App\: JSX.Element = \(\) =\> \{  
const handler = \(event\) =\> \{  
console.log\(event\);  
\};  
return \(  
\<div\>  
\</div\>  
\<button on\:click=\{handler\}\>Button\</button\>  
\);  
\}  
In this method, the listener is added directly to the element, eliminating event delegation.  
Unlike handlers using the on namespace, this approach preserves the original casing of the  
event name, making it significant.  
import \{ template as \_\$template \} from "solid-js/web";  
const \_tmpl\$ = \_\$template\(\`\<div\>\<button\>Button\`\);  
const App = \(\) =\> \{  
const handler = event =\> \{  
console.log\(event\);  
\};  
return \(\(\) =\> \{  
const \_el\$ = \_tmpl\$\(\),  
\_el\$2 = \_el\$.firstChild;  
on\: | 273\_el\$2.addEventListener\("click", handler\);  
return \_el\$;  
\}\)\(\);  
\};  
**Using the** oncapture\: **Namespace**  
The third method for adding an event listener involves the oncapture\: namespace, which  
functions similarly to the on\: syntax but with a crucial difference\: the listener is activated  
during the capturing phase, meaning the event reaches the registered handler before the  
event target.  
const App\: JSX.Element = \(\) =\> \{  
const handler = \(event\) =\> \{  
console.log\(event\);  
\};  
return \(  
\<div\>  
\</div\>  
\<button oncapture\:click=\{handler\}\>Button\</button\>  
\);  
\};  
If we inspect the output code, we see that there is no event-delegation, the listener is  
directly attached to the element\:  
import \{ template as \_\$template \} from "solid-js/web";  
const \_tmpl\$ = \_\$template\(\`\<div\>\<button\>Button\`\);  
const App = \(\) =\> \{  
const handler = event =\> \{  
console.log\(event\);  
\};  
return \(\(\) =\> \{  
const \_el\$ = \_tmpl\$\(\),  
\_el\$2 = \_el\$.firstChild;  
\_el\$2.addEventListener\("click", handler, true\);  
return \_el\$;  
\}\)\(\);  
\};  
Passing true as the third argument makes the handler use the capturing phase\:  
274 | oncapture\:\_el\$2.addEventListener\("click", handler, true\);  
Let’s talk about the event capturing.  
The DOM elements are nested by design. When you click an element, you are also clicking its  
ancestors. Once triggered, the event travels through these nested elements, invoking the  
listeners at each level sequentially. This process is known as event propagation.  
According to the World Wide Web Consortium’s \(W3C\) event specification, the propagation  
takes place in three phases\:  
Capturing phase\: From parent to child  
Target phase\: Event reaches the event target  
Bubbling phase\: From children to parent  
Event capturing starts from the topmost element and moves down the DOM tree while event  
bubbling starts from the target element and moves up the DOM tree.  
Since elements are nested, we can attach a listener on the element itself, which fires during  
the target phase, or on any of its parent elements which fires either in the bubbling or  
capturing phase. The addEventListener API allows us to choose between these two phases.  
It is an overloaded function\:  
addEventListener\(type, listener, options\);  
addEventListener\(type, listener, useCapture = false\);  
addEventListener\('click', listener, \{ caupture\: true \}\);  
addEventListener\('click', listener, true\);  
But which phase comes first? According to W3C’s spec, the capturing phase is to run first  
then comes the target phase and the bubbling phase in that order. In older browsers, or  
browsers that do not follow W3C’s spec, it depends on the implementation.  
# Using Custom Properties  
Solid allows us to define custom properties on a DOM element using the prop\: namespace\:  
const App\: JSX.Element = \(\) =\> \{  
const handler = \(event\) =\> \{  
console.log\(event\);  
\};  
return \(  
\<div\>  
Using Custom Properties | 275\<button prop\:onclick=\{handler\}\>Button\</button\>  
\</div\>  
\);  
\}  
In the output code, the event handler is added to the element as a property\:  
import \{ template as \_\$template \} from "solid-js/web";  
const \_tmpl\$ = \_\$template\(\`\<div\>\<button\>Button\`\);  
const App = \(\) =\> \{  
const handler = event =\> \{  
console.log\(event\);  
\};  
return \(\(\) =\> \{  
const \_el\$ = \_tmpl\$\(\),  
\_el\$2 = \_el\$.firstChild;  
\_el\$2.onclick = handler;  
return \_el\$;  
\}\)\(\);  
\};  
Notice the use of an assignment operation and the absence of an addEventListener call in  
the code\:  
\_el\$2.onclick = handler;  
The event is not delegated since the handler is added to the element. The handlers that are  
added this way will not be called during the capturing or the bubbling phase. While this  
approach is effective for targeting specific elements, overuse may lead to performance  
issues.  
# Using Refs  
Refs are handles to the underlying DOM elements, which can be used to add or remove event  
listeners imperatively\:  
import \{ onCleanup \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const App = \(\) =\> \{  
const handler = \(event\: any\) =\> \{  
console.log\(event\);  
276 | Using Refs\};  
function ref\(el\: HTMLButtonElement\) \{  
el.addEventListener\('click', handler\);  
onCleanup\(\(\) =\> \{  
el.removeEventListener\('click', handler\);  
\}\);  
\}  
return \(  
\<div\>  
\</div\>  
\<button ref=\{ref\}\>Button\</button\>  
\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
For a detailed discussion on refs, please refer to Chapter 13, Accessing Elements With ref.  
# Using Custom Directives  
Since we have a dedicated chapter on custom directives, we will keep our discussion short  
and specific to the event listeners in this section.  
As you may recall from earlier chapters, a custom directive is a regular JavaScript function  
with the following signature\:  
function directiveName\(element\: Element, value\: \(\) =\> any\)\: void;  
Element is the JSX element that we apply the directive on. The value is the function that  
returns the value we passed to the directive.  
We apply custom directives to an element using the use\:directiveName=\{value\} syntax.  
\<div use\:click=\{handler\}\>Button\</div\>  
Here is an example that adds an event listener on a div element using a custom directive  
called onClick\:  
function onClick\(el, accessor\) \{  
el.addEventListener\('click', accessor\(\)\);  
\}  
Using Custom Directives | 277const App\: JSX.Element = \(\) =\> \{  
const handler = \(event\) =\> \{  
console.log\(event\);  
\}  
return \(  
\<div use\:onClick=\{handler\}\>Button\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
We can use the onMount and onCleanup hooks to add and remove event listeners inside the  
body of a custom directive function.  
For example, we can attach and remove event listener to the body element using these  
hooks\:  
import \{ onMount, onCleanup, Accessor \} from "solid-js";  
import \{ render \} from "solid-js/web";  
function focusShortcut\(el\: HTMLElement, value\: Accessor\<string\>\) \{  
const focusEl = \(event\: KeyboardEvent\) =\> \{  
if \(event.ctrlKey && event.key === value\(\)\) \{  
event.preventDefault\(\);  
el.focus\(\);  
\}  
\};  
onMount\(\(\) =\> \{  
document.addEventListener\('keydown', focusEl, false\);  
\}\);  
onCleanup\(\(\) =\> \{  
document.removeEventListener\('keydown', focusEl\);  
\}\);  
\}  
const App = \(\) =\> \{  
return \(  
\<input use\:focusShortcut=\{'m'\} placeholder="input" /\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
278 | Using Custom Directives This code allows you to take focus using a Ctrl+Key combination. However, be cautious not  
to use any letter that is reserved by the browser, as most browsers prevent scripts from  
overriding default shortcuts.  
# Passing Data to the Event Handlers  
There may be times when we need to pass values from elements to the event handlers  
directly.  
Let’s say we have a shopping cart component and we want to remove items from the list with  
a click of a button. We need a way to pass an item’s ID from an element to the handler so that  
we can filter the clicked item out.  
The first solution that comes to mind is using a callback function\:  
\<button onClick=\{\(e\) =\> deleteItem\(e, item.id\)\}\>  
Here is an application illustrating it\:  
export const App\: JSX.Element = \(\) =\> \{  
const \[state, setState\] = createSignal\(\[  
\{ id\: 1, title\: "T-Shirt", price\: 3.20, quantity\: 3 \},  
\{ id\: 2, title\: "Shoes", price\: 10.00, quantity\: 1 \},  
\{ id\: 3, title\: "Jeans", price\: 10.3, quantity\: 2 \},  
\]\);  
const deleteItem = \(event, id\) =\> \{  
const items = state\(\).filter\(item =\> item.id !== id\);  
setState\(items\);  
\}  
return \(  
\<ul\>  
\{state\(\).map\(item =\> \(  
\<li\>  
\{item.title\} \{item.price\} \{item.quantity\}\{\` \`\}  
\<button onClick=\{\(e\) =\> deleteItem\(e,  
item.id\)\}\>Delete\</button\>  
\</li\>  
\)\)\}  
\</ul\>  
\);  
\}  
Passing Data to the Event Handlers | 279 Although we did not use the event object in the handler, it was an opportunity to show how  
it could be done.  
Solid has a special syntax for passing a value to the handler\:  
onClick=\{\[handler, value\]\}  
The value will be passed to the handler function along with the event object. The order of the  
items is significant\: The handler should come first.  
import \{ render \} from "solid-js/web";  
const App = \(\) =\> \{  
function handler\(value, event\)\{  
console.log\(value\); // some value  
\};  
return \(  
\<div\>  
\</div\>  
\<button onClick=\{\[handler, 'some value'\]\}\>Button\</button\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
The syntax allows to use of a single value and it will be passed to the handler function as the  
first argument.  
import \{ template as \_\$template \} from "solid-js/web";  
import \{ delegateEvents \} from "solid-js/web";  
import \{ render \} from "solid-js/web";  
const \_tmpl\$ = \_\$template\(\`\<div\>\<button\>Button\`\);  
const App = \(\) =\> \{  
function handler\(value, event\) \{  
console.log\(value\); // some value  
\}  
return \(\(\) =\> \{  
const \_el\$ = \_tmpl\$\(\),  
\_el\$2 = \_el\$.firstChild;  
\_el\$2.\$\$click = handler;  
\_el\$2.\$\$clickData = 'some value';  
280 | Passing Data to the Event Handlersreturn \_el\$;  
\}\)\(\);  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
delegateEvents\(\["click"\]\);  
If we inspect the output code, we see that the value is passed to the handler via property  
assignment on the element, so there is no need for an additional function call\:  
\_el\$2.\$\$click = handler;  
\_el\$2.\$\$clickData = 'some value';  
The event is delegated\:  
delegateEvents\(\["click"\]\);  
Passing Data to the Event Handlers | 281 **CHAPTER 31**  
# D  
# ynamically Rendering Components  
In this chapter, we will explore the concept of dynamic rendering and learn how to render  
Solid components based on a dynamic value.  
Dynamic rendering is slightly different than conditional rendering. In conditional rendering,  
the component’s output changes based on a condition, and the result can be known  
statically. In dynamic rendering, the output of the component changes based on a dynamic  
value, which is determined at runtime.  
The difference will be more obvious once we have an example. Here, A renders its content  
conditionally, while B does it dynamically\:  
const A\: Component\<\{ tag\: string, children\: JSXElement \}\> = \(props\) =\>  
\{  
return \(props.tag === 'h1'\)  
? \<h1\>\{props.children\}\</h1\>  
\: \<p\>\{props.children\}\</p\>;  
const B\: Component\<\{ tag\: string, children\: JSXElement \}\> = \(props\) =\>  
return \<\{props.tag\}\>\{props.children\}\</\{props.tag\}\>;  
\}  
\{  
\}  
We used component B to illustrate our point, even though it isn't a valid Solid component  
because the compiler cannot process it due to the absence of a proper tag name. We can  
address this by employing an intermediate variable that returns the necessary tag name\:  
const En\: Component\<\{ name\: string \}\> = \(props\) =\> \{  
283return \<p\>Hello, \{props.name\}!\</p\>;  
const Fr\: Component\<\{ name\: string \}\> = \(props\) =\> \{  
return \<p\>Bonjour, \{props.name\}!\</p\>;  
\};  
\};  
\};  
const Greet\: Component\<\{ name\: string; lang\: string \}\> = \(props\) =\> \{  
const components\: Record\<string, Component\<any\>\> = \{ en\: En, fr\: Fr  
const Tag = components\[props.lang\];  
return \<Tag name=\{props.name\} /\>;  
\};  
function App\(\) \{  
return \(  
\<div\>  
\<Greet name="John Doe" lang=\{'en'\} /\>  
\<Greet name="John Doe" lang=\{'fr'\} /\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
The Greet component will not support reactivity in its current form. For example, updating  
the lang value will not have any effect on the rendered output\:  
function App\(\) \{  
const \[lang, setLang\] = createSignal\('en'\);  
const handleClick = \(\) =\> \{  
setLang\(prev =\> prev === 'en' ? 'fr' \: 'en'\);  
\}  
return \(  
\<div\>  
\<Greet name="John Doe" lang=\{lang\(\)\} /\>  
\<button onClick=\{handleClick\}\>Lang\: \{lang\(\)\}\</button\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
However, we can fix this quite easily by using a memo\:  
284 | Chapter 31. D  
ynamically Rendering Componentsconst Greet\: Component\<\{ name\: string; lang\: string \}\> = \(props\) =\> \{  
return createMemo\(\(\) =\> \{  
const components\: Record\<string, Component\<any\>\> = \{ en\: En, fr\: Fr  
\};  
const Tag = components\[props.lang\];  
return \<Tag name=\{props.name\} /\>;  
\}\) as unknown as JSXElement;  
\};  
NOTE  
Although functions are not documented as valid JSX children, Solid allows us to use them  
inside JSX elements.  
Here is the complete application after implementing the required changes\:  
import \{ createMemo, createSignal, type Component, type JSXElement \}  
from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const En\: Component\<\{ name\: string \}\> = \(props\) =\> \{  
return \<p\>Hello, \{props.name\}!\</p\>;  
\};  
const Fr\: Component\<\{ name\: string \}\> = \(props\) =\> \{  
return \<p\>Bonjour, \{props.name\}!\</p\>;  
\};  
const Greet\: Component\<\{ name\: string; lang\: string \}\> = \(props\) =\> \{  
return createMemo\(\(\) =\> \{  
const components\: Record\<string, Component\<any\>\> = \{ en\: En, fr\: Fr  
\};  
const Tag = components\[props.lang\];  
return \<Tag name=\{props.name\} /\>;  
\}\) as unknown as JSXElement;  
\};  
function App\(\) \{  
const \[lang, setLang\] = createSignal\('en'\);  
const handleClick = \(\) =\> \{  
setLang\(prev =\> prev === 'en' ? 'fr' \: 'en'\);  
\}  
return \(  
\<div\>  
\<Greet name="John Doe" lang=\{lang\(\)\} /\>  
Chapter 31. D  
ynamically Rendering Components | 285\<button onClick=\{handleClick\}\>Lang\: \{lang\(\)\}\</button\>  
\</div\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
So far we have only returned components. Can we take it a step further and return elements  
also dynamically? To be more clear, our expectation is that the Dynamic component will  
render an h1 element when the tag value is h1 and an h2 element when it is h2.  
\<Dynamic tag=\{'h1'\}\>Some Title\</h1\>  
\<Dynamic tag=\{'h2'\}\>Another Title\</h2\>  
Let’s take a step back to think about how Solid works. Solid compiles JSX elements to their  
native DOM equivalents, meaning that components return actual DOM elements. Can we  
leverage this behavior in our implementation? Absolutely! Here is one approach we could  
take\:  
const Dynamic\: Component\<\{ tag\: string; children\: JSXElement \}\> =  
\(props\) =\> \{  
const el = document.createElement\(props.tag\);  
if \(typeof props.children === 'string' || typeof props.children ===  
'number'\) \{  
el.innerText = String\(props.children\);  
\} else if \(props.children instanceof Node\) \{  
el.appendChild\(props.children\);  
\} else \{  
throw Error\('Not implemented'\);  
\}  
return el;  
\};  
We created an HTML element using the specified tag name and inserted its children if they  
are of the string, number, or HTML node types.  
With these changes we've achieved our initial goal. However, our current implementation  
only handles elements. What if we want to render components too?  
If you remember, Solid’s components are functions. All we need to do is to check if the tag  
value is a string or function. This will allow us to determine whether to render an element  
or component.  
286 | Chapter 31. D  
ynamically Rendering Components Let’s update our code, starting with the prop types\:  
const Dynamic\: Component\<\{  
tag\: string | Component\<any\>;  
children\: JSXElement;  
\}\>;  
The tag value now becomes a union of string and Component types.  
Next, we will update the Dynamic component to be able to return either an element or a  
component\:  
const Dynamic\: Component\<\{  
tag\: string | Component\<any\>;  
children\: JSXElement;  
\}\> = \(props\) =\> \{  
if \(typeof props.tag === 'function'\) \{  
return props.tag\(props.children\);  
\}  
const el = document.createElement\(props.tag\);  
if \(typeof props.children === 'string'\) \{  
el.innerText = String\(props.children\);  
\} else if \(props.children instanceof Node\) \{  
el.appendChild\(props.children\);  
\} else \{  
throw Error\('Not implemented'\);  
\}  
return el;  
\};  
Let’s try out our new implementation\:  
const Greeting = \(\) =\> \{  
return \<div\>Hello World\</div\>  
\}  
export const App = \(\) =\> \{  
return \(  
\<div\>  
\<Dynamic tag="h1"\>Some Title\</Dynamic\>  
\<Dynamic tag=\{Greeting\}\>Another Title\</Dynamic\>  
Chapter 31. D  
ynamically Rendering Components | 287\</div\>  
\);  
\};  
Currently, our Dynamic component can render components that do not require props.  
However, we can support dynamic props as well. To achieve that\:  
We need to accept any props so that they can be forwarded to the dynamically created  
element or component.  
We should remove Dynamic's own props from the props object before forwarding.  
Let’s begin by updating the type definitions. To support any props, we need to accept any  
prop values\:  
const Dynamic\: Component\<any\> = \(props\) =\> \{\}  
Then, inside the component body, we remove tag prop from the rest so that we can forward  
the rest object as a whole. We will use the splitProps function instead of the spread syntax  
to preserve reactivity.  
const \[own, rest\] = splitProps\(props, \['tag'\]\);  
The next step is to forward the rest object to the dynamically rendered component.  
if \(typeof ownProps.tag === 'function'\) \{  
return ownProps.tag\(rest\);  
\}  
Our dynamically created element should receive props too, otherwise, we will not be able to  
style it nor add event listeners to it. We will take a shortcut and use the Solid’s built-in  
spread function for passing the props object to the element\:  
const el = document.createElement\(props.tag\);  
spread\(el, rest\);  
The spread function automatically handles what we previously did manually\: It iterates over  
the properties of the rest object and adds them to the element. Now we no longer need the  
if statements, as spread takes care of everything under the hood.  
Here is our updated Dynamic component with the improved logic\:  
const Dynamic\: Component\<any\> = \(props\) =\> \{  
const \[ownProps, rest\] = splitProps\(props, \['tag'\]\);  
if \(typeof ownProps.tag === 'function'\) \{  
288 | Chapter 31. D  
ynamically Rendering Componentsreturn ownProps.tag\(rest\);  
\}  
const el = document.createElement\(props.tag\);  
spread\(el, rest\);  
return el;  
\};  
There is still room for improvement. Currently, the internal component will re-render if the  
props object contains any reactive properties.  
To avoid unnecessary re-renders, we can wrap the returned component into the untrack  
function from the core library. This will allow us to perform fine-grained updates rather than  
re-rendering the entire component\:  
return untrack\(\(\) =\> ownProps.tag\(rest\)\);  
Since the returned value is not memoized, it will trigger unnecessary re-renders for its  
consumers. We should cache it before returning\:  
const Dynamic\: Component\<any\> = \(props\) =\> \{  
createMemo\(\(\) =\> \{\}\) as unknown as JSXElement;  
\};  
Here is the final version that addresses our concerns\:  
const Dynamic\: Component\<any\> = \(props\) =\> \{  
return createMemo\(\(\) =\> \{  
const \[ownProps, rest\] = splitProps\(props, \['tag'\]\);  
if \(typeof ownProps.tag === 'function'\) \{  
return ownProps.tag\(rest\);  
\}  
const el = document.createElement\(props.tag\);  
spread\(el, rest\);  
return el;  
\}\) as unknown as JSXElement;  
\};  
Solid provides its own  
Chapter 31. D  
ynamically Rendering Components | 289Dynamic component that is exported from solid-js/web module. Solid’s implementation  
deals with extra issues like server-side rendering and hydration while ours works only in the  
context of a browser. Although it is not that hard to add server-side rendering support we  
will stop here since it is the subject of the upcoming chapter.  
The Dynamic component offers a more compact and easy-to-follow alternative to  
conditional rendering.  
Let’s re-implement one of the earlier examples using the Dynamic component from the  
solid-js/web module\:  
import \{ Component, createSignal \} from 'solid-js';  
import \{ Dynamic, render \} from 'solid-js/web';  
const En\: Component\<\{ name\: string \}\> = \(props\) =\> \{  
return \<p\>Hello, \{props.name\}!\</p\>;  
\};  
const Fr\: Component\<\{ name\: string \}\> = \(props\) =\> \{  
return \<p\>Bonjour, \{props.name\}!\</p\>;  
\};  
function App\(\) \{  
const \[lang, setLang\] = createSignal\('en'\);  
const component = \(\) =\> \(lang\(\) === 'en' ? En \: Fr\);  
const handleClick = \(\) =\> \{  
setLang\(\(prev\) =\> \(prev === 'en' ? 'fr' \: 'en'\)\);  
\};  
return \(  
\<div\>  
\</div\>  
\<Dynamic component=\{component\(\)\} name="John Doe" /\>  
\<button onClick=\{handleClick\}\>Lang\: \{lang\(\)\}\</button\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
290 | Chapter 31. D  
ynamically Rendering Components **CHAPTER 32**  
# Server Side Rendering  
In this chapter, we will learn how to write isomorphic applications that run on both the  
server and client sides.  
We will begin with a brief overview of server-side rendering, introducing key concepts and  
tools. Then we will write an application that is rendered initially on the server side and  
hydrated on the client side using the data from the server’s response.  
Solid provides its own web framework called Solid Start for writing server-rendered  
applications. It is built on top of the very same concepts and practices we discuss here in this  
chapter.  
The way Solid achieves server-side rendering is quite simple\: it renders an application into a  
string value and sends it to the client side via the HTTP response. It runs the client-side  
version of the same application in the browser, recovering the component states and  
attaching the event listeners.  
The client-side scripts are not injected into the server-rendered code automatically and  
must be included explicitly by the developer. We will come back to this later in the chapter.  
Solid provides three distinct render functions to generate the HTML code that is sent to the  
clients via the HTTP response\:  
import \{  
renderToString,  
renderToStringAsync,  
renderToStream  
\} from "solid-js/web";  
The difference between these functions is how they handle async values and Suspense  
291 components. Suspense components use resources to fetch asynchronous data, data that is  
not immediately available when the application runs but is fetched later. By resource, we  
mean the data that is fetched via the createResource function.  
renderToString\: This function renders an application into a string. It is a synchronous  
function where the components are concatenated into a single string value so that they  
can be sent at once. There is no HTTP streaming or rendering of async values. Async  
data is fetched and rendered on the client side.  
import \{ renderToString \} from "solid-js/web";  
const app = renderToString\(\(\) =\> \<App /\>\);  
If the returned value from the renderToString function is a proper HTML document, with a  
heading, body, and title tags, we can send it directly to the client\:  
const app = express\(\);  
app.get\('/', \(req, res\) =\> \{  
try \{  
const app = renderToString\(\(\) =\> \<App /\>\);  
res.send\(app\);  
\} catch \(error\) \{  
res.send\('Failed to render!'\);  
\}  
\}\);  
If not, we need to wrap the string into another one that provides the missing HTML  
elements. Otherwise, the browser will not be able to produce a proper HTML document\:  
app.get\('/', \(req, res\) =\> \{  
const app = renderToString\(\(\) =\> \<App /\>\);  
const html =  
\`  
\<html lang="en"\>  
\<head\>  
\<title\>My SSR App\</title\>  
\<meta charset="UTF-8" /\>  
\</head\>  
\<body\>\$\{app\}\</body\>  
\</html\>  
\`;  
res.send\(html\);  
\}\);  
292 | Chapter 32. Server Side RenderingrenderToStringAsync\: This function also renders the application into a string but it  
does so using an async function in which the resources are resolved to their values.  
Since it is an async function, we can use the await keyword inside.  
renderToStringAsync is a Suspense-aware function. The promise returned by the  
renderToStringAsync function is resolved to a value when all underlying Suspense  
components resolve a value, only then the value will be sent to the client side\:  
import \{ renderToStringAsync \} from "solid-js/web";  
app.get\('/', async \(req, res\) =\> \{  
try \{  
const app = await renderToStringAsync\(\(\) =\> \<App /\>\);  
res.send\(app\);  
\} catch \(error\) \{  
res.send\('Failed to render!'\);  
\}  
\}\);  
renderToStream\: This function produces a Stream object that can be piped to another  
stream.  
import \{ renderToStream \} from "solid-js/web";  
const app = renderToStream\(\(\) =\> \<App /\>\);  
const \{ readable, writable \} = new TransformStream\(\);  
app.pipeTo\(writable\);  
Since NodeJS’s HTTP response is also a stream, we can pipe the value from the  
renderToStream function to the response stream\:  
import \{ renderToStream \} from "solid-js/web";  
app.get\('/', \(req, res\) =\> \{  
try \{  
return renderToStream\(\(\) =\> \<App /\>\).pipe\(res\);  
\} catch \(error\) \{  
res.send\('Failed to render!'\);  
\}  
\}\);  
renderToStream relies on the Suspense components to split applications into streamable  
parts.  
Chapter 32. Server Side Rendering | 293renderToStream produces a string value that has placeholders for the async data. These  
placeholders come from the Suspense components and they are replaced with asynchronous  
values on the client side.  
The placeholders are the immediate values returned from the Suspense components. They  
will be replaced with the contents of these Suspense components as they resolve to a value.  
The content of a Suspense component is sent to the client side via the HTTP stream as a  
string value. A small, embedded script on the client side will parse these string values into  
DOM nodes and move them to their final positions on the page.  
There is a single HTTP response in all three cases, but only in the last one the response is  
streamed.  
Streaming means the async data is sent to the client as it arrives, so the user will have  
something on the screen while waiting for the remaining data to arrive.  
To summarize, the server-side rendering involves three crucial steps\:  
1\. Render the application on the server side.  
2\. Inject the hydration script and the script element that executes the client-side code.  
3\. Hydrate the server-side rendered app using the client-side code.  
Hydration refers to the process of\:  
1\. Attaching event listeners.  
2\. Recovering the component states from the server-rendered data.  
3\. Rebuilding the component tree on the client side.  
Hydration requires us to write and compile our application in a certain way.  
First and foremost, to produce a hydratable code, both the client and the server-side  
applications should be compiled with hydratable flags set to true in their Babel  
configurations\:  
Here is the minimum required Babel configuration for the server-side code\:  
babel\(\{  
presets\: [['solid', { generate: 'ssr', hydratable: true }]],  
\}\)  
The configuration for the client-side code should include\:  
babel\(\{  
294 | Chapter 32. Server Side Renderingpresets\: [['solid', { generate: 'dom', hydratable: true }]],  
\}\)  
When the hydratable setting is turned on, the compiler inserts special data attributes like  
data-hk into the generated HTML code which serves as markers to locate the elements in  
the DOM. Usually it is the outermost element of a component receives these markers  
because hydrating logic can infer the inner ones from the template code.  
Let's have an example to clarify this further\:  
const User = \(props\) =\> \{  
return \(  
\<h1\>  
\</h1\>  
\</div\>  
\<div class=\{props.username ? 'logged-in' \: 'logged-out'\}\>  
Hello \<span\>\{props.username\}!\</span\>  
\);  
\};  
The JSX component above is rendered into a DOM element like so\:  
\<div data-hk="1-0" class="logged-in"\>  
\<h1\>Hello \<span\>\<!--\$--\>John Doe\<!--/--\>!\</span\>\</h1\>  
\</div\>  
The outermost div element receives the data-hk attribute so that Solid runtime can run  
query selectors against this data attribute to locate the component in the DOM. It is  
somewhat like this\:  
const el = document.querySelector\("\[data-hk='1-0'\]"\);  
The numbers have no significance other than being unique IDs. They represent the depth  
and the position of the component in the component tree.  
From the template, we know it has h1, and h1 has the span element which has four child  
nodes\:  
NodeList\(4\) \[ \<!-- \$ --\>, \#text, \<!-- / --\>, \#text \]  
The HTML comments \<!--\$--\>John Doe\<!--/--\> are used to slice the content of the span  
element into static and dynamic parts. So, it is not the span element but the text node that  
gets updated. Since the text node with the content ! has a static value it never receives  
updates.  
Chapter 32. Server Side Rendering | 295 Now we know how to locate the reactive text node using the data-hk value\:  
const el = document.querySelector\("\[data-hk='1-0'\]"\);  
el.firstChild.firstChild.nextSibling.firstChild.nextSibling  
If the expected node is not found, we receive a hydration mismatch error.  
Although the compiler produces a hydratable code, Solid expects us to inject the hydration  
script into the server-generated HTML string explicitly by running either the  
generateHydrationScript or HydrationScript functions\:  
import \{ renderToString, generateHydrationScript \} from 'solid-js/web';  
const html =  
\`  
\<html lang="en"\>  
\<head\>  
\$\{generateHydrationScript\(\)\}  
\</head\>  
\<body\>\$\{app\}\</body\>  
\</html\>  
\`;  
Hydration scripts should be placed under the head tag.  
When executed, the hydration script outputs a \<script\>\</script\> element with a small  
code snippet inside. This snippet includes the client-side code that is a part of the Solid’s  
hydration strategy, helping to locate the component boundaries and recover the state.  
It is easier and safer to inject this glue code directly into the page so that it will always be  
available and not affected by external factors like the network.  
Solid provides the NoHydration component so that we can write fallbacks in case the  
hydration process fails.  
\<NoHydration\>  
\<ImNotHydrated /\>  
\</NoHydration\>  
The solid-js/web module exports the generateHydrationScript and HydrationScript  
functions for generating the hydration script. The former is a regular function, while the  
latter is a component\:  
296 | Chapter 32. Server Side Renderingimport \{ generateHydrationScript, HydrationScript \} from "solid-  
js/web";  
If the application produces a complete HTML page, with head and body and all other  
elements for a proper and valid HTML file, then it is best to use the HydrationScript  
component\:  
import \{ HydrationScript \} from "solid-js/web";  
const App = \(\) =\> \{  
return \(  
\<html\>  
\<head\>  
\<HydrationScript /\>  
\</head\>  
\<body\>\<Layout /\>\</body\>  
\</html\>  
\);  
\}  
If the App component does not produce a complete HTML page, you can wrap the content as  
a string, supply the missing parts, and use generateHydrationScript to create the  
hydration script.  
Hydration is not strictly required for server-side rendering. We may choose not to hydrate, if  
that is the case, our client-side application will be a static one.  
As we mentioned before, to produce a hydratable code, the client-side application should be  
compiled with ssr and hydrate flags set to true.  
We have to inject the script that runs the client-side code into the HTML document that we  
return from the server. We will place it inside the head element\:  
\<head\>  
\<HydrationScript /\>  
\<script src="/client.entry.js" type="module"\>\</script\>  
\</head\>  
Make sure the file name and the file path match the name and the output path you use in the  
bundler configuration.  
Chapter 32. Server Side Rendering | 297 **Targeting the Server Context**  
Solid provides a utility variable called isServer which can be used to generate code that  
runs in the server context\:  
import \{ isServer \} from "solid-js/web";  
const Comp = \(\) =\> \{  
if \(isServer\) \{  
// Use Node API  
\} else \{  
// Use browser API  
\}  
\}  
The isServer value is a compile-time construct that is used for tree-shaking. Unmatched  
code will be eliminated from the output bundle during the bundling process.  
# Targeting the Development Build  
Another utility variable exported from the core library is DEV, which can be used to execute  
code in development mode.  
import \{ DEV \} from "solid-js";  
if \(DEV\) \{  
// Development mode is active  
\}  
The variable DEV is available both on the client and server sides, and it can be safely  
combined with isServer  
Now that we cover the basics of server-side rendering, it is time to have some hands-on  
experience.  
# Rendering a Solid App  
We will start with a simple, interactive application that uses a reactive value. We will keep the  
application’s complexity to a minimum so that we can focus on server-side rendering. For  
tooling, we will use only a compiler and a bundler to keep things simple and easily  
reproducible.  
298 | Rendering a Solid App We will render the same application using the renderToString, renderToStringAsync and  
renderToStream functions.  
Here is the file structure of our next application\:  
my-app/  
├─ src/  
│ ├─ app.js  
│ ├─ client.entry.js  
│ └─ server.entry.js  
└── rollup.config.js  
app.js will contain the application’s code.  
server.entry.js will be the entry point for our NodeJS application that runs an  
Express server.  
client.entry.js will have the client-side application that hydrates the server-  
rendered page.  
rollup.config.js will provide the configurations for Rollup, the module bundler.  
We will use a module bundler to bundle the application’s dependencies along with the  
application. Everything including the Solid’s runtime will be included in the compiled output.  
Bundling dependencies is especially important for the client-side code because on the server  
side, we can require a dependency but on the client side, we have no access to the file  
system. We can pull in dependencies through \<script\> elements but it will complicate our  
work unnecessarily.  
Let’s create the required file and folders\:  
mkdir src && touch \\  
rollup.config.js \\  
src/app.js \\  
src/server.entry.js \\  
src/client.entry.js  
Once you are done, open your terminal and cd into the project folder, and initiate a new npm  
project by running this command\:  
pnpm init  
This will create a package.json file in the current directory. We will update it in a minute  
but first, let’s open rollup.config.js and add necessary configurations.  
Rendering a Solid App | 299rollup.config.js will export two configurations through an array, one for the server-side  
code and the other one for the client-side code\:  
import babel from '@rollup/plugin-babel';  
import nodeResolve from '@rollup/plugin-node-resolve';  
export default \[  
\{  
input\: 'src/server.entry.js',  
output\: \[\{ dir\: 'dist', format\: 'esm' \}\],  
external\: \['solid-js', 'solid-js/web', 'express'\],  
plugins\: \[  
babel\(\{  
babelHelpers\: 'bundled',  
presets\: [['solid', { generate: 'ssr', hydratable: true }]],  
\}\),  
nodeResolve\(\{  
preferBuiltins\: true,  
exportConditions\: \['solid', 'node'\],  
\}\),  
\],  
\},  
\{  
input\: 'src/client.entry.js',  
output\: \[\{ dir\: 'dist', format\: 'esm' \}\],  
plugins\: \[  
babel\(\{  
babelHelpers\: 'bundled',  
presets\: [['solid', { generate: 'dom', hydratable: true }]],  
\}\),  
nodeResolve\(\{  
browser\: true,  
exportConditions\: \['solid'\]  
\}\),  
\],  
\},  
\];  
Solid uses JSX for its view layer. JSX can not be executed directly but requires transpilation.  
So we are going to use Babel through Rollup. Babel is the transpiler and Rollup is the module  
bundler.  
We provided different values to generate setting depending on the target platform\: For  
NodeJS, it is ssr while for browsers it is dom.  
300 | Rendering a Solid Apphydratable should be set to true for both of them since we need to create a hydratable  
code for both the client and server side.  
Next, let’s open the app.js file and add the following code\:  
import \{ ErrorBoundary, Show, Suspense, createResource, createSignal \}  
from 'solid-js';  
import \{ HydrationScript, isServer \} from 'solid-js/web';  
async function fetchUser\(\) \{  
if \(isServer\) \{  
return new Promise\(\(resolve\) =\> \{  
const delay = Math.floor\(Math.random\(\) \* 3000\);  
setTimeout\(\(\) =\> \{  
resolve\(\{ name\: 'John Doe', age\: 20, delay \}\);  
\}, delay\);  
\}\);  
\}  
return await fetch\('/user'\).then\(\(res\) =\> res.json\(\)\);  
\}  
const Counter = \(\) =\> \{  
const \[count, setCount\] = createSignal\(99\);  
const handleClick = \(\) =\> \{  
setCount\(\(prev\) =\> prev + 1\);  
\};  
return \(  
\<div\>  
\</div\>  
Count \{count\(\)\}\: \<button onClick=\{handleClick\}\>Inc\</button\>  
\);  
\};  
const User = \(props\) =\> \{  
const \[user\] = createResource\(props, fetchUser\);  
return \(  
\<Suspense fallback=\{\<div\>Loading...\</div\>\}\>  
\<Show when=\{user\(\)\}\>  
\<div\>  
Name is \{user\(\).name\} Age\: \{user\(\).age\} Delay\: \{user\(\).delay\}  
\</div\>  
\</Show\>  
Rendering a Solid App | 301\</Suspense\>  
\);  
\};  
const errorFallback = \(err\) =\> \{  
console.log\(err\);  
return \<div\>Error Occured!\</div\>;  
\};  
export const App = \(\) =\> \{  
return \(  
\<html\>  
\<head\>  
\<title\>My App\</title\>  
\<meta charset="UTF-8" /\>  
\<meta name="viewport" content="width=device-width, initial-  
scale=1.0" /\>  
\<HydrationScript /\>  
\<script src="/client.entry.js" type="module"\>\</script\>  
\</head\>  
\<body\>  
\<div id="app"\>  
\<h1\>My Application\</h1\>  
\<ErrorBoundary fallback=\{errorFallback\}\>  
\<Counter /\>  
\<User /\>  
\<User /\>  
\<User /\>  
\</ErrorBoundary\>  
\<footer\>Footer Content!\</footer\>  
\</div\>  
\</body\>  
\</html\>  
\);  
\};  
Our application renders a signal through Counter component and a resource through the  
User component.  
The Counter component has an event listener to increment the number.  
const Counter = \(\) =\> \{  
const \[count, setCount\] = createSignal\(99\);  
const handleClick = \(\) =\> \{  
302 | Rendering a Solid AppsetCount\(\(prev\) =\> prev + 1\);  
\};  
return \(  
\<div\>  
\</div\>  
Count\: \{count\(\)\} \<button onClick=\{handleClick\}\>Inc\</button\>  
\);  
\};  
We use a Suspense component to render the user resource.  
const User = \(props\) =\> \{  
const \[user\] = createResource\(props, fetchUser\);  
return \(  
\<Suspense fallback=\{\<div\>Loading...\</div\>\}\>  
\<Show when=\{user\(\)\}\>  
\<div\>  
Name is \{user\(\).name\} Age\: \{user\(\).age\} Delay\: \{user\(\).delay\}  
\</div\>  
\</Show\>  
\</Suspense\>  
\);  
\}  
We had to wrap the access to the user data in a Show component to avoid accessing a  
property on an undefined value because its value will be undefined initially.  
The fetchUser returns a promise in the context of a server and it makes a fetch request to  
the /user endpoint when called inside a browser.  
async function fetchUser\(\) \{  
if \(isServer\) \{  
return new Promise\(\(resolve\) =\> \{  
const delay = Math.floor\(Math.random\(\) \* 3000\);  
setTimeout\(\(\) =\> \{  
resolve\(\{ name\: 'John Doe', age\: 20, delay \}\);  
\}, delay\);  
\}\);  
\}  
return await fetch\('/user'\).then\(\(res\) =\> res.json\(\)\);  
\}  
Rendering a Solid App | 303 Normally, we should call the same endpoint from both the client and server sides. However,  
to distinguish whether the request is made on the client side or the server side, we return  
different users. This helps differentiate the origin of the rendered data and understand how  
these render functions behave differently.  
Although we could use a value from a database or another source, we chose a literal value for  
practicality. Since the client-side code makes a request to the /user endpoint, we need to  
ensure the server returns an appropriate value from that endpoint.  
app.get\('/user', \(\_req, res\) =\> \{  
const delay = Math.floor\(Math.random\(\) \* 3000\);  
console.log\(\`User is requested with \$\{delay\}ms delay!\`\);  
setTimeout\(\(\) =\> \{  
res.json\(\{ name\: 'Jenny Doe', age\: 20, delay \}\);  
\}, delay\);  
\}\);  
Again, we introduce a small random delay to simulate network latency. In a real application,  
such behavior would depend on actual data retrieval times.  
We render the User component multiple times to observe the behavior of the renderer  
function we choose because they will resolve to a value at different times.  
\<ErrorBoundary fallback=\{errorFallback\}\>  
\<Counter /\>  
\<User /\>  
\<User /\>  
\<User /\>  
\</ErrorBoundary\>  
We will use the server.entry.js file to run an express server. We will use three different  
paths to serve three different versions of our application.  
import express from 'express';  
import \{  
renderToStream,  
renderToString,  
renderToStringAsync  
\} from 'solid-js/web';  
import \{ App \} from './app';  
304 | Rendering a Solid Appconst PORT = 3000;  
const app = express\(\);  
app.use\(express.static\('.'\)\);  
app.get\('/user', \(\_req, res\) =\> \{  
const delay = Math.floor\(Math.random\(\) \* 3000\);  
console.log\(\`User is requested with \$\{delay\}ms delay!\`\);  
setTimeout\(\(\) =\> \{  
res.json\(\{ name\: 'Jenny Doe', age\: 20, delay \}\);  
\}, delay\);  
\}\);  
app.get\('/', \(\_req, res\) =\> \{  
res.send\(\`\<!DOCTYPE html\>  
\<html lang="en"\>  
\<head\>  
\<title\>My SSR App\</title\>  
\</head\>  
\<body\>  
\<nav\>  
\<ul\>  
\<li\>\<a href="/tostring"\>/tostring\</a\>  
\<li\>\<a href="/async"\>/async\</a\>  
\<li\>\<a href="/stream"\>/stream\</a\>  
\</ul\>  
\</nav\>  
\</body\>  
\</html\>\`\);  
\}\);  
app.get\('/tostring', \(\_req, res\) =\> \{  
const app = renderToString\(\(\) =\> \<App /\>\);  
res.send\(app\);  
\}\);  
app.get\('/async', async \(\_req, res\) =\> \{  
const app = await renderToStringAsync\(\(\) =\> \<App /\>\);  
res.send\(app\);  
\}\);  
app.get\('/stream', \(\_req, res\) =\> \{  
return renderToStream\(\(\) =\> \<App /\>\).pipe\(res\);  
\}\);  
Rendering a Solid App | 305app.listen\(PORT, \(\) =\> console.log\(\`Listening on port \$\{PORT\}!\`\)\);  
We use the renderToString function to generate the HTML string on /tostring route.  
Under renderToString, Suspense components will do nothing besides returning their  
fallback values. The resources will be fetched on the client side when the client-side  
application takes over.  
We use renderToStringAsync to generate the HTML string asynchronously for the /async  
path, waiting for the Suspense components to resolve before sending it to the client. The  
page will be blocked until all Suspense componets resolve to a value. Unlike the  
renderToString function, the HTML document has the resource data when it is sent to the  
client.  
We use the renderToStream function to stream our application on the /stream path. The  
server immediately returns the initial static HTML, often called the shell, and flushes the  
children of the Suspense components as their resources resolve.  
Don’t forget to insert the client-side entry in the returned HTML\:  
\<script src="/client.entry.js" type="module"\>\</script\>  
The client.entry.js file will be our entry point for the client-side application\:  
import \{ hydrate \} from 'solid-js/web';  
import \{ App \} from './app';  
hydrate\(\(\) =\> \<App /\>, document\);  
Here, we need to use the hydrate function instead of render. Otherwise, we will have  
mismatches between the server and client-side codes.  
Now that all files are in place, it is time to install the dependencies. Run this command in  
your terminal window\:  
pnpm install --save-dev \\  
@rollup/plugin-babel \\  
@rollup/plugin-node-resolve \\  
babel-preset-solid \\  
rollup  
pnpm install \\  
express \\  
solid-js  
306 | Rendering a Solid App Next, we modify the package.json file.  
We will start by adding the module specifier so that we can use import and export  
statements in our code\:  
\{  
"type"\: "module",  
\}  
Then, we insert two npm scripts\:  
"scripts"\: \{  
"build"\: "rollup -c rollup.config.js",  
"serve"\: "cd dist && node server.entry.js"  
\},  
build\: This script builds the applications and places them under the dist folder.  
serve\: This script serves the server-side application after changing the current directory to  
dist. Changing the current directory to dist is important because it will serve the static  
files relative to the dist folder.  
Let’s build our applications by running the build script\:  
pnpm run build  
If you have not received any errors so far, we can start the server\:  
pnpm run serve  
If you have errors, you need to trace your steps back and make sure you did not miss  
anything.  
Let’s visit the address on a browser\:  
http\://localhost\:3000/  
Now, click on the button and see the counter go up. If the count value does not change, it  
means your client-side code is not working correctly. Make sure you’ve injected the  
hydration script and called the client-side code inside the HTML document.  
Let’s inspect the server-rendered HTML code on the Developer Console. For our application,  
you will see something like this\:  
\<div data-hk="0"\>Count \<!--\#--\>99\<!--/--\>\</div\>  
Rendering a Solid App | 307 As we mentioned before, Solid adds data attributes data-hk to the rendered HTML  
elements, which will be used as hydration markers. It is a way to mark template boundaries  
so that our application can be revived on the client side with a proper component hierarchy.  
Solid wraps the reactive value in an HTML comment like \<!--\#--\>99\<!--/--\> to isolate it  
and run the granular updates on it.  
For example, when the browser parses the div element, it creates four nodes\: Text,  
Comment, Text and Comment. The client-side script creates a signal with the value of 99 and  
associates it with the second Text node, the one that renders the reactive value.  
308 | Rendering a Solid App **CHAPTER 33**  
# Solid Without JSX  
JSX provides a clear and concise way to describe the view layer, but it requires transpilation,  
which can be limiting if you’re not in a position to use a compiler.  
Fortunately, Solid offers two alternatives to JSX\: Tagged template literals and Hyperscript.  
# Solid  
# with Tagged Template Literals  
Tagged template literals are more advanced forms of template literals, using a custom  
function to write and parse template literals.  
function greeting\(strings, ...values\) \{  
console.log\(strings, values\);  
const message = strings\[0\]; // "Hello, ";  
const name = values\[0\]; // \$\{name\}  
return \(message + name\).toUpperCase\(\) + '!';  
\}  
const text = greeting\`Hello, \$\{name\}\`;  
Template literals are the string literals that are enclosed by backtick characters. The tag is  
the function that is used to parse the string literal.  
The power of string literals comes from their ability to embed expressions delimited by a  
dollar sign and curly braces\: \$\{expression\}. They also support multi-line strings.  
309 The tagged template literals take this a step further and use a custom function to process the  
string value to produce an arbitrary value.  
The tag function receives both the strings and the interpolated expressions as arguments.  
The first argument of a tag function is an array of string values, while the remaining  
arguments are interpolated expressions. The output of the tag function is completely  
arbitrary\: It is not limited to a string and can return any value.  
Solid-js exposes an html function from the solid-js/html module to create HTML  
elements via tagged template literals.  
Being template literals, html function uses \$\{\} to interpolate JavaScript expressions.  
In some examples, you may see a shortened form of a closing tag, \<//\>, to produce smaller  
bundles. This works because browsers are permissive when parsing HTML strings\:  
html\`\<button\>Count \$\{count\(\)\}\<//\>\`  
Here is a simple app using a button element\:  
import html from 'solid-js/html';  
import \{ createSignal \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
const App = \(\) =\> \{  
const \[count, setCount\] = createSignal\(0\);  
const increment = \(event\) =\> \{  
setCount\(\(c\) =\> c + 1\);  
\};  
return html\`\<button type="button" onClick=\$\{increment\}\>  
Count \$\{count\}  
\</button\>\`;  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
You can create reusable components as shown below\:  
import html from 'solid-js/html';  
import \{ createSignal \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
310 | Chapter 33. Solid Without JSXfunction Button\(props\) \{  
return html\`\<button class="btn-primary" ...\$\{props\} /\>\`;  
\}  
function App\(\) \{  
const \[count, setCount\] = createSignal\(0\);  
const increment = \(event\) =\> \{  
setCount\(\(c\) =\> c + 1\)  
\};  
return html\`\<\$\{Button\} type="button" onClick=\$\{increment\}\>Count\:  
\$\{count\}\<//\>\`;  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
NOTE  
You can use Solid Playground to render components that use tagged template literals and  
Hyperscript.  
Components created via tagged template literals are slightly less efficient than their JSX  
counterparts. They also require a larger runtime since they are not tree-shakeable and can  
not use static analysis to optimize their output.  
There are a few caveats with html components\:  
1\. Components may return multiple top-level elements. Since this limitation is specific to  
JSX, we can safely avoid it for template literals.  
html\`  
\<div\>\</div\>  
\<div\>\</div\>  
\`  
2\. Reactive expressions must be wrapped in function calls to preserve their reactivity\:  
import \{ createSignal \} from 'solid-js';  
import html from 'solid-js/html';  
import \{ render \} from 'solid-js/web';  
const App = \(\) =\> \{  
const \[user, setUser\] = createSignal\(\{ name\: 'John Doe', age\: 30 \}\);  
const handleClick = \(event\) =\> \{  
setUser\(\(prev\) =\> \(\{ ...prev, age\: prev.age + 1 \}\)\);  
\};  
Chapter 33. Solid Without JSX | 311return html\`\<div onClick=\$\{handleClick\}\>\$\{\(\) =\> user\(\).age\}\</div\>\`;  
\};  
render\(\(\) =\> \<App /\>, document.body\);  
Try changing \(\) =\> user\(\).age to user\(\).age and you will see that the counter value  
does not respond to changes.  
3\. Event handlers require an explicit event argument\:  
const increment = \(event\) =\> \{  
setCount\(\(c\) =\> c + 1\)  
\};  
If you remove the event parameter, the handler does not work as expected. This requirement  
originates from the html function that parses components. It needs an argument to  
distinguish an event handler from a getter function when processing props.  
Try re-running the application after removing the event parameter from the handler  
function\:  
import html from 'solid-js/html';  
import \{ createSignal \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
function Button\(props\) \{  
return html\`\<button class="btn-primary" ...\$\{props\} /\>\`;  
\}  
function App\(\) \{  
const \[count, setCount\] = createSignal\(0\);  
const increment = \(event\) =\> \{  
setCount\(\(c\) =\> c + 1\)  
\};  
return html\`\<\$\{Button\} type="button" onClick=\$\{increment\}\>Count\:  
\$\{count\}\<//\>\`;  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
4\. Refs are supported only in their callback forms.  
let divRef;  
html\`\<div ref=\$\{\(el\) =\> divRef = el\} /\>\`;  
312 | Chapter 33. Solid Without JSX In regular JSX components, it is the compiler that inserts the assignment operation when we  
use refs in their variable forms, but with tagged template literals, there is no compilation  
step and we solely rely on the runtime.  
# Solid  
# with Hyperscript  
Solid provides the h function from the solid-js/h module for creating elements using the  
hyperscript syntax. Solid does not re-exports the hyperscript library but implements its own  
runtime logic.  
h is an overloaded variadic function that can take different forms\:  
h\("button", \{ title\: "Go to Home Page" \}, "Home"\);  
h\(Button, \{ title\: "Go to Home Page" \}, "Home"\);  
h\("div", \{ title\: "Go to Home Page" \}, h\("span", "1"\), h\("span", "2"\),  
h\("span", "3"\)\);  
Here is a simple application using the h function to create elements\:  
import h from 'solid-js/h';  
import \{ createSignal \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
function App\(\) \{  
return h\('div', \{ id\: 'hero' \}, 'Hello World'\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
In its basic form, h takes a string, an attributes object, and an optional children value\:  
h\(selector, attributes, children\);  
selector\: This is a string that sets the target element. It can take id and class values.  
attributes\: This object provides properties and attributes to the created element.  
children\: This value is passed to the element as children. It can be a string, an array, a  
function, or a primitive value.  
For example\:  
h\('div.is-primary', \{ id\: 'hero' \}, 'Hello World!'\);  
Solid  
with Hyperscript | 313 The above code produces an output that is functionally equivalent to the following HTML  
code\:  
\<div id="hero"\>Hello World!\</div\>  
You can provide id and class values to the selector string the way we pass to a CSS selector\:  
h\('div\#hero.primary.is-large', \{\}, 'Hello World!'\);  
So, the above code creates a div element with the id hero and class is-large.  
\<div id="hero" class="primary is-large"\>Hello World!\</div\>  
When omitted, div is used as the target element\:  
h\('\#hero', \{\}, 'Hello World!'\);  
The function h treats the second argument as children when there are only two arguments  
and the second argument is not an object\:  
h\('div', 'Hello World!'\);  
The output will be equivalent to\:  
\<div\>Hello World\</div\>  
If the second argument is an object, it is treated as the attribute value\:  
h\('div', \{ id\: 'greeting', innerHTML\: 'Hello World!' \}\);  
The output will be equivalent to\:  
\<div id="greeting"\>Hello World!\</div\>  
You can pass any number of h invocations after the second argument to create any number  
of child DOM nodes\:  
h\('div', \{ id\: 'hero' \}, h\('span', 'Hello'\), h\('span', 'World'\),  
h\('span', '!'\)\);  
The output will be equivalent to\:  
\<div id="hero"\>\<span\>Hello\</span\>\<span\>World\</span\>\<span\>!\</span\>\</div\>  
The h function requires us to use function expressions to preserve reactivity\:  
314 | Solid  
with Hyperscriptimport h from 'solid-js/h';  
import \{ createSignal \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
function App\(\) \{  
const \[count, setCount\] = createSignal\(0\);  
const increment = \(\) =\> \{  
setCount\(\(c\) =\> c + 1\);  
\};  
return h\('button', \{ onclick\: increment \}, \(\) =\> 'Count\: ' +  
count\(\)\);  
\}  
render\(\(\) =\> \<App /\>, document.body\);  
We can create reusable components using functions that take props and return DOM nodes\:  
function Button\(props\) \{  
return h\('button', props\);  
\}  
Which can be used like this\:  
h\(Button, \{ title\: "Go to Home Page" \}\);  
Let’s rewrite the previous example using a reusable component\:  
import h from 'solid-js/h';  
import \{ createSignal \} from 'solid-js';  
import \{ render \} from 'solid-js/web';  
function Button\(props\) \{  
return h\('button', props\);  
\}  
function App\(\) \{  
const \[count, setCount\] = createSignal\(0\);  
const increment = \(event\) =\> \{  
setCount\(\(c\) =\> c + 1\);  
\};  
return h\(Button, \{ onclick\: increment \}, \(\) =\> 'Count\: ' + count\(\)\);  
\}  
Solid  
with Hyperscript | 315render\(\(\) =\> \<App /\>, document.body\);  
There are a few quirks with components that use Hyperscript syntax, which are mostly  
related to how they handle props\:  
1\. Reactive expressions must be wrapped in function calls to preserve reactivity\:  
h\(Button, \{ onclick\: increment \}, \(\) =\> 'Count\: ' + count\(\)\);  
2\. Event handlers require an explicit event argument\:  
const increment = \(event\) =\> \{  
setCount\(\(c\) =\> c + 1\)  
\};  
The argument is needed to distinguish the event handlers from the getter functions when  
processing props.  
3\. To preserve reactivity, reactive objects should be merged using the mergeProps function  
before passing them as props.  
import \{ mergeProps \} from "solid-js"  
h\("div", mergeProps\(\{ onclick\: handleClick \}, props\)\)  
4\. Refs are supported only in their callback forms.  
function divRef\(el\) \{  
// We can interact with the element  
\};  
h\(div, \{ ref\: divRef \}\);  
If you need to use the variable form, you need to run the assignment explicitly\:  
let divRef;  
h\(div, \{ ref\: \(el\) =\> divRef = el \}\);  
# Draw  
# backs  
There are a few issues with these two alternative rendering methods.  
They don’t have the same level of maturity and adoption as JSX, and their syntax can be less  
intuitive for developers who are used to working with JSX.  
They lack support for server-side rendering, which can be a significant drawback, if you need  
to render your views on the server side for SEO or other purposes.  
316 | Draw  
backs **A1**  
# Setting Development Environment Using  
# Webpack  
In this chapter, we will learn how to set up a Solid project for a single-page application from  
scratch using Webpack.  
The steps we will take are as follows\:  
1\. Initialize a new npm project and install dependencies  
2\. Configure Webpack  
3\. Configure the Webpack dev server  
4\. Add TypeScript and custom types  
5\. Add Eslint support  
6\. Write a simple application  
You can use npm or pnpm to run the commands but you need to pick one and use it  
consistently, otherwise, you will have issues. Since we have been using pnpm throughout the  
book, we will make an exception for this chapter and use npm instead to add a little flavor to  
the mix.  
# Installing Dependencies  
Let’s initialize a new npm project by running the init command\:  
npm init -y  
The npm init command creates a package.json file.  
317 The -y flag suppresses all prompts and makes the init command use the default values. You  
can change those values anytime by editing the package.json file.  
Now open the package.json file and add dependencies and devDependencies for the  
project.  
You can use CLI commands to add these packages, but it’s easier this way to show the  
required package versions.  
"dependencies"\: \{  
"solid-js"\: "\^1.8.14"  
\},  
"devDependencies"\: \{  
"@babel/core"\: "\^7.17.8",  
"@babel/preset-env"\: "\^7.16.11",  
"@babel/preset-typescript"\: "\^7.16.7",  
"@typescript-eslint/eslint-plugin"\: "\^5.17.0",  
"@typescript-eslint/parser"\: "\^5.17.0",  
"babel-loader"\: "\^8.2.4",  
"babel-preset-solid"\: "\^1.8.12",  
"css-loader"\: "\^6.7.1",  
"eslint"\: "\^8.12.0",  
"eslint-plugin-import"\: "\^2.25.4",  
"eslint-plugin-no-unsanitized"\: "\^4.0.1",  
"html-webpack-plugin"\: "\^5.5.0",  
"solid-refresh"\: "\^0.7.4",  
"style-loader"\: "\^3.3.1",  
"typescript"\: "\^4.6.3",  
"webpack"\: "\^5.70.0",  
"webpack-cli"\: "\^4.9.2",  
"webpack-dev-server"\: "\^4.7.4",  
"webpack-merge"\: "\^5.8.0"  
\}  
For a basic application, the only dependency we need is solid-js.  
We usebabel/core, @babel/preset-env, "@babel/preset-typescript, babel-loader  
and babel-preset-solid for transforming JSX and TypeScript syntax.  
We use eslint, @typescript-eslint/eslint-plugin, and @typescript-eslint/parser  
for linting. Linters are tools that help us detect issues and errors in our code while we are  
writing them.  
318 | A1. Setting Development Environment Using Webpack We need the typescript package to add static types. The style-loader and css-loader  
packages are there for styling elements.  
The solid-refresh package provides hot module replacement \(HMR\). HMR is a feature that  
reloads JavaScript modules or static assets when they are edited, while the application is  
running, allowing us to see changes in the browser without having to refresh the page.  
We use webpack for bundling modules and webpack-cli for running Webpack commands  
via the terminal window.  
We need webpack-merge for merging configurations, and webpack-dev-server for running  
a development server.  
Now that we’ve added dependencies, we can install them by running\:  
npm i  
Next, we remove the test script that comes with the package.json file and insert these  
two\:  
"scripts"\: \{  
"dev"\: "NODE\_ENV=development webpack serve",  
"build"\: "NODE\_ENV=production webpack"  
\}  
We need the dev script for starting the Webpack dev server and build for bundling our code  
for production.  
Here, setting NODE\_ENV via the command line may feel redundant since the mode option in  
the Webpack configuration does the same thing, however, I like to have them around in case  
we need to test something outside Webpack.  
# Configuring Webpack  
Configuring Webpack is a straightforward process. We start by creating a  
webpack.config.js file at the root of our project.  
Next, we import the common js modules that we use in the webpack.config.js file\:  
const HTMLWebpackPlugin = require\('html-webpack-plugin'\);  
const \{ merge \} = require\('webpack-merge'\);  
const \{ resolve \} = require\('path'\);  
const webpack = require\('webpack'\);  
Configuring Webpack | 319 We need the HTMLWebpackPlugin plugin to link the output files to our custom HTML  
template.  
We use the merge function to merge our base configuration with the target configurations.  
The resolve function is used to resolve the file paths.  
Since some directories are shared between the development and production configurations,  
it is best if we extract them into variables\:  
// We check if we are bundling for the production environment  
const isProduction = process.env.NODE\_ENV === 'production';  
// The output directory for the bundled code  
const outputDir = resolve\(\_\_dirname, './output'\);  
// The entry point for the browser.  
const appEntry = resolve\(\_\_dirname, './src/index.tsx'\);  
Next, we initialize three different Webpack configurations\:  
const common = \{\};  
const devConfig = merge\(common, \{\}\);  
const prodConfig = merge\(common, \{\}\);  
The config common serves as the base configuration for our development and production  
configurations. It has the following content\:  
const common = \{  
entry\: \{  
// We use key-value pairs in case we need  
// multiple entry points to our configuration.  
app\: appEntry,  
\},  
// Let Webpack resolve these extensions so that  
// we can include them in our project as a module.  
resolve\: \{  
extensions\: \['.ts', '.tsx', '.js', '.json'\],  
\},  
module\: \{  
rules\: \[  
320 | Configuring Webpack\{  
// Modules with ts, tsx, js and jsx extensions  
// are handled by babel-loader.  
// We use Babel for compiling TypeScript code  
// into JavaScript code and transform JSX syntax  
// to native JavaScript code.  
// We transform some of the newer JavaScript syntax  
// to something that can be run in older browsers.  
test\: /\\.\(t|j\)sx?\$/,  
exclude\: /\(node\_modules\)/,  
use\: \{  
loader\: 'babel-loader',  
options\: \{  
babelrc\: false, // Don’t use .babelrc to override these  
options.  
configFile\: false, // Don’t use babel.config.json to  
override these options.  
presets\: \['@babel/preset-env', 'solid', '@babel/preset-  
typescript'\],  
// We use hot module replacement \(HMR\) only in development  
mode  
// to eliminate the shipping of the boilerplate HMR code in  
production.  
plugins\: \[...\(isProduction === false ? \['solid-  
refresh/babel'\] \: \[\]\)\],  
\},  
\},  
\},  
\{  
// Styles are handled by css-loader first, then style-loader.  
test\: /\\.\(css\)\$/,  
use\: \[  
\{ loader\: 'style-loader' \},  
\{  
loader\: 'css-loader',  
options\: \{  
// modules option enables CSS modules so that  
// we can import classes into js files  
// using the default module import syntax.  
modules\: true,  
// importLoaders option sets how many loaders  
// before css-loader should be applied  
// to @imported resources and CSS modules/ICSS imports.  
// 0 =\> no loaders \(default\);  
Configuring Webpack | 321// 1 =\> postcss-loader;  
// 2 =\> postcss-loader, sass-loader  
importLoaders\: 0,  
\}  
\},  
\],  
\},  
\{  
// Static images are handled by Webpack’s built-in  
// asset modules Webpack exports them into the output folder.  
test\: /\\.\(?\:ico|gif|png|jpg|jpeg\)\$/i,  
type\: 'asset/resource',  
\},  
\{  
// Fonts are handled by Webpack’s built-in asset modules  
// Resources with these extensions are inlined as data URI  
// They are converted into Base64 encoded text,  
// which can be decoded by the browser.  
// This is to reduce the browser’s roundtrips  
// when fetching remote resources.  
test\: /\\.\(woff\(2\)?|eot|ttf|otf|svg|\)\$/,  
type\: 'asset/inline',  
\},  
\],  
\},  
plugins\: \[  
new HTMLWebpackPlugin\(\{  
// HTML file is served from this directory  
template\: resolve\(\_\_dirname, './src/index.html'\),  
// Sets page title,  
// which requires \`\<%= htmlWebpackPlugin.options.title %\>\`.  
title\: 'My Solid App',  
// You can rename output file as you like  
filename\: 'index.html',  
\}\),  
\],  
\};  
We use Babel through Webpack to compile the application. Webpack takes our TypeScript  
and JavaScript code, and runs through the Babel compiler to produce an output.  
322 | Configuring Webpack There are multiple ways to provide a configuration to Babel. We pass a configuration object  
via webpack.config.js file. You can read about the available options on this page\:  
https\:/ /babeljs.io/docs/en/options.  
Presets are packages that provide a set of plugins to support particular features, such as JSX  
transformation or TypeScript support. We use the following presets\:  
@babel/preset-env to use the latest JavaScript syntax in our code. It can take  
additional configuration but we will go with the default ones.  
solid to transform JSX syntax to JavaScript.  
@babel/preset-typescript to compile TypeScript code into JavaScript.  
Plugins are used to extend Babel’s functionality.  
# Configure the Webpack Dev Server  
Now that we are done setting the shared configuration, it is time to set the configuration for  
the development and production environments\:  
const devConfig = merge\(common, \{  
output\: \{  
path\: outputDir,  
// In dev mode we don’t need hash numbers in file names  
filename\: '\[name\].js',  
publicPath\: '/',  
\},  
// Set the mode in case we forget to provide via CLI  
mode\: 'development',  
// Configure source maps  
devtool\: 'inline-source-map',  
// This is required for HMR  
plugins\: \[new webpack.HotModuleReplacementPlugin\(\)\],  
// Configure dev server  
devServer\: \{  
static\: \{  
directory\: outputDir,  
\},  
compress\: true,  
port\: 9000,  
open\: false,  
Configure the Webpack Dev Server | 323\},  
\}\);  
const productionConfig = merge\(common, \{  
mode\: 'production',  
devtool\: false,  
output\: \{  
path\: outputDir,  
// This is important for invalidating browser’s cache  
filename\: 'js/\[name\].\[contenthash\].js',  
publicPath\: './',  
\},  
optimization\: \{  
minimize\: true,  
\},  
performance\: \{  
hints\: false,  
maxEntrypointSize\: 512000,  
maxAssetSize\: 512000,  
\},  
\}\);  
// We export a different configuration  
// depending on the environment variable.  
module.exports = isProduction ? productionConfig \: devConfig;  
# Add TypeScript Support  
Next, we create tsconfig.json file in our project’s root to configure TypeScript\:  
\{  
"files"\: \["src/index.tsx"\],  
"include"\: \["src", "typings.d.ts"\],  
"exclude"\: \["node\_modules"\],  
"compilerOptions"\: \{  
"module"\: "esnext",  
"target"\: "es6",  
"baseUrl"\: ".",  
"rootDir"\: ".",  
"jsx"\: "preserve",  
"jsxImportSource"\: "solid-js",  
324 | Add TypeScript Support"moduleResolution"\: "node",  
"lib"\: \["dom", "ESNext"\],  
"esModuleInterop"\: true  
\}  
\}  
If you are using VSCode, you can hover over each setting to see a brief explanation about it.  
files will be our application’s entry point.  
include sets files to be included in compilation. Since we are using Babel for  
compilation, we use include to detect issues and errors.  
exclude will omit issues and errors from specified directories.  
compilerOptions set the compiler’s options. You can use the defaults if you like but we  
need to set at least these two settings to use the Solid’s compiler for compiling JSX\:  
"jsx"\: "preserve",  
"jsxImportSource"\: "solid-js",  
# Add Eslint Support  
Linters help us find issues with our code.  
Create a config file named .eslintrc.js in the root directory\:  
/\*\*@type \{import\('eslint'\).Linter.Config\} \*/  
module.exports = \{  
// Tells ESLint to use this parser package,  
// making ESLint to understand TypeScript syntax.  
parser\: '@typescript-eslint/parser',  
plugins\: \[  
// Enable ESLint to support TypeScript  
'@typescript-eslint',  
// Disallow unsanitized code  
'plugin\:no-unsanitized/DOM',  
\],  
extends\: \[  
// Use recommended settings  
'eslint\:recommended',  
// Use recommended settings for TypeScript  
'plugin\:@typescript-eslint/recommended',  
\],  
rules\: \{  
// Add custom rules  
semi\: \[2, 'always'\],  
Add Eslint Support | 325'@typescript-eslint/no-unused-vars'\: 0,  
'@typescript-eslint/no-explicit-any'\: 0,  
'@typescript-eslint/explicit-module-boundary-types'\: 0,  
'@typescript-eslint/no-non-null-assertion'\: 0,  
'react/jsx-uses-react'\: 'off',  
'react/react-in-jsx-scope'\: 'off',  
\},  
// Suppress linting errors for css files and 'webpack.config.js' file  
ignorePatterns\: \['\*.css', 'webpack.config.js'\],  
\};  
# Create a Basic Application  
Now that we’ve configured our development environment, it is time to add src/index.html  
and src/index.tsx files.  
The content of src/index.html will be as follows\:  
\<!DOCTYPE html\>  
\<html lang="en"\>  
\<head\>  
\<meta charset="UTF-8"\>  
\<title\>\<%= htmlWebpackPlugin.options.title %\>\</title\>  
\<meta name="viewport" content="width=device-width, initial-  
scale=1.0"\>  
\</head\>  
\<body\>  
\</body\>  
\<div id="root"\>\</div\>  
\</html\>  
We use the index.html file to run our single-page application. The Webpack Dev Server  
serves it after inserting a \<script\> element that loads the application to be executed in the  
browser.  
The content is a boilerplate HTML code. The title argument we pass to  
HTMLWebpackPlugin in the configuration file replaces \<%=  
htmlWebpackPlugin.options.title %\>.  
We use src/index.tsx to run a simple Solid application\:  
import \{ render \} from "solid-js/web";  
326 | Create a Basic Applicationconst App = \(\) =\> \{  
return \(  
\<h1\>Hello World!\</h1\>  
\);  
\}  
render\(\(\) =\> \<App /\>, document.getElementById\('root'\)\);  
Now, let’s start the development server by running the dev script\:  
npm run dev  
Let’s check if HMR is working by updating the content of src/index.tsx file. Update the  
greeting text and save the file.  
HMR is a complex issue and may not always run optimally. For example, you may see a new  
element added to the page after saving the file because the render function re-executes  
inside the updated module, therefore, inserts a new element while keeping the old one. To  
solve the issue, just add this line // @refresh reload at the top of the file.  
// @refresh reload is a pragma for the solid-refresh package that signals a full-page  
refresh rather than a module replacement when a change is detected. The pragma works per  
file basis.  
HMR works best for a more granular module system. Create a new solid component in  
another file, I will call it Greeting.tsx\:  
// Greeting.tsx  
export const Greeting = \(\) =\> \{  
return \(  
\<h1\>Hello World!\</h1\>  
\);  
\}  
Let’s update the index.tsx file to use our newly created module\:  
// @refresh reload  
import \{ render \} from "solid-js/web";  
import \{ Greeting \} from "./Greeting";  
const App = \(\) =\> \{  
return \(  
\<Greeting /\>  
\);  
Create a Basic Application | 327\}  
render\(\(\) =\> \<App /\>, document.getElementById\('root'\)\);  
When you update the component Greeting, the change should be visible on the page,  
without a page refresh, meaning our HMR is working.  
328 | Create a Basic Application **About the Author**  
Hi, I’m Sinan Polat. I’ve been in the software industry for about a decade, spending the last  
five years building JavaScript applications with technologies like React and Solid. I’ve enjoyed  
supporting the growth of Solid and helping it find a place within the JavaScript community.  
This book is my way of sharing what I’ve learned to help you make the most of SolidJS and  
TypeScript.  
