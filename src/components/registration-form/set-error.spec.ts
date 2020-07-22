import { setError } from "./set-error";

describe("set error function", () => {
  it("should return validate error", () => {
    const error = setError("", "Validate error", "Sever error");

    expect(error).toBe("Validate error");
  });

  it("should return server error", () => {
    const error = setError("error", "Validate error", "Sever error");

    expect(error).toBe("Sever error");
  });
});
