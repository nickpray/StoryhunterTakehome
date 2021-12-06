Please answer these questions to be the best of your ability.  On the short answers, try to keep your answers brief (1-2 sentences).  For coding problems, use good conventions for code that would be shared with a team.

Thanks and Good luck!

Web Development
===============

1. Given the following array, write a Javascript or PHP function that creates a new array, with only the elements that appear in the original array at least twice.

```
$fruits = ['apple', 'orange', 'pear', 'orange', 'pineapple', 'banana', 'pear', 'strawberry']
```

2. Complete the following data structure class.  Add any properties, functions or supporting classes necessary.  ALL FUNCTIONS should be constant time, i.e. O(1).

```
class MyDataStore {
    /** Returns the first item pushed */
    function firstItem(): object;

    /** Returns the last item pushed */
    function lastItem(): object;

    /** Returns the item corresponding to the given key */
    function itemForKey(key: string): object;

    /** Returns the item pushed immediately after the item corresponding to the given key */
    function itemAfterKey(key: string): object;

    /** Pushes an item and associates it with the given key */
    function pushItem(key: string, item: object): void;

    /** Remove the item associated with a given key */
    function removeItem(key: string): void;
}
```

3. What is the difference between an HTTP PUT and HTTP POST?

4. What would you want to URL-encode in an HTTP request and why?

5. What type of data is best served from a CDN?

6. Explain what HTTPS is, how it works, and why we use it.

7. What does a HTTP response code in the 4XX range mean?

8. How should the text character `&` be represented in html?

9. In javascript, how do you get the root node of the DOM?

10. What is a CORS request?  Why does it exist?

11. Given the following html:

```
<html>
  <title>My Title</title>
  <body>
    <div id="greeting" class="body_text"> Hello, world! </div>
    <div class="body_text">
      <span> Here's some cool text! </span>
    </div>
    <span class="footer"> Sign up for our <a href="/email/"> email list </a></span>
  </body>
</html>
```
	a. Write a CSS selector that selects the first `<div>` and not the second one.

	b. Write a CSS selector that selects the second `<span>` and not the first one.

	c. Write a CSS selector that selects the first `<span>` and not the second one.

12. What will be output to console when running the following code?  Explain why.

	```
	var a = 23;

	var outerFunction = function(inputVar) {
		var a = 5;
		var b = inputVar;

		return {
			increment: function() {
				a++;
				b++;
			},
			print: function() {
				console.log(a);
				console.log(b);
			}
		}
	}

	f = outerFunction(43);

	f.increment();

	f.print();

	console.log(a);

	```

Databases
=========

Given the following tables:

```
users

|----|---------|--------|

| id | name    | active |

|----|---------|--------|

| 1  | Alice   |  1     |

| 2  | Bob     |  0     |

| 3  | Charlie |  1     |

| 4  | Dave    |  1     |

| 5  | Eve     |  0     |

|----|---------|--------|


users_meta

|----|---------|----------|

| id | user_id | location |

|----|---------|----------|

| 1  |  3      | "NY"     |

| 2  |  1      | "NJ"     |

| 3  |  3      | "PA"     |

| 4  |  2      | "CA"     |

| 5  |  2      | "HK"     |

| 6  |  4      | "NY"     |

| 7  |  5      | "NJ"     |

|----|---------|----------|

```

1. Write a sql statement that selects all users with a location in NJ.

2. Write a sql statement that deletes all rows in users_meta for inactive users.

3. If the select statement in #1 is the only type of statement that gets run on this database, list all the keys/indexes you would want on these tables.

4. When would you want to LEFT JOIN as opposed to INNER JOIN?

5. What is a SQL injection, and what are some common techniques to prevent them?

Development Environment
=======================

1. How would you securely SSH into a remote server in Linux?

2. How would you securely, recursively copy a directory of files to a remote server in Linux?

3. If I ran `ls -l` and saw the following output, what would that mean?

```
-rwx-w-r--  5 foo  bar  777 Oct  31  1:05 foobar
```

4. Given the output from #3, describe what these users would be allowed to do with the file:

  a. User foo in group bar

  b. User bob in group bar

  c. User sara in group foobar
