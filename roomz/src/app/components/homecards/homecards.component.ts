import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
@Component({
  selector: 'app-homecards',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './homecards.component.html',
  styleUrl: './homecards.component.css'
  
})

export class HomecardsComponent {
    Cards = [
      {
        image:'assets/images/BedroomBed.png',
        propertyStatus: 'Updated',
        postedDate: new Date ('2024-10-10'),
        propertyLocation:'White Gum Valley, Perch',
        propertyPrice:'$500 / week',
        propertyBedrooms:'4',
        propertyQty:'1 room in share house',
        propertyBathrooms:'2',
        propertySize:'3',
        propertyDescription:''
      },
      {
        image:'assets/images/BedroomBed.png',
        propertyStatus: 'New',
        postedDate: new Date ('2024-8-10'),
        propertyLocation:'White Gum Valley, Perch',
        propertyPrice:'$150 / week',
        propertyBedrooms:'3',
        propertyQty:'1 room in share house',
        propertyBathrooms:'6',
        propertySize:'2',
        propertyDescription:''
      },
      {
        image:'assets/images/BedroomBed.png',
        propertyStatus: 'Updated',
        postedDate: new Date ('2024-08-10'),
        propertyLocation:'White Gum Valley, Perch',
        propertyPrice:'$50 / week',
        propertyBedrooms:'3',
        propertyBathrooms:'4',
        propertyQty:'2 room in share house',
        propertySize:'2',
        propertyDescription:''
      },
      {
        image:'assets/images/BedroomBed.png',
        propertyStatus: 'Updated',
        postedDate: new Date ('2024-07-22'),
        propertyLocation:'White Gum Valley, Perch',
        propertyPrice:'$50 / week',
        propertyBedrooms:'3',
        propertyQty:'2 room in share house',
        propertyBathrooms:'5',
        propertySize:'2',
        propertyDescription:''
      },
      {
        image:'assets/images/BedroomBed.png',
        propertyStatus: 'Updated',
        postedDate: new Date ('2024-09-54'),
        propertyLocation:'White Gum Valley, Perch',
        propertyPrice:'$50 / week',
        propertyBedrooms:'3',
        propertyBathrooms:'5',
        propertyQty:'3 room in share house',
        propertySize:'2',
        propertyDescription:''
      },
      {
        image:'assets/images/BedroomBed.png',
        propertyStatus: 'Updated',
        postedDate: new Date ('2024-10-13'),
        propertyLocation:'White Gum Valley, Perch',
        propertyPrice:'$50 / week',
        propertyBedrooms:'3',
        propertyBathrooms:'5',
        propertyQty:'3 room in share house',
        propertySize:'2',
        propertyDescription:''
      },
      {
        image:'assets/images/BedroomBed.png',
        propertyStatus: 'Updated',
        postedDate: new Date ('2024-09-02'),
        propertyLocation:'White Gum Valley, Perch',
        propertyPrice:'$50 / week',
        propertyBedrooms:'3',
        propertyBathrooms:'5',
        propertyQty:'3 room in share house',
        propertySize:'2',
        propertyDescription:''
      },
      {
        image:'assets/images/BedroomBed.png',
        propertyStatus: 'Updated',
        postedDate: new Date ('2024-09-30'),
        propertyLocation:'White Gum Valley, Perch',
        propertyPrice:'$50 / week',
        propertyBedrooms:'3',
        propertyBathrooms:'5',
        propertyQty:'2 room in share house',
        propertySize:'2',
        propertyDescription:''
      },
      {
        image:'assets/images/BedroomBed.png',
        propertyStatus: 'Updated',
        postedDate: new Date ('2024-10-12'),
        propertyLocation:'White Gum Valley, Perch',
        propertyPrice:'$50 / week',
        propertyBedrooms:'3',
        propertyBathrooms:'5',
        propertyQty:'2 room in share house',
        propertySize:'2',
        propertyDescription:''
      },
      {
        image:'assets/images/BedroomBed.png',
        propertyStatus: 'Updated',
        postedDate: new Date ('2024-10-12'),
        propertyLocation:'White Gum Valley, Perch',
        propertyPrice:'$50 / week',
        propertyBedrooms:'3',
        propertyBathrooms:'5',
        propertyQty:'2 room in share house',
        propertySize:'2',
        propertyDescription:''
      },
    ]
    userListings = [
      {
        image:'assets/images/User1.png',
        userName:'Digitty',
        postedDate: new Date ('2024-10-11'),
        userDescription:'I am a young web developer trying to develop a web app living alone in lagos and tryiny to share it with others',
        propertyStatus: 'Updated',
        propertyPrice:'$50 / week',
        propertyBedrooms:'4',
        propertyQty:'2 room in share house',
        propertyBathrooms:'2',
        propertySize:'3',
        propertyLocation:'White Gum Valley, Perch'
      },
      {
        image:'assets/images/User2.png',
        userName:'John Duo',
        postedDate: new Date ('2024-10-11'),
        userDescription:'I am a young web developer trying to develop a web app living alone in lagos and tryiny to share it with others',
        propertyStatus: 'Updated',
        propertyPrice:'$50 / week',
        propertyBedrooms:'4',
        propertyQty:'2 room in share house',
        propertyBathrooms:'2',
        propertySize:'3',
        propertyLocation:'White Gum Valley, Perch'
      },
      {
        image:'assets/images/User3.png',
        userName:'Richland Nicole',
        postedDate: new Date ('2024-10-11'),
        userDescription:'I am a young web developer trying to develop a web app living alone in lagos and tryiny to share it with others',
        propertyStatus: 'Updated',
        propertyPrice:'$50 / week',
        propertyBedrooms:'4',
        propertyQty:'2 room in share house',
        propertyBathrooms:'2',
        propertySize:'3',
        propertyLocation:'White Gum Valley, Perch'
      },
      {
        image:'assets/images/User5.png',
        userName:'Water Clean',
        postedDate: new Date ('2024-10-11'),
        userDescription:'I am a young web developer trying to develop a web app living alone in lagos and tryiny to share it with others',
        propertyStatus: 'Updated',
        propertyPrice:'$50 / week',
        propertyBedrooms:'4',
        propertyQty:'2 room in share house',
        propertyBathrooms:'2',
        propertySize:'3',
        propertyLocation:'White Gum Valley, Perch'
      },
      {
        image:'assets/images/User3.png',
        userName:'Van Gall',
        postedDate: new Date ('2024-10-11'),
        userDescription:'I am a young web developer trying to develop a web app living alone in lagos and tryiny to share it with others',
        propertyStatus: 'Updated',
        propertyPrice:'$50 / week',
        propertyBedrooms:'4',
        propertyQty:'2 room in share house',
        propertyBathrooms:'2',
        propertySize:'3',
        propertyLocation:'White Gum Valley, Perch'
      },
      {
        image:'assets/images/User4.png',
        userName:'Femi James',
        postedDate: new Date ('2024-10-11'),
        userDescription:'I am a young web developer trying to develop a web app living alone in lagos and tryiny to share it with others',
        propertyStatus: 'Updated',
        propertyPrice:'$50 / week',
        propertyBedrooms:'4',
        propertyQty:'2 room in share house',
        propertyBathrooms:'2',
        propertySize:'3',
        propertyLocation:'White Gum Valley, Perch'
      },
      
    ]
    sortedItems: any[] = [];
    paginatedItems: any[] = []; 
    itemsPerPage: number = 5; 
    currentPage: number = 0;
    

    constructor() {}
    ngOnInit() {
      this.sortItemsByPostedDate(); 
      console.log(this.sortedItems);
      this.paginate({ first: 0, rows: this.itemsPerPage }); 
    }
  
    sortItemsByPostedDate() {
      // const mergedItems = [...this.Cards, ...this.userListings];
      const mergedItems = [...this.Cards.map(item => ({ ...item, source: 'Cards' })),
        ...this.userListings.map(item => ({ ...item, source: 'userListings' }))];
      this.sortedItems = mergedItems.sort((a, b) => b.postedDate.getTime() - a.postedDate.getTime());
    }

    paginate(event:any) {
      const startIndex = event.first;
      const rows = event.rows; 
      const endIndex = startIndex + rows; 

      this.paginatedItems = this.sortedItems.slice(startIndex, endIndex);
      console.log("paginatedItems:",this.paginatedItems); // Assuming this logs the paginated items to the console or a view.
      console.log("paginatedEvent:",event)
      console.log("startIndex:",startIndex)
      console.log("endIndex:",endIndex)
    }
}
