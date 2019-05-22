const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '2',
  },
  {
    id: 3,
    userID: '2',
    favoriteMovieID: '1',
  }
  // more records...
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Shameer Sarwar',
    userName: 'hacker',
  }
  // more records...
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Jason Bourne',
  },
  3: {
    id: 3,
    name: 'John Wick',
  }
  // more records...
};

export {profiles, users, movies};