const user = [
    { id: 1, name: "Harry" },
    { id: 2, name: "Babar" },
    { id: 3, name: "Rizzy" },
  ];
  //Db operations
  module.exports = {
    getUser: () => {
      return user;
    },
    addUser: (data) => {
      //add new user to the array
      user.push(data);
      return user;
    },
  };
  