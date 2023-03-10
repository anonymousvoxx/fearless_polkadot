// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type StakeChangeProps = Omit<StakeChange, NonNullable<FunctionPropertyNames<StakeChange>>>;

export class StakeChange implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public timestamp: string;

    public address: string;

    public amount: string;

    public accumulatedAmount: string;

    public type: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save StakeChange entity without an ID");
        await store.set('StakeChange', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove StakeChange entity without an ID");
        await store.remove('StakeChange', id.toString());
    }

    static async get(id:string): Promise<StakeChange | undefined>{
        assert((id !== null && id !== undefined), "Cannot get StakeChange entity without an ID");
        const record = await store.get('StakeChange', id.toString());
        if (record){
            return StakeChange.create(record as StakeChangeProps);
        }else{
            return;
        }
    }



    static create(record: StakeChangeProps): StakeChange {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new StakeChange(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
