import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/core/services/port-folio.service';
import { Investment } from 'src/app/models/investment.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    investments: Investment[] = [];


    constructor(private portfolioService: PortfolioService) { }

    ngOnInit() {
        this.portfolioService.getPortfolio().subscribe((data: Investment[]) => {
            this.investments = data;
        });
    }
}
