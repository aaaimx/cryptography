# Salted Passwords

In the previous lesson, we explained why it is better to store hashed passwords. But a file of passwords encrypted with a hash function is still vulnerable. Let’s imagine that a hacker compiles a list of the million most common passwords. He operates on all the million of them with the hash function and stores the results.  Now, the hacker steals a list of hash values stored in the database. He compares that list with his list of encrypted possible passwords and discovers possible matches. 
This is called a dictionary attack. 
Salt is a way to make it more difficult.

**Salt** is a random string that is concatenated with the password before hashing it. Both the salt value and the result of the hash function are stored in the database on the host. If the number of possible salt values is large enough, this practically eliminates a dictionary attack against commonly used passwords because the hacker has to generate the one-way hash for each possible salt value.

::: warning Note

Salt only protects against general dictionary attacks on a password file, not against a concerted attack on a single password. It protects people who have the same password on multiple machines but doesn’t make poorly chosen passwords any better.
:::