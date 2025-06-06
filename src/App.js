import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./App.css";

const questions = [
  {
    id: 1,
    question: "What is the supreme law of the land?",
    answers: ["The Constitution"],
  },
  {
    id: 2,
    question: "What does the Constitution do?",
    answers: [
      "Sets up the government",
      "Defines the government",
      "Protects basic rights of Americans",
    ],
  },
  {
    id: 3,
    question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    answers: ["We the People"],
  },
  {
    id: 4,
    question: "What is an amendment?",
    answers: [
      "A change (to the Constitution)",
      "An addition (to the Constitution)",
    ],
  },
  {
    id: 5,
    question: "What do we call the first ten amendments to the Constitution?",
    answers: ["The Bill of Rights"],
  },
  {
    id: 6,
    question: "What is one right or freedom from the First Amendment?",
    answers: [
      "Speech",
      "Religion",
      "Assembly",
      "Press",
      "Petition the government",
    ],
  },
  {
    id: 7,
    question: "How many amendments does the Constitution have?",
    answers: ["Twenty-seven (27)"],
  },
  {
    id: 8,
    question: "What did the Declaration of Independence do?",
    answers: [
      "Announced our independence (from Great Britain)",
      "Declared our independence (from Great Britain)",
      "Said that the United States is free (from Great Britain)",
    ],
  },
  {
    id: 9,
    question: "What are two rights in the Declaration of Independence?",
    answers: ["Life", "Liberty", "Pursuit of happiness"],
  },
  {
    id: 10,
    question: "What is freedom of religion?",
    answers: [
      "You can practice any religion, or not practice a religion.",
    ],
  },
  {
    id: 11,
    question: "What is the economic system in the United States?",
    answers: [
      "Capitalist economy",
      "Market economy",
    ],
  },
  {
    id: 12,
    question: "What is the 'rule of law'?",
    answers: [
      "Everyone must follow the law.",
      "Leaders must obey the law.",
      "Government must obey the law.",
      "No one is above the law.",
    ],
  },
  {
    id: 13,
    question: "Name one branch or part of the government.",
    answers: [
      "Congress",
      "Legislative",
      "President",
      "Executive",
      "The courts",
      "Judicial",
    ],
  },
  {
    id: 14,
    question: "What stops one branch of government from becoming too powerful?",
    answers: [
      "Checks and balances",
      "Separation of powers",
    ],
  },
  {
    id: 15,
    question: "Who is in charge of the executive branch?",
    answers: ["The President"],
  },
  {
    id: 16,
    question: "Who makes federal laws?",
    answers: [
      "Congress",
      "Senate and House (of Representatives)",
      "(U.S. or national) legislature",
    ],
  },
  {
    id: 17,
    question: "What are the two parts of the U.S. Congress?",
    answers: ["The Senate and House (of Representatives)"],
  },
  {
    id: 18,
    question: "How many U.S. Senators are there?",
    answers: ["One hundred (100)"],
  },
  {
    id: 19,
    question: "We elect a U.S. Senator for how many years?",
    answers: ["Six (6)"],
  },
  {
    id: 20,
    question: "Who is one of your state’s U.S. Senators now?",
    answers: ["Michael F. Bennet (if you live in Colorado)", "John W. Hickenlooper (if you live in Colorado)"],
  },
  {
    id: 21,
    question: "The House of Representatives has how many voting members?",
    answers: ["Four hundred thirty-five (435)"],
  },
  {
    id: 22,
    question: "We elect a U.S. Representative for how many years?",
    answers: ["Two (2)"],
  },
  {
    id: 23,
    question: "Name your U.S. Representative.",
    answers: ["Gabe Evans (if you live in Colorado)", "Brittany Pettersen (if you live in Colorado)"],
  },
  {
    id: 24,
    question: "Who does a U.S. Senator represent?",
    answers: ["All people of the state"],
  },
  {
    id: 25,
    question: "Why do some states have more Representatives than other states?",
    answers: [
      "(Because of) the state’s population",
      "(Because) they have more people",
      "(Because) some states have more people",
    ],
  },
  {
    id: 26,
    question: "We elect a President for how many years?",
    answers: ["Four (4)"],
  },
  {
    id: 27,
    question: "In what month do we vote for President?",
    answers: ["November"],
  },
  {
    id: 28,
    question: "What is the name of the President of the United States now?",
    answers: ["Donald J. Trump"],
  },
  {
    id: 29,
    question: "What is the name of the Vice President of the United States now?",
    answers: ["J.D. Vance"],
  },
  {
    id: 30,
    question: "If the President can no longer serve, who becomes President?",
    answers: ["The Vice President"],
  },
  {
    id: 31,
    question: "If both the President and the Vice President can no longer serve, who becomes President?",
    answers: ["The Speaker of the House"],
  },
  {
    id: 32,
    question: "Who is the Commander in Chief of the military?",
    answers: ["The President"],
  },
  {
    id: 33,
    question: "Who signs bills to become laws?",
    answers: ["The President"],
  },
  {
    id: 34,
    question: "Who vetoes bills?",
    answers: ["The President"],
  },
  {
    id: 35,
    question: "What does the President’s Cabinet do?",
    answers: ["Advises the President"],
  },
  {
    id: 36,
    question: "What are two Cabinet-level positions?",
    answers: [
      "Secretary of Agriculture",
      "Secretary of Commerce",
      "Secretary of Defense",
      "Secretary of Education",
      "Secretary of Energy",
      "Secretary of Health and Human Services",
      "Secretary of Homeland Security",
      "Secretary of Housing and Urban Development",
      "Secretary of the Interior",
      "Secretary of Labor",
      "Secretary of State",
      "Secretary of Transportation",
      "Secretary of the Treasury",
      "Secretary of Veterans Affairs",
      "Attorney General",
      "Vice President",
    ],
  },
  {
    id: 37,
    question: "What does the judicial branch do?",
    answers: [
      "Reviews laws",
      "Explains laws",
      "Resolves disputes (disagreements)",
      "Decides if a law goes against the Constitution",
    ],
  },
  {
    id: 38,
    question: "What is the highest court in the United States?",
    answers: ["The Supreme Court"],
  },
  {
    id: 39,
    question: "How many justices are on the Supreme Court?",
    answers: ["Nine (9)"],
  },
  {
    id: 40,
    question: "Who is the Chief Justice of the United States now?",
    answers: ["John Roberts"],
  },
  {
    id: 41,
    question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    answers: [
      "To print money",
      "To declare war",
      "To create an army",
      "To make treaties",
    ],
  },
  {
    id: 42,
    question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
    answers: [
      "Provide schooling and education",
      "Provide protection (police)",
      "Provide safety (fire departments)",
      "Give a driver’s license",
      "Approve zoning and land use",
    ],
  },
  {
    id: 43,
    question: "Who is the Governor of your state now?",
    answers: ["Jared Polis (if you live in Colorado)"],
  },
  {
    id: 44,
    question: "What is the capital of your state?",
    answers: ["Denver"],
  },
  {
    id: 45,
    question: "What are the two major political parties in the United States?",
    answers: ["Democratic and Republican"],
  },
  {
    id: 46,
    question: "What is the political party of the President now?",
    answers: ["Republican"],
  },
  {
    id: 47,
    question: "What is the name of the Speaker of the House of Representatives now?",
    answers: ["Mike Johnson"],
  },
  {
    id: 48,
    question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
    answers: [
      "Citizens eighteen (18) and older (can vote).",
      "You don’t have to pay (a poll tax) to vote.",
      "Any citizen can vote. (Women and men can vote.)",
      "A male citizen of any race (can vote).",
    ],
  },
  {
    id: 49,
    question: "What is one responsibility that is only for United States citizens?",
    answers: [
      "Serve on a jury",
      "Vote in a federal election",
    ],
  },
  {
    id: 50,
    question: "Name one right only for United States citizens.",
    answers: [
      "Vote in a federal election",
      "Run for federal office",
    ],
  },
  {
    id: 51,
    question: "What are two rights of everyone living in the United States?",
    answers: [
      "Freedom of expression",
      "Freedom of speech",
      "Freedom of assembly",
      "Freedom to petition the government",
      "Freedom of religion",
      "The right to bear arms",
    ],
  },
  {
    id: 52,
    question: "What do we show loyalty to when we say the Pledge of Allegiance?",
    answers: [
      "The United States",
      "The flag",
    ],
  },
  {
    id: 53,
    question: "What is one promise you make when you become a United States citizen?",
    answers: [
      "Give up loyalty to other countries",
      "Defend the Constitution and laws of the United States",
      "Obey the laws of the United States",
      "Serve in the U.S. military (if needed)",
      "Serve (do important work for) the nation (if needed)",
      "Be loyal to the United States",
    ],
  },
  {
    id: 54,
    question: "How old do citizens have to be to vote for President?",
    answers: ["Eighteen (18) and older"],
  },
  {
    id: 55,
    question: "What are two ways that Americans can participate in their democracy?",
    answers: [
      "Vote",
      "Join a political party",
      "Help with a campaign",
      "Join a civic group",
      "Join a community group",
      "Give an elected official your opinion on an issue",
      "Call Senators and Representatives",
      "Publicly support or oppose an issue or policy",
      "Run for office",
      "Write to a newspaper",
    ],
  },
  {
    id: 56,
    question: "When is the last day you can send in federal income tax forms?",
    answers: ["April 15"],
  },
  {
    id: 57,
    question: "When must all men register for the Selective Service?",
    answers: [
      "At age eighteen (18)",
      "Between eighteen (18) and twenty-six (26)",
    ],
  },
  {
    id: 58,
    question: "What is one reason colonists came to America?",
    answers: [
      "Freedom",
      "Political liberty",
      "Religious freedom",
      "Economic opportunity",
      "Practice their religion",
      "Escape persecution",
    ],
  },
  {
    id: 59,
    question: "Who lived in America before the Europeans arrived?",
    answers: ["Native Americans"],
  },
  {
    id: 60,
    question: "What group of people was taken to America and sold as slaves?",
    answers: ["Africans"],
  },
  {
    id: 61,
    question: "Why did the colonists fight the British?",
    answers: [
      "Because of high taxes (taxation without representation)",
      "Because the British army stayed in their houses (boarding, quartering)",
      "Because they didn’t have self-government",
    ],
  },
  {
    id: 62,
    question: "Who wrote the Declaration of Independence?",
    answers: ["Thomas Jefferson"],
  },
  {
    id: 63,
    question: "When was the Declaration of Independence adopted?",
    answers: ["July 4, 1776"],
  },
  {
    id: 64,
    question: "There were 13 original states. Name three.",
    answers: [
      "New Hampshire",
      "Massachusetts",
      "Rhode Island",
      "Connecticut",
      "New York",
      "New Jersey",
      "Pennsylvania",
      "Delaware",
      "Maryland",
      "Virginia",
      "North Carolina",
      "South Carolina",
      "Georgia",
    ],
  },
  {
    id: 65,
    question: "What happened at the Constitutional Convention?",
    answers: [
      "The Constitution was written.",
      "The Founding Fathers wrote the Constitution.",
    ],
  },
  {
    id: 66,
    question: "When was the Constitution written?",
    answers: ["1787"],
  },
  {
    id: 67,
    question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    answers: [
      "James Madison",
      "Alexander Hamilton",
      "John Jay",
      "Publius",
    ],
  },
  {
    id: 68,
    question: "What is one thing Benjamin Franklin is famous for?",
    answers: [
      "U.S. diplomat",
      "Oldest member of the Constitutional Convention",
      "First Postmaster General of the United States",
      "Writer of 'Poor Richard’s Almanac'",
      "Started the first free libraries",
    ],
  },
  {
    id: 69,
    question: "Who is the 'Father of Our Country'?",
    answers: ["George Washington"],
  },
  {
    id: 70,
    question: "Who was the first President?",
    answers: ["George Washington"],
  },
  {
    id: 71,
    question: "What territory did the United States buy from France in 1803?",
    answers: ["The Louisiana Territory"],
  },
  {
    id: 72,
    question: "Name one war fought by the United States in the 1800s.",
    answers: [
      "War of 1812",
      "Mexican-American War",
      "Civil War",
      "Spanish-American War",
    ],
  },
  {
    id: 73,
    question: "Name the U.S. war between the North and the South.",
    answers: ["The Civil War"],
  },
  {
    id: 74,
    question: "Name one problem that led to the Civil War.",
    answers: [
      "Slavery",
      "Economic reasons",
      "States’ rights",
    ],
  },
  {
    id: 75,
    question: "What was one important thing that Abraham Lincoln did?",
    answers: [
      "Freed the slaves (Emancipation Proclamation)",
      "Saved (or preserved) the Union",
      "Led the United States during the Civil War",
    ],
  },
  {
    id: 76,
    question: "What did the Emancipation Proclamation do?",
    answers: [
      "Freed the slaves",
      "Freed slaves in the Confederacy",
      "Freed slaves in the Confederate states",
      "Freed slaves in most Southern states",
    ],
  },
  {
    id: 77,
    question: "What did Susan B. Anthony do?",
    answers: [
      "Fought for women’s rights",
      "Fought for civil rights",
    ],
  },
  {
    id: 78,
    question: "Name one war fought by the United States in the 1900s.",
    answers: [
      "World War I",
      "World War II",
      "Korean War",
      "Vietnam War",
      "(Persian) Gulf War",
    ],
  },
  {
    id: 79,
    question: "Who was President during World War I?",
    answers: ["Woodrow Wilson"],
  },
  {
    id: 80,
    question: "Who was President during the Great Depression and World War II?",
    answers: ["Franklin Roosevelt"],
  },
  {
    id: 81,
    question: "Who did the United States fight in World War II?",
    answers: ["Japan, Germany, and Italy"],
  },
  {
    id: 82,
    question: "Before he was President, Eisenhower was a general. What war was he in?",
    answers: ["World War II"],
  },
  {
    id: 83,
    question: "During the Cold War, what was the main concern of the United States?",
    answers: ["Communism"],
  },
  {
    id: 84,
    question: "What movement tried to end racial discrimination?",
    answers: ["Civil rights (movement)"],
  },
  {
    id: 85,
    question: "What did Martin Luther King, Jr. do?",
    answers: [
      "Fought for civil rights",
      "Worked for equality for all Americans",
    ],
  },
  {
    id: 86,
    question: "What major event happened on September 11, 2001, in the United States?",
    answers: ["Terrorists attacked the United States."],
  },
  {
    id: 87,
    question: "Name one American Indian tribe in the United States.",
    answers: [
      "Cherokee",
      "Navajo",
      "Sioux",
      "Chippewa",
      "Choctaw",
      "Pueblo",
      "Apache",
      "Iroquois",
      "Creek",
      "Blackfeet",
      "Seminole",
      "Cheyenne",
      "Arawak",
      "Shawnee",
      "Mohegan",
      "Huron",
      "Oneida",
      "Lakota",
      "Crow",
      "Teton",
      "Hopi",
      "Inuit",
    ],
  },
  {
    id: 88,
    question: "Name one of the two longest rivers in the United States.",
    answers: ["Missouri (River)", "Mississippi (River)"],
  },
  {
    id: 89,
    question: "What ocean is on the West Coast of the United States?",
    answers: ["Pacific (Ocean)"],
  },
  {
    id: 90,
    question: "What ocean is on the East Coast of the United States?",
    answers: ["Atlantic (Ocean)"],
  },
  {
    id: 91,
    question: "Name one U.S. territory.",
    answers: [
      "Puerto Rico",
      "U.S. Virgin Islands",
      "American Samoa",
      "Northern Mariana Islands",
      "Guam",
    ],
  },
  {
    id: 92,
    question: "Name one state that borders Canada.",
    answers: [
      "Maine",
      "New Hampshire",
      "Vermont",
      "New York",
      "Pennsylvania",
      "Ohio",
      "Michigan",
      "Minnesota",
      "North Dakota",
      "Montana",
      "Idaho",
      "Washington",
      "Alaska",
    ],
  },
  {
    id: 93,
    question: "Name one state that borders Mexico.",
    answers: [
      "California",
      "Arizona",
      "New Mexico",
      "Texas",
    ],
  },
  {
    id: 94,
    question: "What is the capital of the United States?",
    answers: ["Washington, D.C."],
  },
  {
    id: 95,
    question: "Where is the Statue of Liberty?",
    answers: [
      "New York (Harbor)",
      "Liberty Island",
    ],
  },
  {
    id: 96,
    question: "Why does the flag have 13 stripes?",
    answers: [
      "Because there were 13 original colonies",
      "Because the stripes represent the original colonies",
    ],
  },
  {
    id: 97,
    question: "Why does the flag have 50 stars?",
    answers: [
      "Because there is one star for each state",
      "Because each star represents a state",
      "Because there are 50 states",
    ],
  },
  {
    id: 98,
    question: "What is the name of the national anthem?",
    answers: ["The Star-Spangled Banner"],
  },
  {
    id: 99,
    question: "When do we celebrate Independence Day?",
    answers: ["July 4"],
  },
  {
    id: 100,
    question: "Name two national U.S. holidays.",
    answers: [
      "New Year’s Day",
      "Martin Luther King, Jr. Day",
      "Presidents’ Day",
      "Memorial Day",
      "Independence Day",
      "Labor Day",
      "Columbus Day",
      "Veterans Day",
      "Thanksgiving",
      "Christmas",
    ],
  },
];

function App() {
  const [showAnswer, setShowAnswer] = useState(null); // Track the ID of the currently visible answer

  // Toggle answer visibility for a specific question
  const toggleAnswer = (id) => {
    setShowAnswer((prev) => (prev === id ? null : id)); // Close the previous answer and open the new one
  };

  return (
    <div className="App">
      <div className="questions-container" style={{ overflowY: "scroll", height: "100vh" }}>
        {questions.map((q) => (
          <div key={q.id} className="question-card" onClick={() => toggleAnswer(q.id)}>
            <h2>{q.id}. {q.question}</h2>
            {showAnswer === q.id && (
              <ul>
                {q.answers.map((answer, index) => (
                  <li key={index}>{answer}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;