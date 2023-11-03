  const {models} = require("../models")
  //Db operations
  module.exports = {
    getUser: async () => {
      const users = await models.user.findAll();
      return users;
    },
    addUser: async(data) => {
      const users = await models.user.create(data);
      console.log(users);
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
  