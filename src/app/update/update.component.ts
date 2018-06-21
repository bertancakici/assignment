import {Component, OnInit} from '@angular/core';
import {User} from '../users/user-class';
import {UserServiceService} from '../users/user-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    id: number;
    userInfos: User[];
    action_result: any;

    /*
    db_id: number;
    db_ad: string;
    db_soyad: string;
    db_yas: number;
    db_tc: number;
    */
    constructor(private userService: UserServiceService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.detailUser(this.id);
    }

    detailUser(id: number) {
        this.userService.getUserDetail(this.id).subscribe(res => {
            this.userInfos = res;
        });
    }

    updateUser(id: number, ad: string, soyad: string, yas: number, tc: number) {
        /*
        this.db_id      = id;
        this.db_ad      = ad;
        this.db_soyad   = soyad;
        this.db_yas     = yas;
        this.db_tc      = tc;
        */


        return this.userService.updateUser(id, ad, soyad, yas, tc).subscribe(res => {
            this.action_result = res;
            if (this.action_result) {
                alert('KULLANICI GÜNCELLENDİ');
                this.router.navigateByUrl('users');
            }
            else
                alert('KULLANICI GÜNCELLENEMEDİ');
        });

    }
}
