class TaskClass {
    constructor(category, title, done, monto, id){
        this[id] ={
         category: category,
         title: title,
         done: done,
         monto: monto 
        }
        
        

    }
        
    

}



module.exports = { TaskClass };



