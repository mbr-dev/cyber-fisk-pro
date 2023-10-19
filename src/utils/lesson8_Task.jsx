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

]

export const L8_T2_Medio = [

]

export const L8_T2_Dificil = [
  
]

export const L8_SUPER_LESSON = [

]