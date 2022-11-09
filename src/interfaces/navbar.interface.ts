
/**
 *  Interface for list object within navbar
 */
interface ListObject{
    name: string;
    linkTo: string;
    optionStyling?: React.CSSProperties;
}

interface ListObjects extends Array<ListObject>{}