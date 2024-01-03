import { LightningElement, wire, track } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import getNewCases from "@salesforce/apex/myTreeGridController.getNewCasesForAccounts";

const actions = [{ label: "Edit", name: "edit_record" }];

const COLS = [
    {
        fieldName: "Name",
        label: "Account Name",
    },
    {
        fieldName: "CaseNumber",
        label: "New Cases",
        cellAttributes: {
            iconName: { fieldName: "iconName" },
        },
    },
    {
        type: "action",
        label: "Edit Record",
        typeAttributes: {
            rowActions: actions,
            menuAlignment: "right",
        },
    },
];

export default class MyTreeGrid extends NavigationMixin(LightningElement) {

    @track myData = [];
    columns = COLS;
    error;

    @wire(getNewCases)
    wiredCases({ error, data }) {
        if (error) {
            // Handle error
            this.error = error;
        } else if (data) {
            // Process record data
            var strData = JSON.parse(JSON.stringify(data));

            strData.map((row, index) => {
                if (row["Cases"]) {
                    row._children = row["Cases"]; //define rows with children
                    delete row.Cases;

                    let iconKey = "iconName";
                    row[iconKey] = "standard:case";
                }
            });
            
            this.myData = strData;
        }
    }

  handleRowAction(event) {
    const action = event.detail.action;
    const row = event.detail.row;
    switch (action.name) {
        case "edit_record":
            this[NavigationMixin.Navigate]({
                type: "standard__objectPage",
                attributes: {
                    objectApiName: "Case",
                    actionName: "edit",
                    recordId: row.Id,
                },
            });

            break;
        }
    }
}