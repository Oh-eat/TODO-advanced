export default (count = 100) => {
  const result = [];
  for (let i = 1; i <= (count < 0 ? 100 : count); i++) {
    let todo = {
      id: i,
      title: `Title ${i}`,
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dictum vehicula. Phasellus interdum ipsum vitae eros tristique, eget facilisis nisl suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed efficitur orci. Curabitur dui urna, ultrices vitae mauris sit amet, bibendum tincidunt turpis. Nunc vel neque sodales, hendrerit mi in, aliquam risus. Aliquam sollicitudin nulla non urna accumsan, non ultrices odio elementum.',
      done: Math.random() > 0.5 ? true : false,
      dDay: new Date(2020, 2, Math.floor(Math.random() * 100)),
      createdDate: new Date(),
      selected: false,
      state: 'new',
    };
    result.push(todo);
  }
  return result;
};
