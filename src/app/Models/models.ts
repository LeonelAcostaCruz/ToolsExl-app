import { ModelsFirestore } from 'src/app/Models/firestore.models';
import { ModelsAuth } from 'src/app/Models/auth.models';
import { ModelsFunctions } from 'src/app/Models/functions.models';


export namespace Models {

    export import Firestore = ModelsFirestore;
    export import Auth = ModelsAuth;
    export import Functions = ModelsFunctions;

}
