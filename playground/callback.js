

const getUser = (id,callback) => {
    const user = {
        id: id,
        name: "Viking",
    };
    callback(user);
};

getUser(21,(user) => {
    console.log(user)
});
