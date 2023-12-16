const dictionaryEntries = [
    {
        "word": "Géčko",
        "category": "geometrie",
        "definition": "Hovorové označení pro geometrii, jakožto jednu ze čtyř hlavních oblastí olympiádní matematiky. Je odvozené od písmene <em>g</em>, kterým začíná anglické slovo <em>geometry</em> neboli geometrie.",
        "example": "Géčko je pro mnohé matematiky nejoblíbenější oblastí.",
        "note": ""
    },
    {
        "word": "Céčko",
        "category": "kombinatorika",
        "definition": "Hovorové označení pro kombinatoriku, jakožto jednu ze čtyř hlavních oblastí olympiádní matematiky. Je odvozené od písmene <em>c</em>, kterým začíná anglické slovo <em>combinatorics</em> neboli kombinatorika.",
        "example": "Mnohé céčkové úlohy nevyžadují žádné speciální znalosti, ale nápad.",
        "note": ""
    },
    {
        "word": "Céčko",
        "category": "ostatní",
        "definition": "Kategorie C.",
        "example": "Kategorie C je určena studentům prvních ročníků středních škol a odpovídajících ročníků víceletých gymnázií.",
        "note": ""
    },
    {
        "word": "Nko",
        "readAs": "enko",
        "category": "teorie čísel",
        "definition": "Hovorové označení pro teorii čísel, jakožto jednu ze čtyř hlavních oblastí olympiádní matematiky. Je odvozené od písmene <em>n</em>, kterým začíná anglické sousloví <em>number theory</em> neboli teorie čísel.",
        "example": "Při řešení nka člověk často využívá známá tvrzení.",
        "note": ""
    },
    {
        "word": "Áčko",
        "category": "algebra",
        "definition": "Hovorové označení pro algebru, jakožto jednu ze čtyř hlavních oblastí olympiádní matematiky. Je odvozené od písmene <em>a</em>, kterým začíná slovo algebra.",
        "example": "Mezi potřebné dovednosti při řešení áčka patří úprava výrazů.",
        "note": ""
    },
    {
        "word": "Áčko",
        "category": "ostatní",
        "definition": "Kategorie A.",
        "example": "Áčko je určené převážně studentům maturitních a předmaturitních ročníků, ale vítaná je účast i mladších soutěžících.",
        "note": ""
    },
    {
        "word": "Béčko",
        "category": "ostatní",
        "definition": "Kategorie B.",
        "example": "Kategorie B je určena studentům druhých ročníků středních škol a odpovídajících ročníků víceletých gymnázií.",
        "note": ""
    },
    {
        "word": "Zetko",
        "category": "ostatní",
        "definition": "Souhrnné označení pro všechny kategorie určené základoškolákům a studentům nižšího gymnázia.",
        "example": "Zetkem označujeme kategorie Z5, Z6, Z7, Z8 a Z9.",
        "note": ""
    },
    {
        "word": "Vepsiště",
        "category": "geometrie",
        "definition": "Střed kružnice vepsané mnohoúhelníku (vepsaná kružnice mnohoúhelníku je taková, která se dotýká všech jeho stran zevnitř), nejčastěji trojúhelníku.",
        "example": "Vepsiště se obvykle značí písmenem <em>I</em> podle anglického slova <em>incenter</em>.",
        "note": ""
    },
    {
        "word": "Opsiště",
        "category": "geometrie",
        "definition": "Střed kružnice opsané mnohoúhelníku (kružnice opsaná mnohoúhelníku je taková, která prochází všemi jeho vrcholy).",
        "example": "Opsiště se obvykle značí písmenem <em>O</em>.",
        "note": ""
    },
    {
        "word": "Kolmiště",
        "category": "geometrie",
        "definition": "Průsečík výšek trojúhelníku.",
        "note": "Také se tomuto bodu říká ortocentrum."
    },
    {
        "word": "Výškoviště",
        "category": "geometrie",
        "definition": "Synonymum kolmiště.",
        "example": "Výškoviště je slovo odvozené od slova výška.",
        "note": ""
    },
    {
        "word": "Připsiště",
        "category": "geometrie",
        "definition": "Střed kružnice připsané trojúhelníku (kružnice <em>A</em>-připsaná trojúhelníku <em>ABC</em> je taková kružnice, která se dotýká úsečky <em>BC</em> a polopřímek opačných k <em>BA</em> a <em>CA</em>, analogicky definujeme kružnici <em>B</em>-připsanou a <em>C</em>-připsanou).",
        "example": "<em>A</em>-připsiště se obvykle značí písmenem <em>I<sub>A</sub></em>.",
        "note": ""
    },
    {
        "word": "Švrk",
        "category": "geometrie",
        "definition": "Bod kružnice opsané trojúhelníku, který je středem oblouku nad stranou daného trojúhelníku na němž neleží třetí vrchol (například v trojúhelníku <em>ABC</em> je <em>A</em>-Švrk střed oblouku <em>BC</em> neobsahující bod <em>A</em>).",
        "example": "<em>A</em>-Švrk se obvykle značí <em>Š<sub>A</sub></em>.",
        "note": "Tento název vznikl na počest Jaroslava Švrčka, který tento bod zpopularizoval v olympiádní matematice. Též se tomuto bodu říká Švrčkův bod."
    },
    {
        "word": "Antišvrk",
        "category": "geometrie",
        "definition": "Bod kružnice opsané trojúhelníku, který je středem oblouku nad stranou daného trojúhelníku na němž leží třetí vrchol (například v trojúhelníku <em>ABC</em> je <em>A</em>-antišvrk střed oblouku <em>BC</em> obsahující bod <em>A</em>).",
        "example": "<em>A</em>-antišvrk se obvykle značí <em>N<sub>A</sub></em>.",
        "note": "Tento název je odvozen od názvu jiného bodu, Švrku, který je jeho antipodem (bod <em>X’</em> je antipodem bodu <em>X</em> na dané kružnici právě tehdy, když <em>XX’</em> je její průměr) na kružnici opsané."
    },
    {
        "word": "Kamarádi",
        "category": "geometrie",
        "definition": "Dva body jsou v daném mnohoúhelníku kamarádi, pokud pro každý vrchol platí, že přímky spojující tento vrchol s danými body jsou izogonální v úhlu při daném vrcholu (izogonální přímky v daném úhlu jsou přímky procházející vrcholem daného úhlu, které jsou navíc osově symetrické podle osy úhlu).",
        "example": "Střed kružnice opsané a ortocentrum daného trojúhelníku jsou kamarádi.",
        "note": ""
    },
    {
        "word": "Úhlení",
        "category": "geometrie",
        "definition": "Technika řešení geometrických úloh využívající geometrické věty o vztazích mezi velikostmi úhlů.",
        "example": "Mezi jednu z nejdůležitějších technik úhlení patří přenášení úhlu po kružnici.",
        "note": ""
    },
    {
        "word": "Vyúhlit",
        "category": "geometrie",
        "definition": "Vyřešit úlohu pomocí úhlení.",
        "example": "Ta úloha šla lehce vyúhlit!",
        "note": ""
    },
    {
        "word": "Analytika",
        "category": "geometrie",
        "definition": "Krátké označení pro analytickou geometrii. V kontextu matematické olympiády používáno ve významu techniky na řešení úloh.",
        "example": "Hodně Patrikových úloh bylo vyřazeno, protože byly snadno řešitelné analytikou.",
        "note": ""
    },
    {
        "word": "Bary",
        "category": "geometrie",
        "definition": "Zkratka pro barycentriku.",
        "example": "V bary vyjadřujeme polohu bodů pomocí referenčního trojúhelníku.",
        "note": ""
    },
    {
        "word": "Barycentrika",
        "category": "geometrie",
        "definition": "Technika na řešení geometrických úloh používající barycentrické souřadnice.",
        "example": "Barycentrika je dobrá na úlohy s kružnicí vepsanou, ve kterých běžná analytická geometrie selhává.",
        "note": ""
    },
    {
        "word": "Syntetika",
        "category": "geometrie",
        "definition": "Technika řešení geometrických úloh nepoužívající analytickou geometrii, barycentrické souřadnice ani jiné výpočetní techniky.",
        "example": "Geometrické úlohy v matematické olympiádě jsou vybrané tak, aby měly pěkné syntetické řešení.",
        "note": ""
    },
    {
        "word": "Projektivní magie",
        "category": "geometrie",
        "definition": "Soubor složitých vět a technik z projektivní geometrie. Tyto věty vyžadují netriviální teorii, proto tyto techniky řešitelé typicky neumí používat správně nebo s plným sebevědomím toho, že vědí, co dělají. Řešení používající projektivní magii jsou často velmi krátká a působí jako z jiného světa, proto „magie”.",
        "example": "Radek Olšák je známý propagátor projektivní magie, umí pomocí ní řešit i ty nejobtížnější úlohy.",
        "note": ""
    },
    {
        "word": "Hýbání",
        "category": "geometrie",
        "definition": "Geometrická technika, při které si představujeme, že se nějaký bod hýbe a zajímá nás, co se při tom děje s ostatními body.",
        "example": "Hýbání vyžaduje dobrou představivost a znalosti vlastností hýbajících se bodů.",
        "note": ""
    },
    {
        "word": "Packal",
        "category": "geometrie",
        "definition": "Hovorové označení pro Pascalovu větu, geometrické tvrzení, týkající se vlastnosti bodů ležících na jedné kuželosečce.",
        "example": "Řešením na první pohled složité úlohy byl Packal.",
        "note": "Blaise Pascal byl francouzský matematik, fyzik, spisovatel a teolog."
    },
    {
        "word": "Paskalení",
        "category": "geometrie",
        "definition": "Aktivní používání Pascalovy věty na řešení geometrických úloh, ve kterých je zpravidla zadáno mnoho bodů na kružnici (mohlo by se jednat i o jinou kuželosečku, ale to se moc často v olympiádní matematice nestává). Tato věta má mnoho podob, proto bývá obtížné ji v úloze nalézt.",
        "example": "Řešitelé s ambicemi uspět na mezinárodních matematických olympiádách by měli umět paskalit.",
        "note": ""
    },
    {
        "word": "Komplex beš",
        "category": "geometrie",
        "definition": "Technika řešení geometrických úloh využívající počítání v komplexních číslech. Slovo beš je počeštěná verze anglického <em>bash</em>, které je v daném kontextu použito ve významu mlátit. Důvodem je, že podobně jako analytika nebo barycentrika, je i komplex beš metodou využívající sáhodlouhé výpočty, které nevyžadují originální myšlenku. Obrazně řečeno se tedy jedná o mlácení do úlohy, dokud se nevyřeší.",
        "example": "Úlohy s body na jedné kružnici se dobře řeší komplex bešem, protože můžeme bez újmy na obecnosti považovat danou kružnici za jednotkovou.",
        "note": ""
    },
    {
        "word": "Spirálka",
        "category": "geometrie",
        "definition": "Hovorové označení pro spirální podobnost (geometrické zobrazení, které je složením stejnolehlosti a otočení). Bývá užitečné v případech, kdy chceme použitím podobnosti jedněch trojúhelníků získat podobnost dalších.",
        "example": "Spirálka chodí po dvou.",
        "note": ""
    },
    {
        "word": "Trojzubec",
        "category": "geometrie",
        "definition": "Hovorové označení pro větu, která tvrdí, že když máme trojúhelník <em>ABC</em> se středem jeho kružnice vepsané <em>I</em>, tak středem kružnice opsané trojúhelníku <em>BIC</em> je Švrčkův bod naproti vrcholu <em>A</em>.",
        "example": "Trojzubec se dá dokázat úhlením.",
        "note": ""
    },
    {
        "word": "Středovka",
        "category": "geometrie",
        "definition": "Hovorové označení pro středovou souměrnost.",
        "example": "Obrazem ortocentra v středovce podle středu strany <em>BC</em> trojúhelníku <em>ABC</em> je antipod bodu <em>A</em> na kružnici opsané trojúhelníku ABC.",
        "note": ""
    },
    {
        "word": "Osovka",
        "category": "geometrie",
        "definition": "Hovorové označení pro osovou souměrnost.",
        "example": "Obrazem ortocentra v osovce podle strany trojúhelníku je bod na kružnici jemu opsané.",
        "note": ""
    },
    {
        "word": "Feuerbaška",
        "category": "geometrie",
        "definition": "Hovorové označení pro Feuerbachovu kružnici, také nazývanou kružnicí devíti bodů. Tato kružnice prochází středy stran trojúhelníku, patami výšek a středy spojnic vrcholů trojúhelníka s ortocentrem.",
        "example": "Existence Feuerbašky se dokazuje pomocí stejnolehlosti.",
        "note": "Karl Wilhelm Feuerbach byl německý matematik, který jako první dokázal, že se kružnice devíti bodů dotýká kružnice vepsané a kružnic připsaných. Bod dotyku Feurbašky s kružnicí vepsanou nazýváme Feuerbachův bod."
    },
    {
        "word": "Simsonovka",
        "category": "geometrie",
        "definition": "Hovorové označení pro Simsonovu přímku.",
        "example": "Pokud zvolíme bod na kružnici opsané trojúhelníku, tak platí, že paty kolmic vedených z daného bodu na strany trojúhelníku leží na Simsonovce.",
        "note": "Robert Simson byl britský matematik, který kritizoval díla starověkých geometrů. 🤷"
    },
    {
        "word": "Ágéčko",
        "category": "algebra",
        "definition": "Hovorové označení pro nerovnost mezi aritmetickým (součet <em>n</em> čísel následně dělený <em>n</em>) a geometrickým (<em>n</em>-tá odmocnina ze součinu <em>n</em> čísel) průměrem.",
        "example": "Z ágéčka vyplývá, že aritmetický průměr daných nezáporných čísel je větší nebo roven jejich geometrickému průměru.",
        "note": ""
    },
    {
        "word": "Cauchy",
        "readAs": "kóši",
        "category": "algebra",
        "definition": "Krátké označení pro Cauchy-Schwarzovu nerovnost.",
        "example": "Pomůcka pro zapamatování si Cauchyho zní: „Dvě závorky jsou víc než jedna.”",
        "note": "Augustin Louis Cauchy byl francouzský matematik. Byl průkopníkem matematické analýzy."
    },
    {
        "word": "Zlomkobijec",
        "category": "algebra",
        "definition": "Speciálně upravený tvar Cauchy-Schwarzovy nerovnosti, který se uplatňuje při důkazu nerovností, ve kterých vystupují zlomky.",
        "example": "Zlomkobijcem můžeme zdola odhadnout součet několika zlomků jedním zlomkem.",
        "note": ""
    },
    {
        "word": "Odmocninobijec",
        "category": "algebra",
        "definition": "Speciálně upravený tvar Cauchy-Schwarzovy nerovnosti, který se uplatňuje při důkazu nerovností, ve kterých vystupují odmocniny.",
        "example": "Odmocninobijcem můžeme shora odhadnout součet několika odmocnin výrazem pod jednou odmocninou.",
        "note": ""
    },
    {
        "word": "Jensen",
        "category": "algebra",
        "definition": "Krátké označení pro Jensenovu nerovnost.",
        "example": "Při použití Jensena je nutné zohlednit případnou konvexitu/konkávitu funkce.",
        "note": ""
    },
    {
        "word": "Funkcionálka",
        "category": "algebra",
        "definition": "Krátké označení pro funkcionální rovnici, tedy rovnici, jejímž řešením je funkce.",
        "example": "Při řešení funkcionálek se na začátku obvykle dosazuje za neznámé nula nebo jednička.",
        "note": ""
    },
    {
        "word": "Polynomiálka",
        "category": "algebra",
        "definition": "Typ funkcionální rovnice, jejímž řešením je polynom (polynom je součet mocninných funkcí).",
        "example": "Při řešení polynomiálek se musí uplatňovat znalosti o polynomech.",
        "note": ""
    },
    {
        "word": "Soustava",
        "category": "algebra",
        "definition": "Krátké označení pro soustavu rovnic.",
        "example": "V české i slovenské olympiádě se soustavy často vyskytují.",
        "note": ""
    },
    {
        "word": "Čtvercování",
        "category": "algebra",
        "definition": "Umocnění na druhou nebo doplnění na čtverec.",
        "example": "Častá taktika při řešení úloh s odmocninami je čtvercování.",
        "note": ""
    },
    {
        "word": "Permutačka",
        "category": "algebra",
        "definition": "Krátké označení pro permutační nerovnost, která se též nazývá mincovou nerovností.",
        "example": "Permutačka se občas dá použít k důkazu homogenních nerovností.",
        "note": ""
    },
    {
        "word": "Čebyšev",
        "category": "algebra",
        "definition": "Krátké označení pro Čebyševovu nerovnost.",
        "example": "Čebyševa lze dokázat permutační nerovností.",
        "note": "Pafnutij Lvovič Čebyšev byl ruský matematik, který se zabýval zejména teorií pravděpodobnosti, statistikou, teorií čísel a analytickou geometrií. Je po něm pojmenována nejen Čebyševova nerovnost, ale také Čebyševovy polynomy nebo Čebyševova vzdálenost."
    },
    {
        "word": "Zhomogenizovat",
        "category": "algebra",
        "definition": "Upravit výraz tak, aby byl homogenní (stupeň všech členů je stejný).",
        "example": "Po zhomogenizování bývají nerovnosti jednodušší.",
        "note": ""
    },
    {
        "word": "Schur",
        "readAs": "šur",
        "category": "algebra",
        "definition": "Krátké označení pro Schurovu nerovnost.",
        "example": "Schurova nerovnost je zajímavá tím, že je velmi lehké  dokázat její platnost v původním tvaru, ale velmi těžké v roznásobeném.",
        "note": "Issai Schur byl německý matematik židovského původu. Věnoval se převážně reprezentacím grup."
    },
    {
        "word": "Malý Fermat",
        "category": "teorie čísel",
        "definition": "Krátké označení pro Malou Fermatovu větu, známé tvrzení z teorie čísel, které sa často používa v úlohách, kde zkoumáme zbytky po dělení prvočíslem.",
        "example": "Malý Fermat je důsledek Eulerovy věty.",
        "note": "Pierre de Fermat byl francouzský matematik zabývající se teorií čísel. Svým povoláním to však byl právník."
    },
    {
        "word": "Velký Fermat",
        "category": "teorie čísel",
        "definition": "Krátké označení pro Velkou Fermatovu větu, známé tvrzení z teórie čísel, ktoré trvalo dokázat více než 350 let.",
        "example": "Důkaz Velkého Fermata je na 129 stran.",
        "note": ""
    },
    {
        "word": "Modulení",
        "category": "teorie čísel",
        "definition": "Řešení úlohy z teorie čísel metodou počítání místo se zadanými čísly, pouze s jejich zbytky po dělení nějakým daným číslem (modulo dané číslo).",
        "example": "Úloha, ve které máme najít všechna čísla <em>n</em> taková, že součet čísel <em>1!</em>, <em>2!</em>, až <em>n!</em>, je druhá mocnina celého čísla, se dá hravo vyřešit modulením.",
        "note": ""
    },
    {
        "word": "Legendrák",
        "category": "teorie čísel",
        "definition": "Hovorové označení pro Legendrův symbol (symbol, který vyjadřuje, zda je číslo kvadratický zbytek modulo nějaké číslo).",
        "example": "Věta o kvadratické reciprocitě se zapisuje pomocí legendráků.",
        "note": "Adrien-Marie Legendre byl francouzský matematik. Věnoval se hlavně statistice, teorii čísel a matematické analýze. Za přínos vědě je jeho jméno uvedeno v seznamu 72 jmen na Eiffelově věži."
    },
    {
        "word": "Zbytek",
        "category": "teorie čísel",
        "definition": "Krátké označení pro „zbytek čísla po dělení”. Často používané ve slovním spojení „kvadratický zbytek” (kvadratický zbytek po dělení číslem <em>x</em> je takový zbytek, pro který existuje celé číslo <em>y</em>, jehož druhá mocnina dává po dělení číslem <em>x</em> právě tento zbytek).",
        "example": "Číslo 1 je kvadratický zbytek modulo 4, zatímco číslo 3 není.",
        "note": ""
    },
    {
        "word": "Nezbytek",
        "category": "teorie čísel",
        "definition": "Používané v kontextu kvadratických zbytků. Když se číslo <em>x</em> označí jako nezbytek modulo <em>y</em>, znamená to, že neexistuje žádné číslo, jehož druhá mocnina má zbytek <em>x</em> po dělení číslem <em>y</em>.",
        "example": "Číslo 3 je kvadratický nezbytek modulo 4.",
        "note": ""
    },
    {
        "word": "Čtverec",
        "category": "teorie čísel",
        "definition": "Číslo, které je druhou mocninou celého čísla.",
        "example": "Číslo 16 je čtverec, ale číslo 17 není.",
        "note": ""
    },
    {
        "word": "Krychle",
        "category": "teorie čísel",
        "definition": "Číslo, které je třetí mocninou celého čísla.",
        "example": "Číslo 27 je nejmenší dvouciferná krychle.",
        "note": ""
    },
    {
        "word": "Wilson",
        "category": "teorie čísel",
        "definition": "Krátké označení pro Wilsonovu větu, tvrzení, které se používá při řešení úloh souvisejících se zjišťováním zbytku daného výrazu po dělení prvočíslem.",
        "example": "Wilson se dokazuje pomocí inverzních prvků.",
        "note": "Kenneth Geddes Wilson byl americký fyzik, který dostal Nobelovu cenu za výzkum fázových přechodů."
    },
    {
        "word": "Bertrand",
        "category": "teorie čísel",
        "definition": "Krátké označení pro Bertrandův postulát, důležité tvrzení, které nám dává odhad na to, jak často mezi čísly nacházíme prvočísla. Tento postulát byl sice vysloven Bertrandem, byl však zcela dokázán až Čebyševem o několik let později.",
        "example": "Z Bertranda vyplývá, že pro každé číslo větší než jedna platí, že mezi ním a jeho dvojnásobkem se nachází alespoň jedno prvočíslo.",
        "note": "Joseph Bertrand byl francouzský matematik, který aplikoval diferenciální rovnice ve fyzice. Také se zabýval statistickou pravděpodobností."
    },
    {
        "word": "Elteéčko",
        "category": "teorie čísel",
        "definition": "Zkratka pro pokročilou větu z teorie čísel, která se v angličtině označuje „Lifting the Exponent Lemma”, resp. LTE.”",
        "example": "V úloze z IMO 2022 se dá použít elteéčko.",
        "note": ""
    },
    {
        "word": "Inverz",
        "category": "teorie čísel",
        "definition": "V teorii čísel se takto označuje inverzní prvek k danému číslu (<em>a’</em> je inverzní prvek <em>a</em> modulo <em>b</em>, pokud platí, že součin <em>a*a’</em> dává zbytek jedna po dělení <em>b</em>, přičemž <em>a</em> i <em>a’</em> jsou přirozená čísla menší než <em>b</em>).",
        "example": "Inverzem jedničky je vždycky jednička.",
        "note": ""
    },
    {
        "word": "Obarvování",
        "category": "kombinatorika",
        "definition": "Metoda často používaná při řešení kombinatorických úloh požadujících důkaz toho, že zadané území nelze vydláždit zadanými dílky.",
        "example": "Při obarvovaní se často používá šachovnicový vzor.",
        "note": ""
    },
    {
        "word": "Dláždění",
        "category": "kombinatorika",
        "definition": "Krátké označení pro typ kombinatorických úloh, ve kterých se zabýváme tím, zda umíme zadaný útvar vydláždit jinými útvary (specifického tvaru) bez překrývání.",
        "example": "Dá se dokázat, že šachovnice <em>8 x 8</em> se nedá vydláždit útvary „L” složenými ze tří <em>1 x 1</em> čtverečků.",
        "note": ""
    },
    {
        "word": "Dirichlet",
        "category": "kombinatorika",
        "definition": "Krátké označení pro Dirichletův princip, často také nazývaný princip holubníků.",
        "example": "Z Dirichleta plyne, že pokud máme pět holubníků a šest holubů, musí v některém holubníku bydlet minimálně dva holubi.",
        "note": "Daný princip je pojmenován po Johannu Peterovi Gustavovi Lejeune Dirichletovi, německému matematikovi, který se zabýval teorií čísel, matematickou analýzou a statistikou."
    },
    {
        "word": "Olm",
        "category": "ostatní",
        "definition": "Zkratka od obří láskyplný matematik nebo také olympiádní matematik. Je to jméno jednoho z maskotů matematické olympiády. Je to také označení pro člověka, který tráví nadměrně mnoho času počítáním, kvůli čemuž je příliš dlouho zavřený uvnitř a je potom bledý.",
        "example": "Michal, Kuba a David jsou olmové.",
        "note": "<em>Olm</em> je anglické označení pro macaráta jeskynního, slepého endemického obojživelníka žijícího v krasových jeskyních a podzemních vodách ve Slovinsku. Pojmenování maskota vzniklo na evropské dívčí matematické olympiádě právě podle tohoto živočicha."
    },
    {
        "word": "Olmovat",
        "category": "ostatní",
        "definition": "Učit se matematiku.",
        "example": "Aby se člověk dostal na Mezinárodní matematickou olympiádu, musí hodně olmovat.",
        "note": "Olmovat se často používá v situaci, kdy se jako alternativa nabízí jiná, mnohdy zábavnější činnost, ale někteří lidé přesto raději olmují."
    },
    {
        "word": "Upočítat",
        "category": "ostatní",
        "definition": "Vyřešit úlohu způsobem, který nevyžaduje přijít na žádnou originální myšlenku, ale stačí k tomu pouze technické znalosti.",
        "example": "Umět něco upočítat je užitečnou dovedností, protože ne vždy se daří přijít na elegantní způsob řešení.",
        "note": ""
    },
    {
        "word": "Zbešit",
        "category": "geometrie",
        "definition": "Vyřešit geometrickou úlohu použitím výpočetních technik (analytika, bary, komplex beš). Slovo zbešit je odvozené od anglického slova <em>bash</em>, které znamená mlátit, což v přeneseném slova smyslu je výstižné označení pro tento postup pro řešení úloh.",
        "example": "Úloha, kterou lze snadno zbešit, není moc dobrá.",
        "note": ""
    },
    {
        "word": "Celostátko",
        "category": "ostatní",
        "definition": "Ústřední kolo matematické olympiády.",
        "example": "Celostátka se účastní nejlepší řešitelé krajských kol matematické olympiády kategorie A.",
        "note": ""
    },
    {
        "word": "Výběrko",
        "category": "ostatní",
        "definition": "Soustředění určené pro nejlepší řešitele ústředního kola matematické olympiády, jehož cílem je vybrat tým pro Mezinárodní matematickou olympiádu a Středoevropskou matematickou olympiádu.",
        "example": "Výběrko bývá velmi stresující, protože má pět soutěžních dní.",
        "note": ""
    },
    {
        "word": "Přípravko",
        "category": "ostatní",
        "definition": "Soustředění určené k přípravě týmů, které jedou na Mezinárodní matematickou olympiádu, nebo Středoevropskou matematickou olympiádu.",
        "example": "Na přípravku mají účastníci mnoho přednášek týkajících se různých částí olympiádní matematiky.",
        "note": ""
    },
    {
        "word": "Soustředko",
        "category": "ostatní",
        "definition": "Matematické soustředění. Tato soustředění jsou hlubokou součástí kultury matematické olympiády a jsou organizována korespondenčními semináři (například PraSe a iKS).",
        "example": "Na soustředkách účastníci zažijí nejen přednášky, ale také mnoho společenských her a jiných aktivit.",
        "note": ""
    },
    {
        "word": "Tětiváč",
        "category": "geometrie",
        "definition": "Krátké označení pro tětivový čtyřúhelník (čtyřúhelník, kterému lze opsat kružnici).",
        "example": "V úlohách se často vyplatí hledat tětiváče.",
        "note": ""
    },
    {
        "word": "Tětivovec",
        "category": "geometrie",
        "definition": "Synonymum pro tětiváč.",
        "example": "S tětivovci se dobře úhlí.",
        "note": ""
    },
    {
        "word": "Podlaha",
        "category": "algebra",
        "definition": "Český název pro <em>floor function</em>, funkci, která každému číslu přiřazuje největší celé číslo, které není větší než zadané číslo.",
        "example": "Podlahou čísla 3,75 je 3.",
        "note": ""
    },
    {
        "word": "Rozkejovat",
        "category": "ostatní",
        "definition": "Vyřešit úlohu rozebíráním několika možných případů. Toto slovo je odvozené od anglického slova <em>case</em>, které znamená případ.",
        "example": "Úloha, která jde rozkejsovat, je sice nudná, ale řešitelná.",
        "note": ""
    },
    {
        "word": "Kombi",
        "category": "kombinatorika",
        "definition": "Zkrácené označení pro kombinatoriku, jakožto jednu ze čtyř hlavních oblastí olympiádní matematiky.",
        "example": "Kombi úlohy bývají často řešené pomocí pojmů a vět z teorie grafů.",
        "note": ""
    },
    {
        "word": "Geo",
        "category": "geometrie",
        "definition": "Synonymum géčka.",
        "example": "Geo se obvykle nedá řešit bez nákresu.",
        "note": ""
    },
    {
        "word": "Kombigeo",
        "category": "kombinatorika/geometrie",
        "definition": "Zkratka pro kombinatorickou geometrii, oblast geometrie, která se zabývá množinami bodů dané vlastnosti.",
        "example": "Kombigeo úlohy se často řeší pomocí konvexních obalů.",
        "note": ""
    },
    {
        "word": "Stejnolehlit",
        "category": "geometrie",
        "definition": "Používat stejnolehlost (geometrické zobrazení, které je definováno středem a koeficientem stejnolehlosti).",
        "example": "Pokud máme dvě dotýkající se kružnice, vyplatí se stejnolehlit jednu na druhou.",
        "note": ""
    },
    {
        "word": "Reim",
        "readAs": "rajm",
        "category": "geometrie",
        "definition": "Hovorové označení pro tvrzení, které lze snadno dokázat úhlením.",
        "example": "Použití Reima může člověku ušetřit mnoho práce.",
        "note": ""
    },
    {
        "word": "Apolloniovka",
        "category": "geometrie",
        "definition": "Hovorové označení pro Apolloniovu kružnici.",
        "example": "Na Apolloniovce leží body, které mají konstantní poměr vzdáleností od dvou daných bodů.",
        "note": "Apollónios z Pergy byl starořecký geometr, matematik a astronom, který svou prací navázal na Eukleidea."
    },
    {
        "word": "Thaletovka",
        "category": "geometrie",
        "definition": "Hovorové označení pro Thaletovu kružnici.",
        "example": "Body, které se dívají na úsečku AB pod pravým úhlem leží na Thaletovce nad průměrem AB.",
        "note": "Thales z Milétu byl jedním ze zakladatelů starořecké filosofie."
    },
    {
        "word": "Einhorn",
        "category": "ostatní",
        "definition": "Růžový plyšový jednorožec. Je to maskot matematické olympiády, který již několik let jezdí na různé mezinárodní soutěže. Údajně se původně jednalo o obrovskou plyšovou hračku, která se ale po vyprání zmenšila na aktuální velikost.",
        "example": "Einhorn je na různých matematických akcích předáván mezi účastníky tak, aby byl vzat na všechny soutěže.",
        "note": "Einhorn je německé označení pro jednorožce."
    }
];