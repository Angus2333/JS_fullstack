function Archiver() {
  let value = null;
  let archive=[]
  Object.defineProperty(this, 'num', {
    get: function () {
      console.log('执行get操作');
      return value;
    },
    set: function (newValue) {
      console.log('执行了set操作');
      value = newValue;
      archive.push({val:newValue})
    }
  })
  this.getArchive=function(){
    return archive
  }
}

let arc = new Archiver()
arc.num //get
arc.getArchive()  //[{val:11}]