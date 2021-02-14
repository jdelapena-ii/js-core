// The control flow is the order in which the computer executes statements in a script.

// Code is run in order from the first line in the file to the last line, unless the computer runs
// across the (extremely frequent) structures that change the control flow, such as conditionals
// and loops. 

// For example, imagine a script used to validate user data from a webpage form. The script
// submits validated data, but if the user, say, leaves a required field empty, the script prompts
// them to fill it in. To do this, the script uses a conditional structure or if...else, so that
// different code executes depending on whether the form is complete or not:

if (field==empty) {
    promptUser();
} else {
    submitForm();
}

// A typical script in JavaScript or PHP (and the like) includes many control structures,
// including conditionals, loops and functions. Parts of a script may also be set to execute when
// events occur.

// For example, the above excerpt might be inside a function that runs when the user clicks the
// Submit button for the form. The function could also include a loop, which iterates through all of
// the fields in the form, checking each one in turn. Looking back at the code in the if and
// else sections, the lines promptUser and submitForm could also be calls to other
// functions in the script. As you can see, control structures can dictate complex flows of
// processing even with only a few lines of code.

// Control flow means that when you read a script, you must not only read from start to finish but
// also look at program structure and how it affects order of execution.

// --------------------------------------------------------------

// If else
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// The if statement executes a statement if a specified condition is truthy. If the condition is
// falsy, another statement can be executed.

function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));
  // expected output: "NOT positive"



  // Syntax
  if (condition)
   statement1
[else
   statement2]

// condition - An expression that is considered to be either truthy or falsy.

// statement1  - Statement that is executed if condition is truthy. Can be any statement, including further
// nested if statements. To execute multiple statements, use a block statement ({ ...
// }) to group those statements. To execute no statements, use an empty statement.

// statement2 - Statement that is executed if condition is falsy and the else clause exists. Can be
// any statement, including block statements and further nested if statements.


// Multiple if...else statements can be nested to create an else if clause. Note that
// there is no elseif (in one word) keyword in JavaScript.

if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
...
else
  statementN