export const L10_T1_Facil = [
  {
    pergunta: [
      { audio: "L10_Task1_F_0", status: 0},
      { audio: "L10_Task1_F_1", status: 1}
    ],
    resposta: [
      { label: "broke", status: 0},
      { label: "bought", status: 1},
      { label: "bet", status: -1},
      { label: "booked", status: -1},
    ]
  },
  {
    pergunta: [
      { audio: "L10_Task1_F_2", status: 0},
      { audio: "L10_Task1_F_3", status: 1}
    ],
    resposta: [
      { label: "drinks", status: -1},
      { label: "drunk", status: 0},
      { label: "eating", status: -1},
      { label: "ate", status: 1},
    ]
  },
  {
    pergunta: [
      { audio: "L10_Task1_F_4", status: 0},
      { audio: "L10_Task1_F_5", status: 1}
    ],
    resposta: [
      { label: "felt", status: -1},
      { label: "fought", status: -1},
      { label: "found", status: 0},
      { label: "forgot", status: 1},
    ]
  },
  {
    pergunta: [
      { audio: "L10_Task1_F_6", status: 0},
      { audio: "L10_Task1_F_7", status: 1}
    ],
    resposta: [
      { label: "gave", status: 0},
      { label: "were", status: -1},
      { label: "went", status: 1},
      { label: "got", status: -1},
    ]
  },
  {
    pergunta: [
      { audio: "L10_Task1_F_8", status: 0},
      { audio: "L10_Task1_F_9", status: 1}
    ],
    resposta: [
      { label: "met", status: -1},
      { label: "made", status: 0},
      { label: "saw", status: 1},
      { label: "sewed", status: -1},
    ]
  },
  {
    pergunta: [
      { audio: "L10_Task1_F_10", status: 0},
      { audio: "L10_Task1_F_11", status: 1}
    ],
    resposta: [
      { label: "sang", status: -1},
      { label: "sold", status: 0},
      { label: "thought", status: -1},
      { label: "took", status: 1},
    ]
  },
]

export const L10_T1_Medio = [
  {
    pergunta: "_______ you watch the movie last weekend?",
    resposta: [
      {label: "Do", status: 0},
      {label: "Did", status: 1},
      {label: "Can", status: 0}
    ]
  },
  {
    pergunta: "Did you _____ the cast of the movie?",
    resposta: [
      {label: "liked ", status: 0},
      {label: "likes ", status: 0},
      {label: "like ", status: 1}
    ]
  },
  {
    pergunta: "When _____ you _____ the movie?",
    resposta: [
      {label: "do – watched", status: 0},
      {label: "does – watch", status: 0},
      {label: "did – watch", status: 1}
    ]
  },
  {
    pergunta: "Where ____ you ____ on your last vacation?",
    resposta: [
      {label: "did – go", status: 1},
      {label: "do – go", status: 0},
      {label: "can – go", status: 0}
    ]
  },
  {
    pergunta: "___ he ___ about it to his teacher last class?",
    resposta: [
      {label: "Does – talk", status: 0},
      {label: "Did – talk", status: 1},
      {label: "Do – talk", status: 0}
    ]
  },
  {
    pergunta: "She _____ her grandmother two days ago.",
    resposta: [
      {label: "visits", status: 0},
      {label: "visited", status: 1},
      {label: "visit", status: 0}
    ]
  },
  {
    pergunta: "____ Mary and her friends ____ to go backpacking one year ago?",
    resposta: [
      {label: "Do – decide", status: 0},
      {label: "Does – decide", status: 0},
      {label: "Did – decide", status: 1}
    ]
  },
  {
    pergunta: "He _______ his last trip online.",
    resposta: [
      {label: "search", status: 0},
      {label: "searched", status: 1},
      {label: "to search", status: 0}
    ]
  },
  {
    pergunta: "Her teacher ____ because she ____ the test.",
    resposta: [
      {label: "talked – missed", status: 0},
      {label: "called – misses", status: 0},
      {label: "called – missed", status: 1}
    ]
  },
  {
    pergunta: "They _____ a delicious dinner last Saturday.",
    resposta: [
      {label: "cooked", status: 1},
      {label: "cooking", status: 0},
      {label: "cook", status: 0}
    ]
  }
]

export const L10_T1_Dificil = [
  {
    pergunta: [
      {label: "Yes, I do. Did you move in yesterday?", status: 1},
      {label: "Do you live here?", status: 0},
      {label: "Yes, I did.", status: 2}
    ],
    resposta: [
      {label: "Do you live here?", status: 0},
      {label: "Yes, I do. Did you move in yesterday?", status: 1},
      {label: "Yes, I did.", status: 2}
    ]
  },
  {
    pergunta: [
      {label: "Hi. I’m Alison, Alison Hill.", status: 1},
      {label: "Good morning, I’m Daniel Murray", status: 0},
      {label: "Nice to meet you too.", status: 3},
      {label: "Nice to meet you", status: 2}
    ],
    resposta: [
      {label: "Good morning, I’m Daniel Murray", status: 0},
      {label: "Hi. I’m Alison, Alison Hill.", status: 1},
      {label: "Nice to meet you.", status: 2},
      {label: "Nice to meet you too.", status: 3}
    ]
  },
  {
    pergunta: [
      {label: "Me? No, I didn’t!", status: 1},
      {label: "Did you break the remote control?", status: 0},
      {label: "Well, I think I need to buy new batteries tomorrow.", status: 2}
    ],
    resposta: [
      {label: "Did you break the remote control?", status: 0},
      {label: "Me? No, I didn’t!", status: 1},
      {label: "Well, I think I need to buy new batteries tomorrow.", status: 2}
    ]
  },
  {
    pergunta: [
      {label: "Yes, I watched it yesterday.", status: 1},
      {label: "Is it a good movie?", status: 2},
      {label: "Did you watch the movie?", status: 0},
      {label: "For me, it was really nice.", status: 3}
    ],
    resposta: [
      {label: "Did you watch the movie?", status: 0},
      {label: "Yes, I watched it yesterday.", status: 1},
      {label: "Is it a good movie?", status: 2},
      {label: "For me, it was really nice.", status: 3}
    ]
  },
]

export const L10_T2_Facil = [
  {
    pergunta: "L9_Task2_F_0",
    resposta: [
      {label: "Called", status: 1},
      {label: "Played", status: 1},
      {label: "Watched", status: 0},
      {label: "Needed", status: 0}
    ]
  },
  {
    pergunta: "L9_Task2_F_1",
    resposta: [
      {label: "Remembered", status: 1},
      {label: "Stayed", status: 1},
      {label: "Helped", status: 0},
      {label: "Studied", status: 0}
    ]
  },
  {  
    pergunta: "L9_Task2_F_2",
    resposta: [
      {label: "Studied", status: 1},
      {label: "Asked", status: 1},
      {label: "Started", status: 0},
      {label: "Needed", status: 0}
    ]
  },
  {
    pergunta: "L9_Task2_F_3",
    resposta: [
      {label: "Liked", status: 1},
      {label: "Stopped", status: 1},
      {label: "Lived", status: 0},
      {label: "Watched", status: 0}
    ]
  },
  {
    pergunta: "L9_Task2_F_4",
    resposta: [
      {label: "Helped", status: 1},
      {label: "Watched", status: 1},
      {label: "Wanted", status: 0},
      {label: "Needed", status: 0}
    ],
  },
  {
    pergunta: "L9_Task2_F_5",
    resposta: [
      {label: "Invited", status: 1},
      {label: "Texted", status: 1},
      {label: "Wanted", status: 0},
      {label: "Played", status: 0},
    ]
  },
  {
    pergunta: "L9_Task2_F_6",
    resposta: [
      {label: "Wanted", status: 1},
      {label: "Needed", status: 1},
      {label: "Called", status: 0},
      {label: "Helped", status: 0}
    ]
  },
  {
    pergunta: "L9_Task2_F_7",
    resposta: [
      {label: "Decided", status: 1},
      {label: "Lived", status: 1},
      {label: "Used", status: 0},
      {label: "Liked", status: 0},
    ]
  },
  {
    pergunta: "L9_Task2_F_8",
    resposta: [
      {label: "Used", status: 1},
      {label: "Started", status: 1},
      {label: "Studied", status: 0},
      {label: "Stayed", status: 0}
    ]
  },
  {
    pergunta: "L9_Task2_F_9",
    resposta: [
      {label: "Worked", status: 1},
      {label: "Enjoyed", status: 1},
      {label: "Played", status: 0},
      {label: "Watched", status: 0}
    ]
  },
]

export const L10_T2_Medio = [
  {
    audio: "L9_Task2_M_0",
    pergunta: "She played it yesterday.",
    resposta: "When did she play the tambourine?"
  },
  {
    audio: "L9_Task2_M_1",
    pergunta: "We watched talk shows and cartoons.",
    resposta: "What did you do yesterday?"
  },
  {
    audio: "L9_Task2_M_2",
    pergunta: "They watched it last night.",
    resposta: "When did they watch the talk show?"
  },
  {
    audio: "L9_Task2_M_3",
    pergunta: "We needed to buy them in January.",
    resposta: "When did you need to buy the books?"
  },
  {
    audio: "L9_Task2_M_4",
    pergunta: "She studied English. ",
    resposta: "What did she study yesterday?"
  },
  {
    audio: "L9_Task2_M_5",
    pergunta: "He started a computer course on February 3rd.",
    resposta: "When did Nick start a computer course?"
  },
  {
    audio: "L9_Task2_M_6",
    pergunta: "He studied Spanish yesterday morning.",
    resposta: "When did Ken study Spanish?"
  },
  {
    audio: "L9_Task2_M_7",
    pergunta: "Yes. She watched a jazz concert on July 1st.",
    resposta: "Did Julie watch a jazz concert on TV?"
  },
  {
    audio: "L9_Task2_M_8",
    pergunta: "He worked late last night.",
    resposta: "What did Tim do last night?"
  },
  {
    audio: "L9_Task2_M_9",
    pergunta: "No. She stayed home yesterday.",
    resposta: "Did Mary go to a shopping mall yesterday afternoon?"
  }
]

export const L10_T2_Dificil = [
  {
    pergunta: [
      "Last Monday, Annie",
      "a lot till 12:30 and then she stopped for lunch. In the afternoon she",
      "a lot of emails and presented a project to her boss at 4 p.m. At home, as usual, she switched off from work,",
      "a delicious dinner and",
      " ",
      "favorite TV show."
    ],
    option0: {
      label: ["", "answered", "cooked", "worked", "her", "cooks", "watched"],
      status: "worked"
    },
    option1: {
      label: ["", "answered", "cooked", "worked", "her", "cooks", "watched"],
      status: "answered"
    },
    option2: {
      label: ["", "answered", "cooked", "worked", "her", "cooks", "watched"],
      status: "cooked "
    },
    option3: {
      label: ["", "answered", "cooked", "worked", "her", "cooks", "watched"],
      status: "watched "
    },
    option4: {
      label: ["", "answered", "cooked", "worked", "her", "cooks", "watched"],
      status: "her"
    }
  },
  {
    pergunta: [
      "Timothy Collins",
      "the hotel to make a reservation for two nights. When he",
      "at the hotel, the desk clerk couldn’t",
      "his reservation at first, but then she did. He",
      "a double room. She handed him the keys to the room and",
      "him to complete a form."
    ],
    option0: {
      label: ["", "arrived", "find", "ask", "called", "booked", "call"],
      status: "called"
    },
    option1: {
      label: ["", "arrived", "find", "ask", "called", "booked", "call"],
      status: "arrived"
    },
    option2: {
      label: ["", "arrived", "find", "ask", "called", "booked", "call"],
      status: "find"
    },
    option3: {
      label: ["", "arrived", "find", "ask", "called", "booked", "call"],
      status: "booked"
    },
    option4: {
      label: ["", "arrived", "find", "asked", "called", "booked", "call"],
      status: "asked"
    }
  },
  {
    pergunta: [
      "Last",
      ", Ashley",
      "to go to the movies, but she",
      ". She",
      "home and watched a video. James",
      "soccer in the afternoon and video games in the evening."
    ],
    option0: {
      label: ["", "played", "Sunday", "didn’t", "don’t", "stayed", "wanted"],
      status: "Sunday"
    },
    option1: {
      label: ["", "played", "Sunday", "didn’t", "don’t", "stayed", "wanted"],
      status: "wanted"
    },
    option2: {
      label: ["", "played", "Sunday", "didn’t", "don’t", "stayed", "wanted"],
      status: "didn’t"
    },
    option3: {
      label: ["", "played", "Sunday", "didn’t", "don’t", "stayed", "wanted"],
      status: "stayed"
    },
    option4: {
      label: ["", "played", "Sunday", "didn’t", "don’t", "stayed", "wanted"],
      status: "played"
    }
  }
]

export const L10_SUPER_LESSON = [
  {
    pergunta: "Do you ever go to music festivals",
    resposta: [
      "Yes, I do.",
      "Yes, I go to music festivals.",
      "No, I don’t.",
      "No, I don’t go to music festivals."
    ]
  },
  {
    pergunta: "Did you watch a horror movie yesterday",
    resposta: [
      "Yes, I did.",
      "Yes, I watched a horror movie yesterday.",
      "No, I didn’t.",
      "No, I didn’t watch a horror movie."
    ]
  },
  {
    pergunta: "Did you listen to music this morning",
    resposta: [
      "Yes, I did.",
      "Yes, I listened to music this morning.",
      "No, I didn’t.",
      "No, I didn’t listen to music this morning."
    ]
  },
  {
    pergunta: "Did you talk to your friend today",
    resposta: [
      "Yes, I did.",
      "Yes, I talked to my friend today.",
      "No, I didn’t.",
      "No, I didn’t talk to my friend today."
    ]
  },
  {
    pergunta: "When did you shop for new clothes",
    resposta: ["I shopped for new clothes"]
  },
  {
    pergunta: "What kind of music do you like",
    resposta: ["I like"]
  },
  {
    pergunta: "What time did you work out yesterday",
    resposta: [
      "At",
      "I worked out at",
      "I worked out"
    ]
  },
  {
    pergunta: "What kind of food do you like",
    resposta: ["I like"]
  },
  {
    pergunta: "What is your favorite TV show?",
    resposta: ["My favorite TV show is"]
  },
  {
    pergunta: "When did you visit a small city?",
    resposta: ["I visited a small city"]
  }
]