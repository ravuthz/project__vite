module.exports = () => {
  let users = [];
  let todos = [];

  for (let i = 0; i < 10; i++) {
    users = [...users, { id: i, name: `user${i}` }];

    for (let j = 0; j < 100; j++) {
      const completed = Math.random(1 * 100) % 2 === 0;
      const todo = { id: j, userId: i, title: `todo ${i}-${j}`, completed };
      todos = [...todos, todo];
    }
  }

  return {
    users,
    todos,
  };
};
