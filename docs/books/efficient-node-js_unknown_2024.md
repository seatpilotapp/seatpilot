# Efficient Node.js  
A Beyond the Basics Guide  
With Early Release ebooks, you get books in their earliest form—the author’s  
raw and unedited content as they write—so you can take advantage of these  
technologies long before the official release of these titles.  
Samer Buna Efficient Node.js  
by Samer Buna  
Copyright © 2024 Samer Buna. All rights reserved.  
Printed in the United States of America.  
Published by O’Reilly Media, Inc., 1005 Gravenstein Highway North,  
Sebastopol, CA 95472.  
O’Reilly books may be purchased for educational, business, or sales  
promotional use. Online editions are also available for most titles  
\(http\://oreilly.com\). For more information, contact our corporate/institutional  
sales department\: 800-998-9938 or corporate@oreilly.com.  
Acquisitions Editor\: Amanda Quinn  
Development Editor\: Jeff Bleiel  
Production Editor\: Gregory Hyman  
Interior Designer\: David Futato  
Cover Designer\: Karen Montgomery  
Illustrator\: Kate Dullea  
June 2024\: First Edition Revision History for the Early Release  
2023-09-15\: First Release  
See http\://oreilly.com/catalog/errata.csp?isbn=9781098145194 for release  
details.  
The O’Reilly logo is a registered trademark of O’Reilly Media, Inc. Efficient  
Node.js, the cover image, and related trade dress are trademarks of O’Reilly  
Media, Inc.  
The views expressed in this work are those of the author and do not represent  
the publisher’s views. While the publisher and the author have used good  
faith efforts to ensure that the information and instructions contained in this  
work are accurate, the publisher and the author disclaim all responsibility for  
errors or omissions, including without limitation responsibility for damages  
resulting from the use of or reliance on this work. Use of the information and  
instructions contained in this work is at your own risk. If any code samples or  
other technology this work contains or describes is subject to open source  
licenses or the intellectual property rights of others, it is your responsibility to  
ensure that your use thereof complies with such licenses and/or rights.  
978-1-098-14519-4 Chapter 1. Getting Started with Node  
A NOTE FOR EARLY RELEASE READERS  
With Early Release ebooks, you get books in their earliest form—the author’s  
raw and unedited content as they write—so you can take advantage of these  
technologies long before the official release of these titles.  
This will be the first chapter of the final book. Please note that the GitHub  
repo will be made active later on.  
If you have comments about how we might improve the content and/or  
examples in this book, or if you notice missing material within this chapter,  
please reach out to the author at efficient.node@gmail.com.  
When it comes to learning Node, many tutorials, books, and courses tend to  
focus on the packages and tools available within the Node ecosystem, rather  
than the Node runtime itself. They prioritize teaching how to utilize popular  
Node libraries and frameworks, instead of starting from the native  
capabilities of the Node runtime.  
This approach is understandable because Node is a low-level runtime. It does  
not offer comprehensive solutions, but rather a collection of small essential  
modules that makes creating solutions easier and faster. For example, a full- fledged web server will have options like serving static files \(like images, css  
files, etc\). With the Node built-in http module, you can build a web server  
that serves binary data, and with the Node built-in fs module, you can read  
the content of a file on the file system. You can combine both of these  
features to server static assets, using your own JavaScript code. There’s no  
built-in Node way to serve static assets under a web server.  
Popular libraries that are not part of the Node runtime \(such as Express.js,  
Next.js, and many others with .js in their names\) aim to provide nearly  
complete solutions within specific domains, for example, creating and  
running a web server \(and serving static assets, and many other neat  
features\). Practically, most developers will not be using Node on its own, so  
it makes sense for educational materials to focus on the comprehensive-  
solution packages, so learners can skip to the good parts. The common  
thinking here is that only developers whose job is to write these packages  
need to understand the underlying base layer of the Node runtime.  
However, I would argue that a solid understanding of the Node runtime is  
essential before utilizing any of its popular packages and tools. Having a deep  
understanding of the Node runtime allows developers to make informed  
decisions when choosing which packages to use and how to use them  
effectively. This book is my attempt to prioritize learning the native  
capabilities of the Node runtime first, and then use that knowledge to  
efficiently utilize the powerful packages and tools in its ecosystem. In this first chapter, I will start with an introduction to the Node runtime and  
why I believe it is a great option for both backend and frontend development.  
I’ll discuss both its benefits and limitations. I will also provide instructions on  
how to install and set up a Node development environment, and execute a  
Node script. Furthermore, I will provide examples of utilizing some of the  
built-in modules within the Node runtime, and demonstrate how to install and  
use a non-built-in package as well.  
NOTE  
Throughout the book, I use the term Node instead of Node.js for brevity. The official name of the  
runtime is Node.js but referring to it as just Node is a very common thing. Don’t confuse that with  
“node” \(with a lower-case n\), which is the command we use to execute a Node script.  
# Node Overview  
Ryan Dahl started the Node runtime in 2009 after he was inspired by the  
performance of the V8 JavaScript engine in the Google Chrome web  
browser. V8 uses an event-driven model, which makes it efficient at handling  
concurrent connections and requests. Ryan wanted to bring this same high-  
performance, event-driven architecture to server-side applications. The event-  
driven model is the first and most important concept you need to understand  
about the Node runtime \(and the V8 engine as well\). I’ll explain it briefly in  
this section, but we’ll have a chance to talk about it a lot more in Chapter 4. TIP  
I decided to give Node a spin and learn more about it after watching the presentation Ryan Dahl gave to  
introduce it. I think you’ll benefit by starting there as well. Search YouTube for “Ryan Dahl  
introduction to Node”  
. Node has changed significantly since then, so don’t focus on the examples, but  
rather the concepts and explanations.  
In its core, Node enables developers to use the JavaScript language on any  
machine without needing a web browser. Node is usually defined as  
“JavaScript on backend servers”  
. Before Node, that was not a common or  
easy thing. JavaScript was mainly a frontend thing.  
However, this definition isn’t really an accurate one. Node offers a lot more  
than executing JavaScript on servers. In fact, the execution of JavaScript is  
not done by Node at all. It’s done with a Virtual Machine \(VM\) like V8 or  
Chakra. Node is just the coordinator. It’s the one who instructs a VM like V8  
to execute your JavaScript.  
Node is better defined as a server environment that wraps V8 and  
provides small modules that can facilitate building software applications  
with JavaScript  
When you write JavaScript code and execute it with Node, Node will pass  
your JavaScript to V8, V8 will execute that JavaScript and tell Node what the  
result is, and Node will make the result available to you. In addition to that,  
Node has a few handy built-in modules that provide easy-to-use asynchronous APIs. Let’s talk about that, and a few other reasons why  
developers are picking Node over many other options when it comes to  
creating services for their backends.  
NOTE  
V8 is Google’s open source JavaScript engine. It’s written in C++ and used in Google Chrome and in  
Node. Both Chrome and Node use V8 to execute JavaScript code. V8 is the default VM in Node, but  
other VMs can be used with Node as well.  
# Node Architecture  
The event-driven model in Node \(which is also known as the non-blocking  
I/O model\) is based on a single-threaded event loop. There’s a lot to unpack  
about that statement but the gist is that Node can handle multiple tasks at the  
same time by registering an “event listener” for each task. When a task is  
completed, its event listener is triggered. Node utilizes threads and native  
asynchronous capabilities of the underlying operating system to accomplish  
that.  
The Node event loop is responsible for handling all the asynchronous I/O  
operations. For example, when a web client sends a request to a Node web  
server, Node processes the request internally without blocking the main  
single thread, and when Node is done with the request, it picks up the request  
listener \(which is is a special JavaScript function that’s part of the web server code\), and adds it to an event queue. The event loop is a forever ticking loop  
that waits for V8 single thread to be available, picks an event listener from  
the event queue, and sends it V8 for processing.  
The exact same flow happens when you instruct Node to read a file from the  
file system, start a timer, encrypt data, and so on. Everything has a listener  
function \(which is also known as a callback function, because Node basically  
calls it back when it’s ready for it\). Every listener function is queued in the  
event queue. Sometimes the event queue will have multiple pending events  
which are all ready for processing. That’s why there’s a forever ticking loop,  
it’ll pick events one by one, and in queue order \(first-in, first-out\).  
In Chapter 2, we’ll go over some code examples of how exactly this flow  
works with more details around the interactions between Node and V8.  
# Node Modules  
Node comes with feature-rich modules that make it a great platform for  
hosting and managing servers. These modules offer features like reading and  
writing files, sending and receiving data over the network, and even  
compressing and encrypting data. You don’t need to install these modules.  
They come natively packaged with Node.  
The great thing about these modules is that they offer asynchronous APIs that  
you can use without worrying about threads \(thanks to Node’s event-loop\). This is really why Node became very popular very quickly. You can do  
asynchronous programming in Node and do things in parallel without  
needing to deal with threads. Writing code to deal with threads is not an easy  
task, and Node was the escape.  
The asynchronous nature of Node modules works great with VMs like V8  
because these VMs are all single-threaded. In Node \(and in web browsers as  
well\), you only get a single precious thread to work with. It’s extremely  
important to not block that thread \(hence the non-blocking model\). For  
example, in a browser, if a website blocks that single thread for, say, 2  
seconds, the user cannot scroll up and down during these 2 seconds! In Node,  
if an incoming HTTP connection to a web server was handled synchronously  
rather than asynchronously, that’ll block the single thread, and the whole web  
server cannot handle any other incoming connections while the synchronous  
operation is active.  
Beyond the built-in modules you get with Node, Node has first-class support  
for C++ addons. You can write C++ code to create high-performing modules,  
and link them to be used directly within Node.  
Node also ships with a powerful debugger and has some other handy, generic  
utilities that enhance the JavaScript language and provide extra APIs \(for  
example, to create timers, work with data types, and process arrays and  
objects\). Package and Dependency Management  
Node ships with a powerful package manager named npm. We did not have a  
package manager in the JavaScript world before Node. npm was nothing  
short of revolutionary. It changed the way we work with JavaScript.  
You can make a feature-rich Node application just by using code that’s freely  
available on npm. The npm registry has hundreds of thousands of packages  
that you can just install and use in your Node servers. npm is a reliable  
package manager which comes with a simple CLI \(the npm command\). The  
npm command offers simple ways to install and maintain third-party  
packages, share your own code, and reuse it too.  
TIP  
You can install packages for Node from other package registries as well. For example, you can install  
them directly from GitHub.  
Node also comes with a reliable module dependency manager \(different from  
npm\). This module dependency manager is also another thing that we did not  
have in the JavaScript world before Node. JavaScript today has what’s  
known as ES modules \(ES is short for ECMAScript\) and Node has first class  
support for them. In this book, we’ll see examples of both the original  
module dependency management in Node \(named CommonJS\), and the new  
support for ES modules. Node’s original module dependency management has been available since  
Node was released and it opened the door to so much flexibility in how we  
code JavaScript! It is widely used, even for JavaScript that gets executed in  
the browser, because npm has many tools to bridge the gap between modules  
written in Node and what browsers can work with today.  
npm and Node’s module systems together make a big difference when you  
work with any JavaScript system, not just the JavaScript that you execute on  
backend servers or web browsers. For example, if you have a fancy fridge  
monitor that happens to run on JavaScript, you can use Node and npm for the  
tools to package, organize, and manage dependencies, and then bundle your  
code, and ship it to your fridge!  
The packages that you can run on Node come in all shapes and forms, some  
are small and dedicated to specific programming tasks, some offer tools to  
assist in the life cycles of an application, others help developers every day to  
build and maintain big and complicated applications. Here are a few example  
of some of my favorite ones\:  
ESLint\: A tool that you can include in any Node applications, and use it to  
find problems with your JavaScript code, and in some cases, automatically  
fix them. You can use ESLint to enforce best practices and consistent code  
style, but ESLint can help point out potential runtime bugs too. You don’t  
ship ESLint in your production environments, it’s just a tool that can help  
you increase the quality of your code as you write it. Webpack\: A tool that assists with asset bundling. The Webpack Node  
package makes it very easy to bundle your multi-file frontend frameworks  
application into a single file for production and compile JavaScript  
extensions \(like JSX for React\) during that process. This is an example of  
a Node tool that you can use on its own. You do not need a Node web  
server to work with Webpack.  
Prettier\: An opinionated code formatting tool. With Prettier, you don’t  
have to manually indent your code, break long code into multiple lines,  
remember to use a consistent style for the code \(for example, always use  
single or double quotes, always use semicolons or no semicolons\). Prettier  
automatically takes care of all that.  
TypeScript\: A tool that adds static typing and other features to the  
JavaScript language. It is useful because it can help developers catch  
errors before the code is run, making it easier to maintain and scale large  
codebases. TypeScript’s static typing can also improve developer  
productivity by providing better code auto-completion and documentation  
in development tools.  
All of these tools \(and many more\) enrich the experience of creating and  
maintaining JavaScript applications, both on the frontend and the backend.  
Even if you choose not to host your frontend applications on Node, you can  
still use Node for its tools. For example, you can host your frontend  
application with another framework such as Ruby on Rails and use Node to  
build assets for the Rails Asset Pipeline. One Language Everywhere  
By using Node, you’re committing to the simple and flexible JavaScript  
language, which is used on every website today. It is a very popular  
programming language and despite its many historical problems, I believe  
JavaScript is a good language today.  
With Node, you get to have a single language across the full-stack. You use  
JavaScript in the browser and you use it for the backend as well. There are  
some subtle but great benefits to that\:  
One language means less syntax to keep in your head, less APIs and tools  
to work with, and less mistakes over all.  
One language means better integrations between your frontend code and  
your backend code. You can actually share code between these two sides.  
For example, You can build a frontend application with a JavaScript  
framework like React, then use Node to render the same components of  
that frontend application on the server and generate initial HTML views  
for the frontend application. This is known as server-side rendering \(SSR\)  
and it’s now something that many Node packages offer out of the box.  
One language means teams can share responsibilities among different  
projects. Projects don’t need a dedicated team for the frontend and a  
different team for the backend. You would also eliminate some  
dependencies between teams. A full-stack project can be assigned to a  
single team, The JavaScript People; they can develop APIs, they can develop web and network servers, they can develop interactive websites,  
and they can even develop mobile and desktop applications. Hiring  
JavaScript developers who can contribute to both frontend and backend  
applications is attractive to employers.  
While Node has also played a significant role in the growing popularity of  
JavaScript, the language itself is simple, flexible, easy to learn, and available  
on every computer \(client with browsers, and thanks to Node, servers as  
well\). JavaScript is widely adopted in the programming community,  
particularly among beginner programmers, coding bootcamps, and startups.  
# Arguments Against Node  
Node’s approach to handling code in an asynchronous and non-blocking  
manner is a unique model of thinking and reasoning about code. If you’ve  
never done it before, it will feel weird. You need time to get your head  
wrapped around this model and get used to it.  
Node has a relatively small standard library. This means that developers need  
to rely on third-party modules to perform most big tasks. There is a large  
amount of third-party modules available for Node. You need to do some  
research to pick the most appropriate and efficient ones. Many of these  
modules are small, which means you’ll need to use multiple modules in a  
single project. It’s not uncommon for a Node project to use hundreds of third- party modules. While this can enhance maintainability and scalability, it also  
requires more management and oversight. As modules are regularly updated  
or abandoned, it becomes necessary to closely monitor and update all  
modules used within a project, replacing deprecated options and ensuring that  
your code is not vulnerable to any of the security threats these modules might  
introduce.  
TIP  
Smaller code is actually why Node is named Node! In Node, we build simple small single-process  
building blocks \(nodes\) that can be organized with good networking protocols, to have them  
communicate with each other and scale up to build large, distributed programs.  
Additionally, Node is optimized for I/O and high-level programming tasks  
but it may not be the best choice for CPU-bound tasks, such as image and  
video processing, which require a lot of computational power. Because Node  
is single-threaded, meaning that it can only use one core of a CPU at a time,  
performing tasks that require a lot of CPU processing power might lead to  
performance bottlenecks. JavaScript itself is not the best language for high-  
performance computation, as it is less performant than languages like C++ or  
Rust.  
Node also has a high rate of release and version updates, this can create the  
need for constant maintenance and updates of the codebase, which can be a  
disadvantage for long-term projects. Finally, the language you use in Node, JavaScript, has one big valid argument  
against it. It is a dynamically typed language, which means objects don’t  
have explicitly declared types and they can change during runtime. This is  
fine for small projects but for bigger ones, the lack of strong typing can lead  
to errors that are difficult to detect and debug and it generally makes the code  
harder to reason with and to maintain.  
TIP  
The TypeScript language, which can easily be used with Node, is one popular way to mitigate the  
problems with dynamically-typed JavaScript. It provides a significant advantage over plain JavaScript  
by mitigating the weakness of dynamic typing and providing developers with powerful tools for  
creating secure, maintainable code.  
# Executing Node Scripts  
If you have Node installed on your computer, you should have the commands  
node and npm available in a terminal. If you have these commands, make  
sure the Node version is a recent one \(20.x or higher\). You can verify by  
opening a terminal and running the command node -v.  
If you don’t have these commands at all, you’ll need to download and install  
Node. You can download the latest version from the official Node website  
\(https\://nodejs.org/\). The installation process is straightforward and should  
only take a few minutes. For Mac users, Node can also be installed using the Homebrew package  
manager with the command brew install node.  
Another option to install Node is using Node Version Manager \(NVM\).  
NVM allows you to run and switch between multiple versions of Node, it  
works on Mac and Linux, and there’s an NVM-windows option as well.  
NODE ON WINDOWS  
All the examples I will be using in this book are Linux-based. On Windows,  
you need to switch the commands I use with their Windows alternatives.  
I don’t recommend using Node on Windows natively unless it’s your only  
option. If you have a modern Windows machine, one option that might work  
a lot better for you is to install the Windows subsystem for Linux. This option  
will give you the best of both worlds. You’ll have your Windows operating  
system running Linux without needing to reboot. You can even edit your  
code in a Windows editor, and execute it on Linux!  
To get started, open a terminal and issue the node command on its own  
without any arguments\:  
\$ node NOTE  
Throughout this book, I use the \$ sign to indicate a command line to be executed in a terminal. The \$  
sign is not part of the command.  
This will start a Node REPL session. REPL stands for Read, Eval, Print,  
Loop. It’s a convenient way to quickly test simple JavaScript and Node code.  
You can type any JavaScript code in the REPL. For example, type  
Math.random\(\) and then, press Enter\: Node will read your line, evaluate it, print the result, and loop over these 3  
things until you exit the session \(which you can do with a CTRL+D\).  
Note how the “Print” step happened automatically. We didn’t need to add any  
instructions to print the result. Node will just print the result of each line you  
type. This is not the case when you execute code in a Node script. Let’s do  
that next.  
NOTE  
We’ll discuss Node’s REPL mode \(and command-line options\) in detail in Chapter 2.  
Create a new directory for the exercises of this book, and then cd into it\:  
\$ mkdir efficient-node  
\$ cd efficient-node  
Open up your editor for this directory, then create a file named index.js.  
Put the same Math.random\(\) line into it\:  
Math.random\(\);  
Now to execute that file, in the terminal, type the command\: node index.js  
You’ll notice that the command will basically do nothing. That’s because we  
have not outputted anything from that file. To output something, you can use  
the console object, which is similar to the one available in browsers\:  
console.log\(  
Math.random\(\)  
\);  
Executing index.js now will output a random number Note how in this simple example we’re using both JavaScript \( Math object\),  
and an object from the Node API \( console\). Let’s look at a more  
interesting example next.  
NOTE  
The console object is one of many top-level global objects that we can access in Node without  
needing to declare any dependencies. Node has a global object similar to the window object in  
browsers. The console object is part of the global object. All properties of the global object  
can be accessed directly; console.log instead of global.console.log \(which also works\).  
Other examples of global objects in Node are process and timer functions like setTimeout and  
setInterval. We’ll discuss these in Chapter 2.  
# Examples of Using Node Built-in Modules  
You can create a simple web server in Node using its built-in http module.  
Create a server.js file and write the following code in there\:  
const http = require\('http'\);  
const server = http.createServer\(\(req, res\) =\> \{  
res.end\('Hello World\\n'\);  
\}\);  
server.listen\(3000, \(\) =\> \{ console.log\('Server is running...  
'\);  
\}\);  
This is Node’s version of a “Hello World” example. You don’t need to install  
anything to run this script. This is all Node’s built-in power.  
When you execute this script\:  
\$ node server.js  
Node will run a web server, and you’ll notice that the Node process does not  
exit in that case. Since the script we’re executing has a “listener” that needs  
to run in the background.  
Let’s decipher this simple web server example\:  
The require function \(on the first line\) is what you use in Node to manage  
the dependencies of modules. It allows a module \(like server.js\) to load  
and use the exports of another module \(like http\). This web server example  
depends on the built-in http module to create a web server. There are many  
other libraries that you can use to create a web server, but this one is built-in.  
You don’t need to install anything to use it, but you do need to require it.  
TIP  
In a Node’s REPL session, built-in modules \(like http\) are available immediately without needing to  
require them. This is not the case with executable scripts. You can’t use modules \(including built-in ones\) without requiring them first.  
The second line creates a server constant by invoking the createServer  
function from the http module. This function is one of many functions that  
are available under the http module’s API. You can use it to create a web  
server object. It accepts an argument that is known as the Request Listener.  
The request listener is a simple function that Node will invoke every time  
there is an incoming connection request to the web server.  
This is why this listener function receives the request object as an argument  
\(named req above but you can name it whatever you want\). The other  
argument this listener function receives, named res in the example, is a  
response object. It’s the other side for a request connection. We can use the  
res object to write things back to the requester. It’s exactly what our simple  
web server is doing. It’s writing back — using the .end method — the  
Hello World string.  
NOTE  
The .end method can be used as a shortcut to write data and then end the request in one line.  
The createServer function only creates the server object. It does not  
activate it. To activate this web server, you need to invoke the listen  
method on the created server. The listen method accepts many arguments, like what OS port and host to  
use for this server. The last argument for it is a function that will be invoked  
once the server is successfully running on the specified port. The example  
above just logs a message to indicate that the server is running successfully at  
that point.  
While the server is running, if you go to a browser and ask for an http  
connection on localhost with the port that was used in the script \(3000 in this  
case\), you will see the Hello World string that this example had in its request  
listener function.  
NOTE  
Both functions passed as arguments to createServer and listen are examples of events that get  
queued in Node’s event queue and later picked up by the event loop when V8 is ready to execute them.  
It’s easy to understand these simple examples without the complexity of how things work in the  
background, but when the code gets more complicated, this understanding help avoid critical errors.  
# Installing and Using an npm Module  
Let’s now look at an example of how to use an npm module in Node. Let’s  
use the popular lodash module which is a JavaScript utility library with  
many useful methods you can run on numbers, strings, arrays, objects, and  
more,  
First, you need to download the module. You can do that using the npm install command\:  
\$ npm install lodash  
This command will download the lodash module from the npm registry,  
and then place it under a node  
\_  
modules folder \(which it will create if it’s  
not there already\). You can verify with an ls command\:  
\$ ls node  
modules  
\_  
You should have a folder named lodash in there.  
Now in our Node code, we can require the lodash module to use it. For  
example, lodash has a random method that can generate a random  
number between any 2 numbers we specify for it. Here’s an example of how  
to use it\:  
const  
\_  
= require\(lodash\);  
console.log\( \_  
.random\(1, 99\) \);  
Running this script, you’ll get a random number between 1 and 99.  
TIP  
The  
\_  
is common name to use for lodash, but you can use any name. Since we called the require method with a non built-in module lodash,  
Node will look for it under the node  
\_  
modules folder. Thanks to npm, it’ll  
find it.  
In a team Node project, when you make the project depend on a third-party  
module, you need to let other developers know of that dependency. You can  
do so in Node using a package.json file at the root of the project.  
With a package.json file, when you npm install a module, the npm  
command will also list the module and its current version in  
package.json, under a dependencies section. When other developers  
pull your code, they can run the command npm install without any  
arguments, and npm will read all the dependencies from package.json  
and install them in the node  
\_  
modules folder.  
The package.json file also contains information about the project,  
including the project’s name, version, description, and more. It can also be  
used to specify scripts that can be run from the command line to perform  
various tasks, like building or testing the project.  
Here’s an example of a package.json file\:  
\{  
"name"\: "efficient-node"  
,  
"version"\: "1.0.0"  
,  
"description"\: "A comprehensive guide to learning the Node.js "license"\: "MIT"  
"scripts"\: \{  
"start"\: "node index.js"  
\},  
"dependencies"\: \{  
"lodash"\: "\^4.17.21"  
\},  
\}  
You can create a package.json file for a Node project using the npm  
init command\:  
\$ npm init  
This command will ask a few questions and you can interactively supply your  
answers \(or press Enter to keep the defaults, which often are good because  
npm tries to detect what it can about the project\).  
TIP  
You can use npm init -y to generate your package.json file with the default values \(the y is  
for yes to all questions\).  
Now that the project has a package.json file, npm install a new  
module \(for example, express\) and see how it gets written to the package.json file. Then npm uninstall the module and see how it  
gets removed from package.json.  
You can also install a module that’s only needed in the development  
environment, but not in production. An example of that is eslint. To  
install eslint as a development dependency only, you add a --save-  
dev argument \(or -D for short\) to the npm install command.  
\$ npm install -D eslint  
This will install eslint in the node  
modules folder, and document it as  
\_  
a development dependency under a devDependencies section in  
package.json. This is where you should place things like your testing  
framework, your formatting tools, or anything else that you use only while  
developing your project.  
TIP  
In a production machine, development dependencies are usually ignored. The npm install  
command has a --production flag to make it ignore them. You can also use the NODE  
ENV  
\_  
environment variable and set it to “production” before you run the npm install command. We’ll  
learn more about Node environment variables in Chapter 2.  
Using ES Modules The require method is used by Node to implement the CommonJS  
module system, which is the default module system used in Node, but Node  
also supports the ES module system \(which is part of JavaScript itself\).  
Let’s go through another example, but this time, write it using ES modules.  
To create a feature-rich web server in Node, one popular options is Express.js  
\(available as express from npm\). With the express module, you can  
easily handle routing, create and use middlewares, and handle many other  
common web server functionalities.  
You’ll need to install express as a new dependency\:  
\$ npm install express  
This will download express and extract it under the node  
\_  
modules  
folder, but if you take a look at what’s under node  
\_  
modules now, you’ll  
notice that there are a lot more modules there. The express module  
depends on all these other modules, and our little example project now does  
too, because it depends on express.  
Since we’re going to use ES modules, we need to use the .mjs file  
extension to signal to Node that we’re using the new module system.  
In a server.mjs file, write the following code import express from 'express';  
const app = express\(\);  
app.get\('/'  
, \(req, res\) =\> \{  
res.send\('Hello Express'\);  
\}\);  
export default app;  
Note the use of import/ export statements. This is the syntax for ES  
modules. You use import to declare a module dependency and export to  
define what other modules can use when they depend on your module.  
In this example, the server.mjs module exports an app object, which  
we created using the express module, and made it able to handle  
connections to the root path on the server.  
To use this module, just like we imported express into server.mjs, we  
now need to import the server.mjs module itself.  
In an index.mjs file, write the following code\:  
import app from '  
./server.mjs';  
app.listen\(3000, \(\) =\> \{ console.log\('Server listening on http\://localhost\:3000'\);  
\}\);  
The “  
./” in the import line signals to Node that this import is a relative one.  
Node expects to find the server.mjs file in the same folder where  
index.mjs is. You can also use a “  
../” to make Node look for the module  
up one level, or “  
../../” for two levels, and so on. Without “  
./” or “  
../”  
, Node  
assumes that the module you’re trying to import is either a built-in module, or  
a module that exists under the node  
\_  
modules folder.  
With this code, the index.mjs module depends on the server.mjs  
module, and uses its default export \( app\) to run the server on port 3000.  
You can execute this code with\:  
\$ node index.mjs  
This will start an Express.js web server on port 3000 and log a message to the  
console when the server is ready. if you go to http\://localhost\:3000/ in the  
browser, you will see the Hello Express string that this example had in its  
root path handler function.  
If you want to use the .js extension with ES modules, you can configure  
Node to assume that all .js files are ES modules. For that, you can add a  
“type” property in package.json and give it the value of “module” \(the default value for it is “commonjs”\)\:  
"type"\: "module"  
With that, ES module files can use the .js extension.  
AN ANALOGY FOR NODE AND NPM  
Real-life analogies can sometimes help us understand coding concepts.  
One of my favorite analogies about coding in general is how it can be  
compared to writing cooking recipes. The recipe in this analogy is the  
program, and the cook is the computer.  
In some recipes, you can use pre-made items like a cake mix or a special  
sauce. And you’ll most likely need to use tools, like a pan or a strainer. When  
compared to coding, you can think of these pre-made items and tools as the  
packages of code written by others which you can just download and use.  
Extending on this analogy, you can think of npm as the store where you get  
your pre-made items and tools for your coding recipes.  
But what exactly is Node’s place in this analogy?  
I like to think of it as the kitchen! it allows you to execute lines in your  
coding recipes by using built-in tools, like the stove and the sink. Now imagine trying to cook without these built-in tools in your kitchen. That  
would make the task a lot harder, wouldn’t it?  
# Summary  
Node is a powerful framework for building network applications. Its event-  
driven, non-blocking I/O model, single-threaded event loop, and built-in  
module system make it easy for developers to create efficient and scalable  
applications.  
Node wraps a VM like V8 to enable developers to execute JavaScript code in  
a simple way.  
Node built-in modules provide easy-to-use asynchronous APIs. Node’s  
module system allows developers to organize their code into reusable  
modules. These modules can be imported and used in other parts of the  
application.  
Node has a large and active community that has created many popular  
modules that can be easily integrated into Node projects. These modules can  
be found and downloaded from the npm registry. Chapter 2. Node Fundamentals  
A NOTE FOR EARLY RELEASE READERS  
With Early Release ebooks, you get books in their earliest form—the author’s  
raw and unedited content as they write—so you can take advantage of these  
technologies long before the official release of these titles.  
This will be the second chapter of the final book. Please note that the GitHub  
repo will be made active later on.  
If you have comments about how we might improve the content and/or  
examples in this book, or if you notice missing material within this chapter,  
please reach out to the author at efficient.node@gmail.com.  
In this chapter, we will first get comfortable with Node’s CLI and REPL  
mode, then will learn the fundamentals of how modules work in Node. We’ll  
see examples of functions that use Node’s concurrency model, then learn  
how Node’s event loop works with events and how event functions get  
executed when their events are triggered.  
# The node Command  
In Chapter 1, we used the node command briefly to explore Node’s REPL mode and then to execute Node scripts. The node command has many  
options and its behavior can be customized. It also supports arguments and  
environment variables to further customize what it does and pass data from  
the operating system environment to Node’s process environment. Let’s take  
a look\:  
In the terminal, type  
\$ node -h | less  
This will output the “help” documentation for the command \(on page at a  
time because we piped the output on the less command\). I find it useful to  
always get myself familiar with the help pages for the commands I use often.  
Usage\: node \[options\] \[ script.js \] \[arguments\]  
node inspect \[options\] \[ script.js | host\:port \] \[argume  
Options\:  
- script read from stdin \(default i  
file name is provided, interactiv  
if a tty\)  
-- indicate the end of node options  
--abort-on-uncaught-exception  
--build-snapshot aborting instead of exiting cause  
core file to be generated for ana  
Generate a snapshot blob when the process exits. Currently only sup  
in the node  
\_  
mksnapshot binary.  
-c,  
--check syntax check script without execu  
--completion-bash print source-able bash completion  
script  
-C,  
--conditions=... additional user conditions for  
conditional exports and imports  
--cpu-prof Start the V8 CPU profiler on star  
\:  
The first 2 lines specify how to use the node command. Anything in square  
brackets is optional, which means, according to the first line, that we can use  
the node command on its own without any options, scripts, or arguments.  
That’s what we did to start a REPL session. To execute a script, we used the  
node script.js syntax \(“script” can be any name there\).  
What’s new here is that there are options and arguments that we can use with  
the command. Let’s talk about these.  
TIP  
The second usage line is to start a terminal debugging session for Node. While that’s sometimes useful,  
in Chapter 6, I’ll show you a much better way to debug code in Node.  
In the help page, right after the usage lines, there is a list of all the options  
that you can use with the command. Most of these options are advanced, but knowing of their existence is a helpful reference. You should scan through  
this list just to get a quick idea of all the types of things that you can do, but  
let me highlight a few of the options that I think you should be aware of.  
The -c option \(or --check\) lets you check the syntax of a Node script  
without running that script. An example use of that option is to automate a  
syntax check before sharing code with others.  
The -e and -p options \(or --eval and --print\) can both be used for  
executing code directly from the command line. I like the -p one more  
because it executes and prints \(just like in the REPL mode\). To use these  
options, you pass a string of Node code in quotes. For example\:  
\$ node -p "Math.random\(\)"  
This is handy, as you can use it to create your own powerful commands \(and  
alias them if you want\). For example, say you need a command to generate a  
unique random string \(to be used as a password maybe\). You can leverage  
Node’s crypto module in a short -p one liner\:  
\$ node -p "crypto.randomBytes\(16\).toString\('hex'\)"  
Pretty cool, isn’t it!  
NOTE Note how the crypto module is available to the -p option without needing to require it \(just like in  
the REPL mode\).  
How about a command to count the words in any file?! This one will help us  
understand how to use arguments with the node command\:  
\$ node -p "fs.readFileSync\(process.argv\[1\]\).toString\(\).split\('  
Don’t panic. There’s a lot going on with this one. It leverages the powers of  
both Node and JavaScript. Go ahead and try it first. You can replace  
\~/.bashrc with a path to any file on your system.  
Let’s decipher this one a bit\:  
The readFileSync takes a file path as an argument and synchronously  
returns a binary representation of that file’s data. That’s why I chained a  
.toString call to it, to get the file’s actual content \(in UTF-8\).  
Furthermore, instead of hardcoding the file path in the command, I put the  
path as the first argument to the node command itself and used  
process.argv\[1\] to read the value of that argument \(see explanation of  
that next\). This allows the word-counting one-liner to be generic. We can  
alias it without the path argument and then use the alias with a path argument.  
Then once I have the content of the file, I use JavaScript’s split method, which is available on any string, to split the content using spaces, giving me  
an array of words. Then I just counted those with a .length call to  
estimate the number of words.  
THE PROCESS.ARGV ARRAY  
We know from the usage syntax that the node command can take  
arguments. These arguments can be any list of strings and when you specify  
them, you make them available to the Node process.  
The word-counting one-liner used process.argv\[1\]. The process  
object is a global object available in Node, and it simply represents Node’s  
interface to the actual OS process that executes the node command. The  
argv property is an array that holds all the arguments you pass to the  
node command \(regardless of how you’re using the command\). To  
understand that, run the following command\:  
node -p "process.argv" hello world  
This will output the entire array of arguments, Node uses the first element in  
that array for the path of the node command itself, then the arguments are  
listed in order. That’s why in the word-counting one liner, I used the second  
element of argv.  
Note that if you’re executing a script, the path for that script will be the second element of process.argv, and the arguments \(if any\) will be listed  
starting with the third element.  
The -r option \(or --require\) allows you to require a module before  
executing the main script. This is useful if you need to load a specific module  
before running your code or if you want to set up certain configurations or  
variables.  
For example, let’s say you have a Node project that requires the use of a  
module called dotenv, which loads environment variables from a file.  
Normally, you would need to include something like  
require\('dotenv'\).config\(\) at the beginning of your main file to use  
the dotenv module. However, with the -r option, you can load the  
module automatically without having to add it to each file\:  
\$ node -r dotenv/config index.js  
The --watch option allows you to watch a file \(and its dependencies\) for  
changes. It automatically restarts Node when a change is detected. This is  
very useful in development environments. You can test it with any of the files  
we wrote so far. For example, to run the Express.js example in watch mode,  
you can run\:  
\$ node --watch index.mjs This will start the server in watch mode. Make a change to the server.mjs  
file \(change the “Hello Express” string, for example\) and notice how the  
node command will automatically restart.  
The --test option makes Node look for and execute code that’s written for  
testing. Node uses a simple naming convention for that. For example, it’ll  
look for any files named with a .test.js suffix, or files whose names  
begin with test-  
.  
There are a lot more options, but most of them are for advanced use. It’s good  
to be aware of them so that in the future, you can look up if there’s one  
particular option that might make a task you’re doing simpler.  
Since Node is a wrapper around V8, and V8 itself has CLI options, the  
node\`  
command accepts many V8 options as well. The list of all the V8  
options you can use with the node command can be printed with\:  
\$ node --v8-options | less  
This is an even bigger list! You can set JavaScript harmony flags \(to turn  
on/off experimental features\), you can set tracing flags, customize the engine  
memory management, and many other customizations. As with the node  
command options, it’s good to know that all these options exist. Toward the end of the node -h output, you can see a list of environment  
variables, like NODE  
DEBUG, NODE  
\_  
\_  
PATH, and many more. Environment  
variables are another way to customize the behavior of Node or make custom  
data available to the Node process \(similar to command arguments\)  
Every time you run the node command, you start an operating system  
process. In Linux, the command ps can be used to list all running process, if  
you run it while a Node process is running \(like the Express.js example\), one  
of the listed process will be Node \(and you can see its process ID, and stop it  
from the terminal if you need to\). Here’s a command to output process details  
and filter the output for processes that have the word “node” in them\:  
\$ ps -ef | grep "node"  
Node’s global process object represents a bridge between the Node  
environment and the operating system environment. We can use it to  
exchange information between Node and the operating system. In fact, when  
you console.log a message, under the hood, the code is basically using  
the process object to write a string to the operating system stdout  
\(standard output\) data stream.  
Environment variables are one way to pass information from the operating  
system environment \(used to execute the node command\), to the Node  
environment, and we can read their values using the env property of the  
process object. Here’s an example to demonstrate that\:  
\$ NAME=  
"Reader" node -p "'Hello ' + process.env.NAME"  
This will output “Hello Reader”  
. It sets an environment variable NAME then  
reads its value with process.env.NAME. You can even set multiple  
environment variables if you need, either directly from the command line like  
this example, or using the Linux export command prior to executing the  
node command\:  
\$ export GREETING=  
"Hello"; export NAME=  
"Reader"; \\  
node -p "process.env.GREETING + ' ' + process.env.NAME"  
TIP  
In Linux, you can use a semicolon to execute multiple commands on the same line, and \\ to split a  
command into multiple lines.  
You can use environment variables to make your code customizable on  
different machines or environments. For example, the Express.js example in  
Chapter 1 hard-coded the port to be 3000. However, on a different machine,  
3000 might not be available, or you might need to run the server on a  
different port in a production environment. To accomplish that, you can modify the code to use process.env.PORT ?? 3000 instead of just  
3000 \(in the listen method\) and then run the node command with a  
custom port when you need to\:  
\$ PORT=4000 node index.mjs  
Note that if you don’t specify a port, the default port would be 3000 because I  
used the ?? \(nullish\) operator to specify a value when  
process.env.port does not have one. This is a common practice.  
NOTE  
You can’t use Node’s process.env object to change an operating system environment variable. It’s  
basically a copy of all the environment variables available to the process.  
The list of environment variables shown toward the end of node -h output  
are Node’s built-in environment variables. These are variables that Node will  
look for and use if they have values. Here are a few examples\:  
NODE  
\_  
DEBUG can be used to tell Node to output more debugging  
information when it uses certain libraries. We give it a comma-separated  
list of modules to debug, for example, with NODE  
\_  
DEBUG=fs,http,  
Node will start outputting debugging messages when the code uses either  
the fs or http modules. Many packages support this environment  
variable. NODE  
\_  
OPTIONS is an alternative way to specify the options Node  
supports instead of passing them to the command line each time.  
NODE  
\_  
PATH can be used to simplify import statements by using absolute  
paths instead of relative ones. We’ll see an example of that later in the  
chapter.  
# Node’s REPL Mode  
In Node’s REPL mode, as we learned in Chapter 1, you can type any  
JavaScript code, and Node will execute it and automatically print its result.  
This is a convenient way to quickly test short JavaScript expressions \(and it  
works for bigger code too\). However, there are a few other helpful things you  
can do in REPL mode beyond the quick tests.  
In REPL mode, you usually type an expression \(for example\: 0.1 + 0.2\), and  
hit Enter to see its result. You can also type statements that are not  
expressions \(for example\: let v = 21;\) and when you hit Enter, the  
variable v\`  
will be defined, and the REPL mode will print undefined  
since that statement does not evaluate to anything. If you need to clear the  
screen, you can do so with CTRL+L.  
If you try to define a function, you can write the first line and hit Enter, and  
the REPL mode will detect that your line is not complete, and it will go into a  
multiline mode so that you can complete it. Try and define a small function to test that.  
The REPL multiline mode is limited but there’s an integrated basic editor  
available within REPL as well. While in REPL mode, type .editor to start  
the basic editor mode, then you can type as many lines of code as you need,  
you can define multiple functions, or paste code from the clipboard, then,  
when you are done, hit CTRL+D to the have Node execute all the code you  
typed in the editor.  
The .editor command is one of many REPL commands which you can  
see by typing the .help command\:  
\> .help  
.break Sometimes you get stuck, this gets you out  
.clear Alias for .break  
.editor Enter editor mode  
.exit Exit the REPL  
.help Print this help message  
.load Load JS from a file into the REPL session  
.save Save all evaluated commands in this REPL session to a  
Press Ctrl+C to abort current expression, Ctrl+D to exit the RE  
The .break command \(or its .clear alias\) lets you get out of some  
weird cases in REPL sessions. For example, when you paste some code in  
Node’s multiline mode and you are not sure how many curly braces you need to get to an executable state. You can completely discard your pasted code by  
using a .break command. This saves you from killing the whole session to  
get yourself out of situations like these.  
The .exit command exits the REPL or you can simply press Ctrl+D.  
The .save command enables you to save all the code you typed in one  
REPL session into a file. The .load command enables you to load  
JavaScript code from a file and make it all available within the REPL session.  
Both of these commands take a file name as an argument.  
One of my favorite things about Node’s REPL mode is how I can inspect  
basically everything that’s available natively in Node without needing to  
require them. All the built-in modules \(like fs, http, etc\) are defined  
globally and you can use the TAB key to inspect their APIs.  
Just like in a terminal or editor, hitting the TAB key once in a REPL session  
will attempt to auto-complete anything you partially type. Try typing cr and  
hit TAB to see it get auto-completed to crypto. Hitting the TAB key twice  
can be used to see a list of all the possible things you can type from whatever  
partially-typed text you have. For example, type a and hit TAB twice to see  
all the available global objects that begin with a.  
This is great if you need to type less and avoid typing mistakes, but it gets  
better. You can use the TAB key to inspect the methods and properties  
available on any object. For example, type Array. and hit TAB twice to see all the methods and properties that you can use with the JavaScript  
Array class. This works with Node modules as well. Try it with fs. or  
http..  
It even works with objects that you create. For example, create an empty  
array using let myArr = \[\];, then type myArr. and hit TAB twice to  
see all the methods available on an array instance.  
Best of all, TAB discoverability works on the global level, if you hit TAB  
twice on an empty line, you get a list of everything that is globally available.  
This is a big list, but it’s a useful one, it has all the globals in the JavaScript  
language itself \(like Array, Number  
\`  
, and Math\), and it has all the globals  
from Node \(like process and setTimeout\), and it also lists all the core  
modules that are available natively in Node \(like fs and http\).  
AbortController AbortSignal  
Array ArrayBuffer  
BigInt BigInt64Array  
Blob Boolean  
Buffer ByteLengthQueuingStrategy  
...  
TIP  
In the list of all global things, you’ll notice an underscore character  
\_  
. This is a handy little shortcut in REPL that stores the value of the last evaluated expression. For example, after executing a  
Math.random\(\) line, you can type  
\_  
to access that same random value. You can even use it in any  
place where you use a JavaScript expression. Try let random =  
\_;.  
# How Modules Work  
A module is simply a reusable block of code. Something you can include and  
use in any application, as many times as you need. In Node, a module can be  
a single file or a group of files with a main one. There’s always a main file in  
a Node module, and that’s the file that we “require” \(or “import”\). Modules  
have public APIs. When we require a module, we usually get back an object  
that represents the module’s API.  
TIP  
For the rest of this section, I’ll mostly use the terminology and concepts for CommonJS modules. ES  
modules are similar but I’ll point out some differences too.  
JAVASCRIPT ARGUMENTS KEYWORD  
The next section uses the arguments keyword. If you’re not familiar with  
it, here’s a refresher\:  
Within a function in JavaScript, you can use the arguments keyword to  
access the value of all the arguments you pass to the function when you call it. For example\:  
function sumArgs\(\) \{  
let sum = 0;  
for\(i = 0; i \< arguments.length; i++\) \{  
sum += arguments\[i\];  
\}  
return sum;  
\}  
console.log\(  
sumArgs\(1, 5, 9, 11\)  
\);  
Executing this file will output 26. The value for arguments within  
sumArgs is an array-like object that holds the 4 passed in arguments. That’s  
why we were able to loop over it. This works no matter how many arguments  
you pass when you call the function.  
To understand one important aspect about Node modules, let’s create a new  
module, name it main.js and put the following line in it\:  
console.log\(arguments\);  
What do you think executing this file will output? If you don’t know that all Node modules are wrapped in special functions,  
you’d say undefined. But the output of that line will reveal 5 argument  
values!  
TIP  
You need to run main.js as a CommonJS module. If you have the type property in  
package.json set to module, you need to change it to commonjs or remove it \(the default is  
commonjs\).  
Node wraps every module implicitly with a function. When you execute a  
module, Node calls that function, and - as the output reveals - passes 5  
arguments to that function as well.  
You can actually see the wrapping function detail if you print the value of  
require\('module'\).wrapper \(You can do that in a REPL session\).  
\(function\(exports, require, module, \_\_  
filename, \_\_  
dirname\) \{  
// Module code actually lives in here  
\}\);  
When you use the  
exports/ require/ module/  
filename/  
\_\_  
\_\_  
dirname keywords in a  
module, you’re not using a “global” variable, you’re just using the implicit  
wrapper function’s arguments. NOTE  
Similar to CommonJS module wrapping, ES modules are executed in an implicit function scope, but  
you can’t access the arguments keyword there, and the 5 arguments are not defined in ES module  
scopes.  
The  
filename value has the name of the file. The  
\_\_  
has the path to the directory where the file is hosted.  
dirname value  
\_\_  
The exports, require, and module arguments are Node’s way to  
manage a module’s API. To understand them, let’s create another module in  
the same directory as main.js, let’s name this one config.js. Usually,  
you’d put any configuration logic in a separate module like that.  
Since config.js is yet another module that will be wrapped by Node, it’ll  
have the 5 arguments as well. Let’s console.log the exports argument  
in config.js and execute the file with node config.js\:  
console.log\(exports\)  
As you can see, the value for exports is simply an empty object, and we  
can change that object and add properties to it, just like we can change any  
JavaScript variable.  
There are 2 ways to execute a module in Node. So far we used the first and  
main way, which is to specify the file path for the node command. The other way to execute a module is through the require argument \(which is  
a function\), one module can require another module using that function, for  
example, the main.js module, can require the config.js module\:  
require\('  
./config.js'\);  
We invoke the require function with the path to the module we’re  
interested in. The path can be a relative one when it starts with a ., or an  
absolute one \(for example\: /Users/samer/efficient-  
node/main.js\).  
When we execute main.js now using the node command, we’ll see the  
console.log line from config.js.  
Now we can say that the main module “depends” on the config module,  
or that the config module is a dependency for the main module. This is  
where the term “dependency management” comes from. We are managing  
the dependencies of a module here and bringing one module’s API to use in  
another module.  
Let’s define the API for the config module. Let’s define a static property  
and a function property\:  
exports.PORT = process.env.PORT ?? 8080;  
exports.SERVER  
\_  
URL = \(host = process.env.HOST ?? "localhost"\) = \`http\://\$\{host\}\:\$\{exports.PORT\}\`;  
The exports argument in CommonJS modules is an alias to  
module.exports which is initialized as an empty object. The official API  
for the module is the module.exports value. As long as that value is an  
object, we can use the exports alias to define the API. In some cases, you  
might need the top-level API object to be a function or a class, or anything  
else that’s not a simple aliased object. In these cases, you’ll need  
module.exports to define the API \(we’ll see an example of that soon\).  
When we use the require function in main.js to get the API for  
config.js, we’re basically invoking the wrapping function for and getting back the value of module.exports. It’s a bit more  
complicated than that, but that is a good simplification to remember.  
config  
Let’s capture that value and print it\:  
const config = require\('  
./config.js'\);  
console.log\(config\);  
When you execute main.js now, you’ll see the 2 properties we defined in  
config.js \( PORT and SERVER  
\_  
URL\).  
Note how I used process.env variables to make the configurations customizable on different environments. I also made SERVER  
URL a  
\_  
function that receives a host argument, which is customizable through the  
environment as well. Making a configuration value a function allows it to be  
customizable at run time.  
To understand another concept about how Node modules work, let’s repeat  
the require line in main.js multiple times\:  
require\('  
require\('  
require\('  
./config.js'\);  
./config.js'\);  
./config.js'\);  
Given these 3 require lines, when we execute main.js, how many  
times will the console.log in config.js be outputted?  
The answer is not 3 times. It’ll only be outputted once.  
Modules in Node are cached after the first call. A module is executed the first  
time you require it, then when you require it again, Node loads it up from a  
cache.  
If you look at front-end applications, like React for example, all component  
files require the React module, and that’s okay, because only the first require  
will do the work, the rest will use the cache.  
But what if I do want the console.log message to show up multiple times every time we require config.js?  
You can actually clear the modules cache, but generally, that’s not a good  
practice. However, you can make the top export of config.js a function  
instead of an object, put all the code there inside the function, and call the  
function every time you need the code to be executed. The cache, in that case,  
will cache the definition of the function. The Non-object APIs sidebar has an  
example of that.  
NON-OBJECTS APIS  
In some cases, you might need the API to be something other than a simple  
object. For example, let’s say that we want all the configuration properties to  
be the result of executing a function rather than a direct object. This might be  
helpful for testing as we can mock the configuration function differently for  
different tests.  
To make the top-level API object a function, you need to use  
module.exports \( exports is only an alias to the initial empty API  
object\). Here’s an example\:  
module.exports = \(\) =\> \{  
return \{  
PORT\: process.env.PORT ?? 8080,  
SERVER  
\_  
URL\: \(host = process.env.PORT ?? "localhost"\) =\>  
\`http\://\$\{host\}\:\$\{exports.PORT\}\`  
, \};  
\};  
With that, to use the configuration value in main.js, we’ll need to invoke  
what we get from the require function\:  
const config = require\('  
./config.js'\);  
console.log\(  
config\(\) // Note how we are now invoking this.  
\);  
This method is often helpful when you need to use the “dependency  
injection” design pattern, which is when some modules are injected into other  
modules to create more flexibility and make modules more reusable.  
# Node Modules Lookup  
When you require a module in Node, Node uses the following procedure to  
determine how and where to look for the required module\:  
If the module does not start with a . \(denoting a relative path\) or a /  
\(denoting an absolute path\), Node will first check if the module is a core one \(like fs or http\). If it is, it’ll load it directly.  
If the module is not a core one, Node will look for it under node  
\_  
modules  
folders starting from the directory where the requiring module is, and going  
up in the folders hierarchy. For example, if the requiring module is in  
/User/samer/efficient-node/src, Node will first look under src  
for a node  
modules folder, if it does not find one, it’ll look next under  
\_  
efficient-node, and so on all the way to the root path.  
You can use this lookup nature to localize modules dependencies by having  
multiple node  
\_  
modules folders in your project, but that generally  
increases the complexity of the project.  
You can also use this lookup nature to have multiple projects share a  
node  
\_  
modules folder by placing that folder in a parent directory common  
to all projects, or even have a global node  
\_  
module folder for all projects  
on your machine. While this might be useful in some cases, having a single  
node  
\_  
modules folder per project is the standard and recommended  
practice.  
If the required module starts with a . or /, Node will look for it in the  
relative or absolute directory specified by the path.  
If you set the NODE  
\_  
PATH environment variable before executing a script.  
Node will first look for required modules in the paths specified by  
NODE  
\_  
PATH \(which can be a single path, or multiple paths separated by a comma\). This can be useful to use short absolute paths instead of confusing  
relative ones. For example, with NODE  
\_  
PATH set to src, you can require  
a module under src using require\('module'\) even when the requiring  
module is multiple levels deep under src, instead of doing something like  
require\('  
../../../module'\).  
TIP  
Besides JavaScript files, you can also require JSON files in Node. When you require a JSON file, you  
get back a JavaScript object representing the data in the JSON file.  
# Timer Functions  
You can delay the execution of a code block, or make it repeat regularly  
using timer functions in Node like setTimeout or setInterval. These  
functions behave very similarly to how they do in browser environments.  
A timer function receives a function as an argument. Here’s an example\:  
const printGreeting = \(\) =\> console.log\('Hello'\);  
setTimeout\(printGreeting, 4  
\_  
000\);  
This code uses the setTimeout timer function to delay the printing of  
“Hello” by 4 seconds \(the second argument to setTimeout is the delay period in milliseconds\).  
The printGreeting function \(which is passed as the first argument to  
setTimeout\) is the function whose execution will be delayed. This is  
usually referred to in Node as a callback function.  
If we run this script with the node command, Node will pause for 4 seconds  
and then it’ll print the greeting and exit after that.  
TIP  
If you need to delay the execution of a function that receives arguments, you can pass its arguments  
starting from the third argument to setTimeout.  
To repeat the execution of a block of code, you can use the setInterval  
timer function. If we replace setTimeout with setInterval in the last  
example, Node will print the “Hello” message every 4 seconds, forever.  
All timer functions can be canceled once they are defined. When you call a  
timer function, you get back a unique timer ID. You can use that timer ID to  
cancel the scheduled timer. We can use clearTimeout\(timerId\) to stop  
timers started by setTimeout, and clearInterval\(timerId\) to stop  
timers started by setInterval.  
For example, in this code\: const timerId = setTimeout\(  
\(\) =\> console.log\('Hello'\),  
0,  
\);  
clearTimeout\(timerId\);  
Even though we started a timer to print a message after 0 milliseconds, that  
message will not be printed at all because we canceled the timers right after it  
was defined.  
TIP  
Node supports another function that sets a timer with a 0 milliseconds delay, it’s named  
setImmediate and it does not receive a delay argument.  
0-milliseconds delayed code is a way to “schedule” code to be immediately  
invoked when all the synchronous code defined after it is done executing.  
This is an example of why Node is “non-blocking”  
. You can basically define  
code to be executed in a way that does not block the code after it. Here’s an  
example to understand that\:  
setTimeout\(  
\(\) =\> \{  
for\(let i=0; i \<= 1  
000  
000  
\_  
\_  
\_  
000; i++\) \{ // ...  
\}  
\},  
0,  
\);  
console.log\('Hello'\);  
In this example, although we defined a loop that ticks 1 billion times, that  
code will not block the printing of the Hello message. The printing will  
happen first, then the big loop will be executed.  
I’m using a big loop here as a simplification of something that’ll take a long  
time to execute, but in practice, you should never use a big loop like that  
synchronously in Node, because Node is single-thread, any loop like that will  
actually block the code after it. For example\:  
setTimeout\(  
\(\) =\> console.log\('Hello!'\),  
0,  
\);  
for\(let i=0; i \<= 1  
000  
000  
\_  
\_  
\_  
000; i++\) \{  
// ...  
\}; Here, even though the printing of “Hello” is scheduled to be executed  
immediately, it will not. Node will have to wait on the for loop to finish first,  
and then, a few seconds later \(when I tested this on my machine\), it’ll execute  
the delayed function.  
This is a general observation about timer functions, their delays are not  
guaranteed to be exact, but rather a minimum amount. Delaying a function by  
10 milliseconds, means that the execution of the function will happen after a  
minimum of 10 milliseconds, but possibly longer depending on the code that  
comes after it!  
Why exactly does a for loop block the code that was scheduled before it? It’s  
time to dive into the details of Node’s concurrency model.  
# Concurrency in Node  
We learned that Node uses a single-threaded event loop for its non-blocking  
nature. To understand how that is achieved, we need to learn about a stack  
and a queue! The stack is known as “The Call Stack”  
, and the queue is  
known as “The Event Queue”  
.  
The call stack is part of V8 \(not Node\), and it’s how V8 manages function  
calls. A stack is a last-in/first-out data structure. Every time we call a function  
in our code, a reference to that function is placed on the call stack. When you  
nest function calls \(when functions call other functions\), the function references are stacked in the call stack. Then V8 will pop one function at a  
time \(from the top of the stack\) to complete the initial call.  
Any JavaScript code you write in Node has to be placed in the call stack for  
V8 to execute it. The call stack is single-threaded, which means when there  
are functions in the call stack, everything else \(including event-driven  
callbacks\) will have to wait until the call stack is available again.  
This is exactly why the for loop in the previous example blocked the  
execution of a function that was scheduled to be immediately executed. We  
simply made the call stack busy with that loop and you should never do that.  
Any code that needs to run for a long time should be done with either  
asynchronous tools, or in its own worker thread \(more on that later\).  
When an asynchronous function like setTimeout is placed on the call  
stack and it’s time for it to be popped, Node will take control of it, freeing the  
call stack to pop the next stacked function if any. Asynchronous functions  
usually have a callback function that needs to be invoked once the  
asynchronous function is done.  
Callback functions can be generalized under the “event” terminology. We  
define an event, and a function to be executed after that event. For the timer  
case, the event was “time has passed”  
, but other events can include user  
input, changes in system state, or messages from other parts of the program.  
This is why there is an “Event Queue” in this structure, Node queues the event functions that are ready to be executed in a queue. When the timer is  
ready, Node will queue its callback function into the event queue. Multiple  
event functions can be queued to later be processed in order \(a queue is a  
first-in/first-out structure\).  
This is where the event loop comes into action. The event loop is a simple  
infinite loop, continuously ticking to monitor both the call stack and the event  
queue. When the call stack is free, and there are queued functions in the event  
queue, the event loop takes the top function in the queue, and places it on the  
call stack for V8 to execute it in our program. The event loop keeps doing  
that until there are no functions left in the event queue, in which case, the  
Node process will exit.  
# Summary  
Node CLI has many powerful options that we can control. We can also pass  
arguments to it, set environment variables before running it, and both of these  
options allow us to pass data from the operating system environment to a  
running Node process. Node’s process object is the bridge.  
Node’s REPL mode is a good way to explore everything you can use in  
Node, and take a quick look at the API of anything, including core modules,  
installed modules, and even objects you instantiate.  
CommonJS Modules in Node are implicitly wrapped in a function and are passed 5 arguments. We use the require function \(which is one of the 5  
arguments\), to make modules depend on each other and get access to their  
APIs. Node manages a cache for all required modules. To discover where a  
required module is, Node follows a predefined set of rules depending on the  
path of the module. A path can be a relative one, an absolute one, or just a  
name. For the latter case, Node looks for the module in node  
modules  
\_  
folders.  
Node’s event loop handles asynchronous tasks using the call stack and event  
queue. The call stack is a data structure managed by V8 that tracks function  
calls. Any JavaScript code in Node must be placed in the call stack for V8 to  
execute it. The event queue is used to handle asynchronous tasks such as  
timers or I/O operations. When an asynchronous function is ready, its  
callback function is registered to the event queue. The event loop monitors  
the call stack and event queue, and when the call stack is free, it pops the first  
function off the event queue and adds it to the call stack for execution.  
