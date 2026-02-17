<!-- .slide: id="lesson15" -->

# JavaScript Course - Fall 2025

Lesson 15, Tuesday, 2025-11-18

---

> this is a new lesson format we are experimenting with this semester, feedback welcome!

---

# Peer Review

One or more people examine the work of someone else. Usually happens in teams before considering the code to be ready.

---

### Why peer review?

- Helps catch bugs early on
- Improves code quality, reliability, and maintainability
- Enhances learning through feedback
- Promotes team collaboration and communication

---

### How to do it right

- Review code for clarity, not just bugs
- Suggest improvements, don’t just criticize
- Ask questions if unclear about logic

---

Give your feedback on this code:

```js
let n = 3;
let p = 8;
console.log(n * p);
```

Variable names could be better

<!-- .element: class="fragment" -->

---

Give your feedback on this code:

```js
let numFriends = 2;
let ticketPrice = 2;
let totalPrice = numFriends ** ticketPrice;
console.log(totalPrice); // output is 4
```

There is a bug, it should be `*`, not `**`

<!-- .element: class="fragment" -->

---

Give your feedback on this code:

```js
function isUserActive(user) {
  if (user.isDeleted === true) {
    return false;
  } else {
    return true;
  }
}

let userActive = isUserActive(user);
```

It can be simpler: `let userActive = !user.isDeleted`

<!-- .element: class="fragment" -->

---

### Self-Review

before peer review, always look at your code with a critical eye before considering it ready, it saves time for others, and it helps make the code easier to understand.

---

Ask yourself the following questions:

- Would my teammates understand this?
- Would I understand this if I came back to it in 6 months?
- Does this do what it is supposed to do? Does it actually do what i think it does?

---

Some good habits:

- Take a break before reviewing
- Git diffs / Pull requests
- Rubber ducking

---

### AI Tools

You can use AI tools to help you do the review, but you need to _ask the right questions_, and _think critically about the output._


---

### Demo with ChatGPT

---

Now try it with some of your code from previous tasks

* What did it say? Does it make sense?
* Do you know if its better? why?
* Can you change adapt your code accordingly?

---

Additional Resources:

* [Why you need a self review of your code](https://medium.com/bitdatatechie/why-you-need-a-self-review-of-your-code-4ea057f428fa)
* [How to review code effectively: A GitHub staff engineer’s philosophy](https://github.blog/developer-skills/github/how-to-review-code-effectively-a-github-staff-engineers-philosophy/)
* [How to do a code review](https://google.github.io/eng-practices/review/reviewer/)
* [Code Review good practices: guide for beginners](https://medium.com/transparent-data-eng/good-practices-of-code-review-guide-for-beginners-8c084cd70be3)
* [Review your own pull requests](https://patrickdinh.medium.com/review-your-own-pull-requests-5634cad10b7a)
* [Empathy and code reviews](https://medium.com/@RoxSWEngineering/empathy-and-code-reviews-fde4e394184d)

---

<!-- .slide: id="final" -->


# Final Project!

---

### Organizational info

- Individual or team of 2-3 people
  - Fill out the info in the spreadsheet!
- Internal presentation at Dec 9th, you will present your project to the class
- Some projects at Demo Day (different by location)
  - Nominate yourself

---

### Last semesters

- [WhattaCook](https://github.com/katamatata/katamatata.github.io)
- [Plantastik](https://github.com/annamariaratajczak/plantastick)
- [Giphy CopyCat](https://github.com/ami-onodera/giphy)
- [Memory Game](https://github.com/TainaraCris1/Project_Memory_Game)
- [Tic-Tac-Toe](https://github.com/Amani-Maklad/Tic-Tac-Toe)

---

### More ideas

- Data visualization of the flee markets in Berlin
- Calendar for Remote work
- Grocery shopping list
- AI in the browser
- Personal Portfolio

---

### APIs

- [Berlin data](https://daten.berlin.de/datensaetze/datenberlinde-metadaten)
- [Free APIS](https://free-apis.github.io/#/browse)
- [Public APIs](https://github.com/public-apis/public-apis)

---

### AI in the browser

Latest Chrome beta can run small AI models in the browser!

```js
let model = await LanguageModel.create();
let answer = await model.prompt("Why is JavaScript awesome?");
// or detect language
let detector = await LanguageDetector.create();
let result = await detector.detect("Merci common ca va?");
```

Documentation: https://developer.chrome.com/docs/ai/built-in

---

### Project Strategy

Define a Minimum Viable Product (MVP)

Implement essential functionality, and if there's still time, implement the "nice to have" features.
