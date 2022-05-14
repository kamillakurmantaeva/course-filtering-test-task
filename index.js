// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Функция фильтра курсов
const filterCourses = (courses, requiredRange) => {
  if (!courses || courses.length <= 1) return;

  if (
    !requiredRange ||
    requiredRange.length <= 1 ||
    (requiredRange[0] === null && requiredRange[1] === null)
  ) {
    return;
  }

  const result = courses.filter(
    (course) =>
      (requiredRange[0] <= course.prices[1] || course.prices[1] === null) &&
      (requiredRange[1] >= course.prices[0] || requiredRange[1] === null)
  );

  return result.map((course) => course.name);
};

// [подходящие курсы для каждого варианта фильтра]
console.log(filterCourses(courses, requiredRange1));
console.log(filterCourses(courses, requiredRange2));
console.log(filterCourses(courses, requiredRange3));

// Сортировка курсов по цене
const sortCourses = (courses, priceDirection) => {
  const result = [...courses].sort((a, b) => {
    if (priceDirection === "low to high") {
      return a.prices[0] - b.prices[0];
    }
    if (priceDirection === "high to low") {
      return (b.prices[1] || Infinity) - (a.prices[1] || Infinity);
    }
  });

  return result.map((course) => course.name);
};

// [курсы по цене: от низкой к высокой]
console.log(sortCourses(courses, "low to high"));

// [курсы по цене: от высокой к низкой]
console.log(sortCourses(courses, "high to low"));
