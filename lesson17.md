<!-- .slide: id="lesson17" -->

# JavaScript Course - Spring 2026

Lesson 17, Thursday, 2026-05-28

---

# AI Assisted Review

Give and receive feedback, with help from AI tools.

---

### Recap: Lesson 16

- Peer review: examine each other's work to catch bugs and improve quality
- Self-review first: read your code as if for the first time
- Ask: clear to teammates? clear in 6 months? does what it should?
- Good habits: take a break, rubber ducking, git diffs
- It is _not_ just about finding mistakes

---

### Today's objective

- Use AI to review your own work
- Review someone else's work with empathy
- Write clear, constructive feedback

---

### Agenda

- Part 1: Reviewing your own work with AI
- Break
- Part 2: Reviewing someone else's work
- Wrap-up

---

<!-- .slide: id="self-review-ai" -->

# Part 1: Reviewing Your Own Work

---

### AI tools: what they do

- Spot code smells / anti-patterns
- Flag accessibility issues
- Suggest refactors and alternatives

---

### Using AI productively

- Good prompts
- Right questions
- Critical thinking about the output

---

### Exercise 1

Submit your own work for AI review

- Critique your code or design with AI
- Reflect: what did AI catch that you didn't?
- Optional: revise based on feedback

---

# Break Time!

---

<!-- .slide: id="reviewing-others" -->

# Part 2: Reviewing Someone Else's Work

---

### Why it matters

- Builds communication and critical thinking
- Ensures high work quality
- Learn new approaches from others

---

### Best practices

- Work, not the person
- Constructive and specific
- Clarifying questions that invite discussion
- Let go of ownership, learn to receive feedback

---

### AI as a review assistant

- Summarize a snippet / proposal / PR
- Effective prompts for others' work
- Help with tone
- Spot overlooked areas
- Critical thinking about the output

---

### Exercise 2

Review provided snippets with AI support

- Identify areas to focus on, or validate findings
- Review comments: keep, change, ask about
- Discuss how you would phrase feedback to a peer

---

Give your feedback on this code:

```js
function f(x) {
  return x * 0.9;
}
```

Unclear name and a magic number. What is `0.9`? Maybe `applyDiscount(price)` with a named rate

<!-- .element: class="fragment" -->

---

Give your feedback on this code:

```js
let status = "active";
if (status = "inactive") {
  console.log("User is inactive");
}
```

There is a bug: `=` should be `===`. The condition is always truthy

<!-- .element: class="fragment" -->

---

Give your feedback on this code:

```js
function getFirstName(fullName) {
  return fullName.split(" ")[0];
}
```

What if `fullName` is empty or `undefined`? No edge case handling. Ask about the expected input

<!-- .element: class="fragment" -->

---

### Prompt suggestions

- "How would you improve this function for clarity and edge case handling?"
- "What async behavior might cause bugs here?"
- "If I submitted this to a code review, what would be the top 3 concerns?"

---

### Wrap-up

Reflect as a group:

- How do you feel about peer review?
- Surprised by the AI's suggestions?
- Self-review vs. reviewing others?

---

Additional Resources:

<!-- .slide: style="font-size:80%" -->

* [Why you need a self review of your code](https://medium.com/bitdatatechie/why-you-need-a-self-review-of-your-code-4ea057f428fa)
* [How to review code effectively: A GitHub staff engineer's philosophy](https://github.blog/developer-skills/github/how-to-review-code-effectively-a-github-staff-engineers-philosophy/)
* [How to do a code review](https://google.github.io/eng-practices/review/reviewer/)
* [Code Review good practices: guide for beginners](https://medium.com/transparent-data-eng/good-practices-of-code-review-guide-for-beginners-8c084cd70be3)
* [Review your own pull requests](https://patrickdinh.medium.com/review-your-own-pull-requests-5634cad10b7a)
* [Empathy and code reviews](https://medium.com/@RoxSWEngineering/empathy-and-code-reviews-fde4e394184d)
