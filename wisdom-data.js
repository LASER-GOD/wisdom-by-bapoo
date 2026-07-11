// Wisdom by Bapoo - old-school proverbs, each shown with its original-language
// phrase spelled out phonetically in English letters (no non-English script)
// on top and the English translation below. Only well-known, verifiable
// traditional proverbs are included so the transliterations are authentic.

(function () {
  var HINDI = [
    { native: "Boond boond se sagar banta hai", english: "A drop of water makes an ocean." },
    { native: "Jaisi karni waisi bharni", english: "As you sow, so shall you reap." },
    { native: "Ek haath se taali nahi bajti", english: "You cannot clap with one hand." },
    { native: "Ekta mein bal hai", english: "Where there is unity, there is strength." },
    { native: "Sach boliye, meetha boliye", english: "Speak the truth, but speak it sweetly." },
    { native: "Dheeraj ke phal meethe hote hain", english: "Patience bears sweet fruit." },
    { native: "Jo khode gaddha doosron ke liye, khud hi usmein girta hai", english: "He who digs a pit for others falls into it himself." },
    { native: "Khaali bartan zyada awaaz karte hain", english: "Empty vessels make the most noise." },
    { native: "Zaroorat aavishkar ki janani hai", english: "Necessity is the mother of invention." },
    { native: "Atithi Devo Bhava", english: "A guest is to be treated like a god." },
    { native: "Doobte ko tinke ka sahara", english: "A drowning man will clutch at a straw." },
    { native: "Sau sunaar ki, ek luhaar ki", english: "A hundred taps from a goldsmith equal one blow from a blacksmith." },
    { native: "Nach na jaane aangan tedha", english: "One who can't dance blames the crooked courtyard." },
    { native: "Andhon mein kaana raja", english: "In the land of the blind, the one-eyed man is king." },
    { native: "Ghar ki murgi daal barabar", english: "The chicken at home is worth no more than lentils." },
    { native: "Doodh ka jala chhaachh bhi phoonk phoonk kar peeta hai", english: "Once burned by milk, a person blows even on buttermilk." },
    { native: "Jitni chadar ho utne hi pair phailaye", english: "Stretch your legs only as far as your blanket reaches." },
    { native: "Jaan hai to jahaan hai", english: "Where there is life, there is the world." },
    { native: "Neem hakim khatra-e-jaan", english: "A half-baked physician is a danger to life." },
    { native: "Bandar kya jaane adrak ka swaad", english: "What does a monkey know of the taste of ginger?" },
    { native: "Jaisi sangat waisi rangat", english: "You take on the color of the company you keep." },
    { native: "Jab jaago tabhi savera", english: "Whenever you wake up, that is your morning." },
    { native: "Hathi ke daant khane ke aur, dikhane ke aur", english: "An elephant has one set of teeth for eating and another for show." },
    { native: "Aam ke aam, guthliyon ke daam", english: "Get the mangoes, and sell the seeds too." },
    { native: "Chaar din ki chandni, phir andheri raat", english: "Four days of moonlight, then a dark night." },
    { native: "Jiski lathi uski bhains", english: "Whoever holds the stick owns the buffalo." },
    { native: "Door ke dhol suhaavane", english: "Drums sound sweeter from a distance." },
    { native: "Ab pachtaye hot kya jab chidiya chug gayi khet", english: "What use is regret once the birds have already eaten the field? (No use crying over spilt milk.)" },
    { native: "Nau sau chuhe khakar billi haj ko chali", english: "After eating nine hundred mice, the cat went on a pilgrimage." },
    { native: "Na rahega baans, na bajegi bansuri", english: "If there is no bamboo, there will be no flute." },
    { native: "Ek anar sau bimar", english: "One pomegranate, and a hundred sick people wanting it." },
    { native: "Oont ke muh mein jeera", english: "A cumin seed in a camel's mouth." },
    { native: "Na nau man tel hoga na Radha nachegi", english: "There will be no nine maunds of oil, and no dance either." },
    { native: "Ghar ka bhedi Lanka dhaye", english: "An insider from home is the one who brings down Lanka." },
    { native: "Aage kuan peeche khai", english: "A well ahead, a ditch behind." },
    { native: "Andha baante revdi, phir phir apno ko de", english: "A blind man handing out sweets keeps giving to his own people." },
    { native: "Saanp bhi mar jaye aur laathi bhi na tootay", english: "Kill the snake without breaking the stick." },
    { native: "Dhobi ka kutta na ghar ka na ghat ka", english: "The washerman's dog belongs neither to the house nor the riverbank." },
    { native: "Billi ke gale mein ghanti kaun baandhe", english: "Who will bell the cat?" },
    { native: "Ek pantha do kaaj", english: "Two tasks done on a single path." },
    { native: "Neki kar dariya mein daal", english: "Do a good deed, and cast it into the river." }
  ];

  var JEWISH = [
    { native: "Der mentsh trakht, un Got lakht", english: "Man plans, and God laughs." },
    { native: "A halber emes iz a gantse lign", english: "A half-truth is a whole lie." },
    { native: "Az me ken nisht ariber, geyt men arunter", english: "If you can't go over it, go under it." },
    { native: "Mit gelt in kesheneh, bistu klug, bistu sheyn, un ken oykh gut zingen", english: "With money in your pocket, you are wise, you are handsome, and you sing well too." },
    { native: "Beser a gutn soyne eyder a shlekhtn fraynd", english: "Better a good enemy than a bad friend." },
    { native: "Az got vil, shist a bezem oykh", english: "When God wills it, even a broom can shoot." },
    { native: "Eizehu chacham? Halomed mikol adam.", english: "Who is wise? One who learns from every person." },
    { native: "Eizehu ashir? Hasameach b'chelko.", english: "Who is rich? One who is happy with what he has." },
    { native: "Eizehu gibor? Hakovesh et yitzro.", english: "Who is mighty? One who conquers his own impulses." },
    { native: "Im lo achshav, eimatai?", english: "If not now, when?" },
    { native: "Im ein ani li, mi li? U'ch'she'ani le'atzmi, mah ani?", english: "If I am not for myself, who will be for me? And if I am only for myself, what am I?" },
    { native: "Lo alecha hamlacha ligmor, v'lo atah ben chorin l'hibatel mimena", english: "You are not obligated to complete the work, but neither are you free to abandon it." },
    { native: "Kol hamekayem nefesh achat, ke'ilu kiyem olam malei", english: "Whoever saves one life, it is as if he saved an entire world." },
    { native: "Kol Yisrael arevim zeh ba'zeh", english: "All people are responsible for one another." },
    { native: "Marbeh tzedakah, marbeh shalom", english: "The more charity given, the more peace in the world." },
    { native: "Tzedakah tatzil mimavet", english: "Charity saves from death." },
    { native: "Eizehu mechubad? Hamechabed et habriyot.", english: "Who is honored? One who honors others." },
    { native: "Shlof gikher, me darf dos kishn", english: "Sleep faster, we need the pillow." },
    { native: "Az men est khazir, zol es rinen fun bord", english: "If you're going to eat pork, let it drip from your beard." },
    { native: "Az di kats volt gehat fligl, volt zi ale feygl oyfgegesn", english: "If the cat had wings, it would eat all the birds." },
    { native: "Me ken nisht tantsn oyf tsvey khasenes mit eyn hintn", english: "You can't dance at two weddings with one rear end." },
    { native: "Az men hot nisht keyn seykhl, hot men fis", english: "If you don't have brains, you'd better have legs." },
    { native: "Kleyne kinder, kleyne freydn; groyse kinder, groyse leydn", english: "Small children, small joys; big children, big troubles." },
    { native: "Az men muz, ken men", english: "When one must, one can." },
    { native: "Az Got vil shtrofn a mentshn, nemt er im op dem seykhl", english: "When God wants to punish someone, He first takes away their common sense." },
    { native: "Alle kales zenen sheyn; alle meysim zenen frum", english: "All brides are beautiful; all the dead are pious." },
    { native: "Gelt geyt tsu gelt", english: "Money goes to money." },
    { native: "Az me lebt, derlebt men", english: "If you live long enough, you live to see everything." },
    { native: "Der oylem iz a goylem", english: "The public is a golem (a mindless mass)." }
  ];

  var POLISH = [
    { native: "Gość w dom, Bóg w dom", english: "A guest in the house is God in the house." },
    { native: "Nie mój cyrk, nie moje małpy", english: "Not my circus, not my monkeys." },
    { native: "Jak sobie pościelesz, tak się wyśpisz", english: "As you make your bed, so shall you sleep in it." },
    { native: "Kto pod kim dołki kopie, sam w nie wpada", english: "He who digs a pit for others falls into it himself." },
    { native: "Lepiej późno niż wcale", english: "Better late than never." },
    { native: "Co ma wisieć, nie utonie", english: "What is meant to hang will not drown." },
    { native: "Gdzie kucharek sześć, tam nie ma co jeść", english: "Where there are six cooks, there is nothing to eat." },
    { native: "Nie chwal dnia przed zachodem słońca", english: "Don't praise the day before sunset." },
    { native: "Kto rano wstaje, temu Pan Bóg daje", english: "The early riser is rewarded." },
    { native: "Cudze chwalicie, swego nie znacie", english: "You praise what is foreign and do not know your own." },
    { native: "Prawdziwych przyjaciół poznaje się w biedzie", english: "True friends are recognized in hardship." },
    { native: "Nie ma tego złego, co by na dobre nie wyszło", english: "There is no bad that doesn't turn out good in the end." },
    { native: "Kropla drąży skałę", english: "A drop of water carves the rock." },
    { native: "Do trzech razy sztuka", english: "The third time is the charm." },
    { native: "Jak Kuba Bogu, tak Bóg Kubie", english: "As you treat God, so God treats you." },
    { native: "Gość jak ryba, po trzech dniach cuchnie", english: "A guest, like a fish, stinks after three days." },
    { native: "Bez pracy nie ma kołaczy", english: "Without work, there is no cake." },
    { native: "Kto pyta, nie błądzi", english: "He who asks does not go astray." },
    { native: "Ryba psuje się od głowy", english: "The fish rots from the head." },
    { native: "Mądry Polak po szkodzie", english: "A Pole is wise after the damage is done." },
    { native: "Nie wywołuj wilka z lasu", english: "Don't call the wolf out of the forest." },
    { native: "Darowanemu koniowi nie zagląda się w zęby", english: "Don't look a gift horse in the mouth." },
    { native: "Głodnemu chleb na myśli", english: "A hungry man's thoughts are on bread." },
    { native: "Kropla w morzu", english: "A drop in the ocean." },
    { native: "Lepszy wróbel w garści niż gołąb na dachu", english: "A sparrow in the hand is better than a pigeon on the roof." },
    { native: "Co kraj, to obyczaj", english: "Different country, different custom." }
  ];

  var CATEGORIES = [
    { id: "hindi", label: "Hindi", icon: "🪔" },
    { id: "jewish", label: "Jewish", icon: "✡️" },
    { id: "polish", label: "Polish", icon: "🦅" },
    { id: "random", label: "Random", icon: "🎲" }
  ];

  window.WISDOM_DATA = { hindi: HINDI, jewish: JEWISH, polish: POLISH };
  window.WISDOM_CATEGORIES = CATEGORIES;
})();
