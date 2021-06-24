import UsersService from '../services/Users.service' 

class UsersController {
    getUsers() {
        const userService = new UsersService();
        return userService.getUsers();
    }
}
