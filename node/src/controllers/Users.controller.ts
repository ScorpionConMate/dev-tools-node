class UsersController {
    getUsers() {
        const userService = new UserService();
        return userService.getUsers();
    }
}
