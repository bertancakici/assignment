import {Injectable} from '@angular/core';
import {User} from './user-class';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserServiceService {

    db_id: number;
    db_ad: string;
    db_soyad: string;
    db_yas: number;
    db_tc: number;

    constructor(private http: HttpClient) {
    }

    /* Kullanıcıları Listelemek İçin*/
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('http://www.bertancakici.com/apps/assignment/users.php');
    }

    /* Yeni Kullanıcı Eklemek İçin*/
    addUser(ad: string, soyad: string, yas: number, tc: number){
        this.db_ad = ad;
        this.db_soyad = soyad;
        this.db_yas = yas;
        this.db_tc = tc;
        return this.http.get(
            'http://www.bertancakici.com/apps/assignment/add.php?ad=' + this.db_ad +
            '&soyad=' + this.db_soyad +
            '&yas=' + this.db_yas +
            '&tc=' + this.db_tc);
    }

    getUserDetail(id: number): Observable<User[]>{
        this.db_id = id;
        return this.http.get<User[]>('http://www.bertancakici.com/apps/assignment/user-detail.php?id=' + this.db_id ) ;
    }

    /* Kullanıcıyı Düzenlemek İçin */
    updateUser(id:number,ad:string,soyad:string,yas:number,tc:number){
        this.db_id = id;
        this.db_ad = ad;
        this.db_soyad = soyad;
        this.db_yas = yas;
        this.db_tc = tc;
        return this.http.get(
            'http://www.bertancakici.com/apps/assignment/update.php?id='+this.db_id+
            '&ad=' + this.db_ad +
            '&soyad=' + this.db_soyad +
            '&yas=' + this.db_yas +
            '&tc=' + this.db_tc);
    }

    /* Kullanıcıyı Silmek İçin*/
    deleteUser(id: number): Observable<User[]> {
        this.db_id = id;
        return this.http.get<User[]>('http://www.bertancakici.com/apps/assignment/delete.php?id=' + this.db_id ) ;
    }
}
