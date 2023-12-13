
# GITS.ID Tests

This repository created only for tests provided by gits.id in order to participate in an internship.
*note: this details for the 3rd test only

## FAQ

#### Complexity

This code have 2 complexities: Loop and Operation


First, we have a loop that processes each character of the input. The number of steps in this loop depends on the input length, we call the input length as 'n'.

Second, we have operations on the stack, which have a complexity of O(1) for push and pop operations. In the loop, for each character, we may perform a push or pop operation on the stack. Assuming that the push and pop operations on the stack are O(1), the total complexity can be considered as O(n), where 'n' is the input length.

In conclusion this code is quite efficient in determining the balance of brackets in a string. By using a stack, the program can monitor pairs of open and closed parentheses without needing to traverse the string more than once.

#### Details

1. One-time iteration: Each character in the string is inspected exactly once.


2. Stack Use: This algorithm uses a stack to track the opening bracket characters encountered. Each bracket opening character will be inserted into the stack, and when a bracket closing character is encountered, we check whether the bracket matches the one at the top of the stack. 


3. Constant Comparison: At each iteration, there are only a few constant comparison operations to check the bracket types and ensure that they match. This operation also requires constant time.


4. Completion in One Iteration: The algorithm completes in one iteration through the string because each character is only inspected once.

