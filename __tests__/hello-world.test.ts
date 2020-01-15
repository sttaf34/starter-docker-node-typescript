import helloWorld, { calculateQuotient } from "../src/hello-world"

test("function helloWorld", (): void => {
  expect(helloWorld("John")).toBe("Hello John")
})

test("function calculate", (): void => {
  expect(calculateQuotient(5, 2)).toBe(2)
  expect(calculateQuotient(4, 2)).toBe(2)
  expect(calculateQuotient(5, 100)).toBe(0)
})
