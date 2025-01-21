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
}


export interface FileParameter {
  data: any;
  fileName: string;
}
