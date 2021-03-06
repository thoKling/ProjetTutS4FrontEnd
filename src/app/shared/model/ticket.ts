export interface Ticket {
  ticketId?: number;
  seen?: boolean;
  title?: string;
  demand?: string;
  senderId?: string;
  status?: number;
  datetimeSent: Date;
}
