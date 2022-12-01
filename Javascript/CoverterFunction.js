
export const convert24hourFormatTo12hour=(hour)=>{
    if (!(hour >= 12)) return;
    return hour% 12;
}