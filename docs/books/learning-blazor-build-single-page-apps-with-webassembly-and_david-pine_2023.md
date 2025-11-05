Progress Software Learning Blazor  
# Build Single-Page Apps with WebAssembly and C\#  
With Early Release ebooks, you get books in their earliest form—the  
author’s raw and unedited content as they write—so you can take  
advantage of these technologies long before the official release of these  
titles.  
David Pine Learning Blazor  
by David Pine  
Copyright © 2023 David Pine. All rights reserved.  
Printed in the United States of America.  
Published by O’Reilly Media, Inc., 1005 Gravenstein Highway North,  
Sebastopol, CA 95472.  
O’Reilly books may be purchased for educational, business, or sales  
promotional use. Online editions are also available for most titles  
\(http\://oreilly.com\). For more information, contact our  
corporate/institutional sales department\: 800-998-9938 or  
corporate@oreilly.com.  
Acquisitions Editor\:  
Amanda Quinn  
Development Editor\:  
Rita Fernando  
Production Editor\:  
Gregory Hyman  
Interior Designer\:  
David Futato  
Cover Designer\:  
Karen Montgomery  
Illustrator\:  
Kate Dullea  
November 2022\:  
First Edition  
Revision History for the Early Release  
2022-02-02\:  
First Release  
2022-03-21\:  
Second Release  
2022-04-27\:  
Third Release  
2022-06-21\:  
Fourth Release 2022-07-29\:  
Fifth Release  
See http\://oreilly.com/catalog/errata.csp?isbn=9781098113247  
for release  
details.  
The O’Reilly logo is a registered trademark of O’Reilly Media, Inc.  
Learning Blazor, the cover image, and related trade dress are trademarks  
of  
O’Reilly Media, Inc.  
The views expressed in this work are those of the author, and do not  
represent the publisher’s views. While the publisher and the  
author have  
used good faith efforts to ensure that the information and  
instructions  
contained in this work are accurate, the publisher and the  
author disclaim all  
responsibility for errors or omissions, including  
without limitation  
responsibility for damages resulting from the use of or  
reliance on this  
work. Use of the information and instructions contained  
in this work is at  
your own risk. If any code samples or other technology  
this work contains  
or describes is subject to open source licenses or the  
intellectual property  
rights of others, it is your responsibility to  
ensure that your use thereof  
complies with such licenses and/or rights.  
This work is part of a collaboration between O’Reilly and Progress  
Software. See our statement of editorial independence.  
978-1-098-11324-7 Preface  
What is Blazor? Blazor is an open-source web framework for building  
interactive client-side web user interface \(UI\) components using C\#, hyper-  
text markup language \(HTML\), and cascading style sheets \(CSS\). 1  
As a  
feature of ASP.NET Core, Blazor extends the .NET developer platform with  
tools and libraries for building web apps.  
WebAssembly enables many non-JavaScript-based programming languages  
to run on the browser. Blazor takes full advantage of WebAssembly and  
allows C\# developers to build UI components and client-side experiences  
with .NET. Blazor is a single-page application \(SPA\) framework, similar to  
Angular, React, VueJS, and Svelte for example, but it’s based on C\# instead  
of JavaScript.  
Okay, it’s a web framework, but what makes it different from any other  
client-side framework for building web UI? Does .NET make a difference?  
Blazor is open source, that’s nice, but so what? There are plenty of open  
source projects out there that are doing great for themselves, but why  
Blazor?  
# Why Blazor?  
There are seemingly countless reasons to choose Blazor as your next web  
app development framework. From being able to share C\# code for both  
client and server scenarios to tooling with the Visual Studio family of  
products, the robust .NET CLI, and other popular .NET integrated  
development environments \(IDEs\). The .NET ecosystem is thriving,  
adoption is soaring, and the appeal of long-term support continues to be a  
driving factor for enterprise development. When comparing the long-term  
support of other SPA frameworks, such as Angular and React, .NET stands  
out as the clear winner. Historically, the delivery of a web page to a browser involved basic HTML.  
In the early ’90s, it meant something entirely different to surf the internet. It  
was like reading a document more than an immersive or cohesive  
experience. A few years later CSS and JavaScript were created, adding a lot  
more flair to the web experience. It was completely acceptable to watch  
images render in segments, as the underlying image data was buffered over  
hyper-text transfer protocol \(HTTP\) to the browser at dial-up connection  
speeds. But it’s human nature to want things right now, am I right? If you’re  
sitting on a browser for more than a few seconds you start to feel a bit  
uneasy. You’re connected to various points of information at your finger  
tips, and it’s accessible from basically anywhere. As web content became  
more complex, development frameworks appeared to tame the complexity.  
We’ve come a long way, but that’s not without trial and error. Frameworks  
come and go, newer innovations invalidate previously superior innovations.  
We’re in a constant struggle to do more, do so faster, do so more effectively  
and with fewer resources.  
Even today, the internet still relies on HTTP to deliver HTML, CSS, and  
JavaScript. WebAssembly is a new way of interacting with the web. When  
WebAssembly was introduced it had moderate developer community  
attention and anticipation. In this book, you’ll learn how WebAssembly  
differs from failed web solutions such as SilverLight and Java Applets. In  
2017, WebAssembly was being openly standardized, and the possibilities of  
the web were starting to be extended to a new level of interactivity and  
functionality. This is very important to web developers, as they could more  
easily compete against the lucrative App Store development platform. Your  
browser is now capable of functionality beyond JavaScript alone. There are  
many great business opportunities within this space. C\# is a true competitor  
to JavaScript on the web and .NET made that a reality. JavaScript continues  
to evolve, adding features beyond the ECMAScript standard.  
Blazor is a game-changer for .NET developers and web developers alike! In  
this book, I’ll show you how you can use the Blazor WebAssembly hosting  
model to create compelling real-time web experiences. As a developer with more than a decade of real-world web app  
development experience, I can safely say that I have reliably used .NET for  
enterprise development of production applications time and time again. The  
API surface area of .NET alone is massive and has been used on billions of  
computer systems around the world. I’ve built a lot of web apps through the  
years using various technologies including ASP.NET Web Forms,  
AngularJS, Angular, VueJS, Svelte, yes, and even React, then ASP.NET  
Core MVC, Razor Pages, and Blazor. Blazor melds together the strength of  
an established ecosystem with the flexibility and poise of the web, and it  
has a lot to offer to both .NET and web developers.  
# Who Should Read This Book  
I’d be lying if I said this book is for everyone. When I told my mom that I  
was writing this book, she first asked what it was about, then she asked me  
if she should read it, I told her “no”. My mother is neither a .NET developer  
nor a web developer — in fact, she’s not technical at all. The book delivers  
deeply technical content and heavily opinionated code. It’s intended for  
.NET developers and web developers alike.  
For .NET developers  
If you’re a .NET developer who is curious about web app development, this  
book will detail how you can harness your existing .NET skills and apply  
them to Blazor development. The web app platform is a major opportunity  
for .NET developers. All the popular JavaScript SPA frameworks, such as;  
Angular, React, VueJS, and Svelte have a true rival in Blazor. There are tens  
of millions of .NET developers around the world, who have been building  
amazing applications for decades. Blazor app development will be familiar  
to you as Blazor is based on .NET and C\#. You can share libraries between  
the client and server, making development truly enjoyable.  
For web developers If you’re a web developer who has worked with .NET before, this book  
extends two sets of learned programming skills. All of your .NET  
experience carries over, but also your knowledge of web fundamentals. If  
you’re a SPA developer, this book will open your eyes to a better set of  
tooling than you’re accustomed to. We also go over many new C\# features,  
if you’re unfamiliar with C\#, this book will provide an idiomatic C\# and  
strongly opinionated experience.  
Your JavaScript and developer experience of client-side routing, a deep  
understanding of HTTP, micro-service architecture, dependency injection,  
component-based application mindset — all these things are directly  
applicable to Blazor development. Application development shouldn’t be so  
difficult, and I truly believe that Blazor makes it easier. With feature-rich  
data-binding, strongly-typed templating, component hierarchy eventing,  
logging, localization, authentication, support for progressive web apps  
\(PWA\), and hosting — you have all the building blocks to orchestrate  
compelling web experiences.  
# Why I Wrote This Book  
When someone asks me, “Why did you want to write a book?” I pause,  
feigning deep thought, before replying, “O’Reilly asked me to.” Simple as  
that. But in all seriousness, when I got a friendly email from my  
acquisitions editor to see if I was interested in writing a book about Blazor,  
I gave it a lot of thought. First, it was pretty cool to be asked! But, I also  
knew taking on this kind of project would mean putting a few things on  
hold. I’d have to take a hiatus from speaking events, which have been a  
major part of my life over the past several years. Yet, I thrive on helping  
others, so writing a book would be helping people differently. Writing a  
book would also mean taking time away from my young family. My family  
and wife specifically have been extremely warm-hearted and supportive.  
She believes in my ability to help others and shares my passion. In the end,  
I decided “yes! I want to write a book!” To me, helping the developer community also helps strengthen my  
understanding of a specific technology. I love Blazor! Blazor is \(and has  
been\) a major investment for the .NET and ASP.NET Microsoft  
development teams. They continue to drive innovation, extending the reach  
of C\# and the .NET ecosystem as a whole. This book is a developer must  
have, and it’s my way of giving back to the developer community I’ve  
grown to love. I’m going to pour myself into this book, and I know my  
enthusiasm for Blazor shines through.  
# How to use this book  
In this book, I’ll be your guide and share my observations and opinions. I’ll  
provide you with my perspective, and real-life experiences. This will be  
unlike “traditional tech books” because you’re going to get to know me  
along the way. It’s a very technical book, but not your “File \> New” kind of  
book. There are so many books out there today that are step-by-step’s, this  
is not that.  
As you read this book, I want you to have an experience that is similar to  
the one you’d have when joining a new team. You’ll experience a bit of  
onboarding, you’ll be brought up to speed on an existing application, and  
you’ll learn various domain bits along the way. The Learning Blazor sample  
application is a fairly sized solution. The app will have over twenty  
projects, some larger than others. I’ll take you through the inner workings  
of the application and you’ll learn Blazor app development along the way.  
You’ll use this book to learn Blazor, plain and simple. The source code  
from the “Learning Blazor” application, along with this book makes for a  
great learning resource and future point of reference. Use this book to  
further your career and level up your skills.  
# Roadmap and Goals of This Book  
This book is structured as follows\: Chapter 1 introduces the core concepts and fundamentals of web app  
development as a platform. There is an emphasis on Blazor’s role in  
web development. It also introduces the example app for this book,  
and discusses its architecture which consists of over twenty projects.  
The solution contains logic for custom Twitter streaming, Logic App  
examples for contact form implementation, component library  
publishing, real-time notification system using ASP.NET Core  
SignalR, LocalStorage implementation for Blazor JavaScript interop,  
and so much more.  
Chapter 2 dives head first into an actual Blazor WebAssembly apps  
source code. It explains how the execution of the app functions starting  
from the first client request to the static web sites Uniform Resource  
Locator \(URL\). I detail how the HTML renders, the subsequent  
requests for additional resources are called and how Blazor bootstraps  
itself.  
Chapter 3 shows how the user is represented within the app. I teach  
you how to use third-party authentication providers to verify a users  
identity. I demonstrate customization of the authentication state user  
experience. I share how the “Have I Been Pwned” API is used to help  
users by alerting them if they have been part of a data-breach. This is  
fully implemented as an ASP.NET Core Minimal API service running  
as a container in an Azure App Service instance. In Chapter 3, I show  
various data-binding approaches using Razor control structures.  
Chapter 4 details how the client services are registered for dependency  
injection. I teach you about componentization and how to use the  
render fragmentation approaches with customizing components. I then  
show you parameterized client native Speech Synthesis that is fully  
functional and configurable in Blazor WebAssembly.  
Chapter 5 exemplifies how a single developer can use a free artificial  
intelligence-based automated continuous delivery pipeline to create  
translations into forty supported languages. I teach you how to use the framework-provided IStringLocalizer\<T\> type and  
corresponding services.  
Chapter 6 introduces real-time web functionality, and shows a  
notification system, live Tweet stream page, and alert functionality.  
And a beautiful and charming chat app using ASP.NET Core SignalR,  
and Bulma CSS style it.  
Chapter 7 creates a case for source generators, but with Blazor  
JavaScript interop. I show you how we can write code that then writes  
code, and it will save us so much time!  
Chapter 8 explores advanced forms validation scenarios. I guide you  
through an implementation of native Speech Recognition in the form  
as an added bonus, and show a few more JavaScript interop  
capabilities. I’ll show how to user EditContext and form-model  
binding. Custom validation state representations with reactive updates  
using Reactive Extensions from .NET.  
Chapter 9 verifies all assertions we’ve made about Blazor  
WebAssembly apps. In this chapter, I teach you how to write unit tests,  
component tests and even scenario tests, all of which are relevant to  
Blazor apps. These will be automated to run each time that the app is  
pushed to the GitHHub repository using GitHub Actions. I’ll show you  
xUnit, bUnit, Playwright, and scenario testing.  
# Conventions Used in This Book  
The following typographical conventions are used in this book\:  
Italic  
Indicates new terms, URLs, email addresses, filenames, and file  
extensions.  
Constant width Used for program listings, as well as within paragraphs to refer to  
program elements such as variable or function names, databases, data  
types, environment variables, statements, and keywords.  
Constant width bold  
Shows commands or other text that should be typed literally by the user.  
Constant width italic  
Shows text that should be replaced with user-supplied values or by  
values determined by context.  
TIP  
This element signifies a tip or suggestion.  
NOTE  
This element signifies a general note.  
WARNING  
This element indicates a warning or caution.  
# Using Code Examples  
Supplemental material \(code examples, exercises, etc.\) is available for  
download at https\://github.com/oreillymedia/learning-blazor.  
If you have a technical question or a problem using the code examples,  
please send email to bookquestions@oreilly.com.  
This book is here to help you get your job done. In general, if an example  
code is offered with this book, you may use it in your programs and documentation. You do not need to contact us for permission unless you’re  
reproducing a significant portion of the code. For example, writing a  
program that uses several chunks of code from this book does not require  
permission. Selling or distributing examples from O’Reilly books does  
require permission. Answering a question by citing this book and quoting  
example code does not require permission. Incorporating a significant  
amount of example code from this book into your product’s documentation  
does require permission.  
We appreciate, but generally do not require attribution. An attribution  
usually includes the title, author, publisher, and ISBN. For example\:  
“Learning Blazor by David Pine \(O’Reilly\). Copyright 2023 David Pine,  
978-1-098-11324-7.”  
If you feel your use of code examples falls outside fair use or the  
permission given above, feel free to contact us at permissions@oreilly.com.  
# O’Reilly Online Learning  
NOTE  
For more than 40 years, O’Reilly Media has provided technology and business training,  
knowledge, and insight to help companies succeed.  
Our unique network of experts and innovators share their knowledge and  
expertise through books, articles, and our online learning platform.  
O’Reilly’s online learning platform gives you on-demand access to live  
training courses, in-depth learning paths, interactive coding environments,  
and a vast collection of text and video from O’Reilly and 200+ other  
publishers. For more information, visit http\://oreilly.com.  
How to Contact Us Please address comments and questions concerning this book to the  
publisher\:  
O’Reilly Media, Inc.  
1005 Gravenstein Highway North  
Sebastopol, CA 95472  
800-998-9938 \(in the United States or Canada\)  
707-829-0515 \(international or local\)  
707-829-0104 \(fax\)  
We have a web page for this book, where we list errata, examples, and any  
additional information. You can access this page at  
http\://www.oreilly.com/catalog/9781098113230.  
Email bookquestions@oreilly.com to comment or ask technical questions  
about this book.  
For news and information about our books and courses, visit  
http\://oreilly.com.  
Find us on Facebook\: http\://facebook.com/oreilly  
Follow us on Twitter\: http\://twitter.com/oreillymedia  
Watch us on YouTube\: http\://www.youtube.com/oreillymedia  
# Acknowledgments  
I once traveled the country of Serbia as part of the ITkonekt developer  
conference. I was speaking alongside Jon Galloway who at the time was the  
Executive Director \(now Vice President\) of the .NET Foundation. I was  
pair-programming C\# in our travel van with Jonathan LeBlanc who is the  
only person I know who has won an Emmy Award for technology \(and now fellow O’Reilly author\). The fourth individual was amazing, Håkon Wium  
Lie who is known for being the creator of Cascading Style Sheets \(CSS\),  
and former CTO of Opera.  
During the trip, Håkon told us about the time he built a balsawood raft with  
a group of volunteers. The raft weighed over 20 tons, and the intended  
purpose was to set course from South America \(Peru\) and sail to Easter  
Island. Why you might ask — as both Jon’s and I did. We were intrigued,  
why on earth would anyone want to do this? It was simply to prove a point  
that it could be done. It would prove that Easter Island could have been  
inhabited by the people of South America. This voyage named Kon-Tiki2,  
took place in 2015-2016 and was the spotlight of worldwide news. 42 days  
on a raft in the ocean, can you imagine?  
Anyway, during the trip, it came to light that, of the four of us in the  
traveling van, I was the only one who hadn’t written a book. They  
immediately encouraged me to rectify that fact. They told me to share my  
knowledge with the world and write a book. I was touched to hear that my  
esteemed friends and colleagues believed in me. I didn’t write a book right  
away, but I did give it a lot of thought and waited until the time was right.  
Which is now!  
Yeah, I was pinching myself. I was with them, speaking about C\# of all  
things. These amazing people were telling me that I should share my  
knowledge with the world and that I need to write a book. I’d like to thank  
Jon Galloway, Jonathan LeBlanc, and Håkon Wium Lie — thank you for  
believing in me and being an inspiration to the developer community.  
I’d like to thank my mentor and good friend, David Fowler. David Fowler  
has been mentoring me for a long time, and I hold all of the valuable  
lessons near and dear to my heart. Our exchanges are often the highlight of  
my week, I share code, experiences, career challenges, and thoughts with  
him, and he reflects his brightness. He’s an inspiration to me and so many  
others, and I’m immensely grateful to learn from him.  
I want to formally thank all of the reviewers of this book. Without their  
tirelessness, and thorough reviews — this book would not have become as profound and helpful. From editorial reviews hanging on every word to in-  
depth technical reviews ensuring that every line code is a simple and  
elegant as possible. The quality is backed by decades of professional real-  
world experience, and I’m thrilled by the result.  
Finally, I want to thank my family. My amazing wife Jennifer, whom  
without her support none of this would have been possible. I attribute her  
for encouraging me to be the best possible version of myself. She’s believed  
in me, far longer than I’ve believed in myself. I want to thank my three  
sons, Lyric, Londyn, and Lennyx. They’re a constant reminder of the future,  
and the good we find in the world. Each child uniquely carries a little piece  
of inquisitive nature, curiosity, and joy. Without their spark and support,  
you wouldn’t be reading this right now. Thank you!  
1 https\://dotnet.microsoft.com/apps/aspnet/web-apps/blazor Chapter 1. Blazing into Blazor  
A NOTE FOR EARLY RELEASE READERS  
With Early Release ebooks, you get books in their earliest form—the  
author’s raw and unedited content as they write—so you can take  
advantage of these technologies long before the official release of these  
titles.  
This will be the first chapter of the final book. Please note that the  
GitHub repo will be made active later on.  
If you have comments about how we might improve the content and/or  
examples in this book, or if you notice missing material within this  
chapter, please reach out to the editor at rfernando@oreilly.com.  
Node.js reshaped the world of modern web app development. It’s success is  
attributed in part by the popularity of JavaScript, the programming language  
itself, but also that JavaScript now runs on both the client and the server  
alike. This is why I believe Blazor will be so successful, as C\# is now  
capable of running in the browser with WebAssembly. There are many C\#  
server apps in existence today, and to .NET developers this is a huge  
potential.  
For the first time, .NET developers can use their existing C\# skills to build  
all sorts of apps on the web. This blurs the lines between backend and  
frontend developers and expands app development for the web. With  
modern web app development, you want your apps to be responsive on both  
desktop and mobile browsers. Modern web apps are much more  
sophisticated and rich in content than their predecessors, and boast real-time  
web functionality, progressive web app \(PWA\) capabilities, and beautifully  
orchestrated user interactions. In this chapter, you’ll learn about the origins of .NET web app development  
and the birth of Blazor. You’ll explore the variations of single-page  
application frameworks, and why I believe .NET has solidified its place in  
the web ecosystem. I’ll answer many of the questions you may have about  
why Blazor is a viable option, and discuss its hosting models. I’ll share  
some professional experiences that relate to new possibilities for Blazor  
development. Finally, you’ll get your first look at the Learning Blazor  
sample application.  
# The Origin of Blazor  
In 1996, Active Server Pages \(ASP\) offered the first server-side scripting  
language and engine for dynamic web pages from Microsoft. As .NET  
Framework evolved, ASP.NET was born, and with it emerged Web Forms.  
Web Forms was \(and still is\) used by many that enjoy what .NET is capable  
of, and it allowed for server-side rendering of HTML.  
When ASP.NET Model View Controller \(MVC\) was first released in 2006,  
it made Web Forms look sluggish in comparison. MVC brought ASP.NET  
developers closer to true web development. In MVC, there was simply a  
closer alignment to web standards. MVC introduced the model-view-  
controller pattern, which helped to address the issue of managing post back  
state. This was a sore point for the developer community, and where  
developers took notice that their development interactions with Web Forms  
weren’t stateless. Web Forms fabricated statefulness with View State, and  
other state mechanisms which contradicted the nature of HTTP. MVC  
focused on testability, emphasizing to developers the importance of  
sustainability. This was a paradigm shift from Web Forms.  
In 2010, the Razor view engine was introduced to serve as one of several  
options for a pluggable view engine to use with ASP.NET MVC. Razor is a  
markup syntax that melds together HTML and C\#, and it’s used for  
templating. As a side-product of MVC, ASP.NET Web API grew in  
popularity and developers embraced the power of .NET. Web API started  
being accepted as the standard for building .NET-based HTTP services. All the while, the Razor view engine was evolving, strengthening, and  
maturing.  
Eventually, with the Razor view engine using MVC as a basis — Razor  
Pages took to the stage. Innovations from ASP.NET Core made a lot of this  
possible. The team’s eager push towards performance as a feature is  
evident with the TechEmpower benchmark results, where ASP.NET Core  
continues to climb ahead. Kestrel is the default web server for ASP.NET  
Core. ASP.NET Core is cross-platform and open source. It’s one of the  
fastest web servers in existence as of 2021 — serving more than 4 million  
requests per second. Kestrel is the cross-platform web server that’s included  
and enabled by default in ASP.NET Core project templates.  
ASP.NET Core offers first-class citizenship to all of the fundamentals you’d  
expect in modern development such as \(but not limited to\), dependency  
injection, strongly-typed configurations, feature-rich logging, localization,  
authentication, and hosting. Razor Pages lean more towards true  
components, and build on Web API infrastructure.  
After Razor Pages came Blazor, which is the combination of the words  
Browser and Razor. \(Clever name, isn’t it?\) Blazor is the first of its kind for  
.NET, a single-page application framework. Blazor takes advantage of  
WebAssembly \(Wasm\), which is a binary instruction format for a stack-  
based virtual machine. WebAssembly is designed as a portable compilation  
target for programming languages, enabling deployment on the web for  
client and server applications. 1  
WebAssembly allows .NET web apps to  
truly compete with JavaScript-based single-page application frameworks.  
It’s C\# running natively in the client browser with WebAssembly and the  
Mono .NET runtime.  
It’s an intriguing concept, but where did this come from and who created it?  
Blazor’s inception from its creator  
According to Steve Sanderson, he created Blazor because he was inspired  
to get .NET to run on WebAssembly. He had a breakthrough when he  
discovered Dot Net Anywhere \(DNA\), an alternative .NET runtime that could easily be compiled to WebAssembly with Emscripten. “Emscripten is  
a complete compiler toolchain to WebAssembly, with a special focus on  
speed, size, and the Web platform.”  
2  
This was the path that led to the creation of one of the first working  
prototypes of .NET running in the browser without a plugin. After Steve  
Sanderson delivered an amazing demonstration of this functioning .NET  
app in the browser, other Microsoft stakeholders started supporting the idea.  
This took .NET a step further as an ecosystem, and a step closer to what we  
know as Blazor today.  
If web apps have one thing in common, it’s that they’re hosted on a web  
server somewhere. Next, I’ll discuss the hosting models for Blazor.  
Blazor Server hosting  
There are two primary Blazor hosting models, either Blazor Server or  
Blazor WebAssembly. While this book is scoped to Blazor WebAssembly,  
Blazor Server is an alternative approach. With Blazor Server, when a client  
browser makes the initial request to the web server the server executes  
.NET code to generate an HTML response dynamically. HTML is returned,  
and subsequent requests are made to fetch CSS and JavaScript as specified  
in the HTML document. Once the application is loaded and running, client-  
side routing and other UI updates are made possible with an ASP.NET Core  
SignalR connection. ASP.NET Core SignalR offers a bidirectional  
communication between client and server, sending messages in real-time.  
This technology is used to communicate changes to the document object  
model \(DOM\) on the client browser — without a page refresh.  
There are advantages to using Blazor Server as a hosting model over Blazor  
WebAssembly\:  
1\. The download size is smaller than Blazor WebAssembly, as the app is  
rendered on the server.  
2\. The component code isn’t served to clients, only the resulting HTML. 3\. Server capabilities are present with the Blazor Server hosting model,  
as the app technically runs on the server.  
For additional information on Blazor Server, see Microsoft Docs\: ASP.NET  
Core Blazor hosting models - Blazor Server. Figure 1-1. Blazor Server hosting model.  
Figure 1-1 shows the server and the client. The server is where Blazor code  
runs, and it is comprised of Razor components and .NET. The client is  
responsible for the DOM. The server and client communicate changes to  
the DOM through an ASP.NET Core SignalR connection.  
Blazor WebAssembly hosting model  
With Blazor WebAssembly, when a client browser makes the initial request  
to the web server the server returns static HTML. Subsequent requests are  
made to fetch CSS and JavaScript as specified in the HTML document. As  
part of a Blazor WebAssembly app’s HTML, there will be a \<link\>  
element that request the blazor.webassembly.js file. This file executes and  
starts loading WebAssembly. This acts as a bootstrap, which requests .NET  
binaries from the server. Changes to the DOM, such as updating data values  
on the page, occur as new data is retrieved from API calls. This is covered  
in detail in “App startup and bootstrapping”.  
WARNING  
Being mindful of the hosting model is important. With Blazor WebAssembly hosting, all  
of your C\# code is executed on the client. This means that you should avoid using any  
code that requires server-side functionality, and you should avoid sensitive data such as  
passwords, API keys, or other sensitive information.  
When using the Blazor WebAssembly hosting model, you can choose a  
standalone app \(which can be deployed to a static web host\), or you can use  
the ASP.NET Core hosted solution. With the ASP.NET Core hosted  
solution, ASP.NET Core is responsible for serving the app as well as  
providing a Web API in a shared-server architecture. The application for  
this book uses the standalone model, and it’s deployed to Azure Static Web  
Apps. In other words, the application is served as static files. The data used  
to drive the app is available as several Web API endpoints. Figure 1-2. Blazor WebAssembly hosting model.  
Figure 1-2 shows only the client. The client is responsible for everything in  
this scenario, and the site can be served statically.  
With the standalone approach, the ability to leverage serverless cloud  
functionality with Azure Functions is really helpful. Microservice  
capabilities such as this work great together with ASP.NET Core Web APIs,  
and Blazor WebAssembly standalone scenarios. And together serve as a  
desirable target for deployment with Azure Static Web Apps. Static web  
server deliver static files, which is usually faster than computing a request  
which then has to dynamically render HTML to then return as a response.  
With the Blazor WebAssembly hosting model, you can write C\# that  
compiles to WebAssembly. With WebAssembly, a “binary instruction  
format” means that we’re talking about byte code. WebAssembly sits atop a  
“stack-based virtual machine”. Instructions are added \(pushed\) into the  
stack, while results are removed \(popped\) from the stack. WebAssembly is  
a “portable compilation target”. This means it’s possible to take C, C++,  
Rust, C\#, and other non-traditional web programming languages and target  
WebAssembly for their compilation. This results in WebAssembly binaries,  
which are web-runnable based on open standards but from programming  
languages other than JavaScript.  
# Single-Page Applications, redefined  
Blazor is the only .NET-based Single-Page Application \(SPA\) framework in  
existence. The fact that we can use .NET to write SPAs can not be  
overstated. There are many popular JavaScript SPA frameworks including  
\(but not limited to\)\:  
Angular  
React  
VueJS Svelte  
But these are all based on JavaScript, whereas Blazor isn’t. The list is non-  
exhaustive, there are many more JavaScript-based SPA frameworks and  
even more non-SPA JavaScript frameworks for that matter! JavaScript has  
ruled the browser as the exclusive programming language of the web for  
well over twenty years. It’s a very flexible programming language and is  
among the most popular in the world. The language was prototyped in a  
few weeks by Brendan Eich. That’s not to say that the language itself isn’t  
greatly appreciated and valuable.  
Stack Overflow manages a professional developer annual survey, and in  
2021 over 58,000 professional developers and more than 83,000 total  
developers voted JavaScript as the most commonly used programming  
language. 2021 makes it the ninth year in a row that JavaScript was the  
most commonly used programming language. 3  
The close second was  
HTML/CSS. If you’re to combine these totals, the web app platform has a  
solid future.  
The downside to JavaScript is that without definitive types, developers have  
to either code defensively or face the potential consequences of runtime  
errors. One way to address this is by using TypeScript.  
TypeScript was created by Anders Hejlsberg \(who was also the lead  
architect of C\#, chief engineer of Turbo Pascal, and chief architect of  
Delphi—he’s a programming language genius!\). TypeScript provides a type  
system, that enables language services to reason about the intent of your  
code.  
You can experience writing generic type-safe code, using all of the latest  
ECMAScript standards and prototyped features, because you’re backward  
compatible with ES3. TypeScript is a superset of JavaScript. Any valid  
JavaScript is also valid TypeScript. TypeScript provides static typing and a  
powerful language service that makes programming with JavaScript less  
error prone. TypeScript is more like a developer tool than it is a  
programming language. When it compiles it’s just JavaScript. TypeScript’s  
type system is great, but C\# has a type system too. I like to think of TypeScript as a way to make debugging and refactoring substantially easier  
and more reliable. With TypeScript you have flow analysis, and far more  
advanced language features than JavaScript alone. Angular rivals React in  
the popularity of JavaScript-based SPAs. I attribute a lot of its competitive  
edge to adopting TypeScript far sooner than React did.  
Blazor, unlike JavaScript-based SPAs, is built atop .NET. While TypeScript  
might help developers to be more productive with JavaScript, C\# has long  
had most of the benefits that TypeScript offered to JavaScript development.  
This is the very nature of C\# development, flow analysis, statement  
completion, a feature-full ecosystem, and reliable refactoring. C\# is a  
modern, object-oriented first, and type-safe programming language. It’s one  
of the primary reasons that I believe Blazor’s future is so bright. The C\#  
language is constantly evolving and maturing, further expanding its  
capabilities. It’s open-source and new features are often inspired and  
influenced, and sometimes even  
developed by the developer community.  
All that being said, Blazor provides interoperability with JavaScript as well.  
You can call JavaScript from your Blazor code, and you can call .NET code  
from your JavaScript code. This is a useful feature to leverage existing  
JavaScript utilitarian functionality and JavaScript APIs.  
# Why adopt Blazor  
There are seemingly countless new use cases specific to WebAssembly that  
were not realistically achievable with JavaScript alone. It’s easy to imagine  
applications being delivered over the web to your browser, powered by  
WebAssembly for more elaborate and resource-intensive use cases. If you  
haven’t heard of AutoCAD before, it’s computer-aided design software that  
architects, engineers, and construction professionals rely on to create 2D  
and 3D drawings. It’s a desktop application, but imagine being able to run a  
program like this natively in a web browser. Imagine audio and video  
editing, robust and resource-taxing games or you name it all in the browser.  
This is a paradigm shift in what’s possible with the web app platform  
holistically, as a delivery mechanism for the next generation of software development. The web app development platform continues to evolve,  
grow, and mature. Internet-based data processing and ingestion systems  
thrive because of their connectivity to the world. The web app development  
platform serves as the median betwixt a developers’ imagination and a  
user’s desire.  
I believe that in the coming years, we will start seeing more and more  
WebAssembly powered applications. And Blazor WebAssembly will be  
.NET’s solution of choice.  
.NET’s potential in the browser  
At my first developer job out of college, I was the junior most developer on  
a team of developer leads or architects. I vividly recall being seated in a  
cube farm alone, neighboring cubes were empty. But all the surrounding  
offices were filled with the rest of the team. I wasn’t fortunate enough to  
have a developer mentor at the time, so I had to learn a lot myself.  
I was working in the automotive industry, we were implementing a low-  
level communication standard known as the on-board diagnostics \(OBD\)  
protocols and we were doing so with the .NET SerialPort type. We  
were writing applications that performed state testing for vehicle emissions.  
In the US, most states mandate vehicles of a certain age to have annual  
emissions tests to ensure their ability to be licensed. The idea is rather  
simple, evaluate the vehicle’s various conditions it exhibits. For example, a  
vehicle could have its hardware triggering state changes, these changes  
propagate through the firmware — each wire transmitting information as it  
happens. The OBD system sits in the onboard vehicle computers, which can  
relay this information to interested parties. Your “check engine” light, for  
example, is a diagnostic code from the OBD system.  
The apps were primarily built as Win Forms applications and there were a  
few web service apps. But this meant it was limited to the .NET  
Framework, and Windows at the time — in other words, it wasn’t cross-  
platform. The application had to communicate with various web services to  
persist the data, and pull lookup data points. At the time it would have been unimaginable to write something like this and deploy it as a web app, it had  
to be Win Forms on Windows.  
It is now, however; very easy to imagine this application being re-written as  
a web app with Blazor WebAssembly.  
Thanks to the Mono .NET Runtime that it runs on top of. Mono is what  
makes writing cross-platform .NET apps possible.  
I would imagine it would be straightforward to implement the same .NET  
SerialPort object that we were using in Win Forms, instead using  
Blazor WebAssembly. The corresponding implementation could  
hypothetically rely on WebAssembly interop with the native JavaScript  
Web Serial APIs. This kind of cross-platform functionality already exists  
with other implementations, such as the the .NET HttpClient in Blazor  
WebAssembly. With Blazor WebAssembly, our compilation target is  
WebAssembly and the Mono Runtime’s implementation is the fetch Web  
API. You see, .NET has the entire web as its playground now.  
.NET is here to stay  
WebAssembly is supported in all major browsers and covers nearly 95% of  
all users according to the “Can I use WebAssembly" website. It’s the future  
of the web, and you’ll continue to see developers building applications  
using this technology.  
.NET isn’t going anywhere either. Microsoft continues to move forward at  
staggering speeds, with release cadences that are predictable and profound.  
I believe that the web developer community is extremely strong, and the  
software development industry as a whole recognizes ASP.NET Core as one  
of the best options for modern and Enterprise-friendly web app dev  
platforms. JavaScript is still a necessity but less of a concern from your  
perspective as WebAssembly relies on it today and they play very nicely  
together. “It is expected that JavaScript and WebAssembly will be used  
together in several configurations”.4 Familiarity  
If you’re a C\# developer, great! If you’re a JavaScript developer, awesome!  
Bring these existing skills to the table, and Blazor will feel very familiar  
through both sets of lenses. In this way, you can keep using your HTML  
and CSS skills, your favorite CSS libraries, and you’re free to work  
smoothly with existing JavaScript packages. JavaScript development is  
however deemphasized, as you’ll code in C\#. C\# is from Microsoft and  
heavily influenced by .NET developer community. In my opinion, C\# is one  
of the best programming languages! But, don’t take my word for it — I’ll  
show you why I believe this to be true throughout this book.  
If you’re coming from a web development background, you’re more than  
likely used to client-side routing, event handling, HTML templating of  
some sort, and component authoring. Everything that you’ve grown to love  
about web development is still at the forefront of Blazor development.  
Blazor development is easy and intuitive. Additionally, Blazor provides  
various isolation models for both JavaScript and CSS. You can scope  
JavaScript and CSS to individual components. You can continue to use your  
favorite CSS preprocessors too. You’re entirely free to pick whichever CSS  
framework you prefer.  
Safe and secure  
Long before WebAssembly, there was another web-based technology that  
I’d be remiss not to mention\: Microsoft Silverlight was a plug-in powered  
by the .NET Framework. Silverlight relied on the Netscape plugin  
application programming interface \(NPAPI\), which has long since been  
deprecated. The plug-in architecture proved to be a security concern, and all  
of the major browsers started phasing out support of NPAPI. As such was  
the death of Silverlight, but rest assured knowing that WebAssembly is not  
a plug-in-based architecture. WebAssembly is every bit as secure as  
JavaScript! WebAssembly plays within the same security sandbox as all  
browser-based JavaScript execution environments. Because of this,  
WebAssembly’s security context is identical to that of JavaScript. Code reuse  
SPA developers have been fighting a losing battle for years, where web API  
endpoints define a payload in a certain shape — and the developer has to  
understand the shape of each endpoint. Consuming client-side code has to  
model the same shape, this is error-prone as the server can change the shape  
of an API whenever it needs to. The client would have to adapt, and this is  
tedious. Blazor can alleviate that concern by sharing models from .NET  
Web APIs, with the Blazor client app. I cannot stress the importance of this  
enough. Sharing the models from a class library with both the server and  
the client is like having your cake and eating it too.  
As a developer who has played on both sides of the development  
experience, from building APIs to consuming them on clients, the act of  
synchronizing model definitions carries with it a great sense of tedium. I  
refer to this as “synchronization fatigue”. Synchronization fatigue wears  
hard on developers who grow frustrated with manually mapping server and  
client models. This is especially true when you have to map type systems  
from different languages — that’s never a fun time. This problem existed in  
backend development too, reading data from a storage medium, such as the  
file system, or database. Mapping the shape of something stored in a  
database to match a .NET object is a solved problem, object relation  
mappers \(ORMs\) do this for us.  
For years and years, I leaned on tooling to help catch common errors where  
the server would change the shape of an API endpoint’s data structure and  
the client app would break. Sure, you could try to use API versioning — but  
if we’re honest with each other, that has its own set of complexities. Tooling  
simply wasn’t enough, and it was very difficult to prevent synchronization  
fatigue. Occasionally, wild ideas would emerge to combat these concerns,  
but you have to ask yourself “is there a better way?” The answer is, “yes,  
with Blazor there is!”. I’ll discuss tooling in a bit more depth in the next  
section.  
Entire .NET libraries can be shared, and consumed in both server-side and  
client-side scenarios. Making use of existing logic, functionality, and capabilities allows for developers to focus on innovating more as they’re  
not required to re-invent the wheel. Also, developers don’t have to waste  
time maintaining two different languages mapping models delivered over  
from a server to a client browser. You can make use of common extension  
methods, models, and utilitarian functions that can all be easily  
encapsulated, tested, and shared. This fact alone actually has an implicit and  
perhaps less obvious quality. You see, a single team can write the client, the  
server, and the abstraction together. This shortens the time to innovate  
more, as they’re not blocked by other teams who might have otherwise been  
busy updating their code. Another way to think of this is that there are tons  
of applications being written around the world but multiple teams, where at  
least one team is relying on another team. It’s a very common development  
domain, that’s how we often do what we do. But it’s not a necessity with  
Blazor.  
Tooling  
As developers, we have many options when it comes to tooling. Choosing  
the right tool for the job is just as important as the job itself. You wouldn’t  
use a screwdriver to hammer in a nail, would you? Productivity of the  
development team is always a major concern for application development.  
If your team fumbles about or struggles to get common programming tasks  
done — the entire project can and will eventually fail. With Blazor  
development, you can use proven developer tooling such as\:  
Visual Studio  
Visual Studio for Mac  
Visual Studio Code  
Mileage may vary based on your OS. On Windows Visual Studio is great,  
on macOS, it’s probably easier to use Visual Studio Code. JetBrains Rider  
is another amazing .NET development environment. The point is that as a  
developer, you have plenty of really good options. Whichever integrated  
development environment \(IDE\) you decide on, it needs to work well with the .NET ecosystem. Modern IDEs power developers to be their most  
productive. C\# is powered by Roslyn \(The .NET Compiler Platform\), and  
while it’s opaque to you the developer, we’re spoiled with features such as\:  
Statement completion \(IntelliSense™\).  
As you type, the IDE shows pick lists of all the applicable and  
contextual members, providing semantic guidelines, and more  
rapid code discoverability.  
Developer documentation enabled by triple-slash comments that  
further advance code comprehension and readability.  
Artificial Intelligence Assisted IntelliSense \(AI, IntelliCode™\).  
As you type, the IDE offers suggestions to complete your code  
based on model-driven predictions, which are learned from all  
100+ star open-source code repositories on GitHub.  
GitHub Copilot \(AI pair programmer\)  
As you type, the IDE suggests entire lines or functions, trained by  
billions of lines of public code.  
Refactoring  
Quickly and reliably ensure consuming references downstream  
are appropriately updated! From changing method signatures,  
member names, and types across projects within a solution to  
adding C\# modernization efforts that enhance source code  
execution, performance, readability, and the latest C\# features.  
Built-in and extensible code analyzers  
Detect common pitfalls, or missteps in source code, and quickly  
light up the developer experience with warnings, suggestions, and  
even errors. In other words, write cool code.  
Code generators Auto equality implementations, reimagine what’s possible with  
boilerplate code \(have it written for you on your behalf from the  
IDE\).  
THE ART OF DEBUGGING  
A good .NET IDE will have great debugging functionality, it’s a  
requirement — after all, that’s what the good developers I know do  
most of the time. They’re always debugging, refactoring, testing,  
tweaking…perfecting. It’s almost an obsession, when I reflect I think to  
myself “I’m telling this machine to remember my intentions, and reflect  
that on-demand by users around the world in the blink of an eye.” It’s  
beautiful — I can speak to computers, and they listen. I can’t get my  
three sons to do that. Many things make up good developers, but this I  
promise will set you apart. Secretly, we’re all perfectionists, and  
debugging is a major part of that. Features like Hot Reload, and Edit  
and Continue are really useful. I’ll provide you with some tips as we go  
through this book.  
You can also utilize the .NET command-line interface \(CLI\), which is a  
cross-platform toolchain for developing .NET workloads. It exposes many  
commands such as, new \(templating\), build, restore, publish, run,  
test, pack, and migrate.  
Open source  
Blazor is entirely developed in the open, as part of the ASP.NET Core  
GitHub repository.  
Open-source software development is the future of software engineering in  
modern-day development. The reality is that it’ s not “really” new, it’s just  
new to .NET as of March 2014. With the birth of the .NET Foundation,  
developers collaborate openly with negotiated open standards and best  
practices. Innovation is the only path forward, especially when projects  
undergo public scrutiny and natural order prevails. To me, it’s not enough to simply describe .NET as open source. I’m going  
to share with you a bit more perspective about the true value proposition  
and why this is so important. I have witnessed .NET APIs being developed,  
from their inception to fruition — the process I observed is very mature and  
well established. This applies to Blazor as well, as it’s part of the .NET  
family of open source projects.  
Unlike typical projects, open-source projects are developed entirely out in  
the open for the public to see. With .NET, it starts with early discussions  
and then an idea emerges. A GitHub issue is used to draft an ASP.NET  
Core\: api-suggestion label. From a suggestion, after it’s been  
discussed and vetted it moves into a proposal. The issue containing the  
proposal transitions to an ASP.NET Core\: api-ready-for-review  
label. The issue captures everything you’d expect for the proposal\: the  
problem statement, use cases, reference syntax, suggested API surface area,  
example usage, and even links to the comments from the original discussion  
and idea.  
The potential API usually includes bargaining, reasoning, and negotiation.  
After everyone agrees it’s a good proposal a draft is finalized from a group  
of people who participate in the public API design review meeting. The  
official .NET API design review meeting follows a weekly schedule,  
streams live on YouTube and invites developer community members to  
share their thoughts. As part of the review, notes are captured, GitHub  
labels applied, and assuming it receives a stamp of approval — the .NET  
API in question is codified as a snippet. Finally, it moves to ASP.NET Core\:  
api-approved label.  
From there, the issue serves as a point of reference for pull requests that aim  
to satisfy the proposal. A developer takes the issue, implements the API,  
writes unit tests, and creates a pull request \(PR\). The PR undergoes review,  
and when it’s merged the API has to be documented, communicated,  
breaking-changes captured and reported, promoted, shared, analyzed, and  
so on. All of this, for a single .NET API and there are tens of thousands of .NET  
APIs. You’re in good hands, with the strength of all the .NET contributors  
who are building the best platforms in modern app dev today.  
I’m a huge proponent of open-source software development. To me, being  
able to see how a feature is architected, designed, and implemented is a  
game-changer. The ability to post issues, propose features, carry on open  
discussions, maintain Kanban-style projects with automated status updates,  
collaborate with the dev team and others, and create pull requests are all  
capabilities that make this software community-centric. This ultimately  
makes for a better product, without question! Some of the smartest people  
I’ve ever had the privilege of meeting work in this industry, we’re  
collectively shaping the face of human existence as a species. I’ve written  
code that has taught others and learned way more in return. I’ve always  
loved sharing what I learn and the mistakes I’ve made. The software  
industry has made me feel more connected to something meaningful in life.  
I believe that the innovations we \(as developers\) are making and learning  
from today will help future generations.  
COLD CODE AND PERPETUITY  
GitHub values open-source very differently than most organizations.  
GitHub has an archive program, in which they preserve snapshots of  
every active public repository on GitHub. These snapshots will last for  
1,000 years in cold storage in the Arctic World Archive. Located closer  
to the North Pole than the Arctic Circle, the vault is in the Svalbard  
archipelago. I think it is cool that I have code that I’ve written that’s  
stored there — it gives open source developers a sense of perpetuity.  
# Your first Blazor app with the .NET CLI  
Enough talk. Let’s jump in and have you make your very first Blazor app  
using the .NET CLI. The .NET CLI is cross-platform and works on  
Windows, Linux, and macOS. Install the .NET SDK, which includes the .NET CLI and runtime —  
https\://dotnet.microsoft.com/download/dotnet/6.0. Install .NET 6.0, as it’s a  
long-term support \(LTS\) version. With the .NET CLI, you’re able to create  
many .NET workloads. To create a new Blazor WebAssembly application,  
open a terminal and run the following\:  
dotnet new blazorwasm -o FirstApp  
The dotnet new command will have created a new Blazor  
WebAssembly application based on the template. It will output the project  
to a newly created FirstApp directory. You should see command output  
similar to the following\:  
The template "Blazor WebAssembly App" was created successfully.  
This template contains technologies from parties other than  
Microsoft,  
see https\://aka.ms/aspnetcore/6.0-third-party-notices for  
details.  
The template application is built up of a single C\# file, several Razor files,  
CSS files, and an index.html. This application has a few pages, basic  
navigation, data-binding, event handling, and a few other common aspects  
of typical Blazor application development. Next, you’ll need to change  
directories. Use the cd command and pass the directory name\:  
cd FirstApp  
Build the app  
Once you’re in your new application’s directory, the template can be  
compiled using the following dotnet build command\:  
dotnet build  
After the app is compiled \(has a successful build\), you should see  
command output similar to the following\: Microsoft \(R\) Build Engine version 17.0.0+c9eb9dd64 for .NET  
Copyright \(C\) Microsoft Corporation. All rights reserved.  
Determining projects to restore...  
All projects are up-to-date for restore.  
FirstApp -\> ..\\FirstApp\\bin\\Debug\\net6.0\\FirstApp.dll  
FirstApp \(Blazor output\) -\>  
..\\FirstApp\\bin\\Debug\\net6.0\\wwwroot  
Build succeeded.  
0 Warning\(s\)  
0 Error\(s\)  
Time Elapsed 00\:00\:04.20  
Install dev-cert  
If this is your first time ever building and running an ASP.NET Core  
application, you’ll need to trust the developer self-signed certificate for  
localhost. This can be done by running the following command\:  
dotnet dev-certs https --trust  
When prompted, answer “Yes” to install the cert.  
TIP  
If you don’t install and trust the dev certs, you’ll get a warning that you’ll have to accept  
due to the site not being secured.  
Run the app  
To run the template app, use the dotnet run command\:  
dotnet run  
The command output will look similar to the following, and one of the first  
output lines will show where the app is hosted\: ..\\FirstApp\> dotnet run  
Building...  
info\: Microsoft.Hosting.Lifetime\[14\]  
Now listening on\: https\://localhost\:7024  
info\: Microsoft.Hosting.Lifetime\[14\]  
Now listening on\: http\://localhost\:5090  
info\: Microsoft.Hosting.Lifetime\[0\]  
Application started. Press Ctrl+C to shut down.  
info\: Microsoft.Hosting.Lifetime\[0\]  
Hosting environment\: Development  
info\: Microsoft.Hosting.Lifetime\[0\]  
Content root path\: C\:\\Users\\dapine\\source\\repos\\FirstApp  
The localhost URL is current device hostname with a randomly  
available port number. Navigate to the URL with the https\:// scheme,  
in my example https\://localhost\:7024 \(yours will likely be different\). The  
app will launch, and you’ll be able to interact with a fully functional Blazor  
WebAssembly app template as shown in Figure 1-3. Figure 1-3. First Blazor template app  
To stop the app from running, end the terminal session. The template is very  
well documented and, limited with what it shows off. 5  
Instead, let me  
introduce you to the model application that we’ll be using throughout this  
book. Before showing you that application, I’ll show you where you can  
find the code.  
# The code must live on  
Code is only as good as where it is stored. If your code lives on your  
machine, and yours alone — it will eventually never go anywhere else. Think about that for a minute, I’m not wrong. If you’re developing open-  
source software, I can only assume that you’re familiar with GitHub.  
GitHub provides a hosted solution for version control using Git, and it’s the  
best of its kind! Call me biased.  
All of the code for the projects in this book are available free of charge and  
licensed as MIT.  
GitHub repo\: https\://github.com/IEvangelist/learning-blazor  
MIT license\: https\://github.com/IEvangelist/learning-  
blazor/blob/main/LICENSE  
I make extensive use of GitHub Actions to build, test, analyze, source  
generate, package, and deploy all of the apps required. GitHub Actions are  
available for free up to 2,000 minutes a month and 500 MB of storage.  
GitHub Actions are easy to create, and I’ve written several myself. With the  
GitHub Action Marketplace, you can discover published actions that you  
can consume in workflows. A GitHub Action workflow is define as a  
YAML file that contains the instructions to run your composed GitHub  
Actions. For example, whenever code is pushed to the main branch in my  
GitHub repo, a build validation is triggered.  
name\: Build  
on\:  
push\:  
branches\: \[ main \]  
paths\:  
- '\*\*.cs'  
- '\*\*.css'  
- '\*\*.json'  
- '\*\*.razor'  
- '\*\*.csproj'  
jobs\:  
build\:  
name\: build  
runs-on\: ubuntu-latest  
steps\:  
- uses\: actions/checkout@v2 - name\: Setup .NET 6.0  
uses\: actions/setup-dotnet@v1  
with\:  
dotnet-version\: 6.0.x  
- name\: Install dependencies  
run\: dotnet restore  
- name\: Build  
run\: dotnet build --configuration Release --no-restore  
- name\: Test  
run\: dotnet test --no-restore --verbosity normal  
From the perspective of continuous integration and continuous deployment  
\(CI/CD\) this is very powerful.  
The preceding GitHub workflow\:  
Has the name “Build”.  
Is triggered on a push to main, when any file in the changeset ends  
with .cs, .css, .json, .razor, or .csproj.  
Defines a single build job, which runs on the latest version of  
Ubuntu.  
The build job defines several steps\:  
Checkout the repo at the specific commit that triggered the run.  
Setup .NET 6.0 within the context of the execution environment.  
Installs dependencies via dotnet restore.  
Compiles the code using dotnet build.  
Tests the code using dotnet test.  
This is but one example, among several within the application’s GitHub  
repo. As a developer who is onboarding with the sample application, it is  
very important to understand all of the moving pieces involved. You’ll learn  
all that there is to know about the source code itself. Along the way, you’ll also learn about how the code is deployed, hosted, and the general flow of  
data.  
# Perusing the “Learning Blazor” sample app  
Throughout this book, we’ll be working with the Learning Blazor model  
app. The best way to learn is to see things in action and get your hands  
dirty. The Learning Blazor model app leverages a microservices  
architecture. The application wouldn’t be very exciting without some sort of  
meaningful, or practical data. And while it’s thrilling to discuss all the  
bleeding edge technologies, it’s much less engaging when the sample  
source code lacks real-world appeal.  
As I said, we’ll go through each of these projects in the coming chapters,  
but let’s take a high-level look at what these projects do and how they’re  
put together. This should also give you an idea of all the different things  
you could do with Blazor and inspire you to write your own apps. Figure 1-4. Architecture diagram As shown in Figure 1-4, the apps is architected such that the all clients must  
request access to all APIs through an authentication provider. Once  
authenticated, their client can access the Web.Api and the Web.PwnedApi.  
These APIs rely on other services and APIs such as Twitter, ASP.NET Core  
SignalR, Logic Apps, and Redis Cache. They’re all part of the shared  
resource group, along with the \*Azure Static Web App. As a developer  
when you push changes to the GitHub repository, various GitHub Actions  
are conditionally triggered which will deploy the latest code to the  
corresponding Azure resources.  
The solution file contains several projects that together make up the entire  
application as a cohesive unit. While each project within the solution is  
responsible for its core functionality, orchestrating projects with disparate  
functionality cohesively is a requirement of any successful application. The  
following sections list the primary projects within the solution and provide  
topical details about them.  
Web Client  
The client application, named simply Web.Client is a Blazor WebAssembly  
project — targeting on Microsoft.NET.Sdk.BlazorWebAssembly  
software development kit \(SDK\). The web project is responsible for all of  
the user interactions and experiences. Through pages, client-side routing,  
form validation, model binding, and component-based UIs we’ll explore all  
of the major features of Blazor in this web app. This app defines a  
Learning.Blazor\` namespace that ignores the project name. MINDFULNESS AND POISE  
The Blazor WebAssembly hosting model means that your C\# code is  
served to the client browser. What do we tell ourselves about clients?  
“We must always assume the potential for malicious intent.” It’s better  
to be safe than sorry. Just as you would avoid putting sensitive data into  
JavaScript, such as API keys, passwords, and private tokens, for  
example, you’d also bring that same sense of mindfulness to the client  
code you write in Blazor.  
Web API  
Our client application would be rather boring, if not for data. And how do  
web apps get data, you might ask? HTTP of course, but in addition to that  
— our application is going to also make use of ASP.NET Core SignalR and  
Web Sockets for real-time web functionality. Again, the sample app uses  
the Blazor WebAssembly hosting model but it’s still valuable to show real-  
time web functionality. As such, ASP.NET Core SignalR is used, but not in  
the same way that was previously described when using the Blazor Server  
hosting model.  
There is an ASP.NET Core Web API project, named Web.Api which targets  
Microsoft.NET.Sdk.Web. The project will offer up various endpoints  
on which the client app will rely. The API and SignalR endpoints will be  
protected by Azure Active Directory \(AAD\) business-to-consumer \(B2C\)  
authentication.  
The Web API project uses distributed caching \(Redis\) to ensure a  
responsive experience. Selective endpoints rely on services that will  
deterministically yield data from either the cache or the raw-HTTP-  
dependent endpoint.  
Pwned Web API The Pwned Web API project also relies on the  
Microsoft.NET.Sdk.Web SDK. This project exposes the “Have I  
Been Pwned?” service functionality from Troy Hunt. After a user has  
provided consent to allow the application to use their email address, it is  
sent to the Pwned service. The API provides details that are used to notify  
the user if their email has been a part of a data breach. There is additional  
functionality from this service that we’ll cover later in the book.  
Web abstractions  
With a simple C\# class library project, targeting Microsoft.NET.Sdk  
and named Web.Abstractions we define a few abstractions that will be  
shared between the client and server apps. These contracts will serve as the  
glue for the SignalR endpoints. From the client’s perspective, these  
abstractions will provide a discoverability set of APIs from which the client  
can subscribe to events and methods in which they can communicate back  
to the server. From the server’s perspective, these abstractions solidify the  
method and event names — ensuring that there are not any possible  
misalignments. This is extremely important and a common pitfall in all  
JavaScript-based SPA development.  
Web extensions  
In modern C\# application development, it’s common to encapsulate  
repetitive subroutines into extensions. Due to their repetitive nature,  
utilitarian extension methods are a perfect candidate for a shared class  
library-style project. In our case, we’ll use the Web.Extensions project  
which targets Microsoft.NET.Sdk. This project provides functionality  
that will be used throughout most of our other projects within our solution,  
especially both client and server app scenarios.  
Web HTTP extensions  
We define another extensions library, but this one focuses on a common  
subroutine I noticed when writing the app for this book. I have several shared class libraries all of which were making HTTP calls — and I wanted  
all HTTP calls that fail to have a specific retry policy for handling transient  
errors. These policies are defined within the Web.Http.Extensions project  
which targets Microsoft.NET.Sdk.  
Web functions  
Serverless programming has become very prevalent over the past decade.  
Immutable infrastructure, resiliency, and scalability are always highly  
sought-after features. Azure Functions are used to wrap my weather  
services. I decided to use the Open Weather Map API which is free,  
supports multiple languages, and is rather accurate. With an Azure Function  
app, I can encapsulate my configuration, protect my API keys, use  
dependency injection, and delegate calls to the weather API. This project is  
named Web.Functions and it targets Microsoft.NET.Sdk.  
Web joke services  
Life is too short not to enjoy it, we need to laugh more, crack a smile and  
not take ourselves so seriously. The Web.JokeServices library is  
responsible for aggregating jokes on a pseudo-random schedule. There are  
collectively three separate and free joke APIs that are aggregated in this  
project.  
Internet Chuck Norris Database\: https\://www.icndb.com  
I Can Haz Dad Joke\: https\://icanhazdadjoke.com  
Random Programming Joke API\:  
https\://karljoke.herokuapp.com/jokes/programming/random  
Web models  
All the things that interacted with are a specific shape, they have various  
members that help to uniquely identify them. This is of course, at the core  
of object-oriented programming and the same is true for our application. We have a project named Web.Models and it’s responsible for all of the shared  
models within our application.  
Web local storage  
A good developer avoids reinventing the wheel, but for the sake of  
education, the web local storage project implements the browser’s local  
storage in the form of a library. This project is named Web.LocalStorage  
and is responsible for delegating JavaScript interop calls to expose native  
localStorage functionality, invokable from C\#. The best part about this  
library is that it makes for an amazing example project to see how  
JavaScript interop works. While it doesn’t demonstrate making calls on  
.NET objects from JavaScript, it does highlight how to read and write to  
JavaScript’s native window.localStorage object. I will however  
cover both sides of the interoperability throughout the book. And later, I’ll  
even teach you how to automatically implement client side JavaScript APIs  
using C\# source generators and IJSRuntime extensions.  
Web Twitter components  
To exemplify component library functionality, I choose to create a Twitter  
component Razor library. It’s named Web.TwitterComponents, and the  
project relies on the Microsoft.NET.Sdk.Razor SDK. It provides  
two components, one representing a Tweet, and the other represents a  
collection of Tweets. This project will demonstrate how components are  
templated, it shows a parent, child hierarchy relationship. It shows how  
components can use JavaScript interop, and update on asynchronous events  
with StateHasChanged.  
Web Twitter services  
The Web.TwitterServices project is consumed by Web.Api project, and  
not the Web.TwitterComponents project. The Twitter services are used in  
the context of background service. Background services provide a means  
for managing long-running operations that function outside the request and response pipeline. As is the case with Tweet streaming, as filtered Tweets  
occur in real-time — our services will propagate them accordingly.  
# Summary  
We’ve covered a lot of ground in this chapter. We discussed the origins of  
Blazor and .NET web app development. From a language standpoint, we’ve  
compared JavaScript SPAs to that of .NET. I’ve answered many questions  
as to why you’d use Blazor over any other SPA. You created your very first  
Blazor app from a template, but more importantly, had an overview of the  
projects that make up the Learning Blazor model app for this book. In the  
next chapter, we’re going to dive into the source code of this app and start  
talking about Blazor app startup.  
1 https\://webassembly.org  
2 Emscripten https\://emscripten.org/  
3 https\://insights.stackoverflow.com/survey/2021\#most-popular-technologies-language  
4 WebAssembly\: FAQ https\://webassembly.org/docs/faq  
5 Microsoft Docs\: https\://docs.microsoft.com/dotnet/core/tools/dotnet-new-sdk-  
templates\#blazorwasm Chapter 2. Executing the App  
A NOTE FOR EARLY RELEASE READERS  
With Early Release ebooks, you get books in their earliest form—the  
author’s raw and unedited content as they write—so you can take  
advantage of these technologies long before the official release of these  
titles.  
This will be the second chapter of the final book. Please note that the  
GitHub repo will be made active later on.  
If you have comments about how we might improve the content and/or  
examples in this book, or if you notice missing material within this  
chapter, please reach out to the editor at rfernando@oreilly.com.  
In this chapter, I’ll walk you through how the Blazor WebAssembly app  
starts executing. From the rendering of static HTML to the invocation of  
JavaScript that bootstraps Blazor, exploring the anatomy of the app. This  
includes the Program entry point and the startup conventions. You’ll learn  
about the router, client-side navigation, shared components, and layouts.  
You’ll also learn about top-level navigation and custom components in the  
app. All of this will be taught using the “Learning Blazor” sample  
application’s source code.  
I’d like for you to embrace the mindset that you’re onboarding as a new  
developer to an existing application — much like you would in the real-  
world. I want you to imagine that you’re starting a new journey, where  
you’re getting brought up to speed on an existing code base. The idea is that  
I’ll be your mentor, I’ll meticulously walk through the code, presenting it to  
you and I’ll explain what exactly it’s doing, and how it’s doing it. I’ll also  
describe why certain decisions were made, and what alternative approaches should be considered. You should have a grasp of how the model app works  
and will be prepared to work with it in the future chapters.  
A LOVE LETTER FOR THE NEXT DEVELOPER  
Let’s take a moment to show some love for code. Whether you’re a  
developer motivated by a paycheck or one who wants to leave the world  
a better place, we all appreciate what code can do. At the base level,  
code simply tells computers what to do, and that in itself is awesome.  
But, good code, well-written code, is a masterpiece and is full of love  
for the next developer. If you write code well, you’re setting up the next  
developer who uses your code for success. That developer will be able  
to read, understand, debug, maintain, and extend your code. Poorly  
written code, on the other hand is a terrible legacy to pass on. So,  
remember that although the code itself is important, the human beings  
behind it are more important.  
In the previous chapter, we looked at the web app development platform,  
the ASP.NET Core as a framework, open-source development, the  
programming languages of the web, development environments, and now  
we’ll talk code. “Talk is cheap. Show me the code.” 1  
As part of the learning  
process with this book, I’d like you to embrace the mindset that you’re a  
new person on a team who is being onboarded. As your teammate and  
mentor, I’ll be bringing you up to speed on the codebase to an existing  
application, the Learning Blazor model app. We’ll look at the code together,  
and although I’ll be explaining why certain decisions and what alternatives  
were considered, I’ll also leave room for you to read the code and let it tell  
you its own story.  
# Requesting the initial page  
Let’s first take a look at what happens when a client browser wants to  
access our application. It requests the initial page and HTML is returned  
from the server. Within the HTML itself, there are \<link\> and \<script\> tags. These are additional references to resources that our  
Blazor application needs to start accepting user input with components  
rendered from the Blazor markup. The resources include, but are not limited  
to CSS, JavaScript, images, Wasm files, and .NET dynamic-link libraries  
\(.dlls\). These additional resources are requested as part of the initial page  
load, and while this is happening the app cannot be interacted with.  
Depending on the size of the peripheral resources and the connection speed  
of the client, the amount of time it takes for the app to become interactive  
will vary.  
The Time to Interactive \(TTI\) is a measurement of the amount of time it  
takes before a website is ready to accept user input. One of the tradeoffs  
from using Blazor WebAssembly is that the initial load time of the app is a  
bit longer than that of Blazor Server. The app has to be downloaded to the  
browser before running, whereas with Blazor Server the app is rendered on  
the server. The TTI for Blazor WebAssembly can be a bit longer than that  
of Blazor Server. Hypothetically, if it the TTI is more than a few seconds,  
users will expect some sort of visual indicator that the app is loading.  
With Blazor WebAssembly, you can lazy load full .NET assemblies. This is  
much like doing the equivalent thing in JavaScript — where various  
components are represented by JavaScript, instead we get to use C\#. This  
feature can make your application more efficient by only fetching the  
dependent assembly on demand, and when needed. But before showing you  
how to lazy load assemblies, I’ll teach you how the Blazor WebAssembly  
application startup loads assemblies.  
Let’s start by examining the parts of the initial page’s HTML content.  
# App startup and bootstrapping  
The following HTML is served to the client, and it’s important to  
understand what the client browser will do when it renders it. Let’s jump in  
and take a look at the index.html code. I know it’s a lot, but read through it  
first and we’ll go through it piece-by-piece after\: \<!DOCTYPE html\>  
\<html class="has-navbar-fixed-top"\>  
\<head\>  
\<meta charset="utf-8" /\>  
\<meta name="viewport"  
content="  
width=device-width, initial-scale=1.0,  
maximum-scale=1.0, user-scalable=no" /\>  
\<title\>Learning Blazor\</title\>  
\<link  
href="https\://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"  
rel="stylesheet"\>  
\<!-- Bulma\: micro extensions --\>  
\<link href="https\://cdn.jsdelivr.net/npm/  
bulma-slider@2.0.4/dist/css/bulma-slider.min.css"  
rel="preload" as="style"  
onload="this.rel='stylesheet'"\>  
\<link href="https\://cdn.jsdelivr.net/npm/  
bulma-quickview@2.0.0/dist/css/bulma-  
quickview.min.css"  
rel="preload" as="style"  
onload="this.rel='stylesheet'"\>  
\<link href="https\://cdn.jsdelivr.net/npm/  
@creativebulma/bulma-tooltip@1.2.0/dist/bulma-  
tooltip.min.css"  
rel="preload" as="style"  
onload="this.rel='stylesheet'"\>  
\<link href="https\://cdn.jsdelivr.net/npm/  
bulma-badge@3.0.1/dist/css/bulma-badge.min.css"  
rel="preload" as="style"  
onload="this.rel='stylesheet'"\>  
\<link href="https\://cdn.jsdelivr.net/npm/  
@creativebulma/bulma-badge@1.0.1/dist/bulma-  
badge.min.css"  
rel="preload" as="style"  
onload="this.rel='stylesheet'"\>  
\<link type="text/css" href="https\://unpkg.com/bulma-prefers-  
dark"  
rel="preload" as="style"  
onload="this.rel='stylesheet'"\>  
\<link href="/css/app.css" rel="stylesheet" /\>  
\<link href="Web.Client.styles.css" rel="stylesheet" /\>  
\<link href="/\_content/Web.TwitterComponents/twitter- component.css"  
rel="stylesheet" /\>  
\<link rel="manifest" href="/manifest.json" /\>  
\<link rel="apple-touch-icon" sizes="512x512" href="/icon-  
512.png" /\>  
\<link rel="apple-touch-icon" sizes="192x192" href="/icon-  
192.png" /\>  
\<link rel="icon" type="image/png" sizes="32x32" href="/icon-  
32.png"\>  
\<link rel="icon" type="image/png" sizes="16x16" href="/icon-  
16.png"\>  
\<base href="/" /\>  
\<script src="https\://kit.fontawesome.com/b5bcf1e25a.js"  
crossorigin="anonymous"\>\</script\>  
\<script src="/js/app.js"\>\</script\>  
\</head\>  
\<body\>  
\<div id="app"\>  
\<section id="splash" class="hero is-fullheight-with-  
navbar"\>  
\<div class="hero-body"\>  
\<div class="container has-text-centered"\>  
\<img src="media/blazor-logo.png"  
class="blazor-logo mb-5" /\>  
\<div class="fa-3x is-family-code"\>  
\<span class="has-text-weight-bold"\>  
Blazor WebAssembly\:\</span\> Loading...  
\<i class="fas fa-sync fa-spin"\>\</i\>  
\</div\>  
\</div\>  
\</div\>  
\</section\>  
\</div\>  
\<div id="blazor-error-ui"\>  
\<div class="modal is-active"\>  
\<div class="modal-background"\>\</div\>  
\<div class="modal-content"\>  
\<article class="message is-warning is-medium"\>  
\<div class="message-header"\>  
\<p\>  
\<span class="icon"\>  
\<i class="fas fa-exclamation-  
circle"\>\</i\> \</span\>  
\<span\>Error\</span\>  
pulled-right"  
\</p\>  
\</div\>  
\<div class="message-body"\>  
An unhandled error has occurred.  
\<button class="button is-danger is-  
onClick="  
window.location.assign\(window.location.origin\)"\>  
\<span class="icon"\>  
\<i class="fas fa-redo"\>\</i\>  
\</span\>  
\<span\>Reload\</span\>  
\</button\>  
\</div\>  
\</article\>  
\</div\>  
\<button class="modal-close is-large" aria-  
label="close"\>\</button\>  
\</div\>  
\</div\>  
\<script  
src="/\_content/Microsoft.Authentication.WebAssembly.Msal/  
AuthenticationService.js"\>\</script\>  
\<script src="/\_framework/blazor.webassembly.js"\>\</script\>  
\<script\>navigator.serviceWorker.register\('service-  
worker.js'\);\</script\>  
\</body\>  
\</html\>  
I’ll break down each of the primary sections. Let’s start with reading  
through the \<head\> tag’s child elements\:  
\<head\>  
\<meta charset="utf-8" /\>  
\<meta name="viewport"  
content="  
width=device-width, initial-scale=1.0,  
maximum-scale=1.0, user-scalable=no" /\>  
\<title\>Learning Blazor\</title\> \<link  
href="https\://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"  
rel="stylesheet"\>  
\<!-- Bulma\: micro extensions --\>  
\<link href="https\://cdn.jsdelivr.net/npm/  
bulma-slider@2.0.4/dist/css/bulma-slider.min.css"  
rel="preload" as="style"  
onload="this.rel='stylesheet'"\>  
\<link href="https\://cdn.jsdelivr.net/npm/  
bulma-quickview@2.0.0/dist/css/bulma-  
quickview.min.css"  
rel="preload" as="style"  
onload="this.rel='stylesheet'"\>  
\<link href="https\://cdn.jsdelivr.net/npm/  
@creativebulma/bulma-tooltip@1.2.0/dist/bulma-  
tooltip.min.css"  
rel="preload" as="style"  
onload="this.rel='stylesheet'"\>  
\<link href="https\://cdn.jsdelivr.net/npm/  
bulma-badge@3.0.1/dist/css/bulma-badge.min.css"  
rel="preload" as="style"  
onload="this.rel='stylesheet'"\>  
\<link href="https\://cdn.jsdelivr.net/npm/  
@creativebulma/bulma-badge@1.0.1/dist/bulma-  
badge.min.css"  
rel="preload" as="style"  
onload="this.rel='stylesheet'"\>  
\<link type="text/css" href="https\://unpkg.com/bulma-prefers-  
dark"  
rel="preload" as="style"  
onload="this.rel='stylesheet'"\>  
\<link href="/css/app.css" rel="stylesheet" /\>  
\<link href="Web.Client.styles.css" rel="stylesheet" /\>  
\<link href="/\_content/Web.TwitterComponents/twitter-  
component.css"  
rel="stylesheet" /\>  
\<link rel="manifest" href="/manifest.json" /\>  
\<link rel="apple-touch-icon" sizes="512x512" href="/icon-  
512.png" /\>  
\<link rel="apple-touch-icon" sizes="192x192" href="/icon-  
192.png" /\>  
\<link rel="icon" type="image/png" sizes="32x32" href="/icon-  
32.png"\>  
\<link rel="icon" type="image/png" sizes="16x16" href="/icon-  
16.png"\> \<base href="/" /\>  
\<script src="https\://kit.fontawesome.com/b5bcf1e25a.js"  
crossorigin="anonymous"\>\</script\>  
\<script src="/js/app.js"\>\</script\>  
\</head\>  
The app uses the web standard UTF-8 character set. There’s also a  
viewport specification, both of which are very common \<meta\> tags in  
HTML. We set the initial \<title\> for the page of “Learning Blazor”.  
After the title is a set of \<link\> elements. I spent a bit evaluating  
alternative options to the default Bootstrap CSS from the template. I wanted  
a CSS framework that took zero JavaScript dependencies, as this approach  
shows Blazor DOM manipulation.  
I choose Bulma, an amazingly clean and simple CSS framework. This is a  
perfect match for Blazor, as we can use C\# instead of JavaScript to change  
styles at will. “Bulma is a CSS library. This means it provides CSS classes  
to help you style your HTML code. To use Bulma, you can either use the  
pre-compiled .css file or install the .sass files so you can customize it to  
your needs.” 2  
Bulma provides everything that I’ll need to style my website,  
with extensibility in mind you have modern utilities, helpers, elements,  
components, forms, and layout styles. They also have a huge developer  
community following, where extensions are shared. These additional CSS  
packages depend on Bulma itself, they just override or extend existing class  
definitions.  
When we see a \<link\> element that has its rel set to "preload", it  
indicates that these requests will happen asynchronously. This works by  
adding the as="style" onload="this.rel='stylesheet'"  
attributes. This lets the browser know that the \<link\> is for a style sheet  
and that when it does load to update the DOM setting the rel appropriately  
to "stylesheet". We will pull in some additional CSS references for  
sliders, quick views, tooltips, and media-query-centric @media  
\(prefers-color-scheme\: dark\) \{ /\* styles \*/ \}  
functionality. This exposes the ability to detect the client’s preferred color scheme and apply the appropriate styles. For example, an alternative color  
scheme to the default white is dark. These two color schemes account  
for the vast majority of all web user experiences.  
We then define another \<link\> with an href to the /css/app.css path to  
the web server.  
The important styles from Bulma are not using the hot-swap on load tactic.  
Instead, they are available to style the simple HTML while we load the app  
to a point user interactivity. The app also preemptively declares the \<link  
rel="manifest" href="/manifest.json" /\> with the  
corresponding \<link\> icons. This is specifically to expose icons and the  
Progressive web app \(PWA\) capabilities. “The HTML \< base\> element  
specifies the base URL to use for all relative URLs in a document. There  
can be only one \<base\> element in a document.”  
3  
All applications should consider the usage of iconography where possible to  
make for a more accessible web experience. Icons, when done correctly can  
immediately convey a message and intent, and often with little text. I  
proudly use Font Awesome, they have a free offering and I’ve been very  
happy with the seamless integration of it wherever I need it in my Blazor  
markup. A \<script\> points to my Font Awesome kit registered to my  
app. The next line, immediately following the Font Awesome source is the  
application’s JavaScript bits. There are effectively three primary of focus;  
the /js, /css, and /\_content directories. That was the child elements of the  
\<head\> node.  
Next, we’ll take a look at the \<body\> nodes’ contents\:  
\<body\>  
\<div id="app"\>  
\<section id="splash" class="hero is-fullheight-with-  
navbar"\>  
\<div class="hero-body"\>  
\<div class="container has-text-centered"\>  
\<img src="media/blazor-logo.png"  
class="blazor-logo mb-5" /\>  
\<div class="fa-3x is-family-code"\>  
\<span class="has-text-weight-bold"\> Blazor WebAssembly\:\</span\> Loading...  
\<i class="fas fa-sync fa-spin"\>\</i\>  
\</div\>  
\</div\>  
\</div\>  
\</section\>  
\</div\>  
\<div id="blazor-error-ui"\>  
\<div class="modal is-active"\>  
\<div class="modal-background"\>\</div\>  
\<div class="modal-content"\>  
\<article class="message is-warning is-medium"\>  
\<div class="message-header"\>  
\<p\>  
\<span class="icon"\>  
\<i class="fas fa-exclamation-  
circle"\>\</i\>  
\</span\>  
\<span\>Error\</span\>  
pulled-right"  
\</p\>  
\</div\>  
\<div class="message-body"\>  
An unhandled error has occurred.  
\<button class="button is-danger is-  
onClick="  
window.location.assign\(window.location.origin\)"\>  
\<span class="icon"\>  
\<i class="fas fa-redo"\>\</i\>  
\</span\>  
\<span\>Reload\</span\>  
\</button\>  
\</div\>  
\</article\>  
\</div\>  
\<button class="modal-close is-large" aria-  
label="close"\>\</button\>  
\</div\>  
\</div\>  
\<script  
src="/\_content/Microsoft.Authentication.WebAssembly.Msal/  
AuthenticationService.js"\>\</script\>  
\<script src="/\_framework/blazor.webassembly.js"\>\</script\>  
\<script\>navigator.serviceWorker.register\('service- worker.js'\);\</script\>  
\</body\>  
The first element in the \<body\> element is the \<div id="app"\>...  
\</div\>. This is the root of the Blazor application, the true SPA. It is very  
important to understand that the contents of this target element will be  
automatically and dynamically changed to represent the Wasm application’s  
manipulation of the DOM. Most SPA developers settle with letting the UX  
be a giant white wall of 10pt default font with black text, that reads  
“Loading…”. I’m not okay with that for a user experience. I want to  
provide visual cues to the user that the application is being responsive and  
is loading. I’d rather have the \<div\> initially represent a basic splash  
screen, it’ll include the Blazor logo image and a message that reads  
"Blazor WebAssembly\: Loading...". It will also show an  
animated loading spinner icon.  
The \<section id="splash"\>...\</section\> acts as the loading  
markup. It will be replaced when Blazor is ready. This markup is not  
Blazor, but rather pure HTML and CSS. This markup will render similar to  
that shown in Figure 2-1. Without this markup, the default loading  
experience has black text and says “Loading”. This gives you the ability to  
customize the splash \(or loading\) screen user experience.  
TIP  
When writing your own Blazor apps, you should consider adding a loading indicator to  
your application. This is a great way to give users a sense of progress and to avoid a  
“white screen of death” when the application is first loaded. Figure 2-1. Blazor WebAssembly\: Loading.  
In the index.html, following the app node there lies the “blazor-error-ui”  
\<div\> element. This is adjusted from the template to be a bit more suited  
to our app’s styling. This specific element identifier will be used by Blazor  
when it’s bootstrapping itself into the driver seat. If there are any  
unrecoverable errors, it will show this element. If all goes well, you  
shouldn’t see this.  
After the error element, are a few remaining \<script\> tags. These are the  
JavaScript references for our referenced components, such as authentication  
and our Twitter Component library. The final two \<script\> tags are very  
important.  
\<script src="/\_framework/blazor.webassembly.js"\>\</script\>  
\<script\>navigator.serviceWorker.register\('service-worker.js'\);  
\</script\>  
The first \<script\> tag’s referenced JavaScript is what starts the  
execution of Blazor WebAssembly. Without this line, our app would be  
done rendering. This initiates the boot subroutine from Blazor, where  
WebAssembly takes hold, JavaScript interop lights up, and all sorts of fun  
things kick off. The various .NET executables, namely .dlls are fetched and  
the Mono runtime is prepared. As part of the Blazor boot subroutine, the  
app element is discovered in the document. The entry point of the app is  
invoked. This is where the .NET app starts executing in the context of  
WebAssembly.  
The next line registers the applications service worker JavaScript code. This  
exposes our app as a PWA.  
# The anatomy of a Blazor WebAssembly app  
Every application has an entry point, it’s required. With Blazor  
WebAssembly, like most other .NET apps, the Program.cs is the entry  
point. Example 2-1 shows the Program.cs for our model app. Example 2-1.  
var builder = WebAssemblyHostBuilder.CreateDefault\(args\);  
builder.RootComponents.Add\<App\>\("\#app"\);  
builder.RootComponents.Add\<HeadOutlet\>\("head\:\:after"\);  
if \(builder.HostEnvironment.IsDevelopment\(\)\)  
\{  
builder.Logging.SetMinimumLevel\(LogLevel.Debug\);  
\}  
builder.ConfigureServices\(\);  
await using var host = builder.Build\(\);  
await host.TrySetDefaultCultureAsync\(\);  
await host.RunAsync\(\);  
Blazor relies on dependency injection as a first-class citizen of its core  
architecture.  
NOTE  
Dependency injection \(DI\) is defined as an object declaring other objects as a  
dependency, and a mechanism in which these dependencies are injected into the  
dependent object. A basic example of this would be ServiceOne requiring  
ServiceTwo, and a service provider instantiates ServiceOne given ServiceTwo  
as a dependency. In this contrived example, both ServiceOne and ServiceTwo  
would have to be registered with the service provider.  
The entry point makes use of C\#’s top-level program syntax, and is rather  
succinct. We create a default WebAssemblyHostBuilder from the  
apps args. The builder instance adds two root components. First the  
App component paired with the \#app selector, which will resolve our  
\<div id="app"\>\</div\> element from the previously discussed  
index.html file. We also add a HeadOutlet component after the \<head\>  
content. This HeadOutlet is provided by Blazor, and it enables the  
ability to dynamically append or update \<meta\> tags, or related \<head\>  
content to the HTML document. When the application is running in a development environment, the  
minimum logging level is set appropriately to debug. The builder  
invokes ConfigureServices, which is an extension method that  
encapsulates the registration of various services the client app requires. The  
services that are registered include\:  
ApiAccessAuthorizationMessageHandler\: The custom  
handler used to authorize outbound HTTP requests using an access  
token.  
CultureService\: An intermediary custom service used  
specifically to encapsulate common logic related to the client  
CultureInfo.  
HttpClient\: A framework-provided HTTP client is configured with  
the culture services’ two-letter ISO language name as a default request  
header.  
MsalAuthentication\: The framework-provided Azure business-  
to-consumer \(B2C\) and Microsoft Authentication Library \(MSAL\) are  
bound and options configured.  
SharedHubConnection\: A custom service that shares a single  
SignalR HubConnection with multiple components.  
AppInMemoryState\: A custom service used to expose in-memory  
application state.  
CoalescingStringLocalizer\<T\>\: A generic custom service  
that leverages a component-first localization attempt, falling back to a  
shared approach.  
GeoLocationService\: The custom client service for querying  
geographical information given a longitude and latitude.  
After all the services are registered, we call builder.Build\(\), which  
returns a WebAssemblyHost object and this type implements the  
IAsyncDisposable interface. As such, we’re mindful to properly await using the host instance. This asynchronously consumes the  
host and will implicitly dispose of it when it’s no longer needed.  
Detecting client culture at startup  
You may have noticed that the host had another extension method which  
was used. The host.TrySetDefaultCultureAsync method will  
attempt to set the default culture. The extension method is defined with the  
WebAssemblyHostExtensions.cs C\# file\:  
using System.Diagnostics;  
using System.Globalization;  
using Learning.Blazor.LocalStorage;  
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;  
namespace Learning.Blazor.Extensions;  
internal static class WebAssemblyHostExtensions  
\{  
internal static async Task TrySetDefaultCultureAsync\(this  
WebAssemblyHost host\)  
\{  
var localStorage =  
host.Services.GetRequiredService\<ILocalStorage\>\(\);  
var clientCulture = await localStorage.GetAsync\<string\>  
\(StorageKeys.ClientCulture\);  
clientCulture ??= "en-US";  
try  
\{  
CultureInfo culture = new\(clientCulture\);  
CultureInfo.DefaultThreadCurrentCulture = culture;  
CultureInfo.DefaultThreadCurrentUICulture = culture;  
\}  
catch \(Exception ex\) when \(Debugger.IsAttached\)  
\{  
= ex;  
\_  
Debugger.Break\(\);  
\}  
\}  
\} From the host instance, its services are available in the form of an  
IServiceProvider object. This is exposed as host.Services, and  
we use it to resolve services from the dependency injection container. This  
is referred to as the service locator pattern, as services are located manually  
from a provider. We do not need to use this pattern anywhere else from our  
app, as the framework will automatically resolve the services we need  
through either constructor injection, or property injection on component  
instances. We start by calling for the ILocalStorage service, described  
in Chapter 7. We then ask for it to retrieve a string value that  
corresponds to the StorageKeys.ClientCulture key.  
StorageKeys is a static class that exposes various literals,  
constants, and verbatim values that the app makes use of for consistency. If  
the clientCulture value is null, we’ll assign a reasonable default of  
"en-US".  
Since these culture values come from the client, we cannot trust them.  
When they’re available, we’ll wrap our instantiation of the CultureInfo  
in a try / catch block. Finally, we run the application associated with the  
contextual host instance. From this entry point, the App component is the  
first Blazor component that starts.  
Layouts, shared components, and navigation  
The App.razor file is the first of all Blazor components, it contains the  
\<Router\> which is used to provide data that corresponds to the  
navigation state. Consider the following Razor markup\:  
\<CascadingAuthenticationState\>  
\<Error\>  
\<Router AppAssembly="@typeof\(App\).Assembly"  
Context="routeData"\>  
\<Found\>  
\<AuthorizeRouteView RouteData="@routeData"  
DefaultLayout="@typeof\(MainLayout\)"\>  
\<NotAuthorized\>  
@if  
\(context.User?.Identity?.IsAuthenticated ?? false\) \{  
resource.  
\<p\>  
You are not authorized to access this  
\</p\>  
\}  
else  
\{  
\<RedirectToLogin /\>  
\}  
\</NotAuthorized\>  
\</AuthorizeRouteView\>  
\</Found\>  
\<NotFound\>  
\<LayoutView Layout="@typeof\(MainLayout\)"\>  
\<NotFoundPage /\>  
\</LayoutView\>  
\</NotFound\>  
\</Router\>  
\</Error\>  
\</CascadingAuthenticationState\>  
This is the top-level Blazor component of the app itself, and is named  
appropriately as App. The App component is the first component that is  
rendered. It is the root component of the application, and all child  
components of the app are rendered within this component.  
Blazor Navigation essentials  
Let’s evaluate the App component markup in depth, and understand the  
various parts.  
The \<CascadingAuthenticationState\> component is the  
outermost component within our application. As the name implies, it will  
cascade the authentication state through to interested child components. The  
approach of cascading state through component hierarchies has become  
very common due to its ease of use. As an example, an ancestor component  
can define a \<CascadingValue\> component with any value. This value  
can flow down the component hierarchy to any number of decedent  
components. Consuming components use the CascadingParameter  
attribute to receive the value from the parent. This concept is covered in greater detail as we continue to explore the app. Let’s continue descending  
down the component hierarchy.  
The first nested child is the Error component. It’s a custom component  
that is defined in the Error.razor file\:  
@inject ILogger\<Error\> Logger  
\<CascadingValue Value=this\>  
@ChildContent  
\</CascadingValue\>  
@code \{  
\[Parameter\]  
public RenderFragment? ChildContent \{ get; set; \} = null!;  
public void ProcessError\(Exception ex\)  
\{  
Logger.LogError\("Error\:ProcessError - Type\: \{Type\}  
Message\: \{Message\}",  
ex.GetType\(\), ex.Message\);  
\}  
\}  
The @inject syntax is a Razor directive. There are several very  
common directives that you’ll learn as part of Blazor development. This  
specific directive instructs the Razor view engine to inject the  
ILogger\<Error\> service from the service provider. This is how  
Blazor components use DI, through property injection instead of  
constructor injection. The Error component makes use of cascades. The  
\<CascadingValue\> is a Blazor component that provides a  
cascading value to all descendant components. The  
CascadingValue.Value is assigned this, which is the Error  
component instance itself. This means that all descendent components  
will have access to the ProcessError method if they choose to  
consume it. Descendent components would need to define a \[CascadingParameter\] property, of type Error for it to flow  
through to it.  
The \<CascadingValue\> markup includes the template  
rendering of an @ChildContent. The ChildContent is both a  
\[Parameter\] and a RenderFragment. This allows for the  
Error component to render any child content, including Blazor  
components. When there is a single RenderFragment defined as  
part of a templated component, its child content can be implicit.  
A RenderFragment is a void returning delegate type that  
accepts a RenderTreeBuilder. It represents a segment of UI  
content. The RenderTreeBuilder type is a low-level Blazor  
class that exposes methods for building a C\# representation of the  
DOM.  
A @code directive is a way to add C\# class-scoped members to a  
component. Here you can define fields, properties, methods and  
overrides. The Parameter attribute is provided by Blazor as a way to denote  
that a property of a component is parameter. These are available as  
binding targets from consuming components as attribute assignments in  
Razor markup. The ProcessError method is accessible to all consuming  
components. It expects an Exception instance, which it uses to log as  
an error.  
The child content of the Error component is the Router. The Router  
component is what enables our SPAs client-side routing. Meaning routing  
occurs on the client, and the page doesn’t need to refresh.  
The Router  
The Router specifies an AppAssembly parameter which is assigned to  
the typeof\(App\).Assembly by convention. Additionally, the Context parameter allows us to specify the name of the parameter. We  
assign the name of routeData, which overrides the default name of  
context. The Router also defines multiple named RenderFragment,  
because there are multiple we need to be explicit when specifying child  
content. This is where the corresponding RenderFragment name comes  
in. For example, when the router is unable to find a matching route we  
define what the page should render as with the NotFound content.  
Consider the following NotFound content section from the Router  
markup\:  
\<NotFound\>  
\<LayoutView Layout="@typeof\(MainLayout\)"\>  
\<NotFoundPage /\>  
\</LayoutView\>  
\</NotFound\>  
We define a layout based on the MainLayout component and set its child  
as the NotFoundPage component. Assuming the user navigates to a route  
that doesn’t exist, they’d end up on our custom HTTP 404 page that is  
localized and styled consistently with our app. We’ll handle HTTP status  
code 401, in the next section. However, when the router does match an  
expected route the Found content is rendered. Consider the following  
Found content section from the Router markup\:  
\<Found\>  
\<AuthorizeRouteView RouteData="@routeData"  
DefaultLayout="@typeof\(MainLayout\)"\>  
\<NotAuthorized\>  
@if \(context.User?.Identity?.IsAuthenticated ??  
false\)  
\{  
\<p\>HTTP 401\</p\>  
\}  
else  
\{  
\<RedirectToLogin /\>  
\}  
\</NotAuthorized\>  
\</AuthorizeRouteView\>  
\</Found\> Redirect to login when unauthenticated  
If you recall from earlier, the Found content is just a RenderFragment.  
The child content, in this case, is the AuthorizeRouteView  
component. This route view is only displayed when the user is authorized to  
view it. It adheres to the MainLayout as its default. The RouteData is  
assigned from the contextual routeData. The route data itself defines  
which component the router will render and the corresponding parameters  
from the route.  
When the user is not authorized, we redirect them to the login screen using  
the RedirectToLogin component.  
@inject NavigationManager Navigation  
@code \{  
\{  
protected override void OnInitialized\(\)  
string returnUrl = Uri.EscapeDataString\(Navigation.Uri\);  
Navigation.NavigateTo\(  
\$"authentication/login?returnUrl=\{returnUrl\}"\);  
\}  
\}  
The RedirectToLogin component injects the  
NavigationManager, and when it’s initialized it navigates to the  
authentication/login route with the escaped returnUrl  
query string. When the user is authorized, the route view renders the  
MainLayout, which is a subclass of Blazor’s  
LayoutComponentBase. While the markup defines all the layout of  
the app, it also splats the @Body in the appropriate spot. This is another  
RenderFragment that is inherited from the  
LayoutComponentBase. The body content is what the router  
ultimately controls for its client-side routing. In other words, as users  
navigate the site the router dynamically updates the DOM with rendered  
Blazor components within the @Body segment.  
We override the OnInitialized method. This is our first look at  
overriding ComponentBase class functionality, but this is very common in Blazor. There are several virtual \(methods that can be  
overridden\) methods in the ComponentBase class, most of which  
represent different points of a components life cycle.  
Blazor component lifecycles  
Continuing from the aforementioned RedirectToLogin.razor. file, there is an  
override method named OnInitialized. This method is one of  
several lifecycle methods that will occur at specific points in the life of a  
Component. Blazor components inherit the  
Microsoft.AspNetCore.Components.ComponentBase class.  
Please consider the Table 2-1 for reference\: T  
a  
b  
l  
e  
2  
-  
1  
.  
C  
o  
m  
p  
o  
n  
e  
n  
t  
B  
a  
s  
e  
l  
i  
f  
e  
c  
y  
c  
l  
e  
m  
e  
t h  
o  
d  
s  
Order Method name\(s\) Description  
1 SetParameters  
Async  
Sets parameters supplied by the component’s parent in  
the render tree.  
2 OnInitialized  
Method invoked when the component is ready to start,  
having received its initial parameters from its parent in  
the render tree.  
OnInitialized  
Async  
3 OnParametersS  
et  
Method invoked when the component has received  
parameters from its parent in the render tree, and the  
incoming values have been assigned to properties.  
OnParametersS  
etAsync  
4 OnAfterRender  
Method invoked after each time the component has been  
rendered.  
OnAfterRender  
Async  
The MainLayout component  
The MainLayout.razor file, as the name indicates, represents the main  
layout. Within this markup, the navbar, header, footer, and content areas are  
layed out.  
@inherits LayoutComponentBase  
@inject IStringLocalizer\<MainLayout\> Localizer  
\<section class="hero is-fullheight-with-navbar"\>  
\<div class="hero-head"\> \<header class="navbar is-size-5 is-fixed-top"\>  
\<div class="container"\>  
\<div class="navbar-brand"\>  
\<NavLink class="navbar-item" href=""  
Match="NavLinkMatch.All"\>  
\<span class="pr-2"\>  
\<img src="media/blazor-logo.png"  
height="128" alt="Logo"\>  
\</span\>  
\<span\>@Localizer\["Home"\]\</span\>  
\</NavLink\>  
\<a role="button" class="navbar-burger" aria-  
label="menu"  
target="navbar"\>  
aria-expanded="false" data-  
\<span aria-hidden="true"\>\</span\>  
\<span aria-hidden="true"\>\</span\>  
\<span aria-hidden="true"\>\</span\>  
\</a\>  
\</div\>  
\<div id="navbar" class="navbar-menu"\>  
\<div class="navbar-start"\>  
\<AuthorizeView\>  
\<Authorized\>  
\<NavBar /\>  
\</Authorized\>  
\</AuthorizeView\>  
\</div\>  
\<div class="navbar-end"\>  
\<AuthorizeView\>  
\<Authorized\>  
\<ThemeIndicatorComponent /\>  
\<AudioDescriptionComponent /\>  
\<LanguageSelectionComponent /\>  
\<NotificationComponent /\>  
\</Authorized\>  
\</AuthorizeView\>  
\<LoginDisplay /\>  
\</div\>  
\</div\>  
\</div\>  
\</header\>  
\</div\> \<div class="hero-body"\>  
\<div class="container has-text-centered is-fluid mx-5"\>  
@Body  
\</div\>  
\</div\>  
\<footer class="footer" style="padding-bottom\: 4rem;"\>  
\<PageFooter /\>  
\</footer\>  
\</section\>  
The first two lines of this layout Razor file are two C\# expressions,  
indicated by their leading @ symbol. These two directives represent  
various behavior required within this component. The first of the two is  
the @inherits directive, which instructs the component to inherit  
from the LayoutComponentBase class. This means that it’s a  
subclass of the frameworks LayoutComponentBase class. This  
layout base class is an implementation of IComponent and exposes a  
Body render fragment. Which allows us to make the content whatever  
the apps Router provides as output. The main layout component uses  
the @inject directive to request the service provider to resolve an  
IStringLocalizer\<MainLayout\> which is assigned into a  
component-accessible member named Localizer. We’ll cover  
localization in Chapter 5. The \<section\> is a native HTML element, and its perfectly valid  
with Razor syntax. Notice how we can transition from C\# to HTML  
seamlessly, in either direction. We define a bunch of standard HTML,  
with a bit of semantic markup. Within the \<section\> element’s semantic header and navigation bar  
\(navbar\), the \<NavLink\> is referenced. This is a framework-  
provided component. The NavLink component is used to expose the  
user interactive aspect of the component’s logic. It handles the routing  
of the Blazor application and relies on the value within the browser’s  
URL bar. This represents the app’s “Home” navigation route and it’s  
branded with the Blazor logo. The next section of the navigation bar is built out, with a custom  
NavBar component. There is a bit of familiar protective markup, where  
the app specifies it’s only available when the AuthorizerView has Authorized content to render in the browser. The earlier components  
mentioned were either left-aligned or centered, the next components are  
grouped and pushed to the end or far right-hand side of the navbar.  
Immediately, to the right of this component grouping is a  
LoginDisplay. I’ll take you on a dive into the LoginDisplay  
component. This group of elements is is theme aware. It will render in  
one of two ways, either the dark theme shown in Figure 2-2 or the light  
theme shown in Figure 2-3.  
The @Body render fragment is defined within the center of the  
document object model \(DOM\). The @Body is the primary aspect of  
the Blazor navigation and the output target for the router. In other  
words, as users navigate, the client-side routing renders HTML within  
the @Body placeholder.  
The native HTML footer element is the parent to the custom  
PageFooter component, which is responsible for rendering the very  
bottom of the page.  
The custom NavBar component  
Admittedly, there’s a lot to soak in from that layout component markup, but  
when you take the time to mentally parse each part it will make sense.  
There are a few custom components, one of which is the \<NavBar /\>.  
This references the NavBar.razor file\:  
@inherits LocalizableComponentBase\<NavBar\>  
\<NavLink class="navbar-item" href="/chat"  
Match="NavLinkMatch.Prefix"\>  
\<span class="icon pr-2"\>  
\<i class="chat fas fa-comments"\>\</i\>  
\</span\>  
\<span\>@Localizer\["Chat"\]\</span\>  
\</NavLink\>  
\<NavLink class="navbar-item" href="/tweets"  
Match="NavLinkMatch.Prefix"\>  
\<span class="icon pr-2"\>  
\<i class="twitter fab fa-twitter"\>\</i\>  
\</span\> \<span\>@Localizer\["Tweets"\]\</span\>  
\</NavLink\>  
\<NavLink class="navbar-item" href="/pwned"  
Match="NavLinkMatch.Prefix"\>  
\<span class="icon pr-2"\>  
\<i class="pwned fas fa-user-shield"\>\</i\>  
\</span\>  
\<span translate="no"\>Pwned?\</span\>  
\</NavLink\>  
Like most custom components, this too inherits from  
LocalizableComponentBase to take advantage of the base  
functionality. The base functionality is detailed Chapter 5.  
The \<NavLink\> component is provided by the framework and works  
with the router. The first route is the chat room and corresponds to the  
/chat route. The second route is for Tweets and corresponds to the /tweets route.  
The third route is for Pwned? and corresponds to the /pwned route.  
While each of the previous route names are retrieved using the  
@Localizer indexer, the “Pwned?” route is not.  
The header and footer components  
The header for the app contains links to Home, Chat, Tweets, and Pwned.  
These are all navigable routes that the Router will recognize. The icons to  
the right are for Theme, Audio Descriptions, Language Selection,  
Notifications, and Log out. The log-out functionality does rely on the app’s  
navigation to navigate to routes, but the other buttons could be considered  
utilitarian. They open modals for global functionality, to expose the user to  
persist preferences. The header itself supports the dark and light  
themes, see Figure 2-2 and Figure 2-3 as a point reference.  
Figure 2-2. An example navigation header with a dark theme. Figure 2-3. An example navigation header with a light theme.  
Let’s look at he PageFooter component first, defined in the  
PageFooter.razor file\:  
@inherits LocalizableComponentBase\<PageFooter\>  
\<div class="columns has-text-centered"\>  
\<p class="column"\>  
\<strong translate="no"\>  
Learning Blazor  
\</strong\> by  
\<a href="@DavidPineUrl" target="\_blank"\>  
David Pine.  
\</a\>  
\</p\>  
\<p class="column"\>  
The \<a href="@CodeUrl" target="\_blank"\>  
\<i class="fab fa-github"\>\</i\> source code  
\</a\> is licensed  
\<a href="@LicenseUrl"\>  
MIT.  
\</a\>  
\</p\>  
\<p class="column"\>  
\<a href="/privacy"\>@Localizer\["Privacy"\]\</a\> &bull;  
\<a href="/termsandconditions"\>@Localizer\["Terms"\]\</a\>  
\</p\>  
\<p class="column"\>  
@\_frameworkDescription  
\</p\>  
\</div\>  
We’re establishing a pattern, by having custom components inherit from  
the LocalizableComponentBase common base class. The custom PageFooter component is written by defining a four-column  
layout with centered text. From left to right starting at column one, the name of the application  
appears and a by-line, “Learning Blazor by David Pine”. In the second column, there are two links, one for the source codes’  
MIT license, and the GitHub source code link. The third column contains links to the Privacy and Terms and  
Conditions pages, and the text is localized. Localization of Blazor apps  
is covered in Chapter 5. The last column contains the .NET runtime version description that the  
client browser is running.  
More often than not, I prefer to have my Razor markup files accompanied  
by a code-behind file. I have deemed this Component Shadowing, as the  
component’s markup is shadowed by a C\# file from the Visual Studio editor  
as shown in Figure 2-4.  
NOTE  
Component Shadowing is the act of creating a C\# file that matches the name of an  
existing Razor file, but appends the .cs file extension. For example, the  
PageFooter.razor and PageFooter.razor.cs files exemplify component shadowing, as  
they’re nested in the Visual Studio editor and together they both represent the public  
partial PageFooter class. Figure 2-4. Component Shadowing in Visual Studio Solution Explorer  
Consider the PageFooter.razor.cs component shadow file\:  
namespace Learning.Blazor.Shared  
\{  
public partial class PageFooter  
\{  
const string CodeUrl =  
"https\://github.com/IEvangelist/learning-blazor";  
const string LicenseUrl =  
"https\://github.com/IEvangelist/learning-  
blazor/blob/main/LICENSE";  
const string DavidPineUrl =  
"https\://davidpine.net";  
private string? \_frameworkDescription;  
protected override void OnInitialized\(\) =\>  
\_frameworkDescription = AppState.FrameworkDescription;  
\}  
\}  
There are several const string fields defined that contain URL  
literals. These are used to bind to the Razor markup. We override the OnInitialized lifecycle method and assign the  
\_frameDescription value from the inherited  
LocalizableComponentBase.AppState variable.  
The component is also theme-aware to the client browser preferences for  
either light or dark. For example, see both Figure 2-5 and Figure 2-6  
images.  
The footer doesn’t strive for too much. It’s intentionally simple, providing  
only a few links to relevant information for the app.  
Figure 2-5. An example footer with a dark theme.  
Figure 2-6. An example footer with a light theme.  
The MainLayout component is more than just Razor markup, it too  
actually has a shadowed component, consider the MainLayout.razor.cs file\:  
using System.Runtime.InteropServices;  
using Learning.Blazor.Services;  
using Microsoft.AspNetCore.Components;  
namespace Learning.Blazor.Shared  
\{  
public sealed partial class MainLayout \: IDisposable \{  
\[Inject\]  
public AppInMemoryState? AppState \{ get; set; \}  
protected override void OnInitialized\(\)  
\{  
if \(AppState is \{ \}\)  
\{  
AppState.StateChanged += StateHasChanged;  
AppState.FrameworkDescription =  
RuntimeInformation.FrameworkDescription;  
\}  
base.OnInitialized\(\);  
\}  
void IDisposable.Dispose\(\)  
\{  
if \(AppState is not null\)  
\{  
AppState!.StateChanged -= StateHasChanged;  
\}  
\}  
\}  
\}  
The MainLayout is a sealed partial class. It’s partial  
so that it can serve as code-behind to the Razor markup, and it’s  
sealed so that it’s not inheritable by other components. It implements  
the IDisposable interface to perform necessary cleanup.  
The AppInMemoryState instance is injected into the component.  
This application state object is in-memory only, if the user refreshes the  
page the state is lost. The OnInitialized method is overridden to allow the subscription  
to the AppInMemoryState.StateChanged event. The event  
handler is the StateHasChanged method. This is one of the most  
prevalent Blazor methods, as it is used to signal that a component  
should be re-rendered when applicable. The  
AppState.FrameworkDescription is assigned from the  
RuntimeInformation.FrameworkDescription. This is the value that was displayed in the right-hand column of the footer, such as  
“.NET 6”. The Dispose implementation assumes very intently that the  
AppState instance is not null, as such it unsubscribes from the  
AppInMemoryState.StateChanged event.  
An in-memory app state model  
Blazor applications can store app state in-memory. In this approach you  
register your app state container as a singleton service, meaning there’s only  
one instance for the app to share. The service itself exposes an event that  
subscribes to the StateHasChanged method, and as properties on the  
state object are updated, they fire the event. Consider the  
AppInMemoryState.cs C\# file\:  
using Learning.Blazor.BrowserModels;  
namespace Learning.Blazor.Services;  
public class AppInMemoryState  
\{  
private string? \_frameworkDescription;  
private ClientVoicePreference \_clientVoicePreference =  
new\("Auto", 1\);  
private bool \_isDarkTheme;  
public string? FrameworkDescription  
\{  
get =\> \_frameworkDescription;  
set  
\{  
\_frameworkDescription = value;  
AppStateChanged\(\);  
\}  
\}  
\{  
public ClientVoicePreference ClientVoicePreference  
get =\> \_clientVoicePreference;  
set \{  
\_clientVoicePreference = value ?? new\("Auto", 1\);  
AppStateChanged\(\);  
\}  
\}  
\{  
public bool IsDarkTheme  
get =\> \_isDarkTheme;  
set  
\{  
\_isDarkTheme = value;  
AppStateChanged\(\);  
\}  
\}  
public event Action? StateChanged;  
private void AppStateChanged\(\) =\> StateChanged?.Invoke\(\);  
\}  
Several backing fields are declared, they’ll be used to store the values of  
various publicly accessible properties that represent various application  
state. As an example of the pattern used to communicate app state changes  
consider the FrameworkDescription property. Its get accessor  
goes to the backing field and the set accessor assigns to the backing  
field. After the value has been assigned to the backing field, the  
AppStateChanged method is called. This pattern is followed for all  
properties and their corresponding backing fields. The class exposes a nullable Action as an event named  
StateChanged. Interested parties can subscribe to this for change  
notifications. The AppStateChanged method is expressed as the invocation of the  
StateChanged event. It’s conditionally a no-op when the  
StateChanged event is null.  
This in-memory state management mechanism is used to expose client  
voice preferences, whether or not the client is preferring the dark theme,  
and the value for the framework description. To have the application state persisted across browser sessions you’d use an alternative approach, such as  
local storage. There are tradeoffs in each approach, while using in-memory  
app state is easy, it will not persist beyond browser sessions. If you’re to use  
local storage mechanism, you’d have to rely on JavaScript interop.  
Understanding the LoginDisplay component  
The LoginDisplay component only renders a few things to the HTML,  
but there’s a bit of code to understand.  
@inherits LocalizableComponentBase\<LoginDisplay\>  
@inject SignOutSessionStateManager SignOutManager  
\<span class="navbar-item"\>  
\<AuthorizeView\>  
\<Authorizing\>  
\<button class="button is-rounded is-loading level-  
item" disabled\>  
@Localizer\["LoggingIn"\]  
\</button\>  
\</Authorizing\>  
\<Authorized\>  
@\{  
var user = context.User!;  
var userIdentity = user.Identity!;  
var userToolTip =  
\$"\{userIdentity.Name\}  
\(\{user.GetFirstEmailAddress\(\)\}\)";  
\}  
\<button class="  
button is-rounded level-item has-tooltip-right  
has-tooltip-info"  
data-tooltip=@\(userToolTip\) @onclick="OnLogOut"\>  
\<span class="icon"\>  
\<i class="fas fa-sign-out-alt"\>\</i\>  
\</span\>  
\<span\>@Localizer\["LogOut"\]\</span\>  
\</button\>  
\</Authorized\>  
\<NotAuthorized\>  
\<button class="button is-rounded level-item"  
@onclick="OnLogIn"\>  
\<span class="icon"\>  
\<i class="fas fa-sign-in-alt"\>\</i\> \</span\>  
\<span\>@Localizer\["LogIn"\]\</span\>  
\</button\>  
\</NotAuthorized\>  
\</AuthorizeView\>  
\</span\>  
The component defines two directives, one to specify that it inherits  
from LocalizableComponentBase and one to inject the  
SignOutSessionStateManager service. The  
LocalizableComponentBase is a custom base component, which  
is covered in detail in Chapter 5. The component markup uses the AuthorizeView component, and its  
various authorized-state-dependent templates to render content when the  
user is either, currently authorizing, has been authorized or is not  
authorized. Each of these states has independent markup.  
When authorizing, the “logging in” message is localized and rendered to the  
screen. When the user is authorized, the context exposes the  
ClaimsPrincipal object that’s assigned to the user variable. There is  
an interesting thing you might have noticed, the localize method. The  
type comes from the inheritance of the  
LocalizableComponentBase\<LoginDisplay\> class. This  
localize functionality is based on Microsoft’s resource \(.resx\) driven  
key/value pairings, and the frameworks’ IStringLocalizer\<T\> type.  
The code creates a tooltip which is the string concatenation of the user’s  
name and their email address. The tooltip is bound to the button elements  
data-tooltip attribute. This is part of Bulma CSS framework for  
tooltips. Hovering over the logout button will show the message. When the  
user is not authorized, we render a button with a localized login message.  
Next, let’s take a look at its shadowed component, the LoginDisplay.cs file\:  
using Microsoft.AspNetCore.Components.Web;  
namespace Learning.Blazor.Shared  
\{  
public partial class LoginDisplay \{  
\[Inject\]  
public NavigationManager Navigation \{ get; set; \} =  
null!;  
void OnLogIn\(MouseEventArgs args\) =\>  
Navigation.NavigateTo\("authentication/login", true\);  
async Task OnLogOut\(MouseEventArgs args\)  
\{  
await SignOutManager.SetSignOutState\(\);  
Navigation.NavigateTo\("authentication/logout"\);  
\}  
\}  
\}  
This component provides two functions that use the injected Navigation  
service. The Navigation property is assigned to by the dependency  
injection framework, and is functionally equivalent to the component’s  
@inject directive syntax. Each method navigates to the desired  
authentication route. When OnLogOut is invoked, the  
SingOutManager has its sign-out state set before navigating away. Each  
route is handled by the app’s corresponding authentication logic. The user  
will see their name next to a logout button when they’re authenticated, but  
if they’re not authenticated they will only see a login button. Users can sign  
up with the application by providing and validating their email. This is  
managed by Azure Active Directory \(AAD\) business-to-consumer \(B2C\).  
As an alternative to signing up with the application, you can use one of the  
available third-party authentication providers, such as; Google, Twitter, and  
GitHub.  
Native theme awareness  
An app’s ability to be color-scheme aware is highly recommended for all  
modern web apps. From CSS it is easy to specify style rules that are scoped  
to media dependent queryable values, consider the following CSS\:  
@media \(prefers-color-scheme\: dark\) \{  
/\*  
Styles here are only applied when the browser has a specified color-scheme of "dark".  
\*/  
\}  
The rules within this media query only apply when the browser is set to  
prefer the dark theme. These media queries can also be accessed  
programmatically from JavaScript. The window.matchMedia method is  
used to detect changes to the client browser preferences. 4  
Let’s look first at  
the ThemeIndicatorComponent.razor file\:  
@inherits LocalizableComponentBase\<ThemeIndicatorComponent\>  
\<span class="navbar-item"\>  
\<button class="button is-@\(\_buttonClass\)  
has-tooltip-left has-tooltip-info is-rounded  
level-item"  
data-tooltip=@Localizer\[AppState.IsDarkTheme ?  
"DarkTheme" \: "LightTheme"\]\>  
\<span class="icon"\>  
\<i class="fas fa-@\(\_iconClass\)"\>\</i\>  
\</span\>  
\</button\>  
\</span\>  
\<HeadContent\>  
\<meta name="twitter\:widgets\:theme"  
content='@\(AppState.IsDarkTheme ? "dark" \: "light"\)'\>  
\</HeadContent\>  
You’re hopefully noticing that a lot of components are inheriting from  
the generic LocalizableComponentBase class. Again, we’ll  
cover this in Chapter 5. Just know that it exposes a localize member  
that lets us get a localized string value given a string key.  
The primary markup for the ThemeIndicatorComponent is the  
button. The button’s class attribute is mixed, with verbatim class  
names, and Razor expressions which are evaluated at runtime. The  
\_buttonClass member, is a C\# string field that is bound to the  
"is-" prefix. This button also has a tooltip, and its message is  
conditionally assigned dependent on the ternary expression from the \_isDarkTheme boolean value. The Font Awesome class is also  
bound to an \_iconClass field member.  
The ThemeIndicatorComponent makes use of  
\<HeadContent\>. This is a framework-provided component that  
allows us to dynamically update the HTML’s \<head\> content. It’s very  
powerful and useful for updating \<meta\> elements on the fly. When  
the theme is dark, the app specifies that the Twitter widgets should  
also be themed accordingly.  
NOTE  
While the HeadContent component is able to update meta tags, it’s still not ideal for  
Search Engine Optimization \(SEO\) when using Blazor WebAssembly. This is due to the  
fact that the meta tags are updated dynamically. In order to achieve static meta tag  
values, you’d have to use Blazor WebAssembly pre-rendering.  
Next, let’s look at its corresponding component shadow, the  
ThemeIndicatorComponent.razor.cs C\# file\:  
using Learning.Blazor.Extensions;  
using Microsoft.JSInterop;  
namespace Learning.Blazor.Components  
\{  
public partial class ThemeIndicatorComponent  
\{  
private string \_buttonClass =\> AppState.IsDarkTheme ?  
"light" \: "dark";  
"moon" \: "sun";  
private string \_iconClass =\> AppState.IsDarkTheme ?  
protected override async Task OnInitializedAsync\(\) =\>  
AppState.IsDarkTheme =  
await  
JavaScript.GetCurrentDarkThemePreferenceAsync\(  
this, nameof\(UpdateDarkThemePreference\)\); =\>  
\[JSInvokable\]  
public Task UpdateDarkThemePreference\(bool isDarkTheme\)  
InvokeAsync\(\(\) =\>  
\{  
AppState.IsDarkTheme = isDarkTheme;  
StateHasChanged\(\);  
\}\);  
\}  
\}  
The ThemeIndicatorComponent component shadow is defined. There are a few private fields, but you’ll recall that these are accessible  
to the markup and bound where needed. These two string fields are  
simple ternary expressions based on the AppState.IsDarkTheme  
value. The component overrides OnInitializedAsync where it assigns  
the current state of the AppState.IsDarkTheme variable and calls  
the GetCurrentDarkThemePreference method which is an  
IJSRuntime extension method. This method requires the  
ThemeIndicatorComponent reference and the callback method  
name. C\#’s nameof expression produces the name of its argument,  
which in this case is the callback. The callback method named UpdateDarkThemePreference  
expects the isDarkTheme value. The method must be decorated with  
the JSInvokable attribute for it to be callable from JavaScript. Since  
this callback can be invoked any time after the component is initialized,  
it must use the combination of InvokeAsync and  
StateHasChanged.  
InvokeAsync\: Executes the supplied work item on the associated  
renderer’s synchronization context.  
StateHasChanged\: Notifies the component that its state has  
changed. When applicable, this will cause the component to be re-  
rendered. Let’s now consider the following JSRuntimeExtensions.cs C\# file, for the  
GetCurrentDarkThemePreferenceAsync extension method\:  
using Microsoft.JSInterop;  
namespace Learning.Blazor.Extensions;  
internal static class JSRuntimeExtensions  
\{  
internal static async ValueTask\<bool\>  
GetCurrentDarkThemePreferenceAsync\<T\>\(  
this IJSRuntime javaScript,  
T dotnetObj,  
string callbackMethodName\) where T \: class =\>  
await javaScript.InvokeAsync\<bool\>\(  
"app.getClientPrefersColorScheme",  
"dark",  
DotNetObjectReference.Create\(dotnetObj\),  
callbackMethodName\);  
\}  
The extension method defines a generic type parameter, T which is  
constrained to a class. The object instance, in this case, is the  
ThemeIndicatorComponent but it could be any class.  
The javaScript runtime instance is used to call a  
ValueTask\<bool\> returning interop function.  
The "app.getClientPrefersColorScheme" method is a  
JavaScript method that is accessible on the window scope.  
The hardcoded value of "dark" is passed to the  
app.getClientPrefersColorScheme function as the first  
parameter. It’s hardcoded as we know that we’re trying to evaluate  
whether or not the current client browser prefers the dark theme. When  
they do, this will return true.  
The DotNetObjectReference.Create\(dotnetObj\) creates  
an instance of  
DotNetObjectReference\<ThemeIndicatorComponent\>,  
and this is passed to the corresponding JavaScript function as the second  
parameter. This is used as a reference so that JavaScript can call back  
into the .NET component. The callbackMethodName is a method name from the calling  
ThemeIndicatorComponent instance that is decorated with  
JSInvokable attribute. This method can and will be called from  
JavaScript, when needed.  
This is our first look at JavaScript interop, so let’s answer some questions.  
Question\: Where is this JavaScript coming from, and what does it look  
like?  
Answer\: This JavaScript is part of the app.js file which was  
referenced in the index.html. It’s served under the wwwroot folder.  
We’ll look at the source in the next section.  
Question\: What capabilities does it have?  
Answer\: That depends on what you’re looking to achieve. But  
really, anything you might imagine. For this specific use case, the  
JavaScript will expose a utilitarian helper function named  
getClientPrefersColorScheme. Internally, the  
JavaScript relies on the window.matchMedia APIs. This  
function demonstrates bidirectional JavaScript interop, where  
from .NET we call a JavaScript function, and within said function  
given a reference to a .NET object, we call back into .NET from  
JavaScript.  
It uses the media query APIs, which are native to JavaScript. Consider the  
app.js JavaScript file\:  
const getClientPrefersColorScheme = \(color, dotnetObj,  
callbackMethodName\) =\> \{  
let media = window.matchMedia\(\`\(prefers-color-scheme\:  
\$\{color\}\)\`\);  
if \(media\) \{  
media.onchange = args =\> \{ dotnetObj.invokeMethodAsync\(  
callbackMethodName,  
args.matches\);  
\};  
\}  
return media.matches;  
\}  
window.app = \{  
getClientPrefersColorScheme  
\};  
The getClientPrefersColorScheme function is defined as a  
const function with color, dotnetObj, and  
callbackMethodName parameters. It uses the fat arrow operator to  
define its method body.  
A media instance is assigned from the call to  
window.matchMedia, given the media query string.  
The media.onchange event handler property is assigned to an inline  
function. The event handler inline function relies on the dotnetObj instance,  
which is a reference to the calling Blazor component. This is JavaScript  
interop where JavaScript calls into .NET. In other words, if the user  
changes their preferences the onchange event is fired and the Blazor  
component has its callbackMethodName invoked.  
The media.matches value is returned, indicating to the caller the  
current value of whether the media query string matches. The getClientPrefersColorScheme is added to the  
window.app object.  
Putting all of this together, you can reference the  
\<ThemeIndicatorComponent /\> in any Blazor component, and  
you’d have a self-contained color scheme-aware component. As the client  
preferences change, the component dynamically updates its current  
rendered HTML representation of the color scheme. The component relies  
on JavaScript interop, and it’s seamless from C\#. Summary  
In this chapter, I guided you through the inner workings of how Blazor  
WebAssembly starts. From the serving and processing of static HTML to  
the invocation of JavaScript that bootstraps Blazor, we explored the  
anatomy of the app. This includes the Program entry point and the startup  
conventions. You learned about the router, client-side navigation, shared  
components, and layouts. You also learned about top-level navigation  
components in the app, and how content is rendered through  
RenderFragment placeholders. I demonstrated native color-scheme  
aware component, and an example of JavaScript interop. In the next chapter  
I’ll show you how to author custom Blazor components and how to use  
JavaScript interop. You’ll learn more about how Blazor uses authentication  
to verify a user’s identity, and how to conditionally render markup. Finally,  
you’ll see how to use various data binding techniques and rely on data from  
HTTP services.  
1 Linus Torvalds \(Creator of Linux\)  
2 Bulma.io website\: https\://bulma.io/documentation/overview/start  
3 Mozillahttps\://developer.mozilla.org/en-US/docs/Web/HTML/Element/base  
4 MDN\: Window.matchMedia function  
https\://developer.mozilla.org/docs/Web/API/Window/matchMedia Chapter 3. Componentizing  
A NOTE FOR EARLY RELEASE READERS  
With Early Release ebooks, you get books in their earliest form—the  
author’s raw and unedited content as they write—so you can take  
advantage of these technologies long before the official release of these  
titles.  
This will be the third chapter of the final book. Please note that the  
GitHub repo will be made active later on.  
If you have comments about how we might improve the content and/or  
examples in this book, or if you notice missing material within this  
chapter, please reach out to the editor at rfernando@oreilly.com.  
Our app has lifted off and taken flight — Hooray! We’re going to continue  
our adventure of learning Blazor by scrutinizing code. In this chapter, I’ll  
show you how to author Blazor components and you’ll learn various data-  
binding approaches. Now that we’re familiar with how the app starts, we’ll  
evaluate the default route. This just so happens to be the Index.razor file,  
which is the home screen for the app. I’ll teach you how to limit what a user  
has access to, by protecting components with declarative attributes and  
security-semantic hierarchies. You will see native JavaScript  
geolocation services in use with JavaScript interop. As part of this  
chapter, you’ll also learn about some of the peripheral services and  
supporting architecture that the Blazor app relies on, such as; the “Have I  
Been Pwned” service and Open Weather Map APIs.  
Design with the user in mind All graphical-based applications have users, but not all applications  
prioritize the needs of their users. More often than not, apps use your  
information to drive advertisements or sell your information to other  
companies. These apps view you \(the user\) as a sales-opportunity or a data-  
point, but nothing more.  
The users of the Learning Blazor application are at the forefront of its  
design. A user’s identity helps determine certain actions the app takes, but  
what’s the difference between authentication and identity?  
AUTHENTICATION AND IDENTITY  
Identity is a unique representation of a user within a computer system.  
For example, an email address, user identifier, phone number and the  
user’s name could all be a collection of attributes used to uniquely  
identify a single user.  
Authentication on the other hand, is the act of requesting a trusted third-  
party entity to validate an individual’s identity. For example, when a  
user attempts to log in to an app, an authentication provider can be used  
to verify their claimed identity.  
When users log in to the app, meaning, once the webserver has  
authenticated a user with the Azure Active Directory \(AAD\) business-to-  
consumer \(B2C\) tenant a JSON Web Token \(JWT\), Bearer Token is  
returned. This token flows through peripheral services and resources as  
needed. Wherever this token resides, whether in the server or on the client-  
side app, the authenticated users’ information is represented as a collection  
of key-value pairs, which are referred to as “claims”. A user is represented  
as a ClaimsPrincipal object. The ClaimsPrincipal has an  
Identity property, which is available at runtime with a  
ClaimsIdentity instance. When a service requires authentication and a  
request provides a valid authentication token, the requested claims are  
provided. At this time, we can demand various attributes \(or claims\) that a  
user agrees to share with our application. Our app uses these claims to uniquely identify an authenticated user. The  
claims are part of the bearer token, which are passed to various services that  
the app relies on. The claims flow into the “Pwned” service, thus enabling  
an automated data-breach detection mechanism on the user’s behalf from  
their email.  
Taking advantage of “Pwned” functionality  
An authenticated user will have an emails claim with at least one email  
address. With an email address, we will use the “Have I Been Pwned” API  
from Troy Hunt. Troy Hunt is one of the most renowned security experts in  
the world, and he’s been collecting data breaches for years. He spends time  
aggregating, normalizing, and persisting all of this data into a service called  
“Have I Been Pwned” \(or HIBP for short\). This service exposes the ability  
to check whether or not a given email address has ever existed within a data  
breach — at the time of writing there were nearly 11.5 billion records. This  
number will certainly continue to grow.  
The HIBP API exposes three primary categories\:  
1\. Breaches\: Aggregated data breach information for security  
compromised accounts.  
2\. Passwords\: A massive collection of hashed passwords that have  
appeared in data breaches, meaning they’re compromised.  
3\. Pastes\: Information that has been published to a publicly facing  
website designed to share content.  
I maintain an open-source project named pwned-client on GitHub, which is  
a .NET HTTP client library for accessing the HIBP API programmatically  
with C\#. The Learning Blazor application takes a dependency on this  
library.  
This library comes dependency-injection ready, all the consumer needs is an  
API key and the NuGet package. The pwned-client library exposes the ability for consumers to configure  
their API key through well-known configurations. For example, if you  
wanted to use an environment variable you’d name it  
HibpOptions\_\_ApiKey. The double underscore  
is used as a cross-  
\_\_  
platform alternative to delimiting name segments with \:, which wouldn’t  
work in Linux. The HibpOptions\_\_ApiKey environment variable  
would map to the libraries strongly-typed HibpOptions.ApiKey  
property value.  
To add all of the services to the dependency injection container  
\(IServiceCollection\), call one of the AddPwnedServices  
overload extension methods\:  
// Pass an IConfiguration section that maps  
// to an object that has configured an ApiKey.  
services.AddPwnedServices\(  
\_configuration.GetSection\(nameof\(HibpOptions\)\)  
\);  
This first AddPwnedServices overload uses an IConfiguration  
\_configuration and asks for the "HibpOptions" section. ASP.NET  
Core has many configuration providers, including JSON, XML,  
environment variables, Azure Key Vault, and so on. The  
IConfiguration object can represent all of these providers. If using  
environment variables, for example, it would map that configuration section  
to the libraries dependent HibpOptions. Likewise, the JSON provider is  
capable of pulling in configuration from JSON files such as  
appsettings.json\:  
\{  
"Logging"\: \{  
"LogLevel"\: \{  
"Default"\: "Information",  
"Microsoft"\: "Warning",  
"Microsoft.Hosting.Lifetime"\: "Information"  
\}  
\},  
"AllowedHosts"\: "\*"  
"HibpOptions"\: \{  
, "ApiKey"\: "\<YourApiKey\>",  
"UserAgent"\: "\<YourUserAgent\>"  
\}  
\}  
In this example file, the "HibpOptions" object would map to the  
HibpOptions type in the library.  
Alternatively, you can assign the options directly with a lambda expression\:  
// Provide a lambda expression that assigns the ApiKey directly.  
services.AddPwnedServices\(options =\>  
options.ApiKey = "\<Your API key\>";  
\{  
\}\);  
This AddPwnedServices overload allows you to specify the API key  
and other options inline. After the services have been registered, and the  
proper configurations have been set the code can use dependency injection  
for any available abstractions. There are several clients to use, each with a  
specific context.  
IPwnedBreachesClient\: A client to access the Breaches API.  
IPwnedPasswordsClient\: A client to access the Passwords API.  
IPwnedPastesClient\: A client to access the Pastes API.  
IPwnedClient\: A client to access all the APIs, aggregates all other  
clients into a single client for convenience.  
If you’d like to run the sample application locally, you’ll need several API  
keys for various other services. For the Pwned API key, you can sign up on  
the Have I Been Pwned API site.  
With .NET 6, minimalism-first is widely emphasized, and for good reason.  
The idea is to start small, and allow for the code to grow with your needs.  
Minimal APIs focus on simplicity, ease-of-use, extensibility, and for lack of  
a better word — minimalism. HIBP client services  
Let’s look at the .NET 6 Minimal API project that serves as the  
Web.PwnedApi of the Learning Blazor app, the Web.PwnedApi.csproj file\:  
\<Project Sdk="Microsoft.NET.Sdk.Web"\>  
\<PropertyGroup\>  
\<RootNamespace\>Learning.Blazor.PwnedApi\</RootNamespace\>  
\<TargetFramework\>net6.0\</TargetFramework\>  
\<Nullable\>enable\</Nullable\>  
\<ImplicitUsings\>enable\</ImplicitUsings\>  
\</PropertyGroup\>  
\<ItemGroup\>  
\<PackageReference Version="2.0.0"  
Include="HaveIBeenPwned.Client" /\>  
\<PackageReference Version="2.0.0"  
Include="HaveIBeenPwned.Client.PollyExtensions" /\>  
\<PackageReference Version="6.0.0"  
Include="Microsoft.AspNetCore.Authentication.JwtBearer"/\>  
\<PackageReference Version="6.0.0"  
Include="Microsoft.AspNetCore.Authentication.OpenIdConnect" /\>  
\<PackageReference Version="1.21.0"  
Include="Microsoft.Identity.Web" /\>  
\</ItemGroup\>  
\<ItemGroup\>  
\<ProjectReference  
Include="..\\Web.Extensions\\Web.Extensions.csproj" /\>  
\<ProjectReference  
Include="..\\Web.Http.Extensions\\Web.Http.Extensions.csproj" /\>  
\</ItemGroup\>  
\</Project\>  
The projects root namespace is defined as  
Learning.Blazor.PwnedApi and it targets the net6.0 target  
framework moniker \(TFM\). Since we’re targeting .NET 6 we have the  
ability to enable the ImplicitUsings feature, this means that by  
default there is a set of usings implicitly available in all the projects C\# files. This is an added convenience, as these implicitly added  
namespaces are very common. The project also defines Nullable as  
being enabled. This means that we can define nullable reference types,  
and the C\# compiler platform \(Roslyn\) will provide warnings where  
there is the potential for null values, through definite assignment  
flow-analysis. The project adds many package references, one package of particular  
interest is the HaveIBeenPwned.Client. This is the package that  
exposes the “Have I Been Pwned” HTTP client functionality. The  
project also defines a authentication and identity packages, which are  
used to help protect the exposed APIs. The project defines two project references, Web.Extensions and  
Web.Http.Extensions. These projects provide shared utilitarian  
functionality. The extensions project is based on the common language  
runtime \(or CLR\) types for short. Whereas the HTTP extensions project  
is specific to providing a shared transient fault error handling policy.  
The Program.cs is a C\# top-level program, and it looks like the following\:  
var builder =  
WebApplication.CreateBuilder\(args\).AddPwnedEndpoints\(\);  
await using var app = builder.Build\(\).MapPwnedEndpoints\(\);  
await app.RunAsync\(\);  
The code starts by creating a builder instance of type  
WebApplicationBuilder, which exposes the builder pattern for  
our web app. From the call to CreateBuilder, the code calls  
AddPwnedEndpoints. This is an extension method on the  
WebApplicationBuilder type which adds all the desired  
endpoints. The args used to call CreateBuilder are implicitly  
available and represent the command line args given to initiate the  
running of the application. These are available for all C\# top-level  
programs. With the builder we have access to several key members\:  
The Services property is our IServiceCollection, we can  
register services for DI with this. The Configuration property is a ConfigurationManager,  
which is an implementation of IConfiguration.  
The Environment property provides information about the  
hosting environment itself.  
Next, builder.Build\(\) is called. This returns a  
WebApplication type, and from this returned object another call is  
chained to MapPwnedEndpoints. This is yet another extension  
method, which encapsulates the logic for mapping the added endpoints  
to the WebApplication that is extends. The WebApplication  
type is an implementation of the IAsyncDisposable interface. As  
such, the code can asynchronously await using the app instance.  
This is the proper way to ensure that the app will be disposed of when  
it’s done running. Finally, the code calls await app.RunAsync\(\);. This runs the  
application, and returns a Task that only completes when the app is  
shutdown.  
While this Minimal API project has a Program file with a meager three  
lines of code, there is a fair amount that’s actually going on here. This API  
is exposing a very important piece of app functionality. The ability to  
evaluate whether a user’s email has been part of a data breach. This  
information is hugely helpful to users, and it needs to be properly protected.  
The API itself requires an authenticated user with a specific Azure Active  
Directory \(AAD\) B2C scope. Consider the  
WebApplicationBuilderExtensions.cs C\# file\:  
namespace Learning.Blazor.PwnedApi;  
static class WebApplicationBuilderExtensions  
\{ internal static WebApplicationBuilder AddPwnedEndpoints\(  
this WebApplicationBuilder builder\)  
\{  
ArgumentNullException.ThrowIfNull\(builder\);  
var webClientOrigin =  
builder.Configuration\["WebClientOrigin"\];  
builder.Services.AddCors\(  
options =\>  
options.AddDefaultPolicy\(  
policy =\>  
policy.WithOrigins\(  
webClientOrigin,  
"https\://localhost\:5001"\)  
.AllowAnyHeader\(\)  
.AllowAnyMethod\(\)  
.AllowCredentials\(\)\)\);  
builder.Services.AddAuthentication\(  
JwtBearerDefaults.AuthenticationScheme\)  
.AddMicrosoftIdentityWebApi\(  
builder.Configuration.GetSection\("AzureAdB2C"\)\);  
builder.Services.Configure\<JwtBearerOptions\>\(  
JwtBearerDefaults.AuthenticationScheme,  
options =\>  
options.TokenValidationParameters.NameClaimType =  
"name"\);  
builder.Services.AddPwnedServices\(  
builder.Configuration.GetSection\(nameof\(HibpOptions\)\),  
HttpClientBuilderRetryPolicyExtensions.GetDefaultRetryPolicy\);  
builder.Services.AddSingleton\<PwnedServices\>\(\);  
return builder;  
\}  
\}  
.NET 6 introduced a new API on the ArgumentNullException  
type, that will throw if a given parameter is null. This API is void returning, so it’s not fluent, but it can still save a few lines of code.  
Given the builder.Configuration instance, the code expects a  
value for the "WebClientOrigin" key. This is the origin of the  
client Blazor application, and it’s used to configure cross-origin  
resource sharing or simply, CORs. CORs is a policy that enables  
different origins to share resources, i.e.\: one origin can request resources  
from another. By default browsers enforce the “same-origin” policy as a  
standard to ensure the browser can make API calls to a different origin.  
Since the Pwned API is hosted on a different origin than the Blazor  
client application, it must configure CORs and specify the allowable  
client origins. The Azure AAD B2C tenant is configured. The "AzureAdB2C"  
section from the appsettings.json file is bound, which sets the instance,  
client identifier, domain, scopes, and policy id.  
The JwtBearerOptions are configured, specifying the "name"  
claim as the name claim type for token validation. This controls the  
behavior of bearer authentication handler. The JwtBearer in the options  
name, signifies that these options are for the JWT bearer settings. JWT  
stands for JSON Web Token, and these tokens represent an internet  
standard for authentication. ASP.NET Core uses these token to  
materialize the ClaimsPrincipal instance per authenticated  
request. The AddPwnedServices extension method is called, given the  
configuration’s "HibpOptions" section and the default HTTP retry  
policy. This project relies on the Web.Http.Extensions project. These  
extensions expose a common set of HTTP-based retry logic, relying on  
the Polly library. Following this pattern, the entire app shares a common  
transient fault handling policy to help keep everything running  
smoothly. Additionally, the PwnedServices is added to DI as a  
singleton.  
The next extension method to evaluate after the AddPwnedEndpoints is  
the MapPwnedEndpoints. This happens in the  
WebApplicationExtensions.cs C\# file\: namespace Learning.Blazor.PwnedApi;  
static class WebApplicationExtensions  
\{  
/// \<summary\>  
/// Maps "pwned breach data" endpoints and "pwned passwords"  
/// endpoints, with Minimal APIs.  
/// \</summary\>  
/// \<param name="app"\>The current \<see  
cref="WebApplication"/\>  
/// instance to map on.\</param\>  
/// \<returns\>The given \<paramref name="app"/\> as a fluent  
API.\</returns\>  
/// \<exception cref="ArgumentNullException"\>When \<paramref  
name="app"/\>  
/// is \<c\>null\</c\>.\</exception\>  
internal static WebApplication MapPwnedEndpoints\(this  
WebApplication app\)  
\{  
ArgumentNullException.ThrowIfNull\(app\);  
app.UseHttpsRedirection\(\);  
app.UseCors\(\);  
app.UseAuthentication\(\);  
app.UseAuthorization\(\);  
app.MapBreachEndpoints\(\);  
app.MapPwnedPasswordsEndpoints\(\);  
return app;  
\}  
internal static WebApplication MapBreachEndpoints\(  
this WebApplication app\)  
\{  
// Map "have i been pwned" breaches.  
app.MapGet\("api/pwned/breaches/\{email\}",  
GetBreachHeadersForAccountAsync\);  
app.MapGet\("api/pwned/breach/\{name\}",  
GetBreachAsync\);  
return app;  
\} internal static WebApplication MapPwnedPasswordsEndpoints\(  
this WebApplication app\)  
\{  
// Map "have i been pwned" passwords.  
app.MapGet\("api/pwned/passwords/\{password\}",  
GetPwnedPasswordAsync\);  
return app;  
\}  
\[Authorize, RequiredScope\("User.ApiAccess"\), EnableCors\]  
internal static async Task\<IResult\>  
GetBreachHeadersForAccountAsync\(  
\[FromRoute\] string email,  
PwnedServices pwnedServices\)  
\{  
var breaches = await  
pwnedServices.GetBreachHeadersAsync\(email\);  
return Results.Json\(breaches,  
DefaultJsonSerialization.Options\);  
\}  
\[Authorize, RequiredScope\("User.ApiAccess"\), EnableCors\]  
internal static async Task\<IResult\> GetBreachAsync\(  
\[FromRoute\] string name,  
PwnedServices pwnedServices\)  
\{  
var breach = await  
pwnedServices.GetBreachDetailsAsync\(name\);  
return Results.Json\(breach,  
DefaultJsonSerialization.Options\);  
\}  
\[Authorize, RequiredScope\("User.ApiAccess"\), EnableCors\]  
internal static async Task\<IResult\> GetPwnedPasswordAsync\(  
\[FromRoute\] string password,  
IPwnedPasswordsClient pwnedPasswordsClient\)  
\{  
var pwnedPassword =  
await  
pwnedPasswordsClient.GetPwnedPasswordAsync\(password\);  
return Results.Json\(pwnedPassword,  
DefaultJsonSerialization.Options\);  
\}  
\} The code uses HTTPs redirection, CORs, Authentication, and  
Authorization middleware. This middleware is commonplace with  
ASP.NET Core web app development, and is part of the framework. The app maps breach endpoints and Pwned passwords endpoints.  
These are entirely custom endpoints, defined within extension methods.  
After these methods are called, the app is returned which fulfills a  
fluent API. This is what enabled the Program to chain calls after  
builder.Build\(\).  
The MapBreachEndpoints method maps two patterns and their  
corresponding Delegate handler before returning. Each endpoint  
has a route pattern, that starts with "api/pwned". These endpoints  
have placeholders for route parameters. These mapped endpoint route  
handlers are only executed when the framework determines request has  
a matching route pattern, for example an authenticated user could  
request the following\:  
https\://example-  
domain.com/api/pwned/breaches/test@email.org  
and run the GetBreachHeadersForAccountAsync delegate  
or,  
https\://example-  
domain.com/api/pwned/breach/linkedin and run the  
GetBreachAsync delegate.  
The MapPwnedPasswordsEndpoints method maps the passwords  
endpoint to the GetPwnedPasswordAsync handler.  
The GetBreachHeadersForAccountAsync method is an async  
Task\<IResult\> returning method. It declares an Authorize  
attribute, which protects this handler from unauthorized requests.  
Furthermore, it declares a RequiredScope of  
"User.ApiAccess" which is the scope defined in the Azure AAD  
B2C tenant. In other words, this handler \(or API for that matter\) will  
only be accessible to an authenticated user from our Azure AAD B2C tenant who has this specific scope. Users of the “Learning Blazor”  
application will have this scope, therefor, they can access this API. The  
method declares the EnableCors attribute, which ensures that this  
handler uses the configured CORs policy. Besides all of that, this  
method is like any other C\# method. It requires a few parameters\:  
\[FromRoute\] string email\: The FromRoute attribute on  
the parameter tells the framework that the parameter is to be  
provided from the \{email\} placeholder in the route pattern.  
PwnedServices pwnedServices\: The service instance is  
injected from DI, and the breach headers are asynchronously  
requested given the email. The breaches are returned as JSON.  
The GetPwnedPasswordAsync method is much like the previous,  
except for it expects a password from the route and the  
IPwnedPasswordsClient instance from the DI container.  
Through the lens of our application, it’s very helpful to the users to make  
this information readily available. When the user performs their login, we’ll  
check the HIBP API and report back. As a user, I can trust that the app will  
do its intended work and I don’t have to manually check, or wait for an  
email. As I use the app, it’s helping me by making information immediately  
available, which would otherwise be inconvenient to dig up. The “Learning  
Blazor” application does rely on the HaveIBeenPwned.Client NuGet  
package and exposes it through its Web Pwned API project.  
Restricting access to resources  
If you recall, our markup thus far made use of the Authorize framework-  
provided component to protect various client rendering of custom  
components. We can continue to selectively use this approach to restrict  
access to functionality in your app. This is known as Authorization. AUTHORIZATION  
Authorization is the act of using additional user-available information to  
determine what a user has access to. For example, imagine that Carol is  
an authenticated user of the app and part of the Administrators group or  
role. She would likely have unlimited access to resources, while  
someone else with a lesser role would be restricted access.  
In the case of the sample application, the Index.razor markup file is using  
this to hide the routes when the app doesn’t have an authenticated user.  
@page "/"  
@inherits LocalizableComponentBase\<Index\>  
\<PageTitle\>  
@Localizer\["Home"\]  
\</PageTitle\>  
\<AuthorizeView\>  
\<NotAuthorized\>  
\<RedirectToLogin /\>  
\</NotAuthorized\>  
\<Authorized\>  
\<div id="index" class="tile is-ancestor"\>  
\<div class="tile is-vertical is-centered is-7"\>  
\<div class="tile"\>  
\<div class="tile is-parent"\>  
\<IntroductionComponent /\>  
\</div\>  
\<div class="tile is-parent"\>  
\<JokeComponent /\>  
\</div\>  
\</div\>  
\<div class="tile is-parent"\>  
\<WeatherComponent /\>  
\</div\>  
\</div\>  
\</div\> \</Authorized\>  
\</AuthorizeView\>  
This is the first time seeing the @page directive. This is how you  
template your apps’ navigation and client-side routing. Each component  
within a Blazor app that defines a page will serve as a user-navigable  
route. The routes are defined as a C\# string. This literal is a value used  
to defines the route templates, route parameters, and route constraints. The PageTitle is a framework-provided component that allows for  
the dynamic updating of the pages head \> title, it’s HTML DOM  
\<title\> element. This is the value that will display in the browser tab  
UI. The AuthorizeView template component exposes the  
NotAuthorized and Authorized render fragments. These are  
templates specific to the state of the current user in context. When the user is not authorized, we’ll redirect the user. We’ve already  
discussed the ability to redirect an unauthenticated user, using the  
RedirectToLogin component. See “Redirect to login when  
unauthenticated”. When there is an authenticated user, they’ll see three tiles. The first tile  
is a simple “thank you” message for you, the user of the app and  
consumer of my book! It renders the custom  
IntroductionComponent. The second tile is the joke component.  
It’s backed by an aggregate joke service that randomly attempts to  
provide developer humor from multiple sources. The last tile spans the  
entire row under the intro and joke components, and it displays the  
WeatherComponent. We’ll discuss each of these various custom  
Blazor component implementations, and they’re varying degrees of  
data-binding, and event-handling.  
# Say “hi”  
# , to the introduction component  
With a simple greeting I say “hi” and humbly welcome those who visit our  
app — that’s the purpose of the IntroductionComponent. This time,  
let’s look at the IntroductionComponent.razor.cs C\# file\: using Microsoft.Extensions.Localization;  
namespace Learning.Blazor.Components  
\{  
public partial class IntroductionComponent  
\{  
private LocalizedString \_intro =\> Localizer\["ThankYou"\];  
\}  
\}  
The class makes use of the LocalizedString type, which is a  
locale specific string. This comes from the  
Microsoft.Extensions.Localization namespace.  
The class defines a single field named \_intro which is expressed as  
a call to the Localizer given the "ThankYou" key. This key  
identifies the resource to resolve from the localizer instance. In Blazor  
WebAssembly, localized resources such as those found in .resx files are  
available using the IStringLocalizer framework-provided type.  
The Localizer type, however; is actually a custom type named  
CoalescingStringLocalizer. This type is covered in more  
detail in Chapter 5.  
The Localizer member actually comes from the  
LocalizableComponentBase type. This is a subclass for a lot of our  
components. Now, let’s look at the IntroductionComponent.razor markup  
file\:  
@inherits LocalizableComponentBase\<IntroductionComponent\>  
\<article class="blazor-tile-container"\>  
\<div class="gradient-bg welcome-gradient"\>\</div\>  
\<div class="icon-overlay heart-svg"\>\</div\>  
\<div class="blaze-content"\>  
\<p class="title is-family-monospace"\>  
\<span class="wave"\>&\#x1F44B;&\#x1F3FD;\</span\>  
\<span class="has-text-light"\>  
@Localizer\["Hi"\]  
\</span\>  
\</p\> \<AdditiveSpeechComponent Message=@\_intro.Value /\>  
\<p class="has-text-black is-family-monospace welcome-text  
is-size-5"\>  
@\_intro  
\</p\>  
\</div\>  
\</article\>  
The HTML markup, for the most part is pure HTML. If you look it  
over, you should notice only a few Blazor bits. The Razor code context switches from raw HTML to accessing the  
Localizer instance in the class. I wanted to demonstrate that you  
can use fields in the class, or access other members to achieve one-  
way data-binding. The localized message corresponding to the "Hi"  
key is bound after the waving emoji hand. The greeting message is “Hi,  
I’m David”. There is a custom AdditiveSpeechComponent which has a  
Message parameter bound to the \_intro.Value. This component  
will render a button, in the top-right corner of the tile. This button, when  
clicked with read the given Message value to the user. The  
AdditiveSpeechComponent component is covered in detail in  
next chapter.  
The \_intro localized resource value is splatted into the \<p\> element.  
The localized resource files, by convention, have names that align with the  
file their localizing. For example, the IntroductionComponent.razor.cs file  
has an IntroductionComponent.razor.en.resx XML file. The following is a  
trimmed down example of what its contents would look like\:  
\<?xml version="1.0" encoding="utf-8"?\>  
\<root\>  
\<data name="Hi" xml\:space="preserve"\>  
\<value\>Hi, I'm David\</value\>  
\</data\>  
\<data name="ThankYou" xml\:space="preserve"\>  
\<value\>  
I'm honored, humbled, and thrilled to invite you  
on a tour of my "Learning Blazor\: Build Single-Page Apps  
with WebAssembly and C\#" book.  
\</value\> \</data\>  
\</root\>  
Within a top-level root node, there are data nodes. Each data node has  
a name attribute, and the name is the key used to retrieve the resource’s  
value. There can be any number of data nodes. This example file is in  
English, while other languages would use their specific locale identifier in  
the file name. For example, a French resource file would be named  
IntroductionComponent.razor.fr.resx and it would contain the exact same  
root \> data \[name\] structure, but its value nodes would have  
French translations instead. The same is true for any locale the app intends  
to provide resources for. To see how this component is rendered take a look  
at Figure 3-1.  
Figure 3-1. An example rendering of the IntroductionComponent.  
The introduction component shows one-way data binding, and localized  
content. Let’s extend these two concepts a bit further, and explore the  
JokesComponent.  
# The joke component and services  
The joke component makes an HTTP request to the api/jokes Web API  
endpoint. The joke object itself is shared with both the Web API endpoint and the client-side code. This helps to ensure that there aren’t any  
misalignments with the data structure, which could cause serialization  
errors or missing data.  
TIP  
I love the “Internet Chuck Norris Database” \(icndb\). I use it a lot for programming  
demos, not only does it provide nerdy humor but its easy of use. It makes for a  
compelling story. Likewise, jokes often find their way into my household. Being a father  
of three sons, I know that my boys love hearing dad jokes and what makes them happy  
brings me joy.  
Consider the JokeComponent.razor markup file\:  
@inject IJokeFactory JokeFactory  
@inject ILogger\<JokeComponent\> Logger  
@inject IStringLocalizer\<JokeComponent\> Localizer  
\<article class="blazor-tile-container"\>  
\<div class="gradient-bg jokes-gradient"\>\</div\>  
\<div class="icon-overlay circle-svg"\>\</div\>  
\<div class="blaze-content"\>  
\<p class="title"\>  
\<span class="is-emoji"\>&\#x1F913;\</span\>  
\<span class="has-text-light"\>@Localizer\["Jokes"\]  
\</span\>  
\</p\>  
\<AdditiveSpeechComponent Message=@\_jokeText /\>  
\<div class="content"\>  
@if \(\_isLoadingJoke\)  
\{  
\<SpinnerComponent /\>  
\}  
else if \(\_jokeText is not null\)  
\{  
\<blockquote class="has-text-black"\>  
\<span class="pb-4"\>@\_jokeText\</span\>  
\<br\>  
\<cite\>  
&mdash;  
\<a href="@\(\_sourceDetails.Site.ToString\(\)\)"  
target="\_blank"\>  
@\(\_sourceDetails.Source.ToString\(\)\)  
\</a\>  
\</cite\>  
\</blockquote\>  
\}  
\</div\>  
\</div\>  
\</article\>  
@code \{  
private string? \_jokeText = null;  
private JokeSourceDetails \_sourceDetails = null!;  
private bool \_isLoadingJoke = false;  
protected override Task OnInitializedAsync\(\) =\>  
RefreshJokeAsync\(\);  
private async Task RefreshJokeAsync\(\)  
\{  
\_isLoadingJoke = true;  
try  
\{  
var response = await  
JokeFactory.GetRandomJokeAsync\(\);  
if \(response is \{ \}\)  
\{  
\(\_jokeText, \_sourceDetails\) = response;  
\}  
\}  
catch \(Exception ex\)  
\{  
Logger.LogError\(ex, ex.Message\);  
\}  
finally  
\{  
\_isLoadingJoke = false;  
await InvokeAsync\(StateHasChanged\);  
\}  
\}  
\}  
This component starts like most other components, by declaring various  
directives. The JokeComponent has the framework inject an IJokeFactory, ILogger\<JokeComponent\>, and  
IStringLocalizer\<JokeComponent\>. Any service that is  
registered in the DI container is a valid @inject directive target type.  
This component makes use of these specific services. The HTML markup is a bit verbose than the introduction component.  
Component complexity is something you should evaluate and be aware  
of. It’s a good rule of thumb to limit a component to a single  
responsibility. The responsibility of the joke component is to render a  
joke in HTML. The markup is similar to the introduction component,  
providing an emoji and localized title, as well as an  
AdditiveSpeechComponent with bound to the \_jokeText. The content markup for this joke component is conditional, and the use  
of @if, else if, else, and @switch expressions are  
supported control structures. This has been a part of the Razor syntax  
since the beginning. When the value of the \_isLoadingJoke  
evaluates as true, a stylized SpinnerComponent markup is  
rendered. The SpinnerComponent is a custom too, and it’s a tiny bit  
of common HTML. Otherwise, when the \_jokeText is not  
null the random joke text is rendered as a blockquote.  
The joke component uses a @code \{ ... \} directive rather than the  
shadowed component approach. It’s important to understand that as a  
developer, you have options. I more often than not, prefer to not use  
@code directives. To me, it’s cleaner to keep them in separate files. I  
like seeing a C\# class, and it feels a bit more natural to me that way. But  
if you’re a developer coming from the JavaScript SPA world, it might  
feel more natural to have them together. The point is that the only way  
to determine the best approach is to gain a consensus from your team,  
much like other stylistic developer decisions. The RefreshJokeAsync method is called by the  
OnInitializedAsync lifecycle method. This means that as part of  
the component’s initialization the fetching of a joke will occur  
asynchronously. The method starts by setting the \_isLoadingJoke  
bit to true, this will cause the spinner markup to be rendered — but  
only temporarily. The method body tries to ask the IJokeFactory  
instance to get a JokeResponse object. When there is a valid response, it’s deconstructed into a tuple assignment which sets the  
\_jokeText and \_sourceDetails fields. These are then rendered  
as the contents of the joke itself.  
The joke component will render a spinner while it’s busy fetching a random  
joke from the endpoint. When the joke is retrieved successfully, it will  
render with a random joke similar to Figure 3-2.  
Figure 3-2. An example rendering of the JokeComponent.  
Now that you can see what we’re rendering, the endpoint that powers these  
jokes aggregate several third-party APIs together. The various joke  
endpoints have different data structures, and there are services in place to  
converge them into a single endpoint that our Blazor client code consumes.  
Aggregating joke services — laughter ensues  
No application is useful without meaningful data. Our app will have client-  
specific weather, random nerdy jokes, real-time web functionality, chat,  
notifications, a live Twitter stream, on-demand HIBP security features, and  
more. This is going to be fun! But what does this mean for Blazor? Before  
diving into the weeds with Blazor frontend development, we should set a  
few more expectations about the services and data driving this application  
— our backend development. Blazor apps are free to use get data from any number of other platforms,  
services, or web applications. Many good architectures exist, with many  
possible solutions for any given problem domain. After all, knowing when  
to use which pattern, or practice is part of being successful. You should try  
to identify the flow of data and basic requirements, where does data come  
from — how do I access this data? Does this data change frequently, is the  
data used to calculate other points of interest, is the data dynamic or static?  
These are the better questions to be asking yourself. The answer is almost  
always “it depends”.  
Let’s take a look at how the joke service library provides random jokes\:  
namespace Learning.Blazor.JokeServices;  
internal interface IJokeService  
\{  
JokeSourceDetails SourceDetails \{ get; \}  
Task\<string?\> GetJokeAsync\(\);  
\}  
Before C\# 10, namespace declarations wrapped their containing types  
in curly brackets. With C\# 10, you can use file-scoped namespace,  
which enhances the readability by removing a level of indentation in the  
code. I like this feature, even though it’s a bit subtle it does reduce noise  
when reading the code. We explicitly define an internal interface IJokeService  
type, which exposes a read-only JokeSourceDetails property and  
the ability to request a joke asynchronously.  
The GetJokeAsync method is parameterless and returns a  
Task\<string?\>. The ? on the string type declaration identifies  
that the returned string could be null \(the default value of the C\#  
reference type string\). A WORD ON ASYNCHRONOUS CODE  
When making network calls, which are considered I/O bound work, it’s  
advisable to program using the async and await keywords with C\#.  
This approach is known as the task-based asynchronous pattern \(TAP\),  
primarily because the types that represent an asynchronous operation  
are “Task-like” and often modeled as Task objects. While this can add  
overhead in situations where your app is not truly performing async  
work, it does allow apps to be more responsive. A responsive app is  
defined by the characteristics of having the ability to respond to many  
concurrent users at the same time, async \(suspended execution,  
synchronization, and continuation\) programming makes this possible.  
We have three different third-party joke web services, all of which are free.  
The shapes of the joke responses vary by provider, as do the uniform  
resource locators \(URLs\). We have three separate configurations, endpoints,  
and joke models that we have to represent.  
The first IJokeService implementation is the  
ProgrammingJokeService\:  
namespace Learning.Blazor.JokeServices;  
internal class ProgrammingJokeService \: IJokeService  
\{  
private readonly HttpClient \_httpClient;  
private readonly ILogger\<ProgrammingJokeService\> \_logger;  
public ProgrammingJokeService\(  
HttpClient httpClient,  
ILogger\<ProgrammingJokeService\> logger\) =\>  
\(\_httpClient, \_logger\) = \(httpClient, logger\);  
JokeSourceDetails IJokeService.SourceDetails =\>  
new\(JokeSource.RandomProgrammingJokeApi,  
new Uri\("https\://karljoke.herokuapp.com/"\)\);  
async Task\<string?\> IJokeService.GetJokeAsync\(\)  
\{  
try \{  
// An array with a single joke is returned  
var jokes = await  
\_httpClient.GetFromJsonAsync\<ProgrammingJoke\[\]\>\(  
"https\://karljoke.herokuapp.com/jokes/programming/random",  
DefaultJsonSerialization.Options\);  
return jokes?\[0\].Text;  
\}  
catch \(Exception ex\)  
\{  
\_logger.LogError\("Error getting something fun to say\:  
\{Error\}", ex\);  
\}  
return null;  
\}  
\}  
This service starts with its namespace declaration, followed by an  
internal class implementation of IJokeService.  
The class requires two parameters, an HttpClient and an  
ILogger\<ProgrammingJokeService\> logger instance. These  
two parameters are assigned using a tuple literal and its immediate  
deconstruction into the field assignments. This allows for a single line  
and an expression-bodied constructor. This is just a boilerplate  
dependency injection approach. The fields are safely typed as  
private readonly so that consumers in the class will not be  
permitted to mistakenly assign over their values. That is the  
responsibility of the DI container. The programming joke service declaratively expresses its representation  
of the SourceDetails member through an implicit target-type new  
expression. We instantiate an instance of the JokeSourceDetails  
given the enum value of the underlying API type  
JokeSource.RandomProgrammingJokeApi, and the joke URL  
in a .NET Uri object. The actual implementation of GetJokeAsync starts by opening with  
a try and catch block. The \_httpClient is used to make an  
HTTP GET request from the given requestUri and default  
JavaScript Object Notation \(JSON\) serialization options. In the event of an error, the Exception details are logged and null is returned.  
When there is no error, in other words, “the happy path” the response  
from the request is deserialized into a ProgrammingJoke array  
object. When there are jokes, the first joke’s text is returned. If this is  
null that is fine too since we’ll let the consumers handle that. We’ll  
need to indicate it to them — again, it’s a string?. I call nullable  
types, “questionable”. For example, given a string? you should be  
asking yourself is this null, and should guard for that appropriately.  
I’ll often refer to this type of pattern as a questionable string.  
The other two service implementations follow the same pattern, and it  
becomes clear that we’ll need a way to aggregate these as they represent  
multiple implementations of the same interface. When .NET encounters  
multiple services registered for the same type, they are wrapped in an  
IEnumerable\<TService\> where the TService is one of the given  
implementations.  
Consider the following DadJokeService implementation\:  
namespace Learning.Blazor.JokeServices;  
internal class DadJokeService \: IJokeService  
\{  
private readonly HttpClient \_httpClient;  
private readonly ILogger\<DadJokeService\> \_logger;  
public DadJokeService\(  
IHttpClient httpClien,  
ILogger\<DadJokeService\> logger\) =\>  
\(\_httpClient, \_logger\) = \(httpClient, logger\);  
JokeSourceDetails IJokeService.SourceDetails =\>  
new\(JokeSource.ICanHazDadJoke, new  
Uri\("https\://icanhazdadjoke.com/"\)\);  
async Task\<string?\> IJokeService.GetJokeAsync\(\)  
\{  
try  
\{  
return await \_httpClient.GetStringAsync\( \}  
\{  
\{Error\}", ex\);  
\}  
"https\://icanhazdadjoke.com/"\);  
catch \(Exception ex\)  
\_logger.LogError\("Error getting something fun to say\:  
return null;  
\}  
\}  
And the ChuckNorrisJokeService implementation\:  
namespace Learning.Blazor.JokeServices;  
internal class ChuckNorrisJokeService \: IJokeService  
\{  
private readonly HttpClient \_httpClient;  
private readonly ILogger\<ChuckNorrisJokeService\> \_logger;  
public ChuckNorrisJokeService\(  
HttpClient httpClient,  
ILogger\<ChuckNorrisJokeService\> logger\) =\>  
\(\_httpClient, \_logger\) = \(httpClient, logger\);  
JokeSourceDetails IJokeService.SourceDetails =\>  
new\(JokeSource.ChuckNorrisInternetDatabase,  
new Uri\("https\://www.icndb.com/"\)\);  
async Task\<string?\> IJokeService.GetJokeAsync\(\)  
\{  
try  
\{  
var result = await  
\_httpClient.GetFromJsonAsync\<ChuckNorrisJoke\>\(  
"https\://api.icndb.com/jokes/random?limitTo=  
\[nerdy\]",  
DefaultJsonSerialization.Options\);  
return result?.Value?.Joke;  
\}  
catch \(Exception ex\)  
\{  
\_logger.LogError\("Error getting something fun to say\:  
\{Error\}", ex\); \}  
return null;  
\}  
\}  
To handle the multiple implementations of the IJokeService, we’ll  
create a factory that will aggregate them.  
namespace Learning.Blazor.JokeServices;  
public interface IJokeFactory  
\{  
Task\<\(string, JokeSourceDetails\)\> GetRandomJokeAsync\(\);  
\}  
This interface defines a single task-based async method that by its name  
indicates it gets a random joke. The return type is a Task\<\(string,  
JokeSourceDetails\)\>, where the generic type constraint on Task is  
a tuple of string, and JokeSourceDetails. The  
JokeSourceDetails is shaped as follows.  
using System;  
namespace Learning.Blazor.Models;  
public record JokeSourceDetails\(  
JokeSource Source,  
Uri Site\);  
In C\#, positional records are an amazing type. First of all, they’re  
immutable. Instances can be cloned using the with syntax, where property  
values are overridden into the copied object. You also get automatic  
equality and value-based comparison semantics. They’re declarative and  
succinct to write. Let’s take a look at the joke factory next\:  
namespace Learning.Blazor.JokeServices;  
internal class AggregateJokeFactory \: IJokeFactory  
\{ private readonly IEnumerable\<IJokeService\> \_jokeServices;  
public AggregateJokeFactory\(IEnumerable\<IJokeService\>  
jokeServices\) =\>  
\_jokeServices = jokeServices;  
async Task\<\(string, JokeSourceDetails\)\>  
IJokeFactory.GetRandomJokeAsync\(\)  
\{  
var services = \_jokeServices;  
var randomService = services.RandomElement\(\);  
var joke = await randomService.GetJokeAsync\(\);  
var sourceDetails = randomService.SourceDetails;  
while \(joke is null && services.Any\(\)\)  
\{  
services = services.Except\(new\[\] \{ randomService \}\);  
randomService = services.RandomElement\(\);  
joke = await randomService.GetJokeAsync\(\);  
sourceDetails = randomService.SourceDetails;  
\}  
return \(  
joke ?? "There is nothing funny about this.",  
sourceDetails\);  
\}  
\}  
The IJokeFactory implementation is named appropriately as  
AggregateJokeFactory with its constructor \(.ctor\) accepting  
an IEnumerable\<IJokeService\>. These are the joke services,  
dad joke service, random programming joke API service, and internet  
Chuck Norris database service.  
The method body of GetRandomJokeAsync is leveraging an  
extension method named RandomElement on the  
IEnumerable\<T\> type. This pattern relies on a fall-back pattern in  
which services are attempted until one is capable of providing a joke.  
namespace Learning.Blazor.Extensions;  
public static class EnumerableExtensions \{  
static readonly Random s\_random = Random.Shared;  
public static T RandomElement\<T\>\(  
this IEnumerable\<T\> source\) =\>  
source.ElementAt\(s\_random.Next\(source.Count\(\)\)\);  
\}  
The Random class represents a pseudo-random number generator,  
which is an algorithm that produces a sequence of numbers that meet  
1  
basic statistical requirements for randomness. The random element function works on the source instance invoking  
the ElementAt function, given a random index from within the count  
of the collection. From the AggregateJokeFactory instance we  
pseudo-randomly determined, we’ll await its invocation of the  
GetJokeAsync method. If the joke returned is null we’ll coalesce  
to "There is nothing funny about this.". We then  
return a tuple, with the string joke and the corresponding service’s  
source details.  
DI from library authors  
The last part of the joke services library involves the fact that all of our joke  
services are DI-friendly, and we can add an extension method on the  
IServiceCollection — registering them with the dependency  
injection container. This is a very common tactic that I’ll follow for all  
libraries that are intended for consumption. Consumers will call \`  
AddJokeServices\` to register all abstractions with dependency injection.  
They can start requiring these services for .ctor injection in classes or  
with Blazor components through the property injection. The  
InjectAttribute and the @inject directive allows for injecting  
services into properties.  
namespace Learning.Blazor.Extensions;  
public static class ServiceCollectionExtensions  
\{  
public static IServiceCollection AddJokeServices\(  
this IServiceCollection services\) \{  
\(\);  
ArgumentNullException.ThrowIfNull\(nameof\(services\)\);  
services.AddScoped\<IJokeService, ProgrammingJokeService\>  
services.AddScoped\<IJokeService, DadJokeService\>\(\);  
services.AddScoped\<IJokeService, ChuckNorrisJokeService\>  
\(\);  
services.AddHttpClient\<ProgrammingJokeService\>\(\)  
.AddDefaultTransientHttpErrorPolicy\(\);  
services.AddHttpClient\<DadJokeService\>\(\)  
.AddDefaultTransientHttpErrorPolicy\(\);  
services.AddHttpClient\<ChuckNorrisJokeService\>\(\)  
.AddDefaultTransientHttpErrorPolicy\(\);  
services.AddScoped\<IJokeFactory, AggregateJokeFactory\>\(\);  
return services;  
\}  
\}  
Calling AddJokesServices registers all of the corresponding joke  
services into the DI container. Once registered in the DI container,  
consumers can require the IJokeFactory service and the  
implementation will be provided. All of this functionality is exposed to the  
Web.Client. The\`JokeComponent\` uses the  
IJokeFactory.GetRandomJokeAsync method. The client code is  
able to use this service library as none of the APIs require sensitive  
information, such as an API key. If they did require sensitive information,  
they should be exposed behind a Web API to encapsulate away the  
configuration on a server and avoid having it exposed on the client.  
# Forecasting local weather  
The custom components that we’ve covered thus far started off a bit more  
basic. The IntroductionComponent has a single localized text field  
that it renders. The JokeComponent then demonstrated how to fetch data  
from an HTTP endpoint, with conditional control structures and loading indicators. The WeatherComponent is a parent component to the  
WeatherCurrentComponent and WeatherDailyComponent.  
Collectively, these components display the users’ local current weather and  
immediate forecast for the week.  
All of the weather data is made available for free from the Open Weather  
Map API. The WeatherComponent relies on an HttpClient instance  
to retrieve data its weather data, but before it does that it uses a two-way  
JavaScript interop. Consider first, the WeatherComponent.razor markup\:  
@inherits LocalizableComponentBase\<WeatherComponent\>  
\<article class="blazor-tile-container"\>  
\<div class="gradient-bg weather-gradient"\>\</div\>  
\<div class="icon-overlay zap-svg"\>\</div\>  
\<div class="blaze-content"\>  
\<p class="title" translate="no"\>  
\<span class="is-emoji"\>&\#x1F525;\</span\>  
\<span class="has-text-light"\> Blazor  
@Localizer\["Weather"\]\</span\>  
\</p\>  
\<AdditiveSpeechComponent Message=@\_model?.Message /\>  
\<div class="columns has-text-centered"\>  
@switch \(\_state\)  
\{  
case ComponentState.Loaded\:  
var weather = \_model!;  
\<div class="column is-one-third"\>  
\<WeatherCurrentComponent Weather=weather  
Localizer=Localizer /\>  
\</div\>  
\<div class="column"\>  
\<div class="level"\>  
@foreach \(DailyWeather daily in  
weather.DailyWeather\)  
\{  
\<WeatherDailyComponent Daily="daily"  
GetDailyImagePath=weather.GetDailyImagePath GetDailyHigh=weather.GetDailyHigh  
GetDailyLow=weather.GetDailyLow /\>  
\}  
\</div\>  
\</div\>  
break;  
case ComponentState.Loading\:  
\<div class="column is-full"\>  
\<SpinnerComponent /\>  
\</div\>  
break;  
default\:  
\<div class="column is-full"\>  
@Localizer\["WeatherUnavailable"\]  
\</div\>  
break;  
\}  
\</div\>  
\</div\>  
\</article\>  
There is similar markup to the other two tiles,  
IntroductionComponent and the JokeComponent that we’ve  
discussed. The WeatherComponent is a parent component two the  
WeatherCurrentComponent and the  
WeatherDailyComponent. It’s title is “Blazor Weather”, and the  
word weather is localized. The weather tile, like the other two tiles, also makes uses of the  
AdditiveSpeechComponent. When rendered a speech button is  
rendered in the top-right hand corner of its parent element. The  
AdditiveSpeechComponent component is covered in detail in  
next chapter. In addition to simple @if control structures, you can use @switch  
control structures as well. The weather component uses a custom  
component \_state variable to help track the state of the component.  
The possible states are; unknown, loading, loaded, or error.  
When the component is loaded, the current weather  
\(WeatherCurrentComponent\) and daily weather forecast \(WeatherDailyComponent\) components are rendered. The parent  
component relies on a nullable component model named \_model,  
when the component is loaded we can ensure that the \_model is not  
null and we can tell the compiler that we’re certain of that by using  
the null-forgiving operator !. The class-scoped \_model variable is  
assigned to a local-scoped weather variable. This variable flows to its  
child components’ as needed, through either helper method delegation  
or parameter assignment. When the component is loading, the SpinnerComponent is shown.  
The default case renders a localized message that tells the user that  
weather is unavailable. This should only happen in the event of an error.  
The weather component markup references the current weather  
\(WeatherCurrentComponent\) and daily weather forecast  
\(WeatherDailyComponent\) components. These two components do  
not make use of component shadowing, and are purely for templates. Each  
component defines a @code \{ ... \} directive with several  
Parameter properties. They do not require logic or functionality, as such  
they’re just markup bound to given values. This is the  
WeatherCurrentComponent.razor markup file\:  
@using Learning.Blazor.Localization;  
\<div class="box dotnet-box-border is-alpha-bg-50"\>  
\<article class="media"\>  
\<div class="media-left"\>  
\<figure class="image is-128x128"\>  
\<img src=@\(Weather.ImagePath\)  
class="has-img-shadow"  
alt="@Localizer\["CurrentWeatherVisual"\]"\>  
\</figure\>  
\</div\>  
\<div class="media-content"\>  
\<div class="content has-text-right has-text-light"\>  
\<div\>  
\<span class="title has-text-light"\>  
@Weather.Temperature  
\</span\>  
\<span class="heading"\>  
\<i class="fas fa-arrow-up"\>\</i\> @\(Weather.HighTemp\) |  
\<i class="fas fa-arrow-down"\>\</i\>  
@\(Weather.LowTemp\)  
\</span\>  
\<span class="heading"\>  
@Weather.Description  
\</span\>  
\<span class="heading"\>  
\<i class="fas fa-wind"\>\</i\>  
@Weather.WindSpeed  
\<sup\>  
@\(Localizer\[Weather.WindDegree.PositionalCardinal\]\)  
\</sup\>  
\</span\>  
\</div\>  
\</div\>  
\</div\>  
\</article\>  
\<div class="has-text-centered has-text-light"\>  
@\(\$"\{Weather.City\}, \{Weather.State\} \(\{Weather.Country\}\)"\)  
\</div\>  
\</div\>  
@code \{  
\[Parameter\]  
public WeatherComponentModel Weather  
\{  
get;  
set;  
\} = null!;  
\[Parameter\]  
public CoalescingStringLocalizer\<WeatherComponent\> Localizer  
\{  
get;  
set;  
\} = null!;  
\}  
The WeatherCurrentComponent renders the image that corresponds  
to the current weather, such as clouds, rain clouds, or the sun for example. It  
also displays the temperature, high and low temperatures, a description of  
the weather, the wind speed and direction as well as the city and state. As for the daily forecast, consider the WeatherDailyComponent.razor markup  
file\:  
\<div class="level-item has-text-centered has-text-light"\>  
\<div\>  
\<p class="heading is-size-6 is-underlined"\>  
@Daily.DateTime.ToString\("ddd"\)  
\</p\>  
\<p class="title"\>  
\<figure class="image is-64x64"\>  
\<img src=@GetDailyImagePath?.Invoke\(Daily\)  
class="has-img-shadow"  
alt="@Daily.Weather\[0\].Description"\>  
\</figure\>  
\</p\>  
\<p class="heading"\>@Daily.Weather\[0\].Main\</p\>  
\<p class="heading has-text-weight-bold"\>  
\<i class="fas fa-arrow-up"\>\</i\>  
@GetDailyHigh?.Invoke\(Daily\)  
\</p\>  
\<p class="heading has-text-weight-bold"\>  
\<i class="fas fa-arrow-down"\>\</i\>  
@GetDailyLow?.Invoke\(Daily\)  
\</p\>  
\</div\>  
\</div\>  
@code \{  
\[Parameter\]  
public DailyWeather Daily \{ get; set; \} = null!;  
\[Parameter\]  
public Func\<DailyWeather, string\>? GetDailyImagePath \{ get;  
set; \}  
\[Parameter\]  
public Func\<DailyWeather, string\>? GetDailyHigh \{ get; set; \}  
\[Parameter\]  
public Func\<DailyWeather, string\>? GetDailyLow \{ get; set; \}  
\}  
The WeatherDailyComponent uses delegates as parameters for some  
of its data-binding needs. It will render the day for the forecast, an icon for  
the forecasted weather, along with the description and highs and lows. The WeatherComponent relies on several services, and refreshes the  
weather automatically using a timer. This component shows a lot of  
powerful functionality. Now that you’ve explored the markup, consider the  
shadowed component C\# file, WeatherComponent.razor.cs\:  
namespace Learning.Blazor.Components  
\{  
public sealed partial class WeatherComponent \: IDisposable  
\{  
private Coordinates \_coordinates = null!;  
private GeoCode? \_geoCode = null!;  
private WeatherComponentModel\<WeatherComponent\>? \_model =  
null!;  
private ComponentState \_state = ComponentState.Loading;  
private readonly PeriodicTimer \_timer =  
new\(TimeSpan.FromMinutes\(10\)\);  
\[Inject\]  
public IWeatherStringFormatterService\<WeatherComponent\>  
Formatter  
\{  
get;  
set;  
\} = null!;  
\[Inject\]  
public HttpClient Http \{ get; set; \} = null!;  
\[Inject\]  
public GeoLocationService GeoLocationService \{ get; set;  
\} = null!;  
protected override Task OnInitializedAsync\(\) =\>  
TryGetClientCoordinatesAsync\(\);  
private async Task TryGetClientCoordinatesAsync\(\) =\>  
await JavaScript.GetCoordinatesAsync\(  
this,  
nameof\(OnCoordinatesPermittedAsync\),  
nameof\(OnErrorRequestingCoordinatesAsync\)\);  
\[JSInvokable\] public async Task OnCoordinatesPermittedAsync\(  
decimal longitude, decimal latitude\)  
\{  
\_isGeoLocationPermissionGranted = true;  
\_coordinates = new\(latitude, longitude\);  
try  
\{  
var lang =  
Culture.CurrentCulture.TwoLetterISOLanguageName;  
var unit = Culture.MeasurementSystem;  
var weatherLanguages =  
await  
Http.GetFromJsonAsync\<WeatherLanguage\[\]\>\(  
"api/weather/languages",  
WeatherLanguagesJsonSerializerContext.DefaultTypeInfo\);  
var requestLanguage =  
weatherLanguages  
?.FirstOrDefault\(  
language =\> language.AzureCultureId  
== lang\)  
?.WeatherLanguageId  
?? "en";  
WeatherRequest weatherRequest = new\(\)  
\{  
Language = requestLanguage,  
Latitude = latitude,  
Longitude = longitude,  
Units = \(int\)unit  
\};  
using var response =  
await  
Http.PostAsJsonAsync\("api/weather/latest",  
weatherRequest,  
DefaultJsonSerialization.Options\);  
var weatherDetails =  
await  
response.Content.ReadFromJsonAsync\<WeatherDetails\>\(  
DefaultJsonSerialization.Options\);  
await GetGeoCodeAsync\(  
longitude, latitude, requestLanguage\); if \(weatherDetails is not null && \_geoCode is not  
null\)  
\{  
\_model = new WeatherComponentModel\(  
weatherDetails, \_geoCode, Formatter\);  
\_state = ComponentState.Loaded;  
\}  
else  
\{  
\_state = ComponentState.Error;  
\}  
\}  
catch \(Exception ex\)  
\{  
Logger.LogError\(ex, ex.Message\);  
\_state = ComponentState.Error;  
\}  
finally  
\{  
await InvokeAsync\(StateHasChanged\);  
\}  
if \(await \_timer.WaitForNextTickAsync\(\)\)  
\{  
await OnCoordinatesPermitted\(  
\_coordinates.Longitude,  
\_coordinates.Latitude\);  
\}  
\}  
private async Task GetGeoCodeAsync\(  
decimal longitude, decimal latitude, string  
requestLanguage\)  
\{  
if \(\_geoCode is null\)  
\{  
GeoCodeRequest geoCodeRequest = new\(\)  
\{  
Language = requestLanguage,  
Latitude = latitude,  
Longitude = longitude,  
\};  
\_geoCode =  
await  
GeoLocationService.GetGeoCodeAsync\(geoCodeRequest\);  
\} \}  
\[JSInvokable\]  
public async Task OnErrorRequestingCoordinatesAsync\(  
int code, string message\)  
\{  
Logger.LogWarning\(  
"The user did not grant permission to  
geolocation\: \(\{Code\}\) \{Msg\}",  
code, message\);  
// 1 is PERMISSION\_DENIED, error codes greater than 1  
are unrelated errors.  
if \(code \> 1\)  
\{  
\_isGeoLocationPermissionGranted = false;  
\}  
\_state = ComponentState.Error;  
await InvokeAsync\(StateHasChanged\);  
\}  
void IDisposable.Dispose\(\) =\> \_timer?.Dispose\(\);  
\}  
\}  
The weather component relies on the browsers’ geo-location, which is  
natively guarded and requires the user to grant permission. The  
component has several field variables used to hold this information, if  
the user permits it. The Coordinates object is a C\# positional record  
type with latitude and longitude properties. The GeoCode object  
contains the city, country, and other similar information. It is  
instantiated from an HTTP call to the Big Data Cloud API. This call is  
conditional and only occurs when the user grants access to the  
browsers’ geo-location service. In addition to these variables, there’s a  
component model and state. There is also a PeriodicTimer. The  
PeriodicTimer was introduced with .NET 6, and it provides a light-  
weight asynchronous timer. It is configured to tick every ten minutes.  
The component requests that the DI container injects a formatter, HTTP  
client, and geo-location service. When the component is initialized, a call to  
TryGetClientCoordinatesAsync is awaited. This method is expressed as a call to JavaScript.GetCoordinatesAsync  
given this and two method names. This is a JavaScript interop call  
from .NET, and the corresponding extension method is explained in the  
next section. Just know that calling  
TryGetClientCoordinatesAsync will result in one of two  
methods being called, either the  
OnCoordinatesPermittedAsync method or the  
OnErrorRequestingCoordinatesAsync method. When the user grants permission to the app \(or if they have already at  
one point in time\), the OnCoordinatesPermittedAsync method  
is called given the geo-location represented as a latitude and longitude  
pair. This method is invoked from JavaScript, as such it needs to be  
decorated with the JSInvokable attribute. When called the  
longitude and latitude values will be provided with valid  
values. These values are then used to instantiate the component’s  
\_coordinates object. At this point, the method tries to make a series  
of HTTP calls, sequentially relying on the previous request. The  
weather service API allows for a set number of languages that it  
supports. We need to use the current browser’s language, this is  
represented by their preferred International Organization for  
Standardization \(ISO\) 639-1 two-letter language code. With the  
language code we can also now infer a default unit of measure for the  
temperature, either Metric °F \(degrees Fahrenheit\) or Imperial °C  
\(degrees Celsius\). w We need to read what languages the weather API  
supports, so we call our api/weather/languages HTTP  
endpoint. This returns a collection of WeatherLanguage objects. We  
compare the lang to the collections AzureCultureId, the first  
corresponding WeatherLangId is the language we need to call the  
api/weather/latest HTTP endpoint. This endpoint returns a  
WeatherDetails object, which is then used to instantiate the  
weather component’s \_model. Around the same time this is happening  
the \_geoCode object is being fetched from the  
GeoLocationService.GetGeoCodeAsync. When there are  
errors they’re logged to the browser’s console, and the \_state is set to Error causing the markup to render that the weather service is  
unavailable. All of these changes are then communicated back to the  
component with calling StateHasChanged. The UI will re-render  
when applicable. The method finishes by going recursive. This is the  
pattern to use when you need to periodically update values. This only  
occurs once from the callback, after that each invocation is controlled  
and protected by the PeriodicTimer which coalesces multiple ticks  
into a single tick between calls to its WaitForNextTickAsync  
method. The OnErrorRequestingCoordinatesAsync method is only  
ever called when the user either disables, or later denies location  
permissions by changing the browser’s setting to blocked. When the  
user decides to make these changes the browser will prompt the user to  
refresh the web app. The native browser permissions API will change  
the apps ability to render weather. This callback method, and the  
OnCoordinatesPermittedAsync methods are mutually  
exclusive and will only fire once. The refresh will however trigger a  
reevaluation of the location permissions API.  
The weather component demonstrates how to perform conditional rendering  
of various bound UI, from showing the user a SpinnerComponent  
which indicates loading, to an error message that encourages the user to  
enable the location permissions, to customized weather for your shared  
location. All of this happening asynchronously, using dependency injection,  
and powerful C\# 10 features on a periodic timer automatically. The periodic  
timer implements it’s IDisposable.Dispose functionality through the  
weather component, so as the component is being cleaned up, so to is the  
timer’s resources.  
From the C\# code, you will have noticed the  
JavaScript.GetCoordinatesAsync method. These coordinates are  
what kick off the whole process. You will see a trend that I’m trying to  
convey here specifically, I want all JavaScript interop functions to be  
encapsulated into extension methods. This will allow for easier unit and integration testing. For more information of testing, see Chapter 9. Consider  
the JSRuntimeExtensions.cs C\# file\:  
using Microsoft.JSInterop;  
namespace Learning.Blazor.Extensions;  
internal static class JSRuntimeExtensions  
\{  
internal static ValueTask GetCoordinatesAsync\<T\>\(  
this IJSRuntime jsRuntime,  
T dotnetObj,  
string successMethodName,  
string errorMethodName\) where T \: class =\>  
jsRuntime.InvokeVoidAsync\(  
"app.getClientCoordinates",  
DotNetObjectReference.Create\(dotnetObj\),  
successMethodName,  
errorMethodName\);  
// Additional methods omitted for brevity.  
\}  
The Microsoft.JSInterop is a framework-provided namespace.  
There are many useful types that you should get used to using\:  
DotNetObjectReference\<TValue\>\: Wraps a JS interop  
argument, indicating that the value should not be serialized as JSON  
but instead should be passed as a reference. This reference is then  
used by JavaScript to call methods on the .NET object it wraps.  
IJSRuntime\: Represents an instance of a JavaScript runtime to  
which calls may be dispatched. This is common to both Blazor  
Server and Blazor WebAssembly, and it only exposes asynchronous  
APIs.  
IJSInProcessRuntime\: Represents an instance of a JavaScript  
runtime to which calls may be dispatched. This is specific to Blazor WebAssembly as the process is shared unlike Blazor Server. This  
interface inherits the IJSRuntime and adds a single synchronous  
TResult Invoke\<TResult\> method.  
IJSUnmarshalledRuntime\: Represents an instance of a  
JavaScript runtime to which calls may be dispatched without JSON  
marshalling. Currently it is only supported on WebAssembly and for  
security reasons, will never be supported for .NET code that runs on  
the server. This is an advanced mechanism that should only be used  
in performance-critical scenarios.  
The class extends the IJSRuntime type, and the  
GetCoordinatesAsync method returns ValueTask and accepts a  
single generic-type parameter T. The method requires the T instance,  
and two method names for success and error callbacks. These method  
names are used from JavaScript to know what methods to invoke. The generic type-parameter T is constrained to a class, any  
component instance will suffice. The method body is an expression-  
bodied definition, and lacks the async and await keywords. They are  
not necessary here, as this extension method simply describes the  
intended asynchronous operation. Using the given jsRuntime  
instance that this method extends, it calls InvokeVoidAsync. This is  
not to be confused with “async void”, while the name is a bit confusing,  
it’s trying to convey that this JavaScript interop method doesn’t expect a  
result to be returned. The corresponding JavaScript function that is  
invoked is app.getClientCoordinates.  
The DotNetObjectReference.Create\(dotnetObj\) wraps  
the dotnetObj, and doesn’t serialize it as JSON. Instead, its passed as  
a reference to the JavaScript call. The successMethodName and  
errorMethodName are actual method names on the dotnetObj  
instance with the JSInvokable attribute. After looking through the Razor markup, the shadowed component C\#, and  
the extension method functionality, let’s follow the call through to  
JavaScript. Consider the app.js JavaScript file\:  
const getClientCoordinates =  
\(dotnetObj, successMethodName, errorMethodName\) =\> \{  
if \(navigator && navigator.geolocation\) \{  
navigator.geolocation.getCurrentPosition\(  
\(position\) =\> \{  
const \{ longitude, latitude \} =  
position.coords;  
dotnetObj.invokeMethodAsync\(  
successMethodName, longitude, latitude\);  
\},  
\(error\) =\> \{  
const \{ code, message \} = error;  
dotnetObj.invokeMethodAsync\(  
errorMethodName, code, message\);  
\}\);  
\}  
\};  
// Omitted for brevity...  
window.app = \{  
...window.app,  
getClientCoordinates  
\};  
The JavaScript file defines a const function named  
getClientCoordinates, which declares a method signature  
expecting a dotnetObj, successMethodName, and  
errorMethodName. The function body is expressed using the  
JavaScript fat-arrow operator. The function starts by asking if the browsers navigator and  
navigator.geolocation are truthy. If they are, a call to  
getCurrentPosition is invoked. This function is protected by the  
browsers location permissions. If the user has not provided permission, they are prompted. If they deny this permission, the API will never call  
the successful callback. If the user has already permitted access to the location services, this  
method will immediately call the first callback with a valid position.  
The position object has the latitude and longitude  
coordinates. From these coordinates, and the reference to the  
dotnetObj with the given successMethodName it calls back into  
the .NET code from JavaScript. This will call the  
WeatherComponent.OnCoordinatesPermittedAsync  
method passing the coordinates. If there is an error for any reason, the second registered callback is  
invoked given the error object. The error object has an error code  
value, and a message. The possible error code values are as follows\:  
1\: PERMISSION\_DENIED when the page didn’t have permission  
to acquire geolocation information.  
2\: POSITION\_UNAVAILABLE when an internal error occurs  
trying to acquire geolcation information.  
3\: TIMEOUT when the allowed time to acquire geolocation  
information was reached before acquiring it.  
Now that the getClientCoordinates function is fully defined, it’s  
added the app object on the window scope. If there are multiple  
JavaScript files defined in your apps that use the same object name on  
window, you can use the JavaScript spread operator to append the new  
functions into the existing object without overwriting it completely.  
Assuming that you grant permissions to the app when prompted, the  
markup would render as shown in Figure 3-3. Figure 3-3. An example rendering of the WeatherComponent.  
# Summary  
In this chapter, the app took flight and you learned how to put the user first  
by using the authenticated user information to better personalize the user’s  
experience with our app. When user-centric content was rendering, the user  
is prompted to allow geolocation services \(native to the browser\) to use  
their coordinates. Using this personal information, the user’s local current  
weather and weather forecast is displayed. You learned how to render  
component variables through various control structures, such as @if and  
@switch component expressions. We saw how to use services within a  
component, such as custom service libraries and the HttpClient. You  
learned a pattern to periodically update values automatically using the  
PeriodicTimer from .NET. In addition to all of this, you also learned  
how to use the browsers native geolocation service from Blazor with  
two-way JavaScript interop. The app greets the user with a message, a bit of  
laughter \(or eye rolls if the jokes are bad enough\), and personalized weather  
forecast. In the next chapter, you’ll learn how client services are registered  
for dependency injection \(DI\). You’ll learn how to customize the various authorizing states through component customization and Blazor render  
fragmentation. I’ll take you through another JavaScript interop scenario  
where I’ll show you how to convince the browser to utter custom message  
with native Speech Synthesis. In the next chapter, you also learn how  
components communicate with events.  
1 Microsoft Docs\: .NET Random type https\://docs.microsoft.com/dotnet/api/system.random Chapter 4. Customizing the  
# User Authorization Experience  
A NOTE FOR EARLY RELEASE READERS  
With Early Release ebooks, you get books in their earliest form—the  
author’s raw and unedited content as they write—so you can take  
advantage of these technologies long before the official release of these  
titles.  
This will be the fourth chapter of the final book. Please note that the  
GitHub repo will be made active later on.  
If you have comments about how we might improve the content and/or  
examples in this book, or if you notice missing material within this  
chapter, please reach out to the editor at rfernando@oreilly.com.  
In this chapter, you’re going to solidify your understanding of how to  
authenticate a user in the context of a Blazor WebAssembly application. I’ll  
show you a familiar web client startup configuration pattern. This chapter  
also continues to explore a few other areas of the app that help to stitch the  
story together, such as the registration of client-side services. I’ll teach you  
how to customize the authorization user experience. From there, I’ll take  
your knowledge of JavaScript interoperability further with a compelling  
example, using browser native Speech Synthesis. I’ll show you some of the  
app’s header functionality, which is based on modal dialogs as a shared  
infrastructure and small base component hierarchy. From this I’ll explain  
how to write and handle custom events.  
A bit more on Blazor authentication When you use the app, your identity is used to uniquely identify you as a  
user of the app. This is true in most app scenarios, including the defaults for  
both Blazor hosting models when authentication is configured. A single  
user can log in from multiple clients to use the Learning Blazor application.  
When a user is authenticated, meaning that the user has entered their  
credentials or been redirected through an authentication workflow. These  
workflows define a series of sequential steps that must be followed  
precisely, and successfully to yield an authenticated user as a “claims bag”.  
Here are the basic steps\:  
1\. Get an authorization code\: Run the /authorize endpoint providing  
the requested scope, where the user interacts with the framework-  
provided UI.  
2\. Get an access token\: When successful, from the authorization code  
you’ll get a token from the /token endpoint.  
3\. Use the token\: Use the access token to make requests to the various  
HTTP Web APIs that require it, where each request sets the  
Authorization header.  
4\. Refresh the token\: Tokens expire. They’ll need to refresh the tokens  
automatically when required.  
I’m not going to share how to create an AAD B2C tenant, that’s beyond the  
scope of this book. Besides, there’s plenty of good resources for that sort of  
thing. For more information, see Microsoft Docs\: Create an Azure Active  
Directory B2C tenant. Just know that a tenant exists, and it contains two  
app registrations. There’s a WebAssembly Client app configured as a SPA,  
and an API app configured as a server. It’s rather feature-rich, with the  
ability to customize the clients’ HTML workflow to an extent. You can  
provide your branding and things of that nature — even specify user scopes  
and returned/requested claims.  
The user is represented as a series of key/value pairs, called “claims”. The  
keys are named and fairly well standardized. The values are stored,  
maintained, and retrieved from the trusted third-party entity — also known as “Authentication Providers”, think Google, GitHub, Facebook, Microsoft,  
and Twitter for example. The app has several providers configured.  
Client-side custom authorization message handler  
implementation  
The Learning Blazor app defines a custom implementation of the  
AuthorizationMessageHandler. In a Blazor WebAssembly app,  
you can attach tokens to outgoing requests using the framework-provided  
AuthorizationMessageHandler type. Let’s take a look at the  
ApiAccessAuthorizationMessageHandler.cs C\# file for its implementation\:  
namespace Learning.Blazor.Handlers;  
public class ApiAccessAuthorizationMessageHandler \:  
AuthorizationMessageHandler  
\{  
public ApiAccessAuthorizationMessageHandler\(  
IAccessTokenProvider provider,  
NavigationManager navigation,  
IOptions\<WebApiOptions\> options\) \: base\(provider,  
navigation\) =\>  
ConfigureHandler\(  
authorizedUrls\: new\[\]  
\{  
options.Value.WebApiServerUrl,  
options.Value.PwnedWebApiServerUrl,  
"https\://learningblazor.b2clogin.com"  
\},  
scopes\: new\[\] \{ AzureAuthenticationTenant.ScopeUrl  
\}\);  
\}  
The framework exposes an AuthorizationMessageHandler. It  
can be registered as an HttpClient instance HTTP message handler,  
ensuring that access tokens are appended to outgoing HTTP requests. The base constructor requires the IAccessTokenProvider and  
NavigationManager, so your implementation would have to be a  
bit opaque. Your implementation will need the configured  
IOptions\<WebApiOptions\> abstraction. In this way, you’re requesting the dependency injection service provider to resolve a  
strongly-typed configuration object. Subclasses should use the base classes ConfigureHandler method  
to configure themselves. The authorizedUrls array is assigned  
given the Web API and Pwned Web API servers’ URLs. This  
implementation essentially takes a few configured URLs and sets them  
as the allow-listed URLs. It also configures an app-specific scope  
URL, which is set as the handlers scopes argument to the  
ConfigureHandler function. This handler can then be added to an  
IHttpClientBuilder instance using the  
AddHttpMessageHandler\<ApiAccessAuthorizationMess  
ageHandler\> fluent API call, where you map and configure an  
HttpClient for dependency injection. All of the HTTP requests  
made from the configured HttpClient instance will append the  
appropriate Authorization header with the short-lived access  
token. With C\# 10’s constant interpolated strings, the tenant host and public  
app identifier are formatted along with the API requesting scope. This  
is a const value defined in a type named  
AzureAuthenticationTenant. This is an example of C\# 10’s  
interpolated string const feature.  
Consider the following AzureAuthenticationTenant.cs C\# file\:  
namespace Learning.Blazor;  
static class AzureAuthenticationTenant  
\{  
const string TenantHost =  
"https\://learningblazor.onmicrosoft.com";  
const string TenantPublicAppId =  
"ee8868e7-73ad-41f1-88b4-dc698429c8d4";  
/// \<summary\> \}  
/// Gets a formatted string value  
/// that represents the scope URL\:  
/// \<c\>\{tenant-host\}/\{app-id\}/User.ApiAccess\</c\>.  
/// \</summary\>  
internal const string ScopeUrl =  
\$"\{TenantHost\}/\{TenantPublicAppId\}/User.ApiAccess";  
The class is defined as static, as I do not intend to let developers  
create an instance of my object. The object exposes a single const  
string value named ScopeUrl.  
The first const string is the TenantHost.  
The second const string is the public application identifier \(App  
Id\), or TenantPublicAppId.  
The ScopeUrl value is formatted as the host and App Id, with an  
ending segment representing the scope specifier  
"User.ApiAccess".  
This is just a utilitarian static class, and it’s a welcome alternative to  
hardcoding the full URL in the source. I consider this approach more  
preferable as each segment of the fully qualified URL is specified as a name  
identifier. This helps to align the various URL segments when pulling them  
from configuration when needed. This configuration is handled in the  
section “The Web Client ConfigureServices functionality”. First  
we’ll cover the customization of the client authorization user experience  
\(UX\).  
Customizing the client’s authorization experience  
The client side configuration will handle setting up the client’s front-end  
Blazor code to depend on specific services, clients and authenticated  
endpoints. The user experiences an authentication flow, and while parts of  
that flow are configurable from Azure Active Directory \(AAD\) business-to-  
consumer \(B2C\), we’re also able to manage what the user experiences  
leading up to and returning from various states of the authentication flow.  
This is possible with the "/authentication/\{action\}" page’s  
route template, and this belongs to the Authentication.razor markup\: @page "/authentication/\{action\}"  
@inherits LocalizableComponentBase\<Authentication\>  
\<div class="is-size-3"\>  
\<RemoteAuthenticatorView  
Action=@Action  
LogOut=@LocalizedLogOutFragment  
LogOutSucceeded=@LocalizedLoggedOutFragment  
LogOutFailed=@LocalizedLogOutFailedFragment  
LogInFailed=@LocalizedLogInFailedFragment\>  
\<LoggingIn\>  
\<LoadingIndicator  
Message=@Localizer\["CheckingLoginState"\]  
HideLogo="true" /\>  
\</LoggingIn\>  
\<CompletingLogOut\>  
\<LoadingIndicator  
Message=@Localizer\["ProcessingLogoutCallback"\]  
HideLogo="true" /\>  
\</CompletingLogOut\>  
\<CompletingLoggingIn\>  
\<LoadingIndicator  
Message=@Localizer\["CompletingLogin"\]  
HideLogo="true" /\>  
\</CompletingLoggingIn\>  
\</RemoteAuthenticatorView\>  
\</div\>  
Like most of the app’s components, the Authentication page is a  
component that also @inherits LocalizableComponentBase.  
This component is considered a page since it defines an @page  
"/authentication/\{action\}" directive. This will be the  
component that is rendered when the client-side routing handles a  
navigation event in response to the browser’s URL requests  
/authentication/\{action\} route where the \{action\}  
corresponds to the state of the remote authentication flow.  
The component markup wraps the framework-provided  
RemoteAuthenticatorView component with a single div and class attribute to control the overall layout.  
The RemoteAuthenticatorView component itself is where the  
customization capability comes from. This component exposes  
templated render fragment parameters. It is with this capability that you  
can provide a custom experience for the following authentication flow  
states\:  
LogOut\: The UI to display while the log out event is being  
handled.  
LogOutSucceeded\: The UI to display while the log out  
succeeded event is being handled.  
LogOutFailed\: The UI to display while the log out failed event  
is being handled.  
LogInFailed\: The UI to display while the log in failed event is  
being handled.  
LoggingIn\: The UI to display while the logging in event is being  
handled.  
CompletingLogOut\: The UI to display while the completing  
log out event is being handled.  
CompletingLoggingIn\: The UI to display while the  
completing logging in event is being handled. Since these are all of the framework-provider RenderFragment type,  
we can customize what is rendered. We can assign to the  
RemoteAuthenticatorView component’s parameter properties  
inline, or using multiple templated-parameter syntax. The LoggingIn,  
CompletingLogOut, and CompletingLoggingIn parameters  
are assigned to using the markup syntax, where other components can  
be referenced directly.  
These three parameters are assigned given the custom  
LoadingIndicator component. The LoadingIndicator  
component conditionally renders the Blazor logo along with the loading  
indicator message and animated/styled spinning icon. All states of the  
authentication flow hide the Blazor logo but they could choose to render it  
by setting the LoadingIndicator.HideLogo parameter to false.  
Each pass a localized text message to the loading indicator message. These  
three states are transitional in nature, so when I was designing this approach  
I determined it best to using messaging that aligns with that expectation.  
That’s not to say that you couldn’t just as easily, use humorous nonsense  
instead. The authentication flow state is really only interesting when you’re  
learning about it the first few times, beyond that we’re all nerds here now  
— so let’s get creative! We could replace these states with random facts —  
who doesn’t love hearing something interesting? I’ll leave that to you, send  
me a pull request and I might just create a community-supported messaging  
list. The point is that it is entirely customizable. The following list is my  
initial states that I’ve configured for the app\:  
LoggingIn relies on the "CheckingLoginState" localized  
message with the following value\: "Reading about the  
amazing Ada Lovelace \(world's first computer  
programmer\)."  
CompletingLogOut relies on the  
"ProcessingLogoutCallback" localized message\: "Things  
aren't always as they seem." CompletingLogin relies on the "CompletingLogin" localized  
message\: "Plugging in the random wires lying  
around."  
As for the Authentication page component’s shadow using a slightly  
different technique to satisfy the RenderFragment. Recall that a  
framework-provided RenderFragment is a void returning delegate  
type that defines a RenderTreeBuilder parameter. With that in mind,  
consider the Authentication.razor.cs C\# file\:  
using Microsoft.AspNetCore.Components.Rendering;  
namespace Learning.Blazor.Pages  
\{  
public partial class Authentication  
\{  
\[Parameter\] public string? Action \{ get; set; \} = null!;  
private void LocalizedLogOutFragment\(  
RenderTreeBuilder builder\) =\>  
ParagraphElementWithLocalizedContent\(  
builder, Localizer, "ProcessingLogout"\);  
private void LocalizedLoggedOutFragment\(  
RenderTreeBuilder builder\) =\>  
ParagraphElementWithLocalizedContent\(  
builder, Localizer, "YouAreLoggedOut"\);  
private RenderFragment LocalizedLogInFailedFragment\(  
string errorMessage\) =\>  
ParagraphElementWithLocalizedErrorContent\(  
errorMessage, Localizer, "ErrorLoggingInFormat"\);  
private RenderFragment LocalizedLogOutFailedFragment\(  
string errorMessage\) =\>  
ParagraphElementWithLocalizedErrorContent\(  
errorMessage, Localizer,  
"ErrorLoggingOutFormat"\);  
private static void ParagraphElementWithLocalizedContent\( \{  
RenderTreeBuilder builder,  
CoalescingStringLocalizer\<Authentication\> localizer,  
string resourceKey\)  
builder.OpenElement\(0, "p"\);  
builder.AddContent\(1, localizer\[resourceKey\]\);  
builder.CloseElement\(\);  
\}  
private static RenderFragment  
ParagraphElementWithLocalizedErrorContent\(  
string errorMessage,  
CoalescingStringLocalizer\<Authentication\> localizer,  
string resourceKey\) =\>  
builder =\>  
\{  
builder.OpenElement\(0, "p"\);  
builder.AddContent\(1, localizer\[resourceKey,  
builder.CloseElement\(\);  
errorMessage\]\);  
\};  
\}  
The RenderFragment, RenderFragment\<T\>, and  
RenderTreeBuilder types are part of  
Microsoft.AspNetCore.Components.Rendering, while the  
Authentication page component is in  
Learning.Blazor.Pages.  
The Authentication page component is opaque in that it defines a  
string property named Action, and binds it to the the framework-  
provided RemoteAuthenticatorView.Action property of the  
same name. This component is also a partial class, serving as the  
markup’s shadow with code-behind.  
The LocalizedLogOutFragment method is private, however;  
the partial class markup component has access to it. This method  
is assigned to the rendering responsibility when the client browser has  
finished handling the log out authentication flow. Its parameter is the  
RenderTreeBuilder builder instance. The builder is  
immediately passed to the  
ParagraphElementWithLocalizedContent method, along  
with the Localizer, and a const string value of "ProcessingLogout". This pattern is repeated for the  
LocalizedLoggedOutFragment method delegating to the same  
helper function, changing only the third parameter to  
"YouAreLoggedOut". These two methods are void returning and  
RenderTreeBuilder parameter-accepting. This means that they  
satisfy the RenderFragment delegate expected signature. For the purpose of education, I’ll show a few more ways to customize  
using a slightly different approach. Notice that the  
LocalizedLogInFailedFragment is not void returning, nor  
are they RenderTreeBuilder parameter-accepting. Instead, this  
method returns a RenderFragment and accept a string. This is  
possible as there are actually two RenderFragment delegates\:  
delegate void  
RenderFragment\(RenderTreeBuilder builder\);  
delegate RenderFragment  
RenderFragment\<TValue\>\(TValue value\);  
The ParagraphElementWithLocalizedContent method uses  
the RenderTreeBuilder builder,  
CoalescingStringLocalizer\<Authentication\>  
localizer, and string resourceKey parameters. Using the  
builder an opening \<p\> HTML element is built. Content is added to  
given the value of the localizer\[resourceKey\] evaluation.  
Finally, the closing \</p\> HTML element is built. This method is being  
used by the log out and logged out authentication flow events\:  
"ProcessingLogout" renders the “If you’re not changing the  
world, you’re standing still.” message.  
"YouAreLoggedOut" renders the “Bye for now!” message. The ParagraphElementWithLocalizedErrorContent  
method is very similar to the  
ParagraphElementWithLocalizedContent method in that it  
defines identical parameters, but return different things. In this case the  
generic RenderFragment\<string\> delegate type is inferred, even  
though the RenderFragment delegate type is explicitly returned.  
This method is being used by the log in failed and log out failed  
authentication flow events\:  
When log in fails display a formatted message of\: "There an error trying to log you in\: '\{0\}'".  
was  
When log out fails display a formatted message of\: "There an error trying to log you out\: '\{0\}'".  
was  
The \{0\} values within the message formats are used as placeholders for the  
raw and untranslated error message.  
The Web Client ConfigureServices functionality  
You should recall the common nomenclature of the top-level WebAssembly  
app entry point, specifically the ConfigureServices extension  
method, shown initially in Example 2-1. We didn’t discuss the specifics of  
the client-side service registration. A majority of that work happens in the  
WebAssemblyHostBuilderExtensions.cs C\# file\:  
namespace Learning.Blazor.Extensions;  
internal static class WebAssemblyHostBuilderExtensions  
\{  
internal static WebAssemblyHostBuilder ConfigureServices\(  
this WebAssemblyHostBuilder builder\)  
\{ \(\);  
var \(services, configuration\) =  
\(builder.Services, builder.Configuration\);  
services.AddScoped\<ApiAccessAuthorizationMessageHandler\>  
services.Configure\<WebApiOptions\>\(  
configuration.GetSection\(nameof\(WebApiOptions\)\)\);  
static WebApiOptions? GetWebApiOptions\(  
IServiceProvider serviceProvider\) =\>  
serviceProvider.GetService\<IOptions\<WebApiOptions\>\>\(\)  
?.Value;  
var addHttpClient =  
IHttpClientBuilder \(  
string httpClientName,  
Func\<WebApiOptions?, string?\>  
webApiOptionsUrlFactory\) =\>  
services.AddHttpClient\(  
httpClientName, \(serviceProvider, client\) =\>  
\{  
var options = GetWebApiOptions\(serviceProvider\);  
var apiUrl = webApiOptionsUrlFactory\(options\);  
if \(apiUrl is \{ Length\: \> 0 \}\)  
client.BaseAddress = new Uri\(apiUrl\);  
var cultureService =  
serviceProvider.GetRequiredService\<CultureService\>\(\);  
client.DefaultRequestHeaders.AcceptLanguage.ParseAdd\(  
cultureService.CurrentCulture.TwoLetterISOLanguageName\);  
\}\)  
.AddHttpMessageHandler\<ApiAccessAuthorizationMessageHandler\>\(\);  
\_  
\_  
= addHttpClient\(  
HttpClientNames.ServerApi,  
options =\> options?.WebApiServerUrl\);  
= addHttpClient\(  
HttpClientNames.PwnedServerApi,  
options =\> options?.PwnedWebApiServerUrl\);  
services.AddScoped\( sp =\> sp.GetRequiredService\<IHttpClientFactory\>\(\)  
.CreateClient\(HttpClientNames.ServerApi\)\);  
services.AddLocalization\(\);  
services.AddMsalAuthentication\(  
options =\>  
\{  
configuration.Bind\(  
"AzureAdB2C",  
options.ProviderOptions.Authentication\);  
options.ProviderOptions.LoginMode = "redirect";  
var add =  
options.ProviderOptions.DefaultAccessTokenScopes.Add;  
add\("openid"\);  
add\("offline\_access"\);  
add\(AzureAuthenticationTenant.ScopeUrl\);  
\}\);  
services.AddOptions\(\);  
services.AddAuthorizationCore\(\);  
services.AddScoped\<SharedHubConnection\>\(\);  
services.AddSingleton\<AppInMemoryState\>\(\);  
services.AddSingleton\<CultureService\>\(\);  
services.AddSingleton\(typeof\(CoalescingStringLocalizer\<\>\)\);  
services.AddScoped  
\<IWeatherStringFormatterService,  
WeatherStringFormatterService\>\(\);  
services.AddScoped\<GeoLocationService\>\(\);  
services.AddHttpClient\<GeoLocationService\>\(client =\>  
\{  
var apiHost = "https\://api.bigdatacloud.net";  
var reverseGeocodeClientRoute = "data/reverse-  
geocode-client";  
client.BaseAddress =  
new Uri\(\$"  
\{apiHost\}/\{reverseGeocodeClientRoute\}"\);  
client.DefaultRequestHeaders.AcceptEncoding.ParseAdd\("gzip"\);  
\}\);  
services.AddJokeServices\(\);  
services.AddLocalStorage\(\);  
services.AddSingleton\<IJSInProcessRuntime\>\(  
provider =\>  
\(IJSInProcessRuntime\)provider.GetRequiredService\<IJSRuntime\>\(\)\);  
return builder; \}  
\}  
The file-scoped namespace is Learning.Blazor.Extensions  
which shares all extensions functionality for the client code. The  
extensions class is internal and like all extensions classes it is  
required to be static. The ConfigureServices method is named  
this way as it might seem familiar to ASP.NET Core developers whom  
were accustomed to startup conventions, but it doesn’t have to be named  
this way. To allow for method chaining, this extension method returns  
the WebAssemblyHostBuilder object that it extends.  
Declare and assign the services and configuration objects  
from the builder. Then it’s off to the races, we add the scoped  
aforementioned ApiAccessAuthorizationMessageHandler  
as a service. The WebApiOptions instance is configured, essentially  
binding them from the resolved configuration instance’s  
WebApiOptions object. There is a static local function named  
GetWebApiOptions that returns a questionable WebApiOptions  
object given an IServiceProvider instance. C\# 10 made a lot of improvements to lambda expressions, specifically  
how they’re types are inferred. These improvements allow for using  
these lambdas as delegates to mapped functionality. When you read the  
addHttpClient variable assignment, it’s first saying that it returns  
an IHttpClientBuilder instance given an httpClientName  
and a function that acts as a factory. The function is name  
webApiOptionsUrlFactory and it returns a nullable string given  
the configured options object. The lambda expression delegates to the  
AddHttpClient extension method on the IServiceCollection  
type. This configures the HTTP client base address, from the  
configured URL. It also sets the "Accept-Language" default  
request header to the currently configured CultureService  
instance’s ISO 639-1 two-letter code. There are two calls to this  
addHttpClient expression, setting up the Web API server endpoint  
and the “Have I Been Pwned” server endpoint. The app configures the IHttpClientFactory as a scoped service  
with a default Web API server endpoint. Localization is added. The Microsoft Authentication Library \(MSAL\) services are configured and  
bound to the "AzureAdB2C" section of the configuration  
instance. The LoginMode is assigned to "redirect", which causes  
the app to redirect the user to AAD B2C to complete sign-in. Another  
example of the improvements to lambda expressions is how we declare  
and assign a variable named add, which delegates to the default access  
token scopes Add to collection method. It expects a string and is void  
returning. The add variable is then invoked three times, adding the  
"openid", "offline\_access" and ScopeUrl scopes. Many of  
the remaining services are then registered. An HttpClient is added and configured, which will be used when  
DI resolves the GeoLocationService. The big data cloud, API  
host and route are used as the base address for the client. The  
additional dependencies are then registered, which include the Joke  
Services and Local Storage packages. An IJSInProcessRuntime  
is registered as a single instance, resolved by a cast from the  
IJSRuntime. This is only possible with Blazor WebAssembly. This is  
discussed in much more detail in Chapter 8. Finally, the builder is  
returned completing the fluent ConfigureServices API.  
This single extension method is the code that is responsible for configuring  
the dependency injection of the client-side app. You will have noticed that  
the HTTP message handler was configured for the HttpClient instances  
that will forward the bearer tokens on behalf of the client from the  
ApiAccessAuthorizationMessageHandler. This is important, as  
not all API endpoints require an authenticated user but those that do will  
only be accessible when correctly configured this way.  
# Native Speech Synthesis  
I have shown you how to register all the client-side services for dependency  
injection, and you’ve seen how to consume registered services in  
components. In the previous chapter, I explained how the home page renders its tiled content. If you recall, each tiles markup included the  
AdditiveSpeechComponent. While I showed you have to consume  
this component, I didn’t yet expand upon how it actually works. Let’s  
explore this a bit. The component exposes a single Message parameter.  
The consumers referenced this component and assigned a message.  
Consider the AdditiveSpeechComponent.razor markup file\:  
@inherits LocalizableComponentBase\<AdditiveSpeechComponent\>  
\<div class="is-top-right-overlay"\>  
\<button class="button is-rounded is-theme-aware-button p-4  
@\_dynamicCSS"  
disabled=@\_isSpeaking @onclick=OnSpeakButtonClickAsync\>  
\<span class="icon is-small"\>  
\<i class="fas fa-volume-up"\>\</i\>  
\</span\>  
\</button\>  
\</div\>  
The AdditiveSpeechComponent inherits the  
LocalizableComponentBase to use three common services  
which are injected into the base class. The AppInMemoryState,  
CultureService, and IJSRuntime services are common enough  
to warrant this inheritance. The markup is a div element with a descriptive class attribute,  
which overlays the element in the top-right hand corner of the  
consuming component. The div element is a parent to a rounded and  
theme-aware button with a bit of dynamic CSS. The button itself is  
disabled when the \_isSpeaking bit evaluates as true. This is  
the first component markup we’re covering that shows Blazor event  
handling. When the user clicks on the button, the  
OnSpeakButtonClickAsync event handler is called.  
You can specify event handlers for all valid Document Object Model  
\(DOM\) events. The syntax follows a very specific pattern  
@on\{EventName\}=\{EventHandler\}. This syntax is applied as an  
element attribute, where\: The \{EventName\} is the DOM event name.  
The \{EventHandler\} is the name of the method that will handle  
the event.  
For example, @onclick=OnSpeakButtonClickAsync assigns the  
OnSpeakButtonClickAsync event handler to the click event of the  
element, in other words when click is fired, it calls  
OnSpeakButtonClickAsync.  
The OnSpeakButtonClickAsync method is defined in the component  
shadow, and it’s Task returning. This means that in addition to  
synchronous event handlers, asynchronous event handlers are fully  
supported. With Blazor event handlers, changes to the UI are automatically  
triggered, thus you will not have to manually call StateHasChanged to  
signal re-rendering. The AdditiveSpeechComponent.razor.cs C\# file looks  
like this\:  
namespace Learning.Blazor.Components  
\{  
public partial class AdditiveSpeechComponent  
\{  
private bool \_isSpeaking = false;  
private string \_dynamicCSS  
\{  
get  
\{  
return string.Join\(" ", GetStyles\(\)\).Trim\(\);  
IEnumerable\<string\> GetStyles\(\)  
\{  
if \(string.IsNullOrWhiteSpace\(Message\)\)  
yield return "is-hidden";  
if \(\_isSpeaking\)  
yield return "is-flashing";  
\};  
\}  
\}  
\[Parameter\] public string? Message \{ get; set; \} = null!;  
async Task OnSpeakButtonClickAsync\(\)  
\{  
if \(Message is null or \{ Length\: 0 \}\)  
\{  
return;  
\}  
var \(voice, voiceSpeed\) =  
AppState.ClientVoicePreference;  
var bcp47Tag = Culture.CurrentCulture.Name;  
\_isSpeaking = true;  
await JavaScript.SpeakMessageAsync\(  
this,  
nameof\(OnSpokenAsync\),  
Message,  
voice,  
voiceSpeed,  
bcp47Tag\);  
\}  
\[JSInvokable\]  
public Task OnSpokenAsync\(double  
elapsedTimeInMilliseconds\) =\>  
InvokeAsync\(\(\) =\>  
\{  
milliseconds",  
\_isSpeaking = false;  
Logger.LogInformation\(  
"Spoke utterance in \{ElapsedTime\}  
elapsedTimeInMilliseconds\);  
StateHasChanged\(\);  
\}\);  
\}  
\}  
The class has an \_isSpeaking field, that defaults to false. The  
\_dynamicCSS property only has a get accessor, which makes it read  
only. It evaluates two variables to determine what string values it should  
return. First the Message property helps to determine whether or not the button is hidden, and when the component is speaking it will apply a  
flashing style. The Message property is a Parameter, which is what  
allows it to be assigned from consuming components. The event handler that was assigned to handle the button’s click event  
is the OnSpeakButtonClickAsync method. This method short  
circuits if the Message is null or when it has a Length of 0. When  
there is meaningful value from the Message, this handler gets the  
voice and voiceSpeed from the in-memory app state service, as  
well as the Best Current Practices \(BCP 47\) language tag value from the  
current culture. The \_isSpeaking bit is set to true, and a call to  
JavaScript.SpeakMessageAsync is awaited given this  
component, the name of the OnSpokenAsync callback, the  
Message, voice, voiceSpeed, and bcp47Tag. This pattern  
might start looking a bit familiar, as much or as little as your app needs  
to rely on native functionality from the browser it can using JavaScript  
interop. The OnSpokenAsync method is declared as JSInvokable. Since  
this callback happens asynchronously the and at an undetermined time,  
the component couldn’t know when to re-render, so you must tell it to  
with StateHasChanged. The handler is expressed as  
InvokeAsync, which executes the given work item on the renders  
synchronization context. It sets \_isSpeaking to false, logs the  
total amount of time the message was spoken, and notifies the  
component that its state has changed.  
The markup is minimal and the code-behind is clean, but very powerful.  
Let’s lean in to the JSRuntimeExtensions.cs C\# file to see what the  
SpeakMessageAsync looks like\:  
namespace Learning.Blazor.Extensions;  
internal static partial class JSRuntimeExtensions  
\{  
internal static ValueTask SpeakMessageAsync\<T\>\(  
this IJSRuntime jsRuntime,  
T dotnetObj,  
string callbackMethodName, string message,  
string defaultVoice,  
double voiceSpeed,  
string lang\) where T \: class =\>  
jsRuntime.InvokeVoidAsync\(  
"app.speak",  
DotNetObjectReference.Create\(dotnetObj\),  
callbackMethodName, message, defaultVoice,  
voiceSpeed, lang\);  
\}  
Extending the IJSRuntime functionality with meaningful names really  
makes me happy. I find joy in these small victories, but it really does make  
for a more enjoyable experience when reading the code. Being able to read  
it as JavaScript.SpeakMessageAsync is very self-descriptive in  
nature. This extension method delegates to the  
IJSRuntime.InvokeVoidAsync method, calling "app.speak"  
given the DotNetObjectReference, the callback method name, a  
message, voice, voice speed, and language. I could have called  
InvokeVoidAsync directly from the component, but I instead prefer the  
descriptive method name of the extension method. This is the pattern that I  
recommend, as it helps to encapsulate the logic and it’s easier to consume  
from multiple call points. The JavaScript code that this extension method  
relies on is part of the wwwroot/js/app.js file\:  
const cancelPendingSpeech = \(\) =\> \{  
if \(window.speechSynthesis  
&& window.speechSynthesis.pending === true\) \{  
window.speechSynthesis.cancel\(\);  
\}  
\};  
const speak = \(dotnetObj, callbackMethodName, message,  
defaultVoice, voiceSpeed, lang\) =\> \{  
const utterance = new SpeechSynthesisUtterance\(message\);  
utterance.onend = e =\> \{  
if \(dotnetObj\) \{  
dotnetObj.invokeMethodAsync\(callbackMethodName,  
e.elapsedTime\)  
\} \};  
const voices = window.speechSynthesis.getVoices\(\);  
try \{  
utterance.voice =  
!!defaultVoice && defaultVoice !== 'Auto'  
? voices.find\(v =\> v.name === defaultVoice\)  
\: voices.find\(v =\> !!lang &&  
v.lang.startsWith\(lang\)\) || voices\[0\];  
\} catch \{ \}  
utterance.volume = 1;  
utterance.rate = voiceSpeed || 1;  
window.speechSynthesis.speak\(utterance\);  
\};  
window.app = \{  
...window.app, speak  
\};  
// Prevent client from speaking when user closes tab or window.  
window.addEventListener\('beforeunload',  
=\> \{  
\_  
cancelPendingSpeech\(\);  
\}\);  
A function named cancelPendingSpeech is declared and assigned  
as a fat-arrow expression. It checks if the  
window.speechSynthesis object is truthy \(in this case meaning  
it’s not null or undefined\). It then checks if there are any pending  
utterances in the queue that have yet to be spoken. When this evaluates  
as true, a call to window.speechSynthesis.cancel\(\) is  
made — removing all utterances from the queue. The "app.speak" method is defined as the function named speak.  
It has six parameters, which is rather lengthy. You could choose to  
parameterize this with a single top-level object if you’d like, but that  
would require a new model and additional serialization. I’d probably  
limit a parameter list to no more than six, but as with everything in  
programming, there are tradeoffs. The fat-arrow expressed method body  
starts by instantiating a SpeechSynthesisUtterance given the  
message. This object exposes an end/onend event that is fired when the utterance has finished being spoken. An inline event handler is  
assigned, which relies on the given dotnetObj instance and the  
callbackMethodName. When the utterance is done being spoken,  
the event fires and calls back onto the calling components given  
method. An attempt to assign the desired voice to speak the utterance is made.  
This can be problematic, and error prone — as such it’s attempt is  
fragile and protected with a try / catch. If it works, great, if not,  
it’s not a big deal as the browser will select the default voice. The  
volume is to 1 and the speed at which the utterance is spoken is set as  
well. With an utterance instance prepared, a call to  
window.speechSynthesis.speak\(utterance\) is made. This  
will enqueue the utterance into the native speech synthesis queue. When  
the utterance reaches the end of the queue, it is spoken. The  
"app.speak" name comes from how the speak function const is  
added to either a new instance of app, or the existing one. If a long utterance is being spoken, and the user closes the app’s  
browser tab or window, but leaves the browser open — the utterance  
will continue to be spoken. To avoid this behavior, we’ll call  
cancelPendingSpeech when the window is unloaded.  
The AdditiveSpeechComponent could be bundled into a separate  
Razor component project, and distributed to consuming apps. That  
approach is very beneficial as it exposes functionality and shares it with  
consumers. This app demonstrates how to create Razor projects and  
consume them from the Blazor web client, for more information see  
Chapter 6.  
Sharing and consuming custom components  
To consume a component, you reference it from a consuming component’s  
markup. Blazor provides many components out-of-the-box, from layouts to  
navigation, from standard form controls to error boundaries, from page titles to head outlets, and so on. See, ASP.NET Core built-in Razor  
components for a listing of the available components.  
When the built-in components are not enough, you can turn to custom  
components. There are many vendor-provided component libraries that may  
suit your needs, consider the following list of vendor resources\:  
Telerik\: UI for Blazor  
DevExpress\: Blazor UI Components  
Syncfusion\: Blazor components library  
Radzen\: Blazor Components  
Infragistics\: Blazor UI Components  
GrapeCity\: Blazor UI Controls for Web Apps  
jQWidgets\: Smart.Blazor UI Component Library  
There are many other vendor-provided components, these are just a few.  
Additionally, there is a massive open-source community who builds  
component libraries as well. There is a community curated list on GitHub  
known as Awesome Blazor which is another great resource. Sometimes,  
you may require functionality that isn’t available from the framework, from  
vendors, or even from the community at large. When this happens, you can  
write your own component libraries.  
Since Blazor is built atop Razor, all of the components are Razor  
components and are they’re identifiable by their .razor file extension.  
# Chrome\: The overloaded term  
With graphical user interface \(GUI\) app’s, there is an old term that’s been  
overloaded through the years. The term “chrome” refers to an element of  
the user interface that displays the various commands or capabilities  
available to the user. For example, the chrome of the Learning Blazor  
sample app is the top-level navigation, theme display icon, buttons for the various modals, notification toggle, and log in/out button. This was shown  
in Figure 2-2. When I refer to chrome, I’m not talking about the web  
browser here. We’ve already discussed navigation and routing a bit, so let’s  
focus on modal modularity.  
Modal modularity and Blazor component hierarchies  
Most apps have a need for interacting with the user, and prompting them for  
input. The apps navigation is a user experience and one said example of  
user input — the use clicks a link to a route they want to visit, then the app  
takes an action. Sometimes we’ll need to prompt the user to use the  
keyboard, instead of the mouse. The questions we ask users vary primarily  
by domain, for example; “What’s your email address?” or “What’s your  
message to send?” Answers vary by control-type, meaning free-form text  
line or text area, or a checkbox, or select list, or a button. All of this is fully  
supported with Blazor, you can wire to native HTML element events and  
handle them in Razor C\# component logic. There are native forms  
integration and modal/input binding validation, templating and component  
hierarchies.  
One such control, is a custom control, named ModalComponent. This  
component is going to be used throughout the app for various use cases. It’s  
will have an inherited component to exemplify component subclass  
patterns, which are common in C\#, but were really under-utilized as a  
programming pattern for JavaScript SPAs. Consider the  
ModalComponent.razor markup file\:  
\<div class="modal has-text-left @\_isActiveClass"\>  
\<div class="modal-background" @onclick=@CancelAsync\>\</div\>  
\<div class="modal-card"\>  
\<header class="modal-card-head"\>  
\<p class="modal-card-title"\>  
@TitleContent  
\</p\>  
\<button class="delete" aria-label="close"  
@onclick=@CancelAsync\>\</button\>  
\</header\> \<section class="modal-card-body"\>  
@BodyContent  
\</section\>  
\<footer class="modal-card-foot is-justify-content-flex-  
end"\>  
\<div\>  
@ButtonContent  
\</div\>  
\</footer\>  
\</div\>  
\</div\>  
The HTML is a modal styled div with an \_isActiveClass value  
bound to the modal’s class attribute. Meaning that the state of the  
modal, whether it is active \(shown\) or not is dependant on a component  
variable. It has a background style that applies an overlay, making this  
element pop-out as a modal dialog displayed to the user. The  
background div element itself handles user clicks by calling  
CancelAsync. The HTML is semantically accurate; representing an industry  
standardized three-part header/body/footer layout. The first template  
placeholder is the @TitleContent. This is a required  
RenderFragment which allows for the consuming component to  
provide custom title markup. The header also contains a button  
which will call CancelAsync when clicked.  
The BodyContent is styled appropriately as a modal’s body, which is  
a section HTML element and semantically positioned beneath the  
header and above the footer.  
The modal footer contains the required ButtonContent markup.  
Collectively, this modal represents a common dialog component where  
consumers can plug in their customized markup and corresponding  
prompts.  
The component shadow defines the component’s parameter properties,  
events, component state, and functionality. Consider the  
ModalComponent.razor.cs C\# file\:  
namespace Learning.Blazor.Components; public partial class ModalComponent  
\{  
private string \_isActiveClass =\> IsActive ? "is-active" \: "";  
\[Parameter\]  
public EventCallback\<DismissalReason\> Dismissed \{ get; set; \}  
\[Parameter\]  
public bool IsActive \{ get; set; \}  
\[Parameter, EditorRequired\]  
public RenderFragment TitleContent \{ get; set; \} = null!;  
\[Parameter, EditorRequired\]  
public RenderFragment BodyContent \{ get; set; \} = null!;  
\[Parameter, EditorRequired\]  
public RenderFragment ButtonContent \{ get; set; \} = null!;  
/// \<summary\>  
/// Gets the reason that the \<see cref="ModalComponent"/\> was  
dismissed.  
/// \</summary\>  
public DismissalReason Reason \{ get; private set; \}  
/// \<summary\>  
/// Sets the \<see cref="ModalComponent"/\> instance's  
/// \<see cref="IsActive"/\> value to \<c\>true\</c\> and  
/// \<see cref="Reason"/\> value as \<c\>default\</c\>.  
/// It then signals for a change of state, this rerender will  
/// show the modal.  
/// \</summary\>  
public Task ShowAsync\(\) =\>  
InvokeAsync\(\(\) =\> \(IsActive, Reason\) = \(true, default\)\);  
/// \<summary\>  
/// Sets the \<see cref="ModalComponent"/\> instance's  
/// \<see cref="IsActive"/\> value to \<c\>false\</c\> and  
/// \<see cref="Reason"/\> value as given \<paramref  
name="reason"/\>  
/// value. It then signals for a change of state,  
/// this rerender will cause the modal to be dismissed.  
/// \</summary\>  
public Task DismissAsync\(DismissalReason reason\) =\>  
InvokeAsync\(async \(\) =\>  
\{ \(IsActive, Reason\) = \(false, reason\);  
if \(Dismissed.HasDelegate\)  
\{  
await Dismissed.InvokeAsync\(Reason\);  
\}  
\}\);  
/// \<summary\>  
/// Dismisses the shown modal, the \<see cref="Reason"/\>  
/// will be set to \<see cref="DismissalReason.Confirmed"/\>.  
/// \</summary\>  
public Task ConfirmAsync\(\) =\>  
DismissAsync\(DismissalReason.Confirmed\);  
/// \<summary\>  
/// Dismisses the shown modal, the \<see cref="Reason"/\>  
/// will be set to \<see cref="DismissalReason.Cancelled"/\>.  
/// \</summary\>  
public Task CancelAsync\(\) =\>  
DismissAsync\(DismissalReason.Cancelled\);  
/// \<summary\>  
/// Dismisses the shown modal, the \<see cref="Reason"/\>  
/// will be set to \<see cref="DismissalReason.Verified"/\>.  
/// \</summary\>  
public Task VerifyAsync\(\) =\>  
DismissAsync\(DismissalReason.Verified\);  
\}  
public enum DismissalReason  
\{  
Unknown, Confirmed, Cancelled, Verified  
\};  
The ModalComponent\` class is part of the  
Learning.Blazor.Components namespace.  
Many properties together, represent examples of required component  
parameters, events, templates, and component state. This class defines  
several properties\:  
\_isActiveClass\: A private string which serves as a  
computed property, which evaluates the IsActive property and  
returns "is-active" when true. This was bound to the modal’s markup, where the div’s class attribute had some static classes  
and a dynamically bound value.  
Dismissed\: A component parameter, which is of type  
EventCallback\<DismissalReason\>. An event callback  
accepts delegate assignment from consumers, where events flow  
from this component to interested recipients.  
IsActive\: A bool value, which represents the current state of  
whether the modal is actively being displayed to the user. This  
parameter is not required, and typically set implicitly from calls to  
DismissAsync.  
Three RenderFragment template placeholder objects, for the  
header title, body content, and footer controls which are buttons;  
TitleContent, BodyContent, and ButtonContent.  
Reason\: The reason for the dismissal of the modal, either  
“unknown”, “confirmed”, “cancelled”, or “verified”.  
As for the functionality and modularity, the modal component can be  
shown, and just as easily dismissed. This is core modularity as the  
functionality is templated, and consumers have hooks into the  
component. Consumers can call any of these public Task returning  
asynchronous operational methods\:  
ShowAsync\: Immediately shows the modal to the user. This  
method is expressed as a call to InvokeAsync given a lambda  
expression which sets the values of IsActive to true, and  
assigns default to the Reason \(or DismissalReason.Unknown\). Calling StateHasChanged  
is unnecessary at this point. Asynchronous operational support will  
automatically re-render the UI components implicitly as needed.  
DismissAsync\: Given a dismissal reason, immediately dismisses  
the modal. The IsActive state is set to false which will  
effectively hide the component from the user.  
ConfirmAsync\: Sets the dismissal reason as Confirmed,  
delegates to DismissAsync.  
CancelAsync\: Sets the dismissal reason as Cancelled,  
delegates to DismissAsync.  
VerifyAsync\: Sets the dismissal reason as Verified, delegates  
to DismissAsync.  
Another type is defined within this file-scoped namespace. In addition  
to the, ModalComponent class is the public enum  
DismissalReason. There are four defined states, Unknown \(which  
is the default\), Confirmed, Cancelled \(can occur implicitly from  
user clicking outside the modal\), and Verified. While I will usually  
place every type definition in its own file, I choose to keep the enum  
DismissalReason within the same file. To me, these are logically  
cohesive and belong together.  
Blazor event binding exemplified  
The ModalComponent is then consumed by the  
VerificationModalComponent, let’s take a look at how this is achieved in the VerificationModalComponent.razor markup file\:  
@inherits LocalizableComponentBase\<VerificationModalComponent\>  
\<ModalComponent @ref="\_modal" Dismissed=@OnDismissed\>  
\<TitleContent\>  
\<span class="icon pr-2"\>  
\<i class="fas fa-robot"\>\</i\>  
\</span\>  
\<span\>@Localizer\["AreYouHuman"\]\</span\>  
\</TitleContent\>  
\<BodyContent\>  
\<form\>  
\<div class="field"\>  
\<label class="label"\>@\_math.GetQuestion\(\)\</label\>  
\<div class="field-body"\>  
\<div class="field"\>  
\<p class="control is-expanded has-icons-  
left"\>  
@\{  
var inputValidityClass =  
\_answeredCorrectly is false  
? " invalid"  
\: "";  
var inputClasses =  
\$"input\{inputValidityClass\}";  
\}  
\<input @bind="\_attemptedAnswer"  
class=@inputClasses  
type="text"  
placeholder="@Localizer\["AnswerFormat"  
,  
\_math.GetQuestion\(\)\]" /\>  
\<span class="icon is-small is-left"\>  
\<i class="fas fa-info-circle"\>  
\</i\>  
\</span\>  
\</p\>  
\</div\>  
\</div\>  
\</div\>  
\</form\> \</BodyContent\>  
\<ButtonContent\>  
\<button class="button is-info is-large is-pulled-left"  
@onclick=Refresh\>  
\<span class="icon"\>  
\<i class="fas fa-redo"\>\</i\>  
\</span\>  
\<span\>@Localizer\["Refresh"\]\</span\>  
\</button\>  
\<button class="button is-success is-large"  
@onclick=AttemptToVerify\>  
\<span class="icon"\>  
\<i class="fas fa-check"\>\</i\>  
\</span\>  
\<span\>@Localizer\["Verify"\]\</span\>  
\</button\>  
\</ButtonContent\>  
\</ModalComponent\>  
The VerificationModalComponent markup relies on the  
ModalComponent, and it captures a reference to the modal using the  
@ref="\_modal" syntax. Blazor will automatically assign the  
\_modal field from the instance value of the referenced component  
markup. Internal to the VerificationModalComponent the  
dependent ModalComponent.Dismissed event is handled by the  
OnDismissed handler. In other words, the  
ModalComponent.Dismissed is a required parameter and it’s an  
event that the component will fire. The  
VerificationModalComponent.OnDismissed event handler  
is assigned to handle it. This is custom event binding, where the  
consuming component handles the dependent component’s exposed  
parameterized event. The verification modal’s title content \(TitleContent\) prompts the  
user with an “Are you human?” message. The BodyContent markup contains a native HTML form element.  
Within this markup is a simple label and corresponding text input  
element. The label splats a question into the markup from the evaluated  
\_math.GetQuestion\(\) invocation \(more on the \_math object in a  
bit\). The attempted answer input element has dynamic CSS classes  
bound to it, based on whether the question was correctly answered. The input element has its value bound to the  
\_attemptedAnswer variable. It also has a placeholder bound  
from a localized answer format given the math’s question, which will  
serve as a clue to the user what’s expected.  
The ButtonContent markup has two buttons, one for refreshing the  
question \(via the Refresh method\), and the other for attempting to  
verify the answer \(via the AttemptToVerify method\). This is an  
example of native event binding, where the button elements have  
their click events bound to the corresponding event handlers.  
The ModalComponent itself is a base modal, while the  
VerificationModalComponent uses the base modal and employs a  
very specific verification prompt. The  
VerificationModalComponent will render as shown in Figure 4-1. Figure 4-1. An example rendering of the VerificationModalComponent.  
The component shadow for the VerificationModalComponent  
resides in the VerificationModalComponent.cs file\:  
namespace Learning.Blazor.Components  
\{  
public sealed partial class VerificationModalComponent  
\{  
private AreYouHumanMath \_math =  
AreYouHumanMath.CreateNew\(\);  
private ModalComponent \_modal = null!;  
private bool? \_answeredCorrectly = null!;  
private string? \_attemptedAnswer = null!;  
private object? \_state = null; \[Parameter, EditorRequired\]  
public EventCallback\<\(bool IsVerified, object? State\)\>  
OnVerificationAttempted  
\{  
get;  
set;  
\}  
public Task PromptAsync\(object? state = null\)  
\{  
\_state = state;  
return \_modal.ShowAsync\(\);  
\}  
private void Refresh\(\) =\>  
\(\_math, \_attemptedAnswer\) =  
\(AreYouHumanMath.CreateNew\(\), null\);  
private async Task OnDismissed\(DismissalReason reason\)  
\{  
if \(OnVerificationAttempted.HasDelegate\)  
\{  
await OnVerificationAttempted.InvokeAsync\(  
\(reason is DismissalReason.Verified,  
\_state\)\);  
\}  
\}  
private async Task AttemptToVerify\(\)  
\{  
if \(int.TryParse\(\_attemptedAnswer, out var  
attemptedAnswer\)\)  
\{  
\_answeredCorrectly =  
\_math.IsCorrect\(attemptedAnswer\);  
if \(\_answeredCorrectly is true\)  
\{  
await  
\_modal.DismissAsync\(DismissalReason.Verified\);  
\}  
\}  
else  
\{  
\_answeredCorrectly = false; \}  
\}  
\}  
\}  
The VerificationModalComponent class defines the following  
fields\:  
\_math\: The math object is of type AreYouHumanMath and its  
assigned from the AreYouHumanMath.CreateNew\(\) factory  
method. This is a custom type that helps to represent a simple  
mathematical problem that a human could likely figure out in their  
head.  
\_modal\: The field representing the ModalComponent instance  
from the corresponding markup. Methods will be called on this  
instance, such as ShowAsync to display the modal to the user.  
\_answeredCorrectly\: The three-state bool used to determine  
if the user answered the question correctly.  
\_attemptedAnswer\: The nullable string bound to the input  
element, used to store the user-entered value.  
\_state\: A state-object that represents an opaque value, stored on  
behalf of the consumer. When the consuming component calls  
PromptAsync, if they pass state its assigned to the \_state  
variable then given back to the caller when the  
OnVerificationAttempted event callback is invoked.  
The OnVerificationAttempted is a required parameter. The  
callback signature passes a tuple object, where it’s first value represents whether the verification attempt was successful. This is true when the  
user correctly entered the correct answer, otherwise false. The second  
value is an optional state object. The PromptAsync method is used to display the modal dialog, and  
accepts an optional state object. The Refresh method is bound to the refresh button and is called to re-  
randomize the question being asked. The  
AreYouHumanMath.CreateNew\(\) factory method is reassigned to  
the \_math field and the \_attemptedAnswer is set to null.  
The OnDismissed method is the handler for the  
ModalComponent.Dismissed event callback. When the base  
modal is dismissed, it will have DismissalReason. With the  
reason and when the OnVerificationAttempted has a  
delegate, it’s invoked passing whether it’s verified and any state that  
was held on to when prompted. The AttemptToVerify method is bound to the verify button. When  
called it will attempt to parse the \_attemptedAnswer as a int and  
ask the \_math object if the answer is correct. When true, the  
\_modal is dismissed as Verified. This will indirectly call  
Dismissed.  
I bet you’re wondering what the AreYouHumanMath object looks like, it  
sure was fun writing this cute little object. Take a look at the  
AreYouHumanMath.cs C\# file\:  
namespace Learning.Blazor.Models;  
public readonly record struct AreYouHumanMath\(  
byte LeftOperand,  
byte RightOperand,  
MathOperator Operator = MathOperator.Addition\)  
\{  
private static readonly Random s\_random = Random.Shared;  
/// \<summary\>  
/// Determines if the given \<paramref name="guess"/\> value is  
correct. /// \</summary\>  
/// \<param name="guess"\>The value being evaluated for  
correctness.\</param\>  
/// \<returns\>  
/// \<c\>true\</c\> when the given \<paramref name="guess"/\> is  
correct,  
/// otherwise \<c\>false\</c\>.  
/// \</returns\>  
/// \<exception cref="ArgumentException"\>  
/// An \<see cref="ArgumentException"/\> is thrown when  
/// the current \<see cref="Operator"/\> value is not defined.  
/// \</exception\>  
public bool IsCorrect\(int guess\) =\> guess == Operator switch  
\{  
MathOperator.Addition =\> LeftOperand + RightOperand,  
MathOperator.Subtraction =\> LeftOperand - RightOperand,  
MathOperator.Multiplication =\> LeftOperand \*  
RightOperand,  
\_  
=\> throw new ArgumentException\(  
\$"The operator is not supported\: \{Operator\}"\)  
\};  
/// \<summary\>  
/// The string representation of the \<see  
cref="AreYouHumanMath"/\> instance.  
/// \<code language="cs"\>  
/// \<!\[CDATA\[  
/// var math = new AreYouHumanMath\(7, 3\);  
/// math.ToString\(\); // "7 + 3 ="  
/// \]\]\>  
/// \</code\>  
/// \</summary\>  
/// \<exception cref="ArgumentException"\>  
/// An \<see cref="ArgumentException"/\> is thrown when  
/// the current \<see cref="Operator"/\> value is not defined.  
/// \</exception\>  
public override string ToString\(\)  
\{  
var operatorStr = Operator switch  
\{  
MathOperator.Addition =\> "+",  
MathOperator.Subtraction =\> "-"  
,  
MathOperator.Multiplication =\> "\*"  
,  
\_  
=\> throw new ArgumentException\(  
\$"The operator is not supported\: \{Operator\}"\) \};  
return \$"\{LeftOperand\} \{operatorStr\} \{RightOperand\} =";  
\}  
public string GetQuestion\(\) =\> \$"\{this\} ?";  
public static AreYouHumanMath CreateNew\(  
MathOperator? mathOperator = null\)  
\{  
var mathOp =  
mathOperator.GetValueOrDefault\(RandomOperator\(\)\);  
var \(left, right\) = mathOp switch  
\{  
MathOperator.Addition =\> \(Next\(\), Next\(\)\),  
MathOperator.Subtraction =\> \(Next\(120\), Next\(120\)\),  
=\> \(Next\(30\), Next\(30\)\),  
\_  
\};  
\(left, right\) = \(Math.Max\(left, right\), Math.Min\(left,  
right\)\);  
return new AreYouHumanMath\(  
\(byte\)left,  
\(byte\)right,  
mathOp\);  
static MathOperator RandomOperator\(\)  
\{  
var values = Enum.GetValues\<MathOperator\>\(\);  
return values\[s\_random.Next\(values.Length\)\];  
\};  
static int Next\(byte? maxValue = null\) =\>  
s\_random.Next\(1, maxValue ?? byte.MaxValue\);  
\}  
\}  
public enum MathOperator \{ Addition, Subtraction, Multiplication  
\};  
This object is a readonly record struct. As such, it’s  
immutable but allows for with expressions which creates a clone. It’s a  
positional record, meaning it can only be instantiated using the required parameter constructor. A left and right operand value is required, but the  
math operator is optional and defaults to addition. The Random.Shared was introduced with .NET 6, and is used to  
assign the static readonly Random instance.  
The IsCorrect method accepts a guess. This method will return  
true only when the given guess equals the evaluated math operation  
of the left and right operand values. For example, new  
AreYouHumanMath\(7, 3\).IsCorrect\(10\) would evaluate as  
true because seven plus three equals ten. This method is expressed as  
a switch expression on the Operator. Each operator case arm is  
expressed as the corresponding math operation. The ToString and GetQuestion methods return the mathematical  
representation of the applied operator and two operands. For example,  
new AreYouHumanMath\(7, 3\).ToString\(\) would evaluate as  
"7 + 3 =", whereas new AreYouHumanMath\(7,  
3\).GetQuestion\(\) would be "7 + 3 = ?".  
The CreateNew method relies heavily on the Random class to help  
ensure that each time it’s invoked a new question is asked. When the  
optional mathOperator is provided it’s used, otherwise a random  
one is determined. With an operator the operands are randomly  
determined, the maximum number is the left operand and the minimum  
is the right. As for the enum MathOperator, I intentionally decided to avoid  
division. With the use of random numbers it would have been a bit more  
complex, with concerns of divide by 0 and precision. Instead, I was  
hoping for math that you could more than likely do in your head.  
The VerificationModalComponent is used on the Contact.razor  
page to help prevent being spammed. We’ll look at that pattern in Chapter  
8\. The ModalComponent is also used by the  
AudioDescriptionComponent and the  
LanguageSelectionComponent. These two components are  
immediately to the right of the ThemeIndicatorComponent discussed  
in “Native theme awareness”. Summary  
You learned a lot more about how extensive and configurable Blazor app  
development really is. You have a much better understanding of how to  
authenticate a user in the context of a Blazor WebAssembly application. I  
showed you a familiar web client startup configuration pattern where all the  
client-side services are registered. We customized the authorization user  
experience. We explored the implementation of browser native Speech  
Synthesis. Finally, we read all the markup and C\# code for the chrome  
within the app’s header, and modal dialog hierarchical capabilities. We now  
have a much better understanding of Blazor event management, firing, and  
consuming.  
In the next chapter, I’m going to show you a pattern for localizing the app  
in forty different languages. I’ll show you how we use an entirely free  
GitHub Action combined with Azure Cognitive Services to machine  
translate resources files on our behalf. I’ll teach you exactly how to  
implement localization, using the framework-provider  
IStringLocalizer\<T\> type along with static resource files. You’ll  
learn various formatting details as well. Chapter 5. Localizing the App  
A NOTE FOR EARLY RELEASE READERS  
With Early Release ebooks, you get books in their earliest form—the  
author’s raw and unedited content as they write—so you can take  
advantage of these technologies long before the official release of these  
titles.  
This will be the fifth chapter of the final book. Please note that the  
GitHub repo will be made active later on.  
If you have comments about how we might improve the content and/or  
examples in this book, or if you notice missing material within this  
chapter, please reach out to the editor at rfernando@oreilly.com.  
In this chapter, I’m going to show you how to localize Blazor  
WebAssembly apps. You will learn a definition for localization as it  
pertains to .NET apps, and what it means to localize an app. I’ll show you  
how I managed to localize my app into dozens of languages. I’ll explain  
how Blazor WebAssembly recognizes resource files using a familiar  
resource manager programming approach. I’ll cover how to consume the  
framework-provided IStringLocalizer\<T\> interface type.  
# Ok, tell me—defining terms  
Localization is the act of translating static resources, such as those found in  
resource \(.resx\) files, into the various languages that an app plans to  
support. When your app supports many cultures \(or languages\), it is very  
difficult to effectively translate accurately in numerous languages. As a  
single developer working on this project, I had to make certain decisions. It  
is vital to know the tradeoffs when making such decisions. To that end, I decided to exemplify what it looks like to support the intersection of forty  
languages. I was able to achieve this knowing that all the resource files that  
I authored in English \(or .en.resx\), would be machine-translated as an  
automated pull request. Blazor WebAssembly is then able to dynamically  
determine which translated version of the file to render following various  
number, and date formatting rules. To support an app’s many languages is  
to localize it.  
WARNING  
Localizing an app using only machine-translated text is not ideal. Instead, developers  
should hire professional translators who can help maintain post-machine-translated files.  
They’re much more reliable translations.  
The resource \(.resx\) files vary by language identifier which is encoded in  
their sub-extension, .\{lang-id\}.resx where the \{lang-id\}  
placeholder is the browsers’ specified language. The app exposes the ability  
for the client to configure this using the  
LanguageSelectionComponent, which uses the  
ModalComponent to prompt the user to select from a list of languages  
that the app supports. These cultures are accessible to the app through an  
"api/cultures/all" endpoint.  
Localization process  
With a general understanding of what it means to localize an app, let’s put  
that into practice. The process of localization requires a few steps. To  
localize a Blazor WebAssembly app you’ll need the following things\:  
1\. A reference to the Microsoft.Extensions.Localization  
NuGet package.  
2\. To call AddLocalization\(\) when registering services for DI. 3\. The ability to update culture based on user preferences, and at app  
startup as shown in “Detecting client culture at startup”.  
4\. Resource \(.resx\) files in the client app.  
5\. Inject an IStringLocalizer\<T\> into components where  
localization is used.  
6\. Call indexer methods on the localizer instances.  
Blazor relies on the  
CultureInfo.DefaultThreadCurrentCulture and  
CultureInfo.DefaultThreadCurrentUICulture values to  
determine which resource file to use.  
A layer beyond our first look at registering localization  
services  
When the Web.Client project starts, all services it relies on are registered as  
being discoverable through the framework-provided dependency injection  
service provider. Each client app instance makes use of the internal clients  
and services, one, in particular, coming from the  
Microsoft.Extensions.Localization NuGet package. If you  
recall the client app service registration process, the  
IServiceCollection had a call to AddLocalization\(\) made.  
This added all of the services for dependency injection. The  
IStringLocalizer\<T\> is the only localization type available as of  
.NET 6.  
With the IStringLocalizer\<T\> type, a component can reference the  
resources within the translation \(XML-based .resx\) files. Each Blazor  
component potentially has many resource files that correspond to it. An  
instance of IStringLocalizer\<T\> corresponds to a single type of T,  
where T is any type that might have resources. When localizing resources,  
you’ll likely find that some components share common text. This is very  
evident with common controls, for the example button text. You can use a shared object \(SharedResource\), that contains resources with these  
common values. When you’re using the IStringLocalizer\<T\> and  
the IStringLocalizer\<SharedResource\>, it becomes redundant  
to inject both of these types over and over again. To solve that redundancy, I  
created a CoalescingStringLocalizer\<T\> class. Consider the  
CoalescingStringLocalizer.cs C\# file\:  
namespace Learning.Blazor.Localization;  
public sealed class CoalescingStringLocalizer\<T\>  
\{  
private readonly IStringLocalizer\<T\> \_localizer = null!;  
private readonly IStringLocalizer\<SharedResource\>  
\_sharedLocalizer = null!;  
public CoalescingStringLocalizer\(  
IStringLocalizer\<T\> localizer,  
IStringLocalizer\<SharedResource\> sharedLocalizer\) =\>  
\(\_localizer, \_sharedLocalizer\) = \(localizer,  
sharedLocalizer\);  
/// \<summary\>  
/// Gets the localized content for the current sub-component,  
/// relying on the contextually appropriate  
/// \<see cref="IStringLocalizer\{T\}"/\> implementation.  
/// \</summary\>  
internal LocalizedString this\[string name\]  
=\> \_localizer\[name\]  
?? \_sharedLocalizer\[name\]  
?? new\(name, name, false\);  
/// \<summary\>  
/// Gets the localized content for the current sub-component,  
/// relying on the contextually appropriate  
/// \<see cref="IStringLocalizer\{T\}"/\> implementation.  
/// \</summary\>  
internal LocalizedString this\[string name, params object\[\]  
arguments\]  
=\> \_localizer\[name, arguments\]  
?? \_sharedLocalizer\[name, arguments\]  
?? new\(name, name, false\);  
\}  
The CoalescingStringLocalizer\<T\> object relies on two  
fields\: \_localizer\: The localizer for the T type, where T is most often a  
component.  
\_sharedLocalizer\: The localizer for the SharedResource  
type.  
The constructor requires both localizer instances, and they’re assigned  
to the class-scoped fields. The first of two indexers accepts the name of the resource and  
coalesces on both localizer instances. When not found, the given name  
is returned. The second indexer accepts the name of the resource and the  
arguments. It too coalesces on both localizer instances and returns  
the given name when no resource is found.  
# The language selection component  
The language selection component prompts the user for their desired  
language. Its markup introduces a new framework-provided component  
used for handling errors, the ErrorBoundary component. This  
component wraps the potentially errant component, and will conditionally  
render either valid content when there’s no error or custom error content.  
This is useful for conditionally rendering content on the component’s ability  
to function properly. For example, if the endpoint that serves the apps’  
supported languages is down the ErrorBoundary component can render  
a disabled button.  
Assuming no errors are present the modal dialog acts as a user prompt from  
the apps’ chrome. When the appropriate render fragment is being rendered,  
clicking its button will show the modal and that will render similar to  
Figure 5-1. Figure 5-1. An example LanguageSelectionComponent rendering with the modal shown  
Consider the LanguageSelectionComponent.razor markup file\:  
@inherits LocalizableComponentBase\<LanguageSelectionComponent\>  
\<ErrorBoundary\>  
\<ChildContent\>  
\<span class="navbar-item"\>  
\<button class="button level-item is-rounded is-  
warning"  
@onclick=ShowAsync\>  
title=@Localizer\["Language"\]  
\<span class="icon"\>  
\<i class="fas fa-language"\>\</i\>  
\</span\>  
\</button\>  
\</span\>  
\</ChildContent\> \<ErrorContent\>  
\<span class="navbar-item"\>  
\<button class="button level-item is-rounded is-  
warning"  
disabled title=@Localizer\["Language"\]\>  
\<span class="icon"\>  
\<i class="fas fa-language"\>\</i\>  
\</span\>  
\</button\>  
\</span\>  
\</ErrorContent\>  
\</ErrorBoundary\>  
\<ModalComponent @ref="\_modal"\>  
\<TitleContent\>  
\<span class="icon pr-2"\>  
\<i class="fas fa-cogs"\>\</i\>  
\</span\>  
\<span\>@Localizer\["ChangeLanguage"\]\</span\>  
\</TitleContent\>  
\<BodyContent\>  
\<form\>  
\<div class="field"\>  
\<p class="control has-icons-left"\>  
\<span class="select is-medium is-fullwidth"\>  
\<select id="languages" class="has-dotnet-  
scrollbar"  
@bind=\_selectedCulture\>  
@if \(\_supportedCultures?.Any\(\) ?? false\)  
\{  
@foreach \(var kvp  
in \_supportedCultures.OrderBy\(c =\>  
c.Key.Name\)\)  
\{  
culture.LCID\)"  
var \(culture, \_\) = kvp;  
\<option selected="@\(lcid ==  
value="@culture"\>  
@\(ToDisplayName\(kvp\)\)  
\</option\>  
\}  
\}  
\</select\>  
\</span\>  
\<span class="icon is-small is-left"\>  
\<i class="fas fa-globe"\>\</i\>  
\</span\> \</p\>  
\</div\>  
\</form\>  
\</BodyContent\>  
\<ButtonContent\>  
\<div class="buttons are-large"\>  
\<button class="button is-success"  
@onclick="ConfirmAsync"\>  
\<span class="icon"\>  
\<i class="fas fa-check"\>\</i\>  
\</span\>  
\<span\>@Localizer\["Okay"\]\</span\>  
\</button\>  
\<button class="button is-danger"  
@onclick=@\(\(\) =\> \_modal.CancelAsync\(\)\)\>  
\<span class="icon"\>  
\<i class="fas fa-times"\>\</i\>  
\</span\>  
\<span\>@Localizer\["Cancel"\]\</span\>  
\</button\>  
\</div\>  
\</ButtonContent\>  
\</ModalComponent\>  
The LanguageSelectionComponent markup starts with an  
ErrorBoundary component. Its ChildContent renders a  
button that binds its onclick event handler to the ShowAsync  
method. The ErrorContent renders a disabled button. Both  
render fragments use the same syntax to call into the  
LocalizableComponentBase.Localizer instance. The  
@Localizer\["Language"\] invocation asks the localizer to fetch  
the corresponding value for the "Language" key. This returns a  
framework-provided LocalizedString type which represents a  
locale-specific string. The LocalizedString type defines an  
implicit operator as a string.  
The localization services understand that for an  
IStringLocalizer\<LanguageSelectionComponent\>, they  
should look for resources that match by naming convention. For  
example, the LanguageSelectionComponent.razor and  
LanguageSelectionComponent.razor.cs files are related, as they’re two partial class definitions for the same object. The same  
relationship exists for this component’s resource files. I defined a single  
LanguageSelectionComponent.razor.en.resx resource file for this, and  
I’ll explain where all of the other language resource files come from. The ModalComponent is captured as a reference and assigned to the  
\_modal field using the @ref="\_modal" syntax.  
The BodyContent contains a native HTML form element, and it  
binds to a native HTML selection element. Each option node is  
bound from the current culture in the iteration to the value  
attribute. It’s selected when the current culture’s LCID \(or culture  
identifier\) matches the one being iterated over. A ToDisplayName  
helper method is used to convert the culture and azureCulture  
objects into their text representation. The ButtonContent defines two buttons. The first button is the  
"Okay" button that calls ConfirmAsync when clicked. The other  
button is the "Cancel" button, and when it’s clicked it will call  
\_modal.CancelAsync\(\).  
With all of the supported cultures successfully loaded, see Figure 5-2. Figure 5-2. An example LanguageSelectionComponent rendering with the modal shown and  
cultures expanded  
The corresponding component partial is reflected in the  
LanguageSelectionComponent.razor.cs C\# file\:  
namespace Learning.Blazor.Components  
\{  
public partial class LanguageSelectionComponent  
\{  
private IDictionary\<CultureInfo, AzureCulture\>  
\_supportedCultures = null!;  
private CultureInfo \_selectedCulture = null!;  
private ModalComponent \_modal = null!;  
\[Inject\] HttpClient Http \{ get; set; \} = null!;  
\[Inject\] public NavigationManager Navigation \{ get; set;  
\} = null!;  
\{  
protected override async Task OnInitializedAsync\(\)  
var azureCultures =  
await  
Http.GetFromJsonAsync\<AzureTranslationCultures\>\(  
"api/cultures/all",  
DefaultJsonSerialization.Options\);  
\_supportedCultures =  
Culture.MapClientSupportedCultures\(azureCultures?.Translation\);  
\}  
private static string ToDisplayName\(  
KeyValuePair\<CultureInfo, AzureCulture\> culturePair\)  
\{  
var \(culture, azureCulture\) = culturePair;  
return \$"\{azureCulture.Name\} \(\{culture.Name\}\)";  
\}  
private async Task ShowAsync\(\) =\> await  
\_modal.ShowAsync\(\);  
private async Task ConfirmAsync\(\)  
\{  
var forceRefresh = \_selectedCulture is not null &&  
\_selectedCulture != Culture.CurrentCulture;  
if \(forceRefresh\)  
\{  
JavaScript.SetItem\(  
StorageKeys.ClientCulture,  
\_selectedCulture!.Name\);  
\}  
await \_modal.ConfirmAsync\(\);  
if \(forceRefresh\)  
\{  
Navigation.NavigateTo\(Navigation.Uri, forceLoad\:  
true\);  
\}  
\}  
\}  
\}  
The LanguageSelectionComponent defines a few fields and a  
few injected properties\:  
\_supportedCultures\: A IDictionary\<CultureInfo,  
AzureCulture\> field that represents the supported cultures. The  
field’s keys are the framework-provided CultureInfo and their  
value is a custom AzureCulture positional record class.  
\_selectedCulture\: This value is bound in the Razor markup to  
the select element and corresponds to what the user has selected  
as their desired culture.  
\_modal\: The reference to the ModalComponent. With this  
reference, we will call ShowAsync and ConfirmAsync to show  
and confirm the modal accordingly. Http\: An framework-provided HttpClient instance used to  
fetch the supported cultures.  
Navigation\: A framework-provided NavigationManager  
used to force reloading of the current page. When changing the  
culture, this is required to reload the entire app.  
When the component is initialized \(OnInitializedAsync\), the  
"api/cultures/all" server endpoint is called. The  
\_supportedCultures map is assigned from the returned values.  
These values reflect the set of overlapping client cultures and the  
server’s listed set. See Figure 5-3 for reference.  
The ToDisplayName is a helper function. It deconstructs the  
KeyValuePair into a tuple and returns a string interpolation  
expression that formats the culture. The remaining methods work with the \_modal instance\:  
ShowAsync\: Delegate to \_modal.ShowAsync\(\).  
ConfirmAsync\: If the user has selected a different culture, a  
reload is forced and the new value is persisted to local storage. The  
modal is closed by the call to \_modal.ConfirmAsync\(\). Figure 5-3. Supported cultures are the intersection of the client and server cultures.  
The LanguageSelectionComponent has forty-one resource files,  
meaning that it’s translated into that many different languages. From the  
earlier markup, you will have noticed that the @Localizer has its indexer  
called with the given arguments\:  
"Language"\: Bound in the \<button  
title=@Localizer\["Language"\]\>\</button\> markup.  
"ChangeLanguage"\: Bound to the TitleContent markup.  
"Okay"\: Bound to the ButtonContent confirm button text.  
"Cancel"\: Bound to the ButtonContent cancel button text.  
Each of these keys \(or names\) correspond to the resource files of the  
LanguageSelectionComponent. Consider the  
LanguageSelectionComponent.razor.en.resx resource file\:  
\<?xml version="1.0" encoding="utf-8"?\>  
\<root\>  
\<!-- XML schema omitted for brevity --\>  
\<data name="ChangeLanguage" xml\:space="preserve"\>  
\<value\>Change the current language?\</value\>  
\</data\>  
\<data name="Language" xml\:space="preserve"\>  
\<value\>Language\</value\>  
\</data\>  
\</root\>  
Each data node has a name attribute. This name matches the name you  
use when asking an IStringLocalizer\<T\> for a corresponding value.  
The value returned corresponds to the English version of the resource.  
Consider the LanguageSelectionComponent.razor.es.resx resource file\:  
\<?xml version="1.0" encoding="utf-8"?\>  
\<root\>  
\<!-- XML schema omitted for brevity --\> \<data name="ChangeLanguage" xml\:space="preserve"\>  
\<value\>¿Cambiar el idioma actual?\</value\>  
\</data\>  
\<data name="Language" xml\:space="preserve"\>  
\<value\>Idioma\</value\>  
\</data\>  
\</root\>  
This file differs in that its name ends with .es.resx instead of .en.resx, and  
each value is Spanish. These resource files contain only two data nodes.  
There were two additional names referenced in the markup, and that’s  
where the CoalescingStringLocalizer\<T\> comes in. The  
"Okay" and "Cancel" resources are part of the SharedResource  
object resource files. This approach does incur a minor performance  
implication, but saying it’s minor is an overstatement. It’s proven  
unmeasurable with all of my testing.  
# GitHub Action\: Resource Translator  
I wrote a GitHub Action that’s available on the GitHub Action Marketplace.  
It’s entirely free of charge and named Machine Translator. It relies on  
Azure’s Cognitive Services Text Translator service and it’s written in  
TypeScript. The Machine Translator workflow in the Learning Blazor’s  
repo requires my Azure’s encrypted subscription key so that it can access a  
cloud-based neural machine translation technology. This allows for source-  
to-text translation, taking my static .resx resource files as input, and writing  
out translated text for non-English languages. Within a GitHub repo, as an  
admin you can access the Settings \> Secrets page where you’ll add several  
repository secrets that the action will rely on as it runs.  
Consider the machine-translation.yml workflow file\:  
name\: Azure Translation on\:  
push\:  
branches\: \[ main \]  
paths\:  
-  
'\*\*.en.resx’  
-  
'\*\*.razor.en.resx’  
env\:  
GITHUB\_TOKEN\: \$\{\{ secrets.GITHUB\_TOKEN \}\}  
jobs\:  
translate\:  
runs-on\: ubuntu-latest  
steps\:  
- uses\: actions/checkout@v2  
- name\: Resource translator  
id\: translator  
uses\: IEvangelist/resource-translator@main  
with\:  
subscriptionKey\: \$\{\{  
secrets.AZURE\_TRANSLATOR\_SUBSCRIPTION\_KEY \}\}  
endpoint\: \$\{\{ secrets.AZURE\_TRANSLATOR\_ENDPOINT \}\}  
region\: \$\{\{ secrets.AZURE\_TRANSLATOR\_REGION \}\}  
sourceLocale\: 'en’  
toLocales\: |  
'\["af"  
,  
"ar"  
,  
'"fi"  
,  
"fr"  
,  
"az"  
"he"  
,  
,  
"bg"  
"hi"  
,  
,  
"ca"  
,  
"cs"  
"hr"  
,  
"hu"  
,  
,  
"da"  
"id"  
,  
,  
"de"  
"it"  
,  
'"la"  
,  
"lt"  
,  
"mk"  
,  
"nb"  
"nl"  
,  
"ro"  
,  
,  
"el"  
"ja"  
,  
"ru"  
,  
,  
"fa"  
"ko"  
,  
"sv"  
'"sk"  
'"vi"  
,  
"sl"  
"es"  
,  
,  
"zh-Hans"  
,  
,  
,  
,  
"sr-Cyrl"  
,  
"zh-Hant"\]'  
"pl"  
,  
"pt"  
"sr-Latn"  
,  
,  
"th"  
,  
"tr"  
,  
"uk"  
,  
,  
' +  
' +  
' +  
' +  
- name\: Create pull request  
uses\: peter-evans/create-pull-request@v3.4.1  
if\: \$\{\{ steps.translator.outputs.has-new-translations \}\}  
== 'true’  
with\:  
title\: '\$\{\{ steps.translator.outputs.summary-title \}\}'  
body\: '\$\{\{ steps.translator.outputs.summary-details \}\}'  
The GitHub Action workflow files describe the name as "Azure  
Translation", which is used later by the GitHub Action real-time  
status screen. The on syntax is used to describe when the action will  
run, this action runs when any .en.resx files are updated and pushed to the main branch. The hosting environment maps the secrets context  
object’s GitHub token value as GITHUB\_TOKEN. The workflow  
defines a single job in the jobs node, where named translate  
operation runs-on\: ubuntu-latest \(the latest supported version  
of Ubuntu\). Like most other GitHub Action workflow files, it needs to  
check out the repo’s source code using the action/checkout@v2  
action. The second step of the steps node describes my  
IEvangelist/resource-translator@main GitHub Action.  
This reference is identified as translator, which later allows the  
workflow to reference it by name \(or id\) through expressions. The  
with syntax allows this step to provide the required GitHub Action  
input. The keys listed in the with node map directly and namely to the  
names the GitHub Action publishes as input\:  
subscriptionKey\: A string value from the repo’s secrets  
context named AZURE\_TRANSLATOR\_SUBSCRIPTION\_KEY  
using expression syntax. This value should come from the Azure  
Translator resource’s Keys and Endpoint page, and either KEY 1 or  
KEY 2 are valid.  
endpoint\: A string value from the repo’s secrets context  
named AZURE\_TRANSLATOR\_ENDPOINT using expression  
syntax. This value should come from the Azure Translator  
resource’s Keys and Endpoint page, and either KEY 1 or KEY 2 are  
valid.  
region\: A string value from the repo’s secrets context named  
AZURE\_TRANSLATOR\_REGION using expression syntax.  
sourceLocale\: A literal value that equals the 'en' string. toLocales\: A string array of values for the locals to translate to  
using literal syntax.  
Using a community member, Peter Evans create-pull-request  
action, the Create pull request step will conditionally run. This  
occurs when the aforementioned translator step has an output that  
indicates that new translations were created. The pull requests are  
automated and appear as requests from the github-actions bot.  
The pull requests description \(title\) and body are dynamically  
determined from the output of the previous step. If you’re curious what  
this looks like, here’s a link to an actual translator automated pull  
request.  
YOU CAN DO BETTER, TAKE YOUR APP SERIOUSLY!  
I wanted my app to support as many languages as possible. The sample  
app supports forty-one languages including English as its default. When  
I develop components and resources for their UIs, I write only the  
.en.resx files. The GitHub Action wakes up, generates the forty new or  
updated translation files.  
Since these are machine translated, there is an opportunity to improve  
them. You should hire translation professionals to help maintain these  
translation files. As a solo developer on this project, it’s convenient to  
have my GitHub repository set up to support machine translation.  
Next, I’ll show you some localization examples.  
Localization formatting examples  
In this section, you’ll learn how the “Have I Been Pwned” service is  
exposed through an on-demand set of pages. The site has top-level  
navigation of Pwned?!, clicking this link navigates the user to the /pwned route. This page has two buttons, each with a link to its corresponding sub-  
route. The Breaches button routes to /pwned/breaches and the  
Passwords button routes to /pwned/passwords.  
The markup for the Pwned.razor page is shown below\:  
@page "/pwned"  
@attribute \[Authorize\]  
@inherits LocalizableComponentBase\<Pwned\>  
\<PageTitle\>  
Pwned  
\</PageTitle\>  
\<div class="tile is-ancestor"\>  
\<div class="tile is-vertical is-centered is-7"\>  
\<div class="tile"\>  
\<div class="tile is-parent is-clickable"  
@onclick=@NavigateToBreaches\>  
\<article class="tile is-child notification is-  
warning"\>  
emoji"\>&\#x1F92C;\</span\>  
\<p class="title"\>\<span class="is-  
@Localizer\["Breaches"\]  
\</p\>  
\</article\>  
\</div\>  
\<div class="tile is-parent is-clickable"  
@onclick=@NavigateToPasswords\>  
\<article class="tile is-child notification is-  
danger"\>  
emoji"\>&\#128273;\</span\>  
\<p class="title"\>\<span class="is-  
@Localizer\["Passwords"\]  
\</p\>  
\</article\>  
\</div\>  
\</div\>  
\</div\>  
\</div\>  
The page uses the framework-provided PageTitle component. This  
sets the browser tab title to Pwned. The button text is localized using the Localizer instance, and the  
"Breaches" resource. The button text is localized using the Localizer instance, and the  
"Passwords" resource.  
As for the component shadow, consider the Pwned.razor.cs C\# file\:  
namespace Learning.Blazor.Pages  
\{  
public partial class Pwned  
\{  
\[Inject\]  
public NavigationManager Navigation \{ get; set; \} =  
null!;  
private void NavigateToBreaches\(\) =\>  
Navigation.NavigateTo\("pwned/breaches"\);  
private void NavigateToPasswords\(\) =\>  
Navigation.NavigateTo\("pwned/passwords"\);  
\}  
\}  
The Pwned page depends on the injected NavigationManager  
instance, using its navigation functionality. The page has two navigation methods that navigate to the breaches and  
passwords sub-routes when called.  
The Pwned page has the following English Pwned.razor.en.resx resource  
file\:  
\<?xml version="1.0" encoding="utf-8"?\>  
\<root\>  
\<!--  
--\>  
Schema omitted for brevity...  
\<data name="Breaches" xml\:space="preserve"\>  
\<value\>Breaches\</value\>  
\</data\>  
\<data name="Passwords" xml\:space="preserve"\>  
\<value\>Passwords\</value\>  
\</data\>  
\</root\> The first data node is named "Breaches" and has a child value  
node of Breaches.  
The last data node is named "Passwords" has a child value node  
of Passwords.  
You might be wondering why not just use the name attribute since they’re  
the same as the value. This is because when these resources are  
translated, the name is the only thing that is the same. The value nodes  
will contain translated values instead.  
The Breaches page lets the user freely enter any email address and check  
if it has been part of a data breach. This functionality happens on the user’s  
behalf when they login to the app, but being able to manually enter any  
email address is convenient. This page renders as shown in Figure 5-4.  
Figure 5-4. The Breaches page rendering Before entering an email address, there are several textual values drawn on  
the screen as shown in Figure 5-4\:  
';--have i been pwned?\: This value is not translated, as it’s  
part of a brand.  
pwned\: Likewise, this value isn’t translated either as it’s the brand  
name.  
Email address\: This value is translated and its name is  
"EmailAddress" in the Localizer.  
Breaches\: This value is translated and its name is "Breaches" in  
the Localizer.  
Apply filter\: This value is translated and its name is  
"ApplyFilter" in the Localizer.  
Rather than showing the entire markup file, I’m going to focus on specific  
parts of the markup as it relates to localization. Consider the following  
snippet from the Breaches.razor markup file\:  
\<InputText @bind-Value=\_model.EmailAddress  
@ref=\_emailInput class="input is-large"  
autocomplete="hidden"  
placeholder=@Localizer\["EmailAddress"\] /\>  
This is the markup for the email address input. The framework-provided  
InputText is used to render the text input for the email address. Its  
placeholder displays a hint for the user, expressing what the expected  
value is for a given HTML input element. In this case, a localized string  
of "Email address" is rendered.  
Imagine that the user starts searching for data breaches. When an email isn’t  
found in any data-breach records \(such is the case with fake-email@not-  
real.com\), the results are formatted using the IStringLocalizer\<T\>  
indexer with parameter overload. Consider the following snippet from the  
Breaches.razor markup file\: \<a class="panel-block is-size-5" disabled\>  
\<span class="panel-icon"\>  
\<i class="fas fa-check" aria-hidden="true"\>\</i\>  
\</span\>  
@Localizer\["NoBreachesFormat", \_model.EmailAddress!\]  
\</a\>  
In this scenario, the Localizer instance has its indexer called passing the  
"NoBreachesFormat" resource name and the model’s  
EmailAddress. This renders as shown in Figure 5-5.  
Figure 5-5. The Breaches page rendering when no results are found  
The lack of a data breach is certainly a relief, however, it’s not entirely  
realistic. Chances are your email address has been compromised in a data  
breach. There is a test user account \(test@user.org\) who has been in seven to be exact, as shown in Figure 5-6. The Breaches page makes use of the  
custom-shared ModalComponent and displays the details of each breach  
when the result row is clicked. Figure 5-6. The Breaches page rendering for test@user.org  
As an example, when the user searches for test@user.org the  
Breaches page queries the Web.Api service’s  
/api/pwned/breaches endpoint. When the results are returned, the  
component updates to show a list of data breaches. The user might be  
interested in the “Dropbox” data breach, so they click it. This action  
displays the modal and passes the selected data breach record as a  
component parameter. The modal displays the data breach details as shown  
in Figure 5-7. Figure 5-7. The Dropbox data breach modal  
The resources are stored with the Breaches.razor.en.resx XML-resource  
file\:  
\<?xml version="1.0" encoding="utf-8"?\>  
\<root\>  
\<!--  
Schema omitted for brevity...  
--\>  
\<data name="Breaches" xml\:space="preserve"\>  
\<value\>Breaches\</value\>  
\</data\>  
\<data name="EmailAddress" xml\:space="preserve"\>  
\<value\>Email address\</value\>  
\</data\>  
\<data name="Filter" xml\:space="preserve"\>  
\<value\>Apply filter\</value\>  
\</data\>  
\<data name="InvalidEmailAddress" xml\:space="preserve"\>  
\<value\>This email is invalid\</value\>  
\</data\>  
\<data name="NoBreachesFormat" xml\:space="preserve"\>  
\<value\>No breaches found for \{0\}.\</value\>  
\</data\>  
\</root\>  
The same pattern is followed elsewhere in the app, where components  
either inherit from the custom LocalizableComponentBase or the  
framework-provided IStringLocalizer. Then each component  
defines resource files and uses the localizer instance to retrieve the  
resources as runtime.  
Consider the Passwords page, and a select few segments from its  
Passwords.razor markup\:  
\<div class="field has-addons"\>  
\<p class="is-fullwidth control has-icons-left  
@\(loadingClass\)"\>  
\<InputText id="password" @ref=\_passwordInput  
type="password" autocomplete="hidden"  
@bind-Value=\_model.PlainTextPassword  
class="input is-large" DisplayName=@Localizer\["Password"\]  
placeholder=@Localizer\["Password"\] /\>  
\<span class="icon is-small is-left"\>  
\<i class="fas fa-key"\>\</i\>  
\</span\>  
\</p\>  
\<div class="control"\>  
\<button type="submit" disabled="@\(\_isFormInvalid\)"  
class="button is-danger is-large  
@\(loadingClass\)"\>  
\<span class="icon"\>  
\<i class="fas fa-question"\>\</i\>  
\</span\>  
\<span\>pwned\</span\>  
\</button\>  
\</div\>  
\</div\>  
The password InputText component has its placeholder and  
DisplayName attributes assigned from the localizer "Password"  
resource.  
When the user first lands on this page the results are empty, but the heading  
text and the message prompt are both localized resources. These are  
rendered as shown in Figure 5-8. Figure 5-8. The Passwords page  
Consider the following segment from the Passwords.razor markup\:  
\<article class="panel is-info"\>  
\<p class="panel-heading has-text-left"\>  
\<span\>  
@Localizer\["Results"\]  
\</span\>  
\<span class="is-pulled-right"\>  
@if \(\_pwnedPassword?.IsPwned ?? false\)  
\{  
\<span class="field is-grouped is-grouped- multiline"\>  
\<span class="control"\>  
\<span class="tags are-medium has-addons"\>  
\<span class="tag is-  
danger"\>pwned\</span\>  
\<span class="tag is-dark"\>  
@\(\_pwnedPassword.PwnedCount.ToString\(  
"N0",  
Culture.CurrentCulture\)\)  
@onclick=Reset\>  
primary"\>reset\</span\>  
\</span\>  
\</span\>  
\</span\>  
\<span class="control"\>  
\<span class="tags is-clickable  
are-medium has-addons"  
\<span class="tag is-  
\<span class="tag is-dark"\>  
\<i class="fas fa-redo-alt"  
aria-hidden="true"\>  
\</i\>  
\</span\>  
\</span\>  
\</span\>  
\</span\>  
\}  
\</span\>  
\</p\>  
\<!-- The remaining markup is discussed next --\>  
\</article\>  
The localizer gets the resource value matching the "Results" name  
and plots it into the article element heading. Using a control structure, when the components \_pwnedPassword  
object is not null and it has a IsPwned value of true, two  
additional bits of information are added. The number of times that the given password has been pwned is  
formatted as a string, using the standard C\# number formatting and the  
current culture.  
Imagine that a user types "password" into the input field and searches to  
see if it has even been pwned. It’s probably easy to imagine that this password has been used many times, and you’re not wrong. See Figure 5-9  
for an example rendering of how many times "password" has been  
pwned. Yikes!  
Figure 5-9. The Passwords page with a pwned password  
There are a few additional control structures within the Passwords page,  
consider the remaining Passwords.razor markup\: @if \(\_pwnedPassword?.IsPwned ?? false\)  
\{  
\<a class="panel-block is-size-5"\>  
\<span class="panel-icon"\>  
\<i class="fas has-text-danger  
fa-exclamation-circle" aria-hidden="true"\>  
\</i\>  
\</span\>  
@Localizer\["OhNoFormat", \_pwnedPassword.PwnedCount\]  
\</a\>  
\}  
else if \(\_state is ComponentState.Loaded\)  
\{  
\<a class="panel-block is-size-5" disabled\>  
\<span class="panel-icon"\>  
\<i class="fas has-text-success  
fa-check" aria-hidden="true"\>\</i\>  
\</span\>  
@Localizer\["NotPwned"\]  
\</a\>  
\}  
else  
\{  
\<a class="panel-block is-size-5" disabled\>  
\<span class="panel-icon"\>  
\<i class="fas fa-question-circle"  
aria-hidden="true"\>\</i\>  
\</span\>  
@Localizer\["EnterPassword"\]  
\</a\>  
\}  
Relying on whether the \_pwnedPassword object is null and when  
it has a IsPwned value of true, there is conditional rendering. This  
will show the exclamation icon with a formatted resource matching the  
"OhNoFormat" name and given the number of times the password  
has been pwned. This relies on the Localizer indexer overload that  
accepts params object\[\] arguments.  
When the components \_state object is set as loaded, but the  
\_pwnedPassword object is either null or has a non-pwned result,  
the "NotPwned" resource is rendered. When the page is first rendered, neither the \_pwnedPassword object  
nor the \_state object are set, in this case, the "EnterPassword"  
resource is rendered. This prompts the user. All the resources reside within the Passwords.razor.en.resx XML-resource  
file\:  
\<?xml version="1.0" encoding="utf-8"?\>  
\<root\>  
\<!--  
Schema omitted for brevity...  
--\>  
\<data name="EnterPassword" xml\:space="preserve"\>  
\<value\>Please enter a password to check if it's been "pwned".  
\</value\>  
\</data\>  
\<data name="NotPwned" xml\:space="preserve"\>  
\<value\>Great news, this password has not been "pwned"!  
\</value\>  
\</data\>  
\<data name="OhNoFormat" xml\:space="preserve"\>  
\<value\>Sorry, this password has been "pwned" \{0\:N0\} times!  
\</value\>  
\</data\>  
\<data name="Password" xml\:space="preserve"\>  
\<value\>Password\</value\>  
\</data\>  
\<data name="Passwords" xml\:space="preserve"\>  
\<value\>Passwords\</value\>  
\</data\>  
\<data name="Results" xml\:space="preserve"\>  
\<value\>Results\</value\>  
\</data\>  
\</root\>  
# Summary  
In this chapter, I showed you how to localize Blazor WebAssembly apps.  
You learned a definition for localization as it pertains to .NET apps, and  
what it means to localize an app. I showed you how to localize apps into  
dozens of languages using a GitHub Action that relies on Azure Cognitive  
Services. I explained how Blazor WebAssembly recognizes resource files  
using a familiar resource manager. I’ll cover how to consume the  
IStringLocalizer\<T\> interface. In the next chapter, you’ll learn how to use ASP.NET Core SignalR with  
Blazor WebAssembly. I’ll show you a pattern for using real-time web  
functionality throughout the app, along with a custom notification system,  
messaging page, and live Tweet streaming page. Chapter 6. Exemplifying Real-  
# time Web Functionality  
A NOTE FOR EARLY RELEASE READERS  
With Early Release ebooks, you get books in their earliest form—the  
author’s raw and unedited content as they write—so you can take  
advantage of these technologies long before the official release of these  
titles.  
This will be the sixth chapter of the final book. Please note that the  
GitHub repo will be made active later on.  
If you have comments about how we might improve the content and/or  
examples in this book, or if you notice missing material within this  
chapter, please reach out to the editor at rfernando@oreilly.com.  
The use of real-time web functionality is becoming very common. In this  
chapter, you’ll learn how to implement real-time web functionality using  
ASP.NET Core SignalR \(or just SignalR\). I’ll teach you how to create a  
server-side \(Hub\) that will expose many live data points, such as real-time  
alerts and notifications, a messaging system for live-user interactions, and a  
joinable active Twitter stream. I will then show you how to consume this  
data from our Blazor WebAssembly app, which will respond to and interact  
with these live data points in compelling ways.  
# Defining the server-side Hub  
SignalR is a technology that abstracts away the transports that handle real-  
time communication \(such as WebSockets or Server-Side Events\), leaving a  
succinct API. The server is where hubs reside. A SignalR hub is a proxy betwixt the server and all connected clients. In a hub, you define methods  
that can be called directly from clients. Likewise, the server can call  
methods on any of the connected clients. This is two-way \(duplex\)  
communication. This concept of one machine calling into another is known  
as remote procedure calls \(or RPC\). The communication between the  
Web.Client app and the HTTP endpoints that it relies on are going to  
establish an open-line; where messages can be sent and received unsolicited  
from either process over network boundaries in real-time. The most optimal  
of scenarios is when both processes negotiate and agree upon the usage of  
WebSockets as the communication transport.  
The Web.Api project contains the SignalR hubs. It defines a single  
NotificationHub class, but there are three files in total. Each of these  
files represents a partial implementation of the NotificationHub  
object. The domain-specific segments are encapsulated within their file, for  
example, the NotificationHub.Chat.cs and NotificationHub.Tweets.cs. Let’s  
examine the NotificationHub.cs C\# file first\:  
namespace Learning.Blazor.Api.Hubs;  
\[Authorize, RequiredScope\(new\[\] \{ "User.ApiAccess" \}\)\]  
public partial class NotificationHub \: Hub  
\{  
private readonly ITwitterService \_twitterService;  
private readonly IStringLocalizer\<Shared\> \_localizer;  
private string \_userName =\> Context.User?.Identity?.Name ??  
"Unknown";  
private string\[\]? \_userEmail =\>  
Context.User?.GetEmailAddresses\(\);  
public NotificationHub\(  
ITwitterService twitterService,  
IStringLocalizer\<Shared\> localizer\) =\>  
\(\_twitterService, \_localizer\) = \(twitterService,  
localizer\);  
public override Task OnConnectedAsync\(\) =\>  
Clients.All.SendAsync\(  
HubServerEventNames.UserLoggedIn,  
Notification\<Actor\>.FromAlert\( new\(UserName\: \_userName,  
Emails\: \_userEmail\)\)\);  
public override Task OnDisconnectedAsync\(Exception? ex\) =\>  
Clients.All.SendAsync\(  
HubServerEventNames.UserLoggedOut,  
Notification\<Actor\>.FromAlert\(  
new\(UserName\: \_userName\)\)\);  
\}  
The NotificationHub is protected by the apps Azure Active  
Directory \(AAD\) business-to-consumer \(B2C\) tenant. The override Task OnConnectedAsync method is  
implemented, as an expression that sends an event  
HubServerEventNames.UserLoggedIn to all the connected  
clients. The override Task OnDisconnectedAsync method expects  
an error. This method lets all the connected clients know when a user  
disconnects from the hub. Only the user name is sent, for example; \{  
userName\: "David Pine" \} might be received to listeners of the  
HubServerEventNames.UserLoggedOut event.  
The NotificationHub only allows users who are authenticated with  
one of our configured third-party authentication providers, and who are part  
of the "User.ApiAccess" scope. The NotificationHub is a  
descendant of the framework-provided Hub class. This is a requirement for  
a SignalR server, they must expose a hub endpoint. This is the constructor  
\(.ctor\) definition and hub-event overrides handler for the hub. The other  
hub partials are domain-specific. This class defines several fields\:  
ITwitterService \_twitterService\: this service relies on  
the TweetInvi NuGet package. It manages streaming Twitter APIs,  
and streams filtered on specific hashtags and handles.  
IStringLocalizer\<Shared\> \_localizer\: the Shared  
class contains resources for the NotificationHub that are  
localized. Certain generic messages are translated for the alert and  
notification system. string \_userName\: The hub has a single user in context. This  
user is the representation of the deserialized tokens from the  
authentication connection. In other words, the user who is currently  
interacting with the hub \(this is thread-safe\).  
string\[\]? email addresses.  
\_userEmail\: The hub’s user also has one or more  
The event is a \`Notification\<Actor\>\`. The generic  
notification object is a \`record class\` with a user name and  
an array of email addresses.  
These events are somewhat generic, so they can be shared by different  
interested parties on the client. There are some additional features our app  
requires, and that is to provide a feature-rich chat room experience. I’ll  
show you how I implemented the “user is typing” indicator, custom room  
creation and sharing, editing sent messages, and so on. Let’s explore the  
NotificationHub.Chat.cs C\# file as it shows the hub’s implementation of the  
chat functionality\:  
namespace Learning.Blazor.Api.Hubs;  
public partial class NotificationHub  
\{  
public Task ToggleUserTyping\(bool isTyping\) =\>  
Clients.Others.SendAsync\(  
HubServerEventNames.UserTyping,  
Notification\<ActorAction\>.FromAlert\(  
new\(UserName\: \_userName ?? "Unknown",  
IsTyping\: isTyping\)\)\);  
public Task PostOrUpdateMessage\(  
string room, string message, Guid? id = default!\) =\>  
Clients.Groups\(room\).SendAsync\(  
HubServerEventNames.MessageReceived,  
Notification\<ActorMessage\>.FromChat\(  
new\(Id\: id ?? Guid.NewGuid\(\),  
Text\: message,  
UserName\: \_userName ?? "Unknown",  
IsEdit\: id.HasValue\)\)\); public async Task JoinChat\(string room\)  
\{  
await Groups.AddToGroupAsync\(Context.ConnectionId, room\);  
await Clients.Caller.SendAsync\(  
HubServerEventNames.MessageReceived,  
Notification\<ActorMessage\>.FromChat\(  
new\(Id\: Guid.NewGuid\(\),  
Text\: \_localizer\["WelcomeToChatRoom", room\],  
UserName\: UTF8.GetString\(new byte\[\] \{ 240,  
159, 145, 139 \}\),  
IsGreeting\: true\)\)\);  
\}  
\{  
room\);  
public async Task LeaveChat\(string room\)  
await Groups.RemoveFromGroupAsync\(Context.ConnectionId,  
await Clients.Groups\(room\).SendAsync\(  
HubServerEventNames.MessageReceived,  
Notification\<ActorMessage\>.FromChat\(  
new\(Id\: Guid.NewGuid\(\),  
Text\: \_localizer\["HasLeftTheChatRoom",  
UserName\: UTF8.GetString\(new byte\[\] \{ 240,  
\_userName ?? "?"\],  
159, 164, 150 \}\)\)\)\);  
\}  
\}  
The ToggleUserTyping method accepts a bool value indicating  
whether the contextual user’s connection is actively typing in the chat  
room. This signals the HubServerEventNames.UserTyping  
event sending out a Notification\<ActorAction\>, this is the  
user and their typing status as a message. The PostOrUpdateMessage method defines room and message  
string parameters and an optional id. If the id is null, a new  
globally unique identifier \(GUID\) is assigned to the message. The  
message has text, a user who sent it, and whether or not the message is  
being edited. This is used for both creating and updating user chat  
messages. The JoinChat method requires a room. When called the current  
connection is added to either a new or existing SignalR group with the matching room name. The method then lets the current caller know that  
the HubServerEventNames.MessageReceived event is fired,  
sending a welcome message to the chat room. This event sends a  
Notification\<ActorMessage\>. All clients have access to this  
custom generic notification model, it’s part of the Web.Models project.  
This is perfect because the clients can share these models, and  
serialization just works. This is far different than your typical JavaScript  
development, where you’d struggle to maintain the ever-changing  
shapes of API objects. The LeaveChat method is the companion to the JoinChat  
functionality. This is very intentional—we need a way to exit a room  
once you’ve joined it from the client. This happens in the LeaveChat  
method where the HubServerEventNames.MessageReceived  
is sent from chat. The current contextual user’s connection to the  
SignalR hub instance removes them from the chat room. That specific  
group is sent an automated message with a bot user name and a  
localized message.  
You’re starting to see the chat functionality evolve, there is also a  
requirement for Twitter-specific functionality that is communicated from  
the NotificationHub.Tweets.cs C\# file hub implementation\:  
public partial class NotificationHub  
\{  
public async Task JoinTweets\(\)  
\{  
await Groups.AddToGroupAsync\(  
Context.ConnectionId,  
HubGroupNames.Tweets\);  
if \(\_twitterService.CurrentStatus is StreamingStatus  
status\)  
\{  
await Clients.Caller.SendAsync\(  
HubServerEventNames.StatusUpdated,  
Notification\<StreamingStatus\>.FromStatus\(status\)\);  
\} if \(\_twitterService.LastFiftyTweets is \{ Count\: \> 0 \}\)  
\{  
await Clients.Caller.SendAsync\(  
HubServerEventNames.InitialTweetsLoaded,  
Notification\<List\<TweetContents\>\>.FromTweets\(  
\_twitterService.LastFiftyTweets.ToList\(\)\)\);  
\}  
\}  
\}  
public Task LeaveTweets\(\) =\>  
Groups.RemoveFromGroupAsync\(  
Context.ConnectionId,  
HubGroupNames.Tweets\);  
public Task StartTweetStream\(\) =\>  
\_twitterService.StartTweetStreamAsync\(\);  
The remote procedure calls \(RPCs\) in the Tweets hub bring together the  
ability to join the tweet stream. when this fires the current connection  
joins the HubGroupNames.Tweets group. The scoped  
\_twitterService is asked a few questions, such as; what is the  
current streaming status, and do you have any Tweets in memory.  
When the current Twitter streaming status is not null and has a  
value, it’s assigned into status variables. This status flows to  
all connected clients, as they’re notified of the current Twitter  
StreamingStatus.  
When there are Tweets in memory, all connected clients are notified  
of the Tweets as a List\<TweetContents\> collection.  
The LeaveTweets method removes the contextual connection from  
the HubGroupNames.Tweets group.  
The StartTweetStream is idempotent as it can be called multiple  
times without changing the initial result of starting the Tweet stream.  
This is represented as an asynchronous operation. You’re probably starting to wonder where the live Tweets come from, we  
cover that next when we look at the background service.  
IHubContext and BackgroundService  
The Web.Api project is responsible for exposing an HTTP API surface area,  
so it’s scoped to handling requests and providing responses. Beyond that, it  
has the SignalR /notifications endpoint which is handled by the  
collective representation of all partial NotificationHub class  
implementations. As for the live-streaming aspect of this application, we  
rely on a Twitter service but we need a way to listen for events from this  
service. Within an ASP.NET Core app, you can use a  
BackgroundService which runs in the same process but outside the  
request and response pipeline. SignalR provides a mechanism to access the  
NotificationHub through an IHubContext interface. Let’s look at  
the TwitterWorkerService.cs C\# file next\:  
namespace Learning.Blazor.Api.Services;  
public sealed class TwitterWorkerService \: BackgroundService  
\{  
private readonly ITwitterService \_twitterService;  
private readonly IHubContext\<NotificationHub\> \_hubContext;  
public TwitterWorkerService\(  
ITwitterService twitterService,  
IHubContext\<NotificationHub\> hubContext\)  
\{  
\(\_twitterService, \_hubContext\) = \(twitterService,  
hubContext\);  
\_twitterService.StatusUpdated += OnStatusUpdated;  
\_twitterService.TweetReceived += OnTweetReceived;  
\}  
protected override async Task ExecuteAsync\(  
CancellationToken stoppingToken\)  
\{  
while \(!stoppingToken.IsCancellationRequested\)  
\{ await Task.Delay\(TimeSpan.FromMinutes\(1\),  
stoppingToken\);  
\}  
\}  
private Task OnStatusUpdated\(StreamingStatus status\) =\>  
\_hubContext.Clients  
.Group\(HubGroupNames.Tweets\)  
.SendAsync\(  
HubServerEventNames.StatusUpdated,  
Notification\<StreamingStatus\>.FromStatus\(status\)\);  
private Task OnTweetReceived\(TweetContents tweet\) =\>  
\_hubContext.Clients  
.Group\(HubGroupNames.Tweets\)  
.SendAsync\(  
HubServerEventNames.TweetReceived,  
Notification\<TweetContents\>.FromTweet\(tweet\)\);  
\}  
The TwitterWorkerService is a descendent of  
BackgroundService. Background services are long-lived apps, that  
execute in a loop but with access to the notification hubs context, and  
can send messages through their connected clients. This class defines  
two fields\:  
ITwitterService \_twitterService\: this is the same  
service that was used in the NotificationHub for in-memory  
streaming status and Tweets. It can now handle events from the  
underlying TweetInvi’s filtered streams.  
IHubContext\<NotificationHub\> \_hubContext\: this  
object is used to send messages out to connected clients of the  
SignalR server hub.  
The TwitterWorkerService constructor declares the values as  
parameters. The dependency injection framework will provide the  
service and hub context objects. They’re positionally assigned using an  
immediate deconstruction of a tuple literal from the .ctor parameters. The \_twitterService has its StatusUpdated and  
TweetReceived event handlers assigned. There is no need to  
unsubscribe from the events because the app will never stop unless the  
entire app is being torn down. In that case, we’re not holding on to any  
unsubscribed events—as the entire process is being terminated. The ExecuteAsync method is implemented as a signal that the app  
can perform its task. This just spins, listening for the stopping token’s  
cancellation request. It just delays and listens in an asynchronous loop. As the \_twitterService.OnStatusUpdated event fires an  
update on the current streaming status is sent. All contextual clients in  
the HubGroupNames.Tweets group are sent the  
HubServerEventNames.StatusUpdated event. The  
notification is the StreamingStatus.  
The \_twitterService.OnTweetReceived event is handled  
when a new TweetContents tweet object is received. These  
tweet contents are send from the  
HubServerEventNames.TweetReceived event. This was also  
sent over to the same group named, HubGroupNames.Tweets.  
The server functionality is complete. With this alone, we can serve up a  
SignalR connection over a negotiated /notifications endpoint. Each  
client negotiates what protocol and transport they speak. For example, this  
SignalR app uses MessagePack for its transport. A SignalR transport is  
the communication handler, such as WebSockets, Server-Sent Events, and  
Long Polling. There are various ways in which clients can talk to servers  
and vice versa. This usually follows a fallback convention of preferred  
defaults, to less than preferred. The good news is that most modern browser  
environments support WebSockets, which is highly performant.  
Configuring the Hub endpoint  
There are a few things that need to be configured\:  
The desired protocol and any required NuGet packages. The mapping of the NotificationHub to the /notifications  
endpoint.  
The registration of the TwitterWorkerService hosted service.  
Since the Web.Api project targets the net6.0 target framework moniker  
\(TFM\), and specifies the \<Project  
Sdk="Microsoft.NET.Sdk.Web"\>, SignalR is implicitly referenced  
as part of the SDKs meta-package. The default protocol is JSON \(text-  
based protocol\), which is human-readable and convenient for debugging.  
However, it is far more efficient to use MessagePack, which is a binary  
protocol, and messages are usually half the size.  
The Web.Api.csproj XML file includes this among other package  
references\:  
\<Project Sdk="Microsoft.NET.Sdk.Web"\>  
\<PropertyGroup\>  
\<RootNamespace\>Learning.Blazor.Api\</RootNamespace\>  
\<TargetFramework\>net6.0\</TargetFramework\>  
\<Nullable\>enable\</Nullable\>  
\<ImplicitUsings\>true\</ImplicitUsings\>  
\<DockerDefaultTargetOS\>Linux\</DockerDefaultTargetOS\>  
\<DockerfileContext\>..\\..\</DockerfileContext\>  
\</PropertyGroup\>  
\<ItemGroup\>  
\<PackageReference Version="6.0.1"  
Include="Microsoft.AspNetCore.SignalR.Protocols.MessagePack" /\>  
\<!-- Additional package references omitted for brevity --  
\>  
\</ItemGroup\>  
\<ItemGroup\>  
\<!--  
Project references omitted for brevity\:  
Abstractions, Cosmos DB, Distributed Caching,  
Extensions, Http.Extensions, LogicAppServices,  
TwitterServices  
--\>  
\</ItemGroup\> \<!-- Omitted for brevity --\>  
\</Project\>  
The  
Microsoft.AspNetCore.SignalR.Protocols.MessagePa  
ck NuGet package reference is included. This exposes the  
MessagePack binary protocol. The client has to also configure  
MessagePack for this protocol to be used, otherwise, it will fall back to  
JSON.  
In the Web.Api project’s Startup class is where we add SignalR and map  
any Hub subclass to an endpoint. Consider the Startup.cs C\# file\:  
namespace Learning.Blazor.Api;  
public sealed partial class Startup  
\{  
readonly IConfiguration \_configuration;  
public Startup\(IConfiguration configuration\) =\>  
\_configuration = configuration;  
\}  
The Startup class is partial, and it only defines the  
\_configuration field and the constructor that accepts the  
configuration. By convention a startup object has two methods\:  
1\. ConfigureServices\(IServiceCollection services\)\:  
This method is responsible for registering services on the service  
collection \(commonly achieved with helper Add\{DomainService\}  
extension methods\).  
2\. Configure\(IApplicationBuilder app,  
IWebHostEnvironment env\)\: This method is responsible for  
configuring services for usage \(commonly achieved with helper  
Use\{DomainService\} extension methods\).  
First we add SignalR in the Startup.ConfigureServices.cs C\# file\: namespace Learning.Blazor.Api;  
public sealed partial class Startup  
\{  
public void ConfigureServices\(IServiceCollection services\)  
\{  
services.AddResponseCompression\(  
options =\>  
\{  
options.EnableForHttps = true;  
options.MimeTypes =  
ResponseCompressionDefaults.MimeTypes.Concat\(  
new\[\] \{ MediaTypeNames.Application.Octet  
\}\);  
\}\);  
services.AddAuthentication\(JwtBearerDefaults.AuthenticationScheme  
\)  
.AddMicrosoftIdentityWebApi\(  
\_configuration.GetSection\("AzureAdB2C"\)\);  
services.Configure\<JwtBearerOptions\>\(  
JwtBearerDefaults.AuthenticationScheme,  
options =\>  
options.TokenValidationParameters.NameClaimType =  
"name"\);  
services.AddApiServices\(\_configuration\);  
var webClientOrigin = \_configuration\["WebClientOrigin"\];  
services.AddCors\(  
options =\> options.AddDefaultPolicy\(  
builder =\> builder.WithOrigins\(  
"https\://localhost\:5001", webClientOrigin\)  
.AllowAnyMethod\(\)  
.AllowAnyHeader\(\)  
.AllowCredentials\(\)\)\);  
services.AddControllers\(\);  
services.AddSignalR\(  
options =\> options.EnableDetailedErrors = true\)  
.AddMessagePackProtocol\(\);  
\}  
\} The ConfigureServices method adds response compression,  
which is enabled for HTTPS. Authentication middleware is added and this should look a bit familiar  
by now—it’s configured using the same AAD B2C tenant shown in  
previous chapters. It is configured to use the "name" as the name claim  
type. Since our Blazor WebAssembly app makes requests to different  
origins, our API needs to allow cross-origin resource sharing \(CORs\). SignalR is added, using the .AddSignalR extension method. Chained  
fluently on this call is a call to AddMessagePackProtocol, and as  
the name signifies this will add MessagePack as the desired SignalR  
protocol.  
With the startup routine having added all of these services, it is now time to  
configure them. Let’s have a look at the Startup.Configure.cs C\# file\:  
namespace Learning.Blazor.Api;  
public sealed partial class Startup  
\{  
public void Configure\(IApplicationBuilder app,  
IWebHostEnvironment env\)  
\{  
if \(env.IsDevelopment\(\)\)  
\{  
app.UseDeveloperExceptionPage\(\);  
\}  
app.UseHttpsRedirection\(\);  
app.UseRouting\(\);  
var webClientOrigin = \_configuration\["WebClientOrigin"\];  
app.UseCors\(options =\>  
options.WithOrigins\(  
"https\://localhost\:5001", webClientOrigin\)  
.AllowAnyHeader\(\)  
.AllowAnyMethod\(\)  
.AllowCredentials\(\)\);  
var localizationOptions = new  
RequestLocalizationOptions\(\)  
.SetDefaultCulture\(Cultures.Default\)  
.AddSupportedCultures\(Cultures.Supported\)  
.AddSupportedUICultures\(Cultures.Supported\); app.UseRequestLocalization\(localizationOptions\);  
app.UseAuthentication\(\);  
app.UseAuthorization\(\);  
app.UseResponseCaching\(\);  
app.UseResponseCompression\(\);  
app.UseEndpoints\(endpoints =\>  
\{  
endpoints.MapControllers\(\);  
endpoints.MapHub\<NotificationHub\>\("/notifications"\);  
\}\);  
\}  
\}  
The Configure method is a convention of ASP.NET Core web apps.  
It configures services for dependency injection. The Web.Api project supports request localization, which is very similar  
to what was discussed in the previous chapter.  
The NotificationHub is mapped to its endpoint.  
The Configure functionality starts by conditionally using the developer  
exception page when the current runtime environment is configured as  
"Development". HTTPs redirection is used, which enforces the  
https\:// scheme for the API. Routing is used, and this enabled the usage  
of endpoint middleware services. Again, cross-origin resource sharing  
\(CORs\) is added but now we’re specifying that it is to be used.  
In the previous chapter, we explored the concepts of localization. In the  
Web.Api project, we use a variation of the same approach. While all  
resource files use the same mechanics in this project, the concept of  
localization from a Web API project requires a request-specific middleware  
that will automatically set the appropriate Culture based on the HTTP  
request itself. The configuration routine specifies the use of several more  
middleware services\:  
UseAuthentication\: Use the added AAD B2C tenant.  
UseAuthorization\: Allow APIs to be decorated with  
Authorize attributes, which require an authenticated user. ResponseCaching\: Allow APIs to declaratively specify  
ResponseCompression\: Use the configured response  
compression that was added.  
The call to UseEndpoints is required for SignalR, as the  
NotificationNub is mapped to the "/notifications" endpoint.  
With that in place, the project is ready to serve many connected clients  
concurrently.  
In the next section, we will examine how this data is being ingested by the  
client app.  
# Consuming real-time data on the client  
Blazor WebAssembly apps dynamically render different components and  
pages, depending on the route the client has navigated to. The model app  
for this book uses real-time data in several components and pages. As an  
architectural decision, due to the nature of how Blazor WebAssembly apps  
manage state, I decided to use a shared approach for the hub connection.  
The SharedHubConnection class has several implementations, and it’s  
responsible for managing a single framework-provided HubConnection  
which is shared by several components. Before we can use a  
HubConnection, we must first configure the client to support this type.  
Configure the client  
To configure SignalR on the client, the Web.Client project has to include  
two NuGet package references\:  
Microsoft.AspNetCore.SignalR.Client.  
Microsoft.AspNetCore.SignalR.Protocols.MessageP  
ack. In addition to these packages, the custom SharedHubConnection class  
was registered with the client’s service provider — enabling it as a  
resolvable service through dependency injection. This was initially  
discussed in “The Web Client ConfigureServices functionality”, but  
as a refresher, it was registered with a singleton service lifetime. Only a  
single instance of this service will exist for the lifetime of the client app.  
This is an important detail as it shares a connection state with all of the  
consuming components and pages. Next, we’ll look at the  
SharedHubConnection implementation.  
Sharing a hub connection  
The SharedHubConnection class is used by any component or page  
within the client app that needs to talk to the SignalR server. Regardless of  
whether the component needs to push data to the server, or whether the  
client subscribes to server events or both. The SharedHubConnection.cs C\#  
contains the logic for sharing a single framework-provided  
HubConnection\:  
namespace Learning.Blazor;  
public sealed partial class SharedHubConnection \:  
IAsyncDisposable  
\{  
private readonly IServiceProvider \_serviceProvider = null!;  
private readonly ILogger\<SharedHubConnection\> \_logger =  
null!;  
new\(\);  
private readonly AsyncRetryPolicy \_asyncRetryPolicy = null!;  
private readonly CultureService \_cultureService = null!;  
private readonly HubConnection \_hubConnection = null!;  
private readonly SemaphoreSlim \_lock = new\(1, 1\);  
private readonly HashSet\<ComponentBase\> \_activeComponents =  
/// \<summary\>  
/// Indicates the state of the \<see cref="HubConnection"/\> to  
the server.  
/// \</summary\>  
public HubConnectionState State =\> \_hubConnection?.State ?? HubConnectionState.Disconnected;  
public SharedHubConnection\(  
IServiceProvider serviceProvider,  
IOptions\<WebApiOptions\> options,  
CultureService cultureService,  
ILogger\<SharedHubConnection\> logger\)  
\{  
\(\_serviceProvider, \_cultureService, \_logger\) =  
\(serviceProvider, cultureService, logger\);  
var notificationHub =  
new Uri\(\$"  
\{options.Value.WebApiServerUrl\}/notifications"\);  
\_hubConnection = new HubConnectionBuilder\(\)  
.WithUrl\(notificationHub,  
options =\>  
\{  
options.AccessTokenProvider =  
GetAccessTokenValueAsync;  
options.Headers.Add\(  
"Accept-Language",  
\_cultureService.CurrentCulture.TwoLetterISOLanguageName\);  
\}\)  
.WithAutomaticReconnect\(\)  
.AddMessagePackProtocol\(\)  
.Build\(\);  
\_hubConnection.Closed += OnHubConnectionClosedAsync;  
\_hubConnection.Reconnected +=  
OnHubConnectionReconnectedAsync;  
\_hubConnection.Reconnecting +=  
OnHubConnectionReconnectingAsync;  
\_asyncRetryPolicy = Policy.Handle\<Exception\>\(\)  
.WaitAndRetryForeverAsync\(  
attempt =\> TimeSpan.FromMilliseconds\(5\_000\),  
\(ex, calculatedDuration\) =\>  
\_logger.LogError\(ex.Message, ex\)\);  
\}  
\{  
Task OnHubConnectionClosedAsync\(Exception? exception\)  
\_logger.LogHubConnectionClosed\(exception\);  
return Task.CompletedTask;  
\} Task OnHubConnectionReconnectedAsync\(string? message\)  
\{  
\_logger.LogHubConnectionReconnected\(message\);  
return Task.CompletedTask;  
\}  
\{  
Task OnHubConnectionReconnectingAsync\(Exception? exception\)  
\_logger.LogHubConnectionReconnecting\(exception\);  
return Task.CompletedTask;  
\}  
\{  
async ValueTask IAsyncDisposable.DisposeAsync\(\)  
if \(\_hubConnection is not null\)  
\{  
\_hubConnection.Closed -= OnHubConnectionClosedAsync;  
\_hubConnection.Reconnected -=  
OnHubConnectionReconnectedAsync;  
\_hubConnection.Reconnecting -=  
OnHubConnectionReconnectingAsync;  
await \_hubConnection.StopAsync\(\);  
await \_hubConnection.DisposeAsync\(\);  
if \(\_lock is not null\)  
\_lock.Dispose\(\);  
\}  
\{  
\}  
\}  
\}  
The SharedHubConnection is a sealed partial class.  
The SharedHubConnection defines several fields that are used to  
help manage the shared hub connection. The SharedHubConnection constructor initializes supporting  
fields from the defined parameters. The SharedHubConnection explicitly implements the  
IAsyncDisposable.DisposeAsync method.  
First, notice that the SharedHubConnection is an implementation of  
the IAsyncDisposable interface. This enables the SharedHubConnection class to clean up any managed resources that  
need to be released asynchronously.  
Then the class defines several fields that are initialized during construction  
\(or inline\). They’re described as follows\:  
IServiceProvider \_serviceProvider\: The service  
provider from the client app.  
ILogger\<SharedHubConnection\> \_logger\: A logger  
instance specific to the SharedHubConnection.  
AsyncRetryPolicy \_asyncRetryPolicy\: An asynchronous  
retry policy from the Polly library.  
CultureService \_cultureService\: The culture service is  
used to populate the “Accept-Language” HTTP header for requests  
made from the hub connection.  
HubConnection \_hubConnection\: The framework-provided  
representation of the client’s connection to the server’s hub.  
SemaphoreSlim \_lock\: new\(1, 1\); This is an asynchronous  
locking mechanism used to ensure that concurrent access to the shared  
hub connection is properly maintained.  
The connection state is represented by the underlying  
HubConnection.State as a calculated property named State. When  
the \_hubConnection is null the state is shown as Disconnected.  
Additional states include, Connected, Connecting, and  
Reconnecting.  
Next, the SharedHubConnection constructor assigns several fields  
from the constructor’s parameters. From the client’s configured options  
object, the Web API server URL is used along with the  
"/notifications" route to instantiate the notification hub Uri. The  
\_hubConnection field is instantiated using the builder pattern, and the  
corresponding HubConnectionBuilder object. The hub URL is used with the builder instance, and the hub connection has its options configured  
through the WithUrl method overload. The AccessTokenProvider  
is assigned to a delegate used to get the contextual access token  
asynchronously. The default request HTTP headers are updated, adding the  
"Accept-Language" header with a value of the currently configured  
two-letter ISO language name. This ensures that the SignalR server  
connection knows to return the appropriately localized content to the  
connected client. The builder configures automatic reconnection and the  
MessagePack protocol just before calling Build.  
Using the \_hubConnection instance, the Closed, Reconnected,  
and Reconnecting events are subscribed to. Their corresponding event  
handlers are all fairly similar. The app conditionally logs their occurrence.  
Finally, the DisposeAsync functionality unsubscribes from the  
\_hubConnection events, and then cascades disposal of the connection  
and the locking mechanism used for synchronization.  
The SharedHubConnection use is partial and there are several  
other implementations to consider. The GetAccessTokenValueAsync  
delegate was assigned when building the \_hubConnection instance, and  
that functionality is implemented in the SharedHubConnection.Tokens.cs  
C\# file\:  
namespace Learning.Blazor;  
public sealed partial class SharedHubConnection  
\{  
private async Task\<string?\> GetAccessTokenValueAsync\(\)  
\{  
using \(var scope = \_serviceProvider.CreateScope\(\)\)  
\{  
var tokenProvider =  
scope.ServiceProvider  
.GetRequiredService\<IAccessTokenProvider\>\(\);  
var result =  
await tokenProvider.RequestAccessToken\(\);  
if \(result.TryGetToken\(out var accessToken\)\)  
\{ return accessToken.Value;  
\}  
\_logger.LogUnableToGetAccessToken\(  
result.Status, result.RedirectUrl\);  
return null;  
\}  
\}  
\}  
The SharedHubConnection class was registered as a singleton, but the  
framework-provided IAccessTokenProvider is a scoped service. This  
is why the constructor couldn’t require the IAccessTokenProvider  
directly, instead, it needs the IServiceProvider. With the  
\_serviceProvider instance a call to CreateScope is used to create  
a scope in which we can resolve the IAccessTokenProvider. With  
the tokenProvider we call RequestAccessToken. If the result  
has an access token it is returned. If GetAccessTokenValueAsync is  
unable to get the accessToken it is logged, and null is returned. The  
access token is used to authenticate the connected Blazor client with the  
server hub.  
The next functionality that is implemented is the starting of the  
SharedHubConnection, this happens in the  
SharedHubConnection.Commands.cs C\# file\:  
namespace Learning.Blazor;  
public sealed partial class SharedHubConnection  
\{  
public async Task StartAsync\(CancellationToken token =  
default\)  
\{  
await \_lock.WaitAsync\(token\);  
try  
\{  
if \(State is HubConnectionState.Disconnected\)  
\{  
await \_hubConnection.StartAsync\(token\); \}  
else  
\{  
\}  
\_logger.LogUnableToStartHubConnection\(State\);  
finally  
\}  
\{  
\}  
\_lock.Release\(\);  
\}  
\}  
The StartAsync method defines an optional cancellation token.  
When a call to StartAsync is made, the SemaphoreSlim \_lock  
variable has its WaitAsync method called. This completes when the  
semaphore is entered. This is an important detail, as it alleviates the  
concerns of multiple components from StartAsync concurrently. This  
will ensure that when multiple calls are made at the same time, they happen  
one at a time. In other words, imagine that three components call  
StartAsync at the same time, this asynchronous locking mechanism  
ensures that the first component enters the semaphore and successfully  
starts the \_hubConnection is the only component that will call  
\_hubConnection.StartAsync. The other two components will log  
that they were unable.  
The next implementation of the SharedHubConnection is the chat  
functionality, and it’s defined in the SharedHubConnection.Chat.cs C\# file\:  
namespace Learning.Blazor;  
public sealed partial class SharedHubConnection  
\{  
/// \<inheritdoc cref="HubClientMethodNames.JoinChat" /\>  
public Task JoinChatAsync\(string room\) =\>  
\_hubConnection.InvokeAsync\(  
methodName\: HubClientMethodNames.JoinChat, room\);  
/// \<inheritdoc cref="HubClientMethodNames.LeaveChat" /\>  
public Task LeaveChatAsync\(string room\) =\>  
\_hubConnection.InvokeAsync\( methodName\: HubClientMethodNames.LeaveChat, room\);  
/// \<inheritdoc  
cref="HubClientMethodNames.PostOrUpdateMessage" /\>  
public Task PostOrUpdateMessageAsync\(  
string room, string message, Guid? id = default\) =\>  
\_hubConnection.InvokeAsync\(  
methodName\: HubClientMethodNames.PostOrUpdateMessage,  
room, message, id\);  
/// \<inheritdoc cref="HubClientMethodNames.ToggleUserTyping"  
/\>  
public Task ToggleUserTypingAsync\(bool isTyping\) =\>  
\_hubConnection.InvokeAsync\(  
methodName\: HubClientMethodNames.ToggleUserTyping,  
isTyping\);  
/// \<inheritdoc cref="HubServerEventNames.UserLoggedIn" /\>  
public IDisposable SubscribeToUserLoggedIn\(  
Func\<Notification\<Actor\>, Task\> onUserLoggedIn\) =\>  
\_hubConnection.On\(  
methodName\: HubServerEventNames.UserLoggedIn,  
handler\: onUserLoggedIn\);  
/// \<inheritdoc cref="HubServerEventNames.UserLoggedOut" /\>  
public IDisposable SubscribeToUserLoggedOut\(  
Func\<Notification\<Actor\>, Task\> onUserLoggedOut\) =\>  
\_hubConnection.On\(  
methodName\: HubServerEventNames.UserLoggedOut,  
handler\: onUserLoggedOut\);  
/// \<inheritdoc cref="HubServerEventNames.UserTyping" /\>  
public IDisposable SubscribeToUserTyping\(  
Func\<Notification\<ActorAction\>, Task\> onUserTyping\) =\>  
\_hubConnection.On\(  
methodName\: HubServerEventNames.UserTyping,  
handler\: onUserTyping\);  
/// \<inheritdoc cref="HubServerEventNames.MessageReceived" /\>  
public IDisposable SubscribeToMessageReceived\(  
Func\<Notification\<ActorMessage\>, Task\> onMessageReceived\)  
=\>  
\_hubConnection.On\(  
methodName\: HubServerEventNames.MessageReceived,  
handler\: onMessageReceived\);  
\} The JoinChatAsync method is an example of an operation that can  
be called from the client and it invokes a method on the server.  
The SubscribeToUserLoggedIn method is an example of an  
event that is fired from the server and clients can listen by subscribing  
to them.  
The chat functionality repeats these two essential patterns where\:  
HubClientMethodNames\: Define method names that are  
invokeable from a SignalR connected client on the SignalR server’s  
hub.  
HubServerEventNames\: Define event names \(and parameter  
details\) that are fired from the SignalR server’s hub that a SignalR  
connected client can subscribe to.  
Using these two patterns, the additional functionality is implemented. Each  
client method delegates out to a corresponding overload of the  
\_hubConnection.InvokeAsync method, passing the appropriate  
method name, and arguments. While each server event is subscribed to  
given a function that acts as its callback handler. This is possible using the  
appropriate \_hubConnection.On overload. These subscriptions are  
represented as an IDisposable that is returned, it’s the caller’s  
responsibility to unsubscribe by calling .Dispose on any subscriptions it  
may have made. Consuming components will have the ability to join and  
leave chat rooms, post and update messages in said chat rooms, and share  
whether or not they’re currently typing. Likewise, these components will be  
able to receive notifications when another user is currently typing, whether  
a user has logged in or out, and when a message has been received.  
The final bit of functionality that is implemented in this  
SharedHubConnection is Tweet streaming, and it’s defined in the  
SharedHubConnection.Tweets.cs C\# file\:  
namespace Learning.Blazor;  
public sealed partial class SharedHubConnection \{  
/// \<inheritdoc cref="HubClientMethodNames.JoinTweets" /\>  
public Task JoinTweetsAsync\(\) =\>  
\_hubConnection.InvokeAsync\(  
methodName\: HubClientMethodNames.JoinTweets\);  
/// \<inheritdoc cref="HubClientMethodNames.LeaveTweets" /\>  
public Task LeaveTweetsAsync\(\) =\>  
\_hubConnection.InvokeAsync\(  
methodName\: HubClientMethodNames.LeaveTweets\);  
/// \<inheritdoc cref="HubClientMethodNames.StartTweetStream"  
/\>  
public Task StartTweetStreamAsync\(\) =\>  
\_hubConnection.InvokeAsync\(  
methodName\: HubClientMethodNames.StartTweetStream\);  
/// \<inheritdoc cref="HubServerEventNames.StatusUpdated" /\>  
public IDisposable SubscribeToStatusUpdated\(  
Func\<Notification\<StreamingStatus\>, Task\>  
onStatusUpdated\) =\>  
\_hubConnection.On\(  
methodName\: HubServerEventNames.StatusUpdated,  
handler\: onStatusUpdated\);  
/// \<inheritdoc cref="HubServerEventNames.TweetReceived" /\>  
public IDisposable SubscribeToTweetReceived\(  
Func\<Notification\<TweetContents\>, Task\> onTweetReceived\)  
=\>  
\_hubConnection.On\(  
methodName\: HubServerEventNames.TweetReceived,  
handler\: onTweetReceived\);  
/// \<inheritdoc  
cref="HubServerEventNames.InitialTweetsLoaded" /\>  
public IDisposable SubscribeToTweetsLoaded\(  
Func\<Notification\<List\<TweetContents\>\>, Task\>  
onTweetsLoaded\) =\>  
\_hubConnection.On\(  
methodName\: HubServerEventNames.InitialTweetsLoaded,  
handler\: onTweetsLoaded\);  
\}  
The Tweet implementation relies on the HubClientMethodNames  
to invoke hub connection methods, given their name and arguments.  
Similarly, the HubServerEventNames are used to subscribe to  
named events from the server, given a handler. By encapsulating the logic for each domain-specific feature, the  
corresponding partial implementations of the  
SharedHubConnection expose more meaningful methods to the  
consumers. The framework-provided HubConnection, while used  
internally within this class, is abstracted away. Instead, using the  
SharedHubConnection a consumer can call more explicitly named and  
meaningful methods. This is exemplified in the following sections.  
Consuming real-time data in Components  
Three components within the app are powered by SignalR real-time data;  
the NotificationsComponent, the Tweets, and Chat pages. The  
notification is capable of receiving notifications for the following events\:  
When a user logs in or out of the app.  
When there’s an important weather alert for your current location, such  
as a watch or warning for example.  
Whether your email address has been part of a data breach \(pwned\).  
All notifications are dismissible, but only some are actionable. For example,  
the notification that informs you as to whether you’ve been part of a data  
breach provides a link. If you decide to follow the link, it will take you to  
the /pwned sub-route in the app which will show you all of the data  
breaches your email is part of. The pwned/breaches page was shown in  
an earlier chapter, see Figure 5-6.  
The app has a Tweets page dedicated to live Twitter content that’s  
streamed in real-time. I could show you bits and pieces of each of these  
consuming components, but I’d rather go a bit more in-depth and focus on  
just one component. Let’s take a look at the chat app.  
The Chat component defines the @page directive, which means it’s a  
page. It’s navigable at the /chat route. Consider the Chat.razor file\:  
@page "/chat/\{room?\}"  
@attribute \[Authorize\] @inherits LocalizableComponentBase\<Chat\>  
\<PageTitle\>  
@Localizer\["Chat"\]  
\</PageTitle\>  
\<AuthorizeView\>  
@if \(User is \{ Identity\: \{ \} \} user\)  
\{  
\<div class="is-hidden"\>@user.Identity.Name\</div\>  
\}  
\</AuthorizeView\>  
\<div class="columns"\>  
\<section class="column is-10 is-offset-1"\>  
\<div class="field has-addons"\>  
\<div class="control is-fullwidth has-icons-left"\>  
\<input class="input is-large"  
spellcheck="true"  
type="text"  
placeholder=@Localizer\["ChatMessage"\]  
@ref="\_messageInput"  
@bind-value="@\_message"  
@oninput="@InitiateDebounceUserIsTypingAsync"  
@onkeyup="@OnKeyUpAsync"  
autocomplete="off"\>  
\<span class="icon is-small is-left"\>  
\<i class="fas"\>&\#x1F4AD;\</i\>  
\</span\>  
\</div\>  
\<div class="control"\>  
\<a class="button is-info is-large"  
@onclick="@SendMessageAsync"\>  
@Localizer\["Send"\]  
\</a\>  
\</div\>  
\</div\>  
\<article class="panel is-info has-dotnet-scrollbar"\>  
\<p class="panel-heading has-text-left"\>  
\<span\>  
@Localizer\["Messages"\]  
\</span\>  
\<span class="is-pulled-right"\>  
@if \(TryGetUsersTypingText\(out var text\)\)  
\{  
MarkupString isTypingMarkup = new\(text\); strobing"\>  
\<span class="has-text-grey-light is-  
@isTypingMarkup  
\</span\>  
\}  
\</span\>  
\</p\>  
@foreach \(var \(id, message\) in \_messages.Reverse\(\)\)  
\{  
\<ChatMessageComponent Message=@message  
IsEditable=@\(OwnsMessage\(message.UserName\)\)  
EditMessage=@OnEditMessageAsync /\>  
\}  
\</article\>  
\</section\>  
\</div\>  
The Chat page has a route template of "/chat/\{room?\}". Each chat room has a single pair of inputs for the chat room message  
and a send button. When there are one or more users actively typing, we display  
specialized messages to indicate this to participants in the chat room. A collection of chat room messages are iterated over and passed to the  
ChatMessageComponent.  
The Chat page’s route template allows for an optional room parameter.  
This value is implicitly bound to the component’s corresponding Room  
property. Route templates are really powerful, and we could have a lot of  
flexibility. This allows users of our client app to share, and bookmark  
rooms. They can invite their friends, and interact in real-time. For more  
information, see ASP.NET Core Blazor routing and navigation\: Route  
constraints.  
The chat room functionality enables users to edit messages they’ve sent,  
this is a nice feature to have. It lets the chat user fix typos, or update what  
they’re trying to express as needed. Messages are, however, not persisted.  
This is intentional, every interaction is live — and if you leave, so too do  
the messages. It imposes an either be in the moment or don’t bother  
mentality. Programmatically speaking, it’s a lot less to be concerned with as  
well. The primary concern is the user’s ability to interact with the Chat room by creating or updating their chat messages. The user enters their  
message in the \<input type="text"\>, and send message using the  
\<a class="button"\> HTML elements. The input has its native  
spellcheck attribute set to true. This enables the element to provide  
help to the user, ensuring the spelling accuracy of their messages. The user  
can send a message using the Enter key. The send button is an explicit user  
request, as opposed to the more passive or implicitness of pressing the Enter  
key, but they’re functionally equivalent.  
As part of the real-time functionality, when the user’s in the same chat room  
are typing a message, their client apps are debouncing their input.  
WHAT’S THE DEBOUNCE ALGORITHM?  
The debounce algorithm is a means of programmatically ensuring that  
only a single event takes action regardless of the number of source  
events that occur within a set amount of time. For example, if a user is  
typing a message the app needs to immediately signify that they’re  
typing to others’ in the chat room. If the user continues typing, we do  
not want to keep sending this message as it could saturate the network  
with noise. Instead, we’ll send a cancellation of the user’s typing status  
after several hundred milliseconds of non-typing.  
Most chat apps let participants know when someone is typing, and it’s  
sadly become human nature to expect these sorts of insights. I know  
that you’ll sit and watch an ellipsis flash waiting for a message to come  
through. And if a message doesn’t come through after seeing the  
ellipsis, how does that make you feel?!  
When the user first starts typing, a notification is triggered using SignalR to  
let interested participants of the chat room know that the user is typing.  
Each time they type a non-terminating key, after a specific amount of time  
like 750 milliseconds or so, the app sends a cancellation. The user  
experience \(UX\) is such that, you can see not only that someone in the chat  
room is typing, but their names. The Chat page maintains a .NET Dictionary\<Guid,  
ActorMessage\> named \_messages. This collection is tethered to the  
receiving of SignalR events from the NotificationHub on the server,  
through the generic Notification\<T\> where T \: notnull and T  
represents the type for the Payload property. When communicated as a  
NotificationType.Chat, the T type is the ActorMessage. An  
actor message is used to represent the message from a user and their intent.  
These messages can reflect a message in multiple ways, whether the user is  
editing a message or whether the message is a general greeting. The  
messages are uniquely identifiable and immutable. A message has a sense  
of ownership, in that, there’s a username associated with a message.  
Consider the Actors.cs C\# file\:  
namespace Learning.Blazor.Models;  
public record class ActorMessage\(  
Guid Id,  
string Text,  
string UserName,  
bool IsGreeting = false,  
bool IsEdit = false\) \: Actor\(UserName\);  
public record class ActorAction\(  
string UserName, bool IsTyping\) \: Actor\(UserName\);  
public record class Actor\(  
string UserName,  
string\[\]? Emails = null\);  
This file contains three record class definitions, one base Actor, and  
two descendants, ActorAction and ActorMessage. Each message in  
the \_messages collection is iterated over in reverse order. This displays  
the messages in ascending order from the time they were posted, which is  
common in all chat apps. The ActorAction class sets the user’s typing  
status to either true or false. These message objects are passed to the  
custom \<ChatMessageComponent\>. This component is defined in the  
ChatMessageComponent.razor, let’s have a look at that first\: \<a id="@Message.Id"  
class="panel-block is-size-5 @\_dynamicCss"  
@onclick=@StartEditAsync\>  
\<span\>  
@Message.UserName  
\</span\>  
\<span class="panel-icon px-4"\>  
\<i class="fas fa-chevron-right" aria-hidden="true"\>\</i\>  
\</span\>  
\<span class="pl-2"\>  
@\{  
MarkupString messageMarkup = new\(Message.Text\);  
\<span\>  
@messageMarkup  
\</span\>  
@if \(Message.IsEdit\)  
\{  
\<span class="pl-2"\>  
\</span\>  
\<span class="tag is-success-dark"\>edited\</span\>  
\}  
\}  
\</span\>  
\</a\>  
@code \{  
\{  
private string \_dynamicCss  
get  
\{  
return string.Join\(" ", GetStyles\(\)\).Trim\(\);  
IEnumerable\<string\> GetStyles\(\)  
\{  
if \(!IsEditable\)  
yield return "is-unselectable";  
if \(Message.IsGreeting\)  
yield return "greeting";  
\};  
\}  
\}  
\[Parameter, EditorRequired\]  
public bool IsEditable \{ get; set; \}  
\[Parameter, EditorRequired\]  
public ActorMessage Message \{ get; set; \} = null!; \[Parameter, EditorRequired\]  
public EventCallback\<ActorMessage\> EditMessage \{ get; set; \}  
private async Task StartEditAsync\(\)  
\{  
if \(IsEditable && EditMessage.HasDelegate\)  
\{  
await EditMessage.InvokeAsync\(Message\);  
\}  
\}  
\}  
Each message is represented as an \<a id="@Message.Id"\>...  
\</a\> anchor element. The framework-provided MarkupString is used to render a C\#  
string as HTML. The component dynamically applies a style from the \_dynamicCss  
calculated property.  
The StartEditAsync\(\) method is used to signal to the parent  
Chat page that this component is editing a message.  
The ChatMessageComponent is used to represent a single chat  
message. If the component is created with IsEditable set to true the  
user can edit the message within this component. If a message has been  
edited before, it’s appropriately styled to indicate that to the users of the  
chat room. When the user is not permitted to edit a message, the is-  
unselectable style is applied. Next, I’ll show you how the Chat page  
is implemented as a few partials. Consider the Chat.razor.cs C\# file.  
namespace Learning.Blazor.Pages  
\{  
public sealed partial class Chat \: IAsyncDisposable  
\{  
private const string DefaultRoomName = "public";  
private readonly Stack\<IDisposable\> \_subscriptions =  
new\(\);  
\[Parameter\]  
public string? Room \{ get; set; \} = DefaultRoomName;  
\[Inject\] public SharedHubConnection HubConnection \{ get; set; \} =  
null!;  
protected override async Task OnInitializedAsync\(\)  
\{  
await base.OnInitializedAsync\(\);  
\_subscriptions.Push\(  
HubConnection.SubscribeToMessageReceived\(  
OnMessageReceivedAsync\)\);  
\_subscriptions.Push\(  
HubConnection.SubscribeToUserTyping\(  
OnUserTypingAsync\)\);  
await HubConnection.StartAsync\(\);  
await HubConnection.JoinChatAsync\(  
Room ?? DefaultRoomName\);  
protected override async Task OnAfterRenderAsync\(bool  
firstRender\)  
\}  
\{  
if \(firstRender\)  
\{  
await \_messageInput.FocusAsync\(\);  
\}  
\}  
async ValueTask IAsyncDisposable.DisposeAsync\(\)  
\{  
if \(HubConnection is not null\)  
\{  
await HubConnection.LeaveChatAsync\(  
Room ?? DefaultRoomName\);  
\}  
while \(\_subscriptions.TryPop\(out var disposable\)\)  
\{  
disposable.Dispose\(\);  
\}  
\}  
\}  
\}  
The Chat implementation maintains a Stack\<IDisposable\>  
named \_subscriptions. The ShareHubConnection HubConnection property is  
injected. The class provides an override of the OnInitializedAsync  
method. The OnAfterRenderAsync lifecycle event method is used to set the  
focus on the message input. An explicit implementation of  
IAsyncDisposable.DisposeAsync performs cleanup.  
The first implementation partial that we observe of the Chat  
component class implements IAsyncDisposable. The component  
exposes a \[Parameter\] public string? Room property. This is  
automatically bound from the navigation route. In other words, if the user  
visits /chat/MyCoolChatRoom, this Room property will have a value  
of "MyCoolChatRoom". When there isn’t a room name specified, the  
default room name of "public" is used.  
When the component is initialized, it subscribes to the following events\:  
HubConnection.SubscribeToMessageReceived\: The  
OnMessageReceivedAsync method is the handler.  
HubConnection.SubscribeToUserTyping\: The  
OnUserTypingAsync method is the handler.  
When the component is disposed of, it will leave the current chat room but  
issue the appropriate HubConnection.LeaveChatAsync method call.  
There’s a stack of \_subscriptions that will be unsubscribed from as  
well. The next Chat implementation partial, is defined in the  
Chat.razor.Messages.cs C\# file\:  
namespace Learning.Blazor.Pages  
\{  
public sealed partial class Chat  
\{  
private readonly Dictionary\<Guid, ActorMessage\> \_messages  
= new\(\);  
private Guid? \_messageId = null!; private string? \_message = null!;  
private bool \_isSending = false;  
private ElementReference \_messageInput;  
bool OwnsMessage\(string user\) =\> User?.Identity?.Name ==  
user;  
message\) =\>  
Task OnMessageReceivedAsync\(Notification\<ActorMessage\>  
InvokeAsync\(  
async \(\) =\>  
\{  
\_messages\[message.Payload.Id\] = message;  
StateHasChanged\(\);  
await JavaScript.ScrollIntoViewAsync\(  
\$"\[id='\{message.Payload.Id\}'\]"\);  
\}\);  
Task OnKeyUpAsync\(KeyboardEventArgs args\)  
\{  
if \(\_isSending\)  
\{  
return Task.CompletedTask;  
\}  
\{  
return args switch  
\{ Key\: "Enter" \} =\> SendMessageAsync\(\),  
=\> Task.CompletedTask  
\_  
\};  
\}  
async Task SendMessageAsync\(\)  
\{  
if \(\_isSending ||  
string.IsNullOrWhiteSpace\(\_message\)\)  
\{  
return;  
\}  
try  
\{  
\_isSending = true;  
await HubConnection.PostOrUpdateMessageAsync\(  
Room ?? DefaultRoomName, \_message, \_messageId\);  
finally  
\}  
\{  
\}  
\_message = null;  
\_messageId = null;  
\_isSending = false;  
\}  
\{  
async Task OnEditMessageAsync\(ActorMessage message\)  
if \(!OwnsMessage\(message.UserName\)\)  
\{  
return;  
\}  
\_messageId = message.Id;  
\_message = message.Text;  
await \_messageInput.FocusAsync\(\);  
\}  
\}  
\}  
The \_messages are represented as a collection of key-value pairs.  
The OnMessageReceivedAsync method is the event handler for  
when messages are received from the hub connection. When the user is typing, and they lift up on their key the  
OnKeyUpAsync method is fired.  
To send a message, the SendMessageAsync method is used. When the chat room user owns a message, they can start editing the  
message with the OnEditMessageAsync method.  
The Chat/Messages implementation is all about how messages are  
managed. From the collection of \_messages, to a single \_message and  
\_messageId, this class contains class-scoped fields for maintaining the  
state of chat messages. The \_isSending value is used to signify that a  
message is being sent. The \_messageInput is a framework-provided  
ElementReference. When the component is rendered for the first time,  
the \_messageInput is focused on using the FocusAsync extension  
method. The Chat.OwnsMessage method accepts a user parameter and  
compares it to the current user in context. This prevents anyone from  
editing messages that they’d don’t have ownership of. When a message is  
received, the OnMessageReceivedAsync method is called. Since this  
can happen at any time, the method needs to call StateHasChanged.  
The \_messages collection is updated with the incoming message, and a  
call to JavaScript.ScrollIntoViewAsync given the  
message.Payload.Id. This is a JavaScript interop call, using the  
named extension method pattern I introduced you to in earlier chapters.  
As the user types their chat messages, the OnKeyUpAsync method is  
being invoked. If the user is currently sending a message, it’s a noop,  
however, when the user presses the Enter key, the message is sent. The  
SendMessageAsync method early exits if a message is already being  
sent, or if there is no message at all. When there is a message to send, the  
HubConnection.PostOrUpdateMessageAsync method is called.  
If the user decides to edit a message, the OnEditMessageAsync method  
ensures that first that the user owns the message. The \_message and  
\_messageId are assigned from the message being edited, and focus is  
returned to the message input. The final bit of Chat functionality, is that of  
the debounce implementation. For that, I’ll show you the  
Chat.razor.Debounce.cs C\# file\:  
namespace Learning.Blazor.Pages  
\{  
public sealed partial class Chat  
\{  
private readonly HashSet\<Actor\> \_usersTyping = new\(\);  
private readonly SystemTimerAlias \_debounceTimer = new\(\)  
\{  
Interval = 750,  
AutoReset = false  
\};  
private bool \_isTyping = false;  
public Chat\(\) =\>  
\_debounceTimer.Elapsed += OnDebounceElapsed; Task InitiateDebounceUserIsTypingAsync\(\)  
\{  
\_debounceTimer.Stop\(\);  
\_debounceTimer.Start\(\);  
return SetIsTypingAsync\(true\);  
\}  
Task OnUserTypingAsync\(Notification\<ActorAction\>  
actorAction\) =\>  
InvokeAsync\(\(\) =\>  
\{  
var \(  
, \(user, isTyping\)\) = actorAction;  
\_  
= isTyping  
\_  
? \_usersTyping.Add\(new\(user\)\)  
\: \_usersTyping.Remove\(new\(user\)\);  
StateHasChanged\(\);  
\}\);  
Task SetIsTypingAsync\(bool isTyping\)  
\{  
if \(\_isTyping && isTyping\)  
\{  
return Task.CompletedTask;  
\}  
return HubConnection.ToggleUserTypingAsync\(  
\_isTyping = isTyping\);  
ut\[1\]\],  
\}  
bool TryGetUsersTypingText\(  
\[NotNullWhen\(true\)\] out string? text\)  
\{  
var ut = \_usersTyping  
?.Select\(a =\> a.UserName\)  
?.ToArray\(\);  
text = ut?.Length switch  
\{  
0 or null =\> null,  
1 =\> Localizer\["UserIsTypingFormat", ut\[0\]\],  
2 =\> Localizer\["TwoUsersAreTypingFormat", ut\[0\],  
=\> Localizer\["MultiplePeopleAreTyping"\]  
\_  
\}; return text is not null;  
\}  
async void OnDebounceElapsed\(object?  
, ElapsedEventArgs  
\_  
e\) =\>  
await SetIsTypingAsync\(false\);  
\}  
\}  
The debounce implementation maintains a HashSet\<Actor\>  
\_usersTyping.  
The Chat constructor wires up the \_debounceTimer.Elapsed  
event. The InitiateDebounceUserIsTypingAsync method is  
responsible for restarting the \_debounceTimer and calling  
SetIsTypingAsync with true.  
The OnUserTypingAsync method handles the event that is fired  
when people in the chat room are typing. The SetIsTypingAsync method conditionally toggles the state of  
whether the user is typing. The TryGetUsersTypingText helper method gets a message to  
display when users are typing. After the alloted amount of debounce time, the  
OnDebounceElapsed method is called, thus clearing the typing  
status.  
The Chat/Debounce implementation manages the collection of  
\_usersTyping, the \_debounceTimer which comes from the  
System.Timers.Timer namespace, and a value indicating whether or  
not the user \_isTyping.  
When the OnUserTypingAsync method is called, the  
Notification\<ActorAction\> parameter provides a value as to  
whether the user is typing. The user is either added or removed from the  
\_usersTyping collection. The TryGetUsersTypingText helper  
message relies on the current state of the \_usersTyping collection and  
the Localizer to format messages. For example, if my friends Carol and  
Chad were both typing a message the UI would look similar to Figure 6-1. Figure 6-1. The Chat room with multiple people typing  
# Summary  
In this chapter, I taught you how to implement real-time web functionality  
using ASP.NET Core SignalR. I explained how to cleanly separate domain  
responsibilities making extensive use of C\# partial classes. I walked you  
through the source code for a feature-rich server-side SignalR  
implementation, complete with Hub and IHubContext\<T\> within a  
BackgroundService. You learned possible ways to create real-time alerts and notifications, a messaging system for live-user interactions, and a  
joinable active Twitter stream. Finally, I showed you how to consume this  
data from our Blazor WebAssembly app while focusing on a feature-rich  
chat app.  
In the next chapter, I’m going to show you a valid use case for C\# source  
generators. You’ll learn how well-known JavaScript Web APIs can be used  
to source generate extension method implementations, fulfilling JavaScript  
interop functionality. I’ll teach you how this specifically applies to the  
localStorage JavaScript API. Chapter 7. Using Source  
# Generators  
A NOTE FOR EARLY RELEASE READERS  
With Early Release ebooks, you get books in their earliest form—the  
author’s raw and unedited content as they write—so you can take  
advantage of these technologies long before the official release of these  
titles.  
This will be the seventh chapter of the final book. Please note that the  
GitHub repo will be made active later on.  
If you have comments about how we might improve the content and/or  
examples in this book, or if you notice missing material within this  
chapter, please reach out to the editor at rfernando@oreilly.com.  
In the previous chapter, we explored how to harness the power of real-time  
data, with various feature-rich implementations such as live notifications, a  
chat app, and Tweet streaming. In this chapter, I’m going to explain another  
very compelling feature that the .NET developer platform enables. In these  
scenarios, I’ll teach you specifically how C\# source generators and Blazor  
app dev make for a great developer experience. I’ll show you a well-defined  
JavaScript API, and an example service library that provides JavaScript  
interop as a service for it.  
Using blazorators, a Blazor-specific C\# source generator that I created, I’ll  
show you how we automate the creation of target Web APIs. This project is  
available on GitHub, and I would love for you to give my open-source  
repository a star — that’s one way how developers in the open-source  
community express their appreciation for one another. It’s these little kinds of positive interactions that keep me drawn to open-source software  
development.  
This source generator repository publishes many NuGet packages, two of  
which are our primary focus for this chapter\:  
1\. NuGet\: Blazor.SourceGenerators\: The core library that  
powers the Blazor source generator. This library is consumed by class  
libraries that need to generate C\# source code, based on well-known  
JavaScript APIs.  
2\. NuGet\: Blazor.LocalStorage.WebAssembly\: A library that  
provides a C\# source generated WebAssembly-compatible  
localStorage implementation. This library is consumed by either  
Razor component libraries or the Blazor WebAssembly apps.  
Additionally, it publishes NuGet\: Blazor.Serialization, which is  
used by the generated code to support generics, and custom serialization  
overloads.  
# What Are Source Generators?  
There are many reasons to write code, that writes code; that is, a source  
generator. As a developer, it’s your responsibility to recognize patterns, and  
when you start sensing that you’re writing a lot of the same code over and  
over — it’s time to consider an alternative. There are often many ways to  
achieve the desired reduction in repetition, and the source generator is one  
of them. RECOGNIZING REPETITIVE PATTERNS AND  
ENCAPSULATING THEM AWAY  
I probably over encapsulate, as I tend to recognize repetitive patterns in  
my code, and then refactor them immediately. Sometimes this can be  
mistaken for over-engineering, but it’s valuable and saves a lot of time.  
General-purpose code fuels the development process and helps to  
compose application building blocks or modular code. It’s a good thing  
to write reusable code, and it’s a good thing to write code that’s easy to  
understand. I strive for both!  
If you write a lot of boilerplate code, or repetitive programming idioms  
chances are they could be automated, and it’s safer to use source generators  
to write the code on your behalf. Humans are error-prone, and I believe that  
it is best to leave only the challenging problems to humans. Such is the case  
with some of the code required to write JavaScript interoperability. Every  
time I have to write JavaScript interop code, I have to do the following  
things\:  
1\. Use an API reference document to observe the target JavaScript API,  
and infer correct consumption of the JavaScript API.  
2\. Create an extension method that extends the IJSRuntime or  
IJSInProcessJRuntime interface to expose the JavaScript API.  
3\. Delegate out the interop call to the interface I’m extending, mapping  
parameters and return values from the JavaScript API to the C\#  
method.  
4\. Use the extension method to call the JavaScript interop functionality.  
With Blazor WebAssembly the framework-provided IJSRuntime is also  
an implementation of the IJSInProcessRuntime type. This interface  
exposes synchronous JavaScript interop methods. This is because  
WebAssembly has its corresponding JavaScript implementation in the same  
process, so things can happen synchronously. This has less overhead than using the async ValueTask alternatives, and it’s considered an  
optimization for Blazor WebAssembly apps over the Blazor Server hosting  
model.  
The source generator relies on the APIs of the C\# compiler platform  
\(Roslyn\). It has a generator that implements the  
Microsoft.CodeAnalysis.ISourceGenerator interface. This  
interface is used by the compiler to generate source code, and we’re free to  
implement that how you see fit. Next, I’ll show you how an example  
JavaScript API might be implemented as a reusable class library.  
Native Browser localStorage Service  
The Web.LocalStorage project is a class library that exposes a set of  
powerful APIs and it relies on JavaScript but doesn’t contain any JavaScript  
itself. The EcmaScript standard specifies many well-known and supported  
Web APIs as well as document object model \(DOM\), and browser object  
model \(BOM\) APIs.  
TIP  
It’s recommended to ignore the DOM APIs, as those are managed by Blazor  
specifically. This is an important detail because having more than one bit of code  
working on the same APIs can cause unusual behavior.  
Let’s focus on the Web APIs, which are the APIs that are exposed to  
JavaScript. The term Web API here is not to be confused with HTTP Web  
APIs, but instead APIs that are native to JavaScript.  
One such API is that of the window.localStorage. 1This is one  
implementation of the Storage API. Local storage allows a website to  
persist data across browser sessions, and it is great for user preferences and  
things of that nature. The localStorage API doesn’t require a secure  
context, but the content is stored on the client browser and visible to the  
user. The API surface area of the window.localStorage is described in the  
Table 7-1\: T  
a  
b  
l  
e  
7  
-  
1  
.  
L  
o  
c  
a  
l  
s  
t  
o  
r  
a  
g  
e  
A  
P  
I  
t  
a  
b  
l  
e  
Method name Parameters Return type clear none void  
removeItem DOMString keyName void  
getItem DOMString keyName DOMString | nul  
l  
void  
setItem DOMString keyName, DOMString keyVal  
ue  
key number index DOMString | nul  
l  
length none number  
To expose this JavaScript API to the Razor component library or a Blazor  
WebAssembly app, I would likely write custom logic to implement  
extension methods as my preferred way of exposing the JavaScript API. I  
would typically extend either the IJSRuntime and  
IJSInProcessRuntime implementations, and delegate JavaScript  
interop calls on the native localStorage API to provide its  
functionality. This can be tedious, time-consuming, and error-prone. In the  
next section, we’ll discuss how the source generator can create the  
appropriate JavaScript interop code for the localStorage API using  
TypeScript declarations.  
Relying On TypeScript Declarations  
The source generator works thanks to parsing the TypeScript type  
declarations of the lib.dom.d.ts and using the declarative values from the  
attribute. This information is publicly available on their repository on  
GitHub. The type declarations are read and parsed. The values are mapped  
into objects that are used to look up the corresponding JavaScript  
implementation of the type and generate the synchronous extension methods. The source generator parses the types from the lib.dom.d.ts file  
and uses the JSAutoInterop attribute to generate the corresponding  
JavaScript code. The types in the lib.dom.d.ts file are very infrequently  
updated, and reliable. The source generator is capable of converting the  
types from JavaScript into their corresponding C\# shapes.  
For example, the lib.dom.d.ts contains the declaration for the Storage  
interface. The source generator parses this interface which resembles the  
following TypeScript code\:  
interface Storage \{  
readonly length\: number;  
clear\(\)\: void;  
getItem\(key\: string\)\: string | null;  
key\(index\: number\)\: string | null;  
removeItem\(key\: string\)\: void;  
setItem\(key\: string, value\: string\)\: void;  
\}  
The Storage interface declaration as it’s represented in the  
lib.dom.d.ts file.  
The implementations of this interface will provide a read-only length  
property that returns the number of items in the Storage.  
Implementations will also provide the common functionality of clear,  
getItem, key, removeItem, and setItem. The source generator  
parses this interface into a C\# object that describes the interface. The source  
generator dynamically creates the JSAutoGenericInterop attribute.  
The attribute is discovered by the source generator and it’s are converted  
into generator options using the metadata from the attribute’s values. The  
source generator uses will recognize the desired TypeName and  
corresponding implementation from the Implementation value.  
When the source generator detects the JSAutoGenericInterop  
attribute, it will look up the TypeName and Implementation values.  
The source generator will then generate the JavaScript interop code for the Storage interface. The source generator parses the TypeScript  
declarations and has logic to convert these methods into JavaScript interop  
extension methods. In the next section, I’ll show you how to implement the  
localStorage API as a reusable class library.  
# How C\# Source Generators Relate To Blazor  
What if I told you that a C\# source generator could be used to create this  
entire library and the corresponding JavaScript interop code, would you  
believe me? This is where the Blazor.SourceGenerator project  
comes in. It’s a C\# source generator that can be used to generate JavaScript  
interop code based on well-known APIs. The  
Blazor.LocalStorage.WebAssembly NuGet package only  
contains the following code, defined in the ILocalStorageService.cs C\# file\:  
namespace Microsoft.JSInterop;  
\[JSAutoGenericInterop\(  
TypeName = "Storage",  
Implementation = "window.localStorage",  
Url =  
"https\://developer.mozilla.org/docs/Web/API/Window/localStorage",  
GenericMethodDescriptors = new\[\]  
\{  
"getItem",  
"setItem\:value"  
\}\)\]  
public partial interface ILocalStorageService  
\{  
\}  
This code designates itself into the Microsoft.JSInterop namespace,  
making all of the source-generated functionality available to any consumer  
who uses types from this namespace. It uses the  
JSAutoGenericInteropAttribute to specify the following  
metadata\: TypeName Storage.  
= "Storage"\: This sets the target type name to  
Implementation = "window.localStorage"\: This  
expresses how to locate the implementation of the specified type from  
the globally scoped window object, this is the localStorage  
implementation.  
Url\: This sets the URL for the implementation, it’s used by the source  
generator to automatically create code comments for the APIs it  
generates.  
GenericMethodDescriptors\: These descriptors are used to  
reason about which methods should be source generated using generic  
return types, or generic parameters. By specifying the "getItem"  
method, its return type will be a generic TValue type. Likewise,  
specifying the "setItem\:value" will instruct the parameter with a  
name of value as a generic TValue type.  
There is a lot of descriptive metadata that can be inferred from this  
decorative attribute. When compiled, the Blazor.SourceGenerators  
project will recognize this file and source generate the corresponding  
localStorage JavaScript interop extension methods on the  
ILocalStorageService.  
The file needs to also be a public partial interface. Consider  
the following C\# code that was generated in the ILocalStorageService.g.cs  
C\# file\:  
using Blazor.Serialization.Extensions;  
using System.Text.Json;  
\#nullable enable  
namespace Microsoft.JSInterop;  
/// \<summary\>  
/// Source generated interface definition of the \<c\>Storage\</c\>  
type.  
/// \</summary\> public partial interface ILocalStorageService  
\{  
/// \<summary\>  
/// Source generated implementation of  
/// \<c\>window.localStorage.length\</c\>.  
/// \<a href=  
///  
"https\://developer.mozilla.org/docs/Web/API/Storage/length"\>\</a\>  
/// \</summary\>  
double Length  
\{  
get;  
\}  
/// \<summary\>  
/// Source generated implementation of  
/// \<c\>window.localStorage.clear\</c\>.  
/// \<a href=  
///  
"https\://developer.mozilla.org/docs/Web/API/Storage/clear"\>\</a\>  
/// \</summary\>  
void Clear\(\);  
/// \<summary\>  
/// Source generated implementation of  
/// \<c\>window.localStorage.getItem\</c\>.  
/// \<a href=  
///  
"https\://developer.mozilla.org/docs/Web/API/Storage/getItem"\>\</a\>  
/// \</summary\>  
TValue? GetItem\<TValue\>\(  
string key,  
JsonSerializerOptions? options = null\);  
/// \<summary\>  
/// Source generated implementation of  
/// \<c\>window.localStorage.key\</c\>.  
/// \<a href=  
/// "https\://developer.mozilla.org/docs/Web/API/Storage/key"\>  
\</a\>  
/// \</summary\>  
string? Key\(double index\);  
/// \<summary\>  
/// Source generated implementation of  
/// \<c\>window.localStorage.removeItem\</c\>.  
/// \<a href=  
/// "https\://developer.mozilla.org/docs/Web/API/Storage/removeItem"\>  
\</a\>  
/// \</summary\>  
void RemoveItem\(string key\);  
/// \<summary\>  
/// Source generated implementation of  
/// \<c\>window.localStorage.setItem\</c\>.  
/// \<a href=  
///  
"https\://developer.mozilla.org/docs/Web/API/Storage/setItem"\>\</a\>  
/// \</summary\>  
void SetItem\<TValue\>\(  
string key,  
TValue value,  
JsonSerializerOptions? options = null\);  
\}  
The Length method returns the length of the underlying array in the  
localStorage implementation.  
The Clear method clears the localStorage.  
The GetItem method returns the item for the corresponding key in  
the generic shape it’s expecting.  
The Key method returns the key at the corresponding index in the  
localStorage.  
The RemoveItem method removes the item for the corresponding  
key in the localStorage.  
The SetItem method sets the item for the corresponding key in the  
localStorage.  
Since this is a partial interface, the source generator will generate  
the ILocalStorageService. The corresponding implementation is  
also source generated. Consumers of the generated code use the methods  
created on the ILocalStorageService type to access the  
localStorage API. This code is the synchronous alternative to the  
asynchronous code generated by the Blazor.LocalStorage.Server  
NuGet package. The Blazor.LocalStorage.WebAssembly NuGet  
package is a class library that relies on the  
Blazor.SourceGenerators project. The advantages of the source  
generating this code are huge. The library can be reused by any Razor  
project or Blazor WebAssembly project. The ILocalStorageService is exposed through the framework’s  
dependency injection system. This interface is generated using the  
knowledge of the TypeName and Implementation properties. The  
TypeName is the name of the type that will be exposed to the consumer of  
the generated code. The Implementation is the name of the JavaScript  
type that will be used to implement the ILocalStorageService  
interface. This is based on the localStorage Web API. Here is the  
source generated LocalStorage implementation, defined in the source  
generated LocalStorageService.g.cs C\# file \(notice this implementation is  
internal\)\:  
\#nullable enable  
using Blazor.Serialization.Extensions;  
using Microsoft.JSInterop;  
using System.Text.Json;  
namespace Microsoft.JSInterop;  
/// \<inheritdoc /\>  
internal sealed class LocalStorageService \: ILocalStorageService  
\{  
private readonly IJSInProcessRuntime \_javaScript = null;  
/// \<inheritdoc /\>  
double ILocalStorageService.Length =\>  
\_javaScript.Invoke\<double\>\(  
"eval",  
new object\[1\]  
\{  
"window.localStorage.length"  
\}\);  
public LocalStorageService\(IJSInProcessRuntime javaScript\)  
\_javaScript = javaScript;  
\{  
\}  
\{  
/// \<inheritdoc /\>  
void ILocalStorageService.Clear\(\)  
\_javaScript.InvokeVoid\(  
"window.localStorage.clear"\); \}  
/// \<inheritdoc /\>  
TValue? ILocalStorageService.GetItem\<TValue\>\(  
string key,  
JsonSerializerOptions? options\)  
\{  
return \_javaScript.Invoke\<string\>\(  
"window.localStorage.getItem",  
new object\[1\]  
\{  
key  
\}\)  
.FromJson\<TValue\>\(options\);  
\}  
/// \<inheritdoc /\>  
string? ILocalStorageService.Key\(double index\)  
\{  
return \_javaScript.Invoke\<string\>\(  
"window.localStorage.key",  
new object\[1\]  
\{  
index  
\}\);  
\}  
/// \<inheritdoc /\>  
void ILocalStorageService.RemoveItem\(string key\)  
\{  
\_javaScript.InvokeVoid\(  
"window.localStorage.removeItem",  
key\);  
\}  
/// \<inheritdoc /\>  
void ILocalStorageService.SetItem\<TValue\>\(  
string key,  
TValue value,  
JsonSerializerOptions? options\)  
\{  
\_javaScript.InvokeVoid\(  
"window.localStorage.setItem",  
key,  
value.ToJson\<TValue\>\(options\)\);  
\}  
\} The Length property returns the number of items in the  
localStorage.  
The LocalStorage constructor takes a IJSInProcessRuntime  
as a parameter.  
The Clear method clears the localStorage by calling the clear  
JavaScript method. The GetItem method returns the item for the corresponding key in  
the localStorage.  
The Key method returns the key at the given index in the  
localStorage.  
The RemoveItem method removes the item for the corresponding  
key in the localStorage.  
The SetItem method sets the item for the corresponding key in the  
localStorage.  
The interface supports both generics and customizable serialization with the  
JsonSerializerOptions. The JsonSerializerOptions are  
used to control how the type of the TValue in the GetItem method is  
serialized. The options are optional and if not provided, the default  
serialization will be used.  
It’s important to note that this is an internal sealed class, and that  
it is an explicit implementation of the ILocalStorageService  
interface. This is done to ensure that the LocalStorageService  
implementation is not directly exposed to the consumer of the generated  
code, but instead only the abstraction. The functionality will be shared with  
the consumer through the native .NET dependency injection mechanism,  
and that code is also source generated.  
The implementation relies on the IJSInProcessRuntime type to  
perform JavaScript interop. From the given TypeName and corresponding  
Implementation, the following code is also generated\:  
ILocalStorageService.g.cs\: The partial interface  
for the corresponding Storage Web API surface area.  
LocalStorageService.g.cs\: The internal sealed  
implementation of the ILocalStorageService interface. LocalStorageServiceCollectionExtensions.g.cs\:  
Extension methods to add the ILocalStorageService service to  
the dependency injection IServiceCollection.  
The following is a source generated  
LocalStorageServiceCollectionExtensions.g.cs C\# file\:  
using Microsoft.JSInterop;  
namespace Microsoft.Extensions.DependencyInjection;  
/// \<summary\>\</summary\>  
public static class LocalStorageServiceCollectionExtensions  
\{  
/// \<summary\>  
/// Adds the \<see cref="ILocalStorageService" /\> service to  
the service collection.  
/// \</summary\>  
public static IServiceCollection AddLocalStorageServices\(  
this IServiceCollection services\) =\>  
services.AddSingleton\<IJSInProcessRuntime\>  
\(serviceProvider =\>  
\(IJSInProcessRuntime\)serviceProvider.GetRequiredService\<IJSRuntim  
e\>\(\)\)  
.AddSingleton\<ILocalStorageService,  
LocalStorageService\>\(\);  
\}  
The AddLocalStorageServices method takes a  
IServiceCollection as a parameter.  
The AddLocalStorageServices method returns the  
IServiceCollection with the ILocalStorageService  
service added, and the dependent framework-provided  
IJSInProcessRuntime as well.  
This is called in the Web.Client’s  
WebAssemblyHostBuilderExtensions class, to register the  
ILocalStorageService service with the dependency injection  
IServiceCollection. Putting this all together, the  
Blazor.LocalStorage.WebAssembly NuGet package is less than 15 lines of hand-written code, and the rest is generated, providing a fully  
functioning JavaScript interop implementation that is a DI-ready service.  
The service is registered as a singleton, and the  
ILocalStorageService interface is exposed to the consumer of the  
generated code. In the next section, I’ll explain how the source generator  
can be used to create an entirely different library for the Geolocation  
JavaScript API.  
Source Generating The geolocation API  
The source generator project is also used to generate the  
Blazor.Geolocation.WebAssembly NuGet package. This package  
is used to access the Geolocation API in the browser. This API is a bit  
different from the localStorage API as it doesn’t require generics,  
custom serialization, but it does require by-directional JavaScript interop.  
The JavaScript API for the Geolocation API is exposed through the  
window.navigator.geolocation JavaScript object. The  
Geolocation API requires a secure context, meaning that the browser  
will natively prompt the user for permission to use the location services.  
The user has a choice, and if they choose “no” this functionality cannot be  
used. If the user selects “allow” the browser will then enable the use of this  
feature. In a secure context, the browser is required to use the HTTPS  
protocol. The API is defined as follows according to the TypeScript  
interface declaration\:  
interface Geolocation \{  
clearWatch\(watchId\: number\)\: void;  
getCurrentPosition\(  
successCallback\: PositionCallback,  
errorCallback?\: PositionErrorCallback | null,  
options?\: PositionOptions\)\: void;  
watchPosition\(  
successCallback\: PositionCallback,  
errorCallback?\: PositionErrorCallback | null, \}  
options?\: PositionOptions\)\: number;  
The Geolocation interface declaration as it’s represented in the  
lib.dom.d.ts file.  
This is where things get a bit interesting. Sure, the source generator can  
generate this API much like was done with the the local storage bits, but  
this time the generator needs to do a bit more work. The following types  
need to also be evaluated, and potentially generated\:  
PositionCallback  
PositionErrorCallback  
PositionOptions  
Let’s start first with the two callbacks. The PositionCallback is a  
callback that is called when the getCurrentPosition or  
watchPosition methods are called. The callbacks are defined as  
follows\:  
interface PositionCallback \{  
\(position\: GeolocationPosition\)\: void;  
interface PositionErrorCallback \{  
\(positionError\: GeolocationPositionError\)\: void;  
\}  
\}  
They’re an interface that defines a delegate, or the method signature of  
the callback. The source generator also has to then understand and source  
generate the GeolocationPosition and  
GeolocationPositionError types. These types are defined as  
follows\:  
interface GeolocationPosition \{  
readonly coords\: GeolocationCoordinates;  
readonly timestamp\: DOMTimeStamp;  
\} interface GeolocationPositionError \{  
readonly code\: number;  
readonly message\: string;  
readonly PERMISSION\_DENIED\: number;  
readonly POSITION\_UNAVAILABLE\: number;  
readonly TIMEOUT\: number;  
\}  
The GeolocationPosition type has two properties, coords and  
timestamp. The coords property is an interface that defines the  
GeolocationCoordinates type. The timestamp property is a  
DOMTimeStamp type. The DOMTimeStamp type is a number type, and  
its value is the number of milliseconds passed Unix Epoch as Coordinated  
Universal Time \(UTC\). Unix Epoch is January 1st, 1970. The source  
generator will generate readonly properties for DOMTimeStamp types that  
expose a .NET DateTime with the UTC conversion as a convenience. The  
GeolocationCoordinates type is defined as follows\:  
interface GeolocationCoordinates \{  
readonly accuracy\: number;  
readonly altitude\: number | null;  
readonly altitudeAccuracy\: number | null;  
readonly heading\: number | null;  
readonly latitude\: number;  
readonly longitude\: number;  
readonly speed\: number | null;  
\}  
Finally, the source generator will recognize the PositionOptions type,  
and source generate it as follows\:  
interface PositionOptions \{  
enableHighAccuracy?\: boolean;  
maximumAge?\: number;  
timeout?\: number;  
\}  
The source generator has a lot of code to generate. Let’s look at how this is  
achieved. The Blazor.Geolocation.WebAssembly NuGet package contains two hand-written files. The first is the IGeolocationService.cs C\#  
file\:  
namespace Microsoft.JSInterop;  
\[JSAutoInterop\(  
TypeName = "Geolocation",  
Implementation = "window.navigator.geolocation",  
Url =  
"https\://developer.mozilla.org/docs/Web/API/Geolocation"\)\]  
public partial interface IGeolocationService  
\{  
\}  
Again, the library defines a partial interface. The TypeName is  
set to "Geolocation", which is the name of the JavaScript API. The  
Implementation is set to "window.navigator.geolocation",  
which is the JavaScript API that the library exposes. The Url is set to the  
URL of the JavaScript API documentation. The source generator will  
generate the following IGeolocationService.g.cs C\# interface\:  
\#nullable enable  
namespace Microsoft.JSInterop;  
/// \<summary\>  
/// Source generated interface definition of the  
\<c\>Geolocation\</c\> type.  
/// \</summary\>  
public partial interface IGeolocationService  
\{  
/// \<summary\>  
/// Source generated implementation of  
/// \<c\>window.navigator.geolocation.clearWatch\</c\>.  
/// \<a href=  
///  
"https\://developer.mozilla.org/docs/Web/API/Geolocation/clearWatc  
h"\>  
/// \</a\>  
/// \</summary\>  
void ClearWatch\(double watchId\);  
/// \<summary\>  
/// Source generated implementation of /// \<c\>window.navigator.geolocation.getCurrentPosition\</c\>.  
/// \</summary\>  
/// \<param name="component"\>  
/// The calling Razor \(or Blazor\) component.  
/// \</param\>  
/// \<param name="onSuccessCallbackMethodName"\>  
/// Expects the name of a \<c\>"JSInvokableAttribute"\</c\> C\#  
method  
/// with the following \<c\>System.Action\{GeolocationPosition\}"  
\</c\>.  
/// \</param\>  
/// \<param name="onErrorCallbackMethodName"\>  
/// Expects the name of a \<c\>"JSInvokableAttribute"\</c\> C\#  
method  
/// with the following  
\<c\>System.Action\{GeolocationPositionError\}"\</c\>.  
/// \</param\>  
/// \<param name="options"\>The \<c\>PositionOptions\</c\> value.  
\</param\>  
void GetCurrentPosition\<TComponent\>\(  
TComponent component,  
string onSuccessCallbackMethodName,  
string? onErrorCallbackMethodName = null,  
PositionOptions? options = null\)  
where TComponent \: class;  
/// \<summary\>  
/// Source generated implementation of  
/// \<c\>window.navigator.geolocation.watchPosition\</c\>.  
/// \</summary\>  
/// \<param name="component"\>  
/// The calling Razor \(or Blazor\) component.  
/// \</param\>  
/// \<param name="onSuccessCallbackMethodName"\>  
/// Expects the name of a \<c\>"JSInvokableAttribute"\</c\> C\#  
method  
/// with the following \<c\>System.Action\{GeolocationPosition\}"  
\</c\>.  
/// \</param\>  
/// \<param name="onErrorCallbackMethodName"\>  
/// Expects the name of a \<c\>"JSInvokableAttribute"\</c\> C\#  
method  
/// with the following  
\<c\>System.Action\{GeolocationPositionError\}"\</c\>.  
/// \</param\>  
/// \<param name="options"\>The \<c\>PositionOptions\</c\> value.  
/// \</param\>  
double WatchPosition\<TComponent\>\( TComponent component,  
string onSuccessCallbackMethodName,  
string? onErrorCallbackMethodName = null,  
PositionOptions? options = null\)  
where TComponent \: class;  
\}  
The ClearWatch method accepts a double watchId, which is the  
value returned by the WatchPosition method.  
The GetCurrentPosition method accepts a TComponent  
component, which is the calling Razor \(or Blazor\) component. The WatchPosition method accepts a TComponent component,  
which is the calling Razor \(or Blazor\) component.  
The TComponent parameters are used to call the  
onSuccessCallbackMethodName and  
onErrorCallbackMethodName methods. These method names need  
to be methods that are attributed with the JSInvokableAttribute  
attribute. The method signatures are detailed in the generated triple-slash  
comments. This is great for consuming these APIs, as the source generator  
will generate the appropriate C\# method signature details based on the types  
it parsed from the corresponding TypeScript declaration.  
The implementation of this interface is generated in the  
GeolocationServices.g.cs C\# file\:  
namespace Microsoft.JSInterop;  
/// \<inheritdoc /\>  
internal sealed class GeolocationService \: IGeolocationService  
\{  
private readonly IJSInProcessRuntime \_javaScript = null;  
public GeolocationService\(IJSInProcessRuntime javaScript\)  
\{  
\_javaScript = javaScript;  
\}  
/// \<inheritdoc /\>  
void IGeolocationService.ClearWatch\(double watchId\)  
\{  
\_javaScript.InvokeVoid\(  
"window.navigator.geolocation.clearWatch", watchId\);  
\}  
/// \<inheritdoc /\>  
void IGeolocationService.GetCurrentPosition\<TComponent\>\(  
TComponent component,  
string onSuccessCallbackMethodName,  
string? onErrorCallbackMethodName,  
PositionOptions? options\)  
\{  
\_javaScript.InvokeVoid\(  
"blazorators.getCurrentPosition",  
DotNetObjectReference.Create\<TComponent\>\(component\),  
onSuccessCallbackMethodName,  
onErrorCallbackMethodName,  
options\);  
\}  
/// \<inheritdoc /\>  
double IGeolocationService.WatchPosition\<TComponent\>\(  
TComponent component,  
string onSuccessCallbackMethodName,  
string? onErrorCallbackMethodName,  
PositionOptions? options\)  
\{  
return \_javaScript.Invoke\<double\>\(  
"blazorators.watchPosition",  
new object\[4\]  
\{  
DotNetObjectReference.Create\<TComponent\>  
\(component\),  
onSuccessCallbackMethodName,  
onErrorCallbackMethodName,  
options  
\}\);  
\}  
\}  
The GeolocationService constructor accepts a  
IJSInProcessRuntime javaScript, which is the JavaScript runtime  
specific to Blazor WebAssembly execution model.  
The IGeolocationService.ClearWatch method accepts a  
double watchId, and delegates to the  
"window.navigator.geolocation.clearWatch" JavaScript  
method. The IGeolocationService.GetCurrentPosition method  
delegates to the "blazorators.getCurrentPosition"  
JavaScript method. The IGeolocationService.WatchPosition method delegates  
to the "blazorators.watchPosition" JavaScript method.  
The DotNetObjectReference is used to create a reference to the  
component, which is used to invoke the callback methods. For the  
GetCurrentPosition and WatchPosition methods, the callback  
arguments are used internally within the delegated JavaScript along with the  
created component reference. At the time of writing, the source generator  
was not capable of generating the JavaScript code for the  
"blazorators" object, but it is something I planned on attempting to  
implement. Instead, the JavaScript for these two methods is hand-written.  
Consider the blazorators.geolocation.js JavaScript file\:  
const onSuccess = \(dotnetObj, successMethodName, position\) =\> \{  
const result = \{  
Timestamp\: position.timestamp,  
Coords\: \{  
Accuracy\: position.coords.accuracy,  
Altitude\: position.coords.altitude,  
AltitudeAccuracy\: position.coords.altitudeAccuracy,  
Heading\: position.coords.heading,  
Latitude\: position.coords.latitude,  
Longitude\: position.coords.longitude,  
Speed\: position.coords.speed  
\}  
\};  
dotnetObj.invokeMethod\(successMethodName, result\);  
dotnetObj.dispose\(\);  
\};  
const onError = \(dotnetObj, errorMethodName, error\) =\> \{  
const result = \{  
Code\: error.code,  
Message\: error.message,  
PERMISSION\_DENIED\: error.PERMISSION\_DENIED,  
POSITION\_UNAVAILABLE\: error.POSITION\_UNAVAILABLE,  
TIMEOUT\: error.TIMEOUT  
\}; dotnetObj.invokeMethod\(errorMethodName, result\);  
dotnetObj.dispose\(\);  
\};  
const getCurrentPosition = \(  
dotnetObj,  
successMethodName,  
errorMethodName,  
options\) =\> \{  
navigator.geolocation.getCurrentPosition\(  
position =\> onSuccess\(dotnetObj, successMethodName,  
position\),  
error =\> onError\(dotnetObj, errorMethodName, error\),  
options\);  
\}  
const watchPosition = \(  
dotnetObj,  
successMethodName,  
errorMethodName,  
options\) =\> \{  
return navigator.geolocation.watchPosition\(  
position =\> onSuccess\(dotnetObj, successMethodName,  
position\),  
error =\> onError\(dotnetObj, errorMethodName, error\),  
options\);  
\}  
window.blazorators = \{  
getCurrentPosition,  
watchPosition  
\};  
The onSuccess callback method is a helper method. It’s called by the  
getCurrentPosition success callback.  
The onError callback method is a helper method. It’s called by the  
watchPosition error callback.  
The getCurrentPosition method accepts a  
DotNetObjectReference dotnetObj, which is the reference to the  
component, and a string successMethodName, which is the  
name of the method to invoke on the component. The options  
parameter is a PositionOptions object, which contains the options  
for the current position request. The watchPosition method accepts a  
DotNetObjectReference dotnetObj, which is the reference to the component, and a string successMethodName, which is the  
name of the method to invoke on the component. The options  
parameter is a PositionOptions object, which contains the options  
for the current position request. The blazorators object is used to invoke the  
getCurrentPosition and watchPosition methods.  
The follow types are source generated by the source generator\:  
GeolocationPosition  
GeolocationPositionError  
GeolocationCoordinates  
PositionOptions  
This means that as a developer, you’d consume the  
Blazor.Geolocation.WebAssembly library, call the  
AddGeolocationServices method, and then use the  
IGeolocationService interface to call the methods. The types for the  
callbacks are also available. This is a huge win, and it provides a great  
example of bindings between JavaScript and the .NET world.  
You may recall that in the WeatherComponent discussion in Chapter 3  
we discussed a manual JavaScript interop implementation of the  
geolocation. While this is intentional for education, you could refactor  
the manual implementation out and instead use the  
Blazor.Geolocation.WebAssembly library.  
In the next section, we’ll look at how to use the  
Blazor.LocalStorage.WebAssembly NuGet package to access the  
localStorage API in the application code.  
Example Usage of the ILocalStorageService The app provides several bits of functionality that rely on the ability for the  
app-state to be persisted beyond the users’ session. For example, the user’s  
preferred language, and the user’s preferred audio description settings such  
as voice speed and speech synthesis voice. These values are persisted in the  
localStorage and are restored when the user revisits the site.  
In chapter 4, we discussed the AudioDescriptionComponent in  
passing. The AudioDescriptionComponent is a component that  
allows the user to configure the speech synthesis settings. When the user  
configures the audio description settings, the  
AudioDescriptionComponent is relying on the  
AppInMemoryState class. The AppInMemoryState is used as a  
service and was discussed in chapter 2. It exposes a  
ClientVoicePreference property that is used to persist the user’s  
preferred voice settings. Consider the following ClientVoicePreference.cs  
record class\:  
public record class ClientVoicePreference\(  
\[property\: JsonPropertyName\("voice"\)\] string Voice,  
\[property\: JsonPropertyName\("voiceSpeed"\)\] double  
VoiceSpeed\);  
The ClientVoicePreference record has two properties, Voice and  
VoiceSpeed. The Voice property is the name of the voice that the user  
has selected. The VoiceSpeed property is the speed at which the voice is  
spoken. The value of this client preference is persisted in the  
localStorage as a JSON string. For example, the following JSON  
string would represent the user’s preferred voice settings\:  
\{  
"voice"\: "Microsoft Zira - English \(United States\)",  
"voiceSpeed"\: 1.5  
\}  
When this value is present in localStorage, the  
AudioDescriptionComponent will use it to initialize the ClientVoicePreference property of the AppInMemoryState.  
Consider a trimmed down version of the AppInMemoryState.cs class,  
focusing on the ClientVoicePreference property\:  
namespace Learning.Blazor.Services;  
public sealed class AppInMemoryState  
\{  
private readonly ILocalStorageService \_localStorage;  
private ClientVoicePreference? \_clientVoicePreference;  
// Omitted for brevity...  
public AppInMemoryState\(ILocalStorageService localStorage\) =\>  
\_localStorage = localStorage;  
public ClientVoicePreference ClientVoicePreference  
\{  
get =\> \_clientVoicePreference ??=  
\_localStorage.GetItem\<ClientVoicePreference\>\(  
StorageKeys.ClientVoice\) ?? new\("Auto", 1\);  
set  
\{  
\_localStorage.SetItem\(  
StorageKeys.ClientVoice,  
\_clientVoicePreference = value ?? new\("Auto",  
1\)\);  
AppStateChanged\(\);  
\}  
\}  
// Omitted for brevity...  
\}  
The ILocalStorageService type is injected into the  
AppInMemoryState class.  
The ClientVoicePreference property is read from  
\_localStorage if it’s not already present in the  
AppInMemoryState instance.  
The class exposes a ClientVoicePreference property that is used to  
persist the user’s preferred voice settings. The ClientVoicePreference property is read from  
AudioDescriptionComponent to initialize itself. Next, we’ll look at  
the AudioDescriptionComponent that allows the user to configure  
the speech synthesis settings. Consider the following  
AudioDescriptionComponent.cs C\# class\:  
namespace Learning.Blazor.Components  
\{  
public sealed partial class AudioDescriptionComponent  
\{  
private readonly IList\<double\> \_voiceSpeeds =  
Enumerable.Range\(0, 12\).Select\(i =\> \(i + 1\) \*  
.25\).ToList\(\);  
private IList\<SpeechSynthesisVoice\> \_voices = null!;  
private string \_voice = "Auto";  
private double \_voiceSpeed = 1;  
private ModalComponent \_modal = null!;  
protected override async Task OnAfterRenderAsync\(bool  
firstRender\)  
\{  
if \(firstRender\)  
\{  
\(\_voice, \_voiceSpeed\) =  
AppState.ClientVoicePreference;  
\_details = new AudioDescriptionDetails\(  
AppState,  
\_voiceSpeeds,  
\_voices,  
\_voice,  
\_voiceSpeed\);  
await UpdateClientVoices\(  
await JavaScript.GetClientVoicesAsync\(  
this, nameof\(UpdateClientVoices\)\)\);  
\}  
\}  
\[JSInvokable\]  
public Task UpdateClientVoices\(string voicesJson\) =\>  
InvokeAsync\(\(\) =\>  
\{ var voices =  
voicesJson.FromJson\<List\<SpeechSynthesisVoice\>\>\(\);  
if \(voices is \{ Count\: \> 0 \}\)  
\{  
\_voices = voices;  
StateHasChanged\(\);  
\}  
\}\);  
private async Task ShowAsync\(\) =\> await  
\_modal.ShowAsync\(\);  
private void OnDetailsSaved\(AudioDescriptionDetails  
details\)  
\{  
// Noop...but explicit, these values are the same.  
\_details = details with \{ \};  
AppState.ClientVoicePreference =  
new ClientVoicePreference\(\_details.Voice,  
\_details.VoiceSpeed\);  
Logger.LogInformation\(  
"There are \{Length\} item in localStorage.",  
LocalStorage.Length\);  
\}  
\}  
public readonly record struct AudioDescriptionDetails\(  
AppInMemoryState AppState,  
IList\<double\> VoiceSpeeds,  
IList\<SpeechSynthesisVoice\> Voices,  
string Voice,  
double VoiceSpeed\);  
\}  
The \_voiceSpeeds property is an array of doubles that is used to  
populate the Voice Speed slider.  
The \_voice and \_voiceSpeed fields are assigned from  
AppState.ClientVoicePreference, which comes from  
localStorage. The available voices are retrieved from the callback registered in the  
JavaScript.GetClientVoicesAsync call.  
The ClientVoicePreference property is written to  
localStorage when it’s changed. The AudioDescriptionDetails struct is a read-only record type  
that is used to initialize the AudioDescriptionComponent’s  
\_details field.  
The AudioDescriptionComponent represents various bits of  
functionality that rely on the ability for the app-state to be persisted beyond  
the users’ session. This is an important detail, as it differs from session-  
based storage. There are two implementations of the JavaScript Storage  
interface, the localStorage and the sessionStorage. The session  
storage implementation is only for a single tab life. When the tab is closed,  
the session’s storage is gone forever. For example, the user’s preferred  
language, and the user’s preferred audio description settings such as voice  
speed and speech synthesis voice. These values are persisted in the  
localStorage and are restored when the user revisits the site.  
@inherits LocalizableComponentBase\<AudioDescriptionComponent\>  
\<span class="navbar-item"\>  
\<button class="button is-info is-rounded level-item"  
title=@Localizer\["Audio"\] @onclick=ShowAsync\>  
\<span class="icon"\>  
\<i class="fas fa-lg fa-audio-description"\>\</i\>  
\</span\>  
\</button\>  
\</span\>  
\<AudioDescriptionModalComponent  
@ref="\_modal"  
Title=@Localizer\["Settings"\]  
Details=@\_details  
OnDetailsSaved=@OnDetailsSaved/\>  
The AudioDescriptionComponent uses the  
LocalizableComponentBase class to provide localization  
support. The majority of the markup is the button within the navigation bar.  
The AudioDescriptionModalComponent is the modal that is  
displayed when the user clicks the audio description button. When the user clicks the audio description button, ShowAsync is called  
and the AudioDescriptionModalComponent is displayed. The  
AudioDescriptionModalComponent is a simple modal that allows  
the user to configure the speech synthesis settings. A reference to the  
AudioDescriptionModalComponent is stored in the \_modal field  
using the @ref attribute. The \_details field is initialized with the  
current values from AppState.ClientVoicePreference and  
passed to the AudioDescriptionModalComponent. The  
AudioDescriptionModalComponent exposes a  
OnDetailsSaved event that is handled by the  
AudioDescriptionComponent’s OnDetailsSaved method. Let’s  
now look at the AudioDescriptionModalComponent.cs C\# class.  
namespace Learning.Blazor.Components  
\{  
public sealed partial class AudioDescriptionModalComponent  
\{  
\[Parameter, EditorRequired\]  
public AudioDescriptionDetails Details \{ get; set; \}  
\[Parameter, EditorRequired\]  
public string Title \{ get; set; \} = null!;  
\[Parameter, EditorRequired\]  
public EventCallback\<AudioDescriptionDetails\>  
OnDetailsSaved  
\{  
get;  
set;  
\}  
private string \_voice = null!;  
private ModalComponent \_modal = null!;  
protected override void OnParametersSet\(\) =\> \_voice =  
Details.Voice;  
private void OnVoiceSpeedChange\(ChangeEventArgs args\) =\>  
Details = Details with  
\{  
VoiceSpeed = double.TryParse\( args?.Value?.ToString\(\) ?? "1", out var  
speed\) ? speed \: 1  
\};  
internal async Task ShowAsync\(\) =\> await  
\_modal.ShowAsync\(\);  
internal async Task ConfirmAsync\(\)  
\{  
if \(OnDetailsSaved.HasDelegate\)  
\{  
await OnDetailsSaved.InvokeAsync\(  
Details = Details with \{ Voice = \_voice \}\);  
\}  
await \_modal.ConfirmAsync\(\);  
\}  
\}  
\}  
The Details property is a lightweight readonly record  
struct type.  
The OnDetailsSaved event is an EventCallback that is invoked  
when the user clicks the Confirm button.  
The \_voice field is assigned from the Details property when the  
component’s parameters are set.  
The VoiceSpeed property is updated when the user changes the value  
in the slider.  
The ConfirmAsync method is invoked when the user clicks the  
Confirm button.  
The AudioDescriptionModalComponent depends on the user’s  
preferred ClientVoicePreference to be persisted. This is a very  
important detail, as it differs from session-based storage. There are two  
implementations of the JavaScript Storage interface, the  
localStorage and the sessionStorage. The app is only concerned  
with localStorage data persistence. Finally, we’re looking at the  
AudioDescriptionModalComponent Razor markup, that’s defined  
in the AudioDescriptionModalComponent.razor file\:  
@inherits  
LocalizableComponentBase\<AudioDescriptionModalComponent\> \<ModalComponent @ref="\_modal"\>  
\<TitleContent\>  
\<span class="icon pr-2"\>  
\<i class="fas fa-cogs"\>\</i\>  
\</span\>  
\<span\>@Title\</span\>  
\</TitleContent\>  
\<BodyContent\>  
\<form\>  
info"  
\<div class="field"\>  
\<label for="range"\>  
Voice speed\: @Details.VoiceSpeed  
\</label\>  
\<input type="range"  
min="@Details.VoiceSpeeds.Min\(\)"  
max="@Details.VoiceSpeeds.Max\(\)"  
step=".25" class="slider is-fullwidth is-  
id="range" list="speeds"  
value="@Details.VoiceSpeed"  
@onchange=@OnVoiceSpeedChange\>  
\<datalist id="speeds"\>  
@foreach \(var speed in Details.VoiceSpeeds\)  
\{  
\<option value="@speed"\>speed\</option\>  
\}  
\</datalist\>  
\</div\>  
\<div class="field"\>  
\<p class="control has-icons-left"\>  
\<span class="select is-medium is-fullwidth"\>  
\<select id="voices" class="has-dotnet-  
scrollbar"  
\</option\>  
Details.Voices\)  
@bind=\_voice\>  
\<option selected\>@Localizer\["Auto"\]  
@if \(Details.Voices is \{ Count\: \> 0 \}\)  
\{  
@foreach \(var voice in  
\{  
\<option selected="@voice.Default"  
value="@voice.Name"\>  
@voice.Name  
\</option\>  
\} \}  
\</select\>  
\</span\>  
\<span class="icon is-small is-left"\>  
\<i class="fas fa-globe"\>\</i\>  
\</span\>  
\</p\>  
\</div\>  
\</form\>  
\</BodyContent\>  
\<ButtonContent\>  
\<button class="button is-success is-large"  
@onclick=ConfirmAsync\>  
\<span class="icon"\>  
\<i class="fas fa-check"\>\</i\>  
\</span\>  
\<span\>@Localizer\["Okay"\]\</span\>  
\</button\>  
\</ButtonContent\>  
\</ModalComponent\>  
The ModalComponent is a reusable component that is used to display  
a modal. The form element is used to provide a form with a slider and a  
dropdown. The slider is used to control the voice speed. The dropdown  
is used to select the voice. The input is a range type element used to control the voice speed.  
The datalist element is used to provide a list of voice speeds.  
The select element is used to select the voice.  
The option element is used to provide a list of voices from all the  
voices AudioDescriptionDetails.Voices available.  
The "Okay" button element will call ConfirmAsync when the  
user clicks it.  
This form is an example of how to use Blazor for two-way binding without  
using the EditContext. The @bind attribute is used to bind the  
\_voice field to the Details property. The @onchange attribute is used  
to update the Details property when the user changes the value in the  
slider, or when the user changes the value in the dropdown. When the user  
alters these values and closes the \_modal, the  
ILocalStorageService implementation will be used to persist the  
user’s preferred ClientVoicePreference value. In the next chapter, we’re going to cover advanced form techniques that use the  
EditContext to provide two-way binding.  
# Summary  
In this chapter, I made a case for source generators, C\# code that writes C\#  
code. I introduced you to the possibilities of source generating entire  
consumable libraries of JavaScript interop functionality, thanks to  
blazorators and its ability to provide the  
Blazor.LocalStorage.WebAssembly NuGet package. In the next  
chapter, I’m going to teach you how to do Blazor forms. I’ll demonstrate to  
you how to validate user input, and how to customize the user experience.  
You’ll learn how to use the framework-provided EditForm component.  
In the next chapter, you’ll learn how to use handle native Speech  
Recognition, using a custom  
AdditiveSpeechRecognitionComponent. This example covers  
the System.Reactive.Linq library, which provides a simple way to  
subscribe to events from the browser. It uses the reactive programming  
model to handle events — where we’ll use a subject to act as both observer  
and observable objects. We’ll show how to manage streaming multiple  
callbacks from JavaScript to .NET directional, JavaScript interop. You’ll  
see how to handle validation, and how to customize the user experience.  
1 MDN Web Docs\: Window.localStorage  
https\://developer.mozilla.org/docs/Web/API/Window/localStorage\#example Chapter 8. Accepting Form  
# Input with Validation  
A NOTE FOR EARLY RELEASE READERS  
With Early Release ebooks, you get books in their earliest form—the  
author’s raw and unedited content as they write—so you can take  
advantage of these technologies long before the official release of these  
titles.  
This will be the eighth chapter of the final book. Please note that the  
GitHub repo will be made active later on.  
If you have comments about how we might improve the content and/or  
examples in this book, or if you notice missing material within this  
chapter, please reach out to the editor at rfernando@oreilly.com.  
In this chapter, you’ll learn how to use the framework-provided components  
for accepting form input to bind custom C\# models to the EditForm  
component. We’ll cover native speech recognition when used in forms.  
You’ll also learn how to use reactive extensions with Rx.NET. The model  
app’s contact page form will demonstrate all of this.  
Let’s start with how form submission is used to accept and validate user  
input. You’ll see how valid user input can be sent to HTTP endpoints for  
processing.  
# The Basics Of Form Submission  
The core functionality of an HTML form element is to accept and validate  
user input. When a user’s input is invalid, the user should be notified. When there is valid input, submit that input to an HTTP endpoint to process. The  
form submission process is as follows\:  
1\. The form is presented to the user to fill out.  
2\. The user fills out the form and attempts to submit it.  
3\. The form is validated.  
a. If the form is invalid, validation messages or errors are shown to  
the user.  
b. If the form is valid, the input is sent off for processing.  
Between these steps, the user interacts with the form in various ways,  
sometimes by typing, sometimes by clicking, sometimes by selecting a  
radio button, etc. When the form is invalid the state of the form can  
display validation messages or errors to the user. A form can accept many  
different types of user input. We can apply dynamic CSS to desirable input  
elements to indicate that the user has entered invalid input. We can control  
which element has focus, and we can set elements as disabled or make  
them readonly. These styles include animations to emphasize errant  
conditions and draw the user’s attention to a specific area.  
# Framework-provided Components For Forms  
Blazor provides many components that apply a layer atop native HTML  
elements. One such component is EditForm. The EditForm component  
is designed to be used as a wrapper around the native HTML form  
element. This is what’s used in the Contact form of the book’s model  
app. There are other framework-provided components as well. In the next  
section, you’ll see the various framework-provided components that can be  
used with the EditForm.  
Table 8-1 shows the various framework-provided components that can be  
used with the EditForm component. 1 T  
a  
b  
l  
e  
8  
-  
1  
.  
F  
r  
a  
m  
e  
w  
o  
r  
k  
-  
p  
r  
o  
v  
i  
d  
e  
d  
f  
o  
r  
m c  
o  
m  
p  
o  
n  
e  
n  
t  
s  
Blazor component HTML element wrapped Purpose of component  
EditForm \<form\> Provides a wrapper around the native HTML for  
m element.  
Accepts user input for either true or false.  
InputCheckbox \<input type="chec  
kbox"\>  
InputDate\<TVa  
lue\>  
\<input type="dat  
e"\>  
Accepts a DateTime value as user input.  
InputFile \<input type="fil  
e"\>  
Accepts a file upload.  
InputNumber\<T  
Value\>  
\<input type="numb  
er"\>  
Accepts a numeric value as user input.  
InputRadio\<TV  
alue\>  
\<input type="radi  
o"\>  
Accepts a mutually exclusive, set of values  
representing a single choice.  
InputRadioGro  
up\<TValue\>  
InputSelect\<T  
Value\>  
InputText Parent of one or more In  
putRadio\<TValue\>  
components.  
This semantically wraps the InputRadio\<TVal  
ue\> components together such that they’re  
mutually exclusive.  
\<select\> Accepts a TValue value as user input from a list  
of custom options.  
\<input type="tex Accepts a string value as user input. InputTextArea t"\>  
\<textarea\> Accepts a string value as user input, but  
traditionally displays and expects larger values  
than the InputText component.  
Using these aforementioned components, you can build out a form that is as  
rich and as complex as your app needs.  
In the next section, I’ll show you how to build a model that will represent  
the state of the form and the user interacting with it. This model will be  
decorated with metadata that will power the validation of the form it binds  
to.  
# Models And Data Annotations  
One of the very common use cases for forms is to give the end user a way  
to contact someone from within the app for various reasons. The Contact  
form of the Learning Blazor app does exactly that. The user can fill out the  
form and send me, the owner of the app, a message. After they hit send and  
confirm that they’re human, the message is sent to me as an email. We’ll go  
over how this works throughout the chapter.  
Let’s start by going through the form’s user inputs\:  
1\. The user’s email address \(current user of the app, which is pre-filled if  
the user is logged in\).  
2\. The user’s first and last name, as a pair.  
3\. The subject of the message, or the reason they’re contacting through  
the app.  
4\. The message input uses a TextArea component and some interesting  
JavaScript interop. The message input exposes a microphone button  
that toggles speech recognition. As a visual point of reference, consider Figure 8-1. Figure 8-1. An example rendering of the Contact page.  
Defining Component Models  
As part of the form submission process, the EditForm will validate the  
user’s input. The EditForm will also display validation messages and  
errors. This is all based on either an EditContext or a model. A model  
is a C\# class used to bind to properties and represent relevant values. In the  
case of the Contact page, it’s using an EditContext to manage the  
state of the form. And the EditContext relies on a corresponding model.  
Let’s take a look at the ContactComponentModel in the  
ContactComponentModel.cs C\# file, which is responsible for representing  
the state of the form\:  
namespace Learning.Blazor.ComponentModels;  
public record ContactComponentModel\(\)  
\{  
\[Required\]  
public string? FirstName \{ get; set; \} = null!;  
\[Required\]  
public string? LastName \{ get; set; \} = null!;  
\[RegexEmailAddress\(IsRequired = true\)\]  
public string? EmailAddress \{ get; set; \} = null!;  
\[Required\]  
public string? Subject \{ get; set; \} = null!;  
\[RequiredAcceptance\]  
public bool AgreesToTerms \{ get; set; \}  
\[Required\]  
public string? Message \{ get; set; \} = null!;  
public AreYouHumanMath NotRobot \{ get; \} =  
AreYouHumanMath.CreateNew\(MathOperator.Subtraction\);  
public string RobotQuestion =\> NotRobot.GetQuestion\(\); public static implicit operator ContactRequest\(  
ContactComponentModel model\) =\>  
new\(model.FirstName!,  
model.LastName!,  
model.EmailAddress!,  
model.Subject!,  
model.Message!\);  
\}  
The model is a record type.  
The FirstName and LastName properties are required, per the  
Required attribute.  
The EmailAddress property is required and it must be a valid email  
address. The AgreesToTerms property is required as true.  
The NotRobot property is a readonly property that is calculated  
from the AreYouHumanMath class.  
The record defines an operator to convert to a ContactRequest.  
This model exposes the values that the user is expected to provide. The  
user’s first and last name are required, as well as a valid email address. The  
Required attribute is a framework-provided data annotation attribute that  
is used to indicate that the user must provide a value for the property. If the  
user doesn’t provide a value, and they attempt to either submit the form or  
navigate away from the underlying HTML element, the EditForm will  
display an error message. C\# attributes are used to provide additional  
information about the thing they’re applied to.  
Defining And Consuming Validation Attributes  
The RegexEmailAddress attribute is a custom attribute that is used to  
indicate that the user must provide a valid email address. When decorating a  
model property, this attribute will validate it as an email address. The  
RequiredAcceptance attribute is a custom attribute that is used to  
indicate that the user must accept the terms and conditions. You can use all  
sorts of attributes to define objects. The Message property is required, as  
is the Subject property. Let’s take a look at the RegexEmailAddress attribute implementation  
in the RegexEmailAddressAttribute.cs C\# file\:  
using System.Text.RegularExpressions;  
namespace Learning.Blazor.DataAnnotations;  
\[  
AttributeUsage\(  
AttributeTargets.Property |  
AttributeTargets.Field |  
AttributeTargets.Parameter,  
AllowMultiple = false\)  
\]  
public sealed class RegexEmailAddressAttribute \:  
DataTypeAttribute  
\{  
internal static readonly Regex EmailExpression =  
new\("\^\(\[a-zA-Z0-9\_\\\\-\\\\.\]+\)@" +  
"\(\(\\\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)" +  
"|\(\(\[a-zA-Z0-9\\\\-\]+\\\\.\)+\)\)\(\[a-zA-Z\]\{2,4\}|\[0-9\]\{1,3\}\)  
\(\\\\\]?\)\$",  
RegexOptions.CultureInvariant |  
RegexOptions.Singleline\);  
/// \<summary\>  
/// Gets or sets a value indicating if an email is required.  
/// \</summary\>  
/// \<remarks\>Defaults to \<c\>true\</c\>.\</remarks\>  
public bool IsRequired \{ get; set; \} = true;  
public RegexEmailAddressAttribute\(\)  
\: base\(DataType.EmailAddress\)  
\{  
\}  
\{  
public override bool IsValid\(object? value\)  
if \(value is null\)  
\{  
return !IsRequired;  
\}  
return value is string valueAsString  
&& EmailExpression.IsMatch\(valueAsString\); \}  
\}  
The AttributeUsage decorator specifies the usage of another  
attribute class, in this case, the RegexEmailAddressAttribute,  
which only applies to properties, fields, and parameters. The EmailExpression is a readonly Regex instance that is  
used to validate the email address. The IsRequired property allows the developer to determine whether  
or not an email address is required at all. The constructor calls its based constructor with the  
DataType.EmailAddress value.  
The IsValid method is used to validate the email address, which is  
passed as a nullable object?.  
Blazor developers can author a custom DataTypeAttribute. If the user  
enters an email address that doesn’t match the regular expression, the  
EditForm will display an error message. If the value is null and the  
IsRequired property is true, the EditForm will display an error  
message. The other custom attribute is the  
RequireAcceptanceAttribute. This attribute is used to indicate  
that the user must accept the terms and conditions.  
Next, let’s look at the RequiredAcceptanceAttribute, which is  
defined in the RequiredAcceptanceAttribute.cs C\# file\:  
namespace Learning.Blazor.DataAnnotations;  
\[  
AttributeUsage\(  
AttributeTargets.Property |  
AttributeTargets.Field |  
AttributeTargets.Parameter,  
AllowMultiple = false\)  
\]  
public sealed class RequiredAcceptanceAttribute \:  
DataTypeAttribute  
\{  
public RequiredAcceptanceAttribute\(\)  
\: base\(DataType.Custom\)  
\{  
\} public override bool IsValid\(object? value\)  
\{  
if \(value is null\)  
\{  
return false;  
\}  
return bool.TryParse\(value.ToString\(\), out var  
isAccepted\)  
&& isAccepted;  
\}  
\}  
The RequiredAcceptanceAttribute is very similar to the  
RegexEmailAddressAttribute.  
The constructor calls the DataTypeAttribute base constructor  
with the DataType.Custom value.  
The IsValid method is used to validate the acceptance of the terms  
and conditions.  
If the user doesn’t accept the terms and conditions, the EditForm will  
display an error message. When the object that represents the value is  
null, or the value is false, the error condition is triggered. You’re free  
to create any custom business logic rules that you may require. Whenever  
you need to accept user input, you’ll start with modeling an object that  
represents your needs. You’ll attribute the model’s properties with either  
custom or framework-provided data annotations. In the next section, we’ll  
put this into practice and see how a model is bound to the form components.  
# Implementing A Contact Form  
The markup for the Contact page is a bit lengthy, but it contains a fair  
number of user inputs with various functionality and validation  
requirements. To animate the controls and provide the appropriate styles  
when user input is in a state of error, the form needs a bit more markup than  
a semantic form. The page markup is contained in the Contact.cshtml Razor  
file\: @page "/contact"  
@attribute \[AllowAnonymous\]  
@inherits LocalizableComponentBase\<Contact\>  
\<PageTitle\>@Localizer\["Contact"\]\</PageTitle\>  
\<section class="section"\>  
\<h1 class="is-size-3 pb-3"\>@Localizer\["Contact"\]\</h1\>  
\<EditForm class="pb-4" Context="cxt"  
EditContext="\_editContext"  
OnValidSubmit=@\(async c =\> await  
OnValidSubmitAsync\(c\)\)\>  
\<DataAnnotationsValidator /\>  
\<!-- Email address --\>  
\<FieldInput\>  
\<FieldLabelContent\>  
@Localizer\["Email"\]  
\<i class="pl-4 far fa-lg  
@cxt.GetValidityCss\(\(\) =\>  
\_model.EmailAddress\)"\>\</i\>  
\</FieldLabelContent\>  
\<FieldControlContent\>  
\<InputText @ref="\_emailInput"  
@bind-Value="\_model.EmailAddress"  
class="input"  
readonly=@\_isEmailReadonly  
disabled=@\_isEmailReadonly  
placeholder="@Localizer\["EmailPlaceholder"\]"  
/\>  
\<span class="icon is-small is-left"\>  
\<i class="fas fa-envelope"\>\</i\>  
\</span\>  
\</FieldControlContent\>  
\</FieldInput\>  
\<!-- First and last name --\>  
\<div class="field is-horizontal"\>  
\<div class="field-label is-normal"\>  
\<label class="label"\>  
@Localizer\["From"\]  
\<i class="pl-4 far fa-lg  
@cxt.GetValidityCss\(  
\(\) =\> \_model.FirstName,  
\(\) =\> \_model.LastName\)"\>\</i\>  
\</label\>  
\</div\>  
\<div class="field-body"\> left"\>  
class="input"  
/\>  
\<div class="field"\>  
\<p class="control is-expanded has-icons-  
\<InputText @ref="\_firstNameInput"  
@bind-Value="\_model.FirstName"  
placeholder="@Localizer\["FirstName"\]"  
\<span class="icon is-small is-left"\>  
\<i class="fas fa-user"\>\</i\>  
\</span\>  
left"\>  
\</p\>  
\</div\>  
\<div class="field"\>  
\<p class="control is-expanded has-icons-  
\<InputText @bind-Value="\_model.LastName"  
class="input"  
placeholder="@Localizer\["LastName"\]" /\>  
\<span class="icon is-small is-left"\>  
\<i class="fas fa-user"\>\</i\>  
\</span\>  
\</p\>  
\</i\>  
\</div\>  
\</div\>  
\</div\>  
\<!-- Subject --\>  
\<FieldInput\>  
\<FieldLabelContent\>  
@Localizer\["Subject"\]  
\<i class="pl-4 far fa-lg  
@cxt.GetValidityCss\(\(\) =\> \_model.Subject\)"\>  
\</FieldLabelContent\>  
\<FieldControlContent\>  
\<InputText @bind-Value="\_model.Subject"  
class="input"  
placeholder="@Localizer\["SubjectPlaceholder"\]" /\>  
\<span class="icon is-small is-left"\>  
\<i class="fas fa-info-circle"\>\</i\>  
\</span\>  
\</FieldControlContent\>  
\</FieldInput\>  
\<!-- Message --\>  
\<FieldInput ControlClasses=@\(Array.Empty\<string\>\(\)\)\>  
\<FieldLabelContent\> @Localizer\["Message"\]  
\<i class="pl-4 far fa-lg  
@cxt.GetValidityCss\(\(\) =\> \_model.Message\)"\>  
\</i\>  
\</FieldLabelContent\>  
\<FieldControlContent\>  
\<AdditiveSpeechRecognitionComponent  
SpeechRecognitionStarted=OnRecognitionStarted  
SpeechRecognitionStopped=OnRecognitionStopped  
SpeechRecognized=OnSpeechRecognized /\>  
\<InputTextArea @bind-Value="\_model.Message"  
class="textarea"  
readonly=@\_isMessageReadonly  
disabled=@\_isMessageReadonly  
placeholder="@Localizer\["MessagePlaceholder"\]" /\>  
\</FieldControlContent\>  
\</FieldInput\>  
\<!-- Agree to terms --\>  
\<FieldInput ControlClasses=@\(Array.Empty\<string\>\(\)\)\>  
\<FieldLabelContent\>  
@Localizer\["AgreeToTerms"\]  
\<i class="pl-4 far fa-lg  
@cxt.GetValidityCss\(\(\) =\>  
\_model.AgreesToTerms\)"\>\</i\>  
\</FieldLabelContent\>  
\<FieldControlContent\>  
\<label class="checkbox"\>  
\<InputCheckbox @bind-  
Value="\_model.AgreesToTerms" /\>  
@Localizer\["TermsAndConditions"\]  
\<a href="/termsandconditions" target="\_blank"  
rel="noopener noreferrer"\>  
\<i class="fas fa-external-link-alt"\>\</i\>  
type="submit"\>  
\</a\>  
\</label\>  
\</FieldControlContent\>  
\</FieldInput\>  
\<!-- Send button --\>  
\<div class="field is-horizontal"\>  
\<div class="field-label"\>  
\<!-- Left empty for spacing --\>  
\</div\>  
\<div class="field-body"\>  
\<div class="field is-grouped"\>  
\<button class="button is-success is-large"  
\<span class="icon"\> \<i class="fas fa-paper-plane"\>\</i\>  
\</span\>  
\<span\>@Localizer\["Send"\]\</span\>  
\</button\>  
\</div\>  
\</div\>  
\</div\>  
\</EditForm\>  
\</section\>  
\<VerificationModalComponent @ref="\_modalComponent"  
VerificationAttempted=@OnVerificationAttempted /\>  
The Contact page allows anonymous users to contact the site owner.  
The EditForm is a framework-provided component that is used to  
render a form. The page model accepts an EmailAddress property, and renders an  
\<InputText\> element. The page model accepts FirstName and LastName properties, and  
renders two \<input type="text"\> elements.  
The page model accepts a Subject property, and renders an  
\<InputText\> element. The page model accepts a Message property, and renders an  
\<InputTextArea\> element. This is where the additive speech  
recognition component is rendered, and that’s detailed later in this  
chapter. The page model accepts an AgreesToTerms property, and renders a  
\<InputCheckbox\> element. The page model accepts a Send button, and renders a \<button\>  
element. The page references the VerificationModalComponent for an  
spam filter.  
The page that displays when the /contact route is requested renders as  
shown in Figure 8-2. Figure 8-2. A blank Contact page form with only the email address pre-filled.  
Let’s summarize what’s going on here. The Contact page is a form with a  
few fields. The page model is a class that contains the properties that are  
bound to the form elements. The EditForm component is a framework-  
provided component that renders an HTML form element. It requires  
either an EditContext or a Model, but not both. In this case, the  
EditContext wraps the ContactComponentModel. The model used  
in an EditContext can be any object. An EditContext holds  
metadata related to a data editing process, such as flags to indicate which  
fields have been modified and the current set of validation messages. The  
EditContext.Model will be used by the EditForm to render the  
form. The EditContext.OnValidSubmit event handler is used to  
handle the form submission. When the form is both valid and submitted, the  
Contact.OnValidSubmitAsync event handler is called. The  
DataAnnotationsValidator framework-provided component is  
used to add validation DataAnnotations support form the  
EditContext instance.  
The series of fields in the form are\:  
Email\: A FieldInput custom component bound to the model’s  
EmailAddress property.  
From\: Two horizontal fields presented as framework-provided  
InputText components, bound to the model’s FirstName and  
LastName properties. These values are both required and can alter  
the state of the validation for a shared validation icon.  
Subject\: A FieldInput custom component bound to the model’s  
Subject property.  
Message\: A FieldInput custom component bound to the model’s  
Message property, but relies on the  
AdditiveSpeechRecognitionComponent to add speech  
recognition support which is tied to an InputTextArea component. The AdditiveSpeechRecognitionComponent renders an  
overlay toggle \<button\> in the upper right-hand corner of its parent  
HTML element.  
Whether the user agrees to the terms\: A FieldInput custom  
component bound to the model’s AgreesToTerms property, and the  
framework-provided InputCheckbox component, that is used to  
render a checkbox.  
Submit form button\: At the end of the EditForm markup is a send  
\<button type="submit"\> element. When the user clicks this  
button the EditContext.OnValidSubmit event handler is  
called, if the form is valid.  
Modal dialog\: Finally, there is a  
VerificationModalComponent that is used to render a modal  
dialog that is shown when the user clicks the Send button. This serves  
as a spam filter, as it requires the user who submitted the form to  
answer a math question in string form.  
The shadow component does this because there’s a fair bit of Razor  
markup. It’s used to manage the framework-provided EditContext,  
\_model, \_emailInput, \_firstNameInput, \_modalComponent,  
and two bool values for whether the email or message input elements  
should be readonly. These are detailed in the coming sections. Since the  
contact page is attributed with AllowAnonymous it can be accessed by  
non-authenticated users, this is intentional to allow potential users of the  
app to reach out with questions.  
It is common for Razor components to use Expression\<Func\<T\>\>  
semantics \(or expression trees\) when evaluating model properties. An  
expression tree represents code as a data structure, where each node is an  
expression. Expressions look like functions but are not evaluated. Instead,  
an expression is parsed. For example, when we pass in  
\_model.EmailAddress, the Blazor library calls FieldCssClass. The expression is then parsed extracting how to evaluate both our model  
and its corresponding property value.  
As a convenience for determining which CSS classes are applicable given  
the state of a specific model’s property expression, the GetValidityCss  
extension method calculates the appropriate CSS classes for the property.  
Consider the EditContextExtensions.cs C\# file\:  
namespace Learning.Blazor.Extensions;  
public static class EditContextExtensions  
\{  
/// \<summary\>  
/// Maps the given \<paramref name="accessor"/\>  
/// expression to the resulting CSS.  
/// \</summary\>  
public static string GetValidityCss\<T\>\(  
this EditContext context,  
Expression\<Func\<T?\>\> accessor\)  
\{  
var css = context?.FieldCssClass\(accessor\);  
return GetValidityCss\(  
IsValid\(css\),  
IsInvalid\(css\),  
IsModified\(css\)\);  
\}  
/// \<summary\>  
/// Maps the given \<paramref name="accessorOne"/\> and  
/// \<paramref name="accessorTwo"/\> expressions to  
/// the resulting CSS.  
/// \</summary\>  
public static string GetValidityCss\<TOne, TTwo\>\(  
this EditContext context,  
Expression\<Func\<TOne?\>\> accessorOne,  
Expression\<Func\<TTwo?\>\> accessorTwo\)  
\{  
var cssOne = context?.FieldCssClass\(accessorOne\);  
var cssTwo = context?.FieldCssClass\(accessorTwo\);  
return GetValidityCss\(  
IsValid\(cssOne\) && IsValid\(cssTwo\),  
IsInvalid\(cssOne\) || IsInvalid\(cssTwo\),  
IsModified\(cssOne\) && IsModified\(cssTwo\)\);  
\} /// \<summary\>  
/// Maps the given validation states into corresponding CSS  
classes.  
/// \</summary\>  
public static string GetValidityCss\(  
bool isValid, bool isInvalid, bool isModified\) =\>  
\(isValid, isInvalid\) switch  
\{  
\(true, false\) when isModified =\> "fa-check-circle  
has-text-success",  
has-text-danger",  
\(false, true\) when isModified =\> "fa-times-circle  
=\> "fa-question-circle"  
\_  
\};  
private static bool IsValid\(string? css\) =\>  
IsContainingClass\(css, "valid"\) && !IsInvalid\(css\);  
private static bool IsInvalid\(string? css\) =\>  
IsContainingClass\(css, "invalid"\);  
private static bool IsModified\(string? css\) =\>  
IsContainingClass\(css, "modified"\);  
private static bool IsContainingClass\(string? css, string  
name\) =\>  
css?.Contains\(name, StringComparison.OrdinalIgnoreCase\)  
?? false;  
\}  
The Expression\<Func\<T\>\> parameter is used to access the  
model’s property.  
The Expression\<Func\<TOne\>\> and  
Expression\<Func\<TTwo\>\> parameters are used to access the  
model’s property.  
The bool parameters are used to determine the CSS class to return.  
The IsValid method is used to determine if the property is valid.  
The IsInvalid method is used to determine if the property is invalid.  
The IsModified method is used to determine if the property is  
modified.  
The EditContextExtensions class contains some extension methods  
that are used to determine the CSS class to return based on the state of the  
model’s property. The GetValidityCss method and its overloads are used to determine the CSS class to return based on the state of the model’s  
property. Using the framework-provided  
EditContextFieldClassExtensions.FieldCssClass  
extension method, we can the current CSS classes given the state of the  
corresponding expression. The GetValidityCss method is used  
throughout the markup.  
Next, let’s have a look at the Contact.razor.cs C\# file\:  
namespace Learning.Blazor.Pages  
\{  
public sealed partial class Contact  
\{  
null!;  
private EditContext \_editContext = null!;  
private ContactComponentModel \_model = new\(\);  
private InputText \_emailInput = null!;  
private InputText \_firstNameInput = null!;  
private VerificationModalComponent \_modalComponent =  
private bool \_isEmailReadonly = false;  
private bool \_isMessageReadonly = false;  
\[Inject\]  
public IHttpClientFactory HttpFactory \{ get; set; \} =  
null!;  
protected override async Task OnInitializedAsync\(\)  
\{  
// Initializes the "User" instance.  
await base.OnInitializedAsync\(\);  
InitializeModelAndContext\(\);  
\}  
\{  
private void InitializeModelAndContext\(\)  
null  
if \(User is \{ Identity.IsAuthenticated\: true \}\)  
\{  
\_model = \_model with  
\{  
EmailAddress = User.GetFirstEmailAddress\(\)  
\};  
\_isEmailReadonly = \_model.EmailAddress is not  
&&  
RegexEmailAddressAttribute.EmailExpression.IsMatch\( \_model.EmailAddress\);  
\}  
\_editContext = new\(\_model\);  
protected override async Task OnAfterRenderAsync\(bool  
firstRender\)  
\}  
\{  
\_emailInput;  
true\)  
if \(firstRender\)  
\{  
var input = \_isEmailReadonly ? \_firstNameInput \:  
await \(input?.Element?.FocusAsync\(preventScroll\:  
?? ValueTask.CompletedTask\);  
\}  
\}  
private void OnRecognitionStarted\(\) =\> \_isMessageReadonly  
= true;  
private void OnRecognitionStopped\(  
SpeechRecognitionErrorEvent? error\) =\>  
\_isMessageReadonly = false;  
private void OnSpeechRecognized\(string transcript\)  
\{  
\_model.Message = \_model.Message switch  
\{  
null =\> transcript,  
\_  
=\> \$"\{\_model.Message.Trim\(\)\}  
\{transcript\}".Trim\(\)  
\};  
\_editContext.NotifyFieldChanged\(  
\_editContext.Field\(nameof\(\_model.Message\)\)\);  
\}  
private Task OnValidSubmitAsync\(EditContext context\) =\>  
\_modalComponent.PromptAsync\(context\);  
private async Task OnVerificationAttempted\(  
\(bool IsVerified, object? State\) attempt\)  
\{  
if \(attempt.IsVerified\)  
\{  
var client = HttpFactory.CreateClient\(HttpClientNames.ServerApi\);  
using var response =  
await client.PostAsJsonAsync\<ContactRequest\>\(  
"api/contact",  
\_model,  
DefaultJsonSerialization.Options\);  
if \(response.IsSuccessStatusCode\)  
\{  
AppState?.ContactPageSubmitted?.Invoke\(\_model\);  
\_model = new\(\);  
InitializeModelAndContext\(\);  
await InvokeAsync\(StateHasChanged\);  
\}  
\}  
\}  
\}  
\}  
The EditContext instance wraps the  
ContactComponentModel.  
The OnInitializedAsync method calls the base implementation,  
which initializes the User instance, and immediately calls  
InitializeModelAndContext.  
The InitializeModelAndContext method initializes the  
\_model and \_editContext properties from the User instance.  
The OnAfterRenderAsync method determines which input element  
should be focused when the page is rendered. When the user’s email is  
present The OnRecognitionStarted method sets the  
\_isMessageReadonly property to true.  
The OnSpeechRecognized method updates the  
\_model.Message property with the transcript, and notifies the  
\_editContext instance that the Message property has changed.  
The OnValidSubmitAsync method is called when the user clicks  
the Send button.  
The OnVerificationAttempted method throws a  
ContactRequest at the Web.Api project’s  
\[HttpPost\("api/contact"\)\] endpoint. When the Contact page is initialized, the base.User instance is  
initialized as well. If there is an authenticated user, the email address is set  
as readonly and the user’s email is used. If there is no authenticated user,  
the \_model instance is initialized with an empty  
ContactComponentModel instance. When the page first is rendered,  
either the \_emailInput or \_firstNameInput element is focused.  
There are two methods responsible for managing whether or not the  
\_messageInput element is readonly. The  
OnRecognitionStarted method sets the \_isMessageReadonly  
property to true. The OnRecognitionStopped method sets the  
\_isMessageReadonly property to false. When speech is recognized  
the \_model.Message property is updated with the transcript, and the  
\_editContext instance is notified that the Message property has  
changed.  
When the user supplies all of the required inputs, the form is considered  
“valid”. At this point, the user is free to submit the form. When the form is  
submitted, the \_modalComponent instance is shown, which prompts the  
user to answer one question. If they’re able to do so, the form information is  
sent to the Web.Api project’s \[HttpPost\("api/contact"\)\]  
endpoint for processing.  
To help encapsulate a bit of common code for various field inputs, I wrote a  
FieldInput form component. This component is used throughout the  
Contact page. Let’s take a look at the FieldInput.razor Razor markup  
file\:  
\<div class="field is-horizontal"\>  
\<div class="field-label @LabelSpecifierClass"\>  
\<label class="label"\>  
@FieldLabelContent  
\</label\>  
\</div\>  
\<div class="field-body"\>  
\<div class="field @ControlSpecifierClass"\>  
\<p class="control  
@ControlClasses.ToSpaceDelimitedString\(\)"\> @FieldControlContent  
\</p\>  
\</div\>  
\</div\>  
\</div\>  
@code \{  
\[Parameter\]  
normal";  
public string? LabelSpecifierClass \{ get; set; \} = "is-  
\[Parameter\]  
public string? ControlSpecifierClass \{ get; set; \}  
\[Parameter\]  
public RenderFragment? FieldLabelContent \{ get; set; \}  
\[Parameter, EditorRequired\]  
public RenderFragment? FieldControlContent \{ get; set; \}  
\[Parameter\]  
public string\[\]? ControlClasses \{ get; set; \} = new string\[\]  
\{  
"is-expanded", "has-icons-left"  
\};  
\}  
The FieldLabelContent property is used to render the label for  
the field. The FieldControlContent property is used to render the input  
for the field. The component accepts several optional and required parameters.  
Since the label and input elements are rendered as a  
RenderFragment, the consumer is free to render whatever they want. In  
the Contact page markup, you can see examples of FieldInput  
components with the following\:  
Single framework-provided InputText component.  
Multiple framework-provided InputText components.  
A custom AdditiveSpeechRecognitionComponent  
component. Single framework-provided InputCheckbox component.  
Let’s explore a few more states that the form can be rendered as.  
In addition to the label, icons are used to help deliver even more clarity  
to validation errors. Imagine the user enters the first name, forgets to enter  
the last name, and then provides a subject. They’re free to attempt clicking  
the Send button, but the \_firstNameInput element will be highlighted  
in red, and the \_lastNameInput element will be highlighted in red. The  
\_subjectInput element will be highlighted in red, but the  
\_messageInput element will not be highlighted as shown in Figure 8-3. Figure 8-3. An example close-up rendering of an invalid Contact page.  
The user could provide a value for the last name and a message, thus  
clearing the validation errors as shown in Figure 8-4. Figure 8-4. An example close-up rendering of a valid Contact page.  
In the previous figures, you might have noticed a microphone. The message  
input element has a button rendered in the upper right-hand corner of its  
bounding box. When the user clicks the button, the \_messageInput  
element is temporarily disabled. This element accepts speech recognition as  
a form of input. The next section will show you how to incorporate speech  
recognition input into your form.  
# Implementing Speech Recognition As User  
# Input  
Speech recognition is a very commonly used input mechanism in modern  
apps, both for accessibility and overall convenience. More than 90% of web  
browsers support the speech recognition API — according to Can I use  
“Speech Recognition”. The speech recognition API allows web developers  
to acquire a transcript from a recognition session from the user’s voice as  
input. The API is supported by all modern browsers, including Chrome,  
Firefox, Safari, and Edge.  
To make it so that the user can use speech recognition to input text in the  
message field of a form, you need to rely on the browser’s native speech  
recognition API. This requires JavaScript interop. To use this API you  
could either write your own implementation to interface with the native API  
or use a library that contains this logic. I maintain a Razor class library that  
provides an ISpeechRecognitionService implementation that’s  
published on NuGet as  
Blazor.SpeechRecognition.WebAssembly. This library exposes  
this type through dependency injection, allowing consumers to call  
.AddSpeechRecognitionServices on the  
IServiceCollection type. Once the services are registered, you can  
consume this interface. This is an abstraction over the speech recognition  
API, and it uses Blazor JavaScript interop. It’s a good example of how you  
can create a reusable Razor class library. Blazor class libraries let you write components, effectively sharing common  
markup, logic, and even static assets. Static assets are typically in the  
wwwroot folder in ASP.NET Core apps. The  
Blazor.SpeechRecognition.WebAssembly library defines a bit  
of JavaScript code in the wwwroot. Let’s take a look at the  
blazorators.speechRecognition.js JavaScript file that exposes the  
speechSynthesis functionality\:  
let \_recognition = null;  
/\*\*  
\* Cancels any active speech recognition session,  
\* considered best practice to properly clean up.  
\* @param \{boolean\} isAborted  
\*/  
export const cancelSpeechRecognition = \(isAborted\) =\> \{  
if \(\_recognition !== null\) \{  
if \(isAborted\) \{  
\_recognition.abort\(\);  
\} else \{  
\_recognition.stop\(\);  
\}  
\_recognition = null;  
\}  
\};  
/\*\*  
\* Starts recognizing speech in the browser, and registers  
\* all the callbacks for the given dotnetObj in context.  
\* @param \{any\} dotnetObj  
\* @param \{string\} lang The BCP47 tag for the language.  
\* @param \{string\} key Used for round-trip verification and  
callback-receipts.  
\* @param \{string\} onResultMethodName Incremental recognition  
results callback.  
\* @param \{string | null\} onErrorMethodName Recognition error  
callback.  
\* @param \{string | null\} onStartMethodName Recognition started  
callback.  
\* @param \{string | null\} onEndMethodName Recognition ended  
callback.  
\*/  
export const recognizeSpeech =  
\(dotnetObj, lang, key, onResultMethodName, onErrorMethodName, onStartMethodName, onEndMethodName\) =\>  
\{  
if \(!dotnetObj || !onResultMethodName\) \{  
return;  
\}  
cancelSpeechRecognition\(true\);  
\_recognition =  
new webkitSpeechRecognition\(\) || new  
SpeechRecognition\(\);  
\_recognition.continuous = true;  
\_recognition.interimResults = true;  
\_recognition.lang = lang;  
error\);  
if \(onStartMethodName\) \{  
\_recognition.onstart = \(\) =\> \{  
dotnetObj.invokeMethod\(onStartMethodName, key\);  
\};  
\}  
if \(onEndMethodName\) \{  
\_recognition.onend = \(\) =\> \{  
dotnetObj.invokeMethod\(onEndMethodName, key\);  
\};  
\}  
if \(onErrorMethodName\) \{  
\_recognition.onerror = \(error\) =\> \{  
dotnetObj.invokeMethod\(onErrorMethodName, key,  
\};  
\}  
\_recognition.onresult = \(result\) =\> \{  
let transcript = '';  
let isFinal = false;  
for \(let i = result.resultIndex; i \<  
result.results.length; ++i\) \{  
transcript += result.results\[i\]\[0\].transcript;  
if \(result.results\[i\].isFinal\) \{  
isFinal = true;  
\}  
\}  
if \(isFinal\) \{  
const punctuation = transcript.endsWith\('.'\) ? ''  
\: '.';  
const replaced =  
transcript.replace\(/\\S/, str =\> str.toLocaleUpperCase\(\)\);  
transcript =  
\`\$\{replaced\}\$\{punctuation\}\`  
;  
\}  
dotnetObj.invokeMethod\(  
onResultMethodName, key, transcript, isFinal\);  
\};  
\_recognition.start\(\);  
\};  
window.addEventListener\('beforeunload',  
cancelSpeechRecognition\(true\);  
=\> \{  
\_  
\}\);  
The \_recognition variable is used to store the current  
SpeechRecognition instance globally.  
The cancelSpeechRecognition method is used to cancel the  
current speech recognition session. The recognizeSpeech method is used to start the speech  
recognition session. The \_recognition instance has several callbacks, each callback is  
registered. The \_recognition.onresult callback is used to send the results  
back to the client. The window.addEventListener method aborts any active speech  
recognition session.  
Although we’ve used JavaScript for other functionality in this book, this  
one’s different because the functions defined here use the export  
keyword. The export JavaScript keyword allows you to export a function  
or variable as an import-able code from another module. This is a very  
common JavaScript feature, and it’s used to make your code more sharable,  
readable, and easier to maintain. Blazor can import these functions into  
.NET via JavaScript interop calls to import and a path to a JavaScript  
module. Modules simply export their desired functionality, and other  
modules consume it. In .NET this module is represented as the framework-  
provided IJSInProcessObjectReference type. For more  
information, see ASP.NET Docs\: JavaScript isolation in JavaScript  
modules. The two functions of this JavaScript file are  
cancelSpeechRecognition and recognizeSpeech. The primary  
function is the recognizeSpeech as it conditionally registers all of the  
provided callbacks when their able to be handled. It’s responsible for  
instantiating a SpeechRecognition instance and assigning it to the  
global \_recognition variable, of the JavaScript code. Next, we’ll look  
at the ISpeechRecognitionService interface. It’s defined in the  
ISpeechRecognitionService.cs C\# file\:  
namespace Microsoft.JSInterop;  
public interface ISpeechRecognitionService \: IAsyncDisposable  
\{  
Task InitializeModuleAsync\(\);  
void CancelSpeechRecognition\(bool isAborted\);  
IDisposable RecognizeSpeech\(  
string language,  
Action\<string\> onRecognized,  
Action\<SpeechRecognitionErrorEvent\>? onError = null,  
Action? onStarted = null,  
Action? onEnded = null\);  
\}  
The interface declares itself in the Microsoft.JSInterop  
namespace as a convenience. The ISpeechRecognitionService interface is used to define the  
public SpeechRecognition API.  
The InitializeModuleAsync method is used to initialize the  
speech recognition module. The CancelSpeechRecognition method is used to cancel the  
speech recognition session. The RecognizeSpeech method is used to start the speech  
recognition session. WARNING  
Declaring a type in someone else’s namespace \(such as Microsoft.JSInterop\)  
should not be overused. This practice is typically not publicly recommended, but it’s  
used here to make the library more accessible to developers. In this way, as developers  
opt-in to using this NuGet package, where their apps are already making use of  
Microsoft.JSInterop, they can also use the SpeechRecognition API.  
This interface inherits IAsyncDisposable, and its DisposeAsync  
call will perform the necessary cleanup of the captured module reference.  
The ISpeechRecognitionService interface is small, so it’s a good  
candidate for simple unit testing, which is discussed in Chapter 9. This  
makes it easy to perform unit tests on the logic surrounding the speech  
recognition module. Next, we’ll look at the  
DefaultSpeechRecognitionService class. It’s defined in the  
DefaultSpeechRecognitionService.cs C\# file\:  
namespace Microsoft.JSInterop;  
internal sealed class DefaultSpeechRecognitionService  
\: ISpeechRecognitionService  
\{  
const string ContentFolder = "\_content";  
const string Package =  
"Blazor.SpeechRecognition.WebAssembly";  
const string Module = "blazorators.speechRecognition.js";  
readonly IJSInProcessRuntime \_javaScript;  
readonly SpeechRecognitionCallbackRegistry \_callbackRegistry  
= new\(\);  
IJSInProcessObjectReference? \_speechRecognitionModule;  
SpeechRecognitionSubject? \_speechRecognition;  
public DefaultSpeechRecognitionService\(  
IJSInProcessRuntime javaScript\) =\> \_javaScript =  
javaScript;  
void InitializeSpeechRecognitionSubject\(\)  
\{ if \(\_speechRecognition is not null\)  
\{  
CancelSpeechRecognition\(false\);  
\_speechRecognition.Dispose\(\);  
\}  
\_speechRecognition = SpeechRecognitionSubject.Factory\(  
\_callbackRegistry.InvokeOnRecognized\);  
\}  
/// \<inheritdoc /\>  
public async Task InitializeModuleAsync\(\) =\>  
\_speechRecognitionModule =  
await  
\_javaScript.InvokeAsync\<IJSInProcessObjectReference\>\(  
"import",  
\$"./\{ContentFolder\}/\{Package\}/\{Module\}"\);  
/// \<inheritdoc /\>  
public void CancelSpeechRecognition\(  
bool isAborted\) =\>  
\_speechRecognitionModule?.InvokeVoid\(  
"cancelSpeechRecognition",  
isAborted\);  
/// \<inheritdoc /\>  
public IDisposable RecognizeSpeech\(  
string language,  
Action\<string\> onRecognized,  
Action\<SpeechRecognitionErrorEvent\>? onError,  
Action? onStarted,  
Action? onEnded\)  
\{  
InitializeSpeechRecognitionSubject\(\);  
var key = Guid.NewGuid\(\);  
\_callbackRegistry.RegisterOnRecognized\(key,  
onRecognized\);  
if \(onError is not null\)  
\_callbackRegistry.RegisterOnError\(key, onError\);  
if \(onStarted is not null\)  
\_callbackRegistry.RegisterOnStarted\(key, onStarted\);  
if \(onEnded is not null\)  
\_callbackRegistry.RegisterOnEnded\(key, onEnded\);  
\_speechRecognitionModule?.InvokeVoid\(  
"recognizeSpeech",  
DotNetObjectReference.Create\(this\), language,  
key,  
nameof\(OnSpeechRecognized\),  
nameof\(OnRecognitionError\),  
nameof\(OnStarted\),  
nameof\(OnEnded\)\);  
return \_speechRecognition!;  
\}  
\[JSInvokable\]  
public void OnStarted\(string key\) =\>  
\_callbackRegistry.InvokeOnStarted\(key\);  
\[JSInvokable\]  
public void OnEnded\(string key\) =\>  
\_callbackRegistry.InvokeOnEnded\(key\);  
\[JSInvokable\]  
public void OnRecognitionError\(  
string key, SpeechRecognitionErrorEvent errorEvent\) =\>  
\_callbackRegistry.InvokeOnError\(key, errorEvent\);  
\[JSInvokable\]  
public void OnSpeechRecognized\(  
string key, string transcript, bool isFinal\) =\>  
\_speechRecognition?.RecognitionReceived\(  
new SpeechRecognitionResult\(key, transcript,  
isFinal\)\);  
async ValueTask IAsyncDisposable.DisposeAsync\(\)  
\{  
\_speechRecognition?.Dispose\(\);  
\_speechRecognition = null;  
if \(\_speechRecognitionModule is not null\)  
\{  
await \_speechRecognitionModule.DisposeAsync\(\);  
\_speechRecognitionModule = null;  
\}  
\}  
\}  
The DefaultSpeechRecognitionService class is both  
sealed and internal. There are several fields required for this implementation, besides the  
const string fields, there are two framework-provided types \(IJSInProcessRuntime and  
IJSInProcessObjectReference\) and two custom types  
\(SpeechRecognitionCallbackRegistry and  
SpeechRecognitionSubject\).  
The InitializeSpeechRecognitionSubject creates the  
speech recognition subject. If it already exists, the existing speech  
recognition session is canceled. The InitializeModuleAsync method is used to initialize the  
speech recognition module. The CancelSpeechRecognition method is used to cancel the  
speech recognition session. The RecognizeSpeech method is used to start the speech  
recognition session. The OnStarted method is used to invoke the onStarted callback.  
The OnSpeechRecognized method is used to invoke the  
onRecognized callback.  
The InitializeModuleAsync method is required to be called before  
any other call. This ensures that the \_speechRecognitionModule  
field is initialized. The CancelSpeechRecognition method is used to  
cancel the speech recognition session. The RecognizeSpeech method is  
used to start the speech recognition session. When the speech recognition  
session is started, the \_speechRecognition field is initialized. An  
invocation key is created \(Guid.NewGuid\(\)\), and this is passed from  
.NET into the JavaScript interop calls. The calling JavaScript then uses the  
given key when it invokes its callbacks. This is then used to ensure that  
callbacks are removed from the \_callbackRegistry once they’re  
called. The OnStarted, OnEnded, and OnRecognitionError  
methods are used to invoke the corresponding callbacks. The  
OnSpeechRecognized is different, as it instead pushes the given  
transcript and isFinal values into the  
SpeechRecognitionResult object and calls the  
RecognitionReceived method on the \_speechRecognition  
field.  
The \_speechRecognition field is a  
SpeechRecognitionSubject type. This custom type wraps a bit of reactive code and provides an encapsulated observer and observable pair. In  
the next section, I’ll explain how Reactive Extensions are used to create the  
SpeechRecognitionSubject type.  
Reactive Programming With The Observer Pattern  
Unlike the OnStarted, OnEnded, and OnRecognitionError  
events, the OnSpeechRecognized event triggers many times. This is  
because the JavaScript speech recognition code sets the continuous flag  
to true when the speech recognition session is started. The JavaScript  
code will invoke the onRecognized callback multiple times, with the  
isFinal flag set to false for each invocation. When intermediate  
recognition results are available, a final recognition result is still only  
intermittent. When final, it’s a complete thought or sentence. The speech  
recognition service will continue to listen until either an error occurs, or a  
cancellation is requested. We’ll use reactive programming, which relies on  
asynchronous programming logic to handle real-time updates to otherwise  
static content. As the speech recognition service fires, our app will observe  
each occurrence of the event, and take appropriate action.  
ReactiveX \(or Reactive Extensions\) is an API for asynchronous  
programming with observable streams. ReactiveX is an implementation of  
the observer pattern.  
THE OBSERVER PATTERN  
The observer pattern allows some objects to notify other objects about  
their state change. This pattern provides a way to subscribe and  
unsubscribe to and from these events for any object that implements a  
subscriber interface. The observer pattern is used to implement the  
SpeechRecognitionSubject type, which relies on reactive  
extensions. For more information, see .NET Docs\: Observer Pattern.  
The .NET implementation of reactive extensions is known as Rx.NET.  
Within this library, a Subject type represents an object that is both an observable sequence as well as an observer. In the case of speech  
recognition, the SpeechRecognitionSubject type observes a stream  
of SpeechRecognitionResult objects. Consider the  
SpeechRecognitionSubject.cs C\# file\:  
namespace Microsoft.JSInterop;  
internal sealed class SpeechRecognitionSubject \: IDisposable  
\{  
readonly Subject\<SpeechRecognitionResult\>  
\_speechRecognitionSubject = new\(\);  
readonly IObservable\<\(string, string\)\>  
\_speechRecognitionObservable;  
readonly IDisposable \_speechRecognitionSubscription;  
readonly Action\<string, string\> \_observer;  
private SpeechRecognitionSubject\(  
Action\<string, string\> observer\)  
\{  
\_observer = observer;  
\_speechRecognitionObservable =  
\_speechRecognitionSubject.AsObservable\(\)  
.Where\(r =\> r.IsFinal\)  
.Select\(r =\> \(r.Key, r.Transcript\)\);  
\_speechRecognitionSubscription =  
\_speechRecognitionObservable.Subscribe\(  
\(\(string Key, string SpeechRecognition\) tuple\) =\>  
\_observer\(tuple.Key,  
tuple.SpeechRecognition\)\);  
\}  
internal static SpeechRecognitionSubject Factory\(  
Action\<string, string\> observer\) =\> new\(observer\);  
internal void RecognitionReceived\(  
SpeechRecognitionResult recognition\) =\>  
\_speechRecognitionSubject.OnNext\(recognition\);  
public void Dispose\(\) =\>  
\_speechRecognitionSubscription.Dispose\(\);  
\}  
The SpeechRecognitionSubject type relies on a subject,  
observer, observable, and subscription. The \_observer field is used to invoke the onRecognized  
callback, and the constructor is private.  
The Factory method is used to create the  
SpeechRecognitionSubject type.  
The RecognitionReceived method is used to push the given  
recognition value into the \_speechRecognitionSubject  
field. The Dispose method is used to dispose of the  
\_speechRecognitionSubscription field.  
The SpeechRecognitionSubject allows the consumer to push  
SpeechRecognitionResult instances into its underlying Subject.  
The consumer also provides an Action\<string, string\> observer  
function, this is used within the observables subscription. When the  
Subject acts as an observable, meaning its stream of intermittent results  
can be filtered, and conditionally dispatched to the consumer. When the  
final transcript is ready, the consumer is notified and provided with  
the key and transcript values.  
The custom subject wrapper only defines a private constructor, this  
means it’s not possible to instantiate this object unless using the static  
factory method. The Factory functionality accepts the observer used  
to instantiate the SpeechRecognitionSubject. The subscription  
instance is stored as a field so that it can be explicitly cleaned up when the  
subject is disposed of.  
Managing Callbacks With A Registry  
Since the service exposes several callbacks, it manages the interop  
callbacks in a custom registry. The  
SpeechRecognitionCallbackRegistry object allows for  
registering a callback, and the corresponding invocation of a callback given  
its key. Let’s look at the SpeechRecognitionCallbackRegistry.cs C\# file\:  
namespace Microsoft.JSInterop; internal sealed class SpeechRecognitionCallbackRegistry  
\{  
readonly ConcurrentDictionary\<Guid, Action\<string\>\>  
\_onResultCallbackRegister = new\(\);  
readonly ConcurrentDictionary\<Guid,  
Action\<SpeechRecognitionErrorEvent\>\>  
\_onErrorCallbackRegister = new\(\);  
readonly ConcurrentDictionary\<Guid, Action\>  
\_onStartedCallbackRegister = new\(\);  
readonly ConcurrentDictionary\<Guid, Action\>  
\_onEndedCallbackRegister = new\(\);  
internal void RegisterOnRecognized\(  
Guid key, Action\<string\> callback\) =\>  
\_onResultCallbackRegister\[key\] = callback;  
=\>  
internal void RegisterOnError\(  
Guid key, Action\<SpeechRecognitionErrorEvent\> callback\)  
\_onErrorCallbackRegister\[key\] = callback;  
internal void RegisterOnStarted\(  
Guid key, Action callback\) =\>  
\_onStartedCallbackRegister\[key\] = callback;  
internal void RegisterOnEnded\(  
Guid key, Action callback\) =\>  
\_onEndedCallbackRegister\[key\] = callback;  
internal void InvokeOnRecognized\(  
string key, string transcript\) =\>  
OnInvokeCallback\(  
key, \_onResultCallbackRegister,  
callback =\> callback?.Invoke\(transcript\)\);  
internal void InvokeOnError\(  
string key, SpeechRecognitionErrorEvent error\) =\>  
OnInvokeCallback\(  
key, \_onErrorCallbackRegister,  
callback =\> callback?.Invoke\(error\)\);  
internal void InvokeOnStarted\(string key\) =\>  
OnInvokeCallback\( key, \_onStartedCallbackRegister,  
callback =\> callback?.Invoke\(\)\);  
internal void InvokeOnEnded\(string key\) =\>  
OnInvokeCallback\(  
key, \_onEndedCallbackRegister,  
callback =\> callback?.Invoke\(\)\);  
static void OnInvokeCallback\<T\>\(  
string key,  
ConcurrentDictionary\<Guid, T\> callbackRegister,  
Action\<T?\> handleCallback\)  
\{  
if \(key is null or \{ Length\: 0 \} ||  
callbackRegister is null or \{ Count\: 0 \}\)  
\{  
return;  
\}  
if \(Guid.TryParse\(key, out var guid\) &&  
callbackRegister.TryRemove\(guid, out var callback\)\)  
\{  
handleCallback?.Invoke\(callback\);  
\}  
\}  
\}  
The \_onResultCallbackRegister field is used to store the  
callback register for the onRecognized callback.  
The RegisterOnRecognized method registers the  
onRecognized callback, and the  
\_onResultCallbackRegister field is used to store the callback.  
The RegisterOnError method registers the onError callback,  
and the \_onErrorCallbackRegister field is used to store the  
callback. The InvokeOnRecognized method invokes the onRecognized  
callback, and the OnInvokeCallback method invokes the callback.  
The InvokeOnError method invokes the onError callback, and  
the OnInvokeCallback method invokes the callback.  
The OnInvokeCallback method invokes the callback in the register  
after it’s removed. A ConcurrentDictionary represents a thread-safe collection of  
key/value pairs that can be accessed by multiple threads concurrently. There  
are many alternative approaches to managing callbacks, but the  
SpeechRecognitionCallbackRegistry object is the simplest and  
most performant. It’s thread-safe and uses globally unique identifiers to  
manage the callbacks—which ensures that a single registration is tethered  
to a single invocation of a callback. One of the advantages to using C\# in a  
browser, such as this, is that we’re spoiled with the native types provided by  
the .NET ecosystem. Having access to primitives like the  
ConcurrentDictionary, Guid, strongly-typed delegates  
\(Action\<T\> for example\), and even Rx.NET is a huge advantage.  
Applying The Speech Recognition Service To  
Components  
Applying the SpeechRecognitionSubject and the  
SpeechRecognitionCallbackRegistry to expose the  
ISpeechRecognitionService interface, we can now create a custom  
component that can be added to an HTML element and surface speech  
recognition functionality. Let’s look at the  
AdditiveSpeechRecognitionComponent.cs C\# file\:  
using RecognitionError =  
Microsoft.JSInterop.SpeechRecognitionErrorEvent;  
namespace Learning.Blazor.Components  
\{  
public sealed partial class  
AdditiveSpeechRecognitionComponent  
\: IAsyncDisposable  
\{  
IDisposable? \_recognitionSubscription;  
SpeechRecognitionErrorEvent? \_error = null;  
bool \_isRecognizing = false;  
string \_dynamicCSS =\> \_isRecognizing ? "is-flashing" \:  
"";  
\[Inject\] private ISpeechRecognitionService SpeechRecognition  
\{  
get;  
set;  
\} = null!;  
\[Parameter\]  
public EventCallback SpeechRecognitionStarted \{ get; set;  
\}  
\[Parameter\]  
public EventCallback\<RecognitionError?\>  
SpeechRecognitionStopped  
\{  
get;  
set;  
\}  
\[Parameter, EditorRequired\]  
public EventCallback\<string\> SpeechRecognized \{ get; set;  
\}  
protected override async Task OnAfterRenderAsync\(bool  
firstRender\)  
\{  
if \(firstRender\)  
\{  
await SpeechRecognition.InitializeModuleAsync\(\);  
\}  
void OnRecognizeButtonClick\(\)  
\}  
\{  
if \(\_isRecognizing\)  
\{  
SpeechRecognition.CancelSpeechRecognition\(false\);  
\}  
else  
\{  
var bcp47Tag = Culture.CurrentCulture.Name;  
\_recognitionSubscription?.Dispose\(\);  
\_recognitionSubscription =  
SpeechRecognition.RecognizeSpeech\(  
bcp47Tag,  
OnRecognized,  
OnError,  
OnStarted, OnEnded\);  
\}  
\}  
void OnRecognized\(string transcript\) =\>  
= SpeechRecognized.TryInvokeAsync\(transcript,  
\_  
this\);  
void OnError\(SpeechRecognitionErrorEvent  
recognitionError\)  
\{  
\(\_isRecognizing, \_error\) = \(false, recognitionError\);  
\_  
= SpeechRecognitionStopped.TryInvokeAsync\(\_error,  
this\);  
void OnStarted\(\)  
\}  
\{  
\}  
\{  
\_isRecognizing = true;  
= SpeechRecognitionStarted.TryInvokeAsync\(this\);  
\_  
public void OnEnded\(\)  
\_isRecognizing = false;  
\_  
= SpeechRecognitionStopped.TryInvokeAsync\(\_error,  
this\);  
ValueTask IAsyncDisposable.DisposeAsync\(\)  
\}  
\{  
\_recognitionSubscription?.Dispose\(\);  
return SpeechRecognition.DisposeAsync\(\);  
\}  
\}  
\}  
The AdditiveSpeechRecognitionComponent implements the  
IAsyncDisposable interface, which allows us to dispose of the  
speech recognition module when the component is removed from the  
DOM. The SpeechRecognition property is used to access the speech  
recognition service. The SpeechRecognitionStarted property is optional and is used  
to notify the parent component that the speech recognition has started. The SpeechRecognitionStopped property is also optional, and  
it’s signaled when speech recognition has stopped. The SpeechRecognized property is an EditorRequired  
parameter, and it’s called multiple times over the typical session.  
The OnAfterRenderAsync method is used to initialize the speech  
recognition module. The OnRecognizeButtonClick method is used to start or stop  
speech recognition. The OnRecognized method is used to notify the parent component  
that speech recognition has been completed.  
When the user clicks the microphone button, the  
OnRecognizeButtonClick method is called. The consuming  
Contact page will mark the corresponding input element as  
readonly. This helps to ensure that the user cannot edit the text in the  
input field, as it is automatically updating from the speech recognition. So,  
you can’t talk and type at the same time. The EventCallback instances  
signal any changes to the consumer. The TryInvokeAsync is an  
extension method, that conditionally calls the InvokeAsync method on  
the EventCallback instance if its HasDelegate value is true.  
# Form Submission Validation And Verification  
Putting this all together, we’ve built a custom Contact page that displays  
a beautifully styled form, that boasts speech recognition functionality with  
the click of a button. Before a user can submit the form, all fields must be  
validated. As the primary function of a form is to take user input and give it  
to the recipient, it’s vital to validate the input to make sure the information  
is communicated correctly.  
The form model is bound to various form fields, and the form is validated  
on submission. Each form field is represented by an HTML element using  
Blazor components. The form field components are responsible for  
validating the user’s input. When the framework-provided EditForm  
component is given a C\# model that is invalid will render the form with the  
appropriate error messages. Only when the form submission is valid will the EditForm component submit the form. Meaning all of the data  
annotations on the model are validated, including required fields, custom  
regex patterns, and custom validation  
methods.  
Once the Contact form is considered valid and submitted, the user is  
prompted by a modal that acts as a basic spam blocker. We set up this  
VerificationModalComponent in Chapter 4. The modal prompts  
the user to answer random math problems and requires a correct answer for  
the submission to proceed.  
Figure 8-5 shows an example of this modal prompt.  
Figure 8-5. An example rendering of the VerificationModalComponent zoomed in.  
If the answer is incorrect, the modal will not allow the user’s form data to  
be sent to the Web.Api project’s endpoint for processing. An incorrect answer is shown in Figure 8-6.  
Figure 8-6. An example rendering of the VerificationModalComponent zoomed in with the wrong  
answer.  
Once the question is correctly answered, the modal is dismissed and the  
contact form is processed. A notification is triggered, which states that the  
contact attempt is successful as shown in Figure 8-7. Figure 8-7. An example rendering of the confirmation notification.  
As the primary function of a form is to take user input and give it to the  
recipient, it’s vital to validate the input to make sure the information is  
communicated correctly. A model is bound to various form fields, and the  
form is validated on submission. Each form field is represented by an  
HTML element using Blazor components. The form field components are  
responsible for validating the user’s input. When the framework-provided  
EditForm component is given a C\# model that is invalid will render the  
form with the appropriate error messages. Only when the form submission  
is valid will the EditForm component submit the form. Meaning all of the  
data annotations on the model are validated, including required fields,  
custom regex patterns, and custom validation methods.  
# Summary  
In this chapter, I showed you how to implement a form that accepts input  
with validation. In the process, you learned the basics of form submission,  
including how to bind custom C\# models to the EditForm, how to use  
data annotations to decorate model properties with validation attributes, and how to render a form with validation errors. I also walked you through a  
speech recognition library that exposes the ability to accept a user’s spoken  
word as input that is bound to text input.  
In the next chapter, I’m going to show you how to properly test your Blazor  
apps. From unit tests with xUnit, to component tests with bUnit, you’ll  
learn how to write reliable tests that can be used to verify the functionality  
of your app.  
1 ASP.NET Docs\: Built-in form components https\://tiny.cc/lb-dp-builtin-components Chapter 9. Testing All the  
# Things  
A NOTE FOR EARLY RELEASE READERS  
With Early Release ebooks, you get books in their earliest form—the  
author’s raw and unedited content as they write—so you can take  
advantage of these technologies long before the official release of these  
titles.  
This will be the ninth chapter of the final book. Please note that the  
GitHub repo will be made active later on.  
If you have comments about how we might improve the content and/or  
examples in this book, or if you notice missing material within this  
chapter, please reach out to the editor at rfernando@oreilly.com.  
In this chapter, we’re going to explore the various testing options available  
to you as a Blazor developer. It’s important to know what you can test, and  
how to test it. We’ll start with the most basic testing use cases that apply to  
all .NET and JavaScript developers alike. I’ll provide an introduction to  
testing and show you how to use the xUnit, bUnit, and Playwright testing  
frameworks. We will then move on to more advanced testing scenarios.  
We’ll finish with code examples that exemplify how to automate testing  
with GitHub Action workflows, and how to write tests, such as unit tests,  
component tests, and end-to-end tests.  
# Why Test?  
You may be asking, “What’s the point of testing if your code works  
anyway?” That’s a fair question. For years, I felt the same way—I disliked testing because it seemed unnecessary. After years of writing code,  
however, I’ve changed my mind. Testing is a great way to ensure that your  
code works as expected and can be refactored as needed. Testing also helps  
to make things work right if core business rules change. Just as I once said  
that good code is a love letter for the next developer, testing is a show of  
affection as well. Let’s get started with the smallest kind of test—the unit  
test.  
# Unit Testing  
A unit test is the most basic testing strategy that exercises a small, isolated  
piece or unit of code. A unit test should only accept known inputs, and  
return expected outputs—it’s best to avoid randomization in testing. By  
automating the unit tests and avoiding human error, you’re more likely to  
catch potential issues in future refactorings.  
NOTE  
All of the unit tests here are written in C\#, but that’s not to say that you couldn’t write  
unit tests for the JavaScript code we used in our model app. I chose not to do this,  
because the Learning Blazor app has very little JavaScript code, and primarily wraps  
existing APIs, so it’s highly reliable. In other words, I’m not interested in maintaining  
tests that only verify framework code.  
A unit test is one of the best ways to ensure code functionality, but it is not  
a substitute for manual functional testing, as it focuses on a single unit. You  
can use testing frameworks, like xUnit, MSTest, and NUnit, to write unit  
tests for your Blazor apps. All of these frameworks are well maintained,  
documented, supported, and feature-rich. Pair that with a GitHub repository,  
and you’re off to the races. With a GitHub workflow file, you can call the  
dotnet test CLI command to run unit tests. “AT LEAST ONE” DEV TESTING  
My philosophy is that every single line of code that you write should  
execute at least once through a debugger with you \(the developer\)  
stepping through each line of code. I refer to this as “at least one” dev  
testing because it’s been manually tested by at least one developer.  
Although this methodology is manual, it’s very beneficial as you can  
catch mistakes as you develop your code. But it is great to automate  
tests and that is where unit testing comes in.  
TIP  
A fairly well-adopted unit testing strategy is to develop unit tests before writing the  
implementation of the code you’re testing. This is known as test-driven development \(or  
TDD\). TDD has the benefit of being a bit more pragmatic in that you’re forced upfront  
to think about how an API should be implemented before writing the code. This is a  
good way to ensure that you’re testing the right things.  
Defining Unit Testable Code  
One good way to do unit testing is with an extension method. I’m a big fan  
of extension methods. They’re so useful that they’ve become idiomatic to  
C\# development. Extension methods are a great way to add functionality to  
existing classes. There was a long-standing misconception that extension  
methods are difficult to unit test. This is not true. This comes from the  
concern that an extension method cannot be mocked \(its implementation  
cannot be controlled or customized for unit testing\), and therefore other  
logic that relies on extended functionality cannot be controlled. It’s believed  
that this makes it difficult to test. However, in reality, you can still test both  
extension methods and consuming functionality. You do not need to mock  
everything to write a unit test. Again, a unit test is only concerned with a  
unit of work, given known inputs and expecting specific outputs.  
In this section, we’re going to work through the Web.Extensions.Tests  
project of the model app that uses the common Arrange-Act-Assert testing pattern. In this pattern, we’ll arrange our inputs, act on the system under  
test, and assert the expected outputs are accurate. For more information  
about this pattern, see .NET Docs\: Unit testing best practices - Arranging  
your tests. Web.Extensions.Tests is an xUnit test project that relies on the  
Microsoft.NET.Sdk, and test projects like this can be created using the  
.NET CLI\: dotnet new xunit command. The xunit template has all  
the dependencies specified and is ready to run tests. For more information,  
see xUnit.  
Throughout the development and the discussion of the model app in this  
book, you’ve seen the User property wherever our authenticated user  
flows through the system. This property is a ClaimsPrincipal  
instance, and it serves as a good example of how to unit test an extension  
method. You may recall seeing the User.GetFirstEmailAddress\(\)  
method is called in \[the Contact page\] from chapter 8. This method is an  
extension method that returns the first email address from the user’s  
“emails” claim. Let’s look at the extension method functionality first to  
understand how it should function and consider the  
ClaimsPrincipalExtensions.cs file in the Web.Extensions class library  
project\:  
namespace Learning.Blazor.Extensions;  
public static class ClaimsPrincipalExtensions  
\{  
/// \<summary\>  
/// Gets the first email address \(if available\) from the  
"emails" claim.  
/// \</summary\>  
public static string? GetFirstEmailAddress\(this  
ClaimsPrincipal? user\) =\>  
user?.GetEmailAddresses\(\)?.FirstOrDefault\(\);  
/// \<summary\>  
/// Gets the email addresses \(if available\) from the "emails"  
claim.  
/// \</summary\>  
public static string\[\]? GetEmailAddresses\(this  
ClaimsPrincipal? user\)  
\{ if \(user is null\) return null;  
var emails = user.FindFirst\("emails"\);  
if \(emails is \{ ValueType\: ClaimValueTypes.String \}  
and \{ Value.Length\: \> 0 \}\)  
\{  
return emails.Value.StartsWith\("\["\)  
? emails.Value.FromJson\<string\[\]\>\(\)  
\: new\[\] \{ emails.Value \};  
\}  
return null;  
\}  
\}  
The GetFirstEmailAddress method gets the first email address  
from the call to GetEmailAddresses.  
The GetEmailAddresses method gets all email addresses for a  
given user’s “emails” claim.  
The ClaimsPrincipalExtensions class could benefit from some  
unit tests as the functionality has several different logical branches. The  
logic is to return null when there is not an “emails” claim value. When  
there is an “emails” claim value, we want to return an array of email  
addresses from GetEmailAddresses. This method normalizes the  
claim value, effectively parsing whether or not the string value starts as  
an array, in which case it would deserialize it as JSON to a string\[\].  
Otherwise, it’s treated as a single-length array with the sole email address.  
In other words, if there is only one email address, we want to return an  
array with one element. When there is more than one, we only care about  
the first.  
Writing An Extension Method Unit Test  
To unit test the ClaimsPrincipal extension method we’ll need to be  
able to create an instance with known claims. Consider an internal helper  
class that’s used to build a custom ClaimsPrincipal instance and see  
the ClaimsPrincipalExtensionsTests.Internal.cs C\# file\: namespace Learning.Blazor.Extensions.Tests;  
public sealed partial class ClaimsPrincipalExtensionsTests  
\{  
class ClaimsPrincipalBuilder  
\{  
readonly Dictionary\<string, string\> \_claims =  
new\(StringComparer.OrdinalIgnoreCase\);  
internal ClaimsPrincipalBuilder WithClaim\(  
string claimType, string claimValue\)  
\{  
\_claims\[claimType\] = claimValue ?? "";  
return this;  
\}  
\{  
internal ClaimsPrincipal Build\(\)  
var claims = \_claims.Select\(  
kvp =\> new Claim\(kvp.Key, kvp.Value\)\);  
var identity = new ClaimsIdentity\(claims,  
"TestIdentity"\);  
return new ClaimsPrincipal\(identity\);  
\}  
\}  
\}  
The ClaimsPrincipalBuilder is a helper class internal to the  
ClaimsPrincipalExtensionsTests.  
The WithClaim method adds a claim type and value to the builder  
instance. The Build method returns a ClaimsPrincipal instance, creating  
an identity with the claims in the builder.  
The builder pattern \(as described in Link To Come\) is very useful for this  
helper. Because we’re creating the ClaimsPrincipal type specific to  
the test, the framework will not provide the User instance. Instead, we’ll  
use the WithClaim method on the builder to add claims, and then use the  
Build method to create a ClaimsPrincipal instance. Each test can  
create its own instance \(with known inputs\). Let’s see this helper/builder in  
action, by looking at the ClaimsPrincipalExtensionsTests.cs file from the  
Web.Extensions.Tests project\: namespace Learning.Blazor.Extensions.Tests;  
public sealed partial class ClaimsPrincipalExtensionsTests  
\{  
\[Fact\]  
public void GetFirstEmailAddressNull\(\)  
\{  
var sut = new ClaimsPrincipalBuilder\(\)  
.WithClaim\(  
claimType\: "emails",  
claimValue\: null!\)  
.Build\(\);  
var actual = sut.GetFirstEmailAddress\(\);  
Assert.Null\(actual\);  
\}  
\[Fact\]  
public void GetFirstEmailAddressKeyMismatch\(\)  
\{  
var sut = new ClaimsPrincipalBuilder\(\)  
.WithClaim\(  
claimType\: "email",  
claimValue\: @"  
\[""admin@email.org"",""test@email.org""\]"\)  
.Build\(\);  
var actual = sut.GetFirstEmailAddress\(\);  
Assert.Null\(actual\);  
\}  
\[Fact\]  
public void GetFirstEmailAddressArrayString\(\)  
\{  
var sut = new ClaimsPrincipalBuilder\(\)  
.WithClaim\(  
claimType\: "emails",  
claimValue\: @"  
\[""admin@email.org"",""test@email.org""\]"\)  
.Build\(\);  
var expected = "admin@email.org";  
var actual = sut.GetFirstEmailAddress\(\);  
Assert.Equal\(expected, actual\);  
\}  
\[Fact\]  
public void GetFirstEmailAddressGetSimpleString\(\) \{  
var sut = new ClaimsPrincipalBuilder\(\)  
.WithClaim\("emails", "test@email.org"\)  
.Build\(\);  
var expected = "test@email.org";  
var actual = sut.GetFirstEmailAddress\(\);  
Assert.Equal\(expected, actual\);  
\}  
\[  
Theory,  
InlineData\(  
"emails",  
"test@email.org",  
new\[\] \{ "test@email.org" \}\),  
InlineData\(  
"emails",  
@"\[""admin@email.org"",""test@email.org""\]",  
new\[\] \{ "admin@email.org", "test@email.org" \}\),  
InlineData\(  
"email",  
@"\[""admin@email.org"",""test@email.org""\]",  
null\),  
InlineData\(  
"emails", null, null\),  
\]  
public void GetEmailAddressesCorrectlyGetsEmails\(  
string claimType, string claimValue, string\[\]? expected\)  
\{  
var sut = new ClaimsPrincipalBuilder\(\)  
.WithClaim\(claimType, claimValue\)  
.Build\(\);  
var actual = sut.GetEmailAddresses\(\);  
Assert.Equal\(expected, actual\);  
\}  
\}  
GetFirstEmailAddressNull verifies that given no “emails”  
claim value, the method returns null.  
GetFirstEmailAddressKeyMismatch verifies that given a  
claim type mismatch \(there is no “emails” claim, instead “email”\), the  
method returns null.  
GetFirstEmailAddressArrayString verifies that given an  
array of “emails” in the claim value, the first email address is returned. GetFirstEmailAddressGetSimpleString verifies given  
there’s a single “email”, it’s returned. GetEmailAddressesCorrectlyGetsEmails verifies when  
given claim type and value pair, that the expected email addresses are  
returned.  
The first four tests are decorated using the Fact attribute. This signals to  
xUnit’s discoverability mechanism that these methods represent a single  
unit test. Likewise, the last test is decorated with Theory and the  
InlineData attribute. This signals to xUnit that the test is a  
parameterized test. The InlineData attribute takes a string array of  
email addresses and the expected result. Unit tests decorated with Theory  
are run multiple times, once for each InlineData or against various data  
sets through other attributes.  
TIP  
When writing Theory tests, it’s important to note that there are several types of data  
set attributes that can be used. You can do some powerful things with xUnit. I prefer it  
over the other options because it comes with analyzers that help ensure you’re tests are  
written correctly. For more information, see xUnit powered by Roslyn.  
The ClaimsPrincipalExtensionsTests test class is a single set of  
eight unit tests. Some advantages to unit testing are that the tests usually run  
fast and they have good readability. At the time of writing, the  
Web.Extensions.Tests project had 31 tests, and it took 30 milliseconds to  
run all the tests.  
# Component Testing  
Component testing focuses on a single component of functionality.  
Components tests have to deal with a bit more overhead than unit tests. This  
is because components often reference multiple other components, take on  
external dependencies, and manage the component’s state, among other reasons. With this added complexity comes a need for a test framework that  
can help you test your components.  
Blazor components are unable to render themselves. This is where bUnit, a  
testing library for Blazor components, comes in. With bUnit, you can\:  
Setup and define components under tests using C\# or Razor syntax.  
Verify outcomes using semantic HTML comparer.  
Interact with and inspect components as well as trigger event handlers.  
Pass parameters, cascading values, and inject services into components  
under test.  
Mock IJSRuntime, Blazor authentication and authorization, and  
others.  
To demonstrate component testing, we’re going to look at the  
Web.Client.Tests project in the model app. The Web.Client.Tests project  
was created using the same template as the xUnit test project that we did in  
the previous section. To simplify the passing of parameters to components,  
and the verifying of markup, bUnit allows the test project to target the  
Microsoft.NET.Sdk.Razor SDK. This makes it a Razor project, in  
this way, it can render Razor markup. The project also defines a  
\<PackageReference Include="bunit" Version="1.6.4"  
/\> element, which tells the project to use the bUnit package. Like other test  
projects, we add a \<ProjectReference\> to the project that we’re  
going to write tests against. The Web.Client.Tests project references  
the Web.Client project.  
In this test, we’ll define some inputs, and see how to write a test that  
arranges a component under test, acts on it, and then asserts that it renders  
correctly. Let’s jump right into a component test. Consider the  
ChatMessageComponentTests.razor Razor test file\:  
@using Learning.Blazor.Components  
@inherits TestContext  
@code \{ public static IEnumerable\<object\[\]\> ChatMessageInput  
\{  
get  
\{  
yield return new object\[\]  
\{  
Guid.Parse\("f08b0096-5301-4f4d-8e19-  
6cb1514991ea"\),  
\};  
\{  
e5de3a40dcb3"\),  
\};  
\{  
0fe539640b60"\),  
sound?",  
"Test message... does this work?",  
"David Pine"  
yield return new object\[\]  
Guid.Parse\("379b3861-0c04-49e9-8287-  
"...",  
"Fake"  
yield return new object\[\]  
Guid.Parse\("f68386bb-e4d9-4fed-86b3-  
"If a tree falls in the forest, does it make a  
null!  
\};  
yield return new object\[\]  
\{  
Guid.Parse\("b19ab8b4-7819-438e-a281-  
56246cd3cda7"\),  
null!,  
"User"  
\};  
yield return new object\[\]  
\{  
Guid.Parse\("26ae3eae-b763-4ff1-8160-  
11aaad0cf078"\),  
null!,  
null!  
\};  
\}  
\[Theory, MemberData\(nameof\(ChatMessageInput\)\)\]  
public void ChatMessageComponentRendersUserAndText\(  
Guid guid, string text, string user\)  
\}  
\{  
var message = new ActorMessage\( Id\: guid,  
Text\: text,  
UserName\: user\);  
var cut = Render\(  
@\<ChatMessageComponent Message="message"  
IsEditable="true"  
EditMessage="\(\) =\> \{\}" /\>\);  
cut.MarkupMatches\(  
@\<a id=@guid class="panel-block is-size-5"\>  
\<span\>@user\</span\>  
\<span class="panel-icon px-4"\>  
\<i class="fas fa-chevron-right" aria-  
hidden="true"\>\</i\>  
\</span\>  
\<span class="pl-2"\>  
\<span\>@text\</span\>  
\</span\>  
\</a\>\);  
\}  
\}  
The class inherits from the bUnit TestContext class.  
Several test inputs are defined in the ChatMessageInput property.  
The test method is a theory, which means that it will be run multiple  
times, once for each element in the ChatMessageInput property.  
The ActorMessage is arranged with inputs from the test method  
parameters. The ChatMessageComponent is acted upon, by rendering it given  
its required parameters. The test asserts that the markup matches the expected markup.  
The ActorMessage type is a record from the model app’s Web.Models  
project. The test framework provides the TestContext which is used to  
render the component under test \(or cut\). The Render method returns an  
IRenderedFragment. The MarkupMatches method is one of many  
extension methods from bUnit, that verifies that the rendered markup from  
the markup fragment matches the expected markup fragment.  
To run these tests you can use the dotnet test command, or your  
favorite .NET IDE. When running these tests in Visual Studio, you can see  
the unique parameters for each test in the test summary details, as shown in  
the Figure 9-1. Figure 9-1. Visual Studio\: Test Explorer - Test detail summary for the ChatMessageComponentTests.  
Now that you’ve seen both unit tests and component tests, I’m going to  
show you how to achieve end-to-end testing. In the next section, I’ll  
introduce you to end-to-end testing with Playwright by Microsoft.  
# End-to-End Testing with Playwright  
End-to-end testing is a way to test an entire scenario. It tests much more  
than the integration of a few parts of an app, instead, it exercises a full app  
scenario from beginning to end. Playwright is a browser automation library  
that enables reliable end-to-end testing for modern web apps. It’s similar to Selenium, but in my professional experience is far more reliable and has an  
easier API surface area from the standpoint of ease-of-use. We can use  
Playwright to test our model app, with multiple browsers, such as Chrome  
and FireFox.  
To demonstrate end-to-end testing with Playwright, let’s look at a login test  
for our model app’s Web.Client project. As you may have realized, I enjoy  
writing partial classes and separating each partial into a separate  
file with shared common concepts. There’s a bit of utilitarian code in the  
LoginTests.Utilities.cs C\# file in the Web.Client.EndToEndTests project\:  
namespace Web.Client.EndToEndTests;  
public sealed partial class LoginTests  
\{  
const string LearningBlazorSite =  
"https\://webassemblyof.net";  
const string LearningBlazorB2CSite =  
"https\://learningblazor.b2clogin.com";  
static IBrowserType ToBrowser\(BrowserType browser,  
IPlaywright pw\) =\>  
browser switch  
\{  
BrowserType.Chromium =\> pw.Chromium,  
BrowserType.Firefox =\> pw.Firefox,  
=\> throw new ArgumentException\(\$"Unknown browser\:  
\_  
\{browser\}"\)  
\};  
static Credentials GetTestCredentials\(\)  
\{  
var credentials = new Credentials\(  
Username\: GetEnvironmentVariable\("TEST\_USERNAME"\),  
Password\: GetEnvironmentVariable\("TEST\_PASSWORD"\)\);  
Assert.NotNull\(credentials.Username\);  
Assert.NotNull\(credentials.Password\);  
return credentials;  
\}  
readonly record struct Credentials\(  
string? Username, string? Password\);  
public enum BrowserType  
\{  
Unknown,  
Chromium,  
Firefox,  
WebKit  
\}  
\}  
The class declares two constant string values, which is the live app  
URL for the Learning Blazor site and the Authentication B2C site. The ToBrowser method returns a IBrowserType instance, which is  
a wrapper around the Playwright browser type. The GetTestCredentials method returns a Credentials  
object, which is a readonly record struct type that contains  
the username and password for the test. Credentials is an immutable object with two readonly  
string? values, representing a username and password pair.  
BrowserType is an enumeration of the supported browsers.  
These utilities will be used in the Playwright test itself.  
WARNING  
The Credentials type is populated using environment variables. This is a secure  
alternative to hard-coding these values for the test. The environment variables are used  
for testing. The TEST\_USERNAME and TEST\_PASSWORD environment variables need  
to also exist in the continuous delivery pipeline. Luckily, if you’re using a GitHub repo,  
it’ll use GitHub Action workflows to consume encrypted secrets and run all the tests.  
This is good because it’s a secure alternative to hard-coding these values for the test, and  
the tests run automatically in the CI/CD pipeline.  
The end-to-end tests run in both Chromium-based browsers \(Chrome and  
Edge\), as well as Firefox. Because these tests run in multiple browsers,  
you’ll need to specify input for each browser type. Let’s first look at the test  
input for Chromium by considering the following LoginTests.Chromium.cs  
file\: namespace Web.Client.EndToEndTests;  
public sealed partial class LoginTests  
\{  
private static IEnumerable\<object\[\]\> ChromiumLoginInputs  
\{  
get  
\{  
yield return new object\[\]  
\{  
BrowserType.Chromium, 43.04181f,  
"Milwaukee, Wisconsin \(US\)"  
-87.90684f,  
\};  
yield return new object\[\]  
\{  
BrowserType.Chromium, 48.864716f, 2.349014f,  
"Paris, Île-de-France \(FR\)", "fr-FR"  
\};  
yield return new object\[\]  
\{  
BrowserType.Chromium, 20.666222f,  
"Guadalajara, Jalisco \(MX\)", "es-MX"  
-103.35209f,  
\};  
\}  
\}  
\}  
The xUnit testing framework allows for parameterization of test inputs. The  
ChromiumLoginInputs property is a collection of object\[\] objects,  
each of which contains the browser type, latitude, longitude, and the  
calculated location. There is an optional argument for the CultureInfo  
to use for each test. The test input for Firefox is similar, but with a different  
browser type. Consider the LoginTests.Firefox.cs file\:  
namespace Web.Client.EndToEndTests;  
public sealed partial class LoginTests  
\{  
private static IEnumerable\<object\[\]\> FirefoxLoginInputs  
\{  
get  
\{  
yield return new object\[\]  
\{ BrowserType.Firefox, 43.04181f,  
"Milwaukee, Wisconsin \(US\)"  
-87.90684f,  
\};  
yield return new object\[\]  
\{  
BrowserType.Firefox, 48.864716f, 2.349014f,  
"Paris, Île-de-France \(FR\)", "fr-FR"  
\};  
yield return new object\[\]  
\{  
BrowserType.Firefox, 20.666222f,  
"Guadalajara, Jalisco \(MX\)", "es-MX"  
-103.35209f,  
\};  
\}  
\}  
\}  
The only difference between the two is the browser type. Next, let’s look at  
that next, consider the LoginTests.cs file\:  
namespace Web.Client.EndToEndTests;  
public sealed partial class LoginTests  
\{  
private static bool IsDebugging =\> Debugger.IsAttached;  
private static bool IsHeadless =\> !IsDebugging;  
public static IEnumerable\<object\[\]\> AllLoginTestInput =\>  
ChromiumLoginInputs.Concat\(FirefoxLoginInputs\);  
\[  
Theory,  
MemberData\(nameof\(AllLoginTestInput\)\)  
\]  
public async Task CanLoginWithVerifiedCredentials\(  
BrowserType browserType,  
float lat,  
float lon,  
string? expectedText,  
string? locale = null\)  
var \(username, password\) = GetTestCredentials\(\);  
using var playwright = await Playwright.CreateAsync\(\);  
await using var browser = await ToBrowser\(browserType,  
playwright\) .LaunchAsync\(new\(\) \{ Headless = IsHeadless \}\);  
await using var context = await browser.NewContextAsync\(  
new BrowserTypeLaunchOptions\(\)  
\{  
Permissions = new\[\] \{ "geolocation" \},  
Geolocation = new Geolocation\(\) // Milwaukee, WI  
\{  
Latitude = lat,  
Longitude = lon  
\}  
\}\);  
var loginPage = await context.NewPageAsync\(\);  
await loginPage.RunAndWaitForNavigationAsync\(  
async \(\) =\>  
\{  
await loginPage.GotoAsync\(LearningBlazorSite\);  
if \(locale is not null\)  
\{  
await loginPage.AddInitScriptAsync\(@"\(locale  
=\> \{  
if \(locale\) \{  
window.localStorage.setItem\(  
'client-culture-preference', \`""\$\{locale\}""\`\);  
\}  
\}\)\('" + locale + "'\)"\);  
\}  
\},  
new\(\)  
\{  
UrlString = \$"\{LearningBlazorB2CSite\}/\*\*",  
WaitUntil = WaitUntilState.NetworkIdle  
\}\);  
"?!?!"\);  
\*/\);  
// Enter the test credentials, and "sign in".  
await loginPage.FillAsync\("\#email", username ?? "fail"\);  
await loginPage.FillAsync\("\#password", password ??  
await loginPage.ClickAsync\("\#next" /\* "Sign in" button  
// Ensure the real weather data loads.  
var actualText = await loginPage.Locator\("\#weather-city- state"\)  
.InnerTextAsync\(\);  
Assert.Equal\(expectedText, actualText\);  
\}  
\}  
The IsHeadless property is used when launching the test browser,  
and it determines whether the browser is launched in headless mode.  
The CanLoginWithVerifiedCredentials is a Theory test  
method, that runs on both Chromium and Firefox browsers. The playwright object is initialized, and creates a browser  
instance. The browser configures geolocation permissions, and sets the  
latitude and longitude to test values.  
The context from the configured browser creates a new page  
named loginPage.  
The loginPage fills in the username and password, and then clicks  
the “Sign in” button. The text from the \#weather-city-state element is retrieved.  
The CanLoginWithVerifiedCredentials test is a good example  
of how to use Playwright. In this case, the test is considered a Theory test,  
and a set of parameters are passed in as arguments to the test. When using a  
Theory attribute, the test is ran for each occurrence of test input collection  
— in this case, on both Chromium and Firefox browsers. The  
GetTestCredentials method is used to get the test credentials stored  
as environment variables. If they’re not present, the test will fail. The test  
browser instance is created and launched using the ToBrowser method.  
The browser object is configured with the geolocation permission,  
and the latitude and longitude are set to test values. The context  
object is created, and the loginPage is created from the context. This  
is a result of awaiting the call to NewPageAsync. This method creates a  
new page in the browser context.  
We’re validating that a verified and registered user can login to the  
Learning Blazor site. We instruct the context to run and wait for the  
loginPage to navigate to the Learning Blazor site. As part of this  
operation, we conditionally add an initialization script that will set the client culture with the given locale. This is extremely powerful, as it allows for  
the testing of translations. It tests the following\:  
1\. The user can login with the correct credentials.  
2\. Given a user’s locale, the weather data is displayed in the correct  
language.  
With the loginPage, we then wait for the browser’s URL to match the  
login site URL. When that happens and the rendered HTML is not only  
loaded, but the network is also idle. If this doesn’t happen within a  
configurable amount of time, the test will fail. Once this condition is met,  
we fill in the username and password and click the “Sign in” button.  
If we’re unable to interact with the login page, find any of these specific  
elements, or any of these specific attributes, the test will fail. The test  
submits the login test credentials and given their geolocation  
permissions, the browser will be able to determine the current location. The  
test ends by verifying that the \#weather-city-state element contains  
the correct text. The test latitude and longitude are set to the test’s  
theory values as parameters. The correct string is matched against the  
known formatted City, State, and Country values.  
All of this functionality is only possible when an authenticated user is  
logged in, and their location is known. This end-to-end test runs on two  
browsers, and it is triggered whenever you push code to main on the  
app’s GitHub repository. This automated testing functionality pairs  
perfectly with the other tests in the model app! All of these tests are ran in  
an automated fashion, and the results are automatically published to the  
continuous integration \(CI\) pipeline. Let’s take a look at that next.  
# Automating Test Execution  
1A wise person once told me, “automate yourself out of a job” , and I’m  
happy to tell you that this philosophy pays dividends. As a developer, your  
goal is to be lazy, in a way. Whenever you catch yourself doing the same thing over and over, it’s time to automate. One way to do this is to use  
GitHub Actions. I love GitHub Actions! It’s a powerful and straightforward  
tool that you can use to automate the testing of your code as the code  
changes. I love GitHub Actions! They’re such a powerful tool, and I’m very  
excited to use them to automate the testing of my code. I believe it’s  
straightforward to automate the deployment of my code. In my opinion,  
GitHub has perfected the art of automation. With just a few lines of code,  
you can create a fully automated continuous delivery and continuous  
integration pipeline \(CI/CD\).  
In this section, I’ll show you how to automate a test with GitHub action  
workflows, using the Learning Blazor app as an example. To start, all  
recognizable GitHub Action workflow files should reside in the  
.github/workflows directory of your project’s GitHub repository. For  
example, in the Learning Blazor repository, there’s a  
.github/workflows/build-validation.yml file used to build  
and run unit tests. The build will fail if any of the numerous tests fail. Let’s  
look at the build-validation.yml YAML file\:  
name\: Build Validation  
on\:  
push\:  
branches\: \[ main \]  
paths-ignore\:  
-  
'\*\*.md'  
pull\_request\:  
types\: \[opened, synchronize, reopened, closed\]  
branches\:  
- main \# only run on main branch  
env\:  
TEST\_USERNAME\: \$\{\{ secrets.TEST\_USERNAME \}\}  
TEST\_PASSWORD\: \$\{\{ secrets.TEST\_PASSWORD \}\}  
jobs\:  
build\:  
name\: build  
runs-on\: ubuntu-latest - name\: Setup .NET 6.0  
uses\: actions/setup-dotnet@v1  
with\:  
dotnet-version\: 6.0.x  
- name\: Build  
run\: |  
dotnet build --configuration Release  
- uses\: actions/setup-node@v1  
name\: 'Setup Node'  
with\:  
node-version\: 18  
cache\: 'npm'  
cache-dependency-path\: subdir/package-lock.json  
- name\: 'Install Playwright browser dependencies'  
run\: |  
npx playwright install-deps  
- name\: Test  
run\: |  
dotnet test --verbosity normal  
The name is what displays on the GitHub README.md file status  
badges, along with the status of the latest run. Using the on attribute, we’re telling the GitHub Action to run on a  
specific event. The env attribute is used to set environment variables. Every workflow has a jobs attribute and a job has multiple steps.  
Some steps are to setup the build environment, or to install build  
dependencies. Playwright requires NodeJS, and its package manager, the Node  
Package Manager \(NPM\). Finally, dotnet test is called running all three sets of tests.  
In this case, we’re telling the workflow to run on a push event, and we’re  
only running on the main branch. We can specify additional logic  
extending to occur on the pull\_request event, or even run it manually  
from the GitHub UI with the workflow\_dispatch event. With this  
automated workflow, GitHub Actions will automatically run tests as your  
code changes so you don’t have to. Summary  
In this chapter, you learned why it’s important to test your code. You saw  
three distinct ways you can test your Blazor applications. You can use unit  
testing to make sure the tiniest pieces of your app are on point, component  
testing to make sure groups of things are going smoothly, and end-to-end  
testing to ensure that everything works together. You saw how to automate  
testing through GitHub Actions.  
We’ve covered a lot of ground throughout this entire book. I’ve shared with  
you some of the most important moving parts of a solution of projects  
containing more than ninety thousand lines of code — trust me, I counted.  
To continue learning more about Blazor, I encourage you to read\:  
The official Microsoft Docs by the amazing ASP.NET Core team, see  
ASP.NET Core Blazor.  
Check out the Awesome Blazor GitHub repository, which acts as a  
collection of awesome Blazor resources.  
Blazor University \(by Peter Morris\), a free online Blazor site packed  
with educational content.  
Watch on-demand Blazor content from the .NET Community on  
YouTube.  
I hope that you’ve enjoyed this book, and I hope that you’ll continue to  
learn and grow as a developer. All in all, Blazor is a very well-suited web  
application framework. To me, .NET has a huge advantage over other  
programming languages and platforms as I have shown throughout this  
book. I hope that my love for this stack will shine through, thank you for  
giving me this opportunity to walk you through Learning Blazor!  
1 Scott Hanselman \(Microsoft\) About the Author  
David Pine works in Developer Relations at Microsoft as a Senior Content  
Developer, focusing on .NET and Azure developer content. He is  
recognized as  
a Google Developer Expert in Web Technologies and is a  
Twilio Champion.  
Before joining Microsoft, David was a Microsoft MVP  
in Developer  
Technologies. David thrives in the developer community,  
actively sharing  
knowledge through speaking engagements around the  
world. He advocates for  
open source as a member the .NET Foundation,  
and has contributed to the .NET  
runtime and ASP.NET Core repositories,  
among many others. He is the author  
of the .NET version sweeper,  
resource-translator GitHub Action, and the  
Azure Cosmos DB repository-  
pattern .NET SDK. He’s a founding member and  
co-host of the .NET Docs  
Show which is part of .NET Live TV .  
To keep up with David Pine\:  
Twitter\: https\://twitter.com/davidpine7  
GitHub\: https\://github.com/ievangelist  
Website\: https\://davidpine.net  
