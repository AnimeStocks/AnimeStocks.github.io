const mangaList = [
    {
        "class": "other",
        "link": "https://invle.co/clbbw5v",
        "image": "/pic/featured1.png",
        "description": "Spy X Family Volume 1 to 7 English comics",
        "price": "₱354 - ₱364"
    },
    {
        "class": "action",
        "link": "https://invle.co/clbbwna",
        "image": "/pic/featured2.png",
        "description": "Chainsaw Man Volume 1-11 Manga Vol English comics",
        "price": "₱489"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clbbwrj",
        "image": "/pic/featured3.png",
        "description": "Comic Jujutsu Kaisen English Vol 0-15",
        "price": "₱479 - ₱489"
    },
    {
        "class": "romance",
        "link": "https://invle.co/clbbww8",
        "image": "/pic/featured4.png",
        "description": "komi Can't Communicate Vol 1-14 English manga",
        "price": "₱489"
    },
    {
        "class": "romance other",
        "link": "https://invle.co/clbeg0o",
        "image": "/pic/featured5.png",
        "description": "Mieruko-Chan (Manga)(Slice Of Life)",
        "price": "₱565"
    },
    {
        "class": "drama",
        "link": "https://invle.co/clbc8g5",
        "image": "/manga/product6.png",
        "description": "JoJo's Bizarre Adventure: Part 4, Diamond Is Unbreakable, Vol. 1-6",
        "price": "₱1,200"
    },
    {
        "class": "drama",
        "link": "https://invle.co/clbc8co",
        "image": "/manga/product7.png",
        "description": "Blue Period, English Manga Vol. 1-5 by Tsubasa Yamaguchi",
        "price": "₱750"
    },
    {
        "class": "drama action",
        "link": "https://invle.co/clbcz58",
        "image": "/manga/product8.png",
        "description": "attack on titan magi silverspoon beck mongolian chop squad",
        "price": "₱199 - ₱335"
    },
    {
        "class": "drama",
        "link": "https://invle.co/clbc8ro",
        "image": "/manga/product9.png",
        "description": "Akame ga KILL!, Vol. 1-15 English comics",
        "price": "₱489"
    },
    {
        "class": "other",
        "link": "https://invle.co/clbegeo",
        "image": "/manga/product10.png",
        "description": "We Never Learn (Manga)",
        "price": "₱695"
    },
    {
        "class": "fantasy",
        "link": "https://invle.co/clbc8w3",
        "image": "/manga/product11.png",
        "description": "Fire Punch Manga vol. 1-8 (English) by Tatsuki Fujimoto",
        "price": "₱820 - ₱899"
    },
    {
        "class": "fantasy other",
        "link": "https://invle.co/clbc8xj",
        "image": "/manga/product12.png",
        "description": "Hell's Paradise English Manga Vol. 1-13 (Paperback)",
        "price": "₱780"
    },
    {
        "class": "other",
        "link": "https://invle.co/clbc8zs",
        "image": "/manga/product13.png",
        "description": "Bungo Stray Dogs Manga (English), Volume 1-20",
        "price": "₱820"
    },
    {
        "class": "other",
        "link": "https://invle.co/clbc9mb",
        "image": "/manga/product14.png",
        "description": "Spy X Family KL Jump manga vol 1-9 (English)",
        "price": "₱364"
    },
    {
        "class": "romance",
        "link": "https://invle.co/clbc948",
        "image": "/manga/product15.png",
        "description": "Kaichou wa Maid-sama! (Manga) Volume 1-9",
        "price": "₱1,100"
    },
    {
        "class": "romance",
        "link": "https://invle.co/clbc91g",
        "image": "/manga/product16.png",
        "description": "Wotakoi: Love is Hard for Otaku English Manga, vol. 1,2,3",
        "price": "₱750"
    },
    {
        "class": "other",
        "link": "https://invle.co/clbc921",
        "image": "/manga/product17.png",
        "description": "Moriarty the Patriot, Vol. 5 by Viz English Manga",
        "price": "₱520"
    },
    {
        "class": "romance",
        "link": "https://invle.co/clbc94u",
        "image": "/manga/product18.png",
        "description": "Kaichou wa Maid-sama Manga [Untranslated Raw Japanese]",
        "price": "₱120 - ₱145"
    },
    {
        "class": "romance drama",
        "link": "https://invle.co/clbc90l",
        "image": "/manga/product19.png",
        "description": "Weathering With You, Vol. 1 English Manga",
        "price": "₱670"
    },
    {
        "class": "other",
        "link": "https://invle.co/clbc9f4",
        "image": "/manga/product20.png",
        "description": "Assorted ENGLISH Manga (SEVEN SEAS, VIZ MEDIA, KODANSHA COMICS, ETC.)",
        "price": "₱520 - ₱950"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clbc86y",
        "image": "/manga/product21.png",
        "description": "Jujutsu Kaisen Viz English Manga, vol 0-14",
        "price": "₱460 - ₱599"
    },
    {
        "class": "action",
        "link": "https://invle.co/clbe3uq",
        "image": "/manga/product22.png",
        "description": "Hunter X Hunter (Manga)",
        "price": "₱510"
    },
    {
        "class": "other",
        "link": "https://invle.co/clbc9rf",
        "image": "/manga/product23.png",
        "description": "Blue Lock KL Jump English Manga vol 1-11",
        "price": "₱374"
    },
    {
        "class": "drama fantasy other",
        "link": "https://invle.co/clbc9su",
        "image": "/manga/product24.png",
        "description": "Manga Berserk KL Jump (English) vol 1-20",
        "price": "₱426"
    },
    {
        "class": "other fantasy",
        "link": "https://invle.co/clbc9ud",
        "image": "/manga/product25.png",
        "description": "Hell's Paradise KL Jump (English) vol 1 - 13 (Complete)",
        "price": "₱401"
    },
    {
        "class": "other",
        "link": "https://invle.co/clbc9zb",
        "image": "/manga/product26.png",
        "description": "Monster KL Jump Manga (English) vol 1-13",
        "price": "₱459"
    },
    {
        "class": "other",
        "link": "https://invle.co/clbc8a3",
        "image": "/manga/product27.png",
        "description": "Spy X Family, Vol. 1-7 (Paperback) by Tatsuya Endo",
        "price": "₱575 - ₱599"
    },
    {
        "class": "romance drama other",
        "link": "https://invle.co/clbca2t",
        "image": "/manga/product28.png",
        "description": "Rent-a-Girlfriend, Vol. 4 (Paperback) by Reiji Miyajima",
        "price": "₱650"
    },
    {
        "class": "romance drama other",
        "link": "https://invle.co/clbca6v",
        "image": "/manga/product29.png",
        "description": "Rent-a-Girlfriend, Vol. 5 (Paperback) by Reiji Miyajima",
        "price": "₱650"
    },
    {
        "class": "romance other drama",
        "link": "https://invle.co/clbca70",
        "image": "/manga/product30.png",
        "description": "Rent-A-Girlfriend, Vol. 8 (Paperback) by Reiji Miyajima",
        "price": "₱650"
    },
    {
        "class": "romance drama other",
        "link": "https://invle.co/clbca7t",
        "image": "/manga/product31.png",
        "description": "Rent-A-(Really Shy!)-Girlfriend, Vol. 1 (Paperback) by Reiji Miyajima",
        "price": "₱675"
    },
    {
        "class": "romance drama other",
        "link": "https://invle.co/clbca8b",
        "image": "/manga/product32.png",
        "description": "Rent-A-(Really Shy!)-Girlfriend, Vol. 2 (Paperback) by Reiji Miyajima",
        "price": "₱675"
    },
    {
        "class": "romance other drama",
        "link": "https://invle.co/clbca8z",
        "image": "/manga/product33.png",
        "description": "Rent-A-Girlfriend, Vol. 10 (Paperback) by Reiji Miyajima",
        "price": "₱675"
    },
    {
        "class": "romance other drama",
        "link": "https://invle.co/clbct13",
        "image": "/manga/product34.png",
        "description": "Rent-A-Girlfriend, Vol. 1 (Paperback) by Reiji Miyajima",
        "price": "₱675"
    },
    {
        "class": "romance drama",
        "link": "https://invle.co/clbct3h",
        "image": "/manga/product35.png",
        "description": "Rent-A-Girlfriend, Vol. 9 (Paperback) by Reiji Miyajima",
        "price": "₱650"
    },
    {
        "class": "drama other",
        "link": "https://invle.co/clbyvqi",
        "image": "/manga/product36.png",
        "description": "Oshi No Ko manga (Japanese) volume 1 - 8",
        "price": "₱520"
    },
    {
        "class": "fantasy",
        "link": "https://invle.co/clbywb8",
        "image": "/manga/product37.png",
        "description": "Solo Leveling 1-3, English Edition, Korean Webtoon, Manga, Manhwa",
        "price": "₱2,200"
    },
    {
        "class": "drama action",
        "link": "https://invle.co/clbywhq",
        "image": "/manga/product38.png",
        "description": "Attack on Titan (English) manga volume 1-20 by TR Media",
        "price": "₱390"
    },
    {
        "class": "action",
        "link": "https://invle.co/clbywlx",
        "image": "/manga/product39.png",
        "description": "[On hand][New][Original] Fire Force",
        "price": "₱620"
    },
    {
        "class": "fantasy drama other",
        "link": "https://invle.co/clbyxpg",
        "image": "/manga/product40.png",
        "description": "Tokyo Ghoul, Vol. 1 (Paperback) by Sui Ishida",
        "price": "₱699"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clbyxl9",
        "image": "/manga/product41.png",
        "description": "Demon Slayer, Complete Boxed Set (Paperback) by Koyoharu Gotouge",
        "price": "₱10,799"
    },
    {
        "class": "other",
        "link": "https://invle.co/clbyy4m",
        "image": "/manga/product42.png",
        "description": "Manga Mutiny (Manga Series)",
        "price": "₱280"
    },
    {
        "class": "drama",
        "link": "https://invle.co/clbyy8h",
        "image": "/manga/product43.png",
        "description": "Blue Period, Vol. 2 (Paperback) by Tsubasa Yamaguchi",
        "price": "₱699"
    },
    {
        "class": "fantasy",
        "link": "https://invle.co/clbyyb3",
        "image": "/manga/product44.png",
        "description": "Record of Ragnarok, Vol. 1 (Paperback) by Shinya Umemura",
        "price": "₱699"
    },
    {
        "class": "drama fantasy romance",
        "link": "https://invle.co/clbyyiw",
        "image": "/manga/product45.png",
        "description": "Your Throne 1-4, I Want To Be You Just For A Day, Romance Fantasy Comic Books, Manhwa",
        "price": "₱1,500 - ₱5,100"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1wmq",
        "image": "/manga/product46.png",
        "description": "Demon Slayer (Kimetsu no Yaiba) manga English volume 1-23",
        "price": "₱390"
    },
    {
        "class": "action",
        "link": "https://invle.co/clc1xas",
        "image": "/manga/product47.png",
        "description": "Chainsaw Man Volume 6 Trade Paperback By Tatsuki Fujimoto",
        "price": "₱451"
    },
    {
        "class": "",
        "link": "https://invle.co/clc1xbi",
        "image": "/manga/product48.png",
        "description": "Jujutsu Kaisen, Volume 14 Trade Paperback",
        "price": "₱475"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1wm8",
        "image": "/manga/product49.png",
        "description": "Demon Slayer: Kimetsu no Yaiba, Vol. 12 (Paperback)",
        "price": "₱539"
    },
    {
        "class": "action",
        "link": "https://invle.co/clc1xgd",
        "image": "/manga/product50.png",
        "description": "Chainsaw Man, Volume 9 Trade Paperbac",
        "price": "₱475"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1wqe",
        "image": "/manga/product51.png",
        "description": "Demon Slayer: Kimetsu No Yaiba, Volume 13 Trade Paperback",
        "price": "₱475"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1xie",
        "image": "/manga/product52.png",
        "description": "Jujutsu Kaisen Volume 2 Trade Paperback By Gege Akutami",
        "price": "₱451"
    },
    {
        "class": "action",
        "link": "https://invle.co/clc1xo6",
        "image": "/manga/product53.png",
        "description": "Chainsaw Man Volume 4 Trade Paperback",
        "price": "₱451"
    },
    {
        "class": "romance",
        "link": "https://invle.co/clc1xs0",
        "image": "/manga/product54.png",
        "description": "Wotakoi: Love Is Hard for Otaku, Vol. 1 (Paperback)",
        "price": "₱971"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1y59",
        "image": "/manga/product55.png",
        "description": "Demon Slayer: Kimetsu No Yaiba, Volume 18",
        "price": "₱475"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1y9z",
        "image": "/manga/product56.png",
        "description": "Jujutsu Kaisen Manga | English Manga | Brand New | 0 7 9 10 11 14 16 AVAILABLE NOW!",
        "price": "₱470 - ₱549"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1yf3",
        "image": "/manga/product57.png",
        "description": "Kimetsu No Yaiba,Stories Of Water And Flame Trade Paperback",
        "price": "₱475"
    },
    {
        "class": "",
        "link": "https://invle.co/clc1y0e",
        "image": "/manga/product58.png",
        "description": "SPY X FAMILY (ENGLISH Comic) vol. 1-9 NEW",
        "price": "₱358"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1yix",
        "image": "/manga/product59.png",
        "description": "Jujutsu Kaisen, Vol. 12 (Paperback)",
        "price": "₱539"
    },
    {
        "class": "romance",
        "link": "https://invle.co/clc1ylf",
        "image": "/manga/product60.png",
        "description": "Wotakoi: Love Is Hard for Otaku, Vol. 3 (Paperback)",
        "price": "₱971"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1yo0",
        "image": "/manga/product61.png",
        "description": "Demon Slayer: Kimetsu No Yaiba, Volume 15 Trade Paperback",
        "price": "₱475"
    },
    {
        "class": "action",
        "link": "https://invle.co/clc1yta",
        "image": "/manga/product62.png",
        "description": "Chainsaw Man Volume 7 Trade Paperback",
        "price": "₱451"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1yxr",
        "image": "/manga/product63.png",
        "description": "Jujutsu Kaisen, Vol. 11 (Paperback)",
        "price": "₱519"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1z2q",
        "image": "/manga/product64.png",
        "description": "Demon Slayer: Kimetsu No Yaiba, Volume 16 Trade Paperback",
        "price": "₱475"
    },
    {
        "class": "action",
        "link": "https://invle.co/clc1yzy",
        "image": "/manga/product65.png",
        "description": "My Hero Academia, Volume 30 Trade Paperback",
        "price": "₱475"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1z4u",
        "image": "/manga/product66.png",
        "description": "Jujutsu Kaisen, Vol. 5 (Paperback)",
        "price": "₱519"
    },
    {
        "class": "romance",
        "link": "https://invle.co/clc1z83",
        "image": "/manga/product67.png",
        "description": "ON HAND!! ‼️1-5 ‼️WOTAKOI : Love is hard for Otaku",
        "price": "₱998"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1zbc",
        "image": "/manga/product68.png",
        "description": "Demon Slayer: Kimetsu No Yaiba, Volume 20 Trade Paperback",
        "price": "₱475"
    },
    {
        "class": "other",
        "link": "https://invle.co/clc1zlo",
        "image": "/manga/product69.png",
        "description": "Dr. Stone, Volume 19 (English Manga)",
        "price": "₱545"
    },
    {
        "class": "action fantasy",
        "link": "https://invle.co/clc1zpg",
        "image": "/manga/product70.png",
        "description": "Jujutsu Kaisen, Volume 15 Trade Paperback",
        "price": "₱475"
    },
    {
        "class": "action",
        "link": "https://invle.co/clc1zum",
        "image": "/manga/product71.png",
        "description": "CHAINSAWMAN (ENG Comic) Vol. 1-10",
        "price": "₱351"
    },
    {
        "class": "drama",
        "link": "https://invle.co/clc1zxw",
        "image": "/manga/product72.png",
        "description": "Blue Period, Vol. 1 (Paperback)",
        "price": "₱675"
    },
    {
        "class": "other",
        "link": "https://invle.co/clc2042",
        "image": "/manga/product73.png",
        "description": "Dr. STONE, Vol. 20 (Paperback)",
        "price": "₱499"
    },
    {
        "class": "drama",
        "link": "https://invle.co/clc20bk",
        "image": "/manga/product74.png",
        "description": "Blue Period, Vol. 3 (Paperback)",
        "price": "₱699"
    },
    {
        "class": "other",
        "link": "https://invle.co/clc20ej",
        "image": "/manga/product75.png",
        "description": "Dr. STONE, Vol. 1 (Paperback)",
        "price": "₱539"
    },
    {
        "class": "drama",
        "link": "https://invle.co/clc20fv",
        "image": "/manga/product76.png",
        "description": "Blue Period, Vol. 4 (Paperback)",
        "price": "₱699"
    },
    {
        "class": "other",
        "link": "https://invle.co/clc20ig",
        "image": "/manga/product77.png",
        "description": "[ON HAND] Dr. Stone Manga",
        "price": "₱550"
    },
    {
        "class": "drama",
        "link": "https://invle.co/clc20kd",
        "image": "/manga/product78.png",
        "description": "Blue Period, Vol. 5 (Paperback)",
        "price": "₱699"
    },
    {
        "class": "other",
        "link": "https://invle.co/clc20mx",
        "image": "/manga/product79.png",
        "description": "Dr. STONE, Vol. 19 (Paperback)",
        "price": "₱499"
    },
    {
        "class": "other",
        "link": "https://invle.co/clc20pc",
        "image": "/manga/product80.png",
        "description": "Dr. STONE, Vol. 21 (Paperback)",
        "price": "₱519"
    }
];