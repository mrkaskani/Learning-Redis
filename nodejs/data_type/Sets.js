export default function (redis) {
  /*
    This is how to add values in set
    cli = sadd key value [value...]
    example = sadd fruits apple banana orange
   */
  redis.sadd("groceries:fruits", "apple", "banana", "orange")

  /*
    This is how to get values in set
    cli = smembers key value [value...]
    example = smembers fruits
   */
  redis.smembers("groceries:fruits", (err, result) => {console.log(result)})

  /*
    This is how to check member in a set
    cli = sismember key value
    example = sismember fruits banana
   */
  redis.sismember('groceries:fruits', 'banana', (err, result) => {console.log(result)})

  /*
    This is how to add sub set member in a set
    cli = sadd key:key value [value...]
    example = sadd fruits:vegetable lettuce
   */
  redis.sadd("groceries:dairies", "milk", "cheese", "yogurt")
  redis.smembers("groceries:dairies", (err, result) => {console.log(result)})


  /*
   This is how to remove member from set.
   cli = spop key:key
   example = fruits:vegetable
  */
  redis.spop("groceries:dairies", (err, result) => {console.log(result)})

}