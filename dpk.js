const crypto = require("crypto");
var { TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH } = require('./constants');

exports.deterministicPartitionKey = (event) => {
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    if (event.partitionKey) {
      candidate = typeof event.partitionKey !== 'string' ? JSON.stringify(event.partitionKey) : event.partitionKey
    }
    else {
      candidate = createHash(JSON.stringify(event));
    }
  }

  return candidate.length > MAX_PARTITION_KEY_LENGTH ?
    createHash(candidate) :
    candidate
};

function createHash(data) {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}
