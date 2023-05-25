import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, retry, switchMap, throwError } from 'rxjs';
import * as moment from 'moment';

interface UserDetail {
  'name': string,
  'age': number,
  'birth': string,
  'id': string
}

interface Available {
  "upper": number,
  "middle": number,
  "lower": number,
  "rac": number,
  "wl": number,
  "rac_booked": number,
  "wl_booked": number,
  "count": number
}

interface Details {
  "avail": Available,
  "booked": Array<UserDetail>

}

interface ErrObj {
  "status_code": number,
  "message": string
}
@Component({
  selector: 'app-train-tkt',
  templateUrl: './train-tkt.component.html',
  styleUrls: ['./train-tkt.component.css']
})
export class TrainTktComponent {
  mainDiv: boolean = true
  type!: string
  API_BASE_PATH = 'http://localhost:3006'
  noTkt: boolean = false
  info!: string
  dataObj!: Details
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchAPI((status: boolean, obj: Details) => {
      if (status) {
        this.dataObj = obj
        console.log(obj);
        
        if (obj.avail.wl === 0) {
          this.noTkt = true
        } else {
          this.noTkt = false
        }
      }
    })

  }


  tickets(type: string): void {
    this.mainDiv = false
    this.type = type

    if (type === 'available') {

    } else { // bookes

    }
  }

  formSubmit(myForm: NgForm): void {
    if (myForm.form.valid) {
      const detail = myForm.form.value
      this.fetchAPI((status: boolean, obj: Details) => {
        if (status) {
          this.dataObj = obj
          const availObj: Available = obj['avail']
          if (this.type === 'book') {

            if (availObj[detail.birth as keyof Available] === 0) { // preferred birth not available
              switch (true) {
                case availObj['upper'] > 0:
                  detail.birth = 'upper'
                  availObj['upper']--
                  break;
                case availObj['middle'] > 0:
                  detail.birth = 'middle'
                  availObj['middle']--
                  break;
                case availObj['lower'] > 0:
                  detail.birth = 'lower'
                  availObj['lower']--
                  break;
                case availObj['rac'] > 0:
                  detail.birth = 'rac'
                  availObj['rac']--
                  availObj['rac_booked']++
                  break;
                case availObj['wl'] > 0:
                  detail.birth = 'wl'
                  availObj['wl']--
                  availObj['wl_booked']++
                  break;

                default: // no tkt available
                  this.noTkt = true
                  break;
              }
            } else availObj[detail.birth as keyof Available]++

            if (!this.noTkt) { // tkt avaialble
              obj['avail'] = availObj
              obj['booked'].push(detail)
              this.updateTkt(obj, (status: boolean) => {
                this.resetForm(myForm)
                if (status) {
                  this.infoMsg("Ticket(s) booked successfully - " + (detail.birth).toUpperCase() + "!")
                }
              })
            }

          } else { // cancel
            const bookedDetail: Array<UserDetail> = obj['booked']
            let deleted: any = {}
            var output = bookedDetail.filter((ele: UserDetail) => {
              if (ele.id === detail.tktNo) {
                deleted = ele
                return false
              } else return true
            });

            availObj[deleted['birth'] as keyof Available]++
            if (deleted['birth'] !== 'wl') {
              if (availObj.rac_booked > 0 || availObj.wl_booked > 0) {

                output.forEach((ele: UserDetail) => {
                  if (deleted['birth'] === 'rac') {
                    if (ele.birth = 'wl') {
                      ele.birth = 'rac'
                      availObj.wl_booked--
                      return
                    }

                  } else if (deleted['birth'] !== 'wl') {
                    if (ele.birth === 'wl') {
                      ele.birth = 'rac'
                      availObj.wl_booked--
                      availObj.rac_booked++
                    } else if (ele.birth === 'rac') {
                      ele.birth = deleted['birth']
                      availObj.rac_booked--
                    }
                  }
                })
              }
            }

            obj['avail'] = availObj
            obj['booked'] = output
            this.updateFn(obj).then((sample) => {
              console.log(sample);
              console.log('Data updated in file successfully.');
            }).catch((error:any) => {
              console.error('Error updating data in file:', error);
            });
            this.updateTkt(obj, (status:boolean) => {
              this.resetForm(myForm)
              if (status) {
                this.infoMsg("Ticket(s) cancelled successfully - " + (detail.birth).toUpperCase() + "!")
              }
              console.log(availObj);
              console.log(output);
            })

          }
        }
      })
    }
  }


  infoMsg(msg: string) {
    this.info = msg
    setTimeout(() => {
      this.info = ""
    }, 3000);
  }

  resetForm(myForm: NgForm): void {
    myForm.resetForm()
    this.mainDiv = true
  }

  numberOnly(event: KeyboardEvent) {
    const isDigit = /^\d$/.test(event.key);
    if (!isDigit) event.preventDefault();
  }



  /* ----------------------------------- API ---------------------------------- */

  fetchAPI(cbk: any) {
    const url = 'https://ap-south-1.aws.data.mongodb-api.com/app/data-fbfhv/endpoint/data/v1'
    return this.http.get(url)
      .pipe(retry(1), catchError(error => this.handleError(error))).subscribe({
        next: (val) => cbk(true, val),
        error: (err: ErrObj) => console.log(err)
      })
  }

  updateTkt(dataObj: Details, cbk: any) {
    return this.http.put('assets/db.json', dataObj)
      .pipe(retry(1), catchError(error => this.handleError(error))).subscribe({
        next: (val) => cbk(true, val),
        error: (err: ErrObj) => console.log(err)
      })
  }

  updateFn(data:any) {
    return new Promise<void>((resolve, reject) => {
      this.http.put('assets/db.json', data, { responseType: 'text' }).subscribe(() => {
        console.log('Data updated successfully.');
        resolve();
      }, (error) => {
        console.error('Error updating data:', error);
        reject(error);
      });
    });
  }
  handleError(error: HttpErrorResponse) {
    let errorObj = {
      "status_code": error.status,
      "message": error.error
    }
    return throwError(() => {
      return errorObj;
    })
  }


}
