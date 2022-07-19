import pokerHand from "./index";

test("player 1 lose with high card", () => {
  expect(pokerHand("2H 3H 4H 5H 7S", "2H 3H 4H 5H 8S")).toBeFalsy();
});

test("player1 with win with high card", () => {
  expect(pokerHand("2H 3H 4H 5H 8S", "2H 3H 4H 5H 7S")).toBeTruthy();
});

test("player1 win with high card", () => {
  expect(pokerHand("2H 3H 4H 5H AS", "2H 3H 4H 5H KS")).toBeTruthy();
  expect(pokerHand("2H 3H 4H 5H KS", "2H 3H 4H 5H AS")).toBeFalsy();
});

test("player1 win by the highest high card", () => {
  expect(pokerHand("2H 3H 4H 8S 5H", "2H 3H 4H 5H 7S")).toBeTruthy();
  expect(pokerHand("2H 3H 8S 4H 5H", "2H 3H 4H 5H 7S")).toBeTruthy();
});
