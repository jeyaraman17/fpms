import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Investment } from 'src/app/models/investment.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
    private investments: Investment[] = [
        { assetType: 'Stock', quantity: 10, purchasePrice: 150, date: '2024-05-10' },
        { assetType: 'Bond', quantity: 5, purchasePrice: 1000, date: '2024-01-20' }
    ];

    private investmentSubject = new BehaviorSubject<Investment[]>(this.investments);

    getPortfolio(): Observable<Investment[]> {
        return this.investmentSubject.asObservable();
    }

    addInvestment(investment: Investment) {
        this.investments.push(investment);
        this.investmentSubject.next(this.investments);
    }
}
