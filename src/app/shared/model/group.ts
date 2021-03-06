import {User} from '@auth0/auth0-spa-js';
import {ChatUser} from './chatUser';

export class Group {
  grpId?: number;
  owner?: ChatUser;
  users: ChatUser[] = [];
  creationTime?: Date;
  fullUsers: User[] = [];
}
