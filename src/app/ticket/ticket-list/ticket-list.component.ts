import { Component, OnInit } from '@angular/core';
import {Ticket} from '../../shared/model/ticket';
import {TicketService} from '../../shared/service/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(tickets => this.tickets = tickets);
  }

  get openedTickets(): Ticket[] {
    return this.tickets.filter(ticket => ticket.status === 0);
  }
  get closedTickets(): Ticket[] {
    return this.tickets.filter(ticket => ticket.status === 1);
  }
}
