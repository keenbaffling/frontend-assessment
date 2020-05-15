# Frontend Assessment

* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

Answer: The part `+ + 'a'` where `+ 'a'` is executed as if it is a positive number, however, javascript has a fallback whenever exception occurs upon evaluation resulting to `NaN`. Output should now be `baNaNa` then we concatenate `'a'` which will output `baNaNa`. The only thing left to do is transform the string to lowercase using `.toLowercase()` function.

---

## Exercise 1

* To view exercise 1 output. Just open `exercise-1/index.html` file.

## Exercise 2

* Create-React-App was used inside `exercise-2` directory which has further instructions to view the ouput.
