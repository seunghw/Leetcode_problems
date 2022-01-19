var minMovesToSeat = function (seats, students) {
  let count = 0;
  seats.sort((x, y) => x - y);
  students.sort((x, y) => x - y);
  for (let i = 0; i < seats.length; i++) {
    count += Math.abs(seats[i] - students[i]);
  }
  return count;
};

// 의자
