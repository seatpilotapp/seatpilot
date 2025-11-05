T   
B  B    
   
D   B   D T   
B  B    
   
D   B   D  
# Visualizing Your Data  
# Using Real-World  
# Business Scenarios  
S W | J S |  C Cover image\: Course Metrics Dashboard by Jeffrey Shaffer  
Cover design\: Wiley  
Copyright © 2017 by Steve Wexler, Jeffrey Shaffer, and Andy Cotgreave. All rights reserved.  
Published by John Wiley & Sons, Inc., Hoboken, New Jersey.  
Published simultaneously in Canada.  
No part of this publication may be reproduced, stored in a retrieval system, or transmitted  
in any form or by any means, electronic, mechanical, photocopying, recording, scanning,  
or otherwise, except as permitted under Section 107 or 108 of the 1976 United States  
Copyright Act, without either the prior written permission of the Publisher, or authorization  
through payment of the appropriate per-copy fee to the Copyright Clearance Center, Inc.,  
222 Rosewood Drive, Danvers, MA 01923, \(978\) 750-8400, fax \(978\) 646-8600, or on the  
Web at www.copyright.com. Requests to the Publisher for permission should be addressed to  
the Permissions Department, John Wiley & Sons, Inc., 111 River Street, Hoboken, NJ 07030,  
\(201\) 748-6011, fax \(201\) 748-6008, or online at http\://www.wiley.com/go/permissions.  
Limit of Liability/Disclaimer of Warranty\: While the publisher and author have used their best  
efforts in preparing this book, they make no representations or warranties with respect to the  
accuracy or completeness of the contents of this book and specifically disclaim any implied  
warranties of merchantability or fitness for a particular purpose. No warranty may be created  
or extended by sales representatives or written sales materials. The advice and strategies  
contained herein may not be suitable for your situation. You should consult with a professional  
where appropriate. Neither the publisher nor author shall be liable for any loss of profit or any  
other commercial damages, including but not limited to special, incidental, consequential, or  
other damages.  
For general information on our other products and services or for technical support, please  
contact our Customer Care Department within the United States at \(800\) 762-2974, outside the  
United States at \(317\) 572-3993 or fax \(317\) 572-4002.  
Wiley publishes in a variety of print and electronic formats and by print-on-demand. Some  
material included with standard print versions of this book may not be included in e-books or  
in print-on-demand. If this book refers to media such as a CD or DVD that is not included in the  
version you purchased, you may download this material at http\://booksupport.wiley.com. For  
more information about Wiley products, visit www.wiley.com.  
A catalog record for this book is available from the Library of Congress.  
ISBN 978-1-119-28271-6 \(Paperback\)  
ISBN 978-1-119-28278-5 \(ePDF\)  
ISBN 978-1-119-28273-0 \(ePub\)  
ISBN 978-1-119-28308-9 \(obook\)  
Printed in the United States of America.  
10 9 8 7 6 5 4 3 2 1 Contents  
Acknowledgments vii  
About the Authors ix  
Introduction xi  
PAT I A ST ATI  
Chapter 1 ata Visualization\: A Primer 2  
PAT II T SCAIS  
Chapter 2 Course Metrics ashboard Chapter 3 Comparing Individual Performance with Peers Chapter 4 What-If Analysis\: Wage Increase amifications Chapter 5 xecutive Sales ashboard Chapter 6 anking by ow, Comparing with Then Chapter 7 Are We on Pace to each ur oals? Chapter 8 Multiple Key Performance Metrics Chapter 9 Power Plant perations Monitoring 38  
48  
62  
70  
80  
92  
98  
106  
Chapter 10 Showing Year-to-ate and Year-over-Year at the  
Same Time 118  
Chapter 11 Premier League Player Performance Metrics 130  
Chapter 12 BS 6 ations Championship Match Performance  
Analysis 138  
Chapter 13 Web Analytics 146  
Chapter 14 Patient istory Analysis of ecent ospital Admissions 156  
v vi Contents  
Chapter 15 ospitality ashboard for otel Management Chapter 16 Sentiment Analysis\: Showing verall istribution 174  
Chapter 17 Showing Sentiment with et Promoter Score Chapter 18 Server Process Monitoring Chapter 19 Big Mac Index Chapter 20 Complaints ashboard 224  
Chapter 21 ospital perating oom tilization Chapter 22 Showing ank and Magnitude 164  
186  
202  
210  
236  
246  
Chapter 23 Measuring Claims across Multiple Measures and  
imensions 258  
Chapter 24 Showing Churn or Turnover Chapter 25 Showing Actual versus Potential tilization Chapter 26 ealth Care Provider Productivity Monitoring Chapter 27 Telecom perator xecutive ashboard Chapter 28 conomy at a lance 268  
282  
294  
306  
316  
Chapter 29 Call Center 328  
PAT III Chapter 30 SCCI I T AL WL  
Want to ngage People? Make Your ashboards  
Personal 338  
Chapter 31 Visualizing Time 352  
Chapter 32 Beware the ead-nd ashboard Chapter 33 The Allure of ed and reen Chapter 34 The Allure of Pies and onuts Chapter 35 Clouds and Bubbles Chapter 36 A Journey into the nknown 382  
390  
396  
404  
410  
lossary 419  
Bibliography 423  
Index 425 Acknowledgments  
rom the three of us  
Stephen Few, whose books have made a profound  
and lasting impression on us.  
Alberto Cairo for his invaluable feedback and for his  
leadership in the data visualization community.  
Our technical reviewers greatly improved our first  
drafts. Thanks to Troy Magennis, Andy Kirk, Jon  
Schwabish, Ariel Pohoryles, Trudy Weiss Craig,  
Michael Fry, Andy Kriebel, and a special thanks to  
Cole Nussbaumer Knaflic for introducing us to the  
Wiley team and who went far beyond our expecta-  
tions with her detailed edits and comments.  
All the contributors to this book gave significant time  
to tweak their dashboards according to our requests.  
We thank you for allowing us to include your work in  
the book.  
Thanks, also, to Mark Boone, KK Molugu, Eric Duell,  
Chris DeMartini, and Bob Filbin for their efforts.  
Our stellar team at Wiley\: acquisitions editor Bill Fal-  
loon for fighting so hard on our behalf; editor Christina  
Verigan for her deft reworking and invaluable help  
optimizing flow; senior production editor Samantha  
Hartley for overseeing the daunting process of making  
this book a beautiful, tangible thing; copy editor Debra  
Manette for such detailed editing and insights; proof-  
reader Hope Breeman for her meticulous proof check;  
the team at WordCo for a comprehensive index and  
marketing manager Heather Dunphy for her excep-  
tional expertise in connecting author with audience.  
rom Steve  
My wife, Laura, and my daughters, Janine and Diana,  
for the never-ending support and love.  
Ira Handler and Brad Epstein, whose friendship,  
encouragement, and example have been a godsend  
for the past dozen years.  
Joe Mako, who has always been willing to help me  
with “the difficult stuff” and provided much needed  
encouragement when I was starting out.  
The Princeton University Triangle Club, where I learned  
how to bring talented people together to make won-  
derful things. Without my experiences there I don’t  
know if I would have had the insight and ability to  
recruit my fellow authors.  
Jeff and Andy, who not only made the book way  
better than it would have been had I tackled it on  
vii viii Acknowledgments  
my own, but for providing me with one of the most  
rewarding and enriching experiences of my career.  
Your abilities, candor, humor, grit, patience, impa-  
tience, thoughtfulness, and leadership made for a  
remarkable ride.  
rom ndy  
I would like to thank Steve and Jeff for approaching  
me to join this project. I’d been procrastinating on  
writing a book for many years, and the opportunity  
to work with two passionate, skilled leaders was the  
trigger I needed to get going. I would like to thank  
them both for many hours of constructive debate  
\(argument?\) over the rights and wrongs of all aspects  
of dashboards and data visualization. It has been an  
enriching experience.  
Finally, to Liz, my wife, and my daughters, Beatrice  
and Lucy. Thank you for your support and the free-  
dom to abandon you all on weekends, mornings, and  
evenings in order to compete this project. I could not  
have done it without you.  
rom Jeff  
Thank you, Steve and Andy. It was a pleasure working  
with you guys. I will miss the collaboration, especially  
our many hours of discussion about data visualization  
and dashboard design.  
A special thank you to Mary, my wife, and to Nina and  
Elle, my twin daughters, for sacrificing lots of family time  
over many long nights and weekends. I would not have  
been able to complete this project without your support. About the Authors  
teve Wexler has worked with ADP, Gallup, Deloitte,  
Convergys, Consumer Reports, The Economist,  
ConEd, D&B, Marist, Tradeweb, Tiffany, McKinsey  
& Company, and many other organizations to help  
them understand and visualize their data. Steve is a  
Tableau Zen Master, Iron Viz Champion, and Tableau  
Training Partner.  
His presentations and training classes combine an  
extraordinary level of product mastery with the real-  
world experience gained through developing thou-  
sands of visualizations for dozens of clients. In addition  
to his recognized expertise in data visualization and  
Tableau, Steve has decades of experience as a suc-  
cessful instructor in all areas of computer-based tech-  
nology. Steve has taught thousands of people in both  
large and small organizations and is known for con-  
ducting his seminars with clarity, patience, and humor.  
Website\: DataRevelations.com  
Jeffrey . haffer is Vice President of Information  
Technology and Analytics at Recovery Decision Sci-  
ence and Unifund. He is also Adjunct Professor at  
the University of Cincinnati, where he teaches Data  
Visualization and was named the 2016 Outstanding  
Adjunct Professor of the Year.  
He is a regular speaker on the topic of data visualization,  
data mining, and Tableau training at conferences,  
symposiums, workshops, universities, and corporate  
training programs. He is a Tableau Zen Master, and  
was the winner of the 2014 Tableau Quantified Self  
Visualization Contest, which led him to compete in  
the 2014 Tableau Iron Viz Contest. His data visual-  
ization blog was on the shortlist for the 2016 Kantar  
Information is Beautiful Awards for Data Visualiza-  
tion Websites.  
Website\: DataPlusScience.com  
ndy Cotgreave is Technical Evangelist at Tableau  
Software. He has over 10 years’ experience in data  
visualization and business intelligence, first honing  
his skills as an analyst at the University of Oxford.  
Since joining Tableau in 2011, he has helped and  
inspired thousands of people with technical advice  
and ideas on how to build a data-driven culture in  
a business.  
In 2016 he ran the MakeoverMonday \(http\://www  
.makeovermonday.co.uk/\) project with Andy Kriebel,  
a social data project which saw over 500 people  
make 3,000 visualizations in one year. The proj-  
ect received an honourable mention in the Dataviz  
ix x About the Authors  
Project category of the 2016 Kantar Information is  
Beautiful Awards.  
Andy has spoken at conferences around the world,  
including SXSW, Visualized, and Tableau’s customer  
conferences. He writes a column for Computerworld,  
Living with Data \(http\://www.computerworld.com/  
blog/living-data/\), as well as maintaining his own  
blog, GravyAnecdote.com.  
Website\: GravyAnecdote.com Introduction  
We wrote The Big Book of Dashboards for anyone  
tasked with building or overseeing the development  
of business dashboards. Over the past decade, count-  
less people have approached us after training sessions,  
seminars, or consultations, shown us their data, and  
asked\: “What would be a really good way to show this?”  
These people faced a specific business predicament  
\(what we call a “scenario”\) and wanted guidance on  
how to best address it with a dashboard. In reviewing  
dozens of books about data visualization, we were sur-  
prised that, while they contained wonderful examples  
showing why a line chart often works best for time-  
series data and why a bar chart is almost always better  
than a pie chart, none of them matched great dash-  
boards with real-world business cases. After pooling  
our experience and enormous collection of dash-  
boards, we decided to write our own book.  
ow his Book Is ifferent  
This book is not about the fundamentals of data visu-  
alization. That has been done in depth by many amaz-  
ing authors. We want to focus on proven, real-world  
examples and why they succeed.  
However, if this is your first book about the topic  
of data visualization, we do provide a primer in  
Part I with everything you need to know to under-  
stand how the charts in the scenarios work. We also  
dearly hope it whets your appetite for more, which  
is why this section finishes with our recommended  
further reading.  
ow his Book Is rganized  
The book is organized into three parts.  
Part \:  trong Foundation. This part covers the  
fundamentals of data visualization and provides  
our crash course on the foundational elements  
that give you the vocabulary you need to explore  
and understand the scenarios.  
Part \: The cenarios. This is the heart of the book,  
where we describe dozens of different business  
scenarios and then present a dashboard that  
“solves” the challenges presented in those  
scenarios.  
Part \: ucceeding in the eal World. The  
chapters in this part address problems we’ve  
encountered and anticipate you may encounter  
as well. With these chapters—distilled from  
decades of real-world experience—we hope to  
make your journey quite a bit easier and a lot  
more enjoyable.  
xi xii Introduction  
ow to Use his Book  
We encourage you to look through the book to find  
a scenario that most closely matches what you are  
tasked with visualizing. Although there might not be  
an exact match, our goal is to present enough sce-  
narios that you can find something that will address  
your needs. The internal conversation in your head  
might go like this\:  
“Although my data isn’t exactly the same as what’s in  
this scenario, it’s close enough, and this dashboard  
really does a great job of helping me and others see  
and understand that data. I think we should use this  
approach for our project as well.”  
For each scenario we present the entire dashboard at  
the beginning of the chapter, then explore how indi-  
vidual components work and contribute to the whole.  
By organizing the book based on these scenarios and  
offering practical and effective visualization exam-  
ples, we hope to make The Big Book of Dashboards  
a trusted resource that you open when you need to  
build an effective business dashboard. To ensure you  
get the most out of these examples, we have included  
a visual glossary at the back of this book. If you come  
across an unfamiliar term, such as “sparkline,” you  
can look it up and see an illustration.  
We also encourage you to spend time with all the  
scenarios and the proposed solutions as there may  
be some elements of a seemingly irrelevant scenario  
that may apply to your own needs.  
For example, Chapter 11 shows a dashboard used by  
a team in the English Premier League to help players  
understand their performance. Your data might have  
nothing to do with sports, but the dashboard is a  
great example of showing current and historical per-  
formance. \(See Figure I.1.\) That might be something  
you have to do with your data. Plus, if you skip one  
scenario, you might miss a great example of the exact  
chart you need for your own solution.  
We also encourage you to browse the book for moti-  
vation. Although a scenario may not be a perfect  
match, the thought process and chart choices may  
inspire you.  
Succeeding in the eal World  
In addition to the scenarios, an entire section of  
the book is devoted to addressing many practi-  
cal and psychological factors you will encounter in  
your work. It’s great to have theory- and evidenced-  
based research at your disposal, but what will you  
do when somebody asks you to make your dash-  
board “cooler” by adding packed bubbles and  
donut charts?  
The three of us have a combined 30-plus years of hands-  
on experience helping people in hundreds of organiza-  
tions build effective visualizations. We have fought \(and  
sometimes lost\) many “best practices” battles. But by  
having endured these struggles, we bring an uncom-  
mon empathy to the readers of this book.  
We recognize that at times readers will be asked to  
create dashboards and charts that exemplify bad  
practice. For example, a client or a department head  
may stipulate using a particular combination of col-  
ors or demand a chart type that is against evidence-  
based data visualization best practices.  
We hear you. We’ve been there. Succeeding in the eal World xiii  
 SI  
\< BW  otal  
istance  
I un  
istance  
um I  
uns  
S un  
istance  
um S  
uns  
Sprint  
istance  
um  
Sprints  
igh  
ccels.  
igh  
ecels.  
op  
Speed  
ecovery  
ime  
F .1 League Club  
\(Note\: Fake data is used.\)  
IP vs MCS U  
18 May 2016  
PIUS 5 S  SS  
MC  
  
95 mins  
P  
M  
K  
K  
Match Match  
17 21  
B  \>  
10,967m  
14  
1,308m  
151  
924m  
168  
385m  
47  
17  
10  
9.4m/s  
8  
9  
8  
10  
8  
10  
8  
10  
1  
37s  
8  
3  
7  
6  
5  
6  
7  
13  
7  
7  
6  
10  
lthough the dashboard in Figure I.1  
pertains to sports, the techniques are  
universal. Here the latest event is in yellow, the  
five most recent events are in red, and older  
events are in a muted gray. Brilliant.  
A player summary from an English Premier xiv Introduction  
We’ve faced many of the hurdles you will encounter  
and the concepts you will grapple with in your attempt  
to build dashboards that are informative, enlighten-  
ing, and engaging. The essays in this section will help  
smooth the way for you by offering suggestions and  
alternatives for these issues.  
What to o and What Not to o  
Although the book is an attempt to celebrate good  
examples, we’ll also show plenty of bad examples.  
We guarantee you will see this kind of work out in the  
wild, and you may even be asked to emulate it. We  
mark these “bad” examples with the cat icon shown  
in Figure I.2 so that you don’t have to read the sur-  
rounding text to determine if the chart is something  
you should emulate or something you should avoid.  
F .2 chart like this one.  
If you see this icon, it means don’t make a  
Illustration by Eric Kim  
What Is a ashboard?  
Ask 10 people who build business dashboards  
to define a dashboard and you will probably get  
10 different definitions. For the purpose of this book,  
our definition is as follows\:  
 dashboard is a visual display of data  
used to monitor conditions and/or  
facilitate understanding.  
This is a broad definition, and it means that we  
would consider all of the examples listed below to  
be dashboards\:  
• An interactive display that allows people to explore  
worker compensation claims by region, industry,  
and body part  
• A PDF showing key measures that gets e-mailed  
to an executive every Monday morning  
• A large wall-mounted screen that shows support  
center statistics in real time  
• A mobile application that allows sales managers to  
review performance across different regions and  
compare year-to-date sales for the current year  
with the previous year  
Even if you don’t consider every example in this book  
a true dashboard, we think you will find the discus-  
sion and analysis around each of the scenarios help-  
ful in building your solutions. Indeed, we can debate  
the definition until we are blue in the face, but that  
would be a horrible waste of effort as it simply isn’t that  
important. What is important—make that essential—  
is understanding how to combine different elements  
\(e.g., charts, text, legends, filters, etc.\) into a cohesive  
and coordinated whole that allows people to see and  
understand their data. inal hought\: here re  
o Perfect ashboards  
You will not find any perfect dashboards in this book.  
In our opinion, there is no such thing as a perfect  
dashboard. You will never find one perfect collection  
of charts that ideally suits every person who may  
encounter it. But, although they may not be perfect,  
the dashboards we showcase in the book successfully  
help people see and understand data in the real world.  
The dashboards we chose all have this in common\:  
Each one demonstrates some great ideas in a way  
that is relevant to the people who need to understand  
them. In short, they all serve the end users. Would  
we change some of the dashboards? Of course we  
would, and we weigh in on what we would change in  
inal Thought\: There Are o Perfect ashboards xv  
the author commentary at the end of each scenario.  
Sometimes we think a chart choice isn’t ideal; other  
times, the layout isn’t quite right; and in some cases,  
the interactivity is clunky or difficult. What we rec-  
ognize is that every set of eyes on a dashboard will  
judge the work differently, which is something you  
also should keep in mind. Where you see perfection,  
others might see room for improvement. The chal-  
lenge all the dashboard designers in this book have  
faced is balancing a dashboard’s presentation and  
objectives with time and efficiency. It’s not an easy  
spot to hit, but with this book we hope to make it  
easier for you.  
Steve Wexler  
Jeffrey Shaffer  
Andy Cotgreave PAT I  
A ST  
ATI Chapter 1  
ata Visualization\:  
# A Primer  
2 This book is about real-world dashboards and why  
they succeed. In many of the scenarios, we explain  
how the designers use visualization techniques to  
contribute to that success. For those new to the field,  
this chapter is a primer on data visualization. It pro-  
vides enough information for you to understand why  
we picked many of the dashboards. If you are more  
experienced, this chapter recaps data visualization  
fundamentals.  
Why o We isualize ata?  
Let’s see why it’s vital to visualize numbers by begin-  
ning with Table 1.1. There are four groups of num-  
bers, each with 11 pairs. In a moment, we will create  
a chart from them, but before we do, take a look at  
the numbers. What can you see? Are there any dis-  
cernible differences in the patterns or trends among  
them?  
Let me guess\: You don’t really see anything clearly.  
It’s too hard.  
Before we put the numbers in a chart, we might  
consider their statistical properties. Were we to do  
that, we’d find that the statistical properties of each  
group of numbers are very similar. If the table doesn’t  
show anything and statistics don’t reveal much, what  
happens when we plot the numbers? Take a look at  
Figure 1.1.  
Now do you see the differences? Seeing the num-  
bers in a chart shows you something that tables and  
some statistical measures cannot. We visualize data  
to harness the incredible power of our visual system  
to spot relationships and trends.  
This brilliant example is the creation of Frank  
Anscombe, a British statistician. He created this set  
TB 1.1 Table with four groups of numbers\: What do they tell you?  
roup  roup B roup C roup D  
x y x y x y x y  
10.00 8.04 10.00 9.14 10.00 7.46 8.00 6.58  
8.00 6.95 8.00 8.14 8.00 6.77 8.00 5.76  
13.00 7.58 13.00 8.74 13.00 12.74 8.00 7.71  
9.00 8.81 9.00 8.77 9.00 7.11 8.00 8.84  
11.00 8.33 11.00 9.26 11.00 7.81 8.00 8.47  
14.00 9.96 14.00 8.10 14.00 8.84 8.00 7.04  
6.00 7.24 6.00 6.13 6.00 6.08 8.00 5.25  
4.00 4.26 4.00 3.10 4.00 5.39 19.00 12.50  
12.00 10.84 12.00 9.13 12.00 8.15 8.00 5.56  
7.00 4.82 7.00 7.26 7.00 6.42 8.00 7.91  
5.00 5.68 5.00 4.74 5.00 5.73 8.00 6.89  
3 4 Chapter 1 ata Visualization\: A Primer  
F 1.1 Now can you see a difference in the four groups?  
of numbers—called “Anscombe’s Quartet”—in his  
paper “Graphs in Statistical Analysis” in 1973. In the  
paper, he fought against the notion that “numerical  
calculations are exact, but graphs are rough.”  
Another reason to visualize numbers is to help our  
memory. Consider Table 1.2, which shows sales num-  
bers for three categories, by quarter, over a four-year  
period. What trends can you see?  
Identifying trends is as hard as it was with Anscombe’s  
Quartet. To read the table, we need to look up every  
value, one at a time. Unfortunately, our short-term  
memories aren’t designed to store many pieces of  
information. By the time we’ve reached the fourth or  
fifth number, we will have forgotten the first one we  
looked at.  
Let’s try a trend line, as shown in Figure 1.2. ow o We Visualize ata? 5  
TB 1.2 What are the trends in sales?  
Category 2013 Q1 2013 Q2 2013 Q3 2013 Q4 2014 Q1 2014 Q2 2014 Q3 2014 Q4  
Furniture ffice upplies Technology \$463,988 \$352,779 \$338,169 \$317,735 \$320,875 \$287,934 \$319,537 \$324,319  
\$232,558 \$290,055 \$265,083 \$246,946 \$219,514 \$202,412 \$198,268 \$279,679  
\$563,866 \$244,045 \$432,299 \$461,616 \$285,527 \$353,237 \$338,360 \$420,018  
Category 2015 Q1 2015 Q2 2015 Q3 2015 Q4 2016 Q1 2016 Q2 2016 Q3 2016 Q4  
Furniture ffice upplies Technology \$307,028 \$273,836 \$290,886 \$397,912 \$337,299 \$245,445 \$286,972 \$313,878  
\$207,363 \$183,631 \$191,405 \$217,950 \$241,281 \$286,548 \$217,198 \$272,870  
\$333,002 \$291,116 \$356,243 \$386,445 \$386,387 \$397,201 \$359,656 \$375,229  
F 1.2 Now can you see the trends?  
Now we have much better insight into the trends. Office  
supplies has been the lowest-selling product category  
in all but two quarters. Furniture trends have been drop-  
ping slowly over the time period, except for a bump  
in sales in 2015 Q4 and a rise in the last two quarters.  
Technology sales have mostly been the highest but  
were particularly volatile at the start of the time period.  
The table and the line chart each visualized the same  
48 data points, but only the line chart lets us see the  
trends. The line chart turned 48 data points into three  
chunks of data, each containing 16 data points. Visual-  
izing the data hacks our short-term memory; it allows  
us to interpret large volumes of data instantly.  
ow o We isualize ata?  
We’ve just looked at some examples of the power of  
visualizing data. Now we need to move on to how we  
build the visualizations. To do that, we first need to  
look at two things\: preattentive attributes and types  
of data. 6 Chapter 1 ata Visualization\: A Primer  
Preattentive ttributes  
Visualizing data requires us to turn data into marks  
on a canvas. What kind of marks make the most  
sense? One answer lies in what are called “preatten-  
tive attributes.” These are things that our brain pro-  
cesses in milliseconds, before we pay attention to  
everything else. There are many different types. Let’s  
look at an example.  
Look at the numbers in Figure 1.3. How many 9s are  
there?  
How did you do? It’s easy to answer the question—  
you just look at all the values and count the 9s—but  
it takes a long time. We can make one change to  
the grid and make it very easy for you. Have a look  
at Figure 1.4.  
Now the task is easy. Why? Because we changed the  
color\: 9s are red, and all the other numbers are light gray.  
Color differences pop out. It’s as easy to find one  
red 9 on a table of hundreds of digits as it is on a  
10-by-10 grid. Think about that for a moment\: Your  
brain registers the red 9s before you consciously  
addressed the grid to count them. Check out the  
grid of 2,500 numbers in Figure 1.5. Can you see  
the 9?  
It’s easy to spot the 9. Our eyes are amazing at spot-  
ting things like this.  
F 1.3 How many 9s are there? F 1.4 Now it’s easy to count the 9s. F 1.5 other numbers on this page.  
There is a single 9 in this grid of 2,500 numbers. We wager you saw it before you started reading any 8 Chapter 1 ata Visualization\: A Primer  
F 1.6 Differences in size are easy to see too.  
F 1.7 having no color.  
Coloring every digit is nearly as bad as  
Color \(in this case, hue\) is one of several preattentive  
attributes. When we look at a scene in front of us,  
or a chart, we process these attributes in under  
250 milliseconds. Let’s try out a couple more preatten-  
tive features with our table of 9s. In Figure 1.6, we’ve  
made the 9s a different size from the rest of the figures.  
Size and hue\: Aren’t they amazing? That’s all very well  
when counting the 9s. What if our task is to count the  
frequency of each digit? That’s a slightly more realistic  
task, but we can’t just use a different color or size for  
each digit. That would defeat the preattentive nature  
of the single color. Look at the mess that is Figure 1.7.  
It’s not a complete disaster\: If you’re looking for the 6s,  
you just need to work out that they are red and then  
scan quickly for those. Using one color on a visualiza-  
tion is highly effective to make one category stand out.  
Using a few colors, as we did in Figure 1.2 to distinguish  
a small number of categories, is fine too. Once you’re  
up to around eight to ten categories, however, there are  
too many colors to easily distinguish one from another.  
To count each digit, we need to aggregate. Visual-  
ization is, at its core, about encoding aggregations,  
such as frequency, in order to gain insight. We need  
to move away from the table entirely and encode the  
frequency of each digit. The most effective way is to  
use length, which we can do in a bar chart. Figure 1.8  
shows the frequency of each digit. We’ve also colored  
the bar showing the number 9.  
Since the task is to count the 9s in the data source,  
the bar chart is one of the best ways to see the results.  
This is because length and position are best for quan-  
titative comparisons. If we extend the example one  
final time and consider which numbers are most com-  
mon, we could sort the bars, as shown in Figure 1.9. F 1.8 There are 13 9s.  
ow o We Visualize ata? 9  
also know that 9 was the third most common digit in the  
table. We can also see the frequency of every other digit.  
The series of examples we just presented used color,  
size, and length to highlight the 9s. These are three  
of many preattentive attributes. Figure 1.10 shows 12  
that are commonly used in data visualization.  
Some of them will be familiar to you from charts  
you have already seen. Anscombe’s Quartet  
\(see Figure 1.1\) used position and spatial grouping.  
The x- and y-coordinates are for position, while spatial  
grouping allows us to see the outliers and the patterns.  
Preattentive attributes provide us with ways to encode  
our data in charts. We’ll look into that in more detail  
in a moment, but not before we’ve talked about data.  
To recap, we’ve seen how powerful the visual system  
is and looked at some visual features we can use to  
display data effectively. Now we need to look at the  
different types of data, in order to choose the best  
visual encoding for each type.  
F 1.9 Sorted bar chart using color and length to  
show how many 9s are in our table.  
This series of examples with the 9s reemphasizes the  
importance of visualizing data. As with Anscombe’s  
Quartet, we went from a difficult-to-read table of num-  
bers to an easy-to-read bar chart. In the sorted bar chart,  
not only can we count the 9s \(the original task\), but we F 1.10 Preattentive features. 10 Chapter 1 ata Visualization\: A Primer  
 ypes of ata  
There are three types of data\: categorical, ordinal, and  
quantitative. Let’s use a photo to help us define each type.  
Categorical Data  
Categorical \(or nominal\) data represents things.  
These things are mutually exclusive labels without  
any numerical value. What nominal data can we use  
to describe the gentleman with me in the Figure 1.11?  
• His name is Brent Spiner.  
• By profession he is an actor.  
• He played the character Data in the TV show Star  
Trek\: The Next Generation.  
F 1.11 with a celebrity.  
Source\: Author’s photograph  
One of your authors \(Andy, on the right\)  
Name, profession, character, and TV show are all  
categorical data types. Other examples include  
gender, product category, city, and customer segment.  
Ordinal Data  
Ordinal data is similar to categorical data, except it  
has a clear order. Referring to Brent Spiner\:  
• Brent Spiner’s date of birth is Wednesday,  
February 2, 1949.  
• He appeared in all seven seasons of Star Trek\: The  
Next Generation.  
• Data’s rank was lieutenant commander.  
• Data was the fifth of six androids made by  
Dr. Noonien Soong.  
Other types of ordinal data include education experi-  
ence, satisfaction level, and salary bands in an orga-  
nization. Although ordinal values often have numbers  
associated with them, the interval between those val-  
ues is arbitrary. For example, the difference in an orga-  
nization between pay scales 1 and 2 might be very  
different from that between pay scales 4 and 6.  
Quantitative Data  
Quantitative data is the numbers. Quantitative \(or  
numerical\) data is data that can be measured and  
aggregated.  
• Brent Spiner’s date of birth is Wednesday,  
February 2, 1949.  
• His height is 5 ft 9 in \(180 cm\) tall.  
• He made 177 appearances in episodes of Star Trek.  
• Data’s positronic brain is capable of 60 trillion oper-  
ations per second.  
You’ll have noticed that date of birth appears in both  
ordinal and quantitative data types. Time is unusual  
in that it can be both. In Chapter 31, we look in detail  
about how you treat time influences your choice of  
visualization types.  
Other types of quantitative measures include sales,  
profit, exam scores, pageviews, and number of  
patients in a hospital. Quantitative data can be expressed in two ways\: as  
discrete or continuous data. Discrete data is pre-  
sented at predefined, exact points—there’s no “in  
between.” For example, Brent Spiner appeared in  
177 episodes of Star Trek; he couldn’t have appeared  
in 177.5 episodes. Continuous data allows for the “in  
between,” as there is an infinite number of possible  
intermediate values. For example, Brent Spiner grew  
to a height of 5 ft 9 in but at one point in his life he  
was 4 ft 7.5 in tall.  
ow o We Visualize ata? 11  
ncoding ata in Charts  
We’ve now looked at preattentive attributes and the three  
types of data. It’s time to see how to combine that knowl-  
edge into building charts. Let’s look at some charts and  
see how they encode the different types of data. Stick-  
ing with Star Trek, Figure 1.12 shows the IMDB.com rat-  
ings of every episode of Star Trek\: The Next Generation.  
Table 1.3 shows the different types of data, what type  
it is, and how it’s been encoded.  
F 1.12 Source\: IMDB.com  
Every episode of Star Trek\: The Next Generation rated.  
TB 1.3 Data used in Figure 1.12.  
Data Data Type ncoding Note  
Episode Episode Number Categorical Ordinal Position Each episode is represented by a dot. Each dot has its own position on the canvas.  
Position The x-axis shows the number of each episode in each season.  
Season Ordinal Color Each season is represented by a different color \(hue\).  
Position Each season also has its own section on the chart.  
IMDB rating Average season  
rating  
Ordinal Quantitative Position Position The better the episode, the higher it is on the y-axis.  
The horizontal bar in each pane shows the average rating of the episodes in  
each season. There is some controversy over whether you should average ordinal  
ratings. We believe that the practice is so common with ratings it is acceptable. 12 Chapter 1 ata Visualization\: A Primer  
Let’s look at a few more charts to see how preatten-  
tive features have been used. Figure 1.13 is from The  
Economist. Look at each chart and see if you can work  
out which types of data are being graphed and how  
they are being encoded.  
Table 1.4 shows how each data type is encoded.  
F 1.13 “A terrible record” from The Economist, July 2016.  
Source\: START, University of Maryland. The Economist, http\://tabsoft.co/2agK3if  
TB 1.4 Data used in the bar chart in Figure 1.13.  
Data Data Type ncoding Note  
Country Categorical Position Each country is on its own row \(sorted by total deaths\).  
Deaths Quantitative Length The length of the bar shows the number of deaths.  
Death type Categorical Color Dark blue shows deaths of victims, light blue shows deaths of the perpetrators.  
Attacks Quantitative Size Circles on the right are sized according to the number of attacks. Let’s look at another example. Figure 1.14 was part of  
the Makeover Monday project run by Andy Cotgreave  
and Andy Kriebel throughout 2016. This entry was by  
Dan Harrison. It takes data on malaria deaths from the  
World Health Organization. Table 1.5 describes the  
data used in the chart.  
ow o We Visualize ata? 13  
How did you do? As you progress through the book,  
stop and analyze some of the views in the scenarios\:  
Think about which data types are being used and how  
they have been encoded.  
F 1.14 Deaths from malaria, 2000–2014.  
Source\: World Health Organization. Chart part of the Makeover Monday project  
TB 1.5 Data used in the bar chart in Figure 1.14.  
Data Data Type ncoding Note  
Country Categorical Position The map shows the position of each country. In the highlight table, each  
country has its own row.  
Deaths per million Quantitative Color The map and table use the same color legend to show deaths per million people.  
Year Ordinal Position Each year is a discrete column in the table. 14 Chapter 1 ata Visualization\: A Primer  
F 1.15 Winning visualization by Shine Pulikathara during the 2015 Tableau Iron Viz competition.  
Source\: Used with permission from Shine Pulikathara.  
Color  
Color is one of the most important things to under-  
stand in data visualization and frequently is mis-  
used. You should not use color just to spice up a  
boring visualization. In fact, many great data visu-  
alizations don’t use color at all and are informative  
and beautiful.  
In Figure 1.15, we see Shine Pulikathara’s visualiza-  
tion that won the 2015 Tableau Iron Viz competition.  
Notice his simple use of color.  
Color should be used purposefully. For example,  
color can be used to draw the attention of the reader,  
highlight a portion of data, or distinguish between  
different categories.  
Use of Color  
Color should be used in data visualization in three  
primary ways\: sequential, diverging, and categorical.  
In addition, there is often the need to highlight data or  
alert the reader of something important. Figure 1.16  
offers an example of each of these color schemes. F 1.16 Use of color in data visualization. 16 Chapter 1 ata Visualization\: A Primer  
Sequential color is the use of a single color from light  
to dark. An example is encoding the total amount of  
sales by state in blue, where the darker blue shows  
higher sales and a lighter blue shows lower sales.  
Figure 1.17 shows the unemployment rate by state  
using a sequential color scheme.  
Diverging color is used to show a range diverging  
from a midpoint. This color can be used in the same  
manner as the sequential color scheme but can  
encode two different ranges of a measure \(positive  
and negative\) or a range of a measure between two  
categories. An example is the degree to which elec-  
torates may vote Democratic or Republican in each  
state, as shown in Figure 1.18.  
Diverging color can also be used to show the  
weather, with blue showing the cooler tempera-  
tures and red showing the hotter temperatures.  
The midpoint can be the average, the target, or  
zero in cases where there are positive and nega-  
tive numbers. Figure 1.19 shows an example with  
profit by state, where profit \(positive number\) is  
shown in blue and loss \(negative number\) is shown  
in orange.  
F 1.17 Unemployment rate by state using a  
sequential color scheme.  
F 1.18 Degree of Democratic \(blue\) versus  
Republican \(red\) voter sentiment in each state.  
F 1.19 Profit by state using a diverging color scheme. Color 17  
Categorical color uses different color hues to distinguish  
between different categories. For example, we can  
establish categories involving apparel \(e.g., shoes, socks,  
shirts, hats, and coats\) or vehicle types \(e.g., cars, mini-  
vans, sport utility vehicles, and motorcycles\). Figure 1.20  
shows quantity of office supplies in three categories.  
Highlight color is used when there is something that  
needs to stand out to the reader, but not alert or alarm  
them. Highlights can be used in a number of ways, as  
in highlighting a certain data point, text in a table, a  
certain line on a line chart, or a specific bar in a bar  
chart. Figure 1.21 shows a slopegraph with a single  
state highlighted in blue.  
F 1.20 Quantity of office supplies in three  
categories using a categorical color scheme.  
Alerting color is used when there is a need to  
draw attention to something for the reader. In this  
case, it’s often best to use bright, alarming colors,  
which will quickly draw the reader’s attention, as in  
Figure 1.22.  
F 1.21 Slopegraph showing sales by state,  
2014–2015, using a single color to highlight the state of  
Washington.  
F 1.22 Red and orange indicators to alert the  
reader that something on the dashboard needs attention. 18 Chapter 1 ata Visualization\: A Primer  
It is also possible to have a categorical-sequential  
color scheme. In this case, each category has a dis-  
tinct hue that is darker or lighter depending on the  
measurement it is representing. Figure 1.23 shows  
an example of a four-region map using categorical  
colors \(i.e., gray, blue, yellow, and brown\) but at the  
same time encoding a measure in those regions using  
sequential color; let’s assume that sales are higher in  
states with darker shading.  
Color ision eficiency \(Color Blindness\)  
Based on research \(Birch 1993\), approximately  
8 percent of males have color vision deficiency  
\(CVD\) compared to only 0.4 percent of females.  
This deficiency is caused by a lack of one of three  
types of cones within the eye needed to see all  
color. The deficiency commonly is referred to as  
“color blindness”, but that term isn’t entirely accu-  
rate. People suffering from CVD can in fact see  
color, but they cannot distinguish colors in the  
same way as the rest of the population. The more  
accurate term is “color vision deficiency.” Depend-  
ing on which cone is lacking, it can be very difficult  
for people with CVD to distinguish between cer-  
tain colors because of the way they see the color  
spectrum.  
There are three types of CVD\:  
1\. Protanopia is the lack of long-wave cones \(red  
weak\).  
2\. Deuteranopia is the lack of medium-wave cones  
\(green weak\).  
3\. Tritanopia is the lack of short-wave cones \(blue\).  
\(This is very rare, affecting less than 0.5 percent  
of the population.\)  
F 1.23 Sales by region using four categorical  
colors and the total sales shown with sequential color.  
CVD is mostly hereditary, and, as you can see from  
the numbers, it primarily afflicts men. Eight per-  
cent of men may seem like a small number, but  
consider that in a group of nine men, there is more  
than a 50 percent chance that one of them has  
CVD. In a group of 25 men, there is an 88 percent  
chance that one of them has CVD. The rates also  
increase among Caucasian men, reaching as high  
as 11 percent. In larger companies or when a data  
visualization is presented to the general public,  
designers must understand CVD and design with  
it in mind.  
The primary problem among people with CVD is  
with the colors red and green. This is why it is best  
to avoid using red and green together and, in gen-  
eral, to avoid the commonly used traffic light col-  
ors. We discuss this issue further in Chapter 33  
and offer some solutions for using red and green  
together. Seeing the Problem for Yourself  
Let’s look at some examples of how poor choice  
of color can create confusion for people with CVD.  
In Figure 1.24, the chart on the left uses the tra-  
ditional traffic light colors red, yellow, and green.  
The example on the right is a protanopia simula-  
tion for CVD.  
Color 19  
One common solution among data visualization prac-  
titioners is to use blue and orange. Using blue instead  
of green for good and orange instead of red for bad  
works well because almost everyone \(with very rare  
exceptions\) can distinguish blue and orange from  
each other. This blue-orange palette is often referred  
to as being “color-blind friendly.”  
Using Figure 1.25, compare the blue/orange color  
scheme and a protanopia simulation of CVD again.  
F 1.24 Bar chart using the traffic light colors and a protanopia simulation. Notice the red and green bars in the  
panel on the right are very difficult to differentiate from one another for a person with protanopia.  
F 1.25 Bar chart using a color-blind-friendly blue and orange palette and a protanopia simulation. 20 Chapter 1 ata Visualization\: A Primer  
The Problem Is Broader  
Than Just Red and Green  
The use of red and green is discussed frequently in  
the field of data visualization, probably because the  
traffic light color palette is prevalent in many software  
programs and is commonly used in business today. It  
is common in Western culture to associate red with  
bad and green with good. However, it is important to  
understand that the problem in differentiating color  
for someone with CVD is much more complex than  
just red and green. Since red, green, and orange all  
appear to be brown for someone with strong CVD, it  
would be more accurate to say “Don’t use red, green,  
brown, and orange together.”  
Figure 1.26 shows a scatterplot using brown, orange,  
and green together for three categories. When apply-  
ing protanopia simulation, the dots in the scatterplot  
appear to be a very similar color.  
One color combination that is frequently over-  
looked is blue and purple together. In a RGB \(red-  
green-blue\) color model, purple is achieved by  
using blue and red together. If someone with CVD  
has issues with red, then he or she may also have  
issues with purple, which would appear to look like  
blue. Other color combinations can be problem-  
atic as well. For example, people may have diffi-  
culty with pink or red used with gray or gray used  
together with brown.  
F 1.26 Scatterplot simulating color vision deficiency for someone with protanopia. Figure 1.27 shows another scatterplot, this time using  
blue, purple, magenta, and gray. When applying  
deuteranopia simulation, the dots in the scatterplot  
appear to be a very similar color of gray.  
It’s important to understand these issues when design-  
ing visualizations. If color is used to encode data and  
it’s necessary for readers to distinguish among colors  
to understand the visualization, then consider using  
color-blind-friendly palettes. Here are a few resources  
that you can use to simulate the various types of CVD  
for your own visualizations.  
Color 21  
dobe llustrator CC. This program offers a built-  
in CVD simulation in the View menu under Proof  
Setup.  
Chromatic Vision imulator \(free\). Kazunori  
Asada’s superb website allows users to upload  
images and simulate how they would appear to  
people with different form of CVD. See http\://  
asada.tukusi.ne.jp/webCVS/  
NoCoffee vision simulator \(free\). This free simu-  
lator for the Chrome browser allows users to simu-  
late websites and images directly from the browser.  
F 1.27 Scatterplot simulating color vision deficiency for someone with deuteranopia. 22 Chapter 1 ata Visualization\: A Primer  
Common Chart  ypes  
In this book, you will see many different types of charts. We explain in the scenarios why many of the charts were  
chosen to fulfill a particular task. In this section, we briefly outline the most common chart types. This list is inten-  
tionally short. Even if you use only the charts listed here, you would be able to cover the majority of needs when  
visualizing your data. More advanced chart types seen throughout the book are built from the same building  
blocks as these. For example, sparklines, which are shown in Chapters 6, 8, and 9, are a kind of line chart. Bul-  
let charts, used in Chapter 17, are bar charts with reference lines and shading built in. Finally, waterfall charts,  
shown in Chapter 24, are bar charts where the bars don’t have a common baseline.  
Bar Chart  
ime-Series ine Chart  
F 1.29 Time-series line chart.  
F 1.28 Bar chart.  
A bar chart \(see Figure 1.28\) uses length to represent  
a measure. Human beings are extremely good at see-  
ing even small differences in length from a common  
baseline. Bars are widely used in data visualization  
because they are often the most effective way to com-  
pare categories. Bars can be oriented horizontally or  
vertically. Sorting them can be very helpful because  
the most common task when bar charts are used is  
to spot the biggest/smallest items.  
Line charts \(see Figure 1.29\) usually show change over  
time. Time is represented by position on the hori-  
zontal x-axis. The measures are shown on the ver-  
tical y-axis. The height and slopes of the line let us  
see trends. Common Chart Types 23  
Scatterplot ot Plot  
F 1.30 Scatterplot. F 1.31 Dot plot.  
A scatterplot \(see Figure 1.30\) lets you compare  
two different measures. Each measure is encoded  
using position on the horizontal and vertical axes.  
Scatterplots are useful when looking for relationships  
between two variables.  
A dot plot \(see Figure 1.31\) allows you to compare  
values across two dimensions. In our example, each  
row shows sales by ship mode. The dots show sales  
for each ship mode, broken down by each segment.  
In the example, you can see that corporate sales are  
highest with standard class ship mode. 24 Chapter 1 ata Visualization\: A Primer  
Choropleth Map  
Symbol Map  
F 1.32 Choropleth map.  
A choropleth \(also known as a filled\) map \(see Fig-  
ure 1.32\) uses differences in shading or coloring within  
predefined areas to indicate the values or categories  
in those areas.  
F 1.33 Symbol map.  
A symbol map \(see Figure 1.33\) shows values in spe-  
cific places. These could be the center points of large  
regions \(e.g., the center of each U.S. state\) or specific  
locations determined by an exact latitude/longitude  
measurement.  
void pie charts  
Why isn’t there a pie chart? Pie charts are  
common charts, but they are flawed. We  
don’t recommend you use them. Check out  
the section titled “When Our Visual Processing  
System Betrays Us” for details.  able  
Sometimes you do need to be able to look up exact  
values. A table \(see Figure 1.34\) is an acceptable way  
to show data in that situation. On most dashboards, a  
table shows details alongside summary charts.  
ighlight  able  
Adding a color encoding to your tables can transform  
them into highly visual views that also enable exact  
lookup of any value. \(see Figure 1.35.\)  
Bullet raph  
A bullet graph \(see Figure 1.36\) is one of the best ways  
to show actual versus target comparisons. The blue  
bar represents the actual value, the black line shows  
the target value, and the areas of gray shading are  
performance bands.  
F 1.36 Table.  
Common Chart Types 25  
F 1.34 Table.  
F 1.35 Highlight table. 26 Chapter 1 ata Visualization\: A Primer  
When ur isual Processing System  
Betrays Us  
We have talked about how to use preattentive attri-  
butes to craft good data visualizations. By using those  
attributes, we can use the power of our visual system  
to our advantage. Unfortunately, our visual system  
also can be confused easily. In this section, we look  
at some common pitfalls.  
Our eyes can be fooled in countless different ways.  
Figures 1.37 and 1.38 show two optical illusions.  
In Figure 1.38, the top appears to be a well-lit gray  
surface and the bottom appears to be a poorly lit  
white surface that is in shadow. However, there is no  
shadow. Dr. Lotto added the gradient and shadows  
to the image. Our minds can’t help but to see the  
shadow, making the top appear to be much darker  
than the bottom, but if you cover up the middle of F 1.37 Is it a duck or a rabbit?  
Source\: Public domain. https\://commons.wikimedia.org/w/  
index.php?curid=667017  
F 1.38 Does the top appear darker than the  
bottom? Put your thumb or finger over the center line  
and then try again.  
Source\: Image by R. Beau Lotto.  
the image, it becomes clear that the top and the bot-  
tom are exactly the same color.  
Ambiguity in images makes for playful illusions, but  
this can be disastrous if your data visualizations con-  
fuse instead of clarify. In the previous section, we  
looked at the power of preattentive attributes. Now  
it’s time to look into the problems with some preat-  
tentive attributes. Throughout the book, we discuss  
which preattentive attributes are being used in the  
scenarios and why they work in each case.  
When we visualize data, we are, for the most part, try-  
ing to convey the value of the measure in a way that  
can be interpreted most accurately in the shortest  
time possible. Some preattentive attributes are bet-  
ter than others for this purpose. Figure 1.39 shows the number of deaths each day  
from various diseases in Africa. Each circle is sized  
according to the number of deaths. We have removed  
all the labels except the one for malaria \(552 deaths  
per day\). How many deaths per day are there from  
diarrhea? How much bigger is the HIV/AIDS circle  
than the diarrhea circle?  
How did you do? The actual answers are shown in  
Figure 1.40.  
F 1.39 Deaths per day in Ebola-affected countries  
in 2014. We removed all labels except the one for  
malaria. Can you estimate the number of deaths from  
the other diseases?  
Source\: World Health Organization; U.S. Centers for Disease  
Control and Prevention; The Economist, http\://tabsoft.co/1w1vwAc F 1.40 Deaths per day of various diseases in  
Ebola-affected countries, with labels added.  
Source\: World Health Organization; U.S. Centers for Disease  
Control and Prevention; The Economist, http\://tabsoft.co/  
1w1vwAc Most people underestimate the size of the bigger cir-  
cles. The point is that while size is preattentive, we’re  
not able to tell the differences with any accuracy. Con-  
sider the same data shown as a bar chart in Figure 1.41.  
In the bar chart, we are encoding the quantitative  
variable, deaths per day, using length. Notice how  
When ur Visual Processing System Betrays s 29  
accurately you can see the differences. This is why  
the bar chart is such a reliable chart to use\: Length is  
one of the most efficient preattentive attributes for  
us to process.  
F 1.41 Bar chart version of the circle charts. 30 Chapter 1 ata Visualization\: A Primer  
Yet using multiple preattentive attributes in one chart  
can lead to problems. Figure 1.42 shows a scatterplot  
of sales and profit for a fictional sales company. Posi-  
tion is used for sales \(x-axis\) and profit \(y-axis\). Color  
shows different segments, and shape shows the cat-  
egories of products. Which category has, on average,  
the highest profits?  
F 1.42 Scatterplot using shape and color. Which category has the highest profits? When ur Visual Processing System Betrays s 31  
F 1.43 Sales and profit with one column for each category.  
It’s almost impossible to see anything, isn’t it? Mix-  
ing position, color, and shape does not make for  
easy reading. What’s a better solution? How about  
using position to represent category, breaking the  
single scatterplot into three panels? This is shown  
in Figure 1.43.  
The result is much clearer. Now you can even see that  
technology sales, on average, have a higher range of  
profits than furniture and office supplies. That insight  
was certainly not apparent in the first scatterplot.  
To close this section, let’s look at some chart types  
you might be surprised not to see in our common  
chart types. The first is the pie chart. Sure, it is a  
common chart, but we do not recommend you use  
it. Let’s see why pie charts don’t play well with our  
visual system. 32 Chapter 1 ata Visualization\: A Primer  
F 1.44 What percentage of each pie does the blue segment represent?  
Look at Figure 1.44. What percentage of each circle  
is covered by the blue segment?  
The one on the left is pretty easy\: 25 percent. The  
middle? It’s a little harder. It’s also 25 percent, but  
because it’s not aligned to a horizontal or vertical  
axis, it’s harder to determine. And on the right? It’s  
13 percent. How did you do? We are simply not able  
to make accurate estimates of angle sizes, and if accu-  
rate estimates are the goal, it’s a problem.  
Let’s look at another pie. The biggest slice in Fig-  
ure 1.45 is easy to spot. But what about the second,  
third, and fourth biggest slices?  
F 1.45 Can you order the slices from biggest to smallest? When ur Visual Processing System Betrays s 33  
F 1.46 differences in size.  
Bars make it very easy to see small  
That was really hard. Now look at the same data,  
shown in a bar chart, in Figure 1.46.  
The sorted bar chart made it very easy to distinguish  
size differences\: Length is such an effective visual  
attribute, we can see very small differences with ease.  
To make effective dashboards, you must resist the  
temptation to use purely decorative chart types.  
Let’s look at one more example in order to keep you  
away from the lure of the circles. Sometimes peo-  
ple acknowledge the power of bars but then get  
F 1.47 radial bar chart\).  
A concentric donut chart \(also called a  
tempted to put them in a circle, fashioning what  
is known as a donut chart. Figure 1.47 shows an  
example.  
“What’s the problem?” you may ask. “The compari-  
son seems easy.”  
Although you may be able to make the comparisons,  
you are in fact working considerably harder than you  
need to be. Really. Let us prove it to you. 34 Chapter 1 ata Visualization\: A Primer  
Let’s suppose you wanted to compare the heights  
of three famous buildings\: One World Trade Center,  
the Empire State Building, and the Chrysler Building.  
\(See Figure 1.48.\)  
Now, that’s an easy comparison. With virtually no  
effort, we can see that One World Trade Center \(blue\)  
is almost twice as tall as the Chrysler Building \(red\).  
Now let’s see how easy the comparison is with donuts.  
\(See Figure 1.49.\)  
F 1.49 semicircles.  
Three large buildings twisted into  
Figure 1.50 presents the same buildings rendered  
using a concentric donut chart. Can you tell the dif-  
ference in heights of the buildings in this chart?  
F 1.48 buildings.  
Comparing the size \(in feet\) of three large  
F 1.50 Three skyscrapers spooning.  
Yikes!  
So, with this somewhat contrived but hopefully mem-  
orable example, we took something that was simple  
to compare \(the silhouettes of buildings\) and con-  
torted them into difficult-to-compare semicircles. very ecision Is a Compromise  
However you choose to show your data, you will  
emphasize one feature over another. Let’s have a  
look at an example. Table 1.6 shows a table of num-  
bers. Let’s imagine they are sales for two products, A  
and B, over 10 years.  
Figure 1.51 shows eight different ways to visualize  
this data. Each uses a different mix of preattentive  
attributes.  
TB 1.6 How would you visualize this data?  
very ecision Is a Compromise 35  
Notice the compromises in the charts labeled 1 and 2.  
A standard line chart \(1\) showing each product lets  
us compare each product’s sales very accurately. The  
area chart \(2\) lets us see total sales over time with  
ease, but now it is harder to compare the two prod-  
ucts. You can’t, in a single chart, answer every possible  
question or comparison. What you do need to do is  
assess whether the chart you do choose answers the  
question being asked.  
2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 Total  
 100 110 140 170 120 190 220 250 240 300 1,840  
B 80 70 50 100 130 180 220 160 260 370 1,620  
F 1.51 Eight different ways of visualizing the data. 36 Chapter 1 ata Visualization\: A Primer  
esigning ashboards hat re unctional  
and Beautiful  
You now have a suitable vocabulary to interpret the  
charts in the scenarios in this book. Note that we have  
not offered a primer on graphic design. Instead, in  
each scenario, we point out where and how graphic  
design elements, such as white space, fonts, grid  
layout, and so on, contribute to the clarity of the  
dashboards.  
We maintain that a dashboard must first be truthful  
and functional, but there are reasons you should go  
the extra mile to make dashboards that are elegant  
as well. We recommend considering the lessons from  
classic design books, such as The Design of Everyday  
Things by Donald A. Norman \(Basic Books, 2013\). In  
it, Norman says\:  
Products \[should\] actually fulfill human needs  
while being understandable and usable. In  
the best of cases, the products should also be  
delightful and enjoyable, which means that not  
only must the requirements of engineering,  
manufacturing, and ergonomics be satisfied,  
but attention must be paid to the entire expe-  
rience, which means the aesthetics of form and  
the quality of interaction. \(p. 4\)  
Summary  
This chapter has gone through the basics of data  
visualization. If you are new to visualization, you now  
have enough knowledge to interpret the charts in this  
book. You will be able to decode most of the charts  
you encounter. There is also a glossary of charts at  
the back of the book for further reference.  
You might be inspired to find out more. There are  
many superb books on the theory and application  
of this science. Some of the examples in this chapter  
are based on examples first used in some of these  
books. Here are our recommendations\:  
Alberto Cairo’s The Functional Art \(New Riders,  
2013\). Alberto Cairo is an author who understands  
the need to balance functionality with beauty in  
charts. This book is an inspiring introduction to  
information graphics and visualization.  
Stephen Few’s Now You See It \(Analytics Press, 2009\).  
This is a practical and commonsense guide to table  
and graph design. It goes into great detail about  
each of the main chart types, explaining clearly when  
to use them and how to construct them well.  
Cole Nussbaumer Knaflic’s Storytelling with Data  
\(Wiley, 2015\). This is the data visualization guide for  
business professionals. It’s an accessible look at not  
only the anatomy of charts but also at how to design  
charts to communicate messages effectively.  
Colin Ware’s Information Visualization\: Perception  
for Design \(Morgan Kauffman, 2013\). This book has  
been called the bible of data visualization. In over  
500 pages, it covers every aspect of the science  
of perception and its role in data visualization. It’s  
an invaluable resource for anyone practicing data  
visualization.  
Colin Ware’s Visual Thinking for Design \(Elsevier,  
2008\). Colin Ware presents a detailed analysis of the  
mechanics of visual cognition. The book teaches  
us how to see as designers by anticipating how  
others will see our designs. It’s a fun book to read  
and makes detailed information about cognitive  
science a breeze to digest. PAT II  
T  
SCAIS Chapter 2  
Course Metrics ashboard  
Course metrics dashboard.  
Dashboard Designer\: Jeffrey A. Shaffer  
Organization\: University of Cincinnati  
38 39 40 Chapter 2 Course Metrics ashboard  
Scenario  
Big Picture  
You are a professor at a university or the head of an  
academic department. You want to know how a par-  
ticular professor’s course is rated compared to others  
in the department and the college. You want to know  
the overall course load, the number of students, and  
the overall growth or decline of a particular course.  
You also want to be able to see the rating compar-  
ing one specific course against all of the courses in  
the department and in the college.  
Specifics  
• You need to see how many courses an instructor  
has been teaching over time.  
• You need to see how many students are register-  
ing for the classes.  
• You want to see the trend over a specific period  
of time. This might be the entire span of the  
course \(as shown in the overview dashboard\), or  
it may be a rolling period of time, for example,  
the last five years.  
• You would like to see the detailed ratings of the  
most recent course and instructor feedback.  
• You need to be able to quickly compare this course  
and instructor to other courses in the department  
and the college.  
elated Scenarios  
• You conduct workshops or seminars and need to  
see ratings for these offerings.  
• You conduct training programs at your company  
on various topics and need to track sign-ups and  
feedback for a particular topic or presenter.  
• You want to track cohort size and performance over  
time and see the performance detail of the most  
recent cohort.  
• You want to track reviews of your product or ser-  
vice, how many people have completed reviews,  
the ratings over time, and the details of the most  
recent reviews on, say, Amazon or Yelp.  
• You want to see how sales in your department  
compare to sales in other departments or store  
averages.  
ow People Use the ashboard  
This dashboard shows the course history for the Data  
Visualization class at the University of Cincinnati. The  
course is taught by Jeffrey Shaffer in the Carl H. Lindner  
College of Business and is part of the operations,  
business analytics, and information systems depart-  
ment. Courses are registered under their discipline  
within the department.  
• OM—Operations Management  
• BANA—Business Analytics  
• IS—Information Systems  
The course number used in this dashboard is  
BANA6037, which is the same from semester to sem-  
ester. A semester indicator and section ID are then  
used to distinguish the classes. 001 indicates the first  
section for Fall Semester 2016 and 002 is the second  
section.  
The dashboard begins with a general overview  
of BANA6037. It shows the entire history of the  
course, which began in Spring Semester 2012.  
Figure 2.1 shows the number of students in each  
class over time. F 2.1 Number of students in each course by year  
with two recent rating periods highlighted in blue.  
This chart indicates the class size for each individual  
class, which is very important for a number of reasons.  
• Should the college keep offering the class? Success  
of a course can be measured by answering two  
questions\:  
1\. Are people signing up for the class?  
2\. Are students rating the class well?  
• This chart highlights the demand growth for the  
course. This particular class is an elective for the  
degree programs, so if no one were signing up for  
the course, then it wouldn’t make sense to keep  
offering it.  
ow People se the ashboard 41  
• Each course has a registration capacity. If demand  
is growing, then there may be a need to offer addi-  
tional courses in the future, which is the case in this  
example.  
• Lecture halls have strict seating capacities based  
on fire code rules. Understanding course demand  
is critical in planning the course capacity and deter-  
mining whether a course needs to be moved to a  
different lecture hall for additional seats to open.  
A reference line is used to show the average class size.  
This line helps illustrate the growth of the classes in  
the most recent semesters versus the earlier classes  
from 2012 and 2013. A number of other alternatives  
could be used in this case, including\:  
• Comparing the average class size for the depart-  
ment to these classes.  
• Comparing the average class size of the college  
to these classes.  
• Using a bullet chart, with a target line on each bar  
chart, showing the course capacity. This would give  
an indication of how many open seats were avail-  
able from semester to semester and could provide  
an indicator if a course was over capacity.  
Figure 2.2 shows the enrollments by year. This is simi-  
lar to the chart in Figure 2.1 but summarizes the enroll-  
ment by calendar year.  
This particular example highlights the growth of the  
last two years. That is, there are 1,097 totals students  
in five years but 687 in 2015–2016. Figure 2.3 gives  
additional context as to why that is the case and shows  
the number of classes over time, which gives addi-  
tional context to the large growth in the number of  
students. 42 Chapter 2 Course Metrics ashboard  
F 2.2 Enrollments by year with the year of the two  
most recent rating periods in blue \(2016 classes have  
been presented but have not yet been rated\).  
F 2.3 Number of classes by year. Only two classes  
were offered in 2012 compared to six in 2016. The year of  
the most two recent rating periods is highlighted in blue.  
Figure 2.3 highlights an important part of the data\: For  
example, do we simply have more students because  
the class size grew from a 25-person classroom to a  
220-seat auditorium? In this case, the answer is no.  
Although the class size did grow some, it didn’t grow  
that much. Rather, the biggest growth came from the  
number of classes, which grew from two classes in  
2012 to six classes for 2016.  
Figure 2.4 gives the overall course rating for each  
course semester by semester.  
The course feedback is filled out by the students and  
is voluntary. A series of standard questions is asked  
regarding every course using a rating on a scale  
of 1 to 8 and an opportunity for comments. These  
ratings and feedback are used by the department  
heads and college to monitor course performance.  
For example, if a course is rated excellent and also  
has at least a 50 percent response rate from students,  
the professor is named to the “Dean’s List of Teaching  
Excellence” for the semester.  
In some rating systems, there is a constant target set  
by an internal benchmark. In other rating systems, the  
target moves from rating period to rating period; for  
example, the benchmark may be set based on the  
average in the current period or the previous period. ow People se the ashboard 43  
Regardless of how it’s calculated, a target line can add  
context to the data.  
The dot plot on the bottom section of the dashboard,  
shown in Figure 2.5, provides a detailed comparison  
for each of the questions asked on the course evalu-  
ation survey.  
The dark gray dot shows the rating for all courses in  
the department, listed as “BANA,” and a light gray  
vertical line indicates the rating for all of the courses  
in the rating period for the entire college. The blue  
dot indicates the rating for BANA6037, the particular  
course selected for comparison. All of these ratings  
are on a scale of 1 to 8.  
Notice that the axis for the rating does not start at  
zero. This makes sense because the values are within  
a small range of each other, and those differences  
within the small range matter.  
F 2.4 Overall course ratings. Note that we only  
see rating through 2015 because ratings for courses  
presented in 2016 have not yet been tabulated.  
F 2.5 Dot plot of course ratings comparing the Data Visualization course \(blue\) to the BANA courses  
\(dark gray\) and the college average \(light gray line\). 44 Chapter 2 Course Metrics ashboard  
tarting the axis at zero  
n graphs that use length, height, or area  
to encode the data for comparison \(e.g.,  
bar chart, bullet graph, lollipop chart, area  
chart\), always start the axis at zero; otherwise,  
you will distort the comparison of the data.  
If encoding with position \(e.g., dot plot, box  
plot, line chart\), breaking the axis away from  
zero sometimes can be useful and will not  
distort the comparison of the data.  
Why his Works  
asy-to-See Key Metrics  
This dashboard provides a quick overview across the  
top of key metrics about this course. It shows the num-  
ber of classes each semester and by year, the number  
of students, and the overall course rating. It provides  
quick information at a glance but also allows for a  
deeper analysis by comparing the metrics over time.  
Simple Color Scheme  
Only three colors are used in this dashboard\: blue,  
light gray, and dark gray. Blue is used to highlight the  
two most recent rating periods. Since course feed-  
back isn’t available until weeks after a course is com-  
plete, registration for the next semester is already  
complete, and often a new course has begun. There-  
fore, blue highlights each portion of the chart that  
corresponds to the specified course rating period.  
In the first and last chart on the top row, the two spe-  
cific courses are highlighted. In the second and third  
chart, the two courses are part of the five classes that  
are summarized in the year. In the dot plot, the blue  
represents those two courses versus the department  
and college averages.  
Potential to Be Static or Interactive  
This dashboard can work as a static dashboard that can  
be emailed as a PDF or printed, but it can also be inter-  
active. The dashboard could connect to a database of all  
of the available courses. With a simple drop-down box  
with a list of courses, a department head or professor  
could easily select a course to generate this report.  
Both verview and etails re Clear  
This dashboard offers both an overview and details.  
The overview shows four key metrics across the top  
along with those details over time. The section on  
the bottom offers a very detailed look at each survey  
question. It provides a quick comparison for each  
survey question rating the course compared to the  
department and the entire college.  
he raditional pproach and Why  
 ou Should void It  
There are a number of problems with the current  
reports generated by the University of Cincinnati sys-  
tem illustrated in Figures 2.6 and 2.7.  
Problems with igure 2.6  
• The current system requires a distinct report to  
be run for each individual semester. There’s no  
easy way to compare one period with the previ-  
ous period or to see trends over time.  
• The reporting template lists each survey question  
on a separate page along with the feedback. This  
does not allow for a quick review of the scores or  
a comparison across questions. Author Commentary 45  
F 2.6 by the current system.  
Example of the bar chart from the course evaluation report generated  
F 2.7 Three pages from the current evaluation  
report generated by the system.  
Problems with igure 2.7  
• The graphical representation is a bar chart on a  
fixed axis. Although this encoding of the data  
works, it hides the small differences in the scale  
of the ratings. As an example, it’s very hard to  
see the difference between 6.4 and 6.8 on the  
bar chart.  
• The colors are bright and alerting. Bright yellow  
and bright red are being used to show a standard  
categorical color.  
uthor Commentary  
JFF\: I chose to label the dot plot \(see Figure 2.5.\)  
with only the rating for the course. By doing this,  
I avoided over labeling the dot plot with every  
point. In an interactive version of the dashboard, a  
descriptive tool tip could be used that would pro-  
vide detailed information about every point when  
the user hovers over them.  
Labels could also be moved to the center of the dots.  
In this particular data set, the granularity of the data  
required one decimal place. Because of the extra  
decimal place, moving the labels inside the circles  
required a much smaller font size or a larger circle,  
so I chose to place them outside of the circles. 46 Chapter 2 Course Metrics ashboard  
F 2.8 Example of the Course Metrics dashboard with less spacing between the bars on the bar charts.  
One design choice I made was to keep the width  
of the bars on the bar charts similar from chart to  
chart \(see Figures 2.1, 2.2, 2.3, 2.4\). I typically set  
the width of bar charts to allow approximately 25 to  
50 percent of the bar width as spacing between the  
bars on bar charts \(and just a slight space between  
the bars on histograms\).  
Figure 2.8 shows what this might look like with  
wider bars. For me, this displays as a bar chart on  
the two inside charts and more of a lollipop-style  
chart on the two outside bar charts. Both styles  
encode the data using length and do not distort  
the data in any way so I used thinner bars as a style  
choice for the overall design.  
Also, I chose the font very carefully in this dash-  
board. The large font for the title and key metric  
numbers is Leviathan, showing in a heavier style.  
The other dashboard text is Franklin Gothic Heavy  
and Medium, which are used together with Levia-  
than to achieve three distinct levels and weights of  
the fonts throughout the dashboard.  
A special thanks to Darrin Hunter of Dish Design  
\(http\://www.dishdesign.com/\) for reviewing this  
dashboard and offering design suggestions. Darrin  
is a former professor from the University of  
Cincinnati Design, Architecture, Art and Planning  
\(DAAP\) College and now runs his own graphic  
design company.  
TV\: Jeff’s dot plot has become my go-to  
approach for comparing aggregated results from  
multiple sources \(in this case an individual com-  
pared to a peer group compared to the college  
as a whole\). Chapter 3  
# Comparing Individual  
# Performance with Peers  
A jittered dot plot \(aka jitterplot\) showing a selected speaker’s ratings in comparison to other speakers.  
Author\: Steve Wexler  
Organization\: Data Revelations  
48 49 50 Chapter 3 Comparing Individual Performance with Peers  
Scenario  
Big Picture  
Your company just had its annual three-day confer-  
ence where hundreds of presenters educated, enlight-  
ened, and entertained over 10,000 participants. You  
know the conference was a big success, but you need  
to know which sessions were highly rated to begin  
planning for the next event.  
This is not the first year the conference was offered.  
As in other years, the speakers themselves want to  
know if their sessions were well-received.  
You create a dashboard that makes it easy for you,  
others in your organizations, and all the presenters  
to see how well or poorly their sessions were rated.  
Specifics  
• You hosted a conference and want to see how a  
certain speaker rated compared to the other speak-  
ers so you can plan for future events.  
• You need to fashion a dashboard that allows indi-  
vidual presenters to see how they performed at  
the event.  
• You need to make it easy to see how well or  
poorly a speaker performed compared to other  
presenters.  
• You want to be able to see how many people rated  
a session—that is, did dozens of people rate a ses-  
sion or only a handful?  
elated Scenarios  
• You need to see how your store is doing across  
multiple categories compared with stores within  
a 50-mile radius.  
• You need to show how an individual is perform-  
ing across various benchmarks with respect to  
others within the department and others in the  
company.  
• You need to show how an individual’s salary com-  
pares with others who have similar experience and  
education and who work in the same industry.  
Note to readers\: At the end of this chapter, we pres-  
ent an alternative approach to this dashboard. \(See  
Figure 3.14.\) Although this alternative doesn’t scale  
to thousands of dots and doesn’t show quartiles, you  
may prefer it, in some situations, to this dashboard.  
ow People Use the ashboard  
The person interacting can type in a name \(or in this  
case the speaker ID\) and see ratings across various  
categories with the blue dot corresponding to the  
typed-in speaker ID and the gray dots corresponding  
to the other speakers. The individual can also filter to  
remove results for presenters that received very few  
reviews. \(See Figure 3.1.\)  
F 3.1 The person interacting can type in a  
speaker ID and specify the minimum number or reviews.  
The person interacting can also resize the dots based on  
the number of people who rated the session. ow People se the ashboard 51  
The viewer can also hover over a mark to get more  
details about that mark, including how many people  
rated the presenter. \(See Figure 3.2.\)  
To get a better sense of which speakers received many  
responses and which received few, the viewer can  
resize the dots based on number of survey responses  
by clicking “Yes” from the “Resize by response count”  
drop-down menu. \(See Figure 3.3.\)  
F 3.2 about that mark.  
Hovering over a mark presents details  
F 3.3 Champagne bubbles! Selecting “Yes” from the drop-down menu for “Resize by response count” resizes  
the dots based on the number of survey responses. 52 Chapter 3 Comparing Individual Performance with Peers  
Why his Works  
Clear ot Color and Position  
Although we could also use shape, it is the color more  
than anything else that makes the individual’s ratings  
pop out from all the other ratings. The selected indi-  
vidual’s dot is centered horizontally, but it is the dif-  
ferent color that does the most to make the selected  
speaker stand out.  
umber of ots  ells a Compelling Story  
We’ll look at comparing an individual score versus  
the aggregate of all scores in a moment, but seeing  
all the dots allows presenters to see not just where  
they are relative to others but also just how many  
other people were rated. This immediately answers  
the question “Am I comparing performance with six  
other people or 600?” in a way just displaying a num-  
ber of the count of respondents does not.  
Quartile Bands and Median ine Show  
Clustering  
By showing bands and a median line, presenters can  
immediately see if they are at or below the median  
and in which quartile they sit. \(See Figure 3.4.\)  
Note  
he dots are semitransparent so you can  
easily see how they overlap.  
F 3.4 The jittered dot \(jitterplot\) plot shows at a glance that the selected speaker is above or near the top  
quartile for the first three categories and a little above the median for the last category. ther Considerations 53  
F 3.5 Key performance indicator table at the bottom of the chart shows exact ranking and percentile.  
Key Performance Indicators  
Present xact Measures  
A table along the bottom of the chart \(see Figure 3.5\)  
allows people to see their exact ranking and percentile.  
ther Considerations  
Why ot esize the ots Based on esponse  
Count by efault?  
Some speakers were rated by only a handful of peo-  
ple, and others received over 120 responses. Why not  
change the default so that the size of the dot is based  
on response count, as shown in Figure 3.3?  
Most people who reviewed the dashboard found the  
different-size circles distracting. One commented that  
the marks looked like “champagne bubbles” so we  
elected to keep the size of the dots uniform for the  
default view. Resizing also compounds the difficulty  
in hovering over individual dots as a large dot may  
occlude several smaller dots.  
F 3.6 Bar chart showing number of responses for  
each speaker with the selected speaker colored blue.  
Note  
he alternative approach shown in Figure 3.14  
avoids the champagne bubbles and  
occlusion problem.  
If you still want to display session count without hav-  
ing people hover over a mark or creating champagne  
bubbles, you could always construct a second chart  
like the ones shown in Figures 3.6 and 3.7.  
F 3.7 distribution.  
Histogram showing respondent count 54 Chapter 3 Comparing Individual Performance with Peers  
What Is the x-xis?  
People not familiar with jittered marks may be wonder-  
ing what is along the x-axis in this dashboard. The answer  
is there’s nothing along the x-axis\: there is nothing dif-  
ferent about a dot that is toward the left than there is  
about a dot that is toward the right. We moved the dots  
left or right \(jittering\) so they did not overlap too much.  
Consider the example in Figure 3.8, where we show  
the scores in a dot plot.  
It’s very hard to see how things cluster or whether  
there are 20 marks or 200 marks in each column. To  
address the first issue, we could show the distribution  
with a box and whisker plot, as in Figure 3.9.  
F 3.9 median, and outliers.  
Box and whisker plot showing quartiles,  
F 3.8 Dot plot with all ratings overlapping. By  
placing an “ugly cat” here we don’t mean to suggest  
that a dot plot is a bad chart type. It’s just a bad choice  
here because there are so many overlapping dots.  
The horizontal lines at the top and bottom of each  
strip \(the whiskers\) show the outlier range. The shaded  
rectangles \(the boxes\) show the two inner quartiles  
and the median.  
Although Figure 3.9 is an improvement over Figure 3.8,  
the box and whisker view occludes the view of  
many marks and still doesn’t adequately address the  
question of how many responses there were, as there  
are still a lot of overlapping dots. Speaking about xes, Why oesn’t the  
y-xis Start at Zero?  
In this case, the lowest speaker score was 2.7 on a  
scale of 1 through 5 \(which is pretty impressive, no?\).  
Although we could indeed present the y-axis starting  
Note  
he box and whisker plot, in this author’s opinion  
\(Steve\), is also ugly and clinical. But there are  
people who love box plots and may respond  
favorably to seeing a chart like the one in Figure 3.9.  
\(See the Author Commentary from Andy at the end  
ther Considerations 55  
at zero, doing so would just make it harder to dis-  
tinguish the differences between a relatively poor  
speaker and a relatively good speaker as the dots will  
be packed closer together. \(See Figure 3.10.\)  
of this section.\) My suggestion is to know as much  
about your audience as possible. If they will be able  
to decode the data more easily with a box plot, then  
use a box plot.  
F 3.10 understand the spread of scores.  
Starting the y-axis at zero only bunches the dots closer together, making it harder to compare and 56 Chapter 3 Comparing Individual Performance with Peers  
Why ot Just Compare the Selected Speaker  
with the verage of verybody lse?  
There will indeed be times when you don’t have all  
of the scores and you will only be able to compare  
an individual score with an aggregate. But when you  
do have separate responses, showing the targeted  
score in context to other scores can be much more  
powerful.  
Consider the scenario presented in Figure 3.11, where  
we want to show the performance of an individual  
employee \(in this case, Louise\) in comparison with  
her peers.  
F 3.11 Combination bar chart and circle chart showing the performance of an individual compared with peers. We can see that Louise got all 10s in customer skills,  
focus, and working well with others and that she is  
well above average in four of the six categories.  
But how many other people got a 10 in these cate-  
gories? And that bar for leadership—it looks like it’s  
around 7.5—how was that score determined? Did half  
the group get a 10 and the other half get a 5, or were  
the scores more equally distributed?  
ther Considerations 57  
Finally, just how many people were rated? Sure, we  
can have a label that reads “Louise’s score com-  
pared to 19 others,” but we still have to imagine what  
19 looks like.  
Compare this approach with the jitterplot in  
Figure 3.12.  
F 3.12 Comparing employee performance using a jitterplot. 58 Chapter 3 Comparing Individual Performance with Peers  
It’s the same data and the same scenario, but we can  
tell so much more from this figure than when we com-  
pare to the aggregate!  
F 3.13 An individual can see his or her score, but  
hovering over a mark should reveal only the score, not  
the person behind the score.  
But what about anonymity? you may ask. For the peo-  
ple who did not perform well, isn’t this a form of pub-  
lic pillorying?  
Who says this information has to be public? Only the  
manager of the group should be able to see every-  
body’s score. Otherwise, an individual should be able  
to see only his or her score with respect to peers. That  
is, when you hover over a dot, you should not be able  
to see which fellow employee is associated with that  
dot. \(See Figure 3.13.\)  
lternative pproach  
In Figure 3.14, we present a different approach that  
may work better for you, depending on what you want  
to emphasize. Here it’s easy to compare the size of  
the dots and explore individual marks.  
The downside to the approach is that, unlike the jit-  
terplot in Figure 3.1, the unit histogram will not scale  
to thousands of marks. In addition, with this approach,  
you cannot see in which quartile a dot sits.  
What If here re Millions of ots?  
The unit histogram works with hundreds of responses,  
the jitterplot with thousands, but suppose you have  
tens of thousands or even millions of responses? F 3.14 A unit histogram showing an individual’s ratings compared to others. 60 Chapter 3 Comparing Individual Performance with Peers  
In that case, the best approach may be a simple his-  
togram \(a bar chart showing a distribution\) where the  
bar that is most like you is highlighted.  
Consider the dashboard in Figure 3.15, where  
we see a bar chart showing age distributions of  
everyone living in the United States. Here you spec-  
ify your age using the slider, and a bar correspond-  
ing to you \(and several other million people\) gets  
highlighted.  
F 3.15 Histogram dashboard where you can compare your age with those of others living in the United States.  
\(See http\://tinyurl.com/h3w5ypw.\)  
Source\: United States Census Bureau, https\://www.census.gov/popest/data/. Special thanks to Chad Skelton at  
http\://blogs.vancouversun.com/author/chadskeltonvansun/. uthor Commentary  
JFF\: This dashboard has a very simple approach to  
visualize the data but, at the same time, has the  
complexity of having lots of data. It’s easy to see  
the single session versus all of the others. It shows  
the scope of how many sessions there were in total,  
not in a precise way for comparison, but in a way  
that we can quickly determine the scope. The use  
of jitter is key here, because otherwise the dots  
would all be on top of each other.  
TV\: If you are working with aggregated data—  
that is, where you don’t have access to individ-  
ual responses—make sure you check out Jeffrey  
Shaffer’s Course Metrics dashboard. \(See Chapter 2.\)  
Jeff has built what is my go-to way to compare an  
individual with a peer group and with the overall  
population. Even if you’re not working with aggre-  
gated data, you should check it out as the dot plot  
technique is very valuable.  
NDY\: While writing this book, we discovered that  
Steve doesn’t like box plots! I agree with Steve’s  
point that laypeople often don’t know what they  
are. But, as with all charts, people can be trained  
to understand them. Consider the waterfall plot in  
Chapter 24. That’s by no means a straightforward  
chart, but once you learn how to read it, it reveals  
a great deal of information. A box plot is the same.  
Perhaps it’s their appearance? We can make box  
plots look better, by narrowing the width/height of  
the box. \(See Figure 3.16.\)  
Steve’s also right that if you want to see every dot,  
the box plot prevents that. However, not all analyti-  
cal questions need us to see all the dots.  
Author Commentary 61  
F 3.16 A more attractive box plot?  
The box plot’s very design is intended to over-  
come the issue of overlaid dots. The whiskers  
extend to 1.5 times the interquartile range. That  
sounds like scary statistical language, but it is just  
a way of describing how spread out the values  
are. What about the box? Its center point is the  
median, and its edges represent one quartile on  
either side of it. In other words, half of all the dots  
are within the box. Since the box, by definition,  
tells you where the quartiles and outliers are, do  
you still need to see all the dots when the primary  
question is just to see where your mark \(the big  
blue dot in Figure 3.16\) sits?  
The box plot has additional strengths in that you  
can compare distributions very easily among  
different categories. In Figure 3.16, it’s easy to  
see that the spread of values in each category is  
similar.  
TV\: What if there are a million dots?  
NDY\: Steve presents a very nice way of showing  
the data in a histogram \(in Figure 3.15\). A box plot  
will work just as well with a million dots\: As long as  
you learn to look primarily at the box, not the dots,  
a box plot is a great way to see a summary of the  
spread of data within a category. Chapter 4  
# What-If Analysis\:  
Wage Increase amifications  
What-If dashboard that analyzes the impact of increasing the minimum wage within an organization.  
Dashboard Designer\: Matt Chambers  
62 63 64 Chapter 4 What-If Analysis\: Wage Increase amifications  
Scenario  
Big Picture  
For some time now, people within your company  
and throughout the country have been rumbling  
about raising the minimum wage. Because you have  
a lot of people on staff who are hourly wage earn-  
ers, you need to address the ramifications of how a  
possible government-mandated increase will affect  
costs.  
Although you suspect that the state and federal gov-  
ernment won’t approve such a wage increase for sev-  
eral years, your company is considering increasing  
the minimum wage before then as a way to attract  
more talent and generate employee loyalty. As any  
increase right now will be voluntary, you are consider-  
ing tying the increase to the number of years some-  
one has been an employee. For example, instead of  
raising the minimum wage across the board from \$9  
an hour to \$15 an hour, you’re considering an increase  
for people who have been with the company for at  
least three years.  
employees that have provided at least five years  
of service.  
elated Scenarios  
• What will be the impact on costs and productivity if  
your organization increases the number of months  
for maternity/paternity leave?  
• What will be the impact if the national cap on Social  
Security is increased \(i.e., how many employees will  
it affect, in which departments, and what will be the  
associated costs\)?  
• What will be the impact of cutting the tuition  
reimbursement program in your company by  
25 percent?  
ow People Use the ashboard  
The controls in the upper-left corner of the dashboard  
allow users to experiment with changing the pro-  
posed minimum wage and years of required service.  
\(See Figure 4.1.\)  
Adjusting these settings immediately shows the  
impact on individual employees, departments, the  
current wage distribution histogram, and the pro-  
jected wage distribution histogram.  
Specifics  
• You need to show the increase in wage expenses  
by department based on an anticipated increase in  
the government-mandated minimum wage.  
• You need to see the distribution of wages and how  
minimum wage increases impact it.  
• You want to see how many employees would ben-  
efit from an increase in minimum wage.  
• Your company wants to know how many employees  
would be affected and how much it would cost to  
implement a voluntary “standard living wage” for  
F 4.1 Sliders allow you to change the proposed  
minimum wage and the number of years of service  
required to receive the wage increase. Why his Works  
asy-to-djust Controls  
Adjusting the controls affects four charts on the dash-  
board, as shown on Figure 4.2.  
Why This Works 65  
Combination Chart to Show Which Workers  
Will Be ffected  
Two charts comprise the first section of the dash-  
board. The first is a stacked bar chart showing the  
percentage of employees who are above and below  
F 4.2 Moving the sliders changes four different charts. Compare the charts here with the ones on the  
dashboard shown at the beginning of this chapter. 66 Chapter 4 What-If Analysis\: Wage Increase amifications  
Bar Chart Shows epartmental Impact  
The dual bar charts show both dollar and headcount  
impact broken down by department. \(See Figure 4.4.\)  
Note that the bars are sorted in descending order  
by dollar amount. It’s easy to see that Facilities and  
Services make up the lion’s share of both wages and  
headcount.  
F 4.3 Stacked bar and scatterplot show overall  
and individual impact of wage increase and service  
requirement.  
the parameters you set. The second is a scatterplot  
with one dot representing each individual worker.  
\(See Figure 4.3.\) The dots are positioned according  
to workers’ length of service \(on the x-axis\) and their  
current wage \(on the y-axis\).  
We can see that an increase in the minimum wage to  
\$14.50 for people with at least four years at the com-  
pany will impact a total of 157 people, or 17 percent  
of the hourly wage workforce.  
These people are easy to see on the scatterplot. All  
the workers \(blue dots\) below the minimum wage  
line and to the right of the required service line will  
receive a wage increase to the amount set on the  
sliders.  
F 4.4 headcount.  
Bar chart showing impact on wages and  
istogram and ormal istribution Show  
Current and Projected istributions  
The histogram and associated normal distribution  
\(also called a Gaussian curve\) show the current dis-  
tribution \(see Figure 4.5\) and projected distribution  
\(see Figure 4.6\). F 4.5 Current wage and headcount distribution.  
Blue bars indicate the group that would be affected by  
the wage increase.  
The reason we see both blue and gray bars in the  
\$9 through \$14 range in Figure 4.5 is because not  
everyone will enjoy the wage increase as our what-  
if analysis stipulates a minimum of four years of  
service.  
Figure 4.6 shows how the wages will be distributed  
after the increase. The \$14 bar is now very tall. The  
blue section of this bar represents the people who  
will see a wage increase based on your parameter  
choices.  
F 4.6 Projected wage and headcount distribution.  
On the tallest bar, the top, gray portion represents  
people who will earn between \$14.00 and \$14.49. The  
lower, turquoise portion represents people who will earn  
between \$14.50 and \$14.99.  
Why This Works 67  
Understanding the Normal Distribution  
The superimposed bell curve helps people familiar  
with normal distribution curves get a better sense of  
how the wages are distributed, as shown in Figure 4.7.  
The curve provides an easy read as to whether hourly  
wages are distributed evenly or if the data skews left  
or right. For example, if you change the number of  
required years to zero, the data skews strongly to the  
right, as the chart is dominated by the large bar at  
\$14. \(See Figure 4.8.\)  
F 4.7 Symmetrical normal distribution curve.  
The data indicates that 68 percent is within 1 standard  
deviation and 95 percent is within 2 standard deviations  
F 4.8 The distribution is right-skewed when the  
number of required years is set to zero. 68 Chapter 4 What-If Analysis\: Wage Increase amifications  
nderstanding distribution  
 number of general types of data distribution  
exist. \(See Figure 4.9.\) “Skew” refers to  
the asymmetry of the distribution versus the  
even distribution of a normal distribution. Some  
people find skew labels confusing. Skew is easy  
to remember if you see skewed data as having a  
tail \(i.e., gets thinner at one end\). The direction of  
the skew matches the direction of the tail.  
F 4.9 A few examples of the types of distributions.  
reat Use of Color  
Color is used sparingly and consistently in the  
dashboard with the stacked bar chart at the top of  
Figure 4.4 acting as both a useful chart and a color  
legend. With these two colors established, it’s easy  
to decode all the other charts on the dashboard.  
The same color is used on the scatter plot and the  
distributions as well as the key text throughout the  
dashboard.  
ashboard esigner Commentary  
Matt Chambers\: This dashboard showcases how  
visual design can make a difficult decision easy  
to understand. Tools such as this can show deci-  
sion makers the exact outcome of decisions while  
allowing manipulation of the variables over which  
they have control. The ability to see the outcome  
of decisions in real time is what makes this tool so  
powerful.  
uthor Commentary  
JFF\: I really liked this dashboard from the moment  
I saw it. Matt took great care in its design. I love  
the use of color, the dashboard layout, the chart  
types, and the font choice \(Avenir\), which has a  
clean appearance and is very readable. In addition,  
from a purely functional standpoint, the dashboard  
allows the user to interact in a way that allows sce-  
nario planning. It’s a great example of functionality  
and beautiful design.  
NDY\: I agree with Jeff. If we consider the response  
framework from Don Norman’s The Design of  
Everyday Things \(Basic Books, 2013\), we see success in all three areas. The visceral response  
is positive\: White space, simple colors, and plain  
fonts make for a positive first reaction. The behav-  
ioral response is great too. The affordances—the  
things that can be changed—are obvious. When  
we make a change to the parameters, we can  
Author Commentary 69  
immediately see the impact of our actions by the  
increase or decrease in the amount of blue on the  
dashboard. That leads us to the reflective phase\:  
Did we like it? Yes. Did it work? Yes. Therefore,  
do I like this dashboard and want to use it again?  
Absolutely yes. Chapter 5  
xecutive Sales ashboard  
Executive software license sales dashboard.  
Dashboard Designer\: The dashboard designer wishes to remain anonymous.  
Note that product names and company names have been changed.  
70 71 72 Chapter 5 xecutive Sales ashboard  
Scenario  
Big Picture  
You are a sales manager and want to know how you  
and the sales team have been performing this quar-  
ter. You want to be able to see, at any time during  
the quarter, exactly how total sales for that quar-  
ter compare to any previous quarter. You need to  
be able to see the overview for the whole business  
and also filter down to individual product lines or  
regions.  
Specifics  
• How are we doing this quarter?  
• How is this quarter compared to last quarter and  
the same quarter last year?  
• Are we on track to beat the previous quarter? Are  
we on track to beat the same quarter last year?  
• What are the most recent transactions?  
elated Scenarios  
• Product managers would want to compare cumu-  
lative sales of different products launched at dif-  
ferent times. Even though you launched Product  
X last year, did it sell quicker than Product Y, which  
you released this year?  
• Social managers might want to measure how viral  
their campaigns were. Which campaigns got the  
most hits the most quickly? Which ones had the  
most longevity?  
• Event organizers tracking registrations to recur-  
ring events would use a dashboard like this to see  
if their ticket sales are above or below target com-  
pared to previous events.  
ow People Use the ashboard  
This dashboard is designed to provide a complete  
overview of sales for two products. The company  
executives receive a copy of this email weekly. If they  
need more details, they can click on a link to go to  
the live, interactive version viewable in their browser.  
Why his Works  
ocus on  ear-over- ear and Quarter-over-  
Quarter rowth Comparisons  
In this organization, the most important things to  
know are\: what’s happening now, what happened  
last quarter, and what happened in this quarter last  
year. This is vital in a sales organization focusing on  
growth.  
The index chart on this dashboard makes compari-  
son to previous periods very easy. \(See Figure 5.1.\)  
The x-axis shows “Week of Quarter.” Each quar-  
ter’s sales begin in the same place\: at zero on the  
x-axis. The line shows cumulative sales for each  
week of the quarter. There is a line for each quar-  
ter. The result, the index chart, allows you to see,  
at a glance, how progress in this quarter compares  
to previous ones.  
Color and size help identify the most relevant quar-  
ters for comparison. Three lines are thicker than the  
others\: current quarter, previous quarter, and same  
quarter last year. The current quarter is red, which  
stands out most clearly. The other two comparison  
quarters are different colors, making identification  
easy. All other quarters are shown as thin gray lines;  
they are there for context, but the gray allows them  
to sit in the background unless needed. In the interactive version of the dashboard, the detail  
for any quarter can be seen quickly by hovering the  
mouse over the line\: A tool tip reveals detail, and  
the relevant quarter is highlighted in the bar chart  
to the right.  
Why This Works 73  
In Figure 5.1, we can see that when this screen shot  
was taken \(Q2 2016\), sales are tracking very well. It  
is significantly better than the previous quarter and  
the same quarter last year. In fact, sales growth in this  
quarter has been exceptional.  
F 5.1 The index chart lets the executives see how sales this quarter are growing compared to other quarters.  
The previous quarter and same quarter last year are highlighted. 74 Chapter 5 xecutive Sales ashboard  
As discussed in Chapter 31\: Visualizing Time, index  
charts are superb ways to track measures and com-  
pare them against different periods. This same com-  
pany also has a simpler dashboard comparing only  
annual company growth. \(See Figure 5.2.\)  
Although the index chart shows the growth rate  
comparison, the bar chart in Figure 5.3 shows the  
actual values for each quarter’s sales. Each row of  
bars represents one of the seven metrics this busi-  
ness focuses on. Only the labels for the three impor-  
tant bars \(this quarter, last quarter, same quarter  
last year\) are shown. This reduces clutter on the  
dashboard while users retain the ability to look up  
the most important numbers without relying on  
interactivity.  
F 5.2 previous year.  
Year-over-year performance for a software company. As you can see, 2016 is tracking ahead of the Why This Works 75  
Key Metrics as  ext  
The top left of the dashboard is devoted to the table  
shown in Figure 5.4. At a glance, executives can look  
to the most prominent part of the dashboard and find  
exactly the numbers they need to see.  
F 5.4 It can be important to distill the information  
down to just a few key numbers. If that’s the case, just show  
the numbers. You can show detailed charts elsewhere.  
F 5.3 Growth over time is shown in detail in this  
bar chart. The labels allow the viewer to see the exact  
information in the most relevant quarters.  
When looking at the dashboard at the start of a week  
or ahead of a meeting with a sales team, you can  
check just these numbers for the main takeaway.  
Small etails Where eeded  
This dashboard is dominated by the key metrics, the  
index chart and the detail bar chart. But the space  
below the filters is just enough to add extra information  
needed for a full business snapshot. In Figure 5.5, the  
last five orders are highlighted, as is a geographic snap-  
shot of the countries this company sells to.  
Color  
As with so many dashboards in this book, it’s the sub-  
tle use of color that makes this dashboard work, as  
shown in Figure 5.3. Red? Boom! That’s this quarter,  
the most important thing to look at. Pink or salmon  
pink? That’s important\: this time last year and last quar-  
ter. Gray? Not as important. These small but signifi-  
cant color choices have a large impact on how easily  
people can identify the numbers they need the most. 76 Chapter 5 xecutive Sales ashboard  
F 5.5 Small charts fit perfectly into small places.  
uthor Commentary  
NDY\: Where do you look first when you open a  
web page or dashboard? It’s probably the left-  
hand side. That’s where the most important infor-  
mation should go. Should that be where the  
filters are? Filters need to be discoverable for  
new users. Therefore, you could argue that they  
should be on the left. However, they also need  
to blend out of the way once you’re familiar with  
the dashboard. Therefore, they could go on the  
right-hand side.  
This dashboard is used by a team who know the  
data and the dashboard intimately. They don’t  
need to discover the filters each time they use the  
dashboard; they already know they are there. For  
that reason, the filters are on the right.  
If the dashboard is used by viewers who visit it only  
occasionally, it might be more important to put the  
filters on the left, as shown in Figure 5.6.  
I always used to prefer putting filters on the right-  
hand side of a dashboard. As a dashboard designer,  
I knew the filters were on the right because I put  
them there. However, when user-testing these  
dashboards, I’d be in despair as I watched peo-  
ple use them\: They’d click around, seemingly ran-  
domly, and most wouldn’t use the filters.  
“Why didn’t you click on the filters?” I’d ask after  
the usability test. “What filters?” was a common  
answer. Much as you may love your dashboard,  
others will view it as new, and many won’t cast their  
eyes to the right-hand side. Since they didn’t put  
the filters on the dashboard, they don’t think to  
look over on the right-hand side.  
What’s the solution? The dashboard in this chapter  
does put the filters to the right, because the com-  
pany trains all users in how to use the dashboard.  
They are shown the filters and trained how they work. Author Commentary 77  
F 5.6 people who use the dashboard infrequently.  
The dashboard would work as well with filters on the left-hand side. This approach would be better for  
JFF\: I like the chart types that were chosen for this  
dashboard\: the key indicators at the top of the  
dashboard, the index chart, and the bar charts.  
The index really shows the trend against the prior  
period very well. This dashboard is packed with  
information. I think a few changes to the overall  
design would help its overall flow. I might com-  
promise the placement of the filters to allow for  
things to be moved around a bit and give the com-  
ponents of the dashboard some breathing room.  
Figure 5.7 shows an example redesign where I  
moved a few things around. I created a bit more  
space for things to fit. I also removed the data  
labels on the bars, since tool tips are available to  
get more detailed data. I avoided rotating text 78 Chapter 5 xecutive Sales ashboard  
on the y-axis on the bar charts by moving the  
labels into the chart. Rotated text takes longer  
for users to read and can be difficult to read. As  
an example, there was a spelling mistake in this  
dashboard on “Active Clients.” This dashboard  
had already gone through several reviews by a  
number of people, but until I rotated, the error  
was not caught.  
F 5.7 Sample redesign of the dashboard. Chapter 6  
anking by ow,  
# Comparing with Then  
Ranking by now, comparing with then dashboard for a single period.  
Author\: Steve Wexler  
Organization\: Data Revelations  
80 81 82 Chapter 6 anking by ow, Comparing with Then  
Note  
In this dashboard, we show the percentage  
of survey respondents who rated a product  
or service very highly \(“Promoters”\). For a  
discussion of how to visualize data that takes  
into account Promoters, Detractors, and  
people that don’t care one way or another  
\(“Neutrals”\), see Chapter 17.  
Scenario  
Big Picture  
Your company takes customer satisfaction very seriously.  
You monitor it on a monthly basis by major geographic  
areas \(divisions\) and subareas \(regions\) and need to  
see in which areas it’s increasing, decreasing, or stay-  
ing the same.  
You want to be able to react to downturns quickly, but  
you don’t want to panic unnecessarily so you need  
to see if changes from the previous time period are  
statistically significant. You also need to be able to  
look at changes over time to see if big swings are  
isolated to the particular period or indicative of a  
larger problem.  
Specifics  
• You are tasked with showing the percentage of  
customers who are very satisfied with your prod-  
ucts and services \(“Promoters”\), broken down by  
division and region.  
• You need to sort the data by region so it’s easy to  
see in which divisions customers are most satisfied  
and in which they are least satisfied.  
• You want to make it easy to see just how much  
more satisfied customers are in one region versus  
another.  
• You need to compare performance by time  
period\(s\), for example, this quarter versus the pre-  
vious quarter.  
• You need to show whether changes from a previ-  
ous period are significant using whatever litmus  
test the company uses to determine statistical  
significance.  
elated Scenarios  
• You need to rank sales for products and services,  
broken down by state, and compare them with a  
previous period or periods.  
• You’re reviewing your weekly email campaign and  
need to show the number or percentage of folks  
who opened emails and clicked, broken down by  
gender and age. You need to compare the current  
week with a previous period.  
ow People Use the ashboard  
In this dashboard, a viewer can select a region  
that interests him or her. In Figure 6.1, the viewer  
selects Region F, and the dashboard updates to  
show longitudinal information about that region.  
Hovering over a bar will give you more information  
about a particular region, as shown in Figure 6.2. F 6.1 Selecting a region displays longitudinal information about that region. \(Admit it\: You really want to know  
what’s up with the bars that have red dots next to them.\) 84 Chapter 6 anking by ow, Comparing with Then  
F 6.2 A pop-up window provides more information about a particular region.  
Why his Works  
he Bar Charts Make Comparison asy  
The bars make it very easy to see just how one  
region compares with another. Indeed, as shown in  
Figure 6.3, we can remove the labels inside the bars  
and still tell that Region C is doing roughly twice as  
well as Region A.  
F 6.3 The bars make it easy to both sort and compare magnitude. Even without the labels, it’s easy to see that  
the top bar is roughly twice the length of the bottom bar. Why This Works 85  
he ertical ines Make It asy to See How  
Much Better or Worse  
The vertical lines in Figure 6.4 allow us to see that  
Region C did quite a bit better in the current period  
compared with the previous period and that Region  
E just did a little bit worse.  
he Bar Colors Make It asy to  
See Better or Worse  
Although the vertical lines may make the color coding  
and color legend unnecessary, by using color, we can  
very quickly see in Figure 6.5 that two regions in the  
East division performed better than in the previous  
F 6.4 The vertical reference lines make for easy comparison.  
F 6.5 Color coding prominently contrasts regions’ performance in current periods against performance in  
previous periods, allowing clear visualization of whether performance declined or improved. 86 Chapter 6 anking by ow, Comparing with Then  
period and five regions in the West division per-  
formed better than in the previous period.  
Percentage Change from the Previous Period  
Although it is not essential, it can be very useful to  
show the percentage difference from the previous  
period. \(See Figure 6.6.\)  
Note that some people prefer seeing the point dif-  
ference rather than the percentage difference, so you  
may want to add a dashboard widget that allows peo-  
ple to switch between the two ways of displaying the  
difference.  
he ed ots Make It asy to See Which  
ifferences Warrant urther Investigation  
A quick glance at Figure 6.7 makes it easy to see  
that something is special about Regions C, F, and  
H, and it’s not that the differences are particularly  
large. For example, there’s a big gap between  
current and previous values for Region N, but  
there’s no red dot. The legend \(above left\) indi-  
cates that the difference between the current and  
previous period is significant, using whatever test  
for significance is deemed appropriate for this  
situation.  
F 6.6 Bar length and direction correspond to  
percentage difference from the previous period. Why This Works 87  
F 6.7 Red dots make it easy to identify possible opportunities/problem areas.  
he Sparklines Make It asy to See ow  
alues ave Changed over ime  
Sparklines show us, at a glance, how each region is  
performing over time and any significant variations  
\(i.e., whether there are none, some, or many\). In Fig-  
ure 6.8, we can see that there is a lot of volatility in  
Region H in particular. Note that many factors go into  
whether an increase or decrease is significant, includ-  
ing the number of people who responded to a survey  
during the period. This is why we don’t see a red dot  
for Region A at its peak. Although the increase was  
indeed very large, it was not statistically significant  
based on the applied test for statistical significance. 88 Chapter 6 anking by ow, Comparing with Then  
F 6.8 Sparklines give us a quick read of  
performance over time. A red dot indicates that a  
change from the previous value was significant.  
ther eatures of the ashboard  
Notice that there is a “Select Period” parameter con-  
trol on the dashboard. \(See Figure 6.9.\)  
The parameter allows viewers to compare any period  
with a prior period versus only the current period with  
the prior period.  
Why is this useful?  
Suppose it is February 27, and somebody wants to  
compare January figures with December figures. After  
a long weekend, the person comes into the office to  
finish the analysis, only to discover the dashboard  
now shows February versus January figures because  
it’s March 2. This parameter allows people to focus  
on whichever period interests them.  
he raditional pproach, and Why  ou  
Should void It  
Many organizations deal with this scenario using  
a traditional type of scorecard, as shown in  
Figure 6.10.  
Given this chart type’s popularity, why shouldn’t you  
use it?  
There are at least five shortcomings with this approach\:  
1\. The uniform size of the cells makes it difficult to  
see how much better or worse one region is per-  
forming when compared to another region. With-  
out the numbers in each cell, we would not be  
able to tell that the percentage of promoters in  
Region C is more than twice the percentage of  
promoters in Region A.  
2\. The traffic light colors will alienate people who  
suffer from a color vision deficiency \(about 8 per-  
cent of the male population\).  
F 6.9 “Select Period” widget allows viewers to  
focus on any period and not just the current period. F 6.10 3. A typical and not terribly useful scorecard.  
The colors are based on rank and not performance,  
which could present a problem. Most people  
equate red with bad, but in this case it indicates  
last. Indeed, all the scores within a division may be  
very good, but the least very good score still would  
F 6.11 Distributed slope chart.  
ther Approaches 89  
be red. Consider Region H with 40.3 percent. It’s  
red because it is ranked last, but if it were in the  
East division, it would be light green or yellow.  
4\. The key performance indicators \(the up- and  
down-pointing triangles\) show only increase  
and decrease, not the degree of increase and  
decrease. There’s no easy way for readers to see  
where there are big differences.  
5\. The colors for the key performance indicators  
conflict with the color-coded cells. That is, green  
indicates the top rank in one case but a simple  
increase in another.  
ther pproaches  
There are other ways to show change between two  
periods across different categories.  
One approach is the distributed slope chart, shown  
in Figure 6.11, as it makes sorting by performance  
across divisions and seeing the degree of change  
between periods easy. 90 Chapter 6 anking by ow, Comparing with Then  
F 6.12 the percentage difference bars on the right.  
The distance from the reference line to the end of the left-hand bars shows the same information as  
Why use a sorted bar chart instead of a slope chart?  
The sorted bar chart worked better with the other ele-  
ments of the dashboard. Specifically, the sparklines,  
which provide an at-a-glance longitudinal view, would  
not complement the slope chart.  
uthor Commentary  
NDY\: You could argue that the bars showing the  
percentage difference are not necessary, since the  
bar and the reference line let you see that too. \(See  
Figure 6.12.\)  
Sure, you could remove the percentage difference  
bar and let the reference line do all the work, but it  
would be much harder to parse multiple questions  
when viewing this dashboard. On one day your  
primary question might be on the highest and  
lowest satisfaction rates. If that’s the case, focus  
on the bars on the left. The reference lines give  
you some information of secondary importance.  
On another day, you might want to know about the  
percentage difference. In which case, you’re not left  
trying to gauge the length of the gaps on all the  
bars. Try working out which had the highest percent-  
age change based on the bars alone in Figure 6.13.  
F 6.13 Which region had the highest change from  
the previous period \(i.e., which bar end is farthest away  
from the reference line?\) The percentage bar makes it easy to switch from  
one question to the other and compare either set  
of values against a common baseline.  
You do need to consult with your audience as to  
which is the most important question and make  
that one most prominent. In the dashboard in  
this chapter, it’s “What is the level of customer  
Author Commentary 91  
satisfaction?” The percentage question is of sec-  
ondary importance.  
If you find the percentage question is the most  
important, then it’s just a matter of switching the  
layout and bringing one into a more prominent  
focus, as shown in Figure 6.14.  
F 6.14 than actual values, make it the bigger chart.  
Give the most prominence to the most important question. If percentage difference is more important Chapter 7  
# Are We on Pace to  
each ur oals?  
Measures that are on pace to achieve goals, along with key metrics for TV and social media for the current month.  
Author\: Ryan Sleeper  
Organization\: Evolytics LLC  
92 93 94 Chapter 7 Are We on Pace to each ur oals?  
Scenario  
Big Picture  
Despite valiant efforts to get everyone in your organi-  
zation to rely on interactive dashboards, certain exec-  
utives insist on receiving a weekly one-page summary  
of key revenue, TV ratings, and social media mea-  
sures. Although your organization tracks hundreds  
of measures, each executive asks for a custom report  
that contains only certain measures.  
The executive using this dashboard doesn’t want to  
spend more than two minutes reviewing the findings  
and is particularly concerned with seeing if revenue  
key performance indicators are on pace to reach the  
company’s goals.  
Specifics  
• You need to provide an at-a-glance executive sum-  
mary of key measures to executives via email.  
• You need to show how the organization is perform-  
ing at the moment but also in the context of how  
the organization is performing for the entire year.  
• You need to normalize different measures so that  
performance is easy to compare even though  
scales for the various measures are different.  
• Executives need to see progress toward a goal for  
various revenue measures as well as period-specific  
TV and social media ratings.  
ow People Use the ashboard  
This is a terrific example of a personalized, explanatory  
dashboard. The dashboard is personalized in that  
measures presented are of specific interest to the  
executive receiving the dashboard. The dashboard  
is explanatory in that is gets delivered via email to  
the executive’s inbox. There’s no interactivity or  
exploration in this case, just the key metrics presented  
very clearly.  
The goal is to make it as easy as possible for the  
executive to see, at a glance, which key measures  
are performing well and which are performing  
poorly.  
Notice that the dashboard author also telegraphs the  
key findings with bullet points at the top. \(See Fig-  
ure 7.1.\) These are likely the three questions that come  
into the executive’s head when he or she reviews the  
dashboard, and the bullets provide the context to  
better understand the numbers.  
Why his Works  
he Pace Chart Clearly Illustrates Progress  
The pace chart is a variation of Stephen Few’s bullet  
chart in that it shows progress toward a goal \(the  
heavy black line\) as well as whether the organization  
F 7.1 Bullet points at top of dashboard present key findings. Why This Works 95  
F 7.2 \(dotted line\), and our goal \(solid vertical line\).  
Pace chart shows current performance \(the bar chart\), whether we are on pace to reach our goal  
is on pace to achieve that goal \(the dotted line\).  
\(See Figure 7.2.\)  
Note that the revenue measures have been nor-  
malized based on the goal, not on the actual rev-  
enue amounts. That is, bar length is based on what  
percentage of the goal has been achieved. This  
explains why the corporate sales revenue bar, at  
\$1.3M, is shorter than the concessions revenue bar,  
at \$800K.  
Note also the color coding. It’s very easy to see  
that consumer sales, concessions, television rev-  
enue, and sponsorship revenue are ahead of pace  
\(blue\); merchandise is near pace \(gray\); and cor-  
porate sales and advertising revenue are behind  
pace \(orange\).  
he eference ine Clarifies atings  
In Figure 7.3, we can see immediately that TV ratings  
for males between the ages of 18 and 34 are above  
target while ratings for the other key demographics  
are below target.  
F 7.3 reference line.  
TV ratings for key demographics with target  
Monthly rowth Index ffers an  
asy Comparison  
Here’s a case where the dashboard author assumes  
that the dashboard recipient understands the index. In  
Figure 7.4, a value of 100 indicates that the growth for  
the current month is the same as the previous month. 96 Chapter 7 Are We on Pace to each ur oals?  
F 7.4 Twitter, and Instagram.  
Comparison of growth among Facebook,  
The value of 105 for Facebook indicates that there was  
a 5 percent increase in new likes from the previous  
month. For example, in the previous month, there  
might have been 1,000 likes, but in the current month,  
there were 1,050 likes.  
As with the revenue comparison, the growth  
index normalizes the raw counts, as the number of  
Instagram users is likely to be considerably smaller  
than the number of Facebook users. By using a com-  
mon index, it’s easy to compare growth rates and see  
that Twitter growth is down compared to the previous  
month while Instagram growth is up by 12 percent.  
uthor Commentary  
TV\: Even without any advance understanding of  
the nature of the business, we were able to figure out  
almost all of what was going on with the dashboard  
without any explanation from the author. The only  
place where we needed help was in understanding  
the Social Media Monthly Growth Index.  
Although we may have needed some handhold-  
ing, we’re confident that the target executives of  
this dashboard would not need any explanation.  
Indeed, the cherry-picked measures and their asso-  
ciated presentation demonstrate a deep and thor-  
ough understanding of what the consumers of the  
report want to see.  
Notice that we used the word “report.” Although  
this endeavor definitely fits our definition of a dash-  
board, the key findings, commentary, layout, and  
brevity suggest this is something that should take  
no more than two minutes for the target audience  
to consume, most likely via email.  
We particularly liked the pace chart, which takes  
seasonality into account. Also noteworthy is the  
clean and uncluttered design as well as the sim-  
ple and instantly recognizable icons for Facebook,  
Twitter, and Instagram, all embedded within the  
bars.  
One thing I do question is why the bars along  
the bottom are not color coded based on being  
ahead of or behind target. Although color cod-  
ing is not necessary because it’s easy to see  
which bars are above and below the reference  
line, coding based on color might be a welcome  
addition.  
NDY\: This dashboard could be condensed in order  
to take up less space. However, in this instance, the  
requirement was very clearly to create a printable  
dashboard with just these key pieces of informa-  
tion. If we managed to convince our executives  
to switch to looking at these on their cellphones,  
then we could create something much denser to  
fit into a small space. Author Commentary 97  
F 7.5 Labels aligned to the left.  
The first thing I would change is to move the labels  
on the bars to the left of the bars rather than above  
them. \(See Figure 7.5.\)  
This improves the readability of the chart.  
Now, with a single sweep of my eye, I can read  
down the categories and identify the one I want  
to look at. I can quickly read down the numbers  
too with a single sweep of the eye. With the labels  
positioned above the bars, I have to work harder  
to cast my eye over the categories or values.  
\(See Figure 7.6.\)  
F 7.6 around the page to consume the information.  
How your eyes read two versions of the chart. The red lines represent how your eyes have to move Chapter 8  
# Multiple Key  
# Performance Metrics  
Key performance indicators with multiple measurement types.  
Author\: Robert Rouse  
Organization\: InterWorks, Inc.  
98 99 100 Chapter 8 Multiple Key Performance Metrics  
Scenario  
Big Picture  
You are tired of trying to maintain dozens of different  
dashboards that address various aspects of your busi-  
ness, so you decide to build a single master dashboard  
with hundreds of key performance indicators \(KPIs\)  
that monitor the health of the entire organization. The  
dashboard needs to be compact and allow stakehold-  
ers to easily focus on the items that are pertinent to  
them and also see how things fit within the big picture.  
The dashboard must show, at a glance, if you’ve met  
your targets for the current period as well as if you  
are consistently making or missing your targets. You  
also need to allow people to zoom in and see details  
about a particular KPI.  
Specifics  
• You need to show actual values versus targets for  
all areas of the business with many different ways  
of measuring performance.  
• You want to make it easy to show only the areas of  
the business that are underperforming.  
• Your company does quarterly reviews and needs  
to see the current quarter along with trends from  
preceding ones.  
• Your company has set thresholds and requires  
measured values to stay within a given percent-  
age above or below that goal.  
elated Scenarios and dditional unctionality  
• You need to navigate all levels of an organizational  
hierarchy to serve managers at those levels.  
• You need to provide easy access to measurement  
definitions and goal values for a particular KPI.  
• You want to show the numbers behind calculations  
like ratios or percentages in a detail view.  
• You need a means of getting to more specialized  
views unique to a business unit or KPI.  
ow People Use the ashboard  
The dashboard shows KPIs for many levels of hier-  
archy within an organization. Using filters along the  
right side of the dashboard \(See Figure 8.1\), the user  
can select a division and related business levels for  
his or her reporting needs.  
The left portion of the dashboard then shows totals  
for each business level and details based on the view-  
level selection. \(See Figure 8.2.\)  
F 8.1 Filter and parameter controls allow the user  
to focus on the KPIs associated with a particular division  
and level within that division. ow People se the ashboard 101  
F 8.3 A tool tip appears on hover to give details  
and link to a commenting system.  
F 8.2 and parameter settings.  
Divisions and KPIs associated with the filter  
Hovering over a shape shows a tool tip with a defini-  
tion and link to a system where users can annotate  
facts relevant to the selected KPI. \(See Figure 8.3.\)  
When a user clicks a KPI name, a pane appears with  
pertinent details about that KPI. \(See Figure 8.4.\)  
F 8.4 Selecting a KPI \(in this example customer cases resolved in under one day\) shows details about that KPI. 102 Chapter 8 Multiple Key Performance Metrics  
In Figure 8.4, we see the following details\:  
• Specifics about the goal and whether the values  
are above or below a threshold.  
• Details related to the current period’s calculations.  
This particular example shows the cases resolved  
in one day \(numerator\) and the total cases handled  
\(denominator\).  
• A larger trend view with the goal value as a dot-  
ted line.  
• Definition of the selected KPI, which may include  
how it is measured or any exceptions involved.  
• A link to view more details on a separate dash-  
board designed specifically for this business unit  
and KPI.  
Why his Works  
Shapes dd Context for  
KPI alues versus  arget  
Circles with filled areas above or below the center  
show how the current value relates to the target.  
\(See Figure 8.5.\) The different shapes and the color  
make it easy for users to find underperforming  
F 8.5 Shapes indicate performance versus target.  
business units. Gray-colored circles show where no  
target is defined or where data is unavailable for the  
current period.  
Sparklines Indicate Performance Improvement  
or ecline  
This dashboard shows several KPIs with no set target.  
For these KPIs, the goal is simply to continue improv-  
ing each period. Trend lines easily show improvement  
\(or lack thereof\) in those areas.  
Where there is a set target, the trend shows the num-  
ber of successive periods that the business did or did  
not meet its goals. This gives important background  
to find out if a certain area is an ongoing concern or  
a one-time problem.  
Business ierarchy avigation Serves Multiple  
eeds in ne iew  
Showing values for the sublevels in the same view as  
higher business levels helps users diagnose points  
of interest without switching back and forth among  
dashboards. \(See Figure 8.6.\) These filter and param-  
eter controls allow a single dashboard to serve a wide  
range of business needs, reducing the dashboard  
development effort needed when users request  
changes.  
ilters llow Users to ocus on KPIs that  
re below hreshold  
With literally hundreds of KPIs, the filter shown in  
Figure 8.7 allows users to focus just on KPIs that are  
below target for the current period. F 8.6 Filters and parameters allow users to focus  
on certain levels of business hierarchy.  
Alternative Approaches 103  
lternative pproaches  
How do you visualize the progress toward a goal? In  
this dashboard, Robert Rouse chose a variety of circle  
icons. To make identification easy, viewers must learn  
the color and shape of each icon. That’s a small disad-  
vantage, although it’s not much of a burden for anyone  
using the dashboard regularly. Since it is a KPI dash-  
board, it should be used regularly. The circles also take  
up very little space, which is a big advantage.  
In Figure 8.8, we present an alternative approach on  
a similar KPI tracking dashboard.  
Jonathan Drummey’s dashboard tracks occurrence of  
infection issues and nursing issues, such as the num-  
ber of falls, number of cases of Clostridium difficile,  
and so on. There are major similarities between the  
first dashboard in the chapter and the dashboard  
shown in Figure 8.8\: one row per KPI, a colored  
sparkline showing trends, and exact numbers allow-  
ing lookup of exact values.  
F 8.7 Filter allows users to focus on only those KPIs that are below target for the current period. 104 Chapter 8 Multiple Key Performance Metrics  
F 8.8 Health care KPI-tracking dashboard.  
Source\: Jonathan Drummey of Southern Maine Healthcare  
The big difference is the lollipop in the center, which  
we think is an interesting and useful approach to track-  
ing progress. \(See Figure 8.9.\)  
Here’s how the lollipop components work\:  
• The vertical blue line marks the target. A circle  
to the right is meeting the target; to the left is  
underperforming.  
• Blue circles show targets that are performing above  
target.  
• Red circles indicate low-performing, high-priority  
measures compared to target.  
• Pink circles represent low-performing, lower-priority  
measures.  
• The lollipop stick shows comparison to the prior  
period \(usually a month, sometimes a quarter\). The  
stick runs from the previous period’s performance  
level to the current period’s circle. If there is no  
stick, performance hasn’t changed.  
F 8.9 Lollipop shows progress toward a goal. F 8.10 Lollipop chart shows progress toward a goal.  
Let’s take a look at Figure 8.10 to see how the lolli-  
pop chart works.  
The circle marked 1 is pink, indicating that it is not  
high priority for the group selected in this dashboard.  
It is underperforming, but the lollipop stick indicates  
that it is improving.  
The circle marked 2 is blue. It is on target, just. The  
lollipop stick shows that there has been a very large  
improvement over the last period.  
The circle marked 3 is red. It’s a high-priority target  
that is underperforming but has improved a little since  
the last period.  
Showing progress toward a goal can be done in many  
ways. See also Chapter 7, the pace chart by Ryan  
Sleeper. Bullet charts are also good ways to show  
progress toward a goal.  
uthor Commentary  
TV\: This dashboard presents a great approach to  
the “how am I doing right now” question that we’ve  
Author Commentary 105  
seen in several other dashboards. Here the focus is  
on how the organization is performing versus the  
target for the period, and it also shows trends over  
the past five periods.  
A lot of attributes to this dashboard won us over  
with the most compelling being that we are able  
to figure out the KPIs and associated details with-  
out needing any instructions. We also liked the  
designer’s icons for whether the KPIs were below,  
near, or above target.  
One of the more impressive features of the dash-  
board that is difficult to present in a book is just  
how many levels of KPI are embedded in the  
dashboard. The designer went to great lengths  
to allow a stakeholder to find levels and the asso-  
ciated KPIs without having to develop multiple  
dashboards.  
NDY\: This dashboard solves a major challenge\:  
How do you visualize hundreds of KPIs? One way  
is by extensive filtering. Another way might be  
to pack all the KPIs in tiny sparklines on a huge  
screen. Although they are valid design solutions,  
it might be worth asking a more fundamental  
business problem\: Why does the business have  
so many KPIs?  
When designing dashboards, it is always worth-  
while to challenge the design brief. In this case,  
how will you measure whether the KPIs get looked  
at? I would recommend this business monitors  
which KPIs are actually looked at. If many of the  
hundreds of KPIs are never looked at, I would rec-  
ommend the business reassesses how it meas-  
ures success. Chapter 9  
# Power Plant  
perations Monitoring  
Wind and solar \(GTA Power\) dashboard.  
Source\: Images courtesy of Dundas Data Visualization, Inc. \(www.dundas.com\)  
Dashboard Designer\: Stas Kashepava  
Organization\: Dundas Data Visualization  
Link\: https\://samples.dundas.com/Dashboard/fa1ee851-8049-457d-92a1-2e2e0c311991?vo=viewonly  
106 107 108 Chapter 9 Power Plant perations Monitoring  
Scenario  
Big Picture  
You are the manager of a power plant, and part of  
your job is to monitor consumption and output. You  
need to know if the output today is different from the  
last few days and how the output is trending. Certain  
things impact your production level, so you also fol-  
low real-time metrics for those variables.  
You need to monitor different locations to determine  
if they are producing the expected output and if their  
production is changing over time. You also manage  
the routine inspections of these locations, so you  
need to know when the last inspection occurred and  
flag locations that were not inspected recently.  
Specifics  
• Your job is to create an overview dashboard to  
provide all of the listed information to the opera-  
tional management team. The dashboard should  
be interactive to provide additional details and  
allow the users to drill down to the location level  
and see historical data.  
• You need to show the data by the location of the  
installation. You need to show current output versus  
the expected output so that it is easy to see which  
locations aren’t producing as needed.  
• You want to see which locations consistently miss  
or exceed expected output over time.  
• You need to sort data by each location’s last inspec-  
tion time so it is easy to identify the locations in  
which you need to spend more time during your  
next trip.  
• You need to provide a real-time data feed for the  
operation center to stay up to date.  
• You need to provide a detailed level of data about  
specific locations that are not yielding expected  
output and view that data and additional opera-  
tional service-level data by location.  
elated Scenarios  
• You need to track the output/performance of any  
distributed part of a manufacturing process, which  
is spread across multiple locations.  
• You need to get a quick real-time summary of  
capacity metrics compared against the recent  
past \(e.g., last 14 days\), which allows for analysis  
across longer historical terms \(last 90 days/last  
X years\).  
• You need to display real-time results within an oper-  
ation center on a mounted display with no man-  
ual interaction \(e.g., online service support center,  
manufacturing service center, telecom network  
operations center\).  
ow People Use the ashboard  
The top section of the dashboard is used to quickly  
review the current consumption and output of the  
power plant. Area charts show the recent period  
trend; a red dot is used to show the most current  
value. \(See Figure 9.1.\) The reader can review the  
current value against the trend and quickly gauge  
if the current value goes above or below the linear  
regression line for the data. ow People se the ashboard 109  
F 9.1 Area charts with trend lines and markers act as sparklines for a quick at-a-glance view.  
Field managers can turn on real-time data feeds to  
constantly monitor condition metrics \(like tempera-  
ture and humidity\) that affect the field operations. A  
simplified bullet chart is used to show the actual ver-  
sus target data. \(See Figure 9.2.\)  
Location \(installation\) managers and overall manage-  
ment use location details to quickly identify locations  
where output fails to meet expectations. \(See Fig-  
ure 9.3.\) They can see if particular locations consist-  
ently fail to meet expectations or if shortfalls are  
isolated incidents. They can also focus on inspections  
and track which locations need inspection \(more than  
15 days since the previous one\) and which ones are  
getting close to needing inspection. \(The indication  
starts after 10 days.\)  
F 9.2 Real-time metrics are shown, and the real-  
time data feed can be turned on or off as needed. F 9.3 Details provide key metrics for each location. Clicking on any location opens a new dashboard  
showing details about a particular location, including  
the location model breakdown and service-level  
ow People se the ashboard 111  
data required by the global support team. \(See  
Figure 9.4.\)  
F 9.4 User-selected details-on-demand view of each location. 112 Chapter 9 Power Plant perations Monitoring  
Why his Works  
ocus on Up-to-ate ata  
Highlighting the current value in the area charts allows  
the user to focus on that value and compare it to the  
overall trend. \(See Figure 9.5.\) This helps the reader to  
shift attention to the current value rather than to the  
highest and lowest values, which are no longer relevant.  
F 9.5 The simple design is easy to understand,  
provides a quick at-a-glance view, and highlights  
important points.  
Serving ll evels of Users  
The dashboard provides a summary across aggre-  
gated metrics and all of the locations involved, allow-  
ing higher-level management to get a quick overview  
of performance by location. The dashboards also  
answer questions for the field manager and support  
personnel in real time.  
A user can click any location on the dashboard. A sec-  
ond dashboard appears showing plant details and key  
statistics for the location. \(See Figure 9.6.\) Clicking  
each model provides an even more detailed view, fil-  
tering the line chart, which can show the last 24 hours,  
90 days, or 7 years. There is also a map showing the  
location of each selected model.  
Ben hneiderman’s mantra  
Consider Ben Shneiderman’s mantra when  
designing dashboards\: Overview first,  
followed by zoom and filter, and then details-  
on-demand. This example clearly follows this  
recommendation.  
The line chart allows the user to analyze location  
output across a specific time range instead of a sin-  
gle point in time. It also enables the user to cross-  
match data with inspection dates. This allows for a  
quick drill-down on key locations to get all of the  
operational data needed for a selected location’s  
maintenance. A service person can then compare  
the location layout on a street-level map via Google  
Maps and can see the install date and the service  
history. F 9.6 map.  
Selecting a model filters the line chart for the selected period of time and shows the location on the 114 Chapter 9 Power Plant perations Monitoring  
Simple Use of Bullet raphs, Sparklines, and  
Performance Indicators  
Figure 9.7 contains simple, well-designed bullet  
graphs and sparklines. They show a target line that  
allows the reader to put the data in context. For exam-  
ple, in some locations, the trend is constantly below  
the target. When sparklines are used, they often show  
only the trend of the data. Adding the target line  
helps put the trend of the data in context to where  
it should be.  
A blue dot is used to indicate when a certain length of  
time has elapsed since the date of the last inspection  
at that location. The light blue dot is shown for 13 days  
since inspection and a dark blue dot for 19 days since  
inspection.  
identical to the look and layout of the Executive  
Dashboard we use at my company. We don’t have  
a range for the target, so we don’t use performance  
bands with our bullet charts, just as in this example.  
When teaching data visualization, I often find there  
is some confusion in understanding bullet graphs. If  
performance bands are not needed, then I recom-  
mend dropping them and using a design like this.  
It is simple to understand—an actual bar with a tar-  
get line, although typically shown with a quantita-  
tive scale.  
The one design choice I question on this dash-  
board is the use of blue, sequentially from light  
to dark, to show the severity of the time elapsed  
since inspection. If I want the reader to interpret  
the dot as a bad thing, then I might choose a differ-  
ent color, something bright and alerting, such as a  
red or orange, and change the marker used on the  
area chart to blue. Using an alerting color will help  
draw the reader’s attention to the locations where  
too much time has passed since the last inspection.  
\(See Figure 9.8.\)  
F 9.7 Simple bullet graphs show actuals versus  
targets, and sparklines show the 14-day trend.  
uthor Commentary  
JFF\: I really like the design of this dashboard. I espe-  
cially like the design and layout of the bullet graphs  
and sparklines in the data table. This is almost  
F 9.8 Using red and orange to alert readers that  
something needs their attention. Author Commentary 115  
F 9.9 Bar charts on an independent axis scale. In the original version of this dashboard, the  
designer used an independent scale for each bar  
in the bar chart \(see Figure 9.9\). This was done  
to show the ratio of the actual output to the  
expected output. One of our reviewers pointed  
out that this was very confusing. He asked, “why  
is the bar longer for the 1 Whitestone Rd location  
vs. 1552 Flintrock?” And we agree, Figure 9.9 is  
very confusing.  
The designers also considered showing the  
bars using a common scale of kW output  
F 9.10 output.  
Bar charts on a common scale of kW  
\(see Figure 9.10.\). The dilemma here is that if the bars  
are shown on the same quantitative scale based on  
kW output, then all of the smaller power stations will  
always show target lines near zero and no visible bar.  
Another alternative is to show the bars on a com-  
mon scale of 0% to 100%, so that the target lines  
match for each location \(see Figure 9.11\). This is a  
good approach, but notice, in this case, that it is  
difficult to see the small gaps as the actual value  
approaches 100% and it does not show the impact  
of the gap in kW output. 116 Chapter 9 Power Plant perations Monitoring  
the 100% target line. This allows the reader to see  
small differences that may be very important. In  
addition, the size of the gap \(measured in the abso-  
lute number of kW between the current output  
and the expected output\), is encoded using the  
size of the dots. This shows the impact of the kW  
difference relative to the size of the facility rather  
than simply expressing it as a percent. This is very  
important, because in this example, the facility at  
92% of expected output actually had a larger nega-  
tive impact on output than the facilities that were a  
lower percent, at 86% and 90% of expected output.  
F 9.11 100%.  
Bar charts on a common scale of 0% to  
This is a great example of why it is important to  
understand the question being answered by the  
visualization. If you are the location manager for  
the 48 Davis Drive location, then it would be impor-  
tant for you to know that output at your location  
is only 90% of expected output, which is clear in  
Figure 9.11. However, if you are the regional man-  
ager for all of these locations, then it might be  
more important to know that 1833 Appleby Line  
and 144 Howard Cavasos are responsible for the  
largest gaps in expected output, nearly 130,000 kW  
gap combined.  
One alternative in this case might be to plot the  
difference from 100% instead of the actual values.  
That can be done with a dot plot. In Figure 9.12,  
the actual output vs. the expected output is shown  
as a percent using the position of the dot from  
F 9.12 A dot pot showing the actual output  
vs. the expected output with the size of the dots  
representing the difference in the output measured in  
kW units. Chapter 10  
Showing Year-to-ate and  
# Year-over-Year at the  
# Same Time  
Year-to-date/Year-over-year dashboard optimized for mobile devices.  
Author\: Steve Wexler  
Organization\: Data Revelations  
118 119 120 Chapter 10 Note  
epending on your needs, you may want to  
go with the alternative approach suggested  
by Andy Cotgreave at the end of this chapter.  
Scenario  
Big Picture  
You received a promotion in June of this year that  
involves managing sales for six different regions. Your  
number-one goal is to make sure that by the end of  
the year, the sales for each region will be greater than  
they were for the previous year.  
You came into the new job knowing that two of the  
regions were way behind where they needed to be. In  
your discussions with upper management, you made  
the argument that a reasonable goal would be to  
exceed sales in four regions and improve the trend  
in the other two regions that were tanking.  
As you are often out of the office visiting individ-  
ual stores, you want to have a collection of mobile-  
friendly dashboards that allow you to monitor current  
performance, trends, and near-real-time details on  
demand. Back at the office, you have a single dash-  
board that combines all these elements into one view.  
Here we’ll look at how to fashion a dashboard that  
makes it easy to compare performance across regions  
and years and also detect trends.  
Specifics  
• You need to rank year-to-date \(YTD\) sales  
performance for six regions and compare with  
Showing Year-to-ate and Year-over-Year at the Same Time  
sales for the previous year \(i.e., year-over-year  
\[YoY\]\).  
• You need to see, at a glance, how much better or  
worse the regions are performing.  
• You need to see trends to know whether you are  
on track to hit your goals.  
• You need a way to view sales activities for a particu-  
lar region and for a particular time period.  
elated Scenarios  
• You need to monitor first-call resolution rates for  
several different products and compare them with  
rates from the previous year.  
• You are the head of annual giving for a university  
and need to rank and compare donations for 10 dif-  
ferent regions for this year and for the previous year.  
• You monitor attendance for theatrical productions  
and need to compare current YTD ticket sales with  
the previous year’s sales.  
• In this book, check out these chapters\: Chapter 5,  
which uses an index chart to compare quarter-to-  
date performance; Chapter 6, which compares one  
quarter to another; Chapter 7, which shows if you are  
ahead of or behind where you need to be to reach  
your goals; and Chapter 8, which compares current  
performance against goals.  
ow People Use the ashboard  
Opening the dashboard shows a summary of the six  
regions as of today. \(See Figure 10.1.\)  
The key performance indicator \(KPI\) icons show there  
are problems in Katonah and Croton, so the user can  
scroll down and look at trends for those two regions.  
\(See Figure 10.2.\) F 10.1 Initial dashboard view showing summary  
and trends for first two regions.  
F 10.2 Scrolling allows the user to look at the  
regions that are underperforming. 122 Chapter 10 Showing Year-to-ate and Year-over-Year at the Same Time  
The good news here is that while YTD sales are down  
as of today, things are much better now than they were  
a few months ago when you took the job. You can  
place your finger over a data point and see informa-  
tion about that time period. \(See Figure 10.3.\)  
If you want to see sales details for the region and  
period in question, you can press the “See details”  
link. Examples of what you might see would be sales  
by day of the week and for individual items.  
F 10.3 activity for that month.  
Pressing a point shows details about  
Why his Works  
Bars llow for asy Comparison  
The bar chart makes it very easy to see just how  
much greater one region’s sales are compared with  
another’s. \(See Figure 10.4.\)  
F 10.4 Bars make it easy to see how much larger one region’s sales are compared with another’s. F 10.5 Reference lines make it easy to see how  
far ahead or behind we are.  
Indeed, we could leave the labels that are inside the  
bars off the visualization, and it would still be easy to  
tell that sales for Brewster are about twice those of  
Katonah.  
eference ines Make It asy to See ow ar  
head or Behind We re  
Again, we can remove the numbers and the KPI icons  
but still see that Croton is significantly behind the  
Why This Works 123  
previous year while Katonah is only a little behind and  
York is quite a bit ahead. \(See Figure 10.5.\)  
ood Use of Color and ood Placement of  
Color egend  
We show the current year in a dark green and the pre-  
vious year in light gray, as the current year is our pri-  
mary concern. \(See Figure 10.6.\) The color and shape  
legend \(which users don’t even need at this point  
because they’ve looked at this dashboard hundreds  
of times\) is tucked inside the chart and does not take  
up any additional screen space.  
Although the KPI icon is red, the very existence of the  
icon and the fact that it is pointed down alerts all users  
\(even those with color vision deficiency\) that there is  
a problem in Katonah and Croton.  
umber Placement ptimizes Space  
Given that the target device is a smartphone, there’s  
not a lot of room for the bars. Placing the numbers  
F 10.6 Colors, icons, and legend placement make it easy to decode the chart. 124 Chapter 10 Showing Year-to-ate and Year-over-Year at the Same Time  
F 10.7 Numbers placed outside the bars cramp the chart and conflict with the reference lines.  
inside the bars gives the chart more space and avoids  
a conflict with the reference lines.  
Figure 10.7 shows what the chart would look like if  
the numbers were placed outside the bars.  
ine Charts Make It asy to lean rends  
Although it’s great to have a quick summary view,  
it’s important to know how things are trending. For  
example, Katonah is down 10 percent from the previ-  
ous year. Did that gap happen recently, or has there  
been a problem from the beginning of the year?  
The trend line in Figure 10.8 makes it easy to see that the gap was much larger earlier in the year and  
that the sales for the region have made up a lot of  
ground from the previous year.  
F 10.8 Trend lines show that the gap is narrowing. The Traditional Approach, and Why You Should Avoid It 125  
F 10.9 Back in June, current YTD sales trailed the previous year by 32 percent.  
Selection llows asy xploration of ifferent  
ime Periods and etails on emand  
The user can press any point and get additional infor-  
mation about that point. In Figure 10.9, we see that the  
sales gap in June was quite a bit larger than it is now.  
The “See details” hyperlink allows users to see sales  
details about the selected period. The link could jump  
to the actual sales system or to a dashboard with  
details about the month and region in question.  
he raditional pproach, and Why  ou  
Should void It  
Figure 10.10 exemplifies the tabular scorecard  
approach to displaying YTD and YoY data.  
F 10.10 A typical scorecard approach to  
displaying YTD and YoY data. 126 Chapter 10 Showing Year-to-ate and Year-over-Year at the Same Time  
The table with the KPI icons is not aesthetically  
unpleasing; it just makes us work very hard to under-  
stand the magnitude and differences in the num-  
bers. For example, Brewster has sales of \$63,467 and  
Ardsley is at \$19,182. What are users to make of this?  
Users have to do mental math to understand that the  
region with the most sales is more than three times  
as much as the region with the least sales.  
The same goes with the percent difference column.  
Users must do mental math and imagine bars of dif-  
ferent lengths. Compare this with Figure 10.5, where  
users don’t have to work nearly has hard to really  
understand the difference in magnitude.  
ashboard esigner Commentary  
teve\: The reason I wanted to include this example  
was that I have seen so many companies struggle  
to show YoY performance. The chart in Figure 10.10  
typifies their efforts.  
I admit that I may have left some important con-  
siderations out of the scenario. For example, if this  
were a desktop dashboard, I would almost certainly  
show the sales details on it.  
F 10.11 toward a goal.  
An early attempt to compare current-year YTD sales and prior-year YTD sales along with progress Author Commentary 127  
And suppose, in addition to showing performance  
this year versus performance last year, I wanted to  
also show a goal for each region. Sure, we want to  
have better sales this year than last year, but we  
don’t just want it to be better; we want it to be at  
least 20 percent better in each region. How can  
we show that too?  
Figure 10.11 is a very early iteration of such a dash-  
board where I present a bar-in-bar chart showing  
current-year versus prior-year sales and a reference  
line showing a goal.  
Although it is a good first effort, this chart is nowhere  
near ready to go into production. Between the bar-  
in-bar chart and the reference line, there’s a lot for  
the user to parse. And I can’t tell if the blue and  
orange bars showing percentage difference com-  
pare current progress with last year or with the goal.  
I also placed the trend lines to the right of the bar  
chart in an attempt to make it easy to see trends for  
each region. The problem here is that the height  
for each row restricts the ability to see all but the  
most obvious gaps.  
If I had a client who needed all this functionality, I  
would revisit this approach, but for the particular  
scenario I established, I think the simpler, mobile-  
friendly dashboard does the job.  
uthor Commentary  
Which Chart to Choose?  
NDY\: When tracking YoY performance, you often  
have to consider two options\:  
Do you visualize both years’ actual sales on top of  
each other?  
F 10.12 A version of the dashboard showing the  
YoY difference rather than cumulative sales. Note that  
each axis in the area chart is independent. 128 Chapter 10 Showing Year-to-ate and Year-over-Year at the Same Time  
F 10.13 Two approaches to showing YoY sales for Katonah.  
Do you visualize the actual difference itself?  
Both methods have pros and cons. In this case, Steve  
chose the former. In his example, you see the actual  
number represented on the line. You can see whether  
the gap is large or small between the years, but it’s  
not easy to visually measure the gap precisely.  
That got me thinking\: What does this look  
like if we visualize the actual difference itself?  
\(See Figure 10.12.\)  
Now we see the difference with absolute clar-  
ity. Remember that problem we have in Katonah  
and Croton? You can see just how bad that is. The  
YoY differences have gotten worse in almost all  
months this year. The most recent month has seen  
an improvement, but there is still some way to go  
to achieve the goal.  
In Figure 10.13, you can compare the different  
approaches. If knowing the exact YoY difference is  
most important, I recommend using the approach  
on the left. The downside of this approach is that  
you can no longer see the actual cumulative sales.  
That’s a reason to go with the approach on the right.  
Could you also build a dashboard that visualizes  
both actuals and the difference? You could, but  
then you begin to complicate the dashboard, which  
could mean the insight is lost and, ultimately, peo-  
ple don’t use it, because it’s not simple enough.  
One compromise would be to have a switch that  
allows the person interacting to toggle back and  
forth between the two views. \(See Figure 10.14.\)  
F 10.14 A simple switch at the top of the dashboard  
allows users to toggle back and forth between the  
two views.  
Bars or  ables  
Steve rightly compares the efficiency of bar charts  
and tables in Figures 10.5 and 10.10. Bar charts with  
reference lines are without doubt a more efficient way to accurately compare values in different  
categories. However, I will put forward a defense  
of tables, lest you think we’re advocating you never  
put a table on your dashboard.  
If the purpose is to compare many values at a  
glance then a chart trumps a table all the time.  
Author Commentary 129  
However, if you need to look up exact values and  
fast comparison is not the primary task, then a table  
or highlight table might be best. Our visual system  
is amazing, which is why we visualize data, but do  
be mindful that there are circumstances where it  
is more important to know the exact number than  
anything else. Chapter 11  
# Premier League Player  
# Performance Metrics  
A player summary from an English Premier League Club.  
Dashboard Designer\: Andy Kirk \(visualisingdata.com\)  
Organization\: An English Premier League club  
Note the data in this example is genuine game data for an anonymous player in the English Premier League in the 2015–2016  
season. Andy Singleton is not a real player name, and this data is not from a Liverpool v. Manchester United game.  
130 131 132 Chapter 11 Premier League Player Performance Metrics  
Scenario  
Big Picture  
You play on an English Premier League soccer team.  
You played a game on Saturday and spent Sunday in  
recovery. It’s now Monday, and you’re due at the train-  
ing field at 10 a.m. for a team debrief on the match.  
How did you do? Just as you arrive, you receive your  
personal player dashboard via email to your iPhone.  
It shows your physical performance metrics for the  
match\:  
• How did you perform in the most recent game?  
• How did your performance compare to that of the  
most recent games and to the rest of the season?  
• Did your performance match the rest of the team’s?  
• How was the team’s performance relative to that  
of the rest of the season?  
Specifics  
• Players need to understand their match-day phys-  
ical performance and see several key metrics,  
including total distance run, number of sprints,  
and top speed.  
• Players need to know if their performance was  
above or below average. This helps them relate  
their performance to the coach’s desired tactics  
for the specific match.  
• To add context, players need to know how their  
individual match performance compared to their  
performance in the most recent games \(especially,  
e.g., if they are recovering from injury\). For deeper  
context, the entire season’s games are shown too.  
• Finally, each player needs to know how his per-  
formance, good or bad, was related to the team’s  
performance on match day.  
• Everyone receives the dashboard in time for arrival  
at training, encouraging data-driven conversations  
and even a little friendly rivalry.  
elated Scenarios  
• Any key performance indicator scenario could be  
applied here. The yellow dot would show the cur-  
rent state of the key performance indicator, the red  
ones could show recent periods, and the gray ones  
could show all time.  
• You want to compare current and previous values  
for any discrete item \(e.g., employees, products,  
countries, etc.\).  
• You need to track performance of individuals\: How  
do their performance metrics compare to those of  
previous periods?  
• You are in information technology, tracking the  
speed of your key overnight processes, and want  
an overview of most recent performances.  
ow People Use the ashboard  
In the first training session following a match for this  
English Premier League team, all players are required  
to arrive for breakfast at a given time. Just before  
arriving, they receive, on their phones, their personal  
copy of this dashboard. They look at the dashboard  
before they sit and chat with their teammates. As well  
as being a personal reference for their own perfor-  
mance, the dashboard also generates conversation  
at the right moment in the team’s training cycle\: when they are ready to review the most recent match. The  
timing of delivery is also engineered to be when the  
players get together\: Management encourages com-  
petitive comparisons.  
All players who played 70 minutes or more \(in a  
90-minute soccer match\) receive the dashboard. If  
they didn’t play the full 90 minutes, the metrics are  
normalized to a 90-minute scale. Metrics for players  
who played fewer than 70 minutes cannot be reli-  
ably scaled to 90 minutes; thus, they do not receive  
a dashboard for the match.  
The dashboard shows each player how he performed  
across 11 key game metrics. The 11 metrics relate to  
running distances and speeds. Figure 11.1 shows the  
detail for the first metric, total distance run.  
Great attention has been applied to the scales for  
the measures. They all display varying measures, with  
very different magnitudes. For example, total dis-  
tance is typically many kilometers, but high-intensity  
run distance is less than one kilometer. All scales are  
drawn to a normal distribution, not a linear scale. A  
dot on the extreme right or left is a truly exceptional  
Why This Works 133  
performance. Players have been taught to understand  
that the absolute position isn’t the most important.  
Using a normal distribution means all the metrics can  
be compared with each other.  
Data is only one part of an organization’s decision-  
making structure, especially in professional sports.  
Players talk through the dashboards with their  
coaches. Coaches and players work to add context  
to the data. For example, a player might be recover-  
ing from injury. If that’s the case, he can look at this  
match and the previous five to see if he is progress-  
ing as expected. Another example is if a player has a  
specific tactical objective in a given game. Perhaps he  
was tasked with marking a particularly fast and agile  
opponent. In that case, some of the player’s statistics  
might be skewed above or below average, but in a  
way that was expected.  
Why his Works  
ood Use of Color  
Color is used very cleverly in the dashboard, as shown  
in Figure 11.2. Yellow represents the most recent game  
and is used in the game name, date, dots representing  
F 11.1 Detail showing the total distance metric for the player dashboard. The yellow dot represents the  
player’s performance in the match. Red dots show the five previous matches. Gray dots show all other matches  
during the season. Match Total shows the sum for that metric. Player Rank\: This was the player’s 14th highest  
distance out of 17 matches he played this season. Team Rank\: The whole team distance was also the third highest for  
the 21 matches played so far this season. 134 Chapter 11 Premier League Player Performance Metrics  
F 11.2 Each color is bold and clear. Text also explains what each color represents.  
most recent performance, and relevant stats on the  
right. Red represents the previous five matches  
and is deliberately slightly less vibrant than the yel-  
low. The gray dots are visible but relegated somewhat  
into the background to reflect their relative role in this  
display. Green represents the team performance. The  
color palette is very basic but strong.  
The dashboard does use red and green, which can  
be a problem for readers with color vision deficiency.  
On this dashboard, this problem is solved by double  
encoding all information as follows\:  
• The latest match is represented by a larger circle  
than the others.  
• The previous five matches are midsize circles.  
• The green “Team Rank” is differentiated by the  
column header and position.  
Over time, as the dashboards become familiar, the  
colors enable fast recognition of the salient facts.  
Scale rientation  
All measures are oriented so that dots on the right  
represent higher-than-average performance. As an  
example, Figure 11.3 shows top speed and recovery  
time. Top speed should be as high as possible,  
whereas recovery time should be as low as possible.  
In order to maintain consistency, all measures are ori-  
ented so that marks on the right are better.  
ormalized Scales  
The scales don’t show a linear numerical scale. If they  
did, it would not be easy to compare relative perfor-  
mance of top speed and total distance, as one is a  
speed and the other is a distance. Once the scales  
are normalized, it is possible to compare the metrics  
in terms of their difference from an average perfor-  
mance. \(See also Chapter 7.\)  
Minimal Use of umbers  
The only numbers shown are those for the most recent  
match. Other than that, the information is kept to a  
minimum so as not to overload players and coaches.  
Showing fewer numbers helps focus on the key goal  
for the dashboard\: How did you perform in the last  
match, and how did that compare to other matches?  
Social Interaction Promoted  
Introducing data into soccer players’ lives is a modern  
trend.Thedataisdelivereddirectlytotheirsmartphones  
at a time when all players come together for training. In Why This Works 135  
F 11.3 For both measures, dots on the right are better.  
this way, coaches know players have the dashboards,  
and the dashboards fit into a regular training schedule.  
This helps improve acceptance and usage.  
The potential for players to compare their perfor-  
mances with others is deliberate. Competitive peo-  
ple love to have proof points showing where they did  
well. The timing and manner of the delivery of the  
dashboards to players is designed to encourage this.  
Mobile riendly  
This dashboard is delivered to mobile devices and  
designed to be consumed on them. Its dimensions  
are optimized to a cellphone. It is not interactive. By  
having a static dashboard without interactivity, it does  
reduce the amount of information the dashboard can  
contain, but this is intentional. In a culture where data  
is being introduced slowly, a static, mobile, simple  
dashboard is a more prudent choice.  
Quick Comparisons to Individual and  eam  
The prime purpose of the dashboard is to compare  
the player to his own recent performances. Figure 11.4  
shows how this player’s sprint statistics were below  
average in the recent match. However, what hap-  
pens if it was a really bad match? What if the whole  
team played badly? Wouldn’t that affect the player’s  
results?  
F 11.4 The numbers to the right of the dot plot show that this match was the player’s tenth best performance  
out of 17 matches played. That was better than the team overall, for whom the match was the thirteenth best out of 21. 136 Chapter 11 Premier League Player Performance Metrics  
For this reason, the team rank, in green, on the  
right side of each metric, helps put a good or bad  
result into context. If both the player and team  
ranks are low, it indicates that the entire team had  
a bad week, suggesting that the result isn’t as bad  
for the player as first thought.  
The comparison to the player’s other performances  
is the key objective of this dashboard. You might  
think that the comparison to the rest of the team is  
as important. Maybe that’s right for some dashboards,  
but in this one, the objective is to benchmark the  
player against himself. The team rank is there not to  
let him see if he outperformed his teammates but if  
his personal performance might have been affected  
by overall team performance.  
In soccer, comparing oneself too much to other play-  
ers is not informative. Players in different positions  
have different roles and face different physical chal-  
lenges and expectations. Additionally, perhaps a  
player had different tactical objectives that week.  
uthor Commentary  
NDY\: A dashboard like this is not just about the  
data. It’s about culture change. Many organiza-  
tions choose to bring data into their culture slowly.  
Coaches’ opinions about data in professional sports  
are divided. Some coaches think that sports such  
as soccer are so fluid it is not possible to quantify  
performances accurately. Harry Redknapp, one of  
the most successful English Premier League man-  
agers of all time, was famously antistatistics. After  
a losing game, he once said to his analyst, “I’ll  
tell you what, next week, why don’t we get your  
computer to play against their computer and see  
who wins?” \(“How Computer Analysts Took Over  
at the Britain’s Top Football Clubs,” The Guardian,  
March 9, 2014. https\://www.theguardian.com/foot-  
ball/2014/mar/09/premier-league-football-clubs-  
computer-analysts-managers-data-winning\)  
Other clubs use data much more deeply, but  
nobody claims data should replace intuition and  
experience. The club is carefully introducing this  
example dashboard to help data inform play-  
ers and coaches. It is a coaching aid, designed  
to inform discussion between players and coach-  
ing staff. Its simplicity, mobile-friendly design, and  
delivery timing all foster sharing and discussion of  
the data.  
The simplicity of the design is intentional. One  
thing the analysts wanted to avoid was alienating  
players and coaches by providing too much too  
soon. Many extra things could have been added  
to this dashboard, such as\:  
• Interactivity, with tool tips for each dot, adding  
more context.  
• Labeled dots showing actual values, not just  
position on a normalized scale.  
• Buttons to switch from normalized to actual  
scale values to allow players to see more about  
their data.  
• The result of the match.  
Had the team introduced too much too soon, there  
was every chance the players and coaches would  
be overwhelmed with the volume of data. Instead,  
it’s possible to educate players and coaches slowly  
and steadily, letting each new piece of information  
embed gradually. Any organization bringing data into its culture for  
the first time could adopt this approach. Analysts  
often get excited about all the data they have and  
throw everything into their output in one go. Their  
unsuspecting colleagues in other parts of the busi-  
ness can become overwhelmed and, instead of  
embracing the new data-informed culture, retreat  
back into their Excel spreadsheets.  
Remember\: All dashboards have to compromise  
somewhere, often by omission. If you’re starting  
off, it’s better to start slowly and introduce com-  
plexity very gradually.  
Author Commentary 137  
Jeff\: We discuss the use of the traffic light colors in  
Part III\: Succeeding in the Real World, and this is  
a good example of that color palette in action.  
This dashboard shows well in simulation for color  
vision deficiency because the dots in the dot plot  
are not red and green. The bright yellow dots  
show up very well in most cases, making it easy  
to tell the yellow dots from the red. Also, the dots  
are sized differently\: The red dots are a little bit  
bigger than the gray dots, and the yellow are just  
a bit bigger than red. As seen in Figure 11.5, this  
helps distinguish the dots from each other. \(For  
more on traffic light colors, see Chapter 33.\)  
F 11.5 Portion of the dashboard as seen by people with color vision deficiency.  
Source\: Made using the Chromatic Vision Simulator at http\://asada.tukusi.ne.jp/webCVS/ Chapter 12  
BS 6 ations Championship  
# Match Performance Analysis  
Match summary for France versus Italy in the 2016 RBS 6 Nations Championship.  
Dashboard Designer\: Charlie Archer  
Organization\: Javelin Group & Accenture. Data provided by Opta.  
138 139 140 Chapter 12 Scenario  
Big Picture  
The RBS 6 Nations Championship is an annual  
international rugby union competition among six  
European nations—England, Wales, Scotland, Ire-  
land, France, and Italy—battling to be crowned  
champion. Data can reveal the story of the game,  
and this dashboard enables you to do this by look-  
ing back at the 16 years of the 6 Nations Cham-  
pionship. The score tracker shows how close the  
game was and how many times the lead changed  
hands. The action areas section lets you choose  
an event category, such as tackles, and see where  
such events took place on the pitch. In essence, if  
you like rugby and data, this is a dashboard you will  
enjoy exploring.  
Specifics  
• What was the final score in any given RBS 6 Nations  
game?  
• How did the scoring progress?  
• Where did most of the action take place on the  
pitch?  
elated Scenarios  
• You want to create a sports match tracker for any  
sport with two teams and frequent scoring oppor-  
tunities. For example, basketball and football are  
great candidates, whereas soccer has too few goals  
to build an effective tracker.  
• You need to create a political dashboard where  
there is a need to track, say, delegate counts  
or seats won in order to identify government  
majorities.  
BS 6 ations Championship Match Performance Analysis  
• You need to create a sales dashboard where the  
cumulative quarterly sales are important. \(See  
Chapter 5.\)  
ow People Use the ashboard  
During the championship, each of the six nations  
plays each other once. This dashboard, created by  
Accenture, Official Technology Partner of the RBS 6  
Nations, has play-by-play data for all games since  
2000\. Users choose the game they want to see using  
the filters on the left. The match details \(i.e., score,  
date, and venue\) are shown next the filters. Let’s look  
at the dramatic France versus Italy game from 2016  
shown in Figure 12.1.  
The line and bar charts are where the dashboard  
really reveals the story. \(See Figure 12.2.\) The x-axis  
shows minutes played in the match. The line shows  
the score for each team throughout the match. Each  
score is labeled to show how the points were scored.  
\(In rugby, that’s by a try, conversion, kick, or penalty.\)  
Every time the two lines cross represents a time the  
lead switched.  
F 12.1 Game selection and details. ow People se the ashboard 141  
F 12.2 The main section shows how the score progressed through the match \(top\) and the meters gained by  
each team during each minute of the match \(bottom\).  
As you can see, the 2016 France versus Italy match  
was a dramatic encounter. The lead changed eight  
times, with France, the prematch favorite, just beating  
Italy at the end.  
see that Italy spent most of the time just ahead of  
the halfway line \(the lower, lighter blue, histogram  
in Figure 12.3\).  
The final section allows the user to explore the  
details of the game. In Figure 12.3, turnovers con-  
ceded has been selected. The user could also  
select tackles, scrums, passes, and others. The  
pitch map shows where each action took place.  
Play direction is from left to right for both teams;  
their defensive end zone is at the left side of the  
pitch map.  
The histograms above and below the pitch map  
show the amount of time each team had posses-  
sion in that part of the pitch. In this game, you can  
F 12.3 The third section shows game action  
details. 142 Chapter 12 BS 6 ations Championship Match Performance Analysis  
Why his Works  
unning  otals Create an ngaging Story  
In the previous section, we looked at one of the excit-  
ing RBS 6 Nation 2016 matches. The running total  
scores tell the thrilling story of that dramatic match.  
These lines work well for other types of matches, such  
as when one team dominates another or when one  
team stages a dramatic comeback.  
Figures 12.4 and 12.5 illustrate very different games  
with clear stories revealed by the cumulative totals.  
Imagine the drama, joy, or dismay felt by fans of these  
games as they unfolded.  
F 12.4 scoring after minute 25.  
Ireland \(green\) versus England \(white\) in 2003 was a 42–6 win for England, with Ireland not  
F 12.5 Scotland \(dark blue\) versus Italy \(light blue\) in 2015. Scotland led the entire game until Italy  
crept back and won the match with a last-minute try and conversion. Why This Works 143  
F 12.6 Italy match.  
Pitch Map Shows etails on emand  
The pitch map is a good way to show spatial details  
in a data-driven way. Using a background image, each  
action is mapped onto the pitch. In Figure 12.6, we’re  
seeing missed tackles during the 2015 Scotland ver-  
sus Italy game. The large circles to the right of the  
pitch map clearly show that Italy missed the most.  
The labels give us the values. \(Italy missed 20 and  
Scotland only 8.\)  
The histograms above and below the maps show  
where each team had possession position are power-  
ful too. Let’s look at the 2008 Ireland versus Wales  
game, which Wales won. The results are shown in  
Figure 12.7. In this case, the passes by each team are  
shown on the pitch map and histograms. Wales’ data  
Missed tackles during the 2015 Scotland versus  
\(the red circles and bars\) clearly show that they spent  
most of the match in Ireland’s half.  
ppropriate Use of onts  
Many different sizes of fonts are used, which helps  
guide readers where they need to look. The biggest  
font is the team name and score. That draws readers’  
eyes in to what is, ultimately, the most important pair  
of numbers in the data.  
In contrast, the cumulative score lines are annotated  
with the score type \(e.g., try, conversion, penalty,  
etc.\) but in a much smaller font. In this case, the font  
doesn’t draw much attention to itself. It is there if  
readers want to see it, but if users just want to follow  
the lines, the font doesn’t get in the way.  
F 12.7 Ireland versus Wales, 2008\: a close match with  
Wales in near-constant attack. 144 Chapter 12 BS 6 ations Championship Match Performance Analysis  
uthor Commentary  
NDY\: Lots of people enjoy sports, and we happily  
digest pages and pages of newspapers and blogs  
reading up on analysis of the games. Showing the  
story of a game through dashboards is very power-  
ful. You can easily see comebacks, huge victories,  
or games where the lead changes multiple times.  
This is surely just as powerful as reading a report  
about the match.  
One aspect of this dashboard that is interesting is  
the choice of color. The colors were chosen to rep-  
resent each team’s national color or uniform color.  
The background color of the dashboard was cho-  
sen to match the corporate colors of RBS, the cham-  
pionship sponsors. Independently, both of these  
choices make sense, but there are two major issues.  
The first is the potential to confuse viewers with  
color vision deficiency. In Figure 12.7, we compared  
scores and possession of Ireland \(green\) and Wales  
\(red\). In this case, the color choices are not friendly  
for those with color vision deficiency.  
The second issue is that dark colors against a dark  
background are harder to read because of the low  
contrast. Figure 12.6 is an example where the dark  
blue of Scotland’s score is hard to read against the  
dark blue background.  
A dashboard such as this is a marketing tool as  
well as an analytics tool, and thus it’s understand-  
able why these decisions were made. In a business  
environment, our goal is maximum understanding  
in minimal time. For that reason, you should always  
choose background colors that are in high con-  
trast to the data. It’s why the vast majority of  
dashboards in this book have white or off-white  
backgrounds. Chapter 13  
# Web Analytics  
Web Analytics dashboard.  
Dashboard Designer\: Jeffrey Shaffer  
Organization\: Data Plus Science, LLC  
146 147 148 Chapter 13 Web Analytics  
Scenario  
Big Picture  
You host a blog or website, and you need a dashboard  
to track various metrics. The dashboard will connect  
to Google Analytics or another database that updates  
the data on the dashboard.  
Specifics  
• You need to track visitors to your blog or website.  
You need to see these visitors over some period  
of time.  
• You want to see total pageviews \(a common web-  
site metric\), total visitors, and number of blog posts  
during the period.  
• You want to see the blog posts or webpages that  
have the highest number of pageviews.  
• You want to see visitors’ geographic location.  
• You want to see the distribution of the visitors by  
weekday.  
elated Scenarios  
• You are a publisher tracking book sales, the num-  
ber of books sold, the top books being sold, and  
the locations of the sales.  
• You need to track customer acquisitions for various  
product lines, showing total acquisitions over time  
and the top product line categories.  
• You need to track subscribers to your service.  
You need to track something over time, on an  
aggregated basis, showing the top n and the geo-  
graphic location.  
ow People Use the ashboard  
The user will review this dashboard at some regular  
interval, such as monthly, quarterly, or as needed on  
demand. The dashboard gives an overview of the key  
statistics that the user tracks. In the field of website  
analytics, pageviews is a common metric. This is the  
number of times a web page is viewed. The dash-  
board shows pageviews in a number of ways as well  
as a few additional metrics.  
At the top of the dashboard in Figure 13.1, three high-  
level metrics are shown\: the total pageviews for the  
time period, which is noted at the top of the dash-  
board, the total number of visitors, and the number  
of blog posts. A bar chart shows the daily pageviews  
over time along with a trend line to help visualize the  
trend for that period. A histogram is used to show the  
pageviews by the day of week.  
The histogram in Figure 13.2 does not have an axis  
label or data labels. It’s used in a similar manner  
as a sparkbar, simply to visualize the overall distri-  
bution for the days of the week. Data labels could  
easily be added, but in this case there is no need  
to see that one day is 31,966 compared to another  
day. Also, there are tool tips built in, so users can  
hover over any point, including the histogram, and  
see the data if they choose to. \(See Figure 13.2.\) The  
big takeaway\: There are far more pageviews during  
the workweek with Tuesdays and Thursdays getting  
the most views. F 13.1 a histogram to show the pageviews by week day.  
Key metrics are displayed on the left side. A bar chart shows the daily pageviews over time along with  
F 13.2 highlighted.  
Tool tips are used throughout the visualization to show the details of the data for any point selected or 150 Chapter 13 Web Analytics  
F 13.3 Bar chart showing total pageviews for each blog post.  
The bar chart in Figure 13.3 is used to show the top  
blog posts by pageviews. Depending on what users  
would like see, this could show the top 5 or top 10  
or even be interactive to allow users to specify the  
top n in the view. You could also add a dashboard  
action that allows users to click a bar and see a list of  
all blog posts and/or web pages associated with the  
bar. Clicking an item from that list would then jump  
to an individual blog post or web page.  
The map in Figure 13.4 shows the location of the users  
across the world. The styling of the map is very sim-  
ple. There are no country or city labels, only points  
on the world map. The mapping controls allow users  
to zoom, pan, and even search for cities.  
ank the bars  
anking bar charts in descending or  
ascending order provides additional  
context to the data and makes it easier to  
compare values.  
F 13.4 on a portion of the world.  
Map of visitors to the website zoomed in Why his Works  
 ew Key Metrics racked in a Simple Way  
This dashboard has only a few key metrics, pageviews  
being the primary metric. The line chart, histogram,  
and bar chart all show variations of this metric; the  
bar chart with trendline shows pageviews over time,  
the histogram shows pageviews by day, and the bar  
chart shows pageviews by top blog posts. The num-  
ber of users and number of blog posts are added  
in text. The only other item on the dashboard is the  
location of the users on the map.  
Simple Use of Color  
Other than white text, a single color is used on this  
dashboard for all of the charts. The color is not used  
to encode data in any way. Any color combination  
Why This Works 151  
could work—for example, using corporate colors or  
team colors. This dashboard would work equally well  
if all color were removed, such as using a white back-  
ground with gray or black as shown in Figure 13.5.  
ood Chart  ypes for the arious  
Comparisons  
The primary method of encoding data on this dash-  
board is the preattentive attribute of length \(i.e., the  
length or height of the bars\). Except for the trend  
line and map \(where position is used\), the length/  
height of the bar is used to encode all of the data  
on this dashboard. This makes the comparisons very  
easy and precise. In Figure 13.6, users can quickly  
see that there are far fewer pageviews on weekends  
than there are during the workweek. In fact, even  
when the values are close, the small differences can  
F 13.5 An example of what this dashboard might look like without using color. 152 Chapter 13 Web Analytics  
F 13.6 Histogram of pageviews by week. Notice the small differences between weekdays.  
still be seen; for example, pageviews on Monday are  
slightly lower than pageviews on Tuesday, Wednes-  
day, and Thursday.  
Clean, Uncluttered esign  
As mentioned previously, only a few charts are dis-  
played. If you examine those charts closely, you  
will see that they are not heavily labeled. The his-  
togram in Figure 13.6 does not have a y-axis, and  
there are no data labels. The bar chart, as shown  
in Figure 13.1, does not have axis labels, only  
data labels, and pageviews over time has a single  
label on the y-axis indicating a gridline for 1,000  
pageviews. Additional data is available via the tool  
tips, but these choices give the dashboard a very  
clean and simple design.  
uthor Commentary  
teve\: I loved exploring this dashboard and found it  
clean, clear, and intuitive. And while I tend to prefer  
light backgrounds, I had no trouble reading text  
and decoding the charts.  
The dashboard was so inviting that I found myself  
wanting to know more about the site’s traffic. The  
maps made me want to see how much traffic came  
from inside the United States versus outside. I  
would have liked to see the addition of a bar chart  
like the one shown in Figure 13.7.  
This also piqued my curiosity to see pageviews by  
city. Although the treemap in Figure 13.8 is a bit of  
overkill, it reveals that the most views come from  
London and not inside the United States.  
In addition, the bar chart in Figure 13.3 made me  
curious about the content that was driving those  
pageviews. In a future version of the dashboard, I  
would like a way to see all the posts related to the  
topic that interested me and have a way to jump  
directly to those posts. F 13.7 Bar chart showing pageviews by country. F 13.8 A treemap showing cities within countries \(the white borders separate the countries\). Here we see that  
London was responsible for more pageviews than any other city. Chapter 14  
Patient istory Analysis of  
ecent ospital Admissions  
Planning tool for unscheduled day care at the NHS Southern Health Trust.  
Dashboard designer\: Simon Beaumont  
Organization\: Southern Health NHS Foundation Trust, England  
156 157 158 Chapter 14 Patient istory Analysis of ecent ospital Admissions  
Scenario  
Big Picture  
You are a clinician working at a health trust with  
many hospitals. Your role is to provide individu-  
alized health care to patients in your region. One  
aspect of this is responding to patients’ hospital  
admissions. Your job is to help clinicians under-  
stand patient histories and use that information to  
create a plan to get the patient home as quickly  
as possible.  
This dashboard shows the activity of individuals  
admitted to the hospital in the last 24 hours. Patients’  
recent medical histories help explain the reasons for  
their admission to the hospital. Along with personal  
knowledge of the patients, this information allows  
you to plan a successful intervention.  
Specifics  
You want to know which patients were admitted to  
the hospital in the last day and in the last month. Of  
those who have been admitted, what health care  
visits have they had in the last five months?  
elated Scenarios  
The presentation used in this scenario can translate  
to any other scenario in which it’s important to see  
patterns in individual events rather than aggregated  
data. Such scenarios include, for example\:  
• Schools that want to track truancy for individual  
students.  
• Sales organizations that want to track customer  
activity on their websites in order to adapt their  
sales strategy to the individual.  
• Database administrators who need to under-  
stand bottlenecks and downtime in company  
infrastructure.  
ow People Use the ashboard  
Each day, clinicians meet to plan their work. The dash-  
board is opened and filtered to patients relevant to the  
group. The same dashboard is used across the health  
trust, covering multiple areas, hospitals, and teams.  
As shown in Figure 14.1, there are two main areas on  
the dashboard.  
F 14.1 The first section shows admissions in the last day. In this example, there were 14. The top area shows data about patients admitted to  
hospital in the last 24 hours. The number of patients  
is displayed in the green callout on the left. In this  
example, 14 patients were admitted. Eight are shown  
on the screen, and the rest can be seen by scrolling.  
Each dot represents a visit with a health care worker,  
a hospital admission, or a discharge. The patterns of  
the dots tell a rich story about each patient, which  
we detail later.  
Clinicians can look at the recent pattern for each  
patient, along with their personal knowledge of each  
case, to work out a suitable plan for each patient.  
Each dot has a hyperlink directly to the detailed  
record for that intervention.  
Each row in the figure tells a detailed history about a  
real person. Over time, this story becomes easier and  
faster to read as clincians learn to decode the dots  
and the colors. Let’s look at three different patient  
stories our dashboard tells us.  
1\. Patient 64 has had almost continuous visits from  
Adults Physical Health \(orange/peach dots\) ser-  
vices for the duration of the time shown on this  
view. The only gap was a period spent in the hos-  
pital \(the time between the first red dot and the  
blue dot showing admission and discharge\). What  
this shows is that intensive home care has largely  
succeeded in giving this patient time at home,  
providing him or her with valuable independence.  
Despite these interventions, this patient still has  
been admitted to the hospital.  
2\. Patient 103 has had fewer interventions, but the  
recent admission is the fourth time in the hos-  
pital in the past five months. \(Each red dot rep-  
resents a hospital admission.\) The visits by the  
Why This Works 159  
Adults Physical Health care team haven’t been as  
frequent as for Patient 64, but they have helped  
the patient stay at home for significant amounts  
of time.  
3\. Patient 191 has just been readmitted after a recent  
discharge. Prior to the first visit, there had been  
regular visits by the Adults Physical Health ser-  
vice, and during the time Patient 191 was in the  
hospital, there was also a need for the Older Per-  
sons Mental Health team to spend time with him  
or her \(the gray dots\).  
The lower section, as seen in Figure 14.2, shows  
patients who have been in the hospital and were  
admitted more than 24 hours ago.  
Clinicians use this dashboard to discuss the history  
of each patient in their daily meetings.  
Why his Works  
Complete ata, ot ggregated ata  
A lot of the dashboards in this book focus on key per-  
formance indicators and aggregated metrics. This  
is good when looking at the higher levels of a busi-  
ness, but consider what the data in health care is all  
about\: each record is a patient, a patient who might  
be struggling. Working out the average symptoms for  
all patients might provide a picture for those govern-  
ing the health care provider, but the overall average  
is of no use to the provider trying to help an individ-  
ual patient. Each patient is different, and each needs  
individualized plans.  
This doesn’t mean a single dashboard view is needed  
for every single patient. Instead, this dashboard provides  
a holistic view of the history of all the patients under 160 Chapter 14 Patient istory Analysis of ecent ospital Admissions  
F 14.2 Patients admitted more than one day ago.  
the care of the team. With one screen all the patients’  
details can been seen and discussed.  
Stories about eal People  old inearly  
These are real patients. Their stories cannot be  
aggregated into averages. Looking after their  
health requires being able to see the complete  
narrative, which this dot plot enables. The dot plot  
in Figure 14.2 showing each interaction along a  
horizontal line makes it easy to follow this history  
visually.  
Single-umber Callouts  
How many new patients were admitted in the last  
24 hours? How many patients who have been admit-  
ted in the last 30 days are still in the hospital? Both  
of these questions are important to answer. The  
answers are the biggest and most obvious fea-  
tures of the dashboard, as seen in Figure 14.3.  
The answers are 14 and 124, respectively, shown in  
large numbers on the left-hand side of each sec-  
tion’s dot plot.  
F 14.3 as possible.  
Key numbers are made as large and visible ashboard esigner Commentary 161  
F 14.4 top of the dashboard.  
The filters need to be reset each time the dashboard is opened. Therefore, they are positioned at the  
ilters at the  op  
This single dashboard is used by multiple teams, so  
they need filters to get to the right data quickly. There-  
fore, for this dashboard the filters are at the top, where  
people are most likely to look first \(see Figure 14.4.\).  
In an ideal situation, the filters should be retained so  
that each time the viewer opens the dashboard, the  
filters are already set. If that’s the case, and the filters  
no longer need to be reset on each view, it would be  
possible to move them to a less prominent position,  
such as the right-hand side.  
We discuss the positioning of filters at length in the  
Author Commentary in Chapter 5.  
ashboard esigner Commentary  
MN BMNT\: In the health care field, data  
is often used only to support and measure targets  
and to facilitate conversations around only the tar-  
gets. This data normally is summarized using the  
traditional red, amber, green rating. The problem  
with this approach is that it misses the purpose of  
health care\: to support individual patients to lead  
healthy, independent, and fulfilling lives. By aggre-  
gating numbers, we lose this connection with the  
people we are here to serve, our patients. That is  
not to say that we do not measure the success of  
initiatives\: We do that on other, higher-level dash-  
boards. But our health care providers, for their day-  
to-day work, looking after patients, need detail,  
not aggregates.  
Prior to this dashboard being implemented, there  
was simply no way for clinicians to see all patient  
history data. When a patient was admitted, the  
clinicians would receive a text message on their  
phone. In order to see the case history, clinicians  
had to click a link in the text message or copy it  
into a browser. There was no way to see the entire  
history in one view; instead, clinicians needed to  
click through every past appointment. This was  
inconvenient and disruptive. The end result was  
that it was simply too cumbersome a process for  
clinicians to follow.  
This dashboard has been revolutionary. Its purpose  
is the number-one priority of all clinicians\: to maxi-  
mize the effectiveness of the care they provide to  
their patients. The data directly supports clinicians  
in their working day. It complements their clini-  
cal knowledge with automated, timely information  
from across the health economy. Instead of data  
being seen as an aggregated hindrance, it is seen  
as an asset that directly supports the delivery of  
personalized care. 162 Chapter 14 Patient istory Analysis of ecent ospital Admissions  
uthor Commentary  
NDY\: So many dashboards are about aggregating  
an organization’s activity into a small set of num-  
bers. When those numbers represent people, we  
get into uncomfortable areas. There is no such  
thing as an “average” person, whether they are  
patients, students, or employees; someone in a  
class at school might have an average IQ but they  
won’t be average in other categories. This is not  
to say that hospitals such as Simon’s shouldn’t also  
look at aggregated data; they should. The lesson  
from this dashboard is that data should be viewed  
at different levels of detail. Chapter 15  
ospitality ashboard for  
otel Management  
Hospitality dashboard.  
Source\: Images courtesy of Dundas Data Visualization, Inc. \(www.dundas.com\)  
Author\: David Voung  
Organization\: Dundas Data Visualization  
Link\: https\://samples.dundas.com/Dashboard/9a7c2299-e20b-4e78-b257-0a69396996b9?e=false&vo=viewonly  
164 165 166 Chapter 15 ospitality ashboard for otel Management  
Scenario  
Big Picture  
You are a manager for a large chain of hotels. You  
need a dashboard to monitor some key metrics,  
including how revenue did last week in comparison  
to previous weeks. You need to see if the revenue is  
being influenced by the current daily rate promotions  
and if the promotions are aligned to occupancy. There  
are multiple locations around the world, so you also  
need to know which hotels are the best and worst  
performers within their respective region. You also  
need the ability to drill further into the details for any  
specific weeks as necessary.  
Specifics  
• You are tasked with showing the revenue per avail-  
able room \(RevPAR\) for your hotels and in compari-  
son to a peer group.  
• You need to organize hotels by regions and com-  
pare those to hotels within the same region.  
• You need to show data over time, showing a  
selected number of weeks in the past.  
• You want to see the spread for available rooms  
from the lowest-priced room and the highest-  
priced room.  
• You need to understand how quickly the business  
is reacting to these prices and how much alignment  
exists between the different locations.  
• You need to provide an on-demand \(interac-  
tive\) breakdown to the daily rate by segment and  
channel.  
• You need to provide on-demand \(interactive\)  
access to a specific hotel.  
elated Scenarios  
• You manage airline reservations and need to  
gauge the impact of changing ticket prices on  
occupancy.  
• You need to analyze movie theater occupancy over  
time and in different locations.  
• You need to analyze retail customer rate and rev-  
enue for a retail store and compare it with all other  
stores and with stores in certain regions.  
ow People Use the ashboard  
The primary view of this dashboard focuses on the  
current time period and looking back in weeks for  
some selected period of time. In the top chart \(see  
Figure 15.1\), the x-axis of the line chart shows the  
range of weeks that has been selected. This allows the  
user to gauge the overall trend as well as the spread  
of revenue per room within that week.  
The spread of revenue per available room \(the blue  
band\) shows the lowest-priced and highest-priced  
rooms for that week, and the black line in the middle  
is the average. \(See Figure 15.2.\)  
The user can hover over the RevPAR trend and see the  
highlighted week’s statistics; for example, Week 13 is  
highlighted, as indicated by the light blue color on  
the line chart in Figure 15.3. F 15.1 Highlighting week 13 in the top chart updates the key metrics on the other charts.  
F 15.3 The highlighted week is shown as a  
light blue band. The data in the text boxes will update  
showing the details for the highlighted week.  
F 15.2 The spread from the lowest-priced to  
the highest-priced available room is shown by the blue  
band. The black line shows the average. 168 Chapter 15 ospitality ashboard for otel Management  
F 15.4 The slider control \(1\) for the top graph.  
The blue-shaded window can be resized to select a  
shorter or longer time range. It can also be panned  
from the left to right \(marked with red arrows\) to move  
the time range from older weeks to more recent  
weeks. \(See Figure 15.4.\)  
RevPAR values are indexed so all locations within a  
region can be compared to each other regardless of  
the different countries’ currencies and standard rates.  
Regions can be selected easily by clicking on one of  
the four regional map icons in Figure 15.5.  
Once a region is selected, the dashboard updates  
with that region’s metrics. The map shows color dots  
for hotels that are above the index and below the  
index. The hotels in the selected region use the  
same color scheme but use triangles to show them  
as selected. \(See Figure 15.6.\)  
F 15.5 Region selector showing Asia selected.  
F 15.6 Map showing the selected region with  
triangles. All points are colored as above or below index. Why This Works 169  
F 15.7 Bar charts on the bottom of the dashboard display a breakdown by hotel. The blue bars show the  
RevPAR per hotel. The black line is the Group RevPAR.  
At the bottom of the dashboard, a diverging bar chart  
is used to show RevPAR variance from an index of 100.  
There is also a bar chart with reference lines showing  
the hotel location’s RevPAR compared to the Group  
RevPAR. \(See Figure 15.7.\)  
The map in Figure 15.6 uses the preattentive attribute  
of color to distinguish between the hotels above and  
below the index. Another preattentive attribute, shape,  
is used to distinguish the selected regions \(triangle\) from  
the nonselected regions \(dots\). Notice the clean design  
of the map and bar charts and the simple use of color.  
Why his Works  
Interactivity hat Preserves Context  
The dashboard is highly interactive. Nearly every  
object on the dashboard acts as a highlight or a filter  
or presents details on demand. When drilling down  
into more detailed data, the visualizations remain con-  
nected to the main dashboard. The portions of the  
dashboard that are used as selectors are still in view  
and actionable. This allows the user to immediately  
change the selection to update those details while  
still in the details window.  
For example, in Figure 15.8, when the user selects a  
city \(in this case, Seoul\) \(1\), details for Seoul will show  
in a new window \(2\). If the user clicks a different bar  
on the bar chart in the main dashboard—for example,  
Hong Kong—then the details window will update to  
reflect this new selection \(and update using animated  
transitions\). Because all these choices can be made  
without closing the details window, fast selections can  
be made from one hotel to another, providing quick  
and easy comparisons. F 15.8 Wholesale in a small multiple-line chart \(2\).  
Clicking on the bar charts in the breakdown section \(1\) gives a detailed view of Wholesale versus Non- Likewise, the user can select a hotel on the map and  
immediately see the details on demand for that loca-  
tion. Without closing that window, the user can select  
another city, and those details will update. This allows  
Why This Works 171  
the user to compare these metrics by location with-  
out having to close and open the window or navigate  
between different pages. \(See Figure 15.9.\)  
F 15.9 Clicking on the Tokyo hotel on the map \(1\) opens a detailed window for that location \(2\). Without  
closing the detail window, another city can be selected to update the view. 172 Chapter 15 ospitality ashboard for otel Management  
As the user adjusts the size of the slider or moves  
the slider to adjust the time range, the dashboard is  
updating immediately, letting the user quickly see  
the different patterns in the data. When the user  
adjusts the slider and the dashboard updatess, key  
metrics are updated, showing the average daily rate  
\(ADR\) and the occupancy rate for the time period  
selected from the slider control. The user can then  
move the mouse to hover over any week in the top  
chart, and the data for that week will update in the  
other box.  
For example, in Figure 15.10, Weeks 60 to 39 are  
selected using the slider control \(1\). The dashboard  
updates, showing an average daily rate of \$70.49  
for that time period \(2\). These weeks then can be  
compared to Week 52, which is highlighted using the  
mouse \(3\). This updates the Week 52 window, show-  
ing the average for the week of \$113.72 \(4\), which is  
the highest average in the selected time period and  
which also has a very narrow range \(3\) when compared  
to the overall ADR.  
Clear ocus on Key Measures and imensions  
The dashboard shows only three measures—RevPAR,  
daily rate, and occupancy—and provides the mea-  
sures across three dimensions—week, region, and  
hotel. More dimensions and details are available as  
details on demand, but the clear focus on these met-  
rics helps the user analyze and understand the data  
without complication.  
F 15.10 Moving the slider from the left to right or resizing immediately adjusts the dashboard in a responsive  
way and allows for exploration of the data and immediate analysis. uthor Commentary  
JFF\: This dashboard is so interactive and fluid that  
it reminds me of music editing software. The selec-  
tion of the time range is very similar to how one  
would select a portion of music in a sound file to  
edit it. It allows the user to dynamically select a time  
band in the window, and the rest of the visualiza-  
tion then updates. Combined with the other inter-  
active features and the details on demand, it makes  
this dashboard very powerful. It’s fun to play with.  
I love the use of color in this dashboard as well. I  
might have kept the “below index” color on the  
map \(dark red\) the same on the bar chart \(light  
gray\) for consistency of color. Also, axis labels aren’t  
really needed on the bar charts since there are data  
Author Commentary 173  
labels, but in this case, they do help the reader see  
that one axis goes below zero and the other starts  
at zero. I typically add a zero line on bar charts,  
especially diverging bar charts, so that the com-  
mon baseline is clearly marked.  
You won’t find too many pie charts or donut charts  
in this book. In general, there are better ways to  
visualize data \(see Figure 15.9\). This topic is dis-  
cussed in depth in Chapter 34. It’s important to  
note in this particular donut chart that it is not used  
for any type of comparison. It is simply used as an  
occupancy indicator. Occupancy is bounded in this  
case, meaning it’s not possible to go over 100 per-  
cent occupancy. The donut chart simply shows a  
single number approaching 100 percent. Chapter 16  
# Sentiment Analysis\:  
Showing verall istribution  
Sentiment Analysis.  
Dashboard Designer\: Jeffrey Shaffer  
Organization\: Data Plus Science, LLC  
174 175 176 Chapter 16 Sentiment Analysis\: Showing verall istribution  
Scenario  
Big Picture  
You are a social media manager, brand manager, or  
business analyst studying consumer sentiment for  
a specific brand/company and its competitors. You  
download tweets from Twitter and examine the sen-  
timent around them, rating them using a tool such as  
Amazon’s Mechanical Turk.  
Specifics  
• You have text comments from consumers for some  
period of time. This could be tweets from Twitter,  
customer service notes, consumer review websites,  
or texts or emails from consumers.  
• You have cleaned the text and had the comments  
rated, either manually reviewed or using computer  
algorithms.  
• This sentiment is on a scale of 1 to 10, with 10  
being the best \(most positive\) and 1 being the  
worst \(negative\).  
• You want to see how this sentiment compares to  
the sentiment of your other brands or your com-  
petitor’s brands or as a company over all.  
• You have a large number of data points\: hundreds,  
thousands, or even more.  
elated Scenarios  
• You need to show reviews of product on websites,  
such as those on Amazon, Yelp, or Consumer Reports.  
• You need to show results of satisfaction surveys.  
• You need to show the results of customer feed-  
back forms.  
• You need to show movie reviews, such as the  
reviews on IMDB or Rotten Tomatoes.  
• You are a manager and need to show the results  
from performance reviews.  
• You are a professor or a teacher and you need to  
show grades for a class.  
ow People Use the ashboard  
This dashboard uses a similar technique to the dash-  
board in Chapter 3. However, in that scenario, your  
company or you specifically are one of the dots, and  
you are comparing yourself to all of the other dots.  
In this scenario, all of the dots are customers giv-  
ing feedback about you, your brand, or your com-  
pany. The comparison to other brands or companies  
comes from comparing the distribution of the dots  
across the rows or columns rather than from com-  
paring the position of one dot versus the position  
of another dot.  
The top portion \(see Figure 16.1\) shows the overall  
distribution of the tweets. In this case, the data is a col-  
lection of tweets about different banking institutions.  
This histogram shows the sentiment of the tweets  
using a scale of 1 to 10. By visualizing the sentiment  
as a histogram, the reader can quickly see the distri-  
bution of that sentiment. For example, in this case, the  
data is right-skewed. There is clearly more negative  
sentiment about the banks than positive sentiment. ow People se the ashboard 177  
F 16.1 A histogram showing the distribution of sentiment from tweets about banks on Twitter.  
nderstanding distribution  
 number of general types of data distribution  
exist. \(See Figure 16.2.\) “Skew” refers to  
the asymmetry of the distribution versus the  
even distribution of a normal distribution. Some  
people find skew labels confusing. Skew is easy  
to remember if you see skewed data as having a  
tail \(i.e., gets thinner at one end\). The direction  
of the skew matches the direction of the tail.  
F 16.2 A few examples of the types of distributions. 178 Chapter 16 Sentiment Analysis\: Showing verall istribution  
F 16.3 A dot plot, histogram, and diverging bar chart showing the distribution of sentiment by bank.  
The reader can see each bank and compare the dis-  
tribution of the sentiment. \(See Figure 16.3.\) The dots  
give the reader a sense of how many tweets a par-  
ticular bank has. The data can be explored point by  
point to see the individual tweets, and overall com-  
parisons among banks can be made using the dis-  
tribution of the dots in the dot plot, the histograms,  
and the diverging bar chart. In this particular data set  
\(only 421 tweets after filtering\), the user can see that  
Bank of America and Citibank, at the bottom of the  
list, are much more right-skewed than Chase Bank.  
Why his Works  
he ouble Jitter Shows istribution of the  
iscrete Points  
The dot plot shows each individual data point. In  
this case, each individual tweet by a consumer is  
plotted by the sentiment score. Since the rating is  
a discrete number, from 1 to 10, when the dots are  
plotted, they would all be on top of each other,  
completely hiding the visualization of the individ-  
ual points. As we did with the dot plot in Chapter  
3, we apply jitter to separate the points from each  
other. However, in this dot plot, jitter is used on  
both the x-axis and the y-axis; in other words, the  
plot is double jittered.  
On the y-axis, jitter is a random number separating  
the points across the row from the top of the row to  
the bottom of the row. However, even when using the  
jitter on the y-axis, the points still would be on top  
of each other. Since the x-axis shows the sentiment  
score, it is critical that we don’t distort the data. There-  
fore, on the x-axis, a jitter is applied carefully, moving  
the points just above or below the actual data point so  
that they group together around the true data point.  
In other words, a score of 3 is plotted as 2.9 for one  
dot and as 3.1 for another. \(See Figure 16.4.\)  
The amount of jitter depends on the number of points  
in the data set. The more points you have, the more  
overlap occurs in the dot plot. F 16.4 The dots in the dot plot are randomly  
distributed between the top and bottom but also to the  
left and right of the data line.  
ow much jitter?  
etermining the right amount to jitter  
can be tricky. \(See Figure 16.5.\) If you  
use too little jitter, the points will overlap  
too much. If you use too much, you can  
skew the appearance of the data. Like the  
temperature of Goldilocks’ porridge, the  
amount to jitter has to be just right.  
F 16.5 This data has so many points with the  
same value that the dots are on top of each other.  
This graph could be jittered more, but care must be  
taken not to jitter too much and skew the data.  
Why This Works 179  
asy xploration of Multiple ata Points  
Dot plots allow for easy exploration of the data.  
Because these plots use individual data points, the  
user can hover over any point and see the tweet. The  
user thus can explore the data and, when doing so,  
sometimes discover interesting things. For exam-  
ple, by exploring this data, an instance of fraud was  
found and annotated, as shown in Figure 16.6.  
F 16.6 Hovering over the tweets uncovered one  
that appears to be fraud \(annotated as Fraud Alert\).  
This customer of Bank of America tweeted\:  
All about lying to Bank of America about y u over-  
drafted so u can get the money refunded back  
into ur account \#3itmes \#\$\$straightoalochol  
he istogram Makes It asy to See the  
istribution for ach Bank  
The histogram on the right side of the dashboard  
is really a sparkbar\: there are no axis labels or  
data labels. Sparkbars aren’t used to give precise  
numbers but rather to see a quick view of the dis-  
tribution of sentiment for one bank versus another.  
The user can quickly scan the right side and see  
that one institution has more negative sentiment  
when compared to another. Rather than counting  
dots or trying to make estimates of one bank ver-  
sus another, the histogram gives a simple summary  
in a small space. 180 Chapter 16 Sentiment Analysis\: Showing verall istribution  
ther pproaches  
Box plots could be used to show the distribution of  
the points. Figure 16.7 shows the same data using a  
dot plot with a box plot.  
Although the box plot does a great job showing the  
distribution of the points, it may not be universally  
understood by readers whereas the histogram show-  
ing the distribution will likely be understood by a  
broader audience.  
Dot plots or strip plots can be used without jitter, but  
when plotting many points, there is too much over-  
lap of the points to be useful. Figure 16.8 shows test  
scores of a particular course. Notice the overlapping  
dots in the regular dot plot compared to the dot plot  
using jitter and performance bands.  
F 16.7 A dot plot and box plot showing the distribution of sentiment. F 16.8 Adding jitter to the dot plot makes it easier to see the points without overlap, and including  
performance bands can add additional context for those points. 182 Chapter 16 Sentiment Analysis\: Showing verall istribution  
F 16.9 across classes.  
Using a dot with jitter and color to encode grades and adding a box plot allows a quick comparison  
Figure 16.9 shows that same data using a dot plot with  
jitter and a box plot. Instead of performance bands,  
the grades are encoded with color in a similar man-  
ner as the sentiment dashboard.  
Sometimes sentiment is categorized on a different scale;  
for example, it might simply be positive, negative, and  
neutral or a Likert scale. In this case, refer to Chapter 17 to  
see alternative ways in which you can visualize this data.  
uthor Commentary  
TV\: I wish people reading the book could see  
just how many iterations we go through with  
these dashboards. This one in particular gener-  
ated a lot of lively discussions as Jeff and I dis-  
cussed the merits of using a histogram versus a  
divergent stacked bar chart to show how sen-  
timent skews.  
Part of the issue for me is I’m accustomed to see-  
ing a divergent stacked bar for these situations,  
and I argued in favor of the approach shown in  
Figure 16.10.  
Jeff still maintained that the common baseline  
in the histogram was important for comparing Author Commentary 183  
F 16.10 Using a divergent stacked bar chart to show and rank sentiment for different banks.  
F 16.11 Histogram and divergent stacked bar chart placed side by side.  
values, so we tried using both charts, as shown in  
Figure 16.11.  
Jeff then pointed out that we didn’t need so much  
detail in the divergent stacked bar approach, as  
the histogram already contained that detail. He  
suggested the approach that made it into the  
final dashboard. \(See Figure 16.3.\) I think it works  
very well.  
This particular scenario has me rethinking how to  
show Net Promoter Score \(NPS\). Figure 16.12 is an  
alternative approach to the dashboard we present  
in Chapter 17. 184 Chapter 16 Sentiment Analysis\: Showing verall istribution  
NDY\: I’m very fond of jitterplots and like their use  
on this dashboard. I would caution readers not to  
think jitterplots should be used every time you are  
considering using a dot plot. Box plots were spe-  
cifically created to solve some of the problems of  
overplotting. Jitterplots also introduce the risk that  
untrained viewers will interpret the position as an  
indication of a measure, even though one doesn’t  
exist. I discussed this further, with examples, in  
Chapter 3.  
F 16.12 Combining several approaches to presenting Net Promoter Score data. Chapter 17  
# Showing Sentiment with  
et Promoter Score  
Net Promoter Score dashboard.  
Author\: Steve Wexler  
Organization\: Data Revelations  
186 187 188 Chapter 17 Showing Sentiment with et Promoter Score  
Scenario  
Big Picture  
You are a market researcher and need to track con-  
sumer preferences for several brands. You need to  
be able to see how different respondents feel about  
each brand and how opinions have changed over  
time.  
Although you will consider asking your survey panel  
many different questions, you know for sure that  
you will present the classic Net Promoter Score  
\(NPS\) question—“Would you recommend this  
product or service to a friend or colleague? Please  
specify a rating from 0 to 10”—as your company  
has standardized on NPS as a measure of customer  
sentiment.  
ikert scale  
he Likert scale \(pronounced “Lick-ert”\) is  
named after Rensis Likert, the founder of  
the Human Resources Institute. Likert came up  
with the idea of applying a quantitative scale  
\(usually 1 through 5\) to qualitative measures.  
For example, “On a scale of 1 to 5, where 1  
means strongly disagree and 5 means strongly  
agree, please give your opinions about the  
following statements.”  
Specifics  
• You need to show the NPS for a variety of products  
to see which ones people would recommend and  
which ones they would not.  
• You need to see if people in different roles would  
recommend or not recommend a product.  
• You need to see how NPS has changed over time  
for a particular product, both overall and for peo-  
ple in different roles.  
• You need to see how favorably or unfavorably peo-  
ple rate different candidates running for office.  
• You want to know how often survey respondents  
use different social media outlets and how this  
usage differs based on age and gender.  
Understanding PS  
In an NPS survey, respondents are presented with the  
question “Using a scale from 0 to 10, would you recom-  
mend this product/service to a friend or colleague?”  
• Anyone who responds with a 0 through 6 is con-  
sidered a detractor.  
• Anyone who responds with a 7 or 8 is considered  
a passive \(or neutral\).  
• Anyone who responds with a 9 or 10 is considered  
a promoter.  
elated Scenarios  
• You need to see results for a series of Likert-scale  
questions asking survey respondents to indicate  
the degree to which they agree or disagree with a  
series of statements. ow People se the ashboard 189  
F 17.1 How to compute NPS.  
The NPS is computed by taking the percentage of  
people who are promoters, subtracting the percent-  
age of people who are detractors, and multiplying  
that number by 100. \(See Figure 17.1.\)  
ow People Use the ashboard  
In its initial state, the dashboard shows only ratings/  
rankings for several different products. \(See Figure 17.2.\)  
F 17.2 products being studied.  
Initial state of the dashboard shows only ratings/rankings for the seven 190 Chapter 17 Showing Sentiment with et Promoter Score  
After a product is selected, you can see both how  
people in different job roles feel about the selected  
product and how NPS for the product has changed  
over time. \(See Figure 17.3.\)  
F 17.3 NPS by role and over time for Product D. ow People se the ashboard 191  
After a particular role is selected, you can see  
how NPS for the selected product has changed  
over time for that role, in this case analysts. \(See  
Figure 17.4.\)  
F 17.4 What analysts think about Product D over time. 192 Chapter 17 Showing Sentiment with et Promoter Score  
Parameters drop-down toggle  
When “Show Percentages” is selected,  
the view is changed so that you can see  
the percentage of promoters, neutrals, and  
detractors. \(See Figures 17.5 and 17.6.\)  
F 17.5 Drop-down toggle.  
Note that at any point, people interacting with the  
dashboard can change the view to instead show the  
percentage of promoters, neutrals, and detractors  
rather than the NPS. \(See Figure 17.6.\)  
F 17.6 Showing percentages instead of NPS. Why his Works  
he asy-to-Understand Combination Chart  
The main visualization \(see Figure 17.2\) is a combina-  
tion chart that combines divergent stacked bar charts  
with an overall score \(the circles\).  
The divergent stacked bar makes it very easy to see how  
sentiment skews either positive or negative. \(See Fig-  
ure 17.7.\) That is, the entire bar moves either left or right  
to show which products have a more favorable rating.  
Note that, in this case, half of the neutral respondents  
are on the positive side and half are on the negative  
Why This Works 193  
side, as we want to show these responses and how they  
center around zero. \(For an alternative approach to deal-  
ing with neutrals, see Figure 17.19 later in the chapter.\)  
he eutrals  ell Us a ot  
A typical NPS chart shows just the scores, not the dis-  
tribution of positive, negative, and neutral responses.  
\(See Figure 17.10 later in this chapter.\) Neutrals rep-  
resent the big tipping point with NPS because folks  
who selected a 7 or 8 are just one point away from  
being either promoters or detractors. A product with  
a large percentage of neutrals presents a great oppor-  
tunity to turn respondents into promoters.  
F 17.7 Sorted divergent stacked bars make it easy to see which products are more favorably rated. 194 Chapter 17 Showing Sentiment with et Promoter Score  
Breakdown by ole Provides dditional Insight  
The ability to select a product and see its perfor-  
mance by a particular demographic \(in this case, role\)  
enables users to see how sentiment differs based on  
that demographic.  
In Figure 17.8, we can see that the NPS for Product A  
among doctors is 35 but is –2 among students.  
voiding the  raditional pproach to PS  
Consider the snippet of NPS survey data shown in  
Figure 17.9 with responses about different compa-  
nies from people in different roles.  
F 17.8 NPS can differ widely depending on respondent demographics, in this case, role. Avoiding the Traditional Approach to PS 195  
F 17.10 The traditional way to show NPS.  
right on the cusp of becoming promoters, so their  
sentiment is vitally important.  
For example, an NPS of 40 can come from\:  
• 70 percent promoters and 30 percent detractors or  
• 45 percent promoters, 50 percent neutrals,  
5 percent detractors.  
Same score, big difference in makeup. \(See  
Figure 17.11.\)  
F 17.9 Raw NPS data about different companies  
from people with different occupations.  
If we just focus on the NPS and not the components  
that comprise it, we can produce an easy-to-sort bar  
chart like the one shown in Figure 17.10.  
Yes, it’s easy to see that Company D has a much higher  
NPS than Company H, but by not showing the indi-  
vidual components, we’re missing an important part  
of the story. In particular, the neutrals/passives are  
F 17.11 Here we see the problem when you just  
show the results of an aggregation. The Net Promoter  
Scores for both product X and Y are the same, but they  
are derived from very different responses. 196 Chapter 17 Showing Sentiment with et Promoter Score  
More houghts on isualizing Sentiment  
We looked at why the traditional approach to show-  
ing NPS often falls short. What about Likert scale sur-  
vey data, survey data that asks people to indicate the  
degree to which they agree or disagree with a series  
of statements? Let’s look at different approaches and  
see what we should avoid and what we should employ.  
Why Default Charts Don’t Work Well  
Consider Figure 17.12, which shows the results from a  
fictitious poll on the use of various learning modalities.  
It’s hard to glean anything meaningful from this figure.  
What about a bar chart? \(See Figure 17.13.\)  
F 17.12 F 17.13 Likert scale questions using a bar chart.  
Table with survey results. Wow, that’s really bad. What about a 100 percent  
stacked bar chart instead? \(See Figure 17.14.\)  
Okay, that’s better, but it’s still pretty bad as the default  
colors do nothing to help us see tendencies that are  
More Thoughts on Visualizing Sentiment 197  
adjacent. That is, often and sometimes should have  
similar colors, as should rarely and never.  
So, let’s try using better colors. \(See Figure 17.15.\)  
F 17.14 100 percent stacked bar chart using default colors.  
F 17.15 100 percent stacked. 198 Chapter 17 Showing Sentiment with et Promoter Score  
Figure 17.15 is certainly an improvement, but the  
modalities are listed alphabetically, not by how often  
they’re used. Let’s see what happens when we sort  
the bars. \(See Figure 17.16.\)  
It’s taken us several tries, but it’s now easier to see  
which modalities are more popular. But we can do  
better. Figure 17.17 shows the same data rendered  
as a divergent stacked bar chart.  
F 17.16 Sorted 100 percent stacked bar chart with good colors.  
F 17.17 Sorted divergent stacked bar chart with good colors. Author Commentary 199  
F 17.18 Divergent stacked bar chart with only two levels of sentiment.  
Of course, we can also look take a coarser view and  
just compare sometimes/often with rarely/never, as  
shown in Figure 17.18.  
uthor Commentary  
teve\: I find that the divergent approach speaks to  
me, and it resonates with my colleagues and clients.  
I don’t have a problem comparing the magnitude of  
the neutral percentages that we saw in Figure 17.7,  
but some of my colleagues suggest that you may  
want to isolate the neutrals in a separate chart, as  
shown in Figure 17.19.  
Here we have a common baseline to compare  
the positives, the negatives, and the neutrals as  
opposed to Figure 17.7, where the neutrals center  
at zero. 200 Chapter 17 Showing Sentiment with et Promoter Score  
F 17.19 Alternative approach to dealing with neutrals in a divergent stacked bar chart. Chapter 18  
# Server Process Monitoring  
A server-monitoring dashboard highlighting delayed and failed processes for any given day.  
Dashboard Designer\: Mark Jackson \(http\://ugamarkj.blogspot.com\)  
Organization\: Piedmont Healthcare  
202 203 204 Chapter 18 Server Process Monitoring  
Scenario  
Big Picture  
You are a business intelligence manager. Your  
employees rely on your business intelligence  
service being online with the latest data when  
they arrive at work in the morning. You need to  
know if something went wrong with the overnight  
processes—before everyone gets to work. What  
you need is a dashboard you can look at each morn-  
ing that shows you what, if anything, is holding up  
your server. If anything’s going wrong, you can jump  
directly to that process and take corrective action.  
Also, you can delve into that process’s recent his-  
tory to see if it’s been consistently problematic. If  
it has, you need to do more research and decide  
on a course of action to fix the process. To deter-  
mine what to do next, you might ask the follow-  
ing questions\:  
• Did our server processes succeed today?  
• Which processes failed?  
• Are the failing processes repeatedly failing?  
• Which processes are taking longer than usual?  
Specifics  
• You manage a server and need to respond  
quickly if processes fail. If these processes are  
going to cause problems for the users, those  
problems need to be identified and addressed  
quickly.  
• You need an email each morning with a summary  
report of overnight processes. If a high number  
fail or if some key processes fail, you need to click  
the email to go to the live dashboard and drill into  
the details.  
• For any given failed process, you need extra con-  
textual details to help you diagnose and fix the  
problem. Was this failure caused by a problem ear-  
lier in the process chain? Is this process consis-  
tently failing?  
elated Scenarios  
• You are a manufacturer and need to track the pro-  
duction schedule’s progress towards completion.  
• You are an event manager and need to track that  
tasks begin correctly and run to time.  
ow People Use the ashboard  
As an administrator responsible for keeping your  
enterprise’s systems up and running, you need to  
know if things are going wrong. A static image of  
the dashboard is emailed to Mark Jackson, the dash-  
board designer, each morning. The bar chart at the  
top shows percentage of failures for each of the last  
14 days. The most recent is at the far right \(the high-  
lighted bar in the overview dashboard\). Comparing  
last night to the last two weeks allows Mark to easily  
see if last night was normal or an outlier. The average  
failure rate is shown as a dotted line.  
Mark can see that 6.7 percent of processes failed  
overnight. That’s a real problem, and significantly  
above the average failures for the previous 14 days.  
Some investigation is needed.  
Mark can see all the processes that took place that  
day. Gray ones succeeded, and red ones failed. Ref-  
erence lines on each Gantt bar show the scheduled  
start time \(dotted line\) and the average time the task  
has taken \(solid line\). The Epic Radiant Orders task is  
the clear problem on this day. ow People se the ashboard 205  
F 18.1 The tool tip adds extra detail about the failure.  
If Mark wants to investigate any task in detail, he can  
hover over it to see a tool tip for extra contextual  
information. \(See Figure 18.1.\)  
Now Mark can see details about the Epic Radiant  
Orders task. Not only did the task fail, it took nearly  
seven hours to fail. On average, it takes around two  
hours to complete.  
From here, he has two options. The tool tip has a URL  
link in it\: He can click the link in the tool tip to go and  
see the task on the server itself. His other option is to  
click on the Gantt bar, which reveals a new view at the  
bottom of the dashboard showing detail for the task.  
In Figure 18.2, Mark can see that the Epic Radiant  
Orders task has been failing consistently recently.  
Whatever preventive medicine he has been apply-  
ing has not yet succeeded.  
The detail view shows the performance of a single  
task over the previous month. Clearly the Epic Radiant  
Orders task needs some investigation. It’s failed seven  
times in the last month.  
Throughout this process, Mark has gone from receiv-  
ing an email with a daily alert to being able to see the  
overview for the day. From there, he can drill down  
into detail where he needs to explore further and  
finally go straight to any server processes that need  
investigation. 206 Chapter 18 Server Process Monitoring  
F 18.2 Detail view for a specific task. In this case, we are looking at the Epic Radiant Orders task.  
Why his Works  
abels on the antt bar  
Mark could have put the header labeling each task  
at the left-hand edge of the chart, in a header area.  
Instead, he chose to label the Gantt bar itself. On  
first glance, this makes the view look busy\: there’s an  
awful lot of text butting up against the bar. When you  
look at Figure 18.3, though, you can see why he did  
it. When he sees a red, failing task, its name is right  
there, where his eyes are. He doesn’t need to do a  
careful look up to the left to find the name of the task.  
eference ines  
In addition to finding the failing processes quickly,  
Mark needs an indication of which other processes  
might be contributing to the failures. In this case, he  
uses reference lines to show schedules and durations.  
In the example in Figure 18.4, Mark can see that the  
Epic Radiant Orders task failed. \(It’s red.\) The dotted  
vertical lines for each task show him when each task was  
due to start. We can see in this case that Epic Radiant  
Orders was significantly delayed. It should start around  
10\:30 a.m. but didn’t start until around 5 p.m.  
The solid vertical lines show the average duration of  
each task. In this case, Mark can see that the previ-  
ous task, Epic ASAP Events, also finished later than  
normal. Did one delay cause the other? Mark knows  
he’ll have to investigate both of these.  
U ctions  
The tool tip contains a URL \(see Figure 18.1\). Mark can  
find which details need further investigation and, with  
a single click, can go straight to the relevant informa-  
tion. This speed and directness is important to any Why This Works 207  
F 18.3 view shows the labels on the left.  
The top view shows how Mark designed the dashboard\: with labels next to the Gantt bars. The lower  
F 18.4 solid lines indicate average task duration.  
Each scheduled task is shown by a Gantt bar. The dotted lines indicate scheduled start time and the  
dashboard as it puts users in the flow. Mark doesn’t  
have to waste time finding the relevant next dash-  
board; the URL takes him there directly.  
verview, Zoom and ilter,  
etails on emand  
As we know, one aspect of successful dashboards  
is to create an exploratory path through the data.  
Ben Shneiderman, Distinguished Professor in the  
Department of Computer Science at the Univer-  
sity of Maryland and a pioneer of information  
visualization study, described his mantra of data  
visualization\:  
• Overview  
• Zoom and filter  
• Details on demand  
The dashboard in Figure 18.5 demonstrates this  
flow. Starting at the top, Mark has an overview of  
the server performance for recent days \(1\). Click-  
ing on a day allows him to filter down to a single-  
day view \(2\). He can then get details on demand  
by clicking on a task \(3\), to open the details on task  
summary view \(4\), or use the URL to go directly to  
the task on the server itself \(5\). The flow is top down  
and easy to follow. F 18.5 A dashboard with a great top-down flow. The task summary view is not visible in the emailed  
report or when the report is first opened. That view  
appears only when it is clicked. This dashboard is a  
nice way of showing as much detail as possible in the  
initial view and bringing in contextual information only  
when it is needed.  
uthor Commentary  
NDY\: This is a simple dashboard. I think that works  
in its favor. Mark designed it to answer the three  
most important questions he has each day\:  
1\. How many tasks failed?  
2\. Which ones were they?  
3\. Are the failures a trend or a one-off?  
Bar chart. Gantt chart. Gantt chart. That’s all it took  
and the dashboard needed no other adornment  
In anticipation that follow-up questions will arise, the  
URL link lets Mark get to the next set of questions he  
Author Commentary 209  
might need to ask. The strategy of linking dashboards  
together allows you to keep each one from becom-  
ing cluttered. Attempting to answer too many ques-  
tions in one dashboard reduces clarity.  
There are several issues with text overlapping the ver-  
tical reference lines in the Gantt bar. That might have  
earned a few “ugly cats” but this dashboard got an  
exemption for an important reason\: It is for his eyes  
only. Because the destined audience is himself, he  
has built something that works for him.  
When designing a dashboard, how much spit and  
polish should you put on it? If it’s just for you, then,  
really, what you put on your dashboard is between  
you and the computer screen. If it works for you,  
that’s fine. However, if it’s for consumption by an  
entire organization, you have to make the experi-  
ence as smooth as possible. If Mark’s dashboard  
was to be used by the entire organization, we  
might suggest workarounds to avoid the overlap-  
ping text. Chapter 19  
# Big Mac Index  
The Economist Big Mac Index.  
Dashboard Designer\: Donald Hounam \(developer\), Roxana Willis \(data\), and Pam Woodall \(index originator\)  
Organization\: The Economist \(http\://www.economist.com/content/big-mac-index\)  
210 211 212 Chapter 19 Big Mac Index  
Scenario  
Big Picture  
You are an economist, or someone interested in  
economics, and want to compare the levels of one  
currency against another. You could do this using  
complex models based on large shopping baskets  
of diverse goods. Or you could compare the price  
of one product that is the same across the world\: a  
Big Mac. How much does one cost in countries around  
the world relative to the major currencies? For exam-  
ple, is a Big Mac in China over- or undervalued com-  
pared to the U.S. dollar? That measure is the Big Mac  
Index \(BMI\).  
Specifics  
• You want to see the worldwide variation in cur-  
rency valuations.  
• You want to compare gross domestic product  
\(GDP\) to the BMI price.  
• You want to be able to see how the index has  
changed over time.  
• You want to see a ranking of all currencies bal-  
anced against one base currency \(dollar, pound,  
euro, or yen\).  
elated Scenarios  
• Compare unemployment rates in different coun-  
tries or in different states in the same country.  
• Compare currencies with the price of gold.  
ow People Use the ashboard  
In 1986, The Economist developed the BMI as a fun cur-  
rency valuation tool. Since then, it has become wildly  
popular with economists, academics, and students of  
exchange-rate theory. The purpose of the BMI is to  
determine currency misalignment, and it’s based on  
the concept of purchasing-power parity \(PPP\), which  
states that identical goods should be priced equally  
across countries, when GDP and exchange rates are  
accounted for. As The Economist describes it, “\[T\]he  
average price of a Big Mac in America in July 2016 was  
\$5.04; in China it was only \$2.79 at market exchange  
rates. So the raw BMI says that the yuan was under-  
valued by 45 percent at that time.” \(Source\: http\://  
www.economist.com/content/big-mac-index.\)  
PPP is an indicator of future exchange rates over the  
long term, but it cannot bring clarity to current cur-  
rency equilibrium. The BMI corrects for this by look-  
ing at the relationship between GDP per citizen and  
Big Mac prices.  
The scatterplot on the lower-left panel of the dashboard  
illustrates the GDP per person for the measured coun-  
tries. The red line illustrates the best fit of the adjusted  
index. Currency valuation is determined by calculat-  
ing the difference between the country dots and the  
red line. If they intersect perfectly, the currency for that  
country is accurately valued. A dot above the line indi-  
cates an overvalued currency, while one below the line  
indicates an undervalued currency. These values are dis-  
played from highest to lowest in the panel on the right.  
Users can choose the base currency to compare all  
the others with, as shown in Figure 19.1. In this exam-  
ple, we’re going to compare to the U.S. dollar. Users  
can also choose sterling, the euro, or yen and to use  
the raw or adjusted index. The raw index takes the  
raw cost of the Big Mac in each country; the adjusted  
index adjusts it for that country’s GDP per person.  
The map in Figure 19.2 shows all the countries, with  
a color scheme showing how over- or undervalued F 19.1 Selectors.  
F 19.2 Map shows the BMI relative to the United States. Mexico is highlighted. 214 Chapter 19 Big Mac Index  
a Big Mac is compared to the base currency. \(In this  
case, we selected dollars.\)  
Mexico has been highlighted. It is bright red, indicat-  
ing that it is highly undervalued \(\>50 percent\). The  
details are shown in the text panel to the right of the  
color legend. The Big Mac is only \$2.37 in Mexico  
compared to \$5.04 in the United States \(not shown in  
Figure 19.2\). Big Macs are relatively cheap in Mexico.  
On the right of the dashboard, the same data is shown  
in an ordered bar chart. \(See Figure 19.3.\) We can see  
that the Big Mac is overvalued relative to the dollar in  
only three countries\: Switzerland, Norway, and Sweden.  
In fact, the Big Mac in Switzerland is priced 30.8 percent  
higher than in the United States, at \$6.59.  
When a country is selected, the scatterplot on the bottom  
left of the dashboard is replaced with a timeline show-  
ing the BMI for the selected country. Figure 19.4 shows  
the dashboard after the user has clicked on Switzerland.  
F 19.3 The bar chart shows the details of each  
currency, sorted by valuation. F 19.4 scatter plot in the bottom left.  
Once a country is selected \(in the case, Switzerland\), a BMI timeline for that country replaces the 216 Chapter 19 Big Mac Index  
We can see in Figure 19.4 that in 2011, the Big Mac  
in Switzerland was overvalued by almost 100 percent  
against the dollar. In 2016, the BMI was at its lowest  
since 2000. Contrast that with the changing BMI for  
Britain, relative to the dollar, shown in Figure 19.5.  
The British Big Mac was overvalued against the dol-  
lar from 2000 through 2009. Since then, it has been  
undervalued except for a short period in 2014. Since  
2014, the Big Mac has been getting more and more  
undervalued relative to the dollar. Those Big Macs  
are feeling cheaper for the British.  
If no country is selected, the lower portion of the  
dashboard shows a scatterplot comparing GDP with  
the BMI. The line of best fit shows how, generally, Big  
Macs are cheaper in poorer countries where labor  
costs are low. It’s easy to spot the outliers, such as  
Brazil, where the Big Macs are expensive relative to  
GDP. \(See Figure 19.6.\)  
Why his Works  
Multiple iews of the Same ata  
There’s no rule saying one should pack as many  
dimensions and measures as possible onto a dash-  
board. This dashboard really only shows one metric\:  
the BMI. It shows the BMI as a map, allowing us to  
see spatial distributions of countries with similar valu-  
ations. It shows the BMI as a sorted bar chart, which  
allows us to easily compare countries. And it shows  
the BMI over time for a country. The dashboard is  
simple but effective.  
F 19.5 The Big Mac in Britain.  
F 19.6 The Big Mac in Brazil.  
ilters on the  op eft  
Users will generally not be using this dashboard  
every day. Therefore, it’s useful to put the filters and  
selectors where the users will look\: beneath the title  
on the top left. If the filters are placed on the right  
or at the bottom, there is a high chance users will  
not see them.  
Sorted Bar Charts Make Comparisons asy  
The sorted bar chart \(see Figure 19.3\) makes it easy  
to see how the countries rank against each other. The  
baseline \(the U.S. dollar\) is clearly shown as a vertical  
red line. Because length and position are preattentive  
features, it’s extremely easy to decode which coun-  
tries are over- and undervalued relative to the dollar. Why This Works 217  
F 19.7 BMI timeline showing the euro against the U.S. dollar.  
eference ine on imeline and Bar Chart  
When comparing one measure against another, it’s  
nice to have a clear reference line. The Economist  
chose a simple but very effective red line for the line  
charts and bar charts. The red line makes it very easy  
to see where the BMI moved from negative to posi-  
tive. Figure 19.7 shows the BMI for the euro against  
the U.S. dollar. The preattentive features of color and  
position make it easy to see exactly when the BMI was  
over- or undervalued to the dollar.  
dd context with reference lines  
eference lines add context to numbers,  
providing information about a target or an  
average.  
etails on emand  
Whenever users hover over a country, the text panel  
shows the details for that country. This allows users  
to move a mouse around the map and see the details  
quickly. Figure 19.8 shows the details for the Euro,  
undervalued against the dollar.  
F 19.8 U.S. dollar.  
In July 2016, the euro was undervalued against the 218 Chapter 19 Big Mac Index  
F 19.9 Small countries are visible through callouts  
Callouts for Small Countries  
Hong Kong and Singapore are tiny countries and  
are barely more than a pixel on this dashboard. The  
designers created a callout so users can see the val-  
ues of these two countries. \(See Figure 19.9.\)  
uthor Commentary  
NDY\: This dashboard was published in 2012, which  
is ancient history in terms of Internet technol-  
ogy. At time of writing, a major overhaul is being  
planned to make the dashboard responsive on  
different browsing platforms and to use newer  
display technologies, such as d3. We included  
the dashboard in this book because it is a great  
example of showing a single index in a variety of  
different ways.  
The original designs for this dashboard are also  
fascinating. The Economist was kind enough to  
share its original wireframes for the project, which  
ran from July 2011 to May 2012. These are shown,  
with the designers’ comments, in Figures 19.10  
to 19.13. F 19.10 July 2011. 220 Chapter 19 Big Mac Index  
F 19.11 August 2011.  
Iteration of dashboards is vital, both before and  
after publication. Designers need to review with  
users whether the dashboards work or not and  
then evolve them over time in order to keep  
them relevant. What I like with The Economist’s  
wireframes is the progression around a similar  
theme. It’s clear the sorted bar chart was liked,  
and it stayed in the same position throughout, but  
everything else changed. In one iteration, the map  
disappeared behind a tab but then reappeared. Author Commentary 221  
F 19.12 September 2011.  
There was a lot of experimentation in how to show  
the timeline. \(As we see in Chapter 31, there are  
many different ways of showing time.\) In the final  
iteration, the designers were experimenting with  
Big Mac icons \(see Figure 19.13\). The progression  
from July 2011 to May 2012 was slow by today’s  
standards. Today, it would be preferable to sit in  
a room with stakeholders and iterate quickly with  
some options. The four-month wireframe process  
could easily be reduced to days. F 19.13 May 2012. Chapter 20  
Complaints ashboard  
Complaints dashboard.  
Dashboard Designer\: Jeffrey Shaffer  
Organization\: Unifund  
224 225 226 Chapter 20 Complaints ashboard  
Scenario  
Big Picture  
You work for a bank or credit card company. You receive  
complaints on a regular basis. These complaints must  
be handled appropriately and swiftly. Complaints can  
come directly from consumers, or they can be chan-  
neled through regulators, such as federal or state  
agencies. Once the complaints are handled appro-  
priately, they are then marked as closed.  
Specifics  
• You need to see the number of consumer com-  
plaints for a specific time period.  
• You need to see how many complaints are open  
and closed.  
• You need to see the volume of complaints by  
reason.  
• You need to see the volume of complaints by the  
party making the complaint.  
• You need to see the number of complaints by state,  
and you need to be able to filter the dashboard  
by state.  
• You need to be able to change the date range to  
see the complaints for different periods of time.  
elated Scenarios  
• You need to monitor consumer complaints for  
financial products. Examples include\:  
• Banks and credit unions  
• Credit card issuers  
• Collection agencies  
• Attorneys  
• Account receivable management companies  
• Student loan issuers or servicers  
• Auto loan companies  
• Credit counseling companies  
• Payday loan companies  
• Online financial service companies  
• You need to monitor customer complaints for any  
product or service. Examples include\:  
• Online retailers  
• Food service providers  
• You need to monitor complaints in the workplace.  
Examples include\:  
• Harassment  
• Working conditions  
• Diversity  
• Protected classes  
• Injuries  
• Misconduct  
ow People Use the ashboard  
Compliance is a key issue in many industries. In finan-  
cial services, any company that is regulated by the  
Consumer Financial Protection Bureau \(CFPB\) is  
expected to handle consumer complaints appropri-  
ately and timely. Companies are also expected to have  
a complaint management system, along with policies  
and procedures to handle complaints, regardless of  
their nature or origin.  
Complaints are received though a number of chan-  
nels. Some complaints are received directly from the  
consumer, while others come directly from the CFPB,  
state agencies, or other entities. Each complaint is logged with the reason for the complaint and the  
channel through which the complaint was received.  
The chief compliance officer or members of the com-  
pliance team use this dashboard on a regular basis to  
help monitor the compliance with the complaint man-  
agement system. Actions can be taken as needed—for  
example, following up on or investigating a complaint  
that has been open for a long period of time. Figure 20.1  
shows the total complaints over time.  
The default time range is the past 12 months, but the  
user can adjust the slider control to change the time  
period. \(See Figure 20.2.\)  
A state map using hexagons displays the open com-  
plaints by state. Open complaints, indicated by darker  
coloring, are especially important to monitor to make  
F 20.1 Totals are displayed at the top and a  
stacked bar chart shows the open and closed complaints  
over the selected time period.  
ow People se the ashboard 227  
F 20.2 Slider control to adjust the time period  
and to select the source type or open/closed status.  
sure the necessary action is taken and response is  
timely. Clicking on a state filters the rest of the dash-  
board by state. \(See Figure 20.3.\)  
The reason for the complaint is logged when it is  
received. These reasons are shown on the dashboard  
for both closed and open complaints. \(See Figure 20.4.\)  
The party filing the complaint is shown in the bar  
charts in Figure 20.5. Selecting a party from this chart  
will filter the rest of the dashboard by that party.  
Combining filters allows the user to narrow the focus  
quickly. For example, the user can click California on  
F 20.3 Hex map showing the open complaints by  
state. The user clicks any state to filter the dashboard. 228 Chapter 20 Complaints ashboard  
F 20.4 Closed and open complaints are shown by reason.  
F 20.5 Closed and open complaints are shown by the party sending the complaint.  
the hex map and then click State Attorney General  
in the Complaints by Party bar chart. This will cause  
the entire dashboard to update immediately to show  
the complaint history for the California Attorney Gen-  
eral’s office.  
Why his Works  
Simple Use of Color  
Two categorical colors are used in this dashboard,  
medium sky blue for closed complaints and a  
reddish peach color for open complaints. Color is  
consistent throughout the dashboard. For the map,  
the color for open complaints is used as a sequen-  
tial color scheme, shading from white to the red-  
dish peach color. Some states may not have any  
complaints for the selected period. Rather than fil-  
tering them out of the view, the states with zero  
complaints are shown in white with the hexagonal  
border. This shows a complete hex map with all of  
the states regardless of the time period or other fil-  
ters that may be applied. ood Chart  ypes for the arious  
Comparisons  
Most of this dashboard is made up of bar charts, which  
are great for making accurate quantitative compari-  
sons. A stacked bar is used to show the total number  
of complaints over time and displays the number of  
open complaints versus the closed complaints. \(See  
Figure 20.6.\)  
Notice in Figure 20.6 that the open complaints are on  
the bottom of the stacked bar. The open complaints  
are the most important because they represent work  
that needs to be done and monitored on this dash-  
board. By putting them on the bottom of the stacked  
bar, the user is able to make a very accurate compar-  
ison of the bar heights. For example, even without  
Why This Works 229  
providing data labels, it’s very easy to see in this fig-  
ure that there is one more open complaint in January  
than in February. This is because the bars are fixed to  
a common baseline, the x-axis, allowing an accurate  
comparison of bar heights. It’s also really easy to spot  
the oldest open complaint, the one open complaint  
from November 2015.  
Using Figure 20.6, try comparing the closed com-  
plaints \(the blue bars\) for November and December.  
Which one has more complaints, and how many more?  
This determination is much more difficult because there  
isn’t a common baseline. The difference between open  
and closed complaints is actually the same as in Fig-  
ure 20.7. There is exactly one more closed complaint  
F 20.6 closed complaints.  
Stacked bar charts showing open and  
F 20.7 Unstacked bar chart comparing the same  
number of closed and open complaints as Figure 20.6  
for November and December. 230 Chapter 20 Complaints ashboard  
in November than in December. Thankfully, the user  
doesn’t need this level of precision for the closed com-  
plaints, although they have the option from the drop-  
down box to filter for them should the need arise.  
Comparing stacked bars  
Stacked bars make precise comparisons  
difficult for any segment other than the  
first segment. Put the most important piece  
of information on the first segment, and  
be careful not to slice bars into too many  
segments.  
Be very careful when using stacked bars. They are  
helpful for two reasons\: \(1\) for showing a part-to-whole  
relationship where the whole is important and \(2\) for  
comparing one segment to the whole. In this case, the  
user wants to see the total complaints over time. Since  
open complaints are also very important, we can see  
them compared to each other. This is because they  
are the bottom segment of the stacked bar. We can  
also see the open complaints in relation to all of the  
complaints, the part-to-whole comparison. Stacked  
bar charts are not useful to accurately compare one  
segment to another segment within the same bar.  
The other bar charts on the dashboard are divided  
up between open and closed. This allows for a quick  
and easy comparison of open and closed complaints  
both by Reason and by Party \(the channel through  
which the complaint came in\).  
ashboard esigned to a rid  
The dashboard is separated into four quadrants. There  
is clear horizontal and vertical alignment between all  
four sections, and there is space between each sec-  
tion of the dashboard. This reduces clutter on the  
dashboard so that it doesn’t look busy. Good organ-  
ization of your dashboards can help users see the  
information clearly and quickly.  
 ex Map Where ll States re qual  
Complaints are considered equally important, regard-  
less of channel or volume. The hex map allows the  
user to see every state equally. When using a tra-  
ditional choropleth \(or filled\) map, it can be hard to  
see very small states. For example, Delaware, Maryland,  
Rhode Island, and Vermont can be hard to see, and  
especially hard to click, compared to larger states,  
such as California and Texas. Also, Alaska and Hawaii  
often require special handling and sometimes are  
placed on the map out of position. The hex map  
solves these problem. It visualizes the states equally  
regardless of their land size.  
Figure 20.8 demonstrates the difficulty seeing  
smaller states in the Northeast. Rhode Island, Con-  
necticut, Vermont, New Hampshire, Delaware, and  
Maryland all are very difficult to see on a full map  
of the United States. If the map is used as a filter,  
which it is in this dashboard, then it would be very  
difficult for the user to select the small areas on the  
map to filter.  
Notice the equal treatment of the states with the hex  
map in Figure 20.8. Data analysts can also benefit  
from the straightforward presentation of a hex map.  
On a related dashboard, there was a coding problem  
behind the scenes, and Connecticut was not appear-  
ing in the data. It was immediately apparent on the  
hex map, but it would not have been caught so quickly  
on a choropleth map. ther Approaches 231  
F 20.8 choropleth map.  
A comparison of the northeastern states demonstrating how difficult it is to see smaller states on a  
Hex maps have their disadvantages, though. Most  
important, the position of the states isn’t exact  
because compromises have to be made for their  
placement. Figure 20.9 shows the locations of states  
in the southeast on a common choropleth map ver-  
sus a hex map. Examine the placement of the states  
on the hex map. Georgia isn’t south of Alabama  
and South Carolina. Because states are not in their  
usual location, it is essential to provide a two-  
letter state code so that the user can quickly find  
the states.  
Another issue with using a hex map is that it may not  
work well for different countries or regions. There  
are a number of different templates for the United  
States, but creating a hex map of the countries in  
the United Kingdom would be more difficult. In the  
United Kingdom, where the countries are closer  
in size, a choropleth map would likely be a better  
approach.  
ther pproaches  
Visualizing data on a map can be challenging. Many  
compromises have to be made. On the hex map, the  
decision was made to show only the open complaints.  
In this case, the data could be shown on a choropleth  
map, as described earlier. \(See Figure 20.10.\)  
However, Figure 20.10 demonstrates again the dif-  
ficulty of seeing the smaller states, especially when  
the map is a full U.S., map and it is placed in a small  
area of a dashboard.  
Showing part-to-whole relationships on a map can be  
especially challenging. In this case, a filled map won’t F 20.9 A comparison of a choropleth map versus a hex map showing the position of the states.  
F 20.10 A choropleth map showing the open complaints by state. ther Approaches 233  
F 20.11 Open and closed complaints shown on a map using pie charts.  
work. Although pie charts generally are not the best  
choice for visualizing data, they can be useful in this  
case to show a part-to-whole relationship on a map.  
\(See Figure 20.11.\)  
This solution suffers from some of the same issues that  
a filled map does. Smaller volumes have smaller pie  
chart sizes, which makes the comparisons very hard  
to see and difficult for a user to hover over or select.  
Another alternative is to avoid a map altogether. Just  
because data is geographic in nature does not mean  
that it has to be plotted on a map. Figure 20.12 shows  
a treemap. The treemap was designed to visualize  
hierarchical data, but it can also be used when there  
are many categories to show—in this case, 50 states.  
The advantage to this solution is the data is now  
ordered by the most complaints. It’s easy to see that  
Florida has the second highest number of total com-  
plaints and Michigan the third, something that can’t  
be easily discerned from the other maps. The treemap  
also shows us the part-to-whole relationship between  
open and closed complaints in each state.  
The problem with this solution is that it can be hard  
to find states if the user needs to select them to drill  
down into the data. The smallest states aren’t visible  
either, as some are missing the state labels. These  
issues could be solved with a drop-down menu and  
tool tips, but that still would require a user to find  
very small areas of the treemap to select, much like  
the choropleth map, but without the aid of a known  
geographical location.  
Another option would be using ranked bar charts, but  
when dealing with 50 states or 196 countries, bar charts  
will quickly become impractical. If you don’t need to  
list all of the categories, then a bar chart of the top 10  
could be a great solution. However, in this dashboard, it  
was important to see every state, treat them with equal  
importance, and allow the user to filter them easily. 234 Chapter 20 Complaints ashboard  
F 20.12 A treemap showing open and closed complaints by state.  
In the end, the designer felt that the hex map was  
the best compromise to show the open complaints  
on the dashboard.  
uthor Commentary  
teve\: There are three things that I thought were par-  
ticularly clever in this dashboard.  
1\. The key performance indicators are also a  
color legend. \(See Figure 20.13.\) Notice that  
there isn’t a color legend. Instead, the sum-  
mary numbers at the top of the dashboard are  
color coded. Not only do I know that there are  
2\. 3. F 20.13 The key performance indicators also  
serve as the color legend.  
288 closed cases and 39 open cases; I also know  
that blue means closed and red means open.  
The hex map is a value-added filter. Whenever  
I see a hex map or tile map, I get suspicious and  
think that the dashboard designer may be suc-  
cumbing to the temptation to add something  
cool at the expense of something that is analyti-  
cally sound. That is not the case here. The hex  
map is in fact a filter that also provides additional  
insight into the data. The dashboard designer  
knows that users need to be able to filter by state  
and could have deployed a simple multiselect list  
box from which the user could select a state or  
states. The hex map provides that same function-  
ality and adds really useful insights into the data.  
Perfect use of a stacked bar chart. The stacked  
bar chart in this dashboard \(shown in Figure 20.1\)  
is a great choice as we can easily compare both  
the overall number of complaints per month and  
the number of open complaints per month. Chapter 21  
ospital perating  
oom tilization  
Dashboard showing how efficiently hospital operating rooms are being scheduled and utilized.  
Dashboard Designers\: Dan Benevento, Katherine S. Rowell  
Organization\: HealthDataViz \(http\://www.healthdataviz.com\)  
236 237 238 Chapter 21 ospital perating oom tilization  
Scenario  
Big Picture  
You manage a suite of hospital operating rooms \(ORs\)  
that are in high demand by surgeons and are costly  
to operate. In order to meet surgeon demand for  
OR time in a cost-effective manner and to ensure  
high-quality, safe patient care, you need a dashboard  
that makes it easy for you to examine how accurately  
procedures are scheduled and how efficiently OR  
resources are utilized.  
This Hospital Operating Room Utilization dash-  
board displays surgical case and OR informa-  
tion in a clear and easy-to-understand way and  
helps OR managers, staff, surgeons, and anes-  
thesiologists identify potential opportunities for  
improvement.  
Specifics  
The metrics included in this dashboard help view-  
ers to compare the accuracy of the amount of time  
projected for an operation against the actual time it  
takes to perform. Inaccurately scheduled cases have  
a negative impact on metrics, such as\:  
• on-time case starts,  
• resource utilization,  
• operating room turnover times, and  
• patient satisfaction.  
elated Scenarios  
• You need to visualize resource planning, such as  
scheduling of conference rooms.  
• You need to visualize event planning, such as con-  
cert scheduling or maintenance of those venues,  
for example, which venues need to be cleaned, air  
conditioned, etc.  
• You need to monitor scheduling of resources in  
health care.  
• You need to visualize logistics, such as airline sched-  
uling to ensure planes are in the right place at the  
right time or driver management for a transporta-  
tion or logistics company.  
ow People Use the ashboard  
OR managers, surgical schedulers, surgeons, and clin-  
ical and technical teams may use this dashboard to\:  
• improve the accuracy of scheduled surgical case  
times;  
• monitor and ensure the timely, efficient, and safe  
care of patients;  
• monitor the time it takes to reset the operating  
room between cases and identify opportunities  
for improvement; and  
• manage overall operating room utilization and effi-  
ciency, quantify resource requirements, and identify  
potential improvement opportunities.  
The top section of this dashboard, shown in Figure 21.1,  
provides a three-month summary view of case sched-  
uling accuracy.  
At the top right, there’s an overview of each month’s  
overall scheduling accuracy encoded using different  
saturations of colors to show low and high percent-  
ages. For example, the viewer can quickly see that  
September OR cases were accurately scheduled only  
68 percent of the time \(displayed in orange\), increas-  
ing to 77 percent in October \(light blue\) and 87 per-  
cent in November \(dark blue\). ow People se the ashboard 239  
F 21.1 The top section shows an overview over time.  
The calendar view displays the percentage of cases  
scheduled accurately for each day of the three  
months. This view uses the same orange/blue color  
scheme. The viewer can quickly see OR scheduling  
accuracy trends from low \(orange\) to high \(blue\).  
Detail is shown in Figure 21.2.  
Two days are shown. On Thursday, 90 percent of cases  
were scheduled efficiently. There were 30 cases, of  
which 27 were accurately scheduled. The following  
day was less efficient, at 83 percent, with 15 out of  
18 cases running to time. This detailed calendar view  
F 21.2 Two days of metrics.  
is also interactive; users can click on any day to gener-  
ate more details about specific cases and ORs in the  
lower half of the dashboard. In Figure 21.3, we show  
the detailed view that appears when a user clicks on  
a day. In this case, it’s for September 25, 2015.  
Each row \(1\) displays the name of each operating  
room; the x-axis displays hours \(using a 24-hour clock\).  
The shaded background of the chart reflects the start  
and end of the working day \(2\). The light-blue shad-  
ing \(3\) begins at 3.30pm, which is when ORs should  
begin closing for the day. The area with white shad-  
ing represents the regularly scheduled OR time. All  
scheduled cases should appear in the white space.  
Gantt bars show the scheduled and actual times for  
each case. Light blue bars \(4\) show the scheduled time  
for a surgical case. Laid on top of those are the actual  
case time, in minutes. Accurately scheduled cases 240 Chapter 21 ospital perating oom tilization  
F 21.3 Utilization of ORs on September 25, 2015, shown in a modified Gantt chart.  
are shown in darker blue \(5\), and inaccurately sched-  
uled case are shown in orange \(6\). An accurate case is  
defined as one that is within 15 minutes of the estimate.  
The labels in the bars display the actual minutes the  
surgical case took to complete \(7\). The user can find  
out more via a tool tip that shows additional details of  
interest, such as the procedure performed, surgeon  
name, and the like. This is shown in Figure 21.4.  
The OR scheduling Gantt chart allows viewers to  
examine and consider how well each OR was utilized  
on a specific date and to identify potential areas  
for additional analysis or improvement. \(See Fig-  
ure 21.5.\)  
Figure 21.5 shows that OR 3 was managed very efficiently  
on this day—there were six scheduled cases, and each  
F 21.4 Tool tips add rich information. ow People se the ashboard 241  
F 21.5 Detail for OR 3\: a successful day of scheduling.  
took somewhere between 41 and 45 minutes to com-  
plete. The first case of the day started on time, and subse-  
quent cases all started a bit before their scheduled time.  
The last case of the day finished both before the sched-  
uled time and before the scheduled OR closing time.  
Figure 21.6 shows data for OR 5 on an inefficient day.  
All of the scheduled case times \(light blue bars\) were  
inaccurate, which we know because the actual case  
time bars are orange \(i.e., inaccurately scheduled  
cases\). We can also see that the first case of the day  
started late and overran, creating a domino effect of  
late starts for all subsequent cases.  
Figure 21.7 shows that OR 8 has a similar experience  
to OR 5. The first procedure also started late, and the  
final procedure overran the time scheduled for it by a  
very significant margin, far past the end of the sched-  
uled OR closing time.  
The ability to view the available hours in each OR and  
the actual cases performed in them also helps viewers to  
understand overall OR utilization and to explore if there  
may be a need for more or less OR time. For example,  
consider ORs 6 and 7, shown in Figure 21.8. The case  
times never overlapped. It may have been possible to  
complete all of the cases in one OR instead of two.  
F 21.6 Detail for OR 5\: not a good day.  
F 21.7 Detail for OR 8\: also not a great day.  
F 21.8 ORs 6 and 7\: Did both ORs need to be open this day? 242 Chapter 21 ospital perating oom tilization  
F 21.9 OR utilization on 10 November\: a day of 82 percent efficiency.  
Now contrast the efficiency in the first example in Fig-  
ure 21.3 of September 25 \(57 percent\) with the exam-  
ple for Tuesday, November 10 \(82 percent\), shown in  
Figure 21.9.  
Only six cases were scheduled inaccurately on Novem-  
ber 10. The viewer can see that although several cases  
started late, overall the Gantt bars are densely packed  
and the OR utilization was high.  
Why his Works  
Calendar iew Shows xact alues  
You might wonder why the calendar view is used  
instead of a line chart. A line chart does look good  
and provide insights. As you can see in Figure 21.10,  
the peaks and dips of efficiency are clear.  
However, a calendar view and heat map works on  
this dashboard because of the design objectives.  
Most often, surgeons perform procedures in allo-  
cated time blocks or specifically assigned OR times  
and days each week. Therefore, it is useful to be  
able to identify and compare those days directly  
for several weeks and months and to consider any  
scheduling or utilization patterns and trends that  
may provide clues about opportunities to improve  
OR scheduling or the need for additional OR  
resources. Why This Works 243  
F 21.10 actual daily values shown in a thinner line.  
The dashboard with a line view instead of a calendar view. The thick line is a moving average, with the  
Although this dashboard is designed for online view-  
ing and interaction, the reality is that often it will be  
printed and distributed on paper. And even though  
a printout shows only one day’s detail in the Gantt  
chart, it allows exact details to seen for every day in  
the calendar. The line chart shows the trends but not  
the actual numbers. 244 Chapter 21 ospital perating oom tilization  
range/Blue Color Palette Is Color-Blind  
riendly  
The use of orange and blue is a great choice to show  
good/bad without the risk of confusing people with  
color vision deficiency.  
Color Palettes re Consistent  
As previously shown and discussed, calendar views at  
the top use a diverging orange/blue palette\: bluer is  
better. \(See Figure 21.11.\) The Gantt chart also uses  
orange/blue, but in this case it is a discrete color pal-  
ette\: The orange shade shows inaccurate estimates  
and the blue shows accurate estimates.  
Strictly, we could argue that the use of color on this  
dashboard is inaccurate because you could look at the  
Gantt bars and interpret them based on the diverg-  
ing palette. The designers of this dashboard acknowl-  
edge that risk but wanted as few colors as possible.  
They decided that maintaining the general “blue =  
good” rule across both views was acceptable. With  
training and familiarity, users of this dashboard soon  
internalize this information to allow quick interpreta-  
tion of the data.  
ll the ata Is Shown  
In many situations, if you show only aggregated data,  
it’s easy to justify reasons why numbers are below  
F 21.11 Both palettes use the same orange/blue  
theme. The diverging palette is used in the calendar view,  
and the categorical palette is used on the Gantt chart.  
target. In this case, aggregated OR efficiency for each  
physician \(i.e. just the calendar view in the top of the  
dashboard\) could easily be dismissed as inaccurate  
data.  
The ability to break down each OR by day \(the Gantt  
bars in the lower section of the dashboard\) shows the  
problems in detail. Prior to having a dashboard like  
this, physicians would have been able to access only  
overview data. If they saw they were scheduling cases  
correctly only 50 percent of the time, they could dis-  
miss those results as inaccurate. Being able to see all  
the detailed data as well allows them to identify the  
problems and to identify opportunities to improve.  
uthor Commentary  
JFF\: I really like the use of color on this dashboard  
for the Gantt chart. It is very easy to see the inac-  
curate estimates versus the scheduled times, and  
it is a color-blind-friendly palette. I also really like  
the use of the heat map on the calendar view. In  
the calendar view, we moved the day of the month  
up to the top left corner of each day and used a  
smaller font so that it wouldn’t interfere with the  
data in each cell. However, I might have picked a  
different color to represent one or the other. Reiter-  
ating the concern that was addressed in the chap-  
ter, I would not reuse similar colors to encode data  
differently. Technically, the colors mean the same  
thing, but one color is measuring a different scale  
than the other. This was a design choice by the  
dashboard designer, but I think users could be con-  
fused by this.  
NDY\: The dashboard answers many questions, but,  
like all dashboards, it can’t answer them all. Con-  
sider the Gantt chart\: Blue cases were accurately scheduled, and orange ones were inaccurate. In  
this dashboard, accuracy is defined as having an  
actual duration within 15 minutes of the actual  
duration.  
However, consider what happened in OR 8. \(See  
Figure 21.7.\) The first case overran and is classed as  
inaccurate \(because it overran\). However, it started  
Author Commentary 245  
late. Why? In this dashboard, the answer to that  
question is not provided. This is an example of  
an unknown unknown question \(see Chapter 36\)\:  
Dashboards inspire new questions not thought of  
at the time of design. If that question of late-start-  
ing cases is important to many people, the dash-  
board should go through another iteration so that  
it can provide an answer. Chapter 22  
Showing ank and Magnitude  
Rank and magnitude sales dashboard.  
Author\: Steve Wexler  
Organization\: Data Revelations  
246 247 248 Chapter 22 Showing ank and Magnitude  
Scenario  
Big Picture  
Imagine you are a sales director. You know which of  
your retail products are your top sellers but wish you  
had a better sense of how these products are per-  
forming in different market segments. For example,  
consider your best-selling refrigerator. Is it selling  
equally well in all regions, or is there one region where  
it’s underperforming? Or think about your top com-  
puter tablet. It may be selling well overall, but are  
there market segments that avoid buying it?  
You want to fashion an exploratory dashboard that  
lets you see both magnitude of sales and ranking for  
your top products broken down by virtually any demo-  
graphic, revealing opportunities that you might other-  
wise miss.  
Specifics  
• You need to show the top 20 products sorted by sales.  
• You want to see both the ranking and the magni-  
tude of sales; that is, you need to be able to see  
easily just how much greater the sales are for one  
product than for another.  
• You need to see how the rankings change when  
you look at sales across different dimensions—for  
example, region, customer segment, gender, and  
so on.  
elated Scenarios  
• You conduct a survey asking people a check-all-that-  
apply question and want to see which things are  
selected most often, ranked by different categories.  
• You ask people to indicate their preference for  
political candidates and want to see how prefer-  
ences differ by gender, age, and location.  
• You want to compare the popularity of different  
music groups by country, age, and category.  
ow People Use the ashboard  
A user is first presented with a sorted list of the top  
20 products by sales, as shown in Figure 22.1.  
Selecting a product then shows how that product  
ranks within the selected category, in this case cus-  
tomer segment. \(See Figure 22.2.\)  
In Figure 22.2, we can see that the Whirlpool  
Upright Freezer ranks fourth overall but is ranked  
seventh among consumers, first within corpor-  
ate, and sixth within small office; it isn’t in the  
top 20 in small business. The drop-down menu  
allows users to compare ranking among different  
dimensions. F 22.1 Top 20 products by sales overall.  
F 22.2 four customer segments.  
Selecting the Whirlpool Upright Freezer shows its ranking and sales magnitude across 250 Chapter 22 Showing ank and Magnitude  
F 22.3 in the top 20 in the West.  
The selected product ranks 14th in the Central region, first in the East, and fourth in the South. It is not  
In Figure 22.3, we see how the Whirlpool Upright  
Freezer ranks among different regions.  
Why his Works  
his pproach Is ery ersatile  
This approach works for virtually anything that you  
want to rank. Consider how this approach works with  
survey data. In Figure 22.4, we see the overall results  
to the survey question “As a doctor, indicate what  
health indicators you measure yourself; check all that  
apply,” as well as the breakdown by generation for a  
selected response. F 22.4 Traditionalists.  
Breathing is ranked fourth overall with 55 percent but is ranked first with 80 percent among 252 Chapter 22 Showing ank and Magnitude  
The differences really pop out when viewing by genera-  
tion, as Traditionalists rank breathing first with 80 percent  
while Baby Boomers rank it fourth with only 45 percent.  
Figure 22.5 shows another example where we rank  
employee performance overall and by six different  
attributes.  
Here we see that Leonardo’s overall ranking is sixth,  
but his rankings and scores vary widely among the  
different attributes.  
F 22.5 Overall employee ranking and ranking for particular attributes. Why This Works 253  
he Bars Show Magnitude  
The bars make it easy to see just how much larger or  
smaller a particular product’s sales are compared to  
another product. Indeed, even without showing mark  
labels \(i.e., numbers next to the bars\), in Figure 22.6, we  
can see that the sales for the top product is a little more  
than twice the sales for the seventh-ranked product.  
F 22.6 The bars make it easy to see just how much larger one product’s sales are compared to another product’s.  
Here we see that the GE Profile Refrigerator’s sales are more than twice those of the Sharp AL-1530CS Digital Copier. 254 Chapter 22 Showing ank and Magnitude  
nother pproach\:  Bump Chart  
Another popular way to show ranking of individual  
products over time or across different dimensions is  
with a bump chart, as shown in Figure 22.7.  
This is certainly a compelling visualization, but the  
ranking circles show us rank only, not magnitude.  
There’s no way to tell just how much larger or smaller  
one product is than another.  
F 22.7 Bump chart showing the ranking of the selected product over time. Another Approach\: A Bump Chart 255  
F 22.8 over time.  
Source\: From kenandavis.com.  
Highlighting a team in the legend, in this case Everton, shows that team’s position  
If magnitude isn’t important, then a bump chart is an  
excellent choice. Consider Kenan Davis’s terrific  
dashboard in Figure 22.8, which shows what place  
a team came in over time in the Premier League  
from 2012 to 2013.  
To interact with the dashboard, see www.kenandavis.  
com/projects/a\_season\_visualized/ or http\://tinyurl.  
com/gougppl.  
One thing to note with both ranked bars and bump  
charts\: You cannot show all the products, teams, issues,  
and so on at the same time. Trying to do so would pre-  
sent users with an impossible-to-parse assortment of  
bars and lines. \(See Figures 22.9 and 22.10.\)  
In both cases, to make the charts usable, you either  
need to select an item and take a screen capture of  
the state of the visualization or need to offer a dash-  
board that has the requisite interactivity. F 22.9 An impossible-to-parse collection of bars.  
F 22.10 Source\: Statto.com  
A bump chart with everything showing is just a mass of visual spaghetti. uthor Commentary  
NDY\: When I first saw this dashboard, I thought,  
Well, it doesn’t do much, does it? Over time,  
however, I came to realize I’d fallen into a trap\:  
expecting dashboards to do everything. This  
dashboard answers two questions\: what’s the  
overall rank of a product and how does that  
product rank in four regions. If that’s all you need  
to know, then there’s no need to add anything else.  
After people explore this dashboard to find the  
product information they need, they might be left  
asking why a certain product is ranked high or low.  
A poorly designed dashboard might try to pro-  
vide answers to all potential questions on the one  
Author Commentary 257  
dashboard. The end result might be chaotic. Maybe  
the answers can be found in another dashboard. If  
not in another dashboard, the users should have  
access to the underlying data so they can find their  
own ad hoc answers to unanticipated questions. \(See  
Chapter 36.\)  
teve\: I came up with what I think is a good addition  
to the dashboard. Because there’s no common base-  
line it’s hard to compare sales in Corporate \(\$107,312\)  
with those of Consumer and Home Office \(\$43,054  
and \$56,126 respectively. See Figure 22.2.\)  
We can alleviate this difficulty by adding an additional  
chart that shows how sales for the selected product  
stacks up among the segments \(See Figure 22.11.\)  
F 22.11 The additional chart allows us to easily compare sales across segments as it’s easy to see that the bar  
for Corporate is about twice as long as the bar for Home Office. Chapter 23  
# Measuring Claims across  
# Multiple Measures and  
imensions  
Workers’ compensation dashboard.  
Dashboard designer\: Jonathan Effgen  
Organization\: CoEnterprise \(http\://www.coenterprise.com\)  
258 260 Chapter 23 Measuring Claims across Multiple Measures and imensions  
Scenario  
Big Picture  
You work for a very large multinational conglomerate  
and are tasked with understanding workers’ compen-  
sation injury claims occurring in the United States. You  
need to grasp both safety and cost issues.  
The data is overwhelming. Even a simple question,  
such as “Where do the most injury claims occur?,”  
becomes two-pronged, as it can be answered by both  
where in the country and where on the human body  
most injuries occur.  
There are four major metrics to understand—\(1\) num-  
ber of cases, \(2\) claim amount, \(3\) the average claim  
amount, and \(4\) the average recovery time—and there  
are at least a half dozen ways you want to cut the data,  
including where on the body, where in the country,  
what type of injury \(e.g., laceration versus strain\), and  
when during the year the claims were filed. You decide  
to build a single, exploratory dashboard that helps  
you and others get a handle on the data.  
Specifics  
You need to\:  
• See and understand workers’ compensation data  
by four key performance metrics\:  
a. the total dollar amount incurred,  
b. the average dollar amount incurred,  
c. the number of cases, and  
d. the average recovery time \(in weeks\).  
• Know when during the year these claims were  
filed.  
• Know where on the body the injuries occurred.  
• See how recovery times are bunched \(i.e., for each  
key metric, you need to know how many claims  
and dollars involved a recovery time of one week,  
two weeks, three weeks, etc.\).  
• See how the charts change when you filter the data  
by a particular region of the country, region of the  
body, month of the year, and industry group.  
elated Scenarios  
You need to\:  
• Look further into the nature, cause, and severity  
of sports injuries and how long they keep athletes  
on the sidelines.  
• Look into injuries and illnesses suffered by patients  
at a particular hospital or medical clinic.  
• Analyze data on claims made by clients of an insur-  
ance company, which could, among other things,  
entail breaking data down by geographic region,  
type of claim, and amount claimed.  
• Analyze maintenance and accident data for a rental  
car company that maintains a large fleet of cars.  
ow People Use the ashboard  
Change Key Performance  
Indicators on emand  
A drop-down menu at the top of the dashboard allows  
the user to select which of the four metrics to display.  
\(See Figure 23.1.\)  
For example, instead of seeing amount incurred, the  
user may instead want to explore the number of cases.  
This will change all of the accompanying visualiza-  
tions. Figure 23.2 shows the effect of changing the key  
performance indicator \(KPI\) from “Amount Incurred”  
to “\# of Cases” on the region bar chart. ow People se the ashboard 261  
F 23.1 Drop-down menu allows you to select which metric to explore throughout the dashboard.  
F 23.2 Amount incurred broken down by region compared with number of cases broken down by region.  
F 23.3 The decorative KPI strip is also a filter. Selecting an industry group \(e.g., agriculture, construction, etc.\)  
will filter all of the charts on the dashboard by the selection.  
ilter by Industry  
The decorative KPI strip along the top of the dash-  
board is also a filter that allows the user to select  
an industry group. \(See Figure 23.3.\) Selecting an  
industry group will filter all of the charts on the dash-  
board to show results only for the selected group.  
verything Is a ilter  
Clicking any part of any chart filters the other charts  
by whatever the user selects. This allows the user to  
freely explore the dashboard while looking for inter-  
esting patterns and relationships. 262 Chapter 23 Measuring Claims across Multiple Measures and imensions  
Consider the body map, gender, and injury bar charts.  
\(See Figure 23.4.\) On the left, you can see what they  
look like unclicked. On the right, is the effect of click-  
ing the left hand.  
Note  
his decorative filter strip \(Figure 23.3\) was  
a source of a lot of discussion among the  
authors and the dashboard designer. See  
the “Author Commentary” at the end of the  
chapter for a summary of those discussions.  
F 23.4 top-10 injuries charts.  
Comparison of nothing selected and left hand selected. Notice the difference in the gender and Why This Works 263  
overing over Marks eveals  
More Information  
Hovering over a mark shows details about a partic-  
ular data point. Figure 23.5 shows a summary of all  
four KPIs for March.  
Why his Works  
Uncluttered ayout espite Many ifferent  
Charts  
There are eight different charts on this dashboard—  
nine if you count the industry group filter strip as a  
chart. \(See Figure 23.6.\)  
F 23.5 Hovering over a mark shows details for  
that mark, in this case all four KPIs for March.  
F 23.6 The dashboard contains nine different charts. 264 Chapter 23 Measuring Claims across Multiple Measures and imensions  
hading and white space  
Shading and white space, used subtly,  
create distinct zones on dashboards.  
F 23.7 Very light gray lines help separate the different industry groups without competing for attention.  
The layout is relatively uncluttered \(considering the  
dashboard displays nine distinct charts\), and it is easy  
to see the different areas despite there being no line  
to separate them.  
functions as both a control and a label indicating what  
metric is being displayed. \(See Figure 23.1.\)  
he ayout Is asy to xplore and iscover  
Interesting acts  
This dashboard begs for exploration. There are so  
many different facets to explore, and users can see  
results instantly when they click on different marks.  
As we see in Figure 23.8, clicking Midwest on the  
Regional Analysis chart shows a radically different pro-  
file for when claims occurred \(there was a big spike  
in February\) and on what part of the body the inju-  
ries were located \(the greatest percentage was on  
the head\). The figure also shows a much larger per-  
centage of women filing claims \(48% for the Midwest  
versus 40% overall\).  
Indeed, the only lines are the faint gray rules sepa-  
rating the industry groups in the filter strip along the  
top. \(See Figure 23.7.\)  
he Menu to Change the KPI Is ront  
and Center  
The user doesn’t need to hunt to find the control  
that changes the KPIs; it’s directly below the title and  
F 23.8 Selecting Midwest reveals very different results for incurred amounts by month, body location, and gender. Author Commentary 265  
F 23.9 Gender icons placed atop a bar chart  
make the dashboard less stark but do not sacrifice the  
ease of comparison.  
Color Is Used Sparingly and Intelligently  
Besides the KPI indicators along the top, the dash-  
board designer uses colors only for the geographic  
regions and the body heat map. As there are so many  
charts competing for our attention, this sparing use  
of color is very welcome.  
ice Use of ender Icons  
The gender icons \(see Figure 23.9\) are clear and  
engaging without being distracting. Indeed, the  
designer eschewed making the icons themselves  
larger or smaller based on magnitude and instead  
placed them on an easy-to-compare bar chart.  
uthor Commentary  
teve\: We refer to this as the kitchen sink dashboard  
as there are nine different charts and four different  
KPIs yielding 36 different combinations. I particu-  
larly like being able to change the KPI on the fly  
using the menu at the top of the screen. This dash-  
board also whetted my appetite to know even more  
\(e.g., Why the drop in March? In what industries do  
women file more claims than men?, etc.\), indicating  
the designers got me very engaged with the data.  
My biggest concern is over the KPI strip along the top.  
When I asked the dashboard designer about this, he  
told me that this was essentially a requirement from  
the client. People using the dashboard already knew  
the industry group comparisons inside and out and  
wanted an icon-driven filter that, in their eyes, made  
the dashboard a little less sterile.  
Sometimes there’s nothing you can do when the  
client insists on having something a particular way.  
But I still worry that some important insights remain  
buried in the current rendering. Let me explain.  
Figure 23.10 shows a segment of the KPI chart.  
F 23.10 KPI strip makes it hard to compare values across industry groups. 266 Chapter 23 Measuring Claims across Multiple Measures and imensions  
F 23.11 Claim amounts for different industry groups showing percentage change from the previous year.  
Figure 23.11 shows the same information rendered  
as a bar chart.  
Whoa! Now I can really see that claim amounts for  
manufacturing are more than twice as large as those  
for wholesale trade and that amounts for construction  
are way up compared with the previous year.  
JFF\: We went through a number of iterations on  
this dashboard. We had several calls with the  
designers and, as a team, came up with a few  
suggestions that would improve the dashboard.  
As the weeks progressed, all three of us worked  
to improve it even more. As Steve mentioned, it  
was referred to as the kitchen sink dashboard, but  
as we worked through the process, we trimmed  
it down quite a bit. Even with a lot of pruning,  
the dashboard has lots of details with a number  
of charts, a geographic map, and a human body  
map as well as industry group icons. Yet the final  
design doesn’t feel as cluttered as previous ver-  
sions. As packed as this dashboard is, it still has  
some space to breathe.  
As we discuss in this chapter, there are not many  
lines on this dashboard. This is particularly impor-  
tant because there are so many elements vying  
for attention. Borders and lines, especially verti-  
cal lines, can really create a feeling of clutter on  
dashboards. Chapter 24  
# Showing Churn or Turnover  
Subscriber churn analysis dashboard.  
Dashboard designer\: Steve Wexler  
Organization\: Data Revelations  
268 270 Chapter 24 Showing Churn or Turnover  
Scenario  
Big Picture  
Your company has just launched a new monthly sub-  
scriber service. You need to get a handle on how sub-  
scriptions are growing over time, both overall and in  
different divisions. Subscribers can cancel at any time  
so you need to see for every month how many new  
subscribers you have gained and how many you have  
lost. You expect there to be some attrition, but you  
need to know when and where losses exceed gains  
as well as where gains occurred and when gains are  
particularly strong.  
Specifics  
• You need to be able to see fluctuations in subscrip-  
tions over time.  
• You need to compare overall gains and losses for  
each division.  
• You need to easily see for each division when losses  
exceed gains.  
• You need to be able to see the details for each month.  
• You need to see which months were worst and  
which were best, both overall and for a particular  
division.  
elated Scenarios  
• You manage human resources for a large com-  
pany with offices in many countries and need  
to monitor employee churn by location and  
department.  
• You manage a software development project and  
need to monitor assignments as they go through  
different stages of the process.  
• You monitor unemployment statistics for the gov-  
ernment and need to show employment churn by  
industry and state.  
Understanding the Waterfall Chart  
Before delving into the particulars of how a user would  
interact with the dashboard, let’s first explore how the  
waterfall chart in Figure 24.1 works.  
Table 24.1 presents the raw data that drives this par-  
ticular visualization.  
Here’s how to interpret the numbers.  
• In January, when the company opened its doors,  
it welcomed 210 subscribers.  
• In February, the company gained 245 subscrib-  
ers but lost 150 subscribers for a net of 95. Add  
that 95 to the previous month, and at the end  
of February we had a running total of 305 active  
subscribers.  
• In March, the company added 270 subscribers and  
lost 87 for a net of 183 for the month. Adding that  
to the previous 305 yields a total of 488 by the end  
of March.  
• The grand total at the bottom indicates that  
over the course of the entire year, the company  
gained 3,028 subscribers and lost 1,544 for a  
net of 1,484. Scenario 271  
F 24.1 divisions combined.  
Waterfall chart portion of the churn dashboard showing activity for all  
TB 24.1 Raw data for driving the subscriber churn dashboard. 272 Chapter 24 Showing Churn or Turnover  
With this in mind, let’s see how to read first three  
months of the waterfall chart. In Figure 24.2, we see that  
we gained 210 subscribers and didn’t lose anything,  
leaving us with a total of 210 at the end of the month.  
Figure 24.4 shows that in March, we start at 305, gain  
270, but lose 87, leaving us with a total of 488 at the  
end of the month \(305 + 270 – 87 = 488\).  
F 24.2 January portion of waterfall chart.  
In Figure 24.3, we start at 210 \(where we left off at the  
end of January\) and gain 245 subscribers but lose 150,  
leaving us with a total of 305 at the end of February  
\(210 from January and 95 from February\).  
F 24.4 March picks up where February leaves off.  
ow People Use the ashboard  
Although there are neither controls to select nor slid-  
ers to move, clicking elements in one visualization  
on the dashboard will highlight and/or filter items  
in other portions of the dashboard. For example,  
in Figure 24.5, we see that selecting East from the  
summary bar chart filters and/or highlights the other  
charts on the dashboard to only show results from  
the East.  
F 24.3 February picks up where January leaves off. Why This Works 273  
F 24.5 the dashboard.  
Selecting a division on one part of the dashboard filters and/or highlights that division in other parts of  
Likewise, selecting a month highlights that month  
throughout the dashboard. \(See Figure 24.6.\)  
Why his Works  
Big Picture and etails  
Three main chart areas present different levels of  
detail about the data. 274 Chapter 24 Showing Churn or Turnover  
F 24.6 Selecting a month in one chart highlights that month in all the other charts on the dashboard.The Big Picture  
The top left area shows subscriber activity by month.  
In Figure 24.7, we can see that\: \(1\) we had an over-  
all net gain of 1,484 subscribers, \(2\) our best month  
for gains was April, \(3\) our worst month for losses  
was July, and \(4\) net growth was flat between June  
and July.  
Easy Comparison of the Three Divisions  
The Net Subscriber area in the bottom left allows  
for easy comparison among the three divisions \(see  
Figure 24.8\). It is easy to see that the East Division,  
despite gaining 1,000 subscribers for the year, also  
had by far the biggest loss \(1\). We can also see from  
the smooth trend line that the West division never  
had a month where losses exceeded gains \(2\). Why This Works 275  
F 24.7 The chart in the upper left of the dashboard shows the big-picture trends.  
F 24.8 The chart on the lower left of the dashboard compares performance for the three divisions also note  
how the orange dots make it easy to see where losses were greater than gains. 276 Chapter 24 Showing Churn or Turnover  
Heat Map Shows Details  
The heat map on the right of the dashboard \(also  
called a “highlight table”\) makes it easy to see gains,  
losses, net, and running totals for each division and  
for every month. \(See Figure 24.9.\)  
he eat Maps Provide icher Insights than  
 ext  ables  
Many people with a finance background often ask  
for a text table so they can “see the numbers.” The  
heat map goes one better in that it provides the  
numeric details and accentuates the outliers, some-  
thing that you can’t see easily with a text table. \(See  
Figure 24.10.\)  
The text table presents a sea of numbers, and the  
reader has to work hard to make comparisons. The  
heat map uses color coding to make that compari-  
son much easier.  
Cross tabs vs. highlight tables  
When you need to provide a cross tab,  
consider using a highlight table instead  
of a text table\: The color coding of the  
highlight table will make comparing numbers  
easier.  
F 24.9 Color-coded heat map makes it easy to  
see details and performance outliers. Note that the  
colors are based on the main color legend where gray  
represents gains, red represents losses, and the blue  
shows the running net.  
ots Show Which Months Present Problems  
The dots make it easy to see in which months and  
in which divisions losses exceeded gains. \(See  
Figure 24.8.\) ther se Cases and Approaches 277  
F 24.10 areas pop out.  
A text table \(left\) compared to a heat map \(right\). Note that the heat map makes problem  
Sparkbars llow asy Comparison of ains  
and osses across Months  
The sparkbar chart in the upper left corner of the  
dashboard makes it easy to compare gains and losses  
for each month and highlights the month with the  
greatest gain and the month with the greatest loss.  
\(See Figure 24.11.\)  
ction ilters Make It asy to  
ocus on ne ivision  
Selecting a region in the Division chart or Details  
chart filters the waterfall and sparkbar so you can  
better understand churn within a particular division.  
Figure 24.12 shows what happens when a user selects  
the East Division.  
The waterfall chart shows us just how volatile sub-  
scriber activity was in the East Division.  
F 24.11 Even without a value axis, it’s easy to see  
which months had big and small gains and which had  
big and small losses.  
ther Use Cases and pproaches  
With service subscribers, the goal is to gain and keep  
subscribers. Airport flow is another scenario that can  
be shown using similar techniques, but the goal is  
very different. You want the number of planes leav-  
ing the airport to equal the number of planes com-  
ing into the airport. Indeed, at any given hour, the  
goal is net zero. F 24.12 Selecting East in the bottom chart filters the other charts by that selection. Given that this goal is very different from the goal for  
subscriber growth, the waterfall chart we presented  
in Figure 24.2 won’t work well. One possible solution  
is shown in Figure 24.13.  
Here we see the inbound and outbound flights pre-  
sented in very muted colors, as it is the running net  
\(the number of planes sitting on the tarmac\), which  
ther se Cases and Approaches 279  
is most important. The goal is to make it so that as  
one plane lands, another takes off. We want the inner  
bars to be as close to zero as possible.  
If the number of planes on the ground meets or  
exceeds 20, the bar color changes to orange. We  
can see that McGinty Airport was in an overflow state  
at 11 a.m., noon, 1 p.m., and 3 p.m.  
F 24.13 Inbound, outbound, and running net for two airports. 280 Chapter 24 Showing Churn or Turnover  
uthor Commentary  
teve\: I had no idea that visualizing turnover/churn  
would be so involved. The combination of different  
use cases and observers’ preferences for different  
visualizations really surprised me. I went through  
at least 10 different approaches to the core water-  
fall chart and at least 30 different iterations of the  
dashboard as a whole.  
One thing that surprised me was the popularity  
of a radical alternative to the waterfall chart, which  
I called the “mountain chart.” \(See Figure 24.14.\)  
A number of people took a shine to this chart, stat-  
ing that it was particularly easy to see where both  
the bad things \(red\) and the good things \(gray\)  
peaked and where red exceeded gray. Yes, there  
was a little bit of a disconnect with the loss values  
showing as positive, but those who liked this chart  
were able to adjust to this quickly.  
The biggest problem was that the area chart por-  
tion \(the mountains\) uses the axis values on the left  
and the line chart showing net subscribers uses the  
axis values on the right. Since a lot of people found  
using a dual axis confusing—and because a lot of  
people just didn’t like the chart at all—I elected to  
go with the waterfall chart.  
F 24.14 Mountain charts take a completely different approach to showing churn. I also want to stress the importance of asking other  
people to review. Both Andy and Jeff gave me a  
lot of pushback on early prototypes. Jeff’s recoiling  
at the Details text table was the catalyst for using  
a heat map instead.  
Jeff\: I much prefer the waterfall chart over other vari-  
ations of this dashboard. It might be that people  
in banking and finance are more used to reading  
waterfall charts, but everyone I asked to review this  
chart also liked the waterfall chart the best. The  
alternative makes it difficult to see the area charts  
on top of each other, so it’s really just the peaks  
that stand out. The waterfall fall chart better visual-  
izes the ongoing increase and decrease over time.  
The dots on the end of the division bars are also a  
little big to me. \(See Figure 24.8.\) Steve wanted to  
keep the labels in the circles, so it would be hard to  
make them too small. I would have made the dots  
smaller and moved the labels underneath the circles.  
Author Commentary 281  
I really love the use of color throughout this dash-  
board. The color added to the text table really  
helps to highlight the data and provides additional  
context at-a-glance to the numbers.  
NDY\: First appearances matter; they leave lasting  
impressions when you reflect on your experience  
of using things. In The Design of Everyday Things,  
Don Norman calls these the visceral responses.  
This applies to dashboards too. My first response  
when looking at this dashboard was very positive.  
The color, layout, and use of font make looking  
at this dashboard a pleasing experience. I don’t  
feel like I am fighting to interpret any part of the  
dashboard.  
It took me some time to get my head around this  
style of waterfall chart. However, the effort of under-  
standing unfamiliar or complex charts is often time  
well spent. This chart contains a lot of detail, some  
of which is only apparent with familiarity. Chapter 25  
# Showing Actual versus  
Potential tilization  
Utilization rollup dashboard.  
Dashboard designer\: Vanessa Edwards  
Organization\: Creative Performance Inc. \(www.creativelyperform.com\)  
282 284 Chapter 25 Showing Actual versus Potential tilization  
Scenario  
Big Picture  
You are the principal, chief operating officer, chief  
financial officer, or director of client services for a  
marketing agency \(advertising, integrated, digital,  
design, etc.\), trying to understand your agency’s  
current performance in billable hours and fee  
income.  
Fee income \(also known as labor income\) is the main  
source of revenue for most agencies and is directly  
linked to billable hours. Understanding where time is  
being spent across the agency is critical to managing  
staffing and to overall agency profitability. As direct  
labor cost is often the largest expense agencies have,  
to manage profitability effectively, you must be able  
to monitor labor costs in relation to your fee income  
and fee targets.  
Specifics  
You need to\:  
• Understand how time entry is spent across the  
agency including\:  
a. b. c. billable time on client projects,  
nonbillable time generating new business,  
nonbillable time spent on internal agency proj-  
ects, and  
d. nonbillable time spent on internal agency  
administration.  
• See how each department is performing in relation  
to its target utilization.  
• See if a department costs you more than its poten-  
tial fee income and what you could be making in  
additional fee income if that department hit its tar-  
get utilization or a variation of that target.  
• See the breakdown of nonbillable time in order to  
identify the potential cause of low utilization.  
elated Scenarios  
• You work in a law firm and need to compare billable  
hours and potential billable hours across depart-  
ments and by individual attorneys and support  
staff. \(Indeed, this would work for virtually any orga-  
nization that bills on an hourly basis; e.g., software  
development, auto repairs, etc.\)  
• You work at a restaurant and need to track employee  
hours as well as monitor how resources \(ovens, air  
conditioning\) and food are utilized/underutilized.  
ow People Use the ashboard  
Key Performance Indicators  
The numbers at the top of the dashboard represent  
the agency’s current fees as well as the additional  
potential fees that could be made if the agency met  
its target. \(See Figure 25.1.\)  
F 25.1 Key metrics appear at the top of the dashboard along with a bullet chart. Ps as a color legend  
Key performance indicators can be used  
as a color legend. Here blue indicates  
current fees and green indicates potential  
fees. This color scheme is used throughout  
the dashboard.  
The numbers at the top of the dashboard represent  
the agency’s current fees as well as the additional  
potential fees that could be made if the agency met  
its target. In addition, the numbers show how over-  
staffed an agency is based on its current workload as  
well as the amount of gross billable dollars or oppor-  
tunity cost an agency is spending both on itself and  
on generating new business.  
• Fees = Total amount of billable work that could be  
converted into labor income  
• Potential = Additional labor income that could be  
generated if billable targets are met  
• New Biz + Opportunity = Gross rates of billable  
employees spent generating new business  
• Internal Projects = Gross rate of billable employ-  
ees spent on internal agency projects  
• FTE \[Full-Time Equivalent\] Overstaffed = How over-  
staffed \(or “heavy”\) your team is  
The utilization bullet chart is a visual quick reference  
that immediately informs the viewer how well the  
organization is doing toward achieving its utilization  
goals. The blue line represents current agency utili-  
zation, which is the total percentage of billable time  
logged across the agency, while the green vertical  
ow People se the ashboard 285  
line represents the agency’s utilization potential  
\(or a variation of that potential, depending on the  
drop-down selection in Figure 25.5\). The difference  
between these lines is the agency’s utilization gap  
and corresponds to the \$3.4M potential key perfor-  
mance indicator \(KPI; the number in green at the top  
of the dashboard\).  
You might be wondering why the green bar isn’t set  
to 100 percent. That is because no agency is going  
to be able to bill its workforce at 100 percent utiliza-  
tion, as it is simply impossible for every hour worked  
to be billable to a client.1  
 arget versus Billable versus onbillable  
Percentages  
Figure 25.2 shows how each department is perform-  
ing against utilization targets. It displays both the  
billable \(blue\) and nonbillable \(gray\) percentage of  
time for each department. Behind the stacked bars  
are wider, lightly colored target bars, which make it  
easy to see which blue bars are above or below target,  
and by how much. The red dots quickly identify the  
departments that are below their utilization targets.  
In the figure, you see that the Creative Department  
is above target while the next three departments  
are below target. Note that Operations, Executive/  
Admin, and New Biz do not have targets because they  
are considered “overhead departments” and often  
don’t log all their time.  
1The “magic number” is based on a labor budget per employee  
put together by the finance team. Finance sets the target for each  
employee and then applies a write-off factor to verify that the company  
can still meet its profitability goals, even considering an agency’s  
overhead. 286 Chapter 25 Showing Actual versus Potential tilization  
F 25.2 Comparing billable percentages with a target and showing overall hours.  
This utilization calculation is based on a 40-hour work-  
week, represented by the dotted vertical line, so it  
is possible for the billable and nonbillable percent-  
ages to be greater than 100 percent. We can see at  
a glance which departments are averaging more or  
less than a 40-hour workweek.  
onbillable versus Billable ours  
Figure 25.3 shows the actual number of nonbillable  
versus billable hours for each department. The com-  
mon baseline makes it easy to see which departments  
are performing the most and the least number of bill-  
able hours.  
F 25.3 Nonbillable bars go to the left; billable hours go to the right, creating a common baseline for comparison. ow People se the ashboard 287  
F 25.4 Comparing costs, fees, and potential fees.  
Cost, ees, Potential  
Figure 25.4 allows us to quickly see if the cost of labor  
is greater than or less than billable fees. Labor cost is  
represented by the lightly shaded bars, and the cur-  
rent utilization in fees is represented by the blue bars.  
The half-filled red dot shows which departments are  
producing fees that fall short of costs. The dashboard  
designer elected to use a half-filled dot to signify that  
costs were not being covered versus a full dot, which  
typically shouts “There’s a problem here” but doesn’t  
specify the exact nature of the problem.  
The green bars represent this additional potential fee  
income that a department could be making. You can  
easily see the ratio of cost to revenue that you could  
have if the department’s targets were met.  
With the “Show Potential at” drop-down box in Fig-  
ure 25.5, you can also see the ratio of labor cost to the  
total fees you could be producing if the department  
hit its utilization target or a variation of that target.  
F 25.5 Drop-down menu allows you to see  
additional “what-if” revenue at different target rates.  
etails  
Figure 25.6 shows where all of the nonbillable time  
across the agency is being spent. Although this dash-  
board cannot tell you why this time is being spent  
here, it can point leadership teams in the right direc-  
tion when they are trying to understand why billable  
targets are not being met. Maybe leadership has  
approved too many internal projects or the agency  
is working on too many new business proposals with 288 Chapter 25 Showing Actual versus Potential tilization  
F 25.6 Details about each department allow leadership to see why goals are not being met.  
a low win rate. It is also possible that the agency just  
has too many employees for the current amount of  
billable work. Below each of the reports, you can see  
the actual labor cost \(i.e., what employees are being  
paid to perform this nonbillable work\).  
Utilization rend  
Utilization trend allows the dashboard user to com-  
pare actual versus potential billable percentage for  
the current year or to compare performance this year  
with the previous year. The default is to see how bill-  
able percentage is tracking against the target over  
time. \(See Figure 25.7.\)  
Here we can see that theorganization did much better in  
the second half of the year with respect to hitting its tar-  
get. Note that in this example, we are showing a full year’s  
worth of data. If we only had six weeks of data, the dash-  
board would show a weekly rather than a monthly view.  
his  ear versus ast  ear  
A question that often comes up when looking at any  
trend data is whether you are performing better this  
year than you did last year. The utilization trend chart  
contains a drop-down menu that allows you to switch  
between the current view and one that compares bill-  
able percentages for this year with the previous year.  
\(See Figure 25.8.\)  
F 25.7 versus goal over time.  
Comparing actual billable percentage F 25.8 Comparing this year with last year.  
ow People se the ashboard 289  
Here we can see that billable percentage for the cur-  
rent year \(the dark blue line\) is up 22 percent over-  
all for the entire year and performed better in every  
month except for March. We can also see that the  
peaks and valleys for 2015 parallel those for 2014, sug-  
gesting that metrics are cyclical, which should help  
predict trends for future years.  
ow re Individual epartments Performing  
over ime?  
By default, the numbers along the top of the dash-  
board and the utilization trend show results for the  
entire organization. You can also focus on individual  
departments, as shown in Figure 25.9.  
F 25.9 Clicking a department will filter the KPIs and the utilization trend chart by the selected department. 290 Chapter 25 Showing Actual versus Potential tilization  
Why his Works  
Problem reas  
The dashboard shows 50 different measures, but the  
KPI dots make it easy to focus on the areas that are  
performing poorly. \(See Figure 25.10.\)  
Here we can immediately see that\: \(1\) potential fees  
compared to actual fees is exceedingly high; \(2\) the  
organization is grossly overstaffed; \(3\) three depart-  
ments are below target; and \(4\) three departments  
are not covering costs.  
Big Picture and Color egend  
The numbers at the top of the screen in Figure 25.11  
show the organization’s performance along five  
key performance indicators and serve as a color  
legend.  
F 25.10 KPI dots make it easy to see which areas are performing poorly. Why This Works 291  
F 25.11 Numbers at the top of the screen show key metrics and define color usage throughout the dashboard.  
Sparing and Consistent Use of Color  
The designer strove to keep the dashboard as unclut-  
tered as possible and managed to avoid having a  
color legend altogether by using the color in chart  
titles. \(See Figure 25.12.\)  
Bars llow asy Comparison  
There’s a lot of information encoded in Figure 25.13.  
Notice that we stack the blue and gray bars to see,  
overall, which departments are above or below the  
100 percent mark, with account management being  
the highest at 105 percent and operations being the  
lowest at 4 percent.  
The designer placed the blue bars along the baseline  
so we can easily sort and compare this metric. Even  
if we removed the numeric labels, it would be easy  
to see that the blue bar for Creative is roughly twice  
as long as the blue bar for Technology.  
It’s important to note that while the compari-  
son of blue bars is easy \(because of the common  
baseline\), a comparison of the gray bars is not.  
Fortunately, comparing the blue bars is of much  
greater importance, hence its positioning along  
the baseline.  
Behind the stacked bars are wider, lightly colored tar-  
get bars, making it easy to see which blue bars are  
above or below target and by how much.  
By arranging the bars intelligently and using color  
and a reference line, we can answer four questions  
in one compact chart\:  
1\. Which department is working the most hours?  
\(Account Management at 105 percent.\)  
2\. Which department has the highest percentage  
of billable hours? \(Creative with 53 percent.\)  
F 25.12 No need for a color legend as the colors are defined in the title. 292 Chapter 25 Showing Actual versus Potential tilization  
F 25.13 Lots of bars, intelligently arranged.  
3\. Which department is comfortably above target?  
\(Creative.\)  
4\. Which departments are considerably below tar-  
get? \(Project Management, which is at around  
50 percent of target, and Technology, which is  
about one-third of the way to hitting its target\).  
If you need to know the exact numbers, you can hover  
over a mark, as shown in Figure 25.14.  
You may not even need the hover functionality as peo-  
ple are very good at comparing the length of bars.  
F 25.14 provide details on demand with a pop-up.  
People really are good at comparing the length of bars using a common baseline, but you can F 25.15 Even at only 80 percent of the target, the  
organization is leaving a lot of fees on the table.  
rends and  ear-over- ear Comparison  
The utilization trends allow a quick toggle between  
showing actual versus target for this year and the  
actuals for this year when compared to the previous  
year. Both Figures 25.8 and 25.9 help users see if the  
organization is doing better or worse over time.  
What’s Being eft on the  able  
The stacked bar chart and what-if drop-down menu  
really drive home just how much money is being left  
on the table when the organization isn’t hitting its tar-  
gets. \(See Figure 25.15.\)  
The overarching goal of the dashboard is to change  
people’s behavior. The green bars are a loud wake-up  
Author Commentary 293  
call that says “Look what you could be doing if you  
got your act together!”  
uthor Commentary  
teve\: If we needed a case study to prove the util-  
ity of browsing through different scenarios on the  
book, this is it. This dashboard came into being  
after reviewing a half dozen dashboards already  
slated for the book, and we picked pieces from  
several of them to use here. For example, we bor-  
rowed the stacked bars from Chapter 20\: Com-  
plaints Dashboard; the large numeric KPIs are from  
Chapter 2\: Course Metrics Dashboard; the KPI dots  
are from the dashboard in Chapter 6\: Ranking by  
Now, Comparing with Then; and the actuals ver-  
sus year-over-year comparisons are from Chapter  
10\: Showing Year-to-Date and Year-over-Year at  
the Same Time.  
I’m looking forward to seeing a new iteration of the  
dashboard that provides a way to compare one’s  
performance with an industry average.  
Jeff\: As Steve mentioned, this dashboard repre-  
sents how we hope people will use this book. As  
with most of the dashboards in this book, there  
were many iterations, and it was fun to see the  
progression. Notice the use of color throughout  
the dashboard. There are only three colors \(blue,  
green, and gray\), and they are used carefully and  
consistently. Chapter 26  
ealth Care Provider  
# Productivity Monitoring  
The Provider Productivity report shows performance relative to key metrics.  
Dashboard Designer\: Jonathan Drummey, DataBlick  
Organization\: Southern Maine Health Care  
294 295 296 Chapter 26 ealth Care Provider Productivity Monitoring  
Scenario  
Big Picture  
You are a primary care physician. Your prime role is to  
care for people, but you need to do it with the highest  
possible efficiency. When you work with your manag-  
ers, dashboards like this one help to inform conver-  
sations about your efficiency levels. This is important  
for two reasons\:  
1\. The organizational cost for a primary care physi-  
cian is several hundred thousand dollars per year.  
This cost includes salaries for the provider and  
the necessary staff, office space, equipment, and  
so on. Southern Maine Health Care \(SMHC\) is a  
nonprofit organization with very tight margins in  
a state with one of the oldest populations in the  
United States. Therefore, it is necessary to moni-  
tor productivity and revenue closely.  
2\. Variation in practices leads to inefficient resource  
allocation. For example, you might not have  
enough patients. You might not be scheduling  
enough appointments. Each inefficiency increases  
cost.  
Specifics  
Factors for evaluating efficiencies include\:  
• How well are the health care providers performing?  
• Are they scheduling appointments efficiently?  
• Do they have the right number of patients?  
• Are their appointments the right length?  
elated Scenarios  
This dashboard shows six key metrics and provides  
guidance in any scenario where you track metrics over  
time, such as\:  
• monitoring employee performance,  
• assessing call center efficiency, and  
• gauging sales targets.  
ow People Use the ashboard  
Although the dashboard only has five charts and  
two tables, the data and measures are complex for  
the common layperson. Let’s break down each sec-  
tion and explain how we can identify areas in which  
Dr. Dolly Parkman1 from the town of Androscoggin  
can improve. It turns out she is an established  
provider whose appointments are too long.  
The top section of the dashboard \(see Figure 26.1\)  
provides vital contextual information needed to inter-  
pret the rest of the charts correctly.  
• Current FTE \(full-time equivalent\) is the employ-  
ment status, ranging from 0.5 FTE \(half time\) to  
1.0 FTE \(full time\).  
• Scheduling Efficiency shows how much of the pro-  
vider’s schedule is utilized. It excludes unavoidable  
cancellations and patients who don’t show up. The  
target is 100 percent.  
• Hire Date indicates when the provider started work-  
ing at SMHC.  
1 Note\: The names used in these dashboards are not the names of real people. ow People se the ashboard 297  
F 26.1 Contextual metrics needed to interpret the charts.  
Reading this, we can see that Parkman is a provider  
in the Androscoggin Family Practice with over  
two years of service at SMHC. She isn’t full time; she  
is 75 percent of an FTE. Her scheduling efficiency is  
at 100 percent, meaning she’s effectively fully booked  
each day.  
The next chart, Work Relative Value Units \(wRVU\),  
shown in Figure 26.2 for Parkman, is a common metric  
in the United States that is applied to all health care  
providers. It standardizes the value of the appoint-  
ments in that it allows the work of different physi-  
cians in different specialties \(e.g., internal medicine,  
family practice, surgeons, etc.\) to be aligned to the  
same scale based on a combination of time and acu-  
ity \(severity\).  
On the dashboard, wRVU is displayed in two ways.  
The dark blue line shows monthly totals, and a sin-  
gle metric label in the shaded area shows overall  
daily average. The light blue line in this and other  
charts shows targets, which are based on the national  
median of that measure. If the wRVU per month value  
is too far below target, then the health care system  
will be losing money.  
In Parkman’s case, the dark blue line shows that over  
the previous 12 months, she has improved but doesn’t  
seem to be able to reach the median; each month is  
a little low. Her average wRVU per day is 19.8 and is  
red, indicating that it too is low.  
The chart shows both the monthly wRVU and daily  
average because the monthly total is subject to fluc-  
tuation due to vacations, snow days, and so on. The  
daily average better reflects actual day-to-day work.  
The next chart, Encounters per Month, shows  
the number of patient visits to the provider.  
\(See Figure 26.3.\) This is displayed as a monthly  
total \(dark blue line\) and daily average \(label in  
the shaded area\), again with a target \(light blue  
line\) based on the national median and FTE  
adjusted.  
F 26.2 wRVU per month for Dolly Parkman.  
F 26.3 patient visits there were\).  
Encounters per month \(i.e., how many 298 Chapter 26 ealth Care Provider Productivity Monitoring  
Here we see that Parkman is also missing her  
appointment targets. Her average is only 14.3 a  
day compared to a national median of 18.5, and  
the line shows that she’s been below target every  
month. Seeing too few patients directly affects rev-  
enue, so Parkman and her office staff need to work  
to increase appointments.  
The next chart, wRVUs/Encounter \(see Figure 26.4\),  
shows the number of wRVUs divided by the number  
of encounters for each month. The average for the  
prior quarter \(1.47\) for the provider’s specialty is dis-  
played as a benchmark.  
Unlike the other charts, there is no reference line for  
this measure. At the time of writing, this is a new  
measure for the providers, and a target has not been  
established.  
For Parkman, we can see that while both the metrics  
are low, quality has been stable following a big dip in  
May 2015. The most recent month \(March 2016\) has  
seen a dip too, which is something to be monitored  
in future months.  
F 26.5 practitioner has\).  
Panel size \(i.e., the number of patients the  
“Panel Size” \(see Figure 26.5\) is the number of patients  
associated with the primary care physician. The target  
\(not shown on the dashboard\) is 1,600 for a full-time  
provider and is adjusted based on the FTE.  
Parkman is 0.75 FTE, so her panel size is lower \(1,200\).  
We can see that her panel is slightly over target, within  
acceptable range.  
Figure 26.6, Ratio of Billed Level 4 to Level 3 Encoun-  
ters, shows a key ratio. Patient visits \(encounters\)  
are coded according to the level of acuity, where  
Level 5 is most severe and Level 1 is least severe.  
F 26.4 quantity and acuity.  
wRVUs per encounter is a measure of  
F 26.6 Ratio of Level 4 to Level 3 encounters.  
This chart helps users understand if charges are being  
correctly attributed. The higher an encounter’s level, the higher its reim-  
bursement rate. If the ratio—the amount of Level 4  
and Level 3 visits—is too low, then it could indi-  
cate that providers are not properly documenting  
the acuity of their patients. If it is too high, it could  
indicate up-coding, assigning a higher level than  
a patient’s condition warrants, which is a form of  
medical fraud.  
At the time the screenshots were taken, the data was  
available only quarterly and no targets were set, so  
the family practice \(FP\) average is shown on the left  
as a comparison \(currently 0.93\). This measure is an  
explanatory factor for wRVU totals and wRVU per  
encounter. Parkman’s ratios were on the high side  
so even though her encounter totals were quite a  
bit below target in late 2015, her wRVU totals were  
close to target.  
Figure 26.7, New vs. Established Billed, shows the  
number and ratio of new patients visiting the prac-  
tice compared to the number of existing patients. The  
data ranges here can be quite large, ranging from a  
fraction of a percentage point for an established pro-  
vider with a full practice to a percentage increase of  
tenfold or more for a brand-new provider.  
F 26.7 New versus Established Billed patients  
shows the numbers of new and existing patients.  
ow People se the ashboard 299  
Parkman’s panel size is growing slowly. Since we know  
her panel size is a little above target anyway, there is  
no issue to track in this chart.  
What have we learned about Parkman? She is an estab-  
lished provider who does not have enough patient  
appointments, leading to missing targets for wRVU.  
This view makes it clear that the next step is to look at  
Parkman’s schedule in more detail. Improving office  
workflow and office setup, shortening appointment  
times, or altering the provider’s paperwork processes  
could address and help fix the problems shown in  
the dashboard.  
Let’s look at one more example to show how the  
dashboard can display other issues. \(See Figure 26.8.\)  
Harlan Palmyra is a provider in the Oxford Family Prac-  
tice and an employee of SMHC since September 2014.  
In this case, there are three areas of red on this dash-  
board where Palmyra misses targets\: \(1\) scheduling  
efficiency is only 86 percent; \(2\) average wRVU per day  
is 11.6, against a median of 25.5; and \(3\) encounters  
per day is 7.2, compared to a median of 18.6.  
On the wRVU per month and encounters per month  
line charts \(4 and 5\) we can see a rise a little over a  
year ago when Palmyra was in his first year. It’s leveled  
off since then, remaining consistently below target.  
The low scheduling efficiency of encounters per day  
might be the cause of Palmyra’s missed targets, but the  
dashboard shows the problem goes a little deeper than  
that. The panel size is at 938, or 67 percent of target  
\(6\), and that’s most likely why there’s so much empty  
space in the schedule and not enough encounters. 300 Chapter 26 ealth Care Provider Productivity Monitoring  
F 26.8 Harlan Palmyra is a provider with too few patients, causing several metrics to go red.  
Even more worrisome in this case is the New vs.  
Established Billed chart. In the most recent quar-  
ter, with data ending December 2015, Palmyra had  
only three new patients \(7\). That number needs to  
grow to get more patients into his practice and fill  
out his schedule.  
In conclusion, this provider has too few patients and  
is not attracting new ones. This situation would call  
for investigation of the provider’s patient experience  
scores to see if there were any issues with regard to  
reputation. Also, increasing advertising to promote  
availability for new patients could help. Why his Works  
Print-riendly esign  
SMHC calls this a “report” rather than a dashboard  
because it has not been designed for interactivity.  
The report is formatted for a landscape display and  
often is printed. Although we may aspire to having  
fully interactive, paperless work environments, many  
times this is not achievable. In cases such as health  
care, design-for-print is still vital.  
ppropriate  argets on eference ines  
The term “median” is used instead of “target” on  
Figure 26.9 because the idea is to communicate that  
the goal is to be as good as the national median.  
The medians are adjusted according to each physi-  
cian and his or her FTE level. Using the median allows  
providers to determine whether they are meeting  
national benchmarks or not.  
KPIs Stand ut  
You need to know if a metric is being missed. In  
this dashboard, the key KPIs are stated as num-  
bers. If they are below target, they are red. This is  
F 26.9 “Medians” are used rather than “targets.”  
Why This Works 301  
F 26.10 emphasize the data.  
Shading and white space used to  
a simple and effective way to emphasize the num-  
bers using preattentive attributes such as color. \(See  
Figures 26.9 and 26.10\)  
White Space and Shading  
The dashboard is designed so that there is ade-  
quate white space to allow the data to stand out  
and not be overwhelmed by complexity. \(See Fig-  
ure 26.10.\) Borders, lines, and shading were removed  
wherever possible to allow lines and numbers to  
pop out.  
The left-hand side of Figure 26.11 shows a sec-  
tion of the dashboard with no shading and with a  
y-axis that spreads to the full range of the measure.  
The right-hand side shows the shading used in the  
actual dashboard and the dynamically extended  
range. The shading provides a better visual indi-  
cator of the different sections of the dashboard,  
and the extended axis gives the data space “to  
breathe.” 302 Chapter 26 ealth Care Provider Productivity Monitoring  
F 26.11 Two versions of the charts\: with shading and dynamic axis on the right, without them on the left.  
hading and white space  
Shading and white space, used subtly,  
create distinct zones on your dashboards.  
Others might have a small panel and many new  
patients.  
2\. The ratio of new to established patients is any-  
where from a fraction of a percentage to over  
10 percent. Drawing a chart that works for all  
these ranges is hard.  
3\. The data is available quarterly so there are really  
only eight data points, and there is not a need for  
trending view  
Shading of the chart title areas uses the Gestalt prin-  
ciple of closure to create the region for each chart.  
In the line charts, the y-axes automatically extend  
beyond the range of the data. This subtle approach  
ensures there is an amount of white space within the  
data area of the chart itself. It allows the data to sit  
more comfortably in its space.  
ood Use of  ables  
Why did the designers use a table in the bottom  
right of the dashboard rather than a visualization?  
Shouldn’t we always visualize data when we can?  
In this case, there are three good reasons for using  
a table\:  
1\. The possible data ranges are very large. In the  
example shown in Figure 26.12, the provider had  
four new patients in December 2015, adding to a  
panel of 424 existing patients \(0.9 percent\). Some  
providers might have a panel of 1,600+ patients  
and only a handful of new patients each month.  
When to use a table  
 well-formatted table can be more useful  
than a chart when scales are varied or  
when there is a need to look up exact values  
of data.  
F 26.12 Sometimes a table is better than a chart. uthor Commentary  
NDY\: The designer of this dashboard packed it full  
of subtle but important features to make it easy  
to understand. The gray shading and dynamically  
extended y-axes are two examples. Each one  
makes a small incremental improvement. However,  
make 10, or 20, small incremental changes, and the  
final impact is very large.  
It is my experience over many years that the Pareto  
principle applies to effective dashboard design\:  
80 percent of the layout and design work will be  
done in 20 percent of the time. The remaining  
80 percent of your time will be spent making small  
tweaks to formatting, layout, and annotation layers.  
This time should be spent in collaboration with the  
users of the dashboards.  
Just because it’s time consuming doesn’t mean you  
should ignore it\: You mustn’t. Those final changes  
make the biggest difference to the successful  
adoption of a dashboard.  
One thing I would change on this dashboard is to  
encode a missed target using more than just color.  
In this dashboard, missed targets are blue if met  
and red if missed. That’s okay, but it might not be  
something that immediately pops out. There is also  
a chance some people with color vision deficiency  
might not be able to distinguish the red and blue  
correctly, especially when used for the targets on  
the gray-shaded areas. This could be fixed with  
a small dot, arrow, or other KPI indicator next to  
missed target numbers, as shown in Figure 26.13.  
For other examples of dots or arrows used to  
highlight missed targets, see Chapter 6\: Ranking  
by Now, Comparing with Then, and Chapter 8\:  
Multiple Key Performance Metrics.  
Author Commentary 303  
F 26.13 An arrow or similar indicator next to a  
missed target provides a clearer visual encoding than  
just using color.  
JFF\: This dashboard designer applied the  
Gestalt principle well, but a bit too much for  
me. Sometimes in dashboard design, design-  
ers put borders around everything\: every chart,  
every title, and the dashboard itself. I guess they  
think if they put their data in jail, we will feel safer  
about it all.  
In this dashboard, the designer took great care  
to eliminate some of these borders. For example,  
there are no chart borders, just x- and y-axis  
lines. However, the gray boxes create additional  
separation that, in my opinion, is not needed. In  
addition, by putting the red KPI in a gray box, the  
red is muted when compared to what it would be  
on white.  
Finally, I try to avoid rotated text whenever possi-  
ble. In this dashboard, each month is labeled and  
the text is rotated 90 degrees. I would consider  
spacing those labels out and formatting in a way  
that I could avoid rotated text.  
Figure 26.14 shows a version of the dashboard  
without the gray shading and with horizontal axis  
labels. F 26.14 The dashboard with the shading removed and the axis labels horizontally laid out. Chapter 27  
Telecom perator  
xecutive ashboard  
Telecom operator executive dashboard.  
Source\: Images courtesy of Dundas Data Visualization, Inc. \(www.dundas.com\)  
Dashboard Designer\: Mark Wevers  
Organization\: Dundas Data Visualization  
Source\: https\://samples.dundas.com/Dashboard/f78d570f-1896-441e-9b5e-90e0999db630?vo=viewonly  
306 307 308 Chapter 27 Telecom perator xecutive ashboard  
Scenario  
Big Picture  
You are an executive at a telecom company, and you  
need to know if you are on track to meet the strate-  
gic goals. Like many other businesses, you want to  
reduce the cost of acquiring new subscribers, increase  
the average revenue per user, and reduce churn. You  
need a dashboard to provide all these details to the  
executive level of the organization. The dashboard  
does not need to be interactive, but it needs to sum-  
marize all of the key information in a way that can be  
presented in a senior management/board of direc-  
tors/stakeholders meeting.  
Specifics  
• You have three main goals to track\: subscriber  
acquisition costs \(SAC\), average revenue per user  
\(ARPU\), and churn.  
• You need to see the results of each goal over time,  
year to date \(YTD\). Then, next to it, you need to see  
the key risk indicators and key performance indica-  
tors that could be driving that goal.  
• You need to see an executive summary of key  
financial information across revenue, operating  
expenses \(OPEX\), and earnings before interest,  
taxes, depreciation, and amortization \(EBITDA\)  
for the last four quarters and in comparison to the  
previous year’s results.  
• You need to see subscribers over the last four quar-  
ters across all key categories, such as total subscrib-  
ers and net new subscribers for both prepaid and  
postpaid plans.  
elated Scenarios  
• You need to organize your dashboard by high-level  
goals and break down the drivers of those goals.  
• You need a detailed summary, often a trend over  
time, of many metrics on a single view.  
• You need to review SAC and/or churn. You need to  
compare the current period with a previous period.  
• You need to review your call center metrics and  
their impact on your customers. This could include  
churn, likelihood to recommend, customer satisfac-  
tion surveys, or customer reviews.  
ow People Use the ashboard  
The dashboard is designed with four key areas\: three  
goals and an executive summary. The three goals are  
laid out as rows, with four charts each \(left to right\).  
An executive summary is shown vertically on the right-  
hand side of the dashboard.  
The first goal is to reduce SAC. \(See Figure 27.1.\) This  
metric is also called “cost per acquisition” and is a key  
metric used by many different types of businesses. In  
this scenario, the wireless company is measuring the  
cost to acquire a subscriber. The SAC has gone up,  
which is a bad thing, so it is shown in red along with a  
small red callout box that shows the cost has increased  
\$4 year to date \(YTD\). A line chart shows the SAC is  
going up from Q1 to Q4 across all contract types but  
also shows the cost is higher for one-year contracts  
than for three-year contracts. The third chart shows  
devices from original design manufacturers \(ODMs\) by  
quarter, showing the dollars on the x-axis and number  
of devices as data labels. The last chart shows a bar for  
fiscal year 2015 against a target line of fiscal year 2014. ow People se the ashboard 309  
F 27.1 Four charts showing the key metrics for the first goal.  
Be careful when using red and green  
When using red and green together,  
consider an accommodation for people  
with color vision deficiency. In this case, the  
author uses a +/− indicator in the small box  
to indicate that costs are going up or going  
down.  
The second goal is to increase the ARPU.  
\(See Figure 27.2.\) This has a very similar layout as the  
first goal. There are four charts from left to right show-  
ing the key metrics. The reader can quickly see the  
overall ARPU, the ARPU by plan type, total subscrib-  
ers for three categories, and the number of offers for  
plan upgrades and how many subscribers accepted  
the offers. ARPU is going up, which is a good thing,  
F 27.2 Four charts showing the key metrics for the second goal. 310 Chapter 27 Telecom perator xecutive ashboard  
F 27.3 Four charts showing the key metrics for the third goal.  
so it’s shown in green with a callout box indicator  
showing a \$6 increase YTD.  
The third goal is to reduce churn. \(See Figure 27.3.\)  
Every business loses customers over time. As seen in  
Goal 1, it’s expensive to get new customers, so keep-  
ing the current customers satisfied can be very impor-  
tant. As with the previous goals, there are four chart  
components in a row from left to right.  
The first chart is the key metric with a sparkline show-  
ing the trend over the four quarters underneath. Churn  
is decreasing, which is a good thing, so this is shown  
in green, and the callout box indicates a decrease of  
18 basis points YTD. The second chart is a line chart  
showing the monthly average churn rate over time for  
CTT Wireless and three of its competitors. The third  
chart has four small boxes showing four key metrics  
for the call center, and the last chart shows overall cus-  
tomer satisfaction for fiscal year 2015 \(the bar\) versus  
fiscal year 2014 \(the target line\).  
The right-hand side of the dashboard has an executive  
summary showing a quick review of key financial metrics.  
\(See Figure 27.4.\) Revenue, operating expenses, and  
EBITDA are shown at the top for fiscal years 2014 and  
2015 and then graphed on a line chart for the last four  
quarters. Four line charts show the total customers  
and net new customers \(i.e., new customers acquired  
in Goal 1 minus customers lost from churn in Goal 3\).  
This is shown for both postpaid and prepaid plans.  
Why his Works  
Key Metrics isplayed without Clutter  
This dashboard captures all the key data required to  
answer the business questions at an executive level  
without having to go very deep into other reports  
and the data. It’s packed full of data but does not feel  
cluttered. This is accomplished by using small, well-  
designed visuals that employ different techniques to  
make it so compact.  
For example, the line charts showing time-series data  
have trailing labels. \(See Figure 27.5.\) It’s clear which  
line refers to which company without having to add  
a color or shape legend.  
Color banding is used on the sparklines for the four  
quarters instead of additional labels. \(See Figure 27.6.\) Why This Works 311  
F 27.5 Line chart showing average monthly churn  
for last four quarters. Placing labels at the ends of the  
lines eliminates the need for color and a legend.  
F 27.6 Four key metrics for call center  
performance. Sparklines and color bands for the four  
quarters allow these metrics to fit in a small space with a  
lot of information encoded.  
F 27.4 Executive summary showing the key  
financial metrics and number of customers.  
ayout Supports Quick eading  
Using the Gestalt principals of design, such as prox-  
imity and closure, the dashboard provides insight  
into the four areas, each with the necessary detail,  
in an organized fashion. The key metrics are laid  
out in three rows and a single column, which makes  
them easy to group together and quickly scan.  
\(See Figure 27.7.\) F 27.7 easy scanning of the information.  
The three goals laid out in three rows and the executive summary in a column on the right allow for ood Chart  ypes for the  
arious Comparisons  
Line charts are an excellent choice for showing a trend  
over time. They are used throughout this dashboard  
to show various metrics over the last four quarters.  
Sparklines are used to show the trends under the  
key metrics. Bar charts with target lines are used to  
show this period versus the previous period as a quick  
gauge of progress.  
tarting the axis at zero  
n graphs that use length, height, or  
area to encode the data for comparison  
from a common baseline \(e.g., bar chart,  
bullet graph, lollipop chart, area chart\),  
always start the axis at zero; otherwise, you  
will distort the comparison of the data. If  
encoding with position \(e.g., dot plot, box  
plot, line chart\), breaking the axis away from  
zero sometimes can be useful and will not  
distort the comparison of the data.  
uthor Commentary  
JFF\: I really like the design and layout of this dash-  
board. I also like the minimal use of color. However,  
it’s best to avoid red and green together \(as dis-  
cussed in Chapter 1\: Data Visualization\: A Primer\).  
The little numbers, showing positive and nega-  
tive, will help, but it still may not be clear to some-  
one with color vision deficiency which numbers are  
good and which are bad. I would change this to  
Author Commentary 313  
blue for good and red or orange for bad. In addi-  
tion, in Goal 1 on the third chart, Devices Sourced  
from ODMs, I would recommend flipping time to  
the x-axis. Every other time chart has the four quar-  
ters on the x-axis, and it would be best to do that  
for this chart as well. It could remain a bar chart  
or could be changed to a line chart like the oth-  
ers. This would help the reader see the trend over  
time better than what it shown here. Also, while  
the third chart in Goal 2 shows a good compari-  
son of the subscribers, a line chart with three lines  
would be better.  
NDY\: This is another dashboard where the design  
dial has been turned to 11, resulting in a dashboard  
that creates a sense of calm as you explore it. I  
especially like the simplified color palette across  
the dashboard.  
It is possible to reduce colors too far. Consider  
Churn Rate vs. Competition on the bottom row.  
Do the lines for Targus and CTT cross, or do they  
merely converge before diverging again? Using  
the same color for all lines on a chart might cause  
confusion if they overlap. In Figure 27.8, you can  
see an example where this could be a problem.  
Look at sales in West and East regions\: Can you  
tell where they overlap?  
There are possible solutions, without reverting back  
to multiple colors. Figure 27.9 shows two examples.  
The one on the left puts the lines side by side in  
their own panes; the one on the right uses a pal-  
ette of grays.  
Note that both options work only with a small num-  
ber of categories. F 27.8 Which line is for the West region and which is for the East region?  
F 27.9 Two solutions to the problem of overlapping lines. Chapter 28  
conomy at a lance  
The U.S. economy at a glance.  
Dashboard Designers\: Sam Fleming, Emily Cadman, Steven Bernard, and Tom Pearson  
Organization\: Financial Times  
316 317 318 Chapter 28 conomy at a lance  
Scenario  
Big Picture  
What are the states of the U.S., U.K., Japanese, and  
Chinese economies? Within each of those econo-  
mies, which common economic indicators are rising  
and which are falling? What are the key takeaways for  
each? If you want more information, are there some  
key stories or source data to be looked at?  
The economic snapshots from the Financial Times  
\(FT\) \(a close up is shown in Figure 28.1\) answer all of  
those questions for readers, researchers, economists,  
and journalists. This dashboard is a full snapshot of  
an economy. The FT has built the dashboards for the  
United States, the United Kingdom, Japan, and China.  
Specifics  
• You run an organization that is arranged into a  
number of discrete areas, each of which has two or  
three key metrics to track.  
• You need to show actual and forecast values for  
all areas of a business with many ways of measur-  
ing performance.  
• You need to add commentary at a macro and micro  
detail to explain the results.  
• You need a dashboard that is mobile responsive.  
F 28.1 Detail from the U.S. economy dashboard. elated Scenarios  
• You need a detailed executive dashboard that  
requires multiple metrics alongside brief commen-  
tary on each category of metrics.  
ow People Use the ashboard  
For economists, researchers, or journalists, it is use-  
ful to have a common reference for the state of a  
country’s economy. The FT produces four dashboards,  
for the United Kingdom, United States, China, and  
Japan. Each dashboard brings together indicators  
that define an economy.  
The data is updated once every 15 minutes. Text com-  
mentary and annotations are updated by journalists  
ow People se the ashboard 319  
around once a week. These dashboards are reliable  
references for anyone seeking an economic profile of  
one of the four featured countries.  
Each economy is broken down into major sections,  
such as gross domestic product \(GDP\), manufactur-  
ing, construction, and interest rates. Each section has  
up to four “cards.” The U.S. labor market is shown in  
Figure 28.2. The first card, on the left, is a short com-  
mentary from a journalist that is updated weekly. To  
the right of the commentary card are up to three more  
cards, each with one metric relevant to that section.  
The dashboard is designed to be responsive. On a  
desktop browser, the cards are stacked horizontally  
in each section. On a mobile device with a narrow  
F 28.2 The U.S. labor market section. 320 Chapter 28 conomy at a lance  
screen, however, the cards are stacked vertically.  
Viewers are expected to scroll vertically through  
the metrics.  
Why his Works  
inks to Source ata  
The dashboards are designed for economic experts and  
other users alike. In order to satisfy the various users,  
the charts themselves are kept as simple as possible  
so that all viewers can interpret them. Links to source  
data or relevant articles are added so that anyone may  
go find further details. \(See Figure 28.3.\)  
The links are generally focused on the source data  
used to build the charts. The FT wishes to build trust  
in its journalism and its data. In the media and in poli-  
tics, there is often a feeling that data is being manip-  
ulated to reinforce particular opinions. By crediting  
and linking to the source data, the FT is encouraging  
critics to visit the source data so they may check the  
FT’s interpretations.  
 ext nnotations and Commentary  
Whether you are an economist by profession or  
an interested layperson, having commentary that  
frames the data and establishes a context will  
F 28.3 The UK consumer section shows data sources and links to new stories. Why This Works 321  
F 28.4 A picture may not always be worth  
1,000 words\: Journalists regularly update the  
commentary on each section.  
help guide your understanding of the charts. \(See  
Figure 28.4.\)  
On this dashboard, there is a main commentary card  
for each section with the headline story. If the section  
can be categorized with just one or two numbers, the  
numbers also will be shown. In the example for UK con-  
sumer charts, retail sales and mortgage approvals are  
highlighted as the key metrics. \(See Figure 28.5.\)  
Commentary sections take up what can be valu-  
able space on your dashboard. If your audience  
consists of people who know the data intimately,  
F 28.5 own short commentary.  
Many of the individual charts have their  
you might not need the text. The audience for the  
FT’s economy dashboards range from amateur to  
expert. Therefore, the dashboards need to cater  
to all audiences, making the commentary a great  
addition.  
Furthermore, because the dashboard adapts to  
mobile devices, it does not have a space restriction\:  
People can keep scrolling down to find the informa-  
tion they need.  
ormatting  
There are many formatting choices in the dashboard  
in Figure 28.6, which make for a very easy-to-interpret  
and pleasing experience when consuming the data. 322 Chapter 28 conomy at a lance  
F 28.6 A multitude of intelligent formatting choices.  
These decisions are consistent across all the charts.  
In fact, this chart style is consistent throughout the  
FT’s media.  
• Gridlines are shown for the y-axis only \(i.e., hori-  
zontal in Figure 28.6\).  
• Axes for bar charts always extend from zero. Axes  
for line charts always show the range from minimum  
to maximum.  
• A white background is used to show forecasts  
which can be seen in Figure 28.7.  
• Three shades of gray are used in the font as a  
hierarchy. The most important, the title, is darkest  
\(and largest\). Subtitles, axis labels, and legends  
are a little lighter. Finally, the data source text, the  
least important for understanding, is lightest. This  
hierarchy draws the eye to the most important  
aspects first.  
Good formatting, applied across an organization,  
makes it easier for people to parse data they con-  
sume. As they become accustomed to the style, they Why This Works 323  
can spend more time focusing on the data and less  
on understanding the layout, axis styles, tick marks,  
and so on.  
owcasting  
In many organizations, looking forward is more impor-  
tant than looking backward. Economics might be the  
field where forecasting is most important. In the case  
shown in Figure 28.7, the FT uses “nowcasting” data  
provided by Now-Casting Economics \(https\://www.  
now-casting.com\). This example is from July 2016  
when Nowcasting data was available.  
Note  
owcasting measures multiple other  
indicators to show the change in GDP  
in real time, ahead of the official GDP figure  
publication.  
Nowcasting is a statistical method of calculating how  
a metric is evolving in real time before official fig-  
ures are released. Data indicating how the economy  
is changed is released on an almost daily basis, but  
there is a considerable lag before official GDP fig-  
ures are calculated. Nowcasting attempts to use all  
of these intermediate data releases to give a snap-  
shot of how GDP looks at present. As a method, it is  
increasingly gaining credibility in economic circles as  
an alternative to more traditional, judgment-based  
forecasting methods.  
Nowcasting has proven to have lower errors than  
traditional, judgmental methods of predicting low-  
frequency metrics such as GDP.  
F 28.7 The UK economy on May 3, 2016. The  
Q2 GDP results are not due until after June 2016. 324 Chapter 28 conomy at a lance  
esponsive Card esign for Mobile  
As we move away from our desktops and laptops to  
doing more and more of our daily work on mobile  
devices, dashboards are being built to work within  
these new paradigms. Traditional single-screen dash-  
boards enable everything to be seen at once, but  
this is not always practical on smaller screens. We  
could show less information in order to pack it all  
onto one screen. Alternatively, since scrolling is the  
fast, universal way of moving through information on  
small screens, we could stack the information verti-  
cally. \(See Figure 28.8.\)  
In the FT’s dashboard, this method works particularly  
well. Each card is distinct. This means that viewers  
don’t need to see two views simultaneously in order  
to relate one chart to another.  
F 28.8 The cards stack in different ways depending on the viewing device.  
Shown here are iPhone and iPad views. elevant Metrics  
All economies are different, and attempting to use the  
same metrics for all of them will fail. Some metrics are  
common to all economies, such as GDP, employment,  
and inflation. Some metrics that well represent one  
economy might not work when applied to another. The  
FT dashboards recognize this by varying the metrics for  
each economy, showing the most relevant ones. For  
example, in the consumer sections, the U.S. dashboard  
uses sales of single-family homes. In the UK dashboard,  
mortgage approvals are shown; and in Japan dash-  
board, motor vehicle sales are shown \(See Figure 28.9\).  
Why This Works 325  
In each case, the FT has chosen a metric that is best  
suited to that scenario. This is undoubtedly harder  
work for the designers, but ultimately it shows the  
most relevant analysis for each individual economy.  
This extra work for the designers is a real challenge  
in businesses. Often we build a single dashboard  
for all categories of business, even though a met-  
ric useful for one category might not be useful for  
another. It is important to track the most relevant  
data for each area of business, even if this means  
maintaining more dashboards and training users to  
use each one.  
F 28.9 Three different ways of measuring consumer indicators. For the United States, the FT uses sales of new  
one-family homes. In the UK, it shows monthly mortgage approvals. In Japan, it shows motor vehicle sales. 326 Chapter 28 conomy at a lance  
o rbitrary Interactivity  
The economic dashboards have been designed  
with mobile viewing in mind. The designers chose  
not to add any interactivity. They felt that on a  
small screen, there was simply not enough to be  
gained from adding interactivity. Sure, they could  
have added tool tips to allow for lookup of exact  
figures, but they felt that it’s not possible to point  
accurately using a finger-pressing gesture. Choos-  
ing instead to focus on a consistent, simple design,  
along with links to further details, lessens the need  
for interactivity.  
When designing your own dashboards, do not add  
interactivity for the sake of doing so. Consider how  
and why you incorporate it into the dashboard. The  
following questions are helpful\:  
• Why does a viewer need to interact with the  
dashboard?  
• What extra insight will be gained through the  
interactivity?  
• Does the interactivity work correctly, whatever  
device the viewer is using?  
• If users cannot interact with the dashboard, can  
they still get the insight they need?  
uthor Commentary  
NDY\: “Great designers produce pleasurable experi-  
ence,” says Don Norman in The Design of Everyday  
Things \(Basic Books, 2013\). He goes on to describe  
three types of processing that control our reaction  
to things we interact with\: visceral, behavioral, and  
reflective. The visceral response is about immedi-  
ate perception. “This is where style matters,” he  
says. Some people dismiss the visceral response,  
saying the purity of the functional design is the sin-  
gle most important thing. But functionality is of no  
use if people don’t like your dashboard.  
The formatting choices outlined in this chapter cre-  
ate a strong visceral response in me. Reading and  
interpreting these dashboards is a pleasure and  
makes me want to return to see updates. Chapter 29  
# Call Center  
Call center dashboard.  
Source\: Images courtesy of Dundas Data Visualization, Inc. \(www.dundas.com\)  
Dashboard Designer\: Jeff Hainsworth  
Organization\: Dundas Data Visualization  
Source\: https\://samples.dundas.com/Dashboard/c397551a-e1f0-48e2-bb22-fa0def388063?vo=viewonly  
328 329 330 Chapter 29 Call Center  
Scenario  
Big Picture  
You are the manager of a call center handling sales  
calls for an insurance company. You want real-time  
performance data for your group based on a num-  
ber of key metrics. You want to see how many calls  
are being handled, both inbound and outbound  
calls, and you need to see the closure rate for the  
policies being sold and who the top agents are. Like  
most call centers, you need to monitor the aban-  
doned call rate. Because of a service-level agree-  
ment \(SLA\), you also need to monitor the average  
speed of answer and the “call me now” and “call  
me later” outcomes, both in real time and month-to-  
date \(MTD\). This dashboard will run on a large wall-  
mounted display so that the manager and members  
of the call center can monitor it periodically through-  
out the day.  
Note\: Call centers often measure average hold time  
and average talk time \(i.e., average length of the calls\)  
by agent, but these metrics are not needed in this  
particular example.  
Specifics  
• You are tasked with showing the real-time perfor-  
mance of your call center by comparing it to SLAs  
and monthly results.  
• You need to see how many calls are currently in  
the queue and how many are waiting for you to  
call now or later.  
• You need access to the latest events that may affect  
your call center operations, such as phone service  
downtime or other world events that may impact  
your calls.  
• You need to compare the average speed of answer  
to the SLA but also see the distribution to under-  
stand how many calls are not meeting the SLA.  
• You need to create a view that motivates agents  
by showing top agents and celebrates success by  
showing total premium offerings sold and how the  
call center is meeting the SLA. The goal is to drive  
change by reinforcing good behavior.  
• You need to see the date and time of the last data  
update and when the next update will occur.  
elated Scenarios  
• You have a call center for customer service, sales,  
reservations, product/technical support, or credit  
or collections.  
• You are a large retail store with a sizable number of  
checkout lines. You need to monitor the number of  
customers in the queue waiting for a register and  
the average checkout time.  
• You need to communicate how your organization  
is meeting SLAs.  
ow People Use the ashboard  
Call center managers are focused on the metrics stip-  
ulated in an SLA. In addition to SLAs, management  
puts in place certain goals. One goal is to encourage  
current customers to upgrade to premium service. In  
the top left corner of the dashboard \(see Figure 29.1\),  
we see the number of premiums sold today, the pre-  
mium services sold MTD, and a sparkline showing  
activity for the current month. This allows the reader  
to see key information at a quick glance. ow People se the ashboard 331  
F 29.1 Total premium services sold today and MTD are displayed in the top left corner of the dashboard.  
The close rates for inbound and outbound calls are  
shown with a bullet chart for both daily and monthly  
numbers. \(See Figure 29.2.\) The black bar shows the  
actual value \(the closed percentage\), and the gray  
performance bands show the target levels.  
In Figure 29.2, the daily inbound close rate of 34 per-  
cent exceeds the target of 30 percent. The monthly  
inbound close rate of 25 percent is just below the  
30 percent target. Those two metrics look pretty  
good overall. However, the outbound close rate  
is very poor. The daily outbound close rate is only  
2 percent of a 15 percent target. This seems to be  
the trend for the month, with the monthly outbound  
close rate only achieving 4 percent of the 15 per-  
cent target.  
F 29.2 Bar chart with performance bands showing the close rate for inbound and outbound calls. 332 Chapter 29 Call Center  
lert indicators  
Consider adding an alert indicator to  
highlight missed targets on key metrics.  
For example, a small red dot next to the bullet  
graph could be used to alert the reader that  
this goal is way off target.  
Managers also use the dashboard to identify leading  
agents. \(See Figure 29.3.\) Doing this gives recogni-  
tion to top agents and fosters healthy competition  
among the call center agents.  
Agents in the call center use the dashboard to ensure  
they handle the volume of calls efficiently and to iden-  
tify those areas that may require their attention. In Fig-  
ure 29.4, the first chart shows the transferred calls as  
a line chart along with a trend line and a numeric key  
performance indicator \(481 calls MTD\). Transferred  
calls escalate in situations where the first line staff  
handles initial calls. New hires might escalate more  
calls as they do not have all the answers, but as staff  
members get more training, they should be esca-  
lating less. The line trending down indicates that  
fewer calls are escalated and transferred.  
The next chart shows the daily abandon rate. The  
target goal is a gray bar. A red bar indicates that the  
abandoned rate for the call center was higher than  
goal for that day. \(This is a bad thing.\) A blue bar indi-  
cates that the abandoned rate was below the target  
goal. \(This is a good thing.\)  
Agents will also get live updates using the scrolling  
marquee at the bottom of the dashboard. \(See Fig-  
ure 29.5.\) This is a great spot for employee notifi-  
cations, such as target goals being met, reminders  
for certain procedures, or notification of important  
upcoming events.  
F 29.3 Top five agents based on monthly  
performance are displayed in real time on the  
dashboard.  
F 29.4 Key metrics are displayed for the manager and agents to monitor in real time. Why This Works 333  
F 29.5 Scrolling banner across the bottom of the screen displays important information for the call center.  
Why his Works  
Personal pproach Uses Positive  
einforcement  
People like to have feedback on their performance.  
They like recognition for success, and they like to  
know where they stand. This dashboard person-  
alizes the data by listing the top agents \(see Fig-  
ure 29.3\) and showing their pictures and ranks. In  
Figure 29.6, the leading agent and leading prequal-  
ifier are listed \(the prequalifier is a person who han-  
dles qualifying the leads for the call center agents\).  
By listing the top agents, the dashboard motivates  
people to do their best and stay focused on what  
matters. Everyone in the call center immediately  
knows who the top agents are and the key metrics  
for success.  
utomatic Updates  
The dashboard updates every 60 seconds from the  
database, so it approaches a real-time measure. The  
fact that the dashboard is always up to date and  
features dynamic elements ensures that it always  
provides value and is engaging. Also, because the  
dashboard refreshes automatically, there is no need  
for a manual processes to update the data.  
The date and time of the last update are displayed  
in the top right corner of the dashboard, along with  
an indicator displaying the time, in seconds, until the  
next update. \(See Figure 29.7.\)  
F 29.7 Every 60 seconds, the dashboard  
refreshes with updated data and the date and time of  
the last refresh.  
F 29.6 Dashboard features the leading agent and  
leading prequalifier based on calls handled.  
etails hat Provide Clarification  
The ability to see not only aggregated metrics results  
\(such as real-time speed of answer\) but also the distri-  
bution of calls provides great insight in a small amount  
of space. In Figure 29.8, it is easy to see the details for  
how many calls breach the SLA. Dots in the red area  
represent these calls. Only a few calls are in the red,  
breaching the SLA, so overall the calls are answered 334 Chapter 29 Call Center  
F 29.8 The distribution of the average speed of  
answering calls compared to the SLA \(in red\).  
quickly and within the time specified by the SLA. W1  
through W5 represent that data for the previous five  
weeks. The blue line shows how the group performs  
in real time, which represents the estimated time it  
would take to answer a call currently coming in.  
ood Use of Color  
Color is used very well in this dashboard. Blue and  
red are used to show good and bad. This palette  
is color-blind friendly, and red is a good choice to  
alert readers that things are not going well and need  
attention. The color is also consistent throughout the  
dashboard. Red and blue are used on five different  
charts to encode the same information.  
ood Chart  ypes for the arious  
Comparisons  
The chart types are appropriate for the various com-  
parisons. Sparklines show the trend of the data in  
small spaces on the dashboard. Bullet graphs show  
the actual values compared with progress toward a  
goal. \(See Figure 29.2.\) Where charts aren’t needed,  
simple numbers give the reader the key indicator \(see  
Figure 29.1\)—for example, the number of scheduled  
leads and inbound calls in the queue.  
In Figure 29.9, a slider indicator gives a clear indica-  
tion on a scale coloring the SLA violation range in red.  
The black triangle moves in real time where the metric  
stands against the SLA thresholds. A sparkline under-  
neath them shows the MTD range for the number. A  
target line is used; the line is red when it is over the  
threshold range and blue when it is under the thresh-  
old range. This is another example of consistent color  
use throughout the dashboard.  
F 29.9 the various comparisons.  
Example of the red and blue color used throughout the dashboard as well as good chart choices for rid-Based esign  
The charts are also well-organized, in a grid lay-  
out of four columns and three rows. Designing to  
a grid is a fundamental concept in graphic design.  
Strong horizontal lines are created across the dash-  
board using a gray header. Vertical lines, which can  
dominate a visualization, are very thin so they do  
not overpower the dashboard. This style creates a  
nice symmetry in the dashboard design and makes  
it easy to read, which is especially important as  
this dashboard will be displayed on a large-screen  
TV. People who use this dashboard need to know  
where each section is, and they need to be able to  
quickly identify the components of the dashboard  
from across a room.  
uthor Commentary  
JFF\: The bar chart in the Abandon Rate section  
uses a gray bar for the target goal. \(See Figure  
29.10.\) It’s pretty clear on the good days where  
things stand. The blue bar is below the gray bar,  
and this allows us to see that things are good.  
However, there are a few issues with this method.  
Blue bars indicate abandon rates that are below  
Author Commentary 335  
SLA targets. Note that the higher the bar, the  
higher the abandon rates, so while it’s below the  
target, all abandoned calls are a problem. In situ-  
ations like this, it is worth noting the importance  
of correctly annotating dashboards. The legend  
says “Good,” but a blue bar just below the gray  
target line isn’t good, it’s acceptable. In addition,  
having the gray bar as “Goal” implies that it is  
the target number to reach rather than a bottom  
threshold. We could change the legend to say  
“Within Target” to make this clearer. Also, in cases  
where things are bad, the red bar hides most of  
the gray bar for the goal.  
In addition, the 36 leads is out of context. The arrow  
indicator is pointing up and is blue, which indi-  
cates a good thing, but it’s not clear how good.  
Is it above target? And if so, by how much? Or is  
this just 36 higher than the previous period? When  
numbers are displayed out of context, it is hard to  
know what they mean.  
Using a target line for the abandoned call rate, sim-  
ilar to what the author used in Figure 29.9, makes  
this figure easier to read, for both the good days  
F 29.10 Abandoned call rate and scheduled leads from the dashboard. 336 Chapter 29 Call Center  
F 29.11 a sparkline to the leads provides needed context.  
Using a target line and changing the color helps to identify the threshold for abandoned calls. Adding  
and the bad days. \(See Figure 29.11.\) In addition,  
coloring everything below the target line in blue  
emphasizes where the line is drawn between a bad  
number of abandoned calls and a good number  
and makes this chart more consistent with the rest  
of the dashboard. Adding a sparkline with a match-  
ing target band also gives context to the 36 leads.  
This shows how the metric is trending and where  
it is in relation to the target number.  
Another option is adding color banding behind the  
bars to provide additional context. \(See Figure 29.12.\)  
This is similar to the technique used in Chapter 16.  
NDY\: Call center dashboards are designed to go on  
large screens so that everybody can see them. This  
dashboard design facilitates large-screen presen-  
tation. The dashboard doesn’t have a “flow” like  
many of the dashboards found in this book. Each  
section of the grid is a distinct chart, not directly  
linked to the others. There is no interactivity either\:  
It’s designed to show one set of metrics at a time.  
When shown on a large screen, this works really  
well. Over time, users come to know what question  
is answered in which section of the grid. As they  
look to the screens, they move their eyes directly  
to the necessary information.  
F 29.12 Color bands are used to show where the bars on the bar chart are in relation to the target threshold. PAT III  
SCCI I T  
AL WL Chapter 30  
Want to ngage People? Make  
Your ashboards Personal  
338 Here are some thoughts on making dashboards more  
engaging to the users. The answer isn’t to resort to  
making things “flashy” or “beautiful” but to create a  
personal connection between the data and the user.  
verview  
A few years ago, a client was updating a collection  
of survey data dashboards and wanted to revisit the  
way demographic data was presented. They thought  
that the collection of bar charts comprising the demo-  
graphics dashboard was boring and wanted to replace  
them with something that was more visually arrest-  
ing. In particular, they wanted to take something that  
looked like what is in Figure 30.1 and replace it with  
something flashy.  
F 30.1 A “boring” demographics dashboard with boring bar charts.  
339 340 Chapter 30 Want to ngage People? Make Your ashboards Personal  
Something with pizzazz! Something with treemaps  
and bubbles and pie charts! Something like what is  
in Figure 30.2.  
Yikes. This is certainly a colorful montage, but it takes  
hard work to make sense of it. Instead of taking sec-  
onds to grasp, it will take several minutes to under-  
stand the demographics of the survey takers.  
void bubble charts  
Bubble charts are not useful for precise  
quantitative comparisons, and treemaps  
are best used with hierarchical data or when  
there are too many categories to show in a  
bar chart.  
F 30.2 Flashy demographics dashboard. When asked why they wanted something “flashier,”  
they indicated a desire to draw the viewer into the  
dashboard, and they thought a dashboard with more  
than just bar charts would do the trick.  
Why do they want to draw people into this dashboard?  
When pressed further, the client argued that because  
the data was boring, the dashboard needed to be  
cooler; otherwise people wouldn’t engage with it.  
But if the data is boring, why bother to visualize it?  
And why would you want users to spend time on this  
boring data when there was more important data to  
explore and understand?  
There was, in fact, a very good reason to show the  
demographics of people who took the survey\: to let  
interested parties see for themselves if there was  
enough overlap between the survey participants and  
the interested party. That is, the key to getting an  
individual involved with this dashboard and all the  
Personalized ashboards 341  
related dashboards was to show that individual how  
the data pertained to him or her.  
So, how can we do that?  
Personalized ashboards  
At the 2015 Tapestry conference on data storytelling,  
Chad Skelton, then of the Vancouver Sun, presented  
a great session making the case that people are rav-  
enous for data about themselves.  
Chad created an interactive dashboard that allows  
Canadians to see how much older or younger they are  
than other Canadians. Below is a similar dashboard  
using United States census data.  
Figure 30.3 presents a histogram showing the distri-  
bution between age and U.S. population.  
Not exactly thrilling stuff.  
F 30.3 Histogram showing a breakdown of the U.S. population by age. F 30.4 Personalized U.S. Census Bureau dashboard with slider and filters. Now let’s contrast the general-purpose graphic in  
Figure 30.3 with the personalized dashboard shown  
in Figure 30.4.  
Note  
ou can try this for yourself at http\://  
www.datarevelations.com/  
are-you-over-the-hill-in-the-usa.  
Make the emographics ashboard Personal 343  
Let’s start by gathering some information about the  
person viewing the dashboard; that is, let’s present  
some parameters from which the viewer can apply  
personalized settings. \(See Figure 30.5.\)  
Every person seen using this dashboard immediately  
moves the slider left and right and applies the filters—  
first to compare his or her own age and gender, then  
to compare the age and gender of a spouse, friend,  
or child. Users find the allure of the dashboard chang-  
ing based on an individual’s input irresistible.  
Indeed, data is much more interesting when it is about  
you. So, how can we apply this concept to our “bor-  
ing” demographics dashboard?  
Make the emographics  
ashboard Personal  
With the goal of personalization in mind, let’s see  
how we can make the dashboard in Figure 30.1 more  
interesting.  
F 30.5 themselves.  
Get users to tell you something about  
Now we can take these parameter settings and high-  
light them in the dashboard \(and all of the other dash-  
boards, for that matter, see Figure 30.6\). F 30.6 A personalized demographics dashboard. We can then go one step further and invite the viewer  
to select the colored bars to see exactly how many  
people who took the survey have the same demo-  
graphic background as him or her. That is, have  
Make the emographics ashboard Personal 345  
viewers click to select their gender, their generation,  
and their location. \(See Figure 30.7.\)  
Twenty-seven people fall into the identical demo-  
graphic pool as the person viewing the dashboard.  
F 30.7 A personalized dashboard with selections. 346 Chapter 30 Want to ngage People? Make Your ashboards Personal  
But What If  ou Still Want to Make  
Something Beautiful?  
There may be times when you feel the inexora-  
ble pull to make your dashboards more beauti-  
ful. You see stunning visualizations like the ones in  
Figures 30.8 through 30.10 and wonder, “Why can’t  
I make something like that?”  
Realize that these data visualizations were built for  
public consumption, not internal use. They compete  
with other visuals for readers’ attention. They virtu-  
ally scream “Look at me! Look at me!” Indeed, the  
treemap, pie chart, and bubble chart demographics  
dashboard in Figure 30.2 was from a client who was  
building a public-facing dashboard.  
Personally, I think the bar charts in Figure 30.7 are  
beautiful, but I get the point. You see these come-  
hither dashboards and wonder if maybe you can bor-  
row some design elements from them.  
If you’re the only person looking at the dash-  
board, I suppose you can do anything you want.  
Sure, go ahead and replace those bar charts with  
donut charts if you like. As long as doing so doesn’t  
impede your understanding of the data, then what’s  
the harm?  
F 30.8 Global warming dashboard published on Tableau Public.  
Source\: Used with permission of Pooja Gandhi But What If You Still Want to Make Something Beautiful? 347  
F 30.9 Dashboard on Tableau Public comparing top music artists in the U.K. and the U.S.  
Source\: Used with permission of Adam E. McCann  
But if others need to understand the data, you should  
proceed with caution. Your goal is to make something  
that is accurate, informative, and enlightening. You  
need to make sure whatever you add does not com-  
promise that goal.  
And how do you do that? Ours is not a book about  
graphic design and we do not attempt to tackle issues  
related to sophisticated use of typography, layout,  
and shapes here. But I want to show you a chart type  
that combines the analytic integrity of a bar chart with  
the “ooh, circles” of a bubble chart. F 30.10 New York City rat sightings dashboard on Tableau Public.  
Source\: Used with permission of Adam Crahen But What If You Still Want to Make Something Beautiful? 349  
n lternative to the Bar Chart\: he ollipop  
A lollipop chart is simply a dot plot chart superim-  
posed on top of a bar chart that has very thin bars.  
Figure 30.11 shows an example using sales data.  
F 30.11 Top 20 products by sales using a lollipop chart. 350 Chapter 30 Want to ngage People? Make Your ashboards Personal  
Figure 30.12 presents the demographic dashboard  
from earlier, rendered using a lollipop chart.  
I personally prefer the bar chart but would not protest  
if a client wanted to use the lollipop version instead.  
F 30.12 Demographics dashboard rendered as a lollipop chart. Conclusion  
If people aren’t using your dashboards, it’s because  
the information isn’t meaningful to them, not because  
the dashboards aren’t cool. Adding packed bub-  
bles and pictograms in the hope of getting people  
engaged may attract attention at first but likely will  
hinder people’s ability to understand the data. Then  
they will abandon the dashboards.  
Although a lollipop chart might add some visual  
variety without sacrificing analytical clarity, if you  
Conclusion 351  
really want to engage people, make the data mean-  
ingful. One of the best ways to do that is to make  
it personal.  
For the record, I think personalized bar charts beat  
packed bubbles any day of the week.  
Note  
Be sure to read Chapter 32\: Beware the  
Dead-End Dashboard. Chapter 31  
# Visualizing Time  
352 Introduction  
Of all the dashboards in this book, how many contain  
a chart showing time? 23 of the 28 scenarios. There are  
many ways to visualize time, beyond the basic time-  
line. The method you choose will change the kind of  
insights that can be found on your dashboards.  
Visualizing time correctly is vital to a successful dash-  
board, and it is the reason why we devote an entire  
chapter to the topic.  
The timeline is an amazing invention. Figure 31.1  
shows William Playfair’s line chart from 1786. Being  
amazing doesn’t mean it is always the best way to  
show time on your dashboards. There are many sce-  
narios, discussed in this chapter, where a standard  
time series actually hides important stories in your  
data.  
In this chapter, we look at seven different time-based  
questions and explore the best chart for each one\:  
1\. How does today compare with the start of a time  
period?  
2\. Are there cyclical patterns in my data?  
3\. How can I look up trends across two time  
dimensions?  
4\. How can I look at rank, not value, over time?  
5\. How can I compare values of things that did not  
happen at the same time?  
6\. How can I show the duration of an event?  
7\. How can I focus on bottlenecks in a process?  
ow Much ime o  ou Want to See?  
What type of data is time?  
Most commonly it is treated as continuous, with one  
instant following another. In such cases, time is shown  
on the x-axis, flowing from left to right, with the quan-  
titative measures on the y-axis.  
F 31.1 The first statistical timeline was drawn in 1786. Over 200 years later, we still use similar techniques.  
353 354 Chapter 31 Visualizing Time  
But time can also be ordinal\: Days of the week are  
discrete, but they have an order \(Monday, Tuesday,  
Wednesday, etc\). You can group together all the  
Mondays and Tuesdays and Wednesdays to look for  
trends. If you put that into a sorted bar chart, the days  
of the week wouldn’t necessarily be in the Sunday-  
Saturday order. Let’s see four simple examples using  
data from Citi Bike, the New York cycle hire scheme  
operated by Motivate. Figure 31.2 displays four dif-  
ferent ways to show the number of journeys in the  
Citi Bike share program.  
The view you choose depends on your objective. Let’s  
look at the examples in Figure 31.2. Charts A and B  
represent continuous time. Chart A shows the macro  
trend over one year of bike journeys, with one mark  
for each month. Chart B shows the number of jour-  
neys by day. You can still see the seasonal trend, but  
you can also see which days were outliers; it’s easy to  
spot which are the highest-use and lowest-use days,  
for example. However, Chart B is noisy and might  
have too much detail.  
Charts C and D use time as an ordinal number. Chart C  
shows journeys by day of the week. You can see that  
the most and least popular days are Wednesday and  
Sunday, respectively. Chart D shows journeys by hour  
of day. You can clearly see the two commuter peaks  
around 9 a.m. and 5 p.m.  
Whichever level of detail you choose for your time  
series, you will show one thing at the expense of  
F 31.2 Four ways of showing Citi Bike journeys. ow oes Today Compare with the Start of a Time Period? 355  
another. The right choice? We can’t tell you\: It  
depends on your objective. This chapter explores dif-  
ferent questions you might ask of your time data and  
various charts you can use to answer those questions.  
You can see that, overall, each of these stations has a  
very similar pattern. You can also see which station had  
the highest and lowest overall journey count.  
But what if your business question is to compare  
ow oes  oday Compare with the Start of a ime Period?  
the most recent data with the earliest data? Which  
stations have changed in popularity since the start  
of the time period? Can you see an answer to that  
Imagine you are interested only in the values at the  
start and end of your time series. If that is the case,  
is it important to know what happened in between?  
question in the standard time series? To answer this  
question, we can use a slope chart, as in Figure 31.4.  
We remove all the data points except for the first and  
last in the series.  
Let’s look at an example using data from Citi Bike.  
Figure 31.3 shows the number of journeys between  
July 2013 and August 2014 at the eight most popular  
stations in the network. The station names have been  
replaced with numbers.  
This makes for a fine line chart. The seasonality in usage  
is clear\: Fewer journeys are made in the depth of winter.  
Suddenly we see something the standard line chart  
did not show. All stations saw a growth in numbers  
except for Station 8. In fact, Station 8 went from being  
the most popular station to the least popular station in  
this time period. Since there are only two data points  
for each station, it is very easy to see which catego-  
ries are rising or falling between the two endpoints.  
F 31.3 Line chart showing journeys at the top eight Citi Bike stations in New York. 356 Chapter 31 Visualizing Time  
F 31.4 Slope chart showing top eight Citi Bike  
stations.  
The insight about Station 8 is clear in the slope chart  
but hidden by the standard trend line in Figure 31.3.  
The slope chart in Figure 31.4 shows all the stations  
in one pane\: There are eight lines, one for each dock-  
ing station.  
Sometimes it can be hard to distinguish one line from  
another, especially if they are labelled. For example,  
look at Figure 31.5, which is a slope chart showing  
the results of a survey on people’s intentions to buy  
consumer gadgets between 2015 and 2016.  
F 31.5 Slope chart showing intent to purchase  
gadgets in 2015 and 2016.  
Source\: Accenture  
Design\: Andy Cotgreave \(@acotgreave\)  
In this case, some of the lines are very close together.  
Some labels overlap, and others are too close together  
to read easily. How can you solve the labeling issue?  
You could break each line into its own pane, as shown  
in Figure 31.6.  
F 31.6 Multipanel slope chart showing intent to purchase. re here Cyclical Patterns in My ata?  
There are many ways to show cyclical patterns. Here we  
look again at Citi Bike data. Imagine you need to know  
which stations get most or least crowded at different  
hours of the day. This is important so you can ensure  
that bikes are correctly distributed across the network so  
that customers can hire or dock a bike when necessary.  
A valid question is\: For any hour of the day, which days  
are most and least busy? For example, is 8 a.m. a really  
Are There Cyclical Patterns in My ata? 357  
busy hour on a Monday or a Sunday? On which day is  
it most busy at 12 p.m.? Figure 31.7 shows a standard  
timeline of total journeys on Citi Bike throughout a week.  
Is it easy to find and compare 8 a.m. and 12 p.m. on  
each day of the week? No. It’s possible, but you need  
to search along every point on the timeline.  
Our first solution would be to just show total journeys  
for each hour of the day. You can see that in Figure 31.8.  
F 31.7 most journeys at 8 a.m. and 12 p.m.?  
Line chart showing Citi Bike journeys throughout the week. Which day has the  
F 31.8 Bar chart showing journeys by hour of day. 358 Chapter 31 Visualizing Time  
F 31.9 Cycle plot showing weekly trends within each hour.  
Aggregating all the journeys by hour of day seems  
to answer the question\: 8 a.m. is a morning com-  
muter peak, and 12 p.m. is kind of quiet. This is a  
great way to summarize and view data for one time  
period. There’s a problem, though\: Each bar in the  
chart is the total for all days of the week. We’re miss-  
ing important extra details of the story.  
Figure 31.9 is a cycle plot version of this data. In a cycle  
plot, each hour contains two lines. The red line shows  
journeys at that hour on each day of the week. The  
horizontal line represents the average for the seven  
days. Within the pane, the line shows the values for  
the larger time period \(days\).  
What a difference! This view is very powerful and  
reveals many details not visible in the standard time-  
line or the bar chart of just the days.  
Figure 31.10 shows the details for just the two peri-  
ods that interest us \(8 a.m. and 12 p.m.\).  
Each line has seven dots, one for each day of the  
week. The first dot is Sunday, and the last dot is  
Saturday.  
F 31.10 Cycle plot showing journeys at 8 a.m.  
and 12 p.m. Each dot represents one day of the week.  
\(Sunday is the first dot.\) Now you can see how different these hours are. On a  
Saturday or Sunday \(presumably New Yorkers are sleep-  
ing in on those days\), 8 a.m. doesn’t see many riders. But  
8 a.m. is very busy during the weekdays. It’s busiest on  
Tuesday and Wednesday. However, 12 p.m. is the oppo-  
site. It’s a popular hour on weekends but not so busy  
during weekdays, when most New Yorkers are at work.  
Now go back to the full cycle plot in Figure 31.9 and  
look at each hour of the day\: You can see the different  
shapes very clearly. It’s easy to identify which hours  
of the day are busy on workdays and on weekends.  
The cycle plot, then, is very powerful. Imagine  
being a planner at Citi Bike. You could build a  
dashboard comparing usage at different stations  
and discover many different patterns. For example,  
Are There Cyclical Patterns in My ata? 359  
Figure 31.11 shows cycle plots for two very differ-  
ent Citi Bike stations\: Eighth Avenue and West 31st  
Street \(next to Penn Station, a busy commuter stop\)  
and Central Park South and Sixth Avenue \(next to  
Central Park\).  
The differences pop out. The black horizontal reference  
line is the average journey count for that hour. You can  
see that both stations have a peak from 5 to 7 p.m.  
Other than that they have very different patterns. Eighth  
Avenue is very busy during the morning commute \(but  
strangely not as busy in the evenings\). Central Park is  
busiest in the afternoon and evening. The cycle plot lines  
show a clear “n” shape during the morning for Eighth  
Avenue, revealing the dominance of the weekdays. All  
hours in Central Park are “u” shaped, showing that jour-  
neys there happen mostly on the weekends.  
F 31.11 Cycle plot showing two stations in New York. 360 Chapter 31 Visualizing Time  
A cycle plot needs to be quite wide and can take up a  
lot of real estate on your dashboard. If that is a prob-  
lem, you can plot the hours of the day along the x-axis  
and draw a separate line for each day of the week in  
one pane. An example is shown in Figure 31.12.  
In this example, we can see the same trends as the  
cycle plot. The advantage of drawing the lines on top  
of each other is that the chart can be made much nar-  
rower, which is useful if you need to save space on your  
dashboard. The difference between weekend days and  
weekdays is strikingly clear. Plotting each day as a sep-  
arate line within the same pane in this way also allows  
you to compare the actual differences between the days  
at any given hour more easily. The trade-off is that it’s  
harder to see which day is which; this is a problem that  
is easily solvable if the dashboard is interactive.  
Our Citi Bike example looked at weekly trends for any  
given hour of day, but you can create a cycle plot for  
any two time periods. For example, in a sales orga-  
nization, you might want to look at the yearly trends  
for any quarter.  
As the next section shows, you can also look at the  
yearly trends for any given month.  
F 31.12 Line chart alternative to a cycle plot that uses less width. ow Can I Look p Trends Across Two Time imensions? 361  
F 31.13 Data source\: Office for National Statistics  
Line chart showing the number of live births in England and Wales, 2013.  
ow Can I ook Up rends cross  
 wo ime imensions?  
that the most popular days are in September. Beyond  
that, the line chart is very hard to read and hides many  
great insights.  
What are the most popular birthdays in England and  
Wales? Figure 31.13 is a line chart showing the number  
of live births in England and Wales for each day in 2014.  
It’s very hard to make out much detail on the figure.  
You can see many spikes, but they hide the trends.  
The spikes actually show that there are fewer births  
on the weekends in England and Wales. You can see  
this fact much more clearly in Figure 31.14.  
Isn’t it amazing to see the drop in births on the week-  
ends? Figure 31.14 uses day of week as an ordinal  
measure to reveal something the line chart conceals.  
Back to the spikey line chart in Figure 31.13. You can  
see which is the lowest day of all \(December 26\) and  
F 31.14 Bar chart showing the number of live  
births in England and Wales, 2013.  
Data source\: Office for National Statistics 362 Chapter 31 Visualizing Time  
Like cycle plots discussed earlier, highlight tables/  
heat maps are great ways to show seasonality. Fig-  
ure 31.15 is a highlight table showing the most and  
least popular days for birthdays in the United States  
and in England and Wales.  
This is an entire calendar year in a table. Each column  
is a month, and each row is a day. There’s one table for  
the United States and one for England and Wales. The  
darker the color, the more people are born on that day.  
Digest the highlight table for a few moments\: What  
can you see that you couldn’t in the line chart? Which  
days of the month are not popular? What is the effect  
of Christmas in the different countries? What about  
national holidays, such as Independence Day \(July 4 in  
the United States\)? Which months are most popular?  
You can see a clear light stripe across the thirteenth  
day of each month. In both countries, there are fewer  
births on the thirteenth day. Did you realize we are that  
superstitious? There are other striking gaps. Check  
out New Year’s Day\: There are plenty of births at the  
end of the year in each country but very few in the  
first few days in January. In the United States, fewer  
children are born on Thanksgiving and on July 4. Over  
F 31.15 Heat map showing birthday popularity in the United States and in England and Wales. Christmas, especially in the United States, there are  
few births. In England and Wales, there are few births  
at the end of August. There is even a visible bump in  
births on February 14, Valentine’s Day.  
The highlight table of births shows the level to which  
childbirth is a planned and managed process. Con-  
sider the line chart in Figure 31.13. How many of these  
insights would you have spotted had you used a line  
chart?  
How can we apply this learning to business data? In  
another example, we can use a more somber data-  
set, the number of fatalities on U.S. roads over 36  
years. Figure 31.16 shows fatalities, by year, from  
1975 to 2011. The line chart provides some great  
insight.  
You can see the peak of deaths in 1982 followed by a  
significant drop. There is another significant drop in  
the late 1980s. It’s important to remember that cor-  
relation does not necessarily mean there is a direct  
link, but related trends can guide our understand-  
ing of events and help us to think about them in new  
ways. For example, notice the big drop in road deaths  
ow Can I Look p Trends Across Two Time imensions? 363  
in 2009. The timing could lead a person to wonder  
whether this drop was somehow connected to the  
financial crash.  
hould axes start at zero?  
he y-axis in Figure 31.16 does not start  
at zero. The goal of this chart is to show  
relative change rather than absolute change.  
Truncating an axis is acceptable in cases  
where position is used to encode data—for  
example, a line chart or dot plot—and where  
the goal is to show the difference between  
data points, not their actual size.  
However, dashboard users might be more interested in  
more detailed seasonal trends. Which months or days  
see the most deaths? Let’s break the line chart into  
months in Figure 31.17. Can you see the seasonal trend?  
Once again, it’s too hard to see the seasonal trend  
because the spikes generate too much noise.  
Figure 31.18 shows the same data in a highlight table.  
F 31.16 1975–2011.  
Line chart showing fatalities on roads in the United States, F 31.17 Line chart showing fatalities on U.S. roads by month, 1975–2011.  
F 31.18 Heat map showing U.S. road fatalities by month and year, 1975–2011. This view, unlike the others, reveals some very pow-  
erful insights. Looking at the months \(columns in Fig-  
ure 31.18\), we can quickly scan down and see how  
many more fatalities happen in August than in any  
other month. Looking across at the year \(rows\), we can  
quickly identify that 1980 saw the most deaths and  
2009 the fewest. The “island” of red in the top center  
ow Can I Look p Trends Across Two Time imensions? 365  
shows that the summer months in the late 1970s and  
1980s were periods of high fatality numbers.  
With seasonality charts, you can choose the two time  
aggregations that are most relevant to your needs.  
For instance, we can change our table to show month  
and day instead of year to find trends within each year,  
as shown in Figure 31.19.  
F 31.19 Heat map showing U.S. road fatalities by month and day, 1975–2011. 366 Chapter 31 Visualizing Time  
The most fatalities have occurred on roads in the  
United States during holiday periods\: January 1, July 4,  
and Christmas Eve. This data doesn’t include number  
of journeys made, so we cannot conclude that there  
are more deaths per journey on those days, but we do  
see the impact on fatalities extremely clearly. It would  
be great to find the data on number of car journeys  
on each day and normalize the fatalities to find out  
which are the most and least dangerous days to drive  
in the United States.  
When building your dashboards, you should choose  
the time aggregation levels that are appropriate for  
your business needs. If you are a transport planner  
managing congestion at a train station, for exam-  
ple, choosing weekday and hour of day might be  
appropriate to allow you to see when your stations  
are most busy.  
A final advantage of highlight tables is their tabu-  
lar structure. It’s easy to look horizontally and ver-  
tically to cross-reference specific information. This  
tabular structure can also help you convince people  
of the value of visualization. We’ve all experienced  
working with people who insist on just having the  
table of numbers. So give them the numbers, but  
as a highlight table. Simply add the labels to each  
cell, and you have a labeled highlight table, shown  
in Figure 31.20.  
Changing hearts and minds  
abeled highlight tables are a great way to  
get people to move from tables toward  
visualizations. F 31.20 Highlight table of U.S. road fatalities by month and day, 1975–2011\: the gateway to visualization? 368 Chapter 31 Visualizing Time  
ow Can I ook at ank,  
ot alue, ver ime?  
Sometimes the rank of things over time is more impor-  
tant than actual value. Take the Billboard Top 40. We  
only want to know who is number one. It doesn’t mat-  
ter to us how much more the number-one artists sold,  
it just matters that they sold the most.  
The same is true in sports. In the English Premier  
League, for example, we don’t remember exact points  
each season for teams, but we do remember where  
they finished and what kind of roller-coaster ride they  
had throughout the season. Figure 31.21 shows the  
bump chart for the 2014–2015 season, with two teams,  
Leicester and Newcastle, highlighted.  
F 31.21 Bump chart showing two teams’ roller-coaster rides during the English Premier League of 2014–2015. Let’s go back and look at our Citi Bike data. In our  
slope chart example in Figure 31.4, we saw that there  
was a big change in the most popular stations over  
time\: Station 8 went from being the most popular  
station at the start of the scheme to the eighth most  
popular 13 months later.  
We might be interested in the rise and fall of pop-  
ularity of stations. The standard line chart showing  
number of journeys by month doesn’t make the ranks  
ow Can I Look at ank, ot Value, ver Time? 369  
obvious, even when one station is highlighted. \(See  
Figure 31.22.\)  
What if we change this to a bump chart instead? In a  
bump chart, the x-axis continues to show time. In this  
case, we’re showing months. For the y-axis, instead  
of showing journeys, we show the rank of each sta-  
tion, based on journeys, for each month. We can see  
this in Figure 31.23.  
F 31.22 Line chart showing journeys at the top eight Citi Bike stations. It is not easy to see how the rank  
changes over time. One station has been highlighted. 370 Chapter 31 Visualizing Time  
F 31.23 Bump chart showing changing rank in top eight Citi Bike stations. One station has been highlighted.  
Bump charts  
Bump charts make rank very clear, but they  
conceal the actual values.  
Compare the bump chart with the line chart. If your  
scenario requires you think about changes in rank  
over time, a bump chart is much clearer than a regu-  
lar line chart.  
Bump charts do present a couple of challenges that  
must be overcome. In Figure 31.23 one Citi Bike sta-  
tion is red and the others are all gray. If all the lines were  
gray, it would be next to impossible to discern one line  
from another. If you make them all different colors, the  
chart can be overwhelming to look at. In Figure 31.24,  
one color is used for each of the eight stations.  
Eight colors is on the limit of what is comprehen-  
sible for a user. If your dashboard is interactive, you  
can use highlighting and tool tips to make each sta-  
tion clearer.  
Another issue with bump charts is that by showing  
rank, you’ve hidden the actual values. Can you have  
your cake and eat it, and show both rank and num-  
bers in a bump chart? One way would be to label  
each point on the line, as shown in Figure 31.25. Also  
see Chapter 22\: Showing Rank and Magnitude which  
shows several ways of approaching this challenge.  
This chart solves the problem only partially\: The size  
of the numbers is not represented visually. You can  
only look up the value of each number. Bump charts  
work when you are interested only in rank. F 31.24 Colored-line bump charts are overwhelming.  
F 31.25 Labeled bump chart. 372 Chapter 31 Visualizing Time  
F 31.26 Bump chart showing progress through a pub quiz/trivia night.  
If you are incentivizing a sales team, measuring each  
member against each other could be more success-  
ful than just focusing on the raw numbers. If you are  
tracking popularity of products, say in a bookstore,  
rank is very important.  
For one final example, Andy keeps score at local trivia  
nights \(pub quizzes\). As well as reading out the scores  
after each round, he shows a bump chart on a big  
projector. Teams get excited seeing their own trajec-  
tory through the duration of the quiz. Have a look at  
the example in Figure 31.26. Imagine how everyone  
felt when they saw that the Magnificent Seven came  
from behind at the end to win the quiz. Also, imag-  
ine how Andy’s Teachers’ team felt to have gone the  
other way.1 Only a bump chart shows this informa-  
tion so well.  
1 Andy \(the author\) would like to point out that “Andy’s Teachers” was not his team. Andy is also the name of his school principal. ow Can I Compare  
rowth ates of hings hat  
appen at ifferent imes?  
Let’s imagine you produce music videos, really popu-  
lar ones for the global pop superstars. In the modern  
age, success is made in the first few days after a new  
release. You want to know total views and compare  
growth rates of your content over time.  
ow Can I Compare rowth ates of Things That appen at ifferent Times? 373  
For example, Figure 31.27 lists the top-viewed You-  
Tube videos of all time \(as of September 2016\).  
Instead of just seeing which video is most popular,  
what if the goal is to measure which ones went viral  
the quickest? The bar chart clearly shows that Psy’s  
“Gangnam Style” leads the pack, but did it reach  
1 billion views more quickly than any other video?  
F 31.27 Bar chart showing views of the top YouTube videos of all time. 374 Chapter 31 Visualizing Time  
First, let’s look at the standard timeline, shown in Fig-  
ure 31.28. Two videos are highlighted\: “Gangnam  
Style” by PSY and “Hello” by Adele.  
The line chart is great. You can see how “Gangnam  
Style” was such a trendsetter; it reached its peak view  
count long before the more recent megahits. “Hello”  
jumps out with the astonishingly high weekly view  
count, which peaked at 129 million views in its sec-  
ond week of release.  
F 31.28 the fastest?  
Line chart showing views per week of the 10 most popular YouTube videos. Can you tell which grew ow Can I Compare rowth ates of Things That appen at ifferent Times? 375  
But the chart doesn’t show us which video reached  
a certain threshold the most quickly. We could show  
the data as a running total over time, as shown in  
Figure 31.29.  
In Figure 31.29, you can see the cumulative total  
views for each video very clearly, but which one hit  
the billion-view mark fastest? Was it Adele or Psy? You  
can’t tell because, although we are good at reading  
slopes, we cannot easily compare them when they  
start at different points.  
F 31.29 Line chart showing cumulative daily views over time of the most popular YouTube videos of all time. 376 Chapter 31 Visualizing Time  
We can solve all these problems by using an index  
chart. An index chart changes the x-axis. Instead of  
the actual date, it is an index representing units of  
time since an anchor point. In this case, the x-axis  
shows number of days since the video was released.  
The chart is shown in Figure 31.30.  
Finally, this chart makes it easy to see which video was  
the fastest growing. Not only did “Hello” reach 1 billion  
views, putting Adele in an exclusive club on YouTube;  
the video did it more quickly than any video in the  
history of YouTube \(88 days, to be precise\).  
As we scan the lines, we can see different shapes  
of growth. Most videos see the fastest growth soon  
after their release. However, there’s one video that  
has grown very slowly\: a “Masha and the Bear” car-  
toon, a Russian animated series.  
Index chart are useful when you want to compare  
growth of events that happened at different times,  
such as\:  
• comparing ticket sales for events run over differ-  
ent periods;  
• looking at progress of different cohorts of students;  
• purchasing behavior of cohorts of customers;  
and  
• A/B testing different types of marketing  
campaigns.  
F 31.30 Index chart of cumulative daily views over time of the most popular YouTube videos of all time.  
“Hello” by Adele was the fastest video ever to reach 1 billion views on YouTube. ow Can I Show the  
uration of vents?  
All the charts we’ve looked at so far involved dis-  
playing one measure at various points in time. What  
if you want to examine durations of time of different  
events? In this situation, a Gantt chart is a great solu-  
tion. \(See Figure 31.31.\)  
Gantt charts are used most commonly in project plan-  
ning. A project is made up of many discrete tasks,  
each of which has a start time, a duration, and a  
ow Can I Show the uration of vents? 377  
planned end time. Some projects can run concur-  
rently. Some can begin only once another project has  
completed. Each task has an estimated and actual  
duration. With a Gantt chart, it is possible to line all  
these items together using bars to work out the total  
duration of a project.  
Gantt charts allow you to see progress toward a goal.  
As events unfold, you can replace estimated duration  
with actual duration. Doing this enables you to see if  
your project is ahead of or behind schedule.  
F 31.31 tasks are shown in dark brown.  
A basic Gantt chart. The total duration of the project is shown at the top \(light orange\). The detail 378 Chapter 31 Visualizing Time  
ow Can I ocus on  
Bottlenecks in a Process?  
By guest author Chris DeMartini  
The jump plot, invented by Tom VanBuskirk, is a  
chart type specifically designed to analyze event  
sequences and identify bottlenecks and outliers  
within them. The chart can accommodate data in  
aggregation as well as scale to distribution views.  
Unique to the jump plot is its ability to visualize event  
sequences where some events may be optional.  
For example, when looking at a contract approval  
workflow, the second or third approval step may be  
required only if the contract exceeds certain amount-  
based thresholds.  
The jump plot displays linear event sequences mov-  
ing left to right on the x-axis in the form of check-  
points, defined as notable events in your sequence  
between which time will be measured. To a user’s  
eye, the x-axis therefore represents sequential events  
over time. The duration of time elapsed between two  
checkpoints \(referred to as a “hop”\) is represented  
on the y-axis by the height of the hop. In this exam-  
ple, the hops are drawn between checkpoints using  
Bézier curves. See Figure 31.32 for the basic layout  
of the chart.  
F 31.32 Jump plot layout.  
The x-axis shows the discrete steps in the process.  
The elapsed time of hops is shown on the y-axis. The  
total duration is 10.81 seconds. There were six hops  
\(a–f\). The longest hop, the bottleneck, was the hop  
between step b and c, which took 5.43 seconds. You  
might wonder why this figure isn’t shown as a bar  
chart; we’ll look at that in a moment.  
Another useful layout for jump plot is one where hops  
are measured against an expectation or threshold,  
referred to as a threshold-based jump plot. Each hop  
can be compared with its own threshold, or a single  
threshold can be applied across the sequence. If the  
hop was below the threshold, it is shown below the  
x-axis. If it was above the threshold, it is shown above  
the x-axis. \(See Figure 31.33.\)  
F 31.33 Threshold-based jump plot layout. ow Can I ocus on Bottlenecks in a Process? 379  
F 31.34 System development life cycle dashboard with a jump plot.  
You can see why a bar wouldn’t be a good way to rep-  
resent the data\: The curves allow multiple sequences  
to be shown.  
The jump plot is designed to identify outliers and bot-  
tlenecks in a sequence of events. Figure 31.34 shows a  
top-down analysis of a software development life cycle  
workflow consisting of nine checkpoints\: open, commit-  
ted, in development, development complete, in testing,  
testing failed, testing complete, reviewed, and closed.  
The jump plot at the bottom of the dashboard shows  
elapsed time between the hops in the development  
life cycle. The biggest hop is between jump 3 and 4\:  
that’s the development step. Note the jumps after  
step 5. The quicker jump, 6.33 hours, jumps directly  
to step 7 \(testing complete\). This is a successful test.  
The other jump from step 5 goes to step 6 \(testing  
failed\). It then has to go back to step 3 to be redevel-  
oped, which is shown beneath the dots.  
Read more about jump plots at www.jumpplot.com. 380 Chapter 31 Visualizing Time  
Which ime Chart Should I Use on  
My Dashboard?  
As we’ve seen, there are many different ways to show  
time. Which is the right one? It depends. This answer  
doesn’t just apply to timelines; it applies to every  
chart.  
When building dashboards, you need to choose the  
chart that best addresses your scenario. A bump chart  
is no use if you want to see actual sales or cumulative  
sales, but it is great for looking at a change of rank  
over time. A highlight table can’t show you trends  
over time for multiple categories, but it can show  
you seasonal trends for one measure. Don’t forget  
that a standard trend line will work perfectly in many  
scenarios.  
We recommend you consider the different ways time  
has been visualized in the scenarios throughout this  
book. Each chart shows the data in a different way to  
achieve a different goal. Chapter 32  
Beware the ead-nd  
ashboard  
382 You’ve considered the purpose of your dashboard.  
You’ve worked with colleagues to ensure the ques-  
tions being answered are the correct ones. You’ve  
considered layout and design and made something  
beautifully functional. In fact, you’ve made a success-  
ful dashboard that helps people answer the questions  
they are asking.  
Congratulations! Building an effective dashboard is  
a difficult thing to do, and you’ve done it.  
But if you think your work is done, think again; you’re  
just getting started.  
Dashboard projects do not have endings. Your busi-  
ness evolves over time, and your dashboards should  
do the same. If not, they run the risk of becoming  
dead-end dashboards.  
A couple of years ago, I \(Andy\) purchased a Fitbit.  
The wearable device tracks your daily activity, focus-  
ing on how many steps you walk each day, with a  
default 10,000-step target. For the first few months,  
this device and its online dashboard were hugely  
motivating. \(See Figure 32.1.\)  
Fitbit took something that was difficult to record,  
step count, and made it easy to track. The dashboard  
didn’t just reveal my daily walking patterns; it moti-  
vated me to change my behavior and walk more. The  
dashboard showed me which days I was failing \(mostly  
on workdays\) and allowed me to make strategies to  
F 32.1 Fitbit dashboard.  
383 384 Chapter 32 Beware the ead-nd ashboard  
walk more by, for example, taking morning strolls  
before my commute. The dashboard answered my  
questions and allowed me to take action.  
After a while, I came to know everything the dash-  
board was going to tell me. I no longer needed to look  
at the dashboard to know how many steps I’d taken.  
The dashboard had educated me to make a good esti-  
mate without needing to look at it. Step count had, in  
other words, become a commodity fact. I’d changed  
my lifestyle, and the dashboard became redundant.  
Now my questions were changing\: What were my  
best and worst days ever? How did my daily activity  
change according to weather, mood, work commit-  
ments, and so on? Fitbit’s dashboard didn’t answer  
those questions. It was telling the same story it had  
been telling on the first day I used it, instead of offer-  
ing new insights. My goals and related questions were  
changing, but Fitbit’s dashboard didn’t.  
After a year, my Fitbit strap broke, and I decided not  
to buy a replacement. Why? Because the dashboard  
had become a dead end. It hadn’t changed in line  
with my needs.  
This happens in business scenarios too. Dashboards  
that don’t evolve at the same pace as your questions  
don’t get used. They become zombie dashboards,  
updating daily, shuffling along like the living dead.  
How many organizations have dashboards that per-  
haps were useful once upon a time but outlived their  
usefulness and were never replaced or updated?  
How exactly do you avoid a Fitbit fate for the dash-  
boards in your business or organization and ensure  
you have an evolving, thriving dashboard culture? We  
recommend taking four steps, discussed next.  
1\. Review Your KPIs  
Every dashboard you build answers questions that  
are current at the time of the design. Consider the  
key performance indicator \(KPI\) dashboard featured  
in Chapter 8, shown again in Figure 32.2.  
Look at the reliability rate. It’s been hitting target for  
a considerable time. There might come a time when  
the business should ensure it is still measuring the  
right thing. If that KPI never fails, why measure it? In  
this case, there is only one year of data so it is prob-  
ably too early to be sure this KPI is fixed, but after  
another year?  
2\. Track Usage with Data  
Do people use the dashboards you’ve designed for  
them? If a dashboard was intended to be looked at  
by, say, 20 senior managers once a week, are you  
achieving that? Maybe the dashboard’s never been  
used, or maybe its usage is waning.  
Identifying a dashboard that’s becoming less popular  
is a great way to identify a potential dead-end dash-  
board. Maybe the business question it asked is now  
solved. In that case, it might be time to remove the  
dashboard from your servers.  
“Low dashboard usage typically signals a need for  
change,” says Matt Francis, who is responsible for  
analytics at the Wellcome Trust Sanger Institute.  
“Sometimes they are for projects that are wound up.  
Other times requirements have changed so we work  
with people to refresh them. This way we ensure dash-  
boards on our systems are giving users answers they  
need.” 2\. Track sage with ata 385  
F 32.2 KPI dashboard.  
Here are a few specific questions to begin your review\:  
• Which dashboards are most and least popular?  
• Which dashboards were popular but aren’t any-  
more? These dashboards might cover a problem  
that the business has now solved.  
• Which dashboards are used by only a small sec-  
tion of the intended audience? Low usage might  
indicate that some users haven’t been trained  
properly in using the dashboard. It could mean  
that some users have different questions that the  
dashboard does not answer.  
These questions can be answered by using data. Get  
the metrics on the number of times a dashboard has  
been looked at, over time. 386 Chapter 32 Beware the ead-nd ashboard  
Mark Jackson, the author of the Tableau Server  
dashboard in Chapter 18, also has multiple dash-  
boards looking at how people use analytics across  
the organization.  
In Figure 32.3, you can see how Mark looks out for  
dashboards that aren’t reaching the right size of audi-  
ence. Look at two workbooks around the center\: User  
Audit and Core Staffing \(labeled 1 and 2\).  
User Audit has around 30 views with an audience of  
approximately 15 people. Core Staffing has well over  
100 views for the same audience size. Mark should  
investigate why the User Audit workbook is not  
receiving as many views as it should be by consult-  
ing the users. It might be that these particular dash-  
boards need to be looked at only a few times a year.  
The data helps Mark, but he needs to talk with his  
audience to get the complete picture.  
Another innovative way Mark tracks dashboards is to  
look specifically at his organization’s executives and  
how often they look at the dashboards. How many  
business endeavors fail because they don’t have com-  
mitted executive support? If the people at the top  
don’t support use of your organization’s dashboards,  
there’s a high chance adoption will fail. As shown in  
Figure 32.4, Mark specifically tracks executive usage  
F 32.3 View of all dashboards on a server, showing number of views \(Looks\) and size of audience.  
Source\: Mark Jackson \(http\://ugamarkj.blogspot.com\), Piedmont Healthcare F 32.4 Mark tracks how often his executives look at the dashboards.  
Source\: Mark Jackson \(http\://ugamarkj.blogspot.com\), Piedmont Healthcare 388 Chapter 32 Beware the ead-nd ashboard  
with their consent. If executive use dwindles, he knows  
he has to address the issue.  
Find out more about Mark’s administrator dashboards  
here\: http\://ugamarkj.blogspot.co.uk/2014/08/  
custom-tableau-server-admin-views.html.  
3\. Speak to Your Users  
If you’re designing dashboards for other people in  
your organization, when was the last time you asked  
them what they think of the dashboards? In fact,  
have you ever actually sat down, in a room, in front  
of the dashboard, and talked through how it is used?  
My hunch is that many people don’t speak to the  
intended audience enough.  
Why do I have that hunch? I was guilty of this in my  
early days as an analyst. I would publish what I thought  
were beautiful, insightful dashboards, then proudly  
send an email to everyone proclaiming something as  
grand as “It’s here! The dashboard you’ve all been  
waiting for. Click this link and insight will follow!” In  
the following weeks, I would become frustrated as I  
looked at the data on who was using the dashboards,  
wondering why my work was being ignored.  
What I hadn’t done was enough consultation with  
the users at the end stages of the project. I hadn’t sat  
down and watched them use the dashboard I’d cre-  
ated. As you build and fine-tune a dashboard, you are  
acutely aware of what every pixel means. You know  
where the color legend is because you put it on the  
dashboard. You know what to click to make the inter-  
action work because you coded those interactions.  
You know what the scatterplot means because you  
chose the variables.  
Sitting down behind someone and asking them to  
use your dashboard can be a very humbling experi-  
ence. \(“Oh no, they can’t answer their questions and  
I thought I’d made it easy.”\) It can also be frustrat-  
ing. \(“How can you not see that there’s a filter on the  
lower right? All you have to do is click it!”\) However,  
it’s the best way to spot the mistakes in your dash-  
board and fix them before sending something to  
your organization that people won’t be able to use.  
4\. Build Starter Dashboards  
We like to personalize our possessions. We all buy  
the same smartphone but then accessorize it with a  
case in order to make it our own. What if you gave  
all users a basic dashboard and allowed them to per-  
sonalize it for their own needs? Doing this acknowl-  
edges that fact that everybody wants to tailor data  
in their own way.  
I work at Tableau. We do have core sales dashboards,  
but when we hire new salespeople, instead of point-  
ing them to a set of dashboards that they need,  
we point them to a very basic dashboard, showing  
very basic sales information\: sales over time and by  
geography.  
They tailor the dashboard over time, as they get  
used to their part of the sales organization, so that it  
answers the questions they need for their jobs. Not  
only do they build something relevant to their needs,  
they also have a better sense of pride and ownership  
because it’s their own toy.  
What does become critical in this situation is that  
there is consensus around the goal. Not only must  
everybody be using a well-governed data source, it’s also important that each employee is well aware of  
the strategic goal.  
Although we have many, many dashboards in our  
organization, they all use the same governed data  
sources. We can be confident that we have a sales team  
proud of their own individual dashboards, making con-  
clusions from the same single source of the data.  
Summary 389  
Summary  
The real world is not a static place. To avoid dead-end  
tools, you should regularly review your dashboards  
using data and conversation. As you remove old ones,  
publish new ones, and adapt existing ones, you need  
to work closely with all stakeholders to make sure they  
are supportive and aware of the changes.  
