window.addEventListener("load", (event) => {
    if (window.location.hash) {
        try {
            document.querySelector(window.location.hash).click();
        } catch (error) {
            console.log(error);
        }
    }
});

// Article card click events
const myModal = new bootstrap.Modal(document.getElementById("articleContainer"), {});

// Article
document.getElementById('mh-uf-resources').addEventListener('click', function() {
    const myArticle = {
        slug: "mh-uf-resources",
        headline: "Mental health is a rising issue among UF students, survey shows",
        subtitle: "NCHA data reveals faith in UF decreasing, with rate of mental illnesses increasing",
        card_path: "ufmentalhealth.jpg", 
        card_caption: "Patricia Pascual // Alligator staff",
        author_one: "Jinelle Vazquez",
        author_two: "Kylie Williams",
        contact_one: "Contact Jinelle Vazquez and Kylie Williams at jvazquez@alligator.org and kyliewilliams@alligator.org. Follow them on Twitter @vazquezjinelle and @KylieWilliams99.",
        contact_two: "",
        about_one: "Jinelle Vazquez is a senior at UF pursuing a major in Public Health with a minor in Indigenous Studies. They currently report for the enterprise desk covering health. In their free time, they enjoy hiking, photography and making art.",
        about_two: "Kylie Williams is a second-year journalism major and the Fall 2023 environmental enterprise reporter. Outside of the newsroom, she can be found baking or watching reality TV.",
        date: "", // Leave blank
        desc: "Where UF deviates from national and statewide trends is in students’ belief that the university prioritizes their health and wellbeing. Only about 36% of UF students surveyed in 2022 believed their health and wellbeing are a priority for their university, nearly a 15 percentage point decrease from 2020, according to NCHA data. Overall, UF students experienced a post-COVID-19 spike in mental illnesses such as anxiety and depression.",
        body: "<p>Julianna Cicantelli describes herself as being &ldquo;battered and bruised&rdquo; since transferring from Valencia College to UF in Fall 2021.</p><p>The 22-year-old UF business administration senior was diagnosed with bipolar 1 disorder when she was 15. The disorder is defined by manic episodes that last for at least seven days and depressive episodes that typically last at least two weeks.</p><p>During her first semester at UF, Ciccantelli said she went to the infirmary for COVID-19-like symptoms. She informed the providers of her sensitivity to antihistamines due to her bipolar disorder.&nbsp;</p><p>&ldquo;They wrote it off as, &lsquo;You&rsquo;ll be OK, just continue to monitor your condition and the effects of [the prescribed medications],&rsquo;&rdquo; Ciccantelli said.</p><p>Ciccantelli was not aware at the time that she had been prescribed antihistamines. It wasn't until two weeks later when she returned home that her parents recognized her ongoing manic episode, she said.</p><p>&ldquo;All my life I was told to trust the doctors in charge because they knew better,&rdquo; Ciccantelli said. &ldquo;All it would have taken was a simple Google search on their end for them to have known the disastrous effects of the medications they prescribed to a young transfer Gator.&rdquo;</p><p>Between 2020 and 2022, the percentage of students surveyed at UF who reported being previously diagnosed with anxiety rose 40%. Similarly, the rate of ADHD increased 81%, and the rate of depression rose 43%. These increases in UF students&rsquo; mental health diagnoses align with <a href='https://www.acha.org/NCHA/ACHA-NCHA_Data/Publications_and_Reports/NCHA/Data/Reports_ACHA-NCHAIII.aspx'>national and statewide trends.</a></p><p>Where UF deviates from national and statewide trends is in students&rsquo; belief that the university prioritizes their health and wellbeing. Only about 36% of UF students surveyed in 2022 believed their health and wellbeing are a priority for their university, nearly a 15 percentage point decrease from 2020, according to NCHA data. Overall, UF students experienced a post-COVID-19 spike in mental illnesses such as anxiety and depression.</p><p>Experts attribute the surge to multiple causes, such as the pandemic, social media and changing societal norms. Alternatively, students appear to have less faith in the university and its ability to help them in their mental health struggles &mdash; especially given UF&rsquo;s culture around high academic achievement.&nbsp;</p><p>Since Fall 2021, Ciccantelli has been hospitalized three times for severe symptoms of her bipolar disorder. However, she has chosen to seek care from healthcare professionals in her hometown of Orlando instead of UF&rsquo;s mental health services.</p><p>&ldquo;I am glad I have accommodations in place [at UF] to get extra time for assignments and exams, but that&rsquo;s as far it goes,&rdquo; she said. &ldquo;I [feel] safer trusting my people at home.&rdquo;</p><p><strong>COVID-19 consequences&nbsp;</strong></p><p>UF Spokesperson Cynthia Roldan said although the long-term consequences of the global pandemic on mental health will continue to be studied, UF is committed to building a community where every Gator knows they&rsquo;re valued and respected.</p><p>Roldan listed UF resources such as 11 additional team members at the Counseling and Wellness Center; increased student-to-staff ratio; increased funding for the CWC&rsquo;s Consultation and Referral Team and the launch of Whole Gator, an application that connects the UF community with resources.</p><p>&ldquo;Even when we&rsquo;re not in the middle of a pandemic, college is a time for growth and change,&rdquo; she said. &ldquo;We want every Gator to have the tools they need to succeed.&rdquo;</p><iframe src='https://flo.uri.sh/visualisation/15898860/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height: 30rem;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><p>Lisa Wolcott, a Gainesville clinical therapist, said the increase in reported mental illness could be due to COVID-19. As the founder of Wolcott Counseling and Wellness, she has worked in mental health care for over two decades.&nbsp;</p><p>Since 2020, Wolcott and other therapists in her practice have noticed an influx of patients experiencing symptoms of depression, anxiety and OCD. Students who reported symptoms described feeling isolated due to the pandemic during high school or college, Wolcott said.&nbsp;</p><p>&ldquo;You&rsquo;re cut off at a time when you&rsquo;re supposed to be learning how to be social,&rdquo; she added.&nbsp;</p><p><strong>Decreasing stigma and college transition</strong></p><p>The increased normalization of mental health could also be a reason behind current trends, Jenny Banks, another therapist at Wolcott Counseling and Wellness, said.&nbsp;</p><p>&ldquo;A lot of patients come in with a curiosity now that there&rsquo;s definitely more of an open conversation about it,&rdquo; Banks said.&nbsp;</p><p>Banks has also seen what she refers to as &ldquo;TikTok self-diagnosis.&rdquo; As content surrounding mental health becomes more prevalent online, she said, patients relate it to their own personal experiences. This often leads them to seek out professional help, believing they have a specific mental illness.</p><p>That curiosity has led to an increase in diagnoses, mental health counselor Donielle Englert said. Englert, a counselor at Lucent Collaborative Services in Gainesville, sees many college-aged patients &mdash; particularly those with ADHD.&nbsp;</p><p>For many people, Englert said, the catalyst for mental illness symptoms is starting college. Attending college is a transitional time, she added and can introduce many stressors that didn&rsquo;t previously exist in a student&rsquo;s life.</p><p>Englert didn&rsquo;t disclose whether this has also led to an increase in prescription medications. In her counseling sessions, Englert said she helps patients find treatments for mental illness based on their individual needs. This can include medications, but alternatives are therapy, behavioral interventions or other methods.&nbsp;</p><p>&ldquo;It&rsquo;s just important if [patients] have questions, they want to explore mental health, to feel comfortable doing that,&rdquo; Englert added.&nbsp;</p><p><strong>Student experiences</strong></p><p>Lola Bautista-Bernard, a 20-year-old UF biology senior, attributes the decreased rate of students&rsquo; perceived well-being at the university to two things: the rigorous academic environment and the culture among professors.</p><p>Bautista-Bernard was diagnosed at UF last year with major depressive disorder, a mood disorder that causes a persistent feeling of sadness and loss of interest for at least two weeks. She was also diagnosed with ADHD and anxiety in 2021.</p><p>&ldquo;I feel like [at UF they] totally ignore the deeper [issues],&rdquo; she said. &ldquo;They don&rsquo;t want to talk about it because it&rsquo;s not an environment that&rsquo;s meant for that and that&rsquo;s just reflected in our student government,&rdquo; Bautista-Bernard said.</p><p>Bautista-Bernard said the UF Student Government focuses its mental health events on time and stress management, often ignoring the deeper issues students with mental health disorders like ADHD deal with.&nbsp;</p><p>Bautista-Bernard also said professors teaching STEM courses often intentionally make their classes more challenging to weed out students. In large classes, professors are unconcerned if half their students fail an exam, she added.</p><p>&ldquo;If I were to go to a professor and say something about my mental health, most likely the response would be &lsquo;OK, but everybody has these problems,&rsquo;&rdquo; she said. &ldquo;&lsquo;Everybody has these stresses and everyone else is fine.&rsquo;&rdquo;</p><p>Hanna Barbaree, a 20-year-old UF plant science sophomore, was placed on Zoloft and Ativan in August for major depressive disorder, anxiety and OCD.&nbsp;</p><p>&ldquo;I was almost incapable of functioning as a human being &hellip; I would not be able to sit down and begin to process the stressful assignments that I needed to get done,&rdquo; they said.</p><p>Barbaree said they have struggled with what they didn&rsquo;t know at the time were OCD flare-ups since coming to Gainesville as a PaCE student in Fall 2021.&nbsp;</p><p>Some of the symptoms Barbaree encountered at the time were intrusive thoughts, cycles of anxiety and perfectionism that interfered with their ability to complete tasks. This led to their placement on academic probation in Fall 2022 and medical withdrawal from the Spring 2023 semester, they added.</p><p>Through the process of the medical withdrawal, Barbaree said they had to open up and sob on Zoom calls with administrators. They felt as if they had to exploit their emotions to show the depth of the issues they were dealing with.</p><p>&ldquo;I wish I didn&rsquo;t have to reach that point in order to receive the help I needed,&rdquo; they said.</p><p>Barbaree has also begun to consider an ADHD diagnosis for their difficulty concentrating and excessive overthinking. Although Barbaree was recommended to the CWC for an ADHD diagnosis assessment, they shared they are hesitant to make an appointment due to the student-to-staff ratio.&nbsp;</p><p>&ldquo;I don&rsquo;t really want to throw my name in the hat,&rdquo; they said. &ldquo;I don&rsquo;t really want to get lost in there and I&rsquo;d rather go somewhere like a smaller place [where] they might have more attention for more specified issues.&rdquo;&nbsp;</p><p><em>Contact Jinelle Vazquez and Kylie Williams at jvazquez@alligator.org and kyliewilliams@alligator.org. Follow them on Twitter @vazquezjinelle and @KylieWilliams99.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthor').innerHTML += ' and ' + myArticle.author_two;
    }

    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;

parent.querySelector('#articleCardCaption').style.display = "block";

    if (myArticle.card_caption) {
        parent.querySelector('#articleCardCaption').innerText = myArticle.card_caption;
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

// Article
document.getElementById('acps').addEventListener('click', function() {
    const myArticle = {
        slug: "acps",
        headline: "‘It's probably helping some people’: High school students react to Alachua County school mental health curriculum",
        subtitle: "Some say resources are plenty, others say there are not enough",
        card_path: "acps.jpg", // Leave blank
        card_caption: "Evelyn Miguel // Alligator staff - Mazen Shehab, a senior at Buchholz High School,  stands in front of the school on Tuesday, Nov. 21, 2023.",
        author_one: "Alissa Gary",
        author_two: "",
        contact_one: "Contact Alissa Gary at agary@alligator.org. Follow her on Twitter @AlissaGary1.",
        contact_two: "",
        about_one: "Alissa Gary is a second-year journalism major who's covering K-12 education for The Alligator. She has previously reported on student government and university administration.  Aside from writing, she likes to take care of her plants and play (and usually win) the New York Times sudoku puzzle.",
        about_two: "",
        date: "", // Leave blank
        desc: "The Florida Department of Education requires middle and high school students to attend at least five hours of mental health education a year as of 2019. Presentation topics vary from anxiety and depression to dating violence and substance abuse, and they come as slideshows, Zoom calls and videos.",
        body: "<p>&ldquo;A chore,&rdquo; &ldquo;amazing&rdquo; and &ldquo;weird&rdquo; &mdash;&nbsp;all words Alachua County students used to describe the presentations about mental health they&rsquo;re required to watch in school.</p><p>The Florida Department of Education requires middle and high school students to attend at least <a href='https://www.fldoe.org/mental-health/'>five hours</a> of mental health education a year as of 2019. Presentation topics vary from anxiety and depression to dating violence and substance abuse, and they come as slideshows, Zoom calls and videos.</p><p>Alachua County Public Schools <a href='https://www.fldoe.org/core/fileparse.php/19980/urlt/2122-Alachua.pdf'>planned to spend</a> just under $2 million on mental health in the 2021-2022 school year. About $1.3 million of that budget was allocated toward school district employees, and $218,000 went to contractors and other outside collaborators.</p><p>While the students interviewed agreed the presentations were valuable to some, no student said the training provided personal substantial value.</p><p><strong>Lessons vary by school</strong></p><p>It&rsquo;s at each school&rsquo;s disclosure to decide how mental health hours are taught, said Kimberly Joy, a district mental health coordinator.</p><p>&ldquo;No matter what school you go to, you're gonna learn about this just as you would at your previous school,&rdquo; she said.</p><p>Data suggests teen mental health is plummeting by the year. About 29% of high school students nationwide said they experienced poor mental health within 30 days. Similarly, 42% said they felt consistent sadness or hopelessness within a year, up from 28% in 2011, according to a 2021 <a href='https://www.cdc.gov/healthyyouth/data/yrbs/pdf/YRBS_Data-Summary-Trends_Report2023_508.pdf'>survey</a> from the Center for Disease Control.</p><iframe src='https://flo.uri.sh/visualisation/15899669/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><p>Yet, across the board, students said attendance and participation fall on mental health days.&nbsp;</p><p>Guilherme Salmeron Binelli, an 18-year-old Eastside High School senior, said his school dedicates one period a day for a week to mental health education. During the last period of the day, teachers show mental health presentations instead of their regular classes.</p><p>&ldquo;It's more like a chore or like a day off than something to pay attention to,&rdquo; he said.</p><p>Most students do come to school on mental health week so they can attend the first five classes of the day, Binelli said. However, most treat their last class as a free period, and they tend to not pay attention, he said.</p><p>&ldquo;Not having content is pretty much the same as not having class at all,&rdquo; he said.</p><p>Joy said the district is aware of the attendance issue. To mitigate it, the district encourages schools to teach mental health strategies and participate in awareness campaigns throughout the year.</p><p><strong>More than mental health</strong></p><p>The baseline mental health education was updated in 2021 and 2022 to prevent drug abuse and teach life skills, largely at the push of Gov. Ron DeSantis&rsquo; wife, Casey DeSantis.&nbsp;</p><p>The five hours of mental health education were reworked and renamed to resiliency education, an all-encompassing term for teaching skills like empathy, responsibility and gratitude, in the policy&rsquo;s 2022 update.</p><p>In response to a request for comment, a spokesperson for the DeSantis administration sent a March press release.</p><p>&ldquo;As a mama of three little ones, I am proud that Florida is leading the nation in education, and I am thrilled to see how our efforts to reframe and rethink mental health will equip our students and future Floridians to be more resilient,&rdquo; Casey DeSantis said in the press release.</p><p>Anna Adams, a 17-year-old Professional Academy Magnet at Loften High School senior, said most of the information shown at Loften&rsquo;s annual mental health days is not interesting. The day fulfills the school&rsquo;s required five hours of training.</p><p>&ldquo;It's very basic knowledge,&rdquo; she said, adding she&rsquo;s heard some of the information in the past from outside therapists.</p><p>Loften separates students into groups by their last names during mental health days, regardless of their grade level, Adams said. As a result, students aren&rsquo;t paired with their friends, which she said makes the process even less appealing.</p><p>Presentations covered various topics, including drug abuse and a mother discussing her children's mental health struggles. However, some presentations were entirely unrelated to mental health.</p><p>Of the lessons she remembered, Adams said the most useful were those about identifying toxic relationships.</p><p>&ldquo;Those ones I think have really made some students realize that they're not in a healthy relationship,&rdquo; she said. &ldquo;So I think that one's pretty good.&rdquo;</p><p><strong>Beyond the presentations</strong></p><p>Mazen Shehab, a 17-year-old Buchholz High School senior, echoed the sentiment that students don&rsquo;t pay attention on mental health days.&nbsp;</p><p>&ldquo;I don't think there's a big focus on mental health with a lot of students I know,&rdquo; he said. &ldquo;They just enjoy having less time in school.&rdquo;</p><p>He had moved to Florida from Lebanon in 2022 before his junior year of high school. While he hasn&rsquo;t dealt with serious mental health issues since arriving at Buchholz, he said a more interactive approach &mdash;&nbsp;one where administrators reached out to students, instead of the other way around &mdash; might encourage students to be more open about their mental health struggles.</p><p>He also said some students, including himself, would turn to friends and family before teachers and counselors if they were struggling with mental health.</p><p>&ldquo;A lot of people in high school need a lot of help mentally,&rdquo; he said. &ldquo;And I don't think friends are the only way to do it.&rdquo;</p><p>Mental health is a topic close to the heart for 18-year-old Ava Avera, also a BHS senior, who organizes an annual 5k run dedicated to suicide prevention. Mental health is freely talked about at Buchholz, she said, and teachers are open to helping students.</p><p>&ldquo;Even if it's not like an official thing on paper, besides our mental health days, I think our faculty does a really great job of ensuring safety and just helping students feel heard,&rdquo; she said.</p><p>At least 80% of district employees are required by the <a href='https://www.fldoe.org/schools/k-12-public-schools/sss/ymhat.stml#:~:text=Effective%20November%2022%2C%202022%2C%20Rule,youth%20mental%20health%20awareness%20training.'>Florida Department of Education</a> to attend a 12-hour Youth Mental Health First Aid course. First implemented in the 2022-2023 school year, the certification teaches employees to deal with mental health crises and to be understanding with student concerns.</p><p>Avera appreciates that mental health days at Buchholz cover a variety of topics, she said. While not every presentation resonates perfectly with every student, she said it&rsquo;s still important to have them.</p><p>&ldquo;I definitely think that it helps some people at school, even though it may not help all,&rdquo; she said.</p><p><em>Contact Alissa Gary at</em> <a href='mailto:agary@alligator.org'><em>agary@alligator.org</em></a><em>. Follow her on Twitter @AlissaGary1.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthor').innerHTML += ' and ' + myArticle.author_two;
    }

    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;

parent.querySelector('#articleCardCaption').style.display = "block";

    if (myArticle.card_caption) {
        parent.querySelector('#articleCardCaption').innerText = myArticle.card_caption;
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }   

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }
    
    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

// Article
document.getElementById('sf-mhe').addEventListener('click', function() {
    const myArticle = {
        slug: "sf-mhe",
        headline: "Nonresidential? No problem: Santa Fe College students find community, involvement",
        subtitle: "SF offers a multitude of mental health services, student life organizations",
        card_path: "sfmhe.jpg", // Leave blank
        card_caption: "Adriel Bolocon // Alligator staff - Students play chess and interact with each other in the Oak Grove courtyard on campus at Santa Fe College on Sept. 13, 2023.",
        author_one: "Bailey Diem",
        author_two: "",
        contact_one: "Contact Bailey Diem at bdiem@alligator.org. Follow her on Twitter @BaileyDiem.",
        contact_two: "",
        about_one: "Bailey Diem is a first-year journalism major at UF and is the Santa Fe Reporter for The Alligator for Fall 2023. When not reporting, Bailey can be found playing guitar or getting lost in a book.",
        about_two: "",
        date: "", // Leave blank
        desc: "Despite having no on-campus housing, SF students have access to a variety of student organizations to get involved on campus and make friends. The college also offers an assortment of mental health services for students to take advantage of, as it is one of five community colleges in the state to have a counseling center.",
        body: "<p>Santa Fe College&rsquo;s nonresidential status and small student population haven&rsquo;t stopped it from building a lively community for students like Malachi Cirasuolo, an 18-year-old SF graphic design freshman.</p><p>While Cirasuolo has struggled with motivation during their first semester at SF, loneliness has never been a problem, they said.</p><p>By getting involved with several SF organizations themselves, including PRIDE Club, Art Club and Gaming Club, Cirasuolo said they&rsquo;ve been able to meet and connect with like-minded people, preventing them from feeling isolated.</p><p>&ldquo;Santa Fe has a lot of great clubs and events which I have been able to make friends through,&rdquo; Cirasuolo said. &ldquo;Everyone is super friendly, too, so it&rsquo;s easy to socialize.&rdquo;</p><p>Despite having no on-campus housing, SF students have access to a variety of student organizations to get involved on campus and make friends. The college also offers an assortment of mental health services for students to take advantage of, as it is one of five community colleges in the state to have a counseling center.</p><p>Community college students are more likely to lack the mental health resources offered at larger universities and are therefore less likely to get help for mental health problems, according to a 2021 <a href='https://ps.psychiatryonline.org/doi/10.1176/appi.ps.202000437'>American Psychiatric Association</a> survey.&nbsp;</p><p>While community college students generally reported poor mental health at the same rate as four-year university students, the same survey found &ldquo;the proportion of students reporting one or more mental health problems who did not use therapy or medication &hellip; was wider for community college students.&rdquo;</p><p>While SF retired its title of &lsquo;community college&rsquo; in 2008, it remains a nonresidential school with a population of around 14,000 full-time students &mdash; less than half of the undergraduate population of UF.</p><p>Lara Zwilling, the acting director of the SF Counseling Center, said SF is among a few community and state colleges in Florida able to provide students with counseling services.</p><p>A recent grant from the Florida Department of Health opens up new windows for SF, Zwilling said. The grant helps fund mental health first aid and crisis training for faculty members and student peer ambassadors.</p><p>SF also started a virtual wellness service in August available 24/7 for SF students known as <a href='https://www.sfcollege.edu/studentlife/student-wellness/timelycare/'>TimelyCare</a>.</p><p>&ldquo;You can speak to a medical doctor, or you can speak to a counselor, and it&rsquo;s all free just from being a student,&rdquo; Zwilling said. &ldquo;We&rsquo;re one of the only community colleges that offer that.&rdquo;</p><p>SF also hosts a variety of opportunities for students to get involved on campus, which might help students combat any feelings of isolation they might be experiencing, Zwilling said.</p><p>&ldquo;We do have a very robust student life program,&rdquo; she said. &ldquo;They really try to engage because&nbsp;</p><p>we know that a student&rsquo;s sense of belonging is what&rsquo;s going to keep them here.&rdquo;</p><p>Summer Zaffuto, an 18-year-old SF psychology freshman from Ponte Vedra, values her newfound independence. Still, starting at a new school with new people can be a big adjustment, she said.</p><p>&ldquo;When I was in high school, I was constantly surrounded by friends,&rdquo; Zaffuto said. &ldquo;I was also in the school&rsquo;s band program, so not having that big group of people has been kind of hard.&rdquo;&nbsp;</p><p>However, getting involved in student life at SF was easy, she said.</p><p>&ldquo;I joined a lot of clubs and am the secretary of the psychology club, which is fun,&rdquo; Zaffuto said.</p><p>Beyond experiencing the usual ups and downs of college life, Nathan De Los Reyes Diaz, a 23-year-old SF cybersecurity freshman, said he often feels extra isolated due to his deafness.&nbsp;</p><p>&ldquo;I would like to meet people, but sometimes I feel left out because I&rsquo;m deaf,&rdquo; he said. &ldquo;When everyone else is talking, I feel a little left out and lonely sometimes.&rdquo;</p><p>De Los Reyes Diaz often struggles with his mental health and said he felt lost when he started at SF.</p><p>&ldquo;In the beginning, I had a little bit of a rough time. I was completely alone,&rdquo; he said. &ldquo;I didn&rsquo;t know what to do.&rdquo;</p><p>One of his previous interpreters suggested he get involved with the ASL club at SF, De Los Reyes Diaz said.</p><p>&ldquo;I decided to go there,&rdquo; he said. &ldquo;That&rsquo;s helped a lot with socialization and making new friends.&rdquo;</p><p>For Izzy Scarpatti, a 19-year-old SF psychology sophomore, having fewer students at SF made it easier to build friendships. While she hasn&rsquo;t had time to get involved in clubs, she&rsquo;s met people through daily interactions, she said.</p><p>&ldquo;I&rsquo;m just a shy person in general, so usually I won&rsquo;t speak up, but a lot of people are very nice and outgoing,&rdquo; Scarpatti said. &ldquo;All the friends I&rsquo;ve made have usually talked to me first, which is really nice.&rdquo;</p><p>Scarpatti believes she would feel more isolated if she were attending a large university. The college&rsquo;s small class sizes have helped her connect with other students, she said.</p><p>&ldquo;I definitely like how small the classes are,&rdquo; Scarpatti said. &ldquo;I feel like it is much less intimidating and I have made a good amount of new friends from classes!&rdquo;</p><p>Scarpatti encourages students to get involved at SF if they&rsquo;re feeling lonely, she said.</p><p>&ldquo;[Do] not be scared to talk to people or join clubs like I was,&rdquo; she said. &ldquo;People are genuinely super nice and probably feeling similar.&rdquo;</p><p><br><em>Contact Bailey Diem at</em> <a href='mailto:bdiem@alligator.org'><em>bdiem@alligator.org</em></a><em>. Follow her on Twitter @BaileyDiem.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthor').innerHTML += ' and ' + myArticle.author_two;
    }
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;

parent.querySelector('#articleCardCaption').style.display = "block";

    if (myArticle.card_caption) {
        parent.querySelector('#articleCardCaption').innerText = myArticle.card_caption;
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

// Article
document.getElementById('psychology-mhe').addEventListener('click', function() {
    const myArticle = {
        slug: "psychology-mhe",
        headline: "Why study psychology?: UF program teaches students about mental health",
        subtitle: "Students share their interests, career goals in the field",
        card_path: "psychology.jpg", // Leave blank
        card_caption: "Gabrielle Aulisio // Alligator staff - Anderson Finch, a graduate student in psychology at UF, stands next to the Cognition and Decision Modeling Laboratory on Tuesday, Nov. 21, 2023.",
        author_one: "Megan Howard",
        author_two: "",
        contact_one: "Contact Megan Howard at mhoward@alligator.org. Follow her on Twitter @MeganMHxward.",
        contact_two: "",
        about_one: "Megan Howard is a second-year journalism major and the University General Assignment reporter. In her free time she enjoys reading and belting Taylor Swift songs.",
        about_two: "",
        date: "", // Leave blank
        desc: "Conversations around mental health continue to grow every day in media and classrooms. With these conversations and life experiences, students show interest in degrees and careers in psychology.",
        body: "<p>After he received a diagnosis of generalized anxiety disorder, Tyler Favier realized mental health can also influence physical health.&nbsp;</p><p>&ldquo;I remember the first time I had a panic attack,&rdquo; he said. &ldquo;I thought I was straight up dying in AP U.S. History class.&rdquo;</p><p>Favier met with many doctors and specialists, but no one could figure out why he was experiencing physical symptoms like migraines and stomach issues.&nbsp;</p><p>&ldquo;That had me have this big realization of the importance of taking care of your mental health and that it could be psychologically related,&rdquo; he said.</p><p>Conversations around mental health continue to grow every day in media and classrooms. With these conversations and life experiences, students show interest in degrees and careers in psychology.</p><p>Favier is a 20-year-old UF psychology junior with a specialization in behavioral and cognitive neuroscience.</p><p>He started at UF with an associate&rsquo;s degree with an emphasis in psychology. Originally, he hoped to study neuroscience, but UF doesn&rsquo;t offer a neuroscience degree.&nbsp;</p><p>The UF psychology department offers three undergraduate tracks for students to pursue: general psychology, behavioral and cognitive neuroscience and behavioral analysis.&nbsp;</p><p>UF also offers a master&rsquo;s in psychology and developmental, neurobehavioral and cognitive sciences, behavioral analysis and social psychology doctorate degrees.&nbsp;</p><p>When Favier started taking more neuropsychology classes, his interests shifted to clinical psychology, which would allow him to study the brain-body connection and help patients with chronic illnesses.&nbsp;</p><p>&ldquo;I was thinking about how stress and anxiety can produce stabbing stomach pain or headaches and how our mental health impacts our physical functioning,&rdquo; he said. &ldquo;That&rsquo;s always been a really big interest for me.&rdquo;</p><p>With many diverse paths to pursue in psychology, students&rsquo; reasons and motivations differ by psychological specialty.</p><p><strong>Anderson Fitch and experimental psychology</strong></p><p>Anderson Fitch, 24, recently completed his master&rsquo;s in experimental psychology and is applying for his PhD candidacy at UF. Like many college students in undergrad, he found his passion by exploring options at his university.</p><p>Originally, he began his undergraduate studies at Kansas State University studying biology, in hopes of becoming a doctor. When it came time to choose a research lab, Fitch found himself drawn to Dr. Kimberly Kirkpatrick&rsquo;s psychology lab on impulsive decisions in rats.</p><p>&ldquo;It made me realize that this is something that I could see myself doing in the future,&rdquo; Fitch said. &ldquo;It&rsquo;s something that is really exciting for me. So that&rsquo;s how I found my path.&rdquo;</p><p>In the second semester of his junior year, Fitch switched his major to psychology. He then went on to apply for UF&rsquo;s graduate program, which puts students on track to obtain their PhD, he said.</p><p>Working with his adviser and principal research investigator Dr. Peter Kvam, Fitch continued to study cognitive processes through experiments on decision making.&nbsp;</p><p>One of their recent studies has participants play a spaceship game to understand how people make random, impulsive, consistent and thoughtful decisions.</p><p>&ldquo;We are trying to figure out, for a given scenario, what types of mechanisms are necessary to produce the behavior that we see,&rdquo; Fitch said.&nbsp;</p><p>The research uses mathematical modeling to understand what contributes to impulsive and consistent behavior.</p><p>&ldquo;We can characterize those different aspects [of behavior] and see which things we need to include in our model to try and understand the behavior,&rdquo; Fitch said.&nbsp;</p><p>Now, Fitch has his PhD and is considering psychology in academia or industrial data science. The industry side of psychology would give him better benefits, but the professor and research track would allow him to keep researching exciting topics in experimental psychology.&nbsp;</p><p>&ldquo;Being a professor is a little more fun,&rdquo; Fitch said. &ldquo;You get to do the things you like doing, but you&rsquo;re not compensated as well.&rdquo;</p><p><strong>Ellie Mitova and neuropsychology</strong></p><p>Ellie Mitova is a 21-year-old UF psychology senior with a behavioral and cognitive neuroscience specialization.&nbsp;</p><p>Her psychology interest started after taking AP Psychology in high school. She then took dual-enrollment psychology courses, which further ignited her interest.&nbsp;</p><p>&ldquo;I knew that psychology was something that interested me because I wanted to study human behavior,&rdquo; Mitova said.</p><p>After going through therapy and watching her friends struggle with mental health, Mitova realized psychology should be better advocated for in the social media age, she said.</p><p>&ldquo;Now especially with social media, social ideologies and perceptions that people need to fit into things, it has increased the necessity of mental health professions because there is increased depression, anxiety or stress,&rdquo; she said.</p><p>Mitova entered college studying psychology and the pre-med track with the intention of one day becoming a neurosurgeon.&nbsp;</p><p>&ldquo;Eventually, I figured out that track [pre-med] wasn&rsquo;t for me, so I started taking more psychology-oriented and neuroscience behavior classes,&rdquo; she said. &ldquo;I was able to finally figure out what career I wanted.&rdquo;</p><p>Now, she wants to obtain her master&rsquo;s and doctorate in neuropsychology, which combines behavior and neurological science.</p><p>&ldquo;It can focus on people with traumatic brain injuries or neurocognitive deficits or any type of disorder such as ADHD, Alzheimer&rsquo;s and schizophrenia,&rdquo; Mitova said.</p><p>On top of her studies, Mitova has worked for three psychology research labs and is the president of UF Psychology Club and the UF chapter of the international honor society in psychology, Psi Chi.&nbsp;</p><p>The clubs work with the Alachua County Crisis Center, bring in guest speakers and connect students with internships and research opportunities.</p><p><strong>Amy Dukeshire and media psychology</strong></p><p>Amy Dukeshire is a 20-year-old psychology and advertising junior. She applied to UF as a pre-med biology major but soon realized the medical route was not her path. Reflecting on her time in high school taking AP Psychology and her long-held interest in psychology, Dukeshire decided to switch majors.&nbsp;</p><p>&ldquo;I have always liked the idea of helping people and being there for people,&rdquo; she said.</p><p>Last Spring, Dukeshire added a second degree, advertising, because she didn&rsquo;t want to graduate early. When picking up a second major, she looked for a field that would complement her psychology background.&nbsp;</p><p>&ldquo;I do like the idea of integrating the two, whether it&rsquo;s through research or there&rsquo;s a field of study called media psychology, which I also think would be a perfect mix of the two [degrees],&rdquo; Dukeshire said.</p><p>Like many other psychology students hoping to pursue graduate school, Dukeshire busies her schedule with research labs and psychology clubs. She currently works in Dr. Colin Smith&rsquo;s attitudes and political cognitions lab studying implicit bias.</p><p>&ldquo;I do really like this one, and I have always had an interest in social psychology, which is what that&rsquo;s a part of,&rdquo; Dukeshire said.</p><p><strong>Rachel Wimer and general psychology</strong></p><p>Rachel Wimer, a 21-year-old UF general psychology senior, chose to study psychology because of how it influences everyone&rsquo;s life.&nbsp;</p><p>&ldquo;I feel as though it&rsquo;s very interdisciplinary,&rdquo; she said. &ldquo;It interacts with everything we do.&rdquo;</p><p>Upon graduation, Wimer will take a gap year to focus on research before applying to graduate school. Her time in a cognitive decline research lab and volunteer hours at UF Health Shands Hospital neuromedicine unit made her realize she wants to pursue a career in clinical psychology.</p><p>At Shands, Wimer helps create a clean environment for patients and supports patients by talking with them in their rooms.&nbsp;</p><p>&ldquo;You&rsquo;re allowed to sit and talk with them if they want company, and I think that helps in the psychology domain because you&rsquo;re getting to talk with people about their life or whatever they&rsquo;re going through,&rdquo; she said.</p><p><em>Contact Megan Howard at mhoward@alligator.org. Follow her on Twitter @MeganMHxward.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthor').innerHTML += ' and ' + myArticle.author_two;
    }
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;

parent.querySelector('#articleCardCaption').style.display = "block";

    if (myArticle.card_caption) {
        parent.querySelector('#articleCardCaption').innerText = myArticle.card_caption;
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

// Article
document.getElementById('perception').addEventListener('click', function() {
    const myArticle = {
        slug: "perception",
        headline: "Perception vs. reality: Drugs, alcohol and sex ",
        subtitle: "Do college students fit the ‘party’ reputation?",
        card_path: "perception.jpg", // Leave blank
        card_caption: "Aubrey Bocalan // Alligator staff",
        author_one: "Bea Lunardini",
        author_two: "",
        contact_one: "Contact Bea Lunardini at blunardi@alligator.org. Follow her on Twitter @bealunardini.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", // Leave blank
        desc: "In the barrage of media depicting college life, it seems to revolve around trying anything and everything, but does first-hand information from college students really support that? A survey of UF students for the spring 2022 National College Health Assessment shows it’s complicated.",
        body: "<p>College movies and shows say a student&rsquo;s four years of university go by in a blur of keggers, frat parties and random hookups. Nostalgic stories from older family members center the drinks snuck from bars that didn&rsquo;t check IDs, and some alumni can recite the list of specials and prices from their local bar more accurately than their course schedule.&nbsp;</p><p>In the barrage of media depicting college life, it seems to revolve around trying anything and everything, but does first-hand information from college students really support that? A survey of UF students for the <a href='https://www.acha.org/documents/ncha/NCHA-III_SPRING_2022_UNDERGRAD_REFERENCE_GROUP_EXECUTIVE_SUMMARY.pdf'>spring 2022 National College Health Assessment</a> shows it&rsquo;s complicated.&nbsp;</p><p>Part of the reason why results are complicated is because the same activity can have vastly different results on each person doing it. It&rsquo;s impossible to say the things measured in the NCHA are entirely negative or positive, but it is true that they can have significant effects on mental health.&nbsp;</p><p>Alcohol and many drugs are depressants, which can <a href='https://pubmed.ncbi.nlm.nih.gov/8626352/'>cause anxiety and depression</a> symptoms and exacerbate existing feelings. Casual sex, defined as sex outside of a relationship in a <a href='https://www.tandfonline.com/doi/full/10.1080/00224499.2020.1821163'>2020 study</a>, had mixed results on mental health, boosting the self-esteem of some and tanking that of others.&nbsp;</p><p>The survey separates data from UF students by gender, with three categories represented: cisgender men, cisgender women and trans/gender non-conforming individuals. Data was collected anonymously from students.&nbsp;</p><p><strong>Drugs &amp; Alcohol&nbsp;</strong></p><p>Florida is one of 38 states to allow the use of medical marijuana, and the Gainesville area has historically been a hub for the drug&rsquo;s use, both legally and illegally. However, most UF students haven&rsquo;t dipped their toe into this aspect of Gainesville&rsquo;s culture, according to data collected by the NCHA.</p><p>More than half of UF students said they have never used marijuana or cannabis. Just over 13% of students last used marijuana more than a year ago, and just under 15% last used within the two weeks prior to the survey.&nbsp;</p><p>The NCHA also collected data on alcohol, noting the frequency and quantity of drinks consumed. Students were asked when the last time they drank alcohol was, and the two most common answers were never and within the last two weeks. Over 55% of respondents said they had consumed alcohol within the last two weeks, while just under 20% said they had never had alcohol.&nbsp;</p><p>Jess Waters is a 21-year-old UF family, youth and community sciences junior who also works as a student assistant with GatorWell Health Promotion Services. She has spent the last two years developing alcohol outreach and awareness programs for students.&nbsp;</p><p>&ldquo;Based on the work I&rsquo;ve done with GatorWell, this is a little surprising, but mostly makes sense,&rdquo; she said. &ldquo;We do a lot of outreach events to educate people about their alcohol use and a decent number of people walk by and say that they don&rsquo;t drink, so anecdotally, 20% sounds about right for non-drinkers.&rdquo;&nbsp;</p><p>Outside of her experience on the job, however, Waters wasn&rsquo;t expecting to see the numbers.&nbsp;</p><p>&ldquo;As a student, I&rsquo;m shocked,&rdquo; she said. &ldquo;I&rsquo;ve never been to a party where there wasn&rsquo;t enough alcohol for double the people there, and everybody seemed to be drinking.&rdquo;&nbsp;</p><p>Just because students seem to be drinking doesn&rsquo;t mean they are, though. Fatima Muhammad, a 20-year-old political science sophomore, is the one of five UF students who has never had an alcoholic drink.&nbsp;</p><p>&ldquo;I am a devout Muslim,&rdquo; she said, &ldquo;and my faith is one of the most important things in my life. I don&rsquo;t drink at all and I don&rsquo;t plan to.&rdquo;&nbsp;</p><p>Muhammad felt a bit out of place when she first came to UF, not knowing how to navigate an environment that seemed completely foreign.&nbsp;</p><p>&ldquo;It took a while to feel comfortable at frat parties,&rdquo; she said. &ldquo;It can be awkward to be the only one without a drink in your hand, and I felt like there was a big spotlight on me showing everyone that I wasn&rsquo;t like them.&rdquo;&nbsp;</p><p>Eventually, she found solutions that made her feel much better when it came to drinking.&nbsp;</p><p>&ldquo;I don&rsquo;t worry as much anymore about what people think because I know they don&rsquo;t notice someone not drinking,&rdquo; she said. &ldquo;I also like things like Liquid Death (a can of water that mimics the look of a beer can) because they make me feel like I&rsquo;m more immersed in the party experience without having to compromise my values.&rdquo;&nbsp;</p><p>The data on the quantity of drinks consumed contradicts the idea that college students drink large amounts frequently. Nearly 80% of students surveyed said that they had four or fewer drinks the last time they drank in a social setting. Almost 8% said they had seven or more, and less than 15% had five or six.&nbsp;</p><p>The mean number of drinks consumed on a night out for all students surveyed was three, with cisgender men averaging 3.6 drinks and cisgender women and gender non-conforming people averaging 2.7 and 2.8, respectively.&nbsp;</p><iframe src='https://flo.uri.sh/visualisation/15899472/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><p><strong>Sex</strong></p><p>The survey also asked questions about sexual behavior, including the frequency with which students engaged in different kinds of sexual activity.&nbsp;</p><p>Within the two weeks leading up to the survey, students had engaged in vaginal sex the most frequently, followed closely by oral sex. Anal sex was the least common activity measured, with over 80% of students saying that they had never engaged in it.&nbsp;</p><p>Over 70% of students said they had one sexual partner in the last 12 months. About 11% said two, 6% said three and another 11% indicated that they had had four or more sexual partners in the last year.&nbsp;</p><p>Students were also asked about their use of protection, like condoms or dental dams. Almost 5% of students said that they used protection &ldquo;most of the time&rdquo; or &ldquo;always&rdquo; when they had oral sex, while 43% said so for vaginal sex and 18% said so for anal sex.&nbsp;</p><p>Transgender and gender non-conforming students used protection at rates higher than the average for all three forms of sex. Transgender non-conforming students indicated using protection during oral sex at twice the rate of the average and protection during anal sex at triple the average rate.&nbsp;</p><p>Ryan Gall, a UF College of Medicine doctor and professor, believes the difference in protection rates among gender non-conforming individuals is due to increased education regarding sex.&nbsp;</p><p>&ldquo;Although sex ed tends to be lacking in middle and high school, UF has a lot of resources specifically geared toward the LGBTQ+ community,&rdquo; Gall said. &ldquo;There&rsquo;s inclusive, free protection in the Rainbow Room at the Reitz and a lot of information about sex that is meant to target overlooked population demographics.&rdquo;</p><p>Although there are many options for LGBTQ+ students to become more aware about safe sex practices, increased rates of protection also come from a history of fear.&nbsp;</p><p>&ldquo;A lot of queer people find themselves afraid of sex because the AIDS epidemic hangs over their heads,&rdquo; Gall said. &ldquo;They protect themselves because they don&rsquo;t want to be called irresponsible or lumped in with all of the LGBTQ+ people who have died.&rdquo;</p><p>Students are using drugs, drinking and having sex at rates that may surprise people, but what&rsquo;s not surprising is the toll on their mental health these activities can have. From alcoholic depressants to the stimulant effect of casual sex and everything in between, many UF students may find their mental health at the mercy of their surroundings.&nbsp;</p><p><em>Contact Bea Lunardini at</em> <a href='mailto:blunardi@alligator.org'><em>blunardi@alligator.org</em></a><em>. Follow her on Twitter @bealunardini.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthor').innerHTML += ' and ' + myArticle.author_two;
    }
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;

parent.querySelector('#articleCardCaption').style.display = "block";

    if (myArticle.card_caption) {
        parent.querySelector('#articleCardCaption').innerText = myArticle.card_caption;
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

// Article
document.getElementById('baking-club').addEventListener('click', function() {
    const myArticle = {
        slug: "baking-club",
        headline: "UF students connect through cookies, cakes and critical life lessons",
        subtitle: "Student organization Baking4Wellness promotes mental health education for members",
        card_path: "bakingclub.jpg", // Leave blank
        card_caption: "Courtesy to The Alligator - Baking4Wellness members bake cookies with UF community service club Gator Diplomats at La Casita Thursday, Nov. 16, 2023.",
        author_one: "Jared Teitel",
        author_two: "",
        contact_one: "Contact Jared Teitel at jteitel@alligator.org. Follow him on Twitter @jaredteitel.",
        contact_two: "",
        about_one: "Jared Teitel is a third-year journalism major, and this is his second semester as an Avenue reporter. In his free time, he enjoys running, shopping, and drinking coffee. ",
        about_two: "",
        date: "", // Leave blank
        desc: "Baking4Wellness started with one young woman’s dream to bring her two most important values to her college campus: sweet treats and strength.",
        body: "<p>Dec. 21, at 6:25 p.m., Reddit user Ledgelaa made an ambitious post to the UF subreddit.&nbsp;</p><p>&ldquo;Baking4Wellness is a rising organization at UF that is working towards promoting mental and general health awareness through the art of baking,&rdquo; she wrote.&nbsp;</p><p>Now, this multifunctional student organization with dozens of members nears its one-year anniversary at UF. Baking4Wellness started with one young woman&rsquo;s dream to bring her two most important values to her college campus: sweet treats and strength.&nbsp;</p><p>Last winter, Lejla Cancar, a 21-year-old UF health science junior, was itching to involve herself in any student organization that met her interests. But browsing web pages and scrolling through social media feeds led her to a dead end.&nbsp;</p><p>Her love for baking and interest in mental wellness pushed her to come up with a club of her own.&nbsp;</p><p>&ldquo;I figured it would be pretty unique to combine the two,&rdquo; she said, &ldquo;considering a lot of people use baking as stress relief.&rdquo;&nbsp;</p><p>After seeking approval from UF Student Government, Cancar was ready to turn her novel concept into a real-life endeavor. She took to social media such as Reddit and Instagram to advertise the creation of Baking4Wellness and encourage her fellow students, struggling with mental health or not, to join her in the kitchen.&nbsp;</p><p>&ldquo;I struggle with severe anxiety,&rdquo; she said about her motivation to begin the organization. &ldquo;I wanted to use [Baking4Wellness] as a way to share resources were out there.&rdquo;&nbsp;</p><p>As Cancar continued to call attention to the campus club, interest slowly started to spark and funding from the student government began to flow.&nbsp;</p><p>Ten months later, Cancar said Baking4Wellness has grown to roughly 50 members, including additional students outside the organization who attend baking events.&nbsp;</p><p>&ldquo;That&rsquo;s what we&rsquo;re here for,&rdquo; she said. &ldquo;You come when you need it.&rdquo;&nbsp;</p><p>For Cancar, creating the club came with the challenge of equally dividing the activity of baking and the focus on mental health awareness. As an organization that meets three to four times per semester, Baking4Wellness devotes some days to baking workshops while others to health seminars.&nbsp;</p><p>Topics of discussion at general body meetings have included eating disorders, fitness and wellness and misconceptions about disabilities, she said.&nbsp;</p><p>&ldquo;We try to do topics that are very relatable to other people,&rdquo; she said. &ldquo;That way, if they want to seek resources to help them, they can come to our GBMs.&rdquo;&nbsp;</p><p>On multiple occasions, the organization has hosted guest speakers with professional experience in such sensitive topics. In the spring, UF Police Department Victim Advocate Kelly Jackson discussed the issue of sexual violence with club members.&nbsp;</p><p>Jackson was invited by Baking4Wellness Vice President Emily Dong, a 19-year-old UF food science sophomore. After an experience with violent threats, Dong said, she reported the incident to the Office of Victim Services and subsequently met with Jackson.</p><p>&ldquo;When I was in crisis,&rdquo; she said, &ldquo;Kelly spent a whole morning helping me talk to an officer, communicate with my family&hellip;as well as take me to crisis counseling.&rdquo;&nbsp;</p><p>Dong joined Baking4Wellness in Spring with the intent of putting her love for cooking and baking into practice. Little could she predict that the organization would soon become the support system she needed.&nbsp;</p><p>&ldquo;I [am] drawn to the mission,&rdquo; she said. &ldquo;Take care of yourselves.&rdquo;&nbsp;</p><p>Mikayla Agbamuche, a 22-year-old UF natural resource conservation senior, is a baking chair of Baking4Wellness. For her, her discovery of the organization was an act of fate; having found the Reddit post while on the website looking for information about a course she was interested in.&nbsp;</p><p>&ldquo;Wow, this is something I&rsquo;d love to do: baking and teaching other people how to bake,&rdquo; she said, recalling her thoughts upon discovering Baking4Wellness.&nbsp;</p><p>As a baking chair, Agbamuche researches recipes and schedules baking workshops each semester. With a tight budget, she said, the type of dishes, equipment and spaces is limited for the group.&nbsp;</p><p>&ldquo;Sometimes we have to do scaled-back versions of recipes or no-bake recipes,&rdquo; she said, &ldquo;just so we can make sure it&rsquo;s accessible to everyone.&rdquo;&nbsp;</p><p>Without access to a fully equipped kitchen, the student bakers bring handheld mixers, toaster ovens, pots and portable air fryers into classrooms, apartments or houses. There, they have produced piping hot pastries, pumpkin snickerdoodle cookies and &ldquo;spooky brownies&rdquo; during the fall season.&nbsp;</p><p>But Baking4Wellness leaders want members to take away so much more than what comes out of the oven.&nbsp;</p><p>&ldquo;The baking aspect is we know you&rsquo;re dealing with all this stuff,&rdquo; Agbamuche said. &ldquo;We want you to have a healthy relationship with food&hellip;[and] the kitchen.&rdquo;&nbsp;</p><p>With one last general body meeting before the end of the semester, Baking4Wellness is determined to become a significant resource for students seeking help for their mental health by Spring.&nbsp;</p><p>&ldquo;We&rsquo;re still growing,&rdquo; Cancar said. &ldquo;I want people to know there are resources, and I want people to use them.&rdquo;&nbsp;</p><p><em>Contact Jared Teitel at jteitel@alligator.org. Follow him on Twitter @jaredteitel.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthor').innerHTML += ' and ' + myArticle.author_two;
    }
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;

parent.querySelector('#articleCardCaption').style.display = "block";

    if (myArticle.card_caption) {
        parent.querySelector('#articleCardCaption').innerText = myArticle.card_caption;
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

// Article
document.getElementById('basketball').addEventListener('click', function() {
    const myArticle = {
        slug: "basketball",
        headline: "‘I went through hell’: Florida women’s basketball guard overcame multiple injuries, mental exhaustion from old school",
        subtitle: "NCAA data reveals surge in mental exhaustion, anxiety, depression among athletes post-2020 shutdown",
        card_path: "basketball.jpg", // Leave blank
        card_caption: "Ryan Friedenberg // Alligator staff - Florida guard Kenza Salgues celebrates on the sideline with head coach Kelly Rae Finley during the teams win over the Bethune Cookman Wildcats on Thursday, Nov. 9, 2023.",
        author_one: "Brandon Hernandez",
        author_two: "",
        contact_one: "Contact Brandon Hernandez at bhernandez@alligator.org. Follow him on Twitter @BranH2001.",
        contact_two: "",
        about_one: "Brandon Hernandez is currently the enterprise sports writer and sports podcast host for The Independent Alligator. He likes long walks on the sidewalk and watching basketball tape in his off time. You can find most of his work @BranH2001 on X and on The Courtside Podcast on Spotify.",
        about_two: "",
        date: "", // Leave blank
        desc: "Salgues’ mental state has been tested through both injury and isolation. In the aftermath of the COVID-19 pandemic, her and many athletes across the country experienced heightened levels of mental exhaustion, anxiety and depression — reportedly 1.5 to two times more than before the 2020 shutdown, according to data gathered by the NCAA in 2022.",
        body: "<p>UF graduate student guard Kenza Salgues has become one of the Gators top facilitators coming off the bench. The 5-foot-9-inch guard rolls up the hardwood of the Billy Donovan Court, creating illusions while she entices opponents to reach in &mdash; just to drill an accurate 3-point shot with ease over them.</p><p>The French native has showcased her expertise as a seasoned Division 1 basketball player early this season. However, it&rsquo;s lessons from her days with the Miami Hurricanes while sidelined due to season-ending injuries that seemed never-ending, and have brought her to these moments.</p><p>Salgues&rsquo; mental state has been tested through both injury and isolation. In the aftermath of the COVID-19 pandemic, her and many athletes across the country experienced heightened levels of mental exhaustion, anxiety and depression &mdash; reportedly 1.5 to two times more than before the 2020 shutdown, according to <a href='https://www.ncaa.org/news/2022/5/24/media-center-mental-health-issues-remain-on-minds-of-student-athletes.aspx#:~:text=As%20a%20follow,of%20the%20pandemic.'>data</a> gathered by the NCAA in 2022.</p><p>&ldquo;I went through hell in Miami,&rdquo; she said, emphasizing how her injuries challenged her mental state as she found herself in rehab during most of her four-year tenure with the Hurricanes rather than on the court with her teammates.</p><p>Although now transferred to Florida, she won&rsquo;t forget her turbulent time in Miami &mdash; but instead use it to benefit both herself and the Gators during the 2023-2024 campaign.</p><p><strong>When tragedy struck</strong></p><p>There were 564,712 injuries that occurred between 2014 and 2019 across all collegiate sports programs nationwide &mdash; 25% of them being severe enough to require athletes time off their sport, according to <a href='https://blog.gitnux.com/college-sports-injuries-statistics/#:~:text=High%20School%20RIOTM%20(2019)%20found%20that%20564%2C712%20injuries%20occurred%20between%202014%20and%202019%20across%20all%20collegiate%20sports%20programs%20nationwide%20%2D%20with%2025%25%20of%20these%20being%20severe%20enough%20to%20require%20time%20off%20from%20their%20sport%20according%20to%20NCAA%20data%20(n.d.)'>High School RIOTM (2019)</a>.&nbsp;</p><p>Salgues became one of those athletes, all during and after the COVID-19 pandemic.</p><p>At first, her injuries seemed behind her. Salgues had surgery for her ankle before her first season at Miami, allowing the French prospect to play in 25 games. She led all freshmen at UM 3-point field goals made with 11 on the year and clocked 204 minutes of playing time in her first-year.</p><p>Salgues then went back home to France over the offseason while the COVID-19 pandemic put the world into lockdown. She worked hard to get better for her sophomore year, training for the entire summer. Salgues was in the best shape of her life, she said.</p><p>Then tragedy struck. The guard dislocated her right shoulder during a practice in the offseason. Salgues went into rehab that sidelined her for the majority of her sophomore year.</p><p>&ldquo;I couldn&rsquo;t do anything,&rdquo; she said. &ldquo;I couldn't do the simple stuff: eating, couldn&rsquo;t clothe myself, I had to be dependent on people, which I hated.&rdquo;</p><p>She appeared in the final four games of Miami&rsquo;s 2020-2021 season and looked to come back strong for the next year.</p><p>However, her injured ankle from freshman year would sideline her from the action once again her junior year &mdash; dampening her mood &mdash; resulting in another season-ending surgery. The veteran spent another season in rehab. She didn&rsquo;t play for 936 days.</p><p>Stuck in the States and with the world shut down from the pandemic, Salgues&rsquo; family &mdash; especially her aunt Ticha &mdash; played a huge part in aiding the athlete mentally.</p><p><strong>Early years</strong></p><p>Salgues&rsquo; family introduced her to her love of the game. Her mother played professionally in France and allowed Salgues to train in the gym when she was as young as 3 years old.&nbsp;</p><p>This led Salgues down a path to enroll at 14 in the National Institute of Sports, Expertise and Performance in Paris, an institution run under the administration of the French Ministry of Sports for elite athletes.</p><p>For three years, Salgues practiced twice a day for a scheduled four days per week while she took classes. The regiment was hard for Salgues, but it was an amazing experience she said, as only a few people from every generation are able to do what she did at INSEP.</p><p>The Parisian institute takes a total of 780 elite athletes through its application process, but only 530 will be taken and enrolled for the year. INSEP, which houses 14- to 18-year-old athletes who participate in 28 Olympic and Paralympic sports, has 280 federal coaches on staff and a budget of $38 million euros.</p><p>The institute has produced professional basketball players such as Clint Capela, Boris Diaw, Johan Petro and Hall of Famer Tony Parker.</p><p>&ldquo;It was really hard, but it was definitely good for my personal development,&rdquo; Salgues said. &ldquo;Also, when you&rsquo;re part of it, you're pretty sure of making your national team.&rdquo;</p><p>Salgues played for the French U-16 and U-18 national teams in both the FIBA&rsquo;s U16 Women&rsquo;s European Championship in 2016 and U18 Women&rsquo;s European Championship in 2018.&nbsp;</p><p>By the time she graduated from the institute and committed to play for the Hurricanes, she was <a href='https://miamihurricanes.com/roster/kenza-salgues/#:~:text=Graduate%20of%20the%20National%20Institute%20of%20Sport%2C%20Expertise%20and%20Performance%20in%20Paris%E2%80%A6Ranked%20the%20No.%2020%20international%20player%20in%20the%202018%20class%20by%20ProspectsNations.com%E2%80%A6Four%2Dstar%20prospect%20and%20second%2Dbest%20player%20from%20France'>ranked</a> No. 20 international player in the class of 2018 and the second best player in France.</p><p>Despite an unparalleled upbringing in the sport, a successful career in basketball is never guaranteed.</p><p><strong>Mentally strong: Salgues&rsquo;s transfer to UF</strong></p><p>The Hurricane transfer spent the majority of her time at Miami dealing with a shoulder injury and a recurring ankle injury. Salgues only saw action in 11 games in her senior year at Miami. Through four seasons, Salgues appeared in only 40 games overall.</p><p>After so much time not playing, Salgues knew she needed to make a change.</p><p>&ldquo;I just want to be happy playing the game again,&rdquo; Salgues said.</p><p>She decided to transfer for her last year of eligibility to Florida, looking for playing time in the SEC and to be coached by Florida head coach Kelly Rae Finley.</p><p>She&rsquo;s now tunnel-visioned on rediscovering the joy of playing the game of basketball.</p><p>In the Gators&rsquo; first six games of the season, Salgues averaged 2.8 points per game &mdash; shooting at an 50% clip beyond the arc. The 5-foot-9-inch guard looks to keep this average up with her injuries behind her.</p><p>&ldquo;I don&rsquo;t think there&rsquo;s something that can phase me,&rdquo; Salgues said. &ldquo;I&rsquo;ll never complain. I&rsquo;m just grateful to be able to walk right now, because I was in the scooter and in the cast for so long.&rdquo;</p><p><em>Contact Brandon Hernandez at</em> <a href='mailto:bhernandez@alligator.org'><em>bhernandez@alligator.org</em></a><em>. Follow him on Twitter</em> <a href='https://twitter.com/BranH2001'><em>@BranH2001</em></a> <em>.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthor').innerHTML += ' and ' + myArticle.author_two;
    }
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;

parent.querySelector('#articleCardCaption').style.display = "block";

    if (myArticle.card_caption) {
        parent.querySelector('#articleCardCaption').innerText = myArticle.card_caption;
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

// Article
document.getElementById('baseball').addEventListener('click', function() {
    const myArticle = {
        slug: "baseball",
        headline: "Florida baseball embraces transfer portal with Alabama star Colby Shelton",
        subtitle: "Shelton is the latest star to transition to the Gators in recent seasons",
        card_path: "Florida-2.jpg", // Leave blank
        card_caption: "Chloe Hyde // Alligator staff - The Gators baseball team celebrates Tyler Shelnut’s home run in Florida’s 5-4 win against the South Carolina Gamecocks on Friday, June 9, 2023.",
        author_one: "Max Tucker",
        author_two: "",
        contact_one: "Contact Max at mtucker@alligator.org. Follow him on Twitter @MaxTuckerUF25.",
        contact_two: "",
        about_one: "Max Tucker is a junior transfer student at UF. After obtaining his A.A. in Journalism from Santa Fe College in 2023, he chose further his education at Florida's College of Journalism and Communications. Max is currently pursuing his Bachelor of Science in Journalism with a specialization in sports and media. He enjoys golfing and going to the beach with his friends in his free time. Max will be covering the Gators Golf teams this Fall for The Alligator.",
        about_two: "",
        date: "", // Leave blank
        desc: "Being in a comfortable atmosphere is something that can benefit an athlete’s mental health. Although transferring schools can be a large transition, surrounding oneself with the right group of people can create a smooth acclimation.",
        body: "<p>Being in a comfortable atmosphere is something that can benefit an athlete&rsquo;s mental health. Although transferring schools can be a large transition, surrounding oneself with the right group of people can create a smooth acclimation.</p><p>This is true for Colby Shelton, a talented infielder who transferred from Alabama. The sophomore is a Florida native and adds a powerful swing to Florida&rsquo;s lineup. Shelton plans on playing shortstop for the Gators next Spring.</p><p>He has shared a similar experience that prior transfers went through. Although there will be a great deal of pressure to perform at a high level, the transition to a new team has been seamless for the sophomore.</p><p>&ldquo;My transition here has been really easy,&rdquo; he said. &ldquo;The coaches here have made it a real easy transition, at the end of the day it&rsquo;s just baseball, you can&rsquo;t overthink it.&rdquo;</p><p>The Gators are preparing for another run to the College World Series in their upcoming season. The sophomore transfer is ready to put his talents on display on the biggest stages to help deliver a national championship for his team.</p><p>With the loss of several key contributors from last year&rsquo;s lineup, Shelton envisions himself being one of many key pieces on the road to Omaha.</p><p>&ldquo;I think there&rsquo;s a lot of guys that are gonna play crucial roles,&rdquo; he said. &ldquo;It&rsquo;s going to be bigger than just me myself. I feel like if everyone does the role the best they can do it, it&rsquo;s going to ultimately help out the team best and contribute to us winning a bunch of ball games.&rdquo;</p><p>UF has established themselves as one of the elite collegiate programs in the sport. Year in and year out, the team has multiple players drafted into the MLB. This is a factor that weighed heavily in Shelton&rsquo;s decision to transfer, he said.</p><p>&ldquo;They have a good track record of getting guys drafted,&rdquo; he said. &ldquo;They have a bunch of people that play at the University of Florida in the major leagues and I think that speaks for itself.&rdquo;</p><p>Shelton was ranked as a top-20 impact transfer in September. The sophomore is coming off a stellar season for Alabama en route to collecting Freshman All-American honors. He led the Crimson Tide in home runs, OPS and slugging while raking in an impressive .300 batting average.</p><p>Last season, the transfers from Florida&rsquo;s team played significant roles throughout the year. Head coach Kevin O&rsquo;Sullivan doesn&rsquo;t have a huge track record of obtaining players from the transfer portal throughout his career.&nbsp;</p><p>However, in recent years, the Gators baseball program has seen major contributions from players up and down the lineup who didn't always don the orange and blue.</p><p>BT Riopelle was the starting catcher for the team in 2023. After beginning his career at Coastal Carolina, he took his talents to Gainesville to play against some of the best competition in college baseball.&nbsp;</p><p>There were adjustments that had to be made to gain a level of comfort within the program.</p><p>&ldquo;I think this year has really transitioned well,&rdquo; Riopelle said Feb. 6. &ldquo;If you have a good relationship with all the guys that will transition on the field and make you want to play a little bit better.&rdquo;</p><p>Another member from last season&rsquo;s team who went through similar adjustments was Hurston Waldrep.</p><p>Waldrep was a starting pitcher in the rotation who transferred from Southern Mississippi. Prior to last season, he explained why he chose to further his collegiate career at Florida.</p><p>&ldquo;When I entered the transfer portal I was looking for somewhere that had a good history of a pitching program and good coaching staff and just a solid team overall,&rdquo; Waldrep said on Dec. 7, 2022.</p><p>The transition to a premiere program in the SEC can be a daunting one. However, Waldrep was welcomed with open arms to his new program.</p><p>&ldquo;I&rsquo;m really looking forward to the season because the atmosphere here, the history of this program, these players and what I&rsquo;ve seen so far it&rsquo;s a lot to look forward to,&rdquo; Waldrep said on Dec. 7, 2022.</p><p><br><em>Contact Max at</em> <a href='mailto:mtucker@alligator.org'><em>mtucker@alligator.org</em></a><em>. Follow him on Twitter @MaxTuckerUF25.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthor').innerHTML += ' and ' + myArticle.author_two;
    }
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;

parent.querySelector('#articleCardCaption').style.display = "block";

    if (myArticle.card_caption) {
        parent.querySelector('#articleCardCaption').innerText = myArticle.card_caption;
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

// Article
document.getElementById('volleyball').addEventListener('click', function() {
    const myArticle = {
        slug: "volleyball",
        headline: "Gators volleyball stays resilient despite season-ending injuries",
        subtitle: "UF looks to place in NCAA Championships",
        card_path: "volleyball.jpg", // Leave blank
        card_caption: "Gracie Kurtz // Alligator Staff - The Gators volleyball team celebrates after a point in Florida’s 3-0 win against the Winthrop Eagles on Saturday, Sept. 9, 2023. ",
        author_one: "Krisha Sanghavi",
        author_two: "Alyssa Britton-Harr",
        contact_one: "Contact Krisha Sanghavi at ksanghavi@alligator.org. Follow her on Twitter at @krishasang.",
        contact_two: "Contact Alyssa Britton-Harr at abritton-harr@alligator.org. Follow her on Twitter @abrittonharr.",
        about_one: "Krisha Sanghavi is a third-year public relations and economics major. In her free time, she loves cheering on Miami sports teams and spending time with her friends.",
        about_two: "Alyssa Britton-Harr is a second-year journalism major and a sports reporter for The Alligator. In her free time, she enjoys cheering on the Tampa Bay Buccaneers and spending time with her friends. ",
        date: "", // Leave blank
        desc: "As the Gators volleyball team battled through the highs and lows of a demanding season, the toll on their mental resilience became increasingly apparent. Facing unforeseen adversities, including season-ending injuries to key players, the team went from an undefeated 8-0 record to a final 18-9 overall record.",
        body: "<p>In the Gators volleyball team&rsquo;s most prominent test of the season, No. 3 Florida sat one set away from a sweep against the No.1 Wisconsin Badgers.&nbsp;</p><p>However, the strenuous fight took a turn for the worse when Stucky fell to the ground off a jump in an effort to deflect a Wisconsin kill. The ball traced her fingertips to surpass her and tally another Badger point.&nbsp;</p><p>Off the play, the setter endured a season-ending knee injury. The abrupt injury marked the end of Stucky&rsquo;s season but fueled the team to forge together through their mental fortitude. Stucky tore her MCL, leaving the backup setter graduate student Kennedy Muff into the mix.&nbsp;</p><p>&ldquo;We battled with them without our All-American setter,&rdquo; Florida head coach Mary Wise said. &ldquo;I think it speaks to the grit of this team.&rdquo;&nbsp;</p><p>As the Gators volleyball team battled through the highs and lows of a demanding season, the toll on their mental resilience became increasingly apparent. Facing unforeseen adversities, including season-ending injuries to key players, the team went from an undefeated 8-0 record to a final 18-9 overall record.&nbsp;</p><p>In the next set against the Badgers, Stucky&rsquo;s absence became apparent.</p><p>Wisconsin almost doubled Florida&rsquo;s hitting percentage in set three with a 0.406% versus UF&rsquo;s 0.207%. Their momentum after Stucky&rsquo;s injury disappeared as each set tallied another loss to eventually award the Badgers their five-set victory.&nbsp;</p><p>Florida was hit with three season-ending injuries in the current season alone &mdash; Stucky, freshman outside hitter Kira Hutson and graduate student middle blocker Anna Dixon.&nbsp;</p><p>&ldquo;I know they are going to represent all the work we have put in on and off the court,&rdquo; Hutson wrote in a statement. &ldquo;This is just a minor setback to the major comeback!&rdquo;</p><p>The injuries brought the team closer together as they leaned on each other to power through challenges. Their positive team culture displayed on the court through cohesive plays and more mental toughness.&nbsp;</p><p>&ldquo;We really do love each other a lot and we really embody that &lsquo;play for each other&rsquo; mindset,&rdquo; Stucky said. &ldquo;We really grind and work really hard.&rdquo;&nbsp;</p><p>The Gators&rsquo; first regular season tournament, the Road 2 Tampa Bay Invitational, featured sweeps against high-ranked teams such as the then-No. 2 Stanford and then-No. 5 Minnesota.</p><p>Brimming with promise, the team dominated in preseason and early games to claim a top-10 ranking as they strung a chain of victories.</p><p>Ranked No. 8 at the time, Florida entered its matchup against Stanford as underdogs.</p><p>The Gators swept the Cardinal in three sets and dominated in every aspect of the game. Florida surpassed Stanford offensively with 48 kills compared to Stanford&rsquo;s 46. Defensively, UF held its opponent to 35 digs and amassed 42 digs itself.</p><p>&nbsp;Against Minnesota, Florida downed the Golden Gophers in three straight sets with 54 total points to 41.</p><p>The win streak propelled the Gators to the No. 3 in the AVCA Poll rankings.</p><p>After Florida&rsquo;s loss to Wisconsin, the team went on to win its next two matches, including a win over then-No. 24 Auburn, but the Gators hit a downslope when they lost to unranked Texas A&amp;M.&nbsp;</p><p>In its third SEC matchup, UF suffered their second loss of the season against the Aggies.&nbsp;</p><p>The win against No. 4 Florida at the time was Texas A&amp;M&rsquo;s first-ranked conference win in 24 years. Muff contributed with 42 assists, and freshman outside hitter Kennedy Martin delivered 16 kills.</p><p>&ldquo;If you&rsquo;re going to ask for an undersized setter to play [for the] first time in a tough match in this environment, Kennedy Muff is who you want,&rdquo; Wise said of Muff's addition during the game. &ldquo;She has so much guts, I love it.&rdquo;&nbsp;</p><p>&nbsp;Midway into the season, Hutson sustained a season-ending shoulder injury, which rendered her from hitting safely in the sport. She hit a career-high 14 kills and 15.5 points against No. 8 Penn State Aug. 25.</p><p>The game following her announcement, the Gators had their away-game winning streak snapped in a 3-1 loss against Mississippi State Oct. 13.</p><p>&nbsp;Florida regained their momentum and won two consecutive SEC matchups against Texas A&amp;M in four sets and Ole Miss in a three-set sweep toward the end of October. Despite the two wins, the next three weeks were followed by three consecutive SEC losses.</p><p>On Oct. 27, graduate student middle blocker Anna Dixon announced her season-ending elbow and wrist injury. Dixon had a short run with the Gators, but her impact on the team allowed her to reach a season-high of 10 kills against Penn State and mark 18 points against South Florida in the Gators&rsquo; first tournament of the season.</p><p>She switched to middle blocker over the summer before she came to UF from Missouri to help the team with its defense. The graduate student spent most of her career as an outside hitter. At Florida, she recorded 37 digs and 59 block assists to strengthen the Gators&rsquo; defense.</p><p>&ldquo;This is not a goodbye to [volleyball],&rdquo; Dixon wrote after her injury. &ldquo;It&rsquo;s just a goodbye to being a middle blocker.&rdquo;</p><p>Three games after the announcement of Dixon&rsquo;s injury, the Gators lost to three top-20 teams: No. 10 Arkansas, No. 11 Tennessee and No. 13 Kentucky.</p><p>UF fell without the prominent middle blocker, and in the unfortunate circumstances, Florida&rsquo;s poll ranking dropped from No. 14 to No. 21 in the AVCA Poll that week.</p><p>With the team grappling not only with the physical void left by Dixon but the mental strain of constant setbacks, the resilience of middle blockers senior Nnedi Okammor and junior Gabrielle Essix worked to fill the hole left by Dixon between games.</p><p>Okammor has a season-high of 10 blocks against Georgia and 12 kills against Tennessee. Essix recorded a season-high of seven kills against Kentucky and nine blocks against Texas A&amp;M.</p><p>With three season-ending injuries, blocks have been a major component defensively for Florida, but even with a setback, the team made a comeback.</p><p>Despite the injuries, the team strung together enough victories to clinch a spot in the NCAA Tournament. The team&rsquo;s resilient play demonstrated not only the team&rsquo;s physical prowess but also their mental resilience in the face of several season-ending injuries.</p><p>The Gators volleyball team fought through the adversity of injuries to achieve an overall 18-9 record and a 10-8 SEC record so far. Florida will play Florida Gulf Coast as the fourth seed in the NCAA Tournament at 7 p.m. Thursday in the Stephen C. O&rsquo;Connell Center.</p><p><em>Contact Krisha Sanghavi and Alyssa Britton-Harr at</em> <a href='mailto:ksanghavi@alligator.org'><em>ksanghavi@alligator.org</em></a> <em>and</em> <a href='mailto:abritton-harr@alligator.org'><em>abritton-harr@alligator.org</em></a><em>. Follow them on Twitter @krishasang and</em> <a href='https://twitter.com/abrittonharr'><em>@abrittonharr</em></a> <em>.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthor').innerHTML += ' and ' + myArticle.author_two;
    }
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;

parent.querySelector('#articleCardCaption').style.display = "block";

    if (myArticle.card_caption) {
        parent.querySelector('#articleCardCaption').innerText = myArticle.card_caption;
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

