import Redis from 'ioredis';
import Strings from "./data_type/Strings.js";
import Hashes from "./data_type/Hashes.js";
import Lists from "./data_type/Lists.js";
import Sets from "./data_type/Sets.js";

const redis = new Redis();

Strings(redis)
Hashes(redis)
Lists(redis)
Sets(redis)