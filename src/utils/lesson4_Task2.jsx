export const L4_T2_Facil = [
  {
    pergunta: [
      { label: 'Is your mother from New York?', answer: 0 },
      { label: 'Are those girls good friends?', answer: 1 },
      { label: 'Are you happy today?', answer: 2 }
    ],
    resposta: [
      { label: 'No, they aren’t good friends.', answer: 1 },
      { label: 'Yes, she likes New York.', answer: -1 },
      { label: 'Yes, I’m happy today.', answer: 2 },
      { label: 'Yes, they have good friends.', answer: -1 },
      { label: 'Yes, she’s from New York.', answer: 0 },
    ]
  },
  {
    pergunta: [
      { label: 'Is Brazil a big country?', answer: 0 },
      { label: 'Is your father Canadian?', answer: 1 },
      { label: 'Are you an only child?', answer: 2 } 
    ],
    resposta: [
      { label: 'Argentina is a very big country.', answer: -1 },
      { label: 'No, I’m not an only child.', answer: 2 },
      { label: 'My father lives in Canada.', answer: -1 },
      { label: 'Yes, it’s very big.', answer: 0 },
      { label: 'No, he isn’t Canadian.', answer: 1 },
    ]
  },
  {
    pergunta: [
      { label: 'Do you have a lot of cousins?', answer: 0 },
      { label: 'Do you have a stepmother?', answer: 1 },
      { label: 'Do your friends have siblings?', answer: 2 },
    ],
    resposta: [
      { label: 'My aunt has two kids.', answer: -1 },
      { label: 'No, they don’t have siblings.', answer: 2 },
      { label: 'Yes, I have a lot of cousins.', answer: 0 },
      { label: 'No, I don’t.', answer: 1 },
      { label: 'She has a sister.', answer: -1 },
    ]
  },
  {
    pergunta: [
      { label: 'Do your parents have grandchildren?', answer: 0 },
      { label: 'Does he look like his father?', answer: 1 },
      { label: 'What are they looking at?', answer: 2 },
    ],
    resposta: [
      { label: 'She is a grandmother.', answer: -1 },
      { label: 'They are looking at a photo album.', answer: 2 },
      { label: 'I guess so.', answer: 1 },
      { label: 'I look like my mother.', answer: -1 },
      { label: 'No, they don’t.', answer: 0 },
    ]
  },
  {
    pergunta: [
      { label: 'Is he a famous soccer player?', answer: 0 },
      { label: 'Is your family big?', answer: 1 },
      { label: 'Who is your mother?', answer: 2 },
    ],
    resposta: [
      { label: 'No, it isn’t.', answer: 1 },
      { label: 'She is blonde.', answer: -1 },
      { label: 'She is the teacher.', answer: 2 },
      { label: 'My family is from Italy.', answer: -1 },
      { label: 'Yes, he is', answer: 0 },
    ]
  },
];

export const L4_T2_Medio = [
  { pergunta: ["does", "your", "singer", "favorite", "is", "who", "?"],
    resposta: "Who is your favorite singer?"
  },
  { pergunta: ["do", "podcast", "host", "who", "is", "favorite", "?", "your"],
    resposta: "Who is your favorite podcast host?"
  },
  { pergunta: ["does", "your", "favorite", "actress", "who", "is", "?"],
    resposta: "Who is your favorite actress?"
  },
  { pergunta: ["who", "do", "is", "teacher", "your", "favorite", "?"],
    resposta: "Who is your favorite teacher?"
  },
  { pergunta: ["does", "is", "who", "your", "favorite", "cousin", "?"],
    resposta: "Who is your favorite cousin?"
  },
  { pergunta: ["where", "does", "is", "your", "mother", "now", "?"],
    resposta: "Where is your mother now?"
  },
  { pergunta: ["does", "your", "best", "friend", "is", "where", "from", "?"],
    resposta: "Where is your best friend from?"
  },
  { pergunta: ["does", "your", "boyfriend", "is", "where", "now", "?"],
    resposta: "Where is your boyfriend now?"
  },
  { pergunta: ["where", "do", "is", "your", "pet", "now", "?"],
    resposta: "Where is your pet now?"
  },
  { pergunta: ["do", "you", "do", "live", "where", "?"],
    resposta: "Where do you live?"
  },
];


export const L4_T2_Dificil = [
  {
    pergunta: "Mrs. Peterson is my English teacher. She is from New York. Her classes are great.",
    resposta: [
      { label: "Mr. Peterson is a math teacher.", status: 0 },
      { label: "She’s my English teacher.", status: 1 },
      { label: "She lives in New York", status: 0 },
      { label: "She’s from New York.", status: 1 },
      { label: "Her classes are great.", status: 1 },
    ]
  },
  {
    pergunta: "Beyoncé is a very talented singer. She’s from Texas, USA. Her songs are popular.",
    resposta: [
      { label: "She is an actress.", status: 0 },
      { label: "She’s from Texas.", status: 1 },
      { label: "Her songs are popular.", status: 1 },
      { label: "She lives in Texas.", status: 0 },
      { label: "She is a very talented singer.", status: 1 },
    ]
  },
  {
    pergunta: "Joel Maison is a guy from my gym. He’s very strong and athletic. He is from Madrid, Spain and speaks English, Portuguese, Italian and Spanish.",
    resposta: [
      { label: "He isn’t a famous athlete.", status: 0 },
      { label: "He doesn’t like gym.", status: 0 },
      { label: "He is Spanish.", status: 1 },
      { label: "He likes strong and intelligent people.", status: 0 },
      { label: "He’s strong and intelligent.", status: 1 },
    ]
  },
  {
    pergunta: "Podpah is a very popular YouTube channel. It’s a Brazilian podcast with two hosts, Igor Cavalari and Thiago Marques. They are funny and outgoing.",
    resposta: [
      { label: "Podpah is a popular YouTube channel.", status: 1 },
      { label: "The host doesn’t live in Brazil.", status: 0 },
      { label: "The hosts are funny.", status: 1 },
      { label: "They record TV programs.", status: 0 },
      { label: "It’s not a popular program.", status: 0 },
    ]
  },
  {
    pergunta: "Scarlett Johansson is a talented actress. She is American and her movies are very popular. She has a lot of fans from all over the world.",
    resposta: [
      { label: "She is a talented actress.", status: 1 },
      { label: "Scarlet isn’t a talented actress.", status: 0 },
      { label: "She is American.", status: 1 },
      { label: "Scarlet lives in North America.", status: 0 },
      { label: "She isn’t famous.", status: 0 },
    ]
  },
  {
    pergunta: "Marta Silva is a famous soccer player. She’s smart, athletic, and pretty. She’s Brazilian but plays on an important team in Orlando, Florida.",
    resposta: [
      { label: "Marta is a volley player.", status: 0 },
      { label: "She is American.", status: 0 },
      { label: "Marta is famous and plays soccer.", status: 1 },
      { label: "She doesn’t play in Florida.", status: 0 },
      { label: "She’s smart, athletic, and pretty.", status: 1 },
    ]
  },
  {
    pergunta: "Mr. Peres is a great Spanish teacher. He’s from Madrid, Spain but he lives in São Paulo. He’s very popular at the school he works at because he is very funny.",
    resposta: [
      { label: "Mr. Peres teaches Spanish.", status: 1 },
      { label: "He is from São Paulo.", status: 0 },
      { label: "He is very popular at the school.", status: 1 },
      { label: "Mr. Peres works in São Paulo.", status: 1 },
      { label: "He is very funny.", status: 1 },
    ]
  },
  {
    pergunta: "Khabane Lame is a famous Tiktoker. He is very funny without saying a word. He is from Senegal, but he lives in Italy.  ",
    resposta: [
      { label: "Khabane is a famous YouTuber.", status: 0 },
      { label: "He is very funny.", status: 1 },
      { label: "He talks about different things.", status: 0 },
      { label: "He is Italian.", status: 0 },
      { label: "He lives in Italy.", status: 1 },
    ]
  },
];