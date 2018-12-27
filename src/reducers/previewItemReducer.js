
export default function (state = {}, action){
    switch(action.type){
       case 'SET_ITEM':
              state = action.item
           break;
        case 'UNSET_ITEM':
            state = {}
        break;
   }
   return state;
}