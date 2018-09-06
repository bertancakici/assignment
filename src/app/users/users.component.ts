import {Component, OnInit} from '@angular/core';
import {User} from './user-class';
import {UserServiceService} from './user-service.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [UserServiceService]
})
export class UsersComponent implements OnInit {

    users: User[];

    /*interval=0;*/

    constructor(private userService: UserServiceService) {
    }


    ngOnInit() {

       this.getUsers();
        /*this.interval = setInterval(() => {
             this.getUsers();
         }, 1000);*/
        //this.getUsers();
    }

    getUsers() {
        this.userService.getUsers().subscribe(res => {
            this.users = res;
        });
    }



}
