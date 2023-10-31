
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

    updatedUser: (userId, updateUserData) => {
        let userIndex = user.findIndex((user) => user.id == userId);
        if(userIndex !== -1){
            console.log(userIndex);
            user[userIndex] = updateUserData
            return user
        }
    },

    deleteUser: (userId) => {
        let userIndex = user.findIndex((user) => user.id == userId);
        if (userIndex !== -1){
            user.splice(userIndex,1);
            return user ;
        }
        return null;
    },
  };
  