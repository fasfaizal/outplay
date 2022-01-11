import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserItem } from '../user-item';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private userService: UserService
  data: any;
  changeDetectorRef:ChangeDetectorRef
  constructor(userService: UserService,
     cd: ChangeDetectorRef) {
    this.userService = userService;
    this.changeDetectorRef=cd;
  }

  ngOnInit(): void {
    // this.userService.getItem().subscribe(res => {
    //   console.log(res);
    //   //this.data = res;
    // })

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.data = json
        console.log(this.data)
        this.changeDetectorRef.detectChanges();
      })
  }

}
