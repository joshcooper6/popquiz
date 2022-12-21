const db = {
    'Lady Gaga': {
      questions: 
        [{    
            id: 1,    
            question: "What is Lady Gaga's real name?",    
            answers: ["Stefani Joanne Angelina Germanotta", "Madonna", "Beyonce", "Jennifer Lopez"],
            correctAnswer: "Stefani Joanne Angelina Germanotta"
        },
        {
            id: 2,
            question: "What year did Lady Gaga release her debut album, 'The Fame'?",
            answers: ["2008", "2010", "2012", "2014"],
            correctAnswer: "2008"
        },
        {
            id: 3,
            question: "Which of the following is NOT a Lady Gaga album?",
            answers: ["Born This Way", "Artpop", "The Fame Monster", "Revival"],
            correctAnswer: "Revival"
        },
        {
            id: 4,
            question: "How many Grammy Awards has Lady Gaga won?",
            answers: ["6", "8", "10", "12"],
            correctAnswer: "6"
        },
        {
            id: 5,
            question: "Lady Gaga co-wrote the song 'Telephone' with which artist?",
            answers: ["Britney Spears", "Katy Perry", "Madonna", "Beyonce"],
            correctAnswer: "Beyonce"
        },
        {
            id: 6,
            question: "Lady Gaga played the lead role in which 2018 film?",
            answers: ["A Star is Born", "Bohemian Rhapsody", "Rocketman", "The Greatest Showman"],
            correctAnswer: "A Star is Born"
        },
        {
            id: 7,
            question: "Lady Gaga's song 'Bad Romance' was inspired by which singer?",
            answers: ["Madonna", "Britney Spears", "Christina Aguilera", "Janet Jackson"],
            correctAnswer: "Madonna"
        },
        {
            id: 8,
            question: "In which city was Lady Gaga born?",
            answers: ["New York", "Los Angeles", "Chicago", "Miami"],
            correctAnswer: "New York"
        },
        {
            id: 9,
            question: "Lady Gaga has a tattoo of which animal on her left arm?",
            answers: ["Wolf", "Tiger", "Elephant", "Bear"],
            correctAnswer: "Tiger"
        },
        {
            id: 10,
            question: "Lady Gaga has a bachelor's degree in what field?",
            answers: ["Music", "Art", "Theater", "Education"],
            correctAnswer: "Music"
        }
        ],
      images: [
        'https://www.biography.com/.image/t_share/MTgxMDg1MDI3MTkzMzMzMDk2/gettyimages-1127409044.jpg',
        'https://media.glamour.com/photos/62604272083e4ff436441837/1:1/w_2000,h_2000,c_limit/4-20-lady%20gaga.png',
        'https://resize.elle.fr/portrait/var/plain_site/storage/images/people/la-vie-des-people/news/lady-gaga-furieuse-contre-ceux-qui-ne-croient-pas-a-sa-terrible-maladie-3722022/88519982-1-fre-FR/Lady-Gaga-furieuse-contre-ceux-qui-ne-croient-pas-a-sa-terrible-maladie.jpg',
        'https://pbs.twimg.com/media/Fba04QZakAc6rBH.jpg'
      ]
    },
    'Britney Spears': {
      questions: [{
        id: 1,
        question: "What was Britney Spears' first single?",
        answers: ["Baby One More Time", "Oops!...I Did It Again", "Toxic", "Womanizer"],
        correctAnswer: "Baby One More Time"
    },
    {
        id: 2,
        question: "What was Britney Spears' debut album?",
        answers: ["Britney", "Britney Jean", "Britney Baby One More Time", "Britney Speared"],
        correctAnswer: "Britney Baby One More Time"
    },
    {
        id: 3,
        question: "What was Britney Spears' highest charting single on the Billboard Hot 100?",
        answers: ["Baby One More Time", "Oops!...I Did It Again", "Toxic", "Womanizer"],
        correctAnswer: "Toxic"
    },
    {
        id: 4,
        question: "What was the title of Britney Spears' first music video?",
        answers: ["Baby One More Time", "Oops!...I Did It Again", "Toxic", "Womanizer"],
        correctAnswer: "Baby One More Time"
    },
    {
    id: 5,
        question: "What is the title of Britney Spears' ninth studio album?",
        answers: ["Britney Jean", "Britney Baby One More Time", "Britney Speared", "Glory"],
        correctAnswer: "Glory"
    },
    {
        id: 6,
        question: "What was the title of Britney Spears' first world tour?",
        answers: ["Oops!...I Did It Again Tour", "Britney Live in Concert", "Baby One More Time Tour", "Dream Within a Dream Tour"],
        correctAnswer: "Baby One More Time Tour"
    },
    {
        id: 7,
        question: "Britney Spears has won how many Grammy Awards?",
        answers: ["0", "1", "2", "3"],
        correctAnswer: "1"
    },
    {
        id: 8,
        question: "In which year did Britney Spears make her acting debut in the film 'Crossroads'?",
        answers: ["1998", "2000", "2002", "2004"],
        correctAnswer: "2002"
    },
    {
        id: 9,
        question: "What was the title of Britney Spears' first perfume?",
        answers: ["Curious", "Fantasy", "Midnight Fantasy", "Radiance"],
        correctAnswer: "Curious"
    },
    {
        id: 10,
        question: "What was the title of Britney Spears' reality TV show?",
        answers: ["Britney and Kevin: Chaotic", "Britney: For the Record", "Britney: Live and More", "Britney: Unbreakable"],
        correctAnswer: "Britney and Kevin: Chaotic"
    }
    ],
      images: [
        'https://hips.hearstapps.com/hmg-prod/images/britney-spears-during-the-2000-mtv-video-music-awards-at-news-photo-1636756684.jpg?crop=1.00xw:0.620xh;0,0.0208xh&resize=1200:*',
        'https://www.bostonherald.com/wp-content/uploads/2022/12/AP22179046246792.jpg?w=472',
        'https://cdn.britannica.com/11/136511-050-0AAA8EB9/Britney-Spears.jpg',
        'https://pbs.twimg.com/profile_images/1323418800876777474/0w4orMOC_400x400.jpg',
        'https://media.allure.com/photos/6287bc403a1999e7216927ec/1:1/w_3712,h_3712,c_limit/Britney%20Spears%20Getty.jpg'
      ]
    }
  };

  module.exports = { db };