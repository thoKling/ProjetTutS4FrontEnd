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
import { MatIconModule } from '@angular/material/icon';

import { PickerModule } from '@ctrl/ngx-emoji-mart';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { ChatNewComponent } from './chat-new/chat-new.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    ChatComponent,
    ChatToComponent,
    ChatListComponent,
    ChatNewComponent
  ],
  imports: [
    CommonModule,
    PickerModule,
    ChatRoutingModule,
    MatFormFieldModule,
    TextFieldModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class ChatModule { }
