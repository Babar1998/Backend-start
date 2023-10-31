
const users = [
    { id: 1, name: "Harry" },
    { id: 2, name: "Babar" },
    { id: 3, name: "Rizzy" },
  ];
  //Db operations
  module.exports = {
    getUser: () => {
      return users;
    },
    addUser: (data) => {
      //add new user to the array
      users.push(data);
      return users;
    },

    updatedUser: (userId, updateUserData) => {
        let userIndex = users.findIndex((user) => user.id == userId);
        if(userIndex !== -1){
            console.log(userIndex);
            users[userIndex] = updateUserData
            return users
        }
    },

    deleteUser: (userId) => {
        let userIndex = users.findIndex((user) => user.id == userId);
        if (userIndex !== -1){
            users.splice(userIndex,1);
            return users ;
        }
        return null;
    },
  };
  