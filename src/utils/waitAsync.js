export default function waitAsync(condition, time, callback) {
  if (condition()) {
    return callback();
  }
  return new Promise((resolve) => {
    const timer = setInterval(() => {
      if (condition()) {
        clearTimeout(timer)
        resolve(callback())
      }
    }, time)
  })
}
