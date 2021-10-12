type Quiz = {
  category: string;
  question: string;
  options: string[];
  correctValue: string;
  correctOption: number;
};
export const quizes: Quiz[] = [
  // basic
  {
    category: "Basic",
    question: "The first point score in a game is called?",
    options: ["1", "10", "15", "20"],
    correctValue: "15",
    correctOption: 3,
  },
  {
    category: "Basic",
    question: "Stroke used to put ball into play is called?",
    options: ["Serve", "Volley", "Forehand", "backhand"],
    correctValue: "Serve",
    correctOption: 1,
  },
  {
    category: "Basic",
    question: "The first point score in a game is called?",
    options: ["1", "10", "15", "20"],
    correctValue: "15",
    correctOption: 3,
  },
  {
    category: "Basic",
    question: "A term used for a score of 40-40 is called?",
    options: ["Overtime", "Deuce", "Game", "Foul"],
    correctValue: "Deuce",
    correctOption: 2,
  },
  {
    category: "Basic",
    question: "An unreturnable serve is called?",
    options: ["Ace", "Let", "Foul", "Overtime"],
    correctValue: "Ace",
    correctOption: 1,
  },
  // forehand
  {
    category: "Forehand",
    question: `What is the correct ready or "set" position in tennis?`,
    options: [
      "With the left side to the net if one is right-handed",
      "With the right side to the net if one is right-handed",
      "Facing the net with the knees relaxed and bent",
      "Facing the net with the body erect and standing tall",
    ],
    correctValue: "Facing the net with the knees relaxed and bent",
    correctOption: 3,
  },
  {
    category: "Forehand",
    question:
      "When preparing to hit a forehand drive, where should the head of the racket be in relation to the wrist?",
    options: [
      "Even or in line with the wrist",
      "Below the height of the wrist",
      "In the back of the wrist during contact",
      "None of the above",
    ],
    correctValue: "Even or in line with the wrist",
    correctOption: 1,
  },
  {
    category: "Forehand",
    question: "Where should the ball be contacted on the forehand drive?",
    options: [
      "Opposite the right side of the body",
      "In front of your body",
      "Opposite the left foot",
      "In the front of the left shoulder",
    ],
    correctValue: "In front of your body",
    correctOption: 2,
  },
  {
    category: "Forehand",
    question: "The best height at which to contact a ball is?",
    options: [
      "Below the knee",
      "About knee height",
      "Between the knee and waist",
      "About shoulder height",
    ],
    correctValue: "Between the knee and waist",
    correctOption: 3,
  },
  {
    category: "Forehand",
    question:
      "What is the correct arm position for the forehand follow-through in tennis?",
    options: [
      "The wrist below eye level",
      "The wrist at eye level and firm",
      "The elbow straight but the wrist loose",
      "The wrist rolls over so the hand and arm angle face down",
    ],
    correctValue: "The wrist at eye level and firm",
    correctOption: 2,
  },
  // backhand
  {
    category: "Backhand",
    question: "What are types of backhand?",
    options: [
      "Single Handed Backhand",
      "Double Handed Backhand",
      "Full Handed Backhand",
      "Option A and Option B",
    ],
    correctValue: "Option A and Option B",
    correctOption: 4,
  },
  {
    category: "Backhand",
    question:
      "At the point of contact on the backhand stroke, where should your weight be?",
    options: [
      "On your heels",
      "On the rear foot",
      "Equally on both feet",
      "On the front foot",
    ],
    correctValue: "On the front foot",
    correctOption: 4,
  },
  {
    category: "Backhand",
    question: "Where should the ball be contacted on the backhand drive?",
    options: [
      "Out to the side of your left foot",
      "In front of the body",
      "In front of the left shoulder",
      "Opposite the left foot",
    ],
    correctValue: "In front of the body",
    correctOption: 2,
  },
  {
    category: "Backhand",
    question:
      "In executing the backhand drive, the racket head should be no _____ than the wrist on the forward swing",
    options: ["Equal", "Parallel", "Higher", "Lower"],
    correctValue: "Higher",
    correctOption: 3,
  },
  {
    category: "Backhand",
    question:
      "In executing the backhand drive, On a forehand swing, if the wrist rolls over, the ball will likely go into the net.",
    options: ["True", "False"],
    correctValue: "True",
    correctOption: 1,
  },
];
