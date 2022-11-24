const ratingConverter = (rating: number) => {
  if (rating < 3) {
    return 'Bad';
  }
  if (rating < 5) {
    return 'Normal';
  }
  if (rating < 8) {
    return 'Good';
  }
  if (rating < 10) {
    return 'Very good';
  }
  return 'Awesome';
};

export default ratingConverter;

export function div(val: number, by : number){
  return (val - val % by) / by;
}

export function unID() {
  const id = `id${Math.random().toString(16).slice(2)}`;
  return id;
}
