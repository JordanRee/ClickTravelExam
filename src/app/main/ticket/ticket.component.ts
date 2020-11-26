import { Component, Input, OnInit } from '@angular/core';
import ITicketsResponse from 'src/app/models/ticket/ticket-response';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticketData: ITicketsResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
