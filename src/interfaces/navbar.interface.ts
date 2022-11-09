
interface ListObject{
    name: string;
    linkTo: string;
    optionStyling?: any;
}

interface ListObjects extends Array<ListObject>{}