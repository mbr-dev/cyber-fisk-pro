import T2Audio0 from "../components/game9/audios/Pergunta/Task2M_0.mp3";
import T2Audio1 from "../components/game9/audios/Pergunta/Task2M_1.mp3";
import T2Audio2 from "../components/game9/audios/Pergunta/Task2M_2.mp3";
import T2Audio3 from "../components/game9/audios/Pergunta/Task2M_3.mp3";
import T2Audio4 from "../components/game9/audios/Pergunta/Task2M_4.mp3";
import T2Audio5 from "../components/game9/audios/Pergunta/Task2M_5.mp3";
import T2Audio6 from "../components/game9/audios/Pergunta/Task2M_6.mp3";


export const L3_T2_Facil = []

export const L3_T2_Medio = [
  {
    pergunta: T2Audio0,
    resposta: [
      { label: 'Yes, I listen to music in the evening.', status: 1 }, 
      { label: 'No, we don’t listen to music in the evening.', status: 1 },
      { label: 'Yes, he listens to music in the evening.', status: 0 }
    ]
  },
  {
    pergunta: T2Audio1,
    resposta: [
      { label: 'No, I do stay home on weekends.', status: 0 }, 
      { label: 'Yes, I stay home on weekends.', status: 1 }, 
      { label: 'No, I don’t stay home on weekends.', status: 1 }
    ]
  },
  {  
    pergunta: T2Audio2,
    resposta: [
      { label: 'Yes, they work in the evening.', status: 1 }, 
      { label: 'Yes, we work in the evening.', status: 0 }, 
      { label: 'No, they don’t work in the evening.', status: 1 }, 
    ]
  },
  {
    pergunta: T2Audio3,
    resposta: [
      { label: 'No, I play computer games on weekends.', status: 0 }, 
      { label: 'No, I don’t play computer games on weekends.', status: 1 }, 
      { label: 'Yes, we play computer games on weekends.', status: 1 }, 
    ]
  },
  {
    pergunta: T2Audio4,
    resposta: [
      { label: 'At 9 o’clock.', status: 1 }, 
      { label: 'No, I don’t.', status: 0 }, 
      { label: 'I take my English course at 7:30.', status: 1 }, 
    ],
  },
  {
    pergunta: T2Audio5,
    resposta: [
      { label: 'I take a shower at a quarter after eight.', status: 1 }, 
      { label: 'Yes, I take a shower every day.', status: 0 }, 
      { label: 'At 8:15.', status: 1 }, 
    ]
  },
  {
    pergunta: T2Audio6,
    resposta: [
      { label: 'Yes, I have dinner.', status: 0 }, 
      { label: 'At around 8 p.m.', status: 1 }, 
      { label: 'I have dinner at around half past seven.', status: 1 }, 
    ]
  },
 /*  {
    pergunta: 'Do you study here?',
    resposta: [
      { label: 'Yes. I like to play computer games.', status: 0 }, 
      { label: 'Yes, we study here.', status: 1 }, 
      { label: 'No, I do.', status: 1 }, 
    ]
  }, */
];

export const L3_T2_Dificil = [
  {
    pergunta: '',
    resposta: 'Do you listen to music in the evening?',
  },
  {
    pergunta: '',
    resposta: 'Do you go out on weekends?',
  },
  {
    pergunta: '',
    resposta: 'What’s your first name?',
  },
  {
    pergunta: '',
    resposta: 'Does he have a job in the afternoon?',
  },
  {
    pergunta: '',
    resposta: 'Does Greg have an eraser?',
  },
  {
    pergunta: '',
    resposta: 'Does Kelly answer the phone?',
  },
  {
    pergunta: '',
    resposta: 'Yes, she answers the phone',
  },
  {
    pergunta: '',
    resposta: 'Thank you very much',
  },
  {
    pergunta: '',
    resposta: 'You’re welcome',
  },
  {
    pergunta: '',
    resposta: 'Have a nice weekend',
  },
]