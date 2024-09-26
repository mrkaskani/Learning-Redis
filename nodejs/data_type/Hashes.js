export default function Hashes(redis) {

  /*
    This is how to set key and hash value
    cli = hmset key field value [field value]
    example = hmset user:1 name "Mohammad Reza" family "Kaskani"
  */
  redis.hmset("user:1", "name", "Mohammad Reza", "family", "Kaskani")

  /*
    This is how to get key of hash value
    cli = hgetall key
    example = hgetall user:1
   */
  redis.hgetall("user:1", (err, reply) => {console.log(reply);})

  /*
    This is how to get specific key of a hash value
    cli = hmget key field [field]
    example = hmget user:1 name
   */
  redis.hmget("user:1", "name",(err, reply) => {console.log(reply);})

  /*
    This is how to update key and hash value
    cli = hmset key field value [field value]
    example = hmset user:1 name "David" family "Sullivan"
   */
  redis.hmset("user:1", "name", "David")
  redis.hmget("user:1", "name",(err, reply) => {console.log(reply);})
}

