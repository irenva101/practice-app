import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { DragAndDropDirective } from '../directives/drag-and-drop.directive';

@Component({
  selector: 'app-load-profile',
  standalone: true,
  imports: [CommonModule],
  providers: [DragAndDropDirective],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
})
export class UploadComponent {

  //data: BulkFileDataOut[] | undefined = [];
  data: BulkFileDataOut[] = [
    {
        id: "1",
        path: "/files/file1.txt",
        dateTime: new Date('2025-01-21T10:00:00'),
        status: FileStatus.Processing
    },
    {
        id: "2",
        path: "/files/file2.csv",
        dateTime: new Date('2025-01-20T14:30:00'),
        status: FileStatus.Processed
    },
    {
        id: "3",
        path: "/files/file3.pdf",
        dateTime: new Date('2025-01-19T08:45:00'),
        status: FileStatus.Failed
    },
    {
        id: "4",
        path: "/files/file4.jpg",
        dateTime: new Date('2025-01-18T16:00:00'),
        status: FileStatus.Processing
    }
];
  isMoreIconClicked = false;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input?.files?.length) {
      const file = input.files[0];

      // Kreiranje objekta `FileParameter`
      const fileParameter: FileParameter = {
        data: file,
        fileName: file.name,
      };

      // Slanje fajla na server
      // this.client
      //   .uploadImportFile(FileType.DeviceImport, fileParameter)
      //   .subscribe({
      //     next: (response) => {
      //       this.toastr.success('Successfuly imported file.');
      //       this.reloadTable(1);
      //     },
      //     error: (err) => {
      //       this.toastr.error(err);
      //     },
      //   });
    }
  }

  reloadTable(page?: number) {
    // this.client.queryFile(this.requestData).subscribe({
    //   next: (response) => {
    //     this.data = response.data;
    //     this.numberOfItems = response.count || 0;
    //     this.lastPageSize = Math.ceil(this.numberOfItems / this.pageSize);
    //   },
    //   error: (err) => {
    //     this.toastr.error(err);
    //   },
    // });
  }

  moreIconClicked(){
    this.isMoreIconClicked = !this.isMoreIconClicked;
  }

  downloadReport(idFile: string) {
    //this.client.downloadImportReport(idFile, FileType.DeviceImport).subscribe({});
  }

  processFile(idFile: string) {
    //this.client.processFile(idFile).subscribe({});
  }
  downloadFile(idFile: string) {
    //this.client.downloadImportFile(idFile, FileType.DeviceImport).subscribe({});
  }




}


export interface FileParameter {
  data: any;
  fileName: string;
}

export class BulkFileDataOut implements IBulkFileDataOut {
  id?: string;
  path?: string | undefined;
  dateTime?: Date | undefined;
  status?: FileStatus;

  constructor(data?: IBulkFileDataOut) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }

  

  
}

export interface IBulkFileDataOut {
  id?: string;
  path?: string | undefined;
  dateTime?: Date | undefined;
  status?: FileStatus;
}

export enum FileStatus {
  NotProcessed = "NotProcessed",
  Processing = "Processing",
  Processed = "Processed",
  Failed = "Failed",
}


