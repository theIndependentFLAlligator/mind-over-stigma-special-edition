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
    document.getElementById('hispanic-mh').addEventListener('click', function() {
        const myArticle = {
            slug: "hispanic-mh",
            headline: "UF mental health counselor discusses mental health challenges in the Hispanic community",
            subtitle: "Dr. Massiel Snow touches on the cultural, social norms of Hispanic communities that prevent  access to mental health care",
            card_path: "hispanicMH.JPG",
            card_caption: "Evelyn Miguel // Alligator staff - Massiel Snow sits in her office in the Ayers Medical building on Thursday, Nov. 16, 2023.",
            author_one: "Eluney Gonzalez",
            author_two: "",
            contact_one: "Contact Eluney Gonzalez at egonzalez@alligator.org. Follow him on Twitter @Eluney_G.",
            contact_two: "",
            about_one: "",
            about_two: "",
            date: "",
            desc: "In Hispanic communities, language is one of the biggest barriers to any service, and the same holds true for mental health.Only about 5% of psychologists are Hispanic, compared to the national 19% of the population. Gainesville’s Hispanic community comprises 12% of the local population, about 16,000 residents, according to the latest census data.",
            body: "<p>In October 2023, Dr. Massiel Snow, a new UF Employment Assistant Program counselor of Hispanic heritage, spoke on the &ldquo;Well at UF&rdquo; podcast about barriers. These were not lines in the sand or a concrete wall on a national border, but rather invisible barriers, cultural threads that stopped the Hispanic community from addressing a silent issue: mental health.</p><p>In Hispanic communities, language is one of the biggest barriers to any service, and the same holds true for mental health.</p><p>Only about 5% of psychologists are Hispanic, compared to the national 19% of the population, Snow said. Gainesville&rsquo;s Hispanic community comprises 12% of the local population, about 16,000 residents, according to the latest census data.&nbsp;</p><p>Ivana Jordan, a 19-year-old Puerto Rican UF communication sciences and disorders sophomore, has experienced therapy in both English and Spanish. She felt that language had a noticeable impact on the session&rsquo;s effectiveness.</p><p>&ldquo;I can express myself well enough in Spanish, but in English I'm able to use more specific words to counterpoint how I'm feeling,&rdquo; Jordan said.</p><p>While therapy in Spanish may become more prevalent, the communication barrier from client to therapist expands beyond language and into culture.</p><p>&ldquo;If we can&rsquo;t make that connection with a therapist, we're not going to seek services,&rdquo; Snow said. &ldquo;That therapist is not culturally sensitive. We're going to go into the office and be like, &lsquo;OK, this didn't work. This wasn't worth me even coming,&rsquo; and they'll never come back.&rdquo;</p><p>Cultural alienation is another important element to understanding Hispanic mental health; when families migrate to the United States, they may only bring immediate family members and, over time, bring the extended family here from abroad. For others, their family may never come. The result is a unique type of alienation, where one feels neither American nor of their native culture.</p><p>&ldquo;I feel like I've been isolated,&rdquo; Jordan said. &ldquo;I don't get to see my family as often and it&rsquo;s hard for me to fully identify myself with Puerto Rican culture because I feel kind of like an imposter whenever I go back and I feel like a<em>gringa</em>whenever I go back home.&rdquo;</p><p>Hispanic distrust of medical professionals contributes to the idea that seeking help means &ldquo;giving in&rdquo; to a malignant other.&nbsp;</p><p>This distrust stems from mass coerced sterilizations of <a href='https://www.refinery29.com/en-us/2020/10/10029088/puerto-rico-sterilization-abortion-reproductive-rights-history'>Puerto Rican women</a> in the 1930s-1940s and <a href='https://guides.loc.gov/latinx-civil-rights/madrigal-v-quilligan'>Mexican women</a> in the 1970s, which remain a starkly recent memory that casts suspicion on any medical professionals, including psychologists.&nbsp;</p><p>&ldquo;We always think that we have to over-exaggerate symptoms so that we can actually receive help,&rdquo; Jordan said. &ldquo;But this distrust that they're going to overlook anything else that needs attention.&rdquo;</p><p>As a result, Hispanic communities tend to turn inward to home remedies passed down for generations, stemming from the unique mix of indigenous, African and Spanish heritages.</p><p>&ldquo;We have such a big indigenous population that still influences a lot within our countries, we have that African heritage that wants to use other methods before others,&rdquo; Snow said. &ldquo;And then on top of that, we have the Spanish influence. Religion is big:<em>Dios</em>[God] will take care of everything. If I pray enough, it'll be taken care of, why go to a doctor?&rdquo;</p><p>These inward turns to the family, Snow said, point to another concept that prevents access to treatment: &ldquo;familismo.&rdquo; This can be defined as a strong loyalty or dedication to the family. This commitment can have adverse consequences, Snow added, as some may feel that it is impossible to seek help outside of the home.&nbsp;</p><p>&ldquo;Others are not supposed to know there's something wrong with you,&rdquo; Snow said. &ldquo;So a lot of times you'll hear that invalidation of &lsquo;There's nothing wrong with you. Suck it up. We had to deal with worse coming to this country. You have everything, look at everything we've given you.&rsquo;&rdquo;</p><p>Those with parents who weren&rsquo;t understanding of mental health challenges had no opportunities to discuss mental health within the family, Jordan said.</p><p>&ldquo;I have gone to therapy and my mother has known about it, but other than that it&rsquo;s something that we never really talked about,&rdquo; Jordan said. &ldquo;I think it did stem from fear of judgment. I don't even know if any of my other family members have ever gone to a therapist or anything like that.&rdquo;</p><p>The distance between one&rsquo;s home in the U.S. and one&rsquo;s home abroad is especially difficult for first-generation immigrants who have to leave everyone behind. But the problems continue for the second generation, Snow said, as the separation of families extends to a separation from culture.&nbsp;</p><p>&ldquo;It's the perception of loneliness because you could be surrounded by your whole entire family, you know, 50 of them, right?&rdquo; Snow said. &ldquo;And you guys are all super close, supposedly, but in your perspective, you cannot connect with anyone within that group.&rdquo;</p><p>For Daniela Rojas, a 19-year-old UF engineering sophomore of mixed Bolivian and Cuban descent, this idea especially resonated. Despite most of her Cuban family having moved to Miami with her parents, she still feels a disconnect between their experiences.</p><p>&ldquo;Sometimes the way they speak or the experiences they share with each other, like having struggled living in Cuba,&rdquo; Rojas said. &ldquo;It's just something I can never relate to because I wasn't there. So I feel excluded from that part of my heritage.&rdquo;</p><p>Another significant touchstone for most Hispanic and, more broadly, immigrant households is the idea of one&rsquo;s obligation to their parents for being given the opportunity to live in the U.S. instead of their home country.&nbsp;</p><p>&ldquo;I feel like they gave us so much, how they studied so much just to be able to do something with their lives,&rdquo; Rojas said. &ldquo;But I feel the pressure of, &lsquo;Oh, now that I'm here and I don't experience the same difficulties they did, I should be doing more because I can.&rsquo; It leads to a lot of pent-up stress inside.&rdquo;</p><p>While these cultural barriers continue to affect the mental health of all generations of the U.S. Hispanic community, they are not immutable. Through open dialogue across languages and a candid understanding of different generational experiences, these barriers can be overcome to promote mental health in a community that has remained silent for far too long.&nbsp;</p><p><em>Contact Eluney Gonzalez at egonzalez@alligator.org. Follow him on Twitter</em> <a href='https://twitter.com/Eluney_G'><em>@Eluney_G</em></a>.</p>"
        };

        history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");


        parent.querySelector('#articleTitle').innerText = myArticle.headline;
        parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
        parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
        parent.querySelector('#articleDate').innerText = 'Monday, Nov. 27, 2023';
        parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
        parent.querySelector('#articleBody').innerHTML = myArticle.body;
        parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href);


        if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

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
            parent.querySelector('#articleCardImage').classList.remove("rounded");
        } else {
            parent.querySelector('#articleCardCaption').style.display = "none";
            parent.querySelector('#articleCardImage').classList += " rounded";
        }


        

        myModal.show();
    }, false);

    // Article
    document.getElementById('c-hispanic-mh').addEventListener('click', function() {
        const myArticle = {
            slug: "c-hispanic-mh",
            headline: "Consejera de salud mental de UF discute desafíos de salud mental en la comunidad hispana",
            subtitle: "Dra. Massiel Snow explica las normas culturales, sociales de la comunidad Hispana que previenen el acceso al cuidado de salud mental ",
            card_path: "hispanicMH.JPG",
            author_one: "Eluney Gonzalez",
            author_two: "",
            contact_one: "Contacte a Eluney Gonzalez a través de egonzalez@alligator.org. Síguelo en Twitter @Eluney_G.",
            contact_two: "",
            about_one: "",
            about_two: "",
            date: "",
            body: "<p>En Octubre 2023, Dra. Massiel Snow, nueva consejera de ascendencia hispana del Programa Asistente de Empleo de UF [UF Employment Assistance Program] habl&oacute; en el podcast &ldquo;Well at UF&rdquo; sobre las barreras. No se trataba de l&iacute;neas en la arena ni de un muro en una frontera nacional, sino barreras invisibles, hilos culturales que imped&iacute;an que la comunidad hispana abordar&aacute; un tema silencioso: la salud mental.<br>En las comunidades hispanas, el idioma es una de las mayores barreras a cualquier servicio, y lo mismo ocurre con la salud mental.<br>S&oacute;lo alrededor del 5% de psic&oacute;logos son hispano, en comparaci&oacute;n con el 19% de la poblaci&oacute;n nacional, dijo Snow. La comunidad hispana en Gainesville solo compone el 12% de la poblaci&oacute;n local, unos 16.000 residentes, seg&uacute;n los datos del &uacute;ltimo censo.<br>Ivana Jordan, una estudiante puertorrique&ntilde;a de 19 a&ntilde;os de la carrera de ciencias de trastornos de la comunicaci&oacute;n de la Universidad de Florida (UF), ha experimentado terapia tanto en ingl&eacute;s como en espa&ntilde;ol. Ella sinti&oacute; que el idioma ten&iacute;a un impacto notable en la efectividad de la sesi&oacute;n.<br>&quot;Puedo expresarme lo suficientemente bien en espa&ntilde;ol, pero en ingl&eacute;s puedo usar palabras m&aacute;s espec&iacute;ficas para contrarrestar c&oacute;mo me siento&quot;, dijo Jordan.<br>Mientras que la terapia en espa&ntilde;ol puede volverse m&aacute;s com&uacute;n, la barrera de comunicaci&oacute;n entre el cliente y el terapeuta se expande m&aacute;s all&aacute; del idioma y se adentra en la cultura. &quot;Si no podemos establecer esa conexi&oacute;n con un terapeuta, no buscaremos servicios&quot;, dijo Snow. &quot;Ese terapeuta no es culturalmente sensible. Entraremos a la oficina y pensaremos: 'Esto no funcion&oacute;. No vali&oacute; la pena que viniera', y nunca volver&aacute;n&quot;.<br>La alienaci&oacute;n cultural es otro elemento importante para entender la salud mental hispana. Cuando las familias emigran a Estados Unidos, a veces solo traen a los miembros de la familia inmediata y, con el tiempo, traen a la familia extendida desde el extranjero. Para otros, su familia nunca puede venir. El resultado es un tipo &uacute;nico de alienaci&oacute;n, donde uno no se siente ni estadounidense ni de su cultura nativa.<br>&quot;Siento que he sido aislada&quot;, dijo Jordan. &quot;No veo a mi familia tan a menudo y me resulta dif&iacute;cil identificarme completamente con la cultura puertorrique&ntilde;a porque me siento como una impostora cuando regreso y como una gringa cuando vuelvo a casa&quot;.<br>La desconfianza de los hispanos hacia los profesionales m&eacute;dicos contribuye a la idea de que buscar ayuda significa &quot;ceder&quot; ante un otro maligno. Esta desconfianza se origina en esterilizaciones masivas coercitivas de mujeres puertorrique&ntilde;as en la d&eacute;cada de 1930-1940 y de mujeres mexicanas en la d&eacute;cada de 1970, recuerdos recientes que generan sospechas hacia cualquier profesional m&eacute;dico, incluidos los psic&oacute;logos.<br>&quot;Siempre pensamos que tenemos que exagerar los s&iacute;ntomas para poder recibir ayuda&quot;, dijo Jordan. &quot;Pero esta desconfianza de que van a pasar por alto cualquier otra cosa que necesite atenci&oacute;n&quot;.<br>Como resultado, las comunidades hispanas tienden a recurrir a remedios caseros transmitidos de generaci&oacute;n en generaci&oacute;n, provenientes de la mezcla &uacute;nica de herencias ind&iacute;genas, africanas y espa&ntilde;olas.<br>&quot;Tenemos una gran poblaci&oacute;n ind&iacute;gena que todav&iacute;a influye mucho en nuestros pa&iacute;ses, tenemos esa herencia africana que prefiere utilizar otros m&eacute;todos antes que otros&quot;, dijo Snow. &quot;Y luego, adem&aacute;s de eso, tenemos la influencia espa&ntilde;ola. La religi&oacute;n es importante: Dios se encargar&aacute; de todo. Si rezo lo suficiente, se encargar&aacute; de ello, &iquest;por qu&eacute; ir a un m&eacute;dico?&quot;.<br>Estos giros hacia la familia, seg&uacute;n Snow, apuntan a otro concepto que dificulta el acceso al tratamiento: el &quot;familismo&quot;. Esto se puede definir como una fuerte lealtad o dedicaci&oacute;n a la familia. Este compromiso puede tener consecuencias adversas, agreg&oacute; Snow, ya que algunos pueden sentir que es imposible buscar ayuda fuera del hogar.<br>&quot;Se supone que los dem&aacute;s no deben saber que hay algo mal contigo&quot;, dijo Snow. &quot;As&iacute; que muchas veces escuchar&aacute;s esa invalidaci&oacute;n de 'No hay nada mal contigo. Sup&eacute;ralo. Tuvimos que lidiar con cosas peores al venir a este pa&iacute;s. Tienes todo, mira todo lo que te hemos dado'&quot;. Aquellos con padres que no entend&iacute;an los desaf&iacute;os de la salud mental no tuvieron oportunidades para hablar de salud mental dentro de la familia, dijo Jordan.<br>&ldquo;He ido a terapia y mi madre lo ha sabido, pero aparte de eso, es algo de lo que nunca hablamos realmente&quot;, dijo Jordan. &quot;Creo que surgi&oacute; por miedo al juicio. Ni siquiera s&eacute; si alg&uacute;n otro miembro de mi familia ha ido alguna vez a un terapeuta o algo as&iacute;&quot;.<br>La distancia entre el hogar en EE. UU. y el hogar en el extranjero es especialmente dif&iacute;cil para los inmigrantes de primera generaci&oacute;n, que tienen que dejar a todos atr&aacute;s. Pero los problemas contin&uacute;an para la segunda generaci&oacute;n, dijo Snow, ya que la separaci&oacute;n de las familias se extiende a una separaci&oacute;n de la cultura.<br>&quot;Es la percepci&oacute;n de la soledad porque podr&iacute;as estar rodeado de toda tu familia, &iquest;sabes?, 50 de ellos, &iquest;verdad?&quot; dijo Snow. &quot;Y ustedes son todos muy cercanos, supuestamente, pero desde tu perspectiva, no puedes conectar con nadie dentro de ese grupo&quot;.<br>Para Daniela Rojas, una estudiante de ingenier&iacute;a de 19 a&ntilde;os de la UF de ascendencia boliviana y cubana, esta idea resuena especialmente. A pesar de que la mayor&iacute;a de su familia cubana se mud&oacute; a Miami con sus padres, ella a&uacute;n siente una desconexi&oacute;n entre sus experiencias.<br>&quot;A veces, la forma en que hablan o las experiencias que comparten entre ellos, como haber luchado viviendo en Cuba&quot;, dijo Rojas. &quot;Es algo con lo que nunca puedo relacionarme porque no estuve all&iacute;. As&iacute; que me siento excluida de esa parte de mi herencia&quot;.<br>Otro punto de referencia significativo para la mayor&iacute;a de los hogares hispanos y, m&aacute;s ampliamente, inmigrantes, es la idea de la obligaci&oacute;n hacia sus padres por tener la oportunidad de vivir en EE. UU. en lugar de su pa&iacute;s de origen.<br>&quot;Siento que nos dieron tanto, c&oacute;mo estudiaron tanto solo para poder hacer algo con sus vidas&quot;, dijo Rojas. &quot;Pero siento la presi&oacute;n de 'Oh, ahora que estoy aqu&iacute; y no experimento las mismas dificultades que ellos, deber&iacute;a estar haciendo m&aacute;s porque puedo'. Conduce a mucho estr&eacute;s acumulado&quot;.<br>Aunque estas barreras culturales contin&uacute;an afectando la salud mental de todas las generaciones de la comunidad hispana en EE. UU., no son inmutables. A trav&eacute;s del di&aacute;logo abierto en diferentes idiomas y una comprensi&oacute;n sincera de las experiencias generacionales, estas barreras pueden superarse para promover la salud mental en una comunidad que ha permanecido en silencio durante demasiado tiempo.</p>",
            desc: "En las comunidades hispanas, el idioma es una de las mayores barreras a cualquier servicio, y lo mismo ocurre con la salud mental. Sólo alrededor del 5% de psicólogos son hispano, en comparación con el 19% de la población nacional, dijo Snow. La comunidad hispana en Gainesville solo compone el 12% de la población local, unos 16.000 residentes, según los datos del último censo."
        };

        history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");


        parent.querySelector('#articleTitle').innerText = myArticle.headline;
        parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
        parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
        parent.querySelector('#articleDate').innerText = 'Lunes, Nov. 27, 2023';
        parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
        parent.querySelector('#articleBody').innerHTML = myArticle.body;
        parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href);

        if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

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
            parent.querySelector('#articleCardImage').classList.remove("rounded");
        } else {
            parent.querySelector('#articleCardCaption').style.display = "none";
            parent.querySelector('#articleCardImage').classList += " rounded";
        }


        

        myModal.show();
    }, false);

    // Article
    document.getElementById('c-uf-mh').addEventListener('click', function() {
        const myArticle = {
            slug: "c-uf-mh",
            headline: "La salud mental es un problema creciente entre los estudiantes de la UF, según muestra una encuesta",
            subtitle: "Los datos de la NCHA revelan que la fe en UF está disminuyendo y la tasa de enfermedades mentales está aumentando",
            card_path: "ufmentalhealth.jpg",
            card_caption: "Patricia Pascual // Alligator staff",
            author_one: "Jinelle Vazquez",
            author_two: "Kylie Williams",
            contact_one: "Póngase en contacto con Jinelle Vazquez y Kylie Williams a través de jvazquez@alligator.org y kyliewilliams@alligator.org. Síguelos en Twitter @vazquezjinelle y @KylieWilliams99.",
            contact_two: "",
            about_one: "Jinelle Vazquez is a senior at UF pursuing a major in Public Health with a minor in Indigenous Studies. They currently report for the enterprise desk covering health. In their free time, they enjoy hiking, photography and making art.",
            about_two: "Kylie Williams is a second-year journalism major and the Fall 2023 environmental enterprise reporter. Outside of the newsroom, she can be found baking or watching reality TV. ",
            date: "",
            body: "<p>Julianna Cicantelli se describe a s&iacute; misma como &ldquo;golpeada y magullada&rdquo; desde que se transfiri&oacute; de Valencia College a UF en el oto&ntilde;o de 2021.</p><p>A esta estudiante de &uacute;ltimo a&ntilde;o de administraci&oacute;n de empresas de UF, de 22 a&ntilde;os, le diagnosticaron trastorno bipolar 1 cuando ten&iacute;a 15 a&ntilde;os. El trastorno se define por episodios man&iacute;acos que duran al menos siete d&iacute;as y episodios depresivos que normalmente duran al menos dos semanas.</p><p>Durante su primer semestre en UF, Ciccantelli dijo que fue a la enfermer&iacute;a por s&iacute;ntomas similares a los del COVID-19. Inform&oacute; a los proveedores de su sensibilidad a los antihistam&iacute;nicos debido a su trastorno bipolar.</p><p>&quot;Lo descartaron como: 'Estar&aacute;s bien, simplemente contin&uacute;a monitoreando tu condici&oacute;n y los efectos de [los medicamentos recetados]'&quot;, dijo Ciccantelli.</p><p>Ciccantelli no sab&iacute;a en ese momento que le hab&iacute;an recetado antihistam&iacute;nicos. No fue hasta dos semanas despu&eacute;s, cuando regres&oacute; a casa, que sus padres reconocieron su episodio man&iacute;aco en curso, dijo.</p><p>&ldquo;Toda mi vida me dijeron que confiara en los m&eacute;dicos a cargo porque sab&iacute;an m&aacute;s&rdquo;, dijo Ciccantelli. &quot;Todo lo que habr&iacute;an necesitado fue una simple b&uacute;squeda en Google para conocer los efectos desastrosos de los medicamentos que le recetaron a un joven Gator transferido&quot;.</p><p>Entre 2020 y 2022, el porcentaje de estudiantes encuestados en UF que informaron haber sido diagnosticados previamente con ansiedad aument&oacute; un 40%. De manera similar, la tasa de TDAH aument&oacute; un 81% y la tasa de depresi&oacute;n aument&oacute; un 43%. Estos aumentos en los diagn&oacute;sticos de salud mental de los estudiantes de la UF se alinean con las tendencias nacionales y estatales.</p><p>D&oacute;nde la UF se desv&iacute;a de tendencias nacionales y estatales es en la creencia de los estudiantes de que la universidad prioriza su salud y bienestar. Solo alrededor del 36% de los estudiantes de UF encuestados en 2022 cre&iacute;an que su salud y bienestar eran una prioridad para su universidad, casi una disminuci&oacute;n de 15 puntos porcentuales con respecto a 2020, seg&uacute;n datos de la NCHA. En general, los estudiantes de UF experimentaron un aumento posterior al COVID-19 en enfermedades mentales como ansiedad y depresi&oacute;n.</p><p>Los expertos atribuyen el aumento a m&uacute;ltiples causas, como la pandemia, las redes sociales y las normas sociales cambiantes. Alternativamente, los estudiantes parecen tener menos fe en la universidad y su capacidad para ayudarlos en sus luchas de salud mental, especialmente dada la cultura de UF en torno al alto rendimiento acad&eacute;mico.</p><p>Desde el oto&ntilde;o de 2021, Ciccantelli ha sido hospitalizada tres veces por s&iacute;ntomas graves de su trastorno bipolar. Sin embargo, opt&oacute; por buscar atenci&oacute;n de profesionales de la salud en su ciudad natal de Orlando en lugar de los servicios de salud mental de UF.</p><p>&ldquo;Me alegro de tener adaptaciones [en UF] para tener tiempo adicional para las tareas y ex&aacute;menes, pero eso es todo&rdquo;, dijo. &quot;Me [siento] m&aacute;s seguro confiando en mi gente en casa&quot;.</p><p>Consecuencias del COVID-19</p><p>La portavoz de UF, Cynthia Rold&aacute;n, dijo que aunque se seguir&aacute;n estudiando las consecuencias a largo plazo de la pandemia mundial en la salud mental, UF est&aacute; comprometida a construir una comunidad donde cada Gator sepa que es valorado y respetado.</p><p>Rold&aacute;n enumer&oacute; los recursos de UF, como 11 miembros adicionales del equipo en el Centro de Consejer&iacute;a y Bienestar [ Counseling and Wellness Center] ; mayor proporci&oacute;n de estudiantes por personal; aumento de fondos para el Equipo de Consulta y Referencia de la CWC y el lanzamiento de Whole Gator, una aplicaci&oacute;n que conecta a la comunidad de UF con recursos.<br>&ldquo;Incluso cuando no estamos en medio de una pandemia, la universidad es un momento de crecimiento y cambio&rdquo;, dijo. &quot;Queremos que cada Gator tenga las herramientas que necesita para tener &eacute;xito&quot;.</p><p>Lisa Wolcott, terapeuta cl&iacute;nica de Gainesville, dijo que el aumento de enfermedades mentales reportadas podr&iacute;a deberse al COVID-19. Como fundadora de Wolcott Counseling and Wellness, ha trabajado en la atenci&oacute;n de salud mental durante m&aacute;s de dos d&eacute;cadas.</p><p>Desde 2020, Wolcott y otros terapeutas de su pr&aacute;ctica han notado una afluencia de pacientes que experimentan s&iacute;ntomas de depresi&oacute;n, ansiedad y TOC. Los estudiantes que informaron s&iacute;ntomas describieron sentirse aislados debido a la pandemia durante la escuela secundaria o la universidad, dijo Wolcott.</p><p>&quot;Est&aacute;s aislado en un momento en el que se supone que debes aprender a ser sociable&quot;, agreg&oacute;.</p><p>Disminuci&oacute;n del estigma y la transici&oacute;n universitaria</p><p>La mayor normalizaci&oacute;n de la salud mental tambi&eacute;n podr&iacute;a ser una raz&oacute;n detr&aacute;s de las tendencias actuales, dijo Jenny Banks, otra terapeuta de Wolcott Counseling and Wellness.<br>&quot;Muchos pacientes llegan con curiosidad ahora que definitivamente hay una conversaci&oacute;n m&aacute;s abierta al respecto&quot;, dijo Banks.</p><p>Banks tambi&eacute;n ha visto lo que ella llama &ldquo;autodiagn&oacute;stico de TikTok&rdquo;. A medida que el contenido relacionado con la salud mental se vuelve m&aacute;s frecuente en l&iacute;nea, dijo, los pacientes lo relacionan con sus propias experiencias personales. Esto les lleva muchas veces a buscar ayuda profesional, creyendo que padecen una enfermedad mental concreta.</p><p>Esa curiosidad ha llevado a un aumento en los diagn&oacute;sticos, dijo la consejera de salud mental Donielle Englert. Englert, consejero de Lucent Collaborative Services en Gainesville, atiende a muchos pacientes en edad universitaria, en particular aquellos con TDAH.</p><p>Para muchas personas, dijo Englert, el catalizador de los s&iacute;ntomas de la enfermedad mental es comenzar la universidad. Asistir a la universidad es un momento de transici&oacute;n, agreg&oacute;, y puede introducir muchos factores estresantes que antes no exist&iacute;an en la vida de un estudiante.</p><p>Englert no revel&oacute; si esto tambi&eacute;n ha llevado a un aumento en los medicamentos recetados. En sus sesiones de asesoramiento, Englert dijo que ayuda a los pacientes a encontrar tratamientos para enfermedades mentales seg&uacute;n sus necesidades individuales. Esto puede incluir medicamentos, pero las alternativas son la terapia, las intervenciones conductuales o otros m&eacute;todos.</p><p>&quot;Simplemente es importante que si [los pacientes] tienen preguntas, quieren explorar la salud mental y se sienten c&oacute;modos haci&eacute;ndolo&quot;, agreg&oacute; Englert.</p><p>Experiencias estudiantiles</p><p>Lola Bautista-Bernard, estudiante de &uacute;ltimo a&ntilde;o de biolog&iacute;a de UF de 20 a&ntilde;os, atribuye la menor tasa de bienestar percibida por los estudiantes en la universidad a dos cosas: el ambiente acad&eacute;mico riguroso y la cultura entre los profesores.</p><p>Bautista-Bernard fue diagnosticada en UF el a&ntilde;o pasado con un trastorno depresivo mayor, un trastorno del estado de &aacute;nimo que causa un sentimiento persistente de tristeza y p&eacute;rdida de inter&eacute;s durante al menos dos semanas. Tambi&eacute;n le diagnosticaron TDAH y ansiedad en 2021.<br>&ldquo;Siento que [en UF] ignoran por completo los [problemas] m&aacute;s profundos&rdquo;, dijo. &ldquo;No quieren hablar de eso porque no es un entorno destinado a eso y eso simplemente se refleja en nuestro gobierno estudiantil&rdquo;, dijo Bautista-Bernard.</p><p>Bautista-Bernard dijo que el Gobierno Estudiantil de UF centra sus eventos de salud mental en el manejo del tiempo y el estr&eacute;s, ignorando a menudo los problemas m&aacute;s profundos que enfrentan los estudiantes con trastornos de salud mental como el TDAH.</p><p>Bautista-Bernard tambi&eacute;n dijo que los profesores que imparten cursos STEM a menudo hacen que sus clases sean m&aacute;s desafiantes intencionalmente para eliminar a los estudiantes. En las clases numerosas, a los profesores no les preocupa si la mitad de sus alumnos suspenden un examen, agreg&oacute;.</p><p>&quot;Si fuera a ver a un profesor y le dijera algo sobre mi salud mental, lo m&aacute;s probable es que la respuesta fuera 'Est&aacute; bien, pero todo el mundo tiene estos problemas'&quot;, dijo. &quot;'Todo el mundo tiene este estr&eacute;s y todos los dem&aacute;s est&aacute;n bien'&quot;.</p><p>Hanna Barbaree, estudiante de segundo a&ntilde;o de ciencias vegetales de la UF, de 20 a&ntilde;os, recibi&oacute; Zoloft y Ativan en agosto por trastorno depresivo mayor, ansiedad y TOC.</p><p>&ldquo;Era casi incapaz de funcionar como ser humano... No pod&iacute;a sentarme y comenzar a procesar las tareas estresantes que necesitaba hacer&rdquo;, dijo.</p><p>Barbaree dijo que ha luchado con lo que en ese momento no sab&iacute;a que eran brotes de TOC desde que llego a Gainesville como estudiantes de PaCE en el oto&ntilde;o de 2021.</p><p>Algunos de los s&iacute;ntomas que Barbaree encontr&oacute; en ese momento fueron pensamientos intrusivos, ciclos de ansiedad y perfeccionismo que interfirieron con su capacidad para completar tareas. Esto llev&oacute; a su colocaci&oacute;n en per&iacute;odo de prueba acad&eacute;mica en el oto&ntilde;o de 2022 y a su retiro m&eacute;dico del semestre de primavera de 2023, agreg&oacute;.</p><p>Durante el proceso de retiro m&eacute;dico, Barbaree dijo que tuvieron que abrirse y sollozar en las llamadas de Zoom con los administradores. Sintieron que ten&iacute;an que explotar sus emociones para mostrar la profundidad de los problemas que enfrentaban.</p><p>&ldquo;Ojal&aacute; no tuviera que llegar a ese punto para recibir la ayuda que necesitaba&rdquo;, dijo.</p><p>Barbaree tambi&eacute;n ha comenzado a considerar un diagn&oacute;stico de TDAH por su dificultad para concentrarse y pensar demasiado. Aunque Barbaree fue recomendado al CWC para una evaluaci&oacute;n de diagn&oacute;stico de TDAH, compartieron que dudan en programar una cita debido a la proporci&oacute;n de estudiantes por personal.</p><p>&quot;Realmente no quiero tirar mi nombre en el sombrero&quot;, dijo. &quot;Realmente no quiero perderme all&iacute; y prefiero ir a alg&uacute;n lugar m&aacute;s peque&ntilde;o [donde] puedan tener m&aacute;s atenci&oacute;n para temas m&aacute;s espec&iacute;ficos&quot;.<br></p>"
        };

        history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");


        parent.querySelector('#articleTitle').innerText = myArticle.headline;
        parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
        parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
        parent.querySelector('#articleDate').innerText = 'Lunes, Nov. 27, 2023';
        parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
        parent.querySelector('#articleBody').innerHTML = myArticle.body;
        parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href);

        if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

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
            parent.querySelector('#articleCardImage').classList.remove("rounded");
        } else {
            parent.querySelector('#articleCardCaption').style.display = "none";
            parent.querySelector('#articleCardImage').classList += " rounded";
        }

        

        myModal.show();
    }, false);

    // Article
    document.getElementById('c-k-12').addEventListener('click', function() {
        const myArticle = {
            slug: "c-k-12",
            headline: "'Probablemente esté ayudando a algunas personas': Estudiantes de secundaria reaccionan al plan de estudios de salud mental en las escuelas del condado de Alachua",
            subtitle: "Algunos dicen que los recursos son suficientes, mientras que otros dicen que no son suficientes.",
            card_path: "acps.JPG",
            author_one: "Alissa Gary",
            author_two: "",
            contact_one: "Póngase en contacto con Alissa Gary a través de agary@alligator.org. Síguela en Twitter @AlissaGary1.",
            contact_two: "",
            about_one: "Alissa Gary is a second-year journalism major who's covering K-12 education for The Alligator. She has previously reported on student government and university administration.  Aside from writing, she likes to take care of her plants and play (and usually win) the New York Times sudoku puzzle.",
            about_two: "",
            date: "",
            body: "<p>&quot;Una tarea &quot;, &quot;incre&iacute;ble &quot; y &quot;extra&ntilde;o&quot; - todas palabras que los estudiantes del Condado de Alachua utilizaron para describir las presentaciones sobre salud mental que se les exige ver en la escuela.</p><p>El Departamento de Educaci&oacute;n de Florida requiere que los estudiantes de secundaria y preparatoria asistan al menos cinco horas de educaci&oacute;n sobre salud mental al a&ntilde;o desde 2019. Los temas de las presentaciones var&iacute;an desde ansiedad y depresi&oacute;n hasta violencia en el noviazgo y abuso de sustancias, y se presentan en forma de presentaciones de diapositivas, llamadas de Zoom y videos.</p><p>Las Escuelas P&uacute;blicas del Condado de Alachua [Alachua County Public Schools] planeaba gastar poco menos de $2 millones en salud mental en el a&ntilde;o escolar 2021-2022. Alrededor de $1,3 millones de ese presupuesto se asignaron a empleados del distrito escolar, y $218.000 fueron para contratistas y otros colaboradores externos.</p><p>Si bien los estudiantes entrevistados coincidieron en que las presentaciones eran valiosas para algunos, ninguno dijo que la capacitaci&oacute;n les proporcionaba un valor personal sustancial.</p><p>Las lecciones var&iacute;an seg&uacute;n la escuela</p><p>Es responsabilidad de cada escuela decidir c&oacute;mo se ense&ntilde;an las horas de salud mental, seg&uacute;n Kimberly Joy, coordinadora de salud mental del distrito.</p><p>&ldquo;No importa a qu&eacute; escuela vayas, aprender&aacute;s sobre esto de la misma manera que lo har&iacute;as en tu escuela anterior&rdquo;, dijo.</p><p>Los datos sugieren que la salud mental de los adolescentes est&aacute; disminuyendo a&ntilde;o tras a&ntilde;o. Aproximadamente el 29% de los estudiantes de secundaria en todo el pa&iacute;s dijeron que experimentaron mala salud mental en los &uacute;ltimos 30 d&iacute;as. De manera similar, el 42% dijo que sintieron tristeza o desesperanza constante en un a&ntilde;o, frente al 28% en 2011, seg&uacute;n una encuesta de 2021 del Centro para el Control y la Prevenci&oacute;n de Enfermedades.</p><p>Sin embargo, en general, los estudiantes dijeron que la asistencia y la participaci&oacute;n disminuyen en los d&iacute;as de salud mental.</p><p>Guilherme Salmeron Binelli, un estudiante senior de la escuela secundaria Eastside de 18 a&ntilde;os, dijo que su escuela dedica un per&iacute;odo al d&iacute;a durante una semana a la educaci&oacute;n sobre salud mental. Durante el &uacute;ltimo per&iacute;odo del d&iacute;a, los maestros muestran presentaciones sobre salud mental en lugar de sus clases regulares.</p><p>&quot;Es m&aacute;s como una tarea o como un d&iacute;a libre que algo en lo que prestar atenci&oacute;n&quot;, dijo.<br>La mayor&iacute;a de los estudiantes van a la escuela en la semana de salud mental para poder asistir a las primeras cinco clases del d&iacute;a, dijo Binelli. Sin embargo, la mayor&iacute;a trata su &uacute;ltima clase como un per&iacute;odo libre y tiende a no prestar atenci&oacute;n, dijo.</p><p>&quot;No tener contenido es pr&aacute;cticamente lo mismo que no tener clase en absoluto&quot;, dijo.<br>Joy dijo que el distrito es consciente del problema de la asistencia. Para mitigarlo, el distrito anima a las escuelas a ense&ntilde;ar estrategias de salud mental y participar en campa&ntilde;as de concientizaci&oacute;n durante todo el a&ntilde;o.</p><p>M&aacute;s que salud mental</p><p>La educaci&oacute;n b&aacute;sica sobre salud mental se actualiz&oacute; en 2021 y 2022 para prevenir el abuso de drogas y ense&ntilde;ar habilidades para la vida, en gran medida por el impulso de la esposa del gobernador Ron DeSantis, Casey DeSantis.</p><p>Las cinco horas de educaci&oacute;n sobre salud mental se reformularon y cambiaron de nombre a educaci&oacute;n de resiliencia, un t&eacute;rmino que abarca todas las habilidades como empat&iacute;a, responsabilidad y gratitud, en la actualizaci&oacute;n de la pol&iacute;tica de 2022.</p><p>En respuesta a una solicitud de comentarios, un portavoz de la administraci&oacute;n DeSantis envi&oacute; un comunicado de prensa de marzo.</p><p>&quot;Como madre de tres peque&ntilde;os, estoy orgullosa de que Florida lidere la naci&oacute;n en educaci&oacute;n, y estoy emocionada de ver c&oacute;mo nuestros esfuerzos para replantear y repensar la salud mental equipar&aacute;n a nuestros estudiantes y futuros floridanos para ser m&aacute;s resistentes&quot;, dijo Casey DeSantis en el comunicado de prensa.</p><p>Anna Adams, una estudiante senior de 17 a&ntilde;os de la Academia Profesional Magnet en la escuela secundaria Loften, dijo que la mayor parte de la informaci&oacute;n mostrada en los d&iacute;as anuales de salud mental en Loften no es interesante. El d&iacute;a cumple con las cinco horas de capacitaci&oacute;n requeridas por la escuela.</p><p>&quot;Es un conocimiento muy b&aacute;sico&quot;, dijo, agregando que ha escuchado parte de la informaci&oacute;n en el pasado de terapeutas externos.</p><p>Loften separa a los estudiantes en grupos seg&uacute;n sus apellidos durante los d&iacute;as de salud mental, independientemente de su nivel de grado, dijo Adams. Como resultado, los estudiantes no est&aacute;n emparejados con sus amigos, lo que, seg&uacute;n ella, hace que el proceso sea a&uacute;n menos atractivo.</p><p>Las presentaciones cubrieron diversos temas, como abuso de drogas y una madre que hablaba sobre las luchas de salud mental de sus hijos. Sin embargo, algunas presentaciones no ten&iacute;an ninguna relaci&oacute;n con la salud mental.</p><p>De las lecciones que recordaba, Adams dijo que las m&aacute;s &uacute;tiles eran aquellas sobre la identificaci&oacute;n de relaciones t&oacute;xicas.</p><p>&quot;Creo que esas realmente han hecho que algunos estudiantes se den cuenta de que no est&aacute;n en una relaci&oacute;n saludable&quot;, dijo. &quot;As&iacute; que creo que esa es bastante buena&quot;.</p><p>M&aacute;s all&aacute; de las presentaciones</p><p>Mazen Shehab, un estudiante senior de 17 a&ntilde;os de la escuela secundaria Buchholz, hizo eco del sentimiento de que los estudiantes no prestan atenci&oacute;n en los d&iacute;as de salud mental.</p><p>&quot;No creo que haya un gran enfoque en la salud mental con muchos estudiantes que conozco&quot;, dijo. &quot;Simplemente disfrutan de tener menos tiempo en la escuela&quot;.</p><p>Shehab se mud&oacute; a Florida desde L&iacute;bano en 2022 antes de su tercer a&ntilde;o de preparatoria. Aunque no ha lidiado con problemas de salud mental graves desde que lleg&oacute; a Buchholz, dijo que un enfoque m&aacute;s interactivo, en el que los administradores se acercaran a los estudiantes, en lugar de al rev&eacute;s, podr&iacute;a alentar a los estudiantes a ser m&aacute;s abiertos acerca de sus luchas de salud mental.</p><p>Tambi&eacute;n dijo que algunos estudiantes, incluido &eacute;l mismo, recurren a amigos y familiares antes que a maestros y consejeros si tuvieran problemas de salud mental.</p><p>&quot;Mucha gente en la preparatoria necesita mucha ayuda mental&quot;, dijo. &quot;Y no creo que los amigos sean la &uacute;nica forma de hacerlo&quot;.</p><p>La salud mental es un tema cercano al coraz&oacute;n para Ava Avera, una joven de 18 a&ntilde;os y tambi&eacute;n estudiante de &uacute;ltimo a&ntilde;o en BHS, quien organiza una carrera anual de 5 km dedicada a la prevenci&oacute;n del suicidio. La salud mental se discute abiertamente en Buchholz, dijo ella, y los maestros est&aacute;n dispuestos a ayudar a los estudiantes.</p><p>&quot;Incluso si no es algo oficial por escrito, adem&aacute;s de nuestros d&iacute;as de salud mental, creo que nuestro cuerpo docente hace un trabajo realmente excelente asegurando la seguridad y simplemente ayudando a los estudiantes a sentirse escuchados&quot;, dijo.</p><p>Al menos el 80% de los empleados del distrito deben asistir a un curso de Primeros Auxilios en Salud Mental Juvenil de 12 horas, seg&uacute;n lo requiere el Departamento de Educaci&oacute;n de Florida. Implementado por primera vez en el a&ntilde;o escolar 2022-2023, la certificaci&oacute;n ense&ntilde;a a los empleados a lidiar con crisis de salud mental y a ser comprensivos con las preocupaciones de los estudiantes.</p><p>Avera valora que los d&iacute;as de salud mental en Buchholz abordan una variedad de temas, dijo. Aunque no todas las presentaciones resuenan perfectamente con todos los estudiantes, ella dice que sigue siendo importante tenerlas.</p><p>&quot;Definitivamente creo que ayuda a algunas personas en la escuela, aunque quiz&aacute;s no a todos&quot;, dijo.</p>"
        };

        history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");


        parent.querySelector('#articleTitle').innerText = myArticle.headline;
        parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
        parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
        parent.querySelector('#articleDate').innerText = 'Lunes, Nov. 27, 2023';
        parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
        parent.querySelector('#articleBody').innerHTML = myArticle.body;
        parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href);

        if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

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
            parent.querySelector('#articleCardImage').classList.remove("rounded");
        } else {
            parent.querySelector('#articleCardCaption').style.display = "none";
            parent.querySelector('#articleCardImage').classList += " rounded";
        }

        

        myModal.show();
    }, false);

    // Article
    document.getElementById('c-mh').addEventListener('click', function() {
        const myArticle = {
            slug: "c-mh",
            headline: "Observando como el Condado de Alachua combate desiertos de salud mental en las comunidades rurales",
            subtitle: "Comunidades rurales son afectadas desproporcionadamente por los desiertos de salud mental",
            card_path: "Desert.jpg",
            author_one: "Ella Thompson",
            author_two: "",
            contact_one: "Contacte a Ella a través de ethompson@alligator.org. Siguela en Twitter a través de @elladeethompson.",
            contact_two: "",
            about_one: "Ella Thompson is a third-year journalism major who's on general assignment for The Alligator's metro desk. In her free time, she likes to read, cook and think of feature stories for The Alligator.",
            about_two: "",
            date: "",
            body: "<p>En el centro del Condado de Alachua queda la ciudad de Gainesville, una mezcla urbana y suburbana con un sistema de centros m&eacute;dicos nombrados como uno de los mejores en el estado. Pero para muchos residentes fuera de Gainesville, acceder a servicios de salud mental es m&aacute;s f&aacute;cil decirlo qu&eacute; hacerlo.</p><p>La incapacidad de acceder a servicios de salud mental debido a la ubicaci&oacute;n o los ingresos crea un &aacute;rea conocida como desierto de salud mental. Afecta desproporcionadamente a las zonas rurales del Condado. En todo Estados Unidos, casi una quinta parte de los Condados no tienen psic&oacute;logos, psiquiatras o consejeros, seg&uacute;n ABC News.</p><p>El administrador de la ciudad de Waldo, Kim Worley, considera que la accesibilidad a la salud mental es dif&iacute;cil y costosa. No es una opci&oacute;n para muchos residentes de Waldo, dijo. Waldo no tiene centros de salud mental en la ciudad, siendo las opciones m&aacute;s cercanas Starke o Gainesville.</p><p>&quot;Los pueblos rurales sufren porque estamos m&aacute;s alejados&quot;, dijo.</p><p>El ingreso promedio de un residente de Waldo es de poco m&aacute;s de $36,000 y el costo de los servicios de salud mental impide que los residentes busquen ayuda, dijo. El costo promedio de las sesiones de terapia en Florida cae entre $100 y $300, dependiendo del proveedor, la cl&iacute;nica y si les brinda un psiquiatra, seg&uacute;n el Centro de Salud Mental Sylvia Brafman. La atenci&oacute;n hospitalaria, un tipo de atenci&oacute;n en la que el paciente ingresa en un hospital, puede costar miles de d&oacute;lares.</p><p>Los residentes de Waldo tambi&eacute;n tienen que asumir el precio que se necesita para llegar a un centro de salud mental, dijo. Debido a los horarios de trabajo y otros factores, muchos residentes no pueden priorizar su salud mental.</p><p>&quot;No tienen dinero para gasolina ni un veh&iacute;culo que funcione&quot;, dijo Worley. &ldquo;El problema tiene muchas capas. No s&eacute;. No s&eacute; c&oacute;mo solucionarlo&quot;.</p><p>El Dr. Adil Mohammed, un psiquiatra certificado que es el director ejecutivo y director m&eacute;dico de Harmony United Psychiatric Care, tiene experiencia trabajando en la ubicaci&oacute;n de Harmony United en Gainesville, pero la compa&ntilde;&iacute;a tiene oficinas en todo el estado de Florida. Despu&eacute;s de nueve a&ntilde;os en la empresa, atribuye los desiertos de salud mental en comunidades rurales como el Condado de Alachua a la falta de conexi&oacute;n a internet de calidad, los costos de seguro y los estigmas, dijo.</p><p>Casi dos tercios de los condados rurales carecen de psiquiatra, mientras que a la mayor&iacute;a le faltan enfermeras especializadas psiquiatras y aproximadamente la mitad no tiene un psic&oacute;logo, seg&uacute;n la Alianza Nacional de Enfermedades Mentales. Esta escasez es significativa si se considera que alrededor del 60% de los estadounidenses rurales viven en desiertos de salud mental, y alrededor de 6,5 millones de personas que viven en las zonas rurales de Estados Unidos tienen una enfermedad mental, seg&uacute;n la Biblioteca Nacional de Medicina. La Biblioteca Nacional de Medicina tambi&eacute;n inform&oacute; que la banda ancha de alta calidad o el acceso a internet de alta velocidad se ha convertido en un determinante social de la salud.</p><p>&quot;Se necesita Internet de alta velocidad para poder realizar telesalud; de lo contrario, no se pueden obtener servicios de telesalud porque utilizan un ancho de banda mayor&quot;, dijo.</p><p>Seg&uacute;n NAMI, casi el 30% de los estadounidenses de zonas rurales viven sin acceso a Internet. Pero los estigmas en torno a la salud mental son otro factor que impide que los residentes rurales busquen ayuda. Los problemas de salud mental son invisibles a la vista: no duelen f&iacute;sicamente, dijo Mohammed, lo que a veces puede determinar si los residentes buscan tratamiento o atenci&oacute;n.</p><p>&ldquo;Se percibe como si tuvieras alg&uacute;n tipo de debilidad o alg&uacute;n tipo de defecto de car&aacute;cter, y eso les impide recibir atenci&oacute;n&rdquo;, dijo.</p><p>Hay ciertas medidas que los l&iacute;deres de ciudades y condados pueden tomar para aliviar los desiertos de salud mental y fomentar el acceso a los servicios. Aumentar el acceso a la atenci&oacute;n sanitaria a trav&eacute;s de una conexi&oacute;n a Internet podr&iacute;a ser una forma de promover r&aacute;pidamente la accesibilidad, afirm&oacute; Mohammed.</p><p>Un curso de acci&oacute;n m&aacute;s largo podr&iacute;a ser incentivar a los profesionales de la salud mental para que se trasladen a &aacute;reas con falta de servicios profesionales, dijo.</p><p>Newberry, con una poblaci&oacute;n de entre 7.000 y 8.000 personas, no tiene instalaciones de salud mental, seg&uacute;n el alcalde de Newberry, Jordan Marlowe. Incluso en las escuelas de Newberry, los consejeros vocacionales se han centrado en monitorear los promedios de calificaciones, organizar pruebas y garantizar que los estudiantes se grad&uacute;en, dijo, en lugar de brindar servicios de salud mental.</p><p>Marlowe cree que los residentes est&aacute;n empezando a ver la salud mental como una inversi&oacute;n personal, otro aspecto del autocuidado que contribuye a la salud general, pero el r&aacute;pido crecimiento en Florida ha aumentado el costo de vida en el Condado de Alachua, dijo. El ingreso familiar promedio de Newberry es de $69,000.</p><p>&quot;Si es entre el alquiler y la terapia, creo que la gente elige el alquiler&quot;, dijo Marlowe.</p><p>Newberry es una ciudad rural en el Condado de Alachua: el 80% de la tierra de Newberry es tierra agr&iacute;cola, mientras que la agricultura sigue siendo la segunda industria m&aacute;s grande de la ciudad, justo detr&aacute;s de la construcci&oacute;n, dijo Marlowe.</p><p>La salud mental es siempre una prioridad, dijo, pero el gobierno de un municipio peque&ntilde;o no siempre tiene una v&iacute;a para intervenir en los problemas de salud mental.</p><p>&ldquo;Nuestro objetivo aqu&iacute; es tratar de asegurarnos de que todas las cosas que est&aacute;n bajo nuestro alcance se mantengan asequibles para que usted pueda gastar ese dinero en sus necesidades de salud mental&rdquo;, dijo.<br></p>"
        };

        history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");


        parent.querySelector('#articleTitle').innerText = myArticle.headline;
        parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
        parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
        parent.querySelector('#articleDate').innerText = 'Lunes, Nov. 27, 2023';
        parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
        parent.querySelector('#articleBody').innerHTML = myArticle.body;
        parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href);

        if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

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
            parent.querySelector('#articleCardImage').classList.remove("rounded");
        } else {
            parent.querySelector('#articleCardCaption').style.display = "none";
            parent.querySelector('#articleCardImage').classList += " rounded";
        }

        

        myModal.show();
    }, false);


    // Article
    document.getElementById('c-transgender').addEventListener('click', function() {
        const myArticle = {
            slug: "c-transgender",
            headline: "La salud mental empeora entre los estudiantes universitarios transgénero y no binarios",
            subtitle: "Los estudiantes discuten sobre recursos limitados y creciente discriminación",
            card_path: "transgenderexperience.JPG",
            author_one: "Sophia Bailly",
            author_two: "",
            contact_one: "Póngase en contacto con Sophia Bailly en sbailly@alligator.org. Síguela en Twitter @sophia_bailly.",
            contact_two: "",
            about_one: "Sophia Bailly is a second-year journalism major and covers politics for the enterprise desk. Some of her favorite things include The Beatles, croissants and Agatha Christie books. When she's not writing stories she's either reading or going for a run.",
            about_two: "",
            date: "",
            body: "<p>Kerry Fitzgerald aprendi&oacute; sobre los t&eacute;rminos transg&eacute;nero y no binario de un amigo en la escuela secundaria, y todo empez&oacute; a encajar.</p><p>&ldquo;Estaba en un ambiente escolar cat&oacute;lico estricto y las cosas que me dec&iacute;an no se alineaban con c&oacute;mo me sent&iacute;a&rdquo;, dijo Fitzgerald.</p><p>Fitzgerald, estudiante de &uacute;ltimo a&ntilde;o de antropolog&iacute;a y psicolog&iacute;a de la UF, de 21 a&ntilde;os, usa pronombres ellos y se identifica como transg&eacute;nero y no binario. La comprensi&oacute;n de su identidad de g&eacute;nero apareci&oacute; en la escuela secundaria.</p><p>Para Fitzgerald, quien comenz&oacute; a tomar medicamentos para la ansiedad y la depresi&oacute;n a los 18 a&ntilde;os, el debate pol&iacute;tico sobre cuestiones transg&eacute;nero en Florida y Estados Unidos impacta su vida cotidiana. Se inscribieron en UF Online para su primer a&ntilde;o de universidad debido a su ansiedad social.</p><p>&quot;Hay momentos en los que tengo que sentarme y calmarme porque ni siquiera sabes si estas personas simplemente est&aacute;n memorizando tus pronombres&quot;, dijo Fitzgerald. &quot;Es el miedo a ser estereotipado&quot;.</p><p>Aproximadamente la mitad de los estudiantes transg&eacute;nero y no conformes con el g&eacute;nero de UF participantes en una encuesta dijeron que la depresi&oacute;n afect&oacute; su rendimiento acad&eacute;mico, seg&uacute;n la Evaluaci&oacute;n Nacional de Salud Universitaria de 2022 de UF. Alrededor del 59% cit&oacute; la ansiedad como un impacto en su rendimiento acad&eacute;mico.</p><p>El mismo estudio revel&oacute; que alrededor del 6% de los estudiantes transg&eacute;nero y de g&eacute;nero no conforme han intentado suicidarse durante ese a&ntilde;o, lo que es el doble de la media promedio de hombres y mujeres cisg&eacute;nero. Alrededor del 43% del mismo grupo indic&oacute; haber experimentado altos niveles de estr&eacute;s.</p><p>La ret&oacute;rica discriminatoria y la falta de apoyo universitario han dejado a los estudiantes transg&eacute;nero y no binarios sinti&eacute;ndose excluidos en el campus, lo que ha empeorado su salud mental. Los expertos legales y de salud mental han sido testigos de la disminuci&oacute;n de la salud mental de los estudiantes con diversidad de g&eacute;nero a medida que aumenta la controversia en torno a los derechos de las personas transg&eacute;nero y no binarias en Florida.</p><p>Despu&eacute;s de hablar con su familia en 2021, Fitzgerald fue acusado de estar drogado y necesitar un hospital psiqui&aacute;trico. Una ret&oacute;rica similar se extiende al campus universitario.</p><p>&quot;He tenido amigos que me han dicho: 'Oh, no puedes venir porque mis compa&ntilde;eros de cuarto no te apoyan'&quot;, dijo Fitzgerald.</p><p>Fitzgerald sali&oacute; del armario p&uacute;blicamente en 2022 y comenz&oacute; a tomar testosterona casi al mismo tiempo. Recibieron una cirug&iacute;a superior en agosto.</p><p>Fitzgerald tiene un m&eacute;dico que receta testosterona a trav&eacute;s del Centro de Atenci&oacute;n M&eacute;dica para Estudiantes de la UF. Sin embargo, conocen a otros estudiantes que luchan por obtener el mismo acceso a la terapia hormonal debido a las calificaciones del seguro o la disponibilidad limitada de citas.</p><p>El Centro de Consejer&iacute;a y Bienestar de UF y SHCC no proporcionaron comentarios a tiempo para su publicaci&oacute;n.</p><p>UF ofrece espacios para organizaciones queer, pero eso es hasta los escalones de la universidad, dijo Fitzgerald. Como miembro del Programa de Cultivo Queer, el programa de tutor&iacute;a UF Alumni for LGBTQ+ y coordinador de eventos de empoderamiento trans de Pride Student Union, Fitzgerald dijo que estos grupos no existir&iacute;an si no fuera por el esfuerzo de los estudiantes. UF tampoco ha ayudado a guiar a los estudiantes sobre la implementaci&oacute;n de la HB1521 por parte de la universidad, dijo Fitzgerald. La ley proh&iacute;be a las personas utilizar ba&ntilde;os que no correspondan al g&eacute;nero asignado al nacer. Hoy en d&iacute;a, Fitzgerald busca un ba&ntilde;o neutral en cuanto al g&eacute;nero o tiene que usar el ba&ntilde;o de mujeres.</p><p>&quot;Como colectivo, la comunidad trans est&aacute; muy cansada&quot;, dijo Fitzgerald. &ldquo;Ser trans o no binario no s&oacute;lo es una cuesti&oacute;n cultural, sino tambi&eacute;n espiritual. Es una conexi&oacute;n interpersonal contigo mismo&rdquo;.</p><p>Simone Chriss, de 33 a&ntilde;os, es directora de la Iniciativa de Derechos Transg&eacute;nero del Southern Legal Counsel, que desaf&iacute;a la discriminaci&oacute;n y ayuda a las personas transg&eacute;nero a obtener acceso a cambios legales de nombre y de g&eacute;nero. La reciente legislaci&oacute;n LGBTQ+ de Florida se esconde bajo el pretexto de proteger a los ni&ntilde;os, cuando en realidad perjudica a las personas, dijo Chriss.</p><p>&quot;Tengo cientos de clientes que han quedado devastados por esto&quot;, dijo Chriss. &ldquo;Algunos han abandonado el estado. Algunos han vuelto al armario porque es muy devastador intentar existir&rdquo;.</p><p>Chriss cre&oacute; un sitio web que gu&iacute;a a los residentes de Florida a trav&eacute;s del proceso de cambio de g&eacute;nero y nombre, para que puedan ver su g&eacute;nero, pronombres y nombres afirmados en los documentos. Los estudiantes de la UF tambi&eacute;n pueden solicitar un cambio de nombre legal y g&eacute;nero elegido a trav&eacute;s del Centro de Pol&iacute;ticas y Regulaciones de la UF.</p><p>Chriss ha notado un aumento en la depresi&oacute;n, la ansiedad y las ideas suicidas entre las personas que no se ajustan a su g&eacute;nero junto con el aumento de la legislaci&oacute;n que afecta a las personas LGBTQ+. Sus clientes tienen dificultades para ir a la escuela cuando se sienten inc&oacute;modos con sus propios cuerpos, dijo.</p><p>Tener recursos en el campus, como acceso a cambios de g&eacute;nero, nombre y pronombre en documentos oficiales que conectan a&uacute;n m&aacute;s a las personas con sus identidades de g&eacute;nero, es fundamental para su salud mental.</p><p>&quot;Creo que los psic&oacute;logos, psiquiatras y proveedores de salud mental pueden ser realmente beneficiosos, pero creo que es fundamental que las personas comprendan que por s&iacute; solos no es un tratamiento suficiente para la disforia de g&eacute;nero&quot;, dijo Chriss.</p><p>Abbie Aldridge, que usa pronombres ellos, es consejera de salud mental con una pr&aacute;ctica de terapia virtual privada. Se especializan en ayudar a clientes transg&eacute;nero y de g&eacute;nero diverso y han tratado a estudiantes de la UF.</p><p>La mitad de los aproximadamente 35 clientes que ven se han mudado fuera de Florida o tienen planes de hacerlo debido al clima pol&iacute;tico de Florida en torno a las cuestiones transg&eacute;nero. Aldridge tambi&eacute;n se mud&oacute; de Largo, Florida, hace aproximadamente una semana para continuar su pr&aacute;ctica en California.</p><p>&quot;Las personas trans, no binarias y de g&eacute;nero diverso son muy parecidas a los peces que nadan contra la corriente&quot;, dijo Aldridge.</p><p>Establecer ba&ntilde;os m&aacute;s neutrales en cuanto al g&eacute;nero y grupos de apoyo LGBTQ+ en los campus ayudar&iacute;a a los estudiantes no conformes con el g&eacute;nero a sentirse m&aacute;s bienvenidos en sus universidades, dijeron.</p><p>&quot;Hasta que un estudiante se sienta seguro en su entorno, el rendimiento acad&eacute;mico puede fallar&quot;, dijo Aldridge.</p><p>Al Mandese, un estudiante de &uacute;ltimo a&ntilde;o de educaci&oacute;n musical instrumental de la UF de 22 a&ntilde;os, es no binario y usa pronombres ellos. Nunca se sintieron como un ni&ntilde;o o una ni&ntilde;a, y cuando llegaron a la pubertad, Mandese dijo que se volvieron m&aacute;s conscientes de su cuerpo.<br>&ldquo;Segu&iacute;a deseando tener un pecho plano, tener una voz m&aacute;s profunda&rdquo;, dijo Mandese. &ldquo;Yo tampoco me sent&iacute; nunca como un ni&ntilde;o. Fue como una especie de t&eacute;rmino medio extra&ntilde;o&rdquo;.</p><p>Cuando salieron p&uacute;blicamente durante su &uacute;ltimo a&ntilde;o de secundaria, su madre temi&oacute; que la vida de Mandese se volviera m&aacute;s dif&iacute;cil.</p><p>Planean seguir una carrera docente y trabajar como estudiantes de magisterio en las Escuelas P&uacute;blicas del Condado de Alachua. Sus alumnos preguntan peri&oacute;dicamente si son ni&ntilde;o o ni&ntilde;a y Mandese no sabe c&oacute;mo responder.</p><p>&ldquo;Tengo que tener mucho cuidado con c&oacute;mo hablo de m&iacute; mismo&rdquo;, dijeron.</p><p>Mandese teme que no sean respetados en un entorno profesional o que solo se les conozca como el maestro no binario. Los profesores de la UF tambi&eacute;n le preguntaron a Mandese qu&eacute; t&iacute;tulo de cortes&iacute;a planean usar. Mandese tambi&eacute;n dijo que los profesores a veces, sin querer, llaman la atenci&oacute;n sobre Mandese despu&eacute;s de aprender sus pronombres.</p><p>&ldquo;Hab&iacute;a algunos profesores que a veces sent&iacute;an que eso era todo lo que realmente recordaban de m&iacute;&rdquo;, dijo Mandese.</p><p>Antes de llegar a la UF en 2021, Mandese pas&oacute; un a&ntilde;o en la Universidad Estatal de Florida, donde los s&iacute;ntomas de TOC y trastornos de ansiedad se intensificaron con la transici&oacute;n a la universidad. Sin embargo, cuando Mandese se acerc&oacute; a los servicios de asesoramiento de la FSU con pensamientos suicidas, los rechazaron despu&eacute;s de decirles que no necesitaban atenci&oacute;n inmediata.</p><p>Despu&eacute;s de esa experiencia, Mandese dijo que han evitado en gran medida los recursos de salud del campus. Mientras reciben terapia de exposici&oacute;n para el TOC en UF Health Springhill, sus amigos y profesores de confianza les sirven como sistema de apoyo.</p><p>&ldquo;Ver a las personas queer y trans orgullosas que existen en el mundo me da mucha alegr&iacute;a y felicidad&rdquo;, dijo Mandese. &quot;Esa es una gran parte de la raz&oacute;n por la que trato de no comprometerme con qui&eacute;n soy&quot;.<br></p>"
        };

        history.pushState({}, '', '#' + myArticle.slug);
    
    const parent = document.querySelector("#articleContainer");


        parent.querySelector('#articleTitle').innerText = myArticle.headline;
        parent.querySelector('#articleSubtitle').innerText = myArticle.subtitle;
        parent.querySelector('#articleAuthor').innerText = myArticle.author_one;
        parent.querySelector('#articleDate').innerText = 'Lunes, Nov. 27, 2023';
        parent.querySelector('#articleCardImage').setAttribute('src', 'images/' + myArticle.card_path);
        parent.querySelector('#articleBody').innerHTML = myArticle.body;
        parent.querySelector('#articleAbout').innerText = myArticle.about_one;
        parent.querySelector('#copy-link-input').setAttribute('value', window.location.href);

        if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAbout').innerHTML += '<br><br>' + myArticle.about_two;
    }

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
            parent.querySelector('#articleCardImage').classList.remove("rounded");
        } else {
            parent.querySelector('#articleCardCaption').style.display = "none";
            parent.querySelector('#articleCardImage').classList += " rounded";
        }

        

        myModal.show();
    }, false);

})();