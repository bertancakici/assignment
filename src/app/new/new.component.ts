import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../users/user-service.service';
import {Router} from '@angular/router';
import {isNull} from 'util';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css'],
    providers: [UserServiceService]
})
export class NewComponent implements OnInit {

    db_ad: string;
    db_soyad: string;
    db_yas: number;
    db_tc: number;

    act_result: any;


    constructor(private userService: UserServiceService, private  router: Router) {
    }

    ngOnInit() {
    }

    /*
    * Ad,Soyad,Yaş,TC Post'lanacak.
    * AddUser ile VT'ye yazdırılacak.
    * */
    addUser(ad: string, soyad: string, yas: number, tc: number) {
        this.db_ad = ad;
        this.db_soyad = soyad;
        this.db_yas = yas;
        this.db_tc = tc;

        /*
        * VT'Ye yazdırılacak.
        * */
        if (this.db_ad == '' || this.db_soyad == '' || this.db_yas == isNull() || this.db_tc == isNull() ) {
            alert('Boş Alan Bırakmayınız.');
        } else {
            return this.userService.addUser(this.db_ad, this.db_soyad, this.db_yas, this.db_tc).subscribe(res => {
                this.act_result = res;
                if (this.act_result) {
                    alert('Kayıt İşlemi Başarıyla Yapıldı');
                    this.router.navigateByUrl('/users');
                }
                else
                    alert('Kayıt İşlemi YAPILAMADI');
            });
        }

    }

}
