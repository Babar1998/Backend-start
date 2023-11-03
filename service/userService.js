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

    updatedUser: async (userId, updateUserData) => {
      const users = await models.user.findByPk(userId);
    if (users) {
        users.update(updateUserData);
    }
    return users;
      
        // let userIndex = users.findIndex((user) => user.id == userId);
        // if(userIndex !== -1){
        //     console.log(userIndex);
        //     users[userIndex] = updateUserData
        //     return users
        // }
        
    },

    deleteUser: async (userId) => {
      // const users = models.user.destroy(userId);
      //   // let userIndex = users.findIndex((user) => user.id == userId);
      //   // if (userIndex !== -1){
      //   //     users.splice(userIndex,1);
      //   //     return users ;
      //   // }
      //   return users;
      const users = await models.user.findByPk(userId);
    if (users) {
        users.destroy();
        return "USER DELETED SUCCESSFULLY";
    }
    return null;
    },
  };
  