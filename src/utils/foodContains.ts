import { ItemProps } from "../components/Item";

export function foodContains(items: ItemProps[], foodName: string){
    for(const item of items) {
        if(item.name.toLowerCase() === foodName.toLowerCase()) {
            return true;
        }
    }

    return false;
}