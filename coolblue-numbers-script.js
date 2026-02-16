// CoolBlue Challenge
Array.from({ length: 100 }, (_, i) => i + 1).forEach((num) => {
  console.log(
    num % 15 === 0
      ? "Coolblue"
      : num % 3 === 0
        ? "Cool"
        : num % 5 === 0
          ? "Blue"
          : num,
  );
});
