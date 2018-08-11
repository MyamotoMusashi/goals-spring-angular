export class SupportRequest {
    private _title;
    private _id;
    private _info;
    private _description;
    private _isItFreshInstall;
    private _stepsToReproduce;
    private _customerExpectation;
    private _oneMachineOrAll;
    private _hotfixes
    private _relatedDocuments;
    private _troubleshooting;
    private _dataCollection;
    private _requestStatus;
    private _storage;


    constructor(title, id, info, description, isItFreshInstall, stepsToReproduce, customerExpectation, oneMachineOrAll, hotfixes, relatedDocuments,troubleshooting, dataCollection) {
        this.title = title;
        this.id = id;
        this.info = info;
        this.description = description;
        this.isItFreshInstall = isItFreshInstall;
        this.stepsToReproduce = stepsToReproduce;
        this.customerExpectation = customerExpectation;
        this.oneMachineOrAll = oneMachineOrAll;
        this.hotfixes = hotfixes;
        this.relatedDocuments = relatedDocuments;
        this.troubleshooting = troubleshooting;
        this.dataCollection = dataCollection;
        this.requestStatus = "n/a";
        this.storage = "n/a";
    }

    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }

    get info(){
        return this._info;
    }

    set info(value){
        this._info = value;
    }

    get description(){
        return this._description;
    }

    set description(value){
        this._description = value;
    }

    get isItFreshInstall(){
        return this._isItFreshInstall;
    }

    set isItFreshInstall(value){
        this._isItFreshInstall = value;
    }

    get stepsToReproduce(){
        return this._stepsToReproduce;
    }

    set stepsToReproduce(value){
        this._stepsToReproduce = value;
    }

    get customerExpectation(){
        return this._customerExpectation;
    }

    set customerExpectation(value){
        this._customerExpectation = value;
    }
    
    get oneMachineOrAll(){
        return this._oneMachineOrAll;
    }

    set oneMachineOrAll(value){
        this._oneMachineOrAll = value;
    }

    get hotfixes(){
        return this._hotfixes
    }

    set hotfixes(value){
        this._hotfixes = value;
    }

    get relatedDocuments(){
        return this._relatedDocuments
    }

    set relatedDocuments(value){
        this._relatedDocuments = value;
    }

    get troubleshooting(){
        return this._troubleshooting;
    }

    set troubleshooting(value){
        this._troubleshooting = value;
    }

    get dataCollection(){
        return this._dataCollection;
    }

    set dataCollection(value){
        this._dataCollection = value;
    }

    get requestStatus(){
        return this._requestStatus;
    }

    set requestStatus(value){
        this._requestStatus = value;
    }

    get storage(){
        return this._storage;
    }

    set storage(value){
        this._storage = value;
    }
}