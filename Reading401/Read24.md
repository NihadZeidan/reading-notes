# Hash Table



## Hash - A hash is the result of some algorithm taking an incoming string and converting it into a value that could be used for either security or some other purpose. In the case of a hash table, it is used to determine the index of the array.

## Buckets - A bucket is what is contained in each index of the array of the hash table. Each index is a bucket. An index could potentially contain multiple key/value pairs if a collision occurs.

## Collisions - A collision is what happens when more than one key gets hashed to the same location of the hash table.

Nodes in hash table has key, value and a link to allow chaining.
Hash table like array in structure.

hash is the ability to encode the key that will eventually map to a specific location in the data structure that we can look at directly to retrieve the value.

Hash tables has TC --> O(1) to search for values (search by index)

## Creating Hash:

- Add or multiply all the ASCII values together.
- Multiply it by a prime number such as 599.
- Use modulo to get the remainder of the result, when divided by the total size of the array.
- Insert into the array at that index.

Instead of starting each index with `null` we can make it to be `LinkedList` so we can store multi values at the same index (Collisions)

If we didn’t store the key, the bucket would look like this. Accessing .get("Pioneer Square") or .get("Alki Beach") would hash the keys and still lead to bucket 92, but it would be impossible to tell which of the zip code values there to return.

## Hash maps do this to store values:

- accept a key
- calculate the hash of the key
- use modulus to convert the hash into an array index
- store the key with the value by appending both to the end of a linked list

## Hash maps do this to read value:

- accept a key
- calculate the hash of the key
- use modulus to convert the hash into an array index
- use the array index to access the short LinkedList representing a bucket
- search through the bucket looking for a node with a key/value pair that matches the key you were given

![](https://media.geeksforgeeks.org/wp-content/uploads/20210108180437/Chaining2.jpg)


It’s possible to compute the “load factor” of a hash table. The load factor tells us something about how full the hash table is. A hash table can start with only a few buckets, calculate it’s own load factor, recognize when it gets too full and automatically grow and add more buckets to itself to accommodate more data.


## Methods 


`Add()`

When adding a new key/value pair to a hashtable:

 - send the key to the GetHash method.
 - Once you determine the index of where it should be placed, go to that index
 - Check if something exists at that index already, if it doesn’t, add it with the key/value pair.
 - If something does exist, add the new key/value pair to the data structure within that bucket.


`Find()`

The Find takes in a key, gets the Hash, and goes to the index location specified. Once at the index location is found in the array, it is then the responsibility of the algorithm the iterate through the bucket and see if the key exists and return the value.

`Contains()`

The Contains method will accept a key, and return a bool on if that key exists inside the hashtable. The best way to do this is to have the contains call the GetHash and check the hashtable if the key exists in the table given the index returned.

`GetHash()`

The GetHash will accept a key as a string, conduct the hash, and then return the index of the array where the key/value should be placed.


