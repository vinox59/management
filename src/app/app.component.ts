import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'management';

  ngOnInit() {
    const userDetail = [{
      id: 1,
      username: 'user1',
      password: 'user1'
    }, {
      id: 2,
      username: 'user2',
      password: 'user2'
    }]
    sessionStorage.setItem('userDetail',JSON.stringify(userDetail))
  }
}
