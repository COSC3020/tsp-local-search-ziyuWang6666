[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12894734&assignment_repo_type=AssignmentRepo)
# Traveling Salesperson Problem -- Local Search

This exercise is about the Traveling Salesperson Problem I mentioned in the
lecture on NP-hard problems -- given a set of cities, determine the length of
the shortest tour that visits all of them. We can get from any city to any other
city, i.e. the graph of cities is completely connected. We consider the version
of the Traveling Salesperson Problem that finds the shortest tour to visit $n$
cities, starting at a city and ending at the $n$ th city; it *does not* go
back to the start. The start city may be any of the cities. Remember that the
graph for a TSP is undirected, i.e. the cost is the same in either direction.

The 2-opt algorithm for solving the Traveling Salesperson Problem is a
randomized local search algorithm that, at each iteration, reverses part of the
route. It starts with a random route (this is the randomized part), and changes
part of the route in each step (this is the local search part, sprinkled with
more randomness). The pseudocode for one iteration is as follows:

```javascript
2optSwap(route, i, k)
  cities 1 to i-1 stay in the order they are
  cities i to k are reversed
  cities k + 1 to n stay in the order they are
```

For example, if I call the above function with route A--B--C--D--E--F, $i=2$,
$k=4$, the resulting route is A--B--E--D--C--F.

The algorithm starts with a random route; if the new route at the end of an
iteration decreases the total length, it is retained as the current incumbent.
The incumbent after the final iteration is returned as the solution.

Implement the 2-opt algorithm, which repeatedly runs the above steps. Your
implementation needs to fix two design parameters that I have left open. First,
you need to design a stopping criterion -- when would it make sense to stop and
return the shortest route found so far rather than trying another iteration?
Second, design a way to choose $i$ and $k$ -- note that they need to be
different in subsequent iterations, as one iteration would simply undo what
the previous one did otherwise. Start with the template I provided in `code.js`.
Describe in your code how you designed your stopping criterion and ways of
choosing $i$ and $k$ and why.

The function takes a distance matrix (the adjacency matrix for the graph where
the values in the cells are the distances between the corresponding cities) and
returns the length of the shortest tour (not the tour itself).

Test your new function; I've provided some basic testing code in `code.test.js`.

## Runtime Analysis

What is the worst-case asymptotic time complexity of your implementation? What
is the worst-case asymptotic memory complexity? Add your answer, including your
reasoning, to this markdown file.



### Answer

#### The total worst-case time complexity is constant with O(len^2), len is the number of vertices.

1. The function twoOptSwap takes the route length O(len), then createRoute.slice(i+1, k+1) is create a new array with time complexity of O(k-i+1), and then reverses elements in place. So, the worst-case time complexity is O(len).

2. The countPathLength function iterating over route and count to totalLength whose worst-case time complexity is O(len)

3. tsp_ls takes O(len^2)

So, the total complexity of this implementation is O(len^2).



#### The worst-case memory time complexity is O(n), where n is the matrix length.



1. The memory complexity of the twoOptSwap function is O(n), n is the length of currentRoute array.

2. The countPathLength function memory complexity is constant since adding totalLength every time O(1).

3. distance_matrix, currentRoute, cur, maxIterate, loop i, j and k are use memory in tsp_ls function. currentRoute array worst case memory complexity is O(n), n is the length of the matrix length. Since  currentRoute occupy the dominate part of memory useage. So, by adding up those steps together, the total memory complexity in worst-case of O(n).
