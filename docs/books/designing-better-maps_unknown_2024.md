OceanofPDF.com OceanofPDF.com Esri Press, 380 New York Street, Redlands, California 92373-8100  
Copyright © 2024 Esri  
All rights reserved.  
e-ISBN\: 9781589487833  
The Library of Congress has cataloged the print edition as follows\: 2024939660  
The information contained in this document is the exclusive property of Esri or its licensors. This work  
is protected under United States copyright law and other international copyright treaties and  
conventions. No part of this work may be reproduced or transmitted in any form or by any means,  
electronic or mechanical, including photocopying and recording, or by any information storage or  
retrieval system, except as expressly permitted in writing by Esri. All requests should be sent to  
Attention\: Director, Contracts and Legal Department, Esri, 380 New York Street, Redlands, California  
92373-8100, USA.  
The information contained in this document is subject to change without notice.  
US Government Restricted/Limited Rights\: Any software, documentation, and/or data delivered  
hereunder is subject to the terms of the License Agreement. The commercial license rights in the  
License Agreement strictly govern Licensee’s use, reproduction, or disclosure of the software, data, and  
documentation. In no event shall the US Government acquire greater than RESTRICTED/LIMITED  
RIGHTS. At a minimum, use, duplication, or disclosure by the US Government is subject to restrictions  
as set forth in FAR §52.227-14 Alternates I, II, and III \(DEC 2007\); FAR §52.227-19\(b\) \(DEC 2007\)  
and/or FAR §12.211/12.212 \(Commercial Technical Data/Computer Software\); and DFARS §252.227-  
7015 \(DEC 2011\) \(Technical Data–Commercial Items\) and/or DFARS §227.7202 \(Commercial  
Computer Software and Commercial Computer Software Documentation\), as applicable.  
Contractor/Manufacturer is Esri, 380 New York Street, Redlands, California 92373-8100, USA.  
Esri products or services referenced in this publication are trademarks, service marks, or registered  
marks of Esri in the United States, the European Community, or certain other jurisdictions. To learn  
more about Esri marks, go to\: links.esri.com/EsriProductNamingGuide. Other companies and products  
or services mentioned herein may be trademarks, service marks, or registered marks of their respective  
mark owners.  
For purchasing and distribution options \(both domestic and international\), please visit  
esripress.esri.com.  
187762  
OceanofPDF.com **CONTENTS**  
Preface and acknowledgments ix  
# CHAPTER 1\: PLANNING MAPS 1  
# Designing for map purpose  
# 2  
Au  
ience  
2  
d  
Visual hierarchy in layout 4  
# Planning a layout 6  
Balancing empty spaces 7  
Re  
Experim  
entation an  
d  
critique  
13  
# Map projections in  
# esign 14  
# d  
Shape within layout 14  
Choosing proj  
ection properties 16  
UTM proj  
ections 17  
Custom azimuthals 18  
# CHAPTER 2\: BASEMAP BASICS 21  
# Lan  
# d  
# forms 22  
El  
evation 22  
Terrain sha  
ing 26  
d  
Curvature  
29 **Lan**  
# use  
# 31  
# d  
Imag  
ery 31  
Lan  
d  
cover 34  
Property 36  
# Vector base  
# 38  
Water 38  
Boun  
d  
aries 39  
Transportation 40  
Point data 41  
# Customizing base to purpose  
# 42  
# CHAPTER 3\: SCALE AND TIME 45  
# e  
# How cartographers use scal  
Larg  
e versus small 46  
Proj  
e  
ections affect scal  
47  
# 46  
# e  
# Data types through scal  
e  
Terrain through scal  
50  
e  
Water through scal  
53  
Place  
e  
data through scal  
# 50  
58  
# G  
# eneralizing for small  
# er scal  
# es 64  
Simplify 65  
Aggre  
gate  
66  
Collapse  
68 Eliminate  
68  
# Mapping through time  
Base  
maps for past tim  
Tim  
e series 72  
# 71  
es 71  
# CHAPTER 4\: EXPLAINING MAPS 75  
# Map l  
# egen  
# s 76  
# d  
e  
Data l  
g  
en  
Base  
e  
map l  
Customize  
s 76  
d  
g  
en  
s 79  
d  
e  
d l  
g  
en  
s 81  
d  
# Wise word  
# ing 83  
Hierarchy in text content 84  
Describing mappe  
d  
calculations 86  
Atten  
d  
ing to line  
logic 90  
# Re  
# e  
Scal  
e in  
d  
icators 92  
Direction in  
d  
icators 93  
Overd  
oing d  
ecoration 94  
# l  
# ements 92  
# CHAPTER 5\: SHARING MAPS 97  
# Designing for map me  
# ia 98  
# d  
Resolution 98  
Map size an  
d  
viewing distance  
99 Color quality 101  
# Choosing export options 103  
Raster export formats 104  
Vector export formats 106  
Transparency 108  
# Copyright an  
# d  
# open access 108  
Original work in cartography 109  
Rights an  
d permissions 109  
Public licenses an  
d  
open data 110  
# CHAPTER 6\: TYPE BASICS 113  
# Fonts 114  
Font anatomy 114  
Cate  
gories of fonts 115  
Font choice  
116  
Type styl  
es an  
d  
font families 117  
Special characters 119  
Font formats an  
d permissions 120  
# Labe  
# l size  
# 121  
Character size  
121  
Kerning, tracking, an  
d  
character spacing 122  
Line spacing 122  
**Type effects 124** Callouts 124  
Sha  
ows 125  
d  
Halos 126  
# CHAPTER 7\: LABELING MAPS 129  
# Map text 130  
Graphic map text 130  
Dynamic labe  
ling 130  
Annotation 131  
# Labe  
# ls as symbols 132  
In  
d  
icators of feature cate  
gory 133  
In  
d  
icators of feature  
hierarchy 135  
Ambiguity an  
d  
contra  
d  
iction in classi  
Transparency an  
d  
anti-aliasing 138  
# Labe  
# l placement 139  
Point labe  
l place  
m  
ent 139  
Line  
labe  
l place  
m  
ent 144  
Area labe  
l place  
m  
ent 146  
Dense  
labe  
l place  
m  
ent an  
d tra  
e-  
d  
offs between rul  
es 150  
136  
# CHAPTER 8\: COLOR BASICS 153  
# Perceptual d  
# imensions 154  
Hue  
154 Lightness 157  
Chroma 158  
# Perceptual color systems 161  
Three-  
im  
d  
ensional color spaces 161  
Not HSV 164  
Color cubes 166  
# How to mix color 167  
G  
eneral gui  
e  
d  
lines 168  
CMYK mixing 170  
RGB mixing 172  
Perceptual mixing 173  
# CHAPTER 9\: COLOR ON MAPS 175  
# Color schemes for maps 176  
Sequential sch  
e  
m  
es 176  
Diverging sch  
e  
m  
es 178  
Qualitative sch  
e  
m  
es 180  
# Bivariate color schemes 183  
Transparent combinations 184  
Sequential  
-sequential 184  
Diverging  
-  
d  
iverging 186  
Qualitative-sequential 188  
# d  
# justing color se  
# l  
# ections 188  
**A** Unexpecte  
d  
color chang  
es 189  
Colors for th  
e colorblin  
191  
d  
Custom color ramps 196  
# CHAPTER 10\: CUSTOMIZING SYMBOLS 199  
# Point symbols 200  
Point symbol size  
Point symbol shape  
e  
Point symbol angl  
200  
203  
205  
# Line an  
# d  
# area symbols 207  
Line symbol size  
207  
Line symbol pattern 208  
Area pattern 211  
# Eight visual variabl  
# es 213  
Visual variabl  
es for ord  
ere  
Visual variabl  
es for qualitative  
d data 213  
data 214  
# CHAPTER 11\: COMBINING SYMBOLS 215  
# Multivariate map symbols 216  
Overlai  
d  
symbols 217  
Bivariate symbols 218  
# Visual variabl  
# e pairs 220  
Quant/Quant 220 Qual/Quant 221  
Qual/Qual 222  
# Put it all together 224  
Labe  
l d  
esign 224  
Coloring terrain 226  
Precinct patterns 226  
Designing better maps 228  
# APPENDIX 229  
# ColorBrewer 229  
# Colorblin  
# d d  
# iagram 244  
Acronyms 245  
Resources 247  
About the author 249  
Index 251  
OceanofPDF.com **PREFACE AND**  
# ACKNOWLED  
# GMENTS  
# T  
he third edition of Designing Better Maps grew from working with my  
undergraduate students as they learn cartography using GIS tools. This  
audience contrasts with the   
learned working with GIS and data experts at the US Census Bureau, National  
Institutes of Health, and US Geological Survey. The   
started from rough designs in GIS for single maps and map series. The second  
edition was written in the context of advising on systematic map design  
approaches for the whole country using GIS. The third edition has expanded  
in new ways, with more on basemaps through scale, generalization methods,  
and map projection, plus a greater variety of map examples created with GIS.  
I had the pleasure of working with a talented student cartographer, Nate  
Cherok, to make many new maps and diagrams for the third edition. He  
planned and designed the maps using numerous open data sources. He kept  
me organized, cheerfully withstood many rounds of critique, and contributed  
substantially to the content of this edition. We pulled data from federal  
agencies and from cities and other organizations that explicitly allow their  
data and maps to be used by others. The work of undergraduate and graduate  
student assistants from the second edition is also retained in the third edition\:  
Aaron Dennis, Elaine Guidero, and Bill Limpisathian are all geography  
professionals now. I enjoyed getting back to making the maps and diagrams,  
too.  
Since the second edition, academic administration occupied much of my  
attention as department head, but I kept teaching cartography. Now that I’ve  
returned to being a professor, I have relished diving back into map design. Thank you to the Department of Geography and the department’s  
GeoGraphics Lab at Penn State for supporting my book creation with funds  
for student assistants, equipment, and space to gather and build community.  
I’m always inspired and renewed by talks and by colleagues at NACIS  
conferences. And of course, a big thank-you to Judy Olson, my master’s and  
PhD adviser, who set me on the path of rigorous design research and  
teaching.  
Esri Press editors and book designers, including Claudia Naber, David  
Oberman, and Monica McGregor, bring spectacular book design standards  
and skills to the production. And I’ve discovered that master mechanics are  
just as detail oriented and involved with practical design problems as  
cartographers. Thank you to Paul Stinson for his encouragement and support  
on this creative journey.  
Pleasant Gap, Pennsylvania  
May 2024  
OceanofPDF.com **CHAPTER 1**  
# PLANNING MAPS  
# C  
ommunication skills are crucial to every professional’s work. Verbal  
skills are not enough to e  
you also need graphic skills. This book helps you develop the graphic skills  
needed for mapmaking. Cartographic expertise allows you to communicate  
geographic information clearly with maps. Amateur-looking maps can  
undermine your audience’s ability to understand important information and  
weaken the presentation of a professional data investigation.  
Designing better maps means thinking carefully about each aspect of the map-  
design process. When creating a page or screen layout, you size each map  
element relative to its importance for the map’s purpose. The positions and  
sizes of empty spaces between elements are as important to layout as the  
elements themselves. This chapter presents map-design essentials that will  
help you produce clear, meaningful maps that invite reading.  
Choosing a map projection is also a design decision that depends on the  
purpose of the map. Projecting the round earth onto the   
unavoidable distortions in the geography of your map. By choosing an  
appropriate map projection, you can manage the distortion so that it has  
minimal e  
projection partly determines the shape of the map as well as its layout.  
Here are the essentials of planning better maps\:  
Linking layout to the map’s purpose and using visual hierarchy Planning a layout, balancing empty spaces, re  
layout, and valuing experimentation and critique  
Selecting map projections to suit the map’s purpose  
# DESIGNING  
# FOR MAP PURPOSE  
The impetus to design better maps comes from a desire to make maps that are  
clear and convincing. A successful design begins with knowing why the map  
is being made. Cartographers begin planning maps by asking themselves and  
their clients several questions\:  
What information is being mapped?  
Who will be reading the map?  
Is the map content coordinated with written text or other graphics?  
What sizes and media will be used to display the map?  
What are the time and budget constraints on map production?  
The topic and intended audience will dictate many of a map’s characteristics.  
It may be necessary to refer to related research or to other maps in the same  

project. Researchers who make their own maps have the advantage of  
familiarity with their data and how it is typically portrayed. They will still  
bene  
design work.  
The purpose of your map will determine what parts of it are most important.  
Which elements of your map do you want people to notice   
remember after they  or visual hierarchy—is created by designing some parts of the map to appear  
as background information and others to be prominent as foreground. You  
should design map elements that supply supporting information by decreasing  
visual importance, echoing their role in understanding the mapped  
information.  
# Au  
# ience  
# d  
If you are laboring over map design, you are probably making a map for  
people beyond your immediate workgroup. Who are these map readers? If the  
audience is new to the information mapped, they may require a simpler  
presentation. Likewise, if they are people who are too busy to spend much  
time reading, they will also need a simple map that summarizes the  
information. Maps that have a simple purpose, such as a navigation display  
you check while driving, demand a simple design. Maps for non-experts or  
busy people will have a similar look. They should have a single message that  
focuses the attention of the reader.  
In contrast, maps for people who already know about the topic can be more  
complex. If they are experts on the data that is mapped, they will expect a rich  
and multilayered presentation of information that adds to their knowledge or  
thoroughly supports your \(the mapmaker’s\) contention. The more knowledge  
and time the map reader brings to the task of reading your map, the more  
information you will be able to include. More complex maps will motivate  
advanced map readers to spend time examining a map on a topic of interest.  
Detailed information on the map will support their map reading rather than  
distract from it.  
When designing a map, you should also consider your audience’s physical  
ability to read. If the map will be used by older people and others likely to  
have reduced vision, keep the map text large enough to be legible. If the map will be read in dim or otherwise di  
lightness contrasts. You may even choose to design your maps to  
accommodate color-blind readers, approximately four percent of the  
population.  
A map can be tailored to the knowledge level and interests of its audience by  
reducing the categories of data shown. Figure 1.1 shows many possible layers  
for mapping a national forest and the surrounding area in Michigan. The map  
in   
highlighting example sites attractive for recreational tourism within the  
forest.  
Maps with di  
is designed from the same data as   
visual emphases. In   
interest \(peaks, dunes, and wild  
the forest. The map in   
visual prominence for roads, cities, and towns. The recreation features that  
are bold in   
background. The two maps show the same set of lines and points for the  
Manistee National Forest area, but they are symbolized two di **FIGURE 1.1.** Num  
erous  
d  
ata layers for Manistee  
National Forest, inclu  
d  
ing th  
e public lan  
d  
boun  
d  
ary, cities, roa  
d  
s, hy  
drography, lan  
d  
cover, an  
d  
ecological re  
gions. Data source for  

ental Protection Ag  
ency \(EPA\), US Forest Service \(USFS\), US  
e  
G  
ological Survey \(USGS\), National Hy  
drography Dataset Plus \(NHDPlus\). Maps by N.  
Ch  
erok, Departm  
ent of G  
e  
ography, Th  
e Pennsylvania State University \(Penn State  
e  
G  
ography\). **FIGURE 1.2.**  
A simpl  
er map of Manistee  
for recreational tourism.  
National Forest showing three sites highlighte  
d **FIGURE 1.3.** Map version focuse  
an  
d  
near th  
e national forest.  
d  
on trave  
l, with visual  
e  
mphasis on roa  
s an  
d  
d towns in  
The variety of data for a place can be used to make maps with similar  
purposes by emphasizing di  
less detail. It emphasizes recreation sites and the forest’s overall area. This  
map would be useful for attracting tourist groups to the forest. The map in  

within two ranger districts in the national forest and includes hydrography  
and ecological regions. It would be suitable for a more expert group interested  
in environmental management issues. **FIGURE 1.4.** Map version showing g  
eneral  
ecore  
rang  
er d  
istricts to summarize th  
e forest’s environm  
USFS, NHDPlus. Map by N. Ch  
erok, Penn State  
G  
gions, lan  
d  
cover, hy  
drography, an  
d  
ent for manag  
ers. Data source\: EPA,  
e  
ography.  
# Visual hierarchy in layout  
A map’s purpose determines which of its elements are the most important and  
should be displayed most prominently in the visual hierarchy. The title and  
key features on the main map are highest in the visual hierarchy. Base or  
background geography is lower in the visual hierarchy. Chapter 2 introduces  
basemap themes common for supporting the main map content. Other  
supporting information, such as source notes, should be lowest in the hierarchy. These are often along the margins of the display and called  
marginal elements. Chapter 4 elaborates on the design of marginal elements,  
such as text wording, legends, scale bars, and direction indicators. But   
you need to understand map layout overall.  
Map design is largely a process of deciding how prominent to make each  
element of your map layout. Numerous graphic e  
GIS software. Your decisions whether to use them or change them are guided  
by the visual hierarchy of information in your map. A clear understanding of  
the hierarchy of the map’s elements to suit its purpose is the essence of good  
design. Designs that do not follow a logical hierarchy are cluttered, confusing,  
and hard to read. Map designs that do are crisp, organized, inviting, and to  
the point.  
The list of elements to consider can be extensive for a complex project,  
though most maps will not include every element\:  
Main map  
Smaller-scale location map  
Larger-scale inset maps showing detail  
Insets of locations outside the area of the main map  
Title  
Subtitles  
Legends  
Scale indicators  
Orientation indicators Graticule \(lines of latitude and longitude\)  
Extent indicators  
Explanatory notes  
Source notes  
Publisher credit and copyright notice  
Author credit  
Neatline  
Additional graphics \(such as photos and graphs\)  
Hierarchy is established by an element’s position in the map layout, its size,  
and the amount of open space around it. A note in small text in the lower-left  
corner will be lower in the hierarchy than a title in large text that is centered  
across the top of the map. Contrasting colors, line weights, and line detail also  
establish hierarchy. The elements of a   
\(BC\), Canada, in   
layout. This lack of planning produces a cluttered and unclear product. From  
top to bottom, the elements are the following\:  
Title and location map  
Source note  
Legend and detailed inset map  
Scale for main map  
Orientation indicator \(north arrow\)  
Explanatory note Main map with graticule **FIGURE 1.5.**  
e  
A jumbl  
of map e  
Syste  
m \(CWFIS\), Natural Resources Cana  
e  
l  
e  
m  
ents. Data source\: Cana  
d  
ian Wildlan  
d  
a \(NRCan\); Governm  
Map by N. Ch  
erok, Penn State  
G  
ography.  
d Fire Information  
ent of British Columbia.  
Figures 1.6 and 1.7 show two organized layouts of the same   
In addition to the di  
of these layouts is also di  
danger ratings for the entire province, while the second \(  
emphasizes park detail in extreme risk areas of southwest BC. The di  
in visual hierarchy between the two maps is established mainly by changing  
the sizes of elements and repositioning them within the layout.  
In   
map. It is smaller and positioned in a less prominent location than in the  
previous layout. Because this di  
map, it has been suitably retitled. **FIGURE 1.6.** Layout e  
mphasizing   
ang  
d  
er in BC province  
. **FIGURE 1.7.** Layout e  
mphasizing parks in southwest BC, with province serving as secon  
location map. Data source for   
1.7\: CWFIS, NRCan, Governm  
ent of British  
Columbia. Maps by N. Ch  
erok, Penn State  
d  
G  
e  
ography.  
d  
# PLANNING  
# A LAYOUT  
Once you have decided the hierarchy of importance for your map elements,  
position them within the display. Then step back, squint your eyes, and look  
at the arrangement of empty spaces on your page. Designing the positions and  
shapes of those empty spaces is a key to good layout. Experimenting with your  
design can reveal new and more e  
layout.  
Geographic areas are often irregularly shaped, and a novice designer may be  
tempted to   
of the map. Unfortunately, some designs evolve like this\: a map designer says, “I see a big hole in a lower corner of my map, so I will use a large compass  
rose to   
future maps will bene  
strategy is overly large or bold map elements that are at the wrong level in the  
visual hierarchy of the map.  
# Balancing empty spaces  
If the goal of layout is not consistent   
across a screen is an act of balancing empty spaces. If you have an empty space  
in one corner, you can position other map elements to produce empty spaces  
that are similar in size in other parts of the display to balance that gap. These  
open areas are useful too; they o  
information of your map and text blocks. They can open up a complex display  
by separating groups of elements so that their relationships can be better  
understood.  
Two maps of multimodal transportation options in Burlington, Vermont,  
provide examples of a densely arranged layout and a more loosely arranged  
layout. Both layouts are suitable for the elements and purpose of the map  
\( **FIGURE 1.8.** Compact layout of map e  
Burlington, Vermont.  
e  
l  
m  
ents showing multimo  
d  
al transportation in **FIGURE 1.9.** Looser layout of map e  
source for   
d  
1.9\: State  
e  
G  
ography.  
e  
l  
m  
ents for th  
e sam  
e  
map of Burlington, VT. Data  
of Vermont, USGS. Maps by N. Ch  
erok, Penn State  
The same maps are marked up to encourage you to focus on the empty spaces  
in the layouts \(  
small and similar in size throughout the map. In   
highlights are larger but are still balanced in their arrangement on the page.  
You can improve your map layouts by learning to see these empty places,  
create them, move them around, and use them as design elements. **FIGURE 1.10.** Pink is use  
d to highlight e  
mpty spaces in th  
e compact layout. **FIGURE 1.11.** Pink highlights larg  
er e  
mpty spaces in th  
e  
looser layout. Data source for  

d  
1.11\: State  
of Vermont, USGS. Maps by N. Ch  
erok, Penn State  
e  
G  
ography.  
Drawing boxes around map elements makes designing with empty space  
more di  
empty space into distinctive shapes—inside the box and outside the box—that  
become di  
outside the box may crowd adjacent parts of the map. Inside the box, the gaps  
between text and the edge of the box can create distracting shapes that are  
di  
space around the text, which has a less distinctive shape and is easier to  
balance with other empty space in the design. The top portion of a third layout of the Burlington map uses boxes around the  
title, legend, and the locator map \(  
previous designs.  
Orange highlights have been placed in the many crowded and tight spaces  
created by these boxes in a marked-up version of this same design \(  
1.13\). These tight spaces can be arranged, but it will be harder to produce a  
balanced layout.  
The orange highlights on the map in   
inside and outside the boxes. Notice how little control the designer has over  
the shapes of these spaces because they are dictated by the boxes.  
**FIGURE 1.12.** Boxe  
d  
e  
e  
l  
m  
ents in th  
e  
layout of Burlington. Boxes move th  
e  
locator map high  
er in th  
e visual hierarchy of th  
e  
overall d  
isplay.  
e  
l  
g  
en  
an  
d  
d **FIGURE 1.13.** Orang  
e  
highlights th  
e pinch  
e  
d  
an  
d tight spaces in this boxy layout. **FIGURE 1.14.** Orang  
e  
highlights th  
e num  
source for   
e  
G  
ography.  
erous e  
mpty spaces in th  
e boxy layout. Data  
of Vermont, USGS. Maps by N. Ch  
erok, Penn State  
In the next example, the boxes create a di  
angles near the center of the detailed inset map from the bottom part of the  
map layout \(  
Empty spaces that   
the boxes are removed from the design. Notice also that removing the strong  
geometric box shapes pushes the legend back in the visual hierarchy where it  
belongs as supporting information \(  
rectangles can unintentionally elevate an element in the visual hierarchy of  
the layout. **FIGURE 1.15.** Boxy layout within inset map of  
d  
owntown parking  
d  
etails. **FIGURE 1.16.** Th  
e  
layout of th  
e inset map is improve  
d  
wh  
en th  
e boxes are re  
move  
inset is th  
e  
lower l  
eft of Data source for   
d  
1.16\: State  
Vermont, USGS. Maps by N. Ch  
erok, Penn State  
e  
G  
ography.  
d  
. This  
of  
Learn to see and use the empty spaces between elements when you are  
designing a layout. Unnecessary boxes around map elements produce gaps and  
spaces that interfere with the design of an attractive and balanced layout of  
map elements. It is better to group elements with e  
empty space rather than containing them in restrictive and visually dominant  
boxes.  
# Refining a layout  
A map layout works best when elements that are conceptually related are  
placed physically near one another. This seems obvious, but it can be di  
to accomplish in a layout with many map elements. For example, a confusing  
association can result if a scale bar is placed closer to an inset or location map  
than the main map to which it refers. Proximity is an important visual cue. An enlargement of a portion of the BC map, redesigned, shows a scale bar  
positioned within the main map \(  
to the inset map and, therefore, might be misconstrued as pertaining to it.  
**FIGURE 1.17.** Th  
e scal  
e bar is ambiguous because  
of its close proximity to th  
e inset. Data  
source\: CWFIS, NRCan, Governm  
ent of British Columbia. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
As you decide how adjacent objects will be positioned, examine the details of  
how they align both vertically and horizontally. Look for linear elements that  
are almost aligned. Do you want them to be perfectly aligned or do they need  
to be placed intentionally out of alignment? You do not want to unthinkingly  
align everything; that strategy may produce a display that is more structured  
and static than is suitable for your map’s purpose. Adjusting alignments so  
that they are either perfectly aligned or obviously not aligned con  
your positioning is intentional, not accidental. Ambiguous alignments look  
like errors. The portion of the BC map in   
slightly out of alignment. Though the elements have been positioned  
reasonably, the map has a messy appearance because these details are not  
purposeful in their organization. The missed alignments are highlighted in  
purple in the second map \(  
Figure 1.20 pulls the elements into an organized arrangement with intentional  
alignments and purposeful spacing. For example, subtitles are closest to their  
respective maps and the legend title is closer to its content than to the smaller  
maps. The result is a clear, professional presentation.  
**FIGURE 1.18.** Th  
e slight misalignm  
BC map.  
ents of e  
e  
l  
m  
ents pro  
d  
uce an unpolish  
e  
d layout of this **FIGURE 1.19.** Th  
e  
misalignm  
ents are  
highlighte  
d  
e  
in purpl  
. **FIGURE 1.20.** Th  
e e  
e  
l  
source for   
N. Ch  
erok, Penn State  
m  
G  
ents have been aligne  
d to improve th  
e  
e  
ography.  
layout of th  
e  
map. Data  
ent of British Columbia Maps by  
Careful alignment can also remedy extraneous or distracting shapes where  
geographic data coincides awkwardly with graphic frames. These  
intersections can misleadingly connect the geography to its frame to produce  
geometric shapes that draw the reader’s attention away from the body of the  
map. For example, if a state line runs directly to the corner of the frame, the  
three lines radiating from that one point become more visually dominant.  
Because you can control the position of the geography within its frame, a  
slight adjustment will usually solve the problem. Choosing di  
for frames and geographic features can also reduce these e Figure 1.21 shows a few problem intersections between the vivid main map’s  
frame and the state boundary lines. The problems \(highlighted in orange in  

directly into the lower-left corner. The small tip of Cape Cod that pokes into  
the inset area at the lower right erroneously resembles an island rather than a  
peninsula. The southern edge of Newfoundland also creates clutter above the  
title area within the overall map frame.  
The geography is not wrong, but frame positioning is sloppy. Figure 1.23  
shows that slight shifts in frame positions relative to the geography solves  
these problems without compromising the intent of the map, to show mobile  
wireless coverages in New Hampshire. **FIGURE 1.21.** This map of LTE \(Long Term Evolution\)  
intersections of fram  
es with state boun  
d  
aries an  
d  
d  
ata coverag  
e contains  
d  
istracting  
coastlines. **FIGURE 1.22.** Intersections that can be improve  
highlighte  
d  
with orang  
e  
.  
d by alignm  
ent a  
d  
justm  
ents are **FIGURE 1.23.** Slight a  
d  
justm  
ents in th  
e re  
lationship between th  
e fram  
e an  
d th  
e  
re  
e  
layout. Data sources for   
e  
d  
eral Communications  
Commission \(FCC\), Natural Earth. Maps upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
e  
g  
ography  
ography. Alignment adjustments are the   
professional-looking display. You can adjust them endlessly, so seeing  
potential problem areas at the start of a project and using guides on-screen  
and other alignment tools can help you complete your design work e  
# Experimentation an  
# d  
# critique  
In addition to planning hierarchies and balancing empty spaces, a good dose  
of experimentation often improves a map design. Novice designers tend to  
place map elements in positions that seem obvious and workable. They may  
adjust these positions or change the sizes of elements slightly to improve the  
layout, but they do not question the initial arrangement of elements in the  
display.  
Before you start making small adjustments to improve a layout, push yourself  
to think of some arrangements radically di  
assuming will work. Change the display’s orientation from portrait \(tall\) to  
landscape \(wide\) and see how elements   
top of the page to the bottom. Try pulling them into a more compact  
arrangement with overlapping elements. Overlay titles and text blocks on  
some conveniently open areas within the map. You may come back to the   
layout in the end, but this experimentation is an important   
design.  
The BC   
landscape orientations \(  
balanced with similar visual hierarchies. **FIGURE 1.24.** BC   
ang  
d  
er map in portrait orientation. **FIGURE 1.25.** BC   
ang  
d  
er map in lan  
an  
d  
State  
1.25\: CWFIS, NRCan, Governm  
e  
G  
ography.  
d  
scape  
orientation. Data source for   
ent of British Columbia. Maps by N. Ch  
erok, Penn  
Equally important to experimentation is asking other people to judge your  
draft map layout. When you ask a person to critique your work, your job is to  
be quiet and let them do what you have asked. A critique is not an  
opportunity to explain or defend your decisions. You may adjust or discard  
many of their suggestions, but do that only after you hear them out. During  
the critique, ask them to elaborate on reasons behind their ideas and  
interpretations, but try not to spend time debating them.  
A draft map usually has un  
colors, or errors. The person doing the critique will often zero in on these  
details  at the big picture, the overall layout. Help them get past the details; details are  
easier to critique than the larger scope of a project.  
You should ask a few people for suggestions and balance their critiques. Pay  
attention to their reasoning and recommendations, but be aware that points  
of confusion can sometimes be improved by making changes other than the  
ones suggested. For example, one critic may suggest that legend boxes be  
made larger so they are more visible, and another may suggest spacing the  
boxes. You may decide to change the position of the legend so the boxes are  
not as close to the colorful main map to make them more visible, addressing  
both concerns without making either suggested change.  
A critique is raw material that pushes you to experiment and to re  
decisions. It also keeps you honest—it prevents you from going forward with  
convoluted adjustments when the overall layout \(which seemed perfect at  

Designers get good at moving on from initial ideas.  
# MAP PROJECTIONS IN DESIGN  
Many mathematicians have been entranced by the interesting puzzle of  
projecting the spherical globe onto the   
had fun physically acting this out using an old globe that I found on the  
roadside one day. We stomped and pulled and tore this poor old carcass into a  

\(and more kindly\). Your job as a mapmaker is to choose a projection that  
relegates those distortions to places on the map that are not important for  
your message. This challenge makes projection selection a design decision  
because it depends on the purpose of the map.  
**Shape within layout** If you are making a detailed map of a small land area \(a large-scale map\), the  
particulars of a suitable map projection will not be crucial unless map readers  
will be taking detailed measurements from the map. If you are mapping larger  
areas—all the US states, for example—you should put more thought into the  
map projection. For continental, oceanic, or hemispheric mapping, projection  
becomes a critical decision. If you see a map of the United States that looks  
like a rectangular slab, with a straight-line US-Canada border across the west,  
be suspicious of the mapmaker’s knowledge of map projection and of  
interpretations of the mapped data.  
For example, if you want to understand the road network on a map with a  
poorly chosen map projection, you will not know whether roads look sparse  
in an area because it is underdeveloped or because the map is distorted in a  
way that happens to expand that part of the map. You won’t know whether an  
elongated east–west pattern is in  
projection choice. Likewise, maps of point patterns or area densities need  
equal-area projections for accurate interpretation.  
Figure 1.26 shows a map of western Canada produced with a plate carrée  
projection \(also called an equirectangular projection\). The length of one  
degree of latitude on the page is equal to the length of one degree of  
longitude, forming a square grid. This projection is sometimes misnamed “no  
projection.” Plate carrée seems like a   
length of degrees of longitude gets smaller as you near the poles. \(The length  
of one degree of longitude is half the length of a degree of latitude at 60°  
north.\) The provinces, and especially the northern islands of Canada, appear  
stretched horizontally because they are distorted by the projection. East-west  
scale \(degrees of longitude\) gets larger as you go north on this map. Judging  
the density of roads or the sizes of national parks is di  
that creates these distortions. A more suitable projection of the same area of Canada is shown in   
This map is made using an Albers equal-area projection with two standard  
parallels \(lines of true scale\) running through the area of interest at 52° and  
60° north latitude.  
The provinces are proportioned quite di  
map in   
taller than Jasper or Ban  
Areas are correct all over this map \(  
roads and small lakes, can be accurately judged.  
Projection a  
size and layout of the map. You can see how much of northern Canada is not  
shown in   
northern Canada was relevant for this map, a larger frame or a smaller scale  
would be needed to suit the map’s purpose. **FIGURE 1.26.** Th  
e plate carré  
e  
map proj  
ection  
d  
istorts this portion of Cana  
a.d **FIGURE 1.27.**  
Albers equal  
-area map proj  
ection of a portion of Cana  
d  
a with stan  
d  
ard lines  
at 52° an  
d  
60° north latitu  
d  
e shown as curve  
d brown lines. Data source for   
d  
1.27\: Natural Earth. Maps upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
Mapmakers who are not familiar with modifying their map projections may  
shy away from conic projections, such as an Albers equal area choice. Conic  
projections have curved latitude lines that produce undesirable rotation away  
from north-up with increasing distance from the central meridian \(the  
intended middle of the projection\). Figure 1.28A shows the state of  
Pennsylvania framed within the Albers projection for the whole US \(its  
central meridian is 96° west\). The central meridian of  to 79° west, the middle of the state. The resulting north-up orientation suits  
the state map much better. Maps of Pennsylvania at an unnecessary tilt \(north  
angles left\) abound for the lack of a modi  
# Choosing projection properties  
Shape di  
addition to display layout. Figure 1.29 illustrates distorted directions, or  
azimuths, with a   
In both cases, the true shortest path is the solid orange line. If you were  
hoping to snap a photo out the window of charismatic desert landscapes as  
you   
map suggests in   
on the earth instead passes over waters of the Great Australian Bight. The  
second map \(  
position this straight line across the surface of the earth \(a great circle route\)  
as a straight line on the map. **FIGURE 1.28.** Pennsylvania state  
outline in a US Albers proj  
ection uses th  
e  
d  
efault central  
m  
m  
eri  
d  
ian for th  
e contiguous US \(***A***\) instea  
d  
of improving th  
e  
map by changing th  
e central  
eri  
d  
ian to th  
e center of th  
e state \(***B***\). **FIGURE 1.29.**  
A Mercator proj  
ection \(***A***\) an  
d  
an azimuthal proj  
ection \(***B***\) each plot real  
-  
world  
straight paths  
d  
ifferently. On both maps, th  
e soli  
d line is th  
e  
great circl  
e route  
between Nairobi an  
Sy  
ney, an  
d  
d  
d th  
e  
d  
ash  
e  
d line is th  
e rhumb, a line  
of constant compass  
bearing. Data source for   
d  
1.29\: Natural Earth. Maps by N. Ch  
erok, Penn  
State  
e  
G  
ography.  
If you are making thematic maps—special purpose or statistical maps of  
geographic phenomena, such as population density—choose an equal-area map  
projection for most topics. Despite all the fun we could have exploring  
projection distortions, this is the important piece of information to  
remember\: if you are mapping data distributions, choose an equal-area  
projection.  
If you are mapping the continental United States, an Albers equal-area  
projection customized to the United States is a common projection choice. You should also make use of additional customized Albers projections for  
Alaska and Hawaii. Each projection has repositioned standard lines so that no  
part of the area of interest gets far from these lines, where there is no  
distortion. Don’t let these states dangle at the distorted edge of a projection  
optimized for the contiguous United States.  
Large-scale reference maps often use another category of projection called  
conformal projections. These projections are better for showing routes and local  
areas because they preserve angles and shapes at points. These advantages  
come at the expense of preserving areas, and they will misrepresent densities  
of features in parts of the map distorted by the projection.  
# UTM projections  
The Universal Transverse Mercator \(UTM\) system provides coordinates and  
a set of projections designed to make maps with minimal distortion for any  
given small portion of the earth. The system uses the Mercator projection  

earth into sixty zones, each using a specially positioned transverse Mercator  
projection with two standard lines. Figure 1.30 shows one pair of UTM zones,  
18S and 18N, which abut at the equator and exclude the poles. Each zone  
renders the area within its narrow strip with negligible distortion. The  
con  
that zone. The graticule and continent shapes in   
distortions in area and shape increase away from the example central zones  
outlined in orange.  
Figures 1.31 and 1.32 show the coast of Peru and the extent of the city of Lima,  
Peru. Each map is projected with UTM zone 18S, providing minimal  
distortion in areas, shapes, and angles at points \(UTM is a conformal  
projection\). **FIGURE 1.30.**  
A pair of UTM zones outline  
d  
in orang  
e\: 18N an  
d  
18S. Th  
ey span 72° to 78°  
west longitu  
e an  
d  
d  
from 80° south to 84° north latitu  
e  
d  
. Th  
e entire  
map is proj  
ecte  
using  
d  
th  
e zone 18 pair. **FIGURE 1.31.** Th  
e UTM zone 18S represents th  
e coast of Peru we  
one-  
e  
d  
gree  
gri  
.  
d  
ll. White  
lines show a **FIGURE 1.32.** Th  
e UTM zone 18S represents th  
e extent of th  
e city of Lima, Peru. Data  
source for   
erok, Penn State  
e  
G  
ography.  
# Custom azimuthals  
Small-scale maps that highlight a place often bene  
projection. There are many special properties to choose from. Azimuthal  
projections of the whole world are circular and have the least distortion near  
their center. They also preserve angular relationships outward from the  
center in all directions. The standard point at the center can be readily  
repositioned to the place you are mapping, and you can zoom in to that area  
to frame a customized and well projected region. When used whole, these  
circular projections provide a contrasting shape within your map design that  
attracts the map reader’s eye, and they are useful for making small locator  
maps. A good example of a useful projection property is the azimuthal equidistant.  
This projection shows correct distances \(and directions\) from the center \(the  
standard point\) to all places in the world. This projection choice is useful to  
show events radiating from a point source, such as a plume of contaminants  
or radio communications, and to show distances for global travel or trade.  
The distortion of shapes and areas at locations far from the center of  
azimuthal equidistant projections can be entertaining, but that key property  
of correct distances along great circle routes out from the center is preserved.  
Notice that the direct route between Sydney and Nairobi is the same in   
1.29B and 1.33 \(SYD to NBO\). Both projections show the direct route between  
these two cities as a straight line. If you lived in Sydney and wanted to go on a  
vacation to a far-away place, the Azores would be a good choice. That direct  
route on the azimuthal equidistant map \(  
PDL\), and you would get to look out the window at China, Russia,  
Scandinavia, and the United Kingdom. **FIGURE 1.33.**  
Azimuthal  
equi  
d  
istant proj  
ection centere  
on Sy  
d  
d  
ney \(SYD\) with lines to a  
few interesting locations\: Nairobi \(NBO\), Vancouver \(YVR\), an  
d th  
e  
Azores \(PDL\) airports.  
Soli  
d lines are  
great circl  
es an  
d d  
ash  
e  
d lines are rhumb lines. Data source\: Natural Earth.  
Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
An azimuthal projection that is useful for location maps is the orthographic  
projection \(  
a sphere. It is neither equal area nor conformal, but it is nicely attractive as a  
bit of 3D that stands out from a   
topic. You can add a highlight on the sphere and shadow below it to enhance  
the three-dimensional e Chapter 3 includes more discussion of map projections with an emphasis on  
map scale.  
**FIGURE 1.34.** Orthographic proj  
ection centere  
which sk  
etch  
es sph  
erical shape  
.  
d  
on Sy  
d  
ney airport \(SYD\) with a gri  
d **FIGURE 1.35.** Orthographic proj  
ection centere  
d  
on Vancouver airport \(YVR\) with  
highlight an  
d  
sha  
d  
ow to simulate a sph  
erical globe  
. Compare this location map to th  
e  
rectangular location map d  
esign shown in th  
e BC   
ang  
d  
er exampl  
es \(such as   
Data source for   
d  
1.35\: Natural Earth. Maps by N. Ch  
erok, Penn State  
e  
G  
ography.  
OceanofPDF.com **CHAPTER 2**  
# BASEMAP BASICS  
# T  
he basemap provides context for the topics you map. Basemap features  
show relationships between the natural environment and the places  
people live, work, and explore. They show the structure of natural habitats  
and urban systems. Good map design o  
information and positions it at the right level in the visual hierarchy. The  
basemap is usually background information—getting out of the way of other  
mapped information but still providing useful context.  
Topographic mapping in the United States is led by the US Geological Survey  
\(USGS\), and they divide their e  
elevation, imagery, transportation, land cover, hydrography, boundaries,  
structures, and geographic names. These themes are common for  
countrywide reference mapping around the world. They are also the base  
information you select from as you design a map for a speci  
following sections describe design options and best practices for important  
aspects of raster and vector base data. Imagery, topographic layers, and  
individual themes are often available as services that load from the web as  
layers in a geographic information system \(GIS\) project. You can add them to  
your map with almost no e  
Well-designed basemaps are built from the ground up, from landform to land  
use to line and point overlays\:  
Elevation shows the shape of the landscape and may be represented  
with elevation colors, contours, terrain shading, curvature, or a  
combination of these layers. Images of the surface provide an overall understanding of the  
landscape, and speci  
property characteristics add detail.  
Vector overlays of water features, boundaries, transportation,  
populated places, and points of interest add supporting detail.  
# LAND  
# FORMS  
The shape of the landscape sets the stage for both human and physical  
processes. Map readers will better understand a topic you map if they can see  
how it is distributed across the landscape, spreading over   
down valleys, and marching over ridges. Four common ways to represent  
landforms from digital data are by shading terrain, setting colors for  
elevation, generating contour lines, and calculating curvature. Each of these is  
best derived from a digital elevation model \(DEM\), which is a raster data type  
that stores a regular grid of elevation values. Figure 2.1 enlarges part of a  
DEM and highlights raster cells with lowest and highest elevations. Each cell  
in this grid has a speci  
the terrain representations described. **FIGURE 2.1.**  
A portion of th  
e  
e Massanutten Mountain DEM resampl  
d to 90-  
m  
eter raster  
ce  
lls \(***A***\). Th  
e two  
d  
ark green squares at Mene  
ka Peak are 725 feet above  
m  
ean sea l  
eve  
l.  
Th  
e ye  
llow squares, in th  
e  
North Fork Sh  
enan  
d  
oah River, are be  
low 160 feet. Th  
e  
gra  
d  
ation  
from black to white ce  
lls shows values from low to high within this e  
l  
evation rang  
e  
. Th  
e  
sam  
e  
location is shown with a combination of hillsha  
e an  
d  
d  
curvature  
layers calculate  
d  
from a 10 m version of th  
e DEM \(***B***\). Data source\: Kenne  
lly, Patterson, Jenny, Huffman,  
Marston, Be  
ll, & Tait \(2020\). El  
evation Mo  
e  
d  
ls for Repro  
d  
ucibl  
e Evaluation of Terrain  
Representation–  
Arch  
etypal Lan  
d  
forms. Distribute  
using Zeno  
o.d  
d **El**  
# evation  
The simplest view of elevation is a sequence of colors representing low to  
high. These colors may be continuous, from dark for low elevations grading  
through middle lightness to light for high elevations. Often, mapmakers vary  
color hues within this gradation. A classic treatment for small-scale maps uses  
greens for low elevations, yellows and oranges for middle elevations, brown  
for highlands, and then white for peaks. Appealing default color schemes of  
this sort are o  
larger-scale mapping that is not characterized by verdant lowlands and high  
mountain peaks—not your typical setting for a city map or state forest  
reserve. Green for lowlands in an arid region also may not o  
view of the landscape. Color schemes are described in more detail in later  
chapters, but the example in   
to-light sequence that also transitions through related hues to provide more  
contrast between elevations. **FIGURE 2.2.** El  
evation chang  
e shown with hypsom  
etric colors \(create  
d  
at 1\:120,000 scal  
e\)  
north  
east of Para  
d  
ise, California, using a custom algorithmic color ramp smoothly changing  
from light ye  
llow to  
d  
ark blue  
. Lighter colors represent high  
er e  
l  
evations an  
d dark  
er colors  
represent lower e  
l  
evations. Data source\: USGS. Map by N. Ch  
erok, Departm  
ent of  
e  
G  
ography, Th  
e Pennsylvania State University \(Penn State  
e  
G  
ography\).  
A general term for elevation coloring is hypsometric color \(hypso\). This  
approach to terrain representation may continuously change through  
elevation, as seen in   
For example, middle green may represent elevations 750 to 1,000, light green  
1,000 to 1,250, and light yellow 1,250 to 1,500. Hypsometric color bands may be approximated by classifying the DEM so that each raster cell has a set color  
\(  
order. Another way to create hypsometric colors is to close contour polygons,  

ones. **FIGURE 2.3.** Classe  
d hypsom  
etric colors\: Para  
d  
ise, California, with a limite  
d  
set of  
e  
l  
evation classes in greens for low, through ye  
llow, to orang  
es for high  
e  
l  
evations \(***A***\);  
Massanutten Mountain, Virginia, shown with more classes in light ye  
llow to  
d  
ark green \(***B***\).  
Data source \(A\)\: USGS. Map 2.3***A*** by N. Ch  
erok, Penn State  
e  
G  
ography. Data source \(***B***\)\:  
DEM  
d  
istribute  
using Zeno  
d  
d  
o by Kenne  
lly an  
d  
oth  
ers, 2020.  
Contours provide speci  
the landscape. An individual contour line connects points of equal elevation.  
In GIS-based mapping, contours are generated from a DEM through interpolation. There are many choices for interpolation methods, such as  
inverse distance weighting and kriging, but the focus here is design tips for  
contour maps.  
Use the same contour interval throughout the map. For example, a 50-foot  
interval is used in   
judge changes in the shape of the terrain. For example, as contours get closer  
together, the slope of the land increases. It is also common to set every fourth  
or   
contours, and the remaining lines are intermediate contours. The index  
contours provide a visual emphasis that shows a general shape and helps  
readers follow lines across the landscape \(  
may be used to add some needed detail in   
foot contours may sit between lines in a regular interval of 0, 10, 20, and 30.  
Supplemental contours are best given a di  
the map reader does not think they show steepening slope. **FIGURE 2.4.** Massanutten Mountain shown with labe  
e  
l  
d  
contours at a 50-foot interval,  
d  
at 1\:40,000. Data source\: DEM  
d  
istribute  
using Zeno  
d  
d  
o by Kenne  
lly an  
d  
oth  
ers,  
create  
2020. **FIGURE 2.5.** Contour lines at a 50-foot interval with bold  
in  
d  
ex contour lines at a 250-  
foot interval, create  
d  
at 1\:200,000. Data source\: USGS. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
A good way to add de  
classed hypso with contours generated from the same DEM. Use the same  
interval as the classes for a contour at each break, or combine a   
interval with index contours at each hypsometric color break. This greater  
frequency of lines gives the reader speci  
elevation variations that are harder to capture with more general hypsometric colors. Figure 2.6 shows color class breaks at index contours and four  
additional intermediate contour lines within each color.  
**FIGURE 2.6.** Hypsom  
etric colors with class breaks that match th  
e bold  
in  
d  
ex contours.  
Interm  
e  
d  
iate contours a  
dd d  
etail within e  
l  
evation color classes. Data source\: USGS. Map  
by N. Ch  
erok, Penn State  
e  
G  
ography.  
# Terrain sha  
# d  
# ing  
A third method of terrain representation created from a DEM is hillshading.  
This method calculates arti \(azimuth\) and altitude \(angle\) of illumination. The default is from the  
northwest, and 45 degrees above the surface, so that the landscape looks  
illuminated from above and to the left by an imaginary sun \(  
45-degree sun angle can pick up shapes of a wide variety of features. There are  
many other factors to consider when creating a hillshade, such as whether  
high-elevation features will cast shadows on land nearby. Changing the  
azimuth and angle can give you a wide range of results, and they are worth  
experimenting with to better see landform shapes. The terms terrain shading,  
analytical shading, and relief shading all have much the same meaning as  
hillshading, the single-azimuth geoprocessing option in ArcGIS ®software. In  
contrast, ArcGIS shaded relief symbolization for DEMs is elaborated to a  
multidirectional shading option blended with hypsometric color. **FIGURE 2.7.** Simpl  
e black  
-to  
-white  
hillsha  
d  
es using northwest illumination an  
d  
oth  
er  
d  
efault settings\: mountainous area near Para  
d  
ise, California \(***A***\), an  
d ri  
g  
e an  
d  
d  
vall  
ey terrain  
of Massanutten Mountain in Virginia \(***B***\). Data source \(***A***\)\: USGS. Map by N. Ch  
erok, Penn  
State  
e  
G  
ography. Data source \(***B***\)\: DEM  
d  
istribute  
using Zeno  
d  
d  
o by Kenne  
lly an  
d  
oth  
ers,  
2020.  
A hillshade from a good quality DEM gives you a view with no vegetation, no  
rock types, or other surface characteristics. It is not a picture of the landscape.  
It is calculated from a grid of elevation values. A well-done hillshade starts to look like an image, but do not be fooled. Carefully applying color ramps,  
combining multiple hillshades, and additional graphic-design processing can  
customize terrain views. You might add di  
as peach on lit slopes and pale blues in shaded areas, or add heightened  
contrast on rugged peaks and muddled smoothing in the lowlands to make  
room for cultural features. Expert terrain representation is fascinating in the  
detailed treatment of scree and rock faces, glaciers, and cli  
Often, the goal of more modest hillshade e  
detailed overlaid information. That role in the basemap means the hillshade  
needs to be fairly low contrast. For example, a light terrain layer pairs with  
roads and other themes that are symbolized in dark colors. A dark terrain  
layer would let overlaid themes in light colors stand out.  
Your care with illumination angles and color ramps may be hard to see below  
feature overlays but will improve the map appearance. Adjusting the hillshade  
color ramp from a white-to-black default \(  
helps push the hillshade to the background so that it does not overwhelm  
your other content. Setting the layer so that it is partly transparent will  
produce a similar result. Another good ramp choice is from white to light  
yellow to brown \(  
on the fully lit slopes, yellow on   
slopes. **FIGURE 2.8.** Colore  
d hillsha  
d  
e using a custom white-ye  
llow-brown color ramp\: vivi  
d  
colors at full chroma \(***A***\) an  
d  
mute  
d  
version set partially transparent \(***B***\). Data source\: DEMs  
d  
istribute  
using Zeno  
d  
d  
o by Kenne  
lly an  
d  
oth  
ers, 2020.  
The default northwest illumination \(315 degrees\) will leave northwest-to-  
southeast trending features with less de  
perpendicular to the direction of illumination. For example, valley walls will  
look less steep when they run on this upper-left to lower-right diagonal \(with  
north up\) than those of smaller valleys that run across the lighting. A landscape with an overall trend in the direction of features can be better  
shown by adjusting the illumination direction. If you swing the azimuth  
around to south and east directions, however, the landforms will look like  
they are being lit from below and will invert for many map readers. Stream  
valleys will look like ridges, and ridges will look like valleys.  
You can create a more complete view of landforms with varied orientations  
by combining hillshades with di  
example,   

illumination \(  
picks up the shapes of the valleys facing the northwest along the major ridges  
because they have some shading from the additional north illumination. **FIGURE 2.9.** Illumination from th  
e north sha  
d  
es th  
e si  
d  
es of small vall  
eys that are not we  
seen with th  
e  
d  
efault northwest illumination \(***B***\) which captures th  
e  
major ri  
g  
es  
d  
an  
d  
vall  
eys in this location.  
ll **FIGURE 2.10.** Combination of hillsha  
d  
es with two  
d  
irections of illumination for improve  
d  
shape  
d  
etail \(  
d  
on ***B***\). Data source for   
d  
2.10\: DEMs  
d  
istribute  
using Zeno  
d  
d  
o by Kenne  
lly an  
d  
oth  
ers, 2020.  
Using multiple lighting directions and then adding them together using map  
algebra can give a balanced view of all feature shapes. For example, adding  
together four hillshades with illumination from the north, northwest, west,  
and southeast with extra weight on the northwest hillshade can give you  
subtle detail on slopes that face all directions. The symbolization named  
shaded relief for DEMs in ArcGIS Pro also o  
option \( terrains, such as karst. We are not always mapping rugged mountain peaks;  
nor should every hillshade give that sense of an extreme landscape.  
Unlike elevation colors, the scheme for hillshading always runs from light to  
dark regardless of the multiple images you add together or the hues that tinge  
your ramps. The overall form of the landscape will fall apart if you use a dark  
color at both ends or somewhere in the middle of a hillshade ramp because  
your reader will not see the illumination e  
representations. **FIGURE 2.11.** Multi  
d  
irectional hillsha  
d  
es using a black  
-to  
-white color ramp for  
mountainous \(***A***\) an  
d ri  
g  
e an  
d  
d  
vall  
ey \(***B***\) lan  
d  
forms. Compare th  
e  
lan  
d  
form shapes with th  
e  
northwest-  
only illumination seen in ***A*** an  
d  
2.7***B***. Data source \(***A***\)\: USGS. Map by  
N. Ch  
erok, Penn State  
e  
G  
ography. Data source \(***B***\)\: DEMs  
d  
istribute  
using Zeno  
d  
d  
o by  
Kenne  
lly an  
d  
oth  
ers, 2020.  
# Curvature  
Curvature helps emphasize subtle features that barely catch the light of a  
hillshade calculation. A curvature raster has extreme negative values along the most concave features, such as V-shaped valley bottoms. It has extreme  
positive values at sharp ridges, the most convex areas of the image. Flat areas  
have zero values, and many intermediate features are usefully highlighted,  
such as cli  
pits in the DEM or smooth it before processing curvature.  
Usually, curvature is shown in a landscape representation by using a black-to-  
white sequence \(  
represented as light. Hue can be integrated into this sequence as well. This  
layer may lie below a transparent hillshade to add emphasis, add glints to  
peaks and ridges as a very transparent overlay, or be combined with the  
terrain layers using raster processing.  
Many DEM-based calculations can be made, such as slope, aspect, viewsheds,  
and   
for creating a basemap to show the shape of the land are the following\:  
Hypsometric colors to show relative elevation  
Contours to show speci  
Hillshade to show the shape of features  
Curvature to deepen valleys and highlight ridges and cli  
Combinations of methods are seen in  **FIGURE 2.12.** Curvature  
g  
enerate  
d  
from a DEM using  
d  
efault values for mountainous \(***A***\)  
an  
d ri  
g  
e an  
d  
d  
vall  
ey \(***B***\) lan  
d  
forms. Data source \(***A***\)\: USGS. Map by N. Ch  
erok, Penn State  
e  
G  
ography. Data source \(***B***\)\: DEMs  
d  
istribute  
using Zeno  
d  
d  
o by Kenne  
lly an  
d  
oth  
ers, 2020. **FIGURE 2.13.** Combination lan  
d  
form representation overlaying three  
layers\: \(1\) curvature  
with a black  
-to  
-white color ramp at 80 percent transparency, \(2\) northwest hillsha  
d  
e with a  
black  
-to  
-white color ramp at 50 percent transparency, an  
d  
\(3\) hypsom  
etric gra  
d  
ation with a  
custom  
d  
ark  
-teal  
-to  
-ye  
llow color ramp. Data source\: USGS. Map by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 2.14.** Combination lan  
d  
form representation using northwest hillsha  
d  
e with white-  
ye  
llow-brown color ramp at 50 percent transparency over curvature  
. Compare this version  
with ***B*** to notice that small  
er vall  
ey bottoms are  
d  
eepene  
an  
d  
d river banks are  
highlighte  
d  
. Data source\: DEMs  
d  
istribute  
using Zeno  
d  
d  
o by Kenne  
lly an  
d  
oth  
ers, 2020.  
# LAND USE  
Map layers that show the sorts of activities that characterize a landscape are  
orthoimagery, land cover, and land use from parcel data or zoning data. All of  
these may be used as basemap layers to support other map topics, or they may  
be the main focus of a map. **Imagery**  
The detailed textures and colors of a landscape and the types of human  
activity on it are seen in aerial photographs and satellite imagery. These  
images are products of high-resolution remote sensing. When images  
showing the landscape from above are corrected to align with accurate  
mapping, they are referred to as orthophotos and orthoimages \(“ortho” is a  
short form for “orthorecti  
compiling GIS content and as seamless backgrounds for many types of  
mapping. Orthoimages collected when leaves are o  
especially useful for compilation because roads and small features will be less  
obscured by trees. Leaf-on images may o  
location.  
Orthoimage services at many map scales are available online, and many  
communities use   
their infrastructure. Mapping over imagery \(  
because it includes many surface colors and a full range of dark and light areas.  
That means that any color you choose for a line or label will not be easy to see  
over the basemap. Later chapters discuss details about using halos and other  
e **FIGURE 2.15.** Orthoimag  
es with varie  
ve  
g  
d  
etation textures for mountainous \(***A***\) an  
an  
d  
vall  
ey \(***B***\) areas. Data source \(***A***\)\: NAIP. Map by N. Ch  
erok, Penn State  
e  
G  
source \(***B***\)\: USGS, NAIP.  
d ri  
e  
g  
d  
ography. Data  
Keep in mind that an orthoimage does not need to be seen at full contrast to  
be a useful context for map reading. Before you mask the landscape with  
contrasting label halos and line casings, consider pushing the image to the  
background by making it lighter. That may mean increasing the image  
transparency to lighten it or using a partly transparent white layer between the image and the overlaid labels and lines. Covering the orthoimage with a  
partly transparent hillshade can also push it to the background and add form  
to the image \(compare   
because northern hemisphere images often have illumination from below  
\(southeast sun angles are common with leaf-o  
inverted to map readers. An orthoimage can also be set to a white-to-black or  
another monochrome ramp to keep urban or forest textures but remove hue  
contrast that interferes with reading overlaid symbols. **FIGURE 2.16.** Hillsha  
d  
es overlai  
d  
on orthoimag  
es\: multi  
d  
irectional hillsha  
d  
e at 55 percent  
transparency overlaying orthoimag  
e for a mountainous area with scattere  
ve  
g  
d  
etation \(***A***\),  
an  
d  
northwest illumination hillsha  
d  
e at 50 percent transparency over forest an  
d  
agricultural  
ve  
g  
etation \(***B***\). Compare th  
ese pairings with   
e canyon, ri  
g  
e, an  
d  
d  
vall  
ey lan  
d  
forms are  
obscure  
d by ve  
g  
etation colors an  
d textures. Data sources \(***A***\)\: NAIP,  
USGS. Map by N. Ch  
erok, Penn State  
e  
G  
ography. Data sources \(***B***\)\: NAIP, DEM  
d  
istribute  
d  
using Zeno  
d  
o by Kenne  
lly an  
d  
oth  
ers, 2020.  
# Lan  
# d  
**cover** Another view of landscapes generated from remotely sensed data is land  
cover. In the United States, National Land Cover Data \(NLCD\) from the  
Multi-Resolution Land Characteristics \(MRLC\) Consortium is an example of  
a readily available product for basemap layers. It provides 16 surface categories  
calculated from Landsat satellite data. The data is fairly coarse, at 30-meter  
resolution, and better suited for mapping at scales smaller than 1\:120,000.  
NLCD also o  
tree cover?\) and for a percent imperviousness layer for developed surfaces  
\( **FIGURE 2.17.** NLCD percent tree canopy cover raster of Gl  
ens Falls, N  
ew York, using a  
mo  
i  
d  
d  
color ramp from light to  
d  
ark green to represent tree cover percentag  
e values of 1  
to 100, with white for zero tree cover. **FIGURE 2.18.** NLCD raster of percent d  
eve  
lope  
d  
imperviousness for Gl  
ens Falls. Dark  
purpl  
e represents th  
e  
l  
east perm  
eabl  
e surfaces. Black represents perm  
eabl  
e surfaces.  
Land cover describes both natural and human landscapes \(  
Example categories from NLCD include the following\:  
Open water or ice and snow \(coded with pixel values of 11 and 12—10s\)  
Developed at low, medium, or high density; or developed open space  
\(20s\)  
Barren \(31\) Deciduous, evergreen, or mixed forest \(40s\)  
Shrubland \(50s\)  
Herbaceous grassland or Alaskan covers of sedge, lichen, or moss \(70s\)  
Planted pasture or hay and cultivated crops \(80s\)  
Wetlands that are woody or herbaceous \(90s\)  
These categories are based on remotely sensed re  
surface. Although they suggest land uses, they are not based on property  
information such as residential zoning.  
Categories may be collapsed to suit simpler land-cover basemap needs. For  
example, using only raster forest and agricultural categories \(combining three  
and two categories, respectively\) will provide a basic land-cover background  
\(  
road network\) and water from vector hydrography data instead of the raster.  
Another alternative to grouping the forest categories is to use the percent  
canopy \(  
background. **FIGURE 2.19.** NLCD lan  
d  
cover raster of Gl  
ens Falls with d  
efault color values. Open water  
an  
d  
wetlan  
d  
s are in blues,  
eve  
d  
lope  
d lan  
d  
s in re  
d  
s, barren lan  
d  
in gray, foreste  
d  
areas in  
greens, an  
d  
agricultural lan  
s in ye  
d  
llow an  
d brown. Data source for   
MRLC. Maps by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 2.20.** NLCD lan  
d  
cover raster of Gl  
ens Falls with aggre  
gate  
d  
classes for forest  
an  
d  
agriculture at a small  
er scal  
e, create  
d  
at 1\:250,000. Data source\: MRLC. Map by P.  
Limpisathian, upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
# Property  
Parcel data inventories details about property lots such as precise boundaries,  
owner names, assessed values, and identifying numbers. Parcel maps are also  
called cadastral maps. Parcel data may have general land-use attributes, such as  
single-family residential. Or these attributes may be extremely detailed, such  
as parking lot, high school, manufacturer, unimproved beach, and mini mart. Although they are intricate, parcel types may allow you to build a colorful  
portrait of the details of a town that can support other mapping projects  
\(  
**FIGURE 2.21.** Classi  
d parce  
ls of Gl  
ens Falls, N  
ew York, create  
d  
at 1\:22,000. Th  
e parce  
are base  
on g  
d  
eneralize  
d  
activity using a mo  
i  
d  
d  
stan  
d  
ard  
ize  
d  
zoning classi  
sch  
e  
m  
e with resi  
d  
ential parce  
ls in ye  
llows; comm  
ercial in re  
d  
s; recreation an  
d  
entertainm  
ent in blue-  
green; community services in blues; in  
d  
ustrial  
-  
manufacture in  
purpl  
e; public services in gray; an  
d  
wild  
, foreste  
d lan  
s, an  
d  
d public parks in greens. Data  
source for   
ew York State  
. Maps by P. Limpisathian,  
upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
ls Parcel data can also provide a strange but useful version of roads for base  
information. Most gaps between blocks of urban parcels are roads. Dissolving  
parcels together to create city block outlines gives you roads that are limited  
\(they are the negative space without names or attributes\) but can act as a  
detailed road background. These sorts of road shapes can su  
road lines are too generalized to register well with your other data for  
mapping at large scales.  
A town’s zoning rules restrict land parcels to general functions such as  
residential, sales and services, manufacturing, transportation and utilities,  
educational, and agricultural. Zoning is often the main topic of a map. In the  
United States, the American Planning Association \(APA\) recommends  
particular colors for common zoning classes, and zoning maps often combine  
these with varied textures. A zoning map may be well supported by using an  
underlay of orthoimagery so map readers can tell which buildings fall in and  
outside of particular zones.  
Zoning can also be used as a basemap layer that shows the general character of  
a town \(  
commercial and industrial areas, and those can be distinguished from parks  
and other recreation sites. When you use zoning data this way, you may  
aggregate land-use classes and adjust colors as needed to support the overlaid  
main-map topic \(  
information in the attributes to create a zoning map that can then be  
generalized to a basemap.  
Parcels and zoning let you develop a land-use map with more accuracy and  
detail than a land-cover map. Figure 2.24 shows transparent land-use colors  
overlaid on an orthoimage with roads produced using gaps between blocks of  
parcels and labeled using names from more generalized road lines. This combination of layers provides a detailed basemap that can support other  
urban mapping topics. **FIGURE 2.22.** Classi  
d  
zoning base  
on g  
d  
eneralize  
stan  
d  
ard  
ize  
zoning  
d  
-classi  
e  
e  
m  
.  
d  
activity using a mo  
d  
i  
d  
**FIGURE 2.23.** G  
eneralize  
overlai  
d  
on an orthoimag  
e  
d lan  
.  
d  
use base  
d  
on reclassi  
d  
zoning, exclu  
d  
ing comm  
ercial, **FIGURE 2.24.** Combination overlay of roa  
nam  
e  
d  
labe  
ls  
d  
erive  
d  
issolve  
d parce  
ls with only th  
e block outlines shown, classi  
d  
zoning  
d  
from invisibl  
e roa  
d lines,  
ata at 30 percent  
d  
transparency, an  
d  
an orthoimag  
e  
.  
# VECTOR BASE  
Lines and polygons are the classic content of basemaps. Standard basemap  
layers are hydrography, transportation, boundaries, and cultural features.  
These layers are generally on top of the raster and polygon layers for  
landforms and land cover or land use in the basemap. An overlay of vector  
data may need to be edited to register with other layers, even after di in coordinate systems are resolved. Mismatches are particularly a problem if  
layers come from di  
not run down valleys in the hillshade, or roads may not run through their  
corresponding gaps in the forest canopy raster. A general approach is to move  
the vectors to match the physical characteristics that underpin them if those  
layers are orthorecti  
# Water  
Hydrographic data is quite detailed, but typical surface water features used on  
a basemap are rivers, lakes, wetlands, and coastlines. In the National  
Hydrography Dataset \(NHD\) for the United States, rivers, streams, and canals  
are represented as lines, and sometimes as polygons when riverbanks are far  
enough apart to be drawn separately. Bodies of water, such as lakes, ponds,  
and reservoirs, are polygons. Mapmakers often use the short form “hydro” to  
refer to a full set of water features \(not to be confused with “hypso” for  
hypsometric data\).  
Network attributes of hydrographic data that allow it to be used for  
hydrologic modeling are perhaps excessive for basemap construction,  
although they can be useful in many ways. For example, attributes that list  
calculated upstream drainage area or cumulative   
taper the streamlines. Tapering means lines get progressively thicker as   
increases—you only need about six line widths to make this work. Variation  
in line widths gives a visual sense of the stream network \(  
Tapering keeps numerous small tributaries from dominating the look of the  
map and visually competing with the major rivers into which they drain. **FIGURE 2.25.** Waterbo  
d  
ies overlay tapere  
d  

drawn using total upstream  
drainag  
e  
area for streams near Para  
d  
ise, California \(create  
d  
at 1\:200,000\). Data source\: NHDPlus.  
Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
Upstream drainage area, or cumulative   
some river labels larger than others, just as highway names are set larger than  
local road names. Rivers with a higher upstream drainage area are larger  
rivers downstream of small feeder tributaries, and they can be accorded larger  
labels. Upstream drainage area data can also be used to eliminate smaller  
tributaries and set visibility ranges to suit smaller map scales. Networked hydrographic data also has arti  
underneath bodies of water \(  
all the water features on a map, but they are useful for labeling oddly shaped  
river areas cleanly down the middle \(center labels along the lines rather than  
labeling area polygons\). You may also use arti  
instead of a river polygon at smaller scales for a simpler linear feature. These  
paths also let you remove a clutter of small lakes and ponds from the map  
without leaving gaps in stream lines.  
**FIGURE 2.26.** Hy  
dro at high resolution with arti  
d  
connectors shown in re  
near Gl  
ens Falls, N  
ew York, create  
d  
at 1\:40,000. Data source\: NHD. Map by P.  
Limpisathian, Penn State  
e  
G  
ography.  
# Boun  
# d  
# aries  
,  
d Boundaries come from numerous sources. Administrative boundaries that are  
commonly used on basemaps are state, county, township \(minor civil  
division, MCD\), incorporated place, and reservation boundaries. Others that  
may be useful are boundaries of recreation or conservation areas such as  
forest reserves and parks at local, state, and national levels. Boundary options  
are wide ranging and often have an implicit hierarchy. They may also be  
nested with overlaying lines that create visual clutter as they fall one on top of  
the other. This can be a messy problem if you would like to use dashed lines,  
because the dashes overlay and   
boundaries is they may not perfectly overlay if they are from more than one  
source.  
There are two basic options for cleaning up the appearance of coincident  
boundaries. If boundaries overlay well, then use a boundary line made up of  
two lines, one dashed and one solid sitting right below it \(  
solid line at the same width, or slightly wider, to cover up any lines below it.  
It may be the same color as the background or have a color that is part of the  
boundary design. This strategy also lets the line remain visible on a  
background that varies in lightness, such as hillshading or orthoimagery. The  
line will appear as light dashes over dark background areas and dark dashes  
over light background areas.  
A second strategy is to convert polygons to lines and use a GIS operator that  
removes coincident lines \(or delete the extra lines by hand\). You will likely  
want to use two versions of area features in the map. The original polygons  
may carry color   
lines will be separate with redundancies removed. This strategy is also useful  
because you have the   
\(and set transparency\), while the boundary lines may be placed above features  
such as hydro and roads. **FIGURE 2.27.**  
An overlay of county, minor civil d  
ivision, an  
d  
incorporate  
an  
d  
d  
unincorporate  
d place boun  
d  
aries in Gl  
ens Falls, N  
ew York, with appropriate  
hierarchy of  
symbols an  
d  
soli  
d lines to mask d  
ash  
es be  
low. Data source\: US Census Bureau. Map by P.  
Limpisathian, upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
# Transportation  
Roads are key reference information for other mapped data and can be  
overwhelmingly busy on a map. A good road dataset will have many levels of  
importance as attributes for the lines \(  
detailed roads that maintain a sense of networked structure. Typical US road hierarchy includes categories such as interstate, US, and state highways;  
primary, secondary, and connector roads; and local roads. You will likely want  
more detailed importance attributes so you can control which roads are  
labeled and remove minor roads that are less connected within the network.  
But you can’t always get what you want.  
Transportation data also includes other features such as airports, railways,  
unimproved or four-wheel-drive roads, trails, service roads, private roads,  
cul-de-sacs, alleys, parking lots, bike routes, ferry crossings, and bridges.  
Some of these may enliven a basemap, but many will be best removed using  
their respective attributes—if you map all transportation in a complete  
dataset, prepare for a mess. Roads also may have multiple names and  
numbers. A stretch of a single highway may be best labeled with road shields  
for its state and county road numbers as well as its local name. The level of  
detail you attend to with these problems depends on whether a map is used  
speci  
layers. **FIGURE 2.28.** Classi  
d hierarchy of roa  
an  
d  
d rail lines for Gl  
ens Falls, create  
d  
at  
1\:200,000. Data source\: USGS. Map by P. Limpisathian, upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
# Point d  
# ata  
Populated places may be represented with point symbols instead of  
administrative areas as described in the previous section. These points may be  
used as town spots, or they may be used only to control positioning of place  
labels and not shown with a symbol. Other point data for US national mapping includes structures, such as energy  
facilities, medical centers, transportation terminals, emergency response and  
police stations, government buildings, water treatment plants, and other  
points of interest. Public attractions data include obvious locations such as  
landmark buildings, but also places such as cemeteries, ski areas, sports arenas,  
golf courses, and historic sites. Point locations may also be physical features  
such as summits. Point locations for symbolizing and labeling these types of  
features for US locations \(  
Geographic Names Information System \(GNIS\) and the structures theme in  
The National Map. They may also be collected from volunteered geographic  
information sources such as OpenStreetMap or, of course, your local  
knowledge.  
These sorts of resources o  
of di  
local podiatrist may be in the same health-related data. Feature codes may let  
you separate and cull minor locations, or they may not. Selected points of  
interest \(POI\) on a map provide key locations which help people understand  
the importance and character of a mapped distribution.  
Figure 2.30 shows the usual vector basemap layers together—hydrography,  
transportation, boundaries, and populated places. e  
**FIGURE 2.29.** Exampl  
GNIS POI in Gl  
ens Falls, N  
source\: USGS, GNIS. Map by N. Ch  
erok, Penn State  
ew York, create  
e  
G  
ography.  
d  
at 1\:50,000. Data **FIGURE 2.30.** Combination overlay of classe  
a  
d  
d  
ministrative boun  
d  
aries, classe  
d roa  
d  
lines an  
d rail features, waterbo  
d  
ies, hy  
dro lines, an  
d  
GNIS populate  
d place points in Gl  
ens  
Falls, N  
ew York, create  
d  
at 1\:200,000. Data source\: US Census Bureau, USGS, NHDPlus.  
Map by P. Limpisathian, upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
# CUSTOMIZING BASE TO PURPOSE  
Combinations of basemap layers are shown previously in   
\(hillshade, curvature, and elevation\), 2.23 \(generalized zoning and  
orthoimage\), 2.24 \(parcel-based roads, zoning, and orthoimage\), and 2.30  
\(places, administrative boundaries, transportation, and hydrography\). The following maps show additional combinations from among the themes  
described in this chapter. Figure 2.31 shows a basemap with incorporated and  
unincorporated places, federal lands, roads and trails, hydrography, and  
contours. This plain vector basemap has a range of feature types that would  
support many operational overlays.  
Figure 2.32 is a smaller scale view and dominated by raster land cover with an  
overlay of transparent hillshade and curvature layers plus hydro and major  
roads. This gives a sense of the landscape and landforms with less human  
detail.  
The last combination, shown in   
more detailed landscape created from an orthoimage with transparent  
hillshade and curvature layers overlaid. It could support mapping of natural  
resources information.  
Some of the examples are fairly high contrast, verging on reference map  
designs rather than basemaps ready for additional map information to be  
overlaid. Basemaps are background, so they need to be light \(or dark\) enough  
to allow the main themes to stand out against them. They are important  
content but not always the main content. They support reader understanding  
with physical and cultural contexts. **FIGURE 2.31.**  
A base  
map combination showing incorporate  
an  
d  
d  
unincorporate  
d places,  
fe  
d  
eral lan  
d  
s, roa  
s an  
d  
d trails, tapere  
d hy  
dro, an  
d  
contour lines, near Para  
d  
ise, California,  
create  
d  
at 1\:80,000. Data source\: USGS. Map by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 2.32.** Th  
e  
lan  
d  
scape view of Para  
d  
ise, California, overlays g  
eneralize  
d roa  
s,  
d  
waterbo  
ies an  
d  
d tapere  
d  

e an  
d  
d  
curvature at 75 percent transparency, an  
lan  
d  
cover. Data source\: USGS, NHDPlus, NLCD. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
d **FIGURE 2.33.** This natural resources base  
map combines roa  
d lines, hy  
dro with tapere  

e an  
d  
d  
curvature at 75 percent transparency, an  
d  
an orthoimag  
e  
. Data  
source\: USGS, NAIP, NHDPlus, NLCD. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
d  
OceanofPDF.com **CHAPTER 3**  
# SCALE AND TIME  
# M  
ap scale has a large e  
fundamental challenge is to begin with data that has suitable detail for  
the intended map scale. Many types of data are available at progressively  
generalized levels of detail for work at smaller scales. You rarely have data at  
the exact scale that matches your map, so choose a slightly larger scale source  
and remove detail, rather than choosing a smaller scale source.  
If there is too much detail in the spatial data, your map will be blobby and  
cluttered. You can generalize spatial data with numerous geoprocessing  
operations. Attributes in GIS data that provide measures of relative  
importance among features are particularly useful for cartography. These  
attributes let you systematically eliminate features through scale.  
Data that is too detailed can be handled with design decisions, such as  
replacing detailed features with a di  
areas with downtown point locations at small scales. Graphic solutions  
include using thinner lines, removing outlines on polygons, or using wider  
outlines to close gaps.  
In addition to map designs changing through scale, you can also map spatial  
data through time. Mapmakers choose basemap content concurrent with  
historical topics, map spatial data as time series, and map cyclical sequences.  
Map series bene  
the entire set.  
Cartographers make better maps when they do the following\: Choose spatial data suited for the scale of their maps  
Choose map projections that do not overly distort scale across the  
extent of a map  
Generalize data to reduce map clutter  
Match data to the time period and use consistent symbols across series  
# HOW CARTOGRAPHERS USE SCALE  
Maps are made at many scales and map projections a  
map. Mapmakers use the terms large scale and small scale with meanings  
opposite to everyday language. In general conversation we would describe  
large-scale internet access as covering a wide area, such as a whole state. We  
might talk about large-scale industrial production as we refer to food products  
that end up in most grocery stores in a region—big. A small-scale bakery, in  
contrast, serves a local neighborhood—little. A small-scale map, however,  
shows a big areal extent. Those big/little swaps can be confusing.  
# Large versus small  
Focusing on how much detail can be presented at a map scale can help you use  
the scale terms accurately. Small-scale maps only have room for a small  
amount of detail about a local place. A larger scale map can show a larger  
amount of detail about the same place. The large-scale map o  
to see separate symbols and labels because the place mapped is bigger on the  
screen. Figure 3.1 shows four example scales for the city of Minneapolis and  
state of Minnesota. **FIGURE 3.1.** Four scal  
es\: a neighborhoo  
d  
at 1\:5,000, a larg  
e  
e-scal  
map \(***A***\); Minneapolis at  
1\:100,000, an interm  
e  
e  
d  
iate-scal  
map \(***B***\); small  
e  
-scal  
maps of th  
e Minneapolis re  
gion at  
1\:2,000,000 \(***C***\) an  
d  
Minnesota at 1\:10,000,000 \(***D***\). Data source\: USGS. Map by N.  
Ch  
erok, Penn State  
e  
G  
ography.  
The root of cartographers’ use of large and small refers to the size of the  
representative fraction \(RF\) used to express scale. Continuing the baking  
analogy, you know that a 1/2 cup of   
1\:1,000 is more than 1\:100,000 \(one divided by 100,000\). Look at the entire fraction and not just the denominator \(for example, 1,000\). 100,000 is a  
bigger number than 1,000, but 1\:100,000 is a tiny fraction compared with  
1\:1,000.  
There are not strict numerical de  
scales. Considering a set of basemap products, 1\:5,000 hydrography data and  
1\:25,000 topographic maps are large scale. Maps at 1\:50,000 and 1\:100,000 can  
be described as intermediate scale. Small-scale representations will include  
maps and image data at 1\:250,000 and 1\:1,000,000 atlas maps.  
If you are communicating with people who do not know mapping  
terminology, consider swapping in more general phrases. For example, a  
smaller scale map could be described as showing a broader region. A large-  
scale map could be described as detailed or local. Provide this audience with a  
verbal scale, such as one inch equals a mile, a graphic scale, or both. The three  
options are shown in   
chapter 4.  
As you work with a group who regularly map a location at a variety of scales  
and use map design settings to suit this scale range, you will become   
RF language. You’ll   
collaborator and be able to envision what that scale will show.  
**FIGURE 3.2.** Three ways to in  
d  
icate th  
e sam  
e  
map scal  
e\: graphic scal  
e, verbal scal  
e, an  
d  
representative fraction. Cartograph  
ers using imperial or US customary m  
easure  
m  
ent units  

d  
palin  
it useful to m  
e  
morize th  
e number of inch  
es in a mil  
e—63360 \(almost a num  
eric  
drom  
e\). **e**  
# Projections affect scal  
As we saw in chapter 1, the size of areas on a map will shrink or enlarge with  
di  
representation of portions of the earth that are the topic of your map.  
At the time of writing this chapter, many interactive web maps used the web  
Mercator projection \(which has minor technical di  
projection\). While planning your route for a weekend trip, for example, you  
zoom in and out among the various scales with these navigation tools. Each of  
the scales can be described by a representative fraction \(for example, 1\:72,223,  
meaning 1 inch on screen is worth 72,223 inches, a little over a mile, in the  
real world\).  
For a Mercator projection, that ratio is correct along one or two lines on or  
parallel to the equator \(depending on a technical, geometric choice the  
cartographer makes\). As you move north or south toward the poles, areas and  
distances become increasingly enlarged \(  
latitude lines are half the length of the equator on the globe. **FIGURE 3.3.** Places are increasingly enlarg  
e  
d  
north an  
d  
south of th  
e equator on th  
e  
Mercator proj  
ection, an  
d  
extre  
m  
e sizes at th  
e  
high  
est latitu  
d  
es are  
often croppe  
d  
. Th  
e  
is annotate  
d  
with approximate circumferences for latitu  
e  
d  
lines on a globe  
. Data source\:  
Natural Earth. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
map  
Mercator’s area and distance distortion is not a big concern when the map  
shows you that the closest co  
zoomed in to a very large scale to see the local route on a single map with a  
Mercator projection. But when you are mapping large areas, this projection  
seriously distorts distance and area. This distortion is a signi  
choropleth map with the world’s countries as units, for example. Countries at  
high latitudes, like Russia and Canada, will look much larger than they are  
relative to equatorial countries, like Ecuador or Kenya. Greenland is about an  
eighth the size of South America, but on a Mercator map, they look about the  
same size. Figure 3.4 provides another example of the stretch in east-west scales toward  
the poles with projection of global data. The two maps of the same daily sea  
surface temperature data would encourage di  
plate carrée projection \(a square-grid of latitude and longitude\), much of the  
ocean area is cold \(dark blues in   
\(  
above 80°F \(oranges\), warm enough to strengthen a tropical storm into a  
hurricane. **FIGURE 3.4.** Th  
e sam  
e  
d  
ata represente  
shows  
d  
ifferent extents of cold  
an  
d  
warm  
2024\. Maps source\: NO  
AA Climate  
d  
with rectangular \(***A***\) an  
d  
oval \(***B***\) map proj  
ections  
d  
aily sea surface te  
mperatures for March 16,  
.gov, Climate Data Record  
s \(CDR\) Program.  
# Zoom l  
# eve  
**ls** Caching with GIS tools creates small square pieces of a map, called tiles, which  
seamlessly   
have several discrete scales, and each scale contains a di  
raster tiles. As the user zooms in and out, the set of tiles for a zoom level are  
served to the user. Table 3.1 lists the scales at the equator with a web Mercator  
projection.  
**TABLE 3.1.** Typical zoom  
l  
eve  
ls an  
d  
associate  
d  
th  
e  
e equator for til  
d  
caching  
scal  
es at  
map  
# Zoom l  
# eve  
# e  
# l Scal  
0 1\:591,657,551  
1 1\:295,828,775  
2 1\:147,914,388  
3 1\:73,957,194  
4 1\:36,978,597  
5 1\:18,489,298  
6 1\:9,244,649  
7 1\:4,622,325  
8 1\:2,311,162  
9 1\:1,155,581  
10 1\:577,791  
11 1\:288,895  
12 1\:144,448  
13 1\:72,224  
14 1\:36,112  
15 1\:18,055 **Zoom l**  
# eve  
# e  
# l Scal  
16 1\:9,028  
17 1\:4,514  
18 1\:2,257  
19 1\:1,128  
Projection distortion at higher latitudes a  
speci  
to the north. Figure 3.5 shows screen captures from The National Map  
Viewer \(the topographic mapping app o  
US near 30° and 60° north. The two maps are set at the same zoom level 13  
with the same map design. The representative fraction of 1\:72,224 can be  
understood as a report of the scale at the standard line for this zoom level, but  
it is not an accurate report of the scale for the map segments captured at the  
zoom level.  
The graphic scale for one mile in the southern city of El Paso, Texas \(  
3.5A\), is the same length as 0.6 miles in Anchorage, Alaska \(  
northern city. Anchorage is seen at a larger scale than El Paso at the same  
zoom level. Also, notice that consistently sized city features for the US, such  
as highway ramps and city blocks, are smaller on the El Paso map. Anchorage  
is not so much more expansive in the built-up areas. **FIGURE 3.5.** Compare th  
e  
graphic scal  
es an  
d  
map feature sizes for portions of th  
e cities  
of Anchorag  
e, near 60°N \(***A***\) an  
d El Paso, near 30°N \(***B***\) capture  
d  
at th  
e sam  
e zoom l  
eve  
l  
within Th  
e  
National Map Viewer. Map source\: USGS. **FIGURE 3.6.** Compare  
60° within zoom l  
eve  
graphic scal  
es for one  
mil  
e at latitu  
d  
es of zero  
e  
d  
grees, 30°, an  
l 13 for a web Mercator proj  
ection in an online  
mapping portal.  
d  
# Local views  
Large-scale maps can su  
is not chosen for them. A large-scale map won’t look much di  
conformal or equal area projection as long as a standard line or standard point  
is nearby. But if you don’t customize the projection, then shapes at mid-  
latitudes will have a noticeable horizontal stretch. Figure 3.7 shows the street  
network for Glens Falls, New York, with a plate carrée projection, an Albers  
equal area projection, and a Mercator conformal projection. You can see that  
there is not much di  
projections for such a local area \(compare   
Mercator has larger features when the same scale is set. The unprojected map  
\(  
west scale is larger than the north-south scale, and that’s not a good map  
design choice. Compared to   
seen in the other two projections are pulled into undesirable elongated shapes  
in  **FIGURE 3.7.** Streets of Gl  
ens Falls, N  
US Albers \(***B***\), an  
d  
Mercator \(***C***\).  
All three  
source\: USGS. Map by N. Ch  
erok, Penn State  
ew York, with a  
d  
efault plate carré  
e proj  
ection \(***A***\),  
maps were create  
e  
d  
at 1\:170,000 scal  
. Data  
e  
G  
ography.  
# D  
# ATA TYPES THROUGH SCALE  
The base data you select should be well matched to the scale of the map  
display. Using raster data that is too coarse produces a blurry, grid-like, or  
angular look. For example, land-cover data at 30-meter resolution is suitable for map scales starting at 1\:120,000. If you use this data with 1\:25,000  
topographic mapping, the land cover areas will look like collections of  
squares, and their edges will not align with other data, such as overlaid roads  
or forest edges in orthoimages. The map scale is too large for the data  
resolution. Using vector data at larger scales than intended means lines will  
look angular or overly smoothed. As you download base information, pay  
attention to the scale or scale range for which it is intended. Does that  
resolution match your map’s scale?  
# e  
# Terrain through scal  
The cell size or resolution of a DEM determines the range of map scales you  
will use it for. You want to choose a DEM that will give you the best-looking  
terrain when raster data download services o  
example, The National Map has many elevation products available for  
download for US locations, from 1/9 arc-second to 2 arc-second cell-size  
resolutions \(there are 60 seconds in a minute and 60 minutes in a degree of  
latitude or longitude\).  
Jon Kimerling’s recommendations on matching resolution and appropriate  
mapping scales for desktop screen resolutions \(100 pixels per inch\) are useful,  
and a simpli  
increasingly high screen resolutions that are near the resolution of printing,  
such as 500 pixels per inch \(ppi\), but mobile screens are small, and many  
people still look at maps on desktop monitors. Resolution speci  
and dpi \(dots per inch\) are used interchangeably in this discussion.  
**TABLE 3.2.** Map scal  
es for raster resolutions  
# Largest Map Scal  
# e When  
# Gri  
# d Ce  
# ll Size in Minutes  
# Displaying Data\*  
# or Secon  
# d  
# s of a Degree  
# Roun  
# Ce  
# e  
# d  
# d  
# Values for Gri  
# d  
**ll Size \(at Equator\)** **Largest Map Scal**  
# e When  
# Displaying Data\*  
# Gri  
# d Ce  
# or Secon  
# ll Size in Minutes  
# d  
# s of a Degree  
1\:36,000,000 5 arc-  
minute  
1\:14,000,000 2 arc-  
minute  
1\:7,200,000 1 arc-  
minute  
1\:3,600,000 30 arc-secon  
d  
1\:360,000 3 arc-secon  
d  
1\:240,000 2 arc-secon  
d  
1\:120,000 1 arc-secon  
d  
1\:40,000 1/3 arc-secon  
d  
1\:13,333 1/9 arc-secon  
d  
\*For an output map pixe  
Source\: A  
. Jon Kim  
l d  
ensity of 100 pixe  
erling, 2011, Esri blog post.  
# Roun  
# Ce  
# e  
# d  
# d  
# Values for Gri  
# d  
# ll Size \(at Equator\)  
\~9.3 km  
\~3.7 km  
\~2 km  
\~1 km  
90 m  
60 m  
30 m  
10 m  
3 m  
ls per inch \(40 pixe  
ls per cm\)  
Figure 3.8 shows a result of downloading the wrong DEM to make a  
hillshade. The 1-arc-second DEM is too coarse to produce a useful hillshade at  
the large scale of 1\:15,000. The pixels are about 30 meters square, the same as  
NLCD land cover data, and can be seen as square shapes in the image at this  
large scale. A hillshade created with smaller pixels \(1/9 arc-second, or about 3  
meters\) at the same scale is shown in   
from data download apps are often lidar-based and provide details such as  
rock textures, road cuts, parking lot edges, and sometimes building footprints. **FIGURE 3.8.** Th  
e wrong resolution DEM for th  
e  
map scal  
e pro  
d  
uces a blurry result. Th  
e  
hillsha  
d  
e from a 1-arc-secon  
d  
DEM is shown at 1\:15,000 but is suite  
d to mapping at  
1\:120,000. Th  
e  
mappe  
d location is centere  
on Ragg  
e  
d  
d  
Mountain in th  
e Mount Greylock  
State Reservation near A  
d  
ams, Massachusetts, an  
d  
exporte  
d  
at 400  
d  
ots per inch \(  
dpi\).  
**FIGURE 3.9.** Th  
e correct resolution for th  
e scal  
e pro  
d  
uces a crisp result. Th  
e 1\:15,000  
terrain map is create  
d by hillsha  
d  
ing a 1/9 arc-secon  
d  
DEM for th  
e sam  
e extent as   
\(exporte  
d  
at 400  
dpi\). Data source for   
3.9\: USGS.  
d  
The next three   
products and default hillshade settings \(  
suitable scale, with the   
\(  
Figures 3.8 to 3.12 were all produced at high resolutions \(400 dpi\) suited to  
book publishing. The next two   
akin to a desktop computer display. You can see how   
second \(too   

as   
the   
detail a **FIGURE 3.10.** Larg  
er pixe  
ls work we  
ll for th  
e 1\:40,000 terrain map, with a hillsha  
d  
e from a  
1/3 arc-secon  
d  
DEM. Th  
e extent of   
e  
d  
Mountain is shown by th  
e ye  
llow  
rectangl  
e \(exporte  
d  
at 400  
dpi\).  
**FIGURE 3.11.** One arc-secon  
d pixe  
ls \(shown at too larg  
e a scal  
e in   
h  
ere at th  
e suitabl  
e  
e scal  
of 1\:120,000. Th  
e extent of   
e  
d  
Mountain is  
shown by th  
e ye  
llow rectangl  
e \(exporte  
d  
at 400  
dpi\).  
**FIGURE 3.12.** Pixe  
ls 100 m  
Th  
e extent of   
e  
d  
400  
dpi\).  
eters in size are seen h  
ere at th  
e suitabl  
e  
e scal  
of 1\:360,000.  
Mountain is shown by th  
e ye  
llow rectangl  
e \(exporte  
d  
at  
**FIGURE 3.13.** Pixe  
1\:120,000 wh  
en exporte  
d  
ls 1/9 arc-secon  
at 100  
d  
dpi.  
in size are too   
e we  
ll at th  
e  
e small scal  
of **FIGURE 3.14.** One arc-secon  
d pixe  
ls imag  
e we  
Data source for   
ll at 1\:120,000 an  
100  
d  
dpi \(coarser than  
Chapter 4 goes into more detail on resolution and   
maps, but the main message here is to choose \(or create\) data with a  
resolution that matches the intended map scale. You can also smooth a DEM  
or resample it to larger pixel sizes to produce data at desirable scales for your  
terrain mapping.  
As you move from detailed contour mapping to smaller scales, you can get  
away with selecting a subset of contours from a more detailed interval, such as  
keeping the index contours only. You will likely become quickly dissatis  
with this strategy because you will have sparse lines that are each overly  
detailed. Generalizing contour lines with simpli  
operations to try to get them to work at smaller scales is a poor choice. The  
way they nest and follow each other in shape will be corrupted as the shape of  
each line is independently changed. The landscape form will no longer be  
clear, and the lines will be inaccurately positioned, making for a messy map.  
The best way to prepare contours for a smaller scale is to go back to the DEM,  
smooth it, and then regenerate the contour lines. You may smooth the DEM,  
resample it to coarser pixels, such as 10-meter pixels resampled to 100-meter  
pixels \(100 pixels are averaged to get one value for the larger pixel\), or do  
both. Resampling, smoothing, and other DEM processing suited to a smaller-  
scale representation sets you up for creating better contours as well.  
**eWater through scal** Eliminating detail from hydrography makes it useful for smaller scale  
mapping. US national hydrography data includes a useful visibility attribute  
intended for eliminating features for eight approximate map scales. Mapping  
all the hydrography in a high-resolution dataset may suit map scales larger  
than 1\:24,000. The   
from 1\:24,000 to 1\:50,000. This naming pattern continues through   
levels\: 2\) 50000, 3\) 100000, 4\) 250000, 5\) 500000, 6\) 1000000, 7\) 2000000, 8\)  
5000000\. Level 8 is intended for map scales smaller than 1\:5,000,000.  
The results of hydrography elimination using eight   

matches the   
\(level 4 for a 3-by-3-inch 1\:250,000 map\). Hydrography with visibility equal  
to or greater than 250000 are shown in that fourth map. The   
denser than intended and the second-row maps are progressively sparser.  
**FIGURE 3.15.** Maps with progressive  
ly fewer hy  
drography features are create  
using NHD  
d  
visibility   
e  
maps of Gl  
ens Falls, N  
ew York, an  
d th  
e surroun  
d  
ing area were exporte  
at 1\:250K, with  
each size  
d  
at 3 by 3 inch  
es. Data source\: NHD. Maps by N. Ch  
erok, Penn  
State  
e  
G  
ography.  
d Figure 3.16 compares an NHD sample area at medium and high resolutions.  
Compare   
design for the same data in   
second map uses an NHDPlus attribute, total upstream drainage area, to taper  
the lines. They are set thinner and thinner in ten classes. You can make that  
tapering e  
classes, the streams draining less area. These design choices make it easier to  
understand the stream network.  
The stream lines may still be too detailed in shape for a smaller scale, even  
after removing channels with a visibility attribute or tapering. More  
simpli  
small-scale 1\:1,000,000 \(1\:1M\) data. For example,   
location with medium-resolution NHD data, a legacy product now stewarded  
by the US Environmental Protection Agency \(EPA\). There are fewer lines in  
this generalized data, and they are simpler in form. Hydrography data  
prepared for speci  
provide a much better context for most map topics at smaller scales that are  
not intensively related to hydrography.  
An example of hydrography data suitable for mapping large regions and  
continents is Natural Earth, an open source for high quality data for small-  
scale mapping. Natural Earth o  
populated places, roads, rivers, and terrain generalized to suit 1\:10M, 1\:50M,  
and 1\:110M. Natural Earth physical data for South America hydrography is  
shown in   
fewer as their intended scales are smaller. The smallest scale represents hydro  
for the entire continent as two major rivers, each from their headwaters to  
the coast. **FIGURE 3.16.** NHD  
d  
ata at high resolution \(1\:24K\) \(***A***\) at one  
line weight an  
d  
with lines  
tapere  
d by total drainag  
e area \(***B***\). Me  
ium  
d  
-resolution \(1\:100K\)  
d  
ata with tapere  
d lines \(***C***\).  
Th  
ese  
maps of a portion of th  
e Yakima River in Washington were exporte  
d  
at 1\:100K, each  
size  
d  
at 3 by 3 inch  
es. Data sources\: USGS NHD, US EPA  
. Map by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 3.17.** Natural Earth d  
ata is inten  
e  
d  
d  
for mapping at 1\:10M \(***A***\), 1\:50M \(***B***\), an  
d  
1\:110M \(***C***\). Th  
ese exampl  
es show hy  
dro  
d  
ata at its inten  
e  
d  
d  
scal  
es, exporte  
d  
as 3-by-3-inch  
maps. Data source\: Natural Earth. Maps by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 3.18.** Natural Earth hy  
drography  
d  
ata inten  
e  
d  
d  
for mapping at 1\:10M \(***A***\), 1\:50M  
\(***B***\), an  
d  
1\:110M \(***C***\), an  
d  
all shown at 1\:10M. Th  
ese exampl  
es show th  
e sam  
e extent at th  
e  
sam  
e scal  
e, to  
e  
mphasize simpli  
e  
d  
limination  
e  
d  
ecisions through scal  
. Data  
source\: Natural Earth. Maps by N. Ch  
erok, Penn State  
e  
G  
ography.  
# Place  
# d  
# e  
# ata through scal  
Datasets for populated places are also chosen or altered to suit the map scale.  
The three datasets shown in  1\:10M \(A\), 1\:50M \(B\), and 1\:110M \(C\). All three are shown together at a too-  
large scale of 1\:5M in   
areas and boundaries for each smaller scale. For example, compare the blue  
and green areas. The green outlines are for maps   
are simpler and smoother outlines. Urban areas are merged when they are  
close together and many smaller urban areas \(which are still big cities\) are  
eliminated. When the map scale becomes very small, and the urban areas  
become very small, they are better collapsed to points \(the purple dots in  


area polygons, collapsed from an area to a line. **FIGURE 3.19.** Urban areas centere  
on Sao Paulo, Brazil, plus boun  
d  
e  
d  
aries an  
d  
coastlines in  
th  
e re  
gion are shown at th  
eir inten  
d  
d  
scal  
es of 1\:10M \(***A***\), 1\:50M \(***B***\), an  
d  
1\:110M \(***C***\). Data  
source\: Natural Earth. Maps by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 3.20.** Urban area  
d  
ata is shown superimpose  
an  
d  
d  
enlarg  
e  
d to 1\:5M for  
comparison\: 1\:10M \(blue\), 1\:50M \(green\), an  
d  
1\:110M \(purpl  
e point\). Polygons are simpli  
smooth  
e  
, m  
d  
erg  
e  
, an  
d  
d  

d to points to g  
eneralize th  
e  
m to suit th  
e  
Natural  
Earth map scal  
es. Th  
e  
larg  
est polygon is Sao Paulo, Brazil, with Campinas to th  
e north an  
Santos at th  
e coast, with many surroun  
d  
ing populate  
d places. Data source\: Natural Earth.  
Maps by N. Ch  
erok, Penn State  
e  
G  
ography.  
,  
d  
d  
Another example of using vector place data through scale is choosing from  
among census geographic entities. Common hierarchy and nesting of  
enumeration units for aggregating US census data are shown in   
and 3.22. For example, census blocks fall within block groups, and those nest  
within tracts and then within counties. Counties nest within states, but school  
districts, congressional districts, and places such as towns and villages \(  
3.22A and F\) may overlap statistical boundaries. Comparing   
F shows block groups do not nest in incorporated places, for example. This seems like trivia, but as you plan to cache a series of maps of demographic  
data, you plan which enumeration units to use through scale ranges. Block  
groups may be great for large-scale levels. Changing to tract, then county,  
then state data for smaller-scale levels will provide a useful sequence for an  
online mapping tool.  
**FIGURE 3.21.** Stan  
d  
ard hierarchy of US census g  
e  
ographic entities with lines connecting  
neste  
enum  
d  
eration units. Census hierarchy of Am  
erican In  
d  
ian, Alaska Native, an  
d  
Native  
Hawaiian Areas is shown in Imag  
e source\: US Census Bureau. Imag  
e  
d  
escription **FIGURE 3.22.** Five US census g  
e  
ographies shown tog  
eth  
er \(***A***\) for Gl  
ens Falls, N  
ew York,  
create  
d  
at 1\:240,000. Th  
e  
hierarchy of census g  
e  
ography shows nesting of blocks \(***B***\), block  
groups \(***C***\), tracts \(***D***\), an  
e  
d  
counties \(***E***\). Census place polygons \(***F***\) are an exampl  
e  
g  
ographic entity that falls outsi  
d  
e th  
e nesting hierarchy. Data source\: US Census Bureau.  
Maps by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 3.23.** US Census Bureau county-  
l  
eve  
l TIGER  
d  
ata \(***A***\) an  
d three  
l  
eve  
ls of  
d  
etail  
offere  
d  
as cartographic boun  
d  
ary   
es are  
mappe  
d  
at 1\:800K\: Data for 1\:500K \(blue in ***B***\),  
1\:5M  
d  
ata \(green in ***C***\), an  
1\:20M  
d  
d  
ata \(purpl  
e in ***D***\). Two maps show th  
e sam  
e 1\:5M  
d  
ata  
\(green\) at two scal  
es\: enlarg  
e  
d  
\(***C***\) an  
d  
inten  
e  
d  
d  
\(***E***\). Th  
e inset map at th  
e  
lower right \(***F***\)  
con  
ere is more  
d  
etail in th  
e TIGER  
d  
ata for larg  
e  
e-scal  
maps \(1\:500K  
d  
ata as a  
blue  
line  
over gray TIGER line\). Data source\: US Census Bureau.  
Census geographies are o  
at a variety of scales. As you download US census enumeration units, you will  
choose the level to suit your map purpose. Figure 3.23 compares four levels of  
detail for US census county data near Norfolk, Virginia.  
TIGER \(Topologically Integrated Geographic Encoding and Referencing\)  
county   
build into their data, out to as many as six decimal places in coordinates. The  
county-level boundaries extend to the centerlines of waterbodies and into the  
ocean. Thus, the detailed county-level data doesn’t contain shorelines, which  
makes it awkward for cartographic design work. Figure 3.23A shows the  
TIGER data at 1\:800,000. Notice that the bay seen in   
Cartographic boundary   
detail\:  
500K = 1\:500,000  
5M = 1\:5,000,000  
20M = 1\:20,000,000 \(small scale; whole United States on a page\)  
None of these cartographic boundary   
well as boundaries on a large-scale map, but they are much better choices for a  
map showing demographic data across a region. The simpli  
form coalescing and overcomplicated shapes that interfere with reading the  
map. Figures 3.23B, C, and D compare line simpli  
cartographic boundary levels. Each is overlaid on the gray TIGER lines for  
comparison. The location map at the bottom left \(  
1\:5M data at its intended scale. Fewer small crenulations and the useful  
coastline make it a better design choice for the polygons. The inset map at the  
bottom right \(  
compared to the cartographic boundaries \(1\:500K\).  
Census has a speci  
American Indian, Alaska Native, and Native Hawaiian Areas \(AIANNHA\),  
shown in   
useful for deciding which aggregations of US census data are suitable for  
mapping a diverse region. For example, municipios in Puerto Rico and  
parishes in Louisiana are county-level geography. Figure 3.25 maps the  
hierarchy of American Indian enumeration units from census cartographic  
boundaries simpli  
lands in South Dakota. **FIGURE 3.24.** Census hierarchy an  
d  
nesting of Am  
erican In  
d  
ian, Alaska Native, an  
Native Hawaiian Areas \(AIANNHA\). Figure source\: US Census Bureau. Imag  
e  
d  
d  
escription **FIGURE 3.25.** Boun  
d  
aries for four AIANNHA l  
eve  
ls for th  
e Pine Ri  
g  
e an  
d  
d  
Rosebu  
d  
Reservations in South Dakota\: F  
e  
d  
eral Am  
erican In  
d  
ian Areas, with Off-Reservation Trust  
Lan  
d  
s toward  
north  
east \(***A***\); Tribal Subd  
ivisions \(***B***\); Tribal Census Tracts \(***C***\); an  
d  
Tribal  
Block Groups \(***D***\). Data source\: US Census Bureau. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
# GENERALIZING  
# FOR SMALLER SCALES  
You need to generalize the map when it becomes cluttered at smaller scales.  
You cannot keep all the details of a real place as you make it tiny on the  
display. There are many changes made to geographic data to prepare it for  
making maps at particular scales. Chapter 1 focused on generalizing by  
selecting the feature types to include on maps, and scale a  
decisions. In the previous sections of this chapter, the emphasis is choosing  
data already prepared for the right resolution and level of detail for a map.  
Mapmaking also includes classing and reclassifying data, using statistical  
measures to summarize data, and choosing symbol colors, widths, patterns,  
shapes, and other visual variables. All of these design decisions are forms of  
generalization.  
Generalize when map features start to coalesce, lines pile on top of each other,  
wiggles mash together, and small features close into dots. You can stall the  
need to change the data by   
or remove outlines on areas as you map at smaller scales.  
There are also many geoprocessing tools you can use to change the geometry  
of your data and improve the look of your map. These four generalization  
operations are particularly useful\: simplify, aggregate, collapse, eliminate.  
There are many more operations than these, including\: thin, merge, typify,  
smooth, displace, and exaggerate. This book is not a how-to for GIS  
processing, so my intent in this section is to point you in the right direction  
for  A good approach to generalization aims to retain the essence of the place  
being mapped. There is not one operation that will accomplish this goal.  
Operations are used together, in sequences that work for the area mapped.  
You might eliminate, then simplify, then collapse, then smooth, then  
eliminate again to achieve the right level of detail. Choosing generalization  
sequences is an analytical art.  
# Simplify  
Simplify operations remove detail from a shape. There are many algorithms  
for removing vertices \(points that de  
polygons. Figure 3.26 shows a simpli  
smaller scale map. Figure 3.27 shows a more dramatic change in geometry  
with a single simpli  
a much smaller scale.  
Doing simpli  
positions of lines. That’s good when the result is simpler lines that don’t  
coalesce, but not so good when the lines no longer register well with related  
features on other layers, such as adjacent boundaries or hydrography.  
**FIGURE 3.26.** Th  
e northwest quarter of th  
e Ral  
eigh Planning Juris  
d  
iction in North  
Carolina is shown as  
e  
d  
etail  
\(***A***\) an  
d  
d  
simpli  
d  
\(***B***\). Th  
e small  
e  
er scal  
map shows th  
e  
simpli  
d boun  
d  
ary an  
d  
only major roa  
d  
s \(***C***\) an  
d  
inclu  
d  
es an orang  
e square for th  
e extent  
of map ***B***. Data source\: USGS, City of Ral  
eigh. Map by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 3.27.** Th  
e  
d  
etail of canals along th  
e coastline near Spring Hill, Flori  
a \(***A***\), is  
d  
g  
eneralize  
\(***B***\), an  
d  
d  
suitabl  
e for a much small  
e  
er-scal  
map \(***C***\). Th  
e  
map ***B*** extent is shown  
with an orang  
e square  
on map ***C***. Data source\: USGS, US Census Bureau. Map by N.  
Ch  
erok, Penn State  
e  
G  
ography.  
Operations related to simplify include smooth, exaggerate, and displace. All  
these generalizations change the positions of lines or polygons on the map  
without collapsing or aggregating them. Raster data is also generalized using  
numerous smooth and resample options.  
# Aggregate  
Many GIS tools make fewer features out of many little ones. They work by  
setting a threshold on how close features need to be before they are brought  
together. The tools have varied names \(and their names are inconsistent with  
research terminology\), so look at the descriptions of what they do to decide if  
they will accomplish your mapping goals of having fewer and larger shapes.  
Aggregation gathers many features of one dimension into a shape at a higher  
dimension. For example, a railway yard with many parallel track lines may be  
grouped into a polygon without the line detail \(1D to 2D\). Explosions at many  
points may be aggregated to the areal extent of a battleground \(0D to 2D\) for  
a smaller scale. An area surrounding points may be created using a convex  
hull, concave hull, minimum bounding area, or similar grouping operations. Generalizations that don’t change dimensionality combine nearby features  
into a larger version of the same type \(2D to 2D\). Figure 3.28 shows two  
approaches to grouping many wetland polygons. The data is from the  
National Wetlands Inventory \(NWI\) in an area west of the Lower Suwannee  
National Wildlife Refuge in Florida. The NWI polygons have thin black  
outlines in   
aggregation tool that groups polygons, removes small areas, and removes  
small holes by setting three thresholds.  
**FIGURE 3.28.** NWI wetlan  
d polygons in an area west of th  
e Lower Suwannee  
National  
Wildlife Refug  
e in Flori  
a.  
d  
An aggre  
gation process is shown in cyan \(***A***\), an  
d  
an expan  
-  
d  
shrink process is shown in mag  
enta \(***B***\). Note th  
e thin gray lines in both, which outline th  
e  
e  
d  
etail  
d  
NWI polygons. Map ***C*** compares th  
e two results\: purpl  
e wh  
ere both have wetlan  
d  
an  
mag  
d  
enta wh  
ere th  
e shrink  
-expan  
d  
was more aggressive  
. Data sources for   
an  
d  
3.29\: US Fish an  
d  
Wildlife Service \(FWS\) National Wetlan  
d  
Inventory \(NWI\), USGS.  
s Figure 3.28B shows an alternative approach to grouping many small polygons  
into simpler and larger shapes. Converting polygons to raster data and using  
expand and shrink operations, one after the other, is a useful way to get rid of  
narrow spaces within and between shapes. Figure 3.28C compares polygons  
resulting from the two approaches\: purple shows areas retained in both  

The goal of aggregating is to retain the character of a landscape at a smaller  
scale. Figure 3.29A shows the original NWI polygons in gray. Figure 3.29B  
shows the expand-shrink polygons in gray \(they are magenta in   
which generalize the numerous wetlands. Figures 3.28C and D show these  
two maps at a smaller scale, and 3.28D bene  
shapes. **FIGURE 3.29.** Original NWI wetlan  
d polygons \(***A***\) an  
d th  
e expan  
without outlines \(th  
e sam  
e polygons as ***B***\). Maps ***C*** an  
small  
e  
er scal  
.  
d  
d  
-shrink g  
eneralization  
***D*** compare th  
e pair at a  
Human-made structures are grouped in many ways on maps. Adjacent  
buildings may be merged to form larger polygons that retain building-like  
shapes to characterize a place as built-up \(2D to 2D\). You might accomplish  
these changes with an aggregation or dissolve tool. For a more aggressive  
grouping, you can replace all the buildings seen at a large scale with an urban-  
area polygon. Figure 3.30 shows building footprints replaced by a residential  
zoning polygon. Another grouping operation is merging parallel highway  
lines \(dual carriageways or divided roads\) into a single line to represent a  
major road on a smaller scale map \(1D to 1D\).  
Typify is a related generalization approach that uses a representative set of  
new features to characterize a location. For example, a tank farm with  similar cylindrical oil storage tanks, which can all be represented at a large  
scale, may use a pattern of ten or so circles squeezed into the oil depot area at  
a smaller scale to retain the visual character of a tank farm.  
# Collapse  
Collapse reduces the dimensions of a feature. Common choices already  
described are to collapse a wide river to be represented by a single line \(2D to  
1D\) or collapse the area of a city to be represented by a point \(2D to 0D\). The  
details of interchange ramps are typically reduced to point symbols to show  
highway exits on a smaller scale map. You can accomplish this collapse by   
grouping ramps to a polygon and then collapsing to a point \(1D to 2D to 0D\).  
An example result for ramp collapse is shown in   
Sometimes collapse generalizations are created by GIS operations. Sometimes  
the visual e  
removed, and a downtown point location is used to position the city symbol  
for a smaller scale map. The river area is replaced by the river centerline from  
the hydrography data for a smaller scale. Figure 3.31 shows collapse examples  
of areas to line and point features.  
# Eliminate  
Having attributes in your GIS data that let you systematically eliminate  
features and labels within categories is key for multiscale cartography.  
Systematic elimination is the most e  
as scales get smaller and smaller. A best practice is to include attributes in GIS  
data that provide some order of importance among features of the same type.  
These attributes include population or economic importance for places,  
classes or tra  
polygons. Examples of elimination decisions are shown in the previous  
sections on generalization. Figures 3.26 and 3.31 show local roads and ramps removed. Figure 3.30 shows all building footprints removed. Figure 3.28  
shows small wetland polygons removed \(seen in gray\). The polygons  
representing rivers that are major enough to have two banks on large-scale  
maps can be replaced with their centerlines at smaller scales, as seen in   
3.31.  
**FIGURE 3.30.** Build  
ings in Anchorag  
e, Alaska, at a larg  
e scal  
e \(***A***\) are replace  
blue resi  
d  
ential zoning area \(***B***\). Parks are  
green an  
d  
oth  
er areas are  
d  
ark  
er. Th  
e  
extent is shown with an orang  
e square  
on th  
e small  
er scal  
e city map \(***C***\). Data source\:  
Courtesy of MO  
A \(Municipality of Anchorag  
e\). Map by N. Ch  
erok, Penn State  
d by a lighter  
map ***B***  
e  
ography.  
G  
**FIGURE 3.31.** Th  
e city area, river areas, an  
d highway interchang  
es are collapse  
d to points  
an  
d lines for a portion of Ral  
eigh, North Carolina. Th  
e  
larg  
e  
er scal  
map \(***A***\) was create  
d  
at  
1\:150K as a 1-by-3-inch map, an  
d th  
e  
g  
eneralize  
e  
d  
1\:300K map \(***B***\) is half scal  
. Data source\:  
USGS, NHD, City of Ral  
eigh. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
A subtle additional strategy for generalizing hydrography is to draw only  

decent quality, with the main channels carrying the names for labels, this  
approach may o representation. Likewise, small waterbodies that are not named in a database  
can be removed. Hydrography without names are often ponds, minor creeks,  
and braids or anastomosed side channels that are not a main channel.  
The same data from   
replaced by centerlines and hydrography with null names removed. This pair  
of decisions created hydrography better suited to a smaller scale \(  
There is some clean-up to do and a check to decide if something important  
needs to be pulled back onto the map \(or the database requires better naming  
completeness\), but the combination can be an e  
features. All the hydrography for this area is shown in the   
3.15 for comparison, and this map \(  
in that   
working through scale.  
**FIGURE 3.32.** Map of Gl  
ens Falls, N  
2000000\) \(***A***\). Hy  
drography is g  
eneralize  
an  
e  
d  
liminating features with no nam  
by N. Ch  
erok, Penn State  
e  
G  
ography.  
ew York, at l  
eve  
l 7 \(visibility equal to or greater than  
d by e  
liminating river areas, revealing centerlines,  
es \(***B***\) for a small  
er scal  
e \(***C***\). Data source\: NHD. Maps  
Thinning is a related approach that chooses among many similar features,  
keeping a selection to reduce map clutter. An example is road thinning tools  
that calculate network connectivity using minimum length and hierarchy data to produce an invisibility ranking, similar to the visibility   
hydrography data. This approach lets you retain the roads that provide main  
connections between towns, for example, rather than simply removing all  
local roads at a smaller scale.  
Elimination is a good   
the shape of features, so it doesn’t change spatial relationships between layers.  
Rivers still run in their valleys and features that are positioned side-by-side  
don’t start crossing over each other. Removing an entire class of features can  
also reduce clutter, but it can create a design change that is too abrupt. Too  
many lakes? You could take them all o  
ones and eliminate the smaller ones based on area or importance measures,  
such as recreational value. **FIGURE 3.33.** Four US topographic maps of th  
e sam  
e area east of Nashvill  
e, Tennessee,  
e  
compil  
d  
at similar scal  
es\: 1903 at 1\:125,000 \(***A***\), 1932 1\:62,500 \(***B***\), 1984 at 1\:100,000 \(***C***\),  
an  
d  
2024 at 1\:100,000 \(***D***\). Th  
e set shows chang  
es in built-up areas, roa  
d  
s, place-nam  
es,  
an  
d  
a reservoir, as we  
ll as chang  
es in map d  
esign through tim  
e  
. Map sources\: USGS  
topoView \(***A***, ***B***, ***C***\) an  
d  
TopoBuild  
er \(***D***\).  
# MAPPING THROUGH TIME  
Cartographers are sometimes asked, “Hasn’t everything already been  
mapped?” Many geographic features change over time, and they can change  
dramatically. Meandering rivers change paths and water levels rise and fall to  
create di volcanic and sediment deposits, and by geologic uplift. Cities expand with  
new housing developments, and other housing is replaced by commercial  
growth or cleared for highways as time passes. Vegetation is changed by  
farming,   
changes in the positions and shapes of continents. Looking far forward,  
predictions of future climates and land-use changes can be mapped.  
# Basemaps for past times  
Map readers expect maps to be updated, but if you are mapping historical and  
prehistoric events, you want to roll-back time to the approximate landscapes  
in which events took place. There are many resources that can help you build  
basemaps concurrent with past events.  
The four USGS topographic maps in   
range in date from 1903 to 2024, spanning just over 120 years. They show a  
wealth of change\: growing populated areas, new highways, changes in names,  
and a reservoir   
3.33C and D was completed in 1968 and is an example of a substantial  
landscape change east of Nashville, Tennessee. If you were creating maps to  
support writing about the seven elections and changing districts of US  
Representative J. Percy Priest in the 1940s and 1950s, you would not include  
the reservoir named after him, after his death.  
Creating concurrent maps can also require archival work, and it’s a  
worthwhile e  
in the Cause of Liberty series by Charles E. Frye focuses on the Revolutionary  
War, and the author uses GIS to organize and explain his historical research.  
The books’ maps show places in parts of colonial America relevant to the  
family’s history. They were compiled from period maps created between 1775  
and 1784, with reference to earlier maps. Figure 3.34 is an example map of areas west and south of Boston. The map does not show the places, roads, and  
boundaries of modern day—they have of course changed since the 1700s.  
**FIGURE 3.34.** Map of colonial Am  
erica places, roa  
s, an  
d  
d boun  
d  
aries concurrent with a  
Revolutionary War historical tim  
e perio  
d  
covere  
d by th  
e Duty in th  
e Cause  
of Liberty book  
series. Map source\: Charl  
es E. Frye, 2017, ***Th***  
# e War has Be  
***gun***. **Time series**  
Understanding our changing world invites you to make maps of time series.  
Time can be represented as maps for a sequence of dates, as seen with the  
topographic map series in   
cyclical\: around the clock during a typical day, or throughout a year by weeks,  
months, or seasons. Figures 3.35 and 3.36 show examples of mapping a  
sequence of dates.  
Using the same map symbols or data classing across a series is crucial for  
allowing map readers to make the comparisons you intend. The maps in  

among the maps in their sets.  
Di  
changed landscape. Each map in   
greens to represent percent land cover in sagebrush and the same lightness  
range of purples to represent percent land cover in litter for 1998, 1999, and  
2000 in a small area of southwestern Wyoming.  
**FIGURE 3.35.** Chang  
e in  
d  
istribution of percent sag  
ebrush \(green\) an  
d percent litter  
\(purpl  
e\) lan  
d  
covers through tim  
e\: 1998 \(***A***\), 1999 \(***B***\), an  
d  
2000 \(***C***\). Th  
e  
mappe  
d  
area is  
15-by-15 km across, south  
east of Evanston, Wyoming. Data source\: MRLC. Map by N.  
Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 3.36.** N  
eva  
d  
a county-  
l  
eve  
l boun  
d  
aries in  
d  
ark blue for 1860 \(***A***\), 1870 \(***B***\), 1880  
\(***C***\), an  
d  
1920 \(***D***\). Th  
e area mappe  
d  
was part of th  
e Utah territory in 1860, N  
eva  
d  
a becam  
e  
a state before 1870, an  
d  
more  
lan  
was a  
e  
d  
dd  
d by 1880. Th  
e 1920 boun  
d  
aries show a few  
chang  
es an  
d  
are similar to those  
of th  
e 2020s. Th  
e shape  
of current-  
ay N  
eva  
d  
d  
a is shown  
in gray on all four maps as a constant fram  
e  
. Data source\: National Historical GIS \(NHGIS\).  
Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
Looking at administrative boundary changes over a longer period of time  
reveals the beginnings of a western US state. The   
\(  
1880, and 1920 maps \(  
Nevada’s county-level boundaries. Each map uses wide light-blue lines to  
show the echo of boundaries from the preceding map to help notice changes  
through time.  
Time as a cycle of change is shown in   
precipitation by month are mapped for the conterminous United States. Each  
season gathers three months into a row. For example, spring maps are for  
March, April, May \(MAM\) averages. Among the many interesting changes  
through a year, the maps show the northwest as wet in winter and the  
southeast, and east more generally, as wet in summer. This   
demonstrates the common technique of small multiples, useful for comparing  
a set of related distributions.  
These maps are readily compared because they are symbolized exactly the  
same way. All 12 maps in  color ramp for 0 to 8 inches of precipitation, regardless of the range within a  
particular map. Sharing data classes and colors across maps in series also  
o  
**FIGURE 3.37.** Precipitation, 1991–2020 monthly averag  
es groupe  
Maps source\: NO  
AA Climate  
.gov, National Centers for Environm  
d by seasons along rows.  
ental Information \(NCEI\).  
Change can also be represented with a calculation made between datasets,  
rather than challenging the reader with comparing di  
or more maps. Figure 3.38 shows changes in ocean heat content as a  
di pairing two maps \(2023 average and long-term average\), but a di  
provides information on change in a direct manner.  
**FIGURE 3.38.** Map of amounts of h  
eat energy in th  
e top 2,300 feet of ocean water  
averag  
e  
d  
for 2023 compare  
d  
with a long  
-term averag  
e calculate  
d  
over a span from 1955 to  
2006\. Un  
d  
erstan  
d  
ing a chang  
e  
map is easier than comparing two maps of  
d  
ifferent  
averag  
es. Map source\: NO  
AA Climate  
.gov, NCEI.  
OceanofPDF.com **CHAPTER 4**  
# EXPLAINING MAPS  
# C  
oncise and well-placed words communicate information clearly.  
Mapmakers design their titles, legends, and notes to help map readers  
understand and remember their maps. Scale bars, grids, and north arrows are  
also basic elements in the layout of maps. The care with which you compose  
and   
Building better maps through wording and placement requires revisiting map  
layout techniques from chapter 1. It means providing information without  
disrupting the visual hierarchy that emphasizes the main map content. It also  
means paying attention to nuances and details of order, placement, and  
relationships in content. Excellent map design is de  
the more you know about the design tools that you have in GIS and the  
cartographic conventions for marginal elements, the quicker you will be able  
to complete professional, readable map designs.  
Designing better maps means completing a map with the following\:  
An informative legend that shows the meaning of map symbols  
Hierarchies in text content, descriptions of mapped calculations, and  
logical line breaks and spacing  
Well-designed marginal elements, including indicators of scale and  
direction  
**MAP LEGENDS** A legend presents information that allows the reader to interpret the map and  
understand its symbols. In this section, you will learn the basic legend  
components for a variety of standard thematic mapping methods. Legends  
also assist in interpreting base information, so you will see examples of  
reference map legends in this chapter. However, many basemap themes are  
easily understood within the map context when they are well designed. Use  
your cartographic license to omit the more obvious supporting data types  
from the map legend, such as terrain shading and features labeled on the map  
\(for example, airports, towns, roads, and rivers\).  
# Data l  
# egen  
# d  
# s  
Map legends explain map symbols. The basic types of thematic maps have  
fairly conventional legend content. GIS software provides only some of this  
content within legend tools. This section provides an overview of what you  
should be aiming for as you adjust default legends for the following types of  
thematic maps\:  
Choropleth  
Qualitative area   
Dot \(density\)  
Isolines  
Proportioned symbols  
Segmented symbols  
# Choropl  
# eth  
A legend for a choropleth map states the data range for each color or pattern  
used. Choropleth maps of one variable are produced using graduated colors as area   
schemes \(4.1B\). Unclassed choropleth maps do not use class breaks \(  
4.1C\). For maps intended to discuss only a general pattern, legends may be  
labeled with only the general indications of color meanings \(such as Low and  
High in   
**FIGURE 4.1.** Choropl  
e  
eth map l  
g  
en  
d  
s\: sequential colors with class rang  
es labe  
e  
l  
d  
iverging colors with class breaks labe  
e  
l  
\(***B***\), an  
d  
d  
smooth gra  
d  
ient of color for an  
unclasse  
d  
choropl  
eth with g  
eneralize  
d labe  
ls \(***C***\). Figures by N. Ch  
erok, Departm  
e  
G  
ography, Th  
e Pennsylvania State University \(Penn State  
e  
G  
ography\).  
\(***A***\),  
d  
ent of  
As you label a choropleth map legend, you will be deciding whether to do the  
following\:  
Round the numbers for labeled ranges or at breaks  
Increment labels \(for example, 0–10 and 10–20 or 0–9 and 10–19; this  
issue is linked to rounding\)  
Use the word “to” or a dash within ranges \(this may depend on whether  
the data includes negative numbers\)  
Label breaks between classes with single numbers rather than labeling  
class ranges Order classes with the highest numbers at the top \(like the vertical axis  
on a graph\) or at the bottom of the legend  
Label ranges with the actual values represented by the symbol, creating  
gaps between ranges  
Use the true maximum and minimum in the dataset to label ranges, or  
use statements such as “fewer than 100 people” or “more than 150  
percent” for   
Add annotations that elaborate on the meaning of ranges, or meaning  
of class breaks, to assist map reading  
# Qualitative area fills  
Maps that use qualitative area   
color or pattern \(  
with gaps between them, assists map reading \(  
For area symbols, the legend boxes should present colors or patterns in the  
same way they appear on the map. If map polygons have outlines, use the  
same outline color and weight in the legend. If there are no lines between  
colors on the map, consider presenting the symbols that way in the legend  
\(  
map, consider showing them that way in the legend as well \( e  
**FIGURE 4.2.** Qualitative area map l  
g  
en  
d  
s that list languag  
es represente  
groupings of re  
late  
d lan  
d  
cover classes \(***B***\). Figures by P. Limpisathian an  
d  
State  
e  
G  
ography.  
d  
\(***A***\) an  
d  
show  
N. Ch  
erok, Penn **Dot \(**  
# d  
# ensity\)  
At their simplest, dot map legends de  
\(  
counted, and they do not show precise location\). A dot map is improved if  
you include example densities in a set of legend boxes in addition to de  
the dot value \(  
boxes for the legend.  
**FIGURE 4.3.** Th  
e  
e  
minimum l  
g  
en  
d  
for a  
d  
ot map d  
e  
e  
m  
e  
eaning of a singl  
d  
ot.  
# FIGURE 4.4.  
Dennis an  
d  
A compl  
ete  
e  
l  
g  
en  
d  
for a  
d  
P. Limpisathian, Penn State  
G  
ot map inclu  
ography.  
d  
e  
e  
es exampl  
d  
ensities. Figure by A  
.  
# Isolines  
The simplest legend on a contour map or other isoline map is a statement of  
the isoline interval. If the isolines are augmented through use of index lines,  
hachures for closed depressions, or supplemental lines, you may choose to  
identify the meaning of these di are used between isolines to enhance the map pattern, present those colors in  
a legend. You may label the colors with data ranges or label the isolines that  
mark breaks between colors. Example isoline legends are shown in   
and 4.6.  
**FIGURE 4.5.** Th  
e  
e  
minimum l  
g  
en  
d  
for an isoline  
map d  
e  
e isoline interval.  
**FIGURE 4.6.** Le  
g  
en  
d  
for classe  
contours wh  
ere colors chang  
e  
d hypsom  
etric colors with labe  
. Figure by P. Limpisathian, Penn State  
ls at breaks, akin to labe  
e  
G  
ography.  
ling  
# Proportione  
# d  
# symbols  
Proportioned point symbol legends present a set of example symbol sizes to  
demonstrate the amounts that map symbols represent. The best strategy is to  
show the smallest and largest symbol sizes seen on the map, so the map reader  
can interpolate between these extremes. Include one or more intermediate  
size symbols to assist map reading \( **FIGURE 4.7.** Le  
symbols an  
d  
g  
en  
a rang  
e  
d  
s on proportione  
d point symbol maps show th  
e  
of sizes between th  
ese extre  
m  
es to ai  
d  
larg  
est an  
interpolation.  
d  
small  
est  
You may use symbols rounded to even amounts that approximate the data  
range rather than exact minimum and maximum symbol sizes in the point  
symbol legend. If the largest symbol on the map is too large to be repeated in  
the legend, consider labeling the amount next to that symbol \(and a few other  
very large symbols\) on the map and use a more manageably sized large symbol  
in the legend.  
If you use graduated rather than proportional point symbols, be sure to clarify  
that sizes do not represent precise data values. List data ranges for each  
symbol in the legend \(  
graduated symbol maps. **FIGURE 4.8.** Le  
g  
en  
d  
s for gra  
d  
uate  
d  
\(gra  
d  
uate  
d  
color maps\). Th  
ey  
d  
e  
e  
4.8 by P. Limpisathian, Penn State  
e  
G  
symbol maps are  
much lik  
e choropl  
e  
eth map l  
g  
en  
d  
ata rang  
e for each symbol size  
. Figures 4.7 an  
ography.  
s  
d  
d  
# Segmente  
# d  
# symbols  
Segmented symbols, such as pie charts and bar graphs, require custom legend  
design. Construct a generic looking symbol and label each segment. If the  
segmented symbols also vary in size, create a two-part legend that uses a  
di **FIGURE 4.9.** Le  
g  
en  
d  
s for multivariate symbols, such as se  
gm  
ente  
d bar symbols, walk th  
e  
rea  
d  
er through th  
e  
e  
m  
eaning of each symbol component. This l  
g  
en  
d  
explains bar h  
eights  
an  
d bar se  
gm  
ent colors in two steps. Data source\: Pennsylvania Departm  
ent of  
Environm  
ental Protection. Figure by A  
. Dennis an  
d  
P. Limpisathian, Penn State  
e  
G  
ography.  
# Basemap l  
# egen  
# d  
# s  
Basemap themes may be easy enough to understand that they need not be  
included in the legend, especially because they are not the main topic of the  
map but support overlaid information. When a subset of basemap symbols is  
included in a legend, it is useful to organize them in their own column or  
group. Figure 4.10 shows a legend for a variety of basemap layers grouped  
into one legend with subheadings to organize related classes. This additional  
structure \(compared to   
for overlaid content. **FIGURE 4.10.** Compoun  
e  
d l  
g  
en  
Transportation, boun  
d  
aries, an  
d  
d lan  
Figure by P. Limpisathian, Penn State  
for th  
e exampl  
e base  
map e  
d  
cover each have subh  
ea  
d  
e  
G  
ography.  
e  
l  
m  
ents from chapter 2.  
ings within th  
e  
e  
l  
g  
en  
.  
d  
Transportation and boundaries are shown as lines on a white background in  
the legend shown in   
appear on the map. The examples in   
light colors. A darker   
symbols only \(C\) allows readers to match the legend and map colors for the  
lines better than in A. This adjustment is especially important for small  
symbols that are a  
contrast. Similarly, administrative areas may also have speci  
the legend would then show boxes with both the boundary line and the   
that helps to interpret the map. A raster land-cover layer in the background uses some color associations that  
will be obvious, such as blue for water and green for forest. But a reader may  
need help with the connection between reds or another hue you choose for a  
developed land sequence. A legend is needed if you include a full variety of  
other land-cover types, such as wetland, grassland, shrubland, scrubland, and  
barren areas. The colors in the lower half of the   
default colors provided with US National Land Cover Data \(NLCD\). It’s good  
to check if there are symbol conventions for speci  
launching into a creative interpretation, particularly if your intended map  
readers may already be familiar with existing practices. **FIGURE 4.11.** Th  
e backgroun  
e  
d  
for l  
g  
en  
d  
symbols should  
approximate  
how th  
ey are seen  
on a map. White is th  
e wrong choice for th  
ese transportation lines since th  
e  
map  
backgroun  
is  
d  
d  
ark \(***A***\). Solutions inclu  
e  
e  
d  
l  
g  
en  
d  
symbols overlai  
d  
on part of th  
e  
map that  
is  
d  
ark \(***B***\) or an a  
e  
dd  
d d  
ark backgroun  
e  
d  
in a l  
g  
en  
d  
outsi  
d  
e th  
e  
map \(***C***\). Data sources\:  
State  
of Vermont, USGS. Figures by N. Ch  
erok, Penn State  
e  
G  
ography.  
# Customize  
# d l  
# egen  
# d  
# s  
When you customize a legend beyond the basic settings that can be made for  
legend properties, you will sever the link between the data and the legend.  
The legend then becomes a graphic that does not change in response to  
symbol changes on the map. There are four basic strategies for customizing  
legends in GIS\: Insert a legend, convert it to graphics, ungroup the graphics, and edit  
individual elements.  
Add drawn elements and additional text to an inserted legend.  
Convert map symbols to graphics and copy and paste examples from  
the map to build a legend.  
Construct the entire legend manually with text and drawing tools.  
With any of these strategies, you will need to manually update legend  
elements if you change the map. For example, if you change symbol colors and  
sizes, you will need to manually make corresponding changes in the legend  
graphics. If you change the data ranges represented by map colors or other  
symbols, you will need to manually edit the text information in the legend. To  
minimize the manual work required to ensure a match between map and  
legend symbols, legend customization should be done at the very end of the  
map design process.  
The example in   
when you convert it to graphics and ungroup the elements. Each block of  
color, each line symbol, and each label becomes an editable element. You can  
move these elements, change color and line characteristics, and edit the text to  
better suit the map. **FIGURE 4.12.** Exampl  
e choropl  
e  
eth map l  
by N. Ch  
erok, Penn State  
e  
G  
ography.  
g  
en  
d  
\(***l***  
***eft***\) converte  
d to graphics \(***right***\). Figure  
Customize legend titles and subheadings, class labels, and legend layout to best  
describe the meaning of the map symbols. Annotations added to a map legend  
\(  
breaks between colors, and symbol combinations on multivariate maps. If the  
underlying legend remains live; it will update if classes or colors are changed.  
The annotations, however, will need to be manually edited because they are  
not linked to the map data.  
# FIGURE 4.13.  
e  
dd  
d text, to th  
e  
l  
eft of th  
e  
e  
l  
g  
en  
in chapter 9. Two m  
e  
d  
ian breaks are note  
, an  
d  
d  
colors, explains class breaks for a map  
d black lines across th  
ese two breaks are  
a  
dd  
e  
as  
d  
drawings. Figure by N. Ch  
erok, Penn State  
e  
G  
ography.  
A **FIGURE 4.14.**  
9.  
A square  
e  
l  
g  
en  
A manually annotate  
e  
d l  
g  
en  
d  
for two  
e  
-variabl  
e  
l  
g  
en  
d  
s for a map in chapter  
d places high  
-  
high d  
ata classes at th  
e upper right \(***A***\) an  
a  
iamon  
d  
d  
d orientation places high  
-  
high at th  
e top \(***B***\). Figures by N. Ch  
erok, Penn State  
e  
G  
ography.  
Sometimes a map is too complex for a legend, or a screen size is too small for  
legend display. The map reader will rely on evocative symbolization for an  
overall understanding of the distribution and use queries to look up details for  
individual places on the map. Figure 4.15 shows a portion of the world  
ecophysiography map, centered on northern Afghanistan and the boundaries  
it shares with Tajikistan, Uzbekistan, and Turkmenistan. Separate data layers  
for bioclimate, landforms, lithology, and land cover were combined to create  
ecological facets \(EFs\). The EFs were then aggregated into 3,923 Ecological  
Land Unit \(ELU\) classes. Color and shading design represent landscape and  
ecology across the entire globe, but there are too many ELU classes for a  
legend, and the detail is not readily collapsed to fewer categories. Figure 4.16  
shows an example pop-up from a GIS query on one 250-meter raster cell in  
the image, showing the depth of content aggregated for this e  
of the landscape and ecology. **FIGURE 4.15.**  
A portion of world  
ecophysiography  
d  
ata centere  
d  
on north  
ern Afghanistan,  
create  
d  
at 1\:5M. Color an  
d  
sha  
ing  
d  
d  
esign for 3,639 Ecological Lan  
d  
Unit \(ELU\) cate  
gories  
creates an effective portrait of th  
e  
lan  
d  
scape not we  
ll summarize  
e  
d by a l  
g  
en  
d  
. Sources\:  
ArcGIS Living Atlas of th  
e World  
map service, World Ecophysiography Map; ma  
d  
e with  
Natural Earth. Data create  
d by Esri, USGS Climate an  
Lan  
d  
d  
Use Chang  
e Program, an  
d  
Group on Earth Observations \(GEO\). See Sayre an  
d  
oth  
ers, 2014, “  
A N  
ew Map of Global  
Ecological Lan  
d  
Units—  
An Ecophysiographic Strati  
erican  
Association of G  
e  
ograph  
ers \(AA  
G\). **FIGURE 4.16.** Pop-up information for one ELU for a pixe  
l in light green along th  
e north  
ern  
Afghanistan bord  
er in Sources\: ArcGIS Living Atlas of th  
e World  
map service,  
World Ecophysiography Map; ArcGIS Pro.  
# WISE WORDING  
When you begin creating a map using GIS, the wording of basic text elements  
is set at defaults. The legend may be labeled “Legend” and raw layer names will  
display as headings. Symbols will be labeled with attributes from data tables.  
These text elements are   
exploring the spatial distributions of your data. But when you get serious  
about map design, you will want to edit text elements to clearer phrasing and  
recognizable words. Your goal is to communicate the map content clearly using a hierarchy of  
detail. You also want to re  
text conveys clear associations with other map elements. This section asks you  
to bring a critical eye to the content and arrangement of your map title,  
subtitles, legend titles, and notes. It elaborates on the discussion of layout in  
chapter 1.  
# Hierarchy in text content  
In addition to the labels within the map body, you can add a variety of  
marginal text elements to a map. The map usually has a title and legend title.  
You may also add subtitles and notes to explain the data that is mapped or the  
purpose of the map to your reader.  
Marginal text on maps should be succinct with minimal punctuation. An  
example of hierarchy in map text follows\:  
# SHORT TITLE  
# LEGEND TITLE ELABORATES  
# NOTE COMPLETES DETAIL  
The short title is a straightforward statement of the overall map topic. More  
detailed information about the map content is stated in the legend title, and further explanation is o  
in   
element\: the note. **FIGURE 4.17.** Map se  
gm  
ent showing a hierarchy of text word  
ing. Th  
e  
map titl  
e \(not shown\)  
is “Population Distribution, 2010.” Data sourcs\: US Census Bureau, Natural Earth. Map  
upd  
ate  
d by P. Limpisathian, Penn State  
e  
G  
ography. Figure 4.17 has fairly straightforward content. But how do you handle  
wording for more complex concepts that can be mapped? It might seem  
straightforward to require that a map title list who, what, where, and when, and  
that both the numerator and the denominator of a mapped ratio be made  
clear. In reality, these details can produce an impenetrable title. Here is an  
accurate but poor title for the map shown in  e  
**FIGURE 4.18.** Exampl  
map layout with a hierarchy of text explaining th  
e topic. Data  
source\: US Census Bureau, Natural Earth. Map upd  
ate  
d by P. Limpisathian, Penn State  
e  
G  
ography.  
The potentially unwieldy list of who, what \(numerator and denominator\),  
where, and when is more e  
legend, and notes to help map readers understand the map.  
For individual maps, where and when can often be listed in a subtitle, one step  
down from the title in the hierarchy of text on the map. When you are  
preparing a series of maps, where and when are often covered in the  
introductory material for the group of maps. They need not be repeated in the  
title of each map. Figure 4.18 shows an update of a map from an atlas of  
population data published by the US Census Bureau. “United States” was not included in map titles because the whole series of related maps was clearly  
about the United States.  
What and who for a map can range from obvious to convoluted. The details of  
numerators and denominators of ratios may be di  
can be explained more fully in the legend title that augments a summary map  
title. Who can also be complex if, for example, a subset of a group or multiple  
groups in a population are being described.  
Notes from various places on the map are pulled together in   
show the level of content that belongs in the smallest text on the map. These  
details should not be in the map title or legend title. The title should be  
straightforward enough to invite the reader to be interested in your map.  
Other content notes in small text include publisher, author credit, projection  
information, explanation of map calculations, and tips for map reading. O  
your readers details in the   
map content with too many words.  
A focus of maps in this chapter is US census data. The language of identity is  
evolving, and aggregate terms for groups will change in acceptability and use.  
Check the choices you make in capitalization \(such as Black versus black\) and  
in wording such as Indigenous people, Aboriginal people, Native American,  
or American Indian; people of color, BIPOC, underrepresented, or minority;  
recognizing gendered terms \(Latino versus Latina\); avoiding outdated  
pejoratives; and similar issues before you compose map titles and data  
categories. APA Style guidelines are one of many sources that advise on  
choosing among identity terms. The categorizations used in formal federal  
questionnaires may not be preferred by groups for which you are making a  
map. **FIGURE 4.19.** Map notes in small text are  
gath  
ere  
d  
from th  
e Census 2010 map in th  
e  
previous   
. Data source\: US Census Bureau, Natural Earth. Map upd  
ate  
d by P.  
Limpisathian, Penn State  
e  
G  
ography.  
# Describing mappe  
# d  
# calculations  
Describing a calculation in a few words can be harder than you expect. You  
might end up suggesting a di  
pay close attention to the wording. The map shown in   
categorized into two groups\: Hispanic and Not Hispanic. The Census Bureau  
questionnaire asks people to identify their ethnicity under the umbrella  
category of Hispanic, Latino, or Spanish origin \(this question is separate from  
asking a person’s race\). The wording used for this map is shown in   
in yellow and graphed in   
**FIGURE 4.20.** Le  
g  
en  
d  
word  
ing, annotation, an  
d text hierarchy for a map of th  
e  
d  
istribution of th  
e young Hispanic population. Data sources\: US Census Bureau; ma  
d  
e with  
Natural Earth. Map by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 4.21.** Th  
e  
th  
e sum of th  
e  
green an  
map shown in   
e ratio of th  
e ye  
llow se  
ye  
d  
llow se  
gm  
ents of th  
e population in this bar graph.  
gm  
ent to  
**FIGURE 4.22.** Th  
e  
e ambiguous l  
g  
en  
d titl  
e “Percent Hispanic un  
d  
er ag  
e 18” could  
steer a  
map rea  
d  
er to  
d  
ifferent interpretations, shown h  
ere with  
explanatory graphics \(  
d  
e  
e colors use  
d  
\). Figures 4.21 an  
d  
4.22 upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 4.23.**  
An exten  
e  
d  
d  
note that d  
escribes th  
e  
d  
iversity calculation for an Esri ®  
service using US Census Bureau  
d  
ata. Data sources\: ArcGIS Living Atlas of th  
e World  
service, USA  
Diversity In  
d  
ex, US Census Bureau.  
map  
map  
The legend title chosen for the map is fairly wordy \(  
wonder why. Can the number of words be cut in half and still get the idea  
across? Some wording options follow with notes to alert you to potential  
misinterpretations. **CORRECT BUT WORDY**  
# AMBIGUOUS  
Instead of the intended meaning \(graph on left in   
option could suggest percent of total population \(graph on right in 4.22\) or  
percent of total under-18 population \(middle graph in 4.22\).  
# CONFUSING  
This option might mean percent of the total under-18 population who are  
Hispanic \(middle graph in   
# SHORTER BUT OK  
The last option should be interpreted accurately \(left graph in   
Simple graphs referred to \(  
potential meaning expressed by the four previous legend titles. You do not want to confuse your map reader with the text you provide, and you also do  
not want them to misinterpret your text because it is excessively brief.  
Be sure that your map text says what you mean to say. As you work on a map,  
ask others to describe the map to you to check that you have not gone o  
track in your wording. Do not describe the map to them; have them describe  
it to you.  
If you are having di  
wording, consider adding a note that explains the calculation. You may  
include the formula for the calculation in a note. Figure 4.23 contains an  
extended note for a diversity map, which is a maybe-too-long example of this  
strategy. Readers interested in the math behind a mapped distribution will  
gain more from the map if they are sure of what it presents. Readers who are  
less interested in the math can ignore the details because they are listed in a  
small note. These readers may even be well served by a less detailed unclassed  
legend \( **FIGURE 4.24.** Portion of th  
e  
e  
map in   
low-  
e  
high l  
g  
en  
d  
for  
unclasse  
d d  
ata an  
d retaining th  
e note  
on th  
e  
d  
iversity in  
d  
ex calculation. Data source\: USA  
Diversity In  
d  
ex map service by Esri, US Census Bureau.  
# Atten  
# d  
# ing to line  
**logic** After you have decided on your map wording, you attend to the nuances of  
line breaks and spacing between text elements. Breaks and spaces take over  
some of the roles of sentence structure and punctuation that are not fully used  
for map text. You learned about the importance of proximity for map  
interpretation in chapter 1. This issue is addressed in greater detail here.  
A legend from the top half of a larger map is shown in   
been revised with thoughtless breaks and spacing. Do you know what this  
title means? Something about “transportation and land,” “using Prince  
George’s County,” and “Maryland land use,” perhaps? Which symbols do  
“Institutional” and “Green Area” label?  
**FIGURE 4.25.** Text for a map of Prince  
an  
d  
compresse  
d  
spacing between e  
e  
l  
m  
e  
org  
e’s County, Marylan  
d  
, with poor line breaks  
G  
ents.  
The better example in   
breaks, a hierarchy of type sizes, and more spacing between elements. In the  
title, the two words in “Land Use” are now on the same line. “Maryland” has  
been pulled into the subtitle. The legend titles are separated from the subtitle,  
so you can tell they are clearly part of the legend. Additionally, a larger gap  
between the two columns of the legend clari  
to the area symbols on the left.  
Note that the legend in   
use legend titles and headings that describe legend content. After all, this map element is obviously a “Legend,” so that label is super  
A  
**FIGURE 4.26.** Spacing an  
d line breaks are use  
d to clarify content for th  
e Prince  
G  
County map \(Data source\: Marylan  
d  
State Highway  
ministration, Prince  
e  
G  
org  
e’s County. Figures upd  
ate  
d by P. Limpisathian, Penn State  
d  
e  
G  
ography.  
e  
org  
e’s  
A simple choropleth legend can also be done badly if line logic and spacing is  
not set with intention. This problem is common with legends set horizontally  
rather than vertically. Figure 4.27 shows the legend categories from the   
example in this chapter \(  
with care. The lightness sequence is also   
internet access. The two examples in   
understand. Numbers run together or are hard to link to the legend color they  
label. Adding spacing is crucial to make sense of these horizontal legends  
\(  
oriented pages or slides, but the number sequence up or down a vertical stack  
of boxes and labels is easier to understand \(  
The legend area of the census map in   
in   
and styles. The annotations on the left are particularly di The corresponding legend in the initial   
hierarchies to separate text elements and to clarify which parts of the legend  
they refer to. The legend title is larger than the other text, asking the reader to  
attend to its content before the details next to it. The annotations to the left of  
the legend are each separated by spaces and are closer to the portion of the  
legend to which they refer than to anything else. The white legend box is  
moved to the right so that the “Hispanics are young” phrase does not seem to  
refer to it. The legend in   
4.28.  
You should break lines to retain the logic of phrases within the text. You do  
not need to use the entire length of the available space before breaking to the  
next line.  
You should use spaces carefully as well. Keep lines in a text block closer to  
each other than to other text elements on the map. Likewise, put a text  
element closer to the element it labels than to anything else on the map. This  
is the same logic you learn for arranging elements in a layout in chapter 1 and  
for placing labels within the body of the map in chapter 7. You want to  
consider positioning for marginal text elements as carefully as you do for map  
labels. **FIGURE 4.27.** Spacing is especially important if choropl  
e  
eth map l  
g  
en  
d  
s are arrang  
e  
d  
horizontally\: poor rea  
d  
ability with tight spacing \(***A***\) compare  
d  
with better d  
esigns with  
larg  
e  
er gaps between l  
g  
en  
d  
colors an  
d to th  
e right of each class labe  
l \(***B***\).  
**FIGURE 4.28.** Le  
g  
en  
d text without careful spacing or hierarchy for th  
e  
map showing th  
e  
d  
istribution of Hispanic youth \(improve  
d  
in Data source\: US Census Bureau,  
Natural Earth. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
**REFINING MARGINAL ELEMENTS** Scale bars and direction indicators can be customized to   
visual hierarchy and give it a distinctive look. Be aggressive, but not excessive,  
in editing the appearance of these marginal elements.  
# Scal  
# e in  
# d  
# icators  
As discussed in chapter 3, map scale is communicated three ways\: as a graphic  
bar scale, a verbal scale, and a representative fraction \(absolute scale\). An  
example of each scale type is shown in   
remains most accurate in the dynamic environments in which we look at  
maps because it resizes as map size varies with zooming, screen resolution,  
and reproduction.  
Detailed scale bars are useful for maps that will be used for distance  
measurement. Only a general indication of distances is usually needed on  
thematic maps that present statistical data, so a simple scale bar is more  
suitable.  
**FIGURE 4.29.** Three forms of map scal  
e\: \(***from th***  
***e top***\) graphic scal  
e, verbal scal  
e, an  
representative fraction. Figures upd  
ate  
d by P. Limpisathian, Penn State  
e  
G  
ography  
d  
A set of scale bars with increasing visual prominence is shown in   
The   
are better suited to reference maps. The simple scale bars encourage  
approximate distance estimates \(for example, 10 or 20 km\), and they do not  
distract attention from the map message. A scale bar that is dark, wide, and  
detailed with many segments \(such as the bottom scale bar\) is too dominant for a simple thematic map that will not be used for detailed distance  
measurements.  
**FIGURE 4.30.** Exampl  
e scal  
e bar d  
esigns.  
A good scale bar presents rounded units that the map reader can easily use.  
Figure 4.31 shows a scale bar with poorly chosen units and one with more  
useful rounded units of 5 and 10 miles. Pay attention to the division ticks set  
along the scale bar, too. It is not helpful to produce a scale bar representing 10  
kilometers that has three subdivisions. Does your reader want to know the  
length that represents 3.33 and 6.67 kilometers?  
Be aware that on small-scale maps, such as a map of the world, scale varies  
across the map. A single scale bar will not be an accurate representation of  
scale for much of the map. With web Mercator cached mapping at multiple  
scale levels, a competent web service shows changes in scale bar lengths as  
scales become dramatically larger as latitude increases \(discussed in chapters 1  
and 3\). The nominal scale for generating a projection, which you set in your GIS interface, does not necessarily give you that scale for a particular portion  
of the map.  
Scale bars can also be converted to graphics and edited, though they will no  
longer update if the map scale is changed. An example custom scale bar  
combines metric and English units to accommodate an international audience  
\(  
have been  **FIGURE 4.31.**  
Always use roun  
e  
exampl  
. Figure upd  
ate  
d  
-number units for scal  
e bars, as shown in th  
e bottom  
d by P. Limpisathian, Penn State  
e  
G  
ography **FIGURE 4.32.** This e  
e  
l  
gant scal  
e  
e bar from a National Park Service \(NPS\) map shows mil  
an  
d kilom  
eter l  
engths back to back. Source\: Park Map, Yukon-Charl  
ey Rivers National  
Preserve, NPS.  
# Direction in  
# d  
# icators  
GIS software o  
north arrow style, there are few ways to customize it. You can set the north  
arrow size and adjust its background. If you want to do further customization,  
you may decide to draw an arrow from scratch. That small design e  
give you a distinctive element on your maps, acting much like a logo for your  
work. Figure 4.33 shows a custom north arrow used on National Park Service  
maps.  
# FIGURE 4.33.  
e  
An angl  
d  
north arrow an  
d  
scal  
e bar pair from th  
e corner of an NPS park  
map. Source\: Detail Map of G  
e  
org  
etown to Swains Lock  
- Ch  
esapeak  
e an  
d  
Ohio Canal  
National Historical Park, NPS.  
Many of the maps in this book do not include north arrows because they use  
the expected orientation of north up. Include a direction indication when a  
map is framed at an unusual angle. Figure 4.33 shows a corner of a detailed strip map where north leans to the right, representing a narrow string of  
parks along a river near Washington DC.  
A north arrow is rarely the most important feature on a map, so keep that in  
mind when designing this element. Do not let it get so large or elaborate that  
it draws attention away from the map content \(  
On small-scale maps, north may be in many directions. When lines of  
longitude converge within a map projection, a north arrow will always be  
wrong for some parts of the map \(  
**FIGURE 4.34.** North arrow  
d  
esign exampl  
es are availabl  
e in ArcGIS Pro that rang  
e from  
simpl  
e to ornate  
. Source\: Esri. Figure upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 4.35.** Do not put a north arrow on a map lik  
e this because north is many  
d  
ifferent d  
irections within th  
e  
map. Data source\: Natural Earth. Map upd  
ate  
d by N.  
Ch  
erok, Penn State  
e  
G  
ography.  
Do not use a north arrow when the direction of north varies across the map.  
For example, maps of the United States or Canada created using customary  
conic projections should not include a north arrow because longitude lines  
converge toward the pole. It is also   
places familiar to the intended audience. Many of the example maps in this  
book intentionally do not include north arrows.  
When north is multiple directions, replace the north arrow with the graticule  
to indicate direction. The graticule is a grid of lines of longitude and latitude  
and thus makes a   
graticule is supporting information, so it should be a subdued design element  
that does not compete with map content.  
# Overd  
# oing  
# d  
**ecoration** Many graphic elements and e  
components of a map layout\:  
Drop shadows  
Line styles for frames  
Background patterns or gradients  
Full compass roses  
Scale bars  
Extent indicators  
Colorful logos  
Decorative display fonts  
Geometric shapes  
An elaborate example map of Waterton-Glacier International Peace Park  
includes many decorative elements \(  
reader’s attention and distract from the main message of the map, which is  
about vegetation types. They also look fairly silly, are hard to read, and  
visually clash with each other. The scale bar is far longer than it needs to be,  
and it contains more detail than necessary. The title is set in a complicated  
cursive font with a drop shadow that reduces text legibility. The compass rose  
is too large and attempts a place of prominence with its busy design.  
The same map has been redesigned in   
stands out, and supporting information is pushed into the background where  
it belongs. **FIGURE 4.36.** Excessive  
Peace Park in Alberta an  
d  
ly  
d  
ecorate  
e  
e  
d  
l  
m  
ents of a map of Waterton-  
Glacier International  
Montana. Data source\: US G  
e  
ological Survey \(USGS\), National e  
G  
ospatial  
-Inte  
llig  
ence  
Ag  
ency \(NG  
A\), National A  
\(NASA\), NPS, Cana  
d  
a Centre for Mapping an  
Penn State  
e  
G  
ography.  
eronautics an  
d  
Space  
d  
ministration  
d Earth Observation. Map by E. Gui  
d  
ero,  
A **FIGURE 4.37.**  
source\: USGS, NG  
An improve  
d  
visual hierarchy for th  
e Peace Park map e  
A, NASA, NPS, Cana  
d  
a Centre for Mapping an  
e  
l  
m  
ents. Data  
d Earth Observation. Map by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
Any decorative element can be an e  
used purposefully. For example, a drop shadow may either attract attention  
away from the map itself, or it may e  
element to the foreground. Extent indicators that sweep across the page to  
connect an enlarged area to its location on a smaller-scale map may be vital  
for one map’s purpose, but they may confusingly obscure other data on a map  
with a di  
location on the smaller-scale map may be a better solution if the extent  
indicators will be too prominent in the map’s visual hierarchy.  
Enlargement of the New Hampshire portion of mapped coverage for mobile  
internet is boldly portrayed with bright blue-green zoom lines in   
The map is redesigned in   
enlargement. Small text explains the relationship between the two areas. **FIGURE 4.38.** Overly bold lines to th  
e inset map showing LTE coverag  
e in N  
ew  
Hampshire  
. Data sources\: FCC, Natural Earth. Map upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 4.39.** This map uses subtl  
er in  
\(upper portion of   
esigne  
d  
by N. Ch  
erok, Penn State  
e  
G  
ography.  
d  
icators of th  
e inset map location an  
d  
extent  
d  
\). Data sources\: FCC, Natural Earth. Map upd  
ate  
d  
A background may seem like the one element that should always be lowest in  
the visual hierarchy, a background in the true sense of the name. But consider  
a television sportscast with whirling,   
forming the background for the information on screen. Should we conclude  
that colorful and busy backgrounds are the modern way to design information  
displays? Well, think about how much information is on that display. Perhaps  
four   
that background activity to keep you looking at a screen that has a small  
amount of information on it. You should be con  
enough information to attract your reader. Color and detail should be used to  
make your mapped information stand out, rather than its background. Do not  
let your background become too high in the visual hierarchy of your map; it is  
de  
OceanofPDF.com **CHAPTER 5\: SHARING MAPS**  
ptions for getting your map out of a specialized GIS environment and  
# O  
onto people’s screens or desktops are ever increasing. The task  
requires you to plan for di  
than your GIS interface presents. Combinations of resolution and map size  
also a  
Image exports fall into two basic categories\: raster formats and vector formats.  
Vector formats can include raster layers, and some formats can handle  
transparency. These considerations also a  
beyond GIS. Your knowledge of these issues ensures your best map designs  
are not diminished in the last stages of dissemination.  
Many maps are intellectual property that are protected by copyright laws. Ask  
permission to use the content of others, or choose content that has explicit  
public licenses, such as those recommended by Creative Commons. Credit the  
sources of data, maps, and images used for your maps in published and online  
products. A map or dataset that is freely available is not necessarily free for  
use in a commercial product or on your own websites.  
The essentials of sharing and publishing well-designed maps follow\:  
Design for the   
which readers will use your maps.  
Choose raster or vector export formats that best present your work,  
with attention to label and transparency quality.  
List your sources for data and graphic elements on or with a map, even  
when they are in the public domain. Follow licensing restrictions for data and maps you use and list your  
copyright or public-use licenses clearly so others know how they may  
build from your work.  
# DESIGNING  
# FOR MAP MEDIA  
Choosing how to present a map is part of the design process. Maps are  
designed for multiple and varied contexts. Each context will be best served by  
di  
Full computer screen viewed at the reader’s desk  
Projected display presented to hundreds of people during a presentation  
Color laser prints distributed to a working group  
Black-and-white print for a report that concerned citizens will hand  
out as photocopies  
Coarse screen view shared during virtual meetings, seen by remote  
participants  
Plotted poster pinned up at a planning meeting for viewing from across  
the room  
Page in a glossy magazine or book that is professionally printed on an  
o  
Huge backdrop at a trade show  
Supporting information in a documentary television show  
Onscreen in a slippy story map  
Black-and-white fax to an emergency response team Very high resolution and small display on a mobile device  
Within an online interface for news or web-based dissemination  
Giant display projected on an architectural structures  
Each of these modes of display constrains how a map can be made and what it  
can contain while still being legible. Rather than complain about \(or worse,  
ignore\) these constraints, your job as the mapmaker is to use good design to  
master them.  
Many of us have attended a talk where the presenter declares that the  
projector is at fault for the illegibility of the maps. The error, however, was  
made by the presenter who borrowed a design suited for another context or  
by the map designer who did not account for the   
you need a map in a projected presentation, redesign it with bolder color  
di  
will hold up at coarse screen resolution, bleached by the projector and the  
room lights, and viewed from a distance. If that map is printed in a book, you  
can use   
placed on a website, design the map for a wide range of screen resolutions.  
You will also consider accessibility needs of readers.  
# Resolution  
Resolution measures the smallest marks we are able to create within a display.  
It varies widely among the media on which we display maps. A desktop  
computer screen may show us 96 pixels per inch \(ppi\), while a high-de  
\(HD\) TV with 1080 resolution can be about 33 ppi \(because HD televisions  
have a   
smartphones can display 400 ppi or more. A laser print may squeeze 600 dots  
of toner in an inch to build the image. A litho plate on an o reproduce 12,000 dpi from an image-set negative. Map features and labels  
need to be larger to build them with pixels on most screens than to reproduce  
them in ink on a press. A map designed for screen display will look clumsy in  
a magazine, and a map designed for print may be illegible on screen. There  
are no bad media, just maps that are not designed appropriately for their  
media. Your map designs change to accommodate each medium you are  
using.  
When maps are produced in print-friendly formats, their resolution is set in  
dots per inch, or dpi. This refers to the number of ink dots that will be placed  
in a single inch. The   
is the laser printer in your o  
house. The higher the dpi, the more ink dots the press or printer will place in  
a set area, making a crisper image. Obviously the dpi depends on the  
capability of the printing machine, but in general, it is best to set for-print dpi  
to at least 300.  
A high-resolution   
alarmingly large physical image dimensions, and the   
feet across when you were hoping to show it on letter-size paper. If you want  
to retain print resolutions, resize the   
lowering dpi\).  
For digital, on-screen display formats, however, resolution is set in ppi. The  

display device and its own supported resolution modes. Display resolution,  
image resolution, and image size are all linked together\:  
For an older computer display with a maximum supported resolution  
of 1024 × 768 pixels in a 14.2-by-10.6-inch viewing area, the resolution,  
also called pixel density, is 72 ppi both in the horizontal and vertical  
dimensions. A larger monitor that displays 1920 × 1080 pixels with a 20.1-by-11.3-  
inch viewing area has a similar resolution of about 95 ppi.  
A smaller tablet that displays 2048 × 1536 pixels with a 5.8-by-7.8-inch  
viewing area has a resolution of about 264 ppi. The higher pixel density  
on the tablet means that the pixels are physically smaller, and the device  
can show more of them in a single square unit of area. This results in  
images that appear crisper and more detailed.  
A smartphone that displays 3120 × 1440 pixels with a 6.8-by-3.1-inch  
screen has a resolution of about 500 ppi, approximating the detail on a  
high-resolution print.  
Pixel density also a  
at 72 ppi shown on the 1024 × 768 display would appear to be about 5 inches  
on a side as you look at the screen. That same image on the 1920 × 1080  
display would look about 3.5 inches per side because those 129,600 pixels   
into a smaller space, thus appearing smaller to the viewer. These changes in  
size change map scale. You have little control over the scale at which a reader  
will see your map on a computer screen or mobile display.  
When exporting images for web or on-screen viewing, ppi does not mean  
much until you need to export images for multiple display resolutions.  
Changing the ppi for a digital image really means that you are changing the  
image’s pixel dimensions. For example, if you are using a monitor with a 96  
ppi resolution, and you export your 360 × 360-pixel image at 96 ppi, the  
image’s   
may appear smaller on devices that have a higher display resolution or pixel  
density because those pixels can   
If you want your 360 × 360 image to appear at the same visible size, and equal  
sharpness on a phone with 384 ppi as it does on a computer with 96 ppi \(a four times greater pixel density\), you will increase the pixel dimensions of  
your image by four times, to 1440 × 1440 pixels. If you enlarge the image with  
its existing low ppi settings and pixel dimensions, it will appear pixelated  
\(  
appear at the maximum resolution of the display.  
Although they are not the same thing \(but roughly equivalent\), dots per inch  
and pixels per inch are often used interchangeably, and di  
packages will use di  
formats, raster and vector.  
# FIGURE 5.1.  
A sampl  
e se  
gm  
ent of a topographic map shown at 500  
dpi \(***l***  
***eft***\) an  
100  
d  
dpi  
\(***right***\).  
An inset enlarg  
e  
m  
ent of a 0 from th  
e 600 contour labe  
l is shown at th  
e upper right  
of each map se  
gm  
ent. Th  
ese enlarg  
e  
m  
ents allow each pixe  
l to be counte  
d  
\: th  
e zero is 45  
pixe  
ls across 0.09 inch  
es in th  
e  
high  
er-resolution imag  
e an  
d  
9 pixe  
ls across that sam  
e  
d  
istance at th  
e  
lower resolution. Source\: Sh  
etl  
ervill  
e qua  
drangl  
e, Illinois-Kentucky, US  
Departm  
ent of Agriculture \(USD  
A\) Forest Service DRG \(  
d  
igital raster graphic\).  
# Map size an  
# viewing  
# d  
# d  
**istance** Viewing distance a  
be enlarged to be visible from a distance. When they are enlarged, the  
resolution must be changed as well to avoid a jagged appearance. Letters 2  
inches high that are seen at a distance of 14 feet are approximately the same  
size as 10-point type seen at a reading distance of 1 foot. A line 2 points wide  
is practically invisible from across the room, so line widths also need to be  
increased to retain visibility. \(Points are a small unit of measurement used in  
graphic design; 1 inch contains 72 points.\) Similarly, color di  
be stark to make small features clear, whether they are small in measured  
dimensions or small because of the viewing distance.  
The maps in   
York. A redesigned enlargement of the   
rectangle in   
and small type that would be suitable for reproduction in print.  
Reducing the enlarged inset to a smaller size demonstrates how the labels  
become unreadable with coarse resolution. There are not enough pixels per  
inch to represent the small letter forms on this map at screen resolution, and  
lines have lost their detail and smoothness.  
The scru  
resampled at a coarse resolution\) and then enlarged back to its original size  
with no redesign \(  
represented. You can also see how much information is lost at the coarse  
resolution. **FIGURE 5.2.** Lan  
-use  
d  
map of Tompkins County, N  
ew York. Map ***B*** shows a re  
esigne  
d  
d  
enlarg  
e  
m  
ent of th  
e inset area \(blue  
outline\) from lan  
-use  
d  
map ***A***  
. Data source \(A\)\:  
Tompkins County Assessm  
ent Of  
d  
ero,  
Departm  
ent of G  
e  
ography, Th  
e Pennsylvania State University \(Penn State  
e  
G  
ography\). Data  
source \(***B***\)\: Tompkins County Assessm  
ent Of  
Gui  
d  
ero, Penn State  
e  
G  
ography.ç **FIGURE 5.3.** Poor rea  
d  
ability results wh  
en th  
e enlarg  
e  
viewe  
d  
at screen resolution.  
d  
inset is re  
uce  
d  
in size an  
d  
d  
**FIGURE 5.4.** Th  
e re  
mak  
es it unrea  
e  
d  
abl  
.  
uce  
d  
d  
map has been enlarg  
e  
d to  
e  
d  
monstrate th  
e pixe  
lation that  
Figure 5.5 is a redesigned version of the inset map made to display at this  
smaller size to accommodate the coarse resolution. Both lines and type have been enlarged, improving the legibility of a map this size \(compare to the  

type and shown at a   
awkward printed in a book to be read up close, but it would work well for a  
poster intended to be viewed at a distance.  
Both resolution of the media and viewing distance determine map design.  
These examples emphasize how type size and line width must change using a  
small part of a land-use map that is resized and redesigned.  
**FIGURE 5.5.** Th  
e  
d  
sam  
e scal  
e as   
esign has been improve  
d  
for th  
e small size  
. Th  
e inset is shown at th  
e **FIGURE 5.6.** This  
d  
esign is suitabl  
e for viewing at a  
d  
istance  
. Data source for   
5.6\: Tompkins County Assessm  
ent Of  
d  
ero,  
Penn State  
e  
G  
ography.  
# Color quality  
Thousands of colors can be produced in print and display environments.  
Printed pages do a good job of presenting color nuances. Maps created to be  
shown by projectors may require greater color contrast, especially when they  
include very light colors.  
The   
to test maps in the   
needs to be readable in widely di  
suited to these di  
photocopies or prints of a map you are designing in color, test it out on a  
copier of moderate quality before you   
presentation, test it with a variety of brightness settings on a projector and  
look at it from far away with the room lights on. Make time to iteratively adjust colors and recheck prints of a map before  
including it in a paper report to a client. If you are going to spend a lot of  
money printing a book using professional o  
in proo  
Looking at map colors on a color laser print is not an adequate check of how  
the o  
your important maps to chance. Testing how maps will look in their   
form will help prevent many design disappointments.  
The maps shown in   
of data. They show the change in the number of crimes for local police beats  
in part of town. Each map has a di  
constraints on color use. The   
to light to dark, through two hues \(  
emphasizes the highs and lows and provides details of change between the  
extremes. The two hues, blue and orange, represent decrease and increase  
respectively. The gray roads and white police beat outlines are base  
information that is readable but does not distract from the main message of  
change in crime. The readability of the white beat numbers relies on high-  
quality viewing or reproduction.  
The second version of the crime map is designed for presentation on a low-  
quality projector \(  
and di  
emphasize the highest increase and decrease in the area shown. This emphasis  
on extremes is supported with added text boxes that label the extremes. The  
beat outlines are also emphasized with a more intense color to ensure they are  
legible.  
If the presentation graphics needed to be printed or photocopied in black and  
white, the dark orange and blue used in  that were too similar to distinguish. The same map redesigned once more  
uses only lightness to di  
\(  
Design constraints for black-and-white media that are unable to reliably  
produce shades of gray are particularly restrictive. Photocopying and faxing  
often restrict the mapmaker to black, white, and one or two medium grays for  
reproduction. These are becoming less common media, but are still used for  
remote distribution, such as marine forecasts, and across the digital divide.  
**FIGURE 5.7.** This crim  
e  
map, which incorporates a  
e  
d  
etail  
d d  
ata classi  
e  
using many colors, is suite  
d to high  
-quality  
d  
isplay con  
d  
itions.  
e  
m **FIGURE 5.8.** Th  
e crim  
e  
map now has a simpl  
er classi  
type, which would be appropriate for lower-quality  
d  
isplay con  
d  
itions.  
d larg  
er **FIGURE 5.9.** This grayscal  
e version of th  
e crim  
e  
map is suitabl  
e for black  
-an  
d  
-white  
repro  
d  
uction. Data source for   
5.9\: Re  
d  
dlan  
d  
s, California, Police  
Departm  
ent. Maps upd  
ate  
d by P. Limpisathian, Penn State  
e  
G  
ography.  
# CHOOSING EXPORT OPTIONS  
Choosing appropriately among many export options lets people without GIS  
software view and manipulate your map   
see the maps you work hard to design.  
A map is sometimes only one part of a larger presentation. To use a map in an  
online, digital, or print publication, you   

two basic   
display media, print or digital \(on-screen\). A raster   
information across the map surface. It can be thought of as a picture of the  
original   
retain more detail but produce larger   
including text, are no longer grouped together as digital objects, but rather  
changed into collections of pixels. The   
individual pixels.  
A vector   
position in the   
are built from tiny curves connecting series of x,y locations with  
mathematical formulas. The degree to which map objects and text can be  
edited in a vector   
options. Some vector formats may include raster elements as objects within a  

There are trade-o  

before committing to it is an important step in producing a high-quality   
product.  
A simple map of Big Bend National Park \(  
ArcGIS Pro   
sizes \(which vary dramatically, from about 200 KB to over 10 MB\) are shown  
in  e  
**FIGURE 5.10.** To compare export formats, a simpl  
map of Big Ben  
d  
National Park \(MXD  

e\) with just   
line styl  
es, nine  
labe  
ls, one polygon, an  
d  
a terrain backgroun  
was  
d  
prepare  
d  
. Data source\: US G  
e  
ological Survey \(USGS\). Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
# Raster export formats  
Three common raster formats for exporting maps are JPEG, PNG, and TIFF.  
JPEG is commonly used for web publishing because it uses a compression  
algorithm to store a slightly generalized version of the map in a smaller   
which lets the image load and display faster. PNG is also commonly used for web publishing and uses a di  
artifacts \(shown later in the chapter\). TIFF produces pixel-by-pixel renditions  
of the map. TIFF is recommended if you need to export an image for print  
because the format is widely recognized by multiple operating systems and  
software packages. It contains the most pixel information possible, especially  
when uncompressed. PNG and TIFF support both kinds of transparency  
\(index and alpha\), whereas JPEG does not.  
**FIGURE 5.11.** Nam  
es, sizes, an  
d  

e types for an exampl  
e set of   
es exporte  
Ben  
d  
Park proj  
ect. Imag  
e by N. Ch  
erok, Penn State  
e  
G  
ography.  
d  
from th  
e Big Resolution options vary among formats. To export to most raster formats,  
height and width dimensions in pixels or a set resolution in either ppi or dpi  
are speci  
result in a coarse printed image because printers and presses can render a  
much higher dpi than a computer display. When the map of Big Bend  
National Park was exported to TIFF, the default choice \(96 dpi, 384 × 384  
pixels\) produced a   
KB\). An enlarged section of the low-resolution TIFF image is shown in   
5.12.  
Exporting the map again to TIFF but with a 400 dpi resolution \(1600 × 1600  
pixels\) produces a higher-quality image \(  
no longer jagged, and the lines are much smoother. The pixels making up this  
image are about 1/16 the area of pixels in the coarse-resolution version when  
they are examined at the same map scale, and there are many more of them.  
Smaller features can be recorded at higher resolutions. Higher image quality  
comes at a price. The high-resolution setting produces a much larger   
times larger than the coarse version. **FIGURE 5.12.**  
cl  
early see th  
e pixe  
A portion of th  
e exporte  
lation that th  
e  
Big Ben  
d  
d  
low resolution pro  
d  
National Park TIFF at 96  
uces.  
dpi. You can  
# FIGURE 5.13.  
TIFF \(400  
dpi\).  
A portion of th  
e Big Ben  
d  
National Park map exporte  
d  
as a high  
-resolution **FIGURE 5.14.**  
A portion of th  
e Big Ben  
d  
map exporte  
d  

e \(***A***\) to show hazy compression artifacts wh  
en enlarg  
e  
d  
to 5.14\: USGS. Maps by N. Ch  
erok, Penn State  
e  
G  
ography.  
as a m  
e  
ium  
d  
-quality 400-ppi JPEG  
\(***B***\). Data source for   
Other choices for   
sizes. The color-depth setting you choose a  
producing the largest exported   
numbers of distinct colors in an image because more digits are allotted for  
storing color information for each pixel in the   
you to choose compression type or level. For ease of use and highest-quality TIFF images, use the LZW \(Lempel-Ziv-  
Welch\) compression method. LZW is a lossless compression format, meaning  
that an LZW-compressed   
but is small enough that it can be readily shared. The TIFF example shown in  

image suitable for publication. Again, this quality came at the price of a large  

Even with compression, TIFF exports create images that are generally too  
large to be displayed on the web.  
JPEG formats use a sophisticated compression algorithm to make high-quality  
raster   
data is lost when a map is exported as a JPEG. If you lower the quality of the  
JPEG compression \(shown at the intended size in   
you will not want to enlarge the resulting image. If you do enlarge the image,  
you will see compression artifacts, or areas that look like a messy haze around  
higher-contrast elements \(a portion is enlarged in   
You can see the di  
maximum-quality and medium-quality exports. The map shown in   
was exported to a JPEG at 400 dpi and maximum quality \(Big Bend max-qual  
JPG, 1.9 MB\). The result is a high-quality image with a reasonable   
This size is larger than desirable for web display, but the quality is good  
enough that it could be used for some printed contexts. The map shown in  

med-qual JPG, 221 KB\). The savings in   
artifacts around lines and type produces a poorer-quality image. The   
would be   
quality is not good enough for a print publication. The PNG format does compress images, but uses a lossless algorithm, which  
eliminates compression artifacts. Figure 5.16 shows a PNG image.  
# FIGURE 5.15.  
ppi\).  
A portion of th  
e Big Ben  
d  
map exporte  
d  
as a high  
-quality JPEG   
e \(400 **FIGURE 5.16.**  
A portion of th  
e Big Ben  
d  
map exporte  
d  
as a PNG   
e \(400 ppi\). Data  
source for   
d  
5.16\: USGS. Maps by N. Ch  
erok, Penn State  
e  
G  
ography.  
All raster   
only pixels. In raster   
example, editing a label would require using graphics software to erase the  
existing pixels that form the characters and then overlaying new text. Lines  
and areas do not continue beneath the text and would need to be repaired as  
well. Changing the font or style of many map labels requires going back to the  
GIS software and re-exporting the map because there are no text objects on  
the raster map to select and change. To change a color in the map, you would  
need to   
and lines that overlay the area. This can be done, but it is much harder than  
selecting polygons in a vector image and making the color change once.  
These raster export formats should be used only for maps that you want to  
show or print as is. Their in want to pass on a version of your work that can be easily edited or adapted for  
other purposes.  
# Vector export formats  
A common vector format used to export maps from GIS is PDF. Vector   
are often, but not always, much smaller than the raster   
previous section. An elaborate   
work such as detailed contour lines, and numerous labels could easily produce  
a vector export much larger than a corresponding raster export. A crisp PDF  
export opened in Adobe Illustrator is shown in   
The PDF vector export \(  
Exporting to PDF results in complete text strings for straight labels and high-  
quality Bézier curves for lines \(splines\). But watch out for many possible  
problems that make a vector export di  
groups, and clipping paths may be generated in an export. The missing “E” in  

its baseline was too short. That problem is hard to notice on a big project  
with many labels.  
You want the process of editing text labels to be easy and not require tedious  
repairs or manual replacement of individual letters or words. The   
lines and small blue squares along the baseline of each label in   
show that PARK exported as a word, but Rio Grande exported letter-by-letter  
because it is curved. That means a search on the PDF won’t recognize that  
word. PARK can be selected as a single word, then edited or restyled and the  
path it follows can be manipulated. Curving labels is better done in the  
illustration environment if that’s where the   
Halos may export as individual polygons rather than letters \(  
They are positioned behind each letter, but any change in label font, size, or spelling will cause a mismatch between the labels and their halos in a vector  
export. **FIGURE 5.17.**  
A portion of th  
e Big Ben  
d  
map exporte  
as a PD  
d  
F   
e \(***A***\) with text se  
l  
ecte  
d  
\(***B***\) an  
d th  
e text move  
asi  
d  
e  
d  
e to see  
halos as polygons \(***C***\). Data source\: USGS. Map by N.  
Ch  
erok, Penn State  
G  
ography.  
If you plan to do much editing in illustration software, consider adjusting  
your GIS design to make it easier to work with. Set colors to slightly di  
mixtures so you can take advantage of select-same choices. For example, cyan  
lines that are 100, 99.5, and 99 percent cyan will look the same, but these small  
di  
could use Select-Same-Stroke Color to gather only those lines in the 99.5  
percent cyan category to change their width. It’s a hack that gets you past  
extensive layer and attribute detail missing or awkward in illustration work.  
Dashed lines may be better exported solid and then dashed in the illustration  
environment, so you don’t have many short bits laying around that aren’t  
connected as editable lines.  
Detailed symbol shapes and north arrows may be produced using special font  
characters in GIS. You might see a letter, like Q, instead of your north arrow  
on a map after export. Solve this by embedding fonts in the exported vector  

export.  
These sorts of problems are improved in GIS export implementations over  
time, but decisions on how much  how small the project is and your design skills in the two environments.  
ArcGIS Pro also o  
retains GIS structures, such as layer names and layer groups. GIS and graphics  
environments can be synced using the AIX format.  
# Transparency  
Transparency is a useful image property but can cause problems in your  
output if you do not pay attention to how it exports. If you choose to have  
transparency in any layer, you need to select an output format that can  
support it. PNG supports transparency and there are di  
bit depths and transparency types. PNG-8 can display 256 colors \(8-bit color\)  
and support index transparency, which means that map areas are either fully  
transparent or fully opaque. Figure 5.18 shows an opaque water body and see-  
through land \(the checkerboard is a common visual tip to transparency\). An  
8-bit image results in a fairly small   
overlays that themselves do not need to be transparent but have transparency  
wherever data is not present. For example, a layer showing urban footprints  
could be designed to have no content outside city extents.  
PNG-24 \(24-bit color\) can display 16 million colors, called true color but, like  
PNG-8, it supports index transparency only. PNG-32, which supports 24-bit  
color plus alpha transparency, allows for varying percentages of transparency,  
which is useful for data overlays through which the basemap content needs to  
be visible \(  
could not be included with index transparency. PNG-32 takes up the most   
space, closely followed by PNG-24, because it includes so much color and  
transparency data. You may want to avoid using either the 24- or 32-bit  
formats unless you absolutely need more than 256 colors or if you have  
complex transparencies or transparent gradients. **FIGURE 5.18.** PNG 8-bit color format supports in  
Limpisathian, Penn State  
e  
G  
ography.  
d  
ex transparency. Figure upd  
ate  
d by P.  
**FIGURE 5.19.** PNG 32-bit format supports alpha transparency, which allows for gra  
d  
ations  
of transparency between 0 percent \(opaque\) an  
d  
100 percent \(fully transparent\). In this  
map, th  
e  
lak  
e e  
g  
d  
e is 75 percent transparent. Figure upd  
ate  
d by P. Limpisathian, Penn State  
e  
G  
ography. **COPYRIGHT AND OPEN ACCESS**  
Maps, charts, and globes are all protected under copyright law. As a  
cartographer, you have copyright protection for the maps you produce, just as  
others hold the rights to their own original work. Violation of copyright  
protection can result in serious legal charges. Understanding copyright and  
licensing will allow you to proceed with con  
maps and data.  
Copyright is a set of laws that protect the exclusive rights of a creator to  
reproduce or publish original work. Anyone who produces something  
original, such as a map, has the right to say how that work may be reused.  
They can also exclude others from using the original work. It is the concept of  
original creative work that is critical to understanding what is under  
copyright protection.  
# Original work in cartography  
In cartography, the line can seem unclear for what is considered original and  
creative work. You can think of cartography as a blend of geographic facts and  
the creative expression of these facts through design. Copyright protection  
applies only to the expression of these facts, not the facts themselves. No one  
can own exclusive rights to the shape of a riverbank or location of a town, but  
the way these geographies are generalized and symbolized on a map does fall  
into the realm of creative expression and is under copyright protection.  
A map cannot be under copyright of the creator until that mapmaker puts an  
appreciable amount of creative work into the product. Someone making a  
map derived from various data sources should not claim the product as their  
own until they have put enough e  
colors, symbols, fonts, selection of data, and generalization. For example, if  
you trace the road network from a published map for direct use in your own work, you could be infringing on the rights of the original producer, who  
assumedly put an appreciable amount of work into the generalization and  
selection of that road data.  
Alternatively, you may be putting an appreciable amount of e  
designing a map as an employee of a company or person. Your map is likely a  
work for hire in that case, and the publisher owns the copyright rather than  
you as the mapmaker. As an aside to professors, university intellectual  
property rules often place copyright with the student for course projects.  
Treat students’ projects as copyrighted. Gain their written permission and  
credit authorship when you seek to use their great maps in publications.  
While creative products can be under copyright, the speci  
to create these works do not have copyright protection. A classi  
technique or smoothing algorithm is not under copyright, but the results of  
the technique, when applied creatively, may be copyrighted.  
# Rights an  
# d permissions  
Original work is assumed to be the copyright of the creator with all rights to  
reproduce or publish reserved to the creator of the work. There does not need  
to be a label saying this work is under copyright for copyright law to apply.  
To share the rights to reproduce or publish, the creator can enter into a  
licensing agreement with individuals, organizations, or the public.  
Licensing allows the creator to share some or all rights to the work with a  
licensee. In a license agreement, the creator maintains copyright of the  
original work, but the licensee is now allowed to use the work in some way.  
For example, a   
reproduction, often in exchange for a fee. Licensing agreements will typically  
include stipulations on permitted use, limitations, collaboration allowances,  
restrictions on users, and reserved rights. You or your company might use a signed permissions form to o  
your maps.  
To reduce the administrative work of obtaining copyright permission, most  
maps in this book are original works. For maps by others, I gained permission  
for use in the book with a corporate copyright permissions form. This is an  
important step in publishing a commercial product with example maps in it. I  
did not use basemap services in the background of the maps because those  
services have many data sources with licenses that are not open access.  
Cartographers often have additional graphic elements as part of a map  
product, such as a photograph of a distinctive habitat or a welcoming  
downtown. Do not neglect gaining copyright permission for these images.  
Photos are also creative works protected by copyright. Photographers  
sometimes use a common license if they want to share their work \(described  
in the next section\). You should not assume that a photo freely available on  
the web \(of which there are millions\) is also available for use in your  
commercial map product.  
Cartography   
documents. These may be small streets or extra locations that do not exist in  
the real world and that will not lead the map reader astray. Hooks allow the  
company to unambiguously identify a derivative product if they need to press  
a case of copyright infringement.  
Be careful that you do not misinterpret the concept of fair use to avoid  
copyright constraints. Fair use allows reproduction of a small part of a work  
for criticism, teaching, research, and other purposes \(see Section 107 of the  
Copyright Act\). Fair use court decisions are a  
commercial purpose, the proportion of the whole used, and how the use will  
a  
passages that are very small proportions of the whole work is considered fair. The ways fair use may apply to the graphic detail of a map are di  
interpret.  
# Public licenses an  
# d  
# open  
# d  
# ata  
Typically, public licensing agreements are more useful to a cartographer. As  
the name implies, these are licenses that transfer some or all rights to the  
general public. Organizations such as Creative Commons \(CC\) have  
developed categories and badges to help both creators and users of material  
manage copyright and licensing for the general public.  
Creative Commons has four common license features that are combined into  
unique licenses that can be applied to creative work. Figure 5.20 shows the  
symbols used to indicate each license feature. Licenses   
attribution, which requires users of the work to give the creator credit. A  
license may include NC, which lets users share, distribute, or modify creative  
work as long as it is not for a commercial purpose. Licenses may also include  
provisions for SA \(share alike\) meaning derivatives and distributions of the  
original must be shared under the same license as the original. ND \(no  
derivatives\) prohibits modi  
means you can share and change the work, as long as you credit the source,  
and you require derivatives to be under the same license as the original  
\(continuing as CC BY-SA\). Creative Commons provides detailed descriptions  
of each license at its website.  
One form of sharing work with the public is open data. Open data is based on  
the idea that data should be freely used and shared by anyone without  
restrictions of copyright. Open data is intended to be accessible and available  
with no cost, besides what is reasonable for reproduction. Users of open data  
have the right to reuse and redistribute the data, and no one is prevented from  
using the data. Ideally, open geospatial data is available for free download and is provided in a nonproprietary format, such as comma-separated values  
\(CSV\) for tables, TIFF for rasters, or shape  
agreements even for open data or free data often hinge on the user including a  
credit line. It is always best practice to acknowledge data sources for your  
maps.  
Creative works that are no longer under copyright protection have been  
released into the public domain. These works are free for anyone to use with  
no limitations and no legally required source credit \(though source  
information is informative, and giving credit is a courtesy you should show  
whenever possible\). All work and data produced by the US federal  
government and all work and data published on the Natural Earth website are  
in the public domain, which is useful to cartographers. The Creative  
Commons organization encourages the use of a “no rights reserved” CC0  
mark to clarify that a product is in the public domain \(the last category in  
**FIGURE 5.20.** Creative Commons license types. Content source\: Creative Commons.  
Because US federal government products are in the public domain, some  
mapmakers err in thinking all government data is public domain. The  
national map products of other countries may not be public domain. The  
maps and data of local governments in the United States are also not public  
domain by default, even if they are made freely available on the web. A town,  
city, county, state, or other local government agency may want their  
community to access spatial data and maps for decision making, but that does  
not mean they want it to be the content of another’s commercial map venture.  
Permission, permission, permission. The widespread availability of maps and data can sometimes make it  
dangerously easy to forget about ownership and violate copyright law. As a  
cartographer or GIS professional, being cautious and aware of copyright  
when using outside maps or data sources is important to avoid legal  
infringement on the rights of others. When publishing data or maps to the  
web, you automatically have copyright of creative original work, but the best  
practice is to make clear under what license you intend the work to be used or  
shared, if at all. Provide your contact information with your maps and data for  
those who seek permission to use them.  
OceanofPDF.com **CHAPTER 6**  
# TYPE BASICS  
# W  
ell-designed labels are a major component of the professional  
appearance and clarity of a map. Cartographers are as careful about  
how they choose type for map labels as they are about the symbols they design  
to present mapped information. Type characteristics categorize and order  
features as well as establish the personality and legibility of a map. In addition,  
type on maps usually needs to be modi  
contrast and readability against complex map backgrounds. Creating e  
maps relies, in part, on decisions about type.  
Most of the useful type characteristics found in design software can be created  
using GIS, allowing complete map designs to be achieved in the GIS  
environment. Fonts and styles, sizes and spacing, and text e  
edited within text elements. Mapmakers also need to consider type issues  
beyond their GIS environment. Type e  
success, and well-planned type can save time in map editing. Understanding  
font tools in the Windows operating system can assist in using type well.  
Mapmakers build better maps when they understand the following\:  
Fonts—including categories of fonts, fonts in the Windows operating  
system, type styles and font families, and creating special characters  
Label size—including character size, character spacing, and line spacing  
Type e **FONTS**  
Fonts are the personality of a map. They may be serious and authoritative or  
carefree and inviting. Whatever their tone, they need to be legible in the  
challenging contexts that are characteristic of mapping. They must be easily  
read at small sizes and odd angles in varied display media. They are often read  
among numerous other labels that are close together. In addition, map labels  
may include unfamiliar words that are indecipherable if they are not clearly  
legible.  
Before you can begin to shape the temperament of your map by choosing a  
font, you should understand the basic categories of fonts and how to use their  
special characters. You should also be familiar with the potential breadth of  
font families. This topic describes the basic tools and details that help you  
choose fonts for mapmaking.  
If you are curious to see what fonts are installed on your computer, look  
through the Fonts folder in the Windows directory in your operating system  
\(OS\) folder. It may be easier to look through the list in your word-processing  
or graphic-design programs or by using an online tool that examines your  
system \(for example, Flipping Typical\).  
# Font anatomy  
This chapter uses some font-speci  
Strokes are lines that make the shape of the letter. Typefaces can have either  
varying or constant stroke widths. The amount by which the strokes vary is  
called stroke contrast. For example, the “o” in “Foxtail” becomes narrower at the  
top and bottom, and then wider at the sides. It has high stroke contrast. In  
comparison, the “O” in “Orange” is almost the same width all the way around  
the letterform. Serifs are the small   
bottom of the letter and on the ends of straight parts of letters, labeled on the  
capital “F” in the   
Terminals are the ending strokes on letters that do not have serifs. Sans serif  
fonts often have curved terminals that resemble serifs on just a few letters to  
aid legibility, such as lowercase “t” and “l”.  
Baseline is the line on which letters sit. The   
letters \(such as capital “F”\) sit right on the baseline. Curved elements usually  
extend slightly below the baseline.  
Cap height is the height of capital letters without curved elements at their  
top or bottom \(for example, the height of capital “F”\). Curved elements, such  
as the top or bottom of the capital “O”, can extend beyond the cap height.  
Lowercase letters may also extend above the cap height.  
X-height is the size of the lowercase “x”, from the baseline to the top of the  
“x” \(where   
lowercase “o”, may extend above the x-height. Fonts with a large x-height  
relative to the cap height will appear larger when used with other fonts at the  
same point size.  
Descenders are the part of a letter that extends well below the baseline.  
Ascenders are the part of a letter that extends well above x-height.  
Counters are closed spaces inside letters, such as the hollow space inside the  
“o”.  
Bowl refers to the curved portion of a letter, describing the shape of the top  
part of the letter “e” or the bottom part of the letter “a”. Technically, a font is one size and style of a typeface, but the more general use  
of “font” here is consistent with how typefaces are selected in GIS and other  
applications.  
**FIGURE 6.1.** Th  
e basic parts of l  
ettering.  
# Categories of fonts  
Recognizing and naming individual fonts takes much practice and is a more  
detailed level of study than necessary for most mapmaking. Five basic  
categories of font appearance are useful as you learn map design\:  
Text  
Display  
Serif  
Sans serif  
Monospace  
Text fonts are suitable for small sizes and continuous reading. Most typefaces  
you use for map labels are text fonts. Text fonts include a range of styles, and both serif and sans serif typefaces can be considered text faces. Overall, they  
are simply constructed, easy to read, and do not have   
elements \(  
**FIGURE 6.2.** Calibri, Linux Libertine  
fonts that can be use  
d  
for map labe  
O, Source Sans Pro, an  
d  
Source Serif Pro are all text  
ling.  
In contrast to text fonts, display fonts have distinctive and decorative  
letterforms whose exaggerated design can be di  
limited use in map design. You may use them in a title or logo but avoid their  
use in the body of the map \(  
variations, or weights, which are display versions of the text font. For  
example, Franklin Gothic has a book weight but also a heavy weight \(  
6.4\). Franklin Gothic Book could be used for map labels, while Franklin  
Gothic Heavy could be used for titles. **FIGURE 6.3.** Impact, Gi  
dd  
use  
ju  
d  
d  
iciously.  
yup, an  
d  
Stencil are exampl  
es of  
d  
isplay fonts that should be  
**FIGURE 6.4.** Franklin Gothic Book, a text font, an  
Figures 6.1 to 6.4 by E. Gui  
d  
ero, Departm  
ent of G  
e  
University \(Penn State  
e  
G  
ography\).  
d Franklin Gothic Heavy, a  
d  
isplay font.  
ography, Th  
e Pennsylvania State  
Figure 6.5 shows a selection of serif fonts using example characters. Serifs, the  
small   
Compare the set of example characters above each font name to see how  
di  
bottom of the stroke that are thin, blunt, or angular—a few examples of this  
variety. Serifs often assist with legibility. **FIGURE 6.5.** Bask  
e  
ervill  
of serif fonts.  
Old Face, Century Schoolbook, an  
d Crimson Text are exampl  
es  
Serif fonts also include a subcategory known as slab serif fonts \(  
These fonts have blocky, slab-like serifs. Rockwell is a popular example.  
Although slab serif fonts do not often work well for small labels, they can be  
used for large labels and titles.  
**FIGURE 6.6.** Rockwe  
ll, a slab serif font.  
The next three examples are sans serif fonts—their letter forms lack serifs  
\(  
viewing cheat a bit by adding tails to letterforms, such as 1 and lowercase j  
and l. Technically, these are not serifs \(except on the 1\), but they do help with  
legibility. **FIGURE 6.7.** Fira Sans, TW Cen, an  
d  
Trebuch  
et MS are exampl  
es of sans serif fonts.  
Monospace fonts are not proportionally spaced like most fonts. Each  
character occupies the same width along the line, which produces a clumsy  
appearance in many design contexts \(  
for showing code snippets or aligned numbers in lists, but not for map  
labeling.  
**FIGURE 6.8.** Consolas an  
6.5 to 6.8 by E. Gui  
d  
d  
ero, Penn State  
De  
jaVu Sans Mono are exampl  
es of monospace fonts. Figures  
e  
G  
ography.  
# Font choice  
A single map will contain few fonts. Usually only two fonts are used, one serif  
and one sans serif. These two choices should complement each other. Choose two fonts with similar personalities, both informal or both formal in their  
manner, both modern or both classic. Fonts may be assertive, re  
welcoming, or casual. Choose a pair of fonts that give the right   
impression of the map’s purpose. Often, a serif font is used to label  
hydrographic and other physical features, and a sans serif font is used to label  
cultural features. Getting carried away with fonts by including too many or  
choosing fonts that clash is a quick way to make an amateur-looking map. Pay  
attention to some of the small details of typefaces—they a  
labels as well as the overall map style.  
Map type is often small, so mapmakers seek fonts with large x-heights, which  
are more legible. For example, at the same point size, Cambria has a larger x-  
height than Centaur \(  
of reading small letters when the map is seen at coarse resolutions on screen  
or when it is reproduced, and letters are seen against patterns of tiny dots  
used to print background colors.  
**FIGURE 6.9.** Th  
e purpl  
e box aroun  
d th  
e word  
“palouse” represents th  
e x-  
h  
eight of th  
e  
Cambria font an  
d  
is compare  
d  
with th  
e small  
er x-  
h  
eight of Centaur. Both  
exampl  
es are th  
e  
sam  
e point size  
.  
Consider stroke width as well. A font that has thicker strokes, or a lower  
stroke contrast \(less variation in width\), will remain legible after reproduction  
and against busy backgrounds. Thin strokes also cause problems with  
readability at coarse resolutions. The thin strokes in Centaur are   
the thin strokes of the same letters in Cambria. For example, the thinning of  
the lines at the top and bottom of the Centaur o are   
Cambria “o” \( Recall the discussions of designing for media in chapter 5. If you want map  
readers to use your map at the coarse resolution of desktop computers or  
television, for example, select a font that remains legible in that medium.  
Figure 6.10 shows four fonts with a challenging constraint\: small, italic, and  
angled. Each label includes the word “minimum” above its name as an  
example with little to separate and distinguish letters. Some of these examples  
are almost illegible; Garamond italic, in particular, does poorly. Others  
maintain legibility fairly well. Verdana letters remain more distinguishable at  
the same point size and angle as the others because they have been designed  
for on-screen use.  
**FIGURE 6.10.** Compare th  
e  
e  
l  
gibility of th  
e four fonts shown small, italic, an  
e  
d  
angl  
d  
. This  
is a chall  
enging but common situation for map labe  
ls.  
All  
exampl  
es were set at 12 points an  
d  
capture  
d  
at 72 pixe  
ls-per-inch resolution.  
A small amount of character spacing was also  
use  
d to ai  
d rea  
d  
ability. Figure upd  
ate  
d by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
Consider the state name “Illinois.” The capital “I” followed by two lowercase  
“l”s can be mistaken for each other, and when set close together, can be very  
hard to read \(  
be confused. This is an example of the importance of looking for letterforms  
with serifs or terminals that create di  
confused.  
**FIGURE 6.11.** Notice  
how  
d  
if  
d  
istinguish th  
e  
not in oth  
ers. Figure by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
d  
ifferent l  
etters in som  
e fonts but **Type styl**  
# es an  
# d  
# font families  
The regular, italic, bold, and bold italic members of a font family are separate  
fonts that are installed individually on your computer. When you select a font  
from a list inside word-processing or mapping software, and then click  
choices for bold and italic, you are usually choosing among four fonts, though  
only one name for the font displays in the font list. This is an important detail  
because a person working with a GIS map on another computer will need all  
four fonts installed if the map includes regular, bold, italic, and bold italic  
styles.  
In   
di  
di  
companion font designed to complement the regular version. Italicizing is not  
simply a matter of slanting the characters.  
**FIGURE 6.12.** Re  
gular an  
d  
italic forms of th  
e  
d  
obe  
Garamon  
d  
font.  
If you do not have the bold, italic, or bold italic versions installed, some  
software programs will, however, slant and/or thicken the roman characters,  
creating what is known as faux-bold or faux-italic \(  
di  
system does not have them available.  
A **FIGURE 6.13.** Italic, faux-italic, bold  
, an  
d  
faux-bold  
of th  
e  
d  
obe  
Garamon  
d  
font.  
Font families may also include many more weights than simply regular and  
bold. Figure 6.14 shows the full Alegreya Sans font family. Other, more  
extended font families include condensed versions, both sans and serif  
versions, and sometimes slab serif versions. Open Type Font Variation is a  
technology that expands on the concept of a font family. Variable fonts o  
almost endless axes for adjusting a single font in width, weight, x-height, cap  
height, serif height, ascender and descender lengths, and other characteristics.  
A  
# FIGURE 6.14.  
e  
Al  
e  
greya Sans is an exampl  
of a larg  
e font family \(OpenType\).  
You may be surprised by the way font names vary. Fonts that di  
appearance may have the same name, and fonts that look the same may have  
di  
companies seek to di  
work of multiple designers and other companies in their libraries. Some font  
names have acronyms appended to clarify that it is owned by a particular  
company \(such as MT for Monotype or MS for Microsoft\) or to designate an  
intended use \(such as UI for user interface\). Figure 6.15 shows three similar-looking fonts with the same name. Monotype  
Garamond was designed in 1922, and the other two were designed in 1989 and  
2005, respectively. Although the latter two look similar, each has small  
di  
two to appear to be from a di  
contrast between the thick and thin sections. Look closely to see that the serifs  
are shaped di  
may be individual small di  
feel of the map. If using one version of a font, such as Garamond, try not to  
include another version in the same map—it will look “o  
**FIGURE 6.15.** Three similar-  
looking fonts\: Monotype  
Garamon  
d  
Garamon  
d  
Pre  
mier Pro by A  
d  
obe  
. Figures 6.12 to 6.15 by E. Gui  
d  
e  
G  
ography.  
, A  
d  
obe  
Garamon  
ero, Penn State  
, an  
d  
d  
If you are using only Western characters \(Latin-based languages\), try to avoid  
typefaces designed for other character sets. For example, Microsoft Windows  
includes many typefaces with glyphs for non-Western languages, such as  
Japanese, Cyrillic, Cambodian, Urdu, Chinese, Thai, Hebrew, Hindi, Korean,  
and so forth. These typefaces include DokChampa, Batang, DaunPenh,  
Angsana, Browallia, Meiryo, DotumChe, Gautami, Iris, and Jasmine. These fonts are designed primarily for the non-Western glyphs, and the Western  
character sets included with them for convenience are not well designed and  
not recommended.  
# Special characters  
Maps often contain labels with special characters. An obvious example is the  
degree symbol \( ° \) and the characters representing minutes and seconds of a  
degree \( ´ and ˝ \). These are not the same characters as curly \(or smart\) single  
and double quotes \( ’ and ” \). Some place-names have accents on letters or  
other diacritical marks that you will need to include to produce a correct map.  
How do you produce these strange marks and characters? One way is to copy  
them from the character map included with the operating system and paste  
them into a text element in your map. Figure 6.16A shows the Calibri  
character map with the degree sign ready to be copied and pasted into a map.  
The character map is also a good choice for examining the many symbols  
available in specialized fonts that do not include letters and numbers. The  
Webdings font with varied icons is shown in  **FIGURE 6.16.** Th  
e Win  
d  
ows character map with specialize  
to copy\: a  
e  
d  
gree symbol se  
l  
ecte  
d  
in th  
e Calibri font \(***A***\) an  
Webd  
ings font \(***B***\). Figure upd  
ate  
d by N. Ch  
erok, Penn State  
d  
d  
characters se  
l  
ecte  
a weath  
er icon se  
e  
G  
ography.  
an  
d  
l  
ecte  
d rea  
y  
d  
d  
.in th  
e  
There are numerous sources for small and multiresolution icons to include in  
mapping projects. Useful search words for discovering these include maki,  
glyph, glyphicon, and pictogram. Esri fonts also provide numerous symbols  
for specialized map purposes. A forestry font is shown in  Remember to test whether the special characters you use will export to the  

special symbols will not display in the export, or they will crash other  
software. Or a special character may convert to a regular letter, a strange  
rectangle, or a question mark. You may be able to embed the font and  
characters in a   
**FIGURE 6.17.** Map symbols in a forestry font. Source\: Esri interface  
# Font formats an  
# d permissions  
. Fonts are technically miniature programs, installed within the operating  
system as a set of   
operating system and other software to display the fonts correctly.  
Remember, each letter in a font is a set of precise lines and curves. Font   
include these geometric speci  
apart the letters should be spaced when placed next to each other. The most  
common types of fonts used for graphic products are OpenType, TrueType,  
and PostScript. WOFF \(Web Open Font Format\), and EOT Lite \(Embedded  
OpenType Lite\). Variable fonts are used on web pages.  
Your computer probably has about one hundred typefaces pre-installed, and  
many applications install more fonts as the software is installed. These  
typefaces will probably be su  
further a  
are poorly designed and do not contain full character sets or enough  
additional styles \(such as bold and italic\) that you will need when you make  
maps. Be critical of the source of your fonts. Fonts are commercial products  
that vary in their quality of completeness and precision of the drawings of  
letterforms. Cheap fonts may be poor copies of the original   
characters. There are many free and open-source fonts, however, that are  
created by reputable designers. Websites that o  
Font Squirrel and FontShop.  
It may seem like fonts that were installed by default on a computer are free.  
Although they were included in the purchase price of the computer and  
various software packages, you should know that, unless explicitly noted,  
fonts are intellectual property that are licensed when purchased. To legally  
produce a map with a customized design, you may need to purchase a font. If  
you give font   
intended fonts, you may be breaking the license agreement you made when  
you or someone else purchased the font. When you open a map   
illustration software will often prompt you to substitute another font. Font  
substitution may disrupt the look and   
spacing of text lines, and other design aspects that were carefully set within  
the map based on characteristics of the original fonts. Rather than redistribute  
the font   
strategy is to use open-source typefaces that are distributed under the SIL  
Open Font License. This license allows the user to freely download, install,  
and redistribute the typefaces, even in commercial, for-pro  
Published or sold work may need to credit the font designer. Another option  
for preserving fonts is to choose an export option that can be set to embed  
fonts in the   
the speci  
may not have the administrative ability to install fonts on their work  
computer or mobile device, so this alternative is important.  
Nearly all the fonts shown in the   
that comes with Windows operating systems or free and open-source fonts  
that you can download and install.  
# LABEL SIZE  
Larger labels are used for more important map features. There are three  
general ways to change the size of a text element on a map\:  
Characters can be set smaller or larger.  
Space between letters can be added so that a text element is wider.  
Lines of text can be spaced so a text element is taller or more compact. Point size, character spacing, and leading are adjusted to accomplish these  
changes. This topic describes each of these characteristics.  
# Character size  
Type is measured in points. One point is 0.353 millimeter or 1/72 of an inch.  
Paragraphs in a book are typically set in 10- or 12-point type. The minuscule  
type in an ingredients list on a small food package might be only 4 points, and  
the large type for a wall map could be 72 points \(about 1 inch high\) \(  
6.18\).  
Di  
point size. In   
is indicated by the purple line, and you can see that the x-heights of  
Merriweather Sans and Bernard MT Condensed are larger. In addition,  
uppercase letters, heights of ascenders \(for example, the top part of d\), and  
lengths of descenders \(the bottom part of p\) vary in size among fonts. Notice  
that the Merriweather Sans font \(middle column\) has short descenders and  
wide letters, and that Bernard MT Condensed has a tall x-height and narrow  
letters. Setting a particular point size is actually an inexact measure because of  
its variation among fonts.  
**FIGURE 6.18.** Re  
upd  
ate  
d by E. Gui  
d  
lative point sizes\: 4, 12, 72 \(72-point type is approximate  
ero, Penn State  
e  
G  
ography.  
ly 1 inch\). Figure **FIGURE 6.19.** Three exampl  
e fonts all set to 16 point. From l  
eft, Gou  
d  
y Old  
Merriweath  
er Sans, an  
d  
Bernard  
MT Con  
ense  
d  
d  
. Figure upd  
ate  
d by E. Gui  
d  
e  
G  
ography.  
Styl  
e,  
ero, Penn State  
You will rarely be able to literally measure part of a 10-point letter and   
to be exactly 10 points high. The reason behind this variation harks back to  
the origins of type. The “10 point” size refers to the height of the small pieces  
of metal that carried the raised characters that were inked and pressed to  
paper. These metal blocks were necessarily larger than any of the individual  
characters in a font so they could accommodate their full range of shapes. The  
distance from the top of the ascenders to the bottom of the descenders will  
approximate the point size. This detailed knowledge is important for two  
reasons. You will need to experiment if you want to match a font size used in  
other text related to your map; you will only get an approximate size by  
measuring the letters. If you prepare a map design with one font and then  
change to another, it is likely that many of the labels will not   
you intended.  
It is often tempting to create very small type on maps so the labels   
to very small features. But be considerate of your reader and remember that  
some map users have a di  
on. If you size type below 6 points, you may be creating an unreadable map. In  
addition, you need to size type larger if the map will be read from a distance  
or displayed at coarse resolution.  
# Kerning, tracking, an  
# d  
**character spacing** Kerning is the space between two individual letters. Tracking refers to all the  
spaces among a group of characters. To spread a label across an area on a map,  
you modify the tracking \(often referred to as character or letter spacing\). GIS  
and design software allow you to set character spacing either in absolute  
points or as a percentage of the label point size. In ArcGIS, tracking units are  
expressed as a percentage of the point size of the text element. The example in  

spacing of the text is set to 200 percent, which means that another letter  
would   
for di  
experimentation to get the desired e  
It is common to increase tracking slightly for map labels to improve their  
legibility at small sizes. A small increase in tracking can also improve the  
appearance of curved type by making the letters less likely to tilt into one  
another, as shown in   
**FIGURE 6.20.** Text with 200-percent tracking.  
# FIGURE 6.21.  
Figures 6.20 an  
d  
just l  
etter spacing slightly so that characters are not crow  
d  
d  
6.21 upd  
ate  
d by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
e  
A  
d  
on curves. **Line spacing**  
Leading \(pronounced “led-ing”\) is the spacing between lines of type. The  
standard measure of leading is the distance between baselines, but it can also  
be speci  
spacing is increased. Large leading values are used to spread out a stacked  
areal label to express the extent of the region named. Leading is often  
combined with character spacing for this purpose.  
It is common in map design to use slightly less than the default leading to  
move lines closer together. For example, when multiple line labels appear in  
crowded areas of the map, tight leading can unambiguously link them to their  
point features \(  
For a paragraph with multiple lines, it is common for leading to be set at 120  
percent of the type size. Lines of 10-point type measure 12 points from  
baseline to baseline, leaving a 2-point gap between the bottom of the  
descenders and the tops of the ascenders. This gap will appear larger or  
smaller depending on the style of the font \(some descenders and ascenders are  
longer in some fonts than others\). ArcGIS treats leading di  
graphic design programs—the default measure of 120 percent leading is  
speci  
Although the leading number in ArcGIS is set in points, this number does not  
re  
increasing or decreasing spacing from the default. For example, if you set  
leading to 6 points, line spacing increases by 6 points from the default 120  
percent gap \(here, 2 points\), resulting in a total gap of 8 points \( **FIGURE 6.22.** This map pair shows labe  
tighter l  
ea  
d  
ing \(***B***\). Data sources\: US G  
e  
Bureau. Maps by E. Gui  
d  
ero, Penn State  
ls with re  
gular l  
ea  
ing \(***A***\) an  
d  
d th  
e sam  
e  
labe  
ological Survey \(USGS\), NHDPlus, US Census  
e  
G  
ography.  
ls with **FIGURE 6.23.** In ArcGIS, 10-point type \(enlarg  
e  
d  
\) with 0-point l  
ea  
d  
ing \(equival  
ent to 120  
percent l  
ea  
d  
ing\) creates a total of 12-point l  
ea  
d  
ing, l  
eaving a 2-point gap between lines \(th  
e  
d  
ot gri  
d has 1-point spacing\). Figures 6.23 an  
d  
6.24 upd  
ate  
d by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
**FIGURE 6.24.** Th  
e  
l  
ea  
d  
ing for th  
e Eug  
ene  
Airport labe  
l was increase  
d by 6 points. If you  
count using th  
e 1-point gri  
d  
, you can see that th  
ere is now an 8-point gap between th  
e  
bottom of th  
e  
escen  
d  
d  
er \(th  
e  
g in Eug  
ene\) an  
d th  
e top of th  
e uppercase  
l  
etter \(th  
e  
***A*** in  
Airport\).  
Leading is an approximate measure for the same reasons that di  
have di  
6.25 shows the same leading setting for Fira Sans, Adobe Text Pro, and  
Perpetua fonts. The baseline-to-baseline distance for Perpetua is indicated by  
an orange box. Notice that the leading is looser for the other two fonts, even  
though each is set at “zero leading” in ArcGIS.  
Because of these di  
in the map design process. You may have to painstakingly change all point  
size and leading values if you start with a narrowly leaded font \(like Perpetua\)  
but change to a widely leaded font \(like Fira Sans\). **FIGURE 6.25.** Note th  
e  
d  
ifferences in line spacing for th  
ese three fonts.  
to th  
e sam  
e point size with zero l  
ea  
d  
ing in ArcGIS.  
All three are set  
# TYPE EFFECTS  
In addition to the basic type characteristics of font, size, style, and spacing,  
there are a variety of e  
Callouts clarify the link between a location and its label, which is especially  
useful in densely labeled areas. Shadows and halos improve the contrast  
between text and nearby map features. Callouts, shadows, and halos do not  
change the form of characters in a text element. They are additions to the  
characters. Thoughtful use of type e  
design.  
# Callouts  
Callouts use graphic elements, such as leader lines, that explicitly link a text  
label to a point location. Use callouts sparingly. Reserve them for when you  
need to identify points in a densely labeled or otherwise inaccessible location  
on the map. Setting a callout for every label on a map produces visual clutter.  
A leader line can connect to any part of the label\: the beginning, the end, or  
the middle—whichever is closest to the feature \(  
use leader lines sparingly and to make them as short as possible. **FIGURE 6.26.** Lea  
d  
er line positions are  
Launch” labe  
l is move  
d  
manually aroun  
d  
ynamically se  
d th  
e feature  
.  
l  
ecte  
d by ArcGIS as th  
e “Boat  
A callout styled as a cartoon balloon is too dominant for most mapping  
contexts, though in journalistic mapping it can be appropriate to highlight a  
few locations discussed in a story. A   
underlying map information. GIS and graphics software provide a lot of  

**FIGURE 6.27.** Two  
exampl  
e callout stylings for a “Lak  
e Shore Park” labe  
l. Th  
e   
similar to a  
d  
efault balloon callout \(***l***  
***eft***\) an  
d th  
e secon  
d  
inclu  
es 18 e  
d  
d  
its to a composite  
callout \(***right***\), inclu  
d  
ing l  
ea  
d  
er line arrow an  
d d  
art a  
dd  
itions an  
a  
d  
d  
justm  
ents to th  
e  
callout’s   
ius, an  
d  
d  
sha  
d  
ow. Figures 6.25, 6.26, an  
d  
6.27 by N. Ch  
erok, Penn  
State  
e  
G  
ography.  
# Sha  
# d  
# ows  
Shadow e  
A shadow is simply a graphic copy of the shape of the characters, o  
rendered in a contrasting color to enhance text prominence. It is de  
the o  
page \(  
contrast with background colors and features. The shadow shown in  6.29 is o  
the text but are less distracting than shadows that are well o  
**FIGURE 6.28.** Emphasis has been a  
e  
dd  
d to text using a gray sha  
d  
ow with a signi  
point offset to th  
e right an  
d d  
own. Th  
e result is that th  
e text appears to be  
e  
d  
oubl  
.  
d  
**FIGURE 6.29.** This sha  
d  
ow with a half-point offset d  
own an  
d right will provi  
e  
d  
e subtl  
contrast against oth  
er map d  
etail. Th  
e result appears to be slightly   
e  
surface  
. On a crow  
e  
e  
d  
d  
map, this styl  
of sha  
owe  
d  
d text is more  
e  
l  
gibl  
e than th  
e effect in  
th  
e  
e previous exampl  
. Figures 6.28 an  
d  
6.29 upd  
ate  
d by P. Limpisathian, Penn State  
e  
G  
ography.  
Figure 6.30 demonstrates how shadows improve contrast between both light  
or dark type and a multicolored imagery background. Without a shadow, the  
white label is hard to read over light areas in the image, and the dark label is  
hard to read over dark areas.  
Use shadows sparingly in map design, and remember to check how a shadow  
looks in the   
properly if you will be moving your map out of the GIS environment. Vector  
export formats may omit, o  
chapter 5\). **FIGURE 6.30.** Labe  
ls are  
d  
if  
d  
against th  
e sate  
llite imag  
e backgroun  
\(***A***\).  
d  
Sha  
d  
ows be  
low white an  
d black text improve contrast against th  
e imag  
e \(***B***\). Data source\:  
NAIP. Maps by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
# Halos  
Halos function much like shadows. A halo can be used to decorate text or to  
subtly improve contrast with the background. The halo e  
letter casing by cartographers, and a stroke is used to outline letters in design  
software. In   
6.31B shows the halo color matched to the background color. The halos break  
lines where they are close to text so that text remains legible.  
Halos are best when they are subtle and relatively thin, especially when used  
for smaller text to create unobtrusive breaks, although occasionally a bolder halo may be useful. The text has a 0.5-point halo in   
because the background is so busy, it is di  
of background, a larger halo is needed, as shown in 6.32B. Notice that this size  
halo   
without masking too much of the area around the text. With a simpler  
background, as shown in 6.32C, a narrow halo is a better choice. The goal  
when selecting a halo size is to clean up small pieces of line or other content  
that show between letters while masking as little of the underlying map  
information as possible. **FIGURE 6.31.** Labe  
ls are  
d  
if  
d  
point type breaks th  
e  
lines an  
e  
d  
increases l  
Maps upd  
ate  
d by E. Gui  
d  
ero, Penn State  
G  
against roa  
d lines \(***A***\).  
A 1-point halo on th  
e 14-  
gibility \(***B***\). Data source\: US Census Bureau.  
e  
ography. **FIGURE 6.32.**  
A 0.5-point halo aroun  
d  
10-point type \(***A***\) should be enlarg  
e  
e  
l  
gibility against a busy backgroun  
d  
\(***B***\) but is suf  
er backgroun  
d  
Figures upd  
ate  
d by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
d to improve  
\(***C***\).  
In   
away from the road features \(A\). A thin .75-point halo was then applied to the  
labels to mask interfering road segments \(B\). The challenge is to choose a halo  
size that is an adequate compromise between improving legibility while not  
obscuring too much map data. For example, the halo here is not quite large  
enough to mask the road segment that appears between the “25th” and “Ave  
N” portions of the label at the upper left.  
Some of the halos, however, could be a bit thinner because lines are being  
nibbled near the bottom of letters. This problem could be improved by  
manual repositioning of labels or by adjusting their automatic placement  
speci  
small suggests that a suitable halo thickness has been achieved. If you were  
preparing this map for print, it would be important to check halo widths in a  
high-resolution print because small sizes are rarely rendered accurately on  
screen. **FIGURE 6.33.** Th  
e   
d roa  
d lines interfere with labe  
Thin halos pro  
d  
uce breaks in th  
e roa  
d lines for th  
e  
source\: USGS. Map by N. Ch  
erok, Penn State  
e  
G  
labe  
ography.  
ls use  
d  
in th  
e secon  
d  
l l  
etters \(***A***\).  
map \(***B***\). Data  
Map labels sometimes need to span many background colors, both dark and  
light. This varied contrast makes it di  
remains readable. As with shadows, halos that contrast with the text and  
background colors \(rather than matching the background\) can improve  
legibility. For example, type that is nearly the same color as the vegetation is almost invisible \(  
labels. Black or white halos draw attention with their bold contrast \(  
6.35\) and halos that are an approximate average of the background provide a  
calmer visual e  
beige, or medium-gray halos are useful choices over the color and texture  
variations in orthoimage and hillshade backgrounds.  
Halos are useful for mapping because they help ensure that text is legible on  
varied backgrounds. They also have drawbacks. They do not export well, they  
increase processing times, and they can produce excess visual noise around  
labels. Trying to create subtle halos that match the background can be a  
challenge if multiple background colors are used on a map. Use of contrasting  

overly reliant on this useful e  
symbol-layer masking are also alternatives, particularly when labels overlay  
multiple line and polygon symbols. **FIGURE 6.34.** Text that borrows its color from un  
sate  
llite imag  
ery of Glacier National Park.  
d  
erlying features is unrea  
d  
e  
abl  
on **FIGURE 6.35.** Halos that contrast with both th  
e text an  
d th  
e backgroun  
d  
improve  
e  
l  
gibility. Data source for   
erok, Penn State  
e  
G  
ography. **FIGURE 6.36.** Halos that are an approximate averag  
e  
l  
ess obtrusive  
mask that h  
e  
e  
lps l  
gibility.  
of th  
e backgroun  
OceanofPDF.com  
d  
colors provi  
d  
e a **CHAPTER 7**  
# LABELING MAPS  
# L  
abels are an inherent part of a map’s symbology. The technical challenge  
of making labels is complemented by the analytic role they play on a  
map. Thus, clear labeling helps your audience correctly interpret the mapped  
data.  
Clear labeling follows conventions of placement that vary for point, line, and  
area features. Although it is faster to set type and placement characteristics for  
groups of features all at once, there will be times when you need to edit  
individual labels to improve the clarity of the map. Cartographic conventions  
for placing labels often con  
with features. Making sensible trade-o  
often a matter of knowing how to follow a convention and knowing how to  
bend it. Knowing the rules lets you break them less often and more skillfully.  
A competent map designer makes better choices for label appearance and  
placement by understanding the following\:  
Map text, including di  
and annotation  
Labels as symbols, indicating feature location, category, and hierarchy,  
and using ambiguity and contradiction in classi  
Label placement conventions for point, line, and area features, as well  
as dense label placement and trade-o **MAP TEXT**  
Your decisions about handling text should be in  
will appear and the role that text plays in the map. You may be positioning  
individual text elements in static positions, generating labels for thousands of  
features at once, or creating feature-linked annotation. Your goal is to  
understand these three kinds of labeling and be able to use them together for  
e  
The descriptions in t his section use some ArcGIS terms \(such as frame,  
attribute table, and annotation\), but the principles yielding these three kinds  
of labels—graphic, dynamic, and annotation—are generally applicable in GIS  
use. In contrast, map labels created in illustration software behave mostly as  
graphic text. Map labels styled with online mapping tools behave mostly as  
dynamic labels.  
# Graphic map text  
When you want to add general information to a map, such as titles, subtitles,  
sources, or notes, you place them as graphic text elements in the layout \(  
7.1\). Graphic text is not associated with particular map features or map  
frames. They remain the same size and in the same position where you place  
them unless you drag them to a new location in the layout. **FIGURE 7.1.** Th  
e titl  
e, place  
re  
gardl  
ess of chang  
es to th  
e  
d  
e  
g  
as graphic text, will stay in a   
ographic extent shown in th  
e  
d position in th  
e  
map fram  
e  
.  
layout  
Technically, you can add graphic text to a layout to label map features, but this  
can be problematic. The labels may sit on top of the map frame, but they will  
not be associated with geographic locations. They will not move with changes  
to the map scale or the extent shown in the frame. Thus, the label may no  
longer be near its feature as the map layout is edited. Adding graphic feature  
labels to a layout may work if the scale and extent of the underlying data  
frame is   
straightforward for these kinds of labels.  
# Dynamic labe  
# ling  
Dynamic labeling allows you to automatically label multiple features in a  
layer, such as all roads in a road dataset that is represented on a map. If your GIS attribute table does not include a   
consider selecting a new dataset or adding a   
the tedious process of placing individual road names. It may take you longer  
to create labels as individual graphic text elements for each road than it would  
to enter them into a new   
When you use ArcGIS to create dynamic labeling, there are numerous  
settings that allow you to de  
away from some feature types, allow overlapping labels, control duplication,  
constrain placement conventions, set the scale at which labels are shown, and  
set type characteristics. For example, to label all streets using 10-point Segoe  
UI with 1-point halos, set those parameters in the dynamic label properties for  
the roads layer. This is much faster than selecting and setting the  
characteristics of each street label individually. The result will be a reasonably  
complete set of map labels that are automatically placed on the map.  
As you change the map scale or extent, the positions of map labels will  
dynamically change. At smaller scales, when there are many features to  
display, the software will label fewer features in a given area than at larger  
scales \(  
removed to make way for additional labels competing for map space. In a  
dynamic map-use environment, not every feature needs to be labeled because  
the user can interactively query feature properties using GIS tools.  
If   
are\), you can customize the position and characteristics of text beyond the  
settings available for dynamic labeling by converting labels to annotation in  
ArcGIS. **FIGURE 7.2.** Th  
e software  
e  
scal  
map. Som  
e streets  
d  
with th  
e  
GIS software  
.  
d  
ynamically se  
o not have  
labe  
l  
ects fewer representative  
labe  
ls in th  
e fram  
e but may be querie  
ls for th  
e small  
er  
d by interacting  
# Annotation  
Unlike dynamic labels, the position of annotation is   
and annotation can be manually repositioned to a preferred location.  
Annotation characters can be edited, either manually or, in the case of  
feature-linked annotation, by updating the corresponding   
attribute table. Feature-linked annotation will move if its feature is relocated  
or as the map view changes. Annotation cannot be moved outside of the data  
frame, so it is not a suitable format for titles and notes that belong in the area  
surrounding the map. Labeling maps is one of the most time-consuming aspects of cartography, so  
you will probably want to use all three kinds of labels discussed here. To  
e  
to create a complete set of labels in generally correct locations. After setting as  
many global characteristics as you can for entire categories of labels, convert  
them to annotation. Annotation can be edited, so you can now re  
placement and type characteristics for individual labels. Add graphic text only  
for marginal elements. This sequence saves time and produces a well-designed  
map by editing as few labels as possible. Figures 7.3 and 7.4 show road labels  
converted to annotation, selected, and moved or set bold to improve the map.  
**FIGURE 7.3.** Dynamic roa  
d labe  
ls converte  
d to annotation to improve th  
e  
labe  
ling. **FIGURE 7.4.** Se  
l  
ecte  
d pieces of annotation are repositione  
d to re  
move  
overlaps an  
d labe  
are customize  
d to  
e  
mphasize  
more  
of th  
e  
major roa  
d  
s near th  
e potential sites with bold  
type  
. Data sources for   
e  
ological Survey \(USGS\).  
Maps by E. Gui  
d  
ero, Departm  
ent of G  
e  
ography, Th  
e Pennsylvania State University \(Penn  
State  
e  
G  
ography\).  
Annotation is also useful for aligning labels with the approximate extent or  
linear character of physical features such as ridges and valleys. You may have  
names data associated with points \(  
help position area labels. Converting to annotation lets you arrange some of  
them along the larger features they label \(  
ls **FIGURE 7.5.** Dynamic labe  
features’ points are not in th  
e fram  
ls for physical area features at points. Many of th  
e e  
e  
.  
longate  
d **FIGURE 7.6.**  

oth  
ers, 2020.  
d  
Annotation e  
d  
ite  
7.6\: USGS, GNIS, an  
d to align with larg  
er ri  
g  
es an  
d  
d  
vall  
eys. Data source for  
d  
DEM  
d  
istribute  
using Zeno  
d  
d  
o by Kenne  
lly an  
d  
# LABELS AS SYMBOLS  
By categorizing feature labels, you help the reader   
and see patterns among them. Sensible groups containing fewer features are  
easier to look through than large collections of uniformly labeled names  
\(  
feature. Groups of features may be distinguished by di  
but varying the type used for feature labels emphasizes these di **FIGURE 7.7.** Th  
e  
lack of type  
d  
ifferences between cate  
gories of labe  
ls mak  
es this map hard  
to rea  
d  
. Numbers associate  
d  
with congressional d  
istricts \(green boun  
d  
aries\) are  
d  
if  

an  
d  
d  
interpret. Differences between lak  
e an  
d town labe  
ls are also  
d  
if  
especially wh  
en a town has a nam  
e  
lik  
e Sylvan Lak  
e \(***mi***  
# ddl  
***e right***\). See   
improve  
d  
version of this map.  
# In  
# d  
# icators of feature category  
Variations in the type style of feature labels can be used to categorize the  
features themselves. This approach organizes the themes on your map and  
makes it easy to understand. A reader will be able to   
quickly if type styles thoughtfully categorize feature types. For example, consider a map with 1,220 labels. If only twenty of those labels are river  
names, it will be easy for the reader to   
their attention to just those twenty labels using a distinctive font, style, or  
color to di  
numbers on the map in   
green. **FIGURE 7.8.** Th  
e sam  
e  
map shown in   
esigne  
d  
d  
with d  
ifferent type  
characteristics for cate  
gories of features. For exampl  
e,  
d  
ifferent hues are use  
d  
for  
congressional d  
istrict numbers \(green\) an  
d lak  
e  
labe  
ls \(blue\).  
An italic serif font is also use  
for th  
e  
lak  
e  
labe  
ls, which mak  
es th  
e  
m  
easier to search through because th  
ey are visually  
separate from th  
e town labe  
ls. Data source for   
d  
7.8\: NHDPlus, US Census  
Bureau, USGS. Maps by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
d  
A challenge in labeling is to not inadvertently impose a hierarchy for di  
kinds of features when you categorize their names by type style. The  
following list contains characteristics that you can use to categorize features,  
without suggesting a di Font  
Posture—roman \(regular\) versus italic  
Color hue  
Arrangement  
The two labels in   
font, and the cultural feature name below is set in a sans serif font.  
**FIGURE 7.9.** Different fonts are  
often use  
d to in  
d  
icate  
d  
ifferent cate  
gories of features.  
A professional-looking map generally relies on no more than two font  
families, so you should use fonts to distinguish only broad categories. It is  
common to use a sans serif font to label cultural features \(roads, towns, and  
points of interest\) and a serif font to label physical features \(mountains,  
valleys, and hydrography\). With only a couple of font families on the map,  
you rely on other type characteristics to establish additional feature categories.  
Roman \(regular\) and italic versions of the same font are shown in   
The creek label is italic and the street label is roman. Italic postures are harder  
to read than roman. They are designed to add emphasis to text by slowing the  
reader down. Use them to label categories with fewer or less important map  
features.  
**FIGURE 7.10.** Posture \(re  
gular an  
d  
italic\) in  
d  
icates  
d  
ifferent cate  
gories of features. Label hue can further accentuate category di  
type style di  
# FIGURE 7.11.  
Augm  
\(compare with   
e  
enting a styl  
d  
ifference by hue furth  
er d  
ifferentiates feature cate  
gories  
The arrangement of characters can also categorize features. Characters  
arranged to follow a line indicate a linear feature. The di  
arrangement between horizontal and curved labels in   
di  
not shown. The curve not only indicates location, but also categorizes its  
feature.  
**FIGURE 7.12.** Labe  
horizontal labe  
ls.  
ls that follow a curve in  
d  
icate a  
d  
ifferent cate  
gory of feature than  
Variation in hue is again used in   
categories already established by the arrangement of the characters. Type  
characteristics can be combined either to emphasize existing categories or to  
create subsets within a feature category. **FIGURE 7.13.**  
7.9 to 7.13 upd  
ate  
Augm  
ent arrang  
e  
d by E. Gui  
d  
m  
ent with hue to  
e  
mphasize feature cate  
ero, Penn State  
e  
G  
ography.  
gorization. Figures  
Case, leading, and character spacing may also be used to indicate categories of  
features. For example, uppercase letters may indicate an area feature, and  
lowercase letters may be used for a point feature. Spacing between lines and  
characters can allude to an area feature. These three characteristics do not  
provide as clear a categorization of features, though, because they can also  
suggest di  
# In  
# d  
# icators of feature hierarchy  
Within one category of features, there are often di  
you would like to highlight. For example, cities have varied populations and  
rivers have di  
hierarchical relationships.  
You learned about hierarchy in the   
When the notion is applied to type, it is also linked to map purpose. The  
more important, often larger, features should be more visually prominent.  
Pull them higher in the visual hierarchy. Likewise, push less important  
features into the background to place them lower in the visual hierarchy.  
Thoughtful type design can accomplish this.  
Hierarchy does not always follow feature size; it follows from your map  
purpose. A small feature, such as a tiny wetland, may be the most important  
feature on a map, and larger features, such as surrounding towns, may be background location information. In this situation, the wetland warrants the  
most prominent label.  
The characteristics of type that help you establish hierarchies of features are  
the following\:  
Point size  
Weight  
Scaling  
Color lightness  
Case  
Point size is the most obvious type characteristic that can establish hierarchy.  
Larger type indicates a feature more important than those labeled with  
smaller type. Because size is so strongly associated with the importance of a  
feature, you should not set a label to a larger point size simply to   
area. As an alternative, show large areal extents using character spacing  
instead \(see area label placement guidelines later in the chapter\). The three  
sizes of type shown in   
**FIGURE 7.14.** Differences in point size create a hierarchy of features.  
Using a bold weight for type is an obvious way to move a feature category  
higher in the visual hierarchy, making it stand out from labels that are the  
same size and font but that are not bold \( more weights \(such as light, medium, demi, bold, and black\) can give you  
even more ability to show relative feature hierarchy.  
**FIGURE 7.15.** Differences in labe  
l weight also create a hierarchy.  
Horizontal scaling can be used to indicate hierarchy. Although you should  
avoid arti  
fonts within a single font family are often available and can be used to  
distinguish the importance of features on a map. The two labels shown in  

Beebe Lake is condensed.  
# FIGURE 7.16.  
A con  
ense  
d  
d  
font can be use  
hierarchy. Figures 7.14, 7.15, an  
d  
7.16 upd  
ate  
d to in  
d  
icate a lower l  
eve  
d by E. Gui  
d  
ero, Penn State  
l in th  
e  
e  
G  
labe  
l  
ography.  
Altering the color lightness of type can be an e  
the background, or lower in the map’s visual hierarchy. To maintain the  
integrity of the characters when printed, light labels are often set as bold type.  
This is an example of a compromise that uses a type characteristic in a  
di  
important\).  
In   
larger feature, but it is lighter, which pushes it back in the visual hierarchy.  
The names of smaller towns are more important for this map’s purpose and  
remain forward in the visual hierarchy. In this case, the county category is established as a larger feature, but its visual importance is reduced with  
lightness.  
**FIGURE 7.17.** Lightness in  
d  
icates hierarchy by pushing labe  
ls to th  
e backgroun  
.  
d  
Case also suggests hierarchy. Uppercase letters \(capitals\) indicate a larger or  
more important feature than one labeled by lowercase letters. In   
the school name is all uppercase, and a building within the campus, a smaller  
feature that is lower in the visual hierarchy, is labeled using mostly lowercase  
letters.  
**FIGURE 7.18.** Uppercase  
labe  
ls are visually more important than lowercase  
labe  
ls.  
Size, weight, scaling, lightness, and case can be used to communicate  
di  
map’s purpose, not just feature size.  
# Ambiguity an  
# d  
# contra  
# d  
# iction in classification with type  
Case, leading, and character spacing can be used to establish category,  
hierarchy, or both on a map. Uppercase lettering is often used for area feature  
labels regardless of feature importance because it can be spread across an area  
more elegantly than lowercase lettering. Thus, a group of uppercase area labels may be shown at smaller sizes to contradict the implied increase in  
importance that their case suggests.  
Increasing character spacing and increasing leading pulls a label apart and  
diminishes its prominence in the visual hierarchy by making it less readable  
\(  
characteristics make the label larger overall.  
**FIGURE 7.19.** Character spacing ten  
d  
s to push a labe  
l back in th  
e  
hierarchy because it  
re  
G  
uces th  
e  
labe  
l’s rea  
d  
e  
d  
ability. Figures 7.17, 7.18, an  
d  
7.19 upd  
ate  
d by E. Gui  
d  
ero, Penn State  
ography.  
Character spacing is also used to imply the extent of a feature\: a spaced label  
helps show that a particular feature in a group is larger than others, though  
not more important. Spacing also depends on the shape of the area and on the  
length of the feature name. Spacing has a weak e  
these competing reasons for spacing lines and characters.  
Figures 7.20 through 7.25 demonstrate how multiple type characteristics of  
three labels \(two towns in Tompkins County\) can be combined in ways that  
challenge the simple relationships described previously.  
Size and lightness can be used to opposite e  
pushed both up, by its larger size, and down, by its lighter appearance, in the  
hierarchy \( **FIGURE 7.20.** Tompkins is larg  
er in size but lighter than th  
e two town labe  
th  
e sam  
e weight, however.  
ls.  
All labe  
ls are  
Figure 7.21 uses lightness and size in another way\: the background is a  
medium gray and labels are white and black, contrasting approximately  
equally with the background. This places them approximately equal in the  
visual hierarchy. Lightness shifts to a categorical rather than hierarchical  
distinction. Size has a strong in  
potentially pulling Tompkins up to greater importance than the previous  
example.  
# FIGURE 7.21.  
An alternative use  
of lightness for labe  
ls that d  
iffer in size  
.  
In   
label’s position in the hierarchy. **FIGURE 7.22.** In this exampl  
e, th  
e Tompkins labe  
l has increase  
it more  
d  
if  
an  
d  
d thus offsetting its larg  
er point size  
.  
d  
character spacing, making  
Figure 7.23 uses three type characteristics\: size, lightness, and weight. Size and  
weight pull Tompkins up, and lightness pushes it back down in the hierarchy.  
**FIGURE 7.23.** Labe  
ls  
d  
iffer in size, weight, an  
d lightness.  
Figure 7.24 uses four type characteristics\: size, lightness, weight, and  
character spacing. Size and weight pull Tompkins up, and lightness and  
spacing push back for a fairly balanced visual importance.  
**FIGURE 7.24.** Labe  
ls  
d  
iffer in size, weight, lightness, an  
d  
7.24 upd  
ate  
d by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
character spacing. Figures 7.20 to  
Size, case, weight, and lightness can be combined with character spacing and  
leading to separate features into groups and subtly imply di  
importance. When you reverse your color scheme—that is, when you use a dark  
background and light labels—keep in mind that lightness and contrast work  
the opposite way as well. Very light or white labels will stand out the most  
against a dark background, and thus will be higher in the visual hierarchy  
than dark labels, which will blend into the background. Compare the  
appearance of Dryden and Tompkins in   
not change lightness, but as the background is made darker in each successive  
image, the labels change places in the visual hierarchy. Whichever label has  
the greatest contrast with the background stands out as more important. **FIGURE 7.25.** Using a  
d  
ark backgroun  
contrast. Here, th  
e  
ls re  
main th  
e sam  
among light \(***A***\), m  
ium \(***B***\), an  
d requires thinking  
d  
ifferently about lightness an  
d  
labe  
e white an  
d black, whil  
e th  
e backgroun  
d  
varies  
e  
d  
d d  
ark \(***C***\) grays, causing a chang  
e in visual hierarchy.  
# Transparency an  
# d  
# anti-aliasing  
When making cached web maps, you need to consider the e  
aliasing on layers or labels that contain transparency and will be overlaid onto  
other layers. Because screens always render images and objects in pixels, any  
circle or diagonal line, including letters, will appear to have jagged or stair-  
step edges. Anti-aliasing is a method used by software and operating systems  
to lessen or eliminate the appearance of pixels by smoothing the edges of  
objects or letters. The anti-aliasing process works by estimating where the  
curve or line of the object edge would fall on the pixel, and then setting  
appropriate pixels to varying levels of transparency, which   
around the stair-step \(  
letters are thin, as nearly the entire letter is an “edge” that gets anti-aliased.  
# FIGURE 7.26.  
Anti-aliasing greatly smooths th  
e appearance  
of on-screen text. Thick  
er  
l  
etters are anti-aliase  
d  
only at th  
e e  
g  
d  
es. Figures 7.25 an  
d  
7.26 by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
Anti-aliased letters will appear di  
colors, which is especially important when making map layers that are  
intended to be labeled and overlaid onto other layers or backgrounds. Consider a data layer of polygons of urban areas that will be overlaid onto a  
plain white background. The polygons themselves are orange, and the “empty  
space” outside the urban areas will be made transparent so the map reader can  
see the urban polygons and underlying imagery or base data. If any of the  
urban area labels are placed outside the polygons in the transparent space,  
they will be anti-aliased di  
appears below the labels. This will make the labels inside the polygons look  
di  
how “Ho  
the “Strea” in “Streamwood” appears darker and thicker than the “mwood”  
portion.  
This e  
letter is anti-aliased, increasing the amount of transparency in pixels around  
the letters relative to object size. Increasing text size, bolding letters, or both,  
improves anti-aliased text because there is more “object” between edges that  
will not be anti-aliased \(  
# FIGURE 7.27.  
Anti-aliasing on small l  
etters can cause chang  
es in appearance wh  
en text  
spans  
d  
ifferent backgroun  
s.d **FIGURE 7.28.**  
it is bold  
e  
d  
, re  

d  
e  
G  
ography.  
Although this text is a point size small  
er than that in th  
e previous exampl  
e,  
d  
ucing th  
e  
d  
ifference in appearance across backgroun  
d  
s. Data sources for  
7.28\: US Census Bureau, USGS. Maps by E. Gui  
d  
ero, Penn State  
# LABEL PLACEMENT  
Sometimes you do not need re  
displays that have multiple query options. But when sloppy labeling impairs  
the e  
easier to associate with their features? Understanding the cartographic  
conventions for placing the labels of point, line, and area features will help  
you make wise choices when arranging all the text on your map. Labeling is a  
time-intensive aspect of cartography, so knowledge of labeling conventions  
will allow you to work more e  
# Point labe  
# l placement  
While we usually think labels are used to name locations, they also help your  
readers   
larger than the symbols, making the text easier to   
graphics. This is why mapmakers follow conventions for label placement. The  
relationship between a location and its label should be as predictable as  
possible so the map reader does not need to work hard to determine which  
label belongs to which feature. Text that labels a point location is best positioned next to that point,  
horizontally aligned, and with default character spacing. Cartographers  
sometimes choose to curve or rotate point labels to run parallel to curved  
lines of latitude across the map or to arc away from coastal locations into the  
adjacent water body. The more care you take in curving and rotating type, the  
longer it takes to make a map. Use horizontal alignment for point labels  
unless you are committed to a craftsman’s approach and have a production  
budget that can withstand the extra time that will take.  
For horizontal labels, there is a series of preferred positions relative to the  
point location. There is some variability in these sorts of recommendations,  
but the position to the right and shifted up from the point location is always  
rated the best. That   
beginning of the label \(  
right of the point \(1 to 4\) are each shifted up or down. In   
“good” examples show labels in two of these positions.  
**FIGURE 7.29.** Ord  
er of preferre  
d positions for point location labe  
ls. **FIGURE 7.30.** Shift labe  
ls up or d  
own re  
lative to th  
e point rath  
er than aligning th  
e  
m with  
it.  
The “poor” example in   
horizontal label directly to the right \(or left\) of a point location. The point  
symbol becomes incorporated into the shape of the word. The e  
exaggerated by using an open symbol that could be mistaken for a letter.  
Unless a word is completely unfamiliar, we use its shape to recognize it and read it. An aligned symbol becomes ambiguously part of the word and  
interferes with rapid recognition of it.  
How you align a multiline label with a feature location is guided by the need  
to use the label as a location indicator. A label to the left of its point, for  
example, is best set right justi  
**FIGURE 7.31.** Left, center, an  
next to  
each symbol.  
d right alignm  
ents for two  
-  
line  
labe  
ls positione  
d  
appropriate  
ly  
Another way to ensure that a label is easily recognized, and to aid visual  
search, is to rely on lowercase letters. They have more distinctive features  
than capitals do, helping us recognize words by shape, rather than reading  
them letter by letter. Figure 7.32 emphasizes this by showing just the top half  
of the same word. With only half the information available, you can probably  
read the lowercase label but, perhaps, not the uppercase version.  
**FIGURE 7.32.** Th  
e top half of th  
e word  
“Public.” Lowercase  
l  
etters have  
more variation in  
shape an  
d  
are, th  
erefore, easier to rea  
d  
. Figures 7.29 to 7.32 upd  
ate  
d by E. Gui  
d  
ero, Penn  
State  
e  
G  
ography.  
Using a lot of uppercase lettering on a map makes that map di  
Lowercase labels are also not as long as corresponding uppercase labels, so  
they  The recommended positions for point-label placement assume that there is no  
other information around the point. Because that is rarely the case, label  
placement becomes a process of making trade-o  
realities imposed by the geographic distribution of features. In   
two labels   
points they label. But this places Pittsford equally close to both symbols. A  
reader can   
but you do not want to make your reader work that hard. A general rule is to  
position the text closer to the point it labels than to any other point with  
which it could be mistakenly associated \(  
# FIGURE 7.33.  
Ambiguous association of labe  
l with point d  
espite preferre  
d positioning.  
**FIGURE 7.34.** Unambiguous association is more important than preferre  
point labe  
ls. Figures 7.33 an  
d  
7.34 upd  
ate  
d by E. Gui  
d  
ero, Penn State  
e  
G  
d positioning for  
ography. A set of dynamically positioned labels is shown in   
generally follow the hierarchy of preferred positions, though some are  
ambiguously located near more than one point, and many labels overlap with  
each other or other symbols. Barnerville and Bramanville are squeezed  
between two point symbols, and Central Bridge could label any one of three  
points. Dwelly Corners and Sloansville stack on top of each other to resemble  
a three-line single label.  
Positions are improved in   
preferred positions to accomplish this. Notice that Dwelly Corners was  
moved, and its text alignment was changed, to reduce ambiguity with  
Sloansville, and Mineral Springs was moved to eliminate overlap with  
Cobleskill.  
**FIGURE 7.35.** Labe  
ls place  
d  
automatically. **FIGURE 7.36.** Labe  
l positions improve  
d  
with custom  
an  
d  
7.36\: US Census Bureau, USGS. Maps by E. Gui  
d  
e  
d  
its. Data sources for   
ero, Penn State  
e  
G  
ography.  
Maintain a consistent distance between labels and their associated points  
throughout the map to keep the map neat and easy to read. This attention to  
detail is akin to kerning letter pairs. Because letters have di  
the corners of a label, the positions are re  
open these varied gaps. Choose a consistent size for the gap based on the size  
of symbols, the size of the label type, and the density of labels on the map.  
Make this decision while viewing the map at output size, not while it is  
enlarged on screen.  
The arrangement of other map features may also cause you to reject preferred  
positions for labels. The two “poor” examples in   
the preferred position, but a curved road interferes with the label. Breaking  
the road for the label removes key information about the shape of the road  
and its relationship to the town. A better solution is to move the label to a  
more open position that is still near the feature. Automated labeling  
accomplishes this by giving the roads a slight weighting to repel labels. Figure 7.38 shows the most open position for the label with added roads. The  
small road that interferes with the label is masked by slim halos to ensure that  
type is readable. A general rule for label placement is to break lines for labels.  
Where possible, position a label such that it breaks or masks a vertically  
trending line to minimize the loss of information.  
Ideally, a point label is positioned on the same side of a linear feature as its  
point. In   
opposite side of the river from the points they label. Figure 7.40 shows that  
Monroe moved left \(a less preferred position\) and Adams moved down and  
right. A line also needs to be broken to accommodate Monroe. Choosing  
positions is a process of balancing con **FIGURE 7.37.** Reposition labe  
ls to re  
d  
uce interference with nearby features. **FIGURE 7.38.** Breaking lines for labe  
by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
ls mak  
es a map more rea  
e  
d  
abl  
. Figures 7.37 an  
d  
7.38 **FIGURE 7.39.** Poorly positione  
location.  
d labe  
ls on th  
e  
opposite si  
d  
e  
of a line feature from th  
e point **FIGURE 7.40.** Labe  
ls are better positione  
d  
on th  
e sam  
e si  
e  
d  
of th  
e  
linear feature as th  
e  
point location. Monro  
e is place  
d  
so that it breaks th  
e  
most vertical part of th  
e  
line feature,  
minimizing th  
e amount of  
d  
ata mask  
e  
d  
. Data source for   
d  
7.40\: NHDPlus.  
Maps by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
When labeling point features near bodies of water, position labels for coastal  
and shoreline features wholly in the water. Do not allow labels to span both  
water and land. In   
positioned to the right of the points they label. But these coastal places are  
better labeled in the water to emphasize their coastal location. Pleasant Valley  
should not run from water to land. These problems are corrected in   
7.42. **FIGURE 7.41.** Place  
lan  
d  
-water boun  
d  
labe  
aries.  
ls for coastal features in th  
e water an  
d d  
o not allow labe  
ls to span **FIGURE 7.42.** Improve  
d labe  
an  
d  
7.42\: USGS. Maps by E. Gui  
d  
ling of coastal an  
d  
ero, Penn State  
inlan  
e  
features. Data source for   
G  
d  
ography.  
These examples demonstrate the most important guidelines for positioning  
point labels\: Position labels next to \(right or left\) and shifted up from the point  
feature.  
Maintain a consistent visual distance between labels and point symbols  
throughout the map.  
Break lines for labels, but minimize the frequency of breaks.  
Position labels on the same side of a linear feature as the point feature.  
Position labels for coastal features in water.  
Contain labels entirely on land or entirely in the water.  
The task of placing point labels is often a compromise among con  
guidelines. Placing labels so that they are unambiguous and easy to read  
should guide your decisions.  
# Line  
# labe  
# l placement  
Text that labels a line feature should follow along that line and be separated  
from it by a small gap. The text should not have noticeable character spacing,  
though a moderate increase in word spacing can be useful. If a linear feature is  
long, repeat the label rather than adding character spacing; do not try to  
stretch a label along the length of the line. Figure 7.43 demonstrates many  
errors in label placement. **FIGURE 7.43.** Poorly labe  
e  
l  
d linear features.  
**FIGURE 7.44.** Improve  
d place  
m  
an  
d  
7.44\: USGS. Maps by E. Gui  
d  
ent of linear feature  
ero, Penn State  
e  
G  
labe  
ography.  
Several placement problems make reading this map di  
ls. Data sources for   
Chula Creek and Pinehall Road ambiguously label both the river and  
road lines.  
South Fork Falmouth River ambiguously labels two di  
lines.  
Snow Creek, Chula Creek, Falmouth River, and Hawthorne River tip  
upside-down. Falmouth River is smaller than other labels of similar importance.  
Three Mile River does not follow the linear feature and does not need  
to be broken into three lines.  
Pinehall Road is too far above the line.  
Halibut Tributary and Hawthorne River follow curves in the line too  
closely.  
Halibut Tributary would   
Gypsum Creek would   
Hawthorne River is touching the line.  
Improvements have been made to the map \(  
Snow Creek is   
Three Mile River is positioned to follow the river.  
Halibut Tributary has been abbreviated, smoothed, and placed on top of  
the line feature for easier reading.  
Chula Creek has been   

Pinehall Road correctly labels just the road and is abbreviated to   
Pinehall Road and Hawthorne River are positioned with gaps between  
the label and line that are consistent with spacing used over the whole  
map.  
Hawthorne River is moved to a straighter segment of the line and   
a smoother curve. South Fork Falmouth River has been abbreviated, resized, changed to a  
three-line label, and placed next to the river. It is not positioned to  
follow the river because the name is too long to   
segments. This is a di  
Gypsum Creek has been placed below the line feature. Although not  
ideal, it helps prevent the descenders \(“y” and “p”\) from touching the  
line when placed the same distance away from the line as other labels.  
Label size and weight have been changed to create visual hierarchy from  
smaller creeks to larger rivers. GIS and graphics software can place text along  
user-speci  
curve or a more complex s-shaped curve. Rarely will you need three or more  
points to de  
smooth, simpli  
it. The curve should not cause markedly di  
characters. Multiple points will make a line that is cumbersome to edit and  
inappropriately complex. Nine-, three-, and two-point curves are illustrated  
in  **FIGURE 7.45.** Compl  
ex an  
d  
simpl  
e curves use  
d to labe  
l a line  
. e  
**FIGURE 7.46.** Exampl  
of overly compl  
ex spline  
spline  
d text with three points \(***bottom***\) showing points an  
d text with nine points \(***top***\) an  
d  
suitably  
d han  
dl  
es for a  
d  
justing curves. Data source for   
d  
7.46\: USGS. Maps by E. Gui  
d  
ero, Penn State  
G  
e  
ography.  
**FIGURE 7.47.** Simpl  
e curves are create  
\(purpl  
e squares\). Figure upd  
ate  
d by E. Gui  
d  
d by changing only th  
e positions of two han  
ero, Penn State  
e  
G  
ography.  
dl  
es  
You can edit the shape of a curve by repositioning the points themselves  
\(green squares, in the examples\) and by moving the handles \(purple squares\)  
attached to each point. Rotating the handles around the point, and changing  
their distance from it, will produce a variety of smooth curves. Experimenting  
by moving handles in all directions from their points is the best way to get  
used to altering the shape of the curve \(  
Positioning a label above a linear feature is preferable to positioning it below.  
Text   
on most labels. Also, a proper name with an initial capital letter will have a  
gap between the line and any lowercase letters without ascenders if placed  
below the line. As with other guidelines, there will be situations where you  
will not follow this advice to avoid overlapping other map features and labels.  
Regardless of the compromises you must make, avoid placing a label such that any portion of it reads upside down. Be especially aware of this when  
positioning vertically trending labels. Because of the shapes created by  
di  
space between labels and features will vary across the map. Your challenge is  
to create spacing between them that looks consistent overall.  
River names on the map in   
well positioned; some labels for major rivers are missing, others have  
awkward gaps or overlaps, or labels are ambiguously near more than one  
feature. Re  
of these issues.  
Some labels were repositioned manually in the next map \(  
were moved to smoother bends on the rivers and rotated where appropriate.  
Sacandaga River was added as splined text to show an example of a smooth  
curve   
aligned and running the same direction across a group of related linear  
features, but geographic reality often interferes with this goal.  
**FIGURE 7.48.** Line  
labe  
ls place  
d d  
ynamically. **FIGURE 7.49.** Manually repositione  
d line  
labe  
ls with improve  

d  
7.49\: NHDPlus, USGS. Maps by E. Gui  
d  
ero, Penn State  
d positions. Data sources for  
e  
G  
ography.  
Positioning line feature labels according to the following guidelines creates  
maps that are easier to read\:  
Position labels to follow portions of line features.  
Use default character spacing—do not spread characters along the line.  
Repeat labels for long line features.  
Put labels at the straightest and most horizontal portion of the feature.  
Break lines that interfere with labels, but minimize the frequency of  
breaks by choosing label positions carefully.  
Position labels above lines when practical.  
Do not allow any part of a label to tilt upside down.  
Use simple curves for labels to   
shapes. Maintain a small, consistent gap between labels and lines throughout  
the map.  
These guidelines emphasize narrow line features. Some linear features can be  
represented in a map design as wide enough that labels   
\(  
label. A river shown as a narrow area with two banks may be wide enough for  
a label running along its centerline. All of the linear placement guidelines  
apply to these designs except concerns about positioning above and below the  
lines.  
# Area labe  
# l placement  
Area feature labels indicate the extent of the feature by the way they are  
positioned. Area labels di  
include character spacing. You can stretch labels using character spacing  
where needed, but do not express extent by making the point size of the  
characters larger, which instead indicates the relative importance of the  
feature.  
Because most area features are not simple rectangles, the extent of these  
features can also be partly described using curved labels. If the shapes of these  
areas lend themselves to a series of simple and complementary curves, curved  
labels can be a pleasing addition to the design. But do not get carried away  
looping labels in so many directions across the map that it becomes  
indecipherable. Curved labels for areas are often more work than is  
worthwhile to create a pleasing but not distractingly busy set of labels.  
If area labels are overlaid on a busy background, one strategy is to use letter  
outlines with no   
content, and they o background. Figure 7.50 has some fun with a colorful hierarchy of outlined  
area labels for city and neighborhood names.  
**FIGURE 7.50.** Linear labe  
ls may be centere  
on wi  
e  
d  
d  
line symbols, an  
d hollow l  
etters are  
useful for backgroun  
d  
area labe  
ls. Data sources\: USGS, Milwauk  
ee County Lan  
d  
Information Of  
Map Quilt.  
Figures 7.51 and 7.52 show an area label that uses character spacing to spread  
across the feature. The   
vertical extent of the area. The second label is horizontal and spaced to  
suggest extent at the widest part of the area. This label is not as fancy, but it is  
a reasonable \(and less time-consuming\) solution. Figures 7.53 and 7.54 show the same area labeled less suitably. The   
is centered in the area and its length only partly suggests the extent of the  
region. The slight angle is not su  
sloppy. The second label is centered in the region without enough spread to  
suggest extent.  
**FIGURE 7.51.** Th  
e curve  
an  
d  
d  
character-space  
d labe  
l i  
d  
enti  
e extent of th  
e area. **FIGURE 7.52.** Horizontal character-space  
d text also mak  
es a suitabl  
e area labe  
l.  
**FIGURE 7.53.** Th  
e  
e slight angl  
labe  
l  
extent.  
on th  
e  
labe  
l looks lik  
e a mistak  
e rath  
er than an effort to **FIGURE 7.54.**  
A centere  
d  
stack  
e  
area. Figures 7.51 to 7.54 upd  
ate  
d labe  
l misses th  
e  
goal of in  
d by E. Gui  
d  
ero, Penn State  
G  
d  
icating th  
e extent of th  
e  
e  
ography.  
Character spacing is better suited to uppercase rather than lowercase lettering.  
Thus, area labels are the most likely text elements on a map to be all  
uppercase, with other labels taking advantage of the better legibility of  
lowercase lettering.  
Figure 7.55 was dynamically labeled. The labels are centered and are all the  
same size. Figure 7.56 uses character spacing to spread labels across larger  
areas. The character spacing was edited manually after converting the  
dynamic labels to annotation. Area labels were not curved in this example.  
In this map \(  
spaced and remain within their county polygons. Expressing areal extent  
while retaining consistent label styles is a trade-o  
the other is a subjective decision.  
Labels spread over areas with character spacing should have a margin at the  
beginning and end of the word approximately equal to the character spacing. Do not spread words so much that the   
boundary. Often some labels, like Doddridge, Webster, and Pleasants in this  
example, are longer than the area they label at the selected type size. Careful  
positioning prevents the labels from blocking characteristic parts of the area  
outlines. As always, break lines for labels unless lines are much lighter than  
the type.  
In   
having a series of area labels that align horizontally, suggesting a “sentence” of  
labels, as seen with the poorly placed labels in   
**FIGURE 7.55.** Dynamically place  
d  
area labe  
ls. **FIGURE 7.56.** Repositioning an  
labe  
ls.  
d  
increasing th  
e character spacing may improve area **FIGURE 7.57.** Horizontal alignm  
ents yie  
to 7.57\: US Census Bureau. Maps by E. Gui  
d  
ld poor area labe  
ero, Penn State  
ling. Data source for   
e  
G  
ography.  
Be aware that the letter “I” may look like a line segment if it is poorly  
positioned relative to area outlines. Serifs can help somewhat, but the best  
remedy is to shift the label so letters straddle lines and other features \(large  
labels may also straddle smaller labels\). This is particularly problematic with  
character-spaced area labels because letters may lose their relationship to each  
other. In   
“er” and the other starting with “E.”  
It is particularly di  
especially when only a portion of that area is shown. The letters of a  
conventionally character-spaced label are di area boundaries. One approach is to label along the boundary lines themselves  
\(  
customary to position labels for areas on each side of the line directly opposite  
from each other.  
**FIGURE 7.58.** Choose fonts an  
d labe  
l positions to avoi  
d  
ambiguous con  
labe  
ls an  
d  
features. In this case, th  
e  
l  
etter “I” becom  
es lost in a boun  
d  
ary line  
. Figure  
upd  
ate  
d by E. Gui  
d  
ero, Penn State  
e  
G  
ography. **FIGURE 7.59.** States are  
labe  
e  
l  
d  
along th  
e state boun  
d  
aries instea  
d  
of across state areas  
on th  
e  
map. This alternative is particularly useful wh  
en only portions of areas are shown.  
Data sources\: US Census Bureau, USGS. Map by E. Gui  
d  
ero, Penn State  
e  
G  
ography.  
The following guidelines help you create clearer maps when positioning area  
feature labels\:  
Suggest the extent of the area by the position of the label.  
Suggest extent using character spacing and line spacing \(leading\).  
Suggest extent with simply curved labels. Use uppercase letters when spacing characters.  
Do not adjust text point size to   
ones.  
Stagger horizontal alignments of separate labels.  
Adjust label position so gaps   
Ensure that individual characters are not mistaken for symbols  
\(especially sans serif I and o\).  
# Dense  
# labe  
# l placement an  
# d tra  
# d  
# e-  
# offs between rul  
# es  
Leader lines can assist in labeling crowded map areas. They improve clarity by  
allowing map labels to be placed further from their features while retaining an  
association with them. Use as few leader lines as possible; consider them a last  
resort in label placement. Do not put a leader on every label, as shown in  

The same map is labeled again with no leader lines, but the halos obscure  
multiple building features and a road intersection \(  
A third solution uses three leader lines and breaks roads and buildings with  
thinner halos only when necessary. It moves some labels inside their features,  
appropriately treating them as areas. This option o  
associations between labels and features without compromising the  
relationships between features \( **FIGURE 7.60.** Overre  
liance  
on l  
ea  
d  
er lines results in an overcomplicate  
d  
map.  
**FIGURE 7.61.** Overre  
features.  
liance  
on breaking lines for labe  
ls an  
d halos obscures important map **FIGURE 7.62.** Re  
esign of som  
e  
d  
labe  
ls an  
use  
of se  
d  
l  
ect l  
ea  
d  
er lines clari  
e  
map.  
Data sources for   
Gui  
d  
ero, Penn State  
e  
G  
ography.  
Figures 7.63 and 7.64 demonstrate how editing dynamically placed labels can  
improve a map. Parameters were set to position point labels above and to the  
right of point features, and to put line labels above the line features. Overlaps  
were allowed to ensure that the maximum number of labels was placed. Type  
characteristics were also set as parameters during dynamic labeling to further  
distinguish between roads and landmark buildings. A type size large enough  
to accommodate map readers with poor vision was used \(  
The dynamic labels were converted to annotation and repositioned to remove  
overlaps and clarify ambiguities. Adjustments were made, label by label, to  
improve associations between labels and features. The labels of three of the  
major streets were changed to bold type to improve feature classi  
\( The large type and small size of the map made   
onto this map a challenge. After experimenting with various positions, just a  
single leader line to the library was necessary to label all roads and landmarks,  
and to resolve overlaps \(  
remained in the preferred position—up and to the right—after all the  
constraints on label positioning were considered.  
Re  
sizes and styles, so set characteristics carefully as you begin the process of  
dynamic labeling. Custom editing is an important, yet time-consuming, part  
of the design process. Use leader lines sparingly to make key links only in the  
densest areas of a map. **FIGURE 7.63.** Dynamically place  
an  
d  
d  
symbolize  
d labe  
ls. **FIGURE 7.64.**  
Annotation labe  
ls were repositione  
d to clarify links to features.  
l  
ea  
d  
er line was use  
d  
for th  
e tightest space, associating th  
e public library labe  
e  
A singl  
l with its  
symbol. Data source for   
d  
7.64\: US Census Bureau, USGS. Maps by P.  
Limpisathian, Penn State  
e  
G  
ography.  
OceanofPDF.com **CHAPTER 8**  
# COLOR BASICS  
# M  
ost map designers who work with digital data create maps in color on  
their computer screens and other devices. But choosing from among  
the millions of colors that can be speci  
Choosing map colors goes beyond considering what colors might be related to  
the mapped topic, such as blue for bodies of water and brown for pollution  
data. Because people’s opinions about which colors they like and which colors  
best represent a topic often con  
to choosing map colors.  
GIS and graphics software o  
on maps, such as CMYK \(cyan, magenta, yellow, black\) and RGB \(red, green,  
blue\).  
You will probably choose only one color system for most of your work,  
because software can make conversions between them for you. Expert color  
communication, however, will require you to understand color speci  
in all the systems to produce the color characteristics suited to each mapping  
challenge. To do this, you will need to understand the utility of three-  
dimensional perceptual color space and specify colors with speci  
lightness, and chroma characteristics in CMYK and RGB systems.  
Map designers who produce quality maps know how to work with color on  
their computers and consider the following\:  
Perceptual dimensions of hue, lightness, and chroma Perceptual color systems and their relationship to color mixture cubes  
How to mix color to create map symbols using CMYK and RGB  
# PERCEPTUAL DIMENSIONS  
Maps mostly fall into two categories\: reference maps and thematic maps. On  
reference maps, color hue is used to symbolize di  
simple example is using blue and green to di  
Maps also show information that people do not see on the ground and that  
have no direct association with particular hues. When mapping this sort of  
thematic data, hue has an analytical purpose. You will rarely choose colors  
that are associated with land surface characteristics when designing a thematic  
map. For example, public land may be mapped in yellow and private land in  
brown. Areas of a state that lost population could be shown in orange, and  
areas that gained population in purple. The blue/green, yellow/brown, and  
orange/purple examples seem to simply be pairs of “colors,” so why use this  
extra word “hue?”  
When using color as a symbol, each color is a combination of three perceptual  
dimensions\: hue, lightness, and chroma. Hue is the most familiar and,  
therefore, most easily understood dimension. Lightness is the most important  
dimension for representing quantitative data. Chroma has the most subtle use  
in map symbology, but uncontrolled chroma di  
e  
lightness, and chroma dimensions. By mixing red-green-blue or cyan-  
magenta-yellow primaries, you can produce and adjust colors to have the  
perceptual attributes you want to see on your maps. The overall goal is to  
envision the map colors you want and then be able to create them with any of  
the color mixing tools o  
CMYK. **Hue**  
Hue is the perceptual dimension of color that we associate with color names,  
such as red and yellow. Dominant wavelength is a similar measure used in  
physics. The rainbow, or spectrum, places high chroma hues in wavelength  
order from long-wavelength reds to short-wavelength blues\: red, orange,  
yellow, green, blue \(  
rainbow. They result from mixing red and blue light from opposite ends of  
the spectrum.  
White sunlight contains a full range of visible wavelengths, but our television  
and computer screens get by with a reduced set of primaries—red, green, and  
blue \(RGB\) light—which are mixed to form all the other hues. Cyan,  
magenta, and yellow \(CMY\) pigments are used to mix colors for printing and  
painting. Mixing lights is called additive mixture \(RGB are the additive  
primaries\), and mixing pigments is called subtractive mixture \(CMY are the  
subtractive primaries\) \(  
**FIGURE 8.1.** Set of 10 hues shown in spectral ord  
er plus re  
d  
-blue  
mixtures.  
**FIGURE 8.2.** Re  
computer screens.  
d  
, green, an  
d blue are th  
e primary hues use  
d to mix colors with light on **FIGURE 8.3.** Cyan, mag  
enta, an  
ye  
d  
llow are th  
e primary hues use  
d to mix colors with ink.  
The hue circle in   
RGB and CMY. Notice that magenta lies between red and blue—the ends of  
the spectrum.  
You may be thinking, “But I learned that red, yellow, and blue were the  
primary colors when I mixed paints as a kid.” Please set aside your classroom  
red-yellow-blue approach to color. It may confuse you in this modern era of  
on-screen displays and color laser printing.  
The red-yellow-blue \(RYB\) color set, however, is akin to the perceptual  
concept of unique hues. The unique hues that do not look like mixtures of  
other hues are red, green, yellow, and blue. You may   
toward these unique hues \(RGYB\) as you develop color-codings because they  
are clearly di  
opponent hues on which our eye-brain color vision system is based \(  
8.5\). In addition to red, green, yellow, and blue, the other basic colors named  
in all fully developed languages are pink, purple, orange, brown, gray, white,  
and black. **FIGURE 8.4.**  
A hue circl  
e showing RGB an  
d CMY primaries in spectral ord  
er.  
**FIGURE 8.5.** This hue circl  
e shows unique  
hues in opponent positions across th  
e color  
circl  
e from  
each oth  
er\: re  
d  
across from green an  
ye  
d  
llow across from blue  
. Notice that this  
e  
hue circl  
d  
iffers from th  
e previous exampl  
e built from primaries \(  
ere is no  
singl  
e correct hue circl  
e, but each shows hues in spectral ord  
er. You may notice that the more unfamiliar color names mentioned, magenta  
and cyan, are not in the list of common color names. You have probably  
encountered both of these hues when working with color desktop printers  
and color photocopiers or if you have communicated with publishers.  
Magenta is a pinkish-red hue \(a red with no yellow\), and cyan is greenish-  
blue \(a blue with no red\). The purer these primaries, the more varied the hues  
that can be mixed with CMY.  
The hues shown previously in the hue circles vary in lightness. Figure 8.6  
shows the e  
**FIGURE 8.6.** Five  
hues shown at th  
e sam  
e  
lightness.  
Four light hues are shown on the map \(  
tracts. Hues are used on this map in the simplest way to distinguish one area  
from another. The hues are not used as symbols. That is, they do not indicate  
characteristics of the tracts, such as number of people or di  
spoken at home.  
For   
the same color do not share a boundary. Only four hues are needed to solve  
this type of map coloring problem \(called the four color theorem in  
mathematics\), but this strategy has limited application in cartography because  
color is not being used to represent attributes of the areas.  
A second map of census tracts \(  
most common non-English languages spoken in the area around Ithaca, New York. For example, Spanish/Creole is purple, Chinese and other Asian  
languages are blues, and two greens are used for the related German and West  
Germanic language categories. There are eight languages total on the map, so  
this is not a “four-color” problem. Each group needs to be represented by a  
distinct hue, and many of these hues   
Di  
used di  
in the  **FIGURE 8.7.** Four hues are use  
d to  
d  
ifferentiate census tracts in central N  
ew York State  
Map create  
d  
at 1\:1,100,000. Data source\: US Census Bureau. Map by P. Limpisathian,  
Departm  
ent of G  
e  
ography, Th  
e Pennsylvania State University \(Penn State  
e  
G  
ography\).  
. **FIGURE 8.8.** Eight colors with   
d  
istinct hues are use  
d to i  
d  
entify th  
e  
majority non-  
English languag  
es spok  
en in each tract in central N  
e  
ew York State \(l  
g  
en  
d  
is in chapter 4\).  
Map create  
d  
at 1\:1,100,000 from Census 2010  
d  
ata. Data source\: US Census Bureau. Map  
by P. Limpisathian, Penn State  
e  
G  
ography.  
# Lightness  
Variation in lightness is frequently used to represent a ranking within  
mapped data. Light colors are usually associated with low data values and dark  
colors with high data values. For example, shallow water may be represented by light blue and deep water by dark blue. Areas of high crime may be  
represented by dark red and low crime by light red.  
Changing lightness only, while maintaining a constant hue, is shown in   
8.9\. Areas with high percentages of population are represented by dark purple  
which grades to light purple for low percentages. Compared with the map in  

because the scheme has not been augmented with variations in hue.  
The map in   
lightness change \(light to dark\), but it is the lightness change that most clearly  
communicates the low-to-high sequence in the data. **FIGURE 8.9.** On this map of Am  
lightness carries th  
e  
main m  
essag  
e  
erican In  
.  
d  
ian population within th  
e Ch  
erok  
ee  
Nation, **FIGURE 8.10.** Th  
e percentag  
e  
of one-person house  
hold  
s within th  
e Ch  
erok  
ee  
Nation is  
shown by lightness an  
d  
a hue chang  
e from ye  
llow to green. Data source for   
8.10\: US Census Bureau, US G  
e  
ological Survey \(USGS\). Maps by N. Ch  
erok, Penn State  
e  
G  
ography.  
d Lightness is a relative measure \(  
appears to re  
the scene. Its relative character makes it a di  
terms like brightness, luminance, and intensity. Another word for lightness is  
“value,” but that term becomes confusing in quantitative work if you are also  
describing data values.  
All of the colors in the lightness sequence in   
hue. Notice that brown, at the end of the sequence, is actually just a dark and  
low chroma orange. This   
most conceptually di  
**FIGURE 8.11.** Four blues that vary in lightness from light to  
d  
ark. **FIGURE 8.12.**  
A series of seven colors of m  
lightness. Th  
ese colors are also th  
e sam  
e  
hue  
e  
d  
ium chroma that chang  
es gra  
d  
ually in  
.  
# Chroma  
Chroma is a measure of the vividness of a color, and there are a host of terms  
related to chroma with slightly varied de  
colorfulness, and purity. Intensity is a related but confusing term because it is  
used to describe both lightness and chroma. Some of these terms are from perception and the scienti  
physics of light. Still others, like shades, tints, and tones, are from the  
language of art. A tint mixes white into a color, a tone mixes in gray, and a  
shade mixes in black. As chroma is reduced for any hue, it becomes more  
neutral \(grayish or pale\). Achromatic colors, such as white, gray, and black,  
have no chroma and no hue.  
Only a few noticeably di  
chroma \(and not hue or lightness\) of a symbol \(  
change with lightness change improves contrast \(  
as the primary di  
show elevation data with chroma steps \(yellows\) and with lightness steps  
\(grays\). Notice how poorly the landforms are presented by varying chroma  
alone.  
# FIGURE 8.13.  
A set of  
d  
ark purpl  
es ranging from near gray to more vivi  
d purpl  
e that  
e  
d  
monstrates a chroma rang  
e whil  
e retaining th  
e sam  
e  
hue an  
sam  
e  
d  
lightness.  
# FIGURE 8.14.  
A set of colors with constant cyan hue an  
from light gray through low chromas to saturate  
cyan.  
d  
d d  
ecreasing lightness, ranging **FIGURE 8.15.** High  
-chroma ye  
llows represent high  
er e  
l  
evations, an  
d  
grayish colors  
represent th  
e  
lowest e  
l  
evations in th  
e Horn of Africa re  
gion. Th  
ese colors have constant  
hue an  
e  
d lightness. Chroma alone is not an effective symbol variabl  
. **FIGURE 8.16.**  
A series of grays from light to  
d  
ark represent th  
e rang  
e  
Horn of Africa. Lightness alone represents th  
ese e  
l  
evation rang  
es we  

8.16\: USGS.  
d  
of e  
l  
evations for th  
e  
ll. Data source for  
You can use chroma changes to reinforce a lightness sequence to help  
distinguish map symbols. For example, you may choose colors that range  
from light and grayish to dark and vivid colors. This strategy is similar to  
using hue changes to augment a lightness sequence, as seen in the yellow-  
green map showing household percentages in   
used with variations in hue and lightness to add emphasis to categories with  
small map polygons.  
Notice the opposite relationship between lightness and chroma in   
and 8.18. Both have good contrast through their single-hue sequences, and  
they would be useful in mapmaking because the perceptual dimensions are  
used systematically. **FIGURE 8.17.**  
A series of four colors with th  
e sam  
e  
hue,  
d  
ecreasing in lightness an  
d  
increasing in chroma  
d  
ownward  
. Th  
ey rang  
e from light low-chroma re  
d to  
d  
ark high  
-  
chroma re  
.  
d  
# FIGURE 8.18.  
A series of four colors with both lightness an  
d  
chroma  
d  
ecreasing  
d  
ownward  
. This set rang  
es from light high  
-chroma re  
d to  
d  
ark low-chroma re  
.d Chroma is the hardest of the three color dimensions to use in map design.  
Even if you do not use it explicitly, ignoring chroma can produce a confusing  
map. Individual colors that are accidentally more vivid than others will stand  
out strongly from other symbols for no apparent reason \(  
lapses will put inappropriate emphasis on map categories that are not more  
important than others. Be particularly careful about choosing colors for large  
map areas; large areas of high-chroma colors will dominate the look of the  
map.  
**FIGURE 8.19.** Two sets of   
hues, all with th  
e sam  
e  
lightness. Th  
e   
e  
sam  
e chroma \(***A***\). In th  
e secon  
d  
set, ye  
llow has a high  
er chroma than th  
e  
oth  
er hues \(***B***\). If  
th  
ese colors were use  
d  
on a map, th  
e  
d  
ata represente  
d  
with ye  
llow should be  
highlighte  
d  
for a reason. It should be eith  
er an important cate  
gory or a tiny area that would  
oth  
erwise  
be  
lost.  
Colors on the parcel map in   
chroma levels. The magenta and cyan are higher chroma than other colors.  
They are also darker than other colors. But consider the map—the highest  
chroma colors are used for single small areas. The map works because chroma  
makes these small features visible. **FIGURE 8.20.** Parce  
in vivi  
mag  
d  
enta an  
appropriate  
ly to  
e  
N  
ew York State  
l classes for Gl  
ens Falls, N  
ew York, show te  
l  
ecommunication parce  
d police an  
d  

d  
epartm  
ent parce  
ls in vivi  
d  
cyan. Chroma is use  
d  
mphasize th  
ese small areas on th  
e  
map. Data source\: Warren County,  
. Map by P. Limpisathian, Penn State  
e  
G  
ography.  
ls  
# PERCEPTUAL COLOR SYSTEMS  
The perceptual dimensions of color can be used to construct three-  
dimensional color spaces. Selecting colors from a true perceptual space would  
be the ideal tool for designing color schemes for maps, but unfortunately, the  
ability to match your own mental image of a complete three-dimensional perceptual color space is not readily available in GIS or graphics software. The  
HSV color system that some o  
# Three-  
# d  
# imensional color spaces  
Di  
dimensions. RGB and CMY both have three dimensions, but they mix color  
in di  
ArcGIS also o  
transformations of RGB\). They can be used to conceptualize three-  
dimensional spaces, which are useful for structuring the way we think about  
and use color.  
Some of the most rigorously designed color systems from color science are  
CIELAB \(a system with L,a,b dimensions de  
Internationale de l’Eclairage\), Munsell \(HVC, see   
Natural Color System \(NCS uses hue, blackness, and chromaticness\) and the  
Optical Society of America Uniform Color Scales \(OSA-UCS uses lightness  
and opponent hue axes, j and g\). All of these systems arrange hues in spectral  
order around a central vertical axis of lightness. Chroma or similar measures  
increase outward from the lightness axis. **FIGURE 8.21.** Th  
e Munse  
Its perceptual d  
im  
ensions are  
lightness  
im  
ension\), an  
d  
d  
ll color space is a color ord  
er syste  
e  
m that is perceptually scal  
.  
d  
hue \(arrang  
e  
d ra  
d  
ially aroun  
d th  
e value axis\), value \(a vertical  
chroma \(increasing outward  
from th  
e value axis\).  
**FIGURE 8.22.** Filling th  
e volum  
e  
of Munse  
ll color space pro  
uces an o  
d  
ddly shape  
,  
d  
asymm  
etrical soli  
d  
. This lumpy shape  
happens because  
high  
-chroma ye  
llows are  
light \(th  
e  
upper part of th  
e color soli  
d bulg  
es toward  
ye  
llow\) an  
d high  
-chroma purpl  
e blues are  
d  
ark  
\(th  
e  
lower part of th  
e soli  
d bulg  
es toward purpl  
e an  
d blue\).  
Each of these systems aims to be at least partly perceptually scaled, such that  
equal distances in color space produce equal color di  
example, if a red and a purple-red are ten units apart, two blues that are also ten units apart should appear equally di  
complemented by CIECAM02 and other color appearance models for  
calculation of color interactions \(such as simultaneous contrast\), adaptation to  
lighting, and color di  
A single “hue leaf” from the Munsell color solid \(a page in the Munsell sample  
books\) is shown in   
bottom up \(  
away from the central axis of neutral grays which is positioned left of this leaf  
of orange-red colors. **FIGURE 8.23.** One  
l  
eaf from th  
e Munse  
ll color ord  
er syste  
e  
m showing a singl  
orang  
e-re  
d  
hue  
. Each row shows colors of equal value \(lightness\). Colors are  
d  
ark  
est along th  
e bottom  
row an  
d becom  
e increasingly light \(high  
er value\) with  
each row moving upward  
\(***A***\). Chroma  
is constant in each column an  
d  
chang  
es from low chroma colors on th  
e  
l  
eft to high chroma  
colors on th  
e right \(***B***\). **FIGURE 8.24.** Saturation is re  
late  
d to chroma but chang  
es with lightness. Th  
e sam  
e  
Munse  
ll hue  
l  
eaf \(  
d  
with white  
lines of constant saturation. Th  
e  
lines  
splay  
d  
iagonally outward  
from th  
e  
d  
ark  
est colors. Source\: Re  
drawn from D. Briggs, 2007,  
Th  
e Dim  
ensions of Colour, www.huevaluechroma.com/015.php.  
Saturation and chroma seem to be used interchangeably to describe the third  
dimension among the color systems related to color perception. Saturation,  
however, is a mixture of lightness and chroma concepts. Confounding these  
two dimensions makes it more di  
when mixing colors for analytical map design. Compare   

outward \(right\), from dark colors upward, unlike the straight verticals of  
equal chroma. Opposing purplish blue and yellow Munsell hue leaves are shown in   
8.25A. The pair extends in opposite directions from the outlined central axis  
of neutral grays. This pair forms a vertical slice through the Munsell color  
solid. Inherent di  
of the purplish blue hue leaf on the left to be quite di  
shape on the right. A useful set of map colors \(  
using a systematic path through perceptual color space. The black arch  
starting at a saturated dark blue, moves through lighter and lower chroma  
colors, and then shifts to yellows that increase in chroma and are darker.  
Selecting colors along this arch produces a useful map color scheme.  
# FIGURE 8.25.  
A syste  
matic path through a perceptual space \(***A***\) yie  
ld  
s a color sch  
e  
m  
that would be useful for mapping th  
e  
matic  
d  
ata \(***B***\). Gaps along th  
e arch in ***A*** mark th  
e  
colors in ***B***.  
e Computer science o  
are simpler to include in software interfaces. Two common ones, HSV and  
HSL, cast themselves as perceptual systems because they make use of the hue,  
saturation, and value/lightness terminology. But they are simpler  
mathematical transformations of RGB without perceptual scaling. They can  
be useful for color selection, but you should be critical of them as you use  
them.  
# Not HSV  
The HSV color system is a symmetrical cone-shaped color space \(  
and 8.27\) and HSL is a bicone solid \(two cones with bases together\). They  
provide handy access to approximate perceptual speci  
perception does not produce a symmetrical color space. Therefore, the  
symmetry of HSV, for example, produces   
characteristics that you need to work around. The confusion among  
representations of a saturation dimension in color selection tools is the  
impetus for my switch to the term chroma for this edition of the book.  
**FIGURE 8.26.** HSV axes are arrang  
e  
d  
much lik  
e  
oth  
er perceptually organize  
syste  
toward  
e  
ms, with saturation increasing horizontally from a vertical lightness scal  
e  
a hue circl  
.  
d  
color ord  
er  
outward **FIGURE 8.27.** Th  
e HSV color soli  
d  
is a re  
th  
e irre  
gular form of th  
e perceptually ord  
ere  
d  
gular cone  
Munse  
. Compare this symm  
ll soli  
d  
\(  
etrical shape with  
All saturated hues are on the upper and outer edge of the HSV cone,  
regardless of their intrinsic di  
that value speci  
saturated yellow and saturated blue are designated as the same “value” but  
have a large di **FIGURE 8.28.**  
A ye  
llow with 100 percent value \(V\) an  
d  
75 percent saturation \(S\) is shown  
in th  
e  
ArcGIS Color Ed  
itor win  
d  
ow. Notice th  
e  
hue circl  
e that runs through th  
e  
hue \(H\)  
sli  
d  
er. Hue is m  
easure  
in  
e  
d  
d  
grees aroun  
d th  
e  
e color circl  
. Re  
d  
is at th  
e 0° position. Figure  
upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 8.29.** This blue  
has th  
e sam  
e value an  
d  
saturation settings as th  
e ye  
llow in   
8.28, but it is much d  
ark  
er in appearance \(th  
e color patch  
es in th  
e upper right compare  
th  
e color being mixe  
d  
\). Figure upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
If you want to use the HSV system to select a set of di  
similar values, you need to do it by eye rather than using the V units. This is  
because the top of the HSV cone is   
same lightness as the pure hues. The   
the same value. For example, at high value, low-to-high saturation intervals  
progress from white to green \(  
lightness and chroma have been combined, making both di  
This white-to-green path angles through perceptual color space on an  
opposite diagonal to the de  
confusion between lightness and chroma lessens at lower values \(  
and 8.32\). **FIGURE 8.30.** For this set of three colors, hue is constant, value is maximize  
d  
at 100  
percent, an  
d  
saturations are set at 0, 50, an  
d  
100 percent, respective  
ly. Notice that th  
e  
lightness of th  
ese three colors varies, showing how lightness is affecte  
d by saturation  
d  
ifferences in HSV. Zero saturation combine  
d  
with high value settings yie  
ld  
s white  
.  
**FIGURE 8.31.** HSV  
o  
d  
es a better job of maintaining lightness at lower value settings. Th  
e  
three colors h  
ere each share th  
e sam  
e  
hue, have 50 percent value, an  
d  
saturations of 0,  
50, an  
d  
100 percent, respective  
ly.  
At lower value settings, zero saturation yie  
ld  
s a more  
accurate  
gray of similar lightness to th  
e colors. Th  
e  
mi  
ddl  
e color is set in th  
e Color Ed  
itor  
win  
d  
ow shown in  **FIGURE 8.32.**  
At lower values, lightness is h  
e  
ld  
more constant within th  
e saturation  
im  
d  
ension. Notice th  
e improve  
d  
consistency along th  
e saturation \(S\) sli  
d  
er in th  
e Color  
Ed  
itor win  
d  
ow. Figure upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
The symmetry of the HSV system makes it di  
colors in a systematic manner when using multiple hues or when adjusting  
saturation. Develop your ability to see the three perceptual components of  
colors, and then use this knowledge to work around the   
and other systems that are only partly perceptually scaled. In situations where  
much tweaking is required to achieve the desired e  
little bene  
# Color cubes  
Although we want to control the perceptual dimensions of color, we often  
must work with color mixtures of CMY and RGB because they specify the  
amount of pigment or light that produces map colors. The color spaces for  
mixing primaries are not perceptually scaled like Munsell or CIELAB. Instead, mixtures of the three primaries of either system form a regular 3D cube. The  
color cubes are like three-dimensional graphs with three axes \(  
The CMY cube has a cyan \(C\) axis, a magenta \(M\) axis, and a yellow \(Y\) axis.  
White is at the origin of these axes \(0 percent of each primary\). Full amounts  
of each primary mix to black \(indicated by K for blacK\) at the opposite corner  
of the cube from white. Look to each corner to see what colors \(secondary  
hues\) are made by mixing pairs of primaries. Cyan and magenta mix to blue.  
Magenta and yellow mix to red. Yellow and cyan mix to green.  
**FIGURE 8.33.** CMY color mixtures pro  
d  
uce a cube-shape  
abbreviation for black because B is use  
d  
for blue  
.  
d  
space  
. K is use  
d  
as th  
e  
Notice that all of the subtractive primaries are light colors, their combinations  
in pairs mix to darker colors, and   
black \(  
the subtractive primaries are the familiar RGB set? **FIGURE 8.34.** Th  
e slices through a color cube shown h  
ere are built from mixtures of six  
steps in each primary. Th  
e  
e cube is pull  
d  
open along th  
e  
mag  
enta axis to  
e  
d  
monstrate th  
e  
volum  
e  
of colors it encloses.  
The RGB color cube looks exactly the same as the CMY cube, but the color  
mixing relationships are reversed \(  
black \(no light\). Each pair of primaries mixes to the lighter CMY secondary  
colors, and full amounts of all three mix to white. Understanding that colors  
get lighter as amounts of the additive primaries are increased is a key to  
learning how to mix colors with RGB. **FIGURE 8.35.** RGB mixtures also form a cube  
cubes is e  
mphasize  
d h  
ere by retaining th  
e  
. Th  
e similarity between th  
e CMY an  
d  
orientation of th  
e CMY cube \(  
RGB  
These color cubes that describe color mixing are more closely related to  
perceptual color space than expected. For example, lightness steps are  
arranged diagonally through the cube \(  
the sequence from white through gray to black arranged vertically, for a  
rough approximation of perceptual color space \(compare   
8.37\).  
In addition, the lighter subtractive primaries are positioned above the darker,  
additive primaries. The hues are arranged around the cube in spectral order,  
like a hue circle. Each of these characteristics is consistent with the  
organization of perceptual color spaces \(  
CMY speci  
characteristics. You will see the links between perceptual dimensions and  
color mixing in the guidelines for mixing color in the next section. **FIGURE 8.36.**  
A lightness axis runs from white to black d  
iagonally through th  
e color cube  
.  
**FIGURE 8.37.** Tip th  
e color mixture cube  
space an  
d th  
e perceptual spaces  
iscusse  
d  
th  
e cube in this orientation.  
d  
on its point to see th  
e similarity between this  
earlier. Th  
e  
lightness axis runs vertically through **FIGURE 8.38.**  
A g  
eneric structure for perceptual d  
im  
ensions of color inclu  
d  
es a vertical  
axis for lightness, a horizontal axis for chroma, an  
d  
a circular arrang  
e  
m  
ent of hues in  
spectral ord  
er. This structure is share  
d by most color ord  
er syste  
ms.  
**FIGURE 8.39.** Th  
e  
g  
eneric structure for perceptual d  
im  
mixture cube reasonably we  
ll.  
ensions   
e tippe  
d  
color  
# HOW TO MIX COLOR  
In computing environments, you use one of two sets of primary colors to mix  
other colors. On screen, you mix tiny dots of red, green, and blue light. On  
paper, you mix tiny dots of cyan, magenta, and yellow inks. These systems  
work in opposite ways. Because printing inks lack the purity of light, there are discrepancies in the  
range of colors that can be mixed in the two systems. You cannot mix all of  
the vivid colors of RGB light emitted from your computer screen using CMY  
printing inks on the page. Software programs can translate between CMY and  
RGB, though the results are not always as expected. You can visualize the  
di  
cube, even though they look generally the same.  
# G  
# eneral gui  
# d  
# e  
# lines  
The relationship between the RGB and CMY color cubes can be further  
simpli  
\(  
the order of the colors of the spectrum. This arrangement is a lot like the hue  
circle.  
We can simplify this order of hues to a hue circle with six primary and  
secondary hues\: red, yellow, green, cyan, blue, magenta, and back to red  
\(  
remember how to mix hues for both color mixture systems.  
# FIGURE 8.40.  
hues are arrang  
e  
A bird  
’s-eye view of th  
e CMY cube reveals that th  
e primary an  
d  
in th  
e sam  
e spectral ord  
er as th  
e  
e  
hue circl  
.  
secon  
d  
d  
ary **FIGURE 8.41.** To re  
m  
two sets of primaries \(RGB an  
e  
mber how to mix hues, sk  
e  
etch a simpl  
d CMY\).  
hue circl  
e an  
d  
mark th  
e  
If you are mixing CMY inks, then C, M, and Y are the primary colors and  
RGB are the secondaries. Notice that the red secondary color falls between  
yellow and magenta primaries on the circle; equal amounts of Y and M mix to  
R. More Y than M mixes a yellow red \(orange\) \(  
Green falls between Y and C primaries on the circle, so equal amounts of each  
mix green. More C than Y mixes a bluish green \(  
choosing proportions of adjacent primaries.  
When mixing hues with RGB, the circle is used in the same way, but RGB are  
the primaries and CMY are the secondaries. Yellow falls between red and  
green, so equal amounts of R and G light mix to yellow \(  
though this may be an unfamiliar way to mix yellow, you can remember it if  
you can recall this simple hue circle \(  
red mix to magenta, and more B than R mixes a more bluish-purple hue. **FIGURE 8.42.** Re  
d  
is between th  
e ye  
llow an  
mag  
d  
enta ink primaries on th  
e  
e  
hue circl  
.  
Equal amounts of mag  
enta an  
ye  
d  
llow mix re  
. Re  
d  
d  
ucing th  
e amount of mag  
enta moves th  
e  
color mixture closer to ye  
llow through orang  
es.  
**FIGURE 8.43.** Green is between th  
e cyan an  
amounts of cyan an  
ye  
d  
llow mix green, an  
d  
aroun  
d th  
e circl  
e to blue-  
green.  
ye  
d  
llow primaries on th  
e  
e  
hue circl  
. Equal  
more cyan than ye  
llow moves th  
e  
mixture  
CMY mixtures are speci  
much of the page is covered by a thin   
mixtures are usually speci  
balances detail and e  
general amounts, more or less ink, and the perceptual results they produce,  
but you will see the di The same hue circle helps you remember how to mix hues with either set of  
primaries, so all that remains is to adjust lightness and chroma. Lightness  
works in opposite ways in the two systems. Higher amounts of CMY in  
subtractive mixtures produce darker colors. For example, 100 percent M is  
darker than 20 percent M. In   
percentages of Y and C.  
**FIGURE 8.44.** Th  
e color circl  
e works just as we  
RGB. Th  
e  
most surprising mixture is ye  
llow from re  
ll for re  
an  
d  
m  
d  
e  
mbering how to mix hues with  
green primaries.  
**FIGURE 8.45.** Combinations of lighter \(low percentag  
e\) cyan an  
primaries mix to pro  
uce  
d  
light greens.  
ye  
d  
llow subtractive  
Conversely, higher amounts of RGB in additive mixture produce lighter  
colors. In RGB, 255 R is lighter than 50 R, and dark colors are mixed by reducing amounts of the primaries. You can remember this by thinking about  
mixing lights—combining more and more light creates increasingly lighter  
colors.  
Chroma is the one color dimension that you can control with a similar  
strategy in both systems. Big di  
chroma colors in both systems, while more equal amounts of the three  
primaries produce lower chroma colors in both systems. For example, high M  
and no C or Y makes a high chroma magenta in CMY mixing. A grayish  
magenta is produced using similar amounts of CMY, but with M only a little  
higher than the other two, as shown in   
A high chroma magenta is produced with an RGB mixture of high R and B,  
no G. A big di  
is the key to high chroma. A grayish magenta is produced by mixing similar  
amounts of RGB, but with G \(magenta’s complement\) a little lower than the  
other two \(  
**FIGURE 8.46.** Mag  
enta \(M\) is  
d  
esaturate  
d by a  
dd  
ing small  
er amounts of th  
e  
oth  
er two  
subtractive primaries, cyan \(***C***\) an  
ye  
d  
llow \(Y\). Re  
e  
m  
mber that this view is looking  
own on  
d  
th  
e perceptual d  
im  
ensions structure, so chroma  
d  
ecreases toward th  
e center of th  
e  
e circl  
Th  
e color is lightene  
d by re  
d  
ucing percentag  
es of all th  
e primaries.  
. **FIGURE 8.47.** Mag  
enta \(equal R an  
d  
B\) is re  
uce  
d  
d  
in chroma by inclu  
d  
ing a lower amount  
of th  
e third primary, G. Th  
e color is  
d  
ark  
ene  
d by re  
d  
ucing amounts of all th  
e primaries.  
Combining low numbers of th  
e a  
dd  
itive primaries, RGB, pro  
uces a  
d  
d  
ark  
er color—th  
e  
opposite result of combining low percentag  
es of th  
e subtractive primaries, CMY.  
# CMYK mixing  
Although color systems are de  
color mixtures often use four inks, rather than just the three subtractive  
primaries, cyan, magenta, and yellow. All hues—as well as black—could be  
mixed using only cyan, magenta, and yellow ink. But because black is such a  
common color in print, printers use black ink to clearly render black text and  
lines and to print grays and dark hues more accurately. In o  
printing—the method used to print most professional color publications—  
printing with CMYK inks is referred to as four-color process printing. These  
four colors are also the pigments, whether powdered toner or liquid ink, used  
in most laser and inkjet printers.  
CMYK percentages range from 0 percent \(no ink\) to 100 percent for full  
coverage of ink. A speci  
percent of the colored area will be covered with tiny dots of solid ink and 80  
percent of the white paper will show through, producing a light color. The steps that follow provide detailed guidelines for subtractive color mixture  
\(CMYK color can only be approximated for on-screen viewing of these  
example   
1\. Set the hue using a single ink \(C, M, or Y alone\) or using proportions  
of two of these colored inks \(  
2. **FIGURE 8.48.** 20C 40Y \(***l***  
***eft***\) is approximate  
ly th  
e sam  
e  
Th  
ere is half as much cyan as ye  
llow in both color patch  
es.  
hue as 50C 100Y \(***right***\).  
Set lightness using the overall magnitude of C, M, and K. Higher  
percentages produce darker colors \(  
regardless of its percentage, so it has minimal e  
8.50\).  
**FIGURE 8.49.** 15M 5K \(***l***  
***eft***\) is lighter than 30M 15K \(***right***\). Both mag  
enta an  
d  
black d  
ark  
en th  
e color.  
3. **FIGURE 8.50.** Both colors contain 50M. Th  
e patch on th  
e right also has 30Y,  
which chang  
es th  
e  
hue but d  
o  
es not d  
ark  
en th  
e color.  
Set chroma by adding K \(  
the smallest magnitude \( 4\. 5. **FIGURE 8.51.** In pair A, 30C 30Y \(***l***  
***eft***\) is high  
er chroma than 30C 30Y 15K \(***right***\).  
Black lowers th  
e chroma of th  
e color. In pair B, 30C 30Y \(***l***  
***eft***\) is also more vivi  
d  
than 30C 15M 30Y \(***right***\). Th  
e chroma of th  
e color on th  
e right is re  
uce  
d  
d  
with  
mag  
enta ink. It is a warm  
er low-chroma color than th  
e  
one  
ma  
d  
e with black in   
8.51A  
.  
Create systematic perceptual changes by making systematic percentage  
changes \(  
**FIGURE 8.52.** Progressive  
look more evenly space  
Notice th  
e  
larg  
e  
magnitu  
es of 10, 30, 60, an  
d  
d  
100 percent cyan \(***A***\)  
d than a series of 10, 20, 70, an  
d  
100 percent cyan \(***B***\).  
gap between 20 an  
70 \(secon  
an  
d  
d  
d third  
colors\) in th  
e ***B*** series.  
Equal percentage steps do not look like equal visual steps. Use bigger  
steps in higher percentages \( 6. **FIGURE 8.53.**  
A magnitu  
d  
e step of 5 to 20 percent black \(***A***\) looks more  
than 80 to 95 percent black \(***B***\), even though th  
ey both have a 15 percent  
d  
ifference  
.  
d  
ifferent  
Do not use all four inks at once. Darken or lower chroma with either K  
or the least percentage of CMY \(  
**FIGURE 8.54.** Three inks \(10C 40M 80Y on ***l***  
***eft***\) are easier to work with than all  
four inks \(5C 40M 80Y 5K on ***right***\). Both colors look th  
e sam  
e  
.  
The second way of darkening and lowering the chroma of colors by using the  
colored inks CMY \(  
because map colors are then easier to adjust and control on press. The press  
operator’s adjustments to ink   
not overly make colors darker or grayer if they are not dependent on the black  
component.  
Darkening and lowering chroma using black has advantages too. The hues in  
subtle color designs are more stable at the press and in varied media if they do  
not contain all three CMY inks. For example, a beige will not shift toward  
blue if black rather than cyan is the third ink that lowers the chroma from  
light orange to beige.  
The peculiar percentages shown in   
medium cyan with RGB of 20, 170, 215 to CMY \(76.47%, 14.51%, 6.27%\). The decimal detail is not of much use for basic map design, and it would be   
round this color speci  
interesting is how imprecise these conversions back and forth can be.  
Converting back to RGB produces 8, 167, 214 instead of the original RGB 20,  
170, 215\. Changes at the low end of the RGB numbers produce minimal  
change \(for example, 8 versus 20 R\), and that is a topic in the next section.  
Conversion imprecision also provides a reminder to pay attention to the color  
mode used in preparing map   
intended media for your map.  
**FIGURE 8.55.** Sli  
d  
ers in th  
e  
ArcGIS Color Ed  
itor show how chang  
es in th  
e CMY  
primaries an  
d black would  
affect th  
e current color. For exampl  
e, increasing ye  
llow \(sli  
d  
ing it  
right\) shifts th  
e color to green. Source\: Esri interface  
.  
# RGB mixing  
RGB color mixtures are usually speci  
255\. The following are detailed guidelines for additive color mixture \(RGB  
color can only be approximated with printing inks for these example book  

1\. Set hue using one or two RGB primaries. When hues are created using  
two primaries, similar proportions produce similar hues \( 2\. 3. 4. **FIGURE 8.56.** 200R 120B \(***l***  
***eft***\) is approximate  
Both have  
half as much blue as re  
.  
d  
ly th  
e sam  
e  
hue as 100R 50B \(***right***\).  
Set lightness using the overall magnitude of RGB numbers. Higher  
RGB numbers produce lighter colors \(  
**FIGURE 8.57.** 200B \(***l***  
***eft***\) is lighter than 50B \(***right***\). Th  
e  
amount of th  
e blue primary in it.  
Set chroma using the lowest RGB number \(  
lighter color has a high  
er  
**FIGURE 8.58.** 100R 200G 230B \(***l***  
***eft***\) is high  
er chroma than 170R 200G 230B  
\(***right***\). Notice that d  
ifferent amounts of re  
d  
, th  
e  
lowest of th  
e three primaries,  
pro  
d  
uce th  
e chroma  
d  
ifference  
.  
Create systematic perceptual changes by making systematic RGB  
changes \( 5. **FIGURE 8.59.** Th  
e ***A***\) looks  
more evenly space  
d than th  
e secon  
d  
series 250R, 220R, 130R, 100R \(***B***\). Set ***B***  
inclu  
d  
es a larg  
e  
gap between 220 an  
130 \(secon  
an  
d  
d  
d third  
squares\).  
Equal steps in RGB numbers do not look like equal visual steps. Use  
larger steps in the lower magnitudes to di  
colors \(  
**FIGURE 8.60.** 255G an  
d  
200G \(l  
eft an  
an  
d  
10G \(***B***\), though both pairs have  
d  
d right in ***A***\) look more  
ifferences of 55.  
d  
ifferent than 65G  
Color mixing sliders for each RGB primary are o  
design tools \(  
starting from the current color. For example, increasing red \(sliding it right\)  
shifts the color to grayish and then toward magenta. Below the last slider in  

base-16 coding.  
Red, green, and blue mix together in counterintuitive ways, but if you follow  
the guidelines in this section, you will be able to adjust RGB colors to produce the map symbols you want to see on screen.  
# Perceptual mixing  
Figures 8.62, 8.63, and 8.64 wrap up this chapter by showing the sliders for  
mixing colors using color systems related to perceptual dimensions of color.  
These three   
cyan shown in 8.55 and 8.61 \(RGB 20, 170, 215\).  
Comparing middle sliders in Figures 8.62 and 8.63 shows that the saturation  
dimension for HSL holds more consistent lightness than the saturation slider  
in HSV. Saturation in HSL is more akin to a chroma dimension. The lightness  
settings for the same color in the two systems are quite di  
approximately 84 in HSV and 46 in HSL are the same lightness.  
The Lab mixing tools better approximate a perceptually scaled color system  
\(  
to light with similar chroma along the   
green-to-red opponent axis. Adding green to the current color would pull it  
left, toward more greenish-blue colors, and moving in the positive direction  
\(right\) would shift toward magenta. The “b” slider represents a blue-to-yellow  
opponent axis, and the hue shifts for changing this cyan are apparent toward  
the ends of the third slider.  
Each of these sets of sliders represents single lines through a three-  
dimensional color space. You’ll be better at designing with color if you  
understand the whole color solid, whether it’s cubes, cones, or lumpy onions. **FIGURE 8.61.** Sli  
d  
ers in th  
e  
ArcGIS Color Ed  
itor show how chang  
es in each of th  
e RGB  
primaries would  
affect th  
e current color.  
**FIGURE 8.62.** HSV sli  
d  
ers show th  
e syste  
an  
d  
value  
.  
m’s interpretation of variation in hue, saturation, **FIGURE 8.63.** HSL sli  
d  
ers show th  
e syste  
value compare  
d  
with HSV.  
m’s  
d  
ifferent interpretations of saturation an  
d  
**FIGURE 8.64.** Lab sli  
d  
ers show th  
e  
opponent character of th  
e CIELAB syste  
OceanofPDF.com  
m. **CHAPTER 9**  
# COLOR ON MAPS  
# M  
any factors a  
perceptual structuring of the colors should correspond with the logical  
structuring in the data. When designing maps, remember that datasets have  
sequential, diverging, or qualitative arrangements. You can re  
arrangements—and make your maps easier to read—by ensuring that the  
character and organization of the colors on your map match those  
arrangements in your data.  
When choosing map colors, you should not be overly concerned about which  
colors your audience likes. Everyone has an opinion about color aesthetics,  
and members of your audience undoubtedly have di  
their own color preferences and cultures. There has been a substantial amount  
of loosely structured research on color preferences. Regardless of context, it  
seems that most people like blue and do not like yellow, but that is an overly  
simplistic guideline for multicolor contexts. People also like maps with many  
colors, so focus your attention on presenting your data clearly and do not  
worry about whether you have picked everyone’s favorite colors.  
Map designers who want to build e  
Types of color schemes for maps, including sequential, diverging, and  
qualitative  
Combining scheme types for two-variable \(bivariate\) mapping Adjusting color selections for simultaneous contrast and colorblind  
readers  
Using custom color ramps  
# COLOR SCHEMES FOR MAPS  
When people read your color maps, they use the perceptual dimensions of  
color, even though you may have speci  
RGB \(red, green, and blue\). Your readers are seeing and thinking about color  
as “light dull blues,” “dark vivid oranges,” or “dark grays,” not as strings of  
numbers. By using perceptual dimensions in ways that parallel the logical  
structures in a map’s data, you make it easier for your readers to understand  
the way the information is organized.  
Sequential, diverging, and qualitative schemes are used to structure color  
symbols to correspond with simple data arrangements. More complex data  
can be mapped by overlaying and combining these schemes.  
# Sequential schemes  
The most basic guidance for color use on maps is to use lightness to represent  
ordered data \(  
For example, two city populations are ordered whether listed as “50,000 and  
650,000 people” or simply as “small and medium sized.” Generally, darker  
colors are used to represent higher data values, and lighter colors represent  
lower values.  
The forest   
dark color. The colors get progressively lighter as   
sort of progression is named a sequential color scheme. **FIGURE 9.1.**  
A set of simpl  
e singl  
e-  
hue, sequential color sch  
e  
m  
es from ColorBrewer.  
**FIGURE 9.2.** Map of   
d  
ata ord  
ering. Data sources\: US G  
by A  
. Dennis, Departm  
ent of G  
e  
e  
G  
ography\).  
e  
monstrates light-to  
-  
e  
d  
e  
d  
ark colors that parall  
l low-to  
-  
high  
ological Survey \(USGS\), US Forest Service \(USFS\). Map  
ography, Th  
e Pennsylvania State University \(Penn State Sequential color schemes may include hue variation, but they should rely most  
on variations in lightness. The   
progress from light to dark within one hue \(pink to red to black\). In contrast,  
the map of high-speed Internet \(  
access to light yellow for high access. The hue change of blue-green-yellow  
supports the steady progression from dark to light and emphasizes low  
Internet access, a topic of concern.  
Including hue di  
provides contrast between colors, helping your reader to tell them apart.  
Figure 9.4 shows a selection of example schemes that include hue transitions.  
**FIGURE 9.3.** Map of internet access in th  
e  
Four Corners re  
gion of th  
e US. Th  
e color  
sequence is reverse  
d  
from th  
e stan  
d  
ard  
“  
d  
ark represents high” convention to emphasize  
lack of access. Data source\: University of Wisconsin Population Health Institute, Robert  
Woo  
d  
Johnson Foun  
d  
ation. Map by N. Ch  
erok, Penn State  
e  
G  
ography. **FIGURE 9.4.** Sequential color sch  
e  
m  
es inclu  
e  
d  
d  
in th  
e ColorBrewer website \(see th  
e  
appen  
Th  
e  
d  
ix\). Each sch  
e  
m  
e inclu  
e  
d  
es a hue transition to compl  
m  
ent a lightness sequence  
labe  
ls above each sch  
e  
m  
e in  
d  
icate th  
e  
hues use  
\(BuPu in  
d  
d  
icates blue to purpl  
e\).  
.  
The color schemes shown here are from ColorBrewer, a web application that  
can guide you in selecting map colors. ColorBrewer adapts a selected scheme  
to the number of classes required for your dataset, then displays it on a map  
template. It reports a variety of speci  
to allow you to then use the scheme in your mapmaking software. The  
appendix provides CMYK \(cyan, magenta, yellow, and black\) versions of the  
ColorBrewer schemes for use on maps that will be printed. RGB conversions  
of these colors \(from an early version of Adobe Illustrator\) are also listed in  
the appendix.  
Each scheme has been designed to adapt to datasets with three to nine color  
classes. Figure 9.5 shows the purple-blue-green scheme applied to each of  
these cases. As the number of classes increases, it becomes more likely that  
adjacent colors in a sequence will be too similar to be discernable in some  
media, such as a projected image. **FIGURE 9.5.** Th  
e PuBuGn family of sequential color sch  
e  
m  
es with an exten  
e  
d  
d hue  
transition \(purpl  
e-pink, purpl  
e, blue, green-blue\) shown with three to nine classes.  
# Diverging schemes  
Careful use of hue and lightness can make maps showing change and  
di  
may be represented by emphasizing both highs and lows. The cheapest and  
priciest places to live in the central Atlanta area are shown in   
Meaningful midpoints in this data range exist at overall median values.  
Although values of homes increase sequentially, it can be more helpful to  
think of this dataset as values higher or lower than overall medians. A color  
scheme that emphasizes this midrange with a light color and the extremes  
with contrasting dark hues, and runs through two lightness sequences \(dark  
to light to dark\), re **FIGURE 9.6.** Th  
e  
map of m  
e  
d  
ian house value by census tracts in Atlanta, G  
e  
orgia, uses a  
d  
iverging color sch  
e  
m  
e with two hues \(mag  
enta an  
d  
green\) an  
d  
a light-  
gray mi  
ddl  
e class for  
tracts between overall m  
e  
d  
ian values for Atlanta an  
d th  
e Unite  
d  
States. Data source\: US  
Census Bureau, USGS. Map by A  
. Dennis, upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography. Emphasizing two data extremes with darker colors and the median range with  
the lightest color clearly parallels the structure within this Atlanta dataset. In  
addition to representing a median or average, this technique can be used to  
highlight a no-di  
threshold value.  
If the critical value is midway through a class, then that class is represented  
with the lightest color \(  
the critical class is right in the middle of the data range. But the critical class  
or break need not be in the middle.  
If the critical value is used as a break between classes, then the scheme will  
have two light colors of di  
color. The set of diverging schemes in   
classes straddling a critical class break.  
**FIGURE 9.7.** Diverging purpl  
e-  
green color sch  
e  
m  
sch  
e  
m  
e is symm  
etrically organize  
aroun  
a mi  
e  
d  
d  
ddl  
rang  
e in mappe  
d d  
ata.  
es with o  
dd  
numbers of classes. Each  
light class that correspon  
d  
s to a critical **FIGURE 9.8.** Diverging purpl  
e-  
green color sch  
e  
m  
es with  
even numbers of classes. Each  
sch  
e  
m  
e is symm  
etrically organize  
d  
aroun  
a mi  
d  
ddl  
e class break that correspon  
d  
s to a  
critical d  
ata value  
.  
A critical class may also sit between two critical values. The home values map  
has an upper break equal to the median home value for the city and the lower  
break equal to the median for the country. The magenta classes, for example,  
are above both values and more expensive than both medians \(  
Spectral or rainbow schemes are popular in scienti  
media graphics like daily weather maps. The full sequence is familiar\: dark  
red, red-orange, orange-yellow, yellow, yellow-green, green-blue, and dark  
blue. Unfortunately, this scheme is often misused as a sequential scheme  
rather than as a diverging scheme. Using it to display a sequential dataset,  
such as temperature, places unintended emphasis on arbitrary midrange  
values by representing them with the lightest and most vivid color\: yellow.  
The dark red and dark blue endpoints of the scheme should mark extremes in  
the data, and light yellow should emphasize a meaningful midrange, such as  
zero change in population or average stream  The most informative use of a spectral scheme is as a diverging scheme.  
People like the multi-hue character of the scheme, and the variety of hues  
helps distinguish symbol categories. Structuring the lightness sequence to  
parallel the characteristics of the data produces an informative map \(  
9.9\). **FIGURE 9.9.**  
Atlanta hom  
lightest color, ye  
llow, is use  
Census Bureau, USGS. Map by A  
e values shown with a  
d  
iverging spectral color sch  
e  
e  
e  
m  
. Th  
d to represent th  
e between-  
e  
m  
d  
ians class. Data sources\: US  
. Dennis, upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
A dataset can often be examined as both sequential and diverging. Regarding  
data as high-to-low and as deviations from a median may both be equally meaningful. Diverging and sequential are conceptualizations rather than  
absolute properties of data.  
Figure 9.10 shows the same home value data using a sequential scheme that  
emphasizes the range of home values, rather than how they di  
middle value. An advantage of this rendition is that it could be adapted to  
print in black and white. This sequential scheme retains some emphasis on  
the class between medians by using the highest chroma color compared to  
others in the schemes. Thus, the scheme includes sequential lightness \(light-  
medium-dark\) and diverging chroma \(low-high-low chroma\). Figure 9.11  
shows diverging schemes available in ColorBrewer. **FIGURE 9.10.**  
Atlanta hom  
e values are shown with a sequential \(light to  
d  
rath  
er than a  
d  
iverging sch  
e  
e  
m  
. Th  
e between-  
e  
m  
ian mi  
d  
drang  
e is subtly e  
th  
e  
high  
est chroma color. Data sources\: US Census Bureau, USGS. Map by A  
upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
ark\) sch  
e  
m  
mphasize  
d  
. Dennis,  
e,  
using **FIGURE 9.11.** Th  
e se  
l  
ection of  
d  
iverging sch  
e  
hues in lightness ramps joine  
d  
at a share  
of hues.  
m  
es availabl  
e in ColorBrewer. Most offer two  
d light color. Th  
e  
last three inclu  
e a wi  
d  
d  
er rang  
e  
# Qualitative schemes  
Qualitative schemes represent di  
that are not ordered. Categorical di  
with di  
military, education, and health care, are categories that could be shown with  
unique hues such as red, green, and blue. A well-designed qualitative scheme  
will not suggest that data is ordered or that one category is erroneously more  
important than another.  
To maintain this sense of similar importance, ensure that hues in a qualitative  
color scheme maintain similar contrast with the background of the map by  
controlling the lightness and chroma of each color. For example, yellow will  
not be as visible on a white background as red, green, or blue, so the class you  
assign to yellow may be perceived as having a di  
others.  
Maps with small mixed color patches and more than about   
categories are di  
perceptual dimensions of color, varying lightness and chroma regardless of  
the implied magnitude di  
\(compare   
are able given the map topic. **FIGURE 9.12.**  
A comparison of th  
e preval  
e  
ent minority groups by county is an exampl  
of  
qualitative  
d  
ata. Th  
e color sch  
e  
e  
m  
maintains fairly constant lightness an  
d  
chroma, varying  
only hue among th  
e   
e  
minimal contrast in this sch  
e  
e  
m  
d  
iminish  
es th  
e  
perception of groupings in th  
e  
d  
ata. **FIGURE 9.13.** Th  
e sam  
e  
map shown with more  
lightness an  
d  
chroma contrast between  
colors. Overall, th  
e colors are not mark  
e  
dly light or d  
ark, but th  
e a  
dd  
ition of som  
e  
lightness  
contrast assists th  
e rea  
d  
er in i  
d  
entifying county classes an  
d  
seeing groups. Cate  
gories with  
fewer counties have  
more contrast\: “  
Asian” is  
d  
ark  
er than th  
e  
oth  
ers an  
d  
“Two or More  
Races” is high  
er chroma than th  
e  
oth  
ers. Data source for   
d  
9.13\: US Census  
Bureau. Maps upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography  
If logical relationships exist between categories, echoing those relationships  
with related colors within the qualitative scheme improves the map \(  
9.14\). For example, use three di  
land-cover map. Groupings of color allow the map to be read for a general  
overview as well as category by category. When you have small areas on a  
map, choose high-chroma colors to emphasize them and to make sure the  
colors can be identi  
shown in higher chroma colors than those with larger areas to make them  
more visible. **FIGURE 9.14.** Qualitative  
lan  
d  
-cover map surroun  
d  
ing Manch  
ester, Tennessee, with varie  
lightness an  
d  
chroma for map symbols. Greens, browns, an  
d blues are use  
d to group  
re  
late  
d  
classes. High  
-chroma cyan an  
mag  
d  
enta colors are use  
d to  
e  
mphasize small an  
d  
d important lan  
d  
-cover classes. Data source\: USGS National Lan  
Map by A  
. Dennis, upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
d Cover Database \(NLCD\).  
One way to choose colors for qualitative categories is to use hues already  
associated with each category, for example, red for tomatoes and yellow for  
corn. But do not become overly concerned about   
associations between map categories and hues. More often, there are no  
obvious hue relationships for the abstract topics common to thematic maps.  
Slight associations will be understood by only some of your map readers, so  
they are not worth laboring over. Use hue as an abstract symbol and focus  
your energies on making the colors easy to di  
A reason not to be adamant about hue associations is they may not be  
understood by everyone who reads the map. Sometimes a seemingly obvious  
hue association for you may not be so obvious to other groups. For example,  
red may seem just right for a hot spot on your map, but red may indicate loss  
to a more accounting-oriented audience \(“in the red”\), producing an  
unintended association. Green might represent money to a US mapmaker, but  
that link may not be meaningful to an audience whose paper currency is not  
green.  
Be alert for color associations that may be o  
exercise caution if a particular hue is associated with a controversial political  
party in the region mapped. Also, take care with some literal uses of color,  
such as black for people who are African American, yellow for Asian  
Americans, and red for American Indians. The super  
emphasis on skin color associations for groups is likely to o  
Use a purposely abstract set of hues for mapping race groups instead. Work to  
develop a set of easily distinguished hues to symbolize your data, but also be  
astute about unintended meanings individual hues may have for the topic  
mapped. The qualitative schemes in ColorBrewer range from three to twelve colors  
and vary in lightness \(  
lightness pairs within hues to use for qualitative data that includes related  
categories.  
**FIGURE 9.15.** Do not use stere  
on super  
d  
Ch  
erok, Penn State  
e  
G  
ography.  
otypical skin colors for race  
etracts from th  
e  
map m  
essag  
e  
map symbols. Overe  
. Le  
g  
en  
d  
upd  
ate  
mphasis  
d by N.  
# FIGURE 9.16.  
A series of   
e  
sch  
e  
m  
es with up to 12 classes are  
offere  
d by th  
e  
m  
es from ColorBrewer. Families of  
online color tool.  
# BIVARIATE COLOR SCHEMES  
Sometimes it is useful to represent more than one variable on a map at the  
same time. A bivariate color scheme uses a matrix of colors to represent two  
variables on the same map. Each variable can be thought of as sequential,  
diverging, or qualitative in nature, but symbolizing both variables within the  
same areal units requires careful decisions about color. Bivariate maps are not  
always a good alternative to making separate maps for each variable, but when  
space is limited or patterns in each variable are particularly complicated, a bivariate representation can be valuable and make otherwise unseen  
relationships readily apparent.  
A critical part of creating bivariate maps is legend construction. Many  
bivariate maps will use a square-shaped legend split into nine sections. You  
can think of this legend as a scatter plot, with the   
horizontal axis and the second variable on the vertical axis. Each corner of the  
square then represents an extreme of the two-variable combination \(for  
example,   
highest values of both variables and the bottom-left corner the lowest. The  
bottom-right corner would be high values for the variable on the horizontal  
axis but low values for the variable on the vertical axis, and the opposite is  
true in the top-left corner. The center of the legend represents middle values  
for both variables.  
# Transparent combinations  
Perhaps the easiest way to create a bivariate map and color scheme is  
overlaying semitransparent data layers. Figure 9.17 makes use of this  
technique by overlaying a map of global January land-surface temperatures on  
temperature anomalies. The blending of the color schemes from each map  
creates a new color scheme with di  
places that had high January temperatures and high temperature anomaly  
\(such as an abnormally warm summer\) are represented with reds, resulting  
from a blend of red and magenta from the single variable schemes \(for  
example, central South America\). Places that were in winter \(low  
temperature\) and were experiencing abnormally cold temperatures are in  
blue-green from blending the single-variable schemes \(for example, Russia  
and the western United States\). Depending on the color-blending capabilities of your design platform and the  
two single-variable color schemes used, transparency may or may not be an  
e  
the color scheme puts you at the mercy of how the single-variable schemes  
blend, which is hard to predict and usually produces less vivid colors. It is  
often more e  
color for each class. **FIGURE 9.17.** Top l  
eft\: A map of January 2023 lan  
d  
-surface te  
mperatures with re  
d  
representing hot \(summ  
er\) an  
d blue representing cold  
\(winter\). Top right\: A map of  
January 2023 lan  
d  
-surface te  
mperature anomaly with mag  
enta representing abnormally  
warm an  
d  
green representing abnormally cold  
. Bottom\: A bivariate  
map of lan  
d  
-surface  
te  
mperature an  
d te  
mperature anomaly create  
d by overlaying transparent, singl  
ee-variabl maps. Data source\: National A  
Observatory. Map by A  
eronautics an  
d  
Space  
d  
ministration \(NASA\) Earth  
. Dennis, upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
A  
# Sequential  
# -sequential  
Visualizing two possibly related quantitative variables using a nine-class  
bivariate choropleth map can reveal important patterns in a dataset. Such a  
map would reveal areas with extreme values of both variables as well as areas  
that are characterized by one distribution more than another.  
For example, a Salt Lake city o  
and property vacancy patterns to better understand how they are related in  
the county. Figure 9.18 shows a map designed for this purpose.  
This map uses a carefully designed sequential-sequential color scheme to  
make the map reader’s experience as useful as possible. In general, the color  
scheme progresses from light to dark along the bottom-left to top-right  
diagonal. Areas with the lowest values are lighter than areas with the highest  
values. This general pattern has the same logic as a single-variable sequential  
choropleth map. Figure 9.19 provides generalized explanations of the diagonal  
lightness change across the legend and hue patterns. **FIGURE 9.18.**  
e  
An exampl  
of a sequential  
-sequential color sch  
e  
d  
ensity an  
d  
vacant housing units in Salt Lak  
e County, Utah. Le  
m  
g  
en  
e showing housing  
d  
annotations list  
m  
eanings for hues at corner extre  
m  
es. Lightness progresses  
d  
iagonally from low-  
low to  
high  
-  
high. Data sources\: US Census Bureau, USGS. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
**FIGURE 9.19.** Basic patterns useful for sequential  
-sequential color sch  
e  
m  
es. Lightness  
progresses  
d  
iagonally from lower l  
eft \(low-  
low\) to upper right \(high  
-  
high\). Hues \(p an  
d  
each ord  
ere  
d d  
ata variabl  
e are  
mixe  
d  
syste  
matically.  
s\) for  
Breaking down the legend further, the left column \(along the y axis\) uses a  
sequential scheme, moving from a light purple to middle-lightness magenta.  
Similarly, the bottom row \(along the × axis\) moves from light purple to a  
middle-lightness cyan. The high-chroma magenta and cyan represent the  
highest values of one variable co-occurring with the lowest values of the other  
variable. These census tracts are important because they represent extremes in  
the data, and the vivid colors make them easily noticed on the map.  
Besides the magenta and cyan, a darker purple-blue hue is used to represent  
areas with high values for both variables. The top row and right column move  
sequentially from the mid-lightness magenta and cyan toward the darker  
purple-blue as data values increase. The middle classes along the legend edges  
are lower chroma because they are not as interesting as the extreme values at  
each corner. Their similarity in hue to the magenta or cyan colors is key to  
making the map readable. These colors still represent values higher on one  
variable than another. Looking at the county \( east of the city have relatively higher densities and vacancies in housing, and  
the cyan colors show, for example, outlying low-density areas that have high  
vacancy percentages.  
# Diverging  
# -  
# d  
# iverging  
When one or more of the variables in a bivariate map is thought of as  
diverging in character, the color scheme is designed di  
shows a bivariate map with the data for both variables diverging; values are  
increasing from a middle value of interest toward one end and decreasing  
from that value in the opposite direction. The middle square in the legend  
shows the center of both diverging variables, areas where dependent  
populations in both age groups are near the average for Utah. Outward from  
this light-gray color, the map uses lightness and chroma to represent areas  
with substantially higher and lower percentages of population under age 18  
and percentages 65 and older. e  
**FIGURE 9.20.** Exampl  
d  
iverging  
-  
d  
iverging color sch  
e  
m  
e showing  
d  
epen  
d  
ent populations  
in Salt Lak  
e County, Utah, with  
each d  
iverging from state averag  
es \(***A***\).  
A comparison  
sequential  
-sequential sch  
e  
m  
e e  
mphasizes only high percentag  
es for th  
e two variabl  
es  
mappe  
\(***B***\). Le  
g  
en  
d  
d  
annotations list hue  
m  
eanings at corner extre  
m  
es. Data sources\: US  
Census Bureau, USGS. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
The dependent populations map could also be interpreted with a sequential-  
sequential scheme that emphasizes only the high ends of the two variables  
\(compare   
between sequential and diverging schemes depends partly on your emphases  
in exploring and communicating geographic patterns.  
The four corners, the extremes for both variables, use distinctive hues that are  
also the darkest and highest chroma colors on the diverging-diverging map  
\(  
lower chroma colors for a hue somewhere between their adjacent corners.  
The four edges of the legend are color schemes diverging in hue, lightness,  
and chroma. A bivariate diverging-diverging color scheme takes the idea of a  
central light class and moves out in all directions toward four extremes rather  
than two. Figure 9.21 describes the general logic of diverging-diverging  
schemes.  
**FIGURE 9.21.** Basic patterns useful for d  
iverging  
-  
d  
iverging color sch  
e  
m  
progresses from a center light color outward to  
d  
ark corners. Hues \(abstracte  
an  
d t\) are  
high chroma at corners an  
d  
combine for classes between th  
e  
es. Lightness  
d to p, q, s,  
m. **Qualitative-sequential**  
Creating bivariate maps that incorporate qualitative variables involves  
di  
The map in   
two variables are land cover and vegetation mortality. The land cover is  
divided into three classes using three distinct hues. As vegetation mortality  
increases, the colors become increasingly dark but remain distinguishable.  
The bivariate nature of this map provides more information than would  
separate maps of   
logic of this qualitative-sequential scheme. **FIGURE 9.22.** Th  
e 2013 Yose  
sch  
e  
e  
m  
. Th  
e two variabl  
es are  
USFS, Monitoring Tren  
e  
G  
ography.  
mite Rim Fire is shown with a qualitative-sequential bivariate  
lan  
d  
cover an  
ve  
g  
d  
etation mortality. Data source\: USGS,  
d  
s in Burn Severity \(MTBS\). Map by A  
. Dennis, Penn State **FIGURE 9.23.** Basic patterns useful for qualitative-sequential color sch  
e  
progresses by rows, an  
d  
each column is a  
d  
ifferent hue  
.  
m  
es. Lightness  
# DJUSTING COLOR SELECTIONS  
There are varied reasons to   
readers. The apparent lightness, hue, and chroma of a color can be altered by  
surrounding colors, often producing unexpected color changes. It is  
important to adjust your design to anticipate these changes. Additionally,  
color maps sometimes need to be read without their intended hues. If your  
map readers may be colorblind or your map is photocopied in black and white  
for inexpensive distribution, lightness di  
much map information as possible. GIS color ramps can be improved by using  
perceptual color design skills and customizing the match between ramp  
characteristics and data values.  
# Unexpecte  
# d  
# color changes  
Color appearance is a  
more di  
distinguish fewer colors when the map includes small point symbols or thin  
lines. Di  
**A** The contrast between a patch of color and its surrounding color enhances the  
di  
example, a color of medium lightness will look darker on a light background  
and lighter on a dark background. Hue changes are toward opponent  
complements\: red-green and yellow-blue. A gray will look greenish on a red  
background. Green will look lighter and yellower on a dark blue background.  
The chroma component of color is particularly susceptible to being changed  
by simultaneous contrast.  
A series of examples based on simple diagrams and two maps \(  
9.25\) demonstrate the relative nature of color and how it changes with  
di  
share the same set of colors\: a sequential scheme that ranges from light yellow  
to dark blue. The map scheme has eight steps, which is a lot, so problems with  
simultaneous contrast e **FIGURE 9.24.** Two isolate  
d  
colors have  
d  
ark surroun  
d  
ings; th  
ey are i  
d  
enti  
as X an  
d  
d  
above th  
e  
e  
map. Which l  
g  
en  
d  
color d  
o th  
ey match? Which of th  
e four colors A to D in  

o X an  
d  
d  
Y match? Th  
e  
map shows th  
e percent of total population who  
in  
d  
icate  
d  
non-Hispanic White race/ethnicity for Census 2000.  
Y **FIGURE 9.25.** Th  
ese counties have  
light surroun  
d  
ings, which mak  
e th  
e  
m look d  
ark  
er. Can  
you match th  
e  
m with X an  
d  
Y in   
e  
map shows th  
e  
percent of total population who in  
d  
icate  
d  
Black or African Am  
erican race for Census 2000.  
Data source for   
d  
9.25\: US Census Bureau.  
Observe how colors are a  
schemes by seeing whether you can match the identi  
despite their varied backgrounds. These sorts of changes also a  
comparisons between regions on a map and between maps in a series. Can  
you decide which counties represent the same data range on both maps? \(See  

The same colors are shown in a simpler arrangement \(  
without homogeneous colorful surroundings, so you can see which ones are  
made to look similar and how matched colors look di  
surround e **FIGURE 9.26.** Simpli  
d  
simultane  
ous contrast d  
iagrams show how map colors are  
ma  
e  
d  
to look d  
ifferent \(***l***  
***eft***\) an  
d how  
d  
ifferent colors are  
ma  
d  
e to look th  
e sam  
e \(***right***\) by th  
eir  
surroun  
d  
ings. Colors X an  
d  
D are th  
e sam  
e, but th  
e color surroun  
d  
ing X mak  
es it look  
lighter an  
d high  
er chroma an  
ye  
d  
llower than D. Color Y is  
d  
ark  
er an  
d  
greener than A \(see  
repeate  
d pair be  
low th  
e  
d  
iagram\), but th  
eir surroun  
d  
ings mak  
e th  
e  
m look similar. Th  
e sam  
colors are compare  
d between maps in   
9.25.  
d  
e  
**FIGURE 9.27.** Color X match  
es D, though its  
d  
ark surroun  
d  
ings on th  
e   
e it  
look lik  
e C, a lighter color. Color Y match  
es B, though simultane  
ous contrast mak  
es it look  
lik  
e  
A on th  
e  
map \(compare   
9.25\).d Simultaneous contrast makes a mess of the map in   
roads shift toward blue because they are surrounded by yellow. The blue ferry  
routes, surrounded by a darker blue, shift lighter and more yellow to look  
grayish. The yellow highways shift lighter and bluer, so they look like a light  
gray. In the end, ferry routes look like local roads in the legend, local roads  
look like ferry routes, and highways do not seem to match any legend symbol.  
The di  
the legend almost worthless \(  
**FIGURE 9.28.** Varying backgroun  
d  
s shift th  
e appearance  
source\: G  
e  
ofabrik, OpenStreetMap. Map by E. Gui  
d  
ero, Penn State  
of low-chroma line colors. Data  
e  
G  
ography. There is little that can be done to prevent contrast e  
because the distribution of data controls the positions of the symbols. The  
best approach is to look carefully at the colors you are planning for a map. Do  
not select colors by comparing them only in the legend where they are seen in  
one order on a uniform background. Look at your selection of colors in the  

inkjet print, lithographic proof, color photocopy, and so forth\). Be sure you  
can identify examples of each color symbol and can tell colors apart  
throughout the map. Look for isolated areas where one color is surrounded by  
contrasting colors; these situations truly test a scheme \(  
eye and good color contrast counteract simultaneous contrast on maps.  
# FIGURE 9.29.  
A sch  
e  
matic  
d  
iagram shows th  
e chang  
es in line colors on  
d  
ifferent  
backgroun  
d  
s for th  
e  
map in   
eft to right, th  
e ye  
llow line  
looks grayer an  
th  
en lighter on th  
e two backgroun  
d  
s. Th  
e  
gray line  
looks bluer, th  
en lighter. Th  
e blue  
line  
looks bluer, th  
en grayer.  
d **FIGURE 9.30.** Th  
e  
d  
iagnostic map d  
isplay use  
d  
in ColorBrewer, shown h  
ere with a   
color sequential sch  
e  
e  
m  
. Each color is isolate  
d  
in a ban  
d  
of each of th  
e  
oth  
er colors. If th  
e  
sch  
e  
m  
e is we  
ll d  
esigne  
d  
, you should be abl  
e to  
easily   
d th  
e four oth  
er colors within each  
ban  
d  
. Source\: ColorBrewer.  
# Colors for the colorblin  
# d  
Approximately 4 percent of the population has some degree of color vision  
de  
women\). Colorblind people can see lightness di  
di  
Red-green colorblindness is the most common impairment, but it includes  
confusions between other hue combinations as well, such as magenta and  
cyan. The severity of colorblindness varies from person to person. Low- chroma colors, like rust and olive, are more di  
color vision impairments to distinguish than high-chroma red and green.  
Expected color confusions can be rigorously modeled in color order systems,  
but these results are di  
Guidelines speci  
eliminate a wider range of color combinations than necessary, but they are  
useful in the context of designing maps. The following pairs of hues are not  
confused by people with the most common types of color vision impairments\:  
Red and blue  
Red and purple  
Orange and blue  
Orange and purple  
Brown and blue  
Brown and purple  
Yellow and blue  
Yellow and purple  
Yellow and gray  
Blue and gray  
These ten color pairs are from a total of thirty-six pairs of basic color names,  
so many other hue pairs are confusing. For example, any combination of red,  
orange, brown, yellow, and green is potentially confusing if the colors have  
similar lightness. Any combination of magenta, gray, and cyan is also likely to be di  
di  
These guidelines are intended to be used to design a map by simply naming  
colors, rather than specifying positions in a color space. For example,  
choosing a red-blue pairing includes any colors that you, or your client, would  
call red and blue, without regard to what sort of red and blue is chosen  
\(yellowish red or bluish red, for example\).  
The map in   
for colorblind map readers to discern. The magenta ferry routes may be hard  
to see against the cyan water. The orange and red roads may be hard to tell  
apart and hard to see on the green land. The brown town symbols may also be  
hard to see against green. Poor legibility for any reader is exaggerated by the  
lack of lightness contrast between symbols and their backgrounds, but these  
symbols will be nearly invisible for colorblind people. **FIGURE 9.31.**  
e  
A portion of a map of Seattl  
e  
d  
monstrates poor choices in colors because  
many will look th  
e sam  
e to colorblin  
d  
map rea  
d  
ers. Th  
e  
highway, local roa  
, an  
d  
d populate  
place colors will all look lik  
e each oth  
er an  
d  
will be  
d  
if  
d  
istinguish from th  
e  
backgroun  
d  
. Th  
e pink for hypoth  
etical ferry routes is lik  
e  
ly to look th  
e sam  
e as th  
e  
surroun  
d  
ing cyan water. Data source\: G  
e  
ofabrik, OpenStreetMap. Map by E. Gui  
d  
ero,  
Penn State  
e  
G  
ography.  
d  
Guidance more speci  
variation on the color circle you were using in the previous chapter \(  
9.32\). Flattening and   
its three visible surfaces presents a hue circle with a white center, shown in  

color diagram based on colorblind confusion lines through a more technical  
color space called CIE xyY, which is di  
speci  
**FIGURE 9.32.** Th  
e CMY \(cyan, mag  
enta, an  
ye  
d  
llow\) color cube with th  
e white corner  
centere  
d  
. Hues are arrang  
e  
d  
in spectral ord  
er aroun  
d th  
e e  
e  
g  
d  
of th  
e cube in this view.  
Figure 9.33 shows a sampling of colors across th  
e visibl  
e faces of this cube  
. **FIGURE 9.33.** Th  
e black lines across th  
e  
d  
iagram outline colorblin  
d  
confusion zones. Th  
e  
un  
d  
erlying arrang  
e  
m  
ent of colors is built from all combinations of 0, 10, 30, 60, an  
100  
d  
percent of CMY inks \(see th  
e appen  
d  
ix for percentag  
es for in  
ivi  
d  
d  
ual colors an  
a  
d  
conversion to RGB\). **FIGURE 9.34.** To use th  
e colorblin  
confusion  
d  
d  
iagram, choose colors separate  
l  
east one zone, or colors that are  
d  
ifferent in lightness.  
d  
iverging sch  
e  
m  
was constructe  
d  
using th  
e  
d  
iagram \(***arrang***  
# e  
# d  
# at l  
***eft***\)  
d by at  
e with six colors  
Colors with similar lightness that are in the same zone or adjacent zones of  

two or more zones apart will be easier to discern. Figure 9.34 shows how to  
use the diagram. Colors from the purple-blue zone will not look the same as  
colors from the red-yellow-green zone. Colors that are di  
within either zone—or adjacent zones—should be visibly di  
The selection of six colors, with black outlines in   
workable diverging scheme for both colorblind readers and readers with  
normal color vision. The red-orange-yellow colors di  
can be used even though they are from the same zone. Likewise, the blue-  
purple set includes lightness di  
and blue, for example\), are from separated zones. This scheme is a good,  
colorful replacement for a spectral scheme because it skips over the greens.  
A All types of color schemes—sequential, diverging, qualitative—can be  
adjusted so they can be read by the colorblind. Almost any well-designed  
sequential scheme that has good lightness contrast between colors will  
accommodate colorblind readers. Beyond visualizing the logical structure of  
the data, accommodating map readers with color vision impairments is  
another reason to use systematic lightness steps when representing ordered  
data.  
A basic strategy for designing diverging schemes is to choose pairs of hues  
from the list earlier in this section and build a lightness sequence within each  
hue. High-chroma yellow does not include dark colors, so it o  
lightness steps. The small legends shown in   
hue pairs for diverging schemes. Diverging spectral schemes that skip greens  
are also good for colorblind readers \(  
**FIGURE 9.35.** Diverging sch  
e  
m  
es built from hue pairs, or gray paire  
d  
istinguishabl  
e to colorblin  
d  
map rea  
d  
ers.  
d  
with a hue, that are **FIGURE 9.36.** Th  
e  
Atlanta hom  
e values map with a near-spectral d  
iverging sch  
e  
m  
e that  
skips over greens to accommo  
d  
ate colorblin  
d rea  
d  
ers. Data source\: US Census Bureau,  
USGS. Map by A  
. Dennis, upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography. Designing qualitative schemes for people with color vision impairments is  
di  
earlier   
and green are likely to look the same, and the blue and purple pair may also be  
confused with each other.  
Careful use of lightness di  
can produce a qualitative scheme that accommodates most colorblind readers  
\(  
lightness and still be legible to colorblind readers. But if green is also used, it  
should be either lighter or darker than orange.  
**FIGURE 9.37.** Th  
ese qualitative colors are rea  
d  
abl  
e for most re  
-  
d  
green colorblin  
d pe  
e  
opl  
because ye  
llow-  
green-brown  
d  
iffer in lightness, as  
d  
o blue an  
e  
d purpl  
. Color pairs with  
similar lightness—purpl  
e-  
green an  
d blue-brown \(brown is a low-chroma orang  
e\)—are we  
ll  
separate  
d  
on th  
e confusion  
d  
iagram. Data source\: US Census Bureau. Map upd  
ate  
d by N.  
Ch  
erok, Penn State  
e  
G  
ography. Finding a colorblind person to look at your maps is helpful. With 8 percent of  
men a  
colorblind. You will have a much harder time   
group of women given the genetics of congenital colorblindness. Color  
Oracle, Vischeck, DaltonLens, and the Color Vision Simulator in ArcGIS  
\(  
people see when looking at your map colors.  
# FIGURE 9.38.  
common of th  
e three cate  
A color vision simulator tool from ArcGIS. Deuteranopia is th  
e  
gories of color vision impairm  
ents.  
most  
The severity of colorblindness varies widely, and there are a few di  
types of colorblindness. Thus, you do not want to lull yourself into a false  
sense that you have designed for all colorblind people when you have  
accommodated a single colorblind person. Having someone around to vet the  
schemes is helpful, but it is not a complete assurance that the map will work  
for all colorblind readers.  
Many people with mild colorblindness do not know they are colorblind. You  
may   
di  
impairments. Watch which colors the person is objecting to and you may be  
able to make an amateur diagnosis \(though perhaps you will keep it to  
yourself\). You can be proud of your ability to make color maps that your colleague and a wider audience of colorblind map users are able to read using  
the guidance presented here.  
Accommodating color vision di  
accessible maps. If you are creating your map or graphic to be displayed on a  
US government website, be aware of requirements to comply with Section  
508 standards. Section 508 is a set of laws governing the accessibility of  
electronic information by people with disabilities. Many large institutions,  
such as universities, also adopt these standards for their web content and  
educational materials in online course resources. Other accessibility resources  
include WGAC \(Web Content Accessibility Guidelines\) and, more generally,  
Universal Design.  
# Custom color ramps  
The example maps earlier in this chapter present sets of colors with discrete  
classes, such as a   
alternative strategy for designing a color scheme using GIS is to select  
endpoint colors and automatically “ramp” between them. The ramp may be  
presented as a continuous color gradation on a map or may be split into a  
series of discrete colors for map classes.  
Because of problems with routes through color space selected by software,  
ramping does not always produce quite what you intend. For example, a ramp  
from yellow to blue cuts through color space to low-chroma colors midway  
through the ramp. This is a logical straight-line route through the color space,  
but it may not produce an appealing map \(  
If you want higher chroma colors in a ramp, you need to choose a route that  
arcs outward rather than going straight through the middle of the color space.  
You can approximate this by specifying interim colors as well as endpoints. A  
straight yellow-to-blue ramp includes some muddy midrange colors, but specifying a midrange green, as shown in   
Likewise, including an orange midway between yellow and red will produce a  
ramp with colors that are easier to tell apart and are more pleasing in  
appearance \( **FIGURE 9.39.**  
A ye  
llow-blue ramp is improve  
are set for th  
e en  
d  
colors \(***A*** an  
d  
***B***\). Th  
e secon  
\(***B***\), so th  
e ramp runs from ye  
llow to green an  
from ye  
llow to blue  
.  
d by   
dpoint. Ye  
llow an  
d blue  
d ramp also has a green set at th  
e  
mi  
e  
ddl  
d  
from green to blue, rath  
er than  
d  
irectly  
The strategy of   

classes to make a logical lightness and hue structure. In   
symbolizes the 45.1 to 55.0 class, straddling 50% \(equal proportions of owned  
and rented units\). Figure 9.42 shows a custom ramp with a hue change at the  
1\:1 class break. Preset ramps do not provide enough control to symbolize  
classes that are asymmetrically arranged above and below a critical midrange  
data class.  
Ramping is useful for reducing the tedium of explicitly specifying colors for  
numerous classes. If you have so many classes, however, that typing color  
speci  
be di  
goals carefully before you concoct a map with more than about ten classes. **FIGURE 9.40.**  
chroma orang  
e  
A ye  
llow-re  
d ramp \(***A***\) is improve  
d  
mi  
dpoint is set in th  
e secon  
d ramp \(***B***\).  
more subtly with this technique  
.  
A high  
- **FIGURE 9.41.** Dark green, white, an  
d d  
ark brown are use  
d to mak  
e this asymm  
etrical  
d  
iverging sch  
e  
e  
m  
. Th  
e white class represents nearly equal proportions of housing units  
being owne  
an  
d  
d rente  
.d **FIGURE 9.42.**  
d  
iverging ramp without a mi  
e  
ddl  
light class. Four colors were set \(light  
an  
d d  
ark within each hue\) before creating ramps that d  
iverg  
e in two  
d  
irections from th  
e  
class break at 1\:1. Data sources for   
N. Ch  
erok, Penn State  
e  
G  
ography.  
A  
Figure 9.43 shows 27 classes—20 between white and dark teal. This approach  
produces an essentially continuous gradation, called an n-class or unclassed  
choropleth map. Unclassed choropleth mapping is useful in some contexts,  
but not when your readers want to identify data ranges for individual areas on  
the map. Simultaneous contrast among the mixed colors on the map a  
adjacent colors, making comparison between enumeration units inaccurate.  
Another more suitable use for many classes is as a continuous elevation ramp  
\(  
other over the land surface, as with other continuously changing surfaces.  
Splitting the continuous ramp into many classes allows precise control of  
where the land-water break, or another critical value, falls in the ramp. **FIGURE 9.43.**  
An n-class choropl  
eth map for th  
e sam  
e  
d  
ata shown in   
cautious about creating so many classes that rea  
d  
ers cannot i  
d  
entify  
d  
ata rang  
es. Data  
sources\: US Census Bureau, USGS. Map by N. Ch  
erok, Penn State  
e  
G  
ography. A  
# FIGURE 9.44.  
A classi  
southwest Washington State  
d  
ministration \(NO  
d raster map of hypsom  
etric an  
d bathym  
. Data source\: National Oceanic an  
AA\). Map by P. Limpisathian, Penn State  
e  
G  
etric values for  
d  
Atmosph  
eric  
ography.  
OceanofPDF.com **CHAPTER 10**  
# CUSTOMIZING SYMBOLS  
# T  
he subtlest details can determine how map data is read and interpreted.  
The shape of a point marker, the width of a line, and the arrangement of  
a pattern each convey speci  
attention to the match between visual variables \(such as shape and size\) and  
the characteristics of their data when creating customized symbols.  
There are two basic groups of visual variables that structure symbol design.  
Size, lightness, pattern spacing, and chroma are used when symbolizing  
ordered data. Hue, shape, orientation, and pattern arrangement categorize  
map features into qualitative classes.  
The combination of visual variables and the spatial dimension of features  
\(point, line, and area\) forms a general framework that you can use to design  
customized symbols for representing all kinds of map data.  
In addition to using color symbols, map designers work with the following\:  
Point symbols—varying symbol size, shape, and orientation  
Line and area symbols—varying line size and pattern and by  
constructing area patterns  
Visual variables for point, line, and area symbols that represent ordered  
data and qualitative data  
**POINT SYMBOLS** Point symbols are not limited to representing data linked to point features on  
a map. Whether a feature is a point or an area depends on the map scale. A  
city may be a point at a small scale and an area at a larger scale. Likewise, a  
street address may be a point on a map of a city but an area on a larger scale  
parcel map. Thus, you want to think of “point symbols” as   
both point and area locations.  
In addition to hue and lightness \(chapter 9\), the main visual variables used to  
create point symbols are size, shape, and orientation \(angle\). Pictograms used  
as point symbols are a special case of shape di  
# Point symbol size  
Symbol size is used to represent data values at point locations or for areas.  
Larger symbols represent higher data values. The simple examples that follow  
show water use and illumination strength provided by street lighting.  
Symbols are centered in parcel areas to represent water use for whole parcels  
in  **FIGURE 10.1.** Th  
e visual variabl  
e size is use  
d to represent d  
ata values for areas.  
An  
exampl  
e variabl  
e being mappe  
d  
is water use by parce  
l, with larg  
er symbols representing  
parce  
ls with high  
er water use  
.  
**FIGURE 10.2.** Th  
e visual variabl  
e size is use  
d to represent d  
ata values at point locations.  
Here, hypoth  
etical illumination amounts from in  
ivi  
d  
d  
ual street lamps are  
mappe  
d  
with  
larg  
er symbols for greater illumination. Diagrams for   
d  
10.2 upd  
ate  
d by N.  
Ch  
erok, Departm  
ent of G  
e  
ography, Th  
e Pennsylvania State University \(Penn State  
e  
G  
ography\). Point symbols that vary in size may be used to represent either total amounts  
or derived values. For example, sizes may represent the number of deaths or  
the death rate from a disease. It is more common to use point symbols for  
totals \(  
rates and other derived values. For example, in   
calculated per 100,000 people.  
When you use proportioned point symbols to represent area data \(  
they are usually located in the middle of each map polygon. The symbol may  
be smaller or larger than the polygon area, depending on the data value it  
represents. In contrast, when color alone is used, the area of the symbol on  
the map is determined by the size of the map polygon \(  
values for small polygons, such as high-population urban areas, may have a  
much-reduced visual impact on a choropleth map, and the data may be  
represented better using symbol size. Bivariate mapping can assist with this  
problem. **FIGURE 10.3.** Total number of  
d  
eaths among Black fe  
mal  
es in th  
e  
re  
gion by state economic area \(SEA\). This  
d  
ata is represente  
d  
symbols. Symbol areas are proportione  
d to  
d  
ata values.  
lower Mississippi River  
with proportione  
d point **FIGURE 10.4.**  
Ag  
e-a  
d  
juste  
d  
mortality rates for Black fe  
mal  
es mappe  
d  
for comparison to  

eth map. Classing use  
d  
in th  
e choropl  
eth map  
accentuates spatial pattern in this  
d  
ata. Data source for   
d  
10.4\: US National Institutes of Health, National Cancer Institute \(NIH NCI\). Maps upd  
ate  
e  
d by P. Limpisathian,  
Penn State  
G  
ography.  
Mortality data is shown in   
graduated point symbols in   
the area symbols \(  
representations.  
Both proportioned and graduated symbols use di  
data. Proportioning symbol sizes to map data gives you a more exact  
understanding of di  
twice the population of another will have a proportioned symbol twice as tall  
or with twice the area. If the symbols are graduated, the symbol for the larger  
city will simply be a bit larger, but it will not attempt to show how much  
larger the city is. Graduating \(or range grading\) symbols is a less exacting  
method that ranks values rather than visually representing data amounts.  
Compare the marked di  
representing ten and ten thousand deaths in   
Proportioned symbols represent data magnitudes and graduated symbols use  
size to represent data order. **FIGURE 10.5.** Total number of cancer d  
eaths among Black wom  
en by SEA mappe  
d  
gra  
d  
uate  
d point symbols \(***A***\) an  
d  
area symbols \(***B***\). Th  
e sam  
e  
gra  
d  
uate  
d  
color set is use  
with  
d to  
e  
mphasize th  
e i  
d  
entical classi  
e  
d  
ata in th  
ese two representations. Data source\:  
NIH NCI. Maps upd  
ate  
d by P. Limpisathian, Penn State  
e  
G  
ography.  
The examples shown previously in this section have used circle areas to  
represent data. Lengths of linear point symbols \(bars\) and areas of shapes  
other than circles are also used for constructing map symbols.  
# Point symbol shape  
Shape is another visual variable readily used with point symbols. Shapes may  
be simple geometric forms \(such as squares, circles, and triangles\) or more  
complex. Shape is used to represent qualitative di  
simple map uses a star for a police station, a circle for a post o  
triangle for a school \(  
Symbol shapes can also be used to build intricate codes that vary in form to  
represent qualitative data. Pictograms \(or icons or glyphs\) make more  
elaborate use of shape for data representation. Common sets of pictograms are  
o  
same simple map is shown with familiar and readily distinguished pictograms  
\( **FIGURE 10.6.** Th  
e visual variabl  
e shape is use  
locations. Local services are represente  
d  
with three  
d to represent cate  
e  
g  
om  
etric shapes.  
gories of features at point  
**FIGURE 10.7.** Pictograms use shapes to  
d  
istinguish cate  
locations for a police station, post of  
d  
gories. This small map shows  
school. Diagrams for   
10.7  
d  
upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
There are few guidelines for designing or selecting shapes for map symbols. If  
there are symbol conventions for a map topic, such as picnicking and camping  
pictograms \( reader, however, to be clairvoyant in their ability to interpret your  
pictograms. Using many small and intricate diagrams all over your map will  
stymie even the most diligent legend reader.  
**FIGURE 10.8.** This portion of th  
e Ba  
dlan  
d  
s National Park map uses a stan  
d  
ard  
ize  
d  
set of  
pictograms. Notice th  
e sparing use  
of simply  
esigne  
d  
d l  
ea  
d  
er lines for symbols in cong  
este  
areas of th  
e  
map. Source for   
d  
10.9\: National Park Service \(NPS\).  
# FIGURE 10.9.  
A portion of th  
e  
e  
map l  
i  
d  
enti  
e pictograms.  
g  
en  
d  
for th  
e  
National Park Service  
map that  
d You can use multiple visual variables together. You may   
with shape is a good way to distinguish qualitative di  
vary size a bit to ensure symbol di  
implied order to the symbols if you do not intend to highlight some as more  
important sites. More compact shapes are easier to associate with particular  
point locations than tall or wide shapes. You want symbols to be readily  
identi  
understand them without having to look closely at each symbol when they  
scan the map.  
Remember that sometimes the function of symbols is to be seen as groups,  
not to be read one by one. If all of your symbols are small blue boxes  
distinguished by di  
to stand out from the others. Your readers will not be able to look across the  
map to see where particular symbols cluster. They will also have a hard time  

It is a good idea to test your symbol shapes and pictograms with map readers  
unfamiliar with the project to check that your map is easy to understand.  
# e  
# Point symbol angl  
Symbol angle, or orientation, can be used to vary a point symbol of constant  
size and shape. A simple use would be to orient a small rectangular symbol  
vertically, horizontally, and at various angles. The example in   
shows a simple arrow shape at three angles to represent water use. You can  
see that this visual variable is not particularly e  
to the same data shown with di  
\(  
The varying orientation of parcels in   
interpretation. Is symbol orientation set relative to the parcel or to the map frame? Angles are set relative to the frame, but a reader may puzzle over the  
question, reducing the e  
Orientation can also be used to vary the internal marks within a symbol while  
maintaining a constant shape and size. Figure 10.11 shows di  
orientations for the two halves within a circle symbol representing qualitative  
point data. You have also seen this same data represented with di  
shapes, and the shapes provide more noticeable contrast between features  
\(  
# FIGURE 10.10.  
e  
visual variabl  
effective  
A simpl  
e arrow shape at d  
ifferent angl  
es represents parce  
l water use  
orientation is  
e  
d  
monstrate  
d  
in this map. Th  
e sam  
e  
d  
ata is represente  
d  
ly with symbol size in   
. Th  
e  
more **FIGURE 10.11.** Orientation can be set to vary marks within symbols, though this may not  
be as effective as using varie  
d  
shapes \(  
d  
10.7\).*** ***Diagrams for   
d  
10.11 upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
It is debatable whether the visual variable orientation is better suited to  
qualitative or quantitative data. Three symbol angles could represent di  
categories of features, though some order seems to be implied by this  
progression. Orientation does not exactly suggest low to high either. Symbols  
that vary orientation can be useful for representing some types of ordered  
data, such as cyclical and directional phenomena. Weather symbols, for  
example, make thorough use of angles for wind direction, such as the blue  
symbols on   
application for orientation of marks within a clock-like point symbol. **FIGURE 10.12.** Blue  
map symbols are win  
d barbs that use th  
e  
e visual variabl  
show win  
d d  
irection. Th  
e symbols also show win  
d  
spee  
d  
with th  
eir feath  
ers. Th  
e  
72-  
hour win  
d  
/wave forecast issue  
d  
on March 23, 2024, as a ra  
d  
iofax chart for th  
e  
Paci  
d  
Tropical East PaciMap source\: Marine, Tropical an  
d  
Tsunami Services  
Branch, National Weath  
er Service \(NWS\).  
orientation to  
map is a  
North  
# LINE AND  
# AREA SYMBOLS  
In addition to hue and lightness, these are additional visual variables that may  
be applied to line and area symbols\:  
Size  
Spacing  
Shape  
Arrangement  
Orientation Size is used to construct both proportioned and graduated line symbols. Lines  
that are dashed and cased combine the visual variables of spacing, shape,  
arrangement, and orientation. Line and area symbols use size and spacing to  
re  
and area patterns are used to represent qualitative di  
# Line symbol size  
Size is used to represent data values associated with line features by adjusting  
line widths. Figure 10.13 represents three levels of tra  
neighborhood roads.  
Just as with point symbol sizes, line sizes may be proportioned or graduated.  
Proportioned lines are shown at line widths that represent di  
values. A road that carries ten times more tra  
wider. Graduated line widths rank order lines from low to high, but the line  
widths are not directly proportioned to data values. Proportioned and  
graduated lines represent data using the visual variable size.  
Proportioned or graduated lines may follow precise routes on a map, such as a  
road or pipeline \(  
indicators, such as generalized   
migrations \( **FIGURE 10.13.** Th  
e visual variabl  
e size is use  
d  
for line features. Traf  
ll  
represente  
d  
with a progression of line wi  
dths. Diagram upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
**FIGURE 10.14.** Line size is gra  
d  
Prince  
e  
G  
org  
e’s County, Marylan  
d  
uate  
.  
d to represent th  
e number of roa  
d lanes. Data source\: **FIGURE 10.15.** Line size is proportione  
d to represent net migration between California  
an  
d  
oth  
er states, with hue representing two tim  
e perio  
d  
s. Map titl  
e is ***N***  
# et Migration  
# Between California an  
# d  
# Oth  
***er States\: 1955–1960*** \[re  
\] ***an***  
d  
# d  
***1995–2000*** \[blue\]. Source\:  
Suchan et al. 2007. Census Atlas of th  
e Unite  
d  
States. US Census Bureau. p. 111.  
# Line symbol pattern  
There are multiple line patterns available for map design. The primary  
options for line symbols in map design are dashing and casing.  
Dashes add pattern to a line, and di  
dash pattern are used to create di  
dashes \(  
As dash patterns become more complex, they also make use of shape and  
arrangement. An international boundary line that combines long dashes and  
short dashes or dots is a combination of spacing, arrangement, and shape  
characteristics. Figure 10.17 shows the same shape with di arrangements. Lines can also be built from di  
string of circles that contrasts with a string of crosses, as shown in   
10.18.  
# FIGURE 10.16.  
An exampl  
e use  
of spacing as a visual variabl  
e for d  
ash  
e  
d lines.  
# FIGURE 10.17.  
Arrang  
e  
m  
ent of marks along a line symbolizes  
d  
ifferent roa  
d types. **FIGURE 10.18.**  
A wi  
d  
e variety of shapes may be use  
d to  
e  
d  
line symbols. Circl  
es an  
d  
crosses  
d  
istinguish two roa  
d types. Diagram for   
ate  
d by N. Ch  
erok,  
Penn State  
e  
G  
ography.  
A classic example of using shape along a line is the standard symbols on  
weather maps. Triangles represent cold fronts and half-circles represent warm  
fronts, and alternating these symbols shows stationary or occluded fronts.  
Orientation and hue are also used to distinguish these categories, as shown in  
Figure 10.19.  
The orientation of the marks within a line symbol can be used to indicate line  
category. Hatching is created when a pattern is at an angle to the line. In  

are at an angle. The cased alleys are included in the example because you can  
interpret line casing as an extreme angle setting \(though don’t create line  
casings the same way you create hatching\). A casing pattern runs parallel with  
the line direction. **FIGURE 10.19.**  
A weath  
er forecast map uses th  
e visual variabl  
e shape in th  
e triangl  
es an  
d  
half-circl  
es along lines to represent fronts, along with orientation an  
d hue  
. Th  
e  
map is a 96-  
hour surface forecast issue  
d  
on March 23, 2024, as a ra  
d  
iofax chart for th  
e  
North Paci  
an  
d  
Tropical East PaciMap source\: Marine, Tropical an  
d  
Tsunami Services Branch,  
National Weath  
er Service \(NWS\). **FIGURE 10.20.** Th  
e  
e visual variabl  
orientation is use  
map. Diagram upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
e  
d to vary line patterns in this exampl  
ography.  
Casing is a commonly used and versatile cartographic symbol option for lines.  
Casing functions just like halos do for text. It helps increase line visibility over  
multiple backgrounds. It can also be used to create a wide symbol that  
contrasts with its background but is not overly bold \(it does not overwhelm  
the visual hierarchy among the map symbols\).  
Casing is formed by lines on both sides of the symbol and may be thin or  
thick. If the two overlaid lines that build a line symbol are similar in width,  
then the casing that results is thin. The example portion of a road map \(  
10.21\) shows a variety of cased lines. **FIGURE 10.21.** Exampl  
e case  
d lines that have varie  
d  
overall wi  
dths, varie  
casing wi  
d  
dths,  
an  
e  
d  
multipl  
lanes. Data source\: Prince  
e  
G  
org  
e’s County, Marylan  
d  
. Map upd  
ate  
d by P.  
Limpisathian, Penn State  
e  
G  
ography.  
The legend in   
than numbers of road lanes, the mapped data\). The 3-point gray line nested in  
the 4-point dark red line produces a 0.5-point casing on both sides of the line  
\(splitting the 1-point di  
point line nested in an 8-point black line produces a thicker 2.5-point casing.  
More than two layers can be used to build cased lines. The widest line on the  
map has three lines layered to create lanes, as shown in segments of a symbol  
property editor \( **FIGURE 10.22.** Th  
e  
layers that build three exampl  
e case  
d lines from   
on 4-  
point lines \(***A***\), 3-  
on 8-point line \(***B***\), an  
1-  
on 7-  
d  
on 10-point line \(***C***\). Note th  
e symbol  
preview be  
low each set of line  
layers. Figure upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
In   
do not. You can control the interaction between cased lines in GIS \(in ArcGIS  
Pro, this design detail is set using join and merge toggles or advanced symbol  
layer drawing\). In design software, layering and order settings within layers  
help to control the interaction of lines and casings.  
A cased line will indicate a di  
lines. For example, a cased highway will be distinguished from a dashed  
county boundary. You can even case a dashed line \(as shown in   
for a proposed highway o  
width, along with other visual variables, will establish a hierarchy of lines. **FIGURE 10.23.**  
A line that is  
d  
ash  
e  
an  
case  
d  
d  
variabl  
es for line pattern. Data source\: Prince  
P. Limpisathian, Penn State  
e  
G  
ography.  
d  
e  
G  
e  
is an exampl  
of using multipl  
e visual  
org  
e’s County, Marylan  
d  
. Map upd  
ate  
d by  
Wide lines can carry a pattern that involves a whole suite of visual variables  
that may be applied to lines\: spacing, shape, arrangement, and orientation.  
Add color variables, and you can produce an almost endless variety of line  
patterns. But that does not mean that you should use intricate line symbols in  
their fullest complexity; remember, do not stump your reader.  
# Area pattern  
A wide array of area patterns may be used on maps. They can be quite literal  
in their design, such as the repeated pattern of small tufts of grass and reeds  
used to represent a swamp \(  
such as a crosshatch of evenly spaced lines across an area. **FIGURE 10.24.**  
A se  
l  
ection of pattern styl  
es ma  
d  
e availabl  
e in GIS. Source\: Gall  
ery within  
ArcGIS Pro software interface  
.  
Choose area patterns by paying attention to the visual variables used to build  
them. You want to choose and customize area patterns so that they obviously  
represent the logical relationships within the data, just as you do with color  
symbols.  
Use textures that are coarse and   
patterns represent low values and closely spaced patterns represent high  
values \(  
data value than a   
Use the shapes of elements within a pattern to represent qualitative  
di  
di  
small tree drawings may contrast with a pavement pattern to distinguish park  
from parking. Orientation \(  
can also be used within area patterns to indicate qualitative di  
As with points and lines, visual variables can be used together to increase the  
contrast between area  to enhance qualitative di **FIGURE 10.25.** Th  
e visual variabl  
es of spacing \(***A***\) an  
to  
establish hierarchy.  
d  
size \(***B***\) are applie  
d to area symbols **FIGURE 10.26.** Th  
e  
e visual variabl  
of shape is applie  
cate  
e  
gories. Diagrams for   
ate  
G  
ography.  
d to area symbols to  
establish  
d by N. Ch  
erok, Penn State **FIGURE 10.27.** Th  
e visual variabl  
es of orientation \(***A***\) an  
d  
arrang  
e  
m  
ent \(***B***\) are applie  
d to  
area symbols to represent d  
ata cate  
gories.  
ArcGIS Pro offers two arrang  
e  
m  
ent settings  
\(gri  
an  
d  
d ran  
d  
om\) that can be useful for representing qualitative  
d  
ifferences between areas.  
# EIGHT VISUAL VARIABLES  
Can you envision patterns of point symbols that vary in spacing? Do you  
recall the look of line symbols that vary in arrangement? With eight visual  
variables and three spatial dimensions for features, you have twenty-four  
basic ways to vary symbols for representing map data. There are many combinations, so this chapter includes a pair of tables that  
provide you with a summary view of point, line, and area features represented  
with symbols that vary in color, size, shape, and pattern. The visual variables  
organized in these tables are the following\:  
Size  
Lightness  
Spacing  
Chroma  
Hue  
Shape  
Orientation  
Arrangement  
# Visual variabl  
# es for ord  
# ere  
# d d  
# ata  
Size, lightness, spacing, and chroma are the visual variables well suited to  
representing ordered data, either rank-ordered data or numerical amounts  
\(table 10.1\). These visual variables establish hierarchies among features.  
Additional and more rarely used visual variables for symbolizing quantitative  
data are perspective height, transparency, resolution, and crispness \(focus\).  
**TABLE 10.1.** Size, lightness, spacing, an  
d  
chroma  
# Area Line Point  
Diagrams upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography. **Area Line Point**  
# Size  
Water-use  
l  
eve  
ls Ve  
hicl  
e traffic \(low, m  
high\)  
e  
ium,  
d  
Water-use  
# Lightness  
Water-use  
l  
eve  
ls Pe  
d  
estrian traffic \(low to high\) Water-use  
# Spacing  
Water-use  
Diagrams upd  
ate  
l  
eve  
ls Ve  
hicl  
e traffic Water-use  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
l  
eve  
l  
eve  
l  
eve  
ls  
ls  
ls **Area Line Point**  
# Chroma  
Water-use  
l  
eve  
ls Pe  
d  
estrian traffic Water-use  
l  
eve  
ls  
Diagrams upd  
ate  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
The visual variables of color lightness and chroma are explained in more  
detail in chapters 8 and 9. Chroma is similar to color saturation reported in  
many authors’ tables of visual variables for mapping. The distinction between  
the two is explained in chapter 8 \(see   
combination of lightness and chroma. Chroma as a visual variable can be  
separated from lightness in color perception, just as size and lightness can be  
seen as separate variations among and within symbols.  
In table 10.1, twelve examples show each visual variable \(rows\) suited for  
representing ordered data applied to point, line, and area features \(columns\)  
with simple demonstration maps. Example map topics are listed below each  
map segment.  
# Visual variabl  
# es for qualitative  
# d  
# ata  
Hue, shape, orientation, and arrangement are the visual variables well suited  
to categorizing features across the three spatial dimensions \(table 10.2\). They  
represent qualitative di  
be useful for representing some types of quantitative data, such as direction or  
time. The visual variable hue is explained in more detail in chapters 8 and 9. In table 10.2, twelve examples show each visual variable suited for  
representing qualitative data applied to point, line, and area features with  
simple demonstration maps. Example map topics are listed below each map  
segment.  
There are also many other ways surfaces can vary. Appearance can be glossy,  
translucent, mottled, metallic, shimmery, and so on. These attributes are not  
often used to encode spatial data, but they can spark some creative ideas. One  
example is strategic use of a glossy varnish on map symbols or some areas of a  
matte printed product. The idea of symbol vari­ ables for communicating data  
also extends to other media, such as haptics \(touchable maps for visually  
impaired map readers\), sound, and animation. These options are less common  
in GIS-based mapping but can inspire you in research and problem solving.  
**TABLE 10.2.** Hue, shape, orientation, an  
d  
arrang  
e  
m  
ent  
# Area Line Point  
# Hue  
Diagrams upd  
ate  
Lan  
d  
resi  
d  
use \(comm  
ential, public\)  
ercial,  
d by N. Ch  
erok, Penn State  
Street types in  
d  
owntown  
d  
istrict  
e  
G  
ography.  
Services \(information,  
post office, library\) **Area Line Point**  
# Shape  
Lan  
d  
use Street types Services  
# Orientation  
Lan  
d  
use Street types Services  
# Arrangement  
Diagrams upd  
ate  
Lan  
d  
use Street types Services  
d by N. Ch  
erok, Penn State  
e  
G  
ography.  
OceanofPDF.com **CHAPTER 11**  
# COMBINING SYMBOLS  
# I  
n addition to using eight visual variables for individual data variables, map  
designers combine them to form representations for two or more data  
variables on one map. Using multiple visual variables together within  
symbols, such as hue with shape, produces an almost endless variety of map  
symbols. This chapter expands from the bivariate color schemes discussed in  
chapter 9\: sequential-sequential, diverging-diverging, and qualitative-  
sequential. The chapter also circles back to chapter 1 and the discussion of  
many possible layouts and purposes for a map from a set of data layers.  
There are few excuses for using a default symbol that does not match well  
with the character of the data it represents. You can make almost any map  
symbol that you can envision by using GIS tools. Thoughtful rule breaking is  
also part of making better maps.  
This chapter helps you envision symbol possibilities by describing the  
following\:  
Many pairings of eight visual variables for bivariate mapping  
Overlaying symbol combinations  
Increasing contrast using redundant visual variables  
Making design decisions and trade-o  
**MULTIVARIATE MAP SYMBOLS** Maps excel at showing relationships between data distributions. You can  
symbolize multiple variables by combining the perceptual dimensions of color  
\(hue, lightness, chroma\) in arrangements such as sequential-sequential,  
diverging-diverging, and sequential-qualitative \(chapter 9\). A quick  
understanding of relationships between data variables can be made by setting  
one transparent over the other, also described in chapter 9. This section  
introduces a more complete perspective on multivariate mapping.  
The word multivariate is the catchall for symbolizing more than one data  
variable in a single map, and the word bivariate is speci  
two data variables. Visual variables may be overlaid or combined into  
bivariate symbols. In chapter 9 you see color symbols that vary by hue and  
lightness as examples. In chapter 10, additional visual variables were added to  
this approach.  
Symbol redundancy is also used to emphasize di  
variables. You can combine four visual variables to better understand the  
relationship between two data variables on a map. Figure 11.1 uses hue and  
shape redundantly to distinguish incorporated and unincorporated places.  
Brown and square contrast with blue and circular. The map uses size and  
lightness to redundantly represent population size. Symbols are larger and  
darker as they represent classes for larger populations. **FIGURE 11.1.** Boston area population map with cate  
gories of incorporate  
an  
d  
d  
unincorporate  
d places are represente  
d by both hue an  
d  
shape  
d  
ifferences. Th  
e  
hierarchy  
of small to larg  
e population classes is represente  
d by size an  
d lightness. Th  
ese pairings are  
use  
d  
as re  
un  
d  
d  
ant visual variabl  
es. Data source\: US Census Bureau, USGS. Map by N.  
Ch  
erok, Penn State  
e  
G  
ography.  
# Overlai  
# d  
# symbols  
In addition to overlaying one partly transparent color scheme on another \(for  
example,   
symbols. For example,   
lines over mortality data to signal that enumeration units have sparse data and  
thus death rates are less reliable calculations. Each line in the pattern is a thin  
white and thin black line o  
back pair \(shown exaggerated in   
ensures a visible texture regardless of background. The pair’s white line  
contrasts with dark backgrounds and the dark line contrasts with light  
backgrounds \(like paired drop shadows\). This pattern provides an overlay that  
is visually separable from the entire diverging color scheme. A second overlay of pattern shows a diverging pattern of dots that contrast  
well with the sequential scheme for the primary data variable \(  
Both lightness and arrangement vary for this symbol. Black dots in a regular  
grid mark high certainty data for temperature change and white dots with an  
irregular arrangement show moderate certainty. A white mask is used for  
areas of lowest certainty in the modeled temperature change data. **FIGURE 11.2.** Bivariate  
map with black  
-white  
line pattern overlay, al  
erting to sparse  
d  
ata,  
on a  
d  
iverging sch  
e  
e  
m  
. Th  
e  
map shows ag  
e-a  
d  
juste  
d d  
eath rates for Black mal  
es by HSA  
\(hospital service area\), 1988–1992, for all causes of  
d  
eath \(***A***\). Th  
e  
e  
l  
g  
en  
d  
for this map is  
arrang  
e  
we  
d  
ll an  
d provi  
d  
es extensive annotation for map interpretation. Th  
e black  
-white  
pairing in th  
e  
hatch  
e  
e  
d lines contrasts with all l  
g  
en  
d  
colors, shown enlarg  
e  
an  
d  
d  
exagg  
erate  
d  
\(***B***\). Source\: Pickl  
e et al. 1996.  
Atlas of Unite  
d  
States Mortality, National Center  
for Health Statistics, US Centers for Disease Control. p. 170. **FIGURE 11.3.** Proj  
ecte  
d  
chang  
e in near surface air te  
mperature from 1981–2010 to 2071–  
2100 with a sequential color sch  
e  
e  
m  
e for   
d  
isolines. Th  
e  
overlay of white an  
d black dots  
with re  
gular an  
d  
irre  
gular arrang  
e  
m  
ent shows certainty for high ra  
d  
iative forcing \(RCP 8.5\).  
Certainty is base  
d  
on a signal  
-to  
-noise calculation among th  
e pre  
d  
ictions of several dozen  
e  
mo  
d  
ls. Data source\: CMIP5; World Climate Research Programm  
e’s Working Group on  
e  
Coupl  
Mo  
e  
d  
d  
lling. Map by D. Retchl  
ess, Penn State  
e  
G  
ography.  
# Bivariate symbols  
Combinations within symbols, rather than as overlays, among the full set of  
visual variables are useful for presenting pairs of data variables for bivariate  
mapping. Figure 11.4 combines size and lightness in each symbol. The map  
shows slopes of river channels with light lines for low slope and darker lines  
for steeper slopes. Within the same lines, it adjusts channels with small  
drainage areas to thin lines and those with larger drainage areas have thicker lines. Thin, dark-colored streams are steep and drain small areas. Rivers with  
larger catchments have lower slopes and run along valleys \(wide and light  
lines\). The hillshade base assists with map interpretation. The map combines  
two quantitative variables using visual variables that are both suitable for  
ordered data. **FIGURE 11.4.**  
A bivariate  
map showing slope an  
d drainag  
e area of river channe  
ls in a  
portion of Pennsylvania ri  
g  
e an  
d  
d  
vall  
ey terrain. Slope is represente  
d by line  
lightness an  
drainag  
e area by line size  
. Data source\: USGS, NHDPlus. Map by A  
. Dennis, Penn State  
e  
G  
ography.  
d The second example map \(  
of visual variables as   
is represented by size, in this case graduated circles. School district spending  
per student by district is represented by lightness with a redundant hue  
transition through magenta, purple, and blue. These visual variables work  
together to show relationships between these data variables. Large dark-blue  
circles are districts with many students and high expenditures per student,  
and small pink circles are districts with fewer students and low expenditures.  
**FIGURE 11.5.** Bivariate  
map showing number of stu  
d  
ents by size an  
d  
expen  
d  
itures by  
lightness an  
d hue  
. Point symbols represent Pennsylvania school d  
istrict areas. Data source\:  
Pennsylvania Departm  
ent of Ed  
ucation, USGS. Map by N. Ch  
erok, Penn State  
e  
G  
ography. The example in   
Census Bureau’s American Community Survey data for race. The map uses  
hue \(purple, red, blue, orange\). There is slight redundant variation in  
lightness among these high-chroma hues to make them easier to distinguish.  
The spacing of dots represents population density \(one dot for 150 people\)  
distributed across enumeration units. The diversity of city populations is one  
message of the map.  
Figures 11.1 to 11.6 are bivariate map examples that show combinations of  
hue, lightness, size, spacing, shape, and arrangement. There are also some  
low-chroma colors among the maps, so the only one I left out was orientation  
as a visual variable, and it’s included in the next section. **FIGURE 11.6.** Bivariate  
mapping with visual variabl  
es of spacing \(  
d  
ot num  
erousness\) an  
d  
hue to represent population  
d  
istribution by race  
. Two a  
dd  
itional race  
groups for which d  
ata  
are coll  
ecte  
in US census enum  
d  
erations, \(1\) Am  
erican In  
d  
ian or Alaska Native an  
\(2\)  
d  
Native Hawaiian or Oth  
er Paci  
d  
er,  
i  
d  
d  
not have  
more than 150 pe  
opl  
e in a census  
tract in th  
e area mappe  
d  
, so th  
ey  
d  
o not have  
d  
ot colors within this exampl  
e area mappe  
.  
d  
Data source\: US Census Bureau, USGS. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
# VISUAL VARIABLE PAIRS  
The full set of possible combinations of eight visual variables is outlined in  
combinations for bivariate maps that represent two quantitative data  
variables, combinations for quantitative with qualitative data, and for  
mapping two qualitative variables.  
**FIGURE 11.7.** Combinations of two visual variabl  
es groupe  
d  
into three sections\:  
quant/quant, qual/quant, an  
d  
qual/qual. Two  
-by-two  
exampl  
es are shown in   
follow for th  
e  
d  
ark  
er ce  
lls with white numbers. Imag  
e  
d  
escription  
Previous maps fall into this structure of numbered cells in   
Hue/size in cell 11 for the migration map \(  
Lightness/size in cell 2 for the rivers map \(  
Both cells 2 and 11 for the school districts map \( Hue/spacing in cell 13 for the dot map \(  
Bivariate mapping introduced in chapter 9 combines hue, lightness, and  
chroma in varied ways\:  
Sequential-sequential \(  
Diverging-diverging \(  
use hue  
Qualitative/sequential \(  
More challenging combinations for color scheme design are sequential-  
diverging and qualitative/qualitative.  
# Quant/Quant  
The upper portion of   
combinations for size, lightness, spacing, and chroma. These bivariate  
symbols are each structured as shown in   
of area   
**FIGURE 11.8.** G  
ord  
ere  
d d  
ata variabl  
es.  
eneral structure for combinations of two visual variabl  
es representing two **FIGURE 11.9.** Quant/quant exampl  
es of area   
e  
-by-two visual variabl  
combination for ce  
ll 2 in   
.  
The quant/quant map example in   
Lake City that was mapped with a sequential-sequential color scheme \(  
9.18\). The map retains a lightness sequence for one of the quantitative  
variables, percent of housing units that are vacant. The map uses size  
variation for the second quantitative variable. The highest density class is  
represented with the smallest hexagons for an impression of tighter   
size ranges to larger hexagons for lower densities. A larger-for-less approach  
intentionally inverts the convention of larger symbols representing higher  
data values. \(The design also conjures Utah’s moniker as the Beehive State.\) **FIGURE 11.10.** Bivariate  
map of two quantitative variabl  
es \(quant/quant\)\: housing unit  
d  
ensity represente  
d by size  
of h  
e  
exagons in pattern that are   
d  
with a lightness sequence  
for percent vacant units in Salt Lak  
e City, by census tract. Data sources\: US Census  
Bureau, USGS. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
# Qual/Quant  
A second portion of   
combinations between hue, shape, orientation, arrangement and size,  
lightness, spacing, chroma. Figure 11.11 shows the structure for these  
combinations. An example of area   
shown in  **FIGURE 11.11.** G  
ord  
ere  
an  
d  
d  
a cate  
eneral structure for two visual variabl  
es representing a combination of an  
gorical d  
e  
ata variabl  
.  
**FIGURE 11.12.** Qual/quant exampl  
es of area   
e  
-by-two visual variabl  
combinations for ce  
ll 13 in   
The example for qual/quant bivariate mapping \(  
and spacing along linear symbols. The visual variable hue groups trails east of  
Anchorage, Alaska, into three trail systems, a subset from the many parks in  
and around the city. The elevation gain along each trail segment is  
represented by the spacing between marks that build the trail lines. These are  
subtly connected by an underlying light and solid trail line. Wider spacing  
between trail dashes gives a sense of the larger strides one might make on a  

hierarchy of challenge \(quant\) combined with an administrative grouping  
\(qual\). **FIGURE 11.13.** Bivariate  
trail syste  
m \(qual\) an  
d  
USGS; trails  
d  
ata provi  
d  
Ch  
erok, Penn State  
e  
G  
map of trails east of Anchorag  
e, Alaska, using hue to cate  
gorize by  
spacing along  
each line for e  
l  
evation gain \(quant\). Data sources\:  
e  
d  
courtesy of MO  
A \(Municipality of Anchorag  
e\). Map by N.  
ography. **Qual/Qual**  
The right-side portion of   
combinations for hue, shape, orientation, and arrangement. The structure for  
these combinations is shown in   
orientation/hue represented in   
**FIGURE 11.14.** G  
cate  
gorical d  
ata variabl  
es.  
eneral structure for combinations of two visual variabl  
es representing two  
**FIGURE 11.15.** Qual/qual  
exampl  
es of area   
e  
-by-two visual variabl  
combination for ce  
ll 30 in   
.  
The example map in   
hue \(  
qualitative visual variable hue categorizes the species\: green for canvasback  
and orange for redhead ducks. The qualitative variable orientation represents  
three ranges for both ducks with equally spaced line patterns\: vertical for summer range, horizontal for winter range, and diagonal for year-round  
ranges. The result is a qualitative-qualitative two-variable map.  
The simple legend with six boxes belies the richness of the combination of  
symbols on the map. In addition to areas with single range types \(for example,  
Canvasback’s winter-only range in the central US\), there are nine possible  
combinations of line pattern overlays. There are also areas where neither  
duck ranges, so the total number of legend boxes could be 16 for a complete  
accounting.  
Orientation combinations are visually separable while reading the map \(  
11.16A\). Paired horizontal lines show both duck species winter in the southern  
states. Combinations of horizontal with diagonal lines show, for example, that  
Canvasbacks winter with Redheads in their year-round habitats in central  
California \(diagonal orange with horizontal green lines\). In a few areas of the  
southwest they may be swapping homes summer and winter \(vertical-  
horizontal cross hatch\). Six versus 16 boxes? A legend doesn’t have to be  
exhaustive for a map to make sense for the reader. **FIGURE 11.16.** Bivariate  
map of two qualitative variabl  
es \(qual/qual\). Orientations of line  
patterns in two hues represent th  
e summ  
er, winter, an  
d  
year-roun  
d rang  
es for two species  
of  
iving  
d  
d  
ucks \(***A***\).  
A color vision simulation of th  
e  
e  
l  
g  
en  
d  
\(***B***\) shows th  
e  
d  
if  
th  
e  
d  
ifference between orang  
e an  
d  
green with a common colorblin  
ness \(  
d  
d  
euteranopia\).  
dd  
ing lightness an  
d  
size as re  
un  
d  
d  
ant visual variabl  
es improves contrast for all map  
rea  
d  
ers \(***C***\). Data source\: USGS Gap Analysis Program, Natural Earth. Map by N. Ch  
erok,  
Penn State  
e  
G  
ography.  
A  
This map design also serves as a reminder that many colorblind readers will  
have a hard time seeing the di  
lightness \(chapter 9\). We couldn’t resist the duckiness of these hues for the  
map topic, but  color vision simulator in the GIS tools. The two species’ ranges wouldn’t be  
di  
This design o  
hue pair. It also invites redundant use of more visual variables to  
accommodate readers’ abilities. Figure 11.16C shows the legend with orange  
lines set wider and lighter than the green ones, adding to the hue and  
orientation combination that the qualitative-qualitative map demonstrates  
\(  
even though they are more typically used as quantitative visual variables. The  
two act in opposition to each other, wider for more important and lighter for  
less important, so the overall e  
ducks but an increase in contrast with the canvasbacks.  
The complete set of 36 bivariate combinations for point, line, and area  
symbols \(a minimum of 108 examples\) would   
are used often, such as hue and lightness, and many would be kind of strange  
looking. One of my qual/qual attempts \(  
arrangement \(grid versus random area pattern\) for one variable combined  
with another sort of arrangement for a second variable. The second  
arrangement changes the relationship between the parts of each circular  
symbol in the pattern. The result might be a map overrun with googly eyes,  
which could be fun but not all that informative. The example maps in this and  
previous chapters show there are many options for customizing bivariate  
symbols. **FIGURE 11.17.** Two forms of arrang  
e  
m  
ent that vary for a qual/qual area   
\(structure  
d  
in   
d  
11.14\). Th  
e result may be  
more  
d  
istracting than useful for  
mapping.  
# PUT IT ALL TOGETHER  
Three map examples close out the book. They bring us back to designing  
labels \(  
represent raster and vector data \(  
themes in previous chapters.  
# Labe  
# l d  
# esign  
Labels on the Pennsylvania Outdoor Recreation map by Purple Lizard Maps  
\(  
recreation and basemap features. Hue and size are the main organizing  
characteristics for the labels, but much nuance is built into stylings \(see  
chapters 6 and 7\) that distinguish among the many outdoor recreation  
opportunities across the state.  
Hue organizes categories of point, line, and area feature names\: rail trails in  
purple; parks, forests, and trails in greens; and water features in blues. The  
hues of label halos add detail, such as the high-chroma yellow that highlights  
county and conservancy parks, distinguishing them from other parks, and  
highlights Bicycle Friendly Community designations. Size di  
as the large-to-small sizes for Allentown, Northampton, Walnutport, and  
Bowmanstown \(along state route 145, northward from lower right\). Bold  
weights increase label prominence for places, but their gray color pushes them  
back in the visual hierarchy so the recreation sites are most prominent.  
Typeface di  
categorization on the map. Most of the map’s labels are a serif font. Larger  
recreation site labels contrast by using a sans serif font, such as for rail, hiking,  
and water trails. The icons for mountain biking and skiing destinations are  
labeled in a sans serif font. These sans serif labels are also italicized and black.  
Italics are used for both serif and sans serif fonts on the map. Serif labels that  
are italicized include water body names and individual trail names, such as  
Appalachian Tr. Points of interest labels, such as Eckley Miners’ Village, are  
distinguished from similarly sized town names with italics.  
The selected background information for the map is tailored to the outdoor  
recreation theme. Mountain names are small, upper case, thin weight,  
letterspaced, italic, serif, light brown labels arranged along the ridges. That’s  
eight characteristics to set—this is intricate work. State Game Land numbers  
are also thin, serif, and light brown, coordinating with their lighter brown  
areas.  
Roads are pushed back in the visual hierarchy with gray numbers in a bold  
condensed font on white shields outlined in gray, or these gray numbers are  
on muted interstate shields in light blue and light red. As with the city and  
town labels, the road labels are background information needed for  
navigation to most sites, but it’s important to the map design that they don’t  
outcompete the labels for outdoor recreation features. The gray type and gray  
shield outlines do the work of pushing these many small pieces of road  
information into the background where the map designers want them. This small part of a large map reveals the cartographers’ care in creating many  
label styles that build a useful and popular map.  
**FIGURE 11.18.** Outd  
oor recreation map with  
expert labe  
l d  
esign. Purpl  
e Lizard  
Maps use  
many labe  
l characteristics to ord  
er, group, an  
d  
separate cate  
gories of features. Source\:  
Pennsylvania Outd  
oor Recreation, 2023, by Purpl  
e Lizard  
Maps. Map portion reprinte  
d  
with  
permission from Purpl  
e Lizard  
Maps. Map d  
esign by M. Hermann, J.  
An  
dronici, E. Greb,  
an  
Wiggus.  
d  
# Coloring Terrain  
Figure 11.19A represents the Massanutten Mountain terrain with ridges and  
winding rivers discussed in chapter 2. Two layers derived from the DEM are symbolized in kaleidoscopic color. The base layer is classed by aspect, the  
direction a slope faces. Directions are represented by hues in spectral order.  
Hue and lightness are also carefully combined so that colors facing north and  
west are lighter\: green-yellow, yellow, yellow-orange. Darker colors face  
south and east. The legend diagram in   
of how hue and lightness progress around the circle. The gradient from light  
to dark around the cardinal directions creates a hillshade e  
calculation.  
High-chroma aspect colors in nearly   
misleading and visually abrupt. There isn’t much steepness there, so aspect is  
less important than along the ridges. Slope angle is represented with an  
overlay ranging from opaque gray for   
partly transparent grays that reduce the chroma of hues, up to fully  
transparent areas for high angle slopes. These transparent areas reveal vivid  
aspect colors. The legend diagram in Figure 11.19B shows a simpli  
starting with a   
peak.  
This colorful representation \(  
since it would overwhelm most overlaid information. It provides a vivid  
portrait of the ridge and valley landscape using all three perceptual  
dimensions of color. The three visual variables combine distinct  
characteristics of the landscape\: hue represents aspect, lightness represents  
landform shape, and chroma represents slope. **FIGURE 11.19.**  
A portion of th  
e Massanutten Mountain DEM represente  
d by symbolizing  
aspect an  
d  
slope  
. Hue an  
d lightness chang  
e aroun  
d th  
e  
e circl  
. Chroma chang  
es from gray  
for   
d  
colors on steep slopes. Th  
ese three  
im  
d  
ensions create th  
e  
lan  
d  
form  
representation \(***A***\) an  
d  
are sch  
e  
matize  
d  
in th  
e  
e  
l  
g  
en  
d  
\(***B***\). Data source\: P. Kenne  
lly, T.  
Patterson, B. Jenny, D. Huffman, B. Marston, S. Be  
ll, an  
d  
. Tait \(2020\). El  
evation Mo  
e  
d  
ls  
for Repro  
d  
ucibl  
e Evaluation of Terrain Representation –  
Arch  
etypal Lan  
d  
forms. Distribute  
d  
using Zeno  
o.  
d  
# Precinct patterns  
Figure 11.20 presents a US Senate election map by the smallest vote  
enumeration units, precincts within the state of North Carolina. The map  
A combines multiple variables\: proportion of votes for two major political  
parties and total number of votes by precinct. The map departs from a simple  
‘who won’ approach \(red or blue; color conventions for the US parties\)  
toward emphasizing where more people were voting and how close the  
contests were.  
**FIGURE 11.20.** Map symbols for each precinct use two hues for political parties an  
a  
d  
mixture  
hue for close vote counts. Th  
e three  
hues are set lighter an  
d lower in chroma  
wh  
ere fewer votes are cast. Senate can  
i  
d  
d  
ate results for th  
e particular 2020 e  
l  
ection  
mappe  
d  
are Thom Tillis \(R\) an  
Kay Hagan \(D\).  
e  
d  
Acknowl  
e  
g  
m  
d  
ent\: This map’s  
esign an  
d  
d  
symbols were inspire  
d by cartography by A  
. Cox, M. Bostock, D. Watkins, an  
d  
S. Carter for  
a 2014 Upshot interactive piece by th  
e  
# N  
# ew York Tim  
e  
***es*** titl  
d  
“Th  
e  
e Most Detail  
d  
Maps  
You’ll See  
From th  
e Mi  
dterm El  
ections.” This new map \(  
e using 2020  
d  
voting  
d  
ata an  
d precinct g  
e  
ography   
es from th  
e Re  
d  
istricting Data Hub \(RDH\) website  
.  
Th  
e MIT El  
ection Data + Science Lab \(MEDSL\) also aggre  
gates precinct-  
l  
eve  
l returns for  
US e  
l  
ections. Data sources\: This map was create  
using  
d  
d  
ata from th  
e Re  
d  
istricting Data  
Hub an  
d  
US Census Bureau. Map by N. Ch  
erok, Penn State  
e  
G  
ography.  
The dark blues show concentrations of Democratic voters in cities, where  
more voters are concentrated, and the light reds show the Republican voter  
dominance in rural areas. Near white, nearly transparent, colors show where  
the fewest voters are. And light colors also show there are fewer people voting at the centers of cities, a combination of low turnout and fewer  
residences in downtowns.  
Purples surrounding major cities and spreading across the state show where  
votes for both parties are about even, between 45 and 55 percent. Purple is a  
good choice for the close votes because it lands on the hue circle between red  
and blue. Map readers understand it as a mix of preferences for the two  
parties because it’s a visual mix of the two standard hues.  
The map reveals details about how close the election was, 49.0 to 47.3 percent  
with the remaining 3.7 percent of voters selecting candidates from other  
parties that didn’t win a North Carolina precinct in the 2020 US Senate  
election. The three hues reveal geographic patterns of US voting.  
The map design intentionally breaks with some cartographic conventions.  
The color classes provide minimal quantitative information, though the data  
used to make the map is vote counts. The map presents a simpli  
with just two anchor numbers, 70 and 7,000, and a gradation of transparency  
between these values for the three categories. Choropleth classes with speci  
ranges are not used, and the minimum and maximum are not named. The  
intent of the map is to invite a public readership to engage with a multivariate  
map, and making the story clear is part of making that connection.  
Other small breaks from convention are embedded in this map design. Lines  
separating enumeration units are not used. The areas are so small that even  
thin lines would cover the color   
skipped for many maps in the book. The intended audience for this election  
map knows the shape and orientation of the state.  
A more fundamental break from convention is mapping total counts by  
coloring enumeration unit areas. Cartographic guidance is to map area data as  
a density, percentage, or another derived value for a choropleth map. It’s sound guidance. Another option for this data would be point symbols  
proportioned by votes and colored by party percentages, much like   
or 11.5. There are, however, 2,662 precincts in this state, so that would be too  
many small point symbols to   
understand the urban-to-rural variation across the state. A cartogram with  
precinct areas enlarged and reduced in proportion to population or vote totals  
is also an option. The map in   
these variables.  
This map’s intent is to invite the public to understand voting in individual  
precincts, how they relate to their neighbors, and larger transitions in pattern  
across their region. The news, websites, and state o  
vote counts. The map complements those resources by highlighting spatial  
patterns, which is what it’s good at. The original numerical data is recast as  
ordered data \(fewer, more, and about even\). Making this map meant making  
intentional trade-o  
available data.  
# Designing better maps  
As you seek to design better maps, you will put the symbolization concepts  
into practice with the concepts from previous chapters. You will bring  
together data from multiple sources and credit all of them. You will arrange  
the elements of the display in a balanced manner, setting up good visual  
hierarchies. Interesting data will be underpinned by location information  
from well-designed base content. You will explain what readers are seeing  
with a judicious combination of titles, legends, annotation, and explanation.  
You will use color and the other visual variables in ways that match the logic  
in your data, so information jumps o  
your readers. They will see through your transparent data design to the  
information the map holds. This book focuses on the language and conventions of map design. As you  
make maps, you will also recognize the situations where you need to break  
from the guidance here to communicate clearly. You will smartly exercise  
your cartographic license to make better maps using GIS tools.  
OceanofPDF.com **APPENDIX**  
# COLORBREWER  
ColorBrewer is an online tool that o  
Colors are speci  
yellow, and black\), and hexadecimal \(for web color\). In addition to ordered  
sets of colors \(as they would appear in a map legend\), each scheme is  
represented with small, mixed polygons to the right of the legends. These  
map-like strips assist you in evaluating whether colors in a scheme look  
di  
more complex background.  
# e  
# An exampl  
Mark Harrower designed the interface and programmed the initial Adobe  
Flash version of the website. Andrew Woodru  
the 2014 version of the ColorBrewer website to deliver the color schemes.  
Thanks to Axis Maps for hosting ColorBrewer2.org. Cindy Brewer designed the schemes. ColorBrewer is based on work supported by the National  
Science Foundation under grant numbers 9983451, 9983459, and 9983461,  
under the Digital Government program.  
The diagrams in this appendix were   
Brewer, Cynthia A., Geo  
2003\. “ColorBrewer in Print\: A Catalog of Color Schemes for Maps.”  
Cartography and Geographic Information Science. 30 \(1\)\: 5–32.  
The diagrams are reprinted with the permission of the American Congress on  
Surveying and Mapping.  
Detailed textual descriptions of the following color schemes are not provided.  
Instead, please visit ColorBrewer2.org.  
# RGB an  
# d CMYK specifications for nine sequential  
**schemes with hue transitions in ColorBrewer** **RGB an**  
# d CMYK specifications for a  
# dd  
# itional sequential  
# schemes in ColorBrewer \(three with hue transitions an  
# d  
# five singl  
# e-  
**hue schemes\)** **RGB an**  
# ColorBrewer  
# d CMYK specifications for d  
**iverging schemes in** **RGB an**  
# ColorBrewer  
**d CMYK specifications for qualitative schemes in** **COLORBLIND DIA**  
# GRAM  
These two diagrams elaborate on   
color in the colorblind confusion diagram are shown at left, and combinations of 0, 10, 30, 60, and 100 percent of cyan, magenta, and yellow inks are shown  
at right.  
To use either of these diagrams, choose colors that are two or more zones  
apart when they have similar lightness. You can use these colors to prepare  
print products. OceanofPDF.com **ACRONYMS**  
# 0D  
zero dimension \(point\)  
# 1D  
one dimension \(line\)  
# 2D  
two dimensions \(area\)  
# 3D  
three dimensions \(volume\)  
**AI** Adobe Illustrator  
**AIAN** American Indian and Alaska Native  
**AIANNHA** American Indian, Alaska Native, and Native Hawaiian Areas  
**AIX** Adobe Illustrator exchange  
**BIPOC** Black, Indigenous, People of Color  
**CC** Creative Commons  
**CIE** Commission Internationale de l’Éclairage \(International Commission  
on Illumination\)  
**CIELAB** CIE opponent color model  
**CMIP** Coupled Model Intercomparison Project  
**CMY** cyan, magenta, yellow  
**CMYK** cyan, magenta, yellow, black  
**CSV** comma-separated values  
**CWFIS** Canadian Wildland Fire Information System  
**DEM** digital elevation model  
**dpi** dots per inch  
**EPA** Environmental Protection Agency \(US federal agency\)  
**FWS** Fish and Wildlife Service \(US federal agency\)  
**FCC** Federal Communications Commission \(US federal agency\)  
**GIS** geographic information system  
**GNIS** Geographic Names Information System  
# HD  
high de **HSL** hue, saturation, luminance  
**HSV** hue, saturation, value  
**HVC** hue, value, chroma  
# JPEG  
Joint Photographic Experts Group \(also JPG\)  
**K** thousand  
**KB** kilobyte  
**Lab, LAB** luminance and a,b opponent axes  
**Ljg** lightness, yellowness, greenness  
**Luv** luminance and u,v chromaticity axes  
**LZW** Lempel-Ziv-Welch  
**M** million  
**MB** megabyte  
**MRLC** Multi-Resolution Land Characteristics Consortium  
**MS** Microsoft  
**MT** Monotype  
# MXD  
map exchange document  
**NACIS** North American Cartographic Information Society  
**NAIP** National Agriculture Imagery Program  
**NASA** National Aeronautics and Space Administration \(US federal agency\)  
**NCEI** National Centers for Environmental Information \(US federal  
agency\)  
**NCS** Natural Color System  
# NG  
**A** National Geospatial-Intelligence Agency \(US federal agency\)  
# NHD  
National Hydrography Dataset  
**NHPI** Native Hawaiian and Other Paci  
**NIH** National Institutes of Health \(US federal agency\)  
**NCI** National Cancer Institute \(US federal agency\)  
# NLCD  
National Land Cover Data **NO**  
**AA** National Oceanic and Atmospheric Administration \(US federal  
agency\)  
**NPS** National Park Service \(US federal agency\)  
**NRCan** Natural Resources Canada  
**NWI** National Wetlands Inventory  
**NWS** National Weather Service \(US federal agency\)  
# OSA  
**-UCS** Optical Society of America Uniform Color Scales  
**OT** OpenType  
# PD  
**F** portable document format  
# PNG  
portable network graphics  
**POI** points of interest  
**ppi** pixels per inch  
**RCP** Representative Concentration Pathways  
**RF** representative fraction  
**RGB** red, green, blue  
**RGYB** red-green, yellow-blue  
**RYB** red, yellow, blue  
**SEA** state economic area  
**SIL** Summer Institute of Linguistics  
**TIFF** Tagged Image File Format  
**TIGER** Topologically Integrated Geographic Encoding and Referencing  
**TNM** The National Map  
**UI** user interface  
**US** United States  
# USD  
**A** US Department of Agriculture \(federal agency\)  
**USGS** US Geological Survey \(federal agency\)  
**USFS** US Forest Service \(federal agency\)  
**UTM** universal transverse Mercator  
**xyY** x,y chromaticity axes and luminance OceanofPDF.com **RESOURCES**  
# CARTOGRAPHY BOOKS  
Books on cartography have been published for many years. This list provides  
a selection of books published since 2000 that include content on map design.  
Anthamatten, Peter. 2020. How to Make Maps\: An Introduction to Theory and  
Practice of Cartography. Routledge.  
Brown, Allan, and Wim Feringa. 2003. Colour Basics for GIS Users. Prentice  
Hall.  
Clarke, Keith C. 2014. Maps and Web Mapping. Pearson.  
Crampton, Jeremy W. 2011. Mapping\: A Critical Introduction to Cartography  
and GIS. Wiley-Blackwell.  
Darkes, Giles, Mary Spence, and Alexander J. Kent \(Foreword\). 2017.  
Cartography—An Introduction. 2nd ed. British Cartographic Society.  
Dent, Borden D., Je  
Thematic Map Design. 6th ed. McGraw-Hill Education.  
Field, Kenneth. 2018. Cartography. Esri Press.  
Field, Kenneth. 2022. Thematic Mapping\: 101 Inspiring Ways to Visualise  
Empirical Data. Esri Press.  
Harvey, Francis. 2015. A Primer of GIS\: Fundamental Geographic and  
Cartographic Concepts. 2nd ed. Guilford Press.  
Kimerling, A. Jon, Aileen R. Buckley, Phillip C. Muehrcke, and Juliana O.  
Muehrcke. 2016. Map Use\: Reading, Analysis, Interpretation. 8th ed. Esri Press.  
Kraak, Menno-Jan, and Ferjan Ormeling. 2020. Cartography\: Visualization of  
Geospatial Data. 4th ed. CRC Press.  
Kraak, Menno-Jan, Robert E. Roth, Britta Ricker, Ayako Kagawa, and  
Guillaume Le Sourd. 2020. Mapping for a Sustainable World. United  
Nations and International Cartographic Association.  
Krygier, John, and Denis Wood. 2016. Making Maps\: A Visual Guide to Map  
Design for GIS. 3rd ed. Guilford Press.  
Lambert, Nicolas, and Christine Zanin. 2023. Practical Handbook of Thematic  
Cartography\: Principles, Methods, and Applications. CRC Press.  
MacEachren, Alan M. 2004. How Maps Work\: Representation, Visualization, and  
Design. Guilford Press.  
Monmonier, Mark S. 2018. How to Lie with Maps. 3rd ed. University of  
Chicago Press.  
Muehlenhaus, Ian. 2013. Web Cartography\: Map Design for Interactive and  
Mobile Devices. CRC Press.  
Peterson, Gretchen N. 2012. Cartographer’s Toolkit\: Colors, Typography,  
Patterns. PetersonGIS.  
Peterson, Gretchen N. 2020. GIS Cartography\: A Guide to E  
3rd ed. CRC Press.  
Peterson, Michael P. 2014. Mapping in the Cloud. Guilford Press.  
Slocum, Terry A., Robert B. McMaster, Fritz C. Kessler, and Hugh H.  
Howard. 2022. Thematic Cartography and Geovisualization. 4th ed. CRC  
Press. Tyner, Judith A. 2014. Principles of Map Design. Guilford Press.  
# CARTOGRAPHY JOURNALS  
Cartography research is published by scholarly journals in a variety of   
including geography, GIS, and computing. The following is a list of the  
primary English-language cartographic journals.  
Cartographic Perspectives is an open-access journal published by the North  
American Cartographic Information Society \(NACIS\).  
Cartographica is published by University of Toronto Press for the Canadian  
Cartographic Association \(CCA\).  
Cartography and Geographic Information Science is published by Taylor &  
Francis for the Cartography and Geographic Information Society \(CaGIS\)  
based in the United States.  
International Journal of Cartography is published by Taylor & Francis for the  
International Cartographic Association \(ICA\).  
The Cartographic Journal is published by Taylor & Francis for the British  
Cartographic Society \(BCS\).  
OceanofPDF.com **ABOUT THE AUTHOR**  
# C  
ynthia A. Brewer is a professor in the Department of Geography at The  
Pennsylvania State University. She teaches introductory cartography  
and map design courses and advises graduate students working in  
cartography. She has consulted on map and atlas design for the US Census  
Bureau, US Geological Survey, National Cancer Institute, National Center for  
Health Statistics, and National Park Service. In 2023, she was awarded the  
International Cartographic Society’s highest honor, the Carl Mannerfelt Gold  
Medal, for her distinguished contribution to the   
the Henry Gannett Award for Exceptional Contributions to Topographic  
Mapping from the USGS. Brewer is well known for her ColorBrewer online  
tool for selecting map color schemes. She has authored more than 100  
publications, which have been cited over 7,000 times. Her research interests  
include map design, color theory in cartography, topographic map design,  
multiple-scale mapping, and atlas design. She earned her doctorate in  
geography with an emphasis in cartography from Michigan State University  
in 1991, supervised by Dr. Judy M. Olson.  
OceanofPDF.com **INDEX**  
or this ebook edition, the index page numbers link to the beginning of  
# F  
the corresponding page in the print edition. Because of this, the index  
term may appear slightly after the location that you are linked to. Ranges of  
page numbers link to the beginning of the   
# A  
absolute scale, 92  
accents, 119  
accessibility  
needs of readers, 98  
resources, 195  
achromatic colors, 158  
additive color mixture, 154, 172  
additive primaries, 154, 155, 166, 167, 168  
adjacent objects, positioning, 11  
aerial photographs, 31  
aggregation, 63, 66–67  
Albers equal-area projection, 15, 16, 50  
altitude \(angle\) of illumination, 26  
ambiguity  
in calculations, 129  
in classi  
analytical shading, 26 angle \(orientation\) of point symbols, 205  
annotation, 82, 130, 131  
anti-aliasing, 138  
ArcGIS  
area patterns, 211–12  
color mixing, 161, 167, 168  
colors entered as CMY, 170–71  
color systems, 153, 161–62  
Color Vision Simulator, 195, 223  
export options, 103  
halos, 107, 126  
line spacing, 122–23, 124  
line symbol patterns, 208–10  
map text, 130  
symbol-level masking in, 126  
symbol property editor in, 210  
terrain shading, 26  
tracking units, 122  
area label placement, 139, 146–49  
area patterns, 211–12  
area symbols. See line and area symbols  
arrangement as visual variable, 213, 214  
ascenders, 114  
attribution, 110  
audience, map purpose for, 2–4  
azimuthal projections, 18–19 azimuths, 16, 26  
# B  
backgrounds, 93  
balloons, cartoon, 124  
baseline, 114  
basemap basics, 21–43  
customizing base to purpose, 42–43  
landforms, 22–31  
land use, 31–37  
vector base, 38–41  
basemap layers  
customizing, 42–43  
imagery, 31–33  
land cover, 34–35  
land use data, 31–37  
legends for, 79–80  
basemap legends, 79–80  
basemaps for past times, 71  
Bézier curves, 107  
bivariate color schemes, 183–88  
diverging-diverging, 186–87  
qualitative-sequential, 188  
sequential-sequential, 184–85  
transparent combinations, 184  
bivariate symbols, 216–17 boundaries, 39–40  
cartographic boundary   
labeling boundary lines, 149  
parcel data and, 36–37  
statistical, 60  
as theme, 56, 76, 79  
bowl, 114  
boxes around map elements, 8–10  
# C  
caching, 48, 49  
cadastral maps, 36  
calculations. See mapped calculations, describing  
callouts, 124  
cap height, 114  
cartographic boundary   
cartography  
cartographers’ use of scale, 46–50  
copyright, 109  
large- versus small-scale maps, 46–47  
projections a  
cartoon balloons, 124  
CC mark, 110  
census data, 60–64, 86  
character map \(in Windows\), 119  
character size, 121–22 character spacing, 122  
choropleth, 76  
chroma, 158–60  
CIECAM02 model, 161  
CIELAB color system, 161  
CIE xyY color space, 193  
classi  
CMY color cubes, 166–67  
CMY color mixtures, 164  
CMYK mixing, 170–71  
collapse, 68  
color associations, o  
color basics, 153–73  
mixing colors, 167–73  
perceptual color systems, 161–66  
perceptual dimensions, 154–60  
colorblind  
ColorBrewer for, 188, 223, 244  
colors for, 191–95  
ColorBrewer  
for colorblind, 188, 244  
diverging color schemes, 178–80, 236–40  
qualitative color schemes, 180–183, 243  
sequential color schemes, 176–77, 180, 184–85, 230–35  
color changes, unexpected, 189–91  
color circles, 155, 164, 169, 193 color classes, 25, 72, 102, 177, 196, 227  
color contrast, 101, 191  
color cubes, 166–67  
color depth settings, 105  
colorfulness, 158. See also chroma  
coloring terrain, 226  
color mixing, 167–73  
CMYK mixing, 170–71  
color cubes, 166–67  
guidelines, 168–69  
perceptual mixing, 173  
RGB mixing, 172–73  
color on maps, 175–98  
bivariate color schemes, 183–88  
color schemes for maps, 176–83  
color selections, adjusting, 188–98  
Color Oracle, 195  
color printing, 154–56  
color quality, 101–3  
color ramps, custom, 196–98  
color schemes, 176–83  
bivariate, 183–88  
diverging, 178–80, 236–40  
diverging-diverging, 186–87  
qualitative, 180–83, 241–43  
qualitative-sequential, 188 sequential, 176–77, 189, 230–35  
sequential-sequential, 184–85  
color selections, adjusting, 188–98  
for the colorblind, 191–95  
custom color ramps, 196–98  
unexpected color changes, 189–91  
color spaces, three-dimensional, 161–63  
color systems, perceptual, 161–67  
compression methods \(images\), 104–6  
condensed fonts, 118, 121, 135, 225  
conformal projections, 16–19  
confusing calculations, 89  
conic projections, 15–16  
continuous elevation ramp, 198  
contours, 25  
contradiction in classi  
contrast, improving, 125, 126–28  
contrast e  
copyright, 108–11  
original work in cartography, 109  
public licenses and open data, 110–11  
rights and permissions, 109–10  
correct but wordy calculations, 89  
counters, 114  
Creative Commons licensing, 110–11  
crediting sources, 109, 110–11 critique, 13–14  
CSV values, 110  
curvature, 29–31  
curved labels, 134, 146–48, 149  
curves, Bézier, 107  
custom color ramps, 196–98  
customized legends, 81–82  
customizing base to purpose, 42–43  
# D  
DaltonLens, 195  
dash patterns, 208, 211  
data categories, 86, 212. See also lightness; chroma  
data legends, 76–79  
choropleth, 76  
dot \(density\), 77  
isolines, 77  
proportioned symbols, 78–79  
qualitative area   
segmented symbols, 79  
data types through scale, 50–64  
hydrographic data, 38–39, 53–57  
place data, 58–64  
terrain data, 50–53  
decoration, overdoing, 94–96  
dense label placement, 150–51 densely arranged layout, 7  
density legends, 77  
descenders, 114  
design  
label, 224–25  
map media, 98–103  
map projections in, 14–19  
for map purpose, 2–6  
diacritical marks, 119  
digital elevation model \(DEM\)  
coloring terrain, 226  
curvature, 29–31  
elevation, 22–25  
landforms, 22–31  
resampling and smoothing, 53  
terrain through scale, 50–53  
terrain shading and, 26–29  
direction \(azimuth\), 16  
direction indicators, 93–96  
display fonts, 94, 115  
display modes, 98–103  
distortions, projection, 14, 16, 17, 18, 48, 49  
diverging color schemes, 178–83, 236–40  
diverging-diverging color schemes, 186–87  
dominant wavelength, 154  
dot \(density\), 77 dot legends, 77  
dots per inch \(dpi\), 98–99  
draft maps, 13–14  
drop shadow, 94, 95  
dynamic labeling, 130–31  
# E  
elevation, 22–25. See also digital elevation model \(DEM\)  
elimination, 68–69  
embedded fonts, 120  
empty spaces, balancing, 7–10  
enumeration units, 60, 63–64, 198, 217, 219, 226, 228  
EOT \(Embedded OpenType\) Lite fonts, 120  
equal-area projection, 14, 16  
equirectangular projection, 14  
experimentation, 13–14  
explaining maps, 75–96  
map legends, 76–82  
marginal elements, re  
wording, 83–91  
exporting fonts, 120  
export options, choosing, 103–8  
raster export formats, 104–6  
transparency, 108  
vector export formats, 106–8  
extended font families, 118 **F**  
fair use, 110  
feature category, indicators of, 133–34  
feature hierarchy, indicators of, 135–36  
feature types \(point, line, area\), 199  

fonts, 114–21  
anatomy of, 114  
categories of, 115–16  
choice of, 116–17  
font families, 117–19  
font formats and permissions, 120–21  
special characters, 119–20  
type styles, 117–19  
four-color process printing, 170  
four color theorem, 156  
# G  
generalizing for smaller scales, 64–70  
aggregation, 66–68  
collapse, 68  
elimination, 68–69  
simplify operations, 65–66  
graphic map text, 130 **H**  
halo e  
halos, 126–28  
hierarchy  
feature, indicators of, 135–36  
in text content, 84–86  
visual, in layout, 4–6  
hillshading, 26–29, 40, 51  
HSV color system, 161–63  
hue, 154–56  
hue circles, 154–55, 164, 167, 168–69, 193, 227  
hue transitions, 177, 230–35  
for labels, 133–34  
saturated, 164–65  
uses of, 154–56  
as visual variable, 213, 214  
HVC color, 161  
hydrographic data  
networked, 39  
through scale, 53–57  
hypsometric colors, 22, 23, 25, 26, 30  
# I  
illumination, altitude \(angle\) of, 26  
imagery, 31–33 index contours, 25, 53  
ink percentages, 168–69, 170–71  
inset maps, 5, 10–13, 62–63, 96, 100  
intermediate contours, 25  
interpolation methods, 25  
isoline legends, 78  
# J  
JPEG format \(.jpg\), 104, 105–6  
# K  
kerning, 122  
Kimerling, Jon, 50  
# L  
label design, 224–25  
labeling maps, 129–51  
label placement, 139–51  
labels as symbols, 132–39  
map text, 130–32  
label placement, 139–51  
area label placement, 146–49  
dense label placement and trade-o  
line label placement, 144–46  
point label placement, 139–44 labels  
anti-aliasing, 138–39  
design of, in combining symbols, 224–25  
dynamic, 130–31  
as graphic text, 130  
map text, 130–32  
placement of, 139–51  
size of, 121–24  
as symbols, 132–39  
labels as symbols, 132–39  
ambiguity and contradiction in classi  
feature category, indicators of, 133–34  
feature hierarchy, indicators of, 135–36  
transparency and anti-aliasing, 138–39  
label size, 121–24  
character size, 121–22  
kerning, tracking, and character spacing, 122  
line spacing, 122–24  
land cover, 34–35  
landforms, 22–31  
curvature, 29–31  
elevation, 22–25  
terrain shading, 26–29  
landscape orientation, 13, 90  
land use, 31–37  
imagery, 31–33 land cover, 34–35  
property, 36–37  
large-scale maps  
conformal projections, 16–17  
versus small-scale maps, 46, 56  
layers, semitransparent, 184  
layout, 6–14  
densely versus loosely arranged, 7  
empty spaces, balancing, 7–10  
experimentation and critique, 13–14  
planning, 6–14  
re  
shape within, 14–16  
visual hierarchy in, 4–6  
leader lines, 124, 150–51  
leading, 121, 122–24  
leaf-on and leaf-o  
legend title elaborates, 84  
letter casing, 126  
letter spacing, 122  
lightness, 136–38, 157–58  
lightness as visual variable, 213  
line and area symbols, 207–12  
line symbol patterns, 208–11  
line symbol size, 207  
line label placement, 144–46 line logic, 90–91  
line spacing, 122–24  
line symbol patterns, 208–11  
line symbol size, 207  
local levels, 50  
LZW \(Lempel-Ziv-Welch\) format, 105  
# M  
map legends, 76–82  
basemap legends, 79–80  
customized legends, 81–82  
data legends, 76–79  
map media, designing for, 98–103  
color quality, 101–3  
map size and viewing distance, 99–101  
resolution, 98–99  
mapped calculations, describing, 86–89  
ambiguous, 89  
confusing, 89  
correct but wordy, 89  
notes, 86, 89  
shorter but OK, 89  
map projections in design, 14–19  
azimuthal projections, 16, 18–19  
projection properties, choosing, 16–17  
shape within layout, 14–16 UTM projections, 17  
map purpose, designing for, 2–6  
audience, 2–4  
visual hierarchy in layout, 4–6  
map size and viewing distance, 99–101  
map text, 130–32  
annotation, 131–32  
dynamic labeling, 130–31  
graphic map text, 130  
marginal elements, re  
decoration, overdoing, 94–96  
direction indicators, 93–94  
scale indicators, 92–93  
maximum-quality exports, 106  
medium-quality exports, 105, 106  
Mercator projections, 16, 17, 47–50, 93  
mixing colors, 167–73  
CMYK mixing, 170–71  
color cubes, 166–67  
guidelines, 168–69  
perceptual mixing, 173  
RGB mixing, 172–73  
MRLC \(Multi-Resolution Land Characteristics\) Consortium, 34  
multiple lighting directions, 28  
multivariate map symbols, 216–19  
bivariate symbols, 218–19 overlaid symbols, 217  
Munsell color, 161–63, 166  
# N  
National Hydrography Dataset \(NHD\), 38, 55–56  
National Land Cover Data \(NLCD\), 34–35, 51, 80  
National Map, 41, 49, 50  
Natural Color System \(NCS\), 161  
Natural Earth, 56–57, 58, 59, 110  
n-class map, 198  
NHDPlus, 56  
non-Western language fonts, 119  
north arrows, 93–94, 107  
northwest illumination, 26, 27–29, 31, 33  
notes, 83, 84, 86, 89  
# O  
o  
open access, 108–11. See also copyright  
open areas, 7, 13, 126  
open data, 110–11  
OpenType fonts, 118  
Optical Society of America Uniform Color Scales \(OSA-UCS\), 161  
ordered data, visual variables for, 213–14  
orientation as visual variable, 212, 213–14 orientation of point symbols, 205–6  
orthographic projection, 19  
orthoimages, 31–33  
orthophotos, 31–32  
overlaid symbols, 217  
overlaying semitransparent data layers, 184  
# P  
page orientation, 13, 14  
parcel data, 36–37  
parcel maps, 36, 160  
past times, basemaps for, 71  
pattern arrangement as visual variable, 211–12  
pattern spacing as visual variable, 211  
PDF format, 106–7, 121  
perceptual color systems, 161–67  
color cubes, 166–67  
HSV and, 161–63  
three-dimensional color spaces, 161–63  
perceptual dimensions, 154–60  
chroma, 158–60  
hue, 154–56  
lightness, 157–58  
perceptual mixing, 173  
permissions  
copyright, 109–10 fonts, 120–21  
pictograms, 198, 203–5  
pixel density, 99  
place data through scale, 58–64  
planning maps, 1–19  
designing for map purpose, 2–6  
layout, 6–14  
map projections in design, 14–19  
plate carrée projection, 14–15, 48, 50  
PNG format, 104, 106, 108  
point data, 41–42  
point label placement, 139–43  
point size of type, 114, 117, 121–22, 124, 135, 137, 146, 149  
points of interest \(POI\), 3, 41–42, 134  
point symbol angle, 205–6  
point symbols, 200–206  
point symbol angle, 205–6  
point symbol shapes, 203–5  
point symbol size, 200–203  
point symbol shapes, 203–5  
point symbol size, 200–203  
poor designed fonts, 120  
portrait orientation, 13  
PostScript fonts, 120  
ppi \(pixels per inch\), 50–51, 98–99  
precinct patterns, 226–28 print resolution, 98  
projections  
Albers, 15–16  
azimuthal, 18–19  
conformal, 16–17  
conic, 15  
in design, 14–19  
distortions, 14, 16, 17, 18, 48, 49  
equal-area, 16–17  
equirectangular, 14  
local levels, 50  
orthographic, 19  
plate carrée, 14–15, 48, 50  
scale a  
UTM, 17  
zoom levels, 48, 49  
property, 36–37  
proportioned lines, 207  
proportioned symbols, 78–79, 201  
public domain maps, 97, 110  
public licenses, 110–11  
publishing maps, 97–111  
copyright and open access, 108–11  
export options, choosing, 103–8  
map media, designing for, 98–103  
purity, 158, 167. See also saturation purpose of map  
customizing base to, 42–43  
designing for, 2–6  
# Q  
qualitative area   
qualitative color schemes, 180–83, 241–43  
qualitative data, visual variables for, 214  
qualitative-sequential color schemes, 188  
qual/qual combinations, 222–24  
qual/quant combinations, 221–22  
quantitative data, 154, 206, 213, 214, 220  
quant/quant combinations, 220–21  
# R  
rainbow color schemes, 154, 179  
raster export formats, 104–6  
reading ability of map audience, 2  
red-yellow-blue \(RYB\) color set, 154  
relief shading, 26  
representative fraction \(RF\), 46–47  
resampling DEM data, 53  
resolution, 98–99  
RGB mixing, 172–73  
rights and permissions, 109–10 river names, positioning, 133, 146  
road data, 40, 109, 130  
round-number units for scale bars, 93  
# S  
satellite imagery, 31, 125, 128  
saturation  
controlling, 177, 180  
as dimension of color, 158  
HSV system and, 162–64  
low-to-high intervals, 165  
in three-dimensional color spaces, 161–63, 173  
scale, 46–69  
cartographers’ use of, 46–50  
data types through, 50–64  
generalizing for smaller scales, 64–69  
projections’ e  
scale, mapping through  
census data, 60–64  
hydrographic data, 53–57  
place data, 58–64  
terrain data, 50–53  
scale bars, 10, 52, 92–93, 94  
scale indicators, 92–93  
schemes, color. See color schemes  
Section 508 compliance, 195 segmented symbols, 79  
semitransparent data layers, 184  
sequential color schemes, 176–77, 184–85, 188, 217, 221, 230–35  
sequential-sequential color schemes, 184–85  
serifs, 114  
shaded relief, 26, 28  
shadows, 125  
shape  
within layout, 14–16  
as visual variable, 213, 214  
share alike license, 110  
sharing maps, 108–11. See also copyright  
shorter but OK calculations, 89  
short titles, 84  
SIL Open Font License, 121  
simplify operations, 65–66  
simultaneous contrast, 80, 161, 189–91, 198  
size as visual variable, 213  
slippy map, 49  
small-scale maps  
generalizing for, 64–69  
large versus, 46–47  
smoothing DEM data, 53  
source notes, 4, 5  
spacing as visual variable, 213  
special characters, 119–20 spectral color schemes, 154–55, 179  
splined text, 145–46  
stream lines, 39, 56  
stroke, 114, 116, 117, 126  
stroke contrast, 114  
substituting fonts, 120–21  
subtractive mixture, 154–55, 169  
subtractive primaries, 154, 166–67, 169  
supplemental contours, 25  
symbols  
bivariate, 218–19  
combining, 215–28  
customizing, 199–214  
labels as, 132–39  
line and area, 207–12  
multivariate, 216–19  
overlaid, 217  
point, 200–204  
point symbol size, 200–206  
proportioned, 78–79  
segmented, 79  
visual variables, 213–14  
symbols, combining, 215–28  
coloring terrain, 226  
label design, 224–25  
multivariate map symbols, 216–19 precinct patterns, 226–28  
visual variable pairs, 220–24  
# T  
tapering, 38, 56  
terminals, 114  
terrain data through scale, 50–53  
terrain shading, 26–29  
text  
annotation, 131–32  
dynamic labeling, 130–31  
graphic, 130  
text content, hierarchy in, 84–86  
legend title elaborates, 84  
notes, 83, 84–86, 89, 130  
short titles, 84  
text fonts, 115  
three-dimensional color spaces, 161–63  
TIFF format \(.tif\), 104–5, 110  
TIGER \(Topologically Integrated Geographic Encoding and Referencing\)  

tiles, 48, 49  
time, mapping through, 71–74  
basemaps for past times, 71  
time series, 72–74  
time series, 72–74 titles, 83  
topographic mapping themes, 47, 49, 50, , 70, 71, 72, 99  
tracking, 122  
trade-o  
transparency, 108, 138–39  
transparent color combinations, 184  
transportation data, 40–41  
true color, 108, 164  
TrueType fonts, 120  
type basics  
fonts, 113–28  
label size, 121–24  
type e  
type e  
callouts, 124  
halos, 126–28  
as hierarchy indicators, 135–36  
shadows, 125  
type sizes, unreadable, 100, 122  
type styles, 117–19  
# U  
unclassed choropleth map, 198  
unexpected color changes, 189–91  
Universal Transverse Mercator \(UTM\) projections, 17  
unreadable type sizes, 100, 122 upstream drainage area, 38–39, 56  
US Geological Survey \(USGS\), 21, 49  
US national mapping, 41, 49, 50–53, 110  
UTM \(Universal Transverse Mercator\) projections, 17  
# V  
vector base, 38–42  
boundaries, 39–40  
point data, 41–42  
transportation, 40–41  
water, 38–39  
vector basemap layers, 38, 42–43  
vector export formats, 106–8  
verbal scale, 47, 92  
viewing distance, map size and, 99–101  
Vischeck, 195  
visual hierarchy in layout, 4–6  
visual variable pairs, 220–24  
qual/qual, 222–24  
qual/quant, 221–22  
quant/quant, 220–21  
visual variables, 213–14  
line symbols, 207–12  
multivariate symbols, 216–19  
ordered data, 213–14  
pairs of, 220–24 point symbol angle, 205–6  
point symbol shape, 203–5  
point symbol size, 200–203  
qualitative data, 214  
# W  
water data. See hydrographic data  
water features, 38–39, 224  
web Mercator projection, 47, 49, 93  
Windows character map, 119  
WOFF \(Web Open Font Format\) fonts, 120  
wording, 83–91  
hierarchy in text content, 84–86  
line logic, 90–91  
mapped calculations, describing, 86–89  
wording of legends, 83–91  
work for hire, 109  
# X  
x-height, 114  
# Z  
zoning rules, 37  
zoom levels, 48, 49  
OceanofPDF.com **ABOUT ESRI PRESS**  
# E  
sri Press is an American book publisher and part of Esri, the global  
leader in geographic information system \(GIS\) software, location  
intelligence, and mapping. Since 1969, Esri has supported customers with  
geographic science and geospatial analytics, what we call The Science of  
®  
Where . We take a geographic approach to problem-solving, brought to life  
by modern GIS technology, and are committed to using science and  
technology to build a sustainable world.  
At Esri Press, our mission is to inform, inspire, and teach professionals,  
students, educators, and the public about GIS by developing print and digital  
publications. Our goal is to increase the adoption of ArcGIS and to support  
the vision and brand of Esri. We strive to be the leader in publishing great  
GIS books, and we are dedicated to improving the work and lives of our  
global community of users, authors, and colleagues.  
# ACQUISITIONS  
Stacy Krieg  
Claudia Naber  
Alycia Tornetta  
Jenefer Shute  
# PRODUCT ENGINEERING  
Craig Carpenter  
Maryam Mafuri **EDITORIAL**  
Carolyn Schatz  
Mark Henry  
David Oberman  
# PRODUCTION  
Monica McGregor  
Victoria Roberts  
# SALES & MARKETING  
Eric Kettunen  
Sasha Gallardo  
Beth Bauler  
# CONTRIBUTORS  
Christian Harder  
Matt Artz  
# BUSINESS  
Catherine Ortiz  
Jon Carter  
Jason Childs  
**RELATED TITLES** **THEMATIC MAPPING**  
Kenneth Fie  
ld  
9781589485570  
# MAPPING WITH ALTITUDE  
Nathan C Sh  
ephard  
9781589485532 **THE ESRI GUIDE TO GIS ANALYIS, VOLUME 1**  
An  
d  
y Mitch  
e  
ll  
9781589485792  
# CARTOGRAPHY.  
Kenneth Fie  
ld  
9781589484399  
For information on Esri Press books, e-books, and resources, visit our website  
at esripress.com. OceanofPDF.com Transcription\:  
Designing Better Maps\: A Guide for GIS Users, third edition  
Learn from the best with this popular book on creating successful maps with  
any GIS or illustration product, written by an expert cartographer. For more than 18 years, Designing Better Maps\: A Guide for GIS Users has been  
essential reading for all mapmakers who use geographic information systems  
\(GIS\) across industries and sectors, including government, commercial,  
creative, or academic. This third edition continues the reliable legacy of this  
book, distinctive in its clear and e  
concepts and updated with new and revamped design practices.  
With more than 400 full-color illustrations, this book applies map design best  
practices to both reference and statistical mapping, guiding you through the  
processes of planning maps, using scale and time, understanding and using  
color, customizing symbols, and more.  
Whether you face the challenge of making well-designed maps or are already  
adept at GIS data management and analysis but need better ways to visually  
communicate spatial information and results, Designing Better Maps teaches  
how to use GIS tools to design maps in provocative and accessible ways.  
Award-winning author Cynthia A. Brewer uses her sophisticated mix of  
experiences—conducting academic research, teaching novice cartographers,  
mentoring research and mapmaking by advanced students, and collaborating  
with analysts and mapmakers at various federal agencies—to present this  
practical information. Brewer is a professor and chair of the Department of  
Geography at Pennsylvania State University. She teaches introductory  
cartography and map design courses and advises graduate students working in  
cartography. She has worked as a map and atlas design consultant for the US  
Census Bureau, National Cancer Institute, National Center for Health  
Statistics, and National Park Service.  
OceanofPDF.com **EXTENDED IMA**  
# GE  
# DESCRIPTIONS  
# T  
his section includes extended textual descriptions of complex images. **CHAPTER 3**  
# Figure 3.21  
Spider-web diagram of US census geographic entities. The entities are  
organized by the level that administers them. Each entity \(subitems in the  
following list\) feeds into the census block level.  
1\. Nation  
ZIP code tabulation areas  
Urban areas Core based statistical areas  
2\. Regions  
3\. Divisions  
4\. States  
School districts  
Congressional districts  
Urban growth areas  
State legislative districts  
Public use microdata areas  
Places  
5\. Counties  
Voting districts  
Tra  
County subdivisions  
Subminor civil divisions  
6\. Census tracts  
7\. Block groups  
8\. Census blocks  
Return to text. **Figure 3.24**  
AIANNHA block chart.  
American Indian Areas \(Federal\) / O  
into 1\) tribal census tracts \(and thereby into tribal block groups and census  
blocks\) or 2\) tribal subdivisions and then census blocks.  
State data feeds into one of three categories\:  
Oklahoma Tribal Statistical Areas  
Alaska Native Regional Corporations / Alaska Native Village Statistical  
Areas / Hawaiian Home Lands  
American Indian Reservations \(state\) / State Designated Tribal  
Statistical Areas All three types of data feed into census blocks, though Oklahoma Tribal  
Statistical Areas data passes through tribal subdivisions   
Tribal Designated Statistical Areas data feeds directly into census blocks.  
Return to text. **CHAPTER 11**  
# Figure 11.7  
Thirty-six combinations of the eight visual variables are possible. Five  
combinations, marked with “\(example\),” are described by later examples in the  
chapter.  
Quant/quant\:  
1\. Size and size 2\. Lightness and size \(example\)  
3\. Lightness and lightness  
4\. Spacing and size  
5\. Spacing and lightness  
6\. Spacing and spacing  
7\. Chroma and size  
8\. Chroma and lightness  
9\. Chroma and spacing  
10\. Chroma and chroma  
Qual/quant\:  
11\. Hue and size \(example\)  
12\. Hue and lightness  
13\. Hue and spacing \(example\)  
14\. Hue and chroma  
15\. Shape and size  
16\. Shape and lightness  
17\. Shape and spacing  
18\. Shape and chroma  
19\. Orientation and size 20\. Orientation and lightness  
21\. Orientation and spacing  
22\. Orientation and chroma  
23\. Arrangement and size  
24\. Arrangement and lightness  
25\. Arrangement and spacing  
26\. Arrangement and chroma  
Qual/qual\:  
27\. Hue and hue  
28\. Shape and hue  
29\. Shape and shape  
30\. Orientation and hue \(example\)  
31\. Orientation and shape  
32\. Orientation and orientation  
33\. Arrangement and hue  
34\. Arrangement and shape  
35\. Arrangement and orientation  
36\. Arrangement and arrangement \(example\)  
Return to text. OceanofPDF.com  
