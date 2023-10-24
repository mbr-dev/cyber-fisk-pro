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
    pergunta: "L10_Task1_F_0",
    resposta: {
      label: "eat / big breakfast",
      status: ["Did you eat a big breakfast?"]
    }
  },
  {
    pergunta: "L10_Task1_F_1",
    resposta: {
      label: "When / come back",
      status: ["When did you come back?"]
    }
  },
  {
    pergunta: "L10_Task1_F_2",
    resposta: {
      label: "have / fun / your vacation",
      status: ["Did you have fun on your vacation?"]
    }
  },
  {
    pergunta: "L10_Task1_F_3",
    resposta: {
      label: "finish / your project",
      status: ["Did you finish your project?"]
    }
  },
  {
    pergunta: "L10_Task1_F_4",
    resposta: {
      label: "Drink / coffee / tea",
      status: ["Did you drink coffee or tea?"]
    }
  },
  {
    pergunta: "L10_Task1_F_5",
    resposta: {
      label: "What / Mike / do / yesterday",
      status: ["What did Mike do yesterday?"]
    }
  },
  {
    pergunta: "L10_Task1_F_6",
    resposta: {
      label: "Jonathan / yesterday / on the net",
      status: ["What did Jonathan pay on the net yesterday?"]
    }
  },
  {
    pergunta: "L10_Task1_F_7",
    resposta: {
      label: "Wendy / yesterday / morning",
      status: ["What did Wendy send yesterday morning?"]
    }
  }
]

export const L10_T1_Dificil = [
  {
    pergunta: "L10_Task1_D_0",
    resposta: [
      {image: "Ess1_L10_Task1_D_0", status: 1},
      {image: "Ess1_L10_Task1_D_1", status: 0},
      {image: "Ess1_L10_Task1_D_2", status: 0},
      {image: "Ess1_L10_Task1_D_3", status: 0},
    ]
  },
  {
    pergunta: "L10_Task1_D_1",
    resposta: [
      {image: "Ess1_L10_Task1_D_4", status: 0},
      {image: "Ess1_L10_Task1_D_5", status: 0},
      {image: "Ess1_L10_Task1_D_6", status: 1},
      {image: "Ess1_L10_Task1_D_7", status: 0},
    ]
  },
  {
    pergunta: "L10_Task1_D_2",
    resposta: [
      {image: "Ess1_L10_Task1_D_8", status: 0},
      {image: "Ess1_L10_Task1_D_9", status: 1},
      {image: "Ess1_L10_Task1_D_10", status: 0},
      {image: "Ess1_L10_Task1_D_11", status: 0},
    ]
  },
]

export const L10_T2_Facil = [
  {
    pergunta: "Oh! It’s Friday. Thank God!",
    label: ["Yeah!", ""],
    resposta: {
      label: ["", "Let’s work on the weekend.", "Let’s enjoy our weekend!", "Let’s see!"],
      status: "Let’s enjoy our weekend!"
    }
  },
  {
    pergunta: "Where can we go this weekend?",
    label: ["I", "this new place on the Main Avenue is awesome."],
    resposta: {
      label: ["", "hear", "heard", "get"],
      status: "heard"
    }
  },
  {
    pergunta: "Let’s get a taxi!",
    label: ["", "to Main Avenue, please."],
    resposta: {
      label: ["", "Get us", "Take us", "Move us"],
      status: "Take us"
    }
  },
  {
    pergunta: "Here it is.",
    label: ["Here’s", "."],
    resposta: {
      label: ["", "your change", "your money", "the rest"],
      status: "your change"
    }
  },
  {
    pergunta: "Hi! You are back!",
    label: ["Yes. Last weekend I", "with my friends."],
    resposta: {
      label: ["", "traveled", "travel", "travels"],
      status: "traveled "
    }
  },
  {
    pergunta: "What are you going to do next weekend?",
    label: ["I", "with my friends."],
    resposta: {
      label: ["", "went out", "am going to go out", "go out"],
      status: "am going to go out "
    }
  },
  {
    pergunta: "",
    label: ["Where did you", "last weekend? To the new restaurant!"],
    resposta: {
      label: ["", "went", "go", "going"],
      status: "go"
    }
  },
  {
    pergunta: "Did you sleep well last night?",
    label: ["Yes. I", "very well last night."],
    resposta: {
      label: ["", "sleep", "slept", "sleeps"],
      status: "slept"
    }
  },
  {
    pergunta: "",
    label: ["Carla didn’t", "out with her friends last Saturday."],
    resposta: {
      label: ["", "hang", "hung", "hangs"],
      status: "hang"
    }
  }
]

export const L10_T2_Medio = [
  {
    pergunta: ["rather ", "would ", "do ", "Kyle ", "exciting ", "things."],
    resposta: "Kyle would rather do exciting things."
  },
  {
    pergunta: ["on ", "Chris ", "birthday.", "cake ", "for ", "his ", "breakfast ", "had "],
    resposta: "Chris had cake for breakfast on his birthday."
  },
  {
    pergunta: ["America", "going ", "he ", "Is ", "to ", "move ", "to ", "?"],
    resposta: "Is he going to move to America?"
  },
  {
    pergunta: ["would ", "be ", "Cindy ", "rather ", "not ", "alone."],
    resposta: "Cindy would rather not be alone."
  },
  {
    pergunta: ["yesterday.", "after ", "took ", "a ", "nap ", "lunch ", "Phil "],
    resposta: "Phil took a nap after lunch yesterday."
  },
  {
    pergunta: ["book", "When ", "you ", "read ", "did ", "the ", "?"],
    resposta: "When did you read the book?"
  },
  {
    pergunta: ["classroom", "there ", "chairs ", "in ", "Are ", "the ", "?"],
    resposta: "Are there chairs in the classroom?"
  },
  {
    pergunta: ["did ", "Who ", "call ", "morning", "you ", "yesterday ", "?"],
    resposta: "Who did you call yesterday morning?"
  },
  {
    pergunta: ["wearing", "What ", "he ", "is ", "?"],
    resposta: "What is he wearing?"
  },
  {
    pergunta: ["play ", "can ", "Where ", "you ", "tennis", "?"],
    resposta: "Where can you play tennis?"
  },
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