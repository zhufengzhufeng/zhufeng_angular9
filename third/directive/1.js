function Girl() {
    var arr = [];
    this.kinds= function (kind) {
        arr.push(kind);
        console.log(arr);
    }
}
var girlCtrl = new Girl();
girlCtrl.kinds('爱钱');
girlCtrl.kinds('爱哭');