import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatToComponent } from './chat-to/chat-to.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    ChatComponent,
    ChatToComponent,
    ChatListComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatFormFieldModule,
    TextFieldModule,
    MatInputModule,
    FormsModule,
    MatListModule
  ]
})
export class ChatModule { }