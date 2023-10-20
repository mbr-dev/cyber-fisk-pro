export const L8_T1_Facil = [
  {
    pergunta: "What’s the nature of your trip?",
    resposta: [
      {label: "Yes, it is.", status: 0},
      {label: "I’m going to San Francisco.", status: 0},
      {label: "I’m here on business.", status: 1}
    ]
  },
  {
    pergunta: "Are you going to get an American visa?",
    resposta: [
      {label: "Yes, next week.", status: 1},
      {label: "No, you are not.", status: 0},
      {label: "Yes, I do.", status: 0}
    ]
  },
  {
    pergunta: "Are Mike and Lisa going to visit their grandma on Sunday?",
    resposta: [
      {label: "Yes, they visit her on Sunday.", status: 0},
      {label: "Yes, they are going to visit her on Sunday.", status: 1},
      {label: "No, they don’t.", status: 0}
    ]
  },
  {
    pergunta: "Is Patrick going to study abroad next year?",
    resposta: [
      {label: "Yes, he’s going to study in France.", status: 1},
      {label: "Yes, he’s studying in France.", status: 0},
      {label: "No, he’s at home.", status: 0}
    ]
  },
  {
    pergunta: "Are they going to have lunch at that new pizza place?",
    resposta: [
      {label: "Yes, they do.", status: 0},
      {label: "No, they are on a diet.", status: 1},
      {label: "No, they aren’t having lunch at that new pizza place.", status: 0}
    ]
  },
  {
    pergunta: "Are your parents going to rent a car in Miami?",
    resposta: [
      {label: "Yes, they’re going to rent a big car there.", status: 1},
      {label: "Yes, they have a big car there.", status: 0},
      {label: "Yes, they do.", status: 0}
    ]
  },
  {
    pergunta: "Is Kate going to stay in a good hotel in Seattle?",
    resposta: [
      {label: "No, she doesn’t.", status: 0},
      {label: "Yes, she stays in a good hotel.", status: 0},
      {label: "No, she’s going to stay with her mom. She lives there.", status: 1}
    ]
  },
  {
    pergunta: "Where is your best friend going to have lunch tonight?",
    resposta: [
      {label: "She’s going to have lunch with her boyfriend.", status: 0},
      {label: "She’s going to have lunch at that new Italian restaurant.", status: 1},
      {label: "She’s at the restaurant.", status: 0}
    ]
  },
  {
    pergunta: "What is Mike going to cook for dinner?",
    resposta: [
      {label: "He’s going to cook rice and beans.", status: 1},
      {label: "He’s going to cook dinner for his friends.", status: 0},
      {label: "Mike likes chicken and salad.", status: 0}
    ]
  },
  {
    pergunta: "When are you going to visit Disney World?",
    resposta: [
      {label: "I’m going to visit Disney World in Orlando.", status: 0},
      {label: "I’m going to visit Disney World next December.", status: 1},
      {label: "I like to visit Disney on December. ", status: 0}
    ]
  }
]

export const L8_T1_Medio = [
  {
    pergunta: [
      "Lucas is going to travel",
      "next month."
    ],
    resposta: {
      label: ["", "by plane", "road trip", "buy a ticket"],
      status: "by plane"
    }
  },
  {
    pergunta: [
      "Shirley is going to",
      "to Dubai."
    ],
    resposta: {
      label: ["", "buy a ticket", "go backpacking", "to travel by plane"],
      status: "buy a ticket"
    }
  },
  {
    pergunta: [
      "When are you going to",
      "for your trip?"
    ],
    resposta: {
      label: ["", "take a city tour", "travel by plane", "pack your bags"],
      status: "pack your bags"
    }
  },
  {
    pergunta: [
      "Jared isn’t going to L.A",
      "."
    ],
    resposta: {
      label: ["", "go backpacking", "by bus", "pack his bags"],
      status: "by bus"
    }
  },
  {
    pergunta: [
      "Nina is going to",
      "at the hotel."
    ],
    resposta: {
      label: ["", "make a reservation", "take a city tour", "take a road trip"],
      status: "make a reservation"
    }
  },
  {
    pergunta: [
      "Is she going to",
      "an American visa?"
    ],
    resposta: {
      label: ["", "take", "get", "buy"],
      status: "get"
    }
  },
  {
    pergunta: [
      "Mary doesn’t like to travel",
      "."
    ],
    resposta: {
      label: ["", "by bus", "go backpacking", "take a road trip"],
      status: "by bus"
    }
  },
  {
    pergunta: [
      "João is going to",
      "on his next vacation."
    ],
    resposta: {
      label: ["", "pack his bags", "go backpacking", "make a reservation"],
      status: "go backpacking"
    }
  },
  {
    pergunta: [
      "May I see your",
      "?"
    ],
    resposta: {
      label: ["", "ticket online", "passport", "make a reservation"],
      status: "passport"
    }
  },
  {
    pergunta: [
      "People love to",
      "when they are in New York City."
    ],
    resposta: {
      label: ["", "pack your bag", "take a road trip", "take a city tour"],
      status: "take a city tour"
    }
  }
]

export const L8_T1_Dificil = [
  {
    option: {
      pergunta: ["going ", "travel.", "are ", "do ", "to ", "weekend? ", "What ", "They ",  "to ", "going ", "are ", "next ", "they "],
      resposta: "What are they going to do next weekend? They are going to travel."
    },
    option1: {
      pergunta: ["going ", "am ", "I ", "travel? ", "month.", "you ", "are ", "go ", "to ", "When ", "going ", "to ", "next "],
      resposta: "When are you going to travel? I am going to go next month."
    }
  },
  {
    option: {
      pergunta: ["Dan ", "going ", "is ", "next ", "month.", "Who ", "to ", "is ", "going ", "travel? ", "Disney "],
      resposta: "Who is going travel? Dan is going to Disney next month."
    },
    option1: {
      pergunta: ["going ", "What ", "time ", "flight? ", "is ", "midnight.", "They ", "are ", "at ", "their "],
      resposta: "What time is their flight? They are going at midnight."
    }
  },
  {
    option: {
      pergunta: ["are ", "to ", "going ", "go? ", "travel ", "Where ", "are ", "We ", "to ", "going ", "to.", "you "],
      resposta: "Where are you going to go? We are going to travel to."
    },
    option1: {
      pergunta: ["at ", "8 ", "p.m.", "is ", "your ", "ticket? ", "What ", "time ", "The ", "bus ", "leaves "],
      resposta: "What time is your ticket? The bus leaves at 8 p.m."
    }
  },
  {
    option: {
      pergunta: ["a ", "dress ", "and ", "boots.", "she ", "wearing? ", "is ", "She ", "What ", "wears "],
      resposta: "What is she wearing? She wears a dress and boots."
    },
    option1: {
      pergunta: ["next ", "week.", "get ", "an ", "American ", "visa? ", "going ", "to ", "get ", "When ", "are ", "you ", "I ", "am ", "going ", "to ", "go "],
      resposta: "When are you going to get an American visa? I am going to go get next week."
    }
  },
  {
    option: {
      pergunta: ["live? ", "in ", "L.A.", "are ", "they ", "going ", "to ", "Where ", "going ", "They ", "are ", "to ", "live "],
      resposta: "Where are they going to live? They are going to live in L.A."
    },
    option1: {
      pergunta: ["to ", "have ", "lunch ", "tomorrow ", "Who ", "is ", "going ", "to ", "at ", "the ", "mall? ", "are ", "We ", "going ", "have ", "lunch ", "tomorrow."],
      resposta: "Who is going to have lunch tomorrow at the mall? We are going to have lunch tomorrow."
    }
  },
]

export const L8_T2_Facil = [
  {
    pergunta: "Task_2_F_0",
    resposta: {
      label: ["", "Yes. I have a reservation for 2 nights.", "Yes, I can swim.", "No, I can’t make a reservation today."],
      status: "Yes. I have a reservation for 2 nights."
    }
  },
  {
    pergunta: "Task_2_F_1",
    resposta: {
      label: ["", "Yes. We are going to call an old friend.", "Yes, we are.", "Yes. We are going to make new friends."],
      status: "Yes, we are."
    }
  },
  {
    pergunta: "Task_2_F_2",
    resposta: {
      label: ["", "Yes. I’m going to have dinner.", "No, I don’t like lasagna.", "A lasagna."],
      status: "A lasagna."
    }
  },
  {
    pergunta: "Task_2_F_3",
    resposta: {
      label: ["", "I study English at night.", "We’re going out for dinner.", "They are reading."],
      status: "We’re going out for dinner."
    }
  },
  {
    pergunta: "Task_2_F_4",
    resposta: {
      label: ["", "It’s on the second floor.", "Yes, we have a restaurant.", "No. There isn’t a restaurant."],
      status: "It’s on the second floor."
    }
  },
  {
    pergunta: "Task_2_F_5",
    resposta: {
      label: ["", "Yes, I have a pet.", "Yes, they are.", "No. I have a dog."],
      status: "Yes, they are."
    }
  },
  {
    pergunta: "Task_2_F_6",
    resposta: {
      label: ["", "Yes, he is.", "Yes, I am.", "Yes, please."],
      status: "Yes, please."
    }
  },
  {
    pergunta: "Task_2_F_7",
    resposta: {
      label: ["", "Thanks.", "Here you are.", "Yes, I have one"],
      status: "Here you are."
    }
  },
  {
    pergunta: "Task_2_F_8",
    resposta: {
      label: ["", "Here you are. ", "Thanks.", "No, thanks."],
      status: "Thanks."
    }
  },
  {
    pergunta: "Task_2_F_9",
    resposta: {
      label: ["", "$70.00 for a single room and $90.00 for a double.", "I have $150.00.", "Here you are."],
      status: "$70.00 for a single room and $90.00 for a double."
    }
  },
]

export const L8_T2_Medio = [
  {
    pergunta: "Task_2_M_0",
    resposta: {
      label: "No / backpack",
      status: [
        "No, I’m not. I’m going to buy a backpack.",
        "No. I’m going to buy a backpack."
      ]
    }
  },
  {
    pergunta: "Task_2_M_1",
    resposta: {
      label: "No / France",
      status: [
        "No, he isn’t. He is going to live in France.",
        "No, he’s not. He is going to live in France.",
        "No. He’s going to live in France.",
        "No. He is going to live in France."
      ]
    }
  },
  {
    pergunta: "Task_2_M_2",
    resposta: {
      label: "No / sandals",
      status: [
        "No, she isn’t. She is going to wear sandals.",
        "No, she is going to wear sandals."
      ]
    }
  },
  {
    pergunta: "Task_2_M_3",
    resposta: {
      label: "No / apple pie",
      status: [
        "No, we aren’t. We are going to eat apple pie.",
        "No. We are going to eat apple pie."
      ]
    }
  },
  {
    pergunta: "Task_2_M_4",
    resposta: {
      label: "No / manager",
      status: [
        "No, they aren’t. They are going to talk to the manager.",
        "No. They are going to talk to the manager."
      ]
    }
  },
  {
    pergunta: "Task_2_M_5",
    resposta: {
      label: "No / Alice",
      status: [
        "No, I’m not. I’m going to invite Alice.",
        "No. I’m going to invite Alice."
      ]
    }
  },
  {
    pergunta: "Task_2_M_6",
    resposta: {
      label: "Because / do research on the internet",
      status: ["Because she is going to do research on the internet."]
    }
  },
  {
    pergunta: "Task_2_M_7",
    resposta: {
      label: "I'm / the day after tomorrow",
      status: [
        "I’m going to call him the day after tomorrow.",
        "I’m going to call Mr. Adams the day after tomorrow."
      ],
    }
  },
  {
    pergunta: "Task_2_M_8",
    resposta: {
      label: "Because / have a job interview",
      status: ["Because he is going to have a job interview."]
    }
  },
  {
    pergunta: "Task_2_M_9",
    resposta: {
      label: "She's / new salsa club",
      status: ["She’s going to learn how to dance salsa at the new salsa club."]
    }
  }
]

export const L8_T2_Dificil = [
  {
    pergunta: "Task_2_D_0",
    resposta: [
      {label: "The man is at a hotel.", status: 1},
      {label: "He is sharing a room with another person.", status: 0},
      {label: "He knows why there are a lot of people there.", status: 0},
      {label: "He doesn’t smoke.", status: 1}
    ]
  },
  {
    pergunta: "Task_2_D_1",
    resposta: [
      {label: "Jack doesn’t need help at the store.", status: 0},
      {label: "Jack and Tom are friends.", status: 1},
      {label: "Tom invites Jack to have dinner at his house.", status: 1},
      {label: "Jack can’t go.", status: 0}
    ]
  },
  {
    pergunta: "Task_2_D_2",
    resposta: [
      {label: "Alice works at a hotel.", status: 1},
      {label: "There is breakfast from 6 to 10 am.", status: 1},
      {label: "Alexander Rakaov wants to make a reservation at the hotel.", status: 0},
      {label: "He wants to stay 6 days there.", status: 0}
    ]
  }
]

export const L8_SUPER_LESSON = [

]