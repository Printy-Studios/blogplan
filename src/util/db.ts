// Classes
import DB from '@/classes/DB';
import LocalDB from '@/classes/LocalDB';

const type: 'local' | 'supabase' = 'local';

let db: DB;

switch(type){
    case 'local':
        db = new LocalDB();
        break;
    default:
        throw new Error('using unsupported DB type');
}

export default db!;