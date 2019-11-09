import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
declare function sortAndFilter(allOfTheData:any[],sortModel:any,filterModel:any):any; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  title = 'TemplateX';
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowSelection;
  private rowModelType;
  public paginationPageSize;
  private cacheOverflowSize;
  private maxConcurrentDatasourceRequests;
  private infiniteInitialRowCount;
  private maxBlocksInCache;
  private getRowNodeId;
  private components;
  private rowData: any[];
  private cacheBlockSize:any;
  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "ID",
        width: 50,
        valueGetter: "node.id",
        cellRenderer: "loadingCellRenderer",
        sortable: false,
        suppressMenu: true,
        checkBoxSelection : true,
        headerCheckboxSelection: true
      },
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        filter: "agTextColumnFilter",
        filterParams: {
          // filterOptions: ["equals", "lessThan", "greaterThan"],
          filterOptions: ["equals", "contains", "startswith"],
          suppressAndOrCondition: true
        }
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          // clearButton: true
        }
      },
      {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      },
      {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      }, {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      },
      {
        headerName: "Year",
        field: "year",
        width: 90,
        filter: "agTextColumnFilter",        
        filterParams: {
          filterOptions: ["contains", "equals", "startsWith","endsWith"],
          suppressAndOrCondition: true,
          applyButton: true,
          clearButton: true
        }
      },
      {
        headerName: "Date",
        field: "date",
        width: 110
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110,
        suppressMenu: true
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 100,
        suppressMenu: true
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100,
        suppressMenu: true
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100,
        suppressMenu: true
      },
      {
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },
      {
        headerName: "Total",
        field: "country",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "country",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "country",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },{
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      },
    ];
    this.defaultColDef = {
      sortable: true,
      resizable: true
    };
    this.rowSelection = "multiple";
    this.rowModelType = "infinite";
    this.paginationPageSize = 1000;
    this.cacheOverflowSize = 5;
    this.cacheBlockSize = 1000;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 1;
    this.maxBlocksInCache = 5;
    this.getRowNodeId = function(item) {
      return item.id;
    };
    this.components = {
      loadingCellRenderer: function(params) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/images/loading.gif">';
        }
      }
    };
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
      .subscribe((data:any) => {
        data.forEach(function(data, index) {
          data.id = "R" + (index + 1);
        });
        var dataSource =  {
          rowCount: null,
          self :this,
          getRows: (params)=>{
            var self = this;
            console.log("asking for " + params.startRow + " to " + params.endRow);
            setTimeout(function() {
              var dataAfterSortingAndFiltering = sortAndFilter(data, params.sortModel, params.filterModel);
              var rowsThisPage = dataAfterSortingAndFiltering.slice(params.startRow, params.endRow);
              var lastRow = -1;
              debugger
              if (dataAfterSortingAndFiltering.length <= params.endRow) {
                lastRow = dataAfterSortingAndFiltering.length;
              } 
              var getDataFromServer = ()=> {
                // the 'this' pointer is referring to the window obj, why?
                if (this.activeEffect == "fade") {}
                dataSource.self.http
                .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
                .subscribe((data:any) => {
                  data.forEach(function(data, index) {
                    data.id = "R" + (index + 1);
                  });
                  var rowsThisPage = data.slice(params.startRow, params.endRow);
                  params.successCallback(rowsThisPage, lastRow);              
              });
            }
              if(rowsThisPage.length===0){
                getDataFromServer.apply(this,[])
            }
              else{
                params.successCallback(rowsThisPage, lastRow);
              }
            
            }, 3000);
          }
          
        };
        params.api.setDatasource(dataSource);
      });
  }
  // sortAndFilter(data,sortModel,ilterModel){
  //    console.log('data is ',data,' sort modal is ',sortModel);
  // }
  onGridReadys(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
      .subscribe((data:any) => {
        var dataSource = {
          rowCount: null,
          getRows: function(params) {
            console.log("asking for " + params.startRow + " to " + params.endRow);
            setTimeout(function() {
              var rowsThisPage = data.slice(params.startRow, params.endRow);
              var lastRow = -1;
              if (data.length <= params.endRow) {
                lastRow = data.length;
              }
              params.successCallback(rowsThisPage, lastRow);
            }, 500);
          }
        };
        params.api.setDatasource(dataSource);
      });
  }
}
