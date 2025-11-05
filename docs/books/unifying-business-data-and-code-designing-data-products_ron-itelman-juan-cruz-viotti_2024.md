# Unifying Business,  
# Data, and Code  
# Designing Data Products with JSON Schema  
# Ron Itelman &  
Juan Cruz Viotti Unifying Business,  
# Data, and Code  
In the modern symphony of business, each section—from  
the technical to the managerial—must play in harmony.  
Authors Ron Itelman and Juan Cruz Viotti introduce a bold  
methodology to synchronize your business and technical  
teams, transforming them into a single, high-performing unit.  
Misalignment between business and technical teams halts  
innovation. You’ll learn how to transcend the root causes  
of project failure—the ambiguity, knowledge gaps, and blind  
spots that lead to wasted efforts.  
The unifying methodology in this book will teach you these  
alignment tools and more\:  
•  
The four facets of data products\: A simple blueprint that  
encapsulates data and business logic helps eliminate the  
most common causes of wasted time and misunderstanding  
•  
The concept compass\: An easy way to identify the  
biggest sources of misalignment  
•  
Success spectrums\: Define the required knowledge  
and road map your team needs to achieve success  
•  
JSON Schema\: Leverage JSON and JSON Schema to  
technically implement the strategy at scale, including  
extending JSON Schema with custom keywords,  
understanding JSON Schema annotations, and hosting  
your own schema registry  
•  
Data hygiene\: Learn how to design high-quality datasets  
aligned with creating real business value, and protect your  
organization from the most common sources of pain  
DATA  
US \$65.99 CAN \$82.99  
ISBN\: 978-1-098-14500-2  
5 6 5 9 9  
9 7 8 1 0 9 8 1 4 5 0 0 2  
“There simply isn’t any  
other resource that  
provides the same  
explanation that can  
take you from zero  
to hero.”  
—Ben Hutton  
JSON Schema Specification Lead,  
Postman  
“I keep thinking, why is  
this simplicity missing  
from an entire field?”  
—Hala Nelson  
Author of Essential Math for AI \(O’Reilly\)  
Ron Itelman is cofounder of  
Intelligence.AI. His expertise is  
in collaborative intelligence, at the  
intersection of AI and psychology,  
to model behavior and knowledge  
in order to generate customized  
learning experiences.  
Juan Cruz Viotti is cofounder of  
Intelligence.AI. In addition to leading  
his own open source lab, Sourcemeta,  
based on award-winning research  
at the University of Oxford, he leads  
the desktop engineering team at  
Postman and collaborates with the  
JSON Schema organization.  
Twitter\: @oreillymedia  
linkedin.com/company/oreilly-media  
youtube.com/oreillymedia Unifying Business, Data, and Code  
# Designing Data Products with JSON Schema  
# Ron Itelman and Juan Cruz Viotti  
Beijing Boston Farnham Sebastopol Tokyo  
BeijingBoston Farnham Sebastopol Tokyo Unifying Business, Data, and Code  
by Ron Itelman and Juan Cruz Viotti  
Copyright © 2024 Intelligence.AI LLC. All rights reserved.  
Printed in the United States of America.  
Published by O’Reilly Media, Inc., 1005 Gravenstein Highway North, Sebastopol, CA 95472.  
O’Reilly books may be purchased for educational, business, or sales promotional use. Online editions are  
also available for most titles \(http\://oreilly.com\). For more information, contact our corporate/institutional  
sales department\: 800-998-9938 or corporate@oreilly.com.  
Acquisitions Editor\: Aaron Black  
Development Editor\: Corbin Collins  
Production Editor\: Ashley Stussy  
Copyeditor\: nSight, Inc.  
Proofreader\: Tove Innis  
Indexer\: WordCo Indexing Services, Inc.  
Interior Designer\: David Futato  
Cover Designer\: Karen Montgomery  
Illustrator\: Kate Dullea  
February 2024\: First Edition  
Revision History for the First Edition  
2024-01-24\: First Release  
See http\://oreilly.com/catalog/errata.csp?isbn=9781098145002 for release details.  
The O’Reilly logo is a registered trademark of O’Reilly Media, Inc. Unifying Business, Data, and Code, the  
cover image, and related trade dress are trademarks of O’Reilly Media, Inc.  
The views expressed in this work are those of the authors and do not represent the publisher’s views.  
While the publisher and the authors have used good faith efforts to ensure that the information and  
instructions contained in this work are accurate, the publisher and the authors disclaim all responsibility  
for errors or omissions, including without limitation responsibility for damages resulting from the use  
of or reliance on this work. Use of the information and instructions contained in this work is at your  
own risk. If any code samples or other technology this work contains or describes is subject to open  
source licenses or the intellectual property rights of others, it is your responsibility to ensure that your use  
thereof complies with such licenses and/or rights.  
978-1-098-14500-2  
\[LSI\] Table of Contents  
Preface. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . xi  
1\. 2. The Need for a Unifying Data Strategy. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1  
Your Quest for Data-Driven Breakthroughs Begins 1  
There Are Usually Multiple, Conflicting North Stars 2  
The Good, the Bad, and the Ugly of Data Problems 3  
The Problem with Problems 7  
Unifying Concepts\: The Key to Innovation 9  
What a Unifying Data Strategy Will Do for Agile 11  
Defining Being Agile 12  
Agile Theater 13  
Agile, Waterfall, and Unifying 13  
Defining a Unifying Data Strategy Approach 14  
Understanding the Phrase Being Data Driven 15  
To Be Data Driven, Be Data Centric 16  
Bottlenecks Preventing Teams from Being Data Driven 17  
This Book’s Project\: Intelligence.AI Coffee Beans 18  
Summary 19  
The Lingua Franca of Data\: JSON. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21  
Introducing JSON 21  
A Simple JSON Example 23  
JSON Viewing and Authoring Tools 24  
Overview of JSON Grammar 26  
Booleans 27  
Numbers 27  
Strings 27  
Arrays 28  
iii3\. 4. 5. Objects 29  
Null 31  
Learning More 31  
Minification 32  
Alternative Representations 34  
Creating a JSON Document 36  
A Product Entry 36  
A Store Order 37  
Summary 38  
Data-Centric Innovation\: A Guide for Data Champions. . . . . . . . . . . . . . . . . . . . . . . . . . . 39  
Data Transformations Require Data Champions 40  
The Rise of the Data Product Manager 42  
Alignment Is a Journey, Not a Destination 43  
Evaluating Alignment from a Holistic Perspective 43  
The Goal Isn’t Alignment, It’s Effective Alignment 45  
Strategies for Setting Up Teams for Success 46  
Incorporating a Product Management Mindset 48  
Defining Data Users’ Needs 49  
Defining Product Features 50  
Defining and Measuring Success 52  
Unifying Versus Aligning 52  
Summary 54  
Concept-First Design for Data Products. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Packaging and Products\: An Example Using Coffee The Four Facets of a Data Product Getting Started with Concept-First Design A Blueprint for Unifying 64  
Mapping the Conceptual Terrain\: Assessing Concepts 57  
59  
60  
63  
65  
Facilitating Assessments of Conceptual Alignment Across Technical and  
Nontechnical Teams 67  
Smooth Is Slow, Slow Is Fast 69  
Summary 70  
A Universal Language for Data. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . What Is JSON Schema? 74  
What Is a Schema? 74  
The Building Blocks of JSON Schema Vocabularies and Dialects 75  
Meta-Schemas\: Schemas That Describe Other Schemas 73  
75  
76  
Understanding JSON Schemas 76  
iv | Table of Contents6\. 7. Step 1\: Determining the Schema Dialect\: The \$schema Keyword Step 2\: Determining the Schema Vocabularies Step 3\: Understanding Schema Vocabularies Step 4\: Understanding Schema Keywords JSON Schema as a Recursive Data Structure Referencing Schemas 87  
What does duplication look like? Local referencing 88  
Remote referencing 90  
Your First JSON Schema Project Writing a Schema\: Step by Step 78  
79  
81  
82  
86  
87  
91  
91  
Generating a Web Form 95  
Summary 97  
The Art of Alignment. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Enemies of Alignment\: Ambiguity and Assumptions Ambiguity\: The Culprit in the Illusion of Communication 99  
100  
101  
Assumptions\: Ambiguity’s Best Friend 102  
Defining Success\: Symmetry Between Concepts and JSON Schema Equals  
Minimal Ambiguity 102  
Illuminating Misalignment with a Concept Compass 104  
Step 1\: Harmonizing the What 105  
Step 2\: Harmonizing the Way 106  
Step 3\: Harmonizing the How 108  
Harmonized Concepts 109  
Validating Concepts\: Belief Scoring and Hypotheticals 111  
Counterfactuals 111  
Belief Scoring 112  
Summary 113  
The Science of Synchronization. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 115  
An Introduction to Thinking in Networks 116  
Example of Thinking in Networks\: Athletes Versus Artists 116  
Graphs\: The Visual Language of Networks 117  
Networks of Entities\: Knowledge Graphs 118  
A Simple Knowledge Graph 119  
Challenges with Knowledge Graphs 119  
Aligning Knowledge for the 99% 120  
Fundamentals of CLEAN Data Governance 120  
Collaboration 122  
Knowledge 123  
Business Logic 124  
Table of Contents | v8\. 9. Activity 124  
CLEAN Data Governance in Practice 125  
The Four Facets of Data Products and CLEAN 126  
The Four Horsemen of Data Death 127  
Ignorance 128  
Siloed Incentives 128  
Shortsightedness 128  
Indecisiveness 128  
The Power of Design in Collaborative Networks 129  
Summary 130  
The Two Fundamental Operations of Schemas. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133  
Validating the Structure of Data 134  
Using an Online Validator 135  
Validation Example 136  
JSON Schema as a Constraints Language 137  
Boolean Schemas 139  
Heterogeneous Data Structures 140  
The format Keyword 142  
Using Annotations to Define Meaning 144  
Annotation Extraction Example 144  
A Simple Use Case\: Deprecations 145  
Runtime Extraction 146  
Standard Output Formats 148  
Revisiting the format Keyword 150  
Using an Online Validator 151  
Thinking in Schemas 151  
Summary 152  
Illuminating Pathways of Acceleration. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153  
How Ambiguity, Knowledge Gaps, and Blind Spots Influence Decisions and  
Progress Toward Goals 155  
Which Is Bigger\: Greenland or the US? Mapping Pathways of Processes and Progress Measuring Progress Toward Goals 157  
Defining Decisions and Steps with Process Maps How Process Maps Reveal Ambiguity Visualizing and Removing Ambiguity in Processes Enriching Process Maps with Annotations Process Maps Reveal Innovation Opportunities 156  
157  
158  
159  
160  
162  
163  
Summary 164  
vi | Table of Contents10\. 11. Spectrums of Success. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 165  
An Introduction to Knowledge Frameworks 166  
Knowledge Experiences and Pathways 167  
A Tool for Designing Knowledge Experiences 169  
From Structured Knowledge to Computational Knowledge 171  
Success Spectrums 172  
Mapping Progress and Value 172  
Visualizing and Adding “Next Best States” 173  
Removing Blind Spots 174  
Embracing Multiperspective Design and Road Maps 176  
Defining KPIs for Success Measures and Metrics \(Assessments\) 178  
Using Demons and Magical Thinking for Innovation 179  
Faster Horses 180  
Imagining Magical Possibilities 181  
Problem Landscapes\: Quantifying Pain Points Threatening Value 182  
Nudges\: The Right Information at the Right Time 183  
A Real-Life Problem Landscape and Demon Example That Led to a Unified  
Data Product Model 184  
Understanding the Problem Landscape 184  
The Staggering Impact 185  
A Meeting of Minds and the Birth of a Solution 185  
Beyond Data Products\: Data Product Management 187  
The Circular Nature of Unifying 188  
Summary 189  
Deploying a JSON Schema Registry. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 191  
Schemas Over HTTP 191  
Step 1\: Setting Up a GitHub Repository 192  
Creating a GitHub Repository 192  
Uploading Your First Schema 193  
Step 2\: Deploying to Cloudflare Pages 195  
Creating a New Cloudflare Pages Website Project 195  
Step 3\: Configuring HTTP Headers 200  
Inspecting the Current HTTP Headers 201  
Declaring Custom HTTP Headers on Cloudflare Pages 201  
Checking the Results 202  
Step 4\: Creating a Landing Page 204  
Adding an HTML Entry Point 204  
Step 5\: Adding a Custom Domain 205  
Configuring a Custom Domain in Cloudflare Pages 206  
Setting Up a CNAME DNS Record 208  
Checking the Results 209  
Table of Contents | vii12\. 13. Best Practices 210  
Schemas Are Immutable 210  
Adopt a Versioning Strategy 210  
Summary 211  
Designing Data Products Using JSON Schema. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 213  
First Facet\: Data 214  
An Example CSV Dataset 214  
A JSON Row Representation 215  
Second Facet\: Structure 215  
General-Purpose Concepts 215  
Application-Specific Concepts 220  
Dataset Entries 220  
The Dataset Schema 221  
Third Facet\: Meaning 222  
Timestamp 223  
IP Address 223  
Email 224  
US State 224  
Currency 225  
Price 226  
Milestone 227  
Analytics Entry 227  
Fourth Facet\: Context 228  
The Signup Analytics Schema 229  
Summary 229  
Automated Schema Extraction 229  
Next Steps 231  
Extending JSON Schema. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 233  
Simple Case\: Unknown Keywords 234  
Extracting Unknown Keywords as Annotations 234  
Pros and Cons of This Approach 235  
Complex Case\: Authoring Vocabularies 236  
The JSON Schema Vocabulary System 236  
Step 1\: Writing a Specification 237  
Step 2\: Writing a Vocabulary Meta-Schema 241  
Step 3\: Extending an Implementation 244  
Consuming Vocabularies 247  
Defining a Dialect 247  
Making Use of the Dialect 249  
Example\: Extracting Annotations with Hyperjump 249  
viii | Table of Contents14\. 15. Summary 251  
Introducing JSON Unify. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 253  
Introducing the Dataset Vocabulary 253  
Revisiting the Signup Analytics Example 254  
JSON Schema Bundling 255  
The Bundling Process 258  
Bundling Our Example Data Product 259  
Referencing Remote Data 261  
The Problem of Streaming JSON 262  
Introducing JSON Lines 262  
Extracting Meaning 263  
A Simple Example 263  
Using Logic Operators 264  
The Signup Analytics Example 265  
Dataset Lineage 266  
Filtering 267  
Transforming 268  
Aggregation 269  
Summary 271  
Principles of Designing Intelligence. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 273  
Your Unifying Journey So Far 273  
A Constellation of Deeper Principles Guides Unifying 274  
1\. The Principle of Alignment 275  
Transforming the Abstract to Concrete 275  
What You See Can Kill You, and the Same Is True in Data 276  
2\. The Principle of Information 278  
Understanding Uncertainty 278  
3\. The Principle of Learning 280  
Defining Learning 280  
Defining Errors 282  
4\. The Principle of Integrated Simplicity 282  
Complexity Reduction 282  
Decomposition 283  
Compression 283  
Memoization 283  
Integrating in Communication Networks 283  
5\. The Principle of Continuums 284  
Making Things Measurable 284  
The Dangers of Misusing Measurements 284  
A Continuum Example for a Control Strategy Problem 285  
Table of Contents | ix16. 6\. The Principle of State Transitions 286  
A Simple State Machine 287  
Simplifying State Transitions 287  
7\. The Principle of Decidability 288  
What Is Decidability? 288  
Two Key Approaches to Problem Solving 289  
Making Informed Decisions 289  
Real-World Decidability to Reduce Misalignment in Teams 290  
8\. The Principle of Heuristics 290  
Awareness and Ethical Considerations 291  
Connection to Decision Making in Business 292  
9\. The Principle of Mastery 292  
Levels of Mastery in Knowledge 293  
Strategies for Mastery 294  
10\. The Principle of Wisdom 295  
Summary 296  
Toward Unified Intelligence. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 297  
Functional Artificial Intelligence 298  
Your AI Is Only as Good as Your Data 298  
Beware Illusions Within Vetting Processes 299  
Question Assumptions 299  
Collective Intelligence 299  
Collaborative Intelligence 301  
Unified Intelligence 302  
Collaborative Learning Networks 302  
Personalized Knowledge 303  
Anticipatory Design\: Personalization and Digital Twins 305  
Codifying Principles of Intelligence 306  
Continuous Human–Machine Learning Loops 308  
Applying Wisdom in Practice 308  
Conceptual Zoomability 309  
Wisdom Graphs\: Connecting Concepts, Actions, and Outcomes 311  
Cognitive Primitives\: Standardizing Cognitive Experience Design 312  
The Value of Unifying 314  
Prioritize Knowledge Before AI 314  
A Tale of Simple Knowledge Versus Complex Intelligence 315  
Follow the Principle of Integrated Simplicity 315  
Summary 315  
Going Beyond This Book 316  
Index. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 317  
x | Table of Contents Preface  
In the 1840s, a Hungarian physician named Ignaz Semmelweis encountered a per‐  
plexing challenge while working in the maternity clinic at the General Hospital in  
Vienna. A significant number of women were succumbing to a mysterious ailment  
known as “childbed fever,” which plagued many European hospitals.  
Semmelweis made a striking observation\: the maternity ward overseen by male  
doctors had a significantly higher mortality rate than the one managed by midwives.  
Furthermore, he noticed that doctors often proceeded directly from performing  
autopsies to examining expectant mothers.  
After a colleague pricked his own finger while doing an autopsy, resulting in the  
colleague falling ill and eventually dying, Semmelweis had a revelatory moment\:  
perhaps what killed his colleague might be also killing the women in childbirth.  
Semmelweis theorized that contaminants from the cadavers that doctors were oper‐  
ating on and using to teach medical students might be transferring to the women,  
leading to the fever. To test this hypothesis, he implemented a policy in 1847 that  
required doctors to wash their hands with a chlorine solution to eliminate what he  
called “cadaverous particles,” before examining pregnant women.  
Following the implementation of this handwashing policy, the maternal mortality rate  
in the doctors’ ward plummeted from 18% to a mere 2%. However, Semmelweis’s  
ideas were met with skepticism from the medical community because they challenged  
the scientific beliefs at the time, and germ theory had not yet been developed.  
Semmelweis could offer no theoretical explanation for his findings, and he was  
mocked and ridiculed. In 1865, Semmelweis suffered from a nervous breakdown,  
resulting in his being committed to an asylum in Vienna by his colleagues, where he  
was beaten by guards and tragically died from a gangrenous wound on his right hand  
just 14 days later, at the age of 47.  
xi The story of Ignaz Semmelweis offers a few valuable insights\:  
Human behavior is constrained by bias  
Embracing new perspectives often challenges our deeply held beliefs. Such  
changes are frequently met with resistance—even from those equipped with  
knowledge and influence. It underscores the profound impact of cognitive bias  
and societal norms on human judgment.  
Interconnected systems are impacted greatly by hygiene  
The vast and intricate systems we see, such as hospital protocols or childbirth  
procedures, can be dramatically influenced by elements so minuscule they’re  
often invisible, such as germs. This highlights the delicate balance and intercon‐  
nectedness of our world, from the microscopic to the grand scale.  
Simple actions can have massive ripple effects  
At times, the most straightforward measures, like handwashing, become our  
most potent solutions. Understanding the methods to mitigate tiny threats can  
prove pivotal, with ramifications felt on a monumental scale.  
# What You Can’t See Can Kill You,  
# and the Same Is True for Data  
The transformative shift in our understanding of disease causation can be dated back  
to the 1860s. Louis Pasteur’s revolutionary experiments demonstrated that microor‐  
ganisms were responsible for fermentation and spoilage, laying the foundation for  
germ theory and paving the way for monumental advancements such as vaccines,  
antiseptics, and sterilization techniques.  
In marked contrast, Ignaz Semmelweis made essential observations decades earlier  
but remained largely overlooked due to his lack of a robust scientific theory. The  
divergence in their legacies—Pasteur’s transformative influence versus Semmelweis’s  
limited recognition—emphasizes the critical need for both theoretical and practical  
foundations in tackling complex problems.  
Unifying Business, Data, and Code seeks to bridge this very gap in the field of organi‐  
zational data management and the design of intelligent systems. We aim to furnish  
you with both a robust theoretical framework and actionable practical tools, applica‐  
ble whether you’re brainstorming strategies on a whiteboard or coding sophisticated  
algorithms.  
Diverging from books that concentrate on either technical or managerial facets of  
data and intelligent system design, Unifying Business, Data, and Code takes a holistic  
stance that merges both strategic perspectives. We’ve discovered that a technically  
sound strategy lacking managerial integration is doomed to fail—and the reverse is  
xii | Preface equally true. This synthesis enables you to make better-informed decisions, effectively  
bridging the divide between IT and business strategy.  
Just as neglecting basic hand hygiene had devastating repercussions in Semmelweis’s  
time, modern organizations face concealed yet significant risks from poor data man‐  
agement. In essence, the primary challenges compromising your organizational data  
hygiene can be distilled into three categories\:  
Ambiguity  
There are multiple possible interpretations.  
Knowledge gaps  
Missing information obstructs problem solving.  
Blind spots  
There is a lack of awareness of ambiguity and knowledge gaps and their effects  
on organizational outcomes.  
This book will guide you through the process of identifying poor data hygiene and  
the root causes of misalignment that it leads to within your organization. Armed  
with this understanding, you’ll be equipped to drive innovation and transformation  
through a strategic data management approach, unlocking the benefits of intelligent  
system design for superior results.  
# Hidden Threats to Organizations\: A Modern Parallel  
In the expansive world of organizational dynamics, hidden levels of granularity  
shape our actions and decisions, yet remain unseen in our daily routines. This book  
journeys into these enigmatic depths. True organizational coherence demands the  
dexterity to zoom out, transcending individual roles and looking at the vast networks  
that knit an organization together. At the same time, mastering the finesse to “zoom  
in” becomes crucial to tackle nuanced data challenges. Like the invisible germs Sem‐  
melweis grappled with, these subtle issues can reverberate and escalate unpredictably,  
leading to profound consequences.  
As an example, imagine a retail company using data analytics to forecast demand.  
A column in the database is ambiguously labeled as Total Sales Revenue. An analyst  
assumes this means Net Sales, the revenue after returns and discounts, but it actually  
represents Gross Sales, the revenue generated before any expenses. This simple misun‐  
derstanding skews the demand forecast, as the report doesn’t take into account the  
item’s terrible quality and high return rates.  
The company ends up overstocking the flawed items and understocking good ones.  
Inventory costs balloon, customers are left dissatisfied and lose trust in the brand.  
The flawed decision making results in a hunt for who to blame for the error, and  
as the culture becomes toxic, top performers who care about the company leave a  
Preface | xiii vacuum of expertise and talent. Like a house of cards, a single ambiguous label can  
lead the entire organizational strategy to crumble.  
Central to our discussion is the idea of concepts, shown in Figure P-1, serving as  
the foundation of our unifying methodology. While a deeper exploration awaits in  
later sections, for now you can think of concepts as the vital atoms whose unique  
configuration and combination creates the elements of our everyday experiences at  
the second level of granularity shown in Figure P-1\: language, processes, and decision  
making.  
Consider data products, shown in Figure P-1, to be our metaphorical “handwashing”  
solution. Although our unifying principles help pinpoint ambiguity, knowledge gaps,  
and blind spots, it’s data products that, much like a sanitizing solution, actively  
cleanse and address these issues in practice.  
Imagine your data as a high-quality product on a store shelf. It should be well crafted,  
easy to use, and comprehensive. In this book, you’ll learn how to elevate your data to  
that level of quality. We’ll guide you through a standardized process that packages the  
structure, meaning, and context along with the data itself.  
Once your organization begins designing high-quality data products, the benefits  
of implementing data hygiene can be quite transformative, freeing up teams from  
putting out fires in a chronically troubled system and enabling them to focus on  
creating business value, enhancing efficiencies, and innovation excellence.  
Additionally, the principles and methodologies we’ve discussed so far set the founda‐  
tion for something even more powerful\: unified intelligence, which is applying the  
unifying methodology to human and machine learning system design. Chapter 15  
introduces unified intelligence. However, before we can even begin to think of using  
the principles of unifying with AI, we need to get our data in good shape.  
# Your AI Is Only as Good as Your Data  
The axiom “Your AI Is Only as Good as Your Data” serves as a critical pillar of  
this book, highlighting the inextricable link between data quality and AI efficacy.  
Our framework builds on the groundbreaking contributions of seminal figures in the  
field—Claude Shannon’s information theory, Alan Turing’s computational models,  
and Shane Legg and Marcus Hutter’s advancements in reinforcement learning. Their  
collective insights merge seamlessly into our comprehensive methodology, which we  
will explore in detail in Chapter 15.  
Data scientists leverage rigorous methodologies and empirical reasoning to dissect  
complex challenges and represent them in a structured format. This facilitates the  
deployment of machine learning algorithms and the construction of predictive mod‐  
els. In this book, we introduce the concept of designing intelligence—a synthesized set  
xiv | Preface of best practices aimed to equip both technical experts and managerial staff with a  
robust skill set in data-centric problem solving.  
Figure P-1. Three levels of granularity are shown in this illustration, each with issues  
that the unifying methodology will address at each level of granularity. The key activity  
you will be learning is to identify and minimize ambiguity, knowledge gaps, and blind  
spots to align all three levels.  
Preface | xv Adopting these best practices doesn’t merely set the stage for successful AI initiatives;  
it transforms your entire organizational data culture, cultivating a fertile ground for  
data-centric innovation across your organization grounded in principles of designing  
intelligence.  
# Aligning Problem-Solving Strategies, Data, and AI  
Reinforcement learning serves as a critical pillar in understanding principles of design‐  
ing intelligent systems, guiding decision-making strategies that oscillate between  
exploration for new knowledge and exploitation of existing knowledge. As illustrated  
in Figure P-2, this dynamic reflects human and organizational tendencies to balance  
effort against reward, thereby shaping the innovation and efficiency strategies of  
companies.  
Figure P-2. This diagram presents a cycle of decision making based on outcomes from  
exploiting current data and exploring new data. Organizations or individuals can use  
this model to determine when to rely on existing knowledge \(exploit\) and when to seek  
out new information or try new approaches \(explore\).  
xvi | Preface Too often, organizational leaders are ensnared in a narrow, top-down mindset that  
prioritizes exploitation strategies over exploration. This culminates in vague visions  
that rarely manifest into tangible innovation. When these approaches fall short, it’s  
usually the workforce that suffers the consequences, from blame and job loss to  
unsettling structural shifts. This book offers a suite of strategic and technical tools  
aimed at breaking this detrimental cycle, moving beyond short-term fixes to achieve  
sustainable progress.  
This book encapsulates our insights from personal exploration and exploitation jour‐  
neys—knowledge we find crucial to share. We’re deeply grateful for your investment  
in this work. Our aspiration is that, by the end, the principles we unveil will resonate  
so deeply that their application becomes as intuitive and vital as washing your hands.  
# A New Paradigm to Optimize Data Management and  
# Business Strategy for the Age of AI  
Recognize that unlearning is the highest form of learning.  
—Rumi, Persian poet  
Unifying challenges conventional approaches with a cutting-edge approach\: it uses  
principles from data science used in problem solving to optimize data and knowledge  
for creating business value. This strategy ensures that your organization will be  
maximally primed for success in AI endeavors.  
Whether you’re dealing with human decision making or computational systems, this  
book offers a practical blueprint for smarter operations\:  
• Strategies and technologies unifying data management and business strategy are  
•  
presented in Chapters 1–14.  
•  
• The foundational theoretical principles from the fields of artificial intelligence,  
cognitive psychology, that were used to create the unifying methodology, are  
covered in Chapter 15.  
•  
• Building upon your unified data management and business strategy and the  
principles of designing intelligent systems, Chapter 16 explores different ways to  
apply unifying with AI.  
In the pursuit of understanding and harnessing the power of data for business strat‐  
egy, it’s crucial to keep an open mind—to entertain various hypotheses and embrace  
the uncertainty created when experiencing new ways of thinking.  
As Hala Nelson asserts in Essential Math for AI \(O’Reilly, 2023\), “Data is the fuel that  
powers most AI systems” and “What I did not know, and learned the hard way, was  
that getting real data was the biggest hurdle.”  
Preface | xvii The methodology elucidated in this book empowers you to apply data science princi‐  
ples and problem-solving strategies effectively without needing to be a data scientist,  
ensuring that the data you create and collect is not only more accurate and useful, but  
also a closer reflection of reality.  
By embracing the principles you will learn in this book, you will not just be able  
to solve existing problems better than ever before—you’ll preempt future ones from  
existing in the first place.  
# The Origin Story of Unifying  
Driven by his work in AI within the edtech sector, Ron harbored an insatiable curios‐  
ity to understand principles of designing intelligence that underpin both human and  
machine learning systems. He envisioned organizations not merely as static struc‐  
tures, but as dynamic ecosystems where information networks intermingle much like  
the notes in a symphony.  
Enter Juan, a leading expert in JSON, JSON Schema, and data serialization. Juan  
wasn’t just technically proficient; he had the unique ability to take Ron’s grand  
vision and turn it into a finely tuned reality. Juan’s award-winning research in data  
serialization at the University of Oxford revealed he could apply the methodology all  
the way down to the binary level and all the way up to gold-standard protocols for a  
global-scale data specification.  
Our partnership was nothing short of magical—akin to a musical band discovering  
perfect harmony among its members. Together, we embarked on an unceasing jour‐  
ney of growth and innovation, each challenging and enriching the other’s domain  
expertise. This book represents the zenith of our collaborative efforts, serving as a  
comprehensive guide that harmonizes overarching strategies with granular technical  
solutions for organizations.  
We wrote this book with a singular, transformative purpose in mind\: to empower  
people with bold guiding principles and technical strategies that can cut through  
seemingly impossible problems by unifying people, processes, and data across multi‐  
ple, and seemingly invisible, scales. We want to democratize this knowledge, to make  
it accessible and actionable for all, unleashing waves of creativity and ingenuity to  
transform the world for the better.  
The quest to explore and codify the principles of unifying led us into the realms of  
the mysterious and unknown. Sharing the wisdom we’ve garnered along this journey  
brings us the incomparable joy of serving a purpose far greater than ourselves.  
xviii | Preface Orchestrating Alignment at Organizational Scale  
Historically, the paradigm shift from attributing illnesses to supernatural causes to  
understanding them as results of bacteria and viruses wasn’t just a leap in knowledge.  
It required a massive change in practices, behaviors, and beliefs. In a similar vein,  
organizations today need to shift from seeing challenges as unsolvable mysteries to  
recognizing them as tangible problems that can be addressed with the right strategies  
and methodologies.  
Unifying serves as a vital framework designed to demystify the intricate challenges  
organizations face—challenges rooted in misalignment and silos among business,  
data, and coding teams. Informed by Figure P-1, our methodology orchestrates align‐  
ment across three crucial scales of granularity\: the organizational scale, which encap‐  
sulates the broad view of roles and networks; the human experience scale, focusing  
on language, processes, and decision making; and the data product scale, the frontline  
where data hygiene and quality are actively managed. As you journey through this  
book, we’ll explore these scales in granular detail, guided by the following pillars\:  
Theory  
Establishing the underpinning philosophical shift and vocabulary essential for  
evolving data management and intelligent systems. Think of this as the funda‐  
mental why and what that lays the foundation for change.  
Strategy  
Offering a blueprint for practical application, this high-level guidance navigates  
the how, outlining steps to implement the new paradigm across the scales.  
Tools  
These are your translators that convert business logic into actionable technical  
language. Comprising nontechnical, tactical activities, these tools serve as the  
bridge between strategy and implementation. Tools are tactics to eliminate ambi‐  
guity, knowledge gaps, and blind spots. However, there are multiple ways to do  
this, and we provide you with templates and suggestions.  
Implementation  
This is the doing phase where coding practices are employed to manifest the  
methodology in real-world, technical environments.  
By seamlessly merging theory, strategy, tools, and implementation, unifying elevates  
your organization’s approach to data management and designing intelligent systems  
to unparalleled heights. This is not just about identifying the pitfalls of poor data  
hygiene—like ambiguities, knowledge gaps, and blind spots—but about systemati‐  
cally rectifying them at every scale of your organization.  
Preface | xix Unifying transcends silos, enabling a holistic alignment that harmonizes the macro  
view of organizational roles and networks with the nuanced details of human  
experiences and data product quality. The ultimate takeaway? A transformative  
impact that not only optimizes your data for AI applications but also fuels a culture  
of ceaseless innovation and excellence. You’ll be able to navigate the labyrinth of  
challenges with the finesse of a maestro, orchestrating a symphony of meaningful  
change.  
The question isn’t whether you can afford to implement these strategies; it’s whether  
you can afford not to.  
# Conventions Used in This Book  
The following typographical conventions are used in this book\:  
Italic  
Indicates new terms, URLs, email addresses, filenames, and file extensions.  
Constant width  
Used for program listings, as well as within paragraphs to refer to program  
elements such as variable or function names, databases, data types, environment  
variables, statements, and keywords.  
This element signifies a tip or suggestion.  
This element signifies a general note.  
This element indicates a warning or caution.  
xx | Preface O’Reilly Online Learning  
For more than 40 years, O’Reilly Media has provided technol‐  
ogy and business training, knowledge, and insight to help  
companies succeed.  
Our unique network of experts and innovators share their knowledge and expertise  
through books, articles, and our online learning platform. O’Reilly’s online learning  
platform gives you on-demand access to live training courses, in-depth learning  
paths, interactive coding environments, and a vast collection of text and video from  
O’Reilly and 200+ other publishers. For more information, visit https\://oreilly.com.  
# How to Contact Us  
Please address comments and questions concerning this book to the publisher\:  
O’Reilly Media, Inc.  
1005 Gravenstein Highway North  
Sebastopol, CA 95472  
800-889-8969 \(in the United States or Canada\)  
707-827-7019 \(international or local\)  
707-829-0104 \(fax\)  
support@oreilly.com  
https\://www.oreilly.com/about/contact.html  
We have a web page for this book, where we list errata, examples, and any additional  
information\: https\://oreil.ly/unifying\_business\_data\_and\_code\_1e.  
For news and information about our books and courses, visit https\://oreilly.com.  
Find us on LinkedIn\: https\://linkedin.com/company/oreilly-media  
Follow us on Twitter\: https\://twitter.com/oreillymedia  
Watch us on YouTube\: https\://youtube.com/oreillymedia  
Preface | xxi Acknowledgments  
Ron Itelman would like to thank\:  
Stephanie Itelman, for showing me the strength of your character, the empathy  
of your heart, the wit in your mind, and the power of your being. You enabled,  
supported, inspired, and challenged me every step of the way. Thank you, baby, for  
giving me the gift of sharing life with you, and the experience of creating a family full  
of laughter and love.  
Reuven and Zehava Itelman, for giving me the opportunity to develop experience in  
experimenting with innovation strategies holistically across a business.  
Michael Kaplan, for being a mentor and a guide, teaching me the true meaning of  
wisdom.  
Stephanie Golinveaux, for being a beacon of light which has transformed my life for  
the better.  
Don Houde, for showing me what excellence in management means, and that there  
are those who will truly develop, nurture, and invest in their teams.  
Ole Bagneux, for believing in me enough to introduce me to Aaron Black, creating  
this opportunity and mentoring this book and me along the authoring journey.  
Jim Knickerbocker, PhD, for being a warrior and a thought leader; your belief and  
support in me has been pivotal in my professional development.  
Sean Goodpasture, for believing in me, for being a champion, mentor, friend, and  
brainstorming partner. You’re also greatly appreciated when presenting at a data  
conference featuring a T. rex to demonstrate the intersection of UX, psychology,  
and AI ;\).  
Anthony Marquardt, for investing your time and efforts in mentorship, demonstrat‐  
ing apex qualities that blend the art of business, technology, and empathy.  
Ben Rolnik, for opening up doors that have changed our trajectory and created  
opportunities to change the world.  
Shawna Strickland, who is a brilliant ray of calming, grounded light with sharp  
business acumen, exemplifying qualities I aspire to emulate.  
Karl Friston, whose encouragement banished my personal limitations that were  
holding me back from pursuing my personal missions in scientific inquiry with  
unabashed curiosity.  
Laura Pionek, for seeing something in me and giving me the opportunity to express  
my creativity and curiosity, a major catalyst on this journey.  
xxii | Preface Aaron Black, for taking a chance on us; you’ve changed our lives. Thank you for  
giving us the opportunity almost no one gets—the ability to write a book about one’s  
passion.  
Corbin Collins, for guiding us and this book through maelstroms to sunny shores.  
Dealing with authors is probably not easy, and you helped carry the weight of people’s  
dreams in your hands to make sure we succeeded.  
Juan Cruz Viotti would like to thank\:  
Darlene Colque Roman, for being by my side every evening I spent writing this book.  
You make me a better man, and your love brings so much joy, purpose, and balance  
to my life.  
Karina Viotti, for teaching me to believe in myself, have the courage to aim high, and  
that not even the sky’s the limit.  
Perla Viotti, for cultivating the habit of reading in me since I was a child and buying  
me countless O’Reilly books when I was a teenager.  
Julian Berman, Greg Dennis, Ben Hutton, Jason Desrosiers, Benjamin Granados, and  
Henry Andrews for welcoming me to the JSON Schema community and teaching me  
most of what I know about JSON and JSON Schema.  
Aaron Black and Corbin Collins, for providing so much help and guidance, making  
the daunting process of writing a book so smooth, enjoyable, and fun.  
Preface | xxiii CHAPTER 1  
# The Need for a Unifying Data Strategy  
Imagine yourself as a data strategy consultant, supporting executives with a spectrum  
of problems across diverse industries. In some cases, deadlines are not being met, and  
you are brought in to understand why. In other cases, the executives have a vision of  
how they want to change the world and want your thought partnership on rapidly  
designing, testing, and building a prototype to present at a global conference. As you  
work with executives to solve various problems, you begin to see patterns of what  
works and what doesn’t in the world of data, innovation, and AI, and you begin to  
wonder why.  
Ultimately, your role involves identifying the root causes of innovation bottlenecks  
and offering actionable recommendations to help organizations overcome these  
obstacles and achieve their objectives. If there were a set of principles and guidelines  
to make innovation outcomes more effective and reliable, that would enable you and  
your clients to be more successful.  
A unifying data strategy is a way to approach innovation through the lens of what is  
the minimal amount of collaborative effort with data that creates maximum business  
value? It doesn’t require or recommend any specific technology, but it does require  
you to think about data from a holistic perspective so that you can unify teams  
around a common language, understanding, and way of working together.  
# Your Quest for Data-Driven Breakthroughs Begins  
You’ve been hired by John, the CEO of a cutting-edge biopharma company, which has  
just secured significant venture capital to develop a groundbreaking new therapy that  
potentially cures a disease that kills millions of people a year.  
“The clock is ticking,” says John. “With each passing day, we risk falling behind in  
the race to develop a life-saving therapy, with billions of dollars in contracts at stake.  
1 I’ve promised our investors we are going to be data driven in everything that we do.  
The livelihoods of hundreds of employees are at risk if we don’t deliver, and, most  
importantly, millions of people are desperate for a cure.”  
John wants an assessment of the company’s most significant data problems and  
recommendations for a quick and effective solution. Despite having an exceptional  
data team of PhDs in data science and biology from prestigious universities, they  
are struggling with drug discovery, perpetually battling data issues and leaving them‐  
selves and the R&D teams that depend on them to spend time putting out fires,  
despite continued investments to increase the team size.  
The pressure is palpable. John is scheduled for a presentation in a few months to the  
organization’s funders and board of directors, and they are expecting to see a plan on  
how to address the situation and achieve the outcomes they are anticipating. Colossal  
pharmaceutical companies are scrambling to capitalize on novel technologies for  
previously untreatable diseases, and billions of dollars in contracts are hinging on  
the new therapy moving forward to the next stage of clinical trials with a fixed  
deadline. Every day lost to data problems jeopardizes the financial future of the  
organization. Hundreds of people’s livelihoods and the families they support are on  
the line. Everyone in the organization is working 12+ hours a day, knowing that if  
they succeed, they will be part of the team that changed the world and helped save  
millions of lives.  
You ask John to define the one thing that is most important in defining what suc‐  
cess looks like. You call this one thing a North Star, and it will help you assess  
whether people are focusing their efforts on alignment to the CEO’s vision. John  
confidently speaks about data-driven decision making to accelerate research and  
says that machine learning has the potential to save years and millions of dollars in  
R&D costs. The North Star is stated as\: we will have the most advanced data-driven  
capabilities for drug discovery. Your impression is that data will drive R&D, and you  
believe in the CEO’s vision.  
However, the North Star definition starts shifting as John makes comments about  
how the organization’s culture is R&D led, and it becomes clear that he has a nebu‐  
lous understanding of how data science works. John fumbles with his words, clearly  
uncomfortable that his statements aren’t holding up to much scrutiny. Not a big deal,  
you think. You reassure yourself and the CEO that together you can make the North  
Star definition clear and succinct.  
# There Are Usually Multiple, Conflicting North Stars  
While interviewing VPs and their subordinate directors about the North Star, you  
uncover striking discrepancies in their perspective on the importance of data science  
in guiding their work. The organization’s culture is indeed R&D led, but the CEO is  
2 | Chapter 1\: The Need for a Unifying Data Strategy saying the North Star is to be completely data-driven. The R&D team is focused on  
running biology experiments and doesn’t have any data management expertise.  
The data science and data engineering teams are entirely different parts of the orga‐  
nization, primarily used to support R&D by fixing data problems and handling  
data requests across the organization. R&D are the experts in their field, not data  
scientists. What does data driven even mean if R&D are the ones making decisions  
based on their intuition?  
The way the data teams view what problems data science will address and the strategy  
of how data science will be used to make data-driven decisions in R&D deviate  
significantly from the CEO’s way of thinking about the North Star. The more people  
you ask what the North Star is, the more it is becoming increasingly unrecognizable  
across departments and levels of the organization. When you question other execu‐  
tives about these disparate views, they dismiss the North Star as some aspirational  
and unrealistic phrase rather than the operational foundation for their goals and  
work.  
# The Good, the Bad, and the Ugly of Data Problems  
Digging deeper, you find business leaders making expensive decisions, investing in  
software and hardware that creates, curates, and disseminates data, only to find data  
teams saying that the data is mostly worthless because deeper and more significant  
problems are being ignored. The CEO is completely oblivious to the continuous data  
corruption plaguing the supposedly data-driven organization, lulled into a false sense  
of well-being by costly cloud data storage and compute bills. As the saying goes,  
garbage in, garbage out \(GIGO\).  
A VP privately tells you the biggest problem to solve is that the scientists are  
all working with data stored in their emails, PowerPoints, Excel spreadsheets, and  
comma-separated values \(CSV\) files in SharePoint. No one can see each other’s work  
or learn from each other. The VP is considering a cloud company’s consulting pitch  
for an enterprise data lake solution, complete with a knowledge graph, data catalog,  
and a host of other expensive enterprise tools that will cost millions of dollars over  
several years as part of a digital transformation project. The VP is told by these trusted  
experts that the company’s data will be totally under control, and they will be able to  
get the insights leaders want.  
Except for one problem\: it almost always never works out the way the data solution was  
sold. This usually has less to do with data and more to do with your organization’s  
strategy, or rather the lack of an effective unifying data strategy around how people in  
very different domains and with very different perspectives need to understand each  
other and work together.  
Your Quest for Data-Driven Breakthroughs Begins | 3 The problem boils down to the process of converting abstract business information  
to concrete results with the minimal amount of risk of errors. The business team says  
what they want, expecting a top-down progression as shown in Figure 1-1. If a dev and  
data team translates this without error, it is a successful data/code implementation  
that accurately represents a product to serve operational needs.  
In the world of data management, the true challenge isn’t technology but the human  
factor; people operate within their own unique silos, skewing perspectives. Bridging  
these gaps is crucial. Business leaders often think in top-down, solution-centric  
terms, prioritizing immediate problems like, “We need technology X for problem Y,”  
rather than delving into root causes, such as, “Why are our costs in Area Z so high?  
And how do we prevent the problem from occurring in the first place? And what else  
is being impacted by the problem?” This focus can solve immediate issues for a single  
unit but neglects the organization’s overall health.  
Conversely, data teams offer a bottom-up view anchored in logistical and technical  
realities. When projects simply get handed off to a data team for execution once the  
problem and solution have already been decided, perspective clashes occur, derailing  
timelines and budgets. The remedy is straightforward yet demanding\: align these  
perspectives before taking action. Clarify ambiguities, bridge knowledge gaps, and  
root out blind spots. By doing so, you’ll develop a unified roadmap, aligning what the  
business wants with what it actually needs, and ultimately finding the best solution.  
This way of thinking necessitates thinking about the problems of translating between  
the worlds of business and data as being in two distinct categories\:  
Top-down problems  
Strategies and tools are covered by the methodology in Chapters 4, 6, and 7.  
Bottom-up problems  
ters 9 and 10.  
The methodology’s tools and strategies address bottom-up approaches in Chap‐  
Additionally you will learn that what makes JSON Schema exceptionally useful is  
that it has two core functions\: validation, which is exceptionally well suited for  
top-down business/data translation problems, and annotation extraction, which is  
also extremely useful for bottom-up translation problem solving. JSON Schema is  
also human and machine readable, making it the ideal open source technology for  
your organization to implement a unifying strategy.  
4 | Chapter 1\: The Need for a Unifying Data Strategy Figure 1-1. Unifying is about creating alignment and understanding of concepts as they  
flow between business and data teams to meet different requirements by minimizing  
ambiguity, knowledge gaps, and blind spots. While the example in this section describes  
a top-down direction, the next section, “The Problem with Problems,” explores what a  
bottom-up approach looks like. The goal of unifying is alignment in both directions.  
Your Quest for Data-Driven Breakthroughs Begins | 5 Typically, these large-scale enterprise projects take years to successfully implement.  
People leave, and processes are implemented that people either work around or never  
learn. There is resistance to doing things in new ways and learning new complex  
software. Taxonomist processes can become bottlenecks, database architectures are  
debated, business priorities and competitive threats change, and meanwhile, moun‐  
tains of new, messy data begin to collect at a faster pace than the data management  
project tasked with taming it can handle. In five years, the new management team  
that replaced the old one in a reorg goes through it all again with a fresh budget,  
believing that they will have a better solution because of some new technology  
paradigm and trend, but they never achieve the Nirvana-like data state everyone  
craves.  
In the context of JSON Schema, validation and annotation extrac‐  
tion serve distinct but complementary roles. Validation is the  
process of ensuring that a given JSON document adheres to the  
rules and constraints defined in the schema, such as data types  
or required properties. This helps in maintaining data integrity  
and consistency. On the other hand, annotation extraction involves  
pulling out additional metadata or descriptive information from  
the JSON document, such as field descriptions or default values.  
While these annotations do not impact the validation process, they  
provide extra context that can be used for generating documenta‐  
tion, tool tips in a user interface, or other supplementary function‐  
alities. Together, validation and annotation extraction contribute  
to both the robustness and the usability of JSON-based data struc‐  
tures. You will learn more about JSON and JSON Schema from a  
technical perspective in Chapters 2 and 5, and cover validation and  
annotations in Chapter 8.  
If teams are not collaborating well, and if leaders and employees are not aligned in  
their data strategy, why would implementing an extremely complicated enterprise  
solution go smoothly, quickly, or successfully? That’s what unifying is about—hence,  
the title of this book. It is a data strategy that focuses on the most effective and  
simplest way to begin data-centric projects\: getting people aligned before hitting the  
gas pedal.  
Going faster in the wrong direction isn’t progress. Your teams need  
to know where they are going, why their efforts are important to  
the goal, and how they can work well together.  
6 | Chapter 1\: The Need for a Unifying Data Strategy The Problem with Problems  
You are excited that your work can help save lives, you are inspired by people’s  
passion, and you believe in the company’s understanding of the value of data. You  
hear the stakeholders’ accounts of what the biggest problems are and begin pouring  
your creativity and ingenuity into searching for a solution. You conduct interviews,  
create road maps, and begin building a prototype, thinking you’ve created a truly  
amazing thing that the company will celebrate.  
Except you find out after months of building your alpha version that stakehold‐  
ers didn’t tell you about some other problem that only surfaced when lower-level  
employees \(who weren’t part of your interviews\) started using the application, and  
it totally invalidates the approach of your solution. You suddenly have to rethink  
everything from scratch, and all of your previous work was wasted. Welcome to  
innovation.  
Agile is a popular methodology emphasizing flexible and iterative approaches to  
product development and project management. Being Agile means being able to  
get feedback as quickly as possible about what fails and why, which is the most  
important feedback you can get. Agility entails swiftly learning about failures and  
their causes, which is the most crucial information one can obtain. By identifying less  
successful ideas more rapidly, you can conserve time and effort, thereby accelerating  
the discovery of effective solutions.  
In order to get feedback as quickly as possible, you decide that instead of building  
a new coded prototype, you are going to design a paper prototype, drawing out the  
solution on a piece of large paper with a marker and asking people to click on the  
paper buttons, moving to different pieces of paper to represent different screens.  
Everyone loves it, and you feel like a hero. Hooray! You build another prototype now  
that you have something validated—you’ve succeeded!  
Then, as you are going through the final stages of validation, a stakeholder suggests  
that you present your solution to the medical advisory board. You are informed of a  
legal requirement around a commonly used word which totally invalidates a major  
set of features in your previous work that you spent a ton of time testing.  
No amount of effort at being Agile will give you what you need if you are focused on  
the wrong problem—or don’t even know what problem you are trying to solve.  
This is what the problem with problems is\: How do you know which problems are the  
right problems to solve? This is especially true when dealing with organizations that  
have siloed perspectives and nonholistic interests. Leaders have budgets, head counts,  
and reputations to protect. Their problems are the most important to them.  
Your Quest for Data-Driven Breakthroughs Begins | 7 A critical error that organizational leaders often make is not knowing what type of  
problem they are trying to solve. If they attempt to solve a problem in a top-down  
manner, diving into solutions without truly grasping the problem, the efforts can  
be misguided. Rushing into solutions without proper comprehension—and merely  
being Agile and iterating quickly—does little if anything to guarantee success.  
Figure 1-2 shows where unifying can create alignment in problem solving. The  
depth of understanding and choosing the “right” problems and the right “way” to  
solve them makes all the difference. Determining which problems are the right ones  
involves understanding these problems in the context of bridging the worlds of  
conceptual \(business\) and technical \(data\) language and their operational outcomes  
\(symptoms\).  
Figure 1-2. Unifying is about giving data champions the capability to understand prob‐  
lems and translating them between business and data team perspectives, whether they  
require top-down problem-solving approaches or bottom-up problem-solving ones. The  
phrase “the problem with problems” serves as a reminder of this principle, highlighting  
the pitfalls of a hasty approach and the benefits of a thorough understanding.  
Effective problem solving starts with deep understanding. This involves recognizing  
how problems are connected across organizational networks and across conceptual,  
technical, or operational realms. Leaders need to understand the problem with prob‐  
lems, because if they try to address issues from a top-down approach when what  
is needed is a bottom-up approach, they are just reacting to symptoms and not  
addressing the root causes.  
8 | Chapter 1\: The Need for a Unifying Data Strategy Know what type of problem you are solving, concrete or abstract,  
before making a decision about how to solve it.  
If an organization operates in an Agile way to accelerate development before under‐  
standing the problem they are working on solving, what to prioritize, and why,  
then teams are building the wrong things faster. The problem with problems is the  
foundational problem to solve. Let’s examine what you can do to tackle it.  
# Unifying Concepts\: The Key to Innovation  
Concept-first design asks people to explain in plain language the business logic they  
use to achieve their goals, the problems they have, and with whom and how they  
collaborate. That business logic is translated into a simple pseudocode structure—  
simple enough for anyone to read, but structured enough that it can be used as  
a rough guideline for building systems. In short, before getting into designing or  
building, you ask people to describe what key concepts are important to the tasks they  
accomplish at work and why.  
Vital knowledge often exists in people’s heads without a shared map to help align  
understanding and decision making. The only way to see differences in understand‐  
ing concepts and language may risk people’s ability to collaborate effectively together  
is to take the fuzzy, implicit map in people’s heads, which teams believe they are  
aligned with, and turn it into a focused, external conceptual map.  
This process involves assessing and comparing three key aspects of how information  
is managed and utilized in your organization\:  
1.  
1\. The purpose and design of operational concepts used in business processes  
2.  
2\. Data structures and how they represent concepts utilized in business processes  
3.  
3\. Methods of communication to gain a comprehensive understanding of how  
concepts are conveyed and decisions are made  
By integrating these three aspects into a single map, you can visualize the connections  
between people, problems, objectives, and outcomes. This map helps to identify  
and fill knowledge gaps at an early stage. Without this map, individuals may be  
making costly and significant decisions without a shared understanding of their  
team’s current situation, their intended destination, or the strategies to get there.  
Making decisions to build things without a cohesive and comprehensive map is an  
easy way to fall into the trap of building the wrong thing faster.  
Your Quest for Data-Driven Breakthroughs Begins | 9 Creating a unified structural map of logic, goals, problems, and success metrics  
before designing, building, and testing software can save significant time and money,  
making your software development more efficient and cost-effective.  
Remember, the goal is to find faults as soon as possible. Staying at  
the conceptual level will enable you to move faster.  
Your focus is on capturing and defining the fundamental ideas, business logic, and  
objectives that underpin the system or application being developed. The aim is to  
ensure that all stakeholders are unified in their shared understanding of the core con‐  
cepts and that the design is aligned with the intended purpose and desired outcomes.  
The benefits of concept-first design are\:  
Conceptual clarity  
Key concepts, ideas, and principles are defined, including business logic, goals,  
and the problems that the system is intended to address.  
Early alignment  
Defining and clarifying concepts early in the development process prevents mis‐  
communications that could have required costly reworking later in the develop‐  
ment process.  
Holistic perspective  
Emphasis is placed on how information connects, flows, and is used outside of  
human operational silos.  
User-centric focus  
A strong emphasis is placed on understanding the needs and goals of end users.  
The design process is centered around user experiences to create solutions that  
are intuitive, effective, and satisfying for users.  
Create well-thought-out and purposeful solutions by starting with  
a clear understanding of the fundamental concepts and goals that  
drive the system or application. Start testing the concepts you and  
other stakeholders believe in, getting feedback in an Agile and  
iterative way. The more complex projects are, the more a deep  
understanding of the underlying concepts is critical to the success  
of the project.  
10 | Chapter 1\: The Need for a Unifying Data Strategy When one of the authors of this book, Ron Itelman, stumbled upon concept-first  
design and successfully used it, the results were shocking. All of the points of concep‐  
tual conflict and alignment were identified first, leaders were able to get teams on  
board with a single operational model. Nothing was designed or built until teams  
across silos could agree to what concepts meant, how they flowed, and what business  
logic they supported. The focus was simply can we agree to a set of concepts, how they  
are used, who uses them, and why? This is different from waterfall approaches, where  
everything is meticulously planned out to be built on a schedule.  
Building and implementing the new system went smoothly; there weren’t any friction  
points, and it was designed, built, and tested in three months. The system was so  
efficient at creating high volumes of high-quality, rich, and meaningful data that the  
private equity firm that bought the company paid a premium for the data alone. That  
experience led Ron to further research and develop an innovation strategy based on  
the foundation of unifying concepts across organizational networks.  
# What a Unifying Data Strategy Will Do for Agile  
The root cause of any problem that a company faces is not technology. It is the  
problem with problems—that leaders and teams are not unified in their language,  
understanding, or efforts to prioritize and solve the problems that prevent them from  
achieving goals that drive revenue, reduce costs, and create value.  
Historically, Agile was a set of principles resulting from frustrations  
with the highly structured way that software development contracts  
were written; there was no room to deviate from the agreed-upon  
work. This was nearly impossible, because as software develop‐  
ment work began, unexpected problems, needs, and perspectives  
emerged. If the developers only focused on the requirements, they  
would be delivering something that required going through lengthy  
contract negotiations. The developers and the stakeholders were  
often separated. The original Agile principles were about creating  
communication, iterating, and adapting quickly in order to learn  
what works and what doesn’t, and delivering something of value in  
a modular versus monolithic way.  
Many other books, strategies, and frameworks have been created to formalize Agile  
in their own unique ways, which this book does not cover. This book is the result of  
years of research into the top pain points of collaborating with data, and it proposes a  
data management strategy that aligns with the original Agile principles.  
What a Unifying Data Strategy Will Do for Agile | 11 Traditionally, teams work in their functional areas, but data is holistic, belonging  
to the entire organization. This is a primary reason why data teams often struggle  
with traditional ways Agile strategies are implemented in organizations. A unifying  
data strategy enables zooming out to identify and solve company-wide challenges of  
becoming data-centric in addition to zooming in to operate like a traditional Agile  
team, using a data-centric lens to drive business value.  
# Defining Being Agile  
No mechanism in nature or technology is more pervasive than the mechanism of feedback.  
—Bernard Friedland \(Control System Design, Prentice Hall, 2005\)  
If you ask 1,000 people what Agile is or how it works, you will get 1,000 perspectives,  
ranging from loose interpretations such as “Agile means you don’t need requirements  
and have a quick meeting every day for 15 minutes to talk about where you are  
blocked” and “Agile just means figuring out what works and throwing out what  
doesn’t,” to highly structured ones like “you need to measure everything in story  
points and measure velocity in spreadsheets, analyzing productivity every two weeks”  
and “you need to get the team certified and have dedicated Agile management  
experts.”  
For the purposes of this book, we will simplify what Agile means, and what an Agile  
data strategy means. This book defines the three primary ways of being Agile as  
follows\:  
Remove ambiguity  
Deeply understand problems, goals, and people, and identify what you know and  
don’t know. This knowledge usually comes from conversations with customers,  
stakeholders, your competitors’ customers, and UX research.  
Rapidly iterate  
Test what you can to validate or invalidate assumptions. This can be A/B testing,  
prototyping with Styrofoam or with code. The goal of iterating is to get feedback  
—which might be qualitative \(surveys and conversations that help explain where  
data cannot\) or quantitative \(numerical data from observations\)—as quickly and  
directly as possible to remove ambiguity.  
Adapt attention to value  
Aim to make progress rather than spending too much time setting priorities  
and getting stuck in debates. Adaptive attention means removing distractions and  
being willing to shift focus. Attention should always be aligned with what actions  
will yield the most business value and best results.  
12 | Chapter 1\: The Need for a Unifying Data Strategy Agile Theater  
If you do not change direction, you may end up where you are heading.  
—Lao Tzu, Chinese Taoist philosopher, 5th century BC  
When interviewing product managers, engineers, designers, and managers on chal‐  
lenges around being Agile, the conversations almost universally revolve around  
measuring velocity, missing deadlines, and shifting requirements as new information  
is gained. Thinking of velocity as productivity can be a trap; building the wrong  
things faster doesn’t equal success. Productivity for the sake of productivity doesn’t  
create value. Having stand-ups for the sake of stand-ups isn’t progress. If your Agile  
teams aren’t removing ambiguity, rapidly iterating, and adapting attention to what  
drives business impact and value, then your Agile processes are at risk of being  
mostly ritualistic theater.  
In organizations, responsibility is distributed among various stakeholders. Agile  
stakeholders collaborate to ensure products, processes, and services are not only  
reliable and functional, but that they also generate sustainable value. However, meas‐  
uring success solely through velocity points—an Agile metric that quantifies the  
amount of work a team can tackle during a single sprint—can cause unintended con‐  
sequences. This approach can incentivize engineers to manipulate how they assign  
and complete points, leading to a defensive, self-protective culture known as cover  
your ass \(CYA\) that does not create business value.  
Overemphasis on velocity metrics can encourage individuals to exploit the system,  
focusing more on inflating their stats—such as how many story points they’ve com‐  
pleted—rather than on genuine innovation. But the true goal of innovation isn’t  
about completing the most story points. It’s about creating business value, positively  
impacting colleagues, and serving customers effectively.  
# Agile, Waterfall, and Unifying  
Unifying sets itself apart. Rather than thinking of it as just another methodology,  
envision unifying as the “tuning fork” of project management. By introducing it  
before design or construction begins, it ensures that whether you opt for Agile or  
the waterfall methodology, your approach is fine-tuned for utmost efficiency and  
alignment. Think of it as continually adjusting a musical instrument to hit the right  
notes; unifying continuously calibrates direction and purpose to ensure harmony in  
execution, as shown in Table 1-1.  
Unifying aligns at the conceptual level to minimize the costly risks of misunderstand‐  
ings and mistakes. It forefronts collaboration and innovation, acting as a tool to  
determine the optimal methodology—be it Agile or waterfall—ensuring the highest  
chances of project success.  
What a Unifying Data Strategy Will Do for Agile | 13 Table 1-1. The benefits of Agile and waterfall methodologies, and how unifying compliments  
them  
Waterfall Agile With unifying  
Defined milestones and measures of  
Flexible to changes and improving  
progress from a macro perspective.  
goal setting at the micro perspective.  
Segments of delivery, such as  
factory or supply-chain processes,  
can be optimized independently.  
Allows segments to  
move autonomously, creating  
independence and integrity for  
individual unit responsibilities.  
Faster delivery, incremental  
development, and regular releases.  
Getting regular feedback by  
engaging stakeholders and end users  
throughout the development process,  
Agile ensures that the product  
evolves based on actual user needs.  
Continuously calibrates perspectives, with a  
focus of quantifiably knowing the right  
direction before taking action.  
Focuses on removing and reducing  
unnecessary effort by minimizing ambiguity,  
knowledge gaps, and blind spots.  
Serves as a translator between technical teams  
and business stakeholders using JSON Schema,  
ensuring a unified vision across both parties,  
thereby preventing costly misalignments.  
# Defining a Unifying Data Strategy Approach  
For analytics, data science, and machine learning to enable enhanced decision mak‐  
ing, they require high-quality data that represents business situations and outcomes  
accurately. Too often, data scientists are expected to comb through mountains of  
poor-quality data and miraculously extract insights when they should have been  
involved in decision making processes.  
Business leaders don’t know what they don’t know and are reluctant to take time  
that they don’t have to understand data science concepts. Meanwhile, data scientists  
frequently lack an understanding of the collaboration and business dynamics of  
finance, design, product management, and software development, isolated as they are  
in enigmatic realms of mathematical jargon and data tools.  
In this book we will explore the innovation challenges faced by organizations and  
the importance of embracing a data-centric innovation strategy. The lack of a shared  
understanding of goals, and the communication gaps between business leaders and  
data scientists, contribute to difficulties and may lead to investments in inadequate  
technology.  
Overcoming obstacles around data requires fostering a data-centric culture that  
emphasizes collaboration, gathering high-quality data, and the strategic involvement  
of data and data science teams. Understanding the problems around data helps  
organizations transform into truly data-driven powerhouses, ensuring that they can  
unlock the full potential of their data and achieve their desired outcomes.  
A unifying data strategy approach uses the three characteristics of being Agile—  
removing ambiguity, rapidly iterating, and adapting attention to value—and adds a  
few key factors\:  
14 | Chapter 1\: The Need for a Unifying Data Strategy Holistic connected perspective  
For data to be valuable, it needs to be connected across the organization. Data  
doesn’t belong to any one team; people come and go, teams are reorganized and  
shifted, but the data belongs to the organization. A unifying data strategy maps  
together the various functional business units, the data they collect, and why the  
data is important.  
Information flows  
For data to be usable, it must be able to flow and be combined and transformed.  
Understanding how data flows between teams with differing language, mental  
models, and problems, is critical.  
Minimal viable data \(MVD\)  
Data-driven decision making requires the right quality and quantity of data. The  
minimal viable data \(MVD\) is the smallest possible amount of high quality data  
necessary to make reliable predictions and drive value. Simply having a large  
volume of data isn’t sufficient if the quality is poor—as in GIGO.  
# Understanding the Phrase Being Data Driven  
Almost all organizations say they want to be data driven in order to maximize  
efficiency and optimize decision making. But what does this actually entail?  
Efficiency is the ability to achieve a desired outcome with minimal waste of time,  
resources, or effort. When an organization is aligned, it naturally streamlines pro‐  
cesses and eliminates redundant efforts. Teams can work seamlessly, reducing the  
risk of miscommunications, mistakes, and misunderstandings. This results in faster  
project completion times and more efficient use of resources.  
Effectiveness is the ability to achieve desired outcomes with superior degrees of  
accuracy or quality. Alignment can improve effectiveness by ensuring that everyone is  
harmoniously working toward goals and objectives in a focused way.  
An organization is data driven when it masters producing and analyzing data, ena‐  
bling decision makers to learn faster, make higher-quality predictions, and identify  
problems and opportunities sooner. In other words, they still are making decisions  
and balancing information with experience, but decisions are made with the highest  
quality data that they can use.  
This is the opposite of HIPPO, which stands for highest paid person’s opinion. HIPPO  
decisions are made when someone’s opinion is prioritized because of their senior‐  
ity rather than because data has been collected to evaluate whether opinions and  
assumptions are invalid. Because of reluctance to challenge HIPPO, HIPPO decisions  
tend to be tested only after time and money have been spent and things have gone  
Understanding the Phrase Being Data Driven | 15 wrong. Worse, poor HIPPO decisions often end up being blamed on the teams who  
are supposed to defer to senior employees.  
# To Be Data Driven, Be Data Centric  
Paradoxically, data is the most undervalued and deglamorized aspect of AI…We define,  
identify, and present empirical evidence on data cascades—compounding events causing  
negative, downstream effects from data issues—triggered by conventional AI/ML practices  
that undervalue data quality. Data cascades are pervasive \(92% prevalence\), invisible,  
delayed, but often avoidable.  
—Google Research, “‘Everyone Wants to Do the Model Work, Not the Data Work’\:  
Data Cascades in High-Stakes AI,” 2021.  
Having higher-quality data can have a significantly greater impact on the value of  
data when compared to higher volumes of lower-quality data. Good data is usually  
better than big data because its quality, relevance, and accuracy minimizes irrelevant,  
incorrect, or misleading information, and requires fewer resources to process.  
Good data makes it easier to communicate insights to stakeholders and facilitate data-  
driven decision making, reducing risks and creating true value that is reusable across  
the organization. When an organization values data as a critical resource and invests  
in the continuous production and maintenance of high-quality, feature-rich data in  
order to maximize operational efficiencies and effectiveness, then the organization  
can say that it is data driven.  
Certainly, using poor-quality data and asking data teams to find value without includ‐  
ing them in business decisions and innovation efforts is not being data driven.  
Unfortunately, the norm for many teams is using poor-quality data and not including  
data teams in decision making. Many organizations operate under the false assump‐  
tion that they are data driven when they are not. Here is a real-world example.  
A multibillion dollar global company invested a significant amount of money into  
their Salesforce system. Sales teams were required to log potential customer interest  
in a service. The analytics were showing that sales teams had a 30% closing rate,  
meaning that one out of three conversations resulted in a sale. However, upon further  
examination, that number was revealed to be completely meaningless!  
Salespeople don’t want to document every time they lose a sale, so they were only  
putting in sales data when they were confident they could make a sale. Some sales  
people were only entering that data when they were confident they could make a  
sale, and some simply avoided the task entirely. When sales were won or lost, few  
if any sales members logged information as to why, other than selecting a generic  
checkbox which was the default selection. From a business leadership perspective, the  
organization had invested a ton of money in Salesforce and had a lot of data, but  
after several years of collecting data, when they tried to predict who would buy what  
16 | Chapter 1\: The Need for a Unifying Data Strategy service so they could know who to focus on or what products to develop, they ended  
up with absolutely nothing that was usable from their hefty investments.  
In order to be data driven, companies must start by being data centric\: examining  
everything in your operational business processes to make sure that data really does  
live at the heart of your activities. In the previous example, this would entail having  
a designer optimize the Salesforce UI for intuitiveness and ensure that information  
could be leveraged effectively. In order to make sure that data capture is accurate,  
managers need to be trained to incentivize teams to capture data and how to get  
immediate value from accurate data.  
Data must always be thought of as the center of the universe.  
Here’s a checklist you can use to evaluate how data centric your organization is\:  
• How is data collection from employees managed?  
•  
• Is there someone responsible for owning data quality and a data-centric strategy?  
•  
• What investments have been made into training managers and teams about data?  
•  
• Are experiments and innovation efforts funded in order to learn how to create  
•  
value in exchange for data collection?  
• How granular is the data collected, and how is data quality measured?  
•  
# Bottlenecks Preventing Teams from Being Data Driven  
100% of customers are people. 100% of employees are people. If you don’t understand people,  
you don’t understand business.  
—Simon Sinek, Start with Why \(Portfolio, 2009\)  
Over the years, the authors of this book have researched the top pain points and  
bottlenecks that data teams face. The hard truth is that business leaders usually have  
little understanding of the complexities of managing data and little desire to feel like  
they aren’t experts, and they don’t really appreciate technology. What leaders care  
about is increasing profits, reducing costs, and growing as fast as possible. After  
that, they care about reducing risks. If you are lucky, an organization may have a  
philanthropic or employee development culture.  
Business leaders want their reports, dashboards, and insights, but they have no idea  
that the person they are asking to generate a report has to often dig through data  
swamps to find a thousand CSV files, not knowing who created them or why, or even  
what the table headers mean.  
Understanding the Phrase Being Data Driven | 17 Let’s imagine a business intelligence analyst gets instructions to generate a quarterly  
sales projection report. This report allows the finance team to make sure they are  
operationally healthy, can pay salary and other expenses, and can prepare reports to  
the SEC. Inaccurate projections can have legal consequences and huge impacts on  
shareholder price.  
First, the business intelligence analyst must meet with stakeholders, who almost never  
know what data exists or how it is generated. The analyst gets access to sensitive  
financial data stored in CSV, Excel, JSON, and other formats, digging through data‐  
sets with commonly used terms such as Revenue unaware that different teams may  
intend slightly different meanings for how revenue is calculated. For example, a sales  
team might define revenue as the total sale to a client, while an accountant might  
define it as the sale minus the salesperson’s commission.  
After digging through the data swamp, the analyst needs to set up more meetings  
to verify these meanings and ask which dataset is the source of truth. If the analyst  
is unlucky, they will not uncover the different meanings—only for the finance team  
to discover months later that something has gone wrong and that important and  
expensive financial decisions were made on the basis of the analyst’s faulty report.  
The finance team is now blaming the analyst. Welcome to the experience of people in  
data.  
# This Book’s Project\: Intelligence.AI Coffee Beans  
To demonstrate the application of a unifying data strategy, we are going to work  
with a sample problem and datasets and explore strategies for working effectively  
with data from a technical and business perspective. Intelligence.AI is the company  
the authors of this book founded. We will present it as a fictitious company selling  
premium coffee beans from around the world with a humorous flair and inspiring  
artwork on the coffee bags, as shown in Figure 1-3. The company is small, but it is  
building an online presence and wants to be data driven.  
You are the CEO of Intelligence.AI. You need to decide which marketing channels  
are most effective in driving sales and acquiring new customers. Your marketing lead  
has allocated budgets across social media, email campaigns, and in-store promotions,  
but lacks insights into the return on investment \(ROI\) for each channel. You want  
to understand the factors influencing customer acquisition in order to optimize  
your budget spend and to make informed decisions on inventory management and  
pricing. To address these challenges, Intelligence.AI decides to adopt a unifying data  
strategy approach to analyze the available data and provide actionable insights.  
18 | Chapter 1\: The Need for a Unifying Data Strategy Figure 1-3. Products from the fictitious Intelligence.AI virtual store. This store will  
provide examples of applying a unifying data strategy to a small ecommerce startup,  
including inventory management, pricing, customer acquisition, design, and copywrit‐  
ing. Images prompted using Midjourney \(5/11/2023\). Left image\: “a teddy bear passion‐  
ately singing into a microphone hyperrealistic precision 8K, and 8K hyperrealistic.” Right  
image\: “a dog and cat cuddling together cute, gorgeous, loveable.”  
The datasets at your disposal encompass sales, marketing, and customer service. You  
plan to A/B test coffee bag designs using annotated labels to describe the concepts  
featured in the designs \(e.g., teddy bear, dog, cat\). One effective way to work with data  
is by using JSON, the most popular data format in use today. JSON is a universal lan‐  
guage that is both easy to read and incredibly powerful for data-driven applications.  
You will learn more about JSON in Chapter 2, and throughout the book you’ll be  
unifying your coffee business’ datasets.  
# Summary  
Across most organizations, there are conflicting perspectives on the North Star, or  
guiding principle, especially regarding being truly data centric. While leaders may  
emphasize a data-driven approach, data problems abound, often resulting in costly  
investments that don’t address the fundamental problems\: how to think of data from  
a holistic perspective, and to identify the right problems to solve. Being data driven  
requires a real commitment to creating, curating, and disseminating high-quality data  
and supporting a data-centric culture.  
Concept-first design involves translating business logic into simple pseudocode struc‐  
tures, which clarifies key concepts and aligns stakeholders, preventing miscommuni‐  
cations and costly rework.  
Summary | 19 A unifying data strategy enables you to quickly identify, address, and learn from  
failures. To implement a unifying data strategy, focus on removing ambiguity, rapidly  
iterating, and adapting attention to value creation. The costs of not having a unifying  
data strategy are bottlenecks, data swamps, and inconsistent use of language, which  
hinders data-driven decision making.  
In Chapter 2, we will delve into the world of JSON, a popular data format that is easy  
to read and powerful for data-driven applications. Understanding JSON is crucial  
for implementing a unifying data strategy, as it provides a universal language for  
structuring and exchanging data. In Chapters 3 and 4, we’ll explore how to connect  
your unifying data strategy to your code.  
20 | Chapter 1\: The Need for a Unifying Data Strategy CHAPTER 2  
# The Lingua Franca of Data\: JSON  
No matter what industry you work in, JSON is likely already used by your organiza‐  
tion and that you have at least heard about it. JSON \(JavaScript Object Notation\) is  
a standard and language-agnostic data interchange format inspired by a subset of the  
JavaScript programming language.  
JSON is easy to learn. Its simplicity, both in terms of data types and grammar, was a  
significant contributing factor to its popularity. The specification that defines JSON  
states\: “Because it is so simple, it is not expected that the JSON grammar will ever  
change. This gives JSON, as a foundational notation, tremendous stability.”  
If you are working with data in some way, familiarity with JSON and its ecosystem is  
a powerful skill.  
This chapter is aimed at the more technical audience interested in  
implementing the methodology proposed in this book. See Chap‐  
ter 3 to continue learning about these ideas in a business sense.  
# Introducing JSON  
The origin of JSON dates back to the now-defunct Netscape, the first company ever  
founded to capitalize on the World Wide Web. Netscape is known for maintaining the  
most popular web browser in the mid 1990s, Netscape Navigator, and for inventing  
JavaScript, a programming language specifically designed for Netscape Navigator.  
By around 1996, Netscape needed a way to exchange data in a lightweight and easy-  
to-read format. Netscape engineers started using an ad hoc, serializable version of the  
JavaScript syntax to represent data structures. Douglas Crockford, an early adopter of  
JavaScript, recognized the potential of this data interchange format, named it JSON,  
21 and began promoting its use as an alternative to XML, which was the dominant  
interchange format at the time. He described the JSON serialization specification  
online in 2002 and published the first draft of it in 2006.  
Though Netscape as a company is no longer active, the technologies it created, such  
as JavaScript and JSON, have stood the test of time. In fact, JavaScript is the world’s  
most popular programming language, and Netscape’s rendering engine provided the  
foundation for the popular Mozilla Firefox web browser that is still actively developed  
today.  
At the time of writing, JSON is the lingua franca, or common tongue, of data.  
According to content delivery network \(CDN\) providers such as Akamai, a majority  
of HTTP requests on the internet consist of JSON documents. The Postman API  
public network is the world’s largest registry of APIs, serving 25 million users and  
more than 500,000 organizations worldwide as of 2023. Most of its API listings—over  
18,000 of them at the time of writing—are JSON based. The list includes Salesforce,  
Microsoft, Notion, Meta, Slack, PayPal, Stripe, Google, MongoDB, Zoho, Datadog,  
Twilio, Amplitude, DocuSign, Booking, X \(Twitter\), Cisco, and many more.  
Popular NoSQL and SQL databases, including PostgreSQL, MySQL, Oracle, Mon‐  
goDB, and others, have first-class JSON support. Of course, JSON is natively sup‐  
ported by popular data processing software such as Apache Hive, Apache Spark,  
and GoogleSQL. Due to the dominance of JSON as a data format, JSON parsers  
exist in virtually every popular programming language. According to research from  
Stanford University, JSON is so prevalent in the world of big data that big data  
applications often “spend 80%–90% of their time parsing JSON documents.” Stack  
Overflow found that questions about JSON are being asked at least three times more  
often than about other data formats used in the world of data science.  
You may be familiar with XML and wonder how JSON compares to it. In 2020,  
ProgrammableWeb, then the world’s leading source of news and information about  
internet-based APIs, stated that JSON was the most popular response data format in  
use, with JSON being used five times more than its closest competitor, XML.  
22 | Chapter 2\: The Lingua Franca of Data\: JSON A Simple JSON Example  
JSON is designed to be human readable even if you are not familiar with its syntax.  
Take a look at the following code, for example\:  
\[  
\{  
"precision"\: "zip",  
"Latitude"\: 37.7668,  
"Longitude"\: -122.3959,  
"Address"\: "",  
"City"\: "SAN FRANCISCO",  
"State"\: "CA",  
"Zip"\: "94107",  
"Country"\: "US"  
\},  
\{  
"precision"\: "zip",  
"Latitude"\: 37.371991,  
"Longitude"\: -122.026020,  
"Address"\: "",  
"City"\: "SUNNYVALE",  
"State"\: "CA",  
"Zip"\: "94085",  
"Country"\: "US"  
\}  
\]  
A piece of data represented using JSON is called a JSON document. The preceding  
document consists of a sequence of two elements, where each is a set of key-value  
pairs defining numeric and textual properties. In the first case, the "City" property is  
set to "SAN FRANCISCO", and in the second case the "Latitude" property is set to the  
number 37.371991.  
Don’t worry about the details yet. We will explore the JSON grammar in “Overview of  
JSON Grammar” on page 26.  
Introducing JSON | 23 JSON Viewing and Authoring Tools  
Viewing and creating JSON documents does not require any tools other than a text  
editor, which you likely already have on your operating system of choice. However,  
there is plenty of free and proprietary software to aid in creating or visualizing JSON  
documents. These tools can be useful if you are not comfortable with the JSON  
grammar. We encourage you to explore the JSON documents in this book in your  
tools or editors of choice. Here are a few examples.  
JSON Hero  
JSON Hero \(see Figure 2-1\) is a popular free, web-based JSON viewer offering rich  
visualization modes.  
Figure 2-1. The JSON Hero online visualizer being used to explore our example JSON  
document  
24 | Chapter 2\: The Lingua Franca of Data\: JSON OK JSON  
If you are looking for a native and offline-first JSON editor, OK JSON \(see Fig‐  
ure 2-2\) is a powerful and pretty JSON editor for macOS that comes with a free trial.  
There are lots of similar options out there if your operating system of choice is not  
macOS.  
Figure 2-2. The OK JSON editor displaying our example JSON document  
Visual Studio Code  
If you are a Visual Studio Code user, the Outline view at the bottom of the File  
Explorer automatically generates a tree-view explorer for the current JSON document  
\(see Figure 2-3\).  
Introducing JSON | 25 Figure 2-3. The JSON Editor Visual Studio Code extension displaying our example JSON  
document  
# Overview of JSON Grammar  
JSON is built around a small set of data types\:  
Booleans  
The constants false and true  
Numbers  
notation  
Arbitrary-precision real numbers or integers, in both decimal and exponential  
Strings  
Sequences of characters enclosed in double-quotes  
Arrays  
Heterogeneous ordered sequences of JSON values \(referred to as elements\)  
enclosed in square brackets  
Objects  
Heterogeneous sets of key-value pairs \(referred to as properties\) enclosed in curly  
braces, where keys are strings  
Null  
The constant null  
26 | Chapter 2\: The Lingua Franca of Data\: JSON Booleans  
JSON provides two constants to represent Boolean values\: false and true. Note that  
these constants are not enclosed in quotes. Also, keep in mind that JSON constants  
are case sensitive, so the value False is a syntax error.  
An example of the true JSON constant\:  
true  
An example of the false JSON constant\:  
false  
# Numbers  
In comparison to many other data formats, JSON provides a single number data type  
to represent both integers and real numbers. Both decimal and scientific notation is  
supported.  
An example of a JSON number that represents a positive integer\:  
5  
An example of a JSON number that represents a negative real number\:  
-47.3265504058  
An example of a JSON number that represents a negative positive integer using  
scientific notation\:  
-5.3E4  
Note that JSON does not permit numeric values that cannot be represented as  
sequences of numbers, such as the concept of infinity or imaginary numbers.  
# Strings  
A string is a textual value that consists of a sequence of characters. A JSON string  
starts with the double quote character ", followed by zero or more Unicode charac‐  
ters, followed by the double quote character "  
.  
An example empty JSON string that defines no characters\:  
""  
An example JSON string that corresponds to “Hello World”\:  
"Hello World"  
Overview of JSON Grammar | 27 If a JSON string contains a double quote or a backslash, the offending character must  
be escaped by inserting a backslash character before it. Here is an example JSON  
string that utilizes double quotes\:  
"My name is \\"Juan\\""  
Remember that enclosing a JSON string in double quotes is not  
optional. Without them, your JSON string will not be considered  
valid JSON. Forgetting the quotes or making use of single quotes  
instead of double quotes, are very common pitfalls when starting to  
work with JSON data.  
# Arrays  
A JSON array is an ordered sequence of other JSON values referred to as elements.  
An array starts with the open square bracket character \[, followed by a sequence of  
zero or more elements delimited by the comma character ,, followed by the closed  
square bracket character \].  
An example empty JSON array that defines no elements\:  
\[\]  
An example JSON array that defines a single number element\:  
\[ 5 \]  
An example JSON array that defines multiple string elements\:  
\[ "foo", "bar", "baz" \]  
Note that the comma separator is not included after the last element of the array. In  
fact, doing so results in a syntax error. See Figure 2-4 for an example of this error.  
Figure 2-4. The free online JSON validator at jsonchecker.com checking a JSON array  
with a trailing comma after the last element. An error is reported, as an ending comma  
indicates that there is another element in the array.  
28 | Chapter 2\: The Lingua Franca of Data\: JSON JSON arrays are heterogeneous containers. In other words, the elements of a JSON  
array do not need to be of the same type. For example, you may define an array that  
mixes Boolean, number, and string elements\:  
\[ false, 4, 3.4, "Hello World" \]  
We defined JSON arrays as ordered sequences of other JSON values. A JSON array is  
also a valid JSON value, which means that defining arrays of arrays is valid.  
Consider the following example that defines a JSON array of arrays. The first element  
is an array with a single string element. The second element is an array where its first  
and only element is also an array whose first and only element is a number. The third  
element is an empty array\:  
\[ \[ "foo" \], \[ \[ 7 \] \], \[\] \]  
# Objects  
A JSON object is a set of key-value pairs where keys are JSON strings. This type  
of data structure is also commonly referred to as a map, an associative array, or a  
dictionary.  
JSON objects are the most complicated JSON structure, grammar-wise. A JSON  
object starts with the open curly brace character \{, followed by a sequence of zero or  
more key-value pairs referred to as properties, delimited by the comma character ,,  
followed by the closed curly brace character \}. A JSON object property is a JSON  
string that represents the property key, followed by the colon character \:, followed by  
the JSON value that represents the property value.  
An example empty JSON object that defines no properties\:  
\{\}  
An example JSON object that defines a single number property referred to as foo\:  
\{ "foo"\: 4 \}  
Note that object property keys must be valid JSON strings. The following example  
JSON documents are invalid\:  
// Invalid! Property keys cannot be numbers  
\{ 3\: false \}  
// Invalid! JSON strings must be enclosed in double quotes  
\{ foo\: 4 \}  
Here’s an example JSON object that defines multiple Boolean properties. As with  
arrays, note that the comma separator is not included after the last property of the  
object\:  
\{ "foo"\: true, "bar"\: false, "baz"\: true \}  
Overview of JSON Grammar | 29 An example JSON object defining properties of different types, including objects  
themselves\:  
\{  
"foo"\: \[ 1, 2, 3 \],  
"bar"\: \{  
"baz"\: "nested"  
\}  
\}  
This JSON object consists of two properties\: foo and bar. The foo property is set to  
an array of three number elements. The bar property is set to an object that consists  
of a single property\: a string property called baz.  
# Avoid Duplicate Properties  
The JSON specification states that object properties should be unique. If you define  
the same property twice, that’s considered undefined behavior, and different JSON  
parsers might react to it in unexpected ways. Consider the following object that  
defines the same property twice\:  
\{ "foo"\: 1, "foo"\: 2 \}  
As you can see in Figure 2-5, the free online JSON validator at jsonchecker.com we  
used in Figure 2-4 reports this JSON document as invalid.  
However, the JSON Hero online visualizer from Figure 2-1 will silently drop any  
duplicate property and only consider its last definition. Because you don’t know how  
different JSON parsers react to this case, we strongly recommend avoiding duplicate  
properties altogether.  
Figure 2-5. The free online JSON validator at jsonchecker.com considers objects with  
duplicate properties as invalid.  
30 | Chapter 2\: The Lingua Franca of Data\: JSON Null  
JSON also provides the constant null. As with JSON Booleans, null is case sensitive,  
so the values Null or NULL are syntax errors.  
An example of the null JSON constant\:  
null  
While null is given diverse meanings in different contexts, its origin comes from  
ternary logic, which defines null as an indeterminate value. Null values come in handy  
with objects in particular. Taking the ternary logic definition of null, setting an object  
property to null is equivalent to stating, “I don’t know what the value is.” This is  
different from omitting the property, which means, “the property does not exist.”  
Some programming languages, like C\#, do not make a distinc‐  
tion between a null value and a nonexistent value. Therefore, the  
semantics of JSON might not directly translate to your program‐  
ming language’s data model. Greg Dennis, core contributor to  
JSON Schema, wrote an article covering this problem in detail.  
We recommend you consult your programming language and  
JSON parser documentation to avoid conflicts.  
Consider the following JSON object that defines a property as null\:  
\{ "foo"\: null \}  
We can interpret this JSON document as stating that the foo property exists, but its  
value is not known. In comparison, the bar property does not exist at all in the object.  
# Learning More  
This section was a gentle overview of the JSON grammar. As with every data  
interchange format, things get tricky once you start considering edge cases and  
interoperability concerns. As an end user of JSON, you rarely need to worry about  
these, but advanced knowledge of JSON can come in handy when implementing your  
own JSON tooling.  
To give you a taste of these concerns, JSON grammar defines a single number type of  
arbitrary limit and precision for modeling both integers and real numbers. However,  
many programming languages have limits on the numbers they can accurately repre‐  
sent. On text encoding, JSON is defined to be valid on any Unicode encoding \(such as  
UTF-8, UTF-16, or UTF-32\), but most applications assume UTF-8.  
If you want to learn more about these topics, we recommend reading the free  
ECMA-404 \(from ECMAScript\) and RFC 8259 \(from the Internet Engineering Task  
Overview of JSON Grammar | 31 Force\) specifications. The json.org website also publishes easy-to-follow visual JSON  
grammar definitions \(see Figure 2-6 for an example\) and formal grammar in McKee‐  
man Form. We also recommend Introduction to JavaScript Object Notation by Lindsay  
Bassett \(O’Reilly, 2015\), an excellent and concise guide to every detail of the JSON  
grammar.  
Figure 2-6. An example visual state machine for the grammar of JSON arrays taken  
from the json.org official website. These diagrams are handy, concise references to the  
JSON grammar.  
# Minification  
In JSON, whitespace present outside the declaration of values carries no meaning.  
As a consequence, you can write the same JSON document in a variety of ways. See  
Figure 2-7 for an example.  
Figure 2-7. Whitespace outside of the declaration of JSON values is meaningless. The  
four JSON documents in this figure represent the exact same JSON document, despite  
variations of whitespace and new lines.  
32 | Chapter 2\: The Lingua Franca of Data\: JSON This aspect of the grammar is commonly exploited to reduce the byte size of JSON  
documents by deleting unnecessary white space. The process of deleting unnecessary  
whitespace in a JSON document is called minification. See Figure 2-8 for an example.  
Figure 2-8. On the left, a JSON document consisting of objects, strings, arrays, and  
numbers. The size of this JSON document is 62 bytes. On the right, a minified version of  
the JSON document on the left. The size of this JSON document is 38 bytes.  
Minification is common practice \(mainly in conjunction with data compression\) to  
improve network performance when transmitting JSON documents and reduce the  
space required to store them.  
You will likely encounter minified JSON documents at some point or another.  
Because minified documents are often hard to read \(mainly if they are big\), we  
recommend using visualization tools like JSON Hero or OK JSON that always present  
the structure of a JSON document in a readable manner or using specific tools like  
JSON Beautify \(see Figure 2-9\) to add back the deleted meaningless white space. The  
process of adding meaningless whitespace for readability purposes is often referred to  
as prettifying or beautifying the document.  
Overview of JSON Grammar | 33 Figure 2-9. An example of JSON Beautify, one of many online tools to prettify a minified  
JSON document to improve its readability  
# Alternative Representations  
Though the JSON grammar is simple, and that is one of the key reasons why JSON  
is popular, its simplicity comes with drawbacks. For example, JSON does not support  
adding comments. This fact resulted in the creation of many data formats that follow  
the JSON data model and are meant to be transformed to JSON without loss of  
information, but that provide either a relaxed or alternative syntax.  
Textual alternatives  
Popular examples of these kinds of JSON alternative formats are JSON5 \(JSON with  
a relaxed syntax and comments support\), Jsonnet \(JSON with additional templating  
constructs\), and YAML \(an alternative syntax with many power features\).  
Here is an example of the JSON5 format taken from its official website. As you can  
see, JSON5 is a superset of the JSON grammar that permits comments, single quotes  
for strings, the omission of quotes for object properties, and more\:  
34 | Chapter 2\: The Lingua Franca of Data\: JSON \{  
// comments  
unquoted\: 'and you can quote me on that',  
singleQuotes\: 'I can use "double quotes" here',  
lineBreaks\: "Look, Mom! \\  
No \\\\n's!",  
hexadecimal\: 0xdecaf,  
leadingDecimalPoint\: .8675309, andTrailing\: 8675309.,  
positiveSign\: +1,  
trailingComma\: 'in objects', andIn\: \['arrays',\],  
"backwardsCompatible"\: "with JSON",  
\}  
Here is an example of the YAML data format. As you can see, YAML looks like JSON,  
but uses a more minimalistic and indentation-based grammar\:  
title\: "YAML Example"  
data\:  
name\: "John Smith"  
age\: 34  
gender\: "male"  
address\:  
street\: "123 Main St"  
city\: "Anytown"  
state\: "NY"  
zip\: "12345"  
Binary alternatives  
Alternate JSON representations do not need to be textual. A popular binary represen‐  
tation of JSON is BSON \(Binary JSON\). The BSON binary format \(see Figure 2-10\)  
was designed by MongoDB with traversability in mind, and it is the way in which the  
MongoDB database internally represents the JSON documents you insert.  
Figure 2-10. A hexadecimal example of the BSON version of a simple JSON document.  
BSON is not meant to be human readable, but faster for a machine to traverse.  
Other binary formats that adopt the JSON data model include JSON BinPack, Messa‐  
gePack, CBOR, FlatBuffers, and Apache Avro.  
Overview of JSON Grammar | 35 JSON versus the JSON data model  
These alternative JSON representations are not JSON, despite their somewhat confus‐  
ing names. For example, Jsonnet is not JSON; it is a different serialization format  
inspired by the constructs of JSON.  
To shed light on these cases, the community makes an explicit distinction between  
JSON \(the data interchange format\) and the JSON data model \(the abstract modeling  
capabilities of JSON\). In other words, you are only using JSON if you follow the  
precise textual grammar introduced earlier in this chapter. However, if you define  
a format that can be losslessly transformed to JSON, then we say that this format  
follows the JSON data model. Putting these definitions into practice, we can say that  
while JSON5, Jsonnet, YAML, BSON, and other formats are not JSON, they are based  
on the JSON data model.  
This distinction is important in the context of this book. While we will be using JSON  
examples throughout this book because of its human-readability, what we are truly  
advocating for is the adoption of the JSON data model. Not all data you will handle in  
your organization will be JSON. However, if such data follows the JSON data model,  
you can treat it as JSON, and make use of a humongous ecosystem of powerful tools  
designed to work on the JSON data model, such as JSON Schema.  
For example, if you’ve used the MongoDB database, you’ve already used tooling that  
operates on the JSON data model instead of on JSON directly.  
While JSON is an incredibly popular format, the true lingua franca  
of data is the JSON data model.  
# Creating a JSON Document  
Chapter 1 introduced Intelligence.AI, an online coffee company selling premium  
coffee beans from around the world with humor and inspiring artwork on the bags.  
Armed with our new knowledge, let’s use JSON to define example products and  
orders.  
# A Product Entry  
A product in our catalog consists of a stock-keeping unit \(SKU\) that uniquely identi‐  
fies the product, a timestamp for when the product was put on sale, a URL to the  
product page, the human-readable title and one-sentence description of the product,  
the URL of the product image, the price of the product, and the currency on which  
the price is represented.  
36 | Chapter 2\: The Lingua Franca of Data\: JSON A sample product entry, declaring a set of string and integer properties, might look  
like this\:  
\{  
"sku"\: "SHBH00001",  
"timestamp"\: "2023-04-07T06\:32\:54-04\:00",  
"url"\: "https\://intelligence.ai/products/espresso-yourself-whole-latte-love",  
"title"\: "Espresso Yourself - Whole Latte Love!",  
"price"\: 30,  
"currency"\: "USD",  
"description"\: "Introducing \\"Espresso Yourself\\" coffee - the ultimate bean  
potion that's here to add a splash of silliness, a dollop of delight, and a whole  
latte love to your daily grind!",  
"image\_url"\: "https\://cdn.shopify.com/s/files/1/0749/8389/9441/products/  
Frame7.png"  
\}  
# A Store Order  
After putting the store online, orders start to come in. What people ordered, when,  
and to which delivery locations, is important information we can also model using  
JSON. In our store, orders include the email address of the customer, the delivery  
address, the items the customer purchased referenced by their respective SKUs, the  
total price of the sale, and the date and time when the order took place.  
A sample order for two bags of the beans with SKU SHBH00005 and one bag of the  
beans with SKU SHBH00006 might look like this\:  
\{  
"timestamp"\: "2023-04-13T11\:30\:00-04\:00",  
"email"\: "jsmith@gmail.com",  
"delivery\_address"\: \{  
"street"\: "123 Main St",  
"city"\: "New York",  
"state"\: "NY",  
"zipcode"\: "10001",  
"country"\: "US"  
\},  
"total\_price"\: 110,  
"items"\: \{  
"SHBH00006"\: 1,  
"SHBH00005"\: 2  
\}  
\}  
Creating a JSON Document | 37 Summary  
This chapter covered the JSON data interchange format and its relevance in the data  
industry. You now know the distinction between JSON and the JSON data model.  
You have examined existing JSON documents and can write your own, keeping best  
practices and common pitfalls in mind.  
Data for the sake of data is meaningless unless you have clarity on the problems you  
are trying to solve and a sound strategy for how data comes into play. In Chapter 3,  
you will learn how to think about data-centric products and innovation. In future  
chapters, you will optimize how your organization works with data by putting into  
practice your knowledge of JSON and data strategy.  
38 | Chapter 2\: The Lingua Franca of Data\: JSON CHAPTER 3  
# Data-Centric Innovation\:  
# A Guide for Data Champions  
Chapter 2 laid the groundwork for understanding the importance of data and how  
it can be structured and utilized effectively within an organization. We’ve introduced  
JSON as the lingua franca of data and described how it is an excellent choice to  
facilitate the management and exchange of data across different teams and systems.  
In the context of our example company, Intelligence.AI, we want to see how data  
can be used to drive decision making and optimize business operations. Whether it’s  
understanding customer behavior, predicting sales, or evaluating the effectiveness of  
marketing channels, data plays a crucial role. However, data alone is not enough. It’s  
essential to have a clear understanding of the problems you’re trying to solve and  
develop a strategic approach to how data can help solve those problems. This is where  
tools like Agile, objectives and key results \(OKRs\), and key performance indicators  
\(KPIs\) from the fields of product management and data strategy can be valuable in  
ensuring that your data efforts are focused and effective.  
This chapter delves deeper into these topics. We’ll explore how to think about data-  
centric products and innovation and how to align your data strategy with your  
business objectives. We’ll also discuss the importance of schemas in managing and  
understanding your data. Additionally, we’ll look at how JSON Schema can be used  
as part of a unifying data strategy, providing a structured and standardized way to  
describe your data.  
39 Data Transformations Require Data Champions  
Champions are not the ones who always win races—champions are the ones who get out  
there and try. And try harder the next time. And even harder the next time. “Champion” is  
a state of mind. They are devoted. They compete to best themselves as much if not more than  
they compete to best others.  
—Simon Sinek, author and motivational speaker  
As you strive to become a transformative force for innovation in your organization,  
you’ll need to step into the pivotal role of data champion. As a data champion,  
you serve as the crucial link between the technical and business aspects of your  
organization, ensuring that data is not just collected and managed effectively, but  
harnessed to its maximum potential to drive business value.  
There are several career paths in the world of data. For example, you may be a data  
scientist, data strategist, data product manager, or even a chief data officer \(among  
many others\). Each of these roles requires a unique blend of skills and offers different  
opportunities to influence your organization’s utilization of data. A data champion  
role could be in any department \(data, code, business, or experience design\) or held  
by any title. Let’s examine more closely what being a data champion means, and how  
it relates to the roles in Figure 3-1.  
Figure 3-1. Various roles in an organization, the different domains they can be involved  
in, and how they relate to being a data champion. A unifying data strategy focuses on a  
blend of skills and perspectives from data strategy and product management to develop  
data champion skills. XD stands for experience design.  
While every company differs in terms of how they design their roles and responsibili‐  
ties, the following is a broad, noncomprehensive, general way to group these roles in  
the context of this book\:  
Chief data officer \(CDO\)  
Develops and implements an organization-wide data strategy and oversees data  
governance and data management initiatives. A CDO advocates for data teams at  
40 | Chapter 3\: Data-Centric Innovation\: A Guide for Data Champions the executive level and aligns with other executives on business goals. Typically,  
CDO is a strategic role, focusing on the big picture rather than the technical  
details of data management.  
Data strategist  
Identifies opportunities to leverage data for business decision making, advocates  
for data quality, helps design data governance policies, develops strategic plans  
in collaboration with other teams to understand needs and challenges. While  
data strategists primarily operate in the realms of business and data, they are con‐  
cerned with the big picture, including how efficient and effective collaboration  
and communication are.  
Product manager  
Responsible for guiding the success of a product by leading cross-functional  
teams, defining product vision and strategy, understanding customer needs,  
setting and prioritizing product goals, monitoring product performance, and  
communicating product plans and progress to stakeholders. Please note\: this role  
is different from that of a data product manager, which will be described in “The  
Rise of the Data Product Manager” on page 42.  
Data manager  
Oversees the collection, storage, and organization of data; implements data qual‐  
ity assurance processes, data security, and data privacy policies; develops and  
maintains data documentation and metadata; and promotes best practices. A  
data manager may overlap with other teams, but their primary responsibility is  
managing data-specific processes, tools, and deliverables.  
A data champion is someone who is passionate about helping the  
organization innovate and transform into a truly data-driven orga‐  
nization. They care about how data is connected across different  
domains of knowledge and across different layers, from concrete  
and complex details all the way up to strategy.  
Being a data champion can be challenging. As with many superhero roles, it can feel  
like thankless work, without official recognition or support. Teams are supposed to  
align at a high level, and everything is supposed to “fit” together, but this “fitting”  
rarely happens without people going out of their way to work collaboratively across  
the organization. Aligning and fitting usually come about due to the strength of  
personal relationships rather than a well-thought-out and structured process. The  
more complex the organization, the more demands it places on data champions, who  
risk losing focus on their assigned tasks by spending time focusing on data from a  
holistic perspective.  
Data Transformations Require Data Champions | 41 Your job title doesn’t matter. You can become a data champion. If your organization  
doesn’t have a formal way to empower or support data champions, don’t worry. This  
book will provide you with concrete tools and ways to communicate core concepts  
to your leadership. The goal of a data champion is to create value, drive innovation,  
and lead the organization toward becoming truly data driven. This journey may  
be challenging, but the rewards—in terms of improved efficiency, innovation, and  
profitability—are well worth it.  
# The Rise of the Data Product Manager  
In the world of data-centric innovation, the data product manager emerges as a  
crucial link between the technical and business aspects of an organization, ensuring  
that data is not just collected and managed effectively, but also harnessed to its maxi‐  
mum potential to drive business value. A data product manager is the closest formal  
equivalent to a data champion. Many organizations don’t yet have data product  
managers defined as formal roles, especially in smaller organizations where a product  
manager, data engineer, program manager, or business analyst might be taking on  
data champion responsibilities.  
A data product manager is instrumental in steering the creation of data-centric prod‐  
ucts, defining product requirements and aligning these with overarching business  
goals. They work in concert with data scientists, stakeholders, and other relevant  
teams, measuring product performance and making value-based decisions for con‐  
tinual improvements. While a data product manager may work solely with the data  
team on data products, they may also engage closely with software and experience  
design teams. Throughout this book, we will use the terms data champion and data  
product manager interchangeably, as our research has highlighted a significant gap in  
many organizations’ understanding and allocation of resources for these roles.  
As a data champion, you bring to the table a profound understanding of data and  
its potential to drive strategic and operational transformation. Your expertise isn’t  
confined to the technical aspects of data collection and analysis; you are skilled  
at translating these intricate concepts into the language of business, enabling their  
practical application to drive outcomes. You are equipped to demonstrate to business  
leaders how to unlock value from data, guiding them toward data-informed decisions  
that can amplify efficiency, spur innovation, and bolster profitability.  
The rest of this chapter dives into how the disciplines of data strategy and product  
management can be synergistically applied within an Agile data strategy, which is  
precisely how a data product manager can catalyze your organization’s evolution.  
42 | Chapter 3\: Data-Centric Innovation\: A Guide for Data Champions Alignment Is a Journey, Not a Destination  
A data strategist plays a vital role in aligning data initiatives with the overarching  
business goals and objectives. They understand the strategic direction of the business  
and ensure that all data-related activities support these goals. By ensuring that data  
efforts are focused and relevant, the data strategist helps to maximize the value that  
data brings to the organization. A data strategist is able to zoom in and out to various  
levels of scales and complexity, understanding how processes, people, and technology  
connect and impact each other from a systems perspective.  
A product manager typically identifies and sets KPIs for an externally facing product  
or service, whereas a data strategist sets KPIs for internal business processes and  
outcomes, such as implementing a new data governance framework or guiding the  
use of data in supporting strong business measures and metrics.  
Promoting and enhancing data literacy within the organization is another key  
responsibility of the data strategist. They work to ensure that all stakeholders,  
from executives to frontline employees, understand the value of data, know how  
to interpret and use data effectively and recognize the importance of data quality and  
integrity. This might involve creating training programs, developing user-friendly  
data tools and dashboards, and promoting a culture of data-driven decision making.  
The data strategist also plays a crucial role in facilitating cross-functional collabora‐  
tion. They work closely with various teams within the organization, including IT,  
business units, and legal and compliance teams. For example, they might collaborate  
with IT to ensure the right data infrastructure is in place, with business units to  
understand their data needs, and with legal and compliance teams to ensure data  
practices meet regulatory requirements. This cross-functional collaboration is key to  
ensuring that data is effectively integrated and utilized across the organization.  
Finally, a data strategist must embrace continuous improvement and adaptability. The  
world of data is constantly evolving, with new technologies, trends, and challenges  
emerging all the time. The data strategist needs to stay up-to-date with these changes,  
continuously improving data processes and systems, and being adaptable to changing  
business needs and environments.  
# Evaluating Alignment from a Holistic Perspective  
Imagine an orchestra. Each section—the strings, the brass, the woodwinds, the per‐  
cussion—has its own unique role to play, but for the orchestra to create harmonious  
music, all the sections must be in sync, following the same score and the conductor’s  
direction. If one section is out of tune or playing a different piece, the entire perfor‐  
mance suffers.  
Alignment Is a Journey, Not a Destination | 43 In a business aiming to adopt a data-centric approach, each department—marketing,  
sales, operations, finance, and so on—is like a section of the orchestra. Each has its  
own unique role and its own data needs. But for the business to truly leverage the  
power of data, all departments must be aligned in their approach to data. They must  
follow the same “score”—the organization’s overall data strategy—and work together  
to create a harmonious performance, which in this case means a data-driven business  
that operates efficiently and effectively.  
This is what we mean by holistically evaluating how an organization aligns around  
producing and consuming data. It’s about ensuring that all parts of the organization  
are working together toward the same data goals using the same methodologies and  
speaking the same data language. It’s about recognizing that data is a shared resource  
that belongs to the entire organization, not just one department. It’s about breaking  
down silos and fostering collaboration and communication across departments.  
Without this alignment, efforts to become data-centric can easily become disjointed  
and ineffective. You might have one department collecting data in one way and using  
it for one purpose, and another department collecting similar data in a different way  
and using it for a different purpose. Such a situation can lead to inconsistencies,  
inefficiencies, and missed opportunities.  
Initiate your role as a data champion as if you were embarking on a tactical sea  
voyage to hunt for treasure \(the business outcomes and value that will be unlocked  
upon successful execution\). The process of planning the alignment of an organization  
around data, viewed from a macroscopic perspective, can be compartmentalized into  
the following stages\:  
1.  
1\. Form your team. Much like assembling a dedicated crew for a challenging voyage,  
the first step is to identify the key stakeholders in your organization who interact  
with data. This includes not only those who directly handle the data trove, such  
as data scientists and analysts, but also those who rely on data for steering their  
strategic course, like executives and managers.  
2.  
2\. Chart your course. Next, you need to figure out how these crew members cur‐  
rently operate with data. What objective serves as their North Star? What data  
serves as their guiding lighthouse? How do they gather, analyze, and interpret  
it? What decisions are made based on this data? This stage involves both formal  
leadership meetings and informal team discussions, as well as direct observation  
of operational practices.  
3.  
3\. Check your compass. Once you comprehend the current data navigation methods,  
you need to assess how well these practices align with your organization’s overall  
business goals. Are stakeholders utilizing data in ways that facilitate reaching  
these goals? Are there obstacles or rough waters between data practices and  
business targets?  
44 | Chapter 3\: Data-Centric Innovation\: A Guide for Data Champions 4.  
4\. Spot the sea monsters. If trouble is brewing, the next step is to spot the monsters  
causing the trouble. These might be technical beasts, such as lack of access  
to necessary data or obsolete data analysis tools. They might also be cultural  
krakens, such as resistance to change or lack of understanding about the value of  
data.  
5.  
5\. Prepare a treasure extraction plan. This plan might involve technical solutions,  
like implementing new data tools or enhancing data accessibility. It may also  
necessitate cultural adjustments, like training programs to boost data literacy or  
initiatives to cultivate a more data-centric culture. This strategy should not only  
guarantee preparedness but also be robust enough to anticipate potential hazards  
and enable efficient execution when you strike gold.  
Remember, alignment is not a one-time task but a continuous  
process. Regularly revisit these steps to ensure your organization  
remains aligned as it evolves and as its data needs change.  
# The Goal Isn’t Alignment, It’s Effective Alignment  
No matter how brilliant your mind or strategy, if you’re playing a solo game, you’ll always  
lose out to a team.  
—Reid Hoffman, LinkedIn cofounder  
Effective alignment in an organization can be likened to a jazz ensemble. Each  
musician in a jazz band has their own instrument and unique style, but they all  
play in harmony, following the same rhythm and working toward the same musical  
piece. They have the freedom to improvise and express their individuality within the  
framework of the song, but they also grasp the importance of staying in sync with the  
rest of the band. This balance between individual creativity and group coordination is  
what makes the performance captivating and successful.  
Similarly, in a business aiming for a data-centric transformation, each department has  
its own unique role and data needs. But for the transformation to be successful, all  
departments must work in harmony, following the same data strategy, and working  
toward the same business goals. They must have the freedom to use data in ways  
that best support their specific needs, but they also need to adhere to the overall data  
governance and standards of the organization. This delicate balance between creative  
freedom and systems control is what drives business value and innovation.  
The essence of effective alignment is not static; it’s a dynamic process that requires  
continual reassessment and adjustment. It’s not enough to simply establish alignment  
and then assume the job is done. Just as the business environment is constantly  
Alignment Is a Journey, Not a Destination | 45 changing, so too must the alignment within an organization continually evolve and  
adapt.  
This is where the concept of continual improvement comes into play. It’s not just  
about maintaining alignment, but about constantly seeking ways to improve what  
people are aligned for and how they are aligned. It’s about continually refining the  
shared vision and goals, and constantly seeking better ways to achieve them.  
Continual improvement also applies to the methods and metrics used to measure  
alignment. As our understanding of the business and its environment evolves, so  
too should our measures of alignment. We must continually reassess our metrics to  
ensure they are still relevant and effective and adjust them as necessary to reflect  
changes in our goals or circumstances.  
In this way, as we’ve pointed out, alignment becomes a journey rather than a destina‐  
tion. It’s a continual process of seeking, assessing, adjusting, and improving. It’s about  
ensuring that everyone in the organization is not just moving in the same direction,  
but constantly moving toward a better version of what the organization can be. This  
continual improvement mindset, underpinned by data, is what drives an organization  
forward and ensures its long-term success.  
# Strategies for Setting Up Teams for Success  
One important responsibility for a data strategist is designing systems and processes  
for people to effectively achieve goals together. Innovation is going to inherently  
invite mistakes. When people are focused on protecting themselves from blame, they  
aren’t going to take risks or be open to any new ideas. The blame game can go all the  
way up. For example, if an employee made a mistake, you could blame the manager  
for why the employee made the mistake. And you could blame the CEO for why the  
manager made the mistake that enabled the employee to make the mistake.  
A company’s most expensive costs are usually its investments in hiring, training,  
retaining, and managing people, including security, hardware, software licenses,  
office expenses, and so forth. Getting teams to work effectively together is incredibly  
valuable to the bottom line.  
Google spent two years studying 180 teams with more than 200 double-blind inter‐  
views, and they evaluated the teams on over 250 attributes in a project named  
Aristotle.  
Here are a few factors they found that are not associated with high-performing teams\:  
Colocation of teammates \(sitting together in the same office\)  
Where people work isn’t statistically significant to how well the team operates.  
Consensus-driven decision making  
Getting everyone to agree isn’t associated with better performance.  
46 | Chapter 3\: Data-Centric Innovation\: A Guide for Data Champions Seniority  
The number of team members with higher-ranking titles isn’t a reliable predictor  
of better productivity and outcomes.  
Here are the top three factors the project identified that did characterize high-  
performing teams\:  
Psychological safety  
Team members don’t have to fear punishment for admitting mistakes, asking  
questions, offering ideas, or taking risks.  
Dependability  
Members can rely on each other to complete tasks they said they would.  
Structure and clarity  
Teams have clear goals \(Google uses OKRs\), processes for meeting those goals,  
and clearly defined performance indicators and outcomes.  
It bears repeating that data belongs to the whole organization, not  
one person, one team, or even one division. Everyone is collectively  
responsible for the quality and value of data, so leaders need to edu‐  
cate themselves and their employees about data quality standards.  
Here’s what teams and organizations must do in order to enable effective alignment to  
thrive\:  
Establish clear roles and accountability  
Clearly define team members’ roles and expectations. Responsibility fosters a  
sense of ownership and accountability, as does ensuring everyone understands  
how their work contributes to the organization’s data-centric innovation efforts.  
Encourage open communication  
Open communication that is transparent, candid, and kind is vital for effective  
alignment. Facilitate regular interaction between teams through meetings and  
workshops, and encourage bottom-up communication that is outside of hier‐  
archical lines. This will enable more accurate knowledge sharing about what  
works and what doesn’t in how teams approach collaboration.  
Develop shared goals and objectives  
Formulate common goals and objectives in detail, and question any investments  
that aren’t aligned with the organization’s strategic direction. Develop a collective  
framework for evaluating the success of data initiatives and how conflicts can be  
mitigated.  
Alignment Is a Journey, Not a Destination | 47 Provide training and support  
Invest in training and support to help team members acquire the skills and  
knowledge necessary to contribute meaningfully to data-centric innovation  
efforts. This includes technical training in data analysis and visualization tools  
and soft skills training in areas like communication, collaboration, and problem  
solving.  
# Incorporating a Product Management Mindset  
Product management is a multifaceted discipline that sits at the intersection of busi‐  
ness, technology, and user experience. A product manager is responsible for guiding  
the development, production, marketing, and overall success of a product or product  
line. They act as the nexus between various cross-functional teams, including engi‐  
neering, design, marketing, and sales.  
A good product manager possesses a unique blend of skills. They have a deep under‐  
standing of the market and the customer, allowing them to identify opportunities  
and define product requirements that meet customer needs and align with business  
objectives. They are skilled communicators, able to articulate the product vision and  
strategy to different stakeholders, from engineers to executives. They are also adept at  
prioritizing, making tough decisions about what features to build, and how to allocate  
resources based on a deep understanding of customer needs, business constraints,  
and competitive landscape.  
Let’s review key topics from product management that are especially important to  
develop and integrate into the role of a data product manager\:  
Defining data users’ needs  
Just as product managers must understand their end users to build successful  
products, data product managers must understand the needs of the stakeholders  
who will use the data products. This includes understanding how the data will be  
used, what insights are expected from it, and what business questions it should  
answer.  
Defining product features  
A data product manager is responsible for defining the features of the data  
product, such as reports, visualizations, or predictive models, and prioritizing  
their development based on business value, feasibility, and user needs. They need  
to make strategic decisions about what features to build next, which requires a  
strong understanding of both the data and the business context.  
Defining and measuring success  
Product managers use OKRs, KPIs, and other metrics to measure the success of  
their products and make informed decisions. Likewise, data product managers  
must define clear success metrics for their data products. These metrics can  
48 | Chapter 3\: Data-Centric Innovation\: A Guide for Data Champions be related to usage \(for example, how often reports are accessed\), impact \(how  
decisions influenced by the data product led to business outcomes\), or user  
satisfaction.  
# Defining Data Users’ Needs  
Consider this scenario. You’re a dedicated data scientist, poised to demonstrate  
how effectively harnessing data can provide tangible value to your company. Your  
objective is to uncover data-driven insights that improve the allocation of marketing  
resources and lower the churn rates of customers who subscribe to a monthly service.  
Achieving this could mean the difference between a spate of layoffs and a return to  
profitability, between an uncertain future and a renewed trust in your data science  
team’s capability to drive genuine business value. You are given two weeks to devise  
a data-centric strategy that could turn the tide and to present it to the CFO. The  
integrity and accessibility of your data can either help or hinder you.  
Your initial stop is the data lake, the expansive repository housing your organiza‐  
tion’s data. You’re in search of key marketing data, including campaign specifics,  
user interactions, sign-ups, drop-offs, and expenditure. Instead of a comprehensive  
guide to assist your search, you are faced with a labyrinth of folders and generically  
labeled .csv files. It’s the proverbial search for a needle in a haystack.  
You engage your colleagues in the marketing department, hoping they can provide  
some guidance. The most knowledgeable person about the data has left the company,  
but after several meetings and considerable time waiting for responses, you finally  
get a lead. You return to the data lake equipped with slightly more information. You  
locate some relevant files, sanitize the data, and confirm with the marketing team  
that you’re heading in the right direction. A week has elapsed and you’re just getting  
started.  
As you dig into the data, you encounter another hurdle\: inconsistent terminology.  
One dataset uses “GTM,” “TOFU,” “CLTV,” “CAC,” “PPC,” “CTA,” while another uses  
“CPA,” “CPC,” “CTR,” and “PPR.” You’re back to the marketing team for explanations,  
but they can only provide a conceptual understanding. The exact calculations remain  
a mystery.  
Then you discover data quality issues. There’s no standardization in data collection  
or reporting methods, you don’t have access to all of the financial data you need, and  
you’re unable to trace the data lineage to back up your findings.  
The deadline is pushed back. A month later, you finally have everything you need to  
start working on your data science insights.  
This exemplifies the critical importance of breaking down silos and fostering cross-  
functional collaboration for data-driven decision making in marketing. If your organ‐  
ization’s data were a product, it would be difficult to sell. The complexity, inefficiency,  
Incorporating a Product Management Mindset | 49 and bureaucratic challenges of getting and using it would deter any customer. This  
fictitious example of a poor data experience illustrates that organizational systems  
and decisions around managing data are not designed with the user in mind. They’re  
inconsistent, difficult, and time-consuming to navigate. Instead of enabling you to do  
your job, they create barriers that you have to overcome.  
While organizational leaders unfortunately seek quick technology  
solutions, they fail to recognize that most problems created by  
poor data experiences are caused by decisions, and that expensive  
solutions that promise quick fixes rarely live up to those promises.  
The fault isn’t in the technological solutions out there, it is that  
technology cannot address operational issues caused by a lack of  
policy that supports a data-centric approach to achieving business  
goals. If there are core problems around data experiences, the root  
cause of those problems need to be addressed, and they are rarely  
related to technology.  
A data experience begins the moment a data consumer requests data, and it continues  
through the process of using the data to complete tasks, including the collaborative  
and social experience of sending data downstream. Your data team should have  
seamless, efficient, and effortless user experiences with the data itself and with data  
management so that they can focus on creating real value.  
In summary, data experiences can make or break your ability to generate insights and  
create value. A poor data experience can lead to delays, frustration, and suboptimal  
results. A positive data experience, on the other hand, can empower you to do your  
best work, leading to better outcomes for your organization and the people it serves.  
It’s time to prioritize data experiences and recognize them for the critical role they  
play in data-driven decision making.  
# Defining Product Features  
When considering a commercial product—whether it’s an athletic shoe, a Photoshop  
subscription, or a cup of coffee—we often picture a simple transaction\: money  
exchanged for a tangible or intangible item of value. Even in scenarios where a pur‐  
chase is made on behalf of an organization, it’s ultimately a person who is responsible  
for a transaction.  
In the context of data, we introduce the terms data consumers and data producers.  
Throughout this book, we’ll be focusing on data products intended for internal  
customers and consumers \(employees, leaders, and the systems managing internal  
data\) unless explicitly stated otherwise.  
A data consumer is an individual within an organization who uses data to perform  
a specific task. A data customer, on the other hand, is the team or leader who funds  
50 | Chapter 3\: Data-Centric Innovation\: A Guide for Data Champions the data service as part of their budget. Typically, data customers are strategic deci‐  
sion makers, while data consumers are data scientists, data engineers, and business  
analysts who utilize data in their various roles.  
Interestingly, data consumers often transform into data producers. For instance, a  
business analyst who collects data and transforms it into a report for executives to  
consume is, in fact, a data producer. Similarly, software engineers who implement a  
button on a web page that captures interaction analytics when a customer clicks it are  
also data producers.  
In this context, we also introduce the concept of data distributors—those responsible  
for distributing data across the organization to the right people at the right time.  
Roles in data governance and data engineering often fall under this category.  
The journey of data from its point of origin to its point of consumption is often  
referred to as moving upstream and downstream. For instance, when a software  
engineering team implements a feature that generates data \(like the button-click  
event\), they are considered to be upstream from the business analyst who uses that  
data. When the data is transformed into a report by the business analyst and passed  
along to an executive, the data is said to move downstream, as shown in Figure 3-2.  
Figure 3-2. A data producer \(person or system\) is upstream from a data analyst, who  
consumes the data and becomes a data producer, sending the data downstream to  
executives, who are the new data consumers. Therefore, defining product features should  
consider both scenarios of producing and consuming data and the impact on others  
along the flow of information.  
Upstream and downstream are dependent on the perspective of  
who is consuming and producing data. For example, from a data  
engineering perspective, they might be consuming data upstream  
from a nightly batch process and producing datasets via data pipe‐  
lines for an analyst who is downstream from them.  
One of the most significant challenges in managing data is navigating the complexi‐  
ties of this process. There is a cost every time data is communicated and transformed,  
and miscommunication and misunderstandings caused by poor data quality or  
poorly managed data can be incredibly wasteful.  
Incorporating a Product Management Mindset | 51 Therefore, product features defined by a data project manager impact the entire flow  
of how data is produced, consumed, distributed, and transformed. User experience is  
important not only to data consumers, but also the business value derived from the  
data and the operational efficiency of distributing the data. Understanding product  
features depends fundamentally on perceiving how data flows between people and  
processes.  
# Defining and Measuring Success  
One of the primary roles a product manager holds—irrespective of whether it is  
stipulated in their job description—is the ability to define and measure success. This  
is an absolute necessity, a cornerstone in the architecture of their responsibilities.  
While a conventional product manager caters to external clients, a data product man‐  
ager usually focuses on serving an internal clientele—the employees who generate  
and utilize data. OKRs and KPIs are potent tools for setting targets and assessing  
performance. OKRs comprise an objective—a clear statement of what you intend  
to accomplish—and key results, which are quantifiable means to gauge the progress  
toward the objective. KPIs are specific metrics that reflect the performance of an  
organization, a team, or an individual toward realizing their business objectives.  
Consider a scenario where a business needs to achieve \$1M in sales by a certain  
season to meet its payroll requirements. In such a case, a KPI can be established  
to scrutinize the vitality of the sales. An executive can view a report and instantly  
recognize any impending issue. An OKR symbolizes an aspirational goal, such as,  
“Double the sales by improving the attention to personal preferences of clients in  
communication and execution.” Key results are assessed in terms of the percentage of  
the goal achieved.  
Bear in mind that data can potentially be misused as a punitive  
tool, which in turn encourages individuals to set the lowest plausi‐  
ble OKRs and KPIs to avoid the risk of unfavorable in outcomes.  
Instead, you should consistently strive to establish goals that have a  
meaningful impact and generate substantial value.  
# Unifying Versus Aligning  
There’s a subtle yet significant difference between the terms aligning and unifying.  
Alignment refers to the synchronization of people within an organization, ensuring  
they work toward a common objective. This encompasses shared understanding,  
mutual goals, and coherent strategies, akin to a band playing in harmony. However,  
alignment is not a static state; it’s a dynamic, ongoing process necessitating continual  
reassessment and adjustment.  
52 | Chapter 3\: Data-Centric Innovation\: A Guide for Data Champions On the other hand, unifying refers to a deeper level of integration, encompassing not  
just people, but also processes and technology. It’s the process of fine-tuning these  
three elements to interconnect and work together efficiently and effectively. Unifying  
necessitates a continual commitment to improvement, a willingness to be self-critical,  
and the use of data to evaluate and drive change. It requires awareness of one’s biases  
and the humility to correct them.  
The essence of unifying lies in its ability to break down silos, con‐  
nect disparate elements, and foster an environment where everyone  
and everything works in unison toward a common objective.  
A data champion or data product manager is able to see how data flows and connects  
across various silos, diving into low-level technical conversations—such as how to  
use JSON and JSON Schemas to model business processes—and then zooming out to  
high-level strategic conversations, such as setting KPIs on financial performance and  
designing ways for teams to better collaborate and remove barriers and inefficiencies.  
The example in “Defining Data Users’ Needs” on page 49 about leadership needing  
a machine learning team to optimize marketing budgets at the risk of layoffs comes  
from a real-life consulting experience. Because the company currently had teams with  
two separate objectives, one team was incentivized by one KPI—how many custom‐  
ers signed up—but they didn’t care whether those customers would quit shortly after.  
This is an example of how KPIs can skew incentives. Meanwhile, the data science  
team responsible for analyzing churn and providing insights on how to reduce it  
had absolutely no impact or influence on the root cause of the problem. The advice  
we gave was that rather than having one team using data science to optimize ads to  
get customers to sign up for subscriptions and another team working on reducing  
churn, leadership should think about the problem holistically. The goal is to spend  
the minimal amount of money on finding the customers with the minimal chance of  
canceling their subscriptions.  
The resolution necessitated a fusion of data strategy and product management. The  
individual who sought our consulting expertise had to step into the role of a data  
champion, which required approaching executives with a bold claim\: “The existing  
systems, processes, and experts you’ve put in place do not optimally support the  
data team’s ability to generate business value.” Making such a statement can indeed  
be daunting, and it can potentially disrupt established norms. The imperative was  
the essence of the unification we advocate\: to align the business and data teams’  
objectives, and subsequently delve deeper technically to harmonize their processes,  
data collection, and analysis methodologies. By optimizing their surroundings, they  
enhanced the utility of their data, bolstered their teams’ performance, and ultimately  
improved their business outcomes.  
Unifying Versus Aligning | 53 As a data champion, you are tasked with catalyzing changes in business processes  
and breaking down silos to align business goals with data perspectives. Instead of  
approaching problems based on the organization’s current state, rules, processes,  
and silos, you must have the goal of unifying business, data, and code into a single  
coherent strategy. This approach underscores your willingness to take risks for the  
betterment of the business and the necessity of deriving value from data.  
The ability to zoom in and out between various levels of abstraction and complexity  
in the worlds of experience design, data, and code while synchronizing with your  
organization’s communication channels is what will make you most effective as a data  
champion.  
As a data champion, your greatest challenge, skill, and source of  
reward lies in the perpetual commitment to unifying at various  
levels and domains, persistently refining how all the pieces connect  
and influence each other. Unifying is about creating an intercon‐  
nected system where people, processes, and technology are not just  
aligned but are deeply interwoven, creating a robust, efficient, and  
adaptable organization. This level of organizational unity can drive  
significant efficiencies, foster innovation, and ultimately contribute  
to sustainable business success.  
# Summary  
Data product managers, much like skilled chess players, must strategically maneuver  
various elements within an organization to achieve a desired outcome. They need  
to understand the entire board—or the entire organization—and how each piece, or  
department, can best contribute to the overall strategy.  
Each chess piece has a unique role and movement pattern, and the same can be  
said for the different departments within an organization. For instance, consider the  
design of a website. A data product manager, like a chess player thinking several  
moves ahead, must consider how the design needs to be altered not only to utilize  
insights gained from data but also how to collect the necessary data for future  
predictions. They must work closely with the design team to ensure that the site is not  
only aesthetically pleasing and user friendly, but also optimized for data collection  
and analysis.  
Similarly, a data product manager must determine how software engineering can  
create high-quality data upstream at the source. This might involve implementing  
specific data collection features or standards in the software development process,  
or it might mean working with engineers to ensure that the data generated by the  
software is accurate, reliable, and useful for downstream analysis.  
54 | Chapter 3\: Data-Centric Innovation\: A Guide for Data Champions In the chessboard analogy, if cash is an organization’s king—the lifeblood of the  
organization—then data is the queen, a powerful piece that can move in any direction  
and has the potential to change the course of the game. Just as a chess player protects  
and strategically uses the queen, a data product manager must safeguard the quality  
of the data and leverage it strategically to drive business value.  
Data product managers play a key role in steering organizations toward becoming  
more data-centric. They advocate for the strategic use of data across all levels of  
the organization, from daily operations to long-term strategic planning. Above all,  
because data belongs to the entire org and not any one team or functional depart‐  
ment, they work to embed data thinking into the organization’s culture, breaking  
down silos and fostering cross-functional collaboration around data.  
The data product manager is not just a role, but a mindset. It’s about seeing the  
potential of data to transform the organization and having the skills, knowledge, and  
influence to turn that potential into reality. It’s about leading the organization on  
its journey toward becoming truly data driven, where data informs decisions, drives  
innovation, and creates value at every level.  
Now that we’ve had a thorough review of what a data champion is, and how a data  
product manager incorporates parts of roles and responsibilities from data strategy  
and product management, Chapter 4 will cover what a data product is and discusses  
schema-first design in detail. Knowing how to design data products and use schema-  
first design will provide you with effective tools that a data product manager can use  
to implement an Agile data strategy.  
Summary | 55 CHAPTER 4  
# Concept-First Design for Data Products  
In this chapter, you will learn a new and straightforward definition of a data product,  
described across four facets. You’ll also discover a method called concept-first design  
for crafting data products and understand their relationship to schemas.  
Concept-first design is an effective strategy that seamlessly bridges the communi‐  
cation gap between nontechnical business teams and technical teams. It employs  
universally understood tools, such as diagrams and spreadsheets, to represent ideas  
and challenges.  
The beauty of concept-first design lies in its simplicity. One translates business  
language or logic into a hierarchical format, akin to how JSON and JSON Schema  
operate—these are digital languages that machines comprehend. By using concept-  
first design, the effort to convert business logic into code is reduced. This minimizes  
the errors and inefficiencies often arising when developers and data stewards make  
assumptions during concept modeling.  
Imagine a data product as a box containing a single tool, complete with everything  
a user needs to accomplish a task. Think of buying a friend an electronic gift. If the  
gift lacks a battery or instructions, it leaves your friend scrambling to find missing  
pieces—a frustrating experience. This is precisely how you must think about data  
products. A data product should be a comprehensive package, providing users with  
everything they need to utilize the data effectively. The goal is to avoid making users  
chase down additional components or “fix” elements to make the data usable.  
The concept-first design approach is the key to creating these all-inclusive data  
products. It’s a method of translating the concepts you’ve derived from stakeholder  
conversations into a pseudocode format. This format acts as a relay baton, allowing  
you to pass the concepts to data practitioners to implement in line with the business  
needs of your data product. Concept-first design provides a high-level representation  
57 of concepts \(either visually or textually\), whereas a schema deep dives, formalizing  
these concepts with meaning and hierarchical structures.  
Consider this\: if you interview five stakeholders and ask them to  
describe a problem and the concepts involved, you’re likely to get  
five different perspectives. However, if you ask them to formalize  
their definitions into a pseudocode data structure, you’ll see more  
concrete alignments and misalignments and expose the gaps in the  
shared understanding of problem concepts and objectives.  
Being data driven refers to an approach where data is at the core of the decision-  
making process. The idea is that all insights, strategies, and decisions are based  
on data analysis and interpretation, rather than solely on intuition or personal  
experience. In a data-driven approach, data is considered a critical asset, and the  
systems and procedures are designed around it to ensure its accuracy, consistency,  
and availability.  
In order to become data driven, it is crucial to first align people with the concepts  
that the data is going to represent. This is where concept-first design comes into play.  
Concept-first design is about defining the concepts and their relationships before  
they are transformed into a data model. It starts with understanding the business  
requirements, defining the key concepts, and making sure everyone involved has a  
shared understanding of what these concepts represent, for whom, and why.  
These concepts form the foundation for the data model and help to ensure that it  
accurately reflects the real-world scenario it is intended to represent. To implement  
a concept-first design, stakeholders must define these concepts, structure them for‐  
mally into schemas, assign meaning to the used vocabulary, identify any gaps, and  
work collaboratively to align everyone’s understanding. This leads to the creation  
of a shared understanding that adequately meets the stakeholder needs. Once this  
shared understanding is achieved, the data product is well designed and ready for  
implementation.  
The transformation into a data-centric organization begins with a concept-first  
design approach, fostering a culture where decisions are made based on data, leading  
to increased efficiency, better insights, and more informed decision making. This  
chapter is your operating manual. As the data champion, you’re the crucial link  
between business stakeholders, data, and coding teams. Chapter 5 will delve into the  
nuts and bolts of implementation. For now, let’s focus on your role in creating a  
compelling and effective data product.  
58 | Chapter 4\: Concept-First Design for Data Products Packaging and Products\: An Example Using Coffee  
As we’ve established, data should be considered a product, and to hammer that home  
we’re going to use an actual product, coffee, as our running example as we talk about  
data. Picture yourself as an artisanal coffee producer. Your craft revolves around  
having detailed knowledge of coffee varieties and the process of transforming raw  
beans into a tantalizing brew. You journey to Colombia, one of the world’s premier  
coffee-producing nations, to source the finest beans and partner with local farmers to  
ensure optimal harvesting and processing methods.  
You opt for small-batch roasting to maintain meticulous control over the process,  
fine-tuning the roasting conditions to achieve the perfect flavor profile. Unlike  
large-scale commercial roasters, your intimate approach allows for a more distinct  
and refined taste. Each batch, even those from the same source, demands unique  
adjustments based on factors like the age of the beans and the ambient roasting  
conditions.  
Upon completing the roasting, you package your beans to shield them from oxygen  
and light, appending a label indicating the brand name, coffee type, roast level, and  
other pertinent information. Your hope is to catch the eye of potential buyers with  
your enticing blend and attractive packaging.  
In a local coffee shop, a woman—a business leader by day and a mother by night—  
spots your coffee beans. Intrigued by the artisanal packaging and anticipating a long  
day of tackling complex financial problems, she decides your coffee would be an  
excellent way to start her workday. So, she purchases your product.  
She wouldn’t buy the coffee if it lacked proper labeling. Nor would the store sell it if it  
didn’t meet FDA regulations, including clear source labeling. So, before the coffee can  
be enjoyed, the customer interacts with the packaging.  
The bag provides context—indicating the coffee’s origin \(Colombia\), the manufac‐  
turer \(you, the artisanal coffee producer\), and the product’s purpose \(to deliver artisa‐  
nal organic medium roast coffee directly from farmers\). It also contains nutritional  
information and an ingredient list, a standardized structure explaining the product’s  
composition. The bag’s barcode enables the store to identify the specific product  
being purchased, eliminating any ambiguity about the transaction. Only after these  
interactions with the packaging and store can the customer use the product inside the  
bag—your delicious coffee beans.  
In this analogy, the coffee beans symbolize data. The difference between raw data  
and a data product lies in the additional contextual elements—the who, what, which,  
why, how, and where. Just as a bag of coffee beans must meet certain requirements  
before being stocked on the shelf and purchased by a customer, a data product of  
quality needs to meet similar standards for an organization to safely distribute and  
Packaging and Products\: An Example Using Coffee | 59 use it. Leaving gaps between data and data products often results in wastage and  
inefficiencies in how organizations manage data.  
# The Four Facets of a Data Product  
A data product encapsulates both the data and its packaging into a single, self-  
contained object. As a data product manager, your role is to maximize the data pro‐  
duct’s value, which is measured by the utility and quality of user experience for the  
person working with the data and its financial worth. A well-designed data product  
has clear measures and metrics, akin to commercial, customer-facing products like  
subscription services or physical goods.  
If a company is already monetizing its data by selling it to other businesses, it is  
inherently treating its data as a product. However, viewing data as a product is  
even more crucial when considering internal clients, namely the company’s employ‐  
ees. The same principles and best practices that are applied to create valuable, user-  
friendly, and business-aligned data products for external customers should also be  
used for data products intended for internal use. Whether the data product is facing  
outward or inward, it is still a product of the company and should be treated with the  
same level of care, precision, and quality. The value of treating data as a product is not  
limited to external transactions; it’s equally crucial to the internal data handling and  
decision-making processes.  
The user experience with a data product begins the moment a user encounters it.  
If a user opens a CSV file and struggles to understand the column names, that’s a  
poor user experience. We can gauge user experience with data much like a product  
manager would measure a web form’s usability, including time taken, number of  
clicks, and any issues that lead to drop-offs or lost opportunities.  
As a data product manager, your role is to create fantastic data product experiences.  
High-quality, user-friendly, and business-aligned data products save time, instill trust,  
and are optimized for business objectives. They are, without a doubt, a valuable asset  
to your organization.  
Yet, if your data product isn’t one self-contained object, it’s incomplete and of inferior  
quality. Figure 4-1 shows the four facets of a well-crafted data product, which like  
a physical product, encapsulates the dimensions needed to minimize ambiguity and  
reduce knowledge gaps and blind spots in our data.  
60 | Chapter 4\: Concept-First Design for Data Products Figure 4-1. The four facets of a data product are meant to ensure data hygiene, as  
described in the Preface, so that anyone using data has everything they need to work  
with data efficiently and effectively in a self-contained object.  
A well-designed data product, much like our artisanal coffee, boasts the following  
characteristics. Think of them as four facets of a gemstone\:  
Data  
This is the what\: the actual information contained within the data product.  
Structure  
This facet deals with the how. How is the information expected to be formatted  
when communicated?  
Meaning  
This facet addresses the which. Which definition of a word is intended, given the  
language and concepts conveyed?  
Context  
This answers the why, where, and who. Why was the product created, and what is  
the problem it solves? Where can it be found \(API, database, table, lineage\)? Who  
is responsible for governance, service-level agreements \(SLAs\), roles-based access  
controls \(RBAC\), and who created it?  
These four facets help transform mere data into a meaningful data product. Just as  
the coffee beans alone wouldn’t result in the same experience without their carefully  
designed packaging, data alone is not as impactful without the proper structure,  
meaning, and context.  
From a data product perspective, if you have data but not the other facets in one  
contained object, you have an incomplete and poor quality data product. Figure 4-2  
illustrates this further as a comparison to a coffee bean product.  
The Four Facets of a Data Product | 61 Figure 4-2. A data product has four main facets\: data, structure, meaning, and context.  
This completely encapsulates the key elements a data user needs in order to be effective  
at working with data into a single object \(product\).  
A data product approach also makes searching for data and searching in data more  
efficient because you are standardizing how information about the data is organized,  
which can save a tremendous amount of time.  
For more information on the difference between searching in data  
and searching for data, take a look at The Enterprise Data Catalog,  
by Ole Olesen-Bagneux \(O’Reilly, 2023\)\:  
• Searching for data. It is critical that employees can easily and  
•  
quickly find data.  
• Searching in data. It is equally vital that employees can under‐  
•  
stand what concepts in the data mean, such as column names.  
Remove ambiguity.  
A unifying data strategy means reducing waste and inefficiency. Having the data,  
structure, meaning, and context located in separate systems and places—or lacking  
entirely—adds incredible amounts of complexity and chaos into your data manage‐  
ment practices.  
Bring the dataset, the metadata, the semantic management, the governance, and so on  
into a single, complete unit\: the data product. Doing so will produce a far better data  
experience, one that is ultimately more effective and efficient from an operational  
business perspective because your data users won’t be wasting time searching or using  
multiple systems to manually combine them together. And this is what a good data  
product design will do for your organization.  
62 | Chapter 4\: Concept-First Design for Data Products Getting Started with Concept-First Design  
One of the authors of this book, Ron, has had several experiences with companies  
that were groundbreaking for him as a consultant. To illustrate these experiences,  
consider the following real-world examples \(which have been merged and altered to  
keep the companies’ identities private\).  
Imagine working with Company A that makes a billion dollars in revenue a year from  
a single flagship product, a company that has been historically and reliably dominant  
in its category across the entire global market. Its fiercest competitor, Company B,  
has just launched an AI version of its similar product, putting immense pressure  
on Company A’s C-level executives to show their board that the company is staying  
innovative and has a response to the new threat. Company A is currently leading  
market share, but isn’t particularly known for being innovative, and if an AI solution  
is not offered soon, there is a very real possibility that customers could switch to  
Company B, which could have dire negative consequences for Company A.  
To respond to the threat, a team of top-tier, world-class data scientists and machine  
learning engineers are hired. They are paid fantastical salaries—money is no object  
and expenses are not spared to hire the team that the C-level executives can point to  
as “the best in the world.”  
However, after several years, the team is still unable to create an AI version of the  
product. Deadlines keep getting pushed back, and teams are blaming each other.  
So, the C-level executives do what most executives do\: hire expensive consultants to  
solve the problem for them, believing that their teams internally couldn’t do it. The  
expensive consulting firm proceeds to charge tens of millions in consulting fees to  
bring in entire teams of expensive experts and the most powerful cloud computing  
services.  
Almost a hundred people are either hired or pulled off other teams, so the renewed  
effort succeeds, and the building of the AI product begins! But then one year later, the  
AI product is still terrible, users hate the experience, the AI doesn’t work very well,  
and now the C-level executives have to tell their board that they’ve wasted years and  
many tens of millions of dollars with absolutely nothing to show for it.  
This is the point in the story where Ron was brought in to see what he could find,  
and the result was that in under a year, the AI engine was built with a fraction of the  
team, time, and cost of the previous effort. The technique that was used and refined  
over many problems, across many industries and years, eventually came to be called  
concept-first design.  
Our emphasis in concept-first design is on the word first. It underscores the  
importance of not rushing into development, design, or business decisions until  
Getting Started with Concept-First Design | 63 all concepts are meticulously designed and agreed upon by all stakeholders. For  
more technical teams, you could describe this process as schema-first design, although  
concept-first design is a far more approachable term for nontechnical people.  
# A Blueprint for Unifying  
To help leaders grasp the transformative power of unification within an organization,  
let’s break down the journey into three pivotal phases\: assess, align, and accelerate.  
Each phase serves as a building block, and together they offer a structured pathway to  
drive change effectively, as illustrated in Figure 4-3\:  
Figure 4-3. The three phases of unifying can be summarized using this flowchart to  
explain the activities of unifying in a high-level summary. Whether you are an internal  
or external data champion, giving a clear description of what transformation will look  
like can help gather support.  
1.  
1\. Assess. The first step is a thorough evaluation of your organization’s current state.  
Meet with key stakeholders to listen, gather insights, and assess different view‐  
points. The assess phase begins with concept-first design to translate stakeholder  
perspectives into organized, hierarchical concepts. This not only aids in data  
collection but also in establishing a common way to capture perspectives and  
language across departments. With the help of a well-designed spreadsheet or  
whiteboard, this phase enables everyone to better understand existing alignments  
or disparities.  
2.  
2\. Align. Armed with a comprehensive assessment, the next step is to bring the  
disparate perspectives into alignment. Chapter 6 introduces the concept compass,  
a tool designed to precisely illuminate variances among stakeholder perspectives.  
However, this also requires a tool to connect all the threads across organizational  
networks that use those concepts, and data champions will utilize the CLEAN  
data governance framework, covered in Chapter 7, to follow a methodical and  
64 | Chapter 4\: Concept-First Design for Data Products structured approach. This phase ensures that everyone is on the same page,  
making the organization ready for targeted action.  
3.  
3\. Accelerate. Once concepts are defined, aligned, and connected with proper data  
hygiene, they are ready to be described in the context of success measures and  
metrics that gauge progress. The primary tools for the accelerate phase are  
annotated process maps, covered in Chapter 9, and success spectrums and UX  
design strategies in Chapter 10. The accelerate phase tools enable teams across  
various domains—business, data, code, design, and more—to align with a clear  
execution road map and measurement criteria.  
Crafting impeccable data products necessitates a rigorous commitment to the  
principle of data hygiene, as detailed in “What You Can’t See Can Kill You,  
and the Same Is True for Data”  
on page xii. The systematic progression through the  
assess, align, and accelerate phases serves to eliminate subtle threats such as ambigu‐  
ity and knowledge disparities, laying the foundation for enhanced collaboration, pre‐  
cise decision making, and optimized productivity. When we adhere to data hygiene  
and concurrently maintain overarching principles of alignment across processes and  
organizational networks, we pave the way for breakthroughs in innovation, data  
science initiatives, and operational streamlining.  
Echoing the insights of Dr. Semmelweis on the indispensability of hand hygiene in  
healthcare \(see “What You Can’t See Can Kill You, and the Same Is True for Data” on  
page xii\), the value of data hygiene becomes crystal clear. Much like the foundational  
role of handwashing in medicine, impeccable data hygiene stands as the bedrock,  
ensuring organizations not only remain protected but also thrive. Ignoring data  
hygiene can result in disastrous consequences.  
Assess, align, and accelerate isn’t just a mantra; it’s our map.  
# Mapping the Conceptual Terrain\: Assessing Concepts  
The assess phase is a structured exploration of the collective mind of your team. It’s  
a series of one-on-one interviews with key stakeholders and contributors across the  
board. This includes developers, designers, product managers, data scientists, and  
more. This phase is about asking the people you interview to share their perspective  
about the work they do\:  
1.  
1\. Describe the important problems to solve. Ask people to describe what problems  
they are working on, toward which objectives, what actions they take, and how  
success is measured by the outcomes. Their descriptions can be as a visual on a  
whiteboard or in a document such as PowerPoint, Excel, or Google Docs.  
2.  
2\. Clarify the important concepts they contain. With the map of the most important  
problems, objectives, actions, and success metrics in hand, explore these with  
Mapping the Conceptual Terrain\: Assessing Concepts | 65 your interviewee. Simply capture the words and their meanings in plain language,  
and if there are any calculations \(such as profit or customer engagement\), ask  
them to specify exactly how they are measured. This is best done in a spread‐  
sheet, an example of which is shown in Figure 4-4.  
3.  
3\. Arrange the concepts into hierarchical relationships. Once you have some mean‐  
ings, ask people to break down the concepts into more granular components in  
a hierarchical structure of parent-to-child or child-to-sibling relationship. This is  
the same format a schema uses. This is also best done in the spreadsheet format  
shown in Figure 4-4.  
Figure 4-4. Using a spreadsheet for concept-first design. Three columns are used for any  
concept\: Level \#, Type \(object, number, text, list, and so on\), and Definition. These are  
what are used to create meaning for the concepts. When you want to add a subconcept  
\(also known as a child concept\), you add those child concepts in the column representing  
the next level. For example, for the Product concept \(level 1\), the Title child concept  
is added at level 2. This layering of levels of concepts becomes a hierarchical structure,  
which is another way to say a schema.  
Your assessment will be as follows. Compile all of the stakeholder and contributor  
perspectives and show how aligned or unaligned they are. You now have a quantita‐  
tive way to provide feedback to leaders and the team, showing that, for example,  
out of five people, only two agreed exactly on what certain concepts mean and how  
they are structured. How can any team work effectively together if they aren’t unified  
around the concepts that data and code are supposed to capture? They usually can’t.  
And if you ask a designer, data engineer, marketer, business leader, and software  
engineer to come up with the meaning and structure of concepts, they will all have  
their own particular perspectives.  
The fundamental step in concept-first design is always to put  
understanding the constellation of concepts first before making deci‐  
sions to invest \(business\), analyze \(data\), and build \(code\).  
66 | Chapter 4\: Concept-First Design for Data Products Figure 4-4 showcases a spreadsheet that acts as a schema. It visually represents  
the hierarchy of concepts in a product, illustrating the arrangement levels and the  
expected entities at each level. This approach brings schema design to everyone, not  
just to developers. It offers a unique and accessible way to craft concept structures  
similar to how they would be created in JSON.  
The organization of concepts in this CSV format diverges from a traditional schema.  
A traditional schema primarily focuses on the hierarchical structure of concepts,  
whereas this CSV-based schema integrates both structure and meaning. Therefore, it  
is not just a spreadsheet; it’s a comprehensive representation that includes semantic  
information alongside the conceptual hierarchy. This integrated approach helps pre‐  
vent and reduce ambiguity, thereby enhancing efficiency in data management and  
system development.  
# Facilitating Assessments of Conceptual Alignment Across  
# Technical and Nontechnical Teams  
Figure 4-5 shows a real-life example, or an instance, of a coffee product, constructed  
using the blueprint provided by the schema in Figure 4-4. Essentially, Figure 4-4  
outlines the expected structure of a product object, and Figure 4-5 demonstrates how  
to populate that structure with specific data about an actual product.  
The real power of conceptual schemas, as demonstrated in Figure 4-5, lies in their  
accessibility and the simplicity they bring to expressing business logic. By using a  
straightforward spreadsheet, business logic can be seamlessly and directly translated  
into JSON objects. This approach greatly enhances efficiency and eliminates a signif‐  
icant pain point—the often complex and error-prone task of translating business  
stakeholder language into functional technical requirements.  
Developers frequently grapple with the challenge of translating business requirements  
into functional code. Business leaders often articulate their needs based on their per‐  
spective, which is rooted in business strategy, customer demands, or market trends.  
However, these needs are not always communicated in terms that developers can  
easily translate into a technical design. This communication gap is not because of a  
lack of effort on either side, but rather because business and development are two  
distinct domains with their own jargon, perspectives, and priorities.  
The challenge lies in the fact that developers are not mind readers. They can’t intuit  
the intricate nuances of a business requirement unless it’s spelled out explicitly. When  
expectations are not met, it often leads to frustration and blame, with developers  
bearing the brunt for not understanding the “obvious.” This situation results in was‐  
ted time, resources, and strained relationships between teams. Moreover, it creates an  
environment of constant back-and-forth revisions, delayed projects, and subpar end  
products.  
Facilitating Assessments of Conceptual Alignment Across Technical and Nontechnical Teams | 67 Figure 4-5. A conceptual schema. The concept-first design schema from Figure 4-4 can  
be mapped one to one to a JSON representation. This mapping makes it easier for  
technical and nontechnical teams to understand where they are aligned or misaligned in  
how to model and communicate concepts used across teams and technology systems and  
to integrate into functional business processes.  
Conceptual schemas can help bridge this communication gap. They provide a com‐  
mon language for both business leaders and developers to articulate and understand  
requirements. By organizing concepts in a structured, hierarchical manner that  
includes both meaning and structure, conceptual schemas offer a clear road map  
for developers. They enable developers to see what business leaders envision, in a  
format that can be directly translated into code. This approach reduces ambiguity,  
ensures alignment of expectations, and streamlines the process of turning business  
logic into functional requirements, leading to more successful projects and a better  
working relationship between teams.  
JSON and JSON Schemas, being both human- and machine-readable languages, are  
crucial elements of concept-first design. During the assess phase of unifying, it’s  
essential to include both technical and nontechnical teams in your evaluation. The  
aim is to assess the organization’s overall alignment concerning data vertically and  
horizontally across various domains.  
68 | Chapter 4\: Concept-First Design for Data Products If the technical aspects seem daunting, don’t be concerned. You  
don’t have to scrutinize the code personally. Instead, collaborate  
closely with a developer who can examine the data structures in  
the code and provide insight into the alignment or misalignment  
between technical and nontechnical teams.  
If the technical team requires more data than what the business team has defined in  
their representation, that’s perfectly fine. There might be a legitimate technical need  
for additional information. Nevertheless, it’s crucial for the business, data, and code  
teams to reach a consensus on the fundamental concept representations, aligning  
them with the first step of our assessment\: define the critical problems to solve and  
their context, including objectives, actions, and success metrics.  
The assess phase isn’t solely about measuring conceptual differences among team  
members or between code representations of concepts. It also involves gauging the  
disparities between concepts and the defined problems, objectives, actions, and suc‐  
cess metrics.  
In the consulting adventure outlined earlier, Ron discovered that a single word—  
just one—that was being used in the success metrics had different interpretations  
across teams. For the business team, the word adaptive signified that success was  
tied to their current product’s ability to adapt the user experience to their current  
business model, which was, coincidentally, tied to the KPIs that measured their  
success, bonuses, and so on. In contrast, the data science team evaluated the success  
of being adaptive based on how accurately their predictive models could adapt the  
user experience—not optimized for the business team’s KPIs, but for what was best  
for the user experience.  
You can apply concept-first design to literally anything that can be conceptualized,  
including success metrics. Once you have made your assessments, showing the gaps  
of alignment, you can begin working on aligning teams to a shared concept-first  
design schema, which we will explore later in the book. Chapter 5 explains how a data  
product manager or data champion should become more familiar with the technical  
aspects of implementing and using schemas with JSON Schema, which will enable  
technical teams to begin designing schemas for technical purposes.  
# Smooth Is Slow, Slow Is Fast  
The phrase “go slow to go smooth, go smooth to go fast” emphasizes the importance  
of taking the time to learn how to do something correctly before focusing on speed.  
This approach applies equally to learning a musical instrument and learning how to  
align innovation efforts.  
Assessing concepts first, as shown in Figure 4-4, is a simple way to ask basic questions  
of stakeholders, learn about their problems, and find where they differ in opinions  
Smooth Is Slow, Slow Is Fast | 69 from other stakeholders. This assessment is critically important, even if it feels like it  
slows down your team significantly. Some of the questions worth asking may seem  
silly, obvious, or even insulting. However, over and over again in consulting, we have  
found that these obvious questions have never been asked before, and the result is  
often very costly mistakes related to data.  
Unifying is a continual practice. If misalignment creeps up, it  
is important to begin the process again and look back at your  
concept-first schemas to identify where misunderstandings may  
have arisen.  
Here are some of the benefits you will gain from unifying\:  
•  
• In environments where alignment is prioritized and is thriving, teams collabo‐  
rate far more seamlessly and are able to exchange insights, knowledge, and  
resources. This collaboration leads to a culture of continuous learning and  
improvement, which will empower your organization to swiftly adapt and  
respond to challenges.  
• The capacity to adapt and respond to change is crucial for any business to suc‐  
•  
ceed. Alignment means better understanding of how to operate in more nimble  
and adaptive ways, as teams are better equipped to comprehend the implications  
of new insights, trends, and shifting requirements.  
•  
• An unfortunate result of the bottlenecks around centralized data management  
is that some teams become so desperate for solutions that they go around the  
centralized data management team and build or contract out their own data  
solutions to make forward progress. However, failing to involve the data team  
in decisions about data architecture or storage can lead to data quality issues,  
security breaches, and technical debt. Making sure everyone is aligned enables  
teams that are facing bottlenecks to move forward with far less risk because they  
know exactly what concepts to align and how to align them.  
# Summary  
This chapter discussed the significance of organizations’ internal data products, draw‐  
ing comparisons with commercial, customer-facing products. It emphasized the need  
for good user experience in data products and underlined the role of a data product  
manager in creating excellent data product experiences.  
The four facets of a data product are data, structure, meaning, and context. This  
chapter illustrated these facets using a coffee bean analogy, asserting that a data  
product without any of these facets is incomplete and of inferior quality.  
70 | Chapter 4\: Concept-First Design for Data Products We saw how a data product approach makes data search more efficient by standardiz‐  
ing how information about the data is organized. The difference between searching in  
data and searching for data was discussed.  
We learned that being Agile, in the context of unifying, advocates for reducing  
waste and inefficiency by bringing the dataset, metadata, semantic management, and  
governance into a single, complete unit\: a data product. This approach enhances  
the data experience by streamlining data-related processes and proves to be more  
effective and efficient compared to traditional methods of becoming a data-driven  
organization.  
We described the three steps to unifying\: assess, align, accelerate. The assess phase  
involves a structured exploration of the collective mind of the team to understand the  
gaps and severity of misalignment across teams. The align phase focuses on dispelling  
communication illusions and achieving effective alignment across all levels of the  
organization. The accelerate phase emphasizes iterating quickly to get feedback and  
implement and test solutions in an Agile manner.  
Finally, we reviewed the risks of accelerating without satisfactorily unifying—doing  
so might lead to building the wrong thing faster. Unifying prioritizes accuracy before  
focusing on speed and emphasizes continually aligning data team efforts with the  
organization’s overall objectives.  
Going between high and low levels of abstraction in your quest for unifying is the  
strategy you will continue to learn throughout this book. In Chapter 5, you, the data  
champion, will zoom in from thinking in a high-level strategic way about unifying  
concepts to a lower-level way of thinking about unifying concepts at a code level  
using JSON Schema.  
Summary | 71 CHAPTER 5  
# A Universal Language for Data  
The limits of my language mean the limits of my world.  
—Ludwig Wittgenstein  
Humans require fluency in a common language in order to communicate complex  
ideas. In the same way, breaking the data silos of an organization requires every party  
to use a common language to talk about the structure, semantics, and governance of  
data. As we saw in Chapter 4, a data definition that describes these concepts in an  
unambiguous way is called a schema, and it is an essential part of any data-driven  
strategy.  
While there is no shortage of options out there, we choose JSON Schema as our  
standard data language of choice. In this chapter, you will learn the basics of JSON  
Schema and how to read and understand any JSON Schema. This chapter purposely  
takes a modern top-down, vocabulary first approach to teaching you how to think  
about JSON Schema.  
Over the course of this book, you will gain expertise on JSON Schema and be able to  
use it as the cornerstone of your data-centric innovation initiatives. We will exemplify  
how schemas can provide immediate value by using them to render basic web forms  
for our fictitious Intelligence.AI online coffee company.  
This chapter builds on Chapter 2 and is aimed at the more techni‐  
cal audience interested in implementing data products. To continue  
learning about data alignment in a business sense, you can move to  
Chapter 6.  
73 What Is JSON Schema?  
JSON Schema is a set of specifications that introduce a declarative language to define  
the structure and meaning of JSON documents, referred to as instances. This lan‐  
guage is a general-purpose tool to talk about data across a wide variety of use cases  
from generative property testing to UI generation, data semantics, databases, and  
more.  
Due to the popularity of JSON as a universal data format, JSON Schema became the  
industry standard for validating and describing data. Users of JSON Schema range  
from Amazon, Microsoft, and Google, to institutions such as NASA, the U.S. Depart‐  
ment of Commerce, the National Security Agency \(NSA\), and the UK government.  
JSON Schema is also a key component of specifications like OpenAPI, AsyncAPI,  
RAML, and W3C Web of Things.  
The authors of this book have successfully deployed JSON Schema in the context of  
documentation generation, UI generation, fuzzing, linting, analyzing API complexity,  
code generation, data transformation pipelines, databases, data compression, and  
more.  
# What Is a Schema?  
A schema is a formal definition of a data structure that carries information about its  
syntax \(what the data structure looks like\) and its semantics \(what the data means\).  
As its name implies, JSON Schema is a standard schema language for JSON-based  
data structures. A JSON document that is a valid JSON Schema is called a schema.  
These schemas utilize a wide range of keywords to add meaning to the JSON instan‐  
ces they are meant to describe.  
Here is an example JSON Schema that describes object instances that define a name  
string property and an age positive integer property\:  
\{  
"\$id"\: "https\://example.com/my-schema",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "object",  
"required"\: \[ "name", "age" \],  
"properties"\: \{  
"name"\: \{ "type"\: "string" \},  
"age"\: \{ "type"\: "integer", "minimum"\: 0 \}  
\}  
\}  
Here is an example JSON instance that is valid according to the preceding schema\:  
\{ "name"\: "Tony Hoare", "age"\: 89 \}  
74 | Chapter 5\: A Universal Language for Data Don’t worry if you don’t fully understand that JSON Schema. We will go through the  
basics of JSON Schema in the remainder of this chapter.  
Schemas reduce errors and improve communication. Once your  
organization starts defining and using schemas, any data you share  
or obtain from others can be validated to make sure it is compliant  
with expected formats. In other words, having schemas creates an  
enforceable frame of reference to protect your organization from  
inconsistent data, reducing errors and enabling efficient communi‐  
cation as a result.  
# A Brief History of JSON Schema  
JSON Schema exploded in popularity given its use in API specifications such as  
Swagger and OpenAPI, but it is almost as old as JSON itself. Inspired by various  
schema languages for XML, JSON Schema was conceived at the Ajax World confer‐  
ence in 2007—only a year after the JSON specification was published—to solve  
the problem of validating JSON documents in a declarative and language-agnostic  
manner.  
Since then, 10 revisions of the JSON Schema specification have been published. The  
JSON Schema language evolved beyond the validation problem to become a general  
and extensible foundational framework for talking about data, supporting a notably  
wide range of use cases across industries.  
# The Building Blocks of JSON Schema  
A programming language is defined in terms of its grammar and standard library.  
Similarly, the JSON Schema language is defined on top of a small set of foundational  
concepts\: dialects, vocabularies, and meta-schemas.  
# Vocabularies and Dialects  
The JSON Schema specifications define a rich set of keywords for different use cases.  
The JSON Schema keywords we used in the previous example are \$id, \$schema,  
type, required, properties, and minimum. As the number of keywords defined in  
the specifications grew, they were split into groups of interrelated keywords called  
vocabularies. In JSON Schema parlance, a collection of vocabularies is referred to as a  
dialect.  
So far, every revision of the JSON Schema specification comes with an official dialect.  
The latest JSON Schema dialect at the time of this writing, which we cover in this  
book, is codenamed 2020-12.  
The Building Blocks of JSON Schema | 75 In Chapter 13, you will learn how to extend JSON Schema with your own  
vocabularies.  
# Meta-Schemas\: Schemas That Describe Other Schemas  
JSON Schema is so expressive that it is capable of describing itself, and this is by  
design. The idea of a JSON Schema that describes and validates itself or another  
JSON Schema is called a meta-schema. Meta-schemas play a key role in the versioning  
strategy of JSON Schema\: every release of JSON Schema comes with a new official  
meta-schema.  
The \$schema keyword allows schema authors to declare a Uniform Resource Identi‐  
fier \(URI\) to the meta-schema that describes the given schema. In other words, a  
JSON Schema says, “I am described by this other schema,” and as you might guess, a  
schema that doesn’t respect its meta-schema is not a valid JSON Schema.  
This is an example of a JSON Schema that sets its meta-schema to https\://json-  
schema.org/draft/2020-12/schema\:  
\{  
…  
…  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
\}  
Declaring the \$schema keyword is the most common way for JSON Schema imple‐  
mentations to know which dialect of JSON Schema a given schema is referring to. We  
know https\://json-schema.org/draft/2020-12/schema is the official meta-schema of the  
2020-12 dialect, so the preceding schema is essentially saying, “I am described by the  
schema that models 2020-12 schemas.”  
# Understanding JSON Schemas  
Reading a JSON Schema is no different from reading a piece of code. To know what  
the code means, you have to step through it, checking the external dependencies it  
consumes and the functions it invokes. Similarly, to understand a JSON Schema, you  
must determine the dialect in use, the vocabularies being used, and the keywords it  
declares \(see Figure 5-1\).  
76 | Chapter 5\: A Universal Language for Data Figure 5-1. Understanding a JSON Schema involves knowing its dialect, vocabularies,  
and keywords.  
Let’s analyze the JSON Schema given earlier in baby steps\:  
\{  
"\$id"\: "https\://example.com/my-schema",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "object",  
"properties"\: \{  
"name"\: \{ "type"\: "string" \},  
"age"\: \{ "type"\: "integer", "minimum"\: 0 \}  
\}  
\}  
It might feel a bit slow at the beginning, but by the end of this section, you will not  
only understand the schema you’ve seen before, but you will be able to methodically  
understand any JSON Schema out there.  
Understanding JSON Schemas | 77 Step 1\: Determining the Schema Dialect\: The \$schema Keyword  
The first step to understand a JSON Schema is to determine the dialect in use—in  
other words, the vocabularies that the schema is using. Without knowing its dialect,  
the keywords declared by a JSON Schema are literally meaningless; a JSON Schema  
implementation will silently ignore unrecognized keywords.  
The vast majority of JSON Schemas use the official dialect meta-schemas, so identify‐  
ing the dialect is as simple as looking up the value of the \$schema keyword\:  
\{  
"\$id"\: "https\://example.com/my-schema",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "object",  
"required"\: \[ "name" \],  
"properties"\: \{  
"name"\: \{ "type"\: "string" \},  
"age"\: \{ "type"\: "integer", "minimum"\: 0 \}  
\}  
\}  
Armed with this knowledge, we can tell that our JSON Schema sets the \$schema  
keyword to https\://json-schema.org/draft/2020-12/schema. This is the URI of the offi‐  
cial meta-schema for the 2020-12 dialect, so we know that our schema uses the JSON  
Schema 2020-12 dialect.  
You can check the vocabularies imported by a dialect by looking at the \$vocabulary  
keyword defined in its meta-schema. For example, the JSON Schema 2020-12 dialect  
hosted at https\://json-schema.org/draft/2020-12/schema makes use of 7 official vocab‐  
ularies\:  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"\$id"\: "https\://json-schema.org/draft/2020-12/schema",  
"\$vocabulary"\: \{  
"https\://json-schema.org/draft/2020-12/vocab/core"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/applicator"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/unevaluated"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/validation"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/meta-data"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/format-annotation"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/content"\: true  
\},  
...  
\}  
78 | Chapter 5\: A Universal Language for Data The attentive reader might have noticed that the official meta-  
schemas are recursively defined; they declare the \$schema keyword  
to point to themselves. In fact, JSON Schema is itself a recursive  
data structure. A relatively uncommon case that we won’t cover in  
this chapter is how to determine the base dialect \(specification revi‐  
sion\) of a JSON Schema that uses a custom meta-schema. In these  
cases, you traverse the chain of meta-schemas by looking at every  
\$schema keyword until you find a meta-schema that describes  
itself. That self-descriptive meta-schema URI corresponds to the  
JSON Schema version in use.  
# Step 2\: Determining the Schema Vocabularies  
At this point, we know that our JSON Schema uses the 2020-12 dialect. However, we  
still don’t know which vocabularies it uses. To determine this, we need to fetch the  
meta-schema through its URI and take a look at its \$vocabulary keyword.  
Inspecting meta-schemas  
We know that the meta-schema URI of our JSON Schema is https\://json-schema.org/  
draft/2020-12/schema. You can either download the schema using your favorite web  
browser or open it directly through its URI using any of the JSON visualizers we  
discussed in Chapter 2. Let’s use the “New from URL” feature of OK JSON \(see  
Figure 5-2\).  
Figure 5-2. Inspecting the 2020-12 official meta-schema using OK JSON. The key to  
determining the vocabularies in use is the \$vocabulary keyword.  
Understanding JSON Schemas | 79 As we saw, a meta-schema is identified by a URI. However, these  
are merely identifiers. JSON Schema does not guarantee that you  
will get back the corresponding schema if you request such a URI.  
That said, for convenience, this tends to be the case more often  
than not.  
Every JSON Schema vocabulary is identified through a URI. For example, the URI  
of the core vocabulary for the 2020-12 dialect is https\://json-schema.org/draft/2020-12/  
vocab/core.  
The \$vocabulary keyword  
The \$vocabulary keyword is a JSON object whose keys are vocabulary URIs and  
whose values are Booleans that determine whether the corresponding vocabulary is  
considered to be required \(true\) or optional \(false\). A JSON Schema implementa‐  
tion will abort processing if it encounters a required vocabulary that it doesn’t know  
about and understand.  
# Optional Vocabularies  
Optional vocabularies are not common in practice, so don’t worry much about them.  
All the examples in this book and official JSON Schema dialects out there mark  
vocabularies as required.  
But if you are curious, when a vocabulary is marked as optional and the JSON  
Schema implementation does not know about it, evaluation will continue. However,  
its keywords will have no validation effect. We will explore what happens to unknown  
keywords in Chapter 13.  
In this case, we know that our JSON Schema imports the following vocabularies,  
marking them all as required\:  
• https\://json-schema.org/draft/2020-12/vocab/core•  
• https\://json-schema.org/draft/2020-12/vocab/applicator•  
• https\://json-schema.org/draft/2020-12/vocab/unevaluated•  
• https\://json-schema.org/draft/2020-12/vocab/validation•  
• https\://json-schema.org/draft/2020-12/vocab/meta-data•  
• https\://json-schema.org/draft/2020-12/vocab/format-annotation•  
• https\://json-schema.org/draft/2020-12/vocab/content•  
80 | Chapter 5\: A Universal Language for Data Step 3\: Understanding Schema Vocabularies  
So we know which vocabularies are in use for our JSON Schema, but how do we  
connect this knowledge to specific keywords?  
Using the reference documentation  
For official vocabularies \(hosted at https\://json-schema.org\), you can consult Learn  
JSON Schema, a website that presents concise reference documentation for JSON  
Schema dialects and vocabularies. The documentation for the 2020-12 dialect  
presents all official vocabularies and the keywords each one defines. You can further  
browse specific vocabularies, like Unevaluated, to see the list of keywords introduced  
by that vocabulary. See Figure 5-3 for an example.  
Figure 5-3. The list of keywords introduced by the Unevaluated vocabulary.  
The attentive reader might recognize that some of the keywords we’ve been discus‐  
sing so far, like \$schema and \$vocabulary, are part of the Core vocabulary. This  
vocabulary is always required in every JSON Schema and declares the foundational  
keywords that make the dialect and vocabulary system work.  
Keyword namespacing \(or lack thereof\)  
JSON Schema doesn’t protect schema authors from having two vocabularies defining  
the same keyword name. If vocabularies Foo and Bar both declare a keyword called  
test, then these vocabularies are incompatible with each other and cannot be used  
together. There is no proper namespacing mechanism for referring to the test key‐  
word of a specific vocabulary other than simple naming conventions, such as every  
keyword from the Core vocabulary starting with the dollar sign \$ character. This fact  
often makes it tricky to determine which vocabulary a specific keyword belongs to.  
For example, our JSON Schema makes use of the type keyword, but it is not obvious  
to which vocabulary this keyword belongs. A JSON Schema implementation that  
supports a set of vocabularies will intrinsically know which keywords are provided by  
such vocabularies.  
If you are curious about which vocabulary defines a given keyword, we recommend  
searching for keywords on Learn JSON Schema. We can tell from a quick search that  
the type keyword is defined by the Validation vocabulary.  
Understanding JSON Schemas | 81 Step 4\: Understanding Schema Keywords  
Now that we know how to determine the vocabulary that defines specific keywords,  
let’s attempt to understand them one by one. We recommend consulting the docu‐  
mentation about every keyword you encounter.  
A first pass on top-level keywords  
First, we’ll take all the keywords used at the top level of our JSON Schema and group  
them by vocabularies. We’ll ignore nested keywords for a little bit\:  
\{  
"\$id"\: "https\://example.com/my-schema",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "object",  
"required"\: \[ "name" \],  
"properties"\: \{  
"name"\: \{ "type"\: "string" \},  
"age"\: \{ "type"\: "integer", "minimum"\: 0 \}  
\}  
\}  
These top-level keywords are\:  
\$id and \$schema from the Core vocabulary  
type and required from the Validation vocabulary  
properties from the Applicator vocabulary  
As its name implies, the Core vocabulary introduces foundational keywords that are  
essential for processing any JSON Schema. See Table 5-1 for the complete list of  
keywords defined in this vocabulary.  
Table 5-1. The complete list of keywords introduced by the Core vocabulary. The Instance  
column signifies the type of JSON instances in which the corresponding keywords take effect.  
We will discuss in more detail how JSON Schema keywords behave on different instance  
types in Chapter 8.  
Keyword Instance Summary  
\$schema Any Used as both a JSON Schema dialect identifier and as a reference to a JSON Schema that  
describes the set of valid schemas written for this particular dialect  
\$id Any Declares an identifier for the schema resource  
\$ref Any Used to reference a statically identified schema  
\$defs Any Used as a container for common shared definitions reused throughout the schema  
\$comment Any Reserves a location for comments from schema authors to readers or maintainers of the  
schema  
\$dynamicAnchor Any Used to create plain name fragments that are not tied to any particular structural location  
for referencing purposes, which are taken into consideration for dynamic referencing  
82 | Chapter 5\: A Universal Language for Data Keyword Instance Summary  
\$dynamicRef Any Used to reference an identified schema, deferring the full resolution until runtime, at  
which point it is resolved each time it is encountered while evaluating an instance  
\$anchor Any Used to create plain name fragments that are not tied to any particular structural location  
for referencing purposes, which are taken into consideration for static referencing  
\$vocabulary Any Used in meta-schemas to identify the required and optional vocabularies available for use  
in schemas described by that meta-schema  
Our JSON Schema makes use of two keywords from this vocabulary\: \$id and  
\$schema. The \$id keyword is used to declare a URI that uniquely identifies the  
schema. If the identifier is a Uniform Resource Locator \(URL\), it is common practice,  
though not required, for the identifier to resolve to the schema. In other words, a  
user is often able to obtain the schema by visiting its identifier on a web browser. You  
can try this out with any of the official schemas, such as https\://json-schema.org/draft/  
2020-12/schema.  
As we’ve seen before, the \$schema keyword defines the meta-schema that describes  
the given schema.  
The validation vocabulary  
This vocabulary introduces a rich set of keywords for asserting the structure and  
contents of JSON instances. These keywords constrain the possible JSON instances  
that successfully validate against the schema. See Table 5-2 for a complete list of  
keywords defined in this vocabulary.  
Table 5-2. The complete list of keywords introduced by the Validation vocabulary. The  
Instance column signifies the type of JSON instances on which the corresponding keywords  
take effect. We will discuss in more detail how JSON Schema keywords behave on different  
instance types in Chapter 8.  
Keyword Instance Summary  
type enum Any Validation succeeds if the type of the instance matches at least one of the given types.  
Any Validation succeeds if the instance is equal to one of the elements in this keyword’s  
array value.  
const minLength Any String Validation succeeds if the instance is equal to this keyword’s value.  
A string instance is valid against this keyword if its length is greater than or equal to  
the value of this keyword.  
maxLength String A string instance is valid against this keyword if its length is less than or equal to the  
value of this keyword.  
pattern String A string instance is considered valid if the regular expression matches the instance  
successfully.  
maximum exclusiveMinimum Number Number Validation succeeds if the numeric instance is less than or equal to the given number.  
Validation succeeds if the numeric instance is greater than the given number.  
Understanding JSON Schemas | 83 Keyword Instance Summary  
multipleOf Number A numeric instance is valid only if division by this keyword’s value results in an  
integer.  
exclusiveMaximum minimum Number Number Validation succeeds if the numeric instance is less than the given number.  
Validation succeeds if the numeric instance is greater than or equal to the given  
number.  
dependentRequired Object Validation succeeds if, for each name that appears in both the instance and as a name  
within this keyword’s value, every item in the corresponding array is also the name of  
a property in the instance.  
minProperties Object An object instance is valid if its number of properties is greater than or equal to the  
value of this keyword.  
maxProperties Object An object instance is valid if its number of properties is less than or equal to the value  
of this keyword.  
required Object An object instance is valid against this keyword if every item in the array is the name  
of a property in the instance.  
minItems Array An array instance is valid if its size is greater than or equal to the value of this  
keyword.  
maxItems minContains Array Array An array instance is valid if its size is less than or equal to the value of this keyword.  
The number of times that the contains keyword \(if set\) successfully validates  
against the instance must be greater than or equal to the given integer.  
maxContains Array The number of times that the contains keyword \(if set\) successfully validates  
against the instance must be less than or equal to the given integer.  
uniqueItems Array If this keyword is set to the Boolean value true, the instance validates successfully if  
all of its elements are unique.  
Our JSON Schema makes use of two keywords from this vocabulary\: type and  
required. In this case, we set type to object to assert that this schema describes  
JSON objects, and we set required to an array that contains name to assert that a  
property called name must be defined in the instance. The type keyword can be set to  
a diverse set of types such as integer, array, string, and more.  
After declaring these keywords, JSON documents that are either not JSON objects  
or do not declare a name property will be considered to be invalid according to our  
schema.  
The applicator vocabulary  
This vocabulary introduces a set of keywords that combine other nested JSON Sche‐  
mas in a variety of ways. Applicators are the key feature behind the expressiveness  
of the language and are considered to be the bread and butter of JSON Schema. See  
Table 5-3 for a complete list of keywords defined in this vocabulary.  
Table 5-3. The complete list of keywords introduced by the Applicator vocabulary. The  
Instance column signifies the type of JSON instances on which the corresponding keywords  
84 | Chapter 5\: A Universal Language for Data take effect. We will discuss in more detail how JSON Schema keywords behave on different  
instance types in Chapter 8.  
Keyword Instance Summary  
oneOf Any allOf Any anyOf Any if Any then Any else Any not Any properties Object patternProperties Object additionalProperties Object dependentSchemas Object propertyNames Object prefixItems Array contains Array items Array An instance validates successfully against this keyword if it validates successfully  
against exactly one schema defined by this keyword’s value.  
An instance validates successfully against this keyword if it validates successfully  
against all schemas defined by this keyword’s value.  
An instance validates successfully against this keyword if it validates successfully  
against at least one schema defined by this keyword’s value.  
This keyword declares a condition based on the validation result of the given  
schema.  
When if is present, and the instance successfully validates against its  
subschema, then validation succeeds against this keyword if the instance also  
successfully validates against this keyword’s subschema.  
When if is present, and the instance fails to validate against its subschema,  
then validation succeeds against this keyword if the instance successfully  
validates against this keyword’s subschema.  
An instance is valid against this keyword if it fails to validate successfully against  
the schema defined by this keyword.  
Validation succeeds if, for each name that appears in both the instance and as a  
name within this keyword’s value, the child instance for that name successfully  
validates against the corresponding schema.  
Validation succeeds if, for each instance name that matches any regular  
expressions that appear as a property name in this keyword’s value, the  
child instance for that name successfully validates against each schema that  
corresponds to a matching regular expression.  
Validation succeeds if the schema validates against each value not matched by  
other object applicators in this vocabulary.  
This keyword specifies subschemas that are evaluated if the instance is an object  
and contains a certain property.  
Validation succeeds if the schema validates against every property name in the  
instance.  
Validation succeeds if each element of the instance validates against the schema  
at the same position, if any.  
Validation succeeds if the instance contains an element that validates against this  
schema.  
Validation succeeds if each element of the instance not covered by prefixItems  
validates against this schema.  
Our JSON Schema makes use of a single keyword from this vocabulary\: properties.  
This keyword lets the schema writer declare a JSON Schema for each property in an  
object instance.  
In this case, we associate the name property with a schema that declares that the  
name must be a string \(through the use of the type keyword from the Validation  
Understanding JSON Schemas | 85 vocabulary\), and we associate the age property with a schema that declares that the  
age must be an integer \(through the use of the type keyword from the Validation  
vocabulary\) and its inclusive minimum value must be zero \(through the use of the  
minimum keyword from the Validation vocabulary\).  
As you can see, applicator keywords introduce the possibility of JSON Schemas  
declaring child JSON Schemas. To recap, this is the reason we say that JSON Schema  
is a recursive data structure\: a JSON Schema may include other JSON Schemas that  
might even reference back the outer schemas.  
# JSON Schema as a Recursive Data Structure  
A JSON Schema often makes use of keywords that take one or more other JSON  
Schemas as arguments, creating a tree of “subschemas.” Our JSON Schema consists of  
three subschemas, as shown in Figure 5-4.  
Figure 5-4. JSON Schemas typically consist of a set of subschemas composed into a larger  
schema. The JSON Schema in this example consists of three subschemas\: the top-level  
schema and two subschemas that correspond to each defined property.  
Breaking down a JSON Schema into its corresponding subschemas  
is a good strategy for simplifying and understanding larger and  
more complex schemas.  
86 | Chapter 5\: A Universal Language for Data Referencing Schemas  
As with traditional programming languages, schemas are more maintainable if they  
reuse existing schemas rather than reinvent the wheel. For example, you may write a  
schema that introduces the concept of a person. If other schemas also involve people,  
you’d rather reuse the same person definition instead of duplicating it in every one of  
your schemas.  
Though the JSON Schema examples we’ve seen so far, like the one in Figure 5-5,  
declare subschemas in place JSON Schema has built-in capabilities for referencing  
other JSON Schemas.  
# What does duplication look like?  
Consider a JSON Schema that describes objects whose foo, bar, and baz properties  
are even integers\:  
\{  
"\$id"\: "https\://example.com/schema-with-duplication",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "object",  
"properties"\: \{  
"foo"\: \{ "type"\: "integer", "multipleOf"\: 2 \},  
"bar"\: \{ "type"\: "integer", "multipleOf"\: 2 \},  
"baz"\: \{ "type"\: "integer", "multipleOf"\: 2 \}  
\}  
\}  
These subschemas are all the same!  
Though this schema does the job, it duplicates the concept of an even integer multi‐  
ple times, once for each property. Although this example is contrived, real-world  
schemas often duplicate complex subschemas that are tens of lines each.  
Referencing Schemas | 87 Local referencing  
One way of keeping the schema tidy is to move the shared definition of an even  
integer to a common location through the use of the \$defs keyword and then  
reference it through the \$ref keyword every time it’s needed.  
Here is a revised version of the JSON Schema from the previous section, this time  
making use of local referencing to reduce duplication\:  
\{  
"\$id"\: "https\://example.com/local-referencing",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "object",  
"properties"\: \{  
"foo"\: \{ "\$ref"\: "\#/\$defs/even-integer" \},  
"bar"\: \{ "\$ref"\: "\#/\$defs/even-integer" \},  
"baz"\: \{ "\$ref"\: "\#/\$defs/even-integer" \}  
\},  
"\$defs"\: \{  
"even-integer"\: \{  
"type"\: "integer", "multipleOf"\: 2  
\}  
\}  
\}  
In this example, we used the \$defs keyword to define a shared entity called even-  
integer. Once this new entity is defined, we can reference it from anywhere in  
the schema through the \$ref keyword. The curious syntax for referencing the even-  
integer schema comes from JSON Pointer, a standard for expressing navigation of  
JSON documents.  
As shown in Figure 5-5, this JSON Pointer is read as follows\: start from the  
top of the document \(as denoted by the \# character, an artifact of JSON Pointer  
being encoded as URI fragment\), navigate to the \$defs property \(as denoted by  
the /\$defs fragment\), and then navigate to the even-integer property \(as denoted  
by the /even-integer fragment\).  
88 | Chapter 5\: A Universal Language for Data Figure 5-5. A breakdown of evaluating the \#/\$defs/even-integer JSON Pointer  
against the https\://example.com/local-referencing schema. The \# JSON Pointer  
evaluates to the entity of the schema. The \#/\$defs JSON Pointer evaluates to the  
\$defs property, and \#/\$defs/even-integer evaluates to the subschema under the  
even-integer subproperty.  
Referencing Schemas | 89 Remote referencing  
Local referencing helps keep schemas clean when you need to reuse definitions from  
within a single schema, but what happens if multiple schemas, potentially written by  
different authors, need to reuse our even integer description?  
Remote referencing is about extracting shared definitions as independent standalone  
schemas and referencing them by their respective URIs. Note that JSON Schema is  
agnostic about how URIs are resolved. Most JSON Schema implementations provide  
a way to create an in-memory registry that associates URIs with schemas.  
Let’s start by extracting our even integer definition into its own schema. We will  
pretend to deploy this schema at https\://example.com/even-integer, so we will set  
the \$id keyword accordingly\:  
\{  
"\$id"\: "https\://example.com/even-integer",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "integer",  
"multipleOf"\: 2  
Assuming our even integer schema is accessible via its declared URI, we can update  
the schema from the previous section to point at the definition of even integers using  
this new schema rather than its local definition\:  
\}  
\{  
"\$id"\: "https\://example.com/remote-referencing",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "object",  
"properties"\: \{  
"foo"\: \{ "\$ref"\: "https\://example.com/even-integer" \},  
"bar"\: \{ "\$ref"\: "https\://example.com/even-integer" \},  
"baz"\: \{ "\$ref"\: "https\://example.com/even-integer" \}  
\}  
\}  
This revised version of the schema uses remote referencing to import the even  
integer schema. When a JSON Schema implementation starts processing this schema,  
it will attempt to locate the even integer schema from its URI \(based on how the  
implementation is configured to retrieve external schemas\) and use its definition in  
the respective locations.  
90 | Chapter 5\: A Universal Language for Data Your First JSON Schema Project  
Chapter 1 introduced Intelligence.AI, an online coffee company specializing in selling  
premium coffee beans from around the world with humor and inspiring artwork on  
the bags. Chapter 2 discussed the creation of example JSON documents for product  
entries in the catalog and orders. As the online store continues to grow, we need an  
easy way for the store manager to add new listings to the catalog.  
Turns out we can use JSON Schema to describe what product entries look like  
and use this formal definition to automatically generate pretty web forms, requiring  
zero additional code. With this approach, you don’t have to bother with HTML  
and JavaScript to have rich and complex forms. What’s more, your forms will be  
automatically updated every time your schema changes. Isn’t that cool? Let’s get  
into it!  
As a reminder, this is the example product entry we modeled in Chapter 2 and  
revisited in the assess phase of Chapter 4\:  
\{  
"sku"\: "SHBH00001",  
"timestamp"\: "2023-04-07T06\:32\:54-04\:00",  
"url"\: "https\://intelligence.ai/products/espresso-yourself-whole-latte-love",  
"title"\: "Espresso Yourself - Whole Latte Love!",  
"price"\: 30,  
"currency"\: "USD",  
"description"\: "Introducing \\"Espresso Yourself\\" coffee - the ultimate bean  
potion that's here to add a splash of silliness, a dollop of delight, and a whole  
latte love to your daily grind!",  
"image\_url"\: "https\://cdn.shopify.com/s/files/1/0749/8389/9441/products/  
Frame7.png"  
\}  
# Writing a Schema\: Step by Step  
Let’s use JSON Schema to describe product entry JSON instances like the previous  
one.  
The first thing we’ll do is create a JSON Schema that declares the \$schema keyword to  
make use of the 2020-12 dialect official meta-schema, and uses the title keyword to  
give it a human-readable name\:  
Your First JSON Schema Project | 91 \{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "A Intelligence.AI product entry"  
\}  
The JSON instances we are describing are objects, so we will set the type keyword  
accordingly\:  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "A Intelligence.AI product entry",  
"type"\: "object"  
Let’s describe product titles and descriptions. For this, we will use the properties  
keyword, in conjunction with the type keyword\:  
\}  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "A Intelligence.AI product entry",  
"type"\: "object",  
"properties"\: \{  
"title"\: \{ "type"\: "string" \},  
"description"\: \{ "type"\: "string" \}  
\}  
Product prices are numbers. We don’t want to sell any products for free, so  
product prices must be greater than zero, a constraint we can express using the  
exclusiveMinimum keyword\:  
\}  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "A Intelligence.AI product entry",  
"type"\: "object",  
"properties"\: \{  
"title"\: \{ "type"\: "string" \},  
"description"\: \{ "type"\: "string" \},  
"price"\: \{ "type"\: "number", "exclusiveMinimum"\: 0 \}  
\}  
We can express the price currency as an enumeration of possible currency codes  
using the enum keyword. We plan to sell our beans in the US and in the UK, so we will  
support USD and GBP currency codes\:  
\}  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "A Intelligence.AI product entry",  
"type"\: "object",  
"properties"\: \{  
92 | Chapter 5\: A Universal Language for Data "title"\: \{ "type"\: "string" \},  
"description"\: \{ "type"\: "string" \},  
"price"\: \{ "type"\: "number", "exclusiveMinimum"\: 0 \},  
"currency"\: \{ "enum"\: \[ "USD", "GBP" \] \}  
\}  
\}  
When using the enum keyword, the type keyword is not needed.  
That is because enum will only accept one of its declared values and  
nothing else, making their types implicit.  
The product URL and the image URL are strings. However, we can further signify  
that these strings represent URIs using the format keyword, which we will discuss in  
more detail in Chapter 8\:  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "A Intelligence.AI product entry",  
"type"\: "object",  
"properties"\: \{  
"title"\: \{ "type"\: "string" \},  
"description"\: \{ "type"\: "string" \},  
"price"\: \{ "type"\: "number", "exclusiveMinimum"\: 0 \},  
"currency"\: \{ "enum"\: \[ "USD", "GBP" \] \},  
"url"\: \{ "type"\: "string", "format"\: "uri" \},  
"image\_url"\: \{ "type"\: "string", "format"\: "uri" \}  
\}  
\}  
JSON does not have a built-in timestamp data type. The convention is to store  
timestamps as strings and further annotate them using the format keyword, like we  
did for URLs\:  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "A Intelligence.AI product entry",  
"type"\: "object",  
"properties"\: \{  
"title"\: \{ "type"\: "string" \},  
"description"\: \{ "type"\: "string" \},  
"price"\: \{ "type"\: "number", "exclusiveMinimum"\: 0 \},  
"currency"\: \{ "enum"\: \[ "USD", "GBP" \] \},  
"url"\: \{ "type"\: "string", "format"\: "uri" \},  
"image\_url"\: \{ "type"\: "string", "format"\: "uri" \},  
"timestamp"\: \{ "type"\: "string", "format"\: "date-time" \}  
\}  
\}  
Your First JSON Schema Project | 93 The only missing property is the product SKU. We can define this property using a  
regular expression that constrains the values to strings starting with SHBH followed by  
five digits using the pattern keyword\:  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "A Intelligence.AI product entry",  
"type"\: "object",  
"properties"\: \{  
"title"\: \{ "type"\: "string" \},  
"description"\: \{ "type"\: "string" \},  
"price"\: \{ "type"\: "number", "exclusiveMinimum"\: 0 \},  
"currency"\: \{ "enum"\: \[ "USD", "GBP" \] \},  
"url"\: \{ "type"\: "string", "format"\: "uri" \},  
"image\_url"\: \{ "type"\: "string", "format"\: "uri" \},  
"timestamp"\: \{ "type"\: "string", "format"\: "date-time" \},  
"sku"\: \{ "type"\: "string", "pattern"\: "\^SHBH\\\\d\{5\}\$" \}  
\}  
\}  
Object properties defined with JSON Schema are optional by default. This means our  
current schema will not complain if any of the properties we defined are missing. We  
can fix this by declaring the list of properties that are required using the required  
keyword\:  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "A Intelligence.AI product entry",  
"type"\: "object",  
"required"\: \[ "title", "description", "price", "currency",  
"url", "image\_url", "timestamp", "sku" \],  
"properties"\: \{  
"title"\: \{ "type"\: "string" \},  
"description"\: \{ "type"\: "string" \},  
"price"\: \{ "type"\: "number", "exclusiveMinimum"\: 0 \},  
"currency"\: \{ "enum"\: \[ "USD", "GBP" \] \},  
"url"\: \{ "type"\: "string", "format"\: "uri" \},  
"image\_url"\: \{ "type"\: "string", "format"\: "uri" \},  
"timestamp"\: \{ "type"\: "string", "format"\: "date-time" \},  
"sku"\: \{ "type"\: "string", "pattern"\: "\^SHBH\\\\d\{5\}\$" \}  
\}  
\}  
94 | Chapter 5\: A Universal Language for Data Finally, JSON Schema permits object properties not covered by the properties  
keyword by default. For example, our schema will allow a discount property to be  
present, even though we never defined it. We can prevent additional properties by  
declaring the additionalProperties keyword as false\:  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "An Intelligence.AI product entry",  
"type"\: "object",  
"required"\: \[ "title", "description", "price", "currency",  
"url", "image\_url", "timestamp", "sku" \],  
"additionalProperties"\: false,  
"properties"\: \{  
"title"\: \{ "type"\: "string" \},  
"description"\: \{ "type"\: "string" \},  
"price"\: \{ "type"\: "number", "exclusiveMinimum"\: 0 \},  
"currency"\: \{ "enum"\: \[ "USD", "GBP" \] \},  
"url"\: \{ "type"\: "string", "format"\: "uri" \},  
"image\_url"\: \{ "type"\: "string", "format"\: "uri" \},  
"timestamp"\: \{ "type"\: "string", "format"\: "date-time" \},  
"sku"\: \{ "type"\: "string", "pattern"\: "\^SHBH\\\\d\{5\}\$" \}  
\}  
\}  
When we set the additionalProperties keyword to false, we  
are saying, “Any additional property in the instance that I did not  
explicitly define must validate against the false schema.” As we  
will see in Chapter 8, no instance can ever successfully validate  
against false, therefore no additional properties are allowed.  
# Generating a Web Form  
Now that we have a JSON Schema that describes product entries, let’s use it to  
generate a beautiful web form out of it. It will literally take us seconds, whereas  
coding a form from scratch might take hours! Due to the popularity of this approach  
to form generation \(and with good reason\), there is no shortage of existing libraries  
to render web forms out of JSON Schema for virtually every web framework.  
In this example, we will use React JSON Schema Form, the most popular form  
generator for the React UI framework. Teaching React is out of the scope of this book,  
but see Figure 5-6 for an example output using React JSON Schema Form with the  
default theme. The timestamp property even results in a property calendar entry!  
Your First JSON Schema Project | 95 Figure 5-6. A web form generated from the JSON Schema definition we created in this  
section.  
96 | Chapter 5\: A Universal Language for Data Summary  
In this chapter, you learned about the JSON Schema data language, its relevance  
in the data industry, and its most fundamental concepts. You now have the skills  
to methodically understand every JSON Schema and consult documentation for  
keywords and vocabularies you haven’t seen before, a skill that will already set you  
apart as a JSON Schema power user.  
You also saw the process of modeling a nontrivial JSON instance using JSON Schema  
and getting immediate value out of it\: generating web forms. With this knowledge,  
you can revamp your existing forms into having a declarative approach involving  
much less code and reuse the schemas you used to generate your forms to also  
perform validation on the backend, turning your schemas into the single source of  
truth.  
In Chapter 8, you will learn about the two fundamental operations of schemas and  
how and when to apply them to real-world data problems. More importantly, you will  
learn to identify and act on opportunities that can be significantly simplified through  
a schema-first declarative approach.  
Summary | 97 CHAPTER 6  
# The Art of Alignment  
Imagine that you’re the CEO of a company, and you discover that 71% of your managers  
are not fully aligned with your vision. Do you think there’s any chance that you’re going  
to hit your targets this year? Or next? Of course not…In fact, it doesn’t matter how good  
or innovative your company’s vision is; if leaders at every level of the company aren’t fully  
aligned with that vision, it has almost no chance of success.  
—“A Shocking Number of Leaders Are Not Aligned with Their Companies’ Visions”  
\(Mark Murphy, Forbes, August 2020\)  
Picture yourself at a concert. The lights dim, the curtains draw back, and you’re  
enveloped by the stirring performance of a seasoned orchestra. The synchronization  
of their instruments, the harmony of their playing; all that transpires is the creation  
of soul-touching music. However, what if the violin players suddenly began missing  
their notes or the percussionists started going off rhythm? The performance would  
quickly descend into a chaotic, dissonant mess.  
The delicate balance required in a symphony is mirrored in the dynamics of an  
organization. The employees are the musicians, their diverse roles analogous to  
different musical instruments, and the information generated by an organization is  
akin to the melody they produce together. The CEO, like a conductor, must ensure  
the harmonious alignment of all these moving parts.  
What chance would the orchestra stand of performing a symphony, let alone achiev‐  
ing greatness, if 71% of the musicians were not aligned with the conductor? Analo‐  
gously, if the majority of your managers are not in alignment with your organization’s  
vision, the chances of hitting your targets, irrespective of how innovative or ground‐  
breaking they may be, are essentially negligible. The harmony necessary for a sym‐  
phony to touch souls is the same harmony needed for an organization to achieve  
success.  
99 Alignment is not just a corporate buzzword; it’s the foundation on which successful  
organizations are built. We call alignment of the concepts that people collaboratively  
use to describe business logic, technological implementation, and operational execu‐  
tion harmonization, and you will learn tools to achieve it in this chapter. In Chapter 7  
you will learn to align an organization’s actions, problems, and financial goals, which  
is called synchronization. When an organization is both harmonized and synchron‐  
ized, it is unified, and that’s what we’re going to dive into in the align phase of  
unifying.  
# Enemies of Alignment\: Ambiguity and Assumptions  
The main adversaries of alignment and unification are ambiguity and assumptions.  
These insidious forces can fragment organizational cohesion and compromise strate‐  
gic vision, impeding progress and fostering inefficiencies. By their very nature, ambi‐  
guity and assumptions lead to misinterpretation and misunderstanding, destabilizing  
the harmonious ecosystem of a well-integrated business.  
The root of these issues often lies in the ambiguity present in human communication,  
even when the meaning of concepts seems obvious, as shown in Figure 6-1. To  
illustrate this with a symphony analogy, when the notes to be played and the tempo  
to be followed are not precisely defined, individuals tend to bridge these knowledge  
gaps with their own assumptions, which inevitably leads to uncertainty and mistakes.  
Critically evaluating ambiguity and assumptions helps identify what needs to be  
clarified and addressed in the align phase of unifying.  
Figure 6-1. Often, people’s basic definitions of concepts differ even when they think they  
are in agreement. To eliminate such ambiguities, ask people to identify and define key  
concepts in your interviews.  
100 | Chapter 6\: The Art of Alignment The Standish Group, a reputable consulting firm, has been  
researching the success rates of software projects since 1994. Their  
metrics cover a range of factors, including the timely on-budget  
completion. Alarmingly, their findings reveal that a mere 8%–9% of  
software projects meet both their time and budget constraints, and  
that this success rate hasn’t really changed in 30 years!  
Equally concerning is a report from Geneca, a software develop‐  
ment firm, indicating that a staggering 75% of managers believe  
their software projects are preordained for failure, even before a  
single line of code has been written!  
As you have conversations with stakeholders, it is important that you know what to  
look for, what pitfalls to avoid, and what opportunities exist for you to be a more  
effective data champion. Knowing what to look for will help you focus where you are  
most needed.  
# Ambiguity\: The Culprit in the Illusion of Communication  
The single biggest problem in communication is the illusion that it has taken place.  
—George Bernard Shaw  
We have this idea that communication in an organization is like a symphony, where  
everyone is playing together to create a harmonious masterpiece of productivity and  
success. However, it’s often like a college band after they’ve had too much to drink.  
You’ve read that the key to an organization playing like an orchestra is going through  
the three unifying phases\: assess, align, and accelerate. Sounds like a pretty routine  
and boring corporate exercise, doesn’t it? Here’s the challenge\: everyone’s playing  
their own tune. The engineers are playing intellectual jazz, marketing wants to play  
electronic dance music and make it a party, and accounting is attempting to learn  
Gregorian chant.  
Many organizations fail to achieve effective alignment due to the illusion of commu‐  
nication. Just because people are talking to each other doesn’t mean they are commu‐  
nicating or collaborating effectively, just as collecting a lot of data doesn’t mean an  
organization is data driven. Effective communication is not just about talking or  
sharing information—it’s about ensuring that messages are clear, understood, and  
unambiguous.  
We are often so ready to work on our tasks that we don’t pause to first check for  
illusions in our communication with others. We may think we’re speaking the same  
language when in reality, we’re not. In one department, streamlining could mean  
improving the user experience; in another, it could mean making layoffs. The boss  
could decide that streamlining means placing your desk, monitor, and coffee machine  
in the restroom and calling it your new office.  
Enemies of Alignment\: Ambiguity and Assumptions | 101 If the illusion of communication is deemed acceptable, no amount of meetings or  
investments in marketing, hiring, or technology will fix it. In fact, it could be said that  
leaders who focus on quick fixes without doing the hard work of unifying teams are  
knowingly and preventably wasting money.  
# Assumptions\: Ambiguity’s Best Friend  
In God we trust. All others bring data.  
—W. Edwards Deming, American statistician  
The biggest problem with the illusion of communication isn’t the wastefulness of  
unnecessary meetings, low-quality data, and meaningless bureaucratic processes; it’s  
the assumption of understanding and agreement.  
Tribal knowledge refers to shared information, understanding, and language that is  
informal and often undocumented. It can include historical decisions, processes, and  
training that is shared among members of the group. Tribal knowledge can be taken  
as truth without concrete evidence. Ambiguity refers to situations or information that  
are unclear, uncertain, or open to interpretation. Assumptions are beliefs or ideas that  
are accepted as true without proof or verification. When ambiguity arises, assump‐  
tions based on tribal knowledge are used to fill in gaps in how teams communicate  
and understand each other.  
As the data champion, your job is to be objective, scientific, repeatable, and standard‐  
ized in your approach aligning people’s perspectives. As you interview stakeholders  
in the assess phase, you will capture very different perspectives on what is important  
and why. You will quickly learn people think things are obvious, or that teams are on  
the same page, when in fact they are not. Some people will have a hard time writing  
down the key concepts in their role because they’ve never been asked to do it before.  
# Defining Success\: Symmetry Between Concepts and JSON  
# Schema Equals Minimal Ambiguity  
This book is taking you through the journey of learning to unify your business, data,  
and code with JSON Schema. The unifying methodology does not require you to use  
JSON Schema, but we recommend it as the optimal way.  
The outcome of the align phase of unifying is to convert your concepts into a  
mirror-image representation in JSON Schema. JSON Schema is a foundation that  
data and code teams can use for constraints and validation as information is commu‐  
nicated across systems. Unifying concepts with both a business-friendly spreadsheet  
representation and a JSON Schema representation ensures that there is symmetry  
between a business strategy’s intention and operations in practice. It also ensures that  
the data collected for analytical and machine learning purposes is well-defined.  
102 | Chapter 6\: The Art of Alignment Concept-first design is covered in detail in Chapter 4. Figure 6-2  
shows how concepts can be represented as JSON Schema, which is  
covered in Chapter 5.  
Figure 6-2. The first box contains a concept described in detail in Chapter 4. The second  
box contains the mirror image of the concepts using a JSON Schema. Each Level 1  
concept has a separate JSON Schema representation. Using both allows business, data,  
and code teams to view a concept in the format easiest for them to understand and use.  
Defining Success\: Symmetry Between Concepts and JSON Schema Equals Minimal Ambiguity | 103 Illuminating Misalignment with a Concept Compass  
Those who are in love with practice without knowledge are like the sailor who gets into a ship  
without rudder or compass and who never can be certain whether he is going. Practice must  
always be founded on sound theory, and to this Perspective is the guide and the gateway; and  
without this nothing can be done well in the matter of drawing.  
—Leonardo da Vinci, Delphi Complete Works of Leonardo da Vinci  
\(Delphi Classics, 2014\)  
There is an elegant and insightful instrument to guide you through the maze of  
ambiguity toward alignment\: the concept compass. In order to transform concepts  
into the logical, machine-friendly format of JSON Schema, the first task is to ensure  
the harmony of those concepts across stakeholders and leaders, the individuals who  
bear the most responsibility and whose teams are the key users of these concepts.  
The concept compass, as depicted in Figure 6-3, is a simple two-dimensional matrix,  
with the x-axis representing who the primary stakeholders are and the y-axis showing  
where it materializes within the organizational landscape. Using this format, adding  
symbols such as check marks, Xs, or question marks will enable you to flag where  
ambiguity and disagreement exist. This chapter will guide you through constructing a  
concept compass one step at a time.  
Figure 6-3. The concept compass is a simple two-dimensional grid which has a list  
of stakeholders \(from within a team or across multiple teams\) on the horizontal axis,  
and a list of where the concept needs to be implemented \(e.g., from a business logic,  
operational, or technical perspective\). What people disagree with or where concepts are  
implemented, can be marked using an “X” or “✓” symbol, and a “?” symbol is a good  
placeholder for something unknown. In the center is an example of a concept that needs  
to be unified across the who and where continuums.  
104 | Chapter 6\: The Art of Alignment In some institutions, the primary stakeholders, the who, are openly recognized as  
being responsible for managing and educating other teams about how concepts are  
defined. However, in many organizations, pinpointing who “owns” managing con‐  
cepts from a cross-functional perspective may be a more enigmatic task. Why is that?  
The answer is often an entrenched system of dated business logic set by management  
and teams of bygone eras. As the torch is handed over to the new generation, they  
unknowingly adopt this logic as an immutable axiom without grasping when and  
why it came into existence.  
The where axis is easier to predict, as it hinges on three fundamental elements\:  
Business logic  
Do teams agree on the definitions and implications of key concepts?  
Operations  
Is there congruence between the stakeholders’ stated way—how things ought to  
be—and the actual methods employed in practice?  
JSON Schema  
Has the business logic been translated into a computational format, such as  
JSON Schema, that can be seamlessly integrated with and utilized by various  
technologies?  
# Step 1\: Harmonizing the What  
When you interview stakeholders, meet with them separately to get their most unvar‐  
nished perspectives. When you have converted their explanations of concepts into  
the concept-first design perspective \(as explained in Chapter 4\), you will have the  
stakeholders \(the who\) and their business logic perspectives \(the what\) captured in  
a standardized format. If their perspectives don’t match up, you have a clear guide  
identifying exactly where misalignment exists across these stakeholders, and can  
move toward methodically eliminating it, which you will learn in this chapter.  
We recommend that the who list \(horizontal axis\) in your concept compass have a  
minimum of three perspectives from three interdependent teams. You might want to  
start on aligning one team first before reaching out to others. Getting a diverse set of  
perspectives from multiple teams is critical.  
Let’s dive into a hypothetical scenario. Through interviewing the Finance, IT, and  
Sales teams, you apply the concept-first design techniques you mastered in Chapter 4  
to define a “sales order” concept, as shown in Figure 6-4.  
Illuminating Misalignment with a Concept Compass | 105 Figure 6-4. A hypothetical scenario illustrated by the concept compass. The Finance and  
IT teams agree on the way this concept was designed, but the Sales team disagrees with  
the definition of revenue. Because the business logic \(the what\) is not yet agreed upon,  
Operations and JSON Schema \(the way and the how\) cannot yet be determined.  
Dissonance emerges—a semantic tug of war between the Sales and Finance teams  
over the term sales order, specifically whether the revenue calculation deducts a  
salesperson’s commission.  
The IT and Finance teams are in agreement that a “sales order” includes subtracting  
the salesperson’s commission from the total sales figure, meriting an approving check  
mark next to their teams. An “X” next to the Sales team signifies their disagreement.  
With the absence of a consensus on the business logic, the operational implementa‐  
tion—captured as the way and how in Figure 6-4—remains uncertain, questioning  
which direction truly points to the north and how it should be represented. Thus,  
the concept compass becomes a beacon that illuminates the path through the maze  
of organizational alignment, bringing order to chaos and nurturing a shared under‐  
standing that propels the collective force toward success.  
These concepts also have a place in the Agile methodology. They  
are instrumental in user stories, which succinctly capture the  
intricate business logic of user experiences. Such integrative rep‐  
resentation is a powerful tool that knits together diverse ideas  
and interpretations to create coherent understanding across an  
organization.  
# Step 2\: Harmonizing the Way  
Too often, management constructs intricate processes and workflows that are dis‐  
connected from reality and force boots-on-the-ground employees to jump through  
hoops to fulfill their jobs in ways that look nothing like the way it’s supposed to  
work and is completely inefficient. Staff are forced to maneuver through a maze  
106 | Chapter 6\: The Art of Alignment of unhelpful apps and systems to stay compliant. Many, overwhelmed, abandon the  
quest, and dirty, substandard, and sometimes corrupted data emerges as collateral  
damage.  
In operational processes, you need seamless alignment with your foundational princi‐  
ples, both in the context of your business logic and the JSON Schema representations.  
Should there be a disconnect, you need to recalibrate either the fundamental princi‐  
ples or the operational processes.  
Unveiling the power of alignment in the world of collaboration requires a fresh  
perspective. Imagine your collaborative effort as a carefully constructed dance of  
ideas\: the who, what, and how. When they move in harmony, an idea has a palpable  
symmetry across your business landscape. Here, symmetry is not merely aesthetic, but  
a reflection of balance and integration between the different layers \(in this case, busi‐  
ness logic, operational execution, and JSON Schema\) of your collaborative endeavor.  
Consider this symmetry to be like the perfect balance of elements in a well-crafted  
masterpiece of architecture. It can’t be “somewhat” balanced; it’s either balanced,  
standing proud and sturdy, or it’s not, threatening to crumble at the slightest  
disturbance.  
Just as the structural integrity of a building relies on symmetry, the resilience and  
potency of your collaborative concept rely on alignment. Greater degrees of symme‐  
try nurture a robust and resilient architecture of collaboration, promising thriving  
success in the face of change and adversity.  
For example, if you have three teams in your who, and you have the three core when  
dimensions \(business logic, JSON Schema, and operations\), you have six degrees of  
symmetry for your concept. Six degrees of conceptual symmetry is considered the  
minimum for a well-defined concept for a data product.  
You can design the perfect concepts in JSON Schema and get everyone to agree to  
the business logic, but if the concept is not implemented in operational practice, then  
all of your work is meaningless. Operations are the way things are done. If there is  
a difference between the way things are done and the way things are supposed to be  
done, that discrepancy creates a gap that needs to be addressed for any unification  
efforts to work effectively. Therefore, you need to harmonize the who \(the individuals  
or teams involved\), the way \(the operational tasks and processes for achieving goals\),  
and the how \(the concepts codified with JSON Schema\) to design for data-centric  
collaboration.  
The Way is where the conceptual rubber hits the road idea symmetry becomes  
key; each part must reflect and support the others to create a unified, efficient, and  
effective system that not only withstands the challenges of business but also catalyzes  
growth and innovation.  
Illuminating Misalignment with a Concept Compass | 107 Step 3\: Harmonizing the How  
JSON Schema is a representation of a concept as a coded specification. Unlike other  
schemas, JSON Schema can define more than just structure. JSON Schema has two  
primary purposes\: validating data against the coded specification and extracting  
information/annotations, both of which are covered in detail in Chapter 5. These  
enable your schemas to be the trusted source of truth for people and systems.  
Before schema representations can be worked on, business logic \(the who\) and opera‐  
tional practice \(the way\) alignment must be done. This is because if stakeholders can’t  
agree on concepts, there is no way to have accurate, technical, coded specifications of  
them.  
Your JSON Schema definitions are representations of your organization’s concepts. In  
other words, a JSON Schema is the equivalent of the concept itself.  
Da Vinci’s comment that without perspective nothing can be done well holds true for  
data. Without an agreed-upon understanding of a concept with schema definitions  
providing the shared specification, data management cannot be done well over the  
long term, and this is especially true with increasing complexity.  
To understand this further, think of a schema’s constraints-based language as provid‐  
ing perspective lines for concepts, as shown in Figure 6-5.  
Figure 6-5. The left image shows the perspective lines which are created by the schema. A  
schema is a set of constraints, which in this example states that all points must fall on the  
y-axis \(numbers\) and the x-axis \(letters\). Without an agreed-upon schema, there is no  
shared perspective for data, which creates openings to introduce ambiguity.  
The how dimension is about how concepts will be implemented at various technical  
levels in different functional business units. You will have to make trade-offs based  
on which systems are the most expensive to change, what talent is available, and  
108 | Chapter 6\: The Art of Alignment how much risk change introduces to implement JSON Schemas into your technical  
systems.  
For the remainder of this book we will refer to JSON Schema  
exclusively for harmonization of how concepts are to be imple‐  
mented. Although other techniques exist, they are beyond the  
scope of this book.  
# Harmonized Concepts  
Once you have harmonized a concept across the who and where axes, you should  
have a concept compass that looks similar to the example in Figure 6-6, where the  
business logic, JSON Schema, and operational usage of the concept are all symmetri‐  
cal across stakeholders and implementation representations.  
Having the concept in the concept-first design format in a spreadsheet is already  
making it easier for technical teams to implement. The concept compass format  
identifies misalignment and, more importantly, lets you know when a concept is uni‐  
fied. Using the concept compass will act as a translation layer between business and  
technical teams and will greatly enhance the technical team’s ability to understand  
risks, prevent mistakes, and move quickly.  
The concept compass focuses on the source of where data, people, and systems are  
out of sync. No technical solution will resolve the issue; this is an organizational  
design problem that requires participation and an active focus on seeing data in the  
organization from a holistic perspective.  
Integrating a concept-first design approach into your organization’s system might  
seem like a significant challenge, but think of it as finding a universal language—a  
translation layer—that bridges the gap between your business and technical teams.  
By arranging your ideas in a neat spreadsheet, you’re not only making your concept  
easier for technical teams to implement, but also ensuring that everyone is on the  
same page, reducing potential missteps and accelerating progress.  
The concept compass helps you identify when your team is veering off course and  
when your concepts align perfectly. By highlighting these discrepancies, it points out  
exactly where data, people, and systems may be falling short.  
But here’s the catch\: no technical solution alone can address these issues. It’s a larger,  
organizational design challenge that calls for everyone’s active participation and a  
more holistic view of data within your organization.  
Now, imagine a library—a Unified Concept Library to be precise—that contains all  
of these harmoniously intertwined concepts. Each concept would be available in  
both a business language that everyone can understand \(the what\) and a technical  
Illuminating Misalignment with a Concept Compass | 109 representation for data and code teams as JSON Schema \(the how\). This is the power  
of a concept-first design.  
Figure 6-6. When concepts are aligned along the who axis \(marketing, sales, and finance  
teams\), and along the where axis \(business logic, JSON Schema, and operations\) a  
concept can be called unified.  
110 | Chapter 6\: The Art of Alignment Validating Concepts\: Belief Scoring and Hypotheticals  
As you seek to align various concepts, you will inevitably encounter differing and  
conflicting perspectives. Therefore, it is important that you have methodical ways  
to think through challenges you may face as you design and align concepts with  
stakeholders.  
There are two key ways to validate concepts\: counterfactuals and belief scoring.  
# Counterfactuals  
As a stakeholder explains a concept to you, it is important to occasionally present  
them with a counterfactual, a hypothetical statement that often includes an if or could  
have.  
Let’s say the stakeholder provides this requirement\: “The system must provide daily  
sales reports.” A counterfactual question for this requirement might be, “If the system  
were to only provide weekly sales reports instead of daily, how would that impact  
your operations?” This question proposes an alternative scenario \(weekly reports  
instead of daily\) and asks for the stakeholder’s input on the hypothetical impact of  
this different situation, which will help you understand the importance of the daily  
aspect of the requirement.  
Other examples might be, “What happens if there is no title?” or “How would a nega‐  
tive price per unit affect the system?” If the stakeholder says, “Price per unit is always  
greater than 0,” then you can add a column in your concept called Requirements, and  
add the value to your concept. This can easily be translated into JSON Schema, as  
shown in Figure 6-7.  
Figure 6-7. Asking counterfactuals can help surface any requirements or logical rules  
that you may need to consider for concepts. It is important to get alignment between  
stakeholders across counterfactuals to make sure you aren’t missing anything when  
designing concepts.  
Validating Concepts\: Belief Scoring and Hypotheticals | 111 Belief Scoring  
One of your jobs as a data champion is to find and label incorrect assumptions or  
inaccurate perspectives as quickly as possible. The word that describes confidence in  
people’s perspectives is belief. The tool that you will use to evaluate beliefs is called  
belief scoring.  
Figure 6-8 shows two concepts defined by two stakeholders that are not aligned with  
each other. As you interview stakeholders, you will need to document the validity of  
various perspectives.  
Figure 6-8. Two concept-first design spreadsheets with different definitions of the word  
cost\: the cost at time of sale, and the cost to produce. Which is the right one to use? The  
question mark labels this concept as unsure.  
Use this simple framework to keep track of what perspectives warrant being believed  
and which warrant being challenged\:  
Invalidated  
Concepts that a stakeholder believes to be true but that don’t fit into another  
perspective that can be trusted. For example, if a salesperson doesn’t enter a field  
on a form and tells you, “No one cares about that,” and the CFO says, “If we don’t  
have accurate sales data, we won’t be compliant with SEC regulations, and I can  
go to jail.”  
112 | Chapter 6\: The Art of Alignment Unsure  
Assumptions that haven’t been evaluated effectively but have been defined. For  
example, if a salesperson says that revenue includes the full sale \(which impacts  
their bonus\), until you check with Finance, you are unsure that their particular  
perspective is valid.  
Undefined  
Imagine a customer service rep that says, “When the customer’s profile has a  
status of 4, I am supposed to transfer them,” and when you ask them why,  
they can’t explain it. That means you have no idea whether it is something that  
actually needs to be aligned when designing data products or if it is part of some  
legacy system that is no longer used.  
Trusted  
This means that you are unable to invalidate a perspective.  
As you work toward aligning different concept designs, using red backgrounds or a  
question mark to identify unsure beliefs, a check mark to identify validated beliefs,  
and so on, can help keep track of where ambiguity and assumptions exist.  
The symbols we recommend are as follows\:  
Trusted\: Check mark \(✓\)  
Unsure\: Question mark \(?\)  
Invalidated\: X  
Undefined\: Minus sign \(–\)  
# Summary  
In this chapter, you learned a set of simple, practical tools and theory for creating  
alignment in an organization. Regardless of the competence of individual teams, an  
organization’s progress is hindered by a lack of shared vision. The concept compass  
is a tool for aligning teams toward a unified vision; converting these concepts into  
a JSON Schema creates a bridge between business, data, and code. The compass  
uses stakeholders as its x-axis and implementation as its y-axis to illustrate areas of  
consensus and conflict. It elucidates the process of achieving alignment in three steps\:  
aligning the who and what on business logic, the way with operations, and the how  
a concept is defined. It also underscores the role of leadership in fostering alignment  
and the potential fallout of misalignment.  
The chapter further explored the main obstacles data champions face—ambiguity  
and assumptions—and how they inhibit effective communication within organiza‐  
tions. The illusion of communication—when people assume they are communicating  
effectively just because they are talking—leads to misunderstanding, wastes resources,  
Summary | 113 and contributes to a lack of alignment. Much miscommunication is related to tribal  
knowledge—informal, unrecorded understanding and language among teams that are  
accepted as truth without concrete evidence.  
Data champions must adopt an objective, scientific, and standardized approach to  
identify and challenge these assumptions. We introduced you to a concept validation  
framework that uses belief scoring and counterfactuals to categorize perspectives as  
invalidated, unsure, undefined, or trusted. This framework aids data champions  
in managing ambiguities and assumptions effectively, facilitating alignment, and  
removing communication barriers. So you now have tools and strategies to navigate  
organizational alignment and foster a more harmonious and productive business  
environment.  
Chapter 7 explores the latter half of the align phase within our unifying methodology\:  
synchronization. This aspect diverges from the conceptual focus of harmonization,  
which primarily centers around defining ideas through the lens of language and con‐  
cepts. Synchronization emphasizes the alignment of people, systems, and processes to  
actions.  
114 | Chapter 6\: The Art of Alignment CHAPTER 7  
# The Science of Synchronization  
There are no separate systems. The world is a continuum. Where to draw a boundary around  
a system depends on the purpose of the discussion.  
—Donella H. Meadows, Thinking in Systems \(Chelsea Green, 2008\)  
Your organization is a living, evolving entity, pulsing with vibrant interactions among  
complex systems made of people, technology, and processes. Systems with many,  
constantly changing connections are called networks.  
Chapter 6 dove into the art of harmonizing concepts. We navigated the labyrinth  
of aligning user perspectives \(the Who\) and the myriad systems across which these  
concepts spring to life \(the Where\). We raised a toast to you, the data champion, as  
you journeyed to achieve symmetry of concepts between distinct perspectives.  
Let’s hold on to that champagne cork for just a bit longer; our voyage isn’t complete.  
An agreement on definitions of concepts only pieces together part of our puzzle. The  
unutilized potential of concepts, trapped as thoughts and not propelling action, is a  
hollow victory. The align phase of unifying isn’t merely about harmonizing concepts  
to the same musical key; it’s also about synchronizing how concepts are used in action  
to the same musical time signature.  
In order to direct this dance across the organization, we must shift our lens to a  
wider panorama, viewing the organization as a collection of intricate, interconnected  
networks that are collaborating and learning together. With this approach, we can  
trace the graceful interplay of concepts as they surge, intertwine, and evolve among  
individuals, systems, and processes. As if part of a grand symphony, they move in a  
rhythm, directed by a common score—the resolution of organizational goals.  
In this chapter, you’ll learn about organizational networks through the lens of an  
organizational governance framework for designing effective human and machine  
learning capabilities. CLEAN is an acronym for Collaborative Learning Networks,  
115 and the CLEAN data governance framework like the concept compass in Chapter 6,  
is a valuable tool for illuminating and resolving misalignment in organizational  
networks.  
# An Introduction to Thinking in Networks  
Thinking in networks is a conceptual approach where relationships, connections, and  
interactions between various elements are emphasized over individual components. It  
involves a deep understanding of how each part of a system contributes to the whole  
and how changes in one part can ripple across the network. This mindset has both  
theoretical and practical implications.  
Imagine the world as a web of interconnected entities where the relationships  
between the elements are as critical as the elements themselves. By focusing on  
these interconnections and interdependencies, “thinking in networks” helps us to  
illuminate the inner workings of complex systems. It offers a robust framework that  
can empower us to better predict outcomes, understand emerging patterns, and  
devise holistic solutions that consider the entire network.  
In the realm of data governance, this approach can be instrumental in identifying  
inefficiencies, bottlenecks, or areas for improvement. By enabling a bird’s-eye view  
of the system’s interconnectedness, we can strategically tweak certain elements to  
optimize the overall performance.  
# Example of Thinking in Networks\: Athletes Versus Artists  
The earning potential of both athletes and artists is closely tied to their respective  
achievements. However, the way these achievements are measured and valued differs  
significantly between athletics and the arts.  
For athletes, success is often gauged through concrete, quantifiable metrics. Let’s take  
a golfer as an example. In golf, the primary metric is the number of strokes taken  
to complete a course. A golfer who consistently finishes courses with fewer strokes  
than their competitors is objectively performing better. Winning or ranking highly  
in prestigious tournaments, such as the Masters or the U.S. Open, earns significant  
prize money. Additionally, consistent high performance increases a golfer’s chances of  
securing lucrative sponsorship and endorsement deals. In golf, the financial rewards  
can be linearly predicted based on tournament results and strokes recorded.  
On the other hand, the success of an artist is measured in a more subjective way;  
there is no universal yardstick to measure the greatness of an artist’s work. Instead, an  
artist’s success is determined by the prestige of the galleries where they’ve exhibited  
their work and by the art collectors who buy and sell their pieces.  
116 | Chapter 7\: The Science of Synchronization Rather than a linear, easily measurable scale like an athlete’s race time, an artist’s  
success depends on the interconnected network of galleries and collectors. This  
network of relationships and transactions shapes the artist’s reputation and ultimately  
determines the economic value of their work. The success of an artist and the price  
their art can command can thus be predicted by examining this network.  
So, while both athletes and artists have their successes tied to their earnings, the  
ways these successes are assessed and valued present a fundamental contrast. Athletes’  
earnings can be predicted in a linear manner based on concrete performance metrics,  
while artists’ earnings are forecasted based on a network of relationships and subjec‐  
tive assessments of their work.  
# Graphs\: The Visual Language of Networks  
A graph, in the field of mathematics and computer science, is a fundamental tool used  
to represent pairwise relationships between objects. A graph is composed of vertices  
\(also known as nodes\) and edges \(also known as relationships or links\) that connect  
these nodes. Graphs can be either directed, meaning that each edge has a direction  
from one node to another, or undirected, with edges having no orientation.  
In the example shown in Figure 7-1, a person concept is represented as two nodes\:  
Bob and Alice. The relationship between Bob and Alice has a label describing the type  
of relationship they have, in this case, the label is friend.  
Figure 7-1. A graph example with two nodes as data points that instantiate the concept  
“person.” In the first example, Alice and Bob are mutually friends; in the second, Bob is  
friends with Alice, but there’s no evidence it is mutual; and in the third, Bob considers  
Alice his best friend, but poor Bob isn’t getting any love back.  
When links have an arrow, that means they are directed. A weight is when we add a  
numerical value to a relationship, such as “Bob is a 5 out of 5 friend to Alice,” but this  
graph doesn’t tell us the value of Alice’s friendship to Bob.  
Graphs are useful because they provide a visual and intuitive way to represent and  
analyze complex systems and networks. They’re used in numerous areas, such as  
social network analysis, search algorithms, transportation networks, biological net‐  
works, and the internet, to name a few. By using graphs, we can understand the  
structure of these systems, find patterns, derive insights, and even make predictions.  
An Introduction to Thinking in Networks | 117 Therefore, the concept of a graph serves as a cornerstone for many practical applica‐  
tions in fields like computer science, data analysis, engineering, and more.  
Here are some more examples of how graphs and edges can be used to understand  
networks\:  
•  
• In a transportation network represented as a graph, the nodes might be cities,  
and the edges might represent highways between the cities. The labels on the  
edges could represent the distance between the cities, the time it takes to travel,  
the cost of travel, or any other relevant data.  
• In a social network, the nodes might represent people, and the edges could  
•  
represent relationships between people. A label on an edge might represent the  
strength of the relationship, the type of relationship \(friend, family, coworker,  
and so on\), or other relevant information.  
There are many types of networks, and graphs are a general way to  
visualize and understand them. You can use graphs when drawing  
on a whiteboard, when creating a presentation in PowerPoint, or  
when creating a database of a social network.  
# Networks of Entities\: Knowledge Graphs  
Imagine having a tool that could seamlessly organize and integrate complex data  
for dynamic exploration and understanding. Sounds ideal, doesn’t it? That’s precisely  
what a knowledge graph offers. It’s more than just a diagram; it’s a visual represen‐  
tation of a network of entities \(or nodes\) and their interconnected relationships,  
typically signified by arrows or lines.  
But a knowledge graph doesn’t just capture these connections—it also encapsu‐  
lates the context and meaning of your data, creating a rich semantic map. It is  
like a decoder ring for unstructured data, providing the means to make sense  
of vast amounts of disparate information and rendering it into a comprehensible,  
manageable form.  
The benefits derived from knowledge graphs are extensive, with numerous prac‐  
tical applications. By drawing connections between entities and facts, knowledge  
graphs promote data discovery, knowledge management, decision making, and pre‐  
dictive analytics. For instance, Google leverages a comprehensive knowledge graph  
to enhance its search engine results by better predicting the searcher’s intent and  
the contextual meaning of search terms. LinkedIn also uses a knowledge graph for  
its “People You May Know” and “Jobs You May Be Interested In” features, which  
promote networking and job opportunities.  
118 | Chapter 7\: The Science of Synchronization A Simple Knowledge Graph  
From a technical perspective, a knowledge graph consists of three main components\:  
nodes, edges, and properties. Nodes represent entities, such as people, places, or con‐  
cepts. Edges represent relationships between these entities. And properties provide  
additional information about nodes or edges.  
The foundation of a knowledge graph is a graph database, which stores data in a  
graph structure and uses graph theory principles for data querying. Graph databases  
use index-free adjacency, meaning each node directly points to its adjacent node,  
enabling high-speed traversal, even with billions of nodes.  
Let’s consider a simple two-node knowledge graph that represents the relationship  
between two entities\: John and London. In this example, John is a person who lives in  
the city of London.  
To visualize this, Figure 7-2 represents John and London as nodes and the relation‐  
ship lives\_in as an edge connecting these two nodes. This graph thus carries the  
semantic information that the person named John lives in the city of London.  
Figure 7-2. A simple two-node knowledge graph example  
# Challenges with Knowledge Graphs  
Though knowledge graphs are powerful tools, their implementation comes with  
significant challenges. One of the most common obstacles is ensuring the quality and  
consistency of data input, as knowledge graphs are highly dependent on the input  
data’s structure and quality. Poor data quality can result in inaccurate insights and  
predictions.  
Moreover, creating and maintaining a knowledge graph can be labor-intensive and  
may require substantial domain expertise. There’s a need to define entities, relation‐  
ships, and properties correctly, and to continuously update the graph as new infor‐  
mation becomes available. A knowledge graph can become an organization’s source  
of truth, but those that are charged with maintaining and implementing knowledge  
graphs can become overwhelmed by the number of concepts to manage and man‐  
ually control. This creates bottlenecks, which leaves teams to go around the system,  
thus creating more chaos in data quality.  
Networks of Entities\: Knowledge Graphs | 119 Aligning Knowledge for the 99%  
Successfully implementing, maintaining, and utilizing knowledge graphs can be a  
significant cultural and operational change for many organizations, with advanced  
technical requirements and expensive operational costs. Some companies, including  
Google, LinkedIn, and Facebook, having made massive investments over decades,  
now have truly amazing knowledge graph capabilities with dedicated experts to  
maintain them. However, 99% of companies have not committed the same resources  
and long-term vision nor actively recruited the talent to architect and sustain robust  
knowledge graph strategies.  
Additionally, if your organization invests heavily in knowledge graphs but not in  
aligning the organization’s concepts, then it doesn’t matter how good your knowledge  
graph is. If leaders are not aligned strategically and operational teams are not aligned  
on the meaning of the concepts they are supposed to implement, a knowledge graph  
is an expensive investment building upon faulty foundations.  
Therefore, it is important to learn the organizing principles of designing knowledge-  
based systems, whether they are implemented in knowledge graphs or not. Unifying  
is about bringing large parts of the organization together under a single framework,  
and therefore the methodology is designed to be as simple as possible \(so that anyone  
can understand it\) and as general as possible \(so that anyone can apply it with any  
technology\).  
In Chapter 6, you learned how to use the concept compass to map concepts, people,  
and operations in order to identify misalignment. In this chapter, you will learn the  
CLEAN data framework, which is a set of simple organizing principles for identifying  
and resolving misalignment in how concepts are connected, shared, and communica‐  
ted in networks.  
If you’d like to learn more about knowledge graphs, Building  
Knowledge Graphs, by Jesus Barrasa and Jim Webber \(O’Reilly,  
2023\) is an excellent book.  
# Fundamentals of CLEAN Data Governance  
You never change things by fighting the existing reality. To change something, build a new  
model that makes the existing model obsolete.  
—Buckminster Fuller  
As we’ve discussed, unifying an organization under a single framework is about much  
more than just creating connections; it’s about ensuring those connections are aligned  
and can efficiently facilitate the sharing and communication of data and concepts.  
120 | Chapter 7\: The Science of Synchronization With the knowledge we’ve gained about networks and the power of thinking in  
networks, we’re ready to delve into the four key components of the CLEAN data  
governance framework\:  
Collaboration  
Stakeholders and organizational structures  
Knowledge  
Data, data management, and learning experiences  
Business Logic  
IP, how business value is determined, compliance, and processes  
Activity  
Sequences of setting goals, taking actions, and measuring outcomes  
Using simple organizing principles, CLEAN provides a method that is both easy  
to understand and widely applicable, regardless of technology. Just as a knowledge  
graph can connect two entities with a relationship, such as “Bob is friends with Alice,”  
the goal of this approach is to connect contexts such as who is using the concepts that  
Bob is friends with Alice, what is the business value, and why does knowing about Bob  
and Alice create business value?  
The four components of CLEAN can be further broken down into more granular  
categories that serve as an outline for what an organization needs to consider to  
ensure effective data governance, as shown in Figure 7-3. The specific steps for imple‐  
mentation are dependent on the individual organization’s context, goals, and needs;  
however, by using a standardized framework, you can more easily have informed  
discussions with stakeholders across the organization, with a shared understanding  
that in order to have clean and valuable data that can be used to design human  
and machine learning systems, you need a map of the way concepts are used and  
connected beyond any one team’s silo.  
As with the concept compass, your goal is to capture different people’s perspectives  
on how the dimensions of CLEAN all fit together through stakeholder engagement.  
When you find disagreement, you will need to score beliefs, just as you learned in  
Chapter 6, and work to resolve a ground truth. You may be surprised at how many  
different perspectives may emerge as you ask people to walk through the four main  
components.  
Fundamentals of CLEAN Data Governance | 121 Figure 7-3. The CLEAN data governance framework has four main components\: collab‐  
oration, knowledge, business logic, and activity. The visualization is in the shape of a  
network because CLEAN views these 4 main components and their 12 dimensions from  
a holistic perspective—where they each have a relationship with and impact on each  
other, collectively.  
The CLEAN data governance framework does give you a simple frame of reference  
to align everyone to. Your job is to find misalignment, create awareness of it, invite  
stakeholders to be thought partners in how to create alignment, and evangelize  
CLEAN in order to gain adoption. It is also important to regularly check in with  
stakeholders to make sure they have a voice in the continual process of adapting and  
learning a shared understanding of the framework.  
When you complete the CLEAN data governance process with stakeholders, they  
should be aligned or know what they need to do to align their answers to questions  
such as who is involved on objective X, and what compliance rules do we need to  
follow? Synchronization is about removing the barriers \(ambiguity and assumptions\)  
to being able to move quickly, efficiently, and with confidence.  
# Collaboration  
The heart of collaborative learning networks are people. However, people are part  
of a larger context, such as their role in the organization, what team they are on, or  
whether they are clients or partners. When we think about data, we want to have clear  
122 | Chapter 7\: The Science of Synchronization documentation that states who can use which data, from which team, and with which  
rights.  
The following three dimensions are recommended to include in your collaboration  
conversations\:  
Organization  
What are the different teams, hierarchical relationships, and responsibilities?  
What are the sequential steps various teams and functional departments take to  
achieve organizational goals?  
People  
Who are the different people on the different teams, what roles do they have, and  
what access do they have to various data and other information? Is there a clear  
way to identify customers, third-party vendors, or internal employees related to  
various components of CLEAN?  
Partners  
Are there any additional organizations that are customers or suppliers, and if so,  
what are their organizational structures \(similar to the organization dimension  
above\)?  
# Knowledge  
Creating knowledge is a multifaceted process \(as shown in Chapter 4, where we  
examined data products and their four facets\: context, structure, meaning, and data\).  
The CLEAN framework facilitates the creation of high-quality data products. It does  
this by providing a shared understanding of how individual data sets relate to the  
organization as a whole. This shared understanding empowers people to define the  
context of their data more effectively\:  
Resources  
This can be documents, video, audio, spreadsheets, presentations, or any other  
kind of content that people use to achieve their goals.  
Data  
The information that is created, consumed, and distributed by applications and  
people in order to computationally understand situations and make decisions.  
Code  
Any kind of code, whether data science/machine learning models or web code,  
that can be organized in a modular fashion.  
Fundamentals of CLEAN Data Governance | 123 Business Logic  
Every organization has processes for managing resources and making transactions.  
Take, for instance, a retail company’s inventory management system; data related to  
supply, demand, and sales trends is crucial to maintain stock levels and minimize  
costs. This underlines the importance of understanding which processes will utilize  
the data and why. Let’s say the data is employed to address an issue potentially costing  
the company \$100M. Knowing this value helps teams prioritize their tasks efficiently,  
ensuring they don’t spend time solving less significant problems, like a \$1K issue.  
As for legal compliance, consider the General Data Protection Regulation \(GDPR\),  
a set of rules governing the privacy and security of personal data in the European  
Union. Such mandates shape the processes and constraints around data use, thus they  
should be included in the discussions. Consider these categories\:  
Financial  
How are the associated costs, assets, and revenues related to information being  
calculated? Without an understanding of the financial aspects of the business, it  
is difficult to make effective decisions related to investments in talent, technology,  
or change.  
Compliance  
What are the legal or industry requirements with which an organization needs  
to comply in order to operate? This could be the General Data Protection Regula‐  
tion \(GDPR\) in Europe, the Health Insurance Portability and Accountability Act  
\(HIPAA\) in the US for health data, System and Organization Controls 2 \(SOC  
2\) standards for cloud providers, accessibility standards for digital content, or  
other industry-specific regulations. It is important to have a way to understand  
or quickly find how to reference and validate compliance needs in order to make  
effective decisions.  
Processes  
When everyone has their own map, there is no well-defined process. Companies  
spend a lot of time and money hiring consultants to create process maps, but that  
rarely works because teams often need to adapt processes. It’s more effective to  
draft an initial process map using simple tools like whiteboards and presentation  
slides, gain consensus, and then refine as needed, rather than rely on a process  
map that’s sophisticated but outdated and unused. Process mapping is very  
valuable, though, in analyzing processes and identifying problems, which we will  
cover in the Accelerate phase of unifying, which begins in Chapter 9.  
# Activity  
Understanding why people are taking actions and using data is critical in mapping  
how concepts are used across the organization and illuminating where misalignment  
124 | Chapter 7\: The Science of Synchronization might be happening. Often, there is a lack of understanding on how to measure the  
value of outcomes. Here’s how to map the process out\:  
Objectives  
Getting a simple list of what the objectives are is a foundational, beginner-level  
task, and yet teams with multimillion dollar budgets often fail to make sure  
objectives line up with and support each other. Make it a clear priority to do so  
and ensure that the objectives support each other and the financial needs of the  
organization.  
Actions  
How are actions observed? Is it through a daily meeting, an automatic behavioral  
analytics tool, or through quarterly one-on-ones? Identify how actions and the  
lack thereof can be tracked toward achieving objectives.  
Outcomes  
What are the results of the actions toward objectives? How far did the team get?  
What is the impact and the financial reward \(or loss\)? Identify clear ways to  
capture this information.  
CLEAN implementation at a company is an iterative, evolving  
process, allowing stakeholders, champions, and leaders to continu‐  
ously adjust their approach to data governance as new challenges  
and opportunities arise. You get back what you put in, and ulti‐  
mately, leadership needs to enforce alignment with a governance  
model if it wants one implemented.  
# CLEAN Data Governance in Practice  
Data governance is a strategic corporate initiative that aims to ensure the quality,  
availability, integrity, security, and usability of data assets. Rather than just a series of  
meetings or reports, it is a holistic, ongoing process that empowers organizations to  
manage their data efficiently and optimize its value.  
You can think of it as an air traffic control tower overseeing an organization’s data  
landscape. It monitors all data movement, ensuring optimal utilization and protec‐  
tion against misuse or error. This process touches every department, making it a  
collaborative initiative requiring universal commitment.  
In practice, CLEAN data governance starts with establishing a data governance group  
that can then begin the process to map out the networks of the flow of data across  
the organization in a holistic way. Comprising representatives from different depart‐  
ments, this group ensures all stakeholders’ needs and objectives are considered and  
enforces data policies, standards, and strategies. It’s an ongoing process that adapts as  
the organization and its data needs evolve.  
CLEAN Data Governance in Practice | 125 Consider a hypothetical company operating in a distributed environment that wants  
to address data silos and redundancy. Implementing the CLEAN framework, they  
map out teams, roles, and interrelationships, documenting each team’s data handling  
and usage. They create an internal online portal to facilitate collaboration and share  
insights, fostering a culture of collaboration. When this company expands into a  
new market with different regulatory requirements, the council swiftly revises data  
policies and educates all departments on the changes, showcasing the adaptability of  
this process as organizational data needs evolve. Figure 7-3 provides a guide to the  
various stakeholder perspectives that need to be captured and related while looking  
for misalignment and designing appropriate ways to meet stakeholders’ needs.  
Imagine being on an R&D team that is striving to create efficient machine learning  
techniques for health record analysis. Without a clear map of objectives or necessary  
knowledge, it would be challenging to inspire confidence or investment. This sce‐  
nario often plays out in the corporate world, leading to financial loss and reputational  
damage due to inconsistent data handling and shifting project objectives.  
Created specifically for the unifying methodology, CLEAN data governance offers a  
remedy to this issue, providing a checklist approach to understanding how teams,  
datasets, processes, and financial decisions interconnect. This leads to a shift in  
mindset, transforming data governance from a simple policy to a company-wide  
initiative. With this approach, a collaborative learning network emerges, fostering  
understanding and unified goals throughout the organization.  
# The Four Facets of Data Products and CLEAN  
Imagine the scene\: a data science team convenes for a stakeholder meeting. The  
agenda is a CSV file brimming with potential insights, but they are stymied in their  
efforts to understand it. The columns lack semantic definitions, which leaves the  
team scrambling in search of the right stakeholder who can provide clarity. The data’s  
provenance is a mystery; no context is given for why it was generated, which business  
problem it addresses, or the compliance issues at play. The inefficiency is palpable.  
Enter our methodology\: CLEAN. Through a series of data governance interviews,  
the pain points surface. The need for semantics, context, structure, and compliance  
becomes crystal clear.  
From these insights, we formulated the four facets of the data products model intro‐  
duced in Chapter 4, which posits that data should come packaged with context,  
meaning, and structure.  
The essential lesson here? By incorporating perspectives from a wide array of stake‐  
holders—data users, legal and regulatory enforcers, project managers, and beyond  
—you can gain a 360-degree view. This comprehensive understanding enables  
governance that respects and integrates the insights of all involved parties. With  
126 | Chapter 7\: The Science of Synchronization CLEAN, you can ensure that every voice is not just heard but understood and acted  
upon.  
# The Four Horsemen of Data Death  
The only way CLEAN can be successful is if leadership empowers data champions  
to work cross-functionally in terms of education, communication, and being able to  
evaluate implementation transparently. One challenge data champions will face is the  
four horsemen of data death, shown in Figure 7-4, which can imperil the success of  
your efforts.  
Figure 7-4. The four horsemen of data death are the most common management impedi‐  
ments to unifying your organization. Leaders need to be aware of and address these in  
order for data champions to be successful.  
Management styles vastly differ; some inspire and empower individuals, others  
engender chaos, inefficiency, toxicity, and poor decision making. Our consultancy  
experience has highlighted four recurring, detrimental behaviors that significantly  
hinder successful implementation of a data governance framework. It is essential  
for senior leadership to address these issues for the organization to be healthy  
The Four Horsemen of Data Death | 127 and operate effectively. This is not an exhaustive list, but the behaviors outlined  
in Figure 7-4 certainly are the most common and harmful.  
# Ignorance  
Some leaders express the desire to be data driven, or even believe they are so, simply  
because they have made significant financial investments in data. However, a closer  
examination often reveals that the data teams have no say in business operations  
or investment decisions, which severely impacts data quality. Although data teams  
are expected to convey data-related challenges to the business in layman’s terms,  
that alone isn’t a comprehensive solution. Often, senior business leaders hesitate to  
admit their lack of knowledge about data management concepts, which undermines  
their understanding and decision-making capabilities. Leaders must be willing to  
invest time and effort in learning foundational principles, change their operational  
processes and decision-making factors to improve data quality, and acknowledge that  
having large amounts of data doesn’t make them data driven. Expecting the data team  
leader to resolve issues single-handedly is unrealistic.  
# Siloed Incentives  
Productivity and business value can be severely compromised when individual per‐  
formance incentives are not aligned with overall organizational objectives. Rewarding  
individuals solely based on their personal goals can encourage actions that are detri‐  
mental to the organization. For instance, consider a high-performing sales team that  
takes longer than a quarter to reach their collective goals versus a toxic sales team  
that hits their quarterly targets but disregards data quality and rules. The former  
creates a healthy working environment, whereas the latter leads to long-term costs  
for the company through poor data and high employee turnover. It’s essential to  
recognize that siloed incentives can encourage harmful behavior and undermine  
broader organizational success.  
# Shortsightedness  
A prevalent issue within data teams is the constant need to put out fires rather  
than generate value. This reactive approach leads to frustration, unnecessary hiring,  
technology investments, and rulemaking, and increases in training and integration  
costs. The emphasis should be on identifying and addressing root causes of problems  
from a holistic perspective and what is best for the organization as a whole in the long  
term instead of on the symptom and the short term.  
# Indecisiveness  
If you recall the most frustrating meetings you’ve attended, chances are they were  
characterized by conflicting perspectives that stalled progress. Trying something,  
128 | Chapter 7\: The Science of Synchronization even if it fails, provides an opportunity to learn, adjust strategies, and move forward.  
Some managers, in an attempt to avoid taking sides or being wrong, let disagreements  
fester or even instigate conflicts under the mistaken belief that individuals will “work  
things out” independently. Such avoidance is draining and unproductive. Managers  
should either guide conversations and decision making or delegate responsibility if  
they are uncertain.  
# The Power of Design in Collaborative Networks  
Performance drives success, but when performance can’t be measured, networks drive  
success.  
—Albert-László Barabási, The Formula \(Little, Brown, 2018\)  
A golfer benefits from clear performance metrics, but organizations often lack such  
straightforward measurements. In complex organizations, where collaboration across  
teams and processes resembles the intricacies of art more closely than the simplicity  
of a stopwatch, performance metrics can be elusive. If networks drive success in these  
scenarios, how can we design these networks effectively?  
The Galton board, illustrated in Figure 7-5, is a vertical board with pegs arranged in  
a triangular pattern. When beads are dropped from the top, they randomly bounce  
off these pegs, eventually forming a bell curve at the bottom. While each bead’s  
journey seems unpredictable, the overall outcome is a predictable pattern. This board  
demonstrates how numerous random events can culminate in an expected result.  
Figure 7-5. A Galton board starts with a collection of beads at the top, and then they  
randomly move through a series of pegs to form a Gaussian \(bell\) curve.  
The Power of Design in Collaborative Networks | 129 The essence of the Galton board is not in the chaos of the balls but in the strategic  
placement of the pegs. Each peg on the board subtly influences the trajectory of the  
balls without dictating their exact path. In the same vein, in an organization, the goal  
is not to control every decision but to set simple guiding principles that help shape  
outcomes amidst the inherent unpredictability. Just as the pegs create a predictable  
end pattern from random ball movements, these principles can help an organization  
find order amidst apparent chaos.  
In the realm of organizations, people and decisions are the moving beads, and the  
guiding principles and framework are the pegs. Though you cannot predict every  
decision an individual makes, you can provide guiding principles that shape the over‐  
all outcome. Just as the Galton board transforms random bounces into a bell curve, a  
well-structured organization can channel myriad decisions toward a collective goal.  
The CLEAN data governance framework acts as those guiding pegs. It doesn’t micro‐  
manage, but rather offers clear and accessible principles for everyone. By adhering to  
these principles, individuals in an organization contribute to a harmonized objective,  
turning seemingly chaotic decisions into a well-orchestrated dance.  
With CLEAN, randomness gives way to rhythm, unpredictability molds into align‐  
ment, and apparent chaos evolves into orchestrated success. All of this is achieved  
through simple, shared standards that everyone understands and adopts. Such is the  
transformative power of the CLEAN data governance framework.  
# Summary  
This chapter explored the critical role of data governance in organizations and out‐  
lined how the CLEAN data governance framework can empower data champions  
to foster a successful, data-driven culture. Leadership plays an integral part in this  
transformation, as leadership must enable data champions to work cross-functionally,  
facilitating clear communication, fostering education, and transparently evaluating  
implementation.  
A pivotal concept covered here is thinking in networks and the fact that we can  
visualize and leverage our data with knowledge graphs. Going further in our network  
thinking, we can see how data, processes, and people interconnect and interact by  
viewing the organization holistically through a collaborative learning network lens.  
CLEAN is a simple, easy-to-learn template that provides a quick, holistic solution to  
get your organization back on track.  
Finally we looked at the common challenges that data champions face, the four  
horsemen of data death\: ignorance, siloed incentives, shortsightedness, and indeci‐  
siveness. Addressing these impediments is crucial for achieving a data-driven orga‐  
nization. The four horsemen of data death emphasize the necessity of decisive  
130 | Chapter 7\: The Science of Synchronization leadership, holistic problem solving, alignment of individual and organizational  
goals, and a willingness to learn and understand data management principles.  
Drawing a parallel to the Galton board, a device that demonstrates the aggregation  
of independent random events into a predictable pattern, we illustrated how organi‐  
zations, despite their complexity, can achieve predictable and successful outcomes.  
The CLEAN framework, like the pins on our organizational Galton board, provides  
clear and accessible standards to guide individuals’ actions, resulting in patterns that  
align with our collective objectives.  
Through shared understanding and simple standards, we can find alignment and  
success. That’s the power of network thinking and the promise of the CLEAN data  
governance framework. In Chapter 8, you will learn how to continue your journey  
of aligning your business, data, and code by using JSON Schema to validate and  
annotate data given the information you learn through CLEAN data governance.  
Summary | 131 CHAPTER 8  
# The Two Fundamental  
# Operations of Schemas  
We cannot solve our problems with the same thinking we used when we created them.  
—Albert Einstein  
In Chapter 5, you learned the basics of JSON Schema and saw a practical way to put it  
to use\: generating web forms.  
Schemas are powerful declarative artifacts that can elegantly solve a wide range of  
problems in your data-centric innovation journey, often requiring a tiny fraction of  
the code you would have to write otherwise. However, these opportunities are easy to  
miss unless you have a good grasp on how to break down problems in terms of what  
schemas can do for you.  
In Chapter 4, we discussed that data alone does not make a well-designed data  
product. It must be complemented with three other equally important facets\: context,  
structure, and meaning. Here, we will explore the two fundamental operations you  
can perform using JSON Schema\: data validation and annotation extraction \(see  
Figure 8-1\), and how they relate to these four facets.  
This chapter dives deep into these two fundamental operations and presents exam‐  
ples you can use as inspiration for adopting schemas in your projects, or increasing  
the amount of value you already get from them.  
133 Figure 8-1. A JSON Schema is typically combined with a JSON instance to produce  
validation results, annotation results, or both.  
Like Chapters 2 and 5, this chapter is aimed at the more technical  
audience interested in implementing data products. To continue  
learning about data processes and knowledge frameworks in a  
business sense, you can move to Chapter 9.  
# Validating the Structure of Data  
Get the wrong data or bad data and suddenly the AI goes haywire.  
—Steve MacLaughlin, best-selling author and Vice President of Data & Analytics at  
Blackbaud  
Validating JSON instances remains the simplest and most common use case for  
JSON Schema. Whether you are developing a RESTful JSON-based API or defining  
a JSON-based configuration file format, sooner or later you will face the validation  
problem—How do I make sure that the input JSON data matches the structure I expect  
in every case? With JSON Schema, a developer writes a declarative, language-agnostic,  
constraints-based description of the data and makes use of a JSON Schema imple‐  
mentation library to validate input JSON instances against it.  
When performing validation, you are combining a JSON Schema with a JSON  
instance to produce validation results.  
134 | Chapter 8\: The Two Fundamental Operations of Schemas For the validation use case, the JSON Schema Validation, Applicator, and Unevalu‐  
ated vocabularies provide a rich and easy-to-use set of keywords to model both  
simple and highly complex recursive data structures. JSON Schema keywords for  
data validation are referred to as assertion keywords that result in either successful  
or unsuccessful validation. For example, if the type keyword is set to integer, the  
assertion passes for integers and fails otherwise.  
As introduced in Chapter 5, in JSON Schema parlance, a JSON document that repre‐  
sents a JSON Schema is referred to as a schema, and a JSON document being valida‐  
ted against a schema is referred to as an instance. For example\: I’m validating many  
instances against this schema. If an instance matches a schema, then the instance is  
said to successfully validate against the schema.  
# Using an Online Validator  
Experimenting with JSON Schema and validating your assumptions is the best way to  
learn. We encourage you to try out the examples in this book using a modern online  
JSON Schema validator. We recommend Hyperjump \(see Figure 8-2\), a popular  
open source online validator maintained by a core member of the JSON Schema  
organization. The user writes one or more JSON Schemas at the top-left area of the  
screen and tests it against one or more JSON instances at the top-right area of the  
screen. The bottom-left area of the screen provides information about the validity  
of the JSON Schemas, and the bottom-right area of the screen provides information  
about the validity of the JSON instances according to the given schemas.  
Figure 8-2. An example of the Hyperjump online JSON Schema validator in use.  
In comparison to other online JSON Schema validators, the Hyperjump validator  
allows users to define more than one schema at the same time \(see the + symbol  
Validating the Structure of Data | 135 to the right of Schema\). This is particularly useful for testing JSON Schemas that  
reference other JSON Schemas.  
# Validation Example  
Consider the following JSON Schema adapted from the official test suite, which  
makes use of three object validation keywords defined in the Applicator vocabulary\:  
properties, patternProperties, and additionalProperties.  
All of these keywords take other JSON Schemas as arguments. The properties key‐  
word declares how a specific property must look if defined. The patternProperties  
keyword is a variation of the properties keyword that defines how certain properties  
whose keys match a specific regular expression must look if defined. Finally, the  
additionalProperties keyword defines how any property not covered by either  
properties or patternProperties must look\:  
\{  
"\$id"\: "https\://example.com/validation-example",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "object",  
"properties"\: \{  
"foo"\: \{ "type"\: "boolean" \},  
"bar"\: \{ "type"\: "integer" \}  
\},  
"patternProperties"\: \{  
"\^v"\: \{ "type"\: "string" \}  
\},  
"additionalProperties"\: \{  
"type"\: "array"  
\}  
\}  
Consider the following instances against the previous schema\:  
\{\}  
\{ "foo"\: 1 \}  
\{ "foo"\: true \}  
\{ "vvv"\: 1 \}  
\{ "baz"\: \{\} \}  
\{ "baz"\: \[\] \}  
\{ "foo"\: true, "vvv"\: "test" \}  
Valid. No property is defined.  
Invalid. The foo property must be a Boolean.  
Valid.  
Invalid. Properties that match the \^v regular expression must be strings.  
136 | Chapter 8\: The Two Fundamental Operations of Schemas Invalid. baz must be an array.  
Valid.  
Valid.  
Note that if a property defined by properties also matches a regular expression  
defined in patternProperties, then the property must successfully validate against  
both the properties and patternProperties schemas.  
# JSON Schema as a Constraints Language  
To make the best use of JSON Schema, it’s important to understand that it is not a  
modeling language, but a constraints language. While this distinction is subtle, it has  
philosophical ramifications that result in unexpected behavior for the unaware.  
Formally, a schema can be thought of as the potentially infinite or potentially empty  
set of entities it successfully describes \(see Figure 8-3\). An entity validates against a  
schema if it belongs to the set of its matching instances.  
Figure 8-3. A schema defined in terms of the set of its matching instances. A schema  
has an infinite set of matching instances if any of its subschemas has an infinite set of  
matching instances.  
A schema language that adopts the modeling philosophy does not initially describe any  
matching instance; these schemas start as the empty set. Under this philosophy, the  
schema author starts defining what permissible instances look like. For example, the  
schema author may declare a foo integer property so that only instances that have a  
foo integer property—nothing more and nothing less—are considered valid.  
A schema language that adopts the constraints philosophy starts at the other end of  
the spectrum; these schemas start as the infinite set of all JSON instances. Under  
this philosophy, the schema author defines what constraints are applied to matching  
instances \(as in Figure 8-4\). For example, the schema author may declare that if the  
instance is an object and declares the foo property, then this property must not be an  
array. Schemas that are not objects, that do not declare the foo property, or whose foo  
property is not an array, are still valid.  
Validating the Structure of Data | 137 Figure 8-4. A series of JSON Schemas where each subsequent schema adds an additional  
keyword indicated by a surrounding box. The presence of each additional keyword  
imposes one further constraint to the set of matching instances, as described to the right.  
138 | Chapter 8\: The Two Fundamental Operations of Schemas As the excellent post on the topic by Henry Andrews \(coauthor of most modern  
JSON Schema specifications\) suggests, the key question to ask yourself when using  
JSON Schema for validation purposes is, have I forbidden everything I don’t want?  
# Boolean Schemas  
A JSON Schema is either an object or a Boolean. Any other type, like an array, would  
never represent a JSON Schema. While you are probably aware of object schemas,  
you may have used Boolean schemas without realizing they were indeed schemas. In  
fact, Boolean schemas are aliases to certain special object schemas \(see Figure 8-5\).  
Figure 8-5. The true Boolean schema matches every instance, whereas the false  
Boolean schema matches no instance.  
In JSON Schema, the empty object \{\} is the wildcard schema that successfully  
validates against every instance. This schema is aliased to the Boolean schema true.  
By the constraints philosophy, it follows that the use of any JSON Schema assertion  
keyword imposes a new constraint on the schema. We can conclude that a JSON  
Schema that does not make use of any keyword is a schema that successfully validates  
against every JSON instance. Hence, the \{\} or true schema imposes no constraints,  
and matches every JSON value. The set of its matching instances is infinite.  
Naturally, if the Boolean schema true matches every possible instance, the Boolean  
schema false is the schema that matches no instance. We know that true is an alias  
to \{\}, but the definition of false is not as simple. The set of its matching instances is  
empty, so in theory, any JSON Schema that represents unsatisfiable constraints \(such  
as a contradiction\) is semantically equivalent to the false schema. For example, a  
schema that successfully validates instances that are both a number and a string \(an  
impossible conjunction\) is the false schema. In practice, the canonical definition of  
the false schema relies on the not logical operator; JSON Schema typically refers to  
the false schema as \{ not\: \{\} \}, the negation of the empty schema.  
Validating the Structure of Data | 139 Think of true as the wildcard schema and false as the impos‐  
sible schema. If you are authoring a schema that utilizes these  
special schemas, you should use the Boolean aliases over their  
object-based definitions. While both representations are semanti‐  
cally equivalent, Boolean schemas are more concise and provide  
a clear answer for removing the ambiguity of how to refer to the  
impossible schema.  
A common pattern to disallow extra properties that are not explicitly defined by a  
schema, which we used in Chapter 5, is to set the additionalProperties keyword  
to false. For example, the following is a JSON Schema that successfully validates  
against objects that have a foo string property and a bar integer property, and no  
other property\:  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "object",  
"required"\: \[ "foo", "bar" \],  
"additionalProperties"\: false,  
"properties"\: \{  
"foo"\: \{ "type"\: "string" \},  
"bar"\: \{ "type"\: "integer" \}  
\}  
\}  
The prevention of object properties that are not defined by the properties keyword  
is accomplished through the use of the additionalProperties keyword, which takes  
as an argument a subschema that must successfully validate against every property  
not covered by its object-related applicator keywords \(like properties\).  
In the preceding example, our use of the additionalProperties keyword is telling  
JSON Schema that every property not matched by the properties keyword must  
successfully validate against the false schema. As we saw, the false schema is not  
satisfiable. Therefore, every additional property fails validation, effectively prohibit‐  
ing any additional property.  
# Heterogeneous Data Structures  
Surprisingly to some, in JSON Schema, keywords that apply to specific data types  
successfully validate against a value of a different type. For example, setting the multi  
pleOf keyword to the value 2 ensures that a numeric instance corresponds to an even  
number. However, multipleOf set to 2 successfully validates against any string value,  
arbitrary object, or any other type of JSON instance that does not represent a number.  
In JSON Schema, keywords that apply to a specific data type come with a hidden  
implication—they are taken into account if and only if the instance is of the corre‐  
140 | Chapter 8\: The Two Fundamental Operations of Schemas sponding type and are ignored otherwise. While this behavior is a common pitfall  
for newcomers, it enables proficient schema authors to elegantly and concisely write  
schemas that describe heterogeneous data structures.  
For example, assume that you want to validate a JSON instance that is either a  
positive integer, a string that represents a positive integer, or an array of at least  
one positive integer. Using this capability, you can write a schema that successfully  
validates instances that are either positive integers \(using type and minimum\), strings  
that represent positive integers \(using type and pattern\), or nonempty arrays of  
positive integers \(using type, minItems, and items\), as follows\:  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: \[ "integer", "string", "array" \],  
"minimum"\: 0,  
"pattern"\: "\^\\\\d+\$",  
"minItems"\: 1,  
"items"\: \{  
"type"\: "integer",  
"minimum"\: 0  
\}  
\}  
If validation keywords that apply to specific data types would not successfully validate  
against other data types, the preceding schema would have to be decomposed as a  
disjunction that separately handles each case. The anyOf keyword enables you to  
express the same schema in an arguably more verbose and nested manner\:  
\{  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"anyOf"\: \[  
\{ "type"\: "integer", "minimum"\: 0 \},  
\{ "type"\: "string", "pattern"\: "\^\\\\d+\$" \},  
\{  
"type"\: "array",  
"minItems"\: 1,  
"items"\: \{  
"type"\: "integer",  
"minimum"\: 0  
\}  
\}  
\]  
\}  
This JSON Schema is equivalent to the preceding schema, but the anyOf logic opera‐  
tor keyword has been used to separately define each valid case.  
Validating the Structure of Data | 141 The format Keyword  
If you used older versions of JSON Schema, you might be familiar with the format  
optional keyword introduced by the JSON Schema validation specification. This  
keyword was originally created to define string-based logical data types. For example,  
a schema writer may declare that a string property represents an IPv4 address by  
setting the format keyword to ipv4. Back then, a fully adhering JSON Schema imple‐  
mentation could optionally validate the content of the string against this predefined  
logical type.  
The Hyperjump online JSON Schema validation we have used so far no longer  
supports older versions of JSON Schema. Figure 8-6 shows an example JSON Schema  
Draft 4 that validates strings \(through the use of the type keyword\) that represent  
email addresses \(through the use of the format keyword\) using the Newtonsoft  
online JSON Schema validator.  
Figure 8-6. In JSON Schema Draft 4, strings that do not represent valid email addresses,  
like foo, fail validation.  
In practice, it was hard for implementations to come into agreement about how to  
validate textual input properly and efficiently according to these logical types. This  
142 | Chapter 8\: The Two Fundamental Operations of Schemas would often result in inconsistencies between JSON Schema implementations. For  
example, JSON Schema supports setting the format keyword to the regex logical  
type. However, efficiently validating that a string is a valid regular expression and  
unambiguously rejecting the ones that are not is not trivial. As a consequence,  
implementations would sometimes make mistakes and not provide uniform results  
with respect to other implementations.  
As a solution, modern JSON Schema dialects \(starting from 2019-09\) introduced a  
breaking change—the format keyword would no longer be an assertion keyword by  
default. The format keyword still has its use to describe the semantics of data \(as you  
will see in the next section\) but does not play a role in validation anymore.  
For example, setting the format keyword from the Format Annotation vocabulary to  
email no longer allows implementations to make sure the string actually corresponds  
to an email \(see Figure 8-7\). If schema writers require validation of the content of a  
string, we recommend making use of the pattern keyword. In this way, the schema  
writer is explicit about how implementations are meant to validate their strings.  
Figure 8-7. This is a modern JSON Schema 2020-12 counterpart to the JSON Schema  
Draft 4 email validation schema in Figure 8-6. In comparison to the previous Draft  
4 schema, JSON strings that do not represent email addresses now pass validation by  
default.  
In comparison to Format Annotation, JSON Schema 2020-12  
defines a vocabulary called Format Assertion that introduces a for  
mat used by default by the official JSON Schema dialect. Not many  
implementations support it. To use it, you also have to define your  
own JSON Schema dialect, a topic we will cover in Chapter 13.  
Validating the Structure of Data | 143 Using Annotations to Define Meaning  
To a collector of curios, the dust is metadata.  
—David Weinberger, author and proponent of the philosophical and ethical  
implications of machine learning  
Now, we turn our attention to the other half of the equation\: defining the meaning  
behind certain parts of your JSON instances. This is done using a capability called  
annotations.  
JSON Schema keywords that provide additional information without affecting vali‐  
dation are called annotation keywords. These keywords associate specific parts of  
your data with specific bits of metadata. The software application making use of  
JSON Schema can choose to collect these annotations and act on their values as the  
application sees fit.  
The JSON Schema Meta Data, Format Annotation, and Content  
vocabularies provide a rich set of annotation keywords. We encour‐  
age you to consult the documentation of these vocabularies to  
check which annotation each keyword produces.  
# Annotation Extraction Example  
A common use case for JSON Schema, briefly explored in Chapter 5, is to generate  
web-based forms that result in data that matches the expected format. These form  
generators typically implement support for commonly used annotation keywords to  
decorate the resulting form. For example, the React JSON Schema Form open source  
project collects the value of the readOnly annotation keyword to set input elements as  
disabled \(see Figure 8-8\).  
144 | Chapter 8\: The Two Fundamental Operations of Schemas Figure 8-8. An example form generated using the React JSON Schema Form online play‐  
ground. Setting the annotation keyword readOnly in the firstName property results in  
a disabled text input. Similarly, you can see how the title annotation keyword affects  
the human-readable labels of each generated input, and how the default annotation  
keyword populates the form with prefilled information.  
# A Simple Use Case\: Deprecations  
A simple example of an annotation keyword is the deprecated keyword. Setting it  
to true for a specific property does not affect validation; it simply signifies that the  
property will likely be removed in the future and users should not set it anymore.  
How you react to the presence of this keyword is up to you and the needs of your  
application. You may log a warning, present an alert, or simply ignore it. Figure 8-9  
shows a basic example of deprecated in action.  
Using Annotations to Define Meaning | 145 Figure 8-9. An example schema that defines two properties\: name and address. The  
address property is marked as deprecated, but this does not make addresses invalid.  
Instead, the system that evaluates this schema can decide how to interpret this depre‐  
cated annotation as it sees fit, or simply ignore it.  
Imagine you are tasked to write an API that processes JSON instances that match  
the schema in Figure 8-9. When processing incoming instances, you might want to  
report a warning if the client is setting the deprecated address property. A simple  
way of accomplishing this task is to statically check the schema by manually consult‐  
ing the value at /properties/address/deprecated.  
For example, if you are using JavaScript, you might write code like this to log use of  
the deprecated property to standard error\:  
if \(instance.address && schema.properties.address.deprecated\) \{  
console.error\('The instance sets the address deprecated property'\);  
\}  
# Runtime Extraction  
While statically traversing the schema for instances of the deprecated keyword  
works in this simplistic case, reality is often more complicated. For schemas that  
146 | Chapter 8\: The Two Fundamental Operations of Schemas make use of advanced features such as logic operators, conditions, or recursive  
definitions, determining which annotations apply where using only the schema can  
be impossible. See Figure 8-10 for an example.  
Figure 8-10. An example schema that defines an object with two properties\: type and  
data. The schema uses different annotation keywords \(from the Meta Data vocabulary\)  
for the same data property depending on the value of the type property. If the type  
property is set to secret, then data is considered write-only. If the type property is  
set to label, then data is considered read-only. Otherwise, data is considered to be  
deprecated.  
Using Annotations to Define Meaning | 147 With a schema such as the one in Figure 8-10, the resulting annotations directly  
depend on the instance itself. Unlike in the simpler example in Figure 8-9, it is  
impossible to determine which annotations apply without also looking at the instance  
data. Furthermore, writing logic to handle this case would involve the daunting task  
of producing a complete JSON Schema implementation.  
To solve this problem, JSON Schema supports a standardized mechanism for extract‐  
ing annotations at runtime, handling all of this complex logic for you. This interop‐  
erable runtime annotation collection mechanism is based on the standard output  
formats of JSON Schema.  
# A Note on Performance  
Collecting annotations can impact runtime performance. For example, if you collect  
annotations on a JSON Schema that makes use of the anyOf applicator, the imple‐  
mentation is forced to evaluate the instance against every disjunction in the anyOf  
applicator. In comparison, if not collecting annotations, implementations may stop  
evaluation as soon as one anyOf subschema successfully validates against the instance.  
In the interest of runtime efficiency, we recommend collecting annotations only if  
your use case demands it.  
# Standard Output Formats  
Annotations are only useful if an application using JSON Schema can read them back  
in a convenient manner. For example, it is often useful for an application to list any  
deprecated object subproperties. To increase interoperability among applications that  
use JSON Schema, the JSON Schema Core specification standardizes what the output  
of a compliant JSON Schema implementation should look like. The standard output  
formats defined by JSON Schema are JSON based and offer a clear interface for how  
annotations can be read and used by an application.  
As you would expect, the JSON Schema organization publishes a  
JSON Schema that validates and describes JSON Schema output  
instances.  
JSON Schema is utilized across use cases that demand different output requirements.  
For this reason, JSON Schema specifies different output formats with different levels  
of detail. At the time of writing, these formats are flag, basic, detailed, and verbose. A  
comprehensive study of every standard output format is outside of the scope of this  
book, as some of them are often only useful for JSON Schema implementers.  
148 | Chapter 8\: The Two Fundamental Operations of Schemas Not every JSON Schema implementation out there supports every  
standard output format. In fact, implementations are only recom‐  
mended to support standard output formats. Make sure to select a  
JSON Schema implementation that provides the output format that  
best suits your application.  
For simplicity, this book will adopt basic as our preferred output format. This is an  
example output of unsuccessful schema validation using the basic standard format.  
The output will contain an object for every error \(if any\) or annotation \(if any\)  
encountered during evaluation\:  
\{  
"valid"\: false,  
"errors"\: \[  
\{  
"keywordLocation"\: "",  
"instanceLocation"\: "",  
\}  
\{  
"keywordLocation"\: "/properties",  
"instanceLocation"\: ""  
\},  
\{  
"keywordLocation"\: "/properties/id",  
"instanceLocation"\: "/id"  
\},  
\{  
"keyword"\: "/properties/id/type",  
"instanceLocation"\: "/id"  
\}  
\]  
\}  
Every standard output format other than flag can produce detailed error and anno‐  
tation information. When collecting annotations, the basic standard output format  
will include a top-level annotations array that includes the annotation value, the  
keyword that originated it, and where in the instance the annotation was produced.  
Applications may loop over this array and consume the annotations in any way they  
see fit.  
Consider the following JSON Schema that uses the title annotation keyword from  
the Meta Data vocabulary\:  
\{  
"\$id"\: "https\://example.com/schema-with-title",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "My Schema"  
\}  
Using Annotations to Define Meaning | 149 A compliant implementation would collect My Schema as an annotation value for the  
title keyword. This is how it would look when making use of the basic standard  
output format\:  
\{  
"valid"\: true,  
"annotations"\: \[  
\{  
"valid"\: true,  
"keywordLocation"\: "/title",  
"absoluteKeywordLocation"\: "https\://example.com/schema-with-title\#/title",  
"instanceLocation"\: "",  
"annotation"\: "My Schema"  
\}  
\]  
\}  
# Revisiting the format Keyword  
Previously, we discussed that the format keyword was historically an assertion key‐  
word used for validation purposes. Now, under the official JSON Schema 2020-12  
dialect, it is only used to indicate what data type such value represents. Using the  
knowledge we’ve acquired in this section, we can say that currently the format  
keyword only produces an annotation.  
For example, consider the following schema that uses the format keyword to declare  
that the instance represents a URI\:  
\{  
"\$id"\: "https\://example.com/format",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "string",  
"format"\: "uri"  
\}  
While a compliant JSON Schema will not check that the given string indeed repre‐  
sents a URI, it will collect an annotation for the format keyword with a value that  
equals the declared format, uri\:  
\{  
"valid"\: true,  
"keywordLocation"\: "/format",  
"absoluteKeywordLocation"\: "https\://example.com/format\#/format",  
"instanceLocation"\: "",  
"annotation"\: "uri"  
\}  
150 | Chapter 8\: The Two Fundamental Operations of Schemas Using an Online Validator  
Many online JSON Schema validators skip presenting validation output in standard  
formats in favor of human-consumable visual results. To play with annotations, we  
recommend choosing an online validator that directly presents output results. One of  
those is json-everything \(see Figure 8-11\), the playground of a popular JSON Schema  
implementation for C\#.  
Figure 8-11. An example of the json-everything online JSON Schema validator in use.  
The user can write one JSON Schema at the top-left area of the screen and provide one  
JSON instance at the top-right area of the screen. The bottom area of the screen shows  
the validation result, including collected annotations, according to the selected standard  
output format.  
# Thinking in Schemas  
We say that JSON Schema is a universal data language because it is capable of both  
defining structure \(through the data validation operation\) and conveying context  
and meaning \(through the annotation extraction operation\). With JSON Schema, the  
pinnacle of a data product occurs while evaluating the schema against an instance,  
which unifies data, structure, and metadata.  
Most users only use JSON Schema as a data validation tool, solely considering the  
data and structure facets. However, as you will see in Chapters 12–14, using annota‐  
tions to gather context and meaning can open up interesting use cases.  
Thinking in Schemas | 151 Summary  
This chapter explored in depth the two operations you can perform using JSON  
Schema, data validation and annotation extraction, and demonstrated how JSON  
Schema relates to the four facets of a data product \(introduced in Chapter 4\). By  
now, you know how to identify real-world data problems that can be broken down  
in terms of these two operations, allowing you to solve them in declarative and  
simplified ways.  
In the next chapters, you will learn how to use annotation and validation keywords  
to create a unified concept library for your organization, which will enable you to  
view concepts in both business-friendly language and in technical representations  
that your code and data teams can utilize.  
152 | Chapter 8\: The Two Fundamental Operations of Schemas CHAPTER 9  
# Illuminating Pathways of Acceleration  
Imagine a room bathed in the unfocused light of a 150-watt bulb, its beams scattering  
in all directions without a clear aim. Now, visualize that same energy concentrated  
into a laser beam capable of slicing through metal \(see Figure 9-1\). This shift from  
diffuse illumination to targeted intensity embodies the transformative power of align‐  
ment in innovation. It’s a lens through which we can understand how harmonizing  
goals, processes, and technologies can propel us forward toward success.  
Figure 9-1. A laser epitomizes alignment, emitting light in a perfectly synchronized,  
focused beam. A light bulb generates unsynchronized light, resulting in a scattered glow.  
The power of alignment is epitomized by this comparison. Whether in the realm of  
physics or the world of business, the focus and direction of energy can manifest vastly  
different results. A scattered approach results in diluted influence, while a purposeful,  
laser-like focus can drive transformation that reshapes entire industries.  
In previous chapters, we’ve explored tools that identify and eliminate misalignment.  
From harmonizing language through the concept compass and its data representa‐  
tions using JSON Schema to synchronizing rules of effective collaboration across  
business operations with CLEAN governance, we’ve laid the groundwork for what’s  
153 next\: the accelerate phase of unifying, where you sharpen your organization’s innova‐  
tion into a laser.  
Getting people to align on the meaning of concepts is one thing. Achieving agree‐  
ment on what success looks like and what direction to focus efforts in, especially  
when there are competing ideas, is an entirely different task.  
This chapter explores how to transform scattered organizational efforts into a stream‐  
lined and focused powerhouse. You’ll gain a nuanced understanding of how intercon‐  
nected elements shape an organization’s journey toward aligning processes, decisions,  
and key insights.  
This chapter will teach you how to apply data hygiene, as first defined in “What You  
Can’t See Can Kill You, and the Same Is True for Data”  
on page xii, to better align  
processes, decision making, and language, and to reveal where alignment is needed.  
You want to eliminate the following\:  
Ambiguity  
Uncovering the elusive and often unclear aspects that can hinder progress and  
learning how to navigate them to improve clarity and direction  
Knowledge gaps  
Identifying what specific knowledge is needed to make progress and understand‐  
ing how gaps in knowledge can create barriers to success  
Blind spots  
Gaining the self-awareness to begin mapping how ambiguity and knowledge gaps  
might be impacting processes and progress toward goals  
You will learn the following tools in this chapter\:  
Process maps  
Creating detailed visuals to show progress and decision-making processes  
Annotating process maps  
Overlaying annotations such as risk, ambiguity, and pain points on process maps,  
for a comprehensive perspective on organizational challenges and opportunities  
From simple questions to complex organizational strategies, we will uncover layers  
of ambiguity, knowledge gaps, and pathways to success. Whether you are a data  
champion in a small startup or a large corporation, this chapter will equip you  
with the skills to align your business, data, and goals into a laser-focused strategy,  
transforming the mundane into the extraordinary.  
154 | Chapter 9\: Illuminating Pathways of Acceleration How Ambiguity, Knowledge Gaps, and Blind Spots  
# Influence Decisions and Progress Toward Goals  
Ambiguity, knowledge gaps, and blind spots are three often invisible forces within  
organizations that pose insidious threats to effective decision making. They can create  
costly misunderstandings that steer actions and outcomes away from intended goals  
and weakening overall strategy.  
The root causes of organizational mistakes often manifest in downstream processes  
but are caused by misalignment upstream. Identifying this misalignment is a complex  
task because ambiguity tends to be invisible and can grow more intricate and abstract  
over time. When compounded by frequent miscommunication, this situation can  
quickly deteriorate.  
Let’s explore ambiguity and knowledge gaps a bit further in Figure 9-2\:  
Ambiguity  
This hides true intent, fostering mistakes. It’s like using different phrases to  
describe the same thing or using the same phrases to describe different things.  
Knowledge gaps  
These are literal missing pieces of information needed to achieve a goal. Without  
them, it becomes difficult to take actions with confidence.  
Figure 9-2. Ambiguity can be described as using different phrases to describe the same  
thing or using the same phrases to describe different things. Knowledge gaps are missing  
pieces of information needed to achieve a goal, making it difficult to take actions with  
confidence.  
How Ambiguity, Knowledge Gaps, and Blind Spots Influence Decisions and Progress Toward Goals | 155 The third dimension of data hygiene is blind spots, which is when an organization has  
unknown unknowns. As long as teams and leaders are not aware of what knowledge  
they need to succeed, and where ambiguity is increasing the risk of assumptions and  
mistakes, executing the desired intent toward an outcome with reliability is difficult.  
One important skill to develop as a data champion is recognizing where ambiguity  
and knowledge gaps exist in decision-making processes and understanding their  
impact on data.  
# Which Is Bigger\: Greenland or the US?  
Building on what you’ve learned about ambiguity and knowledge gaps, let’s explore  
how these concepts play out in a seemingly simple question \(see Figure 9-3\)\: which is  
bigger, Greenland or the US?  
Figure 9-3. A flattened map is a data representation that distorts geographic scale.  
This example may seem straightforward, but it contains several hidden layers of  
ambiguity\:  
•  
• Ambiguity in data. Transforming the earth, a three-dimensional sphere, into a  
two-dimensional representation like a map necessitates certain compromises.  
This transformation is known as a map projection. There are various methods of  
map projection, and each method represents the surface of the earth differently.  
The Mercator projection, for instance, preserves angles and shapes but distorts  
the size of land masses as they get farther from the equator. As a result, Green‐  
land, which is much closer to the North Pole, appears significantly larger on a  
Mercator map than it is in reality, making it seem comparable in size to the US  
even though it’s considerably smaller. When you look at a map, are you aware of  
156 | Chapter 9\: Illuminating Pathways of Acceleration the projection method used? Would you recognize how the distortion caused by  
the map projection method changes the representation?  
•  
• Ambiguity in decisions. Even if you recognize the distortion, ambiguity still exists;  
you may not know whether the question refers to geographic or visual size, or  
whether anyone knows how to convert between the two.  
• Ambiguity in goals. Understanding the map’s distortion and the question’s refer‐  
•  
ence to geographic size may not be enough. What if success in this scenario  
requires identifying the many layers of ambiguity—not arriving at the “right”  
answer, but comprehending the complexity of the question itself?  
No matter how the question of which is bigger is answered, the ways this question  
could be answered and how success could be measured are many. This ambiguity may  
have been invisible to you until now, as it often is in organizations. Documents are  
shared, questions are asked, decisions are made, performance is judged, all without  
recognizing the underlying ambiguity.  
# Mapping Pathways of Processes and Progress  
Just as a well-planned itinerary helps ensure a seamless trip, defining decisions  
and measuring progress through process maps is crucial for achieving favorable  
outcomes. Success requires understanding the “location” of each decision point,  
connecting them into a coherent path, and empowering the organization to move  
with purpose and agility, reduce inefficiencies and promote innovation.  
# Measuring Progress Toward Goals  
In real estate, the phrase “location, location, location” underscores the paramount  
importance of a property’s surroundings, which can often overshadow other consid‐  
erations. Similarly, in the realm of decision making and achieving success, “knowing  
where you stand” relative to the desired outcome—having a clear sense of direction  
and knowing how far you’ve progressed toward your goals—is essential. As a data  
champion, one of your core objectives is to dispel ambiguity around organizational  
goals. This involves understanding the measures and metrics of success and ensuring  
clear and reliable communication between various business functions and those  
success metrics.  
Suppose your team aims to get sign-ups for a subscription service via a series of web  
pages. Without a clearly defined user flow, pinpointing where potential subscribers  
drop off, much less conducting analytics or formulating strategies for improvement,  
would be a daunting task.  
Mapping Pathways of Processes and Progress | 157 Defining Decisions and Steps with Process Maps  
A process map is more than a diagram; it’s a strategic tool that unveils the dance of  
activities within a process. Think of it as a choreographed routine, where each step,  
decision, and outcome must flow harmoniously.  
Process maps don’t just depict the sequence; they reveal the stakeholders’ unique  
perspectives, the critical decisions, and the potential roadblocks. This transparency  
is essential for pinpointing inefficiencies and paving the way for innovation and  
improvement. Figure 9-4 provides an example of this choreography at play.  
Figure 9-4. This process map illustrates the sequential events in a workflow. Decision  
nodes, depicted as diamonds, guide the flow through yes/no or true/false pathways. The  
current location within the process is referred to as the state.  
Process maps generally have at least four types of nodes\:  
Start/end nodes  
These nodes represent the start or the end of a process.  
Process nodes  
These show a task or operation that needs to be performed.  
Decision nodes  
These represent a point in the process where a decision needs to be made that  
will determine the next step\(s\). These are usually a diamond shape.  
Current state  
This is the node that represents where a system or person is in a process. It serves  
as a beacon, enabling efficient navigation through complex workflows.  
158 | Chapter 9\: Illuminating Pathways of Acceleration Process maps often require significant time to create and are useful in fields like  
software development or UX design. However, they may not suit the data champion’s  
needs in identifying ambiguity and misalignment in intent, data, decisions, and goals.  
As businesses adapt and change to situations, managing and updating process maps  
can require significant work. Therefore, unifying’s relationship with process maps  
is specific to addressing ambiguity, knowledge gaps, and creating alignment—not  
in documenting or architecting processes, unless it becomes necessary for the data  
champion to include formal process mapping and/or process documentation \(also  
called “work instructions”\) in their scope.  
In unifying, we recommend that you use the process mapping approach with a set of  
very specific contexts\:  
Learning quickly  
In consulting, process maps are a great way to quickly get a snapshot of how  
a business unit runs. Focus on your ability to understand process inputs and  
outputs, rather than creating perfect documentation.  
Revealing ambiguity  
If you ask five people to define the processes of a business function and you get  
five different maps, then that is a pretty good indicator of ambiguity.  
Identifying knowledge gaps  
If people can’t explain how processes work, that is an indicator of knowledge  
gaps. Ambiguity in processes will reveal your own knowledge gaps, the explora‐  
tion of which will help you understand the organization’s challenges.  
Highlighting misalignment  
If there are pain points, problems, and challenges in processes where expecta‐  
tions and operational reality aren’t aligned, being able to pinpoint their locations  
is valuable.  
# How Process Maps Reveal Ambiguity  
Imagine yourself as a data champion on a new innovation project for the customer  
service department that handles order fulfillment. You get a list of stakeholders to  
interview to examine opportunities for optimizing the business with a data-centric  
approach. The first interview reveals a process map that mirrors Figure 9-4. However,  
the second interview reveals a process map that looks like Figure 9-5.  
Mapping Pathways of Processes and Progress | 159 Figure 9-5. This process map shows that before attempting to fulfill an order, the  
customer service representative checks whether the customer has outstanding debt more  
than 90 days old and, if so, blocks the order from proceeding.  
The difference between these two process maps is that the second map has intro‐  
duced two nodes\: a decision node as to whether the customer has debt that has not  
been paid for at least 90 days, and a process node to block the order if the answer is  
yes. Even though you are new to the project and have a knowledge gap of how debt  
logic and order blocking rules work, because the two stakeholders gave you different  
process maps, you can see there is ambiguity between the two process definitions and  
knowledge gaps have surfaced that you need to resolve. This is similar to the concept  
compass in Chapter 6. You need to harmonize the business logic, processes, and data  
representations.  
# Visualizing and Removing Ambiguity in Processes  
At the start of your illumination journey, we likened the process to the transforma‐  
tion of a light bulb’s diffused energy into the focused power of a laser beam. As  
you gather, analyze, and reconcile different process maps, think of this endeavor  
as refining that diffused understanding—scattered like a light bulb’s rays—into a  
precise, laser-focused insight. As you remove ambiguity and fill knowledge gaps,  
you’re sharpening that beam, ensuring your organization’s efforts are as effective and  
impactful as that laser cutting through steel.  
160 | Chapter 9\: Illuminating Pathways of Acceleration It is helpful to quantify exactly how many different process maps you get from  
the stakeholder interviews. Consider the following results from three different stake‐  
holder groups\:  
Process map 1  
Contains 1 decision node and 4 process nodes.  
Process map 2  
Contains 2 decision nodes and 6 process nodes.  
Process map 3  
Contains 5 decision nodes and 10 process nodes.  
In the align phase of unifying, we were able to use a spreadsheet to highlight exactly  
where and how many concepts were misaligned. In the accelerate phase we aim to do  
the same for processes, decisions, and goals, and provide the insights you collect on  
misalignment, ambiguity, and knowledge gaps in a simple visualization, as shown in  
Figure 9-6.  
Figure 9-6. A simple visualization shows that the three process maps of the same business  
function have different numbers of decision and process nodes.  
As the data champion, you now have demonstrable ambiguity to investigate and a  
knowledge gap as to why they are different. Therefore, you need to dive deeper to  
clarify any differences to make a proper map, which in our hypothetical situation,  
might look like Map 4 in Figure 9-7.  
Visualizing and Removing Ambiguity in Processes | 161 Figure 9-7. Your own perspective, after shadowing stakeholders in their workflows, might  
reveal vastly different process maps that might be combined into one in order to align  
everyone to formal process management.  
# Enriching Process Maps with Annotations  
Process maps may also reveal ambiguity and knowledge gaps, particularly when  
they uncover problems or challenges. Unifying recommends an annotation-based  
approach using a few common and useful symbols \(see Figure 9-8\), but you can  
create your own symbols and icons as you see fit\:  
Pain points  
A frustration in a process—a fire icon  
Blocks  
A user/employee is unable to complete a task—a brick or wall icon.  
Uncertainty  
Information or results are unreliable—a question icon  
Risk  
A dangerous situation—a bomb icon  
Value  
A particular point that is highly valuable  
162 | Chapter 9\: Illuminating Pathways of Acceleration Figure 9-8. This process map uses the annotation icons to identify where pain points,  
blocks, uncertainty, risk, and value-related issues are expressed during stakeholder inter‐  
views. Pain levels are rated a 5 in this example \(see the Tip on levels\).  
We recommend adding levels to annotations when possible. For  
example, a pain point level 2 \(on a scale of 1–5\) is different from  
a pain point level 5. The differences between described pain point  
levels of stakeholders can help identify priorities, showing where  
ambiguity needs to be explored further.  
# Process Maps Reveal Innovation Opportunities  
In Figure 9-8, risk is shown in the “Check customer balance” node because the  
stakeholder revealed that not everyone checks the balance and that it is hard to find  
on the screen. This insight reveals the opportunity to create a user experience that  
highlights the customer balance.  
The “Has debt?” decision box has a question icon, which in our hypothetical example,  
indicates that the accounting system updates the debt warning only once a month.  
Therefore, if someone calls to place an order before the debt calculation update, the  
customer service rep doesn’t know if they are viewing accurate information or not.  
The brick/blocked icon reveals that the customer service representatives feel that they  
have no way to verify whether an item is in stock, so they are blocked from providing  
a high-quality experience for customers.  
Lastly, the stakeholders said that if the system could provide alternatives to items  
out of stock instead of relying on memory, selling more merchandise would be a lot  
easier.  
Visualizing and Removing Ambiguity in Processes | 163 Summary  
As data champion, your role is to serve as a beacon, guiding others in your organiza‐  
tion toward success with a data-centric approach of uncovering layers of complexity  
and navigating them with clarity.  
In this chapter, we took a journey that illuminated pathways to acceleration, revealing  
the transformative potential of alignment and the power of focusing energy, akin  
to transforming a diffuse light bulb into a laser. This analogy set the stage for our  
exploration of the complex world of business, where the focus and direction of  
energy can reshape entire industries.  
Data champions use strategies to navigate the often invisible barriers of ambiguity  
and knowledge gaps, which can hinder progress. You’ve learned the art of process  
mapping\: connecting decision points into coherent paths and providing tools to  
measure progress toward goals. You also learned how to enrich process maps with  
annotations, identifying pain points, blocks, uncertainty, risk, and value, and how  
these insights can pave the way for innovation.  
As a data champion, you are equipped with actionable tools to question, identify,  
and eliminate ambiguity and knowledge gaps, transforming scattered efforts into a  
focused, potent force to accelerate innovation.  
In Chapter 10, we’ll look further into illuminating pathways of acceleration. You’ll be  
introduced to success spectrums—an approach that seamlessly blends process maps,  
KPIs, and success metrics while placing knowledge at the forefront.  
164 | Chapter 9\: Illuminating Pathways of Acceleration CHAPTER 10  
# Spectrums of Success  
In Chapter 9, we embarked on a journey to illuminate the path from ambiguity to  
clarity, transforming the diffuse light of a bulb into the sharp focus of a laser. The  
transformational nature of unifying allowed us to identify and address ambiguity in  
processes and decision points, leading to stronger and more effective collaboration.  
Building on the metaphor of light from Chapter 9, we introduce success spectrums  
in this chapter—a colorful, linear progression that symbolizes the various stages of  
success in an innovation project.  
Much like the visible light spectrum progresses through the colors from red to violet,  
the spectrum of success represents a journey. It’s a pathway where each color signifies  
a different state or stage of success, guiding us from the initial idea to the realization  
of our goal.  
In this chapter you will learn strategies and tools for\:  
Success spectrums  
steps  
Continuums that define the current state to the ideal future, with clear, sequential  
Structured knowledge  
Defining objectives, knowledge, and progress in a way that can be computation‐  
ally implemented  
Problem landscapes  
A tool to visualize and prioritize organizational challenges  
Creative thought experimentation using “demons”  
A novel way to explore possibilities and break barriers in innovation  
165 An Introduction to Knowledge Frameworks  
Consider a hypothetical situation\: you are a student in college, taking a math test  
that has a single question. If you successfully answer the question, you pass the  
course and graduate. If you don’t, you fail and you don’t graduate. A common  
educational approach involves using a knowledge framework, which consists of four  
main elements\: knowledge objectives, assessments, knowledge gaps, and interventions.  
Each of these components plays a crucial role in the learning process, as visualized in  
Figure 10-1\:  
Knowledge objectives  
These state that the objective is for a learner to demonstrate mastery of a sub‐  
ject, such as multiplication. Knowledge is the information you need to solve a  
problem.  
Assessments  
These are questions designed to quantify how knowledge will be evaluated in a  
standardized way. By what measure and metrics \(e.g., verbal definitions, analyti‐  
cal evaluation of a thought process\) will knowledge be evaluated?  
Knowledge gaps  
The information that a learner does not know and is preventing them from  
moving forward. For example, if someone doesn’t know how to add negative  
numbers, then multiplying negative numbers will not be possible.  
Interventions  
forward.  
The information the learner needs in order to fill the gap and propel them  
Pathways  
A collection of learning objectives, assessments, and interventions.  
Ambiguity in how questions are asked, in how progress is evaluated, and in what the  
person already knows, that makes it difficult to have robust and reliable knowledge-  
centric approaches to solving problems. The more complex the knowledge, the more  
important it is to understand the relationship between ambiguity, knowledge, deci‐  
sions, and goals.  
166 | Chapter 10\: Spectrums of Success Figure 10-1. A knowledge framework is a sequence of knowledge objectives, assessments  
of knowledge, identification of knowledge gaps, and interventions to move learners  
toward success. The constructed continuum from start to success in a knowledge frame‐  
work can be called a pathway. The final state of completing all knowledge objectives can  
be called a purpose.  
# Knowledge Experiences and Pathways  
The benefit of this knowledge-centric approach is its versatility. Almost any goal,  
whether in education or business, can be broken down and understood through  
this lens. In the business world, goals often reference objectives and key results  
\(OKRs\). These can be combined with the principles of a knowledge framework,  
which emphasizes the creation and collection of data about essential assessments,  
gaps, and interventions.  
Knowledge frameworks can also be used for objectives for developing a data model,  
for a customer’s user journey, for an entire data team in delivering features, or for an  
entire organization. They can be represented in a document and represented as code.  
The example in Figure 10-2 represents a user experience flow across five states, or  
unique points in a continuum of the user’s journey.  
An Introduction to Knowledge Frameworks | 167 Figure 10-2. A series of objectives in a web application to get a user to give their personal  
information in a sign-up process.  
In each stage of the user flow, specific objectives guide the user to advance to the  
subsequent stage. Each experience is crafted to propel the user closer to the overall  
organizational goal. What sets knowledge experience design apart from traditional UX  
design is a simple set of rules. Though many top-notch design teams employ similar  
strategies, they—and the product and engineering teams they collaborate with—don’t  
necessarily apply an agreed-upon standard.  
The advantage of adopting a systematic approach to design through a knowledge  
framework is that it allows for a formalized, standardized set of guidelines that  
guarantees a consistent and effective user experience at every touchpoint in the flow\:  
KPIs  
The efficiency \(how fast\) and efficacy \(how much\) of the experience in progress‐  
ing the user toward the next state from the current. While simple analytics can  
capture the raw data, true power comes from correlating this data to individual  
user experiences. Advanced systems may even allow for the integration of per‐  
sonalized analytics as opposed to aggregate metrics. The key is taking the time to  
define what is being measured and to understand what different teams need to  
measure in order to optimize their efforts.  
System state  
Reflects the specific choices made by the system to guide the user’s experience.  
For instance, in an A/B test, the system state could refer to whether the user  
is presented with a green or blue call-to-action button. More advanced systems  
might dynamically present different experiences and options to users based on  
predictive engines for personalization.  
User state  
Captures the real-time status of the application based on the user’s most recent  
actions. For example, if a user clicks a button, this state will store a history of that  
action, allowing for more targeted future interactions.  
Objectives  
Clearly defining the goal of each state \(also referred to as a stage\) in the pathway  
that will move the user toward the next state, and the overarching goal of the  
pathway itself.  
168 | Chapter 10\: Spectrums of Success Success criteria  
Employ computational logic to clearly define the conditions \(true/false\) that  
determine whether a user has successfully transitioned from one state to another.  
In OKR language, success criteria can be considered a key result.  
Value  
The rationale of the benefit gained by the system when a user successfully com‐  
pletes a stage in the user flow in a particular order. This benefit is not uniform  
across all stages; some stages may offer higher value to the organization than  
others. To optimize the value created by the user experience flow, it’s crucial  
to identify and prioritize these high-value stages and their relationships. This  
involves assessing what specific objectives, actions, or data collection points are  
most valuable to your organizational goals so that you can focus on enhancing  
those parts of the user journey.  
# A Tool for Designing Knowledge Experiences  
Creating a knowledge experience is more than just designing a user interface; it’s  
about eliminating ambiguities and aligning your design, data, development, and  
product teams. The knowledge experience format offers a structured approach, mak‐  
ing the requirements transparent for every team involved. This, in turn, fosters  
effective collaboration.  
Benefits of this approach\:  
• Eliminates ambiguity in user flow definitions  
•  
• Facilitates alignment across various departments  
•  
• Streamlines communication of requirements to technical teams  
•  
The template for creating a knowledge experience consists of the following elements\:  
• Pathway name\: Name of the user flow  
•  
• Pathway objective\: The overall goal of the pathway  
•  
— State. The name of the state and the details it contains are as follows\:  
—  
— Objective\: What the user or system is expected to achieve  
—  
— Success criteria\: Conditions to be met for successful state transition  
—  
— KPIs\: Metrics to measure performance  
—  
— User state\: Data that captures the user’s current state  
—  
— System state\: Information about the system’s current configuration  
—  
— Value\: Importance of this state in the overall user flow  
—  
An Introduction to Knowledge Frameworks | 169 — State X—  
—  
—  
…  
— State Y—  
—  
—  
…  
Reviewing the simple example of a sign-up form in Figure 10-2, this is what our  
simple knowledge might look like. It can be written down in a bulleted list or spread‐  
sheet, making it easy for technical teams to convert to JSON and JSON Schema.  
It is often helpful to write objectives in the user story format com‐  
monly used in Agile, “as a user I can,” “I can,” or “user can,” etc. For  
a system action, terminology might be “system can,” “application  
can,” etc.  
• Pathway name\: Sign-up flow  
•  
• Pathway objective\: Minimize the speed to complete and maximize completion  
•  
rate.  
— State 1—  
— Objective\: A user can click the sign-up button.  
—  
— Success criteria\: Button has been clicked.  
—  
— User state\: User has gone to the sign-up page URL. Note\: this is usually  
—  
captured in data, but defining what will be captured as state is important.  
—  
— System state\: Design ID of which style was used \(green or blue button, for  
example\).  
— KPIs\:—  
— Efficiency  
—  
— Efficacy  
—  
— Anything else to measure…  
—  
—  
— Value\: Initiates journey…  
— State 2—  
—  
— Objective\: User can provide contact information.  
— Success criteria\: First name, last name, and email address filled.  
—  
—  
—  
…  
—  
— Value\: Contact information is critical, otherwise we don’t know what the  
other data belongs to.  
170 | Chapter 10\: Spectrums of Success From Structured Knowledge to Computational Knowledge  
Translating user experiences and flows into a structured knowledge format brings a  
multitude of advantages that transcend traditional design and data paradigms. One  
of the most transformative benefits is how it enables computational intelligence to  
flourish.  
Structuring knowledge experiences will enable your technical teams to implement  
them in JSON, paving the way for truly automated and adaptive user experiences.  
This digital foundation allows for real-time changes to be made in the user interface  
based on the current state, objectives, and variables defined in the framework.  
The structured nature of the framework sets the stage for cutting-edge analytics and  
offers these benefits\:  
Ability to measure efficiency and efficacy  
Well-defined KPIs are seamlessly integrated into the analytics systems, facilitating  
real-time adjustments for greater efficiency and efficacy.  
A/B testing capability  
The JSON structure streamlines the setup for A/B testing at various stages,  
making it easy to gather data on what interventions are most effective.  
Ease and compatibility  
The JSON format can be utilized between development, data, and data science  
teams, and offers a shared format for designing data, experiences, and business  
logic in a uniform manner.  
Personalized experiences  
Machine learning models can easily interpret the structured data to provide  
personalized user pathways and adapt in real time based on individual user  
behavior.  
Predictive analytics  
Advanced analytics tools can forecast user behavior or preferences, allowing you  
to predict and prepare for different user pathways.  
Optimization algorithms  
AI can identify the shortest or most efficient paths through the user experience,  
automatically updating the pathway in real time to guide users more effectively  
toward their objectives.  
As you’ll see in Chapter 15, the real magic happens when this structured knowl‐  
edge framework interacts with computational algorithms, enabling computational  
knowledge. This sets the stage for AI-driven analytics that not only interpret user  
behavior but also predict future actions, further streamlining and enhancing the user  
experience.  
An Introduction to Knowledge Frameworks | 171 Success Spectrums  
Progress bars and process maps do not tell us how “good” or “bad” something is  
or why; they merely show how something changes and progresses through available  
options. KPIs are specific, numerical metrics used to track vital measures such as  
revenue, profit margin, or customer satisfaction scores.  
Well-formulated success criteria is critical in unifying, and success spectrums define a  
continuum of least ideal to most ideal, along with the various changes in states across  
each known state. The key to success spectrums is to tie sequential states back to the  
following\:  
Financial value  
as best to worst.  
Can be a numeric or quantitative monetary amount, or a qualitative value, such  
KPIs  
Like assessments in a knowledge framework, KPIs are defined measures and  
metrics that answer the question “How do we track our progress?”  
Success metrics  
Simply measuring KPIs doesn’t tell you what successful KPIs are. Those thresh‐  
olds of success need to be defined. For example, a 90% on a test exam will enable  
you to pass, but a 50% will not.  
A well-crafted success spectrum visualization provides a strategic road map, illustrat‐  
ing how to enhance the value within a product, team, or organization. Think of it as  
a process map like the ones you learned about in Chapter 9, that displays the pathway  
from one state to another. That process map can even be represented as JSON.  
# Mapping Progress and Value  
To begin creating a success spectrum, let’s continue to build upon Figure 10-2, where  
we have a user sign-up page. Similar to a knowledge framework, we want to map the  
journey of moving toward goals and a purpose in a linear continuum. The sequence  
of the goals should be that the next most desirable state will build upon the previous  
state, similar to how the multiplication learning objective builds upon the additional  
learning objective.  
Figure 10-3 shows a hypothetical example of a company spending \$10 on getting  
someone who clicks on an ad to a landing page. The value of being on the landing  
page to the company is –\$10, but if a customer signs up, their average value is \$20,  
resulting in a \$10 profit.  
172 | Chapter 10\: Spectrums of Success Figure 10-3. A simple success spectrum visualization that shows the five states along a  
continuum, with each node representing a different goal to move the user toward signing  
up. On the x-axis, the states in this example are represented as different UX views as the  
user progresses from the landing page to completing the sign-up process. On the y-axis,  
the value increases from “Very low” to “Very high,” with any known financial value  
listed.  
Quantifying the financial value of intermediary goals can be challenging. In this  
example, we will represent value on the y-axis using terms ranging from “Very  
low” to “Very high.” Why? Certain steps, like collecting potential customer email  
addresses, have tangible but hard-to-measure value, common in marketing efforts.  
Collecting billing information adds even more value, although pinning a precise  
financial figure to these states might remain elusive.  
# Visualizing and Adding “Next Best States”  
Using our knowledge framework approach, moving a user to the next state in the  
website page flow, such as the contact info page, billing info page, and so on, is  
effectively the system’s objective, or goal. Defining objectives for projects in this way  
naturally aligns teams and has several benefits\:  
• The design team has a clearly defined objective to run UX testing against, such  
•  
as time to complete a page, user drop-offs, and questions they can ask about how  
to make the designs more efficiently achieve the objective—versus, for example,  
how to make it more beautiful.  
Success Spectrums | 173 • The software engineering team can define APIs that are optimized for the spe‐  
•  
cific objective, narrowing scope of maintainability to what is considered mission  
critical.  
• The data architecture team can create data models that are aligned with the  
•  
business goals.  
•  
• The data science team can create models to predict who is likely to complete or  
drop off \(and where\), and what interventions may be tested in unison with the  
design team to reduce incomplete form sign-ups and gain analytics for targeted  
marketing campaigns.  
• The marketing team can add incentives such as discounts for inviting friends.  
•  
Figure 10-4 shows how easy it is to add “next best state” to a success spectrum—sim‐  
ply place a node on what you think is better, then place your estimates on the relative  
value of each state. The financial values can be adjusted to match the corresponding  
state, and this approach invites questions connecting data to financial value. How  
valuable is it if the user invites friends?  
Figure 10-4. A success spectrum is incredibly flexible in adding new states, hypotheses,  
and visualizing questions that map financial value to desired state. The “Invite friends”  
node was added on the x-axis, and the “\$?” was added on the y-axis, identifying  
opportunities for a value-based analysis to understand what success could look like.  
# Removing Blind Spots  
An effective way to remove blind spots is to have a simple map that explicitly  
shows the exact data needed to move from one state to another and reveals what  
174 | Chapter 10\: Spectrums of Success information is known to be unknown. This process begins to transition unknown  
unknowns into known unknowns.  
For example, in Figure 10-5, the “Contact info,” “Billing info,” and “Terms and condi‐  
tions” states are all mapped to a simple table stating what data is required to be  
collected from a user to move to the next state. Some might be optional, such as  
“Phone number.”  
Figure 10-5. The act of designing success spectrums supports removing blind spots and a  
robust exploit strategy. Each data field is explicit and can be defined with JSON Schema  
to minimize ambiguity and identify knowledge gaps. In this example, we can see what  
data we are guaranteed to have collected when a user is in the “Billing info” state, and  
what the value is to the organization of the user being in that state.  
The goal for the data champion is to be able to show a sequence of what information  
is a priority to collect and how valuable different types of data are to collect. In  
Success Spectrums | 175 Figure 10-5, for example, having a user submit their billing information means they  
are able to make transactions, and therefore that is a more valuable state.  
Moreover, the financial value tied to inviting friends is marked as “Very high,” accom‐  
panied by a question mark symbol to indicate its “known unknown” status. This  
method simplifies the process of aligning team members and linking data to business  
value. By establishing a tiered and sequential road map in a mutually agreed upon  
document, you can mitigate risks of blind spots in business logic, understanding, and  
implementation.  
# Embracing Multiperspective Design and Road Maps  
In today’s complex and user-centric digital landscape, successful product design and  
development require a profound shift in perspective. Instead of solely focusing on  
what the organization needs and values, it’s crucial to adopt a holistic approach that  
considers the user’s perspective as well.  
Using our light bulb and laser analogy, imagine the user’s perspective as light from a  
diffuse light bulb. To create a laser, we need to focus the user’s perspective and tightly  
synchronize it. In the example shown in Figure 10-5, the focus is on advancing users  
to the next desired state based on what the organization deems valuable.  
Let’s align it with the user’s needs and aspirations, using the same success spectrum  
format. Instead of asking how to move users forward from the company’s perspective  
and benefit, let’s inquire about what users need from the experience the company  
is giving them, so that they uncover more value as they progress. This approach  
can drastically improve your user experience and the quality of your app, and  
also translate to directly supporting goal completion from the company perspective.  
Understanding the needs and wants of the user is a critical role of the design team,  
and using this technique is how you can integrate them into the unifying process.  
For example, users might seek immediate benefits of sharing their billing information  
or have concerns about data privacy and security. By understanding the user’s journey  
and mapping it within the success spectrum framework, you’re better positioned  
to ask the right questions, reducing ambiguity and knowledge gaps. This method  
integrates design thinking into your transformation initiatives, ensuring a human-  
centered approach.  
Creating a success spectrum gives you a road map with various states, outlining  
what’s required for each state from multiple perspectives \(system and user, for  
instance\). It equips other teams within your organizational network with richer  
information for their own project planning.  
Let’s synchronize another beam of light to our laser, aligning a technical team to  
our success spectrum. Instead of data collected, as shown in Figure 10-5, let’s align  
176 | Chapter 10\: Spectrums of Success a technical team to it with a feature status table for one of the states, as shown in  
Figure 10-6.  
Figure 10-6. A success spectrum is effective for creating flowcharts tracking a user’s  
journey and can be used for multiple perspectives, supporting developing technical  
requirements, prioritizing features, creating product road maps, and tracking progress.  
Measuring progress aligned to a success spectrum is useful in getting product man‐  
agement, design, and software engineering on the same page as the business team  
regarding what each state is and reducing ambiguity, knowledge gaps, and blind spots  
when planning and prioritizing their road map. The following status indicators are  
simple and common ways to track progress, as shown in Figure 10-6\:  
Not yet started  
The feature is in the planning phase but has not been actively worked on by  
the development team. It may involve initial discussions, scoping, and gathering  
requirements.  
Success Spectrums | 177 In progress  
This stage means that the feature is actively being worked on by the development  
team. Developers are implementing the required code, design, or other elements  
to bring the feature to completion.  
Complete  
All development work is finished and the feature is ready for testing and quality  
assurance. It may also mean that the feature has been deployed to a staging  
environment or is awaiting deployment to the production environment.  
Blocked  
The feature cannot progress due to a specific obstacle or issue. It may be waiting  
for additional resources, dependencies, or resolution of a problem before it can  
move forward. The development team is unable to make further progress until  
the blocking issue is resolved.  
Unifying is meant to get the business, data, and code teams  
together, and although explicitly not mentioned in the title of  
this book, design and UX teams are also incredibly important to  
include in the unifying conversation. It is recommended that the  
business teams, such as project and product managers, also include  
the perspectives of designers.  
# Defining KPIs for Success Measures and Metrics \(Assessments\)  
In addition to mapping the continuum of states, it is also important to define KPIs  
\(how success is measured\) and what the KPI metrics need to be to determine if a  
measure has achieved the success criteria, as shown in Figure 10-7. This exercise  
can raise important questions and opportunities for hypotheses and experimentation,  
such as Why are people dropping off at the Welcome page?  
In Figure 10-7, the terms Objective, Key result, KPI, and Status are shown; collectively,  
these terms are often called OKRs. Here is a deeper dive into their definitions\:  
Objective  
A clear, qualitative goal set for a specific time frame that is designed to move  
you closer to achieving your larger mission or vision. It serves as a directional  
guidepost for what your team aims to accomplish.  
Key result  
Specific, measurable definitions of success. They’re quantitative measures that  
indicate whether an objective has been accomplished.  
KPI  
Metrics used to quantify and evaluate how close or far one is from success.  
178 | Chapter 10\: Spectrums of Success Status  
Whether or not success was achieved.  
Figure 10-7. You can create a simple spreadsheet that is aligned to your success spectrum  
and minimizes ambiguity and knowledge gaps for teams so that everyone can see how  
success and progress are measured.  
In our example, each state on the customer journey, from the Welcome page state to  
the Invite friends state, can have its own set of success metrics, all of which can serve  
as excellent diagnostic tools to support continuous optimization and exploit-phase  
problem solving. If success metrics are not yet defined and there is ambiguity and  
knowledge gaps around what success looks like, then the exercise of creating your  
success spectrum aids in the explore phase of problem solving.  
# Using Demons and Magical Thinking for Innovation  
Another benefit of success spectrum visualizations is that they can tie alignment  
across teams, objectives, KPIs, and financial impact. An ideal success spectrum visu‐  
alization starts with the current state, then is mapped to the next best state until an  
ideal, almost magical, state is reached. The mental tool for this type of thinking is the  
use of “demons” in thought experiments.  
In the world of science, a demon is a hypothetical entity used to explore complex  
principles or challenge existing knowledge. Here, the term is not about the superna‐  
tural, but about sparking creativity and breaking through the limitations of what  
currently exists. In our unifying framework, we refer to these types of thought exerci‐  
ses as imagining magical possibilities when interviewing stakeholders. If demons are  
not appropriate for your audience, “rainbows and unicorns” are perfectly acceptable.  
Success Spectrums | 179 Demons in Practice  
James Clerk Maxwell, a 19th-century Scottish physicist and mathematician, stands  
among the pantheon of science luminaries such as Isaac Newton and Albert Einstein.  
He revolutionized the study of electromagnetism, unifying electricity, magnetism,  
and light under a single theoretical framework.  
Among Maxwell’s myriad contributions, the thought experiment known as Maxwell’s  
demon stands out for its audacity and creativity. In this mental exercise, Maxwell  
envisioned a tiny, hypothetical creature \(the “demon”\) that could selectively allow  
faster or slower gas molecules to pass through a partitioned chamber, separating  
hot molecules from cold without any expenditure of energy. This seemingly benign  
activity posed a direct challenge to the second law of thermodynamics, which states  
that the entropy, or disorder, of an isolated system can only increase. Maxwell used  
this demon not to refute the law, but to probe its boundaries and implications. While  
the demon itself is a fictional construct, the discussions it sparked revolutionized  
thermodynamics and deepened our understanding of the microscopic nature of  
matter and energy.  
# Faster Horses  
You may have heard the phrase “If I had asked my customers what they wanted, they  
would have said a faster horse,” which is often \(and potentially mistakenly\) attributed  
to Henry Ford. In unifying, we recommend listening with obsessive amounts of care  
and detail to customer problems, but not so much to the solutions they suggest.  
The reason is that the solutions they recommend are within the constraints of what  
they believe are possible, which places limits on the art of the possible from technical,  
design, and business perspectives. Additionally, customers are not privy to your  
holistic perspective on the priorities, the needs of other teams, and how changes  
somewhere else will impact the choices and opportunities for innovation.  
Here is a flow you can follow that ties together the various tools you’ve learned\:  
1.  
1\. Use the concept compass to measure misalignment of concepts between teams  
and across language, data, and operational planes.  
2.  
2\. Use the CLEAN data governance framework to connect the dots of how concepts  
connect across the organization to map business logic, collaboration, knowledge,  
activities, and to understand any requirements.  
3.  
3\. Use process maps and success spectrums to capture current state.  
180 | Chapter 10\: Spectrums of Success 4.  
4\. Do the imagining magical possibilities exercises \(see the next section\) with your  
stakeholders.  
5.  
5\. Redo the CLEAN data governance process and then evaluate which possible  
states accelerate and align teams, concepts, and operations.  
6.  
6\. Map those possible states back onto success spectrums and get feedback from  
your clients, internal or external. Those possible future states will help your  
organization decide which success spectrum aligns with leadership goals and  
available resources.  
# Imagining Magical Possibilities  
When creating an innovation success spectrum visualization, imagining demons can  
be a transformative exercise that unlocks innovation capabilities.  
Consider the following approach to create your own demon thought experiments\:  
1.  
1\. Identify a problem. This is a clear starting point that focuses the mind on a  
particular challenge or question.  
2.  
2\. Define the rules your demon breaks and how your demon breaks them. This step  
encourages imaginative thinking about how the demon operates, helping to craft  
a unique and engaging scenario.  
3.  
3\. What contradictions or insights does it reveal? This step guides the thinker to  
analyze the implications of the demon’s actions, fostering deeper understanding.  
4.  
4\. What questions does it raise? This encourages further exploration and considera‐  
tion of new ideas or challenges.  
5.  
5\. How might you test it? Adding a practical element, this step prompts the thinker  
to consider how the thought experiment might be explored or validated in  
real-world terms.  
Imagine you have two marketing analytics teams\: one to predict  
advertising targets to juice up subscriptions to your service, and  
another marketing team to predict who is at risk of quitting and  
determine how to convince customers to stay.  
An ideal demon behavior would be that the demon could perfectly  
predict perfect advertising targets least likely to quit and most  
likely to join on the smallest advertising budget. Thinking from  
the perspective of the demon ignites valuable questions like What  
would it take to achieve something like this?  
Success Spectrums | 181 Problem Landscapes\: Quantifying Pain Points Threatening Value  
One benefit of the success spectrum visualization is that it naturally enables for visu‐  
alizing problems, their connectivity to objectives, and their financial value. This can  
help you visually determine which problems to prioritize, as shown in Figure 10-8.  
Figure 10-8. The higher a problem’s pain level, the more negative value it creates, as  
shown on the y-axis. The x-axis can be used to represent different types of problems and  
to aggregate the pain level related to objectives and the negative impact and risk they  
create.  
In the realm of modern organizational dynamics, it is often the unseen and unquanti‐  
fied elements that lead to failure or inefficiency. Problem landscapes offer an elegant  
inversion of the success spectrum, laying bare the hidden complexities and intercon‐  
nections of different problems and their impact on objectives and financial value.  
Like a topographical map reveals the contours of a terrain, the problem landscape  
graphically represents the “terrain” of challenges faced by the organization.  
182 | Chapter 10\: Spectrums of Success The distinctiveness of problem landscapes lies in their ability to not only illustrate  
problems but also their interconnections, alignment with organizational goals, and  
the magnitude of their negative impact, leading you to a deeper understanding of  
where efforts should be focused to mitigate these problems. Connecting problem  
landscapes with success spectrums harmonizes an organization’s approach to both  
triumphs and tribulations, creating an integrated view that caters to technical and  
nontechnical teams alike and ensuring that both problems and successes are framed  
in a language and perspective that resonates with all.  
Success spectrums and problem landscapes represent two sides of the same coin, pro‐  
viding a comprehensive view of an organization’s growth and challenges. Together,  
they create a harmonious alignment between all stakeholders, transforming ambigu‐  
ity into clarity and fostering a collaborative culture. This approach goes beyond con‐  
ventional problem-solving methodologies by forming an interconnected framework  
that validates concepts, identifies and eliminates misalignments, and places a keen  
focus on data-centric innovation. Moreover, its adaptability allows it to be applied  
in various contexts such as combining network perspectives, thus unlocking the  
potential of data science to create innovation strategies and reduce redundancies  
and inefficiencies. It is an embodiment of a unified strategy that transcends barriers,  
catalyzes growth, and paves the way for a more coherent and efficient organization.  
# Nudges\: The Right Information at the Right Time  
Imagine visiting a website and facing the prospect of scrolling through 10 pages of  
text before clicking a button. You’d likely hesitate, right? But place the Terms and  
Conditions at the end and you’ll likely accept without a second thought. The simple  
yet powerful concept of nudging users toward specific actions stems from behavioral  
analytics. It’s not just a tool for web developers, but a universal principle that can  
align users’ behavior with organizational goals \(see Figure 10-9\).  
In our data-driven world, nudges are more than mere suggestions; they’re carefully  
crafted springs, designed to propel employees, users, and leaders toward well-defined  
success spectrums. By leveraging data science and personalization, we can predict  
the exact content that will aid each individual at the right time. For instance, an  
employee grappling with complex challenges may benefit from precise knowledge  
presented at the opportune moment. This aligns with our unifying systems, where  
synchronization and alignment are key.  
Nudges\: The Right Information at the Right Time | 183 Figure 10-9. The user starts at the Welcome page. Depending on the information presen‐  
ted at each state of the success spectrum, the user might be more or less likely to move  
to the next stage. The goal of thinking of information in this way is to discover the  
information that most effectively accelerates the user of your unifying systems to the  
most valuable state.  
Information is a powerful force and understanding how to harness  
it for organizational success becomes vital. Technology not only  
makes this possible but allows for an unprecedented level of accu‐  
racy and customization. This idea is central to the methodology  
outlined in our book.  
# A Real-Life Problem Landscape and Demon Example That  
# Led to a Unified Data Product Model  
The concept of demons in thought exercises, magical thinking, and problem land‐  
scapes isn’t merely a philosophical idea; it has practical applications and was used  
to design the data product specification used in this book. The four facets of data  
products, as introduced in Chapter 4, can be traced back to these thought exercises.  
# Understanding the Problem Landscape  
Through years of diligent research, interviews, and analysis of best practices and  
failures, a vivid problem landscape emerged. It became apparent that the professio‐  
nals at the front line of data—business intelligence analysts, data scientists, software  
developers, and data visualization designers—were drowning in inefficiencies and  
confusion.  
184 | Chapter 10\: Spectrums of Success Imagine the torment of sifting through data swamps, encountering .csv files with  
hundreds of ambiguous columns and no clear definition of their meaning. The  
professionals were trapped in an agonizing process of detective work, attempting to  
uncover why the data set was created, the significance of each column, and the origins  
of it all.  
# The Staggering Impact  
This scenario is not hypothetical. In UX research interviews with data practitioners  
at large enterprise companies, it was quite ordinary, wreaking havoc on productivity  
with a destructive impact that was nothing short of staggering. The time wasted,  
the risk created, and the disillusionment and overwhelm among data teams led to  
insights being lost, replaced by help desk tickets. Root causes were left unaddressed.  
Desperate for quick fixes, executives resorted to purchasing expensive enterprise  
software that only added complexity. Such solutions rarely hit the mark because they  
fail to address the simple yet vital need for translating business requirements into  
clearly defined and universally agreed-upon documentation.  
# A Meeting of Minds and the Birth of a Solution  
It was against this backdrop that the authors of this book first met, united by a shared  
recognition of the problem and a vision for a solution. We contemplated whether  
we could create a specification that would guarantee that all essential information  
was available and at hand, making the process of working with data seamless and  
efficient.  
Now that you’ve learned about success spectrums, let’s revisit the data products idea  
you learned about in Chapter 4, using the success spectrum approach, as shown in  
Figure 10-10.  
The scientific thought experiment tradition of demons as a way to imagine a magi‐  
cally perfect way to control a problem led to a tactical and tangible tool for harmoniz‐  
ing datasets to improve data management requiring no technology to implement. The  
solution was a data product specification that would include all necessary metadata  
with the data itself.  
This integration is both a theoretical alignment and a practical method that bridges  
the knowledge gap, eliminates ambiguity, and fosters synchronicity. It proves that  
unifying can create simple best practices and pave the way for a more coherent and  
efficient organization.  
A Real-Life Problem Landscape and Demon Example That Led to a Unified Data Product Model | 185 The authors of this book are working on an open source specifica‐  
tion to represent all four facets of a data product in one standalone  
JSON document. This specification is called JSON Unify.  
Figure 10-10. The origin of the data products specification shown in this book started  
with a success spectrum. Data professionals expressed what they wished they had—  
which are shown in the table as “I can”—in the Agile user story format or expressed their  
biggest pain points—shown in the table as “I can’t” in a problem statement format. If  
the average data team member salary is \$150K, and 50% of their time is wasted due to  
these problems, then a hypothetical cost for a team of 10 means that implementing data  
products can save the organization \$7.5M.  
186 | Chapter 10\: Spectrums of Success Beyond Data Products\: Data Product Management  
The success spectrum approach enables you to zoom in and zoom out to set transfor‐  
mation goals at various levels of granularity. It is useful in minimizing ambiguity  
and knowledge gaps when designing end-to-end and 360° systems, which require  
thinking about interconnected and interdependent data. For example, Figure 10-11 is  
a high-level success spectrum, including an objective of defining success metrics. This  
is where the CLEAN data governance model is helpful; since you have already used  
that in Chapter 7, you can add their perspectives to any spectrums you wish to design  
and test.  
Figure 10-11. An example of a data champion mapping end-to-end considerations for  
having successful data product management capability.  
Every organization is different. That being said, the following are several categories  
of data product management that you might want to consider for testing the success  
spectrum approach\:  
Data foundation and integrity  
Data sources\: identifying available data and what needs to be collected  
Quality control\: ensuring data accuracy and consistency  
Security\: protecting data from unauthorized access  
Testing\: validating the entire data process  
Alignment, language, and metrics  
Business logic translation\: aligning business goals with technical requirements  
Semantics\: establishing common terminology  
KPI setting\: identifying key performance indicators  
OKR metrics\: aligning efforts with organizational goals  
Governance, ethics, and compliance  
Governance\: implementing data management policies \(linked to CLEAN  
governance\)  
Ethics review\: aligning data handling with ethical principles  
Beyond Data Products\: Data Product Management | 187 Interoperability and accessibility  
APIs\: facilitating interaction between systems  
Query management\: managing data access and retrieval  
Data utilization and visualization  
Data products\: creating and managing products leveraging the data  
Data visualizations\: translating data into visual formats  
# The Circular Nature of Unifying  
Once you have gotten alignment in the accelerate phase, it is important to go back  
to the assess phase and start over, harmonizing concepts, synchronizing teams, and  
continually learning and refining concepts, decision points, goals, and KPIs. For a  
review of cycles in unifying, see Figure P-2 to compare the explore and exploit phases  
of problem solving, and Chapter 4 for a review of the assess phase.  
The more cycles you do, the more alignment you will achieve at all levels and across  
business functions. Visualize a bicycle with an imperfect front wheel, slightly warped  
and bent in places, attempting to navigate a road filled with potholes and unexpected  
twists. Riding this bicycle is not only a struggle but an exercise in frustration, ineffi‐  
ciency, and exhaustion, where the rider’s energy is wasted in combating misalignment  
rather than propelling forward.  
The imperfect wheel metaphor vividly represents the complications that arise when  
collaboration is weakened by misalignment. Just as a misaligned wheel demands  
more effort and wastes energy, so does misalignment in business strategy and execu‐  
tion. It consumes resources, dilutes focus, and restricts progress.  
Now, consider misalignment within a business. As misalignment is uncovered, some  
issues, such as defining revenue in a dataset, might be simple to solve. But what  
happens when deeper, more entrenched problems are discovered? Imagine an entire  
database team working for years on a certain approach only to find that their  
direction clashes with the data science team. Suddenly, the challenge becomes more  
profound and a major rift needs to be addressed. Conquering that challenge is akin  
to repairing a warped wheel; the rider can accelerate more efficiently. Data champions  
enable organizations to accelerate by finding and repairing the misalignment causing  
inefficiencies across business, data, and code.  
188 | Chapter 10\: Spectrums of Success Summary  
In this chapter, you learned that to accelerate innovation, you need to recognize the  
relationship between knowledge gaps and ambiguity, along with how they can impact  
concepts, goal setting, and decision making.  
You delved into success spectrum visualizations, which a clear picture of the path  
from the current state to the desired outcome. By tying objectives, KPIs, and financial  
impacts together, you gain robust framework from which to foster collaboration and  
strategic planning.  
You saw how the concept of demons adds a new layer to creative thinking and can  
help you unlock innovation and break conventional limitations.  
The “faster horses” anecdote illustrates the importance of understanding customer  
problems instead of accepting the solutions they suggest, emphasizing a deeper level  
of alignment and innovation. The Concept Compass and CLEAN data governance  
principles enable mapping and aligning teams, concepts, and operations—a more  
visionary approach to problem solving.  
Finally, we showed you how alignment, innovation, financial insights, and visuali‐  
zations can be skillfully integrated, opening new opportunities for collaboration,  
breaking down silos, and leveraging data to make informed decisions.  
Chapters 11–14 are focused on the technical parts of implementa‐  
tion. If your main interest is in the nontechnical and theoretical  
aspects of the unifying methodology, you may want to skip to  
Chapter 15.  
Summary | 189 CHAPTER 11  
# Deploying a JSON Schema Registry  
It’s not about ideas. It’s about making ideas happen.  
—Scott Belsky, author, entrepreneur and investor  
This book has proposed a new methodology for thinking about and working with  
data. Data champions have applied this methodology to their organization using  
spreadsheets, process maps, whiteboards, diagrams, and more. After countless meet‐  
ings, they felt everybody was aligned toward the bright future ahead. However, they  
could only go so far by writing documents and guidelines. Eventually, documents  
were ignored and misalignment found its way in again. As it turns out, reaching  
alignment only solves half of the problem. You also need a strategy to stay there.  
To maintain alignment, the outcome of the unifying process has to be encoded  
and connected into the software systems that store and process your data, making  
divergence quickly detectable and correctable at its root. This is where a schema  
registry comes in.  
A schema registry is a centralized collection of schemas meant to serve as the single  
source of truth for three out of the four facets of data introduced in Chapter 4\:  
context, structure, and meaning.  
By connecting all of your software systems to your schema registry, you can  
ensure data integrity through schema validation and, when needed, extract semantics  
through schema annotations, as covered in Chapter 8.  
# Schemas Over HTTP  
A schema registry—a collection of schemas—can be made available in many forms.  
For example, some schema writers publish them to package managers such as  
npm in Node.js or Python’s PyPI, allowing consumers to access them through a  
191 programmatic interface. Others keep their schemas on version control and embed  
them with the microservices they deploy. Instead, the authors of this book recom‐  
mend hosting schemas over the Hypertext Transfer Protocol \(HTTP\), the standard  
internet protocol that serves websites and APIs. This approach is extremely flexible;  
JSON Schema implementations may initially fetch the schemas over the internet and  
locally cache them, or developers may download them during a build phase and  
redistribute them for future use.  
In this chapter, you will learn how to deploy a basic schema registry over the HTTP  
protocol using GitHub and Cloudflare Pages, upload and retrieve some sample sche‐  
mas, and configure a custom domain. You should be able to follow along even if it’s  
your first time making use of these services.  
# Step 1\: Setting Up a GitHub Repository  
As with any other software in your organization, you should keep your schemas  
under a version control system such as Git. If you haven’t yet, create a free account on  
GitHub, the most popular Git provider around.  
# Creating a GitHub Repository  
Once you are in, create a new repository to host your schema files. In Figure 11-1, we  
create a public repository called “unify101.”  
Figure 11-1. To create a GitHub repository, we clicked on the plus sign at the top right of  
the screen and then on the “New repository” option.  
192 | Chapter 11\: Deploying a JSON Schema Registry Uploading Your First Schema  
A GitHub repository will allow you to organize your schemas into files and directo‐  
ries of your choosing. We suggest the following file system convention\:  
• Place all your schemas under a schemas subdirectory. That way, you can add  
•  
other files to your GitHub repository, like a README file, without polluting  
your schemas.  
•  
• Inside the “schemas” directory, create one directory per project. This allows you  
to keep your schemas grouped in a way that makes sense in your organization.  
For example, you may have a project called “genomics.”  
•  
• Inside a project directory, create one directory per schema for versioning pur‐  
poses.  
• Inside a schema directory, you will have one JSON file per version. For example\:  
•  
v1.json, v2.json, etc. We will come back to the topic of schema versioning later in  
the chapter.  
Again, this is just a suggested file structure, and you are welcome to adopt a different  
one that better accommodates your needs. As rules of thumb, we recommend that  
your file structure keeps schemas separate from other types of files and that schemas  
are organized into domain or project directories.  
Let’s upload the schema we created at the end of Chapter 5. This schema describes a  
product entry for the fictitious Intelligence.AI coffee shop. Following the file system  
convention explained above, our project name will be intelligence-ai and the  
schema name will be product-entry. Therefore, the full path to its first version will  
be schemas/intelligence-ai/product-entry/v1.json.  
On GitHub, click the “Create a new file” link, type in the right path above the  
editor and copy-paste the schema from Chapter 5, adding an \$id property that  
equals https\://schemas.unify101.com/intelligence-ai/product-entry/v1.json, as shown in  
Figure 11-2.  
When you are ready, click the “Commit changes” button. GitHub will ask you for  
a commit message. We typed “Create Intelligence.AI product entry v1”, as shown in  
Figure 11-3.  
Step 1\: Setting Up a GitHub Repository | 193 Figure 11-2. GitHub allows you to easily create new files using the web interface. For  
more power, you might be interested in checking out the GitHub Desktop application.  
Figure 11-3. Every change \(commit\) on a Git repository is associated with a commit  
message and optional description. When writing commit messages, it is considered best  
practice to use the present tense.  
194 | Chapter 11\: Deploying a JSON Schema Registry If you are new to Git and want to learn more, we recommend the  
excellent book Learning Git by Anna Skoulikari \(O’Reilly, 2023\).  
You should now be able to see your brand new schema file in GitHub’s file explorer, as  
shown in Figure 11-4. Make sure the path is right before continuing.  
Figure 11-4. An example of the Intelligence.AI product entry schema on GitHub’s file  
explorer.  
# Step 2\: Deploying to Cloudflare Pages  
Cloudflare Pages is an excellent, free HTTP static hosting platform. In comparison to  
competitors such as GitHub Pages, Cloudflare Pages allows you to set custom HTTP  
headers, which we will use for JSON Schema compliance. You can register for free.  
# Creating a New Cloudflare Pages Website Project  
Once you are registered on Cloudflare, you can create a new website project through  
the left sidebar by clicking the Workers & Pages link. Once there, click the Pages tab  
and the “Connect to Git” blue button, as shown in Figure 11-5.  
Step 2\: Deploying to Cloudflare Pages | 195 Figure 11-5. Cloudflare Pages allows you to conveniently deploy from an existing GitHub  
repository. That way, your registry will be automatically updated any time you make  
changes to your GitHub repository.  
If it is your first time deploying to Cloudflare Pages, you will be presented with a  
screen to authenticate Cloudflare against your version control platform of choice.  
Click the GitHub tab and click Connect GitHub, as shown in Figure 11-6.  
Figure 11-6. Cloudflare Pages needs access to your GitHub account to detect changes to  
your repositories for the purpose of triggering deployments.  
196 | Chapter 11\: Deploying a JSON Schema Registry GitHub provides fine-grained access control to third-party services like Cloudflare.  
You can give Cloudflare Pages access to selected GitHub organizations or specific  
GitHub repositories. For security reasons, we recommend only authenticating Cloud‐  
flare Pages against your schema registry repository, as shown in Figure 11-7.  
Figure 11-7. We will only authorize Cloudflare Pages to access the “unify101” GitHub  
repository we created earlier in this chapter by selecting “Only select repositories” and  
choosing our repository from the drop-down menu.  
Step 2\: Deploying to Cloudflare Pages | 197 Once you are done associating Cloudflare Pages with your GitHub account, select  
your GitHub repository of choice on the Cloudflare Pages wizard and click “Begin  
setup,” as shown in Figure 11-8.  
Figure 11-8. After the authorization step, you allowed Cloudflare Pages to see your  
GitHub repositories. Now it’s time to actually select the one you want to deploy. In this  
case, it’s “unify101.”  
Next, you will be presented with a form to configure your project deployment, as  
shown in Figure 11-9. Create a project name of your choice, select “main” as the  
“Production branch,” avoid setting up any “Framework preset” or “Build command,”  
and set “schemas” as the “Build output directory.” This corresponds to the schemas  
subdirectory in the GitHub repository.  
Once you click “Save and deploy,” Cloudflare Pages will start deploying your registry  
to a preproduction domain of their choice. In our case, as shown in Figure 11-10,  
Cloudflare Pages deployed the “main” branch to https\://c5b5018a.unify101.pages.dev.  
Visiting the URL directly will result in an invalid request, as we are not serving  
a landing page yet \(we will get to that later!\) However, we can already fetch our  
example schema using its full URL path. We instructed Cloudflare Pages to deploy  
the schemas directory in our GitHub repository, so in our case, the full URL to our  
example schema is https\://c5b5018a.unify101.pages.dev/intelligence-ai/product-entry/  
v1.json.  
198 | Chapter 11\: Deploying a JSON Schema Registry Figure 11-9. Cloudflare Pages allows for extensive deployment configuration. In this  
case, we only require a basic deployment setup. Check out their official documentation to  
learn more.  
Figure 11-10. Your recent deployment should pop up on the Cloudflare Pages dashboard.  
There, you will be able to see the unique URL Cloudflare created for this specific  
deployment.  
Step 2\: Deploying to Cloudflare Pages | 199 Let’s request the previous Cloudflare Pages URL using Postman, a powerful free  
HTTP client application, as shown in Figure 11-11.  
Figure 11-11. Postman is a powerful tool for playing with HTTP applications like our  
schema registry. If you paste the schema URL into the input box, select GET as the HTTP  
method of choice, and hit the Send button. You will see the example schema show up in  
the bottom half of the screen.  
# Step 3\: Configuring HTTP Headers  
While this section might not make a lot of sense if you are not familiar with HTTP,  
you should be able to follow along. If this is your first time working with HTTP,  
we recommend consulting HTTP\: The Definitive Guide by David Gourley \(O’Reilly,  
2002\) to learn more.  
The JSON Schema specification describes a set of interoperability recommendations  
for hosting schemas over HTTP; schemas should be associated with the applica  
tion/schema+json media type, and the response may associate the instance with its  
meta-schema using the Link HTTP header through the describedby relationship.  
We strongly suggest following these recommendations when  
deploying schemas over HTTP, as some strict JSON Schema imple‐  
mentations may otherwise require additional configuration. For  
example, at the time of this writing, the popular Hyperjump valida‐  
tor we used in Chapter 8 will by default refuse to load schemas over  
HTTP that have an incorrect media type.  
200 | Chapter 11\: Deploying a JSON Schema Registry Inspecting the Current HTTP Headers  
Currently, we are not respecting either of the recommendations from the JSON  
Schema specification by using Postman to display the HTTP response headers we get  
from requesting our example schema, as shown in Figure 11-12. The Content-Type  
header is set to application/json instead of application/schema+json, and the  
Link header is not present at all.  
Figure 11-12. After a successful request, Postman allows you to explore response headers  
by clicking the Headers tab in the header of the bottom pane.  
# Declaring Custom HTTP Headers on Cloudflare Pages  
Luckily, Cloudflare Pages makes it trivial for us to specify custom HTTP headers.  
To do so, go back to GitHub, click “Add file,” and from the drop-down menu, select  
“Create new file,” as shown in Figure 11-13.  
Figure 11-13. In Cloudflare Pages, custom HTTP headers can be set through a config‐  
uration file that you can commit to your GitHub repository. Remember that after  
connecting your GitHub repository to Cloudflare Pages, any change you apply in GitHub  
will trigger a Cloudflare Pages redeployment.  
For Cloudflare Pages to recognize it, this new file must be called \_headers and it must  
live directly inside the schemas top-level directory, as shown in Figure 11-14.  
Step 3\: Configuring HTTP Headers | 201 Figure 11-14. Make sure you type in the right file name when creating the \_headers file  
on GitHub and that you place it into the right directory. Otherwise, Cloudflare Pages  
will not be able to find it.  
This file declares a set of file-matching rules and HTTP headers that will be applied to  
them. In our case, it looks like this\:  
/\*.json  
Content-Type\: application/schema+json  
Link\: \<https\://json-schema.org/draft/2020-12/schema\>; rel="describedby"  
This creates a rule that matches any JSON file , sets the Content-Type header to  
application/schema+json , and sets the Link header to express that every schema  
definition in this repository is based on the JSON Schema official 2020-12 dialect .  
If you plan to have schemas following other JSON Schema dialects, such as ones  
using custom vocabularies of your own \(which will be explored in Chapter 12\), make  
sure to update this configuration file accordingly.  
# Checking the Results  
As soon as you commit your changes, Cloudflare Pages will detect the new file and  
trigger a new deployment. You can check that Cloudflare Pages was able to find your  
\_headers configuration file by taking a look at the Headers tab. In there, Cloudflare  
Pages will echo back the custom headers it will apply, as you can see in Figure 11-15.  
As before, Cloudflare Pages will deploy the new version of the registry to  
a preproduction domain of their choice. In our case, this is now https\://  
97cd1989.unify101.pages.dev. We can confirm our custom HTTP headers were  
applied by requesting our example schema from the new URL using Postman, as  
shown in Figure 11-16, and inspecting the Headers tab as we did in the previous  
section.  
202 | Chapter 11\: Deploying a JSON Schema Registry Figure 11-15. Cloudflare Pages will report back the custom headers it detected. If you  
don’t see this, then you either mistyped the \_headers filename or placed it in the  
incorrect directory.  
Figure 11-16. After our recent changes, our registry serves schemas following the HTTP  
recommendations of the JSON Schema specification.  
Step 3\: Configuring HTTP Headers | 203 Step 4\: Creating a Landing Page  
At this point, our schema registry is usable, as long as clients know what schemas it  
contains and what their URLs are. To improve user experience, let’s create a simple  
landing page that lists all the schemas currently present in the registry.  
# Adding an HTML Entry Point  
On GitHub, create a new file called index.html, place it inside the schemas top-level  
directory, and make its content as follows\:  
\<!DOCTYPE html\>  
\<html lang="en"\>  
\<head\>  
\<meta charset="UTF-8"\>  
\<meta name="viewport" content="width=device-width, initial-scale=1.0"\>  
\<title\>My First Schema Registry\</title\>  
\<link rel="stylesheet" href="https\://cdn.simplecss.org/simple.min.css"\>  
\</head\>  
\<body\>  
\<header\>  
\<h1\>My First Schema Registry\</h1\>  
\<p\>Published to Cloudflare Pages\</p\>  
\</header\>  
\<main\>  
\<table style="width\: 100%;"\>  
\<thead\>  
\<tr\>  
\<th\>Description\</th\>  
\<th\>Version\</th\>  
\<th\>Link\</th\>  
\</tr\>  
\</thead\>  
\<tbody\>  
\<tr\>  
\<td\>An Intelligence.AI product entry\</td\>  
\<td\>v1\</td\>  
\<td\>  
\<a href="intelligence-ai/product-entry/v1.json"\>/intelligence-ai/  
product-entry/v1.json\</a\>  
\</td\>  
\</tr\>  
\</tbody\>  
\</table\>  
\</main\>  
\</body\>  
\</html\>  
204 | Chapter 11\: Deploying a JSON Schema Registry This HTML page will be presented when users navigate to the top-level URL of the  
registry \(Figure 11-17\). It presents a table with a hardcoded list of schemas and uses  
the SimpleCSS framework to add some basic styling.  
Figure 11-17. As before, when making use of the GitHub UI, double check your filename  
and commit your changes.  
Once the HTML file is set, wait for the new Cloudflare Pages new deployment, then  
visit the new URL on your browser. It should look something like Figure 11-18.  
Figure 11-18. Our simple registry landing page. While this version requires you to  
manually update the contents of the table, you can iterate on it to add some logic for  
automatically constructing the lists of schemas or any other feature you like.  
# Step 5\: Adding a Custom Domain  
It is common practice that the URL you use to fetch a schema equals the value in its  
\$id property. The \$id property of the example schema we adapted from Chapter 5  
is set to https\://schemas.unify101.com/intelligence-ai/product-entry/v1.json. However,  
the schema is currently getting served from https\://unify101.pages.dev/intelligence-ai/  
product-entry/v1.json.  
Step 5\: Adding a Custom Domain | 205 To fix this, let’s configure Cloudflare Pages to serve our registry from our own custom  
domain instead of its preproduction pages.dev subdomain. If you don’t have a custom  
domain yet, you can obtain one from a variety of domain name registrars such as  
Namecheap and GoDaddy. We own unify101.com and will deploy the schema registry  
at schemas.unify101.com.  
# Configuring a Custom Domain in Cloudflare Pages  
Cloudflare Pages allows you to use a custom domain for free. To configure it,  
head over to the Cloudflare Pages dashboard, select your website project, select the  
“Custom domains” tab, and click the blue “Set up a custom domain” button \(see  
Figure 11-19\).  
Figure 11-19. Cloudflare Pages provides an easy-to-follow wizard for setting up custom  
domains.  
Once into the wizard, type in your expected domain or subdomain and click Con‐  
tinue \(see Figure 11-20\).  
You can either transfer management of your domain to Cloudflare or perform the  
configuration on your domain registrar of choice. We acquired the domain from an  
external domain registrar, so in Figure 11-21 we select the latter option.  
206 | Chapter 11\: Deploying a JSON Schema Registry Figure 11-20. Cloudflare Pages allows you to deploy your project to a top-level domain  
or a subdomain of your choice, as long as you actually own the domain.  
Figure 11-21. We recommend setting up your custom domain through your custom  
registrar unless you expect to only use your domain in conjunction with Cloudflare  
cloud offerings.  
Step 5\: Adding a Custom Domain | 207 Setting Up a CNAME DNS Record  
Deploying a Cloudflare Pages project to a custom subdomain, in our case sche‐  
mas.unify101.com, requires some basic Domain Name System \(DNS\) configuration.  
In DNS lingo, we want to create a CNAME record that points to subdomain at the  
Cloudflare Pages deployment. If you have never done this before, don’t panic! It is  
much easier than it sounds.  
Head over to the domain registrar you used to buy your domain. Every domain  
registrar provides a way to adjust the DNS settings of your domain of choice; for  
example, GoDaddy provides a DNS tab that presents a DNS Records section. Consult  
the documentation of your domain registrar of choice if you cannot find it.  
Once in there, create a new DNS entry of the type CNAME, set the record name to  
your subdomain of choice and the value to your Cloudflare Pages project subdomain  
\(from the URL you have been using all along to test your deployment\), leave every‐  
thing else untouched, and save your changes. In our case, we will set the record name  
to schemas and its value to unify101.pages.dev \(see Figure 11-22\).  
Figure 11-22. Here we are setting up the CNAME record for our unify101.com domain  
on GoDaddy. In other words, we are asking DNS to serve unify101.pages.dev whenever  
somebody visits schemas.unify101.com.  
208 | Chapter 11\: Deploying a JSON Schema Registry Checking the Results  
DNS is a distributed internet protocol for associating human-readable domains to IP  
addresses. Due to its nature, it might take some time for your new DNS record to  
propagate through the network; it usually takes about 30 minutes, but it might take  
up to 48 hours depending on your location and internet provider, so be patient.  
Once the changes are successfully propagated, Cloudflare Pages will mark your cus‐  
tom domain as active under the “Custom domains” tab \(see Figure 11-23\).  
Figure 11-23. DNS propagation takes some time. Even if Cloudflage Pages detects it as  
active, it might still take a bit longer for such changes to propagate to your personal  
network. Flushing your computer’s DNS cache might help.  
After waiting a bit, try to point your web browser to the custom domain you  
selected. With any luck, you will get your schema registry landing page back \(see  
Figure 11-24\).  
Figure 11-24. Our new schema registry is up and running at  
https\://schemas.unify101.com.  
Step 5\: Adding a Custom Domain | 209 Best Practices  
Operating a schema registry is a smooth process as long as you follow a couple of  
simple but important best practices.  
# Schemas Are Immutable  
Make sure to treat schemas as immutable resources. In other words, once you publish  
a schema to the registry, don’t update it in place, and don’t remove it. Otherwise,  
you risk breaking applications or other schemas that depend on or reference these  
schemas.  
If you need to change a schema, publish a new version instead.  
# Adopt a Versioning Strategy  
The last point takes us to versioning. You should not update schemas in place, but  
you can always publish a new version. JSON Schema does not define a version  
keyword; instead, a common practice is for the version to be part of the URL. This is  
why, at the beginning of this chapter, we suggested creating one directory per schema  
where the contents correspond to one file per version\: v1.json, v2.json, etc. However,  
we encourage you to develop the file organization and versioning strategy that works  
best for you. As an alternative, the JSON Schema organization adopted a YYYY-MM  
date versioning scheme for the official meta-schemas, such as 2019-09 and 2020-12.  
If you are familiar with Semantic Versioning, you might find SchemaVer appealing.  
SchemaVer is a specification that proposes adapting of Semantic Versioning major,  
minor, and patch version fragments from software interfaces to schemas. With  
SchemaVer, you can be very precise about the type of change you are applying to  
your schema.  
However, in our experience, SchemaVer is hard to apply correctly. Determining what  
type of change an update corresponds to may require in-depth knowledge of JSON  
Schema and how certain keywords subtly affect schema semantics. For this reason,  
we recommend a simple single-digit, ever-increasing versioning schema like we have  
exemplified in this chapter. The first schema version is v1, the second one is v2, and  
so forth.  
210 | Chapter 11\: Deploying a JSON Schema Registry Summary  
If you followed along with the chapter, now you have a simple registry that you can  
use to host every aligned concept that resulted from applying the book’s methodology  
and let your applications consume them as the source of truth. With some additional  
effort, you can add analytics to your schemas to see who is using what, support  
private schemas, and any other feature you desire. The sky’s the limit.  
In the next chapter, you will learn how to bring a data product idea \(from Chapter 4\)  
into life using JSON, JSON Schema, and your brand new schema registry.  
Summary | 211 CHAPTER 12  
# Designing Data Products  
# Using JSON Schema  
Everything is designed. Few things are designed well.  
—Brian Reed, renowned industrial designer  
Chapter 4 introduced the idea of a data product as a self-contained object with four  
facets\: data, structure, meaning, and context. In practice, some of these facets tend  
to be ignored. For example, data scientists get collections of CSVs with inconsistent  
rows and insufficient information about what each column means, when the dataset  
was created, and so on. The lack of these facets introduces ambiguity, therefore  
extracting key insights out of these badly designed sources of data becomes extremely  
challenging, no matter how much expensive tooling or expertise is thrown at the task.  
To address this data problem, you learned a proven methodology for achieving  
alignment in your organization. You also learned the fundamental technologies that  
make this methodology applicable\: JSON and JSON Schema. In this chapter, we will  
put all of it into practice by walking you through how to design a data product with  
a concept-first approach using JSON and JSON Schema. We will look at each facet of  
a data product in sequence, building upon the JSON Schema registry you deployed in  
Chapter 11.  
213 First Facet\: Data  
The first facet of a data product we will look into is data itself. Chapter 10 introduced  
the idea of spectrums of success, using as an example a user journey through com‐  
pleting a website sign-up form. In such an example, the user starts by visiting the  
landing page, fills in their contact and billing information, agrees to the website terms  
and services, signs up, and, finally, invites their friends.  
# An Example CSV Dataset  
Table 12-1 represents a fictitious website analytics CSV dataset that records the  
corresponding milestones as five users complete them. From left to right, we record  
the time of the event, the IP address of the user, the email of the user \(if known\),  
the US state the user is connecting from, the milestone they achieved, and the user  
acquisition cost for such an event \(e.g., an ad impression that pointed a user to the  
landing page\). Note that not every user completes every milestone; some drop out in  
the process.  
Table 12-1. An example website analytics CSV dataset we will use throughout this chapter  
Timestamp IP address Email State Milestone Cost Currency  
2023-08-21T13\:24\:49Z 84.216.114.94 — CO visit\_landing\_page 0.92 USD  
2023-08-21T13\:26\:33Z 167.16.122.17 — WA visit\_landing\_page 1.75 USD  
2023-08-21T13\:28\:09Z 182.28.182.59 — CA visit\_landing\_page 2.62 USD  
2023-08-21T13\:29\:52Z 115.93.200.62 — NY visit\_landing\_page 2.89 USD  
2023-08-30T13\:30\:16Z 182.28.182.59 gator@example.com CA set\_contact\_info 0 USD  
2023-08-21T13\:32\:28Z 105.0.165.55 — PA visit\_landing\_page 0.45 USD  
2023-08-30T13\:33\:39Z 182.28.182.59 gator@example.com CA set\_billing\_info 0 USD  
2023-08-21T13\:34\:07Z 84.216.114.94 bsikdar@example.com CO set\_contact\_info 0 USD  
2023-08-21T13\:35\:51Z 105.0.165.55 kenja@example.com PA set\_contact\_info 0 USD  
2023-08-30T13\:36\:22Z 84.216.114.94 bsikdar@example.com CO set\_billing\_info 0 USD  
2023-08-30T13\:36\:51Z 84.216.114.94 bsikdar@example.com CO agree\_to\_terms 0 USD  
2023-08-30T13\:38\:17Z 84.216.114.94 bsikdar@example.com CO sign\_up 0 USD  
2023-08-21T13\:40\:14Z 115.93.200.62 crove@example.com NY set\_contact\_info 0 USD  
2023-08-30T13\:43\:01Z 84.216.114.94 bsikdar@example.com CO invite\_friends 0 USD  
2023-08-30T13\:45\:25Z 115.93.200.62 crove@example.com NY set\_billing\_info 0 USD  
2023-08-30T13\:46\:52Z 115.93.200.62 crove@example.com NY agree\_to\_terms 0 USD  
2023-08-30T13\:51\:31Z 115.93.200.62 crove@example.com NY sign\_up 0 USD  
214 | Chapter 12\: Designing Data Products Using JSON Schema A JSON Row Representation  
To make good use of JSON Schema, we need to convert our dataset to a JSON  
array. Using the knowledge discussed in Chapter 2, one way to model the dataset in  
Table 12-1 is as a JSON array whose items are JSON objects that look like this\:  
\[  
\{  
"timestamp"\: "2023-08-21T13\:24\:49Z",  
"ip"\: "84.216.114.94",  
"state"\: "CO",  
"milestone"\: "visit\_landing\_page",  
"cost"\: \{ "amount"\: 0.92, "currency"\: "USD" \}  
\},  
…  
\{  
"timestamp"\: "2023-08-30T13\:51\:31Z",  
"ip"\: "115.93.200.62",  
"email"\: "crove@example.com",  
"state"\: "NY",  
"milestone"\: "sign\_up",  
"cost"\: \{ "amount"\: 0, "currency"\: "USD" \}  
\}  
\]  
For each item in the array, we can omit the email property if not set. In our model,  
the cost and currency columns from the CSV are tightly related, so we decided to  
combine them into a single cost object property.  
# Second Facet\: Structure  
The structure facet is concerned with how the information is formatted\: what object  
properties does each item define, which ones are strings, and so forth. In JSON  
Schema, this facet is directly related to the validation operation introduced in  
Chapter 8.  
# General-Purpose Concepts  
Let’s look at every general-purpose concept from our example dataset and define and  
publish schemas to the registry for each of them. For reusability purposes, we will  
deploy these fundamental concepts under a directory called common. By the end of  
this section, the schema registry will look like Figure 12-1.  
Second Facet\: Structure | 215 Figure 12-1. We will be deploying and listing the new concepts covered in this chapter to  
the JSON Schema registry we published in Chapter 11.  
As you will see, many of these fundamental concepts are already  
defined by well-known standard and specification bodies like the  
International Organization for Standardization \(ISO\), the Ameri‐  
can National Standards Institute \(ANSI\), and the Internet Engi‐  
neering Task Force \(IETF\). As we do in this chapter, we strongly  
suggest following these universal standards and specifications  
whenever possible instead of inventing your own. These organiza‐  
tions provide guidance on an enormous number of concepts to  
ensure interoperability.  
Instead of creating schemas for each individual concept that reference one another,  
it might be tempting to define all of the concepts directly within a single schema in  
a monolithic manner. While it is technically possible, we recommend breaking down  
your schemas like we do in this chapter so that each of them describes a single atomic  
entity in your registry. This way, you force yourself to think about what each of your  
concepts represents and promote reusability, as you never know how your concepts  
may end up being used in the future.  
As you will see in Chapter 14, it is always possible to dereference a JSON Schema into  
a single monolithic entity through a process called JSON Schema bundling.  
216 | Chapter 12\: Designing Data Products Using JSON Schema Timestamp  
The first field in our example dataset is a string that looks like  
"2023-08-21T13\:26\:33Z". This kind of string corresponds to the Basic Format date-  
time Coordinated Universal Time \(UTC\) type defined by the ISO 8601 Date and  
Time Format standard. A basic JSON Schema called timestamp that validates this  
kind of string with a regular expression may look like this\:  
\{  
"\$id"\: "https\://schemas.unify101.com/common/timestamp/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "string",  
"pattern"\: "\^\\\\d\{4\}-\\\\d\{2\}-\\\\d\{2\}T\\\\d\{2\}\:\\\\d\{2\}\:\\\\d\{2\}Z\$"  
\}  
Note that our regular expression is optimized for conciseness over correctness for  
the sake of the illustration. For example, this regular expression defines months as a  
sequence of two digits without disallowing invalid months like 00 or 13. We leave a  
more exhaustive regular expression as an exercise for the reader.  
Regular expressions may look intimidating at first. If you are  
not familiar with them, we recommend consulting these excellent  
resources\:  
• Mastering Regular Expressions by Jeffrey E. F. Friedl \(O’Reilly,  
•  
2006\)  
• Regular Expressions Cookbook by Jan Goyvaerts and Steven  
•  
Levithan \(O’Reilly, 2012\).  
IP address  
The next field corresponds to the Internet Protocol \(IP\) address of the website visitor.  
\(For example\: 167.16.122.17.\) For simplicity, we are only concerned with IP version  
4 addresses defined by the IETF RFC 791 Internet Protocol specification. A basic  
JSON Schema called ipv4 that validates these kind of IP addresses with a simple  
regular expression may look like this\:  
\{  
"\$id"\: "https\://schemas.unify101.com/common/ipv4/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "string",  
"pattern"\: "\^\(\(25\[0-5\]|\(2\[0-4\]|1\\\\d|\[1-9\]|\)\\\\d\)\\\\.?\\\\b\)\{4\}\$"  
\}  
Email  
The format for email addresses we all use and love is defined by the IETF RFC 5322  
Internet Message Format specification. \(For example\: gator@example.com.\) Validating  
Second Facet\: Structure | 217 email address strings is a complex, seldom-needed affair. If you really need to ensure  
an email address is valid, you should send an email with a validation link.  
A basic JSON Schema called email that declares a regular expression optimized for  
simplicity may look like this\:  
\{  
"\$id"\: "https\://schemas.unify101.com/common/email/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "string",  
"pattern"\: "\^\[a-zA-Z0-9.\_%+-\]+@\[a-zA-Z0-9.-\]+\\\\.\[a-zA-Z\]\{2,\}\$"  
\}  
Note that in our example dataset, the email property may be unset. However, this is  
not the place for encoding this fact, as the email concept must stay agnostic to how  
it is used. Instead, we will declare email optionality in the schema that will reference  
this one.  
US state  
The next concept determines the United States state code that the user is connecting  
from. \(For example, "CO" for Colorado.\) US two-letter state codes are defined by the  
ANSI INCITS 38-2009 standard. A JSON Schema called us-state that defines an  
enumeration of possible state codes may look like this\:  
\{  
"\$id"\: "https\://schemas.unify101.com/common/us-state/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"enum"\: \[  
"AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",  
"HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",  
"MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",  
"NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",  
"SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"  
\]  
\}  
Cost and currency  
The concepts of monetary cost and currency are tightly coupled because talking  
about cost without knowing what currency we are referring to is meaningless; for this  
reason, we will consider cost and currency together. The idea is to define currency  
first and then define cost as a composite type that associates a given amount with a  
currency.  
You are probably familiar with currency codes like USD, GBP, and EUR. The full  
list of world currencies is defined by the ISO 4217 currency codes standard. A JSON  
Schema called currency that defines an enumeration of possible currency codes may  
look like this\:  
218 | Chapter 12\: Designing Data Products Using JSON Schema \{  
"\$id"\: "https\://schemas.unify101.com/common/currency/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"enum"\: \[  
"AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",  
"BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV",  
"BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF",  
"CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE",  
"CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD",  
"FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD",  
"HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK",  
"JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD",  
"KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL",  
"MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN",  
"MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR",  
"PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD",  
"RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL",  
"SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT",  
"TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN",  
"UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG",  
"XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF",  
"XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"  
\]  
\}  
With this JSON Schema deployed and accessible over the registry, let’s turn our  
attention to a composite JSON Schema that consumes the currency schema and  
introduces the concept of a monetary amount. A composite JSON Schema called  
price may look like this\:  
\{  
"\$id"\: "https\://schemas.unify101.com/common/price/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "object",  
"required"\: \[ "amount", "currency" \],  
"properties"\: \{  
"amount"\: \{ "type"\: "number", "minimum"\: 0 \},  
"currency"\: \{  
"\$ref"\: "https\://schemas.unify101.com/common/currency/v1.json"  
\}  
\}  
\}  
Second Facet\: Structure | 219 The price schema defines a JSON object with two required properties\: amount and  
currency. The amount property is a positive number, as price amounts cannot be  
negative. The currency property uses the \$ref keyword to point to the currency  
schema we defined before, using its absolute URL.  
Here is an example JSON object that successfully validates against the price schema\:  
\{ "amount"\: 99.9, "currency"\: "USD" \}  
# Application-Specific Concepts  
So far, we have used JSON Schema to define six concepts\: timestamp, ipv4, email,  
us-state, currency, and price. We call these general-purpose concepts as a wide  
range of JSON Schema applications could use them without modification.  
Apart from general-purpose concepts, we have one concept that is application spe‐  
cific\: the milestones the user can achieve while filling out our fictitious website  
sign-up form. This concept comes from Chapter 10, where we defined the flow as\:  
1.  
1\. 2. 2.  
User visits the landing page.  
User fills out contact information.  
3.  
3\. User fills out billing information.  
4.  
4\. User agrees to terms and conditions.  
5.  
5\. User signs up.  
6\. User invites their friends.  
6.  
The CSV dataset at the beginning of this chapter maps these milestones to a set  
of string identifiers. A JSON Schema called website-milestone that defines these  
milestones may look like this \(we put this schema into the intelligence-ai directory of  
our JSON Schema registry\)\:  
\{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/website-milestone/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"enum"\: \[  
"visit\_landing\_page", "set\_contact\_info", "set\_billing\_info",  
"agree\_to\_terms", "sign\_up", "invite\_friends"  
\]  
\}  
# Dataset Entries  
Right now, we have JSON Schemas that individually describe every column of our  
example dataset. The next step is to create a composite JSON Schema that pulls the  
other schemas together to describe a complete entry of our dataset.  
220 | Chapter 12\: Designing Data Products Using JSON Schema If you recall the dataset at the beginning of this chapter and its JSON representation,  
each entry looks like this, where the email property is optional\:  
\{  
"timestamp"\: "2023-08-30T13\:30\:16Z",  
"ip"\: "182.28.182.59",  
"email"\: "gator@example.com",  
"state"\: "CA",  
"milestone"\: "set\_contact\_info",  
"const"\: \{ "amount"\: 0, "currency"\: "USD" \}  
\}  
Here is a basic JSON Schema called signup-analytics-entry that describes such  
JSON objects\:  
\{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics-entry/  
v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "object",  
"required"\: \[ "timestamp", "ip", "state", "milestone", "cost" \],  
"properties"\: \{  
"timestamp"\: \{ "\$ref"\: https\://schemas.unify101.com/common/timestamp/v1.json" \},  
"ip"\: \{ "\$ref"\: "https\://schemas.unify101.com/common/ipv4/v1.json" \},  
"email"\: \{ "\$ref"\: "https\://schemas.unify101.com/common/email/v1.json" \},  
"state"\: \{ "\$ref"\: "https\://schemas.unify101.com/common/us-state/v1.json" \},  
"milestone"\: \{  
"\$ref"\: "https\://schemas.unify101.com/intelligence-ai/website-milestone/  
v1.json" \},  
"cost"\: \{ "\$ref"\: "https\://schemas.unify101.com/common/price/v1.json" \}  
\}  
\}  
This JSON Schema describes an object with six properties\: timestamp, ip, email,  
state, milestone, and cost. Each of these properties references another JSON  
Schema created in this chapter. To represent its optionality, the email property is  
not present in the array of required properties.  
# The Dataset Schema  
A dataset is a sequence of events. Therefore, we are missing one last piece\: a JSON  
Schema that represents an array of entries. This final schema, which describes a JSON  
array whose items are signup analytics entries, will be called signup-analytics\:  
\{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "array",  
"items"\: \{  
"\$ref"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics-entry/  
Second Facet\: Structure | 221 v1.json"  
\}  
\}  
At this point, you can ensure structural integrity of the example dataset presented at  
the beginning of this chapter. One less facet to worry about!  
# Third Facet\: Meaning  
The meaning facet encompasses semantics about the data in each entry. For example,  
our dataset entries contain an optional email address; not only can we structurally  
validate an email string as we did during the structure facet, but we can convey that  
this field represents the abstract idea of an email address, independently of the name  
we chose for the concept or its property name in the entry. As another semantics  
example, we could give the email entry property a user-readable description like  
User’s Email Address.  
JSON Schema supports these kinds of semantics through a rich set of annotation key‐  
words. The process of extracting semantics from a piece of data given a schema corre‐  
sponds to the annotation extraction fundamental operation described in Chapter 8.  
Table 12-2 lists the JSON Schema keywords that you will likely use when implement‐  
ing the meaning facet along with their vocabulary of origin. Recall from Chapter 5  
that in JSON Schema, a vocabulary is a group of keywords defined together.  
Table 12-2. A set of commonly used annotation keywords from the Meta Data and Format  
Annotation official JSON Schema vocabularies  
Keyword Vocabulary Description  
title Meta Data A preferably short description about the purpose of the instance described by the  
schema  
description default deprecated examples Meta Data Meta Data Meta Data Meta Data An explanation about the purpose of the instance described by the schema  
Used to supply a default JSON value associated with a particular schema  
Indicates that applications should refrain from using the declared property  
Used to provide sample JSON values associated with a particular schema for the  
purpose of illustrating usage  
readOnly Meta Data Indicates that the value of the instance is managed exclusively by the owning  
authority and attempts by an application to modify the value of this property are  
expected to be ignored or rejected by that owning authority  
writeOnly Meta Data Indicates that the value is never present when the instance is retrieved from the  
owning authority  
format Format Annotation Define semantic information about a string instance, without performing validation  
In this section, we will revise the schemas we created during the structure facet, add  
meaning information, and publish new versions to the registry.  
222 | Chapter 12\: Designing Data Products Using JSON Schema Timestamp  
For the timestamp schema, we can declare a title, a description, and a set of examples.  
Though computers will ignore it, we can add a URL to the specification that defines  
these kinds of timestamps using the \$comment keyword for human consumption. We  
can also use the format keyword to express that this concept represents a date-time  
string. You can see the list of formats recognized by JSON Schema by looking at the  
documentation for the Format Annotation vocabulary.  
With these changes, the version 2 of the timestamp schema may look like this. The  
properties of the schema that have been changed are in bold\:  
\{  
"\$id"\: "https\://schemas.unify101.com/common/timestamp/v2.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"\$comment"\: "https\://www.iso.org/iso-8601-date-and-time-format.html",  
"title"\: "ISO 8601 timestamp in Basic Format",  
"description"\: "The go-to date and time format at Unify101",  
"format"\: "date-time",  
"examples"\: \[ "2023-08-21T13\:24\:49Z", "2023-08-21T13\:26\:33Z" \],  
"type"\: "string",  
"pattern"\: "\^\\\\d\{4\}-\\\\d\{2\}-\\\\d\{2\}T\\\\d\{2\}\:\\\\d\{2\}\:\\\\d\{2\}Z\$"  
\}  
The title keyword is meant to provide a concise description of  
an instance that successfully validates against the given schema. We  
recommend using a noun that is not prefixed with A or An, similar  
to how you would name a class when writing in an object-oriented  
programming language. For example\: Timestamp instead of A time‐  
stamp.  
Once your concepts have this kind of information, you can extend the landing page  
of your JSON Schema registry to present the concept titles, surface their examples,  
and more.  
# IP Address  
For the ipv4 schema, we can declare a title, a description, a set of examples, a format  
specifier, and a URL to the specification that defines IP version 4 addresses, just as we  
did for the timestamp schema.  
With these changes, the version 2 of the ipv4 schema may look like this. The  
properties of the schema that have been changed are in bold\:  
Third Facet\: Meaning | 223 \{  
"\$id"\: "https\://schemas.unify101.com/common/ipv4/v2.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"\$comment"\: "https\://datatracker.ietf.org/doc/html/rfc791",  
"title"\: "IPv4 address",  
"description"\: "As defined by IETF RFC 791",  
"format"\: "ipv4",  
"examples"\: \[ "192.168.0.1", "172.16.0.254" \],  
"type"\: "string",  
"pattern"\: "\^\(25\[0-5\]|2\[0-4\]\[0-9\]|\[01\]?\[0-9\]\[0-9\]?\)\\  
\\.\(25\[0-5\]|2\[0-4\]\[0-9\]|\[01\]?\[0-9\]\[0-9\]?\)\\\\.\(25\[0-5\]|2\[0-4\]\[0-9\]|\[01\]?\[0-9\]\[0-9\]?\)\\\\.  
\(25\[0-5\]|2\[0-4\]\[0-9\]|\[01\]?\[0-9\]\[0-9\]?\)\$"  
\}  
# Email  
For the email schema, we can declare a title, a description, a set of examples, a format  
specifier, and a URL to the specification that defines email addresses, just as we did  
for the timestamp and ipv4 schemas.  
With these changes, the version 2 of the email schema may look like this. The  
properties of the schema that have been changed are in bold\:  
\{  
"\$id"\: "https\://schemas.unify101.com/common/email/v2.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"\$comment"\: "https\://www.rfc-editor.org/rfc/rfc5322",  
"title"\: "Email address",  
"description"\: "As defined by IETF RFC 5322",  
"format"\: "email",  
"examples"\: \[  
"user@example.com",  
"john.doe123@subdomain.domain.com"  
\],  
"type"\: "string",  
"pattern"\: "\^\[a-zA-Z0-9.\_%+-\]+@\[a-zA-Z0-9.-\]+\\\\.\[a-zA-Z\]\{2,\}\$"  
\}  
# US State  
The JSON Schema Format Annotation vocabulary does not define a format that  
corresponds to a US state. For this reason, we will avoid the format keyword but still  
declare a title, a description, a set of examples, and a URL to the specification that  
defines US states two-letter codes.  
224 | Chapter 12\: Designing Data Products Using JSON Schema The JSON Schema specification defines a list of known values  
for the format keyword. While not commonly seen in practice,  
the specification allows schema writers to set this keyword to an  
arbitrary value as long as the consumers of the schema understand  
it. In this example, we could set the format keyword to a made  
up us-state JSON string. However, in this book we recommend  
against using custom formats, as those are by definition nonstan‐  
dardized and thus a potential source of ambiguity.  
With these changes, the version 2 of the us-state schema may look like this. The  
properties of the schema that have been changed are in bold\:  
\{  
"\$id"\: "https\://schemas.unify101.com/common/us-states/v2.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"\$comment"\: "https\://webstore.ansi.org/standards/incits/incits382009",  
"title"\: "United States 2-letter state code",  
"description"\: "As defined by ANSI INCITS 38-2009",  
"examples"\: \[ "CA", "NY" \],  
"enum"\: \[  
"AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",  
"HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",  
"MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",  
"NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",  
"SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"  
\]  
\}  
# Currency  
The additions to the currency schema are similar to the ones we added to the  
us-state schema\: we will declare a title, a description, a set of examples, and a URL  
to the specification that defines currency three-letter codes. With these changes, the  
version 2 of the currency schema may look like this.  
The properties of the schema that have been changed are in bold, and the enumera‐  
tion of currency codes has been summarized for brevity purposes\:  
Third Facet\: Meaning | 225 \{  
"\$id"\: "https\://schemas.unify101.com/common/currency/v2.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"\$comment"\: "https\://www.iso.org/iso-4217-currency-codes.html",  
"title"\: "Currency 3-letter code",  
"description"\: "As defined by ISO 4217",  
"examples"\: \[ "USD", "GBP", "EUR" \],  
"enum"\: \[  
"AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",  
...  
"XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"  
\]  
\}  
# Price  
The price schema represents a composite concept\: the conjunction of a currency  
code with a monetary amount. For these types of schemas, we can also add human-  
friendly titles to the properties it defines. In this case, we can describe what the  
amount and currency properties mean. We will also update the currency reference  
to import the new version of the currency concept we just created and get that  
additional meaning as well.  
Version 2 of the price schema may look like this. The properties of the schema that  
have been changed are in bold\:  
\{  
"\$id"\: "https\://schemas.unify101.com/common/price/v2.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "Monetary price quantity",  
"description"\: "The go-to price type at Unify101",  
"examples"\: \[  
\{ "amount"\: 99.9, "currency"\: "EUR" \},  
\{ "amount"\: 15, "currency"\: "USD" \}  
\],  
"type"\: "object",  
"required"\: \[ "amount", "currency" \],  
"properties"\: \{  
"amount"\: \{  
"title"\: "The price amount",  
"type"\: "number",  
"minimum"\: 0  
\},  
"currency"\: \{  
"title"\: "The price currency",  
"\$ref"\: "https\://schemas.unify101.com/common/currency/v2.json"  
\}  
\}  
\}  
226 | Chapter 12\: Designing Data Products Using JSON Schema Milestone  
For the website-milestone schema, we can declare a title, a description, and a set of  
examples just as we did for all our revised schemas so far.  
The version 2 of the website-milestone schema may look like this. The properties of  
the schema that have been changed are in bold\:  
\{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/website-milestone/v2.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "Website milestone in the Intelligence.AI sign-up form completion jour-  
ney",  
"description"\: "Taken from Chapter 11 and 12 of our book",  
"examples"\: \[ "set\_contact\_info", "invite\_friends" \],  
"enum"\: \[  
"visit\_landing\_page", "set\_contact\_info", "set\_billing\_info",  
"agree\_to\_terms", "sign\_up", "invite\_friends"  
\]  
\}  
# Analytics Entry  
The signup-analytics-entry schema describes JSON object entries in the final  
dataset. Because this schema also describes a composite type, its additions are similar  
to the ones for the price schema\: we will declare a title, a description, and an  
example at the top level of the schema, but also add titles for every property in  
the object. As before, we will upgrade our schema references to point to the newer  
versions.  
Version 2 of the signup-analytics-entry schema may look like this. The properties  
of the schema that have been changed are in bold\:  
\{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics-entry/  
v2.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "Analytics entry for the fictitious Intelligence.AI sign-up process",  
"description"\: "Taken from Chapter 11 and 12 of our book",  
"examples"\: \[  
\{  
"timestamp"\: "2023-08-30T13\:30\:16Z",  
"ip"\: "182.28.182.59",  
"email"\: "gator@example.com",  
"state"\: "CA",  
"milestone"\: "set\_contact\_info",  
"const"\: \{ "amount"\: 0, "currency"\: "USD" \}  
\}  
\],  
"type"\: "object",  
"required"\: \[ "timestamp", "ip", "state", "milestone", "cost" \],  
Third Facet\: Meaning | 227 "properties"\: \{  
"timestamp"\: \{  
"title"\: "The time of the entry event",  
"\$ref"\: "https\://schemas.unify101.com/common/timestamp/v2.json"  
\},  
"ip"\: \{  
"title"\: "The IP address of the user",  
"\$ref"\: "https\://schemas.unify101.com/common/ipv4/v2.json"  
\},  
"email"\: \{  
"title"\: "The email address of the user, if known",  
"\$ref"\: "https\://schemas.unify101.com/common/email/v2.json"  
\},  
"state"\: \{  
"title"\: "The US state where the user is connecting from",  
"\$ref"\: "https\://schemas.unify101.com/common/us-state/v2.json"  
\},  
"milestone"\: \{  
"title"\: "The sign-up milestone the user completed",  
"\$ref"\: "https\://schemas.unify101.com/intelligence-ai/website-milestone/  
v2.json"  
\},  
"cost"\: \{  
"title"\: "The cost of acquiring the user for completing this milestone",  
"\$ref"\: "https\://schemas.unify101.com/common/price/v2.json"  
\}  
\}  
\}  
By now, you have three out of four facets covered. You can not only validate that  
your datasets conform to your concepts, but you can also extract useful metadata  
out of them as needed. For example, these annotations can help you generate dataset  
documentation, produce navigation user interfaces, generate rich forms for inputting  
new data, and more.  
# Fourth Facet\: Context  
The final facet we will look at is context. The meaning and context facets may look  
similar on the surface, as they are both related to metadata. However, whereas the  
meaning facet is concerned with metadata about each entry in the dataset, context is  
concerned with metadata about the dataset as a whole, such as its name and purpose.  
To implement this facet, we will use the same JSON Schema keywords we used for  
the meaning facet. However, instead of applying them to concept or entry schemas,  
we will apply them to the JSON Schema that defines the dataset as a whole, which we  
introduced at the end of the structure section \(see “Second Facet\: Structure” on page  
215\).  
228 | Chapter 12\: Designing Data Products Using JSON Schema The Signup Analytics Schema  
For the sake of this example, we will declare our dataset to be a static snapshot  
of signup analytics taken at the end of August 2023. As such, we will declare our  
dataset as read-only. We will also declare a human-readable title and description that  
represent our intent. Finally, we will update the signup-analytics-entry schema  
reference to point to the new version we published in the last section.  
With these changes, the version 2 of the signup-analytics schema may look like  
this. As before, the properties of the schema that have been changed are in bold\:  
\{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics/v2.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "A dataset snapshot of signup analytics by milestone on August 2023",  
"description"\: "Taken from Chapter 12 of our book",  
"readOnly"\: true,  
"type"\: "array",  
"items"\: \{  
"\$ref"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics-entry/  
v2.json"  
\}  
\}  
After these simple additions, you have created a data product that covers the four  
facets introduced in Chapter 4.  
# Summary  
In this chapter, we took baby steps to cover every facet of a well-designed data  
product using JSON Schema. Defining every concept in detail may feel tedious at  
first, but the results compound over time as more and more concepts are reused  
across datasets, getting your organization closer to alignment. The authors of this  
book found the process of defining hierarchies of concepts essential to surfacing  
knowledge gaps, implicit constraints, and common sources of confusion.  
# Automated Schema Extraction  
Throughout this exercise, you witnessed the power and expressiveness of JSON  
Schema to cover three out of the four facets of data products introduced in Chapter 4.  
These capabilities come with a learning curve; we covered fundamentals of JSON  
Schema in Chapters 5 and 8. The increased interest in JSON Schema in academia and  
the rise of AI will only make learning it easier.  
Summary | 229 For example, we recommend checking out JSONoid \(see Figure 12-2\), an open  
source and free-to-use project based on research at the Rochester Institute of Tech‐  
nology1 to automatically infer JSON Schemas out of existing data. Compared to other  
similar tools, we found that JSONoid already gets very close to what a skilled schema  
writer would produce. Even more, JSONoid is working on automatically producing  
large language model \(LLM\)-based JSON Schema annotations to automatically sup‐  
port the meaning facet.  
Figure 12-2. A screenshot of using the JSONoid online tool to infer a 2020-12 JSON  
Schema out of a dataset of US senators.  
1 Michael J. Mior, “JSONoid\: Monoid-Based Enrichment for Configurable and Scalable Data-Driven Schema  
Discovery,” arXiv, July 6, 2023.  
230 | Chapter 12\: Designing Data Products Using JSON Schema We also found ChatGPT \(especially ChatGPT-4\) to be useful as a companion to aid in  
schema writing. Of course, we advise you to not blindly trust the schemas produced  
by any of these tools; instead, use them as a foundation and apply your existing  
organizational and JSON Schema knowledge on top.  
# Next Steps  
The attentive reader might have realized that while the official JSON Schema vocabu‐  
laries perform well on the structure and meaning facet, they are not expressive enough  
for the context facet. For example, Chapter 4 suggests documenting who created the  
dataset, when the dataset was created, who maintains the dataset, and more. There  
are no available keywords to support these use cases yet. However, this is not a  
hard blocker! In the next chapter, you will learn how to tap into the JSON Schema  
vocabulary system to define your own custom keywords that address any limitation  
you encounter.  
Summary | 231 CHAPTER 13  
# Extending JSON Schema  
Once we accept our limits, we go beyond them.  
—Albert Einstein  
JSON Schema is used in a wide range of disparate use cases, from UI generation to  
data serialization. Given its wide applicability, the JSON Schema organization cannot  
possibly foresee every required feature. While the vocabularies that the JSON Schema  
organization defines are enormously powerful, there are cases for which you need to  
look beyond what’s offered out of the box. You saw a glimpse of this in Chapter 12,  
when JSON Schema didn’t provide keywords for declaring some of the metadata we  
wanted for the context facet of our example data product.  
In Chapter 5, you learned an important skill\: how to methodically understand every  
JSON Schema and consult documentation for keywords and vocabularies you haven’t  
seen before. This chapter builds on that to show how to define custom keywords that  
can do almost anything you want.  
There are two ways in which you can extend JSON Schema\:  
1.  
1\. Exploit how JSON Schema collects annotations for unknown keywords \(what we  
refer to as the simple case\).  
2.  
2\. Properly define and publish a JSON Schema vocabulary \(what we call the com‐  
plex case\).  
Although the simple case is easy to get going, it imposes limitations on how much  
you can make your keywords do.  
233 Simple Case\: Unknown Keywords  
When performing validation, JSON Schema implementations will silently ignore any  
keywords they do not recognize. This fact can be easily exploited to add arbitrary  
metadata to schemas without the need to define a vocabulary beforehand. For exam‐  
ple, you can add a foobar property to your schemas without causing any harm. The  
official JSON Schema 2020-12 dialect will not recognize this keyword as coming from  
any of its imported vocabularies and will ignore it.  
Continuing the topic of designing data products with JSON Schema from Chapter 12,  
let’s consider the following JSON Schema that describes a set of positive integers.  
It uses the made-up keywords documentation, authors, and license, which corre‐  
spond to the context facet of data products\:  
\{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/example-dataset/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "An example dataset of positive integers that uses unknown keywords",  
"description"\: "For Chapter 13 of our book",  
"readOnly"\: true,  
"documentation"\: "https\://example.com/my-dataset-docs",  
"authors"\: \[  
"Juan Cruz Viotti \<juan@example.com\>",  
"Ron Itelman \<ron@example.com\>"  
\],  
"license"\: "CC-BY-4.0",  
"type"\: "array",  
"items"\: \{  
"type"\: "integer",  
"minimum"\: 0  
\}  
\}  
The JSON Schema 2020-12 official dialect does not know anything about keywords  
called documentation, authors, or license, as they are not defined by any of the  
vocabularies in use by the dialect.  
# Extracting Unknown Keywords as Annotations  
Often, we want our systems to do something with the new keywords we have  
declared. While you can write code that attempts to find occurrences of your cus‐  
tom keywords across subschemas—which is hard to do correctly—there is a much  
easier way. Conveniently, when JSON Schema implementations encounter unknown  
keywords, they can collect them as annotations as part of the annotation extraction  
process discussed in Chapter 8.  
234 | Chapter 13\: Extending JSON Schema For example, the output of evaluating the preceding schema against a valid instance  
with a JSON Schema implementation configured to extract annotations will contain  
the following outcomes. Note that the annotation values correspond to the values we  
set the unknown keywords to.  
An annotation for the unknown documentation keyword\:  
\{  
"keywordLocation"\: "/documentation",  
"absoluteKeywordLocation"\: "https\://schemas.unify101.com/intelligence-ai/example-  
dataset/v1.json/\#/documentation",  
"instanceLocation"\: "",  
"annotation"\: "https\://example.com/my-dataset-docs"  
An annotation for the unknown authors keyword\:  
\}  
\{  
"keywordLocation"\: "/authors",  
"absoluteKeywordLocation"\: "https\://schemas.unify101.com/intelligence-ai/example-  
dataset/v1.json/\#/authors",  
"instanceLocation"\: "",  
"annotation"\: \[ "Juan Cruz Viotti \<juan@example.com\>", "Ron Itelman \<ron@exam-  
ple.com\>" \]  
An annotation for the unknown license keyword\:  
\}  
\{  
"keywordLocation"\: "/license",  
"absoluteKeywordLocation"\: "https\://schemas.unify101.com/intelligence-ai/example-  
dataset/v1.json/\#/license",  
"instanceLocation"\: "",  
"annotation"\: "CC-BY-4.0"  
\}  
A software system that generates documentation for our datasets could include logic  
to search the evaluation output for these special annotations and render them as it  
sees fit.  
# Pros and Cons of This Approach  
As you can see, extending JSON Schema through unknown keyword annotations  
does not require any prerequisite work. As a schema author, you can come up with  
the keywords you want and start using them right away.  
Simple Case\: Unknown Keywords | 235 However, this approach comes with limitations; you cannot make your keywords  
affect validation—at most they only result in annotations. Also, you cannot enforce  
rules for the expected values of your keywords. For example, you cannot enforce that  
the license keyword must only be set to a valid Software Package Data Exchange  
\(SPDX\) license identifier.  
Future versions of JSON Schema will make unknown keywords  
forbidden unless they are prefixed by the x- string. For example\:  
"x-license". Keep this upcoming breaking change in mind when  
purposely making use of unknown keywords. We are avoiding the  
prefix in this book, as doing so is not a convention for the current  
version of JSON Schema. Learn more on the official blog post  
Custom Annotations Will Continue.  
The alternative is to extend JSON Schema through the vocabulary system. Anybody,  
including you, can extend JSON Schema as you see fit. In fact, the official vocabu‐  
laries introduced by the JSON Schema specifications we’ve covered so far are not  
special. They are based on the same extension mechanism that schema writers can  
use too.  
# Complex Case\: Authoring Vocabularies  
This section explores how vocabulary specifications, meta-schemas, and implementa‐  
tions are produced. We will see examples of existing third-party vocabularies and  
define a context vocabulary ourselves.  
# The JSON Schema Vocabulary System  
As you saw in Chapter 5, a vocabulary is a collection of interrelated keywords that  
can be imported into a schema for use. Schema authors can create their own vocab‐  
ularies to make JSON Schema do pretty much anything, with few restrictions. To  
define a custom JSON Schema vocabulary, you should make use of three ingredients\:  
Specification  
A document that unambiguously describes the intended behavior of the key‐  
words defined in the new vocabulary  
236 | Chapter 13\: Extending JSON Schema Meta-schema  
new vocabulary  
A JSON Schema that validates the expected syntax of the keywords defined in the  
Implementation  
A JSON Schema implementation that is extended to support the new vocabu‐  
lary and make your new keywords behave in the way you described in the  
specification  
Each of these orthogonal ingredients has its key purpose; the specification covers the  
semantics and syntax of the vocabulary, the meta-schema validates the syntax of the  
vocabulary, and the implementation brings the vocabulary into reality.  
The only notable restriction when defining new keywords is that  
they cannot start with \$ \(dollar sign\), like \$foobar. This prefix  
is reserved for the Core official vocabulary, which defines the  
vocabulary system itself.  
# Step 1\: Writing a Specification  
Arguably, the most important part of a vocabulary is its specification. A specification  
is meant to unambiguously describe how each of the new keywords must behave in  
such a way that any developer could implement every keyword from the vocabulary  
in an interoperable manner.  
A vocabulary specification is written as prose, but JSON Schema does not state  
how a specification must be written. You may use HTML, Markdown, LaTeX, or  
any other markup language of your choice. While most vocabulary specifications  
are self-published on the web or to source control providers such as GitHub \(see  
Figure 13-1\), you can also publish vocabularies to a standards body such as the IETF.  
Complex Case\: Authoring Vocabularies | 237 Figure 13-1. An example specification of a third-party vocabulary that defines an  
advanced mechanism for identifying uniqueness of array items, deployed to a website  
powered by GitHub Pages. This vocabulary defines a single keyword called uniqueKeys.  
Vocabulary identifiers  
A vocabulary is uniquely identified by a URI. For example, the Applicator vocabulary  
from the JSON Schema 2020-12 dialect is uniquely identified by the following URI\:  
https\://json-schema.org/draft/2020-12/vocab/applicator.  
While not mandatory by the JSON Schema specification, for user convenience we  
recommend a vocabulary URI to resolve or redirect to the vocabulary specification  
when visited on a web browser. The JSON Schema official vocabularies do this to  
some extent\: if you paste the Applicator vocabulary URI into your web browser,  
you will get redirected to the JSON Schema Core specification, which defines this  
vocabulary among others.  
238 | Chapter 13\: Extending JSON Schema Chapter 11 advised treating schemas as immutable resources and proposed a version‐  
ing strategy for deploying different versions of the same schema under different  
URLs. In the same way, vocabulary URIs are expected to be stable. If you are updating  
your vocabulary in any significant way, you are expected to publish a new version of  
the specification at a different URI.  
Consider how JSON Schema versions its own official vocabularies. The latest two  
versions of the Validation official vocabulary correspond to these URIs. The version  
identifiers JSON Schema embeds into the URIs are in bold\:  
• https\://json-schema.org/draft/2020-12/vocab/validation•  
• https\://json-schema.org/draft/2019-09/vocab/validation•  
The context vocabulary specification  
Using HTML, write a concise specification for a vocabulary called context that  
defines our documentation, authors, and license keywords, then deploy it to our  
unify101.com website using Cloudflare Pages. See Figures 13-2 and 13-3 for examples.  
Figure 13-2. Let’s start by presenting the title of our custom vocabulary, a brief descrip‐  
tion of it, and its vocabulary URI\: https\://schemas.unify101.com/vocab/context/v1.  
Complex Case\: Authoring Vocabularies | 239 Figure 13-3. The online specification lists every keyword introduced by the vocabulary, a  
brief description for each keyword, and some concise examples.  
Note that each keyword section clarifies that their value must be collected as annota‐  
tion. When a developer attempts to implement support for this vocabulary, they will  
know what to do. If you want your keywords to perform validation on the instance,  
you must explain the expected validation constraints in the specification.  
240 | Chapter 13\: Extending JSON Schema Learning how to write clear, unambiguous, and correct specifica‐  
tions is a skill of its own. In the world of JSON Schema, there  
are no better examples than the JSON Schema specifications them‐  
selves. We recommend carefully reading them to understand the  
language they use and how they approach explaining complex  
keywords.  
# Step 2\: Writing a Vocabulary Meta-Schema  
You might remember from Chapter 5 that JSON Schema has been designed to  
describe itself; a JSON Schema that describes other JSON Schemas is called a meta-  
schema. Because it can impose constraints over its children’s schemas, a meta-schema  
is the perfect medium for defining the syntax of keywords—for example, declaring  
that a certain keyword can only be set to numeric values.  
Official vocabularies meta-schemas  
Every official JSON Schema vocabulary is associated with its own meta-schema \(see  
Table 13-1\).  
Table 13-1. The JSON Schema organization defines eight official vocabularies, each with  
their respective meta-schema.  
Vocabulary Meta-schema  
Core https\://json-schema.org/draft/2020-12/meta/core  
Applicator https\://json-schema.org/draft/2020-12/meta/applicator  
Validation https\://json-schema.org/draft/2020-12/meta/validation  
Meta-Data https\://json-schema.org/draft/2020-12/meta/meta-data  
Format Annotation https\://json-schema.org/draft/2020-12/meta/format-annotation  
Unevaluated https\://json-schema.org/draft/2020-12/meta/unevaluated  
Content https\://json-schema.org/draft/2020-12/meta/content  
Format Assertion https\://json-schema.org/draft/2020-12/meta/format-assertion  
Try visiting the meta-schema URIs from Table 13-1 in your browser to see how the  
syntax of the keywords you have been using all along is defined. For example, the  
relevant parts of the Validation vocabulary meta-schema concerned with defining the  
type keyword are as follows\:  
\{  
"\$id"\: "https\://json-schema.org/draft/2020-12/meta/validation",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
...  
"properties"\: \{  
"type"\: \{  
"anyOf"\: \[  
\{ "\$ref"\: "\#/\$defs/simpleTypes" \},  
Complex Case\: Authoring Vocabularies | 241 \{  
"type"\: "array",  
"items"\: \{ "\$ref"\: "\#/\$defs/simpleTypes" \},  
"minItems"\: 1,  
"uniqueItems"\: true  
\}  
\]  
\},  
...  
\},  
"\$defs"\: \{  
...  
"simpleTypes"\: \{  
"enum"\: \[ "array", "boolean", "integer", "null", "number", "object",  
"string" \]  
\},  
...  
\}  
\}  
This schema describes an object property called type . According to the schema,  
its value is either an instance of the simpleTypes embedded definition or a unique  
array of instances of the simpleTypes embedded definition . If we take a look at this  
definition under the \$defs keyword , it declares the 7 possible values that we have  
been using all along, like "string" and "number".  
Remember the interplay of meta-schemas and specifications; meta-  
schemas are just about syntax, whereas specifications also cover  
semantics. In this example, note that the vocabulary meta-schema  
only declares the syntax of the type keyword. What happens when  
the user chooses one or more of these types is beyond the scope of  
the meta-schema and within the realms of the specification instead.  
SPDX licenses  
The license keyword in our new vocabulary is meant to declare the license of a data  
product. The license identifiers you’ve seen so far, such as "Apache-2.0" and "MIT",  
are defined by the \(SPDX\) standard.  
Before we continue, and just as we did in the last chapter, let’s publish a new concept  
under common/license to model license identifiers so we can use it to describe  
our license keyword. The SPDX standard lists hundreds of licenses, so here is a  
summarized version for readability purposes\:  
\{  
"\$id"\: "https\://schemas.unify101.com/common/license/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"title"\: "License identifier",  
242 | Chapter 13\: Extending JSON Schema "description"\: "As defined by the Software Package Data Exchange \(SPDX\)",  
"\$comment"\: "https\://github.com/spdx/license-list-data/tree/v3.20",  
"anyOf"\: \[  
\{ "title"\: "BSD Zero Clause License", "const"\: "0BSD" \},  
...  
\{ "title"\: "Zope Public License 2.1", "const"\: "ZPL-2.1" \}  
\]  
\}  
The context vocabulary meta-schema  
Now that we know how JSON Schema defines meta-schemas for each of the official  
vocabularies and we have all the concepts we need, let’s attempt to write a meta-  
schema for our context vocabulary. We will host this meta-schema on our registry  
under vocab/context/v1.json.  
This meta-schema is rather complex, but we’ll break down the most important parts  
together\:  
\{  
"\$id"\: "https\://schemas.unify101.com/vocab/context/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"\$dynamicAnchor"\: "meta",  
"title"\: "A JSON Schema vocabulary for working with the 'context' facet of data  
products",  
"description"\: "Taken from Chapter 13 of our book",  
"properties"\: \{  
"documentation"\: \{  
"title"\: "This keyword is set to a URI reference that points to human-  
readable documentation for the given schema",  
"type"\: "string",  
"format"\: "uri-reference",  
"examples"\: \[ "https\://example.com/my-schema-documentation" \]  
\},  
"authors"\: \{  
"title"\: "This keyword is set to an non-empty array of strings that determine  
the authors of the given schema",  
"description"\: "The format of each author string MUST follow the following  
format 'name \<email\>'",  
"type"\: "array",  
"minItems"\: 1,  
"items"\: \{  
"type"\: "string",  
"pattern"\: "\^\[A-Za-z\\\\s\]+\\\\s\<\[\^\>\]+\>\$"  
\},  
"examples"\: \[  
\[ "John Doe \<johndoe@example.com\>" \],  
\[ "John Doe \<johndoe@example.com\>", "Jane Doe \<janedoe@example.com\>" \]  
\]  
\},  
"license"\: \{  
"title"\: "This keyword is set to a string that denotes a valid SPDX license  
Complex Case\: Authoring Vocabularies | 243 identifier",  
"\$ref"\: "https\://schemas.unify101.com/common/license/v1.json",  
"examples"\: \[ "MIT", "Apache-2.0" \]  
\}  
\}  
\}  
Setting schema identifiers. As with other schemas we’ve created so far, we set the URI  
identifier of the meta-schema . We are using the JSON Schema 2020-12 dialect to  
define the meta-schema that describes our vocabulary, so we will set the \$schema  
keyword accordingly .  
Configuring schema extension. Next, we set the \$dynamicAnchor keyword to the special  
value meta . This is a requirement that results in the meta-schema being applied  
at every subschema of its instances. In other words, by setting this keyword, JSON  
Schema will attempt to validate every subschema against our meta-schema. If this  
keyword is not set, or set to a value other than meta, our vocabulary meta-schema will  
only apply to the top-level schema and nested uses of the documentation, authors,  
and license keywords will not be validated.  
# The Meta Dynamic Anchor  
Vocabularies that define keywords that introduce subschemas, such as properties  
or items, face an interesting challenge—they need to validate a subschema without  
knowing which other vocabularies are present in the dialect under use.  
To solve this problem, \$dynamicAnchor and \$dynamicRef are advanced keywords  
designed to support extending recursive schemas. The former declares an extension  
point that can be dynamically referenced with the latter keyword.  
When describing keywords that introduce subschemas, the official meta-schemas  
dynamically reference an extension point called meta so that other vocabularies can  
hook into it by defining a dynamic anchor with the same name.  
The remaining parts should feel familiar. We use the properties keyword to describe  
our documentation , authors , and license keywords, making use of vali‐  
dation keywords \(like type\), annotation keywords \(like title, and examples\), or  
referencing existing schemas \(like for SPDX license identifiers \).  
# Step 3\: Extending an Implementation  
The final ingredient in designing a custom vocabulary is support for it in at least one  
JSON Schema implementation. Otherwise, no existing JSON Schema implementation  
will be able to process the meta-schema we wrote in the last section \(see Figure 13-4\).  
244 | Chapter 13\: Extending JSON Schema Figure 13-4. Using an online JSON Schema validator like Hyperjump, try writing a  
simple schema that references our vocabulary meta-schema. The schema will be rejected,  
as the implementation won’t be aware of the vocabulary URI we declared in our  
meta-schema through the use of the \$vocabulary keyword.  
Diversity of JSON Schema implementations  
Due to its immense popularity, JSON Schema has a very vibrant ecosystem. There  
are dozens of open source JSON Schema implementations for almost every popular  
programming language around, ranging from Python and Rust to Lua and Elixir.  
In the context of this chapter, JSON Schema implementations offer different inter‐  
faces for implementing new vocabularies, if any. Some of them provide convenient  
ways to hook into keyword evaluation, some allow you to pass constructors that  
declaratively introduce new vocabularies, some might require you to contribute back  
to them instead, and some don’t support custom vocabularies at all.  
This book cannot possibly cover how to extend every implementation out there.  
Instead, we will choose one that you have seen before\: Hyperjump. This implementa‐  
tion is the recommended one for JavaScript on Node.js and web browsers, and it  
is maintained by a core member of the JSON Schema organization. If you are not  
using Hyperjump, or you are not using JavaScript, please consult the documentation  
of your implementation of choice for how to extend it in the same way.  
The code examples we discuss here use Hyperjump v1.5.1 running on Node.js v20.5.1  
on macOS Ventura 13.5.1 on a MacBook Pro M1.  
Extending Hyperjump  
Hyperjump provides a convenient set of self-explanatory functions called addKeyword  
and defineVocabulary. The addKeyword function takes a JavaScript object with three  
properties, as shown in Table 13-2.  
Complex Case\: Authoring Vocabularies | 245 Table 13-2. The argument properties needed to call the Hyperjump addKeyword function  
Property Description  
id Hyperjump requires every keyword to be associated with a unique URI in the same spirit in which JSON  
Schema uses URIs to identify schemas and vocabularies. These keyword URIs can be anything you want. For  
example, if our vocabulary URI is https\://schemas.unify101.com/vocab/context/v1, we may set the URI of the  
documentation keyword to https\://schemas.unify101.com/vocab/context/v1/documentation  
compile For performance reasons, this function allows you to do any precomputation that only relies on the current  
schema and its parent. For example, if you are defining a keyword that takes a regular expression, you can  
precompile the regular expression string into a RegExp JavaScript object. That way, you only precompile it  
once, no matter how many instances you validate against the schema.  
interpret This function includes the business logic for applying the keyword to a given instance and reporting back on  
the evaluation results.  
annotation This function takes the keyword value and returns what the resulting annotation should be.  
The three keywords we want to define, documentation, authors, and license, are  
annotation-only keywords, so their definitions are trivial. We do not need to precom‐  
pile keywords because interpreting them always returns true, and the annotation  
result is the keyword value itself\:  
import \{ addKeyword \} from "@hyperjump/json-schema/experimental";  
addKeyword\(\{  
id\: "https\://schemas.unify101.com/vocab/context/v1/documentation",  
compile\: \(schema, ast, parentSchema\) =\> schema.value,  
interpret\: \(implies, instance, ast, dynamicAnchors, quiet\) =\> true,  
annotation\: \(value\) =\> value  
\}\);  
addKeyword\(\{  
id\: "https\://schemas.unify101.com/vocab/context/v1/authors",  
compile\: \(schema, ast, parentSchema\) =\> schema.value,  
interpret\: \(implies, instance, ast, dynamicAnchors, quiet\) =\> true,  
annotation\: \(value\) =\> value  
\}\);  
addKeyword\(\{  
id\: "https\://schemas.unify101.com/vocab/context/v1/license",  
compile\: \(schema, ast, parentSchema\) =\> schema.value,  
interpret\: \(implies, instance, ast, dynamicAnchors, quiet\) =\> true,  
annotation\: \(value\) =\> value  
\}\);  
The defineVocabulary function takes a vocabulary URI and a JavaScript object  
that associates the vocabulary keyword names with the keyword URIs defined using  
addKeyword. For our context vocabulary, it looks like this\:  
import \{ defineVocabulary \} from "@hyperjump/json-schema/experimental";  
// Make sure to define the keywords here before calling defineVocabulary!  
// …  
246 | Chapter 13\: Extending JSON Schema defineVocabulary\("https\://schemas.unify101.com/vocab/context/v1", \{  
documentation\: "https\://schemas.unify101.com/vocab/context/v1/documentation",  
authors\: "https\://schemas.unify101.com/vocab/context/v1/authors",  
license\: "https\://schemas.unify101.com/vocab/context/v1/license"  
\}\);  
At this point, we can use Hyperjump to validate instances against the vocabulary  
meta-schema using the validate function, which takes a URI to a schema and an  
instance value as arguments. Let’s try it out with the new documentation keyword\:  
import \{ validate \} from "@hyperjump/json-schema/draft-2020-12";  
// Make sure to define the keywords and vocabulary here before calling validate!  
// …  
const schema = \{  
\$schema\: "https\://json-schema.org/draft/2020-12/schema",  
documentation\: "https\://example.com/my-docs"  
\}  
const result = await validate\("https\://schemas.unify101.com/vocab/context/v1.json",  
schema\);  
if \(result.valid\) \{  
console.log\("OK! The instance is valid!"\);  
\}  
Try modifying the documentation keyword value to something that is not a string.  
When doing so, the success message will not be printed.  
# Consuming Vocabularies  
We now have a vocabulary specification and a vocabulary meta-schema, and we  
taught the Hyperjump JSON Schema implementation about it. However, there is  
one missing piece of the puzzle before we can use it in practice\: a JSON Schema  
dialect that imports our vocabulary. If you remember from Chapter 5, vocabularies  
are collections of keywords, and dialects are collections of vocabularies. Right now we  
have a vocabulary, but there is no dialect that uses it yet.  
# Defining a Dialect  
Dialects are also defined using meta-schemas. The dialect we have been using all  
along in this book is https\://json-schema.org/draft/2020-12/schema. Compared to a  
vocabulary meta-schema, a dialect meta-schema is very simple. It declares the set  
of vocabularies it imports using the \$vocabulary keyword and references the vocabu‐  
lary or dialect meta-schemas that correspond to all the imported vocabularies.  
Consuming Vocabularies | 247 Vocabularies Are Not Transitive  
The vocabularies defined by a meta-schema are not transitive. In other words, you  
must explicitly define the \$vocabulary keyword in every meta-schema to declare  
the vocabularies in use. For example, if meta-schema A defines a set of vocabularies  
and you define a meta-schema B that sets its dialect to meta-schema A, instances of  
meta-schema B will not inherit the vocabularies set by meta-schema A.  
Let’s create a dialect that extends JSON Schema 2020-12 and adds our new vocabulary  
as required. We will publish this dialect to our registry under dialect/data-product\:  
\{  
"\$id"\: "https\://schemas.unify101.com/dialect/data-product/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"\$dynamicAnchor"\: "meta",  
"\$vocabulary"\: \{  
"https\://json-schema.org/draft/2020-12/vocab/core"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/applicator"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/unevaluated"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/validation"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/meta-data"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/format-annotation"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/content"\: true,  
"https\://schemas.unify101.com/vocab/context/v1"\: true  
\},  
"title"\: "A dialect based on 2020-12 for defining Data Products",  
"allOf"\: \[  
\{ "\$ref"\: "https\://json-schema.org/draft/2020-12/schema" \},  
\{ "\$ref"\: "https\://schemas.unify101.com/vocab/context/v1.json" \}  
\]  
\}  
Our dialect meta-schema is described by the JSON Schema 2020-12 dialect . It  
imports the same vocabularies as the official 2020-12 dialect and also imports the  
context vocabulary we defined in this chapter . This dialect meta-schema uses the  
allOf logical operator to include both the JSON Schema 2020-12 dialect itself and  
the context vocabulary meta-schema . Essentially, we are saying\: take the JSON  
Schema 2020-12 dialect and extend it with the context vocabulary.  
Now that you know how to define dialects, you know how to  
consume third-party vocabularies that other people have made.  
While some of these vocabularies come with their own convenient  
dialects, you will often need to intermix various vocabularies from  
different sources, which you can only accomplish by defining your  
own dialects.  
248 | Chapter 13\: Extending JSON Schema Making Use of the Dialect  
Chapter 12 defined a data product called signup-analytics. Let’s deploy a new  
version to the registry that makes use of our brand-new dialect and annotation  
keywords. The properties of the schema that have been changed are in bold\:  
\{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics/v3.json",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v1.json",  
"title"\: "A dataset snapshot of signup analytics by milestone on August 2023",  
"description"\: "Taken from Chapter 13 of our book",  
"documentation"\: "https\://learning.oreilly.com/library/view/unifying-business-  
data/9781098144999/",  
"authors"\: \[ "Juan Cruz Viotti \<juan@example.com\>", "Ron Itelman \<ron@exam-  
ple.com\>" \],  
"license"\: "AGPL-3.0",  
"readOnly"\: true,  
"type"\: "array",  
"items"\: \{  
"\$ref"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics-entry/  
v2.json"  
\}  
\}  
Our revised data product definition now makes use of our new dialect meta-schema  
, getting access to the new context vocabulary. For this data product, we will set  
the documentation keyword to the URL of this book itself , we will set the authors  
keyword to the authors of this book and set the license keyword to the GNU  
Affero General Public License \(AGPL\) version 3 .  
# Example\: Extracting Annotations with Hyperjump  
In the section “Extending Hyperjump,” we taught the Hyperjump JavaScript JSON  
Schema implementation about our context vocabulary and used it to perform some  
basic validation against the vocabulary meta-schema. Now that we have a dialect  
using the new vocabulary, let’s build on the code we wrote before to extract the  
annotations that correspond to our new vocabulary.  
Adding the dialect  
One caveat to be aware of is that while Hyperjump can download vocabulary meta-  
schemas over HTTP, it does not support dynamically fetching dialect meta-schemas.  
Instead, users are expected to manually declare them using the addSchema function.  
In this example, we will define our dialect in place\:  
import \{ addSchema \} from "@hyperjump/json-schema/draft-2020-12";  
// Make sure to define the keywords and vocabulary here before calling addSchema!  
// …  
Consuming Vocabularies | 249 addSchema\(\{  
"\$id"\: "https\://schemas.unify101.com/dialect/data-product/v1.json",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"\$dynamicAnchor"\: "meta",  
"\$vocabulary"\: \{  
"https\://json-schema.org/draft/2020-12/vocab/core"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/applicator"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/unevaluated"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/validation"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/meta-data"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/format-annotation"\: true,  
"https\://json-schema.org/draft/2020-12/vocab/content"\: true,  
"https\://schemas.unify101.com/vocab/context/v1"\: true  
\},  
"title"\: "A dialect based on 2020-12 for defining Data Products",  
"allOf"\: \[  
\{ "\$ref"\: "https\://json-schema.org/draft/2020-12/schema" \},  
\{ "\$ref"\: "https\://schemas.unify101.com/vocab/context/v1.json" \}  
\]  
\}\);  
Getting annotations  
The annotate function takes as arguments the URI of a schema and an instance  
value. The result is an object that you can query using the AnnotatedInstance.anno  
tation function, which takes as arguments an annotation extraction result, the name  
of the annotation to extract, and the dialect of the given schema.  
For example, let’s extract the annotations of our updated data product schema,  
https\://schemas.unify101.com/intelligence-ai/signup-analytics/v3.json, and print its  
documentation annotation, which we previously set to the URL of our book\:  
import \{ annotate \} from '@hyperjump/json-schema/annotations/experimental';  
import \* as AnnotatedInstance from "@hyperjump/json-schema/annotated-instance/exper-  
imental";  
// Make sure to define the keywords, vocabulary, and dialect here  
// before calling annotate!  
// …  
const result = await annotate\(  
"https\://schemas.unify101.com/intelligence-ai/signup-analytics/v3.json", \[\]\);  
const documentation = AnnotatedInstance.annotation\(result, "documentation",  
"https\://schemas.unify101.com/dialect/data-product/v1.json"\);  
console.log\(documentation\[0\]\);  
If you run this program, you will get back https\://learning.oreilly.com/library/view/  
unifying-business-data/9781098144999/.  
Hyperjump also provides convenient functions to iterate over every collected  
annotation and more. We encourage the interested reader to consult the project  
documentation.  
250 | Chapter 13\: Extending JSON Schema Summary  
In this chapter, you discovered how to exploit the way JSON Schema treats unknown  
keywords to add ad hoc annotations \(what we referred to as the simple case\),  
and how to properly introduce new keywords through the vocabulary system \(the  
complex case\). Although the simple case is easy to get going, it imposes limitations  
on how much you can do. So if you are thinking of extending JSON Schema, we  
recommend always making use of the vocabulary system.  
Defining a new vocabulary consists of a specification, a vocabulary meta-schema, and  
an extended implementation. Making use of a vocabulary requires the definition of  
a dialect meta-schema. We went through every step of defining a vocabulary that  
makes JSON Schema more capable of covering the context facet of a data product.  
Armed with this knowledge, you are no longer limited to what the official JSON  
Schema vocabularies can do—you can always define your own!  
In Chapter 14, we will explore how JSON Schema can be extended to support a whole  
new use case\: defining datasets.  
Summary | 251 CHAPTER 14  
# Introducing JSON Unify  
Great things are done by a series of small things brought together.  
—Vincent Van Gogh  
In previous chapters, you saw the idea of a data product introduced in Chapter 4  
come to life using JSON and JSON Schema. More specifically, given an example  
JSON dataset, which corresponds to the data facet of a data product, we used JSON  
Schema to describe the remaining three facets\: structure, meaning, and context.  
The attentive reader might have realized there is still one problem. According to  
Chapter 4, a data product “encapsulates both the data and its packaging into a single,  
self-contained object.” However, the data product we defined in Chapter 12 and  
Chapter 13 is not standalone. The data lives separately from the schema, without  
any connection between them, and the schema does not contain all the information  
itself; it mostly references other schemas in our schema registry that do contain the  
information.  
The aim of this chapter is to give you a glimpse of how JSON Schema can be  
extended, once again, to fix this last set of concerns. Rather than something to use  
and deploy right now, consider this chapter to be a thought-provoking experiment  
about the future of data products using JSON Schema. The authors of this book are  
exploring these ideas under the JSON Unify name and hope to publish an open source  
specification and implementation in the future.  
# Introducing the Dataset Vocabulary  
If the core problem is collocating schema and data, what about embedding the data  
into the schema itself? As we did in Chapter 13, let’s assume we created a new JSON  
Schema vocabulary called dataset whose URI is https\://schemas.unify101.com/vocab/  
dataset/v1. This vocabulary defines two keywords\: dataset and datasetSchema. The  
253 dataset keyword can be set to a JSON array whose items are described by the schema  
declared using the datasetSchema keyword.  
Let’s also assume we published a new version of the data-product dialect from  
Chapter 13 to make use of this new vocabulary. An example data product using this  
new dialect may look like this\:  
\{  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"title"\: "A an example dataset of positive integers",  
"description"\: "Taken from Chapter 14 of our book",  
"datasetSchema"\: \{ "type"\: "integer" \},  
"dataset"\: \[ 1, 2, 3, 4, 5 \]  
\}  
The preceding schema uses the new dataset keyword to define a short collection  
. Each entry successfully validates against the dataset schema , which  
of integers describes integers.  
# Revisiting the Signup Analytics Example  
Assuming the presence of this new dataset keyword, a revised version of the website  
signup analytics data product from Chapters 12 and 13 that includes the data facet  
may look like the following. The properties of the schema that have been changed are  
in bold\:  
\{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics/v4.json",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"title"\: "A dataset snapshot of signup analytics by milestone on August 2023",  
"description"\: "Taken from Chapter 14 of our book",  
"documentation"\: "https\://learning.oreilly.com/library/view/unifying-business-  
data/9781098144999/",  
"authors"\: \[ "Juan Cruz Viotti \<juan@example.com\>", "Ron Itelman \<ron@exam-  
ple.com\>" \],  
"license"\: "AGPL-3.0",  
"readOnly"\: true,  
"datasetSchema"\: \{  
"\$ref"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics-entry/  
v2.json"  
\},  
"dataset"\: \[  
\{  
"timestamp"\: "2023-08-21T13\:24\:49Z",  
"ip"\: "84.216.114.94",  
"state"\: "CO",  
"milestone"\: "visit\_landing\_page",  
"cost"\: \{ "amount"\: 0.92, "currency"\: "USD" \}  
\},  
...  
254 | Chapter 14\: Introducing JSON Unify \{  
"timestamp"\: "2023-08-30T13\:51\:31Z",  
"ip"\: "115.93.200.62",  
"email"\: "crove@gmail.com",  
"state"\: "NY",  
"milestone"\: "sign\_up",  
"cost"\: \{ "amount"\: 0, "currency"\: "USD" \}  
\}  
\]  
\}  
Now we finally have the four facets of a data product \(context, structure, meaning,  
and data\) accessible from within a single schema. If the contents of the new dataset  
keyword are collected as a JSON Schema annotation, then it is trivial to use the anno‐  
tation extraction operation discussed in Chapter 8 and exemplified in Chapter 13 to  
read the data out of a data product schema, as shown in Figure 14-1. This way, you  
obtain the data through a standard JSON Schema mechanism instead of implement‐  
ing custom logic that attempts to detect the presence of a dataset keyword.  
# JSON Schema Bundling  
For maintainability and reusability purposes, the signup-analytics schema from  
Chapter 12 does not directly describe its instances. Instead, it makes use of JSON  
Schema remote referencing \(using the \$ref keyword introduced in Chapter 5\) to pull  
in the schema that describes entries in the dataset\: signup-analytics-entry. But in  
our example, it does not stop there. The signup-analytics-entry schema references  
other schemas too, like timestamp, email, and price, which may even reference other  
schemas themselves, like currency, as shown in Figure 14-2.  
Modern JSON Schema implementations support remote referencing and can effort‐  
lessly traverse networks of schema references of arbitrary depths, often efficiently  
caching them along the way. However, what if you need to package a data product  
as a standalone object that does not depend on any other schemas hosted over the  
Internet? For example, you might want to embed the preresolved schema in an  
application for performance and reliability reasons or deploy it to an air-gapped  
environment.  
JSON Schema Bundling | 255 Figure 14-1. If the contents of the dataset keyword produce an annotation, feeding a  
schema that uses such a keyword into a JSON Schema implementation that is capable of  
extracting annotations will result in a dataset annotation with the expected results.  
256 | Chapter 14\: Introducing JSON Unify Figure 14-2. Nontrivial schemas often reference other schemas. In this example, the  
signup-analytics schema references the signup-analytics-entry schema, which  
references the price schema, which references the currency schema.  
JSON Schema Bundling | 257 The Bundling Process  
JSON Schema supports this use case through a process called JSON Schema bun‐  
dling. As its name implies, bundling is about merging multiple schemas into one.  
While it may sound intimidating, the bundling process is incredibly simple; when  
encountering a remote reference, inline the contents of such schema using the \$defs  
keyword, setting the keys to the corresponding schema identifiers.  
For example, consider the following example schema\:  
\{  
"\$id"\: "https\://example.com/schema-1",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "array",  
"items"\: \{ "\$ref"\: "https\://example.com/schema-2" \}  
\}  
That schema remotely references a fictitious schema hosted at https\://example.com/  
schema-2 , that may look like this\:  
\{  
"\$id"\: "https\://example.com/schema-2",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "boolean"  
\}  
To bundle https\://example.com/schema-2 into https\://example.com/schema-1, we cre‐  
ate a new schema that declares the \$defs keyword. In it, we add two object proper‐  
ties whose keys are https\://example.com/schema-1 and https\://example.com/schema-2,  
where their values correspond to the contents of such schemas. Finally, we make the  
new schema reference https\://example.com/schema-1.  
\{  
"\$id"\: "https\://example.com/bundled-schema-1",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"\$ref"\: "https\://example.com/schema-1",  
"\$defs"\: \{  
"https\://example.com/schema-1"\: \{  
"\$id"\: "https\://example.com/schema-1",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "array",  
"items"\: \{ "\$ref"\: "https\://example.com/schema-2" \}  
\},  
"https\://example.com/schema-2"\: \{  
"\$id"\: "https\://example.com/schema-2",  
"\$schema"\: "https\://json-schema.org/draft/2020-12/schema",  
"type"\: "boolean"  
\}  
\}  
\}  
258 | Chapter 14\: Introducing JSON Unify When a compliant JSON Schema implementation processes this new version of the  
schema, it detects https\://example.com/schema-2 within itself and will not attempt to  
locate it elsewhere.  
# Why Does JSON Schema Bundling Work?  
If you are curious, the reason JSON Schema bundling works is that when a JSON  
Schema implementation processes a schema, it will first traverse it in search for  
identifiable schema resources that were described using keywords such as \$id and  
\$anchor. In the case of a bundled schema, an implementation will detect the children  
schemas under the \$defs keyword and make the corresponding associations. Next, an  
implementation will start evaluating the schema. By the time remote references are  
encountered, these child schemas will already be present in the internal registry, and  
no HTTP requests will be necessary.  
# Bundling Our Example Data Product  
If we run a JSON Schema bundler on the signup-analytics data product, we will get  
a large but standalone schema that looks like this \(ellipses used for brevity purposes\)\:  
\{  
...  
"\$ref"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics/v4.json",  
...  
"\$defs"\: \{  
v4.json",  
"https\://schemas.unify101.com/intelligence-ai/signup-analytics/v4.json"\: \{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics-entry/  
...  
"datasetSchema"\: \{  
"\$ref"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics-  
entry/v2.json"  
\},  
"dataset"\: \[ ... \],  
\},  
"https\://schemas.unify101.com/intelligence-ai/signup-analytics-entry/v2.json"\: \{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics-entry/  
v2.json",  
...  
\},  
"https\://schemas.unify101.com/common/timestamp/v2.json"\: \{  
"\$id"\: "https\://schemas.unify101.com/common/timestamp/v2.json",  
...  
\},  
"https\://schemas.unify101.com/common/ipv4/v2.json"\: \{  
"\$id"\: "https\://schemas.unify101.com/common/ipv4/v2.json",  
...  
\},  
JSON Schema Bundling | 259 "https\://schemas.unify101.com/common/email/v2.json"\: \{  
"\$id"\: "https\://schemas.unify101.com/common/email/v2.json",  
...  
\},  
"https\://schemas.unify101.com/common/us-states/v2.json"\: \{  
"\$id"\: "https\://schemas.unify101.com/common/us-states/v2.json",  
...  
\},  
"https\://schemas.unify101.com/intelligence-ai/website-milestone/v2.json"\: \{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/website-milestone/  
v2.json",  
...  
\},  
"https\://schemas.unify101.com/common/price/v2.json"\: \{  
"\$id"\: "https\://schemas.unify101.com/common/price/v2.json",  
...  
\},  
"https\://schemas.unify101.com/common/currency/v2.json"\: \{  
"\$id"\: "https\://schemas.unify101.com/common/currency/v2.json",  
...  
\}  
\}  
\}  
This is a true data product that, according to our definition in Chapter 4, encapsulates  
both the data and its packaging into a single, self-contained object.  
# Bundling Meta-Schemas  
While not typically done in practice, as most modern JSON Schema implementations  
are dialect and vocabulary aware—both need to be defined in the implementation  
beforehand—it is possible to bundle meta-schemas. Doing so with our example data  
product would result in the following schemas being bundled\:  
• https\://schemas.unify101.com/dialect/data-product/v2.json•  
• https\://json-schema.org/draft/2020-12/schema•  
• https\://json-schema.org/draft/2020-12/meta/core•  
• https\://json-schema.org/draft/2020-12/meta/applicator•  
• https\://json-schema.org/draft/2020-12/meta/unevaluated•  
• https\://json-schema.org/draft/2020-12/meta/validation•  
• https\://json-schema.org/draft/2020-12/meta/meta-data•  
• https\://json-schema.org/draft/2020-12/meta/format-annotation•  
260 | Chapter 14\: Introducing JSON Unify • https\://json-schema.org/draft/2020-12/meta/content•  
• https\://schemas.unify101.com/vocab/context/v1.json•  
• https\://schemas.unify101.com/vocab/dataset/v1.json•  
# Referencing Remote Data  
We’ve seen that schemas may remotely reference other schemas. If needed, schema  
users may resolve remote references in advance through the bundling process. The  
same reasoning can be applied to the dataset keyword. We can define a datasetRef  
keyword to declare a URI where the actual data is hosted. If an implementation that  
is aware of the dataset vocabulary encounters a remote reference, it may perform an  
HTTP request to fetch the data, then prefetch the remotely located data during the  
bundling process and inline it as a dataset JSON array.  
For example, assume that we uploaded a JSON representation of the  
signup-analytics dataset from Chapter 12 at https\://example.com/datasets/signup-  
analytics.json that looks like this\:  
\[  
\{  
"timestamp"\: "2023-08-21T13\:24\:49Z",  
"ip"\: "84.216.114.94",  
"state"\: "CO",  
"milestone"\: "visit\_landing\_page",  
"cost"\: \{ "amount"\: 0.92, "currency"\: "USD" \}  
\},  
...  
\{  
"timestamp"\: "2023-08-30T13\:51\:31Z",  
"ip"\: "115.93.200.62",  
"email"\: "crove@gmail.com",  
"state"\: "NY",  
"milestone"\: "sign\_up",  
"cost"\: \{ "amount"\: 0, "currency"\: "USD" \}  
\}  
Using this remotely located JSON file, we may publish a new version of the signup-  
analytics data product that references the dataset through its URI. The properties of  
the schema that have been changed are in bold\:  
\]  
\{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics/v5.json",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"title"\: "A dataset snapshot of signup analytics by milestone on August 2023",  
"description"\: "Taken from Chapter 14 of our book",  
"documentation"\: "https\://learning.oreilly.com/library/view/unifying-business-  
Referencing Remote Data | 261 data/9781098144999/",  
"authors"\: \[ "Juan Cruz Viotti \<juan@example.com\>", "Ron Itelman \<ron@exam-  
ple.com\>" \],  
"license"\: "AGPL-3.0",  
"readOnly"\: true,  
"datasetSchema"\: \{  
"\$ref"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics-entry/  
v2.json"  
\},  
"datasetRef"\: "https\://example.com/datasets/signup-analytics.json"  
\}  
# The Problem of Streaming JSON  
While defining small datasets using JSON arrays is convenient, doing so with large  
datasets may prove impractical from a performance point of view.  
As a consequence of the grammar, it is hard to incrementally parse JSON arrays in  
a streaming fashion. Instead, applications typically need to load and parse the entire  
JSON array before being able to access individual items. For example, if you have  
a dataset whose JSON representation takes 1 terabyte of storage, you might need to  
load the entire 1 terabyte into memory in order to read any item from it.  
# Introducing JSON Lines  
While some JSON parsers attempt to implement some level of clever streaming  
support, there is an easier way\: JSON Lines. JSON Lines \(JSONL\) is a basic collection  
format whose underlying idea is simple—each line of a JSONL document is a com‐  
plete minified JSON document that can be parsed on its own.  
For example, we may publish a JSONL variant of the https\://example.com/datasets/  
signup-analytics.json dataset we published in this section at https\://example.com/data‐  
sets/signup-analytics.jsonl, which may look like this\:  
\{"timestamp"\:"2023-08-21T13\:24\:49Z","ip"\:"84.216.114.94","state"\:"CO","mile-  
stone"\:"visit\_landing\_page","cost"\:\{"amount"\:0.92,"currency"\:"USD"\}\},  
...  
\{"time-  
stamp"\:"2023-08-30T13\:51\:31Z","ip"\:"115.93.200.62","email"\:"crove@gmail.com","state"  
\:"NY","milestone"\:"sign\_up","cost"\:\{"amount"\:0,"currency"\:"USD"\}\}  
In comparison to parsing an entire JSON array, a JSONL implementation can parse  
one entry at a time or even skip certain entries.  
Due to its streaming characteristics, JSONL is popular in AI. For  
example, the popular ChatGPT model is fine-tuned using JSONL  
input.  
262 | Chapter 14\: Introducing JSON Unify We can let the datasetRef keyword remotely reference a JSONL document to obtain  
efficient streaming capabilities. With this new capability, let’s publish a new version of  
the signup-analytics data product that points to a JSONL dataset. The properties of  
the schema that have been changed are in bold\:  
\{  
"\$id"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics/v6.json",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"title"\: "A dataset snapshot of signup analytics by milestone on August 2023",  
"description"\: "Taken from Chapter 14 of our book",  
"documentation"\: "https\://learning.oreilly.com/library/view/unifying-business-  
data/9781098144999/",  
"authors"\: \[ "Juan Cruz Viotti \<juan@example.com\>", "Ron Itelman \<ron@exam-  
ple.com\>" \],  
"license"\: "AGPL-3.0",  
"readOnly"\: true,  
"datasetSchema"\: \{  
"\$ref"\: "https\://schemas.unify101.com/intelligence-ai/signup-analytics-entry/  
v2.json"  
\},  
"datasetRef"\: "https\://example.com/datasets/signup-analytics.jsonl"  
\}  
Note that when performing JSON Schema bundling, the JSONL input would be  
converted into a JSON array, losing its streaming capabilities in exchange for self-  
containment.  
# Extracting Meaning  
The signup-analytics data product we have been using so far produces a set of  
JSON Schema annotations that correspond to the meaning facet introduced in Chap‐  
ter 4. Chapter 8 talked about how the annotation extraction operation builds upon  
JSON Schema standard output formats. For ergonomic reasons, we can postprocess  
the standard output format to tune it to be better suited for reading entries from a  
data product. For example, each entry may produce a JSON object that looks like this\:  
\{ "data"\: \{ ... \}, "annotations"\: \{ ... \} \}  
The data property contains the entry JSON value and the annotations property  
contains every annotation extracted along the way, which mirrors the structure of the  
corresponding data property.  
# A Simple Example  
For example, consider the following data product of either integers where each case declares a different title\:  
or Booleans ,  
Extracting Meaning | 263 \{  
"\$id"\: "https\://example.com/integers-or-booleans",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"datasetSchema"\: \{  
"anyOf"\: \[  
\{ "title"\: "This entry is an integer", "type"\: "integer" \},  
\{ "title"\: "This entry is a boolean", "type"\: "boolean" \}  
\]  
\},  
"dataset"\: \[ 1, false, true, 4, 5 \]  
\}  
Reading the first element of the dataset, the integer 1, and evaluating it against  
the datasetSchema property would result in the following output. Note that the  
corresponding title keyword is collected as an annotation\:  
\{  
"data"\: 1,  
"annotations"\: \{ "title"\: "This entry is an integer" \}  
Reading the second element of the dataset, the false Boolean, would result in the  
following output\:  
\}  
\{  
"data"\: false,  
"annotations"\: \{ "title"\: "This entry is a boolean" \}  
\}  
# Using Logic Operators  
Due to the expressiveness of JSON Schema, annotations can be as complex as the  
schema writer desires. One interesting and powerful possibility, often not available  
when using alternative technology, is to conditionally annotate dataset entries using  
logic operators based on their content.  
For example, consider a fictitious data product that describes a set of integers  
where we state that even numbers are deprecated \:  
\{  
"\$id"\: "https\://example.com/conditional-annotations",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"datasetSchema"\: \{  
"title"\: "This entry is an integer",  
"type"\: "integer",  
"if"\: \{ "multipleOf"\: 2 \},  
"then"\: \{ "deprecated"\: true \}  
\},  
"dataset"\: \[ 1, 2, 3, 4, 5 \]  
\}  
264 | Chapter 14\: Introducing JSON Unify Reading an odd entry of the dataset, such as the integer 1, would result in the  
following output\:  
\{  
"data"\: 1,  
"annotations"\: \{ "title"\: "This entry is an integer" \}  
However, if the entry is an even number, such as the integer 2, then the deprecated  
annotation will be collected\:  
\}  
\{  
"data"\: 2,  
"annotations"\: \{  
"title"\: "This entry is an integer",  
"deprecated"\: true  
\}  
\}  
# The Signup Analytics Example  
The amount of extracted meaning depends on the complexity of the data structures  
you are describing and the amount of annotation keywords you used when describ‐  
ing them.  
Now consider the signup-analytics data product we have been using so far. When  
encountering the following entry\:  
\{  
"timestamp"\: "2023-08-21T13\:24\:49Z",  
"ip"\: "84.216.114.94",  
"state"\: "CO",  
"milestone"\: "visit\_landing\_page",  
"cost"\: \{ "amount"\: 0.92, "currency"\: "USD" \}  
The result would contain plenty of rich metadata from every schema referenced by  
the data product\:  
\}  
\{  
"data"\: \{  
"timestamp"\: "2023-08-21T13\:24\:49Z",  
"ip"\: "84.216.114.94",  
"state"\: "CO",  
"milestone"\: "visit\_landing\_page",  
"cost"\: \{ "amount"\: 0.92, "currency"\: "USD" \}  
\},  
"annotations"\: \{  
"timestamp"\: \{  
"title"\: \[ "The time of the entry event", "ISO 8601 timestamp in Basic For-  
mat" \],  
"description"\: "The go-to date and time format at Unify101",  
Extracting Meaning | 265 "format"\: "date-time"  
\},  
"ip"\: \{  
"title"\: \[ "The IP address of the user", "IPv4 address" \],  
"description"\: "As defined by IETF RFC 791",  
"format"\: "ipv4"  
\},  
"state"\: \{  
"title"\: \[ "The US state where the user is connecting from",  
"United States 2-letter state code" \],  
"description"\: "As defined by ANSI INCITS 38-2009"  
\},  
"milestone"\: \{  
"title"\: \[ "The sign-up milestone the user completed",  
"Website milestone in the Intelligence.AI sign-up form completion jour-  
ney" \],  
"description"\: "Taken from Chapter 11 and 12 of our book"  
\},  
"cost"\: \{  
"title"\: \[ "The cost of acquiring the user for completing this milestone",  
"Monetary price quantity" \],  
"description"\: "The go-to price type at Unify101",  
"amount"\: \{  
"title"\: "The price amount"  
\},  
"currency"\: \{  
"title"\: \[ "The price currency", "Currency 3-letter code" \],  
"description"\: "As defined by ISO 4217"  
\}  
\}  
\}  
\}  
# Dataset Lineage  
A dataset is often used to support more than one use case, and each of these use cases  
might consume different subsets of it in different ways. For example, the website for  
the signup-analytics dataset we have been playing with may be used to aggregate  
and render a success spectrum visualization like the one in Chapter 11 \(using the ip  
and milestone properties\), but it may also be used to power an analytics report that  
groups unique visitors by their geographical location \(consuming the ip property to  
perform IP reverse lookups\).  
266 | Chapter 14\: Introducing JSON Unify For practical reasons, the systems that implement these use cases often preprocess or  
fork the corresponding datasets to better suit their needs. For example, extracting and  
deduplicating IP addresses from a large enough website analytics dataset may be too  
slow to do every time the report is generated. Therefore, a data scientist may perform  
the task once, create a new dataset of unique IP addresses, store it somewhere else,  
and only consume this preprocessed dataset from then onward.  
Although the strategy of preprocessing or forking datasets provides great immediate  
wins, it does not come without pitfalls. In our experience, more often than not, the  
lineage of a dataset is not preserved. For example, a modified dataset might have  
been created from another dataset at a certain point of time, but the new dataset  
might not record what the original dataset was or when the new dataset was created.  
Consequently, it may become difficult to track down and verify the data’s source of  
truth.  
To solve the dataset manipulation problem without compromising on lineage, what  
if a data product could point to another, extending it as needed? In the “Referencing  
Remote Data” section, we added a datasetRef keyword to point to a remote JSON  
array or JSONL document. We can extend this keyword to let it point to a full-blown  
schema that also defines the dataset or datasetRef keywords.  
# Filtering  
One common reason for modifying an existing dataset is for filtering purposes. For  
example, consider a simple dataset consisting of integers\:  
\{  
"\$id"\: "https\://example.com/integers",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"datasetSchema"\: \{ "type"\: "integer" \},  
"dataset"\: \[ 1, 2, 3, 4, 5 \]  
\}  
We can support a datasetFilter keyword that provides a schema for filtering input  
data. With it, we can create a new dataset that points at the integer datasets , only  
keeping the entries that consist of even integers \:  
\{  
"\$id"\: "https\://example.com/even-integers",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"datasetFilter"\: \{ "multipleOf"\: "2" \},  
"datasetRef"\: "https\://example.com/integers"  
\}  
Dataset Lineage | 267 This way, we get the dataset we want \(in this case, even integers\), while keeping  
a reference to the original dataset. Furthermore, changes to the upstream dataset  
will be automatically reflected when reevaluating the dataset that applies the filtering  
operation.  
# Transforming  
A natural extension of the dataset vocabulary is to support transformation of entries.  
An excellent language for expressing these transformation rules is JSON-e, a template  
engine for JSON where the templates are written in JSON itself. It was originally  
developed to support Mozilla’s CI/CD processes, but it’s now a standalone open  
source project.  
Another popular and powerful JSON query and transformation  
language you might find useful is JSONata. We prefer JSON-e since  
JSONata expressions do not use JSON constructs.  
Covering JSON-e to its full extent is outside the scope of this book, but to give you a  
taste of how it looks, consider the following template that multiplies every element of  
an array of integers by two\:  
\{  
"\$map"\: \[ 1, 2, 3, 4, 5 \],  
"each\(x\)"\: \{ "\$eval"\: "x \* 2" \}  
\}  
In this example, we declare a JSON array using the \$map operator . By doing so, we  
can set the each\(x\) property to a subtemplate that will be evaluated against each  
item of the array.  
Evaluating the previous JSON-e template results in the following array\:  
\[ 2, 4, 6, 8, 10 \]  
Because JSON-e is JSON, we can elegantly embed arbitrary JSON-e transformation  
templates in our dataset schemas using a keyword we may call datasetTransform.  
For example, consider the following dataset of IP and email addresses\:  
\{  
"\$id"\: "https\://example.com/ip-and-email",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"datasetSchema"\: \{  
"type"\: "object",  
"properties"\: \{  
"ip"\: \{ "\$ref"\: "https\://schemas.unify101.com/common/ipv4/v2.json" \},  
"email"\: \{ "\$ref"\: "https\://schemas.unify101.com/common/email/v2.json" \}  
268 | Chapter 14\: Introducing JSON Unify \}  
\},  
"dataset"\: \[  
\{ "ip"\: "167.16.122.17", "email"\: "example1@gmail.com" \},  
\{ "ip"\: "203.11.113.42", "email"\: "example2@hotmail.com" \},  
\{ "ip"\: "172.16.254.11", "email"\: "example3@protonmail.com" \}  
\]  
We can define a new dataset that only extracts the IP addresses properties, as follows\:  
\}  
\{  
, ignoring the email  
"\$id"\: "https\://example.com/only-ip",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"datasetSchema"\: \{  
"type"\: "array",  
"items"\: \{ "\$ref"\: "https\://schemas.unify101.com/common/ipv4/v2.json" \}  
\},  
"datasetTransform"\: \{ "\$eval"\: "dataset.ip" \},  
"datasetRef"\: "https\://example.com/ip-and-email"  
\}  
Evaluating the previous dataset would result in the following JSON array\:  
\[ "167.16.122.17", "203.11.113.42", "172.16.254.11" \]  
As an example, we can also combine datasetFilter and datasetTransform to  
extract the IP addresses of Gmail users only\:  
\{  
"\$id"\: "https\://example.com/gmail-ips",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"datasetSchema"\: \{  
"type"\: "array",  
"items"\: \{ "\$ref"\: "https\://schemas.unify101.com/common/ipv4/v2.json" \}  
\},  
"datasetFilter"\: \{  
"properties"\: \{ "email"\: \{ "pattern"\: "@gmail\\\\.com\$" \} \}  
\},  
"datasetTransform"\: \{ "\$eval"\: "dataset.ip" \},  
"datasetRef"\: "https\://example.com/ip-and-email"  
\}  
# Aggregation  
An aggregation operation consists of combining dataset entries into a smaller set.  
For example, you may want to combine a dataset of integers into their total sum. In  
big data, one programming model for aggregating datasets—popularized by Apache  
Hadoop—is MapReduce. Figure 14-3 shows a representation of this programming  
model.  
Dataset Lineage | 269 Figure 14-3. MapReduce transforms the entries of a dataset into their desired form \(the  
map operation\), and then combines the results \(the reduce operation\).  
The map operation is already covered by our datasetTransform keyword, so let’s  
introduce a datasetReduce keyword that takes a JSON-e expression to combine two  
entries of the dataset. Mapping a dataset of integers to multiply them by two and  
adding the results may look like this\:  
\{  
"\$id"\: "https\://example.com/multiple-and-add",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"datasetSchema"\: \{ "type"\: "integer" \},  
"datasetTransform"\: \{ "\$eval"\: "dataset \* 2" \},  
"datasetReduce"\: \{ "\$eval"\: "dataset + accumulator" \},  
"dataset"\: \[ 1, 2, 3, 4, 5 \]  
\}  
The result of evaluating this dataset is the integer 30.  
Often, we want to reduce entries based on certain grouping characteristics, such as  
a user identifier. We can simplify this use case by introducing a new datasetGroup  
keyword that declares the grouping characteristic as a JSON-e expression.  
Consider the following dataset that groups and reduces a dataset whose entries  
consist of a user string property and an arbitrary data integer property\:  
\{  
"\$id"\: "https\://example.com/group-by-user",  
"\$schema"\: "https\://schemas.unify101.com/dialect/data-product/v2.json",  
"datasetSchema"\: \{  
"type"\: "object",  
"properties"\: \{  
"user"\: \{ "type"\: "string" \},  
"data"\: \{ "type"\: \[ "array", "integer" \] \}  
\}  
\},  
"datasetGroup"\: \{ "\$eval"\: "dataset.user" \},  
"datasetReduce"\: \{  
"user"\: \{ "\$eval"\: "dataset.user" \},  
270 | Chapter 14\: Introducing JSON Unify "data"\: \{  
"\$flatten"\: \[  
\{ "\$eval"\: "accumulator.data" \},  
\{ "\$eval"\: "dataset.data" \}  
\]  
\}  
\},  
"dataset"\: \[  
\{ "user"\: "foo", "data"\: 1 \},  
\{ "user"\: "foo", "data"\: 2 \},  
\{ "user"\: "bar", "data"\: 3 \}  
\]  
In this example, we group by the content of the user property combine its entries by concatenating the values in their data properties array. The result of evaluating this dataset is\:  
. For each group, we  
as a JSON  
\}  
\[  
\{ "user"\: "foo", "data"\: \[ 1, 2 \] \},  
\{ "user"\: "bar", "data"\: 3 \}  
\]  
If you want to learn more about the MapReduce data programming  
model, we suggest consulting MapReduce Design Patterns by Don‐  
ald Miner and Adam Shook \(O’Reilly, 2012\).  
# Summary  
To cover the data facet of data products, this chapter introduced the ideas behind  
JSON Unify, an extension to JSON Schema. With an implementation that brings  
this vocabulary to life, a schema writer may directly associate a dataset with a data  
product schema, consume datasets while extracting metadata from their entries, and  
extend existing data products while keeping data lineage intact.  
We hope that this chapter gave you a glimpse of the power of JSON Schema and  
inspires you to extend it in creative ways to solve the challenges you will encounter in  
your data transformation journey.  
In Chapter 15, you will learn about designing unified intelligence and how to  
combine the power of JSON Schema with a conceptual design for core unifying  
principles.  
Summary | 271 CHAPTER 15  
# Principles of Designing Intelligence  
The most beautiful thing we can experience is the mysterious. It is the source of all true art  
and science.  
—Albert Einstein  
From the moment our ancestors first gazed upon the cosmic constellations shimmer‐  
ing in the night sky to now—the age of AI, where data scientists look at constellations  
of connected data points in vast graphs of information—humanity’s story is one of  
insatiable curiosity. The value of venturing past boundaries, from the known into the  
unknown and uncharted, lies in forging new pathways of understanding and new  
paradigms of thinking that enable us to better shape the reality we wish to create.  
Congratulations, you have made it to the end of the unifying methodology for data  
strategy and data management. You might be asking, “What’s next?” The answer is  
that now that you, the data champion, have unified your organization or aspects of  
your organization’s data, you are ready to learn the universal principles that serve  
as the fundamental building blocks for designing systems—be they computational,  
organizational, or otherwise—that can be combined in ways that exhibit properties  
ascribed to intelligence itself.  
# Your Unifying Journey So Far  
As you learned in this book, unifying views your organization from a zoomed-out  
perspective as a holistic entity made of connected networks, then zooms in on the  
most granular and fundamental unit, the concept.  
Chapter 4 discussed concept-first design, which aims to remove ambiguity and knowl‐  
edge gaps around concepts by asking nontechnical people to describe the meaning  
and logic of the language they use in a spreadsheet so that the concept can be  
easily translated into a computational format. It is the concept that traverses between  
273 human and machine language, and the goal of concept-first design is to align the  
meaning, context, and structure of the concept across those two domains.  
The process of going back and forth between human and machine definitions,  
seeking greater clarity, accuracy, and alignment, was introduced in Chapter 6 as  
harmonization. Once concepts are sufficiently aligned, the next step is synchroniza‐  
tion \(introduced in Chapter 7\) the act of connecting and scaling concepts across  
processes, rules, and decision making while continuing to maintain alignment.  
Data products, introduced in Chapter 4, create a structure for organizing data to  
implement this paradigm using four facets\: context, meaning, structure, and the data  
itself.  
# A Constellation of Deeper Principles Guides Unifying  
What are the philosophical principles that have been guiding this methodology? In  
this chapter, we will unpack the ways of thinking, or principles, by which data scientists  
and AI researchers go about breaking down complex problems in order to create and  
apply machine learning solutions that exhibit properties of what is commonly called  
intelligence. These principles are meant to be laid out as an assortment of colors in  
your palette to choose from as you design more intelligent systems. Because of this,  
we call them principles of designing intelligence.  
Throughout human history, constellations have served as invaluable navigational  
tools for ancient mariners, seasonal guides for farmers, and even as cultural narra‐  
tives that connected communities. Just as ancient people didn’t need to be astrono‐  
mers to benefit from constellations, you don’t need to be a data scientist to implement  
these principles or understand the beauty of their illuminating light. They’re universal  
touchpoints that help organizations align and prosper.  
If you’re wondering how to innovate and enhance your system’s intelligence, these  
principles can act as guides to help you break down complex problems into more  
manageable parts, thereby fostering team alignment and facilitating compelling  
storytelling.  
In this chapter, you will learn the following principles of designing intelligence\:  
Alignment  
Advocates for harmonizing organizational goals and data to enhance decision-  
making and mitigate risks.  
Information  
Stresses the importance of structuring and quantifying data to understand the  
relationship of uncertainty to information.  
274 | Chapter 15\: Principles of Designing Intelligence Learning  
Identifies error correction as an essential aspect of intelligence, applicable to both  
human and machine learning contexts.  
Integrated simplicity  
Recommends breaking down complex tasks into simpler elements for more  
efficient problem solving.  
Continuums  
Emphasizes the value of converting complex variables into easy-to-understand  
metrics through quantification and calibration.  
State transitions  
Clarifies complex systems by categorizing them into distinct states and defining  
transitions, aiding problem solving and predictive analytics.  
Decidability  
Discusses criteria for how to make effective decisions by balancing critical  
inquiry with actionable steps.  
Heuristics  
making.  
Evaluates the role and ethical implications of using mental shortcuts in decision  
Mastery  
Encourages a balanced approach to learning, underlining the importance of  
self-awareness and wisdom in the quest for expertise.  
Wisdom  
Promotes system designs that facilitate continuous learning, thereby enhancing  
an organization’s collective intelligence over time.  
# 1\. The Principle of Alignment  
“Hidden Threats to Organizations\: A Modern Parallel” on page xiii touched on the  
crippling effects of organizational misalignment, whose root causes are ambiguity,  
knowledge gaps, and blind spots. Imagine data as the circulatory system of an organi‐  
zation; misaligned data can disseminate throughout the structure, starting as minor  
inaccuracies but escalating into major systemic failures.  
# Transforming the Abstract to Concrete  
The alignment principle underscores the necessity of converting abstract ideas into  
concrete formats using concepts, our fundamental building blocks of communicating  
information. This transformation across mediums and contexts must be accessible  
and comprehensible to both humans and machines.  
1\. The Principle of Alignment | 275 Take the concept of red, for example. In data, you can represent this color in various  
ways. Using RGB \(Red, Green, Blue\) syntax, the color can be numerically displayed as  
255,0,0 or simply termed as red. These varying ways to describe concepts are known  
as data representations, but the concept itself, red, has a singular, clear meaning.  
In organizations, humans and machines are continuously transforming concepts. The  
term for this is transduction, which is also a biological phenomenon happening in  
you right now as you read this. As this text enters your eyes \(in the form of light\),  
specialized cells interact with those photons, and proteins convert \(transduce\) the  
products of those interactions into electrical signals, the unified language our brains  
can interpret and act upon.  
# What You See Can Kill You, and the Same Is True in Data  
At the pivotal moment of transduction, the quality of information can either be  
preserved or compromised. When abstract ideas feel like they make sense in our  
minds, it is often because of the assumptions we use to compensate for ambiguity and  
knowledge gaps. Alignment is the harmonization of concepts and synchronization of  
processes using concepts to have accurate and error-free transduction of information  
in representations.  
Using a medical analogy, think of transduction as the point where “infection” can  
occur. Just as a poorly sterilized medical instrument can introduce bacteria into  
a sterile environment, poor transduction can introduce errors into an otherwise  
coherent system, as shown in Figure 15-1.  
Alignment in organizations can be likened to a well coordinated symphony. Tactics  
like harmonization and synchronization are key and require a common reference,  
like a metronome or musical scale. We identified tools for aligning concepts are  
described in Chapters 6 and 7. We recommend using JSON Schema to minimize data  
misalignment. But even without technical expertise, you can apply these principles  
using simple spreadsheets and whiteboards, as we discussed starting in Chapter 4.  
Once your data is aligned, you can further optimize your processes. Shifting from a  
diffuse approach to a laser-focused one can significantly improve your effectiveness,  
as we discussed in Chapters 9 and 10.  
276 | Chapter 15\: Principles of Designing Intelligence Figure 15-1. This visualization embodies the complexities and challenges of problem  
solving. At the outset, the declaration “I understand the problem!” suggests confidence.  
However, ensuing steps—represented by a square, a circle, and a triangle, each leading  
to their specific solutions—converge on a shared “Errors” junction. This bottleneck  
represents confusion and misunderstandings about why the proposed solutions aren’t  
working, symbolized by a star, a hexagon, and a cloud. The narrative is cyclic; until the  
stakeholders are aligned, no matter how much effort the three stakeholders put in, they  
will never reach an efficient and effective solution.  
1\. The Principle of Alignment | 277 2\. The Principle of Information  
Claude Shannon is often referred to as the “father of information theory.” Shan‐  
non’s groundbreaking work has transformed our understanding of communication,  
information, and probability. His seminal 1948 paper, A Mathematical Theory of  
Communication, revolutionized the way we think about information by providing a  
quantitative model for communication.  
In this paper, Shannon proposed that information could be quantified using mathe‐  
matical formulas and introduced key concepts like the bit, or binary digit \(true or  
false\), as a basic unit of information. He explained how to measure the information  
content of a message and how to encode it most efficiently.  
Let’s explore this idea with a simple example\: a guessing game where you’re asked  
to guess a number between 1 and 100. Someone else knows the number, and your  
goal is to identify it by asking as few questions as possible. One efficient way to  
find the correct number is to employ true/false questions, or binary search, such that  
you divide the remaining set of possible numbers in half each time. For example,  
your first question might be, “Is the number greater than 50?” No matter the answer,  
you’ve already eliminated half of the possibilities.  
# Understanding Uncertainty  
Before you start asking questions in the guessing game, there’s a high degree of  
entropy, or uncertainty, because the correct number could be any one of 100 possi‐  
bilities. As you ask questions and receive answers, you reduce this entropy until it  
becomes zero—indicating you’ve discovered the correct number.  
Let’s examine this in more detail. If you had to guess a number between 1 and 100  
and phrased your yes/no questions so as to split the search range in half, as shown  
in Figure 15-2, you are mathematically guaranteed to remove all uncertainty in 7  
questions \(or less\). Let’s examine how this works.  
One of Shannon’s major achievements was to prove that as long as you can reduce  
information to binary structure, you can quantify exactly how much information is in  
any message \(the total amount of entropy\). What makes his contribution remarkable  
is that it is universally applicable to any communication, regardless of the informa‐  
tion’s meaning to a sender or receiver or the medium in which it was sent.  
278 | Chapter 15\: Principles of Designing Intelligence Figure 15-2. Any number selected between 1 and 100 can be deduced with yes/no  
or true/false questions in a deterministic manner by dividing the search space in half  
with each question. The total number of required questions to guarantee removing any  
uncertainty is the amount of information—or, as Shannon called it, entropy. “Binary  
search” is the technical name for this deterministic process, and the term coined by  
Shannon for this process is “reduction of entropy.”  
Here’s a quick explanation of the mathematics. The term log base 2 essentially asks,  
“To what power must we raise 2 to get a certain number, n?” This is particularly  
relevant when our information is in a binary format. In binary, 1 bit of information  
has two possible states\: true or false. Thus, the log base 2 of 100 is approximately 6.64,  
which we round up to 7. In the context of our number guessing game, this means  
that we are guaranteed to deduce any number between 1 and 100 with seven true/false  
questions if we keep cutting the list in half with each question. From Shannon’s per‐  
spective on information theory, the entropy \(or the measure of uncertainty\) resides in  
the entire set of possible values. For our example, this would be the numbers 1–100.  
Now let’s explore how that relates to the unifying core principle that ambiguity,  
knowledge gaps, and blind spots are the root problem that create misalignment in  
organizations\:  
2\. The Principle of Information | 279 • All ambiguity has been removed, since the goal, the question, the answer, and  
•  
numbers don’t have dual meanings.  
• We have a known unknown—the number we need to find.  
•  
•  
• All blind spots have been removed, we have no ambiguity, and we know we have  
a knowledge gap—the known unknown, and we even know how much effort we  
need to complete our goal \(seven steps\).  
Reducing questions to binary \(true/false\) possible values forces you  
to remove a lot of ambiguity, knowledge gaps, and blind spots  
when dealing with concepts and designing processes. It is precisely  
for this reason that success spectrums—explained in Chapter 10—  
structure goals in ordered steps, with binary conditions at each  
state that must be true in order to progress to the next state.  
# 3\. The Principle of Learning  
Failure is the key to success; each mistake teaches us something.  
—Morihei Ueshiba, The Art of Peace \(Shambhala, 1992\)  
Both in the realms of artificial and human intelligence, the capacity for swift error  
correction is often seen as a hallmark of higher intelligence. This is not just about  
avoiding mistakes; it’s about a system’s—or person’s—ability to learn and adapt from  
them. Whether it’s a data algorithm tweaking its parameters after a false prediction  
or an individual openly acknowledging a mistake to make an informed decision  
next time, the speed and effectiveness of this learning loop are key indicators of  
intelligence.  
In the context of organizations and large-scale systems—what we might call the  
macro world—this principle takes on added significance. Capturing data on errors  
is not just a tactic in data science; when applied from a strategic and managerial  
perspective, it enables organizations to analyze errors, minimize uncertainty, and  
optimize decision making.  
# Defining Learning  
But what is learning, exactly, and how might we describe it in a universal way? It  
turns out that learning, like many other properties ascribed to intelligence, can be  
computationally described in universal terms, as shown in Figure 15-3.  
280 | Chapter 15\: Principles of Designing Intelligence Figure 15-3. Even the most abstract questions and ideas—such as “What is learning?”—  
in mathematical formulas can be simplified in visuals, as this illustration shows. Cap‐  
turing data about errors over time is the simplest and most effective way to measure  
learning. It is applicable to humans, machines, teams, and even entire organizations.  
The trick is reaching alignment on another question\: “What is an error?”  
Learning is defined by the ability of a student or machine’s algorithm to reduce errors  
over time. When does learning start? Imagine a child who doesn’t know the rules  
of chess. At first, they make moves that don’t make sense. Over time, they learn the  
rules and make fewer errors. And the faster they \(or any learner such as an AI\)  
can reduce errors over time, the more efficient the learning rate. When educational  
material, or learning experiences, are given to a learner, we can measure the efficacy  
of that content in maximizing the learning rate. For machine learning, this might be  
done through better data, models, or algorithms; for humans, it might be through  
different exercises and communication methods. For those interested in collective  
intelligence, this might be creating user experiences which create feedback loops from  
user interactions that can be used to create better training data.  
Although various forms of intelligence have been identified in  
psychology—such as spatial and musical intelligence—this book  
focuses on a generalized and simple principle of measuring the  
learning efficiency that is applicable to both human and machine  
learning, with a focus on measuring learning across collaborative  
networks in organizations and examining ways that such learning  
may be computationally modeled.  
There are many, many more dimensions to measuring intelligence,  
learning, and so on, some of which are explored further in this  
chapter.  
3\. The Principle of Learning | 281 Defining Errors  
In order to automate or implement learning, we must have a way of defining and  
measuring errors. Following this principles-first approach continues our core unify‐  
ing practice of seeking to identify and minimize misalignment; we are reducing  
ambiguity, knowledge gaps, and blind spots about how people understand errors and  
how they are measured. The act itself of having these conversations greatly reduces  
opportunities for misalignment. Remember\:  
Error = Prediction – Suggestion  
An error occurs when the outcome diverges from our prediction.  
Another term for prediction might be expectation, and another  
term for error might be surprise. When thinking about how to align  
on errors, thinking in this context can spur alignment opportuni‐  
ties on what each team member’s expectations are and how they  
set them. Will errors be captured somewhere? Would a spreadsheet  
work for now? It is far better to have these conversations quickly  
and easily without needing to introduce technical complexity.  
# 4\. The Principle of Integrated Simplicity  
I didn’t have time to write a short letter, so I wrote a long one instead.  
—Blaise Pascal, mathematician in the 1600s; quote often attributed to Mark Twain,  
American author  
The well-known adage “to kill two birds with one stone” is a metaphor for achieving  
multiple goals with a single, thoughtful action. Imagine not only felling two birds but  
also knocking down a bee’s nest to harvest honey; this epitomizes elegant efficiency,  
the art of accomplishing more with less in a graceful manner.  
Simplicity is an art form crafted from four key elements\: complexity reduction, decom‐  
posability, compressibility, and memoization. To bring these abstract concepts to life,  
the next section uses the example of a chef preparing a dish from a recipe. What  
strategies might the chef employ?  
# Complexity Reduction  
The recipe lists myriad ingredients and intricate steps, yet the chef masterfully distills  
this complexity into fewer, essential actions without compromising flavor. This mir‐  
rors the philosophical tenet of Occam’s razor and its computational representation  
Kolmogorov complexity, both of which advocate for using the simplest solution when  
multiple options exist.  
282 | Chapter 15\: Principles of Designing Intelligence Decomposition  
Perhaps the chef lacks certain specialized ingredients. No problem; they skillfully  
deconstruct what’s available into fundamental components, storing any extras for  
future culinary adventures. For instance, rendered duck fat from one dish is a versa‐  
tile base for other recipes.  
# Compression  
The chef ’s focus is on reusability and efficiency. Picture them slicing an onion\:  
first halving it, then stacking the layers before making incisions. One stroke yields  
multiple cubes, maximizing output with minimal effort.  
# Memoization  
Memoization is a programming technique used to optimize computational efficiency  
by storing the results of expensive function calls and returning the cached result  
when inputs reoccur. In nontechnical terms, when a problem is solved, the problem  
and solution are stored so that they can be reused rather than solving the problem  
again.  
In essence, memoization serves as a memory mechanism that remembers past calcu‐  
lations to avoid redundant work. This would be like our chef putting up posters  
of how to best solve problems, so that everyone has access to the same quick and  
accurate solutions.  
# Integrating in Communication Networks  
The crux of integrated simplicity lies in discerning which strategies of complexity  
reduction, decomposability, compression, and memoization to employ for maximum  
impact, recognizing the nodes of interconnection among these elements and weaving  
them together to unlock unprecedented value.  
In the context of communication networks within an organization, memoization  
becomes a collective intelligence strategy. Just as computer algorithms store prior  
results for quick retrieval, an organizational network can maintain a “memory bank”  
of solved problems and effective solutions.  
By identifying interconnected nodes, you can break down larger, more intricate  
problems into smaller, more digestible tasks. Through the strategic application of  
complexity reduction, decomposability, and compression, you can craft solutions  
that are not only streamlined but also extraordinarily effective at solving a range of  
interconnected challenges.  
4\. The Principle of Integrated Simplicity | 283 5\. The Principle of Continuums  
Measure what is measurable, and make measurable what is not so.  
—Galileo Galilei, 17th century, known as the father of observational astronomy  
In business, quantification is more than just a means of measurement; it is the  
cornerstone for decision making. When we quantify something, we distill its com‐  
plexity into a single, easily understandable dimension. Whether it’s the durability of a  
product or a customer satisfaction score, these one-dimensional measures provide a  
common language for evaluation.  
Let’s explore the utility of continuums as a framework for evaluating complex vari‐  
ables. A continuum quantifies and calibrates these variables on a universally under‐  
standable scale which creates a shared language for evaluation. Think of it as setting  
the boundaries from the worst conceivable outcome to the pinnacle of excellence,  
much like zero degrees Kelvin is the theoretical lowest possible temperature.  
A continuum provides a baseline that allows for a more nuanced understanding of  
where a particular measurement falls\: whether it’s closer to good or bad, efficient or  
inefficient. When a measurement is plotted on a continuum, you can observe trends  
or patterns more transparently, leading to more effective decision making.  
# Making Things Measurable  
The true brilliance of breaking down complex variables into measurable dimensions  
comes from computational analysis. Once variables like customer satisfaction, prod‐  
uct quality, and employee performance are translated into numerical data points,  
they become compatible with rigorous computational methods, including machine  
learning algorithms. Not only can you assess the current state of affairs, but you can  
also predict future outcomes, providing an invaluable asset for strategic planning.  
# The Dangers of Misusing Measurements  
What gets measured gets managed.  
—Peter Drucker, an important figure in management consulting  
Measurement is a double-edged sword in business. Managers sometimes measure  
things that aren’t important because the act of measuring becomes evidence of their  
managing! In other words, if they know how their performance is rated, they may  
skew goals, decisions, or priorities to keep their performance metrics up. Be careful  
and open-eyed about why something is measured and how measurements will be  
used.  
284 | Chapter 15\: Principles of Designing Intelligence The key to effective measurement lies in selecting the right metrics to measure and  
asking the question, “What are the KPIs of your KPIs?” Creating and managing KPIs  
is resource intensive, and their value diminishes if they don’t serve a continuous  
purpose, which underscores the need to approach measurability as a heuristic\: a  
guideline that aids in converting abstract ideas into quantifiable metrics.  
For a deeper dive into measuring what truly matters, review the  
problem with problems, a concept explained back in Chapter 1,  
and how success is relative to defining the measure in Chapter 10,  
which covers success spectrums.  
# A Continuum Example for a Control Strategy Problem  
Let’s use an example where a data champion has been asked to examine a data man‐  
agement problem. Some teams are creating little to no documentation for the datasets  
they create; others are creating their own semantic definitions for data columns;  
others are trying to use datasets from other teams, unaware that the same terms have  
different meaning. These differing methods result in teams across departments being  
unable to share insights or learn from each other’s efforts—or worse, creating reports  
that whose insights appear to be data driven but are not.  
This situation might be described as a systems control strategy, which is a fancy way  
of architecting processes to minimize errors and risks. How might a data champion  
begin to understand, let alone tackle, this problem?  
One strategy might be to create a continuum in order to understand the situation  
relativistically. On one end of the continuum, the data champion places the current  
situation, complete decentralized control—where there are no centralized controls and  
everyone makes their own decisions or controls for data management.  
On the other end of the spectrum, the data champion places full centralized control,  
where every data management decision is controlled by a hierarchical data manage‐  
ment authority. This approach, shown in Figure 15-4, forces our data champion to  
remove ambiguity, knowledge gaps, and blind spots in conceptualizing the problem  
and creates a shared artifact that can be used in conversations with leaders.  
The data champion begins to ponder the issues with full centralized control; taxono‐  
mists become bottlenecks, leading to teams going behind their backs to create data,  
and not everyone has the time or resources required to learn the complex data  
management tools used in the enterprise-level solutions that full centralized control  
requires.  
5\. The Principle of Continuums | 285 Figure 15-4. An example of a continuum approach to begin to convert abstract ideas  
into something quantifiable. In this example, the continuum is of data control strategies.  
On the left side is the extreme of full autonomy, where anyone is able to create any  
data definition, and on the other lies full control by a centralized, top-down, hierarchical  
taxonomy manager. This visualization might be useful for beginning to ask, “Where is  
your organization on this spectrum?” and “How might we measure this?”  
Think about how you would design the continuum. Does it represent the inefficiency  
of each control strategy? Perhaps it relates to how many people are creating high-  
quality data with proper data management practices. Or perhaps the continuum  
represents the number of people who have a preference. There are many ways to  
design it, and each continuum represents a singular dimension of the duality between  
these two paradigms.  
A continuum representing the different types of problems each has might be useful.  
For example, the decentralized approach might be characterized by chaos, poor  
quality, and no standardization, whereas the centralized approach might have bottle‐  
necks, limited innovation, and people breaking the rules to define what they need.  
Conceptualizing these continuums gives you a more measurable way to attack the  
problem.  
The principle of continuums first appeared in Chapter 10, when  
you learned about success spectrums.  
# 6\. The Principle of State Transitions  
Understanding systems—whether computational, organizational, or even systems  
of individual behavior—requires a deep dive into state transitions. This principle  
describes the use of a state machine to distill complex problems into recognizable  
states and clearly defined transitions between those states.  
286 | Chapter 15\: Principles of Designing Intelligence The sheer complexity of today’s challenges can be overwhelming. Adopting the lens  
of a state transition system simplifies these complexities by breaking them down into  
manageable states and transitions. The benefit is twofold; you get to identify where  
you are \(the current state\) and what it takes to get to where you want to be \(the target  
state\).  
# A Simple State Machine  
Figure 15-5 illustrates how a thermometer’s sensor triggers a heater’s state transitions.  
Figure 15-5. A simple state machine contains a finite number of nodes in different states  
—in this case, the heater being ON or OFF—and the set of conditions that must be true  
in order to move to the next state.  
Take an organizational workflow as an example. Visualize it as a sequence of states—  
inception, development, review, and completion. What actions or conditions must  
be satisfied to move from one state to another? Is it managerial approval? Is it the  
completion of a test? Defining these success conditions can eliminate ambiguity and  
increase efficiency.  
# Simplifying State Transitions  
In the world of data science, predictive modeling can offer insights into the proba‐  
bility of moving between any two states. \(While this is a simplified way to think  
about designing ways to algorithmically think of state transitions, it is helpful as a  
principle.\) You need the current state and an action as inputs, and a way to output  
new states\:  
State transition = f\(Current state, Action\) → New state  
In this formula, f is the function that encapsulates the rules and conditions for  
transitions between states.  
A more complex version is one in which a system or a user can take an action.  
This allows for adaptive and personalized experiences and allows for manual and  
automated processes. Consider this model\:  
State Transition = f\(Current state, User action, System action\) → New state  
6\. The Principle of State Transitions | 287 In this model\:  
Current state  
This is the state of a system as it currently exists.  
User action  
Encapsulates any actions or input provided by the user, such as the user manually  
turns on the heater.  
System action  
Encapsulates actions taken by the system in response to the current state and user  
action. This could be something as simple as\: if the user turns on the heater, ask  
the user if they want it to automatically shut off in a couple of hours.  
By applying the principle of state transitions, you ensure every stakeholder under‐  
stands the what, why, and how of change, making problem solving transparent and  
effective.  
# 7\. The Principle of Decidability  
Life is a series of choices, much like a chess game or a self-driving car navigating  
through traffic. Making the right decision requires more than just gut feeling—  
it requires a structured approach. Enter the principle of decidability, inspired by  
the field of reinforcement learning, an approach to designing artificial intelligence  
systems.  
# What Is Decidability?  
Decidability isn’t about creating complicated mathematical models; it’s about using  
three clear-cut questions to guide you\:  
• What problem-solving strategy best improves decision making?  
•  
• How can you determine if you’re ready to make an informed decision?  
•  
• How can you eliminate ambiguity and knowledge gaps?  
•  
It’s entirely OK for team members not to have answers and not want to use a formal  
mathematical framework for decision making. However, this principle is incredibly  
important to having conversations that serve our root principle\: increase alignment  
by removing ambiguity, knowledge gaps, and blind spots. Providing a framework for  
determining people’s approaches to decision making can spur conversations about  
people’s beliefs regarding the likelihood of outcomes and the impacts of decisions.  
288 | Chapter 15\: Principles of Designing Intelligence Formal decidability is a mathematical concept that is mostly used  
in academic settings to discuss the limitations of algorithms and  
computing systems. In unifying, the principle of decidability is  
geared toward decision-making processes in organizational con‐  
texts. Here, decidability refers to a framework or model designed to  
enhance the quality, reliability, and ease of organizational decision  
making.  
# Two Key Approaches to Problem Solving  
Understanding the nature of your decisions is crucial. Drawing from AI’s reinforce‐  
ment learning, you should ask\:  
•  
• Do I have the right information? Without the right data, even the smartest minds  
can falter. In the quest for better information, we engage in what’s known as  
exploratory problem solving.  
•  
• How can I best use information? Striking a balance between exploration—trying  
new things—and exploitation—sticking with what works—is critical. Too much  
of either leads to inefficiency.  
# Making Informed Decisions  
When humans navigate the world, we often use maps or GPS. In AI, one such  
navigation tool is the Markov decision process \(MDP\), which combines the state  
transition principle with probabilistic thinking.  
The following are important terms in MDPs\:  
States  
Like GPS locations representing decision points  
Actions  
The routes you can take between states  
Transition probabilities  
The odds of going from one state to another  
Rewards  
Benefits or penalties associated with each action  
Figure 15-6 demonstrates a way to visualize an MDP decision-making scenario given  
the following \: a person wakes up and has to decide between watching TV or exercis‐  
ing, considering probabilities and rewards. While the example shows mathematical  
values for rewards and probabilities of taking actions, it is entirely valid and useful to  
make things simple for team members to have important conversations\: Is outcome  
\(state\) X likely or not? Why do you think that way? What are options \(action paths\) that  
7\. The Principle of Decidability | 289 can be taken in any one state? What are the benefits or negative consequences of any  
state?  
Figure 15-6. A simple MDP visualization. The person is in a resting state \(S1\) with a  
reward of 0 and has an 80% chance of watching TV \(S2\) with a reward of –1, or a 20%  
chance of exercising \(S3\) with a reward of +2. Both states 2 and 3 have a 100% chance of  
resting afterward. P stands for probability, R stands for reward, and S stands for state.  
# Real-World Decidability to Reduce Misalignment in Teams  
Imagine you’re a CEO. Your perspective is unavoidably skewed, often high level  
and clouded by politics. Decision making is further complicated if your team isn’t  
equipped to interpret data.  
Decidability reduces misalignment by asking your teams to explain the following in  
plain language\:  
• Have we defined processes, states, and value \(rewards\) in straightforward terms?  
•  
•  
• Do we know the probabilities of different outcomes? Can we make educated  
guesses?  
• Is there a unified decision-making framework, or are we just winging it?  
•  
A practical approach is to use an MDP as a common language for decision making.  
MDPs help everyone visualize the problem and the possible outcomes of various  
decisions. If team members struggle to articulate their version of an MDP, it usually  
indicates gaps in knowledge or understanding. This lack of clarity can be a red flag,  
suggesting that the team is not yet ready to make an informed decision.  
# 8\. The Principle of Heuristics  
Heuristics gained prominence through the pioneering work of psychologists Amos  
Tversky and Daniel Kahneman. These mental shortcuts enable swift decision making  
290 | Chapter 15\: Principles of Designing Intelligence in complex scenarios. Although highly efficient, they carry the risk of cognitive biases  
and decision-making errors.  
Here are some examples of heuristics that are dangerous in business and leadership\:  
Availability heuristic  
Frequent exposure to a product can create an inflated perception of its quality,  
leading consumers to make suboptimal purchasing decisions.  
Sunk cost fallacy  
Commonly observed in business and research settings, this heuristic encourages  
continued investment in failing projects due to the weight given to already-  
incurred costs.  
Anchoring heuristic  
The reliance on initial information can disproportionately influence subsequent  
judgments and decisions.  
Confirmation bias  
This cognitive bias prioritizes information that supports preexisting beliefs while  
neglecting or dismissing evidence to the contrary.  
Intergroup bias  
This bias manifests when actions are evaluated differently depending on the  
group to which the actor belongs, leading to unfair assessments or discrimina‐  
tory behavior.  
Heuristics and biases, though closely related, serve different roles  
in cognitive psychology. A heuristic is a mental shortcut or rule of  
thumb that facilitates quick decision making and problem solving.  
It’s a mechanism our minds use to simplify complex situations and  
make them manageable.  
On the other hand, a bias is a systematic error or skewed perspec‐  
tive that arises from the use of heuristics. While heuristics aim to  
enhance efficiency, they can sometimes lead to biases—deviations  
from rational or objective judgment. In essence, heuristics are the  
cognitive tools, and biases are the potential pitfalls or errors that  
can occur when using those tools.  
# Awareness and Ethical Considerations  
Understanding the ethical implications of using heuristics is paramount. While some  
industries like educational software aim to harness heuristics to facilitate learning,  
other domains such as marketing, advertising, and social media often exploit these  
cognitive shortcuts to manipulate public perception.  
8\. The Principle of Heuristics | 291 Take, for example, the like feature on social media platforms. This feature taps into  
the social proof heuristic, which suggests that people are more likely to engage with  
a post if it has already received a significant number of likes or approval from  
others. While the feature’s initial intent may have been to encourage positive social  
interaction, it has also been criticized for fostering addictive behaviors, reinforcing  
confirmation bias, and creating echo chambers. In this case, understanding the eth‐  
ical considerations is crucial, as the design choice has clear implications for user  
behavior and well-being.  
No one is immune to biases introduced by heuristics—not even experts in fields  
like science and psychology. These mental shortcuts are deeply embedded in our  
cognitive processes, serving as efficient tools for navigating complex environments.  
However, this efficiency comes at the cost of potential biases and ethical pitfalls. Thus,  
it’s imperative to be aware of how heuristics may shape our perspectives and influence  
our actions, and to thoroughly examine and consider the ethical implications of  
heuristics before using them in systems.  
# Connection to Decision Making in Business  
Biases influenced by heuristics can distort both personal and professional judgments,  
often leading to flawed or even detrimental decisions. Understanding the relationship  
between heuristics and biases enables us to aim to make more objective and groun‐  
ded choices.  
In organizational settings, biases can exacerbate discord. A team collectively suc‐  
cumbing to the same bias amplifies its effect, while varying biases among team  
members can result in conflicts as each interprets data through their own skewed  
lens. Inertia and heuristics are often to blame for glaringly inefficient processes or  
decisions within an organization. They create a kind of decision-making autopilot  
that hampers innovation and optimal outcomes.  
The challenge lies in our innate tendency to rationalize decisions after the fact,  
defending choices made without conscious deliberation. Adopting data-driven  
approaches can mitigate these vulnerabilities, fostering more objective and unified  
decision making.  
# 9\. The Principle of Mastery  
In the realms of cognitive psychology and education, Bloom’s taxonomy, shown in  
Figure 15-7, serves as a seminal framework that categorizes knowledge into hierarchi‐  
cal levels, from the basic act of remembering information to the advanced ability to  
create new knowledge.  
292 | Chapter 15\: Principles of Designing Intelligence Figure 15-7. Bloom’s taxonomy serves as a hierarchical framework that outlines vari‐  
ous levels of cognitive mastery essential for effective educational or learning design.  
Beginning with the basic skill of “Remember,” the taxonomy scales upward through  
increasingly complex cognitive abilities, culminating in the pinnacle of “Create.”  
# Levels of Mastery in Knowledge  
The hierarchy of Bloom’s taxonomy provides a structure for both evaluating a  
learner’s current level of mastery and designing targeted educational experiences to  
advance them to higher levels.  
Here are the definitions of each level\:  
Remember  
This initial level focuses on the simple recall of information. While foundational,  
it is the most rudimentary form of learning.  
Understand  
This level involves comprehending and interpreting the information learned,  
making the knowledge more meaningful.  
Apply  
Here, learners are capable of utilizing the understood information in new situa‐  
tions, showcasing a functional mastery of the material.  
9\. The Principle of Mastery | 293 Analyze  
This level entails dissecting complex sets of information to understand their  
underlying structure, signifying a higher level of cognitive engagement.  
Evaluate  
More advanced still, this stage requires critical thinking skills to assess the valid‐  
ity of arguments and even to evaluate others’ level of understanding, thereby  
demonstrating depth in cognitive ability.  
Create  
Considered the zenith of Bloom’s taxonomy, this stage goes beyond all previous  
levels. Here, learners can synthesize new forms of knowledge, innovate, and  
express novel ways of seeing and experiencing what they have learned.  
When a learner can demonstrate knowledge of a topic across these levels without  
error, they have achieved mastery.  
# Strategies for Mastery  
The goal of this principle is to create a clear pathway to attain mastery by seeking to  
eliminate any ambiguity, knowledge gaps, and blind spots about any knowledge or  
skill.  
The following are techniques for pursuing mastery using the example of music \(the  
creation and experiencing of which both require knowledge\)\:  
Slowing down  
Reduce information over time to reduce complexity.  
Intentional practice  
It is not enough to practice; you have to practice playing the correct note at the  
right time, or you are practicing incorrectly.  
Immediate feedback  
Immediate feedback allows for quick corrections and continuous improvement.  
Granularity  
Paradoxically, as you attain higher levels of mastery, levels of granularity get  
deeper and smaller, until you reach your limits of conceptual building blocks.  
Automaticity  
Aim to play a solo without needing to look; practice relaxing completely so that it  
is automatic and effortless.  
Breaking down actions into singular steps  
Breaking down the music into single notes and chords over time is similar to our  
principles of continuums and state transitions.  
294 | Chapter 15\: Principles of Designing Intelligence Universal guides  
Learning to listen and synchronize one’s efforts to a trusted third-party reference,  
such as a metronome, is essential for accuracy.  
Foresight  
The ability to foresee, plan, and even improvise multiple steps ahead in a given  
process. This allows you to navigate complex situations with a heightened sense  
of control and adaptability.  
Modalities  
The ability to translate your skills and knowledge across various forms, such as  
visualizing musical notes as geometric shapes or adapting your musical ability to  
different instruments and vocal techniques.  
All of these strategies can be designed into your user experiences, architected in  
data structures, and programmatically implemented in applications. For example,  
decomposition from the principle of integrated simplicity is highly related to breaking  
down actions into singular steps, and immediate feedback can be a design strategy.  
Intentional practice relates to success spectrums \(Chapter 10\) and the concept compass  
\(Chapter 6\).  
In Chapter 16, which discusses four pillars of intelligence in organizations, you’ll  
discover how to apply these principles of mastery to the design and architecture  
of intelligent systems. These principles are scalable; they can enhance learning on  
individual and organizational scales.  
# 10\. The Principle of Wisdom  
The beginning of wisdom is the definition of terms.  
—Socrates  
The principle of wisdom brings together all the other principles for designing intelli‐  
gence. Wisdom is more than an individual pursuit; it is the collective perspective  
of the entire organization, treating the organization itself as an intelligent learning  
entity made up of intelligent learning entities \(humans and machines collaborating  
together\).  
In unifying, the definition of wisdom is the ability to self-optimize the relationship  
between knowledge and reasoning capabilities across all levels and connections in an  
organization.  
Wisdom is how an organization develops the self-awareness to recognize limitations  
and knowledge gaps and map strategies for self-optimization. In other words, wis‐  
dom seeks ways to develop mastery for the collective organization and all of its  
components. Wisdom propels us to seek further learning, continually updating our  
10\. The Principle of Wisdom | 295 understanding and adapting to new challenges. It is not just about solving problems  
efficiently; it is about understanding what problems ought to be solved and why.  
In the face of organizational inefficiencies—often driven by politics, budgetary con‐  
straints, or siloed perspectives—this principle advocates for intelligence-first decisions.  
Given the enormity of decisions and the volume information flow in organizations,  
what’s needed is often wisdom at scale.  
Integral to this principle are continuous feedback mechanisms that add a layer of  
meta-learning, allowing systems to adapt and evolve. Feedback loops collate data  
across processes, fostering dynamic adaptability that’s essential for navigating com‐  
plex and uncertain landscapes.  
Like the principle of alignment, the principle of wisdom, which  
offers the capability of interoception for organizations, comes from  
the unifying methodology, and will be explored in more depth in  
Chapter 16.  
# Summary  
This chapter has provided an in-depth exploration of 10 indispensable principles for  
the design of intelligent systems. These principles traverse a wide array of topics,  
ranging from the alignment of organizational data management to the strategic use  
of information theory for enhanced decision making. We scrutinized the vital role  
of error correction as an intelligence metric and investigated tactical approaches to  
problem simplification.  
Moreover, this chapter wove together insights from both human and machine intel‐  
ligence to identify universal principles. In the realm of machines, we explored strate‐  
gies gleaned from Claude Shannon’s information theory; for humans, we described  
principles of mastery \(drawn from educational psychology\) and the nuanced use of  
heuristics \(from cognitive psychology\).  
The principle of wisdom, is the connective tissue between all of these diverse princi‐  
ples. It underscores the importance of collective mastery and lifelong learning as  
crucial elements in intelligent organizational decision making. As we move forward,  
we will expand the notion of mastery to include both user experiences and predictive  
systems, using the framework of Bloom’s taxonomy as a guide.  
Chapter 16 explores the next phase\: the development of unified intelligence within  
your organization. If the principles of designing intelligence are your North Star  
in this unifying journey, then achieving unified intelligence is your next critical  
milestone.  
296 | Chapter 15\: Principles of Designing Intelligence CHAPTER 16  
# Toward Unified Intelligence  
Chapter 15 introduced 10 essential principles for designing intelligence to equip data  
champions for the next phase of their journey\: going beyond data management into  
the realm of actionable intelligence strategies. In this final chapter, we elevate the  
discourse by exploring the key approaches that organizations can adopt to seamlessly  
weave artificial intelligence \(AI\) and foundational principles of designing intelligence  
into their operational fabric.  
In this chapter, we demystify three cornerstone approaches to intelligence that are  
redefining modern enterprise strategies, each offering a unique blend of artificial and  
human elements\:  
Functional artificial intelligence  
A pragmatic approach focusing on problem solving through the targeted deploy‐  
ment of AI or ML. This strategy homes in on specific operational functions,  
driving measurable gains in efficiency.  
Collective intelligence  
This strategy often employs autonomous AI agents like drones or groups within  
organizations, and has parallels to swarm intelligence.  
Collaborative intelligence  
Capitalizes on human-guided choices and machine-generated data insights, cul‐  
minating in a self-perpetuating cycle of improvement for both individual deci‐  
sion making and organizational efficiency.  
297 The subsequent sections of this chapter will guide you through the application of  
a unified framework to these intelligence strategies, integrating them with the 10  
principles of intelligent design introduced in Chapter 15\:  
Unified intelligence  
An ecosystem approach of collective and collaborative intelligence—to remove  
ambiguity, knowledge gaps, and blind spots; learn how to anticipate users’ knowl‐  
edge needs; automate and augment processes in the search for the ultimate  
advantage in efficiency  
Codifying principles of intelligence  
Examines how to codify the 10 principles into applications and integrate them  
into unified intelligence strategy  
# Functional Artificial Intelligence  
AI promises unprecedented opportunities for innovation and efficiency, but accord‐  
ing to a Gartner study, an astonishing 80% of AI projects never see the light of day.  
Among those that do, profitability is roughly a coin toss \(60%\). This glaring gap  
between expectation and reality signals a pressing need to rethink our approach to AI  
in business settings.  
# Your AI Is Only as Good as Your Data  
As you’ve read our book, you’re already familiar with this indispensable truth\: quality  
data is the backbone of any successful AI initiative. Ambiguity, knowledge gaps, and  
blind spots can doom an AI project from the outset. Thus, if you’re undertaking an  
AI project, it’s crucial to preemptively tackle these issues to ensure your venture’s  
success\:  
Unpack every assumption  
Understand that the data your organization has accumulated is not the starting  
point; it’s a result of past decisions made by different teams and leaders. These  
decisions carry with them a host of assumptions that must be unpacked.  
Start with knowledge  
success?  
What information do you need for which objective, and how do you measure  
Use a data product approach  
Data products are introduced in Chapter 4, and using the four facets of data  
products gives everyone a specific playbook for identifying necessary informa‐  
tion about your data\: context, meaning, and structure.  
298 | Chapter 16\: Toward Unified Intelligence Beware Illusions Within Vetting Processes  
While executives might think they’re engaging in thorough vetting processes while  
making decisions within the confines of allocated budgets and resources, this  
approach can be misleading. Vetting strategies concerning talent and vendor part‐  
nerships can be complex, unduly influenced by leaders and team members’ internal  
politics, biases, and preexisting relationships. Typical corporate strategies such as pro‐  
curement teams can also have these challenges, which creates bottlenecks. Moreover,  
these decisions are often made based on a misunderstanding of the actual challenges  
or objectives at hand, leading to misalignment between strategy and execution.  
Embracing a unifying approach provides a deep understanding of the intricate rela‐  
tionship between data and business value. While no process is immune to flawed  
decision making, a unifying strategy aims to make the evaluation as objective as  
possible. Ignoring data hygiene from the get-go sets you on a path to failure.  
# Question Assumptions  
Here’s a real-life example from one of the authors. Ron was working on a project  
involving a huge, multimillion dollar digital transformation of a department that  
provided support for trouble tickets. The department was a pure cost center to the  
CFO with little business value.  
Using the unifying approach, questioning assumptions, and tracing back questions  
with a knowledge framework and data product approach, it was discovered that  
about 60% of the trouble tickets were because of business logic errors and bugs on the  
website! Instead of taking years and millions of dollars to develop an AI to implement  
robotic process automation \(RPA\) to reduce headcount expenses—a downstream  
strategy—fixing the website was a project that could be accomplished with lightning  
speed and minimal cost in comparison.  
# Collective Intelligence  
Picture a squadron of drones flying in perfect harmony, as illustrated in Figure 16-1.  
While each drone operates autonomously through AI, they all work toward a com‐  
mon goal guided by a centralized system and directed by human oversight.  
Collective Intelligence | 299 Figure 16-1. Drones in a collective intelligence paradigm have enough autonomy to  
manage their own controls, but their goals are controlled via centralized system\(s\) and  
an intelligence hub access API, which are managed by humans.  
When humans vote collectively to make decisions, that is also known as collective  
intelligence. You may have heard of the phrase “the wisdom of the crowd,” which is a  
phenomenon where the aggregate opinion or decision of a group tends to be more  
accurate than the opinion of an individual within that group. This concept can be  
seen in action in contexts such as public opinion polling, prediction markets, and  
even game shows. For example, imagine participating in a game where people try to  
guess the number of marbles in a jar. While you might correctly believe that although  
individual guesses can vary widely, and are often wrong, the average guess of the  
group often comes remarkably close to the actual number! Collective wisdom can  
outperform individual judgment.  
But collective intelligence is not confined to human populations or robots. As previ‐  
ously mentioned, AI agents operating in a networked environment can showcase  
collective behaviors. For instance, AI algorithms in the stock market can evaluate  
massive amounts of data quickly and predict potential trends by working in tandem.  
Such collective operations allow these algorithms to provide more nuanced and  
sophisticated insights than if they were operating independently.  
300 | Chapter 16\: Toward Unified Intelligence Collaborative Intelligence  
Collaborative intelligence bridges the gap between human intuition and machine  
precision at scale. In today’s world, where technology and human expertise are  
increasingly interwoven and data complexity is skyrocketing, the value of collabora‐  
tive intelligence cannot be overstated.  
Figure 16-2 shows an example of a collaborative intelligence paradigm. A user  
prompts a system to automate a task\: scanning emails to produce reports. Various  
AI agents execute this, educating humans in the process. Simultaneously, these AI  
agents relay their discoveries to a central hub, promoting collective learning. While  
collective intelligence emphasizes group dynamics, collaborative intelligence under‐  
scores the symbiotic relationship between humans and machines.  
Figure 16-2. A user’s request, channeled through an API, where an intelligence hub  
can use AI agents or any ML recommender system to generate the required report.  
Concurrently, the agents relay the request and their insights to a centralized intelligence  
hub.  
Collaborative Intelligence | 301 Machine teaching refers to designing applications aimed at fast-tracking ML. At  
the heart of collaborative intelligence lies the continuous feedback cycle, wherein  
machines adapt based on human choices and preferences. The key to building collab‐  
orative intelligence is maximizing the amount of data generated that is preoptimized  
for machine learning, which often can be greatly aided by design-related, goal-setting  
choices \(as discussed in Chapter 10 with success spectrums\).  
Ideally, a machine’s predictive capabilities are continuously refined by human exper‐  
tise, and an organization’s workforce is continuously getting better tools and recom‐  
mendations to aid in decision making.  
# Unified Intelligence  
When data is unified \(as you learned to do in Chapters 1–14\), magic happens.  
Powerful new capabilities unlock\: collective and collaborative intelligence that have  
integrated unifying’s data hygiene practices and its principles of designing intelligence  
in their DNA.  
This ecosystem of intelligence still follows the basic practices of removing ambiguity,  
knowledge gaps, and blind spots, all of which benefit—and benefit from—the ability  
to augment and automate the creation, curation, and dissemination of knowledge,  
whether from the holistic collective view of the organization \(zooming out\) or the  
perspective of an individual in a specific context \(zooming in\). This ability is based in  
the principles of wisdom and mastery from Chapter 15.  
Unified intelligence has a few key advantages—collaborative learning networks, per‐  
sonalized knowledge, and scale-free causality—that enable an organization can con‐  
tinually self-optimize at all scales, both internally and externally.  
# Collaborative Learning Networks  
In a collaborative learning network, human and machine intelligences come together  
to learn from each other. These networks are multinodal, with each node being a  
participant \(either human or machine\) in the learning process. Through ML algo‐  
rithms and human insights, knowledge is accumulated, shared, and applied across the  
network. This approach accelerates learning and adaptation and democratizes access  
to knowledge; insights gained at one node can be disseminated to others, enriching  
the entire network and fostering innovation.  
302 | Chapter 16\: Toward Unified Intelligence For example, consider a city where each government department and agency has its  
own unique data standards, making it difficult for them to learn from one another  
effectively. Contrast this with another city where all agencies and nonprofit organiza‐  
tions use a unified data model. In the second scenario, entities can seamlessly share  
insights and information, enabling collective, organization-wide learning.  
# Personalized Knowledge  
Personalized knowledge enhances collaborative intelligence with the principle of mas‐  
tery from Chapter 15. Its focus is predicting and preventing mistakes, like a tutor  
guiding a student. This requires an intelligent system able to identify knowledge gaps,  
implement intervention strategies, and learn precisely what works for whom in which  
situation and why. The term for this in education is personalized learning. \(For a  
refresher on a more formal definition of knowledge gaps and interventions within a  
knowledge framework, please review Chapter 10.\)  
KPIs  
Metrics assessing user progression efficiency and effectiveness.  
System state  
Decisions by the system to optimize user experience, such as A/B test variations.  
User state  
Archiving of user’s immediate actions for future personalized engagements.  
Objectives  
Goals for each stage in a user’s journey and the overarching process aim.  
Success criteria  
Computational definitions for successful user state transitions.  
Value  
Evaluates and represents stages in user journeys to the value of organizational  
aims.  
As an example, consider Figure 16-3, where a user is about to take an action in  
a defined action space, as explained in the context of Markov decision processes  
\(MDPs\). \(See Chapter 15’s discussion of the principle of decidability for a refresher on  
MDPs and the principle of state transitions.\)  
Unified Intelligence | 303 Figure 16-3. A sophisticated decision-making process within a collaborative intelligence  
system. The process is a series of interconnected stages, each playing a vital role in  
determining user actions and system recommendations.  
The following is a list of the new elements in this state transition visualization\:  
Observer  
This AI agent captures the user’s potential actions at Decision point 2.  
Decision sherpa  
Predicts the most optimal state for the user based on the observed data and uses  
its understanding to influence the user toward the optimal state. Think of it as a  
sherpa helping move the user to the right branch of the tree.  
Nudge  
The system then generates recommendations, depicted here by the light bulb  
icon. Recommendations are tailored interventions meant to guide the user  
toward the best decision. The efficacy and relevance of these nudges are crucial,  
as they can directly influence the user’s decision making.  
Intelligence Hub API  
All of the interactions are sent via an API to an intelligence hub to undergo  
evaluation. Here, the system seeks answers to pivotal questions\: Was the recom‐  
mendation followed? Did it result in a better outcome? Was the nudge effective?  
304 | Chapter 16\: Toward Unified Intelligence Was the recommendation accurate? This feedback loop ensures that the system is  
continuously learning and refining its predictions and recommendations.  
Sherpas are renowned for their mountaineering expertise and their  
intimate knowledge of the local terrain in the high Himalayan  
regions of Nepal. The term sherpa has evolved to generally denote  
a guide or an expert adept at navigating challenging paths, particu‐  
larly within mountaineering contexts.  
A decision sherpa is a process or algorithm designed to optimize  
decision making by guiding or influencing traversal through deci‐  
sion trees or other structured processes that enhance decision  
making in fields like data science or management. Such a sherpa  
embeds knowledge directly into the decision-making process.  
# Anticipatory Design\: Personalization and Digital Twins  
Digital twins serve as virtual replicas of physical systems, capturing real-time data that  
can be used for monitoring, analysis, and computational influence. With the power  
to simulate real-world scenarios and interactions, digital twins amplify the potential  
of predictive systems by encapsulating user behaviors, preferences, and interactions,  
leading to more tailored and precise user experiences.  
To leverage the power of digital twins, adhere to the structured knowledge format.  
Detail goals, system states, user states, efficacy metrics, and more. Each interaction  
with a digital twin is unique, allowing you to amass a repository of behavioral data.  
Over time, and with enough data, these patterns can be harnessed for predictive  
insights and precision personalization.  
The key advantage of personalization and digital twins is the ability to create antici‐  
patory design experiences. An example of this would be anticipating what a user is  
searching for and ranking the different questions they might ask in order to augment  
searches.  
This technique can be applied to any type of task completion, as long as the system  
understands the goal, the action space, and the possible system states so that it can  
learn how to self-optimize organizational efficiencies.  
Unified Intelligence | 305 Codifying Principles of Intelligence  
Talk is cheap. Show me the code.  
—Linus Torvalds  
In the journey to unifying intelligence in your organization, the foundational princi‐  
ple from Chapter 15 is alignment, with each principle adding an additional layer,  
much like the pyramid in Bloom’s taxonomy in the principle of mastery. At the apex,  
is the principle of wisdom.  
The uniqueness of this principles-centric approach is its direct codification into  
applications, transforming unifying into a tangible, interactive experience. The uni‐  
fying methodology, being both a strategic and a technical framework, seamlessly  
integrates into user experience design, data management, and holistic intelligence  
strategies.  
Figure 16-4 demonstrates how unifying’s techniques can be integrated into the user  
experience or codified. It features Flow, an example application from Intelligence.AI,  
which serves as a process mapping tool. Introduced in “Hidden Threats to Organ‐  
izations\: A Modern Parallel” on page xiii, concepts act as the fundamental units  
for communicating information in the unifying methodology. These concepts can  
exist in two forms\: as data optimized for machine readability, and as knowledge  
tailored for human understanding. To manage these concepts programmatically in  
user experiences, we now introduce the concept codex, as a strategy for embedding  
unifying annotations into any of your applications.  
The concept codex allows users in the Flow app to annotate any process UI element  
with a rating \(from very low to very high\) from attributes defined in the alignment  
principle \(Chapter 15\). This means that if something in a process has ambiguity or  
knowledge gaps, it can be tagged, rated, and given an annotated description. If several  
processes across teams have ambiguities, knowledge gaps, or other attributes such as  
pain point levels, they can be automatically detected and analyzed, and can provide  
insights.  
This approach can be replicated for any of the 10 principles of designing intelligence,  
and when implementing a unified intelligence strategy, codifying these principles in a  
concept codex can be extremely powerful, because it means unifying can be scaled up  
from a single data champion to a holistic and omnipresent intelligence for the entire  
organization.  
306 | Chapter 16\: Toward Unified Intelligence Figure 16-4. The Flow application. On its right side is the concept codex, which is  
designed to integrate the 10 principles of intelligence design—highlighted at the bottom  
left—into the user interface. A key feature is its ability to capture user feedback, such as  
ratings and descriptive annotations.  
Codifying Principles of Intelligence | 307 Continuous Human–Machine Learning Loops  
A concept codex initially allows users to describe and annotate processes. Over  
time, it can also incorporate unifying techniques into the user experience. This  
strategy enables a virtuous cycle of continuous human–machine learning; machines  
offer predictive recommendations to help humans improve, and humans provide  
feedback through the user interface that teaches the machine how to refine its  
recommendations.  
Here are the three phases of designing and implementing learning loops, using the  
example from Figure 16-4, where we can annotate any ambiguity or knowledge gaps  
in a process map\:  
1.  
1\. Training phase. Initially, an ML algorithm uses data to train a model. Once the  
model is trained, the learning algorithm’s work is essentially done for that version  
of the model.  
2.  
2\. Operational phase. The trained model then identifies ambiguities and knowledge  
gaps, offering recommendations to resolve them. Although we sometimes refer  
to this as a recommendation algorithm, it’s actually the output of the trained  
model.  
3.  
3\. Retraining phase. User feedback on these recommendations serves as new data.  
This data is used to retrain the model, starting another training phase. The model  
is updated, and a new operational phase of more accurate recommendations  
begins.  
For instance, if the machine says, “I found ambiguity in your definition of the word  
revenue. Is this what you meant?” with Yes/No buttons for feedback, and the user  
clicks Yes, both parties learn something valuable. The human learns their original  
definition was ambiguous and how to correct it, effectively being taught by the  
machine. Conversely, if the human clicks either Yes or No, the machine learns the  
quality of its recommendation. If further data shows that the recommendation led  
to a meaningful event, such as a sale or high-performing marketing campaign, that  
enriches the data for future training cycles.  
# Applying Wisdom in Practice  
When designing intelligent systems, you can choose how much to invest in the  
following\:  
Algorithmic complexity  
This involves developing advanced models and algorithms, generally requiring  
investment in high-performance computing resources and specialized personnel  
like data scientists.  
308 | Chapter 16\: Toward Unified Intelligence Framework-based knowledge design  
This concentrates on clarifying objectives, comprehending the scenarios at hand,  
and utilizing precise, quality data to inform decision making. The aim is to  
reduce ambiguity and improve the quality of domain-specific knowledge.  
Wisdom is the self-awareness an organization exercises to self-optimize its approach  
to blending algorithmic complexity and knowledge engineering when designing  
intelligent systems. This balance is crucial because—per the No Free Lunch Theorem—  
no algorithm is universally optimal; effective AI applications often require a blend of  
advanced reasoning algorithms and high-quality, domain-specific knowledge.  
Having both algorithmic sophistication and knowledge engineering is the super‐  
power you want to give your organization in a unified intelligence ecosystem. In this  
approach, reasoning and knowledge are inversely proportional. The more valuable  
your knowledge, the less reasoning power you need, and vice versa.  
Utilizing this approach has led to tangible successes. For instance, Juan garnered  
multiple awards at the University of Oxford for breakthroughs in the realm of data  
serialization \(binary encoding\) by creating a technology called JSON BinPack, which  
stands for JSON binary packing, guided by the principles of data hygiene elucidated in  
this book.  
What sets JSON BinPack apart from its competitors is its capability for comprehen‐  
sively describing data for the purpose of serialization. This depth of understanding  
allows JSON BinPack’s static analysis to make more informed and accurate decisions,  
consistently outperforming all considered alternatives across a range of use cases.  
Simply put, JSON BinPack succeeds because it operates on a richer dataset, reducing  
the need for guesswork.  
# Conceptual Zoomability  
As introduced in the Preface \(see Figure P-1\), zoomability showcases various layers  
of granularity, and unifying requires understanding alignment across knowledge  
domains such as business, data, and code, as well as how they align across hierarchi‐  
cal levels, viewing the organization from a holistic perspective. These levels include\:  
Data product level  
Concepts are the discrete, unique, and foundational units of information  
described in JSON Schema. Designed for both human and machine comprehen‐  
sion, they underpin data products.  
UX level  
This level represents the human-computer interaction space, driving the organi‐  
zation’s inputs and outputs.  
Codifying Principles of Intelligence | 309 Organizational networks level  
Symbolizing the intricate web of people, policies, and technology, this level  
anchors the broader perspective.  
To leverage a concept codex in your applications, the zoomability feature is indispen‐  
sable. It allows users to effortlessly traverse through varying user experience layers,  
much like zooming in and out on a digital map.  
Figure 16-5 depicts a 100% zoom on a document or user experience\: the input/output  
layers where content is delivered and input is accepted. Diving deeper, more refined  
layers are code, data, and concepts. Zooming out connects UX elements to broader  
realms, spanning from knowledge, processes, and governance of the business.  
Figure 16-5. Conceptual zoomability in the concept codex allows navigation through  
hierarchical layers. Zoom out to navigate to broader domains like the success spectrum  
\(Chapter 10\) and the CLEAN governance framework \(Chapter 7\). Zooming in reveals  
the granular details of a concept’s JSON Schema representation.  
# Recursive Design  
Conceptual zoomability is an incredibly versatile and powerful way to approach  
designing and architecting systems. Imagine it like a digital map. You can zoom in to  
focus on tiny details or zoom out to understand the bigger picture.  
This ability to toggle between layers introduces a remarkable feature\: self-similarity  
across data, processes, and design. In simpler terms, self-similarity is a pattern that  
recurs across varying scales. For instance, consider the branching patterns of trees,  
from their trunks out to their smaller limbs. Or think about the vortex shape of  
water draining in a sink—this same shape is echoed in large-scale phenomena like  
310 | Chapter 16\: Toward Unified Intelligence hurricanes. It’s worth noting that visual instances of self-similarity, such as these, are  
often termed fractal patterns.  
This recursive property can be intentionally placed by using the concept codex  
approach to manage data products, or process maps in an application, as shown  
in Figure 16-4. This makes the conceptual zoomability have the property of recursive‐  
ness, which is self-repeating patterns. In popular language terminology, these are  
often called “fractals.”  
# Wisdom Graphs\: Connecting Concepts, Actions,  
# and Outcomes  
How you do anything is how you do everything.  
—Martha Beck  
Let’s revisit our definition of wisdom from Chapter 15\:  
The ability to self-optimize the relationship between knowledge and reasoning capabili‐  
ties across all levels and connections in an organization.  
What do we really mean when we talk about knowledge? Definitions differ across  
fields, from organizing facts in databases to solving complex problems in education.  
In recent decades, knowledge graphs have aimed to encode semantic, relational  
knowledge through a networked “things, not strings” approach. Yet even knowledge  
graphs focus on factual understanding—the bottom tiers of the mastery pyramid  
from Chapter 15.  
How might we expand both the depth and breadth of digitized knowledge? If knowl‐  
edge graphs take a “things not strings” approach, a wisdom graph takes a “holistic,  
relativistic, and synergistic” viewpoint\:  
Holistic knowledge  
This connects technical systems and human perspectives into an integrated  
whole, like networks instead of isolated points.  
Relativistic knowledge  
It grounds truths within shared frames of reference, enabling universal measures  
while honoring multiple vantage points, like how mountain heights are defined  
in relation to sea level.  
Synergistic knowledge  
This refers to measurable improvements in efficiencies and value of how knowl‐  
edge is combined. In other words, having lots of well-organized data that isn’t  
creating beneficial outcomes is like organizing chairs on the Titanic—it’s a cost  
Wisdom Graphs\: Connecting Concepts, Actions, and Outcomes | 311 center that drains people’s time and budgets, and introduces complexity and  
processes to maintain.  
# Cognitive Primitives\: Standardizing Cognitive Experience Design  
In order to connect concepts, actions, and outcomes across various systems, we need  
to establish a standardized format that aims to optimize information for designing  
intelligent systems. This involves using data products designed for holistic, relativis‐  
tic, and synergistic purposes.  
Consider the following nine cognitive primitives, which are fundamental and simple  
representations used to capture perspectives from both humans and AI agents in  
various scenarios, including internal \(employee\) and external \(customer\) experiences\:  
• Who. The person or AI agent using the system  
•  
• Wish. The desired future state or objective  
•  
• Where. The position in a process to achieve an objective  
•  
• Why. The decision-making factors in a situation  
•  
• Which. The action taken versus potential alternatives  
•  
• When. Temporal information about events  
•  
• What. Data, knowledge, or interaction at a given moment  
•  
• Wow. The impact and value of an experience  
•  
• Warranty. Elements related to trust, provenance, and safety  
•  
For instance, in a healthcare application, the who could be a patient or a healthcare  
provider, with the wish representing their health goals. The where might involve  
the stage of treatment they are in, while why and which could encompass treatment  
choices based on medical history and current health status. When and what provide  
context and data for these decisions, wow reflects the effectiveness of treatment,  
and warranty ensures the safety and trustworthiness of the process. This real-world  
application demonstrates how these cognitive primitives can be practically employed  
to enhance the user experience in a critical sector like healthcare.  
This modular, scale-free approach of the wisdom graph is what enables holistic  
knowledge and captures the relativistic \(unique\) perspectives of members of the  
network. The specific nine cognitive principles set the user experience and data  
required to optimize for creating human and learning experiences in a synergistic way,  
as shown in Figure 16-6.  
312 | Chapter 16\: Toward Unified Intelligence Figure 16-6. The nine cognitive primitives, shown on top as a ring, are a complete unit  
that acts as a type of nexus, bringing together UX design and data perspectives to form  
an optimal shape to create cognitive experiences for collaborative learning networks. This  
pattern can be described as a lattice, symmetrical rings that can be extended with equal  
properties.  
Wisdom Graphs\: Connecting Concepts, Actions, and Outcomes | 313 The Value of Unifying  
I learned that it does not matter if you are a light…if you are not going to illuminate  
another’s road.  
—Walt Disney  
The ultimate advantage an organization can possess is the ability to instantly trans‐  
form every action taken by an employee into a learning opportunity for the entire  
community—be it customers, colleagues, or collaborative learning networks. This  
turns each goal, decision, and outcome into building blocks of collective wisdom  
that can be distributed to individuals, empowering them to achieve their goals more  
effectively and efficiently than ever before.  
Unifying is going to enable your organization to optimize this balance between  
complexity and knowledge more effectively because the expensive and often overly  
complex knowledge management processes that exist today have to be managed by  
specialized, centralized, and highly controlled small teams with complex enterprise  
and expensive licenses.  
# Prioritize Knowledge Before AI  
There exists an inverse proportionality between reasoning and knowledge. When  
there are ambiguity, knowledge gaps, and blind spots between rich domain knowl‐  
edge and clear organizational goals, organizations commonly attempt to resolve  
this via increased algorithmic complexity and vice versa, following the adage “to a  
hammer, everything looks like a nail.”  
Most organizations default to overcompensating for a lack of quality datasets by  
investing in complex systems and specialized teams. This often leads to high failure  
rates in AI projects.  
Though knowledge engineering often yields quicker, more reliable results than raw  
computational power, it’s not without its challenges. Organizing knowledge in a  
downstream fashion—after accumulating a mass of disordered data—is highly ineffi‐  
cient. The real power lies in establishing knowledge frameworks first and enforcing  
data governance from the get-go. Refer back to Figure 3-2 for a review of the chal‐  
lenges in the cycle of upstream and downstream data being continuously transformed  
and reused.  
The question, therefore, is what is the most efficient and effective way to codify your  
organization’s knowledge? As you’ve read the book, you already know the answer, and  
it most likely challenges the current strategies your organization uses to manage data  
and knowledge.  
314 | Chapter 16\: Toward Unified Intelligence A Tale of Simple Knowledge Versus Complex Intelligence  
Picture a sprawling lake teeming with fish. On one end, there’s a luxurious boat  
outfitted with cutting-edge technology. Its owner is wealthy and surrounded by a  
crew of highly educated individuals. They’ve spent years learning the science of  
fishing, aquatic ecology, and even ML algorithms to predict where the fish might be.  
On the other side of the lake is a lone fisherman in a modest boat, equipped with just  
a fishing rod and a small net. What he lacks in academic credentials and sophisticated  
tools he makes up for with a simple yet invaluable piece of local knowledge\: at sunset,  
the most prized fish in the lake gather at a particular spot.  
As the sun dips below the horizon, it’s the lone fisherman who reels in the day’s best  
catch, not the team with their advanced degrees and high-tech equipment.  
In this tale, knowing when and where to fish outperforms even the most advanced  
algorithmic complexities. Sometimes the right piece of knowledge can indeed be  
more powerful than a mountain of data or an army of experts.  
# Follow the Principle of Integrated Simplicity  
Unifying gives you the knowledge you need to design and engineer the most valuable  
knowledge for your organization in the simplest ways and with the lowest algorithmic  
complexity.  
By adopting the technologies recommended in this book, you will provide your  
technical teams with the most straightforward and accessible approach to implemen‐  
tation, leveraging JSON—the most widely used data format—and JSON Schema, the  
industry standard for schema languages.  
We hope you find the value of unifying is not only in the transformative experience  
we are confident your organization and teams will have, but also in its simplicity and  
ease of implementation.  
Our final insight for you, our data champion, is this\: it is wisdom that enables you  
to shift from solving problems to ensuring they never exist in the first place. It is  
through unifying your business, data, and code that you gain the wisdom to create  
wisdom for your organization.  
# Summary  
The paradigm of unified intelligence ushers in unparalleled possibilities. By foster‐  
ing collaborative networks, prioritizing personalized knowledge, and leveraging the  
prowess of digital twins, organizations can redefine the paradigms of decision mak‐  
ing, personalization, and prediction.  
Summary | 315 At the time of the writing of this book, unified intelligence is an  
upcoming inevitability at the vanguard of the possible. We hope  
you carefully consider a unified intelligence approach, and that this  
chapter helped clarify any of the confusing terminology in various  
intelligence strategies.  
# Going Beyond This Book  
Thank you for entrusting us to guide you through this exploration. As we close this  
final chapter, we are humbled by your engagement and excited for the groundbreak‐  
ing work you’re destined to undertake—work that will weave data and collaboration  
into harmonized innovation efforts.  
We won’t stop here. To further support your journey, we will be sharing a treasure  
trove of free tools and educational materials about unifying at Intelligence.AI.  
Please consider this an open invitation to connect; you’re always welcome to reach  
out to us at hello@intelligence.ai for questions, further insights, and workshops to  
learn more about unifying.  
In closing, we can’t wait to witness the remarkable steps you’ll take to reshape and  
better our world through what you have learned in unifying. We look forward to  
learning how unifying is a resource for you to achieve the extraordinary.  
316 | Chapter 16\: Toward Unified Intelligence Symbols  
" \(double quote\), 27  
/ \(backslash\), 28  
\[ \] \(square brackets\), 28  
\{ \} \(curly braces\), 29  
# A  
acceleration  
pathways of \(see pathways of acceleration\)  
tools for \(see process maps; success spec‐  
trums\)  
action space, 303  
aggregation, dataset lineage and, 269-271  
Agile  
benefits of a unifying data strategy for,  
11-15  
combining with waterfall and Unifying, 13  
defined, 11-15  
defining being Agile, 12  
improper use of, 9  
origins, 11  
primary characteristics in relation to data,  
12  
velocity versus productivity, 13  
AI \(see artificial intelligence\)  
alignment, 99-114  
ambiguity and assumptions as inimical to,  
100-102  
data-centric innovation and, 43-48  
defined, 52  
effective alignment as goal, 45-46  
evaluating from a holistic perspective, 43-45  
# Index  
facilitating assessments of conceptual  
alignment across technical/nontechnical  
teams, 67-69  
“go slow to go smooth, go smooth to go  
fast” approach to aligning innovation  
efforts, 69-70  
illuminating misalignment with a concept  
compass, 104-110  
as journey, not destination, 43-48  
orchestrating at organizational scale, xix-xx  
planning stages, 44  
principle of, 275-276  
quality of data at moment of transduction,  
276  
reducing ambiguity via symmetry between  
concepts and JSON Schema, 102  
strategies for setting up teams for success,  
46-48  
synchronization \(see synchronization\)  
transforming abstract to concrete, 275  
unifying versus, 52-54  
validating concepts, 111-113  
ambiguity  
assumptions and, 102  
defined, 102, 155  
influence on decisions and progress toward  
goals, 155-156  
as inimical to alignment, 101  
map projection example, 156-157  
process maps for revealing, 159  
reducing via symmetry between concepts  
and JSON Schema, 102  
revealing by enriching process maps with  
annotations, 162-163  
317 visualizing/removing in processes, 160-163  
anchoring heuristic, 291  
annotating process maps, 162-163  
annotation extraction, 144-151  
defined, 6  
deprecations use case, 145-146  
example, 144  
extracting unknown keywords as annota‐  
tions, 234-236  
format keyword and, 150  
with Hyperjump, 249-250  
online validator for, 151  
revealing ambiguity by enriching process  
maps with annotations, 162-163  
runtime extraction, 146-148  
runtime performance affected by, 148  
standard output formats, 148-150  
annotation keywords, 144  
anticipatory design  
digital twins, 305  
personalization, 305  
Applicator vocabulary, JSON Schema, 84-86  
Aristotle \(Google team study project\), 46  
arrays  
converting dataset to JSON array, 215  
JSON, 28-29  
artificial intelligence \(AI\)  
aligning problem-solving strategies and data  
with, xvi-xvii  
as collective intelligence, 300  
functional AI, 298-299  
illusions within vetting process, 299  
prioritizing knowledge before AI, 314  
quality data and, 298  
questioning assumptions, 299  
“Your AI Is Only as Good as Your Data”  
axiom, xiv  
assess phase  
for concept-first design, 65-67  
“go slow to go smooth, go smooth to go  
fast” approach to aligning innovation  
efforts, 69-70  
assessments \(knowledge assessments\), 166  
assumptions  
defined, 102  
as inimical to alignment, 102  
questioning, 299  
availability heuristic, 291  
318 | Index  
# B  
backslash \(/\), 28  
Barabási, Albert-László, on networks, 129  
Beck, Martha, on wisdom, 311  
being Agile, defined, 12  
belief scoring, 112-113  
Belsky, Scott, on ideas, 191  
biases, xii  
\(see also heuristics\)  
as constraint on human behavior, xii  
heuristics versus, 291  
big data, good data versus, 16  
Binary JSON \(BSON\), 35  
blind spots  
defined, 156  
influence on decisions and progress toward  
goals, 155-156  
removing, 174-176  
Bloom’s taxonomy, 292-294  
Boolean schemas, 139-140  
Booleans, JSON, 27  
bottom-up progressions, 4  
BSON \(Binary JSON\), 35  
bundling, JSON Schema, 255-260  
basics, 255  
bundling meta-schemas, 260  
bundling process, 258-259  
bundling signup-analytics data product  
example, 259-260  
business logic  
CLEAN data governance and, 124  
harmonizing perspectives with concept  
compass, 105-106  
# C  
CDO \(chief data officer\), roles and responsibili‐  
ties of, 40  
centralized control, 285  
ChatGPT, 231  
chief data officer \(CDO\), roles and responsibili‐  
ties of, 40  
CLEAN \(Collaborative Learning Networks\)  
data governance  
activity, 124  
business logic, 124  
collaboration, 122  
four facets of data products and CLEAN,  
126 four horsemen of data death, 127-129  
fundamentals, 120-125  
knowledge creation, 123  
in practice, 125  
Cloudflare Pages  
creating a custom domain in, 206  
deploying schema registry to, 195-200  
setting up a CNAME DNS record, 208  
CNAME DNS record, 208  
cognitive primitives, 312  
collaboration, CLEAN data governance and,  
122  
collaborative intelligence, 301-302  
collaborative learning networks, 302  
collaborative networks, 129-130  
collective intelligence, 299  
communication networks, integrated simplicity  
in, 283  
complexity reduction, 282  
compliance issues, in business logic, 124  
compression, 283  
concept compass  
harmonized concepts, 109-110  
harmonizing business logic perspectives  
\(the “what”\), 105-106  
harmonizing JSON Schema \(the “how”\),  
108-109  
harmonizing operational tasks \(the “way”\),  
106-107  
illuminating misalignment with, 104-110  
concept-first design, 57-71  
assessing concepts, 65-67  
basics, 57-58  
benefits of, 10  
coffee packaging example, 59-60  
defined, 9  
facilitating assessments of conceptual  
alignment across technical/nontechnical  
teams, 67-69  
four facets of a data product, 60-62  
getting started with, 63-64  
“go slow to go smooth, go smooth to go  
fast” approach to aligning innovation  
efforts, 69-70  
unification blueprint, 64-65  
concepts  
as foundation of unifying methodology, xiv  
reducing ambiguity via symmetry between  
concepts and JSON Schema, 102  
validating, 111-113  
validating with belief scoring, 112-113  
validating with counterfactuals, 111  
conceptual schemas, power of, 67  
conceptual zoomability, 309-311  
confirmation bias, 291  
constraints language, JSON Schema as, 137-139  
consuming vocabularies, 247-250  
defining a dialect, 247  
extracting annotations with Hyperjump,  
249-250  
making use of dialects, 249  
context vocabulary specification, 239-241  
continuums, principle of, 284-286  
control strategy problem, 285-286  
dangers of misusing measurements, 284  
making things measurable, 284  
Core vocabulary, 82  
counterfactuals, 111  
cover your ass \(CYA\) culture, 13  
Crockford, Douglas, 21  
curly braces \(\{ \}\), 29  
customers, problems described by, 180  
CYA \(cover your ass\) culture, 13  
# D  
data  
aligning AI and problem-solving strategies  
with, xvi-xvii  
quality at moment of transduction, 276  
raw data versus data product, 59  
data cascades, 16  
data champions \(data product managers\)  
and data transformations, 40-42  
and data-centric innovation, 39-55  
unifying as responsibility of, 54  
data consumer, defined, 50  
data customer, defined, 50  
data distributors, defined, 51  
data driven \(term\), 58  
data hygiene, 65  
challenges that compromise, xiii  
goals of, 154  
data managers, roles/responsibilities of, 41  
data problems, 3-6  
data producers, defined, 51  
data product  
CLEAN methodology and, 126  
Index | 319 concept-first design for \(see concept-first  
design\)  
four facets of, 60-62  
raw data versus, 59  
data product design using JSON Schema,  
213-231  
automated schema extraction, 229  
context facet, 228  
data facet, 214  
CSV dataset example, 214  
JSON row representation, 215  
meaning facet, 222-228  
analytics-entry schema, 227  
currency schema, 225  
email schema, 224  
IP address schema, 223  
price schema, 226  
timestamp schema, 223  
US state data, 224  
website-milestone schema, 227  
signup analytics schema, 229  
structure facet, 215-222  
application-specific concepts, 220  
cost and currency, 218-220  
dataset schema, 220  
email addresses, 217  
general-purpose concepts, 215-220  
IP address, 217  
timestamp, 217  
US state codes, 218  
data product management, 187  
\(see also product management; product  
managers\)  
data quality, in AI, 298  
data strategies \(see unifying data strategy, need  
for\)  
data strategists  
product managers’ KPI use compared to, 43  
roles and responsibilities, 41, 43  
strategies for setting up teams for success,  
46-48  
data transformations, data champions as key to,  
40-42  
data validation  
Boolean schemas, 139-140  
JSON Schema as a constraints language,  
137-139  
example, 136-137  
format keyword, 142-143  
320 | Index  
heterogeneous data structures, 140-141  
JSON Schema and, 134-143  
online validator for, 135  
data-centric innovation, 39-55  
alignment as journey, not destination, 43-48  
data champions as key to data transforma‐  
tions, 40-42  
data product managers and, 42  
incorporating a product management mind‐  
set, 48-52  
unifying versus aligning, 52-54  
data-driven breakthroughs, quest for, 1-11  
data problems, 3-6  
multiple/conflicting North Stars, 2  
understanding which are the data right  
problems to solve, 7-9  
unifying concepts as key to innovation, 9-11  
data-driven organizations  
becoming data centric, 16-17  
bottlenecks preventing teams from becom‐  
ing data driven, 17-18  
understanding the phrase “being data  
driven”, 15-18  
dataset keyword, 253, 261, 267  
dataset lineage  
aggregation, 269-271  
filtering, 267  
JSON Unify and, 266-271  
transforming entries, 268-271  
dataset schema, 220  
dataset vocabulary, 253-255  
datasetRef keyword, 261, 263, 267  
decentralized control, 285  
decidability, principle of, 288-289  
decidability defined, 288  
making informed decisions, 289  
real-world decidability to reduce misalign‐  
ment in teams, 290  
two key approaches to problem solving, 289  
decision sherpas, 305  
decomposition, 283  
\$defs keyword, 258  
Deming, W. Edwards, on data, 102  
demons  
and thought processes for innovation, 179  
defined, 179  
imagining magical possibilities with, 181  
real-life example leading to a unified data  
product model, 184-186 deprecated keyword, 145-146  
deprecations, 145-146  
design \(see specific forms of design, e.g.,  
concept-first design\)  
designing intelligence, 273-296  
defined, xiv  
overview of principles, 274-275  
principle of alignment, 275-276  
principle of continuums, 284-286  
principle of decidability, 288-289  
principle of heuristics, 290-292  
principle of information, 278-280  
principle of integrated simplicity, 282-283  
principle of learning, 280-282  
principle of mastery, 292-295  
principle of state transitions, 286-288  
principle of wisdom, 295  
unifying journey recap, 273  
dialects, JSON Schema  
defining a dialect, 247  
definition of term, 75  
determining with \$schema keyword, 78-79  
extracting annotations with Hyperjump,  
249-250  
making use of, 249  
digital twins, 305  
Disney, Walt, on illumination, 314  
DNS \(Domain Name System\) configuration,  
208  
double quote \("\), 27  
downstream data journey, 51  
Drucker, Peter, on measurement and manage‐  
ment, 284  
\$dynamicAnchor keyword, 244  
# E  
effective alignment, 45-46  
efficiency, effectiveness versus, 15  
Einstein, Albert  
on accepting limits, 233  
on experiencing the mysterious, 273  
on solving problems, 133  
email addresses, 217  
entropy \(uncertainty\), 278-280  
enum keyword, 92  
errors, defining in learning context, 282  
ethical issues in heuristics, 291  
exploitation of existing knowledge, xvi  
exploration for new knowledge, xvi  
extending JSON Schema, 233-251  
authoring vocabularies, 236-247  
consuming vocabularies, 247-250  
unknown keywords, 234-236  
# F  
“faster horses” anecdote, 180  
filtering, dataset lineage and, 267  
Flow app, 306  
format keyword, 142-143, 150  
four horsemen of data death, 127-129  
ignorance, 128  
indecisiveness, 128  
shortsightedness, 128  
siloed incentives, 128  
fractal patterns, 311  
Friedland, Bernard, on feedback, 12  
Fuller, Buckminster, on models and change, 120  
functional artificial intelligence, 298-299  
# G  
Galilei, Galileo, on measuring, 284  
Galton board, 129  
General Data Protection Regulation \(GDPR\),  
124  
GitHub repository setup for schema registry,  
192-195  
creating a repository, 192  
uploading first schema, 193-195  
goals, measuring progress toward, 157  
good data, big data versus, 16  
Google, Aristotle team study project at, 46  
granularity, levels of, xiv  
graph database, 119  
graphs, 117-118  
\(see also knowledge graphs; wisdom graphs\)  
as visual language of networks, 117-118  
# H  
heuristics, 290-292  
awareness and ethical considerations, 291  
basics, 290-291  
biases versus, 291  
connection to decision making in business,  
292  
HIPPO \(highest paid person’s opinion\), 15  
Index | 321 Hoffman, Reid, on teams versus solo operators,  
45  
holistic alignment evaluation, 43-45  
holistic knowledge, 311  
HTTP  
header configuration, 200-202  
hosting schemas over, 191  
human–machine learning loops, 308  
hygiene, xii  
Hyperjump, 135, 142  
extending, 245-247  
extracting annotations with, 249-250  
# I  
ignorance, as cause of data death, 128  
illusion of communication, 101  
imagining magical possibilities, 179-181  
incentives, siloed, 128  
indecisiveness, as cause of data death, 128  
information, principle of, 278-280  
innovation  
“go slow to go smooth, go smooth to go  
fast” approach to aligning efforts, 69-70  
process maps revealing opportunities for,  
163  
unifying concepts as key to, 9-11  
using demons and magical thinking for, 179  
instances, defined, 74  
integrated simplicity, principle of, 282-283  
complexity reduction, 282  
compression, 283  
decomposition, 283  
integrating in communication networks,  
283  
memoization, 283  
unified intelligence and, 315  
intelligence \(see unified intelligence\)  
Intelligence.AI Coffee Beans \(fictitious com‐  
pany used as example\), 18-19  
generating a web form, 95  
JSON document creation for, 36  
JSON Schema for addling new catalog list‐  
ings, 91-95  
product entry, 36  
store order, 37  
writing a schema, 91-95  
intergroup bias, 291  
interventions, defined, 166  
322 | Index  
IP addresses, 217  
# J  
JavaScript, 21  
JSON, 21-38  
alternative representations, 34-36  
arrays, 28-29  
basics, 21-25  
binary alternatives, 35  
Booleans, 27  
brief history, 21-22  
in concept-first design, 68  
data types, 26-31  
document creation, 36  
grammar learning resources, 31  
grammar overview, 26-36  
JSON data model versus, 36  
minification, 32-33  
null constant, 31  
number data type, 27  
objects, 29-30  
prettifying documents, 33  
Schema \(see JSON Schema\)  
simple example, 23  
strings, 27  
textual alternatives, 34  
viewing and authoring tools, 24  
JSON BinPack \(JSON binary packing\), 309  
JSON data model, JSON versus, 36  
JSON documents, 23  
JSON Hero, 24  
JSON Lines \(JSONL\), 262  
JSON Schema, 73-97  
basics, 74-75  
Boolean schemas, 139-140  
brief history, 75  
building blocks, 75-76  
bundling, 255-260  
in concept-first design, 68  
as a constraints language, 137-139  
data product design using \(see data product  
design using JSON Schema\)  
deploying a schema registry, 191-211  
determining dialect with \$schema keyword,  
78-79  
dialects \(see dialects, JSON Schema\)  
extending \(see extending JSON Schema\)  
format keyword, 142-143 harmonizing via concept compass, 108-109  
heterogeneous data structures, 140-141  
Intelligence.AI project example, 91-95  
meta-schemas, 76  
primary purposes, 108  
reading/understanding, 76-86  
as recursive data structure, 86-90  
reducing ambiguity via symmetry between  
concepts and JSON Schema, 102  
referencing schemas, 87-90  
schema definition, 74  
thinking in schemas, 151  
understanding Schema keywords, 82-86  
validating the structure of data, 134-143  
vocabularies \(see vocabularies, JSON  
Schema\)  
writing a schema, 91-95  
JSON Unify, 253-271  
dataset lineage, 266-271  
dataset vocabulary, 253-255  
extracting meaning, 263-265  
JSON Schema bundling, 255-260  
referencing remote data, 261-263  
JSON-e, 268-269  
json-everything online validator, 151  
JSON5, 34  
JSONoid, 230  
# K  
Kahneman, Daniel, 290  
key performance indicators \(see KPIs\)  
keyword namespacing, 81  
keywords, JSON Schema  
Applicator vocabulary, 84-86  
extracting unknown keywords as annota‐  
tions, 234-236  
top-level keywords, 82-83  
understanding Schema keywords, 82-86  
unknown keywords, 234-236  
validation vocabulary, 83-84  
knowledge  
levels of mastery in, 293  
prioritizing before AI, 314  
simple knowledge versus complex intelli‐  
gence, 315  
knowledge creation, CLEAN data governance  
and, 123  
knowledge experience design, 167-170  
knowledge experience format, 169-170  
knowledge frameworks, 166-171  
knowledge experiences and pathways,  
167-169  
from structured knowledge to computa‐  
tional knowledge, 171  
as tool for designing knowledge experien‐  
ces, 169-170  
knowledge gaps, 166  
defined, 155  
influence on decisions and progress toward  
goals, 155-156  
knowledge graphs  
aligning knowledge for companies new to,  
120  
challenges with, 119  
as networks of entities, 118-120  
simple, 119  
knowledge objectives, 166  
known unknowns, 175  
Kolmogorov complexity, 282  
KPIs \(key performance indicators\)  
defining for success measures/metrics, 172,  
178-179  
in knowledge experience design, 168  
OKRs versus, 52  
# L  
Lao Tzu, on not changing direction, 13  
learning  
defining, 280-281  
defining errors, 282  
principle of, 280-282  
learning loops, 308  
legal issues, business logic and, 124  
Leonardo da Vinci, on practice without knowl‐  
edge, 104  
license keyword, 242  
local referencing, 88  
# M  
machine teaching, 302  
MacLaughlin, Steve, on the effect of bad data  
on AI, 134  
magical thinking \(imagining magical possibili‐  
ties\), 179-181  
map projections, 156  
MapReduce, 269-270  
Index | 323 Markov decision process \(MDP\), 289, 303  
mastery, principle of, 292-295  
levels of mastery in knowledge, 293  
strategies for mastery, 294-295  
Maxwell, James Clerk, 180  
Maxwell’s demon, 180  
MDP \(Markov decision process\), 289, 303  
Meadows, Donella H., on systems, 115  
meaning facet of data product design, 222-228  
analytics-entry schema, 227  
currency schema, 225  
email schema, 224  
extracting meaning with JSON Unify,  
263-265  
IP address schema, 223  
price schema, 226  
timestamp schema, 223  
US state data, 224  
website-milestone schema, 227  
memoization, 283  
meta-schemas, 76  
bundling, 260  
defining dialects with, 247  
inspecting, 79  
vocabulary \(see vocabulary meta-schema\)  
metadata, annotation keywords and, 144  
metrics  
defining KPIs for success measures/metrics,  
178-179  
for product management success, 52  
minification  
JSON, 32-33  
prettifying JSON documents, 33  
minimum viable data \(MVD\), 15  
misalignment  
illuminating with a concept compass,  
104-110  
real-world decidability to reduce misalign‐  
ment in teams, 290  
multiperspective design, 176-178  
MVD \(minimum viable data\), 15  
# N  
namespacing, 81  
needs of users, defining, 49-50  
Netscape, role in JSON’s origins, 21  
networks, thinking in \(see thinking in net‐  
works\)  
324 | Index  
Newtonsoft, 142  
“next best states”, 173  
nonexistent values, null values versus, 31  
North Stars, 2  
nudges/nudging, 183  
null constant, JSON, 31  
null values, nonexistent values versus, 31  
# O  
objectives and key results \(see OKRs\)  
objectives, in knowledge experience design, 168  
objects, JSON, 29-30  
Occam’s razor, 282  
OK JSON, 25  
OKRs \(objectives and key results\)  
business goals and, 167  
definition of elements in, 178  
KPIs versus, 52  
online JSON Schema validator, 135, 151  
\(see also Hyperjump\)  
operational tasks, harmonizing, 106-107  
optional vocabularies, 80  
output formats \(JSON Schema\), 148-150  
# P  
packaging, 59-60  
pain points, in problem landscapes, 182-183  
Pascal, Blaise, on simplicity, 282  
Pasteur, Louis, xii  
pathways of acceleration, illuminating, 153-164  
basics, 153-154  
defining decisions and steps with process  
maps, 158-159  
how ambiguity/knowledge gaps/blind spots  
influence decisions and progress toward  
goals, 155-156  
how process maps reveal ambiguity, 159  
mapping pathways of process/progress,  
157-160  
measuring progress toward goals, 157  
visualizing/removing ambiguity in pro‐  
cesses, 160-163  
pathways, defined, 166  
personalization, in anticipatory design, 305  
personalized knowledge, 303-305  
prettifying JSON documents, 33  
problem landscapes, 182-183  
data problems, 3-6 quantifying pain points in, 182-183  
real-life example leading to a unified data  
product model, 184-186  
problem-solving strategies, xvi-xvii  
process maps  
defining decisions and steps with, 158-159  
enriching with annotations, 158-159  
innovation opportunities revealed by, 163  
revealing ambiguity with, 159  
visualizing/removing ambiguity with,  
160-163  
product management  
defining and measuring success, 52  
defining product features, 50-52  
defining users’ needs, 49-50  
incorporating a product management mind‐  
set, 48-52  
product managers  
data strategists’ KPI use compared to, 43  
roles and responsibilities, 41  
skills required of, 48  
product packaging, 59-60  
productivity, velocity versus, 13  
progress, mapping, 172  
properties, objects and, 29  
# Q  
quantification, decision making and, 284  
# R  
raw data, data product versus, 59  
recursive data structure, 86-90  
Reed, Brian, on design, 213  
reinforcement learning, xvi  
relativistic knowledge, 311  
remote referencing, 90  
JSON Lines, 262  
JSON Unify, 261-263  
streaming JSON, 262  
ripple effects, xii  
road maps, for success spectrum, 176-178  
runtime annotation extraction, 146-148  
# S  
schema, 67  
\(see also JSON Schema\)  
defined, 74  
power of conceptual schemas, 67  
thinking in schemas, 151  
\$schema keyword  
declaring URI with, 76  
determining dialect with, 78-79, 91  
schema registry  
adding a custom domain, 205-209  
checking results, 209  
creating a domain in Cloudflare Pages,  
206  
setting up a CNAME DNS record, 208  
best practices, 210  
configuring HTTP headers, 200-202  
checking results, 202  
declaring custom headers on Cloudflare  
Pages, 201-202  
inspecting current HTTP headers, 201  
creating a landing page, 204-205  
deploying, 191-211  
deploying to Cloudflare Pages, 195-200  
GitHub repository setup, 192-195  
hosting schemas over HTTP, 191  
treating schemas as immutable, 210  
versioning, 210  
self-similarity, 310  
Semmelweis, Ignaz, xi-xii  
Shannon, Claude, 278-280  
Shaw, George Bernard, on communication, 101  
sherpas, 305  
shortsightedness, as cause of data death, 128  
signup-analytics \(data product example\), 221  
analytics-entry schema, 227  
bundling, 259-260  
dataset entries, 221  
dataset schema, 220  
dataset vocabulary, 254  
extracting annotations, 250  
extracting meaning with JSON Unify,  
263-265  
new dialect and annotation keywords, 249  
publishing JSONL variant, 262  
referencing remote data, 261-263  
signup analytics schema, 229  
siloed incentives, 128  
simplicity, integrated, 282-283  
Sinek, Simon  
on champions, 40  
on understanding people, 17  
social proof heuristic, 292  
SPDX \(Software Package Data Exchange\), 242  
Index | 325 specification \(JSON Schema vocabulary sys‐  
tem\), 237-241  
spectrums of success \(see success spectrums\)  
square brackets \(\[ \]\), 28  
state transitions, principle of, 286-288  
simple state machine, 287  
simplifying state transitions, 287  
streaming, remote referencing and, 262  
strings, JSON, 27  
subschemas, JSON Schema  
local referencing, 88  
remote referencing, 90  
schema duplication, 87  
success criteria  
defining and measuring, 52  
for knowledge experience design, 168  
success spectrums, 165-189  
basics, 172-183  
circular nature of unifying, 188  
data product management, 187  
defining KPIs for success measures/metrics,  
178-179  
embracing multiperspective design and  
road maps, 176-178  
imagining magical possibilities, 181  
knowledge frameworks and, 166-171  
listening to customers’ problems versus cus‐  
tomers’ solutions, 180  
mapping progress and value, 172  
nudging and, 183  
problem landscapes, 182-183  
real-life problem landscape and demon  
example leading to a unified data prod‐  
uct model, 184-186  
removing blind spots, 174-176  
using demons and magical thinking for  
innovation, 179  
visualizing/adding “next best states”, 173  
sunk cost fallacy, 291  
synchronization, 115-131  
CLEAN data governance fundamentals,  
120-125  
CLEAN data governance in practice, 125  
four facets of data products and CLEAN,  
126  
four horsemen of data death, 127-129  
knowledge graphs as networks of entities,  
118-120  
326 | Index  
power of design in collaborative networks,  
129-130  
thinking in networks, 116-118  
synergistic knowledge, 311  
system state, in knowledge experience design,  
168  
systems control strategy, 285  
# T  
teams  
bottlenecks preventing teams from becom‐  
ing data driven, 17-18  
characteristics of successful teams, 47  
facilitating assessments of conceptual  
alignment across technical/nontechnical  
teams, 67-69  
real-world decidability to reduce misalign‐  
ment in, 290  
strategies for success, 46-48  
thinking in networks, 116-118  
athletes versus artists, 116  
basics, 116-118  
graphs as visual language of networks,  
117-118  
top-down progressions, 4  
top-level keywords, 82-83  
Torvalds, Linus, on codifying intelligence, 306  
transduction, data quality at moment of, 276  
transforming entries, extending dataset vocabu‐  
lary to support, 268-269  
tribal knowledge, 102  
Tversky, Amos, 290  
# U  
Ueshiba, Morihei, on mistakes, 280  
uncertainty, 278-279  
unified intelligence, 297-316  
anticipatory design, 305  
applying wisdom in practice, 308  
basics, 302  
codifying the principles of, 306-311  
collaborative intelligence, 301-302  
collaborative learning networks, 302  
collective intelligence, 299  
conceptual zoomability, 309-311  
continuous human–machine learning loops,  
308  
functional artificial intelligence, 298-299 integrated simplicity, 315  
personalized knowledge, 303-305  
prioritizing knowledge before AI, 314  
simple knowledge versus complex intelli‐  
gence, 315  
value of unifying, 314-315  
wisdom graphs, 311-313  
unifying, 273  
aligning versus, 52-54  
assess phase of concept-first design, 65-67  
benefits of, 70  
circular nature of, 188  
combining with Agile or waterfall method‐  
ology, 13  
concept-first design unification blueprint,  
64-65  
deeper principles guiding, 273  
defined, 53  
facilitating assessments of conceptual  
alignment across technical/nontechnical  
teams, 67-69  
origin story of, xviii  
unifying concepts, as key to innovation, 9-11  
unifying data strategy  
benefits for Agile, 11-15  
defining a unifying data strategy approach,  
14-15  
Intelligence.AI Coffee Beans project, 18-19  
need for, 1-20  
quest for data-driven breakthroughs, 1-11  
understanding the phrase “being data  
driven”, 15-18  
unknown keywords, 234-236  
unknown unknowns, 156, 175  
\(see also blind spots\)  
upstream data journey, 51  
user experience with data product, 60  
user state, 168  
users’ needs, defining, 49-50  
# V  
validating concepts, 111-113  
with belief scoring, 112-113  
with counterfactuals, 111  
validation keywords, 140-141  
validation of data \(see data validation\)  
validation vocabulary, JSON Schema, 83-84  
validation, defined, 6  
validator, online \(see Hyperjump; online JSON  
Schema validator\)  
value  
as element of knowledge experience design,  
169  
mapping, 172  
Van Gogh, Vincent, on accomplishing great  
things, 253  
velocity, productivity versus, 13  
versioning of schemas, 210  
Visual Studio Code, 25  
vocabularies, JSON Schema, 75  
Applicator vocabulary, 84-86  
authoring, 236-247  
consuming vocabularies, 247-250  
defined, 75  
defining a custom vocabulary, 236  
defining a dialect, 247  
determining, 79-80  
extending an implementation, 244-247  
extracting annotations with Hyperjump,  
249-250  
inspecting meta-schemas, 79  
keyword namespacing, 81  
as not transitive, 248  
optional vocabularies, 80  
reference documentation for, 81  
understanding, 81  
validation vocabulary, 83-84  
vocabulary system, 236  
writing a meta-schema, 241-244  
context vocabulary meta-schema, 243  
official vocabularies meta-schemas, 241  
SPDX licenses, 242  
writing a specification, 237-241  
context vocabulary specification,  
239-241  
vocabulary identifiers, 238  
\$vocabulary keyword, 80  
vocabulary meta-schema, writing, 241-244  
context vocabulary meta-schema, 243  
official vocabularies meta-schemas, 241  
SPDX licenses, 242  
# W  
waterfall  
combining Agile with, 13  
defined, 11  
Index | 327 web forms, 95  
Weinberger, David, on metadata, 144  
whitespace, minification of, 32-33  
wisdom  
applying in practice, 308  
defined, 309, 311  
principle of, 295  
wisdom graphs, 311-313  
Wittgenstein, Ludwig, on limits of language, 73  
# Y  
# Z  
YAML format, 35  
zoomability, xiii, 187, 309-311  
328 | Index About the Authors  
Ron Itelman is cofounder of Intelligence.AI, which aims to help organizations align  
their business and data strategies for a scientific approach to innovation. Ron previ‐  
ously worked on Personalized Learning & Analytics and Computational Psychomet‐  
rics in education, and Collaborative Intelligence in Life Sciences and BioPharma.  
Juan Cruz Viotti is a computer scientist with ample experience in IoT and systems  
programming. He graduated from the University of Oxford, and his research led  
to the proposal of an award-winning novel data serialization technology\: JSON Bin‐  
Pack. He currently researches data interchange technologies at his own research lab\:  
Sourcemeta, leads the Desktop Engineering team at Postman, and collaborates in  
the JSON Schema organization. Juan previously served as the Engineering Lead at  
Balena. Colophon  
The animal on the cover of Unifying Business, Data, and Code is a jackdaw. Closely  
related to ravens, jays, crows, rooks, and magpies, jackdaws are the smallest of the  
Corvidae family \(commonly known as the crow or corvid family\). There are two  
species of jackdaw\: the western jackdaw \(Coloeus monedula\) and the Daurian jackdaw  
\(Coloeus dauuricus\).  
Western jackdaws \(also known as Eurasian or European jackdaws\) are found across  
Europe, western Asia, and North Africa. Duarian jackdaws are native to eastern  
Asia \(China and eastern Siberia to Japan\). They live in a variety of habitats, such as  
farmland, urban and suburban settings, woodlands, coastal cliffs, and grasslands.  
Both species look similar when they are young and dominated by glossy black feath‐  
ers. As they reach adulthood, western jackdaws tend to grow gray plumage around  
the nape of their necks and have light irises. Daurian jackdaws develop creamy,  
white plumage that extends from their lower parts to up around their necks and  
have darker irises. The western species is slightly larger \(13 to 15 inches long\) than  
Daurian birds \(13 inches long\).  
Jackdaws are highly intelligent, gregarious, and vocal birds. They tend to have com‐  
plex social structures and spend the majority of their day scavenging on the ground  
for food. They are opportunistic omnivores that eat a variety of foods, including—but  
not limited to—insects, farm grains and cultivated fruits, chick and eggs of other  
birds, and carrion.  
While jackdaws are considered to be of least concern on endangered species lists,  
many of the animals on O’Reilly covers are endangered; all of them are important to  
the world.  
The cover illustration is by Karen Montgomery, based on an antique line engraving  
from British Birds. The series design is by Edie Freedman, Ellie Volckhausen, and  
Karen Montgomery. The cover fonts are Gilroy Semibold and Guardian Sans. The  
text font is Adobe Minion Pro; the heading font is Adobe Myriad Condensed; and the  
code font is Dalton Maag’s Ubuntu Mono. Learn from experts.  
# Become one yourself.  
Books | Live online courses  
Instant answers | Virtual events  
Videos | Interactive learning  
# Get started at oreilly.com.  
©2023 O’Reilly Media, Inc. O’Reilly is a registered trademark of O’Reilly Media, Inc. 175 7x9.1975  
