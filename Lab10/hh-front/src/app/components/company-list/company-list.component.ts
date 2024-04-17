import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(
      (companies) => {
        this.companies = companies;
      },
      (error) => {
        console.error('Error fetching companies', error);
      }
    );
  }
}
