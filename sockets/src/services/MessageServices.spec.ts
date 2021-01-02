import { generateMessage } from "./MessageServices";

let dummydata = {
  from: "Admin",
  text: "test data",
};
describe("Generate Message Tests", () => {
  it("should generate correct message object", () => {
    const result = generateMessage(dummydata.from, dummydata.text);
    expect(result.text).toBe(dummydata.text);
    expect(result.from).toBe(dummydata.from);
    expect(result.createdAt).toBeLessThanOrEqual(Date.now());
  });
});
