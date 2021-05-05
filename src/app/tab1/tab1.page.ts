import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTagBoxModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { FileManagerService, Users } from '../services/file-manager.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: Users[];

    constructor(fileManagerService: FileManagerService) {
      this.users = fileManagerService.getUsers();
    }

    onMultiTagPreparing(args){
      const selectedItemsLength = args.selectedItems.length;
      const totalCount = 5;

      if (selectedItemsLength < totalCount) {
        args.cancel = true;
      } else {
        args.text = 'All selected (' + selectedItemsLength + ')';
      }
    }

}
