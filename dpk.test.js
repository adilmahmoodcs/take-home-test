const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return partitionKey if it's less than MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: 2 }
    const key = deterministicPartitionKey(event);
    const expected = "2";
    expect(key).toBe(expected);
  });

  it("should return a hash if given a value", () => {
    const value = 20
    const key = deterministicPartitionKey(value);
    const expected = crypto.createHash("sha3-512").update(JSON.stringify(value)).digest("hex");
    expect(key).toBe(expected);
  });
});
