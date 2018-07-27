import {Component, OnInit} from '@angular/core';
import {User} from '../users/user-class';
import {ActivatedRoute} from '@angular/router';
import {UserServiceService} from '../users/user-service.service';


@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    id: number;
    userInfos: User[];

    constructor(private route: ActivatedRoute,private userService: UserServiceService) {
    }

    ngOnInit() {
        console.log(this.route);
        this.id = this.route.snapshot.params.id;
        this.detailUser(this.id);

    }

    detailUser(id: number){
        this.userService.getUserDetail(this.id).subscribe(res=>{
            this.userInfos = res;
        })
    }

}
