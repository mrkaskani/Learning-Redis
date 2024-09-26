export default function Strings(redis){

  /*
    This is how to set key and string value
    cli = set key value
    example = set name "Mohammad Reza"
   */
  redis.set('name', "Mohammad Reza")


  /*
    This is how to get key's value
    cli = get key
    example = get name
   */
  redis.get("name", (err, reply) => {console.log(reply);})


  /*
    This is how to set key and string value with expiration time (s)
    cli = set key value ex `time in second`
    example = set name "Mohammad Reza" EX 5
   */
redis.set('name', "Mohammad Reza", 'EX', 5)

  /*
    This is how to set multiple key and string value
    cli = mset key value ...
    example = mset name "Mohammad Reza" family Kaskani
   */
redis.mset('name', "Mohammad Reza", 'family', 'Kaskani')

  /*
    This is how to get multiple key's value
    cli = get key ...
    example = mget name family
   */
redis.mget("name", "family", (err, reply) => {console.log(reply);})



}


// export default Strings;