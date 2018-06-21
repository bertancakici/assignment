import {Component, OnInit} from '@angular/core';
import {HttpModule} from '@angular/http';
import {UserServiceService} from '../users/user-service.service';
import {User} from '../users/user-class';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {


    db_id: number;
    userInfos: User[];
    action_result : any;

    constructor(private userService: UserServiceService,private activatedRouter: ActivatedRoute, private  router: Router) {
    }

    ngOnInit() {
        this.db_id = this.activatedRouter.snapshot.params.id;
        this.detailUser(this.db_id);
    }

    detailUser(id: number) {
        this.userService.getUserDetail(this.db_id).subscribe(res => {
            this.userInfos = res;
        });
    }

    deleteUser(id: number) {
        this.db_id = id;
        this.userService.deleteUser(this.db_id).subscribe(
            res => {
                this.action_result = res;
                if(this.action_result){
                    alert('KULLANICI SİLİNDİ');
                    this.router.navigateByUrl('/users');
                }else{
                    alert('Kullanıcı Silme İşlemi BAŞARISIZ');
                }
            }
        );
    }

}
