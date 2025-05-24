import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/core/services/port-folio.service';
import { Investment } from 'src/app/models/investment.model';

@Component({
    selector: 'app-investments',
    templateUrl: './investments.component.html',
    styleUrls: ['./investments.component.scss']
})
export class InvestmentComponent {
    investmentForm = this.fb.group({
        assetType: ['', Validators.required],
        quantity: [null, [Validators.required, Validators.min(1)]],
        purchasePrice: [null, [Validators.required, Validators.min(0)]],
        date: ['', Validators.required]
    });

    constructor(private fb: FormBuilder,
        private portfolioSvc: PortfolioService
    ) { }

    onSubmit() {
        if (this.investmentForm.valid) {
            this.portfolioSvc.addInvestment(this.investmentForm.value as unknown as Investment);
            console.log('Submitted:', this.investmentForm.value);
            this.investmentForm.reset();
        } else {
            console.log('Form is invalid');
        }
    }
}
