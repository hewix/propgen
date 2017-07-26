var cap = [
    {
        prec: [1],
        title: "KIT FENYEGETNEK?",
        buttons: ["EURÓPÁT", "A MAGYAROKAT", "A REZSIT", "A STADIONOKAT"]
    },
    {
        prec: [2],
        title: "MIT CSINÁL A KORMÁNY (= ORBÁN VIKTOR)? ",
        buttons: ["MEGVÉDI...", "ELKERGETTE...", "STRATÉGIAI MEGÁLLAPODÁST KÖTÖTT...", "MEGEMELTE"]
    },
    {
        prec: [3],
        title: "MIT CSINÁL SOROS?",
        buttons: ["PÉNZELI", "EL AKARJA PUSZTÍTANI", "BEFOLYÁSOLJA", "MEG AKARTA ÖLNI"]
    },
    {
        prec: [4],
        title: "MELYIK?",
        buttons: ["MSZP", "JOBBIK", "MOMENTUM", "ÚGY ÁLTALÁBAN A BALLIBEK"]
    },
    {
        prec: [1, 1],
        title: "KI FENYEGETI EURÓPÁT?",
        buttons: ["A MIGRÁNSOK", "MÉSZÁROS LŐRINC... AKAROM MONDANI, GYURCSÁNY!", "AZ USA", "A HÁTTÉRHATALOM"]
    },
    {
        prec: [1, 2],
        title: "KI FENYEGETI A MAGYAROKAT?",
        buttons: ["MINDENKI", "BRÜSSZEL", "A BEVÁNDORLÓK", "A FIDESZ... JA NEM... ÖÖÖ... DO YOU HAVE A TOLMÁCS?"]
    },
    {
        prec: [1, 3],
        title: "KI MERÉSZELI FENYEGETNI A REZSIT?",
        buttons: ["BRÜSSZEL", "A JOBBIK, MERT SIMICSKA KOTTÁJÁBÓL JÁTSZIK", "SENKI", "IGAZÁBÓL A KORMÁNY... DE PSZT!"]
    },
    {
        prec: [1, 4],
        title: "MIÉRT FENYEGETIK A STADIONOKAT?",
        buttons: ["MERT KINEK KELL KÓRHÁZ, HA LEHET ÉPÍTENI STADIONT?", "MERT A FELCSÚT CSAK NB-4 ", "TUTI A GYURCSÁNY VOLT", "APROPÓ STADION, KÉNE MÉG EGY, NEM?"]
    },
    {
        prec: [2, 1],
        title: "MIT VÉD A KORMÁNY (= ORBÁN VIKTOR)?",
        buttons: ["BAYER ZSOLT ILLEMTANÁRÁT", "A HUNGARIKUMOKAT", "ANDY VAJNA KASZINÓIT", "AZ ŐSI KERESZTÉNY ÉRTÉKEKET (BOSZORKÁNYÉGETÉS, MEGKÖVEZÉS, TUDOMÁNYTAGADÁS STB...)"]
    },
    {
        prec: [2, 2],
        title: "KIT KERGETETT EL A KORMÁNYT (= ORBÁN VIKTOR)?",
        buttons: ["A MIGRÁNSOKAT", "AZ IMF-ET, AKI NEM HAGYTA A VÁLSÁG IDEJÉN CSŐDBE MENNI AZ ORSZÁGOT... DE ERRŐL NEM BESZÉLÜNK!", "A BRÜSSZELI BÜRÖKRATÁKAT", "AZ ÖSSZES KÜLFÖLDI BEFEKTETŐT"]
    },
    {
        prec: [2, 3],
        title: "KIVEL KÖTÖTT A KORMÁNY (= ORBÁN VIKTOR) STRATÉGIAI MEGÁLLAPODÁST?",
        buttons: ["OROSZORSZÁGGAL", "KIRGIZISZTÁNNAL", "MÉSZÁROS LŐRINCCEL", "A PIRÉZEKKEL"]
    },
    {
        prec: [2, 4],
        title: "MIT EMELT MEG A KORMÁNY (= ORBÁN VIKTOR)?",
        buttons: ["AZ ÖSSZES ADÓT... VÁRJUNK, MI?", "ORBÁN VIKTORT", "MATOLCSY GYÖRGY HÁZTARTÁSI HIÁNYÁT", "VALAMIT, BIZTOS JÓ LESZ NEKÜNK"]
    },
    {
        prec: [3, 1],
        title: "MIT PÉNZEL SOROS?",
        buttons: ["A GLOBÁLIS FELMELEGEDÉST", "A MIGRÁNSOKAT", "AZ ÁLELLENZÉKET ÉS AZ ÁLCIVILEKET", "ORBÁN VIKTORT, HOGY LEGYEN DIPLOMÁJA... DE AZT SZABAD"]
    },
    {
        prec: [3, 2],
        title: "MIT AKAR ELPUSZTÍTANI SOROS?",
        buttons: ["A KERESZTÉNY GAZDASÁGPOLITIKÁT", "MAGYARORSZÁGOT", "A VILÁGOT", "IGAZÁBÓL KI A FRÁSZ AZ A SOROS?"]
    },
    {
        prec: [3, 3],
        title: "MIT BEFOLYÁSOL SOROS?",
        buttons: ["A FORINTOT", "AZ ÚJ FRANCIA ELNÖKÖT", "EGÉSZ EURÓPÁT", "A KENYÉR ÁRÁT"]
    },
    {
        prec: [3, 4],
        title: "KIT AKART MEGÖLNI SOROS?",
        buttons: ["A MAGYAR ÁLMOT", "VALAKI ANYJÁT", "A TURULT", "MAGÁT"]
    },
    {
        prec: [4, 1],
        title: "MIT VENNE EL AZ MSZP?",
        buttons: ["A MAGÁNNYUGDÍJAKAT... JA NEM, AZOK MI VOLTUNK", "A CSALÁDI ADÓKEDVEZMÉNYT, MERT SZERINTÜK EGY MELEG PÁRNAK IS LEHET CSALÁDJA", "A STADIONOKAT", "AZ ÖSSZES PARIZERT"]
    },
    {
        prec: [4, 2],
        title: "A JOBBIK ELADNÁ... ?",
        buttons: ["MAGYARORSZÁGOT", "HOFFMAN RÓZSA SZEMÜVEGÉT", "A FELCSÚTI KISVASUTAT", "ÖÖÖ... JELÖLJÜK MEG A GYURCSÁNYT"]
    },
    {
        prec: [4, 3],
        title: "MIT TETTEK AZ ÁLOMGYILKOSOK?",
        buttons: ["SZÉTVERTÉK A FIDESZ SZÉKHÁZAT", "MEGVERTÉK AZ ÖSSZES ÚJSÁGÍRÓT", "ELVETTÉK AZ OLIMPIÁT", "AZ UTCÁN HANGOSKODTAK PÜNKÖSDKOR"]
    },
    {
        prec: [4, 4],
        title: "MIT AKAR A BALLIBERÁLIS, SOROS ÁLTAL PÉNZELT ELLENZÉK?",
        buttons: ["ELADNI SOROS GYÖRGYÖT", "MEGSZÜNTETNÉK A HUNGARIKUMOKAT (HAVERI KAPITALIZMUS, ÚRIZÁLÁS, ÁLHÍRGYÁRTÁS STB...)", "ELVENNÉK ANDY VAJNA ÖSSZES KASZINÓJÁT", "EL AKARJÁK VENNI A 14. HAVI NYUGDÍJAT (HIÁBA NINCS, MAJD MEGOLDJÁK. EZEK ENNYIRE GONOSZAK)"]
    }
];

var art = [
    {
        prec: [1, 1, 1],
        title: "A migránsok fenyegetést jelentenek Európára",
        genTextA: "A migránsok jelenléte az Európai kultúra végét jelentheti. Ezért fontos, hogy Magyarország megvédje a saját és Európa határait a migráns hordáktól. Brüsszel támadást intézett országunk ellen, mert a bürökraták számára előnyös lenne, ha Magyarország meggyengülne. Ezért Orbán Viktor megkér minden állampolgárt, hogy támogassuk a kormányt a Brüsszellel folytatott harcában, mivel csak együtt tudjuk kivívni országunk szabadságát.",
        genTextB: "Mióta a balkáni útvonal lezárult a migránsok Afrika irányából próbálnak Európába jutni. Több mint egymillió illegális bevándorló jutott át az öreg kontinensre, de rekordmennyiségű migránsra számítanak idén az olasz hatóságok. Magyar szakértők szerint nem utal semmi arra, hogy a migrációs válság lelassulóban lenne. Habár a magyar szakértők munkáját nehezíti, hogy ritkán látnak az országban migránst.",
        genTextC: "Az emberek fő félelme az, hogy a bevándorlókkal együtt terroristák és erőszaktevők is bejuthatnak a kontinensre.",
        imgRoute: "img/migrans.jpg",
        imgName: "Migránsok a határon"
    },
    {
        prec: [1, 1, 2],
        title: "Gyurcsány kilépne az unióból",
        genTextA: "A bukott politikus nyilvánvalóan Soros kottájából játszik. A volt pártelnök a jelenlegi feltüzelt közhangulatot szándékszik kihasználni, mikor másodpercenként változtatja véleményét. Ennek a köpönyegforgató hozzáállásnak csakis egy célja van, a politikai haszonszerzés. Gyurcsány nyilvánvalóan a Soros György hálózat részeként próbálja a magyar nemzetet megosztani és meggyengíteni.",
        genTextB: "Gyurcsány és Botka a hetekben többször is tárgyaltak, de az ellenzék még saját soraiban sem tud rendet tenni, így bátran kijelenthető, hogy teljesen alkalmatlanok lennének egy kormány felállítására.",
        genTextC: "A kormány már korábban jelezte, hogy Magyarországnak csakis Magyarországon a helye, mivel Magyarország egy büszke és erős európai ország. Orbán Viktor, Magyarország miniszterelnöke többször is kijelentette, hogy országunk az unió tagja marad, ameddig kapunk pénzt (tehát még egy picit).",
        imgRoute: "img/gyurcsany.jpg",
        imgName: "Gyurcsány Ferenc, aki 2010-ben elvette a 13. havi nyugdíjat"
    },
    {
        prec: [1, 1, 3],
        title: "Matolcsy György: Az USA megpróbálta bedönteni a magyar gazdaságot",
        genTextA: "Az USA Soros György álcivil szervezetein keresztül próbálta befolyásolni az ország gazdaságát. Az USA nem ismeri el a magyar gazdasági sikereket és az új monetáris politikát, miszerint:\"Lopj többet, adózz kevesebbet\".",
        genTextB: "Matolcsy György szerint az ország gazdaságán keresztül próbáltak megpuccsolni a jelenleg regnáló kormáynt. Csak a jegybankelnök éberségének köszönhetjük, hogy ez nem történt meg.",
        genTextC: "Egyenlőre kétséges, hogy számíthatunk-e további támadásokra az USA felől. Elemzők szerint jelenleg csak a Fidesz-KDNP kormány képes arra, hogy az ország stabilitását biztosítsa.",
        imgRoute: "img/usa.jpg",
        imgName: "Coleen Bell, korábbi amerikai nagykövet"
    },
    {
        prec: [1, 1, 4],
        title: "A háttérhatalmak összejátszanak Magyarország ellen",
        genTextA: "A háttérhatalomak Matolcsy György szerint veszélyesek Magyarországra. Nem tudhatóak szándékaik és veszélyeztetik a Fidesz 2018 választási győzelmét, ami minden magyarnak érdeke. A nyugati, Soros által pénzelt szervezetek mindent megtesznek, hogy az egyre erősödő magyar gazdaságot megpróbálják visszarántani a szocialisták kormányzása által tönkretett régi állapotba",
        genTextB: "Nem lehet tudni, hogy a nyugati hatalmak közül melyek támogatják különböző háttéralkuk létrejöttét, illetve mely nemzetek számára jelent versenyhátrányt a magyar gazdaság erősödése.",
        genTextC: "Kövér László korábban már kifejtette, hogy az unióból való lassú kihátrálás lehetősége sincs kizárva, amennyiben az nem képes a megújulásra és a teljes önvizsgálatra. Mivel az európai parlamentben ülö Soros-bérenc bürokraták többször is támadták országunkat, a kormány elkötelezett, hogy folytassa a Nemzeti Konzultációt mert a magyar nép felhatalmazása nélkül a kormány nem tudja az ország érdekeit képviselni Brüsszelben. ",
        imgRoute: "img/hatterhatalom.jpg",
        imgName: "A háttérhatalmak, élükön Soros Györggyel mindent megtesznek, hogy romba döntsék az egyre erősödő Magyarországot"
    },
    {
        prec: [1, 2, 1],
        title: "Mindenki fenyegeti a magyarokat",
        genTextA: "A magyar gazdaság túl jól teljesít, erre sokan irigyek. Ezért próbálják sokat megdönteni illegális eszközökkel a magyar kormányt. Az évek alatt a nemzeti egységre rontók a legkülönfélébb módszerekkel álltak elő, hogy ezt az egységet meggyengítsék.",
        genTextB: "A hanyatló nyugati liberális eszmék mellett kiállók azonban nem találnak fogást a magyar szuverenitást megvédő kormánnyal szemben. A magyar kormány elkötelezett és minden eszközzel megvédi az etnikailag homogén társadalmat.",
        genTextC: "A külső fenyegetéseken kívül (az USA kormánya, Soros György) a belső ellenségek (Jobbik, Gyurcsány Ferenc, Momentum, 444, Index, Amnesty International, Transparency International) száma is napról napra nő. Ezek a szervezetek illetve ál-pártok folyamatosan támadják az országot a példátlan gazdasági sikerek miatt.",
        imgRoute: "img/viktor.jpg",
        imgName: "Orbán Viktor, Magyarország miniszterelnöke"
    },
    {
        prec: [1, 2, 2],
        title: "Brüsszel fenyegeti a magyarokat",
        genTextA: "A brüsszeli, Soros által pénzelt bürokraták elhatározták, hogy támadást indítanak a magyarok ellen. A magyar a legszabadabb nép Európában és ez nagyon zavarja Brüsszelt.",
        genTextB: "Jean-Claude Juncker és Martin Schulz már többször is tett magyarellenes kijelentéseket az Európai Parlamentben. Magyarország nem akarja elfogadni, hogy Brüsszel a kormány beleegyezése nélkül telepítene illegális migránsokat az országba.",
        genTextC: "Mikor a HVG, Soros hálózat egyik újságírója megkérdezte Kósa Lajost, hogy vonatkozik-e ránk az a menekültügyi törvény amit a magyar kormány és Orbán Viktor is elfogadott, a képviselő fémkupakokkal dobálta meg a provokátor újságírót.",
        imgRoute: "img/brusszel.jpg",
        imgName: "Brüsszel és a háttérhatalmak, élükön Soros Györggyel mindent megtesznek, hogy romba döntsék az egyre erősödő Magyarországot"
    },
    {
        prec: [1, 2, 3],
        title: "A bevándolrók fenyegetik a magyarokat",
        genTextA: "A migránsok gonoszak. Nem tudhatóak szándékaik és veszélyeztetik a Fidesz 2018 választási győzelmét, ami minden magyarnak érdeke. A balliberális ellenzék, Soros György és Simicska Lajos is szívesen látna agresszív erőszaktevő terroristákat az országban. A magyar gazdaság gyengülésén pedig hatalmas pénzeket akarnak egyszerűen keresni.",
        genTextB: "A Soros-Simicska álcivil provokátor hálózat minden eszközzel igyekszik erőszakos cselekményekre buzdítani az illegális migránsokat. Minden migráns 4-17 munkahelyet vesz el egy magyar állampolgártól, továbbá egy migráns gyermek ellátása naponta 5670 forintjába kerül a magyar adófizetőknek.",
        genTextC: "\”Ennyi pénzből inkább a kórházakat és a stadionokat kéne felújítani, vagy az adócsökkentéseket kéne fedezni\” - nyilatkozta Hoppál Péter. A képviselő szerint semmilyen gazdasági előnnyel nem jár, ha a migránsok idejönnek, és emberi jogi vagy humanitárius kötelezettsége sincs a magyar kormánynak ebben a tekintetben.",
        imgRoute: "img/migrans.jpg",
        imgName: "A háttérhatalmak, élükön Soros Györggyel mindent megtesznek, hogy romba döntsék az egyre erősödő Magyarországot"
    },
    {
        prec: [1, 2, 4],        
        title: "Magabiztosan vezet a Fidesz 2010 óta",
        genTextA: "A rettenetesen megalázó 2010-es vereség után a még megalázóbb 2014-es választások óta se tudta összeszedni magát a balliberális, Soros által pénzelt ellenzék. A Századvég Kutatóintézet legutóbbi mérése szerint bekövetkezett az amit eddig matematikailag is lehetetlennek tartottak: az MSZP népszerűsége negatív tartományba zuhant. Ez azt jelenti statisztikailag, hogy még a halottak még akkor se szavaznának az MSZP-re. ha az azt ígérné, hogy feltámasztja őket.",
        genTextB: "A Momentum 1, a Jobbik 1,1, a DK 1,01, az LMP pedig 0,97 százalékon áll. Mivel a Fodor Gábor vezette Liberálisokat már az összes válaszadó összekeverte a Kétfarkú Kutyapárttal, így a Liberálisokat kivették a kutatásból. Így a Kétfarkúak 0,12 százalékon állnak.",
        genTextC: "Az összes ellenzéki párt támogatottsága így összesen 4,20%, tehát a kormánypártok a választás előtt alig egy évvel 95,8%-on vannak. Semjén Zsolt szerint soha nem akartak még ennyien a Fideszre szavazni. Mikor emlékeztettük Semjén képviselőurat, hogy ő KDNP-s, nem értette miről beszélünk.",
        imgRoute: "img/semjen.jpg",
        imgName: "Semjén Zsolt, KDNP"

    },
    {
        prec: [1, 3, 1],
        title: "Brüsszel fenyegeti a rezsicsökkentést",
        genTextA: "Brüsszel arra készül, hogy a magyar emberektől elvegye az oly nehezen kiharcolt rezsicsökkentést. Összességében eddig Magyarország 23.000 milliárd forintot spórolt a rezsicsökkentésen. Ez azt jelenti, hogy minden magyarnak 2300 milliárd forinttal több maradt a zsebében.",
        genTextB: "\”Nem engedjük, hogy Brüsszel elvegye a rezsicsökkentést\” jelentette ki Németh Szilárd. A rezsicsökkentésért felelős kormánybiztos kérdésünkre elmondta, hogy a következő 12 évben szeretnék a rezsit negatívvá tenni, tehát mennél többet fogyaszt gázt vagy villanyt egy állampolgár, a kizsigerelő és nyerészkedő multiknak annál többet kell majd visszafizetni a fogyasztóknak.",
        genTextC: "Az intézkedés tervezete összhangban van az alaptörvénnyel és az alkotmánnyal, már csak Brüsszel jóváhagyása kell a projektre, amihet a kormány 13.000 milliárd eurós támogatást remél.",
        imgRoute: "img/rezsi.jpg",
        imgName: "A rezsicsökkentést minden rendes magyar megbecsüli"
    },
    {
        prec: [1, 3, 2],
        title: "A Jobbik elvenné a rezsicsökkentést",
        genTextA: "Ha a Jobbik esetleg kormányra kerül 2018-ban az egyik első intézkedésük lesz, hogy a magyar emberektől elvegyék az oly nehezen kiharcolt rezsicsökkentést. Összességében eddig Magyarország 23.000 milliárd forintot spórolt a rezsicsökkentésen. Ez azt jelenti, hogy minden magyarnak 2300 milliárd forinttal több maradt a zsebében.",
        genTextB: "A Jobbik Brüsszel és Soros kottájából játszik mikor megpróbálja a rezsicsökkentés ellen hangolni a párt támogatóit (ez nagyjából 600 embert jelent országosan).",
        genTextC: "A párt már a migránstörvényt sem akarta elfogadni, ezzel nyilvánvalóvá vált, hogy a párt nem a keményen dolgozó magyar kisemberek oldalán áll, hanem Brüsszelt és Soros Györgyöt támogatja. A kormány minden körülmények között meg fogja védeni a rezsicsökkentést.",
        imgRoute: "img/rezsi.jpg",
        imgName: "A rezsicsökkentést minden rendes magyar megbecsüli"
    },
    {
        prec: [1, 3, 3],
        title: "Újra lesz rezsicsökkentés",
        genTextA: "A gazdasági helyzet lehetővé teszi, hogy a kormány újra csökkentse a rezsit, ezúttal a bádogfazekak, fa vágódeszkák és konyhai törlőkendők ÁFA-ját szeretnék csökkenteni.",
        genTextB: "\"Ha a következő 4 évben minden magyar család vesz 2 fazekat, 1 vágódeszkát és 4 törlőkendőt azzal összesen 10⁴² forintot spórolnának meg\" - nyilatkozta Hoffman Rózsa. Mivel ez a magyar GDP  2 761 668 047 500 690 417 011 875 172 604-szerese,  ez felfoghatatlan nagy növekedést tenne lehetővé a magyar gazdaság számára.",
        genTextC: "Az így befolyt pénzzel több terve is terve lenne a kormánynak. Jelenleg a legvalószínűbb forgatókönyv a Hold egy részének gyarmatosítása lenne, mivel az ország kimaradt a 17-19 század közötti gyarmatosításokból.",
        imgRoute: "img/rezsi.jpg",
        imgName: "A rezsicsökkentést minden rendes magyar megbecsüli"
    },
    {
        prec: [1, 3, 4],
        title: "A kormány továbbra is kiáll a rezsicsökkentés mellett",
        genTextA: "A kormány megállapodást szeretne kötni magyar ruha és cipőgyártókkal, hogy kezdjenek el Rezsicsökkentés feliratú pólókat, cipőket, esetleg bögréket és egyéb kiegészítőket gyártani. ",
        genTextB: "\”A magyar rezsicsökkentés ma már olyan mint egy nemzetközi rocksztár. A zenekaros pólók mintájára csinálni lehetne rezsicsökkentéses ruhákat is\” - mondta Németh Szilárd. A rezsicsökkentésért felelős miniszteri biztos az energetikai szektorban dolgozóknak ingyen adná a pólókat mint munkaruhát.",
        genTextC: "Amíg Brüsszel fenyegetést jelent vagy ki nem tör a Harmadik Világháború, a magyar kormány mindenképpen ki fog tartani a rezsicsökkentés melllett.",
        imgRoute: "img/rezsi.jpg",
        imgName: "A rezsicsökkentést minden rendes magyar megbecsüli"
    },
    {
        prec: [1, 4, 1],
        title: "Új stadionnal gazdagodik egy kistelepülés",
        genTextA: "A tiszántúli Gatymagyosfuttán mindössze 201 ember lakik de 50.000 fős stadiont kapnak, hogy fellendüljön a községben a turizmus. Az átadást Tállai András fogja levezényelni. A település néptánc csoportja is meghívást kap az eseményre, hogy az új gyepet egy hagyományos csárdással felavassák.",
        genTextB: "Elviekben bármelyik településen fellendíthető a turizmus ha felépítenek egy stadiont. Így a környező települések és falvak is igénybe tudják venni rendezvényekre vagy meccsekre. Gatymagyosfutta polgármestere már azon is gondolkodik, hogy fociakadémiát alapít a településen, mivel a sógorának fia is nagyon szeret focizni és szerinte tehetséges.",
        genTextC: "A stadiont állami támogatásból építik fel. A projekt kivitelezője a Duna Aszfalt és a Búzakalász 66 Kft. Előzetes számítások szerint az összköltség valahol 4 és 44 milliárd forint között lesz.",
        imgRoute: "img/stadion.jpg",
        imgName: "Ma már minden ötödik településnek van saját stadionja"

    },
    {
        prec: [1, 4, 2],
        title: "Továbbjutott a Felcsút a fociranglétrán",
        genTextA: "A Puskás Akadémia növendékei 1:0-ra verték az észak-timbuktui válogatottat. A szoros mérkőzésen Böde Dániel a 87. percben kicsit a földhöz csapta a bírót, aki emiatt nem látta mikor Kleinheisler László felkapta a kezébe a labdát, beszaladt az ellenfél kapujába, majd egy tűvel kiszúrta a labdát. Mivel a bíró nem fújt szabálytalanságot és pótlabda sem volt, bíró a 91. percben lefújta a meccset.",
        genTextB: "Orbán Viktor a Facebook-on reagált \”Na ugye, megint\” címmel. A poszt alatt egy linket is megosztott, ami egy serleg- és érembolt webshopjára vezet.",
        genTextC: "A magyar utánpótlás nagyon erős, a tegnapi adatok szerint 534 regisztrált profi játékos van, és további 56.421 fiatal várja, hogy helyet kapjon valamely fociakadémián.",
        imgRoute: "img/stadion.jpg",
        imgName: "Mindenki szereti a stadionokat"

    },
    {
        prec: [1, 4, 3],
        title: "Gyurcsány Ferenc és Soros György lebontaná keményen dolgozó magyar kisemberek által felépített stadionokat",
        genTextA: "A gazdaság számára nélkülözhetetlen stadionok lerombolását tervezi az ellenzék. Stadionok nélkül az ország 4 nap alatt csődbe menne, mivel a tao támogatások bent ragadnának az államkasszában.",
        genTextB: "Az elbontások után megmaradt sittből és törmelékből Soros valószínűleg menekültszállókat építene fel Magyarországon, ezzel ösztönözve a terrorista migránsokat, hogy az országba jöjjenek. A kormány legfontosabb feladata az, hogy az ország és Európa határait megvédje. Semmilyen körülmények között nem engedhetjük, hogy a muzulmán hordák elárasszák a kontinenst.",
        genTextC: "Az e héten elfogadott törvénytervezet lehetővé teszi a focistáknak, hogy évi 250 millió forintot is megkeressenek, amivel biztosított a folyamatos pénzáramlás, ami így egészségessé teszi a gazdaságot. Mivel a focisták a Nemzeti Együttműködési Rendszer nagykövetei, kiemelten fontos, hogy megfelelően honoráljuk őket, különben elhagynák az országot.",
        imgRoute: "img/stadion.jpg",
        imgName: "A stadionok jót tesznek az országnak"
    },
    {
        prec: [1, 4, 4],
        title: "A stadionok élinkítik a gazdaságot",
        genTextA: "Csak a focijegy eladásokból származó bevételek elérték a 23.400 forintot ebben a negyedévben. Ha még hozzászámoljuk a szponzoroktól jövő összegeket is akkor ez a szám megugrik 24.445 forintra. A nemzeti focistratégia és infrastruktúra mára a gazdaság egyik legfontosabb húzóágazata lett.",
        genTextB: "Focistánként további 45 forint bevételt remél a Puskás Akadémia. A magyar focisták főként a közel-keleten és az afrikai sivatagok mentén kelendőek. Az Antarktiszi Eszkimók Világszövetsége is bejelentkezett már a fociakadémiához, hogy árajánlatot kérjenek Dzsudzsák Balázsra.",
        genTextC: "Budapest várhatóan pályázik a 2026-os világbajnokság rendezésére. Az eseményhez szükséges egy legalább 75.000 főt befogadni képes stadion. Ezért azt tervezi a kabinet, hogy a fél Balatont kiszárítja, majd a tómederben építi fel a világ legnagyobb sportcsarnokát. Azok a tulajdonosok, akiknek Tihanytól nyugatra van nyaralójuk, ingyen jegyeket kapnak az eseményre.",
        imgRoute: "img/stadion.jpg",
        imgName: "Már Szent Istvánnak is volt saját stadionja"

    },
    {
        prec: [2, 1, 1],
        title: "A kormány kiáll Bayer Zsolt mellett",
        genTextA: "\”Ő legalább tuti nem Soros ügynök\” - nyilatkozta Kovács Zoltán. Bayer legutóbbi kijelentései miatt sok támadás érte a Lovag-keresztes publicistát. A kormány szerint a Soros-hálózat támadásai méltatlanok és mélyen megalázóak. Az USA-ban például ilyen sose történhetne meg, hogy egy, a kormányt támogató civilt így meghurcolnak a nyilvánosság előtt mindössze néhány csúnya szó miatt.",
        genTextB: "Németh Szilárd szerint \”Az vesse az első követ Zsoltira, aki még sose ejtett el egy kósza b*szdmeget vagy egy véletlen >>a tarajos k*rvák taknyában hempergő ügynök-r*banc zsidó anyádat<<-ot\”. A rezsibiztos továbbá megerősítette, hogy sose fogják visszavenni Bayer úr kitüntetését, bármi is történjék.",
        genTextC: "Az eddig visszaadott 111 lovagkeresztet újraolvasztják és fém tolltartókat fognak belőlük csinálni, amit rászoruló gyermekek fognak megkapni. Balog Zoltán szerint \”ebből látszik, hogy minden liberálisok számára rossz dologban, van valami ami a konzervatívoknak jó\”.",
        imgRoute: "/img/kovacs.jpg",
        imgName: "Kovács Zoltán kiállt Bayer Zsoltért"

    },
    {
        prec: [2, 1, 2],
        title: "A kormány megvédelmébe veszi az új Hungarikumokat",
        genTextA: "A migránsok egyre több hungarikumot akarnak elvenni a magyaroktól. Mivel afrikában és a Közel-Keleten nincsenek regisztrált hungarikumok, a migránsok útra keltek, hogy elvegyék tőlünk a hungarikumokat. A migrációs katasztrófa kitörése óta egyes számítások szerint már 1,316,678 hungarikumot vittek el tőlünk a migránsok.",
        genTextB: "A rendőrség a következő hónaptól elkezdi a rendvédelmi alkalmazottakat kiképezni, a hungarikumok szakszerű felismerésére és a migránsoktól való visszavételre. A honvédség és a titkosszolgálatok is új alosztályokkal bővülnek, Semjén Zsolt pedig a jövő héten kinevezi a kiemelt hungarikumvédelmi miniszteri biztost.",
        genTextC: "A kormány egy új, többsebességes hungarikum rendszerben is gondolkodik, aminek az alsóbb szintjein az őshungarikumok lennének, az értékpiramisban fejjebb haladva pedig az újonnan regisztrált hungarikumok (rendszerszintű adó- és áfacsalás, közpénz bulémia, Soros-kór, melanóma, stb) kapnának helyet.",
        imgRoute: "/img/viktor.jpg",
        imgName: "Orbán Viktor kiáll a hungarikumokért"

    },
    {
        prec: [2, 1, 3],
        title: "Kormány: A kaszinótörvény sikeres",
        genTextA: "A költségvetésbe csak 2017 májusában 732,478 forint adó folyt be a kaszinókból. Varga Mihály nemzetgazdasági szempontból kiemelten fontos kategóriába sorolta a kaszinókat, így biztosítva a további növekedési potenciált.",
        genTextB: "Csizmadia László egy Békemenetet tervez, hogy biztosítsák a kormányt a támogatásukról a kaszinók kapcsán. Bencsik András pedig a Demokratában fogja kiemelt helyen reklámozni a kaszinókat, mivel szerinte kiemelten fontos, hogy eljusson az emberekhez a világszinten is jól teljesítő magyar kaszinók híre.",
        genTextC: "A területért felelős új miniszteri biztos, L. Simon László lesz, megpróbáltuk keresni az ügyben, de sajnos vesekővel kórházba került. Mikor megpróbáltunk bejutni a kórterembe, egy zavart fiatalemberbe botlottunk aki éppen ollót, kötszert és fertőtlenítőt keresett a kórházban. Miután nem talált, elment hányni a mosdóba ahol nem tudta megtörölni az arcát, mivel nem volt vécépapír. Ezután a nővérek azzal próbálták megnyugtatni, hogy leültetik és megmérik a vérnyomását de a készülékben nem volt elem. Ezen úgy feldühödött, hogy helyben agyvérzést kapott. Miután a váróban rángatózva haldoklott, egy orvos szaladt fel egy szintről lejjebb, hogy kéretik abbahagyni a rángatózva haldoklást, mert lent a traumatológián belehullik a beteg beleibe a vakolat. A férfi két perc múlva meghalt, de a holttestet tévedésből a szemészetre vitték át a patológia helyett, ahol egy szemész 15 percen keresztül vizsgálta. Végül egy másfél dioptriás szemüveget írt fel neki, majd a nővérek kirakták a testet a szemközti játszótér mellé. Negyed óra múlva a játszótér mellett egy idős férfi hívta a rendőröket, mivel a \”migráns foglalja a helyet a kuka mellett, és a kutyám Morzsi nem tud odapisilni\”.",
        imgRoute: "/img/vajna.jpg",
        imgName: "Andy Vajna, kaszinó- és filmügyi kormánybiztos"

    },
    {
        prec: [2, 1, 4],
        title: "A kormány megvédi a keresztény értékeket (boszorkányégetések, megkövezés, tudománytagadás és gyerekverés/botozás)",
        genTextA: "A keresztény vallásúakat üldözik ma a legjobban a világon, Magyarország pedig szeretne a legkeresztényvédőbb ország lenni. A világ keresztényeinek védelmére a kormány 342 000 milliárd forintot különít el a jövő évi költségvetésből.",
        genTextB: "Orbán Viktor szerint kiemelten fontos a Kárpát-medence vallási, etikai és etnikai homogenitás megőrzése. Ha hagyjuk, hogy Brüsszel a fejünk felett próbálja megmásítani kultúrális gyökereinket, azzal elvesztjük emberi mivoltunkat.",
        genTextC: "A kormány tervezi továbbá, hogy biztonsági okokból az egyes vallási felekezetek tagjai csak a saját vallásuknak megfelelő templomokat látogathassák. \”Képzelje el ahogy egy rabbi húsvétkor a maceszt meregeti a szenteltvízbe, közben egy müezzin pedig az oltár mellett imádkozik a torinói leplen. Ugye milyen abszurd?\” - teszi fel a kérdést Balog Zoltán.",
        imgRoute: "/img/balog.jpg",
        imgName: "A kormány kiáll a keresztényekért"

    },
    {
        prec: [2, 2, 1],
        title: "Nem jön több migráns az országba",
        genTextA: "A kormány sikeres védelmi stratégiája miatt a migránsok mára elkerülik a magyar határszakaszt. Az új célország Csecsenföld lett. A migránsok szerint az ottani helyzet jóval emberbarátabb mint Magyarországon.",
        genTextB: "Az illegális határátlépőkhöz és terroristákhoz is eljutott a hír, hogy Magyarország erős és büszke európai ország, így már nekik nem vonzó célpont. A migránsok a gyenge kormánnyal bíró országokat szeretik, ahol no-go zónákat tudnak kialakítani.",
        genTextC: "A fizikai határzár viszont mindenképpen marad, mivel a délről érkező egyéb gazdasági bevándorlókat is távol kell tartani az országtól. A magyar gazdaságnak jelenleg nincs szüksége több humánerőforrásra.",
        imgRoute: "/img/migrans.jpg",
        imgName: "Nem fogunk egy ideig ezzel a látvánnyal találkozni"

    },
    {
        prec: [2, 2, 2],
        title: "AZ IMF megdícsérte az ország gazdaságpolitikáját",
        genTextA: "A Nemzetközi Valutaalap (IMF) kiadott egy tanulmányt amiből kiderül, hogy Magyarországon az idén 2,9 százalék, jövőre pedig 3 százalék lesz a növekedés. A pénzintézet emellett a korábbi előrejelzések szerinti az 1,9 százalékos éves inflá­ciót 2,5 százalékra módosította. Ez az érték jövőre valószínűleg eléri a 3,3 százalékot, ami még a Magyar Nemzeti Bank (MNB) 3,0 százalékos célját is felülmúlja.",
        genTextB: "A jelentésből kiemelendő, hogy a megbízható üzleti környezet a kiszámítható gazdaságpolitikán, a korszerű szabályzáson és az átlátható állami pénzelosztáson alapszik.",
        genTextC: "Mivel a fejlett régiókban a forgalom idén 2,0 százalék volt, megállapítható, hogy a magyar gazdaság világszínvonalon teljesít.",
        imgRoute: "/img/imf.jpg",
        imgName: "Elismerik a magyar gazdasági sikereket"
    },
    {
        prec: [2, 2, 3],
        title: "Nem szólnak be többet a brüsszeli bürokraták",
        genTextA: "Szíjjártó Péter úgy kiosztotta a sivalkodó EP képviselőket egy zárt tárgyaláson, hogy azok nem mertek többet kérdezősködni az ország állapotát illetően. A brüsszeli képviselők nem tudtak mit kezdeni a hírhedt dunakeszii virtussal. A forint a hírre szárnyalt, egy forintért délután 750 eurót is adtak.",
        genTextB: "A következő ülésre a Betyársereget, a Magyar Gárda maradékát és a Provokátorfigyelőket küldi a külügyi kabinet, látván a nem konvencionális tárgyalási módszertan hatékonyságát. Az őszi ülésszak alatt szeretnénk elérni, hogy minden tagállam magyar felzárkózási különadót fizessen, a németek a megtermelt villamosenergia 75 százalékát adják oda valamint a francia bortermelés egytizedét einstandoljuk.",
        genTextC: "\”Mivel honfoglaló őseink már a 800-900-as években rájöttek, hogy Európát egyszerűbb lerabolni néha, mint szövetkezni vele, mi is ezt a taktikát fogjuk követni az elkövetkezendő években\” - mondta Matolcsy György. A magyarokban genetikailag kódolt a kalandozás, ösztönösen emlékszünk arra, hogy kell hátrafelé nyilazni vagy dupla tigrisbukfenccel jurtából felkelni.",
        imgRoute: "/img/brusszel.jpg",
        imgName: "Brüsszel becsicskult"

    },
    {
        prec: [2, 2, 4],
        title: "Nincs többé szükség nyugati tőkére",
        genTextA: "A magyar kormány sikeres adóreformjai segítettek abban, hogy a magyar gazdaság teljesen függetlenedjen a brüsszeli tőkétől. A feldolgozóipar és a szolgáltatói szektor együttes megerősödése miatt ma már minden munkavállaló magasabb bérért dolgozik mint 2010 előtt.",
        genTextB: "Orbnán Viktor \”a legnagyobb magyar teljesítménynek\” nevezte az elmúlt 7 év intézkedéseivel elért eredményt. Miközben folyamatosan emelkednek a bérek és a juttatások, a foglalkoztatottság negatívba fordult, majdnem minden második magyarnak két állása is van. Emiatt a fogyasztás is hatalmas mértékben tudott nőni.",
        genTextC: "A belső növekedés ösztönzése jobban megéri Magyarországnak, mivel így nem kell alkalmazkodni a brüsszeli bürokraták feltételeihez és az IMF kizsákmányoló igényeihez. Varga Mihály kapta a feladatot, hogy az évtized végéig a magyar busz- és motorvonat gyártás lenyomja a németet.",
        imgRoute: "/img/gazdasag.jpg",
        imgName: "A magyar gazdaság jobban teljesít mint a bármelyik nyugati országé"

    },
    {
        prec: [2, 3, 1],
        title: "Újabb orosz beruházások",
        genTextA: "Az orosz Omsk Transmashstrat tank- és harckocsigyárat készül építeni a dél-alföldi területen. A beruházás közel 3 millió magyarnak adna munkát.",
        genTextB: "Orbán Viktor az évszázad beruházásának nevezte a projektet, ami nem csak a foglalkoztatottságot növeli, de mivel minden 25. tankot a magyar honvédség kapja, az ország hadserege is ütőképesebb lesz.",
        genTextC: "A beruházáshoz 3x5500000km2 alapterület szükséges, amihez néhány iskolát és kórházat át kell telepíteni máshová, egyes esetekben az országhatáron kívülre. De mivel minden tankgyárban lesz üzemorvos, ez az egészségügyi ellátásra nem lesz negatív hatással.",
        imgRoute: "/img/orosz.jpg",
        imgName: "Az új gazdasági lehetőségeket mostantól keleten kell keresni"

    },
    {
         prec: [2, 3, 2],
        title: "Szíjjártó Péter gazdasági megállapodásról tárgyalt a krigiz miniszterrel",
        genTextA: "A külgazdasági államtitkár a világ egyik legnagyobb arany és helikopter exporttőrével állapodott meg. A kettős megállapodás szerint a magyar fél textilárut ad el Kirgizisztánnak, amiért cserébe aranyat és repülőgépalkatrészeket kap.",
        genTextB: "A kirgiz export 2015-ben 1,29 milliárd dollár volt és 4,67 milliárd értékben exportált. Ez nagy lehetőséget jelent a magyar gazdaságnak.",
        genTextC: "A megállapodást Pakson fogják aláírni négy nap múlva. Az aláíráson jelen lesz Erdő Péter bíboros, hogy áldását adja a szerződésre. A KDNP 37,9 millió forint értékben készül ajándékokat adni a kirgiz delegációnak.",
        imgRoute: "/img/szijjarto.jpg",
        imgName: "Kirgizisztán lehet a legfontosabb gazdasági partner"

    },
    {
         prec: [2, 3, 3],
        title: "A kormány felcsút polgármesterét bízta meg az M645 autópálya építésével",
        genTextA: "Az új autópálya ami Felsőszölnököt fogja összekötni Magosligettel rengeteg magyar alvállalkozónak fog munkát adni. Az építkezés körülbelül 5 hónapot fog igénybe venni, ha sikerül megállapodni a kínai vendégmunkások beengedéséről.",
        genTextB: "A pályának lesz egy 75 km-es szakasza ami a Balaton alatt fog futni egy alagútban. Tűzvédelmi szempontból ez a tervezőknek viszonylag nagy terhet vesz le a válláról, mivel egy esetleges tűz esetén csak egy kis vizet kell leengedni a tóból.",
        genTextC: "Az Európai Unió háromszázhatvankettő forinttal támogatja a beruházást. A többi költséget Vas és Szabolcs-Szatmár-Bereg megye önkormányzatai állják. A költségvetési terveket némiképp módosítani kell, hogy biztosítva legyenek a források, a fejlesztésekért felelős államtitkár szerint előfordulhat, hogy az említett megyék kórházaiban nem tudják majd fizetni a számlákat vagy a béreket, de ezekben a megyékben amúgy sincs sok beteg.",
        imgRoute: "/img/autopalya.jpg",
        imgName: "Az új magyar autópálya világhírű lesz"

    },
    {
        prec: [2, 3, 4],
        title: "Új kereskedőház nyílik két keleti országban",
        genTextA: "Szíjjártó Péter külgazdasági államtitkár sikeres tárgyalásokat folytatott a bangladesi és a mianmari vezetőkkel. Kiderül hogy ebben a két országban hatalmas az érdeklődés a magyar termékek és szolgáltatások iránt.",
        genTextB: "Előrejelzések szerint a kereskedőházak egyenként 100 millió forint bevételt hoznak majd a következő 40 évben. A fenntartási költségek felét a célország, míg a másik felét a magyar állam adja, ez a magyar fél részéről évente körülbelül 4000 milliárd forintba fog kerülni.",
        genTextC: "\”Nagyon jó üzletet sikerült kötnünk, bízom benne, hogy még az ükunokáink életére is kihatással lesz ez az üzlet\” nyilatkozta az államtitkár. ",
        imgRoute: "/img/szijjarto.jpg",
        imgName: "Az újabb kereskedőházak bizonyítékként szolgálnak a magyar gazdaság fejlődését illetően"

    },
    {
        prec: [2, 4, 1],
        title: "A kormány emeli a társasági adót, amivel egy nagy adócsökkentést készít elő",
        genTextA: "A kormány emeli 2017 második felétől a társasági adókulcsot. Az emelés nem érinti az egynél kevesebb alkalmazottat foglalkoztató cégeket, valamint mentesülnek a fizetés alól a kétmilliónál több munkavállalóval rendelkező cégek. A gazdasági tárca számításai szerint 754 ezer milliárd forint adóbevétel fog befolyni az államkasszába. A kormány az így keletkező többletből szeretné tovább csökkenteni a rezsit.",
        genTextB: "\”Eljött az ideje, hogy minden cég egyenlő feltételekkel és átláthatóan adózzon\” - mondta Orbán Viktor. Az új adó bevezetésének előkészítésével L. Simon Lászlót bízták meg.",
        genTextC: "Európában habár rekordmagas lesz az új adó, ez is csak azt igazolja, hogy a cégek készek több pénzt befizetni a közösbe mivel egyre hatékonyabban tudnak termelni és egyre több nyereséget tudnak felmutatni. Számos magyar kis- és középvállalkozás üdvözli a tervet.",
        imgRoute: "/img/varga.jpg",
        imgName: "További adócsökkentések jönnek"

    },
    {
        prec: [2, 4, 2],
        title: "Orbán Viktor a legnépszerűbb magyar egy világranglistán",
        genTextA: "A Világ Magyarjai Világranglistáján Orbán Viktor miniszterelnök a legnépszerűbb. A miniszterelnök várhatóan az elkövetkező 10 évben is megnyeri a címet.",
        genTextB: "A lista legalján található a két bukott szocialista miniszterelnök Gyurcsány Ferenc és Bajnai Gordon. Egyik ellenzéki balliberális politikus se jutott be a legjobb 100 közé. A listán a második helyet Semjén Zsolt szerezte meg, szorosan mögötte pedig Rogán Antal a harmadik.",
        genTextC: "Orbán Viktor nem csak egy ranglistán lett első, az idén először összeállított \”Kisnövésű politikusok akik autoriter és elnyomó rendszert építenek ki országukban\” elnevezésű tabellán is az első helyet sikerült megszereznie. Szorosan követi Vlagyimir Vlagyimirovics Putyin és Recep Tayyip Erdoğan. Különdíjas lett Donald Trump a kicsi kezei miatt.",
        imgRoute: "/img/viktor.jpg",
        imgName: "Orbán Viktor, a legnépszerűbb magyar politikus a honfoglalás óta"

    },
    {
        prec: [2, 4, 3],
        title: "Emelkedik a magyar államháztartás hiánya, emiatt újabb adócsökkentések vannak kilátásban",
        genTextA: "A kormány újabb adócsökkentésekre készül, mivel folyamatosan emelkedik az államháztartási hiány. Az államháztartási hiány egy nagyon bonyolult dolog, így cikkünkben sajnos nem tudjuk bővebben kifejteni, hogy miért is jó ha ez az érték magas.",
        genTextB: "Orbán Viktor megbízta Matolcsy Györgyöt és Varga Mihályt az újabb adócsökkentések kidolgozására. A szakértői csoportba egy új pénzügyi elemző céget bíztak meg, amit a múlt héten alapított Mészáros Lőrinc. A felcsúti polgármester gázszerelésben szerzett tapasztalatai kimelkedően hasznosak lehetnek egy ilyen cég vezetésében.",
        genTextC: "Ahogy arról korábban is írtunk, az államháztartási hiány kontrollálatlan volt a szocialista kormányok idejében, és folyamatosan növelték az adókat, elvették a nyugdíjakat és a családi adókedvezményeket. Több elemző szerint erre is Soros György kérte őket.",
        imgRoute: "/img/gazdasag.jpg",
        imgName: "Dübörög a magyar gazdaság"

    },
    {
        prec: [2, 4, 4],
        title: "A kormány az összes fizetést megemeli",
        genTextA: "\”Mindenkinek a bére emelkedik akik havi nettó 1.000.000 felett vagy 25.000 alatt keresnek\” mondta Varga Mihály. A miniszter mindenkit biztosított, hogy a fizetések emelése szinte az összes magyar embert érinteni fogja. További intézkedésről vagy az érintett szervezetekkel való egyeztetésekről nincs hír, de az államtitkár kiemelte, hogy ebben az esetben egyeztetésre nincs is szükség, mivel az intézkedés haszna teljesen egyértelműen belátható.",
        genTextB: "Azok akik az emelés ellen vannak csupán a magyar emberek életét akarják megnehezíteni, semmi nem indokolja, hogy a tervezetet ne szavazza meg a parlament.",
        genTextC: "\”Én nem akarok sok pénzt keresni\” sivalkodik egy ellenzéki politikus. A szocialista kormányok idején a minimálbér 88.000 forint volt míg ma 112.000 forint. Infláció természetesen azóta nincs, így a fizetések egy fillért sem vesztettek a reálértékükből.",
        imgRoute: "/img/varga.jpg",
        imgName: "Orbán Viktor is támogatja a fizetésemeléseket."

    },
    {
        prec: [3, 1, 1],
        title: "Soros György áll a globális felmelegedés mögött",
        genTextA: "Soros György az általa pénzelt alapítványokon keresztül próbálja meg befolyásolni Európa időjárását.",
        genTextB: "A multimilliárdos időjárásmódosító gépeket valamint egy óriási szarvasmarha farmot vásárolt az idén. Ezek segítségével próbálja meg a kontinens éghajlatát megváltoztatni, hogy minnél több migránst tudjon az unió területére behozni. A migránsok pedig tovább emelik az átlaghőmérsékletet miután bejutottak az EU határain belül.",
        genTextC: "Mivel az USA a párizsi klímaegyezményből való kilépést tervezi, emögött is feltehetően a filantróp üzletember áll. Elemzők szerint már a font bedöntése is ezzel hozható összefüggésbe.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György, aki több állam működésébe is próbált közvetlenül beavatkozni"

    },
    {
        prec: [3, 1, 2],
        title: "Soros György terroristákat telepítene Európába, de főleg Magyarországra",
        genTextA: "Az orosz titkosszolgálat Soros Gyögy személyi számítógépén talált dokumentumokat, amik részletes terveket tartalmaznak arról, hogy akarja a milliárdos terroristákkal elárasztani Európát.",
        genTextB: "Az iratokat a magyar hatóságok is ellenőrizték, de mivel az Adobe Acrobat Reader-t senki se tudta a 10-es verzióra frissíteni, ez kicsit lassította az elemzést. Egy tolmácsot is be kellett hívatni, mivel a testület 97%-a nem beszél semmilyen idegen nyelvet.",
        genTextC: "Végül a hosszas elemzés, amelyet a Pallas Athéné alapítványok támogattak, ugyanarra a következtetésre jutott, mint az eredeti tanulmány: Soros György hazug ügynökszervezeteken és csicskapártokon keresztül akarja a nemzetállamok politikáját olyan irányba vinni, hogy minnél több migráns tudjon bejutni a kontinensre.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György, aki több állam működésébe is próbált közvetlenül beavatkozni"

    },
    {
        prec: [3, 1, 3],
        title: "Soros György álcivileket és álpártokat pénzel",
        genTextA: "Az amerikai spekuláns működteti többek között a 444, az Index, a HVG, a Népszabadság és a Hírcsárda híroldalakat. Aggasztó méreteket ölt a balliberális média befolyása.",
        genTextB: "A nyíltan bevándorláspárti, a meleglobbi mellett kiálló, a magyar szuverén értékekkel szembenálló és a magyar gondolkodásmóddal nem összeegyeztethető értékeket valló híroldalak fenyegetik a Nemzeti Együttműködés Rendszerét. Soros György így próbálja meg a társadalom alapjaiban a széthúzást erősíteni.",
        genTextC: "A kormány rendkívül fontosnak tartja, hogy a médiumok és civil szervezetek átláthatóan működjenek, ezért a civiltörvény elfogadása létfontosságú. Mivel a kormány álláspontját képviselő és közpénzből gazdálkodó szervezeteknél fel sem merül, hogy saját gondolatokkal próbálják a közvélemény rálátását bővíteni, így ezek mentesülnének a civil törvény hatálya alól.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György, aki több állam működésébe is próbált közvetlenül beavatkozni"

    },
    {
        prec: [3, 1, 4],
        title: "Soros György megpróbálta befolyásolni Orbán Viktort",
        genTextA: "\"A multimilliárdos fizette azt az ösztöndíjat, amivel a magyar miniszterelnök Oxfordban tudott egy szemeszter idejéig tanulni. Ezzel nyilvánvalóan a filantróp agitátor befolyása alá került\” nyilatkozta egy ellenzéki politikus. Mivel ennyi idő bőségesen elég volt arra, hogy a miniszterelnök ideológiáját megmásítsák, ez így nemzetbiztonsági kockázatot jelent.",
        genTextB: "Havasi Bertalan, a miniszerelnök sajtófőnöke egy gyönyörű kézzel és lúdtollal írt levelet küldött a politikusnak, amiben emlékezteti, hogy Orbán Viktor élt a kommunizmus alatt, mégse lett kommunista, valamint látott már galambot is, ennek ellenére nem szeret kenyeret csipegetni a földről.",
        genTextC: "Soros György, aki egy „maffiaállamnak” titulálta Magyarországot 24 milliárd dolláros vagyont spekulált össze, magát pedig a nyitott társadalom alapítójának tekinti.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György, aki több állam működésébe is próbált közvetlenül beavatkozni"

    },
    {
        prec: [3, 2, 1],
        title: "Soros György a keresztény értékrend bomlasztásán dolgozik",
        genTextA: "Balog Zoltán múlt héten ellátogatott a CEU kampuszára ahol hihetetlen dolgokat tapasztalt. A hallgatók tantervében nem szerepel kötelező tárgyként a hittan és a bibliai alapismereteket sem kérik számon az egyetemre jelentkezésnél.",
        genTextB: "\”Magyarországon nincs szükség olyan oktatási intézményre, amely nem ad semmiféle hitéleti alaptudást az ott tanulóknak. Mindent megteszünk annak érdekében, hogy az országban minden egyetem, gimnázium vagy általános iskola alaptantervében legyen legalább egy vallásos kötődésű tárgy\” - mondta az emberi erőforrások minisztere.",
        genTextC: "A Soros-egyetem a magyar törvényeket megszegve folytat oktatási tevékenységet Budapesten, és a jelenlegi tárgyalások alapján ezen a törvényszegő magatartáson nem is szándékozik változtatni. Az egyetem rektora szerint ha a Soros által alapított és finanszírozott egyetemet bárki támadja, az szimplán antiszemitizmus.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György nem keresztény"
    },
    {
        prec: [3, 2, 2],
        title: "Soros György elpusztítaná Magyarországot",
        genTextA: "Soros idén nyáron több fronton is támadást indított Magyarország ellen. Brüsszelben a pénzelt bürokraták és képviselők, idehaza pedig az álcivil provokátorszervezetek próbálják a kormányt ellehetetleníteni. A küzdelem sajnos nem egyenlő erőviszonyokkal folyik, de a magyar kormány eddig képes volt erején felül teljesíteni.",
        genTextB: "Soros Györgyöt kivételezettként fogadták múlt hónapban az európai parlamentben, míg Orbán Viktort ugyanitt egyfolytában támadták az ország bevándorlási politikája miatt. A parlamenti ülésen a magyar miniszterelnök többször is kiemelte, Magyarország nem csak a saját, de Európa határiat is védi, emiatt pedig semelyik tagállam nem elég hálás az országnak. Orbán Viktor szerint nem kapunk elég pénzbeli támogatást a migrációs krízis kezelésére, tavaly is mindössze három stadion építései kezdődtek meg, valamint csak 5 fideszes képviselő házát tudták felújítani uniós pénzekből.",
        genTextC: "A korlátlan bevándorlást támogatók szerint Magyarország lábbal tiporja az emberi jogokat és semmibe veszi a nemzetközi szerződésekből eredő kötelezettségeit. Semjén Zsolt ellenben úgy véli, nem lehet emberi jogokról beszélni, mikor migráns hordák fenyegetik az európai keresztény kultúrát, ezzel gyakorlatilag az egész világot.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György, aki több állam működésébe is próbált közvetlenül beavatkozni"
    },
    {
        prec: [3, 2, 3],
        title: "Soros György leigázza a világot",
        genTextA: "Valamennyi ország kormányában már felmerült Soros György neve, ám nem mint valami jótevő vagy befektető, sokkal inkább mint egy potenciális ellenség. Soros bármelyik ország ellen támadást indít, ahol a balliberálisoknak, migránsoknak vagy melegeknek nincsenek előjogaik a normális állampolgárokkal szemben.",
        genTextB: "Soros György szerint a világ úgy lesz jobb hely, ha a muzulmán férfiak keresztény nőket erőszakolnak meg, akik így félvér gyerekeket hoznak a világra, ezzel növelve a kultúrális és etnikai homogenitást. Soros végcélja feltehetően az, hogy a szuverén nemzetállamok kultúráját egy univerzális és mesterséges kultúra váltsa fel, ahol a hozzá hasonló filantróp üzletemberek mindenfajta felső korlát nélkül tudják az állampolgárokat kiszipolyozni és szolgasorba dönteni.",
        genTextC: "Soros fő fegyvere ehhez az ördögien összetett és ravasz tervhez a migráció. Minden eszközzel próbálja a migránsokat Európába juttatni, hogy azok minél nagyobb káoszba taszítsák a kontinens országait. Ezért volt szükséges az idei nemzeti konzultáció, hogy a keresztény magyar társadalom biztosítsa a kormányt a feltétel nélküli támogatásáról a Soros György elleni küzdelemben.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György, aki több állam működésébe is próbált közvetlenül beavatkozni"
    },
    {
        prec: [3, 2, 4],
        title: "A Soros-hálózat leleplezése",
        genTextA: "Soros György egy komplett álhírterjesztő hálózatot épített ki az évek alatt. A dezinformáló gépezetet központilag irányítja, a szerkesztett híreket a 444-hez vagy az Indexhez hasonló ultraliberális portálokon keresztül terjesztik, az álcivil-, rosszabb esetben provokátorszervezetek pedig közvetlenül próbálják az ország kormányát politikailag negatív színben feltüntetni.",
        genTextB: "Soros György maffiaszerű hálózata nemcsak a médiában és a politikai életben tevékenykedik, övé jónéhány bank, pláza, pék, egyetem, nyomtatószervíz, autókereskedés, világítástechnikai szaküzlet, sarki vegyesbolt, farm, fodrász és műszaki áruház is. Ezeken keresztül próbálja a polgárság politikai beállítottságát és fogyasztási szokását befolyásolni.",
        genTextC: "A Pesti Srácok újságírója, Jurák Kata kiment az egyik Oktogon foglalásra, ahol bedrogozott, részeg és erőszakos fiatalokkal találkozott akik goa és psytrance zenére verették körülbelül hajnal kettőig. A \”nemzeti goa\”-t skandáló tömeg nagyon fiatal volt, az átlagéletkor nem érte el a huszonkettő évet. A nemzeti goa Jurák szerint egy megcsúfolása a Nemzeti Együttműködés Rendszerének. Mivel az eseményen résztvevők Soros által pénzelt szervezetekhez köthetőek, az Oktogon elfoglalásával jó eséllyel hazaárulást követtek el. Mikor mindenki kijózanodott és elmúlt a drogok hatása, a tüntetők hazamentek.",
        imgRoute: "/img/soroshalozat.jpg",
        imgName: "Soros György fizette a tüntetők repülő- és buszjegyeit"
    },
    {
        prec: [3, 3, 1],
        title: "Soros György megpróbálta bedönteni a forintot",
        genTextA: "A multimilliárdos egyszer már sikeresen bedöntötte az angol fontot, most a sokkal értékállóbb valutára, a forintra támadt rá.",
        genTextB: "A támadásnak valószínűleg köze van a Matolcsy György által sokat emlegetett és egyértelműen bizonyított amerikai pénzügyi beavatkozáshoz. Mint ismeretes, a nyugati szövetségesünk többször is puccsot  kísérelt meg a a magyar kormány ellen a gazdaságon és a pénzügyi szektoron keresztül. A jegybankelnök éberségének hála egyszer sem jártak sikerrel.",
        genTextC: "Soros György, aki egy „maffiaállamnak” titulálta Magyarországot 24 milliárd dolláros vagyont spekulált össze, magát pedig a nyitott társadalom alapítójának tekinti.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György, aki több állam működésébe is próbált közvetlenül beavatkozni"

    },
    {
        prec: [3, 3, 2],
        title: "Soros György pénzelte Macront?",
        genTextA: "Soros György is támogatta Macron kampányát, egyes források szerint pedig Macron egyenesen Soros új európai bábja.",
        genTextB: "A francia elnökválasztás során több helyről is érkeztek bejelentések, hogy \”I stand with CEU\” kitűzős fiatalok házaltak Macron kampányanyagaival. A centralista politikus támogatói között több Soroshoz köthető embert és szervezetet is találhatunk.",
        genTextC: "Akárcsak Soros, Macron is támogatja a bevándorlást. Terroristák ezreit szeretnék betelepíteni Európába, hogy ezzel is gyengítsék a nemzetállamok erejét és gazdaságát. A muszlim vallású migránsok tömege a kereszényekre is fenyegetést jelent. Mivel a Fidesz-KDNP frakcióban is 17 magát kereszténynek valló képviselő ül, ez rájuk is nagy veszélyt jelent. ",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György beavatkozik a francia választásokba"

    },
    {
        prec: [3, 3, 3],
        title: "Soros György maffiaszervezeteken keresztül akarja Európát befolyásolni",
        genTextA: "A multimilliárdos szerint Európát ellenségek fenyegetik, mint a Putyin vezette Oroszország, az Erdogan államfő által irányított Törökország és az Egyesült Államok, amelyet Donald Trump kíván kivezetni a gödörből.",
        genTextB: "Soros György, aki egy „maffiaállamnak” titulálta Magyarországot 24 milliárd dolláros vagyont spekulált össze, magát pedig a nyitott társadalom alapítójának tekinti.",
        genTextC: "A bevándorláspárti agitátor a nemzetek szuverenitását próbálja aláásni, és ezzel egyidejűleg az általa finanszírozott civil szervezetek próbálják az ő politikai céljainak megfelelően átalakítani Európát.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György, aki több állam működésébe is próbált közvetlenül beavatkozni"
    },
    {
        prec: [3, 3, 4],
        title: "Soros György shortolta a kenyér árát",
        genTextA: "Az erkölcstelenül üzletelő és pofátlan módon meggazdagodott ál-üzletember hadat üzent a magyar kenyér árának. A kormány nemrég elfogadott, a kenyéripart szabályozó rendelete miatt a Soros György által pénzelt ál-pékek a jövőben nem tudják majd kenyérként árulni a nem keresztény eredetű kenyereket, így a bevándorláspárti álcivil szervezetek jelentős bevételi forrásoktól esnek el.",
        genTextB: "Ezért Soros György tegnap elkezdte shortolni a magyar kenyér árát, hogy a nem keresztény és nem magyar kenyerek ára versenyképes maradjon. A tőzsdepánik miatt ma reggel a kenyér árfolyama 420 forint volt, délutánra ez 418,2 forint körül stabilizálódott.",
        genTextC: "A migránsok által fogyasztott kenyér jóval gyengébb minőségű mint a magyar kenyér. Színe sokkal fakóbb, kovászt nem tartalmaz és sótartalma közel nulla. Soros György a Nemzetközi Kreplach Fesztiválon mondott beszédet, amiben a nem keresztény kenyereket próbálta népszerűsíteni.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György, aki több állam működésébe is próbált közvetlenül beavatkozni"

    },
    {
        prec: [3, 4, 1],
        title: "Soros György pénzelte az olimpiaellenes kampányt",
        genTextA: "Immáron bizonyos, hogy a multimilliárdos irányította a Momentum és LMP olimpiaellenes aláírásgyűjtő kampányát.",
        genTextB: "Kiderült, hogy Soros György finanszírozta az ellenzék által levezénylet aláírásgyűjtést. Az állam közel 1300 milliárd eurós támogatástól esett el, mikor vissza kellett vonni az olimpiai pályázatot. Ebből a pénzből akár 23 kórházra, 4 autópályára, 12 metróra és 40 focistadionra futotta volna.",
        genTextC: "Újabb bizonyíték, hogy Soros ezeken a maffiaszerűen működő szervezeteken keresztül akarja a kormány minden lépését gátolni. A NOlimpia kampány elemzők szerint csak erőfelmérés volt az ellenzék részéről, hogy a 2018-as választásokra listákat tudjon készíteni a lehetséges szavazókról. Mivel csak kb 200.000-en írták alá a kezdeményezést, az ellenzék durva bukásra számíthat majd 2018-ban.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György, aki több állam működésébe is próbált közvetlenül beavatkozni"

    },
    {
        prec: [3, 4, 2],
        title: "Soros György megölt volna egy anyát",
        genTextA: "Meg nem erősített hírek szerint az FBI egy nyomozás során közvetett bizonyítékot talált arra, hogy Soros György egy édesanya meggyilkolását készítette elő 2017 áprilisában. Az amerikai hölgy nyilvánosan bírálta a bevándorlásellenes csoportokat, valószínűleg ez volt Soros indítéka.",
        genTextB: "A legfőbb ügyész a nyomozás korai stádiumára hivatkozva nem árult el többet, ám azt kijelentette, hogy \”a Soros György érintettségével kapcsolatos híresztelések alaptalanok\”, ezzel félig elismerve, hogy Soros ártatlansága nem bizonyított. A nyomozóiroda egyik munkatársa sem tagadta, hogy Sorosnak köze lett volna az ügyhöz.",
        genTextC: "Soros György a saját anyját is szívesen a halálba küldte volna, így ez az ügy nem teljesen meglepő. Soros viszonya a szüleivel feltehetőleg nem volt felhőtlen, ezért alakulhatott ki benne gyűlölet az anyák iránt.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros Györgynek eddig sikerült elkerülnie a felelősségre vonást"
    },
    {
         prec: [3, 4, 3],
        title: "Soros György lebontaná a Turul szobrot",
        genTextA: "A multimilliárdos szerint a tatabányai Turul-emlékmű nyíltan antiszemita, és emiatt nem állítható ki nyilvános helyen. Európa legnagyobb bronzból készült madárszobra ma már a tatabányai látkép legmeghatározóbb része.",
        genTextB: "A kora középkorban előszeretettel használt díszítő motívum a magyarság egyik jelképe, nyilván ezért pécézte ki magának Soros György, hogy eltüntesse. ",
        genTextC: "Soros György magyarellenessége nem újkeletű, több konkrét intézkedésével is próbálja a magyarok nemzetközi megítélését rontani, viszont az, hogy a nemzeti egység és összefogás legjelentősebb szimbólumát támadja, új szintre emeli Soros György Magyarország ellen indított hadjáratát.",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György, aki több állam működésébe is próbált közvetlenül beavatkozni"

    },
    {
       prec: [3, 4, 4],
        title: "Soros György megpróbálta megölni Soros Györgyöt",
        genTextA: "Nem tudni, hogy ez öngyilkosságnak minősült volna, vagy Soros György klónozta magát, esetleg a kvantumfizika határait átlépve sikerült visszautaznia az időben, hogy még azelőtt megölhesse a nagyszüleit, mielőtt megszülettek volna a szülei, mindenesetre ez egy újabb bizonyítéka annak, hogy mennyire elszánt ez az ember.",
        genTextB: "Soros Györgytől nem idegen az erőszak, korábban nagyon beteg édesanyját próbálta meg meggyilkolni. Hiteles forrásaink szerint Soros mindig is erőszakos ember volt aki még fiatalon is képes volt összefogni a nácikkal. (Néhány forrás ugyanakkor kételkedik ebben, mivel Soros 1930-ban született így 15 éves volt a második világháború véget ért.)",
        genTextC: "Nagyon fontos, hogy egy ilyen bizonytalan hátterű ember által pénzelt szervezetek átláthatóan működjenek, ezért a kormány újabb nemzeti konzultációt indít \“Soros Györgyről egyesek azt se tudják, hogy kicsoda. Ön szerint is veszélyesek a terroristák?\" címmel",
        imgRoute: "/img/soros.jpg",
        imgName: "Soros György, az elszánt"

    },
    {
        prec: [4, 1, 1],
        title: "Az MSZP újra elvenné a magánnyugdíjmegtakarításokat",
        genTextA: "Nem tudni hogyan, mivel a Fidesz pár éve átcsoportosította ezeket a megtakarításokat, de az MSZP most azt tervezi, hogy kormányra kerülésük után ellopják a már átcsoportosított pénzeket. Hagyó Miklós saját tapasztalatai szerint 6740 nokiás dobozzal el lehet szállítani a pénzt a takarékszövetkezetektől a Parlamentig.",
        genTextB: "Mint ismeretes, a Fidesz kormány 2011-ben kimentette az összes megtakarítást ebből a szektorból a bedőlés veszélye miatt. Ezt a 3000 milliárd forintot Felcsút közeli struktúrális beruházásokra, állami tisztviselők fizetésemelésére, kormányzati kommunikációra és helikopterbérlésre költötte el a kormány.",
        genTextC: "Mivel a legtöbb bank ma már Soros György kezében van, így az állami nyugdíjrendszerben maradni kiszámíthatóbb. Gajdics Ottó szerint a ki a Soros-féle magánnyugdíjpénztárakat választja az állami nyugdíjrendszer helyett az hazaárulást követ el. Mióta a Fidesz átterelte a lakosság nagy részét az állami rendszerbe,  a nyugdíjak reálértéke folyamatosan emelkedik, ezzel egyidőben csökken a rezsi ami azt jelenti, hogy egyre több pénz marad a keményen pihenő magyar kisnyugdíjasoknál.",
        imgRoute: "/img/mszp.jpg",
        imgName: "Az MSZP már egyszer elvette a 13. havi nyugdíjat"
    },
    {
        prec: [4, 1, 2],
        title: "Az MSZP a családi támogatásokat a melegeknek adná",
        genTextA: "Az MSZP a liberálisok ötlete alapján jövőre az összes családi támogatást a meleg pároknak adná. Szerintük az országban nincs elég meleg, pedig már több brit kutatócsoport kimutatta, hogy a melegek jót tesznek például a divatnak. London belvárosában ott kezdett el felpörögni a vendéglátás ahova sok meleg költözött.",
        genTextB: "\"Engem már buziztak le, tudom miről beszélek. Az én kerületembe egy meleg sincsen, mindent megteszek, hogy ez így is maradjon.\" - válaszolta kérdésünkre Kocsis Máté. Szerinte a melegpropaganda már mindenhova beette magát. A Soros közeli álcivil szervezetek már nem csak a migránsokat akarják betelepíteni, de az aberrált melegeket is.",
        genTextC: "\”A KDNP-ben soha. Nem is volt, nincs is, nem is lesz. Itt mindenki normális… Kivéve a Hollikot, az néha elveszti a fonalat, de legalább mindig látom a templomban.\”. Ezt még korábban mondta Harrach Péter. A család mint fogalom csak és kizárólag egy (keresztény) férfi és egy (keresztény) nő házasságát jelenti, akik házasságban fogant gyermekeket nevelnek fel. Néha a gyerekek nem viselkednek jól, ezért verni kell őket. Az Identitesz szerint sem ember aki a saját neméhez vonzódik. Az meg főleg felháborító, hogy heteroszexuális keményen dolgozó magyar keresztény kisemberektől vennének el támogatásokat csak azért, hogy a meleglobbi tovább terjedhessen.",
        imgRoute: "/img/pride.jpg",
        imgName: "Mindannyiunkat fenyegeti a melegpropaganda"
    },
    {
        prec: [4, 1, 3],
        title: "Az MSZP betiltaná a focit Magyarországon a stadionok elárverezésével",
        genTextA: "Az MSZP azt tervezi, hogy ha választást nyernek 2018-ban eladják az összes stadiont, hogy senki ne tudjon focizni. Ha nincs stadion, nincs foci és lehet végre oktatásra, egészségügyre és városfejlesztésre költeni. Az MSZP szerint a magyar fociba teljesen értelmetlen ennyi pénzt beleölni, vagy ha már legalább csináljuk, akkor csináljuk rendesen, de az eddigi eredmények alapján még azt se lehet mondani, hogy jó irányba haladnának a dolgok.",
        genTextB: "\"A szocialisták természetesen mint mindig, most is tévednek. A magyar foci akár csak az oktatás vagy az egészségügy, nemzetközi szinten is elismert, az elmúlt 8 évben komoly előrelépések történtek. \" - mondta egy rögtönzött sajtótájékoztatón Balog Zoltán. Az emberi erőforrások minisztere éppen egy kerületi általános iskolában adott át egy új táblát. Mikor fel akarta írni a vakáció szót a táblára kért az igazgatótól egy krétát, aki lesütött szemmel odahajolt és a miniszter fülébe súgta, hogy \”Tudna adni a miniszter úr egy ötszázast? Leszaladok a boltba és veszek\”. Erre a miniszter ijedt tekintettel összerezzent, majd távozott az átadóról.",
        genTextC: "Botka László, aki (állítólag) Rolex karórával jár pont találkozott Felcsúton Mészáros Lőrinc polgármesterrel, aki éppen a harminc millió forintos Mercedesébe szállt be. Ez különös módon a fideszeseket nem zavarja, hogy egy képzetlen szakmunkásnak simán lehet több milliárdos cégbirodalma, de egy polgármester urizál, ha vesz egy pár tízezres karórát. Mindenesetre Botka közölte Mészárossal, hogy megválasztása esetén azonnal elbontattja vagy eladja a felcsúti stadiont. Mészáros erre fogott egy 5/4\”-es húzott gázcsövet és Botka felé hajította. Senki se sérült meg.",
        imgRoute: "/img/stadion.jpg",
        imgName: "Az MSZP szerint a foci felesleges és drága"
    },
    {
        prec: [4, 1, 4],
        title: "Az MSZP megszázszorozná a parizer árát",
        genTextA: "Az szocik megint a Simicska tulajdonban lévő Indexben sivalkodtak. Szerintük a gazdaság nem pörög eléggé, és mivel az országban főleg idősek élnek akik többnyire parizert esznek, ezért az MSZP megemelné ezen húskészítmények árát. A többletbevételből fedeznék a többkulcsos adórendszert (sic!), a rászorulóknak járó támogatások emelését (sic!!) és a hajléktalanszállók bővítését (sic!!!).",
        genTextB: "\"Ez az MSZP! Mindig csak emelni, csak emelni, csak emelni. Soha többé nem szabad engednünk, hogy ezek kormányra kerüljenek, inkább el kéne őket takarítani végre. Vagy az összeset összeterelni egy szép rétre egy nagy karámba, ott hülyéskedjenek.\" - reagált Németh Szilárd a tervezetre.",
        genTextC: "Egy Mészáros Lőrinc érdekeltségébe tartozó húsfeldolgozó átadásán voltunk éppen mikor a hír eljutott hozzánk, ezért rögtön megkérdeztük a húsüzem tulajdonosát mit szól a tervhez. Elsőre tetszett neki az ötlet, de mikor szóba került, hogy az egészet az MSZP találta ki, azonnal visszakozott és valami olyasmit pusmogott a mikrofonba, hogy \”szocik …. nyócév … Soros\”. Ezután véget ért az átadó ünnepség.",
        imgRoute: "/img/mszp.jpg",
        imgName: "Az MSZP még mindig képtelen beletörődni a 2010-es annihilációba"

    },
    {
        prec: [4, 2, 1],
        title: "A Jobbik elárulta a magyarokat",
        genTextA: "A Jobbik eddig is folyamatosan a saját országa ellen fordult, mikor rendkívüli ügyekről kellett dönteni a parlamentben. A párt mindig Brüsszel utasításai szerint cselekszik és nem a magyar emberek (Fidesz szavazók) érdekeit veszi figyelembe.",
        genTextB: "Mióta Simicska Lajos megvette a Jobbikot egy csepp tisztesség nem maradt a Jobbikban. A korábban nacionalista majd cukivá, de egyben csicskává vált párt nem tudna egy országot kormányozni, mivel nincs meg se a társadalmi támogatottsága, se megfelelő elképzelés sincs arról, hogy mit csinálna kormányra kerülés után. Az már csak hab a tortán, hogy még korruptak is.",
        genTextC: "A Fidesz ifjúsági szervezete továbbra is támogatja mindazokat, akik a Jobbik hazug és rágalmazó plakátjait megrongálják. A szólásszabadság minden magyar állampolgár elidegeníthetetlen joga. Kivéve ha a nemzeti konzultációs vagy kormányzati kommunikációs plakátokról van szó, mivel azok nem pártplakátok hanem üzenetek a magyar kormánytól, ergo azokat megrongálni Bencsik András szerint hazaárulásnak minősül. Sőt, már magáról a rongálásról beszélni vagy rágondolni is bűn. Én természetesen se nem beszélek most erről se nem gondolok rá, tehát nem vagyok hazaáruló. És természetesen Ön, kedves olvasó szintúgy nem hazaáruló ha 2018-ban a Fideszre fog szavazni.",
        imgRoute: "/img/jobbik.jpg",
        imgName: "A Jobbik elvesztette az identitását"
    },
    {
        prec: [4, 2, 2],
        title: "A Jobbik eladná Hoffman Rózsa szemüvegét",
        genTextA: "Az identitását elveszett ex-szélsőséges Brüsszel-gyűlölő párt szerint Hoffman Rózsa csak szimulál, szándékosan nem akarja meglátni, hogy mi folyik az országban, ezért hord szemüveget. Miután kiderítették, hogy az államtitkár asszony szemüvege nettó egymillió forintba kerül, felszólították, hogy adja el és a pénzt adja a rászorulóknak.",
        genTextB: "Az államtitkár szerint ez csak egy szokásos blöff a Simicska által irányított párttól. A szemüvegét természetesen nem adja el, és felszólította a Jobbikot, hagyjanak fel a kicsinyes politikai hisztériakeltéssel valamint koncentráljanak a profi és higgadt munkára.",
        genTextC: "A Jobbik kérése emberi alapjogokat sért, véli a Transparency International és a Magyar Helsinki Bizottság. Magyar állampolgártól a szemüveghez való jogot nem lehet elvenni, és felszólítani sem lehet senkit, hogy adja el bármilyen látássegítő eszközét. A CÖF is egyetért, de egy fontos kivételre felhívták a figyelmet. Jogászaik szerint a migránsok szemüvegét a határon a rendőröknek és a határőröknek kötelező elvenni, és a magyar rászorulóknak adni.",
        imgRoute: "/img/jobbik.jpg",
        imgName: "A Simicska párt újabb nevetséges akciója"
    },
    {
        prec: [4, 2, 3],
        title: "A Jobbik bezárná a felcsúti kisvasutat",
        genTextA: "A Jobbik elnökét a felcsúti kisvasút Trianonra emlékezteti, ezért kéri Mészáros Lőrinctől, hogy azonnali hatállyal bontsák el a síneket. Az Audi győri gyára is érdeklődik, mivel alapanyaghiány van az üzemben. A Felcsút és környékéért felelős fejlesztési miniszteri biztos szerint semmilyen más beruházásnak nem megfelelő a terület, csak a kisvasút tudja kihasználni megfelelően a területet.",
        genTextB: "Kikértük a minisztériumtól a forgalmi adatokat, az iratok szerint napi 3 ember utazik a vonalon, ami éves szinten 14312 forint bevételt generál. Ez azt jelenti, hogy minden magyar állampolgárra 0,00159 forint jut ebből.",
        genTextC: "Orbán Viktor szerint a csicskapárt csak önzőségből akar mindent elvenni amit a keményen dolgozó magyar kisemberek felépítettek a keményen dolgozó magyar kisemberek adóforintjaiból. A felcsúti vasút mára a Nemzeti Együttműködési Rendszer jelképévé vált, azonban a kormány ellenségei mindent megtesznek, hogy az évtizedek óta példátlan magyar nemzeti egységet megbontsák. A miniszterelnök szívesen látná, ha a kisvasút vonalát egészen Brüsszelig meghosszabítanák, mivel akkor nem kéne a számára kényelmetlen repülőn utaznia.",
        imgRoute: "/img/kisvasut.jpg",
        imgName: "A kisvasút egy példátlan magyar gazdasági siker"
    },
    {
        prec: [4, 2, 4],
        title: "Vona = Gyurcsány",
        genTextA: "A 888, hitelesített és államilag minősített hírportál oknyomozó újságírói rájöttek, hogy Vona Gábor valójában Gyurcsány Ferenc egyik klónja. Először az lett gyanús, hogy Vona és Gyurcsány nagyon hasonló hangnemben beszéltek a parlamenten belül és azon kívül is politikai témákról. Kezdetben az elemzők ezt annak tulajdonították, hogy mindkét politikust a Simicska-Soros érdekeltségébe tartozó körök pénzelik és irányítják.",
        genTextB: "Mennél mélyebbre ástak a kutatók, egyre több hasonlóságot találtak. Mindketten férfiak és mindketten 46 és feles cipőt hordanak, valamint egyforma hosszú a szemöldökük. Ezután két fideszes képviselőnek sikerült haj és köpetmintát szerezni tőlük. A DNS vizsgálatot többször is megismételték, hogy minden mérési hibát  kizárhassanak. Elsőre senki sem merte elhinni, hogy a kapott eredmények helyesek.",
        genTextC: "A mintákat orosz egyetemekre is elküldték, a kutató kollégák megerősítették a magyar laborosok eredményeit. A két politikus DNS-e 100%-ban megegyezik. A kíváncsiságtól vezérelt újságírók ezután annak eredtek a nyomába, hogy vajon hány klónja lehet még a bukott miniszterelnöknek. Mindenkitől nem sikerült az azonosításhoz elegendő szövetet vagy hajszálat gyűjteni, de a lista így is elrettentő. A parlamentben még két Gyurcsány-klón ül, a fideszes Halász János és az LMP-s Szél Bernadett.",
        imgRoute: "/img/gyurcsany.jpg",
        imgName: "Vajon hány klónja van Gyurcsány Ferencnek?"
    },
    {
        prec: [4, 3, 1],
        title: "A Momentumos sivalkodó csürhe szétverte a Fidesz székházat és az egész Hősök terét",
        genTextA: "Napról napra nő az erőszakos cselekedetek száma az ellenzéki balliberális tüntetéseken.",
        genTextB: "\"Kukákat borogatnak fel, rendőröket és újságírókat vernek, autókat gyújtanak fel és megbénítják a város közlekedését.\" emlékszik vissza a 2006-os tüntetésekre egy kigyúrt kopasz férfi, aki nagyon megijedt, mikor egy aktivista matricát próbált adni neki. A férfi feljelentést fontolgat, mivel súlyos szellemi károsodást is okozhatott volna neki, ha akár csak egy másodpercre elgondolkodik, hogy mégse a Soros György áll minden mögött és mégse teljesít olyan jól a magyar gazdaság, mint ahogy azt a magyar kormány állítja.",
        genTextC: "A félelemkeltő tüntetések folytatódnak, legközelebb egyszerre vonul fel a Soros hálózat több tagja, mint az Oktatási Szabadságot, a Nem maradunk csendben!, a Tanítanék mozgalom, az Egymillióan a magyar sajtószabadságért, a mentősök, a közalkalmazotti szakszervezetek, a vendéglátósok, a bolti eladók, a kéményseprők és az a körülbelül 2 millió álcivil akit zavar, hogy vagy nincs fertőtlenítő a kórházakban vagy nincs kréta az iskolákban.",
        imgRoute: "/img/tuntetesek.jpg",
        imgName: "A Soros György hálózat által szervezett áltüntetéseken egyre erőszakosabb alakok jelennek meg"

    },
    {
        prec: [4, 3, 2],
        title: "A Momentum újságírókat erőszakolt",
        genTextA: "Betört az Origo szerkesztőségébe és rárontott a gyanútlan és ártatlan újságírókra és szakemberekre a Momentum elnöke. Szemmel láthatóan (és hála égnek) fegyver nem volt nála.",
        genTextB: "\"Botrányos, hogy ezek kiáltalak sajtószabadságot, akik nyíltan és agresszíven fenyegetik a független és semmiképpen sem központilag működtetett sajtó munkatársait\" nyilatkozott a kormány szóvívője.",
        genTextC: "Többek szerint is ez volt a magyar történelem legnagyobb támadása a szabad sajtó ellen. Sokan aggódnak, hogy a helyzet könnyen odáig fajulhat, hogy politikusok viperával, késsel vagy akár lőfegyverrel felszerelkezve vesznek be szerkesztőségeket, csak azért mert a még független sajtónak, mint a Ripost, 888, Lokál vagy a Magyar Idők van annyi mersze, hogy leírja a színtiszta igazságot.",
        imgRoute: "/img/momentum_origo.jpg",
        imgName: "Fekete-Győr András, az első magyar politikus, aki újságírókat moleszterál"

    },
    {
        prec: [4, 3, 3],
        title: "A Momentum megerőszakolta az olimpiai álmot",
        genTextA: "A törpepárt egyértelműen nem létezhetne, ha nem játszott volna rá a nemzeti egység megbomlasztására. Miután tragikus módon a Magyar Olimpia álma szertefoszlott, elhatározták, hogy minden olimpiai pályázatot megakadályoznak.",
        genTextB: "\"A magyar történelem egyik fénypontja lehetett volna, ha az egész világ arra figyel egy hónapig, hogy a rendkívül olcsón megrendezett világszínvonalú sportesemény micsoda elégedettséggel tölti el a magyar állampolgárokat\" mondja a kormány szóvívője.",
        genTextC: "A kormány számításai szerint 13.500 ezer milliárd forinttól esett el így az ország.",
        imgRoute: "/img/momentum_jaras.jpg",
        imgName: "A Momentum Mozgalomnak nincsen politikai programja"
    },
    {
        prec: [4, 3, 4],
        title: "A Momentum vallásgyalázó dalokat énekelt Pünkösdkor",
        genTextA: "Az MSZP, a Momentum, a DK és a már csak papíron létező Liberálisok nem tisztelik a keresztény hagyományokat, ezáltal nem tisztelik a Fidesz-KDNP koalíciós kormány család- és hitközpontú nézeteit.",
        genTextB: "\"Mélyen felháborító és a hazaárulással egyenértékű, ha valaki ezt az eksztatikus és evidentikus ünnepet nem tiszteli. Olvassák mind el a Katolikus Egyház Katekizmusa c. remekművet.\" mondja Semjén Zsolt. Szerinte egy érdekcsoport \"a szabad vasárnap miatt indított támadást a kormány és a kereszténység ellen\".",
        genTextC: "Semjén Zsolt Kézdivásárhelyen éppen lovagolt mikor stábunk megtalálta. Röviden elmondta, hogy \"soha nem látott mértékű extremitással\" zajlik a modernkor legnagyobb támadása a keresztény hitvilág ellen. Mikor egy ellenzéki tüntető odaléppet hozzá és megkérdezte, hogy miért támogatja a kormány ilyen aránytalanul a keresztény egyházat a többi ellenében, a képviselő szenteltvizet locsolt a fiatalemberre majd latin szavakat kiabált felé.",
        imgRoute: "/img/semjen.jpg",
        imgName: "Semjén Zsolt miniszterelnök-helyettes és a Keresztény Demokrata Néppárt képviselője"
    },
    {
       prec: [4, 4, 1],
        title: "Az ellenzék eladni készül Soros Györgyöt",
        genTextA: "Az MSZP, a Momentum, a DK és a már csak papíron létező Liberálisok több multinacionális vállalattól is kértek árajánlatot Soros Györgyre. Több webes felületre is kirakták az ajánlatukat, de a sors igazi pikantériája, hogy a Facebookon és a Jófogáson megjelent hirdetésekre maga Soros adott pénzt.",
        genTextB: "Fekete-Győr András szerint tarthatatlanná vált, hogy a pártjuk finanszírozása körüli pletykák veszélybe sodorják a Momentum jóhírét, ezért úgy látja itt az ideje megszabadulni ettől a kolonctól. Az induló ár 4000 milliárd euró. A vevőnek ezért az árért vállalnia kell, hogy naponta bemutat a milliárdosnak egy migránst és hetente kétszer beül egy CEU-s előadásra.",
        genTextC: "Több forrásunk is úgy értelsült, Simicska Lajos máris hadrendbe állította legjobb jogászait, hogy ajánlatot tegyenek. Nem lesz könnyű dolga, délután Donald Trump a  Twitteren jelezte, hogy ő is érdeklődik. Logikus lépés lenne, az amerikai elnök és a milliárdos között régóta dúl a visszafogott csatározás. A Soros szervezetek az államokban is rengeteg gondot okoznak, a klímakutató szervezetek nagyban visszafogják az ország fejlődését.",
        imgRoute: "/img/trump_twitter.jpg",
        imgName: "A súlyos forráshiányok miatt eladnák Soros Györgyöt, még az USA elnöke is érdeklődik"
    },
    {
        prec: [4, 4, 2],
        title: "Az ellenzék ráront a hungarikumokra",
        genTextA: "Az MSZP, a Momentum, a DK és a már csak papíron létező Liberálisok szerint a hungarikumoknak nincs értelme, ezért úgy ahogy van megszüntetnék a hungarikumok intézményét.",
        genTextB: "\"Nagyon nem szeretem se az Erős Pistát se a Pick szalámit\" mondja Fodor Gábor. Az ellenzéki politikus azzal érvelt, hogy a hungarikumok miatt a külföldi turistákban téves kép alakul ki a magyar jellegzetességekről, és emiatt sokan nem tervezik, hogy máskor is ellátogatnak Magyarországra.",
        genTextC: "A hungarikum törvényt a kormány azért hozta létre, hogy védje a magyar kultúra értékeit az egyre növekvő nemzetközi befolyásolástól. A törvény eltörlése számos védelmet élvező igaz magyar értéket lehetetlenítene el, mint a mákos guba, a szürkemarha, a lángos, az Igaz Csíki Sör, a Tokaj Aszú vagy mint Kövér László bajusza.",
        imgRoute: "/img/hungarikum.jpg",
        imgName: "A hungarikum minden magyar szerint fontos nemzeti érték"
    },
    {
        prec: [4, 4, 3],
        title: "Az ellenzék bezáratná a sikeres magyar kaszinókat",
        genTextA: "Az MSZP, a Momentum, a DK és a már csak papíron létező Liberálisok azt tervezik, hogy bezárják Andy Vajna összes kaszinóját.",
        genTextB: "A magyar gazdaság szempontjából kiemelkedően fontos kaszinók az elmúlt évben rengeteg adóbevételhez juttaták a kományt, így nem világos, hogy az ellenzéknek mi lenne a célja az intézkedéssel. Kerestük az MSZP, a Momentum és a DK szóvívőjét is de megkeresésünkre nem reagáltak.",
        genTextC: "Még érdekesebb ez az ötlet, ha felidézzük a 2009-ben indított sukorói ingatlanperből indított nyomozást. A szocialista kormányok idején Gyurcsány Ferenc még kifejezetten szerette a kaszinókat, a telekcsere-szerződések létrejötte után a területen kaszinó épült volna.",
        imgRoute: "/img/vajna.jpg",
        imgName: "Andy Vajna, film- és Vajna Tímea ügyi kormánybiztos"
    },
    {
        prec: [4, 4, 4],
        title: "Az ellenzék számos kedvezményt és támogatást venne el a magyar emberektől",
        genTextA: "Az MSZP, a Momentum, a DK és a már csak papíron létező Liberálisok tervezik, hogy elveszik többek között a 14. havi nyugdíjat, a családi adókedvezményeket valamint a rezsicsökkentést.",
        genTextB: "\"Ez a tervezet nyíltan szembemegy a józan ésszel és csak a magyar emberek látják kárát, míg az ellenzék csak nyerészgedni akar a magyar adófizetők pénzén\" mondja a kormány szóvívője.",
        genTextC: "Mivel Gyurcsány Ferenc szerint jó ötlet volt a 13. havi nyugdíjat elvenni, el kéne venni a 14. havit is, habár ennek bevezetéséről még nem döntött a kormány. Az ellenzék mindenre elszántságát ez is jól mutatja, hogy nem csak a jelenlegi sikereket szeretnék elvitatni a kormánytól és a magyar emberektől, de még a jövőbeni intézkedéseknek is szeretnék útját állni",
        imgRoute: "/img/mszp.jpg",
        imgName: "Az ellenzék szereti kizsákmányolni a magyar embereket"
    }
]

var quotes = [
    {
        text: "Bayer Zsolt megkeresésünkre azt mondta, hogy elmegy és keres egy új illemtanárt.",
        name: "Bayer Zsolt",
        imgRoute: "/img/bayer.jpg"
    },
    {
        text: "Az ügyben kerestük Németh Szilárdot, kérdéseinkre később ígért választ mert jelenleg ügynökökre vadászik a Városliget környékén.",
        person: "Németh Szilárd",
        imgRoute: "/img/szilard.jpg"
    },
    {
        text: "Kósa Lajos szerint az ellenzék oldaláról csupán hisztériakeltés folyik.",
        person: "Kósa Lajos",
        imgRoute: "/img/lajos.jpg"
    }
]

var getPrec = function (arr) {
    var res = {};
    for (var i = 0; i < cap.length; i++) {
        if (arr.length == 3) {
            res.title = "NAGYSZERŰ, KÉSZ IS VAGYUNK! LEGYEN BENNE IDÉZET VALAKITŐL?";
            res.buttons = ["IGEN, BAYER ZSOLTTÓL", "IGEN, NÉMETH SZILÁRDTÓL", "IGEN, KÓSA LAJOSTÓL", "MOST TALÁN NEM, KÖSZÖNÖM!",];
            return res;
        }
        if (arraysEqual(cap[i].prec, arr)) {
            res.title = cap[i].title;
            res.buttons = cap[i].buttons;
            res.genTextA = cap[i].genTextA;
            res.genTextB = cap[i].genTextB;
            res.genTextC = cap[i].genTextC;

            return res;
        }
    }
};

var getArt = function (arr) {
    var res = {};
    for (var i = 0; i < art.length; i++) {
        if (arraysEqual(art[i].prec, arr)) {
            res.title = art[i].title;
            res.genTextA = art[i].genTextA;
            res.genTextB = art[i].genTextB;
            res.genTextC = art[i].genTextC;
            res.imgRoute = art[i].imgRoute;
            res.imgName = art[i].imgName;
        }
    }

    return res;
}

var getQuote = function (n) {
    var res = {};

    res.text = quotes[n - 1].text;
    res.person = quotes[n - 1].person;
    res.imgRoute = quotes[n - 1].imgRoute;

    return res;
}

var getSettings = function () {
    var res = {};
    res.articleReady = true;
    res.reveal = false;
    res.reset = true;
    return res;
}

var resetSettings = function (k) {
    var res = {};
    if (k == 1) {
        res.articleReady = false;
        res.quoted
        res.initial = true;
        res.reveal = false;
        res.reset = false;
        res.gap = false;
        return res;
    }
    if (k == 2) {
        res.initial = false;
        res.reveal = true;
        res.reset = true;
        return res;
    }
}


function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
};

function randomArr() {
    var rndArr = [];
    for (var i = 0; i < 3; i++) {
        rndArr.push(Math.floor((Math.random() * 4) + 1));
    }
    return rndArr;
};

function getRandom() {
    var arr = randomArr();
    var res = {};
    for (var i = 0; i < cap.length; i++) {
        if (arraysEqual(cap[i].prec, arr)) {
            res.title = cap[i].title;
            res.buttons = cap[i].buttons;
            res.genTextA = cap[i].genTextA;
            res.genTextB = cap[i].genTextB;
            res.genTextC = cap[i].genTextC;
        }
    }
    return res;
};

var upperIndex = "";
