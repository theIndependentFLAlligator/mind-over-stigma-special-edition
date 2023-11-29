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
document.getElementById('first-gen').addEventListener('click', function() {
    const myArticle = {
        slug: "first-gen",
        headline: "Your definition of “First-generation”",
        subtitle: "",
        card_path: "Portraits/gabriela.jpg", 
        author_one: "Gabriela Montes",
        author_two: "",
        contact_one: "Gabriela Montes is a Clinical Mental Health Counseling M.S. student at Johns Hopkins University and a UF Psychology graduate.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        body: "<p>Being a first-generation student means considerably more than &ldquo;I&rsquo;m the first in my family to go to college.&rdquo;</p><p>To some, it means &ldquo;I&rsquo;m first in my family to speak English,&rdquo; &ldquo;I&rsquo;m the first in my family to take on FAFSA,&rdquo; &ldquo;I&rsquo;m the first in my family to take a standardized test&rdquo; or &ldquo;I&rsquo;m the first in my family to have the opportunity to reap the benefits of an American Dream.&rdquo;</p><p>Being first-gen is often a solo journey that paints everything a bittersweet color, a mixture of excitement for the doors opened for us and an overwhelming fear of coming up short of every sacrifice made to get us where we are. We discover success and failure on our own, but carry the judgment of many.</p><p>To be a first-generation student means to carry the burden of past generations&rsquo; choices, for better or for worse.</p><p>A vast majority of first-gen students, such as myself, come from cultures that don&rsquo;t consider mental health a legitimate concern or issue. The stigma associated with seeking mental health support or accommodations has created an environment of shame which only serves to exacerbate the challenges we face daily.</p><p>Now in the United States, the cultural contrast between complete rejection and complete acceptance of mental health related conversations often leaves us stranded in a gray area, handling our stress as well as we can, hoping never to reach a breaking point that may force us to stray from the path so many fought so hard to pave for us.</p><p>We carry a sense of responsibility passed down from our parents to us, from our grandparents to our parents and so on to ensure a better life for the coming generations &mdash; but at what cost?<br>Burnout has recently come into the limelight, affecting people of all backgrounds, ages and majors, and it appears to be affecting students at younger and younger ages.</p><p>As first-gen students, our learning curve is already set at a considerably steeper level. As we push and push to catch up, the chances of us burning out before we&rsquo;re even able to get started are at an all-time high, especially if we don&rsquo;t take the time to take care of ourselves.</p><p>Writing about mental health and burnout as umbrella terms is recognizably vague but purposeful. A constant cycle we face is comparison. Comparing our academic achievements, our workload, our income, our time management &mdash; even our struggles.</p><p>But no matter what anyone says &mdash; not peers, not parents, not teachers &mdash; there is no one standard by which to measure mental health issues. You are equally as deserving of support as anyone else is. You are not weak; you are human.</p><p>Navigating life is burdensome even when you know exactly what to expect.</p><p>You should be proud of achieving everything you have, whether you think it is enough. If you are struggling, no matter the severity and no matter the reason, there are resources available to you. You aren&rsquo;t a stranger to being the first to try something, and I promise you, mental health support is more than worth it.</p><p>It&rsquo;s much easier said than done, but you don&rsquo;t need to be confined to anyone else&rsquo;s expectations of you as a first-generation student. As you discover your new autonomy in college, your desires, your passion and even your mental health, I encourage you to redefine your title of &ldquo;first-generation&rdquo; however you see fit. For me it was &ldquo;I&rsquo;m the first in my family to see a therapist&rdquo; for others it&rsquo;s &ldquo;I&rsquo;m the first in my family to openly foster conversations about mental health&rdquo; or &ldquo;I&rsquo;m the first in my family to break the cycle of stigma.&rdquo;</p><p>And yet, my hope for all of us is &ldquo;I&rsquo;m the first in my family to have the opportunity to reap the benefits of an American Dream &mdash; including prioritizing my mental health for my own well-being and for that of future generations.&rdquo;</p><p>I&rsquo;m so proud of us and everything we&rsquo;ve accomplished. I genuinely can&rsquo;t wait to see what the future has in store. How are you going to define what happens next?<br></p>",
        desc: "<p>You aren’t a stranger to being the first to try something, and I promise you, mental health support is more than worth it</p>",
    };

    history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");

    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);        
parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

    

    myModal.show();
}, false);

// Article
document.getElementById('loneliness').addEventListener('click', function() {
    const myArticle = {
        slug: "loneliness",
        headline: "The unspoken impacts of loneliness in college",
        subtitle: "",
        card_path: "Portraits/mcclung.jpg", 
        author_one: "Grace McClung",
        author_two: "",
        contact_one: "Grace McClung is a UF Journalism sophomore.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        body: "<p>I ran nearly 300 miles my first semester of college.</p><p>Running was the only thing that seemed to quell the crushing loneliness I felt &mdash; and listening to Ludovico Einaudi&rsquo;s &ldquo;Experience&rdquo; on loop. Often, I could be found doing both at the same time, sprinting through the Swamp high on adrenaline and the crescendo of classical piano notes.</p><p>It was all I could do to get a break from a feeling that suffocated my daily life. I was the loneliest I&rsquo;d ever been, and it was taking a toll I didn&rsquo;t notice until much later.</p><p>I knew college would be an adjustment. Over 1,400 miles from my home in Colorado, I anticipated feelings of homesickness and isolation. However, I was unprepared for the emotional turmoil I experienced throughout my first year of college and occasionally experience now as a sophomore. I failed to realize the extent to which being alone for the first time in my life would aggravate deep-seated insecurities, fears and mental challenges.</p><p>For the first month of school, I busied myself getting to know my roommate, finding clubs and organizations to join and trying to connect with the sea of new people around me. It was fun, at first, because everyone was doing it. And I expected my efforts to be rewarded with a tight-knit social circle, a best friend and maybe even an intimate relationship.</p><p>When none of these dreams panned out, the loneliness set in, and I began my almost daily excursions into the wilderness, where I could feel fine being alone.</p><p>I dreaded life on campus. Around me, people were forging relationships that felt impossible to me, and I envied their happiness. It seemed like everyone had figured it out.</p><p>My twin sister, who was worlds away in Wyoming, bore the brunt of my frustrations. She was the only person I shared my thoughts with because they embarrassed me. I blamed my loneliness on myself and a lack of social magnetism that everyone else seemed to possess.</p><p>I felt like a failure and didn&rsquo;t want anyone, especially my family, to agree. But staying silent about what I felt was an avoidable mistake.</p><p>Loneliness is something not talked about enough in college. It&rsquo;s more than mere longing for one&rsquo;s parents or the sadness accompanying missing a hometown friend. My roommate once told me college loneliness is the worst form of loneliness there is.</p><p>My own experience has taught me that she&rsquo;s not just right, but she also pointed out an epidemic among college students that goes largely unnoticed. It took time, but eventually, I found the friendships and community I was looking for.</p><p>The more I opened up to people about my feelings and experiences, the more I realized that loneliness in college is rampant. Had I known how common it is, I would have been able to have discussions with others that could have prevented an entire year of struggle.</p><p>The environment that stigmatizes mental health issues is the same toxic environment that prevents us from seeing loneliness as the mental health issue it is, robbing students of the opportunity to have the kind of school year I had initially hoped to have.</p><p>Rather than presenting loneliness as a lapse in social skills and making students feel ashamed, we should work to normalize conversations surrounding it. Loneliness can be devastating on its own, but it can be a weapon when combined with other mental health issues such as anxiety and depression because of its ability to exacerbate these conditions.</p><p>Looking back, I enjoyed my first year of college overall. But it was tainted by feelings I didn&rsquo;t understand or know how to cope with, and it was hard in a way that it didn&rsquo;t have to be.</p><p>Loneliness plagued me with self-doubt which manifested symptoms of anxiety despite the fact that I had never been an anxious person. It has an amplifying effect on emotions which is why it is difficult to address. This is why we need to make it part of the conversation.</p><p>While I am much better now, dealing with loneliness in college is a work in progress. But with the right resources, it can be done. I now run solely for fun.<br></p>",
        desc: "The environment that stigmatizes mental health issues is the same toxic environment that prevents us from seeing loneliness as the mental health issue it is."
    };

    history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");

    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);        
parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);
   

    myModal.show();
}, false);

// Article
document.getElementById('skinny').addEventListener('click', function() {
    const myArticle = {
        slug: "skinny",
        headline: "How skinny feels",
        subtitle: "",
        card_path: "Portraits/zoeythomas.jpg", 
        author_one: "Zoey Thomas",
        author_two: "",
        contact_one: "Zoey Thomas is a UF media production, management and technology sophomore and reporter for The Alligator.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        body: "<p>On Aug. 10, 2016, my mom took me to the pediatrician.</p><p>It&rsquo;s not an unusual place for a 12-year-old to visit. The waiting room was filled with kids my age, dreading pre-seventh-grade vaccines or hoping the doctor would sign their approval form to play a school sport.</p><p>But I wasn&rsquo;t there for a shot or a signature. Instead, I left the office with a diagnosis that would change my life &mdash; a diagnosis that put years of calorie counting, obsession with exercise and need for control into words.</p><p>I was obsessed with &ldquo;healthy&rdquo; foods from a young age. When the sno-cone stand came to my elementary school, I ordered an unflavored one, chewing the ice to avoid sugary syrup. During Girl Scout camping trips, I pretended I was allergic to gelatin to skip s&rsquo;mores.</p><p>The obsession spiraled in sixth grade when I started skipping meals after the stressful transition to middle school left me wanting control over my life. My mom&rsquo;s concern for my weight led me to the Nemours Children&rsquo;s clinic and the words &ldquo;anorexia nervosa.&rdquo;</p><p>By the time I left that appointment, I was enrolled in an eating disorder recovery group, one-on-one therapy and weekly dietician visits. And so began the worst two years of my life.<br>Recovery sucked. I didn&rsquo;t want to drink Pediasures like water or stop visiting the YMCA cardio station. I cried at the dinner table almost every night.</p><p>But with my parents&rsquo; support, I kept going, and after a couple years of hard work, I overcame my anorexia, physically and mentally. I soared through high school without counting a single calorie.<br>Then I went to college, and all it took was one month for recovery to become a distant memory.<br>Don&rsquo;t get me wrong. Starting college is exciting. For the first time in your life, you&rsquo;re surrounded all day, every day, by young people your age. There are parties and football games and tailgates.</p><p>But with constant social interaction comes constant social comparison. The guy from statistics class you followed on LinkedIn has a better internship than you. The girl you just walked past in Plaza of the Americas has cooler shoes.<br>For me, those comparisons quickly morphed into body checking and calorie-obsessive thoughts I hadn&rsquo;t felt since middle school.</p><p>That girl at the gym has a flatter stomach than me. That guy in front of me in the dining hall line chose low-calorie vinaigrette for his salad while I got Caesar dressing.<br>Negative comparison added to a general lack of control over my life. In high school, my only plan was to get into college. Once I got here, the future became hazier. The boxes in which I defined myself in high school &mdash; the girl on the cross-country team, the girl on the yearbook staff, the girl who sat with so-and-so at lunch &mdash; disappeared.</p><p>I couldn&rsquo;t find my identity, and I didn&rsquo;t know how to manage life now the floor of childhood security had dropped from under me. Add fear of the &ldquo;freshman 15&rdquo; to the cesspool of triggers, and my years of therapy and nutrition appointments didn&rsquo;t stand a chance.</p><p>My experience isn&rsquo;t unique. Eating disorders usually begin between 18 and 21 years of age. Between 10% and 20% of women in college suffer from eating disorders. And from 2018 to 2021, the prevalence of eating disorders in college students increased by 20%.</p><p>But words from my peers have opened my eyes to the problem more than statistics. Girls in my classes boast the only thing they&rsquo;ve had to &ldquo;eat&rdquo; all day is a Diet Coke. Gym guys use &ldquo;bulking&rdquo; and &ldquo;cutting&rdquo; as code words for barely disguised anorexia.</p><p>I am constantly surrounded by people who don&rsquo;t like their bodies. People who the media and TikTok have told to be thin or muscular is to be attractive, and to be attractive takes priority over physical and mental health.</p><p>But I&rsquo;ve learned over the past eight years there is no magical clothing size that will heal your self-esteem, give you back control over your life or make you popular.</p><p>Cutting calories won&rsquo;t fix your life. So, you might as well eat.</p><p>You might as well give your brain fuel to study and learn. You might as well give your body the energy it needs to spend time with your friends, to walk to your classes and to soldier through Gator football games (quite a feat with this season&rsquo;s team).</p><p>In one &rsquo;90s interview, Kate Moss said, &ldquo;Nothing tastes as good as skinny feels.&rdquo; But with respect to Moss, skinniness, when caused by neglecting your health, doesn&rsquo;t feel good at all.</p><p>Skinny felt like pushing away the people I love because I was too focused on the gap between my thighs to put energy into being a good friend, daughter or sister. Skinny felt like flunking a test because I was so consumed by thoughts of food I couldn&rsquo;t study.</p><p>As college kids, we have to stop using food as an outlet for college stresses. It&rsquo;s OK to feel lost. It&rsquo;s OK to feel overwhelmed. But let&rsquo;s stop normalizing cutting calories as a way to cope with those feelings.</p><p>College is a time to find who you are. That&rsquo;s a big task to shoulder with an empty stomach.<br></p>",
        desc: "College is a time to find who you are. That’s a big task to shoulder with an empty stomach."
    };

    history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");

    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);        
parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

    

    myModal.show();
}, false);

// Article
document.getElementById('photojournalism').addEventListener('click', function() {
    const myArticle = {
        slug: "photojournalism",
        headline: "Seeing the world through a different lens with mental illness",
        subtitle: "",
        card_path: "Portraits/hoff.jpg", 
        author_one: "Augustus Hoff",
        author_two: "",
        contact_one: "Augustus Hoff is a UF Journalism senior and conservation activist.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        body: "<p>For most students walking around campus, a UF Alert warning them of a bomb threat is a message to leave the area.</p><p>And it&rsquo;s taken without question.<br>For me and the other journalists there, it&rsquo;s a bat signal.</p><p>On Feb. 2, the Gainesville bomb squad was called into Turlington Plaza. And what did I get from my managing editor immediately after the UF Alert?</p><p>&ldquo;Go.&rdquo;</p><p>It was then that I realized the irony in walking toward the direction of an active threat, hundreds of students forming a flow behind me, like I&rsquo;m the rock, having the sea of others split<br>beside me.</p><p>And that is the root of my struggle with mental health and, ultimately, my never-ending ethical battle of journalism. But to stay a good journalist and person, that battle should never end.<br>I despise the idea of capitalizing on someone&rsquo;s worst day of their lives &mdash; and I distance myself from journalists who view struggle as an opportunity. Struggle should instead be<br>supported. The accessibility of a person&rsquo;s struggle can show others, too, that they aren&rsquo;t alone.</p><p>To support this, I&rsquo;ve found my niche of journalists: photojournalists.</p><p>I&rsquo;ve always been a visual person. I like framing and the artistic side of journalism &mdash; which lends more to the visuals that make up documenting an event.</p><p>My time in college pursuing photojournalism has led me 120-feet deep inside an enslaved people&rsquo;s wreckage site with White Sharks in South Africa, all the way to riding shotgun<br>and shooting photos out of a helicopter. It&rsquo;s been fun.</p><p>It&rsquo;s also, unfortunately, been damaging. I have been inside natural disaster coverage, shooting threats, war protests, mobs, prisons, execution protests, criminal court decisions,<br>memorials, and funerals.</p><p>At times, I&rsquo;ve become the thing I despise most in this profession &mdash; a desensitized journalist.</p><p>The other day, a lecture had us look at iconic images of war. My classmates, some covering their eyes with the blue screens on their computers, would wince and flinch at the<br>sight of gruesome images. Instead, I saw how none of the fence posts were bumping into each other in the image.<br>Disappointed by this, I talked to my therapist. Apparently, I compartmentalize, a process in which your brain stores information in a sometimes-healthy way that clears up room<br>for daily thoughts.</p><p>So now, my brain is going through the boxes, blowing off the dust and picking away the cobwebs. It is painful.</p><p>With a camera, keeping your eye focused through the lens is easy. But you only begin to see the whole story when you pull your eye from the lens. What are people&rsquo;s body language?<br>Are they comfortable with the camera there? Do they know I am a reporter and not an enemy?<br>I like to compare these experiences to developing a roll of film. I must be careful with developing the images that print in my brain. Limiting the exposure and understanding that all<br>the slides being set are vulnerable are the keys to a healthy mindset and a well-exposed photograph.</p><p>Accepting vulnerability gives me access to images that show why someone&rsquo;s struggle is important and should be seen by others. I hope discussing my struggles makes more room for journalists to know they are not alone in their revolt against old-fashioned media mindsets -&ndash; and that if you feel bad after talking to someone who just lost it all, it&rsquo;s normal to feel bad.</p><p>Unfortunately, I have to remind myself that I am not Batman, zooming towards the bomb threat.<br>Did Batman ever do a mental check before answering the bat signal?<br></p>",
        desc: "At times, I’ve become the thing I despise most in this profession — a desensitized journalist."
    };

    history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");

    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);        
parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

    

    myModal.show();
}, false);

// Article
document.getElementById('anxiety').addEventListener('click', function() {
    const myArticle = {
        slug: "anxiety",
        headline: "Battling Anxiety",
        subtitle: "",
        card_path: "Portraits/carolina.jpg", 
        author_one: "Carolina Tortorelli",
        author_two: "",
        contact_one: "Carolina Tortorelli is a UF media production, management and technology sophomore.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        body: "<p>I hold on to the armrests for dear life. My palms are sweating, my heart is racing, my legs are shaking. Then, I look out the window. No, the plane is not falling.</p><p>Breathe in. Breathe out.</p><p>My chest is hurting, my stomach is turning and my eyes are getting teary. The woman sitting by the window looks at me concerned. Although I&rsquo;m embarrassed by my reaction, I can&rsquo;t help it.</p><p>I know all the facts: you have a higher chance of dying in a car accident on your way to the airport than during your flight; turbulence has never caused a plane crash; pilots need 250 flight hours before flying commercial planes.</p><p>And yet, none of it makes me feel better. My brain still goes to dark places where both engines explode, a terrorist barges into the cockpit, the plane collides with another plane or the pilot has a suicidal wish to kill us all.</p><p>You would think I haven&rsquo;t flown a lot.</p><p>But I&rsquo;ve been flying since I was very little, and I&rsquo;ve always been scared. In fact, I used to fly eight hours twice a year to see my grandparents in Brazil. But still, every time my family was dead asleep on the plane, I would stay alert, checking to see if anything was amiss. When there was turbulence, I would hold my parents' hands tight &mdash; and then it would get worse.</p><p>Now, I fly to Baltimore to see my long-distance boyfriend almost every month. It doesn&rsquo;t matter that I have flown that same airline to that same destination eight times before. Each time, in my head, is the one where the plane goes down.</p><p>The fear is irrational. The facts don&rsquo;t mean a thing, especially when I&rsquo;m over 30,000 feet in the air inside a scary metal tube going 500 mph.</p><p>But flying is just one of the things that trigger my anxiety. Missed calls from my parents, police cars in my neighborhood, random aches and pains in my body.</p><p>I have navigated life alongside anxiety disorder for a while, being in on-and-off therapy regularly since the third grade. I&rsquo;ve never been ashamed of it. My mom has always prioritized mental health in my household and provided me with any of the resources I might need to improve.</p><p>But a couple of months ago, my chest pains became more frequent, and my therapist recommended I see a psychiatrist. After only one session I was prescribed medication.<br>Now that was a scary turn. Although I never saw mental health as something to be embarrassed about, there is something about needing an external force inside your body to feel &ldquo;normal&rdquo; that made me hesitant.</p><p>Escitalopram, commonly known as Lexapro, is a serotonin reuptake inhibitor (SSRI) that restores the balance of natural substances in the brain. Although it is a common medication to treat depression, it can also treat generalized anxiety disorder.<br>But as much as taking Lexapro sounded scary, I was more scared of my own mind. I wanted to be able to relax on a flight while enjoying the view, instead of checking to see if the plane is falling. I wanted to find missed calls from my parents and think they just miss me instead of immediately assuming they were both murdered in cold blood. I didn&rsquo;t trust myself when I knew anxiety clouded my logic, so I had to trust the specialist instead.</p><p>It&rsquo;s been about five months now, and I am no longer intimidated by Lexapro. Regardless of having that external force help stabilize my brain chemistry, I still feel completely like myself, minus some of the dark thoughts that used to consume me. I might even be getting off of it early next year.<br>But don&rsquo;t get me wrong. Planes are still very scary things, and I still hold on to the armrest for dear life.</p><p>Anxiety disorder is a chemical imbalance in the brain, so as long as I need an outside force to help me fight this lifelong battle, I will. I am very thankful for the changing mindset regarding mental health in society today, and I hope to see it even further destigmatized in the future. There is no shame in needing a little external force to help you fight any mental health battles.<br></p>",
        desc: "My chest is hurting, my stomach is turning and my eyes are getting teary. The woman sitting by the window looks at me concerned. Although I’m embarrassed by my reaction, I can’t help it."
    };

    history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");

    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);        
parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

    

    myModal.show();
}, false);

// Article
document.getElementById('gun-violence').addEventListener('click', function() {
    const myArticle = {
        slug: "gun-violence",
        headline: "Covering gun violence: The inescapable beat young journalists know all too well",
        subtitle: "",
        card_path: "Portraits/caleb.jpg", 
        author_one: "Caleb Wiegandt",
        author_two: "",
        contact_one: "Caleb Wiegandt is a UF journalism senior and a former Alligator reporter.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        body: "<p>On the morning of April 10, 2023, a gunman entered a downtown Old National Bank office in my hometown of Louisville, Kentucky, and killed five people.</p><p>Just a dozen blocks away, the staff of Louisville&rsquo;s only daily newspaper &mdash; the paper that journalistically raised me &mdash; immersed themselves into the tragedy and provided robust coverage of the shooting and its aftermath well into the summer.</p><p>I was sitting at my desk in the UF College of Journalism and Communications when I got the push alerts and turned on the news. As the day unfolded and the chaos subsided, the coverage didn&rsquo;t &mdash; and still hasn&rsquo;t.</p><p>Although many decades apart, it wasn&rsquo;t the first time the paper in Louisville had covered a mass shooting. More than 30 years before, in 1989, the deadliest in the state&rsquo;s history left eight victims dead in a building that was a part of the paper&rsquo;s complex on West Broadway, adjacent to the same newsroom they use today.</p><p>A sizable portion of the paper&rsquo;s staffers are lifelong Kentuckians, and even if a few of them weren&rsquo;t born or professional journalists yet, they all know or remember the horror of what happened down the hall from them and likely had those memories reawakened when violence struck again.</p><p>The role of journalists in memorializing the victims of mass shootings or any tragedy, violent or natural, remains paramount to shaping the immediate and lasting memory in the communities that suffer.</p><p>In the case of mass shootings, it&rsquo;s a shared cycle of trauma that comes with too many newsrooms trusted to work in the delicate balance of their stories.</p><p>I&rsquo;ll never forget the first day I walked back into the newsroom to start my internship at the paper this past May. On the mostly empty desk I was set to work from, there sat a pamphlet on coping with trauma.</p><p>By the collection of dust, you could tell that it had been there since that day in April. A few of my colleagues still had theirs hung up on bulletin boards or posted in some other prominent place weeks after the shooting.</p><p>Thankfully, I&rsquo;ve never been involved in one of these tragic episodes personally or journalistically as it happened. Journalism students at other schools have, most recently on the campuses of North Carolina and Michigan State, and done so with the gripping relativity that only a generation raised on that kind of tragedy can.</p><p>For the generation born too late to remember 9/11, coming of age in the &ldquo;where were you when&rdquo; moments of Sandy Hook, Parkland and Uvalde leaves a different kind of harrowing impression, one full with haunting familiarity and inextricable grief.</p><p>For the generation of young journalists trusted with these stories, the toll of attempting to convey the unimaginable grows as fewer journalists come to their outlets naive to gun violence, whether from their home or school communities or from prior jobs in the news industry.</p><p>When news outlets like the Washington Post publish the visceral gruesomeness of these events, I can imagine it making future journalists like me ill on separate counts: one of familiar, past- and present-tense grief and one of fear for what there&rsquo;ll be for us to cover.</p><p>Shortly before the events of April 10, a former colleague of mine left the paper in Louisville and took a new job at a daily in Bangor, Maine. In October, when a gunman killed 18 people in nearby Lewiston, Maine, his new paper&rsquo;s staff covered the fallout of what became the 10th-deadliest mass shooting in United States history.</p><p>I can&rsquo;t speak for what he might be feeling, now forever connected to those two communities that became home through working in news. It does, however, speak to the replicability of gun violence and the inability for journalists moving around the country to practice local journalism to be away from its ripples.</p><p>Journalists everywhere will continue to cover horrific acts of gun violence with the same capacity and responsibility to tell the stories of those lost to it and the ones they leave behind. But gun violence begs a broader wellness check &mdash; from the industry and leaders everywhere &mdash; on the state of journalists, of all ages, but especially younger ones.</p><p>Right now, it is the inescapable beat, one that doesn&rsquo;t go away when you put down the pen.<br></p>",
        desc: "In the case of mass shootings, it’s a shared cycle of trauma that comes with too many newsrooms trusted to work in the delicate balance of their stories."
    };

    history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");

    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);        
parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

    

    myModal.show();
}, false);

// Article
document.getElementById('ai').addEventListener('click', function() {
    const myArticle = {
        slug: "ai",
        headline: "Artificial intelligence: Your next therapist?",
        subtitle: "",
        card_path: "Portraits/edwards.jpg", 
        author_one: "Nazaree Edwards",
        author_two: "",
        contact_one: "Nazaree Edwards is a UF fourth year medical student.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        body: "<p>Artificial intelligence is one of the hottest topics right now, among the myriad of buzzwords and advancements we navigate in this tech-driven world.<br>When discussing AI, there&rsquo;s usually a drastic split in opinions. Some view it as an exciting new tool with endless possibilities, while others see AI as the potential harbinger of a new societal menace.<br>I stand on the side of it being a tool &mdash; an incredibly powerful tool applicable in many areas of life. As a future mental health provider, I see potential for it to be a supplemental utility to mental health care.<br>We live in a time where mental health care has become a prominent need. People are now able to see psychiatrists and therapists through video chatting and, in some cases, even a phone call. There are several crisis lines available. Online therapy providers are proliferating, with more providers than ever entering into the digital realm. It&rsquo;s even become a component of education in some psychiatry residency training programs.<br>Despite the surge in online mental health services, there is still a significant gap in the availability of proper care for many people. Wait times for an appointment can take weeks, if not months, before you can see a provider in person. Online services improve this, with some providers having availability in their schedule within a matter of days.<br>But there&rsquo;s still a financial cost to the consumer, and that&rsquo;s considering the specific provider takes your insurance. Out of pocket costs for a psychiatrist can exceed $200 for a medication refill visit. Even the online therapy providers that seem to offer promise aren&rsquo;t without problems.<br>Advertisements for low or no-cost coverage can be misleading as they are subject to insurance companies. I recently got a bill for $300 as my insurance provider refused to cover the agreed upon amount, raising the price by $15 per session.<br>So where does AI fit into this narrative? Addressing large-scale issues in health care infrastructure is complex, but AI can function as a supplementary support system when considering mental health care.<br>While not flawless, AI can be utilized to engage in supportive conversations, especially when faced with the waiting queue for a psychiatrist or therapist. It offers helpful resources and evidence-based strategies for common complaints. It aids in articulating the symptoms you're describing, providing a conversational, yet supportive environment for you to lay out some of your inner turmoil.<br>I have gone to ChatGPT when I&rsquo;ve overwhelmed my friends asking for dating advice, and I&rsquo;ve approached it for conflicts with said friends. It&rsquo;s not perfect, but it&rsquo;s an environment where you can express vulnerability, similarly to therapy. Whether it&rsquo;s 3 a.m. and you&rsquo;re overthinking about the text you sent or it&rsquo;s noon and you want to go through a guided meditation, it&rsquo;s a tool to help you out.<br>Ongoing research has been delving into the utility of AI as a supplemental tool. There are even AI applications trained by licensed professionals in cognitive-behavioral therapy that will follow up with your complaints and offer strategies to help you adjust your thought processes.<br>Apps like Woebot and Wysa have rules designed by humans to mimic the therapy process. ChatGPT and other narrative AIs don&rsquo;t have that same regulation, but are programmed to understand the language you use to establish a dynamic and supportive connection between you and the AI. There&rsquo;s no doubt AI is not going away, so we ought to find a way to use it for the best.<br>As a future psychiatrist, I cannot stress that AI is in no way, shape or form a replacement for human connection from professional, licensed mental health care.<br>There&rsquo;s no stronger therapeutic alliance than that between a human provider and a patient. The person-to-person connection is the core of healing, it&rsquo;s the blending of two spirits &mdash; one guided to aid another that makes therapy such an important utility.<br>I cry with my therapist. I share my pride with my psychiatrist. These are things I can&rsquo;t do with an AI that has the same meaning. However, it doesn&rsquo;t hurt to have a little support from your friendly artificial intelligence.<br></p>",
        desc: "These are things I can’t do with an AI that has the same meaning. But it doesn’t hurt to have a little support from your friendly artificial intelligence."
    };

    history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");

    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);        
parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

    

    myModal.show();
}, false);

// Article
document.getElementById('better-place').addEventListener('click', function() {
    const myArticle = {
        slug: "better-place",
        headline: "How I got to a better place",
        subtitle: "",
        card_path: "Portraits/chrystie.jpg", 
        author_one: "Chrystie Blot",
        author_two: "",
        contact_one: "Chrystie Blot is a UF Journalism sophomore.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        body: "<p>Mental health is real. While I hear about mental health awareness everywhere, I feel like it gets overlooked at the same time.</p><p>I am a huge advocate for going to college. Being able to experience living on your own and meeting different people from various backgrounds that ultimately are in the same place for the same thing, is a one in a lifetime encounter. But, one of the things that doesn't really get spoken on, is the effects that going to college has on a young adult.</p><p>As college students most of us face one of the first stages of reality: moving out and living on your own. Going from living with your parents 24/7 and having their physical support, to a college town that includes thousands of students putting their all into their academics. Learning how to juggle keeping your dorm or apartment clean, friendships and being involved in organizations. Doing all these things while keeping your grades above a &ldquo;C&rdquo;.</p><p>Within the first month of me starting college I cried almost everyday. I would wake up, go to class, study at the library then go back to my dorm. I felt like a robot. I barely spoke to anyone and felt like I didn't belong. I would call my family back at home and beg to come back every weekend. This month really took a toll on my mental health.</p><p>On top of going to such a huge university and feeling alone, I am a first-generation student. My parents have never been to college so I didn't have the specific support for things that are only experienced in college. I went to many organizations&rsquo; general body meetings to find a group of people that would fit me. I searched for weeks on end and eventually started to give up. I later found out that I had to set up my own intentions first in order to figure out what I was looking for. To do this, I evaluated my feelings and found different things that helped better my mental health.</p><p>I stated maybe a fraction of the things that college students have to endure. There are so many variables that go into affecting your mental health. Here are some steps that I think everyone should do to take one step closer to a healthier mental:</p><p>Evaluation is the first step. Finding the root is the best way to solve any problem. Setting time aside to maybe journal, take a walk or even talking to a trusted friend. Though it may be uncomfortable, I think it's important to really sit in your thoughts and figure out &ldquo;what is it that is causing me to feel this way and how can I make it better.&rdquo;</p><p>Do things you love. Being able to clear your mind of what is stressing you out or affecting you is key. Everyone has something that they always look forward to doing. Keep this &ldquo;thing&rdquo; close to you and use it as your escape. For me, I love going to the gym with a friend and cooking. I look forward to designating allocated time for doing these things within my week because it makes me feel good.</p><p>Find people that you can build relationships with. You can do this by going to organization meetings but being intentional with which organizations you may join. You can also do this with people you may live with. This may be your roommate or someone in your building. I was able to build a great friendship with my roommate that I am grateful for. We were able to help each other grow our comfortability within the university.</p><p>Last thing I would highly recommend doing is staying in touch. I found speaking with my family at least once a day made me progress in my mental stability at college. I always felt like I was home when I spoke with them and it brought joy to my day. Also staying in touch with friends from back at home is important to sustaining long distance/term relationships.</p><p>Sometimes it may not be easy to do these things but I encourage you to try them. We all face mental health and I want you to know that it's going to be okay and taking one step at a time is the best thing to do.</p></p>",
        desc: "Within the first month of me starting college I cried almost everyday. I would wake up, go to class, study at the library then go back to my dorm. I felt like a robot."
    };

    history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");

    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);        
parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

    

    myModal.show();
}, false);

// Article
document.getElementById('weight-loss').addEventListener('click', function() {
    const myArticle = {
        slug: "weight-loss",
        headline: "This isn’t a success story",
        subtitle: "",
        card_path: "Portraits/marks.jpg", 
        author_one: "Sarah Marks",
        author_two: "",
        contact_one: "Sarah Marks is a UF Journalism sophomore.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        body: "I am struggling with my body. I always have. At 14, I was so overweight I bought clothes from the women’s section at Macy’s. I yearned to wear the crop tops and bikinis my friends wore. I wished I was pretty. When COVID-19 hit, I embarked on a weight loss journey. Almost four years later, I’m still not sure what my motivation was for me to lose weight. Maybe I was bored. That's what I tell myself. By the beginning of my junior year of high school, people started noticing a difference in my appearance. They said, “Get rid of your old clothes so you can't have the option to fit back into them.” Everyone was so proud of me. I had to live up to everyone’s expectations, right? The weight fell off so quickly that by my senior year, I was a skeleton. But at least I got to wear crop tops and bikinis. It was all worth it. I won “Biggest Glow Up” for my senior superlatives. I didn’t ask to be nominated, and I certainly did not ask people to vote for me. It was gut-wrenching. No one knew that I was doing 100 minutes of cardio a day. No one knew I didn't leave my house because I didn't know if I could find something to eat at a restaurant. No one knew I was eating a children's protein bar for breakfast and waited until 3 p.m. for lunch. No one knew how badly I was struggling. I lost over 100 pounds. I was a ghost. I worried about going to college, and so did my parents. But I began to get the help of a dietician, and fat started growing on my bones again. My clothes fit less, but I was okay with that. When I arrived at UF, I met one of my best friends. My roommate helped me feel less alone and never commented on my weight. My weight shot up. At first, I didn't know how to feel about it. It was gradual, but after getting used to it, I felt comfortable with it. The weight gain became noticeable. I feared when I went home, people would be disappointed in me. How could I let myself gain so much weight? I must be disgusting for gaining the “freshman 15” so fast. At 19, I've regained at least half of my weight. I choose not to be a slave to the scale, but I still hear a wretched voice in my head screaming at me to eat less or exercise more. I’ve gotten better at shutting it out, though. In hindsight, I learned so much from drastic weight loss as a teenager. The habits I created were worth it, even though I’m not as crazy about exercising or eating healthy all the time anymore. I’ve learned that I can't be afraid of indulging in life. I’m allowed to go out to eat, and I’m allowed to take a week off from working out. But this isn’t a success story. I am still struggling with my weight, and it has severely affected my mental health. I’ve battled binge eating as a result of my weight loss. I am constantly thinking about what I should eat for lunch or dinner. I worry eating ice cream will ruin my day. I scroll through my old photos and see a girl 50 pounds lighter. Sometimes, I’m jealous of who I was when I was tiny. Sometimes, I wonder why I have to struggle with such a consuming illness. Then, I remember we all struggle with body image, and I’m not alone. Weight is always going to play a role in my life. Losing weight didn’t solve my problems, and I don’t know if they ever will be solved. I’ve been a size two and a size 16, and I can confidently say I am much happier at the higher end of the spectrum. Just because you’re small doesn’t mean you're healthy. No one knows your internal struggles. But I empathize with you. I see you. And I hope you see a bit of yourself in me.",
        desc: "I empathize with you. I see you. And I hope you see a bit of yourself in me."
    };

    history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");

    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);        
parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

    

    myModal.show();
}, false);

// Article
document.getElementById('bullying').addEventListener('click', function() {
    const myArticle = {
        slug: "bullying",
        headline: "Bullying: A remnant of the past",
        subtitle: "",
        card_path: "Portraits/nielsen.jpg", 
        author_one: "Ben Nielsen",
        author_two: "",
        contact_one: "Ben Nielsen is a UF media production, management and technology senior and videographer for The Alligator.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        body: "<p>Few things seem more cruel to me than defenses of bullying. In a stroke of self-perceived genius, someone usually decides it&rsquo;s time to &ldquo;bring back bullying&rdquo; because &ldquo;people are too sensitive&rdquo; or something along those lines.</p><p>This outlook is shocking to me. It is deeply saddening to know people can believe that bullying is a remnant of the past or something only found in old movies and TV shows.</p><p>It took me a while to come to terms with just how horrible the bullying I faced in school was. Earlier this year, my therapist helped me realize what I was experiencing was much more sinister than that. It was abuse.</p><p>I denied this for a very long time. I chose to forget a lot of the things I went through in middle and high school. As it turns out, being physically violated regularly was one of them.</p><p>Looking back, there are some things I wish could have gone differently. Had I known I had the power to leave my situation, I would have done it in a heartbeat. However, it is rarely easy to escape situations like the one I faced.</p><p>Starting in high school, I was treated for multiple mental health problems, but my primary diagnosis was ADHD. It was nice to finally have an explanation for the mental health issues I faced, and to finally be medicated felt freeing.</p><p>I could finally see the world clearly and knew exactly what true happiness felt like. My personal philosophy changed almost immediately. I knew that I had to help the people in situations like mine, and that I needed to be indiscriminate in doing so.</p><p>This goal was applied in the simplest yet most effective of ways.</p><p>Earlier this year, I made a video for Gracey Davis&rsquo; story about Joey Alfonso, Gainesville&rsquo;s Batman. In the interview, he shared a bit of wisdom from the movie &ldquo;Batman Begins.&rdquo;<br>&ldquo;It's not who I am underneath, but what I do that defines me.&rdquo;</p><p>This quote spoke to me in many ways. I spent so many years of my life trying to fix myself, but the truth was that I could not. The brain is not something to be fixed but something that you must live with.</p><p>The medication definitely helps, but it isn&rsquo;t flawless. Medication rarely cures anything, and most mental health problems are lifelong. Unfortunately, sometimes this means that sadness is a necessary evil. But no matter what, it always gets better. You have to keep living.</p><p>Sometimes the cards we are dealt can feel unfair and even infuriating, and it can feel impossible to see a way out of our problems. That feeling is valid, but there are ways of coping with and moving forward from it.</p><p>Your brain doesn&rsquo;t define you &mdash; your choices are what make you who you are. In my opinion, there is no &ldquo;deep&rdquo; component of your identity. If you help others, that is who you are. If you hurt others, that is who you are.</p><p>A lot of people see themselves as the problem. In my situation, it took me a long time to realize the people who were beating and choking me at school were the problem. I did not deserve what happened to me, so seeing myself as a victim was the only thing that could help me cope.</p><p>A &ldquo;victim mentality&rdquo; is not the counter-productive mindset that it is often branded as. After all, if you can&rsquo;t blame others, who else is there to blame but yourself? No one should self-blame for a problem that would have never existed without another party intervening.</p><p>The problem was never me. The problem was the people who hurt me. The problem was the assistant principal who saw other students put their hands on me and failed to intervene. The problem was my English teacher who only intervened when I decided to punch one of the kids in self-defense. The problem was the history teacher who watched for years as we sat in her room during lunch, all while I was facing some of the worst pain I have ever experienced.</p><p>The problem was the guidance counselor who I was told to put my trust in blindly, who let my primary abuser off the hook on multiple occasions. The problem was everyone who participated, and everyone who watched and did nothing. But these people and their actions do not define me, and I choose to move forward and seek my own life and happiness.</p><p>The point is it is OK to recognize others as the cause of your problems. Those people are still worthy of love and respect, but recognizing that they took advantage of you is your right as a human being.</p><p></p>",
        desc: " A “victim mentality” is not the counter-productive mindset that it is often branded as."
    };

    history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");

    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);        
parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

    

    myModal.show();
}, false);

// Article
document.getElementById('mh-journalists').addEventListener('click', function() {
    const myArticle = {
        slug: "mh-journalists",
        headline: "Mental health for journalists: The sad reality",
        subtitle: "",
        card_path: "Portraits/lowery.jpg", 
        author_one: "Kairi Lowery",
        author_two: "",
        contact_one: "Kairi Lowery is a UF Journalism sophomore.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        body: "<p>The two words, &ldquo;mental health,&rdquo; carry so much weight and meaning. Whether acknowledging it or not, everyone deals with mental health. Your kindergarten teacher, the server who just took your dinner order, the person behind you in traffic all are impacted by their mental health. In this case however, the faces behind how we get our news are too.</p><p>Imagine a world without journalists. Where would we look to receive the news? Who would report on current events? How would our country as a whole know what was going on overseas?</p><p>Without journalists, our country would have little to no idea what goes on in the world. But these journalists, a necessary part of our everyday life, are usually overlooked as having little to no mental health issues, when in reality, the opposite is true.</p><p>As the Israel-Hamas war continues to wage overseas, society never stops and considers the wide range of groups it affects. While directly affecting the people involved in this unjust and horrific war, those reporting on these events are also directly impacted.</p><p>The photographers capturing the war and violence occurring, news reporters covering the unfolding events on the front line or the journalists brutally killed in strikes, the mental health of all involved is constantly overlooked.</p><p>Halfway into the month of November, 42 journalists and media workers have been killed, not counting those missing, arrested or injured, making this month the deadliest month for journalists since the Committee to Protect Journalists started collecting this data in 1992.</p><p>Journalists covering these events in Israel have also had threats on their families, cyberattacks, assault, censorship and similar things occur, when simply informing citizens of current news and events.</p><p>These journalists who are experiencing attacks on themselves, and those surrounding them are at such an increased risk for possible future mental health issues. The Media Diversity Institute said data has shown 11% of journalists have experienced Post Traumatic Stress Disorder from what they have witnessed while covering news, and 70% of journalists have experienced psychological stress due to their career.</p><p>When reporting on tragedy and trauma is so intertwined with being a journalist, these individuals are affected in much bigger ways than anyone would originally think.</p><p>However, while some may say the world we live in today is very inclusive about mental health, it is still often stigmatized. Statements like, &ldquo;a person who has mental health is just faking it,&rdquo; or the stereotype that &ldquo;those with mental illness can&rsquo;t function in society,&rdquo; have become so commonly thrown around that mental health is viewed by many in a negative way.</p><p>As society has created this condescending view of mental health, it has become easy to dismiss the impact mental health has on journalists.</p><p>Mind, an information and support platform for mental health, describes some factors that can contribute to mental health issues, like trauma, experiencing discrimination and stigma, stress or being the victim of a violent crime. Whether it be witnessing trauma firsthand, or experiencing and seeing racism or discrimination firsthand, journalists encounter these factors almost everyday while covering current events. Yet society still overlooks them as having no issues in a career.</p><p>In being able to address this reality that journalists are prone to mental health issues because of their increased exposure to trauma, and other factors, society can begin to destigmatize the idea of mental health and be more aware of the effects that it has.</p><p>Mental health affects not only these journalists covering the Israel-Hamas conflicts, but everyday people as well. In being able to raise awareness that people like journalists also experience mental health, the world is one step closer to de-stigmatization of mental health as a whole, where we as a society can recognize that it is a normal, real thing to experience and deal with the effects of.<br></p>",
        desc: " In being able to address this reality that journalists are prone to mental health issues because of their increased exposure to trauma, and other factors, society can begin to destigmatize the idea of mental health and be more aware of the effects that it has. "
    };

    history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");

    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);        
parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

    

    myModal.show();
}, false);

// Article
document.getElementById('mourning').addEventListener('click', function() {
    const myArticle = {
        slug: "mourning",
        headline: "Mourning as metamorphosis",
        subtitle: "",
        card_path: "Portraits/sarmiento.jpg", 
        author_one: "Valentina Sarmiento",
        author_two: "",
        contact_one: "Valentina Sarmiento is a reporter for The Alligator.",
        contact_two: "",
        about_one: "",
        about_two: "",
        date: "", 
        body: "<p><p>Alchemy for transmuting grief into care<br>My friend, I write these words as an invitation for collective grieving &mdash; let them invoke a spell of resilience within you. Feel them. Speak them out loud. Cradle them closely as they cauterize the wound. I, too, train my heart to eat despair. I, too, train my throat to devour thorns<br>So much of my lived experience is colored through my position as an immigrant. I include this to say that my first experience mourning was with that of my home land.<br>Like Lot's wife, I often feel that if I look back to Venezuela I'll turn to a pillar of salt. A clump swells somewhere in my chest whenever the country comes too close to mind.<br>Nevertheless, my heart beats and strains alongside those in the Global South. I will forever be empathetic to the plight of folks who have been displaced from their families and homes and I recognize my narrative exists somewhere far off, but in-tandem with theirs. Like so many, I mourn what could&rsquo;ve been. While this is one of my earliest memories of mourning, it wouldn&rsquo;t be my last.<br>I feel my grief first thing in the morning. Furiously writhing, as it clogs and congeals into an incomprehensible, semi-solid mass of misery at the back of my throat. I yawn; it grows. It&rsquo;s expansive. It feeds itself. Gorged on sorrow before breakfast.<br>All my words feel inadequate. I&rsquo;m a charlatan, loser, poser studying to enter a distrusted field with little-to-no integrity. I feel toothless. I&rsquo;m all gums, muted and champing incoherently when finally choosing to speak. We&rsquo;re witnessing genocide again today and I have a discussion due at noon.<br>For over a month now, it seems as if everyone is foaming at the mouth with information. Acts of inhumane aggression paired with ceaseless calls for condemnation. I try to write about my grief again today and feel totally paralyzed.<br>&mdash;-<br>I mourn for the people of Palestine. My heart splinters at the thought of their loss and swells with conviction for their freedom. I mourn for my Jewish comrades. I grow concerned for my lover and friends as they speak out against Zionism and colonialism. Similarly, my heart longs for the safety and liberation of the people of Sudan, Haiti and the Congo. These places are real. These people are real. Their pain is real. This grief is real and profound and yet, it doesn&rsquo;t feel like mine to hold. Or at least, not to hold alone.<br>I don&rsquo;t mean to center my sadness, I merely intend to vouch for its existence. In spite of my grief, I&rsquo;m so incredibly privileged- I recognize this. I&rsquo;m able to mourn safely and privately. I&rsquo;m able to mourn out of empathy, not necessity. I don&rsquo;t have to broadcast my grief to be believed. Holding this much grief is the least I can do. But I do not hold it alone.<br>This past month has affirmed my understanding of the world and convictions about building something better, something beautiful alongside my community. My community sustains me when I falter. Through their words and breath I find my own. That is true of you, as well.<br>You are a human being. Your life does not exist in a vacuum. You are not yet so self sufficient that you need for nothing or no one, and neither should you seek to be. It is impossible. A set up. An egregious lie. A strategy to divorce you from your humanity at best and a system which makes us complicit in our collective deaths at worst.<br>I know the grief is unyielding. I know it&rsquo;s exhausting. I know you may be fatigued. It&rsquo;s okay. Pause. Fall down. Unravel. Scream. Cry. We will remain here. Catch your breath. Yes, we are still doing this. Where does it hurt? Name the ways in which your soul aches. Lick your wounds. But not for too long, because we need you. We need you back up. Let us know if you need a hand, we can help you back up.<br>Our pain is collective and our grief is shared. This recognition breeds a communal ground, a sacred sanctuary that replenishes our capacity for collective liberation. Caring for each other is our only prerogative. Systems of oppression are working in tandem to numb you. Settler colonialism, capitalism and imperialism are all allies. Accomplices working against us. Do not let up. Dig your feet in because you are standing amongst a sea of international solidarity.<br>Our hearts are big enough, fleshy enough, to splinter and break open for it all. Staying soft and feeling our grief is a radical act.<br></p>",
        desc: " Furiously writhing, as it clogs and congeals into an incomprehensible, semi-solid mass of misery at the back of my throat. I yawn; it grows. It’s expansive. It feeds itself."
    };

    history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");

    parent.querySelector('#articleBody').innerHTML = myArticle.body;
    parent.querySelector('#articleTitle').innerText = myArticle.headline;
    parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
    parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
    parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);        
parent.querySelector('#copy-link-input').setAttribute('value', window.location.href + '#' + myArticle.slug);

    

    myModal.show();
}, false);

})();
