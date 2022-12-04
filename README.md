[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9268118&assignment_repo_type=AssignmentRepo)
# React useState Workshop - Morning Tasks

If you get stuck, you can refer to the docs [here](https://beta.reactjs.org/learn/state-a-components-memory) and [here](https://beta.reactjs.org/apis/react/useState#usestate) for context, syntax, and examples as well as loads of other resources just a Google away!

## Task 1 - Random Name Generator

**1.1:**

👉 This repo has the React app already created within it. You just need to install the Node modules. (If you forget the terminal command to do this, you can always Google it.)

**1.2:**

👉 Navigate to [App.js](./src/App.js). First, you'll need to import `useState` from React at the top of the file.

OPTIONAL: Before you carry on with the rest of the workshop, feel free to replicate an example of a counter or other simple state like in the example we looked at together. Then once you're ready, carry on with the tasks below.

**1.3:**

👉 You've been provided with an array of bootcamper names in [this file](./src/bootcampers.js). Import it into your [App.js file](./src/App.js) so we can use it in our app.

**1.4:**

👉 Create a piece of state at the top of your `App` component called `bootcamperIndex` with an initial state of `0`. If you need a reminder of how to declare state, check the [docs](https://reactjs.org/docs/hooks-overview.html)!

**1.5:**

👉 In the JSX that the app component renders, insert into the `<p>` tag the item of the bootcampers array at the current `bootcamperIndex` (instead of its current text of BOOTCAMPER NAME).

Remember, your state holds the *index* - you'll then need to use this index to access the bootcamper at that position in the array. Break it down and make a plan!

**1.6:**

👉 Write a function called `handleClick` within your app component, and inside of this, use the function from your useState to set the `bootcamperIndex` state to be a random number between zero and the length of the bootcampers array.

**1.7:**

👉 In the JSX that the app component renders, update the button to call your `handleClick` function when it gets clicked. If you need a reminder on how to handle events in React, check the [docs](https://reactjs.org/docs/handling-events.html)

Great! Run your React app in the browser to test it. You should now be getting a random bootcamper every time you click that button.

## Task 2 - Random Compliments

**2.1:**

👉 Now try and repeat the outcome of task one still using handleClick, but this time use a random compliment as well as the bootcamper names. There's an array of compliments in [here](./src/bootcampers.js) that you may have noticed earlier. Feel free to add more compliments to the array - you can never have enough nice things to say about people! 

**2.2:**

👉 Make a new piece of state for the index of the compliment array and a separate `<p>` tag in your app component to display the compliment alongside the name you've generated in task one.

**2.3:**

👉 Add code to your `handleClick` function so that it sets this additional state to be a random index between 0 and the length of the array of compliments as well.

Run your app to make sure that both a random bootcamper's name and a random compliment are both generated when you click the button.

## Bonus:

🌟 If you finish these tasks, think of a third state that you can add to your app, and then implement it. Experiment with using a different data type than the numbers you've been using.
