/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

//const todos = [
  //  { task: "Wash the dishes", completed: false, priority: 3 },
  //  { task: "Write a blog post", completed: true, priority: 1 },
  //  { task: "Buy groceries", completed: false, priority: 2 },
  //  { task: "Study JavaScript", completed: true, priority: 1 },
  //  { task: "Walk the dog", completed: false, priority: 2 },
  //];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
  
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */

  /*
  🔹 Task 3: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */

  /*
  🔹 Task 4: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
  
  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  // console.log("Incomplete Tasks:", ...);
  // console.log("Sorted by Priority:", ...);
  // console.log("All Tasks Completed:", ...);
  // console.log("Sorted Incomplete Tasks:", ...);
  

  const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];

  // Task 1: Filter Incomplete Tasks
 let incompleteTasks = todos.filter(function(todo) {
    return !todo.completed;
  });
 console.log("Incomplete Tasks:", incompleteTasks);

// Task 2: Sort Tasks by Priority
let sortPriority = todos.sort(function (a, b) {
  return (a.priority - b.priority);
});
console.log("Sorted by Priority:", sortPriority);

// Task 3: Method Chaining - filter for incomplete and sort by priority
let sortedIncomplete = todos.filter(function(todo) {
  return !todo.completed;
});
todos.sort(function(a, b) {
  return (a.priority - b.priority);
});
console.log("Sorted Incomplete Tasks:", sortedIncomplete);

// Task 4: Mark All Tasks as Completed
let allComplete = todos.map(function(todo) {
  return (todo.completed = true);
});
console.log("All Tasks Completed:", todos);
