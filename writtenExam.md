## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.

.forEach:

You pass each function that's is executed on each element in a Array

You can use forEach when you want to execute a loop

Example

const numbers = [10, 20, 30]
numbers.forEach.(myfunction)

function myFunction(item, index, arr) {
arr[index] = item \* 10
}

You should use this when you can't use (for) or .map()

.map:

You use this when you want to transform your elements in an Array.
You map over the array and can execute whats in it and creates a new array from the parentArray, you can change the value of each element.

If you would like to multiply every element the parent array you can do it with the .map function.

Example:

const = numbers [2, 4, 6]
const = newarray numbers.map(myFunction)

{
function myFunction(numbers)
return numbers * 5
}

.filter:

You use .filter when you want to select a multiple elements from an Array.

Example:

const age = [12, 15, 17, 19, 20]
{
function checkAge(age)
return age >= 15
}

.find:

Select the first element in an Array
You use this when you want to select a single element from an Array.
.find is not chancing the original array.

Example:

const age = [12, 15, 17, 19, 20]

{
  function checkAge(age)
  return age >= 17
}

