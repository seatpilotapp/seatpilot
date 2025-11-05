# Synthesis Lectures on Computer Science  
Paul A. GagniucCoding Examples  
# from Simple  
# to Complex  
Applications in JavaScript™ Paul A. Gagniuc  
Department of Engineering in Foreign  
Languages, Faculty of Engineering in Foreign  
Languages  
National University of Science and Technology  
Politehnica Bucharest  
Bucharest, Romania  
ISSN 1932-1228 ISSN 1932-1686 \(electronic\)  
Synthesis Lectures on Computer Science  
ISBN 978-3-031-53819-3 ISBN 978-3-031-53820-9 \(eBook\)  
https\://doi.org/10.1007/978-3-031-53820-9  
© The Editor\(s\) \(if applicable\) and The Author\(s\), under exclusive license to Springer Nature Switzerland AG  
2024  
This work is subject to copyright. All rights are solely and exclusively licensed by the Publisher, whether the whole  
or part of the material is concerned, specifically the rights of translation, reprinting, reuse of illustrations, recitation,  
broadcasting, reproduction on microfilms or in any other physical way, and transmission or information storage  
and retrieval, electronic adaptation, computer software, or by similar or dissimilar methodology now known or  
hereafter developed.  
The use of general descriptive names, registered names, trademarks, service marks, etc. in this publication does  
not imply, even in the absence of a specific statement, that such names are exempt from the relevant protective  
laws and regulations and therefore free for general use.  
The publisher, the authors and the editors are safe to assume that the advice and information in this book are  
believed to be true and accurate at the date of publication. Neither the publisher nor the authors or the editors give  
a warranty, expressed or implied, with respect to the material contained herein or for any errors or omissions that  
may have been made. The publisher remains neutral with regard to jurisdictional claims in published maps and  
institutional affiliations.  
This Springer imprint is published by the registered company Springer Nature Switzerland AG  
The registered company address is\: Gewerbestrasse 11, 6330 Cham, Switzerland  
Paper in this product is recyclable. Foreword  
The book *Coding Examples from Simple to Complex—Applications in JavaScript™* by  
Paul Aurelian Gagniuc is a very hands-on introduction to programming in JavaScript,  
appealing to readers ranging from novices making their first steps in the universe of  
programming to more seasoned developers, that can use a very rich reference of code  
examples. Because this is the main feature of this work, teaching through examples, over  
200, each chapter exemplifying the key concepts by exercises which are implemented,  
commented, and explained in great detail.  
The chosen language is JavaScript, most probably the most popular programming lan-  
guage nowadays. Readers of this book can quickly use the gained knowledge in real-world  
projects, as “Any application that can be written in JavaScript, will eventually be writ-  
ten in JavaScript.” \(Atwood’s Law\). Another advantage is that examples can be run on  
any computer or any computing device with a browser, without any necessary setting up.  
Indeed, programming is just a click away.  
The structure is well-thought, starting with traditional starting points in variable decla-  
ration, expressions, control statements, arrays, functions, and continuing with objects and  
advanced techniques. The author focuses on imperative programming techniques, more  
suitable for beginners, however, treating also functional programming and object-oriented  
programming in the respective chapters. The examples support the chapters in a logical  
succession, one advantage being that a simplified solution is shown before an optimized  
one, useful for a deeper understanding of the problem.  
The book continues with the moderate examples section, in which more real-world  
usages are shown, ranging from topics such as string manipulation, more advanced matrix  
operations, sorting algorithms, bitwise operations and encodings and statistics. As exam-  
ples are implemented without the use of other libraries except standard library, they are  
of great teaching value, in helping practitioners truly understand the inner workings of  
concepts.  
v vi Foreword  
Where the book is of interest to more advanced developers or researchers in different  
fields, is in the complex examples section, covering novel, state-of-the-art algorithms such  
as spectral forest or complex usage of Markov Chains, an area in which the author is a  
renowned expert.  
Andrei Vasilateanu  
Professor  
Faculty of Engineering in Foreign  
Languages  
National University of Science  
and Technology Politehnica Bucharest  
Bucharest, Romania Preface  
In web development, JavaScript stands as the cornerstone of modern programming and is  
the main computer language driving the Internet. Explore the rich world of JavaScript™  
with this work, a comprehensive guide that takes the reader on a journey from the funda-  
mentals to advanced topics, equipping the reader with the knowledge and skills needed to  
become a proficient JavaScript developer or scientist. Inside these pages, one discovers a  
treasure trove of practical examples, meticulously crafted to deepen the reader understand-  
ing of JavaScript. From the basics of variable naming and program structure to complex  
matrix operations, recursion, and object-oriented programming, this book covers it all.  
Key Features  
**Hands-on Learning**. Explore over 200 examples, carefully designed to reinforce your  
comprehension of JavaScript concepts and computer languages in general.  
**Comprehensive Coverage**. Navigate through the essentials of JavaScript, including  
variables, conditionals, loops, arrays, functions, JSON, and more.  
**Advanced Techniques**. Elevate your skills with intricate examples on matrix operations,  
complex logic gates, sequence alignment, and Markov Chains.  
**Real-World Applications**. Discover practical applications of JavaScript, from essential  
data manipulation to graphics and file uploads. Learn also how to implement mathematical  
formulas in code.  
**Browser-Specific Tips**. Learn about browser-specific functionality, local storage, and  
base64 encoding/decoding.  
vii viii Preface  
Throughout the following chapters, readers will gain a more profound understanding of  
JavaScript and its multifaceted applications. This comprehensive exploration is designed  
to cater to both novice learners, mature developers, and scientists, equipping them with  
the requisite knowledge and competencies to harness the JavaScript full potential in their  
respective projects. For a journey into the field of software engineering, JavaScript pro-  
gramming unfolds as a systematic and rigorous exploration. This book is part of a series  
of book titles that aims to mirror these examples and their explanations, as close to each  
other as possible. Thus, these examples can also be found in other computer languages.  
Bucharest, Romania Paul A. Gagniuc Contents  
**1 Introduction**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1  
1.1 1.2 Future of JavaScript . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2  
The Content is Native . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2  
**2 Variables**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5  
**3 Conditional Branching**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **4 Loops**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **5 Arrays**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **6 Traversal of Multidimensional Arrays**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **7 Matrix Operations**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **8 Functions**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8.1 8.2 8.3 Built-in Functions/Methods . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Making of Functions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Recursion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **9 Objects**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9.1 9.2 Constructors and Methods . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . JSON . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **10 Moderate Examples**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10.1 10.2 10.3 10.4 10.5 10.6 10.7 10.8 Load Arrays from Strings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Some Matrix Operations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Logical Operations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Miscellaneous . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Sorting . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Permutations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Statistics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Useful conversions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15  
19  
29  
59  
73  
107  
107  
113  
121  
127  
128  
134  
141  
141  
150  
154  
162  
168  
171  
173  
182  
ix x Contents  
**11 12 13 Complex Examples**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **Randomnes and Programming**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **Browser Specific**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . **References**. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 195  
215  
227  
237 Introduction  
# 1  
JavaScript, often abbreviated as JS, is a pivotal programming language that has profoundly  
impacted web development and digital experiences. Its origin can be traced back to the  
early 1990s when the internet was in its nascent stages \[1\]. At that time, the World  
Wide Web was primarily static, displaying text and images \[2, 3\]. A visionary engineer  
named Brendan Eich, working at Netscape Communications, was tasked with creating a  
language to make web pages more dynamic and interactive \[4\]. In just ten days, Eich  
crafted the initial version of JavaScript, initially named “Mocha” and later “LiveScript”  
before settling on the name we know today. In 1995, JavaScript was officially released as  
part of Netscape Navigator 2.0, marking the beginning of its remarkable journey \[1, 5\].  
JavaScript introduction was groundbreaking \[1, 6\]. It allowed developers to embed scripts  
directly into HTML documents, enabling real-time manipulation of web content \[1\]. This  
newfound interactivity paved the way for dynamic forms, client-side validation, and the  
ability to update web pages without requiring a full page reload \[1\]. These capabilities  
transformed the static web into a dynamic platform, giving rise to the era of web-based  
software \[1\]. Also, JavaScript significance was further bolstered by the proliferation of  
libraries and frameworks. jQuery tried to simplify DOM manipulation, making it more  
accessible to low-level and untrained developers \[1, 7\]. Angular, React, and Vue.js, among  
others, introduced component-based architecture and enhanced the development of single-  
page applications \(SPAs\) \[1, 8–10\]. These tools streamlined complex web development  
projects and fueled JavaScript prominence in the tech world.  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_1  
1 2 1 Introduction  
1.1 Future of JavaScript  
Today, JavaScript is the backbone of modern web development. It empowers developers  
to create responsive, interactive, and feature-rich web applications that run seamlessly  
across devices and browsers. Its versatility has led to its adoption in various domains,  
including mobile app development \(with technologies like React Native and NativeScript\),  
game development \(using libraries like Phaser\), and even serverless computing through  
AWS Lambda and Azure Functions. On the other hand, the JavaScript future is promis-  
ing, with several key trends and developments. JavaScript will work in harmony with  
WebAssembly, allowing developers to run high-performance code in web browsers at  
near-native speeds \[1, 11–13\]. Progressive Web Apps \(PWAs\), powered by JavaScript,  
will continue to gain traction due to their ability to deliver app-like experiences in web  
browsers, enhancing user engagement and reducing load times \[1, 14, 15\]. Moreover, the  
JavaScript role in serverless computing will expand, enabling developers to build scalable  
and cost-effective backend services. Also, with libraries like TensorFlow.js, JavaScript is  
making strides in the field of machine learning and artificial intelligence, opening up new  
possibilities for web-based AI applications \[16–18\]. As expected, JavaScript will continue  
to evolve with improved security features to combat emerging threats in the digital land-  
scape. Nonetheless, the journey of JavaScript from its humble beginnings to its current  
status as a fundamental language in web development has been nothing short of remark-  
able. Its pivotal role in shaping the web evolution, from static pages to dynamic web  
applications, underscores its enduring significance \[1\]. As JavaScript continues to adapt  
and evolve, it will remain a driving force behind the ever-expanding realm of digital expe-  
riences and innovations. Its versatility, combined with an active and passionate developer  
community, ensures that the future of JavaScript is bright and full of possibilities.  
1.2 The Content is Native  
This work showcases native Javascript implementations from basic to complex, and is  
addressed to a large audience, from beginners to PhD students and even mature scien-  
tists and engineers. The first part of this book describes the use of variables, conditional  
branching and loops. Variables, as foundational elements of programming languages, form  
the focus of the first chapter. Topics covered include variable declaration and initialization,  
nomenclature conventions, and the composition of a basic JavaScript program. Addition-  
ally, discussions will encompass assignment, variable types \(specifically the distinctions  
between “let” and “var” declarations\), fundamental arithmetic operations, and related  
subjects. Also, conditional branching mechanisms, which facilitate decision-making pro-  
cesses and the execution of divergent code segments based on predetermined conditions,  
are explored in detail. Emphasis is placed on a variety of conditional statements such 1.2 The Content is Native 3  
as “if-then,” “if-then-else,” “if-then-elseif-else,” and the “switch” construct. These con-  
structs enable the manipulation of program flow and responsiveness to varying scenarios.  
Next, the concept of loops is explored in detail, as it is instrumental in iteratively exe-  
cuting code blocks and enhancing program efficiency. A comprehensive exploration of  
both “While” and “For” loops is undertaken. Topics of interest include count-controlled  
loops, array traversal, and intricate mathematical computations. The utilization of con-  
trol statements like “break” and “continue” is also addressed. In a second part of the  
book, more complex variables such as Arrays are described by example. The subject of  
multidimensional traversal of arrays is also covered, and then some matrix operations  
are shown. Arrays, as fundamental data structures for organizing and manipulating data  
collections, are scrutinized in a dedicated chapter. Topics encompass basic array opera-  
tions such as element addition and retrieval, length calculation, and array traversal. The  
employment of various loop types for array traversal is discussed in detail. Moreover,  
the traversal and manipulation of these multidimensional arrays are explored compre-  
hensively. The discussion extends to encompass 2D and 3D arrays, matrix operations,  
and transformations including transposition and rotation. Furthermore, matrix operations  
are shown as pivotal in mathematical and graphical contexts by using specific examples.  
Subjects addressed include summation, multiplication, diagonal extraction, transposition,  
and related matrix operations. In a third part of this paper, functions, object construc-  
tors, and methods are thoroughly explored from several angles, and the JSON method  
is presented as an exchange medium between different data formats. Functions, instru-  
mental in code reusability and modularity, are the primary focus of an extensive chapter.  
Both built-in and user-defined functions are explored in depth. Topics encompass function  
creation, parameterization, and return value handling. Additionally, discussions extend  
to recursion, logical operations, sorting algorithms, statistical computations, and diverse  
practical examples showcasing the versatility of functions in JavaScript. The conceptual-  
ization and implementation of objects, their properties, and methods are expounded upon  
in a separate chapter. Object constructors, object instantiation, and the inclusion of meth-  
ods within objects are thoroughly explored. Practical examples underscore the principles  
of object-oriented programming in JavaScript. Also, JSON \(JavaScript Object Notation\)  
as a prevalent data interchange format is the central theme of this chapter. The chapter  
addresses the conversion between JavaScript objects and JSON, manipulation of JSON  
data, and the handling of complex JSON structures. In the fourth part of the book, the  
reader encounters moderate and complex examples and, most importantly, cases related to  
randomness and programming. The chapter on moderate and complex example serves as  
a culmination of JavaScript knowledge, presenting intricate examples that demonstrate the  
utility of the language in solving real-world problems. Topics include statistical analysis,  
sequence alignment, and text processing, offering insights into advanced programming  
techniques. Also, the chapter on randomness discusses methods that show how to model  
a random process. In the last part of the book, the discussion focuses on javascript appli-  
cations that are browser specific. The chapter explores JavaScript features specific to web 4 1 Introduction  
browsers, encompassing base64 encoding and decoding using built-in functions and local  
storage mechanisms. Among others, the final chapter also introduces readers to graphics  
programming in JavaScript, covering the creation of visual elements, shape rendering, and  
interactive graphics using technologies such as HTML5 Canvas. Variables  
# 2  
A variable can be conceptualized as a symbolic representation or an abstract entity that  
holds information \[1\]. This information can take various forms, from simple numerical  
values, strings of text, to more complex data structures. The central essence of a variable  
lies in its ability to change or vary, making it indispensable in algorithms and computa-  
tional processes \[1\]. Variables are foundational to computer programming because they  
allow for the storage and manipulation of data. Each variable has an associated data type,  
which dictates the kind of information the variable can store. For instance, an integer  
data type variable can store whole numbers, whereas a floating-point data type might  
store numbers with decimal points. When a variable is declared in a computer program,  
a specific portion of the computer memory is allocated to store its value. This allocation  
ensures that when the value of the variable is called upon or modified, the program knows  
exactly where to look in memory. Each variable has a unique memory address, which acts  
like a reference point for any computational operation involving that variable. Variables  
also possess attributes such as scope \(determining where in a program a variable can be  
accessed\) and lifetime \(indicating how long the variable remains in memory\). The impor-  
tance of these attributes becomes evident in more advanced programming tasks, such as  
managing memory or optimizing code for performance. In scientific computing, variables  
often represent physical quantities or abstract mathematical constructs. Their ability to  
change values dynamically allows for the simulation of real-world systems, from mod-  
eling the motion of celestial bodies to predicting weather patterns. Scientists can run  
multiple scenarios or simulations to analyze different outcomes and derive meaningful  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_2  
5 6 2 Variables  
conclusions just by adjusting the values of these variables. Thus, variables serve as the  
backbone of computational algorithms and programs. Their dynamic nature, combined  
with the precise control they offer over data manipulation, makes them a cornerstone in  
the world of computer science and scientific computing. Thus, the examples shown below  
start from basic exercises that familiarize the reader with the notion of variables.  
2.1.1  
// this is a comment in javascript Output\:  
In JavaScript, the // syntax is used to denote a single-line comment. Anything that  
follows the // on that same line is treated as a comment and will not be executed or  
interpreted as code by the JavaScript engine. Instead, it is meant to provide context or  
explanations for developers reading the code.  
2.1.2  
A = 1;  
Output\:  
a = 2;  
a1 = 3;  
1  
a\_1 = 4;  
2  
3  
print\(A\);  
4  
print\(a\);  
print\(a1\);  
print\(a\_1\); 2 Variables 7  
This JavaScript code initializes four variables with distinct names and values. The  
variable A is assigned the value 1, while the variable a is assigned the value 2. Similarly,  
a1 is given the value 3, and a 1 is assigned the value 4. Following these assignments, the  
values of these variables are printed out sequentially using the print function. First, the  
value of A is printed, followed by the values of a, a1, and finally a 1. It is worth noting  
that JavaScript is case-sensitive, so the variable A is different from the variable a.  
2.1.3  
Ex. \(3\) – Write your first Javascript program  
a = 3;  
Output\:  
b = 5;  
c = a + b;  
8  
print\(c\);  
The given JavaScript code from above initializes a variable a with a value of 3 and a  
variable b with a value of 5. It then calculates the sum of these two variables and assigns  
the result to a third variable named c. Next, the value of c is printed to the console or  
displayed using a function named print. The output of this code is 8.  
2.1.4  
Ex. \(4\) – The meaning of “a = b”  
a = 3;  
Output\:  
b = a;  
print\(b\);  
3  
The JavaScript code begins by assigning the value 3 to the variable a. Following that,  
the value of a \(which is 3\) is assigned to another variable named b. Next, the print\(b\)  
statement outputs the value of b, which would display 3. It is worth noting that while  
print\(\) is a common function in some programming languages, in standard JavaScript  
used in web browsers, the typical way to output something to the console would be  
console.log\(b\). However, print is used in the online compilers in which all the examples  
of this book were formulated and tested. 8 2 Variables  
2.1.5  
//let allows for one time  
Output\:  
//declaratin of a variable\:  
let a = "text";  
//let a = 0;  
//Var allows for data  
//type change of a variable  
var b = "text";  
var b = 0;  
The provided JavaScript code from above contains explanations and examples of how  
let and var keywords work in variable declaration. Initially, there is a comment that  
states that the let keyword allows for a one-time declaration of a variable. Following this  
comment, a variable a is declared using let and assigned the string value “text”. After  
this, there is another line where variable a is declared again with the value 0, but this line  
is commented out. This might suggest that if this line were uncommented, it would result  
in an error because with let, one cannot re-declare a variable within the same scope. The  
code then continues to describe the behavior of the var keyword. The comment suggests  
that var allows for changing the data type of a variable. A variable b is declared using  
var and assigned the string value “text”. Following this, the same variable b is re-declared  
with the value 0. Unlike let, var permits this behavior without throwing an error, hence  
showcasing the flexibility \(and potential pitfalls\) of using var for variable declarations.  
2.1.6  
Ex. \(6\) – Basic mathematical operations  
a = 3;  
Output\:  
b = 2;  
c = a + b / 2 - a \* b;  
-2  
print\(c\); 2 Variables 9  
The above JavaScript code first assigns the value 3 to the variable a and the value  
2 to the variable b. Next, it performs a series of arithmetic operations using these two  
variables. Specifically, it divides b by 2, then adds the result to a, and from that sum, it  
subtracts the product of a multiplied by b. The final result of these calculations is assigned  
to the variable c. Lastly, the value of c is printed out. However, again, it is worth noting  
that in standard JavaScript, there is no print function. Instead, the typical methods for  
outputting to the console are console.log\(c\) or displaying to the user with methods like  
alert\(c\).  
2.1.7  
a = 3;  
Output\:  
a = a % 2;  
print\(a\);  
1  
The code starts by assigning the value 3 to the variable a. Next, it modifies the value  
of a by setting it to the remainder when a is divided by 2, which is done using the  
modulus \(%\) operator. The modulus operation determines the remainder of the division  
of a by 2. Thus, 3 divided by 2 gives a quotient of 1 and a remainder of 1. Therefore,  
after the modulus operation, the value of a becomes 1. Next, it uses a print\(a\) statement  
to display the value of a. For using this example in the browser, typically, one would use  
console.log\(a\) to output the value to the console.  
2.1.8  
a = 2;  
Output\:  
a = a + 1;  
print\(a\);  
3 10 2 Variables  
The given JavaScript code starts by assigning the value 2 to the variable a. It then  
increments the value of a by 1. Next, it prints \(console.log\(a\) for browsers\) the value of  
a, which would now be 3. Therefore, the output shows a value of 3.  
2.1.9  
a = 2;  
Output\:  
a += 1;  
print\(a\);  
3  
The given JavaScript code first assigns the value 2 to the variable a. Then, it increments  
the value of a by 1 using the “+=” operator, which is shorthand for a = a + 1. After  
these operations, the value of a becomes 3. Next, it prints the value of a using the print\(a\)  
statement.  
2.1.10  
Ex. \(10\) – The post-decrement operator  
a = 2;  
Output\:  
a--;  
print\(a\);  
1  
The given JavaScript code starts by assigning the value 2 to the variable a. After this,  
the value of a is decremented by 1 using the decrement operator “–”. As a result, the  
value of a becomes 1. Next, the print\(a\) statement is intended to display the value of a,  
which is 1.  
2.1.11  
a = 2;  
Output\:  
a = --a;  
a = --a;  
0  
print\(a\); 2 Variables 11  
The JavaScript code initializes a variable a with the value of 2. Then, it decrements  
the value of a using the “–” prefix operator, which decreases the value of a by 1 before  
assigning it back to a. This decrement operation is done twice in succession. Therefore,  
after the two decrement operations, the value of a is decreased by a total of 2. Next, the  
print\(a\); statement will display the final value of a, which is 0.  
2.1.12  
a = 2;  
Output\:  
a += --a;  
a += --a;  
5  
print\(a\);  
The code from above performs a series of operations on the variable a. Initially, a is  
assigned a value of 2. In the next line, a is incremented by the result of –a. The “–”  
before a is a pre-decrement operator, which means it decreases the value of a by 1 before  
the operation takes place. Thus, a becomes 1, and then 2 \(the original value of a\) is  
incremented by this new value of 1, resulting in a being 3. In the following line, a similar  
operation takes place. The value of a is decremented again by 1 \(making it 2\) and then 3  
\(the current value of a\) is incremented by this new value of 2. This makes a equal to 5.  
Next, the print\(a\) statement outputs the value of a to the console, which is 5.  
2.1.13  
let a = 3;  
Output\:  
let b = 7;  
let t = 0;  
a = 7  
b = 3  
t = a;  
a = b;  
b = t;  
print\('a = ' + a\);  
print\('b = ' + b\); 12 2 Variables  
The given code initializes three variables\: a, b, and t, with the values 3, 7, and 0  
respectively. The purpose of the code is to swap the values of a and b without using  
any direct arithmetic operations or additional variables. To achieve this, the value of a is  
first stored in the temporary variable t. Then, the value of b is assigned to a, effectively  
overwriting a original value. Lastly, the value stored in t \(which is the original value  
of a\) is assigned to b, completing the swap. After the swapping operation, two print  
statements display the updated values of a and b, showing that their values have indeed  
been exchanged. Thus, after the code executes, the output will be “a = 7” and “b = 3”.  
2.1.14  
a = 3;  
Output\:  
b = a + 7;  
a = null;  
null  
print\(a\);  
10  
print\(b\);  
The JavaScript code initializes a variable a with the value 3. Then, it initializes another  
variable b and assigns it the result of adding a to 7, making the value of b equal to 10.  
Afterward, the value of a is set to null. Next, the code prints the value of a, which is null,  
and then prints the value of b, which remains 10.  
2.1.15  
s = 1 + 2 + 3 +  
Output\:  
4 + 5 + 6 + 7 + 8;  
print\(s\);  
36  
The given code is performing an arithmetic operation where multiple numbers are  
being added together. It starts by adding the numbers 1, 2, and 3. The addition then  
continues on the next line with the numbers 4 through 8. After computing the sum, which  
is stored in the variable s, the result is printed to the console using the print\(s\) statement.  
2.1.16  
var a = 3;  
Output\:  
var b = 7;  
var c = 10;  
3.7 is a number.  
var r = "a = " + a + " and b = " + b;  
a = 3 and b = 7  
var t = " is a number.\\n";  
var l = \(a+b/c\)+t;  
print\(l + r\); 2 Variables 13  
In this code snippet, several variables are declared and manipulated. First, variables  
a, b, and c are declared and initialized with numerical values 3, 7, and 10, respectively.  
Next, a string variable r is created and assigned a value that concatenates the string “a =  
“ with the value of a, then “ and b = “ with the value of b. This will create a string that  
describes the values of variables a and b. Another string variable t is initialized with the  
string “ is a number.\\n”, where “\\n” is an escape character for a new line. The variable  
l is then created, and it stores the result of an arithmetic operation that adds a to the  
division of b by c. This result is then concatenated with the string stored in t. Next, the  
print function is called to display the combined value of l and r. Conditional Branching  
# 3  
Conditional branching, also colloquially known as decision-making in source code, is  
a fundamental concept in computer science and algorithm design, enabling systems to  
perform different computations depending on whether a specified boolean condition eval-  
uates to true or false \[1\]. At its core, conditional branching simulates the logical reasoning  
humans naturally employ in decision-making processes. For instance, if it is raining,  
one might choose to take an umbrella. Similarly, in code, such decisions are repre-  
sented using constructs like if-else statements. In structured programming languages,  
these branches are often encapsulated within if, else if, and else constructs. For exam-  
ple, an algorithm that determines whether a number is positive, negative, or zero might  
use conditional branching to evaluate the number and return an appropriate response.  
Moreover, conditional branching extends beyond simple binary choices. The switch-case  
construct, present in many programming languages, allows for multiple conditions to  
be evaluated in sequence, facilitating decisions amongst numerous potential pathways.  
From a computational efficiency perspective, conditional branches introduce the concept  
of non-linear code execution. Rather than executing a sequence of instructions linearly, the  
program may skip over large chunks of code based on the outcome of a condition. This  
allows for more efficient code execution but introduces complexity in terms of ensur-  
ing each branch leads to a valid and expected program state. In modern architectures,  
however, excessive branching can be detrimental to performance due to the mechan-  
ics of pipelining and branch prediction in CPUs. A mispredicted branch can result in a  
CPU pipeline stall, leading to wasted clock cycles. As a result, while conditional branch-  
ing is a powerful tool, understanding its implications on underlying hardware is crucial  
for performance-critical applications. Thus, decision-making is indispensable in software  
design, enabling dynamic decision-making based on evolving conditions. Its effective  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_3  
15 16 3 Conditional Branching  
use, combined with an understanding of its impact on computational efficiency, remains  
paramount for software development.  
var a = 4;  
var b = 7;  
if \(a\<b\)\{print\(a\);\} else \{print\(b\);\}  
Output\:  
4  
The JavaScript code defines two variables, a with a value of 4 and b with a value of  
7\. It then checks if the value of a is less than the value of b using an if-else statement. If  
the condition is true, meaning if a is indeed less than b, it will print the value of a to the  
console or screen. If the condition is false, it will print the value of b. In this case, since  
4 is less than 7, it will print the value of a, which is 4.  
let a = 2;  
let b = 3;  
let c = 1;  
if\(a \< b\)\{c = 0;\}  
print\(c\);  
Output\:  
0  
This JavaScript code initializes three variables\: a is assigned the value 2, b is assigned  
the value 3, and c is assigned the value 1. It then checks if the value of a is less than the  
value of b. If this condition is true, which it is in this case since 2 is less than 3, the value  
of c is updated to 0. The value of c is printed. Given the initial values and the condition  
provided, the output will be 0.  
a = 1;  
b = 2;  
c = 3;  
if\(a \< b\)\{c += 1;\} else \{c -= 1;\}  
print\("c=" + c\);  
Output\:  
c=4  
The given JavaScript source code from above initializes three variables\: a is assigned  
a value of 1, b is assigned a value of 2, and c is assigned a value of 3. Then, there is 3 Conditional Branching 17  
an if-else conditional statement that checks if the value of a is less than the value of b.  
If this condition is true, the value of c is incremented by 1. If the condition is not true  
\(i.e., if a is not less than b\), the value of c is decremented by 1. After evaluating this  
conditional statement, the code prints the value of c with a prefix “c=” to the console.  
After the if-else statement, the value of c would be 4 because the condition a \< b \(1 is  
less than 2\) is true.  
a = 1;  
b = 2;  
c = 3;  
if\(a \< b\)\{  
c -= 1;  
\} else if\(b==c\)\{  
c += 1;  
\} else \{  
c = 0;  
\}  
Output\:  
c=2  
print\("c=" + c\);  
The given JavaScript code initializes three variables\: a with a value of 1, b with a  
value of 2, and c with a value of 3. The code then contains a conditional structure to  
manipulate the value of c based on certain conditions. If the value of a is less than b, then  
1 is subtracted from the current value of c. If that condition is not met but the value of  
b is equal to the value of c, then 1 is added to the current value of c. If neither of these  
conditions is satisfied, the value of c is set to 0. After evaluating these conditions, the  
code prints the string “c =” followed by the current value of c. 18 3 Conditional Branching  
let a = 1;  
let b = 0;  
switch \(a\) \{  
case 0\:  
b = 11;  
break;  
case 1\:  
b = 64;  
break;  
case 2\:  
b = 33;  
Output\:  
64  
\}  
print\(b\);  
This JavaScript code starts by declaring two variables, a and b, and assigning them the  
values of 1 and 0 respectively. Then, a switch statement is used to evaluate the value of  
a. If a is 0, the value 11 will be assigned to b. If a is 1, then b will be assigned the value  
64\. If a is 2, the value 33 will be assigned to b. The break statements ensure that once a  
match is found in the switch statement, the program exits out of the switch block without  
checking the remaining cases. Lastly, the value of b is printed out. Given the initial value  
of a is 1, the printed value of b will be 64. Loops  
# 4  
In computational theory and the field of computer programming, loops hold a paramount  
position \[1\]. They are fundamental structures that facilitate the repeated execution of a set  
of instructions, enabling efficient automation and repetitive task handling. From a con-  
ceptual viewpoint, a loop is a mechanism by which a process can be reiterated until a  
specific condition or set of conditions is met. This cyclic execution allows for the effi-  
cient handling of tasks that follow a recurrent nature. There are several types of loops,  
primarily distinguished by their control mechanisms\: \(a\) For-Loop, that is generally used  
when the number of iterations is known in advance. The loop contains an initializer, a  
condition, and an iterator. It commences with the initialization, checks the condition, and  
post-execution, the iterator modifies the loop variable, leading to the next iteration or  
exit. \(b\) While-Loop, that is predominantly used when the number of iterations is not  
predetermined, the while loop checks a condition before every iteration. If the condi-  
tion evaluates to true, the loop body is executed. \(c\) Do-While Loop, that is a variant of  
the while loop, the do-while ensures that the loop body is executed at least once before  
checking the condition, given that the condition is evaluated post the execution of the  
loop body. Each iteration within a loop is commonly referred to as a “cycle”. In every  
cycle, the computational instructions are reevaluated, often with altered variables, leading  
to different outcomes in each iteration. It is vital to ensure that loops have a definitive  
termination point or a condition that will be met, to prevent infinite looping, which can  
lead to system hang-ups or overconsumption of computational resources. Loops are foun-  
dational constructs in computer programming that harness the power of computation by  
enabling repetitive execution based on conditions. Some basic examples are shown here  
in order to familiarize the reader with these structures.  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_4  
19 20 4 Loops  
The code initializes a variable named i with the value of 0. Then, a while loop starts,  
which continues executing its body as long as the condition i \< 5 holds true. Inside the  
loop, a print function is called, which displays the current value of i in the format “i =  
\[value of i\]”. After printing the value, the value of i is incremented by 1 using the i + +  
statement. As a result, the loop will print the values of i from 0 to 4. Once i reaches 5,  
the condition i \< 5 will no longer be true, and the loop will terminate.  
This JavaScript code initializes a variable i with a value of 0. It then enters a “do-  
while” loop. Inside the loop, a print function is called to display the current value of i,  
which is concatenated with the string “i =”. After that, the value of i is incremented by  
1\. The loop continues to execute as long as the value of i is less than 5. Once i reaches 5,  
the loop stops. Thus, the output of this code would be a sequence of printed statements  
displaying “i = 0”, “i = 1”, “i = 2”, “i = 3”, and “i = 4”. 4 Loops 21  
The code above is a for-loop that initializes a variable i to 0. It then checks if the value  
of i is less than 5. If the condition is true, the code inside the loop is executed. Inside the  
loop, there is a function call to print\(i\), which would display or log the value of i. After  
executing the loop body, i is incremented by 1 \(i++\). The loop will continue to execute  
as long as i is less than 5. As a result, the numbers 0 through 4 will be passed to the print  
function one at a time.  
The given code initializes a loop with a variable i set to 0. The loop continues to run  
as long as the value of i is less than 5. With each iteration of the loop, the value of i  
increases by 1 due to the i++ increment operation. Inside the loop, there is a function  
call to print\(\) which takes the expression 5-i as its argument. This means that for each  
iteration of the loop, the function will print a value that starts from 5 \(when i is 0\) and  
decrements by 1 with each subsequent iteration. Thus, the sequence of numbers printed  
will be 5, 4, 3, 2, and finally 1.  
The given JavaScript code initializes a for-loop with the variable i set to 10. The loop  
continues executing as long as the value of i is greater than 5. With each iteration of the  
loop, the value of i is decremented by 1. Inside the loop body, there is a print\(i\) statement,  
which would ideally print the current value of i. 22 4 Loops  
The given code consists of a for-loop that initializes a variable i with the value of  
10\. The loop will continue executing as long as the value of i is greater than 5. After  
each iteration of the loop, the value of i is decremented using the i–operation. Inside the  
loop body, there is a call to a function named print. This function receives a value which  
is the result of decrementing i by 1 using the –i operation. Due to this pre-decrement  
operation inside the loop, i is effectively decremented twice in each iteration\: once in the  
print function argument and once at the end of the loop iteration. As a result, the values  
printed by the loop will be 9 and 7, after which the loop will terminate since i will be  
equal to 6, which does not satisfy the loop condition of being greater than 5.  
The provided JavaScript code initializes a variable a with the value of 5. It then uses a  
for-loop to iterate from 0 up to, but not including, the value of a \(which is 5\). During each  
iteration of the loop, it calls a function named print with the argument a-i. This means  
that with each iteration, it will print the result of subtracting the current loop index i from  
a. In this specific case, the sequence of numbers that will be printed is 5, 4, 3, 2, and 1.  
The above code initializes a variable a with a value of 0. Following this initialization,  
there is a for-loop that runs 5 times. Within each iteration of the loop, the value of i \(which  
starts from 1 and increments by 1 each time\) is added to the product of 4 multiplied by 3.  
The result of this addition is then added to the current value of a. Essentially, during each  
loop iteration, 12 \(which is 4 multiplied by 3\) is added to the value of i and the sum is  
added to a. After the loop completes its 5 iterations, the print function is called to display  
the final value of a. The print function here outputs the final value of a to the console. 4 Loops 23  
The given JavaScript code initializes a variable named a with a value of 0. Then, there  
is a for-loop that iterates 11 times, starting with the value 0 up to, but not including, the  
value 11. Within each iteration of the loop, the value of i \(which is the loop counter\) is  
added to the current value of a. As a result, a accumulates the sum of integers from 0 to  
10\. After the loop completes its execution, the value of a \(which will be the sum of the  
integers from 0 to 10\) is printed out.  
The JavaScript code initializes a variable r with the value 0. It then sets up a nested  
loop structure\: the outer loop runs with the variable i from 0 up to, but not including, 10,  
and for each iteration of this outer loop, an inner loop runs with the variable j also from  
0 up to, but not including, 10. During each iteration of the inner loop, the value of r is  
incremented by 1. As a result, the inner loop runs a total of 100 times \(10 times for each  
of the 10 iterations of the outer loop\). Hence, by the end of the nested loops, the value  
of r will be 100. After the loops are finished, the code prints the value of r, which will  
display the number 100. 24 4 Loops  
The given JavaScript code initializes a variable r with the value of 0. It then uses a  
nested for-loop, where the outer loop runs 4 times \(with the loop variable i ranging from  
0 to 3\) and the inner loop also runs 4 times \(with the loop variable j ranging from 0 to  
3\). For each iteration of the inner loop, the value of r is incremented by 3. Since there  
are a total of 16 iterations \(4 from the outer loop multiplied by 4 from the inner loop\), r  
is incremented by 3 a total of 16 times. As a result, by the end of these nested loops, the  
value of r becomes 48. Next, the code uses the print function to display the value of r,  
which would output the number 48.  
The JavaScript code initializes a variable r with a value of 0. It then has a nested loop  
where the outer loop uses a variable i which runs from 0 to 9, and the inner loop uses a  
variable j which also runs from 0 to 9. For each combination of i and j, the product of  
i and j is calculated and added to the value of r. After both loops have completed their  
iterations, the accumulated total in r is then printed out. Essentially, the code computes  
the sum of products of all possible combinations of i and j within the range specified. 4 Loops 25  
The JavaScript code initializes three variables\: a with a value of 0, m with a value of  
3, and n with a value of 5. It then contains a nested loop where the outer loop runs as  
long as j is less than or equal to m \(3 times in this case\), and for each iteration of this  
outer loop, an inner loop runs as long as i is less than or equal to n \(5 times\). Within the  
inner loop, the value of a is incremented by the sum of i and three times j. After both  
loops have finished executing, the accumulated value of a is printed out. The purpose of  
this code is to accumulate a sum based on the conditions and limits set by the variables  
m and n.  
The given JavaScript code initializes a variable a with the value of 0. It then uses a  
nested for-loop structure to iterate and modify the value of a. The outer loop, controlled  
by the variable j, runs three times, as j goes from 1 through 3 inclusive. Inside this outer  
loop, there is an inner loop controlled by the variable i, which runs five times for each  
iteration of the outer loop, since i goes from 1 through 5 inclusive. For every iteration of  
the inner loop, the value of a is incremented by the result of the expression \(i + 1\*3\).  
This expression adds i to the product of 1 and 3. Given the rules of arithmetic operation  
precedence, the multiplication is performed before the addition, thus, the expression is  
equivalent to \(i + 3\). Given the loop structures, this means the operation \(i + 3\) is  
executed a total of 15 times \(3 times for the outer loop multiplied by 5 times for the inner  
loop\). Next, after both loops have completed their iterations, the value of a is printed out. 26 4 Loops  
The given JavaScript code initializes three variables\: a with a value of 0, m with a  
value of 3, and n with a value of 5. The code then sets up a nested loop structure with an  
outer loop running from 1 through the value of m \(inclusive\) and an inner loop running  
from 1 through the value of n \(inclusive\). Inside the innermost part of this nested loop,  
the value of a is incremented by the sum of the current value of i and the product of  
the current value of j and m. After both loops have fully executed, the final value of a is  
printed out. Essentially, this code performs a computation based on the two loop counters  
and accumulates the result in the variable a.  
The given JavaScript code begins by initializing two variables\: a is set to 0, and m  
is set to 4. Following this, there is a nested loop structure. The outer loop runs with the  
variable j, starting from 1 up to and including the value of m, which is 4. Inside this outer  
loop, there is an inner loop that runs with the variable i, starting from 1 and going up  
to the current value of j from the outer loop. Within the inner loop, the code calculates  
a value by adding i and the product of j and m. This calculated value is then added to  
the current value of a, effectively updating a with each iteration of the inner loop. Once  
both loops have completed their iterations, the final accumulated value of a is printed out  
using the print\(\) function. 4 Loops 27  
The given JavaScript code initializes three variables a, m, and n with the values 0, 5,  
and 7, respectively. The code then has a nested loop where the outer loop runs with the  
variable j iterating from 1 through the value of m \(which is 5\). For each iteration of the  
outer loop, the inner loop runs with the variable i starting from the current value of j up  
to the value of n \(which is 7\). Within the inner loop, the value of a is updated by adding  
the sum of i and the product of j and m. After both loops are completed, the value of a is  
printed. Essentially, this code is calculating a summation based on the provided formula  
and values of m and n.  
The provided JavaScript code consists of a nested loop. The outer loop, controlled by  
the variable i, runs for two iterations, with i taking values 0 and 1. Inside each iteration  
of this outer loop, there is an inner loop, controlled by the variable j, which runs for  
three iterations, making j take on the values 0, 1, and 2. During each iteration of the  
inner loop, the print function is called to display the current values of both i and j. As a  
result, the message “i = \[value of i\], j = \[value of j\]” will be printed a total of six times,  
reflecting every combination of i and j within the specified ranges. For example, the first  
few messages will be “i = 0, j = 0”, “i = 0, j = 1”, “i = 0, j = 2”, and so on. 28 4 Loops  
The JavaScript code snippet initializes three variables i, j, and v to 0 and two other  
variables n1 and n2 to 2 and 3, respectively. It also calculates the product of n1 and n2,  
storing the result in a variable named q. A for-loop then iterates v from 0 up to, but not  
including, the value of q. Inside the loop, the value of j is calculated as the remainder of  
the division of v by n2. A conditional if statement checks if j is 0, v is not 0, i is less than  
n1, and v is not equal to q. If all these conditions are met, i is incremented by 1. After  
each iteration of the loop, the print function is called to output the current values of i and  
j. The purpose of the code is to explore the behavior of the variables i and j as v goes  
from 0 to q−1, under certain conditions specified in the if statement. It showcases how  
the value of i can be incremented based on the other variables and conditions within the  
loop. Note that the use of var for variable declarations is considered outdated in modern  
JavaScript, and it is generally recommended to use let or const instead. Also, print is not  
a standard JavaScript function for writing to the console; usually, console.log is used. Arrays  
# 5  
Data structures are pivotal constructs that enable the systematic organization and manage-  
ment of data \[1\]. One of the quintessential and most universally utilized data structures  
is the array. An array can be aptly described as a collection of items stored at contigu-  
ous memory locations. Its salient feature is the direct access it offers to any indexed  
element, granting it significant computational advantages in specific scenarios. Character-  
istics of arrays encompass homogeneity, implying that all elements within an array are  
of the same data type, ensuring uniform memory footprint. Arrays are static in nature,  
unlike dynamic data structures, such as linked lists, and rely on indexing. Each element  
in the array is associated with a unique index, facilitating swift access to any element with  
known index. Arrays find applications in various domains within computer science. They  
are fundamental in sorting algorithms like QuickSort and MergeSort, often employed for  
their direct access capabilities. Arrays also serve as foundational elements for complex  
data structures such as heaps, hash tables, and dynamically resizable arrays. Advantages  
of arrays include their speed in retrieval operations and efficient memory allocation due  
to contiguous storage. However, they have limitations, notably their fixed size and the  
relatively costly nature of insertion and deletion operations, particularly for elements in  
the middle of the array. In the following examples, we will explore the common methods  
and techniques used around arrays in Java Script, providing information on how to access  
and manipulate the data stored in these complex structures.  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_5  
29 30 5 Arrays  
5.1.1  
Ex. \(41\) – Array addition  
//a\[i\] vector  
Output\:  
//a\[i\]\[j\] = matrix  
//a\[i\]\[j\]\[x\] = tensor  
2,5,76,8  
//a\[i\]\[j\]\[x\]\[y\]\[.....  
var a = \[2, 5, 7\];  
var b = \[6, 8\];  
print\(a+b\);  
The provided code starts with a series of comments that serve to explain the structure  
of nested arrays, often referred to as vectors, matrices, and tensors. These comments lay  
out a conceptual hierarchy, illustrating how data can be organized in JavaScript arrays.  
The a variable is declared as an array with three elements\: \[2, 5, 7\]. In the comments,  
it is described as a vector, implying a one-dimensional array. The comment a\[i\]\[j\] =  
matrix suggests the potential for two levels of nesting within this array, implying a two-  
dimensional structure resembling a matrix. The comment a\[i\]\[j\]\[x\] = tensor extends  
this hierarchy further, indicating that within this matrix-like structure, there is yet another  
level of nesting, giving it a three-dimensional structure resembling a tensor. The comment  
a\[i\]\[j\]\[x\]\[y\]\[…\] suggests the possibility of even deeper levels of nesting, forming higher-  
dimensional structures. Following these comments, two arrays, a and b, are declared with  
numeric elements. Next, the print\(a + b\) line allows to concatenate the two arrays a and  
b.  
5.1.2  
Ex. \(42\) – Extracting individual values from the elements of an array  
var a = \[2, 5, 7\];  
Output\:  
var b = \[6, 8\];  
var c = a\[1\] + b\[0\];  
11  
print\(c\);  
The provided code snippet demonstrates a series of operations involving arrays and  
variable assignments. Initially, three variables are declared\: a, b, and c. The a variable is  
assigned an array \[2, 5, 7\], while the b variable is assigned another array \[6, 8\]. These  
arrays can store multiple values. The key operation occurs when the c variable is assigned  
a value. It calculates this value by adding together two specific elements from the arrays  
a and b. In short, it takes the second element from a \(which is 5\) and the first element  
from b \(which is 6\) and adds them together. The result of this addition, 11, is stored  
in the variable c. Next, the value of the c variable is shown in the output. Thus, this  
JavaScript code snippet involves array operations and variable assignments, culminating  
in the addition of specific elements from two arrays. 5 Arrays 31  
5.1.3  
Ex. \(43\) – Adding elements  
var A = \[\];  
Output\:  
A\[0\] = "a";  
abc  
A\[1\] = "b";  
A\[2\] = "c";  
print\(A\[0\] + A\[1\] + A\[2\]\);  
The example initializes a variable A as an empty array. It then proceeds to assign  
values to its elements. In this case, the values assigned are strings\: “a” to A\[0\], “b” to  
A\[1\], and “c” to A\[2\]. Next, it uses the print \(which should typically be console.log in  
modern JavaScript\) function to output the concatenation of these three elements. The +  
operator here is used for string concatenation, which means it combines the three strings  
“a,” “b,” and “c” into a single string. Thus, the output of this code will be “abc” when it  
is executed.  
5.1.4  
Ex. \(44\) – Using array literals of different data type  
var A = \[\];  
Output\:  
var B = \[\];  
abc  
A = \["a", "b", "c"\];  
6  
B = \[1, 2, 3\];  
print\(A\[0\] + A\[1\] + A\[2\]\);  
print\(B\[0\] + B\[1\] + B\[2\]\);  
In this code snippet, we are working with two arrays, A and B. Initially, we declare  
these arrays as empty using the var keyword. However, these empty declarations are later  
overwritten with new values. The first array, A, is populated with three string elements\:  
“a”, “b”, and “c”. Each of these elements is enclosed in double quotes and separated by  
commas. The second array, B, is filled with three numeric elements\: 1, 2, and 3. These  
numeric values are not enclosed in quotes because they are treated as integers. After  
initializing these arrays, the code proceeds to print out the concatenation of elements  
within each array. For array A, the concatenation of its elements “a”, “b”, and “c” results  
in the string “abc”. This string is printed to the console using the print function or method.  
Similarly, for array B, the concatenation of its elements 1, 2, and 3 results in the numeric  
value 6 \(1 + 2 + 3\). This numeric value is also printed to the console using the print  
function. 32 5 Arrays  
5.1.5  
Ex. \(45\) – Accessing array elements  
A = \["a", "b", "c"\];  
Output\:  
let x = A\[1\];  
bc  
let y = A\[2\];  
print\(x + y\);  
This JavaScript code begins by defining an array called “A,” which contains three ele-  
ments\: “a,” “b,” and “c.” The array A is initialized with these values. Next, the code  
declares two variables, x and y. The variable x is assigned the value of the second ele-  
ment in the array A, which is “b,” since JavaScript arrays are zero-indexed. Similarly, the  
variable y is assigned the value of the third element in the array A, which is “c.“ The code  
prints the result of concatenating the values of x and y using the “ + “ operator. In this  
case, “x + y” would result in “bc” because x holds “b” and y holds “c.“  
5.1.6  
Ex. \(46\) – Changing values in array elements - swap values or replace  
A = \["a", "b", "c"\]; Output\:  
let x = A\[1\];  
dcb  
A\[0\] = "d";  
A\[1\] = A\[2\];  
A\[2\] = x;  
print\(A\[0\] + A\[1\] + A\[2\]\);  
The above code begins by defining an array called A containing three string elements\:  
“a,” “b,” and “c.” Next, it initializes a variable named x and assigns it the value at the  
index 1 of array A, which is “b.” Following this, the code proceeds to modify the elements  
within the array A. It assigns the string “d” to the first element at index 0, replaces the  
second element at index 1 with the value from the third element at index 2, and finally,  
sets the third element at index 2 to the value of x, which is “b.” In the last line of code,  
the print function is used to output the concatenation of the elements at indexes 0, 1, and  
2 of array A. The result of this concatenation would be “dbc” based on the modifications  
made to the array earlier in the code. 5 Arrays 33  
5.1.7  
Ex. \(47\) – Extracting individual values from the elements of an array  
var a = \[2, 5, 7\];  
Output\:  
var b = \[6, 8\];  
//--a\[1\];  
9  
//--b\[0\];  
a\[1\]--;  
b\[0\]--;  
var c = a\[1\] + b\[0\];  
print\(c\);  
This code begins by declaring two arrays, a and b, containing the elements \[2, 5,  
7\] and \[6, 8\], respectively. Afterward, it appears to have commented-out lines marked  
with //--, which, in JavaScript, are not used for commenting but might be intended for  
some form of code removal or debugging. The actual code proceeds by decrementing  
the second element \(index 1\) of array a and the first element \(index 0\) of array b. This  
means that after these operations, the a array will become \[2, 4, 7\], and the b array will  
become \[5, 8\]. Next, a new variable c is declared and assigned the value of the sum of  
the updated second element of array a \(which is now 4\) and the updated first element of  
array b \(which is now 5\). Therefore, c will be assigned the value 9. In summary, this code  
modifies two arrays, calculates the sum of specific elements from those arrays, and then  
prints the result to the console.  
5.1.8  
Ex. \(48\) – Array length  
var a = \[5, 6, 8\];  
var b = a.length;  
Output\:  
print\(b\);  
3  
Here, a variable a is declared and initialized as an array containing three elements\: 5,  
6, and 8. This array is created using square brackets \[\] and the elements are separated by  
commas. Next, another variable b is declared and assigned the value of a.length. Here,  
a.length is a property of the array a, which represents the number of elements in the array.  
In this case, since there are three elements in the array a, b will be assigned the value 3.  
Next, the value of b is printed in the output. Thus, this code snippet creates an array a,  
determines its length, and prints that length to the console. 34 5 Arrays  
5.1.9  
Ex. \(49\) – Accessing the values from the components of an array  
var A = \[1, 2, 3\];  
Output\:  
if\(A\[0\] \< A\[1\]\)\{A\[2\] += 1;\}  
A\[2\]=4  
print\("A\[2\]=" + A\[2\]\);  
This code snippet begins by declaring a variable named A and assigning it an array  
containing three elements\: 1, 2, and 3. This array is represented as \[1, 2, 3\]. Next, there  
is an if statement that checks a condition. It evaluates whether the value at the first index  
of array A, which is A\[0\], is less than the value at the second index, A\[1\]. In this case,  
A\[0\] contains 1, and A\[1\] contains 2, which is indeed true, as 1 is less than 2. When the  
condition in the if statement is true, the code block inside the curly braces \{\} is executed.  
In this case, it increments the value at the third index of array A, which is A\[2\]. Thus, A\[2\]  
+= 1; adds 1 to the existing value in A\[2\], resulting in A\[2\] being updated to 4. Next, it  
displays a message that includes the updated value of A\[2\]. The message is constructed  
by concatenating the string “A\[2\] = “ with the value of A\[2\], which is 4. Thus, when this  
code is executed, it will print “A\[2\] = 4” to the console.  
5.1.10  
Ex. \(50\) – Traverse a 1D array using a while loop  
A = \["a", "b", "c", "d", "e", "f", "g"\];  
Output\:  
let i = 0;  
i\[0\]=a  
let t =  
'';  
i\[1\]=b  
i\[2\]=c  
while \(i \< A.length\) \{  
i\[3\]=d  
i\[4\]=e  
t += "\\n i\[" + i + "\]=" + A\[i\];  
i\[5\]=f  
i++;  
i\[6\]=g  
\}  
print\(t\);  
This JavaScript code begins by initializing an array called A, which contains the ele-  
ments “a,” “b,” “c,” “d,” “e,” “f,” and “g.” Following this, the code sets up two variables,  
i and t, both initially empty. Next, i is initialized to 0, and t is an empty string. The  
code then enters a while loop that runs as long as the value of i is less than the length  
of the array A. Inside the loop, there is an assignment to the variable t. The assignment  
appends a newline character followed by a string constructed from the value of i and the  
corresponding element in the array A. This creates a string that looks like “\\n i\[0\] = a”,  
“\\n i\[1\] = b”, and so on. After the assignment, i is incremented by 1. Once the loop has  
iterated through all elements in the array A, the code prints the value of t. In essence,  
this code is designed to loop through the elements of the array A, building the string t 5 Arrays 35  
that contains the output, namely the information about the index i and the corresponding  
element in the array.  
5.1.13  
Ex. \(53\) – The for a in b  
//const a = \{f1\:"x", f2\:"y", in\:2\};  
Output\:  
const a = \["x", "y", 2\];  
x  
for \(let b in a\) \{  
y  
print\(a\[b\]\);  
2  
\}  
This JavaScript code initializes an array named A containing seven elements\: “a,” “b,”  
“c,” “d,” “e,” “f,” and “g.” It then declares two variables, i and t, and assigns them initial  
values of 0 and an empty string, respectively. The code enters a do-while loop, which  
means it will execute the enclosed block of code at least once before checking the con-  
dition. Inside the loop, there is a string concatenation operation. It appends a newline  
character followed by a string that includes the current value of i and the corresponding  
element from the array A. This information is appended to the t string. The i variable is  
incremented with each iteration of the loop using i++. The loop continues to execute as  
long as the value of i is less than the length of the array A. Next, the code prints the value  
of the t variable. Overall, this code builds a string t by concatenating information about  
each element in the array A along with its index and then prints the resulting string.  
5.1.12  
Ex. \(52\) – Traverse a 1D array using a for loop  
const A = \["a", "b", "c", "d", "e"\];  
Output\:  
let t =  
"";  
A\[0\]=a  
A\[1\]=b  
for \(let i = 0; i \< A.length; i++\) \{  
A\[2\]=c  
t += "\\n A\[" + i + "\]=" + A\[i\];  
A\[3\]=d  
\}  
A\[4\]=e  
print\(t\);  
This code begins by defining a constant array called A containing five elements, namely  
“a,” “b,” “c,” “d,” and “e.” Next, there is a declaration of an empty string variable called t.  
The code then enters a for-loop that initializes a loop counter i to 0. It sets a condition that  
checks if i is less than the length of the array A, which is 5 in this case. As long as this  
condition is true, the loop continues to execute. Inside the loop, there is a statement that  
appends a newline character \(“\\n”\) to the t string, followed by the text “A\[“ concatenated  
with the current value of i, followed by ”\] =” and the value at the corresponding index  
in the array A. In other words, during each iteration of the loop, it appends a line to the 36 5 Arrays  
t string that displays the index and value of each element in the A array. Next, after the  
loop finishes, the implementation prints the t string using the print function. This code  
processes the elements in the A array, creates a formatted string with their indices and  
values, and then prints the string.  
5.1.13  
Ex. \(53\) – The for a in b  
//const a = \{f1\:"x", f2\:"y", in\:2\};  
Output\:  
const a = \["x", "y", 2\];  
x  
for \(let b in a\) \{  
y  
print\(a\[b\]\);  
2  
\}  
The provided JavaScript code snippet demonstrates the creation of a variable a and the  
utilization of a for…in loop to iterate through its elements. Initially, there is a commented-  
out line that defines an object a with three properties\: f1, f2, and in. The comment line  
points out the fact that the example works with objects just as well. Instead, the actual a  
variable is assigned an array containing three elements\: the strings x and y, and the number  
2\. Subsequently, a for…in loop is used to traverse the elements of this array. Inside the  
loop, the print\(a\[b\]\) statement to displays each element of the array. In essence, the code  
primary purpose is to showcase the for…in loop for iterating over the elements of an array.  
5.1.14  
Ex. \(54\) – Print all integers from array using a for loop  
var a = \[5, 6, 8\]; Output\:  
for\(var j=0; j\<=a.length-1; j++\)\{  
5  
print\(a\[j\]\);  
6  
\}  
8  
This example initializes an array called a containing three numeric values\: 5, 6, and  
8\. It then proceeds to iterate through the elements of this array using a for-loop. The for-  
loop is configured to start with an index variable j set to 0, which corresponds to the first  
element in the array. It continues looping as long as j is less than or equal to the length  
of the array minus 1 \(i.e., a.length−1\). This condition ensures that the loop iterates over  
all the elements in the array. Within the loop, there is a print statement \(which is usually  
console.log in JavaScript for printing to the console\). This statement outputs the value at  
the current index j in the array a. The loop will run for each element in the array, starting  
with 5, then 6, and finally 8. Thus, this code snippet is a basic example of how to iterate  
through an array in JavaScript using a for-loop and print each element is value to the 5 Arrays 37  
console. When executed, it will display the values 5, 6, and 8 in the console, each on a  
separate line.  
5.1.15  
Ex. \(55\) – Sum all values from array  
var a = \[5, 6, 8\];  
Output\:  
var b = 0;  
19  
for\(var j=0; j\<=a.length-1; j++\)\{  
b = b + a\[j\];  
\}  
print\(b\);  
This code snippet begins by defining two variables. The first variable, a, is an array  
containing three numerical values\: 5, 6, and 8. The second variable, b, is initialized with  
the value 0. The code then enters a ‘for’ loop, which is a control structure used for  
iterating through the elements of an array. In this loop, a variable j is initialized to 0, and  
the loop continues as long as j is less than or equal to the length of array a minus 1. The  
loop iterates through each element of the a array. Inside the loop, there is an assignment  
statement that increments the b variable. It adds the current element of the a array, which  
is indexed by j, to the b variable. This effectively accumulates the sum of all the elements  
in the a array in the b variable. Next, the code calls a function named ‘print’ with the  
argument b. The code calculates the sum of the elements in the a array and prints the  
result to the console.  
5.1.16  
Ex. \(56\) – Multiplication involving a scalar and a 1D array  
var a = \[5, 6, 8\]; Output\:  
for\(var j=0; j\<=a.length-1; j++\)\{  
10,12,16  
a\[j\] = 2 \* a\[j\];  
\}  
print\(a\);  
This code snippet initializes a variable a, and then performs a loop operation on it. The  
variable a is an array containing the elements 5, 6, and 8. Next, a for-loop iterates through  
the elements of array a. The loop starts with an index variable j set to 0 and continues as  
long as j is less than or equal to the length of array a minus 1. In each iteration of the  
loop, the value at the j-th index of array a is doubled \(multiplied by 2\) and then assigned  
back to the same position in the array. Once the loop completes, the value of variable  
array a is shown in the console. 38 5 Arrays  
5.1.17  
Ex. \(57\) – Insert values into an array  
var a = \[\];  
Output\:  
for\(var j=0; j\<=10; j++\)\{  
0,1,2,3,4,5,6,7,8,9,10  
a\[j\]=j;  
\}  
print\(a\);  
The provided JavaScript code initializes an empty array called a using the variable  
declaration “var a = \[\]”. This array will be used to store a series of values. Next, there  
is a for-loop that iterates from 0 to 10, inclusive, with the variable j starting at 0 and  
incrementing by 1 in each iteration. Within the loop, the code assigns the value of j to  
the corresponding index in the array a. This means that during each iteration of the loop,  
the value of j is added to the a array. Next, there the contents of the array a is printed to  
the output.  
5.1.18  
Ex. \(58\) – Insert ascending and descending integer values into arrays  
var a = \[\];  
Output\:  
var b = \[\];  
a = 0,1,2,3,4,5,6,7,8,9,10  
for\(var j=0; j\<=10; j++\)\{  
b = 10,9,8,7,6,5,4,3,2,1,0  
a\[j\]=j;  
b\[j\]=10-j;  
\}  
print\("a = " + a\);  
print\("b = " + b\);  
This code initializes two arrays, a and b, as empty arrays. It then enters a for-loop that  
iterates from 0 to 10, inclusive. During each iteration of the loop, it assigns values to the a  
and b arrays based on the loop index j. Specifically, within the loop, the code sets a\[ j\] to  
the current value of j, which corresponds to the numbers from 0 to 10. Simultaneously, it  
sets b\[ j\] to the value of 10-j, effectively counting down from 10 to 0. These assignments  
continue for each iteration of the loop. After the loop completes its execution, it prints  
the contents of both arrays a and b. 5 Arrays 39  
5.1.19  
Ex. \(59\) – Add forward and reverse values and subtract max  
var a = \[\];  
Output\:  
var b = \[\];  
var c = \[\];  
a = 0,1,2,3,4,5,6,7,8,9,10  
b = 10,9,8,7,6,5,4,3,2,1,0  
for\(var j=0; j\<=10; j++\)\{  
c = 0,0,0,0,0,0,0,0,0,0,0  
a\[j\]=j;  
b\[j\]=10-j;  
c\[j\]=a\[j\]+b\[j\]-10;  
\}  
print\("a = " + a\);  
print\("b = " + b\);  
print\("c = " + c\);  
This code initializes three arrays, a, b, and c, and then populates them using a for-loop.  
In the beginning, three empty arrays, a, b, and c, are declared to store integer values. The  
for-loop runs from j equal to 0 to 10. During each iteration of the loop, the value of j is  
used as an index to populate the arrays a and b. Specifically, a\[ j\] is assigned the current  
value of j, and b\[ j\] is assigned 10-j. Subsequently, the array c is populated based on the  
values of a and b. For each index j, c\[ j\] is calculated as the sum of a\[ j\], b\[ j\], and −10.  
Next, the code prints the values of arrays a, b, and c, displaying their contents as strings  
along with their respective names.  
5.1.20  
Ex. \(60\) – Pointless equilibrium  
var a = \[\];  
Output\:  
var l = 10;  
a = 10,10,10,10,10,10,10,10,10,10,10  
for\(var j=0; j\<=l; j++\)\{  
a\[j\] = j + \(l-j\);  
\}  
In this code snippet, a program initializes an empty array called a and a variable l with  
the value 10. The purpose of this code is to populate the array a with values based on  
the iteration variable j using a for-loop. The for-loop runs from j equals 0 to l inclusive.  
During each iteration of the loop, an expression is evaluated and assigned to the j index  
of the array a. The expression being assigned consists of two parts\: \(1\) Variable j\: This  
represents the current value of the iteration variable j, and \(2\) is \(l−j\) that represents the  
result of subtracting j from l. These two parts are added together, and the result is stored  
in the array a at the index j. Essentially, it calculates the sum of j and \(l−j\) for each j  
from 0 to l, storing these values in consecutive elements of the array. Thus, after the loop  
completes execution, the array a will contain values where each element at index j holds  
the sum of j and \(l−j\). The resulting array will be a = \[10, 10, 10, 10, 10, 10, 10, 10, 10,  
10, 10\]. In this case, all elements of the array a are assigned the value 10 because each 40 5 Arrays  
iteration calculates j + \(l−j\), and since l is fixed at 10, the sum remains constant across  
all iterations.  
5.1.21  
Ex. \(61\) – Max value from array  
var a = \[2, 3, 4, 5, 9, 8, 3\];  
Output\:  
var l = a.length - 1;  
9  
var max = 0;  
for\(var k=0; k\<=l; k++\)\{  
if\(a\[k\] \> max\) \{max = a\[k\];\}  
\}  
print\(max\);  
This example initializes an array a with a series of numerical values \[2, 3, 4, 5, 9,  
8, 3\]. It then calculates the length of this array minus 1 and stores it in a variable l.  
Additionally, it initializes a variable max with an initial value of 0. Next, there is a for-  
loop that iterates over the elements of the array a. The loop is controlled by a variable k,  
which starts at 0 and continues until it reaches the value of l, which is the length of the  
array minus 1. Within each iteration of the loop, there is an if statement that checks if  
the current element a\[k\] is greater than the current maximum value max. If a\[k\] is indeed  
greater, it updates the max variable with the value of a\[k\], effectively keeping track of  
the maximum value encountered in the array. Last, after the loop has completed, it prints  
out the maximum value max to the console. In essence, this code finds and prints the  
maximum value present in the array a.  
5.1.22  
Ex. \(62\) – Min value from array  
var a = \[3, 3, 4, 2, 9, 8, 3\];  
Output\:  
var l = a.length - 1;  
2  
var min = a\[0\];  
for\(var k=0; k\<=l; k++\)\{  
if\(a\[k\] \< min\) \{min = a\[k\];\}  
\}  
print\(min\);  
In the above code, there is an array a initialized with values, namely \[3, 3, 4, 2, 9, 8,  
3\]. The variable l is assigned the value of the length of the array a minus 1, which helps  
determine the range for looping through the array elements. Next, there is the declaration  
of the variable min, which is initially assigned the value of the first element of the array  
a, in this case, 3. This variable will be used to store the minimum value found in the 5 Arrays 41  
array. The code then enters a for-loop with the variable k starting from 0 and iterating  
until k is less than or equal to l, which means it will go through each element in the  
array. Inside the loop, there is an if statement that checks if the current element a\[k\] is  
less than the current minimum value min. If a\[k\] is indeed smaller than min, the value of  
min is updated to a\[k\], effectively finding the minimum value in the array. Next, outside  
the loop, the code prints the minimum value found in the array using the print statement.  
This code in complementary to the previous one and calculates and prints the minimum  
value from the array a by iterating through its elements and updating the min variable  
whenever a smaller value is encountered.  
5.1.23  
Ex. \(63\) – Max value above two arrays of the same size  
var a = \[2, 3, 4, 5, 9, 8, 3\];  
Output\:  
var b = \[1, 2, 3, 4, 5, 6, 7\];  
var l = a.length - 1;  
9  
var max = 0;  
var maxA = 0;  
var maxB = 0;  
for\(var k=0; k\<=l; k++\)\{  
if\(a\[k\] \> maxA\) \{maxA = a\[k\];\}  
if\(b\[k\] \> maxB\) \{maxB = b\[k\];\}  
if\(maxA \> max\) \{max = maxA;\}  
if\(maxB \> max\) \{max = maxB;\}  
\}  
print\(max\);  
The above code starts by defining two arrays, a and b, each containing a sequence of  
numbers. Then, it calculates the length of the array a and stores it in the variable l. Next,  
it initializes three variables\: max, maxA, and maxB, all initially set to 0. These variables  
will be used to keep track of the maximum values in the arrays. The code enters a for-  
loop, where it iterates through the arrays a and b simultaneously using the loop variable  
k. It begins at index 0 and goes up to l. Within the loop, it checks if the value at index k  
in array a \(a\[k\]\) is greater than the current maximum value in maxA, and if so, updates  
maxA to this new maximum value. Similarly, it checks if the value at index k in array b  
\(b\[k\]\) is greater than the current maximum value in maxB and updates maxB accordingly.  
After updating maxA and maxB, the code also checks if either maxA or maxB is greater  
than the current maximum value in max. If either of them is greater, it updates max to  
the larger of the two. Thus, the code prints the value stored in the max variable, which  
represents the maximum value among both arrays a and b. Thus, this code finds and prints  
the maximum value from the combined elements of arrays a and b. 42 5 Arrays  
5.1.24  
Ex. \(64\) – Max value above two arrays of different sizes  
var a = \[2, 3, 4, 5, 9, 8, 3\];  
Output\:  
var b = \[14, 2, 3, 41, 5, 6, 77\];  
var l = \[\];  
77  
l\[0\] = a.length;  
l\[1\] = b.length;  
var r = l\[0\];  
if\(l\[0\]\<l\[1\]\)\{r = l\[1\];\}  
var max = 0;  
for\(var k=0; k\<=r; k++\)\{  
if\(k \< l\[0\] && max \< a\[k\]\) \{max = a\[k\];\}  
if\(k \< l\[1\] && max \< b\[k\]\) \{max = b\[k\];\}  
\}  
print\(max\);  
This code begins by defining two arrays, a and b, each containing a series of numeric  
values. An empty array l is also initialized for further use. Next, the code assigns the  
length of arrays a and b to the elements of the array l. Specifically, l\[0\] stores the length  
of array a, and l\[1\] stores the length of array b. The code then compares the lengths  
of arrays a and b to determine the maximum length and stores it in the variable r. If  
the length of b is greater than the length of a, r is assigned the value of the length of  
b; otherwise, it retains the value of the length of a. Subsequently, the variable max is  
initialized to 0. The code enters a for-loop that iterates from 0 to r \(inclusive\). Inside the  
loop, it checks if the current index k is within the bounds of the lengths of arrays a and b.  
If so, it compares the value at index k in the respective array with the current maximum  
value stored in max. If the value at index k is greater than the current maximum, max is  
updated to hold that value. Next, the code prints the maximum value \(max\) to the output.  
In essence, this code finds and prints the maximum value among the elements of arrays  
a and b, considering both arrays up to the length of the longer one. 5 Arrays 43  
5.1.25  
Ex. \(65\) – Which is bigger between n and n + 1?  
var a = \[2, 3, 4, 5, 9, 8, 3, 8, 3\];  
Output\:  
var l = a.length - 1;  
\<\<\<\<\>\>\<\>\<  
var t=  
'';  
for\(var k=0; k\<=l; k++\)\{  
if\(a\[k\] \> a\[k+1\]\)\{  
t += "\>";  
\} else \{  
t += "\<";  
\}  
\}  
print\(t\);  
The given source code begins by initializing an array a with a set of numeric values\:  
\[2, 3, 4, 5, 9, 8, 3, 8, 3\]. Next, it calculates the length of the array minus one and stores  
it in a variable l. In this case, l becomes 8 since there are nine elements in the array. The  
code then declares an empty string t, which will be used to accumulate symbols as the  
code iterates through the array. A for-loop is set up to iterate through the elements of the  
array a. The loop variable k starts at 0 and continues until it reaches the value of l. During  
each iteration, the code checks if the element at index k in the array a is greater than the  
element at the next index, k+1. If this condition is true, it appends the “\>” symbol to the  
string t, indicating that the current element is greater than the next one. If the condition  
is false, it appends the “\<” symbol to t, indicating that the current element is less than  
or equal to the next one. After the loop has processed all elements in the array, the code  
prints the resulting string t to the output. The output will be a sequence of “\>” and “\<”  
symbols, indicating the comparison results between consecutive elements in the array.  
The exact output will depend on the values in the array a.  
5.1.26  
Ex. \(66\) – Which is bigger between n and n + 1 ? \(optimisation\)  
var a = \[2, 3, 4, 5, 9, 8, 3, 8, 3\];  
Output\:  
var l = a.length - 1;  
\<\<\<\<\>\>\<\>\<  
var t = ' ';  
var r = '\<';  
for\(var k=0; k\<=l; k++\)\{  
if\(a\[k\] \> a\[k+1\]\) \{r = "\>"\}  
t += r;  
r = "\<"  
\}  
print\(t\); 44 5 Arrays  
This code begins by defining an array a containing a sequence of integers, namely \[2,  
3, 4, 5, 9, 8, 3, 8, 3\]. The variable l is then initialized to store the length of the array  
minus 1, which is the last valid index within the array. Next, two variables t and r are  
declared and initialized. Variable t is initialized with a space character, and r is initialized  
with the less-than symbol \(“\<”\). Following the variable declarations, there is a for-loop  
that iterates from k equals 0 up to and including l. During each iteration of the loop, it  
checks if the element at index k in the array a is greater than the element at the next index  
\(k+1\). If this condition is true, it assigns the greater-than symbol \(“\>”\) to the variable r.  
Otherwise, it assigns the less-than symbol \(“\<”\) to r. Once the value of r is determined, it  
is then appended to the string stored in the variable t. This process continues through each  
iteration of the loop, building a string in t where each character corresponds to whether  
the element at the current index is greater than or less than the next element. The code  
prints the resulting string t to the output, which represents a sequence of “\>” and “\<”  
symbols based on the comparisons between adjacent elements in the array a.  
5.1.27  
Ex. \(67\) – Sum two arrays  
var a = \[2, 3, 4, 5, 9, 8, 3\];  
Output\:  
var b = \[1, 2, 3, 4, 5, 6, 7\];  
var c = \[\];  
c = 3,5,7,9,14,14,10  
var l = a.length - 1;  
for\(var k=0; k\<=l; k++\)\{  
c\[k\] = a\[k\] + b\[k\];  
\}  
print\("c = " + c\);  
This code begins by defining three arrays\: a, b, and c. The a array contains the values  
\[2, 3, 4, 5, 9, 8, 3\], while the b array holds \[1, 2, 3, 4, 5, 6, 7\]. An empty array c is  
also initialized, which will be used to store the result of adding corresponding elements  
from a and b. The variable l is assigned the value of a.length−1, which represents the  
length of the a array minus one, effectively representing the last index of the arrays. The  
code then enters a for-loop that iterates through indices from 0 to l. Above each iteration,  
it adds the elements at the current index k from arrays a and b, and stores the result in  
the corresponding index k of the c array. This process effectively performs element-wise  
addition between arrays a and b. At the end of the for-loop, the code prints the result by  
concatenating the string “c =” with the c array, which will display the content of array c  
after all the additions have been performed. 5 Arrays 45  
5.1.28  
Ex. \(68\) – Simple array mapping  
var a = \[10,9,8,7,6,5,4,3,2,1,0\];  
Output\:  
var b = \[1,1,1,2,2,2,1,1,1,1,1\];  
var c = \[\];  
c = 9,9,9,8,8,8,9,9,9,9,9  
for\(var j=0; j\<=10; j++\)\{  
c\[j\] = a\[b\[j\]\];  
\}  
print\("c = " + c\);  
The given code snippet begins by defining the same three arrays\: a, b, and an empty  
array c. Array a contains 11 integer elements in descending order from 10 to 0. Array b  
contains 11 integer elements, which represent indices or positions in array a. The values  
in array b suggest a pattern where some indices may repeat. An empty array c is declared  
to store the results. The code then enters a for-loop that iterates from 0 to 10, inclusive,  
using the variable j as the loop counter. Inside the loop, the value of c\[ j\] is assigned a  
value from array a at the index specified by b\[ j\]. This means that for each iteration of  
the loop, c\[ j\] is assigned the value from a at the position specified by b\[ j\]. The code  
then prints the contents of array c to the console, displaying the result of this operation.  
Thus, this code performs a series of value assignments from array a to array c based on  
the indices specified in array b, and then it prints the resulting array c to the console.  
5.1.29  
Ex. \(69\) – Sum by coordinates \(I\)  
var a = \[2, 3, 4, 5, 9, 8, 3\];  
Output\:  
var b = \[1, 2, 3, 4, 5, 6, 7\];  
var c = \[1, 1, 1, 4, 4, 4, 6\];  
c = 4,5,6,13,14,15,10  
var l = a.length - 1;  
for\(var k=0; k\<=l; k++\)\{  
c\[k\] = a\[c\[k\]\] + b\[k\];  
\}  
print\("c = " + c\);  
In the given code, three arrays a, b, and c are defined with initial values. Array a  
contains the values \[2, 3, 4, 5, 9, 8, 3\], array b contains \[1, 2, 3, 4, 5, 6, 7\], and array  
c is initially set to \[1, 1, 1, 4, 4, 4, 6\]. The variable l is defined to store the length of  
array a minus one. The code then enters a for-loop with the variable k ranging from 0 to  
l, inclusive. Inside the loop, each element of array c at index k is updated. Namely, c\[k\]  
is assigned the value of a\[c\[k\]\] + b\[k\]. This means that for each element c\[k\], it looks  
up the value at the same index in array a, adds the corresponding value from array b, and  
stores the result back in array c at index k. This process is repeated for all elements in 46 5 Arrays  
the specified range of k. At the end of the cycle, the code prints the updated array c using  
print\(“c = ” + c\);. Thus, this code modifies the values in array c based on the values in  
arrays a and b by using their indices and then displays the updated c array.  
5.1.30  
Ex. \(70\) – Sum by coordinates \(II\)  
var a = \[2, 3, 4, 5, 9, 8, 3\];  
Output\:  
var b = \[1, 2, 3, 4, 5, 6, 7\];  
var c = \[1, 1, 1, 4, 4, 4, 6\];  
c = 5,5,5,14,14,14,10  
var l = a.length - 1;  
for\(var k=0; k\<=l; k++\)\{  
c\[k\] = a\[c\[k\]\] + b\[c\[k\]\];  
\}  
print\("c = " + c\);  
In this example, there are three arrays\: a, b, and c, each containing a series of integer  
values. The arrays a and b are initialized with values, and c initially holds a set of integer  
values. The variable l is assigned the value of a.length−1, which represents the index of  
the last element in the array a. The code enters a for-loop that iterates from k equal to  
0 to l, inclusive. Inside the loop, the elements of the c array are modified based on the  
values in arrays a and b. For each k in the loop, the value at index k in array c is updated  
to be the sum of a\[c\[k\]\] and b\[c\[k\]\]. Next, outside the loop, the result is printed to the  
console, showing the updated values in array c. This code essentially modifies the c array  
by adding values from arrays a and b based on the indices specified in c, and it prints the  
resulting array c to the console.  
5.1.31  
Ex. \(71\) – Cutoff value  
var a = \[2, 3, 4, 5, 9, 8, 3\];  
Output\:  
var b = \[1, 2, 3, 4, 5, 6, 7\];  
var c = \[1, 1, 1, 4, 4, 4, 6\];  
c = 0,0,0,14,14,14,10  
var l = a.length - 1;  
for\(var k=0; k\<=l; k++\)\{  
if\(a\[c\[k\]\] + b\[c\[k\]\] \> 5\)\{  
c\[k\] = a\[c\[k\]\] + b\[c\[k\]\];  
\} else \{  
c\[k\] = 0;  
\}  
\}  
print\("c = " + c\); 5 Arrays 47  
In the above code, there are three arrays a, b, and c, each containing a sequence of  
numeric values. The length of array a is stored in the variable l. The code then enters a  
loop that iterates from 0 to l. Inside the loop, for each value of k, it calculates the sum of  
a\[c\[k\]\] and b\[c\[k\]\]. If this sum is greater than 5, it assigns this sum to c\[k\]. Otherwise,  
it sets c\[k\] to 0. Next, after the loop completes, it prints the resulting array c, which has  
been modified based on the conditions described above.  
5.1.32  
Ex. \(72\) – Swap array elements by pattern  
//swap array elements by pattern  
Output\:  
let a = \[2, 3, 4, 5, 9, 8, 3\];  
a = 2,2,3,5,9,8,7  
let b = \[1, 2, 3, 4, 5, 6, 7\];  
b = 1,3,4,4,5,6,3  
let c = \[0, 1, 1, 0, 0, 0, 1\];  
let l = a.length;  
for\(let k=0; k\<l; k++\)\{  
let t = 0;  
if\(c\[k\]==1\)\{  
t = a\[k\];  
a\[k\] = b\[k\];  
b\[k\] = t;  
\}  
\}  
print\("a = " + a\);  
print\("b = " + b\);  
This code swaps elements between two arrays a and b based on a corresponding pattern  
defined in array c. The code begins by defining three arrays\: a, b, and c, each containing  
a set of values. These arrays represent the data that will be manipulated. The variable l  
is assigned the length of array a, which is used as the loop termination condition in the  
subsequent for-loop. Inside the for-loop, a counter variable k is used to iterate through  
each element of the arrays. Within the loop, a temporary variable t is initialized to 0.  
This variable will be used for temporarily storing values during the swap operation. An  
if statement checks if the value of c\[k\] is equal to 1. If c\[k\] is indeed equal to 1, it means  
that a swap operation should be performed for the current elements. Inside the if block,  
the values of a\[k\] and b\[k\] are swapped using the temporary variable t. This is done  
to exchange the corresponding elements of arrays a and b when the pattern in array c  
dictates it. After the for-loop completes execution, the code prints the updated arrays a  
and b to the console, showing the result of the swapping operation. Note that this code  
swaps elements between arrays a and b based on the pattern defined in array c, effectively  
modifying the contents of arrays a and b accordingly. 48 5 Arrays  
5.1.33  
Ex. \(73\) – Mix array based on pattern  
//mix array based on pattern  
Output\:  
let a = \[2, 3, 4, 5, 9, 8, 3\]; // 1  
c = 1,3,4,4,5,6,3  
let b = \[1, 2, 3, 4, 5, 6, 7\]; // 0  
let c = \[0, 1, 1, 0, 0, 0, 1\];  
let l = a.length;  
for\(let k=0; k\<l; k++\)\{  
if\(c\[k\]==1\)\{  
c\[k\] = a\[k\];  
\} else \{  
c\[k\] = b\[k\];  
\}  
\}  
print\("c = " + c\);  
The example combines two arrays, a and b, into a new array c based on a pattern  
defined by the c array. The a array contains the elements \[2, 3, 4, 5, 9, 8, 3\], and the b  
array contains \[1, 2, 3, 4, 5, 6, 7\]. Additionally, there is a c array with binary values \[0,  
1, 1, 0, 0, 0, 1\]. The goal is to create a new array c with the same length as a and b and  
populate it based on the pattern found over c. A for-loop iterates through each index from  
0 to the length of the arrays \(l\), and at each iteration it checks the corresponding element  
in the c array \(c\[k\]\). If c\[k\] is equal to 1, it assigns the value from the array a at index  
k, to c\[k\]. Also, if c\[k\] is not equal to 1 \(i.e., 0\), it assigns the value from the b array at  
index k to c\[k\]. After the loop completes, the resulting c array contains elements that are  
either from a or b depending on the pattern defined in c. At the end, it prints the contents  
of the c array, displaying the mixed array based on the pattern.  
5.1.34  
Ex. \(74\) – Swap array values  
//swap array values  
Output\:  
let a = \["a", "a", "a", "a", "a", "a"\];  
a = b,b,b,b,b,b  
let b = \["b", "b", "b", "b", "b", "b"\];  
b = a,a,a,a,a,a  
let l = a.length - 1;  
for\(let k=0; k\<=l; k++\)\{  
t = a\[k\];  
a\[k\] = b\[k\];  
b\[k\] = t;  
\}  
print\("a = " + a\);  
print\("b = " + b\); 5 Arrays 49  
The provided example is designed to swap values between two arrays, a and b, using  
a loop. Two arrays, a and b, are initially defined with six identical elements each, rep-  
resented as strings. Additionally, a variable l is declared and assigned the value of the  
length of array a minus 1. The core of the code lies within a for-loop that iterates from 0  
to l, inclusive, using the loop variable k. Within this loop the current element of a at index  
k is temporarily stored in a variable t. The element at index k in array a is replaced with  
the corresponding element from array b. The element at index k in array b is assigned  
the value stored in the temporary variable t. This effectively swaps the values of the two  
arrays at position k. After the loop completes, the swapped arrays a and b are printed to  
the console, indicating the changes that occurred as a result of the swap operation.  
5.1.35  
Ex. \(75\) – Intermittent value swap  
//ziperr - intermitent value swap  
Output\:  
let a = \["a", "a", "a", "a", "a", "a"\];  
a = a,b,a,b,a,b,a,  
let b = \["b", "b", "b", "b", "b", "b"\];  
b = b,a,b,a,b,a,b,  
let l = a.length - 1;  
for\(let k=0; k\<=l; k++\)\{  
k++;  
t = a\[k\];  
a\[k\] = b\[k\];  
b\[k\] = t;  
\}  
print\("a = " + a\);  
print\("b = " + b\);  
This code demonstrates an intermitent value swap operation between two arrays, a  
and b. Initially, both arrays, a and b, are defined and filled with identical values, where  
a contains multiple instances of a and b contains multiple instances of b. The variable  
l is assigned the value of the length of array a minus 1, which determines the limit for  
the loop. Inside the for-loop, the code iterates through the indices of the arrays from 0  
to l. Within each iteration, the loop counter k is incremented by 1, effectively skipping  
every other index. Then, the code performs a swap operation between the elements at the  
current k index in arrays a and b. This swap operation exchanges the values of a\[k\] and  
b\[k\]. Next, the code prints the contents of arrays a and b after the intermitent value swap  
operation has been completed, displaying the updated contents of both arrays. Thus, this  
code swaps values between the a and b arrays, but it does so intermittently by skipping  
every other index during the swap operation. As a result, the a and b arrays will have  
their values partially exchanged based on this pattern. 50 5 Arrays  
5.1.36  
Ex. \(76\) – Reverse string  
//let a = 'abcdef';  
Output\:  
//let b = a.split\(''\);  
f,e,d,c,b,a  
let b = \['a', 'b', 'c', 'd', 'e', 'f'\]  
let n = b.length;  
let c = \[\];  
for\(let i=0; i\<n; i++\) \{  
c\[i\] = b\[n-i-1\];  
\}  
print\(c\);  
The following code snippet begins by defining an array b with elements a, b, c, d,  
e, f , essentially creating an array containing individual characters. Next, it calculates the  
length of the array b and stores it in the variable n. In this case, n will be equal to 6, as  
there are six elements in the array b. Then, a new empty array c is declared. This array c  
will be used to store the elements of array b in reverse order. The code enters a for-loop  
that iterates from i = 0 to i = n−1. Inside the loop, it assigns the value of b\[n−i−1\]  
to the corresponding index in array c. This effectively reverses the order of the elements  
from array b and stores them in array c. Next, the print\(c\) statement is used to display  
the contents of the reversed array c in the output. Thus, this code takes an array b, which  
contains characters, and reverses the order of its elements, storing the reversed elements  
in a new array c.  
5.1.37  
Ex. \(77\) – The welding of array values  
//intermitent melting  
Output\:  
let a = \[1, 2, 3, 4, 5, 6, 7\];  
a = 1,4,3,6,5,8,7  
let b = \[2, 2, 2, 2, 2, 2, 2\];  
b = 2,4,2,6,2,8,2  
let l = a.length - 1;  
for\(let k=0; k\<l; k++\)\{  
k++;  
a\[k\] = a\[k\] + b\[k\];  
b\[k\] = a\[k\];  
\}  
print\("a = " + a\);  
print\("b = " + b\);  
This code performs a series of operations on two arrays, a and b, both of which initially  
contain elements from 1 to 7. The code begins by initializing two arrays, a and b, where  
a contains elements from 1 to 7, and b contains only the number 2 repeated seven times. 5 Arrays 51  
Next, it calculates the length of the array a and stores it in the variable l. The variable l  
will be used to control the loop. The code then enters a for-loop, where it iterates through  
the indices of the arrays from 0 to l−1. Inside the loop variable k is incremented by 1  
using the k++ statement. This means that k will skip every other index in the loop. The  
element at index k of array a is updated by adding the element at the same index k of  
array b to it. This effectively accumulates the values from array b into array a for the  
skipped indices. The element at index k of array b is then updated to match the new value  
of a\[k\]. This synchronizes the values in arrays a and b at the skipped indices. Once the  
loop is completed, the code prints out the contents of both arrays a and b. Thus, this code  
performs an “intermittent melting” operation by skipping every other index in the arrays a  
and b, updating the values in a with the corresponding values in b, and then synchronizing  
the values in b with the new values in a. The result is printed to the console.  
5.1.38  
Ex. \(78\) – Static modulo - fill up array with modulo results  
var a = \[10,9,8,7,6,5,4,3,2,1,0\];  
Output\:  
var b = \[\];  
c = 1,0,2,1,0,2,1,0,2,1,0  
for\(var j=0; j\<=10; j++\)\{  
b\[j\] = a\[j\] % 3;  
\}  
print\("c = " + b\);  
The provided code begins by declaring two arrays, a and b. The array a is initialized  
with ten integer values in descending order from 10 to 0. The array b is initialized as  
an empty array. The code then enters a for-loop with the variable j starting from 0 and  
continuing until it reaches 10 \(inclusive\). Within this loop, each element of the b array  
is assigned a value calculated as the remainder of dividing the corresponding element  
from the a array \(a\[ j\]\) by 3. This operation effectively computes the modulo 3 of each  
element in a and stores the result in the corresponding position in b. Next, the code prints  
the value of b using the print function.  
5.1.39  
Ex. \(79\) – Dynamic modulo - take a\[i\] modulo j  
var a = \[10,9,8,7,6,5,4,3,2,1,0\];  
Output\:  
var b = \[\];  
c = 0,1,2,3,1,5,4,3,2,1,0  
for\(var j=0; j\<=10; j++\)\{  
b\[j\] = a\[j\] % \(j+1\);  
\}  
print\("c = " + b\); 52 5 Arrays  
In the provided code snippet, we have two arrays a and b initialized, and a loop is  
used to perform some operations and populate the b array based on the values in a. Two  
arrays, a and b, are declared. Variable a contains eleven integer values ranging from 10 to  
0, and b is initially an empty array. A for-loop is set up with the variable j ranging from  
0 to 10 \(inclusive\). This loop will iterate a total of 11 times. Inside the loop, there is an  
assignment statement. For each iteration, the value at index j in array a is taken \(a\[ j\]\),  
and the modulo operator \(%\) is applied to it. The divisor in the modulo operation is \( j  
+ 1\). The result of this operation is then assigned to the corresponding index j in array  
b. Essentially, it calculates the remainder when the value in a is divided by j + 1, and  
stores that remainder in b. Next, outside the loop, a print statement is used to display the  
contents of array b. It creates a string concatenating “c = ” and the array b. This will  
display the values of array b as a string with “c = ” as a prefix.  
5.1.40  
Ex. \(80\) – Convert a string to an array  
var a = "0|13|55|56|1|30|123";  
Output\:  
var b = "5|33|55|90|1|22|127";  
5,46,110,146,2,52,250  
var aa = a.split\("|"\);  
var bb = b.split\("|"\);  
var cc = \[\];  
for \(i=0; i\<=aa.length-1; i++\) \{  
cc\[i\] = Number\(aa\[i\]\) + Number\(bb\[i\]\);  
\}  
print\(cc\);  
The code from above performs a series of operations on two given strings a and b.  
These strings contain numerical values separated by the “|” character. The code aims to  
split these strings into arrays, calculate the sum of corresponding elements from both  
arrays, and store the results in a new array cc, which are then printed in the output.  
The code initially begins by defining two strings, a and b, each containing a series of  
numerical values separated by “|” characters. Next, it splits the strings a and b into arrays  
using the split\(“|”\) method. This operation separates the numerical values at each “|”  
character and stores them in the arrays aa and bb, respectively. Afterward, an empty  
array cc is declared to store the results of the element-wise addition of the values from  
aa and bb. A for-loop is used to iterate through the elements of aa. The loop runs from i  
= 0 to i \<= aa.length−1, ensuring that it goes through all elements in the arrays. During  
each iteration, the code converts the elements at the current index i in both aa and bb  
to numbers using Number\(\) and then adds them together. The result is stored in the cc  
array at the same index i. Essentially, this loop calculates the element-wise sum of the  
corresponding elements from aa and bb and populates the cc array with the results. Next, 5 Arrays 53  
the code prints the contents of the cc array, which now holds the summed values of the  
corresponding elements from the original a and b strings.  
5.1.41  
Ex. \(81\) – The rule of three simples  
let a = \[5, 1, 8, 4, 6, 2, 9, 8\];  
Output\:  
let n = a.length;  
55.55555555555556%  
let max = 0;  
11.11111111111111%  
let m = 100;  
88.88888888888889%  
let t = \[\];  
44.44444444444444%  
66.66666666666666%  
for\(let i=0; i\<n; i++\)\{  
22.22222222222222%  
if\(a\[i\]\>max\)\{max=a\[i\];\}  
100%  
\}  
88.88888888888889%  
for\(let i=0; i\<n; i++\)\{  
p = \(m/max\) \* a\[i\];  
print\(p + '%'\);  
\}  
This code begins by defining an array a with a series of numeric values. It calculates  
the length of the array n and initializes some variables\: max is set to 0, m is assigned the  
value 100, and an empty array t is created. The first for-loop iterates through the elements  
of the array a. Within this loop, there is an if statement that checks if the current element  
a\[i\] is greater than the current maximum value max. If it is, the max variable is updated  
to the value of a\[i\], essentially finding the maximum value in the array. After finding  
the maximum value, a second for-loop goes through the elements of the array a again.  
Inside this loop, it calculates a new variable p by multiplying m by the ratio of the current  
element a\[i\] to the maximum value max. This is done to scale the values in the array a  
proportionally based on the maximum value. Next, the code prints out the calculated p  
value followed by the ‘%’ symbol. This code essentially scales the values in array a so  
that they represent percentages relative to the maximum value found in the array. The  
scaled values are then printed to the console. 54 5 Arrays  
5.1.42  
Ex. \(82\) – Average, standard deviation and coefficient of variation  
let a = \[5, 6, 2, 9, 44, 200\];  
Output\:  
let n = a.length;  
AV = 44.333333333333336  
let b = 0;  
SD = 77.8322983514342  
let e = 0;  
CV = 1.7556157522879894  
for\(var j=0; j\<n; j++\)\{  
b += a\[j\];  
\}  
let x = b/n;  
for\(var j=0; j\<n; j++\)\{  
e += Math.pow\(\(a\[j\] - x\), 2\);  
\}  
let s = Math.sqrt\(e/\(n-1\)\);  
let c = s/x;  
print\('AV = ' + x\);  
print\('SD = ' + s\);  
print\('CV = ' + c\);  
This source code is fundamental for any scientist or/and engineer, and it calculates and  
prints three statistical measures \(average, standard deviation, and coefficient of variation\)  
for a given array of numbers. The code begins by defining an array a containing a set of  
numerical values. It also initializes two variables, b and e, to zero. Variable b will be used  
to calculate the sum of all values in the array, and e will be used to calculate the sum of  
squared differences from the mean. Next, the code calculates the length of the array a and  
stores it in the variable n. A for-loop is used to iterate through the elements of the array a.  
Inside the loop, each element of the array is added to the variable b, effectively summing  
up all the values in the array. After the first loop, the code calculates the mean \(average\) x  
by dividing the sum b by the length n of the array a. A second for-loop is used to iterate  
through the elements of the array a once again. Inside this loop, the code calculates the  
sum of squared differences \(e\) from the mean for each element of the array. Once the  
second loop is complete, the code proceeds to calculate the standard deviation s using  
the formula for sample standard deviation. It takes the square root of e divided by \(n−1\).  
Next, the code calculates the coefficient of variation c by dividing the standard deviation  
s by the mean x. The results are then printed to the console using the print function,  
displaying the average \(AV\), standard deviation \(SD\), and coefficient of variation \(CV\)  
along with their respective values. Thus, this code performs basic statistical calculations  
for a given array of numbers, providing insights into the central tendency, dispersion, and  
relative variability of the data. 5 Arrays 55  
5.1.43  
Ex. \(83\) – Horizontal chart from ASCII characters  
let a = \[5, 1, 8, 4, 6, 2, 8, 9\];  
Output\:  
let c = '\#';  
\#\#\#\#\#  
let t =  
'';  
\#  
\#\#\#\#\#\#\#\#  
let n = a.length;  
\#\#\#\#  
\#\#\#\#\#\#  
for\(let i=0; i\<n; i++\)\{  
\#\#  
for\(let k=0; k\<a\[i\]; k++\)\{  
\#\#\#\#\#\#\#\#  
t += c;  
\#\#\#\#\#\#\#\#\#  
\}  
t += '\\n';  
\}  
print\(t\);  
The above example initializes an array a with a sequence of integers. It also defines  
two strings, c and t, with initial values. The variable c is set to “\#”, and t is an empty  
string. The length of array a is stored in the variable n. The code then enters a nested loop  
structure. The outer loop, controlled by the variable i, iterates through each element of  
the array a. Inside this loop, there is an inner loop controlled by the variable k. The inner  
loop runs a number of times equal to the value at the current index of a\[i\]. During each  
iteration of the inner loop, the character “\#” is appended to the string t. After the inner  
loop finishes for a specific i, a newline character “\\n” is appended to the string t. This  
creates a pattern of “\#” characters on each line, where the number of “\#” characters on a  
line is determined by the value at the current index of a\[i\]. Thus, the t string, containing  
the pattern of “\#” characters, is printed to the console. 56 5 Arrays  
5.1.44  
Ex. \(84\) – Horizontal chart with bars proportional with max from array  
let a = \[5, 2, 8, 4, 6, 22, 8, 9\];  
Output\:  
let m = 15;  
\#\#\#  
let c = '\#';  
\#  
let t =  
'';  
\#\#\#\#\#  
let max = 0;  
\#\#  
\#\#\#\#  
let n = a.length;  
\#\#\#\#\#\#\#\#\#\#\#\#\#\#  
\#\#\#\#\#  
for\(let i=0; i\<n; i++\)\{  
\#\#\#\#\#\#  
if\(a\[i\]\>max\)\{max=a\[i\];\}  
\}  
for\(let i=0; i\<n; i++\)\{  
f = Math.floor\(\(m/max\) \* a\[i\]\);  
for\(let k=0; k\<f; k++\)\{  
t += c;  
\}  
t += '\\n';  
\}  
print\(t\);  
The above example performs several operations on an array a containing numeric  
values, and then generates a visual representation of the data using characters. First, an  
array a is defined, which contains the numbers \[5, 2, 8, 4, 6, 22, 8, 9\]. Next, some variables  
are initialized\: \(1\) Variable m is set to 15. \(2\) Variable c is set to “\#”, representing a  
character used to visualize the data. \(3\) Variable t is an empty string that will accumulate  
characters to create a visual representation. \(4\) Variable max is initialized to 0 and will be  
used to find the maximum value in the array a. \(5\) Variable n is assigned the length of the  
array a. The code then enters a loop to find the maximum value in the array a. It iterates  
through each element of a using a for-loop, and if the current element \(a\[i\]\) is greater than  
the current maximum \(max\), it updates the max variable with the value of a\[i\]. This loop  
effectively finds the maximum value in the array. The detection of the maximum value,  
allows the code to enter another loop to generate a visual representation of the data. It  
iterates through each element of a again, using a for-loop with i as the loop variable.  
Inside this loop variable f is calculated as Math.floor\(\(m/max\) \* a\[i\]\). This computes a  
scaled value of a\[i\] relative to the maximum value \(max\) and scales it to fit within the  
range of 0 to m. The Math.floor function ensures that f is an integer. Another nested  
for-loop with k as the loop variable is used to append f copies of the character c to the  
string t. This creates a visual representation where the number of characters represents the  
scaled value of a\[i\]. Once f characters are added, a newline character “\\n” is injected to  
start a new line. Next, the code prints the accumulated string t, which displays the visual  
representation of the scaled values of the elements in the array a using the character 5 Arrays 57  
“\#”. The number of “\#” characters on each line corresponds to the scaled value of the  
corresponding element in the array a.  
5.1.45  
Ex. \(85\) – Horizontal chart with UTF characters proportional with max array  
let a = \[5, 2, 8, 4, 6, 22, 8, 9\];  
Output\:  
let m = 15;  
▮▮▮▯▯▯▯▯▯▯▯▯▯▯▯  
let t =  
'';  
▮▯▯▯▯▯▯▯▯▯▯▯▯▯▯  
let max = 0;  
▮▮▮▮▮▯▯▯▯▯▯▯▯▯▯  
▮▮▯▯▯▯▯▯▯▯▯▯▯▯▯  
let n = a.length;  
▮▮▮▮▯▯▯▯▯▯▯▯▯▯▯  
▮▮▮▮▮▮▮▮▮▮▮▮▮▮▯  
for\(let i=0; i\<n; i++\)\{  
▮▮▮▮▮▯▯▯▯▯▯▯▯▯▯  
if\(a\[i\]\>max\)\{max=a\[i\];\}  
▮▮▮▮▮▮▯▯▯▯▯▯▯▯▯  
\}  
for\(let i=0; i\<n; i++\)\{  
f = Math.floor\(\(m/max\) \* a\[i\]\);  
for\(let k=0; k\<m; k++\)\{  
if\(k\<f\)\{  
t += '▮';  
\} else \{  
t += '▯';  
\}  
\}  
t += '\\n';  
\}  
print\(t\);  
This code is similar to the previous one, and performs several operations on an array a  
and generates a UTF-8 text-based bar chart, where the length of each bar is proportional  
to the corresponding element in the array a concerning the maximum value in the array.  
An array a is defined with a set of numeric values. Variables m, t, and max are initialized.  
m represents the total number of characters for each bar in the chart, t will store the  
final text result, and max will keep track of the maximum value in the array. The length  
of the array a is determined and stored in the variable n. A for-loop is used to find the  
maximum value in the array. It iterates through each element of a, and if the current  
element is greater than the current max, it updates max with the current element. Another  
for-loop is used to create the bar chart. It iterates through each element of a again. Inside  
the second loop, a variable f is calculated. It represents the length of the current bar and  
is calculated as \(m/max\) \* a\[i\], which scales the length of the bar based on the ratio of the  
current element value to the maximum value in the array. Within a nested loop \( for-loop  
with variable k\), the code checks if k is less than f . If k is less than f , it appends a filled 58 5 Arrays  
square character \(“▮”\) to the string t, indicating the filled portion of the bar. Otherwise, it  
appends an empty square character \(“ ”\) to represent the empty portion of the bar. After  
each bar is constructed, the code adds a newline character to t to start a new line for  
the next bar. Next, the resulting t variable, containing the text-based bar chart, is printed  
to the console. This code essentially visualizes the values in the array a by representing  
them as bars in a simple text format, where the length of each bar is proportional to the  
value it represents concerning the maximum value in the array. Traversal of Multidimensional Arrays  
# 6  
Traversal of multidimensional arrays is a fundamental operation in computer program-  
ming, particularly when dealing with complex data structures and matrices \[1\]. A  
multidimensional array is essentially an array of arrays, where each element can be  
another array. This arrangement allows for the representation of data in a grid or matrix-  
like format, making it well-suited for various applications, including image processing,  
data analysis, and simulations. Traversing or iterating through multidimensional arrays  
involves systematically visiting each element within the structure. This process is crucial  
for performing tasks such as data manipulation, searching for specific values, or perform-  
ing mathematical operations across the array. Depending on the programming language,  
there are various techniques and loops that can be used for efficient multidimensional  
array traversal. In the following examples, we will explore the common methods and tech-  
niques used to traverse multidimensional arrays in Java Script, providing insights into how  
to access and manipulate data stored in these complex structures. Whether one is work-  
ing with two-dimensional arrays, three-dimensional arrays, or even higher-dimensional  
arrays, understanding how to traverse them is a fundamental skill for a wide range of  
software development and data analysis tasks. The following examples show different  
cases. Some classic examples are presented first, using nested loops for multidimensional  
array traversals, and other more interesting cases show the same types of traversals using  
one for-loop and mathematical formulas for guidance.  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_6  
59 60 6 Traversal of Multidimensional Arrays  
The above statement is working with a 2D array named A. This array is composed of  
several sub-arrays, each of which contains a mix of numbers and strings. In this code, we  
define a 2D array A using the var keyword. This array is structured as an array of arrays.  
Each sub-array represents a row of data, and within each sub-array, we have elements  
that can be either strings or numbers. The A array contains four sub-arrays, and each  
of them holds a combination of string and number values\: The first sub-array contains  
three elements\: the string “a”, the number 88, and the number 146. The second sub-array  
contains three elements\: the string “b”, the number 34, and the number 124. The third  
sub-array contains three elements\: the string “c”, the number 96, and the number 564.  
The fourth sub-array contains three elements\: the number 100, the number 12, and the  
string “d”. After defining the 2D array A, the code prints an element from within the array.  
Specifically, it prints A\[1\]\[2\]. This notation means that it accesses the second sub-array  
within A \(arrays are zero-indexed in JavaScript\), and from that sub-array, it retrieves the  
third element, which is the number 124. Thus, when this code is run, it will output 124  
to the console. 6 Traversal of Multidimensional Arrays 61  
This code initializes a two-dimensional array A containing various values, including  
strings and numbers. The array consists of four subarrays, each containing three elements.  
These subarrays represent rows and contain a mix of string and numeric values. Next, it  
declares an empty string variable t which will be used to store the result of the iteration  
over the A array. The code proceeds to iterate through the A array using nested for loops.  
The outer loop iterates through the rows of the A array using the variable i, and the inner  
loop iterates through the elements of each row using the variable j. Within the nested  
loops, the code appends information about each element of the A array to the string t.  
It creates a string in the format “A\[i\]\[ j\] = value”, where i and j are the indices of the  
element, and value is the actual value stored in the A array at that position. Thus, the  
code prints the accumulated string t to the console, displaying the information about each  
element in the A array, including their positions within the array. 62 6 Traversal of Multidimensional Arrays  
This source code defines a 2D array m, initializes several variables, and then uses  
a loop to iterate through the elements of the array m. The 2D array m is defined as a  
3 × 3 matrix with specific integer values. Two variables i and j are initialized to 0, and  
two variables n1 and n2 are assigned the lengths of the matrix m \(number of rows and  
columns, respectively\). The variable q is calculated as the product of n1 and n2. A for-  
loop is used to traverse the elements of the matrix. The loop runs from v = 0 to v \<  
q. Within the loop, variable j is calculated as the remainder of v divided by n2, which  
effectively represents the column index within the matrix. An if condition checks if j is  
0 \(indicating a new row\) and v is not 0 \(to exclude the very first iteration\) and if i is  
less than n1 \(indicating there are more rows to traverse\), and v is not equal to q. If this  
condition is met, i is incremented by 1, which signifies moving to the next row in the  
matrix. Next, a print statement is used to display the value of the matrix element at the  
current indices i and j in the format “m\[“+i+”\]\[“+j+“\] =” + m\[i\]\[ j\]. In essence, this code  
iterates through the elements of the 2D array m row by row, printing out each element  
along with its row and column indices. 6 Traversal of Multidimensional Arrays 63  
The code defines a 2D array A containing a mix of strings and numbers. It initializes  
some variables and then enters a loop to iterate through each element of the 2D array and  
print its position and value. First, the code initializes an empty string t which will be used  
to accumulate the output. It also determines the number of rows n and columns m in the  
array A. Then, it sets up two counters, i and j, to keep track of the current row and column  
in the array. The code enters a nested loop that runs n × m times, where n is the number  
of rows and m is the number of columns in the array. Within the loop, j is updated to the  
current column index by taking the remainder of v \(the loop counter\) divided by m. An  
if statement checks if v is not zero \(i.e., we are not at the first element of the array\) and  
if j is zero \(i.e., it reached the end of a row\). If this condition is met, i is incremented  
to move to the next row. The code then constructs a string t that contains the current  
element \(v\), the coordinate position of the element on the matrix \(A\[i\]\[ j\]\) and the value  
found on it, where i and j represent the row and column indices, and appends it to the t  
string. Next, a newline character \(\\n\) is added to separate the information corresponding  
to each element. After the loop finishes, the accumulated string t is printed to the console.  
In essence, this code is used to display the indices and values of all elements in the 2D  
array A, with each element position in the array denoted by A\[i\]\[ j\]. 64 6 Traversal of Multidimensional Arrays  
This code defines a 3D array called A that contains nested arrays with multiple ele-  
ments. Each of these nested arrays represents a 2D array, and they are grouped within  
the larger 3D structure. Inside the 3D array A, there are two main levels of nested arrays.  
The first level contains two sub-arrays, and the second level contains arrays with a mix of  
strings and numbers as their elements. For example, the first nested array A\[0\] contains  
four sub-arrays. Each of these sub-arrays consists of three elements. The elements include  
strings like “a,” “b,” “c,” and “d,” as well as numeric values like 88, 146, 34, 124, 96,  
564, 100, and 12. Some sub-arrays even contain a mix of both strings and numbers. Sim-  
ilarly, the second nested array A\[1\] also contains four sub-arrays with similar structures.  
The last line of code, print\(A\[1\]\[2\]\);, is trying to access an element within the A array.  
Specifically, it accesses the third sub-array \(\[2\]\) within the second nested array \(\[1\]\) and  
print its contents. In this case, it would print the sub-array \[“g”, 26, 884\]. 6 Traversal of Multidimensional Arrays 65 66 6 Traversal of Multidimensional Arrays  
This code defines a multi-dimensional array A, consisting of 5 matrices, each contain-  
ing 4 rows and 3 columns of elements. These elements can be a combination of strings  
and numbers. The code initializes variables t, s, m, and n. Variable t will be used to  
accumulate the results, s represents the number of matrices in the array, m represents the  
number of rows in each matrix, and n represents the number of columns in each matrix.  
Subsequently, the code uses nested loops to iterate through the elements of the multi-  
dimensional array A. It calculates the total number of elements q in the array, which is  
the product of the number of matrices, rows, and columns. Inside the loop, the code cal-  
culates the current position k, j, i, and d based on the current iteration v. The variables i,  
j, d, and k represent the current row index, column index, matrix index, and overall index,  
respectively. The code then appends a string to the variable t in the format “v A\[d\]\[i\]\[j\] =  
value” for each element in the array, where v is the current index, d is the current matrix  
index, i is the current row index, j is the current column index, and value is the value of  
the corresponding element in the array A. Next, the code prints the accumulated string t  
to the console, displaying the index and values of all elements in the multi-dimensional  
array A. 6 Traversal of Multidimensional Arrays 67  
The above source code is designed to perform integer division within a two-  
dimensional array using a single for-loop. It starts with the definition of a two-dimensional  
array A, containing various values and strings. It also initializes an empty string t to store  
the output and variables n and m to store the number of rows and columns in array A. Two  
variables i and j are also initialized. The primary goal of this code is to traverse the entire  
2D array A using a single loop and output the indices and values of each element in a  
formatted string. The for-loop iterates from 0 to n × m−1, where n is the number of rows  
and m is the number of columns in array A. Inside the loop the variable j is calculated  
as the remainder of dividing k by m, which determines the column index. The variable i  
is calculated as the result of dividing k by m, rounded down to the nearest integer, which  
determines the row index. The code builds a string t that contains the current index k and  
the corresponding element from the 2D array A using the calculated i and j values. The  
loop continues to the next iteration. Next, after the loop, the print\(t\); statement is used  
to display the formatted string t, which contains the indices and corresponding elements  
from the 2D array A. This code effectively provides a structured way to access and display  
the elements of a 2D array while using a single loop to traverse it. 68 6 Traversal of Multidimensional Arrays  
This source code defines a 2D array A with a mixture of strings and numbers. It  
initializes an empty string t and determines the number of rows in the A array \(n\) and  
the number of columns \(m\). The code then uses a for-loop to iterate through all elements  
of the array A using a single counter variable k. Inside the loop, it calculates the row i  
and column j based on the value of k and the dimensions of the array \(n × m\). For each  
element of A, the code appends a line to the t string containing the following information\:  
the value of k, the coordinates in the array A where the value is located \(A\[i\]\[ j\]\), and  
the actual value itself. A newline character is added to separate each line. The code  
concludes by printing the contents of string t. However, the novelty here is represented  
by the way variable i and j are calculated. Note that i and j are used to calculate the  
row and column indices for traversing a two-dimensional array A. Variable n is assigned  
the value A.length, which represents the number of rows in the array A. Variable m is  
assigned the value A\[0\].length, which represents the number of columns in the array A.  
The loop iterates over all the elements in the two-dimensional array, and for each iteration  
a series of events unfold. The counter k is used as a linear index that ranges from 0 to n \*  
m−1. It represents the current position within the flattened representation of the 2D array.  
Variable j is calculated using the modulo operator %. It calculates the column index by  
taking the remainder of k divided by m. This gives the column index within the range \[0,  
m-1\]. In contrast, variable i is calculated using integer division. It calculates the row index 6 Traversal of Multidimensional Arrays 69  
by subtracting j from k and then dividing by m. This effectively calculates the row index  
based on the linear index k and the column index j. The values of k, i, and j are then used  
to access the corresponding element in the two-dimensional array A using A\[i\]\[ j\]. The  
values are concatenated to the string t to display the current index and the corresponding  
element in the array. This code effectively traverses the 2D array by linearizing the indices  
i and j and using them to access elements in the array in a row-by-row fashion, regardless  
of the actual array structure. 70 6 Traversal of Multidimensional Arrays  
In this example, a 3D array A is defined, which represents a multi-dimensional structure  
containing strings and numbers. The code then initializes several variables, including t \(a  
string for storing the result\), s \(the number of matrices or “layers” in A\), m \(the number  
of rows in each matrix\), n \(the number of columns in each matrix\), and i, j, d, and k  
as iteration and indexing variables. A loop runs from 0 to q, where q is calculated as  
the product of n \(number of columns\), m \(number of rows\), and s \(number of matrices\),  
which effectively iterates through all elements in the 3D array A. Within the loop, the  
code calculates k as the modulo of v divided by the product of m and n. Variable j is  
calculated as the modulo of v divided by n, i is calculated as \(k−j\) divided by n, and d is  
calculated as \(v−k\) divided by the product of m and n. These calculations help determine  
the current position within the 3D array A. The code appends information to the t string  
for each iteration, showing the current index v and the corresponding value in the A array  
at the position \[d\]\[i\]\[ j\]. A line break is also added to separate the entries. At the end of  
the loop, the code prints the contents of the t string. Thus, this code iterates over the entire  
3D array A and prints the indices d, i, j, and the corresponding element from the array,  
effectively displaying the entire content of the 3D array with their indices. Nevertheless,  
the novelty here is represented by the way variables i, j, and d are computed in order to  
iterate over the elements of the 3D array A\:  
k = v%\(m × n\) 6 Traversal of Multidimensional Arrays 71  
j = v%n  
i =  
\(k − j \)  
n  
d =  
\(v − k\)  
\(m × n\)  
Namely, variable k represents the position within a matrix \(subarray\), and variable i is  
calculated as \(k−j\)/n, which is the result of integer division between k−j and the number  
of columns n. Thus, it calculates the row index within the current matrix. Variable j is  
calculated as the remainder of v divided by the number of columns n \( j = v % n\). This  
gives us the column index within the current matrix. Variable d is calculated as \(v−k\)/  
\(m × n\), which is the result of integer division between \(v−k\) and the total number of  
elements in a matrix \(m × n\). Thus, it calculates the index of the current matrix in the 3D  
array. Matrix Operations  
# 7  
Matrix operations are fundamental mathematical operations used in various fields such  
as linear algebra, physics, computer science, engineering, and more \[1\]. Matrices are  
structured arrangements of numbers or symbols in rows and columns, and these oper-  
ations allow us to manipulate and analyze data efficiently. They play a crucial role in  
solving systems of linear equations, transformations, and data analysis. In this context,  
matrix operations encompass a wide range of mathematical processes, including addi-  
tion, subtraction, multiplication, inversion, and transposition. Each operation serves a  
specific purpose and can be applied to matrices of different sizes and dimensions. These  
operations are not only essential in theoretical mathematics but also have practical applica-  
tions in computer graphics, machine learning, quantum mechanics, and many other areas.  
Understanding matrix operations is essential for anyone working with data, whether in  
scientific research, engineering, or data science. These operations provide powerful tools  
to manipulate, transform, and extract valuable insights from structured data, making them  
a cornerstone of modern mathematics and science. In the following examples, we will  
explore various matrix operations and their applications in more detail.  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_7  
73 74 7 Matrix Operations  
//how many 1's in matrix  
let a = [[1, 1, 0, 0, 0],  
\[0, 1, 0, 0, 1\],  
\[1, 0, 0, 1, 1\],  
\[0, 0, 0, 0, 0\],  
\[1, 0, 1, 0, 1\]\];  
let n = a.length;  
let m = a\[0\].length;  
let k = 0;  
for\(var i=0; i\<n; i++\) \{  
for\(var j=0; j\<m; j++\) \{  
if\(a\[i\]\[j\]==1\) \{k++;\}  
\}  
Output\:  
10  
\}  
print\(k\);  
This example is designed to count how many times the value “1” appears in a given  
matrix. The code begins by defining a matrix a using a two-dimensional array. This matrix  
consists of rows and columns and contains various values, including 1’s and 0’s. Next,  
the code initializes three variables\: n, m, and k. Variable n is set to the number of rows in  
the matrix a \(in this case, there are 5 rows\). Variable m is set to the number of columns  
in the matrix a \(in this case, there are 5 columns\). Also, variable k is initialized to zero  
and will be used to count the number of ‘1’s in the matrix. The code then enters a nested  
loop structure, using ‘for’ loops to iterate through each element of the matrix. The outer  
loop, controlled using variable i, iterates through the rows from 0 to n−1. The inner loop,  
is controlled by variable j, that iterates through the columns from 0 to m−1. Inside the  
innermost part of the loop, the code checks if the current element of the matrix, accessed  
as a\[i\]\[ j\], is equal to ‘1’. If it is, the k variable is incremented by 1. Once both loops  
complete their iterations, the k variable contains the count of ‘1’s in the matrix. The code  
then prints the value of k to the output, which represents the total count of ‘1’s in the  
matrix. Thus, the primary purpose of this code is to determine the total count of ‘1’s in  
the given matrix a. 7 Matrix Operations 75  
var m = \[  
\[2, 4, 6\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
var r = 0;  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r += m\[i\]\[j\];  
\}  
Output\:  
38  
\}  
print\(r\);  
This code defines a two-dimensional array m, representing a matrix with three rows  
and three columns. Each element of the matrix contains numeric values. The code then  
proceeds to calculate the sum of all the elements within this matrix and stores the result  
in the variable r. It uses nested for loops to traverse the entire matrix. The outer loop,  
controlled by the variable i, iterates through the rows of the matrix. In this specific code, it  
will go through three rows since m.length is 3. The inner loop, controlled by the variable  
j, iterates through the elements within each row. In this case, it iterates through the three  
elements within each row using m\[i\].length. For each element in the matrix, the value  
of that element is added to the running total stored in the variable r. This accumulation  
of values continues as the loops iterate through all the elements in the matrix. Thus, the  
script prints out the sum r after the loops have processed the entire matrix. This code  
essentially calculates the sum of all elements in the 3 × 3 matrix and then displays that  
total. 76 7 Matrix Operations  
var m = \[ Output\:  
\[2, 4, 6\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
2 4 6  
3 5 6  
3 5 4  
var r =  
"";  
for\(var i=0; i\<m.length; i++\) \{  
r += "\\n";  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r += m\[i\]\[j\] + " ";  
\}  
\}  
print\(r\);  
The souce code example from above defines a two-dimensional array m that contains  
numeric values organized in rows and columns. The array m consists of three rows, and  
each row contains three numerical elements. Next, the code initializes an empty string  
variable r which will be used to accumulate the output. The code then enters a nested  
loop structure using for loops. The outer loop iterates through the rows of the array m,  
and the inner loop iterates through the elements within each row. For each element in the  
2D array, the code appends its value to the string r, followed by a space, to format the  
output. After each row is processed in the inner loop, a newline character is added to the  
string r to start a new line for the next row. At the end, the print function is called, which  
typically sends the string r to the standard output or console, displaying the entire 2D  
array in a neatly formatted manner. 7 Matrix Operations 77  
var m = \[  
\[2, 4, 6\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
var s = 3; // scalar  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
m\[i\]\[j\] = s \* m\[i\]\[j\];  
//m\[i\]\[j\] \*= s;  
Output\:  
6,12,18,9,15,18,9,15,12  
\}  
\}  
print\(m\);  
Here, a two-dimensional array m is defined. This array contains three subarrays, and  
each represents a row of a matrix. The matrix m holds integer values arranged in a 3 ×  
3 grid. Next, a scalar variable s is set to the value 3. This scalar value will be used to  
perform scalar multiplication on each element of the matrix m. The code enters a nested  
loop structure. The outer loop iterates over the rows of the matrix m, and the inner loop  
iterates over the elements within each row. This loop structure ensures that every element  
in the 3 × 3 matrix will be accessed and processed. Within the loop, each element m\[i\]\[ j\]  
is multiplied by the scalar value s, effectively scaling the value of that element. The result  
of this scalar multiplication overwrites the original value of m\[i\]\[ j\], updating the matrix  
m with the scaled values. Alternatively, the code contains a comment showing a more  
concise way of achieving the same result using the compound assignment operator “\* =  
”. This operator multiplies the value of m\[i\]\[ j\] by s and assigns the result back to m\[i\]\[ j\]  
in a single step. Next, the code ends with a print statement, which displays the modified  
matrix m after the scalar multiplication. 78 7 Matrix Operations  
var m = \[  
\[2, 4, 4\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
var r = \[\];  
for\(var i=0; i\<m.length; i++\) \{  
r\[i\] = 0;  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r\[i\] += m\[i\]\[j\];  
//r\[i\] \*= m\[i\]\[j\];  
Output\:  
10,14,12  
\}  
\}  
print\(r\);  
In this example code, there is an array m defined as a 3 × 3 matrix, where each element  
contains integer values. Additionally, there is an empty array r defined, which will be used  
to store the sum of elements in each row of the matrix m. The code proceeds with two  
nested loops. The outer loop iterates through the rows of the matrix m. Inside the outer  
loop, a variable r\[i\] is initialized to 0 for each row i. This variable will store the sum  
of elements in row i of the matrix. The inner loop iterates through the elements within  
each row of the matrix. Within this loop, the code calculates the sum of elements in row  
i by accumulating the values of m\[i\]\[ j\] into the r\[i\] variable. The result is an array r  
where each element r\[i\] represents the sum of the elements in the corresponding row of  
matrix m. A comment in the code shows an alternative for a multiplication case, using  
the “\*=” operator, however in this case, using “+=” is appropriate since it adds up the  
values to calculate the sum \(as intended\). Next, the code concludes with a print statement  
to display the calculated sums for each row of the matrix m. This output will show the  
sum of elements in each row as an array r. 7 Matrix Operations 79  
var m = \[  
\[2, 4, 4\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
var c = \[\];  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
if\(!c\[j\]\)\{c\[j\]=0;\}  
c\[j\] += m\[i\]\[j\];  
//c\[j\] \*= m\[i\]\[j\];  
Output\:  
8,14,14  
\}  
\}  
print\(c\);  
In the provided code, a two-dimensional array m is defined, which represents a 3 × 3  
matrix. The matrix m contains integer values in its cells. Additionally, there is an empty  
array c declared. This array will be used to store the column-wise sum of elements from  
matrix m. It is worth noting that c is empty initially, and its length will be determined  
based on the number of columns in the matrix m. The code then enters a nested loop  
structure. The outer loop iterates over the rows of the matrix m, and the inner loop iterates  
over the elements within each row. This loop structure ensures that every element in the  
3 × 3 matrix will be accessed and processed. Within the loop, the code checks whether an  
element in the c array corresponding to the current column \( j\) exists. If it does not exist  
\(!c\[ j\] evaluates to true\), it initializes that element to 0. This step is necessary to ensure  
that the array c has the same number of elements as the number of columns in m. Next,  
the code adds the value of m\[i\]\[ j\] to the corresponding element in array c, effectively  
performing column-wise summation. The result is stored in the c array, accumulating the  
sum as it iterates through the rows. Alternatively, the code contains a comment showing  
a different operation c\[ j\] \* = m\[i\]\[ j\], indicating that any operation is possible in this  
setup. The code ends with a print statement that allows the contents of variable c to be  
visually observed. 80 7 Matrix Operations  
let m = \[ Output\:  
\[2, 4, 4\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
C Max = 3,5,6  
R Max = 4,6,5  
C Min = 2,4,4  
R Min = 2,3,3  
let a = \[  
\[0, 0, 0\],  
\[0, 0, 0\],  
\[0, 0, 0\],  
\[0, 0, 0\]  
\];  
for\(let i=0; i\<m.length; i++\) \{  
for\(let j=0; j\<m\[i\].length; j++\) \{  
//if\(!a\[0\]\[j\]\)\{a\[0\]\[j\]=0;\}  
//if\(!a\[1\]\[i\]\)\{a\[1\]\[i\]=0;\}  
if\(!a\[2\]\[j\]\)\{a\[2\]\[j\]=10000;\}  
if\(!a\[3\]\[i\]\)\{a\[3\]\[i\]=10000;\}  
if\(a\[0\]\[j\]\<m\[i\]\[j\]\)\{a\[0\]\[j\]=m\[i\]\[j\];\}  
if\(a\[1\]\[i\]\<m\[i\]\[j\]\)\{a\[1\]\[i\]=m\[i\]\[j\];\}  
if\(a\[2\]\[j\]\>m\[i\]\[j\]\)\{a\[2\]\[j\]=m\[i\]\[j\];\}  
if\(a\[3\]\[i\]\>m\[i\]\[j\]\)\{a\[3\]\[i\]=m\[i\]\[j\];\}  
\}  
\}  
print\('C Max = ' + a\[0\]\);  
print\('R Max = ' + a\[1\]\);  
print\('C Min = ' + a\[2\]\);  
print\('R Min = ' + a\[3\]\);  
In the provided example, two 2D arrays, m and a, are defined. The m array represents  
a 3 × 3 matrix with integer values, and the a array represents a 4 × 3 matrix filled with  
initial values. The code then enters a nested loop structure using two for loops. The outer  
loop iterates over the rows of the m matrix, while the inner loop iterates over the elements  
within each row. This nested loop structure ensures that every element in the 3 × 3 matrix  
m will be accessed and processed. Inside the loop, there are several conditional statements  
and assignments. The code checks whether specific elements in the matrix a are zero. If  
they are, it assigns the value 10,000 to these elements. This operation effectively initializes  
matrix a with high values. There are two sets of conditional statements. The first set 7 Matrix Operations 81  
\(a\[0\]\[ j\] and a\[1\]\[i\]\) is designed to find the maximum value along each column and row  
of the m matrix. The second set \(a\[2\]\[ j\] and a\[3\]\[i\]\) is used to find the minimum value  
along each column and row of the m matrix. The code uses conditional comparisons to  
update the values in the a matrix based on the conditions mentioned above. Next, the  
code outputs the results using the print statement, which displays the following statistics\:  
\(1\) “C Max” represents the maximum value for each column of the m matrix. \(2\) “R  
Max” represents the maximum value for each row of matrix m. \(3\) “C Min” represents  
the minimum value for each column of matrix m. \(4\) “R Min” represents the minimum  
value for each row of m.  
let m = \[  
\[2, 4, 4\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
let a = \[\];  
a\[0\] = \[\];  
a\[1\] = \[\];  
for\(let i=0; i\<m.length; i++\) \{  
for\(let j=0; j\<m\[i\].length; j++\) \{  
if\(!a\[0\]\[j\]\)\{a\[0\]\[j\]=1;\}  
if\(!a\[1\]\[i\]\)\{a\[1\]\[i\]=1;\}  
a\[0\]\[j\] \*= m\[i\]\[j\];  
a\[1\]\[i\] \*= m\[i\]\[j\];  
//if\(!a\[0\]\[j\]\)\{a\[0\]\[j\]=0;\}  
//if\(!a\[1\]\[i\]\)\{a\[1\]\[i\]=0;\}  
//a\[0\]\[j\] += m\[i\]\[j\];  
//a\[1\]\[i\] += m\[i\]\[j\];  
Output\:  
C = 18,100,96  
R = 32,90,60  
\}  
\}  
print\('C = ' + a\[0\]\);  
print\('R = ' + a\[1\]\); 82 7 Matrix Operations  
In this code, a two-dimensional array m is defined, just like in the previous exam-  
ple. This array contains three subarrays, representing a 3 × 3 matrix, with integer values.  
Additionally, two empty arrays a are created. These arrays are intended to store the prod-  
uct of elements in the matrix m along rows \(R\) and columns \(C\). The code then enters a  
nested loop structure, similar to the previous example, where the outer loop iterates over  
the rows of the matrix m, and the inner loop iterates over the elements within each row.  
Within the loop, there is conditional logic to handle the initialization of elements in the  
arrays a. If the specific element in a\[0\]\[ j\] or a\[1\]\[i\] does not exist \(i.e., it is undefined\),  
it is initialized to 1. This condition ensures that if the element is accessed for the first  
time, it is set to 1. Subsequently, each element in a\[0\]\[ j\] and a\[1\]\[i\] is multiplied by  
the corresponding element from the matrix m\[i\]\[ j\]. This step calculates the product of  
elements along columns and rows, as the code progresses through the matrix m. The code  
also includes commented-out alternative approaches using addition \(+=\) instead of mul-  
tiplication \(\*=\), or initializing with 0 and then adding the matrix element, which would  
result in calculating the sum along columns and rows. Next, the code displays the product  
along columns as “C” and the product along rows as “R”, followed by the respective  
arrays containing these results.  
let a = \[  
\[1, 2, 3\],  
\[4, 5, 6\],  
\[7, 8, 9\]  
\];  
let d = 0;  
let n = a.length;  
let m = a\[0\].length;  
for\(var i=0; i\<n; i++\) \{  
for\(var j=0; j\<m; j++\) \{  
d += a\[i\]\[m-j-1\];  
print\(a\[i\]\[m-j-1\]\);  
i++;  
Output\:  
3  
5  
7  
---  
15  
\}  
\}  
/\*  
print\('---\\n' + d\); 7 Matrix Operations 83  
let a = \[  
\[1, 2, 3\],  
\[4, 5, 6\],  
\[7, 8, 9\]  
\];  
let d = 0;  
let n = a.length;  
let m = a\[0\].length;  
let i = 0;  
for\(var j=0; j\<m; j++\) \{  
d += a\[i\]\[m-j-1\];  
print\(a\[i\]\[m-j-1\]\);  
i++;  
\}  
print\('---\\n' + d\);  
\*/  
In this case, a two-dimensional array a is defined, which represents a 3 × 3 matrix  
containing integer values. The code aims to perform specific operations on this matrix  
and calculate a sum, denoted by the variable d. Initially, a variable d is declared and  
initialized with the value 0. This variable will be used to accumulate the sum of specific  
elements in the matrix. The code then retrieves the dimensions of the matrix a. It uses  
the length property to determine the number of rows \(n\) and the number of columns  
\(m\) in the matrix. Subsequently, the code enters a nested loop structure. The outer loop  
iterates over the rows of the matrix using the variable i, ranging from 0 to n−1. The  
inner loop, controlled by j, iterates over the columns of the matrix, ranging from 0 to  
m−1. Within the inner loop, the code calculates the column index to access elements in  
reverse order from right to left within each row using the expression m−j−1. The element  
a\[i\]\[m−j−1\] is accessed, and its value is added to the variable d to accumulate the sum.  
Additionally, the code shows a print statement within the inner loop, meant to output  
each value that participates to the summation. Thus, the statement print\(a\[i\]\[m−j−1\]\)  
displays the values of the matrix elements accessed during the iteration. At the end of the  
code, there is another print statement that displays a line containing three hyphens “---”  
followed by the value of d. This is intended to show the sum of the selected elements  
in the matrix. Note that i++ is meant to increment the i counter in the inner loop, which  
effectively makes the outer loop useless. That is, the counter i reaches the value of n in  
the inner loop, because the example deals with a square matrix where the columns and  
rows are equal. Thus, this code can be reduced to a single loop \(see the commented code\). 84 7 Matrix Operations  
let a = \[  
\[1, 2, 3\],  
\[4, 5, 6\],  
\[7, 8, 9\]  
\];  
let d = 0;  
let n = a.length;  
let m = a\[0\].length;  
let i = 0;  
for\(var j=0; j\<m; j++\) \{  
d += a\[i\]\[j\];  
print\(a\[i\]\[j\]\);  
i++;  
Output\:  
1  
5  
9  
---  
15  
\}  
print\('---\\n' + d\);  
Above, a two-dimensional array a is defined. This array represents a 3 × 3 matrix,  
with each subarray corresponding to a row of the matrix. Additionally, a variable d is  
initialized with the value 0, which will be used to accumulate the sum of all elements in  
the matrix. The code then proceeds to determine the dimensions of the matrix. Variable  
n is set to the number of rows \(which is 3 in this case\), and m is set to the number  
of columns \(also 3\). The loop, controlled by variable j, iterates over the columns of the  
matrix. Within this loop, the code calculates the sum of the elements by adding the value  
of each element a\[i\]\[ j\] to the accumulator d. The value of the element a\[i\]\[ j\] is also  
printed in the console using the print function. Additionally, inside this loop there is an  
i++ statement, which increments the value of i in order to avoid the use of a nested loop.  
After processing all elements of the matrix, the script ends by printing a separator line  
\(‘–-\\n’\) followed by the accumulated sum d which represents the sum of all elements in  
the left diagonal of the matrix. 7 Matrix Operations 85  
let a = \[  
\[1, 2, 3, 4\],  
\[5, 6, 7, 8\],  
\[9, 0, 1, 2\],  
\[3, 4, 5, 6\]  
\];  
let ld = 0;  
let rd = 0;  
let n = a.length;  
let m = a\[0\].length;  
let i = 0;  
for\(var j=0; j\<m; j++\) \{  
ld += a\[i\]\[j\];  
rd += a\[i\]\[m-j-1\];  
i++;  
Output\:  
L=14|R=14  
\}  
print\('L=' + ld + '|R=' + rd\);  
In this JavaScript code, we are working with a two-dimensional array a, which rep-  
resents a 4 × 4 grid. This array contains four subarrays, each of which corresponds to a  
row of the matrix. Additionally, two variables are defined\: ld \(for left diagonal\) and rd  
\(for right diagonal\), both initially set to 0. These variables will be used to accumulate  
the sums of the values along the left and right diagonals of the matrix, respectively. The  
code proceeds with setting the variables n and m, where n represents the number of rows  
in the matrix \(which is 4 in this case\), and m represents the number of columns \(also  
4\). Moreover, a counter variable i is also initialized to zero. Next, a for-loop structure  
is used. Within the loop, two actions are performed. The ld \(left diagonal\) variable is  
updated by adding the value of the current element a\[i\]\[ j\]. This step accumulates the  
sum of values along the left diagonal of the matrix. The rd \(right diagonal\) is updated by  
adding the value of the element at a\[i\]\[m−j−1\]. This step accumulates the sum of values  
along the right diagonal of the matrix. The m−j−1 expression accesses the elements in  
reverse order along each row, effectively giving the values on the right diagonal. Notably,  
the code contains the i++ statement in the main loop, which, as in the previous examples,  
is meant to eliminate the use of a nested loop. The code concludes with a print statement  
that displays the results. The sums of the left and right diagonals, stored in the ld and rd  
variables, respectively, are presented in the following format\: “L = ld|R = rd.” 86 7 Matrix Operations  
let a = \[  
\[1, 2, 3, 4\],  
\[5, 6, 7, 8\],  
\[9, 0, 1, 2\],  
\[3, 4, 5, 6\]  
\];  
let d = \[\];  
d\[0\] = 0; //sum on principal diagonal  
d\[1\] = 0; //sum on secondary diagonal  
let n = a.length;  
let m = a\[0\].length;  
for\(var i=0; i\<n; i++\) \{  
for\(var j=0; j\<m; j++\) \{  
if \(i == j\) \{d\[0\] += a\[i\]\[j\];\}  
if \(\(i + j\) == \(n - 1\)\) \{d\[1\] += a\[i\]\[j\];\}  
Output\:  
L=14|R=14  
\}  
\}  
print\('L=' + d\[0\] + '|R=' + d\[1\]\);  
The previous code contained an optimal way to sum the values found on the diagonals  
of a matrix, without using conditions. However, what if conditional branching is used,  
what would the example normally look like? In this new version, we are working with  
a two-dimensional array a, which represents a square matrix with dimensions 4 × 4. The  
array d is initialized as an empty array, and it is used to store the sums of the elements  
along the principal diagonal and the secondary diagonal of the matrix a. The principal  
diagonal of a square matrix consists of the elements where the row and column indices  
are the same \(i = j\), and the secondary diagonal consists of the elements where the sum  
of the row and column indices is equal to one less than the number of rows \(i + j = n−1\).  
The variable n is set to the number of rows in the matrix a, and m is set to the number of  
columns in the matrix a. In this case, both n and m are set to 4 since the matrix a is 4 ×  
4\. The code enters a nested loop structure. The outer loop iterates over the rows of the  
matrix a, and the inner loop iterates over the columns of the matrix a. Within this loop,  
there are conditional statements that check if the current element is part of the principal  
diagonal or the secondary diagonal. If i \(the current row index\) is equal to j \(the current  
column index\), the element belongs to the principal diagonal, and its value is added to  
d\[0\]. This operation accumulates the sum of the elements on the principal diagonal. If  
\(i + j\) is equal to \(n−1\), the element belongs to the secondary diagonal, and its value  
is added to d\[1\]. This operation accumulates the sum of the elements on the secondary 7 Matrix Operations 87  
diagonal. Next, the code prints a string that represents the results. It displays the sum of  
the elements on the principal diagonal \(L\) and the sum of the elements on the secondary  
diagonal \(R\) in the format “L = value|R = value.”  
let a = \[  
\[1, 2, 3, 4\],  
\[5, 6, 7, 8\],  
\[9, 0, 1, 2\],  
\[3, 4, 5, 6\]  
\];  
let d = \[\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(let i=0; i\<n; i++\) \{  
d\[i\] = \[\];  
for\(let j=0; j\<i+1; j++\) \{  
d\[i\]\[j\] = a\[i\]\[j\];  
r += d\[i\]\[j\] + ' ';  
\}  
r += '\\n';  
Output\:  
1  
5 6  
9 0 1  
3 4 5 6  
/\*  
1 - - -  
5 6 - -  
9 0 1 -  
3 4 5 6  
\*/  
\}  
print\(r\);  
Other operations may involve selective parts of the matrix. Thus the above JavaScript  
code defines a 2D array a containing a grid of numbers. It then initializes an empty array  
d and extracts the dimensions of the array a, storing the number of rows in n and the  
number of columns in m. Next, a string variable r is also declared and initialized as an  
empty string. The code proceeds to loop through the rows of the array a by using a  
for-loop, with the index variable i. Within this loop, another nested loop runs with index  
variable j to iterate through the columns. During each iteration, the value from the array  
a at the i row and j column is stored in the d array at the same position. Additionally, the  
value is appended to the r string, separated by a space. After each row of d is processed,  
a newline character is appended to the r string to separate the rows. Next, the code prints  
the contents of the r string using the print function. Overall, this code generates a new  
2D array d that contains a triangular subset of the original array a, and r holds a string  
representation of this subset. 88 7 Matrix Operations  
let a = \[  
\[1, 2, 3, 4\],  
\[5, 6, 7, 8\],  
\[9, 0, 1, 2\],  
\[3, 4, 5, 6\]  
\];  
let d = \[\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(let i=0; i\<n; i++\) \{  
d\[i\] = \[\];  
for\(let j=0; j\<i+1; j++\) \{  
d\[i\]\[j\] = a\[i\]\[i-j\];  
r += d\[i\]\[j\] + ' ';  
\}  
r += '\\n';  
Output\:  
1  
6 5  
1 0 9  
6 5 4 3  
/\*  
1 - - -  
5 6 - -  
9 0 1 -  
3 4 5 6  
\*/  
\}  
print\(r\);  
In this example, we start with a 2D array a that contains a grid of numbers. The code  
then initializes an empty array d and extracts the dimensions of the array a, storing the  
number of rows in n and the number of columns in m. The variable r is declared and  
initialized as an empty string. The code uses a for-loop to iterate through the rows of the  
a array using the index variable i. Within this loop, there is a nested loop that iterates  
through the columns. During each iteration, the value from the array a at the i row and  
\(i-j\) column is stored in the d array at the same position. The value is also appended to  
the r string, separated by a space. After each row of d is processed, a newline character  
is appended to the r string to separate the rows. As in the previous example, the code  
prints the contents of the r string using the print function. Please note that this source  
code example generates a new 2D array d that contains a triangular subset of the original  
array a, but this time the values are selected from the opposite diagonal of a, and r holds  
a string representation of this subset. 7 Matrix Operations 89  
let a = \[  
\[1, 2, 3, 4\],  
\[5, 6, 7, 8\],  
\[9, 0, 1, 2\],  
\[3, 4, 5, 6\]  
\];  
let d = \[\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(let i=0; i\<n; i++\) \{  
d\[i\] = \[\];  
for\(let j=i; j\<m; j++\) \{  
d\[i\]\[j\] = a\[i\]\[j\];  
r += d\[i\]\[j\] + ' ';  
\}  
r += '\\n';  
Output\:  
1 2 3 4  
6 7 8  
1 2  
6  
/\*  
1 2 3 4  
- 6 7 8  
- - 1 2  
- - - 6  
\*/  
\}  
print\(r\);  
This JavaScript example operates on a 2D array a and produces a different result  
compared to the previous code. The code begins by defining a 2D array a with four rows  
and four columns. It also initializes an empty array d, and it determines the number of  
rows n and columns m in the array a. Just as before, a string variable r is declared and  
initialized as an empty string. The code then uses a nested loop structure. The outer loop,  
controlled by the index variable i, iterates through the rows of the array a from 0 to n−1.  
Within the outer loop, a nested loop \(controlled by the index variable j\) starts from i and  
goes up to the last column m−1. During each iteration, the value from the array a at  
the i row and j column is stored in the d array at the same position. Additionally, the  
value is appended to the r string, separated by a space. After each column is processed  
within a row, a newline character is added to the r string to separate the rows. In the next  
stage, the code prints the contents of the r string. Thus, this code generates a new 2D  
array d containing a right triangular subset of the original array a, and r holds a string  
representation of this subset. 90 7 Matrix Operations  
let a = \[  
\[1, 2, 3, 4\],  
\[5, 6, 7, 8\],  
\[9, 0, 1, 2\],  
\[3, 4, 5, 6\]  
\];  
let d = \[\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
Output\:  
1  
6 2  
1 7 3  
6 2 8 4  
/\*  
1 2 3 4  
- 6 7 8  
- - 1 2  
- - - 6  
\*/  
for\(let i=0; i\<n; i++\) \{  
d\[i\] = \[\];  
for\(let j=0; j\<i+1; j++\) \{  
d\[i\]\[j\] = a\[i-j\]\[i\];  
r += d\[i\]\[j\] + ' ';  
\}  
r += '\\n';  
\}  
print\(r\);  
In this code example all variables are declared just as in the previous example. The  
code proceeds to loop through the rows of the array using a for-loop, just as done pre-  
viously. However, the key difference is in how the values are obtained. In this case, the  
values from the array a are taken from different positions. Specifically, the value from a  
at the row i−j and column i is stored in the d array at the same position. The rest of the  
code is similar to the previous example. The values are appended to the r string with a  
space between them, and a newline character is added after each row is processed. Just  
like the previous example, the code prints the contents of the r string using the print func-  
tion. As perhaps it can be observed, this code generates a new 2D array d that contains a  
triangular subset of the original array a, but this time the values are selected differently,  
resulting in a different subset, stored in variable r. 7 Matrix Operations 91  
let a = \[  
\[1, 2, 3, 4\],  
\[5, 6, 7, 8\],  
\[9, 0, 1, 2\],  
\[3, 4, 5, 6\]  
\];  
let d = \[\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(let i=0; i\<n; i++\) \{  
d\[i\] = \[\];  
for\(let j=0; j\<i+1; j++\) \{  
d\[i\]\[j\] = a\[j\]\[i\];  
r += d\[i\]\[j\] + ' ';  
\}  
r += '\\n';  
Output\:  
1  
2 6  
3 7 1  
4 8 2 6  
/\*  
1 2 3 4  
- 6 7 8  
- - 1 2  
- - - 6  
\*/  
\}  
print\(r\);  
This JavaScript code is similar to the previous one but with a different purpose. It  
starts by defining a 2D array a that contains a grid of numbers. Then, it initializes an  
empty array d and retrieves the number of rows in n and the number of columns in m  
from the array a. Variable r is also declared and initialized as an empty string. The code  
proceeds to loop through the rows of the array a using a for-loop with the index variable  
i. Within this loop, there is another nested loop that iterates through the columns with  
the index variable j. During each iteration, the value from the array a at the j row and  
i column \(note the reversed indices compared to the previous code\) is stored in array d  
at the same position. Additionally, the value is appended to the r string, separated by a  
space. After each row of d is processed, a newline character is appended to the r string to  
separate the rows. Just like in the previous code, the print function is used to display the  
contents of the r string. In conclusion, this code generates a new 2D array d that contains  
a transposed version of the original array a, and r holds a string representation of this  
transposed array. 92 7 Matrix Operations  
let a = \[  
\[1, 2, 3, 4\],  
\[5, 6, 7, 8\],  
\[9, 0, 1, 2\],  
\[3, 4, 5, 6\]  
\];  
let d = \[\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(let i=0; i\<n; i++\) \{  
d\[i\] = \[\];  
for\(let j=0; j\<i+1; j++\) \{  
d\[i\]\[j\] = a\[j\]\[i-j\];  
r += d\[i\]\[j\] + ' ';  
\}  
r += '\\n';  
Output\:  
1  
2 5  
3 6 9  
4 7 0 3  
/\*  
1 2 3 4  
5 6 7 -  
9 0 - -  
3 - - -  
\*/  
\}  
print\(r\);  
This code generates a new 2D array d that contains a transformed subset of the original  
a array, and r holds a string representation of this transformed subset. It operates on a 2D  
array a and performs a different transformation compared to the previous code. The key  
difference here is that the value from a is not extracted directly based on row and column  
indices as in the previous code. Instead, it uses a\[ j\]\[i−j\] to obtain values from a by a  
different pattern. For each iteration, the value from a obtained using a\[ j\]\[i−j\] is stored  
in the d array at the same position \(d\[i\]\[ j\]\), and this value is appended to the r string,  
separated by a space. A newline character is also appended to r after each row of d is  
processed. 7 Matrix Operations 93  
let a = \[  
\[1, 2, 3, 4\],  
\[5, 6, 7, 8\],  
\[9, 0, 1, 2\],  
\[3, 4, 5, 6\]  
\];  
let d = \[\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(let i=0; i\<n; i++\) \{  
d\[i\] = \[\];  
for\(let j=0; j\<i+1; j++\) \{  
d\[i\]\[j\] = a\[i-j\]\[n-1-j\];  
r += d\[i\]\[j\] + ' ';  
\}  
r += '\\n';  
Output\:  
4  
8 3  
2 7 2  
6 1 6 1  
/\*  
1 2 3 4  
- 6 7 8  
- - 1 2  
- - - 6  
\*/  
\}  
print\(r\);  
Here, the example generates a new matrix d that contains a triangular subset of the  
original array a, following a different pattern compared to the previous code. The code  
initializes an empty matrix d and extracts the dimensions of the matrix a, storing the  
number of rows and columns in n and m, respectively. An empty string r acting as an  
accumulator is declared and initialized. The code then enters a loop that iterates through  
the rows of array a using a for-loop with the index variable i. Within this loop, there is  
another nested loop with the index variable j that iterates through the columns. During  
each iteration, the code accesses elements from array a in a pattern where the row index  
is based on i and j, and the column index is derived from n and j. The value from array a  
at this calculated position is then stored in array d at the corresponding i and j position.  
The value is also appended to the content of the r variable with a space separator. Once  
the processing of each row of d is made, a newline character is added to the r string to  
separate the rows. 94 7 Matrix Operations  
let a = \[  
\[1, 2, 3, 4\],  
\[5, 6, 7, 8\],  
\[9, 0, 1, 2\],  
\[3, 4, 5, 6\]  
\];  
let d = \[\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(let i=0; i\<n; i++\) \{  
d\[i\] = \[\];  
for\(let j=0; j\<i+1; j++\) \{  
d\[i\]\[j\] = a\[i\]\[m-j-1\];  
r += d\[i\]\[j\] + ' ';  
\}  
r += '\\n';  
Output\:  
4  
8 7  
2 1 0  
6 5 4 3  
/\*  
- - - 4  
- - 7 8  
- 0 1 2  
3 4 5 6  
\*/  
\}  
print\(r\);  
This code generates a new 2D array d that contains a triangular subset of the original  
array a with the elements reversed within each row. The JavaScript example from above  
is similar to the previous one, but with a slight modification in the way it populates the  
array d from array a. The code then enters a nested loop structure using a for-loop to  
iterate through the rows and columns. During each iteration, the value from the array a  
at the i row and m−j−1 column is stored in array d at the same position. The m−j−1  
index is used to select elements in reverse order within each row of array a, effectively  
reversing the order of elements in each row. 7 Matrix Operations 95  
//flip vertical  
let a = \[  
\[1, 2, 3, 4\],  
\[5, 6, 7, 8\],  
\[9, 0, 1, 2\],  
\[3, 4, 5, 6\]  
\];  
let d = \[\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(let i=0; i\<n; i++\) \{  
d\[i\] = \[\];  
for\(let j=0; j\<m; j++\) \{  
d\[i\]\[j\] = a\[n-i-1\]\[j\];  
r += d\[i\]\[j\] + ' ';  
\}  
r += '\\n';  
Output\:  
3 4 5 6  
9 0 1 2  
5 6 7 8  
1 2 3 4  
\}  
print\(r\);  
The above code flips the original array a vertically to create a new 2D array d, and r  
holds a string representation of this flipped array. The implementation, like before, begins  
with a 2D array a containing a grid of numbers. It then initializes an empty array d and  
determines the dimensions of the array a. The number of rows is stored in n, and the  
number of columns is stored in m. The code proceeds to loop through the rows of array a  
using a for-loop, with the index variable i. Within this loop, there is another nested loop  
that iterates through the columns using the index variable j. During each iteration, the  
code assigns a value from array a to array d, effectively flipping the rows vertically. It  
takes the i-th row from a in reverse order \(n−i−1\) and assigns it to the i-th row of d.  
Additionally, the value is appended to the r string, separated by a space. After processing  
each row of d, a newline character is appended to the r string to separate the rows. The  
code then shows the contents of the r. 96 7 Matrix Operations  
//flip horisontal  
let a = \[  
\[1, 2, 3, 4\],  
\[5, 6, 7, 8\],  
\[9, 0, 1, 2\],  
\[3, 4, 5, 6\]  
\];  
let d = \[\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(let i=0; i\<n; i++\) \{  
d\[i\] = \[\];  
for\(let j=0; j\<m; j++\) \{  
d\[i\]\[j\] = a\[i\]\[m-j-1\];  
r += d\[i\]\[j\] + ' ';  
\}  
r += '\\n';  
Output\:  
4 3 2 1  
8 7 6 5  
2 1 0 9  
6 5 4 3  
\}  
print\(r\);  
This code flips an array a horizontally and stores the flipped version in the array d,  
with r containing a string representation of this flipped array. The code starts with the  
definition of a 2D array a, which contains a grid of numbers. It initializes an empty  
array d and extracts the number of rows \(n\) and columns \(m\) of the array a. The code  
then proceeds to iterate through the rows of the array a using a for-loop with the index  
variable i. Within this loop, there is another nested loop that iterates through the columns  
using the index variable j. During each iteration, the value from the a array at the i row  
and m−j−1 column is stored in the d array at the same position. This effectively flips  
the columns of array a horizontally. Additionally, the value is appended to the r string,  
separated by a space. After processing each row of d, a newline character is appended to  
the r string to separate the rows. The content of the variable is then printed in the output. 7 Matrix Operations 97  
let a = \[  
\[2, 4, 6\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
let b = \[  
\[0, 0, 1\],  
\[1, 1, 0\],  
\[0, 0, 1\]  
\];  
let n = a.length;  
let m = a\[0\].length;  
let r = 0;  
for\(var i=0; i\<n; i++\) \{  
for\(var j=0; j\<m; j++\) \{  
if\(b\[i\]\[j\]==1\)\{r += a\[i\]\[j\];\}  
\}  
Output\:  
18  
\}  
print\(r\);  
This source code example calculates the sum of the values in matrix a where the  
corresponding elements in the b matrix are equal to 1 and stores the result in the r  
variable. Above, the code defines two 2D arrays, a and b, which represent matrices of  
numbers. It then calculates the dimensions of the array a, storing the number of rows in  
n and the number of columns in m. A variable r is declared and initialized to zero. The  
code proceeds to loop through the rows of the array a using a for-loop with the index  
variable i. Inside this loop, there is a nested loop that iterates through the columns using  
the index variable j. During each iteration, the code checks if the value of b at the i row  
and j column is equal to 1. If it is, the corresponding value from the array a at the same  
position is added to the r variable. Thus, the code prints the value of r using the print  
function. 98 7 Matrix Operations  
var a = \[  
\[2, 4, 6\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
var b = \[  
\[2, 4, 6\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
var c = \[\];  
var r =  
"";  
for\(var i=0; i\<a.length; i++\) \{  
r += "\\n";  
c\[i\] = \[\];  
for\(var j=0; j\<a\[i\].length; j++\) \{  
c\[i\]\[j\] = a\[i\]\[j\] + b\[i\]\[j\];  
//c\[i\]\[j\] = a\[i\]\[j\] - b\[i\]\[j\];  
r += c\[i\]\[j\] + " ";  
Output\:  
4 8 12  
6 10 12  
6 10 8  
/\* for substraction\:  
0 0 0  
0 0 0  
0 0 0  
\*/  
\}  
\}  
print\(r\);  
Here, the code begins by defining two 2D arrays, a and b, each containing a grid of  
numbers. It then initializes an empty array c and an empty string r. The code uses a  
nested loop to iterate through the rows and columns of a and b. The outer loop iterates  
through the rows of a and b using the index variable i. Within this loop, the code appends  
a newline character to the r string to separate rows and initializes an empty sub-array in c  
at index i. The inner loop iterates through the columns of a and b using the index variable  
j. In each iteration, the code calculates the sum of the corresponding elements in a and b  
and stores the result in the c array at the same position. The sum is also appended to the  
r string, separated by a space. The code then prints the contents of the r string. Thus, this  
code calculates the element-wise sum of the a and b arrays and stores the result in the c  
array. The r string contains a formatted representation of the resulting array. 7 Matrix Operations 99  
var a = \[  
Output\:  
\[2, 4, 6\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
var b = \[  
\[2, 4, 6\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
var c = \[\];  
var r =  
"";  
for\(var i=0; i\<a.length; i++\) \{  
r += "\\n";  
c\[i\] = \[\];  
for\(var j=0; j\<a\[i\].length; j++\) \{  
c\[i\]\[j\] = 0;  
for\(var k=0; k\<a\[i\].length; k++\) \{  
c\[i\]\[j\] += a\[k\]\[j\] \* b\[i\]\[k\];  
\}  
r += c\[i\]\[j\] + " ";  
34 58 60  
39 67 72  
33 57 64  
\}  
\}  
print\(r\);  
In this code implementation, there are three 2D arrays\: a, b, and c. The code performs  
matrix multiplication between a and b and stores the result in c. A string variable r is  
initialized and will be used to store a string representation of the c matrix. The code uses  
nested for loops to iterate through the rows and columns of the a and b matrices. The  
outer loop, controlled by the variable i, iterates over the rows of a and b. For each row,  
a new row is created in the c matrix, and a newline character is added to the r string to  
separate the rows in the string representation. The innermost loop, controlled by variable  
k, is responsible for performing the matrix multiplication. It calculates the value of c\[i\]\[ j\]  
by summing up the products of elements from a and b matrices. The result is stored in  
the c matrix at the corresponding position, and the calculated value is appended to the r  
string followed by a space. Once all the iterations are completed, the r string contains a  
string representation of the resulting c matrix, which is essentially the product of matrices  
a and b. 100 7 Matrix Operations  
var a = \[  
\[2, 4, 6\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
var b = \[  
\[2, 4, 6\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
var i = j = 0;  
r =  
"";  
c = \[\];  
n1 = a.length;  
n2 = a\[0\].length;  
q = n1 \* n2;  
c\[0\] = \[\];  
for\(var v=0; v\<q; v++\) \{  
j = v % n2;  
if\(j==0 && v!=0 && i\<n1 && v!=q\)  
\{i+=1; c\[i\]=\[\]; r += "\\n";\}  
c\[i\]\[j\] = 0;  
for\(var k=0; k\<a\[i\].length; k++\) \{  
c\[i\]\[j\] += a\[k\]\[j\] \* b\[i\]\[k\];  
\}  
r += c\[i\]\[j\] + " ";  
Output\:  
34 58 60  
39 67 72  
33 57 64  
\}  
print\(r\);  
The example above performs matrix multiplication between two 2D arrays a and b. It  
calculates the product and stores the result in the c array. The r string is used to format  
and print the result. Two 2D arrays, a and b, are defined, each containing three rows and  
three columns. Index variables i and j are initialized to 0. The r string is initialized as  
an empty string, and an empty array c is defined to store the result. The dimensions of a  
are determined with n1 representing the number of rows and n2 representing the number  
of columns. A loop is used to iterate from 0 to the total number of elements in a \(n1 \*  
n2\), denoted as q. The loop variable is v. Within the loop, the code calculates the current  
column index j as v % n2. If j is 0, a new row is started by incrementing i, and a new  
empty sub-array is added to c. A newline character is also appended to the r string to 7 Matrix Operations 101  
separate rows. The code sets c\[i\]\[ j\] to 0 to prepare it for storing the matrix multiplication  
result. A nested loop iterates through the elements of a and calculates the dot product of  
the j-th column of a and the i-th row of b. The result is stored in c\[i\]\[ j\]. The calculated  
result, c\[i\]\[ j\], is appended to the r string followed by a space to separate values. After  
the loop completes, the r string contains the formatted result of the matrix multiplication.  
The code prints the contents of the r string in the console by using the print function.  
let a = \[  
\[2, 4, 6\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
let b = \[  
\[0, 1, 0\],  
\[1, 1, 1\],  
\[0, 1, 0\]  
\];  
let c = \[  
\[2, 4, 6\],  
\[3, 5, 6\],  
\[3, 5, 4\]  
\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(var i=0; i\<n; i++\) \{  
r += '\\n';  
for\(var j=0; j\<m; j++\) \{  
if\(b\[i\]\[j\]==1\)\{  
c\[i\]\[j\] = a\[i\]\[j\] \* c\[i\]\[j\];  
\}  
r += c\[i\]\[j\] + " ";  
Output\:  
2 16 6  
9 25 36  
3 25 4  
\}  
\}  
print\(r\); 102 7 Matrix Operations  
This code performs element-wise multiplication on the c array using values from the  
array a based on the b array values, and it generates a string r containing the updated c  
array with spaces and newlines to format the output. Initially, three 2D arrays a, b, and  
c are defined. The a and b arrays contain numeric values, while the c array is initially  
identical to the a array. The code initializes variables n and m with the number of rows and  
columns in the array a. A string variable r is also initialized as an empty string. The code  
then enters a nested loop structure, iterating over the rows \(index i\) and columns \(index j\)  
of the a and b arrays. Inside the loop, it checks if the value of b at the current position \(i,  
j\) is equal to 1. If it is, it multiplies the corresponding value in the c array by the value in  
the array a at the same position. Regardless of whether the multiplication occurs or not,  
the value from the c array at the current position is appended to the r string, separated by  
a space. After all columns in a row are processed, a newline character is added to the r  
string to separate the rows. Next, the code prints the contents of the r string.  
// perform different operations between the values of  
the homologous elements of two arrays based on a  
map/model \(third array\)  
let a = \[  
\[2, 2, 2, 2, 2\],  
\[2, 2, 2, 2, 2\],  
\[2, 2, 2, 2, 2\],  
\[2, 2, 2, 2, 2\],  
\[2, 2, 2, 2, 2\]  
\];  
let b = \[  
\[1, 1, 0, 0, 0\],  
\[3, 1, 0, 0, 1\],  
\[1, 3, 0, 1, 1\],  
\[0, 0, 0, 7, 0\],  
\[3, 0, 4, 0, 9\]  
\];  
let c = \[  
\[3, 3, 3, 3, 3\],  
\[3, 3, 3, 3, 3\],  
\[3, 3, 3, 3, 3\],  
\[3, 3, 3, 3, 3\],  
\[3, 3, 3, 3, 1\]  
\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
Output\:  
5 5 6 6 6  
1 5 6 6 5  
5 1 6 5 5  
6 6 6 \# 6  
1 6 2 6 2 7 Matrix Operations 103  
for\(let i=0; i\<n; i++\) \{  
r += '\\n';  
for\(let j=0; j\<m; j++\) \{  
if\(b\[i\]\[j\]==0\)\{c\[i\]\[j\] = a\[i\]\[j\] \* c\[i\]\[j\];\}  
if\(b\[i\]\[j\]==1\)\{c\[i\]\[j\] = a\[i\]\[j\] + c\[i\]\[j\];\}  
if\(b\[i\]\[j\]==2\)\{c\[i\]\[j\] = a\[i\]\[j\] - c\[i\]\[j\];\}  
if\(b\[i\]\[j\]==3\)\{c\[i\]\[j\] = c\[i\]\[j\] - a\[i\]\[j\];\}  
if\(b\[i\]\[j\]==4\)\{c\[i\]\[j\] = a\[i\]\[j\] % c\[i\]\[j\];\}  
if\(b\[i\]\[j\]==5\)\{c\[i\]\[j\] = a\[i\]\[j\] / c\[i\]\[j\];\}  
if\(b\[i\]\[j\]==6\)\{c\[i\]\[j\] = a\[i\]\[j\];\}  
if\(b\[i\]\[j\]==7\)\{c\[i\]\[j\] = '\#';\}  
if\(b\[i\]\[j\]==8\)\{/\* do stuff \*/\}  
if\(b\[i\]\[j\]==9\)\{  
if\(c\[i\]\[j\]\<=a\[i\]\[j\]\) \{c\[i\]\[j\]=a\[i\]\[j\];\}  
\}  
r += c\[i\]\[j\] + " ";  
\}  
\}  
print\(r\);  
This code operates on two matrices a and c based on a specified map/pattern found in  
matrix b, and then stores the results in matrix c. It then prints the resulting c matrix as a  
string representation. The code begins by defining three matrices a, b, and c. Variables a  
and b contain numeric values, while c contains initial values, which are all 3 s except for  
the bottom-right element, which is 1. The code determines the dimensions of the matrices,  
with n representing the number of rows and m representing the number of columns. Like  
many times in the examples from above, it also initializes an empty string r for storing  
the final output. The code enters a nested loop with two for loops, one for iterating over  
rows \(indexed by i\) and the other for columns \(indexed by j\). Within the nested loop, it  
checks the value of b\[i\]\[ j\] to determine which operation to perform on the corresponding  
elements of a and c matrices. The possible operations are\: \(1\) If b\[i\]\[ j\] is 0, it multiplies  
the elements of a and c. \(2\) If b\[i\]\[ j\] is 1, it adds the elements of a and c. \(3\) If b\[i\]\[ j\]  
is 2, it subtracts the elements of c from a. \(4\) If b\[i\]\[ j\] is 3, it subtracts the elements of  
a from c. \(5\) If b\[i\]\[ j\] is 4, it takes the modulus of the elements of a and c. \(6\) If b\[i\]\[ j\]  
is 5, it performs division on the elements of a and c. \(7\) If b\[i\]\[ j\] is 6, it sets the element  
of c to the corresponding element of a. \(8\) If b\[i\]\[ j\] is 7, it sets the element of c to the  
character ‘\#’. \(9\) If b\[i\]\[ j\] is 9, it checks if the element of c is less than or equal to the  
element of a and, if so, sets the element of c to the element of a. After each operation, the  
resulting element in the c matrix is appended to the r string with a space. Also, a newline  
character is added after each row is processed. At the end, the code prints the content of  
variable r. 104 7 Matrix Operations  
let a = \[  
\[2, 2, 2, 2, 2\],  
\[2, 2, 2, 2, 2\],  
\[2, 2, 2, 2, 2\],  
\[2, 2, 2, 2, 2\],  
\[2, 2, 2, 2, 2\]  
\];  
let b = \[  
\[1, 1, 0, 0, 0\],  
\[3, 1, 0, 0, 1\],  
\[1, 3, 0, 1, 1\],  
\[0, 0, 0, 7, 0\],  
\[3, 0, 4, 0, 9\]  
\];  
let c = \[  
\[3, 3, 3, 3, 3\],  
\[3, 3, 3, 3, 3\],  
\[3, 3, 3, 3, 3\],  
\[3, 3, 3, 3, 3\],  
\[3, 3, 3, 3, 1\]  
\];  
let n = a.length;  
let m = a\[0\].length;  
for\(let i=0; i\<n; i++\) \{  
for\(let j=0; j\<m; j++\) \{  
if\(b\[i\]\[j\]==0\)\{c\[i\]\[j\] = a\[i\]\[j\] \* c\[i\]\[j\];\}  
if\(b\[i\]\[j\]==1\)\{c\[i\]\[j\] = a\[i\]\[j\] + c\[i\]\[j\];\}  
if\(b\[i\]\[j\]==2\)\{c\[i\]\[j\] = a\[i\]\[j\] - c\[i\]\[j\];\}  
if\(b\[i\]\[j\]==3\)\{c\[i\]\[j\] = c\[i\]\[j\] - a\[i\]\[j\];\}  
if\(b\[i\]\[j\]==4\)\{c\[i\]\[j\] = a\[i\]\[j\] % c\[i\]\[j\];\}  
if\(b\[i\]\[j\]==5\)\{c\[i\]\[j\] = a\[i\]\[j\] / c\[i\]\[j\];\}  
if\(b\[i\]\[j\]==6\)\{c\[i\]\[j\] = a\[i\]\[j\];\}  
if\(b\[i\]\[j\]==7\)\{c\[i\]\[j\] = '\#';\}  
if\(b\[i\]\[j\]==8\)\{/\* do stuff \*/\}  
if\(b\[i\]\[j\]==9\)\{  
if\(c\[i\]\[j\]\<=a\[i\]\[j\]\) \{c\[i\]\[j\]=a\[i\]\[j\];\}  
\}  
Output\:  
5 5 6 6 6  
1 5 6 6 5  
5 1 6 5 5  
6 6 6 \# 6  
1 6 2 6 2  
\}  
\}  
print\(SMC\(c\)\);  
function SMC\(m\) \{  
var r = "\\n";  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r += " " + m\[i\]\[j\] + " ";  
\}  
r += "\\n";  
\}  
return r;  
\} 7 Matrix Operations 105  
This code example is basically the same as the previous one. It involves operations  
between the values of two matrices a and c based on a pattern specified by the b matrix.  
However, the result is stored in the c matrix, and the SMC function is defined to convert  
and display the c matrix. That is, unlike the previous case when the values from the  
elements of the c matrix were formatted as strings and then accumulated in the r variable.  
To better understand functions please read the next chapter.  
var A = \["a", "b", "c"\];  
var B = \["d", "e", "f"\];  
var C = \["g", "h", "i"\];  
var D = \[A, B, C\];  
var E = \[B, C, A\];  
var F = \[C, B, A\];  
var G = \[D, E, F\];  
print \(A\[0\]\);  
print \(D\[0\]\);  
print \(G\[0\]\);  
Output\:  
a  
a,b,c  
a,b,c,d,e,f,g,h,i  
This code involves the creation of several arrays and the use of nested arrays. Three  
arrays A, B, and C are declared, each containing three string values. Then, three arrays  
D, E, and F are defined. These arrays are comprised of references to the previous arrays  
A, B, and C. Thus, D contains \[A, B, C\], E contains \[B, C, A\], and F contains \[C, B, A\].  
Next, an array G is created, which contains references to the arrays D, E, and F. Then,  
the code prints elements from these arrays using the print function\: \(1\) print\(A\[0\]\) will  
print the first element of array A, which is “a”. \(2\) print\(D\[0\]\) will print the first element  
of array D, which is the reference to array A. \(3\) print\(G\[0\]\) will print the first element  
of array G, which is the reference to array D. Functions  
# 8  
Functions are a fundamental concept in computer programming and serve as a build-  
ing block for organizing and reusing code \[1\]. At their core, functions are self-contained  
blocks of code that can perform specific tasks or operations when called \[1\]. They encap-  
sulate a set of instructions, and one can think of them as named boxes that take some  
input, process it, and produce an output. Functions are a powerful tool for breaking down  
complex problems into smaller, manageable pieces, making code more modular, read-  
able, and maintainable. In most programming languages, including JavaScript, Python,  
C++, and many others, functions are a vital part of the syntax of the language and are  
used extensively to structure and control the flow of a program. They allow developers to  
write code that can be reused in various parts of a program, improving code organization  
and reducing redundancy. Functions come in various flavors, including simple functions  
that perform a single task, more complex functions that take multiple parameters, and  
even functions that return other functions. They play a crucial role in making code more  
efficient, modular, and easier to understand. The following examples are able to show  
various functions and their applications in more detail.  
8.1 Built-in Functions/Methods  
When it comes to JavaScript programming, a robust collection of built-in functions and  
methods is at the readers disposal, allowing the reader to perform a wide array of  
tasks efficiently. In this set of examples \(Built-In Functions/Methods\), we will explore  
the practical application of these pre-defined functionalities to handle various common  
programming tasks \[1\]. These functions and methods serve as the building blocks that  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_8  
107 108 8 Functions  
enable developers to manipulate data, interact with the DOM \(Document Object Model\),  
work with strings, arrays, and more, ultimately empowering them to create dynamic and  
feature-rich web applications. Let us probe into some illustrative examples to showcase  
the versatility and power of JavaScript built-in functions and methods.  
8.1.1  
Ex. \(125\) – Built-in Sin, Exp  
a = 3.1415;  
b = Math.sin\(a\);  
c = Math.exp\(Math.sin\(a\)\);  
print\(b\);  
print\(c\);  
Output\:  
0.00009265358966049026  
1.000092657882137  
This example calculates the sine of the value approximately equal to pi and then cal-  
culates the exponential value of that sine. Several operations are being performed. First,  
a variable a is assigned the value 3.1415, which is an approximation of the mathematical  
constant π \(pi\). This value is then used in subsequent calculations. Next, a variable b  
is assigned the result of applying the Math.sin\(\) function to a. The Math.sin\(\) function  
calculates the sine of an angle in radians, thus, b will hold the sine of the angle approxi-  
mately equal to 3.1415. Following that, a variable c is assigned the result of applying the  
Math.exp\(\) function to the sine of a. The Math.exp\(\) function calculates the exponential  
value of its argument, and in this case, it is applied to the sine of a. Therefore, c will con-  
tain the exponential value of the sine of the angle approximately equal to 3.1415. Next,  
the code shows the values of b and c.  
8.1.2  
Ex. \(126\) – Max between two integer variables  
var maxA = 6;  
Output\:  
var maxB = 10;  
var max = Math.max\(maxA, maxB\);  
10  
print\(max\);  
This code example sets two variables, maxA and maxB, assigns them specific values,  
finds the maximum value between them, and shows the result to the console. Initially,  
the code begins by declaring two variables, maxA and maxB, and assigning them with  
numeric values namely 6 and 10, respectively. Next, the code calculates the maximum  
value between maxA and maxB using the Math.max\(\) function. The Math.max\(\) function  
is a built-in JavaScript function that takes multiple arguments and returns the largest value  
among them. In this specific case, it is used to find the maximum value between maxA  
and maxB. The result is then stored in a variable named max. Next, the content of variable  
max is then shown in the console for user inspection. 8.1 Built-in Functions/Methods 109  
8.1.3  
Ex. \(127\) – Max between two specific elements of an array  
var a = \[6, 7, 1, 9\];  
Output\:  
var max = Math.max\(a\[3\], a\[1\]\);  
9  
print\(max\);  
The snippet begins by declaring an array a containing four numerical elements\: 6, 7,  
1, and 9. This array is defined using square brackets and elements separated by commas.  
Next, the code declares a variable max using the var keyword. It uses the Math.max  
function to find the maximum value between two elements of the array a. Specifically, it  
compares a\[3\] \(which is the fourth element in the array, with an index of 3, holding the  
value 9\) and a\[1\] \(the second element in the array, with an index of 1, holding the value  
7\). The Math.max function returns the greater of the two values, in this case, 9. Therefore,  
this example creates an array and finds the maximum value between two elements of the  
array, then it shows the result in the console.  
8.1.4  
Ex. \(128\) – Max over the values from an array  
var a = \[6, 7, 1, 9\];  
Output\:  
var b = \[2, 5, 1, 1\];  
var maxA = Math.max.apply\(null, a\);  
9  
var maxB = Math.max.apply\(null, b\);  
5  
print\(maxA\);  
print\(maxB\);  
This code begins by defining two arrays, a and b, each containing a set of numerical  
values. Variable a holds the values 6, 7, 1, and 9, while b contains the values 2, 5, 1,  
and 1. The subsequent lines of code calculate the maximum value within each of these  
arrays. The Math.max.apply\(null, \(a\) function determines the maximum value in array  
a, and this result is stored in the variable maxA. Similarly, the Math.max.apply\(null, \(b\)  
function finds the maximum value in array b and assigns it to the maxB variable. Next,  
the code prints the values of maxA and maxB to the output.  
8.1.5  
Ex. \(129\) – Max over two array variables  
var a = \[6, 7, 1, 9\];  
Output\:  
var b = \[2, 5, 1, 1\];  
var maxA = Math.max.apply\(null, a\);  
9  
var maxB = Math.max.apply\(null, b\);  
var max = Math.max\(maxA, maxB\);  
print\(max\); 110 8 Functions  
In this snippet, two arrays, a and b, are defined. The array a contains the elements 6,  
7, 1, and 9, while the array b holds the values 2, 5, 1, and 1. Next, the Math.max.apply  
method is used to find the maximum value within each array. This method is called on the  
Math.max function with the apply method used to pass the array as arguments. Essentially,  
it is a way to find the maximum value within an array, which is stored in the variables  
maxA and maxB. Then, another variable named max is defined and assigned the result of  
the Math.max function, which takes maxA and maxB as its arguments. This will give us  
the maximum value among both arrays.  
8.1.6  
Ex. \(130\) – Random integers from 0 to 99 in an array  
let a = \[\];  
Output\:  
let n = 10;  
41,72,71,20,2,  
for\(let k=0; k\<n; k++\)\{  
8,40,0,99,38  
a\[k\] = Math.floor\(Math.random\(\) \* 100\);  
\}  
print\(a\);  
This code generates an array a with 10 random integers between 0 and 99, and prints  
it to the console. The example initializes an empty array called a and a variable n with  
a value of 10. It then enters a for-loop that will execute 10 times, starting with k as  
0 and incrementing it in each iteration until it reaches 9 \(since n is 10\). Within the  
for-loop, the code generates a random number between 0 and 99 \(inclusive\) using the  
Math.random\(\) function, multiplies it by 100, and then rounds it down to the nearest  
integer using Math.floor\(\). The resulting random integer is assigned to the k-th element  
of the array a. In other words, it populates the array a with 10 random integers. Once the  
for-loop completes, the code shows the content of array a. 8.1 Built-in Functions/Methods 111  
8.1.7  
Ex. \(131\) – Insert random values in the elements of a matrix.  
let p = \[\];  
Output\:  
let n = 3;  
let m = 3;  
3 1 0 7  
let r =  
'';  
9 3 0 2  
4 3 4 2  
for\(let i=0; i\<=n; i++\)\{  
5 7 8 3  
p\[i\]=\[\];  
for\(let j=0; j\<=m; j++\)\{  
p\[i\]\[j\] = Math.floor\(Math.random\(\) \* 10\);  
r += p\[i\]\[j\] + ' ';  
\}  
r += '\\n';  
\}  
print\(r\);  
This above code generates a 3 × 3 matrix of random numbers, storing it in the p array,  
and builds a string representation of the matrix in the variable r, where each row is  
separated by a newline character. The example initializes several variables and uses nested  
loops to generate a matrix of random numbers. The code begins by declaring a few  
variables\: \(1\) An empty array p, which will be used to store a matrix of random numbers.  
\(2\) A variable n set to the value 3, representing the number of rows in the matrix. \(3\)  
Another variable m that is set to 3, indicating the number of columns in the matrix. \(4\) An  
empty string r that will be used to accumulate the matrix elements as strings, with spaces  
and line breaks. The code then enters a nested loop structure to fill the p array with  
random numbers and build a string representation of the matrix. It uses two for loops.  
The outer loop, controlled by the variable i, iterates from 0 to n \(inclusive\), creating an  
array p\[i\] for each row. Inside the outer loop, there is an inner loop controlled by the  
variable j, which iterates from 0 to m \(inclusive\). This loop populates each row \(p\[i\]\)  
with random numbers using Math.floor\(Math.random\(\) \* 10\) and stores them in the 2D  
array p. The code appends each of these random numbers to the string r, followed by a  
space \(‘ ‘\), effectively building a string representation of the matrix row. Once the inner  
loop completes for each row, the code appends a newline character \(‘\\n’\) to the string r,  
creating a new line in the matrix. Next, the content of variable r is shown in to output.  
8.1.8  
Ex. \(132\) – Split string to integers by using a delimiter symbol  
var b = \[\];  
Output\:  
var a ='2\#5\#7\#1\#1\#2';  
b = a.split\('\#'\);  
b = 2,5,7,1,1,2  
print\("b = " + b\); 112 8 Functions  
In this snippet, there are two main variables being used. The first variable, b, is declared  
as an empty array using “var b = \[\]”. The second variable is a, that is declared and  
assigned a string value, namely “2\#5\#7\#1\#1\#2”, which is a sequence of numbers sepa-  
rated by hash ‘\#’ symbols. The crucial operation in this code is “b = a.split\(‘\#’\)”. Here,  
the string a is split into an array of substrings using the ‘\#’ character as the delimiter.  
The resulting substrings are stored in the b array. As a result, variable b becomes an array  
with the following elements\: \[‘2’, ‘5’, ‘7’, ‘1’, ‘1’, ‘2’\]. Lastly, the source code shows the  
contents of array b to the console for user inspection.  
8.1.9  
Ex. \(133\) – Split string to array by using the “|” symbol  
var n = \[\];  
Output\:  
var m = \[\];  
CCCCC  
var c = 'AAAAA|BBBBB|CCCCC';  
var n = c.split\('|'\);  
print\(n\[2\]\);  
Here, the source code example shows two arrays n and m that are declared using  
the “var” keyword. These arrays are initially empty, which means they do not contain  
any elements at the start. Next, a string variable c is defined and initialized with the  
value “AAAAA|BBBBB|CCCCC”. This string contains three segments separated by the  
“|” character. The split method is then applied to the string c using the “|” character as the  
delimiter. This method splits the string into substrings at each occurrence of the delimiter  
and stores them in the n array. Thus, after this line of code, the n array will contain three  
elements\: “AAAAA”,”BBBBB”, and “CCCCC”. Next, the code outputs the element at  
index 2 of the n array, which corresponds to the string “CCCCC”.  
Ex. \(134\) – Cascading built-in functions \(split, join, length\)8.1.10  
a = "----\#\#----------\#\#--------";  
Output\:  
q = "\#\#";  
a contains q  
b = a.length;  
c = a.split\(q\).join\(""\).length;  
if\(c \< b\)\{print\("a contains q"\);\}  
Here, we are working with two strings, a and q. The string a is initialized with the  
value “––\#\#–––––\#\#––––”, while q is set to “\#\#”. Next, we calculate the length of the  
string a and store it in the variable b. In this case, b will be 24, which is the total number  
of characters in the string a. Then, a transformation is performed on the string a. The  
split method is used to break the string into an array based on the substring defined in 8.2 Making of Functions 113  
the variable q \(in this case, “\#\#”\), effectively removing all occurrences of “\#\#”. After  
that, the join method is used to concatenate the array elements back into a string. The  
resulting string is stored in the variable c. Thus, c represents the length of the string a after  
removing all instances of “\#\#”. Once these calculations are made, we have two variables,  
namely\: b, which is the original length of a, and c, which is the modified length of a after  
removing “\#\#”. The code then proceeds to check if c is less than b. If this condition is  
met, it means that the length of a was reduced by removing “\#\#”, indicating that “\#\#”  
was indeed present in a. In this case, it will print the message “a contains q.” Therefore,  
this code is essentially checking whether the string a contains the substring “\#\#” and, if  
so, it outputs a message confirming the presence of “\#\#” within a.  
8.1.11  
Ex. \(135\) – Built-in sort function  
let b = \[3, 6, 2, 78, 99, 1, 4\];  
Output\:  
b.sort\(\);  
1,2,3,4,6,78,99  
print\(b\);  
This code snippet begins by declaring an array named b and populating it with a series  
of numerical values enclosed within square brackets. The array consists of the following  
elements\: 3, 6, 2, 78, 99, 1, and 4. Following the array initialization, the code proceeds  
to invoke the sort\(\) method on the array b. This method is used to arrange the elements  
within the array in ascending order, meaning the numbers will be sorted from the lowest  
value to the highest. Next, the content of b is printed.  
8.2 Making of Functions  
The introduction of the concept of user-defined functions is a fundamental aspect of  
programming and an essential skill for any developer. In this set of examples, we will  
explore the creation and use of functions in Java Script. Note that these native examples  
are functional in most programming languages once the syntax is adapted. Functions are  
reusable blocks of code that can be customized to perform specific tasks, making the  
code more organized, modular, and easier to maintain \[1\]. The definition of functions  
allows for logical encapsulation, improving code readability, and facilitating code reuse.  
Here, we explore a series of practical examples that showcase the power and versatility  
of user-defined functions. 114 8 Functions  
a = 10;  
Output\:  
b = compute\(a\);  
-89  
print\(b\);  
function compute\(x\)  
\{  
return x + x / x - x \* x;  
\}  
The code initializes a with the value 10, performs a series of mathematical opera-  
tions on a inside the compute function, and then it prints the result. The mathematical  
expression in the compute function\:  
x + x  
compute\(x\) =  
x − x × x  
The above expression in meant to showcase the order of operations in a more graphical  
manner. Note, however, that the expression could be simplified as\:  
compute\(x\) = 1 + x − x × x  
which is equivalent to\:  
compute\(x\) = 1 + x − x2  
Nevertheless, the above example begins by declaring a variable a and assigning it  
the value 10. It then proceeds to declare another variable b and assigns it the result of  
a function call, “compute\(a\)”. The compute function is defined in the code and takes  
a single parameter x. Inside the function, a mathematical operation is performed on x. It  
computes x + x/x−x \* x, which involves addition, division, subtraction, and multiplication  
operations. Next, the value of b is printed to the console.  
print\(mul\(2,5\)\);  
Output\:  
function mul\(a, b\) \{  
10  
return a \* b;  
\}  
Essentially, this example computes the product of a and b. It defines a simple function  
and then calls it. The code begins with a call to the print function with the argument  
mul\(2,5\). Next, the code defines a function named mul using the function keyword. This 8.2 Making of Functions 115  
mul function takes two parameters a and b, to showcase an example with more than one  
parameter. Inside the body of the function, it performs a simple arithmetic operation,  
namely the multiplication of a by b, and then returns the result.  
print\(gs\(100\)\);  
Output\:  
function gs\(n\)\{  
5050  
return n\*\(n+1\)/2;  
\}  
Here, we have a simple function called gs \(Gauss summation\) which takes a single  
argument, namely n. The purpose of this function is to calculate the sum of the first n  
natural numbers. The formula used to compute this sum is derived from a well-known  
arithmetic progression formula. The code returns the sum of the natural numbers from 1  
to n using the formula\:  
gs\(n\) =  
n × \(n − 1\)  
2  
To demonstrate how this function works, there is a call to gs\(100\), which passes the  
value 100 as an argument to the gs function. This function call calculates the sum of the  
first 100 natural numbers and then prints the result. Thus, if one were to execute this  
code, it would output the sum of natural numbers from 1 to 100, which is 5050, because  
gs\(100\) would return 100 \* \(100 + 1\)/2, which equals 5050.  
let d = main\_app\(66, 100\);  
Output\:  
print\(d\);  
166  
function main\_app\(x,y\)\{  
let cc = sebastian\(x,y\);  
return cc;  
\}  
function sebastian\(a,b\)\{  
let p = daniela\(a,b\);  
return p;  
\}  
function daniela\(a,b\)\{  
return a+b;  
\} 116 8 Functions  
This source code example creates a series of functions that pass arguments and return  
values to one another. The main app function is the entry point, and it ultimately calcu-  
lates the sum of the two initial values, 66 and 100, by passing them through the sebastian  
and daniela functions, and the result is stored in variable d. Next, the value stored in  
variable d is printed to the console for user inspection.  
let a = distribution\(3, 21\);  
Output\:  
print\(a\);  
-5  
function distribution\(start, stop\)\{  
-11  
-19  
let t =  
"";  
-29  
-41  
for \(let i = start; i \< stop; i++\) \{  
-55  
t += compute\(i\) + "\\n";  
-71  
\}  
-89  
-109  
return t;  
-131  
\}  
-155  
-181  
function compute\(x\)\{  
-209  
return x + x / x - x \* x;  
-239  
\}  
-271  
-305  
-341  
-379  
The above program calculates a distribution of values within a specified range and  
stores the result in a string variable. The distribution is obtained by applying the compute  
function to each value within the given range and concatenating the results with newline  
characters in between. For a short description, this code generates a string output repre-  
senting a distribution of values. It begins by declaring a variable a and assigns it the result  
of a function call to distribution \(3, 21\). Then, it proceeds to print the value of a using a 8.2 Making of Functions 117  
print function. The distribution function is the heart of the program. It takes two param-  
eters, start and stop, representing the range of values to consider. Inside the function, a  
variable t is initialized as an empty string. A for-loop is used to iterate over a range of  
values from start \(inclusive\) to stop \(exclusive\). During each iteration, the compute func-  
tion is called with the current value of i, and the result is concatenated to the string t with  
a newline character to separate each value. Next, the resulting string t is returned. Note  
that the compute function is a simple mathematical operation that takes a single parameter  
x, and it calculates a value based on the formula\: x + x/x−x \* x \(mentioned earlier in  
this subchapter\).  
a = 3;  
Output\:  
b = c\(c\(c\(c\(a\)\)\)\);  
b = -b;  
756029  
print\(b\);  
function c\(x\)  
\{return x + x / x - x \* x;\}  
In this snippet, we have a series of operations and a function defined. First, a variable  
a is assigned the value 3. Then, a variable b is assigned the result of calling the function  
c repeatedly with the argument a. The function c takes a single argument x and performs  
a series of mathematical operations on it, including addition, division, and multiplication.  
The final value of b is negated, making it negative. Next, the value of b is shown to the  
console. Note that repeated calling of a function with its own result is often referred to as  
“function composition” or “function chaining.” In our code, the function c is called multi-  
ple times with its own result, which effectively chains the function calls together. This can  
be a useful technique in some scenarios to apply a series of operations or transformations  
to a value in a concise and readable manner. 118 8 Functions  
const a = \[1, 2, 3, 4, 5\];  
Output\:  
let t = 0;  
let b = c1\(t, a\);  
41  
print\(b\);  
function c1\(t, a\)\{  
return 5 + c2\(t, a\);  
\}  
function c2\(t, a\)\{  
return c3\(t, a\) + 5;  
\}  
function c3\(t, a\)\{  
let s = 1;  
return s + c4\(t, a\);  
\}  
function c4\(t, a\)\{  
return c5\(t, a\) + c5\(t, a\);  
\}  
function c5\(t, a\)\{  
for \(let i = 0; i \< a.length; i++\)\{  
t += a\[i\];  
\}  
return t;  
\}  
In this code snippet, we have a series of functions and variable assignments that per-  
form calculations based on the input values. We have a constant array a containing the  
elements \[1, 2, 3, 4, 5\]. A variable t is initialized with the value 0. Then, a variable b is  
assigned the result of calling the function c1 with the arguments t and a. The function c1  
takes two arguments t and a and returns the result of calling c2 with the same arguments  
and adding 5 to it. The function c2 takes two arguments t and a and returns the result of  
calling c3 with the same arguments and adding 5 to it. The function c3 takes two argu-  
ments t and a. Inside this function, a local variable s is initialized with the value 1. The  
function then returns the result of calling c4 with the same arguments and adding s to it. 8.2 Making of Functions 119  
The function c4 takes two arguments t and a and returns the result of calling c5 twice  
with the same arguments and summing the results. The function c5 takes two arguments  
t and a. It then iterates through the elements of array a, adding each element to t. Then,  
it returns the modified value of t. The code concludes by printing the value of b to the  
console. The type of function calling demonstrated in the code is often referred to as  
“function composition” or “function chaining,” especially when functions are designed to  
be composed together in a sequence. In our code, c1 calls c2, which calls c3, which calls  
c4, and c4 calls c5. This creates a chain of function calls where each function in the chain  
relies on the results of the previous one to calculate its own result. This pattern is often  
used to break down complex operations into smaller, more manageable pieces.  
const a = 3.1415; // constant  
Output\:  
var b = 11; // global variable  
-109  
b = compute\(\);  
3.1415  
print\(b + "\\n" + a\);  
function compute\(\)\{  
let x = b;  
return x + x / x - x \* x;  
\}  
This code snippet demonstrates the use of constants, global variables, a function defini-  
tion, and function execution. It calculates a result based on the value of the global variable  
b and displays it along with the constant a. Two declarations are made\: A constant a with  
the value 3.1415 and a global variable b with the value 11. The global variable b is later  
updated with the result of calling the compute function. The compute function takes the  
current value of b, assigns it to a local variable x, and then performs a series of math-  
ematical operations on x, including addition, division, and multiplication. The result of  
these operations is then returned and assigned to b outside of the compute function. Then,  
the print function is used to display the value of b followed by a newline character \(“\\n”\)  
and the value of the constant a. 120 8 Functions  
a = 10;  
Output\:  
b = pure\(a\);  
-89 & 10  
print\(b + " & " + a\);  
-89 & 11  
-109 & 11  
c = inpure\(a\);  
print\(c + " & " + a\);  
d = inpure\(a\);  
print\(d + " & " + a\);  
function pure\(x\)\{  
return x + x / x - x \* x;  
\}  
function inpure\(x\)\{  
a = 11;  
return x + x / x - x \* x;  
\}  
The code illustrates the difference between “pure” and “impure” functions. “Pure”  
functions only depend on their input and do not modify any external state, while “impure”  
functions can modify external variables or have side effects. First, a variable a is assigned  
the value 10. Then, a variable b is assigned the result of calling the pure function with  
the argument a. The pure function takes a single argument x and performs a series of  
mathematical operations on it, including addition, division, and multiplication. After that,  
the value of b is printed along with the original value of a. Next, a variable c is assigned  
the result of calling the inpure function with the argument a. The inpure function also  
takes a single argument x but, in this case, it also modifies a global variable a by setting  
it to 11 before performing the same mathematical operations as the pure function. The  
value of c is printed along with the modified value of a. Next, a variable d is assigned the  
result of calling the inpure function with the argument a once more. Again, the inpure  
function modifies the global variable a by setting it to 11 and performs the mathematical  
operations. The value of d is printed along with the modified value of a. 8.3 Recursion 121  
8.2.10  
Ex. \(145\) – Procedures vs Functions  
a = 16;  
Output\:  
b = f\(a\); print\(b\);  
-239  
p\(\); print\(b\);  
-19  
function f\(x\)\{  
return x + x / x - x \* x;  
\}  
function p\(\)\{  
let x = a - 11;  
b = x + x / x - x \* x;  
\}  
In this code, a distinction between procedures and functions is shown. At the beginning  
of the code, a variable a is assigned the value 16. Then, a variable b is assigned the result  
of calling the function f with the argument a, and the value of b is printed to the output.  
The f function takes a single argument x and performs a series of mathematical opera-  
tions on it, including addition, division, and multiplication. It returns the result of these  
operations. Next, there is a procedure named p. Procedures are similar to functions, but  
they do not return a value explicitly. Inside the p procedure, a new variable x is declared  
and assigned the result of subtracting 11 from the value of a. Then, b is re-assigned the  
result of a series of mathematical operations on x, including addition, division, and mul-  
tiplication. Next, the value of b is printed to the output again, but this time within the p  
procedure. The key difference between functions and procedures is that functions return  
values, while procedures do not, and in this code, it is demonstrated how they can be used  
in different contexts.  
8.3 Recursion  
Function recursion is a powerful concept in the world of programming, including  
JavaScript. It allows a function to call itself in a repetitive and self-referential manner,  
solving complex problems by breaking them down into smaller, more manageable sub-  
problems. This technique is particularly useful when dealing with tasks that exhibit a  
recursive structure, such as traversing tree-like data structures, calculating factorials, and  
implementing various sorting algorithms \[1\]. Therefore, JavaScript provides a flexible  
environment for implementing recursive functions. Elegant and/or efficient recursive solu-  
tions can be created for various computational problems. Here, the principles of function  
recursion will be fully explored by fully understanding its benefits, and see how it works  
through practical examples. 122 8 Functions  
a = for\_loop\(0, 7, 0\);  
Output\:  
print\(a\);  
35  
// replacement for repeat loops  
function for\_loop\(a, b, r\)\{  
a++;  
// do stuff from  
r += 5;  
// to here  
if\(a\>=b\)\{  
return r;  
\} else \{  
return for\_loop\(a, b, r\);  
\}  
\}  
Here, we have a custom recursive function called for loop that serves as a replacement  
for traditional repeat loops. The variable a is assigned the result of calling the for loop  
function with the initial parameters 0 for a, 7 for b, and 0 for r. The function is intended  
to simulate the behavior of a repeat loop. Within the for loop function, variable a is  
incremented by 1 and variable r is increased by 5. A comment indicates where the actual  
processing or “do stuff” part would occur, which is not specified in this code. The function  
checks if a is greater than or equal to b. If this condition is met, it returns the value of r.  
Otherwise, it calls itself recursively with the updated values of a, b, and r. This recursive  
process continues until a is greater than or equal to b. At the end, the result of the for  
loop function is stored in the variable a, and its value is printed to the console or the  
output destination.  
a = x\("\#",  
""  
, 10\);  
Output\:  
print\("Repeat\:\\n\[" + a + "\]"\);  
Repeat\:  
// repeat string n times  
\[\#\#\#\#\#\#\#\#\#\#\]  
function x\(c, s, n\)\{  
s += c;  
if\(s.length\>=n\)\{  
return s;  
\} else \{  
return x\(c, s, n\);  
\}  
\}  
114 8.3 Recursion 123  
This code effectively demonstrates string repetition through recursion. First, the vari-  
able a is assigned the result of calling the function x with the arguments \(“\#”, “”, 10\).  
The function x is designed to repeat the character c \(in this case, “\#”\) n times and initially  
starts with an empty string s. It appends the character to the string s in each recursive call  
until the length of s is greater than or equal to n. After that, there is a print statement  
that displays the value of a wrapped inside square brackets preceded by “Repeat\:\\n.” The  
x function essentially implements a form of recursion to repeat a character a specified  
number of times. It appends the character to the string and recursively calls itself until  
the desired length is reached.  
b = sum\(23\);  
Output\:  
print\("Sum\:\[" + b + "\]"\);  
Sum\:\[276\]  
// sum from 0 to n  
function sum\(n\)\{  
if \(n \<= 1\) \{return n;\}  
return n + sum\(n - 1\);  
\}  
This code calculates the sum of numbers from 0 to 23 using a recursive function  
and then displays the result as part of a message. It starts by defining a variable b and  
assigning it the result of calling the sum function with the argument 23. The sum function  
calculates the sum of numbers from 0 to n using recursion. Inside the sum function, there  
is a base case check. If n is less than or equal to 1, it returns n, which is the base case  
of the recursion. Otherwise, it returns n added to the result of sum\(n−1\), which is the  
recursive call. After calculating the sum, we use the print function to display a message  
that includes the computed sum. The message is constructed by concatenating the string  
“Sum\:\[“ with the value of b, and then adding a closing “\]”.  
c = factorial\(10\);  
Output\:  
print\("Factorial\:\\n\[" + c + "\]"\);  
Factorial\:  
// factorial from 0 to n  
\[3628800\]  
function factorial\(n\)\{  
if \(n \<= 1\) \{  
return n;  
\} else \{  
return factorial\(n - 1\) \* n;  
\}  
\} 124 8 Functions  
Here, this code snippet calculates the factorial of 10 using a recursive function and then  
prints the result with an informative message. The code starts by calculating the factorial  
of the number 10 and assigns the result to the variable c. The print function shows a  
message indicating “Factorial” and then displays the value of c. The factorial function is  
defined to calculate the factorial of a given number n. It uses recursion to perform the  
calculation. If n is less than or equal to 1, it returns 1. Otherwise, it recursively calls itself  
with n−1 and multiplies the result by n to calculate the factorial.  
8.3.5  
d = sequence\(5, \[\], 0, 5\);  
Output\:  
print\("A sequence\:\\n\[" + d + "\]"\);  
A sequence\:  
// just a sequence  
\[5,7,11,19,35\]  
function sequence\(n, m, i, t\)\{  
m\[i\] = n;  
i++;  
if \(i \>= t\) \{  
return m;  
\} else \{  
return sequence\(\(n-1\)+\(n-2\), m, i, t\);  
\}  
\}  
This code demonstrates the generation of a sequence of numbers using a recursive  
function and then displays the result as a string. A variable d is assigned the result of  
calling the sequence function with the arguments 5, an empty array \[\], 0, and 5. Then, a  
string is printed to the console, which includes the value of d inside a string representation  
of an array. The sequence function takes four parameters\: n, m, i, and t. It appends the  
value of n to the array m at index i and increments i. If i is greater than or equal to t, the  
function returns the array m. Otherwise, it makes a recursive call to sequence, updating n  
to be the sum of the previous two values of n and continuing to build the sequence. The  
result is then printed in the output. 8.3 Recursion 125  
e = fibonacci\(2, \[0, 1, 2\], 5\);  
Output\:  
print\("Fibonacci\:\\n\[" + e + "\]"\);  
Fibonacci\:  
// fibonacci  
\[0,1,2,3,5,8\]  
function fibonacci\(n, m, t\)\{  
n++;  
m\[n\] = m\[n-1\] + m\[n-2\];  
if \(n \>= t\) \{  
return m;  
\} else \{  
return fibonacci\(n, m, t\);  
\}  
\}  
This code demonstrates the use of a recursive function to generate a Fibonacci  
sequence up to a specified length. First, a variable e is assigned the result of calling  
the fibonacci function with the arguments 2, \[0, 1, 2\], and 5. This function calculates the  
Fibonacci sequence, starting with the initial values \[0, 1, 2\], and generates the sequence  
up to the specified length of 5. The fibonacci function takes three parameters\: n, m, and  
t. It increments n and updates the next value in the m array by summing the previous two  
values in the sequence. It continues to do this recursively until n is greater than or equal  
to t, at which point it returns the m array containing the Fibonacci sequence. Next, the  
print function displays the Fibonacci sequence stored in the e variable, preceded by the  
string “Fibonacci\:\\n\[“ and followed by “\]”.  
q = \[1, 3, 3, 4, 5, 9\];  
Output\:  
f = sum\_array\(q.length - 1, q, 0\);  
print \("Sum array\:\[" + f + "\]"\);  
Sum array\:\[25\]  
// sum all from array  
function sum\_array\(n, q, r\)\{  
r += q\[n\];  
if \(n \<= 0\) \{  
return r;  
\} else \{  
return sum\_array\(n - 1, q, r\);  
\}  
\} 126 8 Functions  
This time, the code demonstrates a recursive function for summing the elements of an  
array variable. First, an array q is defined with some numeric elements. Then, the result  
of calling the sum array function with three arguments is assigned to a variable f \: the  
length of the array q minus 1, the array q itself, and an initial value of 0. The purpose of  
the sum array function is to recursively sum the elements of the array. The sum array  
function takes three arguments\: n represents the current index, q is the array, and r is the  
running sum. It then adds the element at the current index to the running sum. If the index  
n is less than or equal to 0, the function returns the running sum r. Otherwise, it calls  
itself recursively with a decremented index and the updated running sum. Next, the code  
prints a message to the console that includes the sum of the array q, which is calculated  
using the sum array function. Objects  
# 9  
JavaScript is a versatile and widely-used programming language that empowers web  
developers to create dynamic and interactive web applications, either on browsers or  
on the server side \(i.e. Javascript Rhino, that is used across this book\) \[1\]. JavaScript  
is often referred to as an object-oriented language because it revolves around objects.  
Objects in JavaScript are data structures that group together related properties and meth-  
ods. These objects can represent real-world entities, abstract concepts, or any structured  
data. Objects consist of key-value pairs, where each key \(or property\) has an associated  
value \[1\]. Constructors in JavaScript are essentially blueprints for creating objects \[1\].  
They define the structure and properties of objects that will be created based on that con-  
structor \[1\]. Functions that serve as constructors are typically named with an initial capital  
letter. Once an object is created from a constructor, one can add methods to it. Methods  
are functions attached to an object, and they allow programmers to perform actions related  
to that object \[1\]. This interesting combination of constructors and methods enables the  
creation of reusable and organized code, promoting the principles of encapsulation and  
code modularity. Another important aspect regarding objects is JSON \(JavaScript Object  
Notation\). JSON is a lightweight and text-based data interchange format that plays a cru-  
cial role in web development. It is not exclusive to JavaScript but is widely used for data  
storage, configuration, and data exchange between a server and a client. JSON is a human-  
readable and easy-to-parse format that closely resembles JavaScript objects. It consists of  
key-value pairs, arrays, and primitive data types. The JSON simplicity and compatibility  
with various programming languages have made it the de facto choice for transmitting  
data over the internet. In JavaScript, JSON can be easily converted to JavaScript objects,  
and vice versa, using built-in functions, making it an essential tool for web developers  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_9  
127 128 9 Objects  
when working with external data sources or APIs. This chapter presents some examples  
related to concepts of JavaScript objects, constructors, methods, and JSON.  
9.1 Constructors and Methods  
Constructors and methods are fundamental concepts in JavaScript that play a crucial role  
in defining and manipulating objects, which are the building blocks of JavaScript pro-  
grams. Constructors in JavaScript are functions used to create and initialize objects. They  
serve as blueprints for object creation, allowing one to define the structure and properties  
of an object \[1\]. When an object is instantiated by the programmer using a constructor, the  
programmer essentially creates a new instance with its own set of properties and meth-  
ods. Constructors are a fundamental part of object-oriented programming in JavaScript.  
Methods, on the other hand, are functions that are defined within objects. These functions  
provide a way to encapsulate and perform actions or operations related to the object.  
Methods are crucial for modeling the behavior of objects in JavaScript applications. They  
can be used to modify object properties, interact with other objects, or perform specific  
tasks.  
9.1.1  
Ex. \(153\) – Using an object constructor  
function obj\(a, b, c, d\) \{  
Output\:  
this.ax = a.split\(''\);  
this.bx = this.ax.length;  
s,o,m,e | t,e,x,t  
this.cx = c - b;  
4 | 4  
this.dx = d \* c;  
-16 | -37  
\}  
3850 | 3696  
100 | 4  
let o1 = new obj\("some", 66, 50, 77\);  
let o2 = new obj\("text", 85, 48, 77\);  
print\(o1.ax + " | " + o2.ax\);  
print\(o1.bx + " | " + o2.bx\);  
print\(o1.cx + " | " + o2.cx\);  
print\(o1.dx + " | " + o2.dx\);  
o1.bx = 100;  
print\(o1.bx + " | " + o2.bx\); 9.1 Constructors and Methods 129  
The above implementation demonstrates object-oriented programming in JavaScript,  
with the creation of objects, property assignments, and property value modification. The  
obj function is a constructor function that takes four parameters a, b, c, and d. Within the  
function, this.ax is assigned the result of splitting the string a into an array of characters,  
whereas this.bx is assigned with the length of the array this.ax. Also, this.cx is assigned  
the result of subtracting b from c, and this.dx is assigned the result of multiplying d by  
c. Once the constructor function is defined, two objects \(o1 and o2\) are created using the  
obj constructor with different parameter values. The print function is then used to display  
various properties of these objects with some string concatenation. The properties of o1  
and o2 are printed side by side for comparison. Then, the value of the bx property of o1  
is modified to 100, and its new value is printed alongside the unchanged bx value of o2.  
9.1.2  
Ex. \(154\) – An object with three properties and a method \(I\)  
// This example creates an  
Output\:  
// object with three properties.  
// The cx property is a method  
this text  
let obj = \{  
ax\: "this",  
bx\: "text",  
cx\: function\(\) \{  
return this.ax + " " + this.bx;  
\}  
\}  
print\(obj.cx\(\)\);  
In this code snippet, an object is defined using the curly braces notation. This object,  
named obj, has three properties. The first property, ax, is assigned the string value “this.”  
The second property, bx, is assigned the string value “text.” The third property, cx, is  
unique as it is assigned a function. This function represents the novelty of this example  
and is defined as an anonymous function \(a nameless function\), and it does not take any  
parameters. Inside this function, there is a return statement that concatenates the values  
of the ax and bx properties of the obj using the this keyword, which refers to the current  
object. The result is a string that combines the values of ax and bx separated by a space.  
Once the object and its properties are fully defined, the code then calls the cx method  
of the obj object using the obj.cx\(\) syntax. This method call will return the concatenated  
string of “this text.” 130 9 Objects  
9.1.3  
Ex. \(155\) – An object with three properties and a method \(II\)  
// This example creates an object  
Output\:  
// with three properties.  
// The cx property is a method.  
this-4  
this  
let obj = \{  
text  
ax\: "this",  
super  
bx\: "text",  
string  
cx\: function\(g\) \{  
super+6  
let t =  
'';  
t = this.ax + g + this.bx.length;  
return t;  
\}  
\}  
print\(obj.cx\("-"\)\);  
print\(obj.ax\);  
print\(obj.bx\);  
obj.ax = "super";  
obj.bx = "string";  
print\(obj.ax\);  
print\(obj.bx\);  
print\(obj.cx\("+"\)\);  
Here, an object named obj is defined with three properties. The first property, ax, is  
initialized with the string value “this.” The second property, bx, is assigned the string  
value “text.” The third property, cx, is a method defined as an anonymous function that  
takes one parameter g. Thus, the introduction of this parameter is the novelty here. Inside  
the cx method, there is the declaration of a local variable t which is initially an empty  
string. Then, t is assigned a value by concatenating the ax property, the value of the g  
parameter, and the length of the bx property. Next, the method returns the value stored  
in the t variable. The code then outputs the result of several states of the object in order  
to showcase the events\: \(a\) print\(obj.cx\(“−”\)\); calls the cx method of the obj object with  
the parameter “−” and prints the result of the method call. The result is the concatenation  
of “this,” the parameter “-”, and the length of the “text” property, resulting in a string that  
contains “this-4.” \(b\) print\(obj.ax\); shows the value of the ax property of the obj object,  
which is “this.” \(c\) print\(obj.bx\); outputs the bx value of the obj object, which is “text.”  
\(d\) obj.ax = “super”; updates the value of the ax property from “this” to “super.” \(e\)  
obj.bx = “string”; updates the value of the bx property from “text” to “string.” \(f\) next 9.1 Constructors and Methods 131  
we have\: print\(obj.ax\); that shows an updated value for the ax property, which is now  
“super.” \(g\) print\(obj.bx\); this prints the updated value of the bx property, which is now  
“string.” \(h\) print\(obj.cx\(“+”\)\); calls the cx method of the obj object with the parameter  
“+” and prints the result of the method call. The result is the concatenation of “super,” the  
parameter “+,” and the length of the “string” property, resulting in a string that contains  
“super+6.”  
9.1.4  
Ex. \(156\) – An object with complex methods  
let obj = \{  
Output\:  
AV\: 0,  
AV\: 44.33  
SD\: 0,  
SD\: 77.83  
CV\: 0,  
CV\: 1.75  
dx\: function \(a\) \{  
let n = a.length ;  
let b = 0;  
let e = 0;  
let j = 0;  
for\(j=0; j\<n; j++\)\{  
b += a\[j\];  
\}  
let x = b/n;  
for\(j=0; j\<n; j++\)\{  
e += Math.pow\(\(a\[j\] - x\), 2\);  
\}  
let s = Math.sqrt\(e/\(n-1\)\);  
let c = s/x;  
this.AV = x;  
this.SD = s;  
this.CV = c;  
\}  
\}  
let a = \[5, 6, 2, 9, 44, 200\];  
obj.dx\(a\);  
print\('AV\: ' + obj.AV\);  
print\('SD\: ' + obj.SD\);  
print\('CV\: ' + obj.CV\); 132 9 Objects  
This is a more useful representation of an object and its properties. Namely, an object  
named obj is defined using curly braces. This object has four properties\: AV, SD, CV,  
and dx. The AV, SD, and CV properties are initially set to the value 0, while the dx  
property is assigned a function. The dx function takes one parameter, a, which is assumed  
to be an array. Within the dx function, several operations are performed to calculate  
statistical values based on the input array a. First, the length of the array a is stored  
in the variable n. Then, three variables b, e, and j are initialized to 0. A for-loop is  
used to iterate over the elements of the array a, and in each iteration, the values are  
accumulated into the variable b. After the loop, the mean \(average\) x is calculated by  
dividing the accumulated sum b by n. Another for-loop is used to calculate the sum  
of squared differences between each element of the array and the mean x. This sum is  
stored in variable e. Subsequently, the standard deviation s is computed by taking the  
square root of the variance, which is calculated by dividing e by \(n–1\). The coefficient  
of variation c is computed by dividing the standard deviation s by the mean x. Next, the  
AV, SD, and CV properties of the obj object are updated with the calculated values of x,  
s, and c, respectively. Outside of the object definition, an array a is defined with a list  
of numerical values. The dx method of the obj object is called with this array a as an  
argument to perform the statistical calculations. Following the calculation, there are three  
print statements that display the results. These statements use the print function to output  
the mean \(AV \), standard deviation \(SD\), and coefficient of variation \(CV \) to the console.  
9.1.5  
Ex. \(157\) – Generate multiple objects with methods  
// Using an object  
Output\:  
// constructor and methods  
box 1 - AV\: 44.333333  
function obj\(a\) \{  
box 1 - SD\: 77.832298  
box 1 - CV\: 1.7556157  
this.AV = 0;  
---------------------  
this.SD = 0;  
box 2 - AV\: 5.8333333  
this.CV = 0;  
box 2 - SD\: 1.6020819  
this.dx = function\(a\) \{  
box 2 - CV\: 0.2746426  
let n = a.length;  
let b = 0;  
let e = 0;  
let j = 0;  
for\(j=0; j\<n; j++\)\{  
b += a\[j\];  
\}  
let x = b/n;  
for\(j=0; j\<n; j++\)\{  
e += Math.pow\(\(a\[j\] - x\), 2\);  
\} 9.1 Constructors and Methods 133  
let s = Math.sqrt\(e/\(n-1\)\);  
let c = s/x;  
this.AV = x;  
this.SD = s;  
this.CV = c;  
\}  
\}  
let a = \[5, 6, 2, 9, 44, 200\];  
let b = \[7, 4, 6, 8, 6, 4\];  
let box1 = new obj\(\);  
let box2 = new obj\(\);  
box1.dx\(a\);  
box2.dx\(b\);  
print\('box 1 - AV\: ' + box1.AV\);  
print\('box 1 - SD\: ' + box1.SD\);  
print\('box 1 - CV\: ' + box1.CV\);  
print\('----------------------'\);  
print\('box 2 - AV\: ' + box2.AV\);  
print\('box 2 - SD\: ' + box2.SD\);  
print\('box 2 - CV\: ' + box2.CV\);  
This code calculates and displays the mean, standard deviation, and coefficient of varia-  
tion for the two sets of numbers stored in the box1 and box2 objects. An object constructor  
function named obj is defined. This constructor function takes one parameter, a, although  
it is not used within the function. Inside the constructor function, there are three prop-  
erties\: AV, SD, and CV, all initialized to 0. Additionally, there is a method defined as  
dx, which takes an array a as a parameter. The dx method performs a series of calcula-  
tions on the array a, including calculating the mean, standard deviation, and coefficient  
of variation, which are stored in the AV, SD, and CV properties, respectively. Once the  
obj constructor function is defined, two arrays, a and b, are further defined with sets of  
numbers. Then, two objects, box1 and box2, are created using the new obj\(\) constructor,  
resulting in two instances of the obj object. The dx method is then called on both box1  
and box2, passing the a and b arrays as parameters, respectively. This sets the AV, SD,  
and CV properties of each object to the calculated values. In the end, the code prints out  
the values of these properties for both box1 and box2 using the print function. 134 9 Objects  
9.2 JSON  
Constructors and methods are fundamental building blocks in the world of software engi-  
neering, serving as the essential tools for creating and manipulating data within software  
applications. Just as constructors are responsible for initializing objects and defining their  
initial state, methods enable us to interact with and modify those objects during run-  
time. Now, for data exchange and storage, JSON \(JavaScript Object Notation\) provides  
a perfect illustration of this synergy between constructors and methods \[1\]. JSON is a  
lightweight data interchange format that relies on key-value pairs to represent structured  
data. Constructors, in the context of JSON, serve as blueprints for creating complex data  
structures, while methods are used to access and manipulate the data contained within  
these structures. In this dynamic interplay, constructors and methods play a pivotal role  
in harnessing the power of JSON to manage and transmit data efficiently in the digital  
world. Thus, below are a number of examples that explain concepts such as serialization  
and deserialization.  
9.2.1  
Ex. \(158\) – Object to JSON  
// a JavaScript object...  
Output\:  
// ...converted into JSON\:  
\{"v1"\:1,"v2"\:2,"v3"\:3\}  
let obj = \{ "v1"\:1, "v2"\:2, "v3"\:3 \};  
let txt = JSON.stringify\(obj\);  
print\(txt\);  
// send JSON\:  
//print\("index.php?obj=" + txt\);  
Here, we have a simple object manipulation operation where a JavaScript object is  
converted into JSON format that can potentially be a parameter to a URL \(please see  
the comments\). First, an object named obj is defined using the curly braces notation.  
This object has three properties\: “v1”, “v2”, and “v3”, each assigned a numeric value.  
Next, the JSON.stringify\(obj\) method is used to convert the obj object into a JSON-  
formatted string. This JSON representation will look like \{“v1”\:1,“v2”\:2,“v3”\:3\}. Then,  
the txt variable is assigned the JSON-formatted string produced by JSON.stringify\(obj\).  
Afterwards, there is a comment that mentions sending the JSON data. The commented line  
//print\(“index.php?obj =”+txt\); suggests the construction of a URL string that includes  
the JSON data as a query parameter. To send the JSON data to a URL, one would typ-  
ically need to use an HTTP request method \(e.g., using the fetch API in modern web  
development\). The provided code is incomplete in that regard, as it lacks the actual code  
for sending the JSON data to a specific URL, thus, it is only a hint to the reader. To sum  
up this example, this code snippet creates a JavaScript object, converts it into a JSON  
string, and hints at the intention to send that JSON data to a URL. 9.2 JSON 135  
9.2.2  
Ex. \(159\) – JSON to Object  
// txt is text received in JSON format.  
Output\:  
// Convert JSON into a JavaScript object\:  
1  
txt = '\{"v1"\:1,"v2"\:2,"v3"\:3\}';  
2  
3  
var obj = JSON.parse\(txt\);  
print\(obj.v1\);  
print\(obj.v2\);  
print\(obj.v3\);  
Here, the variable txt is assigned with a string containing JSON data, which represents  
an object with three key-value pairs\: “v1” with a value of 1, “v2” with a value of 2, and  
“v3” with a value of 3. The JSON.parse\(\) method is used to convert the JSON-formatted  
string stored in the txt variable into a JavaScript object. This method parses the JSON data  
and creates a corresponding JavaScript object, which is then stored in the obj variable.  
Three separate print statements are used to log the values of the v1, v2, and v3 properties  
of the obj object to the console. Thus, when this code is executed, it will take the JSON  
string in txt, convert it into a JavaScript object named obj, and then print the values  
associated with the properties v1, v2, and v3 to the console.  
9.2.3  
Ex. \(160\) – Anything to object to string  
let a = \["a", "b", "c"\];  
let b = \[  
\[0, 1, 0\],  
\[1, 1, 1\],  
\[0, 1, 0\]  
\];  
let c = \{ "c1"\:a, "c2"\:b, "c3"\:42 \};  
let obj = \{ "v1"\:a, "v2"\:b, "v3"\:c \};  
let txt = JSON.stringify\(obj\);  
print\(txt\);  
Output\:  
\{"v1"\:\["a","b","c"\],"v2"\:[[0,1,0],[1,1,1],[0,1,0]],"v3"\:  
\{"c1"\:\["a","b","c"\],"c2"\:[[0,1,0],[1,1,1],[0,1,0]],"c3"\:42\}\}  
Several variables and objects are defined and manipulated in this example. Variable a  
is declared as an array containing three string elements\: “a,” “b,” and “c.” Variable b is  
declared as a two-dimensional array \(a matrix\) containing three arrays. Each inner array 136 9 Objects  
represents a row in the matrix and consists of integer values. Variable c is defined as an  
object with three properties\: “c1,” “c2,” and “c3.” “c1” is assigned the value of the array a,  
“c2” is assigned the value of the two-dimensional array b, and “c3” is assigned the integer  
value 42. For diversity of data, variable obj is defined as an object with three properties\:  
“v1,” “v2,” and “v3.” Thus, “v1” is assigned the value of the array a, “v2” is assigned  
the value of the two-dimensional array b, and “v3” is assigned the value of the object  
c. The JSON.stringify function is called to convert the obj object into a JSON-formatted  
string. This string represents the structured data in the obj object as a text format. The  
code essentially defines and structures data in the form of arrays, objects, and matrices,  
and then converts this data into a JSON string using the JSON.stringify function before  
logging it to the console.  
9.2.4  
Ex. \(161\) – Complex string to object \(I\) - direct nested access  
let txt = '\{"v1"\:\["a","b","c"\],"v2"\:' +  
Output\:  
'[[0,1,0],[1,1,1],[0,1,0]]' +  
',"v3"\:\{"c1"\:\["a","b","c"\]' +  
b  
',"c2"\:[[0,1,0],[1,1,1],[0' +  
1  
',1,0\]\],"c3"\:42\}\}';  
0,1,0,1,1,1,0,1,0  
1  
let obj = JSON.parse\(txt\);  
print\(obj.v1\[1\]\);  
print\(obj.v2\[0\]\[1\]\);  
print\(obj.v3.c2\);  
print\(obj.v3.c2\[1\]\[1\]\);  
A variable txt is assigned with a JSON-formatted string. This string represents a JSON  
object with three key-value pairs. The first key, “v1”, has an array value \[“a”, “b”, “c”\].  
The second key, “v2”, contains a nested array [[0, 1, 0], [1], [0, 1, 0]]. The third key, “v3”,  
holds another nested JSON object with three key-value pairs\: “c1” with an array value  
\[“a”, “b”, “c”\], “c2” with a nested array value [[0, 1, 0], [1], [0, 1, 0]], and “c3” with a  
numeric value 42. Following the JSON object creation, the code proceeds to parse this  
JSON string into a JavaScript object using JSON.parse\(\). After parsing, it demonstrates  
the use of the object by printing specific values. It prints the second element of the “v1”  
array, the value at the first index of the first array within “v2”, the entire “c2” object within  
“v3”, and finally, the value at the second index of the second array within “c2”. The main  
purpose of this example is to access the nested values found in the main properties of the  
object. 9.2 JSON 137  
9.2.5  
Ex. \(162\) – Complex string to object \(II\) - nested access by reference  
let txt = '\{"v1"\:\["a","b","c"\],"v2"\:' +  
Output\:  
'[[0,1,0],[1,1,1],[0,1,0]]' +  
',"v3"\:\{"c1"\:\["a","b","c"\]' +  
a,b,c  
',"c2"\:[[0,1,0],[1,1,1],[0' +  
0,1,0,1,1,1,0,1,0  
',1,0\]\],"c3"\:42\}\}';  
a,b,c  
0,1,0,1,1,1,0,1,0  
let obj = JSON.parse\(txt\);  
42  
let a = obj.v1;  
let b = obj.v2;  
let c = obj.v3;  
print\(a\);  
print\(b\);  
print\(c.c1\);  
print\(c.c2\);  
print\(c.c3\);  
A JSON string named txt is defined, which contains three key-value pairs. The first  
key, “v1”, maps to an array of three string elements\: “a,” “b,” and “c.” The second key,  
“v2”, maps to a nested array of numeric values. This array has three sub-arrays, each  
containing numeric values. The third key, “v3,” maps to an object with three key-value  
pairs, namely\: \(i\) “c1” is associated with an array that contains three string elements,  
similar to the array in “v1.” \(ii\) “c2” is associated with a nested array that is structurally  
similar to “v2,” containing numeric values. \(iii\) “c3” corresponds to a numeric value,  
which is specifically 42. After defining the JSON string, the code uses JSON.parse to  
convert it into an object, which is then stored in the variable obj. Subsequently, the code  
extracts specific components from the parsed object\: Variable a holds the value of obj.v1,  
which is the first array. Variable b holds the value of obj.v2, which represents the nested  
array. Also, c holds the value of obj.v3, which is an object with sub-properties. Next, the  
code prints these extracted values for user inspection. The main purpose of this example  
is to assign parts of one object \(i.e. obj\) into a new object \(i.e. c\) and access the nested  
values found in its properties \(i.e. c1, c2, and c3\). 138 9 Objects  
9.2.6  
Ex. \(163\) – Make 1D array from parts of an object  
let txt = '\{"v1"\:\["a","b","c"\],"v2"\:' +  
Output\:  
'[[0,1,0],[1,1,1],[0,1,0]]' +  
',"v3"\:\{"c1"\:\["a","b","c"\]' +  
a,b,c  
',"c2"\:[[0,1,0],[1,1,1],[0' +  
',1,0\]\],"c3"\:42\}\}';  
let obj = JSON.parse\(txt\);  
let a =\[\];  
for \(let i in obj.v3.c1\) \{  
a\[i\] = obj.v3.c1\[i\];  
\}  
print\(a\);  
Here, a one-dimensional array a is made based on values found inside a complex object  
\(obj\). This code begins by defining a variable txt, which is a string containing JSON data.  
The JSON data within txt includes three key-value pairs\: “v1”, “v2”, and “v3”\: \(i\) The  
“v1” key has an array as its value containing the elements “a,” “b,” and “c.” \(ii\) The “v2”  
key has a nested array as its value, which represents a 3 × 3 matrix with binary values.  
\(iii\) The “v3” key has an object as its value with three key-value pairs\: “c1”, “c2”, and  
“c3”. \(iv\) The “c1” key has an array as its value, similar to the “v1” array. \(v\) The “c2”  
key has a nested array as its value, representing another 3 × 3 matrix with binary values.  
\(vi\) The “c3” key has a numerical value, which is 42. The code then proceeds to parse  
the JSON string stored in txt into an object and assigns it to the variable obj. It initializes  
an empty array a and then uses a for…in loop to iterate over the elements of the c1 array  
within the v3 object. For each element, it assigns the value to the corresponding index in  
array a. 9.2 JSON 139  
9.2.7  
Ex. \(164\) – Make a matrix from parts of an object  
let txt = '\{"v1"\:\["a","b","c"\],"v2"\:' +  
Output\:  
'[[0,1,0],[1,1,1],[0,1,0]]' +  
',"v3"\:\{"c1"\:\["a","b","c"\]' +  
0 1 0  
',"c2"\:[[0,1,0],[1,1,1],[0' +  
1 1 1  
',1,0\]\],"c3"\:42\}\}';  
0 1 0  
let obj = JSON.parse\(txt\);  
let a = \[\];  
for \(let i in obj.v3.c2\)  
\{  
a\[i\] = \[\];  
for \(let j in obj.v3.c2\[i\]\)  
\{  
a\[i\]\[j\] = obj.v3.c2\[i\]\[j\];  
\}  
\}  
function SMC\(m\) \{  
let r =  
'';  
for\(let i=0; i\<m.length; i++\) \{  
for\(let j=0; j\<m\[i\].length; j++\) \{  
r += m\[i\]\[j\] + " ";  
\}  
r += "\\n";  
\}  
return r;  
\}  
print\(SMC\(a\)\);  
In this last implementation of this subchapter, a matrix a is made based on values  
found inside a complex object \(obj\). A string txt is defined, which contains JSON data,  
similar to the previous example. The JSON data includes three key-value pairs, namely  
“v1”, “v2”, and “v3”, and their internal structure is the same as in the previous example  
\(i.e. points i–vi\). The code then parses the JSON string stored in txt into an object and  
assigns it to the variable obj. Next, an empty array a is initialized. Next, there is a nested  
for-loop. The outer loop iterates over the elements of the c2 array within the v3 object, and  
for each element, it initializes a sub-array in array a. Then, the inner loop iterates over the  
elements within the sub-arrays and assigns the corresponding values from the c2 array to  
the array a. The code defines a function called SMC\(m\) that was often used before, which  
takes a matrix \(m\) as an argument. Inside the function, it constructs a string r, which  
represents a matrix in a human-readable format. It uses nested loops to go through the  
elements of the matrix, appending each element and adding spaces and newline characters  
to format it as a matrix. Thus, the array a is an argument for the SMC function, which in  
turn prints the matrix to the console. Moderate Examples  
# 10  
A spectrum of coding examples exists, that range from the very basic to the highly  
advanced. Nestled comfortably in between these extremes are moderate examples. These  
moderate examples strike a balance between simplicity and complexity, making them  
valuable teaching tools for both beginners looking to expand their knowledge and  
experienced developers seeking practical insights. Moderate examples often explore inter-  
mediate concepts and techniques, offering real-world relevance without overwhelming  
programmers with intricate complexities. They bridge the gap between introductory code  
snippets and complex, production-ready applications, making them an ideal starting point  
for those eager to deepen their understanding of JavaScript. Thus, building interactive  
web applications, working with data, or optimizing our code for performance, moderate  
examples provide a stepping stone towards becoming a proficient JavaScript developer.  
10.1 Load Arrays from Strings  
Loading arrays from strings is a common task in programming, often used to convert data  
in string format into a structured array for further processing. In various programming  
languages, including JavaScript, Python, and others, this operation plays a crucial role in  
tasks such as data parsing, data import/export, and matrix manipulation. In the examples  
that follow, we will explore how to load arrays from strings, demonstrating practical use  
cases and illustrating the process of converting raw data into a more manageable format.  
These examples will showcase how to parse strings and transform them into structured  
arrays, unlocking the potential for a wide range of data processing applications.  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_10  
141 142 10 Moderate Examples  
10.1.1  
Ex. \(165\) – Strings to 1D arrays \(I\)  
var d = main\_app\(\);  
Output\:  
function main\_app\(\)\{  
1270,286,55,0,55,99,5535  
var a = "10|13|55|56|1|3|123";  
var b = "45|33|55|0|1|22|127";  
var aa = a.split\("|"\);  
var bb = b.split\("|"\);  
var cc = \[\];  
for \(i=0; i\<=aa.length-1; i++\) \{  
cc\[i\] = Daniela\(i,aa,bb\);  
\}  
print\(cc\);  
\}  
function Daniela\(i,aa,bb\)\{  
return Number\(aa\[i\]\) \*  
Number\(bb\[\(aa.length-1\)-i\]\);  
\}  
This above program defines a series of functions and variables that perform a specific  
task. It begins by declaring a variable d and initializing it by calling the main app func-  
tion. The main app function is defined, and it sets up two strings, a and b, which contain  
a series of numeric values separated by the pipe character “|”. Then, it splits these strings  
into arrays aa and bb by using the split method. After that, an empty array cc is declared  
to store the results of calculations. The code enters a loop that iterates from i equal to 0  
up to the length of the aa array minus 1. During each iteration, the Daniela function is  
called with the current index i, the aa array, and the bb array as arguments. The result  
of this function call is stored in the cc array at the same index i. The Daniela function  
calculates a value by multiplying the numeric values at the current index i of the aa array  
with the corresponding value at the reversed index of the bb array \(the last value of bb  
corresponds to the first value of aa, and so on\). It then returns this calculated value. Next,  
and last, the print function is called with the cc array as an argument in order to show its  
content to the user. 10.1 Load Arrays from Strings 143  
10.1.2  
Ex. \(166\) – Strings to 1D arrays \(II\)  
let d = main\_app\(\);  
Output\:  
print\(d\);  
1270,286,55,0,55,99,5535  
function main\_app\(\)\{  
let a = "10|13|55|56|1|3|123";  
let b = "45|33|55|0|1|22|127";  
let aa = a.split\("|"\);  
let bb = b.split\("|"\);  
let cc = \[\];  
for \(i=0; i\<=aa.length-1; i++\) \{  
aa\[i\] = Number\(aa\[i\]\);  
bb\[i\] = Number\(bb\[i\]\);  
cc\[i\] = sebastian\(i,aa,bb\);  
\}  
return cc;  
\}  
function sebastian\(i,aa,bb\)\{  
return aa\[i\] \* bb\[\(aa.length-1\)-i\];  
\}  
Just like before, this code example splits two strings of numbers, performs a series of  
multiplications on corresponding elements from these arrays, and stores the results in a  
new array, which is then returned by the main app function and printed as d. However,  
this time some changes can be observed, like the use of the let keyword instead of the var  
keyword, and other small optimisations. First, it defines a series of functions to perform a  
specific task. It starts with a main app function, which is the entry point for the program.  
The code begins by declaring a variable d and assigns the result of calling the main  
app function to it. The main app function is defined next. Inside the main app function,  
two strings a and b are defined. These strings contain a series of numbers separated by  
the “|” character. The split method is used to split these strings into arrays, aa and bb,  
respectively. A new array cc is also initialized, which will be used to store the results  
of a computation. The code then enters a for-loop, iterating from 0 to the length of the  
aa array minus 1. Inside the loop, the values from the aa and bb arrays are converted  
from string to integers via the sebastian function. The sebastian function is called with  
three arguments\: i, aa, and bb. The result of this function call is stored in the cc array at  
index i. Note that the sebastian function takes the same three parameters\: i, aa, and bb,  
which indicates that the call is made by reference. The sebastian function then retrieves  
elements from the aa and bb arrays at specific indices, multiplies them as numbers, and  
returns the result. Then, the main app function returns the cc array, which contains the  
results of the computations. After calling the main app function, the code prints the value  
of d. 144 10 Moderate Examples  
10.1.3  
Ex. \(167\) – A 2D array loaded from string  
var n = \[\];  
Output\:  
var m = \[\]; //matrix  
A A A A A  
var c = 'AAAAA|BBBBB|CCCCC|DDDDD';  
B B B B B  
var n = c.split\('|'\);  
C C C C C  
D D D D D  
for\(var i=0; i\<n.length; i++\) \{  
m\[i\] = n\[i\].split\(''\);  
\}  
print\(SMC\(m\)\);  
function SMC\(m\) \{  
var r =  
"";  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r += m\[i\]\[j\] + " ";  
\}  
r += "\\n";  
\}  
return r;  
\}  
Here, this code splits a string into a 2D matrix and prints the matrix, where elements  
are separated by spaces, and rows are separated by newline characters. The code begins  
by declaring two empty arrays, n and m, where n is meant to hold a string split into parts,  
and m will represent a matrix. The string c is defined as\:  
c = “AAAAA|BBBBB|CCCCC|DDDDD"  
Then c is split into parts using the split\(‘|’\) method, with the results stored in the n  
array. The code proceeds with a for-loop to iterate through the elements in the array n.  
During each iteration, the elements in n are further split into individual characters and  
stored in array m, effectively creating a 2D array or matrix. After setting up the m matrix,  
the code calls a function named SMC with m as an argument and prints the result. The  
SMC function is defined below. This function iterates through the rows and columns of  
the m matrix, building a string r that represents the contents of the matrix with space-  
separated elements in rows and newline characters separating rows. The resulting string  
is returned from the SMC function, and this final string is printed. 10.1 Load Arrays from Strings 145  
10.1.4  
Ex. \(168\) – Load a matrix from a string by using two delimiters  
var n = \[\];  
var m = \[\]; //matrix  
var c = '1,2,4,1,0|3,5,6,7,8|1,2,3,4,5|5,4,3,2,1';  
print\(SMC\(Bahdir\(c\)\)\);  
function Bahdir\(c\)\{  
var n = c.split\('|'\);  
for\(var i=0; i\<n.length; i++\) \{  
m\[i\] = n\[i\].split\(','\);  
\}  
Output\:  
1 2 4 1 0  
3 5 6 7 8  
1 2 3 4 5  
5 4 3 2 1  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
m\[i\]\[j\] = Number\(m\[i\]\[j\]\);  
\}  
\}  
return m;  
\}  
function SMC\(m\) \{  
var r = "\\n";  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r += " " + m\[i\]\[j\] + " ";  
\}  
r += "\\n";  
\}  
return r;  
\}  
This implementation defines a series of variables and functions for manipulating and  
printing a matrix represented as a string of numbers separated by commas and pipe sym-  
bols. Note that the use of the previous example for splitting numbers found in string  
format, may create some issues. That is, two or three digit numbers would be counted as  
separate columns and an error may occur. Here, the goal is to be able to store multi-digit  
numbers in a string if necessary. The code starts by declaring two empty arrays, n and  
m, which will be used to store the matrix data. The string c is initialized with a specific  
set of numbers separated by commas and pipe symbols, which represents a matrix. The  
numbers are organized in rows and columns, with rows separated by pipe symbols and  
columns separated by commas. The Bahdir function is defined, which takes the c string  
as its parameter. This function is responsible for parsing the string and converting it into a  
two-dimensional array, which represents the matrix. It does this by first splitting the input  
string c into an array of rows using the split\(‘|’\) method. Then, it iterates through each  
row and further splits each row into an array of numbers by using the split\(‘,’\) method.  
Next, it converts the numbers from strings to numbers using the Number\(\) function and  
stores the resulting two-dimensional array in the m variable. The m array is returned by 146 10 Moderate Examples  
the function. Next, the SMC function is defined, which takes a two-dimensional array m  
as its parameter \(just like in the previous example\). Thus, this function is responsible for  
formatting the matrix and returning it as a string. It initializes a string variable r with  
a newline character to create a new line at the beginning of the output. It then iterates  
through the rows and columns of array m using nested for-loops, and for each element in  
the matrix, it appends the element to the r string, surrounded by spaces. After each row  
is processed, a newline character is added to the r string to start a new line. The final for-  
matted matrix is stored in the r variable, and it is returned as a string. In the last step, the  
code calls the Bahdir function to parse the c string and convert it into a two-dimensional  
array and then passes the result to the SMC function to format and print the matrix to the  
console.  
10.1.5  
Ex. \(169\) – A function to correctly display a matrix  
var m = \[  
Output\:  
\[20, 4, 60\],  
\[39, 5, 60\],  
\[3, 50, 40\]  
\];  
print\(SMC\(m\)\);  
function SMC\(m\) \{  
var r = "\\n";  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
20 4 60  
39 5 60  
3 50 40  
r += m\[i\]\[j\] + ps\(m\[i\]\[j\], 3\);  
\}  
\}  
r += "\\n";  
return r;  
\}  
function ps\(a, s\) \{  
var t =  
"";  
b = s - \(a.toString\(\).length % s\);  
for\(var i=0; i\<b; i++\) \{t += " ";\}  
return t;  
\} 10.1 Load Arrays from Strings 147  
The above example answers the following question\: How can an array be elegantly  
displayed if the values in the array elements contain a different number of digits? Thus, the  
purpose of this code is to format the matrix m and return a string representation of it with  
each element properly spaced, ensuring a uniform appearance across all columns. The  
ps function aids in achieving this formatting by adding the necessary spaces. But how?  
At this point it is clear from the last two examples that the SMC function is arranging  
the matrix. However, this arrangement alone, does not take into account the presence  
of more than two digits in the array elements, which may lead to an erroneous display.  
For a proper display, the ps function is called from inside SMC. Function ps takes two  
arguments\: a \(a number\) and s \(the desired width\). It calculates the number of spaces  
required to make the number a fit within the specified width s. It does this by finding the  
difference between s and the number of characters in the string representation of a and  
then generating a string consisting of that number of spaces. Thus, the function returns  
this space-filled string, which is added to r, and then r is printed to the console.  
10.1.6  
Ex. \(170\) – A function to load and display matrices  
var c1 = '12,2,44,1,0|34,5,6,7,8|1,2,3,4,5|' +  
'5,4,3,2,1';  
var c2 = '66,5,45,10,10|37,50,60,17,18|' +  
'10,25,37,4,5|5,4,3,2,1';  
var c3 = '66,5,45,10,10|37,50,60,17,18|' +  
'10,25,37,4,5|5,4,3,2,1';  
print\(SMC\(load\(c1\)\)\);  
print\(SMC\(load\(c2\)\)\);  
Output\:  
print\(SMC\(load\(c3\)\)\);  
function load\(c\)\{  
var n = \[\];  
var m = \[\];  
12 2 44 1 0  
34 5 6 7 8  
1 2 3 4 5  
5 4 3 2 1  
66 5 45 10 10  
37 50 60 17 18  
10 25 37 4 5  
5 4 3 2 1  
66 5 45 10 10  
37 50 60 17 18  
10 25 37 4 5  
var n = c.split\('|'\);  
for\(var i=0; i\<n.length; i++\) \{  
m\[i\] = n\[i\].split\(','\);  
5 4 3 2 1  
\}  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
m\[i\]\[j\] = Number\(m\[i\]\[j\]\);  
\}  
\}  
return m;  
\} 148 10 Moderate Examples  
function SMC\(m\) \{  
var r =  
"";  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r += m\[i\]\[j\] + ps\(m\[i\]\[j\], 3\);  
\}  
r += "\\n";  
\}  
return r;  
\}  
function ps\(a, s\) \{  
var t =  
"";  
b = s - \(a.toString\(\).length % s\);  
for\(var i=0; i\<b; i++\) \{t += " ";\}  
return t;  
\}  
This JavaScript code is designed to load and process numerical data represented as  
comma-separated values in a specific format, and then format the data as a string with  
specific spacing between the values, ready for display. In other words, this is a combi-  
nation between the previous example and the loading of matrices from strings. The code  
starts by declaring three variables, c1, c2, and c3, each containing a string of comma-  
separated values arranged in rows separated by pipes \(i.e., vertical bars; “|”\). These strings  
are essentially representing numerical matrices, and there are three such matrices. First,  
the load function is defined. This function takes a string as input and splits it into a  
two-dimensional array where the values are separated by commas and rows are separated  
by vertical bars. Each element in the array is then converted to a numeric value. The  
function returns this two-dimensional array. The SMC function is also defined. It takes a  
two-dimensional array as input and processes it to format the data in a specific way. Next,  
it iterates through each element of the array, converting the values to strings and padding  
them with spaces to ensure each value is a fixed length of 3 characters. The processed  
values are then concatenated into a string with each row separated by a newline character.  
The formatted string is returned. Also, the ps function is defined, which is called from  
inside the SCM function. It takes a numeric value and a desired string length \(s\) as input.  
It calculates the number of spaces required to pad the value to the specified length and  
returns a string containing those spaces. After defining these functions, the code proceeds  
to call the load function on each of the c1, c2, and c3 strings. The resulting arrays are then  
passed to the SMC function, and the output is printed to the console for user inspection. 10.1 Load Arrays from Strings 149  
10.1.7  
Ex. \(171\) – Load two matrices from strings and make the addition  
var c1 = '12,2,44,1,0|34,5,6,7,8|1,2,3,4,5|' +  
Output\:  
'5,4,3,2,1';  
var c2 = '66,5,45,10,10|37,50,60,17,18|' +  
12 2 44 1 0  
'10,25,37,4,5|5,4,3,2,1';  
34 5 6 7 8  
1 2 3 4 5  
var m1 = \[\] = load\(c1\);  
5 4 3 2 1  
var m2 = \[\] = load\(c2\);  
66 5 45 10 10  
var sm = \[\];  
37 50 60 17 18  
10 25 37 4 5  
print\(SMC\(m1\)\);  
5 4 3 2 1  
print\(SMC\(m2\)\);  
for\(var i=0; i\<m1.length; i++\) \{  
78 7 89 11 10  
sm\[i\] = \[\];  
71 55 66 24 26  
for\(var j=0; j\<m1\[i\].length; j++\) \{  
11 27 40 8 10  
sm\[i\]\[j\] = Number\(m1\[i\]\[j\]\) + Number\(m2\[i\]\[j\]\);  
10 8 6 4 2  
\}  
\}  
print\(SMC\(sm\)\);  
function load\(c\)\{  
var n = \[\];  
var m = \[\]; //matrix  
var n = c.split\('|'\);  
for\(var i=0; i\<n.length; i++\) \{  
m\[i\] = n\[i\].split\(','\);  
\}  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
m\[i\]\[j\] = Number\(m\[i\]\[j\]\);  
\}  
\}  
return m;  
\}  
function SMC\(m\) \{  
var r =  
"";  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r += m\[i\]\[j\] + ps\(m\[i\]\[j\], 3\);  
\}  
r += "\\n";  
\}  
return r;  
\}  
function ps\(a, s\) \{  
var t =  
"";  
b = s - \(a.toString\(\).length % s\);  
for\(var i=0; i\<b; i++\) \{t += " ";\}  
return t;  
\} 150 10 Moderate Examples  
This code example makes use of the previous examples, namely it loads two matrices  
from strings, calculates their sum element-wise, and prints the original matrices and their  
sum as formatted strings. The code begins by declaring two strings, c1 and c2, which  
represent two matrices with rows and columns separated by vertical bars \(“|”\). Then, two  
empty arrays, m1 and m2, are declared and populated with the matrices loaded from the  
respective strings using the load function. Next, an empty array sm is declared to store  
the sum of the two matrices. The print function is used to print the string representation  
of the matrices m1 and m2 after they are loaded using the SMC function, which formats  
the matrices into strings. A nested for-loop is used to iterate over the elements of m1 and  
m2 and calculate the sum of corresponding elements, storing the result in the sm matrix.  
The SMC function is defined to format a matrix as a string. It iterates over the elements  
of the matrix, converts them to strings, and pads them with spaces to ensure consistent  
column alignment. As before, the ps function is called from inside SMC function and it  
represents a utility function that pads a number with spaces to make it a specific length.  
10.2 Some Matrix Operations  
As specified before, matrix operations play a fundamental role in various fields of math-  
ematics, science, and computer science. To streamline and modularize the process of  
performing these operations, it is common practice to store them within functions. These  
functions serve as reusable building blocks that simplify code, improve readability, and  
enhance the maintainability of programs that involve matrices. In this context, we will  
explore the concept of matrix operations stored in functions and their significance in  
solving complex mathematical and computational problems efficiently. This approach not  
only promotes code organization but also facilitates the reuse of these operations in dif-  
ferent parts of a program, making it a valuable practice in both algorithm development  
and software engineering. 10.2 Some Matrix Operations 151  
10.2.1  
Ex. \(172\) – Function to swap diagonal of matrix  
// Function to swap diagonal of matrix  
Output\:  
let a = \[  
2 1 3  
\[3, 1, 2\],  
1 0 1  
\[1, 0, 1\],  
3 1 2  
\[2, 1, 3\]  
\];  
swapDiagonal\(a\);  
print\(SMC\(a\)\);  
function swapDiagonal\(a\) \{  
let n = a.length;  
for \(let i=0; i\<n; i++\) \{  
let t = a\[i\]\[i\];  
a\[i\]\[i\] = a\[i\]\[n-i-1\];  
a\[i\]\[n-i-1\] = t;  
\}  
\}  
function SMC\(m\) \{  
var r = "\\n";  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r += " " + m\[i\]\[j\] + " ";  
\}  
r += "\\n";  
\}  
return r;  
\}  
This code swaps the diagonals of a matrix and then prints the modified matrix using  
the custom SMC function. First, the swapDiagonal function is defined. It takes a matrix  
a as an argument. Within this function, it calculates the dimension n of the matrix and  
then loops through the matrix rows using a for-loop with the index variable i. During  
each iteration, it swaps the element at position \(i, i\) with the element at position \(i, n-i-1\).  
This effectively swaps the diagonal elements of the matrix. Next, the function called SMC  
is defined. It takes a matrix m as an argument and is responsible for generating a string  
representation of the matrix. It initializes an empty string r with a newline character. It  
then uses nested for-loops to iterate through the rows and columns of the matrix, building  
a string representation of the matrix with spaces and newline characters to separate the  
rows. The code then calls the swapDiagonal function to swap the diagonals of the a  
matrix. After the swap, it prints the matrix using the SMC function and the print function,  
similar to the previous code. 152 10 Moderate Examples  
10.2.2  
Ex. \(173\) – Function to transpose a matrix  
// Function to transpose a matrix  
Output\:  
let a = \[  
1 5 9 4  
\[1, 2, 3, 4\],  
2 6 0 5  
\[5, 6, 7, 8\],  
3 7 2 6  
\[9, 0, 2, 3\],  
4 8 3 7  
\[4, 5, 6, 7\]  
\];  
transpose\(a\);  
print\(SMC\(a\)\);  
function transpose\(a\)\{  
let n = a.length;  
let m = a\[0\].length;  
for \(let i=0; i\<n; i++\) \{  
for \(let j=i; j\<m; j++\) \{  
let t = a\[j\]\[i\];  
a\[j\]\[i\] = a\[i\]\[j\]; // swap  
a\[i\]\[j\] = t;  
\}  
\}  
\}  
function SMC\(m\) \{  
var r = "\\n";  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r += " " + m\[i\]\[j\] + " ";  
\}  
r += "\\n";  
\}  
return r;  
\}  
This version of the code defines a matrix a, transposes it using the transpose function,  
and then prints the result of the matrix operation using the SMC function. The SMC  
function constructs a string representation of the matrix for display. It starts by defining  
a 2D array a, representing a matrix. The transpose function is then called with a as its  
argument, followed by a call to the SMC function with a as its argument, and the result is  
printed using a print function. The transpose function accepts a 2D array a and performs  
the transpose operation on it. It calculates the number of rows n and columns m in the  
matrix a. It then uses two nested loops to iterate through the matrix and swap elements  
along the main diagonal, effectively transposing the matrix. 10.2 Some Matrix Operations 153  
10.2.3  
Ex. \(174\) – Function for rotation of a matrix by 90 degre  
// left rotation of a  
Output\:  
// matrix by 90 degree without using  
// any extra space  
1 1 1 1  
2 6 7 4  
let a = \[  
2 0 2 4  
\[1, 1, 1, 1\],  
2 3 3 3  
\[2, 6, 7, 4\],  
\[2, 0, 2, 4\],  
\[2, 3, 3, 3\]  
1 2 2 2  
\];  
1 6 0 3  
1 7 2 3  
1 4 4 3  
print\(SMC\(a\)\);  
transpose\(a\);  
print\(SMC\(a\)\);  
1 4 4 3  
1 7 2 3  
revColumn\(a\);  
1 6 0 3  
print\(SMC\(a\)\);  
1 2 2 2  
function revColumn\(a\)\{  
let n = a.length;  
let m = a\[0\].length;  
for \(let i=0; i\<n; i++\) \{  
for \(let j=0, k=m-1; j\<k; j++, k--\) \{  
let t = a\[j\]\[i\];  
a\[j\]\[i\] = a\[k\]\[i\];  
a\[k\]\[i\] = t;  
\}  
\}  
\}  
function transpose\(a\)\{  
let n = a.length;  
let m = a\[0\].length;  
for \(let i=0; i\<n; i++\) \{  
for \(let j=i; j\<m; j++\) \{  
let t = a\[j\]\[i\];  
a\[j\]\[i\] = a\[i\]\[j\];  
a\[i\]\[j\] = t;  
\}  
\}  
\} 154 10 Moderate Examples  
function SMC\(m\) \{  
var r = "\\n";  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r += " " + m\[i\]\[j\] + " ";  
\}  
r += "\\n";  
\}  
return r;  
\}  
The overall effect of this code is to rotate the a matrix by 90° counterclockwise without  
using any extra space, and then it reverses the columns of the rotated matrix to complete  
the 90-degree left rotation. The code defines utility functions transpose and revColumn for  
this purpose. The matrix a is defined as a 4 × 4 grid of numbers. The transpose function  
takes the a matrix and transposes it in place. It swaps elements across the main diagonal  
of the matrix. This is done by looping through the rows and columns, exchanging a\[i\]\[ j\]  
with a\[ j\]\[i\] for each element where i is the row index and j is the column index. This  
effectively transposes the matrix. After transposing the a matrix, the SMC function is  
called to print the matrix, showing the result of the transposition. Next, the revColumn  
function is defined to reverse the columns of the a matrix in place. It does this by iterating  
through the rows and using two pointers, j and k, to swap elements from the leftmost and  
rightmost columns within each row. In a final step, after reversing the columns of matrix  
a, the SMC function is called again to print the matrix in the output, showing the result  
of the column reversal.  
10.3 Logical Operations  
Logical operations play a fundamental role in computer science and programming,  
enabling the manipulation and evaluation of data through the use of binary logic. These  
operations form the building blocks for decision-making, data filtering, and conditional  
control in various software applications and systems. Common logical operations include  
AND, OR, NOT, XOR, and more, each serving a distinct purpose in processing and ana-  
lyzing data. Understanding how to apply these operations is essential for both computer  
scientists and programmers. One powerful way to comprehend and implement logical  
operations is through simulation using functions. Functions are modular units of code  
that encapsulate a specific set of tasks that can be reused. This approach promotes code 10.3 Logical Operations 155  
reusability, readability, and simplifies debugging, making it an essential technique in the  
world of software development. In these examples, we will explore the fundamentals of  
logical operations, their importance, and how they can be simulated and applied using  
functions. Therefore, this is an exploration of the concept of truth tables, the role of  
Boolean algebra, and of the practical examples of how functions can perform logical  
operations.  
10.3.1  
Ex. \(175\) – Logical NOT  
print\('1 -\> ' + f\_not\(1\)\);  
Output\:  
print\('0 -\> ' + f\_not\(0\)\);  
1 - \> 0  
function f\_not\(a\)\{  
0 - \> 1  
return 1 - a;  
\}  
//function f\_not\(a\)\{  
// return \(a + 1\) % 2;  
//\}  
//function f\_not\(a\)\{  
// if\(a == 1\)\{a = 0;\} else \{a = 1;\}  
// return a;  
//\}  
The above code demonstrates a simple implementation of a NOT gate function. It  
begins by calling this function with two different input values, 1 and 0, and then prints  
the results. The function f not accepts a single argument a, which is the input value. It  
calculates the NOT operation by subtracting the input a from 1 and returns the result. This  
operation effectively inverts the input, turning 1 into 0 and 0 into 1. There are alternative  
implementations of a NOT gate that have been commented out in the code, but the primary  
function being used here is the one described above. The alternatives include using the  
modulo operation or conditional statements to achieve the same logical NOT functionality. 156 10 Moderate Examples  
10.3.2  
Ex. \(176\) – Logical AND  
/\*  
Output\:  
AND  
\[1, 0\] - \> 0  
----------------  
Input Output  
A B Q  
---------  
0 0 0  
0 1 0  
1 0 0  
1 1 1  
\*/  
print\('\[1, 0\] -\> ' + f\_and\(1, 0\)\);  
function f\_and\(a, b\)\{  
return a \* b;  
\}  
The provided implementation from above defines a simple function named f and that  
implements the logical AND operation. This function takes two input arguments, a and b,  
representing binary values \(0 or 1\). It then computes the logical AND operation between  
these two input values and returns the result as the output. The logical AND operation  
returns 1 only when both of its operands are 1; otherwise, it returns 0. This behavior is  
represented in a truth table that specifies the output \(Q\) for all possible combinations of  
inputs \(A and B\)\: \(i\) When A and B are both 0, the output Q is 0. \(ii\) When A is 0 and  
B is 1, the output Q is 0. \(iii\) When A is 1 and B is 0, the output Q is 0. iv\) When both  
A and B are 1, the output Q is 1. The code then provides an example usage of the f and  
function with the input \[1, 0\], and it prints the result as “\[1, 0\] - \> 0”, which corresponds  
to the logical AND operation of 1 and 0, resulting in 0 \(output\). 10.3 Logical Operations 157  
10.3.3  
Ex. \(177\) – Logical OR  
/\*  
Output\:  
OR  
\[1, 0\] -\> 1  
----------------  
Input Output  
A B Q  
---------  
0 0 0  
0 1 1  
1 0 1  
1 1 1  
\*/  
print\('\[1, 0\] -\> ' + f\_or\(1, 0\)\);  
function f\_or\(a, b\)\{  
return \(a + b\) - \(a \* b\);  
\}  
This code starts with a comment section that contains a truth table illustrating the  
logical OR operation for two binary inputs A and B. It shows the input combinations \(0  
and 1 for A and B\) and the corresponding output Q of the logical OR operation. The  
comment provides a clear representation of the expected behavior of the f or function  
that follows. The code then proceeds to define a function named f or\(a, b\) which takes  
two arguments, a and b. Inside the function, it calculates the logical OR operation for the  
input values a and b using a mathematical expression \(a + b\) – \(a × b\). This expression  
effectively computes the OR operation and returns the result. Next, the code prints the  
result of calling the f or function with the input values \[1, 0\]. 158 10 Moderate Examples  
10.3.4  
Ex. \(178\) – Logical NAND \(NOT AND\)  
/\*  
Output\:  
NAND  
\[1, 1\] -\> 0  
----------------  
Input Output  
A B Q  
---------  
0 0 1  
0 1 1  
1 0 1  
1 1 0  
\*/  
print\('\[1, 1\] -\> ' + f\_nand\(1, 1\)\);  
function f\_nand\(a, b\)\{  
return f\_not\(f\_and\(a, b\)\);  
\}  
function f\_not\(a\)\{  
return 1 - a;  
\}  
function f\_and\(a, b\)\{  
return a \* b;  
\}  
This implementation from above defines a set of functions to implement the NAND  
logic gate and other related logic gates, specifically NOT and AND gates. The code begins  
with a comment block that describes the truth table for the NAND gate, showing its inputs  
A and B and the corresponding output Q. The truth table specifies that the output Q is 1  
when A and B are both 0 or when either A or B is 1. Otherwise, when both A and B are  
1, the output Q is 0. The code then proceeds to define the following functions\: f nand\(a,  
b\), f not\(a\) and f and\(a, b\). The f nand\(a, b\) function implements the NAND gate and  
takes two arguments, a and b. It returns the result of applying the NAND operation on  
the inputs a and b. It does this by first calling the f and function to perform the AND  
operation on a and b, and then passing the result to the f not function to invert the result,  
effectively implementing the NAND operation. Described in the previous examples, the  
f not\(a\) function implements the NOT gate and takes one argument, a. It returns the  
complement of the input a. If a is 0, it returns 1, and if a is 1, it returns 0. Also, the f  
and\(a, b\) function implements the AND gate and takes two arguments, a and b. It returns  
the result of applying the AND operation on the inputs a and b. It multiplies the values  
of a and b, and the result is 1 only if both a and b are 1; otherwise, it is 0. The code  
concludes by using the defined functions to demonstrate the functionality of the NAND  
gate by calling f nand\(1, 1\). 10.3 Logical Operations 159  
10.3.5  
Ex. \(179\) – Logical NOR \(NOT OR\)  
/\*  
Output\:  
NOR  
\[0, 0\] -\> 1  
----------------  
Input Output  
A B Q  
---------  
0 0 1  
0 1 0  
1 0 0  
1 1 0  
\*/  
print\('\[0, 0\] -\> ' + f\_nor\(0, 0\)\);  
function f\_nor\(a, b\)\{  
return f\_not\(f\_or\(a, b\)\);  
\}  
function f\_not\(a\)\{  
return 1 - a;  
\}  
function f\_or\(a, b\)\{  
return \(a + b\) - \(a \* b\);  
\}  
This code defines a set of functions that implement the NOR \(NOT OR\) logic gate,  
a basic digital logic gate with two input variables \(A and B\) and one output variable  
\(Q\). The NOR gate returns a true \(1\) output only when both of its input variables are  
false \(0\). The code begins with a comment block, providing a truth table for the NOR  
gate, which lists the possible input combinations of A and B along with the resulting  
output Q. The print function is used to display the result of the NOR gate for a specific  
input combination of A and B. For example, \[0, 0\] – \> 1 indicates that when both A and  
B are 0, the NOR gate outputs 1. The code defines several functions to implement the  
NOR gate. The novel function called f nor\(a, b\) takes two input arguments, a and b, and  
calculates the NOR operation by first applying the OR operation using the f or function  
and then negating the result using the f not function. The function f not\(a\), showcased  
prior to this example, takes one input argument a and negates it by subtracting it from 1,  
effectively converting 1 to 0 and 0 to 1. Also, the function f or\(a, b\) presented before this  
current example, takes two input arguments, a and b, and calculates the OR operation.  
It does so by adding a and b and then subtracting their product \(a × b\). The result is 1  
only if at least one of the input values \(a or b\) is 1; otherwise, it is 0. Thus, this code  
defines functions to implement the NOR gate, utilizing the concepts of NOT and OR  
operations to achieve the desired logic. It also provides a specific example of using the 160 10 Moderate Examples  
f nor function to evaluate the NOR gate output for the input combination \[0, 0\], which  
naturally evaluates to 1 \(\[0, 0\] - \> 1\).  
10.3.6  
Ex. \(180\) – Logical XOR  
/\*  
Output\:  
XOR  
\[0, 0\] -\> 0  
----------------  
Input Output  
A B Q  
---------  
0 0 0  
0 1 1  
1 0 1  
1 1 0  
\*/  
print\('\[0, 0\] -\> ' + f\_xor\(0, 0\)\);  
function f\_xor\(a, b\)\{  
return \(a + b\) - 2 \* \(a \* b\);  
//return \(a-b\) \* \(a-b\) ;  
//return \(\(a+b\) \* \(a+b\)\) % 2;  
\}  
This JavaScript code defines a function that implements the XOR \(exclusive OR\) logic  
operation. XOR takes two binary inputs, A and B, and returns 1 if exactly one of them is 1,  
and 0 if both are the same \(0 or 1\). The code starts with a comment section that describes  
the truth table for XOR, showing the input values A and B and their corresponding output  
Q. It lists all possible combinations and the expected result for each combination. The  
code then calls the function f xor to demonstrate the XOR operation on the input \[0, 0\]  
and prints the result to the console. The f xor function itself implements the XOR logic  
using simple arithmetic operations. It takes two arguments, a and b, representing the  
binary inputs. The function calculates the XOR result by adding a and b together \(a +  
b\), which can be 0, 1, or 2. Then, subtracting twice the product of a and b from the sum.  
This effectively handles the XOR logic, ensuring that the result is 1 when only one of a  
or b is 1, and 0 when both are 0 or both are 1. Please notice that the code provides two  
alternative implementations as comments, which use different mathematical expressions  
to achieve the same XOR logic. However, the main implementation with addition and  
subtraction is active. 10.3 Logical Operations 161  
10.3.7  
Ex. \(181\) – Logical XNOR  
/\*  
Output\:  
XNOR  
\[0, 0\] -\> 1  
----------------  
Input Output  
A B Q  
---------  
0 0 1  
0 1 0  
1 0 0  
1 1 1  
\*/  
print\('\[0, 0\] -\> ' + f\_xnor\(0, 0\)\);  
function f\_xnor\(a, b\)\{  
return f\_not\(f\_xor\(a, b\)\);  
//return f\_not\(f\_and\(f\_not\(a\), b\) + f\_and\(a, f\_not\(b\)\)\);  
//return f\_not\(f\_or\(f\_not\(a\), b\) + f\_or\(a, f\_not\(b\)\)\);  
//return f\_not\(f\_or\(a, b\)\) + \(a\*b\);  
//return f\_not\(\(a + b\) - \(a \* b\)\) + \(a\*b\);  
//return f\_not\(\(a + b\) - \(a \* b\) + \(a\*b\)\);  
//return f\_not\(\(a + b\) - 2 \* \(a \* b\)\);  
\}  
function f\_xor\(a, b\)\{  
return \(a + b\) - 2 \* \(a \* b\);  
\}  
function f\_not\(a\)\{  
return 1 - a;  
\}  
//function f\_or\(a, b\)\{  
// return \(a + b\) - \(a \* b\);  
//\}  
//function f\_and\(a, b\)\{  
// return a \* b;  
//\}  
This code defines functions for XNOR, XOR, and NOT logical operations and provides  
a simple way to calculate the XNOR of two input values. The code could be extended to  
include other logical operations by uncommenting and modifying the relevant functions.  
First, the implementation defines a set of functions to implement the XNOR \(exclusive  
NOR\) logical operation, and it also includes some related functions for other logical oper-  
ations like XOR, NOT, AND, and OR. It begins with a comment section that provides 162 10 Moderate Examples  
a table representing the XNOR truth table, with input values A and B, and their corre-  
sponding output value Q. The XNOR operation returns 1 \(true\) when both A and B are  
the same \(either both 0 or both 1\), and it returns 0 \(false\) when A and B are different.  
The code then prints the result of applying the XNOR operation to the input \[0, 0\], which  
outputs 1. Next, there are several functions defined. The f xnor\(a, b\) function is the main  
XNOR function. It takes two arguments, a and b, representing the input values. It com-  
putes the XNOR operation by first calling the f xor function to get the XOR result and  
then negating it using the f not function to get the final XNOR result. There are some  
commented-out alternative implementations that I wish the reader to inspect, namely for  
XNOR using AND, OR, and other logical operations. This demonstrates the myriad of  
possibilities of achieving the same result, and definitely worth a look. To continue, f  
xor\(a, b\) function calculates the XOR operation between a and b. XOR returns 1 when  
the inputs are different and 0 when they are the same. It is implemented by subtracting  
twice the product of a and b from the sum of a and b. Also, the f not\(a\) function imple-  
ments the NOT operation, which negates the input a. It returns 1 if a is 0 and returns  
0 if a is 1. As mentioned above, there are also commented functions for OR and AND,  
which are not used in the XNOR implementation, but can be valuable teaching examples  
for different lectures.  
10.4 Miscellaneous  
Where the lines between disciplines blur, miscellaneous codes are at the forefront,  
embracing ambiguity, and the ever-expanding possibilities of software engineering. They  
are not constrained by labels or boundaries, but rather driven by the limitless potential  
of technology and the boundless horizons of their own capabilities. In short, miscella-  
neous codes are those implementations that do not fit clearly in any category, these being  
considered the useful outliers of the field of science \(usually\).  
10.4.1  
Ex. \(182\) – Logaritm of b in base a  
let a = 10; // base  
Output\:  
let b = 2; // value  
0.30102999566398114  
print\(log\(a, b\)\);  
function log\(n, v\) \{  
return Math.log\(v\) / Math.log\(n\);  
\}  
This code calculates and prints the logarithm of b to the base a in the console. In  
this JavaScript code snippet, two variables are defined\: a and b. Variable a is assigned  
the value 10, and it serves as the base, while variable b is assigned the value 2, which 10.4 Miscellaneous 163  
is the value used in the subsequent mathematical calculation. The code then invokes a  
function called log and passes two arguments to it\: a and b. The log function calculates the  
logarithm of b to the base a using the JavaScript Math library \(built-in Math.log function  
for natural logarithms\). It then uses the formula for logarithm conversion by dividing the  
natural logarithm of b by the natural logarithm of a. The result of this calculation is then  
returned by the function and is printed in the output.  
10.4.2  
Ex. \(183\) – Smooth signal  
let a = \[5, 1, 8, 4, 6, 2, 9, 8\];  
Output\:  
print\(smooth\(a\)\);  
5,6.5,5.2,5.6,3.8,6.4,7.2,8  
function smooth\(a\)\{  
let n = a.length;  
for\(let i=1; i\<n-1; i++\)\{  
a\[i\] = \(a\[i-1\] + a\[i+1\]\)/2;  
\}  
return a;  
\}  
This implementation uses an array a containing a sequence of numbers\: 5, 1, 8, 4, 6,  
2, 9, and 8. This array is passed as an argument to a function called smooth. The smooth  
function takes the array as its parameter and performs a smoothing operation on it. It  
first determines the length of the array and stores it in variable n. Then, it enters a for-  
loop that iterates over the elements of the array. However, the loop starts at the second  
element \(index 1\) and ends at the second-to-last element \(index n-2\). Inside the loop, each  
element at index i is updated by taking the average of the elements at indices i–1 and i +  
1, effectively smoothing out the values. The result of this smoothing operation is stored in  
the same array a, which is then returned by the function. Next, the code calls the smooth  
function and prints the returned array. 164 10 Moderate Examples  
10.4.3  
Ex. \(184\) – Greatest common divisor \(GCD\)  
// greatest common divisor \(GCD\)  
Output\:  
print\(gcd\(45, 12\)\);  
3  
function gcd\(a, b\) \{  
if \(a == 0\)\{return b;\}  
while \(b != 0\) \{  
if \(a \> b\)\{  
a -= b;  
\} else \{  
b -= a;  
\}  
\}  
return a;  
\}  
This calculates the greatest common divisor \(GCD\) of two numbers and then prints  
the result. It defines a function called gcd which takes two parameters, a and b. The code  
first checks if a is equal to 0, and if so, it returns the value of b as the GCD. If a is not  
zero, it enters a while loop. Inside the loop, it repeatedly subtracts the smaller of the two  
numbers from the larger one. This process continues until one of the numbers becomes  
zero. Once that happens, the GCD is found, and the result is returned. Thus, the code  
calls the gcd function with the values 45 and 12 and prints the result.  
10.4.4  
Ex. \(185\) – Pseudo random generator  
let x = 3; // seed  
Output\:  
print\(prandom\(x\)\);  
0,17,4,11,13,10,2,14,21,23,  
function prandom\(x\)\{  
let a = 11;  
let m = 25;  
let c = 17;  
let r=  
"";  
for \(let i = 0; i \< 10; i++\) \{  
x = \(a\*x+c\) % m;  
r += x + ",";  
\}  
return r;  
\}  
In this code, there is a function named prandom that generates a sequence of pseudo-  
random numbers based on a mathematical formula. The function takes an initial value x  
as a parameter, which is used as a seed for the random number generation. The variables 10.4 Miscellaneous 165  
a, m, and c are constants used in the formula. The function initializes an empty string r  
to store the generated numbers. It then enters a loop that runs 10 times. In each iteration,  
it updates the value of x using the formula\:  
x = \(a × x + c\)%m  
It then appends the new value of x to the string r, separated by commas. Once all  
iterations are completed, the function returns the string r, which contains the sequence of  
generated pseudo-random numbers. The initial value of x and the constants a, m, and c  
determine the pattern of the generated numbers, making it pseudo-random in nature. This  
code essentially demonstrates a simple pseudo-random number generator using a linear  
congruential generator \(LCG\) algorithm.  
10.4.5  
Ex. \(186\) – Double brute force algorithm \(DBFA\)  
// Double Brute Force Algorithm \(DBFA\)  
Output\:  
let x = Block\_Alocation\(133\);  
9  
print\(x\);  
function Block\_Alocation\(L\) \{  
let v, r;  
let a = 1;  
let b = 1;  
let t = 5; // min block length  
let m = 8; // max block length  
do \{  
a = a + 1;  
t = \(L % a\);  
r = \(L - t\);  
v = r % 2;  
t++;  
\}  
while \(t \> 3 && v == 0\);  
do \{  
m = m + 1;  
b = r % m;  
\}  
while \(b == 0 || m \> 1000\);  
return m;  
\}  
The code implements a block allocation algorithm that involves two nested brute force  
loops to determine the value of m based on the input L, and the result is stored in the  
variable x. The example implements a Double Brute Force Algorithm \(DBFA\) for block  
allocation \[1\]. The point of the algorithm is the calculation of text chunks \(blocks\) of 166 10 Moderate Examples  
length m that divides a sequence of length L, such that in the last chunk there will be a  
minimum of t characters. First, this code defines a function called Block Alocation that  
takes an input parameter L, and it also demonstrates the usage of this function. The Block  
Alocation function begins by declaring several variables\: v, r, a, b, t, and m, and initializes  
them with specific values. Within the first do-while loop, it iteratively calculates values  
for a, t, r, and v until the condition \(t \> 3 && v == 0\) is no longer satisfied. The loop  
performs a series of mathematical operations on these variables based on the input value  
L. After the first loop exits, the second do-while loop is initiated. This loop calculates  
values for m and b iteratively based on the calculated value of r from the previous loop.  
It continues until the condition \(b == 0 || m \> 1000\) is no longer met. The final result is  
the value of m, which is returned as the output of the Block Alocation function. The main  
part of the code then initializes a variable x with the result of calling the Block Alocation  
function with the argument 133, and it prints the value of x to the console.  
10.4.6  
Ex. \(187\) – Alphabet detection  
print\(alpha\('uiuhd87wqsaidhsad'\)\)  
Output\:  
function alpha\(c\)\{ //ALPHABET DETECTION  
u,i,h,d,8,7,w,q,s,a  
let a = \[\];  
let t = c.split\(''\);  
let k = t.length;  
for\(let i=0; i\<=k; i++\)\{  
var q = 1;  
for\(let j=0; j\<=a.length; j++\)\{  
if \(t\[i\] === a\[j\]\) \{q = 0;\}  
\}  
if \(q === 1\) \{a.push\(t\[i\]\);\}  
\}  
return a;  
\}  
Alphabet detection is an algorithm that identifies the unique characters from a sequence  
of text \(ex. input\: “ABBBABBACABBA”; output\: “ABC”\). The code defines a function  
named alpha that takes a single argument c, which is expected to be a string. Thus, the  
purpose of this function is to detect unique characters in the input string and return them  
as an array. Within the function an empty array a is initialized. This array will be used to  
store unique characters from the input string. The input string c is split into an array of  
individual characters and stored in the variable t. The length of the array t is stored in the  
variable k. Next, there are two nested loops used to identify and store unique characters  
in the array a. The outer loop iterates over the indices of array t, from 0 to k \(inclusive\).  
Inside the outer loop, a variable q is initialized to 1 \(flag variable\). The inner loop iterates  
over the indices of the array a, from 0 to the current length of a. Within the inner loop,  
the code checks if the current character in t at index i is equal to any character in the 10.4 Miscellaneous 167  
array a. If it is, q is set to 0, indicating that the character is not unique. If q remains 1  
after the inner loop, it means that the character is unique, and it is pushed to the array a.  
After both loops have completed, the function returns the array a, which contains all the  
unique characters from the input string. The alpha function is invoked with the argument  
sequence “uiuhd87wqsaidhsad”, and the result is printed to the console.  
10.4.7  
Ex. \(188\) – Alphabet detection on matrices  
let c = \[  
Output\:  
\[ 1, 1, 1, 1, 1, 1, 0, 1, 1, 1 \],  
\[ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1 \],  
1,0  
\[ 1, 1, 1, 0, 1, 1, 0, 1, 0, 1 \],  
\[ 0, 1, 0, 0, 1, 1, 1, 0, 0, 1 \],  
\[ 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 \],  
\[ 1, 0, 1, 1, 1, 1, 0, 1, 0, 0 \],  
\[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 \],  
\[ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 \],  
\[ 1, 1, 0, 0, 0, 0, 1, 0, 0, 1 \]  
\];  
function matrix\_alphabet\(t\)\{  
let a = \[\];  
let n = t.length;  
let m = t\[0\].length;  
for\(let i=0; i\<n; i++\)\{  
for\(let j=0; j\<m; j++\)\{  
var q = 1;  
for\(let k=0; k\<=a.length; k++\)\{  
if \(t\[i\]\[j\] === a\[k\]\) \{q = 0;\}  
\}  
if \(q === 1\) \{a.push\(t\[i\]\[j\]\);\}  
\}  
\}  
return a;  
\}  
print\(matrix\_alphabet\(c\)\);  
The provided code defines a two-dimensional array c representing a binary matrix and  
a function named matrix alphabet that extracts unique elements from this matrix \(mainly  
just like in the previous example but this time for a 2D structure\). The implementation  
calls the function matrix alphabet with the matrix c as an argument and prints the result.  
The c array is a 2D array with 9 rows and 10 columns, containing binary values \(i.e.,  
0 or 1\) that likely can represent some sort of pattern or alphabet. The matrix alphabet  
function takes a 2D array t as an argument and aims to find the unique elements from it. It  
initializes an empty array a to store these unique elements and calculates the dimensions  
of the input matrix t with n representing the number of rows and m representing the  
number of columns. The function then iterates through each element of t and checks if it 168 10 Moderate Examples  
is already in the array a. If not, it adds the element to a. The function returns the array  
a, which contains the unique elements from the input matrix. The code contains a print  
statement at the end to display the result of calling the matrix alphabet function with the  
c matrix as an argument. Thus, instead of a sequence, the detection of unique characters  
was made over a matrix.  
10.5 Sorting  
Sorting is a fundamental concept in computer science and plays a crucial role in a wide  
range of applications, from data organization to optimization and search algorithms. At  
its core, sorting involves the arrangement of elements in a specific order, typically in  
ascending or descending order. This seemingly simple task has far-reaching implications,  
as efficiently organized data allows for faster search and retrieval, facilitates data analysis,  
and enhances the overall performance of various algorithms and systems. The need for  
sorting arises in diverse fields, from databases and information retrieval systems to sci-  
entific computing and everyday tasks like organizing files and lists. Sorting is also a key  
component in numerous computational problems, such as searching for a specific item  
in a dataset, identifying duplicates, or solving optimization problems. In this subchapter,  
we will examine different sorting algorithms, their characteristics, and their real-world  
applications.  
10.5.1  
Ex. \(189\) – Low level native sort and eliminate duplicates \(I\)  
let a = \[\];  
Output\:  
let b = \[3, 6, 2, 78, 99, 1, 4\];  
1,2,3,4,6,78,99  
let r = 0;  
let n = b.length;  
for \(let i=0; i\<n; i++\) \{  
a\[b\[i\]\] = b\[i\];  
\}  
let m = a.length; // max val  
for \(let j=0; j\<m; j++\) \{  
if\(a\[j\]\)\{b\[r\] = a\[j\]; r++\}  
\}  
print\(b\);  
The example initializes two arrays, a and b, with a initially being an empty array  
and b containing some numerical values. It then defines two variables, r and n, where r  
is set to 0, and n is assigned the length of array b. The code proceeds to enter a loop  
that iterates through the elements of array b using a for-loop, where i serves as the loop 10.5 Sorting 169  
counter. Inside the loop, it assigns the value of b\[i\] to a\[b\[i\]\]. This effectively creates  
a new array a where the indices correspond to the values of b, and the values in a are  
the same as the corresponding values in b. After that, the code calculates the length of  
the array a and stores it in the variable m. A second for-loop begins, with j as the loop  
counter, iterating through the indices of array a. Inside this loop, it checks if there is a  
non-falsy value at index j in array a. If a non-falsy value is found, it assigns that value  
to b\[r\] and increments the value of r. Next, the code prints the contents of array b. Note  
that this native sorting method works well for number sequences of short ranges and is  
written for this book. To my knowledge it is not published anywhere but here. Note that  
the time spent by this method to sort the values of an array is n + m, where m represents  
the maximum value over elements of the array.  
10.5.2  
Ex. \(190\) – Low level native sort and eliminate duplicates \(II\)  
let a = \[\];  
Output\:  
let b = \[3, 6, 2, 78, 99, 1, 4\];  
99,78,6,4,3,2,1  
let n = b.length;  
let r = n;  
for \(let i=0; i\<n; i++\) \{  
a\[b\[i\]\] = b\[i\];  
\}  
let m = a.length; // max val  
for \(let j=m; j\>0; j--\) \{  
if\(a\[j\]\)\{b\[n-r\] = a\[j\]; r--\}  
\}  
print\(b\);  
How about sorting the values from maximum to minimum? Well, we can simply  
reverse the output order of the previous result. But, let us write something more ele-  
gant than a simple inversion. Like before, this example initializes two arrays, a and b.  
Array b is assigned a set of numeric values. The code also initializes two variables, r and  
n, with r initially set to 0 and n being the length of array b. The first part of the method is  
the same as in the previous example. Namely the code then enters a for-loop that iterates  
from 0 to n–1, and in each iteration, it assigns the value of b\[i\] to the corresponding index  
in array a. This operation effectively populates array a with values from array b at the  
same indices. Next, the code calculates the length of array a and stores it in the variable  
m, representing the maximum value in the array. In the second part, the code then enters  
another for-loop, this time iterating from 0 to m–1. Inside this loop, it checks if the value  
at index j in array a exists \(i.e., is not falsy, or in other words the element is not empty\),  
and if it does, it assigns that value to the corresponding index in array b at index r and  
increments the value of r. This operation essentially filters out falsy values from array a 170 10 Moderate Examples  
and stores them in array b. Next, the code prints the modified array b to the console. Note  
that this native sorting method works well for number sequences containing small max-  
imum values \(ex. 100\). Again, to my knowledge this method is not published anywhere  
but here.  
10.5.3  
Ex. \(191\) – An optimized version of Bubble Sort  
var a = \[4, 5, 8, 1, 1, 5, 2, 9\];  
Output\:  
print\(bs\(a\)\);  
1,1,2,4,5,5,8,9  
function bs\(a\)\{  
var i, j, n, t;  
n = a.length;  
for \(i = 0; i \< n-1; i++\)\{  
for \(j = 0; j \< n-i-1; j++\)  
\{  
if \(a\[j\] \> a\[j+1\]\)\{ //swap  
t = a\[j\];  
a\[j\] = a\[j+1\];  
a\[j+1\] = t;  
\}  
\}  
\}  
return a;  
\}  
There are a couple of sorting algorithms. However, this code demonstrates a simple  
implementation of the Bubble Sort algorithm to sort an array a in ascending order. The  
array a is defined with a set of unsorted numeric values. The code defines a function  
bs\(a\) that takes an array a as a parameter and performs the Bubble Sort algorithm. Inside  
the function it initializes variables i, j, n, and t. Variable n is set to the length of the  
input array a. It uses two nested loops to iterate through the array to compare adjacent  
elements. If the element at index j is greater than the element at index j + 1, it swaps  
the elements to sort them in ascending order. The t variable is used for temporary storage  
during the swap. Also, the outer loop \(i\) iterates n–1 times, and the inner loop \( j\) iterates  
n-i-1 times, as the largest elements have already bubbled to the end of the array during  
each pass of the outer loop. Overall, the sorted array a is returned by the function. Thus,  
the code calls the bs\(a\) function with the array a and prints the resulting sorted array to  
the console for user inspection. 10.6 Permutations 171  
10.6 Permutations  
Permutations are a fundamental concept in mathematics and combinatorics. They are at  
the heart of numerous real-world problems and are essential for understanding the arrange-  
ments, orderings, and possibilities that exist within various sets of objects. A permutation  
refers to an arrangement of objects or elements in a particular order. It represents all the  
possible ways in which a set of items can be rearranged without repetition. The study  
of permutations encompasses a wide range of applications, from cryptography and data  
analysis to game theory, and other related fields.  
10.6.1  
Ex. \(192\) – Get all permutations of a given string \(I\)  
let a = \[\];  
Output\:  
function permute\(s, r, l\)\{  
ACTG,  
if \(l == r\) \{  
ACGT,  
a.push\(s\);  
ATCG,  
\} else \{  
ATGC,  
for \(let i = l; i \<= r; i++\)\{  
AGTC,  
s = swap\(s, l, i\);  
AGCT,  
permute\(s, r, l+1\);  
CATG,  
s = swap\(s, l, i\);  
CAGT,  
\}  
CTAG,  
\}  
\}  
CTGA,  
CGTA,  
function swap\(s, i, j\)\{  
CGAT,  
let c = s.split\(""\);  
TCAG,  
let t = c\[i\];  
TCGA,  
c\[i\] = c\[j\];  
TACG,  
c\[j\] = t;  
TAGC,  
return \(c\).join\(""\);  
TGAC,  
\}  
TGCA,  
GCTA,  
let s = "ACTG";  
GCAT,  
let n = s.length;  
GTCA,  
permute\(s, n-1, 0\);  
GTAC,  
print\(a\);  
GATC,  
GACT  
This code generates all possible permutations of a given string and stores them in an  
array a. It follows a recursive approach to generate these permutations. The code starts by  
initializing an empty array a to store the permutations. Next, there is a function permute  
that takes three arguments\: s \(the string to be permuted\), r \(the right index\), and l \(the left  
index\). Next, it checks if l is equal to r, which means that the string is fully permuted. If  
so, it adds the permuted string s to the array a. If l is not equal to r, the function enters  
a loop that iterates from l to r. Inside the loop, it swaps characters in the string s and  
recursively calls permute with the updated string to permute the remaining characters. 172 10 Moderate Examples  
After the recursive call, it swaps the characters back to their original positions. There is  
also a swap function that takes a string s and two indices i and j. It converts the string  
to an array, swaps the characters at indices i and j, and then converts the array back to  
a string. The code defines a string s with the initial value “ACTG” and calculates its  
length n. Overall the implementation calls the permute function with the string s, the right  
index n-1, and the left index 0 to start the permutation process. Once all permutations are  
generated the array a is shown.  
10.6.2  
Ex. \(193\) – Get all permutations of a given string \(II\)  
b = \[\];  
Output\:  
function permute\(s, a\)\{  
ABC,  
if \(s.length == 0\)\{b.push\(a\);\}  
ACB,  
BAC,  
for\(let i = 0 ;i \< s.length; i++\)\{  
BCA,  
let c = s\[i\];  
CAB,  
let l = s.slice\(0,i\); // left  
CBA  
let r = s.slice\(i+1\); // right  
let q = l + r;  
permute\(q, a + c\);  
\}  
\}  
let s= 'ABC';  
let a=  
'';  
permute\(s, a\);  
print\(b\);  
Here, there is an array b initialized as an empty array. The code defines a function  
named permute, which takes two arguments, s and a. The purpose of this function is to  
generate all permutations of a given string s. It does this by recursively permuting the  
characters of the string and collecting the permutations in the array b. Within the permute  
function a few statements allow for the permutations. If the input string s is empty, it  
means a permutation has been successfully formed, and it pushes the current permutation  
a into the b array. Otherwise, it iterates over the characters in the string s. For each  
character c at index i, it splits the string into two parts, l \(the characters to the left of c\)  
and r \(the characters to the right of c\). Also, it constructs a new string q by combining l  
and r, effectively removing c from the string. Also, calls the permute function recursively  
with the modified string q and the current permutation a + c. After defining the permute  
function, the code initializes a string s with the value “ABC” and an empty string a. Then,  
it calls the permute function with these values, effectively generating all permutations of  
the string “ABC” and collecting them in the b array. Next, it prints the array b to the  
console for the user inspection, which contains all the permutations of the string “ABC”. 10.7 Statistics 173  
10.7 Statistics  
Statistics is a discipline that lies at the heart of understanding and interpreting data.  
It is the science of collecting, organizing, analyzing, interpreting, and presenting data  
to gain insights and make informed decisions. In a world inundated with information,  
statistics serves as a crucial tool for both scientists and decision-makers, allowing us to  
extract meaningful patterns and knowledge from the vast array of data that surrounds  
us. Statistics is not just a collection of mathematical techniques; it is a powerful way of  
thinking, one that permeates various fields, from science and social sciences to economics  
and business. Statistics is everywhere, from mathematics to biology \[2–4\]. Whether it is  
predicting trends, testing hypotheses in science, or making informed policy decisions,  
statistics provides the framework for evidence-based reasoning. It helps us answer ques-  
tions, validate assumptions, and draw meaningful conclusions from raw data, contributing  
to the advancement of knowledge and informed decision-making. Understanding statis-  
tics is not only beneficial for researchers and analysts but also for everyday individuals  
looking to navigate the increasingly data-driven world effectively.  
10.7.1  
Ex. \(194\) – Return an array with proportions \(relative frequencies\)  
let a = \[5, 1, 8, 4, 6, 2, 9, 8\];  
Output\:  
print\(p\(a\)\);  
56%,11%,89%,44%,  
67%,22%,100%,89%  
function p\(a\)\{  
let max = Math.max.apply\(null, a\);  
let n = a.length;  
let m = 100;  
let t = \[\];  
for\(let i=0; i\<n; i++\)\{  
t\[i\] = \(m/max\) \* a\[i\];  
t\[i\] = Math.round\(t\[i\]\) + '%';  
\}  
return t;  
\} 174 10 Moderate Examples  
This code starts by defining an array named a, which contains a list of numeric values.  
Next, it calls a function named p with a as an argument and prints the result. The p func-  
tion takes an array a as its parameter and performs a number of steps. First, it calculates  
the maximum value in the input array a using Math.max.apply\(null, a\) and stores it in a  
variable named max. Next, it determines the length of the input array a and stores it in  
a variable named n. Also, it initializes a variable m with the value 100. Next, it creates  
an empty array t to store the transformed values. The function enters a loop that iterates  
over each element in the input array a. Inside the loop, it calculates a new value for each  
element in t. The new value is calculated by scaling the original value \(a\[i\]\) by the ratio  
of m to max. Then it rounds the result to the nearest integer and appends the “%” sign  
to it before storing it in the array t. The function returns the array t, which contains the  
transformed values of the input array a, expressed as percentages.  
10.7.2  
Ex. \(195\) – Average, standard deviation and coeficient of variation  
let a = \[5, 1, 8, 4, 6, 2, 8, 9\];  
Output\:  
let b = stat\(a\)  
5.375,  
print\(b\)  
2.9246489410818914,  
0.5441207332245379  
function stat\(a\)\{  
let n = a.length;  
let b = 0;  
let e = 0;  
let r = \[\];  
r\[0\] = 0; // AV  
r\[1\] = 0; // SD  
r\[2\] = 0; // CV  
for\(var j=0; j\<n; j++\)\{  
b += a\[j\];  
\}  
r\[0\] = b/n;  
for\(var j=0; j\<n; j++\)\{  
e += Math.pow\(\(a\[j\] - r\[0\]\), 2\);  
\}  
r\[1\] = Math.sqrt\(e/\(n-1\)\);  
r\[2\] = r\[1\]/r\[0\];  
return r;  
\} 10.7 Statistics 175  
The above example performs statistical calculations on an array a and then calls the  
stat function with the array. The code starts by defining an array a with a list of numerical  
values. Then, the code initializes a variable b to 0 and another variable e to 0. Addition-  
ally, it creates an array r with three elements for storing statistical results, namely for  
the average \(AV; mathematically denoted as x\), standard deviation \(SD; mathematically  
denoted as σ\), and the coefficient of variation \(CV; mathematically denoted as Cv\)\:  
x =  
∑n  
i=1 xi  
n  
=  
∑n−1  
i=0 a\[i \]  
n  
b  
=  
= r \[0\]  
n  
σ = /∑n  
i=1\(xi − x\)2  
n − 1= /∑n−1  
i=0 \(a\[i \] − r \[0\]\)2  
n − 1= /e  
n − 1  
= r \[1\]  
σ  
Cv =  
=  
x  
r \[1\]  
r \[0\]  
= r \[2\]  
For the expressions shown above, please observe the progressive replacement and corre-  
lation with the variables from the code. The for-loop iterates through each element in the  
array a to calculate the sum of all values, which is stored in variable b. Next, the average  
\(AV\) is calculated by dividing the sum b by the total number of elements in the array \(n\),  
and the result is stored in r\[0\]. The code then proceeds to calculate the sum of squared  
differences from the average \(e\) for each element in the array. This step is essential for  
calculating the standard deviation \(SD\). The standard deviation \(SD\) is calculated as the  
square root of the sum of squared differences from the average, divided by \(n-1\). The  
result is stored in r\[1\]. The coefficient of variation \(CV\) is calculated as the ratio of the  
standard deviation to the average \(r\[1\]/r\[0\]\). The r array, which now contains the calcu-  
lated statistical values, is returned by the stat function. Thus, the code prints the result,  
which is the r array returned by the stat function, to the console using the print function.  
Note that the stat function is essentially used to compute and return statistical informa-  
tion about the input array a, including the average, standard deviation, and coefficient of  
variation. 176 10 Moderate Examples  
10.7.3  
Ex. \(196\) – Pearson correlation coefficient  
let a = \[6, 8, 10\];  
Output\:  
let b = \[12, 10, 20\];  
0.7559  
print\(p\(a,b\)\);  
function p\(a,b\)\{  
let n = a.length;  
let m = \[\];  
m\[0\] = 0;  
m\[1\] = 0;  
for\(let i=0; i\<n; i++\)\{  
m\[0\] += a\[i\];  
m\[1\] += b\[i\];  
\}  
m\[0\] = m\[0\] / n; // mean a  
m\[1\] = m\[1\] / n; // mean b  
let s0 = 0;  
let s1 = 0;  
let s2 = 0;  
for\(let i=0; i\<n; i++\)\{  
s0 += \(a\[i\]-m\[0\]\)\*\(b\[i\]-m\[1\]\);  
s1 += Math.pow\(a\[i\]-m\[0\], 2\);  
s2 += Math.pow\(b\[i\]-m\[1\], 2\);  
\}  
r = s0 / Math.sqrt\(s1 \* s2\);  
return r;  
\}  
Here, the code begins by initializing two arrays, a and b, each containing three numeric  
values. The purpose of this code is to calculate the Pearson correlation coefficient between  
these two arrays, which is a statistical measure of the linear relationship between two  
datasets. The core of the calculation is performed in the p function. Inside this function,  
the length of the arrays is stored in the variable n. Two arrays, m and s0, are initialized  
to store intermediate values during the calculation. First, the means \(averages\) of arrays  
a and b are computed. The sum of all values in a is accumulated in m\[0\], and the sum of  
all values in b is accumulated in m\[1\]. These sums are then divided by n to calculate the  
mean of each array. The next step involves calculating the Pearson correlation coefficient,  
namely r\:  
r =  
∑n  
i=1\[\(xi − x\)\(yi − y\)\]  
/∑n  
i=1\(xi − x\)2 × /∑n  
i=1\(yi − y\)2 10.7 Statistics 177  
Where xi is a sample from the first data set, yi is the sample from the second data set,  
x is the mean of the values from the first data set, y is the mean of the values from  
the second data set, and finally n is the total number of samples from either data set  
\(because they are equal\). The formula for r looks complicated, however, the code will  
show the reader a different story. Thus, the above mathematical formula is computed by  
using three accumulators\: s0, s1, and s2. Variable s0 accumulates the sum of the products  
of the differences between each element of a and b from their respective means. On the  
other hand, variable s1 accumulates the sum of the squared differences of each element  
in a from its mean, and s2 accumulates the sum of squared differences for each element  
in b from its mean. With these intermediate values, the Pearson correlation coefficient \(r\)  
is computed as the ratio of s0 divided by the square root of the product of s1 and s2\:  
r =  
s0  
s1 × s2  
n  
s0 =  
∑  
\[\(xi − x\)\(yi − y\)\] =  
i=1  
n−1  
∑  
\[\(a\[i \] − m\[0\]\)\(b\[i \] − m\[1\]\)\]  
i=0  
s1 =  
┌ | | √n  
∑  
\(xi − x\)2  
i=1  
= Math.sqr t\(n−1  
∑  
i=0  
=  
┌ | | √n−1  
∑  
\(a\[i \] − m\[0\]\)2  
i=0  
=  
┌ | Math.pow\(a\[i \] − m\[0\], 2\)\)  
| √n−1  
∑  
i=0  
Math.pow\(a\[i \] − m\[0\], 2\)  
s2 =  
┌ | | √n  
∑  
\(yi − y\)2  
i=1  
= Math.sqr t\(n−1  
∑  
i=0  
=  
┌ | | √n−1  
∑  
\(b\[i \] − m\[1\]\)2  
i=0  
=  
┌ | Math.pow\(b\[i \] − m\[1\], 2\)\)  
| √n−1  
∑  
i=0  
Math.pow\(b\[i \] − m\[1\], 2\)  
Note the progressive replacement in the formulas with Javascript methods like  
Math.sqrt and Math.pow. This coefficient measures the strength and direction of the linear  
relationship between the two arrays. A positive value of r indicates a positive correlation,  
a negative r indicates a negative correlation, and r close to 0 indicates a weak or no  
linear correlation. The result of the Pearson correlation coefficient calculation is returned  
from the p function, and then is printed in the output. In other words, the Pearson corre-  
lation coefficient, often denoted as “r,” it is a common and very important method used  
to determine how closely two variables are linearly related, with values ranging from -1  
\(perfect negative correlation\) to 1 \(perfect positive correlation\), and 0 indicating no linear  
correlation. 178 10 Moderate Examples  
10.7.4  
Ex. \(197\) – Vertical chart from the array with pre-declared values  
let a = \[5, 2, 8, 4, 6, 12, 8, 9\];  
Output\:  
let m = 10;  
let t = \[\];  
let n = a.length;  
let max = Math.max.apply\(null, a\);  
for\(let j=0; j\<m; j++\)\{  
t\[m-j-1\] = \[\];  
for\(let i=0; i\<n; i++\)\{  
f = Math.floor\(\(m / max\) \* a\[i\]\);  
░░░░░▓░░  
░░░░░▓░░  
░░░░░▓░░  
░░░░░▓░▓  
░░▓░░▓▓▓  
░░▓░▓▓▓▓  
▓░▓░▓▓▓▓  
▓░▓▓▓▓▓▓  
▓░▓▓▓▓▓▓  
▓▓▓▓▓▓▓▓  
t\[m-j-1\]\[i\] = '\\u2591';  
if\(j \< f\)\{t\[m-j-1\]\[i\] = '\\u2593';\}  
\}  
\}  
print\(SMC\(t\)\);  
function SMC\(m\) \{  
let r =  
'';  
for\(let i=0; i\<m.length; i++\) \{  
for\(let j=0; j\<m\[i\].length; j++\) \{  
r += m\[i\]\[j\];  
\}  
r += "\\n";  
\}  
return r;  
\}  
The application from above shows how an ASCII \(American Standard Code for Infor-  
mation Interchange\)/UTF-8 chart can be made in the console, with no sophisticated  
graphical interfaces. The code operates on an array a, which contains a list of numerical  
values. It also initializes some variables and a 2D array t used for generating a graphical  
representation of the data. Next, the code calculates the maximum value within array a  
using Math.max.apply and stores it in the max variable. A double for-loop is used to pop-  
ulate the 2D array t. The outer loop iterates from 0 to m − 1, and the inner loop iterates  
from 0 to n − 1, where m is a scalar variable and n is the length of array a. Inside the  
inner loop, the code calculates the value f using the formula \(m/max\) × a\[i\], and then it  
assigns the corresponding character \(“\\u2591” or “\\u2593”\) to the t array based on the  
relationship between j and f . The character “\\u2591” represents a light shade block, and  
“\\u2593” represents a dark shade block, so this code is essentially generating a bar graph  
where the darkness of the blocks represents the relative magnitude of the values in the  
array a. After the construction of the 2D array t, it calls the SMC function to convert  
the array into a string format that visually represents the data in the console for user  
inspection. 10.7 Statistics 179  
10.7.5  
Ex. \(198\) – Vertical chart from array with random values at each run  
let a = \[\];  
Output\:  
let n = 9;  
for\(let k=0; k\<n; k++\)\{  
a\[k\] = Math.floor\(Math.random\(\) \* 100\);  
\}  
print\(SMC\(chart\(a\)\)\);  
print\('\\n' + a\);  
function chart\(a\)\{  
let m = 9;  
░░░░▓░░░░\_9  
▓░░░▓░░░░\_8  
▓░░░▓▓▓░░\_7  
▓░▓▓▓▓▓░░\_6  
▓░▓▓▓▓▓▓░\_5  
▓░▓▓▓▓▓▓░\_4  
▓░▓▓▓▓▓▓▓\_3  
▓░▓▓▓▓▓▓▓\_2  
▓▓▓▓▓▓▓▓▓\_1  
|||||||||  
let t = \[\];  
let max = Math.max.apply\(null, a\);  
123456789  
for\(let j=0; j\<m; j++\)\{  
79,17,61,61,95,  
t\[m-j-1\] = \[\];  
71,70,56,70,30  
for\(let i=0; i\<n; i++\)  
\{  
f = Math.floor\(\(m/max\) \* a\[i\]\);  
t\[m-j-1\]\[i\] = '\\u2591';  
if\(j \< f\)\{t\[m-j-1\]\[i\] = '\\u2593';\}  
\}  
\}  
return t;  
\}  
function SMC\(a\) \{  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(let i=0; i\<n+2; i++\) \{  
for\(let j=0; j\<m; j++\) \{  
if\(i\<n\)\{r += a\[i\]\[j\];\}  
if\(i==n\)\{r += '|';\}  
if\(i\>n\)\{r += j+1;\}  
\}  
if\(i==n\)\{r += '\\n';\}  
if\(i\<n\)\{r += "\_" + \(n-i\) + "\\n";\}  
\}  
return r;  
\} 180 10 Moderate Examples  
Compared to the previous example, the new implementation brings the ASCII axis for  
this chart and the ability to view the chart with different values each time the code is run.  
Thus, the given code creates a visual representation of data in the form of a bar chart  
using ASCII characters. The code begins by declaring an empty array a and a variable  
n with a value of 9. A for-loop iterates from 0 to n–1 \(0 to 8 in this case\), generating  
random integer values between 0 and 99 using Math.random\(\) \* 100 and stores them in  
the array a. The code prints the result of the SMC\(chart\(a\)\) function, which generates  
a bar chart from the array a and then prints a visual representation of the chart. The  
chart\(a\) function is defined next. It takes an array a as its parameter. Inside the function,  
it initializes variables m and t, and it calculates the maximum value in the array a by  
using Math.max.apply\(null, a\). A nested for-loop constructs the visual representation of  
the bar chart, using Unicode block characters \(▓ and ░\) to represent the data. The result  
is stored in the t array, which is returned at the end. The SMC\(a\) function is defined  
to create a string representation of the bar chart. It takes an array a as its parameter,  
representing the bar chart. It calculates the dimensions of the chart, initializes an empty  
string r, and then constructs the chart using nested loops. The loops iterate through the  
array a and construct the chart row by row, with underscores \(“\_”\) at the bottom, “|” to  
separate the data from the labels, and labels for each column at the top. The resulting  
string r represents the bar chart and is then returned. In the end, the code prints the chart  
using print\(SMC\(chart\(a\)\)\), followed by a new line character and a display of the original  
data array a.  
10.7.6  
Ex. \(199\) – Shannon entropy  
print\(entropy\('uiuhd87wqsaidhsad'\)\)  
Output\:  
function entropy\(c\)\{  
3.21  
let a = alpha\(c\);  
let n = a.length;  
let k = c.length;  
let e = 0;  
let r =  
'';  
let l =  
'';  
for\(let i=0; i\<=n-1; i++\)\{  
r = c.replace\(new RegExp\(a\[i\], 'g'\),''\).length;  
l = a\[i\];  
a\[i\]=\(k-r\)/k;  
//e += -\(a\[i\]\*Log\(2,a\[i\]\)\);  
e += \(a\[i\]\*Log\(2,\(1/a\[i\]\)\)\);  
\}  
return e;  
\} 10.7 Statistics 181  
function alpha\(c\)\{ //ALPHABET DETECTION  
let a = \[\];  
let t = c.split\(''\);  
let k = t.length;  
for\(let i=0; i\<=k; i++\)\{  
var q = 1;  
for\(let j=0; j\<=a.length; j++\)\{  
if \(t\[i\] === a\[j\]\) \{q = 0;\}  
\}  
if \(q === 1\) \{a.push\(t\[i\]\);\}  
\}  
return a;  
\}  
function Log\(n, v\) \{  
return Math.log\(v\) / Math.log\(n\);  
\}  
The provided code calculates the entropy of a given string and then calls the entropy  
function with the string “uiuhd87wqsaidhsad”. The entropy function is defined to calcu-  
late the entropy of a given string c. It starts by calling another function, alpha\(c\), which is  
responsible for detecting the alphabet \(unique characters\) in the input string and returns  
an array of unique characters. This array is used in subsequent calculations. Inside the  
entropy function, the length of the alphabet is determined by the number of unique char-  
acters \(stored in variable n\), and the total length of the input string is stored in k. The  
function initializes variables for entropy e, a temporary result string r, and a temporary  
character l. The main loop then iterates through each unique character in the alphabet  
\(represented by a\[i\]\). For each character, it calculates how many times that character  
appears in the input string c by using a regular expression. The result is stored in r. The  
character a\[i\] is then temporarily stored in l. The formula \(k – r\)/k is used to calculate the  
probability of that character occurring in the input string. The formula for entropy calcu-  
lation is then applied, which is essentially the sum of – \(p \* log2\(p\)\) for the probability  
p of each character. The alpha function is responsible for alphabet detection. It initializes  
an empty array a and splits the input string c into an array of characters t. It then iterates  
through t to find unique characters and appends them to the array a. Next, there is a utility  
function Log\(n, v\) that calculates the logarithm of v with base n. It is used to calculate  
the entropy. Thus, the code is structured to compute the entropy of the input string, given  
the alphabet \(unique characters\) within it. The result is returned by the entropy function,  
and in this specific case, it is printed to the console using the print function. 182 10 Moderate Examples  
10.8 Useful conversions  
Conversions between various numerical and text representations are essential in com-  
puter science, programming, and digital communication. These conversions enable us to  
translate data between different formats, making it more accessible, and adaptable for  
specific applications. Among the most fundamental and commonly used conversions are  
those between hexadecimal \(hex\), text, decimal, and binary representations \[1\]. In this  
subchapter, we will explore the significance and utility of these conversions, highlight-  
ing their relevance in various aspects of computing and data manipulation. Whether it is  
about encoding characters into binary for digital storage or translating numeric data into  
a human-readable format, understanding these conversions is crucial for anyone working  
with digital information.  
10.8.1  
Ex. \(200\) – Text \(txt\) to hexadecimal \(hex\)  
// txt to hex  
Output\:  
let a = ".\~ text";  
2e,7e,20,74,65,78,74  
let b =  
'';  
let c = \[\];  
for \(let i=0; i\<a.length; i++\) \{  
b = a.charCodeAt\(i\).toString\(16\);  
c\[i\] = b.length \< 2 ? "0" + b \: b;  
//if\(b.length \< 2\)\{  
// c\[i\] = "0" + b;  
//\} else \{  
// c\[i\] = b;  
//\}  
\}  
print\(c\); 10.8 Useful conversions 183  
A conversions of text to hexadecimal representation is shown here. The code takes a  
string a containing characters and converts it into a hexadecimal representation. It starts  
by defining three variables\: a to store the input string “. \~ text,” b to store temporary val-  
ues during the conversion, and c to store the hexadecimal value of each character. Then,  
it enters a for-loop that iterates through each character in the string a. Inside the loop,  
it uses the charCodeAt method to get the Unicode code point of the current character,  
and then it converts that code point to a hexadecimal string using toString\(16\). The code  
checks if the resulting hexadecimal string b has a length less than 2. If it does, it adds a  
leading “0” to ensure that the hexadecimal representation always consists of two charac-  
ters. The resulting two-character hexadecimal value is then assigned to the corresponding  
index in the c array. Thus, the code prints the c array, which contains the hexadecimal  
representations of the characters from a.  
10.8.2  
Ex. \(201\) – A txt to hex from array a to array b  
// txt to hex from array a to  
Output\:  
// array b element corespondence  
2e,7e,20,74,65,78,74  
let a = ".\~ text".split\(''\);  
let b = \[\];  
for \(let i=0; i\<a.length; i++\) \{  
b\[i\] = a\[i\].charCodeAt\(0\).toString\(16\);  
b\[i\] = b\[i\].length \< 2 ? "0" + b\[i\] \: b\[i\];  
\}  
print\(b\); 184 10 Moderate Examples  
The code from above is a version of the previous example and it involves arrays instead  
of strings. The implementation is designed to convert characters from an array a into their  
corresponding hexadecimal representations and store them in an array called b. The code  
starts by initializing an array a by splitting the string “. \~ text” into individual characters  
and storing them as elements in the array. An empty array b is also initialized. A for-loop  
is used to iterate through the elements of array a. Inside the loop two events take place.  
For each character in a, the charCodeAt\(0\) method is used to retrieve the Unicode code  
point of the character, and .toString\(16\) is then applied to convert it to its hexadecimal  
representation. The result of the conversion is stored in the corresponding index of array  
b. A conditional statement is used to check if the hexadecimal representation has only  
one character. If it does, a leading “0” is added to ensure that all representations are two  
characters long. Next, the code prints array b to the console for user inspection, which  
contains the hexadecimal representations of the characters in the array a.  
10.8.3  
Ex. \(202\) – A txt to hex with in-place replacement  
// txt to hex by replacing each character with //  
Output\:  
the hex code in the same element of the array  
2e,7e,20,74,65,78,74  
let a = ".\~ text".split\(''\);  
for \(let i=0; i\<a.length; i++\) \{  
a\[i\] = a\[i\].charCodeAt\(0\).toString\(16\);  
a\[i\] = a\[i\].length \< 2 ? "0" + a\[i\] \: a\[i\];  
\}  
print\(a\);  
Here, a small optimisation is shown, that is able to use a single array and a conversion  
in place. As before, the code begins by defining an array a which is initialized by splitting  
the string “. \~ text” into individual characters and storing them as separate elements in the  
array. A for-loop is then employed to iterate through the elements of the array a. Inside  
the for-loop, the conversion of a\[i\] is done in place, i.e. replacing the original value in  
a\[i\] with the hexadecimal value. Next, the array a is printed. 10.8 Useful conversions 185  
10.8.4  
Ex. \(203\) – A txt to hex in a function that receives an as argument  
// txt to hex by in a function  
Output\:  
// that recives a as argument  
2e,7e,20,74,65,78,74  
let a = ".\~ text".split\(''\);  
print\(hex\(a\)\);  
function hex\(a\)  
\{  
for \(let i in a\)  
\{  
a\[i\] = a\[i\].charCodeAt\(0\).toString\(16\);  
a\[i\] = a\[i\].length \< 2 ? "0" + a\[i\] \: a\[i\];  
\}  
return a;  
\}  
The current example is the same as the previous one, however, the difference is that  
a hex function with a parameter a, embeds the for-loop. In the code outside the function,  
there is an array a initialized with the characters of the string “. \~ text” split into individual  
characters. Then, it calls the hex\(a\) function with this array as an argument and prints the  
result to the console for user inspection.  
10.8.5  
Ex. \(204\) – Multiple functions for any to any conversion  
let a =  
"☁Ѐ.\~ text".split\(''\);  
print\('Array a = ' + a\);  
10.8.5  
print\('txt\_hex = ' + txt\_hex\(a\)\);  
print\('hex\_bin = ' + hex\_bin\(a\)\);  
print\('bin\_dec = ' + bin\_dec\(a\)\);  
print\('dec\_txt = ' + dec\_txt\(a\)\);  
print\('txt\_bin = ' + txt\_bin\(a\)\);  
print\('bin\_hex = ' + bin\_hex\(a\)\);  
print\('hex\_dec = ' + hex\_dec\(a\)\);  
print\('dec\_bin = ' + dec\_bin\(a\)\);  
print\('bin\_txt = ' + bin\_txt\(a\)\);  
print\('txt\_dec = ' + txt\_dec\(a\)\);  
print\('dec\_hex = ' + dec\_hex\(a\)\);  
print\('hex\_txt = ' + hex\_txt\(a\)\); 186 10 Moderate Examples  
function txt\_hex\(a\)  
\{  
for \(let i in a\) \{  
a\[i\] = a\[i\].charCodeAt\(0\).toString\(16\);  
a\[i\] = a\[i\].length \< 2 ? "0" + a\[i\] \: a\[i\];  
\}  
return a;  
\}  
\{  
function txt\_bin\(a\)  
for \(let i in a\) \{  
a\[i\] = a\[i\].charCodeAt\(0\).toString\(2\);  
\}  
return a;  
\}  
function hex\_txt\(a\)  
\{  
for \(let i in a\) \{  
a\[i\] = parseInt\(a\[i\], 16\);  
a\[i\] = String.fromCharCode\(a\[i\]\);  
\}  
return a;  
\}  
function hex\_bin\(a\)  
\{  
for \(let i in a\) \{  
a\[i\] = parseInt\(a\[i\], 16\).toString\(2\);  
\}  
return a;  
\}  
function hex\_dec\(a\)  
\{  
a = hex\_txt\(a\);  
for \(let i in a\) \{  
a\[i\] = a\[i\].charCodeAt\(0\);  
\}  
return a;  
\}  
function bin\_hex\(a\)  
\{  
for \(let i in a\) \{  
a\[i\] = parseInt\(a\[i\], 2\).toString\(16\);  
\} 10.8 Useful conversions 187  
return a;  
\}  
\{  
function bin\_txt\(a\)  
for \(let i in a\) \{  
a\[i\] = parseInt\(a\[i\], 2\);  
a\[i\] = String.fromCharCode\(a\[i\]\);  
\}  
return a;  
\}  
\{  
function bin\_dec\(a\)  
a = bin\_txt\(a\);  
for \(let i in a\) \{  
a\[i\] = a\[i\].charCodeAt\(0\);  
\}  
return a;  
\}  
function dec\_hex\(a\)  
\{  
a = dec\_txt\(a\);  
a = txt\_hex\(a\);  
return a;  
\}  
\{  
function dec\_txt\(a\)  
for \(let i in a\) \{  
a\[i\] = String.fromCharCode\(a\[i\]\);  
\}  
return a;  
\}  
\{  
function dec\_bin\(a\)  
a = dec\_txt\(a\);  
a = txt\_bin\(a\);  
return a;  
\} 188 10 Moderate Examples  
Output\:  
Array a = ☁,Ѐ,.,\~, ,t,e,x,t  
txt\_hex = 2601,400,2e,7e,20,74,65,78,74  
hex\_bin = 10011000000001,10000000000,101110,1111110,  
100000,1110100,1100101,1111000,1110100  
bin\_dec = 9729,1024,46,126,32,116,101,120,116  
dec\_txt = ☁,Ѐ,.,\~, ,t,e,x,t  
txt\_bin = 10011000000001,10000000000,101110,1111110,  
100000,1110100,1100101,1111000,1110100  
bin\_hex = 2601,400,2e,7e,20,74,65,78,74  
hex\_dec = 9729,1024,46,126,32,116,101,120,116  
dec\_bin = 10011000000001,10000000000,101110,1111110,  
100000,1110100,1100101,1111000,1110100  
bin\_txt = ☁,Ѐ,.,\~, ,t,e,x,t  
txt\_dec = 9729,1024,46,126,32,116,101,120,116  
dec\_hex = 2601,400,2e,7e,20,74,65,78,74  
hex\_txt = ☁,Ѐ,.,\~, ,t,e,x,t  
In the previous examples the narrative of the code reached the point of function for-  
mation. Here, the code performs a series of character data conversions between different  
representations, such as hexadecimal, binary, decimal, and plain text. It starts by initial-  
izing a string variable a with the value “☁Ѐ. \~ text” and then splits it into an array of  
individual characters. The code then proceeds to print the original array a using the print  
function. Following this, there are a series of conversion functions defined to transform  
the character data within the array a. Each function serves a specific purpose. The txt  
hex\(a\) function converts each character in the input array a into its hexadecimal represen-  
tation. It does so by utilizing the charCodeAt\(0\) method to obtain the character Unicode  
code point and then converting it to hexadecimal format. Next, the txt bin\(a\) function  
converts each character in the input array a into its binary representation. It also employs  
the charCodeAt\(0\) method to obtain the character Unicode code point and then converts  
it to binary format. Next, the txt dec\(a\) function, conversely, converts each character in  
the input array a into its decimal representation. It directly acquires the Unicode code  
point of each character. Next, the hex txt\(a\) function converts each hexadecimal value  
in the input array a back into its corresponding character. It does so by parsing the hex-  
adecimal string and then using String.fromCharCode\(\) to get the character. Next, the hex  
bin\(a\) function converts each hexadecimal value in the input array a into its binary rep-  
resentation. It parses the hexadecimal string and subsequently converts it to binary. The  
hex dec\(a\) function converts each hexadecimal value in the input array a into its dec-  
imal representation. It first transforms the hexadecimal string into a character and then  
retrieves its Unicode code point. Next, the bin hex\(a\) function converts each binary value  
in the input array a into its hexadecimal representation. It parses the binary string and  
then converts it to hexadecimal. Next, the bin txt\(a\) function converts each binary value 10.8 Useful conversions 189  
in the input array a into its corresponding character. It parses the binary string and uses  
String.fromCharCode\(\) to obtain the character. Lastly, the bin dec\(a\) function closes the  
circle of conversions from anything to anything. It converts each binary value in the input  
array a into its decimal representation. The function first transforms the binary string into  
a character and then retrieves its Unicode code point. The code finally applies these con-  
version functions to the array a, one by one, and prints the results for each conversion.  
This code demonstrates how to manipulate character data in various formats, showcasing  
the flexibility of JavaScript in handling different representations of text characters.  
10.8.6  
Ex. \(205\) – One function for any to any conversion and input type detection  
let a =  
"☁Ѐ.\~ text".split\(''\);  
print\('Array a = ' + a\);  
print\(convert\_to\('bin', a\)\);  
function convert\_to\(h, a\)  
\{  
let n = a.length;  
let t = 0;  
for \(let i in a\) \{  
t += a\[i\].length;  
\}  
t = t / n;  
let q = 'txt';  
if\(t == 1\)\{q = 'txt';\}  
if\(t \>= 2 && t \< 3\)\{q = 'hex';\}  
if\(t \>= 3 && t \< 4\)\{q = 'dec';\}  
if\(t \>= 4\)\{q = 'bin';\}  
if\(q == h\)\{return a;\}  
for \(let i in a\) \{ 190 10 Moderate Examples  
switch \(q + '\_' + h\) \{  
case 'txt\_hex'\:  
a\[i\] = a\[i\].charCodeAt\(0\).toString\(16\);  
a\[i\] = a\[i\].length \< 2 ? "0" + a\[i\] \: a\[i\];  
break;  
case 'dec\_hex'\:  
a\[i\] = String.fromCharCode\(a\[i\]\);  
a\[i\] = a\[i\].charCodeAt\(0\).toString\(16\);  
a\[i\] = a\[i\].length \< 2 ? "0" + a\[i\] \: a\[i\];  
break;  
case 'txt\_bin'\:  
a\[i\] = a\[i\].charCodeAt\(0\).toString\(2\);  
break;  
case 'txt\_dec'\:  
a\[i\] = a\[i\].charCodeAt\(0\);  
break;  
case 'hex\_dec'\:  
a\[i\] = String.fromCharCode\(parseInt\(a\[i\], 16\)\);  
a\[i\] = a\[i\].charCodeAt\(0\);  
break;  
case 'bin\_dec'\:  
a\[i\] = String.fromCharCode\(parseInt\(a\[i\], 2\)\);  
a\[i\] = a\[i\].charCodeAt\(0\);  
break;  
case 'hex\_txt'\:  
a\[i\] = String.fromCharCode\(parseInt\(a\[i\], 16\)\);  
break;  
case 'bin\_txt'\:  
a\[i\] = String.fromCharCode\(parseInt\(a\[i\], 2\)\);  
break;  
case 'dec\_txt'\:  
a\[i\] = String.fromCharCode\(a\[i\]\);  
break;  
case 'dec\_bin'\:  
a\[i\] = String.fromCharCode\(a\[i\]\);  
a\[i\] = a\[i\].charCodeAt\(0\).toString\(2\);  
break;  
case 'hex\_bin'\:  
a\[i\] = parseInt\(a\[i\], 16\).toString\(2\);  
break;  
case 'bin\_hex'\:  
a\[i\] = parseInt\(a\[i\], 2\).toString\(16\);  
\}  
\}  
return a;  
\}  
Output\:  
Array a = ☁,Ѐ,.,\~, ,t,e,x,t  
10011000000001,10000000000,101110,1111110,100000,1110100,1100101,1  
111000,1110100 10.8 Useful conversions 191  
Separate functions for one to one conversions are important pieces of code that can be  
used as they are in different contexts. However, what about only one function that can  
convert anything into anything? The following code is another implementation that per-  
forms character data conversions between different representations, such as hexadecimal,  
binary, decimal, and plain text, similar to the previous code. The code starts by initializing  
a string variable a with the value “☁Ѐ. \~ text” and then splits it into an array of individ-  
ual characters, just like in the previous version. Then, it uses the print function to display  
the original array a for user inspection and comparison. This time, instead of defining  
multiple conversion functions as in the previous version, this code defines a single func-  
tion called convert to\(h, a\). This function takes two arguments\: h, which represents the  
target conversion type \(e.g., “bin”, “hex”, “dec”, “txt”\), and a, which is the input array  
to be converted. Inside the convert to function, the code calculates the average length of  
characters in the input array a and determines the appropriate conversion type q based on  
this average length. It then checks if the target conversion type h is the same as the deter-  
mined q. If they are the same, it returns the input array a as there is no need to perform  
a conversion. If h is different from q, it iterates through the characters in the array and  
applies various conversion cases based on the combination of q and h. These cases cover  
conversions like text to hexadecimal, text to binary, decimal to text, etc. After performing  
the necessary conversions, the function returns the modified array a. This version of the  
code is more modular and concise than the previous one. It defines a single conversion  
function that handles all conversion cases dynamically based on the target and source  
types. The previous version defined multiple conversion functions, each with a specific  
purpose, making it longer and potentially harder to maintain. Both versions achieve the  
same goal of character data conversions, but this version encapsulates the logic within a  
single function, making it more versatile and adaptable to different conversion scenarios.  
Additionally, this version calculates the target conversion type dynamically based on the  
average character length, which is a feature not present in the previous version. Notice  
again that the input string type is identified by the first part of the function, which then  
triggers the conversion case. 192 10 Moderate Examples  
10.8.7  
Ex. \(206\) – Base64 encoding function  
// Base 64 encoding function  
Output\:  
var s = "ABC";  
QUJD  
var q = encodeBase64\(s\);  
print\(q\);  
function encodeBase64\(s\) \{  
var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef"  
"ghijklmnopqrstuvwxyz0123456789+/";  
var b =  
"";  
for \(var i = 0; i \< s.length; i++\) \{  
var c = s.charCodeAt\(i\).toString\(2\);  
while \(c.length \< 8\) \{  
c = "0" + c;  
\}  
b += c;  
\}  
// Pad the binary string to make  
// its length a multiple of 6  
while \(b.length % 6 !== 0\) \{  
b += "0";  
\}  
var r =  
"";  
for \(var i = 0; i \< b.length; i += 6\) \{  
var x = b.substr\(i, 6\);  
var d = parseInt\(x, 2\);  
r += a\[d\];  
\}  
// Add padding if necessary  
while \(r.length % 4 !== 0\) \{  
r += "=";  
\}  
return r;  
\}  
The code from above defines an encoding function called encodeBase64 that takes a  
string s as input and returns its Base64 encoding. The code starts by defining a string s  
with the value “ABC.” Next, it calls the encodeBase64 function with s as an argument and  
assigns the result to a variable q. The encodeBase64 function begins by initializing two  
strings, a and b. Variable a contains the Base64 encoding characters for uppercase letters,  
lowercase letters, numbers, and two special characters \(“+” and “/”\), whereas variable b  
is an empty string that will be used to store the binary representation of the characters  
in the input string. A for-loop iterates over each character in the input string s. Inside  
the loop, it converts each character to its binary representation \(8 bits\) and ensures that  
the binary representation is left-padded with zeros to make it exactly 8 bits long. The 10.8 Useful conversions 193  
binary representations are appended to the b string. After converting all characters to  
binary and appending them to b, the code checks if the length of b is not a multiple of  
6\. If not, it adds zeros to the end of b until its length becomes a multiple of 6. Then,  
the code initializes an empty string r, which will store the final Base64-encoded result.  
Another for-loop iterates over the binary string b in chunks of 6 bits at a time. It converts  
each 6-bit chunk back to decimal and uses the decimal value as an index to look up the  
corresponding Base64 character from the a string. The Base64 characters are appended  
to the r string. Thus, the code checks if the length of the r string is not a multiple of 4.  
If not, it adds “=” padding characters to the end of the r string until its length becomes a  
multiple of 4. The encodeBase64 function returns the Base64-encoded result r. The main  
part of the code concludes by printing the result q to the console, which is the Base64  
encoding of the input string “ABC.” Complex Examples  
# 11  
Complex examples in JavaScript represent the intricate and multifaceted aspects of this  
versatile programming language. As JavaScript has evolved over the years, it has become  
a powerful tool for web development, server-side scripting, and even desktop applica-  
tions. Whether it is about building interactive web applications, implementing complex  
algorithms, or integrating with external services, complex JavaScript examples showcase  
the adaptability of this language and its ability to tackle the demands of modern soft-  
ware development. In this exploration of complexity, developers can uncover innovative  
solutions and push the boundaries of what is achievable with JavaScript. The following  
examples demonstrate how JavaScript can be used to create sophisticated and dynamic  
science and engineering applications and manipulate data, among other advanced func-  
tionalities that can be integrated. Note that many of the coding strategies used in the  
examples of previous chapters will here be fully integrated into different contexts that  
allow the user to adapt to new cases.  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_11  
195 196 11 Complex Examples  
11.1.1  
Ex. \(207\) – Spectral forecast for signals  
// Spectral forecast for signals in Javascript  
var A ='10.3,23.4,44.8,63.2,44.1,35.1,46.5,62.6,50.4';  
var B ='18.8,43.1,52.2,45.5,46.8,46.6,67.9,66.3,70.4';  
var M =  
'';  
var tA = \[\];  
var tB = \[\];  
var tA = A.split\(','\);  
var tB = B.split\(','\);  
var maxA = Math.max.apply\(null, tA\);  
var maxB = Math.max.apply\(null, tB\);  
var max = Math.max\(maxA, maxB\)  
var d = 33;  
for\(var i=0; i \< tA.length; i++\) \{  
var v = \(\(d/maxA\)\*tA\[i\]\)+\(\(\(max-d\)/maxB\)\*tB\[i\]\);  
M += v.toFixed\(2\);  
if\(i \< tA.length-1\)\{M += ','\}  
\}  
print\('Signal A\:'+A\);  
print\('Max\(A\[i\]\)\:'+maxA\);  
print\('Signal M\:'+M\);  
print\('Signal B\:'+B\);  
print\('Max\(B\[i\]\)\:'+maxB\);  
Signal A\:10.3,23.4,44.8,63.2,44.1,35.1,46.5,62.6,50.4  
Max\(A\[i\]\)\:63.2  
Signal M\:15.37,35.12,51.12,57.17,47.89,43.08,60.35,67.91,63.72  
Signal B\:18.8,43.1,52.2,45.5,46.8,46.6,67.9,66.3,70.4  
Max\(B\[i\]\)\:70.4  
A spectral forecast implementation for signals is shown above. It processes two input  
signal arrays, A and B, and calculates a modified signal M based on certain mathematical  
operations \[1\]. That is, it creates a signal M that resembles signal A and B in a certain  
proportion set by variable d. The code initially begins by defining three variables\: A,  
B, and M. Variables A and B are initialized with comma-separated strings of numerical  
values, representing two input signals. Variable M is initialized as an empty string, which  
will store the modified signal. Two empty arrays, tA and tB, are declared. The code then  
uses the split\(\) method to split the strings A and B into arrays tA and tB, respectively, using  
commas as the delimiter. Next, it calculates the maximum values in the tA and tB arrays  
using the Math.max.apply\(\) method. The maximum values are stored in maxA and maxB 11 Complex Examples 197  
variables. The overall maximum value between maxA and maxB is calculated and stored  
in the max variable. Next, a variable d is initialized with the value 33. A for-loop is used  
to iterate through the elements of the tA array. Inside the loop, a variable v is calculated  
using a formula that involves scaling the elements of tA and tB by certain factors based  
on maxA, maxB, and d. The calculated value v is then appended to the M string with two  
decimal places using the toFixed\(2\) method. A comma is added to separate values in the  
M string only if it is not the last element. Post processing, the code prints the following  
information in the output\: \(i\) The original signal A. \(ii\) The maximum value found in A.  
\(iii\) The modified signal M. \(iv\) The original signal B. \(v\) The maximum value found in  
B.  
11.1.2  
Ex. \(208\) – Logic gate functions applied to matrix elements  
let a = \[  
Output\:  
\[1, 1, 1\],  
\[0, 1, 0\],  
0 1 0  
\[0, 1, 0\]  
0 1 0  
\];  
1 1 1  
let b = \[  
\[0, 1, 0\],  
\[1, 1, 1\],  
\[0, 1, 0\]  
\];  
let c = \[  
\[0, 0, 0\],  
\[0, 0, 0\],  
\[0, 0, 0\]  
\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(var i=0; i\<n; i++\) \{  
r += '\\n';  
for\(var j=0; j\<m; j++\) \{  
c\[i\]\[j\] = f\_xnor\(a\[i\]\[j\], b\[i\]\[j\]\)  
r += c\[i\]\[j\] + " ";  
\}  
\} 198 11 Complex Examples  
print\(r\);  
function f\_not\(a\)\{  
return 1 - a;  
\}  
function f\_and\(a, b\)\{  
return a \* b;  
\}  
function f\_or\(a, b\)\{  
return \(a + b\) - \(a \* b\);  
\}  
function f\_nand\(a, b\)\{  
return f\_not\(f\_and\(a, b\)\);  
\}  
function f\_nor\(a, b\)\{  
return f\_not\(f\_or\(a, b\)\);  
\}  
function f\_xor\(a, b\)\{  
return \(a + b\) - 2 \* \(a \* b\);  
\}  
function f\_xnor\(a, b\)\{  
return f\_not\(f\_xor\(a, b\)\);  
\}  
This example defines and performs operations on matrices a, b, and c using various  
logical functions. The code begins by initializing three matrices a, b, and c, where each  
matrix is represented as an array of arrays, containing numeric values. Variables n and  
m are set to the number of rows and columns in matrix a, respectively. An empty string  
r is initialized, which will be used to build a string representation of the result. Next, a  
nested for-loop is used to iterate over each element in matrices a and b. Inside the loop,  
the f xnor function is called with the corresponding elements from a and b. The result  
of the f xnor function is stored in the corresponding position of matrix c, and the result  
is also appended to the string r with a space. The f xnor function is defined to calculate 11 Complex Examples 199  
the XNOR \(exclusive NOR\) operation between two values. It calls the f xor function  
and then negates the result using the f not function. Below the main code logic, several  
logical functions are defined. Function f not\(a\) that returns the logical NOT operation  
of a value. Next, function f and\(a, b\) is defined, that returns the logical AND operation  
between two values. Also, function f or\(a, b\) is defined, that is able to return the logical  
OR operation between two values. Next, function f nand\(a, b\) returns the logical NAND  
operation between two values by combining the f and and f not functions. Next the f  
nor\(a, b\) function returns the logical NOR operation between two values by combining  
the f or and f not functions. Also, function f xor\(a, b\) is defined, that returns the logical  
XOR operation between two values. Lastly, the f xnor\(a, b\) function is defined, that is  
able to return the logical XNOR operation between two values by combining the f xor  
and f not functions.  
11.1.3  
Ex. \(209\) – The general logic gate based on a map  
let a = \[  
Output\:  
\[1, 1, 1\],  
\[0, 1, 0\],  
0 1 0  
\[0, 1, 0\]  
0 1 0  
\];  
1 1 1  
let b = \[  
\[0, 1, 0\],  
\[1, 1, 1\],  
\[0, 1, 0\]  
\];  
let c = \[\];  
let n = a.length;  
let m = a\[0\].length;  
let r =  
'';  
for\(var i=0; i\<n; i++\) \{  
r += '\\n';  
c\[i\] = \[\];  
for\(var j=0; j\<m; j++\) \{  
c\[i\]\[j\] = g\(a\[i\]\[j\], b\[i\]\[j\], 6\)  
r += c\[i\]\[j\] + " ";  
\}  
\} 200 11 Complex Examples  
print\(r\);  
// A B  
// t = 1 = AND  
// t = 2 = NAND  
// t = 3 = OR  
// t = 4 = NOR  
// t = 5 = XOR  
// t = 6 = XNOR  
function g\(a, b, t\)\{  
let h = \[ // 1 2 3 4 5 6  
\[0, 0, 0, 1, 0, 1, 0, 1\],  
\[0, 1, 0, 1, 1, 0, 1, 0\],  
\[1, 0, 0, 1, 1, 0, 1, 0\],  
\[1, 1, 1, 0, 1, 0, 0, 1\]  
\];  
let n = h.length;  
for\(let i=0; i\<n; i++\) \{  
if\(a == h\[i\]\[0\] && b == h\[i\]\[1\]\) \{  
return h\[i\]\[t+1\];  
\}  
\}  
\}  
/\*  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
| | | N | | | | X |  
| Input | A | A | | N | X | N |  
| | N | N | O | O | O | O |  
| a | b | D | D | R | R | R | R |  
---------------------------------  
| 0 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |  
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |  
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |  
| 1 | 1 | 1 | 0 | 1 | 0 | 0 | 1 |  
---------------------------------  
\*/  
The previous example showed independent scattered functions for the logic gate func-  
tions. However, how about an optimization that makes a shortcut that melts all the  
previously described functions into one? Well, this code defines two 3 × 3 matrices a  
and b as well as an empty matrix c. It then performs bitwise logical operations between  
the corresponding elements of matrices a and b based on a specified operation code t  
using a function called g. The result of these operations is stored in matrix c. Next, it  
prints the contents of matrix c in a human-readable format. In detail, the matrices a and  
b are 3 × 3 arrays of binary values. The code initializes an empty matrix c, and two vari-  
ables n and m to store the dimensions of matrix a. It also initializes an empty string r  
to store the formatted result. A nested for-loop is used to iterate through the elements 11 Complex Examples 201  
of matrices a and b, perform the logical operation using the g function, and store the  
result in the matrix c. It also constructs a string r that represents the elements of matrix  
c separated by spaces and newlines. The g function takes three arguments\: a, b, and t. It  
uses a predefined matrix h to perform bitwise logical operations based on the value of t  
and returns the result. The matrix h is a lookup table that specifies the results of different  
logical operations \(AND, NAND, OR, NOR, XOR, XNOR\) for different combinations  
of a and b. The code concludes by printing the string r, which represents the resulting  
matrix c. Additionally, there are comments in the code that explain the meanings of the  
values of t and provide a visual representation of the logical operations and their results  
in a tabular format.  
11.1.4  
Ex. \(210\) – Decompose a matrix into multiple matrices based on unique values  
let r = "u";  
Output\:  
let c = \[  
M1  
\[ 1, 1, 1, 1, 1, 1, 0, 1, 1, 1 \],  
----------  
\[ 1, 2, 1, 0, 1, 3, 1, 0, 1, 1 \],  
|111111 111|  
\[ 1, 1, 2, 0, 1, 3, 0, 1, 0, 1 \],  
|1 1 1 1 11|  
\[ 0, 1, 0, 2, 1, 3, 1, 0, 0, 1 \],  
|11 1 1 1|  
\[ 1, 1, 1, 0, 2, 3, 1, 0, 1, 0 \],  
| 1 1 1 1|  
\[ 1, 0, 1, 1, 1, 3, 0, r, 0, 0 \],  
|111 1 1 |  
\[ 1, 0, 3, 3, 3, 3, r, 0, 0, 1 \],  
|1 111 |  
\[ 1, 0, 1, 1, 1, r, 0, 9, 9, 9 \],  
|1 1|  
\[ 1, 1, 0, 0, 0, 0, 1, 9, 0, 9 \]  
\];  
|1 111 |  
|11 1 |  
let b = matrix\_alphabet\(c\);  
----------  
let t = decompose\(c, b\);  
M2  
----------  
for\(let k=0; k\<b.length; k++\)\{  
| 0 |  
print\(SMC\(t, k\)\);  
| 0 0 |  
\}  
| 0 0 0 |  
|0 0 00 |  
print\(b\);  
| 0 0 0|  
| 0 0 00|  
function decompose\(c, a\)\{  
| 0 00 |  
let n = c.length;  
| 0 0 |  
let m = c\[0\].length;  
| 0000 0 |  
d = \[\];  
----------  
M3  
for\(let i=0; i\<n; i++\)\{  
----------  
| |  
d\[i\] = \[\];  
| 2 |  
for\(let j=0; j\<m; j++\)\{  
| 2 |  
d\[i\]\[j\] = \[\];  
| 2 |  
for\(let k=0; k\<=a.length; k++\)\{  
| 2 |  
| |  
d\[i\]\[j\]\[k\] = " "; // "\\u2591"  
| |  
| |  
if \(c\[i\]\[j\] === a\[k\]\) \{  
| |  
d\[i\]\[j\]\[k\] = c\[i\]\[j\]; 202 11 Complex Examples  
\}  
M4  
\}  
----------  
\}  
| |  
\}  
| 3 |  
return d;  
| 3 |  
\}  
| 3 |  
| 3 |  
function matrix\_alphabet\(t\)\{  
let a = \[\];  
| 3 |  
let n = t.length;  
| 3333 |  
let m = t\[0\].length;  
| |  
| |  
for\(let i=0; i\<n; i++\)\{  
----------  
for\(let j=0; j\<m; j++\)\{  
M5  
----------  
var q = 1;  
| |  
for\(let k=0; k\<=a.length; k++\)\{  
| |  
if \(t\[i\]\[j\] === a\[k\]\) \{q = 0;\}  
| |  
\}  
| |  
if \(q === 1\) \{a.push\(t\[i\]\[j\]\);\}  
| |  
\}  
| u |  
\}  
| u |  
return a;  
| u |  
\}  
| |  
----------  
function SMC\(m, k\) \{  
M6  
let r = 'M' + \(k+1\);  
----------  
r += '\\n ----------\\n';  
| |  
for\(let i=0; i\<m.length; i++\) \{  
| |  
r += "|";  
| |  
for\(let j=0; j\<m\[i\].length; j++\) \{  
| |  
r += m\[i\]\[j\]\[k\];  
| |  
\}  
r += "|\\n";  
| |  
\}  
| |  
r += ' ----------';  
| 999|  
return r;  
| 9 9|  
\}  
----------  
1,0,2,3,u,9  
This code implementation from above defines a series of variables and functions to  
manipulate and decompose a matrix c based on an alphabet of unique values found in  
that matrix. The code also prints the decomposed matrices and the alphabet. The code  
begins by defining a variable r and initializing it with the value “u.” Next, there is a 2D  
array c, representing a matrix, where each element is a numerical value. This matrix has  
dimensions 9 × 10. The code then calls the matrix alphabet function to extract unique  
values from the matrix c and stores them in an array b. It also calls the decompose  
function to decompose the matrix c into a 3D array t. This decomposition is based on 11 Complex Examples 203  
the alphabet found in b. A for-loop is used to iterate through the elements of the alphabet  
array b, and for each unique value in b, it prints a decomposed version of the matrix  
t using the SMC function. The decompose function takes the matrix c and the alphabet  
array a as arguments. It creates a new 3D array d and populates it by iterating through the  
elements of c. For each element in c, it creates a sub-array in d, and for each unique value  
in a, it assigns the corresponding value from c to the sub-array in d. The matrix alphabet  
function extracts unique values from the matrix t and stores them in an array a. It iterates  
through the elements of t, checks if each value is already in a, and if not, adds it to a. Next,  
the SMC function is used to create a string representation of a decomposed matrix. It takes  
a matrix m and an index k representing the alphabet element to consider. It constructs a  
string r that displays the decomposed matrix with the index k. The decomposed matrix  
is surrounded by lines and separators for better visualization. The code concludes by  
printing the alphabet array b and the decomposed matrices for each unique element.  
11.1.5  
Ex. \(211\) – Count islands over the matrix and show their location  
let a = \[  
Output\:  
\[ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 \],  
\[ 1, 0, 1, 0, 1, 1, 0, 0, 1, 1 \],  
Islands = 3  
\[ 1, 1, 1, 0, 1, 1, 0, 0, 0, 1 \],  
\[ 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 \],  
2 0 2 2 2 2 0 3 3 3  
\[ 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 \],  
2 0 2 0 2 2 0 0 3 3  
\[ 1, 0, 1, 1, 1, 1, 0, 0, 0, 0 \],  
2 2 2 0 2 2 0 0 0 3  
\[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 \],  
0 0 0 0 2 0 0 0 0 3  
\[ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 \],  
2 2 2 0 2 2 2 0 3 0  
\[ 1, 1, 0, 0, 0, 0, 0, 0, 0, 1 \]  
2 0 2 2 2 2 0 0 0 0  
\];  
2 0 0 0 0 0 0 0 0 4  
2 0 2 2 2 2 0 4 4 4  
let b = \[  
2 2 0 0 0 0 0 0 0 4  
\[+1, 0\], // right side element  
\[-1, 0\], // left side element  
\[ 0,+1\], // upward side element  
\[ 0,-1\], // downward side element  
\[+1,+1\], // upward-right side element  
\[-1,-1\], // downward-left side element  
\[+1,-1\], // downward-right side element  
\[-1,+1\], // upward-left side element  
\];  
print\("Islands = " + SCAN\(a\)\);  
print\(SMC\(a\)\);  
function d\(a, i, j, n, m, c\) 204 11 Complex Examples  
if\(i\<0||j\<0||i\>\(n-1\)||j\>\(m-1\)||a\[i\]\[j\]!=1\)  
\{  
return;  
\}  
if \(a\[i\]\[j\] == 1\)  
\{  
a\[i\]\[j\] = c + 1;  
for \(let k=0; k\<b.length; k++\)  
\{  
d\(a,i+b\[k\]\[0\],j+b\[k\]\[1\],n,m,c\);  
\}  
\}  
\}  
function SCAN\(a\)  
\{  
let n = a.length; // row  
let m = a\[0\].length; // col  
let c = 0; // islands  
for \(let i=0; i\<n; i++\)\{  
for \(let j=0; j\<m; j++\)  
\{  
if \(a\[i\]\[j\] == 1\)  
\{  
c++;  
d\(a, i, j, n, m, c\);  
\}  
\}  
\}  
return c;  
\}  
function SMC\(m\)  
\{  
var r = "\\n";  
for\(var i=0; i\<m.length; i++\)  
\{  
for\(var j=0; j\<m\[i\].length; j++\)  
\{  
r += m\[i\]\[j\] + " ";  
\}  
r += "\\n";  
\}  
return r;  
\}  
This code defines a series of functions and uses them to perform operations on a  
2D array called a. The array a represents a grid or map, containing information about  
islands and their connectivity. The a array is a 2D grid consisting of 10 rows and 10  
columns, where each element is either 0 or 1, representing land \(1\) and water \(0\). The b  
array is an array of 2-element arrays, each representing a direction \(right, left, upward, 11 Complex Examples 205  
downward, etc.\) for navigating neighboring elements in the grid. The code then proceeds  
with the following key functions\: d, SCAN, and SMC. Function d\(a, i, j, n, m, c\) is  
a recursive function that is used to traverse the grid \(a\) starting from a given position  
\(i, j\). It explores neighboring elements and marks connected landmasses with a unique  
value c. This function recursively explores landmasses and increments the c value for  
each new landmass found. Function SCAN\(a\) scans the entire grid \(a\) for landmasses  
\(regions of connected land elements\). It initializes c to zero and, for each land element  
encountered, increments c and calls the d function to mark and explore the connected  
landmass. It returns the total number of landmasses found \(value of c\). Function SMC\(m\)  
is the old, havely used function across this book, that converts a 2D matrix \(m\) into a  
human-readable string representation. It iterates through the matrix and constructs a string  
\(r\) where each row of the matrix is separated by a newline character and elements within  
each row are separated by spaces. In short, the code prints the total number of islands  
found by calling SCAN\(a\) and prints the entire grid a in a human-readable format using  
the SMC\(a\) function.  
11.1.6  
Ex. \(212\) – Count islands over the matrix and count the characters in each  
let a = \[  
Output\:  
\[ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 \],  
\[ 1, 0, 1, 0, 1, 1, 0, 0, 1, 1 \],  
Islands = 3  
\[ 1, 1, 1, 0, 1, 1, 0, 0, 0, 1 \],  
\[ 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 \],  
\* 0 \* \* \* \* 0 \# \# \#  
\[ 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 \],  
\* 0 \* 0 \* \* 0 0 \# \#  
\[ 1, 0, 1, 1, 1, 1, 0, 0, 0, 0 \],  
\* \* \* 0 \* \* 0 0 0 \#  
\[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 \],  
0 0 0 0 \* 0 0 0 0 \#  
\[ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 \],  
\* \* \* 0 \* \* \* 0 \# 0  
\[ 1, 1, 0, 0, 0, 0, 0, 0, 0, 1 \]  
\* 0 \* \* \* \* 0 0 0 0  
\];  
\* 0 0 0 0 0 0 0 0 %  
\* 0 \* \* \* \* 0 % % %  
let b = \[  
\* \* 0 0 0 0 0 0 0 %  
\[+1, 0\], // right side element  
\[-1, 0\], // left side element  
\[ 0,+1\], // upward side element  
34,8,5  
\[ 0,-1\], // downward side element  
\[+1,+1\], // upward-right side element  
\[-1,-1\], // downward-left side element  
\[+1,-1\], // downward-right side element  
\[-1,+1\], // upward-left side element  
\];  
let q = \['\*'  
,'\#','%','&'\];  
let p = \[\];  
print\("Islands = " + SCAN\(a\)\);  
print\(SMC\(a\)\);  
print\(p\); 206 11 Complex Examples  
function d\(a, i, j, n, m, c\)  
\{  
if\(i\<0||j\<0||i\>\(n-1\)||j\>\(m-1\)||a\[i\]\[j\]!=1\)  
\{  
return;  
\}  
if \(a\[i\]\[j\] == 1\)  
\{  
a\[i\]\[j\] = q\[c-1\];  
//a\[i\]\[j\] = c + 1;  
p\[c - 1\] += 1;  
for \(let k=0; k\<b.length; k++\)  
\{  
d\(a,i+b\[k\]\[0\],j+b\[k\]\[1\],n,m,c\);  
\}  
\}  
\}  
function SCAN\(a\)  
\{  
let n = a.length; // row  
let m = a\[0\].length; // col  
let c = 0; // islands  
for \(let i=0; i\<n; i++\)\{  
for \(let j=0; j\<m; j++\)  
\{  
if \(a\[i\]\[j\] == 1\)  
\{  
c++;  
p\[c - 1\] = 0;  
d\(a, i, j, n, m, c\);  
\}  
\}  
\}  
return c;  
\}  
function SMC\(m\)  
\{  
var r = "\\n";  
for\(var i=0; i\<m.length; i++\)  
\{  
for\(var j=0; j\<m\[i\].length; j++\)  
\{  
r += m\[i\]\[j\] + " "; 11 Complex Examples 207  
Here, the same as in the previous example, the code defines a program to identify  
and label islands in a binary grid represented by a 2D array a. This time, the code also  
calculates the size of each island and prints the results. The code starts by initializing  
two 2D arrays, a and b. Array a represents the binary grid, where 1 s indicate land and  
0 s indicate water. Array b is an array of pairs used to navigate in all eight possible  
directions \(up, down, left, right, and diagonally\) from a given cell. Next, it defines an  
array q containing characters \(“\*”, “\#”, “%”, “&”\) and an empty array p. Note that the  
code then prints the following\: \(i\) The number of islands found in the grid, which is  
calculated by the SCAN function. \(ii\) The grid itself with islands labeled by characters  
from the q array. \(iii\) An array p containing the sizes of each island. There are the same  
three main functions as before. Function d\(a, i, j, n, m, c\) is a recursive function used  
to traverse the grid and label the islands. It takes as input the grid a, current coordinates  
\(i, j\), grid dimensions \(n, m\), and an island counter c. It checks if the cell is out of  
bounds or not part of an island \(1 indicates land\), and if so, it returns. Otherwise, it labels  
the cell, increments the size of the current island in the p array, and recursively explores  
neighboring cells in all eight directions. Function SCAN\(a\) iterates through the entire grid  
and finds the number of islands. For each unvisited land cell \(1\), it increments the island  
counter, initializes the size of the island in the p array, and calls the d function to label  
and explore the island. Function SMC remains unchanged. The code is now designed to  
identify and label islands in a binary grid and provides information about the number of  
islands and their sizes.  
11.1.7  
Ex. \(213\) – Count islands and calculate their percentage coverage  
let a = \[  
Output\:  
\[ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 \],  
\[ 1, 0, 1, 0, 1, 1, 0, 0, 1, 1 \],  
Islands = 3  
\[ 1, 1, 1, 0, 1, 1, 0, 0, 0, 1 \],  
\[ 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 \],  
\* 0 \* \* \* \* 0 \# \# \#  
\[ 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 \],  
\* 0 \* 0 \* \* 0 0 \# \#  
\[ 1, 0, 1, 1, 1, 1, 0, 0, 0, 0 \],  
\* \* \* 0 \* \* 0 0 0 \#  
\[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 \],  
0 0 0 0 \* 0 0 0 0 \#  
\[ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 \],  
\* \* \* 0 \* \* \* 0 \# 0  
\[ 1, 1, 0, 0, 0, 0, 0, 0, 0, 1 \]  
\* 0 \* \* \* \* 0 0 0 0  
\];  
\* 0 0 0 0 0 0 0 0 %  
\* 0 \* \* \* \* 0 % % %  
let b = \[  
\* \* 0 0 0 0 0 0 0 %  
\[+1, 0\], // right side element  
\[-1, 0\], // left side element  
\[ 0,+1\], // upward side element  
Symbol\: \* \# %  
\[ 0,-1\], // downward side element  
Count \: 34 8 5  
\[+1,+1\], // upward-right side element  
Area \: 38% 9% 6%  
\[-1,-1\], // downward-left side element  
\[+1,-1\], // downward-right side element  
\[-1,+1\], // upward-left side element  
\]; 208 11 Complex Examples  
let q = \['\*'  
let p = \[\];  
,'\#','%','&','@','\$','!','+',  
'\^'\];  
p\[0\] = \[\];  
p\[1\] = \[\];  
p\[2\] = \[\];  
print\('Islands = ' + SCAN\(a\) + '\\n'\);  
print\(SMC\(a, 1\)\);  
print\(SMC\(p, 4\)\);  
function d\(a, i, j, n, m, c\)  
\{  
if\(i\<0||j\<0||i\>\(n-1\)||j\>\(m-1\)||a\[i\]\[j\]!=1\)  
\{  
return;  
\}  
\{  
if \(a\[i\]\[j\] == 1\)  
a\[i\]\[j\] = q\[c-1\];  
//a\[i\]\[j\] = c + 1;  
p\[0\]\[c-1\] = a\[i\]\[j\];  
p\[1\]\[c-1\] += 1;  
for \(let k=0; k\<b.length; k++\)  
\{  
\}  
d\(a,i+b\[k\]\[0\],j+b\[k\]\[1\],n,m,c\);  
\}  
\}  
function SCAN\(a\)  
\{  
let n = a.length; // row  
let m = a\[0\].length; // col  
let c = 0; // islands  
for \(let i=0; i\<n; i++\)\{  
for \(let j=0; j\<m; j++\)  
\{  
if \(a\[i\]\[j\] == 1\)  
\{  
c++;  
p\[1\]\[c - 1\] = 0;  
d\(a, i, j, n, m, c\);  
p\[2\]\[c-1\]=\(100/\(n\*m\)\)\*p\[1\]\[c-1\];  
p\[2\]\[c-1\] = Math.round\(p\[2\]\[c-1\],0\)+'%';  
\}  
\}  
\}  
return c;  
\} 11 Complex Examples 209  
function SMC\(m,f\) \{  
let r =  
'';  
for\(let i=0; i\<m.length; i++\) \{  
for\(let j=0; j\<m\[i\].length; j++\) \{  
r += m\[i\]\[j\] + ps\(m\[i\]\[j\], f\);  
\}  
r += '\\n';  
\}  
return r;  
\}  
function ps\(a, f\) \{  
let t =  
'';  
b = f - \(a.toString\(\).length % f\);  
for\(let i=0; i\<b; i++\) \{t += ' ';\}  
return t;  
\}  
This latest version of the “island” code adds a couple of new features. It defines a  
program that processes a 2D array a representing a grid of land and identifies and labels  
islands on the grid. The code begins by defining a 2D array a, which represents a grid of  
land with 1 s representing land and 0 s representing water. Another 2D array b is defined,  
which represents directional offsets. Each element in b is a pair of coordinates that repre-  
sent movement in different directions \(right, left, up, down, etc.\). An array q is defined,  
containing various characters used to label the islands on the grid \(more than before\).  
An empty 2D array p is created to store information about the islands. Next, the code  
calls the SCAN\(a\) function, which scans the grid to identify and label the islands. It then  
prints the number of islands found and two representations of the grid\: the original grid  
with islands labeled and a grid representation of island information \(please see the output  
above\). Inside, the SCAN\(a\) function scans the entire grid, calling d when it encounters a  
land element \(1\). It keeps track of the number of islands found and calculates the percent-  
age of land each island occupies. It returns the total number of islands. Now, the d\(a, i, j,  
n, m, c\) function is a recursive function used to mark and label islands on the grid. It takes  
the grid a, current coordinates i and j, grid dimensions n and m, and a label c. It checks  
if the current position is within bounds and if it is part of an island. If so, it marks the  
position with the label from q, updates island information in p, and recursively explores  
neighboring positions. The SMC\(m, f \) function is used to convert a 2D array m into a  
string with proper formatting. It uses the ps\(a, f \) function to add padding to elements  
in the matrix for alignment. The ps\(a, f \) function, like many strategies used here, it was  
presented in the chapter about functions. Thus, it calculates and returns padding spaces  
based on the length of the element a and a desired field width f . As a small conclusion,  
the code effectively identifies and labels islands on the grid, calculates their percentage  
of coverage, and displays the grid with labels and island information. The significance  
of this code lies in its practical utility in various applications and its educational value  
in teaching fundamentals. In order to better understand this example, consider an image 210 11 Complex Examples  
that is represented as a matrix a. This image can represent the development of bacterial  
colonies. Thus, the above algorithm can accurately tell the number of colonies, their area  
and much more.  
11.1.8  
Ex. \(214\) – Show similarities between two strings by sequence alignment  
// Local sequence alignment  
Output\:  
// algorithm and the layout  
1100111111111001  
let Match = +2;  
|||||||||||||  
let Mismatch = -1;  
00000011111111100000  
let gap = -2;  
let s0 = '1100111111111001';  
let s1 = '00000011111111100000';  
let AA =  
"";  
let AM =  
"";  
let AB =  
"";  
let e = ' ';  
let m = \[\];  
let s = \[\];  
let MMax = 0;  
let MMin = 0;  
let x = 0;  
let y = 0;  
// Matrix initialization and completion  
s\[0\] = \[\];  
s\[1\] = \[\];  
s\[0\] = s0.split\(''\);  
s\[1\] = s1.split\(''\);  
let n\_0 = s\[0\].length + 1;  
let n\_1 = s\[1\].length + 1;  
for\(let i=0; i\<=n\_0; i++\) \{  
m\[i\]=\[\];  
for\(let j=0; j\<=n\_1; j++\) \{  
m\[i\]\[j\]=0;  
if \(i==1 && j\>1\) \{  
m\[i\]\[j\]=m\[i\]\[j-1\]+gap;  
\}  
if \(j==1 && i\>1\) \{ 11 Complex Examples 211  
m\[i\]\[j\]=m\[i-1\]\[j\]+gap;  
\}  
if \(i\>1\) \{m\[i\]\[0\]=s\[0\]\[i-2\];\}  
if \(j\>1\) \{m\[0\]\[j\]=s\[1\]\[j-2\];\}  
if\(i\>1 && j\>1\)\{  
let A = m\[i-1\]\[j-1\] +  
f\(m\[i\]\[0\],m\[0\]\[j\]\);  
let B = m\[i-1\]\[j\] + gap;  
let C = m\[i\]\[j-1\] + gap;  
let D = 0;  
m\[i\]\[j\] = Math.max\(A, B, C, D\);  
if\(m\[i\]\[j\] \> MMax\)\{  
MMax = m\[i\]\[j\];  
x=i;  
y=j;  
\}  
if\(m\[i\]\[j\] \< MMin\)\{  
MMin = m\[i\]\[j\];  
\}  
\}  
\}  
\}  
//Traceback & text alignment  
let i = x;  
let j = y;  
while \(i\>=2 || j\>=2\) \{  
let Ai = m\[i\]\[0\];  
let Bj = m\[0\]\[j\];  
A = m\[i-1\]\[j-1\] + f\(Ai, Bj\);  
B = m\[i-1\]\[j\] + gap;  
C = m\[i\]\[j-1\] + gap;  
if\(i\>=2 && j\>=2 && m\[i\]\[j\]==A\) \{  
AA = Ai + AA;  
AB = Bj + AB;  
if\(Ai==Bj\)\{  
AM = '|' + AM;  
\} else \{  
AM = e + AM;  
\}  
i = i - 1;  
j = j - 1; 212 11 Complex Examples  
\} else \{  
if\(i\>=2 && m\[i\]\[j\]==B\) \{  
AA = Ai + AA;  
AB = '-' + AB;  
AM = e + AM;  
i = i - 1;  
\} else \{  
AA = '-' + AA;  
AB = Bj + AB;  
AM = e + AM;  
j = j - 1;  
\}  
\}  
var r1 = i - 1;  
var r2 = j - 1;  
if\(m\[i\]\[j\]\<=0\)\{break;\}  
\}  
// LAYOUT  
let tM=  
'';  
let tS=  
'';  
// Check the end  
AA = AA + s0.substr\(x-1, n\_0 - x\);  
AB = AB + s1.substr\(y-1, n\_1 - y\);  
// Check the beginning  
AA = s0.substr\(0, r1\) + AA;  
AB = s1.substr\(0, r2\) + AB;  
if\(r1\>r2\)\{  
let v = r1 - r2;  
for\(let u=1; u\<=v; u++\) \{  
tS = tS + e;  
\}  
for\(let u=1; u\<=v+r2; u++\) \{  
tM = tM + e;  
\}  
AB = tS + AB;  
AM = tM + AM;  
\} else \{  
let v = r2 - r1;  
for\(let u=1; u\<=v; u++\) \{ 11 Complex Examples 213  
tS = tS + e;  
\}  
for\(let u=1; u\<=v+r1; u++\) \{  
tM = tM + e;  
\}  
AA = tS + AA;  
AM = tM + AM;  
\}  
// Print the alignment  
print\(AA\);  
print\(AM\);  
print\(AB\);  
// Matching function  
function f\(a1, a2\) \{  
if\(a1 === a2\)\{  
return Match;  
\} else \{  
return Mismatch;  
\}  
\}  
The above code performs sequence alignment using a dynamic programming approach,  
specifically for pairwise sequence alignment of two strings \[2\]. The code begins by defin-  
ing several variables to be used in the sequence alignment algorithm. These variables  
include Match, Mismatch, and gap penalties, two input sequences \(s0 and s1\), and three  
strings \(AA, AM, and AB\) to store the aligned sequences and matching characters. Note  
that AA means alignment of sequence A, AM means the alignment of sequence in the  
middle \(the connection vertical lines between the characters of A and B\), and AB means  
alignment of sequence B. Additionally, the code initializes an empty string e for place-  
holder characters, and two empty arrays m and s for matrices used in the alignment  
calculations. It also sets variables MMax and MMin to store the maximum and min-  
imum values in the alignment matrix, and initializes x and y to track their positions.  
The next section of the code initializes and completes the alignment matrix m. It sets  
up a nested loop to iterate through the matrix, calculating alignment scores based on  
the dynamic programming algorithm. It uses the variables A, B, C, and D to calculate  
the maximum alignment score at each cell of the matrix. The code keeps track of the  
maximum and minimum scores, as well as their corresponding positions in the matrix \(x  
and y\). After completing the matrix, the code proceeds to perform traceback to find the  
aligned sequences. It starts from the position \(x, y\) with the maximum score and traces  
back through the matrix, building the aligned sequences and using the Match, Mismatch,  
and gap penalties as needed. Next, the code adjusts the layout of the aligned sequences,  
ensuring they have the same length and align correctly. It adds placeholder characters  
to the beginning and end of the sequences if needed to align them properly. The final 214 11 Complex Examples  
section of the code prints the aligned sequences \(AA, AM, and AB\) to the console, rep-  
resenting the aligned sequences, matching characters, and gaps. Additionally, there is a  
matching function f \(a1, a2\) defined in the code, which returns a Match or Mismatch  
penalty based on whether two characters are equal or not. Overall, this code performs  
sequence alignment between two input sequences and prints the aligned sequences along  
with matching characters and gaps. The provided JavaScript code has several practical  
applications in bioinformatics, computational biology, and related fields. For example, in  
the field of Genetics, sequence alignment is commonly used to compare DNA, RNA, or  
protein sequences to identify similarities or differences. This is important in understand-  
ing evolutionary relationships, identifying functional elements in genomes, and annotating  
genes. Also, sequence alignment is crucial for searching biological databases, such as  
GenBank or UniProt, to find sequences similar to a query sequence. This is often used  
to identify potential homologous genes or proteins. Nonetheless, sequence alignment has  
many applications, from biology to antivirus engines to finding commonalities between  
multiple files infected with polymorphic viruses, and the cases for applications go on as  
a function of need and imagination. Randomnes and Programming  
# 12  
Randomness plays a significant role in various aspects of computer programming, and  
JavaScript, as a versatile computer language, offers powerful tools and techniques to incor-  
porate randomness into software applications \[1\]. Randomness refers to the concept of  
unpredictability and uncertainty, essential for tasks like generating random numbers, shuf-  
fling data, simulating random events, or creating games and simulations \[1\]. In JavaScript,  
developers can use this unpredictability via built-in functions and libraries designed to  
handle randomization effectively \[2\]. However, this chapter will make an introduction  
into the significance of randomness in computer programming, its applications, and how  
JavaScript empowers developers to implement applications, enhancing the functionality  
and reliability of software.  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_12  
215 216 12 Randomnes and Programming  
// understand randomness - get  
// complementary array by using random values  
0,1,1,0,0,0,1  
let a = \[1,0,0,1,1,1,0\];  
let b = \[0,0,0,0,0,0,0\];  
print\(mutate\(a\)\);  
function mutate\(a\)  
\{  
let m = a.length;  
let n = 200;  
let s = 0; //scor  
for\(let i=0; i\<n; i++\)  
\{  
s = 0;  
for\(let j=0; j\<m; j++\)  
\{  
b\[j\] = Math.round\(Math.random\(\),0\);  
//complementary array  
if\(b\[j\]!=a\[j\]\)\{s+=1;\}  
// identic array  
//if\(b\[j\]==a\[j\]\)\{s += 1;\}  
\}  
if\(s \>= m\)\{return b;\}  
\}  
return "not found by random means.";  
\}  
The code from above aims to demonstrate randomness and create a complementary  
array through random values. It starts by defining two arrays, a and b, with some initial  
values. The mutate function is defined to mutate the array a into a complementary array  
b using random values. Inside the function, the code sets m as the length of array a and  
variable n as value 200. It then initializes a variable s \(score\) to keep track of how many  
elements in the b array differ from the corresponding elements in the a array. It then enters  
a loop that runs n times, attempting to create a complementary array. Within this loop,  
it resets the score s to 0 for each iteration. Inside the nested loop, it generates random  
values \(0 or 1\) using Math.random\(\) for each element of the b array. If the generated  
value is different from the corresponding element in the array a, it increments the score  
s, indicating a difference between the arrays. After generating a random b array, it checks  
if the score s is greater than or equal to the length m of the array a. If this condition is  
met, it returns the complementary array b. If the condition is not met after n iterations, it  
returns the message “not found by random means.” Outside the function, the source code  
prints the result of calling mutate\(a\). 12 Randomnes and Programming 217  
// understand randomness, take the  
Output\:  
// first 20% of the closest solutions  
1 0 1 1 1 1 0 6  
let a = \[1,0,0,1,1,1,0\];  
0 0 0 1 1 1 0 6  
let b = \[0,0,0,0,0,0,0\];  
1 0 1 1 1 1 0 6  
0 0 0 1 1 1 0 6  
let c = \[\];  
1 0 0 1 1 1 1 6  
1 0 0 1 1 1 0 7  
let fit = mutate\(c\);  
1 1 0 1 1 1 0 6  
print\(SMC\(fit\)\);  
1 0 1 1 1 1 0 6  
1 1 0 0 0 1 0  
function mutate\(c\)  
\{//mutate and select.  
let m = a.length;  
let n = 100;  
let s = 0; //scor  
let k = 0;  
let p = 20; //Select best X%  
//let q = Math.round\(\(m/100\)\*\(100-p\)\);  
let q = Math.round\(m \* \(1-p/100\)\);  
for\(let i=0; i\<n; i++\)  
\{  
s = 0;  
c\[k\] = \[\];  
for\(var j=0; j\<m; j++\)  
\{  
b\[j\] = Math.round\(Math.random\(\),0\);  
if\(b\[j\]==a\[j\]\)\{s += 1;\}  
c\[k\]\[j\] = b\[j\];  
\}  
if\(s \>= q\)\{c\[k\]\[m\]=s; k++;\}  
\}  
return c;  
\}  
function SMC\(m\) \{  
var r =  
'';  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r += m\[i\]\[j\] + " ";  
\}  
r += "\\n";  
\}  
return r;  
\} 218 12 Randomnes and Programming  
This code aims to demonstrate a process of mutation and selection within an algorithm.  
The code begins by defining two arrays, a and b, representing binary sequences. Variable  
a contains a binary sequence \[1,0,0,1,1,1,0\], and b is initialized as an array of zeros  
of the same length. An empty array c is declared, which will be used to store mutated  
sequences. The mutate\(c\) function is defined to perform mutation and selection. Inside  
this function a series of events unfold. The length of array a is stored in the variable  
m, and the value 100 is stored in n. Variables s and k are initialized to 0, and p is set  
to 20, representing the percentage of best solutions to select. Variable q is calculated as  
the number of elements to select, which is m multiplied by \(1 − p/100\). Next, there is  
a loop that runs n times, where n is the number of mutations to be performed, namely\:  
Variable s is reset to 0, and a sub-array is initialized in the c array at index k. Another loop  
iterates through the elements of array a \(length m\). For each element, a random binary  
value is generated and stored in the corresponding position of array b. If the generated  
value matches the value in array a at the same position, s is incremented, and the value  
is stored in the corresponding position in the sub-array of c. If the value of s \(number of  
matches with a\) is greater than or equal to q, the sub-array in c also stores the value of s,  
and k is incremented. The mutate\(c\) function returns the mutated and selected sequences  
stored in array c. Additionally, there is the SMC\(m\) function that takes a matrix \(m\) as  
an argument and converts it into a human-readable string format. It iterates through the  
rows and columns of the matrix, appending each element followed by a space and adding  
a newline character after each row. Then, the result r is returned. Thus, the code calls the  
mutate\(c\) function, stores the result in the variable fit, and prints the result of converting  
fit into a string format using the SMC\( fit\) function.  
// Find complementary matrix by using  
Output\:  
// stochastic means \(uniform distribution\)  
1 1 1  
let a = \[  
1 0 1  
\[0,0,0\],  
1 1 1  
\[0,1,0\],  
\[0,0,0\],  
\];  
let b = \[\];  
print\(SMC\(mutate\(a\)\)\);  
function mutate\(a\)  
\{  
let n = a.length;  
let m = a\[0\].length;  
let q = 200;  
let s = 0; //scor 12 Randomnes and Programming 219  
for\(let k=0; k\<q; k++\)  
\{  
s = 0;  
for\(let i=0; i\<n; i++\)  
\{  
b\[i\] = \[\];  
for\(let j=0; j\<m; j++\)  
\{  
b\[i\]\[j\] = Math.round\(Math.random\(\),0\);  
if\(b\[i\]\[j\]!=a\[i\]\[j\]\)\{s += 1;\}  
\}  
if\(s \>= m\*n\)\{return b;\}  
\}  
\}  
return "not found by random means.";  
\}  
function SMC\(m\) \{  
var r =  
'';  
for\(var i=0; i\<m.length; i++\) \{  
for\(var j=0; j\<m\[i\].length; j++\) \{  
r += m\[i\]\[j\] + " ";  
\}  
r += "\\n";  
\}  
return r;  
\}  
This current example aims to find a complementary matrix to a given matrix a using  
stochastic means \(uniform distribution\). The code begins with the definition of matrix  
a, which is a 3 × 3 matrix filled with numeric values, and an empty matrix b. Next, it  
calls the SMC function and passes the result of the mutate\(a\) function as an argument to  
print the matrix obtained after the mutation. The mutate\(a\) function is defined to find a  
complementary matrix through a stochastic process. It takes the matrix a as an input and  
performs the following steps\: \(i\) It calculates the dimensions of matrix a by getting the  
number of rows \(n\) and columns \(m\). \(ii\) It sets a variable q to 200, which represents  
the number of attempts to find a complementary matrix. \(iii\) It initializes variable s to  
0, which will be used to keep track of the score \(the number of differences\) between  
the original matrix a and the mutated matrix b. \(iv\) It enters a loop that runs for q  
iterations. In each iteration, it resets the score s to 0. Inside the loop, it iterates through  
each element of the matrix a using nested for loops. For each element, it generates a  
random number between 0 and 1 using Math.random\(\), rounds it to the nearest integer  
using Math.round\(\), and assigns the result to the corresponding element in matrix b. It  
also checks if the value in b differs from the value in a and increments the score s if there  
is a difference. After completing the iteration over all elements of the matrix, it checks 220 12 Randomnes and Programming  
if s is greater than or equal to the total number of elements in the matrix \(m × n\). If this  
condition is met, it returns the mutated matrix b, which is now complementary to a. If  
the loop finishes all iterations and no complementary matrix is found, it returns the string  
“not found by random means.” The SMC function is defined to format matrix m as a  
string with rows separated by newline characters. It iterates through the matrix and builds  
a string representation of the matrix. In short, the code attempts to find a complementary  
matrix to the input matrix a by randomly mutating its values and checking if the score of  
differences reaches a certain threshold. If a complementary matrix is found, it is returned;  
otherwise, a message of not found is shown.  
let Jar = \[\];  
Output\:  
Jar\[0\] = "WWBBBBBBBB";  
Jar\[1\] = "WWWWWBBBBB";  
Jar W\[B\],  
Jar B\[B\],  
let draws = 17;  
Jar B\[W\],  
let z =  
'';  
Jar W\[W\],  
Jar W\[B\],  
a = Draw\(1\);  
Jar B\[W\],  
z = z + " Jar W\[" + a + "\],";  
Jar W\[B\],  
Jar B\[W\],  
for \(var i=1; i\<=draws; i++\)\{  
Jar W\[B\],  
if \(a === "W"\) \{  
a = Draw\(0\);  
z = z + " Jar W\[" + a + "\],";  
\} else \{  
a = Draw\(1\);  
z = z + " Jar B\[" + a + "\],";  
\}  
\}  
print\(z\);  
function Draw\(S\) \{  
let rc = 0; // rc = randomly\_choose  
rc = Math.random\(\) \* Jar\[S\].length\);  
rc = Math.floor\(rc\);  
let ball = Jar\[S\].substr\(rc, 1\);  
return ball;  
\} 12 Randomnes and Programming 221  
The point of this code is to demonstrate how to simulate a non-uniform random process  
based on quantities \(drawing balls from jars\) and keep track of the results \[1\]. It showcases  
the use of functions, loops, and conditional statements to achieve this simulation. In this  
code, there is an array called Jar with two elements at indices 0 and 1, representing  
jars filled with colored balls. The strings in these array elements represent the content  
of the jars. The variable draws is set to 17, which indicates the number of draws to be  
performed. The variable z is initialized as an empty string. The code defines a function  
called Draw\(S\) that takes a parameter S, which is used to choose a jar \(0 for the first  
jar and 1 for the second jar\). Inside this function it initializes a variable rc to 0 \(which  
stands for randomly choose\). Then, it generates a random floating-point number between  
0 and 1 using Math.random\(\) and multiplies it by the length of the jar specified by S.  
This number is stored in rc. Next, it then converts the random number to an integer using  
Math.floor\(rc\), effectively choosing a random index in the jar. It extracts a single ball  
\(character\) from the jar specified by S at the chosen index using Jar\[S\].substr\(rc, 1\) and  
returns it. Outside the function, there is a loop that iterates from i = 1 to draws \(17  
times\). Inside this loop it checks whether the value of a is equal to “W.” If it is, it calls  
the Draw function with S as 0 \(indicating the first jar\) and appends the result to the string  
z, including the label “Jar W\[\]”. If a is not equal to “W,” it calls the Draw function with  
S as 1 \(indicating the second jar\) and appends the result to the string z, including the  
label “Jar B\[\]”. Next and last, the code prints the accumulated string z to the console for  
inspection.  
let draws = 8;  
Output\:  
let z =  
'';  
Jar W\[B\],  
let Jar = \[\];  
Jar B\[W\],  
Jar\[0\]="";  
Jar W\[B\],  
Jar\[1\]="";  
Jar B\[W\],  
Jar W\[B\],  
Fill\_Jar\(0, 0.2\);  
Jar B\[W\],  
Fill\_Jar\(1, 0.6\);  
Jar W\[B\],  
Jar B\[W\],  
a = Draw\(1\);  
Jar W\[B\],  
z = z + " Jar W\[" + a + "\],";  
for \(let i=1; i\<=draws; i++\)\{  
if \(a === "W"\) \{  
a = Draw\(0\);  
z = z + " Jar W\[" + a + "\],";  
\} else \{  
a = Draw\(1\);  
z = z + " Jar B\[" + a + "\],";  
\}  
\} 222 12 Randomnes and Programming  
print\(z\);  
function Draw\(S\) \{  
let rc = 0; // rc = randomly\_choose  
rc = Math.random\(\) \* Jar\[S\].length\);  
rc = Math.floor\(rc\);  
let ball = Jar\[S\].substr\(rc, 1\);  
return ball;  
\}  
function Fill\_Jar\(S, p\)\{  
let Balls\_W = Math.round\(100 \* p\);  
let Balls\_B = 100 - Balls\_W;  
for \(let i=1; i\<=Balls\_W; i++\)\{  
Jar\[S\] = Jar\[S\] + "W";  
\}  
for \(let i=1; i\<=Balls\_B; i++\)\{  
Jar\[S\] = Jar\[S\] + "B";  
\}  
\}  
In this code, there is a simulation of drawing balls from two jars, each containing  
white \(“W”\) and black \(“B”\) balls. In other words, it is the same non-uniform random  
process as shown previously, but this time, instead of a sequence of objects \(characters\)  
that sets the probability distribution, the implementation now uses transition probability  
values to perform the simulation. The code begins with the initialization of variables and  
the declaration of two functions. The draws variable is set to 8, and an empty string z  
is defined. An array Jar is created with two elements, initialized as empty strings. The  
Fill Jar function is defined to populate the jars. It takes two arguments\: S \(representing  
the jar number\) and p \(representing the probability of drawing a white ball from the jar\).  
It calculates the number of white and black balls based on the probability p and fills the  
jar accordingly. Next, the code draws the first ball \(a\) from the second jar \(Jar\[1\]\) using  
the Draw function and appends the result to the string z. A loop runs for draws times,  
simulating subsequent ball draws. In each iteration, it checks the color of the last drawn  
ball \(a\). If it is white \(“W”\), the code draws a ball from the first jar \(Jar\[0\]\), and if it is  
black \(“B”\), the code draws a ball from the second jar \(Jar\[1\]\). The results of these draws  
are appended to the string z. Once the execution of the loop finishes, the code prints the  
string z which contains a sequence of ball draws from both jars, indicating whether they  
are white \(“W”\) or black \(“B”\). Two additional functions, Draw and Fill Jar, are defined  
to facilitate the simulation. The Draw function takes a parameter S \(indicating the jar\)  
and randomly selects a ball from that jar based on its length and returns it. The Fill Jar  
function takes parameters S and p, calculates the number of white and black balls based  
on the probability p, and fills the specified jar accordingly. The point of the provided  
JavaScript code is to simulate a random process of drawing balls from two jars, each  
containing white \(“W”\) and black \(“B”\) balls, that is, two states. The code allows the 12 Randomnes and Programming 223  
reader to specify the probability of drawing a white ball from each jar and then simulates  
a series of ball draws based on these probabilities. Thus, the main purpose of the code  
is to demonstrate a simple stochastic process and record the outcomes of multiple ball  
draws from the two jars. It creates a string z that represents a sequence of ball draws,  
with each draw being either “W” or “B” depending on the color of the ball drawn from  
the corresponding jar. The code could be used for various purposes, because it provides a  
basic framework for simulating and recording random events, making it a useful tool for  
educational, experimental, or illustrative purposes related to probability and randomness.  
let a = \[  
\[1.0, 0.0, 0.0, 0.0\],  
k\(1\)=\[0,0,1,0\]  
\[0.5, 0.0, 0.5, 0.0\],  
k\(2\)=\[0,0.5,0,0.5\]  
\[0.0, 0.5, 0.0, 0.5\],  
k\(3\)=\[0.25,0,0.75,0\]  
\[0.0, 0.0, 1.0, 0.0\]  
k\(4\)=\[0.25,0.375,0,0.375\]  
\];  
k\(5\)=\[0.44,0,0.56,0\]  
let v = \[  
\[0, 0, 0, 1\],  
\[0, 0, 0, 0\],  
\];  
let c = 5;  
let n = a.length;  
let m = a\[0\].length;  
for\(let k=1; k\<=c; k++\)\{  
for\(let i=0; i\<n; i++\)\{  
for\(let j=0; j\<m; j++\)\{  
v\[1\]\[j\] += \(v\[0\]\[i\] \* a\[i\]\[j\]\);  
//print\(i + '|' + j + '-' + a\[i\]\[j\]\);  
//print\(i + '|' + j + '-' + v\[0\]\[j\]\);  
\}  
\}  
for\(let i=0; i\<=n; i++\)\{  
v\[0\]\[i\] = v\[1\]\[i\];  
v\[1\]\[i\] = 0;  
\}  
print\('k\('+ k +'\)=\[' +  
v\[0\]\[0\] + ',' + v\[0\]\[1\] + ',' +  
v\[0\]\[2\] + ',' + v\[0\]\[3\] + '\]'\);  
\} 224 12 Randomnes and Programming  
The primary use of this code is related to predictions. Thus, it repeatedly performs  
matrix–vector multiplication c times, accumulating the results in v, and displaying the  
updated v vector after each iteration. This could be part of a numerical computation or  
simulation where iterative updates to a vector are necessary, such as in some mathematical  
or scientific simulations of Markov Chains. The code starts by defining two matrices, a  
and v, as well as two scalar variables, c, and n and m. Matrix a is a 4 × 4 matrix with  
specific numerical values. Matrix v is a 2 × 4 matrix initialized with zeros. Scalar c is set  
to 5, representing the number of iterations in the subsequent loop. Scalar n is assigned  
the value of the number of rows in matrix a \(which is 4\) whereas scalar m is assigned the  
value of the number of columns in matrix a \(which is 4\). The code then enters a nested  
loop structure. There are two outer loops controlled by the variable k, which ranges from  
1 to c. These loops are responsible for performing matrix–vector multiplications. Within  
the loop, there are nested loops controlled by i and j, which iterate through the rows and  
columns of matrices a and v. Inside these loops, the code performs calculations to update  
the values in the v matrix based on matrix multiplication between a and v. Note that  
there are also two lines that are currently commented out using “//”, which are meant for  
debugging purposes, displaying the current values of i, j, a\[i\]\[ j\], and v\[0\]\[ j\]. These lines  
are not executed in the current code. After each iteration of the k loop, there is a block of  
code that updates the v matrix for the next iteration. The values in v\[0\] are updated with  
the values calculated in the previous iteration, and v\[1\] is reset to zeros. Next, the code  
prints the result of each iteration, showing the values of v\[0\] in a formatted string. Overall,  
this code is performing iterative matrix–vector multiplications c times and displaying the  
results for each iteration.  
let P = \[  
Output\:  
\["A" , "B" , "C" , "D" \],  
\[0.00, 0.50, 0.50, 0.00\],  
Q = CBCBCBCBDC  
\[0.33, 0.00, 0.33, 0.33\],  
\[0.00, 1.00, 0.00, 0.00\],  
BBBBBCCCCC  
\[0.00, 0.00, 1.00, 0.00\]  
AAACCCDDD  
\];  
BBBBBBBBBB  
CCCCCCCCCC  
let n = P.length; // n=5  
let m = P\[0\].length; // m=4  
let Jar = \[\];  
for\(let j=0; j\<=m; j++\)\{  
Jar\[j\] = Fill\_Jar\(j\);  
\}  
let draws = 10;  
let a = Draw\(1\); // first draw  
let q =  
"";  
let z =  
"";  
for \(let i=1; i\<=draws; i++\)\{  
for \(let j=0; j\<=m; j++\)\{  
if \(a === P\[0\]\[j\]\)\{  
a = Draw\(j + 1\); 12 Randomnes and Programming 225  
q = q + P\[0\]\[j\];  
j = m;  
\}  
\}  
\}  
print\("Q = " + q\);  
function Draw\(S\) \{ // rc - randomly choose  
let rc = Math.random\(\) \* Jar\[S\].length;  
ball = Jar\[S\].substr\(Math.floor\(rc\), 1\);  
return ball;  
\}  
function Fill\_Jar\(S\)\{  
let Ltot = 10;  
let k = 1;  
let b =  
"";  
for \(let i=0; i\<=m; i++\)\{  
k = Math.round\(Ltot \* P\[S\]\[i\]\);  
for \(let j=1; j\<=k; j++\)\{  
b = b + P\[0\]\[i\];  
\}  
\}  
return b;  
\}  
print\(SMC\(Jar\)\);  
function SMC\(m\) \{  
let r =  
'';  
for\(let i=0; i\<m.length; i++\) \{  
for\(let j=0; j\<m\[i\].length; j++\) \{  
r += m\[i\]\[j\];  
\}  
r += "\\n";  
\}  
return r;  
\}  
The purpose here is to create a simulation of drawing items from a jar with predefined  
probabilities and capture the sequence of draws. It demonstrates how to model a random  
process and calculate outcomes based on specified probabilities. The code starts by defin-  
ing a two-dimensional array P, representing a probability distribution for drawing items  
from the jar. It contains items labeled as “A,” “B,” “C,” and “D,” along with associated  
probabilities. Next, it calculates the number of rows \(n\) and columns \(m\) in the P array,  
and it initializes an empty array Jar. A variable draws is set to 10, indicating the num-  
ber of draws to be simulated. The code initializes variables a, q, and z for tracking the  
draws. A loop iterates over the number of draws specified. Within this loop, another loop  
iterates over the columns of the P array to determine which item is drawn based on the  
probabilities. The selected item is added to the q variable, which records the sequence of  
draws. There is a Draw\(S\) function that simulates drawing an item based on probabilities  
specified in a specific row of the P array. It randomly selects an item from the jar and  
returns it. Another function Fill Jar\(S\) is defined to fill the jar based on probabilities from  
a specific row of the P array. It calculates the number of items to add to the jar for each  
item type based on the probabilities. The code then prints the contents of the Jar array by  
using the SMC\(m\) function. Thus, the code simulates drawing items from a jar based on  
specified probabilities and records the sequence of draws in the q variable. One last thing 226 12 Randomnes and Programming  
to note, is that the above example, is the most primitive version of a GPT-like \(generative  
pre-trained transformer\) system. Once the reader carefully understands the principles, it  
will get the point of the example by looking at the output. Browser Specific  
# 13  
Web browsers have evolved significantly over the years, not just in terms of rendering  
web content, but also in offering a wide range of APIs and functionalities that enable  
richer user interactions and experiences \[1\]. One such evolution is the browser-specific  
JavaScript implementations. These implementations, while adhering to the core princi-  
ples of JavaScript, provide features tailored to the unique capabilities and characteristics  
of individual web browsers. Take, for instance, the handling of Base64 encoding and  
decoding. This data representation format is crucial for embedding binary data in textual  
content, such as embedding images in HTML or CSS. Modern browsers provide native  
JavaScript methods to easily convert data to and from Base64, ensuring that develop-  
ers can seamlessly handle such tasks without relying on external libraries. Similarly, local  
storage has revolutionized how web applications manage state and data. Instead of relying  
solely on server-side storage or cookies, web apps can now store substantial amounts of  
data directly in the browser. This enables faster data retrieval and improved offline capa-  
bilities, enhancing user experience. The ability to upload files from disk directly through  
browsers has also seen significant improvements. Gone are the days when file uploads  
were clunky and had limited capabilities. With advanced JavaScript APIs, developers can  
now read, process, and preview files before they are uploaded, offering users greater con-  
trol and feedback. Furthermore, the rise of native charts powered by JavaScript allows  
for dynamic data representation right in the browser. This means that complex data can  
be visualized in real-time, without the need for server-side processing or third-party plu-  
gins. Whether it is bar graphs, pie charts, or intricate data visualizations, native charting  
capabilities have transformed data presentation on the web. Lastly, the creation of simple  
interfaces has been significantly enhanced with browser-specific JavaScript functionali-  
ties. These allow for responsive designs, real-time updates, and intuitive user feedback  
© The Author\(s\), under exclusive license to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9\_13  
227 228 13 Browser Specific  
mechanisms. The result is a more engaging and interactive web, where users can feel the  
immediacy of their actions and relevant feedback. Up to this point, all the examples were  
browser independent as they were specific to the JavaScript engine. This means that all  
the examples from above work in any JavaScript compatible environment \(including the  
online compilers\). However, there are some peculiarities when JavaScript uses browser  
objects, and those will be shown here.  
13.1.1  
Ex. \(222\) – Base64 encoding and decoding via built-in functions  
\<script\>  
Output\:  
Output\:  
let ori = "this is a text!";  
dGhpcyBpcyBhIHRleHQh  
this is a text!  
// encode a string  
let enc = btoa\(ori\);  
// decode the string  
let dec = atob\(enc\);  
alert\(enc\);  
alert\(dec\);  
\</script\>  
Base64 encoding is and will likely be indispensable for web applications that are inde-  
pendent of any third party files. Many file types can be embedded as text in an HTML  
file via Base64 encoding. Thus, within the above script, there are several operations per-  
formed on strings using the btoa and atob functions. First, a variable ori is defined and  
initialized with the string “this is a text!” Then, the btoa function is used to encode the ori  
string into a Base64-encoded string, and the result is stored in a variable called enc. Next,  
the atob function is used to decode the Base64-encoded string stored in enc, and the result  
is stored in a variable called dec. After these encoding and decoding operations, the code  
displays two alert boxes to the user. The first alert displays the Base64-encoded string  
\(enc\), and the second alert displays the decoded string \(dec\). Thus, this code encodes a  
string using Base64 encoding and then decodes it back to its original form, demonstrating  
how to use the btoa and atob functions for encoding and decoding strings in JavaScript. 13 Browser Specific 229  
13.1.2  
Ex. \(223\) – Local storage  
\<!DOCTYPE html\>  
Output\:  
\<html\>  
\<body\>  
From string\:  
------------------  
\<p id="d"\>\</p\>  
\{"v1"\:\["a","b",  
"c"\],"v2"\:[[0,1,0],  
\<script\>  
\[1,1,1\],\[0,1,0\]\],  
"v3"\:\{"c1"\:\["a",  
// any object to string  
"b","c"\],"c2"\:  
let a = \["a", "b", "c"\];  
[[0,1,0],[1,1,1],  
\[0,1,0\]\],"c3"\:42\}\}  
let b = \[  
\[0, 1, 0\],  
\[1, 1, 1\],  
From object\:  
\[0, 1, 0\]  
------------------  
\];  
b  
1  
let c = \{ "c1"\:a, "c2"\:b, "c3"\:42 \};  
0,1,0,1,1,1,0,1,0  
1  
let obj = \{ "v1"\:a, "v2"\:b, "v3"\:c \};  
//Store data\:  
let txt = JSON.stringify\(obj\);  
localStorage.setItem\("txtJSON", txt\);  
//Retrieve data\:  
txt = localStorage.getItem\("txtJSON"\);  
obj = JSON.parse\(txt\);  
let msg =  
'';  
msg += 'From string\:\<br\>' + txt;  
msg += '\<hr\>From object\:\<br\>' + obj.v1\[1\];  
msg += '\<br\>' + obj.v2\[0\]\[1\];  
msg += '\<br\>' + obj.v3.c2;  
msg += '\<br\>' + obj.v3.c2\[1\]\[1\];  
document.getElementById\("d"\).innerHTML += msg;  
\</script\>  
\</body\>  
\</html\>  
This code is embedded within an HTML document and performs various operations  
related to data serialization and storage using the localStorage object. The HTML docu-  
ment begins with the usual declarations and structure, containing a paragraph element with  
the id attribute set to “d.” In the JavaScript section, the code defines several variables\: \(i\)  
Variable a is an array containing the elements “a,” “b,” and “c.” \(ii\) Variable b is a nested  
array representing a 3 × 3 matrix with binary values. \(iii\) Variable c is an object with  
three key-value pairs\: “c1”, “c2”, and “c3”, where “c1” is assigned the a array, “c2” is  
assigned the b matrix, and “c3” is assigned the number 42. Also, there is variable obj that 230 13 Browser Specific  
is an object with three key-value pairs\: “v1”, “v2”, and “v3”, where “v1” is assigned the a  
array, “v2” is assigned the b matrix, and “v3” is assigned the c object. The code proceeds  
to store the obj object as a JSON string in the localStorage under the key “txtJSON” via  
localStorage.setItem\(“txtJSON”, txt\), using the JSON.stringify method. Next, it retrieves  
the stored JSON string from localStorage using localStorage.getItem\(“txtJSON”\). Then  
it parses it back into a JavaScript object, assigning it to the obj variable. The code con-  
structs an HTML message \(msg\) by concatenating strings and data from the obj object. It  
includes both the original JSON string and specific values from the parsed object, such as  
elements from v1, an element from v2, the entire c2 array, and an element from c2. These  
values are appended to the msg string with HTML line breaks for formatting. At the end,  
it sets the inner HTML of the paragraph element with the id “d” to display the constructed  
msg, effectively showing the serialized data, parsed values, and their relationships within  
the HTML document when it is loaded in a web browser.  
13.1.3  
Ex. \(224\) – Open files  
\<!DOCTYPE html\>  
Output\:  
\<html\>  
\<head\>  
This is  
\<title\>File Upload\</title\>  
content from  
\</head\>  
test.txt  
\<body\>  
\<input type="file" id="d" onchange="a\(event\)"\>  
\<div id="s"\>...\</div\>  
\<script\>  
function a\(event\) \{  
const d = event.target;  
const f = d.files\[0\];  
if \(f\) \{  
const reader = new FileReader\(\);  
reader.onload = function \(e\) \{  
const s = e.target.result;  
c\(s\);  
\};  
reader.readAsText\(f\);  
\}  
\}  
function c\(x\) \{  
const sd = document.getElementById\("s"\);  
sd.textContent = x;  
\}  
\</script\>  
\</body\>  
\</html\> 13 Browser Specific 231  
The code is an HTML document with a JavaScript functionality for file uploads. The  
document has a title “File Upload”. Within the body of the document, there is an input  
element of type “file” with an ID “d”. When a file is selected using this input, the “a”  
function is triggered due to the “onchange” event. Below the file input, there is a “div”  
element with an ID “s” that contains placeholder text represented by three dots. This  
“div” element is the container that shows the file content. The JavaScript code within  
the document defines two functions\: a and c. The a function is triggered when a file is  
selected. It captures the selected file from the input element. If a file is selected, it uses the  
“FileReader” object to read the content of the file. When the reading process is complete,  
it takes the result and passes it to the c function through the “onload” event of the reader.  
The c function takes a single parameter x. It finds the “div” element with the ID “s” in  
the document and sets its text content to the value of x, which is essentially the content  
of the uploaded file. Thus, this code provides a simple way for users to upload a text file  
and then displays its content within the div on the web page.  
13.1.4  
Ex. \(225\) – Charts  
\<canvas id="bio" height="300" width="1100"\>\</canvas\>  
\<script\>  
Chart\('23,45,66,77,44,33,99', '\#ff0000', 'y'\);  
function Chart\(q,c,e\)\{  
var s = q.split\(","\);  
var mx = Math.max.apply\(null, s\);  
var canvas = document.getElementById\('bio'\);  
var w = canvas.width;  
var h = canvas.height;  
if\(canvas.getContext\) \{  
var ctx = canvas.getContext\('2d'\);  
if\(e=='y'\)\{ctx.clearRect\(0,0, w, h\);\}  
ctx.fillStyle = "\#f1f1f1";  
ctx.fillRect\(0,0,w,h\);  
ctx.moveTo\(0,0\);  
ctx.beginPath\(\);  
for \(var i=0; i\<=s.length-1; i++\)  
\{  
var y = h - \(\(h/mx\) \* s\[i\]\);  
var x =\(w/s.length\) \* i;  
ctx.lineTo\(x,y\);  
\} 232 13 Browser Specific  
ctx.lineWidth = 2;  
ctx.strokeStyle = c;  
ctx.stroke\(\);  
\}  
\}  
\</script\>  
Output\:  
This code snippet is designed to create a simple line chart using the  
HTML5 \<canvas\> element. There is an HTML \<canvas\> element with the id attribute set to  
“bio,” and it has a specified height of 300 pixels and width of 1100 pixels. The JavaScript  
code begins by defining a function called Chart that takes three arguments\: q, c, and  
e. This function is used to draw a line chart on the canvas. Inside the Chart function  
the variable s is created by splitting the string q into an array of values using a comma  
as the delimiter. The variable mx is calculated as the maximum value from the array s.  
The code then retrieves the \<canvas\> element with the id “bio” and stores it in the can-  
vas variable. The width and height of the canvas are obtained and stored in the w and h  
variables, respectively. The code checks if the canvas is supported by the browser using  
the if \(canvas.getContext\) condition. If e is equal to “y”, it clears the entire canvas using  
ctx.clearRect\(0, 0, w, h\). Note that “y” means “yes”, indicating the imperative need to  
clear the canvas. Next, it sets the fill style of the canvas to grey using ctx.fillStyle and fills 13 Browser Specific 233  
the entire canvas with this color using ctx.fillRect\(0, 0, w, h\). The code then starts drawing  
the chart by moving to the initial point \(0, 0\) using ctx.moveTo\(0, 0\) and beginning a new  
path with ctx.beginPath\(\). A loop iterates through the values in the array s, calculating the  
x and y coordinates for each bar in the chart. It then uses ctx.lineTo\(x, y\) to draw lines  
connecting these points, effectively creating a line chart. The line width is set to 2 pixels  
using ctx.lineWidth = 2, and the stroke color is set to the value of c using ctx.strokeStyle  
= c. The chart is then drawn on the canvas with ctx.stroke\(\). Thus, this code generates a  
simple line chart on the specified canvas element based on the input values provided to  
the Chart function.  
13.1.5  
Ex. \(226\) – The Graphical User Interface \(GUI\)  
\<canvas id="bio" height="300" width="1100"\>\</canvas\>  
\<button onclick="Chart\(take\(\), '\#ff0000', 'y'\);"\>  
Plot chart!  
\</button\>  
\<input type="text" id="number\_sequence" value="23,45,66,77,44,33,99"\>\<br\>  
\<script\>  
function take\(\) \{  
a = document.getElementById\("number\_sequence"\)  
return a.value  
\}  
function Chart\(q,c,e\)\{  
var s = q.split\(","\);  
var mx = Math.max.apply\(null, s\);  
var canvas = document.getElementById\('bio'\);  
var w = canvas.width;  
var h = canvas.height;  
if\(canvas.getContext\) \{  
var ctx = canvas.getContext\('2d'\);  
if\(e=='y'\)\{ctx.clearRect\(0,0, w, h\);\}  
ctx.fillStyle = "\#f1f1f1";  
ctx.fillRect\(0,0,w,h\);  
ctx.moveTo\(0,0\);  
ctx.beginPath\(\); 234 13 Browser Specific  
for \(var i=0; i\<=s.length-1; i++\)  
\{  
var y = h - \(\(h/mx\) \* s\[i\]\);  
var x =\(w/s.length\) \* i;  
ctx.font = "18px Arial";  
ctx.fillStyle = "black";  
ctx.textAlign = "left";  
ctx.fillText\(s\[i\], x,y\);  
ctx.lineTo\(x,y\);  
\}  
ctx.lineWidth = 2;  
ctx.strokeStyle = c;  
ctx.stroke\(\);  
\}  
\}  
\</script\>  
Output\:  
The example above is an updated version of the previous code, which now adds labels  
to the line, uses a button to trigger the Chart function, and allows the user to change  
the sequence of numbers in real time, makes it a full graphical user interface \(GUI\).  
As before, in the HTML structure, a canvas element named “bio” is provided, which  
measures 1100 pixels wide and 300 pixels tall. Right next to this canvas, there is an  
interactive button that calls the Chart function when clicked. To populate the chart, data  
is fetched from an input element, identified as “number\_sequence”, which already houses  
a string of numbers separated by commas. The JavaScript unveils two main functions. The  
take function, straightforward in its operation, is tasked with obtaining the value from the  
“number\_sequence” input. However, the heart of the chart-drawing process lies within the  
Chart function. It initiates by converting the input string, represented by variable q, into  
an array called s using the split method. The function pinpoints the highest number, which  
is stored in the variable mx, by using the Math.max method on this array. This number  
will aid in scaling the chart appropriately to fit the canvas dimensions. Upon setting up  
these foundational pieces, the function grabs a reference to the canvas, using its “bio”  
identifier. The dimensions of this canvas, in terms of width and height, are respectively  
stored in the variables w and h. Before any drawing can take place, the function ensures 13 Browser Specific 235  
that the canvas supports 2D rendering operations. If this condition checks out, a series of  
graphical commands commence. In a scenario where the third parameter e matches the  
string “y” \(i.e. “Yes”\), the clearRect method of the canvas context, named ctx, clears any  
previous drawings, ensuring a clean slate. The canvas is then bathed in grey using the  
fillStyle property of ctx, followed by a call to the fillRect method. The subsequent loop  
cycles through each number in the s array. For every iteration, the function calculates  
the x and y coordinates for each data point. The vertical position y is computed based  
on the number ratio to the maximum value mx, and its relative height in the canvas. The  
horizontal position x, on the other hand, is deduced by dividing the canvas width by the  
total number of data points. During this calculation phase, each number from the array is  
also etched onto the canvas in a black font. The fillText method of ctx is responsible for  
this display. A continuous line connecting all data points is then forged. Once all points  
have been plotted and interconnected, the path is accentuated using the color specified  
by the variable c. The outlining of the chart is made possible by setting the strokeStyle  
property of ctx and invoking the stroke method. References  
1\. P.A. Gagniuc, An Introduction to Programming Languages\: Simultaneous Learning in Multi-  
ple Coding Environments. Synthesis Lectures on Computer Science, Springer Nature, pp. 1–280  
\(2023\)  
2\. P.M. Hirsch, Exercise the power of the World Wide Web. IEEE Comput. Appl. Power 8\(3\), 25–  
29 \(1995\)  
3\. O. Richardson, Gathering accurate client information from World Wide Web sites. Interact.  
Comput. 12\(6\), 615–622 \(2000\)  
4\. D. Mosedale, W. Foss, R. McCool, Lessons learned administering Netscape’s Internet site. IEEE  
Internet Comput. 1\(2\), 28–35 \(1997\)  
5\. P. Dreyfus, The second wave. Netscape on usability in the services-based Internet. IEEE Internet  
Comput. 2\(2\), 36–40 \(1998\)  
6\. V. Anupam, A. Mayer, Secure Web scripting. IEEE Internet Comput. 2\(6\), 46–55 \(1998\)  
7\. A. Elyasov, I.S.W.B. Prasetya, J. Hage, Search-based test data generation for JavaScript func-  
tions that interact with the DOM. in IEEE 29th International Symposium on Software Reliability  
Engineering \(ISSRE\), Memphis, TN, USA, pp. 88–99 \(2018\)  
8\. C.M. Novac, O.C. Novac, R.M. Sferle, M.I. Gordan, G. BUJDOSó, C.M. Dindelegan, Com-  
parative study of some applications made in the Vue.js and React.js frameworks, in 16th Inter-  
national Conference on Engineering of Modern Electric Systems \(EMES\), Oradea, Romania,  
pp. 1–4 \(2021\)  
9\. R. Derks, React Projects\: Build advanced cross-platform projects with React and React Native  
to become a professional developer, Packt Publishing \(2022\)  
10\. M. Galster, Software reference architectures\: related architectural concepts and challenge, in  
2015 1st International Workshop on Exploring Component-based Techniques for Constructing  
Reference Architectures \(CobRA\), Montreal, QC, Canada, pp. 1-4 \(2015\)  
11\. S. Wallentowitz, B. Kersting, D.M. Dumitriu, Potential of WebAssembly for Embedded Sys-  
tems, in 11th Mediterranean Conference on Embedded Computing \(MECO\), Budva, Montene-  
gro, pp. 1–4 \(2022\)  
12\. V. Kjorveziroski, S. Filiposka, A. Mishev, Evaluating WebAssembly for Orchestrated Deploy-  
ment of Serverless Functions,” in 30th Telecommunications Forum \(TELFOR\) \(Belgrade, Serbia,  
2022\), pp.1–4  
13\. A. Romano, W. Wang, WASim\: Understanding WebAssembly Applications through Classifica-  
tion, in 35th IEEE/ACM International Conference on Automated Software Engineering \(ASE\),  
Melbourne, VIC, Australia, pp. 1321–1325 \(2020\)  
© The Editor\(s\) \(if applicable\) and The Author\(s\), under exclusive license  
to Springer Nature Switzerland AG 2024  
P. A. Gagniuc, Coding Examples from Simple to Complex, Synthesis Lectures  
on Computer Science, https\://doi.org/10.1007/978-3-031-53820-9  
237 238 References  
14\. D. Fortunato, J. Bernardino, Progressive web apps\: An alternative to the native mobile Apps,  
in 13th Iberian Conference on Information Systems and Technologies \(CISTI\), Caceres, Spain,  
pp. 1–6 \(2018\)  
15\. F. Correia, Ó. Ribeiro, J. C. Silva, Progressive web apps development\: Study of caching mecha-  
nisms, in 21st International Conference on Computational Science and Its Applications \(ICCSA\),  
Cagliari, Italy \(2021\)  
16\. A. Audevart, K. Banachewicz, L. Massaron, Machine Learning Using TensorFlow Cookbook\:  
Create powerful machine learning algorithms with TensorFlow, Packt Publishing,\(2021\)  
17\. P.M.A. Singh, Introduction to TensorFlow 2.0. In\: Learn TensorFlow 2.0., Berkeley, CA.\:  
Apress \(2020\)  
18\. J. Rivera, Welcome to TensorFlow.js. In\: Practical TensorFlow.js, Berkeley, CA.\: Apress \(2020\)  
19\. P. Gagniuc, C. Ionescu-Tîrgovi¸ste, Dynamic block allocation for biological sequences. Proc.  
Rom. Acad., Series B 15\(3\), 233–240 \(2013\)  
20\. P. Gagniuc, C. Ionescu-Tîrgovi¸ste, C.H. R˘adulescu, Automatic growth detection of cell cultures  
through outlier techniques. Int. J. Comput. Commun. 8\(3\), 407–415 \(2013\)  
21\. K. Thomas, P. Gagniuc, E. Gagniuc, Moonlighting genes harbor antisense ORFs that encode  
potential membrane proteins. Sci. Rep. 13, 12591 \(2023\)  
22\. P. Gagniuc and et al., A sensitive method for detecting dinucleotide islands and clusters through  
depth analysis. Romanian J. Diabetes Nutrit. Metabolic Diseases 18\(2\), 165–70 \(2011\)  
23\. P.A. Gagniuc, C. Ionescu-Tirgoviste, E. Gagniuc, M. Militaru, L.C. Nwabudike, B.I. Pavaloiu,  
A. Vasil˘ a¸ teanu, N. Goga, G. Dr˘ agoi, I. Popescu, S. Dima, Spectral forecast\: a general pur-  
pose prediction model as an alternative to classical neural networks. Chaos 30, 033119–033126  
\(2020\)  
24\. P.A. Gagniuc, Algorithms in Bioinformatics\: Theory and Implementation, Hoboken \(Wiley,  
USA, New Jersey, 2021\)  
25\. P.A. Gagniuc, Markov Chains\: From Theory to Implementation and Experimentation, Hoboken,  
NJ; USA\: Wiley \(2017\)  
