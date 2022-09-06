const polls = [
  {
    id: "1234",
    title: "Which programming language you first learned?",
    description: "There are a lot of popular programming languages",
    options: [
      { id: "5678", value: "C programming", vote: 0 },
      { id: "9101", value: "Java", vote: 0 },
      { id: "1213", value: "Python", vote: 0 },
      { id: "1415", value: "JavaScript", vote: 0 },
    ],
    created: new Date(),
    totalVote : 0,
    opinions: []
  },
  {
    id: "1617",
    title: "What language do you use for CP?",
    description: "Comptetive Programming helps to build logical thinking",
    options: [
      { id: "1819", value: "C programming", vote: 0 },
      { id: "2021", value: "Java", vote: 0 },
      { id: "2223", value: "Python", vote: 0 },
      { id: "2425", value: "JavaScript", vote: 0 },
    ],
    created: new Date(),
    totalVote : 0,
    opinions: []
  },
];

export default polls; 
