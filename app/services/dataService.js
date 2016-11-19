app.service('dataService', function(){
    var data = {
        "Profile":{
            "Name": "Brian Fuller",
            "Photo": "app/content/images/ProfilePic.jpg",
            "Description": [
                "Hello, my name is Brian Fuller, and I am a software engineer. Throughout my life I've been completely enamoured with computers and technology. Having an interest in software since the very beginning, I've analyzed, and tinkered with, everything from the latest greatest video games to productivity applications. Although it may seem like an easy path for someone to take that interest and develop it into a career, my parents were ever determined to make sure I 'went outside more'. Despite frequent delays, I can nevertheless say that although they won many battles, I definitively won the war.",

                "Originally from the south suburbs of Chicago, I eventually came to my senses and have since moved to the north suburbs. I could not be more pleased. Believe me, I have seen the light. The north-side is glorious! I am never going back.",

                "Some of my non-techincal personal interests include: discussing movie plotlines and casting decisions, absolutely everything related to video games (the industry, history, favorite games, game mechanics, design decisions, etc.), and the self-induced anguish I ritually experience by watching the Chicago Bears play football."
            ]  
        },
        "Games": {
            "THHD": {
                "Key": "THHD",
                "Name": "Tony Hawk's Pro Skater HD",
                "Date": "05-01-2012",
                "Photo": "https://upload.wikimedia.org/wikipedia/en/a/ac/TonyHawkHDArt.jpg",
                "Trailer": "https://www.youtube.com/embed/fXkW_FY1SMg",
                "Description": "",
                "Platform": ["Xbox360", "PS3", "PC"],
                "Genre": "Action/Sports",
                "Tags": ["Action", "Sports", "Skateboarding", "Tony Hawk", "Steam"],
                "Tech": ["Unrealscript", "C++"],
                "GameEngine": "Unreal Development Kit - UE3",
                "Publisher": "Activision",
                "Developer": "Robomodo",
                "DevTitle": "Software Engineer"
            },
            "TheBeasties": {
                "Key": "TheBeasties",
                "Name": "The Beasties: Hello World",
                "Date": "08-30-2012",
                "Photo": "",
                "Trailer": "https://www.youtube.com/embed/0WAK4g-K8zo",
                "Description": "",
                "Platform": ["iOS"],
                "Genre": "Digital Pet Simulator",
                "Tags": ["Virtual Pet", "Pet"],
                "Tech": ["C#"],
                "GameEngine": "Unity 3D",
                "Publisher": "Toy Studio",
                "Developer": "Robomodo",
                "DevTitle": "Software Engineer"
            },
            "SkateboardSlam": {
                "Key": "SkateboardSlam",
                "Name": "Skateboard Slam",
                "Date": "09-30-2013",
                "Photo": "",
                "Trailer": "https://www.youtube.com/embed/74DBR8Tmg-k",
                "Description": "",
                "Platform": ["iOS"],
                "Genre": "Action/Sports",
                "Tags": ["Action", "Sports", "Skateboarding"],
                "Tech": ["C#", "Objective-C", "Java"],
                "GameEngine": "Unity 3D",
                "Publisher": "Zynga",
                "Developer": "Robomodo",
                "DevTitle": "Software Engineer"
            },
            "HungerGames": {
                "Key": "HungerGames",
                "Name": "Hunger Games: Panem Run",
                "Date": "11-15-2013",
                "Photo": "",
                "Trailer": "https://www.youtube.com/embed/VNtwcNmbCrc",
                "Description": "",
                "Platform": ["iOS", "Android"],
                "Genre": "Action",
                "Tags": ["Action", "Endless Runner", "Hunger Games"],
                "Tech": ["C#"],
                "GameEngine": "Unity 3D",
                "Publisher": "Reliance Entertainment",
                "Developer": "Robomodo",
                "DevTitle": "Software Engineer"
            },
            "ZombieYoga": {
                "Key": "ZombieYoga",
                "Name": "Zombie Yoga",
                "Date": "11-15-2012",
                "Photo": "app/content/images/games/ZombieYoga.jpg",
                "Trailer": "",
                "Description": "",
                "Platform": ["PC"],
                "Genre": "Action/Experimental Storytelling",
                "Tags": ["Action", "Zombies", "Yoga", "IndieCade", "Kinect", "Kinect For Windows"],
                "Tech": ["C#"],
                "GameEngine": "Unity 3D",
                "Publisher": "DePaul University",
                "Developer": "DePaul University",
                "DevTitle": "Lead Software Engineer"
            }
        },
        "Projects": [
            {
                "Key": "diji-touch",
                "Name": "diji-touch Vending Machine",
                "Description": "",
                "Date": "",
                "Clients": ["Mondelez International"],
                "Tags": [],
                "Tech": ["C#", "JavaScript", "HTML", "CSS", "ASP.NET", "MVC", "WPF", "WCF Services", "SQL", "jQuery"]
            },
            {
                "Key": "Import",
                "Name": "Import Brokerage Website Prototype",
                "Description": "",
                "Date": "",
                "Clients": ["Livingston International"],
                "Tags": [],
                "Tech": ["C#", "JavaScript", "HTML", "CSS", "KnockoutJS"]
            },
            {
                "Key": "Converge",
                "Name": "Clarity Converge",
                "Description": "",
                "Date": "",
                "Clients": ["AT&T", "Verizon Communications", "BT Group", "InterCall Inc", "Level3 Communications"],
                "Tags": [],
                "Tech": ["C#", "JavaScript", "HTML", "CSS", "ASP.NET", "MVC", "SQL", "UCMA"]
            },
            {
                "Key": "Attendant",
                "Name": "Clarity Converge Attendant",
                "Description": "",
                "Date": "",
                "Clients": ["Qualcomm Inc"],
                "Tags": [],
                "Tech": ["C#", "JavaScript", "HTML", "CSS", "AngularJS"]
            }
        ],
        "Resumes": [
            {
                "Photo": "app/content/images/pdf_icon.jpg",
                "FileLocation": "http://www.google.com",
                "AltText" : "Download Resume.pdf Image",
                "Description": "Resume (.pdf)"
            },
            {
                "Photo": "app/content/images/docx_icon.jpeg",
                "FileLocation": "http://www.google.com",
                "AltText" : "Download Resume.docx Image",
                "Description": "Resume (.docx)"
            }
        ],
        "ContactInfo": [
            {
                "Key": "Email",
                "Info": "contactme@brianfuller.us"
            }
        ]
    };
    
    return data;
});