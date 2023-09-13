import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
export interface TableProps {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}


/* interface Column {
  field: string;
  header: string;
} */

export interface TableColumn {
  columnDef: string;
  header: string;
  cell: Function;
  isLink?: boolean;
  isAction?: boolean;
  url?: string;
  isSortable?: boolean;
  isMenuOption?: any;
  cellStyle?: string;
}

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent implements AfterViewInit {

  value!: TableProps[];

  cols!: TableColumn[];

  displayedColumns: Array<string> = [];
  isFilter: boolean = false;
  grievancesTypes: any[] = [];
  userRole: string = '';
  filterForm: FormGroup;
  isClient: boolean = false;
  accumulatedSearchTerm: string = '';
  //dataSource: MatTableDataSource<[any]> = new MatTableDataSource();
  public dataSource = new MatTableDataSource([]);
  // dataSource = new MatTableDataSource([])
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  @Input() isPageable = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }
  @Input() pageLength: number = 0;
  @Input() pageSize: number = 0;
  @Input() pageIndex: number = 0;
  @Input() isServerSidePagination: boolean = false;

  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() editData: EventEmitter<any> = new EventEmitter<any>();
  @Input() hasFilterOptions = false;
  @Input() isHallTicket = false;
  @Input() removeTbodyColor = false;
  @Output() toggleData: EventEmitter<any> = new EventEmitter<any>();
  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchParmas: EventEmitter<any> = new EventEmitter<any>();
  pageEvent: PageEvent | undefined;
  private timeoutId: any;

  selection = new SelectionModel<any>(true, []);
  @Output() checkBoxAction: EventEmitter<any> = new EventEmitter<any>();
  
  userId = new FormControl('');
  //users: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  examControl: any;
  @Input() examList: string[] = [];
  constructor() {
    // this.grievancesTypes = this.configService.dropDownConfig.GRIEVANCE_TYPES;
    this.filterForm = new FormGroup({
      grievanceType: new FormControl('', Validators.required),
      startDate: new FormControl(''),
      endDate: new FormControl('')
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator ? this.paginator : null;
    this.dataSource.sort = this.sort ? this.sort : null;
  }

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns?.map((tableColumn: any) => tableColumn.columnDef);
    // this.userRole = this.authService.getUserRoles()[0];
    this.examControl = new FormControl('', [Validators.required]);
  }

  applyFilter(filterValue: string) {
    if (this.isClient) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      console.log(this.dataSource.filter);
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    else {
      clearTimeout(this.timeoutId)

      this.accumulatedSearchTerm = filterValue
      this.timeoutId = setTimeout(() => {
        this.searchParmas.emit(this.accumulatedSearchTerm)
      }, 1000
      )
    }

  }

  toggleFilter() {
    this.isFilter = !this.isFilter
  }

  onRowClick(e: Event) {
    console.log(e);
  }
  onExamChange(e: any){
   // e.preventDefault()
    console.log(e.value);
   // console.log(elem);
  }

  setTableDataSource(data: any) {

    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator ? this.paginator : null;
    this.dataSource.sort = this.sort ? this.sort : null;
  }

  emitRowAction(row: any) {
    console.log("clickedrow------",row)
    this.rowAction.emit(row);
  }
  logSelection() {
    let selectedRows:any = [];
    this.selection.selected.forEach(s =>{
      selectedRows.push(s)
    }
       );
       console.log(selectedRows)
       this.checkBoxAction.emit(selectedRows);
  }

  onClickEdit(row: any) {
    this.editData.emit(row);
  }

  onClickDelete(e: any) {

  }

  onToggleChange(e: any) {
    this.toggleData.emit(e);
  }
  // getUserRole(roleName: string) {
  //   return getRole(roleName);
  //  }

  handlePageEvent(e: PageEvent) {
    this.pageChange.emit(e);
  }

  grievanceSelected(e: any) {
  }
  ApplyFilter(value: any) {
    console.log(value)
  }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      console.log("masterTogglemasterToggle")
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row =>
            {
              this.selection.select(row);
              this.logSelection()
            } );
    }
    isSelected(optionValue: string) {
      // Return true for options that you want to select by default
      return "All Exams" ;
    }
    
}
