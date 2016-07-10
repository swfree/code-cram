module.exports = [
  {
    "answer": "notes",
    "category": "server-side",
    "question": "What makes Node different than traditional, non-blocking web servers? How do you scale a Node application?",
    "id": 1,
    "references": []
  },
  {
    "answer": "notes",
    "category": "behavioral",
    "question": "What's your favorite programming language? Why? Teach a feature of the language to somebody who doesn't know it.",
    "id": 2,
    "references": []
  },
  {
    "answer": "notes",
    "category": "frameworks",
    "question": "Benefits of React vs. Angular?",
    "id": 4,
    "references": []
  },
  {
    "answer": "sdffdf",
    "category": "computers",
    "question": "Bit-twiddling?",
    "id": 5,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Build a class for a vending machine.",
    "id": 6,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "databases",
    "question": "Can you describe a database schema for tracking youtube videos, users, and user likes. What query string would you use to get the video titles for all the videos that a user likes?",
    "id": 7,
    "references": []
  },
  {
    "answer": "notes",
    "category": "deployment",
    "question": "Compare AWS vs. GCP?",
    "id": 8,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "security",
    "question": "Compare hashing vs encryption",
    "id": 9,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Create an algorithm to determine whether pixels surrounding a grid spot in a Game of Life environment are turned on.",
    "id": 10,
    "references": []
  },
  {
    "answer": "dsf",
    "category": "algorithms",
    "question": "Create an algorithm to place a series of randomized ships onto a battleship(game)-esque grid system",
    "id": 11,
    "references": []
  },
  {
    "answer": "notes",
    "category": "behavioral",
    "question": "Describe the difference between good and great code?",
    "id": 12,
    "references": []
  },
  {
    "answer": "sfsf",
    "category": "algorithms",
    "question": "Design a function to merge a list of contacts between various clients updating a web service",
    "id": 13,
    "references": []
  },
  {
    "answer": "sfsf",
    "category": "algorithms",
    "question": "Design a game of poker. How would do you write a function to determine the winning score in a round?",
    "id": 14,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Design an algorithm to find the first common ancestor of two nodes in a binary tree.",
    "id": 15,
    "references": []
  },
  {
    "answer": "solution to palindrome",
    "category": "algorithms",
    "question": "Detect whether or not a string is a palindrome.",
    "id": 16,
    "references": []
  },
  {
    "answer": "notes on testing stuffs",
    "category": "behavioral",
    "question": "Did you do any front end testing?",
    "id": 17,
    "references": []
  },
  {
    "answer": "notes",
    "category": "behavioral",
    "question": "Do you like problem solving?",
    "id": 18,
    "references": []
  },
  {
    "answer": "solution",
    "category": "databases",
    "question": "Does a JOIN return just one row where the IDs match or every row where the IDs match?",
    "id": 19,
    "references": []
  },
  {
    "answer": "defer: wait until it downloads, once it’s downloaded immediately executes in block rendering. *async: waits to execute until the very end.",
    "category": "javascript",
    "question": "Explain async vs. defer?",
    "id": 20,
    "references": []
  },
  {
    "answer": "*(1) JavaScript maintains a queue of messages, which are essentially callbacks. *(2) JS also maintains a call stack, which is a stack of frames for nested function calls that have not yet completed evaluating. *(3) JS runs a while loop that waits synchronously for a message, processes the message synchronously, and repeats. *(4) A message is added to the queue via event listeners that are attached to events, e.g. click handlers on DOM elements. If an event does not have a listener attached, it is simply ignored and no message is created for it. *(5) A message is always processed fully, through its entire call stack. This process cannot be interrupted by any other message: the next message can only be called when the call stack is empty again.",
    "category": "javascript",
    "question": "Explain the event loop in JavaScript.",
    "id": 21,
    "references": [
      "https://github.com/hackreactor/peripheral-brain/wiki/event-loop"
    ]
  },
  {
    "answer": "Client or Server side rendering. *For SEO",
    "category": "javascript",
    "question": "Explain ‘isomorphic'",
    "id": 22,
    "references": [
      "http://isomorphic.net/articles "
    ]
  },
  {
    "answer": "The ‘this’ keyword is bound to an object at the time the enclosing function is called. Exactly what object it is bound to depends on how the function was called. *Meaningless contexts: global scope (this is set to the Window object), free function invocation (this is set to the Window object). *Meaningful contexts: call, apply, or bind (this is set to the first parameter passed in), new keyword (this is set to the new object created by this function), dot operator (this set to the object to the left of the dot).",
    "category": "javascript",
    "question": "Explain ‘this’ in JavaScript.",
    "id": 23,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Find first common ancestor given 2 nodes in a tree not necessarily a binary tree.",
    "id": 24,
    "references": []
  },
  {
    "answer": "binary search?",
    "category": "algorithms",
    "question": "Find median of two sorted arrays.",
    "id": 25,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Find the first 1 entry in an array of binary numbers",
    "id": 26,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Find the k smallest values in a binary search tree.",
    "id": 27,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Find the k-th element from the end of a linked list. Implement iteratively and recursively.",
    "id": 28,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Find the kth largest element in an array.",
    "id": 29,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Find where two linked lists converge in O(n) time and O(1) memory. Linked lists are guarantied to be valid and to converge at some point",
    "id": 30,
    "references": []
  },
  {
    "answer": "notes",
    "category": "misc",
    "question": "Git basics: Why do people refer to ‘the SHA-1’?",
    "id": 31,
    "references": []
  },
  {
    "answer": "notes",
    "category": "misc",
    "question": "Git: Merge vs. Rebase debate?",
    "id": 32,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Given a binary tree and a sum, find all the paths that lead to the sum.",
    "id": 33,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Given a directory string \"c/a/../b/./d\" write a method that outputs the final directory. (In this example, \"c/b/d\"). A \".\" input stays in the current directory, a \"..\" input goes back one.",
    "id": 34,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Given a list of numbers, sort them and remove the duplicate numbers.",
    "id": 35,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.",
    "id": 36,
    "references": [
      "https://leetcode.com/problems/spiral-matrix/"
    ]
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Given a stream of words find the most occurring word. Also find the top 100 distinct most occurring words.",
    "id": 37,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Given a string of symbols with no delimiters between letters, and a lookup table to translate symbol sequences into letters, write code to determine all possible interpretations of the string.",
    "id": 38,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Given an array of integers, and knowing that every integer in the array is non unique except for one — find the unique element.",
    "id": 39,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Given an array of numbers, return the longest substring in which the difference between every consecutive number pair varies difference in sign (I.e. +-+-)",
    "id": 40,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Given an n x m array with sorted rows and columns, find the position of a given target value in the array?",
    "id": 41,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Given k sorted arrays of length n each, merge them and print the sorted output.",
    "id": 42,
    "references": [
      "http://www.geeksforgeeks.org/merge-k-sorted-arrays/"
    ]
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Given several blackjack hands, determine the winning hand. E.g. A,A,J = 12; J,J,A,2 = 23; A,2 = 13 — the third hand won.",
    "id": 43,
    "references": []
  },
  {
    "answer": "solution needs min heap and max heap",
    "category": "algorithms",
    "question": "Given that integers are read from a data stream. Find median of elements read so far in efficient way.",
    "id": 44,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Given two arrays, output an array with the elements that are contained in both.",
    "id": 45,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Given two integers, return the numbers of matched digit number. For ex, 130 and 239, return 1. 29 and 92, return 0",
    "id": 46,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Given two sets represented by two arrays, how to check if the given two sets are disjoint or not? It may be assumed that the given arrays have no duplicates.",
    "id": 47,
    "references": [
      "http://www.geeksforgeeks.org/check-two-given-sets-disjoint/"
    ]
  },
  {
    "answer": "notes",
    "category": "behavioral",
    "question": "Have you worked in a group setting? How do you handle conflicts in a group setting?",
    "id": 48,
    "references": []
  },
  {
    "answer": "errrr….",
    "category": "computers",
    "question": "How computers work: Memory",
    "id": 49,
    "references": []
  },
  {
    "answer": "notes",
    "category": "algorithms",
    "question": "How do hashmaps work? What is their algorithmic efficiency?",
    "id": 50,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "How do you find the first common node of two linked lists given the head of the two linked list?",
    "id": 51,
    "references": []
  },
  {
    "answer": "podcasts ...",
    "category": "behavioral",
    "question": "How do you keep up with developments in front-end frameworks and tools?",
    "id": 52,
    "references": []
  },
  {
    "answer": "notes",
    "category": "behavioral",
    "question": "How do you know if a product you have been working on is successful?",
    "id": 53,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "frameworks",
    "question": "How do you structure React/Redux? What middleware do you use?",
    "id": 54,
    "references": []
  },
  {
    "answer": "solution",
    "category": "databases",
    "question": "How does a JOIN work?",
    "id": 55,
    "references": []
  },
  {
    "answer": "notes",
    "category": "computers",
    "question": "How does memory work in the computer?",
    "id": 56,
    "references": [
      ""
    ]
  },
  {
    "answer": "notes",
    "category": "server-side",
    "question": "How does Node.js compare to other server-side technologies?",
    "id": 57,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "frameworks",
    "question": "How does React Native work?",
    "id": 58,
    "references": []
  },
  {
    "answer": "Initial *GetDefaultProps *GetInitialState *ComponentWillMount *Render *ComponentDidMount",
    "category": "frameworks",
    "question": "How does React’s lifecycle work?",
    "id": 59,
    "references": [
      "",
      "http://busypeoples.github.io/post/react-component-lifecycle/",
      "",
      "http://blog.reverberate.org/2014/02/react-demystified.html"
    ]
  },
  {
    "answer": "stuff",
    "category": "notes",
    "question": "How many lines of code was your biggest project?",
    "id": 60,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "How would you design a backend system to keep track of the top100 search queries from Google? You can only use 100mb of memory. Discuss all the possible approaches you could take, what data structures you would use the tradeoffs of each option.",
    "id": 61,
    "references": []
  },
  {
    "answer": "notes",
    "category": "system-design",
    "question": "How would you design Youtube (need for low latency, robustness against data loss, ...) (no implementation necessary)",
    "id": 62,
    "references": []
  },
  {
    "answer": "notes",
    "category": "system-design",
    "question": "How would you implement Uber pool? E.g. given 2 trips, write an algorithm to see if they should pool together.",
    "id": 63,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "How would you merge two lists of uneven lengths that may contain duplicates? What is the runtime? Can you optimize for space?",
    "id": 64,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "How would you use OOP to represent a game of snake? (the Nokia phone game)",
    "id": 65,
    "references": []
  },
  {
    "answer": "notes",
    "category": "javascript",
    "question": "If you have a login form, what are all the considerations you would make when designing and implementing this form?",
    "id": 66,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "solution",
    "question": "If you needed to send data to some server, how would you do this? What would be your considerations? What would you do if you wanted to send data to a server and didn’t need a response and want to avoid CORS issues?",
    "id": 67,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "solution",
    "question": "If your site is taking a long time to load what would you do? How would you identify what needs to be fixed/improved?",
    "id": 68,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Implement a flood fill.",
    "id": 69,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Implement a set class using arrays.",
    "id": 70,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Implement autocomplete",
    "id": 71,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Implement Conways game of life.",
    "id": 72,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Implement Djikstra's shortest path algorithm",
    "id": 73,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Implement insertion and deletion in a trinary tree.",
    "id": 74,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Implement LRU Cache.",
    "id": 75,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "John Conway's Game of Life: implement a method that updates the game board to its next state.",
    "id": 76,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "LCA of 2 nodes in a binary tree (not BST)",
    "id": 77,
    "references": []
  },
  {
    "answer": "solution: dynamic programming",
    "category": "algorithms",
    "question": "Obtain the given sum of currency using minimal denominations.",
    "id": 78,
    "references": []
  },
  {
    "answer": "notes",
    "category": "misc",
    "question": "Package management: what is apt-get?",
    "id": 79,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Print all permutations of a string",
    "id": 80,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Print duplicates in an array (you may either print duplicate values many times or just once as they're discovered)",
    "id": 81,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Print out all combinations of an n-digit lock given possible numbers of each digit.",
    "id": 82,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Rearrange digits of a number to find the largest possible number in O(n) time.",
    "id": 83,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Remove duplicates from a linked list.",
    "id": 84,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Reverse a singly linked list",
    "id": 85,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Serialize and deserialize a binary tree.",
    "id": 86,
    "references": [
      "http://www.geeksforgeeks.org/serialize-deserialize-binary-tree/"
    ]
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Square all the numbers in a sorted array and maintain sorted-ness",
    "id": 87,
    "references": []
  },
  {
    "answer": "A function retains ongoing access to all variables available in the scope in which the function was created. *This means you can get and set the variable’s value. ",
    "category": "javascript",
    "question": "Talk about closures in JavaScript",
    "id": 88,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "solution",
    "question": "Tell me about ES6, what is it and why is it important? Do other languages have these features?",
    "id": 89,
    "references": []
  },
  {
    "answer": "angular, react, backbone, etc",
    "category": "frameworks",
    "question": "Tell me about frontend frameworks you have used, compare them, which do you like and why?",
    "id": 90,
    "references": []
  },
  {
    "answer": "umm… ",
    "category": "behavioral",
    "question": "Tell me about interesting technical challenges you have worked on?",
    "id": 91,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "databases",
    "question": "Tell me about MongoDB.",
    "id": 92,
    "references": []
  },
  {
    "answer": "behavioral",
    "category": "behavioral",
    "question": "Tell me about yourself.",
    "id": 93,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Traverse a binary tree using recursion and then iteration.",
    "id": 94,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Traverse a BST in order. Give runtime and space requirements.",
    "id": 95,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Two rovers are on a planet and can move and set beacons. How would you get them to crash?",
    "id": 96,
    "references": []
  },
  {
    "answer": "solution",
    "category": "databases",
    "question": "What are challenges you have faced with mySQL [or insert db name here]?",
    "id": 97,
    "references": []
  },
  {
    "answer": "Objects that are delegated to in case of failed property lookup. *New prototype relationships can be created via Object.create.",
    "category": "javascript",
    "question": "What are prototypes in JavaScript?",
    "id": 98,
    "references": []
  },
  {
    "answer": "notes",
    "category": "behavioral",
    "question": "What are some differences between JS and other languages?",
    "id": 99,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "server-side",
    "question": "What are streams?",
    "id": 100,
    "references": []
  },
  {
    "answer": "Advantages: variables, nesting. *Disadvantages:",
    "category": "css",
    "question": "What are the advantages & disadvantages of CSS preprocessors",
    "id": 101,
    "references": []
  },
  {
    "answer": "notes",
    "category": "misc",
    "question": "What are the benefits of functional vs. object-oriented programming?",
    "id": 102,
    "references": []
  },
  {
    "answer": "Speed: deploys as client-side application, doesn’t wait for server to run. *Lightweight: reduced load on the server. *Everything is an object. ",
    "category": "javascript",
    "question": "What are the benefits of JavaScript?",
    "id": 103,
    "references": [
      "http://www.iadt.edu/student-life/iadt-buzz/december-2013/the-pros-and-cons-of-javascript-is-it-still-necessary"
    ]
  },
  {
    "answer": "stuff",
    "category": "databases",
    "question": "What are the differences between a relational and nonrelational database and what are the advantages/disadvantages?",
    "id": 104,
    "references": []
  },
  {
    "answer": "Functional.*Functional-shared.*Prototypal.*Pseudoclassical.*Classes.",
    "category": "javascript",
    "question": "What are the four (ES5) or five (ES6) instantiation patterns in JavaScript?",
    "id": 105,
    "references": []
  },
  {
    "answer": "stuff stuff",
    "category": "system design",
    "question": "What are workers?",
    "id": 106,
    "references": [
      "https://github.com/hackreactor/peripheral-brain/wiki/Workers"
    ]
  },
  {
    "answer": "notes",
    "category": "behavioral",
    "question": "What are your failures in the past?",
    "id": 107,
    "references": []
  },
  {
    "answer": "huh",
    "category": "computers",
    "question": "What are ‘floating point errors’?",
    "id": 108,
    "references": []
  },
  {
    "answer": "stuff...",
    "category": "behavioral",
    "question": "What did you learn at Hack Reactor?",
    "id": 109,
    "references": []
  },
  {
    "answer": "notes",
    "category": "behavioral",
    "question": "What do you look for in code reviews?",
    "id": 110,
    "references": []
  },
  {
    "answer": "notes",
    "category": "behavioral",
    "question": "What feedback would your peers give you if you ask them for some criticism?",
    "id": 111,
    "references": []
  },
  {
    "answer": "notes",
    "category": "browsers",
    "question": "What happens when you type in the bar in the browser?",
    "id": 112,
    "references": []
  },
  {
    "answer": "notes",
    "category": "server-side",
    "question": "What is a server?",
    "id": 113,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "solution",
    "question": "What is CORS? Who enforces CORS?",
    "id": 114,
    "references": []
  },
  {
    "answer": "notes",
    "category": "browsers",
    "question": "What is CRUD?",
    "id": 115,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "deployment",
    "question": "What is Docker for?",
    "id": 116,
    "references": []
  },
  {
    "answer": "notes",
    "category": "misc",
    "question": "What is dynamic programming?",
    "id": 117,
    "references": []
  },
  {
    "answer": "Hoisting occurs when function and variable declarations are moved to the top of the scope; either the function scope or to the global scope.*This happens before any of your own code is executed.*Functions are hoisted first, then variables.*For function declarations, this includes the function body.*For variable declarations, this does NOT include the initialization of its value.*Note that for let or const, you get a ReferenceError instead of undefined if you try to access the variable before it is assigned. ",
    "category": "javascript",
    "question": "What is hoisting?",
    "id": 118,
    "references": []
  },
  {
    "answer": "Clients can make the same call and get same results. *Example: pure functions",
    "category": "misc",
    "question": "What is idempotency?",
    "id": 119,
    "references": []
  },
  {
    "answer": "notes",
    "category": "frameworks",
    "question": "What is JSX?",
    "id": 120,
    "references": []
  },
  {
    "answer": "notes",
    "category": "system-design",
    "question": "What is multi-tier architecture?",
    "id": 121,
    "references": []
  },
  {
    "answer": "notes",
    "category": "browsers",
    "question": "What is ReST?",
    "id": 122,
    "references": []
  },
  {
    "answer": "notes",
    "category": "system-design",
    "question": "What is service-oriented architecture?",
    "id": 123,
    "references": []
  },
  {
    "answer": "notes",
    "category": "browsers",
    "question": "What is TCP/IP?",
    "id": 124,
    "references": []
  },
  {
    "answer": "Stuff.",
    "category": "security",
    "question": "What is the Same-origin policy?",
    "id": 125,
    "references": []
  },
  {
    "answer": "notes",
    "category": "frameworks",
    "question": "What is Typescript?",
    "id": 126,
    "references": []
  },
  {
    "answer": "notes",
    "category": "behavioral",
    "question": "What is your development process like?",
    "id": 127,
    "references": []
  },
  {
    "answer": "notes",
    "category": "browsers",
    "question": "What makes up a GET request?",
    "id": 128,
    "references": []
  },
  {
    "answer": "notes",
    "category": "server-side",
    "question": "What should you consider when designing an API?",
    "id": 129,
    "references": []
  },
  {
    "answer": "notes",
    "category": "algorithms",
    "question": "What’s the difference between an array and a linked list?",
    "id": 130,
    "references": []
  },
  {
    "answer": "attribute i.e. <img src=>",
    "category": "html",
    "question": "What’s the difference between an attribute and a property?",
    "id": 131,
    "references": []
  },
  {
    "answer": "notes",
    "category": "css",
    "question": "What’s the difference between CSS resetting and normalizing?",
    "id": 132,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "notes",
    "question": "When working in a group, how do you deal with difficult team members?",
    "id": 133,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "frameworks",
    "question": "When would you use Redux?",
    "id": 134,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "databases",
    "question": "When would you want to denormalize data and when would would you want to keep it normalized?",
    "id": 135,
    "references": []
  },
  {
    "answer": "notes",
    "category": "javascript",
    "question": "Why do we need webpack or browserify?",
    "id": 136,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "solution",
    "question": "Why do you want to work for Slack?",
    "id": 137,
    "references": []
  },
  {
    "answer": "notes",
    "category": "skye",
    "question": "Why do you want to work for Splunk?",
    "id": 138,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "solution",
    "question": "Why happens when you type in a URL in the URL bar?",
    "id": 139,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "server-side",
    "question": "Why use Node.js?",
    "id": 140,
    "references": []
  },
  {
    "answer": "To avoid pollution the Global Scope",
    "category": "javascript",
    "question": "Why would you use an Immediately Invoked Function Expression?",
    "id": 141,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Write a CleanAPI() method to remove dirty values in a list of integers.",
    "id": 142,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Write a function that checks if a binary tree is a valid binary search tree",
    "id": 143,
    "references": []
  },
  {
    "answer": "notes",
    "category": "challenge",
    "question": "Write a function that downloads all the cat images from the first 10 pages of lolcats.com",
    "id": 144,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Write a function that given a 6 digit hex color code, generates the hex shorthand.",
    "id": 145,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Write a function that gives the minimum number of dice rolls to get from the start to finish of a board of shoots and ladders. How would you represent the board? What type of graph traversal are you using?",
    "id": 146,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Write a function that takes (a) an array of numbers and return the number of elements in the array that are a power of 2. (b) Time complexity? Refactor function to work for any base",
    "id": 147,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Write a function that takes a number and using setTimeout prints very number starting at 1 until the input with half a second in between.",
    "id": 148,
    "references": []
  },
  {
    "answer": "Toy problem solution.",
    "category": "algorithms",
    "question": "Write a function that takes a string and a target (‘243’, 13) and uses ‘*/+-‘ symbols to find all solutions to get that target number.",
    "id": 149,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Write a function that takes a string as an input and returns the longest palindrome that in the string. (use dynamic programming)",
    "id": 150,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Write a function that takes a word and return the number of syllables in the word",
    "id": 151,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Write a function that takes an array of words and returns an array of up to 10 words that appeared the most often. Time complexity? If your input list of words was so large that a couple computers couldn’t handle all the data, how would you approach?",
    "id": 152,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Write an algorithm that checks if a given graph is a bipartite graph.",
    "id": 153,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Write an algorithm to determine how similar/different two strings are. (open ended, could be percentage difference, character difference)",
    "id": 154,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "Write an algorithm to find the height of a binary tree.",
    "id": 155,
    "references": []
  },
  {
    "answer": "solution",
    "category": "algorithms",
    "question": "Write the object oriented design for a car. Implement its acceleration and deceleration.",
    "id": 156,
    "references": []
  },
  {
    "answer": "Be able to describe MVC and talk through the flow of data and UI view changes",
    "category": "challenge",
    "question": "You have front-end app: displays an individual’s net worth. Makes API request to user’s bank accounts 1 at a time to get sum of all account balances. How speed up process and design UI to give the best user exp? How fetch & display?",
    "id": 157,
    "references": []
  },
  {
    "answer": "stuff",
    "category": "algorithms",
    "question": "You have two substrings of a string that overlap. How would you put them together into one string?",
    "id": 158,
    "references": []
  }
]