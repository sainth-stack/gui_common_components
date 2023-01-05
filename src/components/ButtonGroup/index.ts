export {default} from "./buttonGroup";

// This functionality is just for referring purpose 
//   const [activeTabs, setActiveTabs] = useState<Array<Tab>>([]);
//   const [data,setData] = useState<Array<Tab>>(sampleData);
//   const [filter,setFilter] = useState<Array<Tab>>([])
//   const setActiveTab = (tab: any) => {
//     if(tab.id==="all"){
//       setActiveTabs([...tabs])
//       setFilter(sampleData)
//     }
//     else{
//     let filtered = data.filter((det) => det.id === tab.id)
//     setFilter([...filter, ...filtered])
//     setActiveTabs([...activeTabs, tab])
//     }
//     if(activeTabs.length > 0){
//       if(activeTabs.includes(tab)){
//         if(tab.id==="all"){
//           setActiveTabs([])
//           setFilter([])
//         }
//         else{
//           let selectedTabs = activeTabs.filter((tabs) => tabs.id !== tab.id)
//           setActiveTabs(selectedTabs)
//           let filtered = filter.filter((det: any) => det.id !== tab.id)
//           setFilter([...filtered])
//         }
//       }
//     }
//   }