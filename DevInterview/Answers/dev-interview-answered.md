Please answer these questions to be the best of your ability.  On the short answers, try to keep your answers brief (1-2 sentences).  For coding problems, use good conventions for code that would be shared with a team.

Thanks and Good luck!

Web Development
===============

1. Given the following array, write a Javascript or PHP function that creates a new array, with only the elements that appear in the original array at least twice.

```
$fruits = ['apple', 'orange', 'pear', 'orange', 'pineapple', 'banana', 'pear', 'strawberry']
```
```
Answered in './Question1' folder
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
```
Answered in './Question2' folder
```
3. What is the difference between an HTTP PUT and HTTP POST?
```
An HTTP PUT has no side effects when called multiple times. While every POST request can create a new entry in the database, a PUT
request either creates a new entry or modifies the existing one. 
```
4. What would you want to URL-encode in an HTTP request and why?
```
URLs only utilize the ASCII character set. When you URL-encode in an HTTP request, you are converting your data to an ASCII safe character 
set, most obvious being spaces in the origional string being replaces with '%'. Once the data has been converted to an ASCII safe string 
it can then be transmitted via URL.
```
5. What type of data is best served from a CDN?
```
Website assets such as HTML pages, Javascript files, CSS files, and other objects that render on screen are best served from a CDN.
```
6. Explain what HTTPS is, how it works, and why we use it.
```
Before the widespread adoption of HTTPS, HTTP (Hypertext Transfer Protocol) was used as the primary means of transfering data a between the client and the
server. This origional HTTP transferred unencrypted data, meaning that the data transferred by way of HTTP was vulnerable to be accessed by outside, 
malicious parties. HTTPS solves this by encrypting the data being transferred through Transport Layer Security (TLS). The TLS establishes a connection 
between the client and server such that both sides have agreed to each others validity. TLS then communicates the encryption protocol this connection will
utilize, allowing the server to decipher the clients encrypted requests and send secured data to the client.
```
7. What does a HTTP response code in the 4XX range mean?
```
Every HTTP response code in the 4XX range indicates a failure of the HTTP request that was caused by client side error. 
```
8. How should the text character `&` be represented in html?
```
&amp;
```
9. In javascript, how do you get the root node of the DOM?
```
'document.documentElement' is a vanilla Javascript method that returns the root element of the HTML document it's being called on.
```
10. What is a CORS request?  Why does it exist?
```
A Cross Origin Resource Sharing (CORS) request is a request in which the client is requesting resources from a source that is different
than its own host server, or its origin. Such a request is handled by CORS, a protocol enabled on a server that grants access to 
certain external sources. When a CORS request is made, the client makes a 'preflight request' that is used to determine 
whether or not the cross origin resource is able to fulfil the original requests. Once the external server indicates the request us allowed
the call can be made by the client. This allows servers to reject requests from unfamiliar sources, avoiding crucial data breaches from erroneous
requests made by bad actors.
```
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
```
	a. Write a CSS selector that selects the first `<div>` and not the second one.
		#greeting
	b. Write a CSS selector that selects the second `<span>` and not the first one.
		.footer
	c. Write a CSS selector that selects the first `<span>` and not the second one.
		.body_text span
```
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
	 ```
	 The output to console of this code will be:
 	6
 	44
 	23
 
	When 'a' is initialized globally as 23 on line 1, it is never modified within its own scope. The 'a' that is initialized in the 'f' instance of "outerFunction" is within 
 	its own scope and has no implicit relation to the global 'a'. For that reason, when the "increment" function in the object returned by "outerFunction" is called, it only 
 	mutates the a within its scope, incrimenting that 'a' from 5 to 6. The 'b' is initialized to 43 based on the passed argument in the 'f' instance of 'outerFunction'.
 	Along with the 'a' initialized in that instance, it is incremented by 1, taking it from 43 to 44.
 
 	When 'f's print function is called, it prints its instances of 'a' and 'b' respectively, then just below that we print 'a' in the global scope, which, having
 	not been modified, is still 23.
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
```
SELECT * IN users_meta WHERE location='NJ';
```
2. Write a sql statement that deletes all rows in users_meta for inactive users.
```
DELETE FROM users_meta WHERE user_id IN (SELECT id IN users WHERE active=0)
```
3. If the select statement in #1 is the only type of statement that gets run on this database, list all the keys/indexes you would want on these tables.

4. When would you want to LEFT JOIN as opposed to INNER JOIN?
```
Since an INNER JOIN only keeps entries that pass the join condition, you would want to LEFT JOIN if you wanted to perserve all the entries in the left table
regardless of whether or not the entries had a match with the right table. 
```
5. What is a SQL injection, and what are some common techniques to prevent them?

Development Environment
=======================

1. How would you securely SSH into a remote server in Linux?
```
typing 'ssh' into the terminal, among other things.
```
2. How would you securely, recursively copy a directory of files to a remote server in Linux?
```
scp with the -r function
```
3. If I ran `ls -l` and saw the following output, what would that mean?

```
-rwx-w-r--  5 foo  bar  777 Oct  31  1:05 foobar
```
```
There is a 777mb file namesd'foobar' created on Halloween at around 1 am by 'foo' under the group 'bar' with 5 hard links.
```
4. Given the output from #3, describe what these users would be allowed to do with the file:

  a. User foo in group bar
	```
	Read, write, and execute
	```

  b. User bob in group bar
	  ```
	  Write
	  ```

  c. User sara in group foobar
	  ```
	  foobar is not a group it is the name of the file
	  ```
