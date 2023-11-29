(function() {

    window.addEventListener("load", (event) => {
        if (window.location.hash) {
            try {
                document.querySelector(window.location.hash).click();
            } catch (error) {
                console.log(error);
            }
        }
    });

    // Event listener for modal open
    document.getElementById('articleContainer').addEventListener('show.bs.modal', function() {
        scroll.stop();
    });

    // Event listener for modal close
    document.getElementById('articleContainer').addEventListener('hidden.bs.modal', function() {
        scroll.start();
    });

    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        repeat: true,
    });

    const handleScroll = () => {
        const cards = document.querySelectorAll('.card');

        cards.forEach((card) => {
            if (card.classList.contains('is-inview')) {
                card.classList.add('in-view');
            } else {
                card.classList.remove('in-view');
            }
        });
    };

    // Listen for Locomotive Scroll's scroll event
    scroll.on('scroll', handleScroll);

    // Trigger handleScroll on initial load
    handleScroll();


document.getElementById('copy-link-btn').addEventListener('click', function() {

    const copyLink = document.getElementById("copy-link-input");
    copyLink.select();
    copyLink.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyLink.value);

    document.getElementById("copy-link-notif").style.display = 'block';

    setTimeout(() => {
        document.getElementById("copy-link-notif").style.display = 'none';
      }, "3000");

}, false);


// Article card click events
const myModal = new bootstrap.Modal(document.getElementById("articleContainer"), {});

// Article
document.getElementById('rural-deserts').addEventListener('click', function() {
    const myArticle = {
        slug: "rural-deserts",
        headline: "A look into how Alachua County tackles mental health deserts in rural communities",
        subtitle: "Rural communities are disproportionately affected by mental health deserts",
        card_path: "Desert.jpg", 
        card_caption: "Diego Perdomo // Alligator staff",
        author_one: "Ella Thompson",
        author_two: "",
        contact_one: "Contact Ella Thompson at ethompson@alligator.org. Follow her on Twitter @elladeethompson.",
        contact_two: "",
        about_one: "Ella Thompson is a third-year journalism major who's on general assignment for The Alligator's metro desk. In her free time, she likes to read, cook and think of feature stories for The Alligator.",
        about_two: "",
        date: "", 
        desc: "The inability to access mental health services due to location or income creates an area known as a mental health desert. It disproportionately affects rural areas of the county. Across the United States, nearly a fifth of counties have no psychologists, psychiatrists or counselors, according to ABC News.",
        body: "<p>At the center of Alachua County lies the city of Gainesville, an urban-suburban mix with a system of health care facilities ranked among some of the best in the <a href='https://health.usnews.com/best-hospitals/area/fl/shands-at-the-university-of-florida-6390283'>state</a>. But for many residents of Alachua County outside of Gainesville, accessing mental health services is easier said than done.&nbsp;</p><p>The inability to access mental health services due to location or income creates an area known as a mental health desert. It disproportionately affects rural areas of the county. Across the United States, nearly a fifth of counties have no psychologists, psychiatrists or counselors, according to <a href='https://abcnews.go.com/Health/americas-mental-health-care-deserts-hard-access-care/story?id=84301748#:~:text=The%20ABC%20News%20analysis%20also,of%20counties%20with%20no%20providers.'>ABC News</a>.&nbsp;</p><p>Waldo city manager Kim Worley sees mental health accessibility as difficult and expensive. It&rsquo;s not an option for many Waldo residents, she said. Waldo has no mental health facilities in the city, with the closest options being Starke or Gainesville.&nbsp;</p><p>&ldquo;The rural towns do suffer because we are further out,&rdquo; she said.</p><p>The average income of a Waldo resident is just over $36,000, and the cost of mental health services inhibits residents from seeking help, she said. The average cost of therapy sessions in Florida ranges from $100 to $300, depending on the provider, clinic and if it&rsquo;s provided by a psychiatrist, according to The Sylvia Brafman <a href='https://sylviabrafman.com/insurance/cost/#:~:text=How%20Much%20Does%20Mental%20Health%20Treatment%20Cost%20in%20Florida%3F,experience%2C%20and%20where%20they%20practice.'>Mental Health Center</a>. Inpatient care, a type of care where the patient is admitted to a hospital, can cost thousands.&nbsp;</p><p>Waldo residents also have to account for the price it takes to get to a mental health facility, she said. Due to work schedules and other factors, many residents can&rsquo;t prioritize their mental health.&nbsp;</p><p>&ldquo;They don't have gas money or a working vehicle,&rdquo; Worley said. &ldquo;There's so many layers to the problem. I don't know. I don't know how to fix it.&rdquo;</p><p>Dr. Adil Mohammed, a board-certified psychiatrist who is the CEO and medical director of <a href='https://hupcfl.com/locations/gainesville-florida/'>Harmony United</a> Psychiatric Care, has experience working in Harmony United&rsquo;s Gainesville location, but the company has offices all over the state of Florida. After nine years with the company, he attributes mental health deserts in rural communities like Alachua County to a lack of quality internet connection, insurance costs and stigmas, he said.&nbsp;</p><p>Nearly two-thirds of rural counties lack a psychiatrist, while a majority are missing psychiatric nurse practitioners and about half do not have a psychologist, according to the <a href='https://www.nami.org/Blogs/NAMI-Blog/November-2022/Confronting-Mental-Health-Challenges-in-Rural-America'>National Alliance on Mental Illness</a>. This scarcity is significant when considering around 60% of rural Americans live in mental health deserts, and about 6.5 million people living in rural America have a mental illness, according to the <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7681156/'>National Library of Medicine</a>. The National Library of Medicine also reported that high-quality <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10076155/'>broadband</a>, or high-speed internet access, has become a social determinant of health.&nbsp;</p><p>&ldquo;You need high-speed internet to be able to do telehealth, otherwise you can't really get telehealth services because it uses larger bandwidth,&rdquo; he said.&nbsp;</p><p>Nearly 30% of rural Americans live without internet access, according to NAMI. But stigmas around mental health are another factor that stop rural residents from seeking help. Mental health issues are invisible to the eye &mdash; they don&rsquo;t hurt physically, Mohammed said, which can sometimes determine if residents seek treatment or care.&nbsp;</p><p>&ldquo;It is perceived as if you have some kind of weakness or some sort of character flaw, and then that kind of prevents them from receiving care,&rdquo; he said.&nbsp;</p><p>There are certain steps city and county leaders can take to alleviate mental health deserts and encourage access to services. Increasing access to healthcare through an internet connection could be a way to quickly promote accessibility, Mohammed said.&nbsp;</p><p>A longer course of action could be to incentivize mental health professionals to relocate to areas with a lack of professional services, he said.&nbsp;</p><p>Newberry, with a population between 7,000 and 8,000 people, has no mental health facilities, according to Newberry mayor Jordan Marlowe. Even in Newberry schools, guidance counselors have turned toward monitoring grade point averages, organizing testing and ensuring students graduate, he said, rather than providing mental health services.</p><p>Marlowe thinks residents are starting to view mental health as a personal investment &mdash; another aspect of self-care that contributes to overall health, but rapid growth in Florida has increased the cost of living in Alachua County, he said. Newberry&rsquo;s average household income is $69,000.&nbsp;</p><p>&rdquo;If it's between the rent and therapy, I think people choose the rent,&rdquo; Marlowe said.</p><p>Newberry is a rural city in Alachua County &mdash; 80% of Newberry land is agricultural land, while agriculture remains the city&rsquo;s second largest industry, just behind construction, Marlowe said.</p><p>Mental health is always a priority, he said, but city government in a small municipality doesn&rsquo;t always have an avenue to interject in mental health issues.&nbsp;</p><p>&ldquo;Our goal out here is to try to make sure that all of the things that are in our purview are kept affordable so that you can spend that money on your mental health needs,&rdquo; he said.&nbsp;</p><p><em>Contact Ella Thompson at</em> <a href='mailto:ethompson@alligator.org'><em>ethompson@alligator.org</em></a> <em>. Follow her on Twitter @elladeethompson.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

parent.querySelector('#articleCardCaption').style.display = "block";

if (myArticle.about_one.length < 4) {
        parent.querySelector('#articleAboutContainer').style.display = "none";
    }

    if (myArticle.card_caption) {
        const splitCaption = myArticle.card_caption.split('-');

            if (splitCaption.length >= 2) {
                const formattedCaption = splitCaption[1].trim() + ' - <em>' + splitCaption[0].trim() + "<em>";
                parent.querySelector('#articleCardCaption').innerHTML = "<span>" + formattedCaption + "</span>";
            } else {
                parent.querySelector('#articleCardCaption').innerHTML = myArticle.card_caption;
            }
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    myModal.show();
}, false);

// Article
document.getElementById('black-mh-needs').addEventListener('click', function() {
    const myArticle = {
        slug: "black-mh-needs",
        headline: "Alachua County residents grapple with lack of Black therapists, stigma around mental health",
        subtitle: "Residents and professionals discuss the negative effects on the community",
        card_path: "aatherapist.jpg", 
        card_caption: "Ashley Hicks // Alligator staff - Myesha Suckra-Dorbu sitting in her chair at Peace and Healing Therapy on Nov. 21, 2023.",
        author_one: "Valentina Sandoval",
        author_two: "",
        contact_one: "Contact Valentina Sandoval at vsandoval@alligator.org. Follow her on Twitter @valesrc.",
        contact_two: "",
        about_one: "Valentina Sandoval is a third-year journalism major and the Race and Equity/East Gainesville reporter for the Enterprise Desk. She has also worked writing and translating stories in Spanish for el Caimán. Whenever she's not writing, she's expanding her Animal Crossing island, making Spotify playlists or convincing someone to follow her dog on Instagram.",
        about_two: "",
        date: "", 
        desc: "The lack of professionals of color, combined with the existing stigma around seeking help in Black communities has led to a gap in mental health care in the county. Black mental health professionals and local residents wonder what can be done to provide Black individuals with the support and services needed.",
        body: "<p>When Sheyze X moved back to Gainesville from New York in 2022, they were hoping to find a therapist who looked like them and understood their story.&nbsp;</p><p>Instead, the 25-year-old Gainesville native and local artist was told by their insurance company that there were no Black therapists in the area taking new clients.</p><p>&ldquo;It just became increasingly difficult because going from having a Black woman therapist to suddenly not being able to have any Black therapist was [intensifying] the challenges for me,&rdquo; X said.</p><p>X, who was diagnosed with anxiety, general depression and ADHD in 2018, said their family discouraged them from sharing their diagnosis with others.</p><p>&ldquo;There&rsquo;s a huge stigma, and it kind of just left me feeling a bit alone in my mental health journey,&rdquo; X said. &ldquo;I didn&rsquo;t really feel supported.&rdquo;</p><p>Even though they are surrounded by a supportive community today, X wishes Alachua County better catered to the existing mental health needs of its Black population.&nbsp;</p><p> <a href='https://www.census.gov/quickfacts/fact/table/alachuacountyflorida/RHI225222'>Alachua County</a> &rsquo;s population is 20.4% Black or African American, and <a href='https://www.census.gov/quickfacts/fact/table/gainesvillecityflorida/RHI225222'>Gainesville</a> &rsquo;s population is 21.3%, making it the second largest race or ethnicity in its population, according to the U.S. Census Bureau.&nbsp;</p><p>However, there are only around 25 registered Black mental health professionals in Alachua County, six of which are not taking new clients, four are virtual, and only two are Black men, according to <a href='https://www.psychologytoday.com/us/therapists/fl/alachua-county?category=african-american'>Psychology Today</a>.</p><p>The lack of professionals of color, combined with the existing stigma around seeking help in Black communities has led to a gap in mental health care in the county. Black mental health professionals and local residents wonder what can be done to provide Black individuals with the support and services needed.</p><p><strong>Underserved Black communities</strong></p><p>For local activist Essence Thomas, among the most affected by the lack of Black mental health resources are the residents of East Gainesville, an underserved community with a predominantly Black population.&nbsp;</p><p>&ldquo;I&rsquo;m not seeing the community come out enough to help these people that are in need,&rdquo; Thomas said. &ldquo;There is a mental health crisis going on.&rdquo;</p><p>Most counselors in Gainesville are not located in the Eastside, and there is only one counseling center in the area, which is not led by Black mental health professionals. The closest resource and counseling centers are near UF, which is a 20-30 minute bus ride for East Gainesville residents.</p><p>Thomas said organizations seeking to help East Gainesville residents, such as GRACE Marketplace, do not have enough funding for mental health counselors on site, which only deepens the gap of available services.</p><p>&ldquo;East Gainesville has always been historically marginalized,&rdquo; Thomas said. &ldquo;So a lot of these people haven't been cultivated when it comes to mental health.&rdquo;</p><p>Thomas also said there should be a larger focus on the mental health of Black youth and formerly incarcerated people living in the Eastside to promote healthier lifestyles and put an end to the cycle of violence and crime afflicting the community.&nbsp;</p><p>&ldquo;When it comes to systemic racism and oppression, you have all these factors that trickle down into these communities,&rdquo; Thomas said. &ldquo;People can&rsquo;t thrive in communities when they are not being heard.&rdquo;</p><p><strong>Mental health stigma</strong></p><p>Another obstacle Black communities face in seeking care is the stigma around mental illness that persists in Black culture, according to professionals.</p><p>Myesha Suckra-Dorbu, a 31-year-old local mental health counselor, said she pursued her career to combat the stigma surrounding Black mental health that she experienced firsthand growing up in Jamaica.</p><p>&ldquo;They [the Black community] think, &lsquo;You can just suck it up, nothing is wrong with you, therapy is for crazy people,&rsquo;&rdquo; Suckra-Dorbu said.</p><p>She remembers being a child on the island and having family members with mental health issues that went untreated. Instead of receiving support from the community, Suckra-Dorbu said they were called &ldquo;madmen&rdquo; and &ldquo;madwomen.&rdquo;</p><p>While anxiety and depression are prevalent in Black communities, Suckra-Dorbu said, there is a common belief that a person will be viewed as weak if they seek help.</p><p>The stigma results in Black patients ending up in dire situations for untreated mental health issues, Suckra-Dorbu said. Emergency visits and hospitalizations for mental health issues are higher for Black residents than white residents both in Florida and Alachua County, according to the Florida Agency for Health Care Administration.</p><p>In Alachua County during 2021, the age-adjusted rate per 100,000 people of <a href='https://www.flhealthcharts.gov/ChartsDashboards/rdPage.aspx?rdReport=NonVitalInd.Dataviewer&amp;cid=9877'>hospitalizations from mental disorders</a> for Black residents was 1616.5 compared to white residents at 1191.3. The rate per 100,000 people of <a href='https://www.flhealthcharts.gov/ChartsDashboards/rdPage.aspx?rdReport=NonVitalInd.Dataviewer&amp;cid=890&amp;drpRateType=2&amp;drpMeasureType=Single%20Year&amp;drpCounty=1&amp;drpYear=-1&amp;drpCountRate=1&amp;drpRaceEthnicity=AllRaceEthnicity&amp;drpFLRaceEthnicity=AllRaceEthnicity&amp;drpFLYear=-1'>emergency department visits from mental disorders</a> for Black residents was 926.7 compared to white residents at 613.4.</p><iframe src='https://flo.uri.sh/visualisation/15899855/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><p>Suckra-Dorbu also worries about how averse Black men can be to seeking help from her, she said. She can count on one hand the number of Black male clients she has seen in her three years of practice.</p><p><strong>Black men and racial trauma</strong></p><p>Harold Hoskins is a 31-year-old Black head football coach for Eastside High School. Surrounded by young Black men, he&rsquo;s witnessed how opposed they can be to seeking mental health care.&nbsp;</p><p>&ldquo;I think it definitely is difficult to ask for help, but that comes from experience,&rdquo; Hoskins said. &ldquo;Some people [may] have asked for help but got burned in the past.&rdquo;</p><p>Black men hesitate to confide in people who are not close to them or can&rsquo;t relate to their experience, Hoskins said, making it difficult for them to trust a pool of mostly non-Black mental health professionals.&nbsp;</p><p>Black men also feel increased pressure to protect their families, further contributing to the distrust in mental health professionals, Hoskins said. When his students face problems in their homes, they are often taught to keep them in the house and not involve outsiders.</p><p>&ldquo;I would say a majority of my players feel comfortable enough to at least have a conversation so I can understand that they&rsquo;re not feeling okay,&rdquo; Hoskins said. &ldquo;[But] some of them may not want to elaborate on what they&rsquo;re going through.&rdquo;</p><p>Mardell Coleman, a 66-year-old Black psychologist who practices out of Alachua County, said the lack of Black representation in health care has created this wariness in communities of color toward mental health and medical care.</p><p>When given access to specialized mental health care, Black females and males do take advantage of those services, Coleman said. He estimates 65% of his clients are female and about 35% are male.</p><p>However, it is hard to meet local demands when he is one of only two Black male psychologists in Gainesville.</p><p>&ldquo;I am disappointed again, despite the progress, at how much further we have to go,&rdquo; he said.</p><p>Instead of speaking with a counselor, he said Black people mainly rely on other resources, like the church and religious organizations, to support their mental health.</p><p>Coleman said certain conditions, particularly trauma, have a disproportionate impact on Black people, particularly Black men, due to racial disparities. Organizations like the American Psychological Association have only recently begun recognizing the impact of slavery and racism on Black people&rsquo;s mental health, Coleman said.</p><p>Coleman has always seen filling the gaps in Black mental health care as a personal mission.</p><p>&ldquo;The world is disturbed,&rdquo; Coleman said. &ldquo;I wanted to help myself and other people navigate and understand that disturbance so that they can be their best.&rdquo;</p><p><em>Contact Valentina Sandoval at</em> <a href='mailto:vsandoval@alligator.org'><em>vsandoval@alligator.org</em></a><em>. Follow her on Twitter @valesrc.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);
    parent.querySelector('#articleCardCaption').style.display = "block";

if (myArticle.about_one.length < 4) {
        parent.querySelector('#articleAboutContainer').style.display = "none";
    }

    if (myArticle.card_caption) {
        const splitCaption = myArticle.card_caption.split('-');

            if (splitCaption.length >= 2) {
                const formattedCaption = splitCaption[1].trim() + ' - <em>' + splitCaption[0].trim() + "<em>";
                parent.querySelector('#articleCardCaption').innerHTML = "<span>" + formattedCaption + "</span>";
            } else {
                parent.querySelector('#articleCardCaption').innerHTML = myArticle.card_caption;
            }
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }

    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    myModal.show();
}, false);

// Article
document.getElementById('transgender').addEventListener('click', function() {
    const myArticle = {
        slug: "transgender",
        headline: "Mental health worsens among transgender, non-binary college students",
        subtitle: "Students discuss limited resources, growing discrimination",
        card_path: "transgenderexpereince.jpg", 
        card_caption: "Courtesy to The Alligator - Kerry Fitzgerald poses in front of the stage at Bo Diddley Plaza for the Gainesville Pride 2023 on Saturday, Oct. 21, 2023. ",
        author_one: "Sophia Bailly",
        author_two: "",
        contact_one: "Contact Sophia Bailly at sbailly@alligator.org. Follow her on Twitter @sophia_bailly.",
        contact_two: "",
        about_one: "Sophia Bailly is a second-year journalism major and covers politics for the enterprise desk. Some of her favorite things include The Beatles, croissants and Agatha Christie books. When she's not writing stories she's either reading or going for a run.",
        about_two: "",
        date: "", 
        desc: "Roughly half of transgender and gender non-conforming UF student participants in a survey said depression impacted their academic performance, according to UF’s 2022 National College Health Assessment. About 59% cited anxiety as impacting their academic performance.",
        body: "<p><em>Editor&rsquo;s note: This article contains mentions of suicide.</em></p><p>Kerry Fitzgerald learned about the terms transgender and non-binary from a friend in middle school, and everything started falling into place.</p><p>&ldquo;I was in a strict Catholic school environment, and the things they were telling me were not aligning with how I felt,&rdquo; Fitzgerald said.</p><p>Fitzgerald, a 21-year-old UF anthropology and psychology senior, uses they/them pronouns and identifies as transgender and non-binary. Their realization about their gender identity appeared in middle school.</p><p>For Fitzgerald, who started taking medication for anxiety and depression at 18, the political debate over transgender issues across Florida and the United States impacts their day-to-day life. They enrolled in UF Online for their freshman year of college due to their social anxiety.&nbsp;</p><p>&ldquo;There are times where I have to sit down and calm myself down because you don't even know if these people are just memorizing your pronouns,&rdquo; Fitzgerald said. &ldquo;It's a fear of being stereotyped.&rdquo;</p><p>Roughly half of transgender and gender non-conforming UF student participants in a survey said depression impacted their academic performance, according to UF&rsquo;s <a href='https://gatorwell.ufsa.ufl.edu/wp-content/uploads/2023/03/NCHA-2022-GatorWell-Health-Promotion-Services.pdf'>2022</a> National College Health Assessment. About 59% cited anxiety as impacting their academic performance.</p><p>The same study revealed about 6% of transgender and gender non-conforming students have attempted suicide within that year, which is twice the average mean of cisgender men and women. About 43% of the same group indicated experiencing high stress levels.&nbsp;</p><p>Discriminatory rhetoric and lack of university support have left transgender and non-binary students feeling ostracized on campus, worsening their mental health. Legal and mental health experts have witnessed the mental health of gender-diverse students decline as controversy surrounding transgender and non-binary rights rises in Florida.&nbsp;</p><p>After coming out to their family in 2021, Fitzgerald was accused of being on drugs and in need of a mental hospital. Similar rhetoric extends to the university campus.</p><p>&ldquo;I've had friends tell me, &lsquo;Oh, you can't come over because my roommates don't support you,&rsquo;&rdquo; Fitzgerald said.</p><p>Fitzgerald came out publicly in 2022 and began taking testosterone around the same time. They received top surgery in August.</p><p>Fitzgerald has a doctor who prescribes testosterone through <a href='https://ufhealth.org/conditions-and-treatments/transgender-health'>UF&rsquo;s Student Health Care Center</a>. However, they know of other students who struggle to gain the same access to hormone therapy due to insurance qualifications or limited appointment availability.</p><p>UF Counseling and Wellness Center and SHCC did not provide comments in time for publication.&nbsp;</p><p>UF provides spaces for queer organizations, but that&rsquo;s as far as the university steps, Fitzgerald said. As a member of the Queer Cultivation Program, UF Alumni for LGBTQ+ mentorship program and the Pride Student Union&rsquo;s trans empowerment events coordinator, Fitzgerald said these groups would not exist if not for student effort.</p><p>UF has also neglected to help guide students about the university&rsquo;s implementation of <a href='https://www.flsenate.gov/Session/Bill/2023/1521'>HB1521</a>, Fitzgerald said. The law <a href='https://www.alligator.org/article/2023/07/floridas-new-bathroom-law-prompts-concern-from-uf-students'>prohibits people</a> from using restrooms not aligned with their gender assigned at birth. Today, Fitzgerald either searches for a gender-neutral bathroom or has to use the women&rsquo;s restroom.</p><p>&ldquo;As a collective, the trans community is so tired,&rdquo; Fitzgerald said. &ldquo;Not only is being trans or non-binary a cultural thing, but it is a spiritual thing. It's an interpersonal connection with yourself.&rdquo;</p><p>Simone Chriss, 33, is the Southern Legal Counsel&rsquo;s director of Transgender Rights Initiative, which challenges discrimination and helps transgender individuals get access to gender and legal name changes. Florida&rsquo;s recent LGBTQ+ legislation hides under the guise of protecting children, when in reality it hurts people, Chriss said.&nbsp;</p><p>&ldquo;I have hundreds of clients who have been devastated by this,&rdquo; Chriss said. &ldquo;Some have left the state. Some have gone back into the closet because it's so devastating trying to exist.&rdquo;</p><p>Chriss created a <a href='https://www.floridanamechange.org/'>website</a> that walks Florida residents through the process of changing their gender and name, so they can see their affirmed gender, pronouns and names listed on documents. UF students can also <a href='https://policy.ufl.edu/policy/chosen-and-legal-name-and-gender-change/'>request</a> a chosen legal name and gender change through UF&rsquo;s Regulation and Policy Hub.</p><p>Chriss has noticed a rise in depression, anxiety and suicidal ideation among gender non-conforming individuals alongside the increase in legislation impacting LGBTQ+ individuals. Her clients struggle to go to school when they feel uncomfortable in their own bodies, she said.&nbsp;</p><p>Having on-campus resources like access to gender, name and pronoun changes on official documents that further connect people to their gender identities is critical to their mental health.&nbsp;</p><p>&ldquo;I think psychologists and psychiatrists and mental health providers can be really beneficial, but I think it's critical that people understand that on its own is not sufficient treatment for gender dysphoria,&rdquo; Chriss said.</p><p>Abbie Aldridge, who uses they/them pronouns, is a mental health counselor with a private, virtual therapy practice. They specialize in helping transgender and gender-diverse clients and have treated UF students.&nbsp;</p><p>Half of the roughly 35 clients they see have moved out of Florida or have plans to do so due to Florida&rsquo;s political climate surrounding transgender issues. Aldridge, too, moved from Largo, Florida, about a week ago to continue their practice in California.</p><p>&ldquo;Trans, non-binary and gender-diverse folks are very much like fish swimming upstream,&rdquo; Aldridge said.</p><p>Establishing more gender-neutral bathrooms and LGBTQ+ support groups on campuses would help gender non-conforming students feel more welcomed at their universities, they said.&nbsp;</p><p>&ldquo;Until a student feels safe and secure in their environment, academic achievement may falter,&rdquo; Aldridge said.</p><p>Al Mandese, a 22-year-old UF instrumental music education senior, is non-binary and uses they/them pronouns. They never felt like a boy or girl, and when they hit puberty, Mandese said they grew more self-conscious in their body.</p><p>&ldquo;I kept wishing that I had a flat chest, that I had a deeper voice,&rdquo; Mandese said. &ldquo;I never quite felt like a boy either. It was like a weird middle ground type thing.&rdquo;</p><p>When they came out publicly during their senior year of high school, their mom feared Mandese&rsquo;s life was going to get harder.&nbsp;</p><p>They plan to pursue a teaching career and work as a student teacher for Alachua County Public Schools. Their students regularly ask if they are a boy or a girl, and Mandese doesn&rsquo;t know how to respond.&nbsp;</p><p>&ldquo;I have to be very careful about how I talk about myself,&rdquo; they said.</p><p>Mandese fears they won&rsquo;t be respected in a professional environment or will only be known as the non-binary teacher. UF professors have also asked Mandese what courtesy title they plan on using. Mandese also said professors sometimes unintentionally draw attention to Mandese after learning their pronouns.</p><p>&ldquo;There were some teachers where it felt like sometimes that was all they really remembered about me,&rdquo; Mandese said.&nbsp;</p><p>Before coming to UF in 2021, Mandese spent a year at Florida State University, where symptoms of their OCD and anxiety disorders intensified with the transition to college. However, when Mandese approached FSU counseling services with suicidal thoughts, they were turned away after being told they didn&rsquo;t need immediate care.</p><p>After that experience, Mandese said they have largely avoided campus health resources. While they receive exposure therapy for OCD at UF Health Springhill, their friends and trusted professors serve as their support system.&nbsp;</p><p>&ldquo;Seeing out and proud queer people and proud trans people existing in the world gives me so much joy and happiness,&rdquo; Mandese said. &ldquo;That's a big part of the reason why I try not to compromise with who I am.&rdquo;</p><p><em>Contact Sophia Bailly at</em> <a href='mailto:sbailly@alligator.org'><em>sbailly@alligator.org</em></a><em>. Follow her on Twitter @sophia_bailly.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

parent.querySelector('#articleCardCaption').style.display = "block";

if (myArticle.about_one.length < 4) {
        parent.querySelector('#articleAboutContainer').style.display = "none";
    }

    if (myArticle.card_caption) {
        const splitCaption = myArticle.card_caption.split('-');

            if (splitCaption.length >= 2) {
                const formattedCaption = splitCaption[1].trim() + ' - <em>' + splitCaption[0].trim() + "<em>";
                parent.querySelector('#articleCardCaption').innerHTML = "<span>" + formattedCaption + "</span>";
            } else {
                parent.querySelector('#articleCardCaption').innerHTML = myArticle.card_caption;
            }
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }
    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    myModal.show();
}, false);

// Article
document.getElementById('hotline').addEventListener('click', function() {
    const myArticle = {
        slug: "hotline",
        headline: "Taking a look into being an Alachua County crisis hotline volunteer",
        subtitle: "About 75% of mental health calls to the county sheriff were due to Baker Acts",
        card_path: "hotline.jpeg", 
        card_caption: "Matthew Cupelli // Alligator staff",
        author_one: "Jordan Ramos",
        author_two: "",
        contact_one: "Contact Jordan Ramos at jramos@alligator.org. Follow him on Twitter @JordanR68971799.",
        contact_two: "",
        about_one: "Jordan Ramos is a fourth-year journalism major and the Fall 2023 criminal justice reporter for the Alligator. In his free time, he can be found singing with his acappella group.",
        about_two: "",
        date: "", 
        desc: "The Alachua County Sheriff’s Office received 421 mental health calls from Aug. 1 to Oct. 18, according to data from the sheriff’s department. About 75% of these calls were Baker Acts. Over a fifth of the calls were related to suicide attempts.",
        body: "<p>Sam Woodford, a 25-year-old high school teacher, didn&rsquo;t realize just how many people were experiencing mental health struggles until he started taking calls for the Alachua County Crisis Center.&nbsp;</p><p>&ldquo;When I volunteered for the center, it opened my eyes that there are people a mile away from me who have guns to their heads,&rdquo; Woodford said.</p><p>The <a href='https://alachuacounty.us/depts/css/crisiscenter/Pages/CrisisCenter.aspx'>Alachua County Crisis Center</a> has served the Gainesville community since 1969 and has about 120 volunteers every year.&nbsp;</p><p>The Alachua County Crisis Center answers 40,000 calls each year.&nbsp;</p><p>The center is open 24/7 and the hotline number is 352-264-6789. It offers short-term walk-in and appointment counseling services from 8:30 a.m. to 5 p.m. The center also has mobile response teams to assist people in person at all times of the day, every day of the week.&nbsp;</p><p>The Alachua County Sheriff&rsquo;s Office received 421 mental health calls from Aug. 1 to Oct. 18, according to data from the sheriff&rsquo;s department. About 75% of these calls were Baker Acts. A Baker Act is when a loved one requests emergency mental health services for someone who cannot or will not request that help when they are a danger to themselves or others.&nbsp;</p><p>Over a fifth of the calls were related to suicide attempts.&nbsp;</p><p>The Gainesville Police Department and ACSO failed to answer several phone calls from The Alligator to clarify if they transfer mental health calls to the Alachua County Crisis Center.&nbsp;</p><p>The county&rsquo;s crisis hotline typically trains volunteers to answer phone calls. Those who want to volunteer to be a crisis counselor can apply <a href='https://alachuacounty.us/depts/css/crisiscenter/pages/volunteer.aspx'>online</a>. Spring training starts Jan. 27.&nbsp;</p><p>&ldquo;It is one of the most challenging and rewarding things I&rsquo;ve done,&rdquo; said the Alachua County Crisis Center training coordinator, Kevin Sosa. &ldquo;The calls can be intense, heavy and scary.&rdquo;&nbsp;</p><p>After submitting an application, volunteers train for 60 hours over eight weeks. Training includes role-playing in different scenarios to prepare volunteers for the job, Sosa said.&nbsp;</p><p>After training, volunteers work with a supervisor to answer calls. Once that stage of the process is complete, the volunteer works on their own to answer calls.&nbsp;</p><p>Working at the center is a very &ldquo;collaborative and supportive environment,&rdquo; Sosa said.&nbsp;</p><p>Neha Mathew, a 21-year-old UF psychology senior, worked at the center in 2021 and early 2022.</p><p>&ldquo;They care so much and just want to be there,&rdquo; Mathew said about the volunteers.</p><p>People call for all kinds of reasons, even something as simple as needing someone to talk and vent to. Mathew has called for this very reason, she said.</p><p>Outside of the crisis center, Mathew encourages mental health training for other workplaces as well, especially schools.&nbsp;</p><p>After the Marjory Stoneman Douglass school shooting in 2018, Gov. Ron DeSantis signed the &ldquo; <a href='https://www.flsenate.gov/Session/Bill/2022/1421/BillText/er/PDF'>School Safety&rdquo; bill</a> which requires school staff to obtain mental health training through the <a href='https://www.fldoe.org/core/fileparse.php/19980/urlt/2122-Union.pdf'>Youth Mental Health and Training Awareness Plan.&nbsp;</a> </p><p>The YMHAT is an evidence-based plan that trains teachers and school administrators how to understand the signs of &ldquo;emotional disturbance, mental illness and substance use disorders.&rdquo; It teaches schools personal social-emotional learning, provides teachers with information about bullying, sexual assault, abuse and other issues.&nbsp;</p><p>Mathew advocates for this type of training in education because it teaches school personnel how to help those in a crisis without prying too much. Just the exposure to mental health crisis training will better equip educators to assist students and families in mental crisis, she said.&nbsp;</p><p>&ldquo;Not all of it will process but there's some part of it where &mdash; even if you're exposed to it &mdash; you'll know how to help a little better, which is really valuable,&rdquo; Mathew said.&nbsp;</p><p>The National Suicide and Prevention Hotline was first launched in 2005 with a large phone number but was later changed to 988 in 2020 to make it easier for people to remember, according to the <a href='https://www.samhsa.gov/sites/default/files/988-timeline.pdf'>Substance Abuse and Mental Health Services Administration.&nbsp;</a> </p><p>People who are experiencing mental health emergencies can call the National Suicide and Crisis Lifeline at 988.</p><p><em>Ella Thompson contributed to this story.</em></p><p><em>Contact Jordan Ramos at jramos@alligator.org. Follow him on Twitter @JordanR68971799.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

parent.querySelector('#articleCardCaption').style.display = "block";

if (myArticle.about_one.length < 4) {
        parent.querySelector('#articleAboutContainer').style.display = "none";
    }

    if (myArticle.card_caption) {
        const splitCaption = myArticle.card_caption.split('-');

            if (splitCaption.length >= 2) {
                const formattedCaption = splitCaption[1].trim() + ' - <em>' + splitCaption[0].trim() + "<em>";
                parent.querySelector('#articleCardCaption').innerHTML = "<span>" + formattedCaption + "</span>";
            } else {
                parent.querySelector('#articleCardCaption').innerHTML = myArticle.card_caption;
            }
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    myModal.show();
}, false);

// Article
document.getElementById('esa').addEventListener('click', function() {
    const myArticle = {
        slug: "esa",
        headline: "‘Even if I can’t take care of myself, I can take care of him’: Emotional support animals comfort UF students",
        subtitle: "ESAs at universities are a growing trend amid all-time high student anxiety rates",
        card_path: "esa.JPG", 
        card_caption: "Gracie Kurtz // Alligator staff - Koda, a trained therapy dog, sits next to his owners, Matt and Jess Seitz, at the NW 13th and NW 16th Starbucks on Thursday Nov. 16, 2023.",
        author_one: "Zoey Thomas",
        author_two: "",
        contact_one: "Contact Zoey Thomas at zthomas@alligator.org. Follow her on Twitter @zoeythomas39.",
        contact_two: "",
        about_one: "Zoey Thomas is a second-year media production, management and technology major, reporting for the metro desk. Other than writing, her passions include sweet potatoes, Agatha Christie and long-distance running.",
        about_two: "",
        date: "", 
        desc: "ESAs, a disability accommodation protected under the Fair Housing Act, are a growing trend in the United States — especially on college campuses, where depression, anxiety and suicidality rates are at an all-time high. At UF, students can request a residence hall ESA through the Disability Resource Center with medical documentation from a physician.",
        body: "<p>For the past two months, Julia Leser&rsquo;s mind has been clearer.</p><p>The 19-year-old UF biomedical engineering sophomore&rsquo;s anxiety has gone down, she said. She can commit more time to studying and working on her grades. Leser credits her newfound motivation to the 8-pound gray fur ball that moved into her dorm in September &mdash; Colby the cat, her emotional support animal.&nbsp;</p><p>ESAs, a disability accommodation protected under the <a href='https://www.hud.gov/program_offices/fair_housing_equal_opp/fair_housing_act_overview'>Fair Housing Act</a>, are a growing trend in the United States &mdash; especially on college campuses, where depression, anxiety and suicidality rates are at an <a href='https://www.nea.org/nea-today/all-news-articles/mental-health-crisis-college-campuses'>all-time high</a>. At UF, students can request a residence hall ESA through the <a href='https://disability.ufl.edu/housing-accommodations/'>Disability Resource Center</a> with medical documentation from a physician.&nbsp;</p><p>Assistance animals are broken down into <a href='https://www.hud.gov/sites/dfiles/PA/documents/HUDAsstAnimalNC1-28-2020.pdf'>two categories</a> under a 2020 clarification of the Fair Housing Act. &ldquo;Service animals&rdquo; are dogs individually trained to perform tasks for people with disabilities. ESAs, by contrast, can be any common household animal, trained or untrained, that provide assistance or emotional support to owners.&nbsp;</p><p>To request an ESA, the owner must give proof of disability through federal documentation or information from a health care professional. Even if the resident makes the request after bringing the animal into the housing, the housing provider must consider the request.</p><p><strong>ESAs on and off campus</strong></p><p>At UF, ESAs are allowed in campus residence halls, but only trained service animals are allowed in other campus facilities. The paperwork needed to register Colby was &ldquo;a lot,&rdquo; but the process was smooth as a whole, Leser said.</p><p>Leser needed a medical letter, signed approval from her roommate and suitemates as well as several contracts acknowledging liability for any damage Colby does to the room &mdash; which he&rsquo;s already accomplished in his short time in Cypress Hall, she said.</p><p>&ldquo;He&rsquo;s clawed up the screen,&rdquo; Leser said, gesturing to the dorm window, &ldquo;but we&rsquo;ll pay for that.&rdquo;</p><p>Leser has known she wanted an ESA since her freshman year, when 24/7 anxiety made going to class a nightmare, she said. Her only motivation to get out of bed were her trips home to spend time with her two dogs. Spending time with animals, whether petting them or just having them around, soothed her chronically anxious moods, she said.</p><p>When her sophomore year began, Leser decided to start the ESA process after visiting <a href='https://feelinegoodcatcafe.com/'>Feline Good Cat Caf&eacute;</a>, where she noticed a small gray cat dozing in the sun on a tower in the corner.</p><p>While the other cats at the caf&eacute; &mdash; which adopts out felines from the <a href='https://www.humanesocietyncfl.org/'>Humane Society of North Central Florida</a> &mdash; bit or scratched her, Colby &ldquo;didn&rsquo;t really care&rdquo; when Leser went to pet him. She knew immediately he was the one, she said.</p><p>&ldquo;It was a classic, &lsquo;Oh my gosh,&rsquo;&rdquo; she said. &ldquo;Like, you meet and you know.&rdquo;</p><p>In the two months she&rsquo;s known Colby, she&rsquo;s come to consider him her child, Leser said. Even when he crawls over her computer when she tries to take online exams, she wouldn&rsquo;t change anything about him, she said.</p><p>ESAs also boost UF student mental health outside residence halls. Tsehai de Souza, a 20-year-old digital arts and sciences junior who lives in an off-campus apartment, adopted her two ESA cats from the Humane Society in July.</p><p>Lucina and Odin, named after characters in one of de Souza and her girlfriend&rsquo;s favorite video games &ldquo;Fire Emblem Awakening,&rdquo; help her stay centered during her frequent panic attacks, she said.</p><p>De Souza started thinking about adopting cats when she saw how much an ESA helped her friend who also suffers from anxiety, she said.</p><p>Now, her two &ldquo;babies&rdquo; help her not only to calm anxiety, but to manage depression.</p><p>&ldquo;It&rsquo;s hard to be depressed if you have two animals waiting on you,&rdquo; she said. &ldquo;They need me.&rdquo;</p><p><strong>Pushback from dog-in-store opponents, animal activists&nbsp;</strong></p><p>The growth of ESAs has been met with pushback from skeptics who claim owners register their pets as ESAs merely to skip apartment pet fees or ignore no-pet rules in public places. Critics theorize the criteria for qualifying for an ESA doesn&rsquo;t always constitute a true disability.</p><p>One February 2023 <a href='https://www.tandfonline.com/doi/figure/10.1080/08927936.2023.2166711?scroll=top&amp;needAccess=true'>study</a> found over one-fourth of ESA accommodation letters came from care providers with a short term relationship to the client, who the ESA owner contacted for the sole purpose of securing a letter.</p><iframe src='https://flo.uri.sh/visualisation/15898960/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><p>The study, conducted on 77 individuals with ESAs throughout the U.S., also found 22% of participants received registration from an Internet source rather than a mental health professional or primary care provider.&nbsp;</p><p>Such websites are often fraudulent, with the Fair Housing Act stating Internet sources cannot &ldquo;establish that an individual has a non-observable disability or disability-related need for an assistance animal.&rdquo;</p><p>De Souza acknowledges some people use ESAs as a loophole, not as mental health treatment. But that&rsquo;s not the case for her, she said.</p><p>&ldquo;Going into my past and my history of mental health, I am not one of those people that just does it to skip the pet fee,&rdquo; she said.</p><p>Though some people also blame ESAs for the increasing number of pets in grocery stores and other public places &mdash; leading Publix to crack down in an August <a href='https://www.fox13news.com/news/publix-reminds-shoppers-that-pets-are-not-allowed-in-their-stores'>signage</a> campaign &mdash;&nbsp;ESA protections only extend to housing and can&rsquo;t be applied to animals in public spaces.</p><p>Adequate animal care in small spaces like college dorms also pose a concern for ESA critics.</p><p>&ldquo;I always worry about the dog,&rdquo; said Terry Biehl, a 63-year-old Gainesville resident and Alliance of Therapy Dogs tester and observer. &ldquo;While I see a lot of people doing that, and I think it&rsquo;s a beautiful thing &hellip; I also ask that wisdom go along with it,&rdquo; she said.</p><p>Biehl visited the UF campus for seven years alongside her 9-year-old golden doodle Beau, the &ldquo;official therapy dog for the medical college.&rdquo;&nbsp;</p><p>Biehl and Beau visited students throughout the year &mdash; before exams, during move-in, during mental health events and at residence hall gatherings, she said. The impact of spending time with animals on mental health is hard to put into words but beautiful to watch, she said.</p><p>&ldquo;There&rsquo;s the kind of little mini frown between their eyes and you can see the tension about this test that's coming on,&rdquo; she said. &ldquo;And as they walk in, all of a sudden they realize, &lsquo;Oh, there's Beau,&rsquo; and everything changes &mdash; the face changes, the body relaxes, you can almost see them visibly take a breath.&rdquo;</p><p>Biehl&rsquo;s own daughter has an ESA with her in college. But she recommends college students look into spending time volunteering at the animal shelter to get in their &ldquo;puppy fix,&rdquo; rather than taking on dog care on top of a busy course schedule, she said.</p><p><strong>UF&rsquo;s changing stance on animals and mental health</strong></p><p>Before the 2023-24 school year, students without ESAs could visit Beau around campus to get in some de-stressing pet time. That changed in August when the UF business college began blocking all requests for therapy dogs&rsquo; visits to campus, Biehl said.</p><p>&ldquo;One of the offices used to bring their therapy dogs in for Therapy Dog Tuesdays,&rdquo; she said. &ldquo;And they were actually issued a cease and desist order.&rdquo;</p><p>Biehl&rsquo;s requests for information from the business office have been flatly refused, she said.</p><p>&ldquo;I find it sad that a university that talks so much about supporting the students in their mental health has decided to take this track,&rdquo; she said.</p><p>UF public affairs was not immediately available for comment.</p><p>There&rsquo;s a lot that goes on at college, and with big life changes come mental health struggles for students, said Jessica Seitz, a UF health occupational therapist and owner of Alliance of Therapy Dog-certified golden retriever Koda.&nbsp;</p><p>Owning an ESA or spending time with a therapy dog may not be the only solution to college stress, but animals are perfect for diffusing nerves, she said.</p><p>Seitz has seen Koda&rsquo;s calming effect on patients he visits at Shands hospital. Patients are soothed by Koda because they know he won&rsquo;t judge or criticize them, she said. Koda even came to the rescue to soothe one woman while she went through labor, she said.</p><p>&ldquo;When I go into labor, I want a dog there,&rdquo; Seitz said.</p><p>ESAs may be related to UF&rsquo;s crackdown on on-campus animals, Biehl said. She&rsquo;s heard stories of complaints after someone brought an ESA dog into a library, or issues involving an ESA bird, she said.&nbsp;</p><p>But the therapy dog community&rsquo;s guesses about UF&rsquo;s new anti-dog stance &mdash; which range from ESA issues to the head of the business office not liking dogs &mdash; can only be speculation while the university continues to keep them in the dark, she said.</p><p>For their part, Leser and Colby have already signed a lease at Looking Glass Apartments for next year, where the walk-in laundry has already been designated as the cat room. Leser made sure the windows didn&rsquo;t open fully and that the floors were hardwood before committing, she said.</p><p>&ldquo;Part of the decision [to live there] was him,&rdquo; she said. &ldquo;He makes it all worth it &hellip; If I can&rsquo;t take care of myself, I can take care of him.&rdquo;</p><p><em>Contact Zoey Thomas at</em> <a href='mailto:zthomas@alligator.org'><em>zthomas@alligator.org</em></a><em>. Follow her on Twitter @zoeythomas39.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

parent.querySelector('#articleCardCaption').style.display = "block";

if (myArticle.about_one.length < 4) {
        parent.querySelector('#articleAboutContainer').style.display = "none";
    }

    if (myArticle.card_caption) {
        const splitCaption = myArticle.card_caption.split('-');

            if (splitCaption.length >= 2) {
                const formattedCaption = splitCaption[1].trim() + ' - <em>' + splitCaption[0].trim() + "<em>";
                parent.querySelector('#articleCardCaption').innerHTML = "<span>" + formattedCaption + "</span>";
            } else {
                parent.querySelector('#articleCardCaption').innerHTML = myArticle.card_caption;
            }
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }
    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    myModal.show();
}, false);

// Article
document.getElementById('commissioners').addEventListener('click', function() {
    const myArticle = {
        slug: "commissioners",
        headline: "Passing ordinances and balancing life: How local city and county commissioners take care of their mental health",
        subtitle: " Current, former Alachua County elected officials share their mental health challenges",
        card_path: "comissioner1.jpg", 
        card_caption: "Armand Raichandani // Alligator staff - Former Mayor Lauren Poe talks with others at the Gainesville Downtown Festival & Art Show on November 18.",
        author_one: "Kat Tran",
        author_two: "",
        contact_one: "Contact Kat Tran at ktran@alligator.org. Follow them on Twitter @kat3tran.",
        contact_two: "",
        about_one: "Kat Tran is a second-year journalism major and is the City & County Commission reporter for Fall 2023. They are also interested in a pre-law track (entertainment law). You can find them daydreaming about rainbows, unicorns, and sunshine in their free time. Currently, they are recovering after seeing Lana Del Rey live.",
        about_two: "",
        date: "", 
        desc: "City and county commissioners routinely have 10- to 12-hour work days. They will spend hours listening to presentations and public comments, as well as voting on changes to ordinances and resolutions. They are trying to make the best decisions for the community, all while making time for their families and themselves, Mayor Lauren Poe said — and the strain of the job can weigh on their mental health.",
        body: "<p>During the COVID-19 pandemic, a new trend of civic activity was on the rise: openly abusive behavior toward elected officials, said Lauren Poe, the 52-year-old former mayor of Gainesville.&nbsp;</p><p>City and county commissioners routinely have 10- to 12-hour work days. They will spend hours listening to presentations and public comments, as well as voting on changes to ordinances and resolutions. They are trying to make the best decisions for the community, all while making time for their families and themselves, Poe said &mdash; and the strain of the job can weigh on their mental health.</p><p>When citizens disagree with decisions, commissioners are expected to keep an empathetic ear and remain professional.&nbsp;</p><p>&ldquo;There were death threats, threats of violence, threats of people sort of rioting at my house,&rdquo; Poe said. &ldquo;Prior to that, they might write a letter to the editor, or they might send you a strongly worded email, but the level of threat and anger went up exponentially.&rdquo;</p><p><strong>Increased pressures during the pandemic</strong></p><p>Heightened government mistrust layered on top of the collective anxiety from the pandemic shifted the professional and personal lives of public leaders, Poe said.&nbsp;</p><p>He acknowledged that people will turn to local leaders during times of crisis. However, making public health decisions proved difficult while dealing with personal, organized and angry backlash.&nbsp;</p><p>During that period, he said he had been dealing with &ldquo;significant periods of real deep depression.&rdquo;</p><p>Poe was thankful he began his therapy process before the pandemic, allowing him to better deal with criticisms and backlash, he said.&nbsp;</p><p>&ldquo;Emotions like anger and fear are natural,&rdquo; Poe said. &ldquo;We use them as ways to protect ourselves because we are being abused or attacked -&mdash; they are defense mechanisms.&rdquo;</p><p>Identifying emotions and acknowledging them allows him to work beyond anger, fear or jealousy and focus on solutions that help him grow and address the real cause of an issue, he said.&nbsp;</p><p>&ldquo;We've got so much to overcome in our society to get past those things. But I do think there's been some really concerted efforts to destigmatize and normalize the treatment of mental health challenges in the last five years or so. But there&rsquo;s still a long way to go,&rdquo; Poe said.</p><p>He had never been concerned with public opinions about his openness to talk about his personal mental health challenges and used his position as mayor to leverage better approaches toward mental health.</p><p>He attributed his efforts to Meridian Behavioral Health, an active partner in implementing resources like Mental Health First Aid training for every single city employee.</p><p>The eight-hour training course teaches city staff the basic understanding of warning signs, effective interventions and how to create a more positive environment for people to recognize mental health issues, Poe said.</p><p>The first in-person meeting with elected officials and senior city staff during COVID-19 was in a sterile and institutional room filled with microphones and notepads, Poe said.</p><p>He knew it wasn&rsquo;t a warm and fuzzy environment, he said, but he wasn&rsquo;t expecting total silence when he brought up mental health challenges he assumed everyone in the room had all been experiencing.</p><p>Poe believes government officials may be hesitant to speak out about mental health issues because of expansive public records laws, especially in Florida, he said.</p><p>&ldquo;I don't think most people can relate to that lived experience that whatever you are saying, writing or communicating &mdash; that this is not a private conversation,&rdquo; Poe said. &ldquo;Everything I say and do is going to be not only consumed by someone else but scrutinized and misrepresented and twisted to fit somebody else's needs.&rdquo;</p><p>Poe thinks elected officials working in public office are heroic for publicly acknowledging their mental health struggles, he said. He believes people may be hesitant to speak about their mental health journey and any treatments.&nbsp;</p><p><strong>The realities of the job</strong></p><p>Anna Prizzia, a 46-year-old Alachua County Commissioner, said criticisms are just part of the job.&nbsp;</p><p>&ldquo;You could be the most loved politician on the planet and there are still going to be people angry at you,&rdquo; she said.&nbsp;</p><p>Jobs that require making decisions about what other people need can be stressful, Prizzia said. Part of the job is about making sure &ldquo;you are getting the things that you need personally so that you can show up in the ways that you need to for your community,&rdquo; she said.</p><p>But that isn&rsquo;t easy, Prizzia said.</p><p>&ldquo;Give me the Cliff Notes,&rdquo; Prizzia joked about maintaining a perfect work-life balance.</p><p>For her, there is one thing that cannot be negotiated: family.&nbsp;</p><p>&ldquo;Sometimes I have to miss an event or a program because I have a commission meeting, and that's the reality of my job,&rdquo; Prizzia said. &ldquo;But if it's an optional thing, and even if it's important, I'm going to choose to go to my daughter's program over going to the fundraiser.</p><p>In a<a href='https://mhanational.org/issues/2022/ranking-states#youth_data'>2022 report by Mental Health America</a>, Florida was ranked 49th in the nation as one of the least accessible states for insurance and mental health care.</p><p>Gainesville Mayor Harvey Ward said the city does not provide enough mental health services and resources, but he attributes this to restrictions held by state legislation.</p><p>&ldquo;The longer I spend in government, the more clear it is to me that a huge percentage of the issues that we have as a society will go back to not prioritizing mental health services enough,&rdquo; Ward said. &ldquo;Homelessness has more to do with mental health in my opinion and experience than housing. And violent crime has much to do with a lack of mental health services.&rdquo;</p><p>The state is responsible for implementing social services, including physical and mental health services. Cities have no specific role in that process, but because there is a gap in mental health support, cities are often used as the government&rsquo;s last resort, Ward said.</p><p>&ldquo;We can't just stand by and say, &lsquo;We know that's a problem, we're not gonna do anything about it,&rsquo;&rdquo; Ward said.&nbsp;</p><p>One of the reasons Ward thinks it&rsquo;s hard to talk about mental health issues is because you can&rsquo;t see them.</p><p>&ldquo;It's really hard to advocate for yourself if you are facing mental health issues,&rdquo; he said. &ldquo;It's easy to advocate for yourself if you have a physical health issue because it's empirically provable.&rdquo;</p><p>Ward, an Episcopalian Christian, deals with stress by praying and meditating. He said he does not want to let his religion become part of who he is as a mayor, but intentionally thinking about things that are bigger than him is incredibly helpful.</p><p>He said he also looks for guidance from other mayors by understanding how people stayed true to themselves while in elected office.</p><p>Being an elected official comes with responsibilities that affect the whole community. But, Ward will always make time to be with his three daughters, he said.&nbsp;</p><p>&ldquo;I'm never going to have another opportunity to spend time with them at this time in their lives,&rdquo; he said. &ldquo;So I'm not going to miss that because I'm worrying about things here at work.&rdquo;</p><p>While all the elected officials have a weight of their responsibility to the community, the reality is they are Alachua County residents too, said Mary Alford, the 62-year-old Alachua County Commission chair. Sometimes there can be high expectations placed upon them &mdash; but they&rsquo;re human, she said.</p><p>&ldquo;I kind of want to have a day where I can put on my grubby clothes and go do errands and things and not have to worry about being on display or having to present myself perfectly all the time,&rdquo; said Alford.</p><p>So she doesn&rsquo;t.&nbsp;</p><p>&ldquo;I&rsquo;ve just decided that if people don&rsquo;t know they have a real person as a county commissioner, then that&rsquo;s just too bad,&rdquo; she said.</p><p>Alford, a sixth-generation Gainesville native, has always been open about being a mental health advocate, as she is not afraid to reveal her identity as an openly lesbian commissioner and ex-member of The Church of Jesus Christ of Latter-day Saints.&nbsp;</p><p>&ldquo;After I broke up with my ex, and my mother and brother died all within three or four years, I was quite depressed for a while,&rdquo; she said. &ldquo;I don&rsquo;t mind telling people that because it needs to be OK for people to tell others when they&rsquo;re sad they need help coping or they need a hug.&rdquo;</p><p>Those struggling with mental health challenges can call Alachua County&rsquo;s mental health hotline at 988.</p><p><em>Contact Kat Tran at ktran</em><a href='mailto:ethompson@alligator.org'><em>@alligator.org</em></a><em>. Follow them on Twitter @</em><a href='https://x.com/kat3tran?s=21'><em>kat3tran</em></a><em>.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

parent.querySelector('#articleCardCaption').style.display = "block";

if (myArticle.about_one.length < 4) {
        parent.querySelector('#articleAboutContainer').style.display = "none";
    }

    if (myArticle.card_caption) {
        const splitCaption = myArticle.card_caption.split('-');

            if (splitCaption.length >= 2) {
                const formattedCaption = splitCaption[1].trim() + ' - <em>' + splitCaption[0].trim() + "<em>";
                parent.querySelector('#articleCardCaption').innerHTML = "<span>" + formattedCaption + "</span>";
            } else {
                parent.querySelector('#articleCardCaption').innerHTML = myArticle.card_caption;
            }
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }
    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    myModal.show();
}, false);

// Article
document.getElementById('art-therapy').addEventListener('click', function() {
    const myArticle = {
        slug: "art-therapy",
        headline: "Gainesville therapist discusses benefits of art therapy for students struggling with mental health",
        subtitle: "The expressive therapy offers a way to de-stress and become emotionally aware",
        card_path: "art-therapy.jpg", 
        card_caption: "Ashley Hicks // Alligator staff - Christina Cross, 18, paints an elephant at the Reitz Union Arts & Crafts Center on Sunday, Nov. 12, 2023.",
        author_one: "Alexandra Burns",
        author_two: "",
        contact_one: "Contact Alexandra Burns at aburns@alligator.org. Follow her on Twitter @alexaburnsuf.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        desc: "Art therapy, a specialized form of creative therapy that can be done at home or with a professional, has become a solution recommended by numerous Gainesville therapists for mental health struggles such as anxiety, post-traumatic stress disorder and childhood trauma.",
        body: "<p>Amid the surging mental health crisis, therapists are increasingly advocating for a unique form of therapy &mdash; one that requires just a sheet of paper, a pencil and a handful of colored pencils.</p><p>Art therapy, a specialized form of creative therapy that can be done at home or with a professional, has become a solution recommended by numerous Gainesville therapists for mental health struggles such as anxiety, post-traumatic stress disorder and childhood trauma.&nbsp;</p><p>Mental health disorders are at an <a href='https://www.nea.org/nea-today/all-news-articles/mental-health-crisis-college-campuses'>all-time high</a> on United States college campuses, with 44% of students reporting symptoms of depression, 37% reporting anxiety and 15% saying they considered suicide in the past year, according to a report from the <a href='https://healthymindsnetwork.org/wp-content/uploads/2023/03/HMS_national_print-6-1.pdf'>Healthy Minds Study</a> in 2022.</p><p>Daniela Childers, a Gainesville registered mental health counselor intern and UF alumna, said she often uses expressive art therapy as a treatment for a variety of patients.&nbsp;</p><p>Art therapy involves the use of creative prompts to draw images that can express one&rsquo;s emotions, proving to be a helpful strategy for those who struggle with the vulnerability of speaking with a professional or verbalizing their feelings, Childers said.&nbsp;</p><p>&ldquo;It's so similar to talk therapy, it's just that instead of talking, you get to draw these things,&rdquo; she said. &ldquo;It's really nice to see that a lot of people [find it] very calming, and it can take the stress off of having to talk to a stranger.&rdquo;</p><p>The prompts used in art therapy can range from drawing simple and broad images to very specific scenarios, helping patients realize emotions they may have never been aware of or thought about in a clear way.&nbsp;</p><p>&ldquo;I think that [by] doing something like art, you can still express a lot without having to talk about a specific memory, but you can talk about the things around it,&rdquo; Childers said.</p><p>Due to the opportunity to focus on an image and one's thoughts, art therapy provides a solution to express and delve into emotions that one may not want to talk about.&nbsp;</p><p>&ldquo;I think for everybody it&rsquo;s just sometimes so overwhelming for people to talk about what they went through,&rdquo; Childers said. &ldquo;They might be really deeply out of touch with how they feel about how things are right now.&rdquo;</p><p>One strategy Childers uses with patients who may feel out of touch is asking them to draw something very simple, such as images of cold or hot objects.&nbsp;</p><p>&ldquo;If somebody comes in &hellip; and they&rsquo;re having a hard time explaining and they&rsquo;re very numb,&rdquo; she said. &ldquo;It gets them feeling a sensation, mounting into their body and thinking about that feeling &hellip;. It also kind of gives you some insight into their own memories and associations.&rdquo;</p><p>A similar technique Childers uses is asking patients to draw their heart or an outline of their body and color in what they&rsquo;re feeling that day, allowing them to recognize feelings of sadness, fear or stress.&nbsp;</p><p>&ldquo;Just looking at that as a whole can really show you, &lsquo;Oh wow, I&rsquo;m so overwhelmed with sadness or fear right now,&rsquo;&rdquo; she said. &ldquo;When you&rsquo;re asked to draw, it&rsquo;s a little more between you and your own thought process.&rdquo;</p><p>Although many art therapy exercises include the use of prompts, many therapeutic creative exercises can also be done at home, in a college dorm or even outside.&nbsp;</p><p>Childers recommends going outside and finding an object, preferably something in nature or in one&rsquo;s everyday environment, and drawing it. The exercise allows people to interrupt the thoughts and worries associated with certain places or to create a change in their normal routine.&nbsp;</p><p>&ldquo;On one of those days you might stop right outside your building and just kind of draw a random plant that was there,&rdquo; Childers said. &ldquo;You probably noticed that plant every time that you come in and out of your building. Now it's just a kind of a grounding reminder of time spent [calming] down and not worrying.&rdquo;&nbsp;</p><p>Adult coloring books can also provide an easy at-home form of art therapy to de-stress and remove focus from overwhelming thoughts.&nbsp;</p><p>&ldquo;You&rsquo;re picking these different colors for your coloring page, and there&rsquo;s a lot of choice in that, and that&rsquo;s a safe choice,&rdquo; Childers said. &ldquo;It feels like a huge sense of achievement and kind of a release of this low-stake thing &hellip; It&rsquo;s very grounding just to be thinking about right now, thinking about red while I&rsquo;m coloring this &hellip; and it really slows down your thought process.&rdquo;</p><p>For students who are interested in experiencing therapeutic art exercises, the <a href='https://union.ufl.edu/thingstodo/acc-fall/'>UF Reitz Union&rsquo;s Arts and Crafts Center</a> provides free craft events, ceramic painting and group socials Monday through Sunday.&nbsp;</p><p>The center also encourages students to participate in its self-care Wellness Wednesdays watercolor painting event every week from 1 to 5 p.m.&nbsp;</p><p>Partnered with <a href='https://gatorwell.ufsa.ufl.edu/'>GatorWell</a>, the event provides flyers and infographics with information about art and its benefits for mental health.</p><p>Chloe Sakr, a 20-year old UF advertising junior and manager of the center, said engaging in art activities at the center helps her relax and take a break from school.&nbsp;</p><p>&ldquo;It gives me a period where I can just forget about all of my school things,&rdquo; she said. &ldquo;Being able to remove myself from everything else and pour all my creativity into one thing, I really don&rsquo;t get to do that in any other place.&rdquo;</p><p>Similarly, Daniela Aris, a 20-year-old UF business administration junior, said taking the time to draw, even if it's for five minutes, gives her a sense of peace.&nbsp;</p><p>&ldquo;I think making art can be really relaxing since it&rsquo;s low pressure and there&rsquo;s no right or wrong way to do it,&rdquo; she said. &ldquo;It&rsquo;s kind of like a healthy form of escapism because you don&rsquo;t even notice time passing when you&rsquo;re really immersed in what you&rsquo;re working on, and it helps you think creatively.&rdquo;</p><p><em>Contact Alexandra Burns at aburns@alligator.org. Follow her</em><em>on Twitter</em> <a href='https://twitter.com/alexaburnsuf'><em>@alexaburnsuf</em></a> <em>.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

parent.querySelector('#articleCardCaption').style.display = "block";

if (myArticle.about_one.length < 4) {
        parent.querySelector('#articleAboutContainer').style.display = "none";
    }

    if (myArticle.card_caption) {
        const splitCaption = myArticle.card_caption.split('-');

            if (splitCaption.length >= 2) {
                const formattedCaption = splitCaption[1].trim() + ' - <em>' + splitCaption[0].trim() + "<em>";
                parent.querySelector('#articleCardCaption').innerHTML = "<span>" + formattedCaption + "</span>";
            } else {
                parent.querySelector('#articleCardCaption').innerHTML = myArticle.card_caption;
            }
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }
    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    myModal.show();
}, false);

// Article
// Article
document.getElementById('lgbtq').addEventListener('click', function() {
    const myArticle = {
        slug: "lgbtq",
        headline: "Gainesville companies support, empower LGBTQ+ residents with mental health resources",
        subtitle: "Gainesville provides everything from local LGBTQ+ organizations to support groups for all ages",
        card_path: "lgbtq-mentalhealth.JPG", 
        card_caption: "Gracie Kurtz // Alligator staff - Sebastian Reina, 24, works as the Co-Front Desk Manager at the Pride Community Center of North Florida on Thursday, Nov. 16, 2023.",
        author_one: "Molly Seghi",
        author_two: "",
        contact_one: "Contact Molly Seghi at mseghi@alligator.org. Follow her on Twitter @molly_seghi.",
        contact_two: "",
        about_one: "Molly Seghi is a first-year journalism major at UF and a Fall 2023 Avenue Reporter. When not writing or journaling, she can be found at a live music event or working on her podcast “An Aural Account.”",
        about_two: "",
        date: "", 
        desc: "<p>Despite the statistics and negative stigmas surrounding the community, LGBTQ+ people find strength and support in each other. Studies show that youth who participate in LGBTQ+ community programs have better mental health and long-term greater self esteem. Gainesville has many organizations and mental health programs catered to strengthening and empowering the LGBTQ+ community.</p>",
        body: "<p>When Tori Luppino first came to Gainesville as a UF political science freshman, her understanding of her queer identity was permanently transformed. With countless mental health resources at her fingertips, Luppino found that the opportunities in Gainesville made &ldquo;a world of a difference&rdquo; in her mental health.&nbsp;</p><p>The 19-year-old&rsquo;s mental health journey affirms what all of the LGBTQ+ organizations and mental health programs in Gainesville agree on: The LGBTQ+ community has persisted through decades of hatred, violence and discrimination. Many of these organizations have said the repercussions of the long fight for rights in addition to the invalidation of their identities have been detrimental to the mental health of the community.</p><p>The root cause of these mental health issues stems from the <a href='https://www.sageusa.org/news-posts/startling-mental-health-statistics-among-lgbtq-are-a-wake-up-call/'>negative views and stigmas</a> surrounding the community, according to Sage USA, a national organization advocating for LGBTQ+ elders. About <a href='https://mhanational.org/issues/lgbtq-communities-and-mental-health'>4.5%</a> of the United States population identifies as lesbian, gay, bisexual or transgender, and over 39% of those individuals reported having a mental illness in the past year. People who identify as LGBTQ+ are two-and-a-half <a href='https://www.psychiatry.org/File%20Library/Psychiatrists/Cultural-Competency/Mental-Health-Disparities/Mental-Health-Facts-for-LGBTQ.pdf'>times</a> more likely to experience mental health issues including depression, anxiety and substance misuse when compared with heterosexual individuals, according to the American Psychiatric Association.</p><p>The <a href='https://www.thetrevorproject.org/survey-2022/'>Trevor Project&rsquo;s 2022 National Survey</a> studying LGBTQ+ Youth Mental Health found the rates of suicidal thoughts have been steadily increasing among young LGBTQ+ people over the last three years. LGBTQ+ youth are <a href='https://blog.searchinstitute.org/lgbtq-youth'>less likely</a> to report feeling like they belong and are valued in their community.</p><p>Despite the statistics and negative stigmas surrounding the community, LGBTQ+ people find strength and support in each other. <a href='https://sph.umd.edu/news/study-shows-benefit-community-organizations-supporting-lgbtq-youth-mental-health'>Studies</a> show that youth who participate in LGBTQ+ community programs have better mental health and long-term greater self esteem.</p><p>Gainesville has many organizations and mental health programs catered to strengthening and empowering the LGBTQ+ community.&nbsp;</p><p><strong>Pride Community Center of North Central Florida</strong></p><p>Since April 2002, the <a href='https://gainesvillepride.org/'>Pride Community Center of North Central Florida</a> has become integral to the safety and wellbeing of the LGBTQ+ community. The volunteer-run charitable organization serves over a dozen counties including Alachua, Bradford and Union counties. Its mission is to enhance the well being and visibility of the LGBTQ+ community as well as educate the community in order to eliminate discrimination. The Pride Community Center achieves its goal by providing resources, support and housing many local LGBTQ+ organizations and events.</p><p>One of the vital programs of the Pride Community Center is the Gainesville Area AIDS Project. The GAAP was created in 1993 when 25 people living with AIDS joined together with caregivers and friends to support the needs of people living with AIDS around Gainesville. The PCCNCF&rsquo;s facilities contain a community room and meeting spaces available for use to the community. Many local organizations utilize the space and host events and groups in it. Some of its other initiatives include an internship program for UF and Santa Fe College students, the Gainesville Equality Youth Group, an LGBTQ+ resource library and the annual Gainesville Pride Festival and parade. The center welcomes members and volunteers with open arms. Memberships are available for individuals, partners, businesses and organizations, students and volunteers.</p><p><strong>Gainesville Community Counseling Center</strong></p><p>The <a href='https://www.gainesvillecounselingcenter.com/'>Gainesville Community Counseling Center</a> is a nonprofit mental health agency serving Alachua County full-time since 2019. Its vision is to make mental health services accessible to all people in order to maximize personal and communal potential. It offers counseling services and support groups for the LGBTQ+ community and workshops on LGBTQ+ related topics for the general public.</p><p>Larry Green, 53-year-old clinical and executive director of the Gainesville Community Counseling Center, believes in the importance of access to mental health services in driving social change. He works with the rest of the clinicians to achieve this goal.</p><p>&ldquo;It's going to change society,&rdquo; Green said. &ldquo;Everybody should have access to mental health, and so we try our hardest to make sure that happens.&rdquo;</p><p>Donors and grants allow it to offer free and reduced fees for clinical services and support groups. One of the LGBTQ+ support groups is catered to children and adolescents and focuses on a combination of psychoeducation, skill building and mindfulness activities.</p><p>The other support group for young adults delves into several issues facing the community such as dating and education about the transitioning process. In addition to the groups, the Gainesville Community Counseling Center aids the transgender community with finding transition services and giving them the letters required for the process.</p><p>They also provide free educational workshops for the community to learn more about the challenges that are facing the LGBTQ+ population.&nbsp;</p><p>&ldquo;It's [workshops] about helping them understand that it's okay if you don't understand,&rdquo; Green said. &rdquo;We just have to treat others with dignity and respect.&rdquo;</p><p><strong>Queer+ Survivors Support Group by Peaceful Paths</strong></p><p>Recent <a href='https://www.latrobe.edu.au/__data/assets/pdf_file/0009/1185885/Private-Lives-3.pdf'>research</a> has shown that m <a href='https://www.latrobe.edu.au/__data/assets/pdf_file/0009/1185885/Private-Lives-3.pdf'>ore than 60%</a> of LGBTQ+ people have experienced domestic, family or intimate partner violence and abuse in their lifetime. Despite surviving domestic violence at equal or higher rates compared to their heterosexual counterparts, LGBTQ+ people are less likely to identify domestic violence in their relationships, report it to the police and find support services.</p><p> <a href='https://www.peacefulpaths.org/'>Peaceful Paths Domestic Abuse Network</a> is the certified domestic abuse agency that serves Alachua, Bradford and Union counties. Since 1974, they have provided legal help, relocation services, financial empowerment and support groups to the entire community.</p><p>The flexible curriculum centers around violence prevention and education and is heavily influenced by participant feedback. The group is facilitated by Nicole Ramos, a 23-year-old advocate for the child and youth department and violence prevention educator.&nbsp;</p><p>&ldquo;I just want to see faces and people that are interested in the topic and that want to carry this information for themselves or carry it out for someone they care about,&rdquo; Ramos said. &ldquo;It is not like an instinctual response to know what to do sometimes and that's absolutely OK and so, I want to offer that space for people to talk about these really heavy experiences.&rdquo;</p><p>The free support group is available to people 18 and older. They meet on the second and fourth Thursdays of each month from 6:30-7:30 p.m. at the Pride Community Center of Gainesville.</p><p><strong>LGBTQIA+ Teen Group by Lucent Collaborative Services</strong></p><p>Terra Lilkendey, a 26-year-old registered mental health counseling intern at Lucent Collaborative Services, noticed a gap in what therapy can provide for children while working with them. She said she wished to have been supported at that age and created The LGBTQIA+ Teen Group to help children who were looking to connect with others.&nbsp;</p><p>The eight-week group is focused on connection, community building and providing a safe space for teens to embrace their identities. The group is open to middle and high schoolers in seventh to 10th grade.</p><p>&ldquo;Anything we can do to support feeling safe, secure, seen and loved is valuable,&rdquo; Lilkendey said.</p><p>The group will begin meeting in January on Fridays after school hours and continue in eight-week sessions. The cost to attend is $40 per week with sliding scale scholarships available. Meetings will be held in person at Lucent Collaborative Services.</p><p> <a href='https://lucentcollaborative.com/'>Lucent Collaborative Services</a> is a multidisciplinary therapeutic practice in Gainesville that hosts counseling for individuals, couples and families as well as various therapeutic groups and support groups.</p><p><strong>LGBTQ+ Teen Support Group with Katie Hughes and Jenny Banks</strong></p><p>Adolescence is a formative period for understanding identity, and many people don&rsquo;t have an outlet for the thoughts and emotions associated with the beginning stage of exploration.&nbsp;</p><p>Katie Hughes, a 25-year-old licensed mental health counselor, and Jenny Banks, a 26-year-old registered mental health counseling intern, facilitate a support group specifically catered to queer teens and the many questions and experiences they have during this stage.</p><p>Banks argues that the &ldquo;greatest protecting factor&rdquo; is community because it imparts stability. &ldquo;It's so important to get people in that age group the support that they need, because they're still figuring it out,&rdquo; Hughes said.&nbsp;</p><p>The group also addresses new legislation affecting schools and supports teens who do not have support in the classroom anymore. It encourages participants to foster a respectful environment and validate peoples&rsquo; input and opinions.</p><p>&ldquo;If we can create a space where that's [community] then enforced or encouraged or just celebrated, then we can hopefully reduce those negative outcomes that a lot of teenagers are facing currently because of the pressures that are occurring outside of their control&rdquo; Banks said.</p><p>The eight-week support group will begin on Jan. 9 and is open to 9th-12th graders. It meets Tuesdays at 6-7:15 p.m. at Wolcott Counseling and Wellness and costs $75 per week. They hope to continue the sessions every semester.&nbsp;</p><p>For more information about the LGBTQ+ Teen Support Group, reach out to Banks by <a href='mailto:Jennyb.wcw@gmail.com'>email</a>.</p><p><strong>Gender Expansive Peer Support Group by Arise Wellness GNV</strong></p><p>While there are many resources for queer sexual orientations, the therapists at Arise Wellness GNV noticed the lack of options for those with gender expansive identities, so they created some.</p><p> <a href='https://www.arisegnv.com/'>Arise Wellness GNV</a> is an independent practice of mental health professionals specializing in anxiety, trauma and Post Traumatic Stress Disorder, life transitions and Eye Movement Desensitization and Reprocessing. It offers counseling for individuals, couples and families, groups and affirming care as well as a Gender Expansive Peer Support Group.&nbsp;</p><p>The support group provides a space for people 18 or older who identify as trans, non-binary and gender non-conforming people to share their experiences and empower each other.&nbsp;</p><p>The therapists who facilitate the group share the same identities as participants in the group and act as support.&nbsp;</p><p>Mac Choy, 25-year-old registered mental health intern at Arise and co-facilitator of the Gender Expansive Peer Support Group, said while many organizations advertise themselves as being queer friendly, &ldquo;our space [Arise] is just queer.&rdquo;&nbsp;</p><p>&ldquo;It's been feeling very hopeless for a lot of people and only getting darker, especially here in Florida,&rdquo; Choy said. &ldquo;By coming together and strengthening our community, we&rsquo;re able to empower one another and cultivate that safety and support, especially taking into consideration where we are.&rdquo;</p><p>The <a href='http://bit.ly/AriseGEGroup'>Gender Expansive Peer Support Group</a> meets the third Friday every month at 6 to 7:30 p.m. at the Arise Wellness GNV. The participation fee is through donations ranging from $5-$40, which supplement individual counseling for the community.</p><p><em>Contact Molly Seghi at mseghi@alligator.org. Follow her on Twitter</em> <a href='https://twitter.com/molly_seghi'><em>@molly_seghi</em></a> <em>.</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

parent.querySelector('#articleCardCaption').style.display = "block";

if (myArticle.about_one.length < 4) {
        parent.querySelector('#articleAboutContainer').style.display = "none";
    }

    if (myArticle.card_caption) {
        const splitCaption = myArticle.card_caption.split('-');

            if (splitCaption.length >= 2) {
                const formattedCaption = splitCaption[1].trim() + ' - <em>' + splitCaption[0].trim() + "<em>";
                parent.querySelector('#articleCardCaption').innerHTML = "<span>" + formattedCaption + "</span>";
            } else {
                parent.querySelector('#articleCardCaption').innerHTML = myArticle.card_caption;
            }
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }
    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    myModal.show();
}, false);

// Article
document.getElementById('listicle').addEventListener('click', function() {
    const myArticle = {
        slug: "listicle",
        headline: "Gainesville’s top spots to de-stress, relax",
        subtitle: "Five local spots and businesses that offer relaxing benefits",
        card_path: "listicle.jpg", 
        card_caption: "Gracie Kurtz // Alligator staff - People bike on the Hawthorn State Trail on Saturday, Nov. 18, 2023.",
        author_one: "Bonny Matejowsky",
        author_two: "",
        contact_one: "Contact Bonny Matejowsky at bmatejowsky@alligator.org. Follow her on Twitter @bonnymatejowsky.",
        contact_two: "",
        about_one: "Bonny Matejowsky is a third-year journalism major and a Fall 2023 Avenue Reporter. When she’s not writing, you can find her thrifting or watching Twin Peaks.",
        about_two: "",
        date: "", 
        desc: "Whether you’re seeking a unique spa treatment, a yoga session or a relaxing stroll in nature, here is a list of Gainesville’s outdoor spots and local businesses to de-stress and relax.",
        body: "<p>Exhausted from a last-minute all-nighter? Has it been a while since you&rsquo;ve touched grass? Are the guided meditations you found on YouTube just not working out for you?&nbsp;</p><p>If a mental health break is much needed, you&rsquo;ve come to the right place. Whether you&rsquo;re seeking a unique spa treatment, a yoga session or a relaxing stroll in nature, here is a list of Gainesville&rsquo;s outdoor spots and local businesses to de-stress and relax.&nbsp;</p><p><strong>Kardiya Yoga</strong></p><p>Opened in 2022, this young yoga studio was created by 36-year-old Gainesville resident Natalie Nix. After going to massage school, she realized yoga was her calling and sought to create a community-based business venture &mdash; out came Kardiya Yoga.</p><p>The classes mostly take place at the studio located at 14 SE Fifth Ave., with special events hosted at local spots such as Curia on the Drag and First Magnitude Brewing.&nbsp;</p><p>In-person and online classes are taught every day of the week ranging from mellow evening classes to active, feel-good morning classes. Although some courses require a membership, the studio hosts drop-in classes that patrons can pay for on a sliding scale, starting at $5.</p><p>&ldquo;Something that I wanted to create with the studio is a sense of comfort and ease,&rdquo; Nix said. &rdquo;I really hope that that&rsquo;s something that we&rsquo;re doing. Making it easy for people to come here and feel like they have a place to go, even if they&rsquo;ve never practiced before.&nbsp;</p><p>Rather than the usual expensive yoga class, the teachers instruct here with less focus on price and more focus on learning and incorporating mindful movement, Nix said.</p><p>&ldquo;We&rsquo;re not interested in doing yoga to get good at yoga,&rdquo; Nix said. &ldquo;We&rsquo;re interested in being healthy and moving well so that we can take this and do the things that we want to do outside of this space.&rdquo;</p><p><strong>Hawthorne Trail</strong></p><p>If you are looking for some extra greenery in your life, the Gainesville-Hawthorne State Trail offers 16 miles of natural Florida scenery.&nbsp;</p><p>Located at 3400 SE 15th St., visitors can bike, hike, run and roam on a paved walkway through the woods of Paynes Prairie Preserve State Park. There are also various overlooks of scenic wetlands and forests fit for outdoorsy contemplation.</p><p>Along with ancient mossy oak trees and bird-ridden sinks, the park features relics of Gainesville&rsquo;s human history. The trail begins at Boulware Springs Park, a historic waterworks where locals voted in 1854 at a meeting to create what is now Gainesville.</p><p>No fee is required for entrance, and there are four different trailheads available for parking. The trail is open from 8 a.m. to sundown, every day of the year.&nbsp;</p><p><strong>Relax Salt Rooms</strong></p><p>A glowing room covered floor to ceiling in salt might not be what first comes to mind when thinking of places to unwind. Based at 4936 NW 39th Ave., Relax Salt Rooms has been a spot for people seeking relaxation and health benefits since 2020.&nbsp;</p><p>Sessions take place in a room that features 17,000 pounds of Himalayan salt on its walls and floors. Guests can sit back and relax in zero-gravity chairs for 45 minutes as a halogenerator grinds medical-grade salt and disperses it into the air.&nbsp;</p><p>According to Megan Forcey, the manager of Relax Salt Rooms, dry salt therapy can aid anxiety, help increase lung capacity, take down inflammation and break up mucus in the airway. They&rsquo;ve also treated many guests suffering from Long COVID.&nbsp;</p><p>&ldquo;Guests should lead their own journey of relaxation and health,&rdquo; Forcey said.&nbsp;</p><p>Solo adult dry salt therapy sessions start at $35. They also offer yoga classes, crystal singing bowl sessions and reiki sessions featuring guided meditation.</p><p>&ldquo;Some people prefer to relax in an environment where there is no touch, making salt therapy a great fit for them,&rdquo; Forcey said. &ldquo;They can enjoy all the comforts of a spa-like environment without being touched.&rdquo;</p><p><strong>Gainesville Integrative Wellness Center</strong></p><p>If you are looking for a treatment plan but don&rsquo;t know where to start, the Gainesville Integrative Wellness Center located at 1330 NE Sixth St. offers a holistic mix of mental and physical health care that might help.</p><p>This center takes a collaborative approach to medicine, featuring acupuncture, lifestyle and dietary advice, direct primary care with nurse practitioners, counseling with a licensed mental health counselor and massage therapy.&nbsp;</p><p>Theresa Rizzo is the director of the GIWC and the resident acupuncturist at the center with 22 years of experience. Although she started as a nutritionist, she turned away from traditional Western medical practices in search of something more.</p><p>&ldquo;There&rsquo;s so many holes in Western medicine, and I realized that was not the avenue that I wanted to go into,&rdquo; Rizzo said. &ldquo;It wasn&rsquo;t very complete in both diagnostic and treatment and I wanted something a little bit more complete.&rdquo;</p><p>She founded the GWIC to collaborate with other doctors and create a space where clients can combine different treatments to help the mind and the body. A multidisciplinary medical space such as this is uncommon, Rizzo said, but needed.</p><p>&ldquo;We need a little bit of everything,&rdquo; Rizzo said.</p><p>People interested in the center&rsquo;s treatment plans can schedule an appointment by contacting the practitioners they are interested in seeing individually.&nbsp;</p><p><strong>Devil&rsquo;s Millhopper Geological State Park</strong></p><p>For those who believe Florida is entirely beaches and flatlands, Devil&rsquo;s Millhopper can be a surprising site.&nbsp;</p><p>Located at 4732 Millhopper Road, this state park&rsquo;s main attraction is a 120-foot-deep sinkhole decorated with lush native flora and sedimentary layers that display millions of years of history.&nbsp;</p><p>Open from 8 a.m. to sundown every day of the year, this unique Gainesville landmark has attracted visitors since the 1880s. Guests can scale the winding wooden staircase and admire the tranquil sinkhole or hike a half-mile wooded nature trail.&nbsp;</p><p>For those interested in learning more about the park&rsquo;s history, guided walks with a park ranger are available at 10 a.m. every Saturday.&nbsp;</p><p>Admissions are $4 per vehicle and $2 for pedestrians and bicyclists.&nbsp;</p><p><em>Contact Bonny Matejowsky at bmatejowsky@alligator.org. Follow her</em><em>on Twitter @bonnymatejowsky&nbsp;</em></p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

    parent.querySelector('#articleCardCaption').style.display = "block";

if (myArticle.about_one.length < 4) {
        parent.querySelector('#articleAboutContainer').style.display = "none";
    }

    if (myArticle.card_caption) {
        const splitCaption = myArticle.card_caption.split('-');

            if (splitCaption.length >= 2) {
                const formattedCaption = splitCaption[1].trim() + ' - <em>' + splitCaption[0].trim() + "<em>";
                parent.querySelector('#articleCardCaption').innerHTML = "<span>" + formattedCaption + "</span>";
            } else {
                parent.querySelector('#articleCardCaption').innerHTML = myArticle.card_caption;
            }
    } else {
        parent.querySelector('#articleCardCaption').style.display = "none";
    }
    

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

    

    

    myModal.show();
}, false);

})();