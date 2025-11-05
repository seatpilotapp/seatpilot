# Nuxt 3 Projects  
Copyright © 2024 Packt Publishing  
All rights reserved. No part of this book may be reproduced, stored in a re-  
trieval system, or transmitted in any form or by any means, without the pri-  
or written permission of the publisher, except in the case of brief quotations  
embedded in critical articles or reviews.  
Every effort has been made in the preparation of this book to ensure the ac-  
curacy of the information presented. However, the information contained in  
this book is sold without warranty, either express or implied. Neither the au-  
thors, nor Packt Publishing or its dealers and distributors, will be held liable  
for any damages caused or alleged to have been caused directly or indirect-  
ly by this book.  
Packt Publishing has endeavored to provide trademark information about all  
of the companies and products mentioned in this book by the appropriate  
use of capitals. However, Packt Publishing cannot guarantee the accuracy of  
this information.  
1 Group Product Manager\: Kaustubh Manglurkar  
Publishing Product Manager\: Vaideeshwari Roshan  
Senior Content Development Editor\: Feza Shaikh  
Technical Editor\: Simran Ali  
Copy Editor\: Safis Editing  
Project Coordinator\: Shagun Saini  
Indexer\: Subalakshmi Govindhan  
Production Designer\: Ponraj Dhandapani  
Marketing Coordinators\: Namita Velgekar and Nivedita Pandey  
First published\: June 2024  
Production reference\: 2040624  
Published by Packt Publishing Ltd. Grosvenor House 11 St Paul’s Square  
Birmingham B3 1RB, UK  
ISBN 978-1-83763-254-1  
www.packtpub.com  
2 To my parents, for their unwavering support; to my manager, Danny  
Ayoubi; to everyone at Ejad Solutions; to my mentors, Mahmoud Baalbaki  
and Tawfek Daghistani; and to someone truly special, whose pride in me  
means the world.  
3 – Kareem Dabbeet  
4 Foreword  
It is with great pleasure that I introduce this hands-on guide to mastering  
Nuxt.js 3. Having had the privilege of teaching Vue and Nuxt for the past  
three years and collaborating with Kareem on a few Nuxt educational  
pieces, I can confidently say that this book stands as a testament to both the  
power of Nuxt.js and the author's deep understanding of the framework.  
Looking over the book’s content, I’m excited to see that Kareem has opted  
for an extremely practical and hands-on approach. The chapters are broken  
up not only by concept but also by project, giving you the opportunity to  
practice what you’ve learned for a more comprehensive learning experi-  
ence. He spends time showing the how-to but never fails to neglect the why.  
Nuxt.js 3 represents a significant step forward in the Vue.js community,  
marrying the frontend and backend not just for server-side-rendered views  
but for a tight-knit framework that covers more of the stack than just what’s  
rendered in the browser. This allows for a wide variety of built-in function-  
ality and conventions that all add up to more robust modern web ap-  
plications in a shorter amount of time. This book captures the essence of  
what makes Nuxt.js 3 so compelling and provides a clear, practical path for  
harnessing its full potential.  
Daniel Kelly  
5 Lead Instructor at Vue School  
6 Contributors  
# About the authors  
Kareem Dabbeet is a certified Vue developer and frontend team lead with  
over 6 years of professional web development experience. He specializes in  
JavaScript technologies and has a strong background in algorithms and  
problem-solving. Kareem is a top contributor to the Vuetify framework and  
has also made significant contributions to the Nuxt framework and Quasar.  
He is highly skilled in the Vue framework \(Vue - Nuxt - Pinia -  
Composition API\). In his current role at Ejad Solutions, he collaborates on  
developing large-scale projects using best coding practices and principles.  
Kareem is also highly skilled in user experience.  
I am grateful to my parents and friends. Special thanks to everyone at my  
company, Ejad Solutions, for their guidance and encouragement.  
Mahmoud Baalbaki armed with a BBA from Canterbury University, is a  
seasoned Solution Architect and Project Manager renowned for his strategic  
and analytical prowess in the tech industry. As the founder of Entragile, he  
spearheads pivotal technology initiatives, while his role at Methodcorp re-  
flects his extensive PMO expertise, guiding projects that enhance database  
management and cloud infrastructures. Mahmoud's leadership style is char-  
7 acterized by a commitment to innovation and excellence, attributes that res-  
onate throughout his professional and personal life in Amman.  
# About the reviewers  
Khaled Oghli is a seasoned senior frontend developer and certified Vue.js  
developer, specializing in crafting modern interface websites with immer-  
sive 3D experiences reminiscent of video games. With over 7 years of expe-  
rience, Khaled brings expertise in delivering visually captivating and user-  
friendly web solutions. His passion lies in creating seamless, immersive  
web animations that serve as compelling storytellers, bringing interfaces to  
life with fluid motion. Currently at Dubai Municipality, he leads frontend  
development efforts, leveraging his skills to architect cutting-edge inter-  
faces. Committed to innovation, Khaled stays abreast of the latest trends in  
web development to deliver top-notch results.  
I am profoundly grateful to my wife for her unwavering support and under-  
standing, always placing my growth at the forefront and granting me the  
freedom to refine my web development skills. Moreover, I extend my heart-  
felt appreciation to my parents for their earnest prayers to guide my suc-  
cess. Their enduring blessings and unwavering faith have served as pillars  
of strength, propelling me forward to pursue excellence and conquer new  
horizons.  
8 Alejandro Arevalo is a seasoned IT professional with over 8 years of expe-  
rience in the field of frontend development. Throughout his career, he has  
held various technical positions at different companies that has enabled him  
to acquire extensive knowledge about Nuxt, Vue, TypeScript, Tailwind  
CSS, and many more.  
He is passionate about ensuring all projects achieve a high level of perfec-  
tion through ensuring clean code, scalability, readability, and all modern  
practices that every seasoned developer must know to excel in their career.  
I’d like to thank Packt Publishing for the opportunity to review this book.  
Thanks to this I was able to learn more about lots of technologies I hadn’t  
heard about before reading the book.  
9 Table of Contents  
# Preface  
# 1  
# Setting Up Your Nuxt 3 Environment for a  
# Basic “Hello Nuxt” App  
Technical requirements  
Introduction to Nuxt 3  
The evolution of web development  
The birth of Nuxt  
Why Nuxt?  
The architecture and principles of Nuxt  
Built on top of Vue  
Universal rendering and static site generation  
Performance optimizations  
10 Installing and setting up the Nuxt 3 environment  
Prerequisites  
Creating your first “Hello Nuxt” app  
Initialization – the steps to create a new Nuxt  
project  
The default project structure  
Recommended extensions  
Vue - Official  
Nuxtr  
Summary  
Practice questions  
Further reading  
# 2  
# Building a Simple Portfolio Using Tailwind  
# CSS and a Dive into Nuxt 3’s Project  
# Structure  
11 Technical requirements  
Essential background – what is Tailwind CSS?  
Setting up and integrating with Tailwind CSS  
Create a new project  
Installing Tailwind CSS  
Creating the website layout and customizing the font  
Embedding the Lato font \(or any Google font\)  
Creating the layout  
Managing images in the assets folder  
Creating the ProjectShowcase and SkillChip  
components  
Creating the SkillChip component  
Creating the ProjectShowcase component  
Styling within the component itself  
Creating a useScrollTo composable  
12 Summary  
Practice questions  
Further reading  
# 3  
# Building a Real Estate Listing Project to  
# Grasp Routing, Views, Layouts, and Plugins  
Technical requirements  
Essential background- understanding Nuxt 3  
routing, layouts, and plugins  
Setting up your real estate listing project in Nuxt 3  
Defining a default layout for the website and  
overriding it with a 404 page  
Defining a default layout  
Creating the BaseHeader component  
Creating the home page and exploring TypeScript  
support  
13 Introduction to the pages directory  
Exploring TypeScript support  
A note on the component path  
Create Property and Category Card Components  
Creating the home page  
Creating a dynamic listing page  
Creating and validating a property details page  
Creating a Custom error page  
Creating a plugin to use Dasyjs for formatting dates  
Installing Dayjs  
Setting up the plugin directory and file  
Initializing Dayjs with configuration  
Using the global FromNow function for the property  
details page  
Summary  
14 Practice questions  
Further reading  
# 4  
# Building a Weather Dashboard – Data  
# Fetching and State Management  
Technical requirements  
Essential background – understanding Nuxt 3 Data  
Fetching and State Management  
Integrating Nuxt UI in the weather dashboard  
Exploring data fetching with \$fetch in Nuxt 3  
Creating an account on OpenWeatherMap  
Testing the API  
Defining global types  
Utilizing useRuntimeConfig to expose configuration  
within the application  
Creating the CitiesLookup component  
15 Fetching the weather data  
Integrating with the Pinia store to monitor city and  
weather data  
Installing Pinia and creating the first store  
Integrating Reactive States and Functions in Pinia  
Store  
Refactoring components for Pinia store integration  
Implementing weather data widget components  
Summary  
Practice questions  
Further reading  
# 5  
# Building a Personal Posts Space and  
# Implementing Authentication  
Technical requirements  
Essential Background\: What is Supabase?  
16 Setting Up Initial Supabase Project For User  
Authentication  
Setting Up the Database Schema  
Integrating Nuxt 3 with Supabase  
Creating a New Nuxt 3 Project with Supabase  
Integration  
Overriding Authentication Routes  
Authentication UI and Validating Inputs  
Installing Required Modules  
Setting Up Auth Pages  
Using Joi for Input Validation  
Setting Up User Authentication with Supabase  
Creating the Signup Function  
Creating and Managing Personal User Posts  
Adding RLS Policy for the ‘Posts’ Table  
Using Supabase API for Post Management  
17 Building the Post Information Page  
Displaying User Posts  
Summary  
Practice Questions  
Further Reading  
# 6  
# Enhancing a Recipe-Sharing Site While  
# Optimizing SEO Using Nuxt 3  
Technical requirements  
Essential background – Understanding Search  
Engine Optimization \(SEO\)  
Exploring the repository  
Defining metadata for each page  
Setting up the project structure  
Setting up site configuration with nuxt SEO  
18 Overriding metadata  
Implementing structured data for improved search  
engine rankings  
Creating a recipe node  
Optimizing recipe images to load pages faster  
Creating a custom og\:image for the recipe page  
Generating dynamic site maps for the recipe-sharing  
site  
Summary  
Practice questions  
Further reading  
# 7  
# Building a Quiz Game Application to Learn  
# about Testing  
Technical requirements  
Exploring the repository  
19 Essential background – fundamentals of testing  
Implementing the quiz game app  
Questions data  
Types definitions  
Quiz Pinia store  
The app.vue file  
Writing unit tests for the Pinia store  
Exploring Vitest  
Testing the quiz store  
Writing unit tests for components  
Setting up for component testing  
Creating the Question.spec.ts test file  
Writing the component unit test  
Writing end-to-end tests for the quiz game  
Setting up for E2E testing  
20 Writing E2E tests  
Exploring Vitest UI and test coverage tools  
Summary  
Practice questions  
Further reading  
# 8  
# Creating a Custom Translation Module in a  
# Nuxt 3 Monorepo  
Technical requirements  
Essential background – fundamentals of testing  
Setting up a Nuxt monorepo  
Creating a website application  
Developing a custom translation module  
Installing the module in our application  
Configuring translation module options  
21 Reading local files inside the module  
Expanding the module with plugins, composables,  
and components  
Creating a \$t helper function  
Setting up a language switcher component  
Future directions  
POS system example  
E-commerce platform example  
Final thoughts  
Summary  
Practice questions  
Further reading  
# Index  
# Other Books You May Enjoy  
22 Preface  
This book is your complete guide to mastering Nuxt 3, a progressive frame-  
work that simplifies Vue.js development. Through a series of carefully  
crafted chapters, you’ll gradually explore the framework’s powerful fea-  
tures by building practical applications. Starting with a simple “Hello Nuxt”  
app, each chapter progressively introduces you to more complex concepts,  
such as routing, layouts, and advanced SEO techniques. By the end, you’ll  
confidently navigate real-world challenges, develop scalable applications,  
and harness the power of Nuxt 3 for your projects.  
# Who this book is for  
If you are a junior or mid-level Vue.js developer with a basic knowledge of  
building web applications and are looking to expand your expertise in the  
web development domain, this book is for you. It will guide you through  
learning Nuxt, tackling real-world problems, and implementing best prac-  
tices. Senior developers looking to refresh their knowledge or explore Nuxt  
can also benefit from this book.  
# What this book covers  
23 Chapter 1, Setting Up Your Nuxt 3 Environment for a Basic “Hello Nuxt”  
App, shows you how to set up a Nuxt 3 environment and create a basic  
“Hello Nuxt” app to verify a successful setup, laying the foundation for  
more complex projects.  
Chapter 2, Building a Simple Portfolio Using TailwindCSS and Diving into  
Nuxt 3’ s Project Structure, explores how to construct a simple portfolio, uti-  
lize TailwindCSS for styling, and discover the intricacies of Nuxt 3’s  
project structure.  
Chapter 3, Building a Real Estate Listing Project to Grasp Routing, Views,  
Layouts, and Plugins, delves into how to develop a real estate listing project  
to understand Nuxt 3’s dynamic and nested routing, page layouts, and plug-  
in architecture.  
Chapter 4, Building a Weather Dashboard to Learn Data Fetching and  
State Management, guides you through creating a weather dashboard, fo-  
cusing on Nuxt UI components, mastering data fetching, and using Pinia for  
state management.  
Chapter 5, Building a Personal Post Space and Implementing  
Authentication, explores how to create a personal posting platform with  
user authentication using Nuxt 3 and Supabase, covering user registration,  
login, and secure post management.  
24 Chapter 6, Enhancing a Recipe-Sharing Site while Optimizing SEO Using  
Nuxt 3, covers how to enhance a recipe-sharing site’s SEO to boost search  
engine visibility and organic traffic, through advanced Nuxt 3 techniques.  
Chapter 7, Building a Quiz Game Application to Learn Testing, examines  
how to construct and test a quiz game application, focusing on unit and E2E  
\(end to end\) testing to ensure functionality and reliability.  
Chapter 8, Creating a Custom Translation Module in a Nuxt 3 Monorepo,  
dives into building a custom translation module within a monorepo setup,  
using Nuxt 3, exploring the benefits of modular system architecture for  
large-scale applications.  
# To get the most out of this book  
You should have a basic understanding of JavaScript and Vue.js, as Nuxt 3  
is built upon these technologies. Familiarity with the ES6 syntax, the Vue  
composition API, and concepts such as asynchronous programming would  
be particularly useful. It’s recommended that you have Node.js and pnpm  
installed on your computer, as the examples and project setups in this book  
rely on these tools.  
Required tools Version  
details  
25 Node.js \>=18.0.0  
Pnpm \>= 7  
Visual Studio Code \(recommended\) or any other  
IDE  
If you are using the digital version of this book, we advise you to type  
the code yourself or access the code from the book’s GitHub repository  
\(a link is available in the next section\). Doing so will help you avoid any  
potential errors related to the copying and pasting of code.  
# Download the example code files  
You can download the example code files for this book from GitHub at  
https\://github.com/PacktPublishing/Nuxt-3-Projects. If there’s an update to  
the code, it will be updated in the GitHub repository.  
We also have other code bundles from our rich catalog of books and videos  
available at https\://github.com/PacktPublishing/. Check them out!  
# Code in Action  
26 The Code in Action videos for this book can be viewed at  
https\://packt.link/hN2JZ.  
# Conventions used  
There are a number of text conventions used throughout this book.  
Code in text\: Indicates code words in text, database table names, fold-  
er names, filenames, file extensions, pathnames, dummy URLs, user input,  
and Twitter handles. Here is an example\: “ First, rename the newly created  
module directory from my-module to translation to better reflect its  
purpose.”  
A block of code is set as follows\:  
// packages/translation/src/module.ts  
export default defineNuxtModule\<ModuleOptions\>\(\{  
name\: 'translation',  
configKey\: 'translation'  
\}  
// … rest of code  
\}\)  
Any command-line input or output is written as follows\:  
27 \$ pnpm --filter demo-website add --workspace tran  
Bold\: Indicates a new term, an important word, or words that you see on-  
screen. For instance, words in menus or dialog boxes appear in bold. Here  
is an example\: “For the About Me section, we've taken a similar approach.”  
TIPS OR IMPORTANT NOTES  
Appear like this.  
# Get in touch  
Feedback from our readers is always welcome.  
General feedback\: If you have questions about any aspect of this book,  
email us at customercare@packtpub.com and mention the book title in the  
subject of your message.  
Errata\: Although we have taken every care to ensure the accuracy of our  
content, mistakes do happen. If you have found a mistake in this book, we  
would be grateful if you would report this to us. Please visit www.packt-  
pub.com/support/errata and fill in the form.  
28 Piracy\: If you come across any illegal copies of our works in any form on  
the internet, we would be grateful if you would provide us with the location  
address or website name. Please contact us at copyright@packt.com with a  
link to the material.  
If you are interested in becoming an author\: If there is a topic that you  
have expertise in and you are interested in either writing or contributing to a  
book, please visit authors.packtpub.com.  
# Share Your Thoughts  
Once you’ve read Nuxt 3 Projects, we’d love to hear your thoughts! Please  
click here to go straight to the Amazon review page for this book and share  
your feedback.  
Your review is important to us and the tech community and will help us  
make sure we’re delivering excellent quality content.  
# Download a free PDF copy of this  
# book  
Thanks for purchasing this book!  
29 Do you like to read on the go but are unable to carry your print books  
everywhere?  
Is your eBook purchase not compatible with the device of your choice?  
Don’t worry, now with every Packt book you get a DRM-free PDF version  
of that book at no cost.  
Read anywhere, any place, on any device. Search, copy, and paste code  
from your favorite technical books directly into your application.  
The perks don’t stop there, you can get exclusive access to discounts,  
newsletters, and great free content in your inbox daily  
Follow these simple steps to get the benefits\:  
1\. Scan the QR code or visit the link below  
https\://packt.link/free-ebook/9781837632541  
2\. Submit your proof of purchase  
30 3\. That’s it! We’ll send your free PDF and other benefits to your email  
directly  
31 1  
# Setting Up Your Nuxt 3  
# Environment for a Basic “Hello  
# Nuxt” App  
Web development has seen a transformative journey over the years, evolv-  
ing from static web pages to dynamic applications that offer a seamless user  
experience. As the demand for more interactive and performant web ap-  
plications grew, the need for frameworks that could simplify and streamline  
the development process became evident. This was the backdrop against  
which Nuxt was born – a framework designed to build Vue.js applications  
with particular attention to making the development process as intuitive as  
possible.  
Nuxt 3, the latest version of the framework, is a significant step forward in  
web development. For those who’ve been in front-end development over  
the years, it’s clear that Nuxt 3 brings a lot to the table. Beyond the basics,  
such as automatic routing and server-side rendering, Nuxt 3 integrates  
TypeScript, offering better, error-free coding. The new Nitro Engine boosts  
performance, making applications run faster and smoother. With Vue 3’s  
Composition API, building components becomes more intuitive. Plus, im-  
32 proved modules and new DevTools make development even more efficient.  
In short, Nuxt 3 offers a powerful set of tools that makes web development  
faster, easier, and more robust.  
In this chapter, you’ll be introduced to the world of Nuxt 3 and delve deep  
into its origins, exploring the minds behind its creation and its core mission.  
You’ll gain a clear understanding of what makes Nuxt unique and why it’s  
become a favored choice for many developers around the world. As you  
progress, you’ll also take the practical step of setting up your very first Nuxt  
application. By the end of this chapter, you’ll not only have a clearer per-  
spective on the basics of Nuxt 3 and its underlying principles but also a run-  
ning Nuxt application, setting the stage for deeper dives in subsequent  
chapters.  
In this chapter, we’re going to cover the following main topics\:  
Understanding the code content in this book  
Introduction to Nuxt 3  
The architecture and features of Nuxt  
Installing and setting up the Nuxt 3 environment  
Creating your first “Hello Nuxt” app  
Recommended extensions  
# Technical requirements  
33 To ensure a seamless experience as we venture into setting up and exploring  
Nuxt 3, certain prerequisites must be met. The following technologies and  
installations are required\:  
Node.js\: v18.10.0 or newer.  
Package manager\: While installing Node.js provides you with npm by  
default, I have a penchant for pnpm as it offers efficient disk space usage  
by sharing packages across projects and ensures that dependencies are  
never hoisted, leading to more predictable builds.  
Text editor\: I recommend using Visual Studio Code \(VS Code\) with  
the Vue – Official Extension, but https\://www.jetbrains.com/webstorm/  
or any other editor will work fine  
Terminal\: You will need one to run Nuxt commands.  
The code files for this chapter can be found at https\://github.com/PacktPub-  
lishing/Nuxt-3-Projects/tree/main/chapter01.  
The CiA video for this chapter can be found on https\://packt.link/UhVbH  
# Introduction to Nuxt 3  
Being in the web development sphere for a good chunk of time teaches you  
the importance of evolution. It’s similar to watching a city grow. What start-  
ed as a few buildings \(or in our case, static web pages\) has now turned into  
a sprawling metropolis with skyscrapers, interconnected transit systems,  
34 and vibrant hubs of activity. Similarly, our web development tools have  
transformed to keep up with the times. Nuxt stands tall in this city of tools,  
especially for those of us who’ve been crafting with Vue.js. This section  
will act as a guided tour of Nuxt 3, taking you through its historical streets,  
its bustling downtown, and the architectural marvels that make developers  
like us tip our hats in appreciation.  
# The evolution of web development  
In the early days of the web, sites were straightforward. Think of them as  
the digital equivalent of a hand-drawn map. They showed you the way, but  
the journey was pretty much on you. As time passed, and as the web began  
to grow, demands became more complex. Websites transformed into web  
applications, and these applications needed to be dynamic, responsive, and  
interactive. It was no longer just about displaying information; it was about  
engagement, about creating experiences. In this dynamic landscape, Vue.js  
emerged as a beacon, simplifying the complexities and making developers’  
lives a tad easier. But as any seasoned developer will tell you, there’s al-  
ways room for improvement, for evolution.  
# The birth of Nuxt  
Here’s a scenario many of us can relate to\: You’re deep into a Vue.js  
project, appreciating its elegance, but there are moments when you think,  
“Could this be more streamlined? Could some repetitive tasks be  
35 automated?” This quest for efficiency is where Nuxt enters the story.  
Conceived by the visionary Chopin brothers, Nuxt was Vue.js with wings. It  
wasn’t just about adding features; it was about smart integration, about  
making the entire development process smoother. Imagine not having to set  
up routing manually for every page or having out-of-the-box solutions for  
SEO challenges. Nuxt was that fresh perspective, that innovative approach  
to challenges we’d taken as “just part of the process.”  
# Why Nuxt?  
Simply put, if you’re using Vue.js, Nuxt is your next logical step. It brings a  
suite of enhanced features. Nuxt comes packed with built-in tools such as  
automated routing, middleware support, universal \(SSR and SPA\) render-  
ing, and flexible layouts. This means less boilerplate and more productivity.  
Nuxt seamlessly extends Vue’s capabilities, providing an integrated, effi-  
cient solution for building solid web applications.  
Now that we’ve explored Nuxt’s unique offerings in the Vue.js ecosystem,  
our next step is to delve into the architectural elements and foundational  
concepts of Nuxt 3.  
# The architecture and principles of  
# Nuxt  
36 In the ever-evolving domain of web development, understanding the inner  
workings of a tool can be the key to mastering it. Nuxt 3, with its intricate  
design and powerful features, is no exception. For those of us who’ve been  
around the block, unraveling such complexities isn’t just a necessity – it’s a  
passion. Let’s embark on this deep dive into Nuxt 3, peeling back the layers  
to reveal the principles and architecture that power it.  
# Built on top of Vue  
At its core, Nuxt 3 is built on top of Vue.js. While reactivity and compo-  
nent-based architectures have found their way into many modern frame-  
works, what sets Vue.js apart is its approachability. It’s designed in a way  
that both newcomers and seasoned developers can grasp its concepts with  
ease. But beyond the framework itself, Vue’s vibrant and supportive com-  
munity plays a significant role. This positive community feedback creates  
the perfect foundation for Nuxt 3, allowing it to offer an enriched develop-  
ment experience.  
# Universal rendering and static site  
# generation  
Remember the days when we’d enter a website and there’d be this brief mo-  
ment of emptiness before the content magically appeared? That’s client-side  
rendering in action. While it has its merits, this approach sometimes feels  
like entering a dimly lit room and waiting for the lights to slowly turn on.  
37 Universal rendering changes the game by merging the best of server-side  
and client-side rendering. With this approach, the content is pre-rendered on  
the server, providing immediate access upon entering the website. Once the  
page is loaded, the client-side script “hydrates” the page, enabling dynamic  
interactions and enhancing the user experience. The benefits?  
Faster initial page load  
Improved SEO  
Better overall user experience  
And speaking of smooth web experiences, have you noticed that some web-  
sites are fast and don’t seem to have any glitches? Many of these are static  
sites. They’re like web pages that are ready to go as soon as you open them,  
without needing extra loading time. But modern static sites aren’t just about  
serving fixed content; they can be as dynamic and interactive as any other  
site. Nuxt’s static site generation \(SSG\) capability means developers get  
the benefits of static sites \(speed and security\) and the dynamism of web  
apps. With Nuxt, crafting a static site is as intuitive as building any other  
application, but with the added advantages of performance and security.  
# Performance optimizations  
In the world of web development, speed isn’t just a luxury; it’s a necessity.  
Users expect web pages to load quickly, and search engines reward fast-  
loading sites with better rankings. Recognizing this, Nuxt 3 has been de-  
38 signed with performance at its core. But what does this mean for developers  
and users? Let’s break down some of the key performance optimization  
techniques that Nuxt 3 employs to enhance both the developer and user  
experience\:  
Code splitting\: Instead of sending a large JavaScript bundle, Nuxt 3  
leverages Vite and Rollup to split code intelligently. This means users  
only download what’s necessary for the current page, reducing load  
times.  
Tree shaking\: Unnecessary code can bloat applications. Tree shaking  
ensures that only the code that’s used gets included in the final bundle.  
It’s like trimming the branches of a tree to keep it healthy and vibrant.  
Link prefetching\: While a user is browsing a page, Nuxt 3 is already  
hard at work, prefetching resources for linked pages. This proactive ap-  
proach means subsequent pages load almost instantly.  
Nuxt uses Vite under the hood. Vite is a tool that changes how we think  
about web development. It starts up almost instantly, which means no more  
waiting to start working. When you change your code, Vite updates it right  
away so that you can see your changes immediately. It has a straightforward  
build system, which means less time figuring things out and more time cod-  
ing. Plus, it’s designed to be fast in every way, making the whole develop-  
ment process smoother.  
39 In this section, we covered Nuxt 3’s architecture, its advantages in render-  
ing, and its focus on performance. As we proceed, we’ll shift from theory to  
hands-on practice, guiding you through setting up your first Nuxt 3  
environment.  
# Installing and setting up the Nuxt 3  
# environment  
Before diving into the depths of Nuxt 3, it’s essential to set up a conducive  
environment. Think of it as preparing the soil before planting a tree. The  
better the preparation, the healthier the tree will be as it grows. In this sec-  
tion, we’ll walk you through the prerequisites and installation steps, ensur-  
ing you have a robust foundation to start your Nuxt 3 journey.  
# Prerequisites  
To work with Nuxt 3, there are a few things you need to have installed and  
set up. Based on the Nuxt 3 official website, here are the prerequisites\:  
Node.js\: It’s essential to ensure you have Node.js installed and that it’s at  
least version 18.10.0. To check whether Node.js is installed, as well as its  
version, run the following command\:  
\$ node –v  
40 If you see a version number, that means Node.js is installed. If it’s below  
18.10.0 or if Node.js isn’t installed, you can download the latest version  
from the official Node.js website\: https\://nodejs.org/.  
Package manager\: While npm comes bundled with Node.js, for this  
guide, we’ll be using pnpm. It’s efficient and fast and ensures that pack-  
ages are shared across projects. To install it, run the following command\:  
\$ npm install -g pnpm  
Code editor\: While you can use any code editor, we recommend VS  
Code. It’s versatile, supports a plethora of extensions, and is widely  
adopted in the developer community.  
In this section, you set up your Nuxt 3 environment. Next, you’ll build a  
“Hello Nuxt” application and explore the basic project structure.  
# Creating your first “Hello Nuxt”  
# app  
In this section, we’ll take the first step together – that is, crafting your very  
first Nuxt application. By the end, you’ll have a running application and a  
foundational understanding of the Nuxt project structure.  
41 Initialization – the steps to create a new  
# Nuxt project  
Here are the steps for initialization \:  
1\. Create a new starter project by designating a space for your project.  
Open your Terminal \(macOS/Linux\) or terminal \(Windows\), and run the  
following command\:  
\$ pnpm dlx nuxi@latest init hello-nuxt  
Upon executing this command, you’ll be prompted to select a package  
manager. Choose pnpm\:  
Figure 1.1\: use pnpm as a package manager  
2\. After the dependencies are installed, you may also be asked whether you  
want to initialize a Git repository. If you prefer not to set up a Git reposi-  
tory during this process, you can choose no when this question appears.  
3\. Once the project has been created, you’ll get a message similar to the  
following\:  
42 Figure 1.2\: After creating the project  
4\. Next, we must go to the folder where the project was created\:  
\$ cd hello-nuxt  
Then, we need to install the dependencies. Since we’re using pnpm,  
we’ll run the following command\:  
\$ pnpm i  
Note that you can still install dependencies using npm or Yarn.  
5\. To start the project, we can run the following command\:  
\$ pnpm dev  
6\. This command starts your Nuxt application in development mode. It’s  
optimized for a developer experience, which means the following is true\:  
1\. Hot module replacement \(HMR\) is active, so changes in your files  
will automatically update the application without a full page reload  
2\. Errors and warnings are displayed in the console and, often, in an  
overlay on your application  
43 A local development server will be started, typically accessible at  
http\://localhost\:3000.  
7\. The terminal should display the following message after a successful  
build\:  
Figure 1.3\: Build output  
8\. Click on the link and voila! You have your first “Hello Nuxt”  
application!  
44 Figure 1.4\: Nuxt application on a browser  
The Nuxt CLI establishes a basic Nuxt application as a starting point for our  
project. This includes a built-in component called NuxtWelcome. In the up-  
45 coming sections, we’ll explore how to modify and expand upon this foun-  
dation so that it aligns with our specific needs.  
9\. Finally, let’s open VS code and discover our new “Hello Nuxt” project!  
\$ code .  
This will open the current directory in VS Code. You might need to set  
up VS Code so that it can be launched from the command line. For in-  
structions on how to set this up, please refer to https\://code.visualstudio.-  
com/docs/setup/mac\#\_launching-from-the-command-line.  
Now that VS Code is opened, let’s discover the default project structure that  
was made after initializing.  
# The default project structure  
In the world of Nuxt, a well-organized structure greets you from the outset.  
This deliberate setup ensures clarity and efficiency, guiding developers  
through a logical flow. While we’ll delve into the directories presented in  
the starter project, it’s essential to note that as your project grows and  
evolves, other folders, such as those for pages, plugins, middleware, and  
will come into play. Fear not, for these will be explored in depth in the sub-  
sequent chapters.  
46 But for now, let’s familiarize ourselves with the foundational structure of a  
Nuxt 3 project\:  
README.md\: A starting point for most projects. This file traditionally  
offers a brief introduction and might include basic setup or usage in-  
structions, making onboarding easier for newcomers.  
server\: This houses custom server-side logic, enhancing Nuxt’s de-  
fault server capabilities. We’ll dive deeper into its potential in future  
chapters.  
tsconfig.json\: A TypeScript configuration tailored for Nuxt.  
There’s no need to delve into its details.  
package.json\: Within the scripts, you’ll find the following\:  
dev\: Initiates the development environment, enabling HMR  
build\: Initiates the local development environment with live  
reloading  
generate\: For applications that use SSG, this script generates the  
static pages of the application  
preview\: Previews the generated static site locally  
postinstall\: Prepares the Nuxt environment post-installation  
.npmrc\: Holds npm’s configuration settings. There’s no need to delve  
into its details.  
Public\: A sanctuary for static assets that you’d want to remain unpro-  
cessed by Vite.  
pnpm-lock.yaml\: Essential for pnpm users, this file ensures consis-  
tent package installations across environments. You might find pack-  
47 age-lock.json if you’re using npm or yarn.lock if you’re using  
Yarn.  
nuxt.config.ts\: The cornerstone of your Nuxt project. This config-  
uration file orchestrates various aspects of your application, from global  
CSS to plugins.  
App.vue\: The heart and soul of your application. As the root Vue com-  
ponent, it sets the stage for the rest of your application’s components\:  
48 Figure 1.5\: Project structure  
49 We’ve just set up our first “Hello Nuxt” app and got a peek into its struc-  
ture. Next, we’ll cover some handy extensions to make our Nuxt journey  
even smoother.  
# Recommended extensions  
The VS Code marketplace offers a wide range of extensions that are de-  
signed to improve the development experience. For those working with  
Nuxt, there are specific extensions that stand out, proving invaluable in day-  
to-day coding tasks. In this section, we’ll explore some of the top exten-  
sions tailored for Nuxt, highlighting how they can make your development  
smoother and more efficient\:  
Vue - Official  
Nuxtr  
Vue VSCode Snippets  
Non-Vue-related extensions  
Let’s go through them in detail.  
# Vue - Official  
Vue - Official is an extension for VS Code that provides enhanced support  
for Vue 3 projects. Acting as a comprehensive toolset for Vue developers,  
here’s what Vue - Official brings to the table\:  
50 TypeScript support\: Suppose you have a ref value in your Vue com-  
ponent defined as name\: String. If you mistakenly assign a number  
to it, the extension will highlight this discrepancy, indicating a type  
mismatch\:  
Figure 1.6\: Vue – Official\: TypeScript support  
Template interpolation\: If you have a data property called message in  
your Vue component, when you start typing \{\{ me... \}\} in the tem-  
plate, the extension will suggest auto-completing it to \{\{ message\}\}\:  
51 Figure 1.7\: Vue – Official\: template interpolation  
Syntax highlighting\: In your .vue file, the \<script\> section might  
be highlighted in one color scheme, while the \<template\> and  
\<style\> sections will have distinct color palettes, making it easier to  
differentiate between them.  
Refactoring capabilities\: If you decide to change a data property’s  
name from firstName to givenName, Vue Official extension can  
help you rename it across your component, ensuring consistency.  
Formatting\: If you’ve written a block of code in your \<script\> sec-  
tion without proper indentation or spacing, using Vue Official exten-  
52 sion’s integration with Prettier can automatically format the code so that  
it adheres to best practices and consistent styling.  
# Nuxtr  
Nuxtr is like your friendly coding companion for Nuxt.js projects. It’s  
packed with handy tools and commands, making your coding sessions  
smoother. Here’s a breakdown of its core offerings\:  
Create project files and folders\: In VS Code, you can press Ctrl + Shift  
+ P \(or Command **⌘ **+ Shift **⇧** + P for Mac users\) and type nuxtr\:  
create. You’ll see a list of Nuxt files and folders that can be created, at  
which point you can select the desired ones\:  
53 Figure 1.8\: Nuxtr – creating project files and folders  
Run Nuxt commands\: Simply write the command’s name in the com-  
mand palette\:  
54 Figure 1.9\: Nuxtr – running Nuxt commands  
Activate Nuxt DevTools via your status bar\: Nuxt DevTools is a life-  
saver for any Nuxt developer. It gives you a clear picture of your app’s  
55 components, lets you see state changes in real time, provides perfor-  
mance metrics, and even tracks events. The extension works with Nuxt \>  
3.4.0\. You can easily activate it from your status bar. The extension rec-  
ognizes your Nuxt.js version and suggests updates if needed.  
Set up CSS frameworks and linters\: You can integrate various CSS  
frameworks \(Tailwind CSS, UnoCSS, and Vueitfy\), as well as linters  
\(Stylelint and Eslint\)\:  
56 Figure 1.10\: Setting up CSS frameworks and linters  
As we’ve seen, these extensions are more than just add-ons; they’re essen-  
tial tools that can significantly streamline your Nuxt development process.  
57 Summary  
In this chapter, we dived into the transformative world of Nuxt 3 and its  
role in modern web development. We started by discussing its architecture  
and its built-in performance optimizations, which include code splitting,  
tree shaking, and link prefetching. We also touched upon its capability for  
server-side rendering and SSG. Then, we walked through the steps of set-  
ting up the Nuxt 3 environment, including the prerequisites and initializa-  
tion steps for creating a “Hello Nuxt” app. We also got a taste of the Nuxt  
project structure and discussed some recommended extensions for VS Code  
to enhance the development experience.  
In the next chapter, we’ll build a simple portfolio website using Nuxt 3 and  
Tailwind CSS, further enhancing our hands-on experience with the  
framework.  
# Practice questions  
What are the prerequisites for setting up a Nuxt 3 environment?  
What commands are used to initialize a new Nuxt 3 project?  
Explain the benefits of server-side rendering in Nuxt 3.  
What role does the nuxt.config.ts file play in a Nuxt project?  
Describe the default project structure of a Nuxt 3 application.  
58 How can you open your Nuxt project in VS Code using the terminal?  
What are some recommended extensions for VS Code when working  
with Nuxt?  
How does Nuxt 3 benefit from being built on top of Vue.js?  
Explain how Nuxt 3 handles SSG.  
# Further reading  
Nuxt official documentation\: https\://nuxt.com/docs/getting-  
started/introduction  
Rendering modes\: https\://nuxt.com/docs/guide/concepts/rendering  
How Nuxt works\: https\://nuxt.com/docs/guide/going-further/internals  
TypeScript with Nuxt\: https\://nuxt.com/docs/guide/concepts/typescript  
VS Code extensions for Nuxt\: https\://masteringnuxt.com/blog/the-best-  
vscode-extensions-for-nuxt-developers  
59 2  
# Building a Simple Portfolio Using  
# Tailwind CSS and a Dive into Nuxt  
# 3’s Project Structure  
In this second chapter, we will intertwine the robustness of Nuxt 3 with the  
stylistic efficiency of Tailwind CSS to construct a portfolio that gracefully  
showcases your projects and technical prowess. Tailwind CSS, renowned  
for its utility-first approach, enables us to create intricate designs with mini-  
mal custom CSS, facilitating a streamlined development process. When  
combined with Nuxt 3, a framework lauded for its developer-friendly ab-  
stractions and powerful Vue.js functionalities, we equip ourselves with a  
potent toolkit to build a portfolio that is not only functionally stellar but also  
visually captivating.  
In this chapter, we will meticulously create a portfolio, ensuring each com-  
ponent and style is crafted with precision and intentionality. We aim to en-  
sure your projects are not only showcased but also narrated in a manner that  
resonates with every visitor, providing them with not just a visual experi-  
ence but also a journey through your technical endeavors and achievements.  
In this chapter, we’re going to cover the following main topics\:  
60 Setting up and integrating with TailwindCSS 3  
Creating a website layout and customizing the font  
Managing images in the assets folder  
Creating the ProjectShowcase and SkillChip components  
Styling directly within the component’s scope  
Creating a useScrollTo composable  
# Technical requirements  
The code files for this chapter can be found at https\://github.com/PacktPub-  
lishing/Nuxt-3-Projects/tree/main/chapter02.  
The CiA video for this chapter can be found on https\://packt.link/kCqMV  
# Essential background – what is  
# Tailwind CSS?  
Before we commence our coding journey, let’s equip ourselves with some  
pivotal knowledge about Tailwind CSS, which is a utility-first CSS frame-  
work that provides low-level utility classes to build designs directly in your  
markup. Unlike other CSS frameworks that offer predefined components,  
Tailwind allows for more flexibility and customization in your design  
implementation.  
61 For a more in-depth look at Tailwind CSS and its features, you can visit  
Tailwind CSS’s official website\: https\://tailwindcss.com/.  
Next, let’s go through the process of setting up and integrating Tailwind  
CSS into your project.  
# Setting up and integrating with  
# Tailwind CSS  
We’ll initiate our portfolio journey by crafting a new Nuxt 3 project from  
scratch.  
# Create a new project  
As we learned in the previous chapter, let’s create a new Nuxt 3 project  
named my-portfolio and open it in VS Code to proceed.  
Before we navigate further, it’s prudent to ensure that our setup was suc-  
cessful. Let’s spin up our development server and take a glimpse at the ini-  
tial state of our project\:  
\$ pnpm dev  
62 Executing pnpm dev will ignite the development server, and you should  
be greeted with the default NuxtWelcome component when you visit  
http\://localhost\:3000 in your web browser. This veritable component signi-  
fies that our project has been set up successfully and we’re primed to weave  
in Tailwind CSS in the next steps.  
# Installing Tailwind CSS  
Before we start, let’s equip our development environment with a tool that’ll  
enhance our coding experience – Tailwind CSS IntelliSense. If you’re uti-  
lizing Visual Studio Code \(VS Code\) as your code editor, consider in-  
stalling the Tailwind CSS IntelliSense extension. This extension amplifies  
your development efficiency by providing autocompletions for Tailwind  
CSS classes, syntax highlighting, and much more, making it easier to apply  
styles without needing to memorize or frequently refer to the  
documentation.  
To install, simply navigate to the Extensions view by clicking on the  
Extensions icon in the Activity Bar on the left side of the window, search  
for Tailwind CSS IntelliSense, and click on Install.  
63 64 Figure 2.1\: The Tailwind VS Code extension  
Now, your VS Code is supercharged with Tailwind CSS capabilities,  
streamlining your development with intelligent code completion and error-  
checking. Let’s proceed, ensuring that our coding journey is as smooth as  
possible!  
Firstly, we shall incorporate Tailwind CSS into our project. Execute the fol-  
lowing command to install the Tailwind CSS module for Nuxt 3\:  
\$ pnpm i -D @nuxtjs/tailwindcss  
Post-installation, we direct our Nuxt 3 project to utilize Tailwind CSS. This  
involves a slight modification to the nuxt.config.ts file. Navigate to  
the modules array and introduce the Tailwind CSS package as follows\:  
export default defineNuxtConfig\(\{  
devtools\: \{ enabled\: true \},  
modules\: \['@nuxtjs/tailwindcss'\],  
\}\)  
Appending '@nuxtjs/tailwindcss to the modules array ensures that  
Tailwind CSS is recognized and utilized by our Nuxt 3 project, enabling the  
use of its utility classes within our components.  
65 To tailor Tailwind CSS to meet our project’s aesthetic and functional needs,  
we will craft a configuration file, named tailwind.config.js. This  
file will serve as our control center for any adjustments or customizations to  
the default setup of Tailwind CSS.  
Let’s generate tailwind.config.js at the root of our project\:  
// tailwind.config.js  
export default \{  
// Your Tailwind CSS custom configuration goes  
\}  
You can also run the following command to generate the same file\:  
\$ pnpm dlx tailwindcss init  
The tailwind.config.js file will act as our vessel for custom styling,  
component definition, and theme adjustments, ensuring that our utility  
classes are optimized and maintain a consistent design language throughout  
our project.  
Navigating from our generalized setup into something more specific, here’s  
my preferred startup configuration in Tailwind CSS\:  
66 export default \{  
content\: \[\],  
theme\: \{  
extend\: \{  
colors\: \{  
primary\: '\#42B883',  
secondary\: '\#35495E',  
neutral\: '\#F7F9FA'  
\},  
container\: \{  
center\: true,  
padding\: \{  
DEFAULT\: '1.5rem',  
lg\: '4rem',  
xl\: '4rem',  
'2xl'\: '4rem'  
\},  
screens\: \{  
sm\: '576px',  
md\: '768px',  
lg\: '992px',  
xl\: '1200px',  
'2xl'\: '1400px'  
\}  
\}  
\}  
\},  
67 plugins\: \[\]  
\}  
Diving deeper, let’s explore how each part of my chosen configuration en-  
sures a smooth, consistent, and Vue-themed aesthetic across our portfolio.  
Color customization  
Tailwind CSS allows us to customize its default colors, offering the flexibil-  
ity to infuse our own brand or thematic colors in a project. By specifying  
our colors in the configuration, such as green shades that echo the Vue.js  
color scheme, we ensure that our design is both aesthetically pleasing and  
subtly communicates our technological focus to the viewer.  
Container customization  
The container section ensures that our content is neatly centered and pro-  
vides horizontal padding to prevent content from abutting the edge of the  
viewport. By default, we have a 1.5rem horizontal padding, which ex-  
tends to 4rem for larger \(lg, xl, and 2xl\) screens, ensuring our  
content remains readable and aesthetically placed across all screen sizes.  
Screen breakpoints  
The screens section in Tailwind CSS configuration utilizes itsresponsive de-  
sign by defining breakpoints. Breakpoints are viewport widths where the  
68 layout of the page will change, aiming to provide an optimal user experi-  
ence across various screen sizes.  
In our custom configuration, we opted for these particular breakpoints to  
align more closely with the widely used Bootstrap framework’s  
breakpoints.  
Wrapping up the configuration setup, let’s put our adjustments to the test by  
crafting a simple layout. Create a div element and apply our custom pri-  
mary color to ensure that our color configuration has been applied correctly.  
Navigate to your app.vue file and clear the existing template content.  
Now, let’s infuse our custom primary color in a welcoming header\:  
\<template\>  
\<div class="text-7xl text-primary"\>Nuxt 3 + Tai  
CSS!\</div\>  
\</template\>  
This simple test allows us to visually validate that our Tailwind CSS cus-  
tomizations have been successfully integrated into the Nuxt 3 project.  
Following the implementation, you should see a screen similar to the fol-  
lowing depiction\:  
69 Figure 2.2\: Tailwind CSS configured  
NOTE  
Sometimes, changes in the Tailwind CSS configuration might not reflect im-  
mediately in your development environment. If the color doesn’t apply as  
expected, halt your development server and restart it to ensure all configu-  
rations are properly loaded.  
In our initial journey, we’ve successfully set up and integrated Tailwind  
CSS into our Nuxt 3 project. We tested the waters by applying our custom  
primary color to a header in our app, ensuring our foundational setup is ro-  
bust and ready for the next steps.  
As we transition into the next segment, we’ll start creating the layout for  
our portfolio, ensuring our custom styles seamlessly permeate through  
every component and view.  
# Creating the website layout and  
# customizing the font  
70 Stepping into the next section of our development saga, our focus shifts to-  
ward establishing the visual groundwork of our portfolio. In this crucial  
phase, every design decision, from layout constructs to typographic selec-  
tions, converges to narrate our professional story through a seamless user  
journey. Let’s delve into crafting this visual journey, commencing with a  
fundamental element – typography.  
# Embedding the Lato font \(or any Google  
# font\)  
In the structural development of our layout, typographic choices play a cru-  
cial role, serving not only the aesthetic but also enhancing the readability  
and user experience of our portfolio. Our chosen font, Lato, is known for its  
clean, sans-serif character, offering a professional yet approachable vibe to  
our portfolio’s textual content.  
To integrate Lato into our Nuxt project, we have a couple of viable options.  
Let’s dissect both.  
Option 1 – manually adding a font to nuxt.config.ts  
The first option involves fetching and utilizing a direct link from Google  
Fonts. When you select Lato on the Google Fonts website, it provides a  
specific link for you to place within the HTML \<head\> section.  
71 In Nuxt 3, to insert links, meta tags, scripts, or other elements within the  
\<head\> of your HTML, we must configure them within the app object in  
the nuxt.config.ts file. The subsequent configuration illustrates how  
to integrate external links\:  
export default defineNuxtConfig\(\{  
modules\: \['@nuxtjs/tailwindcss'\],  
app\: \{  
head\: \{  
link\: \[  
\{ rel\: 'preconnect', href\:  
'https\://fonts.googleapis.com' \},  
\{ rel\: 'preconnect', href\:  
'https\://fonts.gstatic.com' \},  
\{ rel\: 'stylesheet', href\:  
'https\://fonts.googleapis.com/css2?fami  
Lato\:wght@100;300;400;700;900&display=  
\]  
\}  
\}  
\}\)  
Here’s a breakdown of the preceding code\:  
preconnect\: This directive establishes early connections to the do-  
main, optimizing resource fetching and, thereby, improving loading  
72 performance  
The stylesheet link is where we specify the Lato font and its  
weights \(100, 300, 400, 700, and 900\), which we intend to use through-  
out our project  
Option 2 – using the @nuxtjs/google-fonts  
package  
A seamless, alternative method to introduce Google Fonts into our Nuxt 3  
project is by utilizing the @nuxtjs/google-fonts module. This Plug  
and Play module embeds Google fonts on our website.  
Let’s walk through the integration process and then delve into configuring  
Lato for our portfolio.  
Start by installing the @nuxtjs/google-fonts dependency\:  
\$ pnpm i -D @nuxtjs/google-fonts  
Next, we’ll register this module within the nuxt.config.ts file\:  
export default defineNuxtConfig\(\{  
modules\: \['@nuxtjs/tailwindcss', '@nuxtjs/googl  
\}\)  
73 To specify the Google font\(s\) and their respective weights, utilize the  
googleFonts property in nuxt.config.ts\:  
googleFonts\: \{  
families\: \{  
Lato\: \[100, 300, 400, 700, 900\]  
\}  
\}  
Here’s a breakdown\:  
families\: This property is an object where you specify the Google  
Font family \(or families\) you wish to include in your project. Each font  
family is an object key.  
The key reflects the name of the google font. , and the value deter-  
mines the font weights to be loaded. In our context, Lato\: \[100,  
300, 400, 700, 900\] implies that we are instructing the module  
to load the Lato font family with the specified font weights \(100, 300,  
400, 700, and 900\) for our project.  
With two viable options at your disposal – directly embedding font links  
into your nuxt.config.ts or utilizing the @nuxtjs/google-  
fonts module – you’re empowered to choose the method that aligns best  
with your project needs. Having configured our chosen font, let’s move to-  
74 ward tailoring our tailwind.config.js to recognize and utilize Lato  
throughout our design.  
To make Lato easily accessible throughout our project using Tailwind  
CSS’s utility classes, we modify our tailwind.config.js to recog-  
nize Lato as the default sans-serif font\:  
theme\: \{  
extend\: \{  
fontFamily\: \{  
sans\: \['Lato', 'sans-serif'\]  
\}  
\}  
\}  
This adjustment ensures that whenever we apply Tailwind CSS’s font-  
sans utility \(which is applied by default\), Lato is utilized, facilitating a co-  
herent typography across our portfolio.  
Now that we’ve sorted out our font options, let’s move on to laying out the  
foundation of our website in the next step.  
# Creating the layout  
First, we lay out the main \<div\> in the app.vue file with a background  
color that sets the overall tone for our portfolio\:  
75 \<!-- app.vue --\>  
\<div class="bg-neutral"\>  
\<!-- content here --\>  
\</div\>  
Here, bg-neutral is a Tailwind CSS class that applies the neutral color  
we defined earlier in our tailwind.config.js. This serves as the  
backdrop for our entire portfolio.  
Next, let’s construct the header. Here’s how we’ll do that\:  
\<header class="bg-secondary text-white p-6"\>  
\<div class="container mx-auto flex justify-betw  
items-center"\>  
\<div class="text-xl font-light uppercase"\>  
Kareem Dabbeet\</div\>  
\<nav class="hidden md\:block"\>  
\<ul class="flex gap-x-4"\>  
\<li\>  
\<a href="\#about"  
class="transition hover\:text-primary"  
\</a\>  
\</li\>  
\<!-- more links here --\>  
\</ul\>  
\</nav\>  
76 \</div\>  
\</header\>  
Note that the hidden md\:block Tailwind CSS class hides \<nav\> by  
default and displays it as a block on medium \(md\:\) screens and up, catering  
to responsive design.  
But how about the header navigation links? Shall we add them manually  
and repeat them for each one? But what if we want to add more header links  
in the future?  
There’s no need to manually update the template each time. Instead, let’s  
harness Vue’s dynamic rendering capabilities. In your script, define an array  
named headerLinks, as follows\:  
\<script setup lang="ts"\>  
const headerLinks = \[  
\{ name\: 'About', link\: '\#about' \},  
\{ name\: 'Portfolio', link\: '\#portfolio' \},  
\{ name\: 'Contact', link\: '\#contact' \}  
\]  
\</script\>  
Now, modify the \<li\> elements in your header to loop through this array,  
like so\:  
77 \<li v-for="item in headerLinks" \:key="item.name"\>  
\<a href="item.link"  
class="transition hover\:text-primary"\>  
\{\{ item.name \}\}\</a\>  
\</li\>  
By combining Tailwind CSS and Vue.js, especially the Composition API,  
we craft a layout that’s as functional as it is visually cohesive. This also  
paves the way for future-proof, scalable code.  
Figure 2.3\: The header section  
With our layout finely tuned and our font seamlessly integrated, let’s shift  
our focus to managing images in the assets folder in the next section.  
78 Managing images in the assets  
# folder  
In Nuxt 3, managing assets such as style sheets, fonts, or images is a  
straightforward process. The framework offers two primary directories for  
this purpose – public/ and assets/.  
The public/ directory serves as a public server for static assets that are  
publicly available at the root URL of your application. Files in this directo-  
ry are served as-is without any processing from build tools such as Vite or  
webpack. For example, an image in the public/img/ directory can be  
accessed at the /img/nuxt.png static URL.  
Conversely, the assets/ directory is used to store files that you want to  
be processed by build tools such as Vite or webpack. These build tools can  
transform the original files for performance or caching purposes, such as  
style sheet minification or browser cache invalidation. Unlike the public/  
directory, files in the assets/ directory are not served at a static URL.  
Now, let’s apply this by creating a hero section with a large Vue image.  
Firstly, to include images in our project, we create a new folder within the  
assets/ directory and call it images. Inside this folder, we’ve placed  
an image file named vue-logo.webp.  
79 Here is the implementation of the hero section\:  
\<!-- Hero Section --\>  
\<section class="bg-secondary text-white py-20"\>  
\<div class="container grid md\:grid-cols-2"\>  
\<!-- Text content --\>  
\<div class="col-span-1 flex flex-col justify-  
items-start"\>  
\<h1 class="text-5xl mb-4"\>Hello! I'm Kareem  
Dabbeet\</h1\>  
\<p class="text-2xl mb-8"\>  
A frontend developer specializing in Vue  
\</p\>  
\<button  
@click="useScrollTo\('portfolio'\)"  
class="bg-primary text-white px-8 py-4 ro  
hover\:bg-opacity-90 transition duration-3  
View My Work  
\</button\>  
\</div\>  
\<!-- Image --\>  
\<div class="col-span-1 flex justify-end"\>  
\<img src="\~/assets/images/vue-logo.webp"  
class="h-\[350px\]" /\>  
\</div\>  
80 \</div\>  
\</section\>  
In the hero section, you’ll see this line\:  
\<img src="\~/assets/images/vue-logo.webp" class="h  
Here, the \~ symbol represents the project root, and Nuxt automatically un-  
derstands to look in the assets/images directory for vue-lo-  
go.webp. During the build process, Nuxt will optimize this image, giving  
it a new path that aids in efficient caching.  
81 Figure 2.4\: The hero section  
For the About Me section, we’ve taken a similar approach. We’ve placed a  
new image, avatar.jpeg, in the assets/images folder. The image is  
displayed as follows\:  
\<img  
src="\~/assets/images/avatar.jpeg"  
alt="Kareem Dabbeet"  
class="rounded-full w-48 h-48 mx-auto  
mb-6 shadow-xl border-4  
border-dashed border-primary"  
/\>  
Here is the final hero section that contains an avatar image, bio, and skills\:  
\<!-- About Me Section --\>  
\<section id="about" class="py-16 bg-neutral"\>  
\<div class="container mx-auto text-center"\>  
\<!-- Avatar --\>  
\<img  
src="\~/assets/images/avatar.jpeg"  
alt="Kareem Dabbeet"  
class="rounded-full w-48 h-48 mx-auto  
mb-6 shadow-xl border-4  
border-dashed border-primary"  
82 /\>  
\<!-- About Text --\>  
\<p class="text-gray-700 max-w-4xl mx-auto tex  
leading-loose mb-6 px-4"\>  
Hello! I'm Kareem Dabbeet, a frontend devel  
a passion for building performant and user-  
web applications. With expertise in Vue.js  
Nuxt.js, I take pride in crafting solutions  
not only functional but also elegantly code  
\</p\>  
\<!-- Skills --\>  
\<div class="flex flex-wrap justify-center gap  
gap-y-4 mb-8"\>  
\<span class="text-primary bg-white px-4 py-  
rounded-lg shadow"\>Javascript\</span\>  
\<span class="text-primary bg-white px-4 py-  
rounded-lg shadow"\>Vue\</span\>  
\<span class="text-primary bg-white px-4 py-  
rounded-lg shadow"\>Nuxt\</span\>  
\<span class="text-primary bg-white px-4 py-  
rounded-lg shadow"\>Tailwind CSS\</span\>  
\</div\>  
\</div\>  
\</section\>  
This code contains three main elements\:  
An avatar image\: This displays our profile picture, styled to be circular  
with a unique dashed border  
83 A bio\: A brief introduction about us, highlighting our role as frontend de-  
velopers and our expertise in Vue.js, Nuxt.js, and other technologies  
Skills\: Presented as stylized tags, these showcase our primary technical  
proficiencies  
The following figure shows a screenshot of this section\:  
84 85 Figure 2.5\: The About Me section  
Now, have you noticed the skills we’ve listed in the About Me section?  
Each skill is encapsulated in a span element with almost identical classes.  
To make our code more maintainable and cleaner, how about we convert  
these into a reusable Vue component? Let’s delve into that in the next  
section.  
# Creating the ProjectShowcase and  
# SkillChip components  
If you’ve been closely following along, you might have noticed redundancy  
in our code, particularly in the About Me section where we list our skills.  
Each skill is encapsulated in a nearly identical span element. This ap-  
proach is not only verbose but also makes future changes cumbersome.  
In Nuxt, the components/ directory serves as the hub for all your Vue  
components. These components can be readily imported into your pages or  
even into other components. Nuxt automatically recognizes any compo-  
nents in this directory, sparing you from manual import statements.  
# Creating the SkillChip component  
86 In the components/ directory of your Nuxt project, create a new file  
named SkillChip.vue. Open SkillChip.vue and copy the provid-  
ed code into this file. This code defines the template for your new SkillChip  
component\:  
\<template\>  
\<span class="text-primary bg-white px-4 py-2  
rounded-lg shadow"\>  
\<slot\>\</slot\>  
\</span\>  
\</template\>  
Here, the \<slot\>\</slot\> tag acts as a placeholder for any content  
you’ll place between the opening and closing \<skill-chip\> tags. This  
makes the component reusable and customizable.  
Alternatively, you can use the nuxtr extension, which we installed in a  
previous chapter\:  
1\. In VS Code, press Ctrl + Shift + P \(or Cmd + Shift + P on a Mac\) to  
open the command palette.  
2\. Type nuxtr\: Create new Component and select the first option  
that occur in the menu \(it should have the same name that you typed”.  
3\. Enter SkillChip as the name of the component when prompted.  
4\. Choose to create the component at the root level.  
87 Now, let’s swap out the repetitive span elements in the About Me section  
with our new SkillChip component. Update your code like this\:  
\<div class="flex flex-wrap justify-center gap-x-8  
mb-8"\>  
\<skill-chip\> Javascript \</skill-chip\>  
\<skill-chip\> Vue \</skill-chip\>  
\<skill-chip\> Nuxt \</skill-chip\>  
\<skill-chip\> Tailwind CSS \</skill-chip\>  
\</div\>  
With this simple change, our code becomes more maintainable, and adding  
or modifying a skill in the future becomes a breeze.  
Now that we’ve optimized our skill listing, let’s turn our attention to show-  
casing your projects.  
# Creating the ProjectShowcase component  
Our goal is to streamline the process of displaying multiple projects on the  
website. Instead of duplicating HTML code for each project, we can make  
this process more efficient by creating a reusable ProjectShowcase  
component.  
First, let’s set up our data. We’ll use an array of objects, where each object  
represents a project with various properties, such as a name, description,  
88 and link.  
Let’s add this array to our app.vue script\:  
const projects = \[  
\{  
name\: 'VueShop',  
description\: 'An e-commerce platform built wi  
and Vuetify.',  
image\: ' /images/projects/1.jpeg',  
link\: '\#'  
\},  
// ...other projects  
\];  
A NOTE ON IMAGE PATHS  
In Nuxt 3, dynamic imports for image paths aren’t supported out of the box.  
Therefore, we’ll take a simpler route by placing our project images in the  
public folder. This way, they can be accessed directly via their static URLs,  
such as /images/projects/1.jpeg.  
Next, go ahead and create a new file named ProjectShowcase.vue in  
your components/ directory. Initially, let’s keep the template empty. In  
the component’s \<script\> block, we use defineProps to specify  
what properties this component expects. It’s an essential part of using the  
89 Composition API with TypeScript. Here, defineProps specifies that  
the component will receive a project object containing specific fields such  
as name, description, image, and link\:  
\<!-- ProjectShowcase.vue --\>  
\<script setup lang="ts"\>  
defineProps\<\{  
project\: \{  
name\: string  
description\: string  
image\: string  
link\: string  
\}  
\}\>\(\)  
\</script\>  
Now, let’s flesh out the component’s template. The idea is to display each  
project in a card-like format, containing the project’s image, name, descrip-  
tion, and a link to it.  
Here’s the template code\:  
\<template\>  
\<div class="bg-white rounded-lg shadow-lg  
overflow-hidden"\>  
90 \<img  
\:src="project.image"  
\:alt="project.name"  
class="w-full h-\[200px\] object-cover object  
/\>  
\<div class="p-6"\>  
\<h3 class="text-primary text-xl mb-2"\>  
\{\{ project.name \}\}  
\</h3\>  
\<p class="text-gray-700 mb-4"\>  
\{\{ project.description \}\}  
\</p\>  
\<a  
\:href="project.link"  
class="text-secondary font-semibold trans  
transition-all duration-300  
hover\:text-primary hover\:ps-1"\>View Proje  
\</a\>  
\</div\>  
\</div\>  
\</template\>  
Our component’s template is designed to showcase each project elegantly.  
The main elements are as follows\:  
The project image\: Displays the project’s visual aspect, set to cover the  
top portion of the card  
91 The project details\: This includes the project’s name, a brief descrip-  
tion, and a clickable link to access it  
Finally, let’s bind this component to our projects array using the v-for di-  
rective in our main section\:  
\<section id="showcase" class="py-16 bg-slate-20  
\<h2 class="text-primary text-3xl mb-8 text-  
My Work\</h2\>  
\<div  
class="container mx-auto grid grid-cols  
md\:grid-cols-2 lg\:grid-cols-3 ga  
\<project-showcase  
v-for="project in projects"  
\:key="project.name"  
\:project="project"  
/\>  
\</div\>  
\</section\>  
To enhance the project showcase section you’re working on, you should ex-  
pand the projects object to include more than one project. Here’s how  
you can proceed\:  
1\. In your existing projects object, add two more projects. Each project  
entry should include details such as the project title and a description.  
92 2\. For each project in your projects object, include an image. Save  
these images in the public folder of your Nuxt project. This placement  
ensures that the images are statically served in your application.  
3\. In your project entries, reference the image paths relative to the public  
folder. For example, if you have an image named project1.jpg in  
the public folder, reference it in your project object as  
/project1.jpg.  
The following figure shows a screenshot of the project showcase section\:  
93 Figure 2.6\: The project showcase section  
With this, you’ve successfully modularized your project showcase, making  
it easier to manage and scale in the future.  
94 Styling within the component itself  
When building a UI, the components often have specific styles that  
shouldn’t affect other parts of the application. One way to achieve this iso-  
lation is by using scoped styles in Vue components.  
Let’s create a new Vue component named CurvedDivider that we can  
use as a visual separator between the “About Me” and project showcase  
sections\:  
\<!-- app.vue ---\>  
\<template\>  
\<!-- previous sections ---\>  
\<!-- About Me Section --\>  
\<curved-divider /\>  
\<!-- showcase / My Work --\>  
\</template\>  
The component’s structure is simple\:  
\<template\>  
\<div class="divider" /\>  
\</template\>  
95 Now, let’s add some custom styles to this component. We want to set its  
height and background color, as well as add a curved section at the bottom.  
Here’s how to do it\:  
\<style scoped\>  
.divider \{  
position\: relative;  
height\: 70px;  
background\: \#f7f9fa;  
\}  
.divider\:\:before \{  
content\: '';  
position\: absolute;  
bottom\: 0;  
width\: 100%;  
height\: 50px;  
background\: \#e2e8f0;  
border-radius\: 100% 100% 0 0;  
\}  
\</style\>  
Note the scoped attribute in the \<style\> tag. When a \<style\> tag has  
the scoped attribute, its CSS will apply only to elements of the current  
component. This ensures that the component’s styles won’t leak into other  
parts of your application.  
96 Figure 2.7\: Inspect the representation of \<style scoped\> in devtools  
Note that the styles are applied to .divider\[data-v-a9cd7541\] \(the  
divider class with a unique identifier\).  
Vue also supports style preprocessors such as SCSS, SASS, PostCSS, and  
LESS. You can use any of these preprocessors with the scoped attribute  
as well. For example, for SCSS, you’d write \<style lang="scss"  
scoped\>.  
The divider should be displayed as follows\:  
97 Figure 2.8\: The CurvedDivider component  
We’ve just explored how to implement scoped styling within components,  
making our code both maintainable and modular. Next, we’ll take a dive  
into the world of Vue composables by creating a useScrollTo compos-  
able for smoother navigation.  
# Creating a useScrollTo composable  
98 Managing reusable stateful logic is crucial in any Vue application.  
Composables serve this exact purpose. They let you wrap complex stateful  
logic into a function that can be easily reused across your application. Our  
useScrollTo example demonstrates this by encapsulating the scroll-to-  
section logic.  
Nuxt 3 enhances this experience with an auto-import feature for compos-  
ables. Just place your composable in the composables/ directory and  
Nuxt handles the rest, making manual imports a thing of the past.  
Before we create our composable, let’s start by moving our header into a  
new component. Create a file called BaseHeader.vue inside the com-  
ponents/ folder and move the header section with headerLinks from  
the script into it.  
Your App.vue should now start like this\:  
\<template\>  
\<div class="bg-neutral"\>  
\<!-- Header --\>  
\<base-header /\>  
\<!-- other content --\>  
\</template\>  
Meanwhile, your BaseHeader.vue should contain the following\:  
99 \<template\>  
\<header class="bg-secondary text-white p-6"\>  
\<!-- header implementation --\>  
\</header\>  
\</template\>  
\<script setup lang="ts"\>  
const headerLinks = \[  
\{ name\: 'About', link\: 'about' \},  
\{ name\: 'showcase', link\: 'showcase' \},  
\{ name\: 'Contact', link\: 'contact' \}  
\]  
\</script\>  
Now, create a composables directory and add to it a useScroll-  
To.ts file with the following code\:  
export const useScrollTo = \(id\: string\) =\> \{  
const element = document.getElementById\(id\);  
if \(!element\) return;  
const position = element.offsetTop;  
window.scrollTo\(\{  
top\: position,  
behavior\: 'smooth'  
\}\);  
\};  
100 Here, useScrollTo takes an element ID, finds it, and smoothly scrolls to  
it.  
Because of Nuxt’s auto-import capability, using this composable in different  
components is effortless. It ensures your code follows the Don’t-Repeat-  
Yourself \(DRY\) principle and remains maintainable.  
For example, in the BaseHeader component, we can use useScrollTo  
like so\:  
\<li v-for="item in headerLinks" \:key="item.name"\>  
\<button  
class="transition hover\:text-primary"  
@click="useScrollTo\(item.link\)"\>  
\{\{ item.name \}\}  
\</button\>  
\</li\>  
We can also apply the same reusable logic in the hero section of our appli-  
cation. For instance, we can attach it to a button to scroll smoothly to the  
portfolio section when clicked.  
Here’s how to implement it\:  
\<button  
101 @click="useScrollTo\('showcase'\)"  
class="bg-primary text-white px-8 py-4 rounded-  
hover\:bg-opacity-90 transition duration-  
View My Work  
\</button\>  
With this setup, the button in the hero section will also smoothly scroll  
down to the portfolio section when clicked. All of this is achieved without  
duplicating code, thanks to our composable and Nuxt’s auto-import feature.  
To wrap up this chapter and give you a complete visualization, you’ll find a  
final screenshot of our project in the following figure\:  
102 103 Figure 2.9\: A screenshot of the final project  
# Summary  
In Chapter 2, we’ve taken a deep dive into building a simple but effective  
portfolio using Tailwind CSS and Nuxt 3. We kicked off by integrating  
Tailwind CSS into our Nuxt project, followed by laying out our website and  
customizing its fonts. We then explored how to manage images in Nuxt,  
opting for the public folder for ease of use. From there, we moved on to cre-  
ating reusable Vue components such as ProjectShowcase and  
SkillChip, which helped declutter our main layout. We also learned  
about scoped styling within components, ensuring that our styles are ap-  
plied only where they’re needed. Lastly, we ventured into the powerful  
world of composable, crafting a useScrollTo function that we were able  
to use in multiple components, thanks to Nuxt’s auto-import feature.  
In the upcoming chapter, we’re going to up the ante by constructing a real  
estate listing project. Prepare to dive deep into the essentials of routing,  
views, and layouts to create a multi-page application that mimics a real-  
world project. Additionally, we’ll explore the powerful capabilities of Nuxt  
plugins to further extend the functionality of our application.  
# Practice questions  
104 How do you integrate Tailwind CSS into a Nuxt 3 project?  
Explain the difference between the public/ and assets/ directories  
in Nuxt 3.  
How do you create a custom color scheme in Tailwind CSS?  
What is the purpose of the scoped attribute in a component’s \<style\>  
tag?  
How do you import and use a custom font in Nuxt 3?  
What is the benefit of using Vue’s \<slot\> element in a component?  
How do you loop through an array of objects in Vue to create multiple  
instances of a component?  
Describe the defineProps function and its use case in a Nuxt 3  
component.  
How do you create and use a composable in Nuxt 3?  
What is the purpose of the useScrollTo composable, and how is it  
implemented?  
How does Nuxt 3’s auto-import feature work with components and  
composables?  
# Further reading  
Tailwind CSS official documentation\: https\://tailwindcss.com/docs/in-  
stallation  
Vue composables\: https\://vuejs.org/guide/reusability/composables.html  
105 Nuxt composables directory\: https\://nuxt.com/docs/guide/directory-  
structure/composables  
Nuxt assets directory\: https\://nuxt.com/docs/getting-started/assets  
Nuxt components directory\: https\://nuxt.com/docs/guide/directory-  
structure/components  
106 3  
# Building a Real Estate Listing  
# Project to Grasp Routing, Views,  
# Layouts, and Plugins  
Welcome back, developers! As you step into Chapter 3, you’re not stepping  
into unknown territory; you’re entering a more advanced phase of your  
Nuxt 3 journey. If you’ve been with us from the start, you’re already famil-  
iar with setting up Nuxt 3 projects and integrating Tailwind CSS, among  
other things. This chapter will take your existing knowledge to the next lev-  
el as we dive into a real estate listing project.  
We’ll kick things off the way we usually do—by creating a new Nuxt 3  
project, with Tailwind CSS for styling and Google Fonts for typography.  
While this is familiar ground, the topics we cover will bring new layers of  
complexity, setting the stage for the new concepts that await you.  
This chapter promises to be an enlightening experience as it focuses on crit-  
ical aspects of Nuxt 3 that you’ve yet to explore. You’ll get to delve into ad-  
vanced topics such as layouts, routing, and plugins. Along the way, you’ll  
learn how to define default layouts, dig deeper into the Nuxt 3 routing  
mechanism, and explore plugins by adding Dayjs for date formatting.  
107 In this chapter, we’re going to cover the following main topics\:  
Defining a default layout for the website and overriding it with a 404  
page  
Creating the home page and exploring TypeScript support  
Creating a dynamic listing page  
Creating and validating a property details page  
Creating a plugin to use Dayjs for formatting dates  
# Technical requirements  
The code files for this chapter can be found at https\://github.com/PacktPub-  
lishing/Nuxt-3-Projects/tree/main/chapter03.  
The CiA video for this chapter can be found on https\://packt.link/2oM0A  
# Essential background-  
# understanding Nuxt 3 routing,  
# layouts, and plugins  
Before diving into the code, it’s crucial to grasp some key concepts that will  
be integral to this chapter’s real estate listing project\:  
108 Nuxt 3 routing\: Nuxt 3 eases the routing setup through an automatic  
route configuration stemming from your file arrangement in the pages  
directory. This eradicates the manual chore of defining routes, while still  
accommodating complex routing scenarios through the nuxt.con-  
fig.js file.  
Layouts\: Layouts in Nuxt 3 serve as containers around pages, assisting  
in maintaining a uniform UI throughout various pages. They are Vue  
files employing \<slot /\> components to showcase page content. A  
layouts/default.vue file is employed by default, but crafting  
custom layouts and assigning them in your page metadata is  
straightforward.  
Plugins\: Plugins in Nuxt 3 act as a bridge to connect global libraries or  
to encapsulate reusable code across your application. They are executed  
before the Nuxt application springs to life. All plugins within the /plu-  
gins directory are auto-loaded during Nuxt app creation. Plugins can be  
tailored to function only on the client or server side by appending a  
.client or .server suffix to the filename.  
These core concepts provide the necessary backdrop to navigate through  
this chapter’s project adeptly. As you traverse through the examples, you’ll  
notice how these elements collaboratively contribute to a well-structured,  
functional, and adaptable application.  
109 Setting up your real estate listing  
# project in Nuxt 3  
In the previous chapter, we explored the integration of TailwindCSS and  
@nuxtjs/google-fonts into a Nuxt 3 project. As we embark on creat-  
ing our new project \(let’s name it “Homescape”\), we’ll employ similar  
techniques.  
First, let’s create a new project\:  
pnpm dlx nuxi@latest init homescape  
Upon successful initialization, navigate to the project directory and open it  
with VS Code\:  
cd homescape  
code .  
Next, we’ll bring in TailwindCSS for styling, and @nuxtjs/google-  
font to automatically import any Google font.  
To install them, run the following\:  
110 pnpm i -D @nuxtjs/tailwindcss @nuxtjs/google-font  
Post-installation, update the nuxt.config.ts file to add the module and  
set up Google Fonts configuration\:  
// nuxt.config.ts  
export default defineNuxtConfig\(\{  
devtools\: \{ enabled\: true \},  
modules\: \['@nuxtjs/tailwindcss',  
'@nuxtjs/google-fonts'\],  
googleFonts\: \{  
families\: \{  
Inter\: \[100, 300, 400, 700, 900\]  
\}  
\}  
\}\)  
Then, let’s generate tailwind.config.js at the root of our project  
with some default variables\:  
import colors from 'tailwindcss/colors'  
/\*\* @type \{import\('tailwindcss'\).Config\} \*/  
export default \{  
content\: \[\],  
111 theme\: \{  
extend\: \{  
colors\: \{  
primary\: colors.amber\[600\],  
secondary\: colors.slate\[100\],  
red\: colors.red\[600\],  
yellow\: colors.yellow\[500\]  
\},  
// use Roboto Font  
fontFamily\: \{  
sans\: \['Inter', 'sans-serif'\]  
\},  
container\: \{  
center\: true,  
padding\: \{  
DEFAULT\: '1.5rem',  
lg\: '4rem',  
xl\: '4rem',  
'2xl'\: '4rem'  
\},  
screens\: \{  
sm\: '576px',  
md\: '768px',  
lg\: '992px',  
xl\: '1200px',  
'2xl'\: '1400px'  
\}  
\}  
112 \}  
\},  
plugins\: \[\]  
\}  
The tailwind.config.js file will act as our vessel for custom styling,  
component definition, and theme adjustments, ensuring our utility classes  
are optimized and maintaining a consistent design language throughout our  
project.  
Navigating from our generalized setup into specificity, here’s my preferred  
startup configuration in Tailwind CSS\:  
export default \{  
content\: \[\],  
theme\: \{  
extend\: \{  
colors\: \{  
primary\: '\#42B883',  
secondary\: '\#35495E',  
neutral\: '\#F7F9FA'  
\},  
container\: \{  
center\: true,  
padding\: \{  
DEFAULT\: '1.5rem',  
lg\: '4rem',  
113 xl\: '4rem',  
'2xl'\: '4rem'  
\},  
screens\: \{  
sm\: '576px',  
md\: '768px',  
lg\: '992px',  
xl\: '1200px',  
'2xl'\: '1400px'  
\}  
\}  
\}  
\},  
plugins\: \[\]  
\}  
Here, we’ve opted for a palette that includes shades of amber, slate, red, and  
yellow. These colors will lend a distinctive character to our real estate list-  
ing website. For those interested in the other configuration details, such as  
fonts and container settings, refer to Chapter 2, where we covered these  
topics comprehensively.  
Wrapping up the configuration setup, let’s put our adjustments to the test by  
crafting a simple layout. Navigate to your app.vue file and add this to the  
template\:  
114 \<template\>  
\</div\>  
\</template\>  
\<div class="text-8xl text-primary text-center"\>  
This is the expected output\:  
Figure 3.1\: Homescape – initial page  
With the initial project created, we are well-prepared to dive into the new  
aspects of our project. Let’s begin by defining the home page with a default  
layout, and tailoring it for the 404 page.  
115 Defining a default layout for the  
# website and overriding it with a  
# 404 page  
A well-structured layout is akin to the sturdy frame of a house, offering a  
solid foundation upon which distinct pages can seamlessly reside. It’s where  
you define common elements such as headers and footers just once, and  
they render consistently across your website, bringing a cohesive look and  
facilitating easier navigation for users.  
As we transition to the latter part of this section, our focus shifts to handling  
unforeseen situations where a user lands on a non-existent page. We’ll ex-  
plore how to craft a user-friendly 404 page in Nuxt that informs the user of  
the mishap and guides them back to the right path. So, let’s get started!  
# Defining a default layout  
Let’s begin by creating a new folder called layouts in the root directory  
of your project, then create a new file within it named default.vue.  
This file will hold the structure shared across all pages\:  
\<!-- File\: \~/layouts/default.vue --\>  
\<template\>  
116 \<div\>  
\<header\>the header\</header\>  
\<slot /\>  
\</div\>  
\</template\>  
In the layout file, the \<slot pages will be injected.  
/\> element is where the content of individual  
Within the app.vue file, we should wrap our template with the \<Nuxt-  
Layout\> component to define our layout. All the page content will be dis-  
played within this component\:  
\<!-- File\: \~/app.vue --\>  
\<template\>  
\<NuxtLayout\>  
\<div class="text-8xl text-primary text-center  
Homescape  
\</div\>  
\</NuxtLayout\>  
\</template\>  
Now you should be able to see the demo header on the website.  
117 Figure 3.2\: Homescape – with default layout  
We’ll implement the default.vue layout file to include three primary  
sections\: a header, the main content area, and a footer, along with a newslet-  
ters section. This layout encapsulates the common structure that all pages in  
the application will inherit.  
Let’s create our header component, which will serve as the primary naviga-  
tion bar for our website.  
# Creating the BaseHeader component  
Initially, we’ll organize our project by creating a new directory called base  
within the components directory. This base directory will house global  
118 components that aren’t tied to any specific business section.  
Inside the base directory, we create a new file named Header.vue. This  
file will hold all the code relevant to our header component\:  
components/  
|-- base/  
|-- Header.vue // Accessible as \<base-header  
Nuxt facilitates an automatic component discovery mechanism, which is  
quite powerful. In our setup, we’ve placed the Header.vue component  
inside a base folder within the components directory. Due to Nuxt’s nam-  
ing convention, this component is now accessible as \<base-header /\>  
in our layouts and pages.  
The naming convention is quite intuitive – the directory name is prefixed to  
the component name, separated by a hyphen. This not only makes compo-  
nent names unique but also groups related components together in a clear  
and organized manner. Moreover, it provides a straightforward way to iden-  
tify the origin and grouping of a component just by its name, which can be  
a significant aid in a collaborative development environment or a large-  
scale project.  
This Header.vue file will hold all the code relevant to our header  
component\:  
119 \<template\>  
\<!-- Header --\>  
\<header  
class="absolute top-0 left-0 w-full border-b  
border-b-gray-800 z-20 p-6"\>  
\<div class="container flex justify-between  
items-center"\>  
\<h1 class="text-white font-extralight  
uppercase text-2xl"\>Homescape  
\</h1\>  
\<nav\>  
\<ul class="flex space-x-4"\>  
\<li v-for="link in navLinks" \:key="link  
\<a  
\:href="link.href"  
class="text-white transition-colors  
font-semibold hover\:text-primary"\>  
\{\{ link.text \}\}  
\</a\>  
\</li\>  
\</ul\>  
\</nav\>  
\</div\>  
\</header\>  
\</template\>  
\<script setup lang="ts"\>  
const navLinks = ref\(\[  
120 \{ text\: 'Home', href\: '/' \},  
\{ text\: 'Listings', href\: '\#' \},  
\{ text\: 'About Us', href\: '\#' \},  
\{ text\: 'Contact', href\: '\#' \}  
\]\)  
\</script\>  
\<style scoped\>\</style\>  
We’ve styled the header to be fixed at the top with a border at the bottom,  
employing Tailwind CSS classes for styling. The navLinks data property  
holds an array of link objects, which are rendered as navigation links in the  
template.  
As we continue to build our website, we’ll craft a newsletter section and a  
footer component to enhance our web page’s structure and user  
engagement.  
Both components will be created inside the components/base folder  
with the names NewslettersSection.vue and Footer.vue\:  
\<!-- \~/components/base/ NewslettersSection.vue --  
\<template\>  
\<section class="bg-gray-100 py-12"\>  
\<div class="container text-center"\>  
\<h2 class="text-3xl font-bold text-gray-800  
Stay Updated  
121 \</h2\>  
\<p class="text-gray-700 mb-6"\>  
Subscribe to our newsletter to receive th  
property listings and updates.  
\</p\>  
\<form class="flex justify-center"\>  
\<input  
type="email"  
placeholder="Enter your email"  
required  
class="px-4 py-2 rounded-l-lg border  
border-gray-300 focus\:outline-no  
focus\:border-primary"/\>  
\<button  
type="submit"  
class="px-4 py-2 rounded-r-lg bg-primar  
text-white font-bold"\>Subscribe  
\</button\>  
\</form\>  
\</div\>  
\</section\>  
\</template\>  
The base-footer component consists of three sections\: company name and  
address, listing by category, and additional info with useful links like FAQs,  
privacy policy, and terms of service. The listing by category section will be  
populated later with data fetched statically. The footer also includes a copy-  
right notice, signifying the ownership of the website content\:  
122 \<template\>  
\<footer class="bg-zinc-900 text-gray-300"\>  
\<div class="container text-center lg\:text-lef  
\<div class="grid grid-cols-1 lg\:grid-cols-3  
\<!-- Company Name --\>  
\<div class="mb-4 lg\:mb-0"\>  
\<h3 class="text-3xl text-gray-200 upper  
font-extralight mb-8"\>Homsecape  
\</h3\>  
\<p class="text-gray-"00"\>  
123 Elm Street\<br /\>  
Suite 456\<br /\>  
Springfield, IL 62704  
\</p\>  
\</div\>  
\<!-- Listing by Category --\>  
\<div\>  
\<h4 class="text-lg font-bold text-gray-  
Listing by Category  
\</h4\>  
\</div\>  
\<!-- Additional Info --\>  
\<div\>  
\<h4 class="text-lg font-bold text-gray-  
Additional Info  
\</h4\>  
\<ul\>  
123 \<li class="mb-1"\>  
\<a  
href="\#"  
class="text-gray-400 transition-c  
hover\:text-primary"\>FAQ  
\</a\>  
\</li\>  
\<li class="mb-1"\>  
\<a  
href="\#"  
class="text-gray-400 transition-c  
hover\:text-primary"\>Privacy Polic  
\</a\>  
\</li\>  
\<li class="mb-1"\>  
\<a  
href="\#"  
class="text-gray-400 transition-c  
hover\:text-primary"\>Terms of Serv  
\</a\>  
\</li\>  
\</ul\>  
\</div\>  
\</div\>  
\</div\>  
\<div class="bg-zinc-950 text-center py-4 text  
text-sm"\>&copy; 2023 HOMESCAPE. All rights  
\</div\>  
124 \</footer\>  
\</template\>  
With the individual components created,’it’s time to bring them together  
within our default.vue layout file. This layout serves as the structural  
blueprint for our pages, ensuring a consistent design across the website.  
H’re’s how’we’ve structured our default.vue layout\:  
\<template\>  
\<base-header /\>  
\<slot\>\</slot\>  
\<base-newsletters-section /\>  
\<base-footer /\>  
\</template\>  
The output should be as follows\:  
125 Figure 3.3\: Homescape – final default layout  
You’ll notice that, currently, the header text is invisible, and the title over-  
laps with the header. However, once we introduce a hero section with a dark  
126 background and extend it to full height, the page aesthetics will significant-  
ly improve.  
Having established a solid foundation with our layouts and essential com-  
ponents, let’s move on to creating the home page, listing pages, and an error  
page.  
# Creating the home page and  
# exploring TypeScript support  
Building the home page and listing pages is a pivotal step in our project. It’s  
here that users will start their journey, browsing through various property  
listings. To begin crafting these pages, we need to set up a pages directory.  
This directory is essential for housing all our page components.  
# Introduction to the pages directory  
To create the home page or “index” page, we need to create a new compo-  
nent inside the pages directory called index.vue, then override the  
app.vue component as follows\:  
\<!-- app.vue --\>  
\<template\>  
\<NuxtLayout\>  
127 \<NuxtPage /\>  
\</NuxtLayout\>  
\</template\>  
Notice that we used the \<NuxtPage /\> component within  
NuxtLayout to render the current page component. This way, the struc-  
ture defined in app.vue acts as a universal layout, while the content from  
individual pages gets injected at the point where \<NuxtPage /\> is  
placed.  
The pages directory is quite powerful. The file structure within this direc-  
tory corresponds to the router structure of our application, and every .vue  
file becomes a route in our app. For instance, a pages/about.vue file  
automatically generates an /about route in our application.  
Now, with the pages directory set up and app.vue customized to em-  
brace individual pages, we are well on our way to defining the layouts for  
our home page and listing pages.  
# Exploring TypeScript support  
As we set sail on the task of creating pages with various property listings,  
it’s crucial to have a clear understanding and structure of the data we will be  
dealing with. In a real-world scenario, this data would be fetched from an  
API. However, for the scope of this chapter, we will be using static files to  
128 represent our data, keeping the transition to fetching data from an API  
smooth and straightforward in the upcoming chapters.  
The data in our application primarily revolves around properties and cate-  
gories. We have three different datasets representing properties\: proper-  
ties.ts, featuredProperties.ts, and recentlyListed-  
Properties.ts. Additionally, there’s a categories.ts file repre-  
senting different property categories. All these datasets are structured in a  
way that simulates real-world data.  
Now, to ensure consistency and error-free handling of this data across our  
application, employing TypeScript is a wise choice. TypeScript provides a  
way to define strict types for our data, which significantly reduces the po-  
tential for bugs and makes the code more readable and easier to manage.  
Nuxt 3 comes with built-in TypeScript support, which is a boon for devel-  
opers keen on type safety. Our first step is to define a Property type.  
Let’s create a types folder at the root level of our project, and within it, an  
index.ts file. In this file, we’ll define our Property type as well as the  
Category type\:  
export \{\}  
declare global \{  
type Property = \{  
id\: string  
129 title\: string  
description\: string  
image\: string  
category\: string // Reference to the category  
bedrooms\: number  
bathrooms\: number  
squareFeet\: number  
price\: number  
listedDate\: string  
\}  
type Category = \{  
id\: string  
name\: string  
description\: string  
image\: string  
\}  
\}  
By exporting an empty object and declaring a global object that contains  
Property and Category, we make these types available globally in our  
application. This approach eliminates the need to import the type in every  
component. Now Let’s talk about best practices for creating components in  
a Nuxt project.  
# A note on the component path  
When organizing components in a Nuxt 3 project, we have the flexibility to  
structure our files in a way that best suits our development style and project  
130 needs. For example, consider the following component path\:  
\<!-- /components/property/card.vue --\>  
This will create the component within a nested directory, property, un-  
der the components root directory, allowing us to group all components  
related to property features in the same folder. Alternatively, we could place  
the component directly under the components root directory with a more  
flattened structure\:  
\<!-- /components/PropertyCard.vue --\>  
Both approaches enable us to call the component in our templates using the  
same tag\:  
\<property-card /\>  
However, I prefer the first method as it helps organize related components  
together in the same folder, making the project structure more manageable,  
especially as the project grows.  
We now have a blueprint for the project types and component paths, let’s  
start creating our components!  
131 Create Property and Category Card  
# Components  
Begin by creating a folder called property. Inside it, create a Card.vue  
component that receives property as a prop\:  
\<!-- /components/property/Card.vue --\>  
\<template\>  
\<nuxt-link  
\:to="\`/properties/\$\{property.id\}\`"  
class="max-w-sm mx-auto bg-white shadow-lg ro  
overflow-hidden"  
\>  
\<img  
\:src="property.image"  
alt="Property image"  
class="w-full h-48 object-cover"  
/\>  
\<div class="p-6"\>  
\<h2 class="text-lg font-bold text-gray-800  
\{\{ property.title \}\}  
\</h2\>  
\<p class="text-gray-600 text-sm mb-4"\>  
\{\{ property.description \}\}  
\</p\>  
\<div class="flex justify-between items-cent  
132 \<span class="font-bold text-primary text-  
\$\{\{ property.price \}\}  
\</span\>  
\<span class="text-gray-600 text-sm"\>  
\{\{ property.bedrooms \}\} BR |  
\{\{ property.bathrooms \}\} BA |  
\{\{ property.squareFeet \}\} sq ft  
\</span\>  
\</div\>  
\</div\>  
\</nuxt-link\>  
\</template\>  
\<script setup lang="ts"\>  
import \{ Property \} from '\~/types'  
defineProps\<\{  
property\: Property  
\}\>\(\)  
\</script\>  
In the snippet provided, we used the Property type because we’ve al-  
ready defined it globally. Following that, defineProps is a utility from  
Vue.js used in the Composition API setup to define the types of our compo-  
nent props. In this instance, it specifies that the property prop should ad-  
here to the structure outlined in the Property type.  
In the same way, we’ll create the  
/components/category/Card.vue component\:  
133 \<!-- /components/category/Card.vue --\>  
\<template\>  
\<nuxt-link  
\:to="\`/categories/\$\{category.name\}\`"  
class="relative group overflow-hidden rounded  
\>  
\<img  
\:src="category.image"  
alt="Category image"  
class="w-full h-60 object-cover transition-  
duration-700 group-hover\:scale-110"  
/\>  
\<div  
class="absolute inset-0 bg-black bg-opacity  
group-hover\:bg-opacity-70 transition-all du  
flex items-center justify-center"  
\>  
\<div class="text-center"\>  
\<h3  
class="text-xl group-hover\:text-2xl  
transition-all duration-700 font-bold t  
\>  
\{\{ category.name \}\}  
\</h3\>  
\</div\>  
\</div\>  
\</nuxt-link\>  
134 \</template\>  
\<script setup lang="ts"\>  
defineProps\<\{  
category\: Category  
\}\>\(\)  
\</script\>  
Now let’s and start implementing the homepage and see how we will use  
Property and Category components within it.  
# Creating the home page  
We’ll kick off by creating a simple overlay background component inside  
the base folder\:  
\<!-- components\\base\\OverlayBg.vue --\>  
\<template\>  
\<div class="absolute inset-0"\>  
\<img  
class="w-full h-full object-cover"  
src="\~/assets/images/homescape-bg.webp"  
/\>  
\</div\>  
\</template\>  
\<div class="absolute inset-0 bg-black bg-opac  
135 This component will be used as an absolute background in the hero section,  
as well as the error page.  
Then, let’s craft the HeroSection component, which will serve as a wel-  
coming visual for our visitors. This component will be housed within a ded-  
icated home page folder, showcasing the organized and modular structure of  
our application\:  
\<template\>  
\<!-- Hero Section --\>  
\<section  
class="relative h-screen flex items-center  
justify-center rounded-lg p-6"  
\>  
\<base-overlay-bg /\>  
\<div class="relative text-center z-10"\>  
\<h2 class="text-primary font-bold text-5xl  
Find Your Dream Home with  
\<span class="uppercase font-extralight"\>H  
\</span\>  
\</h2\>  
\<p  
class="text-gray-300 text-3xl leading-snu  
text-center font-extralight mb-12"\>  
Explore listings, compare properties, and  
a place you'll love to live.  
136 \</p\>  
\</div\>  
\</section\>  
\</template\>  
\<base-btn\> Browse Listings \</base-btn\>  
Following HeroSection, we’ll flesh out additional segments of our  
home page, namely the FeaturedProperties and  
RecentlyListedProperties sections. These sections will pull data  
from respective static files, rendering property cards to display an assort-  
ment of properties.  
Here is the FeaturedProperties component\:  
\<template\>  
\<section class="container py-12"\>  
\<h2 class="text-3xl text-center font-bold tex  
mb-6"\>  
Top Featured Properties  
\</h2\>  
\<div class="grid grid-cols-1 md\:grid-cols-2  
lg\:grid-cols-4 gap-6"\>  
\<property-card  
v-for="property in featuredProperties"  
\:key="property.id"  
\:property="property"  
/\>  
137 \</div\>  
\</section\>  
\</template\>  
\<script setup lang="ts"\>  
import featuredProperties from '\~/data/featuredPr  
\</script\>  
A similar approach will be taken for RecentlyListedProperties.  
Additionally, we’ll craft a component for each property category and encap-  
sulate them within an ExploreCategories component, which will also  
be placed on the home page\:  
components  
│  
├── base  
│ ├── Btn.vue  
│ ├── Footer.vue  
│ ├── Header.vue  
│ └── NewslettersSection.vue  
│ └── OverlayBg.vue  
│  
├── category  
│ └── Card.vue  
│  
├── homepage  
│ ├── HeroSection.vue  
138 │ ├── ExploreCategories.vue  
│ ├── FeaturedProperties.vue  
│ └── RecentlyListedProperties.vue  
│  
└── property  
└── Card.vue  
Each folder under the components directory is systematically organized  
to house relevant components, aiding in achieving a clean, well-structured,  
and manageable code base.  
NOTE  
All resources, the entire code base, and the assets utilized in this chapter  
are readily available in the associated repository for your reference and  
exploration.  
Having followed through with the outlined steps, at this juncture, your ap-  
plication should look like this\:  
139 140 Figure 3.4\: Final home page  
We’ve done an excellent job constructing our home page. Next, we’ll ven-  
ture into creating the listing pages to further enhance our application’s  
functionality.  
# Creating a dynamic listing page  
Dynamic routing is a fundamental concept in Nuxt that allows developers to  
build flexible and data-driven routes. Unlike static routes, where each route  
is predefined and fixed, dynamic routes adapt to the data they are provided,  
enabling a more scalable and maintainable routing structure.  
In Nuxt, creating dynamic routes is as simple as adding a Vue file in the  
pages directory with a special filename. The filename should contain a pa-  
rameter enclosed in square brackets \[\], which acts as a placeholder for the  
actual data that will be passed to the route. This parameter can then be ac-  
cessed within the page component, providing a means to load and display  
data based on the route.  
For instance, if you have a file named \[slug\].vue in the pages directo-  
ry, Nuxt will translate this to a route with a dynamic segment such as  
/something, where something is the value of the slug parameter. This  
slug parameter can be accessed within the page component, enabling the  
loading and displaying of data based on its value.  
141 Now, in our specific example, we will explore how we can leverage this  
feature to create category-based listing pages by defining a \[name\].vue  
file within a categories directory under the pages directory. This set-  
up will enable us to have routes such as /categories/houses or  
/categories/apartments, dynamically rendering the properties as-  
sociated with each category.  
Now, let’s discuss the script section of our \[name\].vue file\:  
\<script setup lang="ts"\>  
import properties from '\~/data/properties'  
const route = useRoute\(\)  
const categoryName = route.params.name  
const filteredProperties = computed\(\(\) =\>  
properties.filter\(item =\> item.category === cat  
\)  
\</script\>  
Here’s a step-by-step breakdown of the script\:  
1\. We import the properties data from our static data file.  
2\. We employ the useRoute composable from Nuxt to access the route  
parameters.  
3\. The categoryName constant captures the dynamic segment of the  
route \(the category name in this case\).  
142 4\. We create a computed property, filteredProperties, to filter the  
properties array based on the category name.  
Moving on to the template section, it’s designed to exhibit the properties fil-  
tered by category. If there are properties matching the category, they are dis-  
played in a grid layout. If not, a message indicating no properties found is  
displayed, along with a button to return to the home page\:  
\<div  
v-if="filteredProperties.length"  
class="grid grid-cols-1 md\:grid-cols-2 lg\:grid-  
gap-6"  
\>  
\<property-card  
v-for="property in filteredProperties"  
\:key="property.id"  
\:property="property" /\>  
\</div\>  
\<div v-else class="text-center py-12"\>  
\<div class="text-5xl font-black mb-2"\>Oops\</div  
\<p class="text-gray-700 text-xl mb-8"\>  
No properties found for this category.  
\</p\>  
\<nuxt-link to="/"\>  
\<base-btn\>return to homepage\</base-btn\>  
143 \</nuxt-link\>  
\</div\>  
The logic here is straightforward\:  
We use a v-if directive to check if there are any properties for the cho-  
sen category. If there are, we render a grid of property-card compo-  
nents, each receiving a property object as a prop.  
144 145 Figure 3.5\: Listing categories/Lofts  
In the case where no properties match the category \(v-else\), we dis-  
play a message and a button that navigates back to the home page, offer-  
ing a good user experience and a clear path of action when the desired  
content is not found.  
146 147 Figure 3.6\: Listing invalid category  
However, this page doesn’t validate whether the route parameter is exists or  
not. In the next section, we’ll implement and validate the property details  
page and learn how to validate the route parameters.  
# Creating and validating a property  
# details page  
In the previous section, data validation was not implemented; we merely  
checked whether there were any properties associated with a particular cate-  
gory and displayed a message if none were found. However, on the property  
details page, we’re adding an extra layer of validation to ensure the data in-  
tegrity and user experience are upheld.  
Let’s create the property details dynamic page. The page should be located  
at /pages/properties/\[id\].vue, allowing dynamic access to indi-  
vidual property pages based on the property ID.  
Now, let’s discuss the script section\:  
\<script setup lang="ts"\>  
import properties from '\~/data/properties'  
definePageMeta\(\{  
148 validate\: async route =\> \{  
// check if property exists  
return !!properties.find\(  
item =\> item.id === route.params.id\)  
\}  
\}\)  
const route = useRoute\(\)  
const property = properties.find\(  
item =\> item.id === route.params.id\)  
\</script\>  
Here’s a breakdown of the script\:  
The definePageMeta function is utilized within a Nuxt setup to define  
metadata for the page. It’s a utility that allows you to set up various options  
and hooks related to the page lifecycle and behavior. One of the powerful  
features provided by definePageMeta is the ability to validate route pa-  
rameters using the validate method.  
The validate method is used to validate route parameters before render-  
ing the page. It’s a way to ensure that the incoming route parameters meet  
certain criteria before allowing the page to be rendered. If the validate  
method returns false \(when the ID does not match any property\), Nuxt will  
automatically redirect the user to a 404 error page.  
After validation, the script uses the useRoute function to obtain the cur-  
rent route object. Then, it locates the specific property object within the  
149 properties data that matches the ID from the route parameters. This property  
object will be utilized within the template to display the details of the se-  
lected property.  
The template for displaying property details is straightforward as it merely  
exhibits the attributes of the property. You can check it from the related  
repo.  
After implementing the script and template, you can test the setup by ac-  
cessing the page at http\://localhost\:3000/properties/6. This URL should lead  
you to a page displaying the details of a valid property.  
150 151 Figure 3.7\: Property details page  
However, if you attempt to access a non-existent property, for instance, via  
http\://localhost\:3000/properties/6666, the application should redirect you to  
a 404 error page. This behavior ensures that users are guided appropriately  
when they attempt to access content that doesn’t exist, thereby enhancing  
the user experience and maintaining the integrity of the application’s data  
presentation. Now let’s move on to create a custom error page.  
# Creating a Custom error page  
Handling errors gracefully is crucial for a good user experience. Nuxt pro-  
vides a default error page that gets displayed whenever an error occurs,  
such as when a user navigates to a non-existent route. Initially, if you try to  
access a wrong URL, as we did before, you’ll be greeted by Nuxt’s default  
error page, which is quite generic.  
152 Figure 3.8\: Default error page  
Our aim is to override this with a more personalized page that maintains the  
website’s theme. Create a new file named error.vue in the root directory  
153 of your project besides the app.vue component. This error.vue file  
will override the default error page provided by Nuxt.  
Here’s an example of how you might structure the file\:  
\<template\>  
\<div  
class="min-h-screen bg-zinc-900 flex flex-col  
justify-center items-center"\>  
\<div class="relative text-center"\>  
\<div class="text-9xl font-black  
text-amber-600"\>404\</div\>  
\<p class="text-gray-300 text-xl mt-4 mb-8"\>  
Oops, the page you're looking for doesn't  
\</p\>  
\<router-link to="/"\>  
\<base-btn\> Go Home \</base-btn\>  
\</router-link\>  
\</div\>  
\</div\>  
\</template\>  
You might notice that I’ve created a simple BaseBtn.vue component  
with custom css styles in it. You can check the component in the related  
chapter repo.  
154 By default, this custom error page will catch 404 errors, displaying your  
personalized message whenever a user tries to access a route that doesn’t  
exist. However, it’s noteworthy that, as it stands, this page will show a 404  
error even if other types of errors occur. We can adjust this behavior later to  
handle different error types accordingly.  
Now let’s test it by trying to access a non-existent route\:  
155 Figure 3.9\: Custom error.vue  
In the next section, we’ll create a plugin that uses the Dayjs library to han-  
dle date formatting across our application.  
156 Creating a plugin to use Dasyjs for  
# formatting dates  
One of the most overlooked but crucial parts of any application is the way  
we manage and display times and dates. Typically, JavaScript’s native  
Date object can be cumbersome to use for advanced formatting. This is  
where Dayjs comes into play. Dayjs is a minimalist JavaScript library  
that provides a straightforward way to format, parse, and manipulate dates.  
Going forward, we’ll replace static date rendering in our project with for-  
matted date that shows the relative date from the current date using Dayjs.  
# Installing Dayjs  
To get started, install Dayjs by running the following command in your  
project directory\:  
pnpm i dayjs  
# Setting up the plugin directory and file  
Nuxt’s plugin system allows you to run your code before the root Vue.js ap-  
plication is instantiated. They are run during the boot-up phase of your ap-  
157 plication and can execute on the client side, server side, or both depending  
on your configuration.  
When you create a new plugin, it’s like adding a new member to your team  
that has specific skills. This team member \(the plugin\) can do tasks that  
everyone in the project can use. For example, setting up Dayjs as a plugin  
allows you to call upon date formatting functionality wherever you need it  
in your project.  
By placing the dayjs.ts file in the plugins directory, you’re essential-  
ly telling Nuxt, “Hey, before you start up, make sure you know how to for-  
mat dates using Dayjs, because we’re going to need it.” If you haven’t al-  
ready set up a plugins directory, create one at the root of your project.  
Inside this directory, create a new file named dayjs.ts.  
# Initializing Dayjs with configuration  
In your newly created dayjs.ts file, you’ll need to import Dayjs and  
initialize it with the necessary configurations. Once initialized, we’ll use  
Vue’s provide method to make the FromNow function available through-  
out the application. This capability will enable us to represent dates in a  
more user-friendly, relative format such as “1 day ago” or “2 weeks ago.”  
Here’s the code for the plugin\:  
158 import dayjs from 'dayjs'  
import relativeTime from 'dayjs/plugin/relativeTi  
export default defineNuxtPlugin\(nuxtApp =\> \{  
dayjs.extend\(relativeTime\)  
const fromNow = \(date\: string\) =\> \{  
return dayjs\(date\).fromNow\(\)  
\}  
return \{  
provide\: \{ fromNow \}  
\}  
\}\)  
Here’s a breakdown of the code\:  
1\. The plugin begins by importing the Dayjs library along with its rela-  
tiveTime plugin.  
2\. We use Nuxt’s defineNuxtPlugin method to create the plugin.  
3\. Inside the plugin, a function called fromNow is defined. It takes a date  
string and uses the Dayjs .fromNow\(\) method to return the relative  
time difference in a human-readable format.  
4\. Finally, the provide method is used to make this function globally  
available throughout our Nuxt application.  
# Using the global FromNow function for the  
# property details page  
159 Once you’ve successfully created and integrated the Dayjs plugin into  
your Nuxt application, the next step is to utilize it in your components or  
pages. Here, we’ll incorporate it into our property details page.  
Locate the page\: pages\\properties\\\[id\].vue. Below the property  
description, insert the following code\:  
\<p class="text-gray-700 text-center text-lg"\>  
\{\{ property.description \}\}  
\</p\>  
\<div class="text-gray-700 text-center mb-8"\>  
Listed \{\{ \$fromNow\(property.listedDate\) \}\}  
\</div\>  
The \$fromNow function is now globally available due to the plugin we  
created earlier. It takes property.listedDate as an argument and dis-  
plays it in a human-readable format.  
One of the advantages of the prerequisites extenstions that we installed in  
VS Code is that your IDE will recognize the provided helpers in the plug-  
ins directory. This means that you’ll benefit from Intellisense support  
when you type \$fromNow, with autocomplete suggestions and even para-  
meter hints, making your development process more efficient.  
160 Figure 3.10\: plugins provide Intellisense  
To sum up, we walked through the process of creating a Nuxt plugin to inte-  
grate Dayjs for date formatting. We then used this globally available  
fromNow function for the property details page to display dates in a hu-  
man-readable format.  
# Summary  
In this chapter, we dived into advanced Nuxt 3 features by crafting a real es-  
tate listing project. We started by setting up a Nuxt 3 project, incorporating  
Tailwind CSS and Google Fonts—basics that we’ve touched on before. We  
quickly moved on to defining a default website layout and learning how to  
override it for special cases, such as a 404 page. TypeScript support had its  
moment too, as we developed the home page. Next, we created a dynamic  
listing page for displaying properties and followed that by building out indi-  
vidual property detail pages. We wrapped up by integrating Dayjs via a  
custom plugin for date formatting. Along the way, key Nuxt 3 concepts  
161 such as routing, layouts, and plugins served as guideposts, helping us build  
a well-rounded application. This chapter aimed to level up your Nuxt 3 ex-  
pertise, making you more than ready for complex projects.  
In the upcoming Chapter 4, we’ll shift our focus to a new challenge\: build-  
ing a weather dashboard. The chapter will be your hands-on guide to under-  
standing state management in a Nuxt application using Pinia. It’s not just  
theory; you’ll be building a practical, real-world application where you’ll  
manage the state of multiple cities and their weather data.  
# Practice questions  
How do you set up a default layout in a Nuxt 3 project?  
How do you create an error page?  
Does Nuxt support TypeScript in components or props?  
How do you create dynamic pages?  
How do you validate the dynamic pages and redirect to a 404 page if  
they’re not valid?  
What is a Nuxt plugin? What are the primary benefits of them?  
How do you implement a plugin such as Dayjs for date formatting in  
Nuxt 3?  
# Further reading  
162 Nuxt Routing\: https\://nuxt.com/docs/getting-started/routing  
Vue plugins\: https\://vuejs.org/guide/reusability/plugins  
Nuxt pages directory\: https\://nuxt.com/docs/guide/directory-  
structure/pages  
Nuxt layouts directory\: https\://nuxt.com/docs/guide/directory-  
structure/layouts  
Nuxt plugins directory\: https\://nuxt.com/docs/guide/directory-  
structure/plugins  
Dayjs documentation\: https\://day.js.org/docs/en/installation/installation  
163 4  
# Building a Weather Dashboard –  
# Data Fetching and State  
# Management  
As we venture into Chapter 4 of our Nuxt 3 exploration, we’re setting our  
sights on constructing a practical weather dashboard. Our journey starts  
with Nuxt UI, Nuxt’s official UI library, which simplifies the creation of  
stunning and responsive web applications. Nuxt UI offers a comprehensive  
collection of fully styled and customizable UI components, specifically de-  
signed for Nuxt. We’ll explore how to import Nuxt UI into our project and  
use its components.  
Next, we’ll discuss data fetching in general. This will lay the groundwork  
for understanding how to retrieve and handle data dynamically in a Nuxt  
application. Specifically, we’ll use the OpenWeatherMap API in our  
project, providing a real-world context for our data fetching practices.  
Following this, we’ll master \$fetch for efficient data fetching. By fetch-  
ing real weather data from the OpenWeatherMap API, you’ll learn how to  
display this information effectively and responsively.  
164 Finally, we will guide you through state management using Pinia. This ap-  
proach centralizes and manages the state of your application’s data, facili-  
tating easy access and manipulation of weather data across different compo-  
nents without the complexities of prop drilling.  
In this chapter, we’re going to cover the following main topics\:  
Setting up the weather dashboard application.  
Integrating Nuxt UI in the weather dashboard  
Exploring data fetching with \$fetch in Nuxt 3  
Integrating with the Pinia store to monitor city and weather data  
# Technical requirements  
The code files for this chapter can be found at https\://github.com/PacktPub-  
lishing/Nuxt-3-Projects/tree/main/chapter04.  
The CiA video for this chapter can be found on https\://packt.link/1uNS1  
# Essential background –  
# understanding Nuxt 3 Data  
# Fetching and State Management  
165 Before diving into the practical application, let’s build a solid foundation in  
two key areas – data fetching with Nuxt UI and state management using  
Pinia\:  
Data fetching\: It’s crucial to understand the concept of data fetching in  
web applications. Data fetching refers to the process of retrieving data  
from an external source, such as an API, and displaying it in your appli-  
cation. Nuxt 3 offers enhanced data fetching capabilities, making it easi-  
er and more efficient. You’ll learn about built-in methods and tools in  
Nuxt 3, such as \$fetch, which simplifies the process of fetching and  
displaying data.  
State management with Pinia\: Pinia is a state management library de-  
signed for Vue applications, offering a more intuitive and straightfor-  
ward approach than its predecessor, Vuex. With Pinia, you can centralize  
and manage the application’s state, facilitating data sharing across com-  
ponents without prop drilling. Pinia also offers API-style composition.  
More details can be found on Pinia’s official website at https\://pinia.vue-  
js.org/.  
Now that we’ve covered those two areas, let’s start by setting up our weath-  
er dashboard application.  
First, let’s kick off by creating our new project named weather-sky\:  
166 pnpm dlx nuxi@latest init weather-sky  
After initializing, navigate to the project directory\:  
cd weather-sky  
code .  
Next, we will incorporate @nuxtjs/google-fonts for our font needs.  
However, diverging from our usual path of adding Tailwind CSS, we’ll in-  
troduce Nuxt UI to our toolkit.  
Let’s install these packages\:  
pnpm i @nuxtjs/google-fonts  
pnpm i @nuxt/ui  
Once installed, open nuxt.config.ts and add both  
@nuxtjs/google-fonts and @nuxt/ui to the modules array, inte-  
grating them into our project setup.  
Before implementing Nuxt UI theming, we’ll create a tailwind.con-  
fig.ts file and include our standard configurations. However, this time,  
167 we won’t define the colors in the Tailwind configuration. Instead, we’ll  
leverage Nuxt UI theming capabilities to set this color. We’ll learn how to  
do that in the next section.  
Here’s how the tailwind.config.ts might look without adding the  
colors option\:  
import type \{ Config \} from 'tailwindcss'  
export default \<Partial\<Config\>\>\{  
theme\: \{  
extend\: \{  
fontFamily\: \{  
sans\: \['Roboto', 'sans-serif'\]  
\},  
container\: \{  
center\: true,  
padding\: \{  
DEFAULT\: '1.5rem',  
lg\: '4rem',  
xl\: '4rem',  
'2xl'\: '4rem'  
\},  
screens\: \{  
sm\: '576px',  
md\: '768px',  
lg\: '992px',  
168 xl\: '1200px',  
'2xl'\: '1400px'  
\}  
\}  
\}  
\}  
\}  
Finally, let’s integrate the Roboto font into our project. We do this by updat-  
ing the nuxt.config.ts file, as follows\:  
export default defineNuxtConfig\(\{  
modules\: \['@nuxt/ui', '@nuxtjs/google-fonts'\],  
googleFonts\: \{  
families\: \{  
Roboto\: \[100, 300, 400, 700, 900\]  
\}  
\},  
\}\)  
Now, let’s add a title in app.vue and see how it looks\:  
\<template\>  
\<div class="bg-slate-100 dark\:bg-slate-800 min-  
py-4"\>  
\<div class="text-3xl text-center"\>Weather Sky  
169 \</div\>  
\</template\>  
The output should be similar to this\:  
Figure 4.1\: Weather Sky initial page  
NOTE  
Nuxt UI uses the system’ s default color scheme. As a result, you might no-  
tice that the color of your app appears dark instead of light if you do not  
170 specify a custom color. This behavior ensures that your app automatically  
aligns with the user’ s preferred theme.  
To verify the font, a handy Chrome extension called WhatFont can be  
used. WhatFont is an efficient tool for quickly identifying the fonts used on  
web pages. It’s a great aid for designers and developers to confirm font  
choices and styles.  
When using WhatFont on our website, if you click on the extension icon  
and select the title, it will display the font details. In our case, it should con-  
firm the use of Roboto with a weight of 400\:  
Figure 4.2\: The WhatFont extension  
171 Now that we’ve set up our project, our next step is to integrate with Nuxt  
UI and make use of its features and components.  
# Integrating Nuxt UI in the weather  
# dashboard  
Nuxt UI is an official UI library from Nuxt, designed to enhance the user in-  
terface experience in Nuxt applications. It offers a range of features, includ-  
ing fully styled and customizable components, support for dark mode, key-  
board shortcuts, and support for both left-to-right and right-to-left lan-  
guages. Built with Headless UI and Tailwind CSS, Nuxt UI provides a ro-  
bust framework for creating intuitive and visually appealing user interfaces  
in Nuxt apps. You can read more about it on the official website\:  
https\://ui.nuxt.com/.  
Now, let’s go back to our project and start learning about Nuxt UI theming.  
We’ll utilize app.config.ts to define the primary color, integrating our  
design preferences within the Nuxt ecosystem. Here’s how we set it up\:  
export default defineAppConfig\(\{  
ui\: \{  
primary\: 'sky'  
172 \}  
\}\)  
The app.config.ts file is a central UI configuration file, offering dy-  
namic theming capabilities. This flexibility enables us to tailor our applica-  
tion’s theme and component styles on the fly. By setting theme colors and  
integrating with Tailwind CSS, we gain access to a broader color palette,  
enhancing our design options. Moreover, the ui property provides specific  
component customizations, allowing for a personalized and coherent user  
interface. As we progress, we will explore, in detail, how to use this file to  
customize our components’ design.  
Let’s put our Nuxt UI integration to the test and start using some of its com-  
ponents in our app.vue file. The following code snippet shows how to  
create a basic layout with a weather card\:  
\<template\>  
\<div class="bg-slate-100 min-h-screen"\>  
\<u-container\>  
\<u-card\> weather sky \</u-card\>  
\</u-container\>  
\</div\>  
\</template\>  
In this template, we use the \<u-container\> component from Nuxt UI,  
which provides a containerized space for our content. The \<u-card\> com-  
173 ponent within it is where we display our weather data.  
Here’s the output of our updated Nuxt UI integration in the app.vue file\:  
Figure 4.3\: Nuxt UI integration  
Now, let’s consider enhancing our layout further. Suppose we want to add  
vertical spacing to the container. Typically, we could do this by adding the  
py-6 class directly in our template. But what if we aim for a more stream-  
lined approach, where this spacing becomes a default style for all containers  
in our application? This is where the power of component customization in  
Nuxt UI truly shines.  
Nuxt UI allows us to override and customize component styles globally via  
the app.config.ts file. By doing this, we ensure consistent styling  
across our application without repeatedly adding the same class in different  
174 components. Here’s how we can achieve this for our container  
component\:  
export default defineAppConfig\(\{  
ui\: \{  
primary\: 'sky',  
container\: \{  
padding\: 'py-6'  
\}  
\}  
\}\)  
In this configuration, we’ve added a padding property to the contain-  
er configuration within the ui property, based on the configuration options  
available for the u-container component, which we can find detailed  
here\: https\://ui.nuxt.com/layout/container\#config.  
NOTE  
After modifying the configuration, it may be necessary to restart your devel-  
opment server to apply and view the changes in your application.  
Now, every time we use the \<u-container\> component in our applica-  
tion, it will automatically include this vertical padding, creating a consistent  
look and feel throughout the app.  
175 Let’s now customize the u-card component and remove the shadow. This  
is done via the app.config.ts file\:  
export default defineAppConfig\(\{  
ui\: \{  
// ...other configurations...  
card\: \{  
base\: 'overflow-visible mb-6',  
shadow\: 'shadow-none'  
\}  
\}  
\}\)  
In this configuration, we’re setting the base property to 'overflow-  
visible mb-6'. This adjusts the default layout of the card, allowing for  
visible overflow and adding a margin at the bottom. Additionally, we’re ap-  
plying 'shadow-none' to the shadow property, effectively removing  
the default shadow from all cards.  
Next, we’ll explore data fetching with \$fetch in Nuxt 3, diving into how  
to efficiently fetch and manage data in our applications.  
# Exploring data fetching with \$fetch  
# in Nuxt 3  
176 In Nuxt 3, data fetching is a pivotal aspect that is managed using compos-  
ables that work in both browser and server environments. Nuxt offers three  
primary tools for this purpose\:  
useFetch\: This is the most straightforward method for data fetching  
within a component’s setup function, typically used for retrieving essen-  
tial data for the component’s initial state. But in our project, we’ll work  
with more complex methods\: useAsyncData and \$fetch.  
useAsyncData\: This is like useFetch but includes additional logic  
for more complex data fetching scenarios.  
\$fetch\: This is a part of the ofetch library and is a versatile fetch  
API that works across Node.js, browsers, and workers. It features smart  
JSON parsing, automatic stringification for JSON bodies, user-friendly  
error handling, auto retry capabilities, and configurable timeouts. This  
makes \$fetch a robust tool for efficient, reliable network requests in  
various environments. You can read more about it at  
https\://github.com/unjs/ofetch.  
Now, let’s progress with the next steps in our Nuxt 3 project.  
# Creating an account on OpenWeatherMap  
OpenWeatherMap offers a comprehensive suite of weather APIs, provid-  
ing real-time data for our weather dashboard.  
177 Before we can fetch weather data, it’s essential to have access to  
OpenWeatherMap’s APIs. Begin by creating an account on  
OpenWeatherMap. Go to their sign-up page\:  
https\://openweathermap.org/register, provide the required details, and create  
your account. Once your account is set up, go to the dropdown menu under  
your username and navigate to the My API keys page, then generate a new  
key. Remember to copy this key, as it will be crucial for accessing the APIs.  
We’ll focus on two APIs from OpenWeatherMap\:  
Geocoding API\: This API enables location searches, allowing users to  
find specific cities or regions. You can find the full documentation here\:  
https\://openweathermap.org/api/geocoding-api.  
One Call API\: This provides detailed weather information for the  
searched location, offering current weather information, data forecasts,  
and more. For more info, visit https\://openweathermap.org/api/one-call-  
3.  
# Testing the API  
To utilize the Geocoding API from OpenWeatherMap, we’ll implement a  
test scenario using \$fetch in our Nuxt application.  
In app.vue, create a script, then define a function that will use \$fetch  
to call the Geocoding API\:  
178 \<script setup lang="ts"\>  
async function citiesLookup\(query \: string\) \{  
const apiKey = 'YOUR\_API\_KEY'; // Replace with  
actual API ke  
const response = await \$fetch\(  
\`http\://api.openweathermap.org/geo/1.0/direct  
\$\{query\}&limit=5&appid=\$\{apiKey\}\`  
\);  
return response;  
\}  
\</script\>  
Here is the breakdown of the function\:  
This function performs a lookup for cities using the OpenWeatherMap  
Geocoding API  
The query parameter is used to search for the name of the city or a part  
of it  
The limit=5 parameter in the URL limits the number of results to five  
Don’t forget to replace apiKey with your actual key.  
Then, invoke this function with a sample location query to test the API\:  
const data = await citiesLookup\('London'\);  
179 console.log\(data\); // Outputs the response from t  
Geocoding API  
You should see a similar output to this\:  
Figure 4.4\: Geocoding API response  
180 With the successful testing of the API, let’s define types for the responses  
from OpenWeatherMap.  
# Defining global types  
Having previously discussed TypeScript types, we will now focus on defin-  
ing them for the responses from OpenWeatherMap APIs. Anticipating the  
structure of the data we’ll receive from the API is crucial for type-safe  
development.  
Inspecting the console output reveals that the city object contains specific  
fields. To handle this data effectively, we create an index.ts file in a  
types folder with the following type\:  
export \{\}  
declare global \{  
type CityData = \{  
name\: string  
lat\: number  
lon\: number  
country\: string  
state\: string  
\}  
\}  
181 As we learned in the previous chapter, by exporting an empty object and de-  
claring a global object that contains the CityData type, we’ve made these  
types globally available in our application.  
Now, let’s enhance our application’s configuration strategy and find a way  
to save our API key.  
# Utilizing useRuntimeConfig to expose  
# configuration within the application  
useRuntimeConfig is a composable in Nuxt 3 designed for accessing  
runtime configurations. This feature enables the global and centralized man-  
agement of configuration values, such as API keys, across your application.  
Runtime configurations are stored in nuxt.config.ts using the run-  
timeConfig attribute. You can define a secret key, which will be accessi-  
ble only on the server, or public keys. In our case, we’ll define the API key  
as a public key to be accessible on the client side, too.  
Update nuxt.config.ts by adding the following\:  
export default defineNuxtConfig\(\{  
// …other configs  
runtimeConfig\: \{  
public\: \{  
182 weatherApiKey\: "ENTER\_YOUR\_KEY\_HERE"  
\}  
\},  
\}\)  
Then, we’ll update the citiesLookup method to retrieve the API key via  
useRuntimeConfig\:  
async function citiesLookup\(query\) \{  
const config = useRuntimeConfig\(\)  
const apiKey = config.public.weatherApiKey  
const response = await \$fetch\(  
\`http\://api.openweathermap.org/geo/1.0/direct  
\$\{query\}&limit=5&appid=\$\{apiKey\}\`  
\);  
return response;  
\}  
After updating, we’ll retest to ensure that the function remains effective  
with the new configuration setup. It should yield the same result. If you en-  
counter a 401 error, it indicates an incorrect or invalid API key. In this  
case, debug the runtime configuration to verify that the key is displayed  
correctly.  
Next, we’ll enhance our dashboard with a dynamic city search feature using  
Nuxt UI’s SelectMenu component.  
183 Creating the CitiesLookup component  
We’ll build the CitiesLookup component, a key feature of our weather  
dashboard. Utilizing Nuxt UI’s SelectMenu component will enable users  
to dynamically search for cities. The integration of asynchronous search ca-  
pabilities will create a seamless and intuitive user experience. First, let’s  
create the CitiesLookup component inside the components folder.  
Then, add the following template\:  
\<template\>  
\<USelectMenu  
v-model="activeCity"  
\:searchable="citiesLookup"  
placeholder="Search for a city..."  
/\>  
\</template\>  
This part sets up the UI for city searching. USelectMenu is bound to ac-  
tiveCity for capturing the user’s selection. The \:searchable at-  
tribute is linked to the citiesLookup function, which we will see in the  
script section\:  
\<script setup lang="ts"\>  
const config = useRuntimeConfig\(\)  
184 const apiKey = config.public.weatherApiKey  
const activeCity = ref\(\)  
const citiesLookup = async \(query\: string\) =\> \{  
if \(!query\) return  
const response\: Array\<CityData\> = await \$fetch\(  
\`http\://api.openweathermap.org/geo/1.0/direct  
\$\{query\}&limit=5&appid=\$\{apiKey\}\`  
\)  
return response.map\(city =\> \(\{  
...city,  
label\: \`\$\{city.name\}, \$\{city.country\}\`  
\}\)\)  
\}  
\</script\>  
Here’s the breakdown\:  
We started by employing useRuntimeConfig to access the API key.  
We also defined activeCity to store and react to the user’s selection  
from the drop-down menu.  
The citiesLookup function, which we initially tested in the previous  
section, is now adapted to fetch city data and format it for the  
USelectMenu component. First, we skip the fetch if the query is emp-  
ty. The response from the Geocoding API is mapped to include a label  
for each city, combining the city name and country. This labeling is cru-  
cial for the USelectMenu component to display the options correctly.  
185 The \:searchable prop on USelectMenu takes our cities-  
Lookup function. This setup creates a dynamic, asynchronous search  
feature where the drop-down menu options update in real time based on  
the user’s input.  
The CityData type is recognized directly without importing it, thanks  
to our global declaration approach.  
Now that we have our CitiesLookup component ready, let’s integrate it  
into the main application view. Here’s how we can incorporate it into ap-  
p.vue\:  
\<template\>  
\<div class="bg-slate-100 min-h-screen"\>  
\<u-container\>  
\<u-card\>  
\<h1 class="text-3xl font-bold text-center  
text-gray-700 mb-6"\>  
Weather Sky  
\</h1\>  
\<p class="text-center text-gray-500 mb-4"  
Search for current weather data by city  
\</p\>  
\<cities-lookup /\>  
\</u-card\>  
\</u-container\>  
186 \</div\>  
\</template\>  
With the CitiesLookup component in place, users can now search for a  
city such as London. The following screenshot illustrates performing such  
a search\:  
187 Figure 4.5\: CityLookup component  
Next, we will focus on displaying the weather data for the selected city.  
This will involve fetching the weather data from the OpenWeatherMap API  
and presenting it in a user-friendly format on our dashboard.  
To keep our application reactive, we need a mechanism to detect when a  
user selects a different city. This can be achieved by adding an event listen-  
er. @update\:modelValue emits a change event whenever the ac-  
tiveCity value is updated. In CitiesLookup, update the template\:  
\<USelectMenu  
v-model="activeCity"  
\:searchable="citiesLookup"  
placeholder="Search for a city..."  
@update\:modelValue="emit\('change', \$event\)"  
/\>  
This emit will dispatch the newly selected city, contained within the  
\$event parameter, to the parent component. In the \<script\> section,  
we declare the event emitter like so\:  
const emit = defineEmits\(\['change'\]\)  
188 In app.vue, we’re set to catch the city selection updates. We listen for the  
change event emitted by our CitiesLookup component\:  
\<template\>  
\<div class="bg-slate-100 dark\:bg-slate-800 min-  
\<div class="container py-6"\>  
\<u-card\>  
\<h1 class="text-3xl font-bold text-center  
mb-6"\>Weather Sky\</h1\>  
\<p class="text-center text-gray-500 mb-4"  
Search for current weather data by city  
\</p\>  
\</u-card\>  
\</div\>  
\</div\>  
\</template\>  
\<cities-lookup @change="onCityChanged" /\>  
Within the \<script\> section, we define the onCityChanged function,  
which will handle the event\:  
\<script setup lang="ts"\>  
const onCityChanged = async \(newCity \: CityData\)  
console.log\(newCity\); // This will log the sele  
data to the console.  
189 \}  
\</script\>  
Selecting London from the search results now logs the city details to the  
console, as shown in the following screenshot\:  
190 Figure 4.6\: Listening to CitiesLookup change  
With this in place, we’re prepared to fetch and display the weather data us-  
ing OpenWeatherMap’s One Call API for the chosen city.  
# Fetching the weather data  
With the city selected, the next step is to retrieve the weather details. Using  
the latitude and longitude from the selected city’s data, we will call the One  
Call API from OpenWeatherMap. For more information, visit the One Call  
API documentation link\: https\://openweathermap.org/api/one-call-3.  
Here is app.vue after implementing the onCityChanged function\:  
\<script setup lang="ts"\>  
const weatherData = ref\(\)  
const loading = ref\(false\)  
const onCityChanged = async \(activeCity\: CityData  
const config = useRuntimeConfig\(\)  
const apiKey = config.public.weatherApiKey  
loading.value = true  
try \{  
weatherData.value = await \$fetch\(  
\`https\://api.openweathermap.org/data/2.5/on  
\$\{activeCity?.lat\}&lon=\$\{activeCity?.lon\}&a  
\$\{apiKey\}&units=metric\`  
191 \)  
console.log\(weatherData.value\);  
\} catch \(error\) \{  
console.error\('Error fetching weather data\:',  
\}  
loading.value = false  
\}  
\</script\>  
Let’s break the code down\:  
weatherData is a reactive ref that will hold the fetched weather  
information  
loading is a flag indicating whether the data fetching is in progress  
onCityChanged is an async function triggered when a new city is  
selected  
The API request is made with the selected city’s latitude and longitude  
On success, weatherData is populated with the weather response; if  
there’s an error, it’s logged to the console  
We print the result to the console to inspect it  
Now, in the application, by searching for London and selecting the first re-  
sult, we observe the following output in the console\:  
192 193 Figure 4.7\: One Call API response  
The response will contain three types of weather data\:  
Current weather\: Immediate weather conditions  
Hourly forecast\: Weather predictions broken down by hour  
Daily forecast\: Comprehensive weather outlook for the next 7 days  
You can find the full details about the response in the API documentation.  
After examining the One Call API response from OpenWeatherMap, I have  
crafted specific types to represent the structure of the weather data –  
WeatherDataResponse, HourlyWeather, DailyWeather, and  
Weather – and added them to the types/index.ts file. They can be  
found in the project repository.  
Each type reflects the various aspects of weather data, such as current con-  
ditions, hourly forecasts, and daily predictions.  
This data, while accessible in the parent and child components, hints at in-  
creasing complexity as our application grows. To streamline state manage-  
ment and data flow, we turn to Pinia. This state management library offers a  
centralized store for our application’s reactive state, allowing for more orga-  
nized and maintainable data handling. In the following section, we’ll delve  
into how Pinia can enhance our application’s architecture, then we’ll create  
components to display the weather data.  
194 Integrating with the Pinia store to  
# monitor city and weather data  
As we’ve seen, managing data across components can get complex. To sim-  
plify this, we introduce Pinia\: Vue’s state management solution that allows  
for a centralized and reactive state. For a deep dive into Pinia and its fea-  
tures, visit the official Pinia documentation\: https\://pinia.vuejs.org/.  
Now, let’s apply our knowledge and create our first store with Pinia to man-  
age city and weather data efficiently. This practice will improve data han-  
dling in our application, making it more efficient and maintainable.  
# Installing Pinia and creating the first store  
First, install Pinia by running the following command\:  
pnpm i @pinia/nuxt  
Then, update nuxt.config.ts and Include Pinia in the modules array  
to ensure that it’s loaded into your Nuxt application\:  
// https\://nuxt.com/docs/api/configuration/nuxt-c  
195 export default defineNuxtConfig\(\{  
// ...other config  
modules\: \['@nuxt/ui', '@nuxtjs/google-fonts',  
'@pinia/nuxt'\],  
\}\)  
Now, create a new directory in the root folder of the project, call it  
stores, and add a weather.ts file in which we’ll define the store.  
Within the file, add the following code\:  
import \{ defineStore \} from 'pinia'  
export const useWeatherStore = defineStore\('weath  
return \{ \}  
\}\)  
Pinia offers two ways to define a store\:  
Options stores\: An object-based declaration, providing a familiar API  
for those used to Vue’s Options API  
Setup stores\: Utilizes Vue’s Composition API, allowing for a more com-  
posable and reactive approach  
For our weather application, we’ve chosen the setup store method, leverag-  
ing the Composition API’s full potential for a more flexible state manage-  
ment experience.  
196 Integrating Reactive States and Functions  
# in Pinia Store  
In our weather.ts store, we first establish reactive references – ac-  
tiveCity and weatherData – akin to how we would in the  
Composition API. These references will hold the currently selected city and  
weather information, respectively\:  
import \{ defineStore \} from 'pinia'  
export const useWeatherStore = defineStore\('weath  
const activeCity = ref\<CityData\>\(\)  
const weatherData = ref\<WeatherDataResponse\>\(\)  
return \{ \}  
\}\)  
Next, we migrate the citiesLookup function from the  
CitiesLookup component to our store, ensuring that it retrieves the API  
key from the runtime configuration. This function fetches and formats city  
data for SelectMenu\:  
const config = useRuntimeConfig\(\)  
const apiKey = config.public.weatherApiKey  
const citiesLookup = async \(query\: string\)\:  
Promise\<CityData\[\]\> =\> \{  
197 if \(!query\) return \[\]  
const response\: Array\<CityData\> = await  
\$fetch\(\`http\://api.openweathermap.org/geo/1.0  
\$\{query\}&limit=5&appid=\$\{apiKey\}\`\)  
return response.map\(city =\> \(\{  
...city,  
label\: \`\$\{city.name\}, \$\{city.country\}\`  
\}\)\)  
\}  
Similarly, we introduce getWeatherData, a function to fetch weather  
details based on the selected city \(as we did in the app.vue file\)\:  
const getWeatherData = async \(\) =\> \{  
try \{  
weatherData.value = await \$fetch\(  
\`https\://api.openweathermap.org/data/  
onecall?lat=\$\{activeCity.value?.lat\}&  
\$\{activeCity.value?.lon\}&appid=\$\{apiK  
metric\`  
\)  
\} catch \(error\) \{  
console.error\('Error fetching weather dat  
error\)  
\}  
\}  
198 In the final step, we make sure to return all these references and functions  
from the store, making them accessible throughout the application\:  
return \{ activeCity, weatherData, citiesLookup,  
getWeatherData \}  
Here’s the complete setup of our weather.ts store\:  
import \{ defineStore \} from 'pinia'  
export const useWeatherStore = defineStore\('weath  
const activeCity = ref\<CityData\>\(\)  
const weatherData = ref\<WeatherDataResponse\>\(\)  
const config = useRuntimeConfig\(\)  
const apiKey = config.public.weatherApiKey  
const citiesLookup = async \(query\: string\)\:  
Promise\<CityData\[\]\> =\> \{  
const response\: Array\<CityData\> = await \$fetc  
\`http\://api.openweathermap.org/geo/1.0/dire  
\$\{query\}&limit=5&appid=\$\{apiKey\}\`  
\)  
return response.map\(city =\> \(\{  
...city,  
label\: \`\$\{city.name\}, \$\{city.country\}\`  
\}\)\)  
\}  
const getWeatherData = async \(\) =\> \{  
199 try \{  
weatherData.value = await \$fetch\(  
\`https\://api.openweathermap.org/data/2.5/  
onecall?lat=\$\{activeCity.value?.lat\}&lon=  
\$\{activeCity.value?.lon\}&appid=\$\{apiKey\}&  
metric\`  
\)  
\} catch \(error\) \{  
console.error\('Error fetching weather data\:  
\}  
\}  
return \{ activeCity, weatherData, citiesLookup,  
getWeatherData \}  
\}\)  
# Refactoring components for Pinia store  
# integration  
In our CitiesLookup component, thanks to @nuxt/pinia, all stores  
located in the /stores directory are automatically imported throughout  
the app. This eliminates the need for manual imports. By calling use-  
WeatherStore, we gain access to the store defined in the Pinia store  
directly\:  
\<script setup lang="ts"\>  
const weatherStore = useWeatherStore\(\)  
200 // weatherStore now contains the all refs and fun  
\</script\>  
We then replace the local citiesLookup function with the one from the  
store\:  
\<template\>  
\<USelectMenu  
v-model="activeCity"  
\:searchable="weatherStore.citiesLookup"  
placeholder="Search for a city..."  
@update\:modelValue="emit\('change', \$event\)"  
/\>  
\</template\>  
When integrating our components with the Pinia store, a key consideration  
is maintaining reactivity when using store properties. Directly destructuring  
properties from the store, as in the following code, can lead to a loss of  
reactivity\:  
const \{ activeCity \} = weatherStore  
This is where storeToRefs from Pinia becomes crucial. storeTo-  
Refs is a method that ensures reactivity is preserved when we extract  
properties from a store. By using the following code, we can destructure  
201 properties such as activeCity while maintaining their reactive nature, as  
demonstrated in the updated CitiesLookup component\:  
storeToRefs\(weatherStore\)  
NOTE  
When you use @pinia/nuxt version 0.5.1 or later, storeToRefs is  
automatically imported. There’ s no need to import it manually into your  
components.  
Here is the final version of CitiesLookup.vue\:  
\<template\>  
\<USelectMenu  
v-model="activeCity"  
\:searchable="weatherStore.citiesLookup"  
placeholder="Search for a city..."  
@update\:modelValue="emit\('change', \$event\)"  
/\>  
\</template\>  
\<script setup lang="ts"\>  
const weatherStore = useWeatherStore\(\)  
const \{ activeCity \} = storeToRefs\(weatherStore\)  
202 const emit = defineEmits\(\['change'\]\)  
\</script\>  
Refactoring app.vue to utilize our Pinia store involves updating the  
onCityChanged function. Here’s how the script now looks\:  
\<script setup lang="ts"\>  
const weatherStore = useWeatherStore\(\)  
const \{ activeCity, weatherData \} =  
storeToRefs\(weatherStore\)  
const loading = ref\(false\)  
const onCityChanged = async \(\) =\> \{  
loading.value = true  
await weatherStore.getWeatherData\(\)  
loading.value = false  
\}  
\</script\>  
In this refactored version, activeCity no longer needs to be passed as a  
parameter. Instead, we obtain a reactive reference to activeCity from  
the weather store using storeToRefs. Additionally, the weather data  
fetching is now handled directly by the getWeatherData method in the  
weather store, streamlining the component and centralizing the logic in the  
store. This approach simplifies app.vue, keeping it clean and focused on  
the UI logic.  
203 Now that we’ve refactored our components to use the Pinia store, it’s time  
to test the application and ensure that everything functions seamlessly. Once  
we confirm the smooth operation of these updates, we’ll move on to our  
next challenge.  
# Implementing weather data widget  
# components  
Having ensured that our application functions smoothly with the integrated  
Pinia store, we now turn our attention to developing the weather data dis-  
play. As part of this process, we will be using dayjs, as we did in the pre-  
vious chapter, to handle date and time formatting within our components.  
We begin by installing dayjs\:  
\$ pnpm i dayjs  
Then, let’s create EmptyPlaceholder.vue, a component that provides  
a friendly message when no weather data is available. This placeholder will  
be displayed if there’s no active city selected or while the weather data is  
loading.  
Here’s the component’s template\:  
204 \<!—components/emptyPlaceholder.vue --\>  
\<template\>  
\<div class="w-full mx-auto mt-10"\>  
\<div class="text-center p-12 border border-gr  
rounded-lg shadow-sm"\>  
\<p class="font-semibold text-xl"\>  
Weather data is not available yet. Please  
city to display the weather information.  
\</p\>  
\</div\>  
\</div\>  
\</template\>  
This component is then integrated into app.vue, specifically under the u-  
card section, ensuring that it’s only visible when there’s no weather data  
or during loading\:  
\<template\>  
\<!-- city selection card --\>  
\<empty-placeholder v-if="!weatherData && !loadi  
\</template\>  
To enhance the user experience during data loading, we’ll implement a  
loading skeleton card. This feature provides a visual cue that content is  
being loaded. Here’s the updated app.vue template\:  
205 \<template\>  
\<!-- city selection card --\>  
\<empty-placeholder v-if="!weatherData && !loadi  
\<div v-else-if="loading" class="animate-pulse w  
space-y-4"\>  
\<div class="h-96 bg-slate-300 dark\:bg-slate-9  
rounded" /\>  
\<div class="h-96 bg-slate-300 dark\:bg-slate-9  
rounded" /\>  
\</div\>  
\</template\>  
The added code creates a pulsing effect on two div elements, simulating  
the space where the weather data cards will appear once the data is loaded.  
v-if="loading" ensures that this skeleton is only visible during the  
loading phase.  
Moving forward, we’ll develop a comprehensive display of weather data in  
app.vue. This includes the following\:  
Current weather\: The current weather conditions, including tempera-  
ture, weather description, and relevant icons.  
Hourly forecast\: A scrollable view of the hourly weather forecast. Each  
card in this section will detail the weather conditions for a specific hour.  
7-day forecast\: A grid layout presenting the 7-day weather forecast.  
206 Let’s begin with the CurrentWeatherData.vue component\:  
\<template\>  
\<div class="text-center"\>  
\<h2 class="text-4xl font-bold"\>  
\{\{ weatherData?.current.temp.toFixed\(0\) \}\}°  
\</h2\>  
\<p class="text-xl"\>  
\{\{ weatherData?.current.weather\[0\].descript  
\</p\>  
\<img  
\:src="\`http\://openweathermap.org/img/wn/  
\$\{weatherData?.current.weather\[0\].icon  
alt="Weather Icon"  
class="mx-auto"  
/\>  
\</div\>  
\</template\>  
\<script setup lang="ts"\>  
const weatherStore = useWeatherStore\(\)  
const \{ weatherData \} = storeToRefs\(weatherStore\)  
\</script\>  
Here is a breakdown\:  
The template section displays the current temperature in a large, bold  
font. It also shows a description of the current weather, as well as an im-  
207 age of the weather icon, sourced from OpenWeatherMap, corresponding  
to the current weather condition.  
The script section accesses the reactive version of weatherData  
from the weather store using storeToRefs.  
Now, let’s proceed to HourlyWeatherCard.vue\:  
\<template\>  
\<div  
class="flex flex-col items-center min-w-\[125p  
max-w-\[125px\] p-4 border-dashed border-2 bg-s  
dark\:bg-slate-800 text-slate-700 dark\:text-sl  
rounded-lg"  
\>  
\<p class="font-light text-lg"\>  
\{\{ dayjs\(hour.dt \* 1000\).format\('HH\:mm'\) \}\}  
\</p\>  
\<p class="text-2xl font-black"\>  
\{\{ hour.temp.toFixed\(0\) \}\}°C\</p\>  
\<img  
\:src="\`http\://openweathermap.org/img/wn/  
\$\{hour.weather\[0\].icon\}@2x.png\`"  
alt="Weather Icon"  
class="w-12 h-12"  
/\>  
\<p class="text-sm mt-1"\>  
208 \{\{ hour.weather\[0\].description \}\}  
\</p\>  
\</div\>  
\</template\>  
\<script setup lang="ts"\>  
import dayjs from 'dayjs'  
defineProps\<\{ hour\: HourlyWeather \}\>\(\)  
\</script\>  
This component is structured as follows\:  
It displays hourly forecasts in a flex container  
It uses dayjs to convert and format the Unix timestamp, \(hour.dt\),  
into a readable time format, \(HH\:mm\)  
It includes weather information such as an image and description for the  
specific hour  
It utilizes defineProps to ensure that the component receives the cor-  
rect HourlyWeather data type  
This means that we need to loop over the hour data array in app.vue and  
call this component for each data item.  
Next, let’s look at ForecastCard.vue\:  
\<template\>  
\<div  
209 class="flex flex-col items-center p-4 border-  
border-2 bg-slate-50 dark\:bg-slate-800 text-s  
dark\:text-slate-300 rounded-lg"  
\>  
\<p class="text-lg font-semibold"\>  
\{\{ dayjs\(day.dt \* 1000\).format\('dddd'\) \}\}  
\</p\>  
\<img  
\:src="\`http\://openweathermap.org/img/wn/  
\$\{day.weather\[0\].icon\}@2x.png\`"  
alt="Weather Icon"  
class="w-12 h-12"  
/\>  
\<p class="mt-1"\>  
\{\{ day.temp.day.toFixed\(0\) \}\}°C /  
\{\{ day.temp.night.toFixed\(0\) \}\}°C  
\</p\>  
\</div\>  
\</template\>  
\<script setup lang="ts"\>  
import dayjs from 'dayjs'  
defineProps\<\{  
day\: DailyWeather  
\}\>\(\)  
\</script\>  
Like HourlyWeatherCard, this component will be used in app.vue,  
looping over each item in the daily weather data array to dynamically  
210 present each day’s forecast.  
With all components created, let’s add them to app.vue\:  
\<template\>  
\<!-- ... card for city lookup --\>  
\<empty-placeholder v-if="!weatherData && !loa  
\<div v-if="loading" class="animate-pulse w-fu  
space-y-4"\>  
\<div class="h-96 bg-slate-300 dark\:bg-slate  
rounded" /\>  
\<div class="h-96 bg-slate-300 dark\:bg-slate  
rounded" /\>  
\</div\>  
\<u-card v-else-if="weatherData"\>  
\<h1 class="text-3xl font-bold text-center m  
\{\{ activeCity?.name \}\}, \{\{ activeCity?.co  
\</h1\>  
\<div class="space-y-6 mb-8"\>  
\<!-- Current Weather --\>  
\<current-weather-data /\>  
\<!-- Hourly Weather Slider --\>  
\<div class="flex overflow-x-auto py-4  
space-x-4"\>  
\<hourly-weather-card  
v-for="\(hour, index\) in weatherDa  
\:key="index"  
211 \:hour="hour" /\>  
\</div\>  
\</div\>  
\<!-- 7 Day Forecast --\>  
\<div class="p-4 rounded-lg"\>  
\<h3 class="font-semibold text-center mb  
7 Day Forecast  
\</h3\>  
\<div class="grid grid-cols-1 md\:grid-co  
lg\:grid-cols-3 gap-4"\>  
\<forecast-card  
v-for="\(day, index\) in weatherData.  
\:key="index"  
\:day="day"  
/\>  
\</div\>  
\</div\>  
\</u-card\>  
\</template\>  
Here is the breakdown\:  
u-card displays the selected city’s name and country  
The current-weather-data component shows the current weather  
conditions  
A horizontal slider, containing hourly-weather-card components,  
presents the hourly forecast  
212 The 7-day forecast is laid out in a grid, with each forecast-card  
component representing a day’s weather  
Now, it’s time to test the application to ensure that all components are func-  
tioning as expected. Check the following scenarios\:  
No active city\: Verify the display when no city is selected\:  
Figure 4.8\: No active city  
Loading state\: Observe the loading skeleton when data is being fetched\:  
213 Figure 4.9\: Loading state  
Data display\: Ensure that all weather data is correctly displayed when a  
city is selected\:  
214 Figure 4.10\: Data display  
With all the pieces now in place, our weather dashboard in app.vue  
stands as a testament to our combined efforts and technical prowess.  
Congratulations on reaching this significant milestone!  
215 Summary  
In this chapter, we explored the construction of a weather dashboard using  
Nuxt 3, starting with the sleek and user-friendly Nuxt UI. Our journey in-  
cluded practical data fetching with the OpenWeatherMap API and efficient  
use of \$fetch for dynamic data presentation. The chapter culminated with  
the integration of Pinia for centralized state management, making the han-  
dling of weather data across components simpler and more efficient. This  
chapter was designed to enhance your skills in building advanced, real-  
world applications with Nuxt 3.  
As we proceed to Chapter 5, we shift gears to a new challenge\: constructing  
a community forum website with Nuxt 3. This chapter will guide you  
through the intricacies of user registration, login, and post creation. We’ll  
dive into implementing robust authentication to secure the website, ensur-  
ing that features such as post creation are exclusive to registered users.  
You’ll learn practical skills such as form validation, exploring authentica-  
tion strategies, and managing access tokens with cookies. Additionally,  
we’ll delve into configuring middleware for protected routes, cementing  
your understanding of web application security and user management in  
Nuxt 3.  
# Practice questions  
216 How do you integrate Nuxt UI into a Nuxt 3 project?  
How do you customize the primary color in Nuxt UI?  
What is \$fetch?  
How do you define a global type without needing to import it each time?  
What is the purpose of the useRuntimeConfig composable in Nuxt  
3?  
What are the benefits of using Pinia for state management in Nuxt?  
Explain the use of storeToRefs in a Nuxt 3 application.  
How do you ensure reactivity when using a global state from a Pinia  
store?  
# Further reading  
Nuxt UI\: https\://ui.nuxt.com/  
Nuxt data fetching\: https\://nuxt.com/docs/getting-started/data-fetching  
Pinia\: https\://pinia.vuejs.org  
OpenWeatherMap API\: https\://openweathermap.org/api  
JavaScript asynchronous programming and promises\: https\://developer.  
-  
mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous  
Day.js documentation\: https\://day.js.org/  
217 5  
# Building a Personal Posts Space  
# and Implementing Authentication  
In this chapter of our Nuxt 3 guide, we focus on a hands-on project\: build-  
ing a personal space for users to post content, integrated with secure authen-  
tication. This chapter bridges the gap between frontend development using  
Vue and Nuxt and backend functionality provided by Supabase.  
We start by setting up Supabase, a backend service that simplifies user au-  
thentication. This foundation is crucial for our application’s security. Next,  
we integrate this service with Nuxt 3, ensuring that our frontend and back-  
end communicate smoothly.  
Our journey then moves to the user interface. We will design easy-to-use lo-  
gin and registration forms. This section is about making forms that look  
good and work well, using Nuxt UI and TailwindCSS.  
The next part is about creating a secure login system. We will cover impor-  
tant security topics, like token-based authentication, to keep user data safe.  
The chapter concludes by teaching how to let users create and manage their  
own posts. This will give users a personal area in the application to share  
218 their thoughts.  
This chapter is a practical guide to combining frontend design with backend  
technology, making a secure, user-friendly web application. Let’s dive in!  
In this chapter we’re going to cover the following main topics\:  
Setting Up Initial Supabase Project For User Authentication  
Integrating Nuxt 3 with Supabase  
Designing Authentication UI and Validating Inputs  
Setting Up User Authentication with Supabase  
Creating and Managing Personal User Posts  
# Technical requirements  
The code files for this chapter can be found at https\://github.com/PacktPub-  
lishing/Nuxt-3-Projects/tree/main/chapter05  
The CiA video for this chapter can be found on https\://packt.link/AYK8X  
# Essential Background\: What is  
# Supabase?  
219 Before we jump into the hands-on development of our project, it’s impor-  
tant to familiarize ourselves with Supabase and its capabilities, setting a  
strong groundwork for what we’re about to build.  
Supabase Overview\: Supabase is an open-source Firebase alternative, of-  
fering a suite of tools to handle backend needs like databases, authentica-  
tion, and real-time subscriptions. It uses PostgreSQL by default.  
Database Management\: At its core, Supabase offers database services,  
allowing you to create, read, update, and delete data efficiently. We’ll use  
this feature to work on create user posts, update them, and delete them.  
User Authentication\: It simplifies the process of managing users, han-  
dling everything from registration to login, and securing user data.  
Supabase supports various authentication methods, including email/pass-  
word and third-party logins like Google or GitHub.  
Important Links\:  
Before we start, here are some essential resources from Supabase that we’ll  
be using extensively. These links provide direct access to various tools  
within the Supabase platform. Each link corresponds to a specific page of  
the Supabase dashboard we will interact with\:  
SQL Editor\: https\://supabase.com/dashboard/project/\_/sql  
Table Editor\: https\://supabase.com/dashboard/project/\_/editor  
API Settings\: https\://supabase.com/dashboard/project/\_/settings/api  
220 Auth Providors\:  
https\://supabase.com/dashboard/project/\_/auth/providers  
These links are your direct line to the tools we’ll employ throughout this  
chapter. Now let’s proceed to the foundational step\: setting up a new  
Supabase project.  
# Setting Up Initial Supabase Project  
# For User Authentication  
To start building our Nuxt 3 application, the first thing we need to do is to  
initialize a new Supabase project to set up our database and API.  
After creating a new Supabase Account, Navigate to\:  
https\://supabase.com/dashboard/projects and hit new project button. You’ll  
be asked to enter some basic details about your project. Let’s give the  
project a name My Space. After entering your project name and a secure  
database password, Supabase will start setting up your new database.  
# Setting Up the Database Schema  
Let’s prepare the database schema. In the Supabase Dashboard, head to the  
SQL Editor tab and select Quickstart. There, use the “User Management  
Starter” for an efficient setup of your database schema. This tool sets up a  
221 profiles table connected to user authentication and includes a trigger to  
automatically generate profile entries when new users sign up.  
222 Figure 5.1\: Supabase User Management Starter  
223 You’ll find a pre-written query. Click Run to execute it and establish our  
initial table. Alternatively, you could write a custom query to build the data-  
base, but since our focus is on integrating with Nuxt, we’ll skip this step.  
Now, move to the Table Editor tab. Here, you’ll see a table named pro-  
file created through the “User Management Starter.” Let’s proceed to  
create a posts table and this time we’ll create it using Supabase UI. click  
the “create new Table” button, name it posts, and configure the Columns  
as follows\:  
Figure 5.2\: posts table columns schema  
Here is the overview\:  
The system automatically adds id, created\_at columns.  
224 We’ve added a required title column.  
There’s also a content column, which is optional. You can make it  
nullable by toggling the option in the configuration menu.  
author\_id serves as a foreign key linking to the user profile. Clicking  
on the link displays its current settings, including the reference table and  
column.  
Figure 5.3\: author\_id foreign key  
With your database tables ready, the next step is to get the API keys. These  
keys let your application talk to the Supabase API. Find the API Settings in  
your Supabase Dashboard, then copy project url, and anon key from  
this page.  
225 Finally, Supabase enables email confirmation by default, so that the users  
will need to confirm their email address before signing in for the first time.  
For Testing purposes, we’ll disable this feature by navigating to Auth  
Providors page, locate the email provider setting, then toggle the “Confirm  
Email” switch to off.  
Figure 5.4\: disabling confirm email option  
With our Supabase setup complete, we now turn to integrating it with Nuxt  
3\. In the following section, we’ll create a new Nuxt application and inte-  
grate it with Supabse using a module called “@nuxtjs/supabase”  
226 Integrating Nuxt 3 with Supabase  
With our Supabase setup now in place, it’s time to turn our attention to how  
we can seamlessly integrate this backend with our Nuxt 3 application  
# Creating a New Nuxt 3 Project with  
# Supabase Integration  
Start by creating a new Nuxt 3 project. Open your terminal and run\:  
pnpm dlx nuxi init my-space  
cd my-space  
pnpm i -D @nuxtjs/supabase  
Next, create a .env file in your project root and add your Supabase URL  
and anon key\:  
SUPABASE\_URL="YOUR\_SUPABASE\_URL"  
SUPABASE\_KEY="YOUR\_SUPABASE\_ANON\_KEY"  
Replace "YOUR\_SUPABASE\_URL" and "YOUR\_SU-  
PABASE\_ANON\_KEY" with the actual values you copied from your  
227 Supabase project.  
# Overriding Authentication Routes  
In the default configuration, Supabase uses the /login route for user login  
and automatically redirects unauthenticated \(or anonymous\) users to this  
route. However, to tailor our application’s navigation flow and URL struc-  
ture, we can configure these authentication routes in Nuxt 3.  
To customize the behavior of our authentication routes, we need to make  
adjustments in the nuxt.config.ts file. Specifically, by adding su-  
pabase object with configuration as follows\:  
supabase\: \{  
redirectOptions\: \{  
login\: 'auth/login',  
callback\: '',  
exclude\: \['/auth/\*'\]  
\}  
\}  
Let’s discuss every change\:  
We’ve changed the default login route from /login to /auth/login  
callback option is left empty. This is because callback handling is of-  
ten associated with third-party providers, which we’re not covering at  
228 this stage.  
exclude option is set to \['/auth/\*'\]. This pattern means all routes  
under the /auth/ path, like /auth/login and /auth/signup, are  
accessible to anonymous users. This setup is advantageous, especially  
when planning to expand our authentication pages in the future \(e.g.,  
adding password reset or recovery pages\) without needing to update the  
exclude option each time.  
By configuring these settings, we ensure that our application’s authentica-  
tion flow is both user-friendly and scalable, ready to accommodate addition-  
al features as our project grows.  
With our authentication routes now customized, let’s move on to designing  
the user interface for authentication and implementing input validation.  
# Authentication UI and Validating  
# Inputs  
To enhance the user experience of our authentication process, we’ll first in-  
stall and configure some essential modules for our Nuxt 3 project.  
# Installing Required Modules  
229 Open your terminal and install @nuxtjs/google-fonts as usual, and  
@nuxt/ui as we learned in the previous chapter\:  
pnpm i @nuxtjs/google-fonts -D  
pnpm i @nuxt/ui  
These commands will add Google Fonts and Nuxt UI to our project. Next,  
we need to update our nuxt.config.ts to include these modules and  
set some additional configurations\:  
modules\: \['@nuxtjs/supabase', '@nuxtjs/google-fon  
'@nuxt/ui'\],  
googleFonts\: \{  
families\: \{  
Poppins\: \[400, 500, 700\]  
\}  
\},  
app\: \{  
head\: \{  
title\: 'My Space'  
\}  
\}  
Here, the app configuration sets the title of our application to “My Space.”  
230 To further tailor our UI, create an app.config.ts file to update Nuxt  
UI’s primary color and set default properties for Nuxt UI components\:  
export default defineAppConfig\(\{  
ui\: \{  
primary\: 'teal',  
container\: \{  
padding\: 'py-6'  
\}  
\}  
\}\);  
As with previous chapters, don’t forget to include the tailwind.con-  
fig.ts in your project. This file is crucial for customizing TailwindCSS  
to fit the styling needs of our application.  
Our next task is to create effective layouts for the login and signup pages.  
# Setting Up Auth Pages  
Create empty layout default.vue in the /layouts directory. This lay-  
out will be utilized later in the project.  
\<template\>  
231 \<slot\>\</slot\>  
\</template\>  
In the same directory, create auth.vue layout. This layout will be specifi-  
cally used for authentication-related pages like login and signup\:  
\<template\>  
\<div class="grid md\:grid-cols-2 min-h-screen  
bg-gray-100"\>  
\<!-- Image Column --\>  
\<div class="hidden md\:flex md\:col-span-1 item  
justify-center bg-white"\>  
\<img src="\~/assets/images/auth.svg" class="  
/\>  
\</div\>  
\<!-- Form Column --\>  
\<div class="col-span-1 flex justify-center  
items-center"\>  
\<slot\>\</slot\>  
\</div\>  
\</div\>  
\</template\>  
This layout divides the screen into two columns on medium and larger  
screens, with one column for an image \(provided in the repository\) and the  
other for the form.  
232 Next, Override the app.vue to specify that we’ll be using layouts and  
pages\:  
\<template\>  
\<NuxtLayout\>  
\<NuxtPage /\>  
\</NuxtLayout\>  
\</template\>  
Then, create a /pages/auth/ directory and add a login.vue page in-  
side it.  
\<u-card class="md\:min-w-96"\>  
\<!-- Form Content --\>  
\<div class="text-2xl text-center font-bold mb-1  
Login  
\</div\>  
\<div class="text-slate-500 text-sm text-center  
Don't have an account?  
\<UButton variant="link" to="/auth/signup"\>  
Create one!\</UButton\>  
\</div\>  
\<!-- the form --\>  
\</u-card\>  
233 The page Begin with a simple card layout that includes a title and a naviga-  
tion link to the signup page. Then we’ll use Nuxt UI components like  
UForm, UFormGroup, and UInput for the form elements, which are pre-  
styled and help in input validation\:  
\<!-- the form --\>  
\<UForm\>  
\<UFormGroup label="Email" name="email" class="m  
\<UInput v-model="user.email" icon="i-heroicon  
symbol" /\>  
\</UFormGroup\>  
\<UFormGroup label="Password" name="password"  
class="mb-4"\>  
\<UInput  
v-model="user.password"  
type="password"  
icon="i-heroicons-lock-closed"  
/\>  
\</UFormGroup\>  
\<!-- Submit Button --\>  
\<UButton type="submit" block class="mt-8"\>  
Login  
\</UButton\>  
\</UForm\>  
The icon="i-heroicons-at-symbol" in Nuxt UI represents an  
icon from the Heroicons collection. Following the pattern i-\{collec-  
234 tion\_name\}-\{icon\_name\}, it is easy to connect any icon collection  
from https\://icones.js.org/ into Nuxt UI.  
Finally, define the layout and set up the reactive state for user data\:  
\<script setup\>  
definePageMeta\(\{ layout\: 'auth' \}\)  
const user = ref\(\{  
email\: '',  
password\: ''  
\}\)  
\</script\>  
You should now see a layout for the login page like this\:  
235 236 0Figure 5.5\: Login Page Layout  
In a similar way, create signup.vue page that contains an extra field  
called for password confirmation\:  
\<UFormGroup  
label="Password Confirmation"  
name="passwordConfirm"  
class="mb-4"  
\>  
\<UInput  
v-model="user.passwordConfirm"  
type="password"  
icon="i-heroicons-lock-closed"  
/\>  
\</UFormGroup\>  
And don’t forget to add it to user ref\:  
const user = ref\(\{  
email\: '',  
password\: '',  
passwordConfirm\: ''  
\}\)  
237 Now that we have our authentication UI in place, let’s enhance it with input  
validation using Joi  
# Using Joi for Input Validation  
The UForm component in Nuxt UI offers a powerful feature through its  
schema prop. This prop allows you to integrate a validation schema from  
libraries like Joi or Yup, providing a way to enforce specific validation  
rules on your form’s state. For our example, we’ll utilize Joi to create our  
validation schemas. You can read more about Joi from the official website\:  
https\://joi.dev/api/  
Begin by adding Joi to your project\:  
pnpm i joi  
Then in the login.vue script, Define a Joi validation schema for the lo-  
gin form\:  
const schema = Joi.object\(\{  
email\: Joi.string\(\).email\(\{ tlds\: false \}\).requ  
password\: Joi.string\(\).min\(6\).required\(\)  
\}\);  
238 This schema ensures that the email is a valid email and filled out. Also, we  
ensure that the password is at least 6 characters long. We used \{ tlds\:  
false \} to disable the built-it TLD Validation from Joi. In order to  
Implement the schema in the form component. We have to adjust it as  
follows\:  
\<UForm \:schema="schema" \:state="user"\>  
\<!-- Form content --\>  
\</UForm\>  
The schema prop validates the user state according to the defined Joi  
schema. Try testing the validation by leaving the email input field empty  
and moving focus away. An error message should appear beneath the input  
field\:  
239 Figure 5.6\: input validation with Joi and Nuxt UI  
The signup page will have a similar validation for email and password.  
Additionally, we’ll add a complex validation for password confirmation\:  
const schema = Joi.object\(\{  
email\: Joi.string\(\).required\(\),  
password\: Joi.string\(\).min\(6\).required\(\).label\(  
'Password'\),  
passwordConfirm\: Joi.valid\(Joi.ref\('password'\)\)  
.label\('Confirm Password'\)  
.messages\(\{  
'any.only'\: \`passwords don't match\`  
240 \}\)  
\}\);  
Here, the passwordConfirm field uses Joi.ref\('password'\) to  
ensure it matches the password field. The .messages\(\{  
'any.only'\: \\passwords don't match\` \}\)\` part customizes  
the error message, making it clear and user-friendly. When the passwords  
don’t match.  
With our input validation set up, the next step is to integrate Supabase’s lo-  
gin and signup functions.  
# Setting Up User Authentication  
# with Supabase  
Now, let’s focus on integrating Supabase’s authentication capabilities, using  
their straightforward login and signup functions to manage user access in  
our application.  
The useSupabaseClient composable in Nuxt 3 is a gateway to the  
Supabase API, facilitating seamless communication between your Vue ap-  
plication and the Supabase services. Powered by supabase-js, it pro-  
vides access to the Supabase client, which is initialized using the  
SUPABASE\_KEY from your .env file. This client connects to the database.  
241 Creating the Signup Function  
Inside signup.vue script, get a Supabase instance using\:  
const supabase = useSupabaseClient\(\)  
This instance will be used to make requests to Supabase, particularly for  
user authentication functions like signup, and signInWithPassword.  
Next create an onSubmit function to handle the signup process\:  
const loading = ref\(false\)  
const onSubmit = async \(\) =\> \{  
loading.value = true  
try \{  
const \{ error \} = await supabase.auth.signUp\(  
email\: user.value.email,  
password\: user.value.password  
\}\)  
if \(error\) throw error  
\} catch \(error\) \{  
const message = error.message  
console.log\(message\);  
\}  
242 loading.value = false  
\}  
Here is the code breakdown\:  
Sets loading to true, indicating the start of an asynchronous  
operation.  
Calls the signUp method from the Supabase authentication API. This is  
where we interact with Supabase to register a new user, extracting email  
and password from user ref.  
Checks if there’s an error from the Supabase signup process, throws it to  
be caught in the catch block.  
Logs any error that occurs during the signup process \(for testing\).  
Setting loading back to false  
This function effectively manages the signup process, interacting with  
Supabase’s authentication API to register users. It handles the entire flow  
from sending the request to processing responses and errors.  
To test error handling, temporarily remove the schema prop from UForm  
and try submitting an empty form. an error response should be printed in  
the devtools console\:  
243 244 Figure 5.7\: Supabase Signup Error  
Continuing from where we left off in the signup process, let’s enhance our  
error handling by introducing Nuxt UI Notifications. These notifications  
provide a more user-friendly way to display messages, such as errors, in a  
toast notification format.  
Include the UNotifications component in your app.vue. This is a  
global setup, allowing you to display notifications anywhere in your app\:  
\<template\>  
\<NuxtLayout\>  
\<NuxtPage /\>  
\<UNotifications /\>  
\</NuxtLayout\>  
\</template\>  
The useToast composable from Nuxt UI allows you to easily add toast  
notifications to your application. We can get a toaster instance by adding the  
following line to signup.vue script\:  
const toast = useToast\(\)  
245 Now let’s modify the catch block of your signup function to use this com-  
posable for displaying error messages\:  
catch \(error\) \{  
toast.add\(\{ title\: error.message, color\: 'red'  
\}  
Here, toast.add is used to display a toast notification. We set the color  
to ‘red’, indicating that it’s an error message. Try submitting an empty form  
to trigger a validation error. You should see a red toast notification display-  
ing the error message\:  
246 247 Figure 5.8\: Nuxt UNotification component  
This visual feedback is immediate and clear, making it easier for users to  
understand and react to errors.  
Continuing with our signup functionality, let’s add a success toast notif-  
ication and set up navigation to the homepage upon successful signup. In  
the onSubmit function, update the try block to sign in the user using  
Supabase after successful registration\:  
const onSubmit = async \(\) =\> \{  
loading.value = true  
try \{  
const \{ error \} = await supabase.auth.signUp\(  
email\: user.value.email,  
password\: user.value.password  
\}\)  
if \(error\) throw error  
toast.add\(\{ title\: 'Welcome!' \}\)  
navigateTo\('/'\)  
\} catch \(error\) \{  
toast.add\(\{ title\: error.message, color\: 'red  
\}  
loading.value = false  
\}  
248 Don’t forget to revert the schema prop in the UForm to enable validation  
again.  
It’s time for testing! First, create a simple index.vue page that contains  
the following\:  
\<template\>  
\<div class="bg-gray-100 min-h-screen"\>  
\<UContainer\>  
\<h1 class="text-3xl font-semibold text-cent  
text-gray-800 mb-6"\>  
My Posts  
\</h1\>  
\</UContainer\>  
\</div\>  
\</template\>  
Upon filling correct information and achieving a successful signup, a wel-  
come toast should be shown, and you should be redirected to the homepage\:  
249 Figure 5.9\: index page  
To ensure that the authentication flow is working, open http\://local-  
host\:3000/ in a private window. You should be automatically redirected  
250 to'auth/login/ due to Nuxt Supabase’s built-in middleware, which  
checks user authentication status.  
Now that our signup functionality is in place, let’s focus on implementing  
the login process. The method for logging in is similar to the signup, but  
we’ll be using Supabase’s signInWithPassword method. In your lo-  
gin.vue page, define the onSubmit function specifically for the login  
process\:  
const onSubmit = async \(\) =\> \{  
loading.value = true;  
try \{  
const \{ error \} =  
await supabase.auth.signInWithPassword\(\{  
email\: user.value.email,  
password\: user.value.password  
\}\);  
if \(error\) throw error;  
toast.add\(\{ title\: 'Logged in successfully!'  
navigateTo\('/'\);  
\} catch \(error\) \{  
toast.add\(\{ title\: error.message, color\: 'red  
\} finally \{  
loading.value = false;  
\}  
\};  
251 This function attempts to log in the user using their email and password.  
Upon successful login, the user is greeted with a success toast and redirect-  
ed to the homepage.  
Link the onSubmit function to the UForm in your login page\:  
\<UForm \:schema="schema" \:state="user" @submit="on  
\<!-- Form fields --\>  
\</UForm\>  
By implementing this login functionality, we’ve ensured that users can ac-  
cess their accounts securely and conveniently. The process is straightfor-  
ward, making the login experience smooth and efficient. Next, we’ll delve  
into how users can create, view, and manage their own posts within our ap-  
plication, making it a truly interactive and personal space.  
# Creating and Managing Personal  
# User Posts  
In this section, we turn our attention to enabling users to create and manage  
their posts. To ensure this works smoothly, we need to set up specific rules  
in our database table\: posts using Supabase’s Row-Level Security \(RLS\)  
policies.  
252 RLS policies in Supabase are like rules for your database. They help control  
who can see or change data in the database. For our app, we’ll use these  
policies to make sure users can only access their own posts.  
# Adding RLS Policy for the ‘Posts’ Table  
Open Supabase policies page\: . This is where you can control who accesses  
what in your database. Choose the posts table and start making a new  
policy\:  
Name it something clear like “Personal Posts Management”.  
Choose “ALL” for operations so users can read, add, update, and delete  
their posts.  
For ‘Target Roles’, pick “authenticated” so only logged-in users can use  
this policy.  
Add the \(auth.uid\(\) = author\_id\) expression to both using  
and with check expression. This ensures users can only view and inter-  
act with posts they’ve created, maintaining strict user-specific access for  
both viewing and modifying content.  
The Policy details should be like this\:  
253 Figure 5.10\: posts table RLS policy  
254 With our RLS policies in place for the posts table, let’s now delve into  
how we can use Supabase’s API to manage these posts within our  
application.  
# Using Supabase API for Post Management  
useSupabaseClient in Nuxt 3 opens up a straightforward path to in-  
teract with our database. It’s our go-to for executing operations on the  
posts table.  
Your project’s specific API documentation on Supabase gives detailed in-  
sights into possible queries. For a hands-on look, visit\:  
With a simple command like\:  
supabase.from\('posts'\).select\(\)  
we can fetch an array of user-specific posts, thanks to the RLS policies en-  
suring each user sees only their content. To create or update a post, we can  
use upsert\:  
supabase.from\('posts'\).upsert\(/\* your post data \*  
This function elegantly handles both new post insertions and updates to ex-  
isting posts, checking against unique identifiers to decide the appropriate  
255 action.  
Finally, for deleting posts, the combination of the delete method and the  
eq filter ensures we precisely target and remove the intended post\:  
supabase.from\('posts'\).delete\(\).eq\('id', postId\)  
This targeted approach reinforces the control users have over their posts,  
aligning with the security measures we’ve implemented.  
let’s move on to developing a user interface for creating and updating post  
information.  
# Building the Post Information Page  
Begin by setting up a dynamic route in your Nuxt application. Create a file  
named \[id\].vue inside the /pages/posts/ directory. This dynamic  
route, represented by \[id\], will allow the page to handle different scenar-  
ios based on the URL\:  
When the \[id\] in the route is set to create, we know the user is look-  
ing to create a new post.  
If \[id\] is an actual post ID, it indicates the user intends to view or edit  
an existing post. In this case, we’ll use this ID to fetch the relevant post  
data.  
256 This approach gives us a flexible and efficient way to handle both new post  
creation and the editing of existing posts, all within a single, dynamic  
interface.  
Inside the template\: create a simple layout\:  
\<div class="min-h-screen bg-gray-100"\>  
\<UContainer\>  
\<h2 class="mt-6 text-center text-3xl font-ext  
text-gray-900 mb-8"\>  
Post Information  
\</h2\>  
\<UCard class="max-w-md mx-auto"\>  
\<!-- the form --\>  
\</UCard\>  
\</UContainer\>  
\</div\>  
And the form will be as follows\:  
\<UForm  
class="space-y-6"  
\:schema="schema"  
\:state="post"  
@submit="onSubmit"  
\>  
257 \<UFormGroup label="Title" name="title"\>  
\<UInput type="text" v-model="post.title" /\>  
\</UFormGroup\>  
\<UFormGroup label="Content" name="content"\>  
\<UTextarea type="text" v-model="post.content"  
/\>  
\</UFormGroup\>  
\<UButton type="submit" block primary \:loading="  
Save Changes  
\</UButton\>  
\</UForm\>  
Under the Form, add a small error button for post deletion\:  
\<div class="flex justify-center mt-12"\>  
\<UButton  
color="red"  
variant="outline"  
\:loading="deleteLoading"  
@click="deletePost"  
\>  
Delete  
\</UButton\>  
\</div\>  
In the script part of our page, we set up the state and validation schema for  
our post\:  
258 \<script setup\>  
import Joi from 'joi'  
const user = useSupabaseUser\(\)  
const post = ref\(\{  
title\: '',  
content\: undefined,  
author\_id\: user.value.id  
\}\)  
const schema = Joi.object\(\{  
author\_id\: Joi.string\(\).required\(\),  
title\: Joi.string\(\).required\(\),  
content\: Joi.string\(\).allow\('', null\)  
\}\).unknown\(true\) // to allow additional fields li  
\</script\>  
Here’s the breakdown\:  
useSupabaseUser\(\) provides the information of the logged-in user.  
post holds the data for the title, content, and author\_id.  
The schema defines the necessary fields and their validation rules.  
The .unknown\(true\) part lets the form handle additional fields like  
id and created\_at without validation errors.  
As we continue in building our script block by block, let’s add\:  
259 const route = useRoute\(\)  
const postId = computed\(\(\) =\> route.params.id\)  
const editMode = computed\(\(\) =\> route.params.id !  
const toast = useToast\(\)  
We captured the current route details, essential for determining the post ID  
and the mode \(create or edit\). Then we extracted the post ID from the route  
parameters. Finally, we used editMode to determine if the user is in edit  
mode \(editing an existing post\) or create mode \(creating a new post\).  
Now let’s handle Data Fetching with useLazyAsyncData. Nuxt pro-  
vides a great composable to perform data-fetching in a browser or server  
environment called, useAsyncData. It fetches data before rendering the  
page, ideal for server-side rendering where data must be present initially.  
useLazyAsyncData, in contrast, starts page rendering immediately and  
loads data in the background, enhancing user experience by reducing wait  
times, especially useful for non-critical data like loading posts in our  
application.  
So to fetch the data we'll add\:  
const \{ pending \} = useLazyAsyncData\(async \(\) =\>  
if \(!editMode.value\) return;  
const \{ data \} = await supabase  
.from\('posts'\)  
260 .select\(\)  
.eq\('id', postId.value\)  
.single\(\);  
if \(data\) post.value = data;  
\}\);  
In this case, if the user is in edit mode, the script fetches the specific post  
data from Supabase and populates the form for editing. It checks the post  
ID against the database and retrieves the corresponding post details.  
Otherwise, the post ref will remain empty.  
Let’s examine the onSubmit function, which handles both creating and  
updating posts\:  
const toast = useToast\(\)  
const onSubmit = async \(\) =\> \{  
pending.value = true  
try \{  
const \{ error \} =  
await supabase.from\('posts'\).upsert\(post.va  
if \(error\) throw error  
if \(!editMode.value\) toast.add\(\{ title\: 'Post  
Successfully' \}\)  
else toast.add\(\{ title\: 'Post Updated Success  
navigateTo\('/'\)  
\} catch \(error\) \{  
toast.add\(\{ title\: error.message, color\: 'red  
261 \}  
pending.value = false  
\}  
Here’s the breakdown\:  
The function performs an upsert operation, which either updates an  
existing post or creates new one based on the post’s ID. \(create if the ID  
is undefined, update otherwise\)  
Error handling is implemented to catch and display any issues that arise  
during the upsert process.  
Success feedback is provided through toast notifications, differentiating  
between post creation and updating.  
Finally, the function navigates the user back to the homepage.  
Now, let’s look at the deletePost function. Similar to onSubmit, this  
function includes error handling and user feedback via toast notifications.  
but the supabase method will be\:  
const \{ error \} = await supabase  
.from\('posts'\)  
.delete\(\)  
.eq\('id', postId.value\)  
If you navigate to\: , you should see this page\:  
262 Figure 5.11\: project information page  
Enhancing the user navigation within our application, we’ll introduce a nav-  
igation component to the default layout\:  
263 \<nav class="bg-gray-800 text-white py-4"\>  
\<div class="container flex justify-between item  
\<div class="text-xl font-bold uppercase"\>  
\<nuxt-link to="/"\>My space\</nuxt-link\>  
\</div\>  
\<div class="flex gap-x-4"\>  
\<UButton to="/posts/create"\>New Post\</UButt  
\</div\>  
\</div\>  
\</nav\>  
This navigation bar features to parts\: the left side for the brand logo or  
name linked to the homepage, and the right side with a button for creating  
new posts.  
Moving forward, Let’s build post listing page!  
# Displaying User Posts  
As we move into the final stretch of our application development, we’ll up-  
date the homepage to lists all the posts created by the use. Update the script  
section in index.vue as follows\:  
\<script setup lang="ts"\>  
const supabase = useSupabaseClient\(\)  
264 const \{ data\: posts \} = await useLazyAsyncData\(as  
let \{ data \} =  
await supabase.from\('posts'\).select\(\).returns  
return data  
\}\)  
\</script\>  
The script uses useSupabaseClient to access the Supabase API and  
fetch posts. useLazyAsyncData is utilized to load the posts asynchro-  
nously. It ensures that the page navigation happens immediately, with post  
data loading in the background.  
Update the page template\:  
\<template\>  
\<div class="bg-gray-100 min-h-screen"\>  
\<UContainer\>  
\<h1 class="text-3xl font-semibold text-cent  
text-gray-800 mb-6"\>  
My Posts  
\</h1\>  
\<post-card v-for="post in posts" \:post="pos  
\</UContainer\>  
\</div\>  
\</template\>  
265 The template contains a container holds the title “My Posts” and a loop that  
renders each post using the post-card component. So, Let’s create the  
PostCard.vue component inside components folder\:  
\<template\>  
\<UCard class="mb-4 max-w-lg mx-auto"\>  
\<nuxt-link \:to="\`/posts/\$\{post.id\}/\`"\>  
\<div class="uppercase text-primary font-sem  
\{\{ post.title \}\}  
\</div\>  
\<p class="mt-2 text-gray-500"\>  
\{\{ post.content || 'no content' \}\}  
\</p\>  
\<div class="mt-4 text-gray-400 text-xs  
font-semibold"\>  
Created at\: \{\{ dayjs\(post.created\_at\).for  
'MMMM D, YYYY'\) \}\}  
\</div\>  
\</nuxt-link\>  
\</UCard\>  
\</template\>  
\<script setup lang="ts"\>  
import dayjs from 'dayjs'  
defineProps\<\{ post\: Post \}\>\(\)  
\</script\>  
266 Each post-card component presents the post’s title, content, and cre-  
ation date. The use of dayjs to format the date adds a human-friendly  
touch to the date. A nuxt-link wraps the card, enabling easy navigation  
to the detailed view or edit page of each post.  
With our post listing and individual postcard components in place, users  
should now see all the posts they’ve created. Clicking on a post navigates to  
its detailed page, where the content can be viewed, updated, or deleted  
seamlessly.  
# Summary  
Voilà! We’ve successfully created a dynamic and user-friendly space for  
personal post management within our application. We started with estab-  
lishing a secure user authentication system. Our focus then shifted to en-  
abling users to create, edit, and delete posts, with each step validated using  
Joi for ensuring data integrity. These features, backed by Supabase’s Row-  
Level Security policies and API, guaranteed secure and user-specific  
interactions.  
In the upcoming chapter, we’ll enhance a recipe sharing site using Nuxt 3,  
with a specific focus on SEO optimization. We’ll dive into techniques such  
as metadata configuration, structured data implementation, image optimiza-  
tion, SEO-friendly URL creation, and sitemap generation. These steps aim  
to elevate the site’s search engine presence and attract more organic traffic.  
267 Practice Questions  
Explain the process of creating a new Supabase project for a Nuxt 3  
application.  
Describe the purpose of Row-Level Security \(RLS\) in Supabase and how  
it’s implemented.  
What are the benefits of useSupabaseClient composable?  
What is the difference between useAsyncData and useLazyA-  
syncData in Nuxt, and when would you use each?  
How do you validate user input in a form using Joi & NuxtUI?  
How to handle Supabase errors?  
How to sign in with password using Supabase?  
How to delete a record in a table with Supabase?  
Explain how to use the upsert method in Supabase for post  
management.  
# Further Reading  
Supabase\: https\://supabase.com/  
Nuxt UI Forms\: https\://ui.nuxt.com/forms/form  
RLS in Supabase\: https\://supabase.com/docs/guides/auth/row-level-  
security  
Joi Validation\: https\://joi.dev/  
268 Build User Management Website using Nuxt 3 and Supabase\: https\://su-  
pabase.com/docs/guides/getting-started/tutorials/with-nuxt-3  
Nuxt Supabase Module\: https\://supabase.nuxtjs.org/  
269 6  
# Enhancing a Recipe-Sharing Site  
# While Optimizing SEO Using Nuxt  
# 3  
In this chapter, we’ll enrich a recipe-sharing site with Nuxt 3, focusing on  
SEO \(Search Engine Optimization\) for better online visibility. We’ll start  
with Nuxt SEO, a powerful collection of handcrafted Nuxt modules de-  
signed to enhance a website’s appeal to both search engines and audiences.  
It simplifies complex SEO tasks, ensuring our recipe-sharing site ranks high  
in search results.  
Then, we’ll learn about metadata, such as Open Graph \(OG\) tags, and how  
to customize them for each page. We will also examine the crucial role of  
schema markup. This structured data approach helps clarify our content for  
search engines, aiding in accurate and enhanced search result presentation.  
We’ll also introduce a unique feature – creating a custom og\:image for  
each recipe using a Nuxt component, making each shared recipe visually  
distinctive.  
270 Additionally, we’ll cover dynamically generating XML site maps, which  
guide search engines efficiently through our site’s content.  
In this chapter, we’re going to cover the following main topics\:  
Defining metadata for each page  
Implementing structured data for improved search engine rankings  
Optimizing recipe images to load pages faster  
Creating a custom og\:image for the recipe page  
Generating dynamic site maps for the recipe-sharing site  
# Technical requirements  
The code files for this chapter can be found at https\://github.com/PacktPub-  
lishing/Nuxt-3-Projects/tree/main/chapter06.  
The CiA video for this chapter can be found on https\://packt.link/YQ8As  
# Essential background –  
# Understanding Search Engine  
# Optimization \(SEO\)  
As we prepare to start enhancing our recipe-sharing site with SEO using  
Nuxt 3, it’s crucial to first get acquainted with the key concepts\:  
271 SEO basics\: SEO involves techniques to improve a website’s visibility  
on search engines. It’s about making your site easily understandable to  
search engines, which helps in making it rank higher in search results.  
The OG protocol\: This protocol enhances the way web content is repre-  
sented on social media platforms. By using specific tags, you can control  
how your content appears when shared.  
Schema markup\: Schema markup is like a detailed label for your web-  
site’s content, helping search engines understand what your site is about.  
For instance, using recipe schema on a recipe-sharing site can dramati-  
cally improve its appearance in search results, displaying rich snippets  
such as ingredients and cooking time directly in the search listings.  
Site map generation\: A site map is a roadmap of your website that  
guides search engines to all your important pages. In just a couple of  
lines of code, Nuxt 3 can generate dynamic site maps.  
This background prepares you to effectively utilize Nuxt 3’s SEO capabili-  
ties on our recipe-sharing website. Armed with this knowledge, we’re ready  
to use Nuxt 3’s SEO tools effectively. Let’s proceed to the practical applica-  
tion and exploration of our repository.  
# Exploring the repository  
Let’s take a moment to familiarize ourselves with the  
chapter06/starter folder in the root folder of our repository. This  
272 folder is designed to give you a head start, containing pre-defined compo-  
nents, basic page structures, data, and TypeScript interfaces. These elements  
are crafted to provide a solid foundation for our recipe-sharing site, allow-  
ing us to focus primarily on enhancing its SEO.  
Note that we won’t delve into every detail of these resources here, as our  
primary focus is to learn about the SEO concepts and practices needed to  
optimize our recipe-sharing site effectively.  
# Defining metadata for each page  
Let’s start by setting up our new website as we’ve done in previous chap-  
ters. Add the Tailwind CSS and Google Fonts modules to the website to en-  
hance styling. Once you’ve completed these steps, run the website and take  
a moment to ensure that everything works fine.  
# Setting up the project structure  
To set up the project, we’ll be using predefined files and components from  
the repository starter folder. Clone the repository, and then copy the en-  
tire contents of the starter folder into our new project’s root directory. If  
there are any existing files in your project that match the names of those in  
the starter folder, overwrite them with the starter files. Here’s a  
breakdown of the starter content\:  
273 pages/index.vue\: This file sets up the homepage layout, including  
sections such as hero images and featured recipes  
components/RecipeCard.vue and components/RecipeIn-  
fo.vue\: These Vue components are used to display recipes and their  
details as cards on the home page  
data/recipes.ts\: Contains the data structure for the recipes, which  
will be used to populate the content on your site  
types/index.ts\: Provides TypeScript definitions for the data struc-  
tures used in the project  
pages/recipe/\[slug\].vue\: A dynamic route that creates individ-  
ual pages for each recipe, based on its slug  
By copying the starter folder’s contents into your project, you can  
quickly set up the foundational elements of your recipe-sharing site and fo-  
cus more on the SEO aspects, as outlined in this chapter.  
Start your project to test the progress. You should see the home page of  
your recipe-sharing site, similar to the following screenshot\:  
274 275 Figure 6.1\: The home page  
Click on any recipe listed on the home page. This should take you to the de-  
tailed page of the selected recipe, thanks to the dynamic routing implement-  
ed in Nuxt. The detailed page will show more information about the recipe,  
as defined in pages/recipe/\[slug\].vue.  
276 277 Figure 6.2\: The recipe details page  
Having tested our project and seen our home page and recipe details come  
to life, let’s turn our attention to SEO.  
# Setting up site configuration with nuxt SEO  
Nuxt SEO is a powerful module that enhances your Nuxt site’s SEO capa-  
bilities. It simplifies the configuration process and ensures compatibility  
across various SEO modules. The module offers streamlined management  
of meta tags and best practices for metadata, including automatically gener-  
ated canonical URLs and open-graph meta tags. This setup is essential for  
optimizing your site’s search engine presence and user engagement.  
To add the module to your project run, run the following command\:  
\$ pnpm i -d @nuxtjs/seo  
In your nuxt.config.js, add @nuxtjs/seo to the modules array,  
and then add a site property. Here’s an example configuration based on  
your setup\:  
export default defineNuxtConfig\(\{  
// Other Nuxt Configurations  
278 modules\: \[  
'@nuxtjs/seo',  
'@nuxtjs/tailwindcss',  
'@nuxtjs/google-fonts',  
\],  
site\: \{  
url\: 'http\://localhost\:3000',  
name\: \`Let's Cook - Your Go-To Destination fo  
Delicious Recipes\`,  
description\: \`Dive into a world of flavors wi  
Cook! Discover a diverse array of mouth-wat  
recipes. and find inspiration for your next  
adventure. Join us and elevate your cooking  
experience!\`,  
defaultLocale\: 'en'  
\}  
\}  
If you open the browser Devtools, you’ll notice a couple of automatically  
generated tags in the document’s head element\:  
UTF-8\: Ensures your website uses UTF-8 character encoding for uni-  
versal character representation.  
Viewport\: Sets up the viewport to control how your site displays on  
different devices, which is crucial for responsive design.  
Favicon\: Utilizes favicon.ico from your public folder to dis-  
play your site’s icon in browser tabs.  
279 Robots\: Instructs search engine robots on how to index your site, im-  
pacting SEO and site visibility.  
og\:type\: Defines the type of content for OG. The default value is  
website.  
url canonical\: Matches the site.url configuration. Helps pre-  
vent duplicate content issues.  
og\:canonical\: The OG version of the canonical URL, which is im-  
portant for social media platforms.  
title / og\:title / og\:site\_name\: Sets the page title to  
site.name and is used in browser tabs, search results, and social  
media.  
meta description / og\:description\: Provides a brief de-  
scription of your site. Used in search engine listings and social shares.  
og\:locale\: Sets the locale to site.defaultLocale, indicating  
the language and regional settings for OG.  
Imagine enhancing your website’s SEO with just four lines of code!  
Moreover, nuxt/seo features an enhanced page title functionality for in-  
ternal pages. If you don’t set a title for a page, the module automatically  
generates one from the last slug segment.  
For example, if we open our steak recipe page in the browser, the page title  
automatically becomes the following\:  
280 Figure 6.3\: The recipe details page title  
Note that the URL is http\://localhost\:3000/recipe/steak-with-vegetables and  
the title is a combination of the capitalized version of the last slug and the  
main site title. Isn’t this awesome? This feature is especially handy for man-  
aging numerous pages, ensuring that each one has a descriptive, SEO-  
friendly title without manual input for each page. Now, let’s shift our focus  
to overriding metadata in custom pages.  
# Overriding metadata  
If you inspect the meta description of the recipe details page, you’ll notice  
that it’s similar to the home page description. Ideally, we should tailor this  
to match the content of each specific page. To achieve this customization,  
we can utilize the useSeoMeta composable.  
useSeoMeta allows you to define your site’s SEO meta tags as a flat ob-  
ject with full TypeScript support. It helps you avoid common errors and en-  
sures your meta tags are accurate and effective.  
Now, let’s apply this to our pages/recipe/\[slug\].vue component\:  
281 \<script lang="ts" setup\>  
// other script content  
const route = useRoute\(\)  
const recipe = recipes.find\(item =\> item.slug ===  
route.params.slug\)  
useSeoMeta\(\{  
description\: recipe?.description,  
ogDescription\: recipe?.description  
\}\)  
\</script\>  
After refreshing the page, the updated description should appear in the head  
tag, reflecting the specific content of each recipe page.  
Figure 6.4\: Overriding the meta description  
With our metadata now dynamically ready and customized for each recipe  
page, let’s progress to learn about the structured data from Schema.org in  
order to further boost our site’s search engine rankings.  
# Implementing structured data for  
# improved search engine rankings  
282 Schema.org plays a pivotal role in enhancing your site’s visibility to search  
engines. It provides a shared vocabulary for structured data on the internet,  
allowing search engines to better understand and display your content. To  
check the pre-defined structured data for our website, click on the nuxt-  
devtools icon on the website, press Ctrl + K, or Command + K, and then  
type the word Schema.  
283 Figure 6.5\: Nuxt Devtools  
It should reveal two key objects\:  
WebSite Object\: Represents the overall website, providing search en-  
gines with high-level information such as the site’s nature, its focus, and  
general details  
WebPage Object\: Describes individual pages on your site, offering  
more specific data such as the content of a particular page  
These objects are automatically generated from the site configuration, lever-  
aging the power of the nuxt/seo module. Taking our SEO strategy a step  
further, let’s learn how to create a recipe node.  
# Creating a recipe node  
In the context of SEO and structured data, a “node” refers to a set of infor-  
mation that represents a specific type of content on a web page, structured  
in a way that search engines can easily understand and index. In our case, a  
recipe node is a collection of structured data that specifically describes a  
recipe, including elements such as ingredients, cooking time, and nutritional  
information.  
If you open Google and search for the term fettuccine recipe, you’ll get a similar result to this\:  
alfredo  
284 Figure 6.6\: The recipe node in the search result  
Note that the result includes a list of recipes with images, preparation times,  
ingredients, ratings, and so on. This card in this search result refers to a  
recipe node.  
The nuxt/seo module supports the creation of various types of nodes,  
such as defineRecipe for recipes. You can learn more about the recipe  
node at https\://unhead.unjs.io/schema-org/schema/recipe.  
285 To implement the recipe node, navigate to  
pages/recipe/\[slug\].vue and add the following to the script\:  
\<script lang="ts" setup\>  
useSchemaOrg\(\[  
defineRecipe\(\{  
name\: recipe?.title,  
description\: recipe?.description,  
image\: recipe?.image,  
cookTime\: recipe?.cookingTime,  
prepTime\: recipe?.prepTime,  
nutrition\: recipe?.nutrition,  
recipeYield\: recipe?.recipeYield,  
recipeCategory\: recipe?.recipeCategory,  
recipeCuisine\: recipe?.recipeCuisine,  
aggregateRating\: \{  
ratingValue\: recipe?.ratings  
\},  
recipeIngredient\: recipe?.recipeIngredient,  
recipeInstructions\: recipe?.recipeInstruction  
\}\)  
\]\)  
\</script\>  
Here is a breakdown of the preceding code\:  
286 cookTime and prepTime\: Specify the cooking and preparation times,  
respectively.  
nutrition\: Details the nutritional information of the recipe.  
recipeYield\: Indicates the quantity or servings the recipe makes,  
such as “four servings” or “three cups.”  
recipeCategory and recipeCuisine\: Classify the recipe into a  
specific category and cuisine, respectively, helping users find relevant  
dishes based on their preferences.  
aggregateRating\: Shows the average rating value of the recipe.  
recipeIngredient\: An array of a string that lists the ingredients  
required.  
recipeInstructions\: An array where each element is an object de-  
tailing a specific step of the recipe. Each object can contain the  
following\:  
name\: The title or a brief description of the step \(optional\)  
text\: The detailed instructions for that step  
image\: An optional image URL for the step, providing a visual guide  
After implementing the defineRecipe function in your  
pages/recipe/\[slug\].vue file, you can verify its effect by revisit-  
ing the Nuxt development tools\:  
1\. Open your Nuxt project in the browser.  
2\. Search for the Schema section within the Nuxt Devtools.  
287 3\. Here, you should now see a new object labeled Recipe, representing  
the structured data for the specific recipe page you are viewing.  
This Recipe object will contain all the structured data you’ve defined us-  
ing defineRecipe, such as the recipe’s name, description, cooking and  
preparation times, ingredients, and instructions. This visualization in the  
Nuxt Devtools is a great way to confirm that your structured data is correct-  
ly implemented and recognized by Nuxt. You can also validate the object  
using the shcema.org validator\: https\://validator.schema.org/.  
With our recipe node successfully implemented and visible in the Nuxt  
Devtools, let’s now turn our attention to optimizing recipe images for faster  
page-loading speeds.  
# Optimizing recipe images to load  
# pages faster  
To optimize recipe images and enhance page-loading speed, we will focus  
on the importance of image optimization in web performance. Large, unop-  
timized images can significantly slow down page load times, negatively im-  
pacting the user experience and SEO.  
To optimize images in Nuxt, we can use nuxt-img, a component from  
Nuxt Image, designed to optimize and transform images efficiently. It pro-  
288 vides features such as on-the-fly image resizing, modern format conversion,  
and lazy loading, a placeholder while the image is loading, all crucial for  
speed and performance.  
Implementing nuxt-img in our project is a key step toward optimizing  
our images. Let’s start by installing the package\:  
\$ pnpm i -d @nuxt/image  
Then, we add it to the nuxt.config.ts modules\:  
export default defineNuxtConfig\(\{  
// other nuxt configuration  
modules\: \[  
'@nuxtjs/seo',  
'@nuxtjs/tailwindcss',  
'@nuxtjs/google-fonts',  
'@nuxt/image'  
\],  
\}\)  
Next, we go to the pages/recipe/\[slug\].vue file. There, replace  
the standard \<img\> tags with the \<nuxt-img\> tag to take advantage of  
Nuxt Image’s features\:  
289 \<nuxt-img  
\:src="recipe.image"  
alt="recipe Image"  
class="absolute w-full h-full object-cover"  
/\>  
Before implementing this change, let’s assess the current image size. Open  
your browser’s developer tools, navigate to the image tag, and open the im-  
age source in a new tab\:  
Figure 6.7\: The image size before optimization  
If you download the image, you might find it’s sizeable, perhaps around 4  
MB, which is quite large for a web image. Now, let’s add the  
format="webp" property to the nuxt-img component\:  
290 \<nuxt-img  
format="webp"  
\:src="recipe.image"  
alt="recipe Image"  
class="absolute w-full h-full object-cover"  
/\>  
After making this change, redo the test. You’ll likely notice that the image  
size is now significantly reduced, by around 400 KB, which means we’ve  
achieved a 90% reduction in size while maintaining quality.  
Figure 6.8\: The Nuxt image after optimization  
Another important feature in the Nuxt image is placeholder. This sig-  
nificantly enhances the user experience by displaying a blurry placeholder  
image while the full-size image loads. This approach is much more visually  
291 appealing compared to the traditional method of loading an image line by  
line.  
To utilize this feature, simply add the placeholder prop to the nuxt-  
img component – for instance, in the pages/recipe/\[slug\].vue  
image\:  
\<nuxt-img  
\:src="recipe.image"  
format="webp"  
placeholder  
alt="recipe Image"  
class="absolute w-full h-full object-cover"  
/\>  
After adding this prop, when you visit the page, you’ll initially see a blurred  
version of the image, which gradually sharpens into the full image, resulting  
in a smoother visual experience.  
292 Figure 6.9\: The Nuxt image placeholder  
Now, let’s discuss optimizing images further by specifying their width and  
height, which is especially useful when displaying images in smaller sizes.  
nuxt-img allows you to define the width and height attributes, ensuring  
that images are served in the most appropriate size for their intended dis-  
play area. This will create a smaller image based on the specified size, re-  
ducing unnecessary data transfer and improving image optimization. For  
example, in the components/RecipeCard.vue file, let’s replace the  
293 img tag with nuxt-img and add webp format, placeholder, and a height  
of 250px, as we specified in the TailwindCSS classes\:  
\<nuxt-img  
format="webp"  
class="w-full h-\[250px\]"  
height="250"  
\:src="recipe.image"  
alt="Recipe Image"  
placeholder  
/\>  
By setting the height to 250 px, nuxt-img resizes the image to these di-  
mensions. This resize operation, performed under the hood by Nuxt Image,  
dramatically reduces the file size.  
In this case, the original image size, which was around 4 MB, is first re-  
duced to about 400 KB by converting to WebP. Then, with the specified  
height, it’s further reduced to an astonishingly small size of approximately  
18 KB! This significant reduction demonstrates the effectiveness of specify-  
ing dimensions in combination with the WebP format, showcasing how  
nuxt-img optimizes images to enhance the page-loading speed while  
maintaining image quality.  
294 Figure 6.10\: The Nuxt image after specifying a size  
Having optimized our recipe images, we now turn to a creative approach –  
using a custom Nuxt component to automatically generate unique OG im-  
ages for each recipe page, improving their visual impact on social media.  
# Creating a custom og\:image for the  
# recipe page  
OG images \(og\:image\) play a crucial role in how content is visually pre-  
sented when shared on social media. For instance, when someone shares a  
recipe link from your site, og\:image is what typically appears as the vis-  
ual highlight of the post, drawing attention and potentially driving more  
traffic to your site.  
295 The useSeoMeta composable from Nuxt allows you to append an  
og\:image link to each page, as explained in more detail in the Nuxt docu-  
mentation\: https\://nuxt.com/docs/api/composables/use-seo-meta\#usage.  
However, in this section, we’re going to explore a more dynamic and cre-  
ative solution. Instead of manually designing an image for each recipe,  
we’ll create a Nuxt component that automatically generates an OG image.  
This feature from the nuxt/seo module is useful to dynamically convert  
our component into an og\:image, saving much time and effort in creating  
custom graphic design.  
We’ll start by creating a new component in  
components/OgImage/CustomTemplate.vue inside the template,  
by adding the following\:  
\<template\>  
\<div class="h-full w-full flex flex-row relativ  
\<div class="flex flex-col justify-between w-2  
bg-slate-800"\>  
\<img src="/logo.png" width="128" height="12  
class="w-32 object-contain" /\>  
\<h1 class="text-\[64px\] font-black text-whit  
\{\{ title \}\}  
\</h1\>  
\<div class="text-2xl leading-10 font-black  
296 text-slate-100 mb-4"\>  
\{\{ description \}\}  
\</div\>  
\<p class="text-2xl font-bold text-primary m  
\{\{ siteConfig.url \}\}\</p\>  
\</div\>  
\<img \:src="image" alt="Card Image" class="w-1  
object-cover" /\>  
\</div\>  
\</template\>  
The template creates a recipe card. It features a combination of the site’s  
logo, the recipe’s title and description, the website URL, and the recipe’s  
image.  
In the same component, add this script\:  
\<script lang="ts" setup\>  
const siteConfig = useSiteConfig\(\)  
withDefaults\(  
defineProps\<\{  
title\: string  
description\: string  
image?\: string  
\}\>\(\),  
\{ image\: '/images/hero.png' \}  
297 \)  
\</script\>  
In the \<script\> section, we’re utilizing Nuxt composables to dynamical-  
ly set up the component’s properties\:  
useSiteConfig\: This composable from the nuxt/seo module re-  
trieves the site configuration defined in nuxt.config.ts, allowing  
us to access global site settings such as the URL.  
withDefaults\: This function from Vue is used to assign default val-  
ues to the component’s props. Specifically, it sets a default image  
\('/images/hero.png'\) for scenarios where a specific recipe image  
isn’t provided, such as when creating an OG image for the home page.  
To use our custom component in the home page, we first need to modify the  
script in our pages/index.vue\:  
\<script setup lang="ts"\>  
defineOgImageComponent\('CustomTemplate', \{  
title\: \`Let's Cook\`  
\}\);  
\</script\>  
By doing this, we set a custom title for the OG image. Since we haven’t  
specified a description, the default site description, defined globally in the  
298 nuxt.config.ts site object, will be used. Similarly, in the absence of  
a specified recipe image, our default hero image is automatically selected.  
To debug and view the results of these changes, follow these steps\:  
1\. Navigate to http\://localhost\:3000/.  
2\. Click on the Nuxt Devtools icon.  
3\. Open the search bar \(using Ctrl + K or Command + K on a Mac\) and  
search for og Image.  
4\. You should now see a preview of the OG image, which will look some-  
thing like Figure 6.11\:  
299 Figure 6.11\: The Nuxt Devtools – og\:image debugging  
This process confirms that our custom OG image was successfully imple-  
mented for the home page. Next, let’s apply a similar approach to create one  
for each recipe.  
Open the /pages/recipe/\[slug\].vue file and append this to the  
script\:  
defineOgImageComponent\('CustomTemplate', \{  
300 title\: recipe?.title,  
description\: recipe?.description,  
image\: recipe?.image  
\}\);  
This code dynamically sets the title, description, and image for the OG im-  
age based on the specific recipe details. When you visit a recipe page and  
check the OG Image section in the Nuxt Devtools, you’ll see the custom  
image reflecting the recipe’s unique attributes\:  
301 Figure 6.12\: The recipe’s OG image  
Having personalized our OG images for each recipe, let’s now move on to  
our final task – generating dynamic site maps for the recipe-sharing site.  
302 Generating dynamic site maps for  
# the recipe-sharing site  
As we’ve customized our OG images for each recipe, our next and final  
step is to generate dynamic site maps for our recipe-sharing site. Site maps  
are crucial, as they guide search engines in discovering and indexing all the  
pages on your site, thereby enhancing SEO.  
While the nuxt/seo module automatically creates site maps for static  
pages such as the Homepage and About page, it doesn’t automatically de-  
tect dynamic pages such as individual recipes. To see the current site map,  
visit http\://localhost\:3000/sitemap.xml. You’ll notice that it includes only  
static pages\:  
Figure 6.13\: The default Sitemap.xml  
However, our site also features dynamic recipe pages that are not automati-  
cally included in this site map. To remedy this, we need to provide  
303 nuxt/seo with a way to identify these dynamic pages. We’ll achieve this  
by setting up an API endpoint that fetches a list of recipes. This list can then  
be fed into nuxt/seo to dynamically generate a comprehensive site map  
that includes both static and dynamic pages, ensuring complete visibility of  
our site to search engines.  
In a typical project, the backend’s responsibility includes creating an exter-  
nal API to list dynamic pages. However, Nuxt offers a more integrated ap-  
proach – using its server directory, we can create an internal API within  
our project. This method is particularly beneficial for scenarios such as  
ours, where we need to generate a dynamic site map.  
The Nuxt server directory is a powerful feature that enables us to write  
server-side logic directly in our Nuxt application. It’s an ideal solution for  
internal APIs and server-side functionalities without needing a separate  
backend service.  
To use this in our recipe-sharing site, we’ll create a file named  
server/api/\_\_sitemap\_\_/urls.ts. In this file, we’ll define a site  
map handler using defineSitemapEventHandler, which will dy-  
namically generate URLs from our recipe data\:  
import recipes from '\~/data/recipes'  
// server/api/\_\_sitemap\_\_/urls.ts  
export default defineSitemapEventHandler\(\(\) =\> \{  
304 return recipes.map\(recipe =\> \(\{  
loc\: \`/recipe/\$\{recipe.slug\}\`,  
\_sitemap\: 'pages'  
\}\)\);  
\}\);  
In Nuxt’s server directory, the api folder is specially designed to create  
APIs, with each file path corresponding to an API route. This feature allows  
for easy integration of server-side APIs directly within the Nuxt project. In  
our case, the server/api/\_\_sitemap\_\_/urls.ts file will automat-  
ically be converted into an accessible API route. To test and see the output  
of this newly created API, you can navigate to  
http\://localhost\:3000/api/\_\_sitemap\_\_/urls. When you visit this URL, it will  
display the list of URLs generated for our dynamic recipe pages\:  
Figure 6.14\: Testing the internal API  
305 To include our dynamically generated recipe URLs in the site map, we’ll  
adjust nuxt.config.ts by adding the following object\:  
export default defineNuxtConfig\(\{  
// other nuxt configuration  
sitemap\: \{  
sources\: \['http\://localhost\:3000/api/\_\_sitema  
\},  
\}\)  
This line directs Nuxt to use the URLs from our internal API as a source for  
the site map, combining them with all the static pages that are automatically  
generated.  
Now, revisit http\://localhost\:3000/sitemap.xml in your browser. You should  
see that all the recipes, along with the static pages, are now correctly listed  
in the site map, ensuring they are discoverable by search engines\:  
306 Figure 6.15\: The final sitemap.xml result  
With this final step, we’ve successfully completed our project, enhancing  
our recipe-sharing site with optimized SEO, dynamic OG images, and an  
effective site map. This achievement marks a significant milestone in our  
journey to create real-world Nuxt projects!  
# Summary  
Chapter 6 focused on elevating a recipe-sharing site using Nuxt 3, with a  
focus on SEO. We kickstarted with nuxt/seo for site configuration, effi-  
ciently adding key SEO elements such as meta tags and OG protocols, en-  
hancing the site’s search engine visibility.  
Our journey included implementing defineRecipe for structured data,  
improving the recipe visibility in search results. The use of nuxt-img was  
307 crucial in optimizing images, significantly enhancing page loading speed. A  
highlight was creating dynamic OG images via a custom Nuxt component,  
automatically generating unique images for each recipe shared and enrich-  
ing our social media engagement.  
We overcame the challenge of dynamic site map generation by utilizing  
Nuxt’s server directory to create an internal API, ensuring complete site vis-  
ibility for search engines.  
As we close this chapter, we gear up for Chapter 7, Building a Quiz Game  
Application to Learn and Testing. This next adventure will dive into creat-  
ing an interactive quiz game app, which will introduce Nuxt 3’s testing ca-  
pabilities to build a scalable, error-free application. We’ll explore unit test-  
ing, Pinia store testing, end-to-end testing, further enhancing our Nuxt 3 de-  
velopment skills.  
# Practice questions  
How do you set up a canonical URL using nuxt/seo?  
How can you convert images to the WebP format in Nuxt 3?  
Explain how to implement a blurred placeholder for images.  
How do you customize OG images for social media sharing?  
How do you test the implementation of a recipe node in Nuxt Devtools?  
What is the importance of specifying width and height in nuxt-img?  
How do you include dynamic page URLs in a sitemap?  
308 What is the importance of useSeoMeta?  
How do you verify the contents of a dynamically generated site map?  
How do you add structured data or a schema to a Nuxt page?  
# Further reading  
Nuxt SEO\: https\://nuxtseo.com/  
useSeoMeta\: https\://nuxt.com/docs/api/composables/use-seo-meta  
Nuxt SEO supported nodes\: https\://nuxtseo.com/schema-  
org/guides/nodes  
Nuxt Image\: https\://image.nuxt.com/  
OG\: https\://www.semrush.com/blog/open-graph  
Dynamic site map URLs from an external API\:  
https\://nuxtseo.com/sitemap/guides/dynamic-urls\#dynamic-urls-from-  
an-external-api  
309 7  
# Building a Quiz Game Application  
# to Learn about Testing  
In this chapter, we will continue our journey and build a quiz game applica-  
tion using Nuxt 3, with a deep focus on enhancing our testing skills. This  
chapter is crafted for developers aiming to refine their skills in unit testing  
and End-to-End \(E2E\) testing.  
Initially, we’ll talk about the importance of testing in software development,  
illustrating how it serves as the backbone of any application. We’ll kick off  
with unit testing, where you’ll learn how to construct unit tests for both the  
Pinia store and Vue components, ensuring each piece of logic and every UI  
element behaves as intended.  
Following this, we’ll continue our testing strategy to learn about E2E tests,  
simulating real user interactions to affirm the overall functionality of the  
quiz game. We will also provide visual insights into test results and  
coverage.  
In this chapter, we’re going to cover the following main topics\:  
Implementing the quiz game app  
310 Writing unit tests for the Pinia store  
Writing unit tests for components  
Writing end-to-end tests for the quiz game  
Exploring Vitest UI and test coverage tools  
# Technical requirements  
The code files for this chapter can be found at https\://github.com/PacktPub-  
lishing/Nuxt-3-Projects/tree/main/chapter07.  
The CiA video for this chapter can be found on https\://packt.link/tAMjs  
# Exploring the repository  
As we did in the previous chapter, let’s quickly review the starter folder  
in our repository. This folder, pre-populated with essential components, a  
quiz store, and TypeScript interfaces, is ready to be copied into your new  
project. It serves as the groundwork, allowing us to concentrate on the criti-  
cal task of this chapter\: implementing and learning testing strategies within  
Nuxt 3.  
# Essential background –  
# fundamentals of testing  
311 As we shift our focus to testing in Chapter 7, understanding the foundation-  
al aspects of testing becomes crucial. Testing is a critical process in soft-  
ware development, aimed at ensuring that your application performs cor-  
rectly under various scenarios.  
Traditionally, developers used to test applications manually, which required  
hands-on effort to find bugs. However, the evolution of testing practices has  
significantly reduced reliance on manual testing through the adoption of au-  
tomated testing. Automated testing introduces efficiency and consistency by  
automating repetitive tasks. It encompasses three primary levels\:  
Unit testing\: Focuses on testing individual components or functions in  
isolation, making it easier to pinpoint errors.  
Integration testing\: Tests the interaction between integrated units or  
components to ensure they work together as intended. While this chapter  
will not focus heavily on integration testing, it remains an important part  
of the testing pyramid.  
E2E testing\: Simulates real-world user behaviors and interactions with  
the application from start to finish, ensuring the entire system functions  
as expected.  
By implementing automated testing, we can significantly reduce the need  
for manual testing, allowing for more frequent and comprehensive test runs  
with less effort. Next, let’s see how to implement the quiz game app.  
312 Implementing the quiz game app  
We will kick off our quiz game application by setting up a new Nuxt 3  
project. As with our previous endeavors, we’ll utilize the starter folder  
to fast-track our development process. Once you’ve created your new  
project, copy the contents of the starter folder into it. If prompted, agree to  
replacing the existing files.  
Next, we’ll need to install a few essential Nuxt modules, such as Pinia,  
Tailwind CSS, and Google Fonts. We already discussed each module in pre-  
vious chapters. Run the following commands in your terminal to add these  
packages to your project\:  
\$ pnpm i -D @nuxtjs/google-fonts @nuxtjs/tailwind  
\$ pnpm i @pinia/nuxt  
With the dependencies in place, it’s time to fire up our project and see the  
initial setup in action. Execute the project as usual\:  
\$ pnpm dev  
313 Upon running the project, you should be greeted with the initial layout of  
the quiz game application\:  
Figure 7.1\: Quiz game app  
314 Before diving into the testing aspect of our quiz game application, let’s take  
a moment to understand the structure and components that form the back-  
bone of our project.  
# Questions data  
The questions data is located in data/questions.ts. It stores the quiz  
questions, each with multiple answers, enabling the dynamic generation of  
quizzes each time a user engages with the app.  
# Types definitions  
The structure and types of data used across the application are meticulously  
defined in types/index.ts\:  
export default \{\}  
declare global \{  
type Question = \{  
id\: number  
body\: string  
answers\: Answer\[\]  
rightAnswerId\: number  
\}  
type Answer = \{  
id\: number  
body\: string  
315 \}  
type Result = Question & \{  
userAnswer\: Answer  
answerIsRight\: boolean  
\}  
\}  
Here’s ad breakdown of the types\:  
Question\: Represents each quiz question, containing an ID, the question  
body, a list of possible answers, and the ID of the correct answer  
\(rightAnswerId\)  
Answer\: Defines the structure for each answer option for a question,  
with its own ID and the answer body  
Result\: A composite type that extends the Question type by including  
the user’s selected answer \(userAnswer\) and a flag \(answerIs-  
Right\) indicating whether the chosen answer is correct  
Next, let’s see the content of the quiz store.  
# Quiz Pinia store  
This store is designed to manage the game’s state using Pinia, from tracking  
the current question to calculating the player’s score. Here’s an overview of  
its key features.  
316 This initial segment sets up the quiz store and initializes the state, including  
the current question index, quiz completion status, results array, and score\:  
const currentQuestionIndex = ref\<number\>\(0\)  
const quizFinished = ref\<boolean\>\(false\)  
const result = ref\<Result\[\]\>\(\[\]\)  
const score = ref\<number\>\(0\)  
Next, quiz is a computed property that selects five random questions from  
the provided questions dataset, ensuring a varied quiz experience each time\:  
const quiz = computed\(\(\) =\>  
selectRandomQuestions\(questions, 5\)\)  
Note that selectRandomQuestions is a utility function stored in the  
utils folder. So, it’s automatically imported due to the power of the Nuxt  
auto-imports feature.  
To get the instance of the current question based on currentQuestion-  
Index, we’ll create another computed method\:  
const currentQuestion = computed\(\(\) =\>  
quiz.value\[currentQuestionIndex.value\]\)  
317 Now, in order to update the progress, there is a function called update-  
Progress\:  
const updateProgress = \(answerId\: number\) =\> \{  
const question = currentQuestion.value  
const answerIsRight = question.rightAnswerId ==  
if \(answerIsRight\) score.value++  
result.value.push\(\{  
...question,  
userAnswer\:  
question.answers.find\(\(\{ id \}\) =\> id === an  
\(\{ body\: 'no answer' \} as Answer\),  
answerIsRight  
\}\)  
if \(currentQuestionIndex.value \< quiz.value.len  
currentQuestionIndex.value++  
else quizFinished.value = true  
\}  
updateProgress is a crucial function that evaluates whether the user’s  
answer is correct, updates the score for correct answers, and appends the  
question along with the user’s answer and the correct answer to the results  
array. It also determines whether to move to the next question or conclude  
the quiz.  
318 Finally, in order to restart the quiz after finishing, we can use the  
restartQuiz function, which allows users to reset the quiz to its initial  
state, clearing all progress and scores, and make another attempt with the  
same set of questions\:  
const restartQuiz = \(\) =\> \{  
currentQuestionIndex.value = 0  
quizFinished.value = false  
result.value = \[\]  
score.value = 0  
\}  
Make sure to return all refs and functions at the end of the store file\:  
return \{  
currentQuestionIndex,  
quizFinished,  
quiz,  
currentQuestion,  
updateProgress,  
restartQuiz,  
result,  
score  
\}  
Now, let’s move on to see an overview of app.vue.  
319 The app.vue file  
Here is the skeleton of the app.vue file\:  
\<!-- app.vue --\>  
\<template\>  
\<div class="bg-violet-950 min-h-screen text-whi  
\<div class="container py-12 text-center"\>  
\<template v-if="quizStore.quizFinished"\>  
\<!-- RESULT HERE --\>  
\</template\>  
\<Question v-else /\>  
\</div\>  
\</div\>  
\</template\>  
\<script setup\>  
const quizStore = useQuizStore\(\)  
\</script\>  
This file contains the main layout and flow of our quiz game. We initiate the  
quiz store in the script section to be accessible within the component.  
template employs a conditional rendering approach with v-  
if="quizFinished". This condition checks whether the quiz has con-  
cluded, based on the quizFinished flag from our quizStore.  
320 Upon completion, it displays the user’s score out of five and lists the ques-  
tions alongside the user’s answers, as well as the correct answers, applying  
different background colors to indicate whether the answers were correct or  
incorrect. There is also a restart quiz button that allows users to reset the  
quiz and try again.  
Otherwise, the app will render Question.vue, which will be responsible  
for rendering the question with answers, capturing user responses, and up-  
dating the quiz’s progress. It’s straightforward. You can check its content  
from the starter file.  
Having explored the foundational components of our quiz game project,  
we’re now ready to dive into the basics of unit testing and E2E testing. This  
knowledge equips us with the necessary skills to ensure our application  
meets the high standards of quality and reliability expected in modern web  
development.  
# Writing unit tests for the Pinia  
# store  
As we move forward, the task at hand involves writing unit tests for the  
Pinia store. This step is pivotal in verifying the application’s state manage-  
ment logic and introduces us to the principles of unit testing within a Pinia  
store.  
321 Exploring Vitest  
Vitest, designed with Vite in mind, offers a next-generation testing frame-  
work that enhances the testing experience through integration with Vite’s  
ecosystem, leading to faster and more efficient tests. It provides a Jest-com-  
patible API, enabling easy migration and parallel test execution for im-  
proved performance.  
Compared to Jest, Vitest stands out for projects using Vite due to its seam-  
less integration, faster setup, and execution, making it a preferred choice for  
modern web development. For more details, visit the official website\:  
https\://vitest.dev.  
To ensure Vitest works seamlessly with Nuxt, we integrate @nuxt/test-  
utils into our setup. This toolkit is designed to work with various testing  
frameworks and environments, providing flexibility and power to our test-  
ing strategy. Let’s clarify the key components of our setup\:  
@nuxt/test-utils\: Essential for Nuxt applications, offering spe-  
cialized tools and functionalities, as well as integration with existing  
testing frameworks, for a smooth testing experience in the Nuxt  
environment.  
Vitest\: Our chosen testing framework.  
happy-dom\: A lightweight DOM simulation library, happy-dom pro-  
vides a more accurate and faster simulation of browser environments  
322 within tests. It’s chosen for its efficiency in running tests that involve  
DOM manipulation or browser API interactions, replicating how compo-  
nents behave in a real browser without needing one.  
Now, install these tools with the following\:  
\$ pnpm add -D @nuxt/test-utils vitest happy-dom  
We then create a vitest.config.ts file in the root of our project. This  
configuration file is crucial for specifying our test environment preferences\:  
// vitest.config.ts  
import \{ defineVitestConfig \} from  
'@nuxt/test-utils/config'  
export default defineVitestConfig\(\{  
test\: \{  
environment\: 'happy-dom'  
\}  
\}\)  
By setting the environment to 'happy-dom', we instruct Vitest to simu-  
late a browser-like environment using happy-dom for our tests.  
Next, we create a test file named temp.spec.ts in the root folder of our  
project. The .spec suffix in the filename is a convention that stands for  
323 “specification.” It signifies that the file contains a series of specifications  
\(tests\) that describe how the application or a particular component should  
behave. This naming convention helps Vitest to automatically locate and  
execute tests, scanning for files that end with .spec.ts or .test.ts,  
when we run the vitest command.  
Let’s now populate temp.spec.ts with a simple test to get familiar with  
Vitest’s syntax and capabilities\:  
// temp.spec.ts  
import \{ describe, it, expect \} from 'vitest'  
const sum = \(a\: number, b\: number\)\: number =\> a +  
describe\('Sample Test', \(\) =\> \{  
it\('should accurately add two numbers', \(\) =\> \{  
expect\(sum\(2, 3\)\).toBe\(5\)  
\}\)  
\}\)  
In this example, describe is used to group our test under a common  
suite, it outlines an individual test case, and expect formulates an asser-  
tion about the code’s behavior. Here, we’ve created a simple test case to en-  
sure that the sum function is working properly. We expected the result of  
sum\(2, 3\) to be equal to 5.  
To run our newly created test, we first need to make a small adjustment to  
our project’s package.json file. By adding a new script entry for  
324 "test", we configure it to execute vitest, which in turn runs our test  
suite\:  
// package.json  
"scripts"\: \{  
// other scripts  
"test"\: "vitest"  
\}  
With this script in place, execute the test suite by running the following\:  
\$ pnpm test  
Upon execution, Vitest springs into action, automatically scanning the  
project for any test files. For our simple test in temp.spec.ts, Vitest  
should recognize it as the sole test file, identifying the single describe  
block and the one test case it contains. If everything is set up correctly,  
you’ll see output indicating that the test case passed as expected\:  
325 Figure 7.2\: Vitest output  
Next, let’s introduce an additional test case to our temp.spec.ts file,  
one that we anticipate will fail, to observe Vitest’s behavior in handling fail-  
ing tests\:  
// temp.spec.ts  
import \{ describe, it, expect \} from 'vitest'  
const sum = \(a\: number, b\: number\)\: number =\> a +  
describe\('Sample Test', \(\) =\> \{  
// previous test  
// Add this test case within the same describe  
it\('should fail to add two numbers correctly',  
expect\(sum\(2, 2\)\).toBe\(5\) // incorrect  
\}\)  
\}\)  
326 Vitest continuously monitors for any changes in your test files. So, when  
you save your temp.spec.ts file with the intentionally failing test,  
Vitest automatically re-runs the tests. This time, you’ll notice in the termi-  
nal output that while the first test case passes as before, the new test case  
fails. This immediate feedback highlights the failing assertion, offering in-  
sights into what went wrong and where, directly in your terminal\:  
327 Figure 7.3\: Vitest output with wrong tests  
Now, with Vitest actively monitoring our project for changes, let’s proceed  
to test the quiz store to ensure its logic performs correctly under various  
conditions.  
328 Testing the quiz store  
Our focus now shifts to the quiz store. By unit testing this store, we aim to  
confirm that our game’s logic and state management work as intended, pro-  
viding a solid foundation for a great user experience.  
First, let’s clear the stage by removing the temp.spec.ts temporary test  
file and creating quiz.spec.ts in the /stores folder next to our quiz  
store. To effectively unit test a Pinia store, we have to establish a fresh Pinia  
instance for each test\:  
// stores/quiz.spec.ts  
import \{ describe, it, expect, beforeEach \} from  
import \{ setActivePinia, createPinia \} from 'pini  
describe\('Quiz Store', \(\) =\> \{  
beforeEach\(\(\) =\> \{  
setActivePinia\(createPinia\(\)\)  
\}\)  
\}\)  
The beforeEach function is important for maintaining test integrity. It’s  
a function provided by Vitest that runs before each test case in our de-  
scribe block. By calling setActivePinia\(createPinia\(\)\)  
within beforeEach, we guarantee that each test interacts with a fresh in-  
329 stance of Pinia, allowing us to assess the functionality of the quiz store in  
each test independently.  
With our testing setup ready, it’s time to write our first test\:  
// stores/quiz.spec.ts  
import \{ describe, it, expect, beforeEach \} from  
import \{ setActivePinia, createPinia \} from 'pini  
describe\('Quiz Store', \(\) =\> \{  
// before each  
it\('initializes with a set of 5 quiz questions  
const quizStore = useQuizStore\(\)  
expect\(quizStore.quiz.length\).toBe\(5\)  
\}\)  
\}\)  
This test verifies that the quiz store correctly initializes with a set of five  
questions, ensuring our game starts with the expected number of challenges  
for the player. After running the test, the terminal should indicate the test  
case passed.  
To ensure our quiz store behaves as expected, we need to test each function  
comprehensively. One crucial aspect is verifying that the store correctly  
handles incorrect answers. The idea here is to simulate a scenario where a  
player chooses a wrong answer and to confirm that such an action does not  
lead to an increase in their score.  
330 Here’s how we implement this test\:  
// inside the quiz.spec.ts file  
it\(\`doesn't increment the score when a wrong answ  
selected\`, \(\) =\> \{  
const quizStore = useQuizStore\(\)  
const firstQuestion = quizStore.quiz\[0\]  
// get a wrong answer  
const wrongAnswerId = firstQuestion.answers.fin  
answer =\> answer.id !== firstQuestion.rightAn  
\)?.id  
// Simulate the action of choosing a wrong answ  
if \(wrongAnswerId !== undefined\) \{  
quizStore.updateProgress\(wrongAnswerId\)  
expect\(quizStore.score\).toBe\(0\)  
\}  
\}\)  
To achieve 100% coverage, we should continue using this testing approach  
for every function within the quiz store, ensuring each aspect of our game’s  
logic is rigorously validated.  
Following the approach to not increment the score with a wrong answer, we  
will also test the positive scenario. We implement a similar test case to en-  
sure the score increments by 1 when the correct answer is selected\:  
331 it\('increment the score only when the correct ans  
selected', \(\) =\> \{  
const quizStore = useQuizStore\(\)  
const firstQuestion = quizStore.quiz\[0\]  
const rightAnswerId = firstQuestion.rightAnswer  
// Now try with the correct answer  
quizStore.updateProgress\(rightAnswerId\)  
expect\(quizStore.score\).toBe\(1\) // Score should  
by 1  
\}\)  
Next, let’s validate the quiz’s flow with a test to ensure it moves to the next  
question after an answer is selected. This test starts by checking the initial  
question index is 0, simulates answering the first question, and then con-  
firms the quiz store correctly updates to indicate the next question is ready\:  
it\('transitions to the next question upon answeri  
const quizStore = useQuizStore\(\)  
expect\(quizStore.currentQuestionIndex\).toBe\(0\)  
const firstQuestion = quizStore.quiz\[0\]  
// Select any answer ID from the first question  
const anyAnswerId = firstQuestion.answers\[0\].id  
quizStore.updateProgress\(anyAnswerId\)  
// Verify the store has moved to the next quest  
332 expect\(quizStore.currentQuestionIndex\).toBe\(1\)  
\}\)  
To conclude our testing of the quiz flow, we implement a test to confirm the  
quiz is marked as finished after the last question is answered. This test iter-  
ates through all questions, simulating correct answers for each, and checks  
that the quiz store flags the quiz as completed. It further verifies that all  
questions have been accounted for in the results, ensuring the game con-  
cludes as expected\:  
it\('marks the quiz as finished when the last ques  
answered', \(\) =\> \{  
const quizStore = useQuizStore\(\)  
// Answer each question  
for \(let i = 0; i \< quizStore.quiz.length; i++\)  
const question = quizStore.quiz\[i\]  
quizStore.updateProgress\(question.rightAnswer  
\}  
// After answering all questions,  
// the quiz should be marked as finished  
expect\(quizStore.quizFinished\).toBe\(true\)  
expect\(quizStore.result.length\).toBe\(5\)  
\}\)  
With these main test cases covered, we’ve laid a solid foundation for ensur-  
ing the quiz store functions correctly. For a complete view of all test cases,  
please refer to the full suite available in the project repository.  
333 Next, let’s shift our focus to writing unit tests for the Question compo-  
nent, where we’ll apply similar rigor to ensure the components of our quiz  
game app behave as expected under various scenarios.  
# Writing unit tests for components  
When transitioning from testing the store to testing Vue components, our  
focus moves toward verifying that components behave as expected when  
they receive props, interact with the Pinia store, and render correctly.  
Component testing can include checking that components properly display  
data passed via props, react to user input, and integrate seamlessly with the  
store for state management.  
# Setting up for component testing  
To effectively test Vue components, we introduce two crucial tools\:  
@vue/test-utils and @pinia/testing\:  
@vue/test-utils\: This library provides utilities to mount and inter-  
act with Vue components in a testing environment. The mount function  
is particularly important as it allows us to render a component in isola-  
tion and returns a wrapper object that we can use to examine the ren-  
dered output and simulate user interactions.  
@pinia/testing\: This offers tools for testing Pinia stores within Vue  
components. The createTestingPinia function is used to create a  
334 mock Pinia instance that can be used in tests.  
So, let’s install these libraries\:  
\$ pnpm add -D @vue/test-utils @pinia/testing  
Next, let’s move on to creating the component test file.  
# Creating the Question.spec.ts test file  
Inside the /components folder, create a file called  
Question.spec.ts and add the following code to it\:  
// /components/Question.spec.ts  
import \{ describe, it, expect, vi \} from 'vitest  
import \{ mount \} from '@vue/test-utils'  
import \{ createTestingPinia \} from '@pinia/testin  
import QuestionComponent from '@/components/Quest  
const wrapper = mount\(QuestionComponent, \{  
global\: \{  
plugins\: \[  
createTestingPinia\(\{  
createSpy\: vi.fn  
\}\)  
\]  
335 \}  
\}\)  
Here’s a breakdown of the code\:  
The wrapper object returned by mount encapsulates the mounted  
component, providing a range of methods and properties to query and in-  
teract with it. This wrapper allows you to test the component’s rendered  
output, check its state, and simulate user interactions, such as clicks and  
input changes..  
The createSpy option, used in conjunction with createTesting-  
Pinia, allows us to pass a spy function \(vi.fn from Vitest\) that can  
be used to monitor and verify interactions with the store. Spies can track  
calls to store refs and methods, providing insights into how the compo-  
nent interacts with the store.  
With our testing environment configured, let’s proceed to write our first unit  
test for the component.  
# Writing the component unit test  
First, let’s have a look at the Question.vue component that we’ve al-  
ready copied from the starter file\:  
\<!-- components/Question.vue --\>  
336 \<template\>  
\<div class="text-center"\>  
\<h1 class="text-4xl text-center capitalize fo  
mb-8"\>  
\{\{ currentQuestion.body \}\}  
\</h1\>  
\<div class="grid grid-cols-2 gap-4"\>  
\<button  
class="text-2xl font-bold bg-violet-900  
hover\:bg-violet-800 transition rounded-  
v-for="answer of currentQuestion.answers"  
@click="answered\(answer.id\)"  
\>  
\{\{ answer.body \}\}  
\</button\>  
\</div\>  
\</div\>  
\</template\>  
\<script setup lang="ts"\>  
const quizStore = useQuizStore\(\)  
const \{ currentQuestion \} = storeToRefs\(quizStore  
const answered = \(answerId\: number\) =\> \{  
quizStore.updateProgress\(answerId\)  
\}  
\</script\>  
The Question component is a key part of our quiz game application, de-  
signed to present users with a single question and its multiple-choice an-  
337 swers. Upon rendering, it dynamically displays the content of the current  
question retrieved from the Pinia store, including the question text and a set  
of buttons for each answer option. Users can select their answer by clicking  
one of these buttons, triggering the answered function that calls the up-  
dateProgress function from the Pinia store to update the quiz’s  
progress based on the selected answer ID and move on to the next question.  
Our goal in testing the Question component is to ensure it functions as  
intended\: displaying the current question and its answers correctly and re-  
sponding to user interactions appropriately.  
The first test case focuses on verifying that the Question component cor-  
rectly displays the current question along with its four corresponding an-  
swers. Inside the Question.spec.ts file, add the following\:  
// components/Question.spec.ts  
// …previous code  
describe\('Question Component', \(\) =\> \{  
it\('renders current question and answers', \(\) =  
const quizStore = useQuizStore\(\)  
const question = quizStore.currentQuestion  
expect\(wrapper.text\(\)\).toContain\(question.bod  
expect\(wrapper.findAll\('button'\)\).toHaveLengt  
// Dynamically assert each answer is rendered  
question.answers.forEach\(answer =\> \{  
338 expect\(wrapper.html\(\)\).toContain\(answer.bod  
\}\)  
\}\)  
\}\)  
The following are key points in the code\:  
wrapper.text\(\)\: Checks the text content of the mounted component  
to ensure it includes the current question’s body  
wrapper.findAll\('button'\)\: Verifies that exactly four buttons \(an-  
swers\) are rendered  
wrapper.html\(\)\: Used to inspect the HTML output of the compo-  
nent, ensuring each answer’s body is present  
The second test case verifies that when a user clicks an answer, the compo-  
nent’s answered method is correctly called with the appropriate an-  
swerId. This test simulates user interaction and checks the component’s  
logic for processing answers\:  
// components/Question.spec.ts  
// …previous code  
describe\('Question Component', \(\) =\> \{  
// previous test  
it\('calls answered method with correct answerId  
answer is clicked', async \(\) =\> \{  
const quizStore = useQuizStore\(\)  
339 // clicking on the first button  
await wrapper.findAll\('button'\)\[0\].trigger\('c  
// verify "updateProgress" was called correc  
expect\(quizStore.updateProgress\).toHaveBeenCa  
\}\)  
\}\)  
Key points in the code are as follows\:  
wrapper.findAll\('button'\)\[0\].trigger\('click'\)\:  
Simulates a user clicking the first answer button. The trigger function is  
used to dispatch DOM events, imitating user actions. If you check the  
questions data, you’ll notice that the ID of the first answer is always 1.  
We’ll use the information to check the prop that is passed to the up-  
dateProgress method.  
toHaveBeenCalledWith\(1\)\: Asserts that the updateProgress  
method within the quiz store was called with the correct argument, indi-  
cating the user’s selected answer ID \(in this case, it’s 1\). This ensures the  
component correctly communicates user selections to the store.  
After running the unit tests for our quiz game components and the quiz  
store, you should see results similar to this in your terminal\:  
340 Figure 7.4\: Vitest output after testing component  
Now, let’s transition to writing E2E tests to ensure the game operates seam-  
lessly from start to finish, as experienced by the end user.  
# Writing end-to-end tests for the  
# quiz game  
E2E testing is a technique used to test the entire application from start to  
finish, simulating real-user scenarios and interactions. It ensures that the ap-  
plication behaves as expected in a production-like environment, covering  
UIs, databases, APIs, and other services. E2E testing is crucial for verifying  
the integrated operation of all application components and detecting issues  
that unit or integration tests might miss.  
341 Setting up for E2E testing  
To conduct E2E tests in our project, we have to install playwright-  
core, a powerful tool for automating browser interactions, enabling tests  
that simulate real user actions. It also supports testing across multiple  
browsers. Run this command to install it\:  
\$ pnpm add -D playwright-core  
The @nuxt/test-utils package includes utilities such as setup and  
createPage to facilitate E2E testing with Playwright or other test run-  
ners. Before beginning your E2E tests, initializing the test context with  
setup is necessary. This function prepares the Nuxt environment for test-  
ing by configuring the necessary beforeAll, beforeEach, after-  
Each, and afterAll hooks, ensuring your tests run within a correctly set  
up Nuxt context. createPage, on the other hand, allows you to create a  
configured Playwright browser instance and optionally navigate to a specif-  
ic path on your running server. We’ll use it to create an instance from the  
quiz page to be able to simulate the user actions.  
Let’s begin by creating our E2E test file, app.spec.ts, at the root of our  
project, then add the following code\:  
342 import \{ describe, expect, it \} from 'vitest'  
import questions from '\~/data/questions'  
import \{ setup, createPage \} from '@nuxt/test-uti  
describe\('E2E Testing for the Quiz Feature in app  
async \(\) =\> \{  
await setup\(\)  
\}\)  
With the initial setup complete, we’re now ready to write specific test cases  
that will walk through the quiz game.  
# Writing E2E tests  
In our E2E testing sequence, we begin by verifying the initial state of the  
quiz game to ensure it loads correctly for the user. This includes checking  
for the presence of a question headline and four corresponding answer but-  
tons, which are fundamental to the quiz’s functionality. Here is the test case\:  
// app.spec.ts  
// ...inside the describe function, under setup  
it\('Verifies the quiz initial state\: one question  
and four answer buttons', async \(\) =\> \{  
const page = await createPage\('/'\)  
const h1Count = await page.locator\('h1'\).count\(  
expect\(h1Count\).toBe\(1\)  
343 const buttonCount =  
await page.locator\('button'\).count\(\)  
expect\(buttonCount\).toBe\(4\)  
\}\)  
Here is a breakdown of the code\:  
createPage\('/'\)\: This function initializes a new browser page in-  
stance and navigates to the root of our application, where the quiz is pre-  
sumed to start.  
page.locator\('h1'\).count\(\)\: This uses Playwright’s locator  
API to find all \<h1\> elements on the page, then counts them. We expect  
exactly one \<h1\> element, typically containing the quiz question.  
page.locator\('button'\).count\(\)\: Similarly, this line finds  
and counts all \<button\> elements, which should correspond to the  
quiz answer options. The expectation is to have exactly four buttons,  
each representing a potential answer.  
Now let’s move on to the next test case. In this test case, we aim to simulate  
a user accurately answering all quiz questions to verify that the application  
correctly transitions to the result page and displays the final score. This  
process involves the following\:  
1\. Navigating to the quiz  
2\. Iterating through questions\: For each question displayed, the test locates  
the correct answer based on our predefined questions data, then simu-  
344 lates a click on the corresponding answer button.  
3\. Verifying the result page \: After all questions have been answered cor-  
rectly, the quiz should transition to a result page. This page displays a  
message indicating the quiz is finished and shows the user’s score.  
4\. Checking the score\: The final part verifies that the score displayed  
matches the expected outcome of answering all questions correctly.  
Here is the test case\:  
test\(––, async \(\) =\> \{  
const page = await createPage\('/'\)  
for \(let i = 0; i \< 5; i++\) \{  
const questionText =  
await page.locator\('h1'\).textContent\(\)  
const question = questions.find\(q =\> q.body =  
questionText\)  
const answerText = question?.answers.find\(a =  
question.rightAnswerId\).  
await page.locator\(\`button\:has-text\("\$\{answer  
.click\(\)  
\}  
const finishedText =  
await page.locator\('h1'\).textContent\(\)  
expect\(finishedText\).toBe\('Finished'\)  
const score = await page.locator\('h2'\).textCont  
345 expect\(score\).toContain\('5 / 5'\)  
\}\)  
Some syntax highlights are as follows\:  
page.locator\(button\:has-  
text\("\$\{answerText\}"\)\).click\(\)\: Locates the button with  
the text matching the correct answer and simulates a click event  
expect\(finishedText\).toBe\('Finished'\)\: Checks whether  
the text Finished is displayed, indicating the quiz completion  
expect\(score\).toContain\('5 / 5'\)\: Validates that the final  
score, displayed within an \<h2\> element, correctly indicates all ques-  
tions were answered correctly  
NOTE  
In this test case, we’ve opted for a more general search approach by using  
element tags \(h1 and h2\) directly due to our knowledge of the page struc-  
ture—there’ s only one h1 element displaying the quiz question and a single  
h2 element showing the result. However, for more complex UIs or when  
multiple elements of the same type exist on a page, it’ s advisable to perform  
more specific searches, such as targeting elements with unique identifiers  
such as classes or IDs. This will enhance the test’ s precision, ensuring  
we’re interacting with the correct elements even in densely structured  
pages.  
346 Once we initiate the E2E test, be prepared for it to take a bit longer to com-  
plete compared to unit tests. This delay is because the test involves simulat-  
ing a real browser environment, requiring the page to fully load before any  
interactions \(such as clicking on answer buttons\) can occur. Your output in  
the terminal should look like this\:  
Figure 7.5\: E2E test output  
NOTE  
If this is the first time you’re using the Playwright library on your machine,  
you might encounter an error\:  
Looks like Playwright Test or Playwright was just  
347 **║** Please run the following command to download ne  
pnpm exec playwright install  
In this case, just run the command shown in the terminal, then retry the test.  
Some developers have reported the need to run the following as well, in or-  
der to make Playwright work properly\:  
pnpm exec playwright-core install  
With our E2E tests now complete, let’s shift our focus to exploring Vitest’s  
interactive UI and understanding test coverage. This will help us visualize  
our testing efforts and ensure complete coverage across our application.  
# Exploring Vitest UI and test  
# coverage tools  
In our journey toward mastering testing with Vitest, two powerful tools  
stand out for their ability to enhance our development workflow\: Vitest UI  
and test coverage tools. Vitest UI offers an interactive interface for running  
tests and visualizing results in real time, making it easier to manage and de-  
bug tests. Meanwhile, the test coverage tool provides insights into which  
parts of our code are thoroughly tested and which areas might need more  
attention.  
348 To incorporate these tools into our project, we first need to install them\:  
\$ pnpm i -D @vitest/coverage-v8 @vitest/ui  
With the packages installed, we’ll adjust our testing script to enable both  
the UI and coverage reporting\:  
// package.json script  
"test"\: "vitest --ui --coverage"  
After making this adjustment, stop any currently running test processes and  
restart them to activate the changes. Upon reinitiating the tests, you’ll ob-  
serve that Vitest launches a UI project, indicated by a message in the termi-  
nal similar to this\:  
Figure 7.6\: Vitest UI dashboard URL  
By navigating to this URL in your web browser, you’re greeted by the  
Vitest UI dashboard. Let’s explore the UI and coverage reports to gain  
349 deeper insights into our testing landscape and identify opportunities for  
improvement.  
The Dashboard interface summarizes key metrics, including the total num-  
ber of tests run, the breakdown of passed and failed tests, the total number  
of test files involved, and the execution time for all tests. This overview  
provides a clear snapshot of the project’s testing health.  
Figure 7.7\: Vitest UI Dashboard  
350 As you explore the sidebar, you’ll find a list of your project’s test files.  
Clicking on one, for example, app.spec.ts, opens a detailed view of  
that specific test file. In this detailed view, you’ll see each test case listed  
along with its execution status—passed, failed, or skipped. Also, you’ll be  
able to re-run the test cases in this file. This allows for easy identification of  
which tests have succeeded and which may require further attention or  
debugging.  
Figure 7.8\: Vitest test file  
To gain insights into our code’s test coverage, a simple click on the cover-  
age icon \(located in the top-left corner, next to the play button\) reveals a  
new dimension of our project’s health. The coverage overview presents a  
summary at the top of tested files, tested statements, branches, functions,  
351 and lines. Below the summary, a table lists each file alongside its coverage  
percentage  
Let’s search for the stores folder and click on it. It reveals that 88.46% of  
the code and 50% of functions have been tested.  
Figure 7.9\: Vitest coverage UI  
A closer look at an individual file within this folder highlights untested code  
segments, such as the restartQuiz function—confirming areas where  
our test coverage could be improved.  
352 Figure 7.10\: Vitest file coverage  
This level of detail pinpoints exactly where we need to enhance our tests.  
Such an approach to identifying untested code is invaluable, guiding us to  
achieve more comprehensive test coverage and, by extension, a more reli-  
able application.  
353 Our exploration of Vitest UI and test coverage concludes here, setting the  
stage for a summary of our journey through strong testing practices in en-  
hancing the quiz game application.  
# Summary  
Chapter 7 steered us through the crucial role of testing in the development  
of a quiz game application with Nuxt 3. We began by laying the ground-  
work with unit testing, utilizing Vitest to test the logic of our Pinia store and  
components, ensuring their reliability. By simulating user interactions and  
asserting expected outcomes, we verified the functionality of critical parts  
of our application.  
Transitioning to E2E testing, we employed Playwright to mimic real-user  
scenarios, from navigating through quiz questions to completing the game.  
This phase reinforced our application’s user experience and functionality,  
highlighting the significance of testing in identifying and rectifying poten-  
tial issues before they affect users.  
The journey concluded with an exploration of Vitest UI and coverage tools,  
which illuminated untested code segments and provided a visual and inter-  
active approach to managing our test suite. This not only enhanced our test-  
ing efficiency but also deepened our understanding of test coverage’s im-  
pact on application quality.  
354 Looking ahead, Chapter 8 levels up our skills by creating a custom transla-  
tion module in Nuxt 3. This next chapter will guide us through the intrica-  
cies of i18n \(Internationalization\), from building a custom module to inject-  
ing it with the necessary components and functionalities to facilitate seam-  
less language switching and localization.  
# Practice questions  
What is the purpose of unit testing in a Vue.js application?  
Describe the process of setting up Vitest in a Nuxt 3 project.  
Explain how to use the describe and it blocks to structure your tests  
in Vitest.  
What role does expect play in a test case?  
How can you mock a user interaction, such as clicking a button, in a unit  
test?  
How do you test a Vue component that interacts with a Pinia store?  
How can you simulate browser interactions in an E2E test?  
What is the purpose of the createPage function in Nuxt’s test utils?  
How can Vitest’s UI and coverage tools help improve the quality of your  
tests?  
# Further reading  
Vitest official website\: https\://vitest.dev/  
355 Why Vitest\: https\://vitest.dev/guide/why.html\#why-vitest  
Vue testing\: https\://vuejs.org/guide/scaling-up/testing  
Pinia testing\: https\://pinia.vuejs.org/cookbook/testing.html  
Nuxt testing\: https\://nuxt.com/docs/getting-started/testing  
Vitest UI\: https\://vitest.dev/guide/ui  
Vitest coverage\: https\://vitest.dev/guide/coverage  
356 8  
# Creating a Custom Translation  
# Module in a Nuxt 3 Monorepo  
In Chapter 8, we will learn how to build a custom translation module  
within a Nuxt 3 monorepo. This chapter is designed to guide you through  
the complexities of monorepo setup and modular development, providing a  
complete foundation for managing large-scale projects efficiently.  
We will start by setting up a monorepo using pnpm workspaces, emphasiz-  
ing the benefits of centralized management for multiple interlinked projects.  
You will also learn how to craft a custom translation module, embed-  
ding it seamlessly into a Nuxt application, by detailing the steps to create,  
configure, and extend this module with additional functionality through  
components and plugins.  
This chapter demonstrates the modularity and reusability that monorepos  
facilitate. Each section aims to equip you with the skills to enhance your  
Nuxt applications with scalable and maintainable modules, preparing you  
for future projects that require advanced architecture solutions.  
In this chapter, we’re going to cover the following main topics\:  
357 Setting up a Nuxt monorepo  
Developing a custom translation module  
Configuring translation module options  
Expanding the module with plugins, components, and composables  
Future directions  
# Technical requirements  
The code files for this chapter can be found at .  
The CiA video for this chapter can be found on https\://packt.link/kdT64  
# Essential background –  
# fundamentals of testing  
In this chapter, we’re diving into setting up a Nuxt 3 monorepo for creating  
a custom translation module. A monorepo is a strategy where you  
manage all your project’s parts within a single repository. It’s like keeping  
all your development eggs in one basket, which simplifies many aspects of  
development, especially for large projects. In our setup, the monorepo will  
include not just a Nuxt application but a series of packages and apps, each  
contributing different functionalities to the overarching system.  
Monorepos are valuable for the following reasons\:  
358 Unified version control\: Everything from code to documentation is stored  
in one place, making it easier to track changes and maintain versions.  
Simplified dependency management\: All parts of the project use the  
same dependencies, which means they all get updated at once, reducing  
compatibility issues.  
Enhanced code reusability\: Monorepos allow teams to easily share  
common code and resources across multiple projects within the same  
repository. This facilitates reusing packages, reducing redundancy, and  
enhancing consistency across different applications.  
Now we understand monorepos’ role in handling complex projects efficient-  
ly, we’ve set the stage for exploring how they facilitate the development of  
extensive applications.  
# Setting up a Nuxt monorepo  
In this chapter, we begin by establishing the foundational structure for our  
Nuxt monorepo. Instead of starting with the typical Nuxt project creation  
command, we’ll approach this setup by first crafting a dedicated environ-  
ment that supports a multi-package architecture.  
Let’s start by creating a new directory specifically for this chapter’s project  
to keep our workspace organized and separate from other projects\:  
359 \$ mkdir chapter08  
\$ cd chapter08  
Then, use pnpm to initialize a new project. This step involves creating a  
package.json file that will define our workspace and manage our  
project’s dependencies\:  
\$ pnpm init  
Now, you can open the newly created project directory in Visual Studio  
Code or your preferred IDE.  
To designate our directory as a monorepo, we introduce a pnpm-work-  
space.yaml file. This configuration file plays a crucial role in managing  
multiple packages within a single repository efficiently. In this, we specify  
where the packages of our monorepo are located. The structure we’ve cho-  
sen categorizes our workspace into two primary directories\:  
packages/\*\: This directory is reserved for shared libraries or modules  
that can be reused across multiple applications within the monorepo. In  
our case, this is where the translation module will reside.  
apps/\*\: Dedicated to housing applications that may depend on any  
shared modules. Our Nuxt application demonstrating the use of the  
360 translation module will be placed here.  
Here is the code of the file\:  
\# pnpm-workspace.yaml  
packages\:  
- 'packages/\*'  
- 'apps/\*'  
Now, we’re ready to set up the website application that we’ll use to include  
the custom Nuxt module inside it.  
# Creating a website application  
To set up our project directories properly within the monorepo, begin by  
creating an apps directoy\:  
\$ mkdir apps  
\$ cd apps  
Within the apps directory, we’ll establish a new Nuxt application using the  
latest version of Nuxt 3\:  
361 \$ pnpm dlx nuxi@latest init demo-website  
After initializing the Nuxt application, you can typically start the applica-  
tion by navigating into the demo-website directory and running pnpm  
dev. However, leveraging the full capability of our monorepo setup facili-  
tated by pnpm workspaces, we can streamline this process. First, ensure the  
project name within the apps/demo-website/package.json file is  
set appropriately to reflect our specific setup\:  
// apps/demo-website/package.json  
\{  
"name"\: "demo-website"  
// ...rest of the file  
\}  
After updating the project name, you can now execute commands from the  
root of the monorepo. This is done using pnpm’s --filter option, which  
targets specific subprojects. To run our Nuxt application from the monorepo  
root, use the following command\:  
\$ pnpm --filter demo-website dev  
362 This command tells pnpm to apply the dev script specifically to the  
demo-website project, allowing you to manage and run multiple  
projects within your monorepo seamlessly from a central location.  
Going further, you can create a custom script in the root package.json  
file, which calls this command under the hood\:  
// package.json  
\{  
"scripts"\: \{  
"website\:dev"\: "pnpm --filter demo-website de  
\},  
\}  
Then, run this command in the root folder\:  
\$ pnpm website\:dev  
The application should start, and you should see a welcome page as usual.  
With our application set up, let’s continue to create a translation  
module.  
363 Developing a custom translation  
# module  
As we continue creating our custom translation module, the first step  
in this process is to set up a dedicated directory for our shared packages.  
Navigate to the root of your monorepo and create a directory named pack-  
ages. This directory will host all our shared logic, including the new  
translation module\:  
\$ mkdir packages  
\$ cd packages  
Once inside the packages directory, we will use Nuxt’s module template  
to kickstart our translation module\:  
\$ pnpm dlx nuxi init -t module translation  
This command sets up a new module with a starter template provided by  
Nuxt, complete with several essential directories and files\:  
module.ts\: This is the core file where our module is defined. It acts as  
the entry point and defines the configuration and setup of the module.  
364 runtime/plugin.ts\: This file serves as an example plugin. It’s a  
place to extend the module with additional functionalities such as Vue  
plugins and helper functions.  
playground/\: Contains a Nuxt application with our module already  
installed. This environment is useful for testing and demonstrating the  
module’s functionality.  
test/\: A directory set up for writing tests for the module to ensure its  
functionality and stability.  
Let’s discover the module.ts file to understand its structure and  
components\:  
import \{ defineNuxtModule, addPlugin, createResol  
export interface ModuleOptions \{\}  
export default defineNuxtModule\<ModuleOptions\>\(\{  
meta\: \{  
name\: 'my-module',  
configKey\: 'myModule',  
\},  
defaults\: \{\},  
setup\(\_options, \_nuxt\) \{  
const resolver = createResolver\(import.meta.u  
addPlugin\(resolver.resolve\('./runtime/plugin  
\},  
\}\)  
365 This script outlines the basic structure of a Nuxt pnpm module using de-  
fineNuxtModule. The meta property defines the module’s name and  
configuration key. The setup function is where module-specific logic is  
added, such as registering plugins, using Nuxt hooks, adding an auto import  
directory, or even extending routes.  
The createResolver function helps in resolving paths correctly, ensur-  
ing that any URL is added without issues related to path resolution.  
Next, let’s use this module in our application.  
# Installing the module in our application  
First, rename the newly created module directory from my-module to  
translation to better reflect its purpose. This involves updating the  
name in the module\:  
// packages/translation/src/module.ts  
export default defineNuxtModule\<ModuleOptions\>\(\{  
name\: 'translation',  
configKey\: 'translation'  
\}  
// … rest of code  
\}\)  
Also, update the name in the package configuration\:  
366 // packages/translation/package.json  
\{  
"name"\: "translation",  
// Rest of configuration  
\}  
Then, ensure that build files of the modules are generated. To do so, run the  
following command in the translation  
module root folder\:  
Packages/translation\> \$ pnpm dev\:prepare  
This prepares local files for development.  
With the module configured, you can now add it to our demo website. From  
the root of your monorepo, run the following command to link the module  
locally to your application\:  
\$ pnpm --filter demo-website add --workspace tran  
The --workspace flag tells pnpm to resolve the translation package  
from the local workspace instead of fetching it from an external registry.  
367 This setup ensures that the web app recognizes our packages and that any  
changes to the module are immediately available to the application during  
development.  
To ensure that the module was added successfully, check the package.j-  
son file of your demo website\:  
// apps/demo-website/package.json  
\{  
"dependencies"\: \{  
"nuxt"\: "\^3.11.2",  
"translation"\: "workspace\:\^",  
"vue"\: "\^3.4.21",  
"vue-router"\: "\^4.3.0"  
\}  
\}  
The translation dependency should now be listed and pointing to your  
local workspace.  
Finally, add the module to your Nuxt configuration to activate it within your  
project\:  
// apps/demo-website/nuxt.config.ts  
export default defineNuxtConfig\(\{  
368 devtools\: \{ enabled\: true \},  
modules\: \['translation'\],  
\}\)  
Then, start your application to see the module in action\:  
\$ pnpm website\:dev  
Look for the console output or other indicators from the module’s default  
setup to confirm that it’s functioning\:  
Figure 8.1\: Translation plugin injected  
This message, if visible, confirms that the translation module’s exam-  
ple plugin is actively injecting functionality into your Nuxt application.  
With these steps completed, your demo website now successfully incorpo-  
rates the translation module. We’re now ready to customize the mod-  
ule further and define specific options specified to our project’s needs.  
369 Configuring translation module  
# options  
Before we start adding options for our translation module, it’s essen-  
tial to understand how Nuxt modules typically offer configuration flexibili-  
ty. Similar to how the official Nuxt i18n module allows configuration of  
defaultLocale and locales through the Nuxt config, we aim to pro-  
vide a similar configurability in our custom module. This setup will enable  
users to define and manage locales dynamically through the module’s  
options.  
In our translation module, we begin by defining the expected options  
for configuration. This involves setting up an interface in types.ts that  
outlines the structure of the configuration options\:  
// packages/translation/src/types.ts  
export type ModuleOptions = \{  
defaultLocale\: string;  
locales?\: LocaleOption\[\];  
\};  
export type LocaleOption = \{  
name\: string;  
370 file\: string;  
\};  
Here, ModuleOptions allows for specifying a defaultLocale in-  
stance and an array of locales instances, each with a name and a file path  
pointing to the translations. We’ll discuss later on how to import these files.  
The next step involves integrating these types into the main module file.  
Import the defined types into module.ts and use them to strongly type  
the module’s configuration. Make sure to remove the empty defined  
interface\:  
// module.ts  
import type \{ ModuleOptions \} from './types';  
export default defineNuxtModule\<ModuleOptions\>\(\{  
meta\: \{  
name\: 'translation',  
configKey\: 'translation',  
\},  
defaults\: \{  
defaultLocale\: 'en',  
locales\: \[\],  
\},  
setup\(options, nuxt\) \{  
// Module setup logic here  
371 \},  
\}\);  
The defaults object is updated to provide a fallback for defaultLo-  
cale and an empty array for locales, ensuring that the module can initial-  
ize even if specific configurations are not provided.  
To utilize the module’s capabilities fully, add it to the nuxt.config.ts  
file of your Nuxt application, specifying the options like so\:  
// nuxt.config.ts  
export default defineNuxtConfig\(\{  
devtools\: \{ enabled\: true \},  
modules\: \['translation'\],  
translation\: \{\},  
\}\)  
Upon specifying these options, Nuxt’s intelligent configuration handling  
should offer autocomplete suggestions for translation options, reflect-  
ing the integration of our module options into the Nuxt ecosystem\:  
372 Figure 8.2\: IntelliSense translation options  
When adjusting settings in the Nuxt configuration file, you should be able to  
see IntelliSense suggestions that validate the correct integration of our mod-  
ule options, confirming that the setup is recognized by Nuxt.  
After setting up basic configuration handling in our module, the subsequent  
task involves implementing logic within the module to dynamically load  
and apply the specified locales based on the provided configuration options.  
# Reading local files inside the module  
Let’s integrate local file reading capabilities into our Nuxt module to handle  
translations effectively. This functionality will enable our module to dynam-  
ically load translation files specified in the module’s configuration.  
Begin by defining the expected structure of the translation files. Assume  
each file contains flat key-value pairs representing localized strings. For in-  
stance, set up the English and French localization files within the demo  
website\:  
English localization file\:  
// apps/demo-website/locales/en.json  
\{  
373 "welcome"\: "Welcome"  
\}  
French localization file\:  
// apps/demo-website/locales/fr.json  
\{  
"welcome"\: "Bienvenue"  
\}  
Then, modify your Nuxt configuration file and add these files to the lo-  
cales array\:  
// nuxt.config.ts  
export default defineNuxtConfig\(\{  
// other options  
translation\: \{  
locales\: \[  
\{ name\: 'en', file\: 'locales/en.json' \},  
\{ name\: 'fr', file\: 'locales/fr.json' \},  
\],  
\},  
\}\)  
Now, let’s go back to the module to process these files. Start by defining a  
type for the messages\:  
374 // packages/translation/types.ts  
// other types  
export type Messages = \{  
\[key\: string\]\: string;  
\};  
Remember that we’re assuming the locales translation files will be a flat  
key-value pair. You can handle nested objects, but to simplify the process,  
we’ll only use one level of keys.  
Finally, update your module’s setup function to loop through the locales,  
resolve their paths, read their contents, and then parse them into a usable  
format. Here’s how you can do this\:  
// packages/translation/module.ts  
import \{ readFileSync \} from 'node\:fs'  
import \{ defineNuxtModule, createResolver \} from  
import type \{ Messages, ModuleOptions \} from './t  
export default defineNuxtModule\<ModuleOptions\>\(\{  
meta\: \{  
name\: 'translation',  
configKey\: 'translation',  
\},  
defaults\: \{  
defaultLocale\: 'en',  
375 \},  
async setup\(options, nuxt\) \{  
const localesResolver =  
createResolver\(nuxt.options.srcDir\)  
const messages\: Messages = \{\}  
for \(const locale of options.locales ?? \[\]\) \{  
const filePath = localesResolver.resolve\(lo  
const fileContents = await readFileSync\(fil  
'utf-8'\)  
const \_messages = JSON.parse\(fileContents\)  
messages\[locale.name\] = \_messages  
\}  
nuxt.options.runtimeConfig.public.translation  
...options,  
messages,  
\}  
\}  
\}\);  
Here’s a code breakdown\:  
localesResolver\: Resolves paths relative to the project’s source di-  
rectory, which is stored in nuxt.options.srcDir  
readFileSync\: Synchronously reads the content of the file at the re-  
solved path  
JSON.parse\: Converts the JSON string from the file into a JavaScript  
object  
376 nuxt.options.runtimeConfig.public.translation\:  
Stores messages in the Nuxt runtime config, making them accessible  
throughout the application via the useRuntimeConfig\(\)  
composable  
To verify the integration, modify the main application component to display  
the loaded messages\:  
\<!-- apps/demo-website/app.vue --\>  
\<template\>  
\<div\>\{\{ translation \}\}\</div\>  
\</template\>  
\<script setup lang="ts"\>  
const config = useRuntimeConfig\(\);  
const translation = config.public.translation;  
\</script\>  
Restart your Nuxt application and navigate to the home page. You should  
now see the translation options displayed, as well as the localization  
messages\:  
377 Figure 8.3\: Displaying translation array output  
Now that our module can load translation messages, we’ll enhance its func-  
tionality by adding a plugin to create a global helper function. This function  
will allow us to easily retrieve and display translated strings throughout the  
Nuxt application.  
# Expanding the module with  
# plugins, composables, and  
# components  
We’ll start by developing a composable that manages the user’s preferred  
language. This composable will help in retrieving the correct locale from  
cookies or default to the configured locale from our module options.  
378 Inside the module, create a new file for the composable\: runtime/com-  
posables/useTranslation.ts.  
Develop the composable function as follows\:  
import \{ computed, useCookie, useRuntimeConfig \}  
export default \(\) =\> \{  
const config = useRuntimeConfig\(\)  
const translation = config.public.translation  
const locale = useCookie\('defaultLocale'\)  
const locales = translation.locales  
if \(!locale.value\) locale.value =  
translation.defaultLocale  
const messages = computed\(\(\) =\> \{  
const key = locale.value || translation.defau  
return translation.messages\[key\]  
\}\)  
return \{ locale, locales, messages \}  
\}  
Here’s a code breakdown\:  
useRuntimeConfig\: Accesses runtime configuration, which includes  
translation settings  
useCookie\: A ref that manages cookie values\: get – set, particu-  
larly for storing user’s locale preference  
379 computed\: Reactively calculates the correct messages to use based on  
the current locale  
NOTE  
When developing a Nuxt module, it’ s essential to import any function or  
composable that is auto-imported by default in a Nuxt app explicitly from  
\#imports. This approach ensures that the module can utilize Nuxt’ s auto-  
import feature, which is not inherently available in the module’ s scope as it  
would be within a Nuxt application.  
To ensure our composable is easily accessible within the Nuxt app, we’ll  
automate its import. Update the module.ts file to auto-import the com-  
posables directory\:  
import \{ defineNuxtModule, createResolver, addImp  
export default defineNuxtModule\(\{  
meta\: \{  
name\: 'translation',  
configKey\: 'translation',  
\},  
setup\(options, nuxt\) \{  
// Existing setup code...  
const resolver = createResolver\(import.meta.u  
addImportsDir\(resolver.resolve\('runtime/compo  
380 \}  
\}\);  
addImportsDir automatically imports files from the specified directory,  
making the composables readily available to the Nuxt app without manual  
import statements. Thus, this folder will act exactly like the compos-  
ables folder, which is inside your Nuxt application!  
With the composable ready, let’s test its functionality. Update app.vue as  
follows\:  
\<template\>  
\{\{ messages.welcome \}\}  
\</template\>  
\<script setup lang="ts"\>  
const \{ messages \} = useTranslation\(\);  
\</script\>  
This setup should display a welcome message based on the default or user-  
defined locale. Because we didn’t update the default locale, the module will  
use 'en' as the default value, as it is configured in the module file\:  
381 Figure 8.4\: Messages array based on the default locale  
Now, let’s ensure that our module can respect locale overrides specified in  
the Nuxt configuration\:  
// nuxt.config.ts  
export default defineNuxtConfig\(\{  
translation\: \{  
defaultLocale\: 'fr',  
locales\: \[  
\{ name\: 'en', file\: 'locales/en.json' \},  
\{ name\: 'fr', file\: 'locales/fr.json' \}  
\]  
\}  
\}\);  
382 By setting defaultLocale to 'fr' and accessing the app in a private  
window \(to clear previous cookies\), a French translation should appear,  
demonstrating the flexibility and dynamic capability of our translation  
module\:  
Figure 8.5\: Messages array based on the default locale  
Now, let’s move forward to enhance the module with a plugin that provides  
a global \$t global function for fetching translated messages directly. This  
will simplify the use of translations throughout the application.  
# Creating a \$t helper function  
First, we create a new translate.ts file inside the runtime/plug-  
ins directory of the module. This file will contain the logic for our transla-  
tion function. Here’s how to write a plugin to fetch translations\:  
383 import useTranslation from '../composables/useTra  
import \{ defineNuxtPlugin \} from '\#imports'  
export default defineNuxtPlugin\(async \(\) =\> \{  
const \{ messages \} = useTranslation\(\)  
// Translator function  
const t = \(key\: string\) =\> \{  
return messages.value\[key\] || key // Return  
transla  
or key  
found  
\}  
return \{  
provide\: \{ t \}  
\}  
\}\)  
Here’s a code breakdown\:  
We’re importing useTranslation, which manages the translation  
state and provides translations based on the current locale.  
We’re defining plugins using defineNuxtPlugin. The \#imports  
alias is used here to automatically resolve to the correct utility versions  
provided by Nuxt.  
We’re implementing a t translator function that takes a key as an argu-  
ment. It attempts to retrieve the translation for this key from the mes-  
384 sages object obtained from useTranslation. If a translation for  
the key doesn’t exist, it defaults back to the key itself.  
We’re providing Translator as a global helper function by adding  
return \{ provide\: \{ t \} \} to the end of the plugin definition  
function. By providing t, any component within the application can use  
this function to render translated text using\: \$t. Nuxg automatically add  
\$ to any function provided by nuxt module to access it globally.  
Next, integrate this plugin into our Nuxt module by updating the mod-  
ule.ts file\:  
import \{  
defineNuxtModule,  
addPlugin,  
createResolver,  
addImportsDir,  
\} from '@nuxt/kit'  
export default defineNuxtModule\(\{  
setup\(\_options, nuxt\) \{  
// …previous setup  
addPlugin\(resolver.resolve\('./runtime/plugins  
\},  
\}\)  
Finally, update your application’s main component, app.vue, to use the  
\$t function\:  
385 \<template\>  
\<div\>\{\{ \$t\('welcome'\) \}\}\</div\>  
\</template\>  
Once implemented, test by running your application and navigating. You  
should see the translated strings rendering based on the active locale\:  
Figure 8.6\: \$t function output  
For the final expansion, we’ll create a component that allows users to  
switch languages directly from their web interface.  
386 Setting up a language switcher component  
We’ll create a language switcher component using the menu component  
from the @nuxt/ui package. Firstly, install the @nuxt/ui package with-  
in our module’s scope. From the root of your project, run the following  
command\:  
\$ pnpm --filter translation add @nuxt/ui  
In the module.ts file, verify and install @nuxt/ui if it’s not already  
present in the host application, and ensure to auto-import the new compo-  
nents directory. Nuxt Kit provides various helper functions to achieve  
this\:  
hasNuxtModule\: Checks whether @nuxt/ui is already installed in  
the host application  
installModule\: Dynamically installs @nuxt/ui if it is not found  
addComponentsDir\: Adds the directory containing our custom com-  
ponents to Nuxt’s auto-import feature, allowing these components to be  
used without manual import  
Here’s the updated version of the module.ts setup function\:  
387 export default defineNuxtModule\(\{  
async setup\(\_options, nuxt\) \{  
// other configuration  
if \(!hasNuxtModule\('@nuxt/ui'\)\) \{  
await installModule\('@nuxt/ui'\)  
\}  
const resolver = createResolver\(import.meta.u  
addComponentsDir\(\{  
path\: resolver.resolve\('runtime/components  
\}\)  
\}  
\}\)  
Now, create a new LanguageSwitcher.vue component within the  
runtime/components directory. This component will utilize the  
USelectMenu UI component from @nuxt/ui to render a dropdown for  
language selection\:  
\<template\>  
\<USelectMenu  
v-model="locale"  
\:options="locales"  
value-attribute="name"  
option-attribute="name"  
/\>  
388 \</template\>  
\<script setup lang="ts"\>  
import useTranslation from '../composables/useTra  
const \{ locale, locales \} = useTranslation\(\)  
\</script\>  
Here’s an explanation of the components\:  
USelectMenu\: A UI component from @nuxt/ui that renders a drop-  
down menu. It binds to the locale reactive variable and updates it  
based on user selection.  
locales\: An array of available languages that populate the dropdown  
options.  
To ensure the LanguageSwitcher component is functioning correctly,  
run the following command\:  
\$ pnpm --filter translation dev\:prepare  
This prepares the module with the new component. Then, update the ap-  
p.vue file in your Nuxt application to use the LanguageSwitcher  
component\:  
\<!-- apps/demo-website/app.vue --\>  
389 \<template\>  
\<div\>\{\{ \$t\('welcome'\) \}\}\</div\>  
\<LanguageSwitcher /\>  
\</template\>  
Refresh your browser to test the functionality. You should see a welcome  
message as well as a select menu that contains two locales\: en and fr.  
Changing the language using the dropdown should dynamically update the  
welcome message, demonstrating the reactive translation updates across the  
application\:  
390 Figure 8.7\: LanguageSelector component  
Note that we managed to use the @nuxt/ui package within the module  
without direct installation in the host application, exemplifying the flexibili-  
ty of Nuxt modules. We can still install this package in our host application,  
and this won’t result in any error due to the hasNuxtModule checker  
function.  
391 Now that we’ve finished implementing our custom modules in Nuxt 3, let’s  
look ahead to how we can further refine and expand these concepts in real-  
world applications.  
# Future directions  
As we conclude this chapter, it’s important to reflect on the underlying prin-  
ciples that guided our journey through building a custom i18n module  
within a monorepo structure. The focus was not on the aesthetics of the ap-  
plication but on the architecture—specifically, the creation of a module sys-  
tem. This approach is particularly beneficial for large-scale projects where  
managing complexity efficiently is crucial.  
# POS system example  
In real-world scenarios, especially in enterprise environments, applications  
are rarely simple. They often consist of numerous interconnected parts, such  
as a point-of-sale \(POS\) system, which might include modules for handling  
orders, promotions, customer management, and more. Each of these mod-  
ules can be designed to operate independently, containing its own pages,  
logic, components, and state management.  
In such a system, different modules can be developed and maintained inde-  
pendently. For instance, a promotions module might handle all promotional  
offers and discount logic. If the business decided to overhaul its promotions  
392 strategy, only the promotions module would need to be updated or replaced,  
minimizing risk and disruption to other parts of the system.  
# E-commerce platform example  
Modular systems are particularly beneficial in complex e-commerce plat-  
forms, where different functionalities such as product catalog management,  
order processing, payment integrations, and user profiles are essential yet  
distinct components. Each module can be separately developed, tested, and  
deployed, allowing for flexible updates and scalability.  
For example, the payment integration module might support various pay-  
ment gateways and handle all the complexities of transactions. If new pay-  
ment methods need to be added or existing ones need updates due to regula-  
tory changes, developers can focus solely on this module. This modular ap-  
proach speeds up development and deployment and ensures that updates in  
one area, such as payment processing, do not inadvertently affect unrelated  
parts such as the product catalog or user management systems.  
# Final thoughts  
The goal of this chapter was to underscore the transformative impact of  
modular architecture on the development and scalability of large-scale ap-  
plications. By adopting a modular approach, developers can efficiently  
manage complex systems, facilitating easier updates, testing, and expan-  
393 sion. Moving forward, apply the strategies explored here to structure your  
projects effectively.  
Additionally, this journey highlighted the great developer experience pro-  
vided by Nuxt, which simplifies the creation of custom modules. Nuxt’s  
framework supports extensive customization, allowing for seamless integra-  
tion of options, components, plugins, and composables. This flexibility en-  
sures our applications meet current needs while also being well prepared for  
future advancements and integrations.  
# Summary  
In this chapter, we spotlit the creation of a custom translation module  
within a Nuxt 3 monorepo, designed to streamline the management of large-  
scale projects. We began by establishing a monorepo setup using pnpm,  
which allowed us to structure our project into separate but interconnected  
workspaces. This foundation supported the development of our transla-  
tion module, starting from a basic Nuxt module template. By configuring  
module options, we customized the module to handle multiple languages.  
Further enhancing the module, we integrated plugins, components, and  
composables, providing a dynamic and user-friendly way to switch lan-  
guages and manage translations.  
394 This practical application demonstrated how modular architecture enhances  
code reuse while also simplifying enhancements and scalability. The con-  
cluding discussion on future directions explored the potential for where we  
can use this modular approach in other domains, such as e-commerce or en-  
terprise systems, illustrating the broad applicability and flexibility of the  
techniques learned.  
This chapter serves as a blueprint for developers looking to fully utilize  
Nuxt’s modular capabilities in their projects.  
# Practice questions  
Describe the process of setting up a monorepo with pnpm for a Nuxt 3  
project.  
What are the key benefits of using a monorepo structure in large-scale  
Nuxt 3 projects?  
How do you initiate a new Nuxt 3 module within a monorepo?  
How can you add a Nuxt module to a Nuxt application within the same  
monorepo?  
What does the addPlugin function do within a Nuxt module?  
What is the role of runtimeConfig in a Nuxt module?  
Describe the purpose of using createResolver within a Nuxt  
module.  
395 Explain how the hasNuxtModule and installModule functions  
are used in a module setup.  
How do you add and use a composable within a Nuxt module?  
How can you configure a Nuxt module to automatically import compo-  
nents from a specified directory when the module is used in a project?  
# Further reading  
Nuxt modules\: https\://nuxt.com/docs/guide/concepts/modules  
Module author guide\: https\://nuxt.com/docs/guide/going-  
further/modules/  
pnpm workspaces\: https\://pnpm.io/workspaces  
Nuxt lifecycle hooks\: https\://nuxt.com/docs/guide/going-further/hooks  
Nuxt auto-imports concept\: https\://nuxt.com/docs/guide/concepts/auto-  
imports  
396 Index  
As this ebook edition doesn't have fixed pagination, the page numbers be-  
low are hyperlinked for reference only, based on the printed edition of this  
book.  
Symbols  
\$fetch  
used, for exploring data fetching in Nuxt 3 78  
\$t helper function  
creating 193-195  
A  
API  
testing 79, 80  
app.config.ts file 76  
assets folder  
images, managing in 24-28  
397 authentication routes  
overriding 108  
Auth Pages  
setting up 110-113  
B  
BaseHeader component  
creating 45-50  
C  
CitiesLookup component  
creating 82-85  
code editor 5  
code splitting 4  
component path 52  
components  
styling within 32-34  
398 Composition API 30  
custom error page  
creating 63, 65  
custom og\:image  
creating, for recipe page 145-148  
custom translation module  
\$t helper function, creating 193-195  
developing 182, 183  
expanding, with components 190-193  
expanding, with composables 190-193  
expanding, with plugins 190-193  
installing 183-185  
language switcher component, setting up 195-197  
local files, reading 187-190  
options, configuring 185-187  
399 D  
Dasyjs for formatting dates  
global FromNow function, using for property details page 67  
initializing, with configuration 66, 67  
installing 66  
plugin directory and file, setting up 66  
used, for creating plugin 65  
data fetching 72-74  
API, testing 79, 80  
CitiesLookup component, creating 82-85  
exploring, with \$fetch in Nuxt 3 78  
global types, defining 80, 81  
OpenWeatherMap, account creating 78  
useRuntimeConfig, utilizing to expose application configuration 81  
weather data, fetching 86, 87  
400 Don’t-Repeat-Yourself \(DRY\) principle 36  
dynamic listing page  
creating 59-62  
dynamic site maps  
generating, for recipe-sharing site 149-151  
E  
e-commerce platform example 198  
End-to-End \(E2E\) testing 153  
setting up 170  
writing 171-174  
writing, for quiz game 170  
G  
global types  
defining 80, 81  
Google Fonts website 21  
401 H  
Hello Nuxt app  
creating 5-8  
default project structure 8, 9  
initialization 6  
home page  
Category Card Components, creating 53, 54  
component path 52, 55  
creating 50-57  
pages directory 50  
property, creating 53-55  
hot module replacement \(HMR\) 7  
I  
images  
managing, in assets folder 24-28  
402 improved search engine rankings  
structured data, implementing 138, 139  
input validation  
implementing 109  
Joi, using 113, 114  
J  
Joi  
reference link 113  
using, for input validation 113, 114  
L  
language switcher component  
setting up 195-197  
Lato font  
embedding 20  
Lato, integrating into Nuxt project  
403 font, adding manually to nuxt.config.ts 21  
@nuxtjs/google-fonts package, using 21, 22  
link prefetching 4  
M  
metadata page  
defining 133  
overriding 137, 138  
project structure, setting up 133-135  
site configuration, setting up with nuxt SEO 135-137  
modular architecture 198  
N  
Node.js 5  
reference link 5  
Nuxt  
\$fetch 78  
404 features 3  
origin 3  
static site generation \(SSG\) capability 4  
useAsyncData 78  
useFetch 78  
Nuxt 3 2  
architecture 3  
built, on Vue 3  
creating, with Supabase integration 107  
data fetching, exploring with \$fetch 78  
installing 5  
integrating, with Supabase 107  
performance optimizations 4  
prerequisites 5  
principles 3  
405 real estate listing project, setting up 40-44  
recommended extensions 9  
universal rendering and static site generation 4  
Nuxt 3 layouts 40  
Nuxt 3 monorepo  
setting up 180  
Nuxt 3 plugins 40  
Nuxt 3 project  
Auth Pages, setting up 110-113  
Joi, using for Input Validation 113, 114  
Required Modules, installing 109  
Nuxt 3 routing 40  
Nuxt monorepo  
setting up 180, 181  
website application, creating 181, 182  
406 Nuxtr 11  
features 11, 13  
Nuxt UI 71, 74  
integrating, in weather dashboard 75-77  
reference link 75  
O  
Open Graph \(OG\) tags 131  
OpenWeatherMap 71, 78  
account, creating 78  
OpenWeatherMap APIs  
Geocoding API 78  
One Call API 78  
P  
package manager 5  
pages directory 50  
407 Personal User Posts  
creating 120  
displaying 127, 128  
managing 120  
post information page, building 122-126  
RLS Policy, adding for posts table 120, 121  
Supabase API, using for post management 121, 122  
Pinia 71  
reference link 72  
Pinia store  
components, refactoring 91-93  
creating 88  
defining 89  
installing 88  
integrating, to monitor city and weather data 88  
408 Reactive States and Functions, integrating 89, 90  
used, for writing unit tests 159  
weather data widget components, implementing 93-100  
plugin  
creating, with Dayjs library for formatting dates 65  
point-of-sale \(POS\) 198  
system example 198  
ProjectShowcase component  
creating 29-32  
property details page  
creating 62, 63  
validating 62, 63  
Q  
quiz game app  
app.vue file 158, 159  
409 definition types 156  
implementing 154  
questions data 155  
quiz Pinia store 156-158  
R  
real estate listing project  
setting up, in Nuxt 3 40-44  
recipe images  
optimizing, to load pages faster 141-145  
recipe node  
creating 139-141  
recipe page  
custom og\:image, creating 145-148  
recipe-sharing site  
dynamic site maps, generating 149-151  
410 recommended extensions 9  
Nuxtr 11  
Vue - Official 10  
repository  
exploring 132  
S  
Search Engine Optimization \(SEO\) 132  
concepts 132  
recipe node, creating 139-141  
simplified dependency management 180  
SkillChip component  
creating 28, 29  
state management 72-74  
structured data  
implementing, for improved search engine rankings 138, 139  
411 structured layout  
BaseHeader component, creating 45-50  
defining 44, 45  
defining, for website 44  
overriding, with 404 page 44  
Supabase 103  
authentication routes, overriding 108  
signup function, creating 115-120  
used, for integrating Nuxt 3 107  
used, for setting up user authentication 115  
Supabase integration  
used, for creating Nuxt 3 107  
Supabase project  
database schema, setting up 105-107  
setting up, for user authentication 105  
412 T  
Tailwind CSS 16  
color customization 19  
configuration 19  
container customization 19  
installing 16-18  
screen breakpoints 19  
reference link 16  
Tailwind CSS IntelliSense 16  
test coverage tools  
exploring 174-177  
testing fundamentals 154  
E2E testing 154  
integration testing 154  
unit testing 154  
413 tree shaking 4  
TypeScript 30  
TypeScript support  
exploring 50-52  
U  
UI authentication 109  
unified version control 180  
enhanced code reusability 180  
simplified dependency management 180  
unit tests for components  
Question.spec.ts test file, creating 166, 167  
test, setting up 166  
writing 165-170  
unit tests for Pinia store  
quiz store, testing 163-165  
414 Vitest, exploring 159-162  
writing 159  
updateProgress function 157  
user authentication  
setting up, with Supabase 115  
used, for setting up Supabase project 105  
useScrollTo composable  
creating 35, 36  
V  
Visual Studio Code \(VS Code\) 16  
Vite 4, 24  
Vitest  
exploring 159-162  
reference link 159  
Vitest UI  
415 exploring 174-177  
Vue - Official 10  
formatting 11  
refactoring capabilities 11  
syntax highlighting 11  
template interpolation 10  
TypeScript support 10  
W  
weather data  
current weather 87  
daily forecast 87  
fetching 86, 87  
hourly weather 87  
web development  
evolution 2  
416 webpack 24  
website layout  
creating 23, 24  
WhatFont 75  
417 www.packtpub.com  
Subscribe to our online digital library for full access to over 7,000 books  
and videos, as well as industry leading tools to help you plan your personal  
development and advance your career. For more information, please visit  
our website.  
# Why subscribe?  
Spend less time learning and more time coding with practical eBooks  
and Videos from over 4,000 industry professionals  
Improve your learning with Skill Plans built especially for you  
Get a free eBook or video every month  
Fully searchable for easy access to vital information  
Copy and paste, print, and bookmark content  
Did you know that Packt offers eBook versions of every book published,  
with PDF and ePub files available? You can upgrade to the eBook version at  
packtpub.com and as a print book customer, you are entitled to a discount  
418 on the eBook copy. Get in touch with us at customercare@packtpub.com  
for more details.  
At www.packtpub.com, you can also read a collection of free technical arti-  
cles, sign up for a range of free newsletters, and receive exclusive discounts  
and offers on Packt books and eBooks.  
# Other Books You May Enjoy  
If you enjoyed this book, you may be interested in these other books by  
Packt\:  
419 420 Frontend Development Projects with Vue.js 3 - Second Edition  
Maya Shavin, Raymond Camden, Clifford Gurney, Hugo Di Francesco  
ISBN\: 978-1-80323-499-1  
Set up a development environment and start your first Vue.js 3 project  
Modularize a Vue application using component hierarchies  
Use external JavaScript libraries to create animations  
Share state between components and use Pinia for state management  
Work with APIs using Pinia and Axios to fetch remote data  
Validate functionality with unit testing and end-to-end testing  
Get to grips with web app deployment  
421 422 Vue.js 3 By Example  
John Au-Yeung  
ISBN\: 978-1-83882-634-5  
Get to grips with Vue architecture, components, props, directives, mix-  
ins, and other advanced features  
Understand the Vue 3 template system and use directives  
Use third-party libraries such as Vue Router for routing and Vuex for  
state management  
Create GraphQL APIs to power your Vue 3 web apps  
Build cross-platform Vue 3 apps with Electron and Ionic  
Make your Vue 3 apps more captivating with PrimeVue  
Build real-time communication apps with Vue 3 as the frontend and  
Laravel  
# Packt is searching for authors like  
# you  
If you’re interested in becoming an author for Packt, please visit authors.-  
packtpub.com and apply today. We have worked with thousands of develop-  
ers and tech professionals, just like you, to help them share their insight  
with the global tech community. You can make a general application, apply  
423 for a specific hot topic that we are recruiting an author for, or submit your  
own idea.  
# Share Your Thoughts  
Now you’ve finished Nuxt 3 Projects, we’d love to hear your thoughts! If  
you purchased the book from Amazon, please click here to go straight to the  
Amazon review page for this book and share your feedback or leave a re-  
view on the site that you purchased it from.  
Your review is important to us and the tech community and will help us  
make sure we’re delivering excellent quality content.  
# Download a free PDF copy of this  
# book  
Thanks for purchasing this book!  
Do you like to read on the go but are unable to carry your print books  
everywhere?  
Is your eBook purchase not compatible with the device of your choice?  
424 Don’t worry, now with every Packt book you get a DRM-free PDF version  
of that book at no cost.  
Read anywhere, any place, on any device. Search, copy, and paste code  
from your favorite technical books directly into your application.  
The perks don’t stop there, you can get exclusive access to discounts,  
newsletters, and great free content in your inbox daily  
Follow these simple steps to get the benefits\:  
1\. Scan the QR code or visit the link below  
https\://packt.link/free-ebook/9781837632541  
2\. Submit your proof of purchase  
3\. That’s it! We’ll send your free PDF and other benefits to your email  
directly  
425 Contents  
1\. Nuxt 3 Projects  
2\. Foreword  
3\. Contributors  
4\. About the authors  
5\. About the reviewers  
6\. Preface  
1\. Who this book is for  
2\. What this book covers  
3\. To get the most out of this book  
4\. Download the example code files  
5\. Code in Action  
6\. Conventions used  
7\. Get in touch  
8\. Share Your Thoughts  
9\. Download a free PDF copy of this book  
7\. Chapter 1\: Setting Up Your Nuxt 3 Environment for a Basic “Hello  
Nuxt” App  
1\. Technical requirements  
2\. Introduction to Nuxt 3  
1\. The evolution of web development  
2\. The birth of Nuxt  
3\. Why Nuxt?  
426 3\. The architecture and principles of Nuxt  
1\. Built on top of Vue  
2\. Universal rendering and static site generation  
3\. Performance optimizations  
4\. Installing and setting up the Nuxt 3 environment  
1\. Prerequisites  
5\. Creating your first “Hello Nuxt” app  
1\. Initialization – the steps to create a new Nuxt project  
2\. The default project structure  
6\. Recommended extensions  
1\. Vue - Official  
2\. Nuxtr  
7\. Summary  
8\. Practice questions  
9\. Further reading  
8\. Chapter 2\: Building a Simple Portfolio Using Tailwind CSS and a Dive  
into Nuxt 3’s Project Structure  
1\. Technical requirements  
2\. Essential background – what is Tailwind CSS?  
3\. Setting up and integrating with Tailwind CSS  
1\. Create a new project  
2\. Installing Tailwind CSS  
4\. Creating the website layout and customizing the font  
1\. Embedding the Lato font \(or any Google font\)  
427 2\. Creating the layout  
5\. Managing images in the assets folder  
6\. Creating the ProjectShowcase and SkillChip components  
1\. Creating the SkillChip component  
2\. Creating the ProjectShowcase component  
7\. Styling within the component itself  
8\. Creating a useScrollTo composable  
9\. Summary  
10\. Practice questions  
11\. Further reading  
9\. Chapter 3\: Building a Real Estate Listing Project to Grasp Routing,  
Views, Layouts, and Plugins  
1\. Technical requirements  
2\. Essential background- understanding Nuxt 3 routing, layouts, and  
plugins  
3\. Setting up your real estate listing project in Nuxt 3  
4\. Defining a default layout for the website and overriding it with a 404  
page  
1\. Defining a default layout  
2\. Creating the BaseHeader component  
5\. Creating the home page and exploring TypeScript support  
1\. Introduction to the pages directory  
2\. Exploring TypeScript support  
3\. A note on the component path  
428 4\. Create Property and Category Card Components  
5\. Creating the home page  
6\. Creating a dynamic listing page  
7\. Creating and validating a property details page  
1\. Creating a Custom error page  
8\. Creating a plugin to use Dasyjs for formatting dates  
1\. Installing Dayjs  
2\. Setting up the plugin directory and file  
3\. Initializing Dayjs with configuration  
4\. Using the global FromNow function for the property details page  
9\. Summary  
10\. Practice questions  
11\. Further reading  
10\. Chapter 4\: Building a Weather Dashboard – Data Fetching and State  
Management  
1\. Technical requirements  
2\. Essential background – understanding Nuxt 3 Data Fetching and State  
Management  
3\. Integrating Nuxt UI in the weather dashboard  
4\. Exploring data fetching with \$fetch in Nuxt 3  
1\. Creating an account on OpenWeatherMap  
2\. Testing the API  
3\. Defining global types  
429 4\. Utilizing useRuntimeConfig to expose configuration within the  
application  
5\. Creating the CitiesLookup component  
6\. Fetching the weather data  
5\. Integrating with the Pinia store to monitor city and weather data  
1\. Installing Pinia and creating the first store  
2\. Integrating Reactive States and Functions in Pinia Store  
3\. Refactoring components for Pinia store integration  
4\. Implementing weather data widget components  
6\. Summary  
7\. Practice questions  
8\. Further reading  
11\. Chapter 5\: Building a Personal Posts Space and Implementing  
Authentication  
1\. Technical requirements  
2\. Essential Background\: What is Supabase?  
3\. Setting Up Initial Supabase Project For User Authentication  
1\. Setting Up the Database Schema  
4\. Integrating Nuxt 3 with Supabase  
1\. Creating a New Nuxt 3 Project with Supabase Integration  
2\. Overriding Authentication Routes  
5\. Authentication UI and Validating Inputs  
1\. Installing Required Modules  
2\. Setting Up Auth Pages  
430 3\. Using Joi for Input Validation  
6\. Setting Up User Authentication with Supabase  
1\. Creating the Signup Function  
7\. Creating and Managing Personal User Posts  
1\. Adding RLS Policy for the ‘Posts’ Table  
2\. Using Supabase API for Post Management  
3\. Building the Post Information Page  
4\. Displaying User Posts  
8\. Summary  
9\. Practice Questions  
10\. Further Reading  
12\. Chapter 6\: Enhancing a Recipe-Sharing Site While Optimizing SEO  
Using Nuxt 3  
1\. Technical requirements  
2\. Essential background – Understanding Search Engine Optimization  
\(SEO\)  
3\. Exploring the repository  
4\. Defining metadata for each page  
1\. Setting up the project structure  
2\. Setting up site configuration with nuxt SEO  
3\. Overriding metadata  
5\. Implementing structured data for improved search engine rankings  
1\. Creating a recipe node  
6\. Optimizing recipe images to load pages faster  
431 7\. Creating a custom og\:image for the recipe page  
8\. Generating dynamic site maps for the recipe-sharing site  
9\. Summary  
10\. Practice questions  
11\. Further reading  
13\. Chapter 7\: Building a Quiz Game Application to Learn about Testing  
1\. Technical requirements  
1\. Exploring the repository  
2\. Essential background – fundamentals of testing  
3\. Implementing the quiz game app  
1\. Questions data  
2\. Types definitions  
3\. Quiz Pinia store  
4\. The app.vue file  
4\. Writing unit tests for the Pinia store  
1\. Exploring Vitest  
2\. Testing the quiz store  
5\. Writing unit tests for components  
1\. Setting up for component testing  
2\. Creating the Question.spec.ts test file  
3\. Writing the component unit test  
6\. Writing end-to-end tests for the quiz game  
1\. Setting up for E2E testing  
2\. Writing E2E tests  
432 7\. Exploring Vitest UI and test coverage tools  
8\. Summary  
9\. Practice questions  
10\. Further reading  
14\. Chapter 8\: Creating a Custom Translation Module in a Nuxt 3 Monorepo  
1\. Technical requirements  
2\. Essential background – fundamentals of testing  
3\. Setting up a Nuxt monorepo  
1\. Creating a website application  
4\. Developing a custom translation module  
1\. Installing the module in our application  
5\. Configuring translation module options  
1\. Reading local files inside the module  
6\. Expanding the module with plugins, composables, and components  
1\. Creating a \$t helper function  
2\. Setting up a language switcher component  
7\. Future directions  
1\. POS system example  
2\. E-commerce platform example  
3\. Final thoughts  
8\. Summary  
9\. Practice questions  
10\. Further reading  
15\. Index  
433 1\. Why subscribe?  
16\. Other Books You May Enjoy  
1\. Packt is searching for authors like you  
2\. Share Your Thoughts  
3\. Download a free PDF copy of this book  
# Landmarks  
1\. Cover  
2\. Table of Contents  
3\. Index  
434 Índice  
Nuxt 3 Projects 1  
Foreword 5  
Contributors 7  
About the authors 7  
About the reviewers 8  
Preface 23  
Who this book is for 23  
What this book covers 23  
To get the most out of this book 25  
Download the example code files 26  
Code in Action 26  
Conventions used 27  
Get in touch 28  
Share Your Thoughts 29  
Download a free PDF copy of this book 29  
Chapter 1\: Setting Up Your Nuxt 3 Environment for a  
Basic “Hello Nuxt” App 32  
Technical requirements 33  
Introduction to Nuxt 3 34  
The evolution of web development The birth of Nuxt 35  
Why Nuxt? 36  
The architecture and principles of Nuxt Built on top of Vue Universal rendering and static site generation Performance optimizations 38  
Installing and setting up the Nuxt 3 environment 35  
36  
37  
37  
40  
435 Prerequisites 40  
Creating your first “Hello Nuxt” app 41  
Initialization – the steps to create a new Nuxt project 42  
The default project structure 46  
Recommended extensions 50  
Vue - Official 50  
Nuxtr 53  
Summary 58  
Practice questions 58  
Further reading 59  
Chapter 2\: Building a Simple Portfolio Using Tailwind  
CSS and a Dive into Nuxt 3’s Project Structure 60  
Technical requirements 61  
Essential background – what is Tailwind CSS? 61  
Setting up and integrating with Tailwind CSS 62  
Create a new project 62  
Installing Tailwind CSS 63  
Creating the website layout and customizing the font 70  
Embedding the Lato font \(or any Google font\) 71  
Creating the layout 75  
Managing images in the assets folder 79  
Creating the ProjectShowcase and SkillChip components 86  
Creating the SkillChip component 86  
Creating the ProjectShowcase component 88  
Styling within the component itself 95  
Creating a useScrollTo composable 98  
Summary 104  
Practice questions 104  
Further reading 105  
Chapter 3\: Building a Real Estate Listing Project to Grasp  
Routing, Views, Layouts, and Plugins 107  
436 Technical requirements 108  
Essential background- understanding Nuxt 3 routing, layouts, and  
plugins 108  
Setting up your real estate listing project in Nuxt 3 110  
Defining a default layout for the website and overriding it with a  
404 page 116  
Defining a default layout 116  
Creating the BaseHeader component 118  
Creating the home page and exploring TypeScript support 127  
Introduction to the pages directory 127  
Exploring TypeScript support 128  
A note on the component path 130  
Create Property and Category Card Components 132  
Creating the home page 135  
Creating a dynamic listing page 141  
Creating and validating a property details page 148  
Creating a Custom error page 152  
Creating a plugin to use Dasyjs for formatting dates 157  
Installing Dayjs 157  
Setting up the plugin directory and file 157  
Initializing Dayjs with configuration 158  
Using the global FromNow function for the property details  
159  
page  
Summary 161  
Practice questions 162  
Further reading 162  
Chapter 4\: Building a Weather Dashboard – Data Fetching  
and State Management 164  
Technical requirements 165  
Essential background – understanding Nuxt 3 Data Fetching and  
State Management 165  
Integrating Nuxt UI in the weather dashboard 172  
437 Exploring data fetching with \$fetch in Nuxt 3 176  
Creating an account on OpenWeatherMap 177  
Testing the API 178  
Defining global types 181  
Utilizing useRuntimeConfig to expose configuration within  
the application 182  
Creating the CitiesLookup component 184  
Fetching the weather data 191  
Integrating with the Pinia store to monitor city and weather data 195  
Installing Pinia and creating the first store 195  
Integrating Reactive States and Functions in Pinia Store 197  
Refactoring components for Pinia store integration 200  
Implementing weather data widget components 204  
Summary 216  
Practice questions 216  
Further reading 217  
Chapter 5\: Building a Personal Posts Space and  
Implementing Authentication 218  
Technical requirements 219  
Essential Background\: What is Supabase? Setting Up Initial Supabase Project For User Authentication Setting Up the Database Schema Integrating Nuxt 3 with Supabase Creating a New Nuxt 3 Project with Supabase Integration Overriding Authentication Routes 228  
Authentication UI and Validating Inputs Installing Required Modules 229  
Setting Up Auth Pages 231  
Using Joi for Input Validation Setting Up User Authentication with Supabase Creating the Signup Function 242  
Creating and Managing Personal User Posts 219  
221  
221  
227  
227  
229  
238  
241  
252  
438 Adding RLS Policy for the ‘Posts’ Table 253  
Using Supabase API for Post Management 255  
Building the Post Information Page 256  
Displaying User Posts 264  
Summary 267  
Practice Questions 268  
Further Reading 268  
Chapter 6\: Enhancing a Recipe-Sharing Site While  
Optimizing SEO Using Nuxt 3 270  
Technical requirements 271  
Essential background – Understanding Search Engine Optimization  
\(SEO\) 271  
Exploring the repository 272  
Defining metadata for each page 273  
Setting up the project structure 273  
Setting up site configuration with nuxt SEO 278  
Overriding metadata 281  
Implementing structured data for improved search engine rankings 282  
Creating a recipe node 284  
Optimizing recipe images to load pages faster 288  
Creating a custom og\:image for the recipe page 295  
Generating dynamic site maps for the recipe-sharing site 303  
Summary 307  
Practice questions 308  
Further reading 309  
Chapter 7\: Building a Quiz Game Application to Learn  
about Testing 310  
Technical requirements 311  
Exploring the repository 311  
Essential background – fundamentals of testing 311  
Implementing the quiz game app 313  
439 Questions data 315  
Types definitions 315  
Quiz Pinia store 316  
The app.vue file 320  
Writing unit tests for the Pinia store 321  
Exploring Vitest 322  
Testing the quiz store 329  
Writing unit tests for components 334  
Setting up for component testing 334  
Creating the Question.spec.ts test file 335  
Writing the component unit test 336  
Writing end-to-end tests for the quiz game 341  
Setting up for E2E testing 342  
Writing E2E tests 343  
Exploring Vitest UI and test coverage tools 348  
Summary 354  
Practice questions 355  
Further reading 355  
Chapter 8\: Creating a Custom Translation Module in a  
Nuxt 3 Monorepo 357  
Technical requirements 358  
Essential background – fundamentals of testing 358  
Setting up a Nuxt monorepo 359  
Creating a website application 361  
Developing a custom translation module 364  
Installing the module in our application 366  
Configuring translation module options 370  
Reading local files inside the module 373  
Expanding the module with plugins, composables, and components 378  
Creating a \$t helper function 383  
Setting up a language switcher component 387  
440 Future directions 392  
POS system example 392  
E-commerce platform example 393  
Final thoughts 393  
Summary 394  
Practice questions 395  
Further reading 396  
Index 397  
Why subscribe? 418  
Other Books You May Enjoy 419  
Packt is searching for authors like you 423  
Share Your Thoughts 424  
Download a free PDF copy of this book 424  
441  
