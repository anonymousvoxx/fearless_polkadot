// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';

import {
    Reward,

    Extrinsic,

    Transfer,
} from '../interfaces'




type HistoryElementProps = Omit<HistoryElement, NonNullable<FunctionPropertyNames<HistoryElement>>>;

export class HistoryElement implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public timestamp: string;

    public address: string;

    public reward?: Reward;

    public extrinsic?: Extrinsic;

    public transfer?: Transfer;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save HistoryElement entity without an ID");
        await store.set('HistoryElement', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove HistoryElement entity without an ID");
        await store.remove('HistoryElement', id.toString());
    }

    static async get(id:string): Promise<HistoryElement | undefined>{
        assert((id !== null && id !== undefined), "Cannot get HistoryElement entity without an ID");
        const record = await store.get('HistoryElement', id.toString());
        if (record){
            return HistoryElement.create(record as HistoryElementProps);
        }else{
            return;
        }
    }



    static create(record: HistoryElementProps): HistoryElement {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new HistoryElement(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
