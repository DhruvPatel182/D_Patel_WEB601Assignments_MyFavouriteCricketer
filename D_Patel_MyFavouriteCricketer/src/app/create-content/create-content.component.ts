import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  constructor(private CricketerService: CricketService) {}
    addContent(): void {
      const Content: Content = {
        ...this.newContent,
        id: Date.now().toString()
      };
      const promise = new Promise<void>((resolve, reject) => {
        if (this.newContent.title && this.newContent.type) {
          this.CricketerService.getContent().subsribe((contentArray) => {
            contentArray.push(Content);
            this.newContent = { title: '', description: '', type: '' };
            console.log(`Successfully, Added ${Content.title}`);
            resolve();
          });
        } else {
          reject('Please Fill in All requirements');
        }
      });
      promise.then(() => {
        this.errorMessage = '';
      }).catch((errorMessage) => {
        this.errorMessage = errorMessage;
      });
    }

    @Output() contentAdded = new EventEmitter<Content>();
    newContent: Content ={ id:'', title:'',creator:'',type:''};
    errorMessage: string = '';

    onSubmit(){
      if(!this.newContent.id || !this.newContent.title || !this.newContent.type){
        this.errorMessage = 'Please fill in all required fields';
      return Promise.reject('Required fields not filled');

      }this.contentAdded.emit(this.newContent);
      console.log(`Content Added: $(this.newContent.title)`);
      this.newContent = { id: '', title:'',creator:'', type:''};
      this.errorMessage = '';
      return Promise.resolve();
    }

  }

