
let fs = require('fs');
let _=require('underscore');

let rowsCount=0;

fs.readFile('./flower-1.txt',function(err,data){
    if(err)
    {
console.log('ERROR');
    }
    else{
      
        // Task 1
        data.toString().split('\n').forEach(function(line){
            
            rowsCount++;
        });
        console.log('rows count is '+rowsCount);
        

        // Task 2,3,4
        // list flower name that start with 's'
        console.log('Flowers that start with S are :');
        let notStartWithS_counts=0;
        let startWithS_counts=0;
      data.toString().split('\n').forEach(function(line){
            if(line.startsWith('S'))
            {
                startWithS_counts++;
                console.log(line);
            }
            else
            notStartWithS_counts++;
        });
       
        console.log('flowers count that are  start with S is '+startWithS_counts);
        console.log('flowers count that are not start with S is '+notStartWithS_counts);


        // Task 4
        console.log('Flowers that start with F Letterare :');
        data.toString().split('\n').forEach(function(line){
            if(line.startsWith('F'))
           console.log(line);
            
           
        });
         // Or i can use filter or find functions from underscore
         /*
        let filteredWithF= _.filter(data.toString().split('\n'),function(line){
          return line.startsWith('F');
            
           
        });
        filteredWithF.forEach(function(val){
            console.log(val);
        });
        */



        // Task 5
        console.log('Flowers name that length equal to 5 are :');
        let filteredLength=_.filter(data.toString().split('\n'),function(val){
            return val.length==5;

        });

        filteredLength.forEach(function(val){
            console.log(val);
        });
     
    }
})

