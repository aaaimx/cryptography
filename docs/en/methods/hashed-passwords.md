# Hashed Passwords
  
When Alice logs into a host computer (or a telephone banking system, or any other type of terminal), how does the host know who she is? How does the host know she is not Eve trying to falsify Alice’s identity? Traditionally, passwords solve this problem. Alice enters her password, and the host confirms that it is correct. Both Alice and the host know this secret piece of knowledge, and the host requests it from Alice every time she tries to log in.

The host does not need to know the passwords; the host has to be able to differentiate valid passwords from invalid passwords. This is easy with one-way functions. Instead of storing passwords, the host stores hashes of the passwords.

Procedure
1. Alice sends the host her password. 
2. The host performs a one-way function (hashing) on the password.
3. The host compares the result of the hashing to the value it previously stored.

Since the host no longer stores a table of everybody’s valid passwords, the threat of someone breaking into the host and stealing the password list is mitigated.

::: warning Note

The list of passwords operated on by hashing is useless because the hash cannot be reversed to recover the passwords.
:::