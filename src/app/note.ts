export class Note {
constructor(
   public id ?: string,
   public description ? : string,
   public timeStamp ? : string,
)
{}
}

export enum ActionMethod {
    add  = "Add",
    update = "Update"
}