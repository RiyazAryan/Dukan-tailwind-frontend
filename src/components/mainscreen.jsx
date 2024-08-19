import { Orders } from "./order";
import { Overview } from "./overview";
import { Signature } from "./signature";
import { Transactions } from "./transactions";

export function MainScreen(){
    return(
         <div className="bg-[#FAFAFA]">
              <Overview/>
              <Transactions/>
              <div className="m-2 rounded">
                <Orders/>
              </div>
              <Signature/>
              </div>
    )
}