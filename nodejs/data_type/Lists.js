export default function Lists(redis) {
  /*
    This is how to create and add items from the beginning
    cli = lpush type element [element...]
    example = lpush fruits orange apple strawberry
 */
  redis.lpush( 'fruits', 'orange', 'apple', 'strawberry');
  redis.rpush( 'fruits', 'banana');

  /*
    This is how to get items from the list
    cli = lrange key start end
    example = lrange fruits 0 -1
  */
  redis.lrange('fruits', 0, -1, (err, reply) => console.log(reply));

  /*
    This is how to delete items from the list
    cli = rpop key
    example = rpop fruits
  */
  redis.rpop('fruits')
  redis.lpop('fruits')
  redis.lrange('fruits', 0, -1, (err, reply) => console.log(reply))

  /*
    This is how to trim a  list
    cli = ltrim key start output
    example = ltrim fruits 0 2
  */
  redis.ltrim('fruits', 0, 2)
  redis.lrange('fruits', 0, -1, (err, reply) => console.log(reply))
}