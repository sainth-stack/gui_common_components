import {BiDotsVerticalRounded} from "react-icons/bi";
export const tableConstant = () => [
    {
        columnKey : "name",
        columnLabel : "Name",
        render : (row : any) => 
        <div 
            title={row?.displayName || row?.name || "Untitled"} 
            className="anchor-hover-link"
            style={{
            maxWidth: "230px",
            fontWeight : 500,
            overflow: "hidden",
            whiteSpace : "nowrap",
            textOverflow: "ellipsis",
            display: "inline-block",
            cursor : "pointer"
        }}>{row?.displayName || row?.name || "Untitled"}</div>
    },
    {
        columnKey : "instances",
        columnLabel : "No. of Instance",
        render : (row : any) => <div className="text-center">{row?.noOfInstances || ""}</div>
    },
    {
        columnKey : "latest_version",
        columnLabel : "Latest Version",
        render : (row : any) => <div className="text-center">
            {row?.latestVersion}
        </div>
    },
    {
        columnKey : "published_version",
        columnLabel : "Published Version",
        render : (row : any) => <div className="text-center">{row?.publishedVersion || ""}</div>
    },
    {
        columnKey : "created_date",
        columnLabel : "Created Date",
        render : (row : any) => <span className='text-nowrap'>{row?.createdAt}</span>
    },{
        columnKey : "created_by",
        columnLabel : "Created By",
        render : (row : any) => <div className="text-center">{row.createdBy || ""}</div>
    },
    {
        columnKey : "modified_date",
        columnLabel : "Modified Date",
        render : (row : any) => <span className='text-nowrap'>{row.modifiedAt}</span>
    },{
        columnKey : "modified_by",
        columnLabel : "Modified By",
        render : (row : any) => <div className="text-center">{row.modifiedBy || ""}</div>
    },
    {
        columnKey : "action",
        columnLabel : "Action",
        render : (row : any) => <div style={{cursor: "pointer"}}><BiDotsVerticalRounded /></div>
    },
  ] 
  
  export const tableExpandFields = [
    {
        columnKey : "correlation_id",
        columnLabel : "Correlation ID",
        render : (row : any) => {
            return <span className="anchor-hover-link">
                {/* <ActiveLink to={`/workflow-instances/${row.id}`}>{row?.correlationId || ""}</ActiveLink> */}
                {row?.correlationId || ""}
            </span>
        }
    },
    {
        columnKey : "latest_version",
        columnLabel : "Version",
        render : (row : any) => <div className="text-center">
            {row?.version || ""}
        </div>
    },
    {
        columnKey : "status",
        columnLabel : "Status",
        render : (row : any) => <span className="d-flex align-items-center">
            <span style={{
                display : "inline-block",
                width : "10px",
                height : "10px",
                borderRadius : "50%",
                background : row.workflowStatus == "Finished" ? "rgba(52,195,143,1)" : "#ef6767",
                marginRight : "6px"
            }}></span>
            <span>{row.workflowStatus || ""}</span>
        </span>
    },
    {
        columnKey : "started",
        columnLabel : "Started",
        render : (row : any) => <span style={{whiteSpace : "nowrap"}}>{row.lastExecutedAt}</span>
    },
    {
        columnKey : "completed",
        columnLabel : "Completed",
        render : (row : any) => <span style={{whiteSpace : "nowrap"}}>{row.finishedAt}</span>
    },
  ]


  export const defaultData = Array(25).fill({
    name : "Extract Load Transform",
    displayName: "Sample",
    noOfInstances: 5,
    instances : 0,
    latestVersion : 1,
    publishedVersion : 2,
    createdAt : "03/03/2022",
    createdBy : "Admin",
    modifiedAt: "03/03/2022",
    modifiedBy : "Admin",
    action : "",
    sub_action : "",
    id : "1d38ddf2ea2d44578dc2491fc7c0ddd8",
    correlation_id : "fa72d0db24594dc59dd80d81320cc6ee",
    status : "Finished",
    started : "03-06-2022 06:15:45",
    completed : "03-06-2022 06:15:45",
    workflow: [
      {
        correlationId: 1,
        version: 2,
        workflowStatus: "Finished",
        lastExecutedAt: "03-06-2022 06:15:45",
        finishedAt: "03-06-2022 06:15:45"
      },
      {
        correlationId: 1,
        version: 3,
        workflowStatus: "Progress",
        lastExecutedAt: "03-06-2022 06:15:45",
        finishedAt: "03-06-2022 06:15:45"
      }
    ]
})