jest.useFakeTimers();
test("waits 1 second before ending the game", () => {
  const timerGame = require("./timerJest");
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
