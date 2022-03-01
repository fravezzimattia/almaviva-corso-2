import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, ConnectableObservable, fromEvent, multicast, Observable, publish, range, share, Subject, take, timer } from 'rxjs';
import { AdItem } from './core/models/ad-item.model';
import { AdService } from './core/services/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public condition = true;
  public ads: AdItem[] = [];

  constructor(
    private adService: AdService
  ) { }

  ngOnInit(): void {
    this.ads = this.adService.getAds();

    // this.exampleObsCold();
    // this.exampleObsHot();
    // this.exampleMouseClick();
    // this.exampleCombineLatest();
    this.exampleMulticasting();
  }


  public exampleObsCold() {
    console.log("exampleObsCold");
    const observable$ = new Observable((observer: any) => {
      console.log("observable$");
      observer.next(Math.random());
    });

    observable$.subscribe(res => {
      console.log("First Cold => ", res);
    })

    observable$.subscribe(res => {
      console.log("Second Cold => ", res);
    })
  }


  public exampleObsHot() {
    console.log("exampleObsHot");
    const value = Math.random();

    const observable$ = new Observable((observer: any) => {
      console.log("observable$");
      observer.next(value);
    });

    observable$.subscribe(res => {
      console.log("First Hot => ", res);
    })

    observable$.subscribe(res => {
      console.log("Second Hot => ", res);
    })

  }

  private exampleMouseClick() {
    const source = fromEvent(document, 'click');

    source.subscribe((res: Event) => {
      const pointer = <PointerEvent>res;
      console.log("Sub 1", pointer.clientX, pointer.clientY);
    })

    source.subscribe((res: Event) => {
      const pointer = <PointerEvent>res;
      console.log("Sub 2", pointer.clientX, pointer.clientY);
    })
  }

  exampleCombineLatest() {
    const firstTimer = timer(0, 1000).pipe(take(5));
    const secondTimer = timer(300, 1000).pipe(take(5));

    combineLatest([firstTimer, secondTimer])
      .subscribe(res => console.log(res));
  }

  private exampleMulticasting(){
    const source = share()(range(0,5));
    source.subscribe(res => console.log("share 1 =>", res));
    source.subscribe(res => console.log("share 2 =>", res));

    
    const sourceP = publish()(range(0,5));
    sourceP.subscribe(res => console.log("publish 1 =>", res));
    sourceP.subscribe(res => console.log("publish 2 =>", res));
    sourceP.connect();

    const sourceM = range(0,5).pipe(multicast(new Subject<number>()));
    sourceM.subscribe(res => console.log("multicast 1 =>", res));
    sourceM.subscribe(res => console.log("multicast 2 =>", res));
    (sourceM as ConnectableObservable<any>).connect();


    const sourceMBs = range(0,5).pipe(multicast(new BehaviorSubject<number>(9)));
    sourceMBs.subscribe(res => console.log("multicast 1 =>", res));
    sourceMBs.subscribe(res => console.log("multicast 2 =>", res));
    (sourceMBs as ConnectableObservable<any>).connect();

  }
}
