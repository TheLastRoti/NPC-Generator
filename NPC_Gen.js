characterBuilder.style.visibility = "hidden";

var answers_Firstname = [
    'Percival', 'Gobind', 'Alucard', 'Shade', 'Raine', 'Alexander', 'Omna', 'Tumelo', 
    'Siya', 'Sora', 'Yoshi', 'Anh',  'Gwendolyn', 'Flynn', 'Yagmur', 'Eser', 'Eren', 
    'Eventide', 'Ade', 'Zohar', 'Noor', 'Anesu', 'Terry', 'Morgan', 'Haldor', 'Finli', 'Lex', 
    'Vestel', 'Duris', 'Utari', 'Maor', 'Senja', 'Aki', 'Soor', 'Esmer', 'Ainsley', 'Heera', 
    'Aldus', 'Stace', 'Merryn', ];

 var answers_Lastname = [
    'Belmont', 'Haddock', 'Bludvist', 'Stompfoot', 'Stoneswallow', 'Lomaril', 'Bearbane', 'Flamehorn', 
    'Wheatfury', 'Ravenhide', 'Saintiron', 'Sagegazer', 'Astali', 'Godbrand', 'Elway', 'Uwdie', 'Abaron', 
    'Hending', 'Southwind', 'Moorridge', 'Wolfsnout', 'Baker', 'Smith', 'Mason', 'Livingston', 'Cintra', 
    'Sirakov', 'Lorz', 'Ballai', 'Byron', 'Everset', 'Dudley', 'Wan', 'Hazelton', 'Ainsley', 'Fletcher', 
    'Mannering', 'Woods', 'Ashdown', 'Dreamthief', ];

var answers_Nickname = [
    'Titch', 'Gibbs', 'Bullseye', 'Slim', 'Bobo', 'Slippy', 'Princess', 'Stout', 'Ace', 'Sticks', 'Vanilla', 
    'Dum-dum', 'Tank', 'Dino', 'Dapper', 'Black Cobra', 'Spark', 'Sizzle', 'Baby', 'Cutie Pie', 'Dynamite', 
    'Bigshot', 'Rags', 'Slayer', 'Sparkle', 'Hawk', 'Buzzkill', 'Wiz', 'Smiley', 'Jolly', 'Jade', 'Cuddles', 
    'Zen', 'Buster', 'T-Bone', 'Boomer', 'Zoomer', 'Blue', 'Marvel', ];

var answers_Age1 = [
    '19', '20', '22', '23', '24', '25', '26', '27', '30', '31', '32', '33', '36', '42', '46', '50', '59', '60', '63', '75', ];
    
var answers_Gender = [
    'male', 'female', 'bisexual', 'non-binary', 'gender-fluid', ];
    
var answers_Race = [
    'human', 'dragonborn', 'gnome', 'half-elf', 'elf', 'dwarf', 'halfling', 'tiefling', 'half-orc' ];

var answers_Realm = [
    'Coastlands', 'Highlands', 'Flatlands', 'Frostlands', 'Sunlands', 'Riverlands', 'Cliftlands', 'Woodlands', 'Shadowlands', ];
    
var answers_Location = [
    'in a hobbit hole', 'on top of a deserted tower', 'behind a secret waterfall', 'underneath a nearby tree', 'behind the local brewery',
    'deep within a concealed cave', 'in close radius to a dragons nest', 'in a humble wood shack', 'within their own mud shack',
    'somewhere in town', 'in the basement of the local tavern', 'inside the mayors residence', 'roaming town to town', 'on the side of the road',
    'in a place unknown', 'amongst a group of wolves', 'in between two orc encampments', 'underneath a dense forest', 'next to the ocean',
    'somewhere clearly lavish', 'quietly in a pig pen', 'in a tent by the river', 'as a frequent wanderer', 'in an abandoned cemetery',
    'with a group of loveable hill-bandits'];

var answers_Continent = [
    'Orsterra', 'Drava', 'Fiye', 'Melattus', 'Iwul', 'Xihul', 'Igreon', 'Neokrukus', 'Iplaes', 'Omica', 'Evis',
    'Anduin', 'Hyrule', 'Sachkhand', 'Khalistan', 'Shiokuzai', 'Wecheron', 'Besaal', 'Praeth', 'Laylan', 'Shrina',
    'Stellarum', 'Andithi Jameen', 'Dramestus' ];
        
var answers_Relationship = [
    'in a complicated relationship', 'single', 'married', 'recovering from a breakup', 'in the midst of a bad divorce', 
    'just entering their first relationship', 'falling for the love of their life', ];

var answers_Hobby = [
    'preparing for the end of the world', 'inventing a time machine', 'becoming friends with the local fauna', 'learning about exotic plants',
    'chasing down an elusive beast', 'fishing for the one that got away', 'hiking to their hearts content', 'learning of ancient religions',
    'building the perfect body', 'learning of their culture', 'trying to learn how to write poetry', 'mastering how to bake', 'experimenting with electricity',
    'investigating old ruins', 'collecting rare insects', 'breeding canines', 'breeding flowers', 'creating the perfect garden', 'creating an animal farm',
    'trying to invent new technologies', 'in the process of planning the perfect prank', 'occasionally dressing up in modern clothing',
    'collecting fascinating rocks', 'mapping the lands nearby', 'predicting the weather', 'understanding space and the cosmos itself',
    'writing a novel', 'creating sturdy armor', 'mixing old potions', 'crafting new weapons', 'experimenting with new instruments',
    'proving a complicated theory', 'spreading very convincing gossip', 'creating jewelry and art', 'painting a modern masterpiece', ];
    
var answers_EyeColour = [
    'blazing red', 'dark', 'hazel', 'baby blue', 'emerald green', 'piercing yellow', 'translucent', 'acorn brown', 'small', 
    'large', 'round', 'coal black', 'bloodshot', 'tired', 'filmy', 'unreadable', 'tense', 'welcoming', 'friendly', 'heartwarming',
     'innocent', 'intense', 'frightened', 'lustrous', 'blank' ];
    
var answers_Hair = [
    'layered', 'short-cut', 'extremely long', 'feathery', 'cascading', 'curly', 'bouncy', 'burnt', 'wavy', 'wet', 'wild',
    'patchy', 'luscious', 'heavy', 'flat', 'delicate', 'spiky', 'sweaty', 'unkempt', 'glowing', ];

var answers_Hair2 = [
    'crimson', 'ginger', 'angel', 'balding', 'silver', 'golden', 'ash-gray', 'obsidian', 'jet-black', 'almond', 'caramel',
    'colourless', 'rainbow', 'straight', 'soot-covered', ]; 
    
var answers_SkinAdjective = [
    'scaly', 'goose-bumped', 'rough', 'petal-soft', 'blemished', 'coarse', 'delicate', 'hairy', 'snooth', 'slick', 'unblemished',
    'fragrant', 'dirty', 'lackluster', 'youthful', ];

var answers_SkinColour = [
    'dusky', 'pale', 'sand-coloured', 'painted', 'ebony', 'vanilla', 'albino', 'blushing', 'creamy', 'freckled', 'bright',
    'blue-tinged', 'healthy', 'flushed', 'brown', ];
        
var answers_Height = [
    '1 metre', '1.5 metres', ' 2 metres', '3 foot 5 inches', '4 feet', '5 feet', '6 feet', '4 foot 5 inches', '5 foot 5 inches', '6 foot 5 inches', ];
    
var answers_Build = [
    'a medium', 'an extremely large', 'a small', 'a puny', 'an average', 'an above-average', ' a large', 'an athletic', 'a slender', 'an irregular', ];
        
var answers_Face1 = [
    'a calm', 'an anxious', 'a grim', 'an enthusiastic', 'an angelic', 'a pained', 'a peculiar', 'an odd', 'a rested', 'a stern', 'a suspicious', 
    'an ordinary', 'an intelligent', 'a cool', 'a charming', 'a childlike', 'a deceptive', 'a demonic', 'a fierce', 'an alert',  ];
            
var answers_Face2 = [
    'elegant', 'thin', 'hairless', 'hairy', 'acned', 'dimpled', 'chinless', 'scarred', 'stretched', 'strong', 'unwashed',
    'spotted', 'unreadable', 'expressive', 'mud-splattered', 'unremarkable', 'glamourous', 'edgy', 'sharp', 'oval', ];
            
var answers_Description = [
    'a long, flowing beard', 'a short and stubby beard', 'a goatee', 'a small scar on their left cheek', 'their hood taken off', 
    'three nose piercings', 'a smell of cedar wood permeating off them', 'sweat dripping off them', 'extremely long nails',
    'a shawl wrapped around their neck', 'two extra fingers on each hand', 'a smell of lavender permeating off them',
    'their right arm missing', 'their left leg missing', 'a small lisp', 'a deep voice', 'a very high-pitched voice', 
    'a makeshift cape around themselves', 'a large chestplate attached to their person', 'light, flowing garbs', ];

var answers_Quirk1 = [
    'are an alcoholic', 'are blind in one eye', 'are a compulsive gambler', 'a hopeless romantic', 'are very patient', 'are a perfectionist',
    'are very courageous, to a fault', 'are very detached from their emotions', 'are very emotional', 'are materialistic', 'cant keep a secret',
    'cant play fair', 'dont care about risks', 'complicate situations easily', 'dont like crowds', 'talk very quietly', 'talk very loudly', 
    'talk very slow', 'talk very fast', 'always judge people', 'are very good at keeping secrets', 'dont care about anything', 
    'are slightly insane', 'are easily excitable', 'are always bored', 'are slightly lazy', 'are noy direct at all', 'are very intense', 
    'are very optimistic', ];
        
var answers_Quirk2 = [
    'a short temper', 'a habit to think aloud', 'a solution to everything', 'a pet dog', 'a pet cat', 'an orc cousin', 'a friendship with the trees',
    'great musical talent', 'an unusual gift for finding expensive clothing', 'a beautiful singing voice', 'a beautiful outlook on life',
    'a great sense of humour', 'lost many friends', 'gained a knack for lying', 'gained of skill of bartering', 'gained a skill for convincing',
    'quite a bit of wisdom', 'a story for everything', 'a very large inheritance', 'a habit of daydreaming', 'a considerable appetite', 
    'good experience in hunting', 'no concept of social cues', 'persuasive dance moves', 'good fighting skills', ];
        
var answers_Dream = [
    'climb the tallest mountain', 'get married to royalty', 'slay a dragon', 'become famous', 'run a tavern', 'start a world religion',
    'bake the sweetest pastry', 'build the fastest boat', 'tame the strongest beast', 'brew the worlds most pungent potion',
    'win a competition', 'appease a god', 'avenge their family members', 'create a utopia', 'cause mayhem', 'be a hero', 'see the world',
    'establish their own country', 'thwart destiny', 'solve a mystery', 'answer a call to adventure', 'become the strongest',
    'become the wisest', 'be a master in their field', 'explore the unexplored', 'live forever', 'find a cure to a world plague',
    'rid the world of evil', 'forget their past', 'spread joy', ];
        
var answers_Skill = [
    'bake an explosive cheesecake', 'act extremely charming', 'talk to animals', 'set fires from afar', 'call upon the gods',
    'speak the language of dragons', 'enlist the help of the local fish population', 'create makeshift explosives',
    'communicate with the devil', 'run extremely quickly', 'throw things very far', 'engineer a small sculpture',
    'speak five languages simultaneously', 'have better writing skills', 'become an expert thief', 'shoot two bows at the same time',
    'hide in plain sight', 'act like an evil wizard', 'act hopelessly dumb', 'smell really bad', ];
            
var answers_Age2 = [
    '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', ];

var answers_WeaponTime = [
    'Rarely', 'Occasionally', 'As often as possible', 'All the time', 'Sometimes', 'On several occasions', 'Frequently',
    'Lately', 'Generally', ];
            
var answers_Weapon = [
    'mace', 'club', 'scimitar', 'quarterstaff', 'spear', 'sickle', 'dagger', 'handaxe', 'crossbow', 'battleaxe', 'greatsword', 'halberd', 
    'rapier', 'lance', 'longsword', 'whip', 'longbow', 'glaive', 'shortsword', 'hammer', ];
        
var answers_WeaponName = [
    'Justifier', 'Warmonger', 'Falchion', 'Kirpan', 'Shastar', 'Nirbhao', 'Sting', 'Echo', 'Nightsbane', 'Longclaw', 'Heartsbane', 'Widows Wisp', 
    'Omega', 'Starshatter', 'Scalpel', 'Fleshrender', 'Lifes Limit', 'Stalker', 'Blazelighter', 'Suspension', 'Florance', 'Corruption', 'Infamy',
    'Dragonsbane', 'Seaspinner', 'Orenmier', 'Deathgrazer', 'Cometsparkle', 'Felthorn', 'Anduril', ];
            
var answers_FunnyTrait = [
    'easy-going', 'clever', 'friendly', 'not-so-funny', 'grumpy', 'kind', 'lazy', 'loud', 'nasty', 'moody', 'quiet', 'wise', 'silly', 'unlucky',
    'chatty', 'brave', 'popular', ];
                
var answers_FamilyMember = [
    'brother', 'sister', 'father', 'mother', 'adopted sibling', 'daughter', 'son', 'grandmother', 'grandfather', 'great-grandmother', 'great-grandfather',
    'aunt', 'uncle', 'nephew', 'niece', ];
                
var answers_Year = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', ];

var answers_Background = [
    'sheltered', 'abusive', 'happy', 'religious', 'free', 'adventurous', 'fun-filled', 'artsy', 'healthy', 'troubled', 'musical', 'prophetic',
    'normal', 'unique', 'quiet', 'uneventful', 'violent', 'graceful', 'rough', 'experiential', ];
            
var answers_MonsterAdjective = [
    'ferocious', 'ravenous', 'hidious', 'voiceless, silent', 'towering', 'formidable', 'bloodthirsty', 'insane', 'unnatural', 'frightening',
    'dreadful', 'mysterious', 'wretched', 'horrendous', 'legendary', 'indestructable', 'menacing', 'terrible', 'cruel', 'nocturnal' ];
            
var answers_Monster = [
    'demogorgons', 'beholders', 'dragons', 'wolves', 'orcs', 'goblins', 'trolls', 'skeletons', 'elementals', 'giants', 'arachnids', 'kobolds',
    'minotaurs', 'manticores', 'mimics', 'zombies', 'wraiths', 'lizardfolk', 'slimes', 'cats' ];
        
var answers_HomeAdjective = [
    'humble', 'large', 'cozy', 'hidden', 'luxurious', 'beautiful', 'comfortable', 'ancient', 'prehistoric', 'small', 'tiny', 'natural', 'distant',
    'peaceful', 'ancestral', 'pious', 'mighty', 'rural', 'snug', 'urban', 'soothing', 'regular', 'quaint', 'secluded', 'unappealing', ];
                
var answers_GodAdjective = [
    'vehemently', 'crazily', 'constantly', 'beautifully', 'willfully', 'truthfully', 'cheerfully', 'sloppily', 'expertly', 'unethically',
    'unfortunately', 'boldly', 'blissfully', 'enthusiastically', 'dilligently', 'awkwardly', 'carefully', 'hungrily', 'sleepily', 
    'violently', ];
            
 var answers_God = [
    'Fuhenda', 'Rava', 'Mimis', 'Terenus', 'Sodona', 'Syagi', 'Cadonde', 'Tuesis', 'Hendjasu', 'Natara', 'Zenera', 'Shivolk', 'Bhroveek',
    'Warasil', 'Pystus', 'Maagi', 'Iluvitar', 'Galdera', 'Aelfric', 'Sealtidge', ];
                
var answers_GodThing1 = [
    'Thunder', 'Friendship', 'Horses', 'Poetry', 'Love', 'Beauty', 'Fertility', 'The Sky', 'The Ocean', 'Death', 'Hell', 'Family', 'Nature',
    'Poetry', 'Honour', 'Chance', 'Mountains', 'Learning', 'Justice', 'Sleep', 'Peace', 'Humour', 'Music', 'War', 'Knowlege', 'Monsters',
    'Magic', 'Life', 'Animals', 'Light', ];
                    
var answers_GodThing2 = [
    'Darkness', 'The Moon', 'The Sun', 'Balance', 'Wealth', 'Fire', 'Wine', 'Roadways', 'Autumn', 'Rain', 'Snow', 'Dance', 'Faith',
    'Luck', 'Song', 'Language', 'Fate', 'Health', 'Happiness', 'Water', 'The Wind', 'The Earth', 'Summer', 'Spring', 'Winter',
    'Faith', 'Speed', 'Exploration', 'Disease', 'Technology', ];
                    
var answers_Alignment1 = [
    'Lawful', 'Chaotic', 'Neutral', ];

var answers_Alignment2 = [
    'Good', 'Evil', 'Neutral'];
                
 var answers_Trait1 = [
    'agreeble', 'ambitious', 'lively', 'loyal', 'friendly', 'honest', 'polite', 'witty', 'sarcastic', 'clever', 'charming', 'resourceful', 'sincere',
    'sensible', 'considerate', 'independent', 'amusing', 'capable', 'humble', 'patient', 'hard-working', 'generous', 'discreet', 'dynamic',  ];
                
var answers_Trait2 = [
    'clumsy', 'grumpy', 'troublesome', 'uptight', 'scary', 'direct', 'thoughtless', 'lazy', 'obnoxious', 'indecisive', 'offensive', 'unpleasant',
    'know-it-all', 'disobedient', 'lazy', 'defeated', 'arrogant', 'argumentative', 'amoral', 'annoying', 'crafty', 'materialistic', 'impulsive',
    'helpless', 'scary', ];
                
var answers_Thing = [
    'trees', 'bats', 'bears', 'kobolds', 'dragons', 'the poor', 'the rich', 'royalty', 'canines', 'cats', 'rodents', 'birds', 'monsters', 'beasts',
    'thieves', 'researchers', 'adventurers', 'children', 'religious people', 'atheists', 'artists', 'farmers', 'large animals', 'victims of bar fights',
    'the elderly', 'bakers', 'people who can speak 3 or more languages', 'dragonborn', 'elves', 'halflings' ];
                    
var answers_HateThing = [
    'nature', 'society', 'cake', 'people', 'adventurers', 'cheaters', 'liars', 'technology', 'books', 'exercise', 'art', 'music', 'dance', 'singing',
    'bars', 'math', 'shopping', 'politics', 'philosophy', 'medicine', 'thieves', 'the poor', 'gore', 'the rich', 'tradition' ];
                    
var answers_ScareThing = [
    'rabbits', 'hail', 'elections', 'free-will', 'sports', 'baths', 'sourdough', 'law-enforcement', 'educated people', 'toddlers', 'middle-aged women',
    'people who wear masks', 'things that fly', 'the night', 'mosquitos', 'pets', 'growing old', 'dying', 'living forever', 'becoming fat', 'taxes',
    'magic', 'wars', 'their distant relative', 'a nearby neighbour', ];
                
var answers_LoveThing = [
    'voyages', 'food', 'sleeping', 'money', 'gifts', 'isolation', 'clothes', 'fighting', 'spying', 'making fake promises', 'working', 'daybreak',
    'sunsets', 'summer', 'winter', 'autumn', 'spring', 'wagons', 'dragons', 'martial-arts', 'revenge', 'pranks', 'secrets', 'persuasion',
    'showing off' ];
                    
var answers_Personality = [
    'optimism', 'fearlessness', 'encouragement', 'precision', 'reliability', 'sociability', 'modesty', 'cooperation', 'dignity', 'faithfulness',
    'responsibility', 'athleticism', 'kindness', 'innovation', 'reflection', 'passion', 'violence', 'introspection', 'sympathy', 'patriotism',
    'arguments', 'interrupting', 'dark humour', 'foolishness', 'pessimism' ];
                        
var answers_PlotHook = [
    'theyre a fountain of wild magic and cannot control it', 'theyre slowly becoming a plant', 'their blood is the cure to a terrible and deadly sickness', 
    'they recently obtained a map to a great treasure', 'they were tricked into wearing a cursed trinket', 'they want to tame a basilisk',
    'they need to deliver a magical trinket to their childhood friend', 'they are actually a white dragon', 'they have been pressured by local drug dealers into selling drugs',
    'they are slowly becoming a plant', 'they are being blackmailed into challenging a PC to a duel to the death', 'they are the host of a terrible and deadly sickness',
    'they are a serial killer at night', 'they are a time traveler from a distant future. They need help sleeping for a few thousand years', 'they have been enslaved by a demon',
    'they are followed day and night by an animated bed.', 'they are obsessed with a nearby cavern with amazing waterfalls', 'they need help organizing a fighting competition',
    'they are a secret vigilante', 'their house has been eaten by a purple worm', 'they were hired to assassinate the PCs by an evil dinosaur-king', 'they are a cannibal',
    'they are currently being chased by law enforcement and asks the PCs for protection', 'they are obsessed with a nearby valley with luxurious vegetation',
    'they are obsessed with a nearby cliff with an eerily beautiful view', 'they had recently woken up with a magical rune on their left hand', 'they are addicted to dragon blood',
    'their home has been infested by zombies', 'they need someone to deliver a minotaur to the local butcher', 'they are looking for their lost precious ring',
    'they are secretly a werewolf', 'they sparked a war between two feuding nations', 'they accidentally angered a group of zombified bears', 'they are hoarding an emperors prized treasure',
    'they have an adventurer-hating doppelganger', 'they are taking care of a secret heir to the throne', 'they know of an impending orc-attack on a nearby village', 
    'they are a seasoned war veteran', 'they have a secret treasure trove of assorted concoctions', 'they are the leader of a faraway cult. The cult wants its revenge', ];

    var answers_Strength = [ 
        '1 [-5]', '2 [-4]', '3 [-4]', '4 [-3]', '5 [-3]', '6 [-2]', '7 [-2]', '8 [-1]', '9 [-1]', '10 [0]', '11 [0]', '12 [+1]', '13 [+1]', '14 [+2]',
        '15 [+2]', '16 [+3]', '17 [+3]', '18 [+4]',
    ]
    
    var answers_Dexterity = [
        '1 [-5]', '2 [-4]', '3 [-4]', '4 [-3]', '5 [-3]', '6 [-2]', '7 [-2]', '8 [-1]', '9 [-1]', '10 [0]', '11 [0]', '12 [+1]', '13 [+1]', '14 [+2]',
        '15 [+2]', '16 [+3]', '17 [+3]', '18 [+4]',
    ]
    
    var answers_Constitution = [
        '1 [-5]', '2 [-4]', '3 [-4]', '4 [-3]', '5 [-3]', '6 [-2]', '7 [-2]', '8 [-1]', '9 [-1]', '10 [0]', '11 [0]', '12 [+1]', '13 [+1]', '14 [+2]',
        '15 [+2]', '16 [+3]', '17 [+3]', '18 [+4]',
    ]
    
    var answers_Intelligence = [
        '1 [-5]', '2 [-4]', '3 [-4]', '4 [-3]', '5 [-3]', '6 [-2]', '7 [-2]', '8 [-1]', '9 [-1]', '10 [0]', '11 [0]', '12 [+1]', '13 [+1]', '14 [+2]',
        '15 [+2]', '16 [+3]', '17 [+3]', '18 [+4]',
    ]
    
    var answers_Wisdom = [
        '1 [-5]', '2 [-4]', '3 [-4]', '4 [-3]', '5 [-3]', '6 [-2]', '7 [-2]', '8 [-1]', '9 [-1]', '10 [0]', '11 [0]', '12 [+1]', '13 [+1]', '14 [+2]',
        '15 [+2]', '16 [+3]', '17 [+3]', '18 [+4]',
    ]
    
    var answers_Charisma = [
        '1 [-5]', '2 [-4]', '3 [-4]', '4 [-3]', '5 [-3]', '6 [-2]', '7 [-2]', '8 [-1]', '9 [-1]', '10 [0]', '11 [0]', '12 [+1]', '13 [+1]', '14 [+2]',
        '15 [+2]', '16 [+3]', '17 [+3]', '18 [+4]',
    ]


document.getElementById('answerButton').onclick = function () {
    characterBuilder.style.visibility = 'visible';
    var answer_Firstname = answers_Firstname[Math.floor(Math.random() * answers_Firstname.length)];
    var answer_Lastname = answers_Lastname[Math.floor(Math.random() * answers_Lastname.length)];
    var answer_Nickname = answers_Nickname[Math.floor(Math.random() * answers_Nickname.length)];
    var answer_Age1 = answers_Age1[Math.floor(Math.random() * answers_Age1.length)];
    var answer_Gender = answers_Gender[Math.floor(Math.random() * answers_Gender.length)];
    var answer_Race = answers_Race[Math.floor(Math.random() * answers_Race.length)];
    var answer_Realm = answers_Realm[Math.floor(Math.random() * answers_Realm.length)];
    var answer_Location = answers_Location[Math.floor(Math.random() * answers_Location.length)];
    var answer_Continent = answers_Continent[Math.floor(Math.random() * answers_Continent.length)];
    var answer_Relationship = answers_Relationship[Math.floor(Math.random() * answers_Relationship.length)];
    var answer_Hobby = answers_Hobby[Math.floor(Math.random() * answers_Hobby.length)];
    var answer_EyeColour = answers_EyeColour[Math.floor(Math.random() * answers_EyeColour.length)];
    var answer_Hair = answers_Hair[Math.floor(Math.random() * answers_Hair.length)];
    var answer_SkinAdjective = answers_SkinAdjective[Math.floor(Math.random() * answers_SkinAdjective.length)];
    var answer_SkinColour = answers_SkinColour[Math.floor(Math.random() * answers_SkinColour.length)];
    var answer_Height = answers_Height[Math.floor(Math.random() * answers_Height.length)];
    var answer_Build = answers_Build[Math.floor(Math.random() * answers_Build.length)];
    var answer_Face1 = answers_Face1[Math.floor(Math.random() * answers_Face1.length)];
    var answer_Face2 = answers_Face2[Math.floor(Math.random() * answers_Face2.length)];
    var answer_Description = answers_Description[Math.floor(Math.random() * answers_Description.length)];
    var answer_Quirk1 = answers_Quirk1[Math.floor(Math.random() * answers_Quirk1.length)];
    var answer_Quirk2 = answers_Quirk2[Math.floor(Math.random() * answers_Quirk2.length)];
    var answer_Dream = answers_Dream[Math.floor(Math.random() * answers_Dream.length)];
    var answer_Skill = answers_Skill[Math.floor(Math.random() * answers_Skill.length)];
    var answer_Age2 = answers_Age2[Math.floor(Math.random() * answers_Age2.length)];
    var answer_WeaponTime = answers_WeaponTime[Math.floor(Math.random() * answers_WeaponTime.length)];
    var answer_Weapon = answers_Weapon[Math.floor(Math.random() * answers_Weapon.length)];
    var answer_WeaponName = answers_WeaponName[Math.floor(Math.random() * answers_WeaponName.length)];
    var answer_FunnyTrait = answers_FunnyTrait[Math.floor(Math.random() * answers_FunnyTrait.length)];
    var answer_FamilyMember = answers_FamilyMember[Math.floor(Math.random() * answers_FamilyMember.length)];
    var answer_Year = answers_Year[Math.floor(Math.random() * answers_Year.length)];
    var answer_Background = answers_Background[Math.floor(Math.random() * answers_Background.length)];
    var answer_MonsterAdjective = answers_MonsterAdjective[Math.floor(Math.random() * answers_MonsterAdjective.length)];
    var answer_Monster = answers_Monster[Math.floor(Math.random() * answers_Monster.length)];
    var answer_HomeAdjective = answers_HomeAdjective[Math.floor(Math.random() * answers_HomeAdjective.length)];
    var answer_Hair2 = answers_Hair2[Math.floor(Math.random() * answers_Hair2.length)];
    var answer_GodAdjective = answers_GodAdjective[Math.floor(Math.random() * answers_GodAdjective.length)];
    var answer_God = answers_God[Math.floor(Math.random() * answers_God.length)];
    var answer_GodThing1 = answers_GodThing1[Math.floor(Math.random() * answers_GodThing1.length)];
    var answer_GodThing2 = answers_GodThing2[Math.floor(Math.random() * answers_GodThing2.length)];
    var answer_Alignment1 = answers_Alignment1[Math.floor(Math.random() * answers_Alignment1.length)];
    var answer_Alignment2 = answers_Alignment2[Math.floor(Math.random() * answers_Alignment2.length)];
    var answer_Trait1 = answers_Trait1[Math.floor(Math.random() * answers_Trait1.length)];
    var answer_Trait2 = answers_Trait2[Math.floor(Math.random() * answers_Trait2.length)];
    var answer_Thing = answers_Thing[Math.floor(Math.random() * answers_Thing.length)];
    var answer_HateThing = answers_HateThing[Math.floor(Math.random() * answers_HateThing.length)];
    var answer_ScareThing = answers_ScareThing[Math.floor(Math.random() * answers_ScareThing.length)];
    var answer_LoveThing = answers_LoveThing[Math.floor(Math.random() * answers_LoveThing.length)];
    var answer_Personality = answers_Personality[Math.floor(Math.random() * answers_Personality.length)];
    var answer_PlotHook = answers_PlotHook[Math.floor(Math.random() * answers_PlotHook.length)];
    var answer_Strength = answers_Strength[Math.floor(Math.random() * answers_Strength.length)];
    var answer_Dexterity = answers_Dexterity[Math.floor(Math.random() * answers_Dexterity.length)];
    var answer_Constitution = answers_Constitution[Math.floor(Math.random() * answers_Constitution.length)];
    var answer_Intelligence = answers_Intelligence[Math.floor(Math.random() * answers_Intelligence.length)];
    var answer_Wisdom = answers_Wisdom[Math.floor(Math.random() * answers_Wisdom.length)];
    var answer_Charisma = answers_Charisma[Math.floor(Math.random() * answers_Charisma.length)];

    if (answer_Alignment1 == answer_Alignment2){
        answer_Alignment1 = "True";
        answer_Alignment2 = "Neutral";
        }
        
    document.getElementById('answerContainer_Firstname').innerHTML = answer_Firstname;
    document.getElementById('answerContainer_Firstname1').innerHTML = answer_Firstname;
    document.getElementById('answerContainer_Firstname2').innerHTML = answer_Firstname;
    document.getElementById('answerContainer_Firstname3').innerHTML = answer_Firstname;
    document.getElementById('answerContainer_Firstname4').innerHTML = answer_Firstname;
    document.getElementById('answerContainer_Firstname5').innerHTML = answer_Firstname;
    document.getElementById('answerContainer_Firstname6').innerHTML = answer_Firstname;
    document.getElementById('answerContainer_Lastname').innerHTML = answer_Lastname;
    document.getElementById('answerContainer_Nickname').innerHTML = answer_Nickname;
    document.getElementById('answerContainer_Age1').innerHTML = answer_Age1;
    document.getElementById('answerContainer_Gender').innerHTML = answer_Gender;
    document.getElementById('answerContainer_Race').innerHTML = answer_Race;
    document.getElementById('answerContainer_Realm').innerHTML = answer_Realm;
    document.getElementById('answerContainer_Location').innerHTML = answer_Location;
    document.getElementById('answerContainer_Continent').innerHTML = answer_Continent;
    document.getElementById('answerContainer_Relationship').innerHTML = answer_Relationship;
    document.getElementById('answerContainer_Hobby').innerHTML = answer_Hobby;
    document.getElementById('answerContainer_EyeColour').innerHTML = answer_EyeColour;
    document.getElementById('answerContainer_Hair').innerHTML = answer_Hair;
    document.getElementById('answerContainer_SkinAdjective').innerHTML = answer_SkinAdjective;
    document.getElementById('answerContainer_SkinColour').innerHTML = answer_SkinColour;
    document.getElementById('answerContainer_Height').innerHTML = answer_Height;
    document.getElementById('answerContainer_Build').innerHTML = answer_Build;
    document.getElementById('answerContainer_Face1').innerHTML = answer_Face1;
    document.getElementById('answerContainer_Face2').innerHTML = answer_Face2;
    document.getElementById('answerContainer_Description').innerHTML = answer_Description;
    document.getElementById('answerContainer_Quirk1').innerHTML = answer_Quirk1;
    document.getElementById('answerContainer_Quirk2').innerHTML = answer_Quirk2;
    document.getElementById('answerContainer_Dream').innerHTML = answer_Dream;
    document.getElementById('answerContainer_Skill').innerHTML = answer_Skill;
    document.getElementById('answerContainer_Age2').innerHTML = answer_Age2;
    document.getElementById('answerContainer_WeaponTime').innerHTML = answer_WeaponTime;
    document.getElementById('answerContainer_Weapon').innerHTML = answer_Weapon;
    document.getElementById('answerContainer_WeaponName').innerHTML = answer_WeaponName;
    document.getElementById('answerContainer_FunnyTrait').innerHTML = answer_FunnyTrait;
    document.getElementById('answerContainer_FamilyMember').innerHTML = answer_FamilyMember;
    document.getElementById('answerContainer_Year').innerHTML = answer_Year;
    document.getElementById('answerContainer_Background').innerHTML = answer_Background;
    document.getElementById('answerContainer_MonsterAdjective').innerHTML = answer_MonsterAdjective;
    document.getElementById('answerContainer_Monster').innerHTML = answer_Monster;
    document.getElementById('answerContainer_HomeAdjective').innerHTML = answer_HomeAdjective;
    document.getElementById('answerContainer_Hair2').innerHTML = answer_Hair2;
    document.getElementById('answerContainer_GodAdjective').innerHTML = answer_GodAdjective;
    document.getElementById('answerContainer_God').innerHTML = answer_God;
    document.getElementById('answerContainer_GodThing1').innerHTML = answer_GodThing1;
    document.getElementById('answerContainer_GodThing2').innerHTML = answer_GodThing2;
    document.getElementById('answerContainer_Alignment1').innerHTML = answer_Alignment1;
    document.getElementById('answerContainer_Alignment2').innerHTML = answer_Alignment2;
    document.getElementById('answerContainer_Trait1').innerHTML = answer_Trait1;
    document.getElementById('answerContainer_Trait2').innerHTML = answer_Trait2;
    document.getElementById('answerContainer_Thing').innerHTML = answer_Thing;
    document.getElementById('answerContainer_HateThing').innerHTML = answer_HateThing;
    document.getElementById('answerContainer_ScareThing').innerHTML = answer_ScareThing;
    document.getElementById('answerContainer_LoveThing').innerHTML = answer_LoveThing;
    document.getElementById('answerContainer_Personality').innerHTML = answer_Personality;
    document.getElementById('answerContainer_PlotHook').innerHTML = answer_PlotHook;
    document.getElementById('answerContainer_Strength').innerHTML = answer_Strength;
    document.getElementById('answerContainer_Dexterity').innerHTML = answer_Dexterity;
    document.getElementById('answerContainer_Constitution').innerHTML = answer_Constitution;
    document.getElementById('answerContainer_Intelligence').innerHTML = answer_Intelligence;
    document.getElementById('answerContainer_Wisdom').innerHTML = answer_Wisdom;
    document.getElementById('answerContainer_Charisma').innerHTML = answer_Charisma;

};